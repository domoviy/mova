var PRIMARY_LANG = "de"; // головна мова контенту: term/ short/ def спочатку створюються тут, en/ uk/ ru — точний переклад цієї версії

var AUDIO_CONFIG = {
  "de": ["090","080"], //аудіо генерується зі швидкістю 90% і 75%
//  "en": ["100"],
//  "uk": ["100"]
//  "ru": ["100"]
};

// ════════════════════════════════════════════════════════════════
//  GRAMMAR — список граматичних конструкцій рівня B1.1 (Die neue Linie 1, Kapitel 1–8)
// ════════════════════════════════════════════════════════════════

var GRAMMAR = [
  {
    "id": "hoefliche_bitten_konjunktiv_b1",
    "de": "Höfliche Bitten (Konjunktiv II): Könnten Sie …?",
    "en": "Polite requests (Subjunctive II): Could you …?",
    "uk": "Ввічливі прохання (Кон'юнктив II): Могли б Ви …?",
    "ru": "Вежливые просьбы (Конъюнктив II): Могли бы Вы …?"
  },
  {
    "id": "infinitiv_mit_zu",
    "de": "Infinitiv mit zu",
    "en": "Infinitive with zu",
    "uk": "Інфінітив з zu",
    "ru": "Инфинитив с zu"
  },
  {
    "id": "sowohl_als_auch_weder_noch",
    "de": "sowohl … als auch / weder … noch",
    "en": "both … and / neither … nor",
    "uk": "як … так і / ні … ні",
    "ru": "как … так и / ни … ни"
  },
  {
    "id": "modalverben_wdh_b1",
    "de": "Wiederholung: Modalverben (Regeln formulieren)",
    "en": "Review: modal verbs (stating rules)",
    "uk": "Повторення: модальні дієслова (формулювання правил)",
    "ru": "Повторение: модальные глаголы (формулирование правил)"
  },
  {
    "id": "wechselpraepositionen_wdh_b1",
    "de": "Wiederholung: Wechselpräpositionen",
    "en": "Review: two-way prepositions",
    "uk": "Повторення: прийменники подвійного керування",
    "ru": "Повторение: предлоги двойного управления"
  },
  {
    "id": "reflexivpronomen_akkusativ_wdh_b1",
    "de": "Wiederholung: Reflexivpronomen im Akkusativ",
    "en": "Review: reflexive pronouns (accusative)",
    "uk": "Повторення: зворотні займенники (знахідний)",
    "ru": "Повторение: возвратные местоимения (винительный)"
  },
  {
    "id": "relativsatz_nominativ_sondern",
    "de": "Relativpronomen im Nominativ; sondern",
    "en": "Relative pronoun (nominative); sondern",
    "uk": "Займенник у називному відмінку; sondern",
    "ru": "Местоимение в именительном падеже; sondern"
  },
  {
    "id": "relativsatz_akkusativ_b1",
    "de": "Relativpronomen im Akkusativ",
    "en": "Relative pronoun (accusative)",
    "uk": "Займенник у знахідному відмінку",
    "ru": "Местоимение в винительном падеже"
  },
  {
    "id": "komposita_nomen_nomen",
    "de": "Wortbildung: Komposita (Nomen + Nomen)",
    "en": "Word formation: compounds (noun + noun)",
    "uk": "Творення слів: композити (іменник + іменник)",
    "ru": "Словообразование: композиты (существительное + существительное)"
  },
  {
    "id": "modalverben_vermutung",
    "de": "Modalverben für Vermutungen (dürfte, müsste, könnte)",
    "en": "Modal verbs expressing assumption",
    "uk": "Модальні дієслова для припущень",
    "ru": "Модальные глаголы для предположений"
  },
  {
    "id": "genitiv",
    "de": "Genitiv",
    "en": "Genitive case",
    "uk": "Родовий відмінок",
    "ru": "Родительный падеж"
  },
  {
    "id": "nebensatz_mit_obwohl",
    "de": "Nebensatz mit obwohl",
    "en": "Subordinate clause with obwohl (although)",
    "uk": "Підрядне речення з obwohl (хоча)",
    "ru": "Придаточное предложение с obwohl (хотя)"
  },
  {
    "id": "konnektoren_wdh_b1",
    "de": "Wiederholung: Konnektoren",
    "en": "Review: connectors",
    "uk": "Повторення: конектори",
    "ru": "Повторение: коннекторы"
  },
  {
    "id": "komposita_verb_nomen",
    "de": "Wortbildung: Komposita (Verb + Nomen)",
    "en": "Word formation: compounds (verb + noun)",
    "uk": "Творення слів: композити (дієслово + іменник)",
    "ru": "Словообразование: композиты (глагол + существительное)"
  },
  {
    "id": "praeteritum_wdh_b1",
    "de": "Wiederholung: Präteritum",
    "en": "Review: simple past",
    "uk": "Повторення: претерит",
    "ru": "Повторение: претерит"
  },
  {
    "id": "deshalb_deswegen_trotzdem",
    "de": "deshalb / deswegen / trotzdem",
    "en": "deshalb / deswegen / trotzdem (therefore / nevertheless)",
    "uk": "deshalb / deswegen / trotzdem (тому / незважаючи на це)",
    "ru": "deshalb / deswegen / trotzdem (поэтому / несмотря на это)"
  },
  {
    "id": "komposita_fugenelemente",
    "de": "Wortbildung: Komposita (Fugenelemente)",
    "en": "Word formation: compounds (linking elements)",
    "uk": "Творення слів: композити (сполучні елементи)",
    "ru": "Словообразование: композиты (соединительные элементы)"
  },
  {
    "id": "genitiv_alternativen",
    "de": "Genitiv und Alternativen (von + Dativ)",
    "en": "Genitive and alternatives (von + dative)",
    "uk": "Родовий відмінок та альтернативи (von + давальний)",
    "ru": "Родительный падеж и альтернативы (von + дательный)"
  },
  {
    "id": "nebensatz_seit_seitdem",
    "de": "Nebensatz mit seit / seitdem",
    "en": "Subordinate clause with seit/seitdem (since)",
    "uk": "Підрядне речення з seit/seitdem (відколи)",
    "ru": "Придаточное предложение с seit/seitdem (с тех пор как)"
  },
  {
    "id": "verben_praep_personen_sachen",
    "de": "Verben mit Präpositionen: Fragen nach Personen und Sachen",
    "en": "Verbs with prepositions: questions about people and things",
    "uk": "Дієслова з прийменниками: питання про осіб і речі",
    "ru": "Глаголы с предлогами: вопросы о людях и вещах"
  },
  {
    "id": "nebensatz_mit_bis",
    "de": "Nebensatz mit bis",
    "en": "Subordinate clause with bis (until)",
    "uk": "Підрядне речення з bis (доки)",
    "ru": "Придаточное предложение с bis (до тех пор как)"
  },
  {
    "id": "verben_als_nomen",
    "de": "Wortbildung: Verben als Nomen",
    "en": "Word formation: verbs as nouns",
    "uk": "Творення слів: дієслова як іменники",
    "ru": "Словообразование: глаголы как существительные"
  },
  {
    "id": "praepositionaladverbien_b1",
    "de": "Präpositionaladverbien (worüber, darüber …)",
    "en": "Prepositional adverbs (worüber, darüber …)",
    "uk": "Прийменникові прислівники (worüber, darüber …)",
    "ru": "Предложные наречия (worüber, darüber …)"
  },
  {
    "id": "futur_werden",
    "de": "Futur I: werden + Infinitiv",
    "en": "Future tense: werden + infinitive",
    "uk": "Майбутній час: werden + інфінітив",
    "ru": "Будущее время: werden + инфинитив"
  },
  {
    "id": "nicht_nur_sondern_auch",
    "de": "nicht nur …, sondern auch",
    "en": "not only … but also",
    "uk": "не тільки …, а й",
    "ru": "не только …, но и"
  },
  {
    "id": "satz_mit_um_zu",
    "de": "Sätze mit um … zu",
    "en": "Clauses with um … zu (in order to)",
    "uk": "Речення з um … zu (щоб)",
    "ru": "Предложения с um … zu (чтобы)"
  },
  {
    "id": "nebensatz_mit_damit_wdh_b1",
    "de": "Wiederholung: Nebensatz mit damit",
    "en": "Review: subordinate clause with damit",
    "uk": "Повторення: речення з damit",
    "ru": "Повторение: предложение с damit"
  },
  {
    "id": "nomen_auf_heit_keit",
    "de": "Wortbildung: Nomen auf -heit und -keit",
    "en": "Word formation: nouns ending in -heit/-keit",
    "uk": "Творення слів: іменники на -heit/-keit",
    "ru": "Словообразование: существительные на -heit/-keit"
  },
  {
    "id": "passiv_praesens_b1",
    "de": "Passiv Präsens",
    "en": "Passive voice (present)",
    "uk": "Пасив (теперішній час)",
    "ru": "Пассив (настоящее время)"
  },
  {
    "id": "perfekt_wdh_b1",
    "de": "Wiederholung: Perfekt",
    "en": "Review: present perfect",
    "uk": "Повторення: перфект",
    "ru": "Повторение: перфект"
  },
  {
    "id": "nomen_auf_ung",
    "de": "Wortbildung: Nomen auf -ung",
    "en": "Word formation: nouns ending in -ung",
    "uk": "Творення слів: іменники на -ung",
    "ru": "Словообразование: существительные на -ung"
  },
  {
    "id": "verben_mit_praep_wdh_b1",
    "de": "Wiederholung: Verben mit Präpositionen",
    "en": "Review: verbs with prepositions",
    "uk": "Повторення: дієслова з прийменниками",
    "ru": "Повторение: глаголы с предлогами"
  },
  {
    "id": "fragewoerter_wor_dar",
    "de": "Fragewörter mit wo(r)- und Präpositionaladverbien mit da(r)-",
    "en": "Question words with wo(r)- and prepositional adverbs with da(r)-",
    "uk": "Питальні слова з wo(r)- і прийменникові прислівники з da(r)-",
    "ru": "Вопросительные слова с wo(r)- и предложные наречия с da(r)-"
  },
  {
    "id": "interesse_denn_eigentlich",
    "de": "Interesse zeigen mit denn und eigentlich",
    "en": "Showing interest with denn and eigentlich",
    "uk": "Виявлення інтересу за допомогою denn і eigentlich",
    "ru": "Проявление интереса с помощью denn и eigentlich"
  },
  {
    "id": "adjektive_mit_un",
    "de": "Wortbildung: Adjektive mit un-",
    "en": "Word formation: adjectives with un-",
    "uk": "Творення слів: прикметники з un-",
    "ru": "Словообразование: прилагательные с un-"
  }
];

var CATS = [
  {
    "id": "k1",
    "de": "Neue Nachbarn",
    "en": "New neighbours",
    "uk": "Нові сусіди",
    "ru": "Новые соседи",
    "e": "🏘️"
  },
  {
    "id": "k2",
    "de": "Hier kaufe ich ein.",
    "en": "This is where I shop.",
    "uk": "Тут я роблю покупки.",
    "ru": "Здесь я делаю покупки.",
    "e": "🛒"
  },
  {
    "id": "k3",
    "de": "Wir sind für Sie da.",
    "en": "We are here for you.",
    "uk": "Ми тут для вас.",
    "ru": "Мы здесь для вас.",
    "e": "🏦"
  },
  {
    "id": "k4",
    "de": "Schmeckt's?",
    "en": "Does it taste good?",
    "uk": "Смачно?",
    "ru": "Вкусно?",
    "e": "🍽️"
  },
  {
    "id": "k5",
    "de": "Ah, so ist das!",
    "en": "Ah, that's how it is!",
    "uk": "Ах, ось як!",
    "ru": "Ах, вот как!",
    "e": "🌍"
  },
  {
    "id": "k6",
    "de": "Im Krankenhaus",
    "en": "At the hospital",
    "uk": "У лікарні",
    "ru": "В больнице",
    "e": "🏥"
  },
  {
    "id": "k7",
    "de": "Alles für die Umwelt",
    "en": "Everything for the environment",
    "uk": "Все для довкілля",
    "ru": "Всё для окружающей среды",
    "e": "🌱"
  },
  {
    "id": "k8",
    "de": "Lust auf Kultur?",
    "en": "In the mood for culture?",
    "uk": "Хочеш культури?",
    "ru": "Хочешь культуры?",
    "e": "🎭"
  }
];

var LC = {
  de: {
    code: "de-DE",
    ms: [
      "Katja",
      "Hedda",
      "Stefan",
      "Conrad"
    ]
  },
  en: {
    code: "en-US",
    ms: [
      "Aria",
      "Jenny",
      "Guy",
      "Zira",
      "David"
    ]
  },
  uk: {
    code: "uk-UA",
    ms: [
      "Ostap",
      "Polina"
    ]
  },
  ru: {
    code: "ru-RU",
    ms: [
      "Irina",
      "Pavel",
      "Dmitry"
    ]
  }
};
var F  = {
  en: "🇬🇧",
  uk: "🇺🇦",
  de: "🇩🇪",
  ru: "🇷🇺"
};
var LN = {
  en: "English",
  uk: "Українська",
  de: "Deutsch",
  ru: "Русский"
};

// ── КАРТКИ УРОКІВ (LESSONS) ─────────────────────────────────────
// "Die neue Linie 1" B1.1, Kapitel 1–8 (за виданням Klett, KB+UB)

var LESSONS = [
  {
    "id": "k1m1",
    "chapter": 1,
    "module": 1,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Ein Haus – viele Menschen",
      "uk": "Один будинок – багато людей",
      "en": "One house – many people",
      "ru": "Один дом – много людей"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k1_003",
      "k1_007",
      "k1_008"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k1m2",
    "chapter": 1,
    "module": 2,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Meine neuen Nachbarn",
      "uk": "Мої нові сусіди",
      "en": "My new neighbours",
      "ru": "Мои новые соседи"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "wechselpraepositionen_wdh_b1",
    "cardIds": [
      "k1_001",
      "k1_002"
    ],
    "unlockAfter": "k1m1",
    "sbCards": []
  },
  {
    "id": "k1m3",
    "chapter": 1,
    "module": 3,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Ich habe eine Bitte.",
      "uk": "У мене є прохання.",
      "en": "I have a request.",
      "ru": "У меня есть просьба."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "hoefliche_bitten_konjunktiv_b1",
    "cardIds": [
      "k1_012",
      "k1_013"
    ],
    "unlockAfter": "k1m2",
    "sbCards": []
  },
  {
    "id": "k1m4",
    "chapter": 1,
    "module": 4,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Gut zusammenleben",
      "uk": "Добре жити разом",
      "en": "Living together well",
      "ru": "Хорошо жить вместе"
    },
    "skills": [
      "Sprechen",
      "Schreiben"
    ],
    "grammar": "infinitiv_mit_zu",
    "cardIds": [
      "k1_006",
      "k1_015"
    ],
    "unlockAfter": "k1m3",
    "sbCards": []
  },
  {
    "id": "k1m5",
    "chapter": 1,
    "module": 5,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "In der Hausordnung steht …",
      "uk": "У правилах будинку написано …",
      "en": "The house rules say …",
      "ru": "В правилах дома написано …"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "modalverben_wdh_b1",
    "cardIds": [
      "k1_004",
      "k1_005",
      "k1_009"
    ],
    "unlockAfter": "k1m4",
    "sbCards": []
  },
  {
    "id": "k1m6",
    "chapter": 1,
    "module": 6,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Das geht doch nicht …",
      "uk": "Так не можна …",
      "en": "That's just not okay …",
      "ru": "Так нельзя …"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "sowohl_als_auch_weder_noch",
    "cardIds": [
      "k1_010",
      "k1_011",
      "k1_014"
    ],
    "unlockAfter": "k1m5",
    "sbCards": []
  },
  {
    "id": "k2m1",
    "chapter": 2,
    "module": 1,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Wir brauchen noch …",
      "uk": "Нам ще потрібно …",
      "en": "We still need …",
      "ru": "Нам ещё нужно …"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k2_015",
      "k2_008"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k2m2",
    "chapter": 2,
    "module": 2,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "So kaufe ich gern ein.",
      "uk": "Так я люблю робити покупки.",
      "en": "This is how I like to shop.",
      "ru": "Так я люблю делать покупки."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "reflexivpronomen_akkusativ_wdh_b1",
    "cardIds": [
      "k2_012",
      "k2_013"
    ],
    "unlockAfter": "k2m1",
    "sbCards": []
  },
  {
    "id": "k2m3",
    "chapter": 2,
    "module": 3,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Da ist leider ein Fehler.",
      "uk": "На жаль, тут помилка.",
      "en": "There's unfortunately a mistake.",
      "ru": "К сожалению, здесь ошибка."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "relativsatz_nominativ_sondern",
    "cardIds": [
      "k2_001",
      "k2_002",
      "k2_010"
    ],
    "unlockAfter": "k2m2",
    "sbCards": []
  },
  {
    "id": "k2m4",
    "chapter": 2,
    "module": 4,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Die Bestellung",
      "uk": "Замовлення",
      "en": "The order",
      "ru": "Заказ"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "komposita_nomen_nomen",
    "cardIds": [
      "k2_009",
      "k2_014"
    ],
    "unlockAfter": "k2m3",
    "sbCards": []
  },
  {
    "id": "k2m5",
    "chapter": 2,
    "module": 5,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Bitte bezahlen Sie umgehend.",
      "uk": "Будь ласка, оплатіть негайно.",
      "en": "Please pay immediately.",
      "ru": "Пожалуйста, оплатите немедленно."
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "relativsatz_akkusativ_b1",
    "cardIds": [
      "k2_003",
      "k2_004",
      "k2_005"
    ],
    "unlockAfter": "k2m4",
    "sbCards": []
  },
  {
    "id": "k2m6",
    "chapter": 2,
    "module": 6,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Einkaufstipps",
      "uk": "Поради для покупок",
      "en": "Shopping tips",
      "ru": "Советы по покупкам"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k2_006",
      "k2_007",
      "k2_011"
    ],
    "unlockAfter": "k2m5",
    "sbCards": []
  },
  {
    "id": "k3m1",
    "chapter": 3,
    "module": 1,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Was kann man da machen?",
      "uk": "Що можна з цим зробити?",
      "en": "What can you do about it?",
      "ru": "Что можно с этим сделать?"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "modalverben_vermutung",
    "cardIds": [
      "k3_001",
      "k3_002"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k3m2",
    "chapter": 3,
    "module": 2,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Ich brauche ein eigenes Konto.",
      "uk": "Мені потрібен власний рахунок.",
      "en": "I need my own account.",
      "ru": "Мне нужен собственный счёт."
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "genitiv",
    "cardIds": [
      "k3_003",
      "k3_004"
    ],
    "unlockAfter": "k3m1",
    "sbCards": []
  },
  {
    "id": "k3m3",
    "chapter": 3,
    "module": 3,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Hilfe – meine Bankkarte ist weg!",
      "uk": "Допоможіть – моя банківська картка зникла!",
      "en": "Help – my bank card is gone!",
      "ru": "Помогите – моя банковская карта пропала!"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k3_005",
      "k3_006"
    ],
    "unlockAfter": "k3m2",
    "sbCards": []
  },
  {
    "id": "k3m4",
    "chapter": 3,
    "module": 4,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Brauchen wir diese Versicherung?",
      "uk": "Чи потрібне нам це страхування?",
      "en": "Do we need this insurance?",
      "ru": "Нужна ли нам эта страховка?"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nebensatz_mit_obwohl",
    "cardIds": [
      "k3_007",
      "k3_008"
    ],
    "unlockAfter": "k3m3",
    "sbCards": []
  },
  {
    "id": "k3m5",
    "chapter": 3,
    "module": 5,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Ein Gespräch mit der Versicherungsvertreterin",
      "uk": "Розмова з представницею страхової компанії",
      "en": "A conversation with the insurance agent",
      "ru": "Разговор с представителем страховой компании"
    },
    "skills": [
      "Hören",
      "Schreiben"
    ],
    "grammar": "komposita_verb_nomen",
    "cardIds": [
      "k3_009",
      "k3_010",
      "k3_011"
    ],
    "unlockAfter": "k3m4",
    "sbCards": []
  },
  {
    "id": "k3m6",
    "chapter": 3,
    "module": 6,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Obwohl ich rechtzeitig gekündigt habe, …",
      "uk": "Хоча я вчасно розірвав договір, …",
      "en": "Although I cancelled in time, …",
      "ru": "Хотя я вовремя расторг договор, …"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "konnektoren_wdh_b1",
    "cardIds": [
      "k3_012",
      "k3_013",
      "k3_014",
      "k3_015"
    ],
    "unlockAfter": "k3m5",
    "sbCards": []
  },
  {
    "id": "k4m1",
    "chapter": 4,
    "module": 1,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Essgewohnheiten",
      "uk": "Харчові звички",
      "en": "Eating habits",
      "ru": "Привычки питания"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k4_001",
      "k4_004"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k4m2",
    "chapter": 4,
    "module": 2,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Gab es bei euch auch Pizza?",
      "uk": "У вас теж була піца?",
      "en": "Did you have pizza too?",
      "ru": "У вас тоже была пицца?"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "praeteritum_wdh_b1",
    "cardIds": [
      "k4_002",
      "k4_003"
    ],
    "unlockAfter": "k4m1",
    "sbCards": []
  },
  {
    "id": "k4m3",
    "chapter": 4,
    "module": 3,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Früher und heute",
      "uk": "Раніше і сьогодні",
      "en": "Then and now",
      "ru": "Раньше и сегодня"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "deshalb_deswegen_trotzdem",
    "cardIds": [
      "k4_012",
      "k4_013"
    ],
    "unlockAfter": "k4m2",
    "sbCards": []
  },
  {
    "id": "k4m4",
    "chapter": 4,
    "module": 4,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Zusammen kochen und essen",
      "uk": "Готуємо та їмо разом",
      "en": "Cooking and eating together",
      "ru": "Готовим и едим вместе"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "komposita_fugenelemente",
    "cardIds": [
      "k4_005",
      "k4_006",
      "k4_007"
    ],
    "unlockAfter": "k4m3",
    "sbCards": []
  },
  {
    "id": "k4m5",
    "chapter": 4,
    "module": 5,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Ergebnisse einer Umfrage",
      "uk": "Результати опитування",
      "en": "Survey results",
      "ru": "Результаты опроса"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": "genitiv_alternativen",
    "cardIds": [
      "k4_008"
    ],
    "unlockAfter": "k4m4",
    "sbCards": []
  },
  {
    "id": "k4m6",
    "chapter": 4,
    "module": 6,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Gesunde Ernährung?",
      "uk": "Здорове харчування?",
      "en": "Healthy eating?",
      "ru": "Здоровое питание?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k4_009",
      "k4_010",
      "k4_011",
      "k4_014",
      "k4_015"
    ],
    "unlockAfter": "k4m5",
    "sbCards": []
  },
  {
    "id": "k5m1",
    "chapter": 5,
    "module": 1,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Das hat mich überrascht!",
      "uk": "Це мене здивувало!",
      "en": "That surprised me!",
      "ru": "Это меня удивило!"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_seit_seitdem",
    "cardIds": [
      "k5_001",
      "k5_002"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k5m2",
    "chapter": 5,
    "module": 2,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "So viele Sprachen!",
      "uk": "Так багато мов!",
      "en": "So many languages!",
      "ru": "Так много языков!"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "verben_praep_personen_sachen",
    "cardIds": [
      "k5_007",
      "k5_012"
    ],
    "unlockAfter": "k5m1",
    "sbCards": []
  },
  {
    "id": "k5m3",
    "chapter": 5,
    "module": 3,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Das war ein tolles Erlebnis.",
      "uk": "Це був чудовий досвід.",
      "en": "That was a great experience.",
      "ru": "Это был отличный опыт."
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nebensatz_mit_bis",
    "cardIds": [
      "k5_009",
      "k5_013"
    ],
    "unlockAfter": "k5m2",
    "sbCards": []
  },
  {
    "id": "k5m4",
    "chapter": 5,
    "module": 4,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Mein Alltag in Deutschland",
      "uk": "Моє повсякденне життя в Німеччині",
      "en": "My everyday life in Germany",
      "ru": "Моя повседневная жизнь в Германии"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "verben_als_nomen",
    "cardIds": [
      "k5_010",
      "k5_011"
    ],
    "unlockAfter": "k5m3",
    "sbCards": []
  },
  {
    "id": "k5m5",
    "chapter": 5,
    "module": 5,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Worüber hast du dich geärgert?",
      "uk": "Через що ти розсердився?",
      "en": "What annoyed you?",
      "ru": "Из-за чего ты разозлился?"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "praepositionaladverbien_b1",
    "cardIds": [
      "k5_003",
      "k5_008"
    ],
    "unlockAfter": "k5m4",
    "sbCards": []
  },
  {
    "id": "k5m6",
    "chapter": 5,
    "module": 6,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Wie macht ihr das hier?",
      "uk": "Як це роблять тут?",
      "en": "How do you do that here?",
      "ru": "Как это делают здесь?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k5_004",
      "k5_005",
      "k5_006",
      "k5_014",
      "k5_015"
    ],
    "unlockAfter": "k5m5",
    "sbCards": []
  },
  {
    "id": "k6m1",
    "chapter": 6,
    "module": 1,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k6_001",
      "k6_003"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k6m2",
    "chapter": 6,
    "module": 2,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Gespräche im Krankenhaus",
      "uk": "Розмови в лікарні",
      "en": "Conversations at the hospital",
      "ru": "Разговоры в больнице"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "futur_werden",
    "cardIds": [
      "k6_005",
      "k6_008"
    ],
    "unlockAfter": "k6m1",
    "sbCards": []
  },
  {
    "id": "k6m3",
    "chapter": 6,
    "module": 3,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Ein Notfall",
      "uk": "Надзвичайна ситуація",
      "en": "An emergency",
      "ru": "Экстренный случай"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nicht_nur_sondern_auch",
    "cardIds": [
      "k6_002",
      "k6_013",
      "k6_009"
    ],
    "unlockAfter": "k6m2",
    "sbCards": []
  },
  {
    "id": "k6m4",
    "chapter": 6,
    "module": 4,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "In der Notaufnahme",
      "uk": "У приймальному відділенні",
      "en": "At the emergency room",
      "ru": "В приёмном покое"
    },
    "skills": [
      "Hören",
      "Schreiben"
    ],
    "grammar": "satz_mit_um_zu",
    "cardIds": [
      "k6_010",
      "k6_004"
    ],
    "unlockAfter": "k6m3",
    "sbCards": []
  },
  {
    "id": "k6m5",
    "chapter": 6,
    "module": 5,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Wir müssen operieren.",
      "uk": "Нам потрібно оперувати.",
      "en": "We have to operate.",
      "ru": "Нам нужно оперировать."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_mit_damit_wdh_b1",
    "cardIds": [
      "k6_006",
      "k6_011"
    ],
    "unlockAfter": "k6m4",
    "sbCards": []
  },
  {
    "id": "k6m6",
    "chapter": 6,
    "module": 6,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Wir tun alles für Ihre Gesundheit.",
      "uk": "Ми робимо все для вашого здоров'я.",
      "en": "We do everything for your health.",
      "ru": "Мы делаем всё для вашего здоровья."
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nomen_auf_heit_keit",
    "cardIds": [
      "k6_007",
      "k6_012",
      "k6_014",
      "k6_015"
    ],
    "unlockAfter": "k6m5",
    "sbCards": []
  },
  {
    "id": "k7m1",
    "chapter": 7,
    "module": 1,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Und die Umwelt?",
      "uk": "А що з довкіллям?",
      "en": "And the environment?",
      "ru": "А что с окружающей средой?"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k7_001",
      "k7_003"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k7m2",
    "chapter": 7,
    "module": 2,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Wir müssen Energie sparen!",
      "uk": "Ми повинні економити енергію!",
      "en": "We must save energy!",
      "ru": "Мы должны экономить энергию!"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "passiv_praesens_b1",
    "cardIds": [
      "k7_010",
      "k7_011",
      "k7_013"
    ],
    "unlockAfter": "k7m1",
    "sbCards": []
  },
  {
    "id": "k7m3",
    "chapter": 7,
    "module": 3,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Da stimme ich dir zu.",
      "uk": "Тут я з тобою згоден/згодна.",
      "en": "I agree with you there.",
      "ru": "Тут я с тобой согласен/согласна."
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "perfekt_wdh_b1",
    "cardIds": [
      "k7_012",
      "k7_014"
    ],
    "unlockAfter": "k7m2",
    "sbCards": []
  },
  {
    "id": "k7m4",
    "chapter": 7,
    "module": 4,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Bauerinnen und Bauern mit Herz",
      "uk": "Фермери з покликанням",
      "en": "Farmers with heart",
      "ru": "Фермеры с призванием"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nomen_auf_ung",
    "cardIds": [
      "k7_008",
      "k7_009"
    ],
    "unlockAfter": "k7m3",
    "sbCards": []
  },
  {
    "id": "k7m5",
    "chapter": 7,
    "module": 5,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Das wird auf dem Hof gemacht.",
      "uk": "Це роблять на фермі.",
      "en": "This is what's done on the farm.",
      "ru": "Это делают на ферме."
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "passiv_praesens_b1",
    "cardIds": [
      "k7_004",
      "k7_005",
      "k7_006"
    ],
    "unlockAfter": "k7m4",
    "sbCards": []
  },
  {
    "id": "k7m6",
    "chapter": 7,
    "module": 6,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Was ist mit dem Klima los?",
      "uk": "Що відбувається з кліматом?",
      "en": "What's going on with the climate?",
      "ru": "Что происходит с климатом?"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [
      "k7_002",
      "k7_007",
      "k7_015"
    ],
    "unlockAfter": "k7m5",
    "sbCards": []
  },
  {
    "id": "k8m1",
    "chapter": 8,
    "module": 1,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Da möchte ich auch hin …",
      "uk": "Я теж хочу туди піти …",
      "en": "I'd like to go there too …",
      "ru": "Я тоже хочу туда пойти …"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k8_001",
      "k8_011"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k8m2",
    "chapter": 8,
    "module": 2,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Das ist schon in einer Woche!",
      "uk": "Це вже через тиждень!",
      "en": "That's already in a week!",
      "ru": "Это уже через неделю!"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "verben_mit_praep_wdh_b1",
    "cardIds": [
      "k8_008",
      "k8_002"
    ],
    "unlockAfter": "k8m1",
    "sbCards": []
  },
  {
    "id": "k8m3",
    "chapter": 8,
    "module": 3,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Das Festival war toll.",
      "uk": "Фестиваль був чудовий.",
      "en": "The festival was great.",
      "ru": "Фестиваль был отличный."
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "fragewoerter_wor_dar",
    "cardIds": [
      "k8_003",
      "k8_012"
    ],
    "unlockAfter": "k8m2",
    "sbCards": []
  },
  {
    "id": "k8m4",
    "chapter": 8,
    "module": 4,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Eine E-Mail von der Bibliothek",
      "uk": "Електронний лист від бібліотеки",
      "en": "An email from the library",
      "ru": "Письмо от библиотеки"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k8_004",
      "k8_015"
    ],
    "unlockAfter": "k8m3",
    "sbCards": []
  },
  {
    "id": "k8m5",
    "chapter": 8,
    "module": 5,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Die Bibliotheksführung",
      "uk": "Екскурсія по бібліотеці",
      "en": "The library tour",
      "ru": "Экскурсия по библиотеке"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "interesse_denn_eigentlich",
    "cardIds": [
      "k8_005",
      "k8_013"
    ],
    "unlockAfter": "k8m4",
    "sbCards": []
  },
  {
    "id": "k8m6",
    "chapter": 8,
    "module": 6,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Graffiti – Kunst für die Straße",
      "uk": "Графіті – мистецтво для вулиці",
      "en": "Graffiti – art for the street",
      "ru": "Графити – искусство для улицы"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektive_mit_un",
    "cardIds": [
      "k8_006",
      "k8_007",
      "k8_009",
      "k8_010",
      "k8_014"
    ],
    "unlockAfter": "k8m5",
    "sbCards": []
  }
];

var VOCAB = [
  {
    "id": "k1_001",
    "cat": "k1",
    "term": {
      "de": "die Nachbarschaft",
      "en": "neighbourhood",
      "uk": "сусідство",
      "ru": "соседство"
    },
    "short": {
      "de": "Die Menschen und Häuser in der Nähe von deiner Wohnung.",
      "en": "The people and houses near your home.",
      "uk": "Люди та будинки поблизу твого житла.",
      "ru": "Люди и дома рядом с твоим жильём."
    },
    "def": {
      "de": "Wir sind letzte Woche <g>in die</g> neue <b>Nachbarschaft</b> gezogen.",
      "en": "We moved into this new <b>neighbourhood</b> last week.",
      "uk": "Минулого тижня ми переїхали в це нове <b>сусідство</b>.",
      "ru": "На прошлой неделе мы переехали в это новое <b>соседство</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_002",
    "cat": "k1",
    "term": {
      "de": "der Nachbar / die Nachbarin",
      "en": "neighbour",
      "uk": "сусід / сусідка",
      "ru": "сосед / соседка"
    },
    "short": {
      "de": "Eine Person, die direkt neben dir oder in deinem Haus wohnt.",
      "en": "A person who lives right next to you or in your building.",
      "uk": "Людина, яка живе поруч з тобою або в твоєму будинку.",
      "ru": "Человек, который живёт рядом с тобой или в твоём доме."
    },
    "def": {
      "de": "Unser neuer <b>Nachbar</b> wohnt schon seit zehn Jahren <g>in dem</g> Haus gegenüber.",
      "en": "Our new <b>neighbour</b> has already lived in the building across the street for ten years.",
      "uk": "Наш новий <b>сусід</b> вже десять років живе в будинку навпроти.",
      "ru": "Наш новый <b>сосед</b> уже десять лет живёт в доме напротив."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_003",
    "cat": "k1",
    "term": {
      "de": "das Mehrfamilienhaus",
      "en": "apartment building",
      "uk": "багатоквартирний будинок",
      "ru": "многоквартирный дом"
    },
    "short": {
      "de": "Ein Haus, in dem mehrere Familien oder Personen in verschiedenen Wohnungen leben.",
      "en": "A building where several families or people live in different flats.",
      "uk": "Будинок, у якому кілька сімей чи людей живуть у різних квартирах.",
      "ru": "Дом, в котором несколько семей или людей живут в разных квартирах."
    },
    "def": {
      "de": "In unserem <b>Mehrfamilienhaus</b> leben insgesamt zwölf Familien.",
      "en": "A total of twelve families live in our <b>apartment building</b>.",
      "uk": "У нашому <b>багатоквартирному будинку</b> загалом живуть дванадцять сімей.",
      "ru": "В нашем <b>многоквартирном доме</b> всего живут двенадцать семей."
    },
    "gram": ""
  },
  {
    "id": "k1_004",
    "cat": "k1",
    "term": {
      "de": "die Hausordnung",
      "en": "house rules",
      "uk": "правила будинку",
      "ru": "правила дома"
    },
    "short": {
      "de": "Die Regeln, die für alle Bewohner in einem Haus gelten.",
      "en": "The rules that apply to all residents in a building.",
      "uk": "Правила, які діють для всіх мешканців будинку.",
      "ru": "Правила, которые действуют для всех жителей дома."
    },
    "def": {
      "de": "In der <b>Hausordnung</b> steht, dass man nach 22 Uhr keine laute Musik <g>hören darf</g>.",
      "en": "The <b>house rules</b> say that you <g>must not listen</g> to loud music after 10 p.m.",
      "uk": "У <b>правилах будинку</b> написано, що після 22:00 <g>не можна слухати</g> голосну музику.",
      "ru": "В <b>правилах дома</b> написано, что после 22:00 <g>нельзя слушать</g> громкую музыку."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_005",
    "cat": "k1",
    "term": {
      "de": "die Ruhezeit",
      "en": "quiet hours",
      "uk": "час тиші",
      "ru": "тихий час"
    },
    "short": {
      "de": "Die Zeit, in der man im Haus leise sein muss.",
      "en": "The time when you have to be quiet in the building.",
      "uk": "Час, коли в будинку потрібно бути тихим.",
      "ru": "Время, когда в доме нужно вести себя тихо."
    },
    "def": {
      "de": "Während der <b>Ruhezeit</b> am Mittag <g>darf</g> man nicht bohren oder laut Musik hören.",
      "en": "During the <b>quiet hours</b> at midday, you <g>must not</g> drill or play loud music.",
      "uk": "Під час <b>тихого часу</b> вдень <g>не можна</g> свердлити чи слухати голосну музику.",
      "ru": "Во время <b>тихого часа</b> днём <g>нельзя</g> сверлить или слушать громкую музыку."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_006",
    "cat": "k1",
    "term": {
      "de": "die Rücksicht",
      "en": "consideration",
      "uk": "уважність",
      "ru": "внимательность"
    },
    "short": {
      "de": "Wenn man an die anderen Menschen denkt und sie nicht stört.",
      "en": "When you think of other people and don't disturb them.",
      "uk": "Коли ти думаєш про інших людей і не заважаєш їм.",
      "ru": "Когда ты думаешь о других людях и не мешаешь им."
    },
    "def": {
      "de": "Es ist sehr wichtig, auf die anderen Hausbewohner <b>Rücksicht</b> <g>zu nehmen</g>.",
      "en": "It is very important <g>to show</g> <b>consideration</b> for the other residents.",
      "uk": "Дуже важливо проявляти <b>уважність</b> до інших мешканців будинку.",
      "ru": "Очень важно проявлять <b>внимательность</b> к другим жителям дома."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_007",
    "cat": "k1",
    "term": {
      "de": "das Treppenhaus",
      "en": "stairwell",
      "uk": "підʼїзд, сходова клітка",
      "ru": "подъезд, лестничная клетка"
    },
    "short": {
      "de": "Der Teil des Hauses mit der Treppe, durch den man zu den Wohnungen geht.",
      "en": "The part of the building with the stairs that leads to the flats.",
      "uk": "Частина будинку зі сходами, через яку проходиш до квартир.",
      "ru": "Часть дома с лестницей, через которую проходишь к квартирам."
    },
    "def": {
      "de": "Im <b>Treppenhaus</b> darf man keine Fahrräder oder Kartons abstellen.",
      "en": "You are not allowed to leave bicycles or boxes in the <b>stairwell</b>.",
      "uk": "У <b>підʼїзді</b> не можна залишати велосипеди чи коробки.",
      "ru": "В <b>подъезде</b> нельзя оставлять велосипеды или коробки."
    },
    "gram": ""
  },
  {
    "id": "k1_008",
    "cat": "k1",
    "term": {
      "de": "der Kinderwagen",
      "en": "baby stroller",
      "uk": "дитяча коляска",
      "ru": "детская коляска"
    },
    "short": {
      "de": "Ein kleines Fahrzeug mit Rädern, in dem ein Baby liegt oder sitzt.",
      "en": "A small vehicle with wheels in which a baby lies or sits.",
      "uk": "Маленький засіб на колесах, у якому лежить або сидить малюк.",
      "ru": "Маленькое средство на колёсах, в котором лежит или сидит малыш."
    },
    "def": {
      "de": "Frau Berger stellt ihren <b>Kinderwagen</b> immer neben die Treppe.",
      "en": "Mrs Berger always puts her <b>stroller</b> next to the stairs.",
      "uk": "Пані Бергер завжди ставить свою <b>дитячу коляску</b> біля сходів.",
      "ru": "Госпожа Бергер всегда ставит свою <b>детскую коляску</b> возле лестницы."
    },
    "gram": ""
  },
  {
    "id": "k1_009",
    "cat": "k1",
    "term": {
      "de": "der Fluchtweg",
      "en": "escape route",
      "uk": "шлях евакуації",
      "ru": "путь эвакуации"
    },
    "short": {
      "de": "Der Weg, den man im Notfall nehmen muss, um schnell aus dem Haus zu kommen.",
      "en": "The route you must take in an emergency to get out of the building quickly.",
      "uk": "Шлях, яким потрібно йти в разі надзвичайної ситуації, щоб швидко вийти з будинку.",
      "ru": "Путь, по которому нужно идти в экстренной ситуации, чтобы быстро выйти из дома."
    },
    "def": {
      "de": "Den <b>Fluchtweg</b> <g>darf</g> man niemals mit Möbeln oder Kartons blockieren.",
      "en": "You <g>must never</g> block the <b>escape route</b> with furniture or boxes.",
      "uk": "<b>Шлях евакуації</b> ніколи <g>не можна</g> блокувати меблями чи коробками.",
      "ru": "<b>Путь эвакуации</b> никогда <g>нельзя</g> блокировать мебелью или коробками."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_010",
    "cat": "k1",
    "term": {
      "de": "sich beschweren",
      "en": "to complain",
      "uk": "скаржитися",
      "ru": "жаловаться"
    },
    "short": {
      "de": "Sagen, dass man mit etwas nicht zufrieden ist.",
      "en": "To say that you are not satisfied with something.",
      "uk": "Казати, що ти чимось незадоволений.",
      "ru": "Говорить, что ты чем-то недоволен."
    },
    "def": {
      "de": "Herr Koch <g>hat sich weder</g> beim Vermieter <g>noch</g> bei den Nachbarn über den Lärm <b>beschwert</b>.",
      "en": "Mr Koch <g>has neither</g> <b>complained</b> to the landlord <g>nor</g> to the neighbours about the noise.",
      "uk": "Пан Кох <g>ні</g> орендодавцю, <g>ні</g> сусідам <b>не поскаржився</b> на шум.",
      "ru": "Господин Кох <g>ни</g> арендодателю, <g>ни</g> соседям <b>не пожаловался</b> на шум."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_011",
    "cat": "k1",
    "term": {
      "de": "sich entschuldigen",
      "en": "to apologize",
      "uk": "вибачатися",
      "ru": "извиняться"
    },
    "short": {
      "de": "„Es tut mir leid“ sagen, wenn man einen Fehler gemacht hat.",
      "en": "To say „I'm sorry“ when you have made a mistake.",
      "uk": "Казати «мені шкода», коли ти зробив помилку.",
      "ru": "Говорить «мне жаль», когда ты совершил ошибку."
    },
    "def": {
      "de": "Der junge Mann <g>hat sich sowohl</g> bei der Nachbarin <g>als auch</g> beim Hausmeister <b>entschuldigt</b>.",
      "en": "The young man <g>has both</g> <b>apologized</b> to the neighbour <g>and</g> to the caretaker.",
      "uk": "Молодий чоловік <g>як</g> перед сусідкою, <g>так і</g> перед двірником <b>вибачився</b>.",
      "ru": "Молодой человек <g>как</g> перед соседкой, <g>так и</g> перед дворником <b>извинился</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_012",
    "cat": "k1",
    "term": {
      "de": "erlauben",
      "en": "to allow",
      "uk": "дозволяти",
      "ru": "разрешать"
    },
    "short": {
      "de": "Sagen, dass jemand etwas machen darf.",
      "en": "To say that someone is allowed to do something.",
      "uk": "Казати, що комусь можна щось робити.",
      "ru": "Говорить, что кому-то можно что-то делать."
    },
    "def": {
      "de": "<g>Würden Sie</g> mir <b>erlauben</b>, meinen Kinderwagen kurz im Flur stehen zu lassen?",
      "en": "<g>Would you</g> <b>allow</b> me to leave my stroller in the hallway for a moment?",
      "uk": "<g>Могли б Ви</g> <b>дозволити</b> мені залишити коляску в коридорі на хвилинку?",
      "ru": "<g>Могли бы Вы</g> <b>разрешить</b> мне оставить коляску в коридоре на минутку?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_013",
    "cat": "k1",
    "term": {
      "de": "stören",
      "en": "to disturb",
      "uk": "заважати",
      "ru": "мешать"
    },
    "short": {
      "de": "Jemanden bei etwas unterbrechen oder ihm Lärm machen.",
      "en": "To interrupt someone or make noise that bothers them.",
      "uk": "Перебивати комусь щось або створювати шум, який заважає.",
      "ru": "Прерывать кого-то или создавать шум, который мешает."
    },
    "def": {
      "de": "<g>Könnten Sie</g> bitte leiser sein? Die Musik <b>stört</b> unser Baby beim Schlafen.",
      "en": "<g>Could you</g> please be quieter? The music is <b>disturbing</b> our baby's sleep.",
      "uk": "<g>Могли б Ви</g>, будь ласка, говорити тихіше? Музика <b>заважає</b> нашій дитині спати.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, потише? Музыка <b>мешает</b> нашему ребёнку спать."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_014",
    "cat": "k1",
    "term": {
      "de": "der Umzug",
      "en": "move, relocation",
      "uk": "переїзд",
      "ru": "переезд"
    },
    "short": {
      "de": "Wenn man mit allen Möbeln in eine andere Wohnung zieht.",
      "en": "When you move with all your furniture to another flat.",
      "uk": "Коли ти переїжджаєш з усіма меблями в іншу квартиру.",
      "ru": "Когда ты переезжаешь со всей мебелью в другую квартиру."
    },
    "def": {
      "de": "Beim <b>Umzug</b> haben uns <g>sowohl</g> die Nachbarn <g>als auch</g> unsere Freunde geholfen.",
      "en": "<g>Both</g> the neighbours <g>and</g> our friends helped us with the <b>move</b>.",
      "uk": "Під час <b>переїзду</b> нам допомогли <g>як</g> сусіди, <g>так і</g> наші друзі.",
      "ru": "Во время <b>переезда</b> нам помогли <g>как</g> соседи, <g>так и</g> наши друзья."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_015",
    "cat": "k1",
    "term": {
      "de": "der Mieter / die Mieterin",
      "en": "tenant",
      "uk": "орендар / орендарка",
      "ru": "арендатор / арендатора"
    },
    "short": {
      "de": "Eine Person, die eine Wohnung mietet und darin wohnt.",
      "en": "A person who rents a flat and lives in it.",
      "uk": "Людина, яка орендує квартиру і живе в ній.",
      "ru": "Человек, который снимает квартиру и живёт в ней."
    },
    "def": {
      "de": "Jeder neue <b>Mieter</b> bekommt die Aufgabe, die Hausordnung <g>zu unterschreiben</g>.",
      "en": "Every new <b>tenant</b> gets the task <g>of signing</g> the house rules.",
      "uk": "Кожен новий <b>орендар</b> отримує завдання підписати правила будинку.",
      "ru": "Каждый новый <b>арендатор</b> получает задание подписать правила дома."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k2_001",
    "cat": "k2",
    "term": {
      "de": "die Reklamation",
      "en": "complaint (about goods)",
      "uk": "рекламація, претензія",
      "ru": "рекламация, претензия"
    },
    "short": {
      "de": "Wenn man einer Firma sagt, dass eine Ware oder ein Service nicht in Ordnung ist.",
      "en": "When you tell a company that a product or service is not okay.",
      "uk": "Коли ти повідомляєш фірмі, що товар чи послуга не в порядку.",
      "ru": "Когда ты сообщаешь фирме, что товар или услуга не в порядке."
    },
    "def": {
      "de": "Das war keine normale Bestellung, <g>sondern</g> eine <b>Reklamation</b>, <g>die</g> sofort bearbeitet werden musste.",
      "en": "That was not a normal order <g>but</g> a <b>complaint</b> <g>that</g> had to be processed immediately.",
      "uk": "Це було не звичайне замовлення, <g>а</g> <b>рекламація</b>, <g>яку</g> потрібно було обробити негайно.",
      "ru": "Это был не обычный заказ, <g>а</g> <b>рекламация</b>, <g>которую</g> нужно было обработать немедленно."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_002",
    "cat": "k2",
    "term": {
      "de": "reklamieren",
      "en": "to file a complaint",
      "uk": "подавати рекламацію",
      "ru": "подавать претензию"
    },
    "short": {
      "de": "Einer Firma sagen, dass man mit einer Ware oder einem Service nicht zufrieden ist.",
      "en": "To tell a company that you are not satisfied with a product or service.",
      "uk": "Повідомити фірмі, що ти незадоволений товаром чи послугою.",
      "ru": "Сообщить фирме, что ты недоволен товаром или услугой."
    },
    "def": {
      "de": "Frau Yilmaz wollte nicht schreiben, <g>sondern</g> direkt beim Kundenservice <b>reklamieren</b>, <g>der</g> ihr sofort half.",
      "en": "Mrs Yilmaz didn't want to write an email <g>but</g> <b>complain</b> directly to customer service, <g>who</g> helped her right away.",
      "uk": "Пані Йилмаз не хотіла писати, <g>а</g> хотіла <b>поскаржитися</b> прямо в службу підтримки, <g>яка</g> відразу їй допомогла.",
      "ru": "Госпожа Йилмаз не хотела писать, <g>а</g> хотела <b>пожаловаться</b> прямо в службу поддержки, <g>которая</g> сразу ей помогла."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_003",
    "cat": "k2",
    "term": {
      "de": "die Zahlungserinnerung",
      "en": "payment reminder",
      "uk": "нагадування про оплату",
      "ru": "напоминание об оплате"
    },
    "short": {
      "de": "Ein Brief oder eine E-Mail, die daran erinnert, dass man noch bezahlen muss.",
      "en": "A letter or email that reminds you that you still have to pay.",
      "uk": "Лист, який нагадує, що ще потрібно оплатити.",
      "ru": "Письмо, которое напоминает, что ещё нужно оплатить."
    },
    "def": {
      "de": "Die <b>Zahlungserinnerung</b>, <g>die</g> ich gestern bekommen habe, war eigentlich ein Fehler.",
      "en": "The <b>payment reminder</b> <g>that</g> I received yesterday was actually a mistake.",
      "uk": "<b>Нагадування про оплату</b>, <g>яке</g> я отримав учора, було насправді помилкою.",
      "ru": "<b>Напоминание об оплате</b>, <g>которое</g> я получил вчера, было на самом деле ошибкой."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_004",
    "cat": "k2",
    "term": {
      "de": "die Mahnung",
      "en": "dunning notice, warning",
      "uk": "офіційне нагадування",
      "ru": "официальное напоминание"
    },
    "short": {
      "de": "Ein offizieller Brief, der sagt, dass man eine Rechnung noch nicht bezahlt hat.",
      "en": "An official letter that says you haven't paid an invoice yet.",
      "uk": "Офіційний лист, який повідомляє, що ти ще не оплатив рахунок.",
      "ru": "Официальное письмо, которое сообщает, что ты ещё не оплатил счёт."
    },
    "def": {
      "de": "Die <b>Mahnung</b>, <g>die</g> Herr Bach bekommen hat, war schon die zweite.",
      "en": "The <b>dunning notice</b> <g>that</g> Mr Bach received was already the second one.",
      "uk": "<b>Нагадування</b>, <g>яке</g> отримав пан Бах, було вже другим.",
      "ru": "<b>Напоминание</b>, <g>которое</g> получил господин Бах, было уже вторым."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_005",
    "cat": "k2",
    "term": {
      "de": "die Rechnung",
      "en": "invoice, bill",
      "uk": "рахунок (до оплати)",
      "ru": "счёт (к оплате)"
    },
    "short": {
      "de": "Ein Dokument, auf dem steht, wie viel Geld man für etwas bezahlen muss.",
      "en": "A document that shows how much money you have to pay for something.",
      "uk": "Документ, у якому написано, скільки грошей потрібно заплатити за щось.",
      "ru": "Документ, в котором написано, сколько денег нужно заплатить за что-то."
    },
    "def": {
      "de": "Die <b>Rechnung</b>, <g>die</g> wir letzte Woche bekommen haben, war leider falsch.",
      "en": "The <b>invoice</b> <g>that</g> we received last week was unfortunately wrong.",
      "uk": "<b>Рахунок</b>, <g>який</g> ми отримали минулого тижня, на жаль, був неправильним.",
      "ru": "<b>Счёт</b>, <g>который</g> мы получили на прошлой неделе, к сожалению, был неправильным."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_006",
    "cat": "k2",
    "term": {
      "de": "die Quittung",
      "en": "receipt",
      "uk": "квитанція",
      "ru": "квитанция"
    },
    "short": {
      "de": "Ein Papier, das zeigt, dass man für etwas schon bezahlt hat.",
      "en": "A piece of paper that shows you have already paid for something.",
      "uk": "Папір, який показує, що ти вже заплатив за щось.",
      "ru": "Бумага, которая показывает, что ты уже заплатил за что-то."
    },
    "def": {
      "de": "Ohne die <b>Quittung</b>, <g>die</g> ich leider verloren habe, kann ich die Hose nicht umtauschen.",
      "en": "Without the <b>receipt</b> <g>that</g> I unfortunately lost, I cannot exchange the trousers.",
      "uk": "Без <b>квитанції</b>, <g>яку</g> я, на жаль, загубив, я не можу обміняти штани.",
      "ru": "Без <b>квитанции</b>, <g>которую</g> я, к сожалению, потерял, я не могу обменять брюки."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_007",
    "cat": "k2",
    "term": {
      "de": "umtauschen",
      "en": "to exchange (goods)",
      "uk": "обмінювати (товар)",
      "ru": "обменивать (товар)"
    },
    "short": {
      "de": "Eine Ware gegen eine andere Ware im Geschäft tauschen.",
      "en": "To exchange one product for another in a shop.",
      "uk": "Обмінювати товар на інший у магазині.",
      "ru": "Обменивать товар на другой в магазине."
    },
    "def": {
      "de": "Das Kleid, <g>das</g> ich <b>umtauschen</b> möchte, ist leider zu klein.",
      "en": "The dress <g>that</g> I would like to <b>exchange</b> is unfortunately too small.",
      "uk": "Плаття, <g>яке</g> я хочу <b>обміняти</b>, на жаль, замале.",
      "ru": "Платье, <g>которое</g> я хочу <b>обменять</b>, к сожалению, слишком маленькое."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_008",
    "cat": "k2",
    "term": {
      "de": "der Kundenservice",
      "en": "customer service",
      "uk": "служба підтримки клієнтів",
      "ru": "служба поддержки клиентов"
    },
    "short": {
      "de": "Die Abteilung einer Firma, die Kunden bei Fragen und Problemen hilft.",
      "en": "The department of a company that helps customers with questions and problems.",
      "uk": "Відділ фірми, який допомагає клієнтам із питаннями та проблемами.",
      "ru": "Отдел фирмы, который помогает клиентам с вопросами и проблемами."
    },
    "def": {
      "de": "Der <b>Kundenservice</b> war <g>weder</g> telefonisch <g>noch</g> per E-Mail zu erreichen.",
      "en": "<b>Customer service</b> could be reached <g>neither</g> by phone <g>nor</g> by email.",
      "uk": "До <b>служби підтримки</b> не можна було додзвонитися <g>ні</g> телефоном, <g>ні</g> написати електронною поштою.",
      "ru": "В <b>службу поддержки</b> невозможно было дозвониться <g>ни</g> по телефону, <g>ни</g> написать по электронной почте."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_009",
    "cat": "k2",
    "term": {
      "de": "liefern",
      "en": "to deliver",
      "uk": "доставляти",
      "ru": "доставлять"
    },
    "short": {
      "de": "Eine Ware zum Kunden bringen.",
      "en": "To bring goods to the customer.",
      "uk": "Привозити товар клієнту.",
      "ru": "Привозить товар клиенту."
    },
    "def": {
      "de": "Der Onlineshop <b>liefert</b> die Ware meistens innerhalb der <g>Lieferzeit</g> von zwei Tagen.",
      "en": "The online shop usually <b>delivers</b> the goods within a delivery time of two days.",
      "uk": "Інтернет-магазин зазвичай <b>доставляє</b> товар протягом строку доставки в два дні.",
      "ru": "Интернет-магазин обычно <b>доставляет</b> товар в течение срока доставки в два дня."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_010",
    "cat": "k2",
    "term": {
      "de": "fehlerhaft",
      "en": "defective, faulty",
      "uk": "несправний, бракований",
      "ru": "неисправный, бракованный"
    },
    "short": {
      "de": "Wenn eine Ware nicht richtig funktioniert oder kaputt ist.",
      "en": "When a product doesn't work properly or is broken.",
      "uk": "Коли товар не працює правильно або зламаний.",
      "ru": "Когда товар не работает правильно или сломан."
    },
    "def": {
      "de": "Das war kein normales Problem, <g>sondern</g> ein <b>fehlerhaftes</b> Gerät, <g>das</g> sofort ausgetauscht wurde.",
      "en": "That was not a normal problem <g>but</g> a <b>faulty</b> device <g>that</g> was replaced immediately.",
      "uk": "Це була не звичайна проблема, <g>а</g> <b>несправний</b> пристрій, <g>який</g> негайно замінили.",
      "ru": "Это была не обычная проблема, <g>а</g> <b>неисправное</b> устройство, <g>которое</g> немедленно заменили."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_011",
    "cat": "k2",
    "term": {
      "de": "der Rabatt",
      "en": "discount",
      "uk": "знижка",
      "ru": "скидка"
    },
    "short": {
      "de": "Ein niedrigerer Preis, den man für eine Ware bezahlt.",
      "en": "A lower price that you pay for a product.",
      "uk": "Нижча ціна, яку ти платиш за товар.",
      "ru": "Более низкая цена, которую ты платишь за товар."
    },
    "def": {
      "de": "Der <b>Rabatt</b>, <g>den</g> wir letzte Woche bekommen haben, war zwanzig Prozent.",
      "en": "The <b>discount</b> <g>that</g> we received last week was twenty percent.",
      "uk": "<b>Знижка</b>, <g>яку</g> ми отримали минулого тижня, становила двадцять відсотків.",
      "ru": "<b>Скидка</b>, <g>которую</g> мы получили на прошлой неделе, составляла двадцать процентов."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_012",
    "cat": "k2",
    "term": {
      "de": "bestellen",
      "en": "to order",
      "uk": "замовляти",
      "ru": "заказывать"
    },
    "short": {
      "de": "Sagen, dass man etwas in einem Geschäft oder online kaufen möchte.",
      "en": "To say that you want to buy something in a shop or online.",
      "uk": "Казати, що хочеш купити щось у магазині чи онлайн.",
      "ru": "Говорить, что хочешь купить что-то в магазине или онлайн."
    },
    "def": {
      "de": "Ich habe <g>mir</g> ein neues Handy <b>bestellt</b>.",
      "en": "I have <b>ordered</b> myself a new phone.",
      "uk": "Я <g>собі</g> <b>замовив</b> новий телефон.",
      "ru": "Я <g>себе</g> <b>заказал</b> новый телефон."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_013",
    "cat": "k2",
    "term": {
      "de": "die Bestellung",
      "en": "order",
      "uk": "замовлення",
      "ru": "заказ"
    },
    "short": {
      "de": "Ein Auftrag, mit dem man etwas in einem Geschäft oder online kauft.",
      "en": "A request with which you buy something in a shop or online.",
      "uk": "Замовлення, яким ти купуєш щось у магазині або онлайн.",
      "ru": "Заказ, с помощью которого ты покупаешь что-то в магазине или онлайн."
    },
    "def": {
      "de": "Ich habe <g>mich</g> heute über meine neue <b>Bestellung</b> sehr gefreut.",
      "en": "I was very happy about my new <b>order</b> today.",
      "uk": "Я сьогодні дуже зрадів(-ла) своєму новому <b>замовленню</b>.",
      "ru": "Я сегодня очень обрадовался(-лась) своему новому <b>заказу</b>."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_014",
    "cat": "k2",
    "term": {
      "de": "der Kassenbon",
      "en": "till receipt",
      "uk": "касовий чек",
      "ru": "кассовый чек"
    },
    "short": {
      "de": "Ein kleines Papier von der Kasse, das zeigt, was man gekauft hat.",
      "en": "A small piece of paper from the till that shows what you bought.",
      "uk": "Маленький папір з каси, який показує, що ти купив.",
      "ru": "Маленькая бумага из кассы, которая показывает, что ты купил."
    },
    "def": {
      "de": "Ohne den <g><b>Kassenbon</b></g> kann das Geschäft die Ware nicht umtauschen.",
      "en": "Without the <b>receipt</b>, the shop cannot exchange the item.",
      "uk": "Без <b>касового чека</b> магазин не може обміняти товар.",
      "ru": "Без <b>кассового чека</b> магазин не может обменять товар."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_015",
    "cat": "k2",
    "term": {
      "de": "die Öffnungszeiten",
      "en": "opening hours",
      "uk": "години роботи",
      "ru": "часы работы"
    },
    "short": {
      "de": "Die Zeiten, in denen ein Geschäft geöffnet ist.",
      "en": "The times when a shop is open.",
      "uk": "Час, коли магазин відчинений.",
      "ru": "Время, когда магазин открыт."
    },
    "def": {
      "de": "Der Supermarkt hat <g>sowohl</g> am Samstag <g>als auch</g> am Sonntag lange <b>Öffnungszeiten</b>.",
      "en": "The supermarket has long <b>opening hours</b> <g>both</g> on Saturday <g>and</g> on Sunday.",
      "uk": "У супермаркету довгі <b>години роботи</b> <g>як</g> у суботу, <g>так і</g> в неділю.",
      "ru": "У супермаркета долгие <b>часы работы</b> <g>как</g> в субботу, <g>так и</g> в воскресенье."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k3_001",
    "cat": "k3",
    "term": {
      "de": "das Girokonto",
      "en": "checking account",
      "uk": "поточний рахунок",
      "ru": "текущий счёт"
    },
    "short": {
      "de": "Ein Bankkonto, mit dem man normalerweise bezahlt und Geld bekommt.",
      "en": "A bank account that you normally use to pay and receive money.",
      "uk": "Банківський рахунок, яким зазвичай платять і отримують гроші.",
      "ru": "Банковский счёт, которым обычно платят и получают деньги."
    },
    "def": {
      "de": "Ohne <b>Girokonto</b> dürfte es schwierig sein, das Gehalt zu bekommen.",
      "en": "Without a <b>checking account</b>, it might be difficult to receive your salary.",
      "uk": "Без <b>поточного рахунку</b>, ймовірно, важко отримати зарплату.",
      "ru": "Без <b>текущего счёта</b>, вероятно, сложно получить зарплату."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_002",
    "cat": "k3",
    "term": {
      "de": "eröffnen",
      "en": "to open (e.g. an account)",
      "uk": "відкривати (рахунок)",
      "ru": "открывать (счёт)"
    },
    "short": {
      "de": "Etwas Neues bei einer Bank oder Firma starten, zum Beispiel ein Konto.",
      "en": "To start something new at a bank or company, for example an account.",
      "uk": "Розпочати щось нове в банку чи фірмі, наприклад рахунок.",
      "ru": "Начать что-то новое в банке или компании, например счёт."
    },
    "def": {
      "de": "Herr Demir müsste sein neues Konto schon <b>eröffnet</b> haben.",
      "en": "Mr Demir must have already <b>opened</b> his new account.",
      "uk": "Пан Демір, мабуть, уже <b>відкрив</b> свій новий рахунок.",
      "ru": "Господин Демир, наверное, уже <b>открыл</b> свой новый счёт."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_003",
    "cat": "k3",
    "term": {
      "de": "die Versicherung",
      "en": "insurance",
      "uk": "страхування, страховка",
      "ru": "страхование, страховка"
    },
    "short": {
      "de": "Ein Vertrag, der bei einem Problem oder Schaden Geld bezahlt.",
      "en": "A contract that pays money in case of a problem or damage.",
      "uk": "Договір, за яким сплачують гроші у разі проблеми чи шкоди.",
      "ru": "Договор, по которому платят деньги в случае проблемы или ущерба."
    },
    "def": {
      "de": "Die Kosten <g>der</g> <b>Versicherung</b> sind in diesem Jahr leider gestiegen.",
      "en": "The costs <g>of the</g> <b>insurance</b> have unfortunately risen this year.",
      "uk": "Вартість <b>страхування</b> цього року, на жаль, зросла.",
      "ru": "Стоимость <b>страхования</b> в этом году, к сожалению, выросла."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_004",
    "cat": "k3",
    "term": {
      "de": "die Haftpflichtversicherung",
      "en": "liability insurance",
      "uk": "страхування цивільної відповідальності",
      "ru": "страхование гражданской ответственности"
    },
    "short": {
      "de": "Eine Versicherung, die bezahlt, wenn man aus Versehen einen Schaden bei jemand anderem verursacht.",
      "en": "An insurance that pays when you accidentally cause damage to someone else.",
      "uk": "Страхування, яке платить, коли ти випадково завдав шкоди іншій людині.",
      "ru": "Страхование, которое платит, когда ты случайно нанёс ущерб другому человеку."
    },
    "def": {
      "de": "Der Preis <g>der</g> <b>Haftpflichtversicherung</b> hängt vom Alter des Fahrers ab.",
      "en": "The price <g>of the</g> <b>liability insurance</b> depends on the driver's age.",
      "uk": "Ціна <b>страхування цивільної відповідальності</b> залежить від віку водія.",
      "ru": "Цена <b>страхования гражданской ответственности</b> зависит от возраста водителя."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_005",
    "cat": "k3",
    "term": {
      "de": "der Sperrnotruf",
      "en": "emergency card-blocking hotline",
      "uk": "гаряча лінія для блокування картки",
      "ru": "горячая линия для блокировки карты"
    },
    "short": {
      "de": "Eine Telefonnummer, die man anruft, wenn eine Bankkarte gestohlen wurde oder verloren ist.",
      "en": "A phone number you call when a bank card has been stolen or lost.",
      "uk": "Телефонний номер, на який дзвониш, якщо банківську картку вкрадено чи втрачено.",
      "ru": "Номер телефона, на который звонишь, если банковская карта украдена или потеряна."
    },
    "def": {
      "de": "Die Nummer <g>des</g> <b>Sperrnotrufs</b> steht auf der Rückseite der Bankkarte.",
      "en": "The number <g>of the</g> <b>emergency hotline</b> is on the back of the bank card.",
      "uk": "Номер <b>гарячої лінії для блокування картки</b> написаний на зворотному боці картки.",
      "ru": "Номер <b>горячей линии для блокировки карты</b> написан на обратной стороне карты."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_006",
    "cat": "k3",
    "term": {
      "de": "sperren",
      "en": "to block",
      "uk": "блокувати",
      "ru": "блокировать"
    },
    "short": {
      "de": "Etwas so machen, dass man es nicht mehr benutzen kann.",
      "en": "To make something unable to be used anymore.",
      "uk": "Робити так, щоб чимось більше не можна було користуватися.",
      "ru": "Делать так, чтобы чем-то больше нельзя было пользоваться."
    },
    "def": {
      "de": "Wegen des Diebstahls <g>der</g> Handtasche musste sie ihre Bankkarte sofort <b>sperren</b> lassen.",
      "en": "Because <g>of the</g> theft of her handbag, she had to <b>block</b> her bank card immediately.",
      "uk": "Через крадіжку сумки їй довелося негайно <b>блокувати</b> свою банківську картку.",
      "ru": "Из-за кражи сумки ей пришлось немедленно <b>заблокировать</b> свою банковскую карту."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_007",
    "cat": "k3",
    "term": {
      "de": "kündigen",
      "en": "to cancel, terminate (a contract)",
      "uk": "розривати (договір)",
      "ru": "расторгать (договор)"
    },
    "short": {
      "de": "Einen Vertrag offiziell beenden.",
      "en": "To officially end a contract.",
      "uk": "Офіційно завершити договір.",
      "ru": "Официально завершить договор."
    },
    "def": {
      "de": "Er hat den Vertrag <b>gekündigt</b>, <g>obwohl</g> die Versicherung eigentlich sehr günstig war.",
      "en": "He <b>cancelled</b> the contract <g>although</g> the insurance was actually very cheap.",
      "uk": "Він <b>розірвав</b> договір, <g>хоча</g> страхування насправді було дуже дешевим.",
      "ru": "Он <b>расторг</b> договор, <g>хотя</g> страхование на самом деле было очень дешёвым."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_008",
    "cat": "k3",
    "term": {
      "de": "die Kündigung",
      "en": "cancellation, termination",
      "uk": "розірвання договору",
      "ru": "расторжение договора"
    },
    "short": {
      "de": "Der offizielle Brief oder Vorgang, mit dem man einen Vertrag beendet.",
      "en": "The official letter or process with which you end a contract.",
      "uk": "Офіційний лист або процес, яким завершують договір.",
      "ru": "Официальное письмо или процесс, которым завершают договор."
    },
    "def": {
      "de": "Die <b>Kündigung</b> kam an, <g>obwohl</g> Frau Krause den Brief nie abgeschickt hatte.",
      "en": "The <b>termination</b> arrived <g>although</g> Mrs Krause had never sent the letter.",
      "uk": "<b>Розірвання договору</b> надійшло, <g>хоча</g> пані Краузе ніколи не надсилала листа.",
      "ru": "<b>Расторжение договора</b> пришло, <g>хотя</g> госпожа Краузе никогда не отправляла письмо."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_009",
    "cat": "k3",
    "term": {
      "de": "die Verbraucherzentrale",
      "en": "consumer advice centre",
      "uk": "центр захисту прав споживачів",
      "ru": "центр защиты прав потребителей"
    },
    "short": {
      "de": "Eine Organisation, die Verbrauchern bei Problemen mit Firmen hilft.",
      "en": "An organisation that helps consumers with problems with companies.",
      "uk": "Організація, яка допомагає споживачам із проблемами з фірмами.",
      "ru": "Организация, которая помогает потребителям с проблемами с компаниями."
    },
    "def": {
      "de": "Die <b>Verbraucherzentrale</b> hilft oft beim Schreiben eines <g>Kündigungsschreibens</g>.",
      "en": "The <b>consumer advice centre</b> often helps with writing a letter of termination.",
      "uk": "<b>Центр захисту прав споживачів</b> часто допомагає написати лист про розірвання договору.",
      "ru": "<b>Центр защиты прав потребителей</b> часто помогает написать письмо о расторжении договора."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_010",
    "cat": "k3",
    "term": {
      "de": "der Vertrag",
      "en": "contract",
      "uk": "договір",
      "ru": "договор"
    },
    "short": {
      "de": "Ein offizielles Dokument, das die Regeln zwischen zwei Seiten festlegt.",
      "en": "An official document that sets the rules between two parties.",
      "uk": "Офіційний документ, який визначає правила між двома сторонами.",
      "ru": "Официальный документ, который устанавливает правила между двумя сторонами."
    },
    "def": {
      "de": "Bevor man einen <b>Vertrag</b> unterschreibt, sollte man die <g>Kündigungsfrist</g> genau lesen.",
      "en": "Before signing a <b>contract</b>, you should read the notice period carefully.",
      "uk": "Перш ніж підписувати <b>договір</b>, варто уважно прочитати термін розірвання.",
      "ru": "Перед подписанием <b>договора</b> стоит внимательно прочитать срок расторжения."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_011",
    "cat": "k3",
    "term": {
      "de": "abschließen",
      "en": "to conclude (a contract)",
      "uk": "укладати (договір)",
      "ru": "заключать (договор)"
    },
    "short": {
      "de": "Einen Vertrag offiziell unterschreiben und damit beginnen.",
      "en": "To officially sign a contract and start it.",
      "uk": "Офіційно підписати договір і розпочати його дію.",
      "ru": "Официально подписать договор и начать его действие."
    },
    "def": {
      "de": "Wir haben die neue Versicherung <b>abgeschlossen</b>, nachdem wir ein langes <g>Beratungsgespräch</g> hatten.",
      "en": "We <b>concluded</b> the new insurance policy after having a long consultation.",
      "uk": "Ми <b>уклали</b> нове страхування після довгої консультаційної розмови.",
      "ru": "Мы <b>заключили</b> новое страхование после долгой консультационной беседы."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_012",
    "cat": "k3",
    "term": {
      "de": "die Gebühr",
      "en": "fee",
      "uk": "плата, збір",
      "ru": "плата, сбор"
    },
    "short": {
      "de": "Geld, das man für einen Service oder eine Leistung bezahlen muss.",
      "en": "Money that you have to pay for a service.",
      "uk": "Гроші, які потрібно платити за послугу.",
      "ru": "Деньги, которые нужно платить за услугу."
    },
    "def": {
      "de": "Die Bank verlangt eine <b>Gebühr</b>, <g>obwohl</g> das Konto eigentlich kostenlos sein sollte.",
      "en": "The bank charges a <b>fee</b> <g>although</g> the account is actually supposed to be free.",
      "uk": "Банк вимагає <b>плату</b>, <g>хоча</g> рахунок мав би бути безкоштовним.",
      "ru": "Банк требует <b>плату</b>, <g>хотя</g> счёт должен быть бесплатным."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_013",
    "cat": "k3",
    "term": {
      "de": "die Überweisung",
      "en": "bank transfer",
      "uk": "банківський переказ",
      "ru": "банковский перевод"
    },
    "short": {
      "de": "Wenn man Geld von seinem Konto auf ein anderes Konto schickt.",
      "en": "When you send money from your account to another account.",
      "uk": "Коли ти переказуєш гроші з свого рахунку на інший рахунок.",
      "ru": "Когда ты переводишь деньги со своего счёта на другой счёт."
    },
    "def": {
      "de": "Die <b>Überweisung</b> ist noch nicht angekommen, <g>deshalb</g> rufe ich heute bei der Bank an.",
      "en": "The <b>bank transfer</b> has not arrived yet, <g>therefore</g> I am calling the bank today.",
      "uk": "<b>Переказ</b> ще не надійшов, <g>тому</g> я сьогодні дзвоню в банк.",
      "ru": "<b>Перевод</b> ещё не пришёл, <g>поэтому</g> я сегодня звоню в банк."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_014",
    "cat": "k3",
    "term": {
      "de": "der Schaden",
      "en": "damage",
      "uk": "шкода, збиток",
      "ru": "ущерб"
    },
    "short": {
      "de": "Wenn etwas kaputt oder zerstört wird.",
      "en": "When something gets broken or destroyed.",
      "uk": "Коли щось стає зламаним чи знищеним.",
      "ru": "Когда что-то становится сломанным или уничтоженным."
    },
    "def": {
      "de": "Der <b>Schaden</b> am Auto war klein, <g>trotzdem</g> musste sie die Versicherung informieren.",
      "en": "The <b>damage</b> to the car was small; <g>nevertheless</g>, she had to inform the insurance company.",
      "uk": "<b>Шкода</b> автомобілю була невеликою, <g>проте</g> їй все одно довелося повідомити страхову.",
      "ru": "<b>Ущерб</b> автомобилю был небольшим, <g>однако</g> ей всё же пришлось сообщить страховой."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_015",
    "cat": "k3",
    "term": {
      "de": "die Schadensmeldung",
      "en": "damage report",
      "uk": "повідомлення про шкоду",
      "ru": "сообщение об ущербе"
    },
    "short": {
      "de": "Ein Formular oder Brief, mit dem man der Versicherung einen Schaden meldet.",
      "en": "A form or letter with which you report damage to the insurance company.",
      "uk": "Формуляр або лист, яким повідомляєш страховій про шкоду.",
      "ru": "Формуляр или письмо, которым сообщаешь страховой об ущербе."
    },
    "def": {
      "de": "Ich habe die <b>Schadensmeldung</b> sofort geschickt, <g>damit</g> die Versicherung schnell reagieren kann.",
      "en": "I sent the <b>damage report</b> immediately <g>so that</g> the insurance can react quickly.",
      "uk": "Я негайно надіслав <b>повідомлення про шкоду</b>, <g>щоб</g> страхова могла швидко реагувати.",
      "ru": "Я немедленно отправил <b>сообщение об ущербе</b>, <g>чтобы</g> страховая могла быстро реагировать."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_001",
    "cat": "k4",
    "term": {
      "de": "die Essgewohnheit",
      "en": "eating habit",
      "uk": "харчова звичка",
      "ru": "привычка питания"
    },
    "short": {
      "de": "Wie und was man normalerweise isst.",
      "en": "How and what you normally eat.",
      "uk": "Як і що ти зазвичай їси.",
      "ru": "Как и что ты обычно ешь."
    },
    "def": {
      "de": "Meine <b>Essgewohnheiten</b> haben sich verändert, <g>seit</g> ich in Deutschland lebe.",
      "en": "My <b>eating habits</b> have changed <g>since</g> I have been living in Germany.",
      "uk": "Мої <b>харчові звички</b> змінилися, <g>відколи</g> я живу в Німеччині.",
      "ru": "Мои <b>привычки питания</b> изменились, <g>с тех пор как</g> я живу в Германии."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_002",
    "cat": "k4",
    "term": {
      "de": "sich ernähren",
      "en": "to eat, nourish oneself",
      "uk": "харчуватися",
      "ru": "питаться"
    },
    "short": {
      "de": "Essen, um zu leben und gesund zu bleiben.",
      "en": "To eat in order to live and stay healthy.",
      "uk": "Їсти, щоб жити й залишатися здоровим.",
      "ru": "Есть, чтобы жить и оставаться здоровым."
    },
    "def": {
      "de": "Früher <b>ernährte</b> ich <b>mich</b> nur von Fast Food, heute koche ich selbst.",
      "en": "In the past, I only <b>ate</b> fast food; today I cook myself.",
      "uk": "Раніше я <b>харчувався</b> лише фаст-фудом, сьогодні я готую сам.",
      "ru": "Раньше я <b>питался</b> только фастфудом, сегодня я готовлю сам."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_003",
    "cat": "k4",
    "term": {
      "de": "die Ernährung",
      "en": "nutrition",
      "uk": "харчування",
      "ru": "питание"
    },
    "short": {
      "de": "Das Essen, das man regelmäßig zu sich nimmt.",
      "en": "The food that you regularly eat.",
      "uk": "Їжа, яку ти регулярно споживаєш.",
      "ru": "Еда, которую ты регулярно потребляешь."
    },
    "def": {
      "de": "Seine <b>Ernährung</b> <g>bestand</g> früher fast nur aus Brot und Wurst.",
      "en": "His <b>diet</b> <g>consisted</g> almost only of bread and sausage in the past.",
      "uk": "Його <b>харчування</b> раніше складалося майже лише з хліба й ковбаси.",
      "ru": "Его <b>питание</b> раньше состояло почти только из хлеба и колбасы."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_004",
    "cat": "k4",
    "term": {
      "de": "der Automat",
      "en": "vending machine",
      "uk": "торговий автомат",
      "ru": "торговый автомат"
    },
    "short": {
      "de": "Eine Maschine, aus der man Essen, Getränke oder Tickets kaufen kann.",
      "en": "A machine from which you can buy food, drinks or tickets.",
      "uk": "Автомат, з якого можна купити їжу, напої чи квитки.",
      "ru": "Автомат, из которого можно купить еду, напитки или билеты."
    },
    "def": {
      "de": "Der <b>Automat</b> war leider kaputt, <g>deshalb</g> konnte ich keinen Kaffee kaufen.",
      "en": "The <b>vending machine</b> was unfortunately broken, <g>therefore</g> I could not buy any coffee.",
      "uk": "<b>Автомат</b> був, на жаль, зламаний, <g>тому</g> я не міг купити каву.",
      "ru": "<b>Автомат</b> был, к сожалению, сломан, <g>поэтому</g> я не мог купить кофе."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_005",
    "cat": "k4",
    "term": {
      "de": "die Zutat",
      "en": "ingredient",
      "uk": "інгредієнт",
      "ru": "ингредиент"
    },
    "short": {
      "de": "Ein Lebensmittel, das man für ein Rezept braucht.",
      "en": "A food item that you need for a recipe.",
      "uk": "Продукт, який потрібен для рецепту.",
      "ru": "Продукт, который нужен для рецепта."
    },
    "def": {
      "de": "Für den Kuchen fehlt noch eine <b>Zutat</b>: das <g>Eiweiß</g>.",
      "en": "One <b>ingredient</b> is still missing for the cake: the egg white.",
      "uk": "Для торта не вистачає ще одного <b>інгредієнта</b>: яєчного білка.",
      "ru": "Для торта не хватает ещё одного <b>ингредиента</b>: яичного белка."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_006",
    "cat": "k4",
    "term": {
      "de": "der Geschmack",
      "en": "taste",
      "uk": "смак",
      "ru": "вкус"
    },
    "short": {
      "de": "Wie etwas schmeckt, zum Beispiel süß oder salzig.",
      "en": "How something tastes, for example sweet or salty.",
      "uk": "Який смак у чогось, наприклад солодкий чи солоний.",
      "ru": "Какой вкус у чего-то, например сладкий или солёный."
    },
    "def": {
      "de": "Der <b>Geschmack</b> der Suppe war besser, seit wir <g>Gewürzmischungen</g> benutzt haben.",
      "en": "The <b>taste</b> of the soup got better since we started using spice mixes.",
      "uk": "<b>Смак</b> супу став кращим, відколи ми почали використовувати суміші спецій.",
      "ru": "<b>Вкус</b> супа стал лучше, с тех пор как мы начали использовать смеси специй."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_007",
    "cat": "k4",
    "term": {
      "de": "probieren",
      "en": "to try, taste",
      "uk": "пробувати",
      "ru": "пробовать"
    },
    "short": {
      "de": "Etwas zum ersten Mal essen oder trinken, um es kennenzulernen.",
      "en": "To eat or drink something for the first time to get to know it.",
      "uk": "Скуштувати щось уперше, щоб пізнати смак.",
      "ru": "Попробовать что-то в первый раз, чтобы узнать вкус."
    },
    "def": {
      "de": "Wir haben beim <g>Länderabend</g> viele neue Gerichte <b>probiert</b>.",
      "en": "We <b>tried</b> many new dishes at the international evening.",
      "uk": "Ми <b>спробували</b> багато нових страв на вечорі культур.",
      "ru": "Мы <b>попробовали</b> много новых блюд на вечере культур."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_008",
    "cat": "k4",
    "term": {
      "de": "die Umfrage",
      "en": "survey",
      "uk": "опитування",
      "ru": "опрос"
    },
    "short": {
      "de": "Wenn man vielen Menschen die gleichen Fragen stellt, um ihre Meinung zu erfahren.",
      "en": "When you ask many people the same questions to find out their opinion.",
      "uk": "Коли багатьом людям задають одні й ті самі питання, щоб дізнатися їхню думку.",
      "ru": "Когда многим людям задают одни и те же вопросы, чтобы узнать их мнение."
    },
    "def": {
      "de": "Die Ergebnisse <g>von der</g> <b>Umfrage</b> waren wirklich überraschend.",
      "en": "The results <g>of the</g> <b>survey</b> were really surprising.",
      "uk": "Результати <b>опитування</b> були справді дивовижними.",
      "ru": "Результаты <b>опроса</b> были действительно удивительными."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_009",
    "cat": "k4",
    "term": {
      "de": "gesund / ungesund",
      "en": "healthy / unhealthy",
      "uk": "здоровий / нездоровий",
      "ru": "здоровый / нездоровый"
    },
    "short": {
      "de": "Gut oder schlecht für den Körper und das Wohlbefinden.",
      "en": "Good or bad for the body and well-being.",
      "uk": "Добре чи погано для тіла та самопочуття.",
      "ru": "Хорошо или плохо для тела и самочувствия."
    },
    "def": {
      "de": "Die Ernährung <g>von den</g> meisten Jugendlichen ist leider nicht sehr <b>gesund</b>.",
      "en": "The diet <g>of</g> most teenagers is unfortunately not very <b>healthy</b>.",
      "uk": "Харчування більшості підлітків, на жаль, не дуже <b>здорове</b>.",
      "ru": "Питание большинства подростков, к сожалению, не очень <b>здоровое</b>."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_010",
    "cat": "k4",
    "term": {
      "de": "der Snack",
      "en": "snack",
      "uk": "снек, легка закуска",
      "ru": "снек, лёгкая закуска"
    },
    "short": {
      "de": "Eine kleine Mahlzeit zwischen den Hauptmahlzeiten.",
      "en": "A small meal between main meals.",
      "uk": "Невеликий прийом їжі між основними прийомами їжі.",
      "ru": "Небольшой приём еды между основными приёмами еды."
    },
    "def": {
      "de": "Der Preis <g>von dem</g> <b>Snack</b> am Bahnhof war viel zu hoch.",
      "en": "The price <g>of the</g> <b>snack</b> at the station was much too high.",
      "uk": "Ціна <b>снеку</b> на вокзалі була занадто високою.",
      "ru": "Цена <b>снека</b> на вокзале была слишком высокой."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_011",
    "cat": "k4",
    "term": {
      "de": "die Portion",
      "en": "portion",
      "uk": "порція",
      "ru": "порция"
    },
    "short": {
      "de": "Die Menge Essen, die man auf einmal isst.",
      "en": "The amount of food you eat at once.",
      "uk": "Кількість їжі, яку ти їси за один раз.",
      "ru": "Количество еды, которое ты ешь за один раз."
    },
    "def": {
      "de": "Die Größe <g>von der</g> <b>Portion</b> war für mich viel zu groß.",
      "en": "The size <g>of the</g> <b>portion</b> was much too big for me.",
      "uk": "Розмір <b>порції</b> був для мене занадто великим.",
      "ru": "Размер <b>порции</b> был для меня слишком большим."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_012",
    "cat": "k4",
    "term": {
      "de": "verändern",
      "en": "to change",
      "uk": "змінювати",
      "ru": "изменять"
    },
    "short": {
      "de": "Anders machen als vorher.",
      "en": "To make something different from before.",
      "uk": "Робити щось інакшим, ніж раніше.",
      "ru": "Делать что-то иным, чем раньше."
    },
    "def": {
      "de": "Wir haben unsere Essgewohnheiten stark <b>verändert</b>, <g>deswegen</g> fühlen wir uns viel fitter.",
      "en": "We have <b>changed</b> our eating habits a lot, <g>that's why</g> we feel much fitter.",
      "uk": "Ми сильно <b>змінили</b> свої харчові звички, <g>тому</g> почуваємося набагато краще.",
      "ru": "Мы сильно <b>изменили</b> свои привычки питания, <g>поэтому</g> чувствуем себя намного лучше."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_013",
    "cat": "k4",
    "term": {
      "de": "regelmäßig",
      "en": "regularly",
      "uk": "регулярно",
      "ru": "регулярно"
    },
    "short": {
      "de": "Immer wieder zur gleichen Zeit oder auf die gleiche Art.",
      "en": "Again and again at the same time or in the same way.",
      "uk": "Знову і знову в той самий час чи так само.",
      "ru": "Снова и снова в то же время или так же."
    },
    "def": {
      "de": "Er isst nicht <b>regelmäßig</b>, <g>trotzdem</g> ist er sehr gesund.",
      "en": "He doesn't eat <b>regularly</b>; <g>nevertheless</g>, he is very healthy.",
      "uk": "Він не їсть <b>регулярно</b>, <g>проте</g> він дуже здоровий.",
      "ru": "Он не ест <b>регулярно</b>, <g>однако</g> он очень здоров."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_014",
    "cat": "k4",
    "term": {
      "de": "die Frischhaltedose",
      "en": "food storage container",
      "uk": "контейнер для зберігання їжі",
      "ru": "контейнер для хранения еды"
    },
    "short": {
      "de": "Ein Behälter, in dem man Essen frisch aufbewahrt.",
      "en": "A container in which you keep food fresh.",
      "uk": "Контейнер, у якому зберігають їжу свіжою.",
      "ru": "Контейнер, в котором хранят еду свежей."
    },
    "def": {
      "de": "Der Deckel <g>von der</g> <b>Frischhaltedose</b> ist leider kaputt.",
      "en": "The lid <g>of the</g> <b>food storage container</b> is unfortunately broken.",
      "uk": "Кришка <b>контейнера для зберігання їжі</b>, на жаль, зламана.",
      "ru": "Крышка <b>контейнера для хранения еды</b>, к сожалению, сломана."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_015",
    "cat": "k4",
    "term": {
      "de": "abwechslungsreich",
      "en": "varied",
      "uk": "різноманітний",
      "ru": "разнообразный"
    },
    "short": {
      "de": "Mit vielen verschiedenen Dingen, nicht immer gleich.",
      "en": "With many different things, not always the same.",
      "uk": "З багатьма різними речами, не завжди однаково.",
      "ru": "С множеством разных вещей, не всегда одинаково."
    },
    "def": {
      "de": "Der Speiseplan <g>von der</g> Kantine ist diese Woche sehr <b>abwechslungsreich</b>.",
      "en": "The menu <g>of the</g> canteen is very <b>varied</b> this week.",
      "uk": "Меню їдальні цього тижня дуже <b>різноманітне</b>.",
      "ru": "Меню столовой на этой неделе очень <b>разнообразное</b>."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k5_001",
    "cat": "k5",
    "term": {
      "de": "der Unterschied",
      "en": "difference",
      "uk": "відмінність",
      "ru": "различие"
    },
    "short": {
      "de": "Wie zwei Dinge oder Personen nicht gleich sind.",
      "en": "How two things or people are not the same.",
      "uk": "Як дві речі чи особи не є однаковими.",
      "ru": "Как две вещи или человека не одинаковы."
    },
    "def": {
      "de": "Ich sehe die kulturellen <b>Unterschiede</b> viel klarer, <g>seit</g> ich hier lebe.",
      "en": "I see the cultural <b>differences</b> much more clearly <g>since</g> I have been living here.",
      "uk": "Я бачу культурні <b>відмінності</b> набагато чіткіше, <g>відколи</g> живу тут.",
      "ru": "Я вижу культурные <b>различия</b> намного яснее, <g>с тех пор как</g> живу здесь."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_002",
    "cat": "k5",
    "term": {
      "de": "überraschen",
      "en": "to surprise",
      "uk": "здивувати",
      "ru": "удивлять"
    },
    "short": {
      "de": "Etwas Unerwartetes erleben, das man vorher nicht wusste.",
      "en": "To experience something unexpected that you didn't know before.",
      "uk": "Переживати щось несподіване, про що раніше не знав.",
      "ru": "Переживать что-то неожиданное, о чём раньше не знал."
    },
    "def": {
      "de": "Vieles hat mich <b>überrascht</b>, <g>seitdem</g> ich in Deutschland arbeite.",
      "en": "Many things have <b>surprised</b> me <g>since</g> I have been working in Germany.",
      "uk": "Багато що мене <b>здивувало</b>, <g>відколи</g> я працюю в Німеччині.",
      "ru": "Многое меня <b>удивило</b>, <g>с тех пор как</g> я работаю в Германии."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_003",
    "cat": "k5",
    "term": {
      "de": "sich ärgern",
      "en": "to get annoyed",
      "uk": "сердитися, дратуватися",
      "ru": "сердиться, раздражаться"
    },
    "short": {
      "de": "Ein schlechtes Gefühl haben, weil etwas nicht so ist, wie man möchte.",
      "en": "To feel bad because something is not the way you want it.",
      "uk": "Мати погане почуття, бо щось не так, як хочеться.",
      "ru": "Испытывать плохое чувство, потому что что-то не так, как хочется."
    },
    "def": {
      "de": "<g>Worüber</g> hast du <b>dich</b> gestern so <b>geärgert</b>?",
      "en": "What <g>were</g> you so <b>annoyed</b> <g>about</g> yesterday?",
      "uk": "<g>Через що</g> ти вчора так <b>розсердився</b>?",
      "ru": "<g>Из-за чего</g> ты вчера так <b>разозлился</b>?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_004",
    "cat": "k5",
    "term": {
      "de": "beruhigen",
      "en": "to calm (someone) down",
      "uk": "заспокоювати",
      "ru": "успокаивать"
    },
    "short": {
      "de": "Jemandem helfen, ruhiger und weniger nervös zu werden.",
      "en": "To help someone become calmer and less nervous.",
      "uk": "Допомогти комусь стати спокійнішим і менш нервовим.",
      "ru": "Помочь кому-то стать спокойнее и менее нервным."
    },
    "def": {
      "de": "<g>Darüber</g> musst du dir keine Sorgen machen — ich kann dich <b>beruhigen</b>: alles wird gut.",
      "en": "You don't need to worry <g>about that</g> — I can <b>reassure</b> you: everything will be fine.",
      "uk": "<g>Про це</g> тобі не варто турбуватися — я можу тебе <b>заспокоїти</b>: усе буде добре.",
      "ru": "<g>Об этом</g> тебе не стоит беспокоиться — я могу тебя <b>успокоить</b>: всё будет хорошо."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_005",
    "cat": "k5",
    "term": {
      "de": "das Tabu",
      "en": "taboo",
      "uk": "табу",
      "ru": "табу"
    },
    "short": {
      "de": "Ein Thema, über das man in einer Kultur nicht offen spricht.",
      "en": "A topic that people in a culture do not talk about openly.",
      "uk": "Тема, про яку в певній культурі не говорять відкрито.",
      "ru": "Тема, о которой в определённой культуре не говорят открыто."
    },
    "def": {
      "de": "Über Geld zu sprechen ist bei uns ein <b>Tabu</b>, <g>darüber</g> reden wir fast nie.",
      "en": "Talking about money is a <b>taboo</b> for us; we almost never talk <g>about it</g>.",
      "uk": "Говорити про гроші в нас <b>табу</b>, <g>про це</g> ми майже ніколи не говоримо.",
      "ru": "Говорить о деньгах у нас <b>табу</b>, <g>об этом</g> мы почти никогда не говорим."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_006",
    "cat": "k5",
    "term": {
      "de": "der Smalltalk",
      "en": "small talk",
      "uk": "невимушена розмова",
      "ru": "непринуждённая беседа"
    },
    "short": {
      "de": "Ein kurzes, freundliches Gespräch über ein einfaches Thema.",
      "en": "A short, friendly conversation about a simple topic.",
      "uk": "Коротка, приязна розмова на просту тему.",
      "ru": "Короткий, приятный разговор на простую тему."
    },
    "def": {
      "de": "Beim <b>Smalltalk</b> spricht man meist über das Wetter — <g>darüber</g> kann man immer reden.",
      "en": "In <b>small talk</b>, people usually talk about the weather — you can always talk <g>about that</g>.",
      "uk": "У <b>невимушеній розмові</b> зазвичай говорять про погоду — <g>про це</g> завжди можна говорити.",
      "ru": "В <b>непринуждённой беседе</b> обычно говорят о погоде — <g>об этом</g> всегда можно говорить."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_007",
    "cat": "k5",
    "term": {
      "de": "die Sprachbiografie",
      "en": "language biography",
      "uk": "мовна біографія",
      "ru": "языковая биография"
    },
    "short": {
      "de": "Die persönliche Geschichte, wie man eine oder mehrere Sprachen gelernt hat.",
      "en": "The personal story of how you learned one or more languages.",
      "uk": "Особиста історія того, як ти вивчив одну чи кілька мов.",
      "ru": "Личная история того, как ты выучил один или несколько языков."
    },
    "def": {
      "de": "<g>Worüber</g> handelt deine <b>Sprachbiografie</b> eigentlich?",
      "en": "What is your <b>language biography</b> actually about?",
      "uk": "<g>Про що</g> взагалі твоя <b>мовна біографія</b>?",
      "ru": "<g>О чём</g> вообще твоя <b>языковая биография</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_008",
    "cat": "k5",
    "term": {
      "de": "das Missverständnis",
      "en": "misunderstanding",
      "uk": "непорозуміння",
      "ru": "недопонимание"
    },
    "short": {
      "de": "Wenn zwei Personen etwas anders verstehen und das ein Problem macht.",
      "en": "When two people understand something differently and it causes a problem.",
      "uk": "Коли двоє людей розуміють щось по-різному, і це створює проблему.",
      "ru": "Когда два человека понимают что-то по-разному, и это создаёт проблему."
    },
    "def": {
      "de": "Es gab ein großes <b>Missverständnis</b>, aber <g>darüber</g> haben wir inzwischen gesprochen.",
      "en": "There was a big <b>misunderstanding</b>, but we have talked <g>about it</g> in the meantime.",
      "uk": "Було велике <b>непорозуміння</b>, але <g>про це</g> ми вже поговорили.",
      "ru": "Было большое <b>недопонимание</b>, но <g>об этом</g> мы уже поговорили."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_009",
    "cat": "k5",
    "term": {
      "de": "die Erfahrung",
      "en": "experience",
      "uk": "досвід",
      "ru": "опыт"
    },
    "short": {
      "de": "Das, was man im Leben schon erlebt und gelernt hat.",
      "en": "What you have already experienced and learned in life.",
      "uk": "Те, що ти вже пережив і чого навчився в житті.",
      "ru": "То, что ты уже пережил и чему научился в жизни."
    },
    "def": {
      "de": "Ich habe gewartet, <g>bis</g> ich genug <b>Erfahrung</b> für den neuen Job hatte.",
      "en": "I waited <g>until</g> I had enough <b>experience</b> for the new job.",
      "uk": "Я чекав, <g>доки</g> не набрав достатньо <b>досвіду</b> для нової роботи.",
      "ru": "Я ждал, <g>пока</g> не набрал достаточно <b>опыта</b> для новой работы."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_010",
    "cat": "k5",
    "term": {
      "de": "der Alltag",
      "en": "everyday life",
      "uk": "повсякдення",
      "ru": "повседневная жизнь"
    },
    "short": {
      "de": "Das normale Leben mit den gewöhnlichen Aufgaben jeden Tag.",
      "en": "Normal life with the usual tasks every day.",
      "uk": "Звичайне життя зі звичайними справами щодня.",
      "ru": "Обычная жизнь с обычными делами каждый день."
    },
    "def": {
      "de": "<g>Das Einkaufen</g> und Kochen gehören fest zu meinem <b>Alltag</b>.",
      "en": "Shopping and cooking are a firm part of my <b>everyday life</b>.",
      "uk": "Покупки та приготування їжі — тверда частина мого <b>повсякдення</b>.",
      "ru": "Покупки и готовка — твёрдая часть моей <b>повседневной жизни</b>."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_011",
    "cat": "k5",
    "term": {
      "de": "sich integrieren",
      "en": "to integrate",
      "uk": "інтегруватися",
      "ru": "интегрироваться"
    },
    "short": {
      "de": "Ein Teil einer neuen Gesellschaft oder Gruppe werden.",
      "en": "To become part of a new society or group.",
      "uk": "Стати частиною нового суспільства чи групи.",
      "ru": "Стать частью нового общества или группы."
    },
    "def": {
      "de": "Viele Sprachkurse helfen den Menschen, sich schneller zu <b>integrieren</b>; <g>das Lernen</g> der Sprache ist dabei der wichtigste Schritt.",
      "en": "Many language courses help people <b>integrate</b> faster; learning the language is the most important step.",
      "uk": "Багато мовних курсів допомагають людям швидше <b>інтегруватися</b>; вивчення мови є найважливішим кроком.",
      "ru": "Многие языковые курсы помогают людям быстрее <b>интегрироваться</b>; изучение языка является самым важным шагом."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_012",
    "cat": "k5",
    "term": {
      "de": "die Muttersprache",
      "en": "native language",
      "uk": "рідна мова",
      "ru": "родной язык"
    },
    "short": {
      "de": "Die erste Sprache, die man als Kind gelernt hat.",
      "en": "The first language you learned as a child.",
      "uk": "Перша мова, яку ти вивчив у дитинстві.",
      "ru": "Первый язык, который ты выучил в детстве."
    },
    "def": {
      "de": "<g>Mit wem</g> sprichst du eigentlich deine <b>Muttersprache</b>?",
      "en": "<g>Who</g> do you actually speak your <b>native language</b> with?",
      "uk": "<g>З ким</g> ти взагалі говориш своєю <b>рідною мовою</b>?",
      "ru": "<g>С кем</g> ты вообще говоришь на своём <b>родном языке</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_013",
    "cat": "k5",
    "term": {
      "de": "auffallen",
      "en": "to be noticeable, stand out",
      "uk": "виділятися, впадати в очі",
      "ru": "выделяться, бросаться в глаза"
    },
    "short": {
      "de": "Bemerkt werden, weil etwas anders oder besonders ist.",
      "en": "To be noticed because something is different or special.",
      "uk": "Бути помітним, бо щось відрізняється чи особливе.",
      "ru": "Быть заметным, потому что что-то отличается или особенное."
    },
    "def": {
      "de": "Der Fehler ist niemandem <b>aufgefallen</b>, <g>bis</g> der Chef die Liste noch einmal gelesen hat.",
      "en": "Nobody <b>noticed</b> the mistake <g>until</g> the boss read the list again.",
      "uk": "Помилку ніхто не <b>помітив</b>, <g>доки</g> керівник ще раз не прочитав список.",
      "ru": "Ошибку никто не <b>заметил</b>, <g>пока</g> начальник снова не прочитал список."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_014",
    "cat": "k5",
    "term": {
      "de": "die Höflichkeit",
      "en": "politeness",
      "uk": "вічливість",
      "ru": "вежливость"
    },
    "short": {
      "de": "Ein freundliches und respektvolles Verhalten gegenüber anderen Menschen.",
      "en": "Friendly and respectful behaviour towards other people.",
      "uk": "Приязна і шаноблива поведінка стосовно інших людей.",
      "ru": "Приятное и уважительное поведение по отношению к другим людям."
    },
    "def": {
      "de": "In manchen Ländern zeigt man <b>Höflichkeit</b> anders — <g>darüber</g> haben wir im Kurs gesprochen.",
      "en": "In some countries, people show <b>politeness</b> differently — we talked <g>about that</g> in the course.",
      "uk": "У деяких країнах <b>вічливість</b> виявляють по-іншому — <g>про це</g> ми говорили на курсі.",
      "ru": "В некоторых странах <b>вежливость</b> проявляют по-другому — <g>об этом</g> мы говорили на курсе."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_015",
    "cat": "k5",
    "term": {
      "de": "sich gewöhnen",
      "en": "to get used to",
      "uk": "звикати",
      "ru": "привыкать"
    },
    "short": {
      "de": "Nach einiger Zeit etwas Neues normal finden.",
      "en": "After some time, to find something new normal.",
      "uk": "Через деякий час почати вважати щось нове звичним.",
      "ru": "Через некоторое время начать считать что-то новое обычным."
    },
    "def": {
      "de": "Am Anfang war das Wetter hier komisch für mich, aber <g>daran</g> habe ich <b>mich</b> schnell <b>gewöhnt</b>.",
      "en": "At first the weather here was strange for me, but I quickly <b>got used</b> <g>to it</g>.",
      "uk": "Спочатку погода тут була для мене дивною, але <g>до цього</g> я швидко <b>звик</b>.",
      "ru": "Сначала погода здесь была для меня странной, но <g>к этому</g> я быстро <b>привык</b>."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_001",
    "cat": "k6",
    "term": {
      "de": "die Notaufnahme",
      "en": "emergency room",
      "uk": "приймальне відділення",
      "ru": "приёмный покой"
    },
    "short": {
      "de": "Die Abteilung im Krankenhaus für plötzliche, schwere Probleme.",
      "en": "The department in a hospital for sudden, serious problems.",
      "uk": "Відділення в лікарні для раптових, серйозних проблем.",
      "ru": "Отделение в больнице для внезапных, серьёзных проблем."
    },
    "def": {
      "de": "Er musste sofort in die <b>Notaufnahme</b>, und <g>darüber</g> haben wir uns große Sorgen gemacht.",
      "en": "He had to go to the <b>emergency room</b> immediately, and we worried a lot <g>about that</g>.",
      "uk": "Йому терміново довелося йти в <b>приймальне відділення</b>, і <g>про це</g> ми дуже турбувалися.",
      "ru": "Ему срочно пришлось идти в <b>приёмный покой</b>, и <g>об этом</g> мы очень беспокоились."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_002",
    "cat": "k6",
    "term": {
      "de": "der Notfall",
      "en": "emergency",
      "uk": "надзвичайна ситуація",
      "ru": "экстренный случай"
    },
    "short": {
      "de": "Eine plötzliche, gefährliche Situation, in der man schnell helfen muss.",
      "en": "A sudden, dangerous situation where you have to help quickly.",
      "uk": "Раптова, небезпечна ситуація, у якій потрібно швидко допомогти.",
      "ru": "Внезапная, опасная ситуация, в которой нужно быстро помочь."
    },
    "def": {
      "de": "Bei einem <b>Notfall</b> muss man <g>nicht nur</g> ruhig bleiben, <g>sondern auch</g> schnell die 112 anrufen.",
      "en": "In an <b>emergency</b>, you must <g>not only</g> stay calm <g>but also</g> call 112 quickly.",
      "uk": "У випадку <b>надзвичайної ситуації</b> потрібно <g>не тільки</g> залишатися спокійним, <g>а й</g> швидко зателефонувати на 112.",
      "ru": "В <b>экстренной ситуации</b> нужно <g>не только</g> оставаться спокойным, <g>но и</g> быстро позвонить по номеру 112."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_003",
    "cat": "k6",
    "term": {
      "de": "der Krankenwagen",
      "en": "ambulance",
      "uk": "швидка допомога (машина)",
      "ru": "скорая помощь (машина)"
    },
    "short": {
      "de": "Ein besonderes Auto, das kranke oder verletzte Menschen ins Krankenhaus bringt.",
      "en": "A special vehicle that takes sick or injured people to the hospital.",
      "uk": "Особливий автомобіль, який відвозить хворих чи травмованих людей до лікарні.",
      "ru": "Особый автомобиль, который отвозит больных или травмированных людей в больницу."
    },
    "def": {
      "de": "Der <b>Krankenwagen</b> kam sehr schnell, <g>darüber</g> waren wir alle sehr erleichtert.",
      "en": "The <b>ambulance</b> arrived very quickly, and we were all very relieved <g>about that</g>.",
      "uk": "<b>Швидка допомога</b> приїхала дуже швидко, і <g>з цього</g> ми всі дуже зраділи.",
      "ru": "<b>Скорая помощь</b> приехала очень быстро, и <g>этому</g> мы все очень обрадовались."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_004",
    "cat": "k6",
    "term": {
      "de": "der Verband",
      "en": "bandage",
      "uk": "бинт, повʼязка",
      "ru": "бинт, повязка"
    },
    "short": {
      "de": "Ein Stück Stoff, das man um eine Wunde legt.",
      "en": "A piece of cloth that you put around a wound.",
      "uk": "Шматок тканини, який накладають на рану.",
      "ru": "Кусок ткани, который накладывают на рану."
    },
    "def": {
      "de": "Die Schwester legte einen <b>Verband</b> an, <g>um</g> die Wunde <g>zu</g> schützen.",
      "en": "The nurse put on a <b>bandage</b> <g>in order to</g> protect the wound.",
      "uk": "Медсестра наклала <b>повʼязку</b>, <g>щоб</g> захистити рану.",
      "ru": "Медсестра наложила <b>повязку</b>, <g>чтобы</g> защитить рану."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_005",
    "cat": "k6",
    "term": {
      "de": "die Untersuchung",
      "en": "examination",
      "uk": "обстеження",
      "ru": "обследование"
    },
    "short": {
      "de": "Wenn ein Arzt genau prüft, was mit dem Körper los ist.",
      "en": "When a doctor carefully checks what is wrong with the body.",
      "uk": "Коли лікар уважно перевіряє, що з тілом.",
      "ru": "Когда врач внимательно проверяет, что с телом."
    },
    "def": {
      "de": "Die <b>Untersuchung</b> <g>wird</g> morgen früh <g>stattfinden</g>.",
      "en": "The <b>examination</b> <g>will take place</g> tomorrow morning.",
      "uk": "<b>Обстеження</b> <g>відбудеться</g> завтра вранці.",
      "ru": "<b>Обследование</b> <g>будет проходить</g> завтра утром."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_006",
    "cat": "k6",
    "term": {
      "de": "operieren",
      "en": "to operate (surgically)",
      "uk": "оперувати",
      "ru": "оперировать"
    },
    "short": {
      "de": "Einen Körperteil im Krankenhaus mit einer Operation behandeln.",
      "en": "To treat a body part in the hospital with an operation.",
      "uk": "Лікувати частину тіла в лікарні за допомогою операції.",
      "ru": "Лечить часть тела в больнице с помощью операции."
    },
    "def": {
      "de": "Die Ärztin muss ihn heute noch <b>operieren</b>, <g>damit</g> sich der Zustand nicht verschlechtert.",
      "en": "The doctor has to <b>operate</b> on him today <g>so that</g> his condition doesn't get worse.",
      "uk": "Лікарка має <b>прооперувати</b> його ще сьогодні, <g>щоб</g> стан не погіршився.",
      "ru": "Врач должна <b>прооперировать</b> его ещё сегодня, <g>чтобы</g> состояние не ухудшилось."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_007",
    "cat": "k6",
    "term": {
      "de": "die Behandlung",
      "en": "treatment",
      "uk": "лікування",
      "ru": "лечение"
    },
    "short": {
      "de": "Alles, was ein Arzt macht, um eine Krankheit zu heilen.",
      "en": "Everything a doctor does to cure an illness.",
      "uk": "Усе, що робить лікар, щоб вилікувати хворобу.",
      "ru": "Всё, что делает врач, чтобы вылечить болезнь."
    },
    "def": {
      "de": "Die <b>Behandlung</b> war erfolgreich, und die <g>Gesundheit</g> des Patienten hat sich schnell verbessert.",
      "en": "The <b>treatment</b> was successful, and the patient's health improved quickly.",
      "uk": "<b>Лікування</b> було успішним, і здоровʼя пацієнта швидко покращилося.",
      "ru": "<b>Лечение</b> было успешным, и здоровье пациента быстро улучшилось."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_008",
    "cat": "k6",
    "term": {
      "de": "die Station",
      "en": "ward",
      "uk": "відділення (лікарні)",
      "ru": "отделение (больницы)"
    },
    "short": {
      "de": "Ein Bereich im Krankenhaus für eine bestimmte Art von Patienten.",
      "en": "An area in a hospital for a certain type of patient.",
      "uk": "Відділення в лікарні для певного типу пацієнтів.",
      "ru": "Отделение в больнице для определённого типа пациентов."
    },
    "def": {
      "de": "Der Patient <g>wird</g> morgen auf eine andere <b>Station</b> <g>verlegt</g>.",
      "en": "The patient <g>will be</g> <g>transferred</g> to another <b>ward</b> tomorrow.",
      "uk": "Пацієнта завтра <g>переведуть</g> до іншого <b>відділення</b>.",
      "ru": "Пациента завтра <g>переведут</g> в другое <b>отделение</b>."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_009",
    "cat": "k6",
    "term": {
      "de": "sich verletzen",
      "en": "to injure oneself",
      "uk": "травмуватися",
      "ru": "травмироваться"
    },
    "short": {
      "de": "Sich beim Unfall oder aus Versehen selbst wehtun.",
      "en": "To hurt yourself accidentally or in an accident.",
      "uk": "Завдати собі шкоди випадково чи під час аварії.",
      "ru": "Причинить себе вред случайно или во время аварии."
    },
    "def": {
      "de": "Er hat sich beim Sturz <g>nicht nur</g> am Arm <g>sondern auch</g> am Kopf <b>verletzt</b>.",
      "en": "During the fall, he <g>not only</g> <b>hurt</b> his arm <g>but also</g> his head.",
      "uk": "Під час падіння він <g>не тільки</g> <b>травмував</b> руку, <g>а й</g> голову.",
      "ru": "Во время падения он <g>не только</g> <b>травмировал</b> руку, <g>но и</g> голову."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_010",
    "cat": "k6",
    "term": {
      "de": "das Formular",
      "en": "form",
      "uk": "формуляр, бланк",
      "ru": "формуляр, бланк"
    },
    "short": {
      "de": "Ein Papier mit Feldern, die man ausfüllen muss.",
      "en": "A piece of paper with fields that you have to fill in.",
      "uk": "Папір з полями, які потрібно заповнити.",
      "ru": "Бумага с полями, которые нужно заполнить."
    },
    "def": {
      "de": "Sie füllte das <b>Formular</b> sehr sorgfältig aus, <g>um</g> keine Fehler <g>zu</g> machen.",
      "en": "She filled in the <b>form</b> very carefully <g>in order not to</g> make any mistakes.",
      "uk": "Вона дуже уважно заповнила <b>формуляр</b>, <g>щоб</g> не зробити помилок.",
      "ru": "Она очень внимательно заполнила <b>формуляр</b>, <g>чтобы</g> не сделать ошибок."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_011",
    "cat": "k6",
    "term": {
      "de": "die Prognose",
      "en": "prognosis",
      "uk": "прогноз",
      "ru": "прогноз"
    },
    "short": {
      "de": "Was ein Arzt über die Zukunft einer Krankheit sagt.",
      "en": "What a doctor says about the future course of an illness.",
      "uk": "Те, що лікар говорить про майбутнє перебігу хвороби.",
      "ru": "То, что врач говорит о будущем течении болезни."
    },
    "def": {
      "de": "Der Arzt erklärte die <b>Prognose</b> sehr genau, <g>damit</g> die Familie alles versteht.",
      "en": "The doctor explained the <b>prognosis</b> very precisely <g>so that</g> the family understands everything.",
      "uk": "Лікар дуже детально пояснив <b>прогноз</b>, <g>щоб</g> родина все зрозуміла.",
      "ru": "Врач очень подробно объяснил <b>прогноз</b>, <g>чтобы</g> семья всё поняла."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_012",
    "cat": "k6",
    "term": {
      "de": "das Medikament",
      "en": "medication",
      "uk": "медикамент, ліки",
      "ru": "медикамент, лекарство"
    },
    "short": {
      "de": "Etwas, das man gegen eine Krankheit nimmt, um gesund zu werden.",
      "en": "Something you take against an illness to become healthy.",
      "uk": "Те, що приймають проти хвороби, щоб стати здоровим.",
      "ru": "То, что принимают против болезни, чтобы стать здоровым."
    },
    "def": {
      "de": "Dieses <b>Medikament</b> hilft schnell gegen die <g>Müdigkeit</g> nach der Operation.",
      "en": "This <b>medication</b> quickly helps against the tiredness after the operation.",
      "uk": "Цей <b>медикамент</b> швидко допомагає проти втоми після операції.",
      "ru": "Этот <b>медикамент</b> быстро помогает против усталости после операции."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_013",
    "cat": "k6",
    "term": {
      "de": "der Unfall",
      "en": "accident",
      "uk": "аварія, нещасний випадок",
      "ru": "авария, несчастный случай"
    },
    "short": {
      "de": "Ein plötzliches, unerwartetes Ereignis, bei dem jemand verletzt wird.",
      "en": "A sudden, unexpected event in which someone gets hurt.",
      "uk": "Раптова, несподівана подія, під час якої хтось травмується.",
      "ru": "Внезапное, неожиданное событие, во время которого кто-то получает травму."
    },
    "def": {
      "de": "Bei dem <b>Unfall</b> wurden <g>nicht nur</g> die Fahrer <g>sondern auch</g> zwei Fußgänger verletzt.",
      "en": "In the <b>accident</b>, <g>not only</g> the drivers <g>but also</g> two pedestrians were injured.",
      "uk": "У <b>аварії</b> постраждали <g>не тільки</g> водії, <g>а й</g> двоє пішоходів.",
      "ru": "В <b>аварии</b> пострадали <g>не только</g> водители, <g>но и</g> двое пешеходов."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_014",
    "cat": "k6",
    "term": {
      "de": "der Krankenpfleger / die Krankenpflegerin",
      "en": "nurse",
      "uk": "медбрат / медсестра",
      "ru": "медбрат / медсестра"
    },
    "short": {
      "de": "Eine Person, die im Krankenhaus Patienten pflegt und ihnen hilft.",
      "en": "A person who takes care of patients in a hospital and helps them.",
      "uk": "Людина, яка в лікарні доглядає пацієнтів і допомагає їм.",
      "ru": "Человек, который в больнице ухаживает за пациентами и помогает им."
    },
    "def": {
      "de": "Die <b>Krankenpflegerin</b> zeigte trotz der Müdigkeit große <g>Freundlichkeit</g> zu jedem Patienten.",
      "en": "Despite being tired, the <b>nurse</b> showed great kindness to every patient.",
      "uk": "<b>Медсестра</b>, незважаючи на втому, виявляла велику доброзичливість до кожного пацієнта.",
      "ru": "<b>Медсестра</b>, несмотря на усталость, проявляла большую доброжелательность к каждому пациенту."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_015",
    "cat": "k6",
    "term": {
      "de": "die Geburt",
      "en": "birth",
      "uk": "народження, пологи",
      "ru": "роды, рождение"
    },
    "short": {
      "de": "Der Moment, in dem ein Baby zur Welt kommt.",
      "en": "The moment when a baby comes into the world.",
      "uk": "Момент, коли дитина зʼявляється на світ.",
      "ru": "Момент, когда ребёнок появляется на свет."
    },
    "def": {
      "de": "Nach der <b>Geburt</b> war die ganze Familie voller <g>Dankbarkeit</g> und Freude.",
      "en": "After the <b>birth</b>, the whole family was full of gratitude and joy.",
      "uk": "Після <b>народження</b> вся родина була сповнена вдячності й радості.",
      "ru": "После <b>рождения</b> вся семья была полна благодарности и радости."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_001",
    "cat": "k7",
    "term": {
      "de": "die Umwelt",
      "en": "environment",
      "uk": "довкілля",
      "ru": "окружающая среда"
    },
    "short": {
      "de": "Die Natur und alles um uns herum: Luft, Wasser, Pflanzen und Tiere.",
      "en": "Nature and everything around us: air, water, plants and animals.",
      "uk": "Природа і все навколо нас: повітря, вода, рослини й тварини.",
      "ru": "Природа и всё вокруг нас: воздух, вода, растения и животные."
    },
    "def": {
      "de": "Der Schutz der <b>Umwelt</b> braucht viel <g>Aufmerksamkeit</g> von uns allen.",
      "en": "Protecting the <b>environment</b> requires a lot of attention from all of us.",
      "uk": "Захист <b>довкілля</b> потребує великої уваги від усіх нас.",
      "ru": "Защита <b>окружающей среды</b> требует большого внимания от всех нас."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_002",
    "cat": "k7",
    "term": {
      "de": "die Klimakrise",
      "en": "climate crisis",
      "uk": "кліматична криза",
      "ru": "климатический кризис"
    },
    "short": {
      "de": "Das große, gefährliche Problem, dass sich das Klima der Erde zu schnell verändert.",
      "en": "The big, dangerous problem that the earth's climate is changing too fast.",
      "uk": "Велика, небезпечна проблема, що клімат Землі змінюється надто швидко.",
      "ru": "Большая, опасная проблема, что климат Земли меняется слишком быстро."
    },
    "def": {
      "de": "Über die <b>Klimakrise</b> <g>wird</g> heute in fast jeder Zeitung <g>berichtet</g>.",
      "en": "The <b>climate crisis</b> <g>is</g> <g>reported on</g> in almost every newspaper today.",
      "uk": "Про <b>кліматичну кризу</b> сьогодні пишуть майже в кожній газеті.",
      "ru": "О <b>климатическом кризисе</b> сегодня пишут почти в каждой газете."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_003",
    "cat": "k7",
    "term": {
      "de": "der Abfall",
      "en": "waste",
      "uk": "відходи",
      "ru": "отходы"
    },
    "short": {
      "de": "Dinge, die man nicht mehr braucht und wegwirft.",
      "en": "Things you no longer need and throw away.",
      "uk": "Речі, які більше не потрібні і які викидають.",
      "ru": "Вещи, которые больше не нужны и которые выбрасывают."
    },
    "def": {
      "de": "Die richtige Trennung von <b>Abfall</b> zeigt viel <g>Verantwortlichkeit</g> für die Umwelt.",
      "en": "Sorting <b>waste</b> correctly shows a lot of responsibility for the environment.",
      "uk": "Правильне сортування <b>відходів</b> демонструє велику відповідальність за довкілля.",
      "ru": "Правильная сортировка <b>отходов</b> демонстрирует большую ответственность за окружающую среду."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_004",
    "cat": "k7",
    "term": {
      "de": "trennen",
      "en": "to sort, separate (waste)",
      "uk": "сортувати (сміття)",
      "ru": "сортировать (мусор)"
    },
    "short": {
      "de": "Abfall in verschiedene Gruppen sortieren, zum Beispiel Papier und Glas.",
      "en": "To sort waste into different groups, for example paper and glass.",
      "uk": "Сортувати сміття на різні групи, наприклад папір і скло.",
      "ru": "Сортировать мусор на разные группы, например бумагу и стекло."
    },
    "def": {
      "de": "In Deutschland <g>wird</g> der Abfall sehr genau <g><b>getrennt</b></g>.",
      "en": "In Germany, waste <g>is</g> <g><b>sorted</b></g> very precisely.",
      "uk": "У Німеччині сміття дуже точно <b>сортують</b>.",
      "ru": "В Германии мусор очень точно <b>сортируют</b>."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_005",
    "cat": "k7",
    "term": {
      "de": "das Recycling",
      "en": "recycling",
      "uk": "переробка",
      "ru": "переработка"
    },
    "short": {
      "de": "Wenn man alte Materialien wieder zu neuen Produkten macht.",
      "en": "When old materials are turned into new products again.",
      "uk": "Коли зі старих матеріалів знову роблять нові продукти.",
      "ru": "Когда из старых материалов снова делают новые продукты."
    },
    "def": {
      "de": "Beim <b>Recycling</b> <g>werden</g> alte Flaschen zu neuem Glas <g>verarbeitet</g>.",
      "en": "In <b>recycling</b>, old bottles <g>are</g> <g>processed</g> into new glass.",
      "uk": "У процесі <b>переробки</b> старі бутилки перетворюють на нове скло.",
      "ru": "В процессе <b>переработки</b> старые бутылки превращают в новое стекло."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_006",
    "cat": "k7",
    "term": {
      "de": "die Pfandflasche",
      "en": "deposit bottle",
      "uk": "бутилка з депозитом",
      "ru": "бутылка с депозитом"
    },
    "short": {
      "de": "Eine Flasche, für die man beim Kauf extra Geld bezahlt und beim Zurückbringen wiederbekommt.",
      "en": "A bottle for which you pay extra money when buying it and get it back when you return it.",
      "uk": "Бутилка, за яку при покупці платять додаткові гроші і отримують назад при поверненні.",
      "ru": "Бутылка, за которую при покупке платят дополнительные деньги и получают назад при возврате."
    },
    "def": {
      "de": "Die <b>Pfandflasche</b> <g>wird</g> im Supermarkt <g>zurückgenommen</g> und man bekommt das Geld zurück.",
      "en": "The <b>deposit bottle</b> <g>is</g> <g>taken back</g> at the supermarket and you get the money back.",
      "uk": "<b>Бутилку з депозитом</b> приймають назад у супермаркеті, і гроші повертають.",
      "ru": "<b>Бутылку с депозитом</b> принимают назад в супермаркете, и деньги возвращают."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_007",
    "cat": "k7",
    "term": {
      "de": "nachhaltig",
      "en": "sustainable",
      "uk": "сталий, екологічний",
      "ru": "устойчивый, экологичный"
    },
    "short": {
      "de": "So, dass es der Umwelt für lange Zeit nicht schadet.",
      "en": "In a way that does not harm the environment for a long time.",
      "uk": "Так, що це не шкодить довкіллю протягом тривалого часу.",
      "ru": "Так, что это не вредит окружающей среде долгое время."
    },
    "def": {
      "de": "Auf diesem Hof <g>wird</g> sehr <b>nachhaltig</b> <g>gearbeitet</g>.",
      "en": "On this farm, work <g>is</g> done in a very <b>sustainable</b> way.",
      "uk": "На цій фермі працюють дуже <b>екологічно</b> (сталим способом).",
      "ru": "На этой ферме работают очень <b>экологично</b> (устойчивым способом)."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_008",
    "cat": "k7",
    "term": {
      "de": "der Ökohof",
      "en": "organic farm",
      "uk": "органічна ферма",
      "ru": "органическая ферма"
    },
    "short": {
      "de": "Ein Bauernhof, auf dem man ohne Chemie und umweltfreundlich arbeitet.",
      "en": "A farm where people work without chemicals and in an environmentally friendly way.",
      "uk": "Ферма, на якій працюють без хімії та екологічно чисто.",
      "ru": "Ферма, на которой работают без химии и экологически чисто."
    },
    "def": {
      "de": "Der <b>Ökohof</b> bietet jedes Jahr eine spannende <g>Führung</g> für Besucher an.",
      "en": "The <b>organic farm</b> offers an exciting tour for visitors every year.",
      "uk": "<b>Органічна ферма</b> щороку пропонує цікаву екскурсію для відвідувачів.",
      "ru": "<b>Органическая ферма</b> каждый год предлагает интересную экскурсию для посетителей."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_009",
    "cat": "k7",
    "term": {
      "de": "saisonal",
      "en": "seasonal",
      "uk": "сезонний",
      "ru": "сезонный"
    },
    "short": {
      "de": "So, dass etwas nur zu einer bestimmten Jahreszeit vorhanden ist.",
      "en": "So that something is only available at a certain time of year.",
      "uk": "Так, що щось є лише в певну пору року.",
      "ru": "Так, что что-то есть только в определённое время года."
    },
    "def": {
      "de": "Der Hof verkauft nur <b>saisonales</b> Obst — dazu gibt es auch eine gute <g>Beratung</g>.",
      "en": "The farm only sells <b>seasonal</b> fruit — there is also good advice available.",
      "uk": "Ферма продає лише <b>сезонні</b> фрукти — до того ж є хороша консультація.",
      "ru": "Ферма продаёт только <b>сезонные</b> фрукты — к тому же есть хорошая консультация."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_010",
    "cat": "k7",
    "term": {
      "de": "der Energieverbrauch",
      "en": "energy consumption",
      "uk": "енергоспоживання",
      "ru": "энергопотребление"
    },
    "short": {
      "de": "Wie viel Energie eine Person, ein Haus oder eine Maschine braucht.",
      "en": "How much energy a person, house or machine needs.",
      "uk": "Скільки енергії потребує людина, будинок чи машина.",
      "ru": "Сколько энергии требуется человеку, дому или машине."
    },
    "def": {
      "de": "Der <b>Energieverbrauch</b> <g>wird</g> in unserem Haus jetzt genau <g>kontrolliert</g>.",
      "en": "The <b>energy consumption</b> in our house <g>is</g> now precisely <g>monitored</g>.",
      "uk": "<b>Енергоспоживання</b> в нашому будинку зараз точно контролюють.",
      "ru": "<b>Энергопотребление</b> в нашем доме сейчас точно контролируют."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_011",
    "cat": "k7",
    "term": {
      "de": "Energie sparen",
      "en": "to save energy",
      "uk": "економити енергію",
      "ru": "экономить энергию"
    },
    "short": {
      "de": "Weniger Strom oder Gas benutzen als vorher.",
      "en": "To use less electricity or gas than before.",
      "uk": "Використовувати менше електроенергії чи газу, ніж раніше.",
      "ru": "Использовать меньше электроэнергии или газа, чем раньше."
    },
    "def": {
      "de": "In unserem Büro <g>wird</g> jetzt an vielen Stellen <b>Energie</b> <g>gespart</g>.",
      "en": "In our office, <b>energy</b> <g>is</g> now <g>saved</g> in many places.",
      "uk": "У нашому офісі тепер багато де <b>економлять енергію</b>.",
      "ru": "В нашем офисе теперь во многих местах <b>экономят энергию</b>."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_012",
    "cat": "k7",
    "term": {
      "de": "umweltfreundlich",
      "en": "environmentally friendly",
      "uk": "екологічно чистий",
      "ru": "экологически чистый"
    },
    "short": {
      "de": "So, dass es der Umwelt nicht schadet.",
      "en": "In a way that does not harm the environment.",
      "uk": "Так, що це не шкодить довкіллю.",
      "ru": "Так, что это не вредит окружающей среде."
    },
    "def": {
      "de": "Wir <g>haben</g> unser Auto verkauft und <g>sind</g> auf ein <b>umweltfreundliches</b> Fahrrad <g>umgestiegen</g>.",
      "en": "We <g>have</g> sold our car and <g>have</g> <g>switched</g> to an <b>environmentally friendly</b> bicycle.",
      "uk": "Ми продали авто і перейшли на <b>екологічно чистий</b> велосипед.",
      "ru": "Мы продали машину и перешли на <b>экологически чистый</b> велосипед."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_013",
    "cat": "k7",
    "term": {
      "de": "der Strom",
      "en": "electricity",
      "uk": "електроенергія",
      "ru": "электроэнергия"
    },
    "short": {
      "de": "Die Energie, mit der Lampen, Computer und andere Geräte funktionieren.",
      "en": "The energy that makes lamps, computers and other devices work.",
      "uk": "Енергія, завдяки якій працюють лампи, компʼютери та інші прилади.",
      "ru": "Энергия, благодаря которой работают лампы, компьютеры и другие приборы."
    },
    "def": {
      "de": "Der <b>Strom</b> <g>wird</g> in diesem Dorf komplett aus Sonnenenergie <g>gewonnen</g>.",
      "en": "The <b>electricity</b> in this village <g>is</g> <g>generated</g> completely from solar energy.",
      "uk": "<b>Електроенергію</b> в цьому селі повністю отримують із сонячної енергії.",
      "ru": "<b>Электроэнергию</b> в этой деревне полностью получают из солнечной энергии."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_014",
    "cat": "k7",
    "term": {
      "de": "vermeiden",
      "en": "to avoid",
      "uk": "уникати",
      "ru": "избегать"
    },
    "short": {
      "de": "Etwas Schlechtes nicht passieren lassen.",
      "en": "To not let something bad happen.",
      "uk": "Не дозволити чомусь поганому статися.",
      "ru": "Не дать чему-то плохому произойти."
    },
    "def": {
      "de": "Wir <g>haben</g> in diesem Jahr viel Plastikmüll <g><b>vermieden</b></g>.",
      "en": "This year, we <g>have</g> <g><b>avoided</b></g> a lot of plastic waste.",
      "uk": "Цього року ми <b>уникли</b> багато пластикового сміття.",
      "ru": "В этом году мы <b>избежали</b> много пластикового мусора."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_015",
    "cat": "k7",
    "term": {
      "de": "das Bewusstsein",
      "en": "awareness",
      "uk": "усвідомлення",
      "ru": "осознание"
    },
    "short": {
      "de": "Wenn man ein Problem klar versteht und daran denkt.",
      "en": "When you clearly understand a problem and think about it.",
      "uk": "Коли ти чітко розумієш проблему і думаєш про неї.",
      "ru": "Когда ты чётко понимаешь проблему и думаешь о ней."
    },
    "def": {
      "de": "Das <b>Bewusstsein</b> für Umweltprobleme <g>wird</g> in den Schulen jetzt stärker <g>gefördert</g>.",
      "en": "<b>Awareness</b> of environmental problems <g>is</g> now more strongly <g>promoted</g> in schools.",
      "uk": "<b>Усвідомлення</b> екологічних проблем зараз активніше розвивають у школах.",
      "ru": "<b>Осознание</b> экологических проблем сейчас активнее развивают в школах."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_001",
    "cat": "k8",
    "term": {
      "de": "die Veranstaltung",
      "en": "event",
      "uk": "захід",
      "ru": "мероприятие"
    },
    "short": {
      "de": "Ein organisiertes Ereignis, zum Beispiel ein Konzert oder Festival.",
      "en": "An organised event, for example a concert or festival.",
      "uk": "Організована подія, наприклад концерт чи фестиваль.",
      "ru": "Организованное событие, например концерт или фестиваль."
    },
    "def": {
      "de": "Diese <b>Veranstaltung</b> <g>wird</g> dieses Jahr im Park <g>organisiert</g>.",
      "en": "This <b>event</b> <g>is</g> <g>organised</g> in the park this year.",
      "uk": "Цей <b>захід</b> цього року організовують у парку.",
      "ru": "Это <b>мероприятие</b> в этом году организуют в парке."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_002",
    "cat": "k8",
    "term": {
      "de": "das Festival",
      "en": "festival",
      "uk": "фестиваль",
      "ru": "фестиваль"
    },
    "short": {
      "de": "Ein großes Fest mit Musik, Kunst oder Filmen, oft über mehrere Tage.",
      "en": "A big celebration with music, art or films, often over several days.",
      "uk": "Велике свято з музикою, мистецтвом чи фільмами, часто протягом кількох днів.",
      "ru": "Большой праздник с музыкой, искусством или фильмами, часто на протяжении нескольких дней."
    },
    "def": {
      "de": "Ich freue mich schon sehr <g>auf</g> das <b>Festival</b> nächste Woche.",
      "en": "I am already really looking forward <g>to</g> the <b>festival</b> next week.",
      "uk": "Я вже дуже чекаю на <b>фестиваль</b> наступного тижня.",
      "ru": "Я уже очень жду <b>фестиваль</b> на следующей неделе."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_003",
    "cat": "k8",
    "term": {
      "de": "die Bewertung",
      "en": "review, rating",
      "uk": "відгук, оцінка",
      "ru": "отзыв, оценка"
    },
    "short": {
      "de": "Eine persönliche Meinung darüber, ob etwas gut oder schlecht war.",
      "en": "A personal opinion about whether something was good or bad.",
      "uk": "Особиста думка про те, чи щось було хорошим чи поганим.",
      "ru": "Личное мнение о том, было ли что-то хорошим или плохим."
    },
    "def": {
      "de": "<g>Worauf</g> bezieht sich deine <b>Bewertung</b> genau — auf die Musik oder auf das Essen?",
      "en": "What does your <b>review</b> refer to exactly — the music or the food?",
      "uk": "До чого саме стосується твій <b>відгук</b> — до музики чи до їжі?",
      "ru": "К чему именно относится твой <b>отзыв</b> — к музыке или к еде?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_004",
    "cat": "k8",
    "term": {
      "de": "die Bibliothek",
      "en": "library",
      "uk": "бібліотека",
      "ru": "библиотека"
    },
    "short": {
      "de": "Ein Ort, an dem man Bücher ausleihen und lesen kann.",
      "en": "A place where you can borrow and read books.",
      "uk": "Місце, де можна позичити й почитати книжки.",
      "ru": "Место, где можно взять и почитать книги."
    },
    "def": {
      "de": "<g>Worüber</g> hat die E-Mail von der <b>Bibliothek</b> eigentlich informiert?",
      "en": "What did the email from the <b>library</b> actually inform you about?",
      "uk": "Про що взагалі повідомляв лист від <b>бібліотеки</b>?",
      "ru": "О чём вообще сообщало письмо от <b>библиотеки</b>?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_005",
    "cat": "k8",
    "term": {
      "de": "die Führung",
      "en": "guided tour",
      "uk": "екскурсія (з гідом)",
      "ru": "экскурсия (с гидом)"
    },
    "short": {
      "de": "Ein geführter Rundgang, bei dem man etwas über einen Ort erklärt bekommt.",
      "en": "A guided walk where someone explains things about a place.",
      "uk": "Екскурсія з гідом, під час якої тобі пояснюють про якесь місце.",
      "ru": "Экскурсия с гидом, во время которой тебе объясняют о каком-то месте."
    },
    "def": {
      "de": "Wie lange dauert die <b>Führung</b> <g>denn</g> genau?",
      "en": "So, how long does the <b>guided tour</b> <g>actually</g> take?",
      "uk": "А скільки <g>взагалі</g> триває <b>екскурсія</b>?",
      "ru": "А сколько <g>вообще</g> длится <b>экскурсия</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_006",
    "cat": "k8",
    "term": {
      "de": "das Graffiti",
      "en": "graffiti",
      "uk": "графіті",
      "ru": "графити"
    },
    "short": {
      "de": "Ein Bild oder Schriftzug, der mit Farbe an eine Wand oder Mauer gemacht wird.",
      "en": "A picture or text made with paint on a wall.",
      "uk": "Малюнок чи напис, зроблений фарбою на стіні.",
      "ru": "Рисунок или надпись, сделанная краской на стене."
    },
    "def": {
      "de": "Manche Menschen finden <b>Graffiti</b> schön, andere finden es <g>unpassend</g>.",
      "en": "Some people find <b>graffiti</b> beautiful, others find it inappropriate.",
      "uk": "Деяким людям <b>графіті</b> подобається, іншим воно здається недоречним.",
      "ru": "Некоторым людям <b>графити</b> нравится, другим оно кажется неуместным."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_007",
    "cat": "k8",
    "term": {
      "de": "sich austauschen",
      "en": "to exchange views",
      "uk": "обмінюватися думками",
      "ru": "обмениваться мнениями"
    },
    "short": {
      "de": "Miteinander sprechen und Meinungen oder Ideen teilen.",
      "en": "To talk with each other and share opinions or ideas.",
      "uk": "Розмовляти одне з одним і ділитися думками чи ідеями.",
      "ru": "Разговаривать друг с другом и делиться мнениями или идеями."
    },
    "def": {
      "de": "Die Nachbarn <b>tauschen sich</b> oft über <g>unbekannte</g> Künstler und ihre Werke <b>aus</b>.",
      "en": "The neighbours often <b>exchange views</b> about unknown artists and their works.",
      "uk": "Сусіди часто <b>обмінюються думками</b> про невідомих митців та їхні роботи.",
      "ru": "Соседи часто <b>обмениваются мнениями</b> о неизвестных художниках и их работах."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_008",
    "cat": "k8",
    "term": {
      "de": "planen",
      "en": "to plan",
      "uk": "планувати",
      "ru": "планировать"
    },
    "short": {
      "de": "Im Voraus überlegen, was, wann und wie man etwas machen möchte.",
      "en": "To think in advance about what, when and how you want to do something.",
      "uk": "Наперед обмірковувати, що, коли і як хочеш зробити.",
      "ru": "Заранее обдумывать, что, когда и как хочешь сделать."
    },
    "def": {
      "de": "Wir <b>planen</b> den Ausflug schon lange und freuen uns sehr <g>auf</g> das Festival.",
      "en": "We have been <b>planning</b> the trip for a long time and are really looking forward <g>to</g> the festival.",
      "uk": "Ми вже давно <b>плануємо</b> цю поїздку і дуже чекаємо на фестиваль.",
      "ru": "Мы уже давно <b>планируем</b> эту поездку и очень ждём фестиваль."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_009",
    "cat": "k8",
    "term": {
      "de": "die Ausstellung",
      "en": "exhibition",
      "uk": "виставка",
      "ru": "выставка"
    },
    "short": {
      "de": "Ein Ort oder Ereignis, bei dem Kunst oder Objekte gezeigt werden.",
      "en": "A place or event where art or objects are shown.",
      "uk": "Місце чи подія, де показують мистецтво чи предмети.",
      "ru": "Место или событие, где показывают искусство или предметы."
    },
    "def": {
      "de": "Die neue <b>Ausstellung</b> zeigt auch einige <g>ungewöhnliche</g> Fotografien.",
      "en": "The new <b>exhibition</b> also shows some unusual photographs.",
      "uk": "Нова <b>виставка</b> показує й кілька незвичних фотографій.",
      "ru": "Новая <b>выставка</b> показывает и несколько необычных фотографий."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_010",
    "cat": "k8",
    "term": {
      "de": "teilnehmen",
      "en": "to take part",
      "uk": "брати участь",
      "ru": "принимать участие"
    },
    "short": {
      "de": "Bei etwas mitmachen, zum Beispiel bei einer Veranstaltung.",
      "en": "To take part in something, for example an event.",
      "uk": "Брати участь у чомусь, наприклад у заході.",
      "ru": "Принимать участие в чём-то, например в мероприятии."
    },
    "def": {
      "de": "Trotz des <g>unsicheren</g> Wetters wollten viele Leute an der Führung <b>teilnehmen</b>.",
      "en": "Despite the uncertain weather, many people wanted to <b>take part</b> in the tour.",
      "uk": "Незважаючи на непевну погоду, багато людей хотіли <b>взяти участь</b> в екскурсії.",
      "ru": "Несмотря на неопределённую погоду, многие люди хотели <b>принять участие</b> в экскурсии."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_011",
    "cat": "k8",
    "term": {
      "de": "die Kunst",
      "en": "art",
      "uk": "мистецтво",
      "ru": "искусство"
    },
    "short": {
      "de": "Bilder, Musik, Filme oder andere Werke, die Menschen mit Fantasie schaffen.",
      "en": "Pictures, music, films or other works that people create with imagination.",
      "uk": "Картини, музика, фільми чи інші твори, які люди створюють за допомогою фантазії.",
      "ru": "Картины, музыка, фильмы или другие произведения, которые люди создают с помощью фантазии."
    },
    "def": {
      "de": "Moderne <b>Kunst</b> <g>wird</g> in diesem Museum sehr modern <g>präsentiert</g>.",
      "en": "Modern <b>art</b> <g>is</g> <g>presented</g> in a very modern way in this museum.",
      "uk": "Сучасне <b>мистецтво</b> у цьому музеї показують дуже сучасно.",
      "ru": "Современное <b>искусство</b> в этом музее показывают очень современно."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_012",
    "cat": "k8",
    "term": {
      "de": "begeistert",
      "en": "enthusiastic",
      "uk": "захоплений",
      "ru": "восторженный, увлечённый"
    },
    "short": {
      "de": "Sehr glücklich und voller Interesse wegen etwas.",
      "en": "Very happy and full of interest because of something.",
      "uk": "Дуже щасливий і сповнений інтересу через щось.",
      "ru": "Очень счастливый и полный интереса из-за чего-то."
    },
    "def": {
      "de": "<g>Wovon</g> warst du beim Festival am meisten <b>begeistert</b>?",
      "en": "What were you most <b>enthusiastic</b> about at the festival?",
      "uk": "Чим ти був найбільше <b>захоплений</b> на фестивалі?",
      "ru": "Чем ты был больше всего <b>увлечён</b> на фестивале?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_013",
    "cat": "k8",
    "term": {
      "de": "der Eintritt",
      "en": "admission, entry",
      "uk": "вхід (плата за вхід)",
      "ru": "вход (плата за вход)"
    },
    "short": {
      "de": "Das Geld, das man bezahlt, um in eine Veranstaltung zu gehen.",
      "en": "The money you pay to go into an event.",
      "uk": "Гроші, які платять, щоб потрапити на подію.",
      "ru": "Деньги, которые платят, чтобы попасть на мероприятие."
    },
    "def": {
      "de": "Wie viel kostet der <b>Eintritt</b> <g>eigentlich</g> für die Bibliotheksführung?",
      "en": "So, how much does the <b>admission</b> for the library tour <g>actually</g> cost?",
      "uk": "А скільки <g>взагалі</g> коштує <b>вхід</b> на екскурсію по бібліотеці?",
      "ru": "А сколько <g>вообще</g> стоит <b>вход</b> на экскурсию по библиотеке?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_014",
    "cat": "k8",
    "term": {
      "de": "empfehlen",
      "en": "to recommend",
      "uk": "рекомендувати",
      "ru": "рекомендовать"
    },
    "short": {
      "de": "Jemandem sagen, dass etwas gut ist und man es machen oder kaufen sollte.",
      "en": "To tell someone that something is good and they should do or buy it.",
      "uk": "Казати комусь, що щось хорошe і варто це зробити чи купити.",
      "ru": "Говорить кому-то, что что-то хорошее и стоит это сделать или купить."
    },
    "def": {
      "de": "Ich kann das Festival <g>uneingeschränkt</g> <b>empfehlen</b>.",
      "en": "I can wholeheartedly <b>recommend</b> the festival.",
      "uk": "Я можу беззастережно <b>порекомендувати</b> цей фестиваль.",
      "ru": "Я могу безоговорочно <b>порекомендовать</b> этот фестиваль."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_015",
    "cat": "k8",
    "term": {
      "de": "das Angebot",
      "en": "offer, program",
      "uk": "пропозиція, програма",
      "ru": "предложение, программа"
    },
    "short": {
      "de": "Etwas, das eine Firma oder Organisation den Menschen anbietet.",
      "en": "Something that a company or organisation offers to people.",
      "uk": "Те, що фірма чи організація пропонує людям.",
      "ru": "То, что фирма или организация предлагает людям."
    },
    "def": {
      "de": "<g>Worauf</g> bezieht sich das neue <b>Angebot</b> der Bibliothek genau?",
      "en": "What exactly does the library's new <b>offer</b> refer to?",
      "uk": "До чого саме стосується нова <b>пропозиція</b> бібліотеки?",
      "ru": "К чему именно относится новое <b>предложение</b> библиотеки?"
    },
    "gram": "fragewoerter_wor_dar"
  }
];

// ── ДІАЛОГИ (DIALOGE) ───────────────────────────────────────────
// 4 діалоги на кожну з 8 глав, gram визначено прямим аналізом репліки

var DIALOGE = [
  {
    "id": "dlg_001",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "<g>Könnten</g> Sie bitte etwas leiser sein? Es ist schon nach 22 Uhr.",
      "en": "<g>Could you</g> please be a bit quieter? It's already after 10 p.m.",
      "uk": "<g>Могли б Ви</g>, будь ласка, бути трохи тихішими? Вже по 22:00.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, быть немного тише? Уже после 22:00."
    },
    "a": {
      "de": "Entschuldigung, das wusste ich nicht. Ich mache sofort leiser.",
      "en": "Sorry, I didn't know that. I'll be quieter right away.",
      "uk": "Вибачте, я не знав цього. Я одразу стану тихішим.",
      "ru": "Извините, я не знал этого. Я сразу стану тише."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "dlg_002",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Wo <g>darf</g> ich meinen Kinderwagen abstellen?",
      "en": "Where <g>may</g> I leave my stroller?",
      "uk": "Де мені <g>можна</g> залишити коляску?",
      "ru": "Где мне <g>можно</g> оставить коляску?"
    },
    "a": {
      "de": "Am besten im Keller, im Treppenhaus darfst du ihn leider nicht lassen.",
      "en": "Best in the basement; unfortunately you can't leave it in the stairwell.",
      "uk": "Найкраще в підвалі, у підʼїзді, на жаль, не можна її залишати.",
      "ru": "Лучше всего в подвале, в подъезде, к сожалению, нельзя её оставлять."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "dlg_003",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Warum riecht es hier im Treppenhaus so gut?",
      "en": "Why does it smell so good here in the stairwell?",
      "uk": "Чому тут у підʼїзді так приємно пахне?",
      "ru": "Почему здесь в подъезде так приятно пахнет?"
    },
    "a": {
      "de": "Frau Kowalski backt sonntags immer Kuchen für die ganze Nachbarschaft.",
      "en": "Mrs Kowalski always bakes a cake for the whole neighbourhood on Sundays.",
      "uk": "Пані Ковальскі щонеділі завжди пече торт для всього сусідства.",
      "ru": "Госпожа Ковальски по воскресеньям всегда печёт торт для всего соседства."
    },
    "gram": ""
  },
  {
    "id": "dlg_004",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Seit wann wohnt ihr schon in diesem Haus?",
      "en": "Since when have you been living in this building?",
      "uk": "Відколи ви живете в цьому будинку?",
      "ru": "С каких пор вы живёте в этом доме?"
    },
    "a": {
      "de": "Wir wohnen schon seit fünf Jahren hier, und es gefällt uns sehr gut.",
      "en": "We have been living here for five years already, and we like it very much.",
      "uk": "Ми живемо тут уже пʼять років, і нам тут дуже подобається.",
      "ru": "Мы живём здесь уже пять лет, и нам здесь очень нравится."
    },
    "gram": ""
  },
  {
    "id": "dlg_005",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Wollen wir <g>sowohl</g> Milch <g>als auch</g> Eier auf dem Markt kaufen?",
      "en": "Shall we buy <g>both</g> milk <g>and</g> eggs at the market?",
      "uk": "Купімо на ринку <g>як</g> молоко, <g>так і</g> яйця?",
      "ru": "Купим на рынке <g>как</g> молоко, <g>так и</g> яйца?"
    },
    "a": {
      "de": "Ja klar, dort ist beides frischer als im Supermarkt.",
      "en": "Sure, both are fresher there than at the supermarket.",
      "uk": "Так, звісно, там і те, і те свіжіше, ніж у супермаркеті.",
      "ru": "Да, конечно, там и то, и другое свежее, чем в супермаркете."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "dlg_006",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Die Hose, <g>die</g> ich letzte Woche gekauft habe, ist leider kaputt.",
      "en": "The trousers <g>that</g> I bought last week are unfortunately broken.",
      "uk": "Штани, <g>які</g> я купив минулого тижня, на жаль, пошкоджені.",
      "ru": "Брюки, <g>которые</g> я купил на прошлой неделе, к сожалению, повреждены."
    },
    "a": {
      "de": "Das tut mir leid! Hast du schon die Quittung gesucht?",
      "en": "I'm sorry! Have you already looked for the receipt?",
      "uk": "Мені шкода! Ти вже шукав квитанцію?",
      "ru": "Мне жаль! Ты уже искал квитанцию?"
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "dlg_007",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Warum schreibst du eine Reklamation?",
      "en": "Why are you writing a complaint?",
      "uk": "Чому ти пишеш рекламацію?",
      "ru": "Почему ты пишешь рекламацию?"
    },
    "a": {
      "de": "Weil das Paket beschädigt angekommen ist und ich mein Geld zurückwill.",
      "en": "Because the package arrived damaged and I want my money back.",
      "uk": "Тому що посилка прийшла пошкодженою, і я хочу повернути гроші.",
      "ru": "Потому что посылка пришла повреждённой, и я хочу вернуть деньги."
    },
    "gram": ""
  },
  {
    "id": "dlg_008",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Kannst du mir kurz helfen, das Formular für den Umtausch auszufüllen?",
      "en": "Can you help me for a moment to fill in the exchange form?",
      "uk": "Можеш мені трохи допомогти заповнити формуляр для обміну?",
      "ru": "Можешь мне немного помочь заполнить формуляр для обмена?"
    },
    "a": {
      "de": "Klar, das mache ich gern für dich.",
      "en": "Sure, I'll gladly do that for you.",
      "uk": "Звісно, я залюбки це для тебе зроблю.",
      "ru": "Конечно, я с удовольствием сделаю это для тебя."
    },
    "gram": ""
  },
  {
    "id": "dlg_009",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Er <g>dürfte</g> jetzt schon zu Hause sein, oder?",
      "en": "He <g>should</g> already be home now, right?",
      "uk": "Він, певно, вже вдома, чи не так?",
      "ru": "Он, наверное, уже дома, не так ли?"
    },
    "a": {
      "de": "Ja, wahrscheinlich sitzt er schon vor dem Fernseher.",
      "en": "Yes, he's probably already sitting in front of the TV.",
      "uk": "Так, напевно, він уже сидить перед телевізором.",
      "ru": "Да, наверное, он уже сидит перед телевизором."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "dlg_010",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Wessen Konto ist das eigentlich?",
      "en": "Whose account is that, actually?",
      "uk": "Взагалі, чий це рахунок?",
      "ru": "Вообще, чей это счёт?"
    },
    "a": {
      "de": "Das ist das Konto <g>meiner Tochter</g>, ich verwalte es nur.",
      "en": "That's <g>my daughter's</g> account, I just manage it.",
      "uk": "Це рахунок моєї доньки, я лише керую ним.",
      "ru": "Это счёт моей дочери, я только управляю им."
    },
    "gram": "genitiv"
  },
  {
    "id": "dlg_011",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Warum hast du die Versicherung gekündigt, <g>obwohl</g> sie so günstig war?",
      "en": "Why did you cancel the insurance <g>although</g> it was so cheap?",
      "uk": "Чому ти розірвав страхування, <g>хоча</g> воно було таким дешевим?",
      "ru": "Почему ты расторг страхование, <g>хотя</g> оно было таким дешёвым?"
    },
    "a": {
      "de": "Weil der Service leider sehr schlecht war.",
      "en": "Because the service was unfortunately very bad.",
      "uk": "Тому що сервіс, на жаль, був дуже поганим.",
      "ru": "Потому что сервис, к сожалению, был очень плохим."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "dlg_012",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Hast du schon die Verbraucherzentrale angerufen?",
      "en": "Have you already called the consumer advice centre?",
      "uk": "Ти вже дзвонив у центр захисту прав споживачів?",
      "ru": "Ты уже звонил в центр защиты прав потребителей?"
    },
    "a": {
      "de": "Nein, noch nicht, aber ich werde es morgen machen.",
      "en": "No, not yet, but I will do it tomorrow.",
      "uk": "Ні, ще ні, але я зроблю це завтра.",
      "ru": "Нет, ещё нет, но я сделаю это завтра."
    },
    "gram": ""
  },
  {
    "id": "dlg_013",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Wie hat sich eure Ernährung verändert, <g>seit</g> ihr in Deutschland lebt?",
      "en": "How has your diet changed <g>since</g> you have been living in Germany?",
      "uk": "Як змінилося ваше харчування, <g>відколи</g> ви живете в Німеччині?",
      "ru": "Как изменилось ваше питание, <g>с тех пор как</g> вы живёте в Германии?"
    },
    "a": {
      "de": "Wir essen jetzt viel mehr Gemüse als früher.",
      "en": "We eat much more vegetables now than before.",
      "uk": "Тепер ми їмо набагато більше овочів, ніж раніше.",
      "ru": "Теперь мы едим намного больше овощей, чем раньше."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "dlg_014",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Isst du lieber regelmäßig zu Hause oder isst du oft unterwegs?",
      "en": "Do you prefer eating regularly at home, or do you often eat on the go?",
      "uk": "Ти волієш регулярно їсти вдома чи часто їси в дорозі?",
      "ru": "Ты предпочитаешь регулярно есть дома или часто ешь на ходу?"
    },
    "a": {
      "de": "Ich koche eigentlich immer selbst, das ist gesünder und billiger.",
      "en": "I actually always cook myself, it's healthier and cheaper.",
      "uk": "Я взагалі завжди готую сам(-а), це здоровіше і дешевше.",
      "ru": "Я вообще всегда готовлю сам(-а), это полезнее и дешевле."
    },
    "gram": ""
  },
  {
    "id": "dlg_015",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Warum hast du so lange auf das Rezept gewartet?",
      "en": "Why did you wait so long for the recipe?",
      "uk": "Чому ти так довго чекав з рецептом?",
      "ru": "Почему ты так долго ждал с рецептом?"
    },
    "a": {
      "de": "Ich habe gewartet, <g>bis</g> ich alle Zutaten im Kühlschrank hatte.",
      "en": "I waited <g>until</g> I had all the ingredients in the fridge.",
      "uk": "Я чекав, <g>доки</g> в мене не зʼявилися всі інгредієнти в холодильнику.",
      "ru": "Я ждал, <g>пока</g> у меня не появились все ингредиенты в холодильнике."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "dlg_016",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Was waren die Ergebnisse der Umfrage über Essgewohnheiten?",
      "en": "What were the results of the survey on eating habits?",
      "uk": "Якими були результати опитування щодо харчових звичок?",
      "ru": "Какими были результаты опроса о привычках питания?"
    },
    "a": {
      "de": "Die meisten Leute essen heute weniger Fleisch als früher.",
      "en": "Most people eat less meat today than before.",
      "uk": "Більшість людей сьогодні їдять менше мʼяса, ніж раніше.",
      "ru": "Большинство людей сегодня едят меньше мяса, чем раньше."
    },
    "gram": ""
  },
  {
    "id": "dlg_017",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "<g>Worüber</g> hast du dich beim Sprachkurs am meisten geärgert?",
      "en": "What <g>were</g> you most annoyed <g>about</g> in the language course?",
      "uk": "<g>Через що</g> ти найбільше злився на мовному курсі?",
      "ru": "<g>Из-за чего</g> ты больше всего злился на языковых курсах?"
    },
    "a": {
      "de": "Darüber, dass die Grammatik so kompliziert ist.",
      "en": "About how complicated the grammar is.",
      "uk": "Через те, що граматика така складна.",
      "ru": "Из-за того, что грамматика такая сложная."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "dlg_018",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "<g>Mit wem</g> sprichst du eigentlich deine Muttersprache?",
      "en": "<g>Who</g> do you actually speak your native language <g>with</g>?",
      "uk": "<g>З ким</g> ти взагалі говориш рідною мовою?",
      "ru": "<g>С кем</g> ты вообще говоришь на родном языке?"
    },
    "a": {
      "de": "Nur mit meiner Familie, sonst spreche ich Deutsch.",
      "en": "Only with my family, otherwise I speak German.",
      "uk": "Тільки з родиною, а так я говорю німецькою.",
      "ru": "Только с семьёй, а так я говорю по-немецки."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "dlg_019",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "Bist du schon lange hier, oder wohnst du erst seit Kurzem in Deutschland?",
      "en": "Have you been here long, or have you only lived in Germany for a short time?",
      "uk": "Ти вже давно тут, чи живеш у Німеччині лише нещодавно?",
      "ru": "Ты уже давно здесь, или живёшь в Германии только недавно?"
    },
    "a": {
      "de": "Ich wohne schon seit drei Jahren hier.",
      "en": "I've already been living here for three years.",
      "uk": "Я вже живу тут три роки.",
      "ru": "Я уже живу здесь три года."
    },
    "gram": ""
  },
  {
    "id": "dlg_020",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "Was hat dich am meisten überrascht, als du hierhergekommen bist?",
      "en": "What surprised you most when you came here?",
      "uk": "Що тебе найбільше здивувало, коли ти сюди приїхав?",
      "ru": "Что тебя больше всего удивило, когда ты сюда приехал?"
    },
    "a": {
      "de": "Dass die Geschäfte sonntags geschlossen sind.",
      "en": "That the shops are closed on Sundays.",
      "uk": "Те, що магазини зачинені по неділях.",
      "ru": "То, что магазины закрыты по воскресеньям."
    },
    "gram": ""
  },
  {
    "id": "dlg_021",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wird der Patient morgen operiert?",
      "en": "Will the patient be operated on tomorrow?",
      "uk": "Пацієнта прооперують завтра?",
      "ru": "Пациента прооперируют завтра?"
    },
    "a": {
      "de": "Ja, die Operation <g>wird</g> um neun Uhr <g>stattfinden</g>.",
      "en": "Yes, the operation <g>will take place</g> at nine o'clock.",
      "uk": "Так, операція <g>відбудеться</g> о девʼятій годині.",
      "ru": "Да, операция <g>будет проходить</g> в девять часов."
    },
    "gram": "futur_werden"
  },
  {
    "id": "dlg_022",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Warum bist du in die Notaufnahme gegangen?",
      "en": "Why did you go to the emergency room?",
      "uk": "Чому ти пішов у приймальне відділення?",
      "ru": "Почему ты пошёл в приёмный покой?"
    },
    "a": {
      "de": "Ich habe mich beim Sport <g>nicht nur</g> am Knie, <g>sondern auch</g> am Arm verletzt.",
      "en": "While doing sports, I <g>not only</g> hurt my knee <g>but also</g> my arm.",
      "uk": "Під час спорту я <g>не тільки</g> травмував коліно, <g>а й</g> руку.",
      "ru": "Во время спорта я <g>не только</g> травмировал колено, <g>но и</g> руку."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "dlg_023",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wozu brauchst du dieses Formular?",
      "en": "What do you need this form for?",
      "uk": "Для чого тобі потрібен цей формуляр?",
      "ru": "Для чего тебе нужен этот формуляр?"
    },
    "a": {
      "de": "Ich brauche es, <g>um</g> mich in der Klinik <g>anzumelden</g>.",
      "en": "I need it <g>in order to</g> register at the clinic.",
      "uk": "Він потрібен мені, <g>щоб</g> зареєструватися в клініці.",
      "ru": "Он нужен мне, <g>чтобы</g> зарегистрироваться в клинике."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "dlg_024",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wie lange dauert die Untersuchung ungefähr?",
      "en": "How long does the examination take approximately?",
      "uk": "Скільки приблизно триває обстеження?",
      "ru": "Сколько примерно длится обследование?"
    },
    "a": {
      "de": "Meistens dauert sie nicht länger als eine halbe Stunde.",
      "en": "It usually doesn't take longer than half an hour.",
      "uk": "Зазвичай воно триває не довше пів години.",
      "ru": "Обычно оно длится не дольше получаса."
    },
    "gram": ""
  },
  {
    "id": "dlg_025",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Wird der Müll hier eigentlich richtig getrennt?",
      "en": "Is the rubbish actually sorted properly here?",
      "uk": "Тут взагалі правильно сортують сміття?",
      "ru": "Здесь вообще правильно сортируют мусор?"
    },
    "a": {
      "de": "Ja, der Abfall <g>wird</g> in drei verschiedene Tonnen <g>sortiert</g>.",
      "en": "Yes, the waste <g>is</g> <g>sorted</g> into three different bins.",
      "uk": "Так, сміття сортують на три різні контейнери.",
      "ru": "Да, мусор сортируют на три разных контейнера."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "dlg_026",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Habt ihr in diesem Jahr schon Energie gespart?",
      "en": "Have you already saved energy this year?",
      "uk": "Ви вже цього року економили енергію?",
      "ru": "Вы уже в этом году экономили энергию?"
    },
    "a": {
      "de": "Ja, wir <g>haben</g> unsere alten Lampen durch LED-Lampen <g>ersetzt</g>.",
      "en": "Yes, we <g>have</g> <g>replaced</g> our old lamps with LED lamps.",
      "uk": "Так, ми замінили наші старі лампи на LED-лампи.",
      "ru": "Да, мы заменили наши старые лампы на LED-лампы."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "dlg_027",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Warum kauft ihr nur noch saisonales Gemüse?",
      "en": "Why do you only buy seasonal vegetables now?",
      "uk": "Чому ви тепер купуєте лише сезонні овочі?",
      "ru": "Почему вы теперь покупаете только сезонные овощи?"
    },
    "a": {
      "de": "Weil das besser für die Umwelt und meistens auch billiger ist.",
      "en": "Because it's better for the environment and usually cheaper too.",
      "uk": "Тому що це краще для довкілля і зазвичай ще й дешевше.",
      "ru": "Потому что это лучше для окружающей среды и обычно ещё и дешевле."
    },
    "gram": ""
  },
  {
    "id": "dlg_028",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Was können wir noch für das Klima tun?",
      "en": "What else can we do for the climate?",
      "uk": "Що ще ми можемо зробити для клімату?",
      "ru": "Что ещё мы можем сделать для климата?"
    },
    "a": {
      "de": "Wir könnten öfter das Fahrrad statt das Auto benutzen.",
      "en": "We could use the bicycle instead of the car more often.",
      "uk": "Ми могли б частіше користуватися велосипедом замість автомобіля.",
      "ru": "Мы могли бы чаще пользоваться велосипедом вместо автомобиля."
    },
    "gram": ""
  },
  {
    "id": "dlg_029",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "<g>Worauf</g> freust du dich beim Festival am meisten?",
      "en": "What are you looking forward <g>to</g> most at the festival?",
      "uk": "Чого ти найбільше очікуєш від фестивалю?",
      "ru": "Чего ты больше всего ждёшь от фестиваля?"
    },
    "a": {
      "de": "<g>Auf</g> die Konzerte am Abend, die Bands sind wirklich toll.",
      "en": "The evening concerts — the bands are really great.",
      "uk": "Вечірніх концертів, гурти справді чудові.",
      "ru": "Вечерних концертов, группы действительно классные."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "dlg_030",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "<g>Wovon</g> handelt eigentlich die neue Ausstellung im Museum?",
      "en": "What is the new exhibition at the museum actually about?",
      "uk": "Про що взагалі нова виставка в музеї?",
      "ru": "О чём вообще новая выставка в музее?"
    },
    "a": {
      "de": "Von moderner Kunst aus den letzten zehn Jahren.",
      "en": "About modern art from the last ten years.",
      "uk": "Про сучасне мистецтво останніх десяти років.",
      "ru": "О современном искусстве последних десяти лет."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "dlg_031",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "Wie war <g>denn</g> die Führung durch die Bibliothek?",
      "en": "<g>So</g>, how was the library tour?",
      "uk": "<g>А</g> яка була екскурсія по бібліотеці?",
      "ru": "<g>А</g> как прошла экскурсия по библиотеке?"
    },
    "a": {
      "de": "Richtig interessant, wir haben viel über alte Bücher gelernt.",
      "en": "Really interesting, we learned a lot about old books.",
      "uk": "Дуже цікаво, ми дізналися багато про старі книжки.",
      "ru": "Очень интересно, мы узнали много о старых книгах."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "dlg_032",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "Kannst du mir ein gutes Straßenfestival empfehlen?",
      "en": "Can you recommend a good street festival to me?",
      "uk": "Можеш порекомендувати мені хороший вуличний фестиваль?",
      "ru": "Можешь порекомендовать мне хороший уличный фестиваль?"
    },
    "a": {
      "de": "Klar, das Sommerfest in der Altstadt ist jedes Jahr super.",
      "en": "Sure, the summer festival in the old town is great every year.",
      "uk": "Звісно, літнє свято у старому місті щороку чудове.",
      "ru": "Конечно, летний праздник в старом городе каждый год отличный."
    },
    "gram": ""
  }
];

var QUIZ = [];

// ── КАТЕГОРІЇ SPRACHBAUSTEINE ───────────────────────────────────

var SB_CATS = [
  {
    "id": "hoefliche_bitten_konjunktiv_b1",
    "de": "Höfliche Bitten (Konjunktiv II): Könnten Sie …?",
    "en": "Polite requests (Subjunctive II): Could you …?",
    "uk": "Ввічливі прохання (Кон'юнктив II): Могли б Ви …?",
    "ru": "Вежливые просьбы (Конъюнктив II): Могли бы Вы …?",
    "e": "🙏"
  },
  {
    "id": "infinitiv_mit_zu",
    "de": "Infinitiv mit zu",
    "en": "Infinitive with zu",
    "uk": "Інфінітив з zu",
    "ru": "Инфинитив с zu",
    "e": "➡️"
  },
  {
    "id": "sowohl_als_auch_weder_noch",
    "de": "sowohl … als auch / weder … noch",
    "en": "both … and / neither … nor",
    "uk": "як … так і / ні … ні",
    "ru": "как … так и / ни … ни",
    "e": "⚖️"
  },
  {
    "id": "modalverben_wdh_b1",
    "de": "Wiederholung: Modalverben (Regeln formulieren)",
    "en": "Review: modal verbs (stating rules)",
    "uk": "Повторення: модальні дієслова (формулювання правил)",
    "ru": "Повторение: модальные глаголы (формулирование правил)",
    "e": "🔑"
  },
  {
    "id": "wechselpraepositionen_wdh_b1",
    "de": "Wiederholung: Wechselpräpositionen",
    "en": "Review: two-way prepositions",
    "uk": "Повторення: прийменники подвійного керування",
    "ru": "Повторение: предлоги двойного управления",
    "e": "📍"
  },
  {
    "id": "reflexivpronomen_akkusativ_wdh_b1",
    "de": "Wiederholung: Reflexivpronomen im Akkusativ",
    "en": "Review: reflexive pronouns (accusative)",
    "uk": "Повторення: зворотні займенники (знахідний)",
    "ru": "Повторение: возвратные местоимения (винительный)",
    "e": "🪞"
  },
  {
    "id": "relativsatz_nominativ_sondern",
    "de": "Relativpronomen im Nominativ; sondern",
    "en": "Relative pronoun (nominative); sondern",
    "uk": "Займенник у називному відмінку; sondern",
    "ru": "Местоимение в именительном падеже; sondern",
    "e": "🔗"
  },
  {
    "id": "relativsatz_akkusativ_b1",
    "de": "Relativpronomen im Akkusativ",
    "en": "Relative pronoun (accusative)",
    "uk": "Займенник у знахідному відмінку",
    "ru": "Местоимение в винительном падеже",
    "e": "🔗"
  },
  {
    "id": "modalverben_vermutung",
    "de": "Modalverben für Vermutungen (dürfte, müsste, könnte)",
    "en": "Modal verbs expressing assumption",
    "uk": "Модальні дієслова для припущень",
    "ru": "Модальные глаголы для предположений",
    "e": "🤔"
  },
  {
    "id": "genitiv",
    "de": "Genitiv",
    "en": "Genitive case",
    "uk": "Родовий відмінок",
    "ru": "Родительный падеж",
    "e": "📑"
  },
  {
    "id": "nebensatz_mit_obwohl",
    "de": "Nebensatz mit obwohl",
    "en": "Subordinate clause with obwohl (although)",
    "uk": "Підрядне речення з obwohl (хоча)",
    "ru": "Придаточное предложение с obwohl (хотя)",
    "e": "🔄"
  },
  {
    "id": "konnektoren_wdh_b1",
    "de": "Wiederholung: Konnektoren",
    "en": "Review: connectors",
    "uk": "Повторення: конектори",
    "ru": "Повторение: коннекторы",
    "e": "🧩"
  },
  {
    "id": "praeteritum_wdh_b1",
    "de": "Wiederholung: Präteritum",
    "en": "Review: simple past",
    "uk": "Повторення: претерит",
    "ru": "Повторение: претерит",
    "e": "⏳"
  },
  {
    "id": "deshalb_deswegen_trotzdem",
    "de": "deshalb / deswegen / trotzdem",
    "en": "deshalb / deswegen / trotzdem (therefore / nevertheless)",
    "uk": "deshalb / deswegen / trotzdem (тому / незважаючи на це)",
    "ru": "deshalb / deswegen / trotzdem (поэтому / несмотря на это)",
    "e": "➡️"
  },
  {
    "id": "genitiv_alternativen",
    "de": "Genitiv und Alternativen (von + Dativ)",
    "en": "Genitive and alternatives (von + dative)",
    "uk": "Родовий відмінок та альтернативи (von + давальний)",
    "ru": "Родительный падеж и альтернативы (von + дательный)",
    "e": "📑"
  },
  {
    "id": "nebensatz_seit_seitdem",
    "de": "Nebensatz mit seit / seitdem",
    "en": "Subordinate clause with seit/seitdem (since)",
    "uk": "Підрядне речення з seit/seitdem (відколи)",
    "ru": "Придаточное предложение с seit/seitdem (с тех пор как)",
    "e": "⏰"
  },
  {
    "id": "verben_praep_personen_sachen",
    "de": "Verben mit Präpositionen: Fragen nach Personen und Sachen",
    "en": "Verbs with prepositions: questions about people and things",
    "uk": "Дієслова з прийменниками: питання про осіб і речі",
    "ru": "Глаголы с предлогами: вопросы о людях и вещах",
    "e": "🔗"
  },
  {
    "id": "nebensatz_mit_bis",
    "de": "Nebensatz mit bis",
    "en": "Subordinate clause with bis (until)",
    "uk": "Підрядне речення з bis (доки)",
    "ru": "Придаточное предложение с bis (до тех пор как)",
    "e": "⏳"
  },
  {
    "id": "praepositionaladverbien_b1",
    "de": "Präpositionaladverbien (worüber, darüber …)",
    "en": "Prepositional adverbs (worüber, darüber …)",
    "uk": "Прийменникові прислівники (worüber, darüber …)",
    "ru": "Предложные наречия (worüber, darüber …)",
    "e": "🔗"
  },
  {
    "id": "futur_werden",
    "de": "Futur I: werden + Infinitiv",
    "en": "Future tense: werden + infinitive",
    "uk": "Майбутній час: werden + інфінітив",
    "ru": "Будущее время: werden + инфинитив",
    "e": "🔮"
  },
  {
    "id": "nicht_nur_sondern_auch",
    "de": "nicht nur …, sondern auch",
    "en": "not only … but also",
    "uk": "не тільки …, а й",
    "ru": "не только …, но и",
    "e": "➕"
  },
  {
    "id": "satz_mit_um_zu",
    "de": "Sätze mit um … zu",
    "en": "Clauses with um … zu (in order to)",
    "uk": "Речення з um … zu (щоб)",
    "ru": "Предложения с um … zu (чтобы)",
    "e": "🎯"
  },
  {
    "id": "nebensatz_mit_damit_wdh_b1",
    "de": "Wiederholung: Nebensatz mit damit",
    "en": "Review: subordinate clause with damit",
    "uk": "Повторення: речення з damit",
    "ru": "Повторение: предложение с damit",
    "e": "🎯"
  },
  {
    "id": "passiv_praesens_b1",
    "de": "Passiv Präsens",
    "en": "Passive voice (present)",
    "uk": "Пасив (теперішній час)",
    "ru": "Пассив (настоящее время)",
    "e": "🔧"
  },
  {
    "id": "perfekt_wdh_b1",
    "de": "Wiederholung: Perfekt",
    "en": "Review: present perfect",
    "uk": "Повторення: перфект",
    "ru": "Повторение: перфект",
    "e": "⏳"
  },
  {
    "id": "verben_mit_praep_wdh_b1",
    "de": "Wiederholung: Verben mit Präpositionen",
    "en": "Review: verbs with prepositions",
    "uk": "Повторення: дієслова з прийменниками",
    "ru": "Повторение: глаголы с предлогами",
    "e": "🔗"
  },
  {
    "id": "fragewoerter_wor_dar",
    "de": "Fragewörter mit wo(r)- und Präpositionaladverbien mit da(r)-",
    "en": "Question words with wo(r)- and prepositional adverbs with da(r)-",
    "uk": "Питальні слова з wo(r)- і прийменникові прислівники з da(r)-",
    "ru": "Вопросительные слова с wo(r)- и предложные наречия с da(r)-",
    "e": "❓"
  },
  {
    "id": "interesse_denn_eigentlich",
    "de": "Interesse zeigen mit denn und eigentlich",
    "en": "Showing interest with denn and eigentlich",
    "uk": "Виявлення інтересу за допомогою denn і eigentlich",
    "ru": "Проявление интереса с помощью denn и eigentlich",
    "e": "💬"
  }
];

// ── SPRACHBAUSTEINE (fill-in-the-blank) ─────────────────────────
// 3 картки на кожну з 28 категорій = 84 картки

var SPRACHBAUSTEINE = [
  {
    "id": "sb_001",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "{{BLANK}} Sie mir bitte helfen, den Karton zu tragen?",
      "en": "Could you please help me carry the box?",
      "uk": "Могли б Ви, будь ласка, допомогти мені нести коробку?",
      "ru": "Могли бы Вы, пожалуйста, помочь мне нести коробку?"
    },
    "answer": {
      "de": "Könnten",
      "en": "Could",
      "uk": "Могли б",
      "ru": "Могли бы"
    },
    "distractors": [
      "Können",
      "Müssen",
      "Sollen"
    ],
    "explanation": {
      "de": "<b>„Könnten“</b> (Konjunktiv II) klingt höflicher als das einfache „Können“.<br>„Müssen“ würde eine Pflicht ausdrücken, keine höfliche Bitte.",
      "en": "<b>„Könnten“</b> (subjunctive II) sounds more polite than the simple „Können“.<br>„Müssen“ would express an obligation, not a polite request.",
      "uk": "<b>„Könnten“</b> (конʼюнктив II) звучить ввічливіше за просте „Können“.<br>„Müssen“ виражало б обовʼязок, а не ввічливе прохання.",
      "ru": "<b>„Könnten“</b> (конъюнктив II) звучит вежливее, чем простое „Können“.<br>„Müssen“ выражало бы обязанность, а не вежливую просьбу."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_002",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "{{BLANK}} Sie so freundlich und reichen mir das Salz?",
      "en": "Would you be so kind as to pass me the salt?",
      "uk": "Чи не були б Ви такі люб’язні і подали мені сіль?",
      "ru": "Не были бы Вы так любезны и передали мне соль?"
    },
    "answer": {
      "de": "Wären",
      "en": "Would",
      "uk": "Чи не були б",
      "ru": "Не были бы"
    },
    "distractors": [
      "Sind",
      "Waren",
      "Werden"
    ],
    "explanation": {
      "de": "Die feste, sehr höfliche Wendung lautet <b>„Wären Sie so freundlich …?“</b> (Konjunktiv II von „sein“).<br>„Sind“ wäre die einfache Gegenwartsform, weniger höflich.",
      "en": "The fixed, very polite phrase is <b>„Wären Sie so freundlich …?“</b> (subjunctive II of „sein“).<br>„Sind“ would be the simple present tense, less polite.",
      "uk": "Стала, дуже ввічлива фраза: <b>„Wären Sie so freundlich …?“</b> (конʼюнктив II від „sein“).<br>„Sind“ було б простою теперішньою формою, менш ввічливою.",
      "ru": "Устойчивая, очень вежливая фраза: <b>„Wären Sie so freundlich …?“</b> (конъюнктив II от „sein“).<br>„Sind“ было бы простой формой настоящего времени, менее вежливой."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_003",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "Ich hätte eine Bitte, {{BLANK}} Sie kurz Zeit haben.",
      "en": "I would have a request, if you have a moment.",
      "uk": "У мене є прохання, якщо у Вас є хвилинка.",
      "ru": "У меня есть просьба, если у Вас есть минутка."
    },
    "answer": {
      "de": "wenn",
      "en": "if",
      "uk": "якщо",
      "ru": "если"
    },
    "distractors": [
      "dass",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„wenn“</b> leitet hier eine höfliche, indirekte Bedingung ein.<br>„ob“ würde eine Unsicherheit ausdrücken, keine Bedingung.",
      "en": "<b>„wenn“</b> here introduces a polite, indirect condition.<br>„ob“ would express uncertainty, not a condition.",
      "uk": "<b>„wenn“</b> тут вводить ввічливу, непряму умову.<br>„ob“ виражало б невпевненість, а не умову.",
      "ru": "<b>„wenn“</b> здесь вводит вежливое, косвенное условие.<br>„ob“ выражало бы неуверенность, а не условие."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_004",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Vergiss nicht, die Hausordnung {{BLANK}}.",
      "en": "Don't forget to read the house rules.",
      "uk": "Не забудь прочитати правила будинку.",
      "ru": "Не забудь прочитать правила дома."
    },
    "answer": {
      "de": "zu lesen",
      "en": "to read",
      "uk": "прочитати",
      "ru": "прочитать"
    },
    "distractors": [
      "lesen",
      "gelesen",
      "liest"
    ],
    "explanation": {
      "de": "Nach <b>„vergessen, etwas zu tun“</b> braucht man den Infinitiv mit <b>„zu“</b>.<br>„lesen“ ohne „zu“ wäre grammatisch falsch in dieser Position.",
      "en": "After <b>„vergessen, etwas zu tun“</b> (to forget to do something) you need the infinitive with <b>„zu“</b>.<br>„lesen“ without „zu“ would be grammatically wrong in this position.",
      "uk": "Після <b>„vergessen, etwas zu tun“</b> потрібен інфінітив із <b>„zu“</b>.<br>„lesen“ без „zu“ було б граматично неправильним у цій позиції.",
      "ru": "После <b>„vergessen, etwas zu tun“</b> нужен инфинитив с <b>„zu“</b>.<br>„lesen“ без „zu“ было бы грамматически неверным в этой позиции."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_005",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Es macht keinen Spaß, jeden Tag {{BLANK}}.",
      "en": "It's no fun to go shopping every day.",
      "uk": "Немає задоволення щодня ходити за покупками.",
      "ru": "Нет удовольствия каждый день ходить за покупками."
    },
    "answer": {
      "de": "einzukaufen",
      "en": "to go shopping",
      "uk": "ходити за покупками",
      "ru": "ходить за покупками"
    },
    "distractors": [
      "kaufen",
      "gekauft",
      "kauft"
    ],
    "explanation": {
      "de": "Bei trennbaren Verben wie <b>„einkaufen“</b> steht „zu“ zwischen Vorsilbe und Verb: <b>„einzukaufen“</b>.<br>„kaufen“ allein wäre das falsche, nicht-trennbare Verb.",
      "en": "With separable verbs like <b>„einkaufen“</b>, „zu“ goes between the prefix and the verb: <b>„einzukaufen“</b>.<br>„kaufen“ alone would be the wrong, non-separable verb.",
      "uk": "У відокремлюваних дієсловах, як <b>„einkaufen“</b>, „zu“ стоїть між префіксом і дієсловом: <b>„einzukaufen“</b>.<br>„kaufen“ саме по собі було б неправильним, невідокремлюваним дієсловом.",
      "ru": "У отделяемых глаголов, как <b>„einkaufen“</b>, „zu“ стоит между приставкой и глаголом: <b>„einzukaufen“</b>.<br>„kaufen“ само по себе было бы неправильным, неотделяемым глаголом."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_006",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Sie hat keine Zeit, uns heute {{BLANK}}.",
      "en": "She has no time to visit us today.",
      "uk": "У неї немає часу відвідати нас сьогодні.",
      "ru": "У неё нет времени навестить нас сегодня."
    },
    "answer": {
      "de": "zu besuchen",
      "en": "to visit",
      "uk": "відвідати",
      "ru": "навестить"
    },
    "distractors": [
      "besuchen",
      "besucht",
      "besuchte"
    ],
    "explanation": {
      "de": "Nach <b>„Zeit haben, etwas zu tun“</b> steht der Infinitiv mit <b>„zu“</b> am Ende.<br>„besucht“ wäre eine konjugierte Form, die hier nicht passt.",
      "en": "After <b>„Zeit haben, etwas zu tun“</b> (to have time to do something), the infinitive with <b>„zu“</b> comes at the end.<br>„besucht“ would be a conjugated form, which doesn't fit here.",
      "uk": "Після <b>„Zeit haben, etwas zu tun“</b> в кінці стоїть інфінітив із <b>„zu“</b>.<br>„besucht“ було б дієвідмінюваною формою, яка тут не підходить.",
      "ru": "После <b>„Zeit haben, etwas zu tun“</b> в конце стоит инфинитив с <b>„zu“</b>.<br>„besucht“ было бы спрягаемой формой, которая здесь не подходит."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_007",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Er spricht {{BLANK}} Deutsch als auch Englisch fließend.",
      "en": "He speaks both German and English fluently.",
      "uk": "Він вільно говорить як німецькою, так і англійською.",
      "ru": "Он свободно говорит как на немецком, так и на английском."
    },
    "answer": {
      "de": "sowohl",
      "en": "both",
      "uk": "як",
      "ru": "как"
    },
    "distractors": [
      "weder",
      "entweder",
      "nicht"
    ],
    "explanation": {
      "de": "<b>„sowohl … als auch“</b> verbindet zwei positive, gleichwertige Dinge.<br>„weder“ würde eine doppelte Verneinung einleiten, hier ist die Aussage aber positiv.",
      "en": "<b>„sowohl … als auch“</b> (both … and) connects two positive, equal things.<br>„weder“ would introduce a double negation, but the statement here is positive.",
      "uk": "<b>„sowohl … als auch“</b> (як … так і) поєднує дві позитивні, рівноцінні речі.<br>„weder“ вводило б подвійне заперечення, а тут твердження позитивне.",
      "ru": "<b>„sowohl … als auch“</b> (как … так и) соединяет две положительные, равноценные вещи.<br>„weder“ вводило бы двойное отрицание, но здесь утверждение положительное."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_008",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Ich habe {{BLANK}} Zeit noch Lust, heute auszugehen.",
      "en": "I have neither time nor desire to go out today.",
      "uk": "У мене немає ні часу, ні бажання сьогодні кудись іти.",
      "ru": "У меня нет ни времени, ни желания сегодня куда-то идти."
    },
    "answer": {
      "de": "weder",
      "en": "neither",
      "uk": "ні",
      "ru": "ни"
    },
    "distractors": [
      "sowohl",
      "nicht",
      "kein"
    ],
    "explanation": {
      "de": "<b>„weder … noch“</b> verneint zwei Dinge gleichzeitig.<br>„sowohl“ würde zwei positive Dinge verbinden, hier wird aber beides verneint.",
      "en": "<b>„weder … noch“</b> (neither … nor) negates two things at the same time.<br>„sowohl“ would connect two positive things, but here both are negated.",
      "uk": "<b>„weder … noch“</b> (ні … ні) заперечує дві речі одночасно.<br>„sowohl“ поєднувало б дві позитивні речі, а тут обидві заперечуються.",
      "ru": "<b>„weder … noch“</b> (ни … ни) отрицает две вещи одновременно.<br>„sowohl“ соединяло бы две положительные вещи, но здесь обе отрицаются."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_009",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Das Geschäft ist {{BLANK}} am Samstag noch am Sonntag geöffnet.",
      "en": "The shop is open neither on Saturday nor on Sunday.",
      "uk": "Магазин не відчинений ні в суботу, ні в неділю.",
      "ru": "Магазин не открыт ни в субботу, ни в воскресенье."
    },
    "answer": {
      "de": "weder",
      "en": "neither",
      "uk": "ні",
      "ru": "ни"
    },
    "distractors": [
      "sowohl",
      "oder",
      "auch"
    ],
    "explanation": {
      "de": "<b>„weder … noch“</b> passt, weil beide Tage ausgeschlossen werden (das Geschäft ist an keinem der beiden Tage offen).<br>„sowohl“ würde das Gegenteil ausdrücken.",
      "en": "<b>„weder … noch“</b> fits because both days are excluded (the shop is not open on either day).<br>„sowohl“ would express the opposite.",
      "uk": "<b>„weder … noch“</b> підходить, бо виключаються обидва дні (магазин не відчинений жодного з них).<br>„sowohl“ виражало б протилежне.",
      "ru": "<b>„weder … noch“</b> подходит, потому что оба дня исключаются (магазин не открыт ни в один из них).<br>„sowohl“ выражало бы противоположное."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_010",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "In der Ruhezeit {{BLANK}} man keine laute Musik hören.",
      "en": "During the quiet hours, you may not listen to loud music.",
      "uk": "Під час тихого часу не можна слухати голосну музику.",
      "ru": "Во время тихого часа нельзя слушать громкую музыку."
    },
    "answer": {
      "de": "darf",
      "en": "may",
      "uk": "можна",
      "ru": "можно"
    },
    "distractors": [
      "muss",
      "kann",
      "will"
    ],
    "explanation": {
      "de": "<b>„darf … nicht/kein-“</b> drückt ein Verbot aus (Regel der Hausordnung).<br>„muss“ würde eine Pflicht ausdrücken, kein Verbot.",
      "en": "<b>„darf … nicht/kein-“</b> expresses a prohibition (a house rule).<br>„muss“ would express an obligation, not a prohibition.",
      "uk": "<b>„darf … nicht/kein-“</b> виражає заборону (правило будинку).<br>„muss“ виражало б обовʼязок, а не заборону.",
      "ru": "<b>„darf … nicht/kein-“</b> выражает запрет (правило дома).<br>„muss“ выражало бы обязанность, а не запрет."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_011",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "Jeder Mieter {{BLANK}} die Hausordnung unterschreiben.",
      "en": "Every tenant must sign the house rules.",
      "uk": "Кожен орендар повинен підписати правила будинку.",
      "ru": "Каждый арендатор должен подписать правила дома."
    },
    "answer": {
      "de": "muss",
      "en": "must",
      "uk": "повинен",
      "ru": "должен"
    },
    "distractors": [
      "darf",
      "kann",
      "möchte"
    ],
    "explanation": {
      "de": "<b>„muss“</b> drückt eine Pflicht aus, die für alle Mieter gilt.<br>„darf“ würde nur eine Erlaubnis ausdrücken, keine Pflicht.",
      "en": "<b>„muss“</b> expresses an obligation that applies to all tenants.<br>„darf“ would only express permission, not an obligation.",
      "uk": "<b>„muss“</b> виражає обовʼязок, який стосується всіх орендарів.<br>„darf“ виражало б лише дозвіл, а не обовʼязок.",
      "ru": "<b>„muss“</b> выражает обязанность, которая касается всех арендаторов.<br>„darf“ выражало бы только разрешение, а не обязанность."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_012",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "{{BLANK}} ich Ihnen kurz helfen, den Koffer zu tragen?",
      "en": "Can I help you carry the suitcase for a moment?",
      "uk": "Чи можу я вам трохи допомогти нести валізу?",
      "ru": "Могу ли я вам немного помочь нести чемодан?"
    },
    "answer": {
      "de": "Kann",
      "en": "Can",
      "uk": "Чи можу",
      "ru": "Могу ли"
    },
    "distractors": [
      "Muss",
      "Soll",
      "Darf"
    ],
    "explanation": {
      "de": "<b>„kann“</b> bietet hier höflich eine Fähigkeit/Hilfe an.<br>„muss“ würde eine Pflicht ausdrücken, kein Angebot.",
      "en": "<b>„kann“</b> here politely offers an ability/help.<br>„muss“ would express an obligation, not an offer.",
      "uk": "<b>„kann“</b> тут ввічливо пропонує здатність/допомогу.<br>„muss“ виражало б обовʼязок, а не пропозицію.",
      "ru": "<b>„kann“</b> здесь вежливо предлагает способность/помощь.<br>„muss“ выражало бы обязанность, а не предложение."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_013",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Wir sind letzte Woche {{BLANK}} die neue Wohnung gezogen.",
      "en": "We moved into the new flat last week.",
      "uk": "Минулого тижня ми переїхали в нову квартиру.",
      "ru": "На прошлой неделе мы переехали в новую квартиру."
    },
    "answer": {
      "de": "in",
      "en": "into",
      "uk": "в",
      "ru": "в"
    },
    "distractors": [
      "an",
      "auf",
      "bei"
    ],
    "explanation": {
      "de": "Bei <b>Richtung</b> (wohin?) steht die Wechselpräposition <b>„in“</b> mit Akkusativ: „in die Wohnung“.<br>„an“ würde nicht zu „ziehen in etwas“ passen.",
      "en": "For <b>direction</b> (where to?), the two-way preposition <b>„in“</b> is used with accusative: „in die Wohnung“.<br>„an“ would not fit with „ziehen in etwas“ (to move into something).",
      "uk": "Для <b>напрямку</b> (куди?) вживають прийменник подвійного керування <b>„in“</b> зі знахідним: „in die Wohnung“.<br>„an“ не пасувало б до „ziehen in etwas“.",
      "ru": "Для <b>направления</b> (куда?) употребляют предлог двойного управления <b>„in“</b> с винительным: „in die Wohnung“.<br>„an“ не подошло бы к „ziehen in etwas“."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_014",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Der Kinderwagen steht {{BLANK}} dem Treppenhaus.",
      "en": "The stroller is standing in the stairwell.",
      "uk": "Дитяча коляска стоїть у підʼїзді.",
      "ru": "Детская коляска стоит в подъезде."
    },
    "answer": {
      "de": "in",
      "en": "in",
      "uk": "у",
      "ru": "в"
    },
    "distractors": [
      "an",
      "auf",
      "zu"
    ],
    "explanation": {
      "de": "Bei <b>Position</b> (wo?) steht die Wechselpräposition <b>„in“</b> mit Dativ: „in dem Treppenhaus“.<br>„zu“ würde nur eine Richtung ausdrücken.",
      "en": "For <b>position</b> (where?), the two-way preposition <b>„in“</b> is used with dative: „in dem Treppenhaus“.<br>„zu“ would only express a direction.",
      "uk": "Для <b>позиції</b> (де?) вживають прийменник подвійного керування <b>„in“</b> з давальним: „in dem Treppenhaus“.<br>„zu“ виражало б лише напрямок.",
      "ru": "Для <b>позиции</b> (где?) употребляют предлог двойного управления <b>„in“</b> с дательным: „in dem Treppenhaus“.<br>„zu“ выражало бы только направление."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_015",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Bitte stell den Karton nicht {{BLANK}} den Fluchtweg.",
      "en": "Please don't put the box on the escape route.",
      "uk": "Будь ласка, не став коробку на шлях евакуації.",
      "ru": "Пожалуйста, не ставь коробку на путь эвакуации."
    },
    "answer": {
      "de": "auf",
      "en": "on",
      "uk": "на",
      "ru": "на"
    },
    "distractors": [
      "an",
      "in",
      "bei"
    ],
    "explanation": {
      "de": "Bei einer Handlung mit Richtung (wohin stellen?) steht die Wechselpräposition <b>„auf“</b> mit Akkusativ.<br>„an“ würde eine andere Position beschreiben, nicht „auf einer Fläche“.",
      "en": "For an action with direction (where to put something?), the two-way preposition <b>„auf“</b> is used with accusative.<br>„an“ would describe a different position, not „on a surface“.",
      "uk": "Для дії з напрямком (куди поставити?) вживають прийменник подвійного керування <b>„auf“</b> зі знахідним.<br>„an“ описував би іншу позицію, не „на поверхні“.",
      "ru": "Для действия с направлением (куда поставить?) употребляют предлог двойного управления <b>„auf“</b> с винительным.<br>„an“ описывал бы другую позицию, не „на поверхности“."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_016",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Ich muss {{BLANK}} beeilen, sonst komme ich zu spät.",
      "en": "I have to hurry, otherwise I'll be late.",
      "uk": "Мені треба поспішити, інакше я запізнюся.",
      "ru": "Мне нужно поторопиться, иначе я опоздаю."
    },
    "answer": {
      "de": "mich",
      "en": "myself",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "mir",
      "dich",
      "sich"
    ],
    "explanation": {
      "de": "<b>„sich beeilen“</b> ist ein reflexives Verb mit Akkusativ: 1. Person Singular = <b>„mich“</b>.<br>„mir“ wäre der Dativ, der hier nicht passt.",
      "en": "<b>„sich beeilen“</b> (to hurry) is a reflexive verb with accusative: 1st person singular = <b>„mich“</b>.<br>„mir“ would be the dative, which doesn't fit here.",
      "uk": "<b>„sich beeilen“</b> — зворотне дієслово зі знахідним відмінком: 1 особа однини = <b>„mich“</b>.<br>„mir“ був би давальний відмінок, який тут не підходить.",
      "ru": "<b>„sich beeilen“</b> — возвратный глагол с винительным падежом: 1 лицо единственного числа = <b>„mich“</b>.<br>„mir“ был бы дательный падеж, который здесь не подходит."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_017",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Warum ärgerst du {{BLANK}} schon wieder über die Nachbarn?",
      "en": "Why are you getting annoyed with the neighbours again?",
      "uk": "Чому ти знову сердишся на сусідів?",
      "ru": "Почему ты снова сердишься на соседей?"
    },
    "answer": {
      "de": "dich",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dir",
      "sich",
      "euch"
    ],
    "explanation": {
      "de": "<b>„sich ärgern“</b> braucht das Reflexivpronomen im Akkusativ: 2. Person Singular = <b>„dich“</b>.<br>„dir“ wäre der Dativ, der hier grammatisch falsch ist.",
      "en": "<b>„sich ärgern“</b> (to get annoyed) needs the reflexive pronoun in the accusative: 2nd person singular = <b>„dich“</b>.<br>„dir“ would be the dative, which is grammatically wrong here.",
      "uk": "<b>„sich ärgern“</b> потребує зворотного займенника у знахідному: 2 особа однини = <b>„dich“</b>.<br>„dir“ був би давальний, що тут граматично неправильно.",
      "ru": "<b>„sich ärgern“</b> требует возвратного местоимения в винительном: 2 лицо единственного числа = <b>„dich“</b>.<br>„dir“ был бы дательный, что здесь грамматически неверно."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_018",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Die Kinder freuen {{BLANK}} sehr auf die Ferien.",
      "en": "The children are very happy about the holidays.",
      "uk": "Діти дуже радіють канікулам.",
      "ru": "Дети очень радуются каникулам."
    },
    "answer": {
      "de": "sich",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ihnen",
      "ihm",
      "dich"
    ],
    "explanation": {
      "de": "<b>„sich freuen“</b> braucht das Reflexivpronomen im Akkusativ: 3. Person Plural = <b>„sich“</b>.<br>„ihnen“ wäre der Dativ Plural, der hier nicht passt.",
      "en": "<b>„sich freuen“</b> (to be happy) needs the reflexive pronoun in the accusative: 3rd person plural = <b>„sich“</b>.<br>„ihnen“ would be the dative plural, which doesn't fit here.",
      "uk": "<b>„sich freuen“</b> потребує зворотного займенника у знахідному: 3 особа множини = <b>„sich“</b>.<br>„ihnen“ був би давальний множини, який тут не підходить.",
      "ru": "<b>„sich freuen“</b> требует возвратного местоимения в винительном: 3 лицо множественного числа = <b>„sich“</b>.<br>„ihnen“ был бы дательный падеж множественного числа, который здесь не подходит."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_019",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Das war kein Fehler, {{BLANK}} eine bewusste Entscheidung.",
      "en": "That was not a mistake, but a deliberate decision.",
      "uk": "Це була не помилка, а свідоме рішення.",
      "ru": "Это была не ошибка, а осознанное решение."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а",
      "ru": "а"
    },
    "distractors": [
      "aber",
      "oder",
      "und"
    ],
    "explanation": {
      "de": "<b>„sondern“</b> steht nach einer Verneinung, um einen Gegensatz auszudrücken.<br>„aber“ würde ohne vorherige Verneinung stehen und passt hier nicht.",
      "en": "<b>„sondern“</b> (but rather) follows a negation to express a contrast.<br>„aber“ would stand without a preceding negation and doesn't fit here.",
      "uk": "<b>„sondern“</b> вживається після заперечення для вираження протиставлення.<br>„aber“ вживалося б без попереднього заперечення і тут не підходить.",
      "ru": "<b>„sondern“</b> употребляется после отрицания для выражения противопоставления.<br>„aber“ употреблялось бы без предшествующего отрицания и здесь не подходит."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_020",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Der Mann, {{BLANK}} neben mir wohnt, ist sehr freundlich.",
      "en": "The man who lives next to me is very friendly.",
      "uk": "Чоловік, який живе поруч зі мною, дуже привітний.",
      "ru": "Мужчина, который живёт рядом со мной, очень дружелюбный."
    },
    "answer": {
      "de": "der",
      "en": "who",
      "uk": "який",
      "ru": "который"
    },
    "distractors": [
      "den",
      "dem",
      "die"
    ],
    "explanation": {
      "de": "Das Relativpronomen ist Subjekt des Nebensatzes (er wohnt), deshalb steht es im <b>Nominativ</b>: <b>„der“</b>.<br>„den“ wäre der Akkusativ, der hier nicht passt.",
      "en": "The relative pronoun is the subject of the clause (he lives), so it is in the <b>nominative</b>: <b>„der“</b>.<br>„den“ would be the accusative, which doesn't fit here.",
      "uk": "Відносний займенник є підметом підрядного речення (він живе), тому стоїть у <b>називному</b>: <b>„der“</b>.<br>„den“ був би знахідним, який тут не підходить.",
      "ru": "Относительное местоимение является подлежащим придаточного (он живёт), поэтому стоит в <b>именительном</b>: <b>„der“</b>.<br>„den“ был бы винительным, который здесь не подходит."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_021",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Das ist nicht meine Reklamation, {{BLANK}} die von meiner Kollegin.",
      "en": "That's not my complaint, but my colleague's.",
      "uk": "Це не моя рекламація, а моєї колеги.",
      "ru": "Это не моя рекламация, а моей коллеги."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а",
      "ru": "а"
    },
    "distractors": [
      "aber",
      "oder",
      "doch"
    ],
    "explanation": {
      "de": "<b>„sondern“</b> korrigiert eine vorherige Verneinung durch die richtige Alternative.<br>„aber“ würde hier keinen echten Gegensatz zur Verneinung ausdrücken.",
      "en": "<b>„sondern“</b> corrects a previous negation with the correct alternative.<br>„aber“ would not express a real contrast to the negation here.",
      "uk": "<b>„sondern“</b> виправляє попереднє заперечення правильною альтернативою.<br>„aber“ тут не виражало б справжнього протиставлення запереченню.",
      "ru": "<b>„sondern“</b> исправляет предыдущее отрицание правильной альтернативой.<br>„aber“ здесь не выражало бы настоящего противопоставления отрицанию."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_022",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Die Rechnung, {{BLANK}} ich letzte Woche bekommen habe, war falsch.",
      "en": "The invoice that I received last week was wrong.",
      "uk": "Рахунок, який я отримав минулого тижня, був неправильним.",
      "ru": "Счёт, который я получил на прошлой неделе, был неправильным."
    },
    "answer": {
      "de": "die",
      "en": "that",
      "uk": "який",
      "ru": "который"
    },
    "distractors": [
      "der",
      "dem",
      "den"
    ],
    "explanation": {
      "de": "Das Relativpronomen ist Akkusativobjekt (ich habe die Rechnung bekommen), feminin Singular Akkusativ = <b>„die“</b>.<br>„der“ wäre Dativ oder Nominativ, hier grammatisch falsch.",
      "en": "The relative pronoun is the accusative object (I received the invoice), feminine singular accusative = <b>„die“</b>.<br>„der“ would be dative or nominative, grammatically wrong here.",
      "uk": "Відносний займенник — знахідний додаток (я отримав рахунок), жіночий рід однини, знахідний = <b>„die“</b>.<br>„der“ був би давальним чи називним, тут граматично неправильно.",
      "ru": "Относительное местоимение — винительное дополнение (я получил счёт), женский род единственного числа, винительный = <b>„die“</b>.<br>„der“ был бы дательным или именительным, здесь грамматически неверно."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_023",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Das Kleid, {{BLANK}} ich umtauschen möchte, ist zu klein.",
      "en": "The dress that I would like to exchange is too small.",
      "uk": "Плаття, яке я хочу обміняти, замале.",
      "ru": "Платье, которое я хочу обменять, слишком маленькое."
    },
    "answer": {
      "de": "das",
      "en": "that",
      "uk": "яке",
      "ru": "которое"
    },
    "distractors": [
      "der",
      "dem",
      "den"
    ],
    "explanation": {
      "de": "Neutrum Singular Akkusativ des Relativpronomens ist <b>„das“</b> (gleiche Form wie Nominativ bei Neutrum).<br>„den“ wäre maskulin Akkusativ und passt nicht zu „das Kleid“.",
      "en": "The neuter singular accusative relative pronoun is <b>„das“</b> (same form as nominative for neuter).<br>„den“ would be masculine accusative and doesn't fit „das Kleid“.",
      "uk": "Середній рід однини, знахідний відмінок відносного займенника — <b>„das“</b> (та сама форма, що й називний для середнього роду).<br>„den“ був би чоловічим родом знахідного і не пасує до „das Kleid“.",
      "ru": "Средний род единственного числа, винительный падеж относительного местоимения — <b>„das“</b> (та же форма, что и именительный для среднего рода).<br>„den“ был бы мужским родом винительного и не подходит к „das Kleid“."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_024",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Die Nachbarn, {{BLANK}} wir zum Fest eingeladen haben, kommen um acht.",
      "en": "The neighbours whom we invited to the party are coming at eight.",
      "uk": "Сусіди, яких ми запросили на свято, прийдуть о восьмій.",
      "ru": "Соседи, которых мы пригласили на праздник, придут в восемь."
    },
    "answer": {
      "de": "die",
      "en": "whom",
      "uk": "яких",
      "ru": "которых"
    },
    "distractors": [
      "der",
      "denen",
      "den"
    ],
    "explanation": {
      "de": "Plural Akkusativ des Relativpronomens ist <b>„die“</b> (gleich für alle Genera im Plural).<br>„denen“ wäre der Dativ Plural, der hier nicht passt.",
      "en": "The plural accusative relative pronoun is <b>„die“</b> (same for all genders in the plural).<br>„denen“ would be the dative plural, which doesn't fit here.",
      "uk": "Множина, знахідний відмінок відносного займенника — <b>„die“</b> (однакова форма для всіх родів у множині).<br>„denen“ був би давальним множини, який тут не підходить.",
      "ru": "Множественное число, винительный падеж относительного местоимения — <b>„die“</b> (одинаковая форма для всех родов во множественном числе).<br>„denen“ был бы дательным падежом множественного числа, который здесь не подходит."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_025",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Er ist nicht ans Telefon gegangen, er {{BLANK}} noch bei der Arbeit sein.",
      "en": "He didn't answer the phone, he might still be at work.",
      "uk": "Він не відповів на дзвінок, він, мабуть, ще на роботі.",
      "ru": "Он не ответил на звонок, он, наверное, ещё на работе."
    },
    "answer": {
      "de": "dürfte",
      "en": "might",
      "uk": "мабуть",
      "ru": "наверное"
    },
    "distractors": [
      "muss",
      "kann",
      "will"
    ],
    "explanation": {
      "de": "<b>„dürfte“</b> (Konjunktiv II von „dürfen“) drückt eine vorsichtige Vermutung aus.<br>„muss“ wäre eine viel sicherere Aussage, fast eine Tatsache.",
      "en": "<b>„dürfte“</b> (subjunctive II of „dürfen“) expresses a cautious assumption.<br>„muss“ would be a much more certain statement, almost a fact.",
      "uk": "<b>„dürfte“</b> (конʼюнктив II від „dürfen“) виражає обережне припущення.<br>„muss“ було б набагато впевненішим твердженням, майже фактом.",
      "ru": "<b>„dürfte“</b> (конъюнктив II от „dürfen“) выражает осторожное предположение.<br>„muss“ было бы намного более уверенным утверждением, почти фактом."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_026",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Das Girokonto {{BLANK}} schon eröffnet sein, er hat die Karte schon bekommen.",
      "en": "The account should already be opened, he's already received the card.",
      "uk": "Рахунок, мабуть, уже відкритий, він уже отримав картку.",
      "ru": "Счёт, наверное, уже открыт, он уже получил карту."
    },
    "answer": {
      "de": "müsste",
      "en": "should",
      "uk": "мабуть",
      "ru": "наверное"
    },
    "distractors": [
      "dürfte",
      "kann",
      "soll"
    ],
    "explanation": {
      "de": "<b>„müsste“</b> (Konjunktiv II von „müssen“) drückt eine logische, ziemlich sichere Vermutung aus.<br>„soll“ würde einen Auftrag oder ein Gerücht ausdrücken, keine eigene Vermutung.",
      "en": "<b>„müsste“</b> (subjunctive II of „müssen“) expresses a logical, fairly certain assumption.<br>„soll“ would express an order or a rumour, not one's own assumption.",
      "uk": "<b>„müsste“</b> (конʼюнктив II від „müssen“) виражає логічне, доволі впевнене припущення.<br>„soll“ виражало б доручення чи чутку, а не власне припущення.",
      "ru": "<b>„müsste“</b> (конъюнктив II от „müssen“) выражает логичное, довольно уверенное предположение.<br>„soll“ выражало бы поручение или слух, а не собственное предположение."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_027",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Bei diesem Wetter {{BLANK}} es auf dem Ökohof heute sehr voll sein.",
      "en": "In this weather, it could be very crowded at the organic farm today.",
      "uk": "У таку погоду на органічній фермі сьогодні, можливо, дуже людно.",
      "ru": "В такую погоду на органической ферме сегодня, возможно, очень многолюдно."
    },
    "answer": {
      "de": "könnte",
      "en": "could",
      "uk": "можливо",
      "ru": "возможно"
    },
    "distractors": [
      "muss",
      "darf",
      "soll"
    ],
    "explanation": {
      "de": "<b>„könnte“</b> (Konjunktiv II von „können“) drückt eine unsichere Möglichkeit aus.<br>„muss“ wäre eine viel zu sichere Aussage für eine reine Vermutung.",
      "en": "<b>„könnte“</b> (subjunctive II of „können“) expresses an uncertain possibility.<br>„muss“ would be far too certain a statement for a mere assumption.",
      "uk": "<b>„könnte“</b> (конʼюнктив II від „können“) виражає непевну можливість.<br>„muss“ було б занадто впевненим твердженням для простого припущення.",
      "ru": "<b>„könnte“</b> (конъюнктив II от „können“) выражает неопределённую возможность.<br>„muss“ было бы слишком уверенным утверждением для простого предположения."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_028",
    "cat": "genitiv",
    "sentence": {
      "de": "Das Auto {{BLANK}} Nachbarn steht schon wieder vor unserer Tür.",
      "en": "Our neighbour's car is parked in front of our door again.",
      "uk": "Автомобіль сусіда знову стоїть перед нашими дверима.",
      "ru": "Автомобиль соседа снова стоит перед нашей дверью."
    },
    "answer": {
      "de": "des",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dem",
      "den",
      "der"
    ],
    "explanation": {
      "de": "Maskulin Singular Genitiv des bestimmten Artikels ist <b>„des“</b>, das Nomen bekommt „-n“: „des Nachbarn“.<br>„dem“ wäre der Dativ, der hier nicht passt.",
      "en": "The masculine singular genitive of the definite article is <b>„des“</b>, the noun gets „-n“: „des Nachbarn“.<br>„dem“ would be the dative, which doesn't fit here.",
      "uk": "Чоловічий рід однини, родовий відмінок означеного артикля — <b>„des“</b>, іменник отримує „-n“: „des Nachbarn“.<br>„dem“ був би давальним, який тут не підходить.",
      "ru": "Мужской род единственного числа, родительный падеж определённого артикля — <b>„des“</b>, существительное получает „-n“: „des Nachbarn“.<br>„dem“ был бы дательным, который здесь не подходит."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_029",
    "cat": "genitiv",
    "sentence": {
      "de": "Die Kosten {{BLANK}} Versicherung sind in diesem Jahr gestiegen.",
      "en": "The costs of the insurance have risen this year.",
      "uk": "Вартість страхування цього року зросла.",
      "ru": "Стоимость страхования в этом году выросла."
    },
    "answer": {
      "de": "der",
      "en": "of the",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "die",
      "den",
      "dem"
    ],
    "explanation": {
      "de": "Feminin Singular Genitiv des bestimmten Artikels ist <b>„der“</b> (gleiche Form wie Dativ Feminin).<br>„die“ wäre der Nominativ oder Akkusativ, der hier nicht passt.",
      "en": "The feminine singular genitive of the definite article is <b>„der“</b> (same form as feminine dative).<br>„die“ would be the nominative or accusative, which doesn't fit here.",
      "uk": "Жіночий рід однини, родовий відмінок означеного артикля — <b>„der“</b> (та сама форма, що й давальний жіночого роду).<br>„die“ був би називним чи знахідним, який тут не підходить.",
      "ru": "Женский род единственного числа, родительный падеж определённого артикля — <b>„der“</b> (та же форма, что и дательный женского рода).<br>„die“ был бы именительным или винительным, который здесь не подходит."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_030",
    "cat": "genitiv",
    "sentence": {
      "de": "Wegen {{BLANK}} Diebstahls musste er die Karte sperren lassen.",
      "en": "Because of the theft, he had to have the card blocked.",
      "uk": "Через крадіжку йому довелося заблокувати картку.",
      "ru": "Из-за кражи ему пришлось заблокировать карту."
    },
    "answer": {
      "de": "des",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dem",
      "den",
      "der"
    ],
    "explanation": {
      "de": "Die Präposition <b>„wegen“</b> braucht den Genitiv: „wegen des Diebstahls“.<br>„dem“ wäre der Dativ, der in der Standardsprache mit „wegen“ seltener ist.",
      "en": "The preposition <b>„wegen“</b> (because of) requires the genitive: „wegen des Diebstahls“.<br>„dem“ would be the dative, which is less common with „wegen“ in standard language.",
      "uk": "Прийменник <b>„wegen“</b> (через) вимагає родового відмінка: „wegen des Diebstahls“.<br>„dem“ був би давальним, який рідше вживається з „wegen“ у літературній мові.",
      "ru": "Предлог <b>„wegen“</b> (из-за) требует родительного падежа: „wegen des Diebstahls“.<br>„dem“ был бы дательным, который реже употребляется с „wegen“ в литературном языке."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_031",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "Er hat die Versicherung gekündigt, {{BLANK}} sie sehr günstig war.",
      "en": "He cancelled the insurance although it was very cheap.",
      "uk": "Він розірвав страхування, хоча воно було дуже дешевим.",
      "ru": "Он расторг страхование, хотя оно было очень дешёвым."
    },
    "answer": {
      "de": "obwohl",
      "en": "although",
      "uk": "хоча",
      "ru": "хотя"
    },
    "distractors": [
      "weil",
      "damit",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„obwohl“</b> drückt einen Gegensatz aus (kündigen, obwohl es günstig war).<br>„weil“ würde einen Grund nennen, der hier aber keinen Sinn ergibt.",
      "en": "<b>„obwohl“</b> (although) expresses a contrast (cancelling although it was cheap).<br>„weil“ would give a reason, which doesn't make sense here.",
      "uk": "<b>„obwohl“</b> (хоча) виражає протиставлення (розірвав, хоча було дешево).<br>„weil“ називало б причину, що тут не має сенсу.",
      "ru": "<b>„obwohl“</b> (хотя) выражает противопоставление (расторг, хотя было дёшево).<br>„weil“ называло бы причину, что здесь не имеет смысла."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_032",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "{{BLANK}} es draußen sehr kalt war, sind wir spazieren gegangen.",
      "en": "Although it was very cold outside, we went for a walk.",
      "uk": "Хоча надворі було дуже холодно, ми пішли на прогулянку.",
      "ru": "Хотя на улице было очень холодно, мы пошли на прогулку."
    },
    "answer": {
      "de": "Obwohl",
      "en": "Although",
      "uk": "Хоча",
      "ru": "Хотя"
    },
    "distractors": [
      "Weil",
      "Damit",
      "Falls"
    ],
    "explanation": {
      "de": "<b>„Obwohl“</b> leitet einen Nebensatz mit Gegensatz ein (spazieren gehen trotz Kälte).<br>„Weil“ würde einen Grund für den Spaziergang nennen, was hier unlogisch wäre.",
      "en": "<b>„Obwohl“</b> (although) introduces a clause of contrast (going for a walk despite the cold).<br>„Weil“ would give a reason for the walk, which would be illogical here.",
      "uk": "<b>„Obwohl“</b> (хоча) вводить підрядне речення протиставлення (прогулянка попри холод).<br>„Weil“ називало б причину прогулянки, що тут було б нелогічно.",
      "ru": "<b>„Obwohl“</b> (хотя) вводит придаточное предложение противопоставления (прогулка несмотря на холод).<br>„Weil“ называло бы причину прогулки, что здесь было бы нелогично."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_033",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "Sie hat die Prüfung bestanden, {{BLANK}} sie kaum Zeit zum Lernen hatte.",
      "en": "She passed the exam although she barely had time to study.",
      "uk": "Вона склала іспит, хоча в неї майже не було часу вчитися.",
      "ru": "Она сдала экзамен, хотя у неё почти не было времени учиться."
    },
    "answer": {
      "de": "obwohl",
      "en": "although",
      "uk": "хоча",
      "ru": "хотя"
    },
    "distractors": [
      "weil",
      "damit",
      "ob"
    ],
    "explanation": {
      "de": "<b>„obwohl“</b> beschreibt einen unerwarteten Gegensatz (bestehen trotz wenig Lernzeit).<br>„damit“ würde ein Ziel ausdrücken, was hier keinen Sinn ergibt.",
      "en": "<b>„obwohl“</b> describes an unexpected contrast (passing despite little study time).<br>„damit“ would express a purpose, which doesn't make sense here.",
      "uk": "<b>„obwohl“</b> описує несподіване протиставлення (склала, попри мало часу на навчання).<br>„damit“ виражало б мету, що тут не має сенсу.",
      "ru": "<b>„obwohl“</b> описывает неожиданное противопоставление (сдала, несмотря на мало времени на учёбу).<br>„damit“ выражало бы цель, что здесь не имеет смысла."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_034",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Die Überweisung ist nicht angekommen, {{BLANK}} rufe ich die Bank an.",
      "en": "The transfer hasn't arrived, that's why I'm calling the bank.",
      "uk": "Переказ не надійшов, тому я дзвоню в банк.",
      "ru": "Перевод не пришёл, поэтому я звоню в банк."
    },
    "answer": {
      "de": "deshalb",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "obwohl",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„deshalb“</b> nennt die Folge eines Ereignisses.<br>„obwohl“ würde einen Gegensatz ausdrücken, keine Folge.",
      "en": "<b>„deshalb“</b> (that's why) states the consequence of an event.<br>„obwohl“ would express a contrast, not a consequence.",
      "uk": "<b>„deshalb“</b> (тому) називає наслідок події.<br>„obwohl“ виражало б протиставлення, а не наслідок.",
      "ru": "<b>„deshalb“</b> (поэтому) называет следствие события.<br>„obwohl“ выражало бы противопоставление, а не следствие."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_035",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Der Schaden war klein, {{BLANK}} musste sie die Versicherung informieren.",
      "en": "The damage was small; nevertheless, she had to inform the insurance.",
      "uk": "Шкода була невеликою, проте їй довелося повідомити страхову.",
      "ru": "Ущерб был небольшим, однако ей пришлось сообщить страховой."
    },
    "answer": {
      "de": "trotzdem",
      "en": "nevertheless",
      "uk": "проте",
      "ru": "однако"
    },
    "distractors": [
      "deshalb",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„trotzdem“</b> drückt einen unerwarteten Gegensatz aus (informieren, obwohl der Schaden klein war).<br>„deshalb“ würde eine logische Folge ausdrücken, kein Gegensatz.",
      "en": "<b>„trotzdem“</b> (nevertheless) expresses an unexpected contrast (informing despite the damage being small).<br>„deshalb“ would express a logical consequence, not a contrast.",
      "uk": "<b>„trotzdem“</b> (проте) виражає несподіване протиставлення (повідомила, хоча шкода була малою).<br>„deshalb“ виражало б логічний наслідок, а не протиставлення.",
      "ru": "<b>„trotzdem“</b> (однако) выражает неожиданное противопоставление (сообщила, хотя ущерб был малым).<br>„deshalb“ выражало бы логическое следствие, а не противопоставление."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_036",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Ich habe die Schadensmeldung sofort geschickt, {{BLANK}} die Versicherung schnell reagieren kann.",
      "en": "I sent the damage report immediately so that the insurance can react quickly.",
      "uk": "Я негайно надіслав повідомлення про шкоду, щоб страхова могла швидко реагувати.",
      "ru": "Я немедленно отправил сообщение об ущербе, чтобы страховая могла быстро отреагировать."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "trotzdem",
      "deshalb",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„damit“</b> nennt das Ziel des sofortigen Sendens.<br>„trotzdem“ würde einen Gegensatz ausdrücken, kein Ziel.",
      "en": "<b>„damit“</b> (so that) states the purpose of sending it immediately.<br>„trotzdem“ would express a contrast, not a purpose.",
      "uk": "<b>„damit“</b> (щоб) називає мету негайного надсилання.<br>„trotzdem“ виражало б протиставлення, а не мету.",
      "ru": "<b>„damit“</b> (чтобы) называет цель немедленной отправки.<br>„trotzdem“ выражало бы противопоставление, а не цель."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_037",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Früher {{BLANK}} ich mich nur von Fast Food, heute koche ich selbst.",
      "en": "In the past, I only ate fast food, today I cook myself.",
      "uk": "Раніше я харчувався лише фаст-фудом, сьогодні я готую сам.",
      "ru": "Раньше я питался только фастфудом, сегодня я готовлю сам."
    },
    "answer": {
      "de": "ernährte",
      "en": "ate",
      "uk": "харчувався",
      "ru": "питался"
    },
    "distractors": [
      "ernähre",
      "habe ernährt",
      "ernähren"
    ],
    "explanation": {
      "de": "Mit <b>„früher“</b> braucht man das Präteritum in schriftlichen/berichtenden Texten: <b>„ernährte“</b>.<br>„ernähre“ wäre Präsens und passt nicht zu „früher“.",
      "en": "With <b>„früher“</b> (in the past), you need the simple past in written/narrative texts: <b>„ernährte“</b>.<br>„ernähre“ would be present tense and doesn't fit with „früher“.",
      "uk": "Із <b>„früher“</b> (раніше) у писемних/розповідних текстах потрібен претерит: <b>„ernährte“</b>.<br>„ernähre“ був би теперішнім часом і не пасує до „früher“.",
      "ru": "С <b>„früher“</b> (раньше) в письменных/повествовательных текстах нужен претерит: <b>„ernährte“</b>.<br>„ernähre“ было бы настоящим временем и не подходит к „früher“."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_038",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Seine Ernährung {{BLANK}} früher fast nur aus Brot und Wurst.",
      "en": "His diet consisted almost only of bread and sausage in the past.",
      "uk": "Його харчування раніше складалося майже лише з хліба й ковбаси.",
      "ru": "Его питание раньше состояло почти только из хлеба и колбасы."
    },
    "answer": {
      "de": "bestand",
      "en": "consisted",
      "uk": "складалося",
      "ru": "состояло"
    },
    "distractors": [
      "besteht",
      "hat bestanden",
      "bestehen"
    ],
    "explanation": {
      "de": "<b>„bestand“</b> ist das Präteritum von „bestehen aus“ und passt zu „früher“.<br>„besteht“ wäre Präsens und würde nicht zur Vergangenheit passen.",
      "en": "<b>„bestand“</b> is the simple past of „bestehen aus“ (to consist of) and fits with „früher“.<br>„besteht“ would be present tense and would not fit the past.",
      "uk": "<b>„bestand“</b> — претерит від „bestehen aus“ і пасує до „früher“.<br>„besteht“ був би теперішнім часом і не пасував би до минулого.",
      "ru": "<b>„bestand“</b> — претерит от „bestehen aus“ и подходит к „früher“.<br>„besteht“ было бы настоящим временем и не подходило бы к прошлому."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_039",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} als Kinder oft bei den Großeltern.",
      "en": "As children, we often lived with our grandparents.",
      "uk": "У дитинстві ми часто жили в бабусі й дідуся.",
      "ru": "В детстве мы часто жили у бабушки и дедушки."
    },
    "answer": {
      "de": "wohnten",
      "en": "lived",
      "uk": "жили",
      "ru": "жили"
    },
    "distractors": [
      "wohnen",
      "haben gewohnt",
      "wohnt"
    ],
    "explanation": {
      "de": "Mit <b>„als Kinder“</b> (Rückblick) benutzt man das Präteritum: <b>„wohnten“</b>.<br>„wohnen“ wäre Präsens, was hier zeitlich nicht passt.",
      "en": "With <b>„als Kinder“</b> (looking back), you use the simple past: <b>„wohnten“</b>.<br>„wohnen“ would be present tense, which doesn't fit the time frame here.",
      "uk": "Із <b>„als Kinder“</b> (спогад) вживають претерит: <b>„wohnten“</b>.<br>„wohnen“ був би теперішнім часом, що тут не відповідає часовим рамкам.",
      "ru": "С <b>„als Kinder“</b> (воспоминание) употребляют претерит: <b>„wohnten“</b>.<br>„wohnen“ было бы настоящим временем, что здесь не соответствует временным рамкам."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_040",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Der Automat war kaputt, {{BLANK}} konnte ich keinen Kaffee kaufen.",
      "en": "The vending machine was broken, that's why I couldn't buy coffee.",
      "uk": "Автомат був зламаний, тому я не міг купити каву.",
      "ru": "Автомат был сломан, поэтому я не мог купить кофе."
    },
    "answer": {
      "de": "deshalb",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "trotzdem",
      "obwohl",
      "damit"
    ],
    "explanation": {
      "de": "<b>„deshalb“</b> nennt die logische Folge (kaputt → kein Kaffee).<br>„trotzdem“ würde einen Gegensatz ausdrücken, keine Folge.",
      "en": "<b>„deshalb“</b> states the logical consequence (broken → no coffee).<br>„trotzdem“ would express a contrast, not a consequence.",
      "uk": "<b>„deshalb“</b> називає логічний наслідок (зламаний → немає кави).<br>„trotzdem“ виражало б протиставлення, а не наслідок.",
      "ru": "<b>„deshalb“</b> называет логическое следствие (сломан → нет кофе).<br>„trotzdem“ выражало бы противопоставление, а не следствие."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_041",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Er isst nicht regelmäßig, {{BLANK}} ist er sehr gesund.",
      "en": "He doesn't eat regularly; nevertheless, he is very healthy.",
      "uk": "Він не їсть регулярно, проте він дуже здоровий.",
      "ru": "Он не ест регулярно, однако он очень здоров."
    },
    "answer": {
      "de": "trotzdem",
      "en": "nevertheless",
      "uk": "проте",
      "ru": "однако"
    },
    "distractors": [
      "deswegen",
      "deshalb",
      "damit"
    ],
    "explanation": {
      "de": "<b>„trotzdem“</b> drückt einen unerwarteten Gegensatz aus.<br>„deswegen“ würde eine logische Folge ausdrücken, was hier keinen Sinn ergibt.",
      "en": "<b>„trotzdem“</b> expresses an unexpected contrast.<br>„deswegen“ would express a logical consequence, which doesn't make sense here.",
      "uk": "<b>„trotzdem“</b> виражає несподіване протиставлення.<br>„deswegen“ виражало б логічний наслідок, що тут не має сенсу.",
      "ru": "<b>„trotzdem“</b> выражает неожиданное противопоставление.<br>„deswegen“ выражало бы логическое следствие, что здесь не имеет смысла."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_042",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Wir haben unsere Essgewohnheiten verändert, {{BLANK}} fühlen wir uns fitter.",
      "en": "We have changed our eating habits, that's why we feel fitter.",
      "uk": "Ми змінили свої харчові звички, тому почуваємося краще.",
      "ru": "Мы изменили свои привычки питания, поэтому чувствуем себя лучше."
    },
    "answer": {
      "de": "deswegen",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "trotzdem",
      "obwohl",
      "damit"
    ],
    "explanation": {
      "de": "<b>„deswegen“</b> (wie „deshalb“) nennt die Folge einer Veränderung.<br>„trotzdem“ würde hier einen unpassenden Gegensatz ausdrücken.",
      "en": "<b>„deswegen“</b> (like „deshalb“) states the consequence of a change.<br>„trotzdem“ would express an unsuitable contrast here.",
      "uk": "<b>„deswegen“</b> (як і „deshalb“) називає наслідок зміни.<br>„trotzdem“ тут виражало б недоречне протиставлення.",
      "ru": "<b>„deswegen“</b> (как и „deshalb“) называет следствие изменения.<br>„trotzdem“ здесь выражало бы неуместное противопоставление."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_043",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Die Ergebnisse {{BLANK}} der Umfrage waren überraschend.",
      "en": "The results of the survey were surprising.",
      "uk": "Результати опитування були дивовижними.",
      "ru": "Результаты опроса были удивительными."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "die",
      "den"
    ],
    "explanation": {
      "de": "In der gesprochenen Sprache ersetzt man den Genitiv oft durch <b>„von“ + Dativ</b>: „von der Umfrage“.<br>„der“ allein (ohne „von“) wäre hier der klassische Genitiv, aber die Aufgabe testet die Alternative.",
      "en": "In spoken language, the genitive is often replaced by <b>„von“ + dative</b>: „von der Umfrage“.<br>„der“ alone (without „von“) would be the classic genitive here.",
      "uk": "У розмовній мові родовий часто замінюють на <b>„von“ + давальний</b>: „von der Umfrage“.<br>„der“ саме по собі (без „von“) було б класичним родовим.",
      "ru": "В разговорной речи родительный падеж часто заменяют на <b>„von“ + дательный</b>: „von der Umfrage“.<br>„der“ само по себе (без „von“) было бы классическим родительным."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_044",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Der Preis {{BLANK}} dem Snack war viel zu hoch.",
      "en": "The price of the snack was much too high.",
      "uk": "Ціна снеку була занадто високою.",
      "ru": "Цена снека была слишком высокой."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "den",
      "des"
    ],
    "explanation": {
      "de": "<b>„von“ + Dativ</b> ist die gesprochene Alternative zum Genitiv: „von dem Snack“ (= „des Snacks“).<br>„des“ wäre der klassische Genitiv, hier wird aber die Alternative getestet.",
      "en": "<b>„von“ + dative</b> is the spoken alternative to the genitive: „von dem Snack“ (= „des Snacks“).<br>„des“ would be the classic genitive; here the alternative is being tested.",
      "uk": "<b>„von“ + давальний</b> — розмовна альтернатива родовому: „von dem Snack“ (= „des Snacks“).<br>„des“ був би класичним родовим, а тут перевіряється альтернатива.",
      "ru": "<b>„von“ + дательный</b> — разговорная альтернатива родительному: „von dem Snack“ (= „des Snacks“).<br>„des“ был бы классическим родительным, а здесь проверяется альтернатива."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_045",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Die Größe {{BLANK}} der Portion war viel zu groß für mich.",
      "en": "The size of the portion was much too big for me.",
      "uk": "Розмір порції був для мене занадто великим.",
      "ru": "Размер порции был для меня слишком большим."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "die",
      "den"
    ],
    "explanation": {
      "de": "<b>„von“ + Dativ</b> ersetzt hier den Genitiv in der Alltagssprache: „von der Portion“.<br>„die“ wäre der Nominativ/Akkusativ und passt hier grammatisch nicht.",
      "en": "<b>„von“ + dative</b> replaces the genitive here in everyday language: „von der Portion“.<br>„die“ would be nominative/accusative and doesn't fit grammatically here.",
      "uk": "<b>„von“ + давальний</b> тут замінює родовий у побутовій мові: „von der Portion“.<br>„die“ був би називним/знахідним і граматично тут не підходить.",
      "ru": "<b>„von“ + дательный</b> здесь заменяет родительный падеж в повседневной речи: „von der Portion“.<br>„die“ был бы именительным/винительным и грамматически здесь не подходит."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_046",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "{{BLANK}} ich in Deutschland lebe, ernähre ich mich viel gesünder.",
      "en": "Since I have been living in Germany, I eat much healthier.",
      "uk": "Відколи я живу в Німеччині, я харчуюся набагато здоровіше.",
      "ru": "С тех пор как я живу в Германии, я питаюсь намного здоровее."
    },
    "answer": {
      "de": "Seit",
      "en": "Since",
      "uk": "Відколи",
      "ru": "С тех пор как"
    },
    "distractors": [
      "Weil",
      "Obwohl",
      "Bis"
    ],
    "explanation": {
      "de": "<b>„Seit(dem)“</b> leitet einen Zeitpunkt in der Vergangenheit ein, der bis heute andauert.<br>„Bis“ würde einen Endpunkt in der Zukunft ausdrücken, keinen Anfang in der Vergangenheit.",
      "en": "<b>„Seit(dem)“</b> (since) introduces a point in the past that continues until now.<br>„Bis“ (until) would express an end point in the future, not a starting point in the past.",
      "uk": "<b>„Seit(dem)“</b> (відколи) вводить момент у минулому, що триває дотепер.<br>„Bis“ виражало б кінцеву точку в майбутньому, а не початок у минулому.",
      "ru": "<b>„Seit(dem)“</b> (с тех пор как) вводит момент в прошлом, который длится по сей день.<br>„Bis“ выражало бы конечную точку в будущем, а не начало в прошлом."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_047",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "Vieles hat mich überrascht, {{BLANK}} ich hier arbeite.",
      "en": "Many things have surprised me since I have been working here.",
      "uk": "Багато що мене здивувало, відколи я тут працюю.",
      "ru": "Многое меня удивило, с тех пор как я здесь работаю."
    },
    "answer": {
      "de": "seitdem",
      "en": "since",
      "uk": "відколи",
      "ru": "с тех пор как"
    },
    "distractors": [
      "bis",
      "damit",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„seitdem“</b> beschreibt einen andauernden Zeitraum ab einem Startpunkt in der Vergangenheit.<br>„damit“ würde ein Ziel ausdrücken, keine Zeitangabe.",
      "en": "<b>„seitdem“</b> describes an ongoing period from a starting point in the past.<br>„damit“ would express a purpose, not a time reference.",
      "uk": "<b>„seitdem“</b> описує тривалий період від початкової точки в минулому.<br>„damit“ виражало б мету, а не часову вказівку.",
      "ru": "<b>„seitdem“</b> описывает длительный период от начальной точки в прошлом.<br>„damit“ выражало бы цель, а не указание времени."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_048",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "Ich sehe die kulturellen Unterschiede viel klarer, {{BLANK}} ich hier lebe.",
      "en": "I see the cultural differences much more clearly since I have been living here.",
      "uk": "Я бачу культурні відмінності набагато чіткіше, відколи живу тут.",
      "ru": "Я вижу культурные различия намного яснее, с тех пор как живу здесь."
    },
    "answer": {
      "de": "seit",
      "en": "since",
      "uk": "відколи",
      "ru": "с тех пор как"
    },
    "distractors": [
      "bis",
      "weil",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„seit“</b> markiert den Beginn einer Situation, die bis jetzt andauert.<br>„weil“ würde einen Grund nennen, keinen Zeitpunkt.",
      "en": "<b>„seit“</b> marks the beginning of a situation that continues until now.<br>„weil“ would give a reason, not a point in time.",
      "uk": "<b>„seit“</b> позначає початок ситуації, яка триває дотепер.<br>„weil“ називало б причину, а не момент часу.",
      "ru": "<b>„seit“</b> отмечает начало ситуации, которая длится по сей день.<br>„weil“ называло бы причину, а не момент времени."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_049",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "{{BLANK}} wartest du hier? — Auf meinen Bruder.",
      "en": "Who are you waiting for here? — For my brother.",
      "uk": "На кого ти тут чекаєш? — На брата.",
      "ru": "Кого ты здесь ждёшь? — Брата."
    },
    "answer": {
      "de": "Auf wen",
      "en": "Who ... for",
      "uk": "На кого",
      "ru": "Кого"
    },
    "distractors": [
      "Worauf",
      "Auf was",
      "Wovon"
    ],
    "explanation": {
      "de": "Bei Fragen nach <b>Personen</b> benutzt man <b>„Präposition + wen/wem“</b>: „Auf wen“.<br>„Worauf“ würde nach einer Sache fragen, nicht nach einer Person.",
      "en": "For questions about <b>people</b>, you use <b>„preposition + wen/wem“</b>: „Auf wen“.<br>„Worauf“ would ask about a thing, not a person.",
      "uk": "У питаннях про <b>осіб</b> вживають <b>„прийменник + wen/wem“</b>: „Auf wen“.<br>„Worauf“ запитувало б про річ, а не про особу.",
      "ru": "В вопросах о <b>людях</b> употребляют <b>„предлог + wen/wem“</b>: „Auf wen“.<br>„Worauf“ спрашивало бы о вещи, а не о человеке."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_050",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "{{BLANK}} wartest du hier? — Auf den Bus.",
      "en": "What are you waiting for here? — For the bus.",
      "uk": "На що ти тут чекаєш? — На автобус.",
      "ru": "Чего ты здесь ждёшь? — Автобуса."
    },
    "answer": {
      "de": "Worauf",
      "en": "What ... for",
      "uk": "На що",
      "ru": "Чего"
    },
    "distractors": [
      "Auf wen",
      "Mit wem",
      "Wovon"
    ],
    "explanation": {
      "de": "Bei Fragen nach <b>Sachen</b> benutzt man das Pronominaladverb <b>„wo(r) + Präposition“</b>: „Worauf“.<br>„Auf wen“ würde nach einer Person fragen, hier geht es aber um einen Bus.",
      "en": "For questions about <b>things</b>, you use the pronominal adverb <b>„wo(r) + preposition“</b>: „Worauf“.<br>„Auf wen“ would ask about a person, but here it's about a bus.",
      "uk": "У питаннях про <b>речі</b> вживають прийменниковий прислівник <b>„wo(r) + прийменник“</b>: „Worauf“.<br>„Auf wen“ запитувало б про особу, а тут ідеться про автобус.",
      "ru": "В вопросах о <b>вещах</b> употребляют местоименное наречие <b>„wo(r) + предлог“</b>: „Worauf“.<br>„Auf wen“ спрашивало бы о человеке, но здесь речь об автобусе."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_051",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "Mit {{BLANK}} sprichst du eigentlich deine Muttersprache?",
      "en": "Who do you actually speak your native language with?",
      "uk": "З ким ти взагалі говориш своєю рідною мовою?",
      "ru": "С кем ты вообще говоришь на своём родном языке?"
    },
    "answer": {
      "de": "wem",
      "en": "who",
      "uk": "ким",
      "ru": "кем"
    },
    "distractors": [
      "was",
      "wen",
      "wo"
    ],
    "explanation": {
      "de": "Nach einer Präposition + Frage nach einer <b>Person</b> im Dativ steht <b>„wem“</b>: „Mit wem“.<br>„was“ würde nach einer Sache fragen, keiner Person.",
      "en": "After a preposition + question about a <b>person</b> in the dative, <b>„wem“</b> is used: „Mit wem“.<br>„was“ would ask about a thing, not a person.",
      "uk": "Після прийменника + питання про <b>особу</b> в давальному стоїть <b>„wem“</b>: „Mit wem“.<br>„was“ запитувало б про річ, а не про особу.",
      "ru": "После предлога + вопрос о <b>человеке</b> в дательном падеже стоит <b>„wem“</b>: „Mit wem“.<br>„was“ спрашивало бы о вещи, а не о человеке."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_052",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Ich habe gewartet, {{BLANK}} ich genug Erfahrung für den Job hatte.",
      "en": "I waited until I had enough experience for the job.",
      "uk": "Я чекав, доки не набрав достатньо досвіду для роботи.",
      "ru": "Я ждал, пока не набрал достаточно опыта для работы."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "weil",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„bis“</b> markiert den Endpunkt einer Wartezeit.<br>„seit“ würde einen Anfangspunkt in der Vergangenheit ausdrücken, kein Ende.",
      "en": "<b>„bis“</b> (until) marks the end point of a waiting period.<br>„seit“ would express a starting point in the past, not an end.",
      "uk": "<b>„bis“</b> (доки) позначає кінцеву точку періоду очікування.<br>„seit“ виражало б початкову точку в минулому, а не кінець.",
      "ru": "<b>„bis“</b> (пока) отмечает конечную точку периода ожидания.<br>„seit“ выражало бы начальную точку в прошлом, а не конец."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_053",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Der Fehler ist niemandem aufgefallen, {{BLANK}} der Chef die Liste noch einmal gelesen hat.",
      "en": "Nobody noticed the mistake until the boss read the list again.",
      "uk": "Помилку ніхто не помітив, доки керівник ще раз не прочитав список.",
      "ru": "Ошибку никто не заметил, пока начальник снова не прочитал список."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„bis“</b> zeigt den Zeitpunkt, an dem sich die Situation ändert (der Fehler wird bemerkt).<br>„damit“ würde ein Ziel ausdrücken, keinen Zeitpunkt.",
      "en": "<b>„bis“</b> shows the point at which the situation changes (the mistake gets noticed).<br>„damit“ would express a purpose, not a point in time.",
      "uk": "<b>„bis“</b> показує момент, коли ситуація змінюється (помилку помічають).<br>„damit“ виражало б мету, а не момент часу.",
      "ru": "<b>„bis“</b> показывает момент, когда ситуация меняется (ошибку замечают).<br>„damit“ выражало бы цель, а не момент времени."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_054",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Wir bleiben hier, {{BLANK}} der Regen aufhört.",
      "en": "We'll stay here until the rain stops.",
      "uk": "Ми залишимося тут, доки не припиниться дощ.",
      "ru": "Мы останемся здесь, пока не закончится дождь."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "obwohl",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„bis“</b> nennt den Zeitpunkt, an dem eine Handlung endet.<br>„wenn“ würde eine wiederholte oder allgemeine Bedingung ausdrücken, hier passt aber der klare Endpunkt „bis“.",
      "en": "<b>„bis“</b> states the point at which an action ends.<br>„wenn“ would express a repeated or general condition, but the clear end point „bis“ fits better here.",
      "uk": "<b>„bis“</b> називає момент, коли дія закінчується.<br>„wenn“ виражало б повторювану чи загальну умову, а тут пасує чіткий кінцевий момент „bis“.",
      "ru": "<b>„bis“</b> называет момент, когда действие заканчивается.<br>„wenn“ выражало бы повторяющееся или общее условие, а здесь подходит чёткий конечный момент „bis“."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_055",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "{{BLANK}} hast du dich beim Kurs am meisten geärgert?",
      "en": "What were you most annoyed about in the course?",
      "uk": "Через що ти найбільше злився на курсі?",
      "ru": "Из-за чего ты больше всего злился на курсе?"
    },
    "answer": {
      "de": "Worüber",
      "en": "What ... about",
      "uk": "Через що",
      "ru": "Из-за чего"
    },
    "distractors": [
      "Über wen",
      "Wovon",
      "Womit"
    ],
    "explanation": {
      "de": "Bei einer Frage nach einer <b>Sache</b> mit „sich ärgern über“ benutzt man das Pronominaladverb <b>„worüber“</b>.<br>„Über wen“ würde nach einer Person fragen, hier geht es aber um eine Sache/Situation.",
      "en": "For a question about a <b>thing</b> with „sich ärgern über“, the pronominal adverb <b>„worüber“</b> is used.<br>„Über wen“ would ask about a person, but here it's about a thing/situation.",
      "uk": "У питанні про <b>річ</b> з „sich ärgern über“ вживають прийменниковий прислівник <b>„worüber“</b>.<br>„Über wen“ запитувало б про особу, а тут ідеться про річ/ситуацію.",
      "ru": "В вопросе о <b>вещи</b> с „sich ärgern über“ употребляют местоименное наречие <b>„worüber“</b>.<br>„Über wen“ спрашивало бы о человеке, но здесь речь о вещи/ситуации."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_056",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "Das Thema ist bei uns ein Tabu, {{BLANK}} reden wir fast nie.",
      "en": "The topic is a taboo for us; we almost never talk about it.",
      "uk": "Ця тема в нас табу, про це ми майже ніколи не говоримо.",
      "ru": "Эта тема у нас табу, об этом мы почти никогда не говорим."
    },
    "answer": {
      "de": "darüber",
      "en": "about it",
      "uk": "про це",
      "ru": "об этом"
    },
    "distractors": [
      "dafür",
      "damit",
      "davon"
    ],
    "explanation": {
      "de": "<b>„darüber“</b> (Pronominaladverb) ersetzt „über das Thema“.<br>„damit“ würde ein Mittel oder Werkzeug ausdrücken, nicht das Gesprächsthema.",
      "en": "<b>„darüber“</b> (pronominal adverb) replaces „über das Thema“ (about the topic).<br>„damit“ would express a means or tool, not the topic of conversation.",
      "uk": "<b>„darüber“</b> (прийменниковий прислівник) замінює „über das Thema“.<br>„damit“ виражало б засіб чи інструмент, а не тему розмови.",
      "ru": "<b>„darüber“</b> (местоименное наречие) заменяет „über das Thema“.<br>„damit“ выражало бы средство или инструмент, а не тему разговора."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_057",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "Es gab ein Missverständnis, aber {{BLANK}} haben wir schon gesprochen.",
      "en": "There was a misunderstanding, but we have already talked about it.",
      "uk": "Було непорозуміння, але про це ми вже поговорили.",
      "ru": "Было недопонимание, но об этом мы уже поговорили."
    },
    "answer": {
      "de": "darüber",
      "en": "about it",
      "uk": "про це",
      "ru": "об этом"
    },
    "distractors": [
      "dafür",
      "dabei",
      "davon"
    ],
    "explanation": {
      "de": "<b>„darüber“</b> ersetzt „über das Missverständnis“ und bezieht sich auf eine schon genannte Sache.<br>„dabei“ würde eine gleichzeitige Handlung ausdrücken, kein Gesprächsthema.",
      "en": "<b>„darüber“</b> replaces „über das Missverständnis“ and refers to something already mentioned.<br>„dabei“ would express a simultaneous action, not a topic of conversation.",
      "uk": "<b>„darüber“</b> замінює „über das Missverständnis“ і стосується вже згаданої речі.<br>„dabei“ виражало б одночасну дію, а не тему розмови.",
      "ru": "<b>„darüber“</b> заменяет „über das Missverständnis“ и относится к уже упомянутой вещи.<br>„dabei“ выражало бы одновременное действие, а не тему разговора."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_058",
    "cat": "futur_werden",
    "sentence": {
      "de": "Die Untersuchung {{BLANK}} morgen früh stattfinden.",
      "en": "The examination will take place tomorrow morning.",
      "uk": "Обстеження відбудеться завтра вранці.",
      "ru": "Обследование будет проходить завтра утром."
    },
    "answer": {
      "de": "wird",
      "en": "will",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Das Futur I wird mit <b>„werden“</b> + Infinitiv gebildet: „wird … stattfinden“.<br>„ist“ wäre Präsens und drückt keine sichere Zukunftsaussage aus.",
      "en": "The future tense (Futur I) is formed with <b>„werden“</b> + infinitive: „wird … stattfinden“.<br>„ist“ would be present tense and doesn't express a clear statement about the future.",
      "uk": "Майбутній час I утворюється за допомогою <b>„werden“</b> + інфінітив: „wird … stattfinden“.<br>„ist“ був би теперішнім часом і не виражає чіткого твердження про майбутнє.",
      "ru": "Будущее время I образуется с помощью <b>„werden“</b> + инфинитив: „wird … stattfinden“.<br>„ist“ было бы настоящим временем и не выражает чёткого утверждения о будущем."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_059",
    "cat": "futur_werden",
    "sentence": {
      "de": "Der Patient {{BLANK}} morgen auf eine andere Station verlegt.",
      "en": "The patient will be transferred to another ward tomorrow.",
      "uk": "Пацієнта завтра переведуть до іншого відділення.",
      "ru": "Пациента завтра переведут в другое отделение."
    },
    "answer": {
      "de": "wird",
      "en": "will be",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Hier steht <b>„wird“</b> als Teil des Passiv-Futurs: „wird … verlegt“ (Futur Passiv).<br>„hat“ würde eine andere Zeitform (Perfekt) einleiten, die hier nicht passt.",
      "en": "Here <b>„wird“</b> is part of the future passive: „wird … verlegt“ (future passive).<br>„hat“ would introduce a different tense (perfect), which doesn't fit here.",
      "uk": "Тут <b>„wird“</b> є частиною пасивного майбутнього: „wird … verlegt“ (пасивний футур).<br>„hat“ вводило б інший час (перфект), який тут не підходить.",
      "ru": "Здесь <b>„wird“</b> является частью пассивного будущего: „wird … verlegt“ (пассивный футур).<br>„hat“ вводило бы другое время (перфект), которое здесь не подходит."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_060",
    "cat": "futur_werden",
    "sentence": {
      "de": "Nächste Woche {{BLANK}} wir eine neue Versicherung abschließen.",
      "en": "Next week we will take out a new insurance policy.",
      "uk": "Наступного тижня ми укладемо нове страхування.",
      "ru": "На следующей неделе мы заключим новое страхование."
    },
    "answer": {
      "de": "werden",
      "en": "will",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "haben",
      "waren"
    ],
    "explanation": {
      "de": "Futur I: <b>„werden“</b> + Infinitiv („abschließen“) drückt eine geplante zukünftige Handlung aus.<br>„haben“ würde ein Perfekt einleiten, keine Zukunft.",
      "en": "Future I: <b>„werden“</b> + infinitive („abschließen“) expresses a planned future action.<br>„haben“ would introduce a perfect tense, not the future.",
      "uk": "Футур I: <b>„werden“</b> + інфінітив („abschließen“) виражає заплановану майбутню дію.<br>„haben“ вводило б перфект, а не майбутній час.",
      "ru": "Футур I: <b>„werden“</b> + инфинитив („abschließen“) выражает запланированное будущее действие.<br>„haben“ вводило бы перфект, а не будущее время."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_061",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Bei einem Notfall muss man {{BLANK}} ruhig bleiben, sondern auch schnell die 112 anrufen.",
      "en": "In an emergency, you must not only stay calm but also call 112 quickly.",
      "uk": "У надзвичайній ситуації потрібно не тільки залишатися спокійним, а й швидко зателефонувати на 112.",
      "ru": "В экстренной ситуации нужно не только оставаться спокойным, но и быстро позвонить по номеру 112."
    },
    "answer": {
      "de": "nicht nur",
      "en": "not only",
      "uk": "не тільки",
      "ru": "не только"
    },
    "distractors": [
      "weder",
      "sowohl",
      "entweder"
    ],
    "explanation": {
      "de": "<b>„nicht nur … sondern auch“</b> verbindet zwei wichtige, positive Handlungen.<br>„weder“ würde beide Handlungen verneinen, was hier nicht passt.",
      "en": "<b>„nicht nur … sondern auch“</b> (not only … but also) connects two important, positive actions.<br>„weder“ would negate both actions, which doesn't fit here.",
      "uk": "<b>„nicht nur … sondern auch“</b> (не тільки … а й) поєднує дві важливі, позитивні дії.<br>„weder“ заперечувало б обидві дії, що тут не підходить.",
      "ru": "<b>„nicht nur … sondern auch“</b> (не только … но и) соединяет два важных, положительных действия.<br>„weder“ отрицало бы оба действия, что здесь не подходит."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_062",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Er hat sich beim Sturz nicht nur am Arm, {{BLANK}} auch am Kopf verletzt.",
      "en": "During the fall, he not only hurt his arm but also his head.",
      "uk": "Під час падіння він не тільки травмував руку, а й голову.",
      "ru": "Во время падения он не только травмировал руку, но и голову."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а й",
      "ru": "но и"
    },
    "distractors": [
      "aber",
      "oder",
      "doch"
    ],
    "explanation": {
      "de": "Nach <b>„nicht nur“</b> folgt immer <b>„sondern auch“</b>, nie „aber“.<br>„aber“ würde einen einfachen Gegensatz ausdrücken, nicht die feste Paarstruktur.",
      "en": "After <b>„nicht nur“</b>, <b>„sondern auch“</b> always follows, never „aber“.<br>„aber“ would express a simple contrast, not the fixed paired structure.",
      "uk": "Після <b>„nicht nur“</b> завжди йде <b>„sondern auch“</b>, ніколи „aber“.<br>„aber“ виражало б просте протиставлення, а не сталу парну конструкцію.",
      "ru": "После <b>„nicht nur“</b> всегда следует <b>„sondern auch“</b>, никогда „aber“.<br>„aber“ выражало бы простое противопоставление, а не устойчивую парную конструкцию."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_063",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Im Unfall wurden nicht nur die Fahrer, {{BLANK}} auch zwei Fußgänger verletzt.",
      "en": "In the accident, not only the drivers but also two pedestrians were injured.",
      "uk": "В аварії постраждали не тільки водії, а й двоє пішоходів.",
      "ru": "В аварии пострадали не только водители, но и двое пешеходов."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а й",
      "ru": "но и"
    },
    "distractors": [
      "aber",
      "oder",
      "und"
    ],
    "explanation": {
      "de": "Die feste Konstruktion ist <b>„nicht nur …, sondern auch …“</b>.<br>„und“ würde nur eine einfache Aufzählung ausdrücken, keine besondere Betonung.",
      "en": "The fixed construction is <b>„nicht nur …, sondern auch …“</b>.<br>„und“ would only express a simple list, without special emphasis.",
      "uk": "Стала конструкція — <b>„nicht nur …, sondern auch …“</b>.<br>„und“ виражало б лише просте перелічення, без особливого наголосу.",
      "ru": "Устойчивая конструкция — <b>„nicht nur …, sondern auch …“</b>.<br>„und“ выражало бы только простое перечисление, без особого акцента."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_064",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Sie füllte das Formular sorgfältig aus, {{BLANK}} keine Fehler zu machen.",
      "en": "She filled in the form carefully in order not to make any mistakes.",
      "uk": "Вона уважно заповнила формуляр, щоб не зробити помилок.",
      "ru": "Она внимательно заполнила формуляр, чтобы не сделать ошибок."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "weil",
      "dass"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> steht, wenn Subjekt des Haupt- und Nebensatzes gleich sind (sie füllt aus, sie macht keine Fehler).<br>„damit“ würde man benutzen, wenn die Subjekte unterschiedlich wären.",
      "en": "<b>„um … zu“</b> is used when the subject of the main and subordinate clause is the same (she fills in, she makes no mistakes).<br>„damit“ would be used if the subjects were different.",
      "uk": "<b>„um … zu“</b> вживають, коли підмет головного й підрядного речення однаковий (вона заповнює, вона не робить помилок).<br>„damit“ вживали б, якби підмети різнилися.",
      "ru": "<b>„um … zu“</b> употребляют, когда подлежащее главного и придаточного предложения одинаковое (она заполняет, она не делает ошибок).<br>„damit“ употребляли бы, если бы подлежащие были разными."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_065",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Er brauchte den Verband, {{BLANK}} die Wunde zu schützen.",
      "en": "He needed the bandage in order to protect the wound.",
      "uk": "Йому потрібна була повʼязка, щоб захистити рану.",
      "ru": "Ему нужна была повязка, чтобы защитить рану."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> drückt den Zweck einer Handlung aus, wenn das Subjekt gleich bleibt.<br>„weil“ würde einen Grund nennen, keinen Zweck.",
      "en": "<b>„um … zu“</b> expresses the purpose of an action when the subject stays the same.<br>„weil“ would give a reason, not a purpose.",
      "uk": "<b>„um … zu“</b> виражає мету дії, коли підмет залишається тим самим.<br>„weil“ називало б причину, а не мету.",
      "ru": "<b>„um … zu“</b> выражает цель действия, когда подлежащее остаётся тем же.<br>„weil“ называло бы причину, а не цель."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_066",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Wir haben Energie gespart, {{BLANK}} die Umwelt zu schützen.",
      "en": "We saved energy in order to protect the environment.",
      "uk": "Ми економили енергію, щоб захистити довкілля.",
      "ru": "Мы экономили энергию, чтобы защитить окружающую среду."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "dass",
      "ob"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> passt, weil das Subjekt (wir) in beiden Satzteilen gleich ist.<br>„damit“ wäre nötig, wenn ein anderes Subjekt den Zweck erfüllt.",
      "en": "<b>„um … zu“</b> fits because the subject (we) is the same in both parts of the sentence.<br>„damit“ would be needed if a different subject fulfilled the purpose.",
      "uk": "<b>„um … zu“</b> підходить, бо підмет (ми) однаковий в обох частинах речення.<br>„damit“ було б потрібне, якби мету виконував інший підмет.",
      "ru": "<b>„um … zu“</b> подходит, потому что подлежащее (мы) одинаковое в обеих частях предложения.<br>„damit“ было бы нужно, если бы цель выполняло другое подлежащее."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_067",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Der Arzt erklärte die Prognose genau, {{BLANK}} die Familie alles versteht.",
      "en": "The doctor explained the prognosis precisely so that the family understands everything.",
      "uk": "Лікар детально пояснив прогноз, щоб родина все зрозуміла.",
      "ru": "Врач подробно объяснил прогноз, чтобы семья всё поняла."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "weil",
      "dass"
    ],
    "explanation": {
      "de": "<b>„damit“</b> passt, weil das Subjekt des Nebensatzes (die Familie) anders ist als das Subjekt des Hauptsatzes (der Arzt).<br>„um … zu“ würde nur bei gleichem Subjekt funktionieren.",
      "en": "<b>„damit“</b> fits because the subject of the subordinate clause (the family) is different from the subject of the main clause (the doctor).<br>„um … zu“ would only work with the same subject.",
      "uk": "<b>„damit“</b> підходить, бо підмет підрядного речення (родина) відрізняється від підмета головного (лікар).<br>„um … zu“ працювало б лише з однаковим підметом.",
      "ru": "<b>„damit“</b> подходит, потому что подлежащее придаточного (семья) отличается от подлежащего главного (врач).<br>„um … zu“ работало бы только с одинаковым подлежащим."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_068",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Die Ärztin muss ihn heute operieren, {{BLANK}} sich der Zustand nicht verschlechtert.",
      "en": "The doctor has to operate on him today so that his condition doesn't get worse.",
      "uk": "Лікарка має прооперувати його сьогодні, щоб стан не погіршився.",
      "ru": "Врач должна прооперировать его сегодня, чтобы состояние не ухудшилось."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„damit“</b> nennt das Ziel der Operation aus der Sicht eines anderen Subjekts (der Zustand).<br>„weil“ würde einen Grund nennen, kein Ziel.",
      "en": "<b>„damit“</b> states the goal of the operation from the perspective of a different subject (the condition).<br>„weil“ would give a reason, not a goal.",
      "uk": "<b>„damit“</b> називає мету операції з погляду іншого підмета (стан).<br>„weil“ називало б причину, а не мету.",
      "ru": "<b>„damit“</b> называет цель операции с точки зрения другого подлежащего (состояние).<br>„weil“ называло бы причину, а не цель."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_069",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Sie sendet die Schadensmeldung sofort, {{BLANK}} die Versicherung schnell reagieren kann.",
      "en": "She sends the damage report immediately so that the insurance can react quickly.",
      "uk": "Вона негайно надсилає повідомлення про шкоду, щоб страхова могла швидко реагувати.",
      "ru": "Она немедленно отправляет сообщение об ущербе, чтобы страховая могла быстро отреагировать."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "dass",
      "ob"
    ],
    "explanation": {
      "de": "<b>„damit“</b> passt, weil das Subjekt im Nebensatz (die Versicherung) anders ist als im Hauptsatz (sie).<br>„dass“ würde nur eine Tatsache nennen, kein Ziel.",
      "en": "<b>„damit“</b> fits because the subject in the subordinate clause (the insurance) is different from the main clause (she).<br>„dass“ would only state a fact, not a goal.",
      "uk": "<b>„damit“</b> підходить, бо підмет у підрядному (страхова) відрізняється від підмета головного (вона).<br>„dass“ називало б лише факт, а не мету.",
      "ru": "<b>„damit“</b> подходит, потому что подлежащее в придаточном (страховая) отличается от главного (она).<br>„dass“ называло бы только факт, а не цель."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_070",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "In Deutschland {{BLANK}} der Abfall sehr genau getrennt.",
      "en": "In Germany, waste is sorted very precisely.",
      "uk": "У Німеччині сміття дуже точно сортують.",
      "ru": "В Германии мусор очень точно сортируют."
    },
    "answer": {
      "de": "wird",
      "en": "is",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Passiv Präsens wird mit <b>„werden“</b> + Partizip II gebildet: „wird … getrennt“.<br>„ist“ würde eher einen Zustand beschreiben (Zustandspassiv), nicht den Vorgang.",
      "en": "The present passive is formed with <b>„werden“</b> + past participle: „wird … getrennt“.<br>„ist“ would describe more of a state (stative passive), not the process.",
      "uk": "Пасив теперішнього часу утворюється з <b>„werden“</b> + Partizip II: „wird … getrennt“.<br>„ist“ радше описувало б стан, а не процес.",
      "ru": "Пассив настоящего времени образуется с <b>„werden“</b> + Partizip II: „wird … getrennt“.<br>„ist“ скорее описывал бы состояние, а не процесс."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_071",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "Der Energieverbrauch {{BLANK}} in unserem Haus jetzt genau kontrolliert.",
      "en": "The energy consumption in our house is now precisely monitored.",
      "uk": "Енергоспоживання в нашому будинку зараз точно контролюють.",
      "ru": "Энергопотребление в нашем доме сейчас точно контролируют."
    },
    "answer": {
      "de": "wird",
      "en": "is",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "<b>„wird … kontrolliert“</b> ist Passiv Präsens und beschreibt einen laufenden Vorgang.<br>„hat“ wäre ein Perfekt-Hilfsverb, das hier nicht passt.",
      "en": "<b>„wird … kontrolliert“</b> is present passive and describes an ongoing process.<br>„hat“ would be a perfect auxiliary verb, which doesn't fit here.",
      "uk": "<b>„wird … kontrolliert“</b> — це пасив теперішнього часу, що описує поточний процес.<br>„hat“ було б допоміжним дієсловом перфекта, яке тут не підходить.",
      "ru": "<b>„wird … kontrolliert“</b> — это пассив настоящего времени, описывающий текущий процесс.<br>„hat“ было бы вспомогательным глаголом перфекта, который здесь не подходит."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_072",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "Alte Flaschen {{BLANK}} zu neuem Glas verarbeitet.",
      "en": "Old bottles are processed into new glass.",
      "uk": "Старі бутилки перетворюють на нове скло.",
      "ru": "Старые бутылки превращают в новое стекло."
    },
    "answer": {
      "de": "werden",
      "en": "are",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "sind",
      "hat"
    ],
    "explanation": {
      "de": "Bei Plural-Subjekten steht <b>„werden“</b> (nicht „wird“): „Flaschen werden verarbeitet“.<br>„sind“ würde einen bereits abgeschlossenen Zustand beschreiben (Zustandspassiv), nicht den Vorgang.",
      "en": "With plural subjects, <b>„werden“</b> is used (not „wird“): „Flaschen werden verarbeitet“.<br>„sind“ would describe an already completed state (stative passive), not the process.",
      "uk": "З підметами у множині вживають <b>„werden“</b> (не „wird“): „Flaschen werden verarbeitet“.<br>„sind“ описував би вже завершений стан, а не процес.",
      "ru": "С подлежащими во множественном числе употребляют <b>„werden“</b> (не „wird“): „Flaschen werden verarbeitet“.<br>„sind“ описывал бы уже завершённое состояние, а не процесс."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_073",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} in diesem Jahr viel Plastikmüll vermieden.",
      "en": "This year, we have avoided a lot of plastic waste.",
      "uk": "Цього року ми уникли багато пластикового сміття.",
      "ru": "В этом году мы избежали много пластикового мусора."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "hatten"
    ],
    "explanation": {
      "de": "<b>„vermeiden“</b> bildet das Perfekt mit <b>„haben“</b>: „haben … vermieden“.<br>„sind“ wird nur bei Verben der Bewegung oder Zustandsänderung benutzt.",
      "en": "<b>„vermeiden“</b> forms the perfect tense with <b>„haben“</b>: „haben … vermieden“.<br>„sind“ is only used with verbs of motion or change of state.",
      "uk": "<b>„vermeiden“</b> утворює перфект із <b>„haben“</b>: „haben … vermieden“.<br>„sind“ вживається лише з дієсловами руху чи зміни стану.",
      "ru": "<b>„vermeiden“</b> образует перфект с <b>„haben“</b>: „haben … vermieden“.<br>„sind“ употребляется только с глаголами движения или изменения состояния."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_074",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} unser Auto verkauft und sind auf ein Fahrrad umgestiegen.",
      "en": "We have sold our car and switched to a bicycle.",
      "uk": "Ми продали авто і перейшли на велосипед.",
      "ru": "Мы продали машину и перешли на велосипед."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "hatten"
    ],
    "explanation": {
      "de": "<b>„verkaufen“</b> braucht im Perfekt <b>„haben“</b>, während „umsteigen“ (Bewegung/Veränderung) „sind“ braucht.<br>„sind“ wäre hier für „verkaufen“ falsch.",
      "en": "<b>„verkaufen“</b> needs <b>„haben“</b> in the perfect, while „umsteigen“ (motion/change) needs „sind“.<br>„sind“ would be wrong here for „verkaufen“.",
      "uk": "<b>„verkaufen“</b> у перфекті потребує <b>„haben“</b>, тоді як „umsteigen“ (рух/зміна) потребує „sind“.<br>„sind“ тут було б неправильним для „verkaufen“.",
      "ru": "<b>„verkaufen“</b> в перфекте требует <b>„haben“</b>, тогда как „umsteigen“ (движение/изменение) требует „sind“.<br>„sind“ здесь было бы неправильным для „verkaufen“."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_075",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Habt ihr in diesem Jahr schon Energie gespart? — Ja, wir {{BLANK}} unsere Lampen ausgetauscht.",
      "en": "Have you already saved energy this year? — Yes, we have replaced our lamps.",
      "uk": "Ви вже цього року економили енергію? — Так, ми замінили лампи.",
      "ru": "Вы уже в этом году экономили энергию? — Да, мы заменили лампы."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "waren"
    ],
    "explanation": {
      "de": "<b>„austauschen“</b> bildet das Perfekt mit <b>„haben“</b> (transitives Verb mit Akkusativobjekt).<br>„sind“ würde nur bei intransitiven Bewegungsverben stehen.",
      "en": "<b>„austauschen“</b> forms the perfect with <b>„haben“</b> (transitive verb with accusative object).<br>„sind“ would only be used with intransitive verbs of motion.",
      "uk": "<b>„austauschen“</b> утворює перфект із <b>„haben“</b> (перехідне дієслово зі знахідним додатком).<br>„sind“ вживалося б лише з неперехідними дієсловами руху.",
      "ru": "<b>„austauschen“</b> образует перфект с <b>„haben“</b> (переходный глагол с винительным дополнением).<br>„sind“ употреблялось бы только с непереходными глаголами движения."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_076",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Ich freue mich schon sehr {{BLANK}} das Festival nächste Woche.",
      "en": "I am already really looking forward to the festival next week.",
      "uk": "Я вже дуже чекаю на фестиваль наступного тижня.",
      "ru": "Я уже очень жду фестиваль на следующей неделе."
    },
    "answer": {
      "de": "auf",
      "en": "to",
      "uk": "на",
      "ru": "-"
    },
    "distractors": [
      "für",
      "über",
      "an"
    ],
    "explanation": {
      "de": "<b>„sich freuen auf“</b> (+Akkusativ) benutzt man für etwas, das noch kommt (Zukunft).<br>„über“ würde man für etwas benutzen, das schon passiert ist.",
      "en": "<b>„sich freuen auf“</b> (+accusative) is used for something that is still to come (future).<br>„über“ would be used for something that has already happened.",
      "uk": "<b>„sich freuen auf“</b> (+знахідний) вживають для чогось, що ще має статися (майбутнє).<br>„über“ вживали б для того, що вже сталося.",
      "ru": "<b>„sich freuen auf“</b> (+винительный) употребляют для чего-то, что ещё предстоит (будущее).<br>„über“ употребляли бы для того, что уже произошло."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_077",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Trotz des unsicheren Wetters wollten viele Leute {{BLANK}} der Führung teilnehmen.",
      "en": "Despite the uncertain weather, many people wanted to take part in the tour.",
      "uk": "Незважаючи на непевну погоду, багато людей хотіли взяти участь в екскурсії.",
      "ru": "Несмотря на неопределённую погоду, многие люди хотели принять участие в экскурсии."
    },
    "answer": {
      "de": "an",
      "en": "in",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "bei",
      "mit",
      "für"
    ],
    "explanation": {
      "de": "<b>„teilnehmen an“</b> (+Dativ) ist eine feste Verb-Präposition-Verbindung.<br>„bei“ passt hier nicht zu diesem festen Verb.",
      "en": "<b>„teilnehmen an“</b> (+dative) is a fixed verb-preposition combination.<br>„bei“ doesn't fit with this fixed verb here.",
      "uk": "<b>„teilnehmen an“</b> (+давальний) — стале поєднання дієслова з прийменником.<br>„bei“ тут не пасує до цього сталого дієслова.",
      "ru": "<b>„teilnehmen an“</b> (+дательный) — устойчивое сочетание глагола с предлогом.<br>„bei“ здесь не подходит к этому устойчивому глаголу."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_078",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Die Nachbarn tauschen sich oft {{BLANK}} unbekannte Künstler aus.",
      "en": "The neighbours often exchange views about unknown artists.",
      "uk": "Сусіди часто обмінюються думками про невідомих митців.",
      "ru": "Соседи часто обмениваются мнениями о неизвестных художниках."
    },
    "answer": {
      "de": "über",
      "en": "about",
      "uk": "про",
      "ru": "о"
    },
    "distractors": [
      "von",
      "für",
      "an"
    ],
    "explanation": {
      "de": "<b>„sich austauschen über“</b> (+Akkusativ) ist eine feste Verb-Präposition-Verbindung für Gesprächsthemen.<br>„von“ passt hier grammatisch nicht zu „austauschen“.",
      "en": "<b>„sich austauschen über“</b> (+accusative) is a fixed verb-preposition combination for conversation topics.<br>„von“ doesn't fit grammatically with „austauschen“ here.",
      "uk": "<b>„sich austauschen über“</b> (+знахідний) — стале поєднання дієслова з прийменником для тем розмови.<br>„von“ тут граматично не пасує до „austauschen“.",
      "ru": "<b>„sich austauschen über“</b> (+винительный) — устойчивое сочетание глагола с предлогом для тем разговора.<br>„von“ здесь грамматически не подходит к „austauschen“."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_079",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} handelt die neue Ausstellung im Museum?",
      "en": "What is the new exhibition at the museum about?",
      "uk": "Про що нова виставка в музеї?",
      "ru": "О чём новая выставка в музее?"
    },
    "answer": {
      "de": "Wovon",
      "en": "What ... about",
      "uk": "Про що",
      "ru": "О чём"
    },
    "distractors": [
      "Worüber",
      "Womit",
      "Wofür"
    ],
    "explanation": {
      "de": "<b>„handeln von“</b> ist eine feste Verbindung, deshalb fragt man mit <b>„wovon“</b>.<br>„worüber“ würde zu einem anderen Verb passen, z. B. „sprechen über“.",
      "en": "<b>„handeln von“</b> (to be about) is a fixed combination, so you ask with <b>„wovon“</b>.<br>„worüber“ would fit a different verb, e.g. „sprechen über“.",
      "uk": "<b>„handeln von“</b> — стале поєднання, тому запитують за допомогою <b>„wovon“</b>.<br>„worüber“ пасувало б до іншого дієслова, напр. „sprechen über“.",
      "ru": "<b>„handeln von“</b> — устойчивое сочетание, поэтому спрашивают с помощью <b>„wovon“</b>.<br>„worüber“ подходило бы к другому глаголу, напр. „sprechen über“."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_080",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} bezieht sich das neue Angebot der Bibliothek genau?",
      "en": "What exactly does the library's new offer refer to?",
      "uk": "До чого саме стосується нова пропозиція бібліотеки?",
      "ru": "К чему именно относится новое предложение библиотеки?"
    },
    "answer": {
      "de": "Worauf",
      "en": "What ... to",
      "uk": "До чого",
      "ru": "К чему"
    },
    "distractors": [
      "Wovon",
      "Womit",
      "Wofür"
    ],
    "explanation": {
      "de": "<b>„sich beziehen auf“</b> braucht das Pronominaladverb <b>„worauf“</b> in der Frage.<br>„wovon“ würde zu einem anderen Verb passen, hier aber nicht.",
      "en": "<b>„sich beziehen auf“</b> (to refer to) needs the pronominal adverb <b>„worauf“</b> in the question.<br>„wovon“ would fit a different verb, but not here.",
      "uk": "<b>„sich beziehen auf“</b> потребує прийменникового прислівника <b>„worauf“</b> у питанні.<br>„wovon“ пасувало б до іншого дієслова, але не тут.",
      "ru": "<b>„sich beziehen auf“</b> требует местоименного наречия <b>„worauf“</b> в вопросе.<br>„wovon“ подходило бы к другому глаголу, но не здесь."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_081",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} warst du beim Festival am meisten begeistert?",
      "en": "What were you most enthusiastic about at the festival?",
      "uk": "Чим ти був найбільше захоплений на фестивалі?",
      "ru": "Чем ты был больше всего увлечён на фестивале?"
    },
    "answer": {
      "de": "Wovon",
      "en": "What ... about",
      "uk": "Чим",
      "ru": "Чем"
    },
    "distractors": [
      "Worüber",
      "Woran",
      "Womit"
    ],
    "explanation": {
      "de": "<b>„begeistert sein von“</b> ist eine feste Verbindung, deshalb <b>„wovon“</b>.<br>„woran“ würde zu einem anderen Verb passen, z. B. „denken an“.",
      "en": "<b>„begeistert sein von“</b> (to be enthusiastic about) is a fixed combination, hence <b>„wovon“</b>.<br>„woran“ would fit a different verb, e.g. „denken an“.",
      "uk": "<b>„begeistert sein von“</b> — стале поєднання, тому <b>„wovon“</b>.<br>„woran“ пасувало б до іншого дієслова, напр. „denken an“.",
      "ru": "<b>„begeistert sein von“</b> — устойчивое сочетание, поэтому <b>„wovon“</b>.<br>„woran“ подходило бы к другому глаголу, напр. „denken an“."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_082",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie lange dauert die Führung {{BLANK}} genau?",
      "en": "So, how long does the tour actually take?",
      "uk": "А скільки взагалі триває екскурсія?",
      "ru": "А сколько вообще длится экскурсия?"
    },
    "answer": {
      "de": "denn",
      "en": "actually",
      "uk": "взагалі",
      "ru": "вообще"
    },
    "distractors": [
      "doch",
      "ja",
      "mal"
    ],
    "explanation": {
      "de": "<b>„denn“</b> in Fragen zeigt echtes, freundliches Interesse.<br>„doch“ passt eher zu Aussagesätzen oder Aufforderungen, nicht zu dieser Frageform.",
      "en": "<b>„denn“</b> in questions shows genuine, friendly interest.<br>„doch“ fits better with statements or requests, not this type of question.",
      "uk": "<b>„denn“</b> у питаннях показує щирий, приязний інтерес.<br>„doch“ більше пасує до тверджень чи прохань, а не до цього типу питання.",
      "ru": "<b>„denn“</b> в вопросах показывает искренний, дружеский интерес.<br>„doch“ больше подходит к утверждениям или просьбам, а не к этому типу вопроса."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "sb_083",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie viel kostet der Eintritt {{BLANK}} für die Führung?",
      "en": "So, how much does admission for the tour actually cost?",
      "uk": "А скільки взагалі коштує вхід на екскурсію?",
      "ru": "А сколько вообще стоит вход на экскурсию?"
    },
    "answer": {
      "de": "eigentlich",
      "en": "actually",
      "uk": "взагалі",
      "ru": "вообще"
    },
    "distractors": [
      "schon",
      "noch",
      "doch"
    ],
    "explanation": {
      "de": "<b>„eigentlich“</b> zeigt in einer Frage beiläufiges, echtes Interesse.<br>„schon“ würde eher Ungeduld oder eine andere Bedeutung ausdrücken.",
      "en": "<b>„eigentlich“</b> in a question shows casual, genuine interest.<br>„schon“ would rather express impatience or a different meaning.",
      "uk": "<b>„eigentlich“</b> у питанні показує невимушений, щирий інтерес.<br>„schon“ радше виражало б нетерпіння чи інше значення.",
      "ru": "<b>„eigentlich“</b> в вопросе показывает непринуждённый, искренний интерес.<br>„schon“ скорее выражало бы нетерпение или другое значение."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "sb_084",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie war {{BLANK}} die Führung durch die Bibliothek?",
      "en": "So, how was the library tour?",
      "uk": "А яка була екскурсія по бібліотеці?",
      "ru": "А как прошла экскурсия по библиотеке?"
    },
    "answer": {
      "de": "denn",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "doch",
      "ja",
      "schon"
    ],
    "explanation": {
      "de": "<b>„denn“</b> macht die Frage freundlicher und zeigt echtes Interesse am Gespräch.<br>„ja“ wird als Modalpartikel meist in Aussagesätzen benutzt, nicht in W-Fragen.",
      "en": "<b>„denn“</b> makes the question friendlier and shows genuine interest in the conversation.<br>„ja“ as a modal particle is mostly used in statements, not in wh-questions.",
      "uk": "<b>„denn“</b> робить питання приязнішим і показує щирий інтерес до розмови.<br>„ja“ як модальна частка здебільшого вживається в твердженнях, а не в питаннях із питальним словом.",
      "ru": "<b>„denn“</b> делает вопрос более дружелюбным и показывает искренний интерес к разговору.<br>„ja“ как модальная частица чаще употребляется в утверждениях, а не в вопросах с вопросительным словом."
    },
    "gram": "interesse_denn_eigentlich"
  }
];
