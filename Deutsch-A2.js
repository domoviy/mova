var PRIMARY_LANG = "de"; // головна мова контенту: term/ short/ def спочатку створюються тут, en/ uk/ ru — точний переклад цієї версії

var AUDIO_CONFIG = {
  "de": ["095","080"], //аудіо генерується зі швидкістю 95% і 80%
//  "en": ["100"],
//  "uk": ["100"]
//  "ru": ["100"]
};


// ════════════════════════════════════════════════════════════════
//  GRAMMAR — обʼєднаний список граматичних конструкцій рівнів A2.1 + A2.2
// ════════════════════════════════════════════════════════════════

var GRAMMAR = [
  {"id":"perfekt","de":"Perfekt","en":"Present perfect (Perfekt)","uk":"Перфект","ru":"Перфект"},
  {"id":"praeteritum","de":"Präteritum","en":"Simple past (Präteritum)","uk":"Претерит","ru":"Претерит"},
  {"id":"modalverben","de":"Modalverben (Präsens)","en":"Modal verbs (present)","uk":"Модальні дієслова (теперішній час)","ru":"Модальные глаголы (настоящее время)"},
  {"id":"modalverben_praeteritum","de":"Modalverben im Präteritum","en":"Modal verbs in the simple past","uk":"Модальні дієслова у претериті","ru":"Модальные глаголы в претерите"},
  {"id":"weil_satz","de":"Nebensatz mit weil","en":"Subordinate clause with weil (because)","uk":"Підрядне речення з weil (тому що)","ru":"Придаточное предложение с weil (потому что)"},
  {"id":"dass_satz","de":"Nebensatz mit dass","en":"Subordinate clause with dass (that)","uk":"Підрядне речення з dass (що)","ru":"Придаточное предложение с dass (что)"},
  {"id":"wenn_satz","de":"Nebensatz mit wenn","en":"Subordinate clause with wenn (if/when)","uk":"Підрядне речення з wenn (якщо/коли)","ru":"Придаточное предложение с wenn (если/когда)"},
  {"id":"als_wenn_schon_erst","de":"als/wenn (Vergangenheit) und schon/erst","en":"als/wenn (past) and schon/erst (already/only)","uk":"als/wenn (минулий час) і schon/erst (вже/лише)","ru":"als/wenn (прошедшее время) и schon/erst (уже/только)"},
  {"id":"dativ_verben","de":"Verben mit Dativ","en":"Verbs with dative","uk":"Дієслова з давальним відмінком","ru":"Глаголы с дательным падежом"},
  {"id":"dativ_akkusativ_verben","de":"Verben mit Dativ und Akkusativ","en":"Verbs with dative and accusative","uk":"Дієслова з давальним і знахідним відмінками","ru":"Глаголы с дательным и винительным падежами"},
  {"id":"wechselpraepositionen","de":"Wechselpräpositionen (Akkusativ/Dativ)","en":"Two-way prepositions (accusative/dative)","uk":"Прийменники подвійного керування (знахідний/давальний)","ru":"Предлоги двойного управления (винительный/дательный)"},
  {"id":"lokale_praepositionen","de":"Lokale Präpositionen und Wegbeschreibung","en":"Prepositions of place and directions","uk":"Прийменники місця та опис маршруту","ru":"Предлоги места и описание маршрута"},
  {"id":"temporale_praepositionen","de":"Temporale Präpositionen","en":"Prepositions of time","uk":"Прийменники часу","ru":"Предлоги времени"},
  {"id":"adjektivendungen","de":"Adjektivendungen nach unbestimmtem Artikel/Possessivartikel","en":"Adjective endings after the indefinite/possessive article","uk":"Закінчення прикметників після неозначеного/присвійного артикля","ru":"Окончания прилагательных после неопределённого/притяжательного артикля"},
  {"id":"was_fuer_ein","de":"Fragewort „Was für ein …?“","en":"Question word „What kind of …?“","uk":"Питальне слово «Який саме …?»","ru":"Вопросительное слово «Какой именно …?»"},
  {"id":"komparativ","de":"Komparativ und Vergleiche (als, (nicht) so … wie)","en":"Comparative and comparisons (than, as … as)","uk":"Компаратив і порівняння (ніж, такий самий … як)","ru":"Компаратив и сравнения (чем, такой же … как)"},
  {"id":"superlativ","de":"Superlativ","en":"Superlative","uk":"Суперлатив","ru":"Суперлатив"},
  {"id":"demonstrativartikel","de":"Demonstrativartikel dieser, diese, dieses","en":"Demonstrative article dieser, diese, dieses (this)","uk":"Вказівний артикль dieser, diese, dieses (цей)","ru":"Указательный артикль dieser, diese, dieses (этот)"},
  {"id":"hoeflichkeit_konjunktiv","de":"Höfliche Bitten (Konjunktiv II)","en":"Polite requests (subjunctive II)","uk":"Ввічливі прохання (кон'юнктив II)","ru":"Вежливые просьбы (конъюнктив II)"},
  {"id":"personalpronomen","de":"Personalpronomen (Nominativ/Akkusativ/Dativ)","en":"Personal pronouns (nominative/accusative/dative)","uk":"Особові займенники (називний/знахідний/давальний)","ru":"Личные местоимения (именительный/винительный/дательный)"},
  {"id":"reflexivpronomen_akkusativ","de":"Reflexivpronomen im Akkusativ","en":"Reflexive pronouns in the accusative","uk":"Зворотні займенники у знахідному відмінку","ru":"Возвратные местоимения в винительном падеже"},
  {"id":"praepositionalverben","de":"Verben mit Präpositionen","en":"Verbs with prepositions","uk":"Дієслова з прийменниками","ru":"Глаголы с предлогами"},
  {"id":"satz_mit_deshalb","de":"Satz mit deshalb","en":"Clause with deshalb (therefore)","uk":"Речення з deshalb (тому)","ru":"Предложение с deshalb (поэтому)"},
  {"id":"hoeflichkeit_konjunktiv_a22","de":"Konjunktiv II: höflich fragen, bitten und Ratschläge geben","en":"Subjunctive II: asking, requesting and giving advice politely","uk":"Конʼюнктив II: ввічливо питати, просити й давати поради","ru":"Конъюнктив II: вежливо спрашивать, просить и давать советы"},
  {"id":"adjektiv_bestimmter_artikel","de":"Adjektivendungen nach dem bestimmten Artikel","en":"Adjective endings after the definite article","uk":"Закінчення прикметників після означеного артикля","ru":"Окончания прилагательных после определённого артикля"},
  {"id":"relativsatz_nominativ","de":"Relativsatz mit Relativpronomen im Nominativ","en":"Relative clause with relative pronoun in the nominative","uk":"Означальне речення із займенником у називному відмінку","ru":"Определительное придаточное с местоимением в именительном падеже"},
  {"id":"verb_werden","de":"Das Verb werden","en":"The verb werden (to become)","uk":"Дієслово werden (ставати)","ru":"Глагол werden (становиться)"},
  {"id":"verb_lassen","de":"Das Verb lassen","en":"The verb lassen (to let / have something done)","uk":"Дієслово lassen (дозволяти / доручати)","ru":"Глагол lassen (позволять / поручать)"},
  {"id":"nebensatz_mit_damit","de":"Nebensatz mit damit","en":"Subordinate clause with damit (so that)","uk":"Підрядне речення з damit (щоб)","ru":"Придаточное предложение с damit (чтобы)"},
  {"id":"indirekter_fragesatz_fragewort","de":"Indirekter Fragesatz mit Fragewort","en":"Indirect question with a question word","uk":"Непряме питання з питальним словом","ru":"Косвенный вопрос с вопросительным словом"},
  {"id":"indirekter_fragesatz_ob","de":"Indirekter Fragesatz mit ob","en":"Indirect question with ob (whether)","uk":"Непряме питання з ob (чи)","ru":"Косвенный вопрос с ob (ли)"},
  {"id":"praepositionen_akkusativ_dativ","de":"Wiederholung: Präpositionen mit Akkusativ und Dativ","en":"Review: prepositions with accusative and dative","uk":"Повторення: прийменники зі знахідним і давальним відмінками","ru":"Повторение: предлоги с винительным и дательным падежами"},
  {"id":"personalpronomen_wdh","de":"Wiederholung: Personalpronomen","en":"Review: personal pronouns","uk":"Повторення: особові займенники","ru":"Повторение: личные местоимения"},
  {"id":"nebensaetze_konnektoren_wdh","de":"Wiederholung: Nebensätze und Konnektoren","en":"Review: subordinate clauses and connectors","uk":"Повторення: підрядні речення та конектори","ru":"Повторение: придаточные предложения и коннекторы"},
  {"id":"adjektiv_unbestimmter_artikel_wdh","de":"Wiederholung: Adjektivendungen nach dem unbestimmten Artikel","en":"Review: adjective endings after the indefinite article","uk":"Повторення: закінчення прикметників після неозначеного артикля","ru":"Повторение: окончания прилагательных после неопределённого артикля"},
  {"id":"dass_satz_wdh","de":"Wiederholung: Nebensatz mit dass","en":"Review: subordinate clause with dass","uk":"Повторення: підрядне речення з dass","ru":"Повторение: придаточное предложение с dass"}
];

var CATS = [
  {"id":"k1","de":"Sind Sie neu hier?","en":"Are you new here?","uk":"Ви тут новенький?","ru":"Вы здесь новенький?","e":"👋"},
  {"id":"k2","de":"Zusammen wohnen","en":"Living together","uk":"Жити разом","ru":"Жить вместе","e":"🏠"},
  {"id":"k3","de":"Arbeit und Freizeit","en":"Work and leisure","uk":"Робота і дозвілля","ru":"Работа и досуг","e":"⚽"},
  {"id":"k4","de":"Was ziehe ich an?","en":"What shall I wear?","uk":"Що мені одягнути?","ru":"Что мне надеть?","e":"👕"},
  {"id":"k5","de":"Fahrrad, Auto oder Bus?","en":"Bike, car or bus?","uk":"Велосипед, авто чи автобус?","ru":"Велосипед, авто или автобус?","e":"🚌"},
  {"id":"k6","de":"Eine Familie – viele Länder","en":"One family – many countries","uk":"Одна сімʼя – багато країн","ru":"Одна семья – много стран","e":"👨‍👩‍👧‍👦"},
  {"id":"k7","de":"Wir machen einen Ausflug","en":"We're going on a trip","uk":"Ми їдемо на екскурсію","ru":"Мы едем на экскурсию","e":"🚐"},
  {"id":"k8","de":"Auf nach Berlin!","en":"Off to Berlin!","uk":"Вперед до Берліна!","ru":"Вперёд в Берлин!","e":"🏙️"},
  {"id":"k9","de":"Eltern – Kinder – Schule","en":"Parents – Children – School","uk":"Батьки – діти – школа","ru":"Родители – дети – школа","e":"🏫"},
  {"id":"k10","de":"Zusammen geht es besser!","en":"Together it works better!","uk":"Разом краще!","ru":"Вместе лучше!","e":"🤝"},
  {"id":"k11","de":"Alles digital?","en":"Everything digital?","uk":"Все цифрове?","ru":"Всё цифровое?","e":"📱"},
  {"id":"k12","de":"Das finde ich schön!","en":"I think that's beautiful!","uk":"Мені це подобається!","ru":"Мне это нравится!","e":"🛍️"},
  {"id":"k13","de":"Handwerk hat Zukunft!","en":"Craft has a future!","uk":"У ремесла є майбутнє!","ru":"У ремесла есть будущее!","e":"🔨"},
  {"id":"k14","de":"Freundschaft","en":"Friendship","uk":"Дружба","ru":"Дружба","e":"👫"},
  {"id":"k15","de":"Ämter und Behörden","en":"Offices and authorities","uk":"Установи та відомства","ru":"Учреждения и ведомства","e":"🏛️"},
  {"id":"k16","de":"Das feiern wir!","en":"Let's celebrate that!","uk":"Це ми святкуємо!","ru":"Это мы празднуем!","e":"🎉"}
];

// ── МОВИ ─────────────────────────────────────────────────────
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
// Обʼєднано: A2.1 (Kapitel 1–8) + A2.2 (Kapitel 9–16), "Die neue Linie 1"

var LESSONS = [
  {
    "id": "k1m1",
    "chapter": 1,
    "module": 1,
    "chapterTitle": {
      "de": "Sind Sie neu hier?",
      "uk": "Ви тут новенький?",
      "en": "Are you new here?",
      "ru": "Вы здесь новенький?"
    },
    "title": {
      "de": "Kennenlernen und die ersten Tage",
      "uk": "Знайомство і перші дні",
      "en": "Getting acquainted and the first days",
      "ru": "Знакомство и первые дни"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "perfekt",
    "cardIds": [
      "k1_001",
      "k1_002",
      "k1_003",
      "k1_004",
      "k1_005",
      "k1_006",
      "k1_007"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k1m2",
    "chapter": 1,
    "module": 2,
    "chapterTitle": {
      "de": "Sind Sie neu hier?",
      "uk": "Ви тут новенький?",
      "en": "Are you new here?",
      "ru": "Вы здесь новенький?"
    },
    "title": {
      "de": "Warum bist du zu spät? – Gründe nennen",
      "uk": "Чому ти запізнився? – називаємо причини",
      "en": "Why are you late? – giving reasons",
      "ru": "Почему ты опоздал? – называем причины"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "weil_satz",
    "cardIds": [
      "k1_008",
      "k1_009",
      "k1_010",
      "k1_011",
      "k1_012",
      "k1_013",
      "k1_014"
    ],
    "unlockAfter": "k1m1",
    "sbCards": []
  },
  {
    "id": "k1m3",
    "chapter": 1,
    "module": 3,
    "chapterTitle": {
      "de": "Sind Sie neu hier?",
      "uk": "Ви тут новенький?",
      "en": "Are you new here?",
      "ru": "Вы здесь новенький?"
    },
    "title": {
      "de": "Ich helfe Ihnen sofort – Willkommen in der Firma",
      "uk": "Я вам одразу допоможу – ласкаво просимо на фірму",
      "en": "I'll help you right away – welcome to the company",
      "ru": "Я вам сразу помогу – добро пожаловать в фирму"
    },
    "skills": [
      "Sprechen",
      "Hören",
      "Lesen"
    ],
    "grammar": "dativ_verben",
    "cardIds": [
      "k1_015",
      "k1_016",
      "k1_017",
      "k1_018",
      "k1_019",
      "k1_020",
      "k1_021"
    ],
    "unlockAfter": "k1m2",
    "sbCards": []
  },
  {
    "id": "k1m4",
    "chapter": 1,
    "module": 4,
    "chapterTitle": {
      "de": "Sind Sie neu hier?",
      "uk": "Ви тут новенький?",
      "en": "Are you new here?",
      "ru": "Вы здесь новенький?"
    },
    "title": {
      "de": "Neu im Team – Übungen und Wiederholung",
      "uk": "Новенький у команді – вправи і повторення",
      "en": "New to the team – exercises and review",
      "ru": "Новенький в команде – упражнения и повторение"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k1_022",
      "k1_023",
      "k1_024",
      "k1_025"
    ],
    "unlockAfter": "k1m3",
    "sbCards": []
  },
  {
    "id": "k2m1",
    "chapter": 2,
    "module": 1,
    "chapterTitle": {
      "de": "Zusammen wohnen",
      "uk": "Жити разом",
      "en": "Living together",
      "ru": "Жить вместе"
    },
    "title": {
      "de": "Ich ziehe um!",
      "uk": "Я переїжджаю!",
      "en": "I'm moving!",
      "ru": "Я переезжаю!"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "perfekt",
    "cardIds": [
      "k2_001",
      "k2_002",
      "k2_003",
      "k2_004",
      "k2_005",
      "k2_006"
    ],
    "unlockAfter": "k1m4",
    "sbCards": []
  },
  {
    "id": "k2m2",
    "chapter": 2,
    "module": 2,
    "chapterTitle": {
      "de": "Zusammen wohnen",
      "uk": "Жити разом",
      "en": "Living together",
      "ru": "Жить вместе"
    },
    "title": {
      "de": "Wo ist die Katze? – Position und Richtung",
      "uk": "Де кіт? – позиція і напрямок",
      "en": "Where's the cat? – position and direction",
      "ru": "Где кот? – позиция и направление"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "wechselpraepositionen",
    "cardIds": [
      "k2_007",
      "k2_008",
      "k2_009",
      "k2_010",
      "k2_011",
      "k2_012"
    ],
    "unlockAfter": "k2m1",
    "sbCards": []
  },
  {
    "id": "k2m3",
    "chapter": 2,
    "module": 3,
    "chapterTitle": {
      "de": "Zusammen wohnen",
      "uk": "Жити разом",
      "en": "Living together",
      "ru": "Жить вместе"
    },
    "title": {
      "de": "Alles ist fertig – ein Zimmer beschreiben",
      "uk": "Все готово – описуємо кімнату",
      "en": "Everything's ready – describing a room",
      "ru": "Всё готово – описываем комнату"
    },
    "skills": [
      "Schreiben",
      "Sprechen"
    ],
    "grammar": "weil_satz",
    "cardIds": [
      "k2_013",
      "k2_014",
      "k2_015",
      "k2_016",
      "k2_017",
      "k2_018"
    ],
    "unlockAfter": "k2m2",
    "sbCards": []
  },
  {
    "id": "k2m4",
    "chapter": 2,
    "module": 4,
    "chapterTitle": {
      "de": "Zusammen wohnen",
      "uk": "Жити разом",
      "en": "Living together",
      "ru": "Жить вместе"
    },
    "title": {
      "de": "Aufgaben in der WG – Übungen und Wiederholung",
      "uk": "Обовʼязки у спільній квартирі – вправи і повторення",
      "en": "Chores in the shared flat – exercises and review",
      "ru": "Обязанности в квартире с соседями – упражнения и повторение"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k2_019",
      "k2_020",
      "k2_021",
      "k2_022",
      "k2_023",
      "k2_024"
    ],
    "unlockAfter": "k2m3",
    "sbCards": []
  },
  {
    "id": "k3m1",
    "chapter": 3,
    "module": 1,
    "chapterTitle": {
      "de": "Arbeit und Freizeit",
      "uk": "Робота і дозвілля",
      "en": "Work and leisure",
      "ru": "Работа и досуг"
    },
    "title": {
      "de": "Über den Beruf und die Freizeit sprechen",
      "uk": "Говоримо про професію і дозвілля",
      "en": "Talking about work and leisure",
      "ru": "Говорим о профессии и досуге"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "dativ_akkusativ_verben",
    "cardIds": [
      "k3_001",
      "k3_002",
      "k3_003",
      "k3_004",
      "k3_005"
    ],
    "unlockAfter": "k2m4",
    "sbCards": []
  },
  {
    "id": "k3m2",
    "chapter": 3,
    "module": 2,
    "chapterTitle": {
      "de": "Arbeit und Freizeit",
      "uk": "Робота і дозвілля",
      "en": "Work and leisure",
      "ru": "Работа и досуг"
    },
    "title": {
      "de": "Hast du gehört, dass ...?",
      "uk": "Ти чув, що ...?",
      "en": "Have you heard that ...?",
      "ru": "Ты слышал, что ...?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "dass_satz",
    "cardIds": [
      "k3_006",
      "k3_007",
      "k3_008",
      "k3_009",
      "k3_010"
    ],
    "unlockAfter": "k3m1",
    "sbCards": []
  },
  {
    "id": "k3m3",
    "chapter": 3,
    "module": 3,
    "chapterTitle": {
      "de": "Arbeit und Freizeit",
      "uk": "Робота і дозвілля",
      "en": "Work and leisure",
      "ru": "Работа и досуг"
    },
    "title": {
      "de": "Wir wollten doch... – Termine und Pläne",
      "uk": "Ми ж хотіли... – зустрічі і плани",
      "en": "We wanted to... – appointments and plans",
      "ru": "Мы же хотели... – встречи и планы"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "modalverben_praeteritum",
    "cardIds": [
      "k3_011",
      "k3_012",
      "k3_013",
      "k3_014",
      "k3_015"
    ],
    "unlockAfter": "k3m2",
    "sbCards": []
  },
  {
    "id": "k3m4",
    "chapter": 3,
    "module": 4,
    "chapterTitle": {
      "de": "Arbeit und Freizeit",
      "uk": "Робота і дозвілля",
      "en": "Work and leisure",
      "ru": "Работа и досуг"
    },
    "title": {
      "de": "Freizeitangebote und Sportvereine – Übungen",
      "uk": "Пропозиції для дозвілля і спортивні клуби – вправи",
      "en": "Leisure offers and sports clubs – exercises",
      "ru": "Предложения для досуга и спортивные клубы – упражнения"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k3_016",
      "k3_017",
      "k3_018",
      "k3_019",
      "k3_020"
    ],
    "unlockAfter": "k3m3",
    "sbCards": []
  },
  {
    "id": "k4m1",
    "chapter": 4,
    "module": 1,
    "chapterTitle": {
      "de": "Was ziehe ich an?",
      "uk": "Що мені одягнути?",
      "en": "What shall I wear?",
      "ru": "Что мне надеть?"
    },
    "title": {
      "de": "Kleidungsstücke benennen",
      "uk": "Називаємо предмети одягу",
      "en": "Naming items of clothing",
      "ru": "Называем предметы одежды"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "dativ_verben",
    "cardIds": [
      "k4_001",
      "k4_002",
      "k4_003",
      "k4_004",
      "k4_005",
      "k4_006"
    ],
    "unlockAfter": "k3m4",
    "sbCards": []
  },
  {
    "id": "k4m2",
    "chapter": 4,
    "module": 2,
    "chapterTitle": {
      "de": "Was ziehe ich an?",
      "uk": "Що мені одягнути?",
      "en": "What shall I wear?",
      "ru": "Что мне надеть?"
    },
    "title": {
      "de": "Kleidung kaufen und beschreiben",
      "uk": "Купуємо і описуємо одяг",
      "en": "Buying and describing clothes",
      "ru": "Покупаем и описываем одежду"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "adjektivendungen",
    "cardIds": [
      "k4_007",
      "k4_008",
      "k4_009",
      "k4_010",
      "k4_011",
      "k4_012"
    ],
    "unlockAfter": "k4m1",
    "sbCards": []
  },
  {
    "id": "k4m3",
    "chapter": 4,
    "module": 3,
    "chapterTitle": {
      "de": "Was ziehe ich an?",
      "uk": "Що мені одягнути?",
      "en": "What shall I wear?",
      "ru": "Что мне надеть?"
    },
    "title": {
      "de": "Eine grüne Hose? – Was für ein Hemd möchtest du?",
      "uk": "Зелені штани? – яку сорочку ти хочеш?",
      "en": "Green trousers? – what kind of shirt do you want?",
      "ru": "Зелёные брюки? – какую рубашку ты хочешь?"
    },
    "skills": [
      "Sprechen",
      "Schreiben"
    ],
    "grammar": "adjektivendungen",
    "cardIds": [
      "k4_013",
      "k4_014",
      "k4_015",
      "k4_016",
      "k4_017",
      "k4_018"
    ],
    "unlockAfter": "k4m2",
    "sbCards": []
  },
  {
    "id": "k4m4",
    "chapter": 4,
    "module": 4,
    "chapterTitle": {
      "de": "Was ziehe ich an?",
      "uk": "Що мені одягнути?",
      "en": "What shall I wear?",
      "ru": "Что мне надеть?"
    },
    "title": {
      "de": "Festkleidung – Übungen und Wiederholung",
      "uk": "Святковий одяг – вправи і повторення",
      "en": "Formal wear – exercises and review",
      "ru": "Праздничная одежда – упражнения и повторение"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k4_019",
      "k4_020",
      "k4_021",
      "k4_022",
      "k4_023"
    ],
    "unlockAfter": "k4m3",
    "sbCards": []
  },
  {
    "id": "k5m1",
    "chapter": 5,
    "module": 1,
    "chapterTitle": {
      "de": "Fahrrad, Auto oder Bus?",
      "uk": "Велосипед, авто чи автобус?",
      "en": "Bike, car or bus?",
      "ru": "Велосипед, авто или автобус?"
    },
    "title": {
      "de": "Verkehrsmittel im Alltag",
      "uk": "Транспортні засоби у повсякденному житті",
      "en": "Means of transport in everyday life",
      "ru": "Транспортные средства в повседневной жизни"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "wenn_satz",
    "cardIds": [
      "k5_001",
      "k5_002",
      "k5_003",
      "k5_004",
      "k5_005"
    ],
    "unlockAfter": "k4m4",
    "sbCards": []
  },
  {
    "id": "k5m2",
    "chapter": 5,
    "module": 2,
    "chapterTitle": {
      "de": "Fahrrad, Auto oder Bus?",
      "uk": "Велосипед, авто чи автобус?",
      "en": "Bike, car or bus?",
      "ru": "Велосипед, авто или автобус?"
    },
    "title": {
      "de": "Wie kommen Sie zur Arbeit?",
      "uk": "Як ви добираєтеся на роботу?",
      "en": "How do you get to work?",
      "ru": "Как вы добираетесь до работы?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "weil_satz",
    "cardIds": [
      "k5_006",
      "k5_007",
      "k5_008",
      "k5_009",
      "k5_010"
    ],
    "unlockAfter": "k5m1",
    "sbCards": []
  },
  {
    "id": "k5m3",
    "chapter": 5,
    "module": 3,
    "chapterTitle": {
      "de": "Fahrrad, Auto oder Bus?",
      "uk": "Велосипед, авто чи автобус?",
      "en": "Bike, car or bus?",
      "ru": "Велосипед, авто или автобус?"
    },
    "title": {
      "de": "Die U-Bahn ist schneller als der Bus",
      "uk": "Метро швидше, ніж автобус",
      "en": "The subway is faster than the bus",
      "ru": "Метро быстрее автобуса"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "komparativ",
    "cardIds": [
      "k5_011",
      "k5_012",
      "k5_013",
      "k5_014",
      "k5_015"
    ],
    "unlockAfter": "k5m2",
    "sbCards": []
  },
  {
    "id": "k5m4",
    "chapter": 5,
    "module": 4,
    "chapterTitle": {
      "de": "Fahrrad, Auto oder Bus?",
      "uk": "Велосипед, авто чи автобус?",
      "en": "Bike, car or bus?",
      "ru": "Велосипед, авто или автобус?"
    },
    "title": {
      "de": "Mit dem Rollstuhl unterwegs – Übungen",
      "uk": "У дорозі на інвалідному візку – вправи",
      "en": "Getting around in a wheelchair – exercises",
      "ru": "В пути на инвалидной коляске – упражнения"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "superlativ",
    "cardIds": [
      "k5_016",
      "k5_017",
      "k5_018",
      "k5_019",
      "k5_020"
    ],
    "unlockAfter": "k5m3",
    "sbCards": []
  },
  {
    "id": "k6m1",
    "chapter": 6,
    "module": 1,
    "chapterTitle": {
      "de": "Eine Familie – viele Länder",
      "uk": "Одна сімʼя – багато країн",
      "en": "One family – many countries",
      "ru": "Одна семья – много стран"
    },
    "title": {
      "de": "Über das Leben in verschiedenen Ländern sprechen",
      "uk": "Говоримо про життя в різних країнах",
      "en": "Talking about life in different countries",
      "ru": "Говорим о жизни в разных странах"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "modalverben",
    "cardIds": [
      "k6_001",
      "k6_002",
      "k6_003",
      "k6_004",
      "k6_005"
    ],
    "unlockAfter": "k5m4",
    "sbCards": []
  },
  {
    "id": "k6m2",
    "chapter": 6,
    "module": 2,
    "chapterTitle": {
      "de": "Eine Familie – viele Länder",
      "uk": "Одна сімʼя – багато країн",
      "en": "One family – many countries",
      "ru": "Одна семья – много стран"
    },
    "title": {
      "de": "Am Anfang war es schwer... – Migration",
      "uk": "Спочатку було важко... – міграція",
      "en": "At first it was hard... – migration",
      "ru": "Сначала было трудно... – миграция"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "temporale_praepositionen",
    "cardIds": [
      "k6_006",
      "k6_007",
      "k6_008",
      "k6_009",
      "k6_010"
    ],
    "unlockAfter": "k6m1",
    "sbCards": []
  },
  {
    "id": "k6m3",
    "chapter": 6,
    "module": 3,
    "chapterTitle": {
      "de": "Eine Familie – viele Länder",
      "uk": "Одна сімʼя – багато країн",
      "en": "One family – many countries",
      "ru": "Одна семья – много стран"
    },
    "title": {
      "de": "Erinnerungen – als oder wenn?",
      "uk": "Спогади – als чи wenn?",
      "en": "Memories – als or wenn?",
      "ru": "Воспоминания – als или wenn?"
    },
    "skills": [
      "Sprechen",
      "Schreiben"
    ],
    "grammar": "als_wenn_schon_erst",
    "cardIds": [
      "k6_011",
      "k6_012",
      "k6_013",
      "k6_014",
      "k6_015"
    ],
    "unlockAfter": "k6m2",
    "sbCards": []
  },
  {
    "id": "k6m4",
    "chapter": 6,
    "module": 4,
    "chapterTitle": {
      "de": "Eine Familie – viele Länder",
      "uk": "Одна сімʼя – багато країн",
      "en": "One family – many countries",
      "ru": "Одна семья – много стран"
    },
    "title": {
      "de": "Smalltalk auf der Hochzeit – Übungen",
      "uk": "Світська бесіда на весіллі – вправи",
      "en": "Small talk at the wedding – exercises",
      "ru": "Светская беседа на свадьбе – упражнения"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k6_016",
      "k6_017",
      "k6_018",
      "k6_019"
    ],
    "unlockAfter": "k6m3",
    "sbCards": []
  },
  {
    "id": "k7m1",
    "chapter": 7,
    "module": 1,
    "chapterTitle": {
      "de": "Wir machen einen Ausflug.",
      "uk": "Ми їдемо на екскурсію.",
      "en": "We're going on a trip.",
      "ru": "Мы едем на экскурсию."
    },
    "title": {
      "de": "Vorschläge für den Ausflug",
      "uk": "Пропозиції щодо екскурсії",
      "en": "Suggestions for the trip",
      "ru": "Предложения по поездке"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "wenn_satz",
    "cardIds": [
      "k7_001",
      "k7_002",
      "k7_003",
      "k7_004",
      "k7_005"
    ],
    "unlockAfter": "k6m4",
    "sbCards": []
  },
  {
    "id": "k7m2",
    "chapter": 7,
    "module": 2,
    "chapterTitle": {
      "de": "Wir machen einen Ausflug.",
      "uk": "Ми їдемо на екскурсію.",
      "en": "We're going on a trip.",
      "ru": "Мы едем на экскурсию."
    },
    "title": {
      "de": "Diese Idee ist gut!",
      "uk": "Ця ідея гарна!",
      "en": "This idea is good!",
      "ru": "Эта идея хорошая!"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "demonstrativartikel",
    "cardIds": [
      "k7_006",
      "k7_007",
      "k7_008",
      "k7_009",
      "k7_010"
    ],
    "unlockAfter": "k7m1",
    "sbCards": []
  },
  {
    "id": "k7m3",
    "chapter": 7,
    "module": 3,
    "chapterTitle": {
      "de": "Wir machen einen Ausflug.",
      "uk": "Ми їдемо на екскурсію.",
      "en": "We're going on a trip.",
      "ru": "Мы едем на экскурсию."
    },
    "title": {
      "de": "Wie wird das Wetter? – Berichte von Ausflügen",
      "uk": "Якою буде погода? – розповіді про екскурсії",
      "en": "What will the weather be like? – trip reports",
      "ru": "Какая будет погода? – рассказы о поездках"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "praeteritum",
    "cardIds": [
      "k7_011",
      "k7_012",
      "k7_013",
      "k7_014",
      "k7_015"
    ],
    "unlockAfter": "k7m2",
    "sbCards": []
  },
  {
    "id": "k7m4",
    "chapter": 7,
    "module": 4,
    "chapterTitle": {
      "de": "Wir machen einen Ausflug.",
      "uk": "Ми їдемо на екскурсію.",
      "en": "We're going on a trip.",
      "ru": "Мы едем на экскурсию."
    },
    "title": {
      "de": "Der Ausflug war super! – Übungen",
      "uk": "Екскурсія була чудовою! – вправи",
      "en": "The trip was great! – exercises",
      "ru": "Поездка была отличной! – упражнения"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k7_016",
      "k7_017",
      "k7_018"
    ],
    "unlockAfter": "k7m3",
    "sbCards": []
  },
  {
    "id": "k8m1",
    "chapter": 8,
    "module": 1,
    "chapterTitle": {
      "de": "Auf nach Berlin!",
      "uk": "Вперед до Берліна!",
      "en": "Off to Berlin!",
      "ru": "Вперёд в Берлин!"
    },
    "title": {
      "de": "Informationen über Berlin, über Pläne sprechen",
      "uk": "Інформація про Берлін, говоримо про плани",
      "en": "Information about Berlin, talking about plans",
      "ru": "Информация о Берлине, говорим о планах"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "lokale_praepositionen",
    "cardIds": [
      "k8_001",
      "k8_002",
      "k8_003",
      "k8_004",
      "k8_005"
    ],
    "unlockAfter": "k7m4",
    "sbCards": []
  },
  {
    "id": "k8m2",
    "chapter": 8,
    "module": 2,
    "chapterTitle": {
      "de": "Auf nach Berlin!",
      "uk": "Вперед до Берліна!",
      "en": "Off to Berlin!",
      "ru": "Вперёд в Берлин!"
    },
    "title": {
      "de": "Wohin in Berlin? – Zu Fuß unterwegs",
      "uk": "Куди піти в Берліні? – пішки містом",
      "en": "Where to in Berlin? – on foot",
      "ru": "Куда пойти в Берлине? – пешком по городу"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "lokale_praepositionen",
    "cardIds": [
      "k8_006",
      "k8_007",
      "k8_008",
      "k8_009",
      "k8_010"
    ],
    "unlockAfter": "k8m1",
    "sbCards": []
  },
  {
    "id": "k8m3",
    "chapter": 8,
    "module": 3,
    "chapterTitle": {
      "de": "Auf nach Berlin!",
      "uk": "Вперед до Берліна!",
      "en": "Off to Berlin!",
      "ru": "Вперёд в Берлин!"
    },
    "title": {
      "de": "Ich bin Fan von ... – Danke, das ist nett, aber ...",
      "uk": "Я фанат ... – дякую, це мило, але ...",
      "en": "I'm a fan of ... – thanks, that's nice, but ...",
      "ru": "Я фанат ... – спасибо, это мило, но ..."
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "adjektivendungen",
    "cardIds": [
      "k8_011",
      "k8_012",
      "k8_013",
      "k8_014",
      "k8_015"
    ],
    "unlockAfter": "k8m2",
    "sbCards": []
  },
  {
    "id": "k8m4",
    "chapter": 8,
    "module": 4,
    "chapterTitle": {
      "de": "Auf nach Berlin!",
      "uk": "Вперед до Берліна!",
      "en": "Off to Berlin!",
      "ru": "Вперёд в Берлин!"
    },
    "title": {
      "de": "Pinas Ausbildung – Übungen und Wiederholung",
      "uk": "Навчання Піни – вправи і повторення",
      "en": "Pina's training – exercises and review",
      "ru": "Обучение Пины – упражнения и повторение"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k8_016",
      "k8_017"
    ],
    "unlockAfter": "k8m3",
    "sbCards": []
  },
  {
    "id": "k9m1",
    "chapter": 9,
    "module": 1,
    "chapterTitle": {
      "de": "Eltern – Kinder – Schule",
      "en": "Parents – Children – School",
      "uk": "Батьки – діти – школа",
      "ru": "Родители – дети – школа"
    },
    "title": {
      "de": "Der Schulalltag der Familie Wachter",
      "en": "The Wachter family's everyday school life",
      "uk": "Шкільні будні родини Вахтер",
      "ru": "Школьные будни семьи Вахтер"
    },
    "skills": [
      "Sprechen",
      "Hören",
      "Lesen"
    ],
    "grammar": "perfekt",
    "cardIds": [
      "k9_001",
      "k9_002",
      "k9_003",
      "k9_004",
      "k9_005",
      "k9_006",
      "k9_007"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k9m2",
    "chapter": 9,
    "module": 2,
    "chapterTitle": {
      "de": "Eltern – Kinder – Schule",
      "en": "Parents – Children – School",
      "uk": "Батьки – діти – школа",
      "ru": "Родители – дети – школа"
    },
    "title": {
      "de": "Gefühle und Erfahrungen in der Schule – der Elternsprechtag",
      "en": "Feelings and experiences at school – the parent-teacher conference",
      "uk": "Почуття та досвід у школі – батьківські збори",
      "ru": "Чувства и опыт в школе – родительское собрание"
    },
    "skills": [
      "Sprechen",
      "Hören",
      "Schreiben"
    ],
    "grammar": "praepositionalverben",
    "cardIds": [
      "k9_008",
      "k9_009",
      "k9_010",
      "k9_011",
      "k9_012",
      "k9_013",
      "k9_014"
    ],
    "unlockAfter": "k9m1",
    "sbCards": []
  },
  {
    "id": "k9m3",
    "chapter": 9,
    "module": 3,
    "chapterTitle": {
      "de": "Eltern – Kinder – Schule",
      "en": "Parents – Children – School",
      "uk": "Батьки – діти – школа",
      "ru": "Родители – дети – школа"
    },
    "title": {
      "de": "Das deutsche Schulsystem",
      "en": "The German school system",
      "uk": "Шкільна система Німеччини",
      "ru": "Школьная система Германии"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k9_015",
      "k9_016",
      "k9_017",
      "k9_018"
    ],
    "unlockAfter": "k9m2",
    "sbCards": []
  },
  {
    "id": "k9m4",
    "chapter": 9,
    "module": 4,
    "chapterTitle": {
      "de": "Eltern – Kinder – Schule",
      "en": "Parents – Children – School",
      "uk": "Батьки – діти – школа",
      "ru": "Родители – дети – школа"
    },
    "title": {
      "de": "Schule und Familie – Übungen und Wiederholung",
      "en": "School and family – exercises and review",
      "uk": "Школа і сімʼя – вправи та повторення",
      "ru": "Школа и семья – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: -er oder -a am Wortende",
    "cardIds": [
      "k9_019",
      "k9_020",
      "k9_021"
    ],
    "unlockAfter": "k9m3",
    "sbCards": []
  },
  {
    "id": "k10m1",
    "chapter": 10,
    "module": 1,
    "chapterTitle": {
      "de": "Zusammen geht es besser!",
      "en": "Together it works better!",
      "uk": "Разом краще!",
      "ru": "Вместе лучше!"
    },
    "title": {
      "de": "Zusammenleben – Ärger und Konflikte",
      "en": "Living together – anger and conflicts",
      "uk": "Життя разом – роздратування та конфлікти",
      "ru": "Совместная жизнь – раздражение и конфликты"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "satz_mit_deshalb",
    "cardIds": [
      "k10_001",
      "k10_002",
      "k10_003",
      "k10_004",
      "k10_005",
      "k10_006"
    ],
    "unlockAfter": "k9m4",
    "sbCards": []
  },
  {
    "id": "k10m2",
    "chapter": 10,
    "module": 2,
    "chapterTitle": {
      "de": "Zusammen geht es besser!",
      "en": "Together it works better!",
      "uk": "Разом краще!",
      "ru": "Вместе лучше!"
    },
    "title": {
      "de": "Um einen Gefallen bitten und sich entschuldigen",
      "en": "Asking for a favour and apologising",
      "uk": "Просити про послугу та вибачатися",
      "ru": "Просить об услуге и извиняться"
    },
    "skills": [
      "Sprechen",
      "Schreiben"
    ],
    "grammar": "hoeflichkeit_konjunktiv_a22",
    "cardIds": [
      "k10_007",
      "k10_008",
      "k10_009",
      "k10_010",
      "k10_011",
      "k10_012"
    ],
    "unlockAfter": "k10m1",
    "sbCards": []
  },
  {
    "id": "k10m3",
    "chapter": 10,
    "module": 3,
    "chapterTitle": {
      "de": "Zusammen geht es besser!",
      "en": "Together it works better!",
      "uk": "Разом краще!",
      "ru": "Вместе лучше!"
    },
    "title": {
      "de": "Zusammenarbeit und Verschiedenheit",
      "en": "Cooperation and diversity",
      "uk": "Співпраця та несхожість",
      "ru": "Сотрудничество и различия"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k10_013",
      "k10_014",
      "k10_015",
      "k10_016",
      "k10_017"
    ],
    "unlockAfter": "k10m2",
    "sbCards": []
  },
  {
    "id": "k10m4",
    "chapter": 10,
    "module": 4,
    "chapterTitle": {
      "de": "Zusammen geht es besser!",
      "en": "Together it works better!",
      "uk": "Разом краще!",
      "ru": "Вместе лучше!"
    },
    "title": {
      "de": "Konflikte lösen – Übungen und Wiederholung",
      "en": "Resolving conflicts – exercises and review",
      "uk": "Розвʼязання конфліктів – вправи та повторення",
      "ru": "Разрешение конфликтов – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: e oder ä",
    "cardIds": [
      "k10_018",
      "k10_019",
      "k10_020"
    ],
    "unlockAfter": "k10m3",
    "sbCards": []
  },
  {
    "id": "k11m1",
    "chapter": 11,
    "module": 1,
    "chapterTitle": {
      "de": "Alles digital?",
      "en": "Everything digital?",
      "uk": "Все цифрове?",
      "ru": "Всё цифровое?"
    },
    "title": {
      "de": "Mediennutzung im Alltag",
      "en": "Media use in everyday life",
      "uk": "Використання медіа у повсякденні",
      "ru": "Использование медиа в повседневной жизни"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "adjektiv_bestimmter_artikel",
    "cardIds": [
      "k11_001",
      "k11_002",
      "k11_003",
      "k11_004",
      "k11_005",
      "k11_006"
    ],
    "unlockAfter": "k10m4",
    "sbCards": []
  },
  {
    "id": "k11m2",
    "chapter": 11,
    "module": 2,
    "chapterTitle": {
      "de": "Alles digital?",
      "en": "Everything digital?",
      "uk": "Все цифрове?",
      "ru": "Всё цифровое?"
    },
    "title": {
      "de": "Ein Gerät ist kaputt – im Geschäft beraten lassen",
      "en": "A device is broken – getting advice in the shop",
      "uk": "Прилад зламався – консультація в магазині",
      "ru": "Прибор сломался – консультация в магазине"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "adjektiv_bestimmter_artikel",
    "cardIds": [
      "k11_007",
      "k11_008",
      "k11_009",
      "k11_010",
      "k11_011",
      "k11_012"
    ],
    "unlockAfter": "k11m1",
    "sbCards": []
  },
  {
    "id": "k11m3",
    "chapter": 11,
    "module": 3,
    "chapterTitle": {
      "de": "Alles digital?",
      "en": "Everything digital?",
      "uk": "Все цифрове?",
      "ru": "Всё цифровое?"
    },
    "title": {
      "de": "Nützliche Apps und digitales Lernen",
      "en": "Useful apps and digital learning",
      "uk": "Корисні застосунки та цифрове навчання",
      "ru": "Полезные приложения и цифровое обучение"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektiv_unbestimmter_artikel_wdh",
    "cardIds": [
      "k11_013",
      "k11_014",
      "k11_015",
      "k11_016",
      "k11_017"
    ],
    "unlockAfter": "k11m2",
    "sbCards": []
  },
  {
    "id": "k11m4",
    "chapter": 11,
    "module": 4,
    "chapterTitle": {
      "de": "Alles digital?",
      "en": "Everything digital?",
      "uk": "Все цифрове?",
      "ru": "Всё цифровое?"
    },
    "title": {
      "de": "Medien und Geräte – Übungen und Wiederholung",
      "en": "Media and devices – exercises and review",
      "uk": "Медіа та пристрої – вправи та повторення",
      "ru": "Медиа и устройства – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: Verben als Nomen",
    "cardIds": [
      "k11_018",
      "k11_019",
      "k11_020"
    ],
    "unlockAfter": "k11m3",
    "sbCards": []
  },
  {
    "id": "k12m1",
    "chapter": 12,
    "module": 1,
    "chapterTitle": {
      "de": "Das finde ich schön!",
      "en": "I think that's beautiful!",
      "uk": "Мені це подобається!",
      "ru": "Мне это нравится!"
    },
    "title": {
      "de": "Gefallen ausdrücken und einkaufen",
      "en": "Expressing likes and shopping",
      "uk": "Висловлювати вподобання та робити покупки",
      "ru": "Выражать симпатию и делать покупки"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "relativsatz_nominativ",
    "cardIds": [
      "k12_001",
      "k12_002",
      "k12_003",
      "k12_004",
      "k12_005",
      "k12_006"
    ],
    "unlockAfter": "k11m4",
    "sbCards": []
  },
  {
    "id": "k12m2",
    "chapter": 12,
    "module": 2,
    "chapterTitle": {
      "de": "Das finde ich schön!",
      "en": "I think that's beautiful!",
      "uk": "Мені це подобається!",
      "ru": "Мне это нравится!"
    },
    "title": {
      "de": "Ein Bild beschreiben und Vermutungen äußern",
      "en": "Describing a picture and expressing assumptions",
      "uk": "Описувати картину та висловлювати припущення",
      "ru": "Описывать картину и высказывать предположения"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "adjektiv_bestimmter_artikel",
    "cardIds": [
      "k12_007",
      "k12_008",
      "k12_009",
      "k12_010",
      "k12_011",
      "k12_012"
    ],
    "unlockAfter": "k12m1",
    "sbCards": []
  },
  {
    "id": "k12m3",
    "chapter": 12,
    "module": 3,
    "chapterTitle": {
      "de": "Das finde ich schön!",
      "en": "I think that's beautiful!",
      "uk": "Мені це подобається!",
      "ru": "Мне это нравится!"
    },
    "title": {
      "de": "Online kaufen und über Musik sprechen",
      "en": "Buying online and talking about music",
      "uk": "Купувати онлайн і говорити про музику",
      "ru": "Покупать онлайн и говорить о музыке"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "praepositionen_akkusativ_dativ",
    "cardIds": [
      "k12_013",
      "k12_014",
      "k12_015",
      "k12_016",
      "k12_017"
    ],
    "unlockAfter": "k12m2",
    "sbCards": []
  },
  {
    "id": "k12m4",
    "chapter": 12,
    "module": 4,
    "chapterTitle": {
      "de": "Das finde ich schön!",
      "en": "I think that's beautiful!",
      "uk": "Мені це подобається!",
      "ru": "Мне это нравится!"
    },
    "title": {
      "de": "Alltagsgegenstände – Übungen und Wiederholung",
      "en": "Everyday objects – exercises and review",
      "uk": "Побутові предмети – вправи та повторення",
      "ru": "Бытовые предметы – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: i, ie oder ih",
    "cardIds": [
      "k12_018",
      "k12_019",
      "k12_020"
    ],
    "unlockAfter": "k12m3",
    "sbCards": []
  },
  {
    "id": "k13m1",
    "chapter": 13,
    "module": 1,
    "chapterTitle": {
      "de": "Handwerk hat Zukunft!",
      "en": "Craft has a future!",
      "uk": "У ремесла є майбутнє!",
      "ru": "У ремесла есть будущее!"
    },
    "title": {
      "de": "Handwerksberufe und Traumberufe",
      "en": "Craft professions and dream jobs",
      "uk": "Ремісничі професії та професії мрії",
      "ru": "Ремесленные профессии и профессии мечты"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "verb_werden",
    "cardIds": [
      "k13_001",
      "k13_002",
      "k13_003",
      "k13_004",
      "k13_005",
      "k13_006"
    ],
    "unlockAfter": "k12m4",
    "sbCards": []
  },
  {
    "id": "k13m2",
    "chapter": 13,
    "module": 2,
    "chapterTitle": {
      "de": "Handwerk hat Zukunft!",
      "en": "Craft has a future!",
      "uk": "У ремесла є майбутнє!",
      "ru": "У ремесла есть будущее!"
    },
    "title": {
      "de": "Stärken, Tipps und Ratschläge für die Berufswahl",
      "en": "Strengths, tips and advice for choosing a career",
      "uk": "Сильні сторони, поради щодо вибору професії",
      "ru": "Сильные стороны, советы по выбору профессии"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "hoeflichkeit_konjunktiv_a22",
    "cardIds": [
      "k13_007",
      "k13_008",
      "k13_009",
      "k13_010",
      "k13_011",
      "k13_012"
    ],
    "unlockAfter": "k13m1",
    "sbCards": []
  },
  {
    "id": "k13m3",
    "chapter": 13,
    "module": 3,
    "chapterTitle": {
      "de": "Handwerk hat Zukunft!",
      "en": "Craft has a future!",
      "uk": "У ремесла є майбутнє!",
      "ru": "У ремесла есть будущее!"
    },
    "title": {
      "de": "Eine Bewerbung schreiben – ein Handwerksbetrieb stellt sich vor",
      "en": "Writing an application – a craft business introduces itself",
      "uk": "Пишемо резюме – ремісниче підприємство презентує себе",
      "ru": "Пишем резюме – ремесленное предприятие представляет себя"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "dass_satz_wdh",
    "cardIds": [
      "k13_013",
      "k13_014",
      "k13_015",
      "k13_016",
      "k13_017"
    ],
    "unlockAfter": "k13m2",
    "sbCards": []
  },
  {
    "id": "k13m4",
    "chapter": 13,
    "module": 4,
    "chapterTitle": {
      "de": "Handwerk hat Zukunft!",
      "en": "Craft has a future!",
      "uk": "У ремесла є майбутнє!",
      "ru": "У ремесла есть будущее!"
    },
    "title": {
      "de": "Berufe und Bewerbung – Übungen und Wiederholung",
      "en": "Professions and applications – exercises and review",
      "uk": "Професії та резюме – вправи та повторення",
      "ru": "Профессии и резюме – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: d oder t am Wortende",
    "cardIds": [
      "k13_018",
      "k13_019",
      "k13_020"
    ],
    "unlockAfter": "k13m3",
    "sbCards": []
  },
  {
    "id": "k14m1",
    "chapter": 14,
    "module": 1,
    "chapterTitle": {
      "de": "Freundschaft",
      "en": "Friendship",
      "uk": "Дружба",
      "ru": "Дружба"
    },
    "title": {
      "de": "Gute Freunde – wie sind sie?",
      "en": "Good friends – what are they like?",
      "uk": "Добрі друзі – які вони?",
      "ru": "Хорошие друзья – какие они?"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "personalpronomen_wdh",
    "cardIds": [
      "k14_001",
      "k14_002",
      "k14_003",
      "k14_004",
      "k14_005",
      "k14_006"
    ],
    "unlockAfter": "k13m4",
    "sbCards": []
  },
  {
    "id": "k14m2",
    "chapter": 14,
    "module": 2,
    "chapterTitle": {
      "de": "Freundschaft",
      "en": "Friendship",
      "uk": "Дружба",
      "ru": "Дружба"
    },
    "title": {
      "de": "Haustiere und Verantwortung – etwas selbst machen oder machen lassen",
      "en": "Pets and responsibility – doing something yourself or having it done",
      "uk": "Домашні тварини й відповідальність – робити самому чи доручати",
      "ru": "Домашние животные и ответственность – делать самому или поручать"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "nebensatz_mit_damit",
    "cardIds": [
      "k14_007",
      "k14_008",
      "k14_009",
      "k14_010",
      "k14_011",
      "k14_012"
    ],
    "unlockAfter": "k14m1",
    "sbCards": []
  },
  {
    "id": "k14m3",
    "chapter": 14,
    "module": 3,
    "chapterTitle": {
      "de": "Freundschaft",
      "en": "Friendship",
      "uk": "Дружба",
      "ru": "Дружба"
    },
    "title": {
      "de": "Was im Leben wichtig ist – von sich erzählen",
      "en": "What matters in life – talking about yourself",
      "uk": "Що важливо в житті – розповідати про себе",
      "ru": "Что важно в жизни – рассказывать о себе"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k14_013",
      "k14_014",
      "k14_015",
      "k14_016",
      "k14_017"
    ],
    "unlockAfter": "k14m2",
    "sbCards": []
  },
  {
    "id": "k14m4",
    "chapter": 14,
    "module": 4,
    "chapterTitle": {
      "de": "Freundschaft",
      "en": "Friendship",
      "uk": "Дружба",
      "ru": "Дружба"
    },
    "title": {
      "de": "Freundschaft – Übungen und Wiederholung",
      "en": "Friendship – exercises and review",
      "uk": "Дружба – вправи та повторення",
      "ru": "Дружба – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: ss und ß",
    "cardIds": [
      "k14_018",
      "k14_019",
      "k14_020"
    ],
    "unlockAfter": "k14m3",
    "sbCards": []
  },
  {
    "id": "k15m1",
    "chapter": 15,
    "module": 1,
    "chapterTitle": {
      "de": "Ämter und Behörden",
      "en": "Offices and authorities",
      "uk": "Установи та відомства",
      "ru": "Учреждения и ведомства"
    },
    "title": {
      "de": "Bei Ämtern und Behörden",
      "en": "At offices and authorities",
      "uk": "В установах і відомствах",
      "ru": "В учреждениях и ведомствах"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "indirekter_fragesatz_fragewort",
    "cardIds": [
      "k15_001",
      "k15_002",
      "k15_003",
      "k15_004",
      "k15_005",
      "k15_006"
    ],
    "unlockAfter": "k14m4",
    "sbCards": []
  },
  {
    "id": "k15m2",
    "chapter": 15,
    "module": 2,
    "chapterTitle": {
      "de": "Ämter und Behörden",
      "en": "Offices and authorities",
      "uk": "Установи та відомства",
      "ru": "Учреждения и ведомства"
    },
    "title": {
      "de": "Führerschein, Bußgeld und Fundbüro",
      "en": "Driving licence, fines and lost property office",
      "uk": "Водійські права, штраф і бюро знахідок",
      "ru": "Водительские права, штраф и бюро находок"
    },
    "skills": [
      "Hören",
      "Lesen"
    ],
    "grammar": "indirekter_fragesatz_ob",
    "cardIds": [
      "k15_007",
      "k15_008",
      "k15_009",
      "k15_010",
      "k15_011",
      "k15_012"
    ],
    "unlockAfter": "k15m1",
    "sbCards": []
  },
  {
    "id": "k15m3",
    "chapter": 15,
    "module": 3,
    "chapterTitle": {
      "de": "Ämter und Behörden",
      "en": "Offices and authorities",
      "uk": "Установи та відомства",
      "ru": "Учреждения и ведомства"
    },
    "title": {
      "de": "Behördenschreiben verstehen und Termine vorbereiten",
      "en": "Understanding official letters and preparing appointments",
      "uk": "Розуміти офіційні листи й готуватися до зустрічей",
      "ru": "Понимать официальные письма и готовиться к встречам"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "indirekter_fragesatz_fragewort",
    "cardIds": [
      "k15_013",
      "k15_014",
      "k15_015",
      "k15_016",
      "k15_017"
    ],
    "unlockAfter": "k15m2",
    "sbCards": []
  },
  {
    "id": "k15m4",
    "chapter": 15,
    "module": 4,
    "chapterTitle": {
      "de": "Ämter und Behörden",
      "en": "Offices and authorities",
      "uk": "Установи та відомства",
      "ru": "Учреждения и ведомства"
    },
    "title": {
      "de": "Ämter und Behörden – Übungen und Wiederholung",
      "en": "Offices and authorities – exercises and review",
      "uk": "Установи та відомства – вправи та повторення",
      "ru": "Учреждения и ведомства – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: Texte korrigieren",
    "cardIds": [
      "k15_018",
      "k15_019",
      "k15_020"
    ],
    "unlockAfter": "k15m3",
    "sbCards": []
  },
  {
    "id": "k16m1",
    "chapter": 16,
    "module": 1,
    "chapterTitle": {
      "de": "Das feiern wir!",
      "en": "Let's celebrate that!",
      "uk": "Це ми святкуємо!",
      "ru": "Это мы празднуем!"
    },
    "title": {
      "de": "Ein Fest planen",
      "en": "Planning a party",
      "uk": "Плануємо свято",
      "ru": "Планируем праздник"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensaetze_konnektoren_wdh",
    "cardIds": [
      "k16_001",
      "k16_002",
      "k16_003",
      "k16_004",
      "k16_005",
      "k16_006"
    ],
    "unlockAfter": "k15m4",
    "sbCards": []
  },
  {
    "id": "k16m2",
    "chapter": 16,
    "module": 2,
    "chapterTitle": {
      "de": "Das feiern wir!",
      "en": "Let's celebrate that!",
      "uk": "Це ми святкуємо!",
      "ru": "Это мы празднуем!"
    },
    "title": {
      "de": "Einladungen und Glückwünsche",
      "en": "Invitations and congratulations",
      "uk": "Запрошення та вітання",
      "ru": "Приглашения и поздравления"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [
      "k16_007",
      "k16_008",
      "k16_009",
      "k16_010",
      "k16_011",
      "k16_012"
    ],
    "unlockAfter": "k16m1",
    "sbCards": []
  },
  {
    "id": "k16m3",
    "chapter": 16,
    "module": 3,
    "chapterTitle": {
      "de": "Das feiern wir!",
      "en": "Let's celebrate that!",
      "uk": "Це ми святкуємо!",
      "ru": "Это мы празднуем!"
    },
    "title": {
      "de": "Feste weltweit",
      "en": "Celebrations around the world",
      "uk": "Свята у світі",
      "ru": "Праздники по всему миру"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k16_013",
      "k16_014",
      "k16_015",
      "k16_016",
      "k16_017"
    ],
    "unlockAfter": "k16m2",
    "sbCards": []
  },
  {
    "id": "k16m4",
    "chapter": 16,
    "module": 4,
    "chapterTitle": {
      "de": "Das feiern wir!",
      "en": "Let's celebrate that!",
      "uk": "Це ми святкуємо!",
      "ru": "Это мы празднуем!"
    },
    "title": {
      "de": "Feste und Feiern – Übungen und Wiederholung",
      "en": "Celebrations and parties – exercises and review",
      "uk": "Свята та урочистості – вправи та повторення",
      "ru": "Праздники и торжества – упражнения и повторение"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "Richtig schreiben: Komma vor Nebensätzen",
    "cardIds": [
      "k16_018",
      "k16_019",
      "k16_020"
    ],
    "unlockAfter": "k16m3",
    "sbCards": []
  }
];

var VOCAB = [
  {"id":"k1_001","cat":"k1","term":{"de":"sich vorstellen","en":"to introduce oneself","uk":"представлятися","ru":"представляться"},"short":{"de": "man sagt seinen Namen und ein paar Informationen über sich","en": "you say your name and some information about yourself","uk": "ти називаєш своє імʼя і трохи інформації про себе","ru": "ты называешь своё имя и немного информации о себе"},"def":{"de":"Der neue Kollege <g>hat</g> sich heute Morgen im Meeting allen <g><b>vorgestellt</b></g>.","en":"The new colleague <g>has</g> <g><b>introduced</b></g> himself to everyone in the meeting this morning.","uk":"Новий колега сьогодні вранці <b>представився</b> всім на нараді.","ru":"Новый коллега сегодня утром <b>представился</b> всем на совещании."},"gram":"perfekt"},
  {"id":"k1_002","cat":"k1","term":{"de":"der Kollege / die Kollegin","en":"colleague","uk":"колега","ru":"коллега"},"short":{"de": "eine Person, mit der man zusammen in einer Firma arbeitet","en": "a person you work with together in a company","uk": "людина, з якою ти разом працюєш у фірмі","ru": "человек, с которым ты вместе работаешь в фирме"},"def":{"de":"Meine neue <b>Kollegin</b> <g>ist</g> letzte Woche zu uns ins Team <g><b>gekommen</b></g>.","en":"My new <b>colleague</b> <g>has</g> <g><b>joined</b></g> our team last week.","uk":"Моя нова <b>колега</b> минулого тижня приєдналася до нашої команди.","ru":"Моя новая <b>коллега</b> на прошлой неделе присоединилась к нашей команде."},"gram":"perfekt"},
  {"id":"k1_003","cat":"k1","term":{"de":"die Firma","en":"company","uk":"фірма","ru":"фирма"},"short":{"de": "ein Unternehmen, in dem Menschen arbeiten","en": "a company where people work","uk": "підприємство, де працюють люди","ru": "предприятие, где работают люди"},"def":{"de":"Er <g>hat</g> zwei Jahre lang bei einer kleinen <b>Firma</b> in Köln <g><b>gearbeitet</b></g>.","en":"He <g>has</g> <g><b>worked</b></g> at a small <b>company</b> in Cologne for two years.","uk":"Він два роки <b>працював</b> у маленькій <b>фірмі</b> в Кельні.","ru":"Он два года <b>работал</b> в маленькой <b>фирме</b> в Кёльне."},"gram":"perfekt"},
  {"id":"k1_004","cat":"k1","term":{"de":"der Chef / die Chefin","en":"boss","uk":"начальник / начальниця","ru":"начальник"},"short":{"de": "die Person, die in einer Firma die Verantwortung hat","en": "the person who is in charge in a company","uk": "особа, яка відповідає за роботу у фірмі","ru": "человек, который отвечает за работу в фирме"},"def":{"de":"Die neue <b>Chefin</b> <g>hat</g> sich am Montag allen Mitarbeitern <g><b>vorgestellt</b></g>.","en":"The new <b>boss</b> <g>has</g> <g><b>introduced</b></g> herself to all employees on Monday.","uk":"Нова <b>керівниця</b> у понеділок <b>представилася</b> усім співробітникам.","ru":"Новая <b>начальница</b> в понедельник <b>представилась</b> всем сотрудникам."},"gram":"perfekt"},
  {"id":"k1_005","cat":"k1","term":{"de":"begrüßen","en":"to greet","uk":"вітати","ru":"приветствовать"},"short":{"de": "Hallo sagen, wenn man jemanden trifft","en": "to say hello when you meet someone","uk": "казати «привіт», коли зустрічаєш когось","ru": "говорить «привет», когда встречаешь кого-то"},"def":{"de":"Der Chef <g>hat</g> den neuen Kollegen sehr freundlich <g><b>begrüßt</b></g>.","en":"The boss <g>has</g> <g><b>greeted</b></g> the new colleague very kindly.","uk":"Керівник дуже привітно <b>привітав</b> нового колегу.","ru":"Начальник очень приветливо <b>поприветствовал</b> нового коллегу."},"gram":"perfekt"},
  {"id":"k1_006","cat":"k1","term":{"de":"das Team","en":"team","uk":"команда","ru":"команда"},"short":{"de": "eine Gruppe von Menschen, die zusammen arbeiten","en": "a group of people who work together","uk": "група людей, які працюють разом","ru": "группа людей, которые работают вместе"},"def":{"de":"Unser <b>Team</b> <g>hat</g> das Projekt schnell <g><b>fertig gemacht</b></g>.","en":"Our <b>team</b> <g>has</g> <g><b>finished</b></g> the project quickly.","uk":"Наша <b>команда</b> швидко <b>завершила</b> проєкт.","ru":"Наша <b>команда</b> быстро <b>завершила</b> проект."},"gram":"perfekt"},
  {"id":"k1_007","cat":"k1","term":{"de":"der erste Tag","en":"the first day","uk":"перший день","ru":"первый день"},"short":{"de": "der Tag, an dem man zum ersten Mal in der Firma arbeitet","en": "the day when you work at the company for the first time","uk": "день, коли ти вперше працюєш у фірмі","ru": "день, когда ты впервые работаешь в фирме"},"def":{"de":"An <b>ihrem ersten Tag</b> <g>hat</g> sie viele neue Namen <g><b>gelernt</b></g>.","en":"On <b>her first day</b>, she <g>has</g> <g><b>learned</b></g> many new names.","uk":"<b>Свого першого дня</b> вона <b>вивчила</b> багато нових імен.","ru":"В <b>свой первый день</b> она <b>выучила</b> много новых имён."},"gram":"perfekt"},
  {"id":"k1_008","cat":"k1","term":{"de":"die Erfahrung","en":"experience","uk":"досвід","ru":"опыт"},"short":{"de": "das, was man im Leben oder bei der Arbeit schon gemacht und gelernt hat","en": "what you have already done and learned in life or at work","uk": "те, що ти вже робив і чого навчився в житті чи на роботі","ru": "то, что ты уже делал и чему научился в жизни или на работе"},"def":{"de":"Er bekommt die Stelle, <g>weil</g> er viel <b>Erfahrung</b> im Büro hat.","en":"He gets the job <g>because</g> he has a lot of <b>experience</b> in the office.","uk":"Він отримує посаду, <g>тому що</g> має великий <b>досвід</b> роботи в офісі.","ru":"Он получает должность, <g>потому что</g> у него большой <b>опыт</b> работы в офисе."},"gram":"weil_satz"},
  {"id":"k1_009","cat":"k1","term":{"de":"der Beruf","en":"profession","uk":"професія","ru":"профессия"},"short":{"de": "die Arbeit, die man gelernt hat und regelmäßig macht","en": "the job you have learned and do regularly","uk": "робота, якої ти навчився і виконуєш регулярно","ru": "работа, которой ты научился и выполняешь регулярно"},"def":{"de":"Sie mag ihren <b>Beruf</b> sehr, <g>weil</g> sie jeden Tag mit Menschen spricht.","en":"She likes her <b>profession</b> a lot <g>because</g> she talks to people every day.","uk":"Їй дуже подобається її <b>професія</b>, <g>тому що</g> вона щодня спілкується з людьми.","ru":"Ей очень нравится её <b>профессия</b>, <g>потому что</g> она каждый день общается с людьми."},"gram":"weil_satz"},
  {"id":"k1_010","cat":"k1","term":{"de":"freundlich","en":"friendly","uk":"дружній","ru":"дружелюбный"},"short":{"de": "nett und höflich zu anderen Menschen","en": "nice and polite to other people","uk": "приємний і ввічливий до інших людей","ru": "приятный и вежливый к другим людям"},"def":{"de":"Alle mögen den neuen Kollegen, <g>weil</g> er sehr <b>freundlich</b> ist.","en":"Everyone likes the new colleague <g>because</g> he is very <b>friendly</b>.","uk":"Всім подобається новий колега, <g>тому що</g> він дуже <b>привітний</b>.","ru":"Всем нравится новый коллега, <g>потому что</g> он очень <b>дружелюбный</b>."},"gram":"weil_satz"},
  {"id":"k1_011","cat":"k1","term":{"de":"duzen","en":"to address someone as “du”","uk":"говорити на «ти»","ru":"обращаться на «ты»"},"short":{"de": "jemanden mit „du“ ansprechen, nicht mit „Sie“","en": "to address someone with „du“ (informal), not „Sie“","uk": "звертатися до когось на «ти», а не на «ви»","ru": "обращаться к кому-то на «ты», а не на «вы»"},"def":{"de":"Im Team <b>duzen</b> sich alle, <g>weil</g> die Atmosphäre sehr locker ist.","en":"Everyone in the team <b>uses „du“</b> <g>because</g> the atmosphere is very relaxed.","uk":"У команді всі <b>звертаються на «ти»</b>, <g>тому що</g> атмосфера дуже невимушена.","ru":"В команде все <b>обращаются на «ты»</b>, <g>потому что</g> атмосфера очень непринуждённая."},"gram":"weil_satz"},
  {"id":"k1_012","cat":"k1","term":{"de":"siezen","en":"to address someone as “Sie”","uk":"говорити на «ви»","ru":"обращаться на «вы»"},"short":{"de": "jemanden mit „Sie“ ansprechen, nicht mit „du“","en": "to address someone with „Sie“ (formal), not „du“","uk": "звертатися до когось на «ви», а не на «ти»","ru": "обращаться к кому-то на «вы», а не на «ты»"},"def":{"de":"Sie <b>siezt</b> den Chef immer noch, <g>weil</g> sie ihn erst seit einer Woche kennt.","en":"She still <b>uses „Sie“</b> with the boss <g>because</g> she has only known him for a week.","uk":"Вона й досі <b>звертається на «ви»</b> до керівника, <g>тому що</g> знає його лише тиждень.","ru":"Она всё ещё <b>обращается на «вы»</b> к начальнику, <g>потому что</g> знает его только неделю."},"gram":"weil_satz"},
  {"id":"k1_013","cat":"k1","term":{"de":"helfen","en":"to help","uk":"допомагати","ru":"помогать"},"short":{"de": "etwas für jemanden tun, damit die Arbeit leichter wird","en": "to do something for someone so that a task becomes easier","uk": "робити щось для когось, щоб робота стала легшою","ru": "делать что-то для кого-то, чтобы работа стала легче"},"def":{"de":"Ich <b>helfe</b> dir gern mit dem Computer, <g>weil</g> ich mich damit gut auskenne.","en":"I am happy to <b>help</b> you with the computer <g>because</g> I know a lot about it.","uk":"Я із задоволенням <b>допоможу</b> тобі з компʼютером, <g>тому що</g> добре на цьому розуміюся.","ru":"Я с удовольствием <b>помогу</b> тебе с компьютером, <g>потому что</g> хорошо в этом разбираюсь."},"gram":"weil_satz"},
  {"id":"k1_014","cat":"k1","term":{"de":"danken","en":"to thank","uk":"дякувати","ru":"благодарить"},"short":{"de": "„Danke“ sagen, weil jemand etwas Gutes für dich gemacht hat","en": "to say „thank you“ because someone did something good for you","uk": "казати «дякую», бо хтось зробив для тебе щось хороше","ru": "говорить «спасибо», потому что кто-то сделал для тебя что-то хорошее"},"def":{"de":"Ich <b>danke</b> dir sehr, <g>weil</g> du mir am ersten Tag so viel geholfen hast.","en":"I <b>thank</b> you very much <g>because</g> you helped me so much on the first day.","uk":"Я дуже тобі <b>дякую</b>, <g>тому що</g> ти так сильно допоміг мені першого дня.","ru":"Я очень тебя <b>благодарю</b>, <g>потому что</g> ты так сильно помог мне в первый день."},"gram":"weil_satz"},
  {"id":"k1_015","cat":"k1","term":{"de":"die Pause","en":"break","uk":"перерва","ru":"перерыв"},"short":{"de": "eine kurze Zeit, in der man bei der Arbeit nicht arbeitet","en": "a short time when you don't work during your job","uk": "короткий проміжок часу, коли ти не працюєш під час роботи","ru": "короткий промежуток времени, когда ты не работаешь на работе"},"def":{"de":"Die <b>Pause</b> gefällt <g>allen Kolleginnen und Kollegen</g> sehr gut.","en":"Everyone <g>on the team</g> likes the <b>break</b> a lot.","uk":"<b>Перерва</b> дуже подобається <g>усім колегам</g>.","ru":"<b>Перерыв</b> очень нравится <g>всем коллегам</g>."},"gram":"dativ_verben"},
  {"id":"k1_016","cat":"k1","term":{"de":"das Büro","en":"office","uk":"офіс","ru":"офис"},"short":{"de": "der Raum, in dem man normalerweise arbeitet","en": "the room where you normally work","uk": "приміщення, де ти зазвичай працюєш","ru": "помещение, где ты обычно работаешь"},"def":{"de":"Das neue <b>Büro</b> gefällt <g>mir</g> viel besser als das alte.","en":"The new <b>office</b> pleases <g>me</g> much more than the old one.","uk":"Новий <b>офіс</b> подобається <g>мені</g> набагато більше, ніж старий.","ru":"Новый <b>офис</b> нравится <g>мне</g> намного больше, чем старый."},"gram":"dativ_verben"},
  {"id":"k1_017","cat":"k1","term":{"de":"der Arbeitsplatz","en":"workplace","uk":"робоче місце","ru":"рабочее место"},"short":{"de": "der Ort oder Tisch, an dem man arbeitet","en": "the place or desk where you work","uk": "місце чи стіл, за яким ти працюєш","ru": "место или стол, за которым ты работаешь"},"def":{"de":"Der Chef zeigt <g>dem neuen Kollegen</g> seinen <b>Arbeitsplatz</b>.","en":"The boss shows <g>the new colleague</g> his <b>workplace</b>.","uk":"Керівник показує <g>новому колезі</g> його <b>робоче місце</b>.","ru":"Начальник показывает <g>новому коллеге</g> его <b>рабочее место</b>."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_018","cat":"k1","term":{"de":"die Aufgabe","en":"task","uk":"завдання","ru":"задание"},"short":{"de": "etwas, das man bei der Arbeit machen muss","en": "something you have to do at work","uk": "те, що ти маєш зробити на роботі","ru": "то, что ты должен сделать на работе"},"def":{"de":"Die Chefin erklärt <g>ihm</g> die neue <b>Aufgabe</b> ganz genau.","en":"The boss explains the new <b>task</b> to <g>him</g> very precisely.","uk":"Керівниця дуже детально пояснює <g>йому</g> нове <b>завдання</b>.","ru":"Начальница очень подробно объясняет <g>ему</g> новое <b>задание</b>."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_019","cat":"k1","term":{"de":"pünktlich","en":"punctual","uk":"пунктуальний","ru":"пунктуальный"},"short":{"de": "genau zur richtigen Zeit, nicht zu spät","en": "exactly on time, not late","uk": "точно у визначений час, не пізно","ru": "точно вовремя, не поздно"},"def":{"de":"Es ist <g>ihm</g> wichtig, immer <b>pünktlich</b> zur Arbeit zu kommen.","en":"It is important to <g>him</g> to always come to work <b>on time</b>.","uk":"<g>Йому</g> важливо завжди приходити на роботу <b>вчасно</b>.","ru":"<g>Ему</g> важно всегда приходить на работу <b>вовремя</b>."},"gram":"dativ_verben"},
  {"id":"k1_020","cat":"k1","term":{"de":"sich freuen","en":"to be glad","uk":"радіти","ru":"радоваться"},"short":{"de": "ein gutes, glückliches Gefühl haben","en": "to have a good, happy feeling","uk": "мати хороше, щасливе почуття","ru": "испытывать хорошее, радостное чувство"},"def":{"de":"Der neue Kollege <b>freut</b> sich schon auf <g>seinen ersten Arbeitstag</g>.","en":"The new colleague is already <b>looking forward</b> to <g>his first day of work</g>.","uk":"Новий колега вже <b>радіє</b> <g>своєму першому робочому дню</g>.","ru":"Новый коллега уже <b>радуется</b> <g>своему первому рабочему дню</g>."},"gram":""},
  {"id":"k1_021","cat":"k1","term":{"de":"die Einladung","en":"invitation","uk":"запрошення","ru":"приглашение"},"short":{"de": "eine Nachricht, mit der man jemanden zu etwas bittet, z. B. zu einer Party","en": "a message asking someone to come to something, e.g. a party","uk": "повідомлення, яким ти запрошуєш когось кудись, напр. на вечірку","ru": "сообщение, которым ты приглашаешь кого-то куда-то, напр. на вечеринку"},"def":{"de":"Die Chefin schickt <g>allen Kollegen</g> eine <b>Einladung</b> für den Einstand.","en":"The boss sends <g>all colleagues</g> an <b>invitation</b> for the welcome party.","uk":"Керівниця надсилає <g>усім колегам</g> <b>запрошення</b> на частування з нагоди початку роботи.","ru":"Начальница отправляет <g>всем коллегам</g> <b>приглашение</b> на угощение по случаю начала работы."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_022","cat":"k1","term":{"de":"feiern","en":"to celebrate","uk":"святкувати","ru":"праздновать"},"short":{"de": "ein besonderes Ereignis mit Essen, Trinken und guter Laune begehen","en": "to celebrate a special event with food, drink and a good mood","uk": "відзначати особливу подію з їжею, напоями і гарним настроєм","ru": "отмечать особое событие с едой, напитками и хорошим настроением"},"def":{"de":"Das Team möchte <g>dem neuen Kollegen</g> zu Ehren seinen ersten Tag <b>feiern</b>.","en":"The team wants to <b>celebrate</b> the first day in honour of <g>the new colleague</g>.","uk":"Команда хоче <b>відсвяткувати</b> перший день на честь <g>нового колеги</g>.","ru":"Команда хочет <b>отпраздновать</b> первый день в честь <g>нового коллеги</g>."},"gram":""},
  {"id":"k1_023","cat":"k1","term":{"de":"der Einstand","en":"welcome treat (first day)","uk":"частування з нагоди початку роботи","ru":"угощение по случаю начала работы"},"short":{"de": "eine kleine Feier am ersten Arbeitstag in einer neuen Firma","en": "a small celebration on your first day at a new company","uk": "невелике святкування у перший робочий день на новій фірмі","ru": "небольшое торжество в первый рабочий день на новой фирме"},"def":{"de":"Alle Kollegen gratulieren <g>ihm</g> herzlich zu seinem <b>Einstand</b>.","en":"All colleagues warmly congratulate <g>him</g> on his <b>welcome party</b>.","uk":"Усі колеги щиро вітають <g>його</g> з <b>частуванням з нагоди початку роботи</b>.","ru":"Все коллеги сердечно поздравляют <g>его</g> с <b>угощением по случаю начала работы</b>."},"gram":"dativ_verben"},
  {"id":"k1_024","cat":"k1","term":{"de":"weil","en":"because","uk":"тому що","ru":"потому что"},"short":{"de": "ein kleines Wort, mit dem man einen Grund nennt","en": "a small word used to give a reason","uk": "коротке слово, яким називають причину","ru": "короткое слово, которым называют причину"},"def":{"de":"Sie hilft <g>ihm</g> gern, <g><b>weil</b></g> er noch neu im Team ist.","en":"She likes to help <g>him</g> <g><b>because</b></g> he is still new to the team.","uk":"Вона залюбки допомагає <g>йому</g>, <g><b>тому що</b></g> він ще новенький у команді.","ru":"Она с удовольствием помогает <g>ему</g>, <g><b>потому что</b></g> он ещё новенький в команде."},"gram":"weil_satz"},
  {"id":"k1_025","cat":"k1","term":{"de":"die Veranstaltung","en":"event","uk":"захід","ru":"мероприятие"},"short":{"de": "ein organisiertes Ereignis, zu dem viele Menschen kommen","en": "an organised event that many people attend","uk": "організована подія, на яку приходить багато людей","ru": "организованное мероприятие, на которое приходит много людей"},"def":{"de":"Die Firma lädt alle Mitarbeitenden zu einer großen <b>Veranstaltung</b> ein.","en":"The company invites all employees to a big <b>event</b>.","uk":"Фірма запрошує усіх працівників на велику <b>подію</b>.","ru":"Фирма приглашает всех сотрудников на большое <b>мероприятие</b>."},"gram":""},
  {"id":"k2_001","cat":"k2","term":{"de":"der Umzug","en":"move / relocation","uk":"переїзд","ru":"переезд"},"short":{"de": "wenn man in eine andere Wohnung geht und dort wohnt","en": "when you go to another apartment and live there","uk": "коли ти переїжджаєш в іншу квартиру і живеш там","ru": "когда ты переезжаешь в другую квартиру и живёшь там"},"def":{"de":"Der <b>Umzug</b> <g>ist</g> für Laura sehr anstrengend <g><b>gewesen</b></g>.","en":"The <b>move</b> <g>has</g> <g><b>been</b></g> very exhausting for Laura.","uk":"<b>Переїзд</b> виявився дуже виснажливим для Лаури.","ru":"<b>Переезд</b> оказался очень утомительным для Лауры."},"gram":"perfekt"},
  {"id":"k2_002","cat":"k2","term":{"de":"umziehen","en":"to move (house)","uk":"переїжджати","ru":"переезжать"},"short":{"de": "in eine neue Wohnung gehen und dort wohnen","en": "to go to a new apartment and live there","uk": "переходити в нову квартиру і жити там","ru": "переходить в новую квартиру и жить там"},"def":{"de":"Laura <g>ist</g> letzten Monat in eine Wohngemeinschaft <g><b>umgezogen</b></g>.","en":"Laura <g>has</g> <g><b>moved</b></g> into a shared flat last month.","uk":"Лаура минулого місяця <b>переїхала</b> у квартиру на кількох мешканців.","ru":"Лаура в прошлом месяце <b>переехала</b> в квартиру с соседями."},"gram":"perfekt"},
  {"id":"k2_003","cat":"k2","term":{"de":"die Wohnung","en":"apartment","uk":"квартира","ru":"квартира"},"short":{"de": "Räume, in denen jemand wohnt, z. B. mit Küche und Bad","en": "rooms where someone lives, e.g. with a kitchen and bathroom","uk": "приміщення, де хтось живе, напр. з кухнею і ванною","ru": "помещения, где кто-то живёт, напр. с кухней и ванной"},"def":{"de":"Sie <g>hat</g> die neue <b>Wohnung</b> schon vor drei Wochen <g><b>gefunden</b></g>.","en":"She <g>has</g> already <g><b>found</b></g> the new <b>apartment</b> three weeks ago.","uk":"Вона вже три тижні тому <b>знайшла</b> нову <b>квартиру</b>.","ru":"Она уже три недели назад <b>нашла</b> новую <b>квартиру</b>."},"gram":"perfekt"},
  {"id":"k2_004","cat":"k2","term":{"de":"das Zimmer","en":"room","uk":"кімната","ru":"комната"},"short":{"de": "ein Raum in einer Wohnung, z. B. ein Schlafzimmer","en": "a room in an apartment, e.g. a bedroom","uk": "кімната у квартирі, напр. спальня","ru": "комната в квартире, напр. спальня"},"def":{"de":"Er <g>hat</g> sein neues <b>Zimmer</b> schon fertig <g><b>eingerichtet</b></g>.","en":"He <g>has</g> already <g><b>furnished</b></g> his new <b>room</b> completely.","uk":"Він уже повністю <b>облаштував</b> свою нову <b>кімнату</b>.","ru":"Он уже полностью <b>обустроил</b> свою новую <b>комнату</b>."},"gram":"perfekt"},
  {"id":"k2_005","cat":"k2","term":{"de":"die Möbel","en":"furniture","uk":"меблі","ru":"мебель"},"short":{"de": "Dinge in einer Wohnung wie Tisch, Stuhl oder Schrank","en": "things in an apartment like a table, chair or cupboard","uk": "речі у квартирі, як-от стіл, стілець чи шафа","ru": "вещи в квартире, такие как стол, стул или шкаф"},"def":{"de":"Sie <g>haben</g> die alten <b>Möbel</b> zu ihren Freunden <g><b>gebracht</b></g>.","en":"They <g>have</g> <g><b>brought</b></g> the old <b>furniture</b> to their friends.","uk":"Вони <b>відвезли</b> старі <b>меблі</b> до своїх друзів.","ru":"Они <b>отвезли</b> старую <b>мебель</b> к своим друзьям."},"gram":"perfekt"},
  {"id":"k2_006","cat":"k2","term":{"de":"der Schrank","en":"cupboard / wardrobe","uk":"шафа","ru":"шкаф"},"short":{"de": "ein Möbelstück, in dem man Kleidung oder andere Dinge aufbewahrt","en": "a piece of furniture where you keep clothes or other things","uk": "меблі, у яких зберігають одяг чи інші речі","ru": "мебель, в которой хранят одежду или другие вещи"},"def":{"de":"Die Männer <g>haben</g> den schweren <b>Schrank</b> ins Zimmer <g><b>getragen</b></g>.","en":"The men <g>have</g> <g><b>carried</b></g> the heavy <b>cupboard</b> into the room.","uk":"Чоловіки <b>занесли</b> важку <b>шафу</b> у кімнату.","ru":"Мужчины <b>занесли</b> тяжёлый <b>шкаф</b> в комнату."},"gram":"perfekt"},
  {"id":"k2_007","cat":"k2","term":{"de":"das Bett","en":"bed","uk":"ліжко","ru":"кровать"},"short":{"de": "ein Möbelstück, in dem man schläft","en": "a piece of furniture where you sleep","uk": "меблі, у яких спиш","ru": "мебель, в которой спят"},"def":{"de":"Er stellt das <b>Bett</b> <g>an das Fenster</g>, weil es dort ruhiger ist.","en":"He puts the <b>bed</b> <g>by the window</g> because it is quieter there.","uk":"Він ставить <b>ліжко</b> <g>біля вікна</g>, бо там тихіше.","ru":"Он ставит <b>кровать</b> <g>у окна</g>, потому что там тише."},"gram":"wechselpraepositionen"},
  {"id":"k2_008","cat":"k2","term":{"de":"der Tisch","en":"table","uk":"стіл","ru":"стол"},"short":{"de": "ein Möbelstück mit vier Beinen, an dem man isst oder arbeitet","en": "a piece of furniture with four legs where you eat or work","uk": "меблі на чотирьох ніжках, за якими їси чи працюєш","ru": "мебель на четырёх ножках, за которой ешь или работаешь"},"def":{"de":"Die Lampe steht jetzt <g>auf dem <b>Tisch</b></g> in der Ecke.","en":"The lamp is now standing <g>on the <b>table</b></g> in the corner.","uk":"Лампа тепер стоїть <g>на <b>столі</b></g> у кутку.","ru":"Лампа теперь стоит <g>на <b>столе</b></g> в углу."},"gram":"wechselpraepositionen"},
  {"id":"k2_009","cat":"k2","term":{"de":"der Stuhl","en":"chair","uk":"стілець","ru":"стул"},"short":{"de": "ein Möbelstück zum Sitzen für eine Person","en": "a piece of furniture for one person to sit on","uk": "меблі для сидіння однієї людини","ru": "мебель для сидения одного человека"},"def":{"de":"Sie stellt den <b>Stuhl</b> <g>neben den Tisch</g>, bevor die Gäste kommen.","en":"She puts the <b>chair</b> <g>next to the table</g> before the guests arrive.","uk":"Вона ставить <b>стілець</b> <g>біля столу</g>, перш ніж прийдуть гості.","ru":"Она ставит <b>стул</b> <g>рядом со столом</g>, прежде чем придут гости."},"gram":"wechselpraepositionen"},
  {"id":"k2_010","cat":"k2","term":{"de":"die Wohngemeinschaft (WG)","en":"shared flat","uk":"квартира на кількох мешканців","ru":"квартира с соседями"},"short":{"de": "eine Wohnung, in der mehrere Personen zusammen, aber nicht als Familie wohnen","en": "an apartment where several people live together but not as a family","uk": "квартира, у якій живуть разом кілька людей, але не як родина","ru": "квартира, в которой живут вместе несколько человек, но не как семья"},"def":{"de":"Laura zieht <g>in eine <b>Wohngemeinschaft</b></g> mit zwei Studenten.","en":"Laura is moving <g>into a <b>shared flat</b></g> with two students.","uk":"Лаура переїжджає <g>у <b>квартиру на кількох мешканців</b></g> із двома студентами.","ru":"Лаура переезжает <g>в <b>квартиру с соседями</b></g> с двумя студентами."},"gram":"wechselpraepositionen"},
  {"id":"k2_011","cat":"k2","term":{"de":"die Küche","en":"kitchen","uk":"кухня","ru":"кухня"},"short":{"de": "der Raum, in dem man kocht","en": "the room where you cook","uk": "приміщення, де готують їжу","ru": "помещение, где готовят еду"},"def":{"de":"Die neuen Teller stellt sie <g>in den Schrank</g> in der <b>Küche</b>.","en":"She puts the new plates <g>into the cupboard</g> in the <b>kitchen</b>.","uk":"Нові тарілки вона ставить <g>у шафу</g> на <b>кухні</b>.","ru":"Новые тарелки она ставит <g>в шкаф</g> на <b>кухне</b>."},"gram":"wechselpraepositionen"},
  {"id":"k2_012","cat":"k2","term":{"de":"das Bad","en":"bathroom","uk":"ванна кімната","ru":"ванная"},"short":{"de": "der Raum, in dem man sich wäscht und duscht","en": "the room where you wash and shower","uk": "приміщення, де ти миєшся і приймаєш душ","ru": "помещение, где ты моешься и принимаешь душ"},"def":{"de":"Das Handtuch hängt <g>im <b>Bad</b></g> direkt neben der Dusche.","en":"The towel is hanging <g>in the <b>bathroom</b></g> right next to the shower.","uk":"Рушник висить <g>у <b>ванній кімнаті</b></g> прямо біля душу.","ru":"Полотенце висит <g>в <b>ванной комнате</b></g> прямо возле душа."},"gram":"wechselpraepositionen"},
  {"id":"k2_013","cat":"k2","term":{"de":"der Balkon","en":"balcony","uk":"балкон","ru":"балкон"},"short":{"de": "ein kleiner Platz außen an der Wohnung, wo man draußen sitzen kann","en": "a small outdoor space attached to the apartment where you can sit","uk": "невеликий простір зовні квартири, де можна посидіти надворі","ru": "небольшое пространство снаружи квартиры, где можно посидеть на улице"},"def":{"de":"Sie hat die Wohnung genommen, <g>weil</g> sie einen großen <b>Balkon</b> hat.","en":"She took the apartment <g>because</g> it has a big <b>balcony</b>.","uk":"Вона взяла цю квартиру, <g>тому що</g> в ній є великий <b>балкон</b>.","ru":"Она взяла эту квартиру, <g>потому что</g> в ней есть большой <b>балкон</b>."},"gram":"weil_satz"},
  {"id":"k2_014","cat":"k2","term":{"de":"die Kleinanzeige","en":"classified ad","uk":"оголошення","ru":"объявление"},"short":{"de": "eine kurze Anzeige, in der man z. B. Möbel verkauft","en": "a short ad where you sell things like furniture","uk": "коротке оголошення, у якому, напр., продають меблі","ru": "короткое объявление, в котором, напр., продают мебель"},"def":{"de":"Er hat eine <b>Kleinanzeige</b> geschrieben, <g>weil</g> er seinen alten Schrank verkaufen wollte.","en":"He wrote a <b>classified ad</b> <g>because</g> he wanted to sell his old cupboard.","uk":"Він написав <b>оголошення</b>, <g>тому що</g> хотів продати свою стару шафу.","ru":"Он написал <b>объявление</b>, <g>потому что</g> хотел продать свой старый шкаф."},"gram":"weil_satz"},
  {"id":"k2_015","cat":"k2","term":{"de":"verkaufen","en":"to sell","uk":"продавати","ru":"продавать"},"short":{"de": "etwas gegen Geld weggeben","en": "to give something away for money","uk": "віддавати щось за гроші","ru": "отдавать что-то за деньги"},"def":{"de":"Sie <b>verkauft</b> den Tisch, <g>weil</g> er in der neuen Wohnung keinen Platz hat.","en":"She is <b>selling</b> the table <g>because</g> there is no space for it in the new apartment.","uk":"Вона <b>продає</b> стіл, <g>тому що</g> в новій квартирі для нього немає місця.","ru":"Она <b>продаёт</b> стол, <g>потому что</g> в новой квартире для него нет места."},"gram":"weil_satz"},
  {"id":"k2_016","cat":"k2","term":{"de":"der Preis","en":"price","uk":"ціна","ru":"цена"},"short":{"de": "wie viel Geld etwas kostet","en": "how much money something costs","uk": "скільки грошей щось коштує","ru": "сколько денег что-то стоит"},"def":{"de":"Sie kauft das Bett, <g>weil</g> der <b>Preis</b> sehr günstig ist.","en":"She is buying the bed <g>because</g> the <b>price</b> is very cheap.","uk":"Вона купує ліжко, <g>тому що</g> <b>ціна</b> дуже вигідна.","ru":"Она покупает кровать, <g>потому что</g> <b>цена</b> очень выгодная."},"gram":"weil_satz"},
  {"id":"k2_017","cat":"k2","term":{"de":"hängen","en":"to hang","uk":"висіти / вішати","ru":"висеть / вешать"},"short":{"de": "etwas an eine Wand oder an einen Haken machen, so dass es oben bleibt","en": "to put something on a wall or hook so that it stays up","uk": "розміщувати щось на стіні чи гачку, щоб воно там трималося","ru": "размещать что-то на стене или крючке, чтобы оно там держалось"},"def":{"de":"Er <b>hängt</b> das Bild über das Sofa, <g>weil</g> die Wand dort sonst leer ist.","en":"He <b>hangs</b> the picture above the sofa <g>because</g> the wall there is otherwise empty.","uk":"Він <b>вішає</b> картину над диваном, <g>тому що</g> ця стіна інакше порожня.","ru":"Он <b>вешает</b> картину над диваном, <g>потому что</g> эта стена иначе пустая."},"gram":"weil_satz"},
  {"id":"k2_018","cat":"k2","term":{"de":"stellen","en":"to put (standing)","uk":"ставити","ru":"ставить"},"short":{"de": "etwas an einen Ort machen, so dass es aufrecht steht","en": "to put something somewhere so that it stands upright","uk": "ставити щось у певне місце так, щоб воно стояло","ru": "ставить что-то в определённое место так, чтобы оно стояло"},"def":{"de":"Sie <b>stellt</b> den Stuhl an den Tisch, <g>weil</g> gleich Gäste kommen.","en":"She <b>puts</b> the chair by the table <g>because</g> guests are coming soon.","uk":"Вона <b>ставить</b> стілець до столу, <g>тому що</g> зараз прийдуть гості.","ru":"Она <b>ставит</b> стул к столу, <g>потому что</g> скоро придут гости."},"gram":"weil_satz"},
  {"id":"k2_019","cat":"k2","term":{"de":"legen","en":"to lay / put","uk":"класти","ru":"класть"},"short":{"de": "etwas an einen Ort machen, so dass es flach liegt","en": "to put something somewhere so that it lies flat","uk": "класти щось у певне місце так, щоб воно лежало","ru": "класть что-то в определённое место так, чтобы оно лежало"},"def":{"de":"Sie musste die Bücher auf den Boden <b>legen</b>, <g>weil</g> der Schrank noch nicht da war.","en":"She had to <b>put</b> the books on the floor <g>because</g> the cupboard was not there yet.","uk":"Їй довелося <b>покласти</b> книжки на підлогу, <g>тому що</g> шафи ще не було.","ru":"Ей пришлось <b>положить</b> книги на пол, <g>потому что</g> шкафа ещё не было."},"gram":"weil_satz"},
  {"id":"k2_020","cat":"k2","term":{"de":"putzen","en":"to clean","uk":"прибирати","ru":"убирать"},"short":{"de": "etwas sauber machen","en": "to make something clean","uk": "робити щось чистим","ru": "делать что-то чистым"},"def":{"de":"Er musste die ganze Küche <b>putzen</b>, <g>weil</g> morgen Besuch kommt.","en":"He had to <b>clean</b> the whole kitchen <g>because</g> guests are coming tomorrow.","uk":"Йому довелося <b>прибрати</b> всю кухню, <g>тому що</g> завтра прийдуть гості.","ru":"Ему пришлось <b>убрать</b> всю кухню, <g>потому что</g> завтра придут гости."},"gram":"weil_satz"},
  {"id":"k2_021","cat":"k2","term":{"de":"sich einigen","en":"to agree","uk":"домовлятися","ru":"договариваться"},"short":{"de": "zusammen eine Entscheidung finden, die für alle passt","en": "to find a decision together that suits everyone","uk": "разом знаходити рішення, яке підходить усім","ru": "вместе находить решение, которое подходит всем"},"def":{"de":"Die Mitbewohner <b>einigen</b> sich schnell, <g>weil</g> alle die gleiche Meinung haben.","en":"The flatmates quickly <b>agree</b> <g>because</g> everyone has the same opinion.","uk":"Сусіди по квартирі швидко <b>домовляються</b>, <g>тому що</g> всі мають однакову думку.","ru":"Соседи по квартире быстро <b>договариваются</b>, <g>потому что</g> у всех одинаковое мнение."},"gram":"weil_satz"},
  {"id":"k2_022","cat":"k2","term":{"de":"der Nachbar / die Nachbarin","en":"neighbour","uk":"сусід / сусідка","ru":"сосед / соседка"},"short":{"de": "eine Person, die neben oder in der Nähe von dir wohnt","en": "a person who lives next to or near you","uk": "людина, яка живе поруч або неподалік від тебе","ru": "человек, который живёт рядом или недалеко от тебя"},"def":{"de":"Sie kennt ihren <b>Nachbarn</b> gut, <g>weil</g> sie schon lange im selben Haus wohnen.","en":"She knows her <b>neighbour</b> well <g>because</g> they have lived in the same house for a long time.","uk":"Вона добре знає свого <b>сусіда</b>, <g>тому що</g> вони давно живуть в одному будинку.","ru":"Она хорошо знает своего <b>соседа</b>, <g>потому что</g> они давно живут в одном доме."},"gram":"weil_satz"},
  {"id":"k2_023","cat":"k2","term":{"de":"die Miete","en":"rent","uk":"орендна плата","ru":"арендная плата"},"short":{"de": "das Geld, das man jeden Monat für die Wohnung bezahlt","en": "the money you pay every month for the apartment","uk": "гроші, які ти платиш щомісяця за квартиру","ru": "деньги, которые ты платишь ежемесячно за квартиру"},"def":{"de":"Sie sucht eine WG, <g>weil</g> die <b>Miete</b> dort günstiger ist.","en":"She is looking for a shared flat <g>because</g> the <b>rent</b> is cheaper there.","uk":"Вона шукає спільну квартиру, <g>тому що</g> там дешевша <b>орендна плата</b>.","ru":"Она ищет квартиру с соседями, <g>потому что</g> там дешевле <b>арендная плата</b>."},"gram":"weil_satz"},
  {"id":"k2_024","cat":"k2","term":{"de":"der Haushalt","en":"household","uk":"домашнє господарство","ru":"домашнее хозяйство"},"short":{"de": "die Arbeit im Zuhause, z. B. kochen, putzen, einkaufen","en": "the work at home, e.g. cooking, cleaning, shopping","uk": "робота вдома, напр. приготування їжі, прибирання, покупки","ru": "работа дома, напр. готовка, уборка, покупки"},"def":{"de":"Alle in der WG helfen im <b>Haushalt</b> mit, <g>weil</g> das fair ist.","en":"Everyone in the shared flat helps with the <b>household</b> <g>because</g> that is fair.","uk":"Усі у спільній квартирі допомагають із <b>домашнім господарством</b>, <g>тому що</g> це справедливо.","ru":"Все в квартире с соседями помогают по <b>домашнему хозяйству</b>, <g>потому что</g> это справедливо."},"gram":"weil_satz"},
  {"id":"k3_001","cat":"k3","term":{"de":"die Tätigkeit","en":"activity / task","uk":"діяльність","ru":"деятельность"},"short":{"de": "etwas, das man regelmäßig tut, z. B. bei der Arbeit","en": "something you do regularly, e.g. at work","uk": "те, що ти робиш регулярно, напр. на роботі","ru": "то, что ты делаешь регулярно, напр. на работе"},"def":{"de":"Sie kann bei dieser <b>Tätigkeit</b> gut mit <g>ihren Kollegen</g> zusammenarbeiten.","en":"She can work well with <g>her colleagues</g> in this <b>activity</b>.","uk":"У цій <b>діяльності</b> вона добре співпрацює з <g>своїми колегами</g>.","ru":"В этой <b>деятельности</b> она хорошо сотрудничает со <g>своими коллегами</g>."},"gram":"dativ_verben"},
  {"id":"k3_002","cat":"k3","term":{"de":"der Termin","en":"appointment","uk":"зустріч / термін","ru":"встреча / срок"},"short":{"de": "eine Zeit, zu der man sich mit jemandem trifft","en": "a time when you meet with someone","uk": "час, коли ти з кимось зустрічаєшся","ru": "время, когда ты с кем-то встречаешься"},"def":{"de":"Er muss den <b>Termin</b> mit <g>dem Kunden</g> noch bestätigen.","en":"He still has to confirm the <b>appointment</b> with <g>the customer</g>.","uk":"Йому ще треба підтвердити <b>зустріч</b> із <g>клієнтом</g>.","ru":"Ему ещё нужно подтвердить <b>встречу</b> с <g>клиентом</g>."},"gram":"dativ_verben"},
  {"id":"k3_003","cat":"k3","term":{"de":"vereinbaren","en":"to arrange","uk":"домовлятися","ru":"договариваться"},"short":{"de": "zusammen entscheiden, wann man sich trifft","en": "to decide together when you will meet","uk": "разом вирішувати, коли ви зустрінетеся","ru": "вместе решать, когда вы встретитесь"},"def":{"de":"Sie will mit <g>ihrem Chef</g> einen neuen Termin <b>vereinbaren</b>.","en":"She wants to <b>arrange</b> a new appointment with <g>her boss</g>.","uk":"Вона хоче <b>домовитися</b> про нову зустріч зі <g>своїм керівником</g>.","ru":"Она хочет <b>договориться</b> о новой встрече со <g>своим начальником</g>."},"gram":"dativ_akkusativ_verben"},
  {"id":"k3_004","cat":"k3","term":{"de":"die Neuigkeit","en":"news","uk":"новина","ru":"новость"},"short":{"de": "eine Information, die man noch nicht kannte","en": "a piece of information you did not know before","uk": "інформація, якої ти раніше не знав","ru": "информация, о которой ты раньше не знал"},"def":{"de":"Sie erzählt <g>ihrer Freundin</g> gleich alle <b>Neuigkeiten</b> aus der Firma.","en":"She immediately tells <g>her friend</g> all the <b>news</b> from the company.","uk":"Вона одразу розповідає <g>своїй подрузі</g> всі <b>новини</b> з фірми.","ru":"Она сразу рассказывает <g>своей подруге</g> все <b>новости</b> из фирмы."},"gram":"dativ_akkusativ_verben"},
  {"id":"k3_005","cat":"k3","term":{"de":"die Meinung","en":"opinion","uk":"думка","ru":"мнение"},"short":{"de": "das, was man persönlich über etwas denkt","en": "what you personally think about something","uk": "те, що ти особисто думаєш про щось","ru": "то, что ты лично думаешь о чём-то"},"def":{"de":"Er kann seine <b>Meinung</b> auch <g>seinem Chef</g> ganz offen sagen.","en":"He can also say his <b>opinion</b> quite openly to <g>his boss</g>.","uk":"Він може відверто висловити свою <b>думку</b> навіть <g>своєму керівнику</g>.","ru":"Он может вполне открыто высказать своё <b>мнение</b> даже <g>своему начальнику</g>."},"gram":"dativ_akkusativ_verben"},
  {"id":"k3_006","cat":"k3","term":{"de":"äußern","en":"to express","uk":"висловлювати","ru":"выражать"},"short":{"de": "Sagen, was man denkt oder fühlt","en": "to say what you think or feel","uk": "казати, що ти думаєш чи відчуваєш","ru": "говорить, что ты думаешь или чувствуешь"},"def":{"de":"Er <b>äußert</b>, <g>dass</g> er mit dem neuen Plan nicht zufrieden ist.","en":"He <b>expresses</b> <g>that</g> he is not happy with the new plan.","uk":"Він <b>висловлює</b>, <g>що</g> не задоволений новим планом.","ru":"Он <b>выражает</b>, <g>что</g> не доволен новым планом."},"gram":"dass_satz"},
  {"id":"k3_007","cat":"k3","term":{"de":"der Sportverein","en":"sports club","uk":"спортивний клуб","ru":"спортивный клуб"},"short":{"de": "eine Gruppe, in der Menschen zusammen Sport machen","en": "a group where people do sports together","uk": "група, у якій люди разом займаються спортом","ru": "группа, в которой люди вместе занимаются спортом"},"def":{"de":"Sie hat gehört, <g>dass</g> der neue <b>Sportverein</b> auch Deutschkurse anbietet.","en":"She has heard <g>that</g> the new <b>sports club</b> also offers German courses.","uk":"Вона чула, <g>що</g> новий <b>спортивний клуб</b> також пропонує курси німецької.","ru":"Она слышала, <g>что</g> новый <b>спортивный клуб</b> также предлагает курсы немецкого."},"gram":"dass_satz"},
  {"id":"k3_008","cat":"k3","term":{"de":"die Sportart","en":"type of sport","uk":"вид спорту","ru":"вид спорта"},"short":{"de": "eine bestimmte Art von Sport, z. B. Fußball oder Schwimmen","en": "a certain type of sport, e.g. football or swimming","uk": "певний вид спорту, напр. футбол чи плавання","ru": "определённый вид спорта, напр. футбол или плавание"},"def":{"de":"Ich finde, <g>dass</g> Schwimmen die gesündeste <b>Sportart</b> ist.","en":"I think <g>that</g> swimming is the healthiest <b>type of sport</b>.","uk":"Я вважаю, <g>що</g> плавання – найздоровіший <b>вид спорту</b>.","ru":"Я считаю, <g>что</g> плавание – самый полезный <b>вид спорта</b>."},"gram":"dass_satz"},
  {"id":"k3_009","cat":"k3","term":{"de":"das Hobby","en":"hobby","uk":"хобі","ru":"хобби"},"short":{"de": "etwas, das man in der Freizeit gern macht","en": "something you like to do in your free time","uk": "те, що ти любиш робити у вільний час","ru": "то, что ты любишь делать в свободное время"},"def":{"de":"Er sagt, <g>dass</g> Fotografieren sein liebstes <b>Hobby</b> ist.","en":"He says <g>that</g> photography is his favourite <b>hobby</b>.","uk":"Він каже, <g>що</g> фотографія – його улюблене <b>хобі</b>.","ru":"Он говорит, <g>что</g> фотография – его любимое <b>хобби</b>."},"gram":"dass_satz"},
  {"id":"k3_010","cat":"k3","term":{"de":"das Freizeitangebot","en":"leisure activity offer","uk":"пропозиція для дозвілля","ru":"предложение для досуга"},"short":{"de": "eine Aktivität, die man in seiner freien Zeit machen kann","en": "an activity you can do in your free time","uk": "захід, яким можна зайнятися у вільний час","ru": "занятие, которым можно заняться в свободное время"},"def":{"de":"Man sieht, <g>dass</g> es in Köln viele gute <b>Freizeitangebote</b> gibt.","en":"You can see <g>that</g> there are many good <b>leisure activities</b> in Cologne.","uk":"Видно, <g>що</g> у Кельні є багато гарних <b>пропозицій для дозвілля</b>.","ru":"Видно, <g>что</g> в Кёльне есть много хороших <b>предложений для досуга</b>."},"gram":"dass_satz"},
  {"id":"k3_011","cat":"k3","term":{"de":"dürfen","en":"to be allowed to","uk":"мати дозвіл","ru":"иметь разрешение"},"short":{"de": "die Erlaubnis haben, etwas zu tun","en": "to have permission to do something","uk": "мати дозвіл щось робити","ru": "иметь разрешение что-то делать"},"def":{"de":"Als Kind <g><b>durfte</b></g> er nur am Wochenende Fußball spielen.","en":"As a child, he <g><b>was allowed</b></g> to play football only on weekends.","uk":"У дитинстві він <g><b>мав дозвіл</b></g> грати у футбол лише на вихідних.","ru":"В детстве ему <g><b>разрешалось</b></g> играть в футбол только по выходным."},"gram":"modalverben_praeteritum"},
  {"id":"k3_012","cat":"k3","term":{"de":"müssen","en":"to have to","uk":"бути зобовʼязаним","ru":"быть обязанным"},"short":{"de": "etwas tun müssen, weil es nötig ist","en": "to have to do something because it is necessary","uk": "мусити щось робити, бо це необхідно","ru": "быть обязанным что-то делать, потому что это необходимо"},"def":{"de":"Letzte Woche <g><b>musste</b></g> sie jeden Tag bis spät im Büro bleiben.","en":"Last week she <g><b>had to</b></g> stay at the office late every day.","uk":"Минулого тижня їй <g><b>довелося</b></g> щодня затримуватися в офісі допізна.","ru":"На прошлой неделе ей <g><b>приходилось</b></g> каждый день задерживаться в офисе допоздна."},"gram":"modalverben_praeteritum"},
  {"id":"k3_013","cat":"k3","term":{"de":"können","en":"to be able to","uk":"могти","ru":"мочь"},"short":{"de": "die Fähigkeit haben, etwas zu tun","en": "to have the ability to do something","uk": "мати здатність щось робити","ru": "иметь способность что-то делать"},"def":{"de":"Früher <g><b>konnte</b></g> er nicht gut Deutsch sprechen, jetzt geht es viel besser.","en":"He <g><b>could</b></g> not speak German well before, now it is much better.","uk":"Раніше він <g><b>не міг</b></g> добре говорити німецькою, тепер уже набагато краще.","ru":"Раньше он <g><b>не мог</b></g> хорошо говорить по-немецки, теперь намного лучше."},"gram":"modalverben_praeteritum"},
  {"id":"k3_014","cat":"k3","term":{"de":"wollen","en":"to want to","uk":"хотіти","ru":"хотеть"},"short":{"de": "etwas machen möchten","en": "to want to do something","uk": "хотіти щось робити","ru": "хотеть что-то делать"},"def":{"de":"Wir <g><b>wollten</b></g> gestern zum Sportverein gehen, aber es hat stark geregnet.","en":"We <g><b>wanted</b></g> to go to the sports club yesterday, but it rained heavily.","uk":"Ми <g><b>хотіли</b></g> вчора піти у спортивний клуб, але сильно йшов дощ.","ru":"Мы <g><b>хотели</b></g> вчера пойти в спортивный клуб, но шёл сильный дождь."},"gram":"modalverben_praeteritum"},
  {"id":"k3_015","cat":"k3","term":{"de":"die Anzeige","en":"advertisement","uk":"оголошення","ru":"объявление"},"short":{"de": "ein kurzer Text, in dem man z. B. eine Arbeit sucht oder anbietet","en": "a short text where you look for or offer, e.g., a job","uk": "короткий текст, у якому, напр., шукають чи пропонують роботу","ru": "короткий текст, в котором, напр., ищут или предлагают работу"},"def":{"de":"Sie <g><b>wollte</b></g> die <b>Anzeige</b> für den Sportverein noch einmal genau lesen.","en":"She <g><b>wanted</b></g> to read the <b>ad</b> for the sports club carefully once more.","uk":"Вона <g><b>хотіла</b></g> ще раз уважно прочитати <b>оголошення</b> про спортивний клуб.","ru":"Она <g><b>хотела</b></g> ещё раз внимательно прочитать <b>объявление</b> о спортивном клубе."},"gram":"modalverben_praeteritum"},
  {"id":"k3_016","cat":"k3","term":{"de":"der Feierabend","en":"end of the workday","uk":"кінець робочого дня","ru":"конец рабочего дня"},"short":{"de": "die Zeit, wenn die Arbeit für den Tag fertig ist","en": "the time when work for the day is finished","uk": "час, коли робота на цей день закінчена","ru": "время, когда работа на этот день закончена"},"def":{"de":"Er <g><b>musste</b></g> heute erst um sieben Uhr <b>Feierabend</b> machen.","en":"Today he <g><b>had to</b></g> finish work only at seven oʼclock.","uk":"Сьогодні він <g><b>мусив</b></g> закінчити роботу лише о сьомій годині.","ru":"Сегодня ему <g><b>пришлось</b></g> закончить работу только в семь часов."},"gram":"modalverben_praeteritum"},
  {"id":"k3_017","cat":"k3","term":{"de":"trainieren","en":"to train","uk":"тренуватися","ru":"тренироваться"},"short":{"de": "regelmäßig Sport machen, um besser zu werden","en": "to do sports regularly to get better","uk": "регулярно займатися спортом, щоб ставати кращим","ru": "регулярно заниматься спортом, чтобы становиться лучше"},"def":{"de":"Sie <g><b>wollte</b></g> vor dem Wettkampf noch zweimal <b>trainieren</b>.","en":"She <g><b>wanted</b></g> to <b>train</b> two more times before the competition.","uk":"Вона <g><b>хотіла</b></g> ще двічі <b>потренуватися</b> перед змаганням.","ru":"Она <g><b>хотела</b></g> ещё дважды <b>потренироваться</b> перед соревнованием."},"gram":"modalverben_praeteritum"},
  {"id":"k3_018","cat":"k3","term":{"de":"das Mitglied","en":"member","uk":"член (клубу)","ru":"член (клуба)"},"short":{"de": "eine Person, die zu einem Verein oder einer Gruppe gehört","en": "a person who belongs to a club or group","uk": "особа, яка належить до клубу чи групи","ru": "человек, который принадлежит к клубу или группе"},"def":{"de":"Früher <g><b>durfte</b></g> nur ein <b>Mitglied</b> pro Familie im Verein Fußball spielen.","en":"Before, only one <b>member</b> per family <g><b>was allowed</b></g> to play football in the club.","uk":"Раніше лише одному <b>члену</b> сімʼї <g><b>дозволялося</b></g> грати у футбол у клубі.","ru":"Раньше только одному <b>члену</b> семьи <g><b>разрешалось</b></g> играть в футбол в клубе."},"gram":"modalverben_praeteritum"},
  {"id":"k3_019","cat":"k3","term":{"de":"die Mitgliedschaft","en":"membership","uk":"членство","ru":"членство"},"short":{"de": "wenn man offiziell zu einem Verein gehört","en": "when you officially belong to a club","uk": "коли ти офіційно належиш до клубу","ru": "когда ты официально принадлежишь к клубу"},"def":{"de":"Sie <g><b>musste</b></g> für die <b>Mitgliedschaft</b> im Sportverein zehn Euro bezahlen.","en":"She <g><b>had to</b></g> pay ten euros for the club <b>membership</b>.","uk":"Їй <g><b>довелося</b></g> заплатити десять євро за <b>членство</b> у спортивному клубі.","ru":"Ей <g><b>пришлось</b></g> заплатить десять евро за <b>членство</b> в спортивном клубе."},"gram":"modalverben_praeteritum"},
  {"id":"k3_020","cat":"k3","term":{"de":"entspannen","en":"to relax","uk":"розслаблятися","ru":"расслабляться"},"short":{"de": "ruhig werden und keinen Stress mehr haben","en": "to become calm and no longer stressed","uk": "заспокоюватися і перестати відчувати стрес","ru": "успокаиваться и переставать испытывать стресс"},"def":{"de":"Nach der Arbeit <g><b>wollte</b></g> er sich zu Hause einfach nur <b>entspannen</b>.","en":"After work he <g><b>wanted</b></g> to simply <b>relax</b> at home.","uk":"Після роботи він просто <g><b>хотів</b></g> <b>розслабитися</b> вдома.","ru":"После работы он просто <g><b>хотел</b></g> <b>расслабиться</b> дома."},"gram":"modalverben_praeteritum"},
  {"id":"k4_001","cat":"k4","term":{"de":"die Kleidung","en":"clothing","uk":"одяг","ru":"одежда"},"short":{"de": "alles, was man am Körper trägt, z. B. Hose, Hemd, Jacke","en": "everything you wear on your body, e.g. trousers, shirt, jacket","uk": "все, що носять на тілі, напр. штани, сорочка, куртка","ru": "всё, что носят на теле, напр. брюки, рубашка, куртка"},"def":{"de":"Die neue <b>Kleidung</b> passt <g>ihr</g> sehr gut.","en":"The new <b>clothes</b> fit <g>her</g> very well.","uk":"Новий <b>одяг</b> дуже добре <g>їй</g> пасує.","ru":"Новая <b>одежда</b> очень хорошо <g>ей</g> подходит."},"gram":"dativ_verben"},
  {"id":"k4_002","cat":"k4","term":{"de":"die Hose","en":"trousers","uk":"штани","ru":"брюки"},"short":{"de": "ein Kleidungsstück für die Beine","en": "a piece of clothing for the legs","uk": "предмет одягу для ніг","ru": "предмет одежды для ног"},"def":{"de":"Die blaue <b>Hose</b> gefällt <g>ihm</g> besser als die schwarze.","en":"He likes the blue <b>trousers</b> better than the black ones.","uk":"Сині <b>штани</b> подобаються <g>йому</g> більше, ніж чорні.","ru":"Синие <b>брюки</b> нравятся <g>ему</g> больше, чем чёрные."},"gram":"dativ_verben"},
  {"id":"k4_003","cat":"k4","term":{"de":"das Hemd","en":"shirt","uk":"сорочка","ru":"рубашка"},"short":{"de": "ein Kleidungsstück für den Oberkörper mit Knöpfen","en": "a piece of clothing for the upper body with buttons","uk": "предмет одягу для верхньої частини тіла з ґудзиками","ru": "предмет одежды для верхней части тела с пуговицами"},"def":{"de":"Der Verkäufer zeigt <g>ihm</g> ein weißes <b>Hemd</b> für das Vorstellungsgespräch.","en":"The salesperson shows <g>him</g> a white <b>shirt</b> for the interview.","uk":"Продавець показує <g>йому</g> білу <b>сорочку</b> для співбесіди.","ru":"Продавец показывает <g>ему</g> белую <b>рубашку</b> для собеседования."},"gram":"dativ_akkusativ_verben"},
  {"id":"k4_004","cat":"k4","term":{"de":"der Pullover","en":"sweater","uk":"светр","ru":"свитер"},"short":{"de": "ein warmes Kleidungsstück für den Oberkörper ohne Knöpfe","en": "a warm piece of clothing for the upper body without buttons","uk": "теплий предмет одягу для верхньої частини тіла без ґудзиків","ru": "тёплый предмет одежды для верхней части тела без пуговиц"},"def":{"de":"Dieser warme <b>Pullover</b> gehört <g>meinem Bruder</g>.","en":"This warm <b>sweater</b> belongs to <g>my brother</g>.","uk":"Цей теплий <b>светр</b> належить <g>моєму брату</g>.","ru":"Этот тёплый <b>свитер</b> принадлежит <g>моему брату</g>."},"gram":"dativ_verben"},
  {"id":"k4_005","cat":"k4","term":{"de":"die Jacke","en":"jacket","uk":"куртка","ru":"куртка"},"short":{"de": "ein Kleidungsstück, das man über anderer Kleidung trägt, oft draußen","en": "a piece of clothing worn over other clothes, often outside","uk": "предмет одягу, який носять поверх іншого одягу, часто надворі","ru": "предмет одежды, который носят поверх другой одежды, часто на улице"},"def":{"de":"Diese grüne <b>Jacke</b> steht <g>ihr</g> wirklich sehr gut.","en":"This green <b>jacket</b> really suits <g>her</g> very well.","uk":"Ця зелена <b>куртка</b> дуже їй пасує.","ru":"Эта зелёная <b>куртка</b> ей очень идёт."},"gram":"dativ_verben"},
  {"id":"k4_006","cat":"k4","term":{"de":"das Kleid","en":"dress","uk":"сукня","ru":"платье"},"short":{"de": "ein Kleidungsstück für Frauen, das oben und unten zusammen ist","en": "a piece of clothing for women that is joined at the top and bottom","uk": "жіночий предмет одягу, що поєднує верх і низ в одне ціле","ru": "женский предмет одежды, соединяющий верх и низ в одно целое"},"def":{"de":"Sie kauft <g>ihrer Tochter</g> ein rotes <b>Kleid</b> für das Fest.","en":"She buys <g>her daughter</g> a red <b>dress</b> for the party.","uk":"Вона купує <g>своїй доньці</g> червону <b>сукню</b> на свято.","ru":"Она покупает <g>своей дочери</g> красное <b>платье</b> на праздник."},"gram":"dativ_akkusativ_verben"},
  {"id":"k4_007","cat":"k4","term":{"de":"der Rock","en":"skirt","uk":"спідниця","ru":"юбка"},"short":{"de": "ein Kleidungsstück für Frauen, das unten am Körper offen ist","en": "a piece of clothing for women that is open at the bottom","uk": "жіночий предмет одягу, відкритий знизу","ru": "женский предмет одежды, открытый снизу"},"def":{"de":"Im Schaufenster hängt <g>ein schöner</g> <b>Rock</b> in Blau.","en":"In the shop window hangs <g>a beautiful</g> blue <b>skirt</b>.","uk":"У вітрині висить <g>гарна</g> синя <b>спідниця</b>.","ru":"В витрине висит <g>красивая</g> синяя <b>юбка</b>."},"gram":"adjektivendungen"},
  {"id":"k4_008","cat":"k4","term":{"de":"der Schuh, -e","en":"shoes","uk":"взуття","ru":"обувь"},"short":{"de": "Kleidung für die Füße, zum Laufen","en": "clothing for the feet, for walking","uk": "одяг для ніг, для ходьби","ru": "одежда для ног, для ходьбы"},"def":{"de":"Hier stehen <g>meine neuen</g> <b>Schuhe</b> für die Arbeit.","en":"Here stand <g>my new</g> <b>shoes</b> for work.","uk":"Тут стоять <g>мої нові</g> <b>черевики</b> для роботи.","ru":"Здесь стоят <g>мои новые</g> <b>туфли</b> для работы."},"gram":"adjektivendungen"},
  {"id":"k4_009","cat":"k4","term":{"de":"die Socke","en":"sock","uk":"шкарпетка","ru":"носок"},"short":{"de": "ein kleines, weiches Kleidungsstück für den Fuß, unter dem Schuh","en": "a small, soft piece of clothing for the foot, under the shoe","uk": "маленький, мʼякий предмет одягу для ноги, під взуттям","ru": "маленький, мягкий предмет одежды для ноги, под обувью"},"def":{"de":"Auf dem Boden liegt <g>eine gelbe</g> <b>Socke</b> von Mischa.","en":"On the floor lies <g>a yellow</g> <b>sock</b> belonging to Mischa.","uk":"На підлозі лежить <g>жовта</g> <b>шкарпетка</b> Міші.","ru":"На полу лежит <g>жёлтый</g> <b>носок</b> Миши."},"gram":"adjektivendungen"},
  {"id":"k4_010","cat":"k4","term":{"de":"anprobieren","en":"to try on","uk":"приміряти","ru":"примерять"},"short":{"de": "Kleidung im Geschäft testen, ob sie passt","en": "to test clothes in a shop to see if they fit","uk": "приміряти одяг у магазині, щоб перевірити, чи він підходить","ru": "примерять одежду в магазине, чтобы проверить, подходит ли она"},"def":{"de":"Zuerst muss <g>ein neues</g> Kleid <b>anprobiert</b> werden, bevor sie es kauft.","en":"First <g>a new</g> dress must be <b>tried on</b> before she buys it.","uk":"Спочатку треба <b>приміряти</b> <g>нову</g> сукню, перш ніж вона її купить.","ru":"Сначала нужно <b>примерить</b> <g>новое</g> платье, прежде чем она его купит."},"gram":"adjektivendungen"},
  {"id":"k4_011","cat":"k4","term":{"de":"die Größe","en":"size","uk":"розмір","ru":"размер"},"short":{"de": "die Zahl, die zeigt, ob ein Kleidungsstück zu einem passt","en": "the number that shows if a piece of clothing fits you","uk": "число, яке показує, чи підходить тобі одяг","ru": "число, которое показывает, подходит ли тебе одежда"},"def":{"de":"Für die Hose braucht sie <g>eine größere</g> <b>Größe</b> als sonst.","en":"For the trousers she needs <g>a bigger</g> <b>size</b> than usual.","uk":"Для цих штанів їй потрібен <g>більший</g> <b>розмір</b>, ніж зазвичай.","ru":"Для этих брюк ей нужен <g>больший</g> <b>размер</b>, чем обычно."},"gram":"adjektivendungen"},
  {"id":"k4_012","cat":"k4","term":{"de":"passen","en":"to fit","uk":"підходити (за розміром)","ru":"подходить (по размеру)"},"short":{"de": "genau die richtige Größe haben","en": "to be exactly the right size","uk": "мати саме потрібний розмір","ru": "иметь как раз нужный размер"},"def":{"de":"Zum Glück <b>passt</b> <g>ihr</g> das neue Kleid perfekt.","en":"Luckily, the new dress <b>fits</b> <g>her</g> perfectly.","uk":"На щастя, нова сукня <b>пасує</b> <g>їй</g> ідеально.","ru":"К счастью, новое платье <b>подходит</b> <g>ей</g> идеально."},"gram":"dativ_verben"},
  {"id":"k4_013","cat":"k4","term":{"de":"das Kaufhaus","en":"department store","uk":"універмаг","ru":"универмаг"},"short":{"de": "ein großes Geschäft, in dem man viele verschiedene Dinge kaufen kann","en": "a large shop where you can buy many different things","uk": "великий магазин, у якому можна купити багато різних речей","ru": "большой магазин, в котором можно купить много разных вещей"},"def":{"de":"<g>In was für einem</g> <b>Kaufhaus</b> hast du dieses schöne Hemd gekauft?","en":"<g>In what kind of</g> <b>department store</b> did you buy this nice shirt?","uk":"У <g>якому саме</g> <b>універмазі</b> ти купив цю гарну сорочку?","ru":"В <g>каком именно</g> <b>универмаге</b> ты купил эту красивую рубашку?"},"gram":"was_fuer_ein"},
  {"id":"k4_014","cat":"k4","term":{"de":"das Stockwerk","en":"floor / storey","uk":"поверх","ru":"этаж"},"short":{"de": "eine Ebene in einem Gebäude, z. B. der erste oder zweite Stock","en": "a level in a building, e.g. the first or second floor","uk": "рівень у будівлі, напр. перший чи другий поверх","ru": "уровень в здании, напр. первый или второй этаж"},"def":{"de":"Die Kinderabteilung findest du in <g>einem höheren</g> <b>Stockwerk</b>.","en":"You will find the children's department on <g>a higher</g> <b>floor</b>.","uk":"Дитячий відділ ти знайдеш на <g>вищому</g> <b>поверсі</b>.","ru":"Детский отдел ты найдёшь на <g>более высоком</g> <b>этаже</b>."},"gram":"adjektivendungen"},
  {"id":"k4_015","cat":"k4","term":{"de":"die Farbe","en":"colour","uk":"колір","ru":"цвет"},"short":{"de": "wie etwas aussieht, z. B. rot, blau oder grün","en": "what something looks like, e.g. red, blue or green","uk": "те, який вигляд щось має, напр. червоний, синій чи зелений","ru": "то, как что-то выглядит, напр. красный, синий или зелёный"},"def":{"de":"<g>Was für eine</g> <b>Farbe</b> gefällt dir bei einem Sommerkleid am besten?","en":"<g>What kind of</g> <b>colour</b> do you like best for a summer dress?","uk":"<g>Який саме</g> <b>колір</b> тобі найбільше подобається для літньої сукні?","ru":"<g>Какой именно</g> <b>цвет</b> тебе больше всего нравится для летнего платья?"},"gram":"was_fuer_ein"},
  {"id":"k4_016","cat":"k4","term":{"de":"gestreift","en":"striped","uk":"смугастий","ru":"полосатый"},"short":{"de": "mit vielen langen Linien, wie bei einem Streifenmuster","en": "with many long lines, like a striped pattern","uk": "з багатьма довгими лініями, як у смугастому візерунку","ru": "с множеством длинных линий, как в полосатом узоре"},"def":{"de":"Sie sucht eine Bluse mit <g>einem gestreiften</g> <b>Muster</b> in Blau und Weiß.","en":"She is looking for a blouse with <g>a striped</g> <b>pattern</b> in blue and white.","uk":"Вона шукає блузку зі <g>смугастим</g> <b>візерунком</b> у синьо-білих тонах.","ru":"Она ищет блузку с <g>полосатым</g> <b>узором</b> в сине-белых тонах."},"gram":"adjektivendungen"},
  {"id":"k4_017","cat":"k4","term":{"de":"kariert","en":"checkered","uk":"картатий","ru":"клетчатый"},"short":{"de": "mit einem Muster aus kleinen Quadraten","en": "with a pattern of small squares","uk": "з візерунком із маленьких квадратів","ru": "с узором из маленьких квадратов"},"def":{"de":"Er trägt zur Arbeit gern ein Hemd mit <g>einem karierten</g> <b>Muster</b>.","en":"He likes to wear a shirt with <g>a checkered</g> <b>pattern</b> to work.","uk":"На роботу він любить одягати сорочку з <g>картатим</g> <b>візерунком</b>.","ru":"На работу он любит надевать рубашку с <g>клетчатым</g> <b>узором</b>."},"gram":"adjektivendungen"},
  {"id":"k4_018","cat":"k4","term":{"de":"eng","en":"tight / narrow","uk":"вузький","ru":"узкий"},"short":{"de": "nicht viel Platz habend, sehr nah am Körper","en": "not much space, very close to the body","uk": "без багато місця, дуже щільно прилягає до тіла","ru": "без много места, очень плотно прилегает к телу"},"def":{"de":"Sie möchte keine <g>enge</g> <b>Hose</b> zum Sport tragen.","en":"She does not want to wear <g>tight</g> <b>trousers</b> for sport.","uk":"Вона не хоче одягати <g>вузькі</g> <b>штани</b> для спорту.","ru":"Она не хочет надевать <g>узкие</g> <b>брюки</b> для спорта."},"gram":"adjektivendungen"},
  {"id":"k4_019","cat":"k4","term":{"de":"weit","en":"wide / loose","uk":"широкий","ru":"широкий"},"short":{"de": "viel Platz habend, nicht eng am Körper","en": "having a lot of space, not tight on the body","uk": "з великим простором, не щільно прилягає до тіла","ru": "с большим простором, не плотно прилегает к телу"},"def":{"de":"Im Sommer trägt sie gern <g>ein weites</g> <b>Kleid</b>, weil es dann nicht so heiß ist.","en":"In summer she likes to wear <g>a loose</g> <b>dress</b>, because then it is not so hot.","uk":"Влітку вона любить носити <g>широку</g> <b>сукню</b>, бо в ній не так спекотно.","ru":"Летом она любит носить <g>свободное</g> <b>платье</b>, потому что в нём не так жарко."},"gram":"adjektivendungen"},
  {"id":"k4_020","cat":"k4","term":{"de":"bequem","en":"comfortable","uk":"зручний","ru":"удобный"},"short":{"de": "angenehm zu tragen, ohne zu drücken","en": "pleasant to wear, without pressing","uk": "приємно носити, нічого не тисне","ru": "приятно носить, ничего не давит"},"def":{"de":"Für die Arbeit sucht er <g>einen bequemen</g> <b>Pullover</b>.","en":"For work he is looking for <g>a comfortable</g> <b>sweater</b>.","uk":"Для роботи він шукає <g>зручний</g> <b>светр</b>.","ru":"Для работы он ищет <g>удобный</g> <b>свитер</b>."},"gram":"adjektivendungen"},
  {"id":"k4_021","cat":"k4","term":{"de":"tragen","en":"to wear","uk":"носити","ru":"носить"},"short":{"de": "Kleidung am Körper haben","en": "to have clothes on your body","uk": "мати на собі одяг","ru": "иметь на себе одежду"},"def":{"de":"Sie <b>trägt</b> heute <g>ein neues</g> Hemd, das ihr sehr gut steht.","en":"Today she is <b>wearing</b> <g>a new</g> shirt that suits her very well.","uk":"Сьогодні вона <b>одягнула</b> <g>нову</g> сорочку, яка їй дуже личить.","ru":"Сегодня она <b>надела</b> <g>новую</g> рубашку, которая ей очень идёт."},"gram":"adjektivendungen"},
  {"id":"k4_022","cat":"k4","term":{"de":"das Fest","en":"party / celebration","uk":"свято","ru":"праздник"},"short":{"de": "ein besonderer Tag, an dem man feiert","en": "a special day when you celebrate","uk": "особливий день, коли святкують","ru": "особый день, когда празднуют"},"def":{"de":"<g>Was für ein</g> <b>Fest</b> feiert ihr denn am Samstag?","en":"<g>What kind of</g> <b>party</b> are you celebrating on Saturday?","uk":"<g>Яке саме</g> <b>свято</b> ви святкуєте в суботу?","ru":"<g>Какой именно</g> <b>праздник</b> вы отмечаете в субботу?"},"gram":"was_fuer_ein"},
  {"id":"k4_023","cat":"k4","term":{"de":"die Festkleidung","en":"formal wear","uk":"святковий одяг","ru":"праздничная одежда"},"short":{"de": "besonders schöne Kleidung für ein Fest","en": "especially nice clothes for a party","uk": "особливо гарний одяг для свята","ru": "особенно красивая одежда для праздника"},"def":{"de":"Für die Hochzeit braucht er <g>eine elegante</g> <b>Festkleidung</b>.","en":"For the wedding he needs <g>elegant</g> <b>formal wear</b>.","uk":"Для весілля йому потрібен <g>елегантний</g> <b>святковий одяг</b>.","ru":"Для свадьбы ему нужна <g>элегантная</g> <b>праздничная одежда</b>."},"gram":"adjektivendungen"},
  {"id":"k5_001","cat":"k5","term":{"de":"das Verkehrsmittel","en":"means of transport","uk":"транспортний засіб","ru":"транспортное средство"},"short":{"de": "etwas, mit dem man von einem Ort zum anderen fährt, z. B. Bus oder Auto","en": "something you use to get from one place to another, e.g. bus or car","uk": "те, чим їдеш з одного місця в інше, напр. автобус чи автомобіль","ru": "то, на чём ты едешь из одного места в другое, напр. автобус или машина"},"def":{"de":"<g>Wenn</g> es regnet, nimmt sie lieber ein anderes <b>Verkehrsmittel</b>.","en":"<g>When</g> it rains, she prefers to take another <b>means of transport</b>.","uk":"<g>Коли</g> йде дощ, вона радше обирає інший <b>транспортний засіб</b>.","ru":"<g>Когда</g> идёт дождь, она предпочитает другое <b>транспортное средство</b>."},"gram":"wenn_satz"},
  {"id":"k5_002","cat":"k5","term":{"de":"das Fahrrad","en":"bicycle","uk":"велосипед","ru":"велосипед"},"short":{"de": "ein Verkehrsmittel mit zwei Rädern, das man mit den Beinen bewegt","en": "a means of transport with two wheels that you move with your legs","uk": "транспортний засіб на двох колесах, який рухаєш ногами","ru": "транспортное средство на двух колёсах, которое двигаешь ногами"},"def":{"de":"<g>Wenn</g> die Sonne scheint, fährt er gern mit dem <b>Fahrrad</b> zur Arbeit.","en":"<g>When</g> the sun is shining, he likes to ride his <b>bicycle</b> to work.","uk":"<g>Коли</g> світить сонце, він любить їздити на роботу на <b>велосипеді</b>.","ru":"<g>Когда</g> светит солнце, он любит ездить на работу на <b>велосипеде</b>."},"gram":"wenn_satz"},
  {"id":"k5_003","cat":"k5","term":{"de":"der Bus","en":"bus","uk":"автобус","ru":"автобус"},"short":{"de": "ein großes Fahrzeug, mit dem viele Menschen zusammen fahren","en": "a large vehicle in which many people travel together","uk": "велике транспортне засіб, у якому багато людей їдуть разом","ru": "большое транспортное средство, в котором много людей едут вместе"},"def":{"de":"<g>Wenn</g> der <b>Bus</b> zu voll ist, wartet sie lieber auf den nächsten.","en":"<g>When</g> the <b>bus</b> is too full, she prefers to wait for the next one.","uk":"<g>Коли</g> <b>автобус</b> надто переповнений, вона радше чекає на наступний.","ru":"<g>Когда</g> <b>автобус</b> слишком переполнен, она предпочитает подождать следующий."},"gram":"wenn_satz"},
  {"id":"k5_004","cat":"k5","term":{"de":"die U-Bahn","en":"subway","uk":"метро","ru":"метро"},"short":{"de": "ein Verkehrsmittel, das unter der Erde durch die Stadt fährt","en": "a means of transport that travels through the city underground","uk": "транспортний засіб, який їде під землею через місто","ru": "транспортное средство, которое едет под землёй через город"},"def":{"de":"<g>Wenn</g> man schnell ins Zentrum will, ist die <b>U-Bahn</b> ideal.","en":"<g>When</g> you want to get to the centre quickly, the <b>subway</b> is ideal.","uk":"<g>Коли</g> хочеш швидко дістатися до центру, <b>метро</b> – ідеальний варіант.","ru":"<g>Когда</g> хочешь быстро добраться до центра, <b>метро</b> – идеальный вариант."},"gram":"wenn_satz"},
  {"id":"k5_005","cat":"k5","term":{"de":"das Auto","en":"car","uk":"автомобіль","ru":"автомобиль"},"short":{"de": "ein Fahrzeug mit vier Rädern und einem Motor","en": "a vehicle with four wheels and an engine","uk": "транспортний засіб на чотирьох колесах з двигуном","ru": "транспортное средство на четырёх колёсах с двигателем"},"def":{"de":"<g>Wenn</g> die Familie in Urlaub fährt, nehmen sie immer das <b>Auto</b>.","en":"<g>When</g> the family goes on holiday, they always take the <b>car</b>.","uk":"<g>Коли</g> родина їде у відпустку, вони завжди беруть <b>автомобіль</b>.","ru":"<g>Когда</g> семья едет в отпуск, они всегда берут <b>машину</b>."},"gram":"wenn_satz"},
  {"id":"k5_006","cat":"k5","term":{"de":"das Taxi","en":"taxi","uk":"таксі","ru":"такси"},"short":{"de": "ein Auto, das man mit Fahrer für eine Fahrt bezahlt","en": "a car with a driver that you pay for a ride","uk": "автомобіль із водієм, за поїздку яким ти платиш","ru": "автомобиль с водителем, за поездку на котором ты платишь"},"def":{"de":"Er nimmt ein <b>Taxi</b>, <g>weil</g> der Zug heute leider Verspätung hat.","en":"He takes a <b>taxi</b> <g>because</g> the train is unfortunately delayed today.","uk":"Він бере <b>таксі</b>, <g>тому що</g> потяг сьогодні, на жаль, запізнюється.","ru":"Он берёт <b>такси</b>, <g>потому что</g> поезд сегодня, к сожалению, опаздывает."},"gram":"weil_satz"},
  {"id":"k5_007","cat":"k5","term":{"de":"der Rollstuhl","en":"wheelchair","uk":"інвалідний візок","ru":"инвалидная коляска"},"short":{"de": "ein Stuhl mit Rädern für Menschen, die nicht gut laufen können","en": "a chair with wheels for people who cannot walk well","uk": "крісло на колесах для людей, які не можуть добре ходити","ru": "кресло на колёсах для людей, которые не могут хорошо ходить"},"def":{"de":"Man sieht, <g>dass</g> nicht jede Haltestelle für einen <b>Rollstuhl</b> geeignet ist.","en":"You can see <g>that</g> not every stop is suitable for a <b>wheelchair</b>.","uk":"Видно, <g>що</g> не кожна зупинка підходить для <b>інвалідного візка</b>.","ru":"Видно, <g>что</g> не каждая остановка подходит для <b>инвалидной коляски</b>."},"gram":"dass_satz"},
  {"id":"k5_008","cat":"k5","term":{"de":"barrierefrei","en":"accessible (barrier-free)","uk":"безбарʼєрний","ru":"безбарьерный"},"short":{"de": "so gebaut, dass auch Menschen mit Rollstuhl gut hineinkommen","en": "built so that people with wheelchairs can also easily get in","uk": "побудовано так, щоб люди на візках теж могли легко потрапити","ru": "построено так, чтобы люди на коляске тоже могли легко попасть"},"def":{"de":"Sie freut sich, <g>dass</g> die neue U-Bahn-Station <b>barrierefrei</b> ist.","en":"She is happy <g>that</g> the new subway station is <b>accessible</b>.","uk":"Вона рада, <g>що</g> нова станція метро <b>безбарʼєрна</b>.","ru":"Она рада, <g>что</g> новая станция метро <b>безбарьерная</b>."},"gram":"dass_satz"},
  {"id":"k5_009","cat":"k5","term":{"de":"das Wetter","en":"weather","uk":"погода","ru":"погода"},"short":{"de": "ob es z. B. regnet, die Sonne scheint oder schneit","en": "whether it is raining, sunny or snowing, for example","uk": "наприклад, чи йде дощ, світить сонце чи йде сніг","ru": "например, идёт ли дождь, светит ли солнце или идёт снег"},"def":{"de":"Er fährt heute mit dem Rad, <g>weil</g> das <b>Wetter</b> so schön ist.","en":"He is cycling today <g>because</g> the <b>weather</b> is so nice.","uk":"Сьогодні він їде на велосипеді, <g>тому що</g> така гарна <b>погода</b>.","ru":"Сегодня он едет на велосипеде, <g>потому что</g> такая хорошая <b>погода</b>."},"gram":"weil_satz"},
  {"id":"k5_010","cat":"k5","term":{"de":"regnen","en":"to rain","uk":"йти (про дощ)","ru":"идти (о дожде)"},"short":{"de": "wenn Wasser vom Himmel fällt","en": "when water falls from the sky","uk": "коли з неба падає вода","ru": "когда с неба падает вода"},"def":{"de":"Sie nimmt den Bus, <g>weil</g> es draußen stark <b>regnet</b>.","en":"She takes the bus <g>because</g> it is <b>raining</b> heavily outside.","uk":"Вона їде автобусом, <g>тому що</g> надворі сильно <b>йде дощ</b>.","ru":"Она едет автобусом, <g>потому что</g> на улице сильно <b>идёт дождь</b>."},"gram":"weil_satz"},
  {"id":"k5_011","cat":"k5","term":{"de":"schneien","en":"to snow","uk":"йти (про сніг)","ru":"идти (о снеге)"},"short":{"de": "wenn weißer, kalter Schnee vom Himmel fällt","en": "when white, cold snow falls from the sky","uk": "коли з неба падає білий, холодний сніг","ru": "когда с неба падает белый, холодный снег"},"def":{"de":"Im Dezember <b>schneit</b> es hier oft <g>mehr als</g> im Januar.","en":"In December it <b>snows</b> here often <g>more than</g> in January.","uk":"У грудні тут <b>сніжить</b> частіше, <g>ніж</g> у січні.","ru":"В декабре здесь <b>снежит</b> чаще, <g>чем</g> в январе."},"gram":"komparativ"},
  {"id":"k5_012","cat":"k5","term":{"de":"der Vorteil","en":"advantage","uk":"перевага","ru":"преимущество"},"short":{"de": "etwas Gutes, das eine Sache oder Situation bringt","en": "something good that a thing or situation brings","uk": "щось хороше, що дає річ чи ситуація","ru": "что-то хорошее, что даёт вещь или ситуация"},"def":{"de":"Der größte <b>Vorteil</b> vom Fahrrad ist, dass es <g>billiger als</g> ein Auto ist.","en":"The biggest <b>advantage</b> of a bicycle is that it is <g>cheaper than</g> a car.","uk":"Найбільша <b>перевага</b> велосипеда в тому, що він <g>дешевший, ніж</g> автомобіль.","ru":"Самое большое <b>преимущество</b> велосипеда в том, что он <g>дешевле, чем</g> автомобиль."},"gram":"komparativ"},
  {"id":"k5_013","cat":"k5","term":{"de":"der Nachteil","en":"disadvantage","uk":"недолік","ru":"недостаток"},"short":{"de": "etwas Schlechtes, das eine Sache oder Situation bringt","en": "something bad that a thing or situation brings","uk": "щось погане, що дає річ чи ситуація","ru": "что-то плохое, что даёт вещь или ситуация"},"def":{"de":"Ein <b>Nachteil</b> vom Bus ist, dass er oft <g>langsamer als</g> die U-Bahn ist.","en":"A <b>disadvantage</b> of the bus is that it is often <g>slower than</g> the subway.","uk":"<b>Недолік</b> автобуса в тому, що він часто <g>повільніший, ніж</g> метро.","ru":"<b>Недостаток</b> автобуса в том, что он часто <g>медленнее, чем</g> метро."},"gram":"komparativ"},
  {"id":"k5_014","cat":"k5","term":{"de":"die Strecke","en":"route / distance","uk":"маршрут","ru":"маршрут"},"short":{"de": "der Weg von einem Ort zu einem anderen","en": "the way from one place to another","uk": "шлях від одного місця до іншого","ru": "путь от одного места до другого"},"def":{"de":"Mit dem Fahrrad ist diese <b>Strecke</b> <g>genauso schnell wie</g> mit dem Bus.","en":"By bicycle, this <b>route</b> is <g>just as fast as</g> by bus.","uk":"На велосипеді цей <b>маршрут</b> <g>такий самий швидкий, як</g> автобусом.","ru":"На велосипеде этот <b>маршрут</b> <g>такой же быстрый, как</g> на автобусе."},"gram":"komparativ"},
  {"id":"k5_015","cat":"k5","term":{"de":"mit dem Auto fahren","en":"to drive (by car)","uk":"їхати автомобілем","ru":"ехать на машине"},"short":{"de": "ein Auto benutzen, um irgendwohin zu kommen","en": "to use a car to get somewhere","uk": "користуватися автомобілем, щоб дістатися кудись","ru": "пользоваться автомобилем, чтобы куда-то добраться"},"def":{"de":"<b>Mit dem Auto</b> zu <b>fahren</b> ist heute <g>schneller als</g> mit dem Bus.","en":"To <b>drive by car</b> today is <g>faster than</g> by bus.","uk":"<b>Їхати автомобілем</b> сьогодні <g>швидше, ніж</g> автобусом.","ru":"<b>Ехать на машине</b> сегодня <g>быстрее, чем</g> на автобусе."},"gram":"komparativ"},
  {"id":"k5_016","cat":"k5","term":{"de":"zu Fuß gehen","en":"to walk / go on foot","uk":"йти пішки","ru":"идти пешком"},"short":{"de": "ohne Fahrzeug irgendwohin laufen","en": "to walk somewhere without a vehicle","uk": "йти кудись без транспортного засобу","ru": "идти куда-то без транспортного средства"},"def":{"de":"Für kurze Strecken ist <b>zu Fuß</b> zu <b>gehen</b> <g>am gesündesten</g>.","en":"For short distances, <b>walking</b> is <g>the healthiest</g>.","uk":"Для коротких відстаней <b>ходити пішки</b> <g>найкорисніше</g>.","ru":"Для коротких расстояний <b>ходить пешком</b> <g>полезнее всего</g>."},"gram":"superlativ"},
  {"id":"k5_017","cat":"k5","term":{"de":"die Haltestelle","en":"(bus/tram) stop","uk":"зупинка","ru":"остановка"},"short":{"de": "der Ort, an dem Bus oder Bahn hält, damit man einsteigen kann","en": "the place where a bus or train stops so you can get on","uk": "місце, де зупиняється автобус чи потяг, щоб можна було сісти","ru": "место, где останавливается автобус или поезд, чтобы можно было сесть"},"def":{"de":"Diese <b>Haltestelle</b> liegt <g>am nächsten</g> zu unserer Wohnung.","en":"This <b>stop</b> is <g>the closest</g> to our apartment.","uk":"Ця <b>зупинка</b> розташована <g>найближче</g> до нашої квартири.","ru":"Эта <b>остановка</b> находится <g>ближе всего</g> к нашей квартире."},"gram":"superlativ"},
  {"id":"k5_018","cat":"k5","term":{"de":"der Fahrplan","en":"timetable","uk":"розклад","ru":"расписание"},"short":{"de": "eine Liste mit den Zeiten von Bus, Bahn oder U-Bahn","en": "a list with the times of buses, trains or subways","uk": "список із часом руху автобуса, потяга чи метро","ru": "список со временем движения автобуса, поезда или метро"},"def":{"de":"Laut <b>Fahrplan</b> fährt der erste Bus <g>am frühesten</g> um sechs Uhr.","en":"According to the <b>timetable</b>, the first bus leaves <g>earliest</g> at six oʼclock.","uk":"Згідно з <b>розкладом</b>, перший автобус вирушає <g>найраніше</g> о шостій.","ru":"Согласно <b>расписанию</b>, первый автобус отправляется <g>раньше всего</g> в шесть."},"gram":"superlativ"},
  {"id":"k5_019","cat":"k5","term":{"de":"schnell","en":"fast","uk":"швидкий","ru":"быстрый"},"short":{"de": "so, dass es nicht viel Zeit braucht","en": "in a way that does not take much time","uk": "так, що не потребує багато часу","ru": "так, что не требует много времени"},"def":{"de":"Von allen Verkehrsmitteln ist die U-Bahn <g>am <b>schnellsten</b></g>.","en":"Of all the means of transport, the subway is <g>the <b>fastest</b></g>.","uk":"З-поміж усіх транспортних засобів метро <g><b>найшвидше</b></g>.","ru":"Из всех транспортных средств метро <g><b>быстрее всего</b></g>."},"gram":"superlativ"},
  {"id":"k5_020","cat":"k5","term":{"de":"langsam","en":"slow","uk":"повільний","ru":"медленный"},"short":{"de": "so, dass es viel Zeit braucht","en": "in a way that takes a lot of time","uk": "так, що потребує багато часу","ru": "так, что требует много времени"},"def":{"de":"Bei viel Verkehr fährt der Bus <g>am <b>langsamsten</b></g> von allen.","en":"In heavy traffic, the bus drives <g>the <b>slowest</b></g> of all.","uk":"У щільному русі автобус їде <g><b>найповільніше</b></g> з-поміж усіх.","ru":"В плотном движении автобус едет <g><b>медленнее всего</b></g> из всех."},"gram":"superlativ"},
  {"id":"k6_001","cat":"k6","term":{"de":"die Verwandtschaft","en":"relatives / family relations","uk":"родичі","ru":"родственники"},"short":{"de": "alle Personen, die zur Familie gehören","en": "all the people who belong to the family","uk": "усі люди, які належать до родини","ru": "все люди, которые принадлежат к семье"},"def":{"de":"Sie <g>möchte</g> ihre ganze <b>Verwandtschaft</b> zur Feier einladen.","en":"She <g>wants</g> to invite her whole <b>family</b> to the celebration.","uk":"Вона <g>хоче</g> запросити всіх своїх <b>родичів</b> на святкування.","ru":"Она <g>хочет</g> пригласить всех своих <b>родственников</b> на праздник."},"gram":"modalverben"},
  {"id":"k6_002","cat":"k6","term":{"de":"die Eltern","en":"parents","uk":"батьки","ru":"родители"},"short":{"de": "Vater und Mutter","en": "father and mother","uk": "батько і мати","ru": "отец и мать"},"def":{"de":"Als Kind <g>durfte</g> sie oft mit ihren <b>Eltern</b> verreisen.","en":"As a child she <g>was allowed</g> to travel often with her <b>parents</b>.","uk":"У дитинстві їй <g>дозволялося</g> часто подорожувати зі своїми <b>батьками</b>.","ru":"В детстве ей <g>разрешалось</g> часто путешествовать со своими <b>родителями</b>."},"gram":"modalverben_praeteritum"},
  {"id":"k6_003","cat":"k6","term":{"de":"die Großeltern","en":"grandparents","uk":"бабуся й дідусь","ru":"бабушка и дедушка"},"short":{"de": "die Eltern von Vater oder Mutter","en": "the parents of the father or mother","uk": "батьки батька чи матері","ru": "родители отца или матери"},"def":{"de":"Er <g>musste</g> als Kind jeden Sommer bei seinen <b>Großeltern</b> bleiben.","en":"As a child, he <g>had to</g> stay with his <b>grandparents</b> every summer.","uk":"У дитинстві йому <g>доводилося</g> щоліта залишатися у своїх <b>бабусі й дідуся</b>.","ru":"В детстве ему <g>приходилось</g> каждое лето оставаться у своих <b>бабушки и дедушки</b>."},"gram":"modalverben_praeteritum"},
  {"id":"k6_004","cat":"k6","term":{"de":"die Geschwister","en":"siblings","uk":"брати і сестри","ru":"братья и сёстры"},"short":{"de": "Bruder und Schwester zusammen","en": "brother and sister together","uk": "брат і сестра разом","ru": "брат и сестра вместе"},"def":{"de":"Sie <g>kann</g> sich mit ihren <b>Geschwistern</b> immer gut verstehen.","en":"She <g>can</g> always get along well with her <b>siblings</b>.","uk":"Вона завжди <g>може</g> добре порозумітися зі своїми <b>братами і сестрами</b>.","ru":"Она всегда <g>может</g> хорошо ладить со своими <b>братьями и сёстрами</b>."},"gram":"modalverben"},
  {"id":"k6_005","cat":"k6","term":{"de":"die Hochzeit","en":"wedding","uk":"весілля","ru":"свадьба"},"short":{"de": "das Fest, wenn zwei Menschen heiraten","en": "the celebration when two people get married","uk": "свято, коли двоє людей одружуються","ru": "праздник, когда двое людей женятся"},"def":{"de":"Alle <g>wollen</g> zur <b>Hochzeit</b> von Anna und Tom kommen.","en":"Everyone <g>wants</g> to come to Anna and Tomʼs <b>wedding</b>.","uk":"Усі <g>хочуть</g> прийти на <b>весілля</b> Анни і Тома.","ru":"Все <g>хотят</g> прийти на <b>свадьбу</b> Анны и Тома."},"gram":"modalverben"},
  {"id":"k6_006","cat":"k6","term":{"de":"heiraten","en":"to marry","uk":"одружуватися","ru":"жениться / выходить замуж"},"short":{"de": "offiziell Mann und Frau (oder Partner) werden","en": "to officially become husband and wife (or partners)","uk": "офіційно ставати чоловіком і дружиною (чи партнерами)","ru": "официально становиться мужем и женой (или партнёрами)"},"def":{"de":"Sie <b>heiraten</b> <g>im nächsten Sommer</g> in einer kleinen Kirche.","en":"They are getting <b>married</b> <g>next summer</g> in a small church.","uk":"Вони <b>одружуються</b> <g>наступного літа</g> у маленькій церкві.","ru":"Они <b>женятся</b> <g>следующим летом</g> в маленькой церкви."},"gram":"temporale_praepositionen"},
  {"id":"k6_007","cat":"k6","term":{"de":"die Migration","en":"migration","uk":"міграція","ru":"миграция"},"short":{"de": "wenn Menschen in ein anderes Land ziehen, um dort zu leben","en": "when people move to another country to live there","uk": "коли люди переїжджають в іншу країну, щоб там жити","ru": "когда люди переезжают в другую страну, чтобы там жить"},"def":{"de":"<g>Seit vielen Jahren</g> spielt <b>Migration</b> eine wichtige Rolle in Deutschland.","en":"<b>Migration</b> has played an important role in Germany <g>for many years</g>.","uk":"<g>Багато років</g> <b>міграція</b> відіграє важливу роль у Німеччині.","ru":"<g>Много лет</g> <b>миграция</b> играет важную роль в Германии."},"gram":"temporale_praepositionen"},
  {"id":"k6_008","cat":"k6","term":{"de":"auswandern","en":"to emigrate","uk":"емігрувати","ru":"эмигрировать"},"short":{"de": "das eigene Land verlassen, um in einem anderen Land zu leben","en": "to leave your own country to live in another country","uk": "залишати свою країну, щоб жити в іншій країні","ru": "покидать свою страну, чтобы жить в другой стране"},"def":{"de":"Ihre Familie ist <g>vor zehn Jahren</g> nach Deutschland <b>ausgewandert</b>.","en":"Her family <b>emigrated</b> to Germany <g>ten years ago</g>.","uk":"Її родина <b>емігрувала</b> до Німеччини <g>десять років тому</g>.","ru":"Её семья <b>эмигрировала</b> в Германию <g>десять лет назад</g>."},"gram":"temporale_praepositionen"},
  {"id":"k6_009","cat":"k6","term":{"de":"das Heimatland","en":"homeland","uk":"батьківщина","ru":"родина"},"short":{"de": "das Land, in dem man geboren ist","en": "the country where you were born","uk": "країна, у якій ти народився","ru": "страна, в которой ты родился"},"def":{"de":"Sie fliegt <g>einmal im Jahr</g> in ihr <b>Heimatland</b>, um Familie zu besuchen.","en":"She flies to her <b>homeland</b> <g>once a year</g> to visit family.","uk":"Вона <g>раз на рік</g> літає до своєї <b>батьківщини</b>, щоб відвідати родину.","ru":"Она <g>раз в год</g> летает на свою <b>родину</b>, чтобы навестить семью."},"gram":"temporale_praepositionen"},
  {"id":"k6_010","cat":"k6","term":{"de":"die Erinnerung","en":"memory","uk":"спогад","ru":"воспоминание"},"short":{"de": "ein Bild im Kopf von etwas, das man früher erlebt hat","en": "a picture in your mind of something you experienced before","uk": "образ у голові про те, що ти пережив раніше","ru": "образ в голове о том, что ты пережил раньше"},"def":{"de":"<g>Seit der Kindheit</g> hat sie viele schöne <b>Erinnerungen</b> an ihr Dorf.","en":"<g>Since childhood</g>, she has many beautiful <b>memories</b> of her village.","uk":"<g>З дитинства</g> у неї багато гарних <b>спогадів</b> про своє село.","ru":"<g>С детства</g> у неё много приятных <b>воспоминаний</b> о своём селе."},"gram":"temporale_praepositionen"},
  {"id":"k6_011","cat":"k6","term":{"de":"sich erinnern","en":"to remember","uk":"пригадувати","ru":"вспоминать"},"short":{"de": "sich an etwas aus der Vergangenheit denken","en": "to think back to something from the past","uk": "думати про щось із минулого","ru": "вспоминать что-то из прошлого"},"def":{"de":"Sie <b>erinnert</b> sich noch genau, <g>als</g> sie zum ersten Mal in Deutschland ankam.","en":"She still <b>remembers</b> exactly <g>when</g> she first arrived in Germany.","uk":"Вона досі точно <b>памʼятає</b> той момент, <g>коли</g> вперше приїхала до Німеччини.","ru":"Она до сих пор точно <b>помнит</b> тот момент, <g>когда</g> впервые приехала в Германию."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_012","cat":"k6","term":{"de":"schwer","en":"difficult / heavy","uk":"важкий","ru":"тяжёлый"},"short":{"de": "nicht leicht, mit viel Anstrengung verbunden","en": "not easy, requiring a lot of effort","uk": "нелегкий, повʼязаний із великими зусиллями","ru": "нелёгкий, связанный с большими усилиями"},"def":{"de":"Am Anfang war es <b>schwer</b> für sie, <g>als</g> sie noch kein Deutsch konnte.","en":"It was <b>hard</b> for her at the beginning, <g>when</g> she could not speak German yet.","uk":"Спочатку їй було <b>важко</b> у той час, <g>коли</g> вона ще не знала німецької.","ru":"Сначала ей было <b>тяжело</b> в то время, <g>когда</g> она ещё не знала немецкого."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_013","cat":"k6","term":{"de":"leicht","en":"easy / light","uk":"легкий","ru":"лёгкий"},"short":{"de": "ohne viel Anstrengung, einfach","en": "without much effort, easy","uk": "без великих зусиль, легко","ru": "без больших усилий, легко"},"def":{"de":"Es war <b>leicht</b> für ihn, <g>schon</g> nach einem Jahr fließend zu sprechen.","en":"It was <b>easy</b> for him to speak fluently <g>already</g> after one year.","uk":"Йому було <b>легко</b> заговорити вільно <g>вже</g> через рік.","ru":"Ему было <b>легко</b> заговорить свободно <g>уже</g> через год."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_014","cat":"k6","term":{"de":"die Sprache","en":"language","uk":"мова","ru":"язык"},"short":{"de": "das System von Wörtern, mit dem man spricht, z. B. Deutsch oder Englisch","en": "the system of words used to speak, e.g. German or English","uk": "система слів, якою розмовляють, напр. німецька чи англійська","ru": "система слов, на которой говорят, напр. немецкий или английский"},"def":{"de":"Sie hat die neue <b>Sprache</b> <g>erst</g> nach vielen Monaten wirklich gut gelernt.","en":"She really learned the new <b>language</b> well <g>only</g> after many months.","uk":"Вона по-справжньому добре вивчила нову <b>мову</b> <g>лише</g> через багато місяців.","ru":"Она по-настоящему хорошо выучила новый <b>язык</b> <g>только</g> через много месяцев."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_015","cat":"k6","term":{"de":"die Kultur","en":"culture","uk":"культура","ru":"культура"},"short":{"de": "die Art, wie Menschen in einem Land leben, feiern und denken","en": "the way people in a country live, celebrate and think","uk": "спосіб, у який люди в країні живуть, святкують і думають","ru": "способ, каким люди в стране живут, празднуют и думают"},"def":{"de":"<g>Als</g> sie neu in Deutschland war, fand sie die <b>Kultur</b> sehr interessant.","en":"<g>When</g> she was new in Germany, she found the <b>culture</b> very interesting.","uk":"<g>Коли</g> вона щойно приїхала до Німеччини, <b>культура</b> здалася їй дуже цікавою.","ru":"<g>Когда</g> она только приехала в Германию, <b>культура</b> показалась ей очень интересной."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_016","cat":"k6","term":{"de":"sich verändern","en":"to change","uk":"змінюватися","ru":"меняться"},"short":{"de": "anders werden als vorher","en": "to become different from before","uk": "ставати іншим, ніж раніше","ru": "становиться другим, чем раньше"},"def":{"de":"Ihr Leben hat sich <g>schon</g> nach kurzer Zeit stark <b>verändert</b>.","en":"Her life had <b>changed</b> a lot <g>already</g> after a short time.","uk":"Її життя <b>змінилося</b> сильно <g>вже</g> через короткий час.","ru":"Её жизнь <b>изменилась</b> сильно <g>уже</g> через короткое время."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_017","cat":"k6","term":{"de":"das Leben","en":"life","uk":"життя","ru":"жизнь"},"short":{"de": "alles, was ein Mensch erlebt, von der Geburt bis heute","en": "everything a person experiences from birth until today","uk": "все, що людина переживає від народження і до сьогодні","ru": "всё, что человек переживает от рождения до сегодняшнего дня"},"def":{"de":"<g>Als</g> sie nach Deutschland kam, begann für sie ein neues <b>Leben</b>.","en":"<g>When</g> she came to Germany, a new <b>life</b> began for her.","uk":"<g>Коли</g> вона приїхала до Німеччини, для неї почалося нове <b>життя</b>.","ru":"<g>Когда</g> она приехала в Германию, для неё началась новая <b>жизнь</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_018","cat":"k6","term":{"de":"der Smalltalk","en":"small talk","uk":"світська бесіда","ru":"светская беседа"},"short":{"de": "ein kurzes, freundliches Gespräch über einfache Themen","en": "a short, friendly conversation about simple topics","uk": "коротка, дружня розмова на прості теми","ru": "короткий, дружеский разговор на простые темы"},"def":{"de":"<g>Erst</g> nach ein paar Monaten konnte sie beim <b>Smalltalk</b> gut mitreden.","en":"<g>Only</g> after a few months could she take part in <b>small talk</b> well.","uk":"<g>Лише</g> через кілька місяців вона змогла добре підтримувати <b>світську бесіду</b>.","ru":"<g>Только</g> через несколько месяцев она смогла хорошо поддерживать <b>светскую беседу</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_019","cat":"k6","term":{"de":"das Enkelkind, -er","en":"grandchildren","uk":"онуки","ru":"внуки"},"short":{"de": "die Kinder der eigenen Kinder","en": "the children of your own children","uk": "діти власних дітей","ru": "дети собственных детей"},"def":{"de":"<g>Wenn</g> die <b>Enkelkinder</b> zu Besuch kommen, freut sich die ganze Familie.","en":"<g>When</g> the <b>grandchildren</b> come to visit, the whole family is happy.","uk":"<g>Коли</g> <b>онуки</b> приїжджають у гості, радіє вся родина.","ru":"<g>Когда</g> <b>внуки</b> приезжают в гости, радуется вся семья."},"gram":"als_wenn_schon_erst"},
  {"id":"k7_001","cat":"k7","term":{"de":"der Ausflug","en":"outing / trip","uk":"екскурсія","ru":"поездка"},"short":{"de": "eine kurze Reise, oft für einen Tag, um etwas zu sehen oder zu erleben","en": "a short trip, often for a day, to see or experience something","uk": "коротка поїздка, часто на день, щоб щось побачити чи пережити","ru": "короткая поездка, часто на день, чтобы что-то увидеть или пережить"},"def":{"de":"<g>Wenn</g> das Wetter schön ist, machen sie am Wochenende einen <b>Ausflug</b>.","en":"<g>When</g> the weather is nice, they go on a <b>trip</b> at the weekend.","uk":"<g>Коли</g> гарна погода, вони на вихідних вирушають на <b>екскурсію</b>.","ru":"<g>Когда</g> хорошая погода, они на выходных отправляются на <b>экскурсию</b>."},"gram":"wenn_satz"},
  {"id":"k7_002","cat":"k7","term":{"de":"der Vorschlag","en":"suggestion","uk":"пропозиція","ru":"предложение"},"short":{"de": "eine Idee, die man anderen sagt","en": "an idea you tell others","uk": "ідея, яку ти пропонуєш іншим","ru": "идея, которую ты предлагаешь другим"},"def":{"de":"<g>Wenn</g> jemand einen guten <b>Vorschlag</b> hat, freut sich das ganze Team.","en":"<g>When</g> someone has a good <b>suggestion</b>, the whole team is happy.","uk":"<g>Коли</g> хтось має гарну <b>пропозицію</b>, радіє вся команда.","ru":"<g>Когда</g> у кого-то есть хорошее <b>предложение</b>, радуется вся команда."},"gram":"wenn_satz"},
  {"id":"k7_003","cat":"k7","term":{"de":"vorschlagen","en":"to suggest","uk":"пропонувати","ru":"предлагать"},"short":{"de": "eine Idee sagen, was man zusammen machen könnte","en": "to say an idea about what you could do together","uk": "висловлювати ідею, що можна зробити разом","ru": "высказывать идею, что можно сделать вместе"},"def":{"de":"<g>Wenn</g> niemand eine Idee hat, <b>schlägt</b> sie meistens einen Zoobesuch <b>vor</b>.","en":"<g>When</g> no one has an idea, she usually <b>suggests</b> a visit to the zoo.","uk":"<g>Коли</g> ні в кого немає ідеї, вона зазвичай <b>пропонує</b> відвідати зоопарк.","ru":"<g>Когда</g> ни у кого нет идеи, она обычно <b>предлагает</b> посетить зоопарк."},"gram":"wenn_satz"},
  {"id":"k7_004","cat":"k7","term":{"de":"der Regen","en":"rain","uk":"дощ","ru":"дождь"},"short":{"de": "Wasser, das vom Himmel fällt","en": "water that falls from the sky","uk": "вода, яка падає з неба","ru": "вода, которая падает с неба"},"def":{"de":"<g>Wenn</g> starker <b>Regen</b> kommt, bleiben sie lieber zu Hause.","en":"<g>When</g> heavy <b>rain</b> comes, they prefer to stay at home.","uk":"<g>Коли</g> йде сильний <b>дощ</b>, вони радше залишаються вдома.","ru":"<g>Когда</g> идёт сильный <b>дождь</b>, они предпочитают остаться дома."},"gram":"wenn_satz"},
  {"id":"k7_005","cat":"k7","term":{"de":"die Sonne","en":"sun","uk":"сонце","ru":"солнце"},"short":{"de": "der helle Stern am Himmel, der uns Licht und Wärme gibt","en": "the bright star in the sky that gives us light and warmth","uk": "яскрава зірка на небі, яка дає нам світло і тепло","ru": "яркая звезда на небе, которая даёт нам свет и тепло"},"def":{"de":"<g>Wenn</g> die <b>Sonne</b> scheint, ist der Ausflug in den Park viel schöner.","en":"<g>When</g> the <b>sun</b> is shining, the trip to the park is much nicer.","uk":"<g>Коли</g> світить <b>сонце</b>, прогулянка в парк набагато приємніша.","ru":"<g>Когда</g> светит <b>солнце</b>, прогулка в парк намного приятнее."},"gram":"wenn_satz"},
  {"id":"k7_006","cat":"k7","term":{"de":"bewölkt","en":"cloudy","uk":"хмарно","ru":"облачно"},"short":{"de": "wenn viele Wolken am Himmel sind","en": "when there are many clouds in the sky","uk": "коли на небі багато хмар","ru": "когда на небе много туч"},"def":{"de":"<g>Dieser</g> <b>bewölkte</b> Tag ist nicht so gut für einen Ausflug.","en":"<g>This</g> <b>cloudy</b> day is not so good for a trip.","uk":"<g>Цей</g> <b>хмарний</b> день не дуже підходить для екскурсії.","ru":"<g>Этот</g> <b>облачный</b> день не очень подходит для поездки."},"gram":"demonstrativartikel"},
  {"id":"k7_007","cat":"k7","term":{"de":"das Gewitter","en":"thunderstorm","uk":"гроза","ru":"гроза"},"short":{"de": "sehr schlechtes Wetter mit Blitz und Donner","en": "very bad weather with lightning and thunder","uk": "дуже погана погода з блискавкою і громом","ru": "очень плохая погода с молнией и громом"},"def":{"de":"<g>Dieses</g> <b>Gewitter</b> ist wirklich sehr stark und laut.","en":"<g>This</g> <b>thunderstorm</b> is really very strong and loud.","uk":"<g>Ця</g> <b>гроза</b> справді дуже сильна і гучна.","ru":"<g>Эта</g> <b>гроза</b> действительно очень сильная и громкая."},"gram":"demonstrativartikel"},
  {"id":"k7_008","cat":"k7","term":{"de":"der Zoo","en":"zoo","uk":"зоопарк","ru":"зоопарк"},"short":{"de": "ein Ort, an dem viele verschiedene Tiere leben und man sie ansehen kann","en": "a place where many different animals live and you can look at them","uk": "місце, де живуть різні тварини і на них можна подивитися","ru": "место, где живут разные животные и на них можно посмотреть"},"def":{"de":"<g>Dieser</g> <b>Zoo</b> hat besonders viele Tiere aus Afrika.","en":"<g>This</g> <b>zoo</b> has especially many animals from Africa.","uk":"У <g>цьому</g> <b>зоопарку</b> особливо багато тварин з Африки.","ru":"В <g>этом</g> <b>зоопарке</b> особенно много животных из Африки."},"gram":"demonstrativartikel"},
  {"id":"k7_009","cat":"k7","term":{"de":"die Sehenswürdigkeit","en":"sight / attraction","uk":"визначна памʼятка","ru":"достопримечательность"},"short":{"de": "ein besonderer Ort, den viele Menschen sehen möchten","en": "a special place that many people want to see","uk": "особливе місце, яке хочуть побачити багато людей","ru": "особое место, которое хотят увидеть многие люди"},"def":{"de":"<g>Diese</g> <b>Sehenswürdigkeit</b> ist die berühmteste in der ganzen Stadt.","en":"<g>This</g> <b>sight</b> is the most famous in the whole city.","uk":"<g>Ця</g> <b>визначна памʼятка</b> найвідоміша в усьому місті.","ru":"Эта <g>эта</g> <b>достопримечательность</b> самая известная во всём городе."},"gram":"demonstrativartikel"},
  {"id":"k7_010","cat":"k7","term":{"de":"gefallen","en":"to like / please","uk":"подобатися","ru":"нравиться"},"short":{"de": "wenn man etwas schön oder gut findet","en": "when you find something nice or good","uk": "коли ти вважаєш щось гарним чи хорошим","ru": "когда ты считаешь что-то красивым или хорошим"},"def":{"de":"<g>Dieser</g> Park <b>gefällt</b> den Kindern besonders gut.","en":"The children particularly <b>like</b> <g>this</g> park.","uk":"<g>Цей</g> парк особливо <b>подобається</b> дітям.","ru":"<g>Этот</g> парк особенно <b>нравится</b> детям."},"gram":"demonstrativartikel"},
  {"id":"k7_011","cat":"k7","term":{"de":"der Bericht","en":"report","uk":"звіт / розповідь","ru":"отчёт / рассказ"},"short":{"de": "ein Text, der erzählt, was passiert ist","en": "a text that tells what happened","uk": "текст, який розповідає, що сталося","ru": "текст, который рассказывает, что произошло"},"def":{"de":"Sie <g><b>schrieb</b></g> nach dem Ausflug einen kurzen <b>Bericht</b> für die Klasse.","en":"After the trip, she <g><b>wrote</b></g> a short <b>report</b> for the class.","uk":"Після екскурсії вона <g><b>написала</b></g> короткий <b>звіт</b> для класу.","ru":"После поездки она <g><b>написала</b></g> короткий <b>отчёт</b> для класса."},"gram":"praeteritum"},
  {"id":"k7_012","cat":"k7","term":{"de":"dieser / diese / dieses","en":"this","uk":"цей / ця / це","ru":"этот / эта / это"},"short":{"de": "ein Wort, mit dem man auf eine bestimmte Sache zeigt","en": "a word used to point to a specific thing","uk": "слово, яким вказують на конкретну річ","ru": "слово, которым указывают на конкретную вещь"},"def":{"de":"<b>Dieser</b> Ausflug <g><b>war</b></g> für alle ein besonderes Erlebnis.","en":"<b>This</b> trip <g><b>was</b></g> a special experience for everyone.","uk":"<b>Ця</b> екскурсія <b>стала</b> для всіх особливим враженням.","ru":"<b>Эта</b> поездка <b>стала</b> для всех особым впечатлением."},"gram":"demonstrativartikel"},
  {"id":"k7_013","cat":"k7","term":{"de":"die Klassenfahrt","en":"class trip","uk":"шкільна поїздка","ru":"школьная поездка"},"short":{"de": "eine Reise, die eine ganze Schulklasse zusammen macht","en": "a trip that a whole school class takes together","uk": "поїздка, яку разом здійснює цілий шкільний клас","ru": "поездка, которую вместе совершает целый школьный класс"},"def":{"de":"Die <b>Klassenfahrt</b> nach Berlin <g><b>dauerte</b></g> drei Tage.","en":"The <b>class trip</b> to Berlin <g><b>lasted</b></g> three days.","uk":"<b>Шкільна поїздка</b> до Берліна <b>тривала</b> три дні.","ru":"<b>Школьная поездка</b> в Берлин <b>длилась</b> три дня."},"gram":"praeteritum"},
  {"id":"k7_014","cat":"k7","term":{"de":"der Betriebsausflug","en":"company outing","uk":"корпоративна поїздка","ru":"корпоративная поездка"},"short":{"de": "eine Reise, die alle Mitarbeiter einer Firma zusammen machen","en": "a trip that all employees of a company take together","uk": "поїздка, яку разом здійснюють усі співробітники фірми","ru": "поездка, которую вместе совершают все сотрудники фирмы"},"def":{"de":"Beim <b>Betriebsausflug</b> <g><b>besuchte</b></g> das Team einen kleinen See.","en":"On the <b>company outing</b>, the team <g><b>visited</b></g> a small lake.","uk":"Під час <b>корпоративної поїздки</b> команда <b>відвідала</b> маленьке озеро.","ru":"Во время <b>корпоративной поездки</b> команда <b>посетила</b> маленькое озеро."},"gram":"praeteritum"},
  {"id":"k7_015","cat":"k7","term":{"de":"planen","en":"to plan","uk":"планувати","ru":"планировать"},"short":{"de": "genau überlegen, was und wann man etwas machen möchte","en": "to think carefully about what and when you want to do something","uk": "ретельно продумувати, що і коли ти хочеш зробити","ru": "тщательно продумывать, что и когда ты хочешь сделать"},"def":{"de":"Sie <g><b>plante</b></g> den Ausflug schon zwei Wochen vorher genau.","en":"She <g><b>planned</b></g> the trip carefully two weeks in advance.","uk":"Вона ретельно <b>спланувала</b> екскурсію ще за два тижні наперед.","ru":"Она тщательно <b>спланировала</b> поездку ещё за две недели."},"gram":"praeteritum"},
  {"id":"k7_016","cat":"k7","term":{"de":"übernachten","en":"to stay overnight","uk":"ночувати","ru":"ночевать"},"short":{"de": "die Nacht an einem Ort verbringen und dort schlafen","en": "to spend the night in a place and sleep there","uk": "проводити ніч у якомусь місці і спати там","ru": "проводить ночь в каком-то месте и спать там"},"def":{"de":"Die Klasse <g><b>übernachtete</b></g> in einer kleinen Jugendherberge.","en":"The class <g><b>stayed overnight</b></g> in a small youth hostel.","uk":"Клас <b>переночував</b> у невеликому молодіжному хостелі.","ru":"Класс <b>переночевал</b> в небольшом молодёжном хостеле."},"gram":"praeteritum"},
  {"id":"k7_017","cat":"k7","term":{"de":"die Aktivität","en":"activity","uk":"активність","ru":"активность"},"short":{"de": "etwas, das man aktiv tut, z. B. Sport oder ein Spiel","en": "something you actively do, e.g. sports or a game","uk": "те, чим ти активно займаєшся, напр. спорт чи гра","ru": "то, чем ты активно занимаешься, напр. спорт или игра"},"def":{"de":"Am Nachmittag <g><b>gab</b></g> es noch eine sportliche <b>Aktivität</b> im Park.","en":"In the afternoon there <g><b>was</b></g> also a sports <b>activity</b> in the park.","uk":"Пополудні в парку ще <b>відбулася</b> спортивна <b>активність</b>.","ru":"Днём в парке ещё <b>была</b> спортивная <b>активность</b>."},"gram":"praeteritum"},
  {"id":"k7_018","cat":"k7","term":{"de":"verbringen","en":"to spend (time)","uk":"проводити (час)","ru":"проводить (время)"},"short":{"de": "eine bestimmte Zeit an einem Ort oder mit einer Aktivität sein","en": "to spend a certain time in a place or doing an activity","uk": "проводити певний час у якомусь місці чи за якимось заняттям","ru": "проводить определённое время в каком-то месте или за каким-то занятием"},"def":{"de":"Sie <g><b>verbrachten</b></g> den ganzen Tag zusammen im Park.","en":"They <g><b>spent</b></g> the whole day together in the park.","uk":"Вони <b>провели</b> цілий день разом у парку.","ru":"Они <b>провели</b> весь день вместе в парке."},"gram":"praeteritum"},
  {"id":"k8_001","cat":"k8","term":{"de":"die Hauptstadt","en":"capital city","uk":"столиця","ru":"столица"},"short":{"de": "die wichtigste Stadt eines Landes","en": "the most important city of a country","uk": "найважливіше місто країни","ru": "самый важный город страны"},"def":{"de":"Berlin liegt <g>im Osten</g> von Deutschland und ist die <b>Hauptstadt</b>.","en":"Berlin is located <g>in the east</g> of Germany and is the <b>capital</b>.","uk":"Берлін розташований <g>на сході</g> Німеччини і є <b>столицею</b>.","ru":"Берлин находится <g>на востоке</g> Германии и является <b>столицей</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_002","cat":"k8","term":{"de":"der Plan","en":"plan","uk":"план","ru":"план"},"short":{"de": "eine Idee oder ein Programm für die Zukunft","en": "an idea or programme for the future","uk": "ідея чи програма на майбутнє","ru": "идея или программа на будущее"},"def":{"de":"<g>Nach dem Frühstück</g> zeigt sie ihm ihren <b>Plan</b> für den Tag in Berlin.","en":"<g>After breakfast</g>, she shows him her <b>plan</b> for the day in Berlin.","uk":"<g>Після сніданку</g> вона показує йому свій <b>план</b> на день у Берліні.","ru":"<g>После завтрака</g> она показывает ему свой <b>план</b> на день в Берлине."},"gram":"temporale_praepositionen"},
  {"id":"k8_003","cat":"k8","term":{"de":"die Wegbeschreibung","en":"directions","uk":"опис маршруту","ru":"описание маршрута"},"short":{"de": "Informationen, wie man von einem Ort zu einem anderen kommt","en": "information about how to get from one place to another","uk": "інформація про те, як дістатися з одного місця в інше","ru": "информация о том, как добраться из одного места в другое"},"def":{"de":"<g>Vor dem Bahnhof</g> braucht sie noch eine genaue <b>Wegbeschreibung</b>.","en":"<g>In front of the station</g>, she still needs precise <b>directions</b>.","uk":"<g>Перед вокзалом</g> їй ще потрібен точний <b>опис маршруту</b>.","ru":"<g>Перед вокзалом</g> ей ещё нужно точное <b>описание маршрута</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_004","cat":"k8","term":{"de":"geradeaus","en":"straight ahead","uk":"прямо","ru":"прямо"},"short":{"de": "in eine Richtung gehen, ohne links oder rechts abzubiegen","en": "to go in one direction without turning left or right","uk": "йти в одному напрямку, не повертаючи ліворуч чи праворуч","ru": "идти в одном направлении, не поворачивая налево или направо"},"def":{"de":"Gehen Sie <b>geradeaus</b> <g>bis zur nächsten Ampel</g>, dann sehen Sie das Museum.","en":"Go <b>straight ahead</b> <g>until the next traffic light</g>, then you will see the museum.","uk":"Йдіть <b>прямо</b> <g>до наступного світлофора</g>, тоді побачите музей.","ru":"Идите <b>прямо</b> <g>до следующего светофора</g>, тогда увидите музей."},"gram":"lokale_praepositionen"},
  {"id":"k8_005","cat":"k8","term":{"de":"links","en":"left","uk":"ліворуч","ru":"налево"},"short":{"de": "die Richtung, die der rechten Seite gegenüber ist","en": "the direction opposite to the right side","uk": "напрямок, протилежний правому боку","ru": "направление, противоположное правой стороне"},"def":{"de":"<g>An der Ecke</g> biegen Sie <b>links</b> ab, dann sehen Sie den Park.","en":"<g>At the corner</g>, turn <b>left</b>, then you will see the park.","uk":"<g>На розі</g> поверніть <b>ліворуч</b>, тоді побачите парк.","ru":"<g>На углу</g> поверните <b>налево</b>, тогда увидите парк."},"gram":"lokale_praepositionen"},
  {"id":"k8_006","cat":"k8","term":{"de":"rechts","en":"right","uk":"праворуч","ru":"направо"},"short":{"de": "die Richtung, die der linken Seite gegenüber ist","en": "the direction opposite to the left side","uk": "напрямок, протилежний лівому боку","ru": "направление, противоположное левой стороне"},"def":{"de":"<g>Hinter der Kirche</g> gehen Sie <b>rechts</b>, dann kommen Sie zum Markt.","en":"<g>Behind the church</g>, go <b>right</b>, then you will get to the market.","uk":"<g>За церквою</g> поверніть <b>праворуч</b>, тоді потрапите на ринок.","ru":"<g>За церковью</g> поверните <b>направо</b>, тогда попадёте на рынок."},"gram":"lokale_praepositionen"},
  {"id":"k8_007","cat":"k8","term":{"de":"die Ecke","en":"corner","uk":"ріг (вулиці)","ru":"угол"},"short":{"de": "der Ort, an dem zwei Straßen zusammentreffen","en": "the place where two streets meet","uk": "місце, де сходяться дві вулиці","ru": "место, где сходятся две улицы"},"def":{"de":"Das Café liegt genau <g>an der Ecke</g> neben der <b>Ecke</b> zur Hauptstraße.","en":"The café is located right <g>at the corner</g> next to the street <b>corner</b>.","uk":"Кафе розташоване якраз <g>на розі</g> біля <b>рогу</b> головної вулиці.","ru":"Кафе находится прямо <g>на углу</g> возле <b>угла</b> главной улицы."},"gram":"lokale_praepositionen"},
  {"id":"k8_008","cat":"k8","term":{"de":"die Ausbildung","en":"vocational training","uk":"професійне навчання","ru":"профессиональное обучение"},"short":{"de": "ein Programm, in dem man einen Beruf lernt","en": "a programme where you learn a profession","uk": "програма, у якій навчаються професії","ru": "программа, в которой обучаются профессии"},"def":{"de":"<g>In der Nähe vom Bahnhof</g> macht sie ihre <b>Ausbildung</b> in einem Hotel.","en":"<g>Near the station</g>, she is doing her <b>training</b> at a hotel.","uk":"<g>Поблизу вокзалу</g> вона проходить <b>навчання</b> у готелі.","ru":"<g>Возле вокзала</g> она проходит <b>обучение</b> в отеле."},"gram":"lokale_praepositionen"},
  {"id":"k8_009","cat":"k8","term":{"de":"der Azubi / die Azubine","en":"trainee / apprentice","uk":"учень на виробничому навчанні","ru":"стажёр / ученик"},"short":{"de": "eine Person, die eine Ausbildung in einem Beruf macht","en": "a person who is doing training in a profession","uk": "особа, яка проходить професійне навчання","ru": "человек, который проходит профессиональное обучение"},"def":{"de":"Pina ist <b>Azubi</b> <g>in einem Hotel</g> mitten in Berlin.","en":"Pina is a <b>trainee</b> <g>at a hotel</g> in the middle of Berlin.","uk":"Піна – <b>учениця на виробничому навчанні</b> <g>у готелі</g> в самому центрі Берліна.","ru":"Пина – <b>стажёр</b> <g>в отеле</g> в самом центре Берлина."},"gram":"lokale_praepositionen"},
  {"id":"k8_010","cat":"k8","term":{"de":"der Ausbilder / die Ausbilderin","en":"trainer / instructor","uk":"наставник","ru":"наставник"},"short":{"de": "eine Person, die einem anderen einen Beruf beibringt","en": "a person who teaches someone else a profession","uk": "особа, яка навчає іншого професії","ru": "человек, который обучает другого профессии"},"def":{"de":"Ihr <b>Ausbilder</b> arbeitet <g>im ersten Stock</g> des Hotels.","en":"Her <b>trainer</b> works <g>on the first floor</g> of the hotel.","uk":"Її <b>наставник</b> працює <g>на першому поверсі</g> готелю.","ru":"Её <b>наставник</b> работает <g>на первом этаже</g> отеля."},"gram":"lokale_praepositionen"},
  {"id":"k8_011","cat":"k8","term":{"de":"die Einladung ablehnen","en":"to decline an invitation","uk":"відхиляти запрошення","ru":"отклонять приглашение"},"short":{"de": "höflich Nein sagen, wenn man zu etwas eingeladen wird","en": "to politely say no when you are invited to something","uk": "ввічливо казати «ні», коли тебе кудись запрошують","ru": "вежливо говорить «нет», когда тебя куда-то приглашают"},"def":{"de":"Sie musste <g>eine nette</g> <b>Einladung</b> zum Konzert leider <b>ablehnen</b>.","en":"Unfortunately, she had to <b>decline</b> <g>a nice</g> <b>invitation</b> to the concert.","uk":"Їй, на жаль, довелося <b>відхилити</b> <g>приємне</g> <b>запрошення</b> на концерт.","ru":"Ей, к сожалению, пришлось <b>отклонить</b> <g>приятное</g> <b>приглашение</b> на концерт."},"gram":"adjektivendungen"},
  {"id":"k8_012","cat":"k8","term":{"de":"der Fan","en":"fan","uk":"фанат","ru":"фанат"},"short":{"de": "eine Person, die etwas oder jemanden sehr mag","en": "a person who likes something or someone a lot","uk": "особа, якій дуже подобається щось чи хтось","ru": "человек, которому очень нравится что-то или кто-то"},"def":{"de":"Sie ist <g>ein großer</g> <b>Fan</b> von Berlin und seinen Museen.","en":"She is <g>a big</g> <b>fan</b> of Berlin and its museums.","uk":"Вона <g>велика</g> <b>фанатка</b> Берліна та його музеїв.","ru":"Она <g>большая</g> <b>фанатка</b> Берлина и его музеев."},"gram":"adjektivendungen"},
  {"id":"k8_013","cat":"k8","term":{"de":"das Interesse","en":"interest","uk":"інтерес","ru":"интерес"},"short":{"de": "wenn man etwas gern lernen oder wissen möchte","en": "when you want to learn or know something","uk": "коли хочеш щось дізнатися чи навчитися","ru": "когда хочешь что-то узнать или научиться"},"def":{"de":"Sie hat <g>ein großes</g> <b>Interesse</b> an der Geschichte von Berlin.","en":"She has <g>a great</g> <b>interest</b> in the history of Berlin.","uk":"У неї <g>великий</g> <b>інтерес</b> до історії Берліна.","ru":"У неё <g>большой</g> <b>интерес</b> к истории Берлина."},"gram":"adjektivendungen"},
  {"id":"k8_014","cat":"k8","term":{"de":"sich interessieren für","en":"to be interested in","uk":"цікавитися","ru":"интересоваться"},"short":{"de": "etwas gern wissen oder lernen wollen","en": "to want to know or learn something","uk": "хотіти щось дізнатися чи вивчити","ru": "хотеть что-то узнать или изучить"},"def":{"de":"Er <b>interessiert</b> sich für <g>jedes historische</g> Gebäude in der Stadt.","en":"He is <b>interested in</b> <g>every historical</g> building in the city.","uk":"Він <b>цікавиться</b> кожною <g>історичною</g> будівлею у місті.","ru":"Он <b>интересуется</b> каждым <g>историческим</g> зданием в городе."},"gram":"adjektivendungen"},
  {"id":"k8_015","cat":"k8","term":{"de":"die Stadtbesichtigung","en":"city tour","uk":"огляд міста","ru":"осмотр города"},"short":{"de": "ein Spaziergang oder eine Fahrt, um eine Stadt kennenzulernen","en": "a walk or ride to get to know a city","uk": "прогулянка чи поїздка, щоб познайомитися з містом","ru": "прогулка или поездка, чтобы познакомиться с городом"},"def":{"de":"Am ersten Tag machen sie <g>eine kurze</g> <b>Stadtbesichtigung</b> zu Fuß.","en":"On the first day, they do <g>a short</g> <b>city tour</b> on foot.","uk":"Першого дня вони роблять <g>короткий</g> <b>огляд міста</b> пішки.","ru":"В первый день они делают <g>короткий</g> <b>осмотр города</b> пешком."},"gram":"adjektivendungen"},
  {"id":"k8_016","cat":"k8","term":{"de":"der Weg","en":"way / path","uk":"шлях","ru":"путь"},"short":{"de": "die Strecke, die man geht oder fährt, um irgendwohin zu kommen","en": "the route you walk or drive to get somewhere","uk": "маршрут, яким ти йдеш чи їдеш, щоб кудись дістатися","ru": "маршрут, которым ты идёшь или едешь, чтобы куда-то добраться"},"def":{"de":"Sie fragt nach <g>dem kürzesten</g> <b>Weg</b> zum Brandenburger Tor.","en":"She asks for <g>the shortest</g> <b>way</b> to the Brandenburg Gate.","uk":"Вона питає про <g>найкоротший</g> <b>шлях</b> до Бранденбурзьких воріт.","ru":"Она спрашивает о <g>кратчайшем</g> <b>пути</b> к Бранденбургским воротам."},"gram":"superlativ"},
  {"id":"k8_017","cat":"k8","term":{"de":"die Demonstration","en":"demonstration","uk":"демонстрація","ru":"демонстрация"},"short":{"de": "wenn viele Menschen zusammen auf der Straße für oder gegen etwas protestieren","en": "when many people gather in the street to protest for or against something","uk": "коли багато людей разом на вулиці протестують за чи проти чогось","ru": "когда много людей вместе на улице протестуют за или против чего-то"},"def":{"de":"Heute findet in der Stadt <g>eine große</g> <b>Demonstration</b> statt.","en":"Today <g>a big</g> <b>demonstration</b> is taking place in the city.","uk":"Сьогодні у місті відбувається <g>велика</g> <b>демонстрація</b>.","ru":"Сегодня в городе проходит <g>большая</g> <b>демонстрация</b>."},"gram":"adjektivendungen"},
  {"id":"k9_001","cat":"k9","term":{"de":"der Stundenplan","en":"timetable","uk":"розклад уроків","ru":"расписание уроков"},"short":{"de": "ein Plan, der zeigt, wann man welches Fach hat","en": "a plan that shows when you have which subject","uk": "план, який показує, коли в тебе який предмет","ru": "план, который показывает, когда у тебя какой предмет"},"def":{"de":"Jonas <g>hat</g> seinen neuen <b>Stundenplan</b> schon <g><b>bekommen</b></g>.","en":"Jonas <g>has</g> already <g><b>received</b></g> his new <b>timetable</b>.","uk":"Йонас вже <b>отримав</b> свій новий <b>розклад уроків</b>.","ru":"Йонас уже <b>получил</b> своё новое <b>расписание уроков</b>."},"gram":"perfekt"},
  {"id":"k9_002","cat":"k9","term":{"de":"das Schulfach","en":"school subject","uk":"шкільний предмет","ru":"школьный предмет"},"short":{"de": "ein Thema, das man in der Schule lernt, zum Beispiel Mathematik","en": "a subject you learn at school, for example mathematics","uk": "тема, яку вивчають у школі, наприклад математика","ru": "предмет, который изучают в школе, например математика"},"def":{"de":"Mathe <g><b>war</b></g> in der Schule immer ihr liebstes <b>Schulfach</b>.","en":"Maths <g><b>was</b></g> always her favourite <b>subject</b> at school.","uk":"Математика завжди була її улюбленим шкільним <b>предметом</b>.","ru":"Математика всегда была её любимым школьным <b>предметом</b>."},"gram":"praeteritum"},
  {"id":"k9_003","cat":"k9","term":{"de":"die Hausaufgabe","en":"homework","uk":"домашнє завдання","ru":"домашнее задание"},"short":{"de": "eine Aufgabe, die man zu Hause für die Schule macht","en": "a task that you do at home for school","uk": "завдання, яке виконують удома для школи","ru": "задание, которое выполняют дома для школы"},"def":{"de":"Jonas <g>hat</g> seine <b>Hausaufgaben</b> noch nicht <g><b>gemacht</b></g>.","en":"Jonas <g>has</g>n't <g><b>done</b></g> his <b>homework</b> yet.","uk":"Йонас ще не <b>зробив</b> свої <b>домашні завдання</b>.","ru":"Йонас ещё не <b>сделал</b> свою <b>домашнюю работу</b>."},"gram":"perfekt"},
  {"id":"k9_004","cat":"k9","term":{"de":"die Klassenarbeit","en":"class test","uk":"контрольна робота","ru":"контрольная работа"},"short":{"de": "ein wichtiger Test in der Schule, meistens schriftlich","en": "an important test at school, usually written","uk": "важлива контрольна робота в школі, зазвичай письмова","ru": "важная контрольная работа в школе, обычно письменная"},"def":{"de":"Letzte Woche <g><b>schrieb</b></g> die Klasse eine schwierige <b>Klassenarbeit</b>.","en":"Last week the class <g><b>wrote</b></g> a difficult <b>class test</b>.","uk":"Минулого тижня клас писав складну <b>контрольну роботу</b>.","ru":"На прошлой неделе класс писал сложную <b>контрольную работу</b>."},"gram":"praeteritum"},
  {"id":"k9_005","cat":"k9","term":{"de":"die Nachmittagsbetreuung","en":"afternoon childcare","uk":"групa подовженого дня","ru":"группа продлённого дня"},"short":{"de": "ein Ort, wo Kinder nach der Schule betreut werden, bis die Eltern Zeit haben","en": "a place where children are looked after after school until their parents have time","uk": "місце, де дітей доглядають після школи, доки батьки не звільняться","ru": "место, где за детьми присматривают после школы, пока родители не освободятся"},"def":{"de":"Die Familie <g>hat</g> einen Platz in der <b>Nachmittagsbetreuung</b> <g><b>gefunden</b></g>.","en":"The family <g>has</g> <g><b>found</b></g> a place in <b>afternoon childcare</b>.","uk":"Родина <b>знайшла</b> місце в <b>групі подовженого дня</b>.","ru":"Семья <b>нашла</b> место в <b>группе продлённого дня</b>."},"gram":"perfekt"},
  {"id":"k9_006","cat":"k9","term":{"de":"der Kindergarten","en":"kindergarten","uk":"дитячий садок","ru":"детский сад"},"short":{"de": "ein Ort für kleine Kinder vor der Schulzeit","en": "a place for small children before school age","uk": "заклад для маленьких дітей до школи","ru": "заведение для маленьких детей до школы"},"def":{"de":"Mein Sohn <g><b>ging</b></g> drei Jahre lang in den <b>Kindergarten</b>.","en":"My son <g><b>went</b></g> to <b>kindergarten</b> for three years.","uk":"Мій син три роки ходив до <b>дитячого садка</b>.","ru":"Мой сын три года ходил в <b>детский сад</b>."},"gram":"praeteritum"},
  {"id":"k9_007","cat":"k9","term":{"de":"die Vorschule","en":"preschool","uk":"підготовча школа","ru":"подготовительная школа"},"short":{"de": "eine Klasse oder Gruppe direkt vor der ersten Klasse","en": "a class or group directly before first grade","uk": "клас або група безпосередньо перед першим класом","ru": "класс или группа непосредственно перед первым классом"},"def":{"de":"Meine Tochter <g>hat</g> letztes Jahr die <b>Vorschule</b> <g><b>besucht</b></g>.","en":"My daughter <g>has</g> <g><b>attended</b></g> <b>preschool</b> last year.","uk":"Моя донька торік відвідувала <b>підготовчу школу</b>.","ru":"Моя дочь в прошлом году посещала <b>подготовительную школу</b>."},"gram":"perfekt"},
  {"id":"k9_008","cat":"k9","term":{"de":"sich interessieren für","en":"to be interested in","uk":"цікавитися чимось","ru":"интересоваться чем-то"},"short":{"de": "etwas mögen und mehr darüber wissen wollen","en": "to like something and want to know more about it","uk": "цікавитися чимось і хотіти дізнатися більше","ru": "интересоваться чем-то и хотеть узнать больше"},"def":{"de":"Jonas <g><b>interessiert sich für</b></g> Naturwissenschaften.","en":"Jonas <g><b>is interested in</b></g> natural sciences.","uk":"Йонас <b>цікавиться</b> природничими науками.","ru":"Йонас <b>интересуется</b> естественными науками."},"gram":"praepositionalverben"},
  {"id":"k9_009","cat":"k9","term":{"de":"sich ärgern über","en":"to be annoyed about","uk":"дратуватися через щось","ru":"раздражаться из-за чего-то"},"short":{"de": "wütend oder unzufrieden sein wegen etwas","en": "to be angry or unhappy because of something","uk": "бути злим або незадоволеним через щось","ru": "быть злым или недовольным из-за чего-то"},"def":{"de":"Herr Klinke <g><b>ärgert sich über</b></g> den Lärm in der Klasse.","en":"Mr Klinke <g><b>is annoyed about</b></g> the noise in the classroom.","uk":"Пан Клінке <b>дратується через</b> шум у класі.","ru":"Господин Клинке <b>раздражается из-за</b> шума в классе."},"gram":"praepositionalverben"},
  {"id":"k9_010","cat":"k9","term":{"de":"denken an","en":"to think of","uk":"думати про","ru":"думать о"},"short":{"de": "an eine Person oder Sache im Kopf denken","en": "to have a person or thing in mind","uk": "мати когось або щось у думках","ru": "держать кого-то или что-то в мыслях"},"def":{"de":"Cem <g><b>denkt</b></g> oft <g><b>an</b></g> seine Schulzeit in der Türkei.","en":"Cem often <g><b>thinks of</b></g> his school days in Turkey.","uk":"Джем часто <b>думає про</b> свої шкільні роки в Туреччині.","ru":"Джем часто <b>думает о</b> своих школьных годах в Турции."},"gram":"praepositionalverben"},
  {"id":"k9_011","cat":"k9","term":{"de":"sich freuen auf","en":"to look forward to","uk":"з нетерпінням чекати на","ru":"с нетерпением ждать"},"short":{"de": "positive Gefühle haben, weil bald etwas Schönes passiert","en": "to feel happy because something nice will happen soon","uk": "відчувати радісне очікування, бо скоро станеться щось приємне","ru": "испытывать радостное ожидание, потому что скоро произойдёт что-то приятное"},"def":{"de":"Die Kinder <g><b>freuen sich auf</b></g> die Sommerferien.","en":"The children <g><b>are looking forward to</b></g> the summer holidays.","uk":"Діти <b>з нетерпінням чекають на</b> літні канікули.","ru":"Дети <b>с нетерпением ждут</b> летних каникул."},"gram":"praepositionalverben"},
  {"id":"k9_012","cat":"k9","term":{"de":"der Elternsprechtag","en":"parent-teacher conference","uk":"батьківські збори","ru":"родительское собрание"},"short":{"de": "ein Tag, an dem Eltern mit den Lehrern über ihr Kind sprechen","en": "a day when parents talk to teachers about their child","uk": "день, коли батьки говорять з учителями про свою дитину","ru": "день, когда родители говорят с учителями о своём ребёнке"},"def":{"de":"Frau Wachter <g><b>hat sich</b></g> gut auf den <b>Elternsprechtag</b> <g>vorbereitet</g>.","en":"Mrs Wachter <g><b>has prepared herself</b></g> well for the <b>parent-teacher conference</b>.","uk":"Пані Вахтер добре <b>підготувалася</b> до <b>батьківських зборів</b>.","ru":"Госпожа Вахтер хорошо <b>подготовилась</b> к <b>родительскому собранию</b>."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"k9_013","cat":"k9","term":{"de":"streng","en":"strict","uk":"суворий","ru":"строгий"},"short":{"de": "sehr genau und ohne viele Ausnahmen, wenn es um Regeln geht","en": "very strict and without many exceptions when it comes to rules","uk": "дуже суворий, без винятків щодо правил","ru": "очень строгий, без исключений в отношении правил"},"def":{"de":"Der neue Lehrer ist sehr <b>streng</b>, aber fair.","en":"The new teacher is very <b>strict</b>, but fair.","uk":"Новий учитель дуже <b>суворий</b>, але справедливий.","ru":"Новый учитель очень <b>строгий</b>, но справедливый."},"gram":""},
  {"id":"k9_014","cat":"k9","term":{"de":"der Lärm","en":"noise","uk":"шум","ru":"шум"},"short":{"de": "laute, störende Geräusche","en": "loud, disturbing sounds","uk": "гучні, набридливі звуки","ru": "громкие, мешающие звуки"},"def":{"de":"In der Pause ist der <b>Lärm</b> auf dem Schulhof oft sehr groß.","en":"During the break, the <b>noise</b> in the schoolyard is often very loud.","uk":"На перерві <b>шум</b> у шкільному дворі часто дуже сильний.","ru":"На перемене <b>шум</b> на школьном дворе часто очень сильный."},"gram":""},
  {"id":"k9_015","cat":"k9","term":{"de":"der Schulabschluss","en":"school-leaving qualification","uk":"шкільний атестат","ru":"школьный аттестат"},"short":{"de": "das Ende der Schulzeit mit einem offiziellen Zeugnis","en": "the end of school with an official certificate","uk": "завершення навчання в школі з офіційним атестатом","ru": "завершение обучения в школе с официальным аттестатом"},"def":{"de":"Für einen guten <b>Schulabschluss</b> muss man fleißig lernen.","en":"For a good <b>school-leaving qualification</b>, you have to study hard.","uk":"Для гарного <b>шкільного атестата</b> треба старанно навчатися.","ru":"Для хорошего <b>школьного аттестата</b> нужно усердно учиться."},"gram":""},
  {"id":"k9_016","cat":"k9","term":{"de":"die Note","en":"grade / mark","uk":"оцінка","ru":"оценка"},"short":{"de": "eine Zahl oder ein Wort, mit dem eine Leistung in der Schule bewertet wird","en": "a number or word used to evaluate performance at school","uk": "число або слово, яким оцінюють успішність у школі","ru": "число или слово, которым оценивают успеваемость в школе"},"def":{"de":"Saida <g><b>interessiert sich</b></g> sehr <g>für</g> ihre <b>Noten</b> in Mathe.","en":"Saida <g><b>is</b></g> very <g><b>interested in</b></g> her <b>grades</b> in maths.","uk":"Саїда дуже <b>цікавиться</b> своїми <b>оцінками</b> з математики.","ru":"Саида очень <b>интересуется</b> своими <b>оценками</b> по математике."},"gram":"praepositionalverben"},
  {"id":"k9_017","cat":"k9","term":{"de":"die Pause","en":"break","uk":"перерва","ru":"перемена"},"short":{"de": "eine kurze Zeit ohne Unterricht zwischen zwei Schulstunden","en": "a short break without lessons between two school periods","uk": "коротка перерва без уроків між двома заняттями","ru": "короткий перерыв без уроков между двумя занятиями"},"def":{"de":"In der <b>Pause</b> spielen die Kinder auf dem Schulhof.","en":"During the <b>break</b>, the children play in the schoolyard.","uk":"На <b>перерві</b> діти граються у шкільному дворі.","ru":"На <b>перемене</b> дети играют на школьном дворе."},"gram":""},
  {"id":"k9_018","cat":"k9","term":{"de":"der Schüler / die Schülerin","en":"pupil","uk":"учень / учениця","ru":"ученик / ученица"},"short":{"de": "ein Kind oder ein Jugendlicher, der in die Schule geht","en": "a child or young person who goes to school","uk": "дитина або підліток, який ходить до школи","ru": "ребёнок или подросток, который ходит в школу"},"def":{"de":"Jeder <b>Schüler</b> bekommt am Ende des Jahres ein Zeugnis.","en":"Every <b>pupil</b> gets a report card at the end of the year.","uk":"Кожен <b>учень</b> отримує табель наприкінці року.","ru":"Каждый <b>ученик</b> получает табель в конце года."},"gram":""},
  {"id":"k9_019","cat":"k9","term":{"de":"die Erfahrung","en":"experience","uk":"досвід","ru":"опыт"},"short":{"de": "etwas, das man selbst erlebt und daraus gelernt hat","en": "something you have personally experienced and learned from","uk": "те, що людина сама пережила і з чого зробила висновки","ru": "то, что человек сам пережил и из чего сделал выводы"},"def":{"de":"Katja <g><b>erinnert sich</b></g> gern an ihre guten <b>Erfahrungen</b> in der Schule.","en":"Katja fondly remembers her good <b>experiences</b> at school.","uk":"Катя із задоволенням згадує свій хороший <b>досвід</b> у школі.","ru":"Катя с удовольствием вспоминает свой хороший <b>опыт</b> в школе."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"k9_020","cat":"k9","term":{"de":"sich fühlen","en":"to feel","uk":"почуватися","ru":"чувствовать себя"},"short":{"de": "einen bestimmten körperlichen oder emotionalen Zustand spüren","en": "to sense a certain physical or emotional state","uk": "відчувати певний фізичний або емоційний стан","ru": "ощущать определённое физическое или эмоциональное состояние"},"def":{"de":"In der neuen Klasse <g><b>fühlt</b></g> Saida <g><b>sich</b></g> schon sehr wohl.","en":"In her new class, Saida already <b>feels</b> very comfortable.","uk":"У новому класі Саїда вже добре <b>почувається</b>.","ru":"В новом классе Саида уже хорошо <b>чувствует себя</b>."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"k9_021","cat":"k9","term":{"de":"der Lehrer / die Lehrerin","en":"teacher","uk":"вчитель / вчителька","ru":"учитель / учительница"},"short":{"de": "eine Person, die in der Schule unterrichtet","en": "a person who teaches at school","uk": "особа, яка викладає в школі","ru": "человек, который преподаёт в школе"},"def":{"de":"Jonas <g><b>spricht</b></g> gern <g>mit</g> seinem <b>Lehrer</b> über Bücher.","en":"Jonas likes <g><b>talking to</b></g> his <b>teacher</b> about books.","uk":"Йонас любить <b>розмовляти зі</b> своїм <b>учителем</b> про книжки.","ru":"Йонас любит <b>разговаривать со</b> своим <b>учителем</b> о книгах."},"gram":"praepositionalverben"},
  {"id":"k10_001","cat":"k10","term":{"de":"der Streit","en":"argument, quarrel","uk":"сварка","ru":"ссора"},"short":{"de": "ein Konflikt, bei dem Menschen laut oder unfreundlich miteinander sprechen","en": "a conflict in which people speak loudly or unfriendly to each other","uk": "конфлікт, під час якого люди голосно або неввічливо розмовляють одне з одним","ru": "конфликт, во время которого люди громко или недружелюбно разговаривают друг с другом"},"def":{"de":"Der <b>Streit</b> zwischen den Nachbarn dauert schon Tage, <g>deshalb</g> ruft Frau Wachter die Hausverwaltung an.","en":"The <b>dispute</b> between the neighbours has been going on for days, <g>that's why</g> Mrs Wachter calls the property management.","uk":"<b>Сварка</b> між сусідами триває вже кілька днів, <g>тому</g> пані Вахтер телефонує до управління будинком.","ru":"<b>Ссора</b> между соседями длится уже несколько дней, <g>поэтому</g> госпожа Вахтер звонит в управляющую компанию."},"gram":"satz_mit_deshalb"},
  {"id":"k10_002","cat":"k10","term":{"de":"sich streiten","en":"to argue, to quarrel","uk":"сваритися","ru":"ссориться"},"short":{"de": "laut oder unfreundlich über etwas diskutieren, oft aus Ärger","en": "to discuss something loudly or unpleasantly, often out of anger","uk": "голосно чи неприязно сперечатися про щось, часто через роздратування","ru": "громко или неприязненно спорить о чём-то, часто из-за раздражения"},"def":{"de":"Minka und ihr Nachbar <b>streiten sich</b> oft, <g>deshalb</g> ist die Stimmung im Haus schlecht.","en":"Minka and her neighbour often argue, <g>that's why</g> the mood in the building is bad.","uk":"Мінка та її сусід часто сваряться, <g>тому</g> атмосфера в будинку погана.","ru":"Минка и её сосед часто ссорятся, <g>поэтому</g> атмосфера в доме плохая."},"gram":"satz_mit_deshalb"},
  {"id":"k10_003","cat":"k10","term":{"de":"der Konflikt","en":"conflict","uk":"конфлікт","ru":"конфликт"},"short":{"de": "ein Streit oder eine Meinungsverschiedenheit zwischen Menschen","en": "a dispute or disagreement between people","uk": "сварка або розбіжність у поглядах між людьми","ru": "ссора или разногласие между людьми"},"def":{"de":"Der <b>Konflikt</b> im Team wurde immer größer, <g>deshalb</g> hat die Chefin ein Gespräch organisiert.","en":"The <b>conflict</b> in the team kept growing, <g>that's why</g> the boss organised a meeting.","uk":"<b>Конфлікт</b> у команді ставав дедалі більшим, <g>тому</g> керівниця організувала розмову.","ru":"<b>Конфликт</b> в команде становился всё сильнее, <g>поэтому</g> начальница организовала разговор."},"gram":"satz_mit_deshalb"},
  {"id":"k10_004","cat":"k10","term":{"de":"vermitteln","en":"to mediate","uk":"посередничати","ru":"посредничать"},"short":{"de": "zwischen zwei Personen im Streit helfen, eine Lösung zu finden","en": "to help two people in a dispute find a solution","uk": "допомагати двом сторонам конфлікту знайти рішення","ru": "помогать двум сторонам конфликта найти решение"},"def":{"de":"Die Kollegin konnte im Streit gut <b>vermitteln</b>, <g>deshalb</g> haben sich beide schnell versöhnt.","en":"The colleague was able to <b>mediate</b> well in the dispute, <g>that's why</g> both of them made up quickly.","uk":"Колежанка добре вміла <b>посередничати</b> в суперечці, <g>тому</g> обидва швидко помирилися.","ru":"Коллега хорошо умела <b>посредничать</b> в споре, <g>поэтому</g> оба быстро помирились."},"gram":"satz_mit_deshalb"},
  {"id":"k10_005","cat":"k10","term":{"de":"die Stimmung","en":"mood, atmosphere","uk":"настрій","ru":"настроение"},"short":{"de": "wie sich Menschen in einer Gruppe gerade fühlen — gut oder schlecht","en": "how people in a group feel at the moment — good or bad","uk": "як почуваються люди в групі зараз — добре чи погано","ru": "как люди в группе чувствуют себя сейчас — хорошо или плохо"},"def":{"de":"Nach dem Streit war die <b>Stimmung</b> im Büro sehr schlecht, <g>deshalb</g> hat niemand viel geredet.","en":"After the argument, the <b>mood</b> in the office was very bad, <g>that's why</g> nobody talked much.","uk":"Після сварки <b>атмосфера</b> в офісі була дуже поганою, <g>тому</g> ніхто багато не розмовляв.","ru":"После ссоры <b>атмосфера</b> в офисе была очень плохой, <g>поэтому</g> никто много не разговаривал."},"gram":"satz_mit_deshalb"},
  {"id":"k10_006","cat":"k10","term":{"de":"der Ärger","en":"annoyance, trouble","uk":"роздратування","ru":"раздражение"},"short":{"de": "ein Gefühl von Wut oder Unzufriedenheit","en": "a feeling of anger or dissatisfaction","uk": "почуття гніву або невдоволення","ru": "чувство гнева или недовольства"},"def":{"de":"Sein <b>Ärger</b> über die Verspätung war groß, <g>deshalb</g> hat er sich beschwert.","en":"His <b>anger</b> about the delay was great, <g>that's why</g> he complained.","uk":"Його <b>роздратування</b> через запізнення було сильним, <g>тому</g> він поскаржився.","ru":"Его <b>раздражение</b> из-за опоздания было сильным, <g>поэтому</g> он пожаловался."},"gram":"satz_mit_deshalb"},
  {"id":"k10_007","cat":"k10","term":{"de":"bitten um","en":"to ask for","uk":"просити щось","ru":"просить что-то"},"short":{"de": "freundlich sagen, dass man etwas möchte oder braucht","en": "to kindly say that you want or need something","uk": "ввічливо сказати, що хочеш або потребуєш чогось","ru": "вежливо сказать, что хочешь или нуждаешься в чём-то"},"def":{"de":"<g><b>Könnten</b></g> Sie mir helfen? Ich <b>bitte</b> Sie <b>um</b> einen kleinen Gefallen.","en":"<g><b>Could</b></g> you help me? I am <b>asking</b> you <b>for</b> a small favour.","uk":"Ви не могли б мені допомогти? Я <b>прошу</b> вас <b>про</b> невелику послугу.","ru":"Не могли бы вы мне помочь? Я <b>прошу</b> вас <b>об</b> одном небольшом одолжении."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_008","cat":"k10","term":{"de":"der Gefallen","en":"favour","uk":"послуга","ru":"услуга (одолжение)"},"short":{"de": "eine kleine Hilfe, die man für jemanden macht","en": "a small favour that you do for someone","uk": "невелика допомога, яку робиш для когось","ru": "небольшая помощь, которую оказываешь кому-то"},"def":{"de":"<g><b>Könntest</b></g> du mir einen <b>Gefallen</b> tun und die Kinder abholen?","en":"<g><b>Could</b></g> you do me a <b>favour</b> and pick up the children?","uk":"Чи не міг би ти зробити мені <b>послугу</b> і забрати дітей?","ru":"Не мог бы ты оказать мне <b>услугу</b> и забрать детей?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_009","cat":"k10","term":{"de":"sich entschuldigen","en":"to apologise","uk":"вибачатися","ru":"извиняться"},"short":{"de": "Sagen, dass es einem leidtut, wenn man einen Fehler gemacht hat","en": "to say sorry when you have made a mistake","uk": "сказати, що шкодуєш, коли зробив помилку","ru": "сказать, что сожалеешь, когда совершил ошибку"},"def":{"de":"Er <g><b>würde</b></g> sich gern bei ihr <b>entschuldigen</b>, findet aber nicht die richtigen Worte.","en":"He <g><b>would</b></g> like to <b>apologise</b> to her, but can't find the right words.","uk":"Він <b>хотів би</b> перед нею <b>вибачитися</b>, але не знаходить правильних слів.","ru":"Он <b>хотел бы</b> перед ней <b>извиниться</b>, но не находит правильных слов."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_010","cat":"k10","term":{"de":"die Entschuldigung","en":"apology, excuse","uk":"вибачення","ru":"извинение"},"short":{"de": "Worte, mit denen man sagt, dass einem etwas leidtut","en": "words used to say that you are sorry about something","uk": "слова, якими висловлюють жаль за щось","ru": "слова, которыми выражают сожаление о чём-то"},"def":{"de":"Eine ehrliche <b>Entschuldigung</b> <g><b>würde</b></g> die Situation viel leichter machen.","en":"An honest <b>apology</b> <g><b>would</b></g> make the situation much easier.","uk":"Щире <b>вибачення</b> значно <g>полегшило б</g> ситуацію.","ru":"Честное <b>извинение</b> значительно <g>облегчило бы</g> ситуацию."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_011","cat":"k10","term":{"de":"höflich","en":"polite","uk":"ввічливий","ru":"вежливый"},"short":{"de": "freundlich und mit guten Manieren","en": "friendly and with good manners","uk": "приязний і з гарними манерами","ru": "дружелюбный и с хорошими манерами"},"def":{"de":"<g><b>Könnten</b></g> Sie das bitte <b>höflich</b>er formulieren?","en":"<g><b>Could</b></g> you please phrase that more <b>politely</b>?","uk":"Чи не могли б ви сформулювати це <b>ввічливіше</b>?","ru":"Не могли бы вы сформулировать это <b>вежливее</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_012","cat":"k10","term":{"de":"Rücksicht nehmen auf","en":"to be considerate of","uk":"зважати на когось","ru":"считаться с кем-то"},"short":{"de": "an die Gefühle oder Bedürfnisse von anderen denken","en": "to think of the feelings or needs of others","uk": "зважати на почуття або потреби інших","ru": "учитывать чувства или потребности других"},"def":{"de":"<g><b>Könntest</b></g> du bitte mehr <b>Rücksicht</b> <g>auf</g> deine Nachbarn <b>nehmen</b>?","en":"<g><b>Could</b></g> you please <b>be</b> more <b>considerate of</b> your neighbours?","uk":"Чи не міг би ти більше <b>зважати на</b> своїх сусідів?","ru":"Не мог бы ты больше <b>считаться со</b> своими соседями?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_013","cat":"k10","term":{"de":"die Zusammenarbeit","en":"cooperation","uk":"співпраця","ru":"сотрудничество"},"short":{"de": "wenn Menschen gemeinsam an einer Aufgabe arbeiten","en": "when people work together on a task","uk": "коли люди разом працюють над завданням","ru": "когда люди вместе работают над задачей"},"def":{"de":"Gute <b>Zusammenarbeit</b> braucht Vertrauen und offene Kommunikation.","en":"Good <b>cooperation</b> requires trust and open communication.","uk":"Хороша <b>співпраця</b> потребує довіри та відкритого спілкування.","ru":"Хорошее <b>сотрудничество</b> требует доверия и открытого общения."},"gram":""},
  {"id":"k10_014","cat":"k10","term":{"de":"zusammenarbeiten","en":"to cooperate","uk":"співпрацювати","ru":"сотрудничать"},"short":{"de": "gemeinsam mit anderen an etwas arbeiten","en": "to work together with others on something","uk": "разом з іншими працювати над чимось","ru": "вместе с другими работать над чем-то"},"def":{"de":"<g><b>Könnten</b></g> wir bei diesem Projekt enger <b>zusammenarbeiten</b>?","en":"<g><b>Could</b></g> we <b>work together</b> more closely on this project?","uk":"Чи не могли б ми тісніше <b>співпрацювати</b> над цим проєктом?","ru":"Не могли бы мы теснее <b>сотрудничать</b> над этим проектом?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_015","cat":"k10","term":{"de":"die Kritik","en":"criticism","uk":"критика","ru":"критика"},"short":{"de": "eine Meinung darüber, was an etwas nicht gut ist","en": "an opinion about what is not good about something","uk": "думка про те, що в чомусь не так","ru": "мнение о том, что в чём-то не так"},"def":{"de":"Er nimmt <b>Kritik</b> von seinen Kollegen meistens gut an.","en":"He usually takes <b>criticism</b> from his colleagues well.","uk":"Він зазвичай добре сприймає <b>критику</b> від колег.","ru":"Он обычно хорошо воспринимает <b>критику</b> от коллег."},"gram":""},
  {"id":"k10_016","cat":"k10","term":{"de":"reagieren auf","en":"to react to","uk":"реагувати на","ru":"реагировать на"},"short":{"de": "etwas als Antwort auf eine Handlung oder Situation tun oder sagen","en": "to do or say something in response to an action or situation","uk": "робити або казати щось у відповідь на дію чи ситуацію","ru": "делать или говорить что-то в ответ на действие или ситуацию"},"def":{"de":"<g><b>Könntest</b></g> du ruhiger <g>auf</g> seine Kritik <b>reagieren</b>?","en":"<g><b>Could</b></g> you <b>react</b> more calmly <b>to</b> his criticism?","uk":"Чи не міг би ти спокійніше <b>реагувати на</b> його критику?","ru":"Не мог бы ты спокойнее <b>реагировать на</b> его критику?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_017","cat":"k10","term":{"de":"das Missverständnis","en":"misunderstanding","uk":"непорозуміння","ru":"недоразумение"},"short":{"de": "wenn man etwas falsch versteht","en": "when you understand something incorrectly","uk": "коли щось розуміють неправильно","ru": "когда что-то понимают неправильно"},"def":{"de":"Das war nur ein <b>Missverständnis</b> — niemand wollte dich ärgern.","en":"It was just a <b>misunderstanding</b> — nobody wanted to annoy you.","uk":"Це було просто <b>непорозуміння</b> — ніхто не хотів тебе дратувати.","ru":"Это было просто <b>недоразумение</b> — никто не хотел тебя раздражать."},"gram":""},
  {"id":"k10_018","cat":"k10","term":{"de":"das Verständnis","en":"understanding","uk":"розуміння","ru":"понимание"},"short":{"de": "wenn man die Situation oder die Gefühle von jemandem versteht","en": "when you understand someone's situation or feelings","uk": "коли розумієш ситуацію чи почуття когось","ru": "когда понимаешь ситуацию или чувства кого-то"},"def":{"de":"<g><b>Hättest</b></g> du <b>Verständnis</b> für meine Situation?","en":"<g><b>Would</b></g> you <b>have understanding</b> for my situation?","uk":"Чи виявив би ти <b>розуміння</b> до моєї ситуації?","ru":"Проявил бы ты <b>понимание</b> к моей ситуации?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_019","cat":"k10","term":{"de":"die Verschiedenheit","en":"diversity, difference","uk":"несхожість, відмінність","ru":"непохожесть, различие"},"short":{"de": "wenn Menschen oder Dinge nicht gleich, sondern unterschiedlich sind","en": "when people or things are not the same, but different","uk": "коли люди чи речі не однакові, а різні","ru": "когда люди или вещи не одинаковые, а разные"},"def":{"de":"Im Team ist die <b>Verschiedenheit</b> der Meinungen oft eine Stärke.","en":"In the team, the <b>diversity</b> of opinions is often a strength.","uk":"У команді <b>несхожість</b> думок часто є перевагою.","ru":"В команде <b>различие</b> мнений часто является преимуществом."},"gram":""},
  {"id":"k10_020","cat":"k10","term":{"de":"sich einigen","en":"to agree, to reach an agreement","uk":"домовлятися","ru":"договариваться"},"short":{"de": "nach einer Diskussion zu einer gemeinsamen Lösung kommen","en": "to reach a common solution after a discussion","uk": "після обговорення дійти до спільного рішення","ru": "после обсуждения прийти к общему решению"},"def":{"de":"<g><b>Könntet</b></g> ihr euch bitte schnell <b>einigen</b>? Die Zeit ist knapp.","en":"<g><b>Could</b></g> you please <b>agree</b> quickly? Time is short.","uk":"Чи не могли б ви швидко <b>домовитися</b>? Часу обмаль.","ru":"Не могли бы вы быстро <b>договориться</b>? Времени мало."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k11_001","cat":"k11","term":{"de":"die Mediennutzung","en":"media use","uk":"використання медіа","ru":"использование медиа"},"short":{"de": "wie und wie oft man Handy, Computer, Fernsehen usw. benutzt","en": "how and how often you use phone, computer, TV etc","uk": "як і як часто користуєшся телефоном, компʼютером, телевізором тощо","ru": "как и как часто пользуешься телефоном, компьютером, телевизором и т.д"},"def":{"de":"<g>Die</g> <g><b>tägliche</b></g> <b>Mediennutzung</b> der Jugendlichen ist ein wichtiges Thema.","en":"<g>The</g> <g><b>daily</b></g> <b>media use</b> of young people is an important topic.","uk":"<b>Щоденне</b> використання <b>медіа</b> підлітками — важлива тема.","ru":"<b>Ежедневное</b> использование <b>медиа</b> подростками — важная тема."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_002","cat":"k11","term":{"de":"das Gerät","en":"device","uk":"пристрій","ru":"устройство"},"short":{"de": "eine Maschine, meistens elektronisch, zum Beispiel ein Handy oder ein Drucker","en": "a machine, usually electronic, for example a phone or a printer","uk": "прилад, зазвичай електронний, наприклад телефон або принтер","ru": "прибор, обычно электронный, например телефон или принтер"},"def":{"de":"<g>Das</g> <g><b>neue</b></g> <b>Gerät</b> von Frau Petrova funktioniert einwandfrei.","en":"<g>The</g> <g><b>new</b></g> <b>device</b> of Mrs Petrova works perfectly.","uk":"<b>Новий</b> прилад пані Петрової працює бездоганно.","ru":"<b>Новый</b> прибор госпожи Петровой работает безупречно."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_003","cat":"k11","term":{"de":"nützlich","en":"useful","uk":"корисний","ru":"полезный"},"short":{"de": "so, dass man es gut gebrauchen kann; hilfreich","en": "so that you can use it well; helpful","uk": "таким, що можна добре застосувати; корисний","ru": "таким, что можно хорошо применить; полезный"},"def":{"de":"<g>Die</g> <g><b>nützliche</b></g> App hilft beim Deutschlernen.","en":"<g>The</g> <g><b>useful</b></g> app helps with learning German.","uk":"<b>Корисний</b> застосунок допомагає у вивченні німецької.","ru":"<b>Полезное</b> приложение помогает в изучении немецкого."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_004","cat":"k11","term":{"de":"die Abkürzung","en":"abbreviation","uk":"скорочення","ru":"сокращение"},"short":{"de": "ein kurz geschriebenes Wort, das für ein längeres Wort steht, z. B. „usw.“","en": "a short written word that stands for a longer word, e.g. „etc.“","uk": "скорочене слово, яке позначає довше слово, напр. „і т. д.“","ru": "сокращённое слово, которое обозначает более длинное слово, напр. „и т. д.“"},"def":{"de":"<g>Die</g> <g><b>bekannte</b></g> <b>Abkürzung</b> „WLAN“ kennt fast jeder.","en":"Almost everyone knows <g>the</g> <g><b>well-known</b></g> <b>abbreviation</b> „WLAN“.","uk":"<b>Відоме</b> скорочення „WLAN“ знає майже кожен.","ru":"<b>Известное</b> сокращение „WLAN“ знает почти каждый."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_005","cat":"k11","term":{"de":"das Fremdwort","en":"foreign word, loanword","uk":"запозичене слово","ru":"заимствованное слово"},"short":{"de": "ein Wort aus einer anderen Sprache, das man auch auf Deutsch benutzt","en": "a word from another language that is also used in German","uk": "слово з іншої мови, яке також вживають у німецькій","ru": "слово из другого языка, которое также употребляют в немецком"},"def":{"de":"<g>Das</g> <g><b>englische</b></g> <b>Fremdwort</b> „Update“ benutzen viele Deutsche.","en":"Many Germans use <g>the</g> <g><b>English</b></g> <b>loanword</b> „update“.","uk":"Багато німців вживають <b>англійське</b> запозичене слово „update“.","ru":"Многие немцы употребляют <b>английское</b> заимствованное слово „update“."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_006","cat":"k11","term":{"de":"die Meinung","en":"opinion","uk":"думка","ru":"мнение"},"short":{"de": "was jemand über etwas denkt","en": "what someone thinks about something","uk": "що людина думає про щось","ru": "что человек думает о чём-то"},"def":{"de":"<g>Die</g> <g><b>persönliche</b></g> <b>Meinung</b> von Selin ist im Forum sehr beliebt.","en":"Selin's <g><b>personal</b></g> <b>opinion</b> is very popular in the forum.","uk":"<b>Особиста</b> думка Селін дуже популярна на форумі.","ru":"<b>Личное</b> мнение Селин очень популярно на форуме."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_007","cat":"k11","term":{"de":"kaputt","en":"broken","uk":"зламаний","ru":"сломанный"},"short":{"de": "wenn ein Gerät nicht mehr funktioniert","en": "when a device no longer works","uk": "коли прилад більше не працює","ru": "когда прибор больше не работает"},"def":{"de":"Mit <g>dem</g> <g><b>kaputten</b></g> <b>Drucker</b> kann Herr Baraka nichts mehr ausdrucken.","en":"With <g>the</g> <g><b>broken</b></g> printer, Mr Baraka can no longer print anything.","uk":"Із <b>зламаним</b> принтером пан Барака більше нічого не може роздрукувати.","ru":"Со <b>сломанным</b> принтером господин Барака больше ничего не может распечатать."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_008","cat":"k11","term":{"de":"funktionieren","en":"to function, to work","uk":"функціонувати","ru":"функционировать"},"short":{"de": "richtig arbeiten, ohne Probleme","en": "to work correctly, without problems","uk": "правильно працювати, без проблем","ru": "правильно работать, без проблем"},"def":{"de":"Mit <g>dem</g> <g><b>neuen</b></g> Akku <b>funktioniert</b> das Handy wieder normal.","en":"With <g>the</g> <g><b>new</b></g> battery, the phone <b>works</b> normally again.","uk":"З <b>новим</b> акумулятором телефон знову <b>працює</b> нормально.","ru":"С <b>новым</b> аккумулятором телефон снова <b>работает</b> нормально."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_009","cat":"k11","term":{"de":"reparieren","en":"to repair","uk":"ремонтувати","ru":"ремонтировать"},"short":{"de": "ein kaputtes Gerät wieder in Ordnung bringen","en": "to fix a broken device","uk": "полагодити зламаний прилад","ru": "починить сломанный прибор"},"def":{"de":"Der Techniker hat das Gerät mit <g>dem</g> <g><b>alten</b></g> Display <b>repariert</b>.","en":"The technician <b>repaired</b> the device with <g>the</g> <g><b>old</b></g> display.","uk":"Технік <b>відремонтував</b> прилад зі <b>старим</b> дисплеєм.","ru":"Техник <b>отремонтировал</b> прибор со <b>старым</b> дисплеем."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_010","cat":"k11","term":{"de":"die Garantie","en":"warranty","uk":"гарантія","ru":"гарантия"},"short":{"de": "ein schriftliches Versprechen, dass ein Gerät kostenlos repariert wird, wenn es kaputtgeht","en": "a written promise that a device will be repaired for free if it breaks","uk": "письмова гарантія безкоштовного ремонту приладу в разі поломки","ru": "письменная гарантия бесплатного ремонта прибора в случае поломки"},"def":{"de":"Mit <g>der</g> <g><b>gültigen</b></g> <b>Garantie</b> ist die Reparatur kostenlos.","en":"With <g>the</g> <g><b>valid</b></g> <b>warranty</b>, the repair is free.","uk":"З <b>чинною</b> гарантією ремонт безкоштовний.","ru":"С <b>действующей</b> гарантией ремонт бесплатный."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_011","cat":"k11","term":{"de":"das Display","en":"display, screen","uk":"дисплей","ru":"дисплей"},"short":{"de": "der Bildschirm eines Geräts","en": "the screen of a device","uk": "екран пристрою","ru": "экран устройства"},"def":{"de":"Auf <g>dem</g> <g><b>kaputten</b></g> <b>Display</b> kann man nichts mehr lesen.","en":"On <g>the</g> <g><b>broken</b></g> <b>display</b>, you can no longer read anything.","uk":"На <b>зламаному</b> дисплеї вже нічого не прочитаєш.","ru":"На <b>сломанном</b> дисплее уже ничего не прочитаешь."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_012","cat":"k11","term":{"de":"der Akku","en":"battery","uk":"акумулятор","ru":"аккумулятор"},"short":{"de": "der Teil im Handy oder Laptop, der die Energie speichert","en": "the part in a phone or laptop that stores energy","uk": "частина телефону чи ноутбука, що зберігає енергію","ru": "часть телефона или ноутбука, которая хранит энергию"},"def":{"de":"Mit <g>dem</g> <g><b>vollen</b></g> <b>Akku</b> hält das Handy den ganzen Tag.","en":"With <g>the</g> <g><b>full</b></g> <b>battery</b>, the phone lasts the whole day.","uk":"З <b>повним</b> акумулятором телефон працює цілий день.","ru":"С <b>полным</b> аккумулятором телефон работает целый день."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_013","cat":"k11","term":{"de":"die App","en":"app","uk":"застосунок","ru":"приложение"},"short":{"de": "ein kleines Programm für das Handy oder den Computer","en": "a small program for the phone or computer","uk": "невелика програма для телефону чи компʼютера","ru": "небольшая программа для телефона или компьютера"},"def":{"de":"Selin hat sich <g>eine</g> <g><b>nützliche</b></g> <b>App</b> zum Deutschlernen installiert.","en":"Selin has installed <g>a</g> <g><b>useful</b></g> <b>app</b> for learning German.","uk":"Селін встановила <b>корисний</b> застосунок для вивчення німецької.","ru":"Селин установила <b>полезное</b> приложение для изучения немецкого."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_014","cat":"k11","term":{"de":"herunterladen","en":"to download","uk":"завантажувати (з інтернету)","ru":"скачивать"},"short":{"de": "eine Datei aus dem Internet auf das eigene Gerät holen","en": "to get a file from the internet onto your own device","uk": "отримати файл з інтернету на свій пристрій","ru": "получить файл из интернета на своё устройство"},"def":{"de":"Er hat sich <g>ein</g> <g><b>kostenloses</b></g> Programm <b>heruntergeladen</b>.","en":"He has <b>downloaded</b> <g>a</g> <g><b>free</b></g> program.","uk":"Він <b>завантажив</b> <b>безкоштовну</b> програму.","ru":"Он <b>скачал</b> <b>бесплатную</b> программу."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_015","cat":"k11","term":{"de":"hochladen","en":"to upload","uk":"завантажувати (в інтернет)","ru":"загружать (в интернет)"},"short":{"de": "eine Datei vom eigenen Gerät ins Internet stellen","en": "to put a file from your own device onto the internet","uk": "розмістити файл зі свого пристрою в інтернеті","ru": "разместить файл со своего устройства в интернете"},"def":{"de":"Sie hat <g>ein</g> <g><b>lustiges</b></g> Video <b>hochgeladen</b>.","en":"She has <b>uploaded</b> <g>a</g> <g><b>funny</b></g> video.","uk":"Вона <b>завантажила</b> в інтернет <b>смішне</b> відео.","ru":"Она <b>загрузила</b> в интернет <b>смешное</b> видео."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_016","cat":"k11","term":{"de":"empfehlen","en":"to recommend","uk":"рекомендувати","ru":"рекомендовать"},"short":{"de": "Sagen, dass man etwas gut findet und rät, es zu benutzen","en": "to say that you think something is good and advise using it","uk": "радити щось, бо вважаєш це хорошим","ru": "советовать что-то, потому что считаешь это хорошим"},"def":{"de":"Er kann mir <g>eine</g> <g><b>gute</b></g> App zum Reparieren <b>empfehlen</b>.","en":"He can <b>recommend</b> <g>a</g> <g><b>good</b></g> app for repairing.","uk":"Він може <b>порадити</b> мені <b>хороший</b> застосунок для ремонту.","ru":"Он может <b>порекомендовать</b> мне <b>хорошее</b> приложение для ремонта."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_017","cat":"k11","term":{"de":"der Tipp","en":"tip","uk":"порада","ru":"совет"},"short":{"de": "eine kurze, nützliche Information oder Idee","en": "a short, useful piece of information or idea","uk": "коротка корисна порада чи ідея","ru": "короткий полезный совет или идея"},"def":{"de":"Im Forum bekommt man <g>einen</g> <g><b>praktischen</b></g> <b>Tipp</b> zur Reparatur.","en":"In the forum you get <g>a</g> <g><b>practical</b></g> <b>tip</b> for the repair.","uk":"На форумі можна отримати <b>практичну</b> пораду щодо ремонту.","ru":"На форуме можно получить <b>практический</b> совет по ремонту."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_018","cat":"k11","term":{"de":"das Forum","en":"forum","uk":"форум","ru":"форум"},"short":{"de": "eine Internetseite, auf der Menschen Fragen stellen und diskutieren","en": "a website where people ask questions and discuss","uk": "сайт, де люди ставлять запитання та обговорюють щось","ru": "сайт, где люди задают вопросы и обсуждают что-то"},"def":{"de":"Im <b>Forum</b> findet man viele Tipps zum Reparieren von Geräten.","en":"In the <b>forum</b>, you can find many tips for repairing devices.","uk":"На <b>форумі</b> можна знайти багато порад щодо ремонту приладів.","ru":"На <b>форуме</b> можно найти много советов по ремонту приборов."},"gram":""},
  {"id":"k11_019","cat":"k11","term":{"de":"das Repair-Café","en":"repair café","uk":"repair café (майстерня ремонту)","ru":"repair café (мастерская ремонта)"},"short":{"de": "ein Ort, an dem Menschen kostenlos zusammen kaputte Geräte reparieren","en": "a place where people repair broken devices together for free","uk": "місце, де люди безкоштовно разом ремонтують зламані прилади","ru": "место, где люди бесплатно вместе ремонтируют сломанные приборы"},"def":{"de":"Im <b>Repair-Café</b> hilft man sich gegenseitig beim Reparieren.","en":"At the <b>repair café</b>, people help each other with repairs.","uk":"У <b>repair café</b> люди допомагають одне одному з ремонтом.","ru":"В <b>repair café</b> люди помогают друг другу с ремонтом."},"gram":""},
  {"id":"k11_020","cat":"k11","term":{"de":"die Reparatur","en":"repair","uk":"ремонт","ru":"ремонт"},"short":{"de": "wenn man ein kaputtes Gerät wieder in Ordnung bringt","en": "when you fix a broken device","uk": "коли лагодять зламаний прилад","ru": "когда чинят сломанный прибор"},"def":{"de":"Die <b>Reparatur</b> des Laptops hat nur zwanzig Minuten gedauert.","en":"The <b>repair</b> of the laptop only took twenty minutes.","uk":"<b>Ремонт</b> ноутбука тривав лише двадцять хвилин.","ru":"<b>Ремонт</b> ноутбука занял всего двадцать минут."},"gram":""},
  {"id":"k12_001","cat":"k12","term":{"de":"gefallen","en":"to like, to please","uk":"подобатися","ru":"нравиться"},"short":{"de": "wenn man etwas schön oder gut findet","en": "when you find something beautiful or good","uk": "коли щось здається гарним або добрим","ru": "когда что-то кажется красивым или хорошим"},"def":{"de":"Das Kleid, <g><b>das</b></g> im Schaufenster hängt, <b>gefällt</b> ihr sehr.","en":"The dress <g><b>that</b></g> is hanging in the shop window <b>pleases</b> her a lot.","uk":"Сукня, <g><b>яка</b></g> висить у вітрині, дуже їй <b>подобається</b>.","ru":"Платье, <g><b>которое</b></g> висит в витрине, ей очень <b>нравится</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_002","cat":"k12","term":{"de":"das Kompliment","en":"compliment","uk":"комплімент","ru":"комплимент"},"short":{"de": "freundliche Worte, mit denen man sagt, dass man etwas an jemandem schön findet","en": "friendly words used to say that you find something nice about someone","uk": "приємні слова, якими кажуть, що щось у людині подобається","ru": "приятные слова, которыми говорят, что что-то в человеке нравится"},"def":{"de":"Die Verkäuferin, <g><b>die</b></g> sehr freundlich ist, macht ihr ein <b>Kompliment</b>.","en":"The saleswoman, <g><b>who</b></g> is very friendly, gives her a <b>compliment</b>.","uk":"Продавчиня, <g><b>яка</b></g> дуже приязна, робить їй <b>комплімент</b>.","ru":"Продавщица, <g><b>которая</b></g> очень приветливая, делает ей <b>комплимент</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_003","cat":"k12","term":{"de":"der Verkäufer / die Verkäuferin","en":"salesperson","uk":"продавець / продавчиня","ru":"продавец / продавщица"},"short":{"de": "eine Person, die in einem Geschäft Dinge verkauft","en": "a person who sells things in a shop","uk": "особа, яка продає товари в магазині","ru": "человек, который продаёт товары в магазине"},"def":{"de":"Der <b>Verkäufer</b>, <g><b>der</b></g> im zweiten Stock arbeitet, kennt sich mit Musik gut aus.","en":"The <b>salesman</b> <g><b>who</b></g> works on the second floor knows a lot about music.","uk":"<b>Продавець</b>, <g><b>який</b></g> працює на другому поверсі, добре знається на музиці.","ru":"<b>Продавец</b>, <g><b>который</b></g> работает на втором этаже, хорошо разбирается в музыке."},"gram":"relativsatz_nominativ"},
  {"id":"k12_004","cat":"k12","term":{"de":"passen","en":"to fit, to suit","uk":"пасувати, підходити","ru":"подходить, годиться"},"short":{"de": "die richtige Größe oder Form für jemanden haben","en": "to have the right size or shape for someone","uk": "мати правильний розмір чи форму для когось","ru": "иметь правильный размер или форму для кого-то"},"def":{"de":"Die Jacke, <g><b>die</b></g> im Regal liegt, <b>passt</b> ihm perfekt.","en":"The jacket <g><b>that</b></g> is on the shelf <b>fits</b> him perfectly.","uk":"Куртка, <g><b>яка</b></g> лежить на полиці, ідеально йому <b>пасує</b>.","ru":"Куртка, <g><b>которая</b></g> лежит на полке, ему идеально <b>подходит</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_005","cat":"k12","term":{"de":"die Größe","en":"size","uk":"розмір","ru":"размер"},"short":{"de": "wie groß etwas ist, zum Beispiel bei Kleidung","en": "how big something is, for example with clothing","uk": "наскільки щось велике, наприклад щодо одягу","ru": "насколько что-то большое, например в отношении одежды"},"def":{"de":"Die Hose, <g><b>die</b></g> hier hängt, hat leider nicht meine <b>Größe</b>.","en":"The trousers <g><b>that</b></g> are hanging here unfortunately aren't my <b>size</b>.","uk":"Штани, <g><b>які</b></g> тут висять, на жаль, не мого <b>розміру</b>.","ru":"Брюки, <g><b>которые</b></g> здесь висят, к сожалению, не моего <b>размера</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_006","cat":"k12","term":{"de":"das Material","en":"material","uk":"матеріал","ru":"материал"},"short":{"de": "der Stoff, aus dem etwas gemacht ist, zum Beispiel Baumwolle oder Holz","en": "the substance something is made of, for example cotton or wood","uk": "речовина, з якої щось зроблено, наприклад бавовна чи дерево","ru": "вещество, из которого что-то сделано, например хлопок или дерево"},"def":{"de":"Der Stuhl, <g><b>der</b></g> aus Holz gemacht ist, hat ein sehr gutes <b>Material</b>.","en":"The chair <g><b>that</b></g> is made of wood has very good <b>material</b>.","uk":"Стілець, <g><b>який</b></g> зроблений з дерева, має дуже гарний <b>матеріал</b>.","ru":"Стул, <g><b>который</b></g> сделан из дерева, имеет очень хороший <b>материал</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_007","cat":"k12","term":{"de":"beschreiben","en":"to describe","uk":"описувати","ru":"описывать"},"short":{"de": "mit Worten sagen, wie etwas aussieht","en": "to say in words what something looks like","uk": "словами розповісти, як щось виглядає","ru": "словами рассказать, как что-то выглядит"},"def":{"de":"Kannst du <g>das</g> <g><b>rote</b></g> Bild kurz <b>beschreiben</b>?","en":"Can you briefly <b>describe</b> <g>the</g> <g><b>red</b></g> picture?","uk":"Чи можеш ти коротко <b>описати</b> <b>червону</b> картину?","ru":"Можешь ли ты коротко <b>описать</b> <b>красную</b> картину?"},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_008","cat":"k12","term":{"de":"die Vermutung","en":"assumption, guess","uk":"припущення","ru":"предположение"},"short":{"de": "eine Idee, die man hat, ohne es sicher zu wissen","en": "an idea you have without knowing for sure","uk": "ідея, яку маєш, не знаючи напевно","ru": "идея, которая есть, но без точной уверенности"},"def":{"de":"Meine <b>Vermutung</b> über <g>das</g> <g><b>abstrakte</b></g> Bild war leider falsch.","en":"My <b>assumption</b> about <g>the</g> <g><b>abstract</b></g> picture was unfortunately wrong.","uk":"Моє <b>припущення</b> щодо <b>абстрактної</b> картини, на жаль, було хибним.","ru":"Моё <b>предположение</b> насчёт <b>абстрактной</b> картины, к сожалению, было неверным."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_009","cat":"k12","term":{"de":"vermuten","en":"to assume, to guess","uk":"припускати","ru":"предполагать"},"short":{"de": "Denken, dass etwas wahrscheinlich so ist, ohne es genau zu wissen","en": "to think something is probably true without knowing for sure","uk": "думати, що щось, ймовірно, так, не знаючи напевно","ru": "думать, что что-то, вероятно, так, не зная точно"},"def":{"de":"Ich <b>vermute</b>, dass <g>ein</g> <g><b>bekannter</b></g> Künstler dieses Bild gemalt hat.","en":"I <b>assume</b> that <g>a</g> <g><b>well-known</b></g> artist painted this picture.","uk":"Я <b>припускаю</b>, що це полотно намалював <b>відомий</b> художник.","ru":"Я <b>предполагаю</b>, что эту картину нарисовал <b>известный</b> художник."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k12_010","cat":"k12","term":{"de":"im Vordergrund","en":"in the foreground","uk":"на передньому плані","ru":"на переднем плане"},"short":{"de": "der Teil eines Bildes, der am nächsten und am wichtigsten wirkt","en": "the part of a picture that seems closest and most important","uk": "частина картини, яка виглядає найближчою та найважливішою","ru": "часть картины, которая кажется ближе всего и самой важной"},"def":{"de":"<g>Im</g> <g><b>hellen</b></g> Vordergrund sieht man eine Frau mit einem Hund.","en":"In <g>the</g> <g><b>bright</b></g> foreground, you can see a woman with a dog.","uk":"На <b>світлому</b> передньому плані видно жінку з собакою.","ru":"На <b>светлом</b> переднем плане видна женщина с собакой."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_011","cat":"k12","term":{"de":"in der Mitte","en":"in the middle","uk":"посередині","ru":"посередине"},"short":{"de": "genau im Zentrum, nicht am Rand","en": "exactly in the centre, not at the edge","uk": "точно в центрі, не скраю","ru": "точно в центре, не с краю"},"def":{"de":"<g>In der</g> <g><b>ruhigen</b></g> Mitte des Bildes steht ein kleines Haus.","en":"In <g>the</g> <g><b>calm</b></g> centre of the picture, there is a small house.","uk":"У <b>спокійному</b> центрі картини стоїть маленький будинок.","ru":"В <b>спокойном</b> центре картины стоит маленький дом."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_012","cat":"k12","term":{"de":"hinten","en":"at the back, behind","uk":"позаду","ru":"сзади"},"short":{"de": "am Ende oder an der Rückseite, nicht vorne","en": "at the end or the back, not at the front","uk": "позаду або в кінці, не спереду","ru": "сзади или в конце, не спереди"},"def":{"de":"<b>Hinten</b> im Bild steht <g>ein</g> <g><b>kleines</b></g> Boot.","en":"<b>At the back</b> of the picture, there is <g>a</g> <g><b>small</b></g> boat.","uk":"<b>Позаду</b> на картині стоїть <b>маленький</b> човен.","ru":"<b>Сзади</b> на картине стоит <b>маленькая</b> лодка."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k12_013","cat":"k12","term":{"de":"buchen","en":"to book","uk":"бронювати","ru":"бронировать"},"short":{"de": "einen Platz, ein Ticket oder einen Termin im Voraus reservieren","en": "to reserve a place, ticket or appointment in advance","uk": "заздалегідь забронювати місце, квиток чи запис","ru": "заранее забронировать место, билет или запись"},"def":{"de":"Sie hat die Konzertkarten <g>für</g> ihre Freundin online <b>gebucht</b>.","en":"She <b>booked</b> the concert tickets online <g>for</g> her friend.","uk":"Вона <b>забронювала</b> квитки на концерт онлайн <b>для</b> своєї подруги.","ru":"Она <b>забронировала</b> билеты на концерт онлайн <b>для</b> своей подруги."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_014","cat":"k12","term":{"de":"die Buchung","en":"booking","uk":"бронювання","ru":"бронирование"},"short":{"de": "wenn man einen Platz, ein Ticket oder einen Termin reserviert hat","en": "when you have reserved a place, ticket or appointment","uk": "коли забронював місце, квиток чи запис","ru": "когда забронировал место, билет или запись"},"def":{"de":"Die <b>Buchung</b> der Karten funktioniert nur <g>mit</g> Kreditkarte.","en":"The <b>booking</b> of the tickets only works <g>with</g> a credit card.","uk":"<b>Бронювання</b> квитків можливе лише <b>за допомогою</b> кредитної картки.","ru":"<b>Бронирование</b> билетов возможно только <b>с помощью</b> кредитной карты."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_015","cat":"k12","term":{"de":"der Musikstil","en":"music style","uk":"музичний стиль","ru":"музыкальный стиль"},"short":{"de": "eine bestimmte Art von Musik, zum Beispiel Jazz oder Pop","en": "a particular type of music, for example jazz or pop","uk": "певний вид музики, наприклад джаз чи поп","ru": "определённый вид музыки, например джаз или поп"},"def":{"de":"Dieser <b>Musikstil</b> gefällt <g>vielen</g> jungen Leuten.","en":"This <b>music style</b> is liked <g>by</g> many young people.","uk":"Цей <b>музичний стиль</b> подобається <b>багатьом</b> молодим людям.","ru":"Этот <b>музыкальный стиль</b> нравится <b>многим</b> молодым людям."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_016","cat":"k12","term":{"de":"die Präsentation","en":"presentation","uk":"презентація","ru":"презентация"},"short":{"de": "wenn man etwas vor anderen Menschen vorstellt und erklärt","en": "when you present and explain something in front of others","uk": "коли щось презентують і пояснюють перед іншими людьми","ru": "когда что-то представляют и объясняют перед другими людьми"},"def":{"de":"Die <b>Präsentation</b> <g>über</g> moderne Kunst war sehr interessant.","en":"The <b>presentation</b> <g>about</g> modern art was very interesting.","uk":"<b>Презентація</b> <b>про</b> сучасне мистецтво була дуже цікавою.","ru":"<b>Презентация</b> <b>о</b> современном искусстве была очень интересной."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_017","cat":"k12","term":{"de":"originell","en":"original, creative","uk":"оригінальний","ru":"оригинальный"},"short":{"de": "besonders und kreativ, nicht wie alle anderen","en": "special and creative, not like everyone else","uk": "особливий і креативний, не такий, як усі","ru": "особенный и креативный, не такой, как все"},"def":{"de":"Ihre Idee <g>für</g> das Geschenk war sehr <b>originell</b>.","en":"Her idea <g>for</g> the gift was very <b>original</b>.","uk":"Її ідея <b>щодо</b> подарунка була дуже <b>оригінальною</b>.","ru":"Её идея <b>насчёт</b> подарка была очень <b>оригинальной</b>."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_018","cat":"k12","term":{"de":"das Upcycling","en":"upcycling","uk":"апсайклінг (повторне використання)","ru":"апсайклинг (повторное использование)"},"short":{"de": "alte Dinge zu etwas Neuem und Besserem machen","en": "turning old things into something new and better","uk": "перетворення старих речей на щось нове й краще","ru": "превращение старых вещей во что-то новое и лучшее"},"def":{"de":"<b>Upcycling</b> ist gut <g>für</g> die Umwelt.","en":"<b>Upcycling</b> is good <g>for</g> the environment.","uk":"<b>Апсайклінг</b> корисний <b>для</b> довкілля.","ru":"<b>Апсайклинг</b> полезен <b>для</b> окружающей среды."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_019","cat":"k12","term":{"de":"wiederverwenden","en":"to reuse","uk":"використовувати повторно","ru":"использовать повторно"},"short":{"de": "etwas, das schon benutzt wurde, noch einmal benutzen","en": "to use something again that has already been used","uk": "використати ще раз те, що вже використовувалося","ru": "использовать ещё раз то, что уже использовалось"},"def":{"de":"Man kann alte Flaschen gut <g>zum</g> Basteln <b>wiederverwenden</b>.","en":"You can easily <b>reuse</b> old bottles <g>for</g> crafting.","uk":"Старі пляшки можна добре <b>використовувати повторно</b> <b>для</b> творчості.","ru":"Старые бутылки можно хорошо <b>использовать повторно</b> <b>для</b> творчества."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_020","cat":"k12","term":{"de":"bequem","en":"comfortable","uk":"зручний","ru":"удобный"},"short":{"de": "angenehm, ohne dass es wehtut oder stört","en": "comfortable, without hurting or bothering you","uk": "приємний, без болю чи дискомфорту","ru": "приятный, без боли или дискомфорта"},"def":{"de":"Dieser Sessel ist sehr <b>bequem</b> <g>zum</g> Lesen.","en":"This armchair is very <b>comfortable</b> <g>for</g> reading.","uk":"Це крісло дуже <b>зручне</b> <b>для</b> читання.","ru":"Это кресло очень <b>удобное</b> <b>для</b> чтения."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k13_001","cat":"k13","term":{"de":"der Handwerker / die Handwerkerin","en":"craftsman / craftswoman","uk":"ремісник / ремісниця","ru":"ремесленник / ремесленница"},"short":{"de": "eine Person, die einen praktischen Beruf mit den Händen ausübt, z. B. Tischler","en": "a person who practises a practical, hands-on profession, e.g. carpenter","uk": "особа, яка займається практичною ручною професією, напр. столяр","ru": "человек, который занимается практической ручной профессией, напр. столяр"},"def":{"de":"Nach der Ausbildung <g><b>wird</b></g> Elif eine gute <b>Handwerkerin</b>.","en":"After her training, Elif <g><b>will become</b></g> a good <b>craftswoman</b>.","uk":"Після навчання Еліф <b>стане</b> хорошою ремісницею.","ru":"После обучения Элиф <b>станет</b> хорошей ремесленницей."},"gram":"verb_werden"},
  {"id":"k13_002","cat":"k13","term":{"de":"das Handwerk","en":"craft, trade","uk":"ремесло","ru":"ремесло"},"short":{"de": "ein praktischer Beruf, bei dem man mit den Händen arbeitet","en": "a practical profession where you work with your hands","uk": "практична професія, у якій працюють руками","ru": "практическая профессия, в которой работают руками"},"def":{"de":"Das <b>Handwerk</b> <g><b>wird</b></g> in Deutschland immer wichtiger.","en":"<b>Craft</b> <g><b>is becoming</b></g> increasingly important in Germany.","uk":"<b>Ремесло</b> у Німеччині стає дедалі важливішим.","ru":"<b>Ремесло</b> в Германии становится всё более важным."},"gram":"verb_werden"},
  {"id":"k13_003","cat":"k13","term":{"de":"der Traumberuf","en":"dream job","uk":"професія мрії","ru":"профессия мечты"},"short":{"de": "der Beruf, den man sich am meisten wünscht","en": "the profession you wish for the most","uk": "професія, про яку найбільше мрієш","ru": "профессия, о которой мечтаешь больше всего"},"def":{"de":"Tischler <g><b>wird</b></g> für Malik zu seinem <b>Traumberuf</b>.","en":"Carpenter <g><b>is becoming</b></g> Malik's <b>dream job</b>.","uk":"Столяр <b>стає</b> для Маліка <b>професією мрії</b>.","ru":"Столяр <b>становится</b> для Малика <b>профессией мечты</b>."},"gram":"verb_werden"},
  {"id":"k13_004","cat":"k13","term":{"de":"die Fähigkeit","en":"skill, ability","uk":"здібність, навичка","ru":"способность, навык"},"short":{"de": "etwas, das man gut kann","en": "something you are good at","uk": "те, що людина добре вміє робити","ru": "то, что человек хорошо умеет делать"},"def":{"de":"Mit der Zeit <g><b>wird</b></g> seine handwerkliche <b>Fähigkeit</b> immer besser.","en":"Over time, his craft <b>skill</b> <g><b>is becoming</b></g> better and better.","uk":"З часом його ремісничі <b>здібності</b> стають дедалі кращими.","ru":"Со временем его ремесленные <b>способности</b> становятся всё лучше."},"gram":"verb_werden"},
  {"id":"k13_005","cat":"k13","term":{"de":"die Stärke","en":"strength","uk":"сильна сторона","ru":"сильная сторона"},"short":{"de": "etwas, das man besonders gut kann","en": "something you are particularly good at","uk": "те, що людина вміє особливо добре","ru": "то, что человек умеет особенно хорошо"},"def":{"de":"Genauigkeit <g><b>wird</b></g> für sie zur größten <b>Stärke</b> im Beruf.","en":"Precision <g><b>is becoming</b></g> her greatest <b>strength</b> in the job.","uk":"Точність <b>стає</b> для неї найбільшою <b>сильною стороною</b> у професії.","ru":"Точность <b>становится</b> для неё самой сильной стороной в профессии."},"gram":"verb_werden"},
  {"id":"k13_006","cat":"k13","term":{"de":"die Schwäche","en":"weakness","uk":"слабка сторона","ru":"слабая сторона"},"short":{"de": "etwas, das man noch nicht so gut kann","en": "something you are not yet very good at","uk": "те, що людина ще не вміє добре робити","ru": "то, что человек ещё не умеет хорошо делать"},"def":{"de":"Ungeduld <g><b>wird</b></g> für ihn manchmal zu einer echten <b>Schwäche</b>.","en":"Impatience sometimes <g><b>becomes</b></g> a real <b>weakness</b> for him.","uk":"Нетерплячість іноді <b>стає</b> для нього справжньою слабкою стороною.","ru":"Нетерпеливость иногда <b>становится</b> для него настоящей слабой стороной."},"gram":"verb_werden"},
  {"id":"k13_007","cat":"k13","term":{"de":"der Vorteil","en":"advantage","uk":"перевага","ru":"преимущество"},"short":{"de": "etwas Positives, das eine Sache oder Entscheidung mit sich bringt","en": "something positive that a thing or decision brings with it","uk": "щось позитивне, що приносить певна річ чи рішення","ru": "что-то положительное, что приносит вещь или решение"},"def":{"de":"An deiner Stelle <g>würde</g> ich den <b>Vorteil</b> der Ausbildung nutzen.","en":"In your place, I <g><b>would</b></g> use the <b>advantage</b> of the training.","uk":"На твоєму місці я <g>скористався б</g> <b>перевагою</b> навчання.","ru":"На твоём месте я <g>воспользовался бы</g> <b>преимуществом</b> обучения."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_008","cat":"k13","term":{"de":"der Nachteil","en":"disadvantage","uk":"недолік","ru":"недостаток"},"short":{"de": "etwas Negatives, das eine Sache oder Entscheidung mit sich bringt","en": "something negative that a thing or decision brings with it","uk": "щось негативне, що приносить певна річ чи рішення","ru": "что-то отрицательное, что приносит вещь или решение"},"def":{"de":"Ich <g><b>würde</b></g> sagen, der größte <b>Nachteil</b> ist die niedrige Bezahlung am Anfang.","en":"I <g><b>would</b></g> say the biggest <b>disadvantage</b> is the low pay at the beginning.","uk":"Я <g>сказав би</g>, що найбільший <b>недолік</b> — низька оплата на початку.","ru":"Я <g>сказал бы</g>, что самый большой <b>недостаток</b> — низкая оплата вначале."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_009","cat":"k13","term":{"de":"der Ratschlag","en":"piece of advice","uk":"порада","ru":"совет"},"short":{"de": "eine Empfehlung, was jemand tun sollte","en": "a recommendation about what someone should do","uk": "рекомендація щодо того, що варто зробити","ru": "рекомендация о том, что стоит сделать"},"def":{"de":"<g><b>Könntest</b></g> du mir einen guten <b>Ratschlag</b> für die Berufswahl geben?","en":"<g><b>Could</b></g> you give me some good <b>advice</b> for choosing a career?","uk":"Чи не міг би ти дати мені хорошу <b>пораду</b> щодо вибору професії?","ru":"Не мог бы ты дать мне хороший <b>совет</b> по выбору профессии?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_010","cat":"k13","term":{"de":"raten","en":"to advise","uk":"радити","ru":"советовать"},"short":{"de": "jemandem sagen, was er tun sollte","en": "to tell someone what they should do","uk": "порадити комусь, що варто зробити","ru": "посоветовать кому-то, что стоит сделать"},"def":{"de":"Ich <g><b>würde</b></g> dir <b>raten</b>, zuerst ein Praktikum zu machen.","en":"I <g><b>would</b></g> <b>advise</b> you to do an internship first.","uk":"Я <g>порадив би</g> тобі спочатку пройти стажування.","ru":"Я <g>посоветовал бы</g> тебе сначала пройти стажировку."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_011","cat":"k13","term":{"de":"werden","en":"to become","uk":"ставати","ru":"становиться"},"short":{"de": "sich in etwas anderes verändern, z. B. einen neuen Beruf bekommen","en": "to change into something else, e.g. get a new profession","uk": "перетворюватися на щось інше, напр. отримати нову професію","ru": "превращаться во что-то другое, напр. получить новую профессию"},"def":{"de":"Was <g><b>würdest</b></g> du gern <b>werden</b>, wenn du frei wählen könntest?","en":"What <g><b>would</b></g> you like to <b>become</b> if you could choose freely?","uk":"Ким би ти хотів <b>стати</b>, якби міг вільно обирати?","ru":"Кем бы ты хотел <b>стать</b>, если бы мог свободно выбирать?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_012","cat":"k13","term":{"de":"die Schlüsselqualifikation","en":"key qualification","uk":"ключова кваліфікація","ru":"ключевая квалификация"},"short":{"de": "eine besonders wichtige Fähigkeit, die man für einen Beruf braucht","en": "a particularly important skill you need for a profession","uk": "особливо важлива навичка, потрібна для професії","ru": "особенно важный навык, необходимый для профессии"},"def":{"de":"Teamfähigkeit <g><b>würde</b></g> ich als wichtigste <b>Schlüsselqualifikation</b> nennen.","en":"I <g><b>would</b></g> call teamwork the most important <b>key qualification</b>.","uk":"Я <g>назвав би</g> вміння працювати в команді найважливішою <b>ключовою кваліфікацією</b>.","ru":"Я <g>назвал бы</g> умение работать в команде самой важной <b>ключевой квалификацией</b>."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_013","cat":"k13","term":{"de":"die Bewerbung","en":"application","uk":"заява про прийом на роботу","ru":"заявление о приёме на работу"},"short":{"de": "ein Brief oder Formular, mit dem man sich für eine Stelle oder Ausbildung anmeldet","en": "a letter or form used to apply for a job or training","uk": "лист чи форма, якою подають заявку на роботу чи навчання","ru": "письмо или форма, которой подают заявку на работу или обучение"},"def":{"de":"Die Firma schreibt, <g>dass</g> ihre <b>Bewerbung</b> angekommen ist.","en":"The company writes <g>that</g> her <b>application</b> has arrived.","uk":"Фірма пише, <g>що</g> її <b>заяву</b> отримали.","ru":"Фирма пишет, <g>что</g> её <b>заявление</b> получили."},"gram":"dass_satz_wdh"},
  {"id":"k13_014","cat":"k13","term":{"de":"sich bewerben","en":"to apply","uk":"подавати заяву на роботу","ru":"подавать заявление на работу"},"short":{"de": "ein Formular oder einen Brief für eine Stelle oder Ausbildung schicken","en": "to send a form or letter for a job or training","uk": "надіслати форму чи лист для отримання роботи чи навчання","ru": "отправить форму или письмо для получения работы или обучения"},"def":{"de":"Malik hat entschieden, <g>dass</g> er sich bei der Tischlerei <b>bewirbt</b>.","en":"Malik has decided <g>that</g> he will <b>apply</b> to the carpentry workshop.","uk":"Малік вирішив, <g>що</g> подасть заявку до столярної майстерні.","ru":"Малик решил, <g>что</g> подаст заявку в столярную мастерскую."},"gram":"dass_satz_wdh"},
  {"id":"k13_015","cat":"k13","term":{"de":"die Ausbildung","en":"vocational training","uk":"професійне навчання","ru":"профессиональное обучение"},"short":{"de": "eine Zeit, in der man einen Beruf praktisch und in der Schule lernt","en": "a period during which you learn a profession both practically and at school","uk": "період, коли навчаються професії практично і в школі","ru": "период, когда учатся профессии практически и в школе"},"def":{"de":"Er hofft, <g>dass</g> die <b>Ausbildung</b> ihm Spaß machen wird.","en":"He hopes <g>that</g> the <b>training</b> will be fun for him.","uk":"Він сподівається, <g>що</g> <b>навчання</b> йому сподобається.","ru":"Он надеется, <g>что</g> <b>обучение</b> ему понравится."},"gram":"dass_satz_wdh"},
  {"id":"k13_016","cat":"k13","term":{"de":"der Ausbildungsberuf","en":"apprenticeship occupation","uk":"професія, що здобувається через навчання","ru":"профессия, получаемая через обучение"},"short":{"de": "ein Beruf, den man durch eine praktische Ausbildung lernt","en": "a profession you learn through practical training","uk": "професія, яку здобувають через практичне навчання","ru": "профессия, которую получают через практическое обучение"},"def":{"de":"Man sagt, <g>dass</g> Tischler ein beliebter <b>Ausbildungsberuf</b> ist.","en":"They say <g>that</g> carpenter is a popular <b>apprenticeship occupation</b>.","uk":"Кажуть, <g>що</g> столяр — популярна <b>професія, яку здобувають через навчання</b>.","ru":"Говорят, <g>что</g> столяр — популярная <b>профессия, получаемая через обучение</b>."},"gram":"dass_satz_wdh"},
  {"id":"k13_017","cat":"k13","term":{"de":"die Werkstatt","en":"workshop","uk":"майстерня","ru":"мастерская"},"short":{"de": "ein Raum, in dem Handwerker arbeiten und Dinge herstellen oder reparieren","en": "a room where craftspeople work and make or repair things","uk": "приміщення, де ремісники працюють і виготовляють чи ремонтують речі","ru": "помещение, где ремесленники работают и изготавливают или ремонтируют вещи"},"def":{"de":"Man merkt sofort, <g>dass</g> in dieser <b>Werkstatt</b> viel gearbeitet wird.","en":"You notice immediately <g>that</g> a lot of work is done in this <b>workshop</b>.","uk":"Одразу помітно, <g>що</g> в цій <b>майстерні</b> багато працюють.","ru":"Сразу заметно, <g>что</g> в этой <b>мастерской</b> много работают."},"gram":"dass_satz_wdh"},
  {"id":"k13_018","cat":"k13","term":{"de":"die Tischlerei","en":"carpentry, joiner's workshop","uk":"столярна майстерня","ru":"столярная мастерская"},"short":{"de": "eine Werkstatt oder Firma, in der man Möbel und Dinge aus Holz herstellt","en": "a workshop or company where furniture and things are made from wood","uk": "майстерня чи фірма, де виготовляють меблі та вироби з дерева","ru": "мастерская или фирма, где изготавливают мебель и изделия из дерева"},"def":{"de":"Der Chef erklärt, <g>dass</g> die <b>Tischlerei</b> bald einen neuen Azubi braucht.","en":"The boss explains <g>that</g> the <b>carpentry workshop</b> will soon need a new apprentice.","uk":"Керівник пояснює, <g>що</g> <b>столярній майстерні</b> скоро знадобиться новий учень.","ru":"Начальник объясняет, <g>что</g> <b>столярной мастерской</b> скоро понадобится новый ученик."},"gram":"dass_satz_wdh"},
  {"id":"k13_019","cat":"k13","term":{"de":"der Betrieb","en":"business, company","uk":"підприємство","ru":"предприятие"},"short":{"de": "eine Firma oder ein Unternehmen, in dem gearbeitet wird","en": "a company or business where people work","uk": "фірма чи підприємство, де працюють люди","ru": "фирма или предприятие, где работают люди"},"def":{"de":"Die Anzeige sagt, <g>dass</g> der <b>Betrieb</b> einen neuen Auszubildenden sucht.","en":"The advert says <g>that</g> the <b>business</b> is looking for a new apprentice.","uk":"В оголошенні сказано, <g>що</g> <b>підприємство</b> шукає нового учня.","ru":"В объявлении сказано, <g>что</g> <b>предприятие</b> ищет нового ученика."},"gram":"dass_satz_wdh"},
  {"id":"k13_020","cat":"k13","term":{"de":"die Qualifikation","en":"qualification","uk":"кваліфікація","ru":"квалификация"},"short":{"de": "das Wissen und die Fähigkeiten, die man für einen Beruf braucht","en": "the knowledge and skills you need for a profession","uk": "знання та навички, потрібні для професії","ru": "знания и навыки, необходимые для профессии"},"def":{"de":"Im Gespräch zeigt sich, <g>dass</g> ihre <b>Qualifikation</b> für die Stelle passt.","en":"The interview shows <g>that</g> her <b>qualification</b> fits the position.","uk":"У розмові стає зрозуміло, <g>що</g> її <b>кваліфікація</b> підходить для цієї посади.","ru":"В разговоре становится ясно, <g>что</g> её <b>квалификация</b> подходит для этой должности."},"gram":"dass_satz_wdh"},
  {"id":"k14_001","cat":"k14","term":{"de":"die Freundschaft","en":"friendship","uk":"дружба","ru":"дружба"},"short":{"de": "eine enge, positive Beziehung zwischen zwei Menschen, die sich mögen","en": "a close, positive relationship between two people who like each other","uk": "тісні, приємні стосунки між двома людьми, які подобаються одне одному","ru": "тесные, приятные отношения между двумя людьми, которые нравятся друг другу"},"def":{"de":"Ihre <b>Freundschaft</b> begann in der Schule, und seitdem verbringen <g><b>sie</b></g> viel Zeit zusammen.","en":"Their <b>friendship</b> began at school, and since then <g><b>they</b></g> have spent a lot of time together.","uk":"Їхня <b>дружба</b> почалася в школі, і відтоді вони проводять багато часу разом.","ru":"Их <b>дружба</b> началась в школе, и с тех пор они проводят много времени вместе."},"gram":"personalpronomen_wdh"},
  {"id":"k14_002","cat":"k14","term":{"de":"vertrauen","en":"to trust","uk":"довіряти","ru":"доверять"},"short":{"de": "sicher sein, dass jemand ehrlich ist und einem nicht schadet","en": "to be sure that someone is honest and won't harm you","uk": "бути впевненим, що хтось чесний і не завдасть шкоди","ru": "быть уверенным, что кто-то честен и не навредит"},"def":{"de":"Ich <g><b>ihm</b></g> <b>vertraue</b> voll und ganz, seit wir uns kennen.","en":"I fully <b>trust</b> <g><b>him</b></g> since we met.","uk":"Я повністю <b>довіряю</b> <b>йому</b> відтоді, як ми познайомилися.","ru":"Я полностью <b>доверяю</b> <b>ему</b> с тех пор, как мы познакомились."},"gram":"personalpronomen_wdh"},
  {"id":"k14_003","cat":"k14","term":{"de":"das Vertrauen","en":"trust","uk":"довіра","ru":"доверие"},"short":{"de": "das sichere Gefühl, dass jemand ehrlich ist und einem nicht schadet","en": "the secure feeling that someone is honest and won't harm you","uk": "впевнене почуття, що хтось чесний і не завдасть шкоди","ru": "уверенное чувство, что кто-то честен и не навредит"},"def":{"de":"Das <b>Vertrauen</b> zwischen <g><b>ihnen</b></g> ist in den letzten Jahren gewachsen.","en":"The <b>trust</b> between <g><b>them</b></g> has grown over the past years.","uk":"<b>Довіра</b> між <b>ними</b> зросла за останні роки.","ru":"<b>Доверие</b> между <b>ними</b> выросло за последние годы."},"gram":"personalpronomen_wdh"},
  {"id":"k14_004","cat":"k14","term":{"de":"ehrlich","en":"honest","uk":"чесний","ru":"честный"},"short":{"de": "immer die Wahrheit sagen","en": "to always tell the truth","uk": "завжди казати правду","ru": "всегда говорить правду"},"def":{"de":"Sie ist immer <b>ehrlich</b> zu <g><b>mir</b></g>, auch wenn die Wahrheit wehtut.","en":"She is always <b>honest</b> with <g><b>me</b></g>, even when the truth hurts.","uk":"Вона завжди <b>чесна</b> зі <b>мною</b>, навіть коли правда болить.","ru":"Она всегда <b>честна</b> со <b>мной</b>, даже когда правда причиняет боль."},"gram":"personalpronomen_wdh"},
  {"id":"k14_005","cat":"k14","term":{"de":"zuverlässig","en":"reliable","uk":"надійний","ru":"надёжный"},"short":{"de": "so, dass man sich auf jemanden immer verlassen kann","en": "such that you can always rely on someone","uk": "такий, на кого завжди можна покластися","ru": "такой, на кого всегда можно положиться"},"def":{"de":"Mein bester Freund ist sehr <b>zuverlässig</b> — <g><b>ich</b></g> kann mich immer auf ihn verlassen.","en":"My best friend is very <b>reliable</b> — <g><b>I</b></g> can always count on him.","uk":"Мій найкращий друг дуже <b>надійний</b> — <b>я</b> завжди можу на нього покластися.","ru":"Мой лучший друг очень <b>надёжный</b> — <b>я</b> всегда могу на него положиться."},"gram":"personalpronomen_wdh"},
  {"id":"k14_006","cat":"k14","term":{"de":"gemeinsam","en":"together, shared","uk":"спільний, разом","ru":"общий, вместе"},"short":{"de": "zusammen mit anderen, nicht allein","en": "together with others, not alone","uk": "разом з іншими, не самостійно","ru": "вместе с другими, не в одиночку"},"def":{"de":"<g><b>Wir</b></g> verbringen jedes Wochenende <b>gemeinsam</b> mit Freunden.","en":"<g><b>We</b></g> spend every weekend <b>together</b> with friends.","uk":"<b>Ми</b> проводимо кожні вихідні <b>разом</b> з друзями.","ru":"<b>Мы</b> проводим каждые выходные <b>вместе</b> с друзьями."},"gram":"personalpronomen_wdh"},
  {"id":"k14_007","cat":"k14","term":{"de":"das Haustier","en":"pet","uk":"домашня тварина","ru":"домашнее животное"},"short":{"de": "ein Tier, das man zu Hause hält, zum Beispiel ein Hund oder eine Katze","en": "an animal kept at home, for example a dog or a cat","uk": "тварина, яку тримають удома, наприклад собака чи кіт","ru": "животное, которое держат дома, например собака или кошка"},"def":{"de":"Sie kauft ihrem Sohn ein <b>Haustier</b>, <g>damit</g> er lernt, Verantwortung zu übernehmen.","en":"She buys her son a <b>pet</b> <g>so that</g> he learns to take responsibility.","uk":"Вона купує синові <b>домашню тварину</b>, <g>щоб</g> він навчився брати на себе відповідальність.","ru":"Она покупает сыну <b>домашнее животное</b>, <g>чтобы</g> он научился брать на себя ответственность."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_008","cat":"k14","term":{"de":"sich kümmern um","en":"to take care of","uk":"піклуватися про","ru":"заботиться о"},"short":{"de": "für jemanden oder etwas sorgen und aufpassen","en": "to take care of and look after someone or something","uk": "піклуватися про когось або щось і доглядати","ru": "заботиться о ком-то или чём-то и присматривать"},"def":{"de":"Er <b>kümmert sich</b> jeden Tag um seinen Hund, <g>damit</g> es ihm gut geht.","en":"He <b>takes care of</b> his dog every day <g>so that</g> it is doing well.","uk":"Він щодня <b>піклується про</b> свого собаку, <g>щоб</g> тому було добре.","ru":"Он ежедневно <b>заботится о</b> своей собаке, <g>чтобы</g> ей было хорошо."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_009","cat":"k14","term":{"de":"lassen","en":"to let, to have something done","uk":"дозволяти, доручати","ru":"позволять, поручать"},"short":{"de": "Erlauben, dass etwas passiert, oder jemanden etwas für einen tun lassen","en": "to allow something to happen, or have someone do something for you","uk": "дозволяти, щоб щось сталося, або доручати комусь щось зробити","ru": "позволять, чтобы что-то произошло, или поручать кому-то что-то сделать"},"def":{"de":"Sie <g><b>lässt</b></g> ihren Sohn den Hund allein <g><b>ausführen</b></g>.","en":"She <g><b>lets</b></g> her son <g><b>walk</b></g> the dog alone.","uk":"Вона <b>дозволяє</b> синові самому вигулювати собаку.","ru":"Она <b>позволяет</b> сыну самому выгуливать собаку."},"gram":"verb_lassen"},
  {"id":"k14_010","cat":"k14","term":{"de":"damit","en":"so that","uk":"щоб","ru":"чтобы"},"short":{"de": "ein Wort, mit dem man den Grund oder das Ziel einer Handlung erklärt","en": "a word used to explain the reason or purpose of an action","uk": "слово, яким пояснюють мету або причину дії","ru": "слово, которым объясняют цель или причину действия"},"def":{"de":"Sie erklärt die Regeln genau, <g><b>damit</b></g> alle sie verstehen.","en":"She explains the rules precisely <g><b>so that</b></g> everyone understands them.","uk":"Вона детально пояснює правила, <g><b>щоб</b></g> усі їх зрозуміли.","ru":"Она подробно объясняет правила, <g><b>чтобы</b></g> все их поняли."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_011","cat":"k14","term":{"de":"die Verantwortung","en":"responsibility","uk":"відповідальність","ru":"ответственность"},"short":{"de": "die Pflicht, sich um etwas oder jemanden zu kümmern","en": "the duty to take care of something or someone","uk": "обовʼязок піклуватися про щось або когось","ru": "обязанность заботиться о чём-то или ком-то"},"def":{"de":"Die Eltern geben ihm mehr <b>Verantwortung</b>, <g>damit</g> er selbstständiger wird.","en":"The parents give him more <b>responsibility</b> <g>so that</g> he becomes more independent.","uk":"Батьки дають йому більше <b>відповідальності</b>, <g>щоб</g> він став самостійнішим.","ru":"Родители дают ему больше <b>ответственности</b>, <g>чтобы</g> он стал самостоятельнее."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_012","cat":"k14","term":{"de":"unterstützen","en":"to support","uk":"підтримувати","ru":"поддерживать"},"short":{"de": "jemandem helfen, damit es ihm besser geht oder er sein Ziel erreicht","en": "to help someone so that they feel better or reach their goal","uk": "допомагати комусь, щоб йому стало краще або він досяг мети","ru": "помогать кому-то, чтобы ему стало лучше или он достиг цели"},"def":{"de":"Freunde <b>unterstützen</b> einander, <g>damit</g> niemand allein durch schwierige Zeiten geht.","en":"Friends <b>support</b> each other <g>so that</g> nobody goes through difficult times alone.","uk":"Друзі <b>підтримують</b> одне одного, <g>щоб</g> ніхто не проходив через важкі часи наодинці.","ru":"Друзья <b>поддерживают</b> друг друга, <g>чтобы</g> никто не проходил через трудные времена в одиночку."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_013","cat":"k14","term":{"de":"die Unterstützung","en":"support","uk":"підтримка","ru":"поддержка"},"short":{"de": "Hilfe, die man einer Person gibt","en": "help that you give to a person","uk": "допомога, яку надають людині","ru": "помощь, которую оказывают человеку"},"def":{"de":"Ohne die <b>Unterstützung</b> ihrer Freunde hätte sie diese Zeit nicht geschafft.","en":"Without her friends' <b>support</b>, she wouldn't have made it through this time.","uk":"Без <b>підтримки</b> друзів вона б не впоралася з тим періодом.","ru":"Без <b>поддержки</b> друзей она бы не справилась с тем периодом."},"gram":""},
  {"id":"k14_014","cat":"k14","term":{"de":"kennenlernen","en":"to get to know","uk":"знайомитися","ru":"знакомиться"},"short":{"de": "zum ersten Mal mit jemandem sprechen und ihn danach besser kennen","en": "to speak with someone for the first time and get to know them better afterwards","uk": "уперше поговорити з кимось і потім краще його впізнати","ru": "впервые поговорить с кем-то и потом лучше его узнать"},"def":{"de":"Sie haben sich im Park <b>kennengelernt</b>, als ihre Hunde zusammen gespielt haben.","en":"They <b>got to know</b> each other in the park when their dogs were playing together.","uk":"Вони <b>познайомилися</b> в парку, коли їхні собаки гралися разом.","ru":"Они <b>познакомились</b> в парке, когда их собаки играли вместе."},"gram":""},
  {"id":"k14_015","cat":"k14","term":{"de":"die Beziehung","en":"relationship","uk":"стосунки","ru":"отношения"},"short":{"de": "die Verbindung zwischen zwei Menschen, die sich kennen","en": "the connection between two people who know each other","uk": "звʼязок між двома людьми, які знають одне одного","ru": "связь между двумя людьми, которые знают друг друга"},"def":{"de":"Für eine gute <b>Beziehung</b> braucht man Vertrauen und Ehrlichkeit.","en":"A good <b>relationship</b> requires trust and honesty.","uk":"Для хороших <b>стосунків</b> потрібні довіра та чесність.","ru":"Для хороших <b>отношений</b> нужны доверие и честность."},"gram":""},
  {"id":"k14_016","cat":"k14","term":{"de":"entstehen","en":"to arise, to come into being","uk":"виникати","ru":"возникать"},"short":{"de": "langsam anfangen zu existieren","en": "to slowly begin to exist","uk": "поступово починати існувати","ru": "постепенно начинать существовать"},"def":{"de":"Echte Freundschaft <b>entsteht</b> oft dann, wenn man viel Zeit zusammen verbringt.","en":"True friendship often <b>arises</b> when you spend a lot of time together.","uk":"Справжня дружба часто <b>виникає</b>, коли проводиш багато часу разом.","ru":"Настоящая дружба часто <b>возникает</b>, когда проводишь много времени вместе."},"gram":""},
  {"id":"k14_017","cat":"k14","term":{"de":"freiwillig","en":"voluntary","uk":"добровільний","ru":"добровольный"},"short":{"de": "aus eigenem Willen, ohne dass man dazu gezwungen wird","en": "of your own free will, without being forced to","uk": "за власним бажанням, без примусу","ru": "по собственному желанию, без принуждения"},"def":{"de":"Er hilft <b>freiwillig</b> im Tierheim, <g>damit</g> die Tiere dort mehr Aufmerksamkeit bekommen.","en":"He <b>voluntarily</b> helps at the animal shelter <g>so that</g> the animals get more attention there.","uk":"Він <b>добровільно</b> допомагає в притулку для тварин, <g>щоб</g> тварини отримували там більше уваги.","ru":"Он <b>добровольно</b> помогает в приюте для животных, <g>чтобы</g> животные получали там больше внимания."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_018","cat":"k14","term":{"de":"das Sprichwort","en":"proverb","uk":"прислівʼя","ru":"пословица"},"short":{"de": "ein bekannter, kurzer Satz mit einer wichtigen Lebensweisheit","en": "a well-known, short sentence with an important piece of life wisdom","uk": "відоме коротке речення з важливою життєвою мудрістю","ru": "известное короткое предложение с важной жизненной мудростью"},"def":{"de":"Das <b>Sprichwort</b> sagt: „Ein Freund in der Not ist ein wahrer Freund.“","en":"The <b>proverb</b> says: „A friend in need is a friend indeed.“","uk":"<b>Прислівʼя</b> каже: «Друг пізнається в біді».","ru":"<b>Пословица</b> гласит: «Друг познаётся в беде»."},"gram":""},
  {"id":"k14_019","cat":"k14","term":{"de":"sich verlassen auf","en":"to rely on","uk":"покладатися на","ru":"полагаться на"},"short":{"de": "sicher sein, dass jemand hilft oder etwas tut, wie man es erwartet","en": "to be sure that someone will help or do something as expected","uk": "бути впевненим, що хтось допоможе або зробить щось, як очікується","ru": "быть уверенным, что кто-то поможет или сделает что-то, как ожидается"},"def":{"de":"Ich <b>verlasse mich</b> immer auf meine beste Freundin, <g>damit</g> ich mich in schwierigen Momenten nicht allein fühle.","en":"I always <b>rely on</b> my best friend <g>so that</g> I don't feel alone in difficult moments.","uk":"Я завжди <b>покладаюся на</b> свою найкращу подругу, <g>щоб</g> не почуватися самотньою у важкі моменти.","ru":"Я всегда <b>полагаюсь на</b> свою лучшую подругу, <g>чтобы</g> не чувствовать себя одинокой в трудные моменты."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_020","cat":"k14","term":{"de":"verbringen","en":"to spend (time)","uk":"проводити (час)","ru":"проводить (время)"},"short":{"de": "Zeit mit etwas oder jemandem haben und nutzen","en": "to have and use time with something or someone","uk": "мати й проводити час з кимось або чимось","ru": "иметь и проводить время с кем-то или чем-то"},"def":{"de":"Sie <b>verbringt</b> jedes Wochenende mit ihrem Hund, <g>damit</g> er genug Bewegung bekommt.","en":"She <b>spends</b> every weekend with her dog <g>so that</g> it gets enough exercise.","uk":"Вона <b>проводить</b> кожні вихідні зі своїм собакою, <g>щоб</g> той отримував достатньо руху.","ru":"Она <b>проводит</b> каждые выходные со своей собакой, <g>чтобы</g> та получала достаточно движения."},"gram":"nebensatz_mit_damit"},
  {"id":"k15_001","cat":"k15","term":{"de":"das Amt","en":"office, authority","uk":"установа, відомство","ru":"учреждение, ведомство"},"short":{"de": "eine staatliche Stelle, die für bestimmte Aufgaben zuständig ist","en": "a government office responsible for certain tasks","uk": "державна установа, відповідальна за певні завдання","ru": "государственное учреждение, отвечающее за определённые задачи"},"def":{"de":"Ich weiß nicht, <g><b>wo</b></g> sich das zuständige <b>Amt</b> befindet.","en":"I don't know <g><b>where</b></g> the responsible <b>office</b> is located.","uk":"Я не знаю, <g><b>де</b></g> знаходиться відповідна <b>установа</b>.","ru":"Я не знаю, <g><b>где</b></g> находится соответствующее <b>учреждение</b>."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_002","cat":"k15","term":{"de":"die Behörde","en":"authority, agency","uk":"орган влади","ru":"орган власти"},"short":{"de": "eine offizielle staatliche Organisation","en": "an official state organisation","uk": "офіційна державна організація","ru": "официальная государственная организация"},"def":{"de":"Er fragt, <g><b>welche</b></g> <b>Behörde</b> für seinen Antrag zuständig ist.","en":"He asks <g><b>which</b></g> <b>authority</b> is responsible for his application.","uk":"Він запитує, <g><b>яке</b></g> <b>відомство</b> відповідає за його заяву.","ru":"Он спрашивает, <g><b>какое</b></g> <b>ведомство</b> отвечает за его заявление."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_003","cat":"k15","term":{"de":"beantragen","en":"to apply for (formally)","uk":"подавати заяву (офіційно)","ru":"подавать заявление (официально)"},"short":{"de": "offiziell um etwas bitten, meistens mit einem Formular","en": "to officially ask for something, usually with a form","uk": "офіційно просити щось, зазвичай через бланк","ru": "официально просить что-то, обычно через бланк"},"def":{"de":"Sie fragt, <g><b>wie</b></g> man einen neuen Ausweis <b>beantragen</b> kann.","en":"She asks <g><b>how</b></g> you can <b>apply for</b> a new ID card.","uk":"Вона запитує, <g><b>як</b></g> можна <b>подати заяву</b> на новий документ.","ru":"Она спрашивает, <g><b>как</b></g> можно <b>подать заявление</b> на новый документ."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_004","cat":"k15","term":{"de":"der Antrag","en":"application, request","uk":"заява, клопотання","ru":"заявление, ходатайство"},"short":{"de": "ein offizielles Formular oder eine Bitte an ein Amt","en": "an official form or request to an office","uk": "офіційний бланк або прохання до установи","ru": "официальный бланк или просьба в учреждение"},"def":{"de":"Niemand weiß genau, <g><b>wann</b></g> der <b>Antrag</b> bearbeitet wird.","en":"Nobody knows exactly <g><b>when</b></g> the <b>application</b> will be processed.","uk":"Ніхто точно не знає, <g><b>коли</b></g> розглянуть <b>заяву</b>.","ru":"Никто точно не знает, <g><b>когда</b></g> рассмотрят <b>заявление</b>."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_005","cat":"k15","term":{"de":"das Formular","en":"form","uk":"бланк","ru":"бланк"},"short":{"de": "ein Papier oder eine Internetseite mit Feldern, die man ausfüllen muss","en": "a paper or website with fields that you have to fill in","uk": "папір або сайт з полями, які треба заповнити","ru": "бумага или сайт с полями, которые нужно заполнить"},"def":{"de":"Können Sie mir zeigen, <g><b>welches</b></g> <b>Formular</b> ich brauche?","en":"Can you show me <g><b>which</b></g> <b>form</b> I need?","uk":"Чи можете ви показати мені, <g><b>який</b></g> <b>бланк</b> мені потрібен?","ru":"Можете ли вы показать мне, <g><b>какой</b></g> <b>бланк</b> мне нужен?"},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_006","cat":"k15","term":{"de":"ausfüllen","en":"to fill out","uk":"заповнювати","ru":"заполнять"},"short":{"de": "die Felder in einem Formular mit Informationen schreiben","en": "to write information in the fields of a form","uk": "вписувати інформацію в поля бланка","ru": "вписывать информацию в поля бланка"},"def":{"de":"Er fragt, <g><b>wie</b></g> man dieses Formular richtig <b>ausfüllt</b>.","en":"He asks <g><b>how</b></g> to <b>fill out</b> this form correctly.","uk":"Він запитує, <g><b>як</b></g> правильно <b>заповнити</b> цей бланк.","ru":"Он спрашивает, <g><b>как</b></g> правильно <b>заполнить</b> этот бланк."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_007","cat":"k15","term":{"de":"der Führerschein","en":"driving licence","uk":"водійське посвідчення","ru":"водительские права"},"short":{"de": "ein Dokument, das zeigt, dass man Auto fahren darf","en": "a document that shows you are allowed to drive a car","uk": "документ, що дозволяє керувати автомобілем","ru": "документ, разрешающий управлять автомобилем"},"def":{"de":"Sie fragt, <g><b>ob</b></g> ihr ausländischer <b>Führerschein</b> in Deutschland gültig ist.","en":"She asks <g><b>whether</b></g> her foreign <b>driving licence</b> is valid in Germany.","uk":"Вона запитує, <g><b>чи</b></g> дійсні її іноземні <b>водійські права</b> в Німеччині.","ru":"Она спрашивает, <g><b>действительны ли</b></g> её иностранные <b>водительские права</b> в Германии."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_008","cat":"k15","term":{"de":"die Fahrschule","en":"driving school","uk":"автошкола","ru":"автошкола"},"short":{"de": "ein Ort, an dem man das Autofahren lernt","en": "a place where you learn to drive","uk": "заклад, де навчаються керувати автомобілем","ru": "заведение, где учатся водить автомобиль"},"def":{"de":"Ich weiß nicht, <g><b>ob</b></g> diese <b>Fahrschule</b> auch Kurse auf Englisch anbietet.","en":"I don't know <g><b>whether</b></g> this <b>driving school</b> also offers courses in English.","uk":"Я не знаю, <g><b>чи</b></g> ця <b>автошкола</b> пропонує курси англійською.","ru":"Я не знаю, <g><b>предлагает ли</b></g> эта <b>автошкола</b> курсы на английском."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_009","cat":"k15","term":{"de":"der Bußgeldbescheid","en":"fine notice","uk":"повідомлення про штраф","ru":"уведомление о штрафе"},"short":{"de": "ein Brief vom Amt, der sagt, dass man eine Strafe zahlen muss","en": "a letter from the authorities saying you have to pay a fine","uk": "лист від органів, у якому вказано, що треба сплатити штраф","ru": "письмо от органов, в котором указано, что нужно заплатить штраф"},"def":{"de":"Er fragt, <g><b>ob</b></g> man gegen einen <b>Bußgeldbescheid</b> Widerspruch einlegen kann.","en":"He asks <g><b>whether</b></g> you can appeal against a <b>fine notice</b>.","uk":"Він запитує, <g><b>чи</b></g> можна оскаржити <b>повідомлення про штраф</b>.","ru":"Он спрашивает, <g><b>можно ли</b></g> оспорить <b>уведомление о штрафе</b>."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_010","cat":"k15","term":{"de":"verlieren","en":"to lose","uk":"втрачати","ru":"терять"},"short":{"de": "etwas nicht mehr finden oder nicht mehr haben","en": "to no longer be able to find or have something","uk": "більше не знаходити або не мати чогось","ru": "больше не находить или не иметь что-то"},"def":{"de":"Sie fragt, <g><b>ob</b></g> jemand ihre <b>verlorene</b> Tasche im Bus gefunden hat.","en":"She asks <g><b>whether</b></g> anyone found her <b>lost</b> bag on the bus.","uk":"Вона запитує, <g><b>чи</b></g> хтось знайшов її <b>загублену</b> сумку в автобусі.","ru":"Она спрашивает, <g><b>нашёл ли</b></g> кто-нибудь её <b>потерянную</b> сумку в автобусе."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_011","cat":"k15","term":{"de":"der Verlust","en":"loss","uk":"втрата","ru":"потеря"},"short":{"de": "wenn man etwas nicht mehr hat, weil man es verloren hat","en": "when you no longer have something because you lost it","uk": "коли вже не маєш чогось, бо загубив","ru": "когда уже не имеешь чего-то, потому что потерял"},"def":{"de":"Er weiß nicht, <g><b>ob</b></g> man den <b>Verlust</b> des Ausweises melden muss.","en":"He doesn't know <g><b>whether</b></g> you have to report the <b>loss</b> of your ID card.","uk":"Він не знає, <g><b>чи</b></g> треба повідомляти про <b>втрату</b> документа.","ru":"Он не знает, <g><b>нужно ли</b></g> сообщать о <b>потере</b> документа."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_012","cat":"k15","term":{"de":"das Fundbüro","en":"lost-property office","uk":"бюро знахідок","ru":"бюро находок"},"short":{"de": "ein Ort, an dem man verlorene Sachen abgeben oder abholen kann","en": "a place where you can hand in or pick up lost items","uk": "місце, де можна здати або забрати загублені речі","ru": "место, где можно сдать или забрать потерянные вещи"},"def":{"de":"Sie ruft an und fragt, <g><b>ob</b></g> das <b>Fundbüro</b> ihre Schlüssel hat.","en":"She calls and asks <g><b>whether</b></g> the <b>lost-property office</b> has her keys.","uk":"Вона телефонує й запитує, <g><b>чи</b></g> є в <b>бюро знахідок</b> її ключі.","ru":"Она звонит и спрашивает, <g><b>есть ли</b></g> в <b>бюро находок</b> её ключи."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_013","cat":"k15","term":{"de":"die Unterlage","en":"document","uk":"документ","ru":"документ"},"short":{"de": "ein Dokument, das man für ein Amt braucht","en": "a document you need for an office","uk": "документ, потрібний для установи","ru": "документ, необходимый для учреждения"},"def":{"de":"Er fragt, <g><b>welche</b></g> <b>Unterlagen</b> er für den Antrag mitbringen muss.","en":"He asks <g><b>which</b></g> <b>documents</b> he needs to bring for the application.","uk":"Він запитує, <g><b>які</b></g> <b>документи</b> треба принести для заяви.","ru":"Он спрашивает, <g><b>какие</b></g> <b>документы</b> нужно принести для заявления."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_014","cat":"k15","term":{"de":"die Anmeldung","en":"registration","uk":"реєстрація","ru":"регистрация"},"short":{"de": "wenn man sich offiziell irgendwo registriert","en": "when you officially register somewhere","uk": "коли офіційно реєструєшся десь","ru": "когда официально регистрируешься где-то"},"def":{"de":"Sie fragt, <g><b>ob</b></g> die <b>Anmeldung</b> auch online möglich ist.","en":"She asks <g><b>whether</b></g> the <b>registration</b> is also possible online.","uk":"Вона запитує, <g><b>чи</b></g> можлива <b>реєстрація</b> також онлайн.","ru":"Она спрашивает, <g><b>возможна ли</b></g> <b>регистрация</b> также онлайн."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_015","cat":"k15","term":{"de":"sich anmelden","en":"to register","uk":"реєструватися","ru":"регистрироваться"},"short":{"de": "sich offiziell irgendwo registrieren","en": "to officially register somewhere","uk": "офіційно реєструватися десь","ru": "официально регистрироваться где-то"},"def":{"de":"Ich weiß nicht, <g><b>wo</b></g> ich mich in dieser Stadt <b>anmelden</b> muss.","en":"I don't know <g><b>where</b></g> I need to <b>register</b> in this city.","uk":"Я не знаю, <g><b>де</b></g> мені треба <b>зареєструватися</b> у цьому місті.","ru":"Я не знаю, <g><b>где</b></g> мне нужно <b>зарегистрироваться</b> в этом городе."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_016","cat":"k15","term":{"de":"nachfragen","en":"to ask again, to follow up","uk":"перепитувати, уточнювати","ru":"переспрашивать, уточнять"},"short":{"de": "noch einmal fragen, um etwas genauer zu verstehen","en": "to ask again in order to understand something more precisely","uk": "перепитати ще раз, щоб краще зрозуміти","ru": "переспросить ещё раз, чтобы лучше понять"},"def":{"de":"Er weiß nicht, <g><b>bei wem</b></g> er wegen des Formulars <b>nachfragen</b> soll.","en":"He doesn't know <g><b>who</b></g> he should <b>ask again</b> about the form.","uk":"Він не знає, <g><b>у кого</b></g> йому <b>перепитати</b> щодо бланка.","ru":"Он не знает, <g><b>у кого</b></g> ему <b>переспросить</b> насчёт бланка."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_017","cat":"k15","term":{"de":"die Auskunft","en":"information","uk":"довідка, інформація","ru":"справка, информация"},"short":{"de": "eine Information, die man von einer Person oder einem Amt bekommt","en": "information that you get from a person or an office","uk": "інформація, яку отримують від особи чи установи","ru": "информация, которую получают от человека или учреждения"},"def":{"de":"Sie fragt, <g><b>ob</b></g> man am Schalter eine kostenlose <b>Auskunft</b> bekommt.","en":"She asks <g><b>whether</b></g> you can get free <b>information</b> at the counter.","uk":"Вона запитує, <g><b>чи</b></g> можна отримати безкоштовну <b>довідку</b> на стійці.","ru":"Она спрашивает, <g><b>можно ли</b></g> получить бесплатную <b>справку</b> у стойки."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_018","cat":"k15","term":{"de":"die Regelung","en":"regulation","uk":"регулювання, порядок","ru":"регулирование, порядок"},"short":{"de": "eine offizielle Regel, die für alle gilt","en": "an official rule that applies to everyone","uk": "офіційне правило, яке стосується всіх","ru": "официальное правило, которое касается всех"},"def":{"de":"Niemand weiß genau, <g><b>welche</b></g> <b>Regelung</b> jetzt für den Führerschein gilt.","en":"Nobody knows exactly <g><b>which</b></g> <b>regulation</b> now applies to the driving licence.","uk":"Ніхто точно не знає, <g><b>яке</b></g> <b>правило</b> тепер діє щодо водійських прав.","ru":"Никто точно не знает, <g><b>какое</b></g> <b>правило</b> теперь действует в отношении водительских прав."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_019","cat":"k15","term":{"de":"der Termin","en":"appointment","uk":"запис на прийом, термін","ru":"запись на приём, срок"},"short":{"de": "eine vereinbarte Zeit, zu der man irgendwo sein muss","en": "an arranged time when you have to be somewhere","uk": "домовлений час, коли треба десь бути","ru": "договорённое время, когда нужно где-то быть"},"def":{"de":"Er fragt, <g><b>ob</b></g> er den <b>Termin</b> beim Amt online buchen kann.","en":"He asks <g><b>whether</b></g> he can book the <b>appointment</b> at the office online.","uk":"Він запитує, <g><b>чи</b></g> можна забронювати <b>запис</b> в установі онлайн.","ru":"Он спрашивает, <g><b>можно ли</b></g> забронировать <b>запись</b> в учреждении онлайн."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_020","cat":"k15","term":{"de":"die Reihenfolge","en":"order, sequence","uk":"послідовність","ru":"последовательность"},"short":{"de": "die Ordnung, in der Dinge oder Menschen nacheinander kommen","en": "the order in which things or people come one after another","uk": "порядок, у якому речі чи люди йдуть одне за одним","ru": "порядок, в котором вещи или люди идут друг за другом"},"def":{"de":"Sie fragt, in <g><b>welcher</b></g> <b>Reihenfolge</b> sie die Formulare ausfüllen soll.","en":"She asks in <g><b>which</b></g> <b>order</b> she should fill in the forms.","uk":"Вона запитує, у <g><b>якій</b></g> <b>послідовності</b> їй заповнювати бланки.","ru":"Она спрашивает, в <g><b>какой</b></g> <b>последовательности</b> ей заполнять бланки."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k16_001","cat":"k16","term":{"de":"das Fest","en":"celebration, party","uk":"свято","ru":"праздник"},"short":{"de": "eine große Feier, oft mit vielen Gästen","en": "a big celebration, often with many guests","uk": "велике святкування, часто з багатьма гостями","ru": "большое торжество, часто со множеством гостей"},"def":{"de":"Sie organisieren ein <b>Fest</b>, <g>weil</g> die Firma zehn Jahre alt wird.","en":"They are organising a <b>party</b> <g>because</g> the company is turning ten.","uk":"Вони організовують <b>свято</b>, <g>тому що</g> фірмі виповнюється десять років.","ru":"Они организуют <b>праздник</b>, <g>потому что</g> фирме исполняется десять лет."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_002","cat":"k16","term":{"de":"feiern","en":"to celebrate","uk":"святкувати","ru":"праздновать"},"short":{"de": "ein besonderes Ereignis mit anderen Menschen fröhlich begehen","en": "to joyfully mark a special event with other people","uk": "радісно відзначати особливу подію з іншими людьми","ru": "радостно отмечать особое событие с другими людьми"},"def":{"de":"Wir <b>feiern</b> heute Abend, <g>obwohl</g> wir morgen früh aufstehen müssen.","en":"We are <b>celebrating</b> tonight, <g>although</g> we have to get up early tomorrow.","uk":"Ми сьогодні <b>святкуємо</b>, <g>хоча</g> завтра треба рано вставати.","ru":"Мы сегодня <b>празднуем</b>, <g>хотя</g> завтра нужно рано вставать."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_003","cat":"k16","term":{"de":"die Feier","en":"celebration, party","uk":"святкування","ru":"торжество"},"short":{"de": "ein Ereignis, bei dem man etwas Besonderes fröhlich begeht","en": "an event where something special is joyfully marked","uk": "подія, під час якої радісно відзначають щось особливе","ru": "событие, во время которого радостно отмечают что-то особенное"},"def":{"de":"Die <b>Feier</b> beginnt erst um acht, <g>deshalb</g> haben wir noch Zeit.","en":"The <b>party</b> only starts at eight, <g>so</g> we still have time.","uk":"<b>Святкування</b> починається лише о восьмій, <g>тому</g> в нас ще є час.","ru":"<b>Торжество</b> начинается только в восемь, <g>поэтому</g> у нас ещё есть время."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_004","cat":"k16","term":{"de":"planen","en":"to plan","uk":"планувати","ru":"планировать"},"short":{"de": "im Voraus überlegen, was und wie man etwas machen möchte","en": "to think in advance about what and how you want to do something","uk": "заздалегідь продумувати, що і як робити","ru": "заранее продумывать, что и как делать"},"def":{"de":"Sie <b>plant</b> die Feier sorgfältig, <g>damit</g> alles gut läuft.","en":"She <b>plans</b> the party carefully <g>so that</g> everything goes well.","uk":"Вона ретельно <b>планує</b> свято, <g>щоб</g> усе пройшло добре.","ru":"Она тщательно <b>планирует</b> праздник, <g>чтобы</g> всё прошло хорошо."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_005","cat":"k16","term":{"de":"die Planung","en":"planning","uk":"планування","ru":"планирование"},"short":{"de": "das Überlegen im Voraus, was und wie man etwas machen möchte","en": "the advance thinking about what and how you want to do something","uk": "заздалегідне продумування того, що і як робити","ru": "заблаговременное продумывание того, что и как делать"},"def":{"de":"Die <b>Planung</b> dauert lange, <g>weil</g> viele Gäste eingeladen werden.","en":"The <b>planning</b> takes a long time <g>because</g> many guests are being invited.","uk":"<b>Планування</b> триває довго, <g>тому що</g> запрошують багато гостей.","ru":"<b>Планирование</b> занимает много времени, <g>потому что</g> приглашают много гостей."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_006","cat":"k16","term":{"de":"vorschlagen","en":"to suggest","uk":"пропонувати","ru":"предлагать"},"short":{"de": "eine Idee präsentieren, über die andere entscheiden sollen","en": "to present an idea for others to decide on","uk": "запропонувати ідею, щодо якої мають вирішити інші","ru": "предложить идею, по поводу которой должны решить другие"},"def":{"de":"Er <b>schlägt vor</b>, <g>dass</g> sie das Fest im Garten feiern.","en":"He <b>suggests</b> <g>that</g> they celebrate the party in the garden.","uk":"Він <b>пропонує</b>, <g>щоб</g> вони святкували у саду.","ru":"Он <b>предлагает</b>, <g>чтобы</g> они праздновали в саду."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_007","cat":"k16","term":{"de":"die Einladung","en":"invitation","uk":"запрошення","ru":"приглашение"},"short":{"de": "eine Bitte an jemanden, zu einem Fest oder Treffen zu kommen","en": "a request for someone to come to a party or meeting","uk": "прохання до когось прийти на свято чи зустріч","ru": "просьба к кому-то прийти на праздник или встречу"},"def":{"de":"Sie schickt die <b>Einladungen</b> früh, <g>damit</g> alle rechtzeitig planen können.","en":"She sends the <b>invitations</b> early <g>so that</g> everyone can plan in time.","uk":"Вона розсилає <b>запрошення</b> заздалегідь, <g>щоб</g> усі встигли спланувати.","ru":"Она рассылает <b>приглашения</b> заранее, <g>чтобы</g> все успели спланировать."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_008","cat":"k16","term":{"de":"einladen","en":"to invite","uk":"запрошувати","ru":"приглашать"},"short":{"de": "jemanden bitten, zu einem Fest oder Treffen zu kommen","en": "to ask someone to come to a party or meeting","uk": "просити когось прийти на свято чи зустріч","ru": "просить кого-то прийти на праздник или встречу"},"def":{"de":"Wir <b>laden</b> alle Nachbarn <b>ein</b>, <g>weil</g> wir ein gutes Verhältnis zu ihnen haben.","en":"We <b>invite</b> all the neighbours <g>because</g> we have a good relationship with them.","uk":"Ми <b>запрошуємо</b> всіх сусідів, <g>тому що</g> маємо з ними хороші стосунки.","ru":"Мы <b>приглашаем</b> всех соседей, <g>потому что</g> у нас с ними хорошие отношения."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_009","cat":"k16","term":{"de":"die Glückwunschkarte","en":"greeting card","uk":"листівка з вітанням","ru":"открытка с поздравлением"},"short":{"de": "eine Karte, mit der man jemandem zu einem Ereignis gratuliert","en": "a card used to congratulate someone on an event","uk": "листівка, якою вітають когось з подією","ru": "открытка, которой поздравляют кого-то с событием"},"def":{"de":"Sie schreibt eine <b>Glückwunschkarte</b>, <g>weil</g> ihre Freundin heiratet.","en":"She writes a <b>greeting card</b> <g>because</g> her friend is getting married.","uk":"Вона пише <b>листівку з вітанням</b>, <g>тому що</g> її подруга виходить заміж.","ru":"Она пишет <b>открытку с поздравлением</b>, <g>потому что</g> её подруга выходит замуж."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_010","cat":"k16","term":{"de":"gratulieren","en":"to congratulate","uk":"вітати","ru":"поздравлять"},"short":{"de": "jemandem sagen, dass man sich für ihn freut, wenn etwas Gutes passiert ist","en": "to tell someone you are happy for them when something good has happened","uk": "сказати комусь, що радієш за нього, коли сталося щось хороше","ru": "сказать кому-то, что радуешься за него, когда произошло что-то хорошее"},"def":{"de":"Wir <b>gratulieren</b> ihr herzlich, <g>weil</g> sie die Prüfung bestanden hat.","en":"We <b>congratulate</b> her warmly <g>because</g> she passed the exam.","uk":"Ми щиро <b>вітаємо</b> її, <g>тому що</g> вона склала іспит.","ru":"Мы сердечно <b>поздравляем</b> её, <g>потому что</g> она сдала экзамен."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_011","cat":"k16","term":{"de":"der Glückwunsch","en":"congratulations","uk":"вітання","ru":"поздравление"},"short":{"de": "freundliche Worte, mit denen man sich für jemanden freut","en": "friendly words used to show you are happy for someone","uk": "приємні слова, якими висловлюють радість за когось","ru": "приятные слова, которыми выражают радость за кого-то"},"def":{"de":"Herzlichen <b>Glückwunsch</b>, <g>dass</g> du die Ausbildung abgeschlossen hast!","en":"Warm <b>congratulations</b> <g>that</g> you have finished your training!","uk":"Щирі <b>вітання</b> з тим, <g>що</g> ти завершив навчання!","ru":"Сердечные <b>поздравления</b> с тем, <g>что</g> ты завершил обучение!"},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_012","cat":"k16","term":{"de":"annehmen","en":"to accept","uk":"приймати (пропозицію)","ru":"принимать (предложение)"},"short":{"de": "ja zu einem Angebot oder Vorschlag sagen","en": "to say yes to an offer or suggestion","uk": "сказати «так» на пропозицію","ru": "сказать «да» на предложение"},"def":{"de":"Sie <b>nimmt</b> die Einladung <b>an</b>, <g>weil</g> sie sich auf das Fest freut.","en":"She <b>accepts</b> the invitation <g>because</g> she is looking forward to the party.","uk":"Вона <b>приймає</b> запрошення, <g>тому що</g> з нетерпінням чекає на свято.","ru":"Она <b>принимает</b> приглашение, <g>потому что</g> с нетерпением ждёт праздника."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_013","cat":"k16","term":{"de":"ablehnen","en":"to decline, to reject","uk":"відхиляти","ru":"отклонять"},"short":{"de": "nein zu einem Angebot oder Vorschlag sagen","en": "to say no to an offer or suggestion","uk": "сказати «ні» на пропозицію","ru": "сказать «нет» на предложение"},"def":{"de":"Er <b>lehnt</b> die Einladung <b>ab</b>, <g>weil</g> er an diesem Tag arbeiten muss.","en":"He <b>declines</b> the invitation <g>because</g> he has to work that day.","uk":"Він <b>відхиляє</b> запрошення, <g>тому що</g> того дня має працювати.","ru":"Он <b>отклоняет</b> приглашение, <g>потому что</g> в тот день должен работать."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_014","cat":"k16","term":{"de":"die Tradition","en":"tradition","uk":"традиція","ru":"традиция"},"short":{"de": "ein Brauch, den man schon lange, meistens seit Generationen, macht","en": "a custom that has been practised for a long time, usually for generations","uk": "звичай, який роблять давно, зазвичай поколіннями","ru": "обычай, который выполняют давно, обычно поколениями"},"def":{"de":"Diese <b>Tradition</b> gibt es schon lange, <g>obwohl</g> viele junge Leute sie nicht mehr kennen.","en":"This <b>tradition</b> has existed for a long time, <g>although</g> many young people no longer know it.","uk":"Ця <b>традиція</b> існує вже давно, <g>хоча</g> багато молодих людей її вже не знають.","ru":"Эта <b>традиция</b> существует уже давно, <g>хотя</g> многие молодые люди её уже не знают."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_015","cat":"k16","term":{"de":"weltweit","en":"worldwide","uk":"у всьому світі","ru":"по всему миру"},"short":{"de": "auf der ganzen Welt, überall","en": "all over the world, everywhere","uk": "у всьому світі, скрізь","ru": "во всём мире, повсюду"},"def":{"de":"Dieses Fest wird <b>weltweit</b> gefeiert, <g>obwohl</g> es unterschiedliche Bräuche gibt.","en":"This festival is celebrated <b>worldwide</b>, <g>although</g> there are different customs.","uk":"Це свято святкують <b>у всьому світі</b>, <g>хоча</g> існують різні звичаї.","ru":"Этот праздник отмечают <b>по всему миру</b>, <g>хотя</g> существуют разные обычаи."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_016","cat":"k16","term":{"de":"die Silvesterfeier","en":"New Year's Eve party","uk":"новорічна вечірка (31 грудня)","ru":"новогодняя вечеринка (31 декабря)"},"short":{"de": "ein Fest in der Nacht vom 31. Dezember auf den 1. Januar","en": "a party on the night of 31 December to 1 January","uk": "свято в ніч з 31 грудня на 1 січня","ru": "праздник в ночь с 31 декабря на 1 января"},"def":{"de":"Wir gehen zur <b>Silvesterfeier</b>, <g>weil</g> unsere Freunde uns eingeladen haben.","en":"We are going to the <b>New Year's Eve party</b> <g>because</g> our friends invited us.","uk":"Ми йдемо на <b>новорічну вечірку</b>, <g>тому що</g> нас запросили друзі.","ru":"Мы идём на <b>новогоднюю вечеринку</b>, <g>потому что</g> нас пригласили друзья."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_017","cat":"k16","term":{"de":"traurig","en":"sad","uk":"сумний","ru":"грустный"},"short":{"de": "ein Gefühl, wenn man nicht glücklich, sondern eher weinen möchte","en": "a feeling when you are not happy, but rather feel like crying","uk": "почуття, коли не радісно, а хочеться плакати","ru": "чувство, когда не радостно, а хочется плакать"},"def":{"de":"Sie ist ein bisschen <b>traurig</b>, <g>weil</g> das Fest schon vorbei ist.","en":"She is a little <b>sad</b> <g>because</g> the party is already over.","uk":"Вона трохи <b>сумна</b>, <g>тому що</g> свято вже закінчилося.","ru":"Она немного <b>грустная</b>, <g>потому что</g> праздник уже закончился."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_018","cat":"k16","term":{"de":"der Vorschlag","en":"suggestion","uk":"пропозиція","ru":"предложение"},"short":{"de": "eine Idee, die man präsentiert, damit andere darüber entscheiden","en": "an idea that you present for others to decide on","uk": "ідея, яку пропонують, щоб інші вирішили щодо неї","ru": "идея, которую предлагают, чтобы другие решили по ней"},"def":{"de":"Ihr <b>Vorschlag</b> gefällt allen, <g>obwohl</g> er etwas teuer ist.","en":"Everyone likes her <b>suggestion</b>, <g>although</g> it is a bit expensive.","uk":"Її <b>пропозиція</b> подобається всім, <g>хоча</g> вона трохи дорога.","ru":"Её <b>предложение</b> нравится всем, <g>хотя</g> оно немного дорогое."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_019","cat":"k16","term":{"de":"danken","en":"to thank","uk":"дякувати","ru":"благодарить"},"short":{"de": "zu jemandem sagen, dass man froh über seine Hilfe oder sein Geschenk ist","en": "to tell someone you are happy about their help or gift","uk": "сказати комусь, що радий його допомозі чи подарунку","ru": "сказать кому-то, что рад его помощи или подарку"},"def":{"de":"Wir <b>danken</b> allen Gästen, <g>weil</g> sie so schöne Geschenke mitgebracht haben.","en":"We <b>thank</b> all the guests <g>because</g> they brought such nice gifts.","uk":"Ми <b>дякуємо</b> всім гостям, <g>тому що</g> вони принесли такі гарні подарунки.","ru":"Мы <b>благодарим</b> всех гостей, <g>потому что</g> они принесли такие красивые подарки."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"k16_020","cat":"k16","term":{"de":"wünschen","en":"to wish","uk":"бажати","ru":"желать"},"short":{"de": "Sagen, was man für jemanden Gutes möchte","en": "to say what good things you want for someone","uk": "казати, чого хорошого бажаєш комусь","ru": "говорить, чего хорошего желаешь кому-то"},"def":{"de":"Ich <b>wünsche</b> dir alles Gute, <g>weil</g> du morgen deinen großen Tag hast.","en":"I <b>wish</b> you all the best <g>because</g> tomorrow is your big day.","uk":"Я <b>бажаю</b> тобі всього найкращого, <g>тому що</g> завтра в тебе важливий день.","ru":"Я <b>желаю</b> тебе всего наилучшего, <g>потому что</g> завтра у тебя важный день."},"gram":"nebensaetze_konnektoren_wdh"}
];

var DIALOGE = [
  {
    "id": "dlg_001",
    "cat": "Sich vorstellen",
    "q": {
      "de": "Wie heißen Sie und woher kommen Sie?",
      "en": "What is your name and where are you from?",
      "uk": "Як вас звати і звідки ви?",
      "ru": "Как вас зовут и откуда вы?"
    },
    "a": {
      "de": "Ich heiße Amina und komme aus Marokko. Ich wohne jetzt in Köln.",
      "en": "My name is Amina and I come from Morocco. I live in Cologne now.",
      "uk": "Мене звати Аміна, я з Марокко. Тепер я живу в Кельні.",
      "ru": "Меня зовут Амина, я из Марокко. Теперь я живу в Кёльне."
    },
    "gram": ""
  },
  {
    "id": "dlg_002",
    "cat": "Sich vorstellen",
    "q": {
      "de": "Seit wann arbeiten Sie in dieser Firma?",
      "en": "Since when have you been working at this company?",
      "uk": "Відколи ви працюєте у цій фірмі?",
      "ru": "С каких пор вы работаете в этой фирме?"
    },
    "a": {
      "de": "Ich arbeite erst seit <g>einer Woche</g> hier. Ich bin noch neu im Team.",
      "en": "I have only been working here <g>for a week</g>. I am still new to the team.",
      "uk": "Я працюю тут лише тиждень. Я ще новенький у команді.",
      "ru": "Я работаю здесь только неделю. Я ещё новенький в команде."
    },
    "gram": "temporale_praepositionen"
  },
  {
    "id": "dlg_003",
    "cat": "Sich vorstellen",
    "q": {
      "de": "Duzen wir uns oder sollen wir uns siezen?",
      "en": "Shall we use „du“ with each other, or should we use „Sie“?",
      "uk": "Ми говоримо на «ти» чи краще на «ви»?",
      "ru": "Мы на «ты» друг с другом или лучше на «вы»?"
    },
    "a": {
      "de": "Wir duzen uns hier im Team, das ist ganz normal.",
      "en": "We use „du“ here in the team, that is quite normal.",
      "uk": "У нашій команді всі на «ти», це звичайна справа.",
      "ru": "В нашей команде все на «ты», это обычное дело."
    },
    "gram": ""
  },
  {
    "id": "dlg_004",
    "cat": "Sich vorstellen",
    "q": {
      "de": "<g>Können</g> Sie mir kurz helfen? Ich finde mein Büro nicht.",
      "en": "<g>Can</g> you help me for a moment? I can't find my office.",
      "uk": "Чи <g>можете</g> ви мені трохи допомогти? Я не можу знайти свій офіс.",
      "ru": "Не <g>могли бы</g> вы мне немного помочь? Я не могу найти свой офис."
    },
    "a": {
      "de": "Ja, natürlich. Ich zeige Ihnen gern den Weg.",
      "en": "Yes, of course. I will gladly show you the way.",
      "uk": "Так, звичайно. Я із задоволенням покажу вам дорогу.",
      "ru": "Да, конечно. Я с удовольствием покажу вам дорогу."
    },
    "gram": "modalverben"
  },
  {
    "id": "dlg_005",
    "cat": "Wohnungssuche und Umzug",
    "q": {
      "de": "Warum ziehst du um?",
      "en": "Why are you moving?",
      "uk": "Чому ти переїжджаєш?",
      "ru": "Почему ты переезжаешь?"
    },
    "a": {
      "de": "Meine alte Wohnung ist zu klein, deshalb suche ich ein größeres Zimmer.",
      "en": "My old apartment is too small, that's why I am looking for a bigger room.",
      "uk": "Моя стара квартира замала, тому я шукаю більшу кімнату.",
      "ru": "Моя старая квартира слишком маленькая, поэтому я ищу комнату побольше."
    },
    "gram": ""
  },
  {
    "id": "dlg_006",
    "cat": "Wohnungssuche und Umzug",
    "q": {
      "de": "Wo soll ich den Schrank hinstellen?",
      "en": "Where should I put the cupboard?",
      "uk": "Куди мені поставити шафу?",
      "ru": "Куда мне поставить шкаф?"
    },
    "a": {
      "de": "Stell ihn bitte <g>neben das Fenster</g>, da ist genug Platz.",
      "en": "Please put it next to the window, there is enough space there.",
      "uk": "Постав її, будь ласка, біля вікна, там достатньо місця.",
      "ru": "Поставь его, пожалуйста, у окна, там достаточно места."
    },
    "gram": "wechselpraepositionen"
  },
  {
    "id": "dlg_007",
    "cat": "Wohnungssuche und Umzug",
    "q": {
      "de": "Wie hoch ist die Miete für die Wohnung?",
      "en": "How much is the rent for the apartment?",
      "uk": "Яка орендна плата за квартиру?",
      "ru": "Какая арендная плата за квартиру?"
    },
    "a": {
      "de": "Die Miete beträgt 650 Euro im Monat, mit Nebenkosten.",
      "en": "The rent is 650 euros per month, including additional costs.",
      "uk": "Орендна плата становить 650 євро на місяць, з комунальними послугами.",
      "ru": "Арендная плата составляет 650 евро в месяц, с коммунальными услугами."
    },
    "gram": ""
  },
  {
    "id": "dlg_008",
    "cat": "Wohnungssuche und Umzug",
    "q": {
      "de": "Wer macht bei euch in der WG den Haushalt?",
      "en": "Who does the housework in your shared flat?",
      "uk": "Хто у вашій спільній квартирі виконує домашні справи?",
      "ru": "Кто в вашей квартире с соседями занимается домашними делами?"
    },
    "a": {
      "de": "Wir haben einen Plan: Jede Woche putzt eine andere Person die Küche.",
      "en": "We have a schedule: a different person cleans the kitchen every week.",
      "uk": "У нас є графік: щотижня кухню прибирає інша людина.",
      "ru": "У нас есть график: каждую неделю кухню убирает другой человек."
    },
    "gram": ""
  },
  {
    "id": "dlg_009",
    "cat": "Über Arbeit und Freizeit sprechen",
    "q": {
      "de": "Was machst du in deiner Freizeit am liebsten?",
      "en": "What do you like to do most in your free time?",
      "uk": "Що ти найбільше любиш робити у вільний час?",
      "ru": "Что ты больше всего любишь делать в свободное время?"
    },
    "a": {
      "de": "Ich spiele gern Fußball und treffe mich mit Freunden.",
      "en": "I like to play football and meet up with friends.",
      "uk": "Я люблю грати у футбол і зустрічатися з друзями.",
      "ru": "Я люблю играть в футбол и встречаться с друзьями."
    },
    "gram": ""
  },
  {
    "id": "dlg_010",
    "cat": "Über Arbeit und Freizeit sprechen",
    "q": {
      "de": "Hast du am Samstag Zeit für einen Termin?",
      "en": "Do you have time for an appointment on Saturday?",
      "uk": "У тебе є час на зустріч у суботу?",
      "ru": "У тебя есть время на встречу в субботу?"
    },
    "a": {
      "de": "Nein, am Samstag <g>muss</g> ich leider arbeiten. Geht es auch am Sonntag?",
      "en": "No, unfortunately I <g>have to</g> work on Saturday. Is Sunday also possible?",
      "uk": "Ні, у суботу мені, на жаль, <g>треба</g> працювати. А неділя підійде?",
      "ru": "Нет, в субботу мне, к сожалению, <g>нужно</g> работать. А воскресенье подойдёт?"
    },
    "gram": "modalverben"
  },
  {
    "id": "dlg_011",
    "cat": "Über Arbeit und Freizeit sprechen",
    "q": {
      "de": "Bist du Mitglied in einem Sportverein?",
      "en": "Are you a member of a sports club?",
      "uk": "Ти член якогось спортивного клубу?",
      "ru": "Ты член какого-нибудь спортивного клуба?"
    },
    "a": {
      "de": "Ja, ich bin seit <g>einem Jahr</g> im Schwimmverein.",
      "en": "Yes, I have been in the swimming club <g>for a year</g>.",
      "uk": "Так, я вже рік у клубі плавання.",
      "ru": "Да, я уже год в клубе плавания."
    },
    "gram": "temporale_praepositionen"
  },
  {
    "id": "dlg_012",
    "cat": "Über Arbeit und Freizeit sprechen",
    "q": {
      "de": "Warum kommst du heute später zur Arbeit?",
      "en": "Why are you coming to work later today?",
      "uk": "Чому ти сьогодні прийдеш на роботу пізніше?",
      "ru": "Почему ты сегодня придёшь на работу позже?"
    },
    "a": {
      "de": "Ich komme später, <g>weil</g> ich einen Arzttermin habe.",
      "en": "I am coming later <g>because</g> I have a doctor's appointment.",
      "uk": "Я прийду пізніше, <g>тому що</g> маю запис до лікаря.",
      "ru": "Я приду позже, <g>потому что</g> у меня запись к врачу."
    },
    "gram": "weil_satz"
  },
  {
    "id": "dlg_013",
    "cat": "Kleidung kaufen",
    "q": {
      "de": "Kann ich Ihnen helfen? Suchen Sie etwas Bestimmtes?",
      "en": "Can I help you? Are you looking for something specific?",
      "uk": "Чи можу я вам допомогти? Ви шукаєте щось конкретне?",
      "ru": "Могу я вам помочь? Вы ищете что-то конкретное?"
    },
    "a": {
      "de": "Ja, ich suche eine Hose in Größe 40, am liebsten in Blau.",
      "en": "Yes, I am looking for trousers in size 40, preferably in blue.",
      "uk": "Так, я шукаю штани розміру 40, бажано сині.",
      "ru": "Да, я ищу брюки размера 40, желательно синие."
    },
    "gram": ""
  },
  {
    "id": "dlg_014",
    "cat": "Kleidung kaufen",
    "q": {
      "de": "Welche Größe brauchen Sie?",
      "en": "What size do you need?",
      "uk": "Який розмір вам потрібен?",
      "ru": "Какой размер вам нужен?"
    },
    "a": {
      "de": "Ich glaube, Größe M passt mir am besten.",
      "en": "I think size M fits me best.",
      "uk": "Гадаю, розмір M пасує мені найкраще.",
      "ru": "Думаю, размер M подходит мне лучше всего."
    },
    "gram": ""
  },
  {
    "id": "dlg_015",
    "cat": "Kleidung kaufen",
    "q": {
      "de": "Wie gefällt Ihnen das Kleid?",
      "en": "How do you like the dress?",
      "uk": "Як вам ця сукня?",
      "ru": "Как вам это платье?"
    },
    "a": {
      "de": "Es gefällt mir gut, aber es ist mir ein bisschen zu eng.",
      "en": "I like it, but it is a bit too tight for me.",
      "uk": "Мені подобається, але вона трохи вузька для мене.",
      "ru": "Мне нравится, но оно немного узковато для меня."
    },
    "gram": ""
  },
  {
    "id": "dlg_016",
    "cat": "Kleidung kaufen",
    "q": {
      "de": "Wo finde ich die Umkleidekabine?",
      "en": "Where can I find the fitting room?",
      "uk": "Де знайти примірочну?",
      "ru": "Где найти примерочную?"
    },
    "a": {
      "de": "Die Umkleidekabine ist gleich hier links neben der Kasse.",
      "en": "The fitting room is right here on the left, next to the checkout.",
      "uk": "Примірочна тут ліворуч, біля каси.",
      "ru": "Примерочная здесь слева, рядом с кассой."
    },
    "gram": ""
  },
  {
    "id": "dlg_017",
    "cat": "Verkehrsmittel",
    "q": {
      "de": "Wie kommst du normalerweise zur Arbeit?",
      "en": "How do you normally get to work?",
      "uk": "Як ти зазвичай добираєшся на роботу?",
      "ru": "Как ты обычно добираешься до работы?"
    },
    "a": {
      "de": "Ich fahre meistens mit dem Fahrrad, das ist <g>schneller als</g> der Bus.",
      "en": "I usually go by bicycle, that is <g>faster than</g> the bus.",
      "uk": "Я зазвичай їжджу велосипедом, це <g>швидше, ніж</g> автобус.",
      "ru": "Я обычно езжу на велосипеде, это <g>быстрее, чем</g> автобус."
    },
    "gram": "komparativ"
  },
  {
    "id": "dlg_018",
    "cat": "Verkehrsmittel",
    "q": {
      "de": "Fährt dieser Bus zum Hauptbahnhof?",
      "en": "Does this bus go to the main station?",
      "uk": "Цей автобус їде до центрального вокзалу?",
      "ru": "Этот автобус едет до главного вокзала?"
    },
    "a": {
      "de": "Ja, dieser Bus fährt direkt zum Hauptbahnhof, in circa zehn Minuten.",
      "en": "Yes, this bus goes directly to the main station, in about ten minutes.",
      "uk": "Так, цей автобус їде прямо до центрального вокзалу, приблизно за десять хвилин.",
      "ru": "Да, этот автобус едет прямо до главного вокзала, примерно за десять минут."
    },
    "gram": ""
  },
  {
    "id": "dlg_019",
    "cat": "Verkehrsmittel",
    "q": {
      "de": "Warum nimmst du heute ein Taxi?",
      "en": "Why are you taking a taxi today?",
      "uk": "Чому ти сьогодні береш таксі?",
      "ru": "Почему ты сегодня берёшь такси?"
    },
    "a": {
      "de": "Ich nehme ein Taxi, <g>weil</g> es draußen sehr stark regnet.",
      "en": "I am taking a taxi <g>because</g> it is raining very heavily outside.",
      "uk": "Я беру таксі, <g>тому що</g> надворі дуже сильний дощ.",
      "ru": "Я беру такси, <g>потому что</g> на улице очень сильный дождь."
    },
    "gram": "weil_satz"
  },
  {
    "id": "dlg_020",
    "cat": "Verkehrsmittel",
    "q": {
      "de": "Ist die U-Bahn-Station barrierefrei?",
      "en": "Is the subway station accessible?",
      "uk": "Чи безбарʼєрна ця станція метро?",
      "ru": "Эта станция метро безбарьерная?"
    },
    "a": {
      "de": "Ja, es gibt einen Aufzug, deshalb ist die Station auch mit dem Rollstuhl gut erreichbar.",
      "en": "Yes, there is a lift, so the station is also easily accessible by wheelchair.",
      "uk": "Так, тут є ліфт, тому станція також добре доступна з інвалідним візком.",
      "ru": "Да, здесь есть лифт, поэтому станция также хорошо доступна с инвалидной коляской."
    },
    "gram": ""
  },
  {
    "id": "dlg_021",
    "cat": "Familie und Migration",
    "q": {
      "de": "Erzählen Sie mir etwas über Ihre Familie.",
      "en": "Tell me something about your family.",
      "uk": "Розкажіть мені щось про свою родину.",
      "ru": "Расскажите мне что-нибудь о своей семье."
    },
    "a": {
      "de": "Ich habe zwei Geschwister, und meine Eltern leben noch in meinem Heimatland.",
      "en": "I have two siblings, and my parents still live in my homeland.",
      "uk": "У мене є двоє братів і сестер, а мої батьки й досі живуть на моїй батьківщині.",
      "ru": "У меня двое братьев и сестёр, а мои родители до сих пор живут на моей родине."
    },
    "gram": ""
  },
  {
    "id": "dlg_022",
    "cat": "Familie und Migration",
    "q": {
      "de": "Wann sind Sie nach Deutschland gekommen?",
      "en": "When did you come to Germany?",
      "uk": "Коли ви приїхали до Німеччини?",
      "ru": "Когда вы приехали в Германию?"
    },
    "a": {
      "de": "Ich bin <g>vor drei Jahren</g> nach Deutschland gekommen.",
      "en": "I came to Germany <g>three years ago</g>.",
      "uk": "Я приїхав/приїхала до Німеччини три роки тому.",
      "ru": "Я приехал/приехала в Германию три года назад."
    },
    "gram": "temporale_praepositionen"
  },
  {
    "id": "dlg_023",
    "cat": "Familie und Migration",
    "q": {
      "de": "War es am Anfang schwer für Sie?",
      "en": "Was it difficult for you at the beginning?",
      "uk": "Чи було вам важко спочатку?",
      "ru": "Было ли вам трудно вначале?"
    },
    "a": {
      "de": "Ja, am Anfang war es schwer, <g>weil</g> ich die Sprache noch nicht gut konnte.",
      "en": "Yes, at the beginning it was hard <g>because</g> I could not yet speak the language well.",
      "uk": "Так, спочатку було важко, <g>тому що</g> я ще не дуже добре знав/знала мову.",
      "ru": "Да, сначала было трудно, <g>потому что</g> я ещё не очень хорошо знал/знала язык."
    },
    "gram": "weil_satz"
  },
  {
    "id": "dlg_024",
    "cat": "Familie und Migration",
    "q": {
      "de": "Wie oft besuchen Sie Ihr Heimatland?",
      "en": "How often do you visit your homeland?",
      "uk": "Як часто ви відвідуєте свою батьківщину?",
      "ru": "Как часто вы посещаете свою родину?"
    },
    "a": {
      "de": "Ich fliege einmal im Jahr nach Hause, um meine Familie zu besuchen.",
      "en": "I fly home once a year to visit my family.",
      "uk": "Я раз на рік літаю додому, щоб відвідати свою родину.",
      "ru": "Я раз в год летаю домой, чтобы навестить свою семью."
    },
    "gram": ""
  },
  {
    "id": "dlg_025",
    "cat": "Einen Ausflug planen",
    "q": {
      "de": "Hast du einen Vorschlag für unseren Ausflug am Wochenende?",
      "en": "Do you have a suggestion for our trip at the weekend?",
      "uk": "У тебе є пропозиція щодо нашої екскурсії на вихідних?",
      "ru": "У тебя есть предложение по поводу нашей поездки на выходных?"
    },
    "a": {
      "de": "Ich schlage vor, <g>dass</g> wir in den Zoo gehen.",
      "en": "I suggest <g>that</g> we go to the zoo.",
      "uk": "Я пропоную, <g>щоб</g> ми пішли в зоопарк.",
      "ru": "Я предлагаю, <g>чтобы</g> мы пошли в зоопарк."
    },
    "gram": "dass_satz"
  },
  {
    "id": "dlg_026",
    "cat": "Einen Ausflug planen",
    "q": {
      "de": "Wie wird das Wetter am Samstag?",
      "en": "What will the weather be like on Saturday?",
      "uk": "Якою буде погода в суботу?",
      "ru": "Какая погода будет в субботу?"
    },
    "a": {
      "de": "Laut Wetterbericht wird es sonnig und warm.",
      "en": "According to the weather forecast, it will be sunny and warm.",
      "uk": "Згідно з прогнозом погоди, буде сонячно і тепло.",
      "ru": "Согласно прогнозу погоды, будет солнечно и тепло."
    },
    "gram": ""
  },
  {
    "id": "dlg_027",
    "cat": "Einen Ausflug planen",
    "q": {
      "de": "Wo wart ihr letztes Wochenende?",
      "en": "Where were you last weekend?",
      "uk": "Де ви були минулих вихідних?",
      "ru": "Где вы были в прошлые выходные?"
    },
    "a": {
      "de": "Wir waren im Park und haben dort ein Picknick gemacht.",
      "en": "We were in the park and had a picnic there.",
      "uk": "Ми були в парку і влаштували там пікнік.",
      "ru": "Мы были в парке и устроили там пикник."
    },
    "gram": ""
  },
  {
    "id": "dlg_028",
    "cat": "Einen Ausflug planen",
    "q": {
      "de": "Sollen wir für den Ausflug ein Hotel buchen?",
      "en": "Should we book a hotel for the trip?",
      "uk": "Чи варто нам забронювати готель для екскурсії?",
      "ru": "Стоит ли нам забронировать отель для поездки?"
    },
    "a": {
      "de": "Nein, das ist nicht nötig, wir fahren nur für einen Tag.",
      "en": "No, that's not necessary, we are only going for one day.",
      "uk": "Ні, це не потрібно, ми їдемо лише на один день.",
      "ru": "Нет, это не нужно, мы едем только на один день."
    },
    "gram": ""
  },
  {
    "id": "dlg_029",
    "cat": "Nach dem Weg fragen",
    "q": {
      "de": "Entschuldigung, wie komme ich zum Brandenburger Tor?",
      "en": "Excuse me, how do I get to the Brandenburg Gate?",
      "uk": "Перепрошую, як мені дістатися до Бранденбурзьких воріт?",
      "ru": "Извините, как мне добраться до Бранденбургских ворот?"
    },
    "a": {
      "de": "Gehen Sie hier geradeaus und dann <g>an der Ampel</g> links.",
      "en": "Go straight ahead here and then left <g>at the traffic light</g>.",
      "uk": "Ідіть тут прямо, а потім ліворуч <g>на світлофорі</g>.",
      "ru": "Идите здесь прямо, а потом налево <g>на светофоре</g>."
    },
    "gram": "lokale_praepositionen"
  },
  {
    "id": "dlg_030",
    "cat": "Nach dem Weg fragen",
    "q": {
      "de": "Ist es weit von hier bis zum Museum?",
      "en": "Is it far from here to the museum?",
      "uk": "Чи далеко звідси до музею?",
      "ru": "Далеко отсюда до музея?"
    },
    "a": {
      "de": "Nein, es ist nicht weit, nur fünf Minuten zu Fuß.",
      "en": "No, it's not far, only a five-minute walk.",
      "uk": "Ні, недалеко, лише пʼять хвилин пішки.",
      "ru": "Нет, недалеко, всего пять минут пешком."
    },
    "gram": ""
  },
  {
    "id": "dlg_031",
    "cat": "Nach dem Weg fragen",
    "q": {
      "de": "Wo ist hier in der Nähe eine Apotheke?",
      "en": "Where is there a pharmacy nearby?",
      "uk": "Де тут поблизу аптека?",
      "ru": "Где здесь поблизости аптека?"
    },
    "a": {
      "de": "Die nächste Apotheke ist gleich um die Ecke, <g>neben dem Supermarkt</g>.",
      "en": "The nearest pharmacy is just around the corner, <g>next to the supermarket</g>.",
      "uk": "Найближча аптека одразу за рогом, <g>біля супермаркету</g>.",
      "ru": "Ближайшая аптека прямо за углом, <g>рядом с супермаркетом</g>."
    },
    "gram": "lokale_praepositionen"
  },
  {
    "id": "dlg_032",
    "cat": "Nach dem Weg fragen",
    "q": {
      "de": "Welche U-Bahn fährt zum Alexanderplatz?",
      "en": "Which subway goes to Alexanderplatz?",
      "uk": "Яке метро їде до Александерплац?",
      "ru": "Какое метро едет до Александерплац?"
    },
    "a": {
      "de": "Sie müssen die Linie 2 nehmen, die fährt direkt dorthin.",
      "en": "You have to take line 2, it goes directly there.",
      "uk": "Вам потрібна лінія 2, вона їде прямо туди.",
      "ru": "Вам нужна линия 2, она едет прямо туда."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_001",
    "cat": "Schule und Elternsprechtag",
    "q": {
      "de": "Wie war der erste Schultag deines Sohnes?",
      "en": "How was your son's first day at school?",
      "uk": "Як пройшов перший день у школі твого сина?",
      "ru": "Как прошёл первый день в школе у твоего сына?"
    },
    "a": {
      "de": "Er hat sich sehr gefreut, aber am Anfang war er auch ein bisschen nervös.",
      "en": "He was very happy, but at the beginning he was also a bit nervous.",
      "uk": "Він дуже зрадів, але спочатку трохи нервував.",
      "ru": "Он очень обрадовался, но сначала немного нервничал."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_002",
    "cat": "Schule und Elternsprechtag",
    "q": {
      "de": "Interessiert sich Ihre Tochter für Naturwissenschaften?",
      "en": "Is your daughter interested in natural sciences?",
      "uk": "Ваша донька цікавиться природничими науками?",
      "ru": "Ваша дочь интересуется естественными науками?"
    },
    "a": {
      "de": "Ja, sie <g><b>interessiert sich sehr für</b></g> Biologie und Chemie.",
      "en": "Yes, she <g><b>is very interested in</b></g> biology and chemistry.",
      "uk": "Так, вона дуже цікавиться біологією та хімією.",
      "ru": "Да, она очень интересуется биологией и химией."
    },
    "gram": "praepositionalverben"
  },
  {
    "id": "dlg_a22_003",
    "cat": "Schule und Elternsprechtag",
    "q": {
      "de": "Warum ärgert sich der Lehrer heute so sehr?",
      "en": "Why is the teacher so annoyed today?",
      "uk": "Чому вчитель сьогодні такий роздратований?",
      "ru": "Почему учитель сегодня такой раздражённый?"
    },
    "a": {
      "de": "Er <g><b>ärgert sich über</b></g> den Lärm in der Klasse.",
      "en": "He <g><b>is annoyed about</b></g> the noise in the classroom.",
      "uk": "Він дратується через шум у класі.",
      "ru": "Он раздражается из-за шума в классе."
    },
    "gram": "praepositionalverben"
  },
  {
    "id": "dlg_a22_004",
    "cat": "Schule und Elternsprechtag",
    "q": {
      "de": "Wie war der Elternsprechtag?",
      "en": "How was the parent-teacher conference?",
      "uk": "Як пройшли батьківські збори?",
      "ru": "Как прошло родительское собрание?"
    },
    "a": {
      "de": "Gut, die Lehrerin hat uns viel über die Fortschritte unseres Sohnes erzählt.",
      "en": "Good, the teacher told us a lot about our son's progress.",
      "uk": "Добре, вчителька багато розповіла нам про успіхи нашого сина.",
      "ru": "Хорошо, учительница много рассказала нам об успехах нашего сына."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_005",
    "cat": "Konflikte und Bitten",
    "q": {
      "de": "Warum streiten sich die Nachbarn schon wieder?",
      "en": "Why are the neighbours arguing again?",
      "uk": "Чому сусіди знову сваряться?",
      "ru": "Почему соседи снова ссорятся?"
    },
    "a": {
      "de": "Sie <g><b>streiten sich</b></g> wegen des Lärms am Wochenende.",
      "en": "They <g><b>are arguing</b></g> about the noise at the weekend.",
      "uk": "Вони сваряться через шум на вихідних.",
      "ru": "Они ссорятся из-за шума на выходных."
    },
    "gram": "reflexivpronomen_akkusativ"
  },
  {
    "id": "dlg_a22_006",
    "cat": "Konflikte und Bitten",
    "q": {
      "de": "<g><b>Könntest</b></g> du mir kurz helfen?",
      "en": "<g><b>Could</b></g> you help me for a moment?",
      "uk": "Чи не міг би ти мені допомогти?",
      "ru": "Не мог бы ты мне помочь?"
    },
    "a": {
      "de": "Natürlich, worum geht es?",
      "en": "Of course, what is it about?",
      "uk": "Звичайно, у чому справа?",
      "ru": "Конечно, в чём дело?"
    },
    "gram": "hoeflichkeit_konjunktiv_a22"
  },
  {
    "id": "dlg_a22_007",
    "cat": "Konflikte und Bitten",
    "q": {
      "de": "Wie hast du dich bei ihr entschuldigt?",
      "en": "How did you apologise to her?",
      "uk": "Як ти перед нею вибачився?",
      "ru": "Как ты перед ней извинился?"
    },
    "a": {
      "de": "Ich habe ihr eine ehrliche Entschuldigung geschrieben.",
      "en": "I wrote her an honest apology.",
      "uk": "Я написав їй щире вибачення.",
      "ru": "Я написал ей честное извинение."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_008",
    "cat": "Konflikte und Bitten",
    "q": {
      "de": "Wie habt ihr den Konflikt gelöst?",
      "en": "How did you resolve the conflict?",
      "uk": "Як ви розвʼязали конфлікт?",
      "ru": "Как вы разрешили конфликт?"
    },
    "a": {
      "de": "Wir haben uns endlich geeinigt und beide Seiten sind zufrieden.",
      "en": "We finally agreed, and both sides are satisfied.",
      "uk": "Ми нарешті домовилися, і обидві сторони задоволені.",
      "ru": "Мы наконец договорились, и обе стороны довольны."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_009",
    "cat": "Geräte und Reparaturen",
    "q": {
      "de": "Was ist mit deinem Laptop passiert?",
      "en": "What happened to your laptop?",
      "uk": "Що сталося з твоїм ноутбуком?",
      "ru": "Что случилось с твоим ноутбуком?"
    },
    "a": {
      "de": "Das Display ist kaputt, ich muss es reparieren lassen.",
      "en": "The display is broken, I have to have it repaired.",
      "uk": "Дисплей зламався, треба віддати в ремонт.",
      "ru": "Дисплей сломался, нужно отдать в ремонт."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_010",
    "cat": "Geräte und Reparaturen",
    "q": {
      "de": "Hast du noch Garantie auf das Handy?",
      "en": "Do you still have a warranty on the phone?",
      "uk": "У тебе ще діє гарантія на телефон?",
      "ru": "У тебя ещё действует гарантия на телефон?"
    },
    "a": {
      "de": "Ja, zum Glück habe ich noch ein Jahr Garantie.",
      "en": "Yes, luckily I still have a year of warranty.",
      "uk": "Так, на щастя, ще рік гарантії.",
      "ru": "Да, к счастью, ещё год гарантии."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_011",
    "cat": "Geräte und Reparaturen",
    "q": {
      "de": "Kannst du mir eine gute App zum Deutschlernen empfehlen?",
      "en": "Can you recommend a good app for learning German?",
      "uk": "Чи можеш ти порадити хороший застосунок для вивчення німецької?",
      "ru": "Можешь порекомендовать хорошее приложение для изучения немецкого?"
    },
    "a": {
      "de": "Ja, ich kann dir eine kostenlose App empfehlen.",
      "en": "Yes, I can recommend a free app.",
      "uk": "Так, можу порадити безкоштовний застосунок.",
      "ru": "Да, могу порекомендовать бесплатное приложение."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_012",
    "cat": "Geräte und Reparaturen",
    "q": {
      "de": "Wo kann man kaputte Geräte kostenlos reparieren lassen?",
      "en": "Where can you get broken devices repaired for free?",
      "uk": "Де можна безкоштовно полагодити зламані прилади?",
      "ru": "Где можно бесплатно починить сломанные приборы?"
    },
    "a": {
      "de": "Im Repair-Café in der Stadtmitte helfen dir Experten kostenlos.",
      "en": "At the repair café in the city centre, experts help you for free.",
      "uk": "У repair café в центрі міста тобі безкоштовно допоможуть експерти.",
      "ru": "В repair café в центре города тебе бесплатно помогут эксперты."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_013",
    "cat": "Einkaufen und Meinungen",
    "q": {
      "de": "Wie findest du das Kleid, das im Schaufenster hängt?",
      "en": "What do you think of the dress that is hanging in the shop window?",
      "uk": "Як тобі сукня, яка висить у вітрині?",
      "ru": "Как тебе платье, которое висит в витрине?"
    },
    "a": {
      "de": "Das Kleid, <g><b>das</b></g> im Schaufenster hängt, gefällt mir sehr gut.",
      "en": "I really like the dress <g><b>that</b></g> is hanging in the shop window.",
      "uk": "Сукня, яка висить у вітрині, мені дуже подобається.",
      "ru": "Платье, которое висит в витрине, мне очень нравится."
    },
    "gram": "relativsatz_nominativ"
  },
  {
    "id": "dlg_a22_014",
    "cat": "Einkaufen und Meinungen",
    "q": {
      "de": "Welche Größe brauchst du bei dieser Jacke?",
      "en": "What size do you need for this jacket?",
      "uk": "Який розмір тобі потрібен для цієї куртки?",
      "ru": "Какой размер тебе нужен для этой куртки?"
    },
    "a": {
      "de": "Ich glaube, Größe M passt mir am besten.",
      "en": "I think size M fits me best.",
      "uk": "Гадаю, розмір M пасує мені найкраще.",
      "ru": "Думаю, размер M подходит мне лучше всего."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_015",
    "cat": "Einkaufen und Meinungen",
    "q": {
      "de": "Was vermutest du, wer dieses Bild gemalt hat?",
      "en": "Who do you assume painted this picture?",
      "uk": "Хто, на твою думку, намалював цю картину?",
      "ru": "Кто, по-твоему, нарисовал эту картину?"
    },
    "a": {
      "de": "Ich vermute, dass ein bekannter Künstler es gemalt hat.",
      "en": "I assume that a well-known artist painted it.",
      "uk": "Я припускаю, що це намалював відомий художник.",
      "ru": "Я предполагаю, что её нарисовал известный художник."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_016",
    "cat": "Einkaufen und Meinungen",
    "q": {
      "de": "Hast du die Konzertkarten schon gebucht?",
      "en": "Have you already booked the concert tickets?",
      "uk": "Ти вже забронювала квитки на концерт?",
      "ru": "Ты уже забронировала билеты на концерт?"
    },
    "a": {
      "de": "Ja, ich habe sie online für uns beide gebucht.",
      "en": "Yes, I booked them online for both of us.",
      "uk": "Так, я забронювала їх онлайн для нас обох.",
      "ru": "Да, я забронировала их онлайн для нас обоих."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_017",
    "cat": "Beruf und Bewerbung",
    "q": {
      "de": "Was möchtest du werden, wenn du die Ausbildung beendet hast?",
      "en": "What do you want to become when you finish your training?",
      "uk": "Ким ти хочеш стати, коли завершиш навчання?",
      "ru": "Кем ты хочешь стать, когда закончишь обучение?"
    },
    "a": {
      "de": "Ich <g><b>werde</b></g> hoffentlich ein guter Tischler.",
      "en": "I <g><b>will</b></g> hopefully be a good carpenter.",
      "uk": "Сподіваюся, я стану хорошим столяром.",
      "ru": "Надеюсь, я стану хорошим столяром."
    },
    "gram": "verb_werden"
  },
  {
    "id": "dlg_a22_018",
    "cat": "Beruf und Bewerbung",
    "q": {
      "de": "Was würdest du mir für die Berufswahl raten?",
      "en": "What would you advise me for choosing a career?",
      "uk": "Що б ти порадив мені щодо вибору професії?",
      "ru": "Что бы ты посоветовал мне по выбору профессии?"
    },
    "a": {
      "de": "Ich <g><b>würde</b></g> dir raten, zuerst ein Praktikum zu machen.",
      "en": "I <g><b>would</b></g> advise you to do an internship first.",
      "uk": "Я порадив би тобі спочатку пройти стажування.",
      "ru": "Я посоветовал бы тебе сначала пройти стажировку."
    },
    "gram": "hoeflichkeit_konjunktiv_a22"
  },
  {
    "id": "dlg_a22_019",
    "cat": "Beruf und Bewerbung",
    "q": {
      "de": "Hast du deine Bewerbung schon abgeschickt?",
      "en": "Have you already sent your application?",
      "uk": "Ти вже надіслав своє резюме?",
      "ru": "Ты уже отправил своё резюме?"
    },
    "a": {
      "de": "Ja, die Firma schreibt, <g>dass</g> sie in einer Woche antwortet.",
      "en": "Yes, the company writes <g>that</g> they will reply in a week.",
      "uk": "Так, фірма пише, що відповість за тиждень.",
      "ru": "Да, фирма пишет, что ответит через неделю."
    },
    "gram": "dass_satz_wdh"
  },
  {
    "id": "dlg_a22_020",
    "cat": "Beruf und Bewerbung",
    "q": {
      "de": "Was ist deine größte Stärke?",
      "en": "What is your greatest strength?",
      "uk": "Яка твоя найбільша сильна сторона?",
      "ru": "Какая у тебя самая сильная сторона?"
    },
    "a": {
      "de": "Meine größte Stärke ist Genauigkeit, meine Schwäche ist Ungeduld.",
      "en": "My greatest strength is precision, my weakness is impatience.",
      "uk": "Моя найбільша сильна сторона — точність, а слабка — нетерплячість.",
      "ru": "Моя самая сильная сторона — точность, а слабая — нетерпеливость."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_021",
    "cat": "Freundschaft und Haustiere",
    "q": {
      "de": "Warum vertraust du ihr so sehr?",
      "en": "Why do you trust her so much?",
      "uk": "Чому ти їй так довіряєш?",
      "ru": "Почему ты ей так доверяешь?"
    },
    "a": {
      "de": "Ich vertraue ihr, weil sie immer ehrlich zu mir ist.",
      "en": "I trust her because she is always honest with me.",
      "uk": "Я їй довіряю, бо вона завжди зі мною чесна.",
      "ru": "Я ей доверяю, потому что она всегда со мной честна."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_022",
    "cat": "Freundschaft und Haustiere",
    "q": {
      "de": "Warum hast du deinem Sohn ein Haustier gekauft?",
      "en": "Why did you buy your son a pet?",
      "uk": "Чому ти купив синові домашню тварину?",
      "ru": "Почему ты купил сыну домашнее животное?"
    },
    "a": {
      "de": "<g><b>Damit</b></g> er lernt, Verantwortung zu übernehmen.",
      "en": "<g><b>So that</b></g> he learns to take responsibility.",
      "uk": "Щоб він навчився брати на себе відповідальність.",
      "ru": "Чтобы он научился брать на себя ответственность."
    },
    "gram": "nebensatz_mit_damit"
  },
  {
    "id": "dlg_a22_023",
    "cat": "Freundschaft und Haustiere",
    "q": {
      "de": "Lässt du deinen Sohn den Hund allein ausführen?",
      "en": "Do you let your son walk the dog alone?",
      "uk": "Ти дозволяєш синові самому вигулювати собаку?",
      "ru": "Ты позволяешь сыну самому выгуливать собаку?"
    },
    "a": {
      "de": "Ja, ich <g><b>lasse</b></g> ihn das schon allein machen.",
      "en": "Yes, I already <g><b>let</b></g> him do that alone.",
      "uk": "Так, я вже дозволяю йому робити це самому.",
      "ru": "Да, я уже позволяю ему делать это самому."
    },
    "gram": "verb_lassen"
  },
  {
    "id": "dlg_a22_024",
    "cat": "Freundschaft und Haustiere",
    "q": {
      "de": "Wie habt ihr euch kennengelernt?",
      "en": "How did you two meet?",
      "uk": "Як ви познайомилися?",
      "ru": "Как вы познакомились?"
    },
    "a": {
      "de": "Wir haben uns im Park kennengelernt, als unsere Hunde zusammen gespielt haben.",
      "en": "We met in the park when our dogs were playing together.",
      "uk": "Ми познайомилися в парку, коли наші собаки гралися разом.",
      "ru": "Мы познакомились в парке, когда наши собаки играли вместе."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_025",
    "cat": "Ämter und Behörden",
    "q": {
      "de": "Wissen Sie, <g>wo</g> sich das zuständige Amt befindet?",
      "en": "Do you know <g>where</g> the responsible office is?",
      "uk": "Ви знаєте, де знаходиться відповідна установа?",
      "ru": "Вы знаете, где находится соответствующее учреждение?"
    },
    "a": {
      "de": "Ja, es ist gleich neben dem Bahnhof.",
      "en": "Yes, it is right next to the station.",
      "uk": "Так, вона одразу біля вокзалу.",
      "ru": "Да, оно прямо рядом с вокзалом."
    },
    "gram": "indirekter_fragesatz_fragewort"
  },
  {
    "id": "dlg_a22_026",
    "cat": "Ämter und Behörden",
    "q": {
      "de": "Können Sie mir sagen, ob mein Führerschein hier gültig ist?",
      "en": "Can you tell me whether my driving licence is valid here?",
      "uk": "Чи можете ви сказати, чи дійсні тут мої водійські права?",
      "ru": "Можете ли вы сказать, действительны ли здесь мои водительские права?"
    },
    "a": {
      "de": "Ich weiß nicht genau, <g><b>ob</b></g> er gültig ist, fragen Sie bitte am Schalter.",
      "en": "I don't know exactly <g><b>whether</b></g> it is valid, please ask at the counter.",
      "uk": "Я точно не знаю, чи вони дійсні, запитайте, будь ласка, на стійці.",
      "ru": "Я точно не знаю, действительны ли они, спросите, пожалуйста, у стойки."
    },
    "gram": "indirekter_fragesatz_ob"
  },
  {
    "id": "dlg_a22_027",
    "cat": "Ämter und Behörden",
    "q": {
      "de": "Welche Unterlagen brauche ich für den Antrag?",
      "en": "What documents do I need for the application?",
      "uk": "Які документи мені потрібні для заяви?",
      "ru": "Какие документы мне нужны для заявления?"
    },
    "a": {
      "de": "Sie brauchen Ihren Ausweis und ein ausgefülltes Formular.",
      "en": "You need your ID and a filled-out form.",
      "uk": "Вам потрібен документ та заповнений бланк.",
      "ru": "Вам нужен документ и заполненный бланк."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_028",
    "cat": "Ämter und Behörden",
    "q": {
      "de": "Haben Sie meine verlorene Tasche im Fundbüro gefunden?",
      "en": "Did you find my lost bag at the lost-property office?",
      "uk": "Ви знайшли мою загублену сумку в бюро знахідок?",
      "ru": "Вы нашли мою потерянную сумку в бюро находок?"
    },
    "a": {
      "de": "Ja, Ihre Tasche ist bei uns, Sie können sie heute abholen.",
      "en": "Yes, your bag is with us, you can pick it up today.",
      "uk": "Так, ваша сумка у нас, можете забрати її сьогодні.",
      "ru": "Да, ваша сумка у нас, можете забрать её сегодня."
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_029",
    "cat": "Feste und Einladungen",
    "q": {
      "de": "Feiert ihr das Fest im Garten oder drinnen?",
      "en": "Are you celebrating the party in the garden or inside?",
      "uk": "Ви святкуєте свято в саду чи в приміщенні?",
      "ru": "Вы празднуете в саду или в помещении?"
    },
    "a": {
      "de": "Wir feiern im Garten, <g><b>weil</b></g> das Wetter so schön ist.",
      "en": "We are celebrating in the garden <g><b>because</b></g> the weather is so nice.",
      "uk": "Ми святкуємо в саду, тому що погода така гарна.",
      "ru": "Мы празднуем в саду, потому что погода такая хорошая."
    },
    "gram": "nebensaetze_konnektoren_wdh"
  },
  {
    "id": "dlg_a22_030",
    "cat": "Feste und Einladungen",
    "q": {
      "de": "Hast du die Einladungen schon verschickt?",
      "en": "Have you already sent the invitations?",
      "uk": "Ти вже розіслала запрошення?",
      "ru": "Ты уже разослала приглашения?"
    },
    "a": {
      "de": "Ja, ich habe sie früh geschickt, <g><b>damit</b></g> alle rechtzeitig planen können.",
      "en": "Yes, I sent them early <g><b>so that</b></g> everyone can plan in time.",
      "uk": "Так, я розіслала їх заздалегідь, щоб усі встигли спланувати.",
      "ru": "Да, я разослала их заранее, чтобы все успели спланировать."
    },
    "gram": "nebensaetze_konnektoren_wdh"
  },
  {
    "id": "dlg_a22_031",
    "cat": "Feste und Einladungen",
    "q": {
      "de": "Nimmst du unsere Einladung zur Feier an?",
      "en": "Will you accept our invitation to the celebration?",
      "uk": "Ти приймаєш наше запрошення на святкування?",
      "ru": "Ты принимаешь наше приглашение на торжество?"
    },
    "a": {
      "de": "Ja, sehr gern, ich freue mich schon sehr darauf!",
      "en": "Yes, gladly, I am already really looking forward to it!",
      "uk": "Так, залюбки, я вже дуже цього чекаю!",
      "ru": "Да, с удовольствием, я уже очень этого жду!"
    },
    "gram": ""
  },
  {
    "id": "dlg_a22_032",
    "cat": "Feste und Einladungen",
    "q": {
      "de": "Welche Traditionen gibt es bei euch zu Silvester?",
      "en": "What traditions do you have for New Year's Eve?",
      "uk": "Які у вас традиції на Новий рік?",
      "ru": "Какие у вас традиции на Новый год?"
    },
    "a": {
      "de": "Wir feiern draußen, <g><b>obwohl</b></g> es oft sehr kalt ist.",
      "en": "We celebrate outside, <g><b>although</b></g> it is often very cold.",
      "uk": "Ми святкуємо надворі, хоча часто дуже холодно.",
      "ru": "Мы празднуем на улице, хотя часто очень холодно."
    },
    "gram": "nebensaetze_konnektoren_wdh"
  }
];

var QUIZ = [];

var SB_CATS = [
  {"id":"grund_weil","de":"Gründe nennen (weil)","en":"Giving reasons (weil)","uk":"Називання причин (weil)","ru":"Называние причин (weil)","e":"🤔"},
  {"id":"dass_satz","de":"Nebensatz mit dass","en":"Subordinate clause with dass","uk":"Підрядне речення з dass","ru":"Придаточное предложение с dass","e":"💭"},
  {"id":"wenn_satz","de":"Nebensatz mit wenn","en":"Subordinate clause with wenn","uk":"Підрядне речення з wenn","ru":"Придаточное предложение с wenn","e":"⏰"},
  {"id":"vergleich","de":"Vergleiche (Komparativ/Superlativ)","en":"Comparisons (comparative/superlative)","uk":"Порівняння (компаратив/суперлатив)","ru":"Сравнения (компаратив/суперлатив)","e":"⚖️"},
  {"id":"modalverben","de":"Modalverben","en":"Modal verbs","uk":"Модальні дієслова","ru":"Модальные глаголы","e":"🔑"},
  {"id":"praepositionen","de":"Präpositionen (Ort und Richtung)","en":"Prepositions (place and direction)","uk":"Прийменники (місце і напрямок)","ru":"Предлоги (место и направление)","e":"📍"},
  {"id":"hoeflichkeit","de":"Höfliche Bitten","en":"Polite requests","uk":"Ввічливі прохання","ru":"Вежливые просьбы","e":"🙏"},
  {"id":"adjektivendungen","de":"Adjektivendungen","en":"Adjective endings","uk":"Закінчення прикметників","ru":"Окончания прилагательных","e":"🎨"},
  {"id":"reflexivpronomen_akkusativ","de":"Reflexivpronomen im Akkusativ","en":"Reflexive pronouns (accusative)","uk":"Зворотні займенники (знахідний)","ru":"Возвратные местоимения (винительный)","e":"🪞"},
  {"id":"praepositionalverben","de":"Verben mit Präpositionen","en":"Verbs with prepositions","uk":"Дієслова з прийменниками","ru":"Глаголы с предлогами","e":"🔗"},
  {"id":"satz_mit_deshalb","de":"Satz mit deshalb","en":"Clause with deshalb","uk":"Речення з deshalb","ru":"Предложение с deshalb","e":"➡️"},
  {"id":"hoeflichkeit_konjunktiv_a22","de":"Höfliche Bitten (Konjunktiv II)","en":"Polite requests (Subjunctive II)","uk":"Ввічливі прохання (Конʼюнктив II)","ru":"Вежливые просьбы (Конъюнктив II)","e":"🙏"},
  {"id":"adjektiv_bestimmter_artikel","de":"Adjektivendungen (bestimmter Artikel)","en":"Adjective endings (definite article)","uk":"Закінчення прикметників (означений артикль)","ru":"Окончания прилагательных (определённый артикль)","e":"🎨"},
  {"id":"relativsatz_nominativ","de":"Relativsatz im Nominativ","en":"Relative clause (nominative)","uk":"Означальне речення (називний)","ru":"Определительное придаточное (именительный)","e":"🔍"},
  {"id":"verb_werden","de":"Das Verb werden","en":"The verb werden","uk":"Дієслово werden","ru":"Глагол werden","e":"🔄"},
  {"id":"verb_lassen","de":"Das Verb lassen","en":"The verb lassen","uk":"Дієслово lassen","ru":"Глагол lassen","e":"🛠️"},
  {"id":"nebensatz_mit_damit","de":"Nebensatz mit damit","en":"Clause with damit","uk":"Речення з damit","ru":"Предложение с damit","e":"🎯"},
  {"id":"indirekte_fragen","de":"Indirekte Fragen","en":"Indirect questions","uk":"Непрямі питання","ru":"Косвенные вопросы","e":"❓"},
  {"id":"dass_satz_wdh","de":"Nebensatz mit dass","en":"Clause with dass","uk":"Речення з dass","ru":"Предложение с dass","e":"💭"},
  {"id":"nebensaetze_konnektoren_wdh","de":"Nebensätze und Konnektoren","en":"Subordinate clauses and connectors","uk":"Підрядні речення та конектори","ru":"Придаточные предложения и коннекторы","e":"🧩"}
];

var SPRACHBAUSTEINE = [
  {"id":"sbs_001","cat":"grund_weil","sentence":{"de":"Ich lerne Deutsch, {{BLANK}} ich in Deutschland arbeiten möchte.","en":"I am learning German {{BLANK}} I want to work in Germany.","uk":"Я вивчаю німецьку, {{BLANK}} хочу працювати в Німеччині.","ru":"Я учу немецкий, {{BLANK}} хочу работать в Германии."},"answer":{"de":"weil","en":"because","uk":"тому що","ru":"потому что"},"distractors":["dass","wenn","aber","und"],"explanation":{"de":"<b>„weil“</b> nennt einen Grund, das Verb steht am Satzende.<br><b>„dass“</b> leitet eine Tatsache ein, keinen Grund.<br><b>„wenn“</b> wäre zeitlich oder bedingend, nicht kausal.","en":"<b>„weil“</b> gives a reason, the verb goes to the end of the clause.<br><b>„dass“</b> introduces a fact, not a reason.<br><b>„wenn“</b> would be temporal or conditional, not causal.","uk":"<b>„weil“</b> називає причину, дієслово стоїть у кінці речення.<br><b>„dass“</b> вводить факт, а не причину.<br><b>„wenn“</b> було б часовим чи умовним, а не причиновим.","ru":"<b>„weil“</b> называет причину, глагол стоит в конце предложения.<br><b>„dass“</b> вводит факт, а не причину.<br><b>„wenn“</b> было бы временным или условным, а не причинным."},"gram":"weil_satz"},
  {"id":"sbs_002","cat":"grund_weil","sentence":{"de":"Sie kommt heute nicht zur Arbeit, {{BLANK}} sie krank ist.","en":"She is not coming to work today {{BLANK}} she is sick.","uk":"Вона сьогодні не прийде на роботу, {{BLANK}} вона хвора.","ru":"Она сегодня не придёт на работу, {{BLANK}} она больна."},"answer":{"de":"weil","en":"because","uk":"тому що","ru":"потому что"},"distractors":["ob","dass","obwohl"],"explanation":{"de":"<b>„weil“</b> passt hier, weil ein Grund für das Fernbleiben genannt wird.<br><b>„obwohl“</b> würde einen Gegensatz ausdrücken (trotz Krankheit kommt sie).<br><b>„ob“</b> leitet eine indirekte Frage ein.","en":"<b>„weil“</b> fits here because a reason for the absence is given.<br><b>„obwohl“</b> would express a contrast (she comes despite being sick).<br><b>„ob“</b> introduces an indirect question.","uk":"<b>„weil“</b> підходить, бо називає причину відсутності.<br><b>„obwohl“</b> виражало б протиставлення (прийде, попри хворобу).<br><b>„ob“</b> вводить непряме запитання.","ru":"<b>„weil“</b> подходит, так как называет причину отсутствия.<br><b>„obwohl“</b> выражало бы противопоставление (придёт, несмотря на болезнь).<br><b>„ob“</b> вводит косвенный вопрос."},"gram":"weil_satz"},
  {"id":"sbs_003","cat":"grund_weil","sentence":{"de":"Er hilft mir gern, {{BLANK}} wir gute Freunde sind.","en":"He likes to help me {{BLANK}} we are good friends.","uk":"Він охоче мені допомагає, {{BLANK}} ми хороші друзі.","ru":"Он охотно мне помогает, {{BLANK}} мы хорошие друзья."},"answer":{"de":"weil","en":"because","uk":"тому що","ru":"потому что"},"distractors":["dass","wenn","denn dass"],"explanation":{"de":"<b>„weil“</b> begründet, warum er hilft; das Verb <b>„sind“</b> steht am Ende.<br><b>„dass“</b> würde nur eine Tatsache anschließen, keinen Grund liefern.","en":"<b>„weil“</b> gives the reason why he helps; the verb <b>„sind“</b> goes at the end.<br><b>„dass“</b> would only add a fact, not provide a reason.","uk":"<b>„weil“</b> пояснює, чому він допомагає; дієслово <b>„sind“</b> стоїть у кінці.<br><b>„dass“</b> лише додало б факт, не надаючи причини.","ru":"<b>„weil“</b> объясняет, почему он помогает; глагол <b>„sind“</b> стоит в конце.<br><b>„dass“</b> лишь добавило бы факт, не давая причины."},"gram":"weil_satz"},
  {"id":"sbs_004","cat":"grund_weil","sentence":{"de":"Warum bist du zu spät gekommen? – {{BLANK}} der Bus keinen Halt hatte.","en":"Why were you late? – {{BLANK}} the bus didn't stop.","uk":"Чому ти запізнився? – {{BLANK}} автобус не зупинився.","ru":"Почему ты опоздал? – {{BLANK}} автобус не остановился."},"answer":{"de":"Weil","en":"Because","uk":"Тому що","ru":"Потому что"},"distractors":["Dass","Wenn","Ob"],"explanation":{"de":"Als Antwort auf eine <b>„Warum?“</b>-Frage beginnt der Satz oft direkt mit <b>„Weil“</b> (großgeschrieben, Satzanfang).<br>„Dass“ und „Ob“ passen hier grammatisch nicht.","en":"As an answer to a <b>„Why?“</b> question, the sentence often starts directly with <b>„Weil“</b> (capitalised, start of sentence).<br>„Dass“ and „Ob“ do not fit grammatically here.","uk":"У відповіді на питання <b>„Warum?“</b> речення часто починається одразу з <b>„Weil“</b> (з великої літери, початок речення).<br>„Dass“ і „Ob“ граматично тут не підходять.","ru":"В ответе на вопрос <b>„Warum?“</b> предложение часто начинается сразу с <b>„Weil“</b> (с большой буквы, начало предложения).<br>„Dass“ и „Ob“ грамматически здесь не подходят."},"gram":"weil_satz"},
  {"id":"sbs_005","cat":"grund_weil","sentence":{"de":"Ich bin froh, {{BLANK}} du mir am ersten Tag geholfen hast.","en":"I am glad {{BLANK}} you helped me on the first day.","uk":"Я радий/рада, {{BLANK}} ти допоміг мені першого дня.","ru":"Я рад/рада, {{BLANK}} ты помог мне в первый день."},"answer":{"de":"weil","en":"because","uk":"тому що","ru":"потому что"},"distractors":["dass","denn","als"],"explanation":{"de":"<b>„weil“</b> nennt den Grund für die Freude, Verb <b>„geholfen hast“</b> am Ende.<br><b>„denn“</b> wäre auch möglich, aber dann bleibt das Verb an Position 2, nicht am Ende — hier passt „weil“ mit Endstellung.","en":"<b>„weil“</b> gives the reason for the joy, with the verb <b>„geholfen hast“</b> at the end.<br><b>„denn“</b> would also be possible, but then the verb stays in position 2, not at the end — here „weil“ with final verb position fits.","uk":"<b>„weil“</b> називає причину радості, дієслово <b>„geholfen hast“</b> у кінці.<br><b>„denn“</b> теж можливе, але тоді дієслово залишається на другій позиції, а не в кінці — тут підходить саме „weil“.","ru":"<b>„weil“</b> называет причину радости, глагол <b>„geholfen hast“</b> в конце.<br><b>„denn“</b> тоже возможно, но тогда глагол остаётся на второй позиции, а не в конце — здесь подходит именно „weil“."},"gram":"weil_satz"},
  {"id":"sbs_006","cat":"dass_satz","sentence":{"de":"Ich glaube, {{BLANK}} das Wetter morgen schön wird.","en":"I think {{BLANK}} the weather will be nice tomorrow.","uk":"Я думаю, {{BLANK}} завтра буде гарна погода.","ru":"Я думаю, {{BLANK}} завтра будет хорошая погода."},"answer":{"de":"dass","en":"that","uk":"що","ru":"что"},"distractors":["weil","ob","wenn"],"explanation":{"de":"Nach <b>„glauben“</b> folgt eine Tatsache mit <b>„dass“</b>, das Verb steht am Ende.<br><b>„weil“</b> würde einen Grund einleiten, keine Meinung.","en":"After <b>„glauben“</b> (to believe) a fact follows with <b>„dass“</b>, the verb goes at the end.<br><b>„weil“</b> would introduce a reason, not an opinion.","uk":"Після <b>„glauben“</b> (думати) йде факт із <b>„dass“</b>, дієслово стоїть у кінці.<br><b>„weil“</b> вводило б причину, а не думку.","ru":"После <b>„glauben“</b> (думать) следует факт с <b>„dass“</b>, глагол стоит в конце.<br><b>„weil“</b> вводило бы причину, а не мнение."},"gram":"dass_satz"},
  {"id":"sbs_007","cat":"dass_satz","sentence":{"de":"Sie hat gesagt, {{BLANK}} sie um 8 Uhr kommt.","en":"She said {{BLANK}} she is coming at 8 o'clock.","uk":"Вона сказала, {{BLANK}} прийде о 8 годині.","ru":"Она сказала, {{BLANK}} придёт в 8 часов."},"answer":{"de":"dass","en":"that","uk":"що","ru":"что"},"distractors":["ob","weil","als"],"explanation":{"de":"Nach <b>„sagen“</b> berichtet man eine Tatsache mit <b>„dass“</b>.<br><b>„ob“</b> würde eine Unsicherheit oder Frage ausdrücken.","en":"After <b>„sagen“</b> (to say) you report a fact with <b>„dass“</b>.<br><b>„ob“</b> would express uncertainty or a question.","uk":"Після <b>„sagen“</b> (казати) передають факт із <b>„dass“</b>.<br><b>„ob“</b> виражало б невпевненість чи запитання.","ru":"После <b>„sagen“</b> (говорить) передают факт с <b>„dass“</b>.<br><b>„ob“</b> выражало бы неуверенность или вопрос."},"gram":"dass_satz"},
  {"id":"sbs_008","cat":"dass_satz","sentence":{"de":"Wir hoffen, {{BLANK}} die Prüfung nicht so schwer ist.","en":"We hope {{BLANK}} the exam is not too difficult.","uk":"Ми сподіваємося, {{BLANK}} іспит не буде надто складним.","ru":"Мы надеемся, {{BLANK}} экзамен не будет слишком сложным."},"answer":{"de":"dass","en":"that","uk":"що","ru":"что"},"distractors":["weil","wenn","ob"],"explanation":{"de":"Nach <b>„hoffen“</b> steht ein <b>„dass“</b>-Satz mit Verb am Ende.<br><b>„wenn“</b> würde eine Bedingung einleiten, nicht eine Hoffnung.","en":"After <b>„hoffen“</b> (to hope) a <b>„dass“</b>-clause follows with the verb at the end.<br><b>„wenn“</b> would introduce a condition, not a hope.","uk":"Після <b>„hoffen“</b> (сподіватися) йде речення з <b>„dass“</b> і дієсловом у кінці.<br><b>„wenn“</b> вводило б умову, а не сподівання.","ru":"После <b>„hoffen“</b> (надеяться) следует придаточное с <b>„dass“</b> и глаголом в конце.<br><b>„wenn“</b> вводило бы условие, а не надежду."},"gram":"dass_satz"},
  {"id":"sbs_009","cat":"dass_satz","sentence":{"de":"Ich finde, {{BLANK}} Deutsch eine interessante Sprache ist.","en":"I think {{BLANK}} German is an interesting language.","uk":"Я вважаю, {{BLANK}} німецька – цікава мова.","ru":"Я считаю, {{BLANK}} немецкий – интересный язык."},"answer":{"de":"dass","en":"that","uk":"що","ru":"что"},"distractors":["weil","als","ob"],"explanation":{"de":"<b>„finden“</b> im Sinne von „meinen“ leitet eine Meinung mit <b>„dass“</b> ein.<br><b>„als“</b> passt nur bei Vergleichen oder einmaligen Ereignissen in der Vergangenheit.","en":"<b>„finden“</b> in the sense of „to think“ introduces an opinion with <b>„dass“</b>.<br><b>„als“</b> only fits with comparisons or single past events.","uk":"<b>„finden“</b> у значенні «вважати» вводить думку через <b>„dass“</b>.<br><b>„als“</b> підходить лише для порівнянь чи одноразових подій у минулому.","ru":"<b>„finden“</b> в значении «считать» вводит мнение через <b>„dass“</b>.<br><b>„als“</b> подходит только для сравнений или однократных событий в прошлом."},"gram":"dass_satz"},
  {"id":"sbs_010","cat":"dass_satz","sentence":{"de":"Es ist wichtig, {{BLANK}} man pünktlich zur Arbeit kommt.","en":"It is important {{BLANK}} you arrive at work on time.","uk":"Важливо, {{BLANK}} ти приходиш на роботу вчасно.","ru":"Важно, {{BLANK}} ты приходишь на работу вовремя."},"answer":{"de":"dass","en":"that","uk":"що","ru":"что"},"distractors":["ob","weil","wenn"],"explanation":{"de":"<b>„Es ist wichtig, dass …“</b> ist eine feste A2-Struktur für Aussagen über Wichtigkeit.<br>„ob“ würde nur bei Fragen nach der Möglichkeit passen.","en":"<b>„Es ist wichtig, dass …“</b> is a fixed A2 structure for statements about importance.<br>„ob“ would only fit with questions about possibility.","uk":"<b>„Es ist wichtig, dass …“</b> — стала конструкція рівня A2 для тверджень про важливість.<br>„ob“ підходило б лише для запитань про можливість.","ru":"<b>„Es ist wichtig, dass …“</b> — устойчивая конструкция уровня A2 для утверждений о важности.<br>„ob“ подходило бы только для вопросов о возможности."},"gram":"dass_satz"},
  {"id":"sbs_011","cat":"wenn_satz","sentence":{"de":"{{BLANK}} es regnet, nehme ich den Bus.","en":"{{BLANK}} it rains, I take the bus.","uk":"{{BLANK}} йде дощ, я їду автобусом.","ru":"{{BLANK}} идёт дождь, я еду автобусом."},"answer":{"de":"Wenn","en":"When","uk":"Коли","ru":"Когда"},"distractors":["Weil","Dass","Als"],"explanation":{"de":"<b>„Wenn“</b> beschreibt eine wiederkehrende Bedingung (immer, wenn es regnet).<br><b>„Als“</b> wäre nur für ein einmaliges Ereignis in der Vergangenheit richtig.","en":"<b>„Wenn“</b> describes a repeated condition (every time it rains).<br><b>„Als“</b> would only be correct for a single event in the past.","uk":"<b>„Wenn“</b> описує повторювану умову (щоразу, коли йде дощ).<br><b>„Als“</b> було б правильним лише для одноразової події в минулому.","ru":"<b>„Wenn“</b> описывает повторяющееся условие (каждый раз, когда идёт дождь).<br><b>„Als“</b> было бы правильным только для однократного события в прошлом."},"gram":"wenn_satz"},
  {"id":"sbs_012","cat":"wenn_satz","sentence":{"de":"Ich rufe dich an, {{BLANK}} ich zu Hause bin.","en":"I will call you {{BLANK}} I am at home.","uk":"Я тобі подзвоню, {{BLANK}} буду вдома.","ru":"Я тебе позвоню, {{BLANK}} буду дома."},"answer":{"de":"wenn","en":"when","uk":"коли","ru":"когда"},"distractors":["dass","weil","ob"],"explanation":{"de":"<b>„wenn“</b> drückt hier den zukünftigen Zeitpunkt aus.<br><b>„dass“</b> würde eine Tatsache anschließen, keinen Zeitpunkt.","en":"<b>„wenn“</b> here expresses the future point in time.<br><b>„dass“</b> would add a fact, not a point in time.","uk":"<b>„wenn“</b> тут виражає майбутній момент часу.<br><b>„dass“</b> додало б факт, а не момент часу.","ru":"<b>„wenn“</b> здесь выражает будущий момент времени.<br><b>„dass“</b> добавило бы факт, а не момент времени."},"gram":"wenn_satz"},
  {"id":"sbs_013","cat":"wenn_satz","sentence":{"de":"{{BLANK}} du Fragen hast, kannst du mich anrufen.","en":"{{BLANK}} you have questions, you can call me.","uk":"{{BLANK}} у тебе є питання, ти можеш мені зателефонувати.","ru":"{{BLANK}} у тебя есть вопросы, ты можешь мне позвонить."},"answer":{"de":"Wenn","en":"If","uk":"Якщо","ru":"Если"},"distractors":["Weil","Ob","Dass"],"explanation":{"de":"<b>„Wenn“</b> nennt hier eine Bedingung (im Fall, dass du Fragen hast).<br><b>„Ob“</b> passt nur nach Verben wie „fragen“ oder „wissen“.","en":"<b>„Wenn“</b> here states a condition (in case you have questions).<br><b>„Ob“</b> only fits after verbs like „to ask“ or „to know“.","uk":"<b>„Wenn“</b> тут вказує на умову (у разі, якщо в тебе є питання).<br><b>„Ob“</b> підходить лише після дієслів на кшталт „запитувати“ чи „знати“.","ru":"<b>„Wenn“</b> здесь указывает на условие (в случае, если у тебя есть вопросы).<br><b>„Ob“</b> подходит только после глаголов типа „спрашивать“ или „знать“."},"gram":"wenn_satz"},
  {"id":"sbs_014","cat":"wenn_satz","sentence":{"de":"Wir gehen spazieren, {{BLANK}} die Sonne scheint.","en":"We go for a walk {{BLANK}} the sun is shining.","uk":"Ми йдемо на прогулянку, {{BLANK}} світить сонце.","ru":"Мы идём гулять, {{BLANK}} светит солнце."},"answer":{"de":"wenn","en":"when","uk":"коли","ru":"когда"},"distractors":["als","dass","ob"],"explanation":{"de":"<b>„wenn“</b> passt für eine allgemeine, wiederholte Bedingung im Präsens.<br><b>„als“</b> wäre nur für ein einmaliges Ereignis in der Vergangenheit korrekt.","en":"<b>„wenn“</b> fits for a general, repeated condition in the present tense.<br><b>„als“</b> would only be correct for a single past event.","uk":"<b>„wenn“</b> підходить для загальної, повторюваної умови в теперішньому часі.<br><b>„als“</b> було б правильним лише для одноразової події в минулому.","ru":"<b>„wenn“</b> подходит для общего, повторяющегося условия в настоящем времени.<br><b>„als“</b> было бы правильным только для однократного события в прошлом."},"gram":"wenn_satz"},
  {"id":"sbs_015","cat":"wenn_satz","sentence":{"de":"{{BLANK}} man neu in einer Stadt ist, braucht man oft Hilfe.","en":"{{BLANK}} you are new in a city, you often need help.","uk":"{{BLANK}} ти новенький у місті, тобі часто потрібна допомога.","ru":"{{BLANK}} ты новенький в городе, тебе часто нужна помощь."},"answer":{"de":"Wenn","en":"When","uk":"Коли","ru":"Когда"},"distractors":["Als","Dass","Weil"],"explanation":{"de":"<b>„Wenn“</b> beschreibt eine allgemeine, immer wieder gültige Situation.<br><b>„Als“</b> wäre nur für ein bestimmtes, einmaliges Ereignis in der Vergangenheit richtig.","en":"<b>„Wenn“</b> describes a general situation that is always true.<br><b>„Als“</b> would only be correct for a specific, single event in the past.","uk":"<b>„Wenn“</b> описує загальну ситуацію, яка справджується завжди.<br><b>„Als“</b> було б правильним лише для конкретної одноразової події в минулому.","ru":"<b>„Wenn“</b> описывает общую ситуацию, которая всегда верна.<br><b>„Als“</b> было бы правильным только для конкретного однократного события в прошлом."},"gram":"wenn_satz"},
  {"id":"sbs_016","cat":"vergleich","sentence":{"de":"Die U-Bahn ist schneller {{BLANK}} der Bus.","en":"The subway is faster {{BLANK}} the bus.","uk":"Метро швидше, {{BLANK}} автобус.","ru":"Метро быстрее, {{BLANK}} автобус."},"answer":{"de":"als","en":"than","uk":"ніж","ru":"чем"},"distractors":["wie","dass","so"],"explanation":{"de":"Beim Komparativ (<b>„schneller“</b>) folgt <b>„als“</b>.<br><b>„wie“</b> wird nur bei Gleichheit benutzt (<b>„so schnell wie“</b>).","en":"After a comparative form (<b>„faster“</b>), <b>„than“</b> follows.<br><b>„wie“ (as)</b> is only used for equality (<b>„as fast as“</b>).","uk":"Після компаратива (<b>„швидше“</b>) вживається <b>„ніж“</b>.<br><b>„wie“</b> використовується лише для рівності (<b>„такий самий швидкий, як“</b>).","ru":"После компаратива (<b>„быстрее“</b>) употребляется <b>„чем“</b>.<br><b>„wie“</b> используется только для равенства (<b>„такой же быстрый, как“</b>)."},"gram":"komparativ"},
  {"id":"sbs_017","cat":"vergleich","sentence":{"de":"Mein Zimmer ist genauso groß {{BLANK}} dein Zimmer.","en":"My room is just as big {{BLANK}} your room.","uk":"Моя кімната така сама велика, {{BLANK}} твоя.","ru":"Моя комната такая же большая, {{BLANK}} твоя."},"answer":{"de":"wie","en":"as","uk":"як","ru":"как"},"distractors":["als","dass","so"],"explanation":{"de":"Bei Gleichheit steht <b>„genauso … wie“</b>.<br><b>„als“</b> würde einen Unterschied ausdrücken (schneller/größer als).","en":"For equality, <b>„genauso … wie“</b> (just as … as) is used.<br><b>„als“</b> would express a difference (faster/bigger than).","uk":"Для рівності вживають <b>„genauso … wie“</b> (такий самий … як).<br><b>„als“</b> виражало б відмінність (швидше/більше, ніж).","ru":"Для равенства используют <b>„genauso … wie“</b> (такой же … как).<br><b>„als“</b> выражало бы разницу (быстрее/больше, чем)."},"gram":"komparativ"},
  {"id":"sbs_018","cat":"vergleich","sentence":{"de":"Im Winter ist es kälter {{BLANK}} im Sommer.","en":"In winter it is colder {{BLANK}} in summer.","uk":"Взимку холодніше, {{BLANK}} влітку.","ru":"Зимой холоднее, {{BLANK}} летом."},"answer":{"de":"als","en":"than","uk":"ніж","ru":"чем"},"distractors":["wie","dass","so"],"explanation":{"de":"<b>„kälter“</b> ist Komparativ, deshalb folgt <b>„als“</b>.<br><b>„wie“</b> passt nur bei Gleichheit, nicht bei einem Unterschied.","en":"<b>„kälter“</b> (colder) is a comparative, so <b>„als“</b> follows.<br><b>„wie“</b> only fits with equality, not with a difference.","uk":"<b>„kälter“</b> (холодніше) – компаратив, тому вживається <b>„als“</b>.<br><b>„wie“</b> підходить лише для рівності, а не відмінності.","ru":"<b>„kälter“</b> (холоднее) – компаратив, поэтому употребляется <b>„als“</b>.<br><b>„wie“</b> подходит только для равенства, а не разницы."},"gram":"komparativ"},
  {"id":"sbs_019","cat":"vergleich","sentence":{"de":"Das ist der {{BLANK}} Weg zum Bahnhof. (kurz)","en":"That is the {{BLANK}} way to the station. (short)","uk":"Це {{BLANK}} шлях до вокзалу. (короткий)","ru":"Это {{BLANK}} путь до вокзала. (короткий)"},"answer":{"de":"kürzeste","en":"shortest","uk":"найкоротший","ru":"кратчайший"},"distractors":["kürzer","kurz","kürzeren"],"explanation":{"de":"Mit bestimmtem Artikel <b>„der“</b> und dem Wort „Weg“ braucht man den <b>Superlativ</b> mit -ste-Endung: „der kürzeste“.<br><b>„kürzer“</b> wäre nur der Komparativ (Vergleich zwischen zwei Dingen).","en":"With the definite article <b>„der“</b> and „Weg“, you need the <b>superlative</b> with the -ste ending: „der kürzeste“.<br><b>„kürzer“</b> would only be the comparative (comparing two things).","uk":"Із означеним артиклем <b>„der“</b> і словом „Weg“ потрібен <b>суперлатив</b> із закінченням -ste: „der kürzeste“.<br><b>„kürzer“</b> був би лише компаративом (порівняння двох речей).","ru":"С определённым артиклем <b>„der“</b> и словом „Weg“ нужен <b>суперлатив</b> с окончанием -ste: „der kürzeste“.<br><b>„kürzer“</b> был бы лишь компаративом (сравнение двух вещей)."},"gram":"superlativ"},
  {"id":"sbs_020","cat":"vergleich","sentence":{"de":"Diese Wohnung ist nicht so teuer {{BLANK}} die andere.","en":"This apartment is not as expensive {{BLANK}} the other one.","uk":"Ця квартира не така дорога, {{BLANK}} інша.","ru":"Эта квартира не такая дорогая, {{BLANK}} другая."},"answer":{"de":"wie","en":"as","uk":"як","ru":"как"},"distractors":["als","dass","so"],"explanation":{"de":"Bei „nicht so … wie“ drückt man aus, dass etwas weniger ist als etwas anderes.<br><b>„als“</b> passt hier nicht, weil kein Komparativ (z. B. „teurer“) verwendet wird.","en":"With „nicht so … wie“ you express that something is less than something else.<br><b>„als“</b> does not fit here because no comparative (e.g. „more expensive“) is used.","uk":"За допомогою „nicht so … wie“ виражають, що щось менше за інше.<br><b>„als“</b> тут не підходить, бо не вживається компаратив (напр. „дорожчий“).","ru":"С помощью „nicht so … wie“ выражают, что что-то меньше другого.<br><b>„als“</b> здесь не подходит, так как не используется компаратив (напр. „дороже“)."},"gram":"komparativ"},
  {"id":"sbs_021","cat":"modalverben","sentence":{"de":"Ich {{BLANK}} heute leider nicht kommen, ich bin krank.","en":"I {{BLANK}} unfortunately not come today, I am sick.","uk":"Я, на жаль, сьогодні {{BLANK}} прийти, я хворий/хвора.","ru":"Я, к сожалению, сегодня {{BLANK}} прийти, я болен/больна."},"answer":{"de":"kann","en":"can","uk":"не можу","ru":"не могу"},"distractors":["muss","darf","soll"],"explanation":{"de":"<b>„können“</b> drückt hier eine Fähigkeit/Möglichkeit aus (wegen Krankheit nicht möglich).<br><b>„müssen“</b> würde eine Pflicht ausdrücken, das passt nicht zum Kontext.","en":"<b>„können“</b> (can) here expresses ability/possibility (not possible due to illness).<br><b>„müssen“</b> would express an obligation, which does not fit the context.","uk":"<b>„können“</b> тут виражає можливість (неможливо через хворобу).<br><b>„müssen“</b> виражало б обовʼязок, що не пасує до контексту.","ru":"<b>„können“</b> здесь выражает возможность (невозможно из-за болезни).<br><b>„müssen“</b> выражало бы обязанность, что не подходит по контексту."},"gram":"modalverben"},
  {"id":"sbs_022","cat":"modalverben","sentence":{"de":"Kinder {{BLANK}} in der Schule ruhig sein.","en":"Children {{BLANK}} be quiet at school.","uk":"Діти {{BLANK}} бути тихими у школі.","ru":"Дети {{BLANK}} быть тихими в школе."},"answer":{"de":"müssen","en":"have to","uk":"мусять","ru":"должны"},"distractors":["dürfen","können","möchten"],"explanation":{"de":"<b>„müssen“</b> drückt eine Regel/Pflicht aus.<br><b>„dürfen“</b> wäre eine Erlaubnis, keine Pflicht.","en":"<b>„müssen“</b> (must) expresses a rule/obligation.<br><b>„dürfen“</b> would express permission, not an obligation.","uk":"<b>„müssen“</b> виражає правило/обовʼязок.<br><b>„dürfen“</b> означало б дозвіл, а не обовʼязок.","ru":"<b>„müssen“</b> выражает правило/обязанность.<br><b>„dürfen“</b> означало бы разрешение, а не обязанность."},"gram":"modalverben"},
  {"id":"sbs_023","cat":"modalverben","sentence":{"de":"{{BLANK}} ich bitte das Fenster öffnen?","en":"{{BLANK}} I open the window, please?","uk":"{{BLANK}} я відкрити вікно?","ru":"{{BLANK}} я открыть окно?"},"answer":{"de":"Darf","en":"May","uk":"Чи можу","ru":"Могу ли"},"distractors":["Muss","Soll","Will"],"explanation":{"de":"<b>„dürfen“</b> ist die höfliche Form, um um Erlaubnis zu bitten.<br><b>„müssen“</b> würde eine Pflicht ausdrücken, keine Bitte um Erlaubnis.","en":"<b>„dürfen“</b> (may) is the polite form for asking permission.<br><b>„müssen“</b> would express an obligation, not a request for permission.","uk":"<b>„dürfen“</b> — ввічлива форма для прохання про дозвіл.<br><b>„müssen“</b> виражало б обовʼязок, а не прохання про дозвіл.","ru":"<b>„dürfen“</b> — вежливая форма для просьбы о разрешении.<br><b>„müssen“</b> выражало бы обязанность, а не просьбу о разрешении."},"gram":"modalverben"},
  {"id":"sbs_024","cat":"modalverben","sentence":{"de":"Er {{BLANK}} früher sehr gut schwimmen.","en":"He {{BLANK}} swim very well before.","uk":"Раніше він {{BLANK}} дуже добре плавати.","ru":"Раньше он {{BLANK}} очень хорошо плавать."},"answer":{"de":"konnte","en":"could","uk":"вмів","ru":"умел"},"distractors":["kann","musste","durfte"],"explanation":{"de":"Mit <b>„früher“</b> braucht man das Präteritum: <b>„konnte“</b> (nicht „kann“).<br><b>„durfte“</b> wäre eine Erlaubnis, keine Fähigkeit.","en":"With <b>„früher“</b> (before) you need the past tense: <b>„konnte“</b> (not „kann“).<br><b>„durfte“</b> would be permission, not ability.","uk":"Із <b>„früher“</b> потрібен претерит: <b>„konnte“</b> (не „kann“).<br><b>„durfte“</b> означало б дозвіл, а не здатність.","ru":"С <b>„früher“</b> нужен претерит: <b>„konnte“</b> (не „kann“).<br><b>„durfte“</b> означало бы разрешение, а не способность."},"gram":"modalverben_praeteritum"},
  {"id":"sbs_025","cat":"modalverben","sentence":{"de":"Wir {{BLANK}} gestern zur Party gehen, aber wir hatten keine Zeit.","en":"We {{BLANK}} go to the party yesterday, but we had no time.","uk":"Учора ми {{BLANK}} піти на вечірку, але не мали часу.","ru":"Вчера мы {{BLANK}} пойти на вечеринку, но у нас не было времени."},"answer":{"de":"wollten","en":"wanted to","uk":"хотіли","ru":"хотели"},"distractors":["konnten","mussten","durften"],"explanation":{"de":"<b>„wollten“</b> (Präteritum von „wollen“) drückt einen Wunsch in der Vergangenheit aus, der nicht erfüllt wurde.<br><b>„mussten“</b> würde eine Pflicht ausdrücken, kein Wunsch.","en":"<b>„wollten“</b> (past tense of „wollen“) expresses a wish in the past that was not fulfilled.<br><b>„mussten“</b> would express an obligation, not a wish.","uk":"<b>„wollten“</b> (претерит від „wollen“) виражає бажання в минулому, яке не здійснилося.<br><b>„mussten“</b> виражало б обовʼязок, а не бажання.","ru":"<b>„wollten“</b> (претерит от „wollen“) выражает желание в прошлом, которое не осуществилось.<br><b>„mussten“</b> выражало бы обязанность, а не желание."},"gram":"modalverben_praeteritum"},
  {"id":"sbs_026","cat":"praepositionen","sentence":{"de":"Das Bild hängt {{BLANK}} der Wand. (Position)","en":"The picture is hanging {{BLANK}} the wall. (position)","uk":"Картина висить {{BLANK}} стіні. (позиція)","ru":"Картина висит {{BLANK}} стене. (позиция)"},"answer":{"de":"an","en":"on","uk":"на","ru":"на"},"distractors":["auf","in","zu"],"explanation":{"de":"Bei <b>Position</b> (wo?) steht die Wechselpräposition <b>„an“</b> mit Dativ: „an der Wand“.<br><b>„auf“</b> passt eher zu waagerechten Flächen wie einem Tisch.","en":"For <b>position</b> (where?) the two-way preposition <b>„an“</b> is used with dative: „an der Wand“.<br><b>„auf“</b> fits better with horizontal surfaces like a table.","uk":"Для <b>позиції</b> (де?) вживають прийменник подвійного керування <b>„an“</b> з давальним: „an der Wand“.<br><b>„auf“</b> більше підходить для горизонтальних поверхонь, як стіл.","ru":"Для <b>позиции</b> (где?) употребляют предлог двойного управления <b>„an“</b> с дательным: „an der Wand“.<br><b>„auf“</b> больше подходит для горизонтальных поверхностей, как стол."},"gram":"wechselpraepositionen"},
  {"id":"sbs_027","cat":"praepositionen","sentence":{"de":"Er stellt den Stuhl {{BLANK}} den Tisch. (Richtung)","en":"He puts the chair {{BLANK}} the table. (direction)","uk":"Він ставить стілець {{BLANK}} стіл. (напрямок)","ru":"Он ставит стул {{BLANK}} стол. (направление)"},"answer":{"de":"an","en":"next to","uk":"до","ru":"к"},"distractors":["auf","in","bei"],"explanation":{"de":"Bei <b>Richtung</b> (wohin?) steht die Wechselpräposition <b>„an“</b> mit Akkusativ: „an den Tisch“.<br>Der Unterschied zum vorherigen Beispiel: hier bewegt sich der Stuhl irgendwohin.","en":"For <b>direction</b> (where to?) the two-way preposition <b>„an“</b> is used with accusative: „an den Tisch“.<br>The difference to the previous example: here the chair moves somewhere.","uk":"Для <b>напрямку</b> (куди?) вживають прийменник подвійного керування <b>„an“</b> зі знахідним: „an den Tisch“.<br>Відмінність від попереднього прикладу: тут стілець рухається кудись.","ru":"Для <b>направления</b> (куда?) употребляют предлог двойного управления <b>„an“</b> с винительным: „an den Tisch“.<br>Отличие от предыдущего примера: здесь стул перемещается куда-то."},"gram":"wechselpraepositionen"},
  {"id":"sbs_028","cat":"praepositionen","sentence":{"de":"Wir wohnen {{BLANK}} der Stadtmitte.","en":"We live {{BLANK}} the city centre.","uk":"Ми живемо {{BLANK}} центрі міста.","ru":"Мы живём {{BLANK}} центре города."},"answer":{"de":"in","en":"in","uk":"у","ru":"в"},"distractors":["an","auf","zu"],"explanation":{"de":"Bei einem Ort, an dem man sich befindet, benutzt man <b>„in“</b> mit Dativ: „in der Stadtmitte“.<br><b>„zu“</b> würde nur eine Richtung ausdrücken (Bewegung dorthin).","en":"For a place where you are located, you use <b>„in“</b> with dative: „in der Stadtmitte“.<br><b>„zu“</b> would only express a direction (movement towards it).","uk":"Для місця, де хтось перебуває, вживають <b>„in“</b> з давальним: „in der Stadtmitte“.<br><b>„zu“</b> виражало б лише напрямок (рух туди).","ru":"Для места, где кто-то находится, употребляют <b>„in“</b> с дательным: „in der Stadtmitte“.<br><b>„zu“</b> выражало бы только направление (движение туда)."},"gram":"wechselpraepositionen"},
  {"id":"sbs_029","cat":"praepositionen","sentence":{"de":"Gehen Sie {{BLANK}} der Ecke nach rechts.","en":"Go right {{BLANK}} the corner.","uk":"На {{BLANK}} поверніть праворуч.","ru":"На {{BLANK}} поверните направо."},"answer":{"de":"an","en":"at","uk":"розі","ru":"углу"},"distractors":["auf","in","zu"],"explanation":{"de":"Die feste Wendung <b>„an der Ecke“</b> beschreibt eine Position bei einer Wegbeschreibung.<br><b>„auf“</b> wäre hier ungewöhnlich, das passt nicht zu „Ecke“.","en":"The fixed phrase <b>„an der Ecke“</b> (at the corner) describes a position when giving directions.<br><b>„auf“</b> would be unusual here, it does not fit with „Ecke“.","uk":"Стала фраза <b>„an der Ecke“</b> (на розі) описує позицію в описі маршруту.<br><b>„auf“</b> тут було б незвичним, воно не поєднується зі словом „Ecke“.","ru":"Устойчивая фраза <b>„an der Ecke“</b> (на углу) описывает позицию в описании маршрута.<br><b>„auf“</b> здесь было бы необычным, оно не сочетается со словом „Ecke“."},"gram":"lokale_praepositionen"},
  {"id":"sbs_030","cat":"praepositionen","sentence":{"de":"Das Geschäft ist {{BLANK}} dem Bahnhof.","en":"The shop is {{BLANK}} the station.","uk":"Магазин {{BLANK}} вокзалу.","ru":"Магазин {{BLANK}} вокзала."},"answer":{"de":"neben","en":"next to","uk":"біля","ru":"рядом с"},"distractors":["auf","zwischen","unter"],"explanation":{"de":"<b>„neben“</b> mit Dativ beschreibt eine Position direkt seitlich von etwas.<br><b>„zwischen“</b> würde zwei Bezugspunkte brauchen (zwischen X und Y).","en":"<b>„neben“</b> with dative describes a position directly beside something.<br><b>„zwischen“</b> would need two reference points (between X and Y).","uk":"<b>„neben“</b> з давальним описує позицію прямо збоку від чогось.<br><b>„zwischen“</b> потребувало б двох орієнтирів (між X і Y).","ru":"<b>„neben“</b> с дательным описывает позицию прямо сбоку от чего-то.<br><b>„zwischen“</b> потребовало бы двух ориентиров (между X и Y)."},"gram":"wechselpraepositionen"},
  {"id":"sbs_031","cat":"hoeflichkeit","sentence":{"de":"{{BLANK}} Sie mir bitte helfen?","en":"{{BLANK}} you please help me?","uk":"{{BLANK}} б ви мені допомогти?","ru":"{{BLANK}} бы вы мне помочь?"},"answer":{"de":"Könnten","en":"Could","uk":"Чи не могли","ru":"Не могли"},"distractors":["Können","Müssten","Sollten"],"explanation":{"de":"<b>„Könnten“</b> (Konjunktiv II) klingt höflicher als das einfache <b>„Können“</b>.<br>Für eine höfliche Bitte ist der Konjunktiv II typisch.","en":"<b>„Könnten“</b> (subjunctive II) sounds more polite than the simple <b>„Können“</b>.<br>For a polite request, the subjunctive II form is typical.","uk":"<b>„Könnten“</b> (конʼюнктив II) звучить ввічливіше за просте <b>„Können“</b>.<br>Для ввічливого прохання типовим є саме конʼюнктив II.","ru":"<b>„Könnten“</b> (конъюнктив II) звучит вежливее, чем простое <b>„Können“</b>.<br>Для вежливой просьбы типична именно форма конъюнктива II."},"gram":"hoeflichkeit_konjunktiv"},
  {"id":"sbs_032","cat":"hoeflichkeit","sentence":{"de":"Entschuldigung, {{BLANK}} Sie mir sagen, wo der Bahnhof ist?","en":"Excuse me, {{BLANK}} you tell me where the station is?","uk":"Перепрошую, {{BLANK}} ви мені сказати, де вокзал?","ru":"Извините, {{BLANK}} бы вы сказать мне, где вокзал?"},"answer":{"de":"könnten","en":"could","uk":"могли","ru":"могли"},"distractors":["können","würden","müssten"],"explanation":{"de":"Nach <b>„Entschuldigung“</b> ist <b>„könnten Sie …“</b> eine sehr typische, höfliche Frageform, um nach dem Weg zu fragen.","en":"After <b>„Entschuldigung“</b> (excuse me), <b>„könnten Sie …“</b> is a very typical, polite way to ask for directions.","uk":"Після <b>„Entschuldigung“</b> фраза <b>„könnten Sie …“</b> — дуже типова, ввічлива форма запитання про дорогу.","ru":"После <b>„Entschuldigung“</b> фраза <b>„könnten Sie …“</b> — очень типичная, вежливая форма вопроса о дороге."},"gram":"hoeflichkeit_konjunktiv"},
  {"id":"sbs_033","cat":"hoeflichkeit","sentence":{"de":"{{BLANK}} Sie so freundlich und öffnen die Tür?","en":"{{BLANK}} you be so kind as to open the door?","uk":"Чи не {{BLANK}} б ви такі любʼязні відчинити двері?","ru":"Не {{BLANK}} бы вы так любезны открыть дверь?"},"answer":{"de":"Wären","en":"Would","uk":"були","ru":"были"},"distractors":["Sind","Waren","Werden"],"explanation":{"de":"Die feste, sehr höfliche Wendung lautet <b>„Wären Sie so freundlich …?“</b> (Konjunktiv II von „sein“).","en":"The fixed, very polite phrase is <b>„Wären Sie so freundlich …?“</b> (subjunctive II of „sein“).","uk":"Стала, дуже ввічлива фраза: <b>„Wären Sie so freundlich …?“</b> (конʼюнктив II від „sein“).","ru":"Устойчивая, очень вежливая фраза: <b>„Wären Sie so freundlich …?“</b> (конъюнктив II от „sein“)."},"gram":"hoeflichkeit_konjunktiv"},
  {"id":"sbs_034","cat":"hoeflichkeit","sentence":{"de":"{{BLANK}} Sie mir bitte den Weg zeigen?","en":"{{BLANK}} you please show me the way?","uk":"{{BLANK}} б ви мені показати дорогу?","ru":"Не {{BLANK}} бы вы показать мне дорогу?"},"answer":{"de":"Können","en":"Can","uk":"Могли","ru":"Могли"},"distractors":["Müssen","Sollen","Dürfen"],"explanation":{"de":"<b>„Können Sie mir bitte …?“</b> ist eine einfache, im Alltag sehr häufige höfliche Bitte auf A2-Niveau.","en":"<b>„Können Sie mir bitte …?“</b> is a simple, everyday polite request at A2 level.","uk":"<b>„Können Sie mir bitte …?“</b> — проста, дуже поширена в побуті ввічлива форма прохання рівня A2.","ru":"<b>„Können Sie mir bitte …?“</b> — простая, очень распространённая в быту вежливая форма просьбы уровня A2."},"gram":"hoeflichkeit_konjunktiv"},
  {"id":"sbs_035","cat":"hoeflichkeit","sentence":{"de":"Ich hätte eine Frage, {{BLANK}} Sie kurz Zeit haben.","en":"I would have a question, {{BLANK}} you have a moment.","uk":"У мене є питання, {{BLANK}} у вас є хвилинка.","ru":"У меня есть вопрос, {{BLANK}} у вас есть минутка."},"answer":{"de":"wenn","en":"if","uk":"якщо","ru":"если"},"distractors":["dass","weil","ob"],"explanation":{"de":"<b>„wenn“</b> leitet hier eine höfliche Bedingung ein (Konjunktiv-ähnlicher, indirekter Ton).<br><b>„ob“</b> würde eine Unsicherheit ausdrücken, keine Bedingung.","en":"<b>„wenn“</b> here introduces a polite condition (an indirect, subjunctive-like tone).<br><b>„ob“</b> would express uncertainty, not a condition.","uk":"<b>„wenn“</b> тут вводить ввічливу умову (непрямий, зменшено-ввічливий тон).<br><b>„ob“</b> виражало б невпевненість, а не умову.","ru":"<b>„wenn“</b> здесь вводит вежливое условие (непрямой, смягчённый тон).<br><b>„ob“</b> выражало бы неуверенность, а не условие."},"gram":"wenn_satz"},
  {"id":"sbs_036","cat":"adjektivendungen","sentence":{"de":"Er trägt ein rot{{BLANK}} Hemd.","en":"He is wearing a red shirt.","uk":"Він одягнув червону сорочку.","ru":"Он надел красную рубашку."},"answer":{"de":"es","en":"","uk":"","ru":""},"distractors":["er","e","en"],"explanation":{"de":"Nach dem unbestimmten Artikel <b>„ein“</b> braucht das Neutrum im Nominativ/Akkusativ die Endung <b>-es</b>: „ein rotes Hemd“.","en":"After the indefinite article <b>„ein“</b>, neuter nouns in the nominative/accusative need the ending <b>-es</b>: „ein rotes Hemd“.","uk":"Після неозначеного артикля <b>„ein“</b> середній рід у називному/знахідному потребує закінчення <b>-es</b>: „ein rotes Hemd“.","ru":"После неопределённого артикля <b>„ein“</b> средний род в именительном/винительном требует окончания <b>-es</b>: „ein rotes Hemd“."},"gram":"adjektivendungen"},
  {"id":"sbs_037","cat":"adjektivendungen","sentence":{"de":"Sie kauft eine grün{{BLANK}} Hose.","en":"She buys green trousers.","uk":"Вона купує зелені штани.","ru":"Она покупает зелёные брюки."},"answer":{"de":"e","en":"","uk":"","ru":""},"distractors":["es","en","er"],"explanation":{"de":"Nach <b>„eine“</b> (Femininum, Akkusativ) braucht das Adjektiv die Endung <b>-e</b>: „eine grüne Hose“.","en":"After <b>„eine“</b> (feminine, accusative), the adjective needs the ending <b>-e</b>: „eine grüne Hose“.","uk":"Після <b>„eine“</b> (жіночий рід, знахідний) прикметник потребує закінчення <b>-e</b>: „eine grüne Hose“.","ru":"После <b>„eine“</b> (женский род, винительный) прилагательное требует окончания <b>-e</b>: „eine grüne Hose“."},"gram":"adjektivendungen"},
  {"id":"sbs_038","cat":"adjektivendungen","sentence":{"de":"Das ist mein neu{{BLANK}} Pullover.","en":"That is my new sweater.","uk":"Це мій новий светр.","ru":"Это мой новый свитер."},"answer":{"de":"er","en":"","uk":"","ru":""},"distractors":["es","e","en"],"explanation":{"de":"Nach dem Possessivartikel <b>„mein“</b> braucht das Maskulinum im Nominativ die Endung <b>-er</b>: „mein neuer Pullover“.","en":"After the possessive article <b>„mein“</b>, masculine nouns in the nominative need the ending <b>-er</b>: „mein neuer Pullover“.","uk":"Після присвійного артикля <b>„mein“</b> чоловічий рід у називному потребує закінчення <b>-er</b>: „mein neuer Pullover“.","ru":"После притяжательного артикля <b>„mein“</b> мужской род в именительном требует окончания <b>-er</b>: „mein neuer Pullover“."},"gram":"adjektivendungen"},
  {"id":"sbs_039","cat":"adjektivendungen","sentence":{"de":"Ich suche einen bequem{{BLANK}} Stuhl.","en":"I am looking for a comfortable chair.","uk":"Я шукаю зручний стілець.","ru":"Я ищу удобный стул."},"answer":{"de":"en","en":"","uk":"","ru":""},"distractors":["er","es","e"],"explanation":{"de":"Nach <b>„einen“</b> (Maskulinum, Akkusativ) braucht das Adjektiv die Endung <b>-en</b>: „einen bequemen Stuhl“.","en":"After <b>„einen“</b> (masculine, accusative), the adjective needs the ending <b>-en</b>: „einen bequemen Stuhl“.","uk":"Після <b>„einen“</b> (чоловічий рід, знахідний) прикметник потребує закінчення <b>-en</b>: „einen bequemen Stuhl“.","ru":"После <b>„einen“</b> (мужской род, винительный) прилагательное требует окончания <b>-en</b>: „einen bequemen Stuhl“."},"gram":"adjektivendungen"},
  {"id":"sbs_040","cat":"adjektivendungen","sentence":{"de":"Wir haben ein klein{{BLANK}} Zimmer.","en":"We have a small room.","uk":"У нас маленька кімната.","ru":"У нас маленькая комната."},"answer":{"de":"es","en":"","uk":"","ru":""},"distractors":["er","e","en"],"explanation":{"de":"Nach <b>„ein“</b> (Neutrum, Akkusativ) braucht das Adjektiv die Endung <b>-es</b>: „ein kleines Zimmer“.","en":"After <b>„ein“</b> (neuter, accusative), the adjective needs the ending <b>-es</b>: „ein kleines Zimmer“.","uk":"Після <b>„ein“</b> (середній рід, знахідний) прикметник потребує закінчення <b>-es</b>: „ein kleines Zimmer“.","ru":"После <b>„ein“</b> (средний род, винительный) прилагательное требует окончания <b>-es</b>: „ein kleines Zimmer“."},"gram":"adjektivendungen"},
  {"id":"sb_a22_001","cat":"reflexivpronomen_akkusativ","sentence":{"de":"Er ärgert {{BLANK}} über den Lärm in der Klasse.","en":"He gets annoyed about the noise in the classroom.","uk":"Він дратується через шум у класі.","ru":"Он раздражается из-за шума в классе."},"answer":{"de":"sich","en":"","uk":"","ru":""},"distractors":["ihn","ihm","es"],"explanation":{"de":"<b>„sich“</b> ist das Reflexivpronomen für die 3. Person Singular im Akkusativ (er ärgert sich).<br>„ihn“ würde ein anderes Objekt bedeuten (er ärgert eine andere Person).","en":"<b>„sich“</b> is the reflexive pronoun for the third person singular in the accusative (er ärgert sich).<br>„ihn“ would mean a different object (he annoys someone else).","uk":"<b>„sich“</b> — зворотний займенник 3-ї особи однини у знахідному відмінку (er ärgert sich).<br>„ihn“ означало б інший обʼєкт (він дратує когось іншого).","ru":"<b>„sich“</b> — возвратное местоимение 3-го лица единственного числа в винительном падеже (er ärgert sich).<br>„ihn“ означало бы другой объект (он раздражает кого-то другого)."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"sb_a22_002","cat":"reflexivpronomen_akkusativ","sentence":{"de":"Wir freuen {{BLANK}} schon sehr auf das Wochenende.","en":"We are already really looking forward to the weekend.","uk":"Ми вже дуже чекаємо на вихідні.","ru":"Мы уже очень ждём выходных."},"answer":{"de":"uns","en":"","uk":"","ru":""},"distractors":["euch","sich","dich"],"explanation":{"de":"Bei „wir“ lautet das Reflexivpronomen im Akkusativ <b>„uns“</b>.<br>„euch“ wäre für „ihr“, „sich“ für die 3. Person.","en":"For „wir“ the reflexive pronoun in the accusative is <b>„uns“</b>.<br>„euch“ would be for „ihr“, „sich“ for the third person.","uk":"Для „wir“ зворотний займенник у знахідному — <b>„uns“</b>.<br>„euch“ було б для „ihr“, „sich“ — для 3-ї особи.","ru":"Для „wir“ возвратное местоимение в винительном — <b>„uns“</b>.<br>„euch“ было бы для „ihr“, „sich“ — для 3-го лица."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"sb_a22_003","cat":"reflexivpronomen_akkusativ","sentence":{"de":"Fühlst du {{BLANK}} in der neuen Klasse schon wohl?","en":"Do you already feel comfortable in the new class?","uk":"Ти вже добре почуваєшся у новому класі?","ru":"Ты уже хорошо чувствуешь себя в новом классе?"},"answer":{"de":"dich","en":"","uk":"","ru":""},"distractors":["dir","du","sich"],"explanation":{"de":"Bei „du“ lautet das Reflexivpronomen im Akkusativ <b>„dich“</b>, nicht „dir“ (Dativ).<br>„fühlen“ verlangt hier den Akkusativ.","en":"For „du“ the reflexive pronoun in the accusative is <b>„dich“</b>, not „dir“ (dative).<br>„fühlen“ requires the accusative here.","uk":"Для „du“ зворотний займенник у знахідному — <b>„dich“</b>, а не „dir“ (давальний).<br>„fühlen“ тут вимагає знахідного відмінка.","ru":"Для „du“ возвратное местоимение в винительном — <b>„dich“</b>, а не „dir“ (дательный).<br>„fühlen“ здесь требует винительного падежа."},"gram":"reflexivpronomen_akkusativ"},
  {"id":"sb_a22_004","cat":"praepositionalverben","sentence":{"de":"Jonas interessiert sich {{BLANK}} Naturwissenschaften.","en":"Jonas is interested in natural sciences.","uk":"Йонас цікавиться природничими науками.","ru":"Йонас интересуется естественными науками."},"answer":{"de":"für","en":"","uk":"","ru":""},"distractors":["an","von","mit"],"explanation":{"de":"Das Verb <b>„sich interessieren“</b> braucht die feste Präposition <b>„für“</b> + Akkusativ.<br>„an“ oder „von“ passen hier grammatisch nicht.","en":"The verb <b>„sich interessieren“</b> requires the fixed preposition <b>„für“</b> + accusative.<br>„an“ or „von“ do not fit grammatically here.","uk":"Дієслово <b>„sich interessieren“</b> потребує сталого прийменника <b>„für“</b> + знахідний.<br>„an“ чи „von“ граматично тут не підходять.","ru":"Глагол <b>„sich interessieren“</b> требует устойчивого предлога <b>„für“</b> + винительный.<br>„an“ или „von“ грамматически здесь не подходят."},"gram":"praepositionalverben"},
  {"id":"sb_a22_005","cat":"praepositionalverben","sentence":{"de":"Cem denkt oft {{BLANK}} seine Schulzeit in der Türkei.","en":"Cem often thinks of his school days in Turkey.","uk":"Джем часто думає про свої шкільні роки в Туреччині.","ru":"Джем часто думает о своих школьных годах в Турции."},"answer":{"de":"an","en":"","uk":"","ru":""},"distractors":["auf","über","zu"],"explanation":{"de":"<b>„denken an“</b> + Akkusativ ist eine feste Verbindung.<br>„denken über“ existiert so nicht, „auf“ passt nicht zu „denken“.","en":"<b>„denken an“</b> + accusative is a fixed combination.<br>„denken über“ does not exist, „auf“ does not fit with „denken“.","uk":"<b>„denken an“</b> + знахідний — стале словосполучення.<br>„denken über“ не існує, „auf“ не поєднується з „denken“.","ru":"<b>„denken an“</b> + винительный — устойчивое сочетание.<br>„denken über“ не существует, „auf“ не сочетается с „denken“."},"gram":"praepositionalverben"},
  {"id":"sb_a22_006","cat":"praepositionalverben","sentence":{"de":"Herr Klinke ärgert sich {{BLANK}} den Lärm in der Klasse.","en":"Mr Klinke is annoyed about the noise in the classroom.","uk":"Пан Клінке дратується через шум у класі.","ru":"Господин Клинке раздражается из-за шума в классе."},"answer":{"de":"über","en":"","uk":"","ru":""},"distractors":["auf","für","mit"],"explanation":{"de":"<b>„sich ärgern über“</b> + Akkusativ ist die feste Präposition für diesen Ausdruck.<br>„auf“ passt nur bei „sich freuen auf“.","en":"<b>„sich ärgern über“</b> + accusative is the fixed preposition for this expression.<br>„auf“ only fits with „sich freuen auf“.","uk":"<b>„sich ärgern über“</b> + знахідний — сталий прийменник для цього виразу.<br>„auf“ підходить лише до „sich freuen auf“.","ru":"<b>„sich ärgern über“</b> + винительный — устойчивый предлог для этого выражения.<br>„auf“ подходит только к „sich freuen auf“."},"gram":"praepositionalverben"},
  {"id":"sb_a22_007","cat":"satz_mit_deshalb","sentence":{"de":"Der Streit dauert schon Tage, {{BLANK}} ruft sie die Hausverwaltung an.","en":"The dispute has been going on for days, that's why she calls the property management.","uk":"Сварка триває вже кілька днів, тому вона телефонує до управління будинком.","ru":"Ссора длится уже несколько дней, поэтому она звонит в управляющую компанию."},"answer":{"de":"deshalb","en":"","uk":"","ru":""},"distractors":["weil","obwohl","dass"],"explanation":{"de":"<b>„deshalb“</b> nennt eine Folge, das Verb steht direkt danach (Position 2).<br>„weil“ würde einen Nebensatz mit Verb am Ende einleiten.","en":"<b>„deshalb“</b> (that's why) states a consequence, the verb comes right after it (position 2).<br>„weil“ would introduce a subordinate clause with the verb at the end.","uk":"<b>„deshalb“</b> (тому) називає наслідок, дієслово стоїть одразу після нього (2-га позиція).<br>„weil“ вводило б підрядне речення з дієсловом у кінці.","ru":"<b>„deshalb“</b> (поэтому) называет следствие, глагол стоит сразу после него (2-я позиция).<br>„weil“ вводило бы придаточное с глаголом в конце."},"gram":"satz_mit_deshalb"},
  {"id":"sb_a22_008","cat":"satz_mit_deshalb","sentence":{"de":"Sie hat die Prüfung nicht bestanden, {{BLANK}} muss sie es noch einmal versuchen.","en":"She did not pass the exam, that's why she has to try again.","uk":"Вона не склала іспит, тому має спробувати ще раз.","ru":"Она не сдала экзамен, поэтому должна попробовать ещё раз."},"answer":{"de":"deshalb","en":"","uk":"","ru":""},"distractors":["dass","wenn","als"],"explanation":{"de":"Nach <b>„deshalb“</b> folgt das Verb direkt (Hauptsatz), es drückt eine logische Folge aus.<br>„dass“ würde einen Nebensatz einleiten, kein selbstständiger Hauptsatz.","en":"After <b>„deshalb“</b> the verb follows directly (main clause), it expresses a logical consequence.<br>„dass“ would introduce a subordinate clause, not an independent main clause.","uk":"Після <b>„deshalb“</b> одразу йде дієслово (головне речення), воно виражає логічний наслідок.<br>„dass“ вводило б підрядне речення, а не самостійне головне.","ru":"После <b>„deshalb“</b> сразу следует глагол (главное предложение), оно выражает логическое следствие.<br>„dass“ вводило бы придаточное, а не самостоятельное главное."},"gram":"satz_mit_deshalb"},
  {"id":"sb_a22_009","cat":"satz_mit_deshalb","sentence":{"de":"Der Chef war mit der Arbeit unzufrieden, {{BLANK}} hat er ein Gespräch organisiert.","en":"The boss was unhappy with the work, that's why he organised a meeting.","uk":"Керівник був незадоволений роботою, тому він організував розмову.","ru":"Начальник был недоволен работой, поэтому он организовал разговор."},"answer":{"de":"deshalb","en":"","uk":"","ru":""},"distractors":["weil","damit","ob"],"explanation":{"de":"<b>„deshalb“</b> steht am Satzanfang, danach folgt sofort das konjugierte Verb <b>„hat“</b>.<br>„damit“ würde ein Ziel ausdrücken, keine Folge.","en":"<b>„deshalb“</b> stands at the start of the clause, followed directly by the conjugated verb <b>„hat“</b>.<br>„damit“ would express a purpose, not a consequence.","uk":"<b>„deshalb“</b> стоїть на початку речення, одразу після нього — дієслово <b>„hat“</b>.<br>„damit“ виражало б мету, а не наслідок.","ru":"<b>„deshalb“</b> стоит в начале предложения, сразу после него — глагол <b>„hat“</b>.<br>„damit“ выражало бы цель, а не следствие."},"gram":"satz_mit_deshalb"},
  {"id":"sb_a22_010","cat":"hoeflichkeit_konjunktiv_a22","sentence":{"de":"{{BLANK}} Sie mir bitte helfen? Ich finde das Formular nicht.","en":"Could you please help me? I can't find the form.","uk":"Чи не могли б ви мені допомогти? Я не можу знайти бланк.","ru":"Не могли бы вы мне помочь? Я не могу найти бланк."},"answer":{"de":"Könnten","en":"","uk":"","ru":""},"distractors":["Können","Müssten","Sollen"],"explanation":{"de":"<b>„Könnten“</b> (Konjunktiv II) klingt höflicher als das einfache „Können“.<br>Für eine höfliche Bitte ist der Konjunktiv II typisch.","en":"<b>„Könnten“</b> (subjunctive II) sounds more polite than the simple „Können“.<br>For a polite request, the subjunctive II is typical.","uk":"<b>„Könnten“</b> (конʼюнктив II) звучить ввічливіше за просте „Können“.<br>Для ввічливого прохання типовим є саме конʼюнктив II.","ru":"<b>„Könnten“</b> (конъюнктив II) звучит вежливее, чем простое „Können“.<br>Для вежливой просьбы типична форма конъюнктива II."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"sb_a22_011","cat":"hoeflichkeit_konjunktiv_a22","sentence":{"de":"Ich {{BLANK}} dir raten, zuerst ein Praktikum zu machen.","en":"I would advise you to do an internship first.","uk":"Я порадив би тобі спочатку пройти стажування.","ru":"Я посоветовал бы тебе сначала пройти стажировку."},"answer":{"de":"würde","en":"","uk":"","ru":""},"distractors":["werde","wurde","würden"],"explanation":{"de":"<b>„würde“</b> (Konjunktiv II von „werden“) macht den Ratschlag höflicher und unverbindlicher.<br>„werde“ (Präsens) wäre zu direkt für einen Rat.","en":"<b>„würde“</b> (subjunctive II of „werden“) makes the advice more polite and less direct.<br>„werde“ (present tense) would be too direct for advice.","uk":"<b>„würde“</b> (конʼюнктив II від „werden“) робить пораду ввічливішою і менш категоричною.<br>„werde“ (теперішній час) було б занадто прямим для поради.","ru":"<b>„würde“</b> (конъюнктив II от „werden“) делает совет более вежливым и менее категоричным.<br>„werde“ (настоящее время) было бы слишком прямым для совета."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"sb_a22_012","cat":"hoeflichkeit_konjunktiv_a22","sentence":{"de":"{{BLANK}} du mir einen Gefallen tun und die Kinder abholen?","en":"Could you do me a favour and pick up the children?","uk":"Чи не міг би ти зробити мені послугу і забрати дітей?","ru":"Не мог бы ты оказать мне услугу и забрать детей?"},"answer":{"de":"Könntest","en":"","uk":"","ru":""},"distractors":["Kannst","Musst","Sollst"],"explanation":{"de":"Bei einer Bitte an eine vertraute Person (du) benutzt man <b>„Könntest“</b> für Höflichkeit.<br>„Kannst“ wäre neutraler, weniger höflich formuliert.","en":"When making a request to someone you know (du), <b>„Könntest“</b> is used for politeness.<br>„Kannst“ would be more neutral, less polite.","uk":"Для прохання до знайомої людини (du) вживають <b>„Könntest“</b> для ввічливості.<br>„Kannst“ було б нейтральнішим, менш ввічливим.","ru":"Для просьбы к знакомому человеку (du) употребляют <b>„Könntest“</b> для вежливости.<br>„Kannst“ было бы более нейтральным, менее вежливым."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"sb_a22_013","cat":"hoeflichkeit_konjunktiv_a22","sentence":{"de":"Eine ehrliche Entschuldigung {{BLANK}} die Situation viel leichter machen.","en":"An honest apology would make the situation much easier.","uk":"Щире вибачення значно полегшило б ситуацію.","ru":"Честное извинение значительно облегчило бы ситуацию."},"answer":{"de":"würde","en":"","uk":"","ru":""},"distractors":["wird","wurde","werde"],"explanation":{"de":"<b>„würde“</b> drückt hier eine höfliche Vermutung/Möglichkeit aus (Konjunktiv II).<br>„wird“ (Futur/Präsens) wäre eine sichere Aussage, keine vorsichtige Vermutung.","en":"<b>„würde“</b> here expresses a polite assumption/possibility (subjunctive II).<br>„wird“ (future/present) would be a certain statement, not a cautious assumption.","uk":"<b>„würde“</b> тут виражає ввічливе припущення/можливість (конʼюнктив II).<br>„wird“ (майбутній/теперішній) було б впевненим твердженням, а не обережним припущенням.","ru":"<b>„würde“</b> здесь выражает вежливое предположение/возможность (конъюнктив II).<br>„wird“ (будущее/настоящее) было бы уверенным утверждением, а не осторожным предположением."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"sb_a22_014","cat":"adjektiv_bestimmter_artikel","sentence":{"de":"Der Stuhl, der aus Holz gemacht ist, hat ein sehr gut{{BLANK}} Material.","en":"The chair that is made of wood has very good material.","uk":"Стілець, зроблений з дерева, має дуже гарний матеріал.","ru":"Стул, сделанный из дерева, имеет очень хороший материал."},"answer":{"de":"es","en":"","uk":"","ru":""},"distractors":["e","er","en"],"explanation":{"de":"Nach <b>„ein“</b> (Neutrum, Akkusativ: „Material“) braucht das Adjektiv die Endung <b>-es</b>: „ein gutes Material“.","en":"After <b>„ein“</b> (neuter, accusative: „Material“), the adjective needs the ending <b>-es</b>: „ein gutes Material“.","uk":"Після <b>„ein“</b> (середній рід, знахідний: „Material“) прикметник потребує закінчення <b>-es</b>: „ein gutes Material“.","ru":"После <b>„ein“</b> (средний род, винительный: „Material“) прилагательное требует окончания <b>-es</b>: „ein gutes Material“."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"sb_a22_015","cat":"adjektiv_bestimmter_artikel","sentence":{"de":"Mit d{{BLANK}} neuen Akku funktioniert das Handy wieder normal.","en":"With the new battery, the phone works normally again.","uk":"З новим акумулятором телефон знову працює нормально.","ru":"С новым аккумулятором телефон снова работает нормально."},"answer":{"de":"em","en":"","uk":"","ru":""},"distractors":["er","en","es"],"explanation":{"de":"Nach der Präposition <b>„mit“</b> (+ Dativ) braucht der bestimmte Artikel bei Maskulinum die Form <b>„dem“</b>: „mit dem neuen Akku“.","en":"After the preposition <b>„mit“</b> (+ dative), the definite article for masculine takes the form <b>„dem“</b>: „mit dem neuen Akku“.","uk":"Після прийменника <b>„mit“</b> (+ давальний) означений артикль чоловічого роду має форму <b>„dem“</b>: „mit dem neuen Akku“.","ru":"После предлога <b>„mit“</b> (+ дательный) определённый артикль мужского рода имеет форму <b>„dem“</b>: „mit dem neuen Akku“."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"sb_a22_016","cat":"adjektiv_bestimmter_artikel","sentence":{"de":"Die nützlich{{BLANK}} App hilft beim Deutschlernen.","en":"The useful app helps with learning German.","uk":"Корисний застосунок допомагає у вивченні німецької.","ru":"Полезное приложение помогает в изучении немецкого."},"answer":{"de":"e","en":"","uk":"","ru":""},"distractors":["es","er","en"],"explanation":{"de":"Nach dem bestimmten Artikel <b>„die“</b> (Femininum, Nominativ) braucht das Adjektiv die Endung <b>-e</b>: „die nützliche App“.","en":"After the definite article <b>„die“</b> (feminine, nominative), the adjective needs the ending <b>-e</b>: „die nützliche App“.","uk":"Після означеного артикля <b>„die“</b> (жіночий рід, називний) прикметник потребує закінчення <b>-e</b>: „die nützliche App“.","ru":"После определённого артикля <b>„die“</b> (женский род, именительный) прилагательное требует окончания <b>-e</b>: „die nützliche App“."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"sb_a22_017","cat":"adjektiv_bestimmter_artikel","sentence":{"de":"Im hell{{BLANK}} Vordergrund sieht man eine Frau mit einem Hund.","en":"In the bright foreground, you can see a woman with a dog.","uk":"На світлому передньому плані видно жінку з собакою.","ru":"На светлом переднем плане видна женщина с собакой."},"answer":{"de":"en","en":"","uk":"","ru":""},"distractors":["e","es","er"],"explanation":{"de":"Nach <b>„im“</b> (= in dem, Dativ, Maskulinum) braucht das Adjektiv die Endung <b>-en</b>: „im hellen Vordergrund“.","en":"After <b>„im“</b> (= in dem, dative, masculine), the adjective needs the ending <b>-en</b>: „im hellen Vordergrund“.","uk":"Після <b>„im“</b> (= in dem, давальний, чоловічий рід) прикметник потребує закінчення <b>-en</b>: „im hellen Vordergrund“.","ru":"После <b>„im“</b> (= in dem, дательный, мужской род) прилагательное требует окончания <b>-en</b>: „im hellen Vordergrund“."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"sb_a22_018","cat":"relativsatz_nominativ","sentence":{"de":"Die Verkäuferin, {{BLANK}} sehr freundlich ist, macht ihr ein Kompliment.","en":"The saleswoman, who is very friendly, gives her a compliment.","uk":"Продавчиня, яка дуже приязна, робить їй комплімент.","ru":"Продавщица, которая очень приветливая, делает ей комплимент."},"answer":{"de":"die","en":"","uk":"","ru":""},"distractors":["der","das","was"],"explanation":{"de":"Das Relativpronomen bezieht sich auf <b>„die Verkäuferin“</b> (Femininum) im Nominativ: <b>„die“</b>.<br>„der“ wäre für Maskulinum, „das“ für Neutrum.","en":"The relative pronoun refers to <b>„die Verkäuferin“</b> (feminine) in the nominative: <b>„die“</b>.<br>„der“ would be for masculine, „das“ for neuter.","uk":"Відносний займенник стосується <b>„die Verkäuferin“</b> (жіночий рід) у називному: <b>„die“</b>.<br>„der“ був би для чоловічого роду, „das“ — для середнього.","ru":"Относительное местоимение относится к <b>„die Verkäuferin“</b> (женский род) в именительном: <b>„die“</b>.<br>„der“ было бы для мужского рода, „das“ — для среднего."},"gram":"relativsatz_nominativ"},
  {"id":"sb_a22_019","cat":"relativsatz_nominativ","sentence":{"de":"Der Verkäufer, {{BLANK}} im zweiten Stock arbeitet, kennt sich mit Musik gut aus.","en":"The salesman who works on the second floor knows a lot about music.","uk":"Продавець, який працює на другому поверсі, добре знається на музиці.","ru":"Продавец, который работает на втором этаже, хорошо разбирается в музыке."},"answer":{"de":"der","en":"","uk":"","ru":""},"distractors":["die","das","den"],"explanation":{"de":"Das Relativpronomen bezieht sich auf <b>„der Verkäufer“</b> (Maskulinum) im Nominativ: <b>„der“</b>.<br>„den“ wäre der Akkusativ, hier aber ist das Relativpronomen Subjekt des Nebensatzes.","en":"The relative pronoun refers to <b>„der Verkäufer“</b> (masculine) in the nominative: <b>„der“</b>.<br>„den“ would be the accusative, but here the relative pronoun is the subject of the clause.","uk":"Відносний займенник стосується <b>„der Verkäufer“</b> (чоловічий рід) у називному: <b>„der“</b>.<br>„den“ був би знахідним, але тут займенник є підметом підрядного речення.","ru":"Относительное местоимение относится к <b>„der Verkäufer“</b> (мужской род) в именительном: <b>„der“</b>.<br>„den“ было бы винительным, но здесь местоимение является подлежащим придаточного."},"gram":"relativsatz_nominativ"},
  {"id":"sb_a22_020","cat":"relativsatz_nominativ","sentence":{"de":"Das Kleid, {{BLANK}} im Schaufenster hängt, gefällt ihr sehr.","en":"The dress that is hanging in the shop window pleases her a lot.","uk":"Сукня, яка висить у вітрині, дуже їй подобається.","ru":"Платье, которое висит в витрине, ей очень нравится."},"answer":{"de":"das","en":"","uk":"","ru":""},"distractors":["der","die","dessen"],"explanation":{"de":"Das Relativpronomen bezieht sich auf <b>„das Kleid“</b> (Neutrum) im Nominativ: <b>„das“</b>.<br>„dessen“ wäre ein Genitiv-Relativpronomen (Besitz), das passt hier nicht.","en":"The relative pronoun refers to <b>„das Kleid“</b> (neuter) in the nominative: <b>„das“</b>.<br>„dessen“ would be a genitive relative pronoun (possession), which does not fit here.","uk":"Відносний займенник стосується <b>„das Kleid“</b> (середній рід) у називному: <b>„das“</b>.<br>„dessen“ був би родовим займенником (присвійність), що тут не підходить.","ru":"Относительное местоимение относится к <b>„das Kleid“</b> (средний род) в именительном: <b>„das“</b>.<br>„dessen“ было бы родительным местоимением (принадлежность), что здесь не подходит."},"gram":"relativsatz_nominativ"},
  {"id":"sb_a22_021","cat":"verb_werden","sentence":{"de":"Nach der Ausbildung {{BLANK}} Elif eine gute Handwerkerin.","en":"After her training, Elif will become a good craftswoman.","uk":"Після навчання Еліф стане хорошою ремісницею.","ru":"После обучения Элиф станет хорошей ремесленницей."},"answer":{"de":"wird","en":"","uk":"","ru":""},"distractors":["ist","hat","war"],"explanation":{"de":"<b>„werden“</b> drückt eine zukünftige Veränderung/Entwicklung aus: „sie wird etwas“.<br>„ist“ würde einen aktuellen Zustand beschreiben, keine Entwicklung.","en":"<b>„werden“</b> expresses a future change/development: „she becomes something“.<br>„ist“ would describe a current state, not a development.","uk":"<b>„werden“</b> виражає майбутню зміну/розвиток: „вона стане кимось“.<br>„ist“ описувало б поточний стан, а не розвиток.","ru":"<b>„werden“</b> выражает будущее изменение/развитие: „она станет кем-то“.<br>„ist“ описывало бы текущее состояние, а не развитие."},"gram":"verb_werden"},
  {"id":"sb_a22_022","cat":"verb_werden","sentence":{"de":"Was {{BLANK}} du gern werden, wenn du frei wählen könntest?","en":"What would you like to become if you could choose freely?","uk":"Ким би ти хотів стати, якби міг вільно обирати?","ru":"Кем бы ты хотел стать, если бы мог свободно выбирать?"},"answer":{"de":"würdest","en":"","uk":"","ru":""},"distractors":["wirst","wurdest","werdest"],"explanation":{"de":"<b>„würdest“</b> (Konjunktiv II) passt zur hypothetischen Frage mit „wenn du könntest“.<br>„wirst“ (Präsens) wäre für eine reale, nicht hypothetische Frage.","en":"<b>„würdest“</b> (subjunctive II) fits the hypothetical question with „wenn du könntest“.<br>„wirst“ (present) would be for a real, non-hypothetical question.","uk":"<b>„würdest“</b> (конʼюнктив II) підходить до гіпотетичного питання з „wenn du könntest“.<br>„wirst“ (теперішній) було б для реального, негіпотетичного питання.","ru":"<b>„würdest“</b> (конъюнктив II) подходит к гипотетическому вопросу с „wenn du könntest“.<br>„wirst“ (настоящее) было бы для реального, негипотетического вопроса."},"gram":"verb_werden"},
  {"id":"sb_a22_023","cat":"verb_werden","sentence":{"de":"Das Handwerk {{BLANK}} in Deutschland immer wichtiger.","en":"Craft is becoming increasingly important in Germany.","uk":"Ремесло у Німеччині стає дедалі важливішим.","ru":"Ремесло в Германии становится всё более важным."},"answer":{"de":"wird","en":"","uk":"","ru":""},"distractors":["ist","hat","war"],"explanation":{"de":"<b>„wird … wichtiger“</b> beschreibt eine allmähliche Veränderung in der Gegenwart.<br>„ist wichtiger“ würde nur den jetzigen Zustand ohne Entwicklung ausdrücken.","en":"<b>„wird … wichtiger“</b> describes a gradual change in the present.<br>„ist wichtiger“ would only express the current state without development.","uk":"<b>„wird … wichtiger“</b> описує поступову зміну в теперішньому.<br>„ist wichtiger“ виражало б лише поточний стан без розвитку.","ru":"<b>„wird … wichtiger“</b> описывает постепенное изменение в настоящем.<br>„ist wichtiger“ выражало бы лишь текущее состояние без развития."},"gram":"verb_werden"},
  {"id":"sb_a22_024","cat":"verb_lassen","sentence":{"de":"Sie {{BLANK}} ihren Sohn den Hund allein ausführen.","en":"She lets her son walk the dog alone.","uk":"Вона дозволяє синові самому вигулювати собаку.","ru":"Она позволяет сыну самому выгуливать собаку."},"answer":{"de":"lässt","en":"","uk":"","ru":""},"distractors":["macht","gibt","hilft"],"explanation":{"de":"<b>„lassen“</b> + Infinitiv bedeutet, jemandem etwas zu tun zu erlauben.<br>„machen“ würde bedeuten, dass sie es selbst tut.","en":"<b>„lassen“</b> + infinitive means allowing someone to do something.<br>„machen“ would mean that she does it herself.","uk":"<b>„lassen“</b> + інфінітив означає дозволяти комусь щось робити.<br>„machen“ означало б, що вона робить це сама.","ru":"<b>„lassen“</b> + инфинитив означает разрешать кому-то что-то делать.<br>„machen“ означало бы, что она делает это сама."},"gram":"verb_lassen"},
  {"id":"sb_a22_025","cat":"verb_lassen","sentence":{"de":"Ich {{BLANK}} mein Auto in der Werkstatt reparieren.","en":"I have my car repaired at the workshop.","uk":"Я віддаю свою машину на ремонт до майстерні.","ru":"Я отдаю свою машину в ремонт в мастерскую."},"answer":{"de":"lasse","en":"","uk":"","ru":""},"distractors":["mache","gebe","habe"],"explanation":{"de":"<b>„lassen“</b> + Infinitiv drückt aus, dass jemand anderes die Arbeit für einen macht.<br>„machen“ würde bedeuten, dass man es selbst repariert.","en":"<b>„lassen“</b> + infinitive expresses that someone else does the work for you.<br>„machen“ would mean that you repair it yourself.","uk":"<b>„lassen“</b> + інфінітив виражає, що роботу виконує хтось інший.<br>„machen“ означало б, що людина ремонтує сама.","ru":"<b>„lassen“</b> + инфинитив выражает, что работу выполняет кто-то другой.<br>„machen“ означало бы, что человек чинит сам."},"gram":"verb_lassen"},
  {"id":"sb_a22_026","cat":"verb_lassen","sentence":{"de":"Lässt du deinen Sohn den Hund allein {{BLANK}}?","en":"Do you let your son walk the dog alone?","uk":"Ти дозволяєш синові самому вигулювати собаку?","ru":"Ты позволяешь сыну самому выгуливать собаку?"},"answer":{"de":"ausführen","en":"","uk":"","ru":""},"distractors":["auszuführen","ausgeführt","ausführt"],"explanation":{"de":"Nach <b>„lassen“</b> steht der Infinitiv ohne „zu“: „lassen … ausführen“.<br>„auszuführen“ (mit „zu“) wäre hier falsch.","en":"After <b>„lassen“</b>, the infinitive is used without „zu“: „lassen … ausführen“.<br>„auszuführen“ (with „zu“) would be wrong here.","uk":"Після <b>„lassen“</b> вживається інфінітив без „zu“: „lassen … ausführen“.<br>„auszuführen“ (з „zu“) тут було б неправильно.","ru":"После <b>„lassen“</b> употребляется инфинитив без „zu“: „lassen … ausführen“.<br>„auszuführen“ (с „zu“) здесь было бы неправильно."},"gram":"verb_lassen"},
  {"id":"sb_a22_027","cat":"nebensatz_mit_damit","sentence":{"de":"Sie erklärt die Regeln genau, {{BLANK}} alle sie verstehen.","en":"She explains the rules precisely so that everyone understands them.","uk":"Вона детально пояснює правила, щоб усі їх зрозуміли.","ru":"Она подробно объясняет правила, чтобы все их поняли."},"answer":{"de":"damit","en":"","uk":"","ru":""},"distractors":["dass","weil","obwohl"],"explanation":{"de":"<b>„damit“</b> nennt das Ziel einer Handlung (zwei verschiedene Subjekte: sie / alle).<br>„dass“ würde nur eine Tatsache anschließen, kein Ziel.","en":"<b>„damit“</b> states the purpose of an action (two different subjects: she / everyone).<br>„dass“ would only add a fact, not a purpose.","uk":"<b>„damit“</b> називає мету дії (два різні підмети: вона / усі).<br>„dass“ лише додало б факт, а не мету.","ru":"<b>„damit“</b> называет цель действия (два разных подлежащих: она / все).<br>„dass“ лишь добавило бы факт, а не цель."},"gram":"nebensatz_mit_damit"},
  {"id":"sb_a22_028","cat":"nebensatz_mit_damit","sentence":{"de":"Er hilft freiwillig im Tierheim, {{BLANK}} die Tiere mehr Aufmerksamkeit bekommen.","en":"He voluntarily helps at the animal shelter so that the animals get more attention.","uk":"Він добровільно допомагає в притулку для тварин, щоб тварини отримували більше уваги.","ru":"Он добровольно помогает в приюте для животных, чтобы животные получали больше внимания."},"answer":{"de":"damit","en":"","uk":"","ru":""},"distractors":["weil","dass","wenn"],"explanation":{"de":"<b>„damit“</b> drückt hier den Zweck seiner Hilfe aus.<br>„weil“ würde einen Grund nennen, nicht ein Ziel für die Zukunft.","en":"<b>„damit“</b> here expresses the purpose of his help.<br>„weil“ would give a reason, not a goal for the future.","uk":"<b>„damit“</b> тут виражає мету його допомоги.<br>„weil“ називало б причину, а не мету на майбутнє.","ru":"<b>„damit“</b> здесь выражает цель его помощи.<br>„weil“ называло бы причину, а не цель на будущее."},"gram":"nebensatz_mit_damit"},
  {"id":"sb_a22_029","cat":"nebensatz_mit_damit","sentence":{"de":"Die Eltern geben ihm mehr Verantwortung, {{BLANK}} er selbstständiger wird.","en":"The parents give him more responsibility so that he becomes more independent.","uk":"Батьки дають йому більше відповідальності, щоб він став самостійнішим.","ru":"Родители дают ему больше ответственности, чтобы он стал самостоятельнее."},"answer":{"de":"damit","en":"","uk":"","ru":""},"distractors":["dass","ob","als"],"explanation":{"de":"<b>„damit“</b> nennt das gewünschte Ergebnis (Ziel) der Handlung der Eltern.<br>„ob“ würde eine Unsicherheit ausdrücken, kein Ziel.","en":"<b>„damit“</b> states the desired result (goal) of the parents' action.<br>„ob“ would express uncertainty, not a goal.","uk":"<b>„damit“</b> називає бажаний результат (мету) дії батьків.<br>„ob“ виражало б невпевненість, а не мету.","ru":"<b>„damit“</b> называет желаемый результат (цель) действия родителей.<br>„ob“ выражало бы неуверенность, а не цель."},"gram":"nebensatz_mit_damit"},
  {"id":"sb_a22_030","cat":"indirekte_fragen","sentence":{"de":"Ich weiß nicht, {{BLANK}} sich das zuständige Amt befindet.","en":"I don't know where the responsible office is located.","uk":"Я не знаю, де знаходиться відповідна установа.","ru":"Я не знаю, где находится соответствующее учреждение."},"answer":{"de":"wo","en":"","uk":"","ru":""},"distractors":["ob","dass","was"],"explanation":{"de":"Nach einer indirekten Frage mit Fragewort (wo?) steht <b>„wo“</b> direkt am Satzanfang des Nebensatzes.<br>„ob“ würde nur bei Ja/Nein-Fragen benutzt.","en":"In an indirect question with a question word (where?), <b>„wo“</b> comes directly at the start of the clause.<br>„ob“ would only be used for yes/no questions.","uk":"У непрямому питанні з питальним словом (де?) <b>„wo“</b> стоїть одразу на початку підрядного речення.<br>„ob“ вживалося б лише для питань «так/ні».","ru":"В косвенном вопросе с вопросительным словом (где?) <b>„wo“</b> стоит сразу в начале придаточного.<br>„ob“ употреблялось бы только для вопросов «да/нет»."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"sb_a22_031","cat":"indirekte_fragen","sentence":{"de":"Sie fragt, {{BLANK}} ihr ausländischer Führerschein in Deutschland gültig ist.","en":"She asks whether her foreign driving licence is valid in Germany.","uk":"Вона запитує, чи дійсні тут її іноземні водійські права.","ru":"Она спрашивает, действительны ли здесь её иностранные водительские права."},"answer":{"de":"ob","en":"","uk":"","ru":""},"distractors":["wo","wann","dass"],"explanation":{"de":"Bei einer Ja/Nein-Frage ohne Fragewort benutzt man im Nebensatz <b>„ob“</b>.<br>„wo“ oder „wann“ würden ein konkretes Fragewort brauchen.","en":"For a yes/no question without a question word, the subordinate clause uses <b>„ob“</b>.<br>„wo“ or „wann“ would need a specific question word.","uk":"Для питання «так/ні» без питального слова в підрядному вживають <b>„ob“</b>.<br>„wo“ чи „wann“ потребували б конкретного питального слова.","ru":"Для вопроса «да/нет» без вопросительного слова в придаточном употребляют <b>„ob“</b>.<br>„wo“ или „wann“ требовали бы конкретного вопросительного слова."},"gram":"indirekter_fragesatz_ob"},
  {"id":"sb_a22_032","cat":"indirekte_fragen","sentence":{"de":"Er fragt, {{BLANK}} Behörde für seinen Antrag zuständig ist.","en":"He asks which authority is responsible for his application.","uk":"Він запитує, яке відомство відповідає за його заяву.","ru":"Он спрашивает, какое ведомство отвечает за его заявление."},"answer":{"de":"welche","en":"","uk":"","ru":""},"distractors":["ob","dass","wie"],"explanation":{"de":"<b>„welche“</b> fragt nach einer Auswahl (welche von mehreren Behörden) und steht am Anfang des Nebensatzes.<br>„ob“ passt hier nicht, weil es keine Ja/Nein-Frage ist.","en":"<b>„welche“</b> (which) asks about a choice (which of several authorities) and stands at the start of the clause.<br>„ob“ does not fit here because it is not a yes/no question.","uk":"<b>„welche“</b> запитує про вибір (яке з кількох відомств) і стоїть на початку підрядного.<br>„ob“ тут не підходить, бо це не питання «так/ні».","ru":"<b>„welche“</b> спрашивает о выборе (какое из нескольких ведомств) и стоит в начале придаточного.<br>„ob“ здесь не подходит, так как это не вопрос «да/нет»."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"sb_a22_033","cat":"indirekte_fragen","sentence":{"de":"Niemand weiß, {{BLANK}} man gegen einen Bußgeldbescheid Widerspruch einlegen kann.","en":"Nobody knows whether you can appeal against a fine notice.","uk":"Ніхто не знає, чи можна оскаржити повідомлення про штраф.","ru":"Никто не знает, можно ли оспорить уведомление о штрафе."},"answer":{"de":"ob","en":"","uk":"","ru":""},"distractors":["wo","wann","welche"],"explanation":{"de":"Da die Frage mit Ja/Nein beantwortet werden kann (Ist es möglich?), benutzt man <b>„ob“</b>.<br>„wo“ oder „wann“ würden nach Ort oder Zeit fragen, nicht nach Möglichkeit.","en":"Since the question can be answered with yes/no (Is it possible?), <b>„ob“</b> is used.<br>„wo“ or „wann“ would ask about place or time, not possibility.","uk":"Оскільки на питання можна відповісти «так/ні» (Чи можливо це?), вживають <b>„ob“</b>.<br>„wo“ чи „wann“ запитували б про місце чи час, а не про можливість.","ru":"Поскольку на вопрос можно ответить «да/нет» (Возможно ли это?), употребляют <b>„ob“</b>.<br>„wo“ или „wann“ спрашивали бы о месте или времени, а не о возможности."},"gram":"indirekter_fragesatz_ob"},
  {"id":"sb_a22_034","cat":"dass_satz_wdh","sentence":{"de":"Die Firma schreibt, {{BLANK}} ihre Bewerbung angekommen ist.","en":"The company writes that her application has arrived.","uk":"Фірма пише, що її заяву отримали.","ru":"Фирма пишет, что её заявление получили."},"answer":{"de":"dass","en":"","uk":"","ru":""},"distractors":["ob","weil","wenn"],"explanation":{"de":"Nach <b>„schreiben“</b> berichtet man eine Tatsache mit <b>„dass“</b>, Verb am Ende.<br>„ob“ würde eine Unsicherheit ausdrücken, hier ist es aber eine sichere Mitteilung.","en":"After <b>„schreiben“</b> (to write) you report a fact with <b>„dass“</b>, verb at the end.<br>„ob“ would express uncertainty, but here it is a certain statement.","uk":"Після <b>„schreiben“</b> (писати) факт передають через <b>„dass“</b>, дієслово в кінці.<br>„ob“ виражало б невпевненість, а тут це впевнене повідомлення.","ru":"После <b>„schreiben“</b> (писать) факт передают через <b>„dass“</b>, глагол в конце.<br>„ob“ выражало бы неуверенность, а здесь это уверенное сообщение."},"gram":"dass_satz_wdh"},
  {"id":"sb_a22_035","cat":"dass_satz_wdh","sentence":{"de":"Er hofft, {{BLANK}} die Ausbildung ihm Spaß machen wird.","en":"He hopes that the training will be fun for him.","uk":"Він сподівається, що навчання йому сподобається.","ru":"Он надеется, что обучение ему понравится."},"answer":{"de":"dass","en":"","uk":"","ru":""},"distractors":["ob","weil","als"],"explanation":{"de":"Nach <b>„hoffen“</b> steht ein <b>„dass“</b>-Satz mit Verb am Ende.<br>„als“ passt nur bei einmaligen Ereignissen in der Vergangenheit.","en":"After <b>„hoffen“</b> (to hope) a <b>„dass“</b>-clause follows with the verb at the end.<br>„als“ only fits with single events in the past.","uk":"Після <b>„hoffen“</b> (сподіватися) йде речення з <b>„dass“</b> і дієсловом у кінці.<br>„als“ підходить лише для одноразових подій у минулому.","ru":"После <b>„hoffen“</b> (надеяться) следует придаточное с <b>„dass“</b> и глаголом в конце.<br>„als“ подходит только для однократных событий в прошлом."},"gram":"dass_satz_wdh"},
  {"id":"sb_a22_036","cat":"dass_satz_wdh","sentence":{"de":"Man merkt sofort, {{BLANK}} in dieser Werkstatt viel gearbeitet wird.","en":"You notice immediately that a lot of work is done in this workshop.","uk":"Одразу помітно, що в цій майстерні багато працюють.","ru":"Сразу заметно, что в этой мастерской много работают."},"answer":{"de":"dass","en":"","uk":"","ru":""},"distractors":["ob","wie","wenn"],"explanation":{"de":"<b>„merken, dass …“</b> ist eine feste Struktur, um eine Beobachtung als Tatsache zu formulieren.<br>„wie“ würde nach der Art und Weise fragen, nicht nach der Tatsache selbst.","en":"<b>„merken, dass …“</b> (to notice that) is a fixed structure for stating an observation as a fact.<br>„wie“ would ask about the manner, not the fact itself.","uk":"<b>„merken, dass …“</b> (помічати, що) — стала конструкція для констатації факту.<br>„wie“ запитувало б про спосіб, а не про сам факт.","ru":"<b>„merken, dass …“</b> (замечать, что) — устойчивая конструкция для констатации факта.<br>„wie“ спрашивало бы о способе, а не о самом факте."},"gram":"dass_satz_wdh"},
  {"id":"sb_a22_037","cat":"nebensaetze_konnektoren_wdh","sentence":{"de":"Wir feiern heute Abend, {{BLANK}} wir morgen früh aufstehen müssen.","en":"We are celebrating tonight, although we have to get up early tomorrow.","uk":"Ми сьогодні святкуємо, хоча завтра треба рано вставати.","ru":"Мы сегодня празднуем, хотя завтра нужно рано вставать."},"answer":{"de":"obwohl","en":"","uk":"","ru":""},"distractors":["weil","damit","dass"],"explanation":{"de":"<b>„obwohl“</b> drückt einen Gegensatz aus (feiern trotz des frühen Aufstehens).<br>„weil“ würde einen Grund nennen, der hier aber keinen Sinn ergibt.","en":"<b>„obwohl“</b> (although) expresses a contrast (celebrating despite having to get up early).<br>„weil“ would give a reason, which does not make sense here.","uk":"<b>„obwohl“</b> (хоча) виражає протиставлення (святкують, попри ранній підйом).<br>„weil“ називало б причину, що тут не має сенсу.","ru":"<b>„obwohl“</b> (хотя) выражает противопоставление (празднуют, несмотря на ранний подъём).<br>„weil“ называло бы причину, что здесь не имеет смысла."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"sb_a22_038","cat":"nebensaetze_konnektoren_wdh","sentence":{"de":"Sie sendet die Einladungen früh, {{BLANK}} alle rechtzeitig planen können.","en":"She sends the invitations early so that everyone can plan in time.","uk":"Вона розсилає запрошення заздалегідь, щоб усі встигли спланувати.","ru":"Она рассылает приглашения заранее, чтобы все успели спланировать."},"answer":{"de":"damit","en":"","uk":"","ru":""},"distractors":["weil","obwohl","dass"],"explanation":{"de":"<b>„damit“</b> nennt das Ziel des frühen Versendens.<br>„weil“ würde einen Grund nennen, aber hier geht es um einen Zweck in der Zukunft.","en":"<b>„damit“</b> states the purpose of sending them early.<br>„weil“ would give a reason, but here it is about a purpose for the future.","uk":"<b>„damit“</b> називає мету раннього розсилання.<br>„weil“ називало б причину, але тут ідеться про мету на майбутнє.","ru":"<b>„damit“</b> называет цель раннего отправления.<br>„weil“ называло бы причину, но здесь речь о цели на будущее."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"sb_a22_039","cat":"nebensaetze_konnektoren_wdh","sentence":{"de":"Wir laden alle Nachbarn ein, {{BLANK}} wir ein gutes Verhältnis zu ihnen haben.","en":"We invite all the neighbours because we have a good relationship with them.","uk":"Ми запрошуємо всіх сусідів, тому що маємо з ними хороші стосунки.","ru":"Мы приглашаем всех соседей, потому что у нас с ними хорошие отношения."},"answer":{"de":"weil","en":"","uk":"","ru":""},"distractors":["damit","obwohl","ob"],"explanation":{"de":"<b>„weil“</b> nennt den Grund für die Einladung.<br>„damit“ würde ein Ziel ausdrücken, hier wird aber ein Grund genannt.","en":"<b>„weil“</b> gives the reason for the invitation.<br>„damit“ would express a purpose, but here a reason is given.","uk":"<b>„weil“</b> називає причину запрошення.<br>„damit“ виражало б мету, а тут названо причину.","ru":"<b>„weil“</b> называет причину приглашения.<br>„damit“ выражало бы цель, а здесь названа причина."},"gram":"nebensaetze_konnektoren_wdh"},
  {"id":"sb_a22_040","cat":"nebensaetze_konnektoren_wdh","sentence":{"de":"Diese Tradition gibt es schon lange, {{BLANK}} viele junge Leute sie nicht mehr kennen.","en":"This tradition has existed for a long time, although many young people no longer know it.","uk":"Ця традиція існує вже давно, хоча багато молодих людей її вже не знають.","ru":"Эта традиция существует уже давно, хотя многие молодые люди её уже не знают."},"answer":{"de":"obwohl","en":"","uk":"","ru":""},"distractors":["weil","damit","wenn"],"explanation":{"de":"<b>„obwohl“</b> drückt einen Gegensatz aus (die Tradition existiert trotzdem, obwohl sie unbekannt wird).<br>„wenn“ würde eine Bedingung oder Zeit ausdrücken, keinen Gegensatz.","en":"<b>„obwohl“</b> (although) expresses a contrast (the tradition exists anyway, although it is becoming unknown).<br>„wenn“ would express a condition or time, not a contrast.","uk":"<b>„obwohl“</b> (хоча) виражає протиставлення (традиція існує, попри те що стає невідомою).<br>„wenn“ виражало б умову чи час, а не протиставлення.","ru":"<b>„obwohl“</b> (хотя) выражает противопоставление (традиция существует, несмотря на то что становится неизвестной).<br>„wenn“ выражало бы условие или время, а не противопоставление."},"gram":"nebensaetze_konnektoren_wdh"}
];
