import os
import re
import shutil

# --- НАЛАШТУВАННЯ ШЛЯХІВ ---
# Скрипт шукає файли в B2-Beruf і туди ж складає нові папки
BASE_DIR = "./B2-Beruf"

# Словник для заміни категорій (стара -> нова)
CATEGORY_MAPPING = {
    "mb": "mbr",
    "un": "uns",
    "ss": "ssk",
    "hs": "hsk",
    "za": "zar",
    "ms": "mes",
    # Категорії, які не змінюються, але є валідними:
    "nvv": "nvv",
    "mwb": "mwb",
    "eat": "eat",
    "kia": "kia",
    "tel": "tel",
    "abk": "abk",
}

# Список доступних мов та швидкостей для точного пошуку в імені
LANGUAGES = ["de", "en", "uk"]
SPEEDS = ["80", "100"]


def parse_and_process_filename(filename):
    """Аналізує ім'я файлу, міняє категорію за правилами та визначає нові папки."""
    name_lower = filename.lower()

    # 1. Шукаємо мову (de, en або uk)
    file_lang = None
    for lang in LANGUAGES:
        if f"_{lang}_" in name_lower or name_lower.endswith(f"_{lang}"):
            file_lang = lang
            break
    # Якщо мову не знайдено за шаблоном _lang_, шукаємо просто входження
    if not file_lang:
        for lang in LANGUAGES:
            if lang in name_lower:
                file_lang = lang
                break

    # 2. Шукаємо швидкість (80 або 100)
    file_speed = None
    for speed in SPEEDS:
        if speed in name_lower:
            file_speed = speed
            break

    # 3. Визначаємо та замінюємо категорію
    # Беремо перші літери до першого підкреслення (наприклад, 'mbr' або 'mb')
    prefix_match = re.match(r"^([a-z]+)_", name_lower)
    file_cat = None
    new_filename = filename

    if prefix_match:
        old_cat = prefix_match.group(1)
        # Перевіряємо, чи є ця категорія у нашому списку заміни
        if old_cat in CATEGORY_MAPPING:
            file_cat = CATEGORY_MAPPING[old_cat]
            # Якщо категорія змінилася (наприклад, mb -> mbr), перейменовуємо сам файл
            if old_cat != file_cat:
                # Замінюємо ТІЛЬКИ перший префікс в імені файлу, щоб не зіпсувати решту назви
                new_filename = re.sub(rf"^{old_cat}_", f"{file_cat}_", filename, flags=re.IGNORECASE)
        else:
            # Якщо префікс невідомий (немає в списку), запишемо в "other"
            file_cat = old_cat
    else:
        file_cat = "unknown_cat"

    # Якщо мову чи швидкість не вдалося розпізнати, сортуємо в "unknown"
    file_lang = file_lang if file_lang else "unknown_lang"
    file_speed = file_speed if file_speed else "unknown_speed"

    return file_lang, file_speed, file_cat, new_filename


def organize_b2_beruf():
    if not os.path.exists(BASE_DIR):
        print(f"Помилка: Папки '{BASE_DIR}' не знайдено. Запустіть скрипт там, де вона є.")
        return

    moved_count = 0

    # Читаємо список файлів. listdir береться один раз, щоб не зациклитися на нових папках
    files = [f for f in os.listdir(BASE_DIR) if os.path.isfile(os.path.join(BASE_DIR, f))]

    for filename in files:
        # Ігноруємо системні приховані файли
        if filename.startswith("."):
            continue

        # Аналізуємо файл та отримуємо нове ім'я з урахуванням правил заміни
        lang, speed, cat, new_filename = parse_and_process_filename(filename)

        # Формуємо цільовий шлях: B2-Beruf/{мова}/{швидкість}/{категорія}/
        target_folder = os.path.join(BASE_DIR, lang, speed, cat)
        os.makedirs(target_folder, exist_ok=True)

        old_file_path = os.path.join(BASE_DIR, filename)
        new_file_path = os.path.join(target_folder, new_filename)

        # Переміщення та перейменування
        shutil.move(old_file_path, new_file_path)
        
        # Виводимо звіт про заміну, якщо вона була
        if filename != new_filename:
            print(f"🔄 Перейменовано та переміщено: {filename} ➡️ {lang}/{speed}/{cat}/{new_filename}")
        else:
            print(f"📁 Переміщено: {filename} ➡️ {lang}/{speed}/{cat}/{new_filename}")
            
        moved_count += 1

    print(f"\n🎉 Роботу завершено! Успішно оброблено файлів: {moved_count}")


if __name__ == "__main__":
    organize_b2_beruf()