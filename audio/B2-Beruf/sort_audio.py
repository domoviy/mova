import os
import re
import shutil

# --- НАЛАШТУВАННЯ ШЛЯХІВ ---
# Крапка означає, що скрипт працюватиме ПРЯМО в тій папці, де ви його запустите
# Автоматично визначаємо точну папку, де лежить цей файл sort_audio.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Дозволені розширення файлів (ЗАХИСТ: ігноруємо .html, .js, .json тощо)
ALLOWED_EXTENSIONS = [".mp3", ".wav", ".m4a", ".ogg"]

# Словник для заміни категорій (стара -> нова)
CATEGORY_MAPPING = {
    "mb": "mbr",
    "un": "uns",
    "ss": "ssk",
    "hs": "hsk",
    "za": "zar",
    "ms": "mes",
    "nvv": "nvv",
    "mwb": "mwb",
    "eat": "eat",
    "kia": "kia",
    "tel": "tel",
    "abk": "abk",
}

LANGUAGES = ["de", "en", "uk"]
SPEEDS = ["80", "100"]

def parse_and_process_filename(filename):
    name_lower = filename.lower()

    # 1. Шукаємо мову
    file_lang = None
    for lang in LANGUAGES:
        if f"_{lang}_" in name_lower or name_lower.endswith(f"_{lang}"):
            file_lang = lang
            break
    if not file_lang:
        for lang in LANGUAGES:
            if lang in name_lower:
                file_lang = lang
                break

    # 2. Шукаємо швидкість
    file_speed = None
    for speed in SPEEDS:
        if speed in name_lower:
            file_speed = speed
            break

    # 3. Визначаємо категорію
    prefix_match = re.match(r"^([a-z]+)_", name_lower)
    file_cat = None
    new_filename = filename

    if prefix_match:
        old_cat = prefix_match.group(1)
        if old_cat in CATEGORY_MAPPING:
            file_cat = CATEGORY_MAPPING[old_cat]
            if old_cat != file_cat:
                new_filename = re.sub(rf"^{old_cat}_", f"{file_cat}_", filename, flags=re.IGNORECASE)
        else:
            file_cat = old_cat
    else:
        file_cat = "unknown_cat"

    file_lang = file_lang if file_lang else "unknown_lang"
    file_speed = file_speed if file_speed else "unknown_speed"

    return file_lang, file_speed, file_cat, new_filename

def organize_b2_beruf():
    if not os.path.exists(BASE_DIR):
        print(f"Помилка: Папки '{BASE_DIR}' не знайдено.")
        return

    moved_count = 0
    # Беремо лише файли
    files = [f for f in os.listdir(BASE_DIR) if os.path.isfile(os.path.join(BASE_DIR, f))]

    for filename in files:
        if filename.startswith("."):
            continue

        # ЗАХИСТ: Перевіряємо, чи це аудіофайл
        _, ext = os.path.splitext(filename.lower())
        if ext not in ALLOWED_EXTENSIONS:
            # Пропускаємо індекси, скрипти та іконки
            continue

        lang, speed, cat, new_filename = parse_and_process_filename(filename)

        # Створюємо структуру: {мова}/{швидкість}/{категорія}/
        target_folder = os.path.join(BASE_DIR, lang, speed, cat)
        os.makedirs(target_folder, exist_ok=True)

        old_file_path = os.path.join(BASE_DIR, filename)
        new_file_path = os.path.join(target_folder, new_filename)

        shutil.move(old_file_path, new_file_path)
        
        if filename != new_filename:
            print(f"🔄 Перейменовано та переміщено: {filename} ➡️ {lang}/{speed}/{cat}/{new_filename}")
        else:
            print(f"📁 Переміщено: {filename} ➡️ {lang}/{speed}/{cat}/{new_filename}")
            
        moved_count += 1

    print(f"\n🎉 Роботу завершено! Успішно оброблено аудіофайлів: {moved_count}")

if __name__ == "__main__":
    organize_b2_beruf()