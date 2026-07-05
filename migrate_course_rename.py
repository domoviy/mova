#!/usr/bin/env python3
"""
Одноразова міграція після перейменування файлів бази курсів:
  B2-Beruf            -> Deutsch-B2-Beruf
  A2-Deutsch           -> Deutsch-A2
  (Financial-Accounting-Foundations — без змін)

Робить ДВІ речі:
1. Перейменовує папки audio/<стара_назва>/ -> audio/<нова_назва>/
   (через `git mv`, якщо репозиторій git — зберігає історію; інакше
   звичайний os.rename).
2. Переписує ключі в audio/manifest.json: замінює префікс
   "<стара_назва>/..." на "<нова_назва>/..." у кожному ключі, де курс
   збігається.

Без цього кроку gen_audio.py при наступному запуску НЕ знайде відповідних
ключів у manifest.json (кожен ключ буквально починається з назви курсу,
напр. "B2-Beruf/de/100/k1/k1_..."), вирішить що всі аудіо "нові", і
перегенерує геть усе — щоправда, зі шляхом audio_base = AUDIO_ROOT / course,
який теж збудований з тієї ж (тепер уже нової) назви, тобто ще й запише
файли в НОВУ папку, а стару так і лишить незайманою.

Запускати ОДИН РАЗ з кореня репозиторію, ПЕРЕД тим як викотити оновлений
gen_audio.py в GitHub Actions:

    python3 migrate_course_rename.py
"""

import json
import pathlib
import shutil
import subprocess

RENAME_MAP = {
    'B2-Beruf': 'Deutsch-B2-Beruf',
    'A2-Deutsch': 'Deutsch-A2',
}

AUDIO_ROOT = pathlib.Path('audio')
MANIFEST = AUDIO_ROOT / 'manifest.json'


def is_git_repo():
    return pathlib.Path('.git').exists()


def rename_audio_folders():
    for old_name, new_name in RENAME_MAP.items():
        if old_name == new_name:
            continue
        old_path = AUDIO_ROOT / old_name
        new_path = AUDIO_ROOT / new_name

        if not old_path.exists():
            print(f"  · audio/{old_name}/ не знайдено — пропускаю (можливо, аудіо ще не генерувалось)")
            continue
        if new_path.exists():
            print(f"  ⚠ audio/{new_name}/ вже існує — пропускаю перейменування, розберись вручну")
            continue

        if is_git_repo():
            print(f"  · git mv audio/{old_name} audio/{new_name}")
            subprocess.run(["git", "mv", str(old_path), str(new_path)], check=True)
        else:
            print(f"  · os.rename audio/{old_name} -> audio/{new_name}")
            shutil.move(str(old_path), str(new_path))


def migrate_manifest():
    if not MANIFEST.exists():
        print("  · manifest.json не знайдено — нічого мігрувати")
        return

    with open(MANIFEST, 'r', encoding='utf-8') as f:
        data = json.load(f)

    new_data = {}
    migrated = 0
    for key, value in data.items():
        new_key = key
        for old_name, new_name in RENAME_MAP.items():
            if old_name == new_name:
                continue
            prefix = old_name + '/'
            if key.startswith(prefix):
                new_key = new_name + '/' + key[len(prefix):]
                migrated += 1
                break
        new_data[new_key] = value

    if migrated == 0:
        print("  · жодного ключа зі старою назвою курсу не знайдено в manifest.json")
        return

    backup_path = MANIFEST.with_suffix('.json.bak')
    shutil.copy(MANIFEST, backup_path)
    print(f"  · резервна копія: {backup_path}")

    with open(MANIFEST, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2, sort_keys=True)

    print(f"  · перейменовано ключів у manifest.json: {migrated}")


def main():
    print("1) Перейменування папок audio/<курс>/...")
    rename_audio_folders()
    print("\n2) Міграція ключів manifest.json...")
    migrate_manifest()
    print("\nГотово. Перевір `git status` перед комітом.")


if __name__ == "__main__":
    main()
