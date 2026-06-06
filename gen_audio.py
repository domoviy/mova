#!/usr/bin/env python3
"""
MOVA · Azure TTS Audio Generator  v2.8 (Dynamic AUDIO_CONFIG with Multi-lang support)
Читає B2-Beruf.json (або конвертує з B2-Beruf.js з підтримкою const AUDIO_CONFIG)
Генерує MP3 з Azure Neural TTS для VOCAB та SPRACHBAUSTEINE відповідно до конфігу швидкостей мов.
Підтримує мови: de, en, uk, ru.
"""

import os, sys, json, time, pathlib, re
import urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

# ── Конфігурація ──────────────────────────────────────────────
AZURE_KEY    = os.environ.get('AZURE_SPEECH_KEY','')
AZURE_REGION = os.environ.get('AZURE_SPEECH_REGION','')
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
    '100': {'rate': '1.0', 'pause_ms': 0},
    '080': {'rate': '0.8', 'pause_ms': 300},
}

lock = threading.Lock()
NEW_FILES_COUNT = 0

# ── Допоміжні функції ─────────────────────────────────────────
def clean_text(text):
    """Видаляє HTML-теги форматування <br>, <b>, </b> та нормалізує пробіли."""
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'</?b>', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

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
    
    # Парсимо AUDIO_CONFIG з JS файлу, якщо він там є
    m_cfg = re.search(r'const\s+AUDIO_CONFIG\s*=\s*(\{[\s\S]*?\});', src)
    if m_cfg:
        cfg_js = m_cfg.group(1)
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
            
    if not data.get('VOCAB') and not data.get