#!/usr/bin/env python3
"""
Діагностика "тихих обривів усередині файлу" — того класу дефекту, який НЕ
ловлять ні _looks_truncated() (кількість слів збігається), ні
_looks_timing_desynced() (загальна тривалість збігається з таймінгом
останнього слова). Обидві дивляться лише на ПІДСУМКИ; ця перевірка
дивиться ВСЕРЕДИНУ — рахує реальну гучність (RMS) звуку в часовому вікні
КОЖНОГО слова з .words.json і порівнює з рештою файлу.

Якщо слово "мало прозвучати" (є в тексті, є в .words.json, має нормальний
start/end), але фактично на його місці тиша — RMS цього вікна буде в рази
нижчим за медіану по решті слів. Саме це і є "sorgen"/"Praktikant"/
"Standort" — метадані брешуть, що слово озвучене, а насправді там пусто.

Залежності: тільки ffmpeg у PATH (без numpy/pydub — чистий stdlib).

Використання:
    python3 check_audio_energy.py path/to/file1.mp3 [file2.mp3 ...]

Вивід: для кожного файлу — таблиця слово/RMS/% від медіани, і окремо
список слів, позначених як ПІДОЗРІЛІ (RMS < 20% медіани файлу).
"""
import sys
import json
import wave
import struct
import pathlib
import subprocess
import tempfile
import statistics


def decode_to_pcm(mp3_path, wav_path, sample_rate=16000):
    """ffmpeg -> mono 16kHz 16-bit PCM WAV (легкий формат для аналізу)."""
    cmd = [
        'ffmpeg', '-y', '-loglevel', 'error',
        '-i', str(mp3_path),
        '-ac', '1', '-ar', str(sample_rate), '-sample_fmt', 's16',
        str(wav_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(f"ffmpeg не зміг декодувати {mp3_path}: {result.stderr.strip()}")


def rms_of_window(samples, sample_rate, start_sec, end_sec):
    i0 = max(0, int(start_sec * sample_rate))
    i1 = min(len(samples), int(end_sec * sample_rate))
    if i1 <= i0:
        return 0.0
    window = samples[i0:i1]
    sq_sum = sum(s * s for s in window)
    return (sq_sum / len(window)) ** 0.5


def check(mp3_path_str):
    mp3_path = pathlib.Path(mp3_path_str)
    words_path = mp3_path.with_suffix('.words.json')

    if not mp3_path.exists():
        print(f"❌ {mp3_path} не знайдено")
        return
    if not words_path.exists():
        print(f"⚠️  {mp3_path} — немає .words.json поруч, аналіз неможливий")
        return

    with open(words_path, 'r', encoding='utf-8') as f:
        words = json.load(f)
    if not words:
        print(f"⚠️  {mp3_path} — words.json порожній")
        return

    sample_rate = 16000
    with tempfile.TemporaryDirectory() as tmp:
        wav_path = pathlib.Path(tmp) / 'out.wav'
        try:
            decode_to_pcm(mp3_path, wav_path, sample_rate)
        except RuntimeError as e:
            print(f"❌ {e}")
            return

        with wave.open(str(wav_path), 'rb') as wf:
            n_frames = wf.getnframes()
            raw = wf.readframes(n_frames)
            samples = struct.unpack(f"<{n_frames}h", raw)

    rms_values = []
    for w in words:
        r = rms_of_window(samples, sample_rate, w['start'], w['end'])
        rms_values.append(r)

    median_rms = statistics.median([r for r in rms_values if r > 0]) or 1.0

    print(f"{mp3_path.name}  ({len(words)} слів, медіана RMS={median_rms:.0f})")
    suspects = []
    for w, r in zip(words, rms_values):
        pct = (r / median_rms) * 100
        flag = ""
        if pct < 20:
            flag = "  ⚠️  ПІДОЗРІЛО ТИХО"
            suspects.append((w['word'], w['start'], w['end'], pct))
        print(f"  {w['start']:6.2f}-{w['end']:6.2f}с  {w['word']:<20s}  RMS={r:7.0f}  ({pct:5.1f}% медіани){flag}")

    print()
    if suspects:
        print(f"  🔴 Знайдено {len(suspects)} підозрілих слів (можлива тиша замість мовлення):")
        for word, start, end, pct in suspects:
            print(f"     '{word}' @ {start:.2f}-{end:.2f}с — лише {pct:.1f}% медіанної гучності")
    else:
        print("  🟢 Аномально тихих слів не знайдено — файл звучить рівномірно.")
    print()


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for p in sys.argv[1:]:
        check(p)
