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
  {id:"organe", de:"Verfassungsorgane", en:'', uk:"Конституційні органи", ru:'', e:"🏛️", grp:"demokratie"},
  {id:"prinzipien", de:"Verfassungsprinzipien", en:'', uk:"Конституційні принципи", ru:'', e:"⚖️", grp:"demokratie"},
  {id:"foederalismus", de:"Föderalismus", en:'', uk:"Федералізм", ru:'', e:"🗺️", grp:"demokratie"},
  {id:"sozialsystem", de:"Sozialsystem", en:'', uk:"Соціальна система", ru:'', e:"🩺", grp:"demokratie"},
  {id:"grundrechte", de:"Grundrechte", en:'', uk:"Основні права", ru:'', e:"🕊️", grp:"demokratie"},
  {id:"wahlen", de:"Wahlen und Beteiligung", en:'', uk:"Вибори та участь", ru:'', e:"🗳️", grp:"demokratie"},
  {id:"parteien", de:"Parteien", en:'', uk:"Партії", ru:'', e:"🎌", grp:"demokratie"},
  {id:"staatsaufgaben", de:"Aufgaben des Staates", en:'', uk:"Завдання держави", ru:'', e:"🏗️", grp:"demokratie"},
  {id:"pflichten", de:"Pflichten", en:'', uk:"Обовʼязки", ru:'', e:"📌", grp:"demokratie"},
  {id:"staatssymbole", de:"Staatssymbole", en:'', uk:"Державні символи", ru:'', e:"🦅", grp:"demokratie"},
  {id:"kommune", de:"Kommune", en:'', uk:"Громада (Kommune)", ru:'', e:"🏘️", grp:"demokratie"},
  {id:"recht", de:"Recht und Alltag", en:'', uk:"Право і повсякдення", ru:'', e:"📜", grp:"demokratie"},
  {id:"ns", de:"Der Nationalsozialismus und seine Folgen", en:'', uk:"Націонал-соціалізм та його наслідки", ru:'', e:"🕯️", grp:"geschichte"},
  {id:"nach1945", de:"Wichtige Stationen nach 1945", en:'', uk:"Важливі віхи після 1945 року", ru:'', e:"📅", grp:"geschichte"},
  {id:"wiedervereinigung", de:"Wiedervereinigung", en:'', uk:"Воззʼєднання", ru:'', e:"🧱", grp:"geschichte"},
  {id:"europa", de:"Deutschland in Europa", en:'', uk:"Німеччина в Європі", ru:'', e:"🇪🇺", grp:"geschichte"},
  {id:"religion", de:"Religiöse Vielfalt", en:'', uk:"Релігійна різноманітність", ru:'', e:"🕍", grp:"gesellschaft"},
  {id:"bildung", de:"Bildung", en:'', uk:"Освіта", ru:'', e:"🎓", grp:"gesellschaft"},
  {id:"migration", de:"Migrationsgeschichte", en:'', uk:"Історія міграції", ru:'', e:"🧳", grp:"gesellschaft"},
  {id:"interkulturell", de:"Interkulturelles Zusammenleben", en:'', uk:"Міжкультурне співжиття", ru:'', e:"🤝", grp:"gesellschaft"},
  {id:'region', de:'Fragen zu meinem Bundesland', en:'', uk:'Питання про мою землю', ru:'', e:'📍', grp:'region'},
];

var CAT_GROUPS = [   // модулі офіційного тесту; CATS[].grp посилається на ці id
  {id:"demokratie", de:"Leben in der Demokratie", en:'', uk:"Життя в демократії", ru:''},
  {id:"geschichte", de:"Geschichte und Verantwortung", en:'', uk:"Історія і відповідальність", ru:''},
  {id:"gesellschaft", de:"Mensch und Gesellschaft", en:'', uk:"Людина і суспільство", ru:''}
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
      "en": "",
      "uk": "Конституційні органи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsorgane – Teil 1",
      "en": "",
      "uk": "Конституційні органи — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні органи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsorgane – Teil 2",
      "en": "",
      "uk": "Конституційні органи — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні органи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsorgane – Teil 3",
      "en": "",
      "uk": "Конституційні органи — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні органи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsorgane – Teil 4",
      "en": "",
      "uk": "Конституційні органи — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні органи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsorgane – Teil 5",
      "en": "",
      "uk": "Конституційні органи — частина 5",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні принципи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 1",
      "en": "",
      "uk": "Конституційні принципи — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні принципи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 2",
      "en": "",
      "uk": "Конституційні принципи — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні принципи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 3",
      "en": "",
      "uk": "Конституційні принципи — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Конституційні принципи",
      "ru": ""
    },
    "title": {
      "de": "Verfassungsprinzipien – Teil 4",
      "en": "",
      "uk": "Конституційні принципи — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Федералізм",
      "ru": ""
    },
    "title": {
      "de": "Föderalismus – Teil 1",
      "en": "",
      "uk": "Федералізм — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Федералізм",
      "ru": ""
    },
    "title": {
      "de": "Föderalismus – Teil 2",
      "en": "",
      "uk": "Федералізм — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Соціальна система",
      "ru": ""
    },
    "title": {
      "de": "Sozialsystem – Teil 1",
      "en": "",
      "uk": "Соціальна система — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Соціальна система",
      "ru": ""
    },
    "title": {
      "de": "Sozialsystem – Teil 2",
      "en": "",
      "uk": "Соціальна система — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Основні права",
      "ru": ""
    },
    "title": {
      "de": "Grundrechte – Teil 1",
      "en": "",
      "uk": "Основні права — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Основні права",
      "ru": ""
    },
    "title": {
      "de": "Grundrechte – Teil 2",
      "en": "",
      "uk": "Основні права — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Основні права",
      "ru": ""
    },
    "title": {
      "de": "Grundrechte – Teil 3",
      "en": "",
      "uk": "Основні права — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Основні права",
      "ru": ""
    },
    "title": {
      "de": "Grundrechte – Teil 4",
      "en": "",
      "uk": "Основні права — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Вибори та участь",
      "ru": ""
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 1",
      "en": "",
      "uk": "Вибори та участь — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Вибори та участь",
      "ru": ""
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 2",
      "en": "",
      "uk": "Вибори та участь — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Вибори та участь",
      "ru": ""
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 3",
      "en": "",
      "uk": "Вибори та участь — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Вибори та участь",
      "ru": ""
    },
    "title": {
      "de": "Wahlen und Beteiligung – Teil 4",
      "en": "",
      "uk": "Вибори та участь — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Партії",
      "ru": ""
    },
    "title": {
      "de": "Parteien",
      "en": "",
      "uk": "Партії",
      "ru": ""
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
      "en": "",
      "uk": "Завдання держави",
      "ru": ""
    },
    "title": {
      "de": "Aufgaben des Staates",
      "en": "",
      "uk": "Завдання держави",
      "ru": ""
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
      "en": "",
      "uk": "Обовʼязки",
      "ru": ""
    },
    "title": {
      "de": "Pflichten",
      "en": "",
      "uk": "Обовʼязки",
      "ru": ""
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
      "en": "",
      "uk": "Державні символи",
      "ru": ""
    },
    "title": {
      "de": "Staatssymbole",
      "en": "",
      "uk": "Державні символи",
      "ru": ""
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
      "en": "",
      "uk": "Громада (Kommune)",
      "ru": ""
    },
    "title": {
      "de": "Kommune – Teil 1",
      "en": "",
      "uk": "Громада (Kommune) — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Громада (Kommune)",
      "ru": ""
    },
    "title": {
      "de": "Kommune – Teil 2",
      "en": "",
      "uk": "Громада (Kommune) — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Право і повсякдення",
      "ru": ""
    },
    "title": {
      "de": "Recht und Alltag – Teil 1",
      "en": "",
      "uk": "Право і повсякдення — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Право і повсякдення",
      "ru": ""
    },
    "title": {
      "de": "Recht und Alltag – Teil 2",
      "en": "",
      "uk": "Право і повсякдення — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Право і повсякдення",
      "ru": ""
    },
    "title": {
      "de": "Recht und Alltag – Teil 3",
      "en": "",
      "uk": "Право і повсякдення — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Право і повсякдення",
      "ru": ""
    },
    "title": {
      "de": "Recht und Alltag – Teil 4",
      "en": "",
      "uk": "Право і повсякдення — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Право і повсякдення",
      "ru": ""
    },
    "title": {
      "de": "Recht und Alltag – Teil 5",
      "en": "",
      "uk": "Право і повсякдення — частина 5",
      "ru": ""
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
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": ""
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 1",
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": ""
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 2",
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": ""
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 3",
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки",
      "ru": ""
    },
    "title": {
      "de": "Der Nationalsozialismus und seine Folgen – Teil 4",
      "en": "",
      "uk": "Націонал-соціалізм та його наслідки — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Важливі віхи після 1945 року",
      "ru": ""
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 1",
      "en": "",
      "uk": "Важливі віхи після 1945 року — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Важливі віхи після 1945 року",
      "ru": ""
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 2",
      "en": "",
      "uk": "Важливі віхи після 1945 року — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Важливі віхи після 1945 року",
      "ru": ""
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 3",
      "en": "",
      "uk": "Важливі віхи після 1945 року — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Важливі віхи після 1945 року",
      "ru": ""
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 4",
      "en": "",
      "uk": "Важливі віхи після 1945 року — частина 4",
      "ru": ""
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
      "en": "",
      "uk": "Важливі віхи після 1945 року",
      "ru": ""
    },
    "title": {
      "de": "Wichtige Stationen nach 1945 – Teil 5",
      "en": "",
      "uk": "Важливі віхи після 1945 року — частина 5",
      "ru": ""
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
      "en": "",
      "uk": "Воззʼєднання",
      "ru": ""
    },
    "title": {
      "de": "Wiedervereinigung – Teil 1",
      "en": "",
      "uk": "Воззʼєднання — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Воззʼєднання",
      "ru": ""
    },
    "title": {
      "de": "Wiedervereinigung – Teil 2",
      "en": "",
      "uk": "Воззʼєднання — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Німеччина в Європі",
      "ru": ""
    },
    "title": {
      "de": "Deutschland in Europa – Teil 1",
      "en": "",
      "uk": "Німеччина в Європі — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Німеччина в Європі",
      "ru": ""
    },
    "title": {
      "de": "Deutschland in Europa – Teil 2",
      "en": "",
      "uk": "Німеччина в Європі — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Німеччина в Європі",
      "ru": ""
    },
    "title": {
      "de": "Deutschland in Europa – Teil 3",
      "en": "",
      "uk": "Німеччина в Європі — частина 3",
      "ru": ""
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
      "en": "",
      "uk": "Релігійна різноманітність",
      "ru": ""
    },
    "title": {
      "de": "Religiöse Vielfalt – Teil 1",
      "en": "",
      "uk": "Релігійна різноманітність — частина 1",
      "ru": ""
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
      "en": "",
      "uk": "Релігійна різноманітність",
      "ru": ""
    },
    "title": {
      "de": "Religiöse Vielfalt – Teil 2",
      "en": "",
      "uk": "Релігійна різноманітність — частина 2",
      "ru": ""
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
      "en": "",
      "uk": "Освіта",
      "ru": ""
    },
    "title": {
      "de": "Bildung",
      "en": "",
      "uk": "Освіта",
      "ru": ""
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
      "en": "",
      "uk": "Історія міграції",
      "ru": ""
    },
    "title": {
      "de": "Migrationsgeschichte",
      "en": "",
      "uk": "Історія міграції",
      "ru": ""
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
      "en": "",
      "uk": "Міжкультурне співжиття",
      "ru": ""
    },
    "title": {
      "de": "Interkulturelles Zusammenleben",
      "en": "",
      "uk": "Міжкультурне співжиття",
      "ru": ""
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
      "en": "",
      "uk": "Питання про мою землю",
      "ru": ""
    },
    "title": {
      "de": "Fragen zu meinem Bundesland",
      "en": "",
      "uk": "Питання про мою землю",
      "ru": ""
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
    question: { de: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …", en: "", uk: "У Німеччині люди можуть відкрито говорити проти уряду, тому що …", ru: "" },
    answers: [
      { de: "hier Religionsfreiheit gilt.", en: "", uk: "тут діє свобода віросповідання.", ru: "" },
      { de: "die Menschen Steuern zahlen.", en: "", uk: "люди сплачують податки.", ru: "" },
      { de: "die Menschen das Wahlrecht haben.", en: "", uk: "люди мають право голосу.", ru: "" },
      { de: "hier Meinungsfreiheit gilt.", en: "", uk: "тут діє свобода слова.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_002",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …", en: "", uk: "У Німеччині батьки можуть до 14-річного віку дитини вирішувати, чи візьме вона участь у школі в …", ru: "" },
    answers: [
      { de: "Geschichtsunterricht teilnimmt.", en: "", uk: "уроках історії.", ru: "" },
      { de: "Religionsunterricht teilnimmt.", en: "", uk: "уроках релігії.", ru: "", correct: true },
      { de: "Politikunterricht teilnimmt.", en: "", uk: "уроках політики.", ru: "" },
      { de: "Sprachunterricht teilnimmt.", en: "", uk: "уроках мови.", ru: "" },
    ]
  },
  {
    id: "lid_003",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?", en: "", uk: "Німеччина — правова держава. Що це означає?", ru: "" },
    answers: [
      { de: "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.", en: "", uk: "Усі жителі та держава зобовʼязані дотримуватися законів.", ru: "", correct: true },
      { de: "Der Staat muss sich nicht an die Gesetze halten.", en: "", uk: "Держава не зобовʼязана дотримуватися законів.", ru: "" },
      { de: "Nur Deutsche müssen die Gesetze befolgen.", en: "", uk: "Лише німці зобовʼязані виконувати закони.", ru: "" },
      { de: "Die Gerichte machen die Gesetze.", en: "", uk: "Закони створюють суди.", ru: "" },
    ]
  },
  {
    id: "lid_004",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Recht gehört zu den Grundrechten in Deutschland?", en: "", uk: "Яке право належить до основних прав у Німеччині?", ru: "" },
    answers: [
      { de: "Waffenbesitz", en: "", uk: "володіння зброєю", ru: "" },
      { de: "Faustrecht", en: "", uk: "право сильного", ru: "" },
      { de: "Meinungsfreiheit", en: "", uk: "свобода слова", ru: "", correct: true },
      { de: "Selbstjustiz", en: "", uk: "самосуд", ru: "" },
    ]
  },
  {
    id: "lid_005",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland sind frei. Was bedeutet das?", en: "", uk: "Вибори в Німеччині вільні. Що це означає?", ru: "" },
    answers: [
      { de: "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.", en: "", uk: "Можна брати гроші за те, що голосуєш за певного кандидата/певну кандидатку.", ru: "" },
      { de: "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", en: "", uk: "Голосувати можуть лише ті, хто ніколи не сидів у вʼязниці.", ru: "" },
      { de: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.", en: "", uk: "Виборця не можна ні схиляти до певного голосування, ні примушувати до нього, і він не повинен зазнавати жодних негативних наслідків через свій вибір.", ru: "", correct: true },
      { de: "Alle wahlberechtigten Personen müssen wählen.", en: "", uk: "Усі, хто має право голосу, зобовʼязані голосувати.", ru: "" },
    ]
  },
  {
    id: "lid_006",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Wie heißt die deutsche Verfassung?", en: "", uk: "Як називається німецька конституція?", ru: "" },
    answers: [
      { de: "Volksgesetz", en: "", uk: "Народний закон", ru: "" },
      { de: "Bundesgesetz", en: "", uk: "Федеральний закон", ru: "" },
      { de: "Deutsches Gesetz", en: "", uk: "Німецький закон", ru: "" },
      { de: "Grundgesetz", en: "", uk: "Основний закон", ru: "", correct: true },
    ]
  },
  {
    id: "lid_007",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …", en: "", uk: "Яке право належить до основних прав, гарантованих німецькою конституцією? Право на …", ru: "" },
    answers: [
      { de: "Glaubens- und Gewissensfreiheit", en: "", uk: "свободу віросповідання і совісті", ru: "", correct: true },
      { de: "Unterhaltung", en: "", uk: "розваги", ru: "" },
      { de: "Arbeit", en: "", uk: "працю", ru: "" },
      { de: "Wohnung", en: "", uk: "житло", ru: "" },
    ]
  },
  {
    id: "lid_008",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Was steht nicht im Grundgesetz von Deutschland?", en: "", uk: "Чого немає в Основному законі Німеччини?", ru: "" },
    answers: [
      { de: "Die Würde des Menschen ist unantastbar.", en: "", uk: "Гідність людини недоторканна.", ru: "" },
      { de: "Alle sollen gleich viel Geld haben.", en: "", uk: "Усі повинні мати однакову кількість грошей.", ru: "", correct: true },
      { de: "Jeder Mensch darf seine Meinung sagen.", en: "", uk: "Кожна людина має право висловлювати свою думку.", ru: "" },
      { de: "Alle sind vor dem Gesetz gleich.", en: "", uk: "Усі рівні перед законом.", ru: "" },
    ]
  },
  {
    id: "lid_009",
    lessonId: "k5m1",
    cat: "grundrechte",
    question: { de: "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf …", en: "", uk: "Яке основне право в Німеччині діє лише для іноземців? Основне право на …", ru: "" },
    answers: [
      { de: "Schutz der Familie", en: "", uk: "захист сімʼї", ru: "" },
      { de: "Menschenwürde", en: "", uk: "людську гідність", ru: "" },
      { de: "Asyl", en: "", uk: "притулок", ru: "", correct: true },
      { de: "Meinungsfreiheit", en: "", uk: "свобода слова", ru: "" },
    ]
  },
  {
    id: "lid_010",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Was ist mit dem deutschen Grundgesetz vereinbar?", en: "", uk: "Що сумісне з німецьким Основним законом?", ru: "" },
    answers: [
      { de: "die Prügelstrafe", en: "", uk: "тілесне покарання", ru: "" },
      { de: "die Folter", en: "", uk: "катування", ru: "" },
      { de: "die Todesstrafe", en: "", uk: "смертна кара", ru: "" },
      { de: "die Geldstrafe", en: "", uk: "грошовий штраф", ru: "", correct: true },
    ]
  },
  {
    id: "lid_011",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?", en: "", uk: "Як називається конституція Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "Grundgesetz", en: "", uk: "Основний закон", ru: "", correct: true },
      { de: "Bundesverfassung", en: "", uk: "Федеральна конституція", ru: "" },
      { de: "Gesetzbuch", en: "", uk: "Збірник законів", ru: "" },
      { de: "Verfassungsvertrag", en: "", uk: "Конституційний договір", ru: "" },
    ]
  },
  {
    id: "lid_012",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?", en: "", uk: "Одна партія в Бундестазі Німеччини хоче скасувати свободу преси. Чи це можливо?", ru: "" },
    answers: [
      { de: "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.", en: "", uk: "Так, якщо за це проголосує більше половини депутатів Бундестагу.", ru: "" },
      { de: "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.", en: "", uk: "Так, але для цього за це мають проголосувати дві третини депутатів Бундестагу.", ru: "" },
      { de: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.", en: "", uk: "Ні, тому що свобода преси — це основне право. Її не можна скасувати.", ru: "", correct: true },
      { de: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.", en: "", uk: "Ні, тому що скасувати свободу преси може лише Бундесрат.", ru: "" },
    ]
  },
  {
    id: "lid_013",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Im Parlament steht der Begriff „Opposition“ für …", en: "", uk: "У парламенті поняття «опозиція» означає …", ru: "" },
    answers: [
      { de: "die regierenden Parteien.", en: "", uk: "партії, що перебувають при владі.", ru: "" },
      { de: "die Fraktion mit den meisten Abgeordneten.", en: "", uk: "фракцію з найбільшою кількістю депутатів.", ru: "" },
      { de: "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.", en: "", uk: "усі партії, які змогли подолати 5-відсотковий барʼєр на останніх виборах.", ru: "" },
      { de: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.", en: "", uk: "усіх депутатів, які не належать до правлячої партії/правлячих партій.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_014",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Meinungsfreiheit in Deutschland heißt, dass ich …", en: "", uk: "Свобода слова в Німеччині означає, що я …", ru: "" },
    answers: [
      { de: "Passanten auf der Straße beschimpfen darf.", en: "", uk: "можу ображати перехожих на вулиці.", ru: "" },
      { de: "meine Meinung im Internet äußern kann.", en: "", uk: "можу висловлювати свою думку в інтернеті.", ru: "", correct: true },
      { de: "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.", en: "", uk: "можу публічно носити нацистську символіку, символіку ХАМАС або «Ісламської держави».", ru: "" },
      { de: "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.", en: "", uk: "можу висловлювати свою думку лише доти, доки не суперечу уряду.", ru: "" },
    ]
  },
  {
    id: "lid_015",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Was verbietet das deutsche Grundgesetz?", en: "", uk: "Що забороняє німецький Основний закон?", ru: "" },
    answers: [
      { de: "Militärdienst", en: "", uk: "військову службу", ru: "" },
      { de: "Zwangsarbeit", en: "", uk: "примусову працю", ru: "", correct: true },
      { de: "freie Berufswahl", en: "", uk: "вільний вибір професії", ru: "" },
      { de: "Arbeit im Ausland", en: "", uk: "роботу за кордоном", ru: "" },
    ]
  },
  {
    id: "lid_016",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?", en: "", uk: "Коли в Німеччині обмежується свобода слова?", ru: "" },
    answers: [
      { de: "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen", en: "", uk: "при публічному поширенні неправдивих тверджень про окремих осіб", ru: "", correct: true },
      { de: "bei Meinungsäußerungen über die Bundesregierung", en: "", uk: "при висловлюваннях про федеральний уряд", ru: "" },
      { de: "bei Diskussionen über Religionen", en: "", uk: "при дискусіях про релігії", ru: "" },
      { de: "bei Kritik am Staat", en: "", uk: "при критиці держави", ru: "" },
    ]
  },
  {
    id: "lid_017",
    lessonId: "k5m2",
    cat: "grundrechte",
    question: { de: "Die deutschen Gesetze verbieten …", en: "", uk: "Німецькі закони забороняють …", ru: "" },
    answers: [
      { de: "Meinungsfreiheit der Einwohnerinnen und Einwohner.", en: "", uk: "свободу слова жителів.", ru: "" },
      { de: "Petitionen der Bürgerinnen und Bürger.", en: "", uk: "петиції громадян.", ru: "" },
      { de: "Versammlungsfreiheit der Einwohnerinnen und Einwohner.", en: "", uk: "свободу зібрань жителів.", ru: "" },
      { de: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.", en: "", uk: "нерівне ставлення держави до громадян.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_018",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?", en: "", uk: "Яке основне право гарантовано статтею 1 Основного закону Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "die Unantastbarkeit der Menschenwürde", en: "", uk: "недоторканність людської гідності", ru: "", correct: true },
      { de: "das Recht auf Leben", en: "", uk: "право на життя", ru: "" },
      { de: "Religionsfreiheit", en: "", uk: "свобода віросповідання", ru: "" },
      { de: "Meinungsfreiheit", en: "", uk: "свобода слова", ru: "" },
    ]
  },
  {
    id: "lid_019",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?", en: "", uk: "Що розуміють під правом «свободи пересування» в Німеччині?", ru: "" },
    answers: [
      { de: "Man darf sich seinen Wohnort selbst aussuchen.", en: "", uk: "Можна самостійно обирати місце проживання.", ru: "", correct: true },
      { de: "Man kann seinen Beruf wechseln.", en: "", uk: "Можна змінювати професію.", ru: "" },
      { de: "Man darf sich für eine andere Religion entscheiden.", en: "", uk: "Можна обирати іншу релігію.", ru: "" },
      { de: "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.", en: "", uk: "Можна зʼявлятися на людях лише в легкому одязі.", ru: "" },
    ]
  },
  {
    id: "lid_020",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann …", en: "", uk: "Партія в Німеччині ставить собі за мету встановити диктатуру. Тоді вона …", ru: "" },
    answers: [
      { de: "tolerant.", en: "", uk: "толерантна.", ru: "" },
      { de: "rechtsstaatlich orientiert.", en: "", uk: "орієнтована на правову державу.", ru: "" },
      { de: "gesetzestreu.", en: "", uk: "законослухняна.", ru: "" },
      { de: "verfassungswidrig.", en: "", uk: "антиконституційна.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_021",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welches ist das Wappen der Bundesrepublik Deutschland?", en: "", uk: "Який герб Федеративної Республіки Німеччина?", ru: "" },
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
    question: { de: "Was für eine Staatsform hat Deutschland?", en: "", uk: "Яка форма держави в Німеччині?", ru: "" },
    answers: [
      { de: "Monarchie", en: "", uk: "монархія", ru: "" },
      { de: "Diktatur", en: "", uk: "диктатура", ru: "" },
      { de: "Republik", en: "", uk: "республіка", ru: "", correct: true },
      { de: "Fürstentum", en: "", uk: "князівство", ru: "" },
    ]
  },
  {
    id: "lid_023",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "In Deutschland sind die meisten Erwerbstätigen …", en: "", uk: "У Німеччині більшість працюючих …", ru: "" },
    answers: [
      { de: "in kleinen Familienunternehmen beschäftigt.", en: "", uk: "зайняті в невеликих сімейних підприємствах.", ru: "" },
      { de: "ehrenamtlich für ein Bundesland tätig.", en: "", uk: "працюють на громадських засадах для федеральної землі.", ru: "" },
      { de: "selbstständig mit einer eigenen Firma tätig.", en: "", uk: "працюють самозайнятими у власній фірмі.", ru: "" },
      { de: "bei einer Firma oder Behörde beschäftigt.", en: "", uk: "працюють у фірмі чи в органі влади.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_024",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?", en: "", uk: "Скільки федеральних земель налічує Федеративна Республіка Німеччина?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "15", en: "", uk: "15", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "17", en: "", uk: "17", ru: "" },
    ]
  },
  {
    id: "lid_025",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Was ist kein Bundesland der Bundesrepublik Deutschland?", en: "", uk: "Що не є федеральною землею Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "Elsass-Lothringen", en: "", uk: "Ельзас-Лотарингія", ru: "", correct: true },
      { de: "Nordrhein-Westfalen", en: "", uk: "Північний Рейн-Вестфалія", ru: "" },
      { de: "Mecklenburg-Vorpommern", en: "", uk: "Мекленбург-Передня Померанія", ru: "" },
      { de: "Sachsen-Anhalt", en: "", uk: "Саксонія-Ангальт", ru: "" },
    ]
  },
  {
    id: "lid_026",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist …", en: "", uk: "Німеччина — це …", ru: "" },
    answers: [
      { de: "eine kommunistische Republik.", en: "", uk: "комуністична республіка.", ru: "" },
      { de: "ein demokratischer und sozialer Bundesstaat.", en: "", uk: "демократична і соціальна федеративна держава.", ru: "", correct: true },
      { de: "eine kapitalistische und soziale Monarchie.", en: "", uk: "капіталістична і соціальна монархія.", ru: "" },
      { de: "ein sozialer und sozialistischer Bundesstaat.", en: "", uk: "соціальна і соціалістична федеративна держава.", ru: "" },
    ]
  },
  {
    id: "lid_027",
    lessonId: "k2m1",
    cat: "prinzipien",
    question: { de: "Deutschland ist …", en: "", uk: "Німеччина — це …", ru: "" },
    answers: [
      { de: "ein sozialistischer Staat.", en: "", uk: "соціалістична держава.", ru: "" },
      { de: "ein Bundesstaat.", en: "", uk: "федеративна держава.", ru: "", correct: true },
      { de: "eine Diktatur.", en: "", uk: "диктатура.", ru: "" },
      { de: "eine Monarchie.", en: "", uk: "монархія.", ru: "" },
    ]
  },
  {
    id: "lid_028",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?", en: "", uk: "Хто обирає в Німеччині депутатів до Бундестагу?", ru: "" },
    answers: [
      { de: "das Militär", en: "", uk: "військові", ru: "" },
      { de: "die Wirtschaft", en: "", uk: "економіка", ru: "" },
      { de: "das wahlberechtigte Volk", en: "", uk: "народ, який має право голосу", ru: "", correct: true },
      { de: "die Verwaltung", en: "", uk: "адміністрація", ru: "" },
    ]
  },
  {
    id: "lid_029",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?", en: "", uk: "Яка тварина є геральдичним символом Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "Löwe", en: "", uk: "лев", ru: "" },
      { de: "Adler", en: "", uk: "орел", ru: "", correct: true },
      { de: "Bär", en: "", uk: "ведмідь", ru: "" },
      { de: "Pferd", en: "", uk: "кінь", ru: "" },
    ]
  },
  {
    id: "lid_030",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist kein Merkmal unserer Demokratie?", en: "", uk: "Що не є ознакою нашої демократії?", ru: "" },
    answers: [
      { de: "regelmäßige Wahlen", en: "", uk: "регулярні вибори", ru: "" },
      { de: "Pressezensur", en: "", uk: "цензура преси", ru: "", correct: true },
      { de: "Meinungsfreiheit", en: "", uk: "свобода слова", ru: "" },
      { de: "verschiedene Parteien", en: "", uk: "різні партії", ru: "" },
    ]
  },
  {
    id: "lid_031",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …", en: "", uk: "Співпрацю партій для формування уряду в Німеччині називають …", ru: "" },
    answers: [
      { de: "Einheit.", en: "", uk: "єдністю.", ru: "" },
      { de: "Koalition.", en: "", uk: "коаліцією.", ru: "", correct: true },
      { de: "Ministerium.", en: "", uk: "міністерством.", ru: "" },
      { de: "Fraktion.", en: "", uk: "фракцією.", ru: "" },
    ]
  },
  {
    id: "lid_032",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist keine staatliche Gewalt in Deutschland?", en: "", uk: "Що не є державною владою в Німеччині?", ru: "" },
    answers: [
      { de: "Gesetzgebung", en: "", uk: "законодавство", ru: "" },
      { de: "Regierung", en: "", uk: "уряд", ru: "" },
      { de: "Presse", en: "", uk: "преса", ru: "", correct: true },
      { de: "Rechtsprechung", en: "", uk: "правосуддя", ru: "" },
    ]
  },
  {
    id: "lid_033",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Welche Aussage ist richtig? In Deutschland …", en: "", uk: "Яке твердження правильне? У Німеччині …", ru: "" },
    answers: [
      { de: "sind Staat und Religionsgemeinschaften voneinander getrennt.", en: "", uk: "держава і релігійні обʼєднання відокремлені одне від одного.", ru: "", correct: true },
      { de: "bilden die Religionsgemeinschaften den Staat.", en: "", uk: "релігійні обʼєднання утворюють державу.", ru: "" },
      { de: "ist der Staat abhängig von den Religionsgemeinschaften.", en: "", uk: "держава залежить від релігійних обʼєднань.", ru: "" },
      { de: "bilden Staat und Religionsgemeinschaften eine Einheit.", en: "", uk: "держава і релігійні обʼєднання становлять єдине ціле.", ru: "" },
    ]
  },
  {
    id: "lid_034",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was ist Deutschland nicht?", en: "", uk: "Чим Німеччина не є?", ru: "" },
    answers: [
      { de: "eine Demokratie", en: "", uk: "демократією", ru: "" },
      { de: "ein Rechtsstaat", en: "", uk: "правовою державою", ru: "" },
      { de: "eine Monarchie", en: "", uk: "монархією", ru: "", correct: true },
      { de: "ein Sozialstaat", en: "", uk: "соціальною державою", ru: "" },
    ]
  },
  {
    id: "lid_035",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Womit finanziert der deutsche Staat die Sozialversicherung?", en: "", uk: "За рахунок чого німецька держава фінансує соціальне страхування?", ru: "" },
    answers: [
      { de: "Kirchensteuer", en: "", uk: "церковного податку", ru: "" },
      { de: "Sozialabgaben", en: "", uk: "соціальних внесків", ru: "", correct: true },
      { de: "Spendengeldern", en: "", uk: "пожертвувань", ru: "" },
      { de: "Vereinsbeiträgen", en: "", uk: "членських внесків обʼєднань", ru: "" },
    ]
  },
  {
    id: "lid_036",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?", en: "", uk: "Який захід створює в Німеччині соціальну безпеку?", ru: "" },
    answers: [
      { de: "die Krankenversicherung", en: "", uk: "медичне страхування", ru: "", correct: true },
      { de: "die Autoversicherung", en: "", uk: "автострахування", ru: "" },
      { de: "die Gebäudeversicherung", en: "", uk: "страхування будівель", ru: "" },
      { de: "die Haftpflichtversicherung", en: "", uk: "страхування цивільної відповідальності", ru: "" },
    ]
  },
  {
    id: "lid_037",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?", en: "", uk: "Як називають керівників урядів більшості федеральних земель у Німеччині?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Senatorin/Senator", en: "", uk: "сенатор/сенаторка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_038",
    lessonId: "k3m1",
    cat: "foederalismus",
    question: { de: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …", en: "", uk: "Федеративна Республіка Німеччина — це демократична і соціальна …", ru: "" },
    answers: [
      { de: "Staatenverbund.", en: "", uk: "обʼєднання держав.", ru: "" },
      { de: "Bundesstaat.", en: "", uk: "федеративна держава.", ru: "", correct: true },
      { de: "Staatenbund.", en: "", uk: "конфедерація.", ru: "" },
      { de: "Zentralstaat.", en: "", uk: "унітарна держава.", ru: "" },
    ]
  },
  {
    id: "lid_039",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Was hat jedes deutsche Bundesland?", en: "", uk: "Що має кожна німецька федеральна земля?", ru: "" },
    answers: [
      { de: "eine eigene Außenministerin/einen eigenen Außenminister", en: "", uk: "власного міністра/власну міністерку закордонних справ", ru: "" },
      { de: "eine eigene Währung", en: "", uk: "власну валюту", ru: "" },
      { de: "eine eigene Armee", en: "", uk: "власну армію", ru: "" },
      { de: "eine eigene Regierung", en: "", uk: "власний уряд", ru: "", correct: true },
    ]
  },
  {
    id: "lid_040",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Mit welchen Worten beginnt die deutsche Nationalhymne?", en: "", uk: "Якими словами починається німецький національний гімн?", ru: "" },
    answers: [
      { de: "Völker, hört die Signale …", en: "", uk: "«Народи, чуйте сигнали …»", ru: "" },
      { de: "Einigkeit und Recht und Freiheit …", en: "", uk: "«Єдність, право і свобода …»", ru: "", correct: true },
      { de: "Freude schöner Götterfunken …", en: "", uk: "«Радість, іскро богів прекрасна …»", ru: "" },
      { de: "Deutschland einig Vaterland …", en: "", uk: "«Німеччино, єдина вітчизно …»", ru: "" },
    ]
  },
  {
    id: "lid_041",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Warum gibt es in einer Demokratie mehr als eine Partei?", en: "", uk: "Чому в демократії існує більше ніж одна партія?", ru: "" },
    answers: [
      { de: "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden", en: "", uk: "тому що так представлені різні думки громадян", ru: "", correct: true },
      { de: "damit Bestechung in der Politik begrenzt wird", en: "", uk: "щоб обмежити корупцію в політиці", ru: "" },
      { de: "um politische Demonstrationen zu verhindern", en: "", uk: "щоб запобігти політичним демонстраціям", ru: "" },
      { de: "um wirtschaftlichen Wettbewerb anzuregen", en: "", uk: "щоб стимулювати економічну конкуренцію", ru: "" },
    ]
  },
  {
    id: "lid_042",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wer beschließt in Deutschland ein neues Gesetz?", en: "", uk: "Хто ухвалює в Німеччині новий закон?", ru: "" },
    answers: [
      { de: "die Regierung", en: "", uk: "уряд", ru: "" },
      { de: "das Parlament", en: "", uk: "парламент", ru: "", correct: true },
      { de: "die Gerichte", en: "", uk: "суди", ru: "" },
      { de: "die Polizei", en: "", uk: "поліція", ru: "" },
    ]
  },
  {
    id: "lid_043",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wann kann in Deutschland eine Partei verboten werden?", en: "", uk: "Коли в Німеччині партію можна заборонити?", ru: "" },
    answers: [
      { de: "wenn ihr Wahlkampf zu teuer ist", en: "", uk: "якщо її виборча кампанія надто дорога", ru: "" },
      { de: "wenn sie gegen die Verfassung kämpft", en: "", uk: "якщо вона виступає проти конституції", ru: "", correct: true },
      { de: "wenn sie Kritik am Staatsoberhaupt äußert", en: "", uk: "якщо вона критикує главу держави", ru: "" },
      { de: "wenn ihr Programm eine neue Richtung vorschlägt", en: "", uk: "якщо її програма пропонує новий напрям", ru: "" },
    ]
  },
  {
    id: "lid_044",
    lessonId: "k1m1",
    cat: "organe",
    question: { de: "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?", en: "", uk: "Кого громадянин/громадянка в Німеччині не може обирати безпосередньо?", ru: "" },
    answers: [
      { de: "Abgeordnete des EU-Parlaments", en: "", uk: "депутатів Європейського парламенту", ru: "" },
      { de: "Die Bundespräsidentin/den Bundespräsidenten", en: "", uk: "федерального президента/федеральну президентку", ru: "", correct: true },
      { de: "Landtagsabgeordnete", en: "", uk: "депутатів ландтагу", ru: "" },
      { de: "Bundestagsabgeordnete", en: "", uk: "депутатів Бундестагу", ru: "" },
    ]
  },
  {
    id: "lid_045",
    lessonId: "k4m1",
    cat: "sozialsystem",
    question: { de: "Zu welcher Versicherung gehört die Pflegeversicherung?", en: "", uk: "До якого виду страхування належить страхування на випадок потреби в догляді?", ru: "" },
    answers: [
      { de: "Sozialversicherung", en: "", uk: "соціальне страхування", ru: "", correct: true },
      { de: "Unfallversicherung", en: "", uk: "страхування від нещасних випадків", ru: "" },
      { de: "Hausratsversicherung", en: "", uk: "страхування домашнього майна", ru: "" },
      { de: "Haftpflicht- und Feuerversicherung", en: "", uk: "страхування цивільної відповідальності та від пожежі", ru: "" },
    ]
  },
  {
    id: "lid_046",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?", en: "", uk: "Німецька держава має багато завдань. Яке завдання до них належить?", ru: "" },
    answers: [
      { de: "Er baut Straßen und Schulen.", en: "", uk: "Вона будує дороги і школи.", ru: "", correct: true },
      { de: "Er verkauft Lebensmittel und Kleidung.", en: "", uk: "Вона продає продукти харчування та одяг.", ru: "" },
      { de: "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.", en: "", uk: "Вона безкоштовно забезпечує всіх жителів газетами.", ru: "" },
      { de: "Er produziert Autos und Busse.", en: "", uk: "Вона виробляє автомобілі й автобуси.", ru: "" },
    ]
  },
  {
    id: "lid_047",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?", en: "", uk: "Німецька держава має багато завдань. Яке завдання до них не належить?", ru: "" },
    answers: [
      { de: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.", en: "", uk: "Вона оплачує відпустки всім громадянам.", ru: "", correct: true },
      { de: "Er zahlt Kindergeld.", en: "", uk: "Вона виплачує допомогу на дітей.", ru: "" },
      { de: "Er unterstützt Museen.", en: "", uk: "Вона підтримує музеї.", ru: "" },
      { de: "Er fördert Sportlerinnen und Sportler.", en: "", uk: "Вона підтримує спортсменів і спортсменок.", ru: "" },
    ]
  },
  {
    id: "lid_048",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?", en: "", uk: "Який орган не належить до конституційних органів Німеччини?", ru: "" },
    answers: [
      { de: "der Bundesrat", en: "", uk: "Бундесрат", ru: "" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "", uk: "федеральний президент/федеральна президентка", ru: "" },
      { de: "die Bürgerversammlung", en: "", uk: "збори громадян", ru: "", correct: true },
      { de: "die Regierung", en: "", uk: "уряд", ru: "" },
    ]
  },
  {
    id: "lid_049",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Wer bestimmt in Deutschland die Schulpolitik?", en: "", uk: "Хто визначає в Німеччині шкільну політику?", ru: "" },
    answers: [
      { de: "die Lehrer und Lehrerinnen", en: "", uk: "вчителі й вчительки", ru: "" },
      { de: "die Bundesländer", en: "", uk: "федеральні землі", ru: "", correct: true },
      { de: "das Familienministerium", en: "", uk: "міністерство у справах сімʼї", ru: "" },
      { de: "die Universitäten", en: "", uk: "університети", ru: "" },
    ]
  },
  {
    id: "lid_050",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Die Wirtschaftsform in Deutschland nennt man …", en: "", uk: "Економічну систему Німеччини називають …", ru: "" },
    answers: [
      { de: "freie Zentralwirtschaft.", en: "", uk: "вільною централізованою економікою.", ru: "" },
      { de: "soziale Marktwirtschaft.", en: "", uk: "соціальною ринковою економікою.", ru: "", correct: true },
      { de: "gelenkte Zentralwirtschaft.", en: "", uk: "регульованою централізованою економікою.", ru: "" },
      { de: "Planwirtschaft.", en: "", uk: "плановою економікою.", ru: "" },
    ]
  },
  {
    id: "lid_051",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …", en: "", uk: "До демократичної правової держави не належить те, що …", ru: "" },
    answers: [
      { de: "Menschen sich kritisch über die Regierung äußern können.", en: "", uk: "люди можуть критично висловлюватися про уряд.", ru: "" },
      { de: "Bürger friedlich demonstrieren gehen dürfen.", en: "", uk: "громадяни можуть мирно демонструвати.", ru: "" },
      { de: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.", en: "", uk: "людей без причини заарештовує приватна поліція.", ru: "", correct: true },
      { de: "jemand ein Verbrechen begeht und deshalb verhaftet wird.", en: "", uk: "хтось учиняє злочин і за це його заарештовують.", ru: "" },
    ]
  },
  {
    id: "lid_052",
    lessonId: "k2m2",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Volkssouveränität“? Alle Staatsgewalt geht vom ...", en: "", uk: "Що означає «народний суверенітет»? Уся державна влада виходить від …", ru: "" },
    answers: [
      { de: "Volke aus.", en: "", uk: "народу.", ru: "", correct: true },
      { de: "Bundestag aus.", en: "", uk: "Бундестагу.", ru: "" },
      { de: "preußischen König aus.", en: "", uk: "прусського короля.", ru: "" },
      { de: "Bundesverfassungsgericht aus.", en: "", uk: "Федерального конституційного суду.", ru: "" },
    ]
  },
  {
    id: "lid_053",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Rechtsstaat“ in Deutschland?", en: "", uk: "Що означає «правова держава» в Німеччині?", ru: "" },
    answers: [
      { de: "Der Staat hat Recht.", en: "", uk: "Держава має рацію.", ru: "" },
      { de: "Es gibt nur rechte Parteien.", en: "", uk: "Існують лише праві партії.", ru: "" },
      { de: "Die Bürgerinnen und Bürger entscheiden über Gesetze.", en: "", uk: "Громадяни самі вирішують щодо законів.", ru: "" },
      { de: "Der Staat muss die Gesetze einhalten.", en: "", uk: "Держава зобовʼязана дотримуватися законів.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_054",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was ist keine staatliche Gewalt in Deutschland?", en: "", uk: "Що не є державною владою в Німеччині?", ru: "" },
    answers: [
      { de: "Legislative", en: "", uk: "законодавча влада", ru: "" },
      { de: "Judikative", en: "", uk: "судова влада", ru: "" },
      { de: "Exekutive", en: "", uk: "виконавча влада", ru: "" },
      { de: "Direktive", en: "", uk: "директива", ru: "", correct: true },
    ]
  },
  {
    id: "lid_055",
    lessonId: "k1m2",
    cat: "organe",
    img: "lid_055.png",
    imgCredit: "© Deutscher Bundestag/Achim Melde",
    question: { de: "Was zeigt dieses Bild?", en: "", uk: "Що показує це зображення?", ru: "" },
    answers: [
      { de: "den Bundestagssitz in Berlin", en: "", uk: "будівлю Бундестагу в Берліні", ru: "", correct: true },
      { de: "das Bundesverfassungsgericht in Karlsruhe", en: "", uk: "Федеральний конституційний суд у Карлсруе", ru: "" },
      { de: "das Bundesratsgebäude in Berlin", en: "", uk: "будівлю Бундесрату в Берліні", ru: "" },
      { de: "das Bundeskanzleramt in Berlin", en: "", uk: "Федеральну канцелярію в Берліні", ru: "" },
    ]
  },
  {
    id: "lid_056",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?", en: "", uk: "Яке відомство в Німеччині належить до адміністрації громади?", ru: "" },
    answers: [
      { de: "Pfarramt", en: "", uk: "парафіяльна канцелярія", ru: "" },
      { de: "Ordnungsamt", en: "", uk: "відділ громадського порядку", ru: "", correct: true },
      { de: "Finanzamt", en: "", uk: "податкова інспекція", ru: "" },
      { de: "Auswärtiges Amt", en: "", uk: "Міністерство закордонних справ", ru: "" },
    ]
  },
  {
    id: "lid_057",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?", en: "", uk: "Кого найчастіше обирають президентом/президенткою Бундестагу Німеччини?", ru: "" },
    answers: [
      { de: "die/der älteste Abgeordnete im Parlament", en: "", uk: "найстаршого/найстаршу депутата в парламенті", ru: "" },
      { de: "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes", en: "", uk: "міністра-президента/міністра-президентку найбільшої федеральної землі", ru: "" },
      { de: "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler", en: "", uk: "колишнього федерального канцлера/колишню федеральну канцлерку", ru: "" },
      { de: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion", en: "", uk: "депутата/депутатку від найсильнішої фракції", ru: "", correct: true },
    ]
  },
  {
    id: "lid_058",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?", en: "", uk: "Хто призначає в Німеччині міністрів/міністерок федерального уряду?", ru: "" },
    answers: [
      { de: "die Präsidentin/der Präsident des Bundesverfassungsgerichtes", en: "", uk: "президент/президентка Федерального конституційного суду", ru: "" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "", uk: "федеральний президент/федеральна президентка", ru: "", correct: true },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "", uk: "президент/президентка Бундесрату", ru: "" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "", uk: "президент/президентка Бундестагу", ru: "" },
    ]
  },
  {
    id: "lid_059",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?", en: "", uk: "Скільки років тому вперше зʼявилася єврейська громада на території нинішньої Німеччини?", ru: "" },
    answers: [
      { de: "vor etwa 300 Jahren", en: "", uk: "приблизно 300 років тому", ru: "" },
      { de: "vor etwa 700 Jahren", en: "", uk: "приблизно 700 років тому", ru: "" },
      { de: "vor etwa 1150 Jahren", en: "", uk: "приблизно 1150 років тому", ru: "" },
      { de: "vor etwa 1700 Jahren", en: "", uk: "приблизно 1700 років тому", ru: "", correct: true },
    ]
  },
  {
    id: "lid_060",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "In Deutschland gehören der Bundestag und der Bundesrat zur …", en: "", uk: "У Німеччині Бундестаг і Бундесрат належать до …", ru: "" },
    answers: [
      { de: "Exekutive.", en: "", uk: "виконавчої влади.", ru: "" },
      { de: "Legislative.", en: "", uk: "законодавчої влади.", ru: "", correct: true },
      { de: "Direktive.", en: "", uk: "директиви.", ru: "" },
      { de: "Judikative.", en: "", uk: "судової влади.", ru: "" },
    ]
  },
  {
    id: "lid_061",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was bedeutet „Volkssouveränität“?", en: "", uk: "Що означає «народний суверенітет»?", ru: "" },
    answers: [
      { de: "Die Königin/der König herrscht über das Volk.", en: "", uk: "Король/королева править народом.", ru: "" },
      { de: "Das Bundesverfassungsgericht steht über der Verfassung.", en: "", uk: "Федеральний конституційний суд стоїть над конституцією.", ru: "" },
      { de: "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.", en: "", uk: "Групи інтересів здійснюють суверенітет разом з урядом.", ru: "" },
      { de: "Die Staatsgewalt geht vom Volke aus.", en: "", uk: "Державна влада виходить від народу.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_062",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …", en: "", uk: "Коли обирають парламент німецької федеральної землі, це називають …", ru: "" },
    answers: [
      { de: "Kommunalwahl", en: "", uk: "муніципальними виборами", ru: "" },
      { de: "Landtagswahl", en: "", uk: "виборами до ландтагу", ru: "", correct: true },
      { de: "Europawahl", en: "", uk: "виборами до Європейського парламенту", ru: "" },
      { de: "Bundestagswahl", en: "", uk: "виборами до Бундестагу", ru: "" },
    ]
  },
  {
    id: "lid_063",
    lessonId: "k2m3",
    cat: "prinzipien",
    question: { de: "Was gehört in Deutschland nicht zur Exekutive?", en: "", uk: "Що в Німеччині не належить до виконавчої влади?", ru: "" },
    answers: [
      { de: "die Polizei", en: "", uk: "поліція", ru: "" },
      { de: "die Gerichte", en: "", uk: "суди", ru: "", correct: true },
      { de: "das Finanzamt", en: "", uk: "податкова інспекція", ru: "" },
      { de: "die Ministerien", en: "", uk: "міністерства", ru: "" },
    ]
  },
  {
    id: "lid_064",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Die Bundesrepublik Deutschland ist heute gegliedert in …", en: "", uk: "Федеративна Республіка Німеччина сьогодні поділяється на …", ru: "" },
    answers: [
      { de: "vier Besatzungszonen.", en: "", uk: "чотири окупаційні зони.", ru: "" },
      { de: "einen Oststaat und einen Weststaat.", en: "", uk: "східну і західну державу.", ru: "" },
      { de: "16 Kantone.", en: "", uk: "16 кантонів.", ru: "" },
      { de: "Bund, Länder und Kommunen.", en: "", uk: "федерацію, землі та громади.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_065",
    lessonId: "k1m2",
    cat: "organe",
    question: { de: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …", en: "", uk: "До завдань Бундестагу Німеччини не належить …", ru: "" },
    answers: [
      { de: "Gesetze zu entwerfen.", en: "", uk: "розробляти закони.", ru: "" },
      { de: "die Bundesregierung zu kontrollieren.", en: "", uk: "контролювати федеральний уряд.", ru: "" },
      { de: "die Bundeskanzlerin/den Bundeskanzler zu wählen.", en: "", uk: "обирати федерального канцлера/федеральну канцлерку.", ru: "" },
      { de: "das Bundeskabinett zu bilden.", en: "", uk: "формувати федеральний кабінет.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_066",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?", en: "", uk: "У яких містах Німеччини найбільші єврейські громади?", ru: "" },
    answers: [
      { de: "Berlin und München", en: "", uk: "Берлін і Мюнхен", ru: "", correct: true },
      { de: "Hamburg und Essen", en: "", uk: "Гамбург і Ессен", ru: "" },
      { de: "Nürnberg und Stuttgart", en: "", uk: "Нюрнберг і Штутгарт", ru: "" },
      { de: "Worms und Speyer", en: "", uk: "Вормс і Шпеєр", ru: "" },
    ]
  },
  {
    id: "lid_067",
    lessonId: "k3m2",
    cat: "foederalismus",
    question: { de: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?", en: "", uk: "Що в Німеччині є переважно завданням федеральних земель?", ru: "" },
    answers: [
      { de: "Verteidigungspolitik", en: "", uk: "політика оборони", ru: "" },
      { de: "Außenpolitik", en: "", uk: "зовнішня політика", ru: "" },
      { de: "Wirtschaftspolitik", en: "", uk: "економічна політика", ru: "" },
      { de: "Schulpolitik", en: "", uk: "шкільна політика", ru: "", correct: true },
    ]
  },
  {
    id: "lid_068",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Warum kontrolliert der Staat in Deutschland das Schulwesen?", en: "", uk: "Чому держава в Німеччині контролює шкільну систему?", ru: "" },
    answers: [
      { de: "weil es in Deutschland nur staatliche Schulen gibt", en: "", uk: "тому що в Німеччині існують лише державні школи", ru: "" },
      { de: "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen", en: "", uk: "тому що всі учні та учениці повинні отримати шкільний атестат", ru: "" },
      { de: "weil es in den Bundesländern verschiedene Schulen gibt", en: "", uk: "тому що у федеральних землях існують різні школи", ru: "" },
      { de: "weil es nach dem Grundgesetz seine Aufgabe ist", en: "", uk: "тому що відповідно до Основного закону це її завдання", ru: "", correct: true },
    ]
  },
  {
    id: "lid_069",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?", en: "", uk: "Федеративна Республіка Німеччина має триступеневу структуру управління. Як називається найнижчий політичний рівень?", ru: "" },
    answers: [
      { de: "Stadträte", en: "", uk: "міські ради", ru: "" },
      { de: "Landräte", en: "", uk: "ландрати", ru: "" },
      { de: "Gemeinden", en: "", uk: "громади", ru: "", correct: true },
      { de: "Bezirksämter", en: "", uk: "районні управління", ru: "" },
    ]
  },
  {
    id: "lid_070",
    lessonId: "k1m2",
    cat: "organe",
    img: "lid_070.png",
    imgCredit: "© Bundesregierung/Engelbert Reineke",
    question: { de: "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?", en: "", uk: "Федеральний президент Німеччини Густав Гайнеман вручає Гельмуту Шмідту в 1974 році грамоту про призначення федеральним канцлером Німеччини. Що належить до завдань федерального президента/федеральної президентки Німеччини?", ru: "" },
    answers: [
      { de: "Sie/Er führt die Regierungsgeschäfte.", en: "", uk: "Він/вона керує урядовими справами.", ru: "" },
      { de: "Sie/Er kontrolliert die Regierungspartei.", en: "", uk: "Він/вона контролює правлячу партію.", ru: "" },
      { de: "Sie/Er wählt die Ministerinnen/Minister aus.", en: "", uk: "Він/вона добирає міністрів/міністерок.", ru: "" },
      { de: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.", en: "", uk: "Він/вона пропонує кандидатуру канцлера/канцлерки для обрання.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_071",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf? Am häufigsten ist sie/er …", en: "", uk: "Де найчастіше перебуває федеральний канцлер/федеральна канцлерка Німеччини? Найчастіше він/вона …", ru: "" },
    answers: [
      { de: "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "", uk: "у Бонні, тому що там розташовані Федеральна канцелярія і Бундестаг.", ru: "" },
      { de: "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.", en: "", uk: "у замку Мезеберг, гостьовому будинку федерального уряду, щоб приймати державних гостей.", ru: "" },
      { de: "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.", en: "", uk: "у палаці Бельвю, резиденції федерального президента/федеральної президентки, щоб приймати державних гостей.", ru: "" },
      { de: "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.", en: "", uk: "у Берліні, тому що там розташовані Федеральна канцелярія і Бундестаг.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_072",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?", en: "", uk: "Як звати нинішнього федерального канцлера/нинішню федеральну канцлерку Німеччини?", ru: "" },
    answers: [
      { de: "Gerhard Schröder", en: "", uk: "Герхард Шредер", ru: "" },
      { de: "Angela Merkel", en: "", uk: "Ангела Меркель", ru: "" },
      { de: "Ursula von der Leyen", en: "", uk: "Урсула фон дер Ляєн", ru: "" },
      { de: "Friedrich Merz", en: "", uk: "Фрідріх Мерц", ru: "", correct: true },
    ]
  },
  {
    id: "lid_073",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …", en: "", uk: "Дві найбільші фракції в Бундестазі Німеччини наразі називаються …", ru: "" },
    answers: [
      { de: "CDU/CSU und AfD.", en: "", uk: "CDU/CSU і AfD.", ru: "", correct: true },
      { de: "Die Linke und Bündnis 90/Die Grünen.", en: "", uk: "«Ліві» і «Союз 90/Зелені».", ru: "" },
      { de: "Bündnis 90/Die Grünen und SPD.", en: "", uk: "«Союз 90/Зелені» і SPD.", ru: "" },
      { de: "Die Linke und CDU/CSU.", en: "", uk: "«Ліві» і CDU/CSU.", ru: "" },
    ]
  },
  {
    id: "lid_074",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt das Parlament für ganz Deutschland?", en: "", uk: "Як називається парламент для всієї Німеччини?", ru: "" },
    answers: [
      { de: "Bundesversammlung", en: "", uk: "Федеральні збори", ru: "" },
      { de: "Volkskammer", en: "", uk: "Народна палата", ru: "" },
      { de: "Bundestag", en: "", uk: "Бундестаг", ru: "", correct: true },
      { de: "Bundesgerichtshof", en: "", uk: "Федеральний верховний суд", ru: "" },
    ]
  },
  {
    id: "lid_075",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wie heißt Deutschlands heutiges Staatsoberhaupt?", en: "", uk: "Як звати нинішнього главу німецької держави?", ru: "" },
    answers: [
      { de: "Frank-Walter Steinmeier", en: "", uk: "Франк-Вальтер Штайнмаєр", ru: "", correct: true },
      { de: "Bärbel Bas", en: "", uk: "Бербель Бас", ru: "" },
      { de: "Bodo Ramelow", en: "", uk: "Бодо Рамелов", ru: "" },
      { de: "Joachim Gauck", en: "", uk: "Йоахім Ґаук", ru: "" },
    ]
  },
  {
    id: "lid_076",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung CDU in Deutschland?", en: "", uk: "Що означає абревіатура CDU в Німеччині?", ru: "" },
    answers: [
      { de: "Christliche Deutsche Union", en: "", uk: "Християнський німецький союз", ru: "" },
      { de: "Club Deutscher Unternehmer", en: "", uk: "Клуб німецьких підприємців", ru: "" },
      { de: "Christlicher Deutscher Umweltschutz", en: "", uk: "Християнський німецький захист довкілля", ru: "" },
      { de: "Christlich Demokratische Union", en: "", uk: "Християнсько-демократичний союз", ru: "", correct: true },
    ]
  },
  {
    id: "lid_077",
    lessonId: "k8m1",
    cat: "staatsaufgaben",
    question: { de: "Was ist die Bundeswehr?", en: "", uk: "Що таке Бундесвер?", ru: "" },
    answers: [
      { de: "die deutsche Polizei", en: "", uk: "німецька поліція", ru: "" },
      { de: "ein deutscher Hafen", en: "", uk: "німецький порт", ru: "" },
      { de: "eine deutsche Bürgerinitiative", en: "", uk: "німецька громадська ініціатива", ru: "" },
      { de: "die deutsche Armee", en: "", uk: "німецька армія", ru: "", correct: true },
    ]
  },
  {
    id: "lid_078",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung SPD?", en: "", uk: "Що означає абревіатура SPD?", ru: "" },
    answers: [
      { de: "Sozialistische Partei Deutschlands", en: "", uk: "Соціалістична партія Німеччини", ru: "" },
      { de: "Sozialpolitische Partei Deutschlands", en: "", uk: "Соціально-політична партія Німеччини", ru: "" },
      { de: "Sozialdemokratische Partei Deutschlands", en: "", uk: "Соціал-демократична партія Німеччини", ru: "", correct: true },
      { de: "Sozialgerechte Partei Deutschlands", en: "", uk: "Соціально справедлива партія Німеччини", ru: "" },
    ]
  },
  {
    id: "lid_079",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung FDP in Deutschland?", en: "", uk: "Що означає абревіатура FDP в Німеччині?", ru: "" },
    answers: [
      { de: "Friedliche Demonstrative Partei", en: "", uk: "Мирна демонстративна партія", ru: "" },
      { de: "Freie Deutschland Partei", en: "", uk: "Вільна партія Німеччини", ru: "" },
      { de: "Führende Demokratische Partei", en: "", uk: "Провідна демократична партія", ru: "" },
      { de: "Freie Demokratische Partei", en: "", uk: "Вільна демократична партія", ru: "", correct: true },
    ]
  },
  {
    id: "lid_080",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?", en: "", uk: "Який суд у Німеччині відповідає за тлумачення Основного закону?", ru: "" },
    answers: [
      { de: "Oberlandesgericht", en: "", uk: "Вищий земельний суд", ru: "" },
      { de: "Amtsgericht", en: "", uk: "Районний суд", ru: "" },
      { de: "Bundesverfassungsgericht", en: "", uk: "Федеральний конституційний суд", ru: "", correct: true },
      { de: "Verwaltungsgericht", en: "", uk: "Адміністративний суд", ru: "" },
    ]
  },
  {
    id: "lid_081",
    lessonId: "k1m3",
    cat: "organe",
    question: { de: "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?", en: "", uk: "Хто обирає федерального канцлера/федеральну канцлерку в Німеччині?", ru: "" },
    answers: [
      { de: "der Bundesrat", en: "", uk: "Бундесрат", ru: "" },
      { de: "die Bundesversammlung", en: "", uk: "Федеральні збори", ru: "" },
      { de: "das Volk", en: "", uk: "народ", ru: "" },
      { de: "der Bundestag", en: "", uk: "Бундестаг", ru: "", correct: true },
    ]
  },
  {
    id: "lid_082",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer leitet das deutsche Bundeskabinett?", en: "", uk: "Хто очолює німецький федеральний кабінет?", ru: "" },
    answers: [
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "", uk: "президент/президентка Бундестагу", ru: "" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "", uk: "федеральний президент/федеральна президентка", ru: "" },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "", uk: "президент/президентка Бундесрату", ru: "" },
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "", uk: "федеральний канцлер/федеральна канцлерка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_083",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?", en: "", uk: "Хто обирає німецького федерального канцлера/німецьку федеральну канцлерку?", ru: "" },
    answers: [
      { de: "das Volk", en: "", uk: "народ", ru: "" },
      { de: "die Bundesversammlung", en: "", uk: "Федеральні збори", ru: "" },
      { de: "der Bundestag", en: "", uk: "Бундестаг", ru: "", correct: true },
      { de: "die Bundesregierung", en: "", uk: "федеральний уряд", ru: "" },
    ]
  },
  {
    id: "lid_084",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er …", en: "", uk: "Яке головне завдання німецького федерального президента/німецької федеральної президентки? Він/вона …", ru: "" },
    answers: [
      { de: "regiert das Land.", en: "", uk: "керує країною.", ru: "" },
      { de: "entwirft die Gesetze.", en: "", uk: "розробляє закони.", ru: "" },
      { de: "repräsentiert das Land.", en: "", uk: "представляє країну.", ru: "", correct: true },
      { de: "überwacht die Einhaltung der Gesetze.", en: "", uk: "стежить за дотриманням законів.", ru: "" },
    ]
  },
  {
    id: "lid_085",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer bildet den deutschen Bundesrat?", en: "", uk: "Хто утворює німецький Бундесрат?", ru: "" },
    answers: [
      { de: "die Abgeordneten des Bundestages", en: "", uk: "депутати Бундестагу", ru: "" },
      { de: "die Ministerinnen und Minister der Bundesregierung", en: "", uk: "міністри і міністерки федерального уряду", ru: "" },
      { de: "die Regierungsvertreter der Bundesländer", en: "", uk: "представники урядів федеральних земель", ru: "", correct: true },
      { de: "die Parteimitglieder", en: "", uk: "члени партій", ru: "" },
    ]
  },
  {
    id: "lid_086",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?", en: "", uk: "Хто обирає в Німеччині федерального президента/федеральну президентку?", ru: "" },
    answers: [
      { de: "die Bundesversammlung", en: "", uk: "Федеральні збори", ru: "", correct: true },
      { de: "der Bundesrat", en: "", uk: "Бундесрат", ru: "" },
      { de: "das Bundesparlament", en: "", uk: "федеральний парламент", ru: "" },
      { de: "das Bundesverfassungsgericht", en: "", uk: "Федеральний конституційний суд", ru: "" },
    ]
  },
  {
    id: "lid_087",
    lessonId: "k1m4",
    cat: "organe",
    question: { de: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?", en: "", uk: "Хто є главою держави Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "die Bundeskanzlerin/der Bundeskanzler", en: "", uk: "федеральний канцлер/федеральна канцлерка", ru: "" },
      { de: "die Bundespräsidentin/der Bundespräsident", en: "", uk: "федеральний президент/федеральна президентка", ru: "", correct: true },
      { de: "die Bundesratspräsidentin/der Bundesratspräsident", en: "", uk: "президент/президентка Бундесрату", ru: "" },
      { de: "die Bundestagspräsidentin/der Bundestagspräsident", en: "", uk: "президент/президентка Бундестагу", ru: "" },
    ]
  },
  {
    id: "lid_088",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Die parlamentarische Opposition im Deutschen Bundestag …", en: "", uk: "Парламентська опозиція в Бундестазі Німеччини …", ru: "" },
    answers: [
      { de: "kontrolliert die Regierung.", en: "", uk: "контролює уряд.", ru: "", correct: true },
      { de: "entscheidet, wer Bundesministerin/Bundesminister wird.", en: "", uk: "вирішує, хто стане федеральним міністром/федеральною міністеркою.", ru: "" },
      { de: "bestimmt, wer im Bundesrat sitzt.", en: "", uk: "визначає, хто засідає в Бундесраті.", ru: "" },
      { de: "schlägt die Regierungschefinnen/Regierungschefs der Länder vor.", en: "", uk: "пропонує керівників урядів земель.", ru: "" },
    ]
  },
  {
    id: "lid_089",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?", en: "", uk: "Як у Німеччині називають обʼєднання депутатів однієї партії в парламенті?", ru: "" },
    answers: [
      { de: "Verband", en: "", uk: "спілка", ru: "" },
      { de: "Ältestenrat", en: "", uk: "Рада старійшин", ru: "" },
      { de: "Fraktion", en: "", uk: "фракція", ru: "", correct: true },
      { de: "Opposition", en: "", uk: "опозиція", ru: "" },
    ]
  },
  {
    id: "lid_090",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …", en: "", uk: "Німецькі федеральні землі беруть участь у законотворчості федерації через …", ru: "" },
    answers: [
      { de: "den Bundesrat.", en: "", uk: "Бундесрат.", ru: "", correct: true },
      { de: "die Bundesversammlung.", en: "", uk: "Федеральні збори.", ru: "" },
      { de: "den Bundestag.", en: "", uk: "Бундестаг.", ru: "" },
      { de: "die Bundesregierung.", en: "", uk: "федеральний уряд.", ru: "" },
    ]
  },
  {
    id: "lid_091",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …", en: "", uk: "У Німеччині зміна уряду у федеральній землі може впливати на федеральну політику. Керувати стає …", ru: "" },
    answers: [
      { de: "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.", en: "", uk: "важче, якщо внаслідок цього змінюється більшість у Бундестазі.", ru: "" },
      { de: "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.", en: "", uk: "легше, якщо внаслідок цього до Бундесрату потрапляють нові партії.", ru: "" },
      { de: "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.", en: "", uk: "важче, якщо внаслідок цього змінюється більшість у Бундесраті.", ru: "", correct: true },
      { de: "leichter, wenn es sich um ein reiches Bundesland handelt.", en: "", uk: "легше, якщо йдеться про багату федеральну землю.", ru: "" },
    ]
  },
  {
    id: "lid_092",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was bedeutet die Abkürzung CSU in Deutschland?", en: "", uk: "Що означає абревіатура CSU в Німеччині?", ru: "" },
    answers: [
      { de: "Christlich Sichere Union", en: "", uk: "Християнський безпечний союз", ru: "" },
      { de: "Christlich Süddeutsche Union", en: "", uk: "Християнський південнонімецький союз", ru: "" },
      { de: "Christlich Sozialer Unternehmerverband", en: "", uk: "Християнська соціальна спілка підприємців", ru: "" },
      { de: "Christlich Soziale Union", en: "", uk: "Християнсько-соціальний союз", ru: "", correct: true },
    ]
  },
  {
    id: "lid_093",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Je mehr „Zweitstimmen“ eine Partei bei einer Bundestagswahl bekommt, desto …", en: "", uk: "Чим більше «других голосів» отримує партія на виборах до Бундестагу, тим …", ru: "" },
    answers: [
      { de: "weniger Erststimmen kann sie haben.", en: "", uk: "менше перших голосів вона може мати.", ru: "" },
      { de: "mehr Direktkandidaten der Partei ziehen ins Parlament ein.", en: "", uk: "більше прямих кандидатів від партії потрапляє до парламенту.", ru: "" },
      { de: "größer ist das Risiko, eine Koalition bilden zu müssen.", en: "", uk: "більшим є ризик, що доведеться створювати коаліцію.", ru: "" },
      { de: "mehr Sitze erhält die Partei im Parlament.", en: "", uk: "більше місць отримує партія в парламенті.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_094",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?", en: "", uk: "З якого віку в Німеччині можна брати участь у виборах до Бундестагу?", ru: "" },
    answers: [
      { de: "16", en: "", uk: "16", ru: "" },
      { de: "18", en: "", uk: "18", ru: "", correct: true },
      { de: "21", en: "", uk: "21", ru: "" },
      { de: "23", en: "", uk: "23", ru: "" },
    ]
  },
  {
    id: "lid_095",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Was gilt für die meisten Kinder in Deutschland?", en: "", uk: "Що діє для більшості дітей у Німеччині?", ru: "" },
    answers: [
      { de: "Wahlpflicht", en: "", uk: "обовʼязок голосувати", ru: "" },
      { de: "Schulpflicht", en: "", uk: "обовʼязок відвідувати школу", ru: "", correct: true },
      { de: "Schweigepflicht", en: "", uk: "обовʼязок зберігати мовчання", ru: "" },
      { de: "Religionspflicht", en: "", uk: "релігійний обовʼязок", ru: "" },
    ]
  },
  {
    id: "lid_096",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wie kann jemand, der den Holocaust leugnet, bestraft werden?", en: "", uk: "Як може бути покараний той, хто заперечує Голокост?", ru: "" },
    answers: [
      { de: "Kürzung sozialer Leistungen", en: "", uk: "скороченням соціальних виплат", ru: "" },
      { de: "bis zu 100 Sozialstunden", en: "", uk: "до 100 годин громадських робіт", ru: "" },
      { de: "gar nicht, Holocaustleugnung ist erlaubt", en: "", uk: "ніяк, заперечення Голокосту дозволене", ru: "" },
      { de: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe", en: "", uk: "позбавленням волі на строк до пʼяти років або грошовим штрафом", ru: "", correct: true },
    ]
  },
  {
    id: "lid_097",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?", en: "", uk: "Що в Німеччині сплачують автоматично, якщо працюють за наймом на постійній основі?", ru: "" },
    answers: [
      { de: "Sozialversicherung", en: "", uk: "соціальне страхування", ru: "", correct: true },
      { de: "Sozialhilfe", en: "", uk: "соціальну допомогу", ru: "" },
      { de: "Kindergeld", en: "", uk: "допомогу на дітей", ru: "" },
      { de: "Wohngeld", en: "", uk: "допомогу на оплату житла", ru: "" },
    ]
  },
  {
    id: "lid_098",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …", en: "", uk: "Якщо депутати Бундестагу Німеччини змінюють свою фракцію, …", ru: "" },
    answers: [
      { de: "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.", en: "", uk: "вони більше не можуть брати участь у засіданнях парламенту.", ru: "" },
      { de: "kann die Regierung ihre Mehrheit verlieren.", en: "", uk: "уряд може втратити свою більшість.", ru: "", correct: true },
      { de: "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.", en: "", uk: "федеральний президент/федеральна президентка мусить заздалегідь дати на це згоду.", ru: "" },
      { de: "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen.", en: "", uk: "виборці цих депутатів можуть проголосувати ще раз.", ru: "" },
    ]
  },
  {
    id: "lid_099",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Wer bezahlt in Deutschland die Sozialversicherungen?", en: "", uk: "Хто сплачує в Німеччині соціальне страхування?", ru: "" },
    answers: [
      { de: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer", en: "", uk: "роботодавці та працівники", ru: "", correct: true },
      { de: "nur Arbeitnehmerinnen/Arbeitnehmer", en: "", uk: "лише працівники", ru: "" },
      { de: "alle Staatsangehörigen", en: "", uk: "усі громадяни", ru: "" },
      { de: "nur Arbeitgeberinnen/Arbeitgeber", en: "", uk: "лише роботодавці", ru: "" },
    ]
  },
  {
    id: "lid_100",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Was gehört nicht zur gesetzlichen Sozialversicherung?", en: "", uk: "Що не належить до обовʼязкового соціального страхування?", ru: "" },
    answers: [
      { de: "die Lebensversicherung", en: "", uk: "страхування життя", ru: "", correct: true },
      { de: "die gesetzliche Rentenversicherung", en: "", uk: "обовʼязкове пенсійне страхування", ru: "" },
      { de: "die Arbeitslosenversicherung", en: "", uk: "страхування на випадок безробіття", ru: "" },
      { de: "die Pflegeversicherung", en: "", uk: "страхування на випадок потреби в догляді", ru: "" },
    ]
  },
  {
    id: "lid_101",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Gewerkschaften sind Interessenverbände der …", en: "", uk: "Профспілки — це обʼєднання захисту інтересів …", ru: "" },
    answers: [
      { de: "Jugendlichen.", en: "", uk: "підлітків.", ru: "" },
      { de: "Arbeitnehmerinnen und Arbeitnehmer.", en: "", uk: "працівників.", ru: "", correct: true },
      { de: "Rentnerinnen und Rentner.", en: "", uk: "пенсіонерів.", ru: "" },
      { de: "Arbeitgeberinnen und Arbeitgeber.", en: "", uk: "роботодавців.", ru: "" },
    ]
  },
  {
    id: "lid_102",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …", en: "", uk: "Чим можуть нагородити у Федеративній Республіці Німеччина за особливі заслуги в політичній, економічній, культурній, духовній чи соціальній сфері?", ru: "" },
    answers: [
      { de: "Bundesverdienstkreuz", en: "", uk: "Федеральним хрестом за заслуги", ru: "", correct: true },
      { de: "Bundesadler", en: "", uk: "Федеральним орлом", ru: "" },
      { de: "Vaterländischen Verdienstorden", en: "", uk: "Орденом «За заслуги перед Вітчизною»", ru: "" },
      { de: "Ehrentitel „Held der Deutschen Demokratischen Republik“", en: "", uk: "почесним званням «Герой Німецької Демократичної Республіки»", ru: "" },
    ]
  },
  {
    id: "lid_103",
    lessonId: "k7m1",
    cat: "parteien",
    question: { de: "Was wird in Deutschland als „Ampelkoalition“ bezeichnet? Die Zusammenarbeit …", en: "", uk: "Що в Німеччині називають «світлофорною коаліцією»? Співпрацю …", ru: "" },
    answers: [
      { de: "der Bundestagsfraktionen von CDU und CSU", en: "", uk: "фракцій CDU і CSU в Бундестазі", ru: "" },
      { de: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung", en: "", uk: "SPD, FDP і «Союзу 90/Зелених» в одному уряді", ru: "", correct: true },
      { de: "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung", en: "", uk: "CSU, «Лівих» і «Союзу 90/Зелених» в одному уряді", ru: "" },
      { de: "der Bundestagsfraktionen von CDU und SPD", en: "", uk: "фракцій CDU і SPD в Бундестазі", ru: "" },
    ]
  },
  {
    id: "lid_104",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?", en: "", uk: "Жінка в Німеччині втрачає роботу. Що не може бути причиною цього звільнення?", ru: "" },
    answers: [
      { de: "Die Frau ist lange krank und arbeitsunfähig.", en: "", uk: "Жінка довго хворіє і непрацездатна.", ru: "" },
      { de: "Die Frau kam oft zu spät zur Arbeit.", en: "", uk: "Жінка часто запізнювалася на роботу.", ru: "" },
      { de: "Die Frau erledigt private Sachen während der Arbeitszeit.", en: "", uk: "Жінка займається приватними справами в робочий час.", ru: "" },
      { de: "Die Frau bekommt ein Kind und ihr Chef weiß das.", en: "", uk: "Жінка чекає дитину, і її начальник знає про це.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_105",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?", en: "", uk: "Що є завданням виборчих помічників/помічниць у Німеччині?", ru: "" },
    answers: [
      { de: "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.", en: "", uk: "Вони допомагають літнім людям голосувати в кабінці для голосування.", ru: "" },
      { de: "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.", en: "", uk: "Вони пишуть повідомлення про вибори перед виборами.", ru: "" },
      { de: "Sie geben Zwischenergebnisse an die Medien weiter.", en: "", uk: "Вони передають проміжні результати медіа.", ru: "" },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "", uk: "Вони підраховують голоси після закінчення виборів.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_106",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?", en: "", uk: "У Німеччині на виборах допомагають виборчі помічники і помічниці на громадських засадах. Що є завданням виборчих помічників/помічниць?", ru: "" },
    answers: [
      { de: "Sie helfen Kindern und alten Menschen beim Wählen.", en: "", uk: "Вони допомагають дітям і літнім людям голосувати.", ru: "" },
      { de: "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.", en: "", uk: "Вони пишуть листівки та листи з вказівкою виборчої дільниці.", ru: "" },
      { de: "Sie geben Zwischenergebnisse an Journalisten weiter.", en: "", uk: "Вони передають проміжні результати журналістам.", ru: "" },
      { de: "Sie zählen die Stimmen nach dem Ende der Wahl.", en: "", uk: "Вони підраховують голоси після закінчення виборів.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_107",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?", en: "", uk: "На скільки років обирають Бундестаг у Німеччині?", ru: "" },
    answers: [
      { de: "2 Jahre", en: "", uk: "2 роки", ru: "" },
      { de: "4 Jahre", en: "", uk: "4 роки", ru: "", correct: true },
      { de: "6 Jahre", en: "", uk: "6 років", ru: "" },
      { de: "8 Jahre", en: "", uk: "8 років", ru: "" },
    ]
  },
  {
    id: "lid_108",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …", en: "", uk: "На виборах до Бундестагу в Німеччині голосувати може кожен/кожна, хто …", ru: "" },
    answers: [
      { de: "in der Bundesrepublik Deutschland wohnt und wählen möchte.", en: "", uk: "проживає у Федеративній Республіці Німеччина і хоче голосувати.", ru: "" },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.", en: "", uk: "є громадянином/громадянкою Федеративної Республіки Німеччина і йому/їй щонайменше 18 років.", ru: "", correct: true },
      { de: "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.", en: "", uk: "живе у Федеративній Республіці Німеччина щонайменше 3 роки.", ru: "" },
      { de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.", en: "", uk: "є громадянином/громадянкою Федеративної Республіки Німеччина і йому/їй щонайменше 21 рік.", ru: "" },
    ]
  },
  {
    id: "lid_109",
    lessonId: "k6m1",
    cat: "wahlen",
    question: { de: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?", en: "", uk: "Як часто зазвичай проходять вибори до Бундестагу в Німеччині?", ru: "" },
    answers: [
      { de: "alle drei Jahre", en: "", uk: "кожні три роки", ru: "" },
      { de: "alle vier Jahre", en: "", uk: "кожні чотири роки", ru: "", correct: true },
      { de: "alle fünf Jahre", en: "", uk: "кожні пʼять років", ru: "" },
      { de: "alle sechs Jahre", en: "", uk: "кожні шість років", ru: "" },
    ]
  },
  {
    id: "lid_110",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?", en: "", uk: "На скільки років обирають Бундестаг у Німеччині?", ru: "" },
    answers: [
      { de: "2 Jahre", en: "", uk: "2 роки", ru: "" },
      { de: "3 Jahre", en: "", uk: "3 роки", ru: "" },
      { de: "4 Jahre", en: "", uk: "4 роки", ru: "", correct: true },
      { de: "5 Jahre", en: "", uk: "5 років", ru: "" },
    ]
  },
  {
    id: "lid_111",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?", en: "", uk: "Які дії щодо держави Ізраїль заборонені в Німеччині?", ru: "" },
    answers: [
      { de: "die Politik Israels öffentlich kritisieren", en: "", uk: "публічно критикувати політику Ізраїлю", ru: "" },
      { de: "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück", en: "", uk: "вивішувати ізраїльський прапор на приватній ділянці", ru: "" },
      { de: "eine Diskussion über die Politik Israels", en: "", uk: "дискусія про політику Ізраїлю", ru: "" },
      { de: "der öffentliche Aufruf zur Vernichtung Israels", en: "", uk: "публічний заклик до знищення Ізраїлю", ru: "", correct: true },
    ]
  },
  {
    id: "lid_112",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Die Wahlen in Deutschland sind …", en: "", uk: "Вибори в Німеччині …", ru: "" },
    answers: [
      { de: "speziell.", en: "", uk: "спеціальні.", ru: "" },
      { de: "geheim.", en: "", uk: "таємні.", ru: "", correct: true },
      { de: "berufsbezogen.", en: "", uk: "професійні.", ru: "" },
      { de: "geschlechtsabhängig.", en: "", uk: "залежні від статі.", ru: "" },
    ]
  },
  {
    id: "lid_113",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland gewinnt die Partei, die …", en: "", uk: "Вибори в Німеччині виграє партія, яка …", ru: "" },
    answers: [
      { de: "die meisten Stimmen bekommt.", en: "", uk: "отримує найбільше голосів.", ru: "", correct: true },
      { de: "die meisten Männer mehrheitlich gewählt haben.", en: "", uk: "за яку більшістю проголосувало найбільше чоловіків.", ru: "" },
      { de: "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.", en: "", uk: "отримала найбільше голосів серед робітників/робітниць.", ru: "" },
      { de: "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat.", en: "", uk: "отримала найбільше перших голосів за свого кандидата/свою кандидатку на посаду канцлера.", ru: "" },
    ]
  },
  {
    id: "lid_114",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "An demokratischen Wahlen in Deutschland teilzunehmen ist …", en: "", uk: "Участь у демократичних виборах у Німеччині — це …", ru: "" },
    answers: [
      { de: "eine Pflicht.", en: "", uk: "обовʼязок.", ru: "" },
      { de: "ein Recht.", en: "", uk: "право.", ru: "", correct: true },
      { de: "ein Zwang.", en: "", uk: "примус.", ru: "" },
      { de: "eine Last.", en: "", uk: "тягар.", ru: "" },
    ]
  },
  {
    id: "lid_115",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Was bedeutet „aktives Wahlrecht“ in Deutschland?", en: "", uk: "Що означає «активне виборче право» в Німеччині?", ru: "" },
    answers: [
      { de: "Man kann gewählt werden.", en: "", uk: "Можна бути обраним/обраною.", ru: "" },
      { de: "Man muss wählen gehen.", en: "", uk: "Потрібно йти голосувати.", ru: "" },
      { de: "Man kann wählen.", en: "", uk: "Можна голосувати.", ru: "", correct: true },
      { de: "Man muss zur Auszählung der Stimmen gehen.", en: "", uk: "Потрібно йти на підрахунок голосів.", ru: "" },
    ]
  },
  {
    id: "lid_116",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …", en: "", uk: "Якщо ви можете голосувати на виборах до Бундестагу Німеччини, це називається …", ru: "" },
    answers: [
      { de: "aktive Wahlkampagne.", en: "", uk: "активна виборча кампанія.", ru: "" },
      { de: "aktives Wahlverfahren.", en: "", uk: "активна виборча процедура.", ru: "" },
      { de: "aktiver Wahlkampf.", en: "", uk: "активна передвиборча боротьба.", ru: "" },
      { de: "aktives Wahlrecht.", en: "", uk: "активне виборче право.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_117",
    lessonId: "k6m2",
    cat: "wahlen",
    question: { de: "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?", en: "", uk: "Який мінімальний відсоток других голосів мають отримати партії, щоб потрапити до Бундестагу?", ru: "" },
    answers: [
      { de: "3%", en: "", uk: "3%", ru: "" },
      { de: "4%", en: "", uk: "4%", ru: "" },
      { de: "5%", en: "", uk: "5%", ru: "", correct: true },
      { de: "6%", en: "", uk: "6%", ru: "" },
    ]
  },
  {
    id: "lid_118",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?", en: "", uk: "Хто може бути членом приблизно 40 єврейських спортивних клубів «Маккабі»?", ru: "" },
    answers: [
      { de: "nur Deutsche", en: "", uk: "лише німці", ru: "" },
      { de: "nur Israelis", en: "", uk: "лише ізраїльтяни", ru: "" },
      { de: "nur religiöse Menschen", en: "", uk: "лише релігійні люди", ru: "" },
      { de: "alle Menschen", en: "", uk: "усі люди", ru: "", correct: true },
    ]
  },
  {
    id: "lid_119",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Wahlen in Deutschland sind frei. Was bedeutet das?", en: "", uk: "Вибори в Німеччині вільні. Що це означає?", ru: "" },
    answers: [
      { de: "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.", en: "", uk: "Усі засуджені злочинці не мають права голосувати.", ru: "" },
      { de: "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.", en: "", uk: "Якщо я хочу піти голосувати, мій роботодавець/моя роботодавиця повинен/повинна дати мені вихідний.", ru: "" },
      { de: "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.", en: "", uk: "Кожна людина може без примусу вирішувати, чи хоче вона голосувати і за кого.", ru: "", correct: true },
      { de: "Ich kann frei entscheiden, wo ich wählen gehen möchte.", en: "", uk: "Я можу вільно вирішувати, де хочу голосувати.", ru: "" },
    ]
  },
  {
    id: "lid_120",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Das Wahlsystem in Deutschland ist ein …", en: "", uk: "Виборча система в Німеччині — це …", ru: "" },
    answers: [
      { de: "Zensuswahlrecht.", en: "", uk: "цензове виборче право.", ru: "" },
      { de: "Dreiklassenwahlrecht.", en: "", uk: "трикласове виборче право.", ru: "" },
      { de: "Mehrheits- und Verhältniswahlrecht.", en: "", uk: "мажоритарно-пропорційна виборча система.", ru: "", correct: true },
      { de: "allgemeines Männerwahlrecht.", en: "", uk: "загальне виборче право для чоловіків.", ru: "" },
    ]
  },
  {
    id: "lid_121",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …", en: "", uk: "Партія хоче потрапити до Бундестагу Німеччини. Але вона мусить мати мінімальну частку голосів виборців. Це називається …", ru: "" },
    answers: [
      { de: "5%-Hürde.", en: "", uk: "5-відсотковий барʼєр.", ru: "", correct: true },
      { de: "Zulassungsgrenze.", en: "", uk: "межа допуску.", ru: "" },
      { de: "Basiswert.", en: "", uk: "базове значення.", ru: "" },
      { de: "Richtlinie.", en: "", uk: "директива.", ru: "" },
    ]
  },
  {
    id: "lid_122",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …", en: "", uk: "Якому принципу підпорядковані вибори в Німеччині? Вибори в Німеччині …", ru: "" },
    answers: [
      { de: "frei, gleich, geheim.", en: "", uk: "вільні, рівні, таємні.", ru: "", correct: true },
      { de: "offen, sicher, frei.", en: "", uk: "відкриті, безпечні, вільні.", ru: "" },
      { de: "geschlossen, gleich, sicher.", en: "", uk: "закриті, рівні, безпечні.", ru: "" },
      { de: "sicher, offen, freiwillig.", en: "", uk: "безпечні, відкриті, добровільні.", ru: "" },
    ]
  },
  {
    id: "lid_123",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Was ist in Deutschland die „5%-Hürde“?", en: "", uk: "Що таке в Німеччині «5-відсотковий барʼєр»?", ru: "" },
    answers: [
      { de: "Abstimmungsregelung im Bundestag für kleine Parteien", en: "", uk: "правило голосування в Бундестазі для малих партій", ru: "" },
      { de: "Anwesenheitskontrolle im Bundestag für Abstimmungen", en: "", uk: "перевірка присутності в Бундестазі під час голосувань", ru: "" },
      { de: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen", en: "", uk: "мінімальна частка голосів виборців, щоб потрапити до парламенту", ru: "", correct: true },
      { de: "Anwesenheitskontrolle im Bundesrat für Abstimmungen", en: "", uk: "перевірка присутності в Бундесраті під час голосувань", ru: "" },
    ]
  },
  {
    id: "lid_124",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "Die Bundestagswahl in Deutschland ist die Wahl …", en: "", uk: "Вибори до Бундестагу в Німеччині — це вибори …", ru: "" },
    answers: [
      { de: "der Bundeskanzlerin/des Bundeskanzlers.", en: "", uk: "федерального канцлера/федеральної канцлерки.", ru: "" },
      { de: "der Parlamente der Länder.", en: "", uk: "парламентів земель.", ru: "" },
      { de: "des Parlaments für Deutschland.", en: "", uk: "парламенту Німеччини.", ru: "", correct: true },
      { de: "der Bundespräsidentin/des Bundespräsidenten.", en: "", uk: "федерального президента/федеральної президентки.", ru: "" },
    ]
  },
  {
    id: "lid_125",
    lessonId: "k6m3",
    cat: "wahlen",
    question: { de: "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …", en: "", uk: "У демократії одна з функцій регулярних виборів — …", ru: "" },
    answers: [
      { de: "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.", en: "", uk: "змусити громадян віддавати свої голоси.", ru: "" },
      { de: "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.", en: "", uk: "дати змогу змінити уряд відповідно до волі більшості виборців.", ru: "", correct: true },
      { de: "im Land bestehende Gesetze beizubehalten.", en: "", uk: "зберегти чинні в країні закони.", ru: "" },
      { de: "den Armen mehr Macht zu geben.", en: "", uk: "дати більше влади бідним.", ru: "" },
    ]
  },
  {
    id: "lid_126",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?", en: "", uk: "Що отримують громадяни з правом голосу в Німеччині перед виборами?", ru: "" },
    answers: [
      { de: "eine Wahlbenachrichtigung von der Gemeinde", en: "", uk: "повідомлення про вибори від громади", ru: "", correct: true },
      { de: "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten", en: "", uk: "дозвіл на голосування від федерального президента/федеральної президентки", ru: "" },
      { de: "eine Benachrichtigung von der Bundesversammlung", en: "", uk: "повідомлення від Федеральних зборів", ru: "" },
      { de: "eine Benachrichtigung vom Pfarramt", en: "", uk: "повідомлення від парафіяльної канцелярії", ru: "" },
    ]
  },
  {
    id: "lid_127",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …", en: "", uk: "Чому у виборчому законі Федеративної Республіки Німеччина існує 5-відсотковий барʼєр? Він існує, тому що …", ru: "" },
    answers: [
      { de: "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.", en: "", uk: "програми багатьох малих партій мають багато спільного.", ru: "" },
      { de: "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.", en: "", uk: "громадяни можуть втратити орієнтири серед багатьох малих партій.", ru: "" },
      { de: "viele kleine Parteien die Regierungsbildung erschweren.", en: "", uk: "багато малих партій ускладнюють формування уряду.", ru: "", correct: true },
      { de: "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen.", en: "", uk: "малі партії не мають достатньо грошей, щоб платити політикам.", ru: "" },
    ]
  },
  {
    id: "lid_128",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …", en: "", uk: "Членів парламенту, яких обирають громадяни, називають …", ru: "" },
    answers: [
      { de: "Abgeordnete.", en: "", uk: "депутатами.", ru: "", correct: true },
      { de: "Kanzlerinnen/Kanzler.", en: "", uk: "канцлерами.", ru: "" },
      { de: "Botschafterinnen/Botschafter.", en: "", uk: "послами.", ru: "" },
      { de: "Ministerpräsidentinnen/Ministerpräsidenten.", en: "", uk: "міністрами-президентами.", ru: "" },
    ]
  },
  {
    id: "lid_129",
    lessonId: "k1m5",
    cat: "organe",
    question: { de: "Vom Volk gewählt wird in Deutschland …", en: "", uk: "Народ у Німеччині обирає …", ru: "" },
    answers: [
      { de: "die Bundeskanzlerin/der Bundeskanzler.", en: "", uk: "федерального канцлера/федеральну канцлерку.", ru: "" },
      { de: "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.", en: "", uk: "міністра-президента/міністра-президентку федеральної землі.", ru: "" },
      { de: "der Bundestag.", en: "", uk: "Бундестаг.", ru: "", correct: true },
      { de: "die Bundespräsidentin/der Bundespräsident.", en: "", uk: "федерального президента/федеральну президентку.", ru: "" },
    ]
  },
  {
    id: "lid_130",
    lessonId: "k6m4",
    cat: "wahlen",
    img: "lid_130.png",
    question: { de: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig? In Anlehnung an Bundeswahlordnung (BWO), Anlage 26", en: "", uk: "Який бюлетень був би дійсним на виборах до Бундестагу? За зразком Федерального виборчого регламенту (BWO), додаток 26", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "", correct: true },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_131",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …", en: "", uk: "У Німеччині бургомістр/бургомістерка — це …", ru: "" },
    answers: [
      { de: "die Leiterin/der Leiter einer Schule.", en: "", uk: "керівник/керівниця школи.", ru: "" },
      { de: "die Chefin/der Chef einer Bank.", en: "", uk: "директор/директорка банку.", ru: "" },
      { de: "das Oberhaupt einer Gemeinde.", en: "", uk: "голова громади.", ru: "", correct: true },
      { de: "die/der Vorsitzende einer Partei.", en: "", uk: "голова партії.", ru: "" },
    ]
  },
  {
    id: "lid_132",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?", en: "", uk: "Багато людей у Німеччині у вільний час працюють на громадських засадах. Що це означає?", ru: "" },
    answers: [
      { de: "Sie arbeiten als Soldatinnen/Soldaten.", en: "", uk: "Вони працюють солдатами/солдатками.", ru: "" },
      { de: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.", en: "", uk: "Вони працюють добровільно та безоплатно в обʼєднаннях і спілках.", ru: "", correct: true },
      { de: "Sie arbeiten in der Bundesregierung.", en: "", uk: "Вони працюють у федеральному уряді.", ru: "" },
      { de: "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.", en: "", uk: "Вони працюють у лікарні та заробляють там гроші.", ru: "" },
    ]
  },
  {
    id: "lid_133",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?", en: "", uk: "Що дозволено на виборах до Бундестагу та ландтагів у Німеччині?", ru: "" },
    answers: [
      { de: "Der Ehemann wählt für seine Frau mit.", en: "", uk: "Чоловік голосує також за свою дружину.", ru: "" },
      { de: "Man kann durch Briefwahl seine Stimme abgeben.", en: "", uk: "Можна віддати свій голос поштою.", ru: "", correct: true },
      { de: "Man kann am Wahltag telefonisch seine Stimme abgeben.", en: "", uk: "У день виборів можна проголосувати по телефону.", ru: "" },
      { de: "Kinder ab dem Alter von 14 Jahren dürfen wählen.", en: "", uk: "Діти з 14 років можуть голосувати.", ru: "" },
    ]
  },
  {
    id: "lid_134",
    lessonId: "k6m4",
    cat: "wahlen",
    question: { de: "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?", en: "", uk: "Хочуть скасувати автобусний маршрут, яким ви завжди їздите на роботу. Що ви можете зробити, щоб зберегти автобусний маршрут?", ru: "" },
    answers: [
      { de: "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.", en: "", uk: "Я долучаюся до громадської ініціативи за збереження автобусного маршруту або сам/сама створюю ініціативу.", ru: "", correct: true },
      { de: "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.", en: "", uk: "Я стаю членом спортивного клубу і тренуюся їздити на велосипеді.", ru: "" },
      { de: "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.", en: "", uk: "Я звертаюся до податкової інспекції, тому що як платник/платниця податків маю право на автобусний маршрут.", ru: "" },
      { de: "Ich schreibe einen Brief an das Forstamt der Gemeinde.", en: "", uk: "Я пишу листа до лісового управління громади.", ru: "" },
    ]
  },
  {
    id: "lid_135",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Wen vertreten die Gewerkschaften in Deutschland?", en: "", uk: "Кого представляють профспілки в Німеччині?", ru: "" },
    answers: [
      { de: "große Unternehmen", en: "", uk: "великі підприємства", ru: "" },
      { de: "kleine Unternehmen", en: "", uk: "малі підприємства", ru: "" },
      { de: "Selbstständige", en: "", uk: "самозайнятих", ru: "" },
      { de: "Arbeitnehmerinnen und Arbeitnehmer", en: "", uk: "працівників", ru: "", correct: true },
    ]
  },
  {
    id: "lid_136",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Sie gehen in Deutschland zum Arbeitsgericht bei …", en: "", uk: "У Німеччині ви звертаєтеся до суду з трудових спорів у разі …", ru: "" },
    answers: [
      { de: "falscher Nebenkostenabrechnung.", en: "", uk: "неправильного розрахунку додаткових витрат на житло.", ru: "" },
      { de: "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.", en: "", uk: "незаконного звільнення вашим начальником/вашою начальницею.", ru: "", correct: true },
      { de: "Problemen mit den Nachbarinnen/Nachbarn.", en: "", uk: "проблем із сусідами.", ru: "" },
      { de: "Schwierigkeiten nach einem Verkehrsunfall.", en: "", uk: "труднощів після дорожньо-транспортної пригоди.", ru: "" },
    ]
  },
  {
    id: "lid_137",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?", en: "", uk: "Який суд у Німеччині відповідає за конфлікти у сфері праці?", ru: "" },
    answers: [
      { de: "das Familiengericht", en: "", uk: "суд у справах сімʼї", ru: "" },
      { de: "das Strafgericht", en: "", uk: "кримінальний суд", ru: "" },
      { de: "das Arbeitsgericht", en: "", uk: "суд з трудових спорів", ru: "", correct: true },
      { de: "das Amtsgericht", en: "", uk: "районний суд", ru: "" },
    ]
  },
  {
    id: "lid_138",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?", en: "", uk: "Що я можу зробити в Німеччині, якщо мій роботодавець/моя роботодавиця несправедливо мене звільнив/звільнила?", ru: "" },
    answers: [
      { de: "weiterarbeiten und freundlich zur Chefin/zum Chef sein", en: "", uk: "продовжувати працювати і бути ввічливим/ввічливою з керівником/керівницею", ru: "" },
      { de: "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen", en: "", uk: "розпочати проти роботодавця стягнення боргу в порядку наказного провадження", ru: "" },
      { de: "Kündigungsschutzklage erheben", en: "", uk: "подати позов про захист від звільнення", ru: "", correct: true },
      { de: "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen", en: "", uk: "заявити на роботодавця в поліцію", ru: "" },
    ]
  },
  {
    id: "lid_139",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …", en: "", uk: "Коли в Німеччині відбувається судовий процес? Коли хтось …", ru: "" },
    answers: [
      { de: "zu einer anderen Religion übertritt.", en: "", uk: "переходить в іншу релігію.", ru: "" },
      { de: "eine Straftat begangen hat und angeklagt wird.", en: "", uk: "вчинив злочин і йому висунули обвинувачення.", ru: "", correct: true },
      { de: "eine andere Meinung als die der Regierung vertritt.", en: "", uk: "дотримується іншої думки, ніж уряд.", ru: "" },
      { de: "sein Auto falsch geparkt hat und es abgeschleppt wird.", en: "", uk: "неправильно припаркував автомобіль, і його евакуюють.", ru: "" },
    ]
  },
  {
    id: "lid_140",
    lessonId: "k12m1",
    cat: "recht",
    question: { de: "Was macht eine Schöffin/ein Schöffe in Deutschland? Sie/Er …", en: "", uk: "Що робить шеффен/шеффенка в Німеччині? Він/вона …", ru: "" },
    answers: [
      { de: "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.", en: "", uk: "разом із суддями вирішує питання про вину і покарання.", ru: "", correct: true },
      { de: "gibt Bürgerinnen/Bürgern rechtlichen Rat.", en: "", uk: "дає громадянам юридичні поради.", ru: "" },
      { de: "stellt Urkunden aus.", en: "", uk: "видає документи.", ru: "" },
      { de: "verteidigt die Angeklagte/den Angeklagten.", en: "", uk: "захищає обвинуваченого/обвинувачену.", ru: "" },
    ]
  },
  {
    id: "lid_141",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?", en: "", uk: "Хто в Німеччині консультує людей із правових питань і представляє їх у суді?", ru: "" },
    answers: [
      { de: "eine Rechtsanwältin/ein Rechtsanwalt", en: "", uk: "адвокат/адвокатка", ru: "", correct: true },
      { de: "eine Richterin/ein Richter", en: "", uk: "суддя", ru: "" },
      { de: "eine Schöffin/ein Schöffe", en: "", uk: "шеффен/шеффенка", ru: "" },
      { de: "eine Staatsanwältin/ein Staatsanwalt", en: "", uk: "прокурор/прокурорка", ru: "" },
    ]
  },
  {
    id: "lid_142",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland? Eine Richterin/ein Richter …", en: "", uk: "Яке головне завдання судді в Німеччині? Суддя …", ru: "" },
    answers: [
      { de: "vertritt Bürgerinnen und Bürger vor einem Gericht.", en: "", uk: "представляє громадян у суді.", ru: "" },
      { de: "arbeitet an einem Gericht und spricht Urteile.", en: "", uk: "працює в суді і виносить вироки.", ru: "", correct: true },
      { de: "ändert Gesetze.", en: "", uk: "змінює закони.", ru: "" },
      { de: "betreut Jugendliche vor Gericht.", en: "", uk: "опікується неповнолітніми в суді.", ru: "" },
    ]
  },
  {
    id: "lid_143",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Eine Richterin/ein Richter in Deutschland gehört zur …", en: "", uk: "Суддя в Німеччині належить до …", ru: "" },
    answers: [
      { de: "Judikative.", en: "", uk: "судової влади.", ru: "", correct: true },
      { de: "Exekutive.", en: "", uk: "виконавчої влади.", ru: "" },
      { de: "Operative.", en: "", uk: "оперативної влади.", ru: "" },
      { de: "Legislative.", en: "", uk: "законодавчої влади.", ru: "" },
    ]
  },
  {
    id: "lid_144",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Eine Richterin/ein Richter gehört in Deutschland zur …", en: "", uk: "Суддя в Німеччині належить до …", ru: "" },
    answers: [
      { de: "vollziehenden Gewalt.", en: "", uk: "виконавчої влади.", ru: "" },
      { de: "rechtsprechenden Gewalt.", en: "", uk: "судової влади.", ru: "", correct: true },
      { de: "planenden Gewalt.", en: "", uk: "планувальної влади.", ru: "" },
      { de: "gesetzgebenden Gewalt.", en: "", uk: "законодавчої влади.", ru: "" },
    ]
  },
  {
    id: "lid_145",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter? Für die …", en: "", uk: "У Німеччині державна влада поділена. Яка гілка влади охоплює роботу судді?", ru: "" },
    answers: [
      { de: "Judikative", en: "", uk: "судова влада", ru: "", correct: true },
      { de: "Exekutive", en: "", uk: "виконавча влада", ru: "" },
      { de: "Presse", en: "", uk: "преса", ru: "" },
      { de: "Legislative", en: "", uk: "законодавча влада", ru: "" },
    ]
  },
  {
    id: "lid_146",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?", en: "", uk: "Як у Німеччині називають розгляд справи в суді?", ru: "" },
    answers: [
      { de: "Programm", en: "", uk: "програма", ru: "" },
      { de: "Prozedur", en: "", uk: "процедура", ru: "" },
      { de: "Protokoll", en: "", uk: "протокол", ru: "" },
      { de: "Prozess", en: "", uk: "процес", ru: "", correct: true },
    ]
  },
  {
    id: "lid_147",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?", en: "", uk: "Яка робота судді в Німеччині?", ru: "" },
    answers: [
      { de: "Deutschland regieren", en: "", uk: "управляти Німеччиною", ru: "" },
      { de: "Recht sprechen", en: "", uk: "здійснювати правосуддя", ru: "", correct: true },
      { de: "Pläne erstellen", en: "", uk: "складати плани", ru: "" },
      { de: "Gesetze erlassen", en: "", uk: "видавати закони", ru: "" },
    ]
  },
  {
    id: "lid_148",
    lessonId: "k2m4",
    cat: "prinzipien",
    question: { de: "Was ist eine Aufgabe der Polizei in Deutschland?", en: "", uk: "Яке завдання поліції в Німеччині?", ru: "" },
    answers: [
      { de: "das Land zu verteidigen", en: "", uk: "захищати країну", ru: "" },
      { de: "die Bürgerinnen und Bürger abzuhören", en: "", uk: "прослуховувати громадян", ru: "" },
      { de: "die Gesetze zu beschließen", en: "", uk: "ухвалювати закони", ru: "" },
      { de: "die Einhaltung von Gesetzen zu überwachen", en: "", uk: "стежити за дотриманням законів", ru: "", correct: true },
    ]
  },
  {
    id: "lid_149",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Was ist ein Beispiel für antisemitisches Verhalten?", en: "", uk: "Що є прикладом антисемітської поведінки?", ru: "" },
    answers: [
      { de: "ein jüdisches Fest besuchen", en: "", uk: "відвідати єврейське свято", ru: "" },
      { de: "die israelische Regierung kritisieren", en: "", uk: "критикувати ізраїльський уряд", ru: "" },
      { de: "den Holocaust leugnen", en: "", uk: "заперечувати Голокост", ru: "", correct: true },
      { de: "gegen Juden Fußball spielen.", en: "", uk: "грати у футбол проти євреїв.", ru: "" },
    ]
  },
  {
    id: "lid_150",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …", en: "", uk: "Шеффен/шеффенка в Німеччині — це …", ru: "" },
    answers: [
      { de: "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.", en: "", uk: "заступник/заступниця міського голови.", ru: "" },
      { de: "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.", en: "", uk: "суддя на громадських засадах.", ru: "", correct: true },
      { de: "ein Mitglied eines Gemeinderats.", en: "", uk: "член ради громади.", ru: "" },
      { de: "eine Person, die Jura studiert hat.", en: "", uk: "особа, яка вивчала право.", ru: "" },
    ]
  },
  {
    id: "lid_151",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wer baute die Mauer in Berlin?", en: "", uk: "Хто збудував Берлінський мур?", ru: "" },
    answers: [
      { de: "Großbritannien", en: "", uk: "Великобританія", ru: "" },
      { de: "die DDR", en: "", uk: "НДР", ru: "", correct: true },
      { de: "die Bundesrepublik Deutschland", en: "", uk: "Федеративна Республіка Німеччина", ru: "" },
      { de: "die USA", en: "", uk: "США", ru: "" },
    ]
  },
  {
    id: "lid_152",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?", en: "", uk: "Коли націонал-соціалісти з Адольфом Гітлером були при владі в Німеччині?", ru: "" },
    answers: [
      { de: "1918 bis 1923", en: "", uk: "з 1918 до 1923 року", ru: "" },
      { de: "1932 bis 1950", en: "", uk: "з 1932 до 1950 року", ru: "" },
      { de: "1933 bis 1945", en: "", uk: "з 1933 до 1945 року", ru: "", correct: true },
      { de: "1945 bis 1989", en: "", uk: "з 1945 до 1989 року", ru: "" },
    ]
  },
  {
    id: "lid_153",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Was war am 8. Mai 1945?", en: "", uk: "Що було 8 травня 1945 року?", ru: "" },
    answers: [
      { de: "Tod Adolf Hitlers", en: "", uk: "смерть Адольфа Гітлера", ru: "" },
      { de: "Beginn des Berliner Mauerbaus", en: "", uk: "початок будівництва Берлінського муру", ru: "" },
      { de: "Wahl von Konrad Adenauer zum Bundeskanzler", en: "", uk: "обрання Конрада Аденауера федеральним канцлером", ru: "" },
      { de: "Ende des Zweiten Weltkriegs in Europa", en: "", uk: "закінчення Другої світової війни в Європі", ru: "", correct: true },
    ]
  },
  {
    id: "lid_154",
    lessonId: "k13m1",
    cat: "ns",
    question: { de: "Wann war der Zweite Weltkrieg zu Ende?", en: "", uk: "Коли закінчилася Друга світова війна?", ru: "" },
    answers: [
      { de: "1933", en: "", uk: "1933", ru: "" },
      { de: "1945", en: "", uk: "1945", ru: "", correct: true },
      { de: "1949", en: "", uk: "1949", ru: "" },
      { de: "1961", en: "", uk: "1961", ru: "" },
    ]
  },
  {
    id: "lid_155",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Wann waren die Nationalsozialisten in Deutschland an der Macht?", en: "", uk: "Коли націонал-соціалісти були при владі в Німеччині?", ru: "" },
    answers: [
      { de: "1888 bis 1918", en: "", uk: "з 1888 до 1918 року", ru: "" },
      { de: "1921 bis 1934", en: "", uk: "з 1921 до 1934 року", ru: "" },
      { de: "1933 bis 1945", en: "", uk: "з 1933 до 1945 року", ru: "", correct: true },
      { de: "1949 bis 1963", en: "", uk: "з 1949 до 1963 року", ru: "" },
    ]
  },
  {
    id: "lid_156",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "In welchem Jahr wurde Hitler Reichskanzler?", en: "", uk: "У якому році Гітлер став рейхсканцлером?", ru: "" },
    answers: [
      { de: "1923", en: "", uk: "1923", ru: "" },
      { de: "1927", en: "", uk: "1927", ru: "" },
      { de: "1933", en: "", uk: "1933", ru: "", correct: true },
      { de: "1936", en: "", uk: "1936", ru: "" },
    ]
  },
  {
    id: "lid_157",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …", en: "", uk: "Націонал-соціалісти з Адольфом Гітлером створили в 1933 році в Німеччині …", ru: "" },
    answers: [
      { de: "eine Diktatur.", en: "", uk: "диктатура.", ru: "", correct: true },
      { de: "einen demokratischen Staat.", en: "", uk: "демократичну державу.", ru: "" },
      { de: "eine Monarchie.", en: "", uk: "монархія.", ru: "" },
      { de: "ein Fürstentum.", en: "", uk: "князівство.", ru: "" },
    ]
  },
  {
    id: "lid_158",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Das „Dritte Reich“ war eine …", en: "", uk: "«Третій рейх» був …", ru: "" },
    answers: [
      { de: "Diktatur.", en: "", uk: "диктатурою.", ru: "", correct: true },
      { de: "Demokratie.", en: "", uk: "демократією.", ru: "" },
      { de: "Monarchie.", en: "", uk: "монархією.", ru: "" },
      { de: "Räterepublik.", en: "", uk: "республікою рад.", ru: "" },
    ]
  },
  {
    id: "lid_159",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?", en: "", uk: "Чого не було в Німеччині за часів націонал-соціалізму?", ru: "" },
    answers: [
      { de: "freie Wahlen", en: "", uk: "вільних виборів", ru: "", correct: true },
      { de: "Pressezensur", en: "", uk: "цензура преси", ru: "" },
      { de: "willkürliche Verhaftungen", en: "", uk: "свавільних арештів", ru: "" },
      { de: "Verfolgung von Juden", en: "", uk: "переслідування євреїв", ru: "" },
    ]
  },
  {
    id: "lid_160",
    lessonId: "k13m2",
    cat: "ns",
    question: { de: "Welcher Krieg dauerte von 1939 bis 1945?", en: "", uk: "Яка війна тривала з 1939 до 1945 року?", ru: "" },
    answers: [
      { de: "der Erste Weltkrieg", en: "", uk: "Перша світова війна", ru: "" },
      { de: "der Zweite Weltkrieg", en: "", uk: "Друга світова війна", ru: "", correct: true },
      { de: "der Vietnamkrieg", en: "", uk: "війна у Вʼєтнамі", ru: "" },
      { de: "der Golfkrieg", en: "", uk: "війна в Перській затоці", ru: "" },
    ]
  },
  {
    id: "lid_161",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was kennzeichnete den NS-Staat? Eine Politik …", en: "", uk: "Що було характерним для нацистської держави? Політика …", ru: "" },
    answers: [
      { de: "des staatlichen Rassismus", en: "", uk: "державного расизму", ru: "", correct: true },
      { de: "der Meinungsfreiheit", en: "", uk: "свободи слова", ru: "" },
      { de: "der allgemeinen Religionsfreiheit", en: "", uk: "загальної свободи віросповідання", ru: "" },
      { de: "der Entwicklung der Demokratie", en: "", uk: "розвитку демократії", ru: "" },
    ]
  },
  {
    id: "lid_162",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Claus Schenk Graf von Stauffenberg wurde bekannt durch …", en: "", uk: "Клаус Шенк граф фон Штауффенберг став відомим завдяки …", ru: "" },
    answers: [
      { de: "eine Goldmedaille bei den Olympischen Spielen 1936.", en: "", uk: "золотій медалі на Олімпійських іграх 1936 року.", ru: "" },
      { de: "den Bau des Reichstagsgebäudes.", en: "", uk: "будівництву будівлі Рейхстагу.", ru: "" },
      { de: "den Aufbau der Wehrmacht.", en: "", uk: "створенню Вермахту.", ru: "" },
      { de: "das Attentat auf Hitler am 20. Juli 1944.", en: "", uk: "замаху на Гітлера 20 липня 1944 року.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_163",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?", en: "", uk: "У якому році націонал-соціалісти зруйнували синагоги та єврейські магазини в Німеччині?", ru: "" },
    answers: [
      { de: "1925", en: "", uk: "1925", ru: "" },
      { de: "1930", en: "", uk: "1930", ru: "" },
      { de: "1938", en: "", uk: "1938", ru: "", correct: true },
      { de: "1945", en: "", uk: "1945", ru: "" },
    ]
  },
  {
    id: "lid_164",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was passierte am 9. November 1938 in Deutschland?", en: "", uk: "Що сталося 9 листопада 1938 року в Німеччині?", ru: "" },
    answers: [
      { de: "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.", en: "", uk: "Нападом на Польщу починається Друга світова війна.", ru: "" },
      { de: "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.", en: "", uk: "Націонал-соціалісти програють вибори і розпускають Рейхстаг.", ru: "" },
      { de: "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.", en: "", uk: "Єврейські магазини та синагоги руйнують націонал-соціалісти та їхні прихильники.", ru: "", correct: true },
      { de: "Hitler wird Reichspräsident und lässt alle Parteien verbieten.", en: "", uk: "Гітлер стає рейхспрезидентом і забороняє всі партії.", ru: "" },
    ]
  },
  {
    id: "lid_165",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?", en: "", uk: "Як звали першого федерального канцлера Федеративної Республіки Німеччина?", ru: "" },
    answers: [
      { de: "Konrad Adenauer", en: "", uk: "Конрад Аденауер", ru: "", correct: true },
      { de: "Kurt Georg Kiesinger", en: "", uk: "Курт Георг Кізінгер", ru: "" },
      { de: "Helmut Schmidt", en: "", uk: "Гельмут Шмідт", ru: "" },
      { de: "Willy Brandt", en: "", uk: "Віллі Брандт", ru: "" },
    ]
  },
  {
    id: "lid_166",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Bei welchen Demonstrationen in Deutschland riefen die Menschen „Wir sind das Volk“?", en: "", uk: "Під час яких демонстрацій у Німеччині люди скандували «Ми — народ»?", ru: "" },
    answers: [
      { de: "beim Arbeiteraufstand 1953 in der DDR", en: "", uk: "під час повстання робітників 1953 року в НДР", ru: "" },
      { de: "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland", en: "", uk: "під час демонстрацій 1968 року у Федеративній Республіці Німеччина", ru: "" },
      { de: "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland", en: "", uk: "під час антиатомних демонстрацій 1985 року у Федеративній Республіці Німеччина", ru: "" },
      { de: "bei den Montagsdemonstrationen 1989 in der DDR", en: "", uk: "під час понеділкових демонстрацій 1989 року в НДР", ru: "", correct: true },
    ]
  },
  {
    id: "lid_167",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als „Alliierte Besatzungsmächte“ bezeichnet?", en: "", uk: "Які країни після Другої світової війни називали в Німеччині «союзними окупаційними державами»?", ru: "" },
    answers: [
      { de: "Sowjetunion, Großbritannien, Polen, Schweden", en: "", uk: "Радянський Союз, Великобританія, Польща, Швеція", ru: "" },
      { de: "Frankreich, Sowjetunion, Italien, Japan", en: "", uk: "Франція, Радянський Союз, Італія, Японія", ru: "" },
      { de: "USA, Sowjetunion, Spanien, Portugal", en: "", uk: "США, Радянський Союз, Іспанія, Португалія", ru: "" },
      { de: "USA, Sowjetunion, Großbritannien, Frankreich", en: "", uk: "США, Радянський Союз, Великобританія, Франція", ru: "", correct: true },
    ]
  },
  {
    id: "lid_168",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Welches Land war keine „Alliierte Besatzungsmacht“ in Deutschland?", en: "", uk: "Яка країна не була «союзною окупаційною державою» в Німеччині?", ru: "" },
    answers: [
      { de: "USA", en: "", uk: "США", ru: "" },
      { de: "Sowjetunion", en: "", uk: "Радянський Союз", ru: "" },
      { de: "Frankreich", en: "", uk: "Франція", ru: "" },
      { de: "Japan", en: "", uk: "Японія", ru: "", correct: true },
    ]
  },
  {
    id: "lid_169",
    lessonId: "k14m1",
    cat: "nach1945",
    question: { de: "Wann wurde die Bundesrepublik Deutschland gegründet?", en: "", uk: "Коли було засновано Федеративну Республіку Німеччина?", ru: "" },
    answers: [
      { de: "1939", en: "", uk: "1939", ru: "" },
      { de: "1945", en: "", uk: "1945", ru: "" },
      { de: "1949", en: "", uk: "1949", ru: "", correct: true },
      { de: "1951", en: "", uk: "1951", ru: "" },
    ]
  },
  {
    id: "lid_170",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Was gab es während der Zeit des Nationalsozialismus in Deutschland?", en: "", uk: "Що існувало в Німеччині за часів націонал-соціалізму?", ru: "" },
    answers: [
      { de: "das Verbot von Parteien", en: "", uk: "заборона партій", ru: "", correct: true },
      { de: "das Recht zur freien Entfaltung der Persönlichkeit", en: "", uk: "право на вільний розвиток особистості", ru: "" },
      { de: "Pressefreiheit", en: "", uk: "свобода преси", ru: "" },
      { de: "den Schutz der Menschenwürde", en: "", uk: "захист людської гідності", ru: "" },
    ]
  },
  {
    id: "lid_171",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Soziale Marktwirtschaft bedeutet, die Wirtschaft …", en: "", uk: "Соціальна ринкова економіка означає, що економіка …", ru: "" },
    answers: [
      { de: "steuert sich allein nach Angebot und Nachfrage.", en: "", uk: "регулюється лише попитом і пропозицією.", ru: "" },
      { de: "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.", en: "", uk: "планується і регулюється державою, попит і пропозиція не враховуються.", ru: "" },
      { de: "richtet sich nach der Nachfrage im Ausland.", en: "", uk: "орієнтується на попит за кордоном.", ru: "" },
      { de: "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.", en: "", uk: "орієнтується на попит і пропозицію, але держава забезпечує соціальну рівновагу.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_172",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "In welcher Besatzungszone wurde die DDR gegründet? In der …", en: "", uk: "У якій окупаційній зоні було створено НДР? У …", ru: "" },
    answers: [
      { de: "amerikanischen Besatzungszone", en: "", uk: "американській окупаційній зоні", ru: "" },
      { de: "französischen Besatzungszone", en: "", uk: "французькій окупаційній зоні", ru: "" },
      { de: "britischen Besatzungszone", en: "", uk: "британській окупаційній зоні", ru: "" },
      { de: "sowjetischen Besatzungszone", en: "", uk: "радянській окупаційній зоні", ru: "", correct: true },
    ]
  },
  {
    id: "lid_173",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …", en: "", uk: "Федеративна Республіка Німеччина є однією із засновників …", ru: "" },
    answers: [
      { de: "des Nordatlantikpakts (NATO).", en: "", uk: "Північноатлантичного альянсу (НАТО).", ru: "" },
      { de: "der Vereinten Nationen (VN).", en: "", uk: "Організації Обʼєднаних Націй (ООН).", ru: "" },
      { de: "der Europäischen Union (EU).", en: "", uk: "Європейського Союзу (ЄС).", ru: "", correct: true },
      { de: "des Warschauer Pakts.", en: "", uk: "Варшавського договору.", ru: "" },
    ]
  },
  {
    id: "lid_174",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Wann wurde die DDR gegründet?", en: "", uk: "Коли було створено НДР?", ru: "" },
    answers: [
      { de: "1947", en: "", uk: "1947", ru: "" },
      { de: "1949", en: "", uk: "1949", ru: "", correct: true },
      { de: "1953", en: "", uk: "1953", ru: "" },
      { de: "1956", en: "", uk: "1956", ru: "" },
    ]
  },
  {
    id: "lid_175",
    lessonId: "k13m3",
    cat: "ns",
    question: { de: "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?", en: "", uk: "Скільки окупаційних зон було в Німеччині після Другої світової війни?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "", correct: true },
      { de: "5", en: "", uk: "5", ru: "" },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_176",
    lessonId: "k13m4",
    cat: "ns",
    img: "lid_176.png",
    question: { de: "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?", en: "", uk: "Як були розподілені окупаційні зони Німеччини після 1945 року?", ru: "" },
    answers: [
      { de: "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA", en: "", uk: "1=Великобританія, 2=Радянський Союз, 3=Франція, 4=США", ru: "" },
      { de: "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich", en: "", uk: "1=Радянський Союз, 2=Великобританія, 3=США, 4=Франція", ru: "" },
      { de: "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich", en: "", uk: "1=Великобританія, 2=Радянський Союз, 3=США, 4=Франція", ru: "", correct: true },
      { de: "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich", en: "", uk: "1=Великобританія, 2=США, 3=Радянський Союз, 4=Франція", ru: "" },
    ]
  },
  {
    id: "lid_177",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?", en: "", uk: "Яке німецьке місто після Другої світової війни було розділене на чотири сектори?", ru: "" },
    answers: [
      { de: "München", en: "", uk: "Мюнхен", ru: "" },
      { de: "Berlin", en: "", uk: "Берлін", ru: "", correct: true },
      { de: "Dresden", en: "", uk: "Дрезден", ru: "" },
      { de: "Frankfurt/Oder", en: "", uk: "Франкфурт-на-Одері", ru: "" },
    ]
  },
  {
    id: "lid_178",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?", en: "", uk: "З червня 1948 до травня 1949 року жителів Західного Берліна забезпечували через повітряний міст. Яка обставина була причиною цього?", ru: "" },
    answers: [
      { de: "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.", en: "", uk: "Для Франції постачання населення Західного Берліна літаками було дешевшим.", ru: "" },
      { de: "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.", en: "", uk: "Американські солдати та солдатки боялися нападів під час наземних перевезень.", ru: "" },
      { de: "Für Großbritannien war die Versorgung über die Luftbrücke schneller.", en: "", uk: "Для Великобританії постачання через повітряний міст було швидшим.", ru: "" },
      { de: "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.", en: "", uk: "Радянський Союз перервав усе сполучення сухопутними шляхами.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_179",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Wie endete der Zweite Weltkrieg in Europa offiziell?", en: "", uk: "Як офіційно закінчилася Друга світова війна в Європі?", ru: "" },
    answers: [
      { de: "mit dem Tod Adolf Hitlers", en: "", uk: "зі смертю Адольфа Гітлера", ru: "" },
      { de: "durch die bedingungslose Kapitulation Deutschlands", en: "", uk: "безумовною капітуляцією Німеччини", ru: "", correct: true },
      { de: "mit dem Rückzug der Deutschen aus den besetzten Gebieten", en: "", uk: "виведенням німців з окупованих територій", ru: "" },
      { de: "durch eine Revolution in Deutschland", en: "", uk: "революцією в Німеччині", ru: "" },
    ]
  },
  {
    id: "lid_180",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Der erste Bundeskanzler der Bundesrepublik Deutschland war …", en: "", uk: "Першим федеральним канцлером Федеративної Республіки Німеччина був …", ru: "" },
    answers: [
      { de: "Ludwig Erhard.", en: "", uk: "Людвіг Ерхард.", ru: "" },
      { de: "Willy Brandt.", en: "", uk: "Віллі Брандт.", ru: "" },
      { de: "Konrad Adenauer.", en: "", uk: "Конрад Аденауер.", ru: "", correct: true },
      { de: "Gerhard Schröder.", en: "", uk: "Герхард Шредер.", ru: "" },
    ]
  },
  {
    id: "lid_181",
    lessonId: "k14m2",
    cat: "nach1945",
    img: "lid_181.png",
    imgCredit: "© Bundesregierung/Engelbert Reineke",
    question: { de: "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?", en: "", uk: "Що хотів висловити Віллі Брандт своїм вклякненням у 1970 році в колишньому єврейському гетто у Варшаві?", ru: "" },
    answers: [
      { de: "Er hat sich den ehemaligen Alliierten unterworfen.", en: "", uk: "Він підкорився колишнім союзникам.", ru: "" },
      { de: "Er bat Polen und die polnischen Juden um Vergebung.", en: "", uk: "Він попросив пробачення в Польщі та польських євреїв.", ru: "", correct: true },
      { de: "Er zeigte seine Demut vor dem Warschauer Pakt.", en: "", uk: "Він виявив свою покору перед Варшавським договором.", ru: "" },
      { de: "Er sprach ein Gebet am Grab des Unbekannten Soldaten.", en: "", uk: "Він промовив молитву біля могили Невідомого солдата.", ru: "" },
    ]
  },
  {
    id: "lid_182",
    lessonId: "k17m1",
    cat: "religion",
    question: { de: "Wie heißt das jüdische Gebetshaus?", en: "", uk: "Як називається єврейський молитовний будинок?", ru: "" },
    answers: [
      { de: "Basilika", en: "", uk: "базиліка", ru: "" },
      { de: "Moschee", en: "", uk: "мечеть", ru: "" },
      { de: "Synagoge", en: "", uk: "синагога", ru: "", correct: true },
      { de: "Kirche", en: "", uk: "церква", ru: "" },
    ]
  },
  {
    id: "lid_183",
    lessonId: "k14m2",
    cat: "nach1945",
    question: { de: "Wann war in der Bundesrepublik Deutschland das „Wirtschaftswunder“?", en: "", uk: "Коли у Федеративній Республіці Німеччина було «економічне диво»?", ru: "" },
    answers: [
      { de: "40er Jahre", en: "", uk: "40-ві роки", ru: "" },
      { de: "50er Jahre", en: "", uk: "50-ті роки", ru: "", correct: true },
      { de: "70er Jahre", en: "", uk: "70-ті роки", ru: "" },
      { de: "80er Jahre", en: "", uk: "80-ті роки", ru: "" },
    ]
  },
  {
    id: "lid_184",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "184.   Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?", en: "", uk: "На якій правовій основі було створено державу Ізраїль?", ru: "" },
    answers: [
      { de: "eine Resolution der Vereinten Nationen", en: "", uk: "резолюція Організації Обʼєднаних Націй", ru: "", correct: true },
      { de: "ein Beschluss des Zionistenkongresses", en: "", uk: "рішення Сіоністського конгресу", ru: "" },
      { de: "ein Vorschlag der Bundesregierung", en: "", uk: "пропозиція федерального уряду", ru: "" },
      { de: "ein Vorschlag der UdSSR", en: "", uk: "пропозиція СРСР", ru: "" },
    ]
  },
  {
    id: "lid_185",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Wofür stand der Ausdruck „Eiserner Vorhang“? Für die Abschottung …", en: "", uk: "Що означав вислів «залізна завіса»? Ізоляцію …", ru: "" },
    answers: [
      { de: "des Warschauer Pakts gegen den Westen", en: "", uk: "Варшавського договору від Заходу", ru: "", correct: true },
      { de: "Norddeutschlands gegen Süddeutschland", en: "", uk: "Північної Німеччини від Південної Німеччини", ru: "" },
      { de: "Nazi-Deutschlands gegen die Alliierten", en: "", uk: "нацистської Німеччини від союзників", ru: "" },
      { de: "Europas gegen die USA", en: "", uk: "Європи від США", ru: "" },
    ]
  },
  {
    id: "lid_186",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?", en: "", uk: "У 1953 році в НДР відбулося повстання, про яке довгий час нагадувало державне свято у Федеративній Республіці Німеччина. Коли це було?", ru: "" },
    answers: [
      { de: "1. Mai", en: "", uk: "1 травня", ru: "" },
      { de: "17. Juni", en: "", uk: "17 червня", ru: "", correct: true },
      { de: "20. Juli", en: "", uk: "20 липня", ru: "" },
      { de: "9. November", en: "", uk: "9 листопада", ru: "" },
    ]
  },
  {
    id: "lid_187",
    lessonId: "k14m3",
    cat: "nach1945",
    img: "lid_187.png",
    question: { de: "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?", en: "", uk: "Яка німецька держава мала чорно-червоно-золотий прапор з молотом, циркулем і колоссям?", ru: "" },
    answers: [
      { de: "Preußen", en: "", uk: "Пруссія", ru: "" },
      { de: "Bundesrepublik Deutschland", en: "", uk: "Федеративна Республіка Німеччина", ru: "" },
      { de: "„Drittes Reich“", en: "", uk: "«Третій рейх»", ru: "" },
      { de: "DDR", en: "", uk: "НДР", ru: "", correct: true },
    ]
  },
  {
    id: "lid_188",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "In welchem Jahr wurde die Mauer in Berlin gebaut?", en: "", uk: "У якому році було збудовано Берлінський мур?", ru: "" },
    answers: [
      { de: "1953", en: "", uk: "1953", ru: "" },
      { de: "1956", en: "", uk: "1956", ru: "" },
      { de: "1959", en: "", uk: "1959", ru: "" },
      { de: "1961", en: "", uk: "1961", ru: "", correct: true },
    ]
  },
  {
    id: "lid_189",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Wann baute die DDR die Mauer in Berlin?", en: "", uk: "Коли НДР збудувала Берлінський мур?", ru: "" },
    answers: [
      { de: "1919", en: "", uk: "1919", ru: "" },
      { de: "1933", en: "", uk: "1933", ru: "" },
      { de: "1961", en: "", uk: "1961", ru: "", correct: true },
      { de: "1990", en: "", uk: "1990", ru: "" },
    ]
  },
  {
    id: "lid_190",
    lessonId: "k14m3",
    cat: "nach1945",
    question: { de: "Was bedeutet die Abkürzung DDR?", en: "", uk: "Що означає абревіатура DDR?", ru: "" },
    answers: [
      { de: "Dritter Deutscher Rundfunk", en: "", uk: "Третє німецьке радіомовлення", ru: "" },
      { de: "Die Deutsche Republik", en: "", uk: "Німецька республіка", ru: "" },
      { de: "Dritte Deutsche Republik", en: "", uk: "Третя німецька республіка", ru: "" },
      { de: "Deutsche Demokratische Republik", en: "", uk: "Німецька Демократична Республіка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_191",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Wann wurde die Mauer in Berlin für alle geöffnet?", en: "", uk: "Коли Берлінський мур було відкрито для всіх?", ru: "" },
    answers: [
      { de: "1987", en: "", uk: "1987", ru: "" },
      { de: "1989", en: "", uk: "1989", ru: "", correct: true },
      { de: "1992", en: "", uk: "1992", ru: "" },
      { de: "1995", en: "", uk: "1995", ru: "" },
    ]
  },
  {
    id: "lid_192",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "" },
    answers: [
      { de: "Brandenburg", en: "", uk: "Бранденбург", ru: "", correct: true },
      { de: "Bayern", en: "", uk: "Баварія", ru: "" },
      { de: "Saarland", en: "", uk: "Саар", ru: "" },
      { de: "Hessen", en: "", uk: "Гессен", ru: "" },
    ]
  },
  {
    id: "lid_193",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Von 1961 bis 1989 war Berlin …", en: "", uk: "З 1961 до 1989 року Берлін був …", ru: "" },
    answers: [
      { de: "ohne Bürgermeister.", en: "", uk: "без бургомістра.", ru: "" },
      { de: "ein eigener Staat.", en: "", uk: "окремою державою.", ru: "" },
      { de: "durch eine Mauer geteilt.", en: "", uk: "розділений муром.", ru: "", correct: true },
      { de: "nur mit dem Flugzeug erreichbar.", en: "", uk: "доступний лише літаком.", ru: "" },
    ]
  },
  {
    id: "lid_194",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …", en: "", uk: "3 жовтня в Німеччині відзначають День німецької …", ru: "" },
    answers: [
      { de: "Einheit.", en: "", uk: "єдності.", ru: "", correct: true },
      { de: "Nation.", en: "", uk: "нації.", ru: "" },
      { de: "Bundesländer.", en: "", uk: "федеральних земель.", ru: "" },
      { de: "Städte.", en: "", uk: "міст.", ru: "" },
    ]
  },
  {
    id: "lid_195",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "" },
    answers: [
      { de: "Hessen", en: "", uk: "Гессен", ru: "" },
      { de: "Sachsen-Anhalt", en: "", uk: "Саксонія-Ангальт", ru: "", correct: true },
      { de: "Nordrhein-Westfalen", en: "", uk: "Північний Рейн-Вестфалія", ru: "" },
      { de: "Saarland", en: "", uk: "Саар", ru: "" },
    ]
  },
  {
    id: "lid_196",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Warum nennt man die Zeit im Herbst 1989 in der DDR „Die Wende“? In dieser Zeit veränderte sich die DDR politisch …", en: "", uk: "Чому період осені 1989 року в НДР називають «Поворотом»? У цей час НДР змінилася політично …", ru: "" },
    answers: [
      { de: "von einer Diktatur zur Demokratie.", en: "", uk: "від диктатури до демократії.", ru: "", correct: true },
      { de: "von einer liberalen Marktwirtschaft zum Sozialismus.", en: "", uk: "від ліберальної ринкової економіки до соціалізму.", ru: "" },
      { de: "von einer Monarchie zur Sozialdemokratie.", en: "", uk: "від монархії до соціал-демократії.", ru: "" },
      { de: "von einem religiösen Staat zu einem kommunistischen Staat.", en: "", uk: "від релігійної держави до комуністичної.", ru: "" },
    ]
  },
  {
    id: "lid_197",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "" },
    answers: [
      { de: "Thüringen", en: "", uk: "Тюрингія", ru: "", correct: true },
      { de: "Hessen", en: "", uk: "Гессен", ru: "" },
      { de: "Bayern", en: "", uk: "Баварія", ru: "" },
      { de: "Bremen", en: "", uk: "Бремен", ru: "" },
    ]
  },
  {
    id: "lid_198",
    lessonId: "k15m1",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "" },
    answers: [
      { de: "Bayern", en: "", uk: "Баварія", ru: "" },
      { de: "Niedersachsen", en: "", uk: "Нижня Саксонія", ru: "" },
      { de: "Sachsen", en: "", uk: "Саксонія", ru: "", correct: true },
      { de: "Baden-Württemberg", en: "", uk: "Баден-Вюртемберг", ru: "" },
    ]
  },
  {
    id: "lid_199",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Mit der Abkürzung „Stasi“ meinte man in der DDR …", en: "", uk: "Під абревіатурою «Штазі» в НДР розуміли …", ru: "" },
    answers: [
      { de: "das Parlament.", en: "", uk: "парламент.", ru: "" },
      { de: "das Ministerium für Staatssicherheit.", en: "", uk: "Міністерство державної безпеки.", ru: "", correct: true },
      { de: "eine regierende Partei.", en: "", uk: "правлячу партію.", ru: "" },
      { de: "das Ministerium für Volksbildung.", en: "", uk: "Міністерство народної освіти", ru: "" },
    ]
  },
  {
    id: "lid_200",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?", en: "", uk: "Яка нинішня німецька федеральна земля раніше входила до території НДР?", ru: "" },
    answers: [
      { de: "Hessen", en: "", uk: "Гессен", ru: "" },
      { de: "Schleswig-Holstein", en: "", uk: "Шлезвіг-Гольштейн", ru: "" },
      { de: "Mecklenburg-Vorpommern", en: "", uk: "Мекленбург-Передня Померанія", ru: "", correct: true },
      { de: "Saarland", en: "", uk: "Саар", ru: "" },
    ]
  },
  {
    id: "lid_201",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?", en: "", uk: "Який з наведених переліків містить лише федеральні землі, що входили до території колишньої НДР?", ru: "" },
    answers: [
      { de: "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg", en: "", uk: "Нижня Саксонія, Північний Рейн-Вестфалія, Гессен, Шлезвіг-Гольштейн, Бранденбург", ru: "" },
      { de: "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen", en: "", uk: "Мекленбург-Передня Померанія, Бранденбург, Саксонія, Саксонія-Ангальт, Тюрингія", ru: "", correct: true },
      { de: "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen", en: "", uk: "Баварія, Баден-Вюртемберг, Рейнланд-Пфальц, Тюрингія, Саксонія", ru: "" },
      { de: "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg", en: "", uk: "Саксонія, Тюрингія, Гессен, Нижня Саксонія, Бранденбург", ru: "" },
    ]
  },
  {
    id: "lid_202",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Zu wem gehörte die DDR im „Kalten Krieg“?", en: "", uk: "До кого належала НДР у «холодній війні»?", ru: "" },
    answers: [
      { de: "zu den Westmächten", en: "", uk: "до західних держав", ru: "" },
      { de: "zum Warschauer Pakt", en: "", uk: "до Варшавського договору", ru: "", correct: true },
      { de: "zur NATO", en: "", uk: "до НАТО", ru: "" },
      { de: "zu den blockfreien Staaten", en: "", uk: "до неприєднаних країн", ru: "" },
    ]
  },
  {
    id: "lid_203",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Wie hieß das Wirtschaftssystem der DDR?", en: "", uk: "Як називалася економічна система НДР?", ru: "" },
    answers: [
      { de: "Marktwirtschaft", en: "", uk: "ринкова економіка", ru: "" },
      { de: "Planwirtschaft", en: "", uk: "планова економіка", ru: "", correct: true },
      { de: "Angebot und Nachfrage", en: "", uk: "попит і пропозиція", ru: "" },
      { de: "Kapitalismus", en: "", uk: "капіталізм", ru: "" },
    ]
  },
  {
    id: "lid_204",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?", en: "", uk: "Як Федеративна Республіка Німеччина і НДР стали єдиною державою?", ru: "" },
    answers: [
      { de: "Die Bundesrepublik hat die DDR besetzt.", en: "", uk: "Федеративна Республіка окупувала НДР.", ru: "" },
      { de: "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.", en: "", uk: "Нинішні пʼять східних федеральних земель приєдналися до Федеративної Республіки Німеччина.", ru: "", correct: true },
      { de: "Die westlichen Bundesländer sind der DDR beigetreten.", en: "", uk: "Західні федеральні землі приєдналися до НДР.", ru: "" },
      { de: "Die DDR hat die Bundesrepublik Deutschland besetzt.", en: "", uk: "НДР окупувала Федеративну Республіку Німеччина.", ru: "" },
    ]
  },
  {
    id: "lid_205",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …", en: "", uk: "Після приєднання НДР до Федеративної Республіки Німеччина нові федеральні землі тепер також належать …", ru: "" },
    answers: [
      { de: "zur Europäischen Union.", en: "", uk: "до Європейського Союзу.", ru: "", correct: true },
      { de: "zum Warschauer Pakt.", en: "", uk: "до Варшавського договору.", ru: "" },
      { de: "zur OPEC.", en: "", uk: "до ОПЕК.", ru: "" },
      { de: "zur Europäischen Verteidigungsgemeinschaft.", en: "", uk: "до Європейського оборонного співтовариства.", ru: "" },
    ]
  },
  {
    id: "lid_206",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "206.   Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?", en: "", uk: "Про що нагадують так звані «камені спотикання» в Німеччині?", ru: "" },
    answers: [
      { de: "an berühmte deutsche Politikerinnen und Politiker", en: "", uk: "про відомих німецьких політиків", ru: "" },
      { de: "an die Opfer des Nationalsozialismus", en: "", uk: "про жертв націонал-соціалізму", ru: "", correct: true },
      { de: "an Verkehrstote", en: "", uk: "про загиблих на дорогах", ru: "" },
      { de: "an bekannte jüdische Musiker", en: "", uk: "про відомих єврейських музикантів", ru: "" },
    ]
  },
  {
    id: "lid_207",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "In welchem Militärbündnis war die DDR Mitglied?", en: "", uk: "Членом якого військового союзу була НДР?", ru: "" },
    answers: [
      { de: "in der NATO", en: "", uk: "у НАТО", ru: "" },
      { de: "im Rheinbund", en: "", uk: "у Рейнському союзі", ru: "" },
      { de: "im Warschauer Pakt", en: "", uk: "у Варшавському договорі", ru: "", correct: true },
      { de: "im Europabündnis", en: "", uk: "в Європейському альянсі", ru: "" },
    ]
  },
  {
    id: "lid_208",
    lessonId: "k14m4",
    cat: "nach1945",
    question: { de: "Was war die „Stasi“?", en: "", uk: "Чим була «Штазі»?", ru: "" },
    answers: [
      { de: "der Geheimdienst im „Dritten Reich“", en: "", uk: "спецслужба в «Третьому рейху»", ru: "" },
      { de: "eine berühmte deutsche Gedenkstätte", en: "", uk: "відомий німецький меморіал", ru: "" },
      { de: "der Geheimdienst der DDR", en: "", uk: "спецслужба НДР", ru: "", correct: true },
      { de: "ein deutscher Sportverein während des Zweiten Weltkrieges", en: "", uk: "німецький спортивний клуб часів Другої світової війни", ru: "" },
    ]
  },
  {
    id: "lid_209",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Welches war das Wappen der Deutschen Demokratischen Republik?", en: "", uk: "Який герб мала Німецька Демократична Республіка?", ru: "" },
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
    question: { de: "Was ereignete sich am 17. Juni 1953 in der DDR?", en: "", uk: "Що сталося 17 червня 1953 року в НДР?", ru: "" },
    answers: [
      { de: "der feierliche Beitritt zum Warschauer Pakt", en: "", uk: "урочисте вступлення до Варшавського договору", ru: "" },
      { de: "landesweite Streiks und ein Volksaufstand", en: "", uk: "загальнокраїнні страйки та народне повстання", ru: "", correct: true },
      { de: "der 1. SED-Parteitag", en: "", uk: "перший зʼїзд СЄПН", ru: "" },
      { de: "der erste Besuch Fidel Castros", en: "", uk: "перший візит Фіделя Кастро", ru: "" },
    ]
  },
  {
    id: "lid_211",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Welcher Politiker steht für die „Ostverträge“?", en: "", uk: "Який політик асоціюється зі «Східними договорами»?", ru: "" },
    answers: [
      { de: "Helmut Kohl", en: "", uk: "Гельмут Коль", ru: "" },
      { de: "Willy Brandt", en: "", uk: "Віллі Брандт", ru: "", correct: true },
      { de: "Michail Gorbatschow", en: "", uk: "Михайло Горбачов", ru: "" },
      { de: "Ludwig Erhard", en: "", uk: "Людвіг Ерхард", ru: "" },
    ]
  },
  {
    id: "lid_212",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Wie heißt Deutschland mit vollem Namen?", en: "", uk: "Як повністю називається Німеччина?", ru: "" },
    answers: [
      { de: "Bundesstaat Deutschland", en: "", uk: "Федеральна держава Німеччина", ru: "" },
      { de: "Bundesländer Deutschland", en: "", uk: "Федеральні землі Німеччини", ru: "" },
      { de: "Bundesrepublik Deutschland", en: "", uk: "Федеративна Республіка Німеччина", ru: "", correct: true },
      { de: "Bundesbezirk Deutschland", en: "", uk: "Федеральний округ Німеччина", ru: "" },
    ]
  },
  {
    id: "lid_213",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Wie viele Einwohner hat Deutschland?", en: "", uk: "Скільки жителів у Німеччині?", ru: "" },
    answers: [
      { de: "70 Millionen", en: "", uk: "70 мільйонів", ru: "" },
      { de: "78 Millionen", en: "", uk: "78 мільйонів", ru: "" },
      { de: "84 Millionen", en: "", uk: "84 мільйони", ru: "", correct: true },
      { de: "90 Millionen", en: "", uk: "90 мільйонів", ru: "" },
    ]
  },
  {
    id: "lid_214",
    lessonId: "k10m1",
    cat: "staatssymbole",
    question: { de: "Welche Farben hat die deutsche Flagge?", en: "", uk: "Які кольори має німецький прапор?", ru: "" },
    answers: [
      { de: "schwarz-rot-gold", en: "", uk: "чорно-червоно-золотий", ru: "", correct: true },
      { de: "rot-weiß-schwarz", en: "", uk: "червоно-біло-чорний", ru: "" },
      { de: "schwarz-rot-grün", en: "", uk: "чорно-червоно-зелений", ru: "" },
      { de: "schwarz-gelb-rot", en: "", uk: "чорно-жовто-червоний", ru: "" },
    ]
  },
  {
    id: "lid_215",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?", en: "", uk: "Кого називають «канцлером німецької єдності»?", ru: "" },
    answers: [
      { de: "Gerhard Schröder", en: "", uk: "Герхард Шредер", ru: "" },
      { de: "Helmut Kohl", en: "", uk: "Гельмут Коль", ru: "", correct: true },
      { de: "Konrad Adenauer", en: "", uk: "Конрад Аденауер", ru: "" },
      { de: "Helmut Schmidt", en: "", uk: "Гельмут Шмідт", ru: "" },
    ]
  },
  {
    id: "lid_216",
    lessonId: "k10m1",
    cat: "staatssymbole",
    img: "lid_216.png",
    imgCredit: "© Deutscher Bundestag/Janine Schmitz",
    question: { de: "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?", en: "", uk: "Який символ можна побачити в пленарній залі Бундестагу?", ru: "" },
    answers: [
      { de: "der Bundesadler", en: "", uk: "федеральний орел", ru: "", correct: true },
      { de: "die Fahne der Stadt Berlin", en: "", uk: "прапор міста Берліна", ru: "" },
      { de: "der Reichsadler", en: "", uk: "імперський орел", ru: "" },
      { de: "die Reichskrone", en: "", uk: "імперська корона", ru: "" },
    ]
  },
  {
    id: "lid_217",
    lessonId: "k14m5",
    cat: "nach1945",
    question: { de: "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?", en: "", uk: "У який період існувала Німецька Демократична Республіка (НДР)?", ru: "" },
    answers: [
      { de: "1919 bis 1927", en: "", uk: "з 1919 до 1927 року", ru: "" },
      { de: "1933 bis 1945", en: "", uk: "з 1933 до 1945 року", ru: "" },
      { de: "1945 bis 1961", en: "", uk: "з 1945 до 1961 року", ru: "" },
      { de: "1949 bis 1990", en: "", uk: "з 1949 до 1990 року", ru: "", correct: true },
    ]
  },
  {
    id: "lid_218",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?", en: "", uk: "Скільки федеральних земель приєдналося до Федеративної Республіки Німеччина під час воззʼєднання 1990 року?", ru: "" },
    answers: [
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
      { de: "7", en: "", uk: "7", ru: "" },
    ]
  },
  {
    id: "lid_219",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …", en: "", uk: "Федеративна Республіка Німеччина має нинішні кордони з …", ru: "" },
    answers: [
      { de: "1933", en: "", uk: "1933", ru: "" },
      { de: "1949", en: "", uk: "1949", ru: "" },
      { de: "1971", en: "", uk: "1971", ru: "" },
      { de: "1990", en: "", uk: "1990", ru: "", correct: true },
    ]
  },
  {
    id: "lid_220",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?", en: "", uk: "27 січня — офіційний день памʼяті в Німеччині. Про що нагадує цей день?", ru: "" },
    answers: [
      { de: "an das Ende des Zweiten Weltkrieges", en: "", uk: "про закінчення Другої світової війни", ru: "" },
      { de: "an die Verabschiedung des Grundgesetzes", en: "", uk: "про ухвалення Основного закону", ru: "" },
      { de: "an die Wiedervereinigung Deutschlands", en: "", uk: "про воззʼєднання Німеччини", ru: "" },
      { de: "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)", en: "", uk: "про жертв націонал-соціалізму (день визволення табору знищення Аушвіц)", ru: "", correct: true },
    ]
  },
  {
    id: "lid_221",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?", en: "", uk: "Німеччина є учасницею Шенгенської угоди. Що це означає?", ru: "" },
    answers: [
      { de: "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.", en: "", uk: "Німці можуть їздити до багатьох країн Європи без паспортного контролю.", ru: "", correct: true },
      { de: "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.", en: "", uk: "Усі люди можуть вʼїжджати до Німеччини без перевірки особи.", ru: "" },
      { de: "Deutsche können ohne Passkontrolle in jedes Land reisen.", en: "", uk: "Німці можуть їздити до будь-якої країни без паспортного контролю.", ru: "" },
      { de: "Deutsche können in jedem Land mit dem Euro bezahlen.", en: "", uk: "Німці можуть розраховуватися євро в будь-якій країні.", ru: "" },
    ]
  },
  {
    id: "lid_222",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "", uk: "Яка країна є сусідкою Німеччини?", ru: "" },
    answers: [
      { de: "Ungarn", en: "", uk: "Угорщина", ru: "" },
      { de: "Portugal", en: "", uk: "Португалія", ru: "" },
      { de: "Spanien", en: "", uk: "Іспанія", ru: "" },
      { de: "Schweiz", en: "", uk: "Швейцарія", ru: "", correct: true },
    ]
  },
  {
    id: "lid_223",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "", uk: "Яка країна є сусідкою Німеччини?", ru: "" },
    answers: [
      { de: "Rumänien", en: "", uk: "Румунія", ru: "" },
      { de: "Bulgarien", en: "", uk: "Болгарія", ru: "" },
      { de: "Polen", en: "", uk: "Польща", ru: "", correct: true },
      { de: "Griechenland", en: "", uk: "Греція", ru: "" },
    ]
  },
  {
    id: "lid_224",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "Was bedeutet die Abkürzung EU?", en: "", uk: "Що означає абревіатура EU?", ru: "" },
    answers: [
      { de: "Europäische Unternehmen", en: "", uk: "Європейські підприємства", ru: "" },
      { de: "Europäische Union", en: "", uk: "Європейський Союз", ru: "", correct: true },
      { de: "Einheitliche Union", en: "", uk: "Єдиний союз", ru: "" },
      { de: "Euro Union", en: "", uk: "Євро-союз", ru: "" },
    ]
  },
  {
    id: "lid_225",
    lessonId: "k16m1",
    cat: "europa",
    question: { de: "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?", en: "", uk: "У якій іншій країні проживає велика німецькомовна частина населення?", ru: "" },
    answers: [
      { de: "Tschechien", en: "", uk: "Чехія", ru: "" },
      { de: "Norwegen", en: "", uk: "Норвегія", ru: "" },
      { de: "Spanien", en: "", uk: "Іспанія", ru: "" },
      { de: "Österreich", en: "", uk: "Австрія", ru: "", correct: true },
    ]
  },
  {
    id: "lid_226",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welche ist die Flagge der Europäischen Union?", en: "", uk: "Який прапор Європейського Союзу?", ru: "" },
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
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "", uk: "Яка країна є сусідкою Німеччини?", ru: "" },
    answers: [
      { de: "Finnland", en: "", uk: "Фінляндія", ru: "" },
      { de: "Dänemark", en: "", uk: "Данія", ru: "", correct: true },
      { de: "Norwegen", en: "", uk: "Норвегія", ru: "" },
      { de: "Schweden", en: "", uk: "Швеція", ru: "" },
    ]
  },
  {
    id: "lid_228",
    lessonId: "k15m2",
    cat: "wiedervereinigung",
    question: { de: "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?", en: "", uk: "Як загалом називають приєднання НДР до Федеративної Республіки Німеччина в 1990 році?", ru: "" },
    answers: [
      { de: "NATO-Osterweiterung", en: "", uk: "розширення НАТО на схід", ru: "" },
      { de: "EU-Osterweiterung", en: "", uk: "розширення ЄС на схід", ru: "" },
      { de: "Deutsche Wiedervereinigung", en: "", uk: "воззʼєднання Німеччини", ru: "", correct: true },
      { de: "Europäische Gemeinschaft", en: "", uk: "Європейське співтовариство", ru: "" },
    ]
  },
  {
    id: "lid_229",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "", uk: "Яка країна є сусідкою Німеччини?", ru: "" },
    answers: [
      { de: "Spanien", en: "", uk: "Іспанія", ru: "" },
      { de: "Bulgarien", en: "", uk: "Болгарія", ru: "" },
      { de: "Norwegen", en: "", uk: "Норвегія", ru: "" },
      { de: "Luxemburg", en: "", uk: "Люксембург", ru: "", correct: true },
    ]
  },
  {
    id: "lid_230",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …", en: "", uk: "Європейський парламент обирають регулярно, а саме кожні …", ru: "" },
    answers: [
      { de: "5 Jahre.", en: "", uk: "5 років.", ru: "", correct: true },
      { de: "6 Jahre.", en: "", uk: "6 років.", ru: "" },
      { de: "7 Jahre.", en: "", uk: "7 років.", ru: "" },
      { de: "8 Jahre.", en: "", uk: "8 років.", ru: "" },
    ]
  },
  {
    id: "lid_231",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Was bedeutet der Begriff „europäische Integration“?", en: "", uk: "Що означає поняття «європейська інтеграція»?", ru: "" },
    answers: [
      { de: "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.", en: "", uk: "Йдеться про американських іммігрантів та іммігранток у Європі.", ru: "" },
      { de: "Der Begriff meint den Einwanderungsstopp nach Europa.", en: "", uk: "Поняття означає припинення імміграції до Європи.", ru: "" },
      { de: "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.", en: "", uk: "Йдеться про європейських емігрантів та емігранток у США.", ru: "" },
      { de: "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.", en: "", uk: "Поняття означає обʼєднання європейських держав в ЄС.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_232",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Wer wird bei der Europawahl gewählt?", en: "", uk: "Кого обирають на виборах до Європейського парламенту?", ru: "" },
    answers: [
      { de: "die Europäische Kommission", en: "", uk: "Європейську комісію", ru: "" },
      { de: "die Länder, die in die EU eintreten dürfen", en: "", uk: "країни, які можуть вступити до ЄС", ru: "" },
      { de: "die Abgeordneten des Europäischen Parlaments", en: "", uk: "депутатів Європейського парламенту", ru: "", correct: true },
      { de: "die europäische Verfassung", en: "", uk: "європейську конституцію", ru: "" },
    ]
  },
  {
    id: "lid_233",
    lessonId: "k16m2",
    cat: "europa",
    question: { de: "Welches Land ist ein Nachbarland von Deutschland?", en: "", uk: "Яка країна є сусідкою Німеччини?", ru: "" },
    answers: [
      { de: "Tschechien", en: "", uk: "Чехія", ru: "", correct: true },
      { de: "Bulgarien", en: "", uk: "Болгарія", ru: "" },
      { de: "Griechenland", en: "", uk: "Греція", ru: "" },
      { de: "Portugal", en: "", uk: "Португалія", ru: "" },
    ]
  },
  {
    id: "lid_234",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Wo ist ein Sitz des Europäischen Parlaments?", en: "", uk: "Де розташована одна з резиденцій Європейського парламенту?", ru: "" },
    answers: [
      { de: "London", en: "", uk: "Лондон", ru: "" },
      { de: "Paris", en: "", uk: "Париж", ru: "" },
      { de: "Berlin", en: "", uk: "Берлін", ru: "" },
      { de: "Straßburg", en: "", uk: "Страсбург", ru: "", correct: true },
    ]
  },
  {
    id: "lid_235",
    lessonId: "k16m3",
    cat: "europa",
    img: "lid_235.png",
    imgCredit: "© Bundesregierung/Richard Schulze-Vorberg",
    question: { de: "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?", en: "", uk: "Тодішній президент Франції Франсуа Міттеран і тодішній федеральний канцлер Німеччини Гельмут Коль разом вшановують у Вердені памʼять загиблих в обох світових війнах. Яка мета Європейського Союзу стає очевидною під час цієї зустрічі?", ru: "" },
    answers: [
      { de: "Freundschaft zwischen England und Deutschland", en: "", uk: "дружба між Англією та Німеччиною", ru: "" },
      { de: "Reisefreiheit in alle Länder der EU", en: "", uk: "свобода пересування у всі країни ЄС", ru: "" },
      { de: "Frieden und Sicherheit in den Ländern der EU", en: "", uk: "мир і безпека в країнах ЄС", ru: "", correct: true },
      { de: "einheitliche Feiertage in den Ländern der EU", en: "", uk: "єдині святкові дні в країнах ЄС", ru: "" },
    ]
  },
  {
    id: "lid_236",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Wie viele Mitgliedstaaten hat die EU heute?", en: "", uk: "Скільки держав-членів має ЄС сьогодні?", ru: "" },
    answers: [
      { de: "21", en: "", uk: "21", ru: "" },
      { de: "23", en: "", uk: "23", ru: "" },
      { de: "25", en: "", uk: "25", ru: "" },
      { de: "27", en: "", uk: "27", ru: "", correct: true },
    ]
  },
  {
    id: "lid_237",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "2007 wurde das 50-jährige Jubiläum der „Römischen Verträge“ gefeiert. Was war der Inhalt der Verträge?", en: "", uk: "У 2007 році відзначали 50-річчя «Римських договорів». Що було змістом цих договорів?", ru: "" },
    answers: [
      { de: "Beitritt Deutschlands zur NATO", en: "", uk: "вступ Німеччини до НАТО", ru: "" },
      { de: "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)", en: "", uk: "створення Європейського економічного співтовариства (ЄЕС)", ru: "", correct: true },
      { de: "Verpflichtung Deutschlands zu Reparationsleistungen", en: "", uk: "зобовʼязання Німеччини виплачувати репарації", ru: "" },
      { de: "Festlegung der Oder-Neiße-Linie als Ostgrenze", en: "", uk: "визначення лінії Одер—Нейсе як східного кордону", ru: "" },
    ]
  },
  {
    id: "lid_238",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "An welchen Orten arbeitet das Europäische Parlament?", en: "", uk: "У яких місцях працює Європейський парламент?", ru: "" },
    answers: [
      { de: "Paris, London und Den Haag", en: "", uk: "Париж, Лондон і Гаага", ru: "" },
      { de: "Straßburg, Luxemburg und Brüssel", en: "", uk: "Страсбург, Люксембург і Брюссель", ru: "", correct: true },
      { de: "Rom, Bern und Wien", en: "", uk: "Рим, Берн і Відень", ru: "" },
      { de: "Bonn, Zürich und Mailand", en: "", uk: "Бонн, Цюрих і Мілан", ru: "" },
    ]
  },
  {
    id: "lid_239",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?", en: "", uk: "Якими договорами Федеративна Республіка Німеччина разом з іншими державами обʼєдналася в Європейське економічне співтовариство?", ru: "" },
    answers: [
      { de: "durch die „Hamburger Verträge“", en: "", uk: "«Гамбурзькими договорами»", ru: "" },
      { de: "durch die „Römischen Verträge“", en: "", uk: "«Римськими договорами»", ru: "", correct: true },
      { de: "durch die „Pariser Verträge“", en: "", uk: "«Паризькими договорами»", ru: "" },
      { de: "durch die „Londoner Verträge“", en: "", uk: "«Лондонськими договорами»", ru: "" },
    ]
  },
  {
    id: "lid_240",
    lessonId: "k16m3",
    cat: "europa",
    question: { de: "Seit wann bezahlt man in Deutschland mit dem Euro in bar?", en: "", uk: "Відколи в Німеччині розраховуються готівкою в євро?", ru: "" },
    answers: [
      { de: "1995", en: "", uk: "1995", ru: "" },
      { de: "1998", en: "", uk: "1998", ru: "" },
      { de: "2002", en: "", uk: "2002", ru: "", correct: true },
      { de: "2005", en: "", uk: "2005", ru: "" },
    ]
  },
  {
    id: "lid_241",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?", en: "", uk: "Пані Зеґер чекає дитину. Що їй потрібно зробити, щоб отримати батьківську допомогу (Elterngeld)?", ru: "" },
    answers: [
      { de: "Sie muss an ihre Krankenkasse schreiben.", en: "", uk: "Вона має написати до своєї лікарняної каси.", ru: "" },
      { de: "Sie muss einen Antrag bei der Elterngeldstelle stellen.", en: "", uk: "Вона має подати заяву до відомства з виплати батьківської допомоги.", ru: "", correct: true },
      { de: "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.", en: "", uk: "Їй нічого не потрібно робити, тому що вона отримує батьківську допомогу автоматично.", ru: "" },
      { de: "Sie muss das Arbeitsamt um Erlaubnis bitten.", en: "", uk: "Вона має попросити дозволу в агентстві зайнятості.", ru: "" },
    ]
  },
  {
    id: "lid_242",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?", en: "", uk: "Хто вирішує, чи піде дитина в Німеччині в дитячий садок?", ru: "" },
    answers: [
      { de: "der Staat", en: "", uk: "держава", ru: "" },
      { de: "die Bundesländer", en: "", uk: "федеральні землі", ru: "" },
      { de: "die Eltern/die Erziehungsberechtigten", en: "", uk: "батьки/опікуни", ru: "", correct: true },
      { de: "die Schulen", en: "", uk: "школи", ru: "" },
    ]
  },
  {
    id: "lid_243",
    lessonId: "k12m2",
    cat: "recht",
    question: { de: "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?", en: "", uk: "Майк і Сібілла хочуть разом з друзями за місцем свого проживання в Німеччині провести демонстрацію на вулиці. Що вони мають зробити заздалегідь?", ru: "" },
    answers: [
      { de: "Sie müssen die Demonstration anmelden.", en: "", uk: "Вони мають повідомити про демонстрацію.", ru: "", correct: true },
      { de: "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.", en: "", uk: "Їм не потрібно нічого робити. У Німеччині можна демонструвати будь-коли і будь-де.", ru: "" },
      { de: "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.", en: "", uk: "Вони нічого не можуть зробити, тому що демонстрації в Німеччині загалом заборонені.", ru: "" },
      { de: "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.", en: "", uk: "Майк і Сібілла мають створити нове обʼєднання, тому що демонструвати можуть лише обʼєднання.", ru: "" },
    ]
  },
  {
    id: "lid_244",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?", en: "", uk: "Який шкільний атестат зазвичай потрібен, щоб розпочати навчання в університеті в Німеччині?", ru: "" },
    answers: [
      { de: "das Abitur", en: "", uk: "атестат зрілості", ru: "", correct: true },
      { de: "ein Diplom", en: "", uk: "диплом", ru: "" },
      { de: "die Prokura", en: "", uk: "прокура", ru: "" },
      { de: "eine Gesellenprüfung", en: "", uk: "іспит на звання підмайстра", ru: "" },
    ]
  },
  {
    id: "lid_245",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Wer darf in Deutschland nicht als Paar zusammenleben?", en: "", uk: "Кому в Німеччині не можна жити разом як пара?", ru: "" },
    answers: [
      { de: "Hans (20 Jahre) und Marie (19 Jahre)", en: "", uk: "Ганс (20 років) і Марі (19 років)", ru: "" },
      { de: "Tom (20 Jahre) und Klaus (45 Jahre)", en: "", uk: "Том (20 років) і Клаус (45 років)", ru: "" },
      { de: "Sofie (35 Jahre) und Lisa (40 Jahre)", en: "", uk: "Софі (35 років) і Ліза (40 років)", ru: "" },
      { de: "Anne (13 Jahre) und Tim (25 Jahre)", en: "", uk: "Анна (13 років) і Тім (25 років)", ru: "", correct: true },
    ]
  },
  {
    id: "lid_246",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Ab welchem Alter ist man in Deutschland volljährig?", en: "", uk: "З якого віку в Німеччині настає повноліття?", ru: "" },
    answers: [
      { de: "16", en: "", uk: "16", ru: "" },
      { de: "18", en: "", uk: "18", ru: "", correct: true },
      { de: "19", en: "", uk: "19", ru: "" },
      { de: "21", en: "", uk: "21", ru: "" },
    ]
  },
  {
    id: "lid_247",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?", en: "", uk: "Жінка вагітна. Незадовго до пологів і після них закон особливо її захищає. Як називається цей захист?", ru: "" },
    answers: [
      { de: "Elternzeit", en: "", uk: "батьківська відпустка", ru: "" },
      { de: "Mutterschutz", en: "", uk: "охорона материнства", ru: "", correct: true },
      { de: "Geburtsvorbereitung", en: "", uk: "підготовка до пологів", ru: "" },
      { de: "Wochenbett", en: "", uk: "післяпологовий період", ru: "" },
    ]
  },
  {
    id: "lid_248",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …", en: "", uk: "Виховання дітей у Німеччині — це насамперед завдання …", ru: "" },
    answers: [
      { de: "des Staates.", en: "", uk: "держави.", ru: "" },
      { de: "der Eltern.", en: "", uk: "батьків.", ru: "", correct: true },
      { de: "der Großeltern.", en: "", uk: "бабусь і дідусів.", ru: "" },
      { de: "der Schulen.", en: "", uk: "шкіл.", ru: "" },
    ]
  },
  {
    id: "lid_249",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?", en: "", uk: "Хто в Німеччині головним чином відповідає за виховання дітей?", ru: "" },
    answers: [
      { de: "der Staat", en: "", uk: "держава", ru: "" },
      { de: "die Eltern", en: "", uk: "батьки", ru: "", correct: true },
      { de: "die Verwandten", en: "", uk: "родичі", ru: "" },
      { de: "die Schulen", en: "", uk: "школи", ru: "" },
    ]
  },
  {
    id: "lid_250",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …", en: "", uk: "У Німеччині найкращі шанси отримати добре оплачувану роботу, якщо …", ru: "" },
    answers: [
      { de: "katholisch ist.", en: "", uk: "ти католик/католичка.", ru: "" },
      { de: "gut ausgebildet ist.", en: "", uk: "ти добре освічений/освічена.", ru: "", correct: true },
      { de: "eine Frau ist.", en: "", uk: "ти жінка.", ru: "" },
      { de: "Mitglied einer Partei ist.", en: "", uk: "ти член партії.", ru: "" },
    ]
  },
  {
    id: "lid_251",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Wenn man in Deutschland ein Kind schlägt, …", en: "", uk: "Якщо в Німеччині бити дитину, …", ru: "" },
    answers: [
      { de: "geht das niemanden etwas an.", en: "", uk: "це нікого не стосується.", ru: "" },
      { de: "geht das nur die Familie etwas an.", en: "", uk: "це стосується лише родини.", ru: "" },
      { de: "kann man dafür nicht bestraft werden.", en: "", uk: "за це не можна бути покараним.", ru: "" },
      { de: "kann man dafür bestraft werden.", en: "", uk: "за це можна бути покараним.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_252",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "In Deutschland …", en: "", uk: "У Німеччині …", ru: "" },
    answers: [
      { de: "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.", en: "", uk: "можна одночасно бути одруженим лише з одним партнером/однією партнеркою.", ru: "", correct: true },
      { de: "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.", en: "", uk: "можна мати кількох чоловіків/дружин одночасно.", ru: "" },
      { de: "darf man nicht wieder heiraten, wenn man einmal verheiratet war.", en: "", uk: "не можна знову одружуватися, якщо колись уже був одружений/була одружена.", ru: "" },
      { de: "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.", en: "", uk: "жінка не може знову вийти заміж, якщо її чоловік помер.", ru: "" },
    ]
  },
  {
    id: "lid_253",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?", en: "", uk: "Де ви маєте зареєструватися, якщо переїжджаєте в Німеччині?", ru: "" },
    answers: [
      { de: "beim Einwohnermeldeamt", en: "", uk: "у відомстві реєстрації жителів", ru: "", correct: true },
      { de: "beim Standesamt", en: "", uk: "у відомстві цивільного стану (РАЦС)", ru: "" },
      { de: "beim Ordnungsamt", en: "", uk: "у відділі громадського порядку", ru: "" },
      { de: "beim Gewerbeamt", en: "", uk: "у відомстві з реєстрації підприємницької діяльності", ru: "" },
    ]
  },
  {
    id: "lid_254",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das „Trennungsjahr“ einhalten. Was bedeutet das?", en: "", uk: "У Німеччині подружжя може розлучатися. Здебільшого для цього треба дотриматися «року окремого проживання». Що це означає?", ru: "" },
    answers: [
      { de: "Der Scheidungsprozess dauert ein Jahr.", en: "", uk: "Процес розлучення триває один рік.", ru: "" },
      { de: "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.", en: "", uk: "Подружжя перебуває в шлюбі один рік, після цього розлучення можливе.", ru: "" },
      { de: "Das Besuchsrecht für die Kinder gilt ein Jahr.", en: "", uk: "Право на побачення з дітьми діє один рік.", ru: "" },
      { de: "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.", en: "", uk: "Подружжя щонайменше рік живе окремо власним життям. Після цього розлучення можливе.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_255",
    lessonId: "k11m1",
    cat: "kommune",
    question: { de: "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …", en: "", uk: "У разі проблем у вихованні батьки в Німеччині можуть отримати допомогу від …", ru: "" },
    answers: [
      { de: "Ordnungsamt.", en: "", uk: "відділу громадського порядку.", ru: "" },
      { de: "Schulamt.", en: "", uk: "шкільного управління.", ru: "" },
      { de: "Jugendamt.", en: "", uk: "служби у справах молоді.", ru: "", correct: true },
      { de: "Gesundheitsamt.", en: "", uk: "відомства охорони здоровʼя.", ru: "" },
    ]
  },
  {
    id: "lid_256",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?", en: "", uk: "Подружжя хоче відкрити в Німеччині ресторан. Що їм для цього обовʼязково потрібно?", ru: "" },
    answers: [
      { de: "eine Erlaubnis der Polizei", en: "", uk: "дозвіл поліції", ru: "" },
      { de: "eine Genehmigung einer Partei", en: "", uk: "дозвіл партії", ru: "" },
      { de: "eine Genehmigung des Einwohnermeldeamts", en: "", uk: "дозвіл відомства реєстрації жителів", ru: "" },
      { de: "eine Gaststättenerlaubnis von der zuständigen Behörde", en: "", uk: "ліцензія на ресторанну діяльність від компетентного органу", ru: "", correct: true },
    ]
  },
  {
    id: "lid_257",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …", en: "", uk: "Доросла жінка хоче в Німеччині здобути атестат зрілості вже в дорослому віці. Де вона може це зробити?", ru: "" },
    answers: [
      { de: "einer Hochschule.", en: "", uk: "у виші.", ru: "" },
      { de: "einem Abendgymnasium.", en: "", uk: "у вечірній гімназії.", ru: "", correct: true },
      { de: "einer Hauptschule.", en: "", uk: "в основній школі.", ru: "" },
      { de: "einer Privatuniversität.", en: "", uk: "у приватному університеті.", ru: "" },
    ]
  },
  {
    id: "lid_258",
    lessonId: "k12m3",
    cat: "recht",
    question: { de: "Was darf das Jugendamt in Deutschland?", en: "", uk: "Що має право робити служба у справах молоді в Німеччині?", ru: "" },
    answers: [
      { de: "Es entscheidet, welche Schule das Kind besucht.", en: "", uk: "Вона вирішує, до якої школи ходитиме дитина.", ru: "" },
      { de: "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.", en: "", uk: "Вона може забрати з родини дитину, яку бʼють або яка голодує.", ru: "", correct: true },
      { de: "Es bezahlt das Kindergeld an die Eltern.", en: "", uk: "Вона виплачує батькам допомогу на дітей.", ru: "" },
      { de: "Es kontrolliert, ob das Kind einen Kindergarten besucht.", en: "", uk: "Вона перевіряє, чи дитина відвідує дитячий садок.", ru: "" },
    ]
  },
  {
    id: "lid_259",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …", en: "", uk: "Центр професійної інформації BIZ при Федеральному агентстві зайнятості в Німеччині допомагає в …", ru: "" },
    answers: [
      { de: "Rentenberechnung.", en: "", uk: "розрахунку пенсії.", ru: "" },
      { de: "Lehrstellensuche.", en: "", uk: "пошуку місця для професійного навчання.", ru: "", correct: true },
      { de: "Steuererklärung.", en: "", uk: "подачі податкової декларації.", ru: "" },
      { de: "Krankenversicherung.", en: "", uk: "медичному страхуванні.", ru: "" },
    ]
  },
  {
    id: "lid_260",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "In Deutschland hat ein Kind in der Schule …", en: "", uk: "У Німеччині дитина в школі має …", ru: "" },
    answers: [
      { de: "Recht auf unbegrenzte Freizeit.", en: "", uk: "право на необмежений вільний час.", ru: "" },
      { de: "Wahlfreiheit für alle Fächer.", en: "", uk: "свободу вибору всіх предметів.", ru: "" },
      { de: "Anspruch auf Schulgeld.", en: "", uk: "право на плату за навчання.", ru: "" },
      { de: "Anwesenheitspflicht.", en: "", uk: "обовʼязок бути присутньою.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_261",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …", en: "", uk: "Чоловік у віці 30 років хоче в Німеччині здобути атестат зрілості. Де він може це зробити?", ru: "" },
    answers: [
      { de: "einer Hochschule.", en: "", uk: "у виші.", ru: "" },
      { de: "einem Abendgymnasium.", en: "", uk: "у вечірній гімназії.", ru: "", correct: true },
      { de: "einer Hauptschule.", en: "", uk: "в основній школі.", ru: "" },
      { de: "einer Privatuniversität.", en: "", uk: "у приватному університеті.", ru: "" },
    ]
  },
  {
    id: "lid_262",
    lessonId: "k5m3",
    cat: "grundrechte",
    question: { de: "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?", en: "", uk: "Що означає в Німеччині принцип рівного ставлення?", ru: "" },
    answers: [
      { de: "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.", en: "", uk: "Нікого не можна ущемляти, наприклад, через інвалідність.", ru: "", correct: true },
      { de: "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.", en: "", uk: "Можна ущемляти інших людей, якщо є достатні особисті причини.", ru: "" },
      { de: "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.", en: "", uk: "Ніхто не може подавати позов проти осіб, якщо вони були ущемлені.", ru: "" },
      { de: "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden.", en: "", uk: "Для всіх діє закон щороку жертвувати гроші ущемленим групам.", ru: "" },
    ]
  },
  {
    id: "lid_263",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …", en: "", uk: "У Німеччині підлітки з 14 років підлягають кримінальній відповідальності. Це означає: підлітки віком від 14 років, які порушують кримінальні закони, …", ru: "" },
    answers: [
      { de: "werden bestraft.", en: "", uk: "караються.", ru: "", correct: true },
      { de: "werden wie Erwachsene behandelt.", en: "", uk: "розглядаються як дорослі.", ru: "" },
      { de: "teilen die Strafe mit ihren Eltern.", en: "", uk: "діляться покаранням зі своїми батьками.", ru: "" },
      { de: "werden nicht bestraft.", en: "", uk: "не караються.", ru: "" },
    ]
  },
  {
    id: "lid_264",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?", en: "", uk: "На яке свято люди в Німеччині носять яскраві костюми та маски?", ru: "" },
    answers: [
      { de: "am Rosenmontag", en: "", uk: "у «Рожевий понеділок»", ru: "", correct: true },
      { de: "am Maifeiertag", en: "", uk: "на День праці (1 травня)", ru: "" },
      { de: "beim Oktoberfest", en: "", uk: "на Октоберфесті", ru: "" },
      { de: "an Pfingsten", en: "", uk: "на Трійцю", ru: "" },
    ]
  },
  {
    id: "lid_265",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?", en: "", uk: "Куди в Німеччині потрібно звернутися насамперед, якщо хочеш одружитися?", ru: "" },
    answers: [
      { de: "zum Einwohnermeldeamt", en: "", uk: "до відомства реєстрації жителів", ru: "" },
      { de: "zum Ordnungsamt", en: "", uk: "до відділу громадського порядку", ru: "" },
      { de: "zur Agentur für Arbeit", en: "", uk: "до агентства зайнятості", ru: "" },
      { de: "zum Standesamt", en: "", uk: "до відомства цивільного стану (РАЦС)", ru: "", correct: true },
    ]
  },
  {
    id: "lid_266",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Wann beginnt die gesetzliche Nachtruhe in Deutschland?", en: "", uk: "Коли в Німеччині починається законна нічна тиша?", ru: "" },
    answers: [
      { de: "wenn die Sonne untergeht", en: "", uk: "коли заходить сонце", ru: "" },
      { de: "wenn die Nachbarn schlafen gehen", en: "", uk: "коли сусіди лягають спати", ru: "" },
      { de: "um 0 Uhr, Mitternacht", en: "", uk: "о 0:00, опівночі", ru: "" },
      { de: "um 22 Uhr", en: "", uk: "о 22:00", ru: "", correct: true },
    ]
  },
  {
    id: "lid_267",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?", en: "", uk: "Молода жінка в Німеччині, 22 роки, живе разом зі своїм хлопцем. Батькам жінки це не подобається, тому що їм не подобається хлопець. Що можуть зробити батьки?", ru: "" },
    answers: [
      { de: "Sie müssen die Entscheidung der volljährigen Tochter respektieren.", en: "", uk: "Вони повинні поважати рішення повнолітньої доньки.", ru: "", correct: true },
      { de: "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.", en: "", uk: "Вони мають право повернути доньку до батьківської квартири.", ru: "" },
      { de: "Sie können zur Polizei gehen und die Tochter anzeigen.", en: "", uk: "Вони можуть піти до поліції і заявити на доньку.", ru: "" },
      { de: "Sie suchen einen anderen Mann für die Tochter.", en: "", uk: "Вони шукають доньці іншого чоловіка.", ru: "" },
    ]
  },
  {
    id: "lid_268",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?", en: "", uk: "Молода жінка хоче отримати водійське посвідчення. Вона боїться іспиту, тому що її рідна мова не німецька. Що є правильним?", ru: "" },
    answers: [
      { de: "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.", en: "", uk: "Вона має прожити в Німеччині щонайменше десять років, перш ніж зможе отримати водійське посвідчення.", ru: "" },
      { de: "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.", en: "", uk: "Якщо вона не знає німецької, вона не може мати водійське посвідчення.", ru: "" },
      { de: "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.", en: "", uk: "Вона має здавати на водійське посвідчення в країні, де розмовляють її мовою.", ru: "" },
      { de: "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.", en: "", uk: "Теоретичний іспит вона, можливо, зможе скласти рідною мовою. На вибір є понад десять мов.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_269",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …", en: "", uk: "У Німеччині діти з трьох років до першого вступу до школи мають право на …", ru: "" },
    answers: [
      { de: "monatliches Taschengeld.", en: "", uk: "щомісячні кишенькові гроші.", ru: "" },
      { de: "einen Platz in einem Sportverein.", en: "", uk: "місце в спортивному клубі.", ru: "" },
      { de: "einen Kindergartenplatz.", en: "", uk: "місце в дитячому садку.", ru: "", correct: true },
      { de: "einen Ferienpass.", en: "", uk: "абонемент на канікули.", ru: "" },
    ]
  },
  {
    id: "lid_270",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Die Volkshochschule in Deutschland ist eine Einrichtung …", en: "", uk: "Народний університет у Німеччині — це заклад …", ru: "" },
    answers: [
      { de: "für den Religionsunterricht.", en: "", uk: "для уроків релігії.", ru: "" },
      { de: "nur für Jugendliche.", en: "", uk: "лише для підлітків.", ru: "" },
      { de: "zur Weiterbildung.", en: "", uk: "для додаткової освіти.", ru: "", correct: true },
      { de: "nur für Rentnerinnen und Rentner.", en: "", uk: "лише для пенсіонерів.", ru: "" },
    ]
  },
  {
    id: "lid_271",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Was ist in Deutschland ein Brauch zu Weihnachten?", en: "", uk: "Що є в Німеччині звичаєм на Різдво?", ru: "" },
    answers: [
      { de: "bunte Eier verstecken", en: "", uk: "ховати кольорові яйця", ru: "" },
      { de: "einen Tannenbaum schmücken", en: "", uk: "прикрашати ялинку", ru: "", correct: true },
      { de: "sich mit Masken und Kostümen verkleiden", en: "", uk: "перевдягатися в маски та костюми", ru: "" },
      { de: "Kürbisse vor die Tür stellen", en: "", uk: "ставити гарбузи перед дверима", ru: "" },
    ]
  },
  {
    id: "lid_272",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Welche Lebensform ist in Deutschland nicht erlaubt?", en: "", uk: "Яка форма співжиття в Німеччині не дозволена?", ru: "" },
    answers: [
      { de: "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.", en: "", uk: "Чоловік і жінка розлучені й живуть з новими партнерами.", ru: "" },
      { de: "Zwei Frauen leben zusammen.", en: "", uk: "Дві жінки живуть разом.", ru: "" },
      { de: "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.", en: "", uk: "Батько-одинак живе зі своїми двома дітьми.", ru: "" },
      { de: "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.", en: "", uk: "Чоловік одночасно одружений з двома жінками.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_273",
    lessonId: "k11m2",
    cat: "kommune",
    question: { de: "Bei Erziehungsproblemen gehen Sie in Deutschland …", en: "", uk: "У разі проблем у вихованні ви в Німеччині йдете …", ru: "" },
    answers: [
      { de: "zur Ärztin/zum Arzt.", en: "", uk: "до лікаря/лікарки.", ru: "" },
      { de: "zum Gesundheitsamt.", en: "", uk: "до відомства охорони здоровʼя.", ru: "" },
      { de: "zum Einwohnermeldeamt.", en: "", uk: "до відомства реєстрації жителів.", ru: "" },
      { de: "zum Jugendamt.", en: "", uk: "до служби у справах молоді.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_274",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?", en: "", uk: "Ви в Німеччині навмисно відкрили лист, адресований іншій особі. Що ви порушили?", ru: "" },
    answers: [
      { de: "das Schweigerecht", en: "", uk: "право мовчати", ru: "" },
      { de: "das Briefgeheimnis", en: "", uk: "таємницю листування", ru: "", correct: true },
      { de: "die Schweigepflicht", en: "", uk: "обовʼязок зберігати мовчання", ru: "" },
      { de: "die Meinungsfreiheit", en: "", uk: "свободу слова", ru: "" },
    ]
  },
  {
    id: "lid_275",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Was braucht man in Deutschland für eine Ehescheidung?", en: "", uk: "Що потрібно в Німеччині для розлучення?", ru: "" },
    answers: [
      { de: "die Einwilligung der Eltern", en: "", uk: "згода батьків", ru: "" },
      { de: "ein Attest einer Ärztin/eines Arztes", en: "", uk: "медична довідка від лікаря/лікарки", ru: "" },
      { de: "die Einwilligung der Kinder", en: "", uk: "згода дітей", ru: "" },
      { de: "die Unterstützung einer Anwältin/eines Anwalts", en: "", uk: "підтримка адвоката/адвокатки", ru: "", correct: true },
    ]
  },
  {
    id: "lid_276",
    lessonId: "k12m4",
    cat: "recht",
    question: { de: "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?", en: "", uk: "Що ви маєте робити, якщо до вас погано ставиться ваш співрозмовник/співрозмовниця в німецькому органі влади?", ru: "" },
    answers: [
      { de: "Ich kann nichts tun.", en: "", uk: "Я нічого не можу зробити.", ru: "" },
      { de: "Ich muss mir diese Behandlung gefallen lassen.", en: "", uk: "Я мушу миритися з таким ставленням.", ru: "" },
      { de: "Ich drohe der Person.", en: "", uk: "Я погрожую цій особі.", ru: "" },
      { de: "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.", en: "", uk: "Я можу поскаржитися керівнику/керівниці органу.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_277",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …", en: "", uk: "Жінка, яка має дворічну дитину, подає заявку на посаду в Німеччині. Що є прикладом дискримінації? Вона не отримує посаду лише тому, що вона …", ru: "" },
    answers: [
      { de: "kein Englisch spricht.", en: "", uk: "не розмовляє англійською.", ru: "" },
      { de: "zu hohe Gehaltsvorstellungen hat.", en: "", uk: "має надто високі очікування щодо зарплати.", ru: "" },
      { de: "keine Erfahrungen in diesem Beruf hat.", en: "", uk: "не має досвіду в цій професії.", ru: "" },
      { de: "Mutter ist.", en: "", uk: "мати.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_278",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …", en: "", uk: "Чоловік на інвалідному візку подав заявку на посаду бухгалтера. Що є прикладом дискримінації? Він не отримує посаду лише тому, що він …", ru: "" },
    answers: [
      { de: "im Rollstuhl sitzt.", en: "", uk: "сидить в інвалідному візку.", ru: "", correct: true },
      { de: "keine Erfahrung hat.", en: "", uk: "не має досвіду.", ru: "" },
      { de: "zu hohe Gehaltsvorstellungen hat.", en: "", uk: "має надто високі очікування щодо зарплати.", ru: "" },
      { de: "kein Englisch spricht.", en: "", uk: "не розмовляє англійською.", ru: "" },
    ]
  },
  {
    id: "lid_279",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "In den meisten Mietshäusern in Deutschland gibt es eine „Hausordnung“. Was steht in einer solchen „Hausordnung“? Sie nennt …", en: "", uk: "У більшості орендованих будинків у Німеччині є «правила внутрішнього розпорядку». Що міститься в таких «правилах»? Вони містять …", ru: "" },
    answers: [
      { de: "Regeln für die Benutzung öffentlicher Verkehrsmittel.", en: "", uk: "правила користування громадським транспортом.", ru: "" },
      { de: "alle Mieterinnen und Mieter im Haus.", en: "", uk: "усіх орендарів і орендарок у будинку.", ru: "" },
      { de: "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.", en: "", uk: "правила, яких мають дотримуватися всі мешканці та мешканки.", ru: "", correct: true },
      { de: "die Adresse des nächsten Ordnungsamtes.", en: "", uk: "адресу найближчого відділу громадського порядку.", ru: "" },
    ]
  },
  {
    id: "lid_280",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …", en: "", uk: "Якщо ви в Німеччині хочете захиститися від неправильного податкового повідомлення, вам потрібно …", ru: "" },
    answers: [
      { de: "nichts machen.", en: "", uk: "нічого не робити.", ru: "" },
      { de: "den Bescheid wegwerfen.", en: "", uk: "викинути повідомлення.", ru: "" },
      { de: "Einspruch einlegen.", en: "", uk: "подати заперечення.", ru: "", correct: true },
      { de: "warten, bis ein anderer Bescheid kommt.", en: "", uk: "чекати, поки прийде інше повідомлення.", ru: "" },
    ]
  },
  {
    id: "lid_281",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …", en: "", uk: "Двоє друзів хочуть піти в публічний басейн у Німеччині. Обидва мають темний колір шкіри, і їх через це не пускають. Яке право порушено в цій ситуації? Право на …", ru: "" },
    answers: [
      { de: "Meinungsfreiheit", en: "", uk: "свобода слова", ru: "" },
      { de: "Gleichbehandlung", en: "", uk: "рівне ставлення", ru: "", correct: true },
      { de: "Versammlungsfreiheit", en: "", uk: "свободу зібрань", ru: "" },
      { de: "Freizügigkeit", en: "", uk: "свободу пересування", ru: "" },
    ]
  },
  {
    id: "lid_282",
    lessonId: "k9m1",
    cat: "pflichten",
    question: { de: "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?", en: "", uk: "Яку громадську посаду мають обовʼязково прийняти громадяни Німеччини, якщо їх до цього закликають?", ru: "" },
    answers: [
      { de: "Vereinstrainerin/Vereinstrainer", en: "", uk: "тренер/тренерка клубу", ru: "" },
      { de: "Wahlhelferin/Wahlhelfer", en: "", uk: "виборчий помічник/помічниця", ru: "", correct: true },
      { de: "Bibliotheksaufsicht", en: "", uk: "наглядач/наглядачка в бібліотеці", ru: "" },
      { de: "Lehrerin/Lehrer", en: "", uk: "учитель/учителька", ru: "" },
    ]
  },
  {
    id: "lid_283",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?", en: "", uk: "Що ви зробите, якщо отримаєте неправильний рахунок від німецького органу влади?", ru: "" },
    answers: [
      { de: "Ich lasse die Rechnung liegen.", en: "", uk: "Я залишаю рахунок лежати.", ru: "" },
      { de: "Ich lege Widerspruch bei der Behörde ein.", en: "", uk: "Я подаю до органу заперечення.", ru: "", correct: true },
      { de: "Ich schicke die Rechnung an die Behörde zurück.", en: "", uk: "Я відсилаю рахунок назад до органу.", ru: "" },
      { de: "Ich gehe mit der Rechnung zum Finanzamt.", en: "", uk: "Я йду з рахунком до податкової інспекції.", ru: "" },
    ]
  },
  {
    id: "lid_284",
    lessonId: "k18m1",
    cat: "bildung",
    question: { de: "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?", en: "", uk: "Те, що потрібно вміти для роботи, у майбутньому змінюватиметься дуже швидко. Що можна зробити?", ru: "" },
    answers: [
      { de: "Es ist egal, was man lernt.", en: "", uk: "Не має значення, чого вчишся.", ru: "" },
      { de: "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.", en: "", uk: "Дорослі мають і після закінчення навчання постійно вчитися далі.", ru: "", correct: true },
      { de: "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.", en: "", uk: "Діти в школі вчаться всього, що важливо в професії. Після школи вчитися далі не потрібно.", ru: "" },
      { de: "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.", en: "", uk: "Усі мають раніше припиняти працювати, тому що все змінюється.", ru: "" },
    ]
  },
  {
    id: "lid_285",
    lessonId: "k4m2",
    cat: "sozialsystem",
    question: { de: "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?", en: "", uk: "Пані Фрост працює штатною співробітницею в офісі. Що вона не повинна сплачувати зі своєї зарплати?", ru: "" },
    answers: [
      { de: "Lohnsteuer", en: "", uk: "податок із заробітної плати", ru: "" },
      { de: "Beiträge zur Arbeitslosenversicherung", en: "", uk: "внески до страхування на випадок безробіття", ru: "" },
      { de: "Beiträge zur Renten- und Krankenversicherung", en: "", uk: "внески до пенсійного та медичного страхування", ru: "" },
      { de: "Umsatzsteuer", en: "", uk: "податок на додану вартість (ПДВ)", ru: "", correct: true },
    ]
  },
  {
    id: "lid_286",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?", en: "", uk: "Яка організація на фірмі допомагає працівникам і працівницям у разі проблем із роботодавцем/роботодавицею?", ru: "" },
    answers: [
      { de: "der Betriebsrat", en: "", uk: "виробнича рада", ru: "", correct: true },
      { de: "die Betriebsprüferin/der Betriebsprüfer", en: "", uk: "ревізор/ревізорка підприємства", ru: "" },
      { de: "die Betriebsgruppe", en: "", uk: "виробнича група", ru: "" },
      { de: "das Betriebsmanagement", en: "", uk: "менеджмент підприємства", ru: "" },
    ]
  },
  {
    id: "lid_287",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?", en: "", uk: "Ви хочете припинити трудові відносини з фірмою в Німеччині. Що вам потрібно враховувати?", ru: "" },
    answers: [
      { de: "die Gehaltszahlungen", en: "", uk: "виплату зарплати", ru: "" },
      { de: "die Arbeitszeit", en: "", uk: "робочий час", ru: "" },
      { de: "die Kündigungsfrist", en: "", uk: "термін попередження про звільнення", ru: "", correct: true },
      { de: "die Versicherungspflicht", en: "", uk: "обовʼязок страхування", ru: "" },
    ]
  },
  {
    id: "lid_288",
    lessonId: "k13m4",
    cat: "ns",
    question: { de: "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?", en: "", uk: "На чому ґрунтується особлива відповідальність Німеччини перед Ізраїлем?", ru: "" },
    answers: [
      { de: "aus der Mitgliedschaft in der Europäischen Union (EU)", en: "", uk: "на членстві в Європейському Союзі (ЄС)", ru: "" },
      { de: "aus den nationalsozialistischen Verbrechen gegen Juden", en: "", uk: "на нацистських злочинах проти євреїв", ru: "", correct: true },
      { de: "aus dem Grundgesetz der Bundesrepublik Deutschland", en: "", uk: "на Основному законі Федеративної Республіки Німеччина", ru: "" },
      { de: "aus der christlichen Tradition", en: "", uk: "на християнській традиції", ru: "" },
    ]
  },
  {
    id: "lid_289",
    lessonId: "k5m4",
    cat: "grundrechte",
    question: { de: "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …", en: "", uk: "Чоловік із темним кольором шкіри подає заявку на посаду офіціанта в ресторані в Німеччині. Що є прикладом дискримінації? Він не отримує посаду лише тому, що …", ru: "" },
    answers: [
      { de: "seine Deutschkenntnisse zu gering sind.", en: "", uk: "його знання німецької надто слабкі.", ru: "" },
      { de: "er zu hohe Gehaltsvorstellungen hat.", en: "", uk: "він має надто високі очікування щодо зарплати.", ru: "" },
      { de: "er eine dunkle Haut hat.", en: "", uk: "він має темну шкіру.", ru: "", correct: true },
      { de: "er keine Erfahrungen im Beruf hat.", en: "", uk: "він не має досвіду в професії.", ru: "" },
    ]
  },
  {
    id: "lid_290",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?", en: "", uk: "Ви купили в Німеччині телевізор. Удома ви розпаковуєте його, але він не працює. Телевізор зламаний. Що ви можете зробити?", ru: "" },
    answers: [
      { de: "eine Anzeige schreiben", en: "", uk: "написати заяву в поліцію", ru: "" },
      { de: "den Fernseher reklamieren", en: "", uk: "подати рекламацію щодо телевізора", ru: "", correct: true },
      { de: "das Gerät ungefragt austauschen", en: "", uk: "обміняти прилад самостійно", ru: "" },
      { de: "die Garantie verlängern", en: "", uk: "продовжити гарантію", ru: "" },
    ]
  },
  {
    id: "lid_291",
    lessonId: "k12m5",
    cat: "recht",
    question: { de: "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …", en: "", uk: "Чому в Німеччині в податковій декларації потрібно вказувати, чи належиш ти до церкви? Тому що …", ru: "" },
    answers: [
      { de: "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.", en: "", uk: "існує церковний податок, який привʼязаний до прибуткового податку та податку із заробітної плати.", ru: "", correct: true },
      { de: "das für die Statistik in Deutschland wichtig ist.", en: "", uk: "це важливо для статистики в Німеччині.", ru: "" },
      { de: "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.", en: "", uk: "доводиться платити більше податків, якщо не належиш до церкви.", ru: "" },
      { de: "die Kirche für die Steuererklärung verantwortlich ist.", en: "", uk: "церква відповідає за податкову декларацію.", ru: "" },
    ]
  },
  {
    id: "lid_292",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?", en: "", uk: "Люди в Німеччині живуть за принципом релігійної толерантності. Що це означає?", ru: "" },
    answers: [
      { de: "Es dürfen keine Moscheen gebaut werden.", en: "", uk: "Не можна будувати мечеті.", ru: "" },
      { de: "Alle Menschen glauben an Gott.", en: "", uk: "Усі люди вірять у Бога.", ru: "" },
      { de: "Jeder kann glauben, was er möchte.", en: "", uk: "Кожен може вірити в те, у що хоче.", ru: "", correct: true },
      { de: "Der Staat entscheidet, an welchen Gott die Menschen glauben.", en: "", uk: "Держава вирішує, у якого Бога вірять люди.", ru: "" },
    ]
  },
  {
    id: "lid_293",
    lessonId: "k20m1",
    cat: "interkulturell",
    question: { de: "Was ist in Deutschland ein Brauch zu Ostern?", en: "", uk: "Який звичай існує в Німеччині на Великдень?", ru: "" },
    answers: [
      { de: "Kürbisse vor die Tür stellen", en: "", uk: "ставити гарбузи перед дверима", ru: "" },
      { de: "einen Tannenbaum schmücken", en: "", uk: "прикрашати ялинку", ru: "" },
      { de: "Eier bemalen", en: "", uk: "розфарбовувати яйця", ru: "", correct: true },
      { de: "Raketen in die Luft schießen", en: "", uk: "запускати ракети в повітря", ru: "" },
    ]
  },
  {
    id: "lid_294",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Pfingsten ist ein …", en: "", uk: "Пʼятидесятниця — це …", ru: "" },
    answers: [
      { de: "christlicher Feiertag.", en: "", uk: "християнське свято.", ru: "", correct: true },
      { de: "deutscher Gedenktag.", en: "", uk: "німецький день памʼяті.", ru: "" },
      { de: "internationaler Trauertag.", en: "", uk: "міжнародний день жалоби.", ru: "" },
      { de: "bayerischer Brauch.", en: "", uk: "баварський звичай.", ru: "" },
    ]
  },
  {
    id: "lid_295",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "Welche Religion hat die europäische und deutsche Kultur geprägt?", en: "", uk: "Яка релігія сформувала європейську і німецьку культуру?", ru: "" },
    answers: [
      { de: "der Hinduismus", en: "", uk: "індуїзм", ru: "" },
      { de: "das Christentum", en: "", uk: "християнство", ru: "", correct: true },
      { de: "der Buddhismus", en: "", uk: "буддизм", ru: "" },
      { de: "der Islam", en: "", uk: "іслам", ru: "" },
    ]
  },
  {
    id: "lid_296",
    lessonId: "k17m2",
    cat: "religion",
    question: { de: "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …", en: "", uk: "У Німеччині останні чотири тижні перед Різдвом називають …", ru: "" },
    answers: [
      { de: "den Buß- und Bettag.", en: "", uk: "Днем покаяння і молитви.", ru: "" },
      { de: "das Erntedankfest.", en: "", uk: "святом подяки за врожай.", ru: "" },
      { de: "die Adventszeit.", en: "", uk: "порою Адвенту.", ru: "", correct: true },
      { de: "Allerheiligen.", en: "", uk: "Днем усіх святих.", ru: "" },
    ]
  },
  {
    id: "lid_297",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?", en: "", uk: "З якої країни до Німеччини приїхало найбільше мігрантів і мігранток?", ru: "" },
    answers: [
      { de: "Italien", en: "", uk: "Італія", ru: "" },
      { de: "Polen", en: "", uk: "Польща", ru: "" },
      { de: "Marokko", en: "", uk: "Марокко", ru: "" },
      { de: "Türkei", en: "", uk: "Туреччина", ru: "", correct: true },
    ]
  },
  {
    id: "lid_298",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "In der DDR lebten vor allem Migrantinnen und Migranten aus …", en: "", uk: "В НДР жили переважно мігранти та мігрантки з …", ru: "" },
    answers: [
      { de: "Vietnam, Polen, Mosambik.", en: "", uk: "Вʼєтнаму, Польщі, Мозамбіку.", ru: "", correct: true },
      { de: "Frankreich, Rumänien, Somalia.", en: "", uk: "Франції, Румунії, Сомалі.", ru: "" },
      { de: "Chile, Ungarn, Simbabwe.", en: "", uk: "Чилі, Угорщини, Зімбабве.", ru: "" },
      { de: "Nordkorea, Mexiko, Ägypten.", en: "", uk: "Північної Кореї, Мексики, Єгипту.", ru: "" },
    ]
  },
  {
    id: "lid_299",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …", en: "", uk: "Іноземних працівників і працівниць, яких у 50-х і 60-х роках залучала Федеративна Республіка Німеччина, називали …", ru: "" },
    answers: [
      { de: "Schwarzarbeiterinnen/Schwarzarbeiter.", en: "", uk: "нелегальними працівниками.", ru: "" },
      { de: "Gastarbeiterinnen/Gastarbeiter.", en: "", uk: "гастарбайтерами/гастарбайтерками.", ru: "", correct: true },
      { de: "Zeitarbeiterinnen/Zeitarbeiter.", en: "", uk: "тимчасовими працівниками.", ru: "" },
      { de: "Schichtarbeiterinnen/Schichtarbeiter.", en: "", uk: "позмінними працівниками.", ru: "" },
    ]
  },
  {
    id: "lid_300",
    lessonId: "k19m1",
    cat: "migration",
    question: { de: "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?", en: "", uk: "З якої країни приїхали до Федеративної Республіки Німеччина перші гастарбайтери та гастарбайтерки?", ru: "" },
    answers: [
      { de: "Italien", en: "", uk: "Італія", ru: "", correct: true },
      { de: "Spanien", en: "", uk: "Іспанія", ru: "" },
      { de: "Portugal", en: "", uk: "Португалія", ru: "" },
      { de: "Türkei", en: "", uk: "Туреччина", ru: "" },
    ]
  },
  {
    id: "lid_BW_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welches Wappen gehört zum Bundesland Baden-Württemberg?", en: "", uk: "Який герб належить федеральній землі Баден-Вюртемберг?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Baden-Württemberg?", en: "", uk: "Який з наведених є округом у Баден-Вюртемберзі?", ru: "" },
    answers: [
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "" },
      { de: "Neckar-Odenwald-Kreis", en: "", uk: "Некар-Оденвальд", ru: "", correct: true },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
    ]
  },
  {
    id: "lid_BW_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?", en: "", uk: "На скільки років обирають ландтаг у Баден-Вюртемберзі?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_BW_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Ab welchem Alter darf man in Baden-Württemberg bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Баден-Вюртемберзі?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_BW_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welche Farben hat die Landesflagge von Baden-Württemberg?", en: "", uk: "Які кольори має прапор землі Баден-Вюртемберг?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "", correct: true },
      { de: "weiß-blau", en: "", uk: "біло-синій", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_BW_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Wo können Sie sich in Baden-Württemberg über politische Themen informieren?", en: "", uk: "Де в Баден-Вюртемберзі можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
    ]
  },
  {
    id: "lid_BW_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Die Landeshauptstadt von Baden-Württemberg heißt …", en: "", uk: "Столиця землі Баден-Вюртемберг називається …", ru: "" },
    answers: [
      { de: "Heidelberg.", en: "", uk: "Гайдельберг.", ru: "" },
      { de: "Stuttgart.", en: "", uk: "Штутгарт.", ru: "", correct: true },
      { de: "Karlsruhe.", en: "", uk: "Карлсруе.", ru: "" },
      { de: "Mannheim.", en: "", uk: "Мангайм.", ru: "" },
    ]
  },
  {
    id: "lid_BW_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    img: "lid_BW_08.png",
    question: { de: "Welches Bundesland ist Baden-Württemberg?", en: "", uk: "Яка федеральна земля на карті — Баден-Вюртемберг?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "", correct: true },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_BW_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Baden-Württemberg?", en: "", uk: "Як називають главу уряду в Баден-Вюртемберзі?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BW_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BW",
    question: { de: "Welche Ministerin/welchen Minister hat Baden-Württemberg nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Баден-Вюртемберзі?", ru: "" },
    answers: [
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BY_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welches Wappen gehört zum Freistaat Bayern?", en: "", uk: "Який герб належить Вільній державі Баварія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Bayern?", en: "", uk: "Який з наведених є округом у Баварії?", ru: "" },
    answers: [
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "" },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BY_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Für wie viele Jahre wird der Landtag in Bayern gewählt?", en: "", uk: "На скільки років обирають ландтаг у Баварії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_BY_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Ab welchem Alter darf man in Bayern bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Баварії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_BY_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welche Farben hat die Landesflagge von Bayern?", en: "", uk: "Які кольори має прапор землі Баварія?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "weiß-blau", en: "", uk: "біло-синій", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
    ]
  },
  {
    id: "lid_BY_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Wo können Sie sich in Bayern über politische Themen informieren?", en: "", uk: "Де в Баварії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
    ]
  },
  {
    id: "lid_BY_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Die Landeshauptstadt von Bayern heißt …", en: "", uk: "Столиця землі Баварія називається …", ru: "" },
    answers: [
      { de: "Ingolstadt.", en: "", uk: "Інгольштадт.", ru: "" },
      { de: "Regensburg.", en: "", uk: "Регенсбург.", ru: "" },
      { de: "Nürnberg.", en: "", uk: "Нюрнберг.", ru: "" },
      { de: "München.", en: "", uk: "Мюнхен.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BY_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    img: "lid_BY_08.png",
    question: { de: "Welches Bundesland ist Bayern?", en: "", uk: "Яка федеральна земля на карті — Баварія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BY_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Bayern?", en: "", uk: "Як називають главу уряду в Баварії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BY_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BY",
    question: { de: "Welche Ministerin/welchen Minister hat Bayern nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Баварії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_BE_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welches Wappen gehört zum Bundesland Berlin?", en: "", uk: "Який герб належить федеральній землі Берлін?", ru: "" },
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
    question: { de: "Welches ist ein Bezirk von Berlin?", en: "", uk: "Який з наведених є районом Берліна?", ru: "" },
    answers: [
      { de: "Altona", en: "", uk: "Альтона", ru: "" },
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "" },
      { de: "Pankow", en: "", uk: "Панков", ru: "", correct: true },
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "" },
    ]
  },
  {
    id: "lid_BE_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Berlin gewählt?", en: "", uk: "На скільки років обирають земельний парламент у Берліні?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_BE_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Берліні (вибори до зборів районних депутатів)?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_BE_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welche Farben hat die Landesflagge von Berlin?", en: "", uk: "Які кольори має прапор землі Берлін?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "" },
    ]
  },
  {
    id: "lid_BE_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Wo können Sie sich in Berlin über politische Themen informieren?", en: "", uk: "Де в Берліні можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BE_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welches Bundesland ist ein Stadtstaat?", en: "", uk: "Яка федеральна земля є містом-державою?", ru: "" },
    answers: [
      { de: "Berlin", en: "", uk: "Берлін", ru: "", correct: true },
      { de: "Saarland", en: "", uk: "Саар", ru: "" },
      { de: "Brandenburg", en: "", uk: "Бранденбург", ru: "" },
      { de: "Hessen", en: "", uk: "Гессен", ru: "" },
    ]
  },
  {
    id: "lid_BE_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    img: "lid_BE_08.png",
    question: { de: "Welches Bundesland ist Berlin?", en: "", uk: "Яка федеральна земля на карті — Берлін?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BE_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Berlin?", en: "", uk: "Як називають главу уряду міста-держави Берлін?", ru: "" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "" },
      { de: "Oberbürgermeisterin/Oberbürgermeister", en: "", uk: "головний бургомістр/головна бургомістерка", ru: "" },
      { de: "Präsidentin/Präsident des Senates", en: "", uk: "президент/президентка сенату", ru: "" },
      { de: "Regierende Bürgermeisterin/Regierender Bürgermeister", en: "", uk: "правлячий бургомістр/правляча бургомістерка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BE_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BE",
    question: { de: "Welche Senatorin/welchen Senator hat Berlin nicht?", en: "", uk: "Якого сенатора/якої сенаторки немає в Берліні?", ru: "" },
    answers: [
      { de: "Finanzsenatorin/Finanzsenator", en: "", uk: "сенатор/сенаторка з питань фінансів", ru: "" },
      { de: "Innensenatorin/Innensenator", en: "", uk: "сенатор/сенаторка з внутрішніх справ", ru: "" },
      { de: "Senatorin/Senator für Außenbeziehungen", en: "", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "", correct: true },
      { de: "Justizsenatorin/Justizsenator", en: "", uk: "сенатор/сенаторка з питань юстиції", ru: "" },
    ]
  },
  {
    id: "lid_BB_01",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welches Wappen gehört zum Bundesland Brandenburg?", en: "", uk: "Який герб належить федеральній землі Бранденбург?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Brandenburg?", en: "", uk: "Який з наведених є округом у Бранденбурзі?", ru: "" },
    answers: [
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
      { de: "Vogtlandkreis", en: "", uk: "Фогтланд", ru: "" },
      { de: "Amberg-Sulzbach", en: "", uk: "Амберг-Зульцбах", ru: "" },
    ]
  },
  {
    id: "lid_BB_03",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Für wie viele Jahre wird der Landtag in Brandenburg gewählt?", en: "", uk: "На скільки років обирають ландтаг у Бранденбурзі?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_BB_04",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Ab welchem Alter darf man in Brandenburg bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Бранденбурзі?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_BB_05",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welche Farben hat die Landesflagge von Brandenburg?", en: "", uk: "Які кольори має прапор землі Бранденбург?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "rot-weiß", en: "", uk: "червоно-білий", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
    ]
  },
  {
    id: "lid_BB_06",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Wo können Sie sich in Brandenburg über politische Themen informieren?", en: "", uk: "Де в Бранденбурзі можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
    ]
  },
  {
    id: "lid_BB_07",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Die Landeshauptstadt von Brandenburg heißt …", en: "", uk: "Столиця землі Бранденбург називається …", ru: "" },
    answers: [
      { de: "Potsdam.", en: "", uk: "Потсдам.", ru: "", correct: true },
      { de: "Cottbus.", en: "", uk: "Котбус.", ru: "" },
      { de: "Brandenburg.", en: "", uk: "Бранденбург.", ru: "" },
      { de: "Frankfurt/Oder.", en: "", uk: "Франкфурт-на-Одері.", ru: "" },
    ]
  },
  {
    id: "lid_BB_08",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    img: "lid_BB_08.png",
    question: { de: "Welches Bundesland ist Brandenburg?", en: "", uk: "Яка федеральна земля на карті — Бранденбург?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BB_09",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Brandenburg?", en: "", uk: "Як називають главу уряду в Бранденбурзі?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_BB_10",
    lessonId: "k21m1",
    cat: "region",
    region: "BB",
    question: { de: "Welche Ministerin/welchen Minister hat Brandenburg nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Бранденбурзі?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_HB_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welches Wappen gehört zur Freien Hansestadt Bremen?", en: "", uk: "Який герб належить Вільному ганзейському місту Бремен?", ru: "" },
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
    question: { de: "Welches ist ein Stadtteil von Bremen?", en: "", uk: "Який з наведених є міським районом Бремена?", ru: "" },
    answers: [
      { de: "Altona", en: "", uk: "Альтона", ru: "" },
      { de: "Hemelingen", en: "", uk: "Гемелінген", ru: "", correct: true },
      { de: "Pankow", en: "", uk: "Панков", ru: "" },
      { de: "Babelsberg", en: "", uk: "Бабельсберг", ru: "" },
    ]
  },
  {
    id: "lid_HB_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Bremen gewählt?", en: "", uk: "На скільки років обирають земельний парламент у Бремені?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_HB_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Ab welchem Alter darf man in Bremen bei den Wahlen zur Bürgerschaft (Landtag) wählen?", en: "", uk: "З якого віку можна голосувати на виборах до Бюргершафту (ландтагу) у Бремені?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_HB_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welche Farben hat die Landesflagge von Bremen?", en: "", uk: "Які кольори має прапор землі Бремен?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "rot-weiß", en: "", uk: "червоно-білий", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "" },
    ]
  },
  {
    id: "lid_HB_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Wo können Sie sich in Bremen über politische Themen informieren?", en: "", uk: "Де в Бремені можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
    ]
  },
  {
    id: "lid_HB_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Was ist ein deutscher Stadtstaat?", en: "", uk: "Що з наведеного є німецьким містом-державою?", ru: "" },
    answers: [
      { de: "Bremen", en: "", uk: "Бремен", ru: "", correct: true },
      { de: "München", en: "", uk: "Мюнхен", ru: "" },
      { de: "Frankfurt", en: "", uk: "Франкфурт", ru: "" },
      { de: "Erfurt", en: "", uk: "Ерфурт", ru: "" },
    ]
  },
  {
    id: "lid_HB_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    img: "lid_HB_08.png",
    question: { de: "Welches Bundesland ist Bremen?", en: "", uk: "Яка федеральна земля на карті — Бремен?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "", correct: true },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_HB_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Bremen?", en: "", uk: "Як називають главу уряду міста-держави Бремен?", ru: "" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "" },
      { de: "Erste Bürgermeisterin/Erster Bürgermeister", en: "", uk: "перший бургомістр/перша бургомістерка", ru: "", correct: true },
      { de: "Präsidentin/Präsident des Senates", en: "", uk: "президент/президентка сенату", ru: "" },
      { de: "Regierende Bürgermeisterin/Regierender Bürgermeister", en: "", uk: "правлячий бургомістр/правляча бургомістерка", ru: "" },
    ]
  },
  {
    id: "lid_HB_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HB",
    question: { de: "Welche Senatorin/welchen Senator hat Bremen nicht?", en: "", uk: "Якого сенатора/якої сенаторки немає в Бремені?", ru: "" },
    answers: [
      { de: "Senatorin/Senator für Außenbeziehungen", en: "", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "", correct: true },
      { de: "Finanzsenatorin/Finanzsenator", en: "", uk: "сенатор/сенаторка з питань фінансів", ru: "" },
      { de: "Justizsenatorin/Justizsenator", en: "", uk: "сенатор/сенаторка з питань юстиції", ru: "" },
      { de: "Innensenatorin/Innensenator", en: "", uk: "сенатор/сенаторка з внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_HH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welches Wappen gehört zur Freien und Hansestadt Hamburg?", en: "", uk: "Який герб належить Вільному і ганзейському місту Гамбург?", ru: "" },
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
    question: { de: "Welches ist ein Bezirk von Hamburg?", en: "", uk: "Який з наведених є районом Гамбурга?", ru: "" },
    answers: [
      { de: "Altona", en: "", uk: "Альтона", ru: "", correct: true },
      { de: "Hemelingen", en: "", uk: "Гемелінген", ru: "" },
      { de: "Pankow", en: "", uk: "Панков", ru: "" },
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "" },
    ]
  },
  {
    id: "lid_HH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Für wie viele Jahre wird das Landesparlament in Hamburg gewählt?", en: "", uk: "На скільки років обирають земельний парламент у Гамбурзі?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_HH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Ab welchem Alter darf man in Hamburg bei Kommunalwahlen (Wahl der Bezirksversammlungen) wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Гамбурзі (вибори до районних зборів)?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_HH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welche Farben hat die Landesflagge von Hamburg?", en: "", uk: "Які кольори має прапор землі Гамбург?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
    ]
  },
  {
    id: "lid_HH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Wo können Sie sich in Hamburg über politische Themen informieren?", en: "", uk: "Де в Гамбурзі можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
    ]
  },
  {
    id: "lid_HH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welches Bundesland ist ein Stadtstaat?", en: "", uk: "Яка федеральна земля є містом-державою?", ru: "" },
    answers: [
      { de: "Hamburg", en: "", uk: "Гамбург", ru: "", correct: true },
      { de: "Sachsen", en: "", uk: "Саксонія", ru: "" },
      { de: "Bayern", en: "", uk: "Баварія", ru: "" },
      { de: "Thüringen", en: "", uk: "Тюрингія", ru: "" },
    ]
  },
  {
    id: "lid_HH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    img: "lid_HH_08.png",
    question: { de: "Welches Bundesland ist Hamburg?", en: "", uk: "Яка федеральна земля на карті — Гамбург?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "", correct: true },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_HH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Stadtstaates Hamburg?", en: "", uk: "Як називають главу уряду міста-держави Гамбург?", ru: "" },
    answers: [
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "" },
      { de: "Erste Bürgermeisterin/Erster Bürgermeister", en: "", uk: "перший бургомістр/перша бургомістерка", ru: "", correct: true },
      { de: "Regierende Senatorin/Regierender Senator", en: "", uk: "правлячий сенатор/правляча сенаторка", ru: "" },
      { de: "Oberbürgermeisterin/Oberbürgermeister", en: "", uk: "головний бургомістр/головна бургомістерка", ru: "" },
    ]
  },
  {
    id: "lid_HH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HH",
    question: { de: "Welche Senatorin/welchen Senator hat Hamburg nicht?", en: "", uk: "Якого сенатора/якої сенаторки немає в Гамбурзі?", ru: "" },
    answers: [
      { de: "Justizsenatorin/Justizsenator", en: "", uk: "сенатор/сенаторка з питань юстиції", ru: "" },
      { de: "Senatorin/Senator für Außenbeziehungen", en: "", uk: "сенатор/сенаторка із зовнішніх звʼязків", ru: "", correct: true },
      { de: "Finanzsenatorin/Finanzsenator", en: "", uk: "сенатор/сенаторка з питань фінансів", ru: "" },
      { de: "Innensenatorin/Innensenator", en: "", uk: "сенатор/сенаторка з внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_HE_01",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welches Wappen gehört zum Bundesland Hessen?", en: "", uk: "Який герб належить федеральній землі Гессен?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Hessen?", en: "", uk: "Який з наведених є округом у Гессені?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "" },
      { de: "Main-Taunus-Kreis", en: "", uk: "Майн-Таунус", ru: "", correct: true },
    ]
  },
  {
    id: "lid_HE_03",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Für wie viele Jahre wird der Landtag in Hessen gewählt?", en: "", uk: "На скільки років обирають ландтаг у Гессені?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_HE_04",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Ab welchem Alter darf man in Hessen bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Гессені?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_HE_05",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welche Farben hat die Landesflagge von Hessen?", en: "", uk: "Які кольори має прапор землі Гессен?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "rot-weiß", en: "", uk: "червоно-білий", ru: "", correct: true },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_HE_06",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Wo können Sie sich in Hessen über politische Themen informieren?", en: "", uk: "Де в Гессені можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
    ]
  },
  {
    id: "lid_HE_07",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Die Landeshauptstadt von Hessen heißt …", en: "", uk: "Столиця землі Гессен називається …", ru: "" },
    answers: [
      { de: "Kassel.", en: "", uk: "Кассель.", ru: "" },
      { de: "Darmstadt.", en: "", uk: "Дармштадт.", ru: "" },
      { de: "Frankfurt.", en: "", uk: "Франкфурт.", ru: "" },
      { de: "Wiesbaden.", en: "", uk: "Вісбаден.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_HE_08",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    img: "lid_HE_08.png",
    question: { de: "Welches Bundesland ist Hessen?", en: "", uk: "Яка федеральна земля на карті — Гессен?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "", correct: true },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_HE_09",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Hessen?", en: "", uk: "Як називають главу уряду в Гессені?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_HE_10",
    lessonId: "k21m1",
    cat: "region",
    region: "HE",
    question: { de: "Welche Ministerin/welchen Minister hat Hessen nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Гессені?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_MV_01",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welches Wappen gehört zum Bundesland Mecklenburg-Vorpommern?", en: "", uk: "Який герб належить федеральній землі Мекленбург-Передня Померанія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Mecklenburg-Vorpommern?", en: "", uk: "Який з наведених є округом у Мекленбург-Передній Померанії?", ru: "" },
    answers: [
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "" },
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "", correct: true },
      { de: "Vogtlandkreis", en: "", uk: "Фогтланд", ru: "" },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
    ]
  },
  {
    id: "lid_MV_03",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Für wie viele Jahre wird der Landtag in Mecklenburg-Vorpommern gewählt?", en: "", uk: "На скільки років обирають ландтаг у Мекленбург-Передній Померанії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_MV_04",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Ab welchem Alter darf man in Mecklenburg-Vorpommern bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Мекленбург-Передній Померанії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_MV_05",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welche Farben hat die Landesflagge von Mecklenburg-Vorpommern?", en: "", uk: "Які кольори має прапор землі Мекленбург-Передня Померанія?", ru: "" },
    answers: [
      { de: "schwarz-rot-gold", en: "", uk: "чорно-червоно-золотий", ru: "" },
      { de: "blau-weiß-gelb-rot", en: "", uk: "синьо-біло-жовто-червоний", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
    ]
  },
  {
    id: "lid_MV_06",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Wo können Sie sich in Mecklenburg-Vorpommern über politische Themen informieren?", en: "", uk: "Де в Мекленбург-Передній Померанії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
    ]
  },
  {
    id: "lid_MV_07",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Die Landeshauptstadt von Mecklenburg-Vorpommern heißt …", en: "", uk: "Столиця землі Мекленбург-Передня Померанія називається …", ru: "" },
    answers: [
      { de: "Greifswald.", en: "", uk: "Грайфсвальд.", ru: "" },
      { de: "Schwerin.", en: "", uk: "Шверін.", ru: "", correct: true },
      { de: "Rostock.", en: "", uk: "Росток.", ru: "" },
      { de: "Wismar.", en: "", uk: "Вісмар.", ru: "" },
    ]
  },
  {
    id: "lid_MV_08",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    img: "lid_MV_08.png",
    question: { de: "Welches Bundesland ist Mecklenburg-Vorpommern?", en: "", uk: "Яка федеральна земля на карті — Мекленбург-Передня Померанія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "", correct: true },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_MV_09",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Mecklenburg-Vorpommern?", en: "", uk: "Як називають главу уряду в Мекленбург-Передній Померанії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_MV_10",
    lessonId: "k21m1",
    cat: "region",
    region: "MV",
    question: { de: "Welche Ministerin/welchen Minister hat Mecklenburg-Vorpommern nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Мекленбург-Передній Померанії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_NI_01",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welches Wappen gehört zum Bundesland Niedersachsen?", en: "", uk: "Який герб належить федеральній землі Нижня Саксонія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Niedersachsen?", en: "", uk: "Який з наведених є округом у Нижній Саксонії?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
      { de: "Vogtlandkreis", en: "", uk: "Фогтланд", ru: "" },
    ]
  },
  {
    id: "lid_NI_03",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Für wie viele Jahre wird der Landtag in Niedersachsen gewählt?", en: "", uk: "На скільки років обирають ландтаг у Нижній Саксонії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_NI_04",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Ab welchem Alter darf man in Niedersachsen bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Нижній Саксонії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_NI_05",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welche Farben hat die Landesflagge von Niedersachsen?", en: "", uk: "Які кольори має прапор землі Нижня Саксонія?", ru: "" },
    answers: [
      { de: "weiß-blau", en: "", uk: "біло-синій", ru: "" },
      { de: "schwarz-rot-gold", en: "", uk: "чорно-червоно-золотий", ru: "", correct: true },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_NI_06",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Wo können Sie sich in Niedersachsen über politische Themen informieren?", en: "", uk: "Де в Нижній Саксонії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
    ]
  },
  {
    id: "lid_NI_07",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Die Landeshauptstadt von Niedersachsen heißt …", en: "", uk: "Столиця землі Нижня Саксонія називається …", ru: "" },
    answers: [
      { de: "Hannover.", en: "", uk: "Ганновер.", ru: "", correct: true },
      { de: "Braunschweig.", en: "", uk: "Брауншвейг.", ru: "" },
      { de: "Wolfsburg.", en: "", uk: "Вольфсбург.", ru: "" },
      { de: "Osnabrück.", en: "", uk: "Оснабрюк.", ru: "" },
    ]
  },
  {
    id: "lid_NI_08",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    img: "lid_NI_08.png",
    question: { de: "Welches Bundesland ist Niedersachsen?", en: "", uk: "Яка федеральна земля на карті — Нижня Саксонія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "", correct: true },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_NI_09",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Niedersachsen?", en: "", uk: "Як називають главу уряду в Нижній Саксонії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_NI_10",
    lessonId: "k21m1",
    cat: "region",
    region: "NI",
    question: { de: "Welche Ministerin/welchen Minister hat Niedersachsen nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Нижній Саксонії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_NW_01",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welches Wappen gehört zum Bundesland Nordrhein-Westfalen?", en: "", uk: "Який герб належить федеральній землі Північний Рейн-Вестфалія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Nordrhein-Westfalen?", en: "", uk: "Який з наведених є округом у Північному Рейні-Вестфалії?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "" },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "", correct: true },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
      { de: "Vogtlandkreis", en: "", uk: "Фогтланд", ru: "" },
    ]
  },
  {
    id: "lid_NW_03",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Für wie viele Jahre wird der Landtag in Nordrhein-Westfalen gewählt?", en: "", uk: "На скільки років обирають ландтаг у Північному Рейні-Вестфалії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_NW_04",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Ab welchem Alter darf man in Nordrhein-Westfalen bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Північному Рейні-Вестфалії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_NW_05",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welche Farben hat die Landesflagge von Nordrhein-Westfalen?", en: "", uk: "Які кольори має прапор землі Північний Рейн-Вестфалія?", ru: "" },
    answers: [
      { de: "rot-weiß", en: "", uk: "червоно-білий", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "", correct: true },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "" },
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_NW_06",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Wo können Sie sich in Nordrhein-Westfalen über politische Themen informieren?", en: "", uk: "Де в Північному Рейні-Вестфалії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
    ]
  },
  {
    id: "lid_NW_07",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Die Landeshauptstadt von Nordrhein-Westfalen heißt …", en: "", uk: "Столиця землі Північний Рейн-Вестфалія називається …", ru: "" },
    answers: [
      { de: "Köln.", en: "", uk: "Кельн.", ru: "" },
      { de: "Bonn.", en: "", uk: "Бонн.", ru: "" },
      { de: "Düsseldorf.", en: "", uk: "Дюссельдорф.", ru: "", correct: true },
      { de: "Dortmund.", en: "", uk: "Дортмунд.", ru: "" },
    ]
  },
  {
    id: "lid_NW_08",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    img: "lid_NW_08.png",
    question: { de: "Welches Bundesland ist Nordrhein-Westfalen?", en: "", uk: "Яка федеральна земля на карті — Північний Рейн-Вестфалія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "", correct: true },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_NW_09",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Nordrhein-Westfalen?", en: "", uk: "Як називають главу уряду в Північному Рейні-Вестфалії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_NW_10",
    lessonId: "k21m1",
    cat: "region",
    region: "NW",
    question: { de: "Welche Ministerin/welchen Minister hat Nordrhein-Westfalen nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Північному Рейні-Вестфалії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_RP_01",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welches Wappen gehört zum Bundesland Rheinland-Pfalz?", en: "", uk: "Який герб належить федеральній землі Рейнланд-Пфальц?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Rheinland-Pfalz?", en: "", uk: "Який з наведених є округом у Рейнланд-Пфальці?", ru: "" },
    answers: [
      { de: "Westerwaldkreis", en: "", uk: "Вестервальд", ru: "", correct: true },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Emsland", en: "", uk: "Емсланд", ru: "" },
      { de: "Prignitz", en: "", uk: "Прігніц", ru: "" },
    ]
  },
  {
    id: "lid_RP_03",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Für wie viele Jahre wird der Landtag in Rheinland-Pfalz gewählt?", en: "", uk: "На скільки років обирають ландтаг у Рейнланд-Пфальці?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_RP_04",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Ab welchem Alter darf man in Rheinland-Pfalz bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Рейнланд-Пфальці?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_RP_05",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welche Farben hat die Landesflagge von Rheinland-Pfalz?", en: "", uk: "Які кольори має прапор землі Рейнланд-Пфальц?", ru: "" },
    answers: [
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "" },
      { de: "schwarz-rot-gold", en: "", uk: "чорно-червоно-золотий", ru: "", correct: true },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_RP_06",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Wo können Sie sich in Rheinland-Pfalz über politische Themen informieren?", en: "", uk: "Де в Рейнланд-Пфальці можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
    ]
  },
  {
    id: "lid_RP_07",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Die Landeshauptstadt von Rheinland-Pfalz heißt …", en: "", uk: "Столиця землі Рейнланд-Пфальц називається …", ru: "" },
    answers: [
      { de: "Mainz.", en: "", uk: "Майнц.", ru: "", correct: true },
      { de: "Kaiserslautern.", en: "", uk: "Кайзерслаутерн.", ru: "" },
      { de: "Ludwigshafen.", en: "", uk: "Людвігсгафен.", ru: "" },
      { de: "Koblenz.", en: "", uk: "Кобленц.", ru: "" },
    ]
  },
  {
    id: "lid_RP_08",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    img: "lid_RP_08.png",
    question: { de: "Welches Bundesland ist Rheinland-Pfalz?", en: "", uk: "Яка федеральна земля на карті — Рейнланд-Пфальц?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "", correct: true },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_RP_09",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Rheinland-Pfalz?", en: "", uk: "Як називають главу уряду в Рейнланд-Пфальці?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_RP_10",
    lessonId: "k21m1",
    cat: "region",
    region: "RP",
    question: { de: "Welche Ministerin/welchen Minister hat Rheinland-Pfalz nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Рейнланд-Пфальці?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_SL_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welches Wappen gehört zum Bundesland Saarland?", en: "", uk: "Який герб належить федеральній землі Саар?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis im Saarland?", en: "", uk: "Який з наведених є округом у Сааре?", ru: "" },
    answers: [
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Neunkirchen", en: "", uk: "Нойнкірхен", ru: "", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
    ]
  },
  {
    id: "lid_SL_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Für wie viele Jahre wird der Landtag des Saarlandes gewählt?", en: "", uk: "На скільки років обирають ландтаг землі Саар?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_SL_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Ab welchem Alter darf man im Saarland bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Сааре?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_SL_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welche Farben hat die Landesflagge des Saarlandes?", en: "", uk: "Які кольори має прапор землі Саар?", ru: "" },
    answers: [
      { de: "weiß-blau", en: "", uk: "біло-синій", ru: "" },
      { de: "schwarz-rot-gold", en: "", uk: "чорно-червоно-золотий", ru: "", correct: true },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_SL_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Wo können Sie sich im Saarland über politische Themen informieren?", en: "", uk: "Де в Сааре можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
    ]
  },
  {
    id: "lid_SL_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Die Landeshauptstadt des Saarlandes heißt …", en: "", uk: "Столиця землі Саар називається …", ru: "" },
    answers: [
      { de: "Neunkirchen.", en: "", uk: "Нойнкірхен.", ru: "" },
      { de: "Homburg.", en: "", uk: "Гомбург.", ru: "" },
      { de: "Saarbrücken.", en: "", uk: "Саарбрюкен.", ru: "", correct: true },
      { de: "Völklingen.", en: "", uk: "Фельклінген.", ru: "" },
    ]
  },
  {
    id: "lid_SL_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    img: "lid_SL_08.png",
    question: { de: "Welches Bundesland ist das Saarland?", en: "", uk: "Яка федеральна земля на карті — Саар?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "", correct: true },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_SL_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef des Saarlandes?", en: "", uk: "Як називають главу уряду землі Саар?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_SL_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SL",
    question: { de: "Welche Ministerin/welchen Minister hat das Saarland nicht?", en: "", uk: "Якого міністра/якої міністерки немає в землі Саар?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_SN_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welches Wappen gehört zum Freistaat Sachsen?", en: "", uk: "Який герб належить Вільній державі Саксонія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Sachsen?", en: "", uk: "Який з наведених є округом у Саксонії?", ru: "" },
    answers: [
      { de: "Vogtlandkreis", en: "", uk: "Фогтланд", ru: "", correct: true },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Uckermark", en: "", uk: "Укермарк", ru: "" },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
    ]
  },
  {
    id: "lid_SN_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Für wie viele Jahre wird der Landtag in Sachsen gewählt?", en: "", uk: "На скільки років обирають ландтаг у Саксонії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_SN_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Ab welchem Alter darf man in Sachsen bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Саксонії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_SN_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welche Farben hat die Landesflagge von Sachsen?", en: "", uk: "Які кольори має прапор землі Саксонія?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "weiß-grün", en: "", uk: "біло-зелений", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gelb", en: "", uk: "чорно-жовтий", ru: "" },
    ]
  },
  {
    id: "lid_SN_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Wo können Sie sich in Sachsen über politische Themen informieren?", en: "", uk: "Де в Саксонії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
    ]
  },
  {
    id: "lid_SN_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Die Landeshauptstadt von Sachsen heißt …", en: "", uk: "Столиця землі Саксонія називається …", ru: "" },
    answers: [
      { de: "Leipzig.", en: "", uk: "Лейпциг.", ru: "" },
      { de: "Dresden.", en: "", uk: "Дрезден.", ru: "", correct: true },
      { de: "Chemnitz.", en: "", uk: "Кемніц.", ru: "" },
      { de: "Zwickau.", en: "", uk: "Цвікау.", ru: "" },
    ]
  },
  {
    id: "lid_SN_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    img: "lid_SN_08.png",
    question: { de: "Welches Bundesland ist Sachsen?", en: "", uk: "Яка федеральна земля на карті — Саксонія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "", correct: true },
    ]
  },
  {
    id: "lid_SN_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen?", en: "", uk: "Як називають главу уряду в Саксонії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_SN_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SN",
    question: { de: "Welche Ministerin/welchen Minister hat Sachsen nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Саксонії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_ST_01",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welches Wappen gehört zum Bundesland Sachsen-Anhalt?", en: "", uk: "Який герб належить федеральній землі Саксонія-Ангальт?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Sachsen-Anhalt?", en: "", uk: "Який з наведених є округом у Саксонії-Ангальт?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Uckermark", en: "", uk: "Укермарк", ru: "" },
      { de: "Börde", en: "", uk: "Бьорде", ru: "", correct: true },
    ]
  },
  {
    id: "lid_ST_03",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Für wie viele Jahre wird der Landtag in Sachsen-Anhalt gewählt?", en: "", uk: "На скільки років обирають ландтаг у Саксонії-Ангальт?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_ST_04",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Ab welchem Alter darf man in Sachsen-Anhalt bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Саксонії-Ангальт?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_ST_05",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welche Farben hat die Landesflagge von Sachsen-Anhalt?", en: "", uk: "Які кольори має прапор землі Саксонія-Ангальт?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "gelb-schwarz", en: "", uk: "жовто-чорний", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_ST_06",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Wo können Sie sich in Sachsen-Anhalt über politische Themen informieren?", en: "", uk: "Де в Саксонії-Ангальт можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
    ]
  },
  {
    id: "lid_ST_07",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Die Landeshauptstadt von Sachsen-Anhalt heißt …", en: "", uk: "Столиця землі Саксонія-Ангальт називається …", ru: "" },
    answers: [
      { de: "Halle.", en: "", uk: "Галле.", ru: "" },
      { de: "Dessau.", en: "", uk: "Дессау.", ru: "" },
      { de: "Magdeburg.", en: "", uk: "Магдебург.", ru: "", correct: true },
      { de: "Wittenberg.", en: "", uk: "Віттенберг.", ru: "" },
    ]
  },
  {
    id: "lid_ST_08",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    img: "lid_ST_08.png",
    question: { de: "Welches Bundesland ist Sachsen-Anhalt?", en: "", uk: "Яка федеральна земля на карті — Саксонія-Ангальт?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "", correct: true },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_ST_09",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Sachsen-Anhalt?", en: "", uk: "Як називають главу уряду в Саксонії-Ангальт?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_ST_10",
    lessonId: "k21m1",
    cat: "region",
    region: "ST",
    question: { de: "Welche Ministerin/welchen Minister hat Sachsen-Anhalt nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Саксонії-Ангальт?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_SH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welches Wappen gehört zum Bundesland Schleswig-Holstein?", en: "", uk: "Який герб належить федеральній землі Шлезвіг-Гольштейн?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Schleswig-Holstein?", en: "", uk: "Який з наведених є округом у Шлезвіг-Гольштейні?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "" },
      { de: "Mecklenburgische Seenplatte", en: "", uk: "Мекленбурзьке Озерне плато", ru: "" },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "", correct: true },
      { de: "Rhein-Sieg-Kreis", en: "", uk: "Рейн-Зіг", ru: "" },
    ]
  },
  {
    id: "lid_SH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Für wie viele Jahre wird der Landtag in Schleswig-Holstein gewählt?", en: "", uk: "На скільки років обирають ландтаг у Шлезвіг-Гольштейні?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_SH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Ab welchem Alter darf man in Schleswig-Holstein bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Шлезвіг-Гольштейні?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_SH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welche Farben hat die Landesflagge von Schleswig-Holstein?", en: "", uk: "Які кольори має прапор землі Шлезвіг-Гольштейн?", ru: "" },
    answers: [
      { de: "weiß-blau", en: "", uk: "біло-синій", ru: "" },
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "", correct: true },
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "" },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
    ]
  },
  {
    id: "lid_SH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Wo können Sie sich in Schleswig-Holstein über politische Themen informieren?", en: "", uk: "Де в Шлезвіг-Гольштейні можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
      { de: "beim / bei der Landesbeauftragten für politische Bildung", en: "", uk: "у земельного уповноваженого/земельної уповноваженої з політичної освіти", ru: "", correct: true },
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
    ]
  },
  {
    id: "lid_SH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Die Landeshauptstadt von Schleswig-Holstein heißt …", en: "", uk: "Столиця землі Шлезвіг-Гольштейн називається …", ru: "" },
    answers: [
      { de: "Husum.", en: "", uk: "Гузум.", ru: "" },
      { de: "Flensburg.", en: "", uk: "Фленсбург.", ru: "" },
      { de: "Lübeck.", en: "", uk: "Любек.", ru: "" },
      { de: "Kiel.", en: "", uk: "Кіль.", ru: "", correct: true },
    ]
  },
  {
    id: "lid_SH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    img: "lid_SH_08.png",
    question: { de: "Welches Bundesland ist Schleswig-Holstein?", en: "", uk: "Яка федеральна земля на карті — Шлезвіг-Гольштейн?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "", correct: true },
      { de: "2", en: "", uk: "2", ru: "" },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_SH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Schleswig-Holstein?", en: "", uk: "Як називають главу уряду в Шлезвіг-Гольштейні?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_SH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "SH",
    question: { de: "Welche Ministerin/welchen Minister hat Schleswig-Holstein nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Шлезвіг-Гольштейні?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  },
  {
    id: "lid_TH_01",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welches Wappen gehört zum Freistaat Thüringen?", en: "", uk: "Який герб належить Вільній державі Тюрингія?", ru: "" },
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
    question: { de: "Welches ist ein Landkreis in Thüringen?", en: "", uk: "Який з наведених є округом у Тюрингії?", ru: "" },
    answers: [
      { de: "Ammerland", en: "", uk: "Аммерланд", ru: "" },
      { de: "Altötting", en: "", uk: "Альтьоттінг", ru: "" },
      { de: "Nordfriesland", en: "", uk: "Північна Фризія", ru: "" },
      { de: "Wartburgkreis", en: "", uk: "Вартбург", ru: "", correct: true },
    ]
  },
  {
    id: "lid_TH_03",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Für wie viele Jahre wird der Landtag in Thüringen gewählt?", en: "", uk: "На скільки років обирають ландтаг у Тюрингії?", ru: "" },
    answers: [
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
      { de: "5", en: "", uk: "5", ru: "", correct: true },
      { de: "6", en: "", uk: "6", ru: "" },
    ]
  },
  {
    id: "lid_TH_04",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Ab welchem Alter darf man in Thüringen bei Kommunalwahlen wählen?", en: "", uk: "З якого віку можна голосувати на муніципальних виборах у Тюрингії?", ru: "" },
    answers: [
      { de: "14", en: "", uk: "14", ru: "" },
      { de: "16", en: "", uk: "16", ru: "", correct: true },
      { de: "18", en: "", uk: "18", ru: "" },
      { de: "20", en: "", uk: "20", ru: "" },
    ]
  },
  {
    id: "lid_TH_05",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welche Farben hat die Landesflagge von Thüringen?", en: "", uk: "Які кольори має прапор землі Тюрингія?", ru: "" },
    answers: [
      { de: "blau-weiß-rot", en: "", uk: "синьо-біло-червоний", ru: "" },
      { de: "weiß-rot", en: "", uk: "біло-червоний", ru: "", correct: true },
      { de: "grün-weiß-rot", en: "", uk: "зелено-біло-червоний", ru: "" },
      { de: "schwarz-gold", en: "", uk: "чорно-золотий", ru: "" },
    ]
  },
  {
    id: "lid_TH_06",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Wo können Sie sich in Thüringen über politische Themen informieren?", en: "", uk: "Де в Тюрингії можна отримати інформацію про політичні теми?", ru: "" },
    answers: [
      { de: "bei den Kirchen", en: "", uk: "у церквах", ru: "" },
      { de: "bei der Verbraucherzentrale", en: "", uk: "у центрі захисту прав споживачів", ru: "" },
      { de: "bei der Landeszentrale für politische Bildung", en: "", uk: "у Земельному центрі політичної освіти", ru: "", correct: true },
      { de: "beim Ordnungsamt der Gemeinde", en: "", uk: "у відділі громадського порядку громади", ru: "" },
    ]
  },
  {
    id: "lid_TH_07",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Die Landeshauptstadt von Thüringen heißt …", en: "", uk: "Столиця землі Тюрингія називається …", ru: "" },
    answers: [
      { de: "Eisenach.", en: "", uk: "Айзенах.", ru: "" },
      { de: "Erfurt.", en: "", uk: "Ерфурт.", ru: "", correct: true },
      { de: "Gera.", en: "", uk: "Гера.", ru: "" },
      { de: "Jena.", en: "", uk: "Єна.", ru: "" },
    ]
  },
  {
    id: "lid_TH_08",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    img: "lid_TH_08.png",
    question: { de: "Welches Bundesland ist Thüringen?", en: "", uk: "Яка федеральна земля на карті — Тюрингія?", ru: "" },
    answers: [
      { de: "1", en: "", uk: "1", ru: "" },
      { de: "2", en: "", uk: "2", ru: "", correct: true },
      { de: "3", en: "", uk: "3", ru: "" },
      { de: "4", en: "", uk: "4", ru: "" },
    ]
  },
  {
    id: "lid_TH_09",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Wie nennt man die Regierungschefin/den Regierungschef in Thüringen?", en: "", uk: "Як називають главу уряду в Тюрингії?", ru: "" },
    answers: [
      { de: "Erste Ministerin/Erster Minister", en: "", uk: "перший міністр/перша міністерка", ru: "" },
      { de: "Premierministerin/Premierminister", en: "", uk: "премʼєр-міністр/премʼєр-міністерка", ru: "" },
      { de: "Bürgermeisterin/Bürgermeister", en: "", uk: "бургомістр/бургомістерка", ru: "" },
      { de: "Ministerpräsidentin/Ministerpräsident", en: "", uk: "міністр-президент/міністр-президентка", ru: "", correct: true },
    ]
  },
  {
    id: "lid_TH_10",
    lessonId: "k21m1",
    cat: "region",
    region: "TH",
    question: { de: "Welche Ministerin/welchen Minister hat Thüringen nicht?", en: "", uk: "Якого міністра/якої міністерки немає в Тюрингії?", ru: "" },
    answers: [
      { de: "Justizministerin/Justizminister", en: "", uk: "міністр/міністерка юстиції", ru: "" },
      { de: "Außenministerin/Außenminister", en: "", uk: "міністр/міністерка закордонних справ", ru: "", correct: true },
      { de: "Finanzministerin/Finanzminister", en: "", uk: "міністр/міністерка фінансів", ru: "" },
      { de: "Innenministerin/Innenminister", en: "", uk: "міністр/міністерка внутрішніх справ", ru: "" },
    ]
  }
];

var SB_CATS = [];
var SPRACHBAUSTEINE = [];
var SCHREIBEN = [];
var EMAILS = [];
var STORY_TASK = [];
var STORY = [];
