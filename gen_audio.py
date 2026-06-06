#!/usr/bin/env python3
"""
MOVA · Azure TTS Audio Generator  v2.8.5 (Dynamic AUDIO_CONFIG with Safe SSML Tags)
Читає B2-Beruf.json (або конвертує з B2-Beruf.js з підтримкою const AUDIO_CONFIG)
Генерує MP3 з Azure Neural TTS для VOCAB та SPRACHBAUSTEINE відповідно до конфігу швидкостей мов.
Підтримує мови: de, en, uk, ru. Безпечно комбінує <br> паузи та <b> наголоси без руйнування XML.
"""

import os, sys, json, time, pathlib, re
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

# ── Конфігурація ──────────────────────────────────────────────
AZURE_KEY    = os.environ.get('AZURE_SPEECH_KEY','')
AZURE_REGION = os.environ.get('AZURE_SPEECH_REGION','')  # Повністю секретний параметр без дефолтів
TTS_URL      = f'https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1'

COURSE     = 'B2-Beruf'
AUDIO_BASE = pathlib.Path('audio') / COURSE   # audio/B2-Beruf/
MANIFEST   = pathlib.Path('audio') / 'manifest.json'

# ДИНАМІЧНІ ЛІМІТИ (читаються з GitHub Actions)
WORKERS   = int(os.environ.get('TTS_WORKERS', '1'))
DELAY_SEC = float(os.environ.get('TTS_DELAY', '1.2'))
COMMIT_EVERY_X_FILES = int(os.environ.get('TTS_COMMIT_LIMIT', '3'))

# Конфігурація полів для різних типів даних
CONFIG_BY_TYPE = {
    'VOCAB': {
        'fields': ['term', 'short', 'def'],
        'languages': ['de', 'en', 'uk', 'ru']
    },
    'SPRACHBAUSTEINE': {
        'fields': ['sentence', 'expl'],
        'languages': ['de', 'en', 'uk', 'ru']
    }
}

# Словник голосів з підтримкою ru-RU
VOICES = {
    'de': 'de-DE-KatjaNeural',
    'en': 'en-US-AriaNeural',
    'uk': 'uk-UA-PolinaNeural',
    'ru': 'ru-RU-SvetlanaNeural',
}
SPEEDS = {
    '100': {'rate': '1.0'},
    '080': {'rate': '0.8'},
}

lock = threading.Lock()
NEW_FILES_COUNT = 0

# ── Допоміжні функції ─────────────────────────────────────────
def clean_text(text):
    """
    Замінює <br> на справжні ентери (\\n), нормалізує пробіли,
    а теги <b> перетворює на тимчасові маркерні теги <bold> для подальшого SSML-наголосу.
    """
    if not text:
        return ""
    
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<b\s*>', '<bold>', text, flags=re.IGNORECASE)
    text = re.sub(r'</\s*b\s*>', '</bold>', text, flags=re.IGNORECASE)
    
    lines = text.split('\n')
    cleaned_lines = []
    for line in lines:
        line_cleaned = re.sub(r'[ \t]+', ' ', line).strip()
        if line_cleaned:  
            cleaned_lines.append(line_cleaned)
            
    return '\n'.join(cleaned_lines)

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
    
    m_cfg = re.search(r'const\s+AUDIO_CONFIG\s*=\s*(\{[\s\S]*?\});', src)
    if m_cfg:
        cfg_js = m_cfg.group(1)
        cfg_js = re.sub(r'//[^\n]*', '', cfg_js)
        cfg_js = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', cfg_js)
        cfg_js = cfg_js.replace("'", '"')
        try:
            data['AUDIO_CONFIG'] = json.loads(cfg_js)
            print('  ✓ Успішно завантажено AUDIO_CONFIG з JS')
        except Exception as e:
            print(f'  ⚠️ Не вдалося розпарсити AUDIO_CONFIG: {e}')

    for block_type in ['VOCAB', 'SPRACHBAUSTEINE']:
        m = re.search(rf'const\s+{block_type}\s*=\s*(\[[\s\S]*?\]);', src)
        if m:
            arr_js = m.group(1)
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

    # Перетворюємо наші маркери <bold> на офіційні SSML-теги наголосу Azure TTS
    ssml_body = text.replace('<bold>', '<emphasis level="moderate">').replace('</bold>', '</emphasis>')

    # ВИПРАВЛЕНО у v2.8.5: Більше немає деструктивного розділення по пробілах (.split(' ')),
    # яке руйнувало теги <emphasis> та викликало помилку HTTP 400 на словах з літерою "a" (app, Verpackung).
    return (
        f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="{lang}">'
        f'<voice name="{voice}"><prosody rate="{rate}">{ssml_body}</prosody></voice></speak>'
    )

# ── Azure запит ───────────────────────────────────────────────
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
                            print('\n  ⚠️ [Azure F0] Перехід на повільний режим...', flush=True)
                            WORKERS = 1
                            DELAY_SEC = 1.2
                            COMMIT_EVERY_X_FILES = 3
                wait = int(e.headers.get('Retry-After', 10))
                time.sleep(wait)
            else:
                return f"HTTP {e.code}: {e.reason}"
        except Exception as e:
            time.sleep(3)
            if attempt == retries - 1:
                return str(e)
    return "Unknown Network Error"

# ── Завдання ─────────────────────────────────────────────────
def process(task, manifest):
    global NEW_FILES_COUNT
    block_type, card, field, lang, speed = task
    cid  = card['id']
    
    text = (card.get(field) or {}).get(lang) or (card.get(field) or {}).get('de','')

    if block_type == 'SPRACHBAUSTEINE' and field == 'sentence':
        if lang != 'de' or speed != '100':
            return 'skip', f'{cid}_{field}_{lang}_{speed}', None
        
        answer_text = (card.get('answer') or {}).get('de', '')
        if '{{BLANK}}' in text and answer_text:
            text = text.replace('{{BLANK}}', f'{answer_text} ')

    text = clean_text(text)

    if not text or not text.strip():
        return 'skip', f'{cid}_{field}_{lang}_{speed}', None

    cat = 'sbs' if block_type == 'SPRACHBAUSTEINE' else cid.split('_')[0]
    fname = f'{cid}_{field}_{lang}_{speed}'
    mkey  = f'{COURSE}/{lang}/{speed}/{cat}/{fname}'
    fpath = AUDIO_BASE / lang / speed / cat / f'{fname}.mp3'

    with lock:
        if mkey in manifest and fpath.exists():
            return 'skip', mkey, None

    result = synthesize(build_ssml(text, lang, speed))
    
    if isinstance(result, str):
        return 'err', mkey, result

    if not result:
        return 'err', mkey, "Empty response from server"

    fpath.parent.mkdir(parents=True, exist_ok=True)
    fpath.write_bytes(result)
    
    with lock:
        manifest[mkey] = True
        save_manifest(manifest)
        NEW_FILES_COUNT += 1
        
        if NEW_FILES_COUNT >= COMMIT_EVERY_X_FILES:
            print(f'\n📦 [Auto-Sync] Накопичилося {NEW_FILES_COUNT} нових файлів. Фіксуємо у Git...', flush=True)
            os.system('git add audio/')
            if os.system('git diff --staged --quiet') != 0:
                os.system(f'git commit -m "🎙 TTS Auto-Save: збереження пакету з {NEW_FILES_COUNT} файлів [skip ci]"')
                os.system('git push')
            NEW_FILES_COUNT = 0

    return 'ok', mkey, None

# ── Main ─────────────────────────────────────────────────────
def main():
    print(f'\n🎙  MOVA TTS Generator v2.8.5 (Dynamic AUDIO_CONFIG with Safe SSML Tags)', flush=True)

    if not AZURE_KEY:
        print('✗ AZURE_SPEECH_KEY не встановлений!', flush=True); return 1
    if not AZURE_REGION:
        print('✗ AZURE_SPEECH_REGION не встановлений!', flush=True); return 1

    try:
        db_data = load_data()
    except Exception as e:
        print(f'   ✗ Помилка завантаження бази: {e}', flush=True); return 1

    manifest = load_manifest()
    
    audio_config = db_data.get('AUDIO_CONFIG', {})
    if not audio_config:
        print('  ⚠️ AUDIO_CONFIG не знайдено в базі. Використовую дефолт: 100 для всіх мов.')

    tasks = []
    status_info = []
    
    for block_type, config in CONFIG_BY_TYPE.items():
        vocab_list = db_data.get(block_type, [])
        status_info.append(f'{block_type}: {len(vocab_list)}')
        
        for card in vocab_list:
            for field in config['fields']:
                for lang in config['languages']:
                    
                    if lang not in audio_config:
                        continue
                        
                    allowed_speeds = audio_config[lang]
                    
                    for speed in allowed_speeds:
                        if speed not in SPEEDS:
                            continue
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

    print(f'\n🎯 Завдань за поточним конфігом: {total} | Вже є: {already} | Необхідно згенерувати: {total-already}', flush=True)

    if total == already:
        print('\n✅ Все синхронізовано згідно з AUDIO_CONFIG!', flush=True); return 0

    done = skipped = errors_count = generated = 0
    error_details = []

    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = {pool.submit(process, t, manifest): t for t in tasks}
        for fut in as_completed(futures):
            done += 1
            status, mkey, err_msg = fut.result()
            if   status == 'ok':   
                generated += 1
                print(f'  ✓ [{done}/{total}] {mkey}', flush=True)
            elif status == 'skip': 
                skipped += 1
                print(f'  · [{done}/{total}] skip {mkey}', flush=True)
            else:                  
                errors_count += 1
                error_details.append((mkey, err_msg))
                print(f'  ✗ [{done}/{total}] ERROR {mkey} -> {err_msg}', flush=True)

    # Фінальний звіт
    print(f'\n==================================================', flush=True)
    print(f'Готово: +{generated} нових, {skipped} пропущено, {errors_count} помилок', flush=True)
    
    if error_details:
        print(f'\n🚨 ДЕТАЛІ ОПИСУ ПОМИЛОК:', flush=True)
        for idx, (mkey, err_msg) in enumerate(error_details, 1):
            print(f'  {idx}. Файл: {mkey}\n     Суть помилки: {err_msg}\n', flush=True)
        print(f'==================================================', flush=True)
        return 1
        
    print(f'==================================================', flush=True)
    return 0

if __name__ == '__main__':
    sys.exit(main())