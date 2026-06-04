#!/usr/bin/env python3
"""
MOVA · Azure TTS Audio Generator  v2.5 (VOCAB + SPRACHBAUSTEINE with Blank Fill)
Читає B2-Beruf.json (або конвертує з B2-Beruf.js)
Генерує MP3 з Azure Neural TTS для VOCAB та SPRACHBAUSTEINE.
Для SPRACHBAUSTEINE sentence підставляє answer замість {{BLANK}} та генерує лише de @ 100.
"""

import os, sys, json, time, pathlib, re
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

# ── Конфігурація ──────────────────────────────────────────────
AZURE_KEY    = os.environ.get('AZURE_SPEECH_KEY','')
AZURE_REGION = os.environ.get('AZURE_SPEECH_REGION','westeurope')
TTS_URL      = f'https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1'

COURSE     = 'B2-Beruf'
AUDIO_BASE = pathlib.Path('audio') / COURSE   # audio/B2-Beruf/
MANIFEST   = pathlib.Path('audio') / 'manifest.json'

# ДИНАМІЧНІ ЛІМІТИ (читаються з GitHub Actions)
WORKERS   = int(os.environ.get('TTS_WORKERS', '1'))
DELAY_SEC = float(os.environ.get('TTS_DELAY', '1.2'))
COMMIT_EVERY_X_FILES = int(os.environ.get('TTS_COMMIT_LIMIT', '3'))  # 3 для Free, 15 для Turbo

# Конфігурація полів для різних типів даних
CONFIG_BY_TYPE = {
    'VOCAB': {
        'fields': ['term', 'short', 'def'],
        'languages': ['de', 'en', 'uk']
    },
    'SPRACHBAUSTEINE': {
        'fields': ['sentence', 'expl'],
        'languages': ['de', 'en', 'uk']
    }
}

VOICES = {
    'de': 'de-DE-KatjaNeural',
    'en': 'en-US-AriaNeural',
    'uk': 'uk-UA-PolinaNeural',
}
SPEEDS = {
    '100': {'rate': '1.0', 'pause_ms': 0},
    '080': {'rate': '0.8', 'pause_ms': 300},
}

lock = threading.Lock()
NEW_FILES_COUNT = 0

# ── Завантаження бази (JSON або JS) ───────────────────────────
def load_data():
    """Пробує B2-Beruf.json, потім парсить B2-Beruf.js regex. Повертає весь об'єкт."""
    jp = pathlib.Path('B2-Beruf.json')
    if jp.exists():
        print('  ← B2-Beruf.json')
        return json.loads(jp.read_text('utf-8'))

    jsp = pathlib.Path('B2-Beruf.js')
    if not jsp.exists():
        raise FileNotFoundError('Не знайдено B2-Beruf.json або B2-Beruf.js!')

    print('  ← B2-Beruf.js (regex parse)')
    src = jsp.read_text('utf-8')

    data = {}
    for block_type in ['VOCAB', 'SPRACHBAUSTEINE']:
        m = re.search(rf'const\s+{block_type}\s*=\s*(\[[\s\S]*?\]);', src)
        if m:
            arr_js = m.group(1)
            # Автокорекція апострофів
            arr_js = re.sub(r'([а-яА-ЯёЁіІїЇєЄґҐ])"([а-яА-ЯёЁіІїЇєЄґҐ])', r'\1’\2', arr_js)
            arr_js = re.sub(r"([а-яА-ЯёЁіІїЇєЄґҐ])'([а-яА-ЯёЁіІїЇєЄґҐ])", r'\1’\2', arr_js)
            arr_js = re.sub(r"([a-zA-Z])'([a-zA-Z])", r'\1’\2', arr_js)

            arr_js = re.sub(r'//[^\n]*', '', arr_js)
            arr_js = arr_js.replace('\\"', '"')
            arr_js = re.sub(r"'([^']*)'", lambda m: json.dumps(m.group(1).replace('"', '\\"')), arr_js)
            arr_js = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', arr_js)
            arr_js = re.sub(r',\s*([}\]])', r'\1', arr_js)

            try:
                data[block_type] = json.loads(arr_js)
            except json.JSONDecodeError as e:
                print(f'  ✗ JSON parse error у блоці {block_type}: {e}')
                pos = e.pos
                start = max(0, pos - 40)
                end = min(len(arr_js), pos + 40)
                print(f'  Контекст помилки: ... {arr_js[start:pos]}🔴[ПОМИЛКА ТУТ] {arr_js[pos:end]} ...')
                raise
            
    if not data.get('VOCAB') and not data.get('SPRACHBAUSTEINE'):
        raise ValueError('Не знайдено масиви VOCAB або SPRACHBAUSTEINE у файлі.')

    return data

# ── Маніфест ─────────────────────────────────────────────────
def load_manifest():
    if MANIFEST.exists():
        try: return json.loads(MANIFEST.read_text('utf-8'))
        except: pass
    return {}

def save_manifest(m):
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(m, ensure_ascii=False, indent=2))

# ── SSML ─────────────────────────────────────────────────────
def build_ssml(text, lang, speed_key):
    voice = VOICES[lang]
    cfg   = SPEEDS[speed_key]
    rate  = cfg['rate']
    pm    = cfg['pause_ms']

    body = f'<break time="{pm}ms"/>'.join(text.split(' ')) if pm > 0 else text

    return (
        f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="{lang}">'
        f'<voice name="{voice}"><prosody rate="{rate}">{body}</prosody></voice></speak>'
    )

# ── Azure запит (з автопереходом на безкоштовний режим) ───────
def synthesize(ssml, retries=3):
    global WORKERS, DELAY_SEC, COMMIT_EVERY_X_FILES
    
    for attempt in range(retries):
        req = urllib.request.Request(
            TTS_URL,
            data=ssml.encode('utf-8'),
            headers={
                'Ocp-Apim-Subscription-Key': AZURE_KEY,
                'Content-Type': 'application/ssml+xml',
                'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
                'User-Agent': 'MOVA/2.0',
            },
            method='POST'
        )
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                data = r.read()
                time.sleep(DELAY_SEC)
                return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                if WORKERS > 1 or DELAY_SEC < 0.6:
                    with lock:
                        if WORKERS > 1 or DELAY_SEC < 0.6:
                            print('\n  ⚠️ [Azure F0 Detected] Зловлено ліміт 429! Переходжу на повільний режим та ліміт сейвів = 3...', flush=True)
                            WORKERS = 1
                            DELAY_SEC = 1.2
                            COMMIT_EVERY_X_FILES = 3
                
                wait = int(e.headers.get('Retry-After', 10))
                print(f'\n  ⏳ 429 Rate limit, очікування {wait}s перед повтором...', flush=True)
                time.sleep(wait)
            else:
                print(f'\n  ✗ HTTP {e.code}: {e.read().decode()[:80]}', flush=True)
                return None
        except Exception as e:
            print(f'\n  ✗ Attempt {attempt+1}: {e}', flush=True)
            time.sleep(3)
    return None

# ── Завдання ─────────────────────────────────────────────────
def process(task, manifest):
    global NEW_FILES_COUNT
    block_type, card, field, lang, speed = task
    cid  = card['id']
    
    # Отримуємо текст для озвучки
    text = (card.get(field) or {}).get(lang) or (card.get(field) or {}).get('de','')

    # Специфічна логіка для SPRACHBAUSTEINE -> sentence
    if block_type == 'SPRACHBAUSTEINE' and field == 'sentence':
        # 1. Дозволяємо генерувати тільки для німецької мови та швидкості 100
        if lang != 'de' or speed != '100':
            return 'skip', f'{cid}_{field}_{lang}_{speed} (filtered: only de @ 100 for sbs sentence)'
        
        # 2. Замінюємо {{BLANK}} на значення answer + пробіл
        answer_text = card.get('answer', '')
        if '{{BLANK}}' in text and answer_text:
            text = text.replace('{{BLANK}}', f'{answer_text} ')

    if not text or not text.strip():
        return 'skip', f'{cid}_{field}_{lang}_{speed}'

    # Визначення папки категорії
    if block_type == 'SPRACHBAUSTEINE':
        cat = 'sbs'
    else:
        cat = cid.split('_')[0]
        
    fname = f'{cid}_{field}_{lang}_{speed}'
    mkey  = f'{COURSE}/{lang}/{speed}/{cat}/{fname}'
    fpath = AUDIO_BASE / lang / speed / cat / f'{fname}.mp3'

    with lock:
        if mkey in manifest and fpath.exists():
            return 'skip', mkey

    audio = synthesize(build_ssml(text, lang, speed))
    if not audio:
        return 'err', mkey

    fpath.parent.mkdir(parents=True, exist_ok=True)
    fpath.write_bytes(audio)
    
    with lock:
        manifest[mkey] = True
        save_manifest(manifest)
        NEW_FILES_COUNT += 1
        
        # ── ДИНАМІЧНЕ АВТОЗБЕРЕЖЕННЯ (PUSH) В GIT ─────────────────
        if NEW_FILES_COUNT >= COMMIT_EVERY_X_FILES:
            print(f'\n📦 [Auto-Sync] Накопичилося {NEW_FILES_COUNT} нових файлів. Фіксуємо прогрес у GitHub...', flush=True)
            os.system('git add audio/')
            if os.system('git diff --staged --quiet') != 0:
                os.system(f'git commit -m "🎙 TTS Auto-Save: проміжне збереження пакету з {NEW_FILES_COUNT} файлів [skip ci]"')
                os.system('git push')
            NEW_FILES_COUNT = 0

    return 'ok', mkey

# ── Main ─────────────────────────────────────────────────────
def main():
    print(f'\n🎙  MOVA TTS Generator v2.5 (VOCAB + SPRACHBAUSTEINE with Blank Fill)', flush=True)
    print(f'    Region: {AZURE_REGION} | Course: {COURSE}', flush=True)
    print(f'    Начальні Потоки (Workers): {WORKERS} | Пауза: {DELAY_SEC}s | Автосейв кожні: {COMMIT_EVERY_X_FILES} файлів', flush=True)

    if not AZURE_KEY:
        print('✗ AZURE_SPEECH_KEY не встановлений!', flush=True); return 1

    print('\n🔌 Тест з\'єднання з Azure...', flush=True)
    test_ssml = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="de"><voice name="de-DE-KatjaNeural"><prosody rate="1.0">Test</prosody></voice></speak>'
    test_audio = synthesize(test_ssml)
    if test_audio:
        print(f'   ✓ Azure OK — отримано {len(test_audio)} bytes', flush=True)
    else:
        print('   ✗ Azure НЕДОСТУПНИЙ — перевірте KEY і REGION!', flush=True)
        return 1

    AUDIO_BASE.mkdir(parents=True, exist_ok=True)

    print('\n📖 Завантаження бази...', flush=True)
    try:
        db_data = load_data()
    except Exception as e:
        print(f'   ✗ Помилка завантаження бази: {e}', flush=True)
        return 1

    manifest = load_manifest()
    
    tasks = []
    status_info = []
    
    for block_type, config in CONFIG_BY_TYPE.items():
        vocab_list = db_data.get(block_type, [])
        status_info.append(f'{block_type}: {len(vocab_list)}')
        
        for card in vocab_list:
            for field in config['fields']:
                for lang in config['languages']:
                    for speed in SPEEDS:
                        # Відсікаємо непотрібні комбінації для 'sentence' з SPRACHBAUSTEINE ще на етапі створення завдань (необов'язково, але зменшить total)
                        if block_type == 'SPRACHBAUSTEINE' and field == 'sentence' and (lang != 'de' or speed != '100'):
                            continue
                        tasks.append((block_type, card, field, lang, speed))

    print(f'   ✓ Завантажено картки -> {" | ".join(status_info)} | В маніфесті: {len(manifest)}', flush=True)

    total = len(tasks)
    
    already = 0
    for block_type, c, f, l, s in tasks:
        cat = 'sbs' if block_type == 'SPRACHBAUSTEINE' else c['id'].split('_')[0]
        fname = f'{c["id"]}_{f}_{l}_{s}'
        mkey = f'{COURSE}/{l}/{s}/{cat}/{fname}'
        fpath = AUDIO_BASE / l / s / cat / f'{fname}.mp3'
        if mkey in manifest and fpath.exists():
            already += 1

    print(f'\n🎯 Завдань: {total} | Вже є: {already} | Нових: {total-already}', flush=True)

    if total == already:
        print('\n✅ Всі файли вже згенеровані!', flush=True); return 0

    print(f'\n▶  Генерація...\n', flush=True)

    done = skipped = errors = generated = 0

    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = {pool.submit(process, t, manifest): t for t in tasks}
        for fut in as_completed(futures):
            done += 1
            status, mkey = fut.result()
            if   status == 'ok':   generated += 1; print(f'  ✓ [{done}/{total}] {mkey}', flush=True)
            elif status == 'skip': skipped   += 1; print(f'  · [{done}/{total}] skip {mkey}', flush=True)
            else:                  errors    += 1; print(f'  ✗ [{done}/{total}] ERROR {mkey}', flush=True)

    print(f'\n{"✅" if errors==0 else "⚠️"}  Готово: +{generated} нових, {skipped} пропущено, {errors} помилок', flush=True)
    return 0 if errors == 0 else 1

if __name__ == '__main__':
    sys.exit(main())