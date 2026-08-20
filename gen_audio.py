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
import difflib
import asyncio
import subprocess

try:
    import edge_tts
except ImportError:
    edge_tts = None

try:
    from mutagen.mp3 import MP3
except ImportError:
    MP3 = None
    # Потрібно: pip install mutagen --break-system-packages
    # Використовується ЛИШЕ для _looks_timing_desynced() нижче — читає
    # реальну тривалість готового mp3-файлу з його заголовків (без
    # ffmpeg, чисто Python). Якщо пакета нема — ця перевірка тихо
    # пропускається (див. коментар у synthesize_speech), решта
    # генерації працює як і раніше.

if edge_tts:
    # ── Патч edge-tts: реальна локаль замість хардкодженого en-US ───
    # Бібліотека edge-tts (перевірено до версії 7.2.8 включно, актуальної
    # на момент цього патчу) у mkssml() ЗАВЖДИ пише в SSML
    # <speak ... xml:lang='en-US'>, незалежно від фактичного голосу —
    # див. communicate.py, mkssml(). Для звичайних (одномовних) голосів
    # (de-DE-KatjaNeural, uk-UA-PolinaNeural тощо) це не шкодить: Azure
    # все одно озвучує рідною локаллю самого голосу.
    #
    # Але для *Multilingual*-голосів (напр. de-DE-SeraphinaMultilingualNeural
    # — саме такий у персонажа Julia в characters.js) цей xml:lang реально
    # впливає на мовну модель: рушій орієнтується на нього, вирішуючи,
    # якою мовою читати. Хардкод en-US призводить до того, що ПЕРШІ слова
    # німецького речення озвучуються з англійською вимовою/інтонацією,
    # доки рушій сам не "розпізнає" фактичну мову тексту — саме той ефект,
    # який чути на початку фраз у багатомовних голосів.
    #
    # Офіційного параметра для зміни xml:lang у публічному API Communicate
    # немає, тому патчимо функцію mkssml прямо в модулі: підміняємо
    # xml:lang='en-US' на реальну локаль голосу (перші дві частини його
    # імені, напр. "de-DE" з "de-DE-SeraphinaMultilingualNeural" — так
    # само влаштовані всі voice-імена Microsoft: <locale>-<VoiceName>).
    _orig_mkssml = edge_tts.communicate.mkssml
    _voice_locale_re = re.compile(r"\(([a-zA-Z]{2,3}-[A-Za-z]{2,}),")
    def _extract_voice_locale(voice):
        """Дістає локаль ('de-DE', 'uk-UA', ...) з voice-рядка. До моменту
        виклику mkssml() edge-tts (у TTSConfig.__post_init__) вже встигає
        розгорнути коротке ім'я голосу ('de-DE-KatjaNeural') у повний
        формат 'Microsoft Server Speech Text to Speech Voice (de-DE,
        KatjaNeural)' — тому локаль тут беремо з дужок, а не з початку
        рядка (короткий формат лишаємо як запасний варіант — про всяк
        випадок, якщо якась версія edge-tts колись поведеться інакше)."""
        if not voice:
            return "en-US"
        m = _voice_locale_re.search(voice)
        if m:
            return m.group(1)
        parts = voice.split("-")
        return "-".join(parts[:2]) if len(parts) >= 2 else "en-US"
    def _patched_mkssml(tc, escaped_text):
        locale = _extract_voice_locale(getattr(tc, "voice", ""))
        ssml = _orig_mkssml(tc, escaped_text)
        return ssml.replace("xml:lang='en-US'", f"xml:lang='{locale}'", 1)
    edge_tts.communicate.mkssml = _patched_mkssml

# ── Конфігурація ──────────────────────────────────────────────
WORKERS = int(os.environ.get('TTS_WORKERS', '1'))
DELAY_SEC = float(os.environ.get('TTS_DELAY', '1.2'))
COMMIT_LIMIT = int(os.environ.get('TTS_COMMIT_LIMIT', '20'))
# Скільки разів повторити спробу синтезу одного файлу перед тим, як
# здатись (транзитні збої Edge TTS API/мережі — тимчасовий rate-limit,
# обрив зʼєднання тощо). RETRY_BASE_DELAY — базова пауза перед повтором,
# зростає експоненційно (спроба 2 → ×2, спроба 3 → ×4 і т.д.).
# Було 3 — піднято до 5: перевірки цілісності (_looks_truncated тощо)
# тепер СТРОГІ (нуль толерантності до розбіжностей у словах, замість
# колишнього м'якого порогу 0.85), тож транзитним мережевим збоям
# природно треба більше спроб, щоб "проскочити" випадковий глюк
# з'єднання, а не застрягти в списку "не вдалося згенерувати".
RETRY_ATTEMPTS = int(os.environ.get('TTS_RETRY_ATTEMPTS', '5'))
RETRY_BASE_DELAY = float(os.environ.get('TTS_RETRY_BASE_DELAY', '2.0'))
# Поля, для яких генерується .words.json (таймінг слів для karaoke-
# підсвітки) — рішення на рівні ГЕНЕРАТОРА, не бази: додавати однаковий
# "wordTiming": true в кожен з тисяч записів бази безглуздо (роздуває
# файл, і будь-яка зміна області дії вимагала б масової правки даних).
# Ключ — internal_cat (ті самі значення, які й так вже обчислює main()
# нижче: "vocab", "sprachbau", "redemittel"). Значення — множина полів
# ЦІЄЇ категорії, для яких потрібен таймінг, або None = усі поля
# категорії (використовується для redemittel, чий список полів
# динамічний: q/a/q1/a1/.../q30/a30 — див. redemittel_fields()).
# vocab: term/short/def — усі 3 поля, які користувач чує й читає услід.
# sprachbau: лише "sentence" (повне речення з підставленим значенням
# замість {{BLANK}} — той самий текст, який реально озвучується, див.
# підстановку нижче) — "answer"/"explanation" підсвічувати нема сенсу,
# це короткі підказки, а не текст для читання услід за озвученням.
# Застосовується лише до PRIMARY_LANG курсу (переклади не підсвічуються,
# те саме обмеження, що вже діяло для redemittel). Додати нову
# категорію/поле в область дії підсвітки — один рядок тут.
CATEGORIES_WITH_TIMING = {
    "vocab":       {"term", "short", "def"},
    "sprachbau":   {"sentence"},
    "redemittel":  None,
    # Forumsbeitrag (forum_XXX) — той самий принцип, що redemittel:
    # усі поля (task + кожна частина допису), лише PRIMARY_LANG.
    "forum":       None,
}

def field_wants_timing(internal_cat, field, lang, primary_lang):
    if lang != primary_lang:
        return False
    if internal_cat not in CATEGORIES_WITH_TIMING:
        return False
    allowed = CATEGORIES_WITH_TIMING[internal_cat]
    return allowed is None or field in allowed

# Список курсів. Для кожного курсу база лежить у файлі "<COURSE>.js"
# у тій самій директорії, що й цей скрипт, а аудіо генерується в
# audio/<COURSE>/... — назва папки аудіо і префікс ключів у
# audio/manifest.json ЗАВЖДИ збігаються з назвою файлу бази без .js.
COURSES = [
    'Deutsch-B2-Beruf',
    'Financial-Accounting-Foundations',
    'Deutsch-A2',
    'Deutsch-B1',
]

AUDIO_ROOT = pathlib.Path('audio')

def manifest_path(course):
    """Кожен курс має ВЛАСНИЙ audio/<course>/manifest.json замість
    одного спільного audio/manifest.json. Клієнт (index.html) знає
    activeCourse ще до завантаження маніфесту — і йому фізично не
    потрібні хеші всіх інших курсів, лише свій. Один спільний файл
    ріс з кожним курсом і при кожному старті довантажував усе відразу,
    хоча в межах сесії користувач бачить максимум один курс."""
    return AUDIO_ROOT / course / 'manifest.json'

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
    },
    # Forumsbeitrag (forum_XXX) — один автор на весь допис (не 2 ролі,
    # як у redemittel q/a). Голос шукаємо СПЕРШУ за card.name (id
    # персонажа з characters.js, той самий принцип, що name_q/name_a
    # у redemittel, — див. resolve_character_voice нижче); цей запис
    # тут — лише запасний варіант, якщо персонажа не вдалось знайти
    # (картка ще без name, чи для потрібної мови його не описано).
    "forum": {
        "post": {"de": "de-DE-KatjaNeural", "uk": "uk-UA-PolinaNeural", "en": "en-US-JennyNeural", "ru": "ru-RU-SvetlanaNeural"}
    },
    # Grammatik-Trainer (gram_* картки) — слова, що показуються на кнопках
    # відповіді (правильний варіант + дистрактори). Той самий голос для
    # всіх слів (справедливе порівняння звучання варіантів), як і в
    # sprachbau.distractors — озвучуються лише мовою PRIMARY_LANG.
    "gram": {
        "word": {"de": "de-DE-AmalaNeural", "uk": "uk-UA-PolinaNeural", "en": "en-GB-SoniaNeural", "ru": "ru-RU-SvetlanaNeural"}
    }
}

# Пул дистракторів Grammatik-Trainer — ТОЧНА копія GRAM_DISTRACTOR_POOL
# з index.html (buildGramCards). Тримати синхронізовано вручну: якщо
# в index.html зʼявляється нова тема "закритого класу" або міняється
# список слів теми — треба продублювати зміну і тут, інакше для нових
# слів аудіо просто не згенерується.
GRAM_DISTRACTOR_POOL = {
    "wortstellung":                      ["weil", "obwohl", "wenn", "während", "nachdem", "bevor", "sobald", "da"],
    "negation":                          ["nicht", "kein", "keine", "nie", "niemand", "nichts", "ohne"],
    "konnektoren_zweiteilig":            ["sowohl", "weder", "zwar", "je", "entweder"],
    "es_pronomen":                       ["das", "dies", "man", "sie"],
    "indefinitpronomen":                 ["jemand", "niemand", "jeder", "etwas", "nichts", "einige", "alle", "manche"],
    "relativsatz_wer":                   ["wen", "wem", "wessen", "wie"],
    "konnektoren_infinitiv":             ["ohne", "anstatt", "statt", "um"],
    "waehrend_genitiv_praeposition":     ["während", "aufgrund", "trotz", "angesichts", "infolge", "wegen", "bezüglich", "unterhalb"],
    "vergleichssaetze_als_wie_je_desto": ["als", "wie", "je", "obwohl", "weil", "während", "bevor"],
    "textzusammenhang":                  ["allerdings", "dennoch", "jedoch", "trotzdem", "daher", "deshalb", "folglich", "außerdem"],
    "praepositionen_nomen_verb_adjektiv": ["an", "auf", "bei", "für", "mit", "nach", "über", "um", "von", "vor", "zu"],
}

GRAM_ANSWER_RE = re.compile(r'<g>(.*?)</g>')


def build_gram_card(item, primary_lang):
    """Відтворює buildGramCards() з index.html: правильна відповідь +
    ДЕТЕРМІНОВАНИЙ (без Math.random) вибір до 4 дистракторів — перші
    слова пулу теми (GRAM_DISTRACTOR_POOL), крім самої відповіді, у
    порядку, в якому їх записано в пулі. Це навмисно збігається з
    JS-версією: card.distractors там більше не рандомізується щосесії,
    тож 'gram_<id>_answer' / 'gram_<id>_distractors_N' стабільно
    відповідають тим самим словам — так само, як card.id+field у
    SPRACHBAUSTEINE. Якщо міняєте цю логіку тут — змініть і в
    buildGramCards() в index.html, інакше pregen-аудіо розійдеться
    з тим, що показує клієнт.

    Повертає {"card_id","answer","distractors"} або None, якщо клієнт
    таку картку не будує (відкритий клас теми / багатослівний маркер /
    <3 дистракторів).
    """
    gram_topic = item.get("gram")
    if not gram_topic:
        return None
    pool = GRAM_DISTRACTOR_POOL.get(gram_topic)
    if not pool:
        return None  # тема "відкритого класу" — Grammatik-Trainer її не показує

    def_field = item.get("def")
    text = def_field.get(primary_lang) if isinstance(def_field, dict) else None
    if not text:
        return None

    m = GRAM_ANSWER_RE.search(text)
    if not m:
        return None
    answer_word = re.sub(r'</?b>', '', m.group(1)).strip()
    if not answer_word or len(answer_word.split()) > 1:
        return None  # MVP: лише однослівні маркери

    distractors = [w for w in pool if w.lower() != answer_word.lower()][:4]
    if len(distractors) < 3:
        return None  # недостатньо дистракторів — картка не будується клієнтом

    return {
        "card_id": f"gram_{item['id']}",
        "answer": answer_word,
        "distractors": distractors,
    }


def collect_gram_words(raw_items, primary_lang):
    """Унікальні слова, що зʼявляються на кнопках Grammatik-Trainer
    (відповідь + дистрактори), зібрані з УСІХ карток курсу. Тут — саме
    дедуплікація: пул однієї теми (GRAM_DISTRACTOR_POOL) — це лише
    4-11 слів, а використовує його кожна VOCAB-картка цієї теми
    (десятки карток). Без дедуплікації кожна картка штампує ОКРЕМИЙ
    файл під те саме слово (gram_<id1>_answer, gram_<id2>_distractors_1,
    ...) — сотні майже ідентичних mp3 замість кількох десятків слів на
    тему. Дистрактори тепер детерміновані (build_gram_card, без
    Math.random), тож безпечно озвучити кожне слово ОДИН РАЗ і
    посилатись на нього з будь-якої картки за текстом слова.

    ДЕДУПЛІКАЦІЯ БЕЗ УРАХУВАННЯ РЕГІСТРУ (.lower() як ключ) — і це не
    косметика, а причина давнього бага "ті самі 56 файлів постійно
    перегенеруються": те саме слово-конектор у реченні природно
    трапляється і з великої літери (на початку речення — 'Allerdings'),
    і з малої (в середині — 'allerdings'), а в GRAM_DISTRACTOR_POOL
    (тут, у Python) слова завжди записані малими. Раніше words був
    звичайним case-sensitive set() — 'Allerdings' і 'allerdings'
    потрапляли туди як ДВА різні елементи, slugify_word() зводив обидва
    до ОДНОГО й того самого файлу (gram_word_allerdings_de_100), але
    кожен зі своїм текстом → своїм content_hash. Обидва проходили через
    okremі asyncio-таски, що писали в manifest.json під той самий mkey
    — хто з них завершувався ОСТАННІМ (а порядок завершення паралельних
    мережевих запитів до Edge TTS не гарантований), той і "вигравав" цей
    прогін. Наступного прогону програний варіант знову не збігався з
    manifest і йшов у CHANGED — і так безкінечно, два варіанти
    "боролися" за один mkey щоразу. Перший-по-порядку варіант (за
    порядком items у базі) тепер лишається канонічним завжди — і write
    в manifest.json стабілізується raз і назавжди.
    """
    words = {}  # lower() -> перша (за порядком items) форма слова
    for item in raw_items:
        card = build_gram_card(item, primary_lang)
        if not card:
            continue
        for w in [card["answer"]] + card["distractors"]:
            key = w.lower()
            if key not in words:
                words[key] = w
    return set(words.values())


def slugify_word(word):
    """Файлобезпечний, читабельний ідентифікатор слова для імені файлу.
    МАЄ давати той самий результат, що й slugifyGramWord() в index.html —
    інакше клієнт шукатиме не ту назву файлу."""
    slug = word.strip().lower()
    slug = re.sub(r'[^a-zäöüßа-яіїєёʼ0-9]+', '_', slug, flags=re.IGNORECASE)
    slug = slug.strip('_')
    return slug or hashlib.sha256(word.encode('utf-8')).hexdigest()[:8]

def get_voice_id(category, sub_type, lang):
    try:
        return VOICE_MAPPING[category][sub_type][lang]
    except KeyError:
        fallbacks = {"de": "de-DE-KatjaNeural", "uk": "uk-UA-PolinaNeural", "en": "en-US-AriaNeural", "ru": "ru-RU-SvetlanaNeural"}
        return fallbacks.get(lang, "de-DE-KatjaNeural")

def resolve_character_voice(characters_list, stored_id, target_lang):
    """Персонажа в картці dlg_XXX задано ОДНИМ id певної мови (напр.
    card['name_q'] = 'de_w_julia'), а генерувати аудіо треба на кожну
    мову картки (de/en/uk/ru). Конвенція id — '<lang>_<персонаж>'
    (de_w_julia, en_w_julia, uk_w_julia, ru_w_julia — той самий
    персонаж, 4 записи в CHARACTERS, по одному на мову). Тож беремо
    суфікс після мовного префікса ('w_julia') і шукаємо в CHARACTERS
    запис '<target_lang>_<той самий суфікс>' — так одна й та сама
    "людина" звучить відповідним голосом незалежно від того, якою
    мовою зараз озвучується репліка.

    Повертає edge_tts-голос або None, якщо персонажа для потрібної
    мови не знайдено (тоді викликач сам вирішує запасний варіант)."""
    if not stored_id or not characters_list:
        return None
    parts = stored_id.split('_', 1)
    if len(parts) != 2:
        return None
    persona_suffix = parts[1]  # напр. 'w_julia'
    target_id = f"{target_lang}_{persona_suffix}"
    for c in characters_list:
        if c.get("id") == target_id:
            return c.get("edge_tts")
    # Персонажа для цієї мови ще не описано в CHARACTERS (курс поки не
    # додав переклад) — пробуємо буквально заданий id, якщо його мова
    # раптом і так збігається з потрібною.
    for c in characters_list:
        if c.get("id") == stored_id and c.get("lang") == target_lang:
            return c.get("edge_tts")
    return None

def redemittel_fields(item):
    """Впорядкований список полів-реплік ОДНІЄЇ картки dlg_XXX: базові
    q/a завжди присутні, далі — за наявності в даних — q1/a1, q2/a2,
    ... доки в картці є хоч одне з полів наступного номера. Точна
    копія логіки _dlgCardTurns() з index.html — тримати синхронізовано,
    інакше pregen-аудіо розійдеться з тим, які репліки показує клієнт."""
    fields = ['q', 'a']
    n = 1
    while n <= 30 and (f'q{n}' in item or f'a{n}' in item):
        if f'q{n}' in item: fields.append(f'q{n}')
        if f'a{n}' in item: fields.append(f'a{n}')
        n += 1
    return fields

def forum_fields(item):
    """Впорядкований список полів-'реплік' ОДНІЄЇ картки forum_XXX:
    'task' (умова/тема допису — озвучується так само, як dlg_task у
    redemittel) першим, далі — role кожного елемента item['parts'] у
    тому порядку, в якому вони й так записані в базі (anrede,
    einleitung, meinung, pro, kontra, vorschlag, schluss, name). Точна
    відповідність _frmCardsToUnits()/FRM_ROLE_LABELS в index.html —
    тримати синхронізовано, інакше pregen-аудіо розійдеться з тим, що
    показує клієнт.

    ⚠️ Одна з ролей у parts буквально зветься "name" (підпис під
    дописом, напр. "Anna") — НЕ плутати з card['name'] на рівні картки
    (id персонажа-автора з characters.js, напр. "de_w_anna"). Саме тому
    forum_XXX, на відміну від redemittel, НЕ переливається в generic
    "field_obj = item.get(field)"-цикл нижче (там 'name' резолвився б
    у card['name'] замість тексту репліки-підпису) — обробляється
    окремою гілкою (див. internal_cat == "forum" у main())."""
    fields = ['task']
    for part in item.get('parts') or []:
        role = part.get('role') if isinstance(part, dict) else None
        if role:
            fields.append(role)
    return fields

def forum_field_text(item, field):
    """Текст (мовний dict {de,en,uk,ru}) для поля картки forum_XXX —
    'task' читається з item['task'] напряму, будь-яке інше поле
    шукається за role серед item['parts']. Повертає {} якщо не
    знайдено (виклик коду тоді просто нічого не генерує для нього).
    'role' — службовий ключ самого part-об'єкта, не мова, тому явно
    виключений з результату (інакше цикл нижче спробував би озвучити
    буквальний рядок ролі, напр. 'anrede', як "текст мовою role")."""
    if field == 'task':
        return item.get('task') or {}
    for part in item.get('parts') or []:
        if isinstance(part, dict) and part.get('role') == field:
            return {k: v for k, v in part.items() if k != 'role'}
    return {}

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

    # <g>/<b>/<r> — лише граматична/смислова розмітка, вміст залишається,
    # самі теги-обгортки прибираємо без заміни на пробіл. <r> — маркер
    # стандартних фраз (Redemittel) у діалогах; для TTS це звичайний
    # текст, лише на клієнті він підсвічується кольором.
    text = re.sub(r'</?g>', '', text)
    text = re.sub(r'</?b>', '', text)
    text = re.sub(r'</?r>', '', text)

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

# Суфікс, яким позначається в manifest.json той факт, що для файлу вже
# згенеровано .words.json (таймінг слів), а не лише сам mp3. Замість
# окремого стану "чи є таймінг" на диску (дорога перевірка файлової
# системи на тисячах записів) кодуємо це прямо у значенні manifest —
# порівняння "очікуване значення vs збережене" тоді саме по собі виявляє
# і зміну контенту (CHANGED), і старий запис без таймінгу (TIMING-BACKFILL),
# без жодного stat()-виклику. TTS_BACKFILL_TIMINGS більше не потрібен:
# бекфіл старих файлів (mp3 без .words.json) стається сам собою на
# найближчому звичайному прогоні, щойно для їхньої категорії/мови
# want_timing стає True.
TIMED_SUFFIX = "+t"

def manifest_value(content_hash, want_timing):
    """Значення, що пишеться в manifest.json для ключа: content_hash,
    доповнений позначкою TIMED_SUFFIX, якщо для цього файлу мав бути (і,
    відповідно, вже є) згенерований .words.json."""
    return f"{content_hash}{TIMED_SUFFIX}" if want_timing else content_hash

def manifest_hash_part(value):
    """Витягує чистий content_hash зі значення manifest.json — незалежно
    від того, чи позначений він TIMED_SUFFIX. Завдяки цьому старий запис
    (закомічений до появи таймінгу, тому без суфіксу) з тим самим хешем,
    що й зараз, коректно розпізнається як 'контент не змінився, просто
    таймінгу ще бракує' — а не як 'CHANGED', що змусило б перегенерувати
    сам mp3 без потреби."""
    if value is None:
        return None
    return value[:-len(TIMED_SUFFIX)] if value.endswith(TIMED_SUFFIX) else value

def _error_snippet(text, pos, context=80):
    """Фрагмент тексту навколо позиції помилки json.loads (pos —
    символьний офсет від початку рядка, що передавався в json.loads)."""
    start = max(0, pos - context)
    end = min(len(text), pos + context)
    snippet = text[start:end].replace('\n', '⏎')
    marker_pos = pos - start
    return f"{snippet}\n{' ' * marker_pos}^-- тут"


def _single_to_double_quoted_values(s):
    """Конвертує 'значення' (одинарні лапки) на "значення" (подвійні) —
    ЛИШЕ в позиції значення (одразу після ':', тобто property value),
    а не будь-де в тексті. Так апострофи всередині вже ПОДВІЙНОлапкових
    рядків картки (напр. "ім'я") лишаються недоторканими — цей regex їх
    навіть не бачить, він шукає конкретно ':' + одинарні лапки."""
    def repl(m):
        inner = m.group(1)
        inner = inner.replace("\\'", "'")   # \' → ' (розекранування)
        inner = inner.replace('"', '\\"')   # а вже наявні " екрануємо
        return ': "' + inner + '"'
    return re.sub(r":\s*'((?:[^'\\]|\\.)*)'", repl, s)


def _parse_js_array_blocks(content, file_path):
    """Спільна логіка розбору 'var/let/const/export NAME = [...]' блоків
    з тексту JS-файлу — використовується і для файлів курсів
    (load_js_database), і для спільного characters.js
    (load_characters_file). Повертає список (var_name, items) — items
    це вже розпарсений Python-список словників.

    Спершу строгий json.loads(); якщо не вдалось (людяний JS-стиль з
    нелапкованими ключами об'єкта і/або одинарними лапками у значеннях)
    — fallback-нормалізація. Обидва варіанти прибирають // та /* */
    коментарі і trailing comma перед парсингом."""
    blocks = re.findall(r'(?:var|let|const|export)\s+(\w+)\s*=\s*(\[.*?\])\s*(;|\n\n|var|let|const|export|$)', content, re.DOTALL)

    if not blocks:
        print(f"⚠ У файлі {file_path} regex не знайшов жодного блоку виду "
              f"'var/let/const/export NAME = [...]'. Файл або порожній, "
              f"або має нестандартну структуру — перевір вручну.", flush=True)

    results = []
    for var_name, array_content, _ in blocks:
        clean_array = re.sub(r'//.*', '', array_content)
        clean_array = re.sub(r'/\*.*?\*/', '', clean_array, flags=re.DOTALL)
        clean_array = re.sub(r',\s*([\]\}])', r'\1', clean_array)

        try:
            items = json.loads(clean_array)
            if isinstance(items, list):
                results.append((var_name, items))
        except json.JSONDecodeError as e_strict:
            # Деякі масиви (наприклад SPRACHBAUSTEINE) написані в "людяному"
            # JS-стилі з нелапкованими ключами об'єкта ({id:"x"} замість
            # {"id":"x"}) і/або одинарними лапками у значеннях (значення
            # {"id":'NVV'} замість {"id":"NVV"} — саме так була написана
            # CATS у Deutsch-B2-Beruf.js/Financial-Accounting-Foundations.js,
            # через що весь масив падав ЦІЛКОМ) — валідний JS, невалідний
            # JSON. Застосовуємо нормалізацію ЛИШЕ як fallback, коли
            # строгий парсинг провалився: масиви з текстом, що містить
            # двокрапки/апострофи всередині ПОДВІЙНОлапкових рядкових
            # значень (DIALOGE тощо), уже парсяться строгим json.loads()
            # вище і НІКОЛИ не доходять до цього regex.
            try:
                normalized = re.sub(r'([{,]\s*)([a-zA-Z_]\w*)\s*:', r'\1"\2":', clean_array)
                normalized = _single_to_double_quoted_values(normalized)
                items = json.loads(normalized)
                if isinstance(items, list):
                    results.append((var_name, items))
            except json.JSONDecodeError as e_fallback:
                print(f"\n❌ Не вдалося розпарсити масив '{var_name}' у файлі {file_path}.", flush=True)
                print(f"   Строгий парсинг:   {e_strict.msg} (рядок {e_strict.lineno}, колонка {e_strict.colno})", flush=True)
                print(f"   Fallback-парсинг:  {e_fallback.msg} (рядок {e_fallback.lineno}, колонка {e_fallback.colno})", flush=True)
                print(f"   Фрагмент навколо помилки fallback-парсингу:", flush=True)
                print(f"   ...{_error_snippet(normalized, e_fallback.pos)}...\n", flush=True)
            except Exception as e_fallback:
                print(f"\n❌ Не вдалося розпарсити масив '{var_name}' у файлі {file_path}: "
                      f"{type(e_fallback).__name__}: {e_fallback}\n", flush=True)
    return results


# Спільний файл персонажів (характери діалогів — однакові для ВСІХ
# курсів, тепер винесені з кожного окремого "<COURSE>.js" в один
# "characters.js" поруч зі скриптом; index.html теж завантажує його
# окремо і кешує між курсами — див. loadCharactersScript() там).
CHARACTERS_FILE = pathlib.Path('characters.js')

def load_characters_file(file_path=CHARACTERS_FILE):
    """Завантажує CHARACTERS ОДИН РАЗ зі спільного файлу (а не з кожного
    курсу окремо, як було раніше). Якщо файл відсутній — повертає []
    і виводить попередження; генерація діалогів тоді просто відкотиться
    на дефолтний голос ролі з VOICE_MAPPING (той самий фолбек, що й
    завжди був для персонажа, якого не знайдено)."""
    if not file_path.exists():
        print(f"⚠ Спільний файл персонажів '{file_path}' не знайдено — "
              f"аудіо діалогів озвучиться дефолтними голосами ролі "
              f"(VOICE_MAPPING), без персональних edge_tts-голосів.", flush=True)
        return []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Кожен запис CHARACTERS посилається на аватарку через
    # CHARACTER_AVATARS.<ключ> (щоб не дублювати важкі base64-рядки по
    # 4 рази на персонажа — одна аватарка на 4 мовні записи). У браузері
    # це звичайна JS-змінна, яка резолвиться сама; для ЦЬОГО парсера
    # (він читає файл як майже-JSON, JS не виконує) таке посилання —
    # непарсибельний токен, через який весь масив CHARACTERS раніше
    # падав ЦІЛКОМ (і генерація діалогів відкочувалась на 0 персонажів).
    # gen_audio.py аватарки не використовує (лише id/lang/edge_tts для
    # підбору голосу) — тож просто прибираємо поле "avatar": ... з
    # тексту перед парсингом, замість того щоб резолвити саме значення.
    content = re.sub(r',?\s*"avatar"\s*:\s*CHARACTER_AVATARS\.\w+', '', content)

    for var_name, items in _parse_js_array_blocks(content, file_path):
        if var_name == "CHARACTERS":
            return items
    print(f"⚠ У файлі '{file_path}' не знайдено var CHARACTERS.", flush=True)
    return []


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
    # CHARACTERS у файлах курсів більше НЕ визначається (винесено в
    # спільний characters.js, див. load_characters_file() вище) — але
    # якщо раптом і трапиться в старому/ще не мігрованому файлі курсу,
    # просто ігноруємо його тут: джерело правди тепер одне.
    for var_name, items in _parse_js_array_blocks(content, file_path):
        if var_name in ["CATS", "LESSONS", "CHARACTERS"]:
            continue
        for item in items:
            if isinstance(item, dict) and "id" in item:
                item["_fallback_var"] = var_name
                raw_items.append(item)

    return config, raw_items, primary_lang

def _tokenize_like_frontend(text):
    """Токенізація ТОЧНО як wrapWordsForHighlight() в index.html
    (WORD_RE = /[\\p{L}\\p{N}'-]+/gu — літери, цифри, апостроф, ДЕФІС;
    жодної пунктуації, жодних самостійних тире-пауз). Раніше тут був
    наївний re.findall(r"\\S+", ...) (розбиття за пробілами) — і він
    рахував СИСТЕМАТИЧНО БІЛЬШЕ "слів", ніж є насправді: розділові знаки,
    приліплені до слова ("Firma,"), і особливо самостійне тире-паузу
    ("–", U+2013 EN DASH, часто оточене пробілами з обох боків) — усе це
    Edge TTS не озвучує як окреме "слово" і, відповідно, НЕ створює під
    це WordBoundary-подію. М'який поріг допустимості (0.85) раніше
    маскував цю розбіжність, не даючи побачити РЕАЛЬНІ обриви — картка з
    одним тире-паузою й одним обірваним словом посередині виглядала
    так само "майже повною", як картка без жодної проблеми.

    `\\w` у Python (за замовчуванням, без re.ASCII) вже покриває Unicode-
    літери/цифри — еквівалент \\p{L}\\p{N} з невеликою різницею
    (додатково матчить '_', що в природному тексті курсу не трапляється,
    отже не впливає на результат)."""
    return re.findall(r"[\w'-]+", text, re.UNICODE)


def _looks_truncated(cleaned_text, boundary_words):
    """Перевірка ЦІЛІСНОСТІ потоку Edge TTS — не плутати з перевіркою
    ВИМОВИ (це недосяжно без ASR, і скрипт цього свідомо не робить, див.
    коментар над synthesize_speech).

    Причина, чому це взагалі потрібно: у бібліотеці edge-tts цикл
    "async for received in websocket" у Communicate.__stream() просто
    МОВЧКИ завершується, якщо з'єднання обірветься ДО отримання
    "turn.end" — виняток кидається лише тоді, коли не надійшло ЖОДНОГО
    аудіобайту (NoAudioReceived). compute_content_hash() рахується з
    (текст, голос, швидкість) — жодного з них обрив не змінює, тож без
    цієї перевірки обірваний файл назавжди лишався б у manifest.json як
    "валідний" і ніколи більше не перегенерувався б.

    ⚠️ РАНІШЕ тут була м'яка перевірка (ratio ≥ 0.85 + збіг лише
    ОСТАННЬОГО слова) — вона ловила лише обрив У КІНЦІ фрази. Реальний
    звіт користувача: "у таймінгу було пропущене ОДНЕ слово ПОСЕРЕДИНІ
    речення, і слідкування відставало на 1 слово до кінця фрази". Для
    речення з 20 слів це ratio=19/20=0.95 — МИНАЄ поріг 0.85 без жодної
    помилки, а останнє слово при цьому все одно збігається (загублене
    слово не в кінці) — стара перевірка була структурно сліпа саме до
    цього класу браку.

    Тепер — ПОВНЕ ПОСЛІДОВНЕ вирівнювання (difflib.SequenceMatcher) між
    очікуваними словами (_tokenize_like_frontend, той самий регексп, що
    й на клієнті) і реально отриманими WordBoundary-текстами: БУДЬ-ЯКА
    розбіжність (вставка/видалення/заміна) — на будь-якій позиції, не
    лише в кінці — трактується як обрив. Це свідомо СТРОГО (нуль
    толерантності): ціна хибного спрацювання — один зайвий retry
    (дешево), а ціна пропущеного браку — файл, який ніхто не почує
    зламаним одразу і доведеться шукати вручну на слух (дорого)."""
    expected = _tokenize_like_frontend(cleaned_text)
    if not expected:
        return False
    if not boundary_words:
        # Голос без підтримки WordBoundary (рідкість, але буває) —
        # перевірити нічим, не караємо хибним "обірвано".
        return False

    norm = lambda w: re.sub(r"[^\w'-]", "", w, flags=re.UNICODE).lower()
    expected_norm = [norm(w) for w in expected]
    got_norm = [norm(w) for w in boundary_words]

    sm = difflib.SequenceMatcher(None, expected_norm, got_norm, autojunk=False)
    for tag, _i1, _i2, _j1, _j2 in sm.get_opcodes():
        if tag != 'equal':
            return True
    return False


def _looks_timing_desynced(words, audio_duration_sec):
    """Друга, ОКРЕМА перевірка цілісності — ловить інший тип обриву, ніж
    _looks_truncated() вище. Там перевіряється, чи прийшли ВСІ слова
    (кількість + останнє слово збігається з текстом) — це ловить обрив
    самого потоку/тексту. А буває інакше: усі слова прийшли коректно,
    ТЕКСТ повний — але останнє слово в WordBoundary-метаданих отримує
    'end', що суттєво РОЗХОДИТЬСЯ з РЕАЛЬНОЮ тривалістю готового
    mp3-файлу. У застосунку karaoke-підсвітка орієнтується саме на ці
    'end'-мітки — тож слідкування розходиться зі звуком.

    ⚠️ Перевіряємо РІЗНИЦЮ В ОБИДВА БОКИ (abs()), не лише "аудіо довше
    за таймінг". Спочатку тут була лише перевірка "audio_duration - last_end
    > tolerance" (аудіо триває довше, ніж заявляють слова) — і вона
    справді ловить один клас розсинхрону. Але є й ДЗЕРКАЛЬНИЙ, часто
    НЕБЕЗПЕЧНІШИЙ випадок: WordBoundary-канал (текстові повідомлення)
    і аудіобінарник ідуть ОКРЕМИМИ повідомленнями одного вебсокета, і
    Azure явно встигає надіслати метадані слів РАНІШЕ за відповідний
    аудіобайт — тобто при обриві з'єднання посеред фрази цілком реально
    отримати ПОВНИЙ (чи майже повний) список WordBoundary-подій, які
    заявляють, що фраза триває, скажімо, 9с, — а РЕАЛЬНЕ аудіо обірване
    на 6с. _looks_truncated() це НЕ ловить (кількість/останнє слово в
    метаданих збігаються з текстом!), а стара версія цієї функції теж
    пропускала (перевіряла лише один знак різниці). Саме це, найімовірніше,
    і є причиною, чому кілька Forumsbeitrag-реплік лишались бракованими
    навіть після першого раунду фіксів.

    Толерантність: max(0.6 сек, 5% тривалості) — не караємо природну
    коротку паузу/дихання в кінці репліки, яку Edge TTS іноді додає
    після останнього слова; спрацьовує лише на дійсно суттєвий розрив."""
    if not words or audio_duration_sec is None:
        return False
    last_end = words[-1].get('end')
    if last_end is None:
        return False
    gap = abs(audio_duration_sec - last_end)
    tolerance = max(0.6, 0.05 * audio_duration_sec)
    return gap > tolerance


def _stream_reached_turn_end(communicate, max_ssml_bytes=4000):
    """НАЙАВТОРИТЕТНІШИЙ сигнал з усіх трьох перевірок у цьому файлі —
    не евристика (кількість слів/тривалість), а власне підтвердження
    ПРОТОКОЛУ Azure, що потік дійсно завершився штатно.

    Чому попередні дві перевірки (_looks_truncated/_looks_timing_desynced)
    можуть пропустити обрив: WordBoundary-метадані (текстові повідомлення
    вебсокета) і аудіобайти (бінарні повідомлення того ж вебсокета) — це
    ДВА ОКРЕМІ потоки повідомлень в одному з'єднанні. Судячи з усього,
    Azure встигає надіслати метадані слів РАНІШЕ за відповідний
    аудіобайт — тобто при обриві з'єднання посеред фрази цілком реально
    отримати ПОВНИЙ список WordBoundary-подій (усі слова, останнє слово
    збігається з текстом, кінцевий таймінг виглядає правдоподібно), а
    РЕАЛЬНЕ аудіо при цьому обірване. Обидві попередні перевірки в такому
    разі мовчки проходять.

    edge-tts (Communicate.__stream(), приватний метод) сам знає точний
    момент завершення — сервер надсилає окреме службове повідомлення
    "Path:turn.end", і ЛИШЕ в цій гілці викликається self.__compensate_offset(),
    яка переносить communicate.state['chunk_audio_bytes'] у
    ['cumulative_audio_bytes']. Ніде більше в бібліотеці ці поля не
    зачіпаються. Тобто ПІСЛЯ .save():
      - якщо turn.end дійшов -> cumulative_audio_bytes > 0 (за умови, що
        аудіо взагалі було — інакше .save() впав би сам з NoAudioReceived)
      - якщо НЕ дійшов (з'єднання обірвалось РАНІШЕ) -> cumulative_audio_bytes
        лишається 0, попри те що якісь байти аудіо й слова могли прийти

    Публічного API для цього прапорця в edge-tts нема — читаємо
    напряму з communicate.state (звичайний dict, не name-mangled метод,
    тому значно безпечніше за монкіпатч самого __stream()). Це той
    самий принцип, про який згадувалось: "відповідь сервера, яка
    підтверджує успіх" — тут вона в буквальному сенсі є.

    max_ssml_bytes: ця перевірка коректна лише коли текст поміщається в
    ОДИН SSML-чанк (бібліотека ділить текст на шматки по 4096 байт —
    Communicate.__init__, split_text_by_byte_length). У нашому випадку
    (окремі речення Forumsbeitrag/Dialogue/Vocab, максимум кілька сотень
    символів) це завжди один чанк, але про всяк випадок явно перевіряємо
    довжину SSML-тексту (не мовою символів, байтами — кирилиця/умлаути
    важать більше за ASCII).

    Повертає True (turn.end підтверджено), False (НЕ підтверджено —
    обрив) або None (текст надто довгий, кілька SSML-чанків — надійно
    перевірити не можемо, викликач тоді просто пропускає цю перевірку,
    не блокуючи файл через неї)."""
    partial_text = communicate.state.get('partial_text', b'')
    text_bytes = len(partial_text) if isinstance(partial_text, bytes) \
        else len(str(partial_text).encode('utf-8'))
    if text_bytes > max_ssml_bytes:
        return None
    return communicate.state.get('cumulative_audio_bytes', 0) > 0


async def synthesize_speech(text, voice, rate_str, output_path, want_timing=False):
    """Генерація аудіо через Edge TTS — з ТРЬОМА незалежними рівнями
    перевірки цілісності (кожен ловить свій клас обриву з'єднання,
    жоден не є надлишковим):

    1. _stream_reached_turn_end() — НАЙАВТОРИТЕТНІША: власне підтвердження
       протоколу Azure (службове повідомлення "turn.end"), а не здогад за
       даними. Ловить обрив ПІСЛЯ того, як усі WordBoundary-метадані вже
       встигли дійти, але АУДІО — ні (метадані й аудіобайти йдуть
       окремими повідомленнями того самого вебсокета).
    2. _looks_truncated() — кількість WordBoundary-подій і останнє слово
       звірені з текстом. Ловить обрив ДО того, як усі метадані встигли
       дійти (класичний "потік урвався за кілька слів до кінця").
    3. _looks_timing_desynced() — 'end'-мітка останнього слова звірена з
       РЕАЛЬНОЮ тривалістю готового mp3 (через mutagen). Ловить розсинхрон
       в ОБИДВА боки: аудіо триває довше за таймінг (untracked хвіст) АБО
       таймінг заявляє довшу тривалість, ніж є в аудіо насправді.

    WordBoundary-події (позиція+тривалість/текст КОЖНОГО слова в
    аудіопотоці) запитуються ЗАВЖДИ, незалежно від want_timing — не лише
    заради karaoke-таймінгу (той самий принцип, що Read Aloud у браузері
    Edge), а й тому, що це необхідний вхід для перевірок 2 і 3 вище. За
    замовчуванням бібліотека віддає лише SentenceBoundary — потрібно явно
    попросити boundary="WordBoundary".

    want_timing=True — .words.json зберігається як сайдкар-файл поруч з
    аудіо (для karaoke-підсвітки в застосунку): список [{word, start,
    end}], start/end — у СЕКУНДАХ (offset/duration від Edge TTS приходять
    у тіках по 100 наносекунд — TICKS_PER_SECOND=10_000_000 — ділимо на 1e7).
    want_timing=False — ті самі WordBoundary-події отримуємо й перевіряємо,
    але .words.json НЕ пишемо (категорії поза CATEGORIES_WITH_TIMING його
    не потребують) — невеликий додатковий трафік метаданих ціною захисту
    від тихого обриву того самого файлу.

    Обірваний синтез (будь-яка з трьох перевірок) кидає RuntimeError —
    це ПОТРАПЛЯЄ в уже наявний retry-цикл worker_task (видаляє частковий
    файл, повторює спробу з експоненційною паузою), тож жодних змін у
    worker_task не знадобилось.

    Порожній words.json (для дуже коротких текстів/голосів без підтримки
    boundary) — не помилка: фронтенд просто не підсвічує в такому випадку.
    """
    if not edge_tts:
        raise RuntimeError("Пакет 'edge-tts' не встановлено.")
    rate_val = int(rate_str)
    sign = "+" if rate_val >= 100 else "-"
    diff = abs(rate_val - 100)
    edge_rate = f"{sign}{diff}%"

    communicate = edge_tts.Communicate(text, voice, rate=edge_rate, boundary="WordBoundary")
    # save() з metadata_fname пише JSONL (по одному WordBoundary-об'єкту на
    # рядок) — це вбудований, вже перевірений шлях бібліотеки, безпечніший
    # за ручний обхід communicate.stream(). Тимчасовий файл видаляємо після
    # того, як переклали дані у власний компактний .words.json (чи просто
    # звірили на цілісність, якщо want_timing=False).
    raw_meta_path = pathlib.Path(str(output_path) + '.meta.jsonl')
    await communicate.save(str(output_path), str(raw_meta_path))

    # ПЕРША й найавторитетніша перевірка — власне підтвердження протоколу
    # Azure (turn.end), а не здогад за словами/тривалістю. Див. докладний
    # коментар біля _stream_reached_turn_end() вище: САМЕ ЦЕЙ клас обриву
    # (метадані слів дійшли повністю, а аудіобінарник — ні, бо це різні
    # повідомлення того самого вебсокета) попередні дві перевірки не
    # ловлять взагалі, тож ставимо цю проверку ПЕРШОЮ, до будь-якого
    # аналізу самих words.
    turn_end_ok = _stream_reached_turn_end(communicate)
    if turn_end_ok is False:
        raw_meta_path.unlink(missing_ok=True)
        raise RuntimeError(
            "Потік Edge TTS не дійшов до turn.end (сервер НЕ підтвердив "
            "завершення фрази) — файл, судячи з усього, обірваний "
            "(можливо, вже ПІСЛЯ того, як усі WordBoundary-метадані "
            "встигли прийти) і не буде збережений."
        )

    words = []
    if raw_meta_path.exists():
        try:
            with open(raw_meta_path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        meta = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    if meta.get('type') != 'WordBoundary':
                        continue
                    words.append({
                        'word':  meta['text'],
                        'start': round(meta['offset'] / 10_000_000, 3),
                        'end':   round((meta['offset'] + meta['duration']) / 10_000_000, 3),
                    })
        finally:
            raw_meta_path.unlink(missing_ok=True)

    if _looks_truncated(text, [w['word'] for w in words]):
        expected_n = len(_tokenize_like_frontend(text))
        raise RuntimeError(
            f"Обірваний потік Edge TTS: отримано {len(words)} слів-подій, "
            f"текст очікує {expected_n} — файл, судячи з усього, "
            f"обрізаний і не буде збережений."
        )

    if want_timing:
        # Друга перевірка — вже ПІСЛЯ того, як текст визнано повним
        # (_looks_truncated вище пройшла). Тут ловимо інший випадок:
        # текст і аудіо повні, але останнє слово в таймінгу закінчується
        # суттєво РАНІШЕ за фактичний кінець mp3-файлу (розсинхрон
        # WordBoundary-метаданих і аудіопотоку на довших фразах — див.
        # _looks_timing_desynced() вище). Читаємо реальну тривалість
        # готового mp3 через mutagen (без ffmpeg).
        #
        # Якщо mutagen не встановлено (MP3 is None) — перевірку тихо
        # пропускаємо: краще згенерувати без цієї гарантії, ніж впасти
        # через відсутню опціональну залежність.
        if MP3 is not None and words:
            try:
                audio_duration = MP3(str(output_path)).info.length
            except Exception:
                # Пошкоджений/нечитаний mp3 — це само по собі підозріло
                # (файл щойно записаний тим самим Edge TTS), тож теж
                # трактуємо як обрив і йдемо на retry.
                raise RuntimeError(
                    "Не вдалося прочитати тривалість щойно згенерованого "
                    "mp3 (mutagen) — файл, судячи з усього, пошкоджений "
                    "і не буде збережений."
                )
            if _looks_timing_desynced(words, audio_duration):
                raise RuntimeError(
                    f"Розсинхрон таймінгу: останнє слово закінчується на "
                    f"{words[-1]['end']:.2f}с, а аудіофайл триває "
                    f"{audio_duration:.2f}с — підсвітка в застосунку "
                    f"зупинилася б раніше за звук, файл не буде збережений."
                )

        timing_path = pathlib.Path(str(output_path)).with_suffix('.words.json')
        with open(timing_path, 'w', encoding='utf-8') as f:
            json.dump(words, f, ensure_ascii=False)


def git_commit_and_push(count):
    """Комітить+пушить поточний stage (якщо є що), і В БУДЬ-ЯКОМУ РАЗІ
    намагається допушити будь-які МІСЦЕВІ коміти, що ще не в origin —
    напр. якщо попередній виклик закомітив, а push тоді не пройшов: без
    цього такий "застряглий" коміт ніколи більше не пушився б і губився
    б разом з ефемерним runner'ом по завершенню джоби. Падає (raise) при
    остаточній невдачі — щоб зіпсований прогон одразу було видно як ❌ в
    GitHub Actions, а не тихо втрачати дані щоразу.
    """
    subprocess.run(["git", "add", "audio/"], check=True)
    status = subprocess.run(["git", "diff", "--staged", "--quiet"])
    if status.returncode != 0:
        msg = f"🎙 TTS Audio Update: +{count} files [skip ci]"
        subprocess.run(["git", "commit", "-m", msg], check=True)
        print(f"--- [Git Bot] Закомічено пачку з {count} файлів ---", flush=True)

    # Незалежно від того, чи саме ЦЕЙ виклик щось закомітив — допушуємо
    # будь-які локальні коміти, яких ще нема в origin (напр. лишились
    # непушнутими з попереднього виклику, де commit пройшов, а push — ні).
    ahead = subprocess.run(
        ["git", "rev-list", "@{u}..HEAD", "--count"],
        capture_output=True, text=True
    )
    if ahead.returncode == 0 and ahead.stdout.strip() not in ("", "0"):
        push_result = subprocess.run(["git", "push"])
        if push_result.returncode != 0:
            print("--- [Git Bot] Push відхилено, пробуємо pull --rebase і повторити ---", flush=True)
            subprocess.run(["git", "pull", "--rebase"], check=True)
            subprocess.run(["git", "push"], check=True)
        print("--- [Git Bot] Запушено ---", flush=True)

def write_to_manifest_file(course, mkey, value):
    path = manifest_path(course)
    current_manifest = {}
    if path.exists():
        try:
            with open(path, 'r', encoding='utf-8') as f:
                current_manifest = json.load(f)
        except: pass

    current_manifest[mkey] = value
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(current_manifest, f, ensure_ascii=False, indent=2)

# ── Основний асинхронний воркер ─────────────────────────────────
async def worker_task(task, semaphore, stats, lock, total_tasks):
    file_dir = task["audio_base"] / task["lang"] / task["rate"] / task["cat_lower"]
    file_dir.mkdir(parents=True, exist_ok=True)
    file_path = file_dir / task["filename"]

    async with semaphore:
        async with lock:
            stats["processed_tasks"] += 1
            current_num = stats["processed_tasks"]

        # NEW — цього mkey раніше не було в manifest.json взагалі.
        # CHANGED — ключ був, але з ІНШИМ хешем (текст/голос/швидкість
        # відрізняються від того, що вже закомічено). TIMING-BACKFILL —
        # хеш той самий, просто раніше згенерованому файлу бракувало
        # .words.json (старий запис у manifest.json ще без TIMED_SUFFIX,
        # з'явився до того, як цій категорії/полю стало треба таймінг).
        # Усі три випадки обробляються ОДНАКОВО — mp3 перегенеровується
        # разом з таймінгом і в TIMING-BACKFILL теж. Раніше тут був окремий
        # "щадний" режим (синтез у тимчасовий файл, забирали лише
        # .words.json, сам mp3 не чіпали) — але оскільки генерація
        # таймінгу займає РІВНО стільки ж часу, що й звичайний синтез
        # (WordBoundary-івенти йдуть паралельно з аудіопотоком у тому ж
        # запиті до Edge TTS, а не окремим проходом), економія на "не
        # чіпати mp3" виявилась ілюзорною — а ризик, що стара версія
        # mp3 і нова версія .words.json трохи розійдуться (напр. якщо
        # текст очищення (cleaned) змінювався між генераціями без зміни
        # хешу через баг, або Edge TTS все ж дає різну паузу/наголос між
        # викликами), був реальним. Простіше й надійніше — завжди мати
        # mp3 і .words.json з ОДНОГО й того самого виклику синтезу.
        if task.get("existing_hash") is None:
            reason = "NEW"
        elif task.get("want_timing"):
            reason = "TIMING-BACKFILL" if task.get("existing_hash") == task.get("content_hash") else f"CHANGED {task['existing_hash']}→{task['content_hash']}"
        else:
            reason = f"CHANGED {task['existing_hash']}→{task['content_hash']}"
        print(f"[{current_num}/{total_tasks}] -> {task['mkey']} -> Голос: {task['voice']} -> [{reason}] -> '{task['cleaned'][:30]}...'", flush=True)

        # Retry з експоненційною паузою стосується ЛИШЕ синтезу мовлення
        # (транзитні збої Edge TTS API/мережі). Git-операції (коміт/пуш)
        # навмисно ВИНЕСЕНІ з цього try/except нижче — РАНІШЕ вони були
        # всередині нього, і БУДЬ-ЯКА git-помилка (напр. push відхилено +
        # невдалий rebase, тимчасовий збій мережі під час push) трактувалась
        # як "не вдалось згенерувати аудіо для ЦЬОГО файлу": щойно готовий
        # mp3 видалявся (file_path.unlink()), хоча сам синтез пройшов
        # успішно — проблема була суто в git. Найімовірніша причина
        # "одні й ті самі файли постійно генеруються": файл видалявся
        # через збій git-кроку, і на НАСТУПНОМУ запуску знову вважався
        # відсутнім — попри те, що текст/голос жодного разу не змінювались.
        last_error = None
        synthesized = False
        for attempt in range(1, RETRY_ATTEMPTS + 1):
            try:
                await synthesize_speech(task["cleaned"], task["voice"], task["rate"], file_path, want_timing=task.get("want_timing", False))
                synthesized = True
                break
            except Exception as e:
                last_error = e
                if file_path.exists():
                    file_path.unlink()
                timing_path = file_path.with_suffix('.words.json')
                if timing_path.exists():
                    timing_path.unlink()
                if attempt < RETRY_ATTEMPTS:
                    backoff = RETRY_BASE_DELAY * (2 ** (attempt - 1))
                    print(f"⚠️  Спроба {attempt}/{RETRY_ATTEMPTS} для {task['mkey']} невдала: {e} — повтор через {backoff:.0f}с", flush=True)
                    await asyncio.sleep(backoff)

        if not synthesized:
            print(f"❌ Помилка генерації для {task['mkey']} після {RETRY_ATTEMPTS} спроб: {last_error}", flush=True)
            async with lock:
                stats["failed"] = stats.get("failed", 0) + 1
                stats["failed_mkeys"] = stats.get("failed_mkeys", [])
                stats["failed_mkeys"].append(task["mkey"])
            return

        # Синтез успішний — записуємо в маніфест і, за потреби, комітимо
        # пачку. Це ОКРЕМА зона відповідальності: якщо тут спіткнеться
        # git — аудіофайл НЕ видаляємо (він валідний!) і завдання НЕ
        # вважаємо "невдалим" — просто лишаємо batch_counter як є, щоб
        # спроба закомітити повторилась на наступній пачці чи в
        # фінальному флаші (в кінці main()).
        async with lock:
            write_to_manifest_file(task["course"], task["mkey"], manifest_value(task["content_hash"], task.get("want_timing", False)))
            stats["generated"] += 1
            stats["batch_counter"] += 1

            if stats["batch_counter"] >= COMMIT_LIMIT:
                try:
                    git_commit_and_push(stats["batch_counter"])
                    stats["batch_counter"] = 0
                except Exception as e:
                    print(f"⚠️  Проміжний коміт/пуш пачки не вдався: {e} — спробуємо знову на наступній пачці або в кінці роботи.", flush=True)

        if DELAY_SEC > 0:
            await asyncio.sleep(DELAY_SEC)

def migrate_legacy_manifest():
    """Одноразова міграція: старий спільний audio/manifest.json ділимо на
    audio/<course>/manifest.json за префіксом курсу в кожному mkey (mkey
    і так завжди починається з "<course>/..." — нічого рахувати заново).
    Запускається автоматично на старті, лише якщо legacy-файл ще існує;
    після поділу перейменовується в manifest.json.migrated, щоб не
    спрацювати вдруге. Без цього кроку перший прогін після переходу на
    поділ по курсах не бачив би жодного старого хешу і перегенерував би
    геть усе аудіо заново (для всіх курсів одразу)."""
    legacy = AUDIO_ROOT / 'manifest.json'
    if not legacy.exists():
        return
    print("📦 Знайдено старий спільний audio/manifest.json — ділю на файли по курсах...", flush=True)
    try:
        with open(legacy, 'r', encoding='utf-8') as f:
            legacy_data = json.load(f)
    except Exception as e:
        print(f"⚠ Не вдалося прочитати старий audio/manifest.json: {e} — міграцію пропущено, "
              f"файл лишається як є (перевірте вручну).", flush=True)
        return

    by_course = {}
    skipped = 0
    for mkey, value in legacy_data.items():
        course = mkey.split('/', 1)[0]
        if course not in COURSES:
            skipped += 1
            continue
        by_course.setdefault(course, {})[mkey] = value

    for course, entries in by_course.items():
        path = manifest_path(course)
        current = {}
        if path.exists():
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    current = json.load(f)
            except: pass
        # Записи, що вже є в per-course файлі (напр. з перерваної попередньої
        # спроби міграції), не перезаписуємо старішими legacy-значеннями.
        for mkey, value in entries.items():
            current.setdefault(mkey, value)
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(current, f, ensure_ascii=False, indent=2)

    legacy.rename(AUDIO_ROOT / 'manifest.json.migrated')
    total = sum(len(v) for v in by_course.values())
    extra = f", {skipped} записів пропущено (курс поза списком COURSES)" if skipped else ""
    print(f"✅ Міграцію завершено: {total} записів розподілено по {len(by_course)} курс(ах){extra}. "
          f"Старий файл перейменовано в manifest.json.migrated (можна видалити пізніше).", flush=True)


async def main():
    print("Запуск генератора MOVA TTS (Edge TTS).", flush=True)
    migrate_legacy_manifest()

    tasks = []
    fields_map = {
        "vocab": ["term", "short", "def"],
        "sprachbau": ["sentence", "answer", "explanation"],
        # "redemittel" тут немає навмисно — набір реплік dlg_XXX змінний
        # (q, a, q1, a1, q2, ...), обчислюється динамічно redemittel_fields().
    }

    # Порядок мов для кожного курсу — PRIMARY_LANG першою, решта в порядку
    # AUDIO_CONFIG. Рахуємо ОДРАЗУ тут (а не пізніше скануванням tasks),
    # бо list.sort(key=...) у CPython на час виконання ключа тимчасово
    # "спорожняє" сам список, що сортується — якщо key-функція звертається
    # до tasks, вона бачить порожній список і завжди повертає дефолт.
    # Персонажі — тепер ОДИН спільний файл на весь застосунок (раніше
    # кожен курс мав власну ідентичну копію CHARACTERS). Читаємо один
    # раз, ДО циклу курсів, і той самий список використовуємо для всіх.
    characters_list = load_characters_file()
    print(f"— Персонажі (characters.js): {len(characters_list)} записів"
          f"{' — файл не знайдено, буде дефолтний голос ролі' if not characters_list else ''}.", flush=True)

    course_lang_order = {}

    for course in COURSES:
      audio_config, raw_items, primary_lang = load_js_database(f"{course}.js")
      audio_base = AUDIO_ROOT / course
      course_lang_order[course] = [primary_lang] + [l for l in audio_config.keys() if l != primary_lang]
      print(f"— Курс '{course}': знайдено {len(raw_items)} елементів бази.", flush=True)

      # Власний manifest.json курсу — читаємо саме тут (а не одним спільним
      # словником на всі курси до цього циклу), бо нижче він же й пишеться
      # окремим файлом на курс (write_to_manifest_file(course, ...)).
      manifest_data = {}
      mpath = manifest_path(course)
      if mpath.exists():
          try:
              with open(mpath, 'r', encoding='utf-8') as f:
                  manifest_data = json.load(f)
          except: pass

      for item in raw_items:
        item_id = item["id"]

        internal_cat = "vocab"
        if item_id.startswith("sbs_"):
            internal_cat = "sprachbau"
        elif item_id.startswith("forum_"):
            # Forumsbeitrag (var SCHREIBEN) — структурно НЕ як dlg_XXX
            # (q/a пари двох ролей): один автор (card['name']) на весь
            # допис, репліки лежать у card['parts'] (кожна — {role,
            # de,en,uk,ru}), а не в top-level полях картки. Тому окрема
            # internal_cat, оброблена власною гілкою нижче (не generic
            # "field_obj = item.get(field)" цикл, розрахований на
            # top-level поля) — див. коментар у forum_fields().
            internal_cat = "forum"
        elif item_id.startswith(("dlg_", "red_", "talk_", "prob_")):
            # Діалоги тепер розділені за префіксом id на 3 функціональні
            # типи — окремі папки в audio/ (той самий механізм, що вже
            # розводить vocab/gram/sbs по своїх папках, просто вперше
            # застосований і до діалогів):
            #   dlg_  — старі картки (лишаються як є, без міграції)
            #   red_  — Redemittel (усталені фрази)
            #   talk_ — Smalltalk
            #   prob_ — Пошук рішення
            # Поведінка (redemittel_fields, лише primary_lang) однакова
            # для всіх чотирьох префіксів — розрізняються лише папкою
            # (cat_lower нижче й так бере САМЕ префікс, без додаткового
            # мапінгу).
            internal_cat = "redemittel"

        cat_lower = item_id.split('_')[0].lower()

        if internal_cat == "forum":
            # ── Forumsbeitrag: окрема гілка (не generic field/lang цикл
            # нижче) — один голос-автор на ВЕСЬ допис (card['name'] —
            # id персонажа з characters.js, той самий принцип, що
            # name_q/name_a в redemittel, лише ОДНА роль замість двох),
            # і лише PRIMARY_LANG (той самий принцип, що redemittel/
            # sprachbau — слухове тренування має сенс лише мовою, яку
            # вивчають).
            if primary_lang in audio_config:
                persona_id = item.get("name")
                voice = resolve_character_voice(characters_list, persona_id, primary_lang)
                if not voice:
                    voice = get_voice_id("forum", "post", primary_lang)
                rates = audio_config.get(primary_lang, ["100"])

                for field in forum_fields(item):
                    field_obj = forum_field_text(item, field)
                    text = field_obj.get(primary_lang) if isinstance(field_obj, dict) else None
                    if text is None: continue
                    if isinstance(text, str) and not text.strip(): continue

                    cleaned = clean_text(text)
                    if not cleaned:
                        continue

                    want_timing = field_wants_timing("forum", field, primary_lang, primary_lang)

                    for rate in rates:
                        filename = f"{item_id}_{field}_{primary_lang}_{rate}.mp3"
                        mkey = f"{course}/{primary_lang}/{rate}/{cat_lower}/{item_id}_{field}_{primary_lang}_{rate}"

                        content_hash = compute_content_hash(cleaned, voice, rate)
                        existing_value = manifest_data.get(mkey)
                        existing_hash = manifest_hash_part(existing_value)

                        if existing_value != manifest_value(content_hash, want_timing):
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
                                "content_hash": content_hash,
                                "existing_hash": existing_hash,
                                "want_timing": want_timing,
                                "primary_lang": primary_lang
                            })
            # forum_XXX повністю оброблено вище (task+parts, лише
            # primary_lang) — переходимо до наступної картки, без
            # generic циклу нижче (розрахований на top-level поля
            # картки, яких forum-картка в такому вигляді не має).
            continue

        # redemittel (dlg_XXX) може мати змінну кількість реплік у ОДНІЙ
        # картці (q, a, q1, a1, q2, a2, ...) — на відміну від vocab/
        # sprachbau, де набір полів завжди фіксований, тут список
        # обчислюється по факту наявних полів (redemittel_fields).
        fields = redemittel_fields(item) if internal_cat == "redemittel" else fields_map[internal_cat]

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
                    # Діалоги (dlg_XXX) — аудіо генерується ВИКЛЮЧНО мовою
                    # primary_lang курсу. Переклад іншими мовами лишається
                    # текстом на екрані (без озвучення) — так само, як уже
                    # й так було для distractors/gram.word нижче: слухове
                    # тренування має сенс лише мовою, яку вивчають, а
                    # озвучення діалогу всіма 4 мовами (як vocab/sprachbau)
                    # лише роздуває обсяг генерації без користі для навчання.
                    if internal_cat == "redemittel" and lang != primary_lang: continue
                    # Sprachbausteine (sbs_XXX) — той самий принцип: лише
                    # primary_lang. Це вправа на граматичну форму МОВОЮ, яку
                    # вивчають (типовий формат іспиту telc B2) — озвучення
                    # sentence/answer/explanation іншими 3 мовами так само не
                    # несе навчальної користі, лише роздуває обсяг генерації.
                    if internal_cat == "sprachbau" and lang != primary_lang: continue
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

                    if internal_cat == "redemittel":
                        # 'q','q1','q2',... озвучує персонаж з name_q;
                        # 'a','a1','a2',... — персонаж з name_a. Голос
                        # шукаємо в CHARACTERS за (id, мова); якщо картка
                        # ще не має name_q/name_a або персонажа для цієї
                        # мови не описано — падаємо назад на дефолтний
                        # голос ролі з VOICE_MAPPING (стара поведінка).
                        role = "q" if field.startswith("q") else "a"
                        persona_id = item.get("name_q" if role == "q" else "name_a")
                        voice = resolve_character_voice(characters_list, persona_id, lang)
                        if not voice:
                            voice = get_voice_id(internal_cat, role, lang)
                    else:
                        voice = get_voice_id(internal_cat, field, lang)
                    rates = audio_config.get(lang, ["100"])

                    for rate in rates:
                        filename = f"{item_id}_{field}_{lang}_{rate}.mp3"
                        mkey = f"{course}/{lang}/{rate}/{cat_lower}/{item_id}_{field}_{lang}_{rate}"

                        content_hash = compute_content_hash(cleaned, voice, rate)
                        # Таймінг слів — лише для полів із CATEGORIES_WITH_TIMING
                        # (рішення генератора, не бази — див. коментар там), і
                        # лише для PRIMARY_LANG курсу (переклади іншими мовами
                        # ніхто не підсвічує).
                        want_timing = field_wants_timing(internal_cat, field, lang, primary_lang)
                        existing_value = manifest_data.get(mkey)
                        existing_hash = manifest_hash_part(existing_value)

                        # Генеруємо, якщо очікуване значення (хеш +, за
                        # потреби, позначка таймінгу) відрізняється від
                        # збереженого — це охоплює і NEW (ключа нема), і
                        # CHANGED (текст/голос змінився), і TIMING-BACKFILL
                        # (хеш той самий, але старий запис ще без позначки
                        # таймінгу — у всіх трьох випадках mp3 перегенеровується
                        # РАЗОМ з .words.json, з одного виклику синтезу — див.
                        # worker_task).
                        if existing_value != manifest_value(content_hash, want_timing):
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
                                "content_hash": content_hash,
                                "existing_hash": existing_hash,
                                "want_timing": want_timing,
                                "primary_lang": primary_lang
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
                        # distractors — підписи кнопок (варіанти відповіді),
                        # не текст для читання/прослуховування — підсвічувати
                        # тут нічого, таймінг свідомо не генерується ніколи.
                        existing_value = manifest_data.get(mkey)
                        existing_hash = manifest_hash_part(existing_value)

                        if existing_value != content_hash:
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
                                "content_hash": content_hash,
                                "existing_hash": existing_hash,
                                "want_timing": False,
                                "primary_lang": primary_lang
                            })

      # Grammatik-Trainer — ОДИН файл на УНІКАЛЬНЕ слово курсу (не на
      # картку+поле!). Пул теми — 4-11 слів, використовує його кожна
      # VOCAB-картка цієї теми, тож без дедуплікації те саме слово
      # штампувалось би окремим файлом під кожну картку, де воно
      # зʼявляється (answer в одній, distractors_N в десятках інших) —
      # у результаті аудіо кнопок ставало більшим за весь інший контент
      # курсу. collect_gram_words() дедуплікує за текстом слова.
      if primary_lang in audio_config:
          gram_words = collect_gram_words(raw_items, primary_lang)
          if gram_words:
              voice = get_voice_id("gram", "word", primary_lang)
              rates = audio_config.get(primary_lang, ["100"])
              for raw_word in sorted(gram_words):
                  cleaned = clean_text(raw_word)
                  if not cleaned:
                      continue
                  slug = slugify_word(cleaned)
                  for rate in rates:
                      filename = f"gram_word_{slug}_{primary_lang}_{rate}.mp3"
                      mkey = f"{course}/{primary_lang}/{rate}/gram/gram_word_{slug}_{primary_lang}_{rate}"

                      content_hash = compute_content_hash(cleaned, voice, rate)
                      # gram_word — завжди одне слово: підсвічувати нíчого,
                      # таймінг тут свідомо не генерується ніколи.
                      existing_value = manifest_data.get(mkey)
                      existing_hash = manifest_hash_part(existing_value)

                      if existing_value != content_hash:
                          tasks.append({
                              "id": f"gram_word_{slug}",
                              "course": course,
                              "audio_base": audio_base,
                              "internal_cat": "gram",
                              "cat_lower": "gram",
                              "sub": "word",
                              "lang": primary_lang,
                              "rate": rate,
                              "cleaned": cleaned,
                              "voice": voice,
                              "filename": filename,
                              "mkey": mkey,
                              "content_hash": content_hash,
                              "existing_hash": existing_hash,
                              "want_timing": False,
                              "primary_lang": primary_lang
                          })
              print(f"  · Grammatik-Trainer: {len(gram_words)} унікальних слів на кнопках (замість карток×полів).", flush=True)

    # ── Порядок генерації ────────────────────────────────────────
    # 1) Уся мова PRIMARY_LANG курсу — від найбільшої швидкості з
    #    AUDIO_CONFIG до найменшої (якщо задано кілька швидкостей).
    # 2) Потім решта мов курсу — за тим самим принципом (кожна мова:
    #    від найбільшої швидкості до найменшої).
    # 3) Курси йдуть у порядку списку COURSES (як і раніше — порядок
    #    курсів природно зберігається, бо сортування стабільне).
    course_order = {course: idx for idx, course in enumerate(COURSES)}
    lang_rank_by_course = {
        course: {lang: i for i, lang in enumerate(order)}
        for course, order in course_lang_order.items()
    }

    def sort_key(t):
        rank_map = lang_rank_by_course.get(t["course"], {})
        return (
            course_order.get(t["course"], 999),
            rank_map.get(t["lang"], 999),
            -int(t["rate"])
        )

    tasks.sort(key=sort_key)

    total_tasks = len(tasks)
    print(f"Знайдено нових/змінених завдань для генерації: {total_tasks}", flush=True)
    if not tasks:
        print("Всі файли синхронізовані з manifest.json.", flush=True)
        return

    semaphore = asyncio.Semaphore(WORKERS)
    lock = asyncio.Lock()
    stats = {"generated": 0, "batch_counter": 0, "processed_tasks": 0, "failed": 0, "failed_mkeys": []}

    pool = [worker_task(t, semaphore, stats, lock, total_tasks) for t in tasks]
    await asyncio.gather(*pool)

    if stats["batch_counter"] > 0:
        try:
            git_commit_and_push(stats["batch_counter"])
        except Exception as e:
            print(f"❌ Фінальний коміт/push не вдався: {e}", flush=True)
            print("   Аудіофайли й записи manifest.json цієї пачки НЕ потрапили в репозиторій", flush=True)
            print("   (лишились би лише на диску ефемерного runner'а і загубились би без сліду).", flush=True)
            sys.exit(1)

    print(f"🎉 Роботу завершено! Згенеровано та внесено в маніфест: {stats['generated']} файлів.", flush=True)
    if stats["failed"] > 0:
        print(f"⚠️  Не вдалося згенерувати {stats['failed']} файл(ів) навіть після {RETRY_ATTEMPTS} спроб — запустіть скрипт ще раз, він доробить лише їх:", flush=True)
        for mkey in stats["failed_mkeys"]:
            print(f"   · {mkey}", flush=True)
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())
