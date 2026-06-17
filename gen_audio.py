#!/usr/bin/env python3
"""
MOVA · TTS Audio Generator (Edge TTS & Azure REST Dual Engine)
Автоматично читає B2-Beruf.js, враховує AUDIO_CONFIG швидкості,
очищує HTML-теги, використовує маніфест і мапить голоси згідно з таблицею.
За замовчуванням використовує Edge TTS, але підтримує Azure REST API через перемикач.
Генерація орієнтується ВИКЛЮЧНО на manifest.json (дозволяє перезапис при видаленні з маніфесту).
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

# ── Мапінг голосів згідно з таблицею ──────────────────────────
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
    # Видаляємо HTML теги
    text = re.sub(r'<[^>]+>', ' ', text)
    # Замінюємо символи перенесення та зайві пробіли
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = text.replace('/', ' ')
    return re.sub(r'\s+', ' ', text).strip()

def js_to_json_cleaner(js_text):
    """Перетворює сирий текст JS-об'єкта/масиву на валідну JSON-структуру"""
    # Видаляємо коментарі
    text = re.sub(r'//.*', '', js_text)
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)
    
    # Забезпечуємо лапки навколо ключів об'єктів (напр. id: -> "id":)
    text = re.sub(r'(\s*)(\w+)\s*:', r'\1"\2":', text)
    
    # Замінюємо одинарні лапки навколо значень на подвійні, але обережно з внутрішніми лапками
    # Найнадійніший варіант — тимчасово зафіксувати внутрішні екранування
    text = re.sub(r",\s*([\]\}])", r"\1", text) # Видаляємо trailing commas
    return text

def parse_audio_config(content):
    match = re.search(r'AUDIO_CONFIG\s*=\s*(\{.*?\});', content, re.DOTALL)
    if match:
        try:
            cleaned = js_to_json_cleaner(match.group(1))
            cleaned = cleaned.replace("'", '"')
            return json.loads(cleaned)
        except:
            pass
    return {"de": ["100", "080"], "en": ["100"], "uk": ["100"], "ru": ["100"]}

def extract_json_array_by_key(content, key):
    """Шукає масив за ключем у JS файлі, балансуючи квадратні дужки []"""
    idx = content.find(f'"{key}"')
    if idx == -1:
        idx = content.find(f"'{key}'")
    if idx == -1:
        idx = content.find(f"{key}:")
        
    if idx == -1:
        return []
        
    start_bracket = content.find('[', idx)
    if start_bracket == -1:
        return []
        
    # Балансування дужок для збору всього масиву
    bracket_count = 0
    end_bracket = -1
    for i in range(start_bracket, len(content)):
        if content[i] == '[':
            bracket_count += 1
        elif content[i] == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_bracket = i
                break
                
    if end_bracket == -1:
        return []
        
    raw_array = content[start_bracket:end_bracket+1]
    cleaned_array = js_to_json_cleaner(raw_array)
    
    # Фікс одинарних лапок у JSON
    # Оскільки у файлі дані можуть містити складні рядки, перетворимо одинарні лапки на подвійні там, де це межі рядків
    cleaned_array = re.sub(r"'\s*,\s*'", '", "', cleaned_array)
    cleaned_array = re.sub(r"'\s*\]", '" ]', cleaned_array)
    cleaned_array = re.sub(r"\[\s*'", '[ "', cleaned_array)
    cleaned_array = re.sub(r"\"\s*:\s*'", '": "', cleaned_array)
    cleaned_array = re.sub(r"'\s*([,\}])", r'"\1', cleaned_array)
    
    try:
        return json.loads(cleaned_array)
    except:
        # Резервний витяг елементів через regex на випадок збою синтаксису JSON
        items = []
        obj_blocks = re.findall(r'\{\s*id\s*:\s*["\']([^"\']+)["\'](.*?)\}', raw_array, re.DOTALL)
        for i_id, block in obj_blocks:
            item = {"id": i_id}
            for field in ["term", "short", "def", "sentence", "answer", "explanation", "question"]:
                f_match = re.search(rf'{field}\s*:\s*\{{(.*?)\}}', block, re.DOTALL)
                if f_match:
                    item[field] = {}
                    inner = f_match.group(1)
                    for lang in ["de", "uk", "en", "ru"]:
                        l_match = re.search(rf'{lang}\s*:\s*["\'](.*?)["\']', inner, re.DOTALL)
                        if l_match:
                            item[field][lang] = l_match.group(1)
            items.append(item)
        return items

def load_js_database(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    config = parse_audio_config(content)
    
    data = {}
    data["vocab"] = extract_json_array_by_key(content, "vocab")
    data["sprachbau"] = extract_json_array_by_key(content, "sprachbau")
    data["redemittel"] = extract_json_array_by_key(content, "redemittel")
    
    return config, data

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
    file_path = AUDIO_BASE / task["filename"]
    voice = get_voice_id(task["cat"], task["sub"], task["lang"])
    cleaned = clean_text(task["text"])
    if not cleaned:
        return

    async with semaphore:
        try:
            print(f"[{TTS_ENGINE.upper()}] -> {task['filename']} ({task['rate']}%) -> '{cleaned[:20]}...'", flush=True)
            
            if TTS_ENGINE == "edge":
                await tts_edge(cleaned, voice, task["rate"], file_path)
            else:
                await asyncio.to_thread(tts_azure_rest, cleaned, voice, task["rate"], file_path)
                
            stats["generated"] += 1
            stats["manifest_updates"][task["mkey"]] = task["filename"]
            
            if DELAY_SEC > 0:
                await asyncio.sleep(DELAY_SEC)
                
            if stats["generated"] > 0 and stats["generated"] % COMMIT_LIMIT == 0:
                update_manifest_file(stats["manifest_updates"])
                git_commit_and_push(COMMIT_LIMIT)
                stats["manifest_updates"].clear()
                
        except Exception as e:
            print(f"❌ Помилка файлу {task['filename']}: {e}", flush=True)
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
    AUDIO_BASE.mkdir(parents=True, exist_ok=True)
    print(f"Запуск генератора MOVA TTS. Обраний двигун: {TTS_ENGINE.upper()}", flush=True)
    
    manifest_data = {}
    if MANIFEST.exists():
        try:
            with open(MANIFEST, 'r', encoding='utf-8') as f:
                manifest_data = json.load(f)
        except: pass

    audio_config, db_data = load_js_database("B2-Beruf.js")
    
    tasks = []
    fields_map = {
        "vocab": ["term", "short", "def"],
        "sprachbau": ["sentence", "answer", "explanation"],
        "redemittel": ["question", "answer"]
    }
    
    for cat, fields in fields_map.items():
        if cat not in db_data or not db_data[cat]: continue
        for item in db_data[cat]:
            item_id = item.get("id")
            if not item_id: continue
            
            for field in fields:
                field_obj = item.get(field)
                if isinstance(field_obj, dict):
                    for lang, text in field_obj.items():
                        if not text: continue
                        rates = audio_config.get(lang, ["100"])
                        for rate in rates:
                            mkey = f"{COURSE}/{item_id}_{cat}_{field}_{lang}_{rate}"
                            filename = f"{item_id}_{cat}_{field}_{lang}_{rate}.mp3"
                            if mkey not in manifest_data:
                                tasks.append({"id": item_id, "cat": cat, "sub": field, "lang": lang, "rate": rate, "text": text, "filename": filename, "mkey": mkey})

    print(f"Знайдено нових завдань для генерації: {len(tasks)}", flush=True)
    if not tasks:
        print("Всі файли синхронізовані.", flush=True)
        return

    semaphore = asyncio.Semaphore(WORKERS)
    stats = {"generated": 0, "manifest_updates": {}}
    
    pool = [worker_task(t, semaphore, stats) for t in tasks]
    await asyncio.gather(*pool)
    
    if stats["manifest_updates"]:
        update_manifest_file(stats["manifest_updates"])
    print(f"🎉 Роботу завершено! Згенеровано: {stats['generated']} файлів.", flush=True)

if __name__ == "__main__":
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())