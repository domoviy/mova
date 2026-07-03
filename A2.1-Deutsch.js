var PRIMARY_LANG = "de"; // головна мова контенту: term/ short/ def спочатку створюються тут, en/ uk/ ru — точний переклад цієї версії

var AUDIO_CONFIG = {
  "de": ["100", "080"], //аудіо генерується зі швидкістю 80% і 100%
  "en": ["100"],        //аудіо генерується зі швидкістю 100%
  "uk": ["100"],
  "ru": ["100"]
};


// ════════════════════════════════════════════════════════════════
//  GRAMMAR — 20 граматичних конструкцій рівня A2.1 (Die neue Linie 1)
//  Використовується як довідник для поля "gram" у VOCAB/DIALOGE/SPRACHBAUSTEINE
// ════════════════════════════════════════════════════════════════

var GRAMMAR = [
  {id:'perfekt', de:"Perfekt", en:"Present perfect (Perfekt)", uk:"Перфект", ru:"Перфект"},
  {id:'praeteritum', de:"Präteritum", en:"Simple past (Präteritum)", uk:"Претерит", ru:"Претерит"},
  {id:'modalverben', de:"Modalverben (Präsens)", en:"Modal verbs (present)", uk:"Модальні дієслова (теперішній час)", ru:"Модальные глаголы (настоящее время)"},
  {id:'modalverben_praeteritum', de:"Modalverben im Präteritum", en:"Modal verbs in the simple past", uk:"Модальні дієслова у претериті", ru:"Модальные глаголы в претерите"},
  {id:'weil_satz', de:"Nebensatz mit weil", en:"Subordinate clause with weil (because)", uk:"Підрядне речення з weil (тому що)", ru:"Придаточное предложение с weil (потому что)"},
  {id:'dass_satz', de:"Nebensatz mit dass", en:"Subordinate clause with dass (that)", uk:"Підрядне речення з dass (що)", ru:"Придаточное предложение с dass (что)"},
  {id:'wenn_satz', de:"Nebensatz mit wenn", en:"Subordinate clause with wenn (if/when)", uk:"Підрядне речення з wenn (якщо/коли)", ru:"Придаточное предложение с wenn (если/когда)"},
  {id:'als_wenn_schon_erst', de:"als/wenn (Vergangenheit) und schon/erst", en:"als/wenn (past) and schon/erst (already/only)", uk:"als/wenn (минулий час) і schon/erst (вже/лише)", ru:"als/wenn (прошедшее время) и schon/erst (уже/только)"},
  {id:'dativ_verben', de:"Verben mit Dativ", en:"Verbs with dative", uk:"Дієслова з давальним відмінком", ru:"Глаголы с дательным падежом"},
  {id:'dativ_akkusativ_verben', de:"Verben mit Dativ und Akkusativ", en:"Verbs with dative and accusative", uk:"Дієслова з давальним і знахідним відмінками", ru:"Глаголы с дательным и винительным падежами"},
  {id:'wechselpraepositionen', de:"Wechselpräpositionen (Akkusativ/Dativ)", en:"Two-way prepositions (accusative/dative)", uk:"Прийменники подвійного керування (знахідний/давальний)", ru:"Предлоги двойного управления (винительный/дательный)"},
  {id:'lokale_praepositionen', de:"Lokale Präpositionen und Wegbeschreibung", en:"Prepositions of place and directions", uk:"Прийменники місця та опис маршруту", ru:"Предлоги места и описание маршрута"},
  {id:'temporale_praepositionen', de:"Temporale Präpositionen", en:"Prepositions of time", uk:"Прийменники часу", ru:"Предлоги времени"},
  {id:'adjektivendungen', de:"Adjektivendungen nach unbestimmtem Artikel/Possessivartikel", en:"Adjective endings after the indefinite/possessive article", uk:"Закінчення прикметників після неозначеного/присвійного артикля", ru:"Окончания прилагательных после неопределённого/притяжательного артикля"},
  {id:'was_fuer_ein', de:"Fragewort „Was für ein …?“", en:"Question word „What kind of …?“", uk:"Питальне слово «Який саме …?»", ru:"Вопросительное слово «Какой именно …?»"},
  {id:'komparativ', de:"Komparativ und Vergleiche (als, (nicht) so … wie)", en:"Comparative and comparisons (than, as … as)", uk:"Компаратив і порівняння (ніж, такий самий … як)", ru:"Компаратив и сравнения (чем, такой же … как)"},
  {id:'superlativ', de:"Superlativ", en:"Superlative", uk:"Суперлатив", ru:"Суперлатив"},
  {id:'demonstrativartikel', de:"Demonstrativartikel dieser, diese, dieses", en:"Demonstrative article dieser, diese, dieses (this)", uk:"Вказівний артикль dieser, diese, dieses (цей)", ru:"Указательный артикль dieser, diese, dieses (этот)"},
  {id:'hoeflichkeit_konjunktiv', de:"Höfliche Bitten (Konjunktiv II)", en:"Polite requests (subjunctive II)", uk:"Ввічливі прохання (кон'юнктив II)", ru:"Вежливые просьбы (конъюнктив II)"},
  {id:'personalpronomen', de:"Personalpronomen (Nominativ/Akkusativ/Dativ)", en:"Personal pronouns (nominative/accusative/dative)", uk:"Особові займенники (називний/знахідний/давальний)", ru:"Личные местоимения (именительный/винительный/дательный)"}
];

// ════════════════════════════════════════════════════════════════
//  VOCAB DATA  ·  Deutsch A2.1  ·  Die neue Linie 1 (Klett)
//  Формат кожної картки:
//  {
//    id:    унікальний рядок,
//    cat:   id категорії з масиву CATS,
//    term:  { de, en, uk, ru }  — термін / слово,
//    short: { de, en, uk, ru }  — коротке пояснення,
//    def:   { de, en, uk, ru }  — приклад речення або означення,
//    gram:  id з масиву GRAMMAR, або "" якщо релевантної граматики нема
//  }
// ════════════════════════════════════════════════════════════════


// ── КАТЕГОРІЇ (розділи підручника) ──────────────────────────────

var CATS = [
  {id:'k1', de:"Sind Sie neu hier?", en:"Are you new here?", uk:"Ви тут новенький?", ru:"Вы здесь новенький?", e:'👋'},
  {id:'k2', de:"Zusammen wohnen", en:"Living together", uk:"Жити разом", ru:"Жить вместе", e:'🏠'},
  {id:'k3', de:"Arbeit und Freizeit", en:"Work and leisure", uk:"Робота і дозвілля", ru:"Работа и досуг", e:'⚽'},
  {id:'k4', de:"Was ziehe ich an?", en:"What shall I wear?", uk:"Що мені одягнути?", ru:"Что мне надеть?", e:'👕'},
  {id:'k5', de:"Fahrrad, Auto oder Bus?", en:"Bike, car or bus?", uk:"Велосипед, авто чи автобус?", ru:"Велосипед, авто или автобус?", e:'🚌'},
  {id:'k6', de:"Eine Familie – viele Länder", en:"One family – many countries", uk:"Одна сімʼя – багато країн", ru:"Одна семья – много стран", e:'👨‍👩‍👧‍👦'},
  {id:'k7', de:"Wir machen einen Ausflug", en:"We're going on a trip", uk:"Ми їдемо на екскурсію", ru:"Мы едем на экскурсию", e:'🚐'},
  {id:'k8', de:"Auf nach Berlin!", en:"Off to Berlin!", uk:"Вперед до Берліна!", ru:"Вперёд в Берлин!", e:'🏙️'}
];

// ── МОВИ ─────────────────────────────────────────────────────
var LC = {
  de: {code:'de-DE', ms:['Katja','Hedda','Stefan','Conrad']},
  en: {code:'en-US', ms:['Aria','Jenny','Guy','Zira','David']},
  uk: {code:'uk-UA', ms:['Ostap','Polina']},
  ru: {code:'ru-RU', ms:['Irina','Pavel','Dmitry']}
};
var F  = {en:'🇬🇧', uk:'🇺🇦', de:'🇩🇪', ru:'🇷🇺'};
var LN = {en:'English', uk:'Українська', de:'Deutsch', ru:'Русский'};

// ── КАРТКИ УРОКІВ (LESSONS) ─────────────────────────────────────
// Структура: 8 Kapitel × 4 модулі, згідно з офіційним змістом (Inhalt)
// підручника "Die neue Linie 1", A2.1 (Ernst Klett Sprachen, 2023)

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
    "grammar": "Wiederholung: Perfekt",
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
    "grammar": "Nebensatz mit weil",
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
    "grammar": "Verben mit Dativ; Verben mit Dativ und Akkusativ",
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
    "grammar": "Wiederholung: Perfekt",
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
    "grammar": "Wechselpräpositionen",
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
    "grammar": "Nebensatz mit weil (Perfekt und Modalverben)",
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
    "grammar": "Wiederholung: Artikel im Dativ, Modalverben",
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
    "grammar": "Nebensatz mit dass",
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
    "grammar": "Modalverben im Präteritum",
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
    "grammar": "Wiederholung: Verben mit Dativ, Personalpronomen",
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
    "grammar": "Adjektive nach unbestimmtem Artikel/Possessivartikel: Nominativ",
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
    "grammar": "Adjektive: Akkusativ und Dativ; Fragewort Was für ein ...?",
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
    "grammar": "Nebensatz mit wenn",
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
    "grammar": "Wiederholung: Nebensatz mit weil und dass",
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
    "grammar": "Komparativ; Vergleiche mit als, (nicht) so ... wie",
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
    "grammar": "Superlativ",
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
    "grammar": "Wiederholung: Modalverben im Präsens und Präteritum",
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
    "grammar": "temporale Präpositionen",
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
    "grammar": "Nebensätze mit als oder wenn; schon oder erst",
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
    "grammar": "Wiederholung: Nebensatz mit wenn",
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
    "grammar": "Demonstrativartikel dieser, diese, dieses",
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
    "grammar": "Präteritum",
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
    "grammar": "Wiederholung: lokale Präpositionen",
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
    "grammar": "lokale Präpositionen; Wegbeschreibung",
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
    "grammar": "Adjektive nach unbestimmtem Artikel und Possessivartikel",
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
  }
];

// ════════════════════════════════════════════════════════════════
//  VOCAB — слова рівня A2 за розділами підручника
// ════════════════════════════════════════════════════════════════

var VOCAB = [
{"id": "k1_001", "cat": "k1", "term": {"de": "sich vorstellen", "en": "to introduce oneself", "uk": "представлятися", "ru": "представляться"}, "short": {"de": "Man sagt seinen Namen und ein paar Informationen über sich.", "en": "You say your name and some information about yourself.", "uk": "Ти називаєш своє імʼя і трохи інформації про себе.", "ru": "Ты называешь своё имя и немного информации о себе."}, "def": {"de": "Der neue Kollege <g>hat</g> sich heute Morgen im Meeting allen <g><b>vorgestellt</b></g>.", "en": "The new colleague <g>has</g> <g><b>introduced</b></g> himself to everyone in the meeting this morning.", "uk": "Новий колега сьогодні вранці <b>представився</b> всім на нараді.", "ru": "Новый коллега сегодня утром <b>представился</b> всем на совещании."}, "gram": "perfekt"},
{"id": "k1_002", "cat": "k1", "term": {"de": "der Kollege / die Kollegin", "en": "colleague", "uk": "колега", "ru": "коллега"}, "short": {"de": "Eine Person, mit der man zusammen in einer Firma arbeitet.", "en": "A person you work with together in a company.", "uk": "Людина, з якою ти разом працюєш у фірмі.", "ru": "Человек, с которым ты вместе работаешь в фирме."}, "def": {"de": "Meine neue <b>Kollegin</b> <g>ist</g> letzte Woche zu uns ins Team <g><b>gekommen</b></g>.", "en": "My new <b>colleague</b> <g>has</g> <g><b>joined</b></g> our team last week.", "uk": "Моя нова <b>колега</b> минулого тижня приєдналася до нашої команди.", "ru": "Моя новая <b>коллега</b> на прошлой неделе присоединилась к нашей команде."}, "gram": "perfekt"},
{"id": "k1_003", "cat": "k1", "term": {"de": "die Firma", "en": "company", "uk": "фірма", "ru": "фирма"}, "short": {"de": "Ein Unternehmen, in dem Menschen arbeiten.", "en": "A company where people work.", "uk": "Підприємство, де працюють люди.", "ru": "Предприятие, где работают люди."}, "def": {"de": "Er <g>hat</g> zwei Jahre lang bei einer kleinen <b>Firma</b> in Köln <g><b>gearbeitet</b></g>.", "en": "He <g>has</g> <g><b>worked</b></g> at a small <b>company</b> in Cologne for two years.", "uk": "Він два роки <b>працював</b> у маленькій <b>фірмі</b> в Кельні.", "ru": "Он два года <b>работал</b> в маленькой <b>фирме</b> в Кёльне."}, "gram": "perfekt"},
{"id": "k1_004", "cat": "k1", "term": {"de": "der Chef / die Chefin", "en": "boss", "uk": "начальник / начальниця", "ru": "начальник"}, "short": {"de": "Die Person, die in einer Firma die Verantwortung hat.", "en": "The person who is in charge in a company.", "uk": "Особа, яка відповідає за роботу у фірмі.", "ru": "Человек, который отвечает за работу в фирме."}, "def": {"de": "Die neue <b>Chefin</b> <g>hat</g> sich am Montag allen Mitarbeitern <g><b>vorgestellt</b></g>.", "en": "The new <b>boss</b> <g>has</g> <g><b>introduced</b></g> herself to all employees on Monday.", "uk": "Нова <b>керівниця</b> у понеділок <b>представилася</b> усім співробітникам.", "ru": "Новая <b>начальница</b> в понедельник <b>представилась</b> всем сотрудникам."}, "gram": "perfekt"},
{"id": "k1_005", "cat": "k1", "term": {"de": "begrüßen", "en": "to greet", "uk": "вітати", "ru": "приветствовать"}, "short": {"de": "Hallo sagen, wenn man jemanden trifft.", "en": "To say hello when you meet someone.", "uk": "Казати «привіт», коли зустрічаєш когось.", "ru": "Говорить «привет», когда встречаешь кого-то."}, "def": {"de": "Der Chef <g>hat</g> den neuen Kollegen sehr freundlich <g><b>begrüßt</b></g>.", "en": "The boss <g>has</g> <g><b>greeted</b></g> the new colleague very kindly.", "uk": "Керівник дуже привітно <b>привітав</b> нового колегу.", "ru": "Начальник очень приветливо <b>поприветствовал</b> нового коллегу."}, "gram": "perfekt"},
{"id": "k1_006", "cat": "k1", "term": {"de": "das Team", "en": "team", "uk": "команда", "ru": "команда"}, "short": {"de": "Eine Gruppe von Menschen, die zusammen arbeiten.", "en": "A group of people who work together.", "uk": "Група людей, які працюють разом.", "ru": "Группа людей, которые работают вместе."}, "def": {"de": "Unser <b>Team</b> <g>hat</g> das Projekt schnell <g><b>fertig gemacht</b></g>.", "en": "Our <b>team</b> <g>has</g> <g><b>finished</b></g> the project quickly.", "uk": "Наша <b>команда</b> швидко <b>завершила</b> проєкт.", "ru": "Наша <b>команда</b> быстро <b>завершила</b> проект."}, "gram": "perfekt"},
{"id": "k1_007", "cat": "k1", "term": {"de": "der erste Tag", "en": "the first day", "uk": "перший день", "ru": "первый день"}, "short": {"de": "Der Tag, an dem man zum ersten Mal in der Firma arbeitet.", "en": "The day when you work at the company for the first time.", "uk": "День, коли ти вперше працюєш у фірмі.", "ru": "День, когда ты впервые работаешь в фирме."}, "def": {"de": "An <b>ihrem ersten Tag</b> <g>hat</g> sie viele neue Namen <g><b>gelernt</b></g>.", "en": "On <b>her first day</b>, she <g>has</g> <g><b>learned</b></g> many new names.", "uk": "<b>Свого першого дня</b> вона <b>вивчила</b> багато нових імен.", "ru": "В <b>свой первый день</b> она <b>выучила</b> много новых имён."}, "gram": "perfekt"},
{"id": "k1_008", "cat": "k1", "term": {"de": "die Erfahrung", "en": "experience", "uk": "досвід", "ru": "опыт"}, "short": {"de": "Das, was man im Leben oder bei der Arbeit schon gemacht und gelernt hat.", "en": "What you have already done and learned in life or at work.", "uk": "Те, що ти вже робив і чого навчився в житті чи на роботі.", "ru": "То, что ты уже делал и чему научился в жизни или на работе."}, "def": {"de": "Er bekommt die Stelle, <g>weil</g> er viel <b>Erfahrung</b> im Büro hat.", "en": "He gets the job <g>because</g> he has a lot of <b>experience</b> in the office.", "uk": "Він отримує посаду, <g>тому що</g> має великий <b>досвід</b> роботи в офісі.", "ru": "Он получает должность, <g>потому что</g> у него большой <b>опыт</b> работы в офисе."}, "gram": "weil_satz"},
{"id": "k1_009", "cat": "k1", "term": {"de": "der Beruf", "en": "profession", "uk": "професія", "ru": "профессия"}, "short": {"de": "Die Arbeit, die man gelernt hat und regelmäßig macht.", "en": "The job you have learned and do regularly.", "uk": "Робота, якої ти навчився і виконуєш регулярно.", "ru": "Работа, которой ты научился и выполняешь регулярно."}, "def": {"de": "Sie mag ihren <b>Beruf</b> sehr, <g>weil</g> sie jeden Tag mit Menschen spricht.", "en": "She likes her <b>profession</b> a lot <g>because</g> she talks to people every day.", "uk": "Їй дуже подобається її <b>професія</b>, <g>тому що</g> вона щодня спілкується з людьми.", "ru": "Ей очень нравится её <b>профессия</b>, <g>потому что</g> она каждый день общается с людьми."}, "gram": "weil_satz"},
{"id": "k1_010", "cat": "k1", "term": {"de": "freundlich", "en": "friendly", "uk": "дружній", "ru": "дружелюбный"}, "short": {"de": "Nett und höflich zu anderen Menschen.", "en": "Nice and polite to other people.", "uk": "Приємний і ввічливий до інших людей.", "ru": "Приятный и вежливый к другим людям."}, "def": {"de": "Alle mögen den neuen Kollegen, <g>weil</g> er sehr <b>freundlich</b> ist.", "en": "Everyone likes the new colleague <g>because</g> he is very <b>friendly</b>.", "uk": "Всім подобається новий колега, <g>тому що</g> він дуже <b>привітний</b>.", "ru": "Всем нравится новый коллега, <g>потому что</g> он очень <b>дружелюбный</b>."}, "gram": "weil_satz"},
{"id": "k1_011", "cat": "k1", "term": {"de": "duzen", "en": "to address someone as “du”", "uk": "говорити на «ти»", "ru": "обращаться на «ты»"}, "short": {"de": "Jemanden mit „du“ ansprechen, nicht mit „Sie“.", "en": "To address someone with „du“ (informal), not „Sie“.", "uk": "Звертатися до когось на «ти», а не на «ви».", "ru": "Обращаться к кому-то на «ты», а не на «вы»."}, "def": {"de": "Im Team <b>duzen</b> sich alle, <g>weil</g> die Atmosphäre sehr locker ist.", "en": "Everyone in the team <b>uses „du“</b> <g>because</g> the atmosphere is very relaxed.", "uk": "У команді всі <b>звертаються на «ти»</b>, <g>тому що</g> атмосфера дуже невимушена.", "ru": "В команде все <b>обращаются на «ты»</b>, <g>потому что</g> атмосфера очень непринуждённая."}, "gram": "weil_satz"},
{"id": "k1_012", "cat": "k1", "term": {"de": "siezen", "en": "to address someone as “Sie”", "uk": "говорити на «ви»", "ru": "обращаться на «вы»"}, "short": {"de": "Jemanden mit „Sie“ ansprechen, nicht mit „du“.", "en": "To address someone with „Sie“ (formal), not „du“.", "uk": "Звертатися до когось на «ви», а не на «ти».", "ru": "Обращаться к кому-то на «вы», а не на «ты»."}, "def": {"de": "Sie <b>siezt</b> den Chef immer noch, <g>weil</g> sie ihn erst seit einer Woche kennt.", "en": "She still <b>uses „Sie“</b> with the boss <g>because</g> she has only known him for a week.", "uk": "Вона й досі <b>звертається на «ви»</b> до керівника, <g>тому що</g> знає його лише тиждень.", "ru": "Она всё ещё <b>обращается на «вы»</b> к начальнику, <g>потому что</g> знает его только неделю."}, "gram": "weil_satz"},
{"id": "k1_013", "cat": "k1", "term": {"de": "helfen", "en": "to help", "uk": "допомагати", "ru": "помогать"}, "short": {"de": "Etwas für jemanden tun, damit die Arbeit leichter wird.", "en": "To do something for someone so that a task becomes easier.", "uk": "Робити щось для когось, щоб робота стала легшою.", "ru": "Делать что-то для кого-то, чтобы работа стала легче."}, "def": {"de": "Ich <b>helfe</b> dir gern mit dem Computer, <g>weil</g> ich mich damit gut auskenne.", "en": "I am happy to <b>help</b> you with the computer <g>because</g> I know a lot about it.", "uk": "Я із задоволенням <b>допоможу</b> тобі з компʼютером, <g>тому що</g> добре на цьому розуміюся.", "ru": "Я с удовольствием <b>помогу</b> тебе с компьютером, <g>потому что</g> хорошо в этом разбираюсь."}, "gram": "weil_satz"},
{"id": "k1_014", "cat": "k1", "term": {"de": "danken", "en": "to thank", "uk": "дякувати", "ru": "благодарить"}, "short": {"de": "„Danke“ sagen, weil jemand etwas Gutes für dich gemacht hat.", "en": "To say „thank you“ because someone did something good for you.", "uk": "Казати «дякую», бо хтось зробив для тебе щось хороше.", "ru": "Говорить «спасибо», потому что кто-то сделал для тебя что-то хорошее."}, "def": {"de": "Ich <b>danke</b> dir sehr, <g>weil</g> du mir am ersten Tag so viel geholfen hast.", "en": "I <b>thank</b> you very much <g>because</g> you helped me so much on the first day.", "uk": "Я дуже тобі <b>дякую</b>, <g>тому що</g> ти так сильно допоміг мені першого дня.", "ru": "Я очень тебя <b>благодарю</b>, <g>потому что</g> ты так сильно помог мне в первый день."}, "gram": "weil_satz"},
{"id": "k1_015", "cat": "k1", "term": {"de": "die Pause", "en": "break", "uk": "перерва", "ru": "перерыв"}, "short": {"de": "Eine kurze Zeit, in der man bei der Arbeit nicht arbeitet.", "en": "A short time when you don't work during your job.", "uk": "Короткий проміжок часу, коли ти не працюєш під час роботи.", "ru": "Короткий промежуток времени, когда ты не работаешь на работе."}, "def": {"de": "Die <b>Pause</b> gefällt <g>allen Kolleginnen und Kollegen</g> sehr gut.", "en": "Everyone <g>on the team</g> likes the <b>break</b> a lot.", "uk": "<b>Перерва</b> дуже подобається <g>усім колегам</g>.", "ru": "<b>Перерыв</b> очень нравится <g>всем коллегам</g>."}, "gram": "dativ_verben"},
{"id": "k1_016", "cat": "k1", "term": {"de": "das Büro", "en": "office", "uk": "офіс", "ru": "офис"}, "short": {"de": "Der Raum, in dem man normalerweise arbeitet.", "en": "The room where you normally work.", "uk": "Приміщення, де ти зазвичай працюєш.", "ru": "Помещение, где ты обычно работаешь."}, "def": {"de": "Das neue <b>Büro</b> gefällt <g>mir</g> viel besser als das alte.", "en": "The new <b>office</b> pleases <g>me</g> much more than the old one.", "uk": "Новий <b>офіс</b> подобається <g>мені</g> набагато більше, ніж старий.", "ru": "Новый <b>офис</b> нравится <g>мне</g> намного больше, чем старый."}, "gram": "dativ_verben"},
{"id": "k1_017", "cat": "k1", "term": {"de": "der Arbeitsplatz", "en": "workplace", "uk": "робоче місце", "ru": "рабочее место"}, "short": {"de": "Der Ort oder Tisch, an dem man arbeitet.", "en": "The place or desk where you work.", "uk": "Місце чи стіл, за яким ти працюєш.", "ru": "Место или стол, за которым ты работаешь."}, "def": {"de": "Der Chef zeigt <g>dem neuen Kollegen</g> seinen <b>Arbeitsplatz</b>.", "en": "The boss shows <g>the new colleague</g> his <b>workplace</b>.", "uk": "Керівник показує <g>новому колезі</g> його <b>робоче місце</b>.", "ru": "Начальник показывает <g>новому коллеге</g> его <b>рабочее место</b>."}, "gram": "dativ_akkusativ_verben"},
{"id": "k1_018", "cat": "k1", "term": {"de": "die Aufgabe", "en": "task", "uk": "завдання", "ru": "задание"}, "short": {"de": "Etwas, das man bei der Arbeit machen muss.", "en": "Something you have to do at work.", "uk": "Те, що ти маєш зробити на роботі.", "ru": "То, что ты должен сделать на работе."}, "def": {"de": "Die Chefin erklärt <g>ihm</g> die neue <b>Aufgabe</b> ganz genau.", "en": "The boss explains the new <b>task</b> to <g>him</g> very precisely.", "uk": "Керівниця дуже детально пояснює <g>йому</g> нове <b>завдання</b>.", "ru": "Начальница очень подробно объясняет <g>ему</g> новое <b>задание</b>."}, "gram": "dativ_akkusativ_verben"},
{"id": "k1_019", "cat": "k1", "term": {"de": "pünktlich", "en": "punctual", "uk": "пунктуальний", "ru": "пунктуальный"}, "short": {"de": "Genau zur richtigen Zeit, nicht zu spät.", "en": "Exactly on time, not late.", "uk": "Точно у визначений час, не пізно.", "ru": "Точно вовремя, не поздно."}, "def": {"de": "Es ist <g>ihm</g> wichtig, immer <b>pünktlich</b> zur Arbeit zu kommen.", "en": "It is important to <g>him</g> to always come to work <b>on time</b>.", "uk": "<g>Йому</g> важливо завжди приходити на роботу <b>вчасно</b>.", "ru": "<g>Ему</g> важно всегда приходить на работу <b>вовремя</b>."}, "gram": "dativ_verben"},
{"id": "k1_020", "cat": "k1", "term": {"de": "sich freuen", "en": "to be glad", "uk": "радіти", "ru": "радоваться"}, "short": {"de": "Ein gutes, glückliches Gefühl haben.", "en": "To have a good, happy feeling.", "uk": "Мати хороше, щасливе почуття.", "ru": "Испытывать хорошее, радостное чувство."}, "def": {"de": "Der neue Kollege <b>freut</b> sich schon auf <g>seinen ersten Arbeitstag</g>.", "en": "The new colleague is already <b>looking forward</b> to <g>his first day of work</g>.", "uk": "Новий колега вже <b>радіє</b> <g>своєму першому робочому дню</g>.", "ru": "Новый коллега уже <b>радуется</b> <g>своему первому рабочему дню</g>."}, "gram": ""},
{"id": "k1_021", "cat": "k1", "term": {"de": "die Einladung", "en": "invitation", "uk": "запрошення", "ru": "приглашение"}, "short": {"de": "Eine Nachricht, mit der man jemanden zu etwas bittet, z. B. zu einer Party.", "en": "A message asking someone to come to something, e.g. a party.", "uk": "Повідомлення, яким ти запрошуєш когось кудись, напр. на вечірку.", "ru": "Сообщение, которым ты приглашаешь кого-то куда-то, напр. на вечеринку."}, "def": {"de": "Die Chefin schickt <g>allen Kollegen</g> eine <b>Einladung</b> für den Einstand.", "en": "The boss sends <g>all colleagues</g> an <b>invitation</b> for the welcome party.", "uk": "Керівниця надсилає <g>усім колегам</g> <b>запрошення</b> на частування з нагоди початку роботи.", "ru": "Начальница отправляет <g>всем коллегам</g> <b>приглашение</b> на угощение по случаю начала работы."}, "gram": "dativ_akkusativ_verben"},
{"id": "k1_022", "cat": "k1", "term": {"de": "feiern", "en": "to celebrate", "uk": "святкувати", "ru": "праздновать"}, "short": {"de": "Ein besonderes Ereignis mit Essen, Trinken und guter Laune begehen.", "en": "To celebrate a special event with food, drink and a good mood.", "uk": "Відзначати особливу подію з їжею, напоями і гарним настроєм.", "ru": "Отмечать особое событие с едой, напитками и хорошим настроением."}, "def": {"de": "Das Team möchte <g>dem neuen Kollegen</g> zu Ehren seinen ersten Tag <b>feiern</b>.", "en": "The team wants to <b>celebrate</b> the first day in honour of <g>the new colleague</g>.", "uk": "Команда хоче <b>відсвяткувати</b> перший день на честь <g>нового колеги</g>.", "ru": "Команда хочет <b>отпраздновать</b> первый день в честь <g>нового коллеги</g>."}, "gram": ""},
{"id": "k1_023", "cat": "k1", "term": {"de": "der Einstand", "en": "welcome treat (first day)", "uk": "частування з нагоди початку роботи", "ru": "угощение по случаю начала работы"}, "short": {"de": "Eine kleine Feier am ersten Arbeitstag in einer neuen Firma.", "en": "A small celebration on your first day at a new company.", "uk": "Невелике святкування у перший робочий день на новій фірмі.", "ru": "Небольшое торжество в первый рабочий день на новой фирме."}, "def": {"de": "Alle Kollegen gratulieren <g>ihm</g> herzlich zu seinem <b>Einstand</b>.", "en": "All colleagues warmly congratulate <g>him</g> on his <b>welcome party</b>.", "uk": "Усі колеги щиро вітають <g>його</g> з <b>частуванням з нагоди початку роботи</b>.", "ru": "Все коллеги сердечно поздравляют <g>его</g> с <b>угощением по случаю начала работы</b>."}, "gram": "dativ_verben"},
{"id": "k1_024", "cat": "k1", "term": {"de": "weil", "en": "because", "uk": "тому що", "ru": "потому что"}, "short": {"de": "Ein kleines Wort, mit dem man einen Grund nennt.", "en": "A small word used to give a reason.", "uk": "Коротке слово, яким називають причину.", "ru": "Короткое слово, которым называют причину."}, "def": {"de": "Sie hilft <g>ihm</g> gern, <g><b>weil</b></g> er noch neu im Team ist.", "en": "She likes to help <g>him</g> <g><b>because</b></g> he is still new to the team.", "uk": "Вона залюбки допомагає <g>йому</g>, <g><b>тому що</b></g> він ще новенький у команді.", "ru": "Она с удовольствием помогает <g>ему</g>, <g><b>потому что</b></g> он ещё новенький в команде."}, "gram": "weil_satz"},
{"id": "k1_025", "cat": "k1", "term": {"de": "die Veranstaltung", "en": "event", "uk": "захід", "ru": "мероприятие"}, "short": {"de": "Ein organisiertes Ereignis, zu dem viele Menschen kommen.", "en": "An organised event that many people attend.", "uk": "Організована подія, на яку приходить багато людей.", "ru": "Организованное мероприятие, на которое приходит много людей."}, "def": {"de": "Die Firma lädt alle Mitarbeitenden zu einer großen <b>Veranstaltung</b> ein.", "en": "The company invites all employees to a big <b>event</b>.", "uk": "Фірма запрошує усіх працівників на велику <b>подію</b>.", "ru": "Фирма приглашает всех сотрудников на большое <b>мероприятие</b>."}, "gram": ""},
{"id": "k2_001", "cat": "k2", "term": {"de": "der Umzug", "en": "move / relocation", "uk": "переїзд", "ru": "переезд"}, "short": {"de": "Wenn man in eine andere Wohnung geht und dort wohnt.", "en": "When you go to another apartment and live there.", "uk": "Коли ти переїжджаєш в іншу квартиру і живеш там.", "ru": "Когда ты переезжаешь в другую квартиру и живёшь там."}, "def": {"de": "Der <b>Umzug</b> <g>ist</g> für Laura sehr anstrengend <g><b>gewesen</b></g>.", "en": "The <b>move</b> <g>has</g> <g><b>been</b></g> very exhausting for Laura.", "uk": "<b>Переїзд</b> виявився дуже виснажливим для Лаури.", "ru": "<b>Переезд</b> оказался очень утомительным для Лауры."}, "gram": "perfekt"},
{"id": "k2_002", "cat": "k2", "term": {"de": "umziehen", "en": "to move (house)", "uk": "переїжджати", "ru": "переезжать"}, "short": {"de": "In eine neue Wohnung gehen und dort wohnen.", "en": "To go to a new apartment and live there.", "uk": "Переходити в нову квартиру і жити там.", "ru": "Переходить в новую квартиру и жить там."}, "def": {"de": "Laura <g>ist</g> letzten Monat in eine Wohngemeinschaft <g><b>umgezogen</b></g>.", "en": "Laura <g>has</g> <g><b>moved</b></g> into a shared flat last month.", "uk": "Лаура минулого місяця <b>переїхала</b> у квартиру на кількох мешканців.", "ru": "Лаура в прошлом месяце <b>переехала</b> в квартиру с соседями."}, "gram": "perfekt"},
{"id": "k2_003", "cat": "k2", "term": {"de": "die Wohnung", "en": "apartment", "uk": "квартира", "ru": "квартира"}, "short": {"de": "Räume, in denen jemand wohnt, z. B. mit Küche und Bad.", "en": "Rooms where someone lives, e.g. with a kitchen and bathroom.", "uk": "Приміщення, де хтось живе, напр. з кухнею і ванною.", "ru": "Помещения, где кто-то живёт, напр. с кухней и ванной."}, "def": {"de": "Sie <g>hat</g> die neue <b>Wohnung</b> schon vor drei Wochen <g><b>gefunden</b></g>.", "en": "She <g>has</g> already <g><b>found</b></g> the new <b>apartment</b> three weeks ago.", "uk": "Вона вже три тижні тому <b>знайшла</b> нову <b>квартиру</b>.", "ru": "Она уже три недели назад <b>нашла</b> новую <b>квартиру</b>."}, "gram": "perfekt"},
{"id": "k2_004", "cat": "k2", "term": {"de": "das Zimmer", "en": "room", "uk": "кімната", "ru": "комната"}, "short": {"de": "Ein Raum in einer Wohnung, z. B. ein Schlafzimmer.", "en": "A room in an apartment, e.g. a bedroom.", "uk": "Кімната у квартирі, напр. спальня.", "ru": "Комната в квартире, напр. спальня."}, "def": {"de": "Er <g>hat</g> sein neues <b>Zimmer</b> schon fertig <g><b>eingerichtet</b></g>.", "en": "He <g>has</g> already <g><b>furnished</b></g> his new <b>room</b> completely.", "uk": "Він уже повністю <b>облаштував</b> свою нову <b>кімнату</b>.", "ru": "Он уже полностью <b>обустроил</b> свою новую <b>комнату</b>."}, "gram": "perfekt"},
{"id": "k2_005", "cat": "k2", "term": {"de": "die Möbel (Pl.)", "en": "furniture", "uk": "меблі", "ru": "мебель"}, "short": {"de": "Dinge in einer Wohnung wie Tisch, Stuhl oder Schrank.", "en": "Things in an apartment like a table, chair or cupboard.", "uk": "Речі у квартирі, як-от стіл, стілець чи шафа.", "ru": "Вещи в квартире, такие как стол, стул или шкаф."}, "def": {"de": "Sie <g>haben</g> die alten <b>Möbel</b> zu ihren Freunden <g><b>gebracht</b></g>.", "en": "They <g>have</g> <g><b>brought</b></g> the old <b>furniture</b> to their friends.", "uk": "Вони <b>відвезли</b> старі <b>меблі</b> до своїх друзів.", "ru": "Они <b>отвезли</b> старую <b>мебель</b> к своим друзьям."}, "gram": "perfekt"},
{"id": "k2_006", "cat": "k2", "term": {"de": "der Schrank", "en": "cupboard / wardrobe", "uk": "шафа", "ru": "шкаф"}, "short": {"de": "Ein Möbelstück, in dem man Kleidung oder andere Dinge aufbewahrt.", "en": "A piece of furniture where you keep clothes or other things.", "uk": "Меблі, у яких зберігають одяг чи інші речі.", "ru": "Мебель, в которой хранят одежду или другие вещи."}, "def": {"de": "Die Männer <g>haben</g> den schweren <b>Schrank</b> ins Zimmer <g><b>getragen</b></g>.", "en": "The men <g>have</g> <g><b>carried</b></g> the heavy <b>cupboard</b> into the room.", "uk": "Чоловіки <b>занесли</b> важку <b>шафу</b> у кімнату.", "ru": "Мужчины <b>занесли</b> тяжёлый <b>шкаф</b> в комнату."}, "gram": "perfekt"},
{"id": "k2_007", "cat": "k2", "term": {"de": "das Bett", "en": "bed", "uk": "ліжко", "ru": "кровать"}, "short": {"de": "Ein Möbelstück, in dem man schläft.", "en": "A piece of furniture where you sleep.", "uk": "Меблі, у яких спиш.", "ru": "Мебель, в которой спят."}, "def": {"de": "Er stellt das <b>Bett</b> <g>an das Fenster</g>, weil es dort ruhiger ist.", "en": "He puts the <b>bed</b> <g>by the window</g> because it is quieter there.", "uk": "Він ставить <b>ліжко</b> <g>біля вікна</g>, бо там тихіше.", "ru": "Он ставит <b>кровать</b> <g>у окна</g>, потому что там тише."}, "gram": "wechselpraepositionen"},
{"id": "k2_008", "cat": "k2", "term": {"de": "der Tisch", "en": "table", "uk": "стіл", "ru": "стол"}, "short": {"de": "Ein Möbelstück mit vier Beinen, an dem man isst oder arbeitet.", "en": "A piece of furniture with four legs where you eat or work.", "uk": "Меблі на чотирьох ніжках, за якими їси чи працюєш.", "ru": "Мебель на четырёх ножках, за которой ешь или работаешь."}, "def": {"de": "Die Lampe steht jetzt <g>auf dem <b>Tisch</b></g> in der Ecke.", "en": "The lamp is now standing <g>on the <b>table</b></g> in the corner.", "uk": "Лампа тепер стоїть <g>на <b>столі</b></g> у кутку.", "ru": "Лампа теперь стоит <g>на <b>столе</b></g> в углу."}, "gram": "wechselpraepositionen"},
{"id": "k2_009", "cat": "k2", "term": {"de": "der Stuhl", "en": "chair", "uk": "стілець", "ru": "стул"}, "short": {"de": "Ein Möbelstück zum Sitzen für eine Person.", "en": "A piece of furniture for one person to sit on.", "uk": "Меблі для сидіння однієї людини.", "ru": "Мебель для сидения одного человека."}, "def": {"de": "Sie stellt den <b>Stuhl</b> <g>neben den Tisch</g>, bevor die Gäste kommen.", "en": "She puts the <b>chair</b> <g>next to the table</g> before the guests arrive.", "uk": "Вона ставить <b>стілець</b> <g>біля столу</g>, перш ніж прийдуть гості.", "ru": "Она ставит <b>стул</b> <g>рядом со столом</g>, прежде чем придут гости."}, "gram": "wechselpraepositionen"},
{"id": "k2_010", "cat": "k2", "term": {"de": "die Wohngemeinschaft (WG)", "en": "shared flat", "uk": "квартира на кількох мешканців", "ru": "квартира с соседями"}, "short": {"de": "Eine Wohnung, in der mehrere Personen zusammen, aber nicht als Familie wohnen.", "en": "An apartment where several people live together but not as a family.", "uk": "Квартира, у якій живуть разом кілька людей, але не як родина.", "ru": "Квартира, в которой живут вместе несколько человек, но не как семья."}, "def": {"de": "Laura zieht <g>in eine <b>Wohngemeinschaft</b></g> mit zwei Studenten.", "en": "Laura is moving <g>into a <b>shared flat</b></g> with two students.", "uk": "Лаура переїжджає <g>у <b>квартиру на кількох мешканців</b></g> із двома студентами.", "ru": "Лаура переезжает <g>в <b>квартиру с соседями</b></g> с двумя студентами."}, "gram": "wechselpraepositionen"},
{"id": "k2_011", "cat": "k2", "term": {"de": "die Küche", "en": "kitchen", "uk": "кухня", "ru": "кухня"}, "short": {"de": "Der Raum, in dem man kocht.", "en": "The room where you cook.", "uk": "Приміщення, де готують їжу.", "ru": "Помещение, где готовят еду."}, "def": {"de": "Die neuen Teller stellt sie <g>in den Schrank</g> in der <b>Küche</b>.", "en": "She puts the new plates <g>into the cupboard</g> in the <b>kitchen</b>.", "uk": "Нові тарілки вона ставить <g>у шафу</g> на <b>кухні</b>.", "ru": "Новые тарелки она ставит <g>в шкаф</g> на <b>кухне</b>."}, "gram": "wechselpraepositionen"},
{"id": "k2_012", "cat": "k2", "term": {"de": "das Bad", "en": "bathroom", "uk": "ванна кімната", "ru": "ванная"}, "short": {"de": "Der Raum, in dem man sich wäscht und duscht.", "en": "The room where you wash and shower.", "uk": "Приміщення, де ти миєшся і приймаєш душ.", "ru": "Помещение, где ты моешься и принимаешь душ."}, "def": {"de": "Das Handtuch hängt <g>im <b>Bad</b></g> direkt neben der Dusche.", "en": "The towel is hanging <g>in the <b>bathroom</b></g> right next to the shower.", "uk": "Рушник висить <g>у <b>ванній кімнаті</b></g> прямо біля душу.", "ru": "Полотенце висит <g>в <b>ванной комнате</b></g> прямо возле душа."}, "gram": "wechselpraepositionen"},
{"id": "k2_013", "cat": "k2", "term": {"de": "der Balkon", "en": "balcony", "uk": "балкон", "ru": "балкон"}, "short": {"de": "Ein kleiner Platz außen an der Wohnung, wo man draußen sitzen kann.", "en": "A small outdoor space attached to the apartment where you can sit.", "uk": "Невеликий простір зовні квартири, де можна посидіти надворі.", "ru": "Небольшое пространство снаружи квартиры, где можно посидеть на улице."}, "def": {"de": "Sie hat die Wohnung genommen, <g>weil</g> sie einen großen <b>Balkon</b> hat.", "en": "She took the apartment <g>because</g> it has a big <b>balcony</b>.", "uk": "Вона взяла цю квартиру, <g>тому що</g> в ній є великий <b>балкон</b>.", "ru": "Она взяла эту квартиру, <g>потому что</g> в ней есть большой <b>балкон</b>."}, "gram": "weil_satz"},
{"id": "k2_014", "cat": "k2", "term": {"de": "die Kleinanzeige", "en": "classified ad", "uk": "оголошення", "ru": "объявление"}, "short": {"de": "Eine kurze Anzeige, in der man z. B. Möbel verkauft.", "en": "A short ad where you sell things like furniture.", "uk": "Коротке оголошення, у якому, напр., продають меблі.", "ru": "Короткое объявление, в котором, напр., продают мебель."}, "def": {"de": "Er hat eine <b>Kleinanzeige</b> geschrieben, <g>weil</g> er seinen alten Schrank verkaufen wollte.", "en": "He wrote a <b>classified ad</b> <g>because</g> he wanted to sell his old cupboard.", "uk": "Він написав <b>оголошення</b>, <g>тому що</g> хотів продати свою стару шафу.", "ru": "Он написал <b>объявление</b>, <g>потому что</g> хотел продать свой старый шкаф."}, "gram": "weil_satz"},
{"id": "k2_015", "cat": "k2", "term": {"de": "verkaufen", "en": "to sell", "uk": "продавати", "ru": "продавать"}, "short": {"de": "Etwas gegen Geld weggeben.", "en": "To give something away for money.", "uk": "Віддавати щось за гроші.", "ru": "Отдавать что-то за деньги."}, "def": {"de": "Sie <b>verkauft</b> den Tisch, <g>weil</g> er in der neuen Wohnung keinen Platz hat.", "en": "She is <b>selling</b> the table <g>because</g> there is no space for it in the new apartment.", "uk": "Вона <b>продає</b> стіл, <g>тому що</g> в новій квартирі для нього немає місця.", "ru": "Она <b>продаёт</b> стол, <g>потому что</g> в новой квартире для него нет места."}, "gram": "weil_satz"},
{"id": "k2_016", "cat": "k2", "term": {"de": "der Preis", "en": "price", "uk": "ціна", "ru": "цена"}, "short": {"de": "Wie viel Geld etwas kostet.", "en": "How much money something costs.", "uk": "Скільки грошей щось коштує.", "ru": "Сколько денег что-то стоит."}, "def": {"de": "Sie kauft das Bett, <g>weil</g> der <b>Preis</b> sehr günstig ist.", "en": "She is buying the bed <g>because</g> the <b>price</b> is very cheap.", "uk": "Вона купує ліжко, <g>тому що</g> <b>ціна</b> дуже вигідна.", "ru": "Она покупает кровать, <g>потому что</g> <b>цена</b> очень выгодная."}, "gram": "weil_satz"},
{"id": "k2_017", "cat": "k2", "term": {"de": "hängen", "en": "to hang", "uk": "висіти / вішати", "ru": "висеть / вешать"}, "short": {"de": "Etwas an eine Wand oder an einen Haken machen, so dass es oben bleibt.", "en": "To put something on a wall or hook so that it stays up.", "uk": "Розміщувати щось на стіні чи гачку, щоб воно там трималося.", "ru": "Размещать что-то на стене или крючке, чтобы оно там держалось."}, "def": {"de": "Er <b>hängt</b> das Bild über das Sofa, <g>weil</g> die Wand dort sonst leer ist.", "en": "He <b>hangs</b> the picture above the sofa <g>because</g> the wall there is otherwise empty.", "uk": "Він <b>вішає</b> картину над диваном, <g>тому що</g> ця стіна інакше порожня.", "ru": "Он <b>вешает</b> картину над диваном, <g>потому что</g> эта стена иначе пустая."}, "gram": "weil_satz"},
{"id": "k2_018", "cat": "k2", "term": {"de": "stellen", "en": "to put (standing)", "uk": "ставити", "ru": "ставить"}, "short": {"de": "Etwas an einen Ort machen, so dass es aufrecht steht.", "en": "To put something somewhere so that it stands upright.", "uk": "Ставити щось у певне місце так, щоб воно стояло.", "ru": "Ставить что-то в определённое место так, чтобы оно стояло."}, "def": {"de": "Sie <b>stellt</b> den Stuhl an den Tisch, <g>weil</g> gleich Gäste kommen.", "en": "She <b>puts</b> the chair by the table <g>because</g> guests are coming soon.", "uk": "Вона <b>ставить</b> стілець до столу, <g>тому що</g> зараз прийдуть гості.", "ru": "Она <b>ставит</b> стул к столу, <g>потому что</g> скоро придут гости."}, "gram": "weil_satz"},
{"id": "k2_019", "cat": "k2", "term": {"de": "legen", "en": "to lay / put", "uk": "класти", "ru": "класть"}, "short": {"de": "Etwas an einen Ort machen, so dass es flach liegt.", "en": "To put something somewhere so that it lies flat.", "uk": "Класти щось у певне місце так, щоб воно лежало.", "ru": "Класть что-то в определённое место так, чтобы оно лежало."}, "def": {"de": "Sie musste die Bücher auf den Boden <b>legen</b>, <g>weil</g> der Schrank noch nicht da war.", "en": "She had to <b>put</b> the books on the floor <g>because</g> the cupboard was not there yet.", "uk": "Їй довелося <b>покласти</b> книжки на підлогу, <g>тому що</g> шафи ще не було.", "ru": "Ей пришлось <b>положить</b> книги на пол, <g>потому что</g> шкафа ещё не было."}, "gram": "weil_satz"},
{"id": "k2_020", "cat": "k2", "term": {"de": "putzen", "en": "to clean", "uk": "прибирати", "ru": "убирать"}, "short": {"de": "Etwas sauber machen.", "en": "To make something clean.", "uk": "Робити щось чистим.", "ru": "Делать что-то чистым."}, "def": {"de": "Er musste die ganze Küche <b>putzen</b>, <g>weil</g> morgen Besuch kommt.", "en": "He had to <b>clean</b> the whole kitchen <g>because</g> guests are coming tomorrow.", "uk": "Йому довелося <b>прибрати</b> всю кухню, <g>тому що</g> завтра прийдуть гості.", "ru": "Ему пришлось <b>убрать</b> всю кухню, <g>потому что</g> завтра придут гости."}, "gram": "weil_satz"},
{"id": "k2_021", "cat": "k2", "term": {"de": "sich einigen", "en": "to agree", "uk": "домовлятися", "ru": "договариваться"}, "short": {"de": "Zusammen eine Entscheidung finden, die für alle passt.", "en": "To find a decision together that suits everyone.", "uk": "Разом знаходити рішення, яке підходить усім.", "ru": "Вместе находить решение, которое подходит всем."}, "def": {"de": "Die Mitbewohner <b>einigen</b> sich schnell, <g>weil</g> alle die gleiche Meinung haben.", "en": "The flatmates quickly <b>agree</b> <g>because</g> everyone has the same opinion.", "uk": "Сусіди по квартирі швидко <b>домовляються</b>, <g>тому що</g> всі мають однакову думку.", "ru": "Соседи по квартире быстро <b>договариваются</b>, <g>потому что</g> у всех одинаковое мнение."}, "gram": "weil_satz"},
{"id": "k2_022", "cat": "k2", "term": {"de": "der Nachbar / die Nachbarin", "en": "neighbour", "uk": "сусід / сусідка", "ru": "сосед / соседка"}, "short": {"de": "Eine Person, die neben oder in der Nähe von dir wohnt.", "en": "A person who lives next to or near you.", "uk": "Людина, яка живе поруч або неподалік від тебе.", "ru": "Человек, который живёт рядом или недалеко от тебя."}, "def": {"de": "Sie kennt ihren <b>Nachbarn</b> gut, <g>weil</g> sie schon lange im selben Haus wohnen.", "en": "She knows her <b>neighbour</b> well <g>because</g> they have lived in the same house for a long time.", "uk": "Вона добре знає свого <b>сусіда</b>, <g>тому що</g> вони давно живуть в одному будинку.", "ru": "Она хорошо знает своего <b>соседа</b>, <g>потому что</g> они давно живут в одном доме."}, "gram": "weil_satz"},
{"id": "k2_023", "cat": "k2", "term": {"de": "die Miete", "en": "rent", "uk": "орендна плата", "ru": "арендная плата"}, "short": {"de": "Das Geld, das man jeden Monat für die Wohnung bezahlt.", "en": "The money you pay every month for the apartment.", "uk": "Гроші, які ти платиш щомісяця за квартиру.", "ru": "Деньги, которые ты платишь ежемесячно за квартиру."}, "def": {"de": "Sie sucht eine WG, <g>weil</g> die <b>Miete</b> dort günstiger ist.", "en": "She is looking for a shared flat <g>because</g> the <b>rent</b> is cheaper there.", "uk": "Вона шукає спільну квартиру, <g>тому що</g> там дешевша <b>орендна плата</b>.", "ru": "Она ищет квартиру с соседями, <g>потому что</g> там дешевле <b>арендная плата</b>."}, "gram": "weil_satz"},
{"id": "k2_024", "cat": "k2", "term": {"de": "der Haushalt", "en": "household", "uk": "домашнє господарство", "ru": "домашнее хозяйство"}, "short": {"de": "Die Arbeit im Zuhause, z. B. kochen, putzen, einkaufen.", "en": "The work at home, e.g. cooking, cleaning, shopping.", "uk": "Робота вдома, напр. приготування їжі, прибирання, покупки.", "ru": "Работа дома, напр. готовка, уборка, покупки."}, "def": {"de": "Alle in der WG helfen im <b>Haushalt</b> mit, <g>weil</g> das fair ist.", "en": "Everyone in the shared flat helps with the <b>household</b> <g>because</g> that is fair.", "uk": "Усі у спільній квартирі допомагають із <b>домашнім господарством</b>, <g>тому що</g> це справедливо.", "ru": "Все в квартире с соседями помогают по <b>домашнему хозяйству</b>, <g>потому что</g> это справедливо."}, "gram": "weil_satz"},
{"id": "k3_001", "cat": "k3", "term": {"de": "die Tätigkeit", "en": "activity / task", "uk": "діяльність", "ru": "деятельность"}, "short": {"de": "Etwas, das man regelmäßig tut, z. B. bei der Arbeit.", "en": "Something you do regularly, e.g. at work.", "uk": "Те, що ти робиш регулярно, напр. на роботі.", "ru": "То, что ты делаешь регулярно, напр. на работе."}, "def": {"de": "Sie kann bei dieser <b>Tätigkeit</b> gut mit <g>ihren Kollegen</g> zusammenarbeiten.", "en": "She can work well with <g>her colleagues</g> in this <b>activity</b>.", "uk": "У цій <b>діяльності</b> вона добре співпрацює з <g>своїми колегами</g>.", "ru": "В этой <b>деятельности</b> она хорошо сотрудничает со <g>своими коллегами</g>."}, "gram": "dativ_verben"},
{"id": "k3_002", "cat": "k3", "term": {"de": "der Termin", "en": "appointment", "uk": "зустріч / термін", "ru": "встреча / срок"}, "short": {"de": "Eine Zeit, zu der man sich mit jemandem trifft.", "en": "A time when you meet with someone.", "uk": "Час, коли ти з кимось зустрічаєшся.", "ru": "Время, когда ты с кем-то встречаешься."}, "def": {"de": "Er muss den <b>Termin</b> mit <g>dem Kunden</g> noch bestätigen.", "en": "He still has to confirm the <b>appointment</b> with <g>the customer</g>.", "uk": "Йому ще треба підтвердити <b>зустріч</b> із <g>клієнтом</g>.", "ru": "Ему ещё нужно подтвердить <b>встречу</b> с <g>клиентом</g>."}, "gram": "dativ_verben"},
{"id": "k3_003", "cat": "k3", "term": {"de": "vereinbaren", "en": "to arrange", "uk": "домовлятися", "ru": "договариваться"}, "short": {"de": "Zusammen entscheiden, wann man sich trifft.", "en": "To decide together when you will meet.", "uk": "Разом вирішувати, коли ви зустрінетеся.", "ru": "Вместе решать, когда вы встретитесь."}, "def": {"de": "Sie will mit <g>ihrem Chef</g> einen neuen Termin <b>vereinbaren</b>.", "en": "She wants to <b>arrange</b> a new appointment with <g>her boss</g>.", "uk": "Вона хоче <b>домовитися</b> про нову зустріч зі <g>своїм керівником</g>.", "ru": "Она хочет <b>договориться</b> о новой встрече со <g>своим начальником</g>."}, "gram": "dativ_akkusativ_verben"},
{"id": "k3_004", "cat": "k3", "term": {"de": "die Neuigkeit", "en": "news", "uk": "новина", "ru": "новость"}, "short": {"de": "Eine Information, die man noch nicht kannte.", "en": "A piece of information you did not know before.", "uk": "Інформація, якої ти раніше не знав.", "ru": "Информация, о которой ты раньше не знал."}, "def": {"de": "Sie erzählt <g>ihrer Freundin</g> gleich alle <b>Neuigkeiten</b> aus der Firma.", "en": "She immediately tells <g>her friend</g> all the <b>news</b> from the company.", "uk": "Вона одразу розповідає <g>своїй подрузі</g> всі <b>новини</b> з фірми.", "ru": "Она сразу рассказывает <g>своей подруге</g> все <b>новости</b> из фирмы."}, "gram": "dativ_akkusativ_verben"},
{"id": "k3_005", "cat": "k3", "term": {"de": "die Meinung", "en": "opinion", "uk": "думка", "ru": "мнение"}, "short": {"de": "Das, was man persönlich über etwas denkt.", "en": "What you personally think about something.", "uk": "Те, що ти особисто думаєш про щось.", "ru": "То, что ты лично думаешь о чём-то."}, "def": {"de": "Er kann seine <b>Meinung</b> auch <g>seinem Chef</g> ganz offen sagen.", "en": "He can also say his <b>opinion</b> quite openly to <g>his boss</g>.", "uk": "Він може відверто висловити свою <b>думку</b> навіть <g>своєму керівнику</g>.", "ru": "Он может вполне открыто высказать своё <b>мнение</b> даже <g>своему начальнику</g>."}, "gram": "dativ_akkusativ_verben"},
{"id": "k3_006", "cat": "k3", "term": {"de": "äußern", "en": "to express", "uk": "висловлювати", "ru": "выражать"}, "short": {"de": "Sagen, was man denkt oder fühlt.", "en": "To say what you think or feel.", "uk": "Казати, що ти думаєш чи відчуваєш.", "ru": "Говорить, что ты думаешь или чувствуешь."}, "def": {"de": "Er <b>äußert</b>, <g>dass</g> er mit dem neuen Plan nicht zufrieden ist.", "en": "He <b>expresses</b> <g>that</g> he is not happy with the new plan.", "uk": "Він <b>висловлює</b>, <g>що</g> не задоволений новим планом.", "ru": "Он <b>выражает</b>, <g>что</g> не доволен новым планом."}, "gram": "dass_satz"},
{"id": "k3_007", "cat": "k3", "term": {"de": "der Sportverein", "en": "sports club", "uk": "спортивний клуб", "ru": "спортивный клуб"}, "short": {"de": "Eine Gruppe, in der Menschen zusammen Sport machen.", "en": "A group where people do sports together.", "uk": "Група, у якій люди разом займаються спортом.", "ru": "Группа, в которой люди вместе занимаются спортом."}, "def": {"de": "Sie hat gehört, <g>dass</g> der neue <b>Sportverein</b> auch Deutschkurse anbietet.", "en": "She has heard <g>that</g> the new <b>sports club</b> also offers German courses.", "uk": "Вона чула, <g>що</g> новий <b>спортивний клуб</b> також пропонує курси німецької.", "ru": "Она слышала, <g>что</g> новый <b>спортивный клуб</b> также предлагает курсы немецкого."}, "gram": "dass_satz"},
{"id": "k3_008", "cat": "k3", "term": {"de": "die Sportart", "en": "type of sport", "uk": "вид спорту", "ru": "вид спорта"}, "short": {"de": "Eine bestimmte Art von Sport, z. B. Fußball oder Schwimmen.", "en": "A certain type of sport, e.g. football or swimming.", "uk": "Певний вид спорту, напр. футбол чи плавання.", "ru": "Определённый вид спорта, напр. футбол или плавание."}, "def": {"de": "Ich finde, <g>dass</g> Schwimmen die gesündeste <b>Sportart</b> ist.", "en": "I think <g>that</g> swimming is the healthiest <b>type of sport</b>.", "uk": "Я вважаю, <g>що</g> плавання – найздоровіший <b>вид спорту</b>.", "ru": "Я считаю, <g>что</g> плавание – самый полезный <b>вид спорта</b>."}, "gram": "dass_satz"},
{"id": "k3_009", "cat": "k3", "term": {"de": "das Hobby", "en": "hobby", "uk": "хобі", "ru": "хобби"}, "short": {"de": "Etwas, das man in der Freizeit gern macht.", "en": "Something you like to do in your free time.", "uk": "Те, що ти любиш робити у вільний час.", "ru": "То, что ты любишь делать в свободное время."}, "def": {"de": "Er sagt, <g>dass</g> Fotografieren sein liebstes <b>Hobby</b> ist.", "en": "He says <g>that</g> photography is his favourite <b>hobby</b>.", "uk": "Він каже, <g>що</g> фотографія – його улюблене <b>хобі</b>.", "ru": "Он говорит, <g>что</g> фотография – его любимое <b>хобби</b>."}, "gram": "dass_satz"},
{"id": "k3_010", "cat": "k3", "term": {"de": "das Freizeitangebot", "en": "leisure activity offer", "uk": "пропозиція для дозвілля", "ru": "предложение для досуга"}, "short": {"de": "Eine Aktivität, die man in seiner freien Zeit machen kann.", "en": "An activity you can do in your free time.", "uk": "Захід, яким можна зайнятися у вільний час.", "ru": "Занятие, которым можно заняться в свободное время."}, "def": {"de": "Man sieht, <g>dass</g> es in Köln viele gute <b>Freizeitangebote</b> gibt.", "en": "You can see <g>that</g> there are many good <b>leisure activities</b> in Cologne.", "uk": "Видно, <g>що</g> у Кельні є багато гарних <b>пропозицій для дозвілля</b>.", "ru": "Видно, <g>что</g> в Кёльне есть много хороших <b>предложений для досуга</b>."}, "gram": "dass_satz"},
{"id": "k3_011", "cat": "k3", "term": {"de": "dürfen", "en": "to be allowed to", "uk": "мати дозвіл", "ru": "иметь разрешение"}, "short": {"de": "Die Erlaubnis haben, etwas zu tun.", "en": "To have permission to do something.", "uk": "Мати дозвіл щось робити.", "ru": "Иметь разрешение что-то делать."}, "def": {"de": "Als Kind <g><b>durfte</b></g> er nur am Wochenende Fußball spielen.", "en": "As a child, he <g><b>was allowed</b></g> to play football only on weekends.", "uk": "У дитинстві він <g><b>мав дозвіл</b></g> грати у футбол лише на вихідних.", "ru": "В детстве ему <g><b>разрешалось</b></g> играть в футбол только по выходным."}, "gram": "modalverben_praeteritum"},
{"id": "k3_012", "cat": "k3", "term": {"de": "müssen", "en": "to have to", "uk": "бути зобовʼязаним", "ru": "быть обязанным"}, "short": {"de": "Etwas tun müssen, weil es nötig ist.", "en": "To have to do something because it is necessary.", "uk": "Мусити щось робити, бо це необхідно.", "ru": "Быть обязанным что-то делать, потому что это необходимо."}, "def": {"de": "Letzte Woche <g><b>musste</b></g> sie jeden Tag bis spät im Büro bleiben.", "en": "Last week she <g><b>had to</b></g> stay at the office late every day.", "uk": "Минулого тижня їй <g><b>довелося</b></g> щодня затримуватися в офісі допізна.", "ru": "На прошлой неделе ей <g><b>приходилось</b></g> каждый день задерживаться в офисе допоздна."}, "gram": "modalverben_praeteritum"},
{"id": "k3_013", "cat": "k3", "term": {"de": "können", "en": "to be able to", "uk": "могти", "ru": "мочь"}, "short": {"de": "Die Fähigkeit haben, etwas zu tun.", "en": "To have the ability to do something.", "uk": "Мати здатність щось робити.", "ru": "Иметь способность что-то делать."}, "def": {"de": "Früher <g><b>konnte</b></g> er nicht gut Deutsch sprechen, jetzt geht es viel besser.", "en": "He <g><b>could</b></g> not speak German well before, now it is much better.", "uk": "Раніше він <g><b>не міг</b></g> добре говорити німецькою, тепер уже набагато краще.", "ru": "Раньше он <g><b>не мог</b></g> хорошо говорить по-немецки, теперь намного лучше."}, "gram": "modalverben_praeteritum"},
{"id": "k3_014", "cat": "k3", "term": {"de": "wollen", "en": "to want to", "uk": "хотіти", "ru": "хотеть"}, "short": {"de": "Etwas machen möchten.", "en": "To want to do something.", "uk": "Хотіти щось робити.", "ru": "Хотеть что-то делать."}, "def": {"de": "Wir <g><b>wollten</b></g> gestern zum Sportverein gehen, aber es hat stark geregnet.", "en": "We <g><b>wanted</b></g> to go to the sports club yesterday, but it rained heavily.", "uk": "Ми <g><b>хотіли</b></g> вчора піти у спортивний клуб, але сильно йшов дощ.", "ru": "Мы <g><b>хотели</b></g> вчера пойти в спортивный клуб, но шёл сильный дождь."}, "gram": "modalverben_praeteritum"},
{"id": "k3_015", "cat": "k3", "term": {"de": "die Anzeige", "en": "advertisement", "uk": "оголошення", "ru": "объявление"}, "short": {"de": "Ein kurzer Text, in dem man z. B. eine Arbeit sucht oder anbietet.", "en": "A short text where you look for or offer, e.g., a job.", "uk": "Короткий текст, у якому, напр., шукають чи пропонують роботу.", "ru": "Короткий текст, в котором, напр., ищут или предлагают работу."}, "def": {"de": "Sie <g><b>wollte</b></g> die <b>Anzeige</b> für den Sportverein noch einmal genau lesen.", "en": "She <g><b>wanted</b></g> to read the <b>ad</b> for the sports club carefully once more.", "uk": "Вона <g><b>хотіла</b></g> ще раз уважно прочитати <b>оголошення</b> про спортивний клуб.", "ru": "Она <g><b>хотела</b></g> ещё раз внимательно прочитать <b>объявление</b> о спортивном клубе."}, "gram": "modalverben_praeteritum"},
{"id": "k3_016", "cat": "k3", "term": {"de": "der Feierabend", "en": "end of the workday", "uk": "кінець робочого дня", "ru": "конец рабочего дня"}, "short": {"de": "Die Zeit, wenn die Arbeit für den Tag fertig ist.", "en": "The time when work for the day is finished.", "uk": "Час, коли робота на цей день закінчена.", "ru": "Время, когда работа на этот день закончена."}, "def": {"de": "Er <g><b>musste</b></g> heute erst um sieben Uhr <b>Feierabend</b> machen.", "en": "Today he <g><b>had to</b></g> finish work only at seven oʼclock.", "uk": "Сьогодні він <g><b>мусив</b></g> закінчити роботу лише о сьомій годині.", "ru": "Сегодня ему <g><b>пришлось</b></g> закончить работу только в семь часов."}, "gram": "modalverben_praeteritum"},
{"id": "k3_017", "cat": "k3", "term": {"de": "trainieren", "en": "to train", "uk": "тренуватися", "ru": "тренироваться"}, "short": {"de": "Regelmäßig Sport machen, um besser zu werden.", "en": "To do sports regularly to get better.", "uk": "Регулярно займатися спортом, щоб ставати кращим.", "ru": "Регулярно заниматься спортом, чтобы становиться лучше."}, "def": {"de": "Sie <g><b>wollte</b></g> vor dem Wettkampf noch zweimal <b>trainieren</b>.", "en": "She <g><b>wanted</b></g> to <b>train</b> two more times before the competition.", "uk": "Вона <g><b>хотіла</b></g> ще двічі <b>потренуватися</b> перед змаганням.", "ru": "Она <g><b>хотела</b></g> ещё дважды <b>потренироваться</b> перед соревнованием."}, "gram": "modalverben_praeteritum"},
{"id": "k3_018", "cat": "k3", "term": {"de": "das Mitglied", "en": "member", "uk": "член (клубу)", "ru": "член (клуба)"}, "short": {"de": "Eine Person, die zu einem Verein oder einer Gruppe gehört.", "en": "A person who belongs to a club or group.", "uk": "Особа, яка належить до клубу чи групи.", "ru": "Человек, который принадлежит к клубу или группе."}, "def": {"de": "Früher <g><b>durfte</b></g> nur ein <b>Mitglied</b> pro Familie im Verein Fußball spielen.", "en": "Before, only one <b>member</b> per family <g><b>was allowed</b></g> to play football in the club.", "uk": "Раніше лише одному <b>члену</b> сімʼї <g><b>дозволялося</b></g> грати у футбол у клубі.", "ru": "Раньше только одному <b>члену</b> семьи <g><b>разрешалось</b></g> играть в футбол в клубе."}, "gram": "modalverben_praeteritum"},
{"id": "k3_019", "cat": "k3", "term": {"de": "die Mitgliedschaft", "en": "membership", "uk": "членство", "ru": "членство"}, "short": {"de": "Wenn man offiziell zu einem Verein gehört.", "en": "When you officially belong to a club.", "uk": "Коли ти офіційно належиш до клубу.", "ru": "Когда ты официально принадлежишь к клубу."}, "def": {"de": "Sie <g><b>musste</b></g> für die <b>Mitgliedschaft</b> im Sportverein zehn Euro bezahlen.", "en": "She <g><b>had to</b></g> pay ten euros for the club <b>membership</b>.", "uk": "Їй <g><b>довелося</b></g> заплатити десять євро за <b>членство</b> у спортивному клубі.", "ru": "Ей <g><b>пришлось</b></g> заплатить десять евро за <b>членство</b> в спортивном клубе."}, "gram": "modalverben_praeteritum"},
{"id": "k3_020", "cat": "k3", "term": {"de": "entspannen", "en": "to relax", "uk": "розслаблятися", "ru": "расслабляться"}, "short": {"de": "Ruhig werden und keinen Stress mehr haben.", "en": "To become calm and no longer stressed.", "uk": "Заспокоюватися і перестати відчувати стрес.", "ru": "Успокаиваться и переставать испытывать стресс."}, "def": {"de": "Nach der Arbeit <g><b>wollte</b></g> er sich zu Hause einfach nur <b>entspannen</b>.", "en": "After work he <g><b>wanted</b></g> to simply <b>relax</b> at home.", "uk": "Після роботи він просто <g><b>хотів</b></g> <b>розслабитися</b> вдома.", "ru": "После работы он просто <g><b>хотел</b></g> <b>расслабиться</b> дома."}, "gram": "modalverben_praeteritum"},
{"id": "k4_001", "cat": "k4", "term": {"de": "die Kleidung", "en": "clothing", "uk": "одяг", "ru": "одежда"}, "short": {"de": "Alles, was man am Körper trägt, z. B. Hose, Hemd, Jacke.", "en": "Everything you wear on your body, e.g. trousers, shirt, jacket.", "uk": "Все, що носять на тілі, напр. штани, сорочка, куртка.", "ru": "Всё, что носят на теле, напр. брюки, рубашка, куртка."}, "def": {"de": "Die neue <b>Kleidung</b> passt <g>ihr</g> sehr gut.", "en": "The new <b>clothes</b> fit <g>her</g> very well.", "uk": "Новий <b>одяг</b> дуже добре <g>їй</g> пасує.", "ru": "Новая <b>одежда</b> очень хорошо <g>ей</g> подходит."}, "gram": "dativ_verben"},
{"id": "k4_002", "cat": "k4", "term": {"de": "die Hose", "en": "trousers", "uk": "штани", "ru": "брюки"}, "short": {"de": "Ein Kleidungsstück für die Beine.", "en": "A piece of clothing for the legs.", "uk": "Предмет одягу для ніг.", "ru": "Предмет одежды для ног."}, "def": {"de": "Die blaue <b>Hose</b> gefällt <g>ihm</g> besser als die schwarze.", "en": "He likes the blue <b>trousers</b> better than the black ones.", "uk": "Сині <b>штани</b> подобаються <g>йому</g> більше, ніж чорні.", "ru": "Синие <b>брюки</b> нравятся <g>ему</g> больше, чем чёрные."}, "gram": "dativ_verben"},
{"id": "k4_003", "cat": "k4", "term": {"de": "das Hemd", "en": "shirt", "uk": "сорочка", "ru": "рубашка"}, "short": {"de": "Ein Kleidungsstück für den Oberkörper mit Knöpfen.", "en": "A piece of clothing for the upper body with buttons.", "uk": "Предмет одягу для верхньої частини тіла з ґудзиками.", "ru": "Предмет одежды для верхней части тела с пуговицами."}, "def": {"de": "Der Verkäufer zeigt <g>ihm</g> ein weißes <b>Hemd</b> für das Vorstellungsgespräch.", "en": "The salesperson shows <g>him</g> a white <b>shirt</b> for the interview.", "uk": "Продавець показує <g>йому</g> білу <b>сорочку</b> для співбесіди.", "ru": "Продавец показывает <g>ему</g> белую <b>рубашку</b> для собеседования."}, "gram": "dativ_akkusativ_verben"},
{"id": "k4_004", "cat": "k4", "term": {"de": "der Pullover", "en": "sweater", "uk": "светр", "ru": "свитер"}, "short": {"de": "Ein warmes Kleidungsstück für den Oberkörper ohne Knöpfe.", "en": "A warm piece of clothing for the upper body without buttons.", "uk": "Теплий предмет одягу для верхньої частини тіла без ґудзиків.", "ru": "Тёплый предмет одежды для верхней части тела без пуговиц."}, "def": {"de": "Dieser warme <b>Pullover</b> gehört <g>meinem Bruder</g>.", "en": "This warm <b>sweater</b> belongs to <g>my brother</g>.", "uk": "Цей теплий <b>светр</b> належить <g>моєму брату</g>.", "ru": "Этот тёплый <b>свитер</b> принадлежит <g>моему брату</g>."}, "gram": "dativ_verben"},
{"id": "k4_005", "cat": "k4", "term": {"de": "die Jacke", "en": "jacket", "uk": "куртка", "ru": "куртка"}, "short": {"de": "Ein Kleidungsstück, das man über anderer Kleidung trägt, oft draußen.", "en": "A piece of clothing worn over other clothes, often outside.", "uk": "Предмет одягу, який носять поверх іншого одягу, часто надворі.", "ru": "Предмет одежды, который носят поверх другой одежды, часто на улице."}, "def": {"de": "Diese grüne <b>Jacke</b> steht <g>ihr</g> wirklich sehr gut.", "en": "This green <b>jacket</b> really suits <g>her</g> very well.", "uk": "Ця зелена <b>куртка</b> дуже їй пасує.", "ru": "Эта зелёная <b>куртка</b> ей очень идёт."}, "gram": "dativ_verben"},
{"id": "k4_006", "cat": "k4", "term": {"de": "das Kleid", "en": "dress", "uk": "сукня", "ru": "платье"}, "short": {"de": "Ein Kleidungsstück für Frauen, das oben und unten zusammen ist.", "en": "A piece of clothing for women that is joined at the top and bottom.", "uk": "Жіночий предмет одягу, що поєднує верх і низ в одне ціле.", "ru": "Женский предмет одежды, соединяющий верх и низ в одно целое."}, "def": {"de": "Sie kauft <g>ihrer Tochter</g> ein rotes <b>Kleid</b> für das Fest.", "en": "She buys <g>her daughter</g> a red <b>dress</b> for the party.", "uk": "Вона купує <g>своїй доньці</g> червону <b>сукню</b> на свято.", "ru": "Она покупает <g>своей дочери</g> красное <b>платье</b> на праздник."}, "gram": "dativ_akkusativ_verben"},
{"id": "k4_007", "cat": "k4", "term": {"de": "der Rock", "en": "skirt", "uk": "спідниця", "ru": "юбка"}, "short": {"de": "Ein Kleidungsstück für Frauen, das unten am Körper offen ist.", "en": "A piece of clothing for women that is open at the bottom.", "uk": "Жіночий предмет одягу, відкритий знизу.", "ru": "Женский предмет одежды, открытый снизу."}, "def": {"de": "Im Schaufenster hängt <g>ein schöner</g> <b>Rock</b> in Blau.", "en": "In the shop window hangs <g>a beautiful</g> blue <b>skirt</b>.", "uk": "У вітрині висить <g>гарна</g> синя <b>спідниця</b>.", "ru": "В витрине висит <g>красивая</g> синяя <b>юбка</b>."}, "gram": "adjektivendungen"},
{"id": "k4_008", "cat": "k4", "term": {"de": "die Schuhe (Pl.)", "en": "shoes", "uk": "взуття", "ru": "обувь"}, "short": {"de": "Kleidung für die Füße, zum Laufen.", "en": "Clothing for the feet, for walking.", "uk": "Одяг для ніг, для ходьби.", "ru": "Одежда для ног, для ходьбы."}, "def": {"de": "Hier stehen <g>meine neuen</g> <b>Schuhe</b> für die Arbeit.", "en": "Here stand <g>my new</g> <b>shoes</b> for work.", "uk": "Тут стоять <g>мої нові</g> <b>черевики</b> для роботи.", "ru": "Здесь стоят <g>мои новые</g> <b>туфли</b> для работы."}, "gram": "adjektivendungen"},
{"id": "k4_009", "cat": "k4", "term": {"de": "die Socke", "en": "sock", "uk": "шкарпетка", "ru": "носок"}, "short": {"de": "Ein kleines, weiches Kleidungsstück für den Fuß, unter dem Schuh.", "en": "A small, soft piece of clothing for the foot, under the shoe.", "uk": "Маленький, мʼякий предмет одягу для ноги, під взуттям.", "ru": "Маленький, мягкий предмет одежды для ноги, под обувью."}, "def": {"de": "Auf dem Boden liegt <g>eine gelbe</g> <b>Socke</b> von Mischa.", "en": "On the floor lies <g>a yellow</g> <b>sock</b> belonging to Mischa.", "uk": "На підлозі лежить <g>жовта</g> <b>шкарпетка</b> Міші.", "ru": "На полу лежит <g>жёлтый</g> <b>носок</b> Миши."}, "gram": "adjektivendungen"},
{"id": "k4_010", "cat": "k4", "term": {"de": "anprobieren", "en": "to try on", "uk": "приміряти", "ru": "примерять"}, "short": {"de": "Kleidung im Geschäft testen, ob sie passt.", "en": "To test clothes in a shop to see if they fit.", "uk": "Приміряти одяг у магазині, щоб перевірити, чи він підходить.", "ru": "Примерять одежду в магазине, чтобы проверить, подходит ли она."}, "def": {"de": "Zuerst muss <g>ein neues</g> Kleid <b>anprobiert</b> werden, bevor sie es kauft.", "en": "First <g>a new</g> dress must be <b>tried on</b> before she buys it.", "uk": "Спочатку треба <b>приміряти</b> <g>нову</g> сукню, перш ніж вона її купить.", "ru": "Сначала нужно <b>примерить</b> <g>новое</g> платье, прежде чем она его купит."}, "gram": "adjektivendungen"},
{"id": "k4_011", "cat": "k4", "term": {"de": "die Größe", "en": "size", "uk": "розмір", "ru": "размер"}, "short": {"de": "Die Zahl, die zeigt, ob ein Kleidungsstück zu einem passt.", "en": "The number that shows if a piece of clothing fits you.", "uk": "Число, яке показує, чи підходить тобі одяг.", "ru": "Число, которое показывает, подходит ли тебе одежда."}, "def": {"de": "Für die Hose braucht sie <g>eine größere</g> <b>Größe</b> als sonst.", "en": "For the trousers she needs <g>a bigger</g> <b>size</b> than usual.", "uk": "Для цих штанів їй потрібен <g>більший</g> <b>розмір</b>, ніж зазвичай.", "ru": "Для этих брюк ей нужен <g>больший</g> <b>размер</b>, чем обычно."}, "gram": "adjektivendungen"},
{"id": "k4_012", "cat": "k4", "term": {"de": "passen", "en": "to fit", "uk": "підходити (за розміром)", "ru": "подходить (по размеру)"}, "short": {"de": "Genau die richtige Größe haben.", "en": "To be exactly the right size.", "uk": "Мати саме потрібний розмір.", "ru": "Иметь как раз нужный размер."}, "def": {"de": "Zum Glück <b>passt</b> <g>ihr</g> das neue Kleid perfekt.", "en": "Luckily, the new dress <b>fits</b> <g>her</g> perfectly.", "uk": "На щастя, нова сукня <b>пасує</b> <g>їй</g> ідеально.", "ru": "К счастью, новое платье <b>подходит</b> <g>ей</g> идеально."}, "gram": "dativ_verben"},
{"id": "k4_013", "cat": "k4", "term": {"de": "das Kaufhaus", "en": "department store", "uk": "універмаг", "ru": "универмаг"}, "short": {"de": "Ein großes Geschäft, in dem man viele verschiedene Dinge kaufen kann.", "en": "A large shop where you can buy many different things.", "uk": "Великий магазин, у якому можна купити багато різних речей.", "ru": "Большой магазин, в котором можно купить много разных вещей."}, "def": {"de": "<g>In was für einem</g> <b>Kaufhaus</b> hast du dieses schöne Hemd gekauft?", "en": "<g>In what kind of</g> <b>department store</b> did you buy this nice shirt?", "uk": "У <g>якому саме</g> <b>універмазі</b> ти купив цю гарну сорочку?", "ru": "В <g>каком именно</g> <b>универмаге</b> ты купил эту красивую рубашку?"}, "gram": "was_fuer_ein"},
{"id": "k4_014", "cat": "k4", "term": {"de": "das Stockwerk", "en": "floor / storey", "uk": "поверх", "ru": "этаж"}, "short": {"de": "Eine Ebene in einem Gebäude, z. B. der erste oder zweite Stock.", "en": "A level in a building, e.g. the first or second floor.", "uk": "Рівень у будівлі, напр. перший чи другий поверх.", "ru": "Уровень в здании, напр. первый или второй этаж."}, "def": {"de": "Die Kinderabteilung findest du in <g>einem höheren</g> <b>Stockwerk</b>.", "en": "You will find the children's department on <g>a higher</g> <b>floor</b>.", "uk": "Дитячий відділ ти знайдеш на <g>вищому</g> <b>поверсі</b>.", "ru": "Детский отдел ты найдёшь на <g>более высоком</g> <b>этаже</b>."}, "gram": "adjektivendungen"},
{"id": "k4_015", "cat": "k4", "term": {"de": "die Farbe", "en": "colour", "uk": "колір", "ru": "цвет"}, "short": {"de": "Wie etwas aussieht, z. B. rot, blau oder grün.", "en": "What something looks like, e.g. red, blue or green.", "uk": "Те, який вигляд щось має, напр. червоний, синій чи зелений.", "ru": "То, как что-то выглядит, напр. красный, синий или зелёный."}, "def": {"de": "<g>Was für eine</g> <b>Farbe</b> gefällt dir bei einem Sommerkleid am besten?", "en": "<g>What kind of</g> <b>colour</b> do you like best for a summer dress?", "uk": "<g>Який саме</g> <b>колір</b> тобі найбільше подобається для літньої сукні?", "ru": "<g>Какой именно</g> <b>цвет</b> тебе больше всего нравится для летнего платья?"}, "gram": "was_fuer_ein"},
{"id": "k4_016", "cat": "k4", "term": {"de": "gestreift", "en": "striped", "uk": "смугастий", "ru": "полосатый"}, "short": {"de": "Mit vielen langen Linien, wie bei einem Streifenmuster.", "en": "With many long lines, like a striped pattern.", "uk": "З багатьма довгими лініями, як у смугастому візерунку.", "ru": "С множеством длинных линий, как в полосатом узоре."}, "def": {"de": "Sie sucht eine Bluse mit <g>einem gestreiften</g> <b>Muster</b> in Blau und Weiß.", "en": "She is looking for a blouse with <g>a striped</g> <b>pattern</b> in blue and white.", "uk": "Вона шукає блузку зі <g>смугастим</g> <b>візерунком</b> у синьо-білих тонах.", "ru": "Она ищет блузку с <g>полосатым</g> <b>узором</b> в сине-белых тонах."}, "gram": "adjektivendungen"},
{"id": "k4_017", "cat": "k4", "term": {"de": "kariert", "en": "checkered", "uk": "картатий", "ru": "клетчатый"}, "short": {"de": "Mit einem Muster aus kleinen Quadraten.", "en": "With a pattern of small squares.", "uk": "З візерунком із маленьких квадратів.", "ru": "С узором из маленьких квадратов."}, "def": {"de": "Er trägt zur Arbeit gern ein Hemd mit <g>einem karierten</g> <b>Muster</b>.", "en": "He likes to wear a shirt with <g>a checkered</g> <b>pattern</b> to work.", "uk": "На роботу він любить одягати сорочку з <g>картатим</g> <b>візерунком</b>.", "ru": "На работу он любит надевать рубашку с <g>клетчатым</g> <b>узором</b>."}, "gram": "adjektivendungen"},
{"id": "k4_018", "cat": "k4", "term": {"de": "eng", "en": "tight / narrow", "uk": "вузький", "ru": "узкий"}, "short": {"de": "Nicht viel Platz habend, sehr nah am Körper.", "en": "Not much space, very close to the body.", "uk": "Без багато місця, дуже щільно прилягає до тіла.", "ru": "Без много места, очень плотно прилегает к телу."}, "def": {"de": "Sie möchte keine <g>enge</g> <b>Hose</b> zum Sport tragen.", "en": "She does not want to wear <g>tight</g> <b>trousers</b> for sport.", "uk": "Вона не хоче одягати <g>вузькі</g> <b>штани</b> для спорту.", "ru": "Она не хочет надевать <g>узкие</g> <b>брюки</b> для спорта."}, "gram": "adjektivendungen"},
{"id": "k4_019", "cat": "k4", "term": {"de": "weit", "en": "wide / loose", "uk": "широкий", "ru": "широкий"}, "short": {"de": "Viel Platz habend, nicht eng am Körper.", "en": "Having a lot of space, not tight on the body.", "uk": "З великим простором, не щільно прилягає до тіла.", "ru": "С большим простором, не плотно прилегает к телу."}, "def": {"de": "Im Sommer trägt sie gern <g>ein weites</g> <b>Kleid</b>, weil es dann nicht so heiß ist.", "en": "In summer she likes to wear <g>a loose</g> <b>dress</b>, because then it is not so hot.", "uk": "Влітку вона любить носити <g>широку</g> <b>сукню</b>, бо в ній не так спекотно.", "ru": "Летом она любит носить <g>свободное</g> <b>платье</b>, потому что в нём не так жарко."}, "gram": "adjektivendungen"},
{"id": "k4_020", "cat": "k4", "term": {"de": "bequem", "en": "comfortable", "uk": "зручний", "ru": "удобный"}, "short": {"de": "Angenehm zu tragen, ohne zu drücken.", "en": "Pleasant to wear, without pressing.", "uk": "Приємно носити, нічого не тисне.", "ru": "Приятно носить, ничего не давит."}, "def": {"de": "Für die Arbeit sucht er <g>einen bequemen</g> <b>Pullover</b>.", "en": "For work he is looking for <g>a comfortable</g> <b>sweater</b>.", "uk": "Для роботи він шукає <g>зручний</g> <b>светр</b>.", "ru": "Для работы он ищет <g>удобный</g> <b>свитер</b>."}, "gram": "adjektivendungen"},
{"id": "k4_021", "cat": "k4", "term": {"de": "tragen", "en": "to wear", "uk": "носити", "ru": "носить"}, "short": {"de": "Kleidung am Körper haben.", "en": "To have clothes on your body.", "uk": "Мати на собі одяг.", "ru": "Иметь на себе одежду."}, "def": {"de": "Sie <b>trägt</b> heute <g>ein neues</g> Hemd, das ihr sehr gut steht.", "en": "Today she is <b>wearing</b> <g>a new</g> shirt that suits her very well.", "uk": "Сьогодні вона <b>одягнула</b> <g>нову</g> сорочку, яка їй дуже личить.", "ru": "Сегодня она <b>надела</b> <g>новую</g> рубашку, которая ей очень идёт."}, "gram": "adjektivendungen"},
{"id": "k4_022", "cat": "k4", "term": {"de": "das Fest", "en": "party / celebration", "uk": "свято", "ru": "праздник"}, "short": {"de": "Ein besonderer Tag, an dem man feiert.", "en": "A special day when you celebrate.", "uk": "Особливий день, коли святкують.", "ru": "Особый день, когда празднуют."}, "def": {"de": "<g>Was für ein</g> <b>Fest</b> feiert ihr denn am Samstag?", "en": "<g>What kind of</g> <b>party</b> are you celebrating on Saturday?", "uk": "<g>Яке саме</g> <b>свято</b> ви святкуєте в суботу?", "ru": "<g>Какой именно</g> <b>праздник</b> вы отмечаете в субботу?"}, "gram": "was_fuer_ein"},
{"id": "k4_023", "cat": "k4", "term": {"de": "die Festkleidung", "en": "formal wear", "uk": "святковий одяг", "ru": "праздничная одежда"}, "short": {"de": "Besonders schöne Kleidung für ein Fest.", "en": "Especially nice clothes for a party.", "uk": "Особливо гарний одяг для свята.", "ru": "Особенно красивая одежда для праздника."}, "def": {"de": "Für die Hochzeit braucht er <g>eine elegante</g> <b>Festkleidung</b>.", "en": "For the wedding he needs <g>elegant</g> <b>formal wear</b>.", "uk": "Для весілля йому потрібен <g>елегантний</g> <b>святковий одяг</b>.", "ru": "Для свадьбы ему нужна <g>элегантная</g> <b>праздничная одежда</b>."}, "gram": "adjektivendungen"},
{"id": "k5_001", "cat": "k5", "term": {"de": "das Verkehrsmittel", "en": "means of transport", "uk": "транспортний засіб", "ru": "транспортное средство"}, "short": {"de": "Etwas, mit dem man von einem Ort zum anderen fährt, z. B. Bus oder Auto.", "en": "Something you use to get from one place to another, e.g. bus or car.", "uk": "Те, чим їдеш з одного місця в інше, напр. автобус чи автомобіль.", "ru": "То, на чём ты едешь из одного места в другое, напр. автобус или машина."}, "def": {"de": "<g>Wenn</g> es regnet, nimmt sie lieber ein anderes <b>Verkehrsmittel</b>.", "en": "<g>When</g> it rains, she prefers to take another <b>means of transport</b>.", "uk": "<g>Коли</g> йде дощ, вона радше обирає інший <b>транспортний засіб</b>.", "ru": "<g>Когда</g> идёт дождь, она предпочитает другое <b>транспортное средство</b>."}, "gram": "wenn_satz"},
{"id": "k5_002", "cat": "k5", "term": {"de": "das Fahrrad", "en": "bicycle", "uk": "велосипед", "ru": "велосипед"}, "short": {"de": "Ein Verkehrsmittel mit zwei Rädern, das man mit den Beinen bewegt.", "en": "A means of transport with two wheels that you move with your legs.", "uk": "Транспортний засіб на двох колесах, який рухаєш ногами.", "ru": "Транспортное средство на двух колёсах, которое двигаешь ногами."}, "def": {"de": "<g>Wenn</g> die Sonne scheint, fährt er gern mit dem <b>Fahrrad</b> zur Arbeit.", "en": "<g>When</g> the sun is shining, he likes to ride his <b>bicycle</b> to work.", "uk": "<g>Коли</g> світить сонце, він любить їздити на роботу на <b>велосипеді</b>.", "ru": "<g>Когда</g> светит солнце, он любит ездить на работу на <b>велосипеде</b>."}, "gram": "wenn_satz"},
{"id": "k5_003", "cat": "k5", "term": {"de": "der Bus", "en": "bus", "uk": "автобус", "ru": "автобус"}, "short": {"de": "Ein großes Fahrzeug, mit dem viele Menschen zusammen fahren.", "en": "A large vehicle in which many people travel together.", "uk": "Велике транспортне засіб, у якому багато людей їдуть разом.", "ru": "Большое транспортное средство, в котором много людей едут вместе."}, "def": {"de": "<g>Wenn</g> der <b>Bus</b> zu voll ist, wartet sie lieber auf den nächsten.", "en": "<g>When</g> the <b>bus</b> is too full, she prefers to wait for the next one.", "uk": "<g>Коли</g> <b>автобус</b> надто переповнений, вона радше чекає на наступний.", "ru": "<g>Когда</g> <b>автобус</b> слишком переполнен, она предпочитает подождать следующий."}, "gram": "wenn_satz"},
{"id": "k5_004", "cat": "k5", "term": {"de": "die U-Bahn", "en": "subway", "uk": "метро", "ru": "метро"}, "short": {"de": "Ein Verkehrsmittel, das unter der Erde durch die Stadt fährt.", "en": "A means of transport that travels through the city underground.", "uk": "Транспортний засіб, який їде під землею через місто.", "ru": "Транспортное средство, которое едет под землёй через город."}, "def": {"de": "<g>Wenn</g> man schnell ins Zentrum will, ist die <b>U-Bahn</b> ideal.", "en": "<g>When</g> you want to get to the centre quickly, the <b>subway</b> is ideal.", "uk": "<g>Коли</g> хочеш швидко дістатися до центру, <b>метро</b> – ідеальний варіант.", "ru": "<g>Когда</g> хочешь быстро добраться до центра, <b>метро</b> – идеальный вариант."}, "gram": "wenn_satz"},
{"id": "k5_005", "cat": "k5", "term": {"de": "das Auto", "en": "car", "uk": "автомобіль", "ru": "автомобиль"}, "short": {"de": "Ein Fahrzeug mit vier Rädern und einem Motor.", "en": "A vehicle with four wheels and an engine.", "uk": "Транспортний засіб на чотирьох колесах з двигуном.", "ru": "Транспортное средство на четырёх колёсах с двигателем."}, "def": {"de": "<g>Wenn</g> die Familie in Urlaub fährt, nehmen sie immer das <b>Auto</b>.", "en": "<g>When</g> the family goes on holiday, they always take the <b>car</b>.", "uk": "<g>Коли</g> родина їде у відпустку, вони завжди беруть <b>автомобіль</b>.", "ru": "<g>Когда</g> семья едет в отпуск, они всегда берут <b>машину</b>."}, "gram": "wenn_satz"},
{"id": "k5_006", "cat": "k5", "term": {"de": "das Taxi", "en": "taxi", "uk": "таксі", "ru": "такси"}, "short": {"de": "Ein Auto, das man mit Fahrer für eine Fahrt bezahlt.", "en": "A car with a driver that you pay for a ride.", "uk": "Автомобіль із водієм, за поїздку яким ти платиш.", "ru": "Автомобиль с водителем, за поездку на котором ты платишь."}, "def": {"de": "Er nimmt ein <b>Taxi</b>, <g>weil</g> der Zug heute leider Verspätung hat.", "en": "He takes a <b>taxi</b> <g>because</g> the train is unfortunately delayed today.", "uk": "Він бере <b>таксі</b>, <g>тому що</g> потяг сьогодні, на жаль, запізнюється.", "ru": "Он берёт <b>такси</b>, <g>потому что</g> поезд сегодня, к сожалению, опаздывает."}, "gram": "weil_satz"},
{"id": "k5_007", "cat": "k5", "term": {"de": "der Rollstuhl", "en": "wheelchair", "uk": "інвалідний візок", "ru": "инвалидная коляска"}, "short": {"de": "Ein Stuhl mit Rädern für Menschen, die nicht gut laufen können.", "en": "A chair with wheels for people who cannot walk well.", "uk": "Крісло на колесах для людей, які не можуть добре ходити.", "ru": "Кресло на колёсах для людей, которые не могут хорошо ходить."}, "def": {"de": "Man sieht, <g>dass</g> nicht jede Haltestelle für einen <b>Rollstuhl</b> geeignet ist.", "en": "You can see <g>that</g> not every stop is suitable for a <b>wheelchair</b>.", "uk": "Видно, <g>що</g> не кожна зупинка підходить для <b>інвалідного візка</b>.", "ru": "Видно, <g>что</g> не каждая остановка подходит для <b>инвалидной коляски</b>."}, "gram": "dass_satz"},
{"id": "k5_008", "cat": "k5", "term": {"de": "barrierefrei", "en": "accessible (barrier-free)", "uk": "безбарʼєрний", "ru": "безбарьерный"}, "short": {"de": "So gebaut, dass auch Menschen mit Rollstuhl gut hineinkommen.", "en": "Built so that people with wheelchairs can also easily get in.", "uk": "Побудовано так, щоб люди на візках теж могли легко потрапити.", "ru": "Построено так, чтобы люди на коляске тоже могли легко попасть."}, "def": {"de": "Sie freut sich, <g>dass</g> die neue U-Bahn-Station <b>barrierefrei</b> ist.", "en": "She is happy <g>that</g> the new subway station is <b>accessible</b>.", "uk": "Вона рада, <g>що</g> нова станція метро <b>безбарʼєрна</b>.", "ru": "Она рада, <g>что</g> новая станция метро <b>безбарьерная</b>."}, "gram": "dass_satz"},
{"id": "k5_009", "cat": "k5", "term": {"de": "das Wetter", "en": "weather", "uk": "погода", "ru": "погода"}, "short": {"de": "Ob es z. B. regnet, die Sonne scheint oder schneit.", "en": "Whether it is raining, sunny or snowing, for example.", "uk": "Наприклад, чи йде дощ, світить сонце чи йде сніг.", "ru": "Например, идёт ли дождь, светит ли солнце или идёт снег."}, "def": {"de": "Er fährt heute mit dem Rad, <g>weil</g> das <b>Wetter</b> so schön ist.", "en": "He is cycling today <g>because</g> the <b>weather</b> is so nice.", "uk": "Сьогодні він їде на велосипеді, <g>тому що</g> така гарна <b>погода</b>.", "ru": "Сегодня он едет на велосипеде, <g>потому что</g> такая хорошая <b>погода</b>."}, "gram": "weil_satz"},
{"id": "k5_010", "cat": "k5", "term": {"de": "regnen", "en": "to rain", "uk": "йти (про дощ)", "ru": "идти (о дожде)"}, "short": {"de": "Wenn Wasser vom Himmel fällt.", "en": "When water falls from the sky.", "uk": "Коли з неба падає вода.", "ru": "Когда с неба падает вода."}, "def": {"de": "Sie nimmt den Bus, <g>weil</g> es draußen stark <b>regnet</b>.", "en": "She takes the bus <g>because</g> it is <b>raining</b> heavily outside.", "uk": "Вона їде автобусом, <g>тому що</g> надворі сильно <b>йде дощ</b>.", "ru": "Она едет автобусом, <g>потому что</g> на улице сильно <b>идёт дождь</b>."}, "gram": "weil_satz"},
{"id": "k5_011", "cat": "k5", "term": {"de": "schneien", "en": "to snow", "uk": "йти (про сніг)", "ru": "идти (о снеге)"}, "short": {"de": "Wenn weißer, kalter Schnee vom Himmel fällt.", "en": "When white, cold snow falls from the sky.", "uk": "Коли з неба падає білий, холодний сніг.", "ru": "Когда с неба падает белый, холодный снег."}, "def": {"de": "Im Dezember <b>schneit</b> es hier oft <g>mehr als</g> im Januar.", "en": "In December it <b>snows</b> here often <g>more than</g> in January.", "uk": "У грудні тут <b>сніжить</b> частіше, <g>ніж</g> у січні.", "ru": "В декабре здесь <b>снежит</b> чаще, <g>чем</g> в январе."}, "gram": "komparativ"},
{"id": "k5_012", "cat": "k5", "term": {"de": "der Vorteil", "en": "advantage", "uk": "перевага", "ru": "преимущество"}, "short": {"de": "Etwas Gutes, das eine Sache oder Situation bringt.", "en": "Something good that a thing or situation brings.", "uk": "Щось хороше, що дає річ чи ситуація.", "ru": "Что-то хорошее, что даёт вещь или ситуация."}, "def": {"de": "Der größte <b>Vorteil</b> vom Fahrrad ist, dass es <g>billiger als</g> ein Auto ist.", "en": "The biggest <b>advantage</b> of a bicycle is that it is <g>cheaper than</g> a car.", "uk": "Найбільша <b>перевага</b> велосипеда в тому, що він <g>дешевший, ніж</g> автомобіль.", "ru": "Самое большое <b>преимущество</b> велосипеда в том, что он <g>дешевле, чем</g> автомобиль."}, "gram": "komparativ"},
{"id": "k5_013", "cat": "k5", "term": {"de": "der Nachteil", "en": "disadvantage", "uk": "недолік", "ru": "недостаток"}, "short": {"de": "Etwas Schlechtes, das eine Sache oder Situation bringt.", "en": "Something bad that a thing or situation brings.", "uk": "Щось погане, що дає річ чи ситуація.", "ru": "Что-то плохое, что даёт вещь или ситуация."}, "def": {"de": "Ein <b>Nachteil</b> vom Bus ist, dass er oft <g>langsamer als</g> die U-Bahn ist.", "en": "A <b>disadvantage</b> of the bus is that it is often <g>slower than</g> the subway.", "uk": "<b>Недолік</b> автобуса в тому, що він часто <g>повільніший, ніж</g> метро.", "ru": "<b>Недостаток</b> автобуса в том, что он часто <g>медленнее, чем</g> метро."}, "gram": "komparativ"},
{"id": "k5_014", "cat": "k5", "term": {"de": "die Strecke", "en": "route / distance", "uk": "маршрут", "ru": "маршрут"}, "short": {"de": "Der Weg von einem Ort zu einem anderen.", "en": "The way from one place to another.", "uk": "Шлях від одного місця до іншого.", "ru": "Путь от одного места до другого."}, "def": {"de": "Mit dem Fahrrad ist diese <b>Strecke</b> <g>genauso schnell wie</g> mit dem Bus.", "en": "By bicycle, this <b>route</b> is <g>just as fast as</g> by bus.", "uk": "На велосипеді цей <b>маршрут</b> <g>такий самий швидкий, як</g> автобусом.", "ru": "На велосипеде этот <b>маршрут</b> <g>такой же быстрый, как</g> на автобусе."}, "gram": "komparativ"},
{"id": "k5_015", "cat": "k5", "term": {"de": "mit dem Auto fahren", "en": "to drive (by car)", "uk": "їхати автомобілем", "ru": "ехать на машине"}, "short": {"de": "Ein Auto benutzen, um irgendwohin zu kommen.", "en": "To use a car to get somewhere.", "uk": "Користуватися автомобілем, щоб дістатися кудись.", "ru": "Пользоваться автомобилем, чтобы куда-то добраться."}, "def": {"de": "<b>Mit dem Auto</b> zu <b>fahren</b> ist heute <g>schneller als</g> mit dem Bus.", "en": "To <b>drive by car</b> today is <g>faster than</g> by bus.", "uk": "<b>Їхати автомобілем</b> сьогодні <g>швидше, ніж</g> автобусом.", "ru": "<b>Ехать на машине</b> сегодня <g>быстрее, чем</g> на автобусе."}, "gram": "komparativ"},
{"id": "k5_016", "cat": "k5", "term": {"de": "zu Fuß gehen", "en": "to walk / go on foot", "uk": "йти пішки", "ru": "идти пешком"}, "short": {"de": "Ohne Fahrzeug irgendwohin laufen.", "en": "To walk somewhere without a vehicle.", "uk": "Йти кудись без транспортного засобу.", "ru": "Идти куда-то без транспортного средства."}, "def": {"de": "Für kurze Strecken ist <b>zu Fuß</b> zu <b>gehen</b> <g>am gesündesten</g>.", "en": "For short distances, <b>walking</b> is <g>the healthiest</g>.", "uk": "Для коротких відстаней <b>ходити пішки</b> <g>найкорисніше</g>.", "ru": "Для коротких расстояний <b>ходить пешком</b> <g>полезнее всего</g>."}, "gram": "superlativ"},
{"id": "k5_017", "cat": "k5", "term": {"de": "die Haltestelle", "en": "(bus/tram) stop", "uk": "зупинка", "ru": "остановка"}, "short": {"de": "Der Ort, an dem Bus oder Bahn hält, damit man einsteigen kann.", "en": "The place where a bus or train stops so you can get on.", "uk": "Місце, де зупиняється автобус чи потяг, щоб можна було сісти.", "ru": "Место, где останавливается автобус или поезд, чтобы можно было сесть."}, "def": {"de": "Diese <b>Haltestelle</b> liegt <g>am nächsten</g> zu unserer Wohnung.", "en": "This <b>stop</b> is <g>the closest</g> to our apartment.", "uk": "Ця <b>зупинка</b> розташована <g>найближче</g> до нашої квартири.", "ru": "Эта <b>остановка</b> находится <g>ближе всего</g> к нашей квартире."}, "gram": "superlativ"},
{"id": "k5_018", "cat": "k5", "term": {"de": "der Fahrplan", "en": "timetable", "uk": "розклад", "ru": "расписание"}, "short": {"de": "Eine Liste mit den Zeiten von Bus, Bahn oder U-Bahn.", "en": "A list with the times of buses, trains or subways.", "uk": "Список із часом руху автобуса, потяга чи метро.", "ru": "Список со временем движения автобуса, поезда или метро."}, "def": {"de": "Laut <b>Fahrplan</b> fährt der erste Bus <g>am frühesten</g> um sechs Uhr.", "en": "According to the <b>timetable</b>, the first bus leaves <g>earliest</g> at six oʼclock.", "uk": "Згідно з <b>розкладом</b>, перший автобус вирушає <g>найраніше</g> о шостій.", "ru": "Согласно <b>расписанию</b>, первый автобус отправляется <g>раньше всего</g> в шесть."}, "gram": "superlativ"},
{"id": "k5_019", "cat": "k5", "term": {"de": "schnell", "en": "fast", "uk": "швидкий", "ru": "быстрый"}, "short": {"de": "So, dass es nicht viel Zeit braucht.", "en": "In a way that does not take much time.", "uk": "Так, що не потребує багато часу.", "ru": "Так, что не требует много времени."}, "def": {"de": "Von allen Verkehrsmitteln ist die U-Bahn <g>am <b>schnellsten</b></g>.", "en": "Of all the means of transport, the subway is <g>the <b>fastest</b></g>.", "uk": "З-поміж усіх транспортних засобів метро <g><b>найшвидше</b></g>.", "ru": "Из всех транспортных средств метро <g><b>быстрее всего</b></g>."}, "gram": "superlativ"},
{"id": "k5_020", "cat": "k5", "term": {"de": "langsam", "en": "slow", "uk": "повільний", "ru": "медленный"}, "short": {"de": "So, dass es viel Zeit braucht.", "en": "In a way that takes a lot of time.", "uk": "Так, що потребує багато часу.", "ru": "Так, что требует много времени."}, "def": {"de": "Bei viel Verkehr fährt der Bus <g>am <b>langsamsten</b></g> von allen.", "en": "In heavy traffic, the bus drives <g>the <b>slowest</b></g> of all.", "uk": "У щільному русі автобус їде <g><b>найповільніше</b></g> з-поміж усіх.", "ru": "В плотном движении автобус едет <g><b>медленнее всего</b></g> из всех."}, "gram": "superlativ"},
{"id": "k6_001", "cat": "k6", "term": {"de": "die Verwandtschaft", "en": "relatives / family relations", "uk": "родичі", "ru": "родственники"}, "short": {"de": "Alle Personen, die zur Familie gehören.", "en": "All the people who belong to the family.", "uk": "Усі люди, які належать до родини.", "ru": "Все люди, которые принадлежат к семье."}, "def": {"de": "Sie <g>möchte</g> ihre ganze <b>Verwandtschaft</b> zur Feier einladen.", "en": "She <g>wants</g> to invite her whole <b>family</b> to the celebration.", "uk": "Вона <g>хоче</g> запросити всіх своїх <b>родичів</b> на святкування.", "ru": "Она <g>хочет</g> пригласить всех своих <b>родственников</b> на праздник."}, "gram": "modalverben"},
{"id": "k6_002", "cat": "k6", "term": {"de": "die Eltern (Pl.)", "en": "parents", "uk": "батьки", "ru": "родители"}, "short": {"de": "Vater und Mutter.", "en": "Father and mother.", "uk": "Батько і мати.", "ru": "Отец и мать."}, "def": {"de": "Als Kind <g>durfte</g> sie oft mit ihren <b>Eltern</b> verreisen.", "en": "As a child she <g>was allowed</g> to travel often with her <b>parents</b>.", "uk": "У дитинстві їй <g>дозволялося</g> часто подорожувати зі своїми <b>батьками</b>.", "ru": "В детстве ей <g>разрешалось</g> часто путешествовать со своими <b>родителями</b>."}, "gram": "modalverben_praeteritum"},
{"id": "k6_003", "cat": "k6", "term": {"de": "die Großeltern (Pl.)", "en": "grandparents", "uk": "бабуся й дідусь", "ru": "бабушка и дедушка"}, "short": {"de": "Die Eltern von Vater oder Mutter.", "en": "The parents of the father or mother.", "uk": "Батьки батька чи матері.", "ru": "Родители отца или матери."}, "def": {"de": "Er <g>musste</g> als Kind jeden Sommer bei seinen <b>Großeltern</b> bleiben.", "en": "As a child, he <g>had to</g> stay with his <b>grandparents</b> every summer.", "uk": "У дитинстві йому <g>доводилося</g> щоліта залишатися у своїх <b>бабусі й дідуся</b>.", "ru": "В детстве ему <g>приходилось</g> каждое лето оставаться у своих <b>бабушки и дедушки</b>."}, "gram": "modalverben_praeteritum"},
{"id": "k6_004", "cat": "k6", "term": {"de": "die Geschwister (Pl.)", "en": "siblings", "uk": "брати і сестри", "ru": "братья и сёстры"}, "short": {"de": "Bruder und Schwester zusammen.", "en": "Brother and sister together.", "uk": "Брат і сестра разом.", "ru": "Брат и сестра вместе."}, "def": {"de": "Sie <g>kann</g> sich mit ihren <b>Geschwistern</b> immer gut verstehen.", "en": "She <g>can</g> always get along well with her <b>siblings</b>.", "uk": "Вона завжди <g>може</g> добре порозумітися зі своїми <b>братами і сестрами</b>.", "ru": "Она всегда <g>может</g> хорошо ладить со своими <b>братьями и сёстрами</b>."}, "gram": "modalverben"},
{"id": "k6_005", "cat": "k6", "term": {"de": "die Hochzeit", "en": "wedding", "uk": "весілля", "ru": "свадьба"}, "short": {"de": "Das Fest, wenn zwei Menschen heiraten.", "en": "The celebration when two people get married.", "uk": "Свято, коли двоє людей одружуються.", "ru": "Праздник, когда двое людей женятся."}, "def": {"de": "Alle <g>wollen</g> zur <b>Hochzeit</b> von Anna und Tom kommen.", "en": "Everyone <g>wants</g> to come to Anna and Tomʼs <b>wedding</b>.", "uk": "Усі <g>хочуть</g> прийти на <b>весілля</b> Анни і Тома.", "ru": "Все <g>хотят</g> прийти на <b>свадьбу</b> Анны и Тома."}, "gram": "modalverben"},
{"id": "k6_006", "cat": "k6", "term": {"de": "heiraten", "en": "to marry", "uk": "одружуватися", "ru": "жениться / выходить замуж"}, "short": {"de": "Offiziell Mann und Frau (oder Partner) werden.", "en": "To officially become husband and wife (or partners).", "uk": "Офіційно ставати чоловіком і дружиною (чи партнерами).", "ru": "Официально становиться мужем и женой (или партнёрами)."}, "def": {"de": "Sie <b>heiraten</b> <g>im nächsten Sommer</g> in einer kleinen Kirche.", "en": "They are getting <b>married</b> <g>next summer</g> in a small church.", "uk": "Вони <b>одружуються</b> <g>наступного літа</g> у маленькій церкві.", "ru": "Они <b>женятся</b> <g>следующим летом</g> в маленькой церкви."}, "gram": "temporale_praepositionen"},
{"id": "k6_007", "cat": "k6", "term": {"de": "die Migration", "en": "migration", "uk": "міграція", "ru": "миграция"}, "short": {"de": "Wenn Menschen in ein anderes Land ziehen, um dort zu leben.", "en": "When people move to another country to live there.", "uk": "Коли люди переїжджають в іншу країну, щоб там жити.", "ru": "Когда люди переезжают в другую страну, чтобы там жить."}, "def": {"de": "<g>Seit vielen Jahren</g> spielt <b>Migration</b> eine wichtige Rolle in Deutschland.", "en": "<b>Migration</b> has played an important role in Germany <g>for many years</g>.", "uk": "<g>Багато років</g> <b>міграція</b> відіграє важливу роль у Німеччині.", "ru": "<g>Много лет</g> <b>миграция</b> играет важную роль в Германии."}, "gram": "temporale_praepositionen"},
{"id": "k6_008", "cat": "k6", "term": {"de": "auswandern", "en": "to emigrate", "uk": "емігрувати", "ru": "эмигрировать"}, "short": {"de": "Das eigene Land verlassen, um in einem anderen Land zu leben.", "en": "To leave your own country to live in another country.", "uk": "Залишати свою країну, щоб жити в іншій країні.", "ru": "Покидать свою страну, чтобы жить в другой стране."}, "def": {"de": "Ihre Familie ist <g>vor zehn Jahren</g> nach Deutschland <b>ausgewandert</b>.", "en": "Her family <b>emigrated</b> to Germany <g>ten years ago</g>.", "uk": "Її родина <b>емігрувала</b> до Німеччини <g>десять років тому</g>.", "ru": "Её семья <b>эмигрировала</b> в Германию <g>десять лет назад</g>."}, "gram": "temporale_praepositionen"},
{"id": "k6_009", "cat": "k6", "term": {"de": "das Heimatland", "en": "homeland", "uk": "батьківщина", "ru": "родина"}, "short": {"de": "Das Land, in dem man geboren ist.", "en": "The country where you were born.", "uk": "Країна, у якій ти народився.", "ru": "Страна, в которой ты родился."}, "def": {"de": "Sie fliegt <g>einmal im Jahr</g> in ihr <b>Heimatland</b>, um Familie zu besuchen.", "en": "She flies to her <b>homeland</b> <g>once a year</g> to visit family.", "uk": "Вона <g>раз на рік</g> літає до своєї <b>батьківщини</b>, щоб відвідати родину.", "ru": "Она <g>раз в год</g> летает на свою <b>родину</b>, чтобы навестить семью."}, "gram": "temporale_praepositionen"},
{"id": "k6_010", "cat": "k6", "term": {"de": "die Erinnerung", "en": "memory", "uk": "спогад", "ru": "воспоминание"}, "short": {"de": "Ein Bild im Kopf von etwas, das man früher erlebt hat.", "en": "A picture in your mind of something you experienced before.", "uk": "Образ у голові про те, що ти пережив раніше.", "ru": "Образ в голове о том, что ты пережил раньше."}, "def": {"de": "<g>Seit der Kindheit</g> hat sie viele schöne <b>Erinnerungen</b> an ihr Dorf.", "en": "<g>Since childhood</g>, she has many beautiful <b>memories</b> of her village.", "uk": "<g>З дитинства</g> у неї багато гарних <b>спогадів</b> про своє село.", "ru": "<g>С детства</g> у неё много приятных <b>воспоминаний</b> о своём селе."}, "gram": "temporale_praepositionen"},
{"id": "k6_011", "cat": "k6", "term": {"de": "sich erinnern", "en": "to remember", "uk": "пригадувати", "ru": "вспоминать"}, "short": {"de": "Sich an etwas aus der Vergangenheit denken.", "en": "To think back to something from the past.", "uk": "Думати про щось із минулого.", "ru": "Вспоминать что-то из прошлого."}, "def": {"de": "Sie <b>erinnert</b> sich noch genau, <g>als</g> sie zum ersten Mal in Deutschland ankam.", "en": "She still <b>remembers</b> exactly <g>when</g> she first arrived in Germany.", "uk": "Вона досі точно <b>памʼятає</b> той момент, <g>коли</g> вперше приїхала до Німеччини.", "ru": "Она до сих пор точно <b>помнит</b> тот момент, <g>когда</g> впервые приехала в Германию."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_012", "cat": "k6", "term": {"de": "schwer", "en": "difficult / heavy", "uk": "важкий", "ru": "тяжёлый"}, "short": {"de": "Nicht leicht, mit viel Anstrengung verbunden.", "en": "Not easy, requiring a lot of effort.", "uk": "Нелегкий, повʼязаний із великими зусиллями.", "ru": "Нелёгкий, связанный с большими усилиями."}, "def": {"de": "Am Anfang war es <b>schwer</b> für sie, <g>als</g> sie noch kein Deutsch konnte.", "en": "It was <b>hard</b> for her at the beginning, <g>when</g> she could not speak German yet.", "uk": "Спочатку їй було <b>важко</b> у той час, <g>коли</g> вона ще не знала німецької.", "ru": "Сначала ей было <b>тяжело</b> в то время, <g>когда</g> она ещё не знала немецкого."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_013", "cat": "k6", "term": {"de": "leicht", "en": "easy / light", "uk": "легкий", "ru": "лёгкий"}, "short": {"de": "Ohne viel Anstrengung, einfach.", "en": "Without much effort, easy.", "uk": "Без великих зусиль, легко.", "ru": "Без больших усилий, легко."}, "def": {"de": "Es war <b>leicht</b> für ihn, <g>schon</g> nach einem Jahr fließend zu sprechen.", "en": "It was <b>easy</b> for him to speak fluently <g>already</g> after one year.", "uk": "Йому було <b>легко</b> заговорити вільно <g>вже</g> через рік.", "ru": "Ему было <b>легко</b> заговорить свободно <g>уже</g> через год."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_014", "cat": "k6", "term": {"de": "die Sprache", "en": "language", "uk": "мова", "ru": "язык"}, "short": {"de": "Das System von Wörtern, mit dem man spricht, z. B. Deutsch oder Englisch.", "en": "The system of words used to speak, e.g. German or English.", "uk": "Система слів, якою розмовляють, напр. німецька чи англійська.", "ru": "Система слов, на которой говорят, напр. немецкий или английский."}, "def": {"de": "Sie hat die neue <b>Sprache</b> <g>erst</g> nach vielen Monaten wirklich gut gelernt.", "en": "She really learned the new <b>language</b> well <g>only</g> after many months.", "uk": "Вона по-справжньому добре вивчила нову <b>мову</b> <g>лише</g> через багато місяців.", "ru": "Она по-настоящему хорошо выучила новый <b>язык</b> <g>только</g> через много месяцев."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_015", "cat": "k6", "term": {"de": "die Kultur", "en": "culture", "uk": "культура", "ru": "культура"}, "short": {"de": "Die Art, wie Menschen in einem Land leben, feiern und denken.", "en": "The way people in a country live, celebrate and think.", "uk": "Спосіб, у який люди в країні живуть, святкують і думають.", "ru": "Способ, каким люди в стране живут, празднуют и думают."}, "def": {"de": "<g>Als</g> sie neu in Deutschland war, fand sie die <b>Kultur</b> sehr interessant.", "en": "<g>When</g> she was new in Germany, she found the <b>culture</b> very interesting.", "uk": "<g>Коли</g> вона щойно приїхала до Німеччини, <b>культура</b> здалася їй дуже цікавою.", "ru": "<g>Когда</g> она только приехала в Германию, <b>культура</b> показалась ей очень интересной."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_016", "cat": "k6", "term": {"de": "sich verändern", "en": "to change", "uk": "змінюватися", "ru": "меняться"}, "short": {"de": "Anders werden als vorher.", "en": "To become different from before.", "uk": "Ставати іншим, ніж раніше.", "ru": "Становиться другим, чем раньше."}, "def": {"de": "Ihr Leben hat sich <g>schon</g> nach kurzer Zeit stark <b>verändert</b>.", "en": "Her life had <b>changed</b> a lot <g>already</g> after a short time.", "uk": "Її життя <b>змінилося</b> сильно <g>вже</g> через короткий час.", "ru": "Её жизнь <b>изменилась</b> сильно <g>уже</g> через короткое время."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_017", "cat": "k6", "term": {"de": "das Leben", "en": "life", "uk": "життя", "ru": "жизнь"}, "short": {"de": "Alles, was ein Mensch erlebt, von der Geburt bis heute.", "en": "Everything a person experiences from birth until today.", "uk": "Все, що людина переживає від народження і до сьогодні.", "ru": "Всё, что человек переживает от рождения до сегодняшнего дня."}, "def": {"de": "<g>Als</g> sie nach Deutschland kam, begann für sie ein neues <b>Leben</b>.", "en": "<g>When</g> she came to Germany, a new <b>life</b> began for her.", "uk": "<g>Коли</g> вона приїхала до Німеччини, для неї почалося нове <b>життя</b>.", "ru": "<g>Когда</g> она приехала в Германию, для неё началась новая <b>жизнь</b>."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_018", "cat": "k6", "term": {"de": "der Smalltalk", "en": "small talk", "uk": "світська бесіда", "ru": "светская беседа"}, "short": {"de": "Ein kurzes, freundliches Gespräch über einfache Themen.", "en": "A short, friendly conversation about simple topics.", "uk": "Коротка, дружня розмова на прості теми.", "ru": "Короткий, дружеский разговор на простые темы."}, "def": {"de": "<g>Erst</g> nach ein paar Monaten konnte sie beim <b>Smalltalk</b> gut mitreden.", "en": "<g>Only</g> after a few months could she take part in <b>small talk</b> well.", "uk": "<g>Лише</g> через кілька місяців вона змогла добре підтримувати <b>світську бесіду</b>.", "ru": "<g>Только</g> через несколько месяцев она смогла хорошо поддерживать <b>светскую беседу</b>."}, "gram": "als_wenn_schon_erst"},
{"id": "k6_019", "cat": "k6", "term": {"de": "die Enkelkinder (Pl.)", "en": "grandchildren", "uk": "онуки", "ru": "внуки"}, "short": {"de": "Die Kinder der eigenen Kinder.", "en": "The children of your own children.", "uk": "Діти власних дітей.", "ru": "Дети собственных детей."}, "def": {"de": "<g>Wenn</g> die <b>Enkelkinder</b> zu Besuch kommen, freut sich die ganze Familie.", "en": "<g>When</g> the <b>grandchildren</b> come to visit, the whole family is happy.", "uk": "<g>Коли</g> <b>онуки</b> приїжджають у гості, радіє вся родина.", "ru": "<g>Когда</g> <b>внуки</b> приезжают в гости, радуется вся семья."}, "gram": "als_wenn_schon_erst"},
{"id": "k7_001", "cat": "k7", "term": {"de": "der Ausflug", "en": "outing / trip", "uk": "екскурсія", "ru": "поездка"}, "short": {"de": "Eine kurze Reise, oft für einen Tag, um etwas zu sehen oder zu erleben.", "en": "A short trip, often for a day, to see or experience something.", "uk": "Коротка поїздка, часто на день, щоб щось побачити чи пережити.", "ru": "Короткая поездка, часто на день, чтобы что-то увидеть или пережить."}, "def": {"de": "<g>Wenn</g> das Wetter schön ist, machen sie am Wochenende einen <b>Ausflug</b>.", "en": "<g>When</g> the weather is nice, they go on a <b>trip</b> at the weekend.", "uk": "<g>Коли</g> гарна погода, вони на вихідних вирушають на <b>екскурсію</b>.", "ru": "<g>Когда</g> хорошая погода, они на выходных отправляются на <b>экскурсию</b>."}, "gram": "wenn_satz"},
{"id": "k7_002", "cat": "k7", "term": {"de": "der Vorschlag", "en": "suggestion", "uk": "пропозиція", "ru": "предложение"}, "short": {"de": "Eine Idee, die man anderen sagt.", "en": "An idea you tell others.", "uk": "Ідея, яку ти пропонуєш іншим.", "ru": "Идея, которую ты предлагаешь другим."}, "def": {"de": "<g>Wenn</g> jemand einen guten <b>Vorschlag</b> hat, freut sich das ganze Team.", "en": "<g>When</g> someone has a good <b>suggestion</b>, the whole team is happy.", "uk": "<g>Коли</g> хтось має гарну <b>пропозицію</b>, радіє вся команда.", "ru": "<g>Когда</g> у кого-то есть хорошее <b>предложение</b>, радуется вся команда."}, "gram": "wenn_satz"},
{"id": "k7_003", "cat": "k7", "term": {"de": "vorschlagen", "en": "to suggest", "uk": "пропонувати", "ru": "предлагать"}, "short": {"de": "Eine Idee sagen, was man zusammen machen könnte.", "en": "To say an idea about what you could do together.", "uk": "Висловлювати ідею, що можна зробити разом.", "ru": "Высказывать идею, что можно сделать вместе."}, "def": {"de": "<g>Wenn</g> niemand eine Idee hat, <b>schlägt</b> sie meistens einen Zoobesuch <b>vor</b>.", "en": "<g>When</g> no one has an idea, she usually <b>suggests</b> a visit to the zoo.", "uk": "<g>Коли</g> ні в кого немає ідеї, вона зазвичай <b>пропонує</b> відвідати зоопарк.", "ru": "<g>Когда</g> ни у кого нет идеи, она обычно <b>предлагает</b> посетить зоопарк."}, "gram": "wenn_satz"},
{"id": "k7_004", "cat": "k7", "term": {"de": "der Regen", "en": "rain", "uk": "дощ", "ru": "дождь"}, "short": {"de": "Wasser, das vom Himmel fällt.", "en": "Water that falls from the sky.", "uk": "Вода, яка падає з неба.", "ru": "Вода, которая падает с неба."}, "def": {"de": "<g>Wenn</g> starker <b>Regen</b> kommt, bleiben sie lieber zu Hause.", "en": "<g>When</g> heavy <b>rain</b> comes, they prefer to stay at home.", "uk": "<g>Коли</g> йде сильний <b>дощ</b>, вони радше залишаються вдома.", "ru": "<g>Когда</g> идёт сильный <b>дождь</b>, они предпочитают остаться дома."}, "gram": "wenn_satz"},
{"id": "k7_005", "cat": "k7", "term": {"de": "die Sonne", "en": "sun", "uk": "сонце", "ru": "солнце"}, "short": {"de": "Der helle Stern am Himmel, der uns Licht und Wärme gibt.", "en": "The bright star in the sky that gives us light and warmth.", "uk": "Яскрава зірка на небі, яка дає нам світло і тепло.", "ru": "Яркая звезда на небе, которая даёт нам свет и тепло."}, "def": {"de": "<g>Wenn</g> die <b>Sonne</b> scheint, ist der Ausflug in den Park viel schöner.", "en": "<g>When</g> the <b>sun</b> is shining, the trip to the park is much nicer.", "uk": "<g>Коли</g> світить <b>сонце</b>, прогулянка в парк набагато приємніша.", "ru": "<g>Когда</g> светит <b>солнце</b>, прогулка в парк намного приятнее."}, "gram": "wenn_satz"},
{"id": "k7_006", "cat": "k7", "term": {"de": "bewölkt", "en": "cloudy", "uk": "хмарно", "ru": "облачно"}, "short": {"de": "Wenn viele Wolken am Himmel sind.", "en": "When there are many clouds in the sky.", "uk": "Коли на небі багато хмар.", "ru": "Когда на небе много туч."}, "def": {"de": "<g>Dieser</g> <b>bewölkte</b> Tag ist nicht so gut für einen Ausflug.", "en": "<g>This</g> <b>cloudy</b> day is not so good for a trip.", "uk": "<g>Цей</g> <b>хмарний</b> день не дуже підходить для екскурсії.", "ru": "<g>Этот</g> <b>облачный</b> день не очень подходит для поездки."}, "gram": "demonstrativartikel"},
{"id": "k7_007", "cat": "k7", "term": {"de": "das Gewitter", "en": "thunderstorm", "uk": "гроза", "ru": "гроза"}, "short": {"de": "Sehr schlechtes Wetter mit Blitz und Donner.", "en": "Very bad weather with lightning and thunder.", "uk": "Дуже погана погода з блискавкою і громом.", "ru": "Очень плохая погода с молнией и громом."}, "def": {"de": "<g>Dieses</g> <b>Gewitter</b> ist wirklich sehr stark und laut.", "en": "<g>This</g> <b>thunderstorm</b> is really very strong and loud.", "uk": "<g>Ця</g> <b>гроза</b> справді дуже сильна і гучна.", "ru": "<g>Эта</g> <b>гроза</b> действительно очень сильная и громкая."}, "gram": "demonstrativartikel"},
{"id": "k7_008", "cat": "k7", "term": {"de": "der Zoo", "en": "zoo", "uk": "зоопарк", "ru": "зоопарк"}, "short": {"de": "Ein Ort, an dem viele verschiedene Tiere leben und man sie ansehen kann.", "en": "A place where many different animals live and you can look at them.", "uk": "Місце, де живуть різні тварини і на них можна подивитися.", "ru": "Место, где живут разные животные и на них можно посмотреть."}, "def": {"de": "<g>Dieser</g> <b>Zoo</b> hat besonders viele Tiere aus Afrika.", "en": "<g>This</g> <b>zoo</b> has especially many animals from Africa.", "uk": "У <g>цьому</g> <b>зоопарку</b> особливо багато тварин з Африки.", "ru": "В <g>этом</g> <b>зоопарке</b> особенно много животных из Африки."}, "gram": "demonstrativartikel"},
{"id": "k7_009", "cat": "k7", "term": {"de": "die Sehenswürdigkeit", "en": "sight / attraction", "uk": "визначна памʼятка", "ru": "достопримечательность"}, "short": {"de": "Ein besonderer Ort, den viele Menschen sehen möchten.", "en": "A special place that many people want to see.", "uk": "Особливе місце, яке хочуть побачити багато людей.", "ru": "Особое место, которое хотят увидеть многие люди."}, "def": {"de": "<g>Diese</g> <b>Sehenswürdigkeit</b> ist die berühmteste in der ganzen Stadt.", "en": "<g>This</g> <b>sight</b> is the most famous in the whole city.", "uk": "<g>Ця</g> <b>визначна памʼятка</b> найвідоміша в усьому місті.", "ru": "Эта <g>эта</g> <b>достопримечательность</b> самая известная во всём городе."}, "gram": "demonstrativartikel"},
{"id": "k7_010", "cat": "k7", "term": {"de": "gefallen", "en": "to like / please", "uk": "подобатися", "ru": "нравиться"}, "short": {"de": "Wenn man etwas schön oder gut findet.", "en": "When you find something nice or good.", "uk": "Коли ти вважаєш щось гарним чи хорошим.", "ru": "Когда ты считаешь что-то красивым или хорошим."}, "def": {"de": "<g>Dieser</g> Park <b>gefällt</b> den Kindern besonders gut.", "en": "The children particularly <b>like</b> <g>this</g> park.", "uk": "<g>Цей</g> парк особливо <b>подобається</b> дітям.", "ru": "<g>Этот</g> парк особенно <b>нравится</b> детям."}, "gram": "demonstrativartikel"},
{"id": "k7_011", "cat": "k7", "term": {"de": "der Bericht", "en": "report", "uk": "звіт / розповідь", "ru": "отчёт / рассказ"}, "short": {"de": "Ein Text, der erzählt, was passiert ist.", "en": "A text that tells what happened.", "uk": "Текст, який розповідає, що сталося.", "ru": "Текст, который рассказывает, что произошло."}, "def": {"de": "Sie <g><b>schrieb</b></g> nach dem Ausflug einen kurzen <b>Bericht</b> für die Klasse.", "en": "After the trip, she <g><b>wrote</b></g> a short <b>report</b> for the class.", "uk": "Після екскурсії вона <g><b>написала</b></g> короткий <b>звіт</b> для класу.", "ru": "После поездки она <g><b>написала</b></g> короткий <b>отчёт</b> для класса."}, "gram": "praeteritum"},
{"id": "k7_012", "cat": "k7", "term": {"de": "dieser / diese / dieses", "en": "this", "uk": "цей / ця / це", "ru": "этот / эта / это"}, "short": {"de": "Ein Wort, mit dem man auf eine bestimmte Sache zeigt.", "en": "A word used to point to a specific thing.", "uk": "Слово, яким вказують на конкретну річ.", "ru": "Слово, которым указывают на конкретную вещь."}, "def": {"de": "<b>Dieser</b> Ausflug <g><b>war</b></g> für alle ein besonderes Erlebnis.", "en": "<b>This</b> trip <g><b>was</b></g> a special experience for everyone.", "uk": "<b>Ця</b> екскурсія <b>стала</b> для всіх особливим враженням.", "ru": "<b>Эта</b> поездка <b>стала</b> для всех особым впечатлением."}, "gram": "demonstrativartikel"},
{"id": "k7_013", "cat": "k7", "term": {"de": "die Klassenfahrt", "en": "class trip", "uk": "шкільна поїздка", "ru": "школьная поездка"}, "short": {"de": "Eine Reise, die eine ganze Schulklasse zusammen macht.", "en": "A trip that a whole school class takes together.", "uk": "Поїздка, яку разом здійснює цілий шкільний клас.", "ru": "Поездка, которую вместе совершает целый школьный класс."}, "def": {"de": "Die <b>Klassenfahrt</b> nach Berlin <g><b>dauerte</b></g> drei Tage.", "en": "The <b>class trip</b> to Berlin <g><b>lasted</b></g> three days.", "uk": "<b>Шкільна поїздка</b> до Берліна <b>тривала</b> три дні.", "ru": "<b>Школьная поездка</b> в Берлин <b>длилась</b> три дня."}, "gram": "praeteritum"},
{"id": "k7_014", "cat": "k7", "term": {"de": "der Betriebsausflug", "en": "company outing", "uk": "корпоративна поїздка", "ru": "корпоративная поездка"}, "short": {"de": "Eine Reise, die alle Mitarbeiter einer Firma zusammen machen.", "en": "A trip that all employees of a company take together.", "uk": "Поїздка, яку разом здійснюють усі співробітники фірми.", "ru": "Поездка, которую вместе совершают все сотрудники фирмы."}, "def": {"de": "Beim <b>Betriebsausflug</b> <g><b>besuchte</b></g> das Team einen kleinen See.", "en": "On the <b>company outing</b>, the team <g><b>visited</b></g> a small lake.", "uk": "Під час <b>корпоративної поїздки</b> команда <b>відвідала</b> маленьке озеро.", "ru": "Во время <b>корпоративной поездки</b> команда <b>посетила</b> маленькое озеро."}, "gram": "praeteritum"},
{"id": "k7_015", "cat": "k7", "term": {"de": "planen", "en": "to plan", "uk": "планувати", "ru": "планировать"}, "short": {"de": "Genau überlegen, was und wann man etwas machen möchte.", "en": "To think carefully about what and when you want to do something.", "uk": "Ретельно продумувати, що і коли ти хочеш зробити.", "ru": "Тщательно продумывать, что и когда ты хочешь сделать."}, "def": {"de": "Sie <g><b>plante</b></g> den Ausflug schon zwei Wochen vorher genau.", "en": "She <g><b>planned</b></g> the trip carefully two weeks in advance.", "uk": "Вона ретельно <b>спланувала</b> екскурсію ще за два тижні наперед.", "ru": "Она тщательно <b>спланировала</b> поездку ещё за две недели."}, "gram": "praeteritum"},
{"id": "k7_016", "cat": "k7", "term": {"de": "übernachten", "en": "to stay overnight", "uk": "ночувати", "ru": "ночевать"}, "short": {"de": "Die Nacht an einem Ort verbringen und dort schlafen.", "en": "To spend the night in a place and sleep there.", "uk": "Проводити ніч у якомусь місці і спати там.", "ru": "Проводить ночь в каком-то месте и спать там."}, "def": {"de": "Die Klasse <g><b>übernachtete</b></g> in einer kleinen Jugendherberge.", "en": "The class <g><b>stayed overnight</b></g> in a small youth hostel.", "uk": "Клас <b>переночував</b> у невеликому молодіжному хостелі.", "ru": "Класс <b>переночевал</b> в небольшом молодёжном хостеле."}, "gram": "praeteritum"},
{"id": "k7_017", "cat": "k7", "term": {"de": "die Aktivität", "en": "activity", "uk": "активність", "ru": "активность"}, "short": {"de": "Etwas, das man aktiv tut, z. B. Sport oder ein Spiel.", "en": "Something you actively do, e.g. sports or a game.", "uk": "Те, чим ти активно займаєшся, напр. спорт чи гра.", "ru": "То, чем ты активно занимаешься, напр. спорт или игра."}, "def": {"de": "Am Nachmittag <g><b>gab</b></g> es noch eine sportliche <b>Aktivität</b> im Park.", "en": "In the afternoon there <g><b>was</b></g> also a sports <b>activity</b> in the park.", "uk": "Пополудні в парку ще <b>відбулася</b> спортивна <b>активність</b>.", "ru": "Днём в парке ещё <b>была</b> спортивная <b>активность</b>."}, "gram": "praeteritum"},
{"id": "k7_018", "cat": "k7", "term": {"de": "verbringen", "en": "to spend (time)", "uk": "проводити (час)", "ru": "проводить (время)"}, "short": {"de": "Eine bestimmte Zeit an einem Ort oder mit einer Aktivität sein.", "en": "To spend a certain time in a place or doing an activity.", "uk": "Проводити певний час у якомусь місці чи за якимось заняттям.", "ru": "Проводить определённое время в каком-то месте или за каким-то занятием."}, "def": {"de": "Sie <g><b>verbrachten</b></g> den ganzen Tag zusammen im Park.", "en": "They <g><b>spent</b></g> the whole day together in the park.", "uk": "Вони <b>провели</b> цілий день разом у парку.", "ru": "Они <b>провели</b> весь день вместе в парке."}, "gram": "praeteritum"},
{"id": "k8_001", "cat": "k8", "term": {"de": "die Hauptstadt", "en": "capital city", "uk": "столиця", "ru": "столица"}, "short": {"de": "Die wichtigste Stadt eines Landes.", "en": "The most important city of a country.", "uk": "Найважливіше місто країни.", "ru": "Самый важный город страны."}, "def": {"de": "Berlin liegt <g>im Osten</g> von Deutschland und ist die <b>Hauptstadt</b>.", "en": "Berlin is located <g>in the east</g> of Germany and is the <b>capital</b>.", "uk": "Берлін розташований <g>на сході</g> Німеччини і є <b>столицею</b>.", "ru": "Берлин находится <g>на востоке</g> Германии и является <b>столицей</b>."}, "gram": "lokale_praepositionen"},
{"id": "k8_002", "cat": "k8", "term": {"de": "der Plan", "en": "plan", "uk": "план", "ru": "план"}, "short": {"de": "Eine Idee oder ein Programm für die Zukunft.", "en": "An idea or programme for the future.", "uk": "Ідея чи програма на майбутнє.", "ru": "Идея или программа на будущее."}, "def": {"de": "<g>Nach dem Frühstück</g> zeigt sie ihm ihren <b>Plan</b> für den Tag in Berlin.", "en": "<g>After breakfast</g>, she shows him her <b>plan</b> for the day in Berlin.", "uk": "<g>Після сніданку</g> вона показує йому свій <b>план</b> на день у Берліні.", "ru": "<g>После завтрака</g> она показывает ему свой <b>план</b> на день в Берлине."}, "gram": "temporale_praepositionen"},
{"id": "k8_003", "cat": "k8", "term": {"de": "die Wegbeschreibung", "en": "directions", "uk": "опис маршруту", "ru": "описание маршрута"}, "short": {"de": "Informationen, wie man von einem Ort zu einem anderen kommt.", "en": "Information about how to get from one place to another.", "uk": "Інформація про те, як дістатися з одного місця в інше.", "ru": "Информация о том, как добраться из одного места в другое."}, "def": {"de": "<g>Vor dem Bahnhof</g> braucht sie noch eine genaue <b>Wegbeschreibung</b>.", "en": "<g>In front of the station</g>, she still needs precise <b>directions</b>.", "uk": "<g>Перед вокзалом</g> їй ще потрібен точний <b>опис маршруту</b>.", "ru": "<g>Перед вокзалом</g> ей ещё нужно точное <b>описание маршрута</b>."}, "gram": "lokale_praepositionen"},
{"id": "k8_004", "cat": "k8", "term": {"de": "geradeaus", "en": "straight ahead", "uk": "прямо", "ru": "прямо"}, "short": {"de": "In eine Richtung gehen, ohne links oder rechts abzubiegen.", "en": "To go in one direction without turning left or right.", "uk": "Йти в одному напрямку, не повертаючи ліворуч чи праворуч.", "ru": "Идти в одном направлении, не поворачивая налево или направо."}, "def": {"de": "Gehen Sie <b>geradeaus</b> <g>bis zur nächsten Ampel</g>, dann sehen Sie das Museum.", "en": "Go <b>straight ahead</b> <g>until the next traffic light</g>, then you will see the museum.", "uk": "Йдіть <b>прямо</b> <g>до наступного світлофора</g>, тоді побачите музей.", "ru": "Идите <b>прямо</b> <g>до следующего светофора</g>, тогда увидите музей."}, "gram": "lokale_praepositionen"},
{"id": "k8_005", "cat": "k8", "term": {"de": "links", "en": "left", "uk": "ліворуч", "ru": "налево"}, "short": {"de": "Die Richtung, die der rechten Seite gegenüber ist.", "en": "The direction opposite to the right side.", "uk": "Напрямок, протилежний правому боку.", "ru": "Направление, противоположное правой стороне."}, "def": {"de": "<g>An der Ecke</g> biegen Sie <b>links</b> ab, dann sehen Sie den Park.", "en": "<g>At the corner</g>, turn <b>left</b>, then you will see the park.", "uk": "<g>На розі</g> поверніть <b>ліворуч</b>, тоді побачите парк.", "ru": "<g>На углу</g> поверните <b>налево</b>, тогда увидите парк."}, "gram": "lokale_praepositionen"},
{"id": "k8_006", "cat": "k8", "term": {"de": "rechts", "en": "right", "uk": "праворуч", "ru": "направо"}, "short": {"de": "Die Richtung, die der linken Seite gegenüber ist.", "en": "The direction opposite to the left side.", "uk": "Напрямок, протилежний лівому боку.", "ru": "Направление, противоположное левой стороне."}, "def": {"de": "<g>Hinter der Kirche</g> gehen Sie <b>rechts</b>, dann kommen Sie zum Markt.", "en": "<g>Behind the church</g>, go <b>right</b>, then you will get to the market.", "uk": "<g>За церквою</g> поверніть <b>праворуч</b>, тоді потрапите на ринок.", "ru": "<g>За церковью</g> поверните <b>направо</b>, тогда попадёте на рынок."}, "gram": "lokale_praepositionen"},
{"id": "k8_007", "cat": "k8", "term": {"de": "die Ecke", "en": "corner", "uk": "ріг (вулиці)", "ru": "угол"}, "short": {"de": "Der Ort, an dem zwei Straßen zusammentreffen.", "en": "The place where two streets meet.", "uk": "Місце, де сходяться дві вулиці.", "ru": "Место, где сходятся две улицы."}, "def": {"de": "Das Café liegt genau <g>an der Ecke</g> neben der <b>Ecke</b> zur Hauptstraße.", "en": "The café is located right <g>at the corner</g> next to the street <b>corner</b>.", "uk": "Кафе розташоване якраз <g>на розі</g> біля <b>рогу</b> головної вулиці.", "ru": "Кафе находится прямо <g>на углу</g> возле <b>угла</b> главной улицы."}, "gram": "lokale_praepositionen"},
{"id": "k8_008", "cat": "k8", "term": {"de": "die Ausbildung", "en": "vocational training", "uk": "професійне навчання", "ru": "профессиональное обучение"}, "short": {"de": "Ein Programm, in dem man einen Beruf lernt.", "en": "A programme where you learn a profession.", "uk": "Програма, у якій навчаються професії.", "ru": "Программа, в которой обучаются профессии."}, "def": {"de": "<g>In der Nähe vom Bahnhof</g> macht sie ihre <b>Ausbildung</b> in einem Hotel.", "en": "<g>Near the station</g>, she is doing her <b>training</b> at a hotel.", "uk": "<g>Поблизу вокзалу</g> вона проходить <b>навчання</b> у готелі.", "ru": "<g>Возле вокзала</g> она проходит <b>обучение</b> в отеле."}, "gram": "lokale_praepositionen"},
{"id": "k8_009", "cat": "k8", "term": {"de": "der Azubi / die Azubine", "en": "trainee / apprentice", "uk": "учень на виробничому навчанні", "ru": "стажёр / ученик"}, "short": {"de": "Eine Person, die eine Ausbildung in einem Beruf macht.", "en": "A person who is doing training in a profession.", "uk": "Особа, яка проходить професійне навчання.", "ru": "Человек, который проходит профессиональное обучение."}, "def": {"de": "Pina ist <b>Azubi</b> <g>in einem Hotel</g> mitten in Berlin.", "en": "Pina is a <b>trainee</b> <g>at a hotel</g> in the middle of Berlin.", "uk": "Піна – <b>учениця на виробничому навчанні</b> <g>у готелі</g> в самому центрі Берліна.", "ru": "Пина – <b>стажёр</b> <g>в отеле</g> в самом центре Берлина."}, "gram": "lokale_praepositionen"},
{"id": "k8_010", "cat": "k8", "term": {"de": "der Ausbilder / die Ausbilderin", "en": "trainer / instructor", "uk": "наставник", "ru": "наставник"}, "short": {"de": "Eine Person, die einem anderen einen Beruf beibringt.", "en": "A person who teaches someone else a profession.", "uk": "Особа, яка навчає іншого професії.", "ru": "Человек, который обучает другого профессии."}, "def": {"de": "Ihr <b>Ausbilder</b> arbeitet <g>im ersten Stock</g> des Hotels.", "en": "Her <b>trainer</b> works <g>on the first floor</g> of the hotel.", "uk": "Її <b>наставник</b> працює <g>на першому поверсі</g> готелю.", "ru": "Её <b>наставник</b> работает <g>на первом этаже</g> отеля."}, "gram": "lokale_praepositionen"},
{"id": "k8_011", "cat": "k8", "term": {"de": "die Einladung ablehnen", "en": "to decline an invitation", "uk": "відхиляти запрошення", "ru": "отклонять приглашение"}, "short": {"de": "Höflich Nein sagen, wenn man zu etwas eingeladen wird.", "en": "To politely say no when you are invited to something.", "uk": "Ввічливо казати «ні», коли тебе кудись запрошують.", "ru": "Вежливо говорить «нет», когда тебя куда-то приглашают."}, "def": {"de": "Sie musste <g>eine nette</g> <b>Einladung</b> zum Konzert leider <b>ablehnen</b>.", "en": "Unfortunately, she had to <b>decline</b> <g>a nice</g> <b>invitation</b> to the concert.", "uk": "Їй, на жаль, довелося <b>відхилити</b> <g>приємне</g> <b>запрошення</b> на концерт.", "ru": "Ей, к сожалению, пришлось <b>отклонить</b> <g>приятное</g> <b>приглашение</b> на концерт."}, "gram": "adjektivendungen"},
{"id": "k8_012", "cat": "k8", "term": {"de": "der Fan", "en": "fan", "uk": "фанат", "ru": "фанат"}, "short": {"de": "Eine Person, die etwas oder jemanden sehr mag.", "en": "A person who likes something or someone a lot.", "uk": "Особа, якій дуже подобається щось чи хтось.", "ru": "Человек, которому очень нравится что-то или кто-то."}, "def": {"de": "Sie ist <g>ein großer</g> <b>Fan</b> von Berlin und seinen Museen.", "en": "She is <g>a big</g> <b>fan</b> of Berlin and its museums.", "uk": "Вона <g>велика</g> <b>фанатка</b> Берліна та його музеїв.", "ru": "Она <g>большая</g> <b>фанатка</b> Берлина и его музеев."}, "gram": "adjektivendungen"},
{"id": "k8_013", "cat": "k8", "term": {"de": "das Interesse", "en": "interest", "uk": "інтерес", "ru": "интерес"}, "short": {"de": "Wenn man etwas gern lernen oder wissen möchte.", "en": "When you want to learn or know something.", "uk": "Коли хочеш щось дізнатися чи навчитися.", "ru": "Когда хочешь что-то узнать или научиться."}, "def": {"de": "Sie hat <g>ein großes</g> <b>Interesse</b> an der Geschichte von Berlin.", "en": "She has <g>a great</g> <b>interest</b> in the history of Berlin.", "uk": "У неї <g>великий</g> <b>інтерес</b> до історії Берліна.", "ru": "У неё <g>большой</g> <b>интерес</b> к истории Берлина."}, "gram": "adjektivendungen"},
{"id": "k8_014", "cat": "k8", "term": {"de": "sich interessieren für", "en": "to be interested in", "uk": "цікавитися", "ru": "интересоваться"}, "short": {"de": "Etwas gern wissen oder lernen wollen.", "en": "To want to know or learn something.", "uk": "Хотіти щось дізнатися чи вивчити.", "ru": "Хотеть что-то узнать или изучить."}, "def": {"de": "Er <b>interessiert</b> sich für <g>jedes historische</g> Gebäude in der Stadt.", "en": "He is <b>interested in</b> <g>every historical</g> building in the city.", "uk": "Він <b>цікавиться</b> кожною <g>історичною</g> будівлею у місті.", "ru": "Он <b>интересуется</b> каждым <g>историческим</g> зданием в городе."}, "gram": "adjektivendungen"},
{"id": "k8_015", "cat": "k8", "term": {"de": "die Stadtbesichtigung", "en": "city tour", "uk": "огляд міста", "ru": "осмотр города"}, "short": {"de": "Ein Spaziergang oder eine Fahrt, um eine Stadt kennenzulernen.", "en": "A walk or ride to get to know a city.", "uk": "Прогулянка чи поїздка, щоб познайомитися з містом.", "ru": "Прогулка или поездка, чтобы познакомиться с городом."}, "def": {"de": "Am ersten Tag machen sie <g>eine kurze</g> <b>Stadtbesichtigung</b> zu Fuß.", "en": "On the first day, they do <g>a short</g> <b>city tour</b> on foot.", "uk": "Першого дня вони роблять <g>короткий</g> <b>огляд міста</b> пішки.", "ru": "В первый день они делают <g>короткий</g> <b>осмотр города</b> пешком."}, "gram": "adjektivendungen"},
{"id": "k8_016", "cat": "k8", "term": {"de": "der Weg", "en": "way / path", "uk": "шлях", "ru": "путь"}, "short": {"de": "Die Strecke, die man geht oder fährt, um irgendwohin zu kommen.", "en": "The route you walk or drive to get somewhere.", "uk": "Маршрут, яким ти йдеш чи їдеш, щоб кудись дістатися.", "ru": "Маршрут, которым ты идёшь или едешь, чтобы куда-то добраться."}, "def": {"de": "Sie fragt nach <g>dem kürzesten</g> <b>Weg</b> zum Brandenburger Tor.", "en": "She asks for <g>the shortest</g> <b>way</b> to the Brandenburg Gate.", "uk": "Вона питає про <g>найкоротший</g> <b>шлях</b> до Бранденбурзьких воріт.", "ru": "Она спрашивает о <g>кратчайшем</g> <b>пути</b> к Бранденбургским воротам."}, "gram": "superlativ"},
{"id": "k8_017", "cat": "k8", "term": {"de": "die Demonstration", "en": "demonstration", "uk": "демонстрація", "ru": "демонстрация"}, "short": {"de": "Wenn viele Menschen zusammen auf der Straße für oder gegen etwas protestieren.", "en": "When many people gather in the street to protest for or against something.", "uk": "Коли багато людей разом на вулиці протестують за чи проти чогось.", "ru": "Когда много людей вместе на улице протестуют за или против чего-то."}, "def": {"de": "Heute findet in der Stadt <g>eine große</g> <b>Demonstration</b> statt.", "en": "Today <g>a big</g> <b>demonstration</b> is taking place in the city.", "uk": "Сьогодні у місті відбувається <g>велика</g> <b>демонстрація</b>.", "ru": "Сегодня в городе проходит <g>большая</g> <b>демонстрация</b>."}, "gram": "adjektivendungen"}
];

// ════════════════════════════════════════════════════════════════
//  DIALOGE — короткі релевантні діалоги (Q/A) за темами розділів A2.1
// ════════════════════════════════════════════════════════════════

var DIALOGE = [
{"id": "dlg_001", "cat": "Sich vorstellen", "q": {"de": "Wie heißen Sie und woher kommen Sie?", "en": "What is your name and where are you from?", "uk": "Як вас звати і звідки ви?", "ru": "Как вас зовут и откуда вы?"}, "a": {"de": "Ich heiße Amina und komme aus Marokko. Ich wohne jetzt in Köln.", "en": "My name is Amina and I come from Morocco. I live in Cologne now.", "uk": "Мене звати Аміна, я з Марокко. Тепер я живу в Кельні.", "ru": "Меня зовут Амина, я из Марокко. Теперь я живу в Кёльне."}, "gram": ""},
{"id": "dlg_002", "cat": "Sich vorstellen", "q": {"de": "Seit wann arbeiten Sie in dieser Firma?", "en": "Since when have you been working at this company?", "uk": "Відколи ви працюєте у цій фірмі?", "ru": "С каких пор вы работаете в этой фирме?"}, "a": {"de": "Ich arbeite erst seit <g>einer Woche</g> hier. Ich bin noch neu im Team.", "en": "I have only been working here <g>for a week</g>. I am still new to the team.", "uk": "Я працюю тут лише тиждень. Я ще новенький у команді.", "ru": "Я работаю здесь только неделю. Я ещё новенький в команде."}, "gram": "temporale_praepositionen"},
{"id": "dlg_003", "cat": "Sich vorstellen", "q": {"de": "Duzen wir uns oder sollen wir uns siezen?", "en": "Shall we use „du“ with each other, or should we use „Sie“?", "uk": "Ми говоримо на «ти» чи краще на «ви»?", "ru": "Мы на «ты» друг с другом или лучше на «вы»?"}, "a": {"de": "Wir duzen uns hier im Team, das ist ganz normal.", "en": "We use „du“ here in the team, that is quite normal.", "uk": "У нашій команді всі на «ти», це звичайна справа.", "ru": "В нашей команде все на «ты», это обычное дело."}, "gram": ""},
{"id": "dlg_004", "cat": "Sich vorstellen", "q": {"de": "<g>Können</g> Sie mir kurz helfen? Ich finde mein Büro nicht.", "en": "<g>Can</g> you help me for a moment? I can't find my office.", "uk": "Чи <g>можете</g> ви мені трохи допомогти? Я не можу знайти свій офіс.", "ru": "Не <g>могли бы</g> вы мне немного помочь? Я не могу найти свой офис."}, "a": {"de": "Ja, natürlich. Ich zeige Ihnen gern den Weg.", "en": "Yes, of course. I will gladly show you the way.", "uk": "Так, звичайно. Я із задоволенням покажу вам дорогу.", "ru": "Да, конечно. Я с удовольствием покажу вам дорогу."}, "gram": "modalverben"},
{"id": "dlg_005", "cat": "Wohnungssuche und Umzug", "q": {"de": "Warum ziehst du um?", "en": "Why are you moving?", "uk": "Чому ти переїжджаєш?", "ru": "Почему ты переезжаешь?"}, "a": {"de": "Meine alte Wohnung ist zu klein, deshalb suche ich ein größeres Zimmer.", "en": "My old apartment is too small, that's why I am looking for a bigger room.", "uk": "Моя стара квартира замала, тому я шукаю більшу кімнату.", "ru": "Моя старая квартира слишком маленькая, поэтому я ищу комнату побольше."}, "gram": ""},
{"id": "dlg_006", "cat": "Wohnungssuche und Umzug", "q": {"de": "Wo soll ich den Schrank hinstellen?", "en": "Where should I put the cupboard?", "uk": "Куди мені поставити шафу?", "ru": "Куда мне поставить шкаф?"}, "a": {"de": "Stell ihn bitte <g>neben das Fenster</g>, da ist genug Platz.", "en": "Please put it next to the window, there is enough space there.", "uk": "Постав її, будь ласка, біля вікна, там достатньо місця.", "ru": "Поставь его, пожалуйста, у окна, там достаточно места."}, "gram": "wechselpraepositionen"},
{"id": "dlg_007", "cat": "Wohnungssuche und Umzug", "q": {"de": "Wie hoch ist die Miete für die Wohnung?", "en": "How much is the rent for the apartment?", "uk": "Яка орендна плата за квартиру?", "ru": "Какая арендная плата за квартиру?"}, "a": {"de": "Die Miete beträgt 650 Euro im Monat, mit Nebenkosten.", "en": "The rent is 650 euros per month, including additional costs.", "uk": "Орендна плата становить 650 євро на місяць, з комунальними послугами.", "ru": "Арендная плата составляет 650 евро в месяц, с коммунальными услугами."}, "gram": ""},
{"id": "dlg_008", "cat": "Wohnungssuche und Umzug", "q": {"de": "Wer macht bei euch in der WG den Haushalt?", "en": "Who does the housework in your shared flat?", "uk": "Хто у вашій спільній квартирі виконує домашні справи?", "ru": "Кто в вашей квартире с соседями занимается домашними делами?"}, "a": {"de": "Wir haben einen Plan: Jede Woche putzt eine andere Person die Küche.", "en": "We have a schedule: a different person cleans the kitchen every week.", "uk": "У нас є графік: щотижня кухню прибирає інша людина.", "ru": "У нас есть график: каждую неделю кухню убирает другой человек."}, "gram": ""},
{"id": "dlg_009", "cat": "Über Arbeit und Freizeit sprechen", "q": {"de": "Was machst du in deiner Freizeit am liebsten?", "en": "What do you like to do most in your free time?", "uk": "Що ти найбільше любиш робити у вільний час?", "ru": "Что ты больше всего любишь делать в свободное время?"}, "a": {"de": "Ich spiele gern Fußball und treffe mich mit Freunden.", "en": "I like to play football and meet up with friends.", "uk": "Я люблю грати у футбол і зустрічатися з друзями.", "ru": "Я люблю играть в футбол и встречаться с друзьями."}, "gram": ""},
{"id": "dlg_010", "cat": "Über Arbeit und Freizeit sprechen", "q": {"de": "Hast du am Samstag Zeit für einen Termin?", "en": "Do you have time for an appointment on Saturday?", "uk": "У тебе є час на зустріч у суботу?", "ru": "У тебя есть время на встречу в субботу?"}, "a": {"de": "Nein, am Samstag <g>muss</g> ich leider arbeiten. Geht es auch am Sonntag?", "en": "No, unfortunately I <g>have to</g> work on Saturday. Is Sunday also possible?", "uk": "Ні, у суботу мені, на жаль, <g>треба</g> працювати. А неділя підійде?", "ru": "Нет, в субботу мне, к сожалению, <g>нужно</g> работать. А воскресенье подойдёт?"}, "gram": "modalverben"},
{"id": "dlg_011", "cat": "Über Arbeit und Freizeit sprechen", "q": {"de": "Bist du Mitglied in einem Sportverein?", "en": "Are you a member of a sports club?", "uk": "Ти член якогось спортивного клубу?", "ru": "Ты член какого-нибудь спортивного клуба?"}, "a": {"de": "Ja, ich bin seit <g>einem Jahr</g> im Schwimmverein.", "en": "Yes, I have been in the swimming club <g>for a year</g>.", "uk": "Так, я вже рік у клубі плавання.", "ru": "Да, я уже год в клубе плавания."}, "gram": "temporale_praepositionen"},
{"id": "dlg_012", "cat": "Über Arbeit und Freizeit sprechen", "q": {"de": "Warum kommst du heute später zur Arbeit?", "en": "Why are you coming to work later today?", "uk": "Чому ти сьогодні прийдеш на роботу пізніше?", "ru": "Почему ты сегодня придёшь на работу позже?"}, "a": {"de": "Ich komme später, <g>weil</g> ich einen Arzttermin habe.", "en": "I am coming later <g>because</g> I have a doctor's appointment.", "uk": "Я прийду пізніше, <g>тому що</g> маю запис до лікаря.", "ru": "Я приду позже, <g>потому что</g> у меня запись к врачу."}, "gram": "weil_satz"},
{"id": "dlg_013", "cat": "Kleidung kaufen", "q": {"de": "Kann ich Ihnen helfen? Suchen Sie etwas Bestimmtes?", "en": "Can I help you? Are you looking for something specific?", "uk": "Чи можу я вам допомогти? Ви шукаєте щось конкретне?", "ru": "Могу я вам помочь? Вы ищете что-то конкретное?"}, "a": {"de": "Ja, ich suche eine Hose in Größe 40, am liebsten in Blau.", "en": "Yes, I am looking for trousers in size 40, preferably in blue.", "uk": "Так, я шукаю штани розміру 40, бажано сині.", "ru": "Да, я ищу брюки размера 40, желательно синие."}, "gram": ""},
{"id": "dlg_014", "cat": "Kleidung kaufen", "q": {"de": "Welche Größe brauchen Sie?", "en": "What size do you need?", "uk": "Який розмір вам потрібен?", "ru": "Какой размер вам нужен?"}, "a": {"de": "Ich glaube, Größe M passt mir am besten.", "en": "I think size M fits me best.", "uk": "Гадаю, розмір M пасує мені найкраще.", "ru": "Думаю, размер M подходит мне лучше всего."}, "gram": ""},
{"id": "dlg_015", "cat": "Kleidung kaufen", "q": {"de": "Wie gefällt Ihnen das Kleid?", "en": "How do you like the dress?", "uk": "Як вам ця сукня?", "ru": "Как вам это платье?"}, "a": {"de": "Es gefällt mir gut, aber es ist mir ein bisschen zu eng.", "en": "I like it, but it is a bit too tight for me.", "uk": "Мені подобається, але вона трохи вузька для мене.", "ru": "Мне нравится, но оно немного узковато для меня."}, "gram": ""},
{"id": "dlg_016", "cat": "Kleidung kaufen", "q": {"de": "Wo finde ich die Umkleidekabine?", "en": "Where can I find the fitting room?", "uk": "Де знайти примірочну?", "ru": "Где найти примерочную?"}, "a": {"de": "Die Umkleidekabine ist gleich hier links neben der Kasse.", "en": "The fitting room is right here on the left, next to the checkout.", "uk": "Примірочна тут ліворуч, біля каси.", "ru": "Примерочная здесь слева, рядом с кассой."}, "gram": ""},
{"id": "dlg_017", "cat": "Verkehrsmittel", "q": {"de": "Wie kommst du normalerweise zur Arbeit?", "en": "How do you normally get to work?", "uk": "Як ти зазвичай добираєшся на роботу?", "ru": "Как ты обычно добираешься до работы?"}, "a": {"de": "Ich fahre meistens mit dem Fahrrad, das ist <g>schneller als</g> der Bus.", "en": "I usually go by bicycle, that is <g>faster than</g> the bus.", "uk": "Я зазвичай їжджу велосипедом, це <g>швидше, ніж</g> автобус.", "ru": "Я обычно езжу на велосипеде, это <g>быстрее, чем</g> автобус."}, "gram": "komparativ"},
{"id": "dlg_018", "cat": "Verkehrsmittel", "q": {"de": "Fährt dieser Bus zum Hauptbahnhof?", "en": "Does this bus go to the main station?", "uk": "Цей автобус їде до центрального вокзалу?", "ru": "Этот автобус едет до главного вокзала?"}, "a": {"de": "Ja, dieser Bus fährt direkt zum Hauptbahnhof, in circa zehn Minuten.", "en": "Yes, this bus goes directly to the main station, in about ten minutes.", "uk": "Так, цей автобус їде прямо до центрального вокзалу, приблизно за десять хвилин.", "ru": "Да, этот автобус едет прямо до главного вокзала, примерно за десять минут."}, "gram": ""},
{"id": "dlg_019", "cat": "Verkehrsmittel", "q": {"de": "Warum nimmst du heute ein Taxi?", "en": "Why are you taking a taxi today?", "uk": "Чому ти сьогодні береш таксі?", "ru": "Почему ты сегодня берёшь такси?"}, "a": {"de": "Ich nehme ein Taxi, <g>weil</g> es draußen sehr stark regnet.", "en": "I am taking a taxi <g>because</g> it is raining very heavily outside.", "uk": "Я беру таксі, <g>тому що</g> надворі дуже сильний дощ.", "ru": "Я беру такси, <g>потому что</g> на улице очень сильный дождь."}, "gram": "weil_satz"},
{"id": "dlg_020", "cat": "Verkehrsmittel", "q": {"de": "Ist die U-Bahn-Station barrierefrei?", "en": "Is the subway station accessible?", "uk": "Чи безбарʼєрна ця станція метро?", "ru": "Эта станция метро безбарьерная?"}, "a": {"de": "Ja, es gibt einen Aufzug, deshalb ist die Station auch mit dem Rollstuhl gut erreichbar.", "en": "Yes, there is a lift, so the station is also easily accessible by wheelchair.", "uk": "Так, тут є ліфт, тому станція також добре доступна з інвалідним візком.", "ru": "Да, здесь есть лифт, поэтому станция также хорошо доступна с инвалидной коляской."}, "gram": ""},
{"id": "dlg_021", "cat": "Familie und Migration", "q": {"de": "Erzählen Sie mir etwas über Ihre Familie.", "en": "Tell me something about your family.", "uk": "Розкажіть мені щось про свою родину.", "ru": "Расскажите мне что-нибудь о своей семье."}, "a": {"de": "Ich habe zwei Geschwister, und meine Eltern leben noch in meinem Heimatland.", "en": "I have two siblings, and my parents still live in my homeland.", "uk": "У мене є двоє братів і сестер, а мої батьки й досі живуть на моїй батьківщині.", "ru": "У меня двое братьев и сестёр, а мои родители до сих пор живут на моей родине."}, "gram": ""},
{"id": "dlg_022", "cat": "Familie und Migration", "q": {"de": "Wann sind Sie nach Deutschland gekommen?", "en": "When did you come to Germany?", "uk": "Коли ви приїхали до Німеччини?", "ru": "Когда вы приехали в Германию?"}, "a": {"de": "Ich bin <g>vor drei Jahren</g> nach Deutschland gekommen.", "en": "I came to Germany <g>three years ago</g>.", "uk": "Я приїхав/приїхала до Німеччини три роки тому.", "ru": "Я приехал/приехала в Германию три года назад."}, "gram": "temporale_praepositionen"},
{"id": "dlg_023", "cat": "Familie und Migration", "q": {"de": "War es am Anfang schwer für Sie?", "en": "Was it difficult for you at the beginning?", "uk": "Чи було вам важко спочатку?", "ru": "Было ли вам трудно вначале?"}, "a": {"de": "Ja, am Anfang war es schwer, <g>weil</g> ich die Sprache noch nicht gut konnte.", "en": "Yes, at the beginning it was hard <g>because</g> I could not yet speak the language well.", "uk": "Так, спочатку було важко, <g>тому що</g> я ще не дуже добре знав/знала мову.", "ru": "Да, сначала было трудно, <g>потому что</g> я ещё не очень хорошо знал/знала язык."}, "gram": "weil_satz"},
{"id": "dlg_024", "cat": "Familie und Migration", "q": {"de": "Wie oft besuchen Sie Ihr Heimatland?", "en": "How often do you visit your homeland?", "uk": "Як часто ви відвідуєте свою батьківщину?", "ru": "Как часто вы посещаете свою родину?"}, "a": {"de": "Ich fliege einmal im Jahr nach Hause, um meine Familie zu besuchen.", "en": "I fly home once a year to visit my family.", "uk": "Я раз на рік літаю додому, щоб відвідати свою родину.", "ru": "Я раз в год летаю домой, чтобы навестить свою семью."}, "gram": ""},
{"id": "dlg_025", "cat": "Einen Ausflug planen", "q": {"de": "Hast du einen Vorschlag für unseren Ausflug am Wochenende?", "en": "Do you have a suggestion for our trip at the weekend?", "uk": "У тебе є пропозиція щодо нашої екскурсії на вихідних?", "ru": "У тебя есть предложение по поводу нашей поездки на выходных?"}, "a": {"de": "Ich schlage vor, <g>dass</g> wir in den Zoo gehen.", "en": "I suggest <g>that</g> we go to the zoo.", "uk": "Я пропоную, <g>щоб</g> ми пішли в зоопарк.", "ru": "Я предлагаю, <g>чтобы</g> мы пошли в зоопарк."}, "gram": "dass_satz"},
{"id": "dlg_026", "cat": "Einen Ausflug planen", "q": {"de": "Wie wird das Wetter am Samstag?", "en": "What will the weather be like on Saturday?", "uk": "Якою буде погода в суботу?", "ru": "Какая погода будет в субботу?"}, "a": {"de": "Laut Wetterbericht wird es sonnig und warm.", "en": "According to the weather forecast, it will be sunny and warm.", "uk": "Згідно з прогнозом погоди, буде сонячно і тепло.", "ru": "Согласно прогнозу погоды, будет солнечно и тепло."}, "gram": ""},
{"id": "dlg_027", "cat": "Einen Ausflug planen", "q": {"de": "Wo wart ihr letztes Wochenende?", "en": "Where were you last weekend?", "uk": "Де ви були минулих вихідних?", "ru": "Где вы были в прошлые выходные?"}, "a": {"de": "Wir waren im Park und haben dort ein Picknick gemacht.", "en": "We were in the park and had a picnic there.", "uk": "Ми були в парку і влаштували там пікнік.", "ru": "Мы были в парке и устроили там пикник."}, "gram": ""},
{"id": "dlg_028", "cat": "Einen Ausflug planen", "q": {"de": "Sollen wir für den Ausflug ein Hotel buchen?", "en": "Should we book a hotel for the trip?", "uk": "Чи варто нам забронювати готель для екскурсії?", "ru": "Стоит ли нам забронировать отель для поездки?"}, "a": {"de": "Nein, das ist nicht nötig, wir fahren nur für einen Tag.", "en": "No, that's not necessary, we are only going for one day.", "uk": "Ні, це не потрібно, ми їдемо лише на один день.", "ru": "Нет, это не нужно, мы едем только на один день."}, "gram": ""},
{"id": "dlg_029", "cat": "Nach dem Weg fragen", "q": {"de": "Entschuldigung, wie komme ich zum Brandenburger Tor?", "en": "Excuse me, how do I get to the Brandenburg Gate?", "uk": "Перепрошую, як мені дістатися до Бранденбурзьких воріт?", "ru": "Извините, как мне добраться до Бранденбургских ворот?"}, "a": {"de": "Gehen Sie hier geradeaus und dann <g>an der Ampel</g> links.", "en": "Go straight ahead here and then left <g>at the traffic light</g>.", "uk": "Ідіть тут прямо, а потім ліворуч <g>на світлофорі</g>.", "ru": "Идите здесь прямо, а потом налево <g>на светофоре</g>."}, "gram": "lokale_praepositionen"},
{"id": "dlg_030", "cat": "Nach dem Weg fragen", "q": {"de": "Ist es weit von hier bis zum Museum?", "en": "Is it far from here to the museum?", "uk": "Чи далеко звідси до музею?", "ru": "Далеко отсюда до музея?"}, "a": {"de": "Nein, es ist nicht weit, nur fünf Minuten zu Fuß.", "en": "No, it's not far, only a five-minute walk.", "uk": "Ні, недалеко, лише пʼять хвилин пішки.", "ru": "Нет, недалеко, всего пять минут пешком."}, "gram": ""},
{"id": "dlg_031", "cat": "Nach dem Weg fragen", "q": {"de": "Wo ist hier in der Nähe eine Apotheke?", "en": "Where is there a pharmacy nearby?", "uk": "Де тут поблизу аптека?", "ru": "Где здесь поблизости аптека?"}, "a": {"de": "Die nächste Apotheke ist gleich um die Ecke, <g>neben dem Supermarkt</g>.", "en": "The nearest pharmacy is just around the corner, <g>next to the supermarket</g>.", "uk": "Найближча аптека одразу за рогом, <g>біля супермаркету</g>.", "ru": "Ближайшая аптека прямо за углом, <g>рядом с супермаркетом</g>."}, "gram": "lokale_praepositionen"},
{"id": "dlg_032", "cat": "Nach dem Weg fragen", "q": {"de": "Welche U-Bahn fährt zum Alexanderplatz?", "en": "Which subway goes to Alexanderplatz?", "uk": "Яке метро їде до Александерплац?", "ru": "Какое метро едет до Александерплац?"}, "a": {"de": "Sie müssen die Linie 2 nehmen, die fährt direkt dorthin.", "en": "You have to take line 2, it goes directly there.", "uk": "Вам потрібна лінія 2, вона їде прямо туди.", "ru": "Вам нужна линия 2, она едет прямо туда."}, "gram": ""}
];

// ════════════════════════════════════════════════════════════════
//  QUIZ — не заповнено для цього курсу (структура збережена)
// ════════════════════════════════════════════════════════════════
var QUIZ = [];

// ════════════════════════════════════════════════════════════════
//  SPRACHBAUSTEINE DATABASE · Grammatik A2.1 · Die neue Linie 1
// ════════════════════════════════════════════════════════════════

var SB_CATS = [
  { id: "grund_weil", de: "Gründe nennen (weil)", en: "Giving reasons (weil)", uk: "Називання причин (weil)", ru: "Называние причин (weil)", e: "🤔" },
  { id: "dass_satz", de: "Nebensatz mit dass", en: "Subordinate clause with dass", uk: "Підрядне речення з dass", ru: "Придаточное предложение с dass", e: "💭" },
  { id: "wenn_satz", de: "Nebensatz mit wenn", en: "Subordinate clause with wenn", uk: "Підрядне речення з wenn", ru: "Придаточное предложение с wenn", e: "⏰" },
  { id: "vergleich", de: "Vergleiche (Komparativ/Superlativ)", en: "Comparisons (comparative/superlative)", uk: "Порівняння (компаратив/суперлатив)", ru: "Сравнения (компаратив/суперлатив)", e: "⚖️" },
  { id: "modalverben", de: "Modalverben", en: "Modal verbs", uk: "Модальні дієслова", ru: "Модальные глаголы", e: "🔑" },
  { id: "praepositionen", de: "Präpositionen (Ort und Richtung)", en: "Prepositions (place and direction)", uk: "Прийменники (місце і напрямок)", ru: "Предлоги (место и направление)", e: "📍" },
  { id: "hoeflichkeit", de: "Höfliche Bitten", en: "Polite requests", uk: "Ввічливі прохання", ru: "Вежливые просьбы", e: "🙏" },
  { id: "adjektivendungen", de: "Adjektivendungen", en: "Adjective endings", uk: "Закінчення прикметників", ru: "Окончания прилагательных", e: "🎨" }
];

var SPRACHBAUSTEINE = [
  {"id": "sbs_001", "cat": "grund_weil", "sentence": {"de": "Ich lerne Deutsch, {{BLANK}} ich in Deutschland arbeiten möchte.", "en": "I am learning German {{BLANK}} I want to work in Germany.", "uk": "Я вивчаю німецьку, {{BLANK}} хочу працювати в Німеччині.", "ru": "Я учу немецкий, {{BLANK}} хочу работать в Германии."}, "answer": {"de": "weil", "en": "because", "uk": "тому що", "ru": "потому что"}, "distractors": ["dass", "wenn", "aber", "und"], "explanation": {"de": "<b>„weil“</b> nennt einen Grund, das Verb steht am Satzende.<br><b>„dass“</b> leitet eine Tatsache ein, keinen Grund.<br><b>„wenn“</b> wäre zeitlich oder bedingend, nicht kausal.", "en": "<b>„weil“</b> gives a reason, the verb goes to the end of the clause.<br><b>„dass“</b> introduces a fact, not a reason.<br><b>„wenn“</b> would be temporal or conditional, not causal.", "uk": "<b>„weil“</b> називає причину, дієслово стоїть у кінці речення.<br><b>„dass“</b> вводить факт, а не причину.<br><b>„wenn“</b> було б часовим чи умовним, а не причиновим.", "ru": "<b>„weil“</b> называет причину, глагол стоит в конце предложения.<br><b>„dass“</b> вводит факт, а не причину.<br><b>„wenn“</b> было бы временным или условным, а не причинным."}, "gram": "weil_satz"},
  {"id": "sbs_002", "cat": "grund_weil", "sentence": {"de": "Sie kommt heute nicht zur Arbeit, {{BLANK}} sie krank ist.", "en": "She is not coming to work today {{BLANK}} she is sick.", "uk": "Вона сьогодні не прийде на роботу, {{BLANK}} вона хвора.", "ru": "Она сегодня не придёт на работу, {{BLANK}} она больна."}, "answer": {"de": "weil", "en": "because", "uk": "тому що", "ru": "потому что"}, "distractors": ["ob", "dass", "obwohl"], "explanation": {"de": "<b>„weil“</b> passt hier, weil ein Grund für das Fernbleiben genannt wird.<br><b>„obwohl“</b> würde einen Gegensatz ausdrücken (trotz Krankheit kommt sie).<br><b>„ob“</b> leitet eine indirekte Frage ein.", "en": "<b>„weil“</b> fits here because a reason for the absence is given.<br><b>„obwohl“</b> would express a contrast (she comes despite being sick).<br><b>„ob“</b> introduces an indirect question.", "uk": "<b>„weil“</b> підходить, бо називає причину відсутності.<br><b>„obwohl“</b> виражало б протиставлення (прийде, попри хворобу).<br><b>„ob“</b> вводить непряме запитання.", "ru": "<b>„weil“</b> подходит, так как называет причину отсутствия.<br><b>„obwohl“</b> выражало бы противопоставление (придёт, несмотря на болезнь).<br><b>„ob“</b> вводит косвенный вопрос."}, "gram": "weil_satz"},
  {"id": "sbs_003", "cat": "grund_weil", "sentence": {"de": "Er hilft mir gern, {{BLANK}} wir gute Freunde sind.", "en": "He likes to help me {{BLANK}} we are good friends.", "uk": "Він охоче мені допомагає, {{BLANK}} ми хороші друзі.", "ru": "Он охотно мне помогает, {{BLANK}} мы хорошие друзья."}, "answer": {"de": "weil", "en": "because", "uk": "тому що", "ru": "потому что"}, "distractors": ["dass", "wenn", "denn dass"], "explanation": {"de": "<b>„weil“</b> begründet, warum er hilft; das Verb <b>„sind“</b> steht am Ende.<br><b>„dass“</b> würde nur eine Tatsache anschließen, keinen Grund liefern.", "en": "<b>„weil“</b> gives the reason why he helps; the verb <b>„sind“</b> goes at the end.<br><b>„dass“</b> would only add a fact, not provide a reason.", "uk": "<b>„weil“</b> пояснює, чому він допомагає; дієслово <b>„sind“</b> стоїть у кінці.<br><b>„dass“</b> лише додало б факт, не надаючи причини.", "ru": "<b>„weil“</b> объясняет, почему он помогает; глагол <b>„sind“</b> стоит в конце.<br><b>„dass“</b> лишь добавило бы факт, не давая причины."}, "gram": "weil_satz"},
  {"id": "sbs_004", "cat": "grund_weil", "sentence": {"de": "Warum bist du zu spät gekommen? – {{BLANK}} der Bus keinen Halt hatte.", "en": "Why were you late? – {{BLANK}} the bus didn't stop.", "uk": "Чому ти запізнився? – {{BLANK}} автобус не зупинився.", "ru": "Почему ты опоздал? – {{BLANK}} автобус не остановился."}, "answer": {"de": "Weil", "en": "Because", "uk": "Тому що", "ru": "Потому что"}, "distractors": ["Dass", "Wenn", "Ob"], "explanation": {"de": "Als Antwort auf eine <b>„Warum?“</b>-Frage beginnt der Satz oft direkt mit <b>„Weil“</b> (großgeschrieben, Satzanfang).<br>„Dass“ und „Ob“ passen hier grammatisch nicht.", "en": "As an answer to a <b>„Why?“</b> question, the sentence often starts directly with <b>„Weil“</b> (capitalised, start of sentence).<br>„Dass“ and „Ob“ do not fit grammatically here.", "uk": "У відповіді на питання <b>„Warum?“</b> речення часто починається одразу з <b>„Weil“</b> (з великої літери, початок речення).<br>„Dass“ і „Ob“ граматично тут не підходять.", "ru": "В ответе на вопрос <b>„Warum?“</b> предложение часто начинается сразу с <b>„Weil“</b> (с большой буквы, начало предложения).<br>„Dass“ и „Ob“ грамматически здесь не подходят."}, "gram": "weil_satz"},
  {"id": "sbs_005", "cat": "grund_weil", "sentence": {"de": "Ich bin froh, {{BLANK}} du mir am ersten Tag geholfen hast.", "en": "I am glad {{BLANK}} you helped me on the first day.", "uk": "Я радий/рада, {{BLANK}} ти допоміг мені першого дня.", "ru": "Я рад/рада, {{BLANK}} ты помог мне в первый день."}, "answer": {"de": "weil", "en": "because", "uk": "тому що", "ru": "потому что"}, "distractors": ["dass", "denn", "als"], "explanation": {"de": "<b>„weil“</b> nennt den Grund für die Freude, Verb <b>„geholfen hast“</b> am Ende.<br><b>„denn“</b> wäre auch möglich, aber dann bleibt das Verb an Position 2, nicht am Ende — hier passt „weil“ mit Endstellung.", "en": "<b>„weil“</b> gives the reason for the joy, with the verb <b>„geholfen hast“</b> at the end.<br><b>„denn“</b> would also be possible, but then the verb stays in position 2, not at the end — here „weil“ with final verb position fits.", "uk": "<b>„weil“</b> називає причину радості, дієслово <b>„geholfen hast“</b> у кінці.<br><b>„denn“</b> теж можливе, але тоді дієслово залишається на другій позиції, а не в кінці — тут підходить саме „weil“.", "ru": "<b>„weil“</b> называет причину радости, глагол <b>„geholfen hast“</b> в конце.<br><b>„denn“</b> тоже возможно, но тогда глагол остаётся на второй позиции, а не в конце — здесь подходит именно „weil“."}, "gram": "weil_satz"},
  {"id": "sbs_006", "cat": "dass_satz", "sentence": {"de": "Ich glaube, {{BLANK}} das Wetter morgen schön wird.", "en": "I think {{BLANK}} the weather will be nice tomorrow.", "uk": "Я думаю, {{BLANK}} завтра буде гарна погода.", "ru": "Я думаю, {{BLANK}} завтра будет хорошая погода."}, "answer": {"de": "dass", "en": "that", "uk": "що", "ru": "что"}, "distractors": ["weil", "ob", "wenn"], "explanation": {"de": "Nach <b>„glauben“</b> folgt eine Tatsache mit <b>„dass“</b>, das Verb steht am Ende.<br><b>„weil“</b> würde einen Grund einleiten, keine Meinung.", "en": "After <b>„glauben“</b> (to believe) a fact follows with <b>„dass“</b>, the verb goes at the end.<br><b>„weil“</b> would introduce a reason, not an opinion.", "uk": "Після <b>„glauben“</b> (думати) йде факт із <b>„dass“</b>, дієслово стоїть у кінці.<br><b>„weil“</b> вводило б причину, а не думку.", "ru": "После <b>„glauben“</b> (думать) следует факт с <b>„dass“</b>, глагол стоит в конце.<br><b>„weil“</b> вводило бы причину, а не мнение."}, "gram": "dass_satz"},
  {"id": "sbs_007", "cat": "dass_satz", "sentence": {"de": "Sie hat gesagt, {{BLANK}} sie um 8 Uhr kommt.", "en": "She said {{BLANK}} she is coming at 8 o'clock.", "uk": "Вона сказала, {{BLANK}} прийде о 8 годині.", "ru": "Она сказала, {{BLANK}} придёт в 8 часов."}, "answer": {"de": "dass", "en": "that", "uk": "що", "ru": "что"}, "distractors": ["ob", "weil", "als"], "explanation": {"de": "Nach <b>„sagen“</b> berichtet man eine Tatsache mit <b>„dass“</b>.<br><b>„ob“</b> würde eine Unsicherheit oder Frage ausdrücken.", "en": "After <b>„sagen“</b> (to say) you report a fact with <b>„dass“</b>.<br><b>„ob“</b> would express uncertainty or a question.", "uk": "Після <b>„sagen“</b> (казати) передають факт із <b>„dass“</b>.<br><b>„ob“</b> виражало б невпевненість чи запитання.", "ru": "После <b>„sagen“</b> (говорить) передают факт с <b>„dass“</b>.<br><b>„ob“</b> выражало бы неуверенность или вопрос."}, "gram": "dass_satz"},
  {"id": "sbs_008", "cat": "dass_satz", "sentence": {"de": "Wir hoffen, {{BLANK}} die Prüfung nicht so schwer ist.", "en": "We hope {{BLANK}} the exam is not too difficult.", "uk": "Ми сподіваємося, {{BLANK}} іспит не буде надто складним.", "ru": "Мы надеемся, {{BLANK}} экзамен не будет слишком сложным."}, "answer": {"de": "dass", "en": "that", "uk": "що", "ru": "что"}, "distractors": ["weil", "wenn", "ob"], "explanation": {"de": "Nach <b>„hoffen“</b> steht ein <b>„dass“</b>-Satz mit Verb am Ende.<br><b>„wenn“</b> würde eine Bedingung einleiten, nicht eine Hoffnung.", "en": "After <b>„hoffen“</b> (to hope) a <b>„dass“</b>-clause follows with the verb at the end.<br><b>„wenn“</b> would introduce a condition, not a hope.", "uk": "Після <b>„hoffen“</b> (сподіватися) йде речення з <b>„dass“</b> і дієсловом у кінці.<br><b>„wenn“</b> вводило б умову, а не сподівання.", "ru": "После <b>„hoffen“</b> (надеяться) следует придаточное с <b>„dass“</b> и глаголом в конце.<br><b>„wenn“</b> вводило бы условие, а не надежду."}, "gram": "dass_satz"},
  {"id": "sbs_009", "cat": "dass_satz", "sentence": {"de": "Ich finde, {{BLANK}} Deutsch eine interessante Sprache ist.", "en": "I think {{BLANK}} German is an interesting language.", "uk": "Я вважаю, {{BLANK}} німецька – цікава мова.", "ru": "Я считаю, {{BLANK}} немецкий – интересный язык."}, "answer": {"de": "dass", "en": "that", "uk": "що", "ru": "что"}, "distractors": ["weil", "als", "ob"], "explanation": {"de": "<b>„finden“</b> im Sinne von „meinen“ leitet eine Meinung mit <b>„dass“</b> ein.<br><b>„als“</b> passt nur bei Vergleichen oder einmaligen Ereignissen in der Vergangenheit.", "en": "<b>„finden“</b> in the sense of „to think“ introduces an opinion with <b>„dass“</b>.<br><b>„als“</b> only fits with comparisons or single past events.", "uk": "<b>„finden“</b> у значенні «вважати» вводить думку через <b>„dass“</b>.<br><b>„als“</b> підходить лише для порівнянь чи одноразових подій у минулому.", "ru": "<b>„finden“</b> в значении «считать» вводит мнение через <b>„dass“</b>.<br><b>„als“</b> подходит только для сравнений или однократных событий в прошлом."}, "gram": "dass_satz"},
  {"id": "sbs_010", "cat": "dass_satz", "sentence": {"de": "Es ist wichtig, {{BLANK}} man pünktlich zur Arbeit kommt.", "en": "It is important {{BLANK}} you arrive at work on time.", "uk": "Важливо, {{BLANK}} ти приходиш на роботу вчасно.", "ru": "Важно, {{BLANK}} ты приходишь на работу вовремя."}, "answer": {"de": "dass", "en": "that", "uk": "що", "ru": "что"}, "distractors": ["ob", "weil", "wenn"], "explanation": {"de": "<b>„Es ist wichtig, dass …“</b> ist eine feste A2-Struktur für Aussagen über Wichtigkeit.<br>„ob“ würde nur bei Fragen nach der Möglichkeit passen.", "en": "<b>„Es ist wichtig, dass …“</b> is a fixed A2 structure for statements about importance.<br>„ob“ would only fit with questions about possibility.", "uk": "<b>„Es ist wichtig, dass …“</b> — стала конструкція рівня A2 для тверджень про важливість.<br>„ob“ підходило б лише для запитань про можливість.", "ru": "<b>„Es ist wichtig, dass …“</b> — устойчивая конструкция уровня A2 для утверждений о важности.<br>„ob“ подходило бы только для вопросов о возможности."}, "gram": "dass_satz"},
  {"id": "sbs_011", "cat": "wenn_satz", "sentence": {"de": "{{BLANK}} es regnet, nehme ich den Bus.", "en": "{{BLANK}} it rains, I take the bus.", "uk": "{{BLANK}} йде дощ, я їду автобусом.", "ru": "{{BLANK}} идёт дождь, я еду автобусом."}, "answer": {"de": "Wenn", "en": "When", "uk": "Коли", "ru": "Когда"}, "distractors": ["Weil", "Dass", "Als"], "explanation": {"de": "<b>„Wenn“</b> beschreibt eine wiederkehrende Bedingung (immer, wenn es regnet).<br><b>„Als“</b> wäre nur für ein einmaliges Ereignis in der Vergangenheit richtig.", "en": "<b>„Wenn“</b> describes a repeated condition (every time it rains).<br><b>„Als“</b> would only be correct for a single event in the past.", "uk": "<b>„Wenn“</b> описує повторювану умову (щоразу, коли йде дощ).<br><b>„Als“</b> було б правильним лише для одноразової події в минулому.", "ru": "<b>„Wenn“</b> описывает повторяющееся условие (каждый раз, когда идёт дождь).<br><b>„Als“</b> было бы правильным только для однократного события в прошлом."}, "gram": "wenn_satz"},
  {"id": "sbs_012", "cat": "wenn_satz", "sentence": {"de": "Ich rufe dich an, {{BLANK}} ich zu Hause bin.", "en": "I will call you {{BLANK}} I am at home.", "uk": "Я тобі подзвоню, {{BLANK}} буду вдома.", "ru": "Я тебе позвоню, {{BLANK}} буду дома."}, "answer": {"de": "wenn", "en": "when", "uk": "коли", "ru": "когда"}, "distractors": ["dass", "weil", "ob"], "explanation": {"de": "<b>„wenn“</b> drückt hier den zukünftigen Zeitpunkt aus.<br><b>„dass“</b> würde eine Tatsache anschließen, keinen Zeitpunkt.", "en": "<b>„wenn“</b> here expresses the future point in time.<br><b>„dass“</b> would add a fact, not a point in time.", "uk": "<b>„wenn“</b> тут виражає майбутній момент часу.<br><b>„dass“</b> додало б факт, а не момент часу.", "ru": "<b>„wenn“</b> здесь выражает будущий момент времени.<br><b>„dass“</b> добавило бы факт, а не момент времени."}, "gram": "wenn_satz"},
  {"id": "sbs_013", "cat": "wenn_satz", "sentence": {"de": "{{BLANK}} du Fragen hast, kannst du mich anrufen.", "en": "{{BLANK}} you have questions, you can call me.", "uk": "{{BLANK}} у тебе є питання, ти можеш мені зателефонувати.", "ru": "{{BLANK}} у тебя есть вопросы, ты можешь мне позвонить."}, "answer": {"de": "Wenn", "en": "If", "uk": "Якщо", "ru": "Если"}, "distractors": ["Weil", "Ob", "Dass"], "explanation": {"de": "<b>„Wenn“</b> nennt hier eine Bedingung (im Fall, dass du Fragen hast).<br><b>„Ob“</b> passt nur nach Verben wie „fragen“ oder „wissen“.", "en": "<b>„Wenn“</b> here states a condition (in case you have questions).<br><b>„Ob“</b> only fits after verbs like „to ask“ or „to know“.", "uk": "<b>„Wenn“</b> тут вказує на умову (у разі, якщо в тебе є питання).<br><b>„Ob“</b> підходить лише після дієслів на кшталт „запитувати“ чи „знати“.", "ru": "<b>„Wenn“</b> здесь указывает на условие (в случае, если у тебя есть вопросы).<br><b>„Ob“</b> подходит только после глаголов типа „спрашивать“ или „знать“."}, "gram": "wenn_satz"},
  {"id": "sbs_014", "cat": "wenn_satz", "sentence": {"de": "Wir gehen spazieren, {{BLANK}} die Sonne scheint.", "en": "We go for a walk {{BLANK}} the sun is shining.", "uk": "Ми йдемо на прогулянку, {{BLANK}} світить сонце.", "ru": "Мы идём гулять, {{BLANK}} светит солнце."}, "answer": {"de": "wenn", "en": "when", "uk": "коли", "ru": "когда"}, "distractors": ["als", "dass", "ob"], "explanation": {"de": "<b>„wenn“</b> passt für eine allgemeine, wiederholte Bedingung im Präsens.<br><b>„als“</b> wäre nur für ein einmaliges Ereignis in der Vergangenheit korrekt.", "en": "<b>„wenn“</b> fits for a general, repeated condition in the present tense.<br><b>„als“</b> would only be correct for a single past event.", "uk": "<b>„wenn“</b> підходить для загальної, повторюваної умови в теперішньому часі.<br><b>„als“</b> було б правильним лише для одноразової події в минулому.", "ru": "<b>„wenn“</b> подходит для общего, повторяющегося условия в настоящем времени.<br><b>„als“</b> было бы правильным только для однократного события в прошлом."}, "gram": "wenn_satz"},
  {"id": "sbs_015", "cat": "wenn_satz", "sentence": {"de": "{{BLANK}} man neu in einer Stadt ist, braucht man oft Hilfe.", "en": "{{BLANK}} you are new in a city, you often need help.", "uk": "{{BLANK}} ти новенький у місті, тобі часто потрібна допомога.", "ru": "{{BLANK}} ты новенький в городе, тебе часто нужна помощь."}, "answer": {"de": "Wenn", "en": "When", "uk": "Коли", "ru": "Когда"}, "distractors": ["Als", "Dass", "Weil"], "explanation": {"de": "<b>„Wenn“</b> beschreibt eine allgemeine, immer wieder gültige Situation.<br><b>„Als“</b> wäre nur für ein bestimmtes, einmaliges Ereignis in der Vergangenheit richtig.", "en": "<b>„Wenn“</b> describes a general situation that is always true.<br><b>„Als“</b> would only be correct for a specific, single event in the past.", "uk": "<b>„Wenn“</b> описує загальну ситуацію, яка справджується завжди.<br><b>„Als“</b> було б правильним лише для конкретної одноразової події в минулому.", "ru": "<b>„Wenn“</b> описывает общую ситуацию, которая всегда верна.<br><b>„Als“</b> было бы правильным только для конкретного однократного события в прошлом."}, "gram": "wenn_satz"},
  {"id": "sbs_016", "cat": "vergleich", "sentence": {"de": "Die U-Bahn ist schneller {{BLANK}} der Bus.", "en": "The subway is faster {{BLANK}} the bus.", "uk": "Метро швидше, {{BLANK}} автобус.", "ru": "Метро быстрее, {{BLANK}} автобус."}, "answer": {"de": "als", "en": "than", "uk": "ніж", "ru": "чем"}, "distractors": ["wie", "dass", "so"], "explanation": {"de": "Beim Komparativ (<b>„schneller“</b>) folgt <b>„als“</b>.<br><b>„wie“</b> wird nur bei Gleichheit benutzt (<b>„so schnell wie“</b>).", "en": "After a comparative form (<b>„faster“</b>), <b>„than“</b> follows.<br><b>„wie“ (as)</b> is only used for equality (<b>„as fast as“</b>).", "uk": "Після компаратива (<b>„швидше“</b>) вживається <b>„ніж“</b>.<br><b>„wie“</b> використовується лише для рівності (<b>„такий самий швидкий, як“</b>).", "ru": "После компаратива (<b>„быстрее“</b>) употребляется <b>„чем“</b>.<br><b>„wie“</b> используется только для равенства (<b>„такой же быстрый, как“</b>)."}, "gram": "komparativ"},
  {"id": "sbs_017", "cat": "vergleich", "sentence": {"de": "Mein Zimmer ist genauso groß {{BLANK}} dein Zimmer.", "en": "My room is just as big {{BLANK}} your room.", "uk": "Моя кімната така сама велика, {{BLANK}} твоя.", "ru": "Моя комната такая же большая, {{BLANK}} твоя."}, "answer": {"de": "wie", "en": "as", "uk": "як", "ru": "как"}, "distractors": ["als", "dass", "so"], "explanation": {"de": "Bei Gleichheit steht <b>„genauso … wie“</b>.<br><b>„als“</b> würde einen Unterschied ausdrücken (schneller/größer als).", "en": "For equality, <b>„genauso … wie“</b> (just as … as) is used.<br><b>„als“</b> would express a difference (faster/bigger than).", "uk": "Для рівності вживають <b>„genauso … wie“</b> (такий самий … як).<br><b>„als“</b> виражало б відмінність (швидше/більше, ніж).", "ru": "Для равенства используют <b>„genauso … wie“</b> (такой же … как).<br><b>„als“</b> выражало бы разницу (быстрее/больше, чем)."}, "gram": "komparativ"},
  {"id": "sbs_018", "cat": "vergleich", "sentence": {"de": "Im Winter ist es kälter {{BLANK}} im Sommer.", "en": "In winter it is colder {{BLANK}} in summer.", "uk": "Взимку холодніше, {{BLANK}} влітку.", "ru": "Зимой холоднее, {{BLANK}} летом."}, "answer": {"de": "als", "en": "than", "uk": "ніж", "ru": "чем"}, "distractors": ["wie", "dass", "so"], "explanation": {"de": "<b>„kälter“</b> ist Komparativ, deshalb folgt <b>„als“</b>.<br><b>„wie“</b> passt nur bei Gleichheit, nicht bei einem Unterschied.", "en": "<b>„kälter“</b> (colder) is a comparative, so <b>„als“</b> follows.<br><b>„wie“</b> only fits with equality, not with a difference.", "uk": "<b>„kälter“</b> (холодніше) – компаратив, тому вживається <b>„als“</b>.<br><b>„wie“</b> підходить лише для рівності, а не відмінності.", "ru": "<b>„kälter“</b> (холоднее) – компаратив, поэтому употребляется <b>„als“</b>.<br><b>„wie“</b> подходит только для равенства, а не разницы."}, "gram": "komparativ"},
  {"id": "sbs_019", "cat": "vergleich", "sentence": {"de": "Das ist der {{BLANK}} Weg zum Bahnhof. (kurz)", "en": "That is the {{BLANK}} way to the station. (short)", "uk": "Це {{BLANK}} шлях до вокзалу. (короткий)", "ru": "Это {{BLANK}} путь до вокзала. (короткий)"}, "answer": {"de": "kürzeste", "en": "shortest", "uk": "найкоротший", "ru": "кратчайший"}, "distractors": ["kürzer", "kurz", "kürzeren"], "explanation": {"de": "Mit bestimmtem Artikel <b>„der“</b> und dem Wort „Weg“ braucht man den <b>Superlativ</b> mit -ste-Endung: „der kürzeste“.<br><b>„kürzer“</b> wäre nur der Komparativ (Vergleich zwischen zwei Dingen).", "en": "With the definite article <b>„der“</b> and „Weg“, you need the <b>superlative</b> with the -ste ending: „der kürzeste“.<br><b>„kürzer“</b> would only be the comparative (comparing two things).", "uk": "Із означеним артиклем <b>„der“</b> і словом „Weg“ потрібен <b>суперлатив</b> із закінченням -ste: „der kürzeste“.<br><b>„kürzer“</b> був би лише компаративом (порівняння двох речей).", "ru": "С определённым артиклем <b>„der“</b> и словом „Weg“ нужен <b>суперлатив</b> с окончанием -ste: „der kürzeste“.<br><b>„kürzer“</b> был бы лишь компаративом (сравнение двух вещей)."}, "gram": "superlativ"},
  {"id": "sbs_020", "cat": "vergleich", "sentence": {"de": "Diese Wohnung ist nicht so teuer {{BLANK}} die andere.", "en": "This apartment is not as expensive {{BLANK}} the other one.", "uk": "Ця квартира не така дорога, {{BLANK}} інша.", "ru": "Эта квартира не такая дорогая, {{BLANK}} другая."}, "answer": {"de": "wie", "en": "as", "uk": "як", "ru": "как"}, "distractors": ["als", "dass", "so"], "explanation": {"de": "Bei „nicht so … wie“ drückt man aus, dass etwas weniger ist als etwas anderes.<br><b>„als“</b> passt hier nicht, weil kein Komparativ (z. B. „teurer“) verwendet wird.", "en": "With „nicht so … wie“ you express that something is less than something else.<br><b>„als“</b> does not fit here because no comparative (e.g. „more expensive“) is used.", "uk": "За допомогою „nicht so … wie“ виражають, що щось менше за інше.<br><b>„als“</b> тут не підходить, бо не вживається компаратив (напр. „дорожчий“).", "ru": "С помощью „nicht so … wie“ выражают, что что-то меньше другого.<br><b>„als“</b> здесь не подходит, так как не используется компаратив (напр. „дороже“)."}, "gram": "komparativ"},
  {"id": "sbs_021", "cat": "modalverben", "sentence": {"de": "Ich {{BLANK}} heute leider nicht kommen, ich bin krank.", "en": "I {{BLANK}} unfortunately not come today, I am sick.", "uk": "Я, на жаль, сьогодні {{BLANK}} прийти, я хворий/хвора.", "ru": "Я, к сожалению, сегодня {{BLANK}} прийти, я болен/больна."}, "answer": {"de": "kann", "en": "can", "uk": "не можу", "ru": "не могу"}, "distractors": ["muss", "darf", "soll"], "explanation": {"de": "<b>„können“</b> drückt hier eine Fähigkeit/Möglichkeit aus (wegen Krankheit nicht möglich).<br><b>„müssen“</b> würde eine Pflicht ausdrücken, das passt nicht zum Kontext.", "en": "<b>„können“</b> (can) here expresses ability/possibility (not possible due to illness).<br><b>„müssen“</b> would express an obligation, which does not fit the context.", "uk": "<b>„können“</b> тут виражає можливість (неможливо через хворобу).<br><b>„müssen“</b> виражало б обовʼязок, що не пасує до контексту.", "ru": "<b>„können“</b> здесь выражает возможность (невозможно из-за болезни).<br><b>„müssen“</b> выражало бы обязанность, что не подходит по контексту."}, "gram": "modalverben"},
  {"id": "sbs_022", "cat": "modalverben", "sentence": {"de": "Kinder {{BLANK}} in der Schule ruhig sein.", "en": "Children {{BLANK}} be quiet at school.", "uk": "Діти {{BLANK}} бути тихими у школі.", "ru": "Дети {{BLANK}} быть тихими в школе."}, "answer": {"de": "müssen", "en": "have to", "uk": "мусять", "ru": "должны"}, "distractors": ["dürfen", "können", "möchten"], "explanation": {"de": "<b>„müssen“</b> drückt eine Regel/Pflicht aus.<br><b>„dürfen“</b> wäre eine Erlaubnis, keine Pflicht.", "en": "<b>„müssen“</b> (must) expresses a rule/obligation.<br><b>„dürfen“</b> would express permission, not an obligation.", "uk": "<b>„müssen“</b> виражає правило/обовʼязок.<br><b>„dürfen“</b> означало б дозвіл, а не обовʼязок.", "ru": "<b>„müssen“</b> выражает правило/обязанность.<br><b>„dürfen“</b> означало бы разрешение, а не обязанность."}, "gram": "modalverben"},
  {"id": "sbs_023", "cat": "modalverben", "sentence": {"de": "{{BLANK}} ich bitte das Fenster öffnen?", "en": "{{BLANK}} I open the window, please?", "uk": "{{BLANK}} я відкрити вікно?", "ru": "{{BLANK}} я открыть окно?"}, "answer": {"de": "Darf", "en": "May", "uk": "Чи можу", "ru": "Могу ли"}, "distractors": ["Muss", "Soll", "Will"], "explanation": {"de": "<b>„dürfen“</b> ist die höfliche Form, um um Erlaubnis zu bitten.<br><b>„müssen“</b> würde eine Pflicht ausdrücken, keine Bitte um Erlaubnis.", "en": "<b>„dürfen“</b> (may) is the polite form for asking permission.<br><b>„müssen“</b> would express an obligation, not a request for permission.", "uk": "<b>„dürfen“</b> — ввічлива форма для прохання про дозвіл.<br><b>„müssen“</b> виражало б обовʼязок, а не прохання про дозвіл.", "ru": "<b>„dürfen“</b> — вежливая форма для просьбы о разрешении.<br><b>„müssen“</b> выражало бы обязанность, а не просьбу о разрешении."}, "gram": "modalverben"},
  {"id": "sbs_024", "cat": "modalverben", "sentence": {"de": "Er {{BLANK}} früher sehr gut schwimmen.", "en": "He {{BLANK}} swim very well before.", "uk": "Раніше він {{BLANK}} дуже добре плавати.", "ru": "Раньше он {{BLANK}} очень хорошо плавать."}, "answer": {"de": "konnte", "en": "could", "uk": "вмів", "ru": "умел"}, "distractors": ["kann", "musste", "durfte"], "explanation": {"de": "Mit <b>„früher“</b> braucht man das Präteritum: <b>„konnte“</b> (nicht „kann“).<br><b>„durfte“</b> wäre eine Erlaubnis, keine Fähigkeit.", "en": "With <b>„früher“</b> (before) you need the past tense: <b>„konnte“</b> (not „kann“).<br><b>„durfte“</b> would be permission, not ability.", "uk": "Із <b>„früher“</b> потрібен претерит: <b>„konnte“</b> (не „kann“).<br><b>„durfte“</b> означало б дозвіл, а не здатність.", "ru": "С <b>„früher“</b> нужен претерит: <b>„konnte“</b> (не „kann“).<br><b>„durfte“</b> означало бы разрешение, а не способность."}, "gram": "modalverben_praeteritum"},
  {"id": "sbs_025", "cat": "modalverben", "sentence": {"de": "Wir {{BLANK}} gestern zur Party gehen, aber wir hatten keine Zeit.", "en": "We {{BLANK}} go to the party yesterday, but we had no time.", "uk": "Учора ми {{BLANK}} піти на вечірку, але не мали часу.", "ru": "Вчера мы {{BLANK}} пойти на вечеринку, но у нас не было времени."}, "answer": {"de": "wollten", "en": "wanted to", "uk": "хотіли", "ru": "хотели"}, "distractors": ["konnten", "mussten", "durften"], "explanation": {"de": "<b>„wollten“</b> (Präteritum von „wollen“) drückt einen Wunsch in der Vergangenheit aus, der nicht erfüllt wurde.<br><b>„mussten“</b> würde eine Pflicht ausdrücken, kein Wunsch.", "en": "<b>„wollten“</b> (past tense of „wollen“) expresses a wish in the past that was not fulfilled.<br><b>„mussten“</b> would express an obligation, not a wish.", "uk": "<b>„wollten“</b> (претерит від „wollen“) виражає бажання в минулому, яке не здійснилося.<br><b>„mussten“</b> виражало б обовʼязок, а не бажання.", "ru": "<b>„wollten“</b> (претерит от „wollen“) выражает желание в прошлом, которое не осуществилось.<br><b>„mussten“</b> выражало бы обязанность, а не желание."}, "gram": "modalverben_praeteritum"},
  {"id": "sbs_026", "cat": "praepositionen", "sentence": {"de": "Das Bild hängt {{BLANK}} der Wand. (Position)", "en": "The picture is hanging {{BLANK}} the wall. (position)", "uk": "Картина висить {{BLANK}} стіні. (позиція)", "ru": "Картина висит {{BLANK}} стене. (позиция)"}, "answer": {"de": "an", "en": "on", "uk": "на", "ru": "на"}, "distractors": ["auf", "in", "zu"], "explanation": {"de": "Bei <b>Position</b> (wo?) steht die Wechselpräposition <b>„an“</b> mit Dativ: „an der Wand“.<br><b>„auf“</b> passt eher zu waagerechten Flächen wie einem Tisch.", "en": "For <b>position</b> (where?) the two-way preposition <b>„an“</b> is used with dative: „an der Wand“.<br><b>„auf“</b> fits better with horizontal surfaces like a table.", "uk": "Для <b>позиції</b> (де?) вживають прийменник подвійного керування <b>„an“</b> з давальним: „an der Wand“.<br><b>„auf“</b> більше підходить для горизонтальних поверхонь, як стіл.", "ru": "Для <b>позиции</b> (где?) употребляют предлог двойного управления <b>„an“</b> с дательным: „an der Wand“.<br><b>„auf“</b> больше подходит для горизонтальных поверхностей, как стол."}, "gram": "wechselpraepositionen"},
  {"id": "sbs_027", "cat": "praepositionen", "sentence": {"de": "Er stellt den Stuhl {{BLANK}} den Tisch. (Richtung)", "en": "He puts the chair {{BLANK}} the table. (direction)", "uk": "Він ставить стілець {{BLANK}} стіл. (напрямок)", "ru": "Он ставит стул {{BLANK}} стол. (направление)"}, "answer": {"de": "an", "en": "next to", "uk": "до", "ru": "к"}, "distractors": ["auf", "in", "bei"], "explanation": {"de": "Bei <b>Richtung</b> (wohin?) steht die Wechselpräposition <b>„an“</b> mit Akkusativ: „an den Tisch“.<br>Der Unterschied zum vorherigen Beispiel: hier bewegt sich der Stuhl irgendwohin.", "en": "For <b>direction</b> (where to?) the two-way preposition <b>„an“</b> is used with accusative: „an den Tisch“.<br>The difference to the previous example: here the chair moves somewhere.", "uk": "Для <b>напрямку</b> (куди?) вживають прийменник подвійного керування <b>„an“</b> зі знахідним: „an den Tisch“.<br>Відмінність від попереднього прикладу: тут стілець рухається кудись.", "ru": "Для <b>направления</b> (куда?) употребляют предлог двойного управления <b>„an“</b> с винительным: „an den Tisch“.<br>Отличие от предыдущего примера: здесь стул перемещается куда-то."}, "gram": "wechselpraepositionen"},
  {"id": "sbs_028", "cat": "praepositionen", "sentence": {"de": "Wir wohnen {{BLANK}} der Stadtmitte.", "en": "We live {{BLANK}} the city centre.", "uk": "Ми живемо {{BLANK}} центрі міста.", "ru": "Мы живём {{BLANK}} центре города."}, "answer": {"de": "in", "en": "in", "uk": "у", "ru": "в"}, "distractors": ["an", "auf", "zu"], "explanation": {"de": "Bei einem Ort, an dem man sich befindet, benutzt man <b>„in“</b> mit Dativ: „in der Stadtmitte“.<br><b>„zu“</b> würde nur eine Richtung ausdrücken (Bewegung dorthin).", "en": "For a place where you are located, you use <b>„in“</b> with dative: „in der Stadtmitte“.<br><b>„zu“</b> would only express a direction (movement towards it).", "uk": "Для місця, де хтось перебуває, вживають <b>„in“</b> з давальним: „in der Stadtmitte“.<br><b>„zu“</b> виражало б лише напрямок (рух туди).", "ru": "Для места, где кто-то находится, употребляют <b>„in“</b> с дательным: „in der Stadtmitte“.<br><b>„zu“</b> выражало бы только направление (движение туда)."}, "gram": "wechselpraepositionen"},
  {"id": "sbs_029", "cat": "praepositionen", "sentence": {"de": "Gehen Sie {{BLANK}} der Ecke nach rechts.", "en": "Go right {{BLANK}} the corner.", "uk": "На {{BLANK}} поверніть праворуч.", "ru": "На {{BLANK}} поверните направо."}, "answer": {"de": "an", "en": "at", "uk": "розі", "ru": "углу"}, "distractors": ["auf", "in", "zu"], "explanation": {"de": "Die feste Wendung <b>„an der Ecke“</b> beschreibt eine Position bei einer Wegbeschreibung.<br><b>„auf“</b> wäre hier ungewöhnlich, das passt nicht zu „Ecke“.", "en": "The fixed phrase <b>„an der Ecke“</b> (at the corner) describes a position when giving directions.<br><b>„auf“</b> would be unusual here, it does not fit with „Ecke“.", "uk": "Стала фраза <b>„an der Ecke“</b> (на розі) описує позицію в описі маршруту.<br><b>„auf“</b> тут було б незвичним, воно не поєднується зі словом „Ecke“.", "ru": "Устойчивая фраза <b>„an der Ecke“</b> (на углу) описывает позицию в описании маршрута.<br><b>„auf“</b> здесь было бы необычным, оно не сочетается со словом „Ecke“."}, "gram": "lokale_praepositionen"},
  {"id": "sbs_030", "cat": "praepositionen", "sentence": {"de": "Das Geschäft ist {{BLANK}} dem Bahnhof.", "en": "The shop is {{BLANK}} the station.", "uk": "Магазин {{BLANK}} вокзалу.", "ru": "Магазин {{BLANK}} вокзала."}, "answer": {"de": "neben", "en": "next to", "uk": "біля", "ru": "рядом с"}, "distractors": ["auf", "zwischen", "unter"], "explanation": {"de": "<b>„neben“</b> mit Dativ beschreibt eine Position direkt seitlich von etwas.<br><b>„zwischen“</b> würde zwei Bezugspunkte brauchen (zwischen X und Y).", "en": "<b>„neben“</b> with dative describes a position directly beside something.<br><b>„zwischen“</b> would need two reference points (between X and Y).", "uk": "<b>„neben“</b> з давальним описує позицію прямо збоку від чогось.<br><b>„zwischen“</b> потребувало б двох орієнтирів (між X і Y).", "ru": "<b>„neben“</b> с дательным описывает позицию прямо сбоку от чего-то.<br><b>„zwischen“</b> потребовало бы двух ориентиров (между X и Y)."}, "gram": "wechselpraepositionen"},
  {"id": "sbs_031", "cat": "hoeflichkeit", "sentence": {"de": "{{BLANK}} Sie mir bitte helfen?", "en": "{{BLANK}} you please help me?", "uk": "{{BLANK}} б ви мені допомогти?", "ru": "{{BLANK}} бы вы мне помочь?"}, "answer": {"de": "Könnten", "en": "Could", "uk": "Чи не могли", "ru": "Не могли"}, "distractors": ["Können", "Müssten", "Sollten"], "explanation": {"de": "<b>„Könnten“</b> (Konjunktiv II) klingt höflicher als das einfache <b>„Können“</b>.<br>Für eine höfliche Bitte ist der Konjunktiv II typisch.", "en": "<b>„Könnten“</b> (subjunctive II) sounds more polite than the simple <b>„Können“</b>.<br>For a polite request, the subjunctive II form is typical.", "uk": "<b>„Könnten“</b> (конʼюнктив II) звучить ввічливіше за просте <b>„Können“</b>.<br>Для ввічливого прохання типовим є саме конʼюнктив II.", "ru": "<b>„Könnten“</b> (конъюнктив II) звучит вежливее, чем простое <b>„Können“</b>.<br>Для вежливой просьбы типична именно форма конъюнктива II."}, "gram": "hoeflichkeit_konjunktiv"},
  {"id": "sbs_032", "cat": "hoeflichkeit", "sentence": {"de": "Entschuldigung, {{BLANK}} Sie mir sagen, wo der Bahnhof ist?", "en": "Excuse me, {{BLANK}} you tell me where the station is?", "uk": "Перепрошую, {{BLANK}} ви мені сказати, де вокзал?", "ru": "Извините, {{BLANK}} бы вы сказать мне, где вокзал?"}, "answer": {"de": "könnten", "en": "could", "uk": "могли", "ru": "могли"}, "distractors": ["können", "würden", "müssten"], "explanation": {"de": "Nach <b>„Entschuldigung“</b> ist <b>„könnten Sie …“</b> eine sehr typische, höfliche Frageform, um nach dem Weg zu fragen.", "en": "After <b>„Entschuldigung“</b> (excuse me), <b>„könnten Sie …“</b> is a very typical, polite way to ask for directions.", "uk": "Після <b>„Entschuldigung“</b> фраза <b>„könnten Sie …“</b> — дуже типова, ввічлива форма запитання про дорогу.", "ru": "После <b>„Entschuldigung“</b> фраза <b>„könnten Sie …“</b> — очень типичная, вежливая форма вопроса о дороге."}, "gram": "hoeflichkeit_konjunktiv"},
  {"id": "sbs_033", "cat": "hoeflichkeit", "sentence": {"de": "{{BLANK}} Sie so freundlich und öffnen die Tür?", "en": "{{BLANK}} you be so kind as to open the door?", "uk": "Чи не {{BLANK}} б ви такі любʼязні відчинити двері?", "ru": "Не {{BLANK}} бы вы так любезны открыть дверь?"}, "answer": {"de": "Wären", "en": "Would", "uk": "були", "ru": "были"}, "distractors": ["Sind", "Waren", "Werden"], "explanation": {"de": "Die feste, sehr höfliche Wendung lautet <b>„Wären Sie so freundlich …?“</b> (Konjunktiv II von „sein“).", "en": "The fixed, very polite phrase is <b>„Wären Sie so freundlich …?“</b> (subjunctive II of „sein“).", "uk": "Стала, дуже ввічлива фраза: <b>„Wären Sie so freundlich …?“</b> (конʼюнктив II від „sein“).", "ru": "Устойчивая, очень вежливая фраза: <b>„Wären Sie so freundlich …?“</b> (конъюнктив II от „sein“)."}, "gram": "hoeflichkeit_konjunktiv"},
  {"id": "sbs_034", "cat": "hoeflichkeit", "sentence": {"de": "{{BLANK}} Sie mir bitte den Weg zeigen?", "en": "{{BLANK}} you please show me the way?", "uk": "{{BLANK}} б ви мені показати дорогу?", "ru": "Не {{BLANK}} бы вы показать мне дорогу?"}, "answer": {"de": "Können", "en": "Can", "uk": "Могли", "ru": "Могли"}, "distractors": ["Müssen", "Sollen", "Dürfen"], "explanation": {"de": "<b>„Können Sie mir bitte …?“</b> ist eine einfache, im Alltag sehr häufige höfliche Bitte auf A2-Niveau.", "en": "<b>„Können Sie mir bitte …?“</b> is a simple, everyday polite request at A2 level.", "uk": "<b>„Können Sie mir bitte …?“</b> — проста, дуже поширена в побуті ввічлива форма прохання рівня A2.", "ru": "<b>„Können Sie mir bitte …?“</b> — простая, очень распространённая в быту вежливая форма просьбы уровня A2."}, "gram": "hoeflichkeit_konjunktiv"},
  {"id": "sbs_035", "cat": "hoeflichkeit", "sentence": {"de": "Ich hätte eine Frage, {{BLANK}} Sie kurz Zeit haben.", "en": "I would have a question, {{BLANK}} you have a moment.", "uk": "У мене є питання, {{BLANK}} у вас є хвилинка.", "ru": "У меня есть вопрос, {{BLANK}} у вас есть минутка."}, "answer": {"de": "wenn", "en": "if", "uk": "якщо", "ru": "если"}, "distractors": ["dass", "weil", "ob"], "explanation": {"de": "<b>„wenn“</b> leitet hier eine höfliche Bedingung ein (Konjunktiv-ähnlicher, indirekter Ton).<br><b>„ob“</b> würde eine Unsicherheit ausdrücken, keine Bedingung.", "en": "<b>„wenn“</b> here introduces a polite condition (an indirect, subjunctive-like tone).<br><b>„ob“</b> would express uncertainty, not a condition.", "uk": "<b>„wenn“</b> тут вводить ввічливу умову (непрямий, зменшено-ввічливий тон).<br><b>„ob“</b> виражало б невпевненість, а не умову.", "ru": "<b>„wenn“</b> здесь вводит вежливое условие (непрямой, смягчённый тон).<br><b>„ob“</b> выражало бы неуверенность, а не условие."}, "gram": "wenn_satz"},
  {"id": "sbs_036", "cat": "adjektivendungen", "sentence": {"de": "Er trägt ein rot{{BLANK}} Hemd.", "en": "He is wearing a red shirt.", "uk": "Він одягнув червону сорочку.", "ru": "Он надел красную рубашку."}, "answer": {"de": "es", "en": "", "uk": "", "ru": ""}, "distractors": ["er", "e", "en"], "explanation": {"de": "Nach dem unbestimmten Artikel <b>„ein“</b> braucht das Neutrum im Nominativ/Akkusativ die Endung <b>-es</b>: „ein rotes Hemd“.", "en": "After the indefinite article <b>„ein“</b>, neuter nouns in the nominative/accusative need the ending <b>-es</b>: „ein rotes Hemd“.", "uk": "Після неозначеного артикля <b>„ein“</b> середній рід у називному/знахідному потребує закінчення <b>-es</b>: „ein rotes Hemd“.", "ru": "После неопределённого артикля <b>„ein“</b> средний род в именительном/винительном требует окончания <b>-es</b>: „ein rotes Hemd“."}, "gram": "adjektivendungen"},
  {"id": "sbs_037", "cat": "adjektivendungen", "sentence": {"de": "Sie kauft eine grün{{BLANK}} Hose.", "en": "She buys green trousers.", "uk": "Вона купує зелені штани.", "ru": "Она покупает зелёные брюки."}, "answer": {"de": "e", "en": "", "uk": "", "ru": ""}, "distractors": ["es", "en", "er"], "explanation": {"de": "Nach <b>„eine“</b> (Femininum, Akkusativ) braucht das Adjektiv die Endung <b>-e</b>: „eine grüne Hose“.", "en": "After <b>„eine“</b> (feminine, accusative), the adjective needs the ending <b>-e</b>: „eine grüne Hose“.", "uk": "Після <b>„eine“</b> (жіночий рід, знахідний) прикметник потребує закінчення <b>-e</b>: „eine grüne Hose“.", "ru": "После <b>„eine“</b> (женский род, винительный) прилагательное требует окончания <b>-e</b>: „eine grüne Hose“."}, "gram": "adjektivendungen"},
  {"id": "sbs_038", "cat": "adjektivendungen", "sentence": {"de": "Das ist mein neu{{BLANK}} Pullover.", "en": "That is my new sweater.", "uk": "Це мій новий светр.", "ru": "Это мой новый свитер."}, "answer": {"de": "er", "en": "", "uk": "", "ru": ""}, "distractors": ["es", "e", "en"], "explanation": {"de": "Nach dem Possessivartikel <b>„mein“</b> braucht das Maskulinum im Nominativ die Endung <b>-er</b>: „mein neuer Pullover“.", "en": "After the possessive article <b>„mein“</b>, masculine nouns in the nominative need the ending <b>-er</b>: „mein neuer Pullover“.", "uk": "Після присвійного артикля <b>„mein“</b> чоловічий рід у називному потребує закінчення <b>-er</b>: „mein neuer Pullover“.", "ru": "После притяжательного артикля <b>„mein“</b> мужской род в именительном требует окончания <b>-er</b>: „mein neuer Pullover“."}, "gram": "adjektivendungen"},
  {"id": "sbs_039", "cat": "adjektivendungen", "sentence": {"de": "Ich suche einen bequem{{BLANK}} Stuhl.", "en": "I am looking for a comfortable chair.", "uk": "Я шукаю зручний стілець.", "ru": "Я ищу удобный стул."}, "answer": {"de": "en", "en": "", "uk": "", "ru": ""}, "distractors": ["er", "es", "e"], "explanation": {"de": "Nach <b>„einen“</b> (Maskulinum, Akkusativ) braucht das Adjektiv die Endung <b>-en</b>: „einen bequemen Stuhl“.", "en": "After <b>„einen“</b> (masculine, accusative), the adjective needs the ending <b>-en</b>: „einen bequemen Stuhl“.", "uk": "Після <b>„einen“</b> (чоловічий рід, знахідний) прикметник потребує закінчення <b>-en</b>: „einen bequemen Stuhl“.", "ru": "После <b>„einen“</b> (мужской род, винительный) прилагательное требует окончания <b>-en</b>: „einen bequemen Stuhl“."}, "gram": "adjektivendungen"},
  {"id": "sbs_040", "cat": "adjektivendungen", "sentence": {"de": "Wir haben ein klein{{BLANK}} Zimmer.", "en": "We have a small room.", "uk": "У нас маленька кімната.", "ru": "У нас маленькая комната."}, "answer": {"de": "es", "en": "", "uk": "", "ru": ""}, "distractors": ["er", "e", "en"], "explanation": {"de": "Nach <b>„ein“</b> (Neutrum, Akkusativ) braucht das Adjektiv die Endung <b>-es</b>: „ein kleines Zimmer“.", "en": "After <b>„ein“</b> (neuter, accusative), the adjective needs the ending <b>-es</b>: „ein kleines Zimmer“.", "uk": "Після <b>„ein“</b> (середній рід, знахідний) прикметник потребує закінчення <b>-es</b>: „ein kleines Zimmer“.", "ru": "После <b>„ein“</b> (средний род, винительный) прилагательное требует окончания <b>-es</b>: „ein kleines Zimmer“."}, "gram": "adjektivendungen"}
];