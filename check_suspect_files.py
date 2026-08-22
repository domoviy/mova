#!/usr/bin/env python3
"""
Діагностика "битих" forum-файлів: звіряє останню 'end'-мітку в .words.json
з РЕАЛЬНОЮ тривалістю mp3 (mutagen) і показує, наскільки вони розходяться.

Якщо gap близький до 0 (у межах старого допуску max(0.6с, 5%)) — перевірка
_looks_timing_desynced() пройшла б файл як "валідний" саме тому, що це не
обрив ПОТОКУ (метадані != звук), а глюк ВСЕРЕДИНІ самого аудіо (рушій
синтезу відпрацював протокол коректно, але звук на виході — ні). Такий
дефект принципово не ловиться жодною з наявних перевірок без ASR.

Використання:
    python3 check_suspect_files.py path/to/file1.mp3 path/to/file2.mp3 ...
"""
import sys
import json
import pathlib

try:
    from mutagen.mp3 import MP3
except ImportError:
    print("Потрібно: pip install mutagen --break-system-packages")
    sys.exit(1)


def check(mp3_path_str):
    mp3_path = pathlib.Path(mp3_path_str)
    words_path = mp3_path.with_suffix('.words.json')

    if not mp3_path.exists():
        print(f"❌ {mp3_path} не знайдено")
        return
    if not words_path.exists():
        print(f"⚠️  {mp3_path} — немає .words.json поруч (перевірка неможлива)")
        return

    try:
        duration = MP3(str(mp3_path)).info.length
    except Exception as e:
        print(f"❌ {mp3_path} — mutagen не зміг прочитати тривалість: {e}")
        return

    with open(words_path, 'r', encoding='utf-8') as f:
        words = json.load(f)

    if not words:
        print(f"⚠️  {mp3_path} — words.json порожній")
        return

    last_end = words[-1]['end']
    last_word = words[-1]['word']
    gap = duration - last_end
    tolerance = max(0.6, 0.05 * duration)

    print(f"{mp3_path.name}")
    print(f"  Слів у .words.json: {len(words)}, останнє: '{last_word}' (end={last_end:.2f}с)")
    print(f"  Реальна тривалість mp3: {duration:.2f}с")
    print(f"  Різниця: {gap:+.2f}с (допуск: ±{tolerance:.2f}с)")
    if abs(gap) > tolerance:
        print(f"  -> ЗА старою перевіркою це БУЛО Б спіймано як обрив/розсинхрон.")
    else:
        print(f"  -> Метадані й тривалість УЗГОДЖЕНІ — якщо на слух звук все одно "
              f"обривається/глючить, це дефект ВСЕРЕДИНІ аудіоданих, "
              f"невидимий для перевірок на основі метаданих.")
    print()


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for p in sys.argv[1:]:
        check(p)
