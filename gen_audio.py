#!/usr/bin/env python3
"""
MOVA · TTS Audio Generator (Edge TTS)
- Категорія (cat_lower) строго визначається за префіксом ID.
- Порожні поля повністю ігноруються.
- Маніфест зберігає хеш (текст + голос + швидкість) для кожного файлу:
  дозволяє коректно визначати, чи потрібна перегенерація (змінився текст
  картки або голос у VOICE_MAPPING), а не лише факт існування ключа.
- Миттєвий запис у маніфест за допомогою асинхронного Lock.
- Відображення реального прогресу виконання завдань: [поточний / всього].
"""

import os
import sys
import json
import hashlib
import pathlib
import re
import asyncio
import subprocess

try:
    import edge_tts
except ImportError:
    edge_tts = None

# ── Конфігурація ──────────────────────────────────────────────
WORKERS = int(os.environ.get('TTS_WORKERS', '1'))
DELAY_SEC = float(os.environ.get('TTS_DELAY', '1.2'))
COMMIT_LIMIT = int(os.environ.get('TTS_COMMIT_LIMIT', '50'))

# Список курсів. Для кожного курсу база лежить у файлі "<COURSE>.js"
# у тій самій директорії, що й цей скрипт, а аудіо генерується в
# audio/<COURSE>/... (назва папки аудіо == назва файлу бази без .js).
# Кожен запис: (назва .js файлу бази без розширення, id курсу —
# він же назва папки в audio/ і префікс ключів у audio/manifest.json).
# Для Deutsch-B2-Beruf і Deutsch-A2 файл перейменували (для логічнішого
# сортування файлів бази), а id/папку аудіо НАВМИСНО лишили старими —
# так само, як у index.html (COURSES[].id != COURSES[].file там). Це
# позбавляє від перейменування папки з сотнями mp3-файлів на диску і
# міграції ключів у manifest.json — при незмінному id все й так збігається.
COURSES = [
    ('Deutsch-B2-Beruf', 'B2-Beruf'),
    ('Financial-Accounting-Foundations', 'Financial-Accounting-Foundations'),
    ('Deutsch-A2', 'A2-Deutsch'),
]

AUDIO_ROOT = pathlib.Path('audio')
MANIFEST = pathlib.Path('audio') / 'manifest.json'

# ── Мапінг голосів ────────────────────────────────────────────
VOICE_MAPPING = {
    "vocab": {
        "term":  {"de": "de-DE-KatjaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-US-AriaNeural",        "ru": "ru-RU-SvetlanaNeural"},
        "short": {"de": "de-DE-ConradNeural", "uk": "uk-UA-OstapNeural",  "en": "en-GB-RyanNeural",        "ru": "ru-RU-DmitryNeural"},
        "def":   {"de": "de-DE-KillianNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-ChristopherNeural", "ru": "ru-RU-DmitryNeural"}
    },
    "sprachbau": {
        "sentence":    {"de": "de-DE-ConradNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-GuyNeural",   "ru": "ru-RU-DmitryNeural"},
        "answer":      {"de": "de-DE-AmalaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"},
        "explanation": {"de": "de-DE-AmalaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"},
        # Дистрактори — варіанти відповіді того ж завдання, що й answer,
        # тож той самий голос на кожній мові (справедливе порівняння
        # "звучання" варіантів). Озвучуються лише мовою PRIMARY_LANG, але
        # таблиця має всі 4 голоси — якщо PRIMARY_LANG колись зміниться,
        # код не впаде через відсутній ключ.
        "distractors": {"de": "de-DE-AmalaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"}
    },
    "redemittel": {
        "q": {"de": "de-DE-KatjaNeural",  "uk": "uk-UA-PolinaNeural", "en": "en-US-JennyNeural",       "ru": "ru-RU-SvetlanaNeural"},
        "a": {"de": "de-DE-KillianNeural", "uk": "uk-UA-OstapNeural",  "en": "en-US-ChristopherNeural", "ru": "ru-RU-DmitryNeural"}
    }
}

def get_voice_id(category, sub_type, lang):
    try:
        return VOICE_MAPPING[category][sub_type][lang]
    except KeyError:
        fallbacks = {"de": "de-DE-KatjaNeural", "uk": "uk-UA-PolinaNeural", "en": "en-US-AriaNeural", "ru": "ru-RU-SvetlanaNeural"}
        return fallbacks.get(lang, "de-DE-KatjaNeural")

def clean_text(text):
    if not text:
        return ""
    if isinstance(text, list):
        text = ", ".join(text)

    # <br> позначає розрив між реченнями/думками — для TTS це має бути
    # пауза, а не пробіл, тому переводимо в крапку ДО видалення інших тегів.
    # Якщо перед <br> вже стоїть розділовий знак (. ! ?…), крапку не дублюємо.
    text = re.sub(r'\s*<br\s*/?>\s*', '<<BR>>', text, flags=re.IGNORECASE)
    text = re.sub(r'(?<=[.!?…])<<BR>>', ' ', text)
    text = text.replace('<<BR>>', '. ')

    # <g>/<b> — лише граматична/смислова розмітка, вміст залишається,
    # самі теги-обгортки прибираємо без заміни на пробіл.
    text = re.sub(r'</?g>', '', text)
    text = re.sub(r'</?b>', '', text)

    # Будь-які інші теги, які могли залишитись, — прибираємо як раніше.
    text = re.sub(r'<[^>]+>', ' ', text)
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = text.replace('/', ' ')
    text = re.sub(r'\s+', ' ', text).strip()
    # Прибираємо можливий пробіл перед крапкою, що утворився після <br>.
    text = re.sub(r'\s+\.', '.', text)
    return text

def compute_content_hash(cleaned_text, voice, rate):
    """Хеш від (очищений текст + голос + швидкість).
    Зміна тексту картки АБО зміна голосу в VOICE_MAPPING дають інший хеш —
    і тільки тоді файл вважається застарілим і йде на перегенерацію."""
    payload = f"{cleaned_text}|{voice}|{rate}"
    return hashlib.sha256(payload.encode('utf-8')).hexdigest()[:10]

def load_js_database(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # PRIMARY_LANG — мова, якою завжди озвучуються дистрактори та сирий
    # 'answer' Sprachbau-картки (зараз 'de', але читаємо з бази, а не
    # хардкодимо — узгоджено з тим самим принципом на клієнті, де
    # index.html бере PRIMARY_LANG, а не літеральне 'de').
    primary_lang = "de"
    primary_match = re.search(r'PRIMARY_LANG\s*=\s*["\']([a-z]{2})["\']', content)
    if primary_match:
        primary_lang = primary_match.group(1)

    config = {"de": ["100", "080"], "en": ["100"], "uk": ["100"], "ru": ["100"]}
    config_match = re.search(r'AUDIO_CONFIG\s*=\s*(\{.*?\})', content, re.DOTALL)
    if config_match:
        try:
            # AUDIO_CONFIG у файлах курсів пишеться з коментарями
            # (закоментовані мови/пояснення праворуч від значень) — це
            # валідний JS, але невалідний JSON. Без цієї очистки
            # json.loads() ЗАВЖДИ падав на будь-якому "//"-коментарі
            # всередині об'єкта, виняток тихо ковтався (голий except),
            # і функція мовчки відкочувалась на дефолт (усі 4 мови,
            # 100+080) — навіть якщо курс явно закоментував/прибрав
            # частину мов. Саме це сталось із
            # Financial-Accounting-Foundations.js: de/ru закоментовані,
            # а фактично генерувались усі мови на обох швидкостях.
            clean_config = re.sub(r'//.*', '', config_match.group(1))
            clean_config = re.sub(r'/\*.*?\*/', '', clean_config, flags=re.DOTALL)
            clean_config = re.sub(r',\s*([\]\}])', r'\1', clean_config)
            config = json.loads(clean_config.replace("'", '"'))
        except Exception as e:
            print(f"⚠ Не вдалося розпарсити AUDIO_CONFIG у {file_path}, використовую дефолт (усі мови, 100+080): {e}", flush=True)

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
        except json.JSONDecodeError:
            # Деякі масиви (наприклад SPRACHBAUSTEINE) написані в "людяному"
            # JS-стилі з нелапкованими ключами об'єкта ({id:"x"} замість
            # {"id":"x"}) — валідний JS, але невалідний JSON. Застосовуємо
            # нормалізацію ЛИШЕ як fallback, коли строгий парсинг провалився:
            # масиви з текстом, що містить двокрапки всередині рядкових
            # значень (DIALOGE тощо), уже парсяться строгим json.loads()
            # вище і НІКОЛИ не доходять до цього regex — він і не повинен
            # їх торкатись, бо може неправильно зрозуміти ":" у тексті
            # як межу ключа.
            try:
                normalized = re.sub(r'([{,]\s*)([a-zA-Z_]\w*)\s*:', r'\1"\2":', clean_array)
                items = json.loads(normalized)
                if isinstance(items, list):
                    for item in items:
                        if isinstance(item, dict) and "id" in item:
                            item["_fallback_var"] = var_name
                            raw_items.append(item)
            except Exception:
                pass

    return config, raw_items, primary_lang

async def synthesize_speech(text, voice, rate_str, output_path):
    """Генерація аудіо через Edge TTS."""
    if not edge_tts:
        raise RuntimeError("Пакет 'edge-tts' не встановлено.")
    rate_val = int(rate_str)
    sign = "+" if rate_val >= 100 else "-"
    diff = abs(rate_val - 100)
    edge_rate = f"{sign}{diff}%"

    communicate = edge_tts.Communicate(text, voice, rate=edge_rate)
    await communicate.save(output_path)

def git_commit_and_push(count):
    try:
        subprocess.run(["git", "add", "audio/"], check=True)
        status = subprocess.run(["git", "diff", "--staged", "--quiet"])
        if status.returncode != 0:
            msg = f"🎙 TTS Audio Update: +{count} files [skip ci]"
            subprocess.run(["git", "commit", "-m", msg], check=True)

            # Спочатку пробуємо просто push — це єдиний writer у audio/ під
            # час свого запуску, тож конфлікти вкрай рідкісні. Мережевий
            # pull --rebase робимо лише як retry, якщо push дійсно відхилено.
            push_result = subprocess.run(["git", "push"])
            if push_result.returncode != 0:
                print("--- [Git Bot] Push відхилено, пробуємо pull --rebase і повторити ---", flush=True)
                subprocess.run(["git", "pull", "--rebase"], check=True)
                subprocess.run(["git", "push"], check=True)

            print(f"--- [Git Bot] Збережено пачку з {count} файлів ---", flush=True)
    except Exception as e:
        print(f"Git commit error: {e}", flush=True)

def write_to_manifest_file(mkey, content_hash):
    current_manifest = {}
    if MANIFEST.exists():
        try:
            with open(MANIFEST, 'r', encoding='utf-8') as f:
                current_manifest = json.load(f)
        except: pass

    current_manifest[mkey] = content_hash
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    with open(MANIFEST, 'w', encoding='utf-8') as f:
        json.dump(current_manifest, f, ensure_ascii=False, indent=2)

# ── Основний асинхронний воркер ─────────────────────────────────
async def worker_task(task, semaphore, stats, lock, total_tasks):
    file_dir = task["audio_base"] / task["lang"] / task["rate"] / task["cat_lower"]
    file_dir.mkdir(parents=True, exist_ok=True)
    file_path = file_dir / task["filename"]

    async with semaphore:
        try:
            async with lock:
                stats["processed_tasks"] += 1
                current_num = stats["processed_tasks"]

            print(f"[{current_num}/{total_tasks}] -> {task['mkey']} -> Голос: {task['voice']} -> '{task['cleaned'][:30]}...'", flush=True)

            await synthesize_speech(task["cleaned"], task["voice"], task["rate"], file_path)

            async with lock:
                write_to_manifest_file(task["mkey"], task["content_hash"])

                stats["generated"] += 1
                stats["batch_counter"] += 1

                if stats["batch_counter"] >= COMMIT_LIMIT:
                    git_commit_and_push(stats["batch_counter"])
                    stats["batch_counter"] = 0

            if DELAY_SEC > 0:
                await asyncio.sleep(DELAY_SEC)

        except Exception as e:
            print(f"❌ Помилка генерації для {task['mkey']}: {e}", flush=True)
            if file_path.exists():
                file_path.unlink()

async def main():
    print("Запуск генератора MOVA TTS (Edge TTS).", flush=True)

    manifest_data = {}
    if MANIFEST.exists():
        try:
            with open(MANIFEST, 'r', encoding='utf-8') as f:
                manifest_data = json.load(f)
        except: pass

    tasks = []
    fields_map = {
        "vocab": ["term", "short", "def"],
        "sprachbau": ["sentence", "answer", "explanation"],
        "redemittel": ["q", "a"]
    }

    for file_stem, course in COURSES:
      audio_config, raw_items, primary_lang = load_js_database(f"{file_stem}.js")
      audio_base = AUDIO_ROOT / course
      print(f"— Курс '{course}' (файл {file_stem}.js): знайдено {len(raw_items)} елементів бази.", flush=True)

      for item in raw_items:
        item_id = item["id"]

        internal_cat = "vocab"
        if item_id.startswith("sbs_"):
            internal_cat = "sprachbau"
        elif item_id.startswith("dlg_"):
            internal_cat = "redemittel"

        cat_lower = item_id.split('_')[0].lower()
        fields = fields_map[internal_cat]

        for field in fields:
            field_obj = item.get(field)
            if isinstance(field_obj, dict):
                for lang, text in field_obj.items():
                    # AUDIO_CONFIG визначає, ЯКІ мови курс озвучує взагалі —
                    # не лише на яких швидкостях. Раніше цей чек був відсутній:
                    # цикл проходив по мовних КЛЮЧАХ САМОЇ КАРТКИ (term/short/def
                    # завжди мають усі 4 мови як ключі, навіть якщо курс
                    # свідомо озвучує лише частину), а не по AUDIO_CONFIG —
                    # тож будь-яка мова з непорожнім текстом у картці
                    # озвучувалась, незалежно від того, що написано в
                    # AUDIO_CONFIG.
                    if lang not in audio_config: continue
                    if text is None: continue
                    if isinstance(text, str) and not text.strip(): continue
                    if isinstance(text, list) and not text: continue

                    # Sprachbau 'sentence' містить буквальний плейсхолдер
                    # {{BLANK}} замість пропуску — клієнт (index.html)
                    # підставляє туди правильну відповідь ТІЄЇ Ж мови перед
                    # озвученням (sbA(card, lang)). Без цієї підстановки
                    # TTS буквально прочитав би слово "BLANK" замість
                    # речення з відповіддю.
                    if internal_cat == "sprachbau" and field == "sentence" and "{{BLANK}}" in text:
                        answer_obj = item.get("answer") or {}
                        answer_text = answer_obj.get(lang) or answer_obj.get(primary_lang) or ""
                        text = text.replace("{{BLANK}}", answer_text)

                    cleaned = clean_text(text)
                    if not cleaned:
                        continue

                    voice = get_voice_id(internal_cat, field, lang)
                    rates = audio_config.get(lang, ["100"])

                    for rate in rates:
                        filename = f"{item_id}_{field}_{lang}_{rate}.mp3"
                        mkey = f"{course}/{lang}/{rate}/{cat_lower}/{item_id}_{field}_{lang}_{rate}"

                        content_hash = compute_content_hash(cleaned, voice, rate)
                        existing_hash = manifest_data.get(mkey)

                        # Генеруємо, якщо ключа немає АБО текст/голос змінився
                        # (тобто збережений хеш не співпадає з поточним).
                        if existing_hash != content_hash:
                            tasks.append({
                                "id": item_id,
                                "course": course,
                                "audio_base": audio_base,
                                "internal_cat": internal_cat,
                                "cat_lower": cat_lower,
                                "sub": field,
                                "lang": lang,
                                "rate": rate,
                                "cleaned": cleaned,
                                "voice": voice,
                                "filename": filename,
                                "mkey": mkey,
                                "content_hash": content_hash
                            })

        # distractors — окрема гілка: на відміну від полів вище це ПРОСТИЙ
        # список рядків (завжди PRIMARY_LANG, без мовного dict), бо це
        # варіанти відповіді на вправу із заповненням пропуску в реченні
        # PRIMARY_LANG. Кожен елемент індексується окремо (distractors_1,
        # distractors_2...) замість мовного коду — лічильник у назві поля
        # грає ту саму роль, яку для інших полів грає lang.
        if internal_cat == "sprachbau":
            distractor_list = item.get("distractors")
            if isinstance(distractor_list, list) and primary_lang in audio_config:
                voice = get_voice_id(internal_cat, "distractors", primary_lang)
                rates = audio_config.get(primary_lang, ["100"])
                for idx, raw_text in enumerate(distractor_list, start=1):
                    cleaned = clean_text(raw_text)
                    if not cleaned:
                        continue
                    field = f"distractors_{idx}"
                    for rate in rates:
                        filename = f"{item_id}_{field}_{primary_lang}_{rate}.mp3"
                        mkey = f"{course}/{primary_lang}/{rate}/{cat_lower}/{item_id}_{field}_{primary_lang}_{rate}"

                        content_hash = compute_content_hash(cleaned, voice, rate)
                        existing_hash = manifest_data.get(mkey)

                        if existing_hash != content_hash:
                            tasks.append({
                                "id": item_id,
                                "course": course,
                                "audio_base": audio_base,
                                "internal_cat": internal_cat,
                                "cat_lower": cat_lower,
                                "sub": field,
                                "lang": primary_lang,
                                "rate": rate,
                                "cleaned": cleaned,
                                "voice": voice,
                                "filename": filename,
                                "mkey": mkey,
                                "content_hash": content_hash
                            })

    total_tasks = len(tasks)
    print(f"Знайдено нових/змінених завдань для генерації: {total_tasks}", flush=True)
    if not tasks:
        print("Всі файли синхронізовані з manifest.json.", flush=True)
        return

    semaphore = asyncio.Semaphore(WORKERS)
    lock = asyncio.Lock()
    stats = {"generated": 0, "batch_counter": 0, "processed_tasks": 0}

    pool = [worker_task(t, semaphore, stats, lock, total_tasks) for t in tasks]
    await asyncio.gather(*pool)

    if stats["batch_counter"] > 0:
        git_commit_and_push(stats["batch_counter"])

    print(f"🎉 Роботу завершено! Згенеровано та внесено в маніфест: {stats['generated']} файлів.", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
