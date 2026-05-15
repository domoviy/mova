#!/usr/bin/env python3
"""
MOVA · Azure TTS Audio Generator  v2
Читає vocab-data.json (або конвертує з vocab-data.js)
Генерує MP3 з Azure Neural TTS
"""

import os, sys, json, time, pathlib, re
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

# ── Конфігурація ──────────────────────────────────────────────
AZURE_KEY    = os.environ.get('AZURE_SPEECH_KEY','')
AZURE_REGION = os.environ.get('AZURE_SPEECH_REGION','westeurope')
TTS_URL      = f'https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1'

COURSE    = 'B2-Beruf'
AUDIO_DIR = pathlib.Path('audio') / COURSE
MANIFEST  = pathlib.Path('audio') / 'manifest.json'
WORKERS   = 1    # F0 tier: тільки 1 паралельний запит
DELAY_SEC = 0.6  # пауза між запитами щоб не попасти в rate limit
FIELDS    = ['term', 'short', 'def']

VOICES = {
    'de': 'de-DE-KatjaNeural',
    'en': 'en-US-AriaNeural',
    'uk': 'uk-UA-PolinaNeural',
}
SPEEDS = {
    '100': {'rate': '1.0', 'pause_ms': 0},
    '080': {'rate': '0.8', 'pause_ms': 300},
}

# ── Завантаження бази (JSON або JS) ───────────────────────────
def load_vocab():
    """Пробує vocab-data.json, потім парсить vocab-data.js regex."""

    # 1) JSON файл — найпростіше
    jp = pathlib.Path('vocab-data.json')
    if jp.exists():
        print('  ← vocab-data.json')
        data = json.loads(jp.read_text('utf-8'))
        return data['VOCAB']

    # 2) Парсимо vocab-data.js без Node.js
    jsp = pathlib.Path('vocab-data.js')
    if not jsp.exists():
        raise FileNotFoundError('Не знайдено vocab-data.json або vocab-data.js!')

    print('  ← vocab-data.js (regex parse)')
    src = jsp.read_text('utf-8')

    # Витягуємо масив VOCAB
    m = re.search(r'const\s+VOCAB\s*=\s*(\[[\s\S]*?\]);', src)
    if not m:
        raise ValueError('Не знайдено масив VOCAB у vocab-data.js')

    # Конвертуємо JS об'єктний літерал у JSON
    arr_js = m.group(1)

    # ── АВТОКОРЕКЦІЯ АПОСТРОФІВ ────────────────────────────────
    # Міняємо " або ' всередині українських слів на безпечний апостроф ’
    arr_js = re.sub(r'([а-яА-ЯёЁіІїЇєЄґҐ])"([а-яА-ЯёЁіІїЇєЄґҐ])', r'\1’\2', arr_js)
    arr_js = re.sub(r"([а-яА-ЯёЁіІїЇєЄґҐ])'([а-яА-ЯёЁіІїЇєЄґҐ])", r'\1’\2', arr_js)
    
    # Міняємо ' всередині англійських слів (company's, don't) на безпечний апостроф ’
    arr_js = re.sub(r"([a-zA-Z])'([a-zA-Z])", r'\1’\2', arr_js)

    # Прибираємо JS коментарі
    arr_js = re.sub(r'//[^\n]*', '', arr_js)
    
    # Тимчасово прибираємо екранування, якщо воно вже було, щоб не дублювати його
    arr_js = arr_js.replace('\\"', '"')
    
    # Одинарні лапки → подвійні (безпечно обгортаємо рядки, екрануючи внутрішні лапки)
    arr_js = re.sub(r"'([^']*)'", lambda m: json.dumps(m.group(1).replace('"', '\\"')), arr_js)
    
    # JS ключі без лапок → з лапками (чітко за межею слова, щоб не зламати текст)
    arr_js = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', arr_js)
    
    # Кінцеві коми перед } або ]
    arr_js = re.sub(r',\s*([}\]])', r'\1', arr_js)

    try:
        vocab = json.loads(arr_js)
    except json.JSONDecodeError as e:
        print(f'  ✗ JSON parse error: {e}')
        # Виводимо проблемний шматок коду навколо помилки, щоб легше було зрозуміти де збій
        pos = e.pos
        start = max(0, pos - 40)
        end = min(len(arr_js), pos + 40)
        print(f'  Контекст помилки: ... {arr_js[start:pos]}🔴[ПОМИЛКА ТУТ] {arr_js[pos:end]} ...')
        print(f'  Спробуйте створити vocab-data.json')
        raise

    return vocab

# ── Маніфест ─────────────────────────────────────────────────
lock = threading.Lock()

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

# ── Azure запит ───────────────────────────────────────────────
def synthesize(ssml, retries=3):
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
                time.sleep(DELAY_SEC)  # пауза після успіху
                return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = int(e.headers.get('Retry-After', 10))
                print(f'\n  ⏳ 429 Rate limit, wait {wait}s...', flush=True)
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
    card, field, lang, speed = task
    cid  = card['id']
    text = (card.get(field) or {}).get(lang) or (card.get(field) or {}).get('de','')

    if not text.strip():
        return 'skip', f'{cid}_{field}_{lang}_{speed}'

    mkey  = f'{COURSE}/{cid}_{field}_{lang}_{speed}'
    fpath = AUDIO_DIR / f'{cid}_{field}_{lang}_{speed}.mp3'

    with lock:
        if mkey in manifest and fpath.exists():
            return 'skip', mkey

    audio = synthesize(build_ssml(text, lang, speed))
    if not audio:
        return 'err', mkey

    fpath.write_bytes(audio)
    with lock:
        manifest[mkey] = True
        save_manifest(manifest)
    return 'ok', mkey

# ── Main ─────────────────────────────────────────────────────
def main():
    print(f'\n🎙  MOVA TTS Generator v2', flush=True)
    print(f'    Region: {AZURE_REGION} | Course: {COURSE} | Workers: {WORKERS}', flush=True)

    if not AZURE_KEY:
        print('✗ AZURE_SPEECH_KEY не встановлений!', flush=True); return 1

    # ── Тест з'єднання з Azure ────────────────────────────────
    print('\n🔌 Тест з\'єднання з Azure...', flush=True)
    test_ssml = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="de"><voice name="de-DE-KatjaNeural"><prosody rate="1.0">Test</prosody></voice></speak>'
    test_audio = synthesize(test_ssml)
    if test_audio:
        print(f'   ✓ Azure OK — отримано {len(test_audio)} bytes', flush=True)
    else:
        print('   ✗ Azure НЕДОСТУПНИЙ — перевірте KEY і REGION!', flush=True)
        return 1

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    print(f'   ✓ Папка {AUDIO_DIR} готова', flush=True)

    print('\n📖 Завантаження бази...', flush=True)
    try:
        vocab = load_vocab()
    except Exception as e:
        print(f'   ✗ Помилка завантаження бази: {e}', flush=True)
        return 1

    manifest = load_manifest()
    print(f'   ✓ Карток: {len(vocab)} | В маніфесті: {len(manifest)}', flush=True)

    tasks = [
        (card, field, lang, speed)
        for card  in vocab
        for field in FIELDS
        for lang  in VOICES
        for speed in SPEEDS
    ]

    total   = len(tasks)
    already = sum(1 for c,f,l,s in tasks
                  if f'{COURSE}/{c["id"]}_{f}_{l}_{s}' in manifest
                  and (AUDIO_DIR/f'{c["id"]}_{f}_{l}_{s}.mp3').exists())

    print(f'\n🎯 Завдань: {total} | Вже є: {already} | Нових: {total-already}', flush=True)

    if total == already:
        print('\n✅ Всі файли вже згенеровані!', flush=True); return 0

    print(f'\n▶  Генерація ({WORKERS} паралельних запитів)...\n', flush=True)

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