#!/usr/bin/env python3
"""
MOVA · Azure TTS Audio Generator
Генерує MP3 файли для всіх карток у vocab-data.js
"""

import os, sys, json, re, subprocess, time, pathlib
import urllib.request, urllib.error

# ── Конфігурація ──────────────────────────────────────────────
AZURE_KEY    = os.environ['AZURE_SPEECH_KEY']
AZURE_REGION = os.environ['AZURE_SPEECH_REGION']
TTS_URL      = f'https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1'

COURSE       = 'B2-Beruf'          # назва папки курсу
AUDIO_DIR    = pathlib.Path('audio') / COURSE
MANIFEST     = pathlib.Path('audio') / 'manifest.json'

# Голоси Azure Neural
VOICES = {
    'de': 'de-DE-KatjaNeural',
    'en': 'en-US-AriaNeural',
    'uk': 'uk-UA-PolinaNeural',
}

# Швидкості: суфікс → параметри
SPEEDS = {
    '100': {'rate': '1.0', 'word_pause': 0},    # нормальна, без пауз
    '070': {'rate': '0.7', 'word_pause': 300},  # повільна, 300ms між словами
}

# Поля бази для генерації
FIELDS = ['term', 'def']

# ── Завантаження бази з vocab-data.js через Node.js ──────────
def load_vocab():
    """Читає VOCAB і CATS з vocab-data.js через Node.js."""
    script = """
const fs = require('fs');
let code = fs.readFileSync('vocab-data.js', 'utf8');
// Виконуємо JS і дістаємо змінні
const fn = new Function(code + '\\nreturn JSON.stringify({VOCAB, CATS});');
process.stdout.write(fn());
"""
    result = subprocess.run(
        ['node', '-e', script],
        capture_output=True, text=True, check=True
    )
    data = json.loads(result.stdout)
    return data['VOCAB'], data['CATS']

# ── Маніфест ─────────────────────────────────────────────────
def load_manifest():
    if MANIFEST.exists():
        return json.loads(MANIFEST.read_text())
    return {}

def save_manifest(manifest):
    MANIFEST.parent.mkdir(exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False))

def manifest_key(card_id, field, lang, speed):
    return f'{COURSE}/{card_id}_{field}_{lang}_{speed}'

# ── SSML Builder ─────────────────────────────────────────────
def build_ssml(text, lang, speed_key):
    voice = VOICES[lang]
    cfg   = SPEEDS[speed_key]
    rate  = cfg['rate']
    pause = cfg['word_pause']

    # Вставляємо паузи між словами для повільної версії
    if pause > 0:
        words = text.split(' ')
        inner = f'<break time="{pause}ms"/>'.join(words)
    else:
        inner = text

    return f'''<speak version="1.0"
  xmlns="http://www.w3.org/2001/10/synthesis"
  xmlns:mstts="http://www.w3.org/2001/mstts"
  xml:lang="{lang}">
  <voice name="{voice}">
    <prosody rate="{rate}">{inner}</prosody>
  </voice>
</speak>'''

# ── Azure TTS Request ─────────────────────────────────────────
def synthesize(ssml):
    """Відправляє SSML на Azure TTS і повертає MP3 bytes."""
    req = urllib.request.Request(
        TTS_URL,
        data=ssml.encode('utf-8'),
        headers={
            'Ocp-Apim-Subscription-Key': AZURE_KEY,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
            'User-Agent': 'MOVA-TTS-Generator/1.0',
        },
        method='POST'
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.read()
    except urllib.error.HTTPError as e:
        print(f'  ✗ Azure error {e.code}: {e.read().decode()}')
        return None

# ── Main ──────────────────────────────────────────────────────
def main():
    print(f'\n🎙  MOVA Audio Generator  |  Course: {COURSE}')
    print(f'    Region: {AZURE_REGION}  |  Output: {AUDIO_DIR}\n')

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    vocab, cats = load_vocab()
    manifest    = load_manifest()

    total    = len(vocab) * len(FIELDS) * len(VOICES) * len(SPEEDS)
    done     = 0
    skipped  = 0
    errors   = 0
    generated = 0

    for card in vocab:
        card_id = card['id']
        for field in FIELDS:
            for lang in VOICES:
                text = card.get(field, {}).get(lang) or card.get(field, {}).get('de', '')
                if not text:
                    print(f'  ⚠  {card_id} {field} {lang}: empty text, skip')
                    skipped += 1
                    continue

                for speed_key in SPEEDS:
                    mkey = manifest_key(card_id, field, lang, speed_key)
                    fname = AUDIO_DIR / f'{card_id}_{field}_{lang}_{speed_key}.mp3'

                    done += 1

                    # Пропускаємо якщо вже є
                    if mkey in manifest and fname.exists():
                        skipped += 1
                        continue

                    print(f'  [{done}/{total}] {card_id} {field} {lang} {speed_key}x ... ', end='', flush=True)

                    ssml  = build_ssml(text, lang, speed_key)
                    audio = synthesize(ssml)

                    if audio:
                        fname.write_bytes(audio)
                        manifest[mkey] = True
                        generated += 1
                        print('✓')
                        # Зберігаємо маніфест після кожного файлу (збереження прогресу)
                        save_manifest(manifest)
                        time.sleep(0.15)  # rate limiting
                    else:
                        errors += 1
                        print('✗ error')

    print(f'\n✅  Done: {generated} generated, {skipped} skipped, {errors} errors')
    return 0 if errors == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
