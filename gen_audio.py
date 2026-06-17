#!/usr/bin/env python3
"""
MOVA · TTS Audio Generator (Edge TTS & Azure REST Dual Engine)
Повністю синхронізовано зі структурою manifest.json:
Шаблон ключа/шляху: COURSE/lang/rate/cat_lower/id_field_lang_rate
Значення в маніфесті: true
"""

import os
import sys
import json
import time
import pathlib
import re
import asyncio
import subprocess
import urllib.request
import urllib.error

# Спроба імпортувати edge-tts
try:
    import edge_tts
except ImportError:
    edge_tts = None

# ── Конфігурація ──────────────────────────────────────────────
TTS_ENGINE = os.environ.get("TTS_ENGINE", "edge").lower()  # 'edge' або 'azure'
WORKERS = int(os.environ.get('TTS_WORKERS', '1'))
DELAY_SEC = float(os.environ.get('TTS_DELAY', '1.2'))
COMMIT_LIMIT = int(os.environ.get('TTS_COMMIT_LIMIT', '3'))

AZURE_KEY = os.environ.get('AZURE_SPEECH_KEY', '')
AZURE_REGION = os.environ.get('AZURE_SPEECH_REGION', '')
TTS_URL = f'https://{AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1'

COURSE = 'B2-Beruf'
AUDIO_BASE = pathlib.Path('audio') / COURSE
MANIFEST = pathlib.Path('audio') / 'manifest.json'

# ── Мапінг голосів згідно з вашою специфікацією ─────────────────
VOICE_MAPPING = {
    "vocab": {
        "term":  {"de": "de-DE-KatjaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-US-AriaNeural",        "ru": "ru-RU-SvetlanaNeural"},
        "short": {"de": "de-DE-ConradNeural", "uk": "uk-UA-OstapNeural",  "en": "en-GB-RyanNeural",        "ru": "ru-RU-DmitryNeural"},
        "def":   {"de": "de-DE-KillianNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-ChristopherNeural", "ru": "ru-RU-DmitryNeural"}
    },
    "sprachbau": {
        "sentence":    {"de": "de-DE-ConradNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-GuyNeural",   "ru": "ru-RU-DmitryNeural"},
        "answer":      {"de": "de-DE-AmalaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"},
        "explanation": {"de": "de-DE-AmalaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"}
    },
    "redemittel": {
        "question": {"de": "de-DE-KatjaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-US-JennyNeural",       "ru": "ru-RU-SvetlanaNeural"},
        "answer":   {"de": "de-DE-KillianNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-ChristopherNeural", "ru": "ru-RU-DmitryNeural"}
    }
}

def get_voice_id(category, sub_type, lang):
    try:
        return VOICE_MAPPING[category][sub_type][lang]
    except KeyError:
        fallbacks = {"de": "de-DE-KatjaNeural", "uk": "uk-UA-PolinaNeural", "en": "en-US-AriaNeural", "ru": "ru-RU-SvetlanaNeural"}
        return fallbacks.get(lang, "de-DE-KatjaNeural")

# ── Утиліти очищення тексту ───────────────────────────────────
def clean_text(text):
    if not text:
        return ""
    if isinstance(text, list):
        text = ", ".join(text)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = text.replace('/', ' ')
    return re.sub(r'\s+', ' ', text).strip()

def load_js_database(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    config = {"de": ["100", "080"], "en": ["100"], "uk": ["100"], "ru": ["100"]}
    config_match = re.search(r'AUDIO_CONFIG\s*=\s*(\{.*?\})', content, re.DOTALL)
    if config_match:
        try:
            config = json.loads(config_match.group(1).replace("'", '"'))
        except: pass

    raw_items = []
    blocks = re.findall(r'(?:var|let|const|export)\s+(\w+)\s*=\s*(\[.*?\])\s*(;|\n\n|var|let|const|export|$)', content, re.DOTALL)
    
    for var_name, array_content, _ in blocks:
        if var_name in ["CATS", "LESSONS"]:
            continue

        clean_array = re.sub(r'//.*', '', array_content)
        clean_array = re.sub(r'/\*.*?\*/', '', clean_array, flags=re.DOTALL)
        clean_array = re.sub(r',\s*([\]\}])', r'\1', clean_array)
        
        try:
            items = json.loads(clean_array)
            if isinstance(items, list):
                for item in items:
                    if isinstance(item, dict) and "id" in item:
                        item["_fallback_var"] = var_name
                        raw_items.append(item)
        except:
            pass
            
    return config, raw_items

# ── Двигуни генерації ─────────────────────────────────────────
async def tts_edge(text, voice, rate_str, output_path):
    if not edge_tts:
        raise RuntimeError("Пакет 'edge-tts' не встановлено.")
    rate_val = int(rate_str)
    sign = "+" if rate_val >= 100 else "-"
    diff = abs(rate_val - 100)
    edge_rate = f"{sign}{diff}%"
    
    communicate = edge_tts.Communicate(text, voice, rate=edge_rate)
    await communicate.save(output_path)

def tts_azure_rest(text, voice, rate_str, output_path):
    if not AZURE_KEY or not AZURE_REGION:
        raise ValueError("Відсутні ключі AZURE_SPEECH_KEY або AZURE_SPEECH_REGION!")
    
    rate_float = float(rate_str) / 100.0
    ssml_text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    
    ssml = f"""<speak version='1.0' xml:lang='de-DE'>
        <voice name='{voice}'>
            <prosody rate='{rate_float:.2f}'>{ssml_text}</prosody>
        </voice>
    </speak>"""
    
    headers = {
        'Ocp-Apim-Subscription-Key': AZURE_KEY,
        'Content-Type': 'application/ssml+xml',
        'User-Agent': 'MOVA_TTS_Bot',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3'
    }
    
    req = urllib.request.Request(TTS_URL, data=ssml.encode('utf-8'), headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
    except urllib.error.HTTPError as e:
        err_body = e.read().decode('utf-8', errors='ignore')
        raise RuntimeError(f"Azure HTTP Error {e.code}: {err_body}")

# ── Git автоматизація ─────────────────────────────────────────
def git_commit_and_push(count):
    try:
        subprocess.run(["git", "add", "audio/"], check=True)
        status = subprocess.run(["git", "diff", "--staged", "--quiet"])
        if status.returncode != 0:
            msg = f"🎙 TTS Audio Update: +{count} files [skip ci]"
            subprocess.run(["git", "commit", "-m", msg], check=True)
            subprocess.run(["git", "push"], check=True)
            print(f"--- [Git Bot] Збережено проміжну пачку з {count} файлів ---", flush=True)
    except Exception as e:
        print(f"Git commit error: {e}", flush=True)

# ── Основний асинхронний пайплайн ─────────────────────────────
async def worker_task(task, semaphore, stats):
    # Шлях створення файлу: audio/B2-Beruf/lang/rate/cat_lower/filename
    file_dir = AUDIO_BASE / task["lang"] / task["rate"] / task["cat_folder"]
    file_dir.mkdir(parents=True, exist_ok=True)
    file_path = file_dir / task["filename"]
    
    voice = get_voice_id(task["internal_cat"], task["sub"], task["lang"])
    cleaned = clean_text(task["text"])
    if not cleaned:
        return

    async with semaphore:
        try:
            print(f"[{TTS_ENGINE.upper()}] -> {task['mkey']} -> Голос: {voice} -> '{cleaned[:30]}...'", flush=True)
            
            if TTS_ENGINE == "edge":
                await tts_edge(cleaned, voice, task["rate"], file_path)
            else:
                await asyncio.to_thread(tts_azure_rest, cleaned, voice, task["rate"], file_path)
                
            stats["generated"] += 1
            stats["manifest_updates"][task["mkey"]] = True
            
            if DELAY_SEC > 0:
                await asyncio.sleep(DELAY_SEC)
                
            if stats["generated"] > 0 and stats["generated"] % COMMIT_LIMIT == 0:
                update_manifest_file(stats["manifest_updates"])
                git_commit_and_push(COMMIT_LIMIT)
                stats["manifest_updates"].clear()
                
        except Exception as e:
            print(f"❌ Помилка генерації для {task['mkey']}: {e}", flush=True)
            if file_path.exists():
                file_path.unlink()

def update_manifest_file(updates):
    if not updates:
        return
    current_manifest = {}
    if MANIFEST.exists():
        try:
            with open(MANIFEST, 'r', encoding='utf-8') as f:
                current_manifest = json.load(f)
        except: pass
    current_manifest.update(updates)
    with open(MANIFEST, 'w', encoding='utf-8') as f:
        json.dump(current_manifest, f, ensure_ascii=False, indent=2)

async def main():
    print(f"Запуск генератора MOVA TTS. Обраний двигун: {TTS_ENGINE.upper()}", flush=True)
    
    manifest_data = {}
    if MANIFEST.exists():
        try:
            with open(MANIFEST, 'r', encoding='utf-8') as f:
                manifest_data = json.load(f)
        except: pass

    audio_config, raw_items = load_js_database("B2-Beruf.js")
    
    tasks = []
    fields_map = {
        "vocab": ["term", "short", "def"],
        "sprachbau": ["sentence", "answer", "explanation"],
        "redemittel": ["question", "answer"]
    }
    
    for item in raw_items:
        item_id = item["id"]
        
        # 1. Визначаємо внутрішню категорію для мапінгу голосів
        internal_cat = "vocab"
        if item_id.startswith("sbs_"):
            internal_cat = "sprachbau"
        elif item_id.startswith("dlg_"):
            internal_cat = "redemittel"
            
        # 2. Отримуємо папку категорії (мала літера з поля 'cat', наприклад: 'nvv', 'opinion')
        manifest_cat_folder = str(item.get("cat", item["_fallback_var"])).lower()
            
        fields = fields_map[internal_cat]
        
        for field in fields:
            field_obj = item.get(field)
            if isinstance(field_obj, dict):
                for lang, text in field_obj.items():
                    if not text: continue
                    rates = audio_config.get(lang, ["100"])
                    for rate in rates:
                        # Структура з маніфесту: B2-Beruf/lang/rate/cat/id_field_lang_rate
                        mkey = f"{COURSE}/{lang}/{rate}/{manifest_cat_folder}/{item_id}_{field}_{lang}_{rate}"
                        filename = f"{item_id}_{field}_{lang}_{rate}.mp3"
                        
                        if mkey not in manifest_data:
                            tasks.append({
                                "id": item_id, 
                                "internal_cat": internal_cat, 
                                "cat_folder": manifest_cat_folder,
                                "sub": field, 
                                "lang": lang, 
                                "rate": rate, 
                                "text": text, 
                                "filename": filename, 
                                "mkey": mkey
                            })

    print(f"Знайдено нових завдань для генерації: {len(tasks)}", flush=True)
    if not tasks:
        print("Всі файли синхронізовані з manifest.json.", flush=True)
        return

    semaphore = asyncio.Semaphore(WORKERS)
    stats = {"generated": 0, "manifest_updates": {}}
    
    pool = [worker_task(t, semaphore, stats) for t in tasks]
    await asyncio.gather(*pool)
    
    if stats["manifest_updates"]:
        update_manifest_file(stats["manifest_updates"])
    print(f"🎉 Роботу завершено! Згенеровано: {stats['generated']} нових файлів.", flush=True)

if __name__ == "__main__":
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())