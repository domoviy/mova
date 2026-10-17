var PRIMARY_LANG = "de"; // головна мова контенту: питання/відповіді спочатку створюються тут, en/uk/ru — переклад (поки порожні)

var AUDIO_CONFIG = {};   // аудіо для цього курсу поки не генерується

// ════════════════════════════════════════════════════════════════
//  Leben in Deutschland  ·  підготовка до тесту «Leben in Deutschland»
//  та Einbürgerungstest
//  Основа курсу — QUIZ (див. нижче). Решта таблиць порожні, але
//  присутні, щоб структура файлу збігалась з іншими курсами.
// ════════════════════════════════════════════════════════════════

// ── КАТЕГОРІЇ (QUIZ[].cat) ───────────────────────────────────
var CATS = [
  {id:"organe", de:"Verfassungsorgane", en:'Constitutional Bodies', uk:"Конституційні органи", ru:'Конституционные органы', e:"🏛️", grp:"demokratie"},
  {id:"prinzipien", de:"Verfassungsprinzipien", en:'Constitutional Principles', uk:"Конституційні принципи", ru:'Конституционные принципы', e:"⚖️", grp:"demokratie"},
  {id:"foederalismus", de:"Föderalismus", en:'Federalism', uk:"Федералізм", ru:'Федерализм', e:"🗺️", grp:"demokratie"},
  {id:"sozialsystem", de:"Sozialsystem", en:'Social System', uk:"Соціальна система", ru:'Социальная система', e:"🩺", grp:"demokratie"},
  {id:"grundrechte", de:"Grundrechte", en:'Fundamental Rights', uk:"Основні права", ru:'Основные права', e:"🕊️", grp:"demokratie"},
  {id:"wahlen", de:"Wahlen und Beteiligung", en:'Elections and Participation', uk:"Вибори та участь", ru:'Выборы и участие', e:"🗳️", grp:"demokratie"},
  {id:"parteien", de:"Parteien", en:'Political Parties', uk:"Партії", ru:'Партии', e:"🎌", grp:"demokratie"},
  {id:"staatsaufgaben", de:"Aufgaben des Staates", en:'Tasks of the State', uk:"Завдання держави", ru:'Задачи государства', e:"🏗️", grp:"demokratie"},
  {id:"pflichten", de:"Pflichten", en:'Civic Duties', uk:"Обовʼязки", ru:'Обязанности', e:"📌", grp:"demokratie"},
  {id:"staatssymbole", de:"Staatssymbole", en:'National Symbols', uk:"Державні символи", ru:'Государственные символы', e:"🦅", grp:"demokratie"},
  {id:"kommune", de:"Kommune", en:'Municipality', uk:"Громада (Kommune)", ru:'Община (Kommune)', e:"🏘️", grp:"demokratie"},
  {id:"recht", de:"Recht und Alltag", en:'Law and Everyday Life', uk:"Право і повсякдення", ru:'Право и повседневная жизнь', e:"📜", grp:"demokratie"},
  {id:"ns", de:"Der Nationalsozialismus und seine Folgen", en:'National Socialism and Its Consequences', uk:"Націонал-соціалізм та його наслідки", ru:'Национал-социализм и его последствия', e:"🕯️", grp:"geschichte"},
  {id:"nach1945", de:"Wichtige Stationen nach 1945", en:'Key Milestones After 1945', uk:"Важливі віхи після 1945 року", ru:'Важные вехи после 1945 года', e:"📅", grp:"geschichte"},
  {id:"wiedervereinigung", de:"Wiedervereinigung", en:'Reunification', uk:"Воззʼєднання", ru:'Воссоединение', e:"🧱", grp:"geschichte"},
  {id:"europa", de:"Deutschland in Europa", en:'Germany in Europe', uk:"Німеччина в Європі", ru:'Германия в Европе', e:"🇪🇺", grp:"geschichte"},
  {id:"religion", de:"Religiöse Vielfalt", en:'Religious Diversity', uk:"Релігійна різноманітність", ru:'Религиозное многообразие', e:"🕍", grp:"gesellschaft"},
  {id:"bildung", de:"Bildung", en:'Education', uk:"Освіта", ru:'Образование', e:"🎓", grp:"gesellschaft"},
  {id:"migration", de:"Migrationsgeschichte", en:'History of Migration', uk:"Історія міграції", ru:'История миграции', e:"🧳", grp:"gesellschaft"},
  {id:"interkulturell", de:"Interkulturelles Zusammenleben", en:'Intercultural Coexistence', uk:"Міжкультурне співжиття", ru:'Межкультурное сосуществование', e:"🤝", grp:"gesellschaft"},
  {id:'region', de:'Fragen zu meinem Bundesland', en:'Questions About My Federal State', uk:'Питання про мою землю', ru:'Вопросы о моей федеральной земле', e:'📍', grp:'region'},
];

var CAT_GROUPS = [   // модулі офіційного тесту; CATS[].grp посилається на ці id
  {id:"demokratie", de:"Leben in der Demokratie", en:'Living in a Democracy', uk:"Життя в демократії", ru:'Жизнь в демократии'},
  {id:"geschichte", de:"Geschichte und Verantwortung", en:'History and Responsibility', uk:"Історія і відповідальність", ru:'История и ответственность'},
  {id:"gesellschaft", de:"Mensch und Gesellschaft", en:'People and Society', uk:"Людина і суспільство", ru:'Человек и общество'}
];
// ── РЕГІОНИ (федеральні землі) ───────────────────────────────
// id = офіційний код землі (ISO 3166-2:DE без префікса DE-).
// QUIZ[].region: порожнє/відсутнє = питання для всіх; 'BY' або ['BY','BW'] = лише для цих земель.
// Користувач обирає землю в Налаштуваннях (рядок з'являється лише коли в курсі є REGIONS).
var REGIONS = [
  {id:'BW', de:'Baden-Württemberg',      en:'Baden-Württemberg',      uk:'Баден-Вюртемберг',        ru:'Баден-Вюртемберг'},
  {id:'BY', de:'Bayern',                 en:'Bavaria',                uk:'Баварія',                 ru:'Бавария'},
  {id:'BE', de:'Berlin',                 en:'Berlin',                 uk:'Берлін',                  ru:'Берлин'},
  {id:'BB', de:'Brandenburg',            en:'Brandenburg',            uk:'Бранденбург',             ru:'Бранденбург'},
  {id:'HB', de:'Bremen',                 en:'Bremen',                 uk:'Бремен',                  ru:'Бремен'},
  {id:'HH', de:'Hamburg',                en:'Hamburg',                uk:'Гамбург',                 ru:'Гамбург'},
  {id:'HE', de:'Hessen',                 en:'Hesse',                  uk:'Гессен',                  ru:'Гессен'},
  {id:'MV', de:'Mecklenburg-Vorpommern', en:'Mecklenburg-Vorpommern', uk:'Мекленбург-Передня Померанія', ru:'Мекленбург-Передняя Померания'},
  {id:'NI', de:'Niedersachsen',          en:'Lower Saxony',           uk:'Нижня Саксонія',          ru:'Нижняя Саксония'},
  {id:'NW', de:'Nordrhein-Westfalen',    en:'North Rhine-Westphalia', uk:'Північний Рейн-Вестфалія', ru:'Северный Рейн-Вестфалия'},
  {id:'RP', de:'Rheinland-Pfalz',        en:'Rhineland-Palatinate',   uk:'Рейнланд-Пфальц',         ru:'Рейнланд-Пфальц'},
  {id:'SL', de:'Saarland',               en:'Saarland',               uk:'Саар',                    ru:'Саар'},
  {id:'SN', de:'Sachsen',                en:'Saxony',                 uk:'Саксонія',                ru:'Саксония'},
  {id:'ST', de:'Sachsen-Anhalt',         en:'Saxony-Anhalt',          uk:'Саксонія-Ангальт',        ru:'Саксония-Ангальт'},
  {id:'SH', de:'Schleswig-Holstein',     en:'Schleswig-Holstein',     uk:'Шлезвіг-Гольштейн',       ru:'Шлезвиг-Гольштейн'},
  {id:'TH', de:'Thüringen',              en:'Thuringia',              uk:'Тюрингія',                ru:'Тюрингия'},
];

var GRAMMAR = [];
var LESSONS = [
  {
    "id": "k1m1",
    "chapter": 1,
    "module": 1,
    "chapterTitle": {
      "de": "Verfassungsorgane",
      "en": "Constitutional Bodies",
      "uk": "Конституційні органи",
      "ru": "Конституционные органы"
    },
    "title": {
      "de": "Verfassungsorgane – Teil 1",
      "en": "Constitutional Bodies – Part 1",
      "uk": "Конституційні органи — частина 1",
      "ru": "Конституционные органы — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k1m2",
    "chapter": 1,
    "module": 2,
    "chapterTitle": {
      "de": "Verfassungsorgane",
      "en": "Constitutional Bodies",
      "uk": "Конституційні органи",
      "ru": "Конституционные органы"
    },
    "title": {
      "de": "Verfassungsorgane – Teil 2",
      "en": "Constitutional Bodies – Part 2",
      "uk": "Конституційні органи — частина 2",
      "ru": "Конституционные органы — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k1m1",
    "sbCards": []
  },
  {
    "id": "k1m3",
    "chapter": 1,
    "module": 3,
    "chapterTitle": {
      "de": "Verfassungsorgane",
      "en": "Constitutional Bodies",
      "uk": "Конституційні органи",
      "ru": "Конституционные органы"
    },
    "title": {
      "de": "Verfassungsorgane – Teil 3",
      "en": "Constitutional Bodies – Part 3",
      "uk": "Конституційні органи — частина 3",
      "ru": "Конституционные органы — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k1m2",
    "sbCards": []
  },
  {
    "id": "k1m4",
    "chapter": 1,
    "module": 4,
    "chapterTitle": {
      "de": "Verfassungsorgane",
      "en": "Constitutional Bodies",
      "uk": "Конституційні органи",
      "ru": "Конституционные органы"
    },
    "title": {
      "de": "Verfassungsorgane – Teil 4",
      "en": "Constitutional Bodies – Part 4",
      "uk": "Конституційні органи — частина 4",
      "ru": "Конституционные органы — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k1m3",
    "sbCards": []
  },
  {
    "id": "k1m5",
    "chapter": 1,
    "module": 5,
    "chapterTitle": {
      "de": "Verfassungsorgane",
      "en": "Constitutional Bodies",
      "uk": "Конституційні органи",
      "ru": "Конституционные органы"
    },
    "title": {
      "de": "Verfassungsorgane – Teil 5",
      "en": "Constitutional Bodies – Part 5",
      "uk": "Конституційні органи — частина 5",
      "ru": "Конституционные органы — часть 5"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k1m4",
    "sbCards": []
  },
  {
    "id": "k2m1",
    "chapter": 2,
    "module": 1,
    "chapterTitle": {
      "de": "Verfassungsprinzipien",
      "en": "Constitutional Principles",
      "uk": "Конституційні принципи",
      "ru": "Конституционные принципы"
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 1",
      "en": "Constitutional Principles – Part 1",
      "uk": "Конституційні принципи — частина 1",
      "ru": "Конституционные принципы — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k1m5",
    "sbCards": []
  },
  {
    "id": "k2m2",
    "chapter": 2,
    "module": 2,
    "chapterTitle": {
      "de": "Verfassungsprinzipien",
      "en": "Constitutional Principles",
      "uk": "Конституційні принципи",
      "ru": "Конституционные принципы"
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 2",
      "en": "Constitutional Principles – Part 2",
      "uk": "Конституційні принципи — частина 2",
      "ru": "Конституционные принципы — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k2m1",
    "sbCards": []
  },
  {
    "id": "k2m3",
    "chapter": 2,
    "module": 3,
    "chapterTitle": {
      "de": "Verfassungsprinzipien",
      "en": "Constitutional Principles",
      "uk": "Конституційні принципи",
      "ru": "Конституционные принципы"
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 3",
      "en": "Constitutional Principles – Part 3",
      "uk": "Конституційні принципи — частина 3",
      "ru": "Конституционные принципы — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k2m2",
    "sbCards": []
  },
  {
    "id": "k2m4",
    "chapter": 2,
    "module": 4,
    "chapterTitle": {
      "de": "Verfassungsprinzipien",
      "en": "Constitutional Principles",
      "uk": "Конституційні принципи",
      "ru": "Конституционные принципы"
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 4",
      "en": "Constitutional Principles – Part 4",
      "uk": "Конституційні принципи — частина 4",
      "ru": "Конституционные принципы — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k2m3",
    "sbCards": []
  },
  {
    "id": "k3m1",
    "chapter": 3,
    "module": 1,
    "chapterTitle": {
      "de": "Föderalismus",
      "en": "Federalism",
      "uk": "Федералізм",
      "ru": "Федерализм"
    },
    "title": {
      "de": "Föderalismus – Teil 1",
      "en": "Federalism – Part 1",
      "uk": "Федералізм — частина 1",
      "ru": "Федерализм — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k2m4",
    "sbCards": []
  },
  {
    "id": "k3m2",
    "chapter": 3,
    "module": 2,
    "chapterTitle": {
      "de": "Föderalismus",
      "en": "Federalism",
      "uk": "Федералізм",
      "ru": "Федерализм"
    },
    "title": {
      "de": "Föderalismus – Teil 2",
      "en": "Federalism – Part 2",
      "uk": "Федералізм — частина 2",
      "ru": "Федерализм — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k3m1",
    "sbCards": []
  },
  {
    "id": "k4m1",
    "chapter": 4,
    "module": 1,
    "chapterTitle": {
      "de": "Sozialsystem",
      "en": "Social System",
      "uk": "Соціальна система",
      "ru": "Социальная система"
    },
    "title": {
      "de": "Sozialsystem – Teil 1",
      "en": "Social System – Part 1",
      "uk": "Соціальна система — частина 1",
      "ru": "Социальная система — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k3m2",
    "sbCards": []
  },
  {
    "id": "k4m2",
    "chapter": 4,
    "module": 2,
    "chapterTitle": {
      "de": "Sozialsystem",
      "en": "Social System",
      "uk": "Соціальна система",
      "ru": "Социальная система"
    },
    "title": {
      "de": "Sozialsystem – Teil 2",
      "en": "Social System – Part 2",
      "uk": "Соціальна система — частина 2",
      "ru": "Социальная система — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k4m1",
    "sbCards": []
  },
  {
    "id": "k5m1",
    "chapter": 5,
    "module": 1,
    "chapterTitle": {
      "de": "Grundrechte",
      "en": "Fundamental Rights",
      "uk": "Основні права",
      "ru": "Основные права"
    },
    "title": {
      "de": "Grundrechte – Teil 1",
      "en": "Fundamental Rights – Part 1",
      "uk": "Основні права — частина 1",
      "ru": "Основные права — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k4m2",
    "sbCards": []
  },
  {
    "id": "k5m2",
    "chapter": 5,
    "module": 2,
    "chapterTitle": {
      "de": "Grundrechte",
      "en": "Fundamental Rights",
      "uk": "Основні права",
      "ru": "Основные права"
    },
    "title": {
      "de": "Grundrechte – Teil 2",
      "en": "Fundamental Rights – Part 2",
      "uk": "Основні права — частина 2",
      "ru": "Основные права — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k5m1",
    "sbCards": []
  },
  {
    "id": "k5m3",
    "chapter": 5,
    "module": 3,
    "chapterTitle": {
      "de": "Grundrechte",
      "en": "Fundamental Rights",
      "uk": "Основні права",
      "ru": "Основные права"
    },
    "title": {
      "de": "Grundrechte – Teil 3",
      "en": "Fundamental Rights – Part 3",
      "uk": "Основні права — частина 3",
      "ru": "Основные права — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k5m2",
    "sbCards": []
  },
  {
    "id": "k5m4",
    "chapter": 5,
    "module": 4,
    "chapterTitle": {
      "de": "Grundrechte",
      "en": "Fundamental Rights",
      "uk": "Основні права",
      "ru": "Основные права"
    },
    "title": {
      "de": "Grundrechte – Teil 4",
      "en": "Fundamental Rights – Part 4",
      "uk": "Основні права — частина 4",
      "ru": "Основные права — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k5m3",
    "sbCards": []
  },
  {
    "id": "k6m1",
    "chapter": 6,
    "module": 1,
    "chapterTitle": {
      "de": "Wahlen und Beteiligung",
      "en": "Elections and Participation",
      "uk": "Вибори та участь",
      "ru": "Выборы и участие"
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 1",
      "en": "Elections and Participation – Part 1",
      "uk": "Вибори та участь — частина 1",
      "ru": "Выборы и участие — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k5m4",
    "sbCards": []
  },
  {
    "id": "k6m2",
    "chapter": 6,
    "module": 2,
    "chapterTitle": {
      "de": "Wahlen und Beteiligung",
      "en": "Elections and Participation",
      "uk": "Вибори та участь",
      "ru": "Выборы и участие"
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 2",
      "en": "Elections and Participation – Part 2",
      "uk": "Вибори та участь — частина 2",
      "ru": "Выборы и участие — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k6m1",
    "sbCards": []
  },
  {
    "id": "k6m3",
    "chapter": 6,
    "module": 3,
    "chapterTitle": {
      "de": "Wahlen und Beteiligung",
      "en": "Elections and Participation",
      "uk": "Вибори та участь",
      "ru": "Выборы и участие"
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 3",
      "en": "Elections and Participation – Part 3",
      "uk": "Вибори та участь — частина 3",
      "ru": "Выборы и участие — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k6m2",
    "sbCards": []
  },
  {
    "id": "k6m4",
    "chapter": 6,
    "module": 4,
    "chapterTitle": {
      "de": "Wahlen und Beteiligung",
      "en": "Elections and Participation",
      "uk": "Вибори та участь",
      "ru": "Выборы и участие"
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 4",
      "en": "Elections and Participation – Part 4",
      "uk": "Вибори та участь — частина 4",
      "ru": "Выборы и участие — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k6m3",
    "sbCards": []
  },
  {
    "id": "k7m1",
    "chapter": 7,
    "module": 1,
    "chapterTitle": {
      "de": "Parteien",
      "en": "Political Parties",
      "uk": "Партії",
      "ru": "Партии"
    },
    "title": {
      "de": "Parteien",
      "en": "Political Parties",
      "uk": "Партії",
      "ru": "Партии"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k6m4",
    "sbCards": []
  },
  {
    "id": "k8m1",
    "chapter": 8,
    "module": 1,
    "chapterTitle": {
      "de": "Aufgaben des Staates",
      "en": "Tasks of the State",
      "uk": "Завдання держави",
      "ru": "Задачи государства"
    },
    "title": {
      "de": "Aufgaben des Staates",
      "en": "Tasks of the State",
      "uk": "Завдання держави",
      "ru": "Задачи государства"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k7m1",
    "sbCards": []
  },
  {
    "id": "k9m1",
    "chapter": 9,
    "module": 1,
    "chapterTitle": {
      "de": "Pflichten",
      "en": "Civic Duties",
      "uk": "Обовʼязки",
      "ru": "Обязанности"
    },
    "title": {
      "de": "Pflichten",
      "en": "Civic Duties",
      "uk": "Обовʼязки",
      "ru": "Обязанности"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k8m1",
    "sbCards": []
  },
  {
    "id": "k10m1",
    "chapter": 10,
    "module": 1,
    "chapterTitle": {
      "de": "Staatssymbole",
      "en": "National Symbols",
      "uk": "Державні символи",
      "ru": "Государственные символы"
    },
    "title": {
      "de": "Staatssymbole",
      "en": "National Symbols",
      "uk": "Державні символи",
      "ru": "Государственные символы"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k9m1",
    "sbCards": []
  },
  {
    "id": "k11m1",
    "chapter": 11,
    "module": 1,
    "chapterTitle": {
      "de": "Kommune",
      "en": "Municipality",
      "uk": "Громада (Kommune)",
      "ru": "Община (Kommune)"
    },
    "title": {
      "de": "Kommune – Teil 1",
      "en": "Municipality – Part 1",
      "uk": "Громада (Kommune) — частина 1",
      "ru": "Община (Kommune) — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k10m1",
    "sbCards": []
  },
  {
    "id": "k11m2",
    "chapter": 11,
    "module": 2,
    "chapterTitle": {
      "de": "Kommune",
      "en": "Municipality",
      "uk": "Громада (Kommune)",
      "ru": "Община (Kommune)"
    },
    "title": {
      "de": "Kommune – Teil 2",
      "en": "Municipality – Part 2",
      "uk": "Громада (Kommune) — частина 2",
      "ru": "Община (Kommune) — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k11m1",
    "sbCards": []
  },
  {
    "id": "k12m1",
    "chapter": 12,
    "module": 1,
    "chapterTitle": {
      "de": "Recht und Alltag",
      "en": "Law and Everyday Life",
      "uk": "Право і повсякдення",
      "ru": "Право и повседневная жизнь"
    },
    "title": {
      "de": "Recht und Alltag – Teil 1",
      "en": "Law and Everyday Life – Part 1",
      "uk": "Право і повсякдення — частина 1",
      "ru": "Право и повседневная жизнь — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k11m2",
    "sbCards": []
  },
  {
    "id": "k12m2",
    "chapter": 12,
    "module": 2,
    "chapterTitle": {
      "de": "Recht und Alltag",
      "en": "Law and Everyday Life",
      "uk": "Право і повсякдення",
      "ru": "Право и повседневная жизнь"
    },
    "title": {
      "de": "Recht und Alltag – Teil 2",
      "en": "Law and Everyday Life – Part 2",
      "uk": "Право і повсякдення — частина 2",
      "ru": "Право и повседневная жизнь — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k12m1",
    "sbCards": []
  },
  {
    "id": "k12m3",
    "chapter": 12,
    "module": 3,
    "chapterTitle": {
      "de": "Recht und Alltag",
      "en": "Law and Everyday Life",
      "uk": "Право і повсякдення",
      "ru": "Право и повседневная жизнь"
    },
    "title": {
      "de": "Recht und Alltag – Teil 3",
      "en": "Law and Everyday Life – Part 3",
      "uk": "Право і повсякдення — частина 3",
      "ru": "Право и повседневная жизнь — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k12m2",
    "sbCards": []
  },
  {
    "id": "k12m4",
    "chapter": 12,
    "module": 4,
    "chapterTitle": {
      "de": "Recht und Alltag",
      "en": "Law and Everyday Life",
      "uk": "Право і повсякдення",
      "ru": "Право и повседневная жизнь"
    },
    "title": {
      "de": "Recht und Alltag – Teil 4",
      "en": "Law and Everyday Life – Part 4",
      "uk": "Право і повсякдення — частина 4",
      "ru": "Право и повседневная жизнь — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k12m3",
    "sbCards": []
  },
  {
    "id": "k12m5",
    "chapter": 12,
    "module": 5,
    "chapterTitle": {
      "de": "Recht und Alltag",
      "en": "Law and Everyday Life",
      "uk": "Право і повсякдення",
      "ru": "Право и повседневная жизнь"
    },
    "title": {
      "de": "Recht und Alltag – Teil 5",
      "en": "Law and Everyday Life – Part 5",
      "uk": "Право і повсякдення — частина 5",
      "ru": "Право и повседневная жизнь — часть 5"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k12m4",
    "sbCards": []
  },
  {
    "id": "k13m1",
    "chapter": 13,
    "module": 1,
    "chapterTitle": {
      "de": "Der Nationalsozialismus und seine Folgen",
      "en": "National Socialism and Its Consequences",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": "Национал-социализм и его последствия"
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 1",
      "en": "National Socialism and Its Consequences – Part 1",
      "uk": "Націонал-соціалізм та його наслідки — частина 1",
      "ru": "Национал-социализм и его последствия — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k12m5",
    "sbCards": []
  },
  {
    "id": "k13m2",
    "chapter": 13,
    "module": 2,
    "chapterTitle": {
      "de": "Der Nationalsozialismus und seine Folgen",
      "en": "National Socialism and Its Consequences",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": "Национал-социализм и его последствия"
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 2",
      "en": "National Socialism and Its Consequences – Part 2",
      "uk": "Націонал-соціалізм та його наслідки — частина 2",
      "ru": "Национал-социализм и его последствия — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k13m1",
    "sbCards": []
  },
  {
    "id": "k13m3",
    "chapter": 13,
    "module": 3,
    "chapterTitle": {
      "de": "Der Nationalsozialismus und seine Folgen",
      "en": "National Socialism and Its Consequences",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": "Национал-социализм и его последствия"
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 3",
      "en": "National Socialism and Its Consequences – Part 3",
      "uk": "Націонал-соціалізм та його наслідки — частина 3",
      "ru": "Национал-социализм и его последствия — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k13m2",
    "sbCards": []
  },
  {
    "id": "k13m4",
    "chapter": 13,
    "module": 4,
    "chapterTitle": {
      "de": "Der Nationalsozialismus und seine Folgen",
      "en": "National Socialism and Its Consequences",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": "Национал-социализм и его последствия"
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 4",
      "en": "National Socialism and Its Consequences – Part 4",
      "uk": "Націонал-соціалізм та його наслідки — частина 4",
      "ru": "Национал-социализм и его последствия — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k13m3",
    "sbCards": []
  },
  {
    "id": "k14m1",
    "chapter": 14,
    "module": 1,
    "chapterTitle": {
      "de": "Wichtige Stationen nach 1945",
      "en": "Key Milestones After 1945",
      "uk": "Важливі віхи після 1945 року",
      "ru": "Важные вехи после 1945 года"
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 1",
      "en": "Key Milestones After 1945 – Part 1",
      "uk": "Важливі віхи після 1945 року — частина 1",
      "ru": "Важные вехи после 1945 года — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k13m4",
    "sbCards": []
  },
  {
    "id": "k14m2",
    "chapter": 14,
    "module": 2,
    "chapterTitle": {
      "de": "Wichtige Stationen nach 1945",
      "en": "Key Milestones After 1945",
      "uk": "Важливі віхи після 1945 року",
      "ru": "Важные вехи после 1945 года"
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 2",
      "en": "Key Milestones After 1945 – Part 2",
      "uk": "Важливі віхи після 1945 року — частина 2",
      "ru": "Важные вехи после 1945 года — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k14m1",
    "sbCards": []
  },
  {
    "id": "k14m3",
    "chapter": 14,
    "module": 3,
    "chapterTitle": {
      "de": "Wichtige Stationen nach 1945",
      "en": "Key Milestones After 1945",
      "uk": "Важливі віхи після 1945 року",
      "ru": "Важные вехи после 1945 года"
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 3",
      "en": "Key Milestones After 1945 – Part 3",
      "uk": "Важливі віхи після 1945 року — частина 3",
      "ru": "Важные вехи после 1945 года — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k14m2",
    "sbCards": []
  },
  {
    "id": "k14m4",
    "chapter": 14,
    "module": 4,
    "chapterTitle": {
      "de": "Wichtige Stationen nach 1945",
      "en": "Key Milestones After 1945",
      "uk": "Важливі віхи після 1945 року",
      "ru": "Важные вехи после 1945 года"
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 4",
      "en": "Key Milestones After 1945 – Part 4",
      "uk": "Важливі віхи після 1945 року — частина 4",
      "ru": "Важные вехи после 1945 года — часть 4"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k14m3",
    "sbCards": []
  },
  {
    "id": "k14m5",
    "chapter": 14,
    "module": 5,
    "chapterTitle": {
      "de": "Wichtige Stationen nach 1945",
      "en": "Key Milestones After 1945",
      "uk": "Важливі віхи після 1945 року",
      "ru": "Важные вехи после 1945 года"
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 5",
      "en": "Key Milestones After 1945 – Part 5",
      "uk": "Важливі віхи після 1945 року — частина 5",
      "ru": "Важные вехи после 1945 года — часть 5"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k14m4",
    "sbCards": []
  },
  {
    "id": "k15m1",
    "chapter": 15,
    "module": 1,
    "chapterTitle": {
      "de": "Wiedervereinigung",
      "en": "Reunification",
      "uk": "Воззʼєднання",
      "ru": "Воссоединение"
    },
    "title": {
      "de": "Wiedervereinigung – Teil 1",
      "en": "Reunification – Part 1",
      "uk": "Воззʼєднання — частина 1",
      "ru": "Воссоединение — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k14m5",
    "sbCards": []
  },
  {
    "id": "k15m2",
    "chapter": 15,
    "module": 2,
    "chapterTitle": {
      "de": "Wiedervereinigung",
      "en": "Reunification",
      "uk": "Воззʼєднання",
      "ru": "Воссоединение"
    },
    "title": {
      "de": "Wiedervereinigung – Teil 2",
      "en": "Reunification – Part 2",
      "uk": "Воззʼєднання — частина 2",
      "ru": "Воссоединение — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k15m1",
    "sbCards": []
  },
  {
    "id": "k16m1",
    "chapter": 16,
    "module": 1,
    "chapterTitle": {
      "de": "Deutschland in Europa",
      "en": "Germany in Europe",
      "uk": "Німеччина в Європі",
      "ru": "Германия в Европе"
    },
    "title": {
      "de": "Deutschland in Europa – Teil 1",
      "en": "Germany in Europe – Part 1",
      "uk": "Німеччина в Європі — частина 1",
      "ru": "Германия в Европе — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k15m2",
    "sbCards": []
  },
  {
    "id": "k16m2",
    "chapter": 16,
    "module": 2,
    "chapterTitle": {
      "de": "Deutschland in Europa",
      "en": "Germany in Europe",
      "uk": "Німеччина в Європі",
      "ru": "Германия в Европе"
    },
    "title": {
      "de": "Deutschland in Europa – Teil 2",
      "en": "Germany in Europe – Part 2",
      "uk": "Німеччина в Європі — частина 2",
      "ru": "Германия в Европе — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k16m1",
    "sbCards": []
  },
  {
    "id": "k16m3",
    "chapter": 16,
    "module": 3,
    "chapterTitle": {
      "de": "Deutschland in Europa",
      "en": "Germany in Europe",
      "uk": "Німеччина в Європі",
      "ru": "Германия в Европе"
    },
    "title": {
      "de": "Deutschland in Europa – Teil 3",
      "en": "Germany in Europe – Part 3",
      "uk": "Німеччина в Європі — частина 3",
      "ru": "Германия в Европе — часть 3"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k16m2",
    "sbCards": []
  },
  {
    "id": "k17m1",
    "chapter": 17,
    "module": 1,
    "chapterTitle": {
      "de": "Religiöse Vielfalt",
      "en": "Religious Diversity",
      "uk": "Релігійна різноманітність",
      "ru": "Религиозное многообразие"
    },
    "title": {
      "de": "Religiöse Vielfalt – Teil 1",
      "en": "Religious Diversity – Part 1",
      "uk": "Релігійна різноманітність — частина 1",
      "ru": "Религиозное многообразие — часть 1"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k16m3",
    "sbCards": []
  },
  {
    "id": "k17m2",
    "chapter": 17,
    "module": 2,
    "chapterTitle": {
      "de": "Religiöse Vielfalt",
      "en": "Religious Diversity",
      "uk": "Релігійна різноманітність",
      "ru": "Религиозное многообразие"
    },
    "title": {
      "de": "Religiöse Vielfalt – Teil 2",
      "en": "Religious Diversity – Part 2",
      "uk": "Релігійна різноманітність — частина 2",
      "ru": "Религиозное многообразие — часть 2"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k17m1",
    "sbCards": []
  },
  {
    "id": "k18m1",
    "chapter": 18,
    "module": 1,
    "chapterTitle": {
      "de": "Bildung",
      "en": "Education",
      "uk": "Освіта",
      "ru": "Образование"
    },
    "title": {
      "de": "Bildung",
      "en": "Education",
      "uk": "Освіта",
      "ru": "Образование"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k17m2",
    "sbCards": []
  },
  {
    "id": "k19m1",
    "chapter": 19,
    "module": 1,
    "chapterTitle": {
      "de": "Migrationsgeschichte",
      "en": "History of Migration",
      "uk": "Історія міграції",
      "ru": "История миграции"
    },
    "title": {
      "de": "Migrationsgeschichte",
      "en": "History of Migration",
      "uk": "Історія міграції",
      "ru": "История миграции"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k18m1",
    "sbCards": []
  },
  {
    "id": "k20m1",
    "chapter": 20,
    "module": 1,
    "chapterTitle": {
      "de": "Interkulturelles Zusammenleben",
      "en": "Intercultural Coexistence",
      "uk": "Міжкультурне співжиття",
      "ru": "Межкультурное сосуществование"
    },
    "title": {
      "de": "Interkulturelles Zusammenleben",
      "en": "Intercultural Coexistence",
      "uk": "Міжкультурне співжиття",
      "ru": "Межкультурное сосуществование"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k19m1",
    "sbCards": []
  },
  {
    "id": "k21m1",
    "chapter": 21,
    "module": 1,
    "chapterTitle": {
      "de": "Fragen zu meinem Bundesland",
      "en": "Questions About My Federal State",
      "uk": "Питання про мою землю",
      "ru": "Вопросы о моей федеральной земле"
    },
    "title": {
      "de": "Fragen zu meinem Bundesland",
      "en": "Questions About My Federal State",
      "uk": "Питання про мою землю",
      "ru": "Вопросы о моей федеральной земле"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [],
    "unlockAfter": "k20m1",
    "sbCards": []
  }
];
var VOCAB = [];
var DIALOGE = [];

// ── QUIZ ─────────────────────────────────────────────────────
// Формат питання (порядок ключів фіксований):
// {
//   id:       'lid_001',            // унікальний рядок
//   cat:      'demokratie',         // id з CATS
//   region:   'BY',                 // опційно: id з REGIONS (рядок або масив); без поля — для всіх
//   img:      'lid_001.png',        // опційно: картинка питання; файл лежить у img/Leben-in-Deutschland/
//   question: { de:'...', en:'', uk:'', ru:'' },
//   answers: [                      // рівно 4, одна з correct:true
//     { de:'...', en:'', uk:'', ru:'', correct:true },
//     { de:'...', en:'', uk:'', ru:'', img:'lid_001_b.png' },  // img — опційно (відповідь-картинка)
//     ...
//   ]
// }
// Переклади (en/uk/ru) лишаються порожніми "" — застосунок тоді показує німецький текст.
var QUIZ = [
  {
    id: "lid_001",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …", en: "In Germany, people are allowed to speak openly against the government because …", uk: "У Німеччині люди можуть відкрито говорити проти уряду, тому що …", ru: "В Германии люди могут открыто высказываться против правительства, потому что …" },
    answers: [
      { de: "hier Religionsfreiheit gilt.", en: "freedom of religion applies here.", uk: "тут діє свобода віросповідання.", ru: "здесь действует свобода вероисповедания." },
      { de: "die Menschen Steuern zahlen.", en: "people pay taxes.", uk: "люди сплачують податки.", ru: "люди платят налоги." },
      { de: "die Menschen das Wahlrecht haben.", en: "people have the right to vote.", uk: "люди мають право голосу.", ru: "люди имеют право голоса." },
      { de: "hier Meinungsfreiheit gilt.", en: "freedom of expression applies here.", uk: "тут діє свобода слова.", ru: "здесь действует свобода слова.", correct: true },
    ]
  },
  {
    id: "lid_002",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …", en: "In Germany, until their child is 14, parents can decide whether the child takes part in the following at school: …", uk: "У Німеччині батьки можуть до 14-річного віку дитини вирішувати, чи візьме вона участь у школі в …", ru: "В Германии родители могут до достижения ребёнком 14 лет решать, будет ли он посещать в школе …" },
    answers: [
      { de: "Geschichtsunterricht teilnimmt.", en: "history lessons.", uk: "уроках історії.", ru: "уроки истории." },
      { de: "Religionsunterricht teilnimmt.", en: "religious education.", uk: "уроках релігії.", ru: "уроки религии.", correct: true },
      { de: "Politikunterricht teilnimmt.", en: "politics lessons.", uk: "уроках політики.", ru: "уроки политики." },
      { de: "Sprachunterricht teilnimmt.", en: "language lessons.", uk: "уроках мови.", ru: "уроки языка." },
    ]
  },
  {
    id: "lid_003",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?", en: "Germany is a state governed by the rule of law (Rechtsstaat). What does that mean?", uk: "Німеччина — правова держава. Що це означає?", ru: "Германия — правовое государство (Rechtsstaat). Что это означает?" },
    answers: [
      { de: "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.", en: "All residents and the state must abide by the law.", uk: "Усі жителі та держава зобовʼязані дотримуватися законів.", ru: "Все жители и государство обязаны соблюдать законы.", correct: true },
      { de: "Der Staat muss sich nicht an die Gesetze halten.", en: "The state does not have to abide by the law.", uk: "Держава не зобовʼязана дотримуватися законів.", ru: "Государство не обязано соблюдать законы." },
      { de: "Nur Deutsche müssen die Gesetze befolgen.", en: "Only Germans have to obey the law.", uk: "Лише німці зобовʼязані виконувати закони.", ru: "Законы обязаны соблюдать только немцы." },
      { de: "Die Gerichte machen die Gesetze.", en: "The courts make the laws.", uk: "Закони створюють суди.", ru: "Законы создают суды." },
    ]
  },
  {
    id: "lid_004",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Recht gehört zu den Grundrechten in Deutschland?", en: "Which right is one of the fundamental rights in Germany?", uk: "Яке право належить до основних прав у Німеччині?", ru: "Какое право относится к основным правам в Германии?" },
    answers: [
      { de: "Waffenbesitz", en: "owning weapons", uk: "володіння зброєю", ru: "владение оружием" },
      { de: "Faustrecht", en: "law of the jungle (might makes right)", uk: "право сильного", ru: "кулачное право (право сильного)" },
      { de: "Meinungsfreiheit", en: "freedom of expression", uk: "свобода слова", ru: "свобода слова", correct: true },
      { de: "Selbstjustiz", en: "taking the law into one’s own hands (vigilante justice)", uk: "самосуд", ru: "самосуд" },
    ]
  },
  {
    id: "lid_005",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland sind frei. Was bedeutet das?", en: "Elections in Germany are free. What does that mean?", uk: "Вибори в Німеччині вільні. Що це означає?", ru: "Выборы в Германии свободные. Что это означает?" },
    answers: [
      { de: "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.", en: "You may accept money for voting for a particular candidate.", uk: "Можна брати гроші за те, що голосуєш за певного кандидата/певну кандидатку.", ru: "Можно брать деньги за то, что голосуешь за определённого кандидата." },
      { de: "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", en: "Only people who have never been in prison are allowed to vote.", uk: "Голосувати можуть лише ті, хто ніколи не сидів у вʼязниці.", ru: "Голосовать могут только те, кто никогда не сидел в тюрьме." },
      { de: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.", en: "Voters must not be influenced or forced to vote in a particular way, and must not suffer any disadvantages because of their vote.", uk: "Виборця не можна ні схиляти до певного голосування, ні примушувати до нього, і він не повинен зазнавати жодних негативних наслідків через свій вибір.", ru: "На избирателя нельзя оказывать влияние или принуждать его голосовать определённым образом, и он не должен иметь из-за своего голосования никаких неудобств.", correct: true },
      { de: "Alle wahlberechtigten Personen müssen wählen.", en: "All eligible persons are required to vote.", uk: "Усі, хто має право голосу, зобовʼязані голосувати.", ru: "Все лица, имеющие право голоса, обязаны голосовать." },
    ]
  },
  {
    id: "lid_006",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Wie heißt die deutsche Verfassung?", en: "What is the German constitution called?", uk: "Як називається німецька конституція?", ru: "Как называется конституция Германии?" },
    answers: [
      { de: "Volksgesetz", en: "People’s Law (Volksgesetz)", uk: "Народний закон", ru: "Народный закон (Volksgesetz)" },
      { de: "Bundesgesetz", en: "Federal Law (Bundesgesetz)", uk: "Федеральний закон", ru: "Федеральный закон (Bundesgesetz)" },
      { de: "Deutsches Gesetz", en: "German Law (Deutsches Gesetz)", uk: "Німецький закон", ru: "Германский закон (Deutsches Gesetz)" },
      { de: "Grundgesetz", en: "Basic Law (Grundgesetz)", uk: "Основний закон", ru: "Основной закон (Grundgesetz)", correct: true },
    ]
  },
  {
    id: "lid_007",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …", en: "Which right is one of the fundamental rights guaranteed by the German constitution? The right to …", uk: "Яке право належить до основних прав, гарантованих німецькою конституцією? Право на …", ru: "Какое право относится к основным правам, гарантированным конституцией Германии? Право на …" },
    answers: [
      { de: "Glaubens- und Gewissensfreiheit", en: "freedom of faith and conscience", uk: "свободу віросповідання і совісті", ru: "свободу веры и совести", correct: true },
      { de: "Unterhaltung", en: "entertainment", uk: "розваги", ru: "развлечения" },
      { de: "Arbeit", en: "work", uk: "працю", ru: "труд" },
      { de: "Wohnung", en: "housing", uk: "житло", ru: "жильё" },
    ]
  },
  {
    id: "lid_008",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Was steht nicht im Grundgesetz von Deutschland?", en: "What is not in the Basic Law of Germany?", uk: "Чого немає в Основному законі Німеччини?", ru: "Чего нет в Основном законе Германии?" },
    answers: [
      { de: "Die Würde des Menschen ist unantastbar.", en: "Human dignity is inviolable.", uk: "Гідність людини недоторканна.", ru: "Достоинство человека неприкосновенно." },
      { de: "Alle sollen gleich viel Geld haben.", en: "Everyone should have the same amount of money.", uk: "Усі повинні мати однакову кількість грошей.", ru: "У всех должно быть одинаковое количество денег.", correct: true },
      { de: "Jeder Mensch darf seine Meinung sagen.", en: "Every person may express their opinion.", uk: "Кожна людина має право висловлювати свою думку.", ru: "Каждый человек вправе высказывать своё мнение." },
      { de: "Alle sind vor dem Gesetz gleich.", en: "Everyone is equal before the law.", uk: "Усі рівні перед законом.", ru: "Все равны перед законом." },
    ]
  },
  {
    id: "lid_009",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf …", en: "Which fundamental right applies in Germany only to foreigners? The fundamental right to …", uk: "Яке основне право в Німеччині діє лише для іноземців? Основне право на …", ru: "Какое основное право действует в Германии только для иностранцев? Основное право на …" },
    answers: [
      { de: "Schutz der Familie", en: "protection of the family", uk: "захист сімʼї", ru: "защиту семьи" },
      { de: "Menschenwürde", en: "human dignity", uk: "людську гідність", ru: "человеческое достоинство" },
      { de: "Asyl", en: "asylum", uk: "притулок", ru: "убежище", correct: true },
      { de: "Meinungsfreiheit", en: "freedom of expression", uk: "свобода слова", ru: "свободу мнений" },
    ]
  },
  {
    id: "lid_010",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Was ist mit dem deutschen Grundgesetz vereinbar?", en: "What is compatible with the German Basic Law?", uk: "Що сумісне з німецьким Основним законом?", ru: "Что совместимо с Основным законом Германии?" },
    answers: [
      { de: "die Prügelstrafe", en: "corporal punishment", uk: "тілесне покарання", ru: "телесные наказания" },
      { de: "die Folter", en: "torture", uk: "катування", ru: "пытки" },
      { de: "die Todesstrafe", en: "the death penalty", uk: "смертна кара", ru: "смертная казнь" },
      { de: "die Geldstrafe", en: "a fine", uk: "грошовий штраф", ru: "денежный штраф", correct: true },
    ]
  },
  {
    id: "lid_011",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?", en: "What is the constitution of the Federal Republic of Germany called?", uk: "Як називається конституція Федеративної Республіки Німеччина?", ru: "Как называется конституция Федеративной Республики Германия?" },
    answers: [
      { de: "Grundgesetz", en: "Basic Law (Grundgesetz)", uk: "Основний закон", ru: "Основной закон (Grundgesetz)", correct: true },
      { de: "Bundesverfassung", en: "Federal Constitution (Bundesverfassung)", uk: "Федеральна конституція", ru: "Федеральная конституция (Bundesverfassung)" },
      { de: "Gesetzbuch", en: "Code of Law (Gesetzbuch)", uk: "Збірник законів", ru: "Свод законов (Gesetzbuch)" },
      { de: "Verfassungsvertrag", en: "Constitutional Treaty (Verfassungsvertrag)", uk: "Конституційний договір", ru: "Конституционный договор (Verfassungsvertrag)" },
    ]
  },
  {
    id: "lid_012",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?", en: "A party in the German Bundestag wants to abolish freedom of the press. Is that possible?", uk: "Одна партія в Бундестазі Німеччини хоче скасувати свободу преси. Чи це можливо?", ru: "Партия в Бундестаге хочет отменить свободу прессы. Возможно ли это?" },
    answers: [
      { de: "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.", en: "Yes, if more than half of the members of the Bundestag are in favour.", uk: "Так, якщо за це проголосує більше половини депутатів Бундестагу.", ru: "Да, если за это проголосует более половины депутатов Бундестага." },
      { de: "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.", en: "Yes, but two thirds of the members of the Bundestag must be in favour.", uk: "Так, але для цього за це мають проголосувати дві третини депутатів Бундестагу.", ru: "Да, но для этого необходимы голоса двух третей депутатов Бундестага." },
      { de: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.", en: "No, because freedom of the press is a fundamental right. It cannot be abolished.", uk: "Ні, тому що свобода преси — це основне право. Її не можна скасувати.", ru: "Нет, потому что свобода прессы — основное право. Её нельзя отменить.", correct: true },
      { de: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.", en: "No, because only the Bundesrat can abolish freedom of the press.", uk: "Ні, тому що скасувати свободу преси може лише Бундесрат.", ru: "Нет, потому что свободу прессы может отменить только Бундесрат." },
    ]
  },
  {
    id: "lid_013",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Im Parlament steht der Begriff „Opposition“ für …", en: "In parliament, the term “opposition” stands for …", uk: "У парламенті поняття «опозиція» означає …", ru: "В парламенте понятие «оппозиция» означает …" },
    answers: [
      { de: "die regierenden Parteien.", en: "the governing parties.", uk: "партії, що перебувають при владі.", ru: "правящие партии." },
      { de: "die Fraktion mit den meisten Abgeordneten.", en: "the parliamentary group with the most members.", uk: "фракцію з найбільшою кількістю депутатів.", ru: "фракцию с наибольшим числом депутатов." },
      { de: "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.", en: "all parties that managed to clear the 5% threshold in the last election.", uk: "усі партії, які змогли подолати 5-відсотковий барʼєр на останніх виборах.", ru: "все партии, которые на последних выборах преодолели пятипроцентный барьер." },
      { de: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.", en: "all members of parliament who do not belong to the governing party/parties.", uk: "усіх депутатів, які не належать до правлячої партії/правлячих партій.", ru: "всех депутатов, не принадлежащих к правящей партии (правящим партиям).", correct: true },
    ]
  },
  {
    id: "lid_014",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Meinungsfreiheit in Deutschland heißt, dass ich …", en: "Freedom of expression in Germany means that I …", uk: "Свобода слова в Німеччині означає, що я …", ru: "Свобода мнений в Германии означает, что я …" },
    answers: [
      { de: "Passanten auf der Straße beschimpfen darf.", en: "may insult passers-by on the street.", uk: "можу ображати перехожих на вулиці.", ru: "могу оскорблять прохожих на улице." },
      { de: "meine Meinung im Internet äußern kann.", en: "can express my opinion on the internet.", uk: "можу висловлювати свою думку в інтернеті.", ru: "могу выражать своё мнение в интернете.", correct: true },
      { de: "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.", en: "may publicly wear Nazi, Hamas or Islamic State symbols.", uk: "можу публічно носити нацистську символіку, символіку ХАМАС або «Ісламської держави».", ru: "могу публично носить нацистскую символику, символику ХАМАС или «Исламского государства»." },
      { de: "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.", en: "may express my opinion only as long as I do not contradict the government.", uk: "можу висловлювати свою думку лише доти, доки не суперечу уряду.", ru: "могу выражать своё мнение только до тех пор, пока не противоречу правительству." },
    ]
  },
  {
    id: "lid_015",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Was verbietet das deutsche Grundgesetz?", en: "What does the German Basic Law prohibit?", uk: "Що забороняє німецький Основний закон?", ru: "Что запрещает Основной закон Германии?" },
    answers: [
      { de: "Militärdienst", en: "military service", uk: "військову службу", ru: "военную службу" },
      { de: "Zwangsarbeit", en: "forced labour", uk: "примусову працю", ru: "принудительный труд", correct: true },
      { de: "freie Berufswahl", en: "free choice of occupation", uk: "вільний вибір професії", ru: "свободный выбор профессии" },
      { de: "Arbeit im Ausland", en: "working abroad", uk: "роботу за кордоном", ru: "работу за границей" },
    ]
  },
  {
    id: "lid_016",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?", en: "When is freedom of expression restricted in Germany?", uk: "Коли в Німеччині обмежується свобода слова?", ru: "Когда в Германии ограничивается свобода мнений?" },
    answers: [
      { de: "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen", en: "when false claims about individual people are publicly spread", uk: "при публічному поширенні неправдивих тверджень про окремих осіб", ru: "при публичном распространении ложных утверждений о конкретных людях", correct: true },
      { de: "bei Meinungsäußerungen über die Bundesregierung", en: "when expressing opinions about the Federal Government", uk: "при висловлюваннях про федеральний уряд", ru: "при высказываниях о федеральном правительстве" },
      { de: "bei Diskussionen über Religionen", en: "when discussing religions", uk: "при дискусіях про релігії", ru: "при обсуждении религий" },
      { de: "bei Kritik am Staat", en: "when criticising the state", uk: "при критиці держави", ru: "при критике государства" },
    ]
  },
  {
    id: "lid_017",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Die deutschen Gesetze verbieten …", en: "German laws prohibit …", uk: "Німецькі закони забороняють …", ru: "Германские законы запрещают …" },
    answers: [
      { de: "Meinungsfreiheit der Einwohnerinnen und Einwohner.", en: "freedom of expression of the residents.", uk: "свободу слова жителів.", ru: "свободу мнений жителей." },
      { de: "Petitionen der Bürgerinnen und Bürger.", en: "petitions by citizens.", uk: "петиції громадян.", ru: "петиции граждан." },
      { de: "Versammlungsfreiheit der Einwohnerinnen und Einwohner.", en: "freedom of assembly of the residents.", uk: "свободу зібрань жителів.", ru: "свободу собраний жителей." },
      { de: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.", en: "unequal treatment of citizens by the state.", uk: "нерівне ставлення держави до громадян.", ru: "неравное обращение государства с гражданами.", correct: true },
    ]
  },
  {
    id: "lid_018",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?", en: "Which fundamental right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?", uk: "Яке основне право гарантовано статтею 1 Основного закону Федеративної Республіки Німеччина?", ru: "Какое основное право гарантировано статьёй 1 Основного закона Федеративной Республики Германия?" },
    answers: [
      { de: "die Unantastbarkeit der Menschenwürde", en: "the inviolability of human dignity", uk: "недоторканність людської гідності", ru: "неприкосновенность человеческого достоинства", correct: true },
      { de: "das Recht auf Leben", en: "the right to life", uk: "право на життя", ru: "право на жизнь" },
      { de: "Religionsfreiheit", en: "freedom of religion", uk: "свобода віросповідання", ru: "свобода вероисповедания" },
      { de: "Meinungsfreiheit", en: "freedom of expression", uk: "свобода слова", ru: "свобода мнений" },
    ]
  },
  {
    id: "lid_019",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?", en: "What is meant by the right of “Freizügigkeit” (freedom of movement) in Germany?", uk: "Що розуміють під правом «свободи пересування» в Німеччині?", ru: "Что понимается под правом на «свободу передвижения» (Freizügigkeit) в Германии?" },
    answers: [
      { de: "Man darf sich seinen Wohnort selbst aussuchen.", en: "You may choose your place of residence yourself.", uk: "Можна самостійно обирати місце проживання.", ru: "Можно самому выбирать место жительства.", correct: true },
      { de: "Man kann seinen Beruf wechseln.", en: "You can change your profession.", uk: "Можна змінювати професію.", ru: "Можно менять профессию." },
      { de: "Man darf sich für eine andere Religion entscheiden.", en: "You may decide to adopt a different religion.", uk: "Можна обирати іншу релігію.", ru: "Можно выбрать другую религию." },
      { de: "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.", en: "You may move around in public only lightly dressed.", uk: "Можна зʼявлятися на людях лише в легкому одязі.", ru: "Можно появляться в общественных местах только в лёгкой одежде." },
    ]
  },
  {
    id: "lid_020",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …", en: "A party in Germany pursues the goal of establishing a dictatorship. It is then …", uk: "Партія в Німеччині ставить собі за мету встановити диктатуру. Тоді вона …", ru: "Одна партия в Германии ставит целью установление диктатуры. Тогда она …" },
    answers: [
      { de: "tolerant.", en: "tolerant.", uk: "толерантна.", ru: "толерантна." },
      { de: "rechtsstaatlich orientiert.", en: "oriented towards the rule of law.", uk: "орієнтована на правову державу.", ru: "ориентирована на правовое государство." },
      { de: "gesetzestreu.", en: "law-abiding.", uk: "законослухняна.", ru: "законопослушна." },
      { de: "verfassungswidrig.", en: "unconstitutional.", uk: "антиконституційна.", ru: "антиконституционна.", correct: true },
    ]
  },
  {
    id: "lid_021",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welches ist das Wappen der Bundesrepublik Deutschland?", en: "Which is the coat of arms of the Federal Republic of Germany?", uk: "Який герб Федеративної Республіки Німеччина?", ru: "Какой из этих гербов — герб Федеративной Республики Германия?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_021_a1.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_021_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_021_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_021_a4.png" },
    ]
  },
  {
    id: "lid_022",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Was für eine Staatsform hat Deutschland?", en: "What form of government does Germany have?", uk: "Яка форма держави в Німеччині?", ru: "Какая форма государственного устройства в Германии?" },
    answers: [
      { de: "Monarchie", en: "monarchy", uk: "монархія", ru: "монархия" },
      { de: "Diktatur", en: "dictatorship", uk: "диктатура", ru: "диктатура" },
      { de: "Republik", en: "republic", uk: "республіка", ru: "республика", correct: true },
      { de: "Fürstentum", en: "principality", uk: "князівство", ru: "княжество" },
    ]
  },
  {
    id: "lid_023",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "In Deutschland sind die meisten Erwerbstätigen …", en: "In Germany, most people in employment …", uk: "У Німеччині більшість працюючих …", ru: "В Германии большинство работающих …" },
    answers: [
      { de: "in kleinen Familienunternehmen beschäftigt.", en: "work in small family businesses.", uk: "зайняті в невеликих сімейних підприємствах.", ru: "заняты в небольших семейных предприятиях." },
      { de: "ehrenamtlich für ein Bundesland tätig.", en: "work as volunteers for a federal state.", uk: "працюють на громадських засадах для федеральної землі.", ru: "работают на общественных началах на федеральную землю." },
      { de: "selbstständig mit einer eigenen Firma tätig.", en: "are self-employed with their own company.", uk: "працюють самозайнятими у власній фірмі.", ru: "работают самостоятельно в собственной фирме." },
      { de: "bei einer Firma oder Behörde beschäftigt.", en: "are employed by a company or public authority.", uk: "працюють у фірмі чи в органі влади.", ru: "работают в фирме или ведомстве по найму.", correct: true },
    ]
  },
  {
    id: "lid_024",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?", en: "How many federal states does the Federal Republic of Germany have?", uk: "Скільки федеральних земель налічує Федеративна Республіка Німеччина?", ru: "Сколько федеральных земель в Федеративной Республике Германия?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "15", en: "15", uk: "15", ru: "15" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "17", en: "17", uk: "17", ru: "17" },
    ]
  },
  {
    id: "lid_025",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Was ist kein Bundesland der Bundesrepublik Deutschland?", en: "Which of these is not a federal state of the Federal Republic of Germany?", uk: "Що не є федеральною землею Федеративної Республіки Німеччина?", ru: "Что не является федеральной землёй Федеративной Республики Германия?" },
    answers: [
      { de: "Elsass-Lothringen", en: "Alsace-Lorraine", uk: "Ельзас-Лотарингія", ru: "Эльзас-Лотарингия", correct: true },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia", uk: "Північний Рейн-Вестфалія", ru: "Северный Рейн-Вестфалия" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania", uk: "Мекленбург-Передня Померанія", ru: "Мекленбург-Передняя Померания" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt", uk: "Саксонія-Ангальт", ru: "Саксония-Анхальт" },
    ]
  },
  {
    id: "lid_026",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist …", en: "Germany is …", uk: "Німеччина — це …", ru: "Германия — это …" },
    answers: [
      { de: "eine kommunistische Republik.", en: "a communist republic.", uk: "комуністична республіка.", ru: "коммунистическая республика." },
      { de: "ein demokratischer und sozialer Bundesstaat.", en: "a democratic and social federal state.", uk: "демократична і соціальна федеративна держава.", ru: "демократическое и социальное федеративное государство.", correct: true },
      { de: "eine kapitalistische und soziale Monarchie.", en: "a capitalist and social monarchy.", uk: "капіталістична і соціальна монархія.", ru: "капиталистическая и социальная монархия." },
      { de: "ein sozialer und sozialistischer Bundesstaat.", en: "a social and socialist federal state.", uk: "соціальна і соціалістична федеративна держава.", ru: "социальное и социалистическое федеративное государство." },
    ]
  },
  {
    id: "lid_027",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist …", en: "Germany is …", uk: "Німеччина — це …", ru: "Германия — это …" },
    answers: [
      { de: "ein sozialistischer Staat.", en: "a socialist state.", uk: "соціалістична держава.", ru: "социалистическое государство." },
      { de: "ein Bundesstaat.", en: "a federal state.", uk: "федеративна держава.", ru: "федеративное государство.", correct: true },
      { de: "eine Diktatur.", en: "a dictatorship.", uk: "диктатура.", ru: "диктатура." },
      { de: "eine Monarchie.", en: "a monarchy.", uk: "монархія.", ru: "монархия." },
    ]
  },
  {
    id: "lid_028",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?", en: "Who elects the members of the Bundestag in Germany?", uk: "Хто обирає в Німеччині депутатів до Бундестагу?", ru: "Кто в Германии избирает депутатов Бундестага?" },
    answers: [
      { de: "das Militär", en: "the military", uk: "військові", ru: "армия" },
      { de: "die Wirtschaft", en: "the business community", uk: "економіка", ru: "экономика" },
      { de: "das wahlberechtigte Volk", en: "the people entitled to vote", uk: "народ, який має право голосу", ru: "народ, обладающий избирательным правом", correct: true },
      { de: "die Verwaltung", en: "the administration", uk: "адміністрація", ru: "администрация" },
    ]
  },
  {
    id: "lid_029",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?", en: "Which animal is the heraldic animal of the Federal Republic of Germany?", uk: "Яка тварина є геральдичним символом Федеративної Республіки Німеччина?", ru: "Какое животное изображено на гербе Федеративной Республики Германия?" },
    answers: [
      { de: "Löwe", en: "lion", uk: "лев", ru: "лев" },
      { de: "Adler", en: "eagle", uk: "орел", ru: "орёл", correct: true },
      { de: "Bär", en: "bear", uk: "ведмідь", ru: "медведь" },
      { de: "Pferd", en: "horse", uk: "кінь", ru: "лошадь" },
    ]
  },
  {
    id: "lid_030",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist kein Merkmal unserer Demokratie?", en: "What is not a feature of our democracy?", uk: "Що не є ознакою нашої демократії?", ru: "Что не является признаком нашей демократии?" },
    answers: [
      { de: "regelmäßige Wahlen", en: "regular elections", uk: "регулярні вибори", ru: "регулярные выборы" },
      { de: "Pressezensur", en: "press censorship", uk: "цензура преси", ru: "цензура прессы", correct: true },
      { de: "Meinungsfreiheit", en: "freedom of expression", uk: "свобода слова", ru: "свобода мнений" },
      { de: "verschiedene Parteien", en: "different parties", uk: "різні партії", ru: "различные партии" },
    ]
  },
  {
    id: "lid_031",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …", en: "The cooperation of parties to form a government is called in Germany …", uk: "Співпрацю партій для формування уряду в Німеччині називають …", ru: "Сотрудничество партий для формирования правительства в Германии называется …" },
    answers: [
      { de: "Einheit.", en: "unity.", uk: "єдністю.", ru: "единство." },
      { de: "Koalition.", en: "coalition.", uk: "коаліцією.", ru: "коалиция.", correct: true },
      { de: "Ministerium.", en: "ministry.", uk: "міністерством.", ru: "министерство." },
      { de: "Fraktion.", en: "parliamentary group (Fraktion).", uk: "фракцією.", ru: "фракция." },
    ]
  },
  {
    id: "lid_032",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist keine staatliche Gewalt in Deutschland?", en: "What is not a branch of state power in Germany?", uk: "Що не є державною владою в Німеччині?", ru: "Что не является государственной властью в Германии?" },
    answers: [
      { de: "Gesetzgebung", en: "legislation", uk: "законодавство", ru: "законодательство" },
      { de: "Regierung", en: "government", uk: "уряд", ru: "правительство" },
      { de: "Presse", en: "the press", uk: "преса", ru: "пресса", correct: true },
      { de: "Rechtsprechung", en: "judiciary", uk: "правосуддя", ru: "судебная власть" },
    ]
  },
  {
    id: "lid_033",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Welche Aussage ist richtig? In Deutschland …", en: "Which statement is correct? In Germany …", uk: "Яке твердження правильне? У Німеччині …", ru: "Какое утверждение верно? В Германии …" },
    answers: [
      { de: "sind Staat und Religionsgemeinschaften voneinander getrennt.", en: "the state and religious communities are separate from each other.", uk: "держава і релігійні обʼєднання відокремлені одне від одного.", ru: "государство и религиозные общины отделены друг от друга.", correct: true },
      { de: "bilden die Religionsgemeinschaften den Staat.", en: "the religious communities form the state.", uk: "релігійні обʼєднання утворюють державу.", ru: "религиозные общины образуют государство." },
      { de: "ist der Staat abhängig von den Religionsgemeinschaften.", en: "the state is dependent on the religious communities.", uk: "держава залежить від релігійних обʼєднань.", ru: "государство зависит от религиозных общин." },
      { de: "bilden Staat und Religionsgemeinschaften eine Einheit.", en: "the state and religious communities form a unity.", uk: "держава і релігійні обʼєднання становлять єдине ціле.", ru: "государство и религиозные общины составляют единое целое." },
    ]
  },
  {
    id: "lid_034",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist Deutschland nicht?", en: "What is Germany not?", uk: "Чим Німеччина не є?", ru: "Чем Германия не является?" },
    answers: [
      { de: "eine Demokratie", en: "a democracy", uk: "демократією", ru: "демократией" },
      { de: "ein Rechtsstaat", en: "a state governed by the rule of law", uk: "правовою державою", ru: "правовым государством" },
      { de: "eine Monarchie", en: "a monarchy", uk: "монархією", ru: "монархией", correct: true },
      { de: "ein Sozialstaat", en: "a welfare state", uk: "соціальною державою", ru: "социальным государством" },
    ]
  },
  {
    id: "lid_035",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Womit finanziert der deutsche Staat die Sozialversicherung?", en: "How does the German state finance social insurance?", uk: "За рахунок чого німецька держава фінансує соціальне страхування?", ru: "За счёт чего германское государство финансирует социальное страхование?" },
    answers: [
      { de: "Kirchensteuer", en: "church tax", uk: "церковного податку", ru: "церковного налога" },
      { de: "Sozialabgaben", en: "social contributions", uk: "соціальних внесків", ru: "социальных взносов", correct: true },
      { de: "Spendengeldern", en: "donations", uk: "пожертвувань", ru: "пожертвований" },
      { de: "Vereinsbeiträgen", en: "club membership fees", uk: "членських внесків обʼєднань", ru: "членских взносов в объединениях" },
    ]
  },
  {
    id: "lid_036",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?", en: "Which measure creates social security in Germany?", uk: "Який захід створює в Німеччині соціальну безпеку?", ru: "Какая мера обеспечивает в Германии социальную защищённость?" },
    answers: [
      { de: "die Krankenversicherung", en: "health insurance", uk: "медичне страхування", ru: "медицинское страхование", correct: true },
      { de: "die Autoversicherung", en: "car insurance", uk: "автострахування", ru: "автомобильное страхование" },
      { de: "die Gebäudeversicherung", en: "building insurance", uk: "страхування будівель", ru: "страхование зданий" },
      { de: "die Haftpflichtversicherung", en: "liability insurance", uk: "страхування цивільної відповідальності", ru: "страхование гражданской ответственности" },
    ]
  },
  {
    id: "lid_037",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?", en: "What are the heads of government of most federal states in Germany called?", uk: "Як називають керівників урядів більшості федеральних земель у Німеччині?", ru: "Как называются главы правительств большинства федеральных земель Германии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Senatorin/Senator", en: "Senator", uk: "сенатор/сенаторка", ru: "сенатор" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_038",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …", en: "The Federal Republic of Germany is a democratic and social …", uk: "Федеративна Республіка Німеччина — це демократична і соціальна …", ru: "Федеративная Республика Германия — это демократическое и социальное …" },
    answers: [
      { de: "Staatenverbund.", en: "union of states (Staatenverbund).", uk: "обʼєднання держав.", ru: "объединение государств (Staatenverbund)." },
      { de: "Bundesstaat.", en: "federal state (Bundesstaat).", uk: "федеративна держава.", ru: "федеративное государство (Bundesstaat).", correct: true },
      { de: "Staatenbund.", en: "confederation (Staatenbund).", uk: "конфедерація.", ru: "союз государств (Staatenbund)." },
      { de: "Zentralstaat.", en: "centralised state.", uk: "унітарна держава.", ru: "унитарное государство." },
    ]
  },
  {
    id: "lid_039",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Was hat jedes deutsche Bundesland?", en: "What does every German federal state have?", uk: "Що має кожна німецька федеральна земля?", ru: "Что есть у каждой федеральной земли Германии?" },
    answers: [
      { de: "eine eigene Außenministerin/einen eigenen Außenminister", en: "its own foreign minister", uk: "власного міністра/власну міністерку закордонних справ", ru: "собственный министр иностранных дел" },
      { de: "eine eigene Währung", en: "its own currency", uk: "власну валюту", ru: "собственная валюта" },
      { de: "eine eigene Armee", en: "its own army", uk: "власну армію", ru: "собственная армия" },
      { de: "eine eigene Regierung", en: "its own government", uk: "власний уряд", ru: "собственное правительство", correct: true },
    ]
  },
  {
    id: "lid_040",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Mit welchen Worten beginnt die deutsche Nationalhymne?", en: "With which words does the German national anthem begin?", uk: "Якими словами починається німецький національний гімн?", ru: "Какими словами начинается государственный гимн Германии?" },
    answers: [
      { de: "Völker, hört die Signale …", en: "“Peoples, hear the signals …”", uk: "«Народи, чуйте сигнали …»", ru: "«Народы, слушайте сигналы …»" },
      { de: "Einigkeit und Recht und Freiheit …", en: "“Unity and justice and freedom …”", uk: "«Єдність, право і свобода …»", ru: "«Единство, право и свобода …»", correct: true },
      { de: "Freude schöner Götterfunken …", en: "“Joy, beautiful spark of the gods …”", uk: "«Радість, іскро богів прекрасна …»", ru: "«Радость, прекрасная искра богов …»" },
      { de: "Deutschland einig Vaterland …", en: "“Germany, united fatherland …”", uk: "«Німеччино, єдина вітчизно …»", ru: "«Германия, единая отчизна …»" },
    ]
  },
  {
    id: "lid_041",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Warum gibt es in einer Demokratie mehr als eine Partei?", en: "Why is there more than one party in a democracy?", uk: "Чому в демократії існує більше ніж одна партія?", ru: "Почему в демократии существует более одной партии?" },
    answers: [
      { de: "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden", en: "because this way the different opinions of the citizens are represented", uk: "тому що так представлені різні думки громадян", ru: "потому что так представлены различные мнения граждан", correct: true },
      { de: "damit Bestechung in der Politik begrenzt wird", en: "so that bribery in politics is limited", uk: "щоб обмежити корупцію в політиці", ru: "чтобы ограничить коррупцию в политике" },
      { de: "um politische Demonstrationen zu verhindern", en: "to prevent political demonstrations", uk: "щоб запобігти політичним демонстраціям", ru: "чтобы предотвратить политические демонстрации" },
      { de: "um wirtschaftlichen Wettbewerb anzuregen", en: "to stimulate economic competition", uk: "щоб стимулювати економічну конкуренцію", ru: "чтобы стимулировать экономическую конкуренцию" },
    ]
  },
  {
    id: "lid_042",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wer beschließt in Deutschland ein neues Gesetz?", en: "Who passes a new law in Germany?", uk: "Хто ухвалює в Німеччині новий закон?", ru: "Кто в Германии принимает новый закон?" },
    answers: [
      { de: "die Regierung", en: "the government", uk: "уряд", ru: "правительство" },
      { de: "das Parlament", en: "the parliament", uk: "парламент", ru: "парламент", correct: true },
      { de: "die Gerichte", en: "the courts", uk: "суди", ru: "суды" },
      { de: "die Polizei", en: "the police", uk: "поліція", ru: "полиция" },
    ]
  },
  {
    id: "lid_043",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wann kann in Deutschland eine Partei verboten werden?", en: "When can a party be banned in Germany?", uk: "Коли в Німеччині партію можна заборонити?", ru: "Когда в Германии можно запретить партию?" },
    answers: [
      { de: "wenn ihr Wahlkampf zu teuer ist", en: "if its election campaign is too expensive", uk: "якщо її виборча кампанія надто дорога", ru: "если её предвыборная кампания слишком дорогая" },
      { de: "wenn sie gegen die Verfassung kämpft", en: "if it fights against the constitution", uk: "якщо вона виступає проти конституції", ru: "если она борется против конституции", correct: true },
      { de: "wenn sie Kritik am Staatsoberhaupt äußert", en: "if it criticises the head of state", uk: "якщо вона критикує главу держави", ru: "если она критикует главу государства" },
      { de: "wenn ihr Programm eine neue Richtung vorschlägt", en: "if its programme proposes a new direction", uk: "якщо її програма пропонує новий напрям", ru: "если её программа предлагает новое направление" },
    ]
  },
  {
    id: "lid_044",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?", en: "Whom can a citizen in Germany not elect directly?", uk: "Кого громадянин/громадянка в Німеччині не може обирати безпосередньо?", ru: "Кого гражданин в Германии не может избрать напрямую?" },
    answers: [
      { de: "Abgeordnete des EU-Parlaments", en: "members of the European Parliament", uk: "депутатів Європейського парламенту", ru: "депутатов Европарламента" },
      { de: "Die Bundespräsidentin/den Bundespräsidenten", en: "the Federal President", uk: "федерального президента/федеральну президентку", ru: "федерального президента", correct: true },
      { de: "Landtagsabgeordnete", en: "members of a state parliament (Landtag)", uk: "депутатів ландтагу", ru: "депутатов ландтага" },
      { de: "Bundestagsabgeordnete", en: "members of the Bundestag", uk: "депутатів Бундестагу", ru: "депутатов Бундестага" },
    ]
  },
  {
    id: "lid_045",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Zu welcher Versicherung gehört die Pflegeversicherung?", en: "Which type of insurance does long-term care insurance belong to?", uk: "До якого виду страхування належить страхування на випадок потреби в догляді?", ru: "К какому виду страхования относится страхование по уходу?" },
    answers: [
      { de: "Sozialversicherung", en: "social insurance", uk: "соціальне страхування", ru: "социальное страхование", correct: true },
      { de: "Unfallversicherung", en: "accident insurance", uk: "страхування від нещасних випадків", ru: "страхование от несчастных случаев" },
      { de: "Hausratsversicherung", en: "household contents insurance", uk: "страхування домашнього майна", ru: "страхование домашнего имущества" },
      { de: "Haftpflicht- und Feuerversicherung", en: "liability and fire insurance", uk: "страхування цивільної відповідальності та від пожежі", ru: "страхование гражданской ответственности и от пожара" },
    ]
  },
  {
    id: "lid_046",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?", en: "The German state has many tasks. Which task is one of them?", uk: "Німецька держава має багато завдань. Яке завдання до них належить?", ru: "У германского государства много задач. Какая задача к ним относится?" },
    answers: [
      { de: "Er baut Straßen und Schulen.", en: "It builds roads and schools.", uk: "Вона будує дороги і школи.", ru: "Оно строит дороги и школы.", correct: true },
      { de: "Er verkauft Lebensmittel und Kleidung.", en: "It sells food and clothing.", uk: "Вона продає продукти харчування та одяг.", ru: "Оно продаёт продукты и одежду." },
      { de: "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.", en: "It supplies all residents with newspapers free of charge.", uk: "Вона безкоштовно забезпечує всіх жителів газетами.", ru: "Оно бесплатно обеспечивает всех жителей газетами." },
      { de: "Er produziert Autos und Busse.", en: "It produces cars and buses.", uk: "Вона виробляє автомобілі й автобуси.", ru: "Оно производит автомобили и автобусы." },
    ]
  },
  {
    id: "lid_047",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?", en: "The German state has many tasks. Which task is not one of them?", uk: "Німецька держава має багато завдань. Яке завдання до них не належить?", ru: "У германского государства много задач. Какая задача к ним не относится?" },
    answers: [
      { de: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.", en: "It pays for holiday trips for all citizens.", uk: "Вона оплачує відпустки всім громадянам.", ru: "Оно оплачивает отпускные поездки всем гражданам.", correct: true },
      { de: "Er zahlt Kindergeld.", en: "It pays child benefit.", uk: "Вона виплачує допомогу на дітей.", ru: "Оно выплачивает пособие на детей." },
      { de: "Er unterstützt Museen.", en: "It supports museums.", uk: "Вона підтримує музеї.", ru: "Оно поддерживает музеи." },
      { de: "Er fördert Sportlerinnen und Sportler.", en: "It promotes athletes.", uk: "Вона підтримує спортсменів і спортсменок.", ru: "Оно поддерживает спортсменов." },
    ]
  },
  {
    id: "lid_048",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?", en: "Which body is not one of Germany’s constitutional bodies?", uk: "Який орган не належить до конституційних органів Німеччини?", ru: "Какой орган не относится к конституционным органам Германии?" },
    answers: [
      { de: "der Bundesrat", en: "the Bundesrat", uk: "Бундесрат", ru: "Бундесрат" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President", uk: "федеральний президент/федеральна президентка", ru: "федеральный президент" },
      { de: "die Bürgerversammlung", en: "the citizens’ assembly", uk: "збори громадян", ru: "собрание граждан", correct: true },
      { de: "die Regierung", en: "the government", uk: "уряд", ru: "правительство" },
    ]
  },
  {
    id: "lid_049",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Wer bestimmt in Deutschland die Schulpolitik?", en: "Who determines school policy in Germany?", uk: "Хто визначає в Німеччині шкільну політику?", ru: "Кто в Германии определяет школьную политику?" },
    answers: [
      { de: "die Lehrer und Lehrerinnen", en: "the teachers", uk: "вчителі й вчительки", ru: "учителя" },
      { de: "die Bundesländer", en: "the federal states", uk: "федеральні землі", ru: "федеральные земли", correct: true },
      { de: "das Familienministerium", en: "the Ministry for Family Affairs", uk: "міністерство у справах сімʼї", ru: "министерство по делам семьи" },
      { de: "die Universitäten", en: "the universities", uk: "університети", ru: "университеты" },
    ]
  },
  {
    id: "lid_050",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Die Wirtschaftsform in Deutschland nennt man …", en: "The economic system in Germany is called …", uk: "Економічну систему Німеччини називають …", ru: "Экономическая система Германии называется …" },
    answers: [
      { de: "freie Zentralwirtschaft.", en: "free centrally planned economy.", uk: "вільною централізованою економікою.", ru: "свободной централизованной экономикой." },
      { de: "soziale Marktwirtschaft.", en: "social market economy.", uk: "соціальною ринковою економікою.", ru: "социальной рыночной экономикой.", correct: true },
      { de: "gelenkte Zentralwirtschaft.", en: "directed centrally planned economy.", uk: "регульованою централізованою економікою.", ru: "управляемой централизованной экономикой." },
      { de: "Planwirtschaft.", en: "planned economy.", uk: "плановою економікою.", ru: "плановой экономикой." },
    ]
  },
  {
    id: "lid_051",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …", en: "A democratic state governed by the rule of law does not include the fact that …", uk: "До демократичної правової держави не належить те, що …", ru: "К демократическому правовому государству не относится то, что …" },
    answers: [
      { de: "Menschen sich kritisch über die Regierung äußern können.", en: "people can express criticism of the government.", uk: "люди можуть критично висловлюватися про уряд.", ru: "люди могут критически высказываться о правительстве." },
      { de: "Bürger friedlich demonstrieren gehen dürfen.", en: "citizens may demonstrate peacefully.", uk: "громадяни можуть мирно демонструвати.", ru: "граждане вправе мирно участвовать в демонстрациях." },
      { de: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.", en: "people are arrested by a private police force for no reason.", uk: "людей без причини заарештовує приватна поліція.", ru: "людей без причины арестовывает частная полиция.", correct: true },
      { de: "jemand ein Verbrechen begeht und deshalb verhaftet wird.", en: "someone commits a crime and is arrested for it.", uk: "хтось учиняє злочин і за це його заарештовують.", ru: "кто-то совершает преступление и поэтому арестован." },
    ]
  },
  {
    id: "lid_052",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Volkssouveränität“? Alle Staatsgewalt geht vom ...", en: "What does “popular sovereignty” mean? All state authority derives from the …", uk: "Що означає «народний суверенітет»? Уся державна влада виходить від …", ru: "Что означает «суверенитет народа»? Вся государственная власть исходит от …" },
    answers: [
      { de: "Volke aus.", en: "people.", uk: "народу.", ru: "народа.", correct: true },
      { de: "Bundestag aus.", en: "Bundestag.", uk: "Бундестагу.", ru: "Бундестага." },
      { de: "preußischen König aus.", en: "Prussian king.", uk: "прусського короля.", ru: "прусского короля." },
      { de: "Bundesverfassungsgericht aus.", en: "Federal Constitutional Court.", uk: "Федерального конституційного суду.", ru: "Федерального конституционного суда." },
    ]
  },
  {
    id: "lid_053",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Rechtsstaat“ in Deutschland?", en: "What does “Rechtsstaat” (state governed by the rule of law) mean in Germany?", uk: "Що означає «правова держава» в Німеччині?", ru: "Что означает «правовое государство» (Rechtsstaat) в Германии?" },
    answers: [
      { de: "Der Staat hat Recht.", en: "The state is right.", uk: "Держава має рацію.", ru: "Государство право." },
      { de: "Es gibt nur rechte Parteien.", en: "There are only right-wing parties.", uk: "Існують лише праві партії.", ru: "Существуют только правые партии." },
      { de: "Die Bürgerinnen und Bürger entscheiden über Gesetze.", en: "Citizens decide on laws.", uk: "Громадяни самі вирішують щодо законів.", ru: "Граждане решают вопросы о законах." },
      { de: "Der Staat muss die Gesetze einhalten.", en: "The state must abide by the law.", uk: "Держава зобовʼязана дотримуватися законів.", ru: "Государство обязано соблюдать законы.", correct: true },
    ]
  },
  {
    id: "lid_054",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was ist keine staatliche Gewalt in Deutschland?", en: "What is not a branch of state power in Germany?", uk: "Що не є державною владою в Німеччині?", ru: "Что не является государственной властью в Германии?" },
    answers: [
      { de: "Legislative", en: "legislative", uk: "законодавча влада", ru: "законодательная" },
      { de: "Judikative", en: "judicial", uk: "судова влада", ru: "судебная" },
      { de: "Exekutive", en: "executive", uk: "виконавча влада", ru: "исполнительная" },
      { de: "Direktive", en: "directive", uk: "директива", ru: "директивная", correct: true },
    ]
  },
  {
    id: "lid_055",
    lessonId: "k1m2",
    cat: "organe",
    img: "lid_055.png",
    imgCredit: "© Deutscher Bundestag/Achim Melde",
    question: { de: "Was zeigt dieses Bild?", en: "What does this picture show?", uk: "Що показує це зображення?", ru: "Что изображено на этой картинке?" },
    answers: [
      { de: "den Bundestagssitz in Berlin", en: "the Bundestag building in Berlin", uk: "будівлю Бундестагу в Берліні", ru: "здание Бундестага в Берлине", correct: true },
      { de: "das Bundesverfassungsgericht in Karlsruhe", en: "the Federal Constitutional Court in Karlsruhe", uk: "Федеральний конституційний суд у Карлсруе", ru: "Федеральный конституционный суд в Карлсруэ" },
      { de: "das Bundesratsgebäude in Berlin", en: "the Bundesrat building in Berlin", uk: "будівлю Бундесрату в Берліні", ru: "здание Бундесрата в Берлине" },
      { de: "das Bundeskanzleramt in Berlin", en: "the Federal Chancellery in Berlin", uk: "Федеральну канцелярію в Берліні", ru: "Федеральная канцелярия в Берлине" },
    ]
  },
  {
    id: "lid_056",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?", en: "Which office belongs to the municipal administration in Germany?", uk: "Яке відомство в Німеччині належить до адміністрації громади?", ru: "Какое ведомство в Германии относится к общинной администрации?" },
    answers: [
      { de: "Pfarramt", en: "parish office", uk: "парафіяльна канцелярія", ru: "приходская канцелярия" },
      { de: "Ordnungsamt", en: "public order office (Ordnungsamt)", uk: "відділ громадського порядку", ru: "ведомство общественного порядка (Ordnungsamt)", correct: true },
      { de: "Finanzamt", en: "tax office", uk: "податкова інспекція", ru: "налоговая инспекция" },
      { de: "Auswärtiges Amt", en: "Federal Foreign Office", uk: "Міністерство закордонних справ", ru: "Федеральное министерство иностранных дел" },
    ]
  },
  {
    id: "lid_057",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?", en: "Who is usually elected President of the German Bundestag?", uk: "Кого найчастіше обирають президентом/президенткою Бундестагу Німеччини?", ru: "Кого чаще всего избирают президентом Бундестага?" },
    answers: [
      { de: "die/der älteste Abgeordnete im Parlament", en: "the oldest member of parliament", uk: "найстаршого/найстаршу депутата в парламенті", ru: "самого старшего депутата парламента" },
      { de: "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes", en: "the Minister-President of the largest federal state", uk: "міністра-президента/міністра-президентку найбільшої федеральної землі", ru: "министра-президента самой большой федеральной земли" },
      { de: "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler", en: "a former Federal Chancellor", uk: "колишнього федерального канцлера/колишню федеральну канцлерку", ru: "бывшего федерального канцлера" },
      { de: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion", en: "a member of the strongest parliamentary group", uk: "депутата/депутатку від найсильнішої фракції", ru: "депутата от самой сильной фракции", correct: true },
    ]
  },
  {
    id: "lid_058",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?", en: "Who appoints the ministers of the Federal Government in Germany?", uk: "Хто призначає в Німеччині міністрів/міністерок федерального уряду?", ru: "Кто в Германии назначает министров федерального правительства?" },
    answers: [
      { de: "die Präsidentin/der Präsident des Bundesverfassungsgerichtes", en: "the President of the Federal Constitutional Court", uk: "президент/президентка Федерального конституційного суду", ru: "президент Федерального конституционного суда" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President", uk: "федеральний президент/федеральна президентка", ru: "федеральный президент", correct: true },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Bundesrat", uk: "президент/президентка Бундесрату", ru: "президент Бундесрата" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag", uk: "президент/президентка Бундестагу", ru: "президент Бундестага" },
    ]
  },
  {
    id: "lid_059",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?", en: "How many years ago was there first a Jewish community in the territory of present-day Germany?", uk: "Скільки років тому вперше зʼявилася єврейська громада на території нинішньої Німеччини?", ru: "Сколько лет назад впервые появилась еврейская община на территории нынешней Германии?" },
    answers: [
      { de: "vor etwa 300 Jahren", en: "about 300 years ago", uk: "приблизно 300 років тому", ru: "примерно 300 лет назад" },
      { de: "vor etwa 700 Jahren", en: "about 700 years ago", uk: "приблизно 700 років тому", ru: "примерно 700 лет назад" },
      { de: "vor etwa 1150 Jahren", en: "about 1,150 years ago", uk: "приблизно 1150 років тому", ru: "примерно 1150 лет назад" },
      { de: "vor etwa 1700 Jahren", en: "about 1,700 years ago", uk: "приблизно 1700 років тому", ru: "примерно 1700 лет назад", correct: true },
    ]
  },
  {
    id: "lid_060",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "In Deutschland gehören der Bundestag und der Bundesrat zur …", en: "In Germany, the Bundestag and the Bundesrat belong to the …", uk: "У Німеччині Бундестаг і Бундесрат належать до …", ru: "В Германии Бундестаг и Бундесрат относятся к …" },
    answers: [
      { de: "Exekutive.", en: "executive.", uk: "виконавчої влади.", ru: "исполнительной власти." },
      { de: "Legislative.", en: "legislative.", uk: "законодавчої влади.", ru: "законодательной власти.", correct: true },
      { de: "Direktive.", en: "directive.", uk: "директиви.", ru: "директивной власти." },
      { de: "Judikative.", en: "judiciary.", uk: "судової влади.", ru: "судебной власти." },
    ]
  },
  {
    id: "lid_061",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Volkssouveränität“?", en: "What does “popular sovereignty” mean?", uk: "Що означає «народний суверенітет»?", ru: "Что означает «суверенитет народа»?" },
    answers: [
      { de: "Die Königin/der König herrscht über das Volk.", en: "The king/queen rules over the people.", uk: "Король/королева править народом.", ru: "Король/королева правит народом." },
      { de: "Das Bundesverfassungsgericht steht über der Verfassung.", en: "The Federal Constitutional Court stands above the constitution.", uk: "Федеральний конституційний суд стоїть над конституцією.", ru: "Федеральный конституционный суд стоит выше конституции." },
      { de: "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.", en: "Interest groups exercise sovereignty together with the government.", uk: "Групи інтересів здійснюють суверенітет разом з урядом.", ru: "Объединения по интересам осуществляют суверенитет вместе с правительством." },
      { de: "Die Staatsgewalt geht vom Volke aus.", en: "State authority derives from the people.", uk: "Державна влада виходить від народу.", ru: "Государственная власть исходит от народа.", correct: true },
    ]
  },
  {
    id: "lid_062",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …", en: "When the parliament of a German federal state is elected, this is called a …", uk: "Коли обирають парламент німецької федеральної землі, це називають …", ru: "Выборы в парламент федеральной земли Германии называются …" },
    answers: [
      { de: "Kommunalwahl", en: "local election", uk: "муніципальними виборами", ru: "коммунальные выборы" },
      { de: "Landtagswahl", en: "state parliament election (Landtagswahl)", uk: "виборами до ландтагу", ru: "выборы в ландтаг", correct: true },
      { de: "Europawahl", en: "European election", uk: "виборами до Європейського парламенту", ru: "выборы в Европарламент" },
      { de: "Bundestagswahl", en: "federal election (Bundestagswahl)", uk: "виборами до Бундестагу", ru: "выборы в Бундестаг" },
    ]
  },
  {
    id: "lid_063",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was gehört in Deutschland nicht zur Exekutive?", en: "What does not belong to the executive in Germany?", uk: "Що в Німеччині не належить до виконавчої влади?", ru: "Что в Германии не относится к исполнительной власти?" },
    answers: [
      { de: "die Polizei", en: "the police", uk: "поліція", ru: "полиция" },
      { de: "die Gerichte", en: "the courts", uk: "суди", ru: "суды", correct: true },
      { de: "das Finanzamt", en: "the tax office", uk: "податкова інспекція", ru: "налоговая инспекция" },
      { de: "die Ministerien", en: "the ministries", uk: "міністерства", ru: "министерства" },
    ]
  },
  {
    id: "lid_064",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Die Bundesrepublik Deutschland ist heute gegliedert in …", en: "The Federal Republic of Germany is today divided into …", uk: "Федеративна Республіка Німеччина сьогодні поділяється на …", ru: "Федеративная Республика Германия сегодня делится на …" },
    answers: [
      { de: "vier Besatzungszonen.", en: "four occupation zones.", uk: "чотири окупаційні зони.", ru: "четыре оккупационные зоны." },
      { de: "einen Oststaat und einen Weststaat.", en: "an eastern state and a western state.", uk: "східну і західну державу.", ru: "восточное и западное государство." },
      { de: "16 Kantone.", en: "16 cantons.", uk: "16 кантонів.", ru: "16 кантонов." },
      { de: "Bund, Länder und Kommunen.", en: "the federation, the states and the municipalities.", uk: "федерацію, землі та громади.", ru: "федерацию, земли и общины.", correct: true },
    ]
  },
  {
    id: "lid_065",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …", en: "It is not one of the tasks of the German Bundestag …", uk: "До завдань Бундестагу Німеччини не належить …", ru: "К задачам Бундестага не относится …" },
    answers: [
      { de: "Gesetze zu entwerfen.", en: "to draft laws.", uk: "розробляти закони.", ru: "разрабатывать законы." },
      { de: "die Bundesregierung zu kontrollieren.", en: "to oversee the Federal Government.", uk: "контролювати федеральний уряд.", ru: "контролировать федеральное правительство." },
      { de: "die Bundeskanzlerin/den Bundeskanzler zu wählen.", en: "to elect the Federal Chancellor.", uk: "обирати федерального канцлера/федеральну канцлерку.", ru: "избирать федерального канцлера." },
      { de: "das Bundeskabinett zu bilden.", en: "to form the Federal Cabinet.", uk: "формувати федеральний кабінет.", ru: "формировать федеральный кабинет.", correct: true },
    ]
  },
  {
    id: "lid_066",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?", en: "Which cities have the largest Jewish communities in Germany?", uk: "У яких містах Німеччини найбільші єврейські громади?", ru: "В каких городах находятся самые большие еврейские общины Германии?" },
    answers: [
      { de: "Berlin und München", en: "Berlin and Munich", uk: "Берлін і Мюнхен", ru: "Берлин и Мюнхен", correct: true },
      { de: "Hamburg und Essen", en: "Hamburg and Essen", uk: "Гамбург і Ессен", ru: "Гамбург и Эссен" },
      { de: "Nürnberg und Stuttgart", en: "Nuremberg and Stuttgart", uk: "Нюрнберг і Штутгарт", ru: "Нюрнберг и Штутгарт" },
      { de: "Worms und Speyer", en: "Worms and Speyer", uk: "Вормс і Шпеєр", ru: "Вормс и Шпайер" },
    ]
  },
  {
    id: "lid_067",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?", en: "What is primarily a task of the federal states in Germany?", uk: "Що в Німеччині є переважно завданням федеральних земель?", ru: "Что в Германии прежде всего является задачей федеральных земель?" },
    answers: [
      { de: "Verteidigungspolitik", en: "defence policy", uk: "політика оборони", ru: "оборонная политика" },
      { de: "Außenpolitik", en: "foreign policy", uk: "зовнішня політика", ru: "внешняя политика" },
      { de: "Wirtschaftspolitik", en: "economic policy", uk: "економічна політика", ru: "экономическая политика" },
      { de: "Schulpolitik", en: "school policy", uk: "шкільна політика", ru: "школьная политика", correct: true },
    ]
  },
  {
    id: "lid_068",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Warum kontrolliert der Staat in Deutschland das Schulwesen?", en: "Why does the state control the school system in Germany?", uk: "Чому держава в Німеччині контролює шкільну систему?", ru: "Почему государство в Германии контролирует школьную систему?" },
    answers: [
      { de: "weil es in Deutschland nur staatliche Schulen gibt", en: "because there are only state schools in Germany", uk: "тому що в Німеччині існують лише державні школи", ru: "потому что в Германии есть только государственные школы" },
      { de: "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen", en: "because all pupils must have a school-leaving qualification", uk: "тому що всі учні та учениці повинні отримати шкільний атестат", ru: "потому что все ученики должны иметь школьный аттестат" },
      { de: "weil es in den Bundesländern verschiedene Schulen gibt", en: "because there are different schools in the federal states", uk: "тому що у федеральних землях існують різні школи", ru: "потому что в федеральных землях существуют разные школы" },
      { de: "weil es nach dem Grundgesetz seine Aufgabe ist", en: "because, according to the Basic Law, it is its task", uk: "тому що відповідно до Основного закону це її завдання", ru: "потому что это его задача согласно Основному закону", correct: true },
    ]
  },
  {
    id: "lid_069",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?", en: "The Federal Republic of Germany has a three-tier administrative structure. What is the lowest political level called?", uk: "Федеративна Республіка Німеччина має триступеневу структуру управління. Як називається найнижчий політичний рівень?", ru: "Федеративная Республика Германия имеет трёхуровневую структуру управления. Как называется самый низкий политический уровень?" },
    answers: [
      { de: "Stadträte", en: "city councils", uk: "міські ради", ru: "городские советы" },
      { de: "Landräte", en: "district administrators (Landräte)", uk: "ландрати", ru: "ландраты (Landräte)" },
      { de: "Gemeinden", en: "municipalities", uk: "громади", ru: "общины", correct: true },
      { de: "Bezirksämter", en: "district offices", uk: "районні управління", ru: "районные управления" },
    ]
  },
  {
    id: "lid_070",
    lessonId: "k1m2",
    cat: "organe",
    img: "lid_070.png",
    imgCredit: "© Bundesregierung/Engelbert Reineke",
    question: { de: "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?", en: "German Federal President Gustav Heinemann hands Helmut Schmidt the certificate of appointment as German Federal Chancellor in 1974. What is one of the tasks of the German Federal President?", uk: "Федеральний президент Німеччини Густав Гайнеман вручає Гельмуту Шмідту в 1974 році грамоту про призначення федеральним канцлером Німеччини. Що належить до завдань федерального президента/федеральної президентки Німеччини?", ru: "Федеральный президент Германии Густав Хайнеман вручает Гельмуту Шмидту в 1974 году грамоту о назначении федеральным канцлером. Что входит в задачи федерального президента Германии?" },
    answers: [
      { de: "Sie/Er führt die Regierungsgeschäfte.", en: "He/She runs the affairs of government.", uk: "Він/вона керує урядовими справами.", ru: "Он/она руководит текущими делами правительства." },
      { de: "Sie/Er kontrolliert die Regierungspartei.", en: "He/She oversees the governing party.", uk: "Він/вона контролює правлячу партію.", ru: "Он/она контролирует правящую партию." },
      { de: "Sie/Er wählt die Ministerinnen/Minister aus.", en: "He/She selects the ministers.", uk: "Він/вона добирає міністрів/міністерок.", ru: "Он/она выбирает министров." },
      { de: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.", en: "He/She proposes the Chancellor for election.", uk: "Він/вона пропонує кандидатуру канцлера/канцлерки для обрання.", ru: "Он/она предлагает кандидатуру канцлера для избрания.", correct: true },
    ]
  },
  {
    id: "lid_071",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf? Am häufigsten ist sie/er …", en: "Where does the German Federal Chancellor spend most of their time? Most often they are …", uk: "Де найчастіше перебуває федеральний канцлер/федеральна канцлерка Німеччини? Найчастіше він/вона …", ru: "Где чаще всего находится федеральный канцлер Германии? Чаще всего он/она находится …" },
    answers: [
      { de: "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "in Bonn, because the Federal Chancellery and the Bundestag are located there.", uk: "у Бонні, тому що там розташовані Федеральна канцелярія і Бундестаг.", ru: "в Бонне, потому что там находятся Федеральная канцелярия и Бундестаг." },
      { de: "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.", en: "at Meseberg Palace, the guest house of the Federal Government, to receive state guests.", uk: "у замку Мезеберг, гостьовому будинку федерального уряду, щоб приймати державних гостей.", ru: "в замке Мезеберг, гостевом доме федерального правительства, чтобы принимать государственных гостей." },
      { de: "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.", en: "at Bellevue Palace, the official residence of the Federal President, to receive state guests.", uk: "у палаці Бельвю, резиденції федерального президента/федеральної президентки, щоб приймати державних гостей.", ru: "в замке Бельвю, резиденции федерального президента, чтобы принимать государственных гостей." },
      { de: "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "in Berlin, because the Federal Chancellery and the Bundestag are located there.", uk: "у Берліні, тому що там розташовані Федеральна канцелярія і Бундестаг.", ru: "в Берлине, потому что там находятся Федеральная канцелярия и Бундестаг.", correct: true },
    ]
  },
  {
    id: "lid_072",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?", en: "What is the name of the current Federal Chancellor of Germany?", uk: "Як звати нинішнього федерального канцлера/нинішню федеральну канцлерку Німеччини?", ru: "Как зовут нынешнего федерального канцлера Германии?" },
    answers: [
      { de: "Gerhard Schröder", en: "Gerhard Schröder", uk: "Герхард Шредер", ru: "Герхард Шрёдер" },
      { de: "Angela Merkel", en: "Angela Merkel", uk: "Ангела Меркель", ru: "Ангела Меркель" },
      { de: "Ursula von der Leyen", en: "Ursula von der Leyen", uk: "Урсула фон дер Ляєн", ru: "Урсула фон дер Ляйен" },
      { de: "Friedrich Merz", en: "Friedrich Merz", uk: "Фрідріх Мерц", ru: "Фридрих Мерц", correct: true },
    ]
  },
  {
    id: "lid_073",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …", en: "The two largest parliamentary groups in the German Bundestag are currently …", uk: "Дві найбільші фракції в Бундестазі Німеччини наразі називаються …", ru: "Две самые большие фракции в Бундестаге в настоящее время — это …" },
    answers: [
      { de: "CDU/CSU und AfD.", en: "CDU/CSU and AfD.", uk: "CDU/CSU і AfD.", ru: "ХДС/ХСС и АдГ.", correct: true },
      { de: "Die Linke und Bündnis 90/Die Grünen.", en: "Die Linke and Bündnis 90/Die Grünen.", uk: "«Ліві» і «Союз 90/Зелені».", ru: "Левые и Союз 90/Зелёные." },
      { de: "Bündnis 90/Die Grünen und SPD.", en: "Bündnis 90/Die Grünen and SPD.", uk: "«Союз 90/Зелені» і SPD.", ru: "Союз 90/Зелёные и СДПГ." },
      { de: "Die Linke und CDU/CSU.", en: "Die Linke and CDU/CSU.", uk: "«Ліві» і CDU/CSU.", ru: "Левые и ХДС/ХСС." },
    ]
  },
  {
    id: "lid_074",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt das Parlament für ganz Deutschland?", en: "What is the parliament for the whole of Germany called?", uk: "Як називається парламент для всієї Німеччини?", ru: "Как называется парламент всей Германии?" },
    answers: [
      { de: "Bundesversammlung", en: "Federal Assembly (Bundesversammlung)", uk: "Федеральні збори", ru: "Федеральное собрание (Bundesversammlung)" },
      { de: "Volkskammer", en: "People’s Chamber (Volkskammer)", uk: "Народна палата", ru: "Народная палата (Volkskammer)" },
      { de: "Bundestag", en: "Bundestag", uk: "Бундестаг", ru: "Бундестаг", correct: true },
      { de: "Bundesgerichtshof", en: "Federal Court of Justice (Bundesgerichtshof)", uk: "Федеральний верховний суд", ru: "Федеральный суд (Bundesgerichtshof)" },
    ]
  },
  {
    id: "lid_075",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt Deutschlands heutiges Staatsoberhaupt?", en: "What is the name of Germany’s current head of state?", uk: "Як звати нинішнього главу німецької держави?", ru: "Как зовут нынешнего главу государства Германии?" },
    answers: [
      { de: "Frank-Walter Steinmeier", en: "Frank-Walter Steinmeier", uk: "Франк-Вальтер Штайнмаєр", ru: "Франк-Вальтер Штайнмайер", correct: true },
      { de: "Bärbel Bas", en: "Bärbel Bas", uk: "Бербель Бас", ru: "Бербель Бас" },
      { de: "Bodo Ramelow", en: "Bodo Ramelow", uk: "Бодо Рамелов", ru: "Бодо Рамелов" },
      { de: "Joachim Gauck", en: "Joachim Gauck", uk: "Йоахім Ґаук", ru: "Йоахим Гаук" },
    ]
  },
  {
    id: "lid_076",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung CDU in Deutschland?", en: "What does the abbreviation CDU stand for in Germany?", uk: "Що означає абревіатура CDU в Німеччині?", ru: "Что означает аббревиатура CDU в Германии?" },
    answers: [
      { de: "Christliche Deutsche Union", en: "Christian German Union", uk: "Християнський німецький союз", ru: "Христианский германский союз" },
      { de: "Club Deutscher Unternehmer", en: "Club of German Entrepreneurs", uk: "Клуб німецьких підприємців", ru: "Клуб немецких предпринимателей" },
      { de: "Christlicher Deutscher Umweltschutz", en: "Christian German Environmental Protection", uk: "Християнський німецький захист довкілля", ru: "Христианская немецкая охрана окружающей среды" },
      { de: "Christlich Demokratische Union", en: "Christian Democratic Union", uk: "Християнсько-демократичний союз", ru: "Христианско-демократический союз", correct: true },
    ]
  },
  {
    id: "lid_077",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Was ist die Bundeswehr?", en: "What is the Bundeswehr?", uk: "Що таке Бундесвер?", ru: "Что такое бундесвер (Bundeswehr)?" },
    answers: [
      { de: "die deutsche Polizei", en: "the German police", uk: "німецька поліція", ru: "германская полиция" },
      { de: "ein deutscher Hafen", en: "a German port", uk: "німецький порт", ru: "германский порт" },
      { de: "eine deutsche Bürgerinitiative", en: "a German citizens’ initiative", uk: "німецька громадська ініціатива", ru: "германская гражданская инициатива" },
      { de: "die deutsche Armee", en: "the German army", uk: "німецька армія", ru: "германская армия", correct: true },
    ]
  },
  {
    id: "lid_078",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung SPD?", en: "What does the abbreviation SPD stand for?", uk: "Що означає абревіатура SPD?", ru: "Что означает аббревиатура SPD?" },
    answers: [
      { de: "Sozialistische Partei Deutschlands", en: "Socialist Party of Germany", uk: "Соціалістична партія Німеччини", ru: "Социалистическая партия Германии" },
      { de: "Sozialpolitische Partei Deutschlands", en: "Social Policy Party of Germany", uk: "Соціально-політична партія Німеччини", ru: "Социально-политическая партия Германии" },
      { de: "Sozialdemokratische Partei Deutschlands", en: "Social Democratic Party of Germany", uk: "Соціал-демократична партія Німеччини", ru: "Социал-демократическая партия Германии", correct: true },
      { de: "Sozialgerechte Partei Deutschlands", en: "Social Justice Party of Germany", uk: "Соціально справедлива партія Німеччини", ru: "Партия социальной справедливости Германии" },
    ]
  },
  {
    id: "lid_079",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung FDP in Deutschland?", en: "What does the abbreviation FDP stand for in Germany?", uk: "Що означає абревіатура FDP в Німеччині?", ru: "Что означает аббревиатура FDP в Германии?" },
    answers: [
      { de: "Friedliche Demonstrative Partei", en: "Peaceful Demonstrative Party", uk: "Мирна демонстративна партія", ru: "Мирная демонстративная партия" },
      { de: "Freie Deutschland Partei", en: "Free Germany Party", uk: "Вільна партія Німеччини", ru: "Партия «Свободная Германия»" },
      { de: "Führende Demokratische Partei", en: "Leading Democratic Party", uk: "Провідна демократична партія", ru: "Ведущая демократическая партия" },
      { de: "Freie Demokratische Partei", en: "Free Democratic Party", uk: "Вільна демократична партія", ru: "Свободная демократическая партия", correct: true },
    ]
  },
  {
    id: "lid_080",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?", en: "Which court in Germany is responsible for interpreting the Basic Law?", uk: "Який суд у Німеччині відповідає за тлумачення Основного закону?", ru: "Какой суд в Германии отвечает за толкование Основного закона?" },
    answers: [
      { de: "Oberlandesgericht", en: "Higher Regional Court", uk: "Вищий земельний суд", ru: "Высший земельный суд" },
      { de: "Amtsgericht", en: "Local Court", uk: "Районний суд", ru: "Участковый суд" },
      { de: "Bundesverfassungsgericht", en: "Federal Constitutional Court", uk: "Федеральний конституційний суд", ru: "Федеральный конституционный суд", correct: true },
      { de: "Verwaltungsgericht", en: "Administrative Court", uk: "Адміністративний суд", ru: "Административный суд" },
    ]
  },
  {
    id: "lid_081",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?", en: "Who elects the Federal Chancellor in Germany?", uk: "Хто обирає федерального канцлера/федеральну канцлерку в Німеччині?", ru: "Кто в Германии избирает федерального канцлера?" },
    answers: [
      { de: "der Bundesrat", en: "the Bundesrat", uk: "Бундесрат", ru: "Бундесрат" },
      { de: "die Bundesversammlung", en: "the Federal Assembly", uk: "Федеральні збори", ru: "Федеральное собрание" },
      { de: "das Volk", en: "the people", uk: "народ", ru: "народ" },
      { de: "der Bundestag", en: "the Bundestag", uk: "Бундестаг", ru: "Бундестаг", correct: true },
    ]
  },
  {
    id: "lid_082",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer leitet das deutsche Bundeskabinett?", en: "Who chairs the German Federal Cabinet?", uk: "Хто очолює німецький федеральний кабінет?", ru: "Кто возглавляет федеральный кабинет Германии?" },
    answers: [
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag", uk: "президент/президентка Бундестагу", ru: "президент Бундестага" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President", uk: "федеральний президент/федеральна президентка", ru: "федеральный президент" },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Bundesrat", uk: "президент/президентка Бундесрату", ru: "президент Бундесрата" },
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "the Federal Chancellor", uk: "федеральний канцлер/федеральна канцлерка", ru: "федеральный канцлер", correct: true },
    ]
  },
  {
    id: "lid_083",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?", en: "Who elects the German Federal Chancellor?", uk: "Хто обирає німецького федерального канцлера/німецьку федеральну канцлерку?", ru: "Кто избирает федерального канцлера Германии?" },
    answers: [
      { de: "das Volk", en: "the people", uk: "народ", ru: "народ" },
      { de: "die Bundesversammlung", en: "the Federal Assembly", uk: "Федеральні збори", ru: "Федеральное собрание" },
      { de: "der Bundestag", en: "the Bundestag", uk: "Бундестаг", ru: "Бундестаг", correct: true },
      { de: "die Bundesregierung", en: "the Federal Government", uk: "федеральний уряд", ru: "федеральное правительство" },
    ]
  },
  {
    id: "lid_084",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er …", en: "What is the main task of the German Federal President? He/She …", uk: "Яке головне завдання німецького федерального президента/німецької федеральної президентки? Він/вона …", ru: "Какая главная задача федерального президента Германии? Он/она …" },
    answers: [
      { de: "regiert das Land.", en: "governs the country.", uk: "керує країною.", ru: "управляет страной." },
      { de: "entwirft die Gesetze.", en: "drafts the laws.", uk: "розробляє закони.", ru: "разрабатывает законы." },
      { de: "repräsentiert das Land.", en: "represents the country.", uk: "представляє країну.", ru: "представляет страну.", correct: true },
      { de: "überwacht die Einhaltung der Gesetze.", en: "monitors compliance with the laws.", uk: "стежить за дотриманням законів.", ru: "следит за соблюдением законов." },
    ]
  },
  {
    id: "lid_085",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer bildet den deutschen Bundesrat?", en: "Who makes up the German Bundesrat?", uk: "Хто утворює німецький Бундесрат?", ru: "Кто образует Бундесрат Германии?" },
    answers: [
      { de: "die Abgeordneten des Bundestages", en: "the members of the Bundestag", uk: "депутати Бундестагу", ru: "депутаты Бундестага" },
      { de: "die Ministerinnen und Minister der Bundesregierung", en: "the ministers of the Federal Government", uk: "міністри і міністерки федерального уряду", ru: "министры федерального правительства" },
      { de: "die Regierungsvertreter der Bundesländer", en: "the government representatives of the federal states", uk: "представники урядів федеральних земель", ru: "представители правительств федеральных земель", correct: true },
      { de: "die Parteimitglieder", en: "the party members", uk: "члени партій", ru: "члены партий" },
    ]
  },
  {
    id: "lid_086",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?", en: "Who elects the Federal President in Germany?", uk: "Хто обирає в Німеччині федерального президента/федеральну президентку?", ru: "Кто в Германии избирает федерального президента?" },
    answers: [
      { de: "die Bundesversammlung", en: "the Federal Assembly", uk: "Федеральні збори", ru: "Федеральное собрание", correct: true },
      { de: "der Bundesrat", en: "the Bundesrat", uk: "Бундесрат", ru: "Бундесрат" },
      { de: "das Bundesparlament", en: "the federal parliament", uk: "федеральний парламент", ru: "федеральный парламент" },
      { de: "das Bundesverfassungsgericht", en: "the Federal Constitutional Court", uk: "Федеральний конституційний суд", ru: "Федеральный конституционный суд" },
    ]
  },
  {
    id: "lid_087",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?", en: "Who is the head of state of the Federal Republic of Germany?", uk: "Хто є главою держави Федеративної Республіки Німеччина?", ru: "Кто является главой государства Федеративной Республики Германия?" },
    answers: [
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "the Federal Chancellor", uk: "федеральний канцлер/федеральна канцлерка", ru: "федеральный канцлер" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "the Federal President", uk: "федеральний президент/федеральна президентка", ru: "федеральный президент", correct: true },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "the President of the Bundesrat", uk: "президент/президентка Бундесрату", ru: "президент Бундесрата" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "the President of the Bundestag", uk: "президент/президентка Бундестагу", ru: "президент Бундестага" },
    ]
  },
  {
    id: "lid_088",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Die parlamentarische Opposition im Deutschen Bundestag …", en: "The parliamentary opposition in the German Bundestag …", uk: "Парламентська опозиція в Бундестазі Німеччини …", ru: "Парламентская оппозиция в Бундестаге …" },
    answers: [
      { de: "kontrolliert die Regierung.", en: "oversees the government.", uk: "контролює уряд.", ru: "контролирует правительство.", correct: true },
      { de: "entscheidet, wer Bundesministerin/Bundesminister wird.", en: "decides who becomes a federal minister.", uk: "вирішує, хто стане федеральним міністром/федеральною міністеркою.", ru: "решает, кто станет федеральным министром." },
      { de: "bestimmt, wer im Bundesrat sitzt.", en: "determines who sits in the Bundesrat.", uk: "визначає, хто засідає в Бундесраті.", ru: "определяет, кто заседает в Бундесрате." },
      { de: "schlägt die Regierungschefinnen/Regierungschefs der Länder vor.", en: "proposes the heads of government of the federal states.", uk: "пропонує керівників урядів земель.", ru: "предлагает кандидатуры глав правительств земель." },
    ]
  },
  {
    id: "lid_089",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?", en: "What is the association of members of parliament from one party in parliament called in Germany?", uk: "Як у Німеччині називають обʼєднання депутатів однієї партії в парламенті?", ru: "Как в Германии называется объединение депутатов одной партии в парламенте?" },
    answers: [
      { de: "Verband", en: "association", uk: "спілка", ru: "союз" },
      { de: "Ältestenrat", en: "Council of Elders", uk: "Рада старійшин", ru: "совет старейшин" },
      { de: "Fraktion", en: "parliamentary group (Fraktion)", uk: "фракція", ru: "фракция", correct: true },
      { de: "Opposition", en: "opposition", uk: "опозиція", ru: "оппозиция" },
    ]
  },
  {
    id: "lid_090",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …", en: "The German federal states participate in federal legislation through …", uk: "Німецькі федеральні землі беруть участь у законотворчості федерації через …", ru: "Федеральные земли Германии участвуют в федеральном законодательстве через …" },
    answers: [
      { de: "den Bundesrat.", en: "the Bundesrat.", uk: "Бундесрат.", ru: "Бундесрат.", correct: true },
      { de: "die Bundesversammlung.", en: "the Federal Assembly.", uk: "Федеральні збори.", ru: "Федеральное собрание." },
      { de: "den Bundestag.", en: "the Bundestag.", uk: "Бундестаг.", ru: "Бундестаг." },
      { de: "die Bundesregierung.", en: "the Federal Government.", uk: "федеральний уряд.", ru: "федеральное правительство." },
    ]
  },
  {
    id: "lid_091",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …", en: "In Germany, a change of government in a federal state can affect federal politics. Governing becomes …", uk: "У Німеччині зміна уряду у федеральній землі може впливати на федеральну політику. Керувати стає …", ru: "В Германии смена правительства в одной из федеральных земель может повлиять на федеральную политику. Управлять становится …" },
    answers: [
      { de: "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.", en: "more difficult if this changes the majority in the Bundestag.", uk: "важче, якщо внаслідок цього змінюється більшість у Бундестазі.", ru: "труднее, если из-за этого меняется большинство в Бундестаге." },
      { de: "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.", en: "easier if this brings new parties into the Bundesrat.", uk: "легше, якщо внаслідок цього до Бундесрату потрапляють нові партії.", ru: "легче, если из-за этого в Бундесрат попадают новые партии." },
      { de: "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.", en: "more difficult if this changes the majority in the Bundesrat.", uk: "важче, якщо внаслідок цього змінюється більшість у Бундесраті.", ru: "труднее, если из-за этого меняется большинство в Бундесрате.", correct: true },
      { de: "leichter, wenn es sich um ein reiches Bundesland handelt.", en: "easier if it is a wealthy federal state.", uk: "легше, якщо йдеться про багату федеральну землю.", ru: "легче, если речь идёт о богатой федеральной земле." },
    ]
  },
  {
    id: "lid_092",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung CSU in Deutschland?", en: "What does the abbreviation CSU stand for in Germany?", uk: "Що означає абревіатура CSU в Німеччині?", ru: "Что означает аббревиатура CSU в Германии?" },
    answers: [
      { de: "Christlich Sichere Union", en: "Christian Secure Union", uk: "Християнський безпечний союз", ru: "Христианский надёжный союз" },
      { de: "Christlich Süddeutsche Union", en: "Christian South German Union", uk: "Християнський південнонімецький союз", ru: "Христианский южногерманский союз" },
      { de: "Christlich Sozialer Unternehmerverband", en: "Christian Social Entrepreneurs’ Association", uk: "Християнська соціальна спілка підприємців", ru: "Христианский социальный союз предпринимателей" },
      { de: "Christlich Soziale Union", en: "Christian Social Union", uk: "Християнсько-соціальний союз", ru: "Христианско-социальный союз", correct: true },
    ]
  },
  {
    id: "lid_093",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Je mehr „Zweitstimmen“ eine Partei bei einer Bundestagswahl bekommt, desto …", en: "The more “second votes” (Zweitstimmen) a party receives in a federal election, the …", uk: "Чим більше «других голосів» отримує партія на виборах до Бундестагу, тим …", ru: "Чем больше «вторых голосов» получает партия на выборах в Бундестаг, тем …" },
    answers: [
      { de: "weniger Erststimmen kann sie haben.", en: "fewer first votes it can have.", uk: "менше перших голосів вона може мати.", ru: "меньше первых голосов она может иметь." },
      { de: "mehr Direktkandidaten der Partei ziehen ins Parlament ein.", en: "more of the party’s direct candidates enter parliament.", uk: "більше прямих кандидатів від партії потрапляє до парламенту.", ru: "больше прямых кандидатов партии проходит в парламент." },
      { de: "größer ist das Risiko, eine Koalition bilden zu müssen.", en: "greater the risk of having to form a coalition.", uk: "більшим є ризик, що доведеться створювати коаліцію.", ru: "выше риск того, что придётся создавать коалицию." },
      { de: "mehr Sitze erhält die Partei im Parlament.", en: "more seats the party gets in parliament.", uk: "більше місць отримує партія в парламенті.", ru: "больше мест получает партия в парламенте.", correct: true },
    ]
  },
  {
    id: "lid_094",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?", en: "From what age may one take part in the election of the German Bundestag?", uk: "З якого віку в Німеччині можна брати участь у виборах до Бундестагу?", ru: "С какого возраста в Германии можно участвовать в выборах в Бундестаг?" },
    answers: [
      { de: "16", en: "16", uk: "16", ru: "16" },
      { de: "18", en: "18", uk: "18", ru: "18", correct: true },
      { de: "21", en: "21", uk: "21", ru: "21" },
      { de: "23", en: "23", uk: "23", ru: "23" },
    ]
  },
  {
    id: "lid_095",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Was gilt für die meisten Kinder in Deutschland?", en: "What applies to most children in Germany?", uk: "Що діє для більшості дітей у Німеччині?", ru: "Что действует для большинства детей в Германии?" },
    answers: [
      { de: "Wahlpflicht", en: "compulsory voting", uk: "обовʼязок голосувати", ru: "обязанность голосовать" },
      { de: "Schulpflicht", en: "compulsory schooling", uk: "обовʼязок відвідувати школу", ru: "обязательное школьное обучение", correct: true },
      { de: "Schweigepflicht", en: "duty of confidentiality", uk: "обовʼязок зберігати мовчання", ru: "обязанность хранить молчание" },
      { de: "Religionspflicht", en: "compulsory religion", uk: "релігійний обовʼязок", ru: "обязательное изучение религии" },
    ]
  },
  {
    id: "lid_096",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wie kann jemand, der den Holocaust leugnet, bestraft werden?", en: "How can someone who denies the Holocaust be punished?", uk: "Як може бути покараний той, хто заперечує Голокост?", ru: "Как может быть наказан тот, кто отрицает Холокост?" },
    answers: [
      { de: "Kürzung sozialer Leistungen", en: "reduction of social benefits", uk: "скороченням соціальних виплат", ru: "сокращением социальных выплат" },
      { de: "bis zu 100 Sozialstunden", en: "up to 100 hours of community service", uk: "до 100 годин громадських робіт", ru: "до 100 часов общественных работ" },
      { de: "gar nicht, Holocaustleugnung ist erlaubt", en: "not at all, Holocaust denial is permitted", uk: "ніяк, заперечення Голокосту дозволене", ru: "никак, отрицание Холокоста разрешено" },
      { de: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe", en: "with imprisonment of up to five years or a fine", uk: "позбавленням волі на строк до пʼяти років або грошовим штрафом", ru: "лишением свободы на срок до пяти лет или денежным штрафом", correct: true },
    ]
  },
  {
    id: "lid_097",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?", en: "What do you automatically pay in Germany if you are in permanent employment?", uk: "Що в Німеччині сплачують автоматично, якщо працюють за наймом на постійній основі?", ru: "За что в Германии платят автоматически, если работают по найму на постоянной основе?" },
    answers: [
      { de: "Sozialversicherung", en: "social insurance contributions", uk: "соціальне страхування", ru: "за социальное страхование", correct: true },
      { de: "Sozialhilfe", en: "social assistance", uk: "соціальну допомогу", ru: "за социальную помощь" },
      { de: "Kindergeld", en: "child benefit", uk: "допомогу на дітей", ru: "за пособие на детей" },
      { de: "Wohngeld", en: "housing benefit", uk: "допомогу на оплату житла", ru: "за жилищное пособие" },
    ]
  },
  {
    id: "lid_098",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …", en: "If members of the German Bundestag switch parliamentary groups, …", uk: "Якщо депутати Бундестагу Німеччини змінюють свою фракцію, …", ru: "Если депутаты Бундестага переходят в другую фракцию, …" },
    answers: [
      { de: "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.", en: "they may no longer take part in the sessions of parliament.", uk: "вони більше не можуть брати участь у засіданнях парламенту.", ru: "они больше не могут участвовать в заседаниях парламента." },
      { de: "kann die Regierung ihre Mehrheit verlieren.", en: "the government may lose its majority.", uk: "уряд може втратити свою більшість.", ru: "правительство может потерять большинство.", correct: true },
      { de: "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.", en: "the Federal President must give consent beforehand.", uk: "федеральний президент/федеральна президентка мусить заздалегідь дати на це згоду.", ru: "федеральный президент должен заранее дать согласие." },
      { de: "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen.", en: "the voters of these members may vote again.", uk: "виборці цих депутатів можуть проголосувати ще раз.", ru: "избиратели этих депутатов могут проголосовать ещё раз." },
    ]
  },
  {
    id: "lid_099",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Wer bezahlt in Deutschland die Sozialversicherungen?", en: "Who pays for social insurance in Germany?", uk: "Хто сплачує в Німеччині соціальне страхування?", ru: "Кто в Германии платит за социальное страхование?" },
    answers: [
      { de: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer", en: "employers and employees", uk: "роботодавці та працівники", ru: "работодатели и работники", correct: true },
      { de: "nur Arbeitnehmerinnen/Arbeitnehmer", en: "only employees", uk: "лише працівники", ru: "только работники" },
      { de: "alle Staatsangehörigen", en: "all citizens", uk: "усі громадяни", ru: "все граждане" },
      { de: "nur Arbeitgeberinnen/Arbeitgeber", en: "only employers", uk: "лише роботодавці", ru: "только работодатели" },
    ]
  },
  {
    id: "lid_100",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Was gehört nicht zur gesetzlichen Sozialversicherung?", en: "What is not part of statutory social insurance?", uk: "Що не належить до обовʼязкового соціального страхування?", ru: "Что не входит в обязательное социальное страхование?" },
    answers: [
      { de: "die Lebensversicherung", en: "life insurance", uk: "страхування життя", ru: "страхование жизни", correct: true },
      { de: "die gesetzliche Rentenversicherung", en: "statutory pension insurance", uk: "обовʼязкове пенсійне страхування", ru: "обязательное пенсионное страхование" },
      { de: "die Arbeitslosenversicherung", en: "unemployment insurance", uk: "страхування на випадок безробіття", ru: "страхование по безработице" },
      { de: "die Pflegeversicherung", en: "long-term care insurance", uk: "страхування на випадок потреби в догляді", ru: "страхование по уходу" },
    ]
  },
  {
    id: "lid_101",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Gewerkschaften sind Interessenverbände der …", en: "Trade unions are interest groups of …", uk: "Профспілки — це обʼєднання захисту інтересів …", ru: "Профсоюзы — это объединения по интересам …" },
    answers: [
      { de: "Jugendlichen.", en: "young people.", uk: "підлітків.", ru: "молодёжи." },
      { de: "Arbeitnehmerinnen und Arbeitnehmer.", en: "employees.", uk: "працівників.", ru: "работников.", correct: true },
      { de: "Rentnerinnen und Rentner.", en: "pensioners.", uk: "пенсіонерів.", ru: "пенсионеров." },
      { de: "Arbeitgeberinnen und Arbeitgeber.", en: "employers.", uk: "роботодавців.", ru: "работодателей." },
    ]
  },
  {
    id: "lid_102",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …", en: "What can one be honoured with in the Federal Republic of Germany for outstanding achievement in the political, economic, cultural, intellectual or social field? With the …", uk: "Чим можуть нагородити у Федеративній Республіці Німеччина за особливі заслуги в політичній, економічній, культурній, духовній чи соціальній сфері?", ru: "Чем в Федеративной Республике Германия можно быть награждённым за особые достижения в политической, экономической, культурной, интеллектуальной или социальной сфере? …" },
    answers: [
      { de: "Bundesverdienstkreuz", en: "Federal Cross of Merit (Bundesverdienstkreuz)", uk: "Федеральним хрестом за заслуги", ru: "Федеральным крестом за заслуги (Bundesverdienstkreuz)", correct: true },
      { de: "Bundesadler", en: "Federal Eagle (Bundesadler)", uk: "Федеральним орлом", ru: "Федеральным орлом (Bundesadler)" },
      { de: "Vaterländischen Verdienstorden", en: "Patriotic Order of Merit", uk: "Орденом «За заслуги перед Вітчизною»", ru: "Патриотическим орденом за заслуги" },
      { de: "Ehrentitel „Held der Deutschen Demokratischen Republik“", en: "honorary title “Hero of the German Democratic Republic”", uk: "почесним званням «Герой Німецької Демократичної Республіки»", ru: "почётным званием «Герой Германской Демократической Республики»" },
    ]
  },
  {
    id: "lid_103",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was wird in Deutschland als „Ampelkoalition“ bezeichnet? Die Zusammenarbeit …", en: "What is called the “traffic light coalition” (Ampelkoalition) in Germany? The cooperation …", uk: "Що в Німеччині називають «світлофорною коаліцією»? Співпрацю …", ru: "Что в Германии называют «коалицией светофора» (Ampelkoalition)? Сотрудничество …" },
    answers: [
      { de: "der Bundestagsfraktionen von CDU und CSU", en: "of the Bundestag parliamentary groups of the CDU and CSU", uk: "фракцій CDU і CSU в Бундестазі", ru: "фракций ХДС и ХСС в Бундестаге" },
      { de: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung", en: "of the SPD, FDP and Bündnis 90/Die Grünen in a government", uk: "SPD, FDP і «Союзу 90/Зелених» в одному уряді", ru: "СДПГ, СвДП и Союза 90/Зелёных в правительстве", correct: true },
      { de: "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung", en: "of the CSU, Die LINKE and Bündnis 90/Die Grünen in a government", uk: "CSU, «Лівих» і «Союзу 90/Зелених» в одному уряді", ru: "ХСС, Левых и Союза 90/Зелёных в правительстве" },
      { de: "der Bundestagsfraktionen von CDU und SPD", en: "of the Bundestag parliamentary groups of the CDU and SPD", uk: "фракцій CDU і SPD в Бундестазі", ru: "фракций ХДС и СДПГ в Бундестаге" },
    ]
  },
  {
    id: "lid_104",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?", en: "A woman in Germany loses her job. What must not be the reason for this dismissal?", uk: "Жінка в Німеччині втрачає роботу. Що не може бути причиною цього звільнення?", ru: "Женщина в Германии теряет работу. Что не может быть причиной этого увольнения?" },
    answers: [
      { de: "Die Frau ist lange krank und arbeitsunfähig.", en: "The woman has been ill for a long time and unable to work.", uk: "Жінка довго хворіє і непрацездатна.", ru: "Женщина долго болеет и нетрудоспособна." },
      { de: "Die Frau kam oft zu spät zur Arbeit.", en: "The woman often arrived late for work.", uk: "Жінка часто запізнювалася на роботу.", ru: "Женщина часто опаздывала на работу." },
      { de: "Die Frau erledigt private Sachen während der Arbeitszeit.", en: "The woman does private errands during working hours.", uk: "Жінка займається приватними справами в робочий час.", ru: "Женщина занимается личными делами в рабочее время." },
      { de: "Die Frau bekommt ein Kind und ihr Chef weiß das.", en: "The woman is expecting a child and her boss knows this.", uk: "Жінка чекає дитину, і її начальник знає про це.", ru: "Женщина ждёт ребёнка, и её начальник об этом знает.", correct: true },
    ]
  },
  {
    id: "lid_105",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?", en: "What is a task of election helpers in Germany?", uk: "Що є завданням виборчих помічників/помічниць у Німеччині?", ru: "Какая задача у помощников на выборах в Германии?" },
    answers: [
      { de: "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.", en: "They help elderly people cast their vote in the voting booth.", uk: "Вони допомагають літнім людям голосувати в кабінці для голосування.", ru: "Они помогают пожилым людям проголосовать в кабине для голосования." },
      { de: "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.", en: "They write the election notifications before the election.", uk: "Вони пишуть повідомлення про вибори перед виборами.", ru: "Они пишут извещения о выборах перед выборами." },
      { de: "Sie geben Zwischenergebnisse an die Medien weiter.", en: "They pass on interim results to the media.", uk: "Вони передають проміжні результати медіа.", ru: "Они передают промежуточные результаты СМИ." },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "They count the votes after the election closes.", uk: "Вони підраховують голоси після закінчення виборів.", ru: "Они подсчитывают голоса после окончания выборов.", correct: true },
    ]
  },
  {
    id: "lid_106",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?", en: "In Germany, volunteer election helpers assist with elections. What is a task of election helpers?", uk: "У Німеччині на виборах допомагають виборчі помічники і помічниці на громадських засадах. Що є завданням виборчих помічників/помічниць?", ru: "В Германии на выборах помогают добровольные помощники. Какая задача у помощников на выборах?" },
    answers: [
      { de: "Sie helfen Kindern und alten Menschen beim Wählen.", en: "They help children and elderly people to vote.", uk: "Вони допомагають дітям і літнім людям голосувати.", ru: "Они помогают детям и пожилым людям голосовать." },
      { de: "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.", en: "They write cards and letters stating the polling station.", uk: "Вони пишуть листівки та листи з вказівкою виборчої дільниці.", ru: "Они пишут открытки и письма с указанием избирательного участка." },
      { de: "Sie geben Zwischenergebnisse an Journalisten weiter.", en: "They pass on interim results to journalists.", uk: "Вони передають проміжні результати журналістам.", ru: "Они передают промежуточные результаты журналистам." },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "They count the votes after the election closes.", uk: "Вони підраховують голоси після закінчення виборів.", ru: "Они подсчитывают голоса после окончания выборов.", correct: true },
    ]
  },
  {
    id: "lid_107",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?", en: "For how many years is the Bundestag elected in Germany?", uk: "На скільки років обирають Бундестаг у Німеччині?", ru: "На сколько лет в Германии избирается Бундестаг?" },
    answers: [
      { de: "2 Jahre", en: "2 years", uk: "2 роки", ru: "на 2 года" },
      { de: "4 Jahre", en: "4 years", uk: "4 роки", ru: "на 4 года", correct: true },
      { de: "6 Jahre", en: "6 years", uk: "6 років", ru: "на 6 лет" },
      { de: "8 Jahre", en: "8 years", uk: "8 років", ru: "на 8 лет" },
    ]
  },
  {
    id: "lid_108",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …", en: "In a federal election in Germany, everyone may vote who …", uk: "На виборах до Бундестагу в Німеччині голосувати може кожен/кожна, хто …", ru: "На выборах в Бундестаг в Германии голосовать может каждый, кто …" },
    answers: [
      { de: "in der Bundesrepublik Deutschland wohnt und wählen möchte.", en: "lives in the Federal Republic of Germany and wants to vote.", uk: "проживає у Федеративній Республіці Німеччина і хоче голосувати.", ru: "проживает в Федеративной Республике Германия и хочет голосовать." },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.", en: "is a citizen of the Federal Republic of Germany and is at least 18 years old.", uk: "є громадянином/громадянкою Федеративної Республіки Німеччина і йому/їй щонайменше 18 років.", ru: "является гражданином Федеративной Республики Германия и ему не менее 18 лет.", correct: true },
      { de: "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.", en: "has lived in the Federal Republic of Germany for at least 3 years.", uk: "живе у Федеративній Республіці Німеччина щонайменше 3 роки.", ru: "живёт в Федеративной Республике Германия не менее 3 лет." },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.", en: "is a citizen of the Federal Republic of Germany and is at least 21 years old.", uk: "є громадянином/громадянкою Федеративної Республіки Німеччина і йому/їй щонайменше 21 рік.", ru: "является гражданином Федеративной Республики Германия и ему не менее 21 года." },
    ]
  },
  {
    id: "lid_109",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?", en: "How often are federal elections normally held in Germany?", uk: "Як часто зазвичай проходять вибори до Бундестагу в Німеччині?", ru: "Как часто обычно проходят выборы в Бундестаг в Германии?" },
    answers: [
      { de: "alle drei Jahre", en: "every three years", uk: "кожні три роки", ru: "каждые три года" },
      { de: "alle vier Jahre", en: "every four years", uk: "кожні чотири роки", ru: "каждые четыре года", correct: true },
      { de: "alle fünf Jahre", en: "every five years", uk: "кожні пʼять років", ru: "каждые пять лет" },
      { de: "alle sechs Jahre", en: "every six years", uk: "кожні шість років", ru: "каждые шесть лет" },
    ]
  },
  {
    id: "lid_110",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?", en: "For how many years is the Bundestag elected in Germany?", uk: "На скільки років обирають Бундестаг у Німеччині?", ru: "На сколько лет в Германии избирается Бундестаг?" },
    answers: [
      { de: "2 Jahre", en: "2 years", uk: "2 роки", ru: "на 2 года" },
      { de: "3 Jahre", en: "3 years", uk: "3 роки", ru: "на 3 года" },
      { de: "4 Jahre", en: "4 years", uk: "4 роки", ru: "на 4 года", correct: true },
      { de: "5 Jahre", en: "5 years", uk: "5 років", ru: "на 5 лет" },
    ]
  },
  {
    id: "lid_111",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?", en: "Which actions relating to the State of Israel are prohibited in Germany?", uk: "Які дії щодо держави Ізраїль заборонені в Німеччині?", ru: "Какие действия в отношении государства Израиль запрещены в Германии?" },
    answers: [
      { de: "die Politik Israels öffentlich kritisieren", en: "publicly criticising Israel’s policies", uk: "публічно критикувати політику Ізраїлю", ru: "публично критиковать политику Израиля" },
      { de: "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück", en: "hanging an Israeli flag on private property", uk: "вивішувати ізраїльський прапор на приватній ділянці", ru: "вывешивать израильский флаг на частной территории" },
      { de: "eine Diskussion über die Politik Israels", en: "a discussion about Israel’s policies", uk: "дискусія про політику Ізраїлю", ru: "обсуждать политику Израиля" },
      { de: "der öffentliche Aufruf zur Vernichtung Israels", en: "publicly calling for the destruction of Israel", uk: "публічний заклик до знищення Ізраїлю", ru: "публичный призыв к уничтожению Израиля", correct: true },
    ]
  },
  {
    id: "lid_112",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Die Wahlen in Deutschland sind …", en: "Elections in Germany are …", uk: "Вибори в Німеччині …", ru: "Выборы в Германии …" },
    answers: [
      { de: "speziell.", en: "special.", uk: "спеціальні.", ru: "особые." },
      { de: "geheim.", en: "secret.", uk: "таємні.", ru: "тайные.", correct: true },
      { de: "berufsbezogen.", en: "occupation-based.", uk: "професійні.", ru: "профессиональные." },
      { de: "geschlechtsabhängig.", en: "gender-dependent.", uk: "залежні від статі.", ru: "зависящие от пола." },
    ]
  },
  {
    id: "lid_113",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland gewinnt die Partei, die …", en: "In elections in Germany, the party that wins is the one that …", uk: "Вибори в Німеччині виграє партія, яка …", ru: "Выборы в Германии выигрывает партия, которая …" },
    answers: [
      { de: "die meisten Stimmen bekommt.", en: "gets the most votes.", uk: "отримує найбільше голосів.", ru: "получает больше всего голосов.", correct: true },
      { de: "die meisten Männer mehrheitlich gewählt haben.", en: "was chosen by the majority of men.", uk: "за яку більшістю проголосувало найбільше чоловіків.", ru: "получила голоса большинства мужчин." },
      { de: "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.", en: "got the most votes among workers.", uk: "отримала найбільше голосів серед робітників/робітниць.", ru: "получила больше всего голосов среди рабочих." },
      { de: "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat.", en: "received the most first votes for its candidate for chancellor.", uk: "отримала найбільше перших голосів за свого кандидата/свою кандидатку на посаду канцлера.", ru: "получила больше всего первых голосов за своего кандидата в канцлеры." },
    ]
  },
  {
    id: "lid_114",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "An demokratischen Wahlen in Deutschland teilzunehmen ist …", en: "Taking part in democratic elections in Germany is …", uk: "Участь у демократичних виборах у Німеччині — це …", ru: "Участие в демократических выборах в Германии — это …" },
    answers: [
      { de: "eine Pflicht.", en: "a duty.", uk: "обовʼязок.", ru: "обязанность." },
      { de: "ein Recht.", en: "a right.", uk: "право.", ru: "право.", correct: true },
      { de: "ein Zwang.", en: "a compulsion.", uk: "примус.", ru: "принуждение." },
      { de: "eine Last.", en: "a burden.", uk: "тягар.", ru: "бремя." },
    ]
  },
  {
    id: "lid_115",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Was bedeutet „aktives Wahlrecht“ in Deutschland?", en: "What does “active suffrage” (aktives Wahlrecht) mean in Germany?", uk: "Що означає «активне виборче право» в Німеччині?", ru: "Что означает «активное избирательное право» в Германии?" },
    answers: [
      { de: "Man kann gewählt werden.", en: "You can be elected.", uk: "Можна бути обраним/обраною.", ru: "Можно быть избранным." },
      { de: "Man muss wählen gehen.", en: "You must go and vote.", uk: "Потрібно йти голосувати.", ru: "Нужно идти голосовать." },
      { de: "Man kann wählen.", en: "You can vote.", uk: "Можна голосувати.", ru: "Можно голосовать.", correct: true },
      { de: "Man muss zur Auszählung der Stimmen gehen.", en: "You must go to the counting of the votes.", uk: "Потрібно йти на підрахунок голосів.", ru: "Нужно идти на подсчёт голосов." },
    ]
  },
  {
    id: "lid_116",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …", en: "If you are allowed to vote in a federal election in Germany, this is called …", uk: "Якщо ви можете голосувати на виборах до Бундестагу Німеччини, це називається …", ru: "Если вы вправе голосовать на выборах в Бундестаг в Германии, это называется …" },
    answers: [
      { de: "aktive Wahlkampagne.", en: "an active election campaign (Wahlkampagne).", uk: "активна виборча кампанія.", ru: "активная избирательная кампания (Wahlkampagne)." },
      { de: "aktives Wahlverfahren.", en: "an active electoral procedure.", uk: "активна виборча процедура.", ru: "активная избирательная процедура." },
      { de: "aktiver Wahlkampf.", en: "an active election campaign (Wahlkampf).", uk: "активна передвиборча боротьба.", ru: "активная предвыборная борьба (Wahlkampf)." },
      { de: "aktives Wahlrecht.", en: "active suffrage (aktives Wahlrecht).", uk: "активне виборче право.", ru: "активное избирательное право (aktives Wahlrecht).", correct: true },
    ]
  },
  {
    id: "lid_117",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?", en: "What minimum percentage of the second votes must parties receive in order to be elected to the German Bundestag?", uk: "Який мінімальний відсоток других голосів мають отримати партії, щоб потрапити до Бундестагу?", ru: "Какой минимальный процент вторых голосов должны получить партии, чтобы быть избранными в Бундестаг?" },
    answers: [
      { de: "3%", en: "3%", uk: "3%", ru: "3%" },
      { de: "4%", en: "4%", uk: "4%", ru: "4%" },
      { de: "5%", en: "5%", uk: "5%", ru: "5%", correct: true },
      { de: "6%", en: "6%", uk: "6%", ru: "6%" },
    ]
  },
  {
    id: "lid_118",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?", en: "Who may become a member of the roughly 40 Jewish Maccabi sports clubs?", uk: "Хто може бути членом приблизно 40 єврейських спортивних клубів «Маккабі»?", ru: "Кто может стать членом примерно 40 еврейских спортивных клубов «Маккаби»?" },
    answers: [
      { de: "nur Deutsche", en: "only Germans", uk: "лише німці", ru: "только немцы" },
      { de: "nur Israelis", en: "only Israelis", uk: "лише ізраїльтяни", ru: "только израильтяне" },
      { de: "nur religiöse Menschen", en: "only religious people", uk: "лише релігійні люди", ru: "только религиозные люди" },
      { de: "alle Menschen", en: "all people", uk: "усі люди", ru: "все люди", correct: true },
    ]
  },
  {
    id: "lid_119",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland sind frei. Was bedeutet das?", en: "Elections in Germany are free. What does that mean?", uk: "Вибори в Німеччині вільні. Що це означає?", ru: "Выборы в Германии свободные. Что это означает?" },
    answers: [
      { de: "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.", en: "All convicted offenders are not allowed to vote.", uk: "Усі засуджені злочинці не мають права голосувати.", ru: "Все осуждённые преступники не имеют права голосовать." },
      { de: "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.", en: "If I want to go and vote, my employer must give me time off.", uk: "Якщо я хочу піти голосувати, мій роботодавець/моя роботодавиця повинен/повинна дати мені вихідний.", ru: "Если я хочу пойти голосовать, мой работодатель должен меня отпустить." },
      { de: "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.", en: "Every person can decide without coercion whether they want to vote and whom they want to vote for.", uk: "Кожна людина може без примусу вирішувати, чи хоче вона голосувати і за кого.", ru: "Каждый человек может без принуждения решать, хочет ли он голосовать и за кого.", correct: true },
      { de: "Ich kann frei entscheiden, wo ich wählen gehen möchte.", en: "I can freely decide where I want to go to vote.", uk: "Я можу вільно вирішувати, де хочу голосувати.", ru: "Я могу свободно решать, где мне голосовать." },
    ]
  },
  {
    id: "lid_120",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Das Wahlsystem in Deutschland ist ein …", en: "The electoral system in Germany is a …", uk: "Виборча система в Німеччині — це …", ru: "Избирательная система Германии — это …" },
    answers: [
      { de: "Zensuswahlrecht.", en: "census-based (property-qualified) franchise.", uk: "цензове виборче право.", ru: "цензовое избирательное право." },
      { de: "Dreiklassenwahlrecht.", en: "three-class franchise.", uk: "трикласове виборче право.", ru: "трёхклассное избирательное право." },
      { de: "Mehrheits- und Verhältniswahlrecht.", en: "system of majority and proportional representation.", uk: "мажоритарно-пропорційна виборча система.", ru: "мажоритарная и пропорциональная избирательная система.", correct: true },
      { de: "allgemeines Männerwahlrecht.", en: "universal male suffrage.", uk: "загальне виборче право для чоловіків.", ru: "всеобщее избирательное право только для мужчин." },
    ]
  },
  {
    id: "lid_121",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …", en: "A party wants to enter the German Bundestag. But it must have a minimum share of the votes. This is called the …", uk: "Партія хоче потрапити до Бундестагу Німеччини. Але вона мусить мати мінімальну частку голосів виборців. Це називається …", ru: "Партия хочет попасть в Бундестаг. Но для этого она должна получить минимальную долю голосов избирателей. Это называется …" },
    answers: [
      { de: "5%-Hürde.", en: "5% hurdle (threshold).", uk: "5-відсотковий барʼєр.", ru: "пятипроцентный барьер.", correct: true },
      { de: "Zulassungsgrenze.", en: "admission limit.", uk: "межа допуску.", ru: "граница допуска." },
      { de: "Basiswert.", en: "base value.", uk: "базове значення.", ru: "базовое значение." },
      { de: "Richtlinie.", en: "guideline.", uk: "директива.", ru: "директива." },
    ]
  },
  {
    id: "lid_122",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …", en: "What principle do elections in Germany follow? Elections in Germany are …", uk: "Якому принципу підпорядковані вибори в Німеччині? Вибори в Німеччині …", ru: "Какому принципу подчиняются выборы в Германии? Выборы в Германии …" },
    answers: [
      { de: "frei, gleich, geheim.", en: "free, equal, secret.", uk: "вільні, рівні, таємні.", ru: "свободные, равные, тайные.", correct: true },
      { de: "offen, sicher, frei.", en: "open, safe, free.", uk: "відкриті, безпечні, вільні.", ru: "открытые, безопасные, свободные." },
      { de: "geschlossen, gleich, sicher.", en: "closed, equal, safe.", uk: "закриті, рівні, безпечні.", ru: "закрытые, равные, безопасные." },
      { de: "sicher, offen, freiwillig.", en: "safe, open, voluntary.", uk: "безпечні, відкриті, добровільні.", ru: "безопасные, открытые, добровольные." },
    ]
  },
  {
    id: "lid_123",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Was ist in Deutschland die „5%-Hürde“?", en: "What is the “5% hurdle” in Germany?", uk: "Що таке в Німеччині «5-відсотковий барʼєр»?", ru: "Что такое «пятипроцентный барьер» в Германии?" },
    answers: [
      { de: "Abstimmungsregelung im Bundestag für kleine Parteien", en: "a voting rule in the Bundestag for small parties", uk: "правило голосування в Бундестазі для малих партій", ru: "правило голосования в Бундестаге для малых партий" },
      { de: "Anwesenheitskontrolle im Bundestag für Abstimmungen", en: "an attendance check in the Bundestag for votes", uk: "перевірка присутності в Бундестазі під час голосувань", ru: "проверка присутствия в Бундестаге при голосованиях" },
      { de: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen", en: "the minimum share of votes needed to enter parliament", uk: "мінімальна частка голосів виборців, щоб потрапити до парламенту", ru: "минимальная доля голосов избирателей для прохождения в парламент", correct: true },
      { de: "Anwesenheitskontrolle im Bundesrat für Abstimmungen", en: "an attendance check in the Bundesrat for votes", uk: "перевірка присутності в Бундесраті під час голосувань", ru: "проверка присутствия в Бундесрате при голосованиях" },
    ]
  },
  {
    id: "lid_124",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Die Bundestagswahl in Deutschland ist die Wahl …", en: "The Bundestag election in Germany is the election …", uk: "Вибори до Бундестагу в Німеччині — це вибори …", ru: "Выборы в Бундестаг в Германии — это выборы …" },
    answers: [
      { de: "der Bundeskanzlerin/des Bundeskanzlers.", en: "of the Federal Chancellor.", uk: "федерального канцлера/федеральної канцлерки.", ru: "федерального канцлера." },
      { de: "der Parlamente der Länder.", en: "of the parliaments of the federal states.", uk: "парламентів земель.", ru: "парламентов земель." },
      { de: "des Parlaments für Deutschland.", en: "of the parliament for Germany.", uk: "парламенту Німеччини.", ru: "парламента Германии.", correct: true },
      { de: "der Bundespräsidentin/des Bundespräsidenten.", en: "of the Federal President.", uk: "федерального президента/федеральної президентки.", ru: "федерального президента." },
    ]
  },
  {
    id: "lid_125",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …", en: "In a democracy, one function of regular elections is …", uk: "У демократії одна з функцій регулярних виборів — …", ru: "В демократии одна из функций регулярных выборов — …" },
    answers: [
      { de: "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.", en: "to force citizens to cast their vote.", uk: "змусити громадян віддавати свої голоси.", ru: "принуждать граждан отдавать свой голос." },
      { de: "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.", en: "to make it possible to change the government according to the will of the majority of voters.", uk: "дати змогу змінити уряд відповідно до волі більшості виборців.", ru: "давать возможность сменить правительство по воле большинства избирателей.", correct: true },
      { de: "im Land bestehende Gesetze beizubehalten.", en: "to preserve the laws that exist in the country.", uk: "зберегти чинні в країні закони.", ru: "сохранять существующие в стране законы." },
      { de: "den Armen mehr Macht zu geben.", en: "to give more power to the poor.", uk: "дати більше влади бідним.", ru: "давать бедным больше власти." },
    ]
  },
  {
    id: "lid_126",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?", en: "What do citizens entitled to vote in Germany receive before an election?", uk: "Що отримують громадяни з правом голосу в Німеччині перед виборами?", ru: "Что получают граждане, имеющие право голоса, в Германии перед выборами?" },
    answers: [
      { de: "eine Wahlbenachrichtigung von der Gemeinde", en: "an election notification from the municipality", uk: "повідомлення про вибори від громади", ru: "извещение о выборах от общины", correct: true },
      { de: "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten", en: "a voting permit from the Federal President", uk: "дозвіл на голосування від федерального президента/федеральної президентки", ru: "разрешение на голосование от федерального президента" },
      { de: "eine Benachrichtigung von der Bundesversammlung", en: "a notification from the Federal Assembly", uk: "повідомлення від Федеральних зборів", ru: "уведомление от Федерального собрания" },
      { de: "eine Benachrichtigung vom Pfarramt", en: "a notification from the parish office", uk: "повідомлення від парафіяльної канцелярії", ru: "уведомление от приходской канцелярии" },
    ]
  },
  {
    id: "lid_127",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …", en: "Why is there a 5% hurdle in the electoral law of the Federal Republic of Germany? It exists because …", uk: "Чому у виборчому законі Федеративної Республіки Німеччина існує 5-відсотковий барʼєр? Він існує, тому що …", ru: "Почему в избирательном законе Федеративной Республики Германия существует пятипроцентный барьер? Он существует, потому что …" },
    answers: [
      { de: "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.", en: "the programmes of many small parties have a lot in common.", uk: "програми багатьох малих партій мають багато спільного.", ru: "программы многих малых партий имеют много общего." },
      { de: "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.", en: "citizens can lose their orientation when there are many small parties.", uk: "громадяни можуть втратити орієнтири серед багатьох малих партій.", ru: "граждане могут потеряться в обилии малых партий." },
      { de: "viele kleine Parteien die Regierungsbildung erschweren.", en: "many small parties make it harder to form a government.", uk: "багато малих партій ускладнюють формування уряду.", ru: "множество малых партий затрудняет формирование правительства.", correct: true },
      { de: "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen.", en: "small parties do not have enough money to pay politicians.", uk: "малі партії не мають достатньо грошей, щоб платити політикам.", ru: "у малых партий недостаточно денег, чтобы платить политикам." },
    ]
  },
  {
    id: "lid_128",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …", en: "Members of parliament who are elected by the citizens are called …", uk: "Членів парламенту, яких обирають громадяни, називають …", ru: "Членов парламента, избранных гражданами, называют …" },
    answers: [
      { de: "Abgeordnete.", en: "members of parliament (Abgeordnete).", uk: "депутатами.", ru: "депутаты.", correct: true },
      { de: "Kanzlerinnen/Kanzler.", en: "chancellors.", uk: "канцлерами.", ru: "канцлеры." },
      { de: "Botschafterinnen/Botschafter.", en: "ambassadors.", uk: "послами.", ru: "послы." },
      { de: "Ministerpräsidentinnen/Ministerpräsidenten.", en: "minister-presidents.", uk: "міністрами-президентами.", ru: "министры-президенты." },
    ]
  },
  {
    id: "lid_129",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Vom Volk gewählt wird in Deutschland …", en: "In Germany, the people elect …", uk: "Народ у Німеччині обирає …", ru: "Народом в Германии избирается …" },
    answers: [
      { de: "die Bundeskanzlerin/der Bundeskanzler.", en: "the Federal Chancellor.", uk: "федерального канцлера/федеральну канцлерку.", ru: "федеральный канцлер." },
      { de: "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.", en: "the Minister-President of a federal state.", uk: "міністра-президента/міністра-президентку федеральної землі.", ru: "министр-президент федеральной земли." },
      { de: "der Bundestag.", en: "the Bundestag.", uk: "Бундестаг.", ru: "Бундестаг.", correct: true },
      { de: "die Bundespräsidentin/der Bundespräsident.", en: "the Federal President.", uk: "федерального президента/федеральну президентку.", ru: "федеральный президент." },
    ]
  },
  {
    id: "lid_130",
    lessonId: "k6m4",
    cat: "wahlen",
    img: "lid_130.png",
    question: { de: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig? In Anlehnung an Bundeswahlordnung (BWO), Anlage 26", en: "Which ballot paper would be valid in a federal election? Based on the Federal Election Regulations (BWO), Annex 26", uk: "Який бюлетень був би дійсним на виборах до Бундестагу? За зразком Федерального виборчого регламенту (BWO), додаток 26", ru: "Какой избирательный бюллетень был бы действителен на выборах в Бундестаг? По образцу Федерального избирательного положения (BWO), приложение 26" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1", correct: true },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_131",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …", en: "In Germany, a mayor (Bürgermeister) is …", uk: "У Німеччині бургомістр/бургомістерка — це …", ru: "В Германии бургомистр (Bürgermeister) — это …" },
    answers: [
      { de: "die Leiterin/der Leiter einer Schule.", en: "the head of a school.", uk: "керівник/керівниця школи.", ru: "руководитель школы." },
      { de: "die Chefin/der Chef einer Bank.", en: "the head of a bank.", uk: "директор/директорка банку.", ru: "глава банка." },
      { de: "das Oberhaupt einer Gemeinde.", en: "the head of a municipality.", uk: "голова громади.", ru: "глава общины.", correct: true },
      { de: "die/der Vorsitzende einer Partei.", en: "the chairperson of a party.", uk: "голова партії.", ru: "председатель партии." },
    ]
  },
  {
    id: "lid_132",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?", en: "Many people in Germany volunteer in their free time (ehrenamtlich). What does that mean?", uk: "Багато людей у Німеччині у вільний час працюють на громадських засадах. Що це означає?", ru: "Многие люди в Германии в свободное время работают на общественных началах (ehrenamtlich). Что это означает?" },
    answers: [
      { de: "Sie arbeiten als Soldatinnen/Soldaten.", en: "They work as soldiers.", uk: "Вони працюють солдатами/солдатками.", ru: "Они работают солдатами." },
      { de: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.", en: "They work voluntarily and unpaid in clubs and associations.", uk: "Вони працюють добровільно та безоплатно в обʼєднаннях і спілках.", ru: "Они работают добровольно и безвозмездно в объединениях и союзах.", correct: true },
      { de: "Sie arbeiten in der Bundesregierung.", en: "They work in the Federal Government.", uk: "Вони працюють у федеральному уряді.", ru: "Они работают в федеральном правительстве." },
      { de: "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.", en: "They work in a hospital and earn money doing so.", uk: "Вони працюють у лікарні та заробляють там гроші.", ru: "Они работают в больнице и получают за это деньги." },
    ]
  },
  {
    id: "lid_133",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?", en: "What is permitted in federal and state parliament elections in Germany?", uk: "Що дозволено на виборах до Бундестагу та ландтагів у Німеччині?", ru: "Что разрешено на выборах в Бундестаг и ландтаги в Германии?" },
    answers: [
      { de: "Der Ehemann wählt für seine Frau mit.", en: "A husband votes on behalf of his wife as well.", uk: "Чоловік голосує також за свою дружину.", ru: "Муж голосует также за свою жену." },
      { de: "Man kann durch Briefwahl seine Stimme abgeben.", en: "You can cast your vote by postal ballot.", uk: "Можна віддати свій голос поштою.", ru: "Можно проголосовать по почте.", correct: true },
      { de: "Man kann am Wahltag telefonisch seine Stimme abgeben.", en: "You can cast your vote by telephone on election day.", uk: "У день виборів можна проголосувати по телефону.", ru: "В день выборов можно проголосовать по телефону." },
      { de: "Kinder ab dem Alter von 14 Jahren dürfen wählen.", en: "Children from the age of 14 may vote.", uk: "Діти з 14 років можуть голосувати.", ru: "Дети с 14 лет имеют право голосовать." },
    ]
  },
  {
    id: "lid_134",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?", en: "There are plans to abolish the bus line that you always take to work. What can you do to keep the bus line?", uk: "Хочуть скасувати автобусний маршрут, яким ви завжди їздите на роботу. Що ви можете зробити, щоб зберегти автобусний маршрут?", ru: "Хотят отменить автобусный маршрут, на котором вы всегда ездите на работу. Что вы можете сделать, чтобы сохранить маршрут?" },
    answers: [
      { de: "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.", en: "I take part in a citizens’ initiative to keep the bus line or start an initiative myself.", uk: "Я долучаюся до громадської ініціативи за збереження автобусного маршруту або сам/сама створюю ініціативу.", ru: "Я участвую в гражданской инициативе за сохранение маршрута или сам создаю инициативу.", correct: true },
      { de: "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.", en: "I join a sports club and train for cycling.", uk: "Я стаю членом спортивного клубу і тренуюся їздити на велосипеді.", ru: "Я вступаю в спортивный клуб и тренируюсь в езде на велосипеде." },
      { de: "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.", en: "I contact the tax office because, as a taxpayer, I have a right to the bus line.", uk: "Я звертаюся до податкової інспекції, тому що як платник/платниця податків маю право на автобусний маршрут.", ru: "Я обращаюсь в налоговую инспекцию, потому что как налогоплательщик имею право на этот маршрут." },
      { de: "Ich schreibe einen Brief an das Forstamt der Gemeinde.", en: "I write a letter to the municipal forestry office.", uk: "Я пишу листа до лісового управління громади.", ru: "Я пишу письмо в лесное управление общины." },
    ]
  },
  {
    id: "lid_135",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Wen vertreten die Gewerkschaften in Deutschland?", en: "Whom do the trade unions represent in Germany?", uk: "Кого представляють профспілки в Німеччині?", ru: "Кого представляют профсоюзы в Германии?" },
    answers: [
      { de: "große Unternehmen", en: "large companies", uk: "великі підприємства", ru: "крупные предприятия" },
      { de: "kleine Unternehmen", en: "small companies", uk: "малі підприємства", ru: "малые предприятия" },
      { de: "Selbstständige", en: "the self-employed", uk: "самозайнятих", ru: "самозанятых" },
      { de: "Arbeitnehmerinnen und Arbeitnehmer", en: "employees", uk: "працівників", ru: "работников", correct: true },
    ]
  },
  {
    id: "lid_136",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Sie gehen in Deutschland zum Arbeitsgericht bei …", en: "In Germany, you go to the labour court in the case of …", uk: "У Німеччині ви звертаєтеся до суду з трудових спорів у разі …", ru: "В Германии вы обращаетесь в суд по трудовым спорам при …" },
    answers: [
      { de: "falscher Nebenkostenabrechnung.", en: "an incorrect utilities bill.", uk: "неправильного розрахунку додаткових витрат на житло.", ru: "неправильном расчёте коммунальных платежей." },
      { de: "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.", en: "unjustified dismissal by your boss.", uk: "незаконного звільнення вашим начальником/вашою начальницею.", ru: "необоснованном увольнении начальником.", correct: true },
      { de: "Problemen mit den Nachbarinnen/Nachbarn.", en: "problems with the neighbours.", uk: "проблем із сусідами.", ru: "проблемах с соседями." },
      { de: "Schwierigkeiten nach einem Verkehrsunfall.", en: "difficulties after a traffic accident.", uk: "труднощів після дорожньо-транспортної пригоди.", ru: "трудностях после дорожно-транспортного происшествия." },
    ]
  },
  {
    id: "lid_137",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?", en: "Which court in Germany is responsible for conflicts in the working world?", uk: "Який суд у Німеччині відповідає за конфлікти у сфері праці?", ru: "Какой суд в Германии компетентен в конфликтах в сфере труда?" },
    answers: [
      { de: "das Familiengericht", en: "the family court", uk: "суд у справах сімʼї", ru: "суд по семейным делам" },
      { de: "das Strafgericht", en: "the criminal court", uk: "кримінальний суд", ru: "уголовный суд" },
      { de: "das Arbeitsgericht", en: "the labour court", uk: "суд з трудових спорів", ru: "суд по трудовым спорам", correct: true },
      { de: "das Amtsgericht", en: "the local court (Amtsgericht)", uk: "районний суд", ru: "участковый суд (Amtsgericht)" },
    ]
  },
  {
    id: "lid_138",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?", en: "What can I do in Germany if my employer has dismissed me unlawfully?", uk: "Що я можу зробити в Німеччині, якщо мій роботодавець/моя роботодавиця несправедливо мене звільнив/звільнила?", ru: "Что я могу сделать в Германии, если работодатель незаконно меня уволил?" },
    answers: [
      { de: "weiterarbeiten und freundlich zur Chefin/zum Chef sein", en: "keep working and be friendly to the boss", uk: "продовжувати працювати і бути ввічливим/ввічливою з керівником/керівницею", ru: "продолжать работать и быть любезным с начальником" },
      { de: "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen", en: "start dunning proceedings against the employer", uk: "розпочати проти роботодавця стягнення боргу в порядку наказного провадження", ru: "начать в отношении работодателя приказное производство по взысканию долга" },
      { de: "Kündigungsschutzklage erheben", en: "file an action for protection against dismissal", uk: "подати позов про захист від звільнення", ru: "подать иск о защите от увольнения", correct: true },
      { de: "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen", en: "report the employer to the police", uk: "заявити на роботодавця в поліцію", ru: "заявить на работодателя в полицию" },
    ]
  },
  {
    id: "lid_139",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …", en: "When does a trial in court take place in Germany? When someone …", uk: "Коли в Німеччині відбувається судовий процес? Коли хтось …", ru: "Когда в Германии происходит судебный процесс? Когда кто-то …" },
    answers: [
      { de: "zu einer anderen Religion übertritt.", en: "converts to another religion.", uk: "переходить в іншу релігію.", ru: "переходит в другую религию." },
      { de: "eine Straftat begangen hat und angeklagt wird.", en: "has committed a criminal offence and is charged.", uk: "вчинив злочин і йому висунули обвинувачення.", ru: "совершил уголовно наказуемое деяние и ему предъявлено обвинение.", correct: true },
      { de: "eine andere Meinung als die der Regierung vertritt.", en: "holds a different opinion from the government.", uk: "дотримується іншої думки, ніж уряд.", ru: "придерживается иного мнения, чем правительство." },
      { de: "sein Auto falsch geparkt hat und es abgeschleppt wird.", en: "has parked their car wrongly and it is towed away.", uk: "неправильно припаркував автомобіль, і його евакуюють.", ru: "неправильно припарковал автомобиль, и его эвакуируют." },
    ]
  },
  {
    id: "lid_140",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Was macht eine Schöffin/ein Schöffe in Deutschland? Sie/Er …", en: "What does a lay judge (Schöffe) do in Germany? He/She …", uk: "Що робить шеффен/шеффенка в Німеччині? Він/вона …", ru: "Что делает шёффен (Schöffe) в Германии? Он/она …" },
    answers: [
      { de: "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.", en: "decides together with judges on guilt and punishment.", uk: "разом із суддями вирішує питання про вину і покарання.", ru: "вместе с судьями решает вопросы вины и наказания.", correct: true },
      { de: "gibt Bürgerinnen/Bürgern rechtlichen Rat.", en: "gives citizens legal advice.", uk: "дає громадянам юридичні поради.", ru: "даёт гражданам юридические советы." },
      { de: "stellt Urkunden aus.", en: "issues certificates.", uk: "видає документи.", ru: "выдаёт документы." },
      { de: "verteidigt die Angeklagte/den Angeklagten.", en: "defends the accused.", uk: "захищає обвинуваченого/обвинувачену.", ru: "защищает обвиняемого." },
    ]
  },
  {
    id: "lid_141",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?", en: "Who advises people on legal matters in Germany and represents them in court?", uk: "Хто в Німеччині консультує людей із правових питань і представляє їх у суді?", ru: "Кто в Германии консультирует людей по правовым вопросам и представляет их в суде?" },
    answers: [
      { de: "eine Rechtsanwältin/ein Rechtsanwalt", en: "a lawyer", uk: "адвокат/адвокатка", ru: "адвокат", correct: true },
      { de: "eine Richterin/ein Richter", en: "a judge", uk: "суддя", ru: "судья" },
      { de: "eine Schöffin/ein Schöffe", en: "a lay judge", uk: "шеффен/шеффенка", ru: "шёффен (народный заседатель)" },
      { de: "eine Staatsanwältin/ein Staatsanwalt", en: "a public prosecutor", uk: "прокурор/прокурорка", ru: "прокурор" },
    ]
  },
  {
    id: "lid_142",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland? Eine Richterin/ein Richter …", en: "What is the main task of a judge in Germany? A judge …", uk: "Яке головне завдання судді в Німеччині? Суддя …", ru: "Какая главная задача судьи в Германии? Судья …" },
    answers: [
      { de: "vertritt Bürgerinnen und Bürger vor einem Gericht.", en: "represents citizens before a court.", uk: "представляє громадян у суді.", ru: "представляет граждан в суде." },
      { de: "arbeitet an einem Gericht und spricht Urteile.", en: "works at a court and passes judgments.", uk: "працює в суді і виносить вироки.", ru: "работает в суде и выносит приговоры.", correct: true },
      { de: "ändert Gesetze.", en: "changes laws.", uk: "змінює закони.", ru: "изменяет законы." },
      { de: "betreut Jugendliche vor Gericht.", en: "supervises young people in court.", uk: "опікується неповнолітніми в суді.", ru: "опекает несовершеннолетних в суде." },
    ]
  },
  {
    id: "lid_143",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Eine Richterin/ein Richter in Deutschland gehört zur …", en: "A judge in Germany belongs to the …", uk: "Суддя в Німеччині належить до …", ru: "Судья в Германии относится к …" },
    answers: [
      { de: "Judikative.", en: "judiciary.", uk: "судової влади.", ru: "судебной власти.", correct: true },
      { de: "Exekutive.", en: "executive.", uk: "виконавчої влади.", ru: "исполнительной власти." },
      { de: "Operative.", en: "operative branch.", uk: "оперативної влади.", ru: "оперативной власти." },
      { de: "Legislative.", en: "legislative.", uk: "законодавчої влади.", ru: "законодательной власти." },
    ]
  },
  {
    id: "lid_144",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Eine Richterin/ein Richter gehört in Deutschland zur …", en: "In Germany, a judge belongs to the …", uk: "Суддя в Німеччині належить до …", ru: "Судья в Германии относится к …" },
    answers: [
      { de: "vollziehenden Gewalt.", en: "executive power.", uk: "виконавчої влади.", ru: "исполнительной власти." },
      { de: "rechtsprechenden Gewalt.", en: "judicial power.", uk: "судової влади.", ru: "судебной власти.", correct: true },
      { de: "planenden Gewalt.", en: "planning power.", uk: "планувальної влади.", ru: "планирующей власти." },
      { de: "gesetzgebenden Gewalt.", en: "legislative power.", uk: "законодавчої влади.", ru: "законодательной власти." },
    ]
  },
  {
    id: "lid_145",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter? Für die …", en: "In Germany, state power is divided. Which branch of state power does a judge work for? For the …", uk: "У Німеччині державна влада поділена. Яка гілка влади охоплює роботу судді?", ru: "В Германии государственная власть разделена. К какой ветви власти относится работа судьи? К …" },
    answers: [
      { de: "Judikative", en: "judiciary", uk: "судова влада", ru: "судебной", correct: true },
      { de: "Exekutive", en: "executive", uk: "виконавча влада", ru: "исполнительной" },
      { de: "Presse", en: "press", uk: "преса", ru: "прессе" },
      { de: "Legislative", en: "legislative", uk: "законодавча влада", ru: "законодательной" },
    ]
  },
  {
    id: "lid_146",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?", en: "What is a procedure before a court called in Germany?", uk: "Як у Німеччині називають розгляд справи в суді?", ru: "Как называется в Германии производство в суде?" },
    answers: [
      { de: "Programm", en: "programme", uk: "програма", ru: "программа" },
      { de: "Prozedur", en: "procedure", uk: "процедура", ru: "процедура" },
      { de: "Protokoll", en: "protocol", uk: "протокол", ru: "протокол" },
      { de: "Prozess", en: "trial", uk: "процес", ru: "процесс", correct: true },
    ]
  },
  {
    id: "lid_147",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?", en: "What is the work of a judge in Germany?", uk: "Яка робота судді в Німеччині?", ru: "В чём заключается работа судьи в Германии?" },
    answers: [
      { de: "Deutschland regieren", en: "governing Germany", uk: "управляти Німеччиною", ru: "управлять Германией" },
      { de: "Recht sprechen", en: "administering justice (passing judgment)", uk: "здійснювати правосуддя", ru: "вершить правосудие", correct: true },
      { de: "Pläne erstellen", en: "drawing up plans", uk: "складати плани", ru: "составлять планы" },
      { de: "Gesetze erlassen", en: "enacting laws", uk: "видавати закони", ru: "издавать законы" },
    ]
  },
  {
    id: "lid_148",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Was ist eine Aufgabe der Polizei in Deutschland?", en: "What is a task of the police in Germany?", uk: "Яке завдання поліції в Німеччині?", ru: "Какая задача у полиции в Германии?" },
    answers: [
      { de: "das Land zu verteidigen", en: "to defend the country", uk: "захищати країну", ru: "защищать страну" },
      { de: "die Bürgerinnen und Bürger abzuhören", en: "to eavesdrop on citizens", uk: "прослуховувати громадян", ru: "прослушивать граждан" },
      { de: "die Gesetze zu beschließen", en: "to pass laws", uk: "ухвалювати закони", ru: "принимать законы" },
      { de: "die Einhaltung von Gesetzen zu überwachen", en: "to monitor compliance with the laws", uk: "стежити за дотриманням законів", ru: "следить за соблюдением законов", correct: true },
    ]
  },
  {
    id: "lid_149",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Was ist ein Beispiel für antisemitisches Verhalten?", en: "What is an example of antisemitic behaviour?", uk: "Що є прикладом антисемітської поведінки?", ru: "Что является примером антисемитского поведения?" },
    answers: [
      { de: "ein jüdisches Fest besuchen", en: "attending a Jewish festival", uk: "відвідати єврейське свято", ru: "посещение еврейского праздника" },
      { de: "die israelische Regierung kritisieren", en: "criticising the Israeli government", uk: "критикувати ізраїльський уряд", ru: "критика израильского правительства" },
      { de: "den Holocaust leugnen", en: "denying the Holocaust", uk: "заперечувати Голокост", ru: "отрицание Холокоста", correct: true },
      { de: "gegen Juden Fußball spielen.", en: "playing football against Jews.", uk: "грати у футбол проти євреїв.", ru: "игра в футбол против евреев." },
    ]
  },
  {
    id: "lid_150",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …", en: "A lay judge (Gerichtsschöffe) in Germany is …", uk: "Шеффен/шеффенка в Німеччині — це …", ru: "Шёффен суда (Gerichtsschöffe) в Германии — это …" },
    answers: [
      { de: "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.", en: "the deputy of the head of the city.", uk: "заступник/заступниця міського голови.", ru: "заместитель главы города." },
      { de: "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.", en: "a voluntary (honorary) judge.", uk: "суддя на громадських засадах.", ru: "судья-общественник (почётный судья).", correct: true },
      { de: "ein Mitglied eines Gemeinderats.", en: "a member of a municipal council.", uk: "член ради громади.", ru: "член общинного совета." },
      { de: "eine Person, die Jura studiert hat.", en: "a person who has studied law.", uk: "особа, яка вивчала право.", ru: "человек, изучавший право." },
    ]
  },
  {
    id: "lid_151",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wer baute die Mauer in Berlin?", en: "Who built the Wall in Berlin?", uk: "Хто збудував Берлінський мур?", ru: "Кто построил стену в Берлине?" },
    answers: [
      { de: "Großbritannien", en: "Great Britain", uk: "Великобританія", ru: "Великобритания" },
      { de: "die DDR", en: "the GDR", uk: "НДР", ru: "ГДР", correct: true },
      { de: "die Bundesrepublik Deutschland", en: "the Federal Republic of Germany", uk: "Федеративна Республіка Німеччина", ru: "Федеративная Республика Германия" },
      { de: "die USA", en: "the USA", uk: "США", ru: "США" },
    ]
  },
  {
    id: "lid_152",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?", en: "When were the National Socialists under Adolf Hitler in power in Germany?", uk: "Коли націонал-соціалісти з Адольфом Гітлером були при владі в Німеччині?", ru: "Когда национал-социалисты во главе с Адольфом Гитлером находились у власти в Германии?" },
    answers: [
      { de: "1918 bis 1923", en: "1918 to 1923", uk: "з 1918 до 1923 року", ru: "с 1918 по 1923 год" },
      { de: "1932 bis 1950", en: "1932 to 1950", uk: "з 1932 до 1950 року", ru: "с 1932 по 1950 год" },
      { de: "1933 bis 1945", en: "1933 to 1945", uk: "з 1933 до 1945 року", ru: "с 1933 по 1945 год", correct: true },
      { de: "1945 bis 1989", en: "1945 to 1989", uk: "з 1945 до 1989 року", ru: "с 1945 по 1989 год" },
    ]
  },
  {
    id: "lid_153",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Was war am 8. Mai 1945?", en: "What happened on 8 May 1945?", uk: "Що було 8 травня 1945 року?", ru: "Что произошло 8 мая 1945 года?" },
    answers: [
      { de: "Tod Adolf Hitlers", en: "death of Adolf Hitler", uk: "смерть Адольфа Гітлера", ru: "смерть Адольфа Гитлера" },
      { de: "Beginn des Berliner Mauerbaus", en: "start of the building of the Berlin Wall", uk: "початок будівництва Берлінського муру", ru: "начало строительства Берлинской стены" },
      { de: "Wahl von Konrad Adenauer zum Bundeskanzler", en: "election of Konrad Adenauer as Federal Chancellor", uk: "обрання Конрада Аденауера федеральним канцлером", ru: "избрание Конрада Аденауэра федеральным канцлером" },
      { de: "Ende des Zweiten Weltkriegs in Europa", en: "end of the Second World War in Europe", uk: "закінчення Другої світової війни в Європі", ru: "окончание Второй мировой войны в Европе", correct: true },
    ]
  },
  {
    id: "lid_154",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wann war der Zweite Weltkrieg zu Ende?", en: "When did the Second World War end?", uk: "Коли закінчилася Друга світова війна?", ru: "Когда закончилась Вторая мировая война?" },
    answers: [
      { de: "1933", en: "1933", uk: "1933", ru: "1933" },
      { de: "1945", en: "1945", uk: "1945", ru: "1945", correct: true },
      { de: "1949", en: "1949", uk: "1949", ru: "1949" },
      { de: "1961", en: "1961", uk: "1961", ru: "1961" },
    ]
  },
  {
    id: "lid_155",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Wann waren die Nationalsozialisten in Deutschland an der Macht?", en: "When were the National Socialists in power in Germany?", uk: "Коли націонал-соціалісти були при владі в Німеччині?", ru: "Когда национал-социалисты находились у власти в Германии?" },
    answers: [
      { de: "1888 bis 1918", en: "1888 to 1918", uk: "з 1888 до 1918 року", ru: "с 1888 по 1918 год" },
      { de: "1921 bis 1934", en: "1921 to 1934", uk: "з 1921 до 1934 року", ru: "с 1921 по 1934 год" },
      { de: "1933 bis 1945", en: "1933 to 1945", uk: "з 1933 до 1945 року", ru: "с 1933 по 1945 год", correct: true },
      { de: "1949 bis 1963", en: "1949 to 1963", uk: "з 1949 до 1963 року", ru: "с 1949 по 1963 год" },
    ]
  },
  {
    id: "lid_156",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "In welchem Jahr wurde Hitler Reichskanzler?", en: "In which year did Hitler become Reich Chancellor?", uk: "У якому році Гітлер став рейхсканцлером?", ru: "В каком году Гитлер стал рейхсканцлером?" },
    answers: [
      { de: "1923", en: "1923", uk: "1923", ru: "1923" },
      { de: "1927", en: "1927", uk: "1927", ru: "1927" },
      { de: "1933", en: "1933", uk: "1933", ru: "1933", correct: true },
      { de: "1936", en: "1936", uk: "1936", ru: "1936" },
    ]
  },
  {
    id: "lid_157",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …", en: "In 1933, the National Socialists under Adolf Hitler established in Germany …", uk: "Націонал-соціалісти з Адольфом Гітлером створили в 1933 році в Німеччині …", ru: "В 1933 году национал-социалисты во главе с Адольфом Гитлером установили в Германии …" },
    answers: [
      { de: "eine Diktatur.", en: "a dictatorship.", uk: "диктатура.", ru: "диктатуру.", correct: true },
      { de: "einen demokratischen Staat.", en: "a democratic state.", uk: "демократичну державу.", ru: "демократическое государство." },
      { de: "eine Monarchie.", en: "a monarchy.", uk: "монархія.", ru: "монархию." },
      { de: "ein Fürstentum.", en: "a principality.", uk: "князівство.", ru: "княжество." },
    ]
  },
  {
    id: "lid_158",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Das „Dritte Reich“ war eine …", en: "The “Third Reich” was a …", uk: "«Третій рейх» був …", ru: "«Третий рейх» был …" },
    answers: [
      { de: "Diktatur.", en: "dictatorship.", uk: "диктатурою.", ru: "диктатурой.", correct: true },
      { de: "Demokratie.", en: "democracy.", uk: "демократією.", ru: "демократией." },
      { de: "Monarchie.", en: "monarchy.", uk: "монархією.", ru: "монархией." },
      { de: "Räterepublik.", en: "soviet republic (council republic).", uk: "республікою рад.", ru: "советской республикой." },
    ]
  },
  {
    id: "lid_159",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?", en: "What was there not in Germany during the time of National Socialism?", uk: "Чого не було в Німеччині за часів націонал-соціалізму?", ru: "Чего не было в Германии в период национал-социализма?" },
    answers: [
      { de: "freie Wahlen", en: "free elections", uk: "вільних виборів", ru: "свободных выборов", correct: true },
      { de: "Pressezensur", en: "press censorship", uk: "цензура преси", ru: "цензуры прессы" },
      { de: "willkürliche Verhaftungen", en: "arbitrary arrests", uk: "свавільних арештів", ru: "произвольных арестов" },
      { de: "Verfolgung von Juden", en: "persecution of Jews", uk: "переслідування євреїв", ru: "преследования евреев" },
    ]
  },
  {
    id: "lid_160",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Welcher Krieg dauerte von 1939 bis 1945?", en: "Which war lasted from 1939 to 1945?", uk: "Яка війна тривала з 1939 до 1945 року?", ru: "Какая война длилась с 1939 по 1945 год?" },
    answers: [
      { de: "der Erste Weltkrieg", en: "the First World War", uk: "Перша світова війна", ru: "Первая мировая война" },
      { de: "der Zweite Weltkrieg", en: "the Second World War", uk: "Друга світова війна", ru: "Вторая мировая война", correct: true },
      { de: "der Vietnamkrieg", en: "the Vietnam War", uk: "війна у Вʼєтнамі", ru: "война во Вьетнаме" },
      { de: "der Golfkrieg", en: "the Gulf War", uk: "війна в Перській затоці", ru: "война в Персидском заливе" },
    ]
  },
  {
    id: "lid_161",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was kennzeichnete den NS-Staat? Eine Politik …", en: "What characterised the Nazi state? A policy of …", uk: "Що було характерним для нацистської держави? Політика …", ru: "Что было характерно для нацистского государства? Политика …" },
    answers: [
      { de: "des staatlichen Rassismus", en: "state racism", uk: "державного расизму", ru: "государственного расизма", correct: true },
      { de: "der Meinungsfreiheit", en: "freedom of expression", uk: "свободи слова", ru: "свободы мнений" },
      { de: "der allgemeinen Religionsfreiheit", en: "general freedom of religion", uk: "загальної свободи віросповідання", ru: "всеобщей свободы вероисповедания" },
      { de: "der Entwicklung der Demokratie", en: "the development of democracy", uk: "розвитку демократії", ru: "развития демократии" },
    ]
  },
  {
    id: "lid_162",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Claus Schenk Graf von Stauffenberg wurde bekannt durch …", en: "Claus Schenk Graf von Stauffenberg became known for …", uk: "Клаус Шенк граф фон Штауффенберг став відомим завдяки …", ru: "Клаус Шенк граф фон Штауффенберг стал известен благодаря …" },
    answers: [
      { de: "eine Goldmedaille bei den Olympischen Spielen 1936.", en: "a gold medal at the 1936 Olympic Games.", uk: "золотій медалі на Олімпійських іграх 1936 року.", ru: "золотой медали на Олимпийских играх 1936 года." },
      { de: "den Bau des Reichstagsgebäudes.", en: "building the Reichstag building.", uk: "будівництву будівлі Рейхстагу.", ru: "строительству здания Рейхстага." },
      { de: "den Aufbau der Wehrmacht.", en: "building up the Wehrmacht.", uk: "створенню Вермахту.", ru: "созданию вермахта." },
      { de: "das Attentat auf Hitler am 20. Juli 1944.", en: "the assassination attempt on Hitler on 20 July 1944.", uk: "замаху на Гітлера 20 липня 1944 року.", ru: "покушению на Гитлера 20 июля 1944 года.", correct: true },
    ]
  },
  {
    id: "lid_163",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?", en: "In which year did the National Socialists destroy synagogues and Jewish shops in Germany?", uk: "У якому році націонал-соціалісти зруйнували синагоги та єврейські магазини в Німеччині?", ru: "В каком году национал-социалисты разрушили синагоги и еврейские магазины в Германии?" },
    answers: [
      { de: "1925", en: "1925", uk: "1925", ru: "1925" },
      { de: "1930", en: "1930", uk: "1930", ru: "1930" },
      { de: "1938", en: "1938", uk: "1938", ru: "1938", correct: true },
      { de: "1945", en: "1945", uk: "1945", ru: "1945" },
    ]
  },
  {
    id: "lid_164",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was passierte am 9. November 1938 in Deutschland?", en: "What happened on 9 November 1938 in Germany?", uk: "Що сталося 9 листопада 1938 року в Німеччині?", ru: "Что произошло 9 ноября 1938 года в Германии?" },
    answers: [
      { de: "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.", en: "The attack on Poland marks the beginning of the Second World War.", uk: "Нападом на Польщу починається Друга світова війна.", ru: "Нападением на Польшу началась Вторая мировая война." },
      { de: "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.", en: "The National Socialists lose an election and dissolve the Reichstag.", uk: "Націонал-соціалісти програють вибори і розпускають Рейхстаг.", ru: "Национал-социалисты проигрывают выборы и распускают Рейхстаг." },
      { de: "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.", en: "Jewish shops and synagogues are destroyed by National Socialists and their supporters.", uk: "Єврейські магазини та синагоги руйнують націонал-соціалісти та їхні прихильники.", ru: "Еврейские магазины и синагоги разрушены национал-социалистами и их сторонниками.", correct: true },
      { de: "Hitler wird Reichspräsident und lässt alle Parteien verbieten.", en: "Hitler becomes Reich President and has all parties banned.", uk: "Гітлер стає рейхспрезидентом і забороняє всі партії.", ru: "Гитлер становится рейхспрезидентом и запрещает все партии." },
    ]
  },
  {
    id: "lid_165",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?", en: "What was the name of the first Federal Chancellor of the Federal Republic of Germany?", uk: "Як звали першого федерального канцлера Федеративної Республіки Німеччина?", ru: "Как звали первого федерального канцлера Федеративной Республики Германия?" },
    answers: [
      { de: "Konrad Adenauer", en: "Konrad Adenauer", uk: "Конрад Аденауер", ru: "Конрад Аденауэр", correct: true },
      { de: "Kurt Georg Kiesinger", en: "Kurt Georg Kiesinger", uk: "Курт Георг Кізінгер", ru: "Курт Георг Кизингер" },
      { de: "Helmut Schmidt", en: "Helmut Schmidt", uk: "Гельмут Шмідт", ru: "Гельмут Шмидт" },
      { de: "Willy Brandt", en: "Willy Brandt", uk: "Віллі Брандт", ru: "Вилли Брандт" },
    ]
  },
  {
    id: "lid_166",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Bei welchen Demonstrationen in Deutschland riefen die Menschen „Wir sind das Volk“?", en: "At which demonstrations in Germany did people chant “We are the people”?", uk: "Під час яких демонстрацій у Німеччині люди скандували «Ми — народ»?", ru: "На каких демонстрациях в Германии люди кричали «Мы — народ»?" },
    answers: [
      { de: "beim Arbeiteraufstand 1953 in der DDR", en: "at the workers’ uprising of 1953 in the GDR", uk: "під час повстання робітників 1953 року в НДР", ru: "во время рабочего восстания 1953 года в ГДР" },
      { de: "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland", en: "at the demonstrations of 1968 in the Federal Republic of Germany", uk: "під час демонстрацій 1968 року у Федеративній Республіці Німеччина", ru: "на демонстрациях 1968 года в Федеративной Республике Германия" },
      { de: "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland", en: "at the anti-nuclear demonstrations of 1985 in the Federal Republic of Germany", uk: "під час антиатомних демонстрацій 1985 року у Федеративній Республіці Німеччина", ru: "на антиатомных демонстрациях 1985 года в Федеративной Республике Германия" },
      { de: "bei den Montagsdemonstrationen 1989 in der DDR", en: "at the Monday demonstrations of 1989 in the GDR", uk: "під час понеділкових демонстрацій 1989 року в НДР", ru: "на «понедельничных демонстрациях» 1989 года в ГДР", correct: true },
    ]
  },
  {
    id: "lid_167",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als „Alliierte Besatzungsmächte“ bezeichnet?", en: "Which countries were referred to as “Allied occupying powers” in Germany after the Second World War?", uk: "Які країни після Другої світової війни називали в Німеччині «союзними окупаційними державами»?", ru: "Какие страны после Второй мировой войны назывались в Германии «союзными оккупационными державами»?" },
    answers: [
      { de: "Sowjetunion, Großbritannien, Polen, Schweden", en: "Soviet Union, Great Britain, Poland, Sweden", uk: "Радянський Союз, Великобританія, Польща, Швеція", ru: "Советский Союз, Великобритания, Польша, Швеция" },
      { de: "Frankreich, Sowjetunion, Italien, Japan", en: "France, Soviet Union, Italy, Japan", uk: "Франція, Радянський Союз, Італія, Японія", ru: "Франция, Советский Союз, Италия, Япония" },
      { de: "USA, Sowjetunion, Spanien, Portugal", en: "USA, Soviet Union, Spain, Portugal", uk: "США, Радянський Союз, Іспанія, Португалія", ru: "США, Советский Союз, Испания, Португалия" },
      { de: "USA, Sowjetunion, Großbritannien, Frankreich", en: "USA, Soviet Union, Great Britain, France", uk: "США, Радянський Союз, Великобританія, Франція", ru: "США, Советский Союз, Великобритания, Франция", correct: true },
    ]
  },
  {
    id: "lid_168",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Welches Land war keine „Alliierte Besatzungsmacht“ in Deutschland?", en: "Which country was not an “Allied occupying power” in Germany?", uk: "Яка країна не була «союзною окупаційною державою» в Німеччині?", ru: "Какая страна не была «союзной оккупационной державой» в Германии?" },
    answers: [
      { de: "USA", en: "USA", uk: "США", ru: "США" },
      { de: "Sowjetunion", en: "Soviet Union", uk: "Радянський Союз", ru: "Советский Союз" },
      { de: "Frankreich", en: "France", uk: "Франція", ru: "Франция" },
      { de: "Japan", en: "Japan", uk: "Японія", ru: "Япония", correct: true },
    ]
  },
  {
    id: "lid_169",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wann wurde die Bundesrepublik Deutschland gegründet?", en: "When was the Federal Republic of Germany founded?", uk: "Коли було засновано Федеративну Республіку Німеччина?", ru: "Когда была основана Федеративная Республика Германия?" },
    answers: [
      { de: "1939", en: "1939", uk: "1939", ru: "1939" },
      { de: "1945", en: "1945", uk: "1945", ru: "1945" },
      { de: "1949", en: "1949", uk: "1949", ru: "1949", correct: true },
      { de: "1951", en: "1951", uk: "1951", ru: "1951" },
    ]
  },
  {
    id: "lid_170",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was gab es während der Zeit des Nationalsozialismus in Deutschland?", en: "What existed in Germany during the time of National Socialism?", uk: "Що існувало в Німеччині за часів націонал-соціалізму?", ru: "Что существовало в Германии в период национал-социализма?" },
    answers: [
      { de: "das Verbot von Parteien", en: "the banning of parties", uk: "заборона партій", ru: "запрет партий", correct: true },
      { de: "das Recht zur freien Entfaltung der Persönlichkeit", en: "the right to the free development of one’s personality", uk: "право на вільний розвиток особистості", ru: "право на свободное развитие личности" },
      { de: "Pressefreiheit", en: "freedom of the press", uk: "свобода преси", ru: "свобода прессы" },
      { de: "den Schutz der Menschenwürde", en: "the protection of human dignity", uk: "захист людської гідності", ru: "защита человеческого достоинства" },
    ]
  },
  {
    id: "lid_171",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Soziale Marktwirtschaft bedeutet, die Wirtschaft …", en: "Social market economy means that the economy …", uk: "Соціальна ринкова економіка означає, що економіка …", ru: "Социальная рыночная экономика означает, что экономика …" },
    answers: [
      { de: "steuert sich allein nach Angebot und Nachfrage.", en: "is controlled solely by supply and demand.", uk: "регулюється лише попитом і пропозицією.", ru: "регулируется исключительно спросом и предложением." },
      { de: "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.", en: "is planned and controlled by the state, with supply and demand not taken into account.", uk: "планується і регулюється державою, попит і пропозиція не враховуються.", ru: "планируется и управляется государством, спрос и предложение не учитываются." },
      { de: "richtet sich nach der Nachfrage im Ausland.", en: "is guided by demand abroad.", uk: "орієнтується на попит за кордоном.", ru: "ориентируется на спрос за рубежом." },
      { de: "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.", en: "is guided by supply and demand, but the state ensures social balance.", uk: "орієнтується на попит і пропозицію, але держава забезпечує соціальну рівновагу.", ru: "ориентируется на спрос и предложение, но государство обеспечивает социальное выравнивание.", correct: true },
    ]
  },
  {
    id: "lid_172",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "In welcher Besatzungszone wurde die DDR gegründet? In der …", en: "In which occupation zone was the GDR founded? In the …", uk: "У якій окупаційній зоні було створено НДР? У …", ru: "В какой оккупационной зоне была основана ГДР? В …" },
    answers: [
      { de: "amerikanischen Besatzungszone", en: "American occupation zone", uk: "американській окупаційній зоні", ru: "американской оккупационной зоне" },
      { de: "französischen Besatzungszone", en: "French occupation zone", uk: "французькій окупаційній зоні", ru: "французской оккупационной зоне" },
      { de: "britischen Besatzungszone", en: "British occupation zone", uk: "британській окупаційній зоні", ru: "британской оккупационной зоне" },
      { de: "sowjetischen Besatzungszone", en: "Soviet occupation zone", uk: "радянській окупаційній зоні", ru: "советской оккупационной зоне", correct: true },
    ]
  },
  {
    id: "lid_173",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …", en: "The Federal Republic of Germany is a founding member of …", uk: "Федеративна Республіка Німеччина є однією із засновників …", ru: "Федеративная Республика Германия — страна-основатель …" },
    answers: [
      { de: "des Nordatlantikpakts (NATO).", en: "the North Atlantic Treaty Organization (NATO).", uk: "Північноатлантичного альянсу (НАТО).", ru: "Организации Североатлантического договора (НАТО)." },
      { de: "der Vereinten Nationen (VN).", en: "the United Nations (UN).", uk: "Організації Обʼєднаних Націй (ООН).", ru: "Организации Объединённых Наций (ООН)." },
      { de: "der Europäischen Union (EU).", en: "the European Union (EU).", uk: "Європейського Союзу (ЄС).", ru: "Европейского союза (ЕС).", correct: true },
      { de: "des Warschauer Pakts.", en: "the Warsaw Pact.", uk: "Варшавського договору.", ru: "Варшавского договора." },
    ]
  },
  {
    id: "lid_174",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Wann wurde die DDR gegründet?", en: "When was the GDR founded?", uk: "Коли було створено НДР?", ru: "Когда была основана ГДР?" },
    answers: [
      { de: "1947", en: "1947", uk: "1947", ru: "1947" },
      { de: "1949", en: "1949", uk: "1949", ru: "1949", correct: true },
      { de: "1953", en: "1953", uk: "1953", ru: "1953" },
      { de: "1956", en: "1956", uk: "1956", ru: "1956" },
    ]
  },
  {
    id: "lid_175",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?", en: "How many occupation zones were there in Germany after the Second World War?", uk: "Скільки окупаційних зон було в Німеччині після Другої світової війни?", ru: "Сколько оккупационных зон было в Германии после Второй мировой войны?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4", correct: true },
      { de: "5", en: "5", uk: "5", ru: "5" },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_176",
    lessonId: "k13m4",
    cat: "ns",
    img: "lid_176.png",
    question: { de: "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?", en: "How were the occupation zones of Germany distributed after 1945?", uk: "Як були розподілені окупаційні зони Німеччини після 1945 року?", ru: "Как были распределены оккупационные зоны Германии после 1945 года?" },
    answers: [
      { de: "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA", en: "1=Great Britain, 2=Soviet Union, 3=France, 4=USA", uk: "1=Великобританія, 2=Радянський Союз, 3=Франція, 4=США", ru: "1 = Великобритания, 2 = Советский Союз, 3 = Франция, 4 = США" },
      { de: "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich", en: "1=Soviet Union, 2=Great Britain, 3=USA, 4=France", uk: "1=Радянський Союз, 2=Великобританія, 3=США, 4=Франція", ru: "1 = Советский Союз, 2 = Великобритания, 3 = США, 4 = Франция" },
      { de: "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich", en: "1=Great Britain, 2=Soviet Union, 3=USA, 4=France", uk: "1=Великобританія, 2=Радянський Союз, 3=США, 4=Франція", ru: "1 = Великобритания, 2 = Советский Союз, 3 = США, 4 = Франция", correct: true },
      { de: "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich", en: "1=Great Britain, 2=USA, 3=Soviet Union, 4=France", uk: "1=Великобританія, 2=США, 3=Радянський Союз, 4=Франція", ru: "1 = Великобритания, 2 = США, 3 = Советский Союз, 4 = Франция" },
    ]
  },
  {
    id: "lid_177",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?", en: "Which German city was divided into four sectors after the Second World War?", uk: "Яке німецьке місто після Другої світової війни було розділене на чотири сектори?", ru: "Какой немецкий город был после Второй мировой войны разделён на четыре сектора?" },
    answers: [
      { de: "München", en: "Munich", uk: "Мюнхен", ru: "Мюнхен" },
      { de: "Berlin", en: "Berlin", uk: "Берлін", ru: "Берлин", correct: true },
      { de: "Dresden", en: "Dresden", uk: "Дрезден", ru: "Дрезден" },
      { de: "Frankfurt/Oder", en: "Frankfurt (Oder)", uk: "Франкфурт-на-Одері", ru: "Франкфурт-на-Одере" },
    ]
  },
  {
    id: "lid_178",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?", en: "From June 1948 to May 1949, the citizens of West Berlin were supplied by an airlift. What circumstance was responsible for this?", uk: "З червня 1948 до травня 1949 року жителів Західного Берліна забезпечували через повітряний міст. Яка обставина була причиною цього?", ru: "С июня 1948 по май 1949 года жителей Западного Берлина снабжали по воздушному мосту. Какое обстоятельство было тому причиной?" },
    answers: [
      { de: "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.", en: "For France, supplying the West Berlin population by air was cheaper.", uk: "Для Франції постачання населення Західного Берліна літаками було дешевшим.", ru: "Для Франции снабжение населения Западного Берлина по воздуху было дешевле." },
      { de: "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.", en: "American soldiers were afraid of ambushes during land transport.", uk: "Американські солдати та солдатки боялися нападів під час наземних перевезень.", ru: "Американские солдаты боялись нападений при наземной перевозке." },
      { de: "Für Großbritannien war die Versorgung über die Luftbrücke schneller.", en: "For Great Britain, supply via the airlift was faster.", uk: "Для Великобританії постачання через повітряний міст було швидшим.", ru: "Для Великобритании снабжение по воздушному мосту было быстрее." },
      { de: "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.", en: "The Soviet Union cut off all traffic by land.", uk: "Радянський Союз перервав усе сполучення сухопутними шляхами.", ru: "Советский Союз прервал всё сообщение по суше.", correct: true },
    ]
  },
  {
    id: "lid_179",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Wie endete der Zweite Weltkrieg in Europa offiziell?", en: "How did the Second World War officially end in Europe?", uk: "Як офіційно закінчилася Друга світова війна в Європі?", ru: "Как официально закончилась Вторая мировая война в Европе?" },
    answers: [
      { de: "mit dem Tod Adolf Hitlers", en: "with the death of Adolf Hitler", uk: "зі смертю Адольфа Гітлера", ru: "смертью Адольфа Гитлера" },
      { de: "durch die bedingungslose Kapitulation Deutschlands", en: "through the unconditional surrender of Germany", uk: "безумовною капітуляцією Німеччини", ru: "безоговорочной капитуляцией Германии", correct: true },
      { de: "mit dem Rückzug der Deutschen aus den besetzten Gebieten", en: "with the withdrawal of the Germans from the occupied territories", uk: "виведенням німців з окупованих територій", ru: "выводом немцев с оккупированных территорий" },
      { de: "durch eine Revolution in Deutschland", en: "through a revolution in Germany", uk: "революцією в Німеччині", ru: "революцией в Германии" },
    ]
  },
  {
    id: "lid_180",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Der erste Bundeskanzler der Bundesrepublik Deutschland war …", en: "The first Federal Chancellor of the Federal Republic of Germany was …", uk: "Першим федеральним канцлером Федеративної Республіки Німеччина був …", ru: "Первым федеральным канцлером Федеративной Республики Германия был …" },
    answers: [
      { de: "Ludwig Erhard.", en: "Ludwig Erhard.", uk: "Людвіг Ерхард.", ru: "Людвиг Эрхард." },
      { de: "Willy Brandt.", en: "Willy Brandt.", uk: "Віллі Брандт.", ru: "Вилли Брандт." },
      { de: "Konrad Adenauer.", en: "Konrad Adenauer.", uk: "Конрад Аденауер.", ru: "Конрад Аденауэр.", correct: true },
      { de: "Gerhard Schröder.", en: "Gerhard Schröder.", uk: "Герхард Шредер.", ru: "Герхард Шрёдер." },
    ]
  },
  {
    id: "lid_181",
    lessonId: "k14m2",
    cat: "nach1945",
    img: "lid_181.png",
    imgCredit: "© Bundesregierung/Engelbert Reineke",
    question: { de: "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?", en: "What did Willy Brandt want to express with his kneeling in 1970 at the former Jewish ghetto in Warsaw?", uk: "Що хотів висловити Віллі Брандт своїм вклякненням у 1970 році в колишньому єврейському гетто у Варшаві?", ru: "Что хотел выразить Вилли Брандт, преклонив колени в 1970 году у бывшего еврейского гетто в Варшаве?" },
    answers: [
      { de: "Er hat sich den ehemaligen Alliierten unterworfen.", en: "He submitted to the former Allies.", uk: "Він підкорився колишнім союзникам.", ru: "Он подчинился бывшим союзникам." },
      { de: "Er bat Polen und die polnischen Juden um Vergebung.", en: "He asked Poland and the Polish Jews for forgiveness.", uk: "Він попросив пробачення в Польщі та польських євреїв.", ru: "Он просил прощения у Польши и польских евреев.", correct: true },
      { de: "Er zeigte seine Demut vor dem Warschauer Pakt.", en: "He showed his humility before the Warsaw Pact.", uk: "Він виявив свою покору перед Варшавським договором.", ru: "Он показал своё смирение перед Варшавским договором." },
      { de: "Er sprach ein Gebet am Grab des Unbekannten Soldaten.", en: "He said a prayer at the Tomb of the Unknown Soldier.", uk: "Він промовив молитву біля могили Невідомого солдата.", ru: "Он произнёс молитву у могилы Неизвестного солдата." },
    ]
  },
  {
    id: "lid_182",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Wie heißt das jüdische Gebetshaus?", en: "What is the Jewish house of prayer called?", uk: "Як називається єврейський молитовний будинок?", ru: "Как называется еврейский молитвенный дом?" },
    answers: [
      { de: "Basilika", en: "basilica", uk: "базиліка", ru: "базилика" },
      { de: "Moschee", en: "mosque", uk: "мечеть", ru: "мечеть" },
      { de: "Synagoge", en: "synagogue", uk: "синагога", ru: "синагога", correct: true },
      { de: "Kirche", en: "church", uk: "церква", ru: "церковь" },
    ]
  },
  {
    id: "lid_183",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Wann war in der Bundesrepublik Deutschland das „Wirtschaftswunder“?", en: "When was the “economic miracle” (Wirtschaftswunder) in the Federal Republic of Germany?", uk: "Коли у Федеративній Республіці Німеччина було «економічне диво»?", ru: "Когда в Федеративной Республике Германия было «экономическое чудо» (Wirtschaftswunder)?" },
    answers: [
      { de: "40er Jahre", en: "the 1940s", uk: "40-ві роки", ru: "в 1940-е годы" },
      { de: "50er Jahre", en: "the 1950s", uk: "50-ті роки", ru: "в 1950-е годы", correct: true },
      { de: "70er Jahre", en: "the 1970s", uk: "70-ті роки", ru: "в 1970-е годы" },
      { de: "80er Jahre", en: "the 1980s", uk: "80-ті роки", ru: "в 1980-е годы" },
    ]
  },
  {
    id: "lid_184",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "184.   Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?", en: "On what legal basis was the State of Israel founded?", uk: "На якій правовій основі було створено державу Ізраїль?", ru: "На какой правовой основе было создано государство Израиль?" },
    answers: [
      { de: "eine Resolution der Vereinten Nationen", en: "a resolution of the United Nations", uk: "резолюція Організації Обʼєднаних Націй", ru: "резолюция Организации Объединённых Наций", correct: true },
      { de: "ein Beschluss des Zionistenkongresses", en: "a decision of the Zionist Congress", uk: "рішення Сіоністського конгресу", ru: "решение Сионистского конгресса" },
      { de: "ein Vorschlag der Bundesregierung", en: "a proposal by the Federal Government", uk: "пропозиція федерального уряду", ru: "предложение федерального правительства" },
      { de: "ein Vorschlag der UdSSR", en: "a proposal by the USSR", uk: "пропозиція СРСР", ru: "предложение СССР" },
    ]
  },
  {
    id: "lid_185",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Wofür stand der Ausdruck „Eiserner Vorhang“? Für die Abschottung …", en: "What did the term “Iron Curtain” stand for? For the sealing off …", uk: "Що означав вислів «залізна завіса»? Ізоляцію …", ru: "Что означало выражение «железный занавес»? Изоляцию …" },
    answers: [
      { de: "des Warschauer Pakts gegen den Westen", en: "of the Warsaw Pact against the West", uk: "Варшавського договору від Заходу", ru: "Варшавского договора от Запада", correct: true },
      { de: "Norddeutschlands gegen Süddeutschland", en: "of northern Germany against southern Germany", uk: "Північної Німеччини від Південної Німеччини", ru: "Северной Германии от Южной Германии" },
      { de: "Nazi-Deutschlands gegen die Alliierten", en: "of Nazi Germany against the Allies", uk: "нацистської Німеччини від союзників", ru: "нацистской Германии от союзников" },
      { de: "Europas gegen die USA", en: "of Europe against the USA", uk: "Європи від США", ru: "Европы от США" },
    ]
  },
  {
    id: "lid_186",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?", en: "In 1953 there was an uprising in the GDR, which was commemorated for a long time by a public holiday in the Federal Republic of Germany. When was that?", uk: "У 1953 році в НДР відбулося повстання, про яке довгий час нагадувало державне свято у Федеративній Республіці Німеччина. Коли це було?", ru: "В 1953 году в ГДР произошло восстание, о котором долгое время напоминал праздничный день в Федеративной Республике Германия. Когда это было?" },
    answers: [
      { de: "1. Mai", en: "1 May", uk: "1 травня", ru: "1 мая" },
      { de: "17. Juni", en: "17 June", uk: "17 червня", ru: "17 июня", correct: true },
      { de: "20. Juli", en: "20 July", uk: "20 липня", ru: "20 июля" },
      { de: "9. November", en: "9 November", uk: "9 листопада", ru: "9 ноября" },
    ]
  },
  {
    id: "lid_187",
    lessonId: "k14m3",
    cat: "nach1945",
    img: "lid_187.png",
    question: { de: "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?", en: "Which German state had a black-red-gold flag with a hammer, compass and wreath of wheat ears?", uk: "Яка німецька держава мала чорно-червоно-золотий прапор з молотом, циркулем і колоссям?", ru: "Какое германское государство имело чёрно-красно-золотой флаг с молотом, циркулем и венком из колосьев?" },
    answers: [
      { de: "Preußen", en: "Prussia", uk: "Пруссія", ru: "Пруссия" },
      { de: "Bundesrepublik Deutschland", en: "Federal Republic of Germany", uk: "Федеративна Республіка Німеччина", ru: "Федеративная Республика Германия" },
      { de: "„Drittes Reich“", en: "“Third Reich”", uk: "«Третій рейх»", ru: "«Третий рейх»" },
      { de: "DDR", en: "GDR", uk: "НДР", ru: "ГДР", correct: true },
    ]
  },
  {
    id: "lid_188",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "In welchem Jahr wurde die Mauer in Berlin gebaut?", en: "In which year was the Wall in Berlin built?", uk: "У якому році було збудовано Берлінський мур?", ru: "В каком году была построена стена в Берлине?" },
    answers: [
      { de: "1953", en: "1953", uk: "1953", ru: "1953" },
      { de: "1956", en: "1956", uk: "1956", ru: "1956" },
      { de: "1959", en: "1959", uk: "1959", ru: "1959" },
      { de: "1961", en: "1961", uk: "1961", ru: "1961", correct: true },
    ]
  },
  {
    id: "lid_189",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Wann baute die DDR die Mauer in Berlin?", en: "When did the GDR build the Wall in Berlin?", uk: "Коли НДР збудувала Берлінський мур?", ru: "Когда ГДР построила стену в Берлине?" },
    answers: [
      { de: "1919", en: "1919", uk: "1919", ru: "1919" },
      { de: "1933", en: "1933", uk: "1933", ru: "1933" },
      { de: "1961", en: "1961", uk: "1961", ru: "1961", correct: true },
      { de: "1990", en: "1990", uk: "1990", ru: "1990" },
    ]
  },
  {
    id: "lid_190",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Was bedeutet die Abkürzung DDR?", en: "What does the abbreviation DDR (GDR) stand for?", uk: "Що означає абревіатура DDR?", ru: "Что означает аббревиатура DDR (ГДР)?" },
    answers: [
      { de: "Dritter Deutscher Rundfunk", en: "Third German Radio", uk: "Третє німецьке радіомовлення", ru: "Третье германское радио" },
      { de: "Die Deutsche Republik", en: "The German Republic", uk: "Німецька республіка", ru: "Германская республика" },
      { de: "Dritte Deutsche Republik", en: "Third German Republic", uk: "Третя німецька республіка", ru: "Третья германская республика" },
      { de: "Deutsche Demokratische Republik", en: "German Democratic Republic", uk: "Німецька Демократична Республіка", ru: "Германская Демократическая Республика", correct: true },
    ]
  },
  {
    id: "lid_191",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Wann wurde die Mauer in Berlin für alle geöffnet?", en: "When was the Wall in Berlin opened for everyone?", uk: "Коли Берлінський мур було відкрито для всіх?", ru: "Когда стена в Берлине была открыта для всех?" },
    answers: [
      { de: "1987", en: "1987", uk: "1987", ru: "1987" },
      { de: "1989", en: "1989", uk: "1989", ru: "1989", correct: true },
      { de: "1992", en: "1992", uk: "1992", ru: "1992" },
      { de: "1995", en: "1995", uk: "1995", ru: "1995" },
    ]
  },
  {
    id: "lid_192",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "Which of today’s German federal states used to be part of the territory of the GDR?", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "Какая из нынешних федеральных земель Германии раньше входила в состав территории ГДР?" },
    answers: [
      { de: "Brandenburg", en: "Brandenburg", uk: "Бранденбург", ru: "Бранденбург", correct: true },
      { de: "Bayern", en: "Bavaria", uk: "Баварія", ru: "Бавария" },
      { de: "Saarland", en: "Saarland", uk: "Саар", ru: "Саар" },
      { de: "Hessen", en: "Hesse", uk: "Гессен", ru: "Гессен" },
    ]
  },
  {
    id: "lid_193",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Von 1961 bis 1989 war Berlin …", en: "From 1961 to 1989, Berlin was …", uk: "З 1961 до 1989 року Берлін був …", ru: "С 1961 по 1989 год Берлин был …" },
    answers: [
      { de: "ohne Bürgermeister.", en: "without a mayor.", uk: "без бургомістра.", ru: "без бургомистра." },
      { de: "ein eigener Staat.", en: "a state of its own.", uk: "окремою державою.", ru: "самостоятельным государством." },
      { de: "durch eine Mauer geteilt.", en: "divided by a wall.", uk: "розділений муром.", ru: "разделён стеной.", correct: true },
      { de: "nur mit dem Flugzeug erreichbar.", en: "reachable only by plane.", uk: "доступний лише літаком.", ru: "доступен только по воздуху." },
    ]
  },
  {
    id: "lid_194",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …", en: "On 3 October, Germany celebrates the Day of German …", uk: "3 жовтня в Німеччині відзначають День німецької …", ru: "3 октября в Германии отмечают День германского …" },
    answers: [
      { de: "Einheit.", en: "Unity.", uk: "єдності.", ru: "единства.", correct: true },
      { de: "Nation.", en: "Nation.", uk: "нації.", ru: "народа." },
      { de: "Bundesländer.", en: "Federal States.", uk: "федеральних земель.", ru: "федеральных земель." },
      { de: "Städte.", en: "Cities.", uk: "міст.", ru: "городов." },
    ]
  },
  {
    id: "lid_195",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "Which of today’s German federal states used to be part of the territory of the GDR?", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "Какая из нынешних федеральных земель Германии раньше входила в состав территории ГДР?" },
    answers: [
      { de: "Hessen", en: "Hesse", uk: "Гессен", ru: "Гессен" },
      { de: "Sachsen-Anhalt", en: "Saxony-Anhalt", uk: "Саксонія-Ангальт", ru: "Саксония-Анхальт", correct: true },
      { de: "Nordrhein-Westfalen", en: "North Rhine-Westphalia", uk: "Північний Рейн-Вестфалія", ru: "Северный Рейн-Вестфалия" },
      { de: "Saarland", en: "Saarland", uk: "Саар", ru: "Саар" },
    ]
  },
  {
    id: "lid_196",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Warum nennt man die Zeit im Herbst 1989 in der DDR „Die Wende“? In dieser Zeit veränderte sich die DDR politisch …", en: "Why is the period in the autumn of 1989 in the GDR called “Die Wende” (the turning point)? During this time, the GDR changed politically …", uk: "Чому період осені 1989 року в НДР називають «Поворотом»? У цей час НДР змінилася політично …", ru: "Почему период осени 1989 года в ГДР называют «Поворотом» (Die Wende)? В это время ГДР политически изменилась …" },
    answers: [
      { de: "von einer Diktatur zur Demokratie.", en: "from a dictatorship to a democracy.", uk: "від диктатури до демократії.", ru: "от диктатуры к демократии.", correct: true },
      { de: "von einer liberalen Marktwirtschaft zum Sozialismus.", en: "from a liberal market economy to socialism.", uk: "від ліберальної ринкової економіки до соціалізму.", ru: "от либеральной рыночной экономики к социализму." },
      { de: "von einer Monarchie zur Sozialdemokratie.", en: "from a monarchy to social democracy.", uk: "від монархії до соціал-демократії.", ru: "от монархии к социал-демократии." },
      { de: "von einem religiösen Staat zu einem kommunistischen Staat.", en: "from a religious state to a communist state.", uk: "від релігійної держави до комуністичної.", ru: "от религиозного государства к коммунистическому." },
    ]
  },
  {
    id: "lid_197",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "Which of today’s German federal states used to be part of the territory of the GDR?", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "Какая из нынешних федеральных земель Германии раньше входила в состав территории ГДР?" },
    answers: [
      { de: "Thüringen", en: "Thuringia", uk: "Тюрингія", ru: "Тюрингия", correct: true },
      { de: "Hessen", en: "Hesse", uk: "Гессен", ru: "Гессен" },
      { de: "Bayern", en: "Bavaria", uk: "Баварія", ru: "Бавария" },
      { de: "Bremen", en: "Bremen", uk: "Бремен", ru: "Бремен" },
    ]
  },
  {
    id: "lid_198",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "Which of today’s German federal states used to be part of the territory of the GDR?", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "Какая из нынешних федеральных земель Германии раньше входила в состав территории ГДР?" },
    answers: [
      { de: "Bayern", en: "Bavaria", uk: "Баварія", ru: "Бавария" },
      { de: "Niedersachsen", en: "Lower Saxony", uk: "Нижня Саксонія", ru: "Нижняя Саксония" },
      { de: "Sachsen", en: "Saxony", uk: "Саксонія", ru: "Саксония", correct: true },
      { de: "Baden-Württemberg", en: "Baden-Württemberg", uk: "Баден-Вюртемберг", ru: "Баден-Вюртемберг" },
    ]
  },
  {
    id: "lid_199",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Mit der Abkürzung „Stasi“ meinte man in der DDR …", en: "With the abbreviation “Stasi”, people in the GDR meant …", uk: "Під абревіатурою «Штазі» в НДР розуміли …", ru: "Аббревиатурой «Штази» (Stasi) в ГДР обозначали …" },
    answers: [
      { de: "das Parlament.", en: "the parliament.", uk: "парламент.", ru: "парламент." },
      { de: "das Ministerium für Staatssicherheit.", en: "the Ministry for State Security.", uk: "Міністерство державної безпеки.", ru: "министерство государственной безопасности.", correct: true },
      { de: "eine regierende Partei.", en: "a governing party.", uk: "правлячу партію.", ru: "правящую партию." },
      { de: "das Ministerium für Volksbildung.", en: "the Ministry of National Education.", uk: "Міністерство народної освіти", ru: "министерство народного образования." },
    ]
  },
  {
    id: "lid_200",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "Which of today’s German federal states used to be part of the territory of the GDR?", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "Какая из нынешних федеральных земель Германии раньше входила в состав территории ГДР?" },
    answers: [
      { de: "Hessen", en: "Hesse", uk: "Гессен", ru: "Гессен" },
      { de: "Schleswig-Holstein", en: "Schleswig-Holstein", uk: "Шлезвіг-Гольштейн", ru: "Шлезвиг-Гольштейн" },
      { de: "Mecklenburg-Vorpommern", en: "Mecklenburg-Western Pomerania", uk: "Мекленбург-Передня Померанія", ru: "Мекленбург-Передняя Померания", correct: true },
      { de: "Saarland", en: "Saarland", uk: "Саар", ru: "Саар" },
    ]
  },
  {
    id: "lid_201",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?", en: "Which of the following lists contains only federal states that belonged to the territory of the former GDR?", uk: "Який з наведених переліків містить лише федеральні землі, що входили до території колишньої НДР?", ru: "Какой из следующих списков содержит только федеральные земли, входившие в состав бывшей ГДР?" },
    answers: [
      { de: "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg", en: "Lower Saxony, North Rhine-Westphalia, Hesse, Schleswig-Holstein, Brandenburg", uk: "Нижня Саксонія, Північний Рейн-Вестфалія, Гессен, Шлезвіг-Гольштейн, Бранденбург", ru: "Нижняя Саксония, Северный Рейн-Вестфалия, Гессен, Шлезвиг-Гольштейн, Бранденбург" },
      { de: "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen", en: "Mecklenburg-Western Pomerania, Brandenburg, Saxony, Saxony-Anhalt, Thuringia", uk: "Мекленбург-Передня Померанія, Бранденбург, Саксонія, Саксонія-Ангальт, Тюрингія", ru: "Мекленбург-Передняя Померания, Бранденбург, Саксония, Саксония-Анхальт, Тюрингия", correct: true },
      { de: "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen", en: "Bavaria, Baden-Württemberg, Rhineland-Palatinate, Thuringia, Saxony", uk: "Баварія, Баден-Вюртемберг, Рейнланд-Пфальц, Тюрингія, Саксонія", ru: "Бавария, Баден-Вюртемберг, Рейнланд-Пфальц, Тюрингия, Саксония" },
      { de: "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg", en: "Saxony, Thuringia, Hesse, Lower Saxony, Brandenburg", uk: "Саксонія, Тюрингія, Гессен, Нижня Саксонія, Бранденбург", ru: "Саксония, Тюрингия, Гессен, Нижняя Саксония, Бранденбург" },
    ]
  },
  {
    id: "lid_202",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Zu wem gehörte die DDR im „Kalten Krieg“?", en: "Which side did the GDR belong to in the “Cold War”?", uk: "До кого належала НДР у «холодній війні»?", ru: "К кому принадлежала ГДР во время «холодной войны»?" },
    answers: [
      { de: "zu den Westmächten", en: "the Western powers", uk: "до західних держав", ru: "к западным державам" },
      { de: "zum Warschauer Pakt", en: "the Warsaw Pact", uk: "до Варшавського договору", ru: "к Варшавскому договору", correct: true },
      { de: "zur NATO", en: "NATO", uk: "до НАТО", ru: "к НАТО" },
      { de: "zu den blockfreien Staaten", en: "the non-aligned states", uk: "до неприєднаних країн", ru: "к неприсоединившимся государствам" },
    ]
  },
  {
    id: "lid_203",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Wie hieß das Wirtschaftssystem der DDR?", en: "What was the economic system of the GDR called?", uk: "Як називалася економічна система НДР?", ru: "Как называлась экономическая система ГДР?" },
    answers: [
      { de: "Marktwirtschaft", en: "market economy", uk: "ринкова економіка", ru: "рыночная экономика" },
      { de: "Planwirtschaft", en: "planned economy", uk: "планова економіка", ru: "плановая экономика", correct: true },
      { de: "Angebot und Nachfrage", en: "supply and demand", uk: "попит і пропозиція", ru: "спрос и предложение" },
      { de: "Kapitalismus", en: "capitalism", uk: "капіталізм", ru: "капитализм" },
    ]
  },
  {
    id: "lid_204",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?", en: "How did the Federal Republic of Germany and the GDR become one state?", uk: "Як Федеративна Республіка Німеччина і НДР стали єдиною державою?", ru: "Как Федеративная Республика Германия и ГДР стали одним государством?" },
    answers: [
      { de: "Die Bundesrepublik hat die DDR besetzt.", en: "The Federal Republic occupied the GDR.", uk: "Федеративна Республіка окупувала НДР.", ru: "Федеративная республика оккупировала ГДР." },
      { de: "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.", en: "The five eastern federal states of today joined the Federal Republic of Germany.", uk: "Нинішні пʼять східних федеральних земель приєдналися до Федеративної Республіки Німеччина.", ru: "Нынешние пять восточных федеральных земель вступили в Федеративную Республику Германия.", correct: true },
      { de: "Die westlichen Bundesländer sind der DDR beigetreten.", en: "The western federal states joined the GDR.", uk: "Західні федеральні землі приєдналися до НДР.", ru: "Западные федеральные земли вступили в ГДР." },
      { de: "Die DDR hat die Bundesrepublik Deutschland besetzt.", en: "The GDR occupied the Federal Republic of Germany.", uk: "НДР окупувала Федеративну Республіку Німеччина.", ru: "ГДР оккупировала Федеративную Республику Германия." },
    ]
  },
  {
    id: "lid_205",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …", en: "With the accession of the GDR to the Federal Republic of Germany, the new federal states now also belong …", uk: "Після приєднання НДР до Федеративної Республіки Німеччина нові федеральні землі тепер також належать …", ru: "С присоединением ГДР к Федеративной Республике Германия новые федеральные земли теперь тоже входят …" },
    answers: [
      { de: "zur Europäischen Union.", en: "to the European Union.", uk: "до Європейського Союзу.", ru: "в Европейский союз.", correct: true },
      { de: "zum Warschauer Pakt.", en: "to the Warsaw Pact.", uk: "до Варшавського договору.", ru: "в Варшавский договор." },
      { de: "zur OPEC.", en: "to OPEC.", uk: "до ОПЕК.", ru: "в ОПЕК." },
      { de: "zur Europäischen Verteidigungsgemeinschaft.", en: "to the European Defence Community.", uk: "до Європейського оборонного співтовариства.", ru: "в Европейское оборонительное сообщество." },
    ]
  },
  {
    id: "lid_206",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "206.   Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?", en: "What do the so-called “Stolpersteine” (stumbling stones) in Germany commemorate?", uk: "Про що нагадують так звані «камені спотикання» в Німеччині?", ru: "О чём напоминают так называемые «камни преткновения» (Stolpersteine) в Германии?" },
    answers: [
      { de: "an berühmte deutsche Politikerinnen und Politiker", en: "famous German politicians", uk: "про відомих німецьких політиків", ru: "о знаменитых германских политиках" },
      { de: "an die Opfer des Nationalsozialismus", en: "the victims of National Socialism", uk: "про жертв націонал-соціалізму", ru: "о жертвах национал-социализма", correct: true },
      { de: "an Verkehrstote", en: "road traffic deaths", uk: "про загиблих на дорогах", ru: "о погибших в дорожно-транспортных происшествиях" },
      { de: "an bekannte jüdische Musiker", en: "well-known Jewish musicians", uk: "про відомих єврейських музикантів", ru: "о известных еврейских музыкантах" },
    ]
  },
  {
    id: "lid_207",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "In welchem Militärbündnis war die DDR Mitglied?", en: "Which military alliance was the GDR a member of?", uk: "Членом якого військового союзу була НДР?", ru: "Членом какого военного союза была ГДР?" },
    answers: [
      { de: "in der NATO", en: "NATO", uk: "у НАТО", ru: "НАТО" },
      { de: "im Rheinbund", en: "the Confederation of the Rhine", uk: "у Рейнському союзі", ru: "Рейнского союза" },
      { de: "im Warschauer Pakt", en: "the Warsaw Pact", uk: "у Варшавському договорі", ru: "Варшавского договора", correct: true },
      { de: "im Europabündnis", en: "the European Alliance", uk: "в Європейському альянсі", ru: "Европейского союза" },
    ]
  },
  {
    id: "lid_208",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Was war die „Stasi“?", en: "What was the “Stasi”?", uk: "Чим була «Штазі»?", ru: "Что такое «Штази» (Stasi)?" },
    answers: [
      { de: "der Geheimdienst im „Dritten Reich“", en: "the secret service in the “Third Reich”", uk: "спецслужба в «Третьому рейху»", ru: "спецслужба в «Третьем рейхе»" },
      { de: "eine berühmte deutsche Gedenkstätte", en: "a famous German memorial site", uk: "відомий німецький меморіал", ru: "известный германский мемориал" },
      { de: "der Geheimdienst der DDR", en: "the secret service of the GDR", uk: "спецслужба НДР", ru: "спецслужба ГДР", correct: true },
      { de: "ein deutscher Sportverein während des Zweiten Weltkrieges", en: "a German sports club during the Second World War", uk: "німецький спортивний клуб часів Другої світової війни", ru: "германский спортивный клуб во время Второй мировой войны" },
    ]
  },
  {
    id: "lid_209",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Welches war das Wappen der Deutschen Demokratischen Republik?", en: "Which was the coat of arms of the German Democratic Republic?", uk: "Який герб мала Німецька Демократична Республіка?", ru: "Какой был герб Германской Демократической Республики?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_209_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_209_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_209_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_209_a4.png", correct: true },
    ]
  },
  {
    id: "lid_210",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Was ereignete sich am 17. Juni 1953 in der DDR?", en: "What happened on 17 June 1953 in the GDR?", uk: "Що сталося 17 червня 1953 року в НДР?", ru: "Что произошло 17 июня 1953 года в ГДР?" },
    answers: [
      { de: "der feierliche Beitritt zum Warschauer Pakt", en: "the ceremonial accession to the Warsaw Pact", uk: "урочисте вступлення до Варшавського договору", ru: "торжественное вступление в Варшавский договор" },
      { de: "landesweite Streiks und ein Volksaufstand", en: "nationwide strikes and a popular uprising", uk: "загальнокраїнні страйки та народне повстання", ru: "общенациональные забастовки и народное восстание", correct: true },
      { de: "der 1. SED-Parteitag", en: "the 1st SED party congress", uk: "перший зʼїзд СЄПН", ru: "1-й съезд СЕПГ" },
      { de: "der erste Besuch Fidel Castros", en: "the first visit by Fidel Castro", uk: "перший візит Фіделя Кастро", ru: "первый визит Фиделя Кастро" },
    ]
  },
  {
    id: "lid_211",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Welcher Politiker steht für die „Ostverträge“?", en: "Which politician is associated with the “Eastern Treaties” (Ostverträge)?", uk: "Який політик асоціюється зі «Східними договорами»?", ru: "Какой политик связан с «Восточными договорами» (Ostverträge)?" },
    answers: [
      { de: "Helmut Kohl", en: "Helmut Kohl", uk: "Гельмут Коль", ru: "Гельмут Коль" },
      { de: "Willy Brandt", en: "Willy Brandt", uk: "Віллі Брандт", ru: "Вилли Брандт", correct: true },
      { de: "Michail Gorbatschow", en: "Mikhail Gorbachev", uk: "Михайло Горбачов", ru: "Михаил Горбачёв" },
      { de: "Ludwig Erhard", en: "Ludwig Erhard", uk: "Людвіг Ерхард", ru: "Людвиг Эрхард" },
    ]
  },
  {
    id: "lid_212",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Wie heißt Deutschland mit vollem Namen?", en: "What is the full name of Germany?", uk: "Як повністю називається Німеччина?", ru: "Каково полное название Германии?" },
    answers: [
      { de: "Bundesstaat Deutschland", en: "Federal State of Germany", uk: "Федеральна держава Німеччина", ru: "Федеративное государство Германия" },
      { de: "Bundesländer Deutschland", en: "Federal States Germany", uk: "Федеральні землі Німеччини", ru: "Федеральные земли Германия" },
      { de: "Bundesrepublik Deutschland", en: "Federal Republic of Germany", uk: "Федеративна Республіка Німеччина", ru: "Федеративная Республика Германия", correct: true },
      { de: "Bundesbezirk Deutschland", en: "Federal District of Germany", uk: "Федеральний округ Німеччина", ru: "Федеральный округ Германия" },
    ]
  },
  {
    id: "lid_213",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Wie viele Einwohner hat Deutschland?", en: "How many inhabitants does Germany have?", uk: "Скільки жителів у Німеччині?", ru: "Сколько жителей в Германии?" },
    answers: [
      { de: "70 Millionen", en: "70 million", uk: "70 мільйонів", ru: "70 миллионов" },
      { de: "78 Millionen", en: "78 million", uk: "78 мільйонів", ru: "78 миллионов" },
      { de: "84 Millionen", en: "84 million", uk: "84 мільйони", ru: "84 миллиона", correct: true },
      { de: "90 Millionen", en: "90 million", uk: "90 мільйонів", ru: "90 миллионов" },
    ]
  },
  {
    id: "lid_214",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welche Farben hat die deutsche Flagge?", en: "What colours does the German flag have?", uk: "Які кольори має німецький прапор?", ru: "Какие цвета у флага Германии?" },
    answers: [
      { de: "schwarz-rot-gold", en: "black-red-gold", uk: "чорно-червоно-золотий", ru: "чёрный-красный-золотой", correct: true },
      { de: "rot-weiß-schwarz", en: "red-white-black", uk: "червоно-біло-чорний", ru: "красный-белый-чёрный" },
      { de: "schwarz-rot-grün", en: "black-red-green", uk: "чорно-червоно-зелений", ru: "чёрный-красный-зелёный" },
      { de: "schwarz-gelb-rot", en: "black-yellow-red", uk: "чорно-жовто-червоний", ru: "чёрный-жёлтый-красный" },
    ]
  },
  {
    id: "lid_215",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?", en: "Who is called the “Chancellor of German Unity”?", uk: "Кого називають «канцлером німецької єдності»?", ru: "Кого называют «канцлером германского единства»?" },
    answers: [
      { de: "Gerhard Schröder", en: "Gerhard Schröder", uk: "Герхард Шредер", ru: "Герхард Шрёдер" },
      { de: "Helmut Kohl", en: "Helmut Kohl", uk: "Гельмут Коль", ru: "Гельмут Коль", correct: true },
      { de: "Konrad Adenauer", en: "Konrad Adenauer", uk: "Конрад Аденауер", ru: "Конрад Аденауэр" },
      { de: "Helmut Schmidt", en: "Helmut Schmidt", uk: "Гельмут Шмідт", ru: "Гельмут Шмидт" },
    ]
  },
  {
    id: "lid_216",
    lessonId: "k10m1",
    cat: "staatssymbole",
    img: "lid_216.png",
    imgCredit: "© Deutscher Bundestag/Janine Schmitz",
    question: { de: "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?", en: "Which symbol can be seen in the plenary chamber of the German Bundestag?", uk: "Який символ можна побачити в пленарній залі Бундестагу?", ru: "Какой символ можно увидеть в зале пленарных заседаний Бундестага?" },
    answers: [
      { de: "der Bundesadler", en: "the Federal Eagle", uk: "федеральний орел", ru: "федеральный орёл", correct: true },
      { de: "die Fahne der Stadt Berlin", en: "the flag of the city of Berlin", uk: "прапор міста Берліна", ru: "флаг города Берлина" },
      { de: "der Reichsadler", en: "the Imperial Eagle", uk: "імперський орел", ru: "имперский орёл" },
      { de: "die Reichskrone", en: "the Imperial Crown", uk: "імперська корона", ru: "императорская корона" },
    ]
  },
  {
    id: "lid_217",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?", en: "During which period did the German Democratic Republic (GDR) exist?", uk: "У який період існувала Німецька Демократична Республіка (НДР)?", ru: "В какой период существовала Германская Демократическая Республика (ГДР)?" },
    answers: [
      { de: "1919 bis 1927", en: "1919 to 1927", uk: "з 1919 до 1927 року", ru: "с 1919 по 1927 год" },
      { de: "1933 bis 1945", en: "1933 to 1945", uk: "з 1933 до 1945 року", ru: "с 1933 по 1945 год" },
      { de: "1945 bis 1961", en: "1945 to 1961", uk: "з 1945 до 1961 року", ru: "с 1945 по 1961 год" },
      { de: "1949 bis 1990", en: "1949 to 1990", uk: "з 1949 до 1990 року", ru: "с 1949 по 1990 год", correct: true },
    ]
  },
  {
    id: "lid_218",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?", en: "How many federal states were added to the Federal Republic of Germany at reunification in 1990?", uk: "Скільки федеральних земель приєдналося до Федеративної Республіки Німеччина під час воззʼєднання 1990 року?", ru: "Сколько федеральных земель добавилось к Федеративной Республике Германия при воссоединении в 1990 году?" },
    answers: [
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
      { de: "7", en: "7", uk: "7", ru: "7" },
    ]
  },
  {
    id: "lid_219",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …", en: "The Federal Republic of Germany has had today’s borders since …", uk: "Федеративна Республіка Німеччина має нинішні кордони з …", ru: "Федеративная Республика Германия имеет нынешние границы с …" },
    answers: [
      { de: "1933", en: "1933", uk: "1933", ru: "1933 года" },
      { de: "1949", en: "1949", uk: "1949", ru: "1949 года" },
      { de: "1971", en: "1971", uk: "1971", ru: "1971 года" },
      { de: "1990", en: "1990", uk: "1990", ru: "1990 года", correct: true },
    ]
  },
  {
    id: "lid_220",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?", en: "27 January is an official day of remembrance in Germany. What does this day commemorate?", uk: "27 січня — офіційний день памʼяті в Німеччині. Про що нагадує цей день?", ru: "27 января — официальный день памяти в Германии. О чём напоминает этот день?" },
    answers: [
      { de: "an das Ende des Zweiten Weltkrieges", en: "the end of the Second World War", uk: "про закінчення Другої світової війни", ru: "об окончании Второй мировой войны" },
      { de: "an die Verabschiedung des Grundgesetzes", en: "the adoption of the Basic Law", uk: "про ухвалення Основного закону", ru: "о принятии Основного закона" },
      { de: "an die Wiedervereinigung Deutschlands", en: "the reunification of Germany", uk: "про воззʼєднання Німеччини", ru: "о воссоединении Германии" },
      { de: "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)", en: "the victims of National Socialism (the day of the liberation of the Auschwitz extermination camp)", uk: "про жертв націонал-соціалізму (день визволення табору знищення Аушвіц)", ru: "о жертвах национал-социализма (день освобождения лагеря смерти Освенцим)", correct: true },
    ]
  },
  {
    id: "lid_221",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?", en: "Germany is a member of the Schengen Agreement. What does that mean?", uk: "Німеччина є учасницею Шенгенської угоди. Що це означає?", ru: "Германия — участница Шенгенского соглашения. Что это означает?" },
    answers: [
      { de: "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.", en: "Germans can travel to many countries in Europe without passport control.", uk: "Німці можуть їздити до багатьох країн Європи без паспортного контролю.", ru: "Немцы могут ездить во многие страны Европы без паспортного контроля.", correct: true },
      { de: "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.", en: "All people can enter Germany without any identity checks.", uk: "Усі люди можуть вʼїжджати до Німеччини без перевірки особи.", ru: "Все люди могут въезжать в Германию без проверки личности." },
      { de: "Deutsche können ohne Passkontrolle in jedes Land reisen.", en: "Germans can travel to any country without passport control.", uk: "Німці можуть їздити до будь-якої країни без паспортного контролю.", ru: "Немцы могут ездить в любую страну без паспортного контроля." },
      { de: "Deutsche können in jedem Land mit dem Euro bezahlen.", en: "Germans can pay with the euro in any country.", uk: "Німці можуть розраховуватися євро в будь-якій країні.", ru: "Немцы могут расплачиваться евро в любой стране." },
    ]
  },
  {
    id: "lid_222",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "Which country is a neighbour of Germany?", uk: "Яка країна є сусідкою Німеччини?", ru: "Какая страна является соседом Германии?" },
    answers: [
      { de: "Ungarn", en: "Hungary", uk: "Угорщина", ru: "Венгрия" },
      { de: "Portugal", en: "Portugal", uk: "Португалія", ru: "Португалия" },
      { de: "Spanien", en: "Spain", uk: "Іспанія", ru: "Испания" },
      { de: "Schweiz", en: "Switzerland", uk: "Швейцарія", ru: "Швейцария", correct: true },
    ]
  },
  {
    id: "lid_223",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "Which country is a neighbour of Germany?", uk: "Яка країна є сусідкою Німеччини?", ru: "Какая страна является соседом Германии?" },
    answers: [
      { de: "Rumänien", en: "Romania", uk: "Румунія", ru: "Румыния" },
      { de: "Bulgarien", en: "Bulgaria", uk: "Болгарія", ru: "Болгария" },
      { de: "Polen", en: "Poland", uk: "Польща", ru: "Польша", correct: true },
      { de: "Griechenland", en: "Greece", uk: "Греція", ru: "Греция" },
    ]
  },
  {
    id: "lid_224",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Was bedeutet die Abkürzung EU?", en: "What does the abbreviation EU stand for?", uk: "Що означає абревіатура EU?", ru: "Что означает аббревиатура EU (ЕС)?" },
    answers: [
      { de: "Europäische Unternehmen", en: "European Enterprises", uk: "Європейські підприємства", ru: "Европейские предприятия" },
      { de: "Europäische Union", en: "European Union", uk: "Європейський Союз", ru: "Европейский союз", correct: true },
      { de: "Einheitliche Union", en: "Uniform Union", uk: "Єдиний союз", ru: "Единый союз" },
      { de: "Euro Union", en: "Euro Union", uk: "Євро-союз", ru: "Евросоюз (Euro Union)" },
    ]
  },
  {
    id: "lid_225",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?", en: "In which other country is there a large German-speaking population?", uk: "У якій іншій країні проживає велика німецькомовна частина населення?", ru: "В какой другой стране проживает много немецкоговорящего населения?" },
    answers: [
      { de: "Tschechien", en: "Czechia", uk: "Чехія", ru: "Чехия" },
      { de: "Norwegen", en: "Norway", uk: "Норвегія", ru: "Норвегия" },
      { de: "Spanien", en: "Spain", uk: "Іспанія", ru: "Испания" },
      { de: "Österreich", en: "Austria", uk: "Австрія", ru: "Австрия", correct: true },
    ]
  },
  {
    id: "lid_226",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welche ist die Flagge der Europäischen Union?", en: "Which is the flag of the European Union?", uk: "Який прапор Європейського Союзу?", ru: "Какой из этих флагов — флаг Европейского союза?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_226_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_226_a2.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_226_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_226_a4.png" },
    ]
  },
  {
    id: "lid_227",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "Which country is a neighbour of Germany?", uk: "Яка країна є сусідкою Німеччини?", ru: "Какая страна является соседом Германии?" },
    answers: [
      { de: "Finnland", en: "Finland", uk: "Фінляндія", ru: "Финляндия" },
      { de: "Dänemark", en: "Denmark", uk: "Данія", ru: "Дания", correct: true },
      { de: "Norwegen", en: "Norway", uk: "Норвегія", ru: "Норвегия" },
      { de: "Schweden", en: "Sweden", uk: "Швеція", ru: "Швеция" },
    ]
  },
  {
    id: "lid_228",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?", en: "What is the accession of the GDR to the Federal Republic of Germany in 1990 generally called?", uk: "Як загалом називають приєднання НДР до Федеративної Республіки Німеччина в 1990 році?", ru: "Как обычно называют присоединение ГДР к Федеративной Республике Германия в 1990 году?" },
    answers: [
      { de: "NATO-Osterweiterung", en: "NATO eastward enlargement", uk: "розширення НАТО на схід", ru: "расширение НАТО на восток" },
      { de: "EU-Osterweiterung", en: "EU eastward enlargement", uk: "розширення ЄС на схід", ru: "расширение ЕС на восток" },
      { de: "Deutsche Wiedervereinigung", en: "German reunification", uk: "воззʼєднання Німеччини", ru: "воссоединение Германии", correct: true },
      { de: "Europäische Gemeinschaft", en: "European Community", uk: "Європейське співтовариство", ru: "Европейское сообщество" },
    ]
  },
  {
    id: "lid_229",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "Which country is a neighbour of Germany?", uk: "Яка країна є сусідкою Німеччини?", ru: "Какая страна является соседом Германии?" },
    answers: [
      { de: "Spanien", en: "Spain", uk: "Іспанія", ru: "Испания" },
      { de: "Bulgarien", en: "Bulgaria", uk: "Болгарія", ru: "Болгария" },
      { de: "Norwegen", en: "Norway", uk: "Норвегія", ru: "Норвегия" },
      { de: "Luxemburg", en: "Luxembourg", uk: "Люксембург", ru: "Люксембург", correct: true },
    ]
  },
  {
    id: "lid_230",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …", en: "The European Parliament is elected regularly, namely every …", uk: "Європейський парламент обирають регулярно, а саме кожні …", ru: "Европейский парламент избирается регулярно, а именно каждые …" },
    answers: [
      { de: "5 Jahre.", en: "5 years.", uk: "5 років.", ru: "5 лет.", correct: true },
      { de: "6 Jahre.", en: "6 years.", uk: "6 років.", ru: "6 лет." },
      { de: "7 Jahre.", en: "7 years.", uk: "7 років.", ru: "7 лет." },
      { de: "8 Jahre.", en: "8 years.", uk: "8 років.", ru: "8 лет." },
    ]
  },
  {
    id: "lid_231",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Was bedeutet der Begriff „europäische Integration“?", en: "What does the term “European integration” mean?", uk: "Що означає поняття «європейська інтеграція»?", ru: "Что означает понятие «европейская интеграция»?" },
    answers: [
      { de: "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.", en: "It refers to American immigrants in Europe.", uk: "Йдеться про американських іммігрантів та іммігранток у Європі.", ru: "Имеются в виду американские иммигранты в Европе." },
      { de: "Der Begriff meint den Einwanderungsstopp nach Europa.", en: "The term refers to a stop on immigration to Europe.", uk: "Поняття означає припинення імміграції до Європи.", ru: "Понятие означает прекращение иммиграции в Европу." },
      { de: "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.", en: "It refers to European emigrants in the USA.", uk: "Йдеться про європейських емігрантів та емігранток у США.", ru: "Имеются в виду европейские эмигранты в США." },
      { de: "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.", en: "The term refers to the union of European states in the EU.", uk: "Поняття означає обʼєднання європейських держав в ЄС.", ru: "Понятие означает объединение европейских государств в ЕС.", correct: true },
    ]
  },
  {
    id: "lid_232",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Wer wird bei der Europawahl gewählt?", en: "Who is elected in the European elections?", uk: "Кого обирають на виборах до Європейського парламенту?", ru: "Кого избирают на выборах в Европейский парламент?" },
    answers: [
      { de: "die Europäische Kommission", en: "the European Commission", uk: "Європейську комісію", ru: "Европейскую комиссию" },
      { de: "die Länder, die in die EU eintreten dürfen", en: "the countries that are allowed to join the EU", uk: "країни, які можуть вступити до ЄС", ru: "страны, которым разрешено вступить в ЕС" },
      { de: "die Abgeordneten des Europäischen Parlaments", en: "the members of the European Parliament", uk: "депутатів Європейського парламенту", ru: "депутатов Европейского парламента", correct: true },
      { de: "die europäische Verfassung", en: "the European constitution", uk: "європейську конституцію", ru: "европейскую конституцию" },
    ]
  },
  {
    id: "lid_233",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "Which country is a neighbour of Germany?", uk: "Яка країна є сусідкою Німеччини?", ru: "Какая страна является соседом Германии?" },
    answers: [
      { de: "Tschechien", en: "Czechia", uk: "Чехія", ru: "Чехия", correct: true },
      { de: "Bulgarien", en: "Bulgaria", uk: "Болгарія", ru: "Болгария" },
      { de: "Griechenland", en: "Greece", uk: "Греція", ru: "Греция" },
      { de: "Portugal", en: "Portugal", uk: "Португалія", ru: "Португалия" },
    ]
  },
  {
    id: "lid_234",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Wo ist ein Sitz des Europäischen Parlaments?", en: "Where is one of the seats of the European Parliament?", uk: "Де розташована одна з резиденцій Європейського парламенту?", ru: "Где находится одна из резиденций Европейского парламента?" },
    answers: [
      { de: "London", en: "London", uk: "Лондон", ru: "Лондон" },
      { de: "Paris", en: "Paris", uk: "Париж", ru: "Париж" },
      { de: "Berlin", en: "Berlin", uk: "Берлін", ru: "Берлин" },
      { de: "Straßburg", en: "Strasbourg", uk: "Страсбург", ru: "Страсбург", correct: true },
    ]
  },
  {
    id: "lid_235",
    lessonId: "k16m3",
    cat: "europa",
    img: "lid_235.png",
    imgCredit: "© Bundesregierung/Richard Schulze-Vorberg",
    question: { de: "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?", en: "The then French President François Mitterrand and the then German Federal Chancellor Helmut Kohl jointly commemorate the dead of both world wars in Verdun. Which goal of the European Union becomes clear at this meeting?", uk: "Тодішній президент Франції Франсуа Міттеран і тодішній федеральний канцлер Німеччини Гельмут Коль разом вшановують у Вердені памʼять загиблих в обох світових війнах. Яка мета Європейського Союзу стає очевидною під час цієї зустрічі?", ru: "Тогдашний президент Франции Франсуа Миттеран и тогдашний федеральный канцлер Германии Гельмут Коль вместе почтили в Вердене память погибших в обеих мировых войнах. Какая цель Европейского союза становится очевидной на этой встрече?" },
    answers: [
      { de: "Freundschaft zwischen England und Deutschland", en: "friendship between England and Germany", uk: "дружба між Англією та Німеччиною", ru: "дружба между Англией и Германией" },
      { de: "Reisefreiheit in alle Länder der EU", en: "freedom of travel to all countries of the EU", uk: "свобода пересування у всі країни ЄС", ru: "свобода передвижения во все страны ЕС" },
      { de: "Frieden und Sicherheit in den Ländern der EU", en: "peace and security in the countries of the EU", uk: "мир і безпека в країнах ЄС", ru: "мир и безопасность в странах ЕС", correct: true },
      { de: "einheitliche Feiertage in den Ländern der EU", en: "uniform public holidays in the countries of the EU", uk: "єдині святкові дні в країнах ЄС", ru: "единые праздничные дни в странах ЕС" },
    ]
  },
  {
    id: "lid_236",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Wie viele Mitgliedstaaten hat die EU heute?", en: "How many member states does the EU have today?", uk: "Скільки держав-членів має ЄС сьогодні?", ru: "Сколько государств-членов в ЕС сегодня?" },
    answers: [
      { de: "21", en: "21", uk: "21", ru: "21" },
      { de: "23", en: "23", uk: "23", ru: "23" },
      { de: "25", en: "25", uk: "25", ru: "25" },
      { de: "27", en: "27", uk: "27", ru: "27", correct: true },
    ]
  },
  {
    id: "lid_237",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "2007 wurde das 50-jährige Jubiläum der „Römischen Verträge“ gefeiert. Was war der Inhalt der Verträge?", en: "In 2007, the 50th anniversary of the “Treaties of Rome” was celebrated. What was the content of the treaties?", uk: "У 2007 році відзначали 50-річчя «Римських договорів». Що було змістом цих договорів?", ru: "В 2007 году отмечалась 50-летняя годовщина «Римских договоров». Каково было содержание этих договоров?" },
    answers: [
      { de: "Beitritt Deutschlands zur NATO", en: "Germany’s accession to NATO", uk: "вступ Німеччини до НАТО", ru: "вступление Германии в НАТО" },
      { de: "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)", en: "founding of the European Economic Community (EEC)", uk: "створення Європейського економічного співтовариства (ЄЕС)", ru: "создание Европейского экономического сообщества (ЕЭС)", correct: true },
      { de: "Verpflichtung Deutschlands zu Reparationsleistungen", en: "Germany’s obligation to pay reparations", uk: "зобовʼязання Німеччини виплачувати репарації", ru: "обязательство Германии выплачивать репарации" },
      { de: "Festlegung der Oder-Neiße-Linie als Ostgrenze", en: "establishing the Oder-Neisse line as the eastern border", uk: "визначення лінії Одер—Нейсе як східного кордону", ru: "установление линии Одер — Нейсе как восточной границы" },
    ]
  },
  {
    id: "lid_238",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "An welchen Orten arbeitet das Europäische Parlament?", en: "In which places does the European Parliament work?", uk: "У яких місцях працює Європейський парламент?", ru: "В каких местах работает Европейский парламент?" },
    answers: [
      { de: "Paris, London und Den Haag", en: "Paris, London and The Hague", uk: "Париж, Лондон і Гаага", ru: "Париж, Лондон и Гаага" },
      { de: "Straßburg, Luxemburg und Brüssel", en: "Strasbourg, Luxembourg and Brussels", uk: "Страсбург, Люксембург і Брюссель", ru: "Страсбург, Люксембург и Брюссель", correct: true },
      { de: "Rom, Bern und Wien", en: "Rome, Bern and Vienna", uk: "Рим, Берн і Відень", ru: "Рим, Берн и Вена" },
      { de: "Bonn, Zürich und Mailand", en: "Bonn, Zurich and Milan", uk: "Бонн, Цюрих і Мілан", ru: "Бонн, Цюрих и Милан" },
    ]
  },
  {
    id: "lid_239",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?", en: "Through which treaties did the Federal Republic of Germany join with other states to form the European Economic Community?", uk: "Якими договорами Федеративна Республіка Німеччина разом з іншими державами обʼєдналася в Європейське економічне співтовариство?", ru: "Какими договорами Федеративная Республика Германия объединилась с другими государствами в Европейское экономическое сообщество?" },
    answers: [
      { de: "durch die „Hamburger Verträge“", en: "through the “Treaties of Hamburg”", uk: "«Гамбурзькими договорами»", ru: "«Гамбургскими договорами»" },
      { de: "durch die „Römischen Verträge“", en: "through the “Treaties of Rome”", uk: "«Римськими договорами»", ru: "«Римскими договорами»", correct: true },
      { de: "durch die „Pariser Verträge“", en: "through the “Treaties of Paris”", uk: "«Паризькими договорами»", ru: "«Парижскими договорами»" },
      { de: "durch die „Londoner Verträge“", en: "through the “Treaties of London”", uk: "«Лондонськими договорами»", ru: "«Лондонскими договорами»" },
    ]
  },
  {
    id: "lid_240",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Seit wann bezahlt man in Deutschland mit dem Euro in bar?", en: "Since when has cash payment in Germany been made in euros?", uk: "Відколи в Німеччині розраховуються готівкою в євро?", ru: "С какого времени в Германии наличными расплачиваются евро?" },
    answers: [
      { de: "1995", en: "1995", uk: "1995", ru: "1995" },
      { de: "1998", en: "1998", uk: "1998", ru: "1998" },
      { de: "2002", en: "2002", uk: "2002", ru: "2002", correct: true },
      { de: "2005", en: "2005", uk: "2005", ru: "2005" },
    ]
  },
  {
    id: "lid_241",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?", en: "Ms Seger is having a child. What does she have to do to receive parental allowance (Elterngeld)?", uk: "Пані Зеґер чекає дитину. Що їй потрібно зробити, щоб отримати батьківську допомогу (Elterngeld)?", ru: "Госпожа Зегер ждёт ребёнка. Что ей нужно сделать, чтобы получать пособие по уходу за ребёнком (Elterngeld)?" },
    answers: [
      { de: "Sie muss an ihre Krankenkasse schreiben.", en: "She has to write to her health insurance fund.", uk: "Вона має написати до своєї лікарняної каси.", ru: "Ей нужно написать в свою больничную кассу." },
      { de: "Sie muss einen Antrag bei der Elterngeldstelle stellen.", en: "She has to submit an application to the parental allowance office.", uk: "Вона має подати заяву до відомства з виплати батьківської допомоги.", ru: "Ей нужно подать заявление в ведомство по выплате Elterngeld.", correct: true },
      { de: "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.", en: "She does not have to do anything, because she receives parental allowance automatically.", uk: "Їй нічого не потрібно робити, тому що вона отримує батьківську допомогу автоматично.", ru: "Ей ничего не нужно делать, пособие выплачивается автоматически." },
      { de: "Sie muss das Arbeitsamt um Erlaubnis bitten.", en: "She has to ask the employment office for permission.", uk: "Вона має попросити дозволу в агентстві зайнятості.", ru: "Ей нужно попросить разрешения в бирже труда." },
    ]
  },
  {
    id: "lid_242",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?", en: "Who decides whether a child in Germany goes to kindergarten?", uk: "Хто вирішує, чи піде дитина в Німеччині в дитячий садок?", ru: "Кто решает, ходит ли ребёнок в Германии в детский сад?" },
    answers: [
      { de: "der Staat", en: "the state", uk: "держава", ru: "государство" },
      { de: "die Bundesländer", en: "the federal states", uk: "федеральні землі", ru: "федеральные земли" },
      { de: "die Eltern/die Erziehungsberechtigten", en: "the parents/legal guardians", uk: "батьки/опікуни", ru: "родители/законные представители", correct: true },
      { de: "die Schulen", en: "the schools", uk: "школи", ru: "школы" },
    ]
  },
  {
    id: "lid_243",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?", en: "Maik and Sybille want to hold a demonstration on the street with friends in their German town. What do they have to do beforehand?", uk: "Майк і Сібілла хочуть разом з друзями за місцем свого проживання в Німеччині провести демонстрацію на вулиці. Що вони мають зробити заздалегідь?", ru: "Майк и Сибилла хотят вместе с друзьями провести демонстрацию на улице в своём городе в Германии. Что им нужно сделать заранее?" },
    answers: [
      { de: "Sie müssen die Demonstration anmelden.", en: "They have to register the demonstration.", uk: "Вони мають повідомити про демонстрацію.", ru: "Они должны заранее заявить о демонстрации.", correct: true },
      { de: "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.", en: "They do not have to do anything. In Germany you may demonstrate anywhere at any time.", uk: "Їм не потрібно нічого робити. У Німеччині можна демонструвати будь-коли і будь-де.", ru: "Им ничего не нужно делать. В Германии можно демонстрировать везде и в любое время." },
      { de: "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.", en: "They cannot do anything, because demonstrations are generally prohibited in Germany.", uk: "Вони нічого не можуть зробити, тому що демонстрації в Німеччині загалом заборонені.", ru: "Они ничего не могут сделать, потому что демонстрации в Германии в принципе запрещены." },
      { de: "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.", en: "Maik and Sybille have to found a new association, because only associations may demonstrate.", uk: "Майк і Сібілла мають створити нове обʼєднання, тому що демонструвати можуть лише обʼєднання.", ru: "Майк и Сибилла должны создать новое объединение, потому что демонстрировать могут только объединения." },
    ]
  },
  {
    id: "lid_244",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?", en: "What school-leaving qualification do you normally need to begin studying at a university in Germany?", uk: "Який шкільний атестат зазвичай потрібен, щоб розпочати навчання в університеті в Німеччині?", ru: "Какой школьный аттестат обычно нужен, чтобы начать учёбу в университете в Германии?" },
    answers: [
      { de: "das Abitur", en: "the Abitur", uk: "атестат зрілості", ru: "Abitur (аттестат зрелости)", correct: true },
      { de: "ein Diplom", en: "a diploma", uk: "диплом", ru: "диплом" },
      { de: "die Prokura", en: "power of procuration (Prokura)", uk: "прокура", ru: "доверенность (Prokura)" },
      { de: "eine Gesellenprüfung", en: "a journeyman’s examination", uk: "іспит на звання підмайстра", ru: "экзамен на звание подмастерья" },
    ]
  },
  {
    id: "lid_245",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Wer darf in Deutschland nicht als Paar zusammenleben?", en: "Who is not allowed to live together as a couple in Germany?", uk: "Кому в Німеччині не можна жити разом як пара?", ru: "Кто не вправе жить вместе как пара в Германии?" },
    answers: [
      { de: "Hans (20 Jahre) und Marie (19 Jahre)", en: "Hans (20 years old) and Marie (19 years old)", uk: "Ганс (20 років) і Марі (19 років)", ru: "Ганс (20 лет) и Мария (19 лет)" },
      { de: "Tom (20 Jahre) und Klaus (45 Jahre)", en: "Tom (20 years old) and Klaus (45 years old)", uk: "Том (20 років) і Клаус (45 років)", ru: "Том (20 лет) и Клаус (45 лет)" },
      { de: "Sofie (35 Jahre) und Lisa (40 Jahre)", en: "Sofie (35 years old) and Lisa (40 years old)", uk: "Софі (35 років) і Ліза (40 років)", ru: "Софи (35 лет) и Лиза (40 лет)" },
      { de: "Anne (13 Jahre) und Tim (25 Jahre)", en: "Anne (13 years old) and Tim (25 years old)", uk: "Анна (13 років) і Тім (25 років)", ru: "Анна (13 лет) и Тим (25 лет)", correct: true },
    ]
  },
  {
    id: "lid_246",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Ab welchem Alter ist man in Deutschland volljährig?", en: "At what age does one come of age (reach legal adulthood) in Germany?", uk: "З якого віку в Німеччині настає повноліття?", ru: "С какого возраста в Германии наступает совершеннолетие?" },
    answers: [
      { de: "16", en: "16", uk: "16", ru: "16" },
      { de: "18", en: "18", uk: "18", ru: "18", correct: true },
      { de: "19", en: "19", uk: "19", ru: "19" },
      { de: "21", en: "21", uk: "21", ru: "21" },
    ]
  },
  {
    id: "lid_247",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?", en: "A woman is pregnant. Shortly before and after the birth of her child she is specially protected by law. What is this protection called?", uk: "Жінка вагітна. Незадовго до пологів і після них закон особливо її захищає. Як називається цей захист?", ru: "Женщина беременна. Незадолго до родов и после родов она особо защищена законом. Как называется эта защита?" },
    answers: [
      { de: "Elternzeit", en: "parental leave", uk: "батьківська відпустка", ru: "отпуск по уходу за ребёнком" },
      { de: "Mutterschutz", en: "maternity protection (Mutterschutz)", uk: "охорона материнства", ru: "охрана материнства (Mutterschutz)", correct: true },
      { de: "Geburtsvorbereitung", en: "birth preparation", uk: "підготовка до пологів", ru: "подготовка к родам" },
      { de: "Wochenbett", en: "postnatal period (Wochenbett)", uk: "післяпологовий період", ru: "послеродовой период (Wochenbett)" },
    ]
  },
  {
    id: "lid_248",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …", en: "In Germany, bringing up children is primarily the responsibility …", uk: "Виховання дітей у Німеччині — це насамперед завдання …", ru: "Воспитание детей в Германии — это прежде всего задача …" },
    answers: [
      { de: "des Staates.", en: "of the state.", uk: "держави.", ru: "государства." },
      { de: "der Eltern.", en: "of the parents.", uk: "батьків.", ru: "родителей.", correct: true },
      { de: "der Großeltern.", en: "of the grandparents.", uk: "бабусь і дідусів.", ru: "бабушек и дедушек." },
      { de: "der Schulen.", en: "of the schools.", uk: "шкіл.", ru: "школ." },
    ]
  },
  {
    id: "lid_249",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?", en: "Who is mainly responsible for bringing up children in Germany?", uk: "Хто в Німеччині головним чином відповідає за виховання дітей?", ru: "Кто в Германии главным образом отвечает за воспитание детей?" },
    answers: [
      { de: "der Staat", en: "the state", uk: "держава", ru: "государство" },
      { de: "die Eltern", en: "the parents", uk: "батьки", ru: "родители", correct: true },
      { de: "die Verwandten", en: "the relatives", uk: "родичі", ru: "родственники" },
      { de: "die Schulen", en: "the schools", uk: "школи", ru: "школы" },
    ]
  },
  {
    id: "lid_250",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …", en: "In Germany, you have the best chances of a well-paid job if you …", uk: "У Німеччині найкращі шанси отримати добре оплачувану роботу, якщо …", ru: "В Германии у вас наилучшие шансы на хорошо оплачиваемую работу, если вы …" },
    answers: [
      { de: "katholisch ist.", en: "are Catholic.", uk: "ти католик/католичка.", ru: "католик." },
      { de: "gut ausgebildet ist.", en: "are well educated.", uk: "ти добре освічений/освічена.", ru: "хорошо образованы.", correct: true },
      { de: "eine Frau ist.", en: "are a woman.", uk: "ти жінка.", ru: "женщина." },
      { de: "Mitglied einer Partei ist.", en: "are a member of a party.", uk: "ти член партії.", ru: "член партии." },
    ]
  },
  {
    id: "lid_251",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Wenn man in Deutschland ein Kind schlägt, …", en: "If you hit a child in Germany, …", uk: "Якщо в Німеччині бити дитину, …", ru: "Если в Германии ударить ребёнка, …" },
    answers: [
      { de: "geht das niemanden etwas an.", en: "it is nobody’s business.", uk: "це нікого не стосується.", ru: "это никого не касается." },
      { de: "geht das nur die Familie etwas an.", en: "it is only the family’s business.", uk: "це стосується лише родини.", ru: "это касается только семьи." },
      { de: "kann man dafür nicht bestraft werden.", en: "you cannot be punished for it.", uk: "за це не можна бути покараним.", ru: "за это нельзя быть наказанным." },
      { de: "kann man dafür bestraft werden.", en: "you can be punished for it.", uk: "за це можна бути покараним.", ru: "за это можно быть наказанным.", correct: true },
    ]
  },
  {
    id: "lid_252",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "In Deutschland …", en: "In Germany, …", uk: "У Німеччині …", ru: "В Германии …" },
    answers: [
      { de: "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.", en: "you may be married to only one partner at a time.", uk: "можна одночасно бути одруженим лише з одним партнером/однією партнеркою.", ru: "можно состоять в браке одновременно только с одним партнёром.", correct: true },
      { de: "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.", en: "you can have several spouses at the same time.", uk: "можна мати кількох чоловіків/дружин одночасно.", ru: "можно иметь нескольких супругов одновременно." },
      { de: "darf man nicht wieder heiraten, wenn man einmal verheiratet war.", en: "you may not marry again once you have been married.", uk: "не можна знову одружуватися, якщо колись уже був одружений/була одружена.", ru: "нельзя снова вступать в брак, если уже был в браке." },
      { de: "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.", en: "a woman may not marry again if her husband has died.", uk: "жінка не може знову вийти заміж, якщо її чоловік помер.", ru: "женщина не вправе снова выходить замуж, если её муж умер." },
    ]
  },
  {
    id: "lid_253",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?", en: "Where do you have to register if you move house in Germany?", uk: "Де ви маєте зареєструватися, якщо переїжджаєте в Німеччині?", ru: "Где вы должны зарегистрироваться, если переезжаете в Германии?" },
    answers: [
      { de: "beim Einwohnermeldeamt", en: "at the residents’ registration office", uk: "у відомстві реєстрації жителів", ru: "в бюро регистрации жителей", correct: true },
      { de: "beim Standesamt", en: "at the registry office (Standesamt)", uk: "у відомстві цивільного стану (РАЦС)", ru: "в ЗАГСе (Standesamt)" },
      { de: "beim Ordnungsamt", en: "at the public order office", uk: "у відділі громадського порядку", ru: "в ведомстве общественного порядка" },
      { de: "beim Gewerbeamt", en: "at the trade office", uk: "у відомстві з реєстрації підприємницької діяльності", ru: "в промысловом ведомстве" },
    ]
  },
  {
    id: "lid_254",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das „Trennungsjahr“ einhalten. Was bedeutet das?", en: "In Germany, married couples are allowed to get divorced. In most cases they have to observe the “separation year” (Trennungsjahr). What does that mean?", uk: "У Німеччині подружжя може розлучатися. Здебільшого для цього треба дотриматися «року окремого проживання». Що це означає?", ru: "В Германии супружеские пары могут развестись. Как правило, для этого нужно соблюсти «год раздельного проживания» (Trennungsjahr). Что это означает?" },
    answers: [
      { de: "Der Scheidungsprozess dauert ein Jahr.", en: "The divorce proceedings last one year.", uk: "Процес розлучення триває один рік.", ru: "Бракоразводный процесс длится один год." },
      { de: "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.", en: "The spouses have been married for one year, then divorce is possible.", uk: "Подружжя перебуває в шлюбі один рік, після цього розлучення можливе.", ru: "Супруги состоят в браке один год, после этого возможен развод." },
      { de: "Das Besuchsrecht für die Kinder gilt ein Jahr.", en: "The visiting right for the children applies for one year.", uk: "Право на побачення з дітьми діє один рік.", ru: "Право на встречи с детьми действует один год." },
      { de: "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.", en: "The spouses live separate lives for at least one year. After that, divorce is possible.", uk: "Подружжя щонайменше рік живе окремо власним життям. Після цього розлучення можливе.", ru: "Супруги живут раздельно как минимум один год. После этого возможен развод.", correct: true },
    ]
  },
  {
    id: "lid_255",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …", en: "In case of parenting problems, parents in Germany can get help from the …", uk: "У разі проблем у вихованні батьки в Німеччині можуть отримати допомогу від …", ru: "При проблемах с воспитанием родители в Германии могут получить помощь в …" },
    answers: [
      { de: "Ordnungsamt.", en: "public order office.", uk: "відділу громадського порядку.", ru: "ведомстве общественного порядка." },
      { de: "Schulamt.", en: "school authority.", uk: "шкільного управління.", ru: "школьном управлении." },
      { de: "Jugendamt.", en: "youth welfare office (Jugendamt).", uk: "служби у справах молоді.", ru: "ведомстве по делам молодёжи (Jugendamt).", correct: true },
      { de: "Gesundheitsamt.", en: "public health office.", uk: "відомства охорони здоровʼя.", ru: "ведомстве здравоохранения." },
    ]
  },
  {
    id: "lid_256",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?", en: "A married couple wants to open a restaurant in Germany. What do they absolutely need for this?", uk: "Подружжя хоче відкрити в Німеччині ресторан. Що їм для цього обовʼязково потрібно?", ru: "Супружеская пара хочет открыть в Германии ресторан. Что им для этого обязательно нужно?" },
    answers: [
      { de: "eine Erlaubnis der Polizei", en: "a permit from the police", uk: "дозвіл поліції", ru: "разрешение полиции" },
      { de: "eine Genehmigung einer Partei", en: "an approval from a party", uk: "дозвіл партії", ru: "одобрение партии" },
      { de: "eine Genehmigung des Einwohnermeldeamts", en: "an approval from the residents’ registration office", uk: "дозвіл відомства реєстрації жителів", ru: "одобрение бюро регистрации жителей" },
      { de: "eine Gaststättenerlaubnis von der zuständigen Behörde", en: "a licence to run a restaurant (Gaststättenerlaubnis) from the responsible authority", uk: "ліцензія на ресторанну діяльність від компетентного органу", ru: "разрешение на ведение ресторанного бизнеса (Gaststättenerlaubnis) от компетентного ведомства", correct: true },
    ]
  },
  {
    id: "lid_257",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …", en: "An adult woman wants to make up her Abitur in Germany. She can do this at a …", uk: "Доросла жінка хоче в Німеччині здобути атестат зрілості вже в дорослому віці. Де вона може це зробити?", ru: "Взрослая женщина хочет в Германии получить Abitur (аттестат зрелости) позднее. Она может сделать это в …" },
    answers: [
      { de: "einer Hochschule.", en: "university.", uk: "у виші.", ru: "высшей школе." },
      { de: "einem Abendgymnasium.", en: "evening grammar school (Abendgymnasium).", uk: "у вечірній гімназії.", ru: "вечерней гимназии (Abendgymnasium).", correct: true },
      { de: "einer Hauptschule.", en: "Hauptschule.", uk: "в основній школі.", ru: "основной школе (Hauptschule)." },
      { de: "einer Privatuniversität.", en: "private university.", uk: "у приватному університеті.", ru: "частном университете." },
    ]
  },
  {
    id: "lid_258",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Was darf das Jugendamt in Deutschland?", en: "What is the youth welfare office (Jugendamt) allowed to do in Germany?", uk: "Що має право робити служба у справах молоді в Німеччині?", ru: "Что вправе делать ведомство по делам молодёжи (Jugendamt) в Германии?" },
    answers: [
      { de: "Es entscheidet, welche Schule das Kind besucht.", en: "It decides which school the child attends.", uk: "Вона вирішує, до якої школи ходитиме дитина.", ru: "Оно решает, какую школу посещает ребёнок." },
      { de: "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.", en: "It can remove a child from the family if the child is being beaten or starved.", uk: "Вона може забрати з родини дитину, яку бʼють або яка голодує.", ru: "Оно может забрать из семьи ребёнка, которого бьют или морят голодом.", correct: true },
      { de: "Es bezahlt das Kindergeld an die Eltern.", en: "It pays the child benefit to the parents.", uk: "Вона виплачує батькам допомогу на дітей.", ru: "Оно выплачивает родителям пособие на детей." },
      { de: "Es kontrolliert, ob das Kind einen Kindergarten besucht.", en: "It checks whether the child attends a kindergarten.", uk: "Вона перевіряє, чи дитина відвідує дитячий садок.", ru: "Оно проверяет, посещает ли ребёнок детский сад." },
    ]
  },
  {
    id: "lid_259",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …", en: "The Career Information Centre (BIZ) at the Federal Employment Agency in Germany helps with …", uk: "Центр професійної інформації BIZ при Федеральному агентстві зайнятості в Німеччині допомагає в …", ru: "Центр профессиональной информации BIZ при Федеральном агентстве по труду в Германии помогает …" },
    answers: [
      { de: "Rentenberechnung.", en: "pension calculation.", uk: "розрахунку пенсії.", ru: "в расчёте пенсии." },
      { de: "Lehrstellensuche.", en: "the search for an apprenticeship.", uk: "пошуку місця для професійного навчання.", ru: "в поиске места для профессионального обучения.", correct: true },
      { de: "Steuererklärung.", en: "the tax return.", uk: "подачі податкової декларації.", ru: "в налоговой декларации." },
      { de: "Krankenversicherung.", en: "health insurance.", uk: "медичному страхуванні.", ru: "в медицинском страховании." },
    ]
  },
  {
    id: "lid_260",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "In Deutschland hat ein Kind in der Schule …", en: "In Germany, a child at school has …", uk: "У Німеччині дитина в школі має …", ru: "В Германии у ребёнка в школе …" },
    answers: [
      { de: "Recht auf unbegrenzte Freizeit.", en: "a right to unlimited free time.", uk: "право на необмежений вільний час.", ru: "право на неограниченное свободное время." },
      { de: "Wahlfreiheit für alle Fächer.", en: "freedom of choice for all subjects.", uk: "свободу вибору всіх предметів.", ru: "свобода выбора всех предметов." },
      { de: "Anspruch auf Schulgeld.", en: "a claim to school fees.", uk: "право на плату за навчання.", ru: "право на плату за обучение." },
      { de: "Anwesenheitspflicht.", en: "a duty to attend.", uk: "обовʼязок бути присутньою.", ru: "обязанность посещать занятия.", correct: true },
    ]
  },
  {
    id: "lid_261",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …", en: "A man wants to make up his Abitur in Germany at the age of 30. Where can he do this? At a …", uk: "Чоловік у віці 30 років хоче в Німеччині здобути атестат зрілості. Де він може це зробити?", ru: "Мужчина хочет в 30 лет в Германии получить Abitur позднее. Где он может это сделать? В …" },
    answers: [
      { de: "einer Hochschule.", en: "university.", uk: "у виші.", ru: "высшей школе." },
      { de: "einem Abendgymnasium.", en: "evening grammar school (Abendgymnasium).", uk: "у вечірній гімназії.", ru: "вечерней гимназии (Abendgymnasium).", correct: true },
      { de: "einer Hauptschule.", en: "Hauptschule.", uk: "в основній школі.", ru: "основной школе (Hauptschule)." },
      { de: "einer Privatuniversität.", en: "private university.", uk: "у приватному університеті.", ru: "частном университете." },
    ]
  },
  {
    id: "lid_262",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?", en: "What does the principle of equal treatment mean in Germany?", uk: "Що означає в Німеччині принцип рівного ставлення?", ru: "Что означает принцип равного обращения в Германии?" },
    answers: [
      { de: "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.", en: "Nobody may be disadvantaged, for example, because of a disability.", uk: "Нікого не можна ущемляти, наприклад, через інвалідність.", ru: "Никого нельзя ущемлять, например, из-за инвалидности.", correct: true },
      { de: "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.", en: "You may disadvantage other people if there are sufficient personal reasons for it.", uk: "Можна ущемляти інших людей, якщо є достатні особисті причини.", ru: "Можно ущемлять других людей, если для этого есть достаточные личные основания." },
      { de: "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.", en: "Nobody may sue on behalf of people who have been disadvantaged.", uk: "Ніхто не може подавати позов проти осіб, якщо вони були ущемлені.", ru: "Никто не вправе подавать в суд на тех, кто ущемил других людей." },
      { de: "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden.", en: "It is a law for everyone to donate money to disadvantaged groups every year.", uk: "Для всіх діє закон щороку жертвувати гроші ущемленим групам.", ru: "Для всех есть закон ежегодно жертвовать деньги ущемлённым группам." },
    ]
  },
  {
    id: "lid_263",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …", en: "In Germany, young people aged 14 and over are criminally responsible. This means: young people who are 14 or older and break criminal laws …", uk: "У Німеччині підлітки з 14 років підлягають кримінальній відповідальності. Це означає: підлітки віком від 14 років, які порушують кримінальні закони, …", ru: "В Германии подростки с 14 лет несут уголовную ответственность. Это означает: подростки, которым 14 лет и больше и которые нарушают уголовные законы, …" },
    answers: [
      { de: "werden bestraft.", en: "are punished.", uk: "караються.", ru: "наказываются.", correct: true },
      { de: "werden wie Erwachsene behandelt.", en: "are treated like adults.", uk: "розглядаються як дорослі.", ru: "рассматриваются как взрослые." },
      { de: "teilen die Strafe mit ihren Eltern.", en: "share the punishment with their parents.", uk: "діляться покаранням зі своїми батьками.", ru: "делят наказание со своими родителями." },
      { de: "werden nicht bestraft.", en: "are not punished.", uk: "не караються.", ru: "не наказываются." },
    ]
  },
  {
    id: "lid_264",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?", en: "At which festival do people in Germany wear colourful costumes and masks?", uk: "На яке свято люди в Німеччині носять яскраві костюми та маски?", ru: "В какой праздник люди в Германии носят яркие костюмы и маски?" },
    answers: [
      { de: "am Rosenmontag", en: "on Rose Monday (Rosenmontag)", uk: "у «Рожевий понеділок»", ru: "в «Розовый понедельник» (Rosenmontag)", correct: true },
      { de: "am Maifeiertag", en: "on May Day", uk: "на День праці (1 травня)", ru: "в праздник 1 Мая" },
      { de: "beim Oktoberfest", en: "at the Oktoberfest", uk: "на Октоберфесті", ru: "на Октоберфесте" },
      { de: "an Pfingsten", en: "at Pentecost", uk: "на Трійцю", ru: "на Троицу" },
    ]
  },
  {
    id: "lid_265",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?", en: "Where do you have to go first in Germany if you want to get married?", uk: "Куди в Німеччині потрібно звернутися насамперед, якщо хочеш одружитися?", ru: "Куда в Германии нужно пойти в первую очередь, если вы хотите вступить в брак?" },
    answers: [
      { de: "zum Einwohnermeldeamt", en: "to the residents’ registration office", uk: "до відомства реєстрації жителів", ru: "в бюро регистрации жителей" },
      { de: "zum Ordnungsamt", en: "to the public order office", uk: "до відділу громадського порядку", ru: "в ведомство общественного порядка" },
      { de: "zur Agentur für Arbeit", en: "to the employment agency", uk: "до агентства зайнятості", ru: "в агентство по труду" },
      { de: "zum Standesamt", en: "to the registry office (Standesamt)", uk: "до відомства цивільного стану (РАЦС)", ru: "в ЗАГС (Standesamt)", correct: true },
    ]
  },
  {
    id: "lid_266",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Wann beginnt die gesetzliche Nachtruhe in Deutschland?", en: "When do the statutory quiet hours at night begin in Germany?", uk: "Коли в Німеччині починається законна нічна тиша?", ru: "Когда в Германии начинается установленная законом ночная тишина?" },
    answers: [
      { de: "wenn die Sonne untergeht", en: "when the sun goes down", uk: "коли заходить сонце", ru: "когда заходит солнце" },
      { de: "wenn die Nachbarn schlafen gehen", en: "when the neighbours go to sleep", uk: "коли сусіди лягають спати", ru: "когда соседи ложатся спать" },
      { de: "um 0 Uhr, Mitternacht", en: "at 12 a.m., midnight", uk: "о 0:00, опівночі", ru: "в 0 часов, в полночь" },
      { de: "um 22 Uhr", en: "at 10 p.m.", uk: "о 22:00", ru: "в 22 часа", correct: true },
    ]
  },
  {
    id: "lid_267",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?", en: "A young woman in Germany, 22 years old, lives with her boyfriend. The woman’s parents do not like this, because they do not like the boyfriend. What can the parents do?", uk: "Молода жінка в Німеччині, 22 роки, живе разом зі своїм хлопцем. Батькам жінки це не подобається, тому що їм не подобається хлопець. Що можуть зробити батьки?", ru: "Молодая женщина в Германии, 22 года, живёт со своим парнем. Родителям женщины это не нравится, потому что им не нравится парень. Что могут сделать родители?" },
    answers: [
      { de: "Sie müssen die Entscheidung der volljährigen Tochter respektieren.", en: "They must respect the decision of their adult daughter.", uk: "Вони повинні поважати рішення повнолітньої доньки.", ru: "Они должны уважать решение совершеннолетней дочери.", correct: true },
      { de: "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.", en: "They have the right to bring their daughter back to the parental home.", uk: "Вони мають право повернути доньку до батьківської квартири.", ru: "Они вправе вернуть дочь в родительский дом." },
      { de: "Sie können zur Polizei gehen und die Tochter anzeigen.", en: "They can go to the police and report their daughter.", uk: "Вони можуть піти до поліції і заявити на доньку.", ru: "Они могут пойти в полицию и заявить на дочь." },
      { de: "Sie suchen einen anderen Mann für die Tochter.", en: "They look for another man for their daughter.", uk: "Вони шукають доньці іншого чоловіка.", ru: "Они ищут для дочери другого мужчину." },
    ]
  },
  {
    id: "lid_268",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?", en: "A young woman wants to get a driving licence. She is afraid of the test because her mother tongue is not German. What is correct?", uk: "Молода жінка хоче отримати водійське посвідчення. Вона боїться іспиту, тому що її рідна мова не німецька. Що є правильним?", ru: "Молодая женщина хочет получить водительские права. Она боится экзамена, потому что её родной язык — не немецкий. Что верно?" },
    answers: [
      { de: "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.", en: "She must live in Germany for at least ten years before she can get a driving licence.", uk: "Вона має прожити в Німеччині щонайменше десять років, перш ніж зможе отримати водійське посвідчення.", ru: "Она должна прожить в Германии не менее десяти лет, прежде чем сможет получить права." },
      { de: "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.", en: "If she cannot speak German, she is not allowed to have a driving licence.", uk: "Якщо вона не знає німецької, вона не може мати водійське посвідчення.", ru: "Если она не знает немецкого, у неё не может быть водительских прав." },
      { de: "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.", en: "She must get the driving licence in the country where her language is spoken.", uk: "Вона має здавати на водійське посвідчення в країні, де розмовляють її мовою.", ru: "Она должна получить права в той стране, где говорят на её языке." },
      { de: "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.", en: "She can perhaps take the theory test in her mother tongue. There are more than ten languages to choose from.", uk: "Теоретичний іспит вона, можливо, зможе скласти рідною мовою. На вибір є понад десять мов.", ru: "Возможно, она может сдать теоретический экзамен на своём родном языке. На выбор более десяти языков.", correct: true },
    ]
  },
  {
    id: "lid_269",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …", en: "In Germany, children from the age of three until they start school are entitled to …", uk: "У Німеччині діти з трьох років до першого вступу до школи мають право на …", ru: "В Германии дети с трёх лет и до поступления в школу имеют право на …" },
    answers: [
      { de: "monatliches Taschengeld.", en: "monthly pocket money.", uk: "щомісячні кишенькові гроші.", ru: "ежемесячные карманные деньги." },
      { de: "einen Platz in einem Sportverein.", en: "a place in a sports club.", uk: "місце в спортивному клубі.", ru: "место в спортивном клубе." },
      { de: "einen Kindergartenplatz.", en: "a place in kindergarten.", uk: "місце в дитячому садку.", ru: "место в детском саду.", correct: true },
      { de: "einen Ferienpass.", en: "a holiday pass.", uk: "абонемент на канікули.", ru: "каникулярный пропуск." },
    ]
  },
  {
    id: "lid_270",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Die Volkshochschule in Deutschland ist eine Einrichtung …", en: "The adult education centre (Volkshochschule) in Germany is an institution …", uk: "Народний університет у Німеччині — це заклад …", ru: "Народный университет (Volkshochschule) в Германии — это учреждение …" },
    answers: [
      { de: "für den Religionsunterricht.", en: "for religious education.", uk: "для уроків релігії.", ru: "для уроков религии." },
      { de: "nur für Jugendliche.", en: "only for young people.", uk: "лише для підлітків.", ru: "только для молодёжи." },
      { de: "zur Weiterbildung.", en: "for continuing education.", uk: "для додаткової освіти.", ru: "для повышения квалификации и дополнительного образования.", correct: true },
      { de: "nur für Rentnerinnen und Rentner.", en: "only for pensioners.", uk: "лише для пенсіонерів.", ru: "только для пенсионеров." },
    ]
  },
  {
    id: "lid_271",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Was ist in Deutschland ein Brauch zu Weihnachten?", en: "What is a custom at Christmas in Germany?", uk: "Що є в Німеччині звичаєм на Різдво?", ru: "Какой обычай существует в Германии на Рождество?" },
    answers: [
      { de: "bunte Eier verstecken", en: "hiding coloured eggs", uk: "ховати кольорові яйця", ru: "прятать разноцветные яйца" },
      { de: "einen Tannenbaum schmücken", en: "decorating a fir tree", uk: "прикрашати ялинку", ru: "наряжать ель", correct: true },
      { de: "sich mit Masken und Kostümen verkleiden", en: "dressing up in masks and costumes", uk: "перевдягатися в маски та костюми", ru: "наряжаться в маски и костюмы" },
      { de: "Kürbisse vor die Tür stellen", en: "placing pumpkins in front of the door", uk: "ставити гарбузи перед дверима", ru: "выставлять тыквы перед дверью" },
    ]
  },
  {
    id: "lid_272",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Welche Lebensform ist in Deutschland nicht erlaubt?", en: "Which way of living together is not permitted in Germany?", uk: "Яка форма співжиття в Німеччині не дозволена?", ru: "Какой образ жизни в Германии не разрешён?" },
    answers: [
      { de: "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.", en: "A man and a woman are divorced and live with new partners.", uk: "Чоловік і жінка розлучені й живуть з новими партнерами.", ru: "Мужчина и женщина в разводе и живут с новыми партнёрами." },
      { de: "Zwei Frauen leben zusammen.", en: "Two women live together.", uk: "Дві жінки живуть разом.", ru: "Две женщины живут вместе." },
      { de: "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.", en: "A single father lives with his two children.", uk: "Батько-одинак живе зі своїми двома дітьми.", ru: "Отец-одиночка живёт со своими двумя детьми." },
      { de: "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.", en: "A man is married to two women at the same time.", uk: "Чоловік одночасно одружений з двома жінками.", ru: "Мужчина состоит в браке с двумя женщинами одновременно.", correct: true },
    ]
  },
  {
    id: "lid_273",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Bei Erziehungsproblemen gehen Sie in Deutschland …", en: "In case of parenting problems, you go in Germany …", uk: "У разі проблем у вихованні ви в Німеччині йдете …", ru: "При проблемах с воспитанием вы в Германии идёте …" },
    answers: [
      { de: "zur Ärztin/zum Arzt.", en: "to the doctor.", uk: "до лікаря/лікарки.", ru: "к врачу." },
      { de: "zum Gesundheitsamt.", en: "to the public health office.", uk: "до відомства охорони здоровʼя.", ru: "в ведомство здравоохранения." },
      { de: "zum Einwohnermeldeamt.", en: "to the residents’ registration office.", uk: "до відомства реєстрації жителів.", ru: "в бюро регистрации жителей." },
      { de: "zum Jugendamt.", en: "to the youth welfare office (Jugendamt).", uk: "до служби у справах молоді.", ru: "в ведомство по делам молодёжи (Jugendamt).", correct: true },
    ]
  },
  {
    id: "lid_274",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?", en: "In Germany, you have deliberately opened a letter that is addressed to another person. What did you fail to respect?", uk: "Ви в Німеччині навмисно відкрили лист, адресований іншій особі. Що ви порушили?", ru: "Вы в Германии намеренно вскрыли письмо, адресованное другому человеку. Чего вы не соблюли?" },
    answers: [
      { de: "das Schweigerecht", en: "the right to remain silent", uk: "право мовчати", ru: "право хранить молчание" },
      { de: "das Briefgeheimnis", en: "the secrecy of correspondence", uk: "таємницю листування", ru: "тайну переписки", correct: true },
      { de: "die Schweigepflicht", en: "the duty of confidentiality", uk: "обовʼязок зберігати мовчання", ru: "обязанность хранить молчание" },
      { de: "die Meinungsfreiheit", en: "freedom of expression", uk: "свободу слова", ru: "свободу мнений" },
    ]
  },
  {
    id: "lid_275",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Was braucht man in Deutschland für eine Ehescheidung?", en: "What do you need for a divorce in Germany?", uk: "Що потрібно в Німеччині для розлучення?", ru: "Что нужно в Германии для развода?" },
    answers: [
      { de: "die Einwilligung der Eltern", en: "the consent of the parents", uk: "згода батьків", ru: "согласие родителей" },
      { de: "ein Attest einer Ärztin/eines Arztes", en: "a medical certificate from a doctor", uk: "медична довідка від лікаря/лікарки", ru: "справка от врача" },
      { de: "die Einwilligung der Kinder", en: "the consent of the children", uk: "згода дітей", ru: "согласие детей" },
      { de: "die Unterstützung einer Anwältin/eines Anwalts", en: "the support of a lawyer", uk: "підтримка адвоката/адвокатки", ru: "помощь адвоката", correct: true },
    ]
  },
  {
    id: "lid_276",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?", en: "What should you do if you are treated badly by your contact person at a German public authority?", uk: "Що ви маєте робити, якщо до вас погано ставиться ваш співрозмовник/співрозмовниця в німецькому органі влади?", ru: "Что вам следует сделать, если контактное лицо в германском ведомстве плохо с вами обращается?" },
    answers: [
      { de: "Ich kann nichts tun.", en: "There is nothing I can do.", uk: "Я нічого не можу зробити.", ru: "Я ничего не могу сделать." },
      { de: "Ich muss mir diese Behandlung gefallen lassen.", en: "I have to put up with this treatment.", uk: "Я мушу миритися з таким ставленням.", ru: "Я должен мириться с таким обращением." },
      { de: "Ich drohe der Person.", en: "I threaten the person.", uk: "Я погрожую цій особі.", ru: "Я угрожаю этому человеку." },
      { de: "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.", en: "I can complain to the head of the authority.", uk: "Я можу поскаржитися керівнику/керівниці органу.", ru: "Я могу пожаловаться руководителю ведомства.", correct: true },
    ]
  },
  {
    id: "lid_277",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …", en: "A woman with a two-year-old child applies for a job in Germany. What is an example of discrimination? She does not get the job only because she …", uk: "Жінка, яка має дворічну дитину, подає заявку на посаду в Німеччині. Що є прикладом дискримінації? Вона не отримує посаду лише тому, що вона …", ru: "Женщина с двухлетним ребёнком подаёт заявку на должность в Германии. Что является примером дискриминации? Она не получает должность только потому, что она …" },
    answers: [
      { de: "kein Englisch spricht.", en: "does not speak English.", uk: "не розмовляє англійською.", ru: "не говорит по-английски." },
      { de: "zu hohe Gehaltsvorstellungen hat.", en: "has salary expectations that are too high.", uk: "має надто високі очікування щодо зарплати.", ru: "имеет слишком высокие требования к зарплате." },
      { de: "keine Erfahrungen in diesem Beruf hat.", en: "has no experience in this profession.", uk: "не має досвіду в цій професії.", ru: "не имеет опыта в этой профессии." },
      { de: "Mutter ist.", en: "is a mother.", uk: "мати.", ru: "мать.", correct: true },
    ]
  },
  {
    id: "lid_278",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …", en: "A man in a wheelchair has applied for a job as an accountant. What is an example of discrimination? He does not get the job only because he …", uk: "Чоловік на інвалідному візку подав заявку на посаду бухгалтера. Що є прикладом дискримінації? Він не отримує посаду лише тому, що він …", ru: "Мужчина в инвалидной коляске подал заявку на должность бухгалтера. Что является примером дискриминации? Он не получает должность только потому, что он …" },
    answers: [
      { de: "im Rollstuhl sitzt.", en: "is in a wheelchair.", uk: "сидить в інвалідному візку.", ru: "сидит в инвалидной коляске.", correct: true },
      { de: "keine Erfahrung hat.", en: "has no experience.", uk: "не має досвіду.", ru: "не имеет опыта." },
      { de: "zu hohe Gehaltsvorstellungen hat.", en: "has salary expectations that are too high.", uk: "має надто високі очікування щодо зарплати.", ru: "имеет слишком высокие требования к зарплате." },
      { de: "kein Englisch spricht.", en: "does not speak English.", uk: "не розмовляє англійською.", ru: "не говорит по-английски." },
    ]
  },
  {
    id: "lid_279",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "In den meisten Mietshäusern in Deutschland gibt es eine „Hausordnung“. Was steht in einer solchen „Hausordnung“? Sie nennt …", en: "In most rented apartment buildings in Germany there are “house rules” (Hausordnung). What do such “house rules” contain? They state …", uk: "У більшості орендованих будинків у Німеччині є «правила внутрішнього розпорядку». Що міститься в таких «правилах»? Вони містять …", ru: "В большинстве арендных домов в Германии есть «правила внутреннего распорядка» (Hausordnung). Что содержится в таких правилах? В них указаны …" },
    answers: [
      { de: "Regeln für die Benutzung öffentlicher Verkehrsmittel.", en: "rules for using public transport.", uk: "правила користування громадським транспортом.", ru: "правила пользования общественным транспортом." },
      { de: "alle Mieterinnen und Mieter im Haus.", en: "all tenants in the building.", uk: "усіх орендарів і орендарок у будинку.", ru: "все жильцы дома." },
      { de: "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.", en: "rules that all residents must follow.", uk: "правила, яких мають дотримуватися всі мешканці та мешканки.", ru: "правила, которые должны соблюдать все жильцы.", correct: true },
      { de: "die Adresse des nächsten Ordnungsamtes.", en: "the address of the nearest public order office.", uk: "адресу найближчого відділу громадського порядку.", ru: "адрес ближайшего ведомства общественного порядка." },
    ]
  },
  {
    id: "lid_280",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …", en: "If you want to challenge an incorrect tax assessment in Germany, you have to …", uk: "Якщо ви в Німеччині хочете захиститися від неправильного податкового повідомлення, вам потрібно …", ru: "Если вы в Германии хотите оспорить неправильное налоговое уведомление, вы должны …" },
    answers: [
      { de: "nichts machen.", en: "do nothing.", uk: "нічого не робити.", ru: "ничего не делать." },
      { de: "den Bescheid wegwerfen.", en: "throw the notice away.", uk: "викинути повідомлення.", ru: "выбросить уведомление." },
      { de: "Einspruch einlegen.", en: "lodge an objection.", uk: "подати заперечення.", ru: "подать возражение.", correct: true },
      { de: "warten, bis ein anderer Bescheid kommt.", en: "wait until another notice arrives.", uk: "чекати, поки прийде інше повідомлення.", ru: "подождать, пока придёт другое уведомление." },
    ]
  },
  {
    id: "lid_281",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …", en: "Two friends want to go to a public swimming pool in Germany. Both have dark skin and are therefore not let in. Which right is violated in this situation? The right to …", uk: "Двоє друзів хочуть піти в публічний басейн у Німеччині. Обидва мають темний колір шкіри, і їх через це не пускають. Яке право порушено в цій ситуації? Право на …", ru: "Два друга хотят пойти в общественный бассейн в Германии. У обоих тёмный цвет кожи, и поэтому их не пускают. Какое право нарушается в этой ситуации? Право на …" },
    answers: [
      { de: "Meinungsfreiheit", en: "freedom of expression", uk: "свобода слова", ru: "свободу мнений" },
      { de: "Gleichbehandlung", en: "equal treatment", uk: "рівне ставлення", ru: "равное обращение", correct: true },
      { de: "Versammlungsfreiheit", en: "freedom of assembly", uk: "свободу зібрань", ru: "свободу собраний" },
      { de: "Freizügigkeit", en: "freedom of movement", uk: "свободу пересування", ru: "свободу передвижения" },
    ]
  },
  {
    id: "lid_282",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?", en: "Which voluntary office must German citizens take on if they are called upon to do so?", uk: "Яку громадську посаду мають обовʼязково прийняти громадяни Німеччини, якщо їх до цього закликають?", ru: "Какую почётную общественную должность граждане Германии обязаны принять, если их об этом просят?" },
    answers: [
      { de: "Vereinstrainerin/Vereinstrainer", en: "club coach", uk: "тренер/тренерка клубу", ru: "тренер клуба" },
      { de: "Wahlhelferin/Wahlhelfer", en: "election helper", uk: "виборчий помічник/помічниця", ru: "помощник на выборах", correct: true },
      { de: "Bibliotheksaufsicht", en: "library supervision", uk: "наглядач/наглядачка в бібліотеці", ru: "надзор в библиотеке" },
      { de: "Lehrerin/Lehrer", en: "teacher", uk: "учитель/учителька", ru: "учитель" },
    ]
  },
  {
    id: "lid_283",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?", en: "What do you do if you receive an incorrect bill from a German public authority?", uk: "Що ви зробите, якщо отримаєте неправильний рахунок від німецького органу влади?", ru: "Что вы делаете, если получили неправильный счёт от германского ведомства?" },
    answers: [
      { de: "Ich lasse die Rechnung liegen.", en: "I leave the bill lying around.", uk: "Я залишаю рахунок лежати.", ru: "Я оставляю счёт без внимания." },
      { de: "Ich lege Widerspruch bei der Behörde ein.", en: "I lodge an objection with the authority.", uk: "Я подаю до органу заперечення.", ru: "Я подаю возражение в ведомство.", correct: true },
      { de: "Ich schicke die Rechnung an die Behörde zurück.", en: "I send the bill back to the authority.", uk: "Я відсилаю рахунок назад до органу.", ru: "Я отправляю счёт обратно в ведомство." },
      { de: "Ich gehe mit der Rechnung zum Finanzamt.", en: "I take the bill to the tax office.", uk: "Я йду з рахунком до податкової інспекції.", ru: "Я иду со счётом в налоговую инспекцию." },
    ]
  },
  {
    id: "lid_284",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?", en: "What you need to be able to do for work will change very quickly in the future. What can one do?", uk: "Те, що потрібно вміти для роботи, у майбутньому змінюватиметься дуже швидко. Що можна зробити?", ru: "То, что нужно уметь для работы, в будущем будет очень быстро меняться. Что можно сделать?" },
    answers: [
      { de: "Es ist egal, was man lernt.", en: "It does not matter what you learn.", uk: "Не має значення, чого вчишся.", ru: "Неважно, чему учиться." },
      { de: "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.", en: "Adults must keep on learning even after their training.", uk: "Дорослі мають і після закінчення навчання постійно вчитися далі.", ru: "Взрослые должны продолжать учиться и после окончания профессионального обучения.", correct: true },
      { de: "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.", en: "Children learn everything at school that is important in a job. After school, you do not have to learn any more.", uk: "Діти в школі вчаться всього, що важливо в професії. Після школи вчитися далі не потрібно.", ru: "Дети в школе учатся всему, что важно в профессии. После школы учиться дальше не нужно." },
      { de: "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.", en: "Everyone must stop working earlier, because everything is changing.", uk: "Усі мають раніше припиняти працювати, тому що все змінюється.", ru: "Все должны раньше прекращать работать, потому что всё меняется." },
    ]
  },
  {
    id: "lid_285",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?", en: "Ms Frost works as a permanent employee in an office. What does she not have to pay from her salary?", uk: "Пані Фрост працює штатною співробітницею в офісі. Що вона не повинна сплачувати зі своєї зарплати?", ru: "Госпожа Фрост работает штатной сотрудницей в офисе. Что ей не нужно платить из своей зарплаты?" },
    answers: [
      { de: "Lohnsteuer", en: "wage tax", uk: "податок із заробітної плати", ru: "подоходный налог с заработной платы" },
      { de: "Beiträge zur Arbeitslosenversicherung", en: "contributions to unemployment insurance", uk: "внески до страхування на випадок безробіття", ru: "взносы на страхование по безработице" },
      { de: "Beiträge zur Renten- und Krankenversicherung", en: "contributions to pension and health insurance", uk: "внески до пенсійного та медичного страхування", ru: "взносы на пенсионное и медицинское страхование" },
      { de: "Umsatzsteuer", en: "value-added tax (VAT)", uk: "податок на додану вартість (ПДВ)", ru: "налог с оборота (НДС)", correct: true },
    ]
  },
  {
    id: "lid_286",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?", en: "Which organisation in a company helps employees with problems with their employer?", uk: "Яка організація на фірмі допомагає працівникам і працівницям у разі проблем із роботодавцем/роботодавицею?", ru: "Какая организация в фирме помогает работникам при проблемах с работодателем?" },
    answers: [
      { de: "der Betriebsrat", en: "the works council (Betriebsrat)", uk: "виробнича рада", ru: "производственный совет (Betriebsrat)", correct: true },
      { de: "die Betriebsprüferin/der Betriebsprüfer", en: "the company auditor", uk: "ревізор/ревізорка підприємства", ru: "производственный аудитор" },
      { de: "die Betriebsgruppe", en: "the company group", uk: "виробнича група", ru: "производственная группа" },
      { de: "das Betriebsmanagement", en: "the company management", uk: "менеджмент підприємства", ru: "руководство предприятия" },
    ]
  },
  {
    id: "lid_287",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?", en: "You want to end your employment with a company in Germany. What do you have to observe?", uk: "Ви хочете припинити трудові відносини з фірмою в Німеччині. Що вам потрібно враховувати?", ru: "Вы хотите расторгнуть трудовые отношения с фирмой в Германии. Что вам нужно учесть?" },
    answers: [
      { de: "die Gehaltszahlungen", en: "the salary payments", uk: "виплату зарплати", ru: "выплаты заработной платы" },
      { de: "die Arbeitszeit", en: "the working hours", uk: "робочий час", ru: "рабочее время" },
      { de: "die Kündigungsfrist", en: "the notice period", uk: "термін попередження про звільнення", ru: "срок предупреждения об увольнении", correct: true },
      { de: "die Versicherungspflicht", en: "the obligation to be insured", uk: "обовʼязок страхування", ru: "обязанность страхования" },
    ]
  },
  {
    id: "lid_288",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?", en: "What is Germany’s special responsibility for Israel based on?", uk: "На чому ґрунтується особлива відповідальність Німеччини перед Ізраїлем?", ru: "Чем обосновывается особая ответственность Германии перед Израилем?" },
    answers: [
      { de: "aus der Mitgliedschaft in der Europäischen Union (EU)", en: "on membership of the European Union (EU)", uk: "на членстві в Європейському Союзі (ЄС)", ru: "членством в Европейском союзе (ЕС)" },
      { de: "aus den nationalsozialistischen Verbrechen gegen Juden", en: "on the National Socialist crimes against Jews", uk: "на нацистських злочинах проти євреїв", ru: "национал-социалистическими преступлениями против евреев", correct: true },
      { de: "aus dem Grundgesetz der Bundesrepublik Deutschland", en: "on the Basic Law of the Federal Republic of Germany", uk: "на Основному законі Федеративної Республіки Німеччина", ru: "Основным законом Федеративной Республики Германия" },
      { de: "aus der christlichen Tradition", en: "on the Christian tradition", uk: "на християнській традиції", ru: "христианской традицией" },
    ]
  },
  {
    id: "lid_289",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …", en: "A man with dark skin applies for a job as a waiter in a restaurant in Germany. What is an example of discrimination? He does not get the job only because …", uk: "Чоловік із темним кольором шкіри подає заявку на посаду офіціанта в ресторані в Німеччині. Що є прикладом дискримінації? Він не отримує посаду лише тому, що …", ru: "Мужчина с тёмным цветом кожи подаёт заявку на должность официанта в ресторане в Германии. Что является примером дискриминации? Он не получает должность только потому, что …" },
    answers: [
      { de: "seine Deutschkenntnisse zu gering sind.", en: "his German language skills are too weak.", uk: "його знання німецької надто слабкі.", ru: "его знания немецкого слишком слабые." },
      { de: "er zu hohe Gehaltsvorstellungen hat.", en: "he has salary expectations that are too high.", uk: "він має надто високі очікування щодо зарплати.", ru: "у него слишком высокие требования к зарплате." },
      { de: "er eine dunkle Haut hat.", en: "he has dark skin.", uk: "він має темну шкіру.", ru: "у него тёмная кожа.", correct: true },
      { de: "er keine Erfahrungen im Beruf hat.", en: "he has no experience in the profession.", uk: "він не має досвіду в професії.", ru: "у него нет опыта в профессии." },
    ]
  },
  {
    id: "lid_290",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?", en: "You have bought a television in Germany. At home you unpack the television, but it does not work. The television is broken. What can you do?", uk: "Ви купили в Німеччині телевізор. Удома ви розпаковуєте його, але він не працює. Телевізор зламаний. Що ви можете зробити?", ru: "Вы купили в Германии телевизор. Дома вы распаковываете телевизор, но он не работает. Телевизор сломан. Что вы можете сделать?" },
    answers: [
      { de: "eine Anzeige schreiben", en: "file a criminal complaint", uk: "написати заяву в поліцію", ru: "написать заявление в полицию" },
      { de: "den Fernseher reklamieren", en: "make a complaint about the television (claim under warranty)", uk: "подати рекламацію щодо телевізора", ru: "предъявить претензию по поводу телевизора (рекламацию)", correct: true },
      { de: "das Gerät ungefragt austauschen", en: "exchange the device without asking", uk: "обміняти прилад самостійно", ru: "заменить устройство без согласования" },
      { de: "die Garantie verlängern", en: "extend the warranty", uk: "продовжити гарантію", ru: "продлить гарантию" },
    ]
  },
  {
    id: "lid_291",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …", en: "Why do you have to state on your tax return in Germany whether you belong to a church or not? Because …", uk: "Чому в Німеччині в податковій декларації потрібно вказувати, чи належиш ти до церкви? Тому що …", ru: "Почему в Германии в налоговой декларации нужно указывать, принадлежите ли вы к церкви? Потому что …" },
    answers: [
      { de: "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.", en: "there is a church tax that is tied to income tax and wage tax.", uk: "існує церковний податок, який привʼязаний до прибуткового податку та податку із заробітної плати.", ru: "существует церковный налог, привязанный к подоходному налогу и налогу с заработной платы.", correct: true },
      { de: "das für die Statistik in Deutschland wichtig ist.", en: "this is important for statistics in Germany.", uk: "це важливо для статистики в Німеччині.", ru: "это важно для статистики в Германии." },
      { de: "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.", en: "you have to pay more tax if you do not belong to a church.", uk: "доводиться платити більше податків, якщо не належиш до церкви.", ru: "нужно платить больше налогов, если не принадлежишь к церкви." },
      { de: "die Kirche für die Steuererklärung verantwortlich ist.", en: "the church is responsible for the tax return.", uk: "церква відповідає за податкову декларацію.", ru: "церковь отвечает за налоговую декларацию." },
    ]
  },
  {
    id: "lid_292",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?", en: "People in Germany live by the principle of religious tolerance. What does that mean?", uk: "Люди в Німеччині живуть за принципом релігійної толерантності. Що це означає?", ru: "Люди в Германии живут по принципу религиозной терпимости. Что это означает?" },
    answers: [
      { de: "Es dürfen keine Moscheen gebaut werden.", en: "No mosques may be built.", uk: "Не можна будувати мечеті.", ru: "Мечети строить нельзя." },
      { de: "Alle Menschen glauben an Gott.", en: "All people believe in God.", uk: "Усі люди вірять у Бога.", ru: "Все люди верят в Бога." },
      { de: "Jeder kann glauben, was er möchte.", en: "Everyone can believe what they want.", uk: "Кожен може вірити в те, у що хоче.", ru: "Каждый может верить, во что хочет.", correct: true },
      { de: "Der Staat entscheidet, an welchen Gott die Menschen glauben.", en: "The state decides which God people believe in.", uk: "Держава вирішує, у якого Бога вірять люди.", ru: "Государство решает, в какого Бога верят люди." },
    ]
  },
  {
    id: "lid_293",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Was ist in Deutschland ein Brauch zu Ostern?", en: "What is a custom at Easter in Germany?", uk: "Який звичай існує в Німеччині на Великдень?", ru: "Какой обычай существует в Германии на Пасху?" },
    answers: [
      { de: "Kürbisse vor die Tür stellen", en: "placing pumpkins in front of the door", uk: "ставити гарбузи перед дверима", ru: "выставлять тыквы перед дверью" },
      { de: "einen Tannenbaum schmücken", en: "decorating a fir tree", uk: "прикрашати ялинку", ru: "наряжать ель" },
      { de: "Eier bemalen", en: "painting eggs", uk: "розфарбовувати яйця", ru: "красить яйца", correct: true },
      { de: "Raketen in die Luft schießen", en: "shooting rockets into the air", uk: "запускати ракети в повітря", ru: "запускать ракеты в воздух" },
    ]
  },
  {
    id: "lid_294",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Pfingsten ist ein …", en: "Pentecost (Pfingsten) is a …", uk: "Пʼятидесятниця — це …", ru: "Троица (Pfingsten) — это …" },
    answers: [
      { de: "christlicher Feiertag.", en: "Christian holiday.", uk: "християнське свято.", ru: "христианский праздник.", correct: true },
      { de: "deutscher Gedenktag.", en: "German day of remembrance.", uk: "німецький день памʼяті.", ru: "германский день памяти." },
      { de: "internationaler Trauertag.", en: "international day of mourning.", uk: "міжнародний день жалоби.", ru: "международный день траура." },
      { de: "bayerischer Brauch.", en: "Bavarian custom.", uk: "баварський звичай.", ru: "баварский обычай." },
    ]
  },
  {
    id: "lid_295",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Welche Religion hat die europäische und deutsche Kultur geprägt?", en: "Which religion has shaped European and German culture?", uk: "Яка релігія сформувала європейську і німецьку культуру?", ru: "Какая религия сформировала европейскую и германскую культуру?" },
    answers: [
      { de: "der Hinduismus", en: "Hinduism", uk: "індуїзм", ru: "индуизм" },
      { de: "das Christentum", en: "Christianity", uk: "християнство", ru: "христианство", correct: true },
      { de: "der Buddhismus", en: "Buddhism", uk: "буддизм", ru: "буддизм" },
      { de: "der Islam", en: "Islam", uk: "іслам", ru: "ислам" },
    ]
  },
  {
    id: "lid_296",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …", en: "In Germany, the last four weeks before Christmas are called …", uk: "У Німеччині останні чотири тижні перед Різдвом називають …", ru: "В Германии последние четыре недели перед Рождеством называются …" },
    answers: [
      { de: "den Buß- und Bettag.", en: "the Day of Repentance and Prayer.", uk: "Днем покаяння і молитви.", ru: "День покаяния и молитвы." },
      { de: "das Erntedankfest.", en: "the harvest festival.", uk: "святом подяки за врожай.", ru: "праздник урожая." },
      { de: "die Adventszeit.", en: "Advent.", uk: "порою Адвенту.", ru: "Адвент.", correct: true },
      { de: "Allerheiligen.", en: "All Saints’ Day.", uk: "Днем усіх святих.", ru: "День всех святых." },
    ]
  },
  {
    id: "lid_297",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?", en: "From which country have most migrants come to Germany?", uk: "З якої країни до Німеччини приїхало найбільше мігрантів і мігранток?", ru: "Из какой страны в Германию приехало больше всего мигрантов?" },
    answers: [
      { de: "Italien", en: "Italy", uk: "Італія", ru: "Италия" },
      { de: "Polen", en: "Poland", uk: "Польща", ru: "Польша" },
      { de: "Marokko", en: "Morocco", uk: "Марокко", ru: "Марокко" },
      { de: "Türkei", en: "Turkey", uk: "Туреччина", ru: "Турция", correct: true },
    ]
  },
  {
    id: "lid_298",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "In der DDR lebten vor allem Migrantinnen und Migranten aus …", en: "In the GDR, migrants lived mainly from …", uk: "В НДР жили переважно мігранти та мігрантки з …", ru: "В ГДР жили главным образом мигранты из …" },
    answers: [
      { de: "Vietnam, Polen, Mosambik.", en: "Vietnam, Poland, Mozambique.", uk: "Вʼєтнаму, Польщі, Мозамбіку.", ru: "Вьетнама, Польши, Мозамбика.", correct: true },
      { de: "Frankreich, Rumänien, Somalia.", en: "France, Romania, Somalia.", uk: "Франції, Румунії, Сомалі.", ru: "Франции, Румынии, Сомали." },
      { de: "Chile, Ungarn, Simbabwe.", en: "Chile, Hungary, Zimbabwe.", uk: "Чилі, Угорщини, Зімбабве.", ru: "Чили, Венгрии, Зимбабве." },
      { de: "Nordkorea, Mexiko, Ägypten.", en: "North Korea, Mexico, Egypt.", uk: "Північної Кореї, Мексики, Єгипту.", ru: "Северной Кореи, Мексики, Египта." },
    ]
  },
  {
    id: "lid_299",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …", en: "Foreign workers who were recruited by the Federal Republic of Germany in the 1950s and 1960s were called …", uk: "Іноземних працівників і працівниць, яких у 50-х і 60-х роках залучала Федеративна Республіка Німеччина, називали …", ru: "Иностранных работников, которых Федеративная Республика Германия приглашала в 1950-х и 1960-х годах, называли …" },
    answers: [
      { de: "Schwarzarbeiterinnen/Schwarzarbeiter.", en: "undeclared workers (Schwarzarbeiter).", uk: "нелегальними працівниками.", ru: "нелегальными работниками (Schwarzarbeiter)." },
      { de: "Gastarbeiterinnen/Gastarbeiter.", en: "guest workers (Gastarbeiter).", uk: "гастарбайтерами/гастарбайтерками.", ru: "гастарбайтерами (Gastarbeiter, «приглашёнными рабочими»).", correct: true },
      { de: "Zeitarbeiterinnen/Zeitarbeiter.", en: "temporary agency workers.", uk: "тимчасовими працівниками.", ru: "временными работниками." },
      { de: "Schichtarbeiterinnen/Schichtarbeiter.", en: "shift workers.", uk: "позмінними працівниками.", ru: "посменными работниками." },
    ]
  },
  {
    id: "lid_300",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?", en: "From which country did the first guest workers come to the Federal Republic of Germany?", uk: "З якої країни приїхали до Федеративної Республіки Німеччина перші гастарбайтери та гастарбайтерки?", ru: "Из какой страны в Федеративную Республику Германия приехали первые гастарбайтеры?" },
    answers: [
      { de: "Italien", en: "Italy", uk: "Італія", ru: "Италия", correct: true },
      { de: "Spanien", en: "Spain", uk: "Іспанія", ru: "Испания" },
      { de: "Portugal", en: "Portugal", uk: "Португалія", ru: "Португалия" },
      { de: "Türkei", en: "Turkey", uk: "Туреччина", ru: "Турция" },
    ]
  },
  {
    id: "lid_BW_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welches Wappen gehört zum Bundesland Baden-Württemberg?", en: "Which coat of arms belongs to the federal state of Baden-Württemberg?", uk: "Який герб належить федеральній землі Баден-Вюртемберг?", ru: "Какой герб принадлежит федеральной земле Баден-Вюртемберг?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_BW_01_a1.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_BW_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BW_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BW_01_a4.png" },
    ]
  },
  {
    id: "lid_BW_02",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welches ist ein Landkreis in Baden-Württemberg?", en: "Which of these is a rural district in Baden-Württemberg?", uk: "Який з наведених є округом у Баден-Вюртемберзі?", ru: "Какой из этих районов (Landkreis) находится в Баден-Вюртемберге?" },
    answers: [
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье" },
      { de: "Neckar-Odenwald-Kreis", en: "Neckar-Odenwald district", uk: "Некар-Оденвальд", ru: "район Неккар-Оденвальд", correct: true },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
    ]
  },
  {
    id: "lid_BW_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?", en: "For how many years is the Landtag (state parliament) elected in Baden-Württemberg?", uk: "На скільки років обирають ландтаг у Баден-Вюртемберзі?", ru: "На сколько лет избирается ландтаг в Баден-Вюртемберге?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_BW_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Baden-Württemberg?", uk: "З якого віку можна голосувати на муніципальних виборах у Баден-Вюртемберзі?", ru: "С какого возраста можно голосовать на коммунальных выборах в Баден-Вюртемберге?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_BW_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welche Farben hat die Landesflagge von Baden-Württemberg?", en: "What colours does the state flag of Baden-Württemberg have?", uk: "Які кольори має прапор землі Баден-Вюртемберг?", ru: "Какие цвета у флага земли Баден-Вюртемберг?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой", correct: true },
      { de: "weiß-blau", en: "white-blue", uk: "біло-синій", ru: "бело-синий" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
    ]
  },
  {
    id: "lid_BW_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Wo können Sie sich in Baden-Württemberg über politische Themen informieren?", en: "Where can you find out about political topics in Baden-Württemberg?", uk: "Де в Баден-Вюртемберзі можна отримати інформацію про політичні теми?", ru: "Где в Баден-Вюртемберге можно получить информацию о политических темах?" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
    ]
  },
  {
    id: "lid_BW_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Die Landeshauptstadt von Baden-Württemberg heißt …", en: "The state capital of Baden-Württemberg is called …", uk: "Столиця землі Баден-Вюртемберг називається …", ru: "Столица земли Баден-Вюртемберг называется …" },
    answers: [
      { de: "Heidelberg.", en: "Heidelberg.", uk: "Гайдельберг.", ru: "Гейдельберг." },
      { de: "Stuttgart.", en: "Stuttgart.", uk: "Штутгарт.", ru: "Штутгарт.", correct: true },
      { de: "Karlsruhe.", en: "Karlsruhe.", uk: "Карлсруе.", ru: "Карлсруэ." },
      { de: "Mannheim.", en: "Mannheim.", uk: "Мангайм.", ru: "Мангейм." },
    ]
  },
  {
    id: "lid_BW_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    img: "lid_BW_08.png",
    question: { de: "Welches Bundesland ist Baden-Württemberg?", en: "Which federal state is Baden-Württemberg?", uk: "Яка федеральна земля на карті — Баден-Вюртемберг?", ru: "Какая федеральная земля — Баден-Вюртемберг?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2", correct: true },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_BW_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Baden-Württemberg?", en: "What is the head of government in Baden-Württemberg called?", uk: "Як називають главу уряду в Баден-Вюртемберзі?", ru: "Как называется глава правительства в Баден-Вюртемберге?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_BW_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welche Ministerin/welchen Minister hat Baden-Württemberg nicht?", en: "Which minister does Baden-Württemberg not have?", uk: "Якого міністра/якої міністерки немає в Баден-Вюртемберзі?", ru: "Какого министра в Баден-Вюртемберге нет?" },
    answers: [
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
    ]
  },
  {
    id: "lid_BY_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welches Wappen gehört zum Freistaat Bayern?", en: "Which coat of arms belongs to the Free State of Bavaria?", uk: "Який герб належить Вільній державі Баварія?", ru: "Какой герб принадлежит Свободному государству Бавария?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_BY_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BY_01_a2.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_BY_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BY_01_a4.png" },
    ]
  },
  {
    id: "lid_BY_02",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welches ist ein Landkreis in Bayern?", en: "Which of these is a rural district in Bavaria?", uk: "Який з наведених є округом у Баварії?", ru: "Какой из этих районов (Landkreis) находится в Баварии?" },
    answers: [
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг", correct: true },
    ]
  },
  {
    id: "lid_BY_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Für wie viele Jahre wird der Landtag in Bayern gewählt?", en: "For how many years is the Landtag (state parliament) elected in Bavaria?", uk: "На скільки років обирають ландтаг у Баварії?", ru: "На сколько лет избирается ландтаг в Баварии?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_BY_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Bavaria?", uk: "З якого віку можна голосувати на муніципальних виборах у Баварії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Баварии?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_BY_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welche Farben hat die Landesflagge von Bayern?", en: "What colours does the state flag of Bavaria have?", uk: "Які кольори має прапор землі Баварія?", ru: "Какие цвета у флага земли Бавария?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "weiß-blau", en: "white-blue", uk: "біло-синій", ru: "бело-синий", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
    ]
  },
  {
    id: "lid_BY_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Wo können Sie sich in Bayern über politische Themen informieren?", en: "Where can you find out about political topics in Bavaria?", uk: "Де в Баварії можна отримати інформацію про політичні теми?", ru: "Где в Баварии можно получить информацию о политических темах?" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
    ]
  },
  {
    id: "lid_BY_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Die Landeshauptstadt von Bayern heißt …", en: "The state capital of Bavaria is called …", uk: "Столиця землі Баварія називається …", ru: "Столица земли Бавария называется …" },
    answers: [
      { de: "Ingolstadt.", en: "Ingolstadt.", uk: "Інгольштадт.", ru: "Ингольштадт." },
      { de: "Regensburg.", en: "Regensburg.", uk: "Регенсбург.", ru: "Регенсбург." },
      { de: "Nürnberg.", en: "Nuremberg.", uk: "Нюрнберг.", ru: "Нюрнберг." },
      { de: "München.", en: "Munich.", uk: "Мюнхен.", ru: "Мюнхен.", correct: true },
    ]
  },
  {
    id: "lid_BY_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    img: "lid_BY_08.png",
    question: { de: "Welches Bundesland ist Bayern?", en: "Which federal state is Bavaria?", uk: "Яка федеральна земля на карті — Баварія?", ru: "Какая федеральная земля — Бавария?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4", correct: true },
    ]
  },
  {
    id: "lid_BY_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Bayern?", en: "What is the head of government in Bavaria called?", uk: "Як називають главу уряду в Баварії?", ru: "Как называется глава правительства в Баварии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_BY_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welche Ministerin/welchen Minister hat Bayern nicht?", en: "Which minister does Bavaria not have?", uk: "Якого міністра/якої міністерки немає в Баварії?", ru: "Какого министра в Баварии нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_BE_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welches Wappen gehört zum Bundesland Berlin?", en: "Which coat of arms belongs to the federal state of Berlin?", uk: "Який герб належить федеральній землі Берлін?", ru: "Какой герб принадлежит федеральной земле Берлин?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_BE_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BE_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BE_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BE_01_a4.png", correct: true },
    ]
  },
  {
    id: "lid_BE_02",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welches ist ein Bezirk von Berlin?", en: "Which of these is a borough (Bezirk) of Berlin?", uk: "Який з наведених є районом Берліна?", ru: "Какой из этих районов — округ (Bezirk) Берлина?" },
    answers: [
      { de: "Altona", en: "Altona", uk: "Альтона", ru: "Альтона" },
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц" },
      { de: "Pankow", en: "Pankow", uk: "Панков", ru: "Панков", correct: true },
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье" },
    ]
  },
  {
    id: "lid_BE_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?", en: "For how many years is the state parliament elected in Berlin?", uk: "На скільки років обирають земельний парламент у Берліні?", ru: "На сколько лет избирается парламент земли в Берлине?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_BE_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?", en: "From what age may one vote in local elections in Berlin (election of the borough assembly, Bezirksverordnetenversammlung)?", uk: "З якого віку можна голосувати на муніципальних виборах у Берліні (вибори до зборів районних депутатів)?", ru: "С какого возраста можно голосовать на коммунальных выборах в Берлине (выборы в собрание депутатов округа, Bezirksverordnetenversammlung)?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_BE_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welche Farben hat die Landesflagge von Berlin?", en: "What colours does the state flag of Berlin have?", uk: "Які кольори має прапор землі Берлін?", ru: "Какие цвета у флага земли Берлин?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой" },
    ]
  },
  {
    id: "lid_BE_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Wo können Sie sich in Berlin über politische Themen informieren?", en: "Where can you find out about political topics in Berlin?", uk: "Де в Берліні можна отримати інформацію про політичні теми?", ru: "Где в Берлине можно получить информацию о политических темах?" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
    ]
  },
  {
    id: "lid_BE_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welches Bundesland ist ein Stadtstaat?", en: "Which federal state is a city-state?", uk: "Яка федеральна земля є містом-державою?", ru: "Какая федеральная земля является городом-государством?" },
    answers: [
      { de: "Berlin", en: "Berlin", uk: "Берлін", ru: "Берлин", correct: true },
      { de: "Saarland", en: "Saarland", uk: "Саар", ru: "Саар" },
      { de: "Brandenburg", en: "Brandenburg", uk: "Бранденбург", ru: "Бранденбург" },
      { de: "Hessen", en: "Hesse", uk: "Гессен", ru: "Гессен" },
    ]
  },
  {
    id: "lid_BE_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    img: "lid_BE_08.png",
    question: { de: "Welches Bundesland ist Berlin?", en: "Which federal state is Berlin?", uk: "Яка федеральна земля на карті — Берлін?", ru: "Какая федеральная земля — Берлин?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4", correct: true },
    ]
  },
  {
    id: "lid_BE_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Berlin?", en: "What is the head of government of the city-state of Berlin called?", uk: "Як називають главу уряду міста-держави Берлін?", ru: "Как называется глава правительства города-государства Берлин?" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President", uk: "міністр-президент/міністр-президентка", ru: "министр-президент" },
      { de: "Oberbürgermeisterin/Oberbürgermeister", en: "Lord Mayor (Oberbürgermeister)", uk: "головний бургомістр/головна бургомістерка", ru: "обер-бургомистр (Oberbürgermeister)" },
      { de: "Präsidentin/Präsident des Senates", en: "President of the Senate", uk: "президент/президентка сенату", ru: "президент сената" },
      { de: "Regierende Bürgermeisterin/Regierender Bürgermeister", en: "Governing Mayor (Regierender Bürgermeister)", uk: "правлячий бургомістр/правляча бургомістерка", ru: "правящий бургомистр (Regierender Bürgermeister)", correct: true },
    ]
  },
  {
    id: "lid_BE_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welche Senatorin/welchen Senator hat Berlin nicht?", en: "Which senator does Berlin not have?", uk: "Якого сенатора/якої сенаторки немає в Берліні?", ru: "Какого сенатора в Берлине нет?" },
    answers: [
      { de: "Finanzsenatorin/Finanzsenator", en: "Senator for Finance", uk: "сенатор/сенаторка з питань фінансів", ru: "сенатора по финансам" },
      { de: "Innensenatorin/Innensenator", en: "Senator for the Interior", uk: "сенатор/сенаторка з внутрішніх справ", ru: "сенатора по внутренним делам" },
      { de: "Senatorin/Senator für Außenbeziehungen", en: "Senator for Foreign Relations", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "сенатора по внешним связям", correct: true },
      { de: "Justizsenatorin/Justizsenator", en: "Senator for Justice", uk: "сенатор/сенаторка з питань юстиції", ru: "сенатора по юстиции" },
    ]
  },
  {
    id: "lid_BB_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welches Wappen gehört zum Bundesland Brandenburg?", en: "Which coat of arms belongs to the federal state of Brandenburg?", uk: "Який герб належить федеральній землі Бранденбург?", ru: "Какой герб принадлежит федеральной земле Бранденбург?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_BB_01_a1.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_BB_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BB_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_BB_01_a4.png" },
    ]
  },
  {
    id: "lid_BB_02",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welches ist ein Landkreis in Brandenburg?", en: "Which of these is a rural district in Brandenburg?", uk: "Який з наведених є округом у Бранденбурзі?", ru: "Какой из этих районов (Landkreis) находится в Бранденбурге?" },
    answers: [
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
      { de: "Vogtlandkreis", en: "Vogtland district", uk: "Фогтланд", ru: "Фогтландский район" },
      { de: "Amberg-Sulzbach", en: "Amberg-Sulzbach", uk: "Амберг-Зульцбах", ru: "Амберг-Зульцбах" },
    ]
  },
  {
    id: "lid_BB_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Für wie viele Jahre wird der Landtag in Brandenburg gewählt?", en: "For how many years is the Landtag (state parliament) elected in Brandenburg?", uk: "На скільки років обирають ландтаг у Бранденбурзі?", ru: "На сколько лет избирается ландтаг в Бранденбурге?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_BB_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Brandenburg?", uk: "З якого віку можна голосувати на муніципальних виборах у Бранденбурзі?", ru: "С какого возраста можно голосовать на коммунальных выборах в Бранденбурге?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_BB_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welche Farben hat die Landesflagge von Brandenburg?", en: "What colours does the state flag of Brandenburg have?", uk: "Які кольори має прапор землі Бранденбург?", ru: "Какие цвета у флага земли Бранденбург?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "rot-weiß", en: "red-white", uk: "червоно-білий", ru: "красно-белый", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
    ]
  },
  {
    id: "lid_BB_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Wo können Sie sich in Brandenburg über politische Themen informieren?", en: "Where can you find out about political topics in Brandenburg?", uk: "Де в Бранденбурзі можна отримати інформацію про політичні теми?", ru: "Где в Бранденбурге можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
    ]
  },
  {
    id: "lid_BB_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Die Landeshauptstadt von Brandenburg heißt …", en: "The state capital of Brandenburg is called …", uk: "Столиця землі Бранденбург називається …", ru: "Столица земли Бранденбург называется …" },
    answers: [
      { de: "Potsdam.", en: "Potsdam.", uk: "Потсдам.", ru: "Потсдам.", correct: true },
      { de: "Cottbus.", en: "Cottbus.", uk: "Котбус.", ru: "Котбус." },
      { de: "Brandenburg.", en: "Brandenburg.", uk: "Бранденбург.", ru: "Бранденбург." },
      { de: "Frankfurt/Oder.", en: "Frankfurt (Oder).", uk: "Франкфурт-на-Одері.", ru: "Франкфурт-на-Одере." },
    ]
  },
  {
    id: "lid_BB_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    img: "lid_BB_08.png",
    question: { de: "Welches Bundesland ist Brandenburg?", en: "Which federal state is Brandenburg?", uk: "Яка федеральна земля на карті — Бранденбург?", ru: "Какая федеральная земля — Бранденбург?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4", correct: true },
    ]
  },
  {
    id: "lid_BB_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Brandenburg?", en: "What is the head of government in Brandenburg called?", uk: "Як називають главу уряду в Бранденбурзі?", ru: "Как называется глава правительства в Бранденбурге?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_BB_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welche Ministerin/welchen Minister hat Brandenburg nicht?", en: "Which minister does Brandenburg not have?", uk: "Якого міністра/якої міністерки немає в Бранденбурзі?", ru: "Какого министра в Бранденбурге нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_HB_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welches Wappen gehört zur Freien Hansestadt Bremen?", en: "Which coat of arms belongs to the Free Hanseatic City of Bremen?", uk: "Який герб належить Вільному ганзейському місту Бремен?", ru: "Какой герб принадлежит Вольному ганзейскому городу Бремен?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_HB_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HB_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HB_01_a3.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_HB_01_a4.png" },
    ]
  },
  {
    id: "lid_HB_02",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welches ist ein Stadtteil von Bremen?", en: "Which of these is a district (Stadtteil) of Bremen?", uk: "Який з наведених є міським районом Бремена?", ru: "Какой из этих районов — городской район (Stadtteil) Бремена?" },
    answers: [
      { de: "Altona", en: "Altona", uk: "Альтона", ru: "Альтона" },
      { de: "Hemelingen", en: "Hemelingen", uk: "Гемелінген", ru: "Хемелинген", correct: true },
      { de: "Pankow", en: "Pankow", uk: "Панков", ru: "Панков" },
      { de: "Babelsberg", en: "Babelsberg", uk: "Бабельсберг", ru: "Бабельсберг" },
    ]
  },
  {
    id: "lid_HB_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Bremen gewählt?", en: "For how many years is the state parliament elected in Bremen?", uk: "На скільки років обирають земельний парламент у Бремені?", ru: "На сколько лет избирается парламент земли в Бремене?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_HB_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Ab welchem Alter darf man in Bremen bei den Wahlen zur Bürgerschaft (Landtag) wählen?", en: "From what age may one vote in the elections to the Bürgerschaft (state parliament) in Bremen?", uk: "З якого віку можна голосувати на виборах до Бюргершафту (ландтагу) у Бремені?", ru: "С какого возраста можно голосовать на выборах в Бюргершафт (парламент земли) в Бремене?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_HB_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welche Farben hat die Landesflagge von Bremen?", en: "What colours does the state flag of Bremen have?", uk: "Які кольори має прапор землі Бремен?", ru: "Какие цвета у флага земли Бремен?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "rot-weiß", en: "red-white", uk: "червоно-білий", ru: "красно-белый", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой" },
    ]
  },
  {
    id: "lid_HB_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Wo können Sie sich in Bremen über politische Themen informieren?", en: "Where can you find out about political topics in Bremen?", uk: "Де в Бремені можна отримати інформацію про політичні теми?", ru: "Где в Бремене можно получить информацию о политических темах?" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
    ]
  },
  {
    id: "lid_HB_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Was ist ein deutscher Stadtstaat?", en: "Which of these is a German city-state?", uk: "Що з наведеного є німецьким містом-державою?", ru: "Что является германским городом-государством?" },
    answers: [
      { de: "Bremen", en: "Bremen", uk: "Бремен", ru: "Бремен", correct: true },
      { de: "München", en: "Munich", uk: "Мюнхен", ru: "Мюнхен" },
      { de: "Frankfurt", en: "Frankfurt", uk: "Франкфурт", ru: "Франкфурт" },
      { de: "Erfurt", en: "Erfurt", uk: "Ерфурт", ru: "Эрфурт" },
    ]
  },
  {
    id: "lid_HB_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    img: "lid_HB_08.png",
    question: { de: "Welches Bundesland ist Bremen?", en: "Which federal state is Bremen?", uk: "Яка федеральна земля на карті — Бремен?", ru: "Какая федеральная земля — Бремен?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1", correct: true },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_HB_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Bremen?", en: "What is the head of government of the city-state of Bremen called?", uk: "Як називають главу уряду міста-держави Бремен?", ru: "Как называется глава правительства города-государства Бремен?" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President", uk: "міністр-президент/міністр-президентка", ru: "министр-президент" },
      { de: "Erste Bürgermeisterin/Erster Bürgermeister", en: "First Mayor (Erster Bürgermeister)", uk: "перший бургомістр/перша бургомістерка", ru: "первый бургомистр (Erster Bürgermeister)", correct: true },
      { de: "Präsidentin/Präsident des Senates", en: "President of the Senate", uk: "президент/президентка сенату", ru: "президент сената" },
      { de: "Regierende Bürgermeisterin/Regierender Bürgermeister", en: "Governing Mayor", uk: "правлячий бургомістр/правляча бургомістерка", ru: "правящий бургомистр" },
    ]
  },
  {
    id: "lid_HB_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welche Senatorin/welchen Senator hat Bremen nicht?", en: "Which senator does Bremen not have?", uk: "Якого сенатора/якої сенаторки немає в Бремені?", ru: "Какого сенатора в Бремене нет?" },
    answers: [
      { de: "Senatorin/Senator für Außenbeziehungen", en: "Senator for Foreign Relations", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "сенатора по внешним связям", correct: true },
      { de: "Finanzsenatorin/Finanzsenator", en: "Senator for Finance", uk: "сенатор/сенаторка з питань фінансів", ru: "сенатора по финансам" },
      { de: "Justizsenatorin/Justizsenator", en: "Senator for Justice", uk: "сенатор/сенаторка з питань юстиції", ru: "сенатора по юстиции" },
      { de: "Innensenatorin/Innensenator", en: "Senator for the Interior", uk: "сенатор/сенаторка з внутрішніх справ", ru: "сенатора по внутренним делам" },
    ]
  },
  {
    id: "lid_HH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welches Wappen gehört zur Freien und Hansestadt Hamburg?", en: "Which coat of arms belongs to the Free and Hanseatic City of Hamburg?", uk: "Який герб належить Вільному і ганзейському місту Гамбург?", ru: "Какой герб принадлежит Вольному и ганзейскому городу Гамбург?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_HH_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HH_01_a2.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_HH_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HH_01_a4.png" },
    ]
  },
  {
    id: "lid_HH_02",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welches ist ein Bezirk von Hamburg?", en: "Which of these is a borough (Bezirk) of Hamburg?", uk: "Який з наведених є районом Гамбурга?", ru: "Какой из этих районов — округ (Bezirk) Гамбурга?" },
    answers: [
      { de: "Altona", en: "Altona", uk: "Альтона", ru: "Альтона", correct: true },
      { de: "Hemelingen", en: "Hemelingen", uk: "Гемелінген", ru: "Хемелинген" },
      { de: "Pankow", en: "Pankow", uk: "Панков", ru: "Панков" },
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье" },
    ]
  },
  {
    id: "lid_HH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?", en: "For how many years is the state parliament elected in Hamburg?", uk: "На скільки років обирають земельний парламент у Гамбурзі?", ru: "На сколько лет избирается парламент земли в Гамбурге?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_HH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (Wahl der Bezirksversammlungen) wählen?", en: "From what age may one vote in local elections in Hamburg (election of the borough assemblies, Bezirksversammlungen)?", uk: "З якого віку можна голосувати на муніципальних виборах у Гамбурзі (вибори до районних зборів)?", ru: "С какого возраста можно голосовать на коммунальных выборах в Гамбурге (выборы в собрания округов, Bezirksversammlungen)?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_HH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welche Farben hat die Landesflagge von Hamburg?", en: "What colours does the state flag of Hamburg have?", uk: "Які кольори має прапор землі Гамбург?", ru: "Какие цвета у флага земли Гамбург?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
    ]
  },
  {
    id: "lid_HH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Wo können Sie sich in Hamburg über politische Themen informieren?", en: "Where can you find out about political topics in Hamburg?", uk: "Де в Гамбурзі можна отримати інформацію про політичні теми?", ru: "Где в Гамбурге можно получить информацию о политических темах?" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
    ]
  },
  {
    id: "lid_HH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welches Bundesland ist ein Stadtstaat?", en: "Which federal state is a city-state?", uk: "Яка федеральна земля є містом-державою?", ru: "Какая федеральная земля является городом-государством?" },
    answers: [
      { de: "Hamburg", en: "Hamburg", uk: "Гамбург", ru: "Гамбург", correct: true },
      { de: "Sachsen", en: "Saxony", uk: "Саксонія", ru: "Саксония" },
      { de: "Bayern", en: "Bavaria", uk: "Баварія", ru: "Бавария" },
      { de: "Thüringen", en: "Thuringia", uk: "Тюрингія", ru: "Тюрингия" },
    ]
  },
  {
    id: "lid_HH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    img: "lid_HH_08.png",
    question: { de: "Welches Bundesland ist Hamburg?", en: "Which federal state is Hamburg?", uk: "Яка федеральна земля на карті — Гамбург?", ru: "Какая федеральная земля — Гамбург?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3", correct: true },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_HH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Hamburg?", en: "What is the head of government of the city-state of Hamburg called?", uk: "Як називають главу уряду міста-держави Гамбург?", ru: "Как называется глава правительства города-государства Гамбург?" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President", uk: "міністр-президент/міністр-президентка", ru: "министр-президент" },
      { de: "Erste Bürgermeisterin/Erster Bürgermeister", en: "First Mayor (Erster Bürgermeister)", uk: "перший бургомістр/перша бургомістерка", ru: "первый бургомистр (Erster Bürgermeister)", correct: true },
      { de: "Regierende Senatorin/Regierender Senator", en: "Governing Senator", uk: "правлячий сенатор/правляча сенаторка", ru: "правящий сенатор" },
      { de: "Oberbürgermeisterin/Oberbürgermeister", en: "Lord Mayor (Oberbürgermeister)", uk: "головний бургомістр/головна бургомістерка", ru: "обер-бургомистр (Oberbürgermeister)" },
    ]
  },
  {
    id: "lid_HH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welche Senatorin/welchen Senator hat Hamburg nicht?", en: "Which senator does Hamburg not have?", uk: "Якого сенатора/якої сенаторки немає в Гамбурзі?", ru: "Какого сенатора в Гамбурге нет?" },
    answers: [
      { de: "Justizsenatorin/Justizsenator", en: "Senator for Justice", uk: "сенатор/сенаторка з питань юстиції", ru: "сенатора по юстиции" },
      { de: "Senatorin/Senator für Außenbeziehungen", en: "Senator for Foreign Relations", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "сенатора по внешним связям", correct: true },
      { de: "Finanzsenatorin/Finanzsenator", en: "Senator for Finance", uk: "сенатор/сенаторка з питань фінансів", ru: "сенатора по финансам" },
      { de: "Innensenatorin/Innensenator", en: "Senator for the Interior", uk: "сенатор/сенаторка з внутрішніх справ", ru: "сенатора по внутренним делам" },
    ]
  },
  {
    id: "lid_HE_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welches Wappen gehört zum Bundesland Hessen?", en: "Which coat of arms belongs to the federal state of Hesse?", uk: "Який герб належить федеральній землі Гессен?", ru: "Какой герб принадлежит федеральной земле Гессен?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_HE_01_a1.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_HE_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HE_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_HE_01_a4.png" },
    ]
  },
  {
    id: "lid_HE_02",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welches ist ein Landkreis in Hessen?", en: "Which of these is a rural district in Hesse?", uk: "Який з наведених є округом у Гессені?", ru: "Какой из этих районов (Landkreis) находится в Гессене?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц" },
      { de: "Main-Taunus-Kreis", en: "Main-Taunus district", uk: "Майн-Таунус", ru: "район Майн-Таунус", correct: true },
    ]
  },
  {
    id: "lid_HE_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Für wie viele Jahre wird der Landtag in Hessen gewählt?", en: "For how many years is the Landtag (state parliament) elected in Hesse?", uk: "На скільки років обирають ландтаг у Гессені?", ru: "На сколько лет избирается ландтаг в Гессене?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_HE_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Ab welchem Alter darf man in Hessen bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Hesse?", uk: "З якого віку можна голосувати на муніципальних виборах у Гессені?", ru: "С какого возраста можно голосовать на коммунальных выборах в Гессене?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_HE_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welche Farben hat die Landesflagge von Hessen?", en: "What colours does the state flag of Hesse have?", uk: "Які кольори має прапор землі Гессен?", ru: "Какие цвета у флага земли Гессен?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "rot-weiß", en: "red-white", uk: "червоно-білий", ru: "красно-белый", correct: true },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
    ]
  },
  {
    id: "lid_HE_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Wo können Sie sich in Hessen über politische Themen informieren?", en: "Where can you find out about political topics in Hesse?", uk: "Де в Гессені можна отримати інформацію про політичні теми?", ru: "Где в Гессене можно получить информацию о политических темах?" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
    ]
  },
  {
    id: "lid_HE_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Die Landeshauptstadt von Hessen heißt …", en: "The state capital of Hesse is called …", uk: "Столиця землі Гессен називається …", ru: "Столица земли Гессен называется …" },
    answers: [
      { de: "Kassel.", en: "Kassel.", uk: "Кассель.", ru: "Кассель." },
      { de: "Darmstadt.", en: "Darmstadt.", uk: "Дармштадт.", ru: "Дармштадт." },
      { de: "Frankfurt.", en: "Frankfurt.", uk: "Франкфурт.", ru: "Франкфурт." },
      { de: "Wiesbaden.", en: "Wiesbaden.", uk: "Вісбаден.", ru: "Висбаден.", correct: true },
    ]
  },
  {
    id: "lid_HE_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    img: "lid_HE_08.png",
    question: { de: "Welches Bundesland ist Hessen?", en: "Which federal state is Hesse?", uk: "Яка федеральна земля на карті — Гессен?", ru: "Какая федеральная земля — Гессен?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3", correct: true },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_HE_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Hessen?", en: "What is the head of government in Hesse called?", uk: "Як називають главу уряду в Гессені?", ru: "Как называется глава правительства в Гессене?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_HE_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welche Ministerin/welchen Minister hat Hessen nicht?", en: "Which minister does Hesse not have?", uk: "Якого міністра/якої міністерки немає в Гессені?", ru: "Какого министра в Гессене нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_MV_01",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?", en: "Which coat of arms belongs to the federal state of Mecklenburg-Western Pomerania?", uk: "Який герб належить федеральній землі Мекленбург-Передня Померанія?", ru: "Какой герб принадлежит федеральной земле Мекленбург-Передняя Померания?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_MV_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_MV_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_MV_01_a3.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_MV_01_a4.png" },
    ]
  },
  {
    id: "lid_MV_02",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welches ist ein Landkreis in Mecklenburg-Vorpommern?", en: "Which of these is a rural district in Mecklenburg-Western Pomerania?", uk: "Який з наведених є округом у Мекленбург-Передній Померанії?", ru: "Какой из этих районов (Landkreis) находится в Мекленбурге-Передней Померании?" },
    answers: [
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц" },
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье", correct: true },
      { de: "Vogtlandkreis", en: "Vogtland district", uk: "Фогтланд", ru: "Фогтландский район" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
    ]
  },
  {
    id: "lid_MV_03",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Für wie viele Jahre wird der Landtag in Mecklenburg-Vorpommern gewählt?", en: "For how many years is the Landtag (state parliament) elected in Mecklenburg-Western Pomerania?", uk: "На скільки років обирають ландтаг у Мекленбург-Передній Померанії?", ru: "На сколько лет избирается ландтаг в Мекленбурге-Передней Померании?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_MV_04",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Mecklenburg-Western Pomerania?", uk: "З якого віку можна голосувати на муніципальних виборах у Мекленбург-Передній Померанії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Мекленбурге-Передней Померании?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_MV_05",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?", en: "What colours does the state flag of Mecklenburg-Western Pomerania have?", uk: "Які кольори має прапор землі Мекленбург-Передня Померанія?", ru: "Какие цвета у флага земли Мекленбург-Передняя Померания?" },
    answers: [
      { de: "schwarz-rot-gold", en: "black-red-gold", uk: "чорно-червоно-золотий", ru: "чёрно-красно-золотой" },
      { de: "blau-weiß-gelb-rot", en: "blue-white-yellow-red", uk: "синьо-біло-жовто-червоний", ru: "сине-бело-жёлто-красный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
    ]
  },
  {
    id: "lid_MV_06",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?", en: "Where can you find out about political topics in Mecklenburg-Western Pomerania?", uk: "Де в Мекленбург-Передній Померанії можна отримати інформацію про політичні теми?", ru: "Где в Мекленбурге-Передней Померании можно получить информацию о политических темах?" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
    ]
  },
  {
    id: "lid_MV_07",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Die Landeshauptstadt von Mecklenburg-Vorpommern heißt …", en: "The state capital of Mecklenburg-Western Pomerania is called …", uk: "Столиця землі Мекленбург-Передня Померанія називається …", ru: "Столица земли Мекленбург-Передняя Померания называется …" },
    answers: [
      { de: "Greifswald.", en: "Greifswald.", uk: "Грайфсвальд.", ru: "Грайфсвальд." },
      { de: "Schwerin.", en: "Schwerin.", uk: "Шверін.", ru: "Шверин.", correct: true },
      { de: "Rostock.", en: "Rostock.", uk: "Росток.", ru: "Росток." },
      { de: "Wismar.", en: "Wismar.", uk: "Вісмар.", ru: "Висмар." },
    ]
  },
  {
    id: "lid_MV_08",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    img: "lid_MV_08.png",
    question: { de: "Welches Bundesland ist Mecklenburg-Vorpommern?", en: "Which federal state is Mecklenburg-Western Pomerania?", uk: "Яка федеральна земля на карті — Мекленбург-Передня Померанія?", ru: "Какая федеральная земля — Мекленбург-Передняя Померания?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3", correct: true },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_MV_09",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Mecklenburg-Vorpommern?", en: "What is the head of government in Mecklenburg-Western Pomerania called?", uk: "Як називають главу уряду в Мекленбург-Передній Померанії?", ru: "Как называется глава правительства в Мекленбурге-Передней Померании?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_MV_10",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welche Ministerin/welchen Minister hat Mecklenburg-Vorpommern nicht?", en: "Which minister does Mecklenburg-Western Pomerania not have?", uk: "Якого міністра/якої міністерки немає в Мекленбург-Передній Померанії?", ru: "Какого министра в Мекленбурге-Передней Померании нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_NI_01",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welches Wappen gehört zum Bundesland Niedersachsen?", en: "Which coat of arms belongs to the federal state of Lower Saxony?", uk: "Який герб належить федеральній землі Нижня Саксонія?", ru: "Какой герб принадлежит федеральной земле Нижняя Саксония?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_NI_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_NI_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_NI_01_a3.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_NI_01_a4.png" },
    ]
  },
  {
    id: "lid_NI_02",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welches ist ein Landkreis in Niedersachsen?", en: "Which of these is a rural district in Lower Saxony?", uk: "Який з наведених є округом у Нижній Саксонії?", ru: "Какой из этих районов (Landkreis) находится в Нижней Саксонии?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
      { de: "Vogtlandkreis", en: "Vogtland district", uk: "Фогтланд", ru: "Фогтландский район" },
    ]
  },
  {
    id: "lid_NI_03",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Für wie viele Jahre wird der Landtag in Niedersachsen gewählt?", en: "For how many years is the Landtag (state parliament) elected in Lower Saxony?", uk: "На скільки років обирають ландтаг у Нижній Саксонії?", ru: "На сколько лет избирается ландтаг в Нижней Саксонии?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_NI_04",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Lower Saxony?", uk: "З якого віку можна голосувати на муніципальних виборах у Нижній Саксонії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Нижней Саксонии?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_NI_05",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welche Farben hat die Landesflagge von Niedersachsen?", en: "What colours does the state flag of Lower Saxony have?", uk: "Які кольори має прапор землі Нижня Саксонія?", ru: "Какие цвета у флага земли Нижняя Саксония?" },
    answers: [
      { de: "weiß-blau", en: "white-blue", uk: "біло-синій", ru: "бело-синий" },
      { de: "schwarz-rot-gold", en: "black-red-gold", uk: "чорно-червоно-золотий", ru: "чёрно-красно-золотой", correct: true },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
    ]
  },
  {
    id: "lid_NI_06",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Wo können Sie sich in Niedersachsen über politische Themen informieren?", en: "Where can you find out about political topics in Lower Saxony?", uk: "Де в Нижній Саксонії можна отримати інформацію про політичні теми?", ru: "Где в Нижней Саксонии можно получить информацию о политических темах?" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
    ]
  },
  {
    id: "lid_NI_07",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Die Landeshauptstadt von Niedersachsen heißt …", en: "The state capital of Lower Saxony is called …", uk: "Столиця землі Нижня Саксонія називається …", ru: "Столица земли Нижняя Саксония называется …" },
    answers: [
      { de: "Hannover.", en: "Hanover.", uk: "Ганновер.", ru: "Ганновер.", correct: true },
      { de: "Braunschweig.", en: "Brunswick (Braunschweig).", uk: "Брауншвейг.", ru: "Брауншвейг." },
      { de: "Wolfsburg.", en: "Wolfsburg.", uk: "Вольфсбург.", ru: "Вольфсбург." },
      { de: "Osnabrück.", en: "Osnabrück.", uk: "Оснабрюк.", ru: "Оснабрюк." },
    ]
  },
  {
    id: "lid_NI_08",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    img: "lid_NI_08.png",
    question: { de: "Welches Bundesland ist Niedersachsen?", en: "Which federal state is Lower Saxony?", uk: "Яка федеральна земля на карті — Нижня Саксонія?", ru: "Какая федеральная земля — Нижняя Саксония?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1", correct: true },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_NI_09",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Niedersachsen?", en: "What is the head of government in Lower Saxony called?", uk: "Як називають главу уряду в Нижній Саксонії?", ru: "Как называется глава правительства в Нижней Саксонии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_NI_10",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welche Ministerin/welchen Minister hat Niedersachsen nicht?", en: "Which minister does Lower Saxony not have?", uk: "Якого міністра/якої міністерки немає в Нижній Саксонії?", ru: "Какого министра в Нижней Саксонии нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_NW_01",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?", en: "Which coat of arms belongs to the federal state of North Rhine-Westphalia?", uk: "Який герб належить федеральній землі Північний Рейн-Вестфалія?", ru: "Какой герб принадлежит федеральной земле Северный Рейн-Вестфалия?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_NW_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_NW_01_a2.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_NW_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_NW_01_a4.png" },
    ]
  },
  {
    id: "lid_NW_02",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welches ist ein Landkreis in Nordrhein-Westfalen?", en: "Which of these is a rural district in North Rhine-Westphalia?", uk: "Який з наведених є округом у Північному Рейні-Вестфалії?", ru: "Какой из этих районов (Landkreis) находится в Северном Рейне-Вестфалии?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд" },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг", correct: true },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
      { de: "Vogtlandkreis", en: "Vogtland district", uk: "Фогтланд", ru: "Фогтландский район" },
    ]
  },
  {
    id: "lid_NW_03",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Für wie viele Jahre wird der Landtag in Nordrhein-Westfalen gewählt?", en: "For how many years is the Landtag (state parliament) elected in North Rhine-Westphalia?", uk: "На скільки років обирають ландтаг у Північному Рейні-Вестфалії?", ru: "На сколько лет избирается ландтаг в Северном Рейне-Вестфалии?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_NW_04",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in North Rhine-Westphalia?", uk: "З якого віку можна голосувати на муніципальних виборах у Північному Рейні-Вестфалії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Северном Рейне-Вестфалии?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_NW_05",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?", en: "What colours does the state flag of North Rhine-Westphalia have?", uk: "Які кольори має прапор землі Північний Рейн-Вестфалія?", ru: "Какие цвета у флага земли Северный Рейн-Вестфалия?" },
    answers: [
      { de: "rot-weiß", en: "red-white", uk: "червоно-білий", ru: "красно-белый" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный", correct: true },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой" },
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
    ]
  },
  {
    id: "lid_NW_06",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?", en: "Where can you find out about political topics in North Rhine-Westphalia?", uk: "Де в Північному Рейні-Вестфалії можна отримати інформацію про політичні теми?", ru: "Где в Северном Рейне-Вестфалии можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
    ]
  },
  {
    id: "lid_NW_07",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Die Landeshauptstadt von Nordrhein-Westfalen heißt …", en: "The state capital of North Rhine-Westphalia is called …", uk: "Столиця землі Північний Рейн-Вестфалія називається …", ru: "Столица земли Северный Рейн-Вестфалия называется …" },
    answers: [
      { de: "Köln.", en: "Cologne.", uk: "Кельн.", ru: "Кёльн." },
      { de: "Bonn.", en: "Bonn.", uk: "Бонн.", ru: "Бонн." },
      { de: "Düsseldorf.", en: "Düsseldorf.", uk: "Дюссельдорф.", ru: "Дюссельдорф.", correct: true },
      { de: "Dortmund.", en: "Dortmund.", uk: "Дортмунд.", ru: "Дортмунд." },
    ]
  },
  {
    id: "lid_NW_08",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    img: "lid_NW_08.png",
    question: { de: "Welches Bundesland ist Nordrhein-Westfalen?", en: "Which federal state is North Rhine-Westphalia?", uk: "Яка федеральна земля на карті — Північний Рейн-Вестфалія?", ru: "Какая федеральная земля — Северный Рейн-Вестфалия?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3", correct: true },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_NW_09",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Nordrhein-Westfalen?", en: "What is the head of government in North Rhine-Westphalia called?", uk: "Як називають главу уряду в Північному Рейні-Вестфалії?", ru: "Как называется глава правительства в Северном Рейне-Вестфалии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_NW_10",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welche Ministerin/welchen Minister hat Nordrhein-Westfalen nicht?", en: "Which minister does North Rhine-Westphalia not have?", uk: "Якого міністра/якої міністерки немає в Північному Рейні-Вестфалії?", ru: "Какого министра в Северном Рейне-Вестфалии нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_RP_01",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?", en: "Which coat of arms belongs to the federal state of Rhineland-Palatinate?", uk: "Який герб належить федеральній землі Рейнланд-Пфальц?", ru: "Какой герб принадлежит федеральной земле Рейнланд-Пфальц?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_RP_01_a1.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_RP_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_RP_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_RP_01_a4.png" },
    ]
  },
  {
    id: "lid_RP_02",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welches ist ein Landkreis in Rheinland-Pfalz?", en: "Which of these is a rural district in Rhineland-Palatinate?", uk: "Який з наведених є округом у Рейнланд-Пфальці?", ru: "Какой из этих районов (Landkreis) находится в Рейнланд-Пфальце?" },
    answers: [
      { de: "Westerwaldkreis", en: "Westerwald district", uk: "Вестервальд", ru: "район Вестервальд", correct: true },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Emsland", en: "Emsland", uk: "Емсланд", ru: "Эмсланд" },
      { de: "Prignitz", en: "Prignitz", uk: "Прігніц", ru: "Пригниц" },
    ]
  },
  {
    id: "lid_RP_03",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Für wie viele Jahre wird der Landtag in Rheinland-Pfalz gewählt?", en: "For how many years is the Landtag (state parliament) elected in Rhineland-Palatinate?", uk: "На скільки років обирають ландтаг у Рейнланд-Пфальці?", ru: "На сколько лет избирается ландтаг в Рейнланд-Пфальце?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_RP_04",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Rhineland-Palatinate?", uk: "З якого віку можна голосувати на муніципальних виборах у Рейнланд-Пфальці?", ru: "С какого возраста можно голосовать на коммунальных выборах в Рейнланд-Пфальце?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_RP_05",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welche Farben hat die Landesflagge von Rheinland-Pfalz?", en: "What colours does the state flag of Rhineland-Palatinate have?", uk: "Які кольори має прапор землі Рейнланд-Пфальц?", ru: "Какие цвета у флага земли Рейнланд-Пфальц?" },
    answers: [
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный" },
      { de: "schwarz-rot-gold", en: "black-red-gold", uk: "чорно-червоно-золотий", ru: "чёрно-красно-золотой", correct: true },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
    ]
  },
  {
    id: "lid_RP_06",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?", en: "Where can you find out about political topics in Rhineland-Palatinate?", uk: "Де в Рейнланд-Пфальці можна отримати інформацію про політичні теми?", ru: "Где в Рейнланд-Пфальце можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
    ]
  },
  {
    id: "lid_RP_07",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Die Landeshauptstadt von Rheinland-Pfalz heißt …", en: "The state capital of Rhineland-Palatinate is called …", uk: "Столиця землі Рейнланд-Пфальц називається …", ru: "Столица земли Рейнланд-Пфальц называется …" },
    answers: [
      { de: "Mainz.", en: "Mainz.", uk: "Майнц.", ru: "Майнц.", correct: true },
      { de: "Kaiserslautern.", en: "Kaiserslautern.", uk: "Кайзерслаутерн.", ru: "Кайзерслаутерн." },
      { de: "Ludwigshafen.", en: "Ludwigshafen.", uk: "Людвігсгафен.", ru: "Людвигсхафен." },
      { de: "Koblenz.", en: "Koblenz.", uk: "Кобленц.", ru: "Кобленц." },
    ]
  },
  {
    id: "lid_RP_08",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    img: "lid_RP_08.png",
    question: { de: "Welches Bundesland ist Rheinland-Pfalz?", en: "Which federal state is Rhineland-Palatinate?", uk: "Яка федеральна земля на карті — Рейнланд-Пфальц?", ru: "Какая федеральная земля — Рейнланд-Пфальц?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1", correct: true },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_RP_09",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Rheinland-Pfalz?", en: "What is the head of government in Rhineland-Palatinate called?", uk: "Як називають главу уряду в Рейнланд-Пфальці?", ru: "Как называется глава правительства в Рейнланд-Пфальце?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_RP_10",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welche Ministerin/welchen Minister hat Rheinland-Pfalz nicht?", en: "Which minister does Rhineland-Palatinate not have?", uk: "Якого міністра/якої міністерки немає в Рейнланд-Пфальці?", ru: "Какого министра в Рейнланд-Пфальце нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_SL_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welches Wappen gehört zum Bundesland Saarland?", en: "Which coat of arms belongs to the federal state of Saarland?", uk: "Який герб належить федеральній землі Саар?", ru: "Какой герб принадлежит федеральной земле Саар?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_SL_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SL_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SL_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SL_01_a4.png", correct: true },
    ]
  },
  {
    id: "lid_SL_02",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welches ist ein Landkreis im Saarland?", en: "Which of these is a rural district in Saarland?", uk: "Який з наведених є округом у Сааре?", ru: "Какой из этих районов (Landkreis) находится в Сааре?" },
    answers: [
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Neunkirchen", en: "Neunkirchen", uk: "Нойнкірхен", ru: "Нойнкирхен", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
    ]
  },
  {
    id: "lid_SL_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Für wie viele Jahre wird der Landtag des Saarlandes gewählt?", en: "For how many years is the Landtag (state parliament) of Saarland elected?", uk: "На скільки років обирають ландтаг землі Саар?", ru: "На сколько лет избирается ландтаг Саара?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_SL_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Ab welchem Alter darf man im Saarland bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Saarland?", uk: "З якого віку можна голосувати на муніципальних виборах у Сааре?", ru: "С какого возраста можно голосовать на коммунальных выборах в Сааре?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_SL_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welche Farben hat die Landesflagge des Saarlandes?", en: "What colours does the state flag of Saarland have?", uk: "Які кольори має прапор землі Саар?", ru: "Какие цвета у флага земли Саар?" },
    answers: [
      { de: "weiß-blau", en: "white-blue", uk: "біло-синій", ru: "бело-синий" },
      { de: "schwarz-rot-gold", en: "black-red-gold", uk: "чорно-червоно-золотий", ru: "чёрно-красно-золотой", correct: true },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
    ]
  },
  {
    id: "lid_SL_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Wo können Sie sich im Saarland über politische Themen informieren?", en: "Where can you find out about political topics in Saarland?", uk: "Де в Сааре можна отримати інформацію про політичні теми?", ru: "Где в Сааре можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
    ]
  },
  {
    id: "lid_SL_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Die Landeshauptstadt des Saarlandes heißt …", en: "The state capital of Saarland is called …", uk: "Столиця землі Саар називається …", ru: "Столица земли Саар называется …" },
    answers: [
      { de: "Neunkirchen.", en: "Neunkirchen.", uk: "Нойнкірхен.", ru: "Нойнкирхен." },
      { de: "Homburg.", en: "Homburg.", uk: "Гомбург.", ru: "Хомбург." },
      { de: "Saarbrücken.", en: "Saarbrücken.", uk: "Саарбрюкен.", ru: "Саарбрюккен.", correct: true },
      { de: "Völklingen.", en: "Völklingen.", uk: "Фельклінген.", ru: "Фёлклинген." },
    ]
  },
  {
    id: "lid_SL_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    img: "lid_SL_08.png",
    question: { de: "Welches Bundesland ist das Saarland?", en: "Which federal state is Saarland?", uk: "Яка федеральна земля на карті — Саар?", ru: "Какая федеральная земля — Саар?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2", correct: true },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_SL_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Saarlandes?", en: "What is the head of government of Saarland called?", uk: "Як називають главу уряду землі Саар?", ru: "Как называется глава правительства Саара?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_SL_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welche Ministerin/welchen Minister hat das Saarland nicht?", en: "Which minister does Saarland not have?", uk: "Якого міністра/якої міністерки немає в землі Саар?", ru: "Какого министра в Сааре нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_SN_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welches Wappen gehört zum Freistaat Sachsen?", en: "Which coat of arms belongs to the Free State of Saxony?", uk: "Який герб належить Вільній державі Саксонія?", ru: "Какой герб принадлежит Свободному государству Саксония?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_SN_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SN_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SN_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SN_01_a4.png", correct: true },
    ]
  },
  {
    id: "lid_SN_02",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welches ist ein Landkreis in Sachsen?", en: "Which of these is a rural district in Saxony?", uk: "Який з наведених є округом у Саксонії?", ru: "Какой из этих районов (Landkreis) находится в Саксонии?" },
    answers: [
      { de: "Vogtlandkreis", en: "Vogtland district", uk: "Фогтланд", ru: "Фогтландский район", correct: true },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Uckermark", en: "Uckermark", uk: "Укермарк", ru: "Уккермарк" },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
    ]
  },
  {
    id: "lid_SN_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Für wie viele Jahre wird der Landtag in Sachsen gewählt?", en: "For how many years is the Landtag (state parliament) elected in Saxony?", uk: "На скільки років обирають ландтаг у Саксонії?", ru: "На сколько лет избирается ландтаг в Саксонии?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_SN_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Ab welchem Alter darf man in Sachsen bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Saxony?", uk: "З якого віку можна голосувати на муніципальних виборах у Саксонії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Саксонии?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_SN_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welche Farben hat die Landesflagge von Sachsen?", en: "What colours does the state flag of Saxony have?", uk: "Які кольори має прапор землі Саксонія?", ru: "Какие цвета у флага земли Саксония?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "weiß-grün", en: "white-green", uk: "біло-зелений", ru: "бело-зелёный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gelb", en: "black-yellow", uk: "чорно-жовтий", ru: "чёрно-жёлтый" },
    ]
  },
  {
    id: "lid_SN_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Wo können Sie sich in Sachsen über politische Themen informieren?", en: "Where can you find out about political topics in Saxony?", uk: "Де в Саксонії можна отримати інформацію про політичні теми?", ru: "Где в Саксонии можно получить информацию о политических темах?" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
    ]
  },
  {
    id: "lid_SN_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Die Landeshauptstadt von Sachsen heißt …", en: "The state capital of Saxony is called …", uk: "Столиця землі Саксонія називається …", ru: "Столица земли Саксония называется …" },
    answers: [
      { de: "Leipzig.", en: "Leipzig.", uk: "Лейпциг.", ru: "Лейпциг." },
      { de: "Dresden.", en: "Dresden.", uk: "Дрезден.", ru: "Дрезден.", correct: true },
      { de: "Chemnitz.", en: "Chemnitz.", uk: "Кемніц.", ru: "Хемниц." },
      { de: "Zwickau.", en: "Zwickau.", uk: "Цвікау.", ru: "Цвиккау." },
    ]
  },
  {
    id: "lid_SN_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    img: "lid_SN_08.png",
    question: { de: "Welches Bundesland ist Sachsen?", en: "Which federal state is Saxony?", uk: "Яка федеральна земля на карті — Саксонія?", ru: "Какая федеральная земля — Саксония?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4", correct: true },
    ]
  },
  {
    id: "lid_SN_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen?", en: "What is the head of government in Saxony called?", uk: "Як називають главу уряду в Саксонії?", ru: "Как называется глава правительства в Саксонии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_SN_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welche Ministerin/welchen Minister hat Sachsen nicht?", en: "Which minister does Saxony not have?", uk: "Якого міністра/якої міністерки немає в Саксонії?", ru: "Какого министра в Саксонии нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_ST_01",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?", en: "Which coat of arms belongs to the federal state of Saxony-Anhalt?", uk: "Який герб належить федеральній землі Саксонія-Ангальт?", ru: "Какой герб принадлежит федеральной земле Саксония-Анхальт?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_ST_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_ST_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_ST_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_ST_01_a4.png", correct: true },
    ]
  },
  {
    id: "lid_ST_02",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welches ist ein Landkreis in Sachsen-Anhalt?", en: "Which of these is a rural district in Saxony-Anhalt?", uk: "Який з наведених є округом у Саксонії-Ангальт?", ru: "Какой из этих районов (Landkreis) находится в Саксонии-Анхальт?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Uckermark", en: "Uckermark", uk: "Укермарк", ru: "Уккермарк" },
      { de: "Börde", en: "Börde", uk: "Бьорде", ru: "Бёрде", correct: true },
    ]
  },
  {
    id: "lid_ST_03",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Für wie viele Jahre wird der Landtag in Sachsen-Anhalt gewählt?", en: "For how many years is the Landtag (state parliament) elected in Saxony-Anhalt?", uk: "На скільки років обирають ландтаг у Саксонії-Ангальт?", ru: "На сколько лет избирается ландтаг в Саксонии-Анхальт?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_ST_04",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Saxony-Anhalt?", uk: "З якого віку можна голосувати на муніципальних виборах у Саксонії-Ангальт?", ru: "С какого возраста можно голосовать на коммунальных выборах в Саксонии-Анхальт?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_ST_05",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welche Farben hat die Landesflagge von Sachsen-Anhalt?", en: "What colours does the state flag of Saxony-Anhalt have?", uk: "Які кольори має прапор землі Саксонія-Ангальт?", ru: "Какие цвета у флага земли Саксония-Анхальт?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "gelb-schwarz", en: "yellow-black", uk: "жовто-чорний", ru: "жёлто-чёрный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный" },
    ]
  },
  {
    id: "lid_ST_06",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?", en: "Where can you find out about political topics in Saxony-Anhalt?", uk: "Де в Саксонії-Ангальт можна отримати інформацію про політичні теми?", ru: "Где в Саксонии-Анхальт можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
    ]
  },
  {
    id: "lid_ST_07",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Die Landeshauptstadt von Sachsen-Anhalt heißt …", en: "The state capital of Saxony-Anhalt is called …", uk: "Столиця землі Саксонія-Ангальт називається …", ru: "Столица земли Саксония-Анхальт называется …" },
    answers: [
      { de: "Halle.", en: "Halle.", uk: "Галле.", ru: "Галле." },
      { de: "Dessau.", en: "Dessau.", uk: "Дессау.", ru: "Дессау." },
      { de: "Magdeburg.", en: "Magdeburg.", uk: "Магдебург.", ru: "Магдебург.", correct: true },
      { de: "Wittenberg.", en: "Wittenberg.", uk: "Віттенберг.", ru: "Виттенберг." },
    ]
  },
  {
    id: "lid_ST_08",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    img: "lid_ST_08.png",
    question: { de: "Welches Bundesland ist Sachsen-Anhalt?", en: "Which federal state is Saxony-Anhalt?", uk: "Яка федеральна земля на карті — Саксонія-Ангальт?", ru: "Какая федеральная земля — Саксония-Анхальт?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3", correct: true },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_ST_09",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen-Anhalt?", en: "What is the head of government in Saxony-Anhalt called?", uk: "Як називають главу уряду в Саксонії-Ангальт?", ru: "Как называется глава правительства в Саксонии-Анхальт?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_ST_10",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welche Ministerin/welchen Minister hat Sachsen-Anhalt nicht?", en: "Which minister does Saxony-Anhalt not have?", uk: "Якого міністра/якої міністерки немає в Саксонії-Ангальт?", ru: "Какого министра в Саксонии-Анхальт нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_SH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welches Wappen gehört zum Bundesland Schleswig-Holstein?", en: "Which coat of arms belongs to the federal state of Schleswig-Holstein?", uk: "Який герб належить федеральній землі Шлезвіг-Гольштейн?", ru: "Какой герб принадлежит федеральной земле Шлезвиг-Гольштейн?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_SH_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SH_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_SH_01_a3.png", correct: true },
      { de: "", en: "", uk: "", ru: "", img: "lid_SH_01_a4.png" },
    ]
  },
  {
    id: "lid_SH_02",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welches ist ein Landkreis in Schleswig-Holstein?", en: "Which of these is a rural district in Schleswig-Holstein?", uk: "Який з наведених є округом у Шлезвіг-Гольштейні?", ru: "Какой из этих районов (Landkreis) находится в Шлезвиг-Гольштейне?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд" },
      { de: "Mecklenburgische Seenplatte", en: "Mecklenburg Lake District", uk: "Мекленбурзьке Озерне плато", ru: "Мекленбургское поозёрье" },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "Rhein-Sieg district", uk: "Рейн-Зіг", ru: "район Рейн-Зиг" },
    ]
  },
  {
    id: "lid_SH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Für wie viele Jahre wird der Landtag in Schleswig-Holstein gewählt?", en: "For how many years is the Landtag (state parliament) elected in Schleswig-Holstein?", uk: "На скільки років обирають ландтаг у Шлезвіг-Гольштейні?", ru: "На сколько лет избирается ландтаг в Шлезвиг-Гольштейне?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_SH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Schleswig-Holstein?", uk: "З якого віку можна голосувати на муніципальних виборах у Шлезвіг-Гольштейні?", ru: "С какого возраста можно голосовать на коммунальных выборах в Шлезвиг-Гольштейне?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_SH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welche Farben hat die Landesflagge von Schleswig-Holstein?", en: "What colours does the state flag of Schleswig-Holstein have?", uk: "Які кольори має прапор землі Шлезвіг-Гольштейн?", ru: "Какие цвета у флага земли Шлезвиг-Гольштейн?" },
    answers: [
      { de: "weiß-blau", en: "white-blue", uk: "біло-синій", ru: "бело-синий" },
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный", correct: true },
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный" },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
    ]
  },
  {
    id: "lid_SH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?", en: "Where can you find out about political topics in Schleswig-Holstein?", uk: "Де в Шлезвіг-Гольштейні можна отримати інформацію про політичні теми?", ru: "Где в Шлезвиг-Гольштейне можно получить информацию о политических темах?" },
    answers: [
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
      { de: "beim / bei der Landesbeauftragten für politische Bildung", en: "at the State Commissioner for Civic Education", uk: "у земельного уповноваженого/земельної уповноваженої з політичної освіти", ru: "у земельного уполномоченного по политическому образованию", correct: true },
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
    ]
  },
  {
    id: "lid_SH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Die Landeshauptstadt von Schleswig-Holstein heißt …", en: "The state capital of Schleswig-Holstein is called …", uk: "Столиця землі Шлезвіг-Гольштейн називається …", ru: "Столица земли Шлезвиг-Гольштейн называется …" },
    answers: [
      { de: "Husum.", en: "Husum.", uk: "Гузум.", ru: "Хузум." },
      { de: "Flensburg.", en: "Flensburg.", uk: "Фленсбург.", ru: "Фленсбург." },
      { de: "Lübeck.", en: "Lübeck.", uk: "Любек.", ru: "Любек." },
      { de: "Kiel.", en: "Kiel.", uk: "Кіль.", ru: "Киль.", correct: true },
    ]
  },
  {
    id: "lid_SH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    img: "lid_SH_08.png",
    question: { de: "Welches Bundesland ist Schleswig-Holstein?", en: "Which federal state is Schleswig-Holstein?", uk: "Яка федеральна земля на карті — Шлезвіг-Гольштейн?", ru: "Какая федеральная земля — Шлезвиг-Гольштейн?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1", correct: true },
      { de: "2", en: "2", uk: "2", ru: "2" },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_SH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Schleswig-Holstein?", en: "What is the head of government in Schleswig-Holstein called?", uk: "Як називають главу уряду в Шлезвіг-Гольштейні?", ru: "Как называется глава правительства в Шлезвиг-Гольштейне?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_SH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welche Ministerin/welchen Minister hat Schleswig-Holstein nicht?", en: "Which minister does Schleswig-Holstein not have?", uk: "Якого міністра/якої міністерки немає в Шлезвіг-Гольштейні?", ru: "Какого министра в Шлезвиг-Гольштейне нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  },
  {
    id: "lid_TH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welches Wappen gehört zum Freistaat Thüringen?", en: "Which coat of arms belongs to the Free State of Thuringia?", uk: "Який герб належить Вільній державі Тюрингія?", ru: "Какой герб принадлежит Свободному государству Тюрингия?" },
    answers: [
      { de: "", en: "", uk: "", ru: "", img: "lid_TH_01_a1.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_TH_01_a2.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_TH_01_a3.png" },
      { de: "", en: "", uk: "", ru: "", img: "lid_TH_01_a4.png", correct: true },
    ]
  },
  {
    id: "lid_TH_02",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welches ist ein Landkreis in Thüringen?", en: "Which of these is a rural district in Thuringia?", uk: "Який з наведених є округом у Тюрингії?", ru: "Какой из этих районов (Landkreis) находится в Тюрингии?" },
    answers: [
      { de: "Ammerland", en: "Ammerland", uk: "Аммерланд", ru: "Аммерланд" },
      { de: "Altötting", en: "Altötting", uk: "Альтьоттінг", ru: "Альтэттинг" },
      { de: "Nordfriesland", en: "North Frisia", uk: "Північна Фризія", ru: "Северная Фризия" },
      { de: "Wartburgkreis", en: "Wartburg district", uk: "Вартбург", ru: "район Вартбург", correct: true },
    ]
  },
  {
    id: "lid_TH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Für wie viele Jahre wird der Landtag in Thüringen gewählt?", en: "For how many years is the Landtag (state parliament) elected in Thuringia?", uk: "На скільки років обирають ландтаг у Тюрингії?", ru: "На сколько лет избирается ландтаг в Тюрингии?" },
    answers: [
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
      { de: "5", en: "5", uk: "5", ru: "5", correct: true },
      { de: "6", en: "6", uk: "6", ru: "6" },
    ]
  },
  {
    id: "lid_TH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Ab welchem Alter darf man in Thüringen bei Kommunalwahlen wählen?", en: "From what age may one vote in local elections in Thuringia?", uk: "З якого віку можна голосувати на муніципальних виборах у Тюрингії?", ru: "С какого возраста можно голосовать на коммунальных выборах в Тюрингии?" },
    answers: [
      { de: "14", en: "14", uk: "14", ru: "14" },
      { de: "16", en: "16", uk: "16", ru: "16", correct: true },
      { de: "18", en: "18", uk: "18", ru: "18" },
      { de: "20", en: "20", uk: "20", ru: "20" },
    ]
  },
  {
    id: "lid_TH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welche Farben hat die Landesflagge von Thüringen?", en: "What colours does the state flag of Thuringia have?", uk: "Які кольори має прапор землі Тюрингія?", ru: "Какие цвета у флага земли Тюрингия?" },
    answers: [
      { de: "blau-weiß-rot", en: "blue-white-red", uk: "синьо-біло-червоний", ru: "сине-бело-красный" },
      { de: "weiß-rot", en: "white-red", uk: "біло-червоний", ru: "бело-красный", correct: true },
      { de: "grün-weiß-rot", en: "green-white-red", uk: "зелено-біло-червоний", ru: "зелёно-бело-красный" },
      { de: "schwarz-gold", en: "black-gold", uk: "чорно-золотий", ru: "чёрно-золотой" },
    ]
  },
  {
    id: "lid_TH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Wo können Sie sich in Thüringen über politische Themen informieren?", en: "Where can you find out about political topics in Thuringia?", uk: "Де в Тюрингії можна отримати інформацію про політичні теми?", ru: "Где в Тюрингии можно получить информацию о политических темах?" },
    answers: [
      { de: "bei den Kirchen", en: "at the churches", uk: "у церквах", ru: "в церквях" },
      { de: "bei der Verbraucherzentrale", en: "at the consumer advice centre", uk: "у центрі захисту прав споживачів", ru: "в центре защиты прав потребителей" },
      { de: "bei der Landeszentrale für politische Bildung", en: "at the State Centre for Civic Education (Landeszentrale für politische Bildung)", uk: "у Земельному центрі політичної освіти", ru: "в Земельном центре политического образования (Landeszentrale für politische Bildung)", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "at the public order office of the municipality", uk: "у відділі громадського порядку громади", ru: "в ведомстве общественного порядка общины" },
    ]
  },
  {
    id: "lid_TH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Die Landeshauptstadt von Thüringen heißt …", en: "The state capital of Thuringia is called …", uk: "Столиця землі Тюрингія називається …", ru: "Столица земли Тюрингия называется …" },
    answers: [
      { de: "Eisenach.", en: "Eisenach.", uk: "Айзенах.", ru: "Айзенах." },
      { de: "Erfurt.", en: "Erfurt.", uk: "Ерфурт.", ru: "Эрфурт.", correct: true },
      { de: "Gera.", en: "Gera.", uk: "Гера.", ru: "Гера." },
      { de: "Jena.", en: "Jena.", uk: "Єна.", ru: "Йена." },
    ]
  },
  {
    id: "lid_TH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    img: "lid_TH_08.png",
    question: { de: "Welches Bundesland ist Thüringen?", en: "Which federal state is Thuringia?", uk: "Яка федеральна земля на карті — Тюрингія?", ru: "Какая федеральная земля — Тюрингия?" },
    answers: [
      { de: "1", en: "1", uk: "1", ru: "1" },
      { de: "2", en: "2", uk: "2", ru: "2", correct: true },
      { de: "3", en: "3", uk: "3", ru: "3" },
      { de: "4", en: "4", uk: "4", ru: "4" },
    ]
  },
  {
    id: "lid_TH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Thüringen?", en: "What is the head of government in Thuringia called?", uk: "Як називають главу уряду в Тюрингії?", ru: "Как называется глава правительства в Тюрингии?" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "First Minister", uk: "перший міністр/перша міністерка", ru: "первый министр" },
      { de: "Premierministerin/Premierminister", en: "Prime Minister", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "премьер-министр" },
      { de: "Bürgermeisterin/Bürgermeister", en: "Mayor", uk: "бургомістр/бургомістерка", ru: "бургомистр" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "Minister-President (Ministerpräsident)", uk: "міністр-президент/міністр-президентка", ru: "министр-президент (Ministerpräsident)", correct: true },
    ]
  },
  {
    id: "lid_TH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welche Ministerin/welchen Minister hat Thüringen nicht?", en: "Which minister does Thuringia not have?", uk: "Якого міністра/якої міністерки немає в Тюрингії?", ru: "Какого министра в Тюрингии нет?" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "Minister of Justice", uk: "міністр/міністерка юстиції", ru: "министра юстиции" },
      { de: "Außenministerin/Außenminister", en: "Minister of Foreign Affairs", uk: "міністр/міністерка закордонних справ", ru: "министра иностранных дел", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "Minister of Finance", uk: "міністр/міністерка фінансів", ru: "министра финансов" },
      { de: "Innenministerin/Innenminister", en: "Minister of the Interior", uk: "міністр/міністерка внутрішніх справ", ru: "министра внутренних дел" },
    ]
  }
];

var SB_CATS = [];
var SPRACHBAUSTEINE = [];
var SCHREIBEN = [];
var EMAILS = [];
var STORY_TASK = [];
var STORY = [];
