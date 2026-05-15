// ════════════════════════════════════════════════════════════════
//  VOCAB DATA  ·  Deutsch-B2 · NVV · Beruf
//  Формат кожної картки:
//  {
//    id:    унікальний рядок,
//    cat:   id категорії з масиву CATS,
//    term:  { de, en, uk }  — термін / слово,
//    short: { de, en, uk }  — коротке пояснення,
//    def:   { de, en, uk }  — приклад речення або означення
//  }
// ════════════════════════════════════════════════════════════════

// ── КАТЕГОРІЇ ────────────────────────────────────────────────

const CATS = [
  {id:'NVV',                     de:'Nomen-Verb-Verbindungen', en:'NVV',                         uk:'NVV',                  e:'🧩'},
  {id:'Soft Skills',             de:'Soft Skills',             en:'Soft Skills',                 uk:'Soft Skills',          e:'🧠'},
  {id:'Hard Skills',             de:'Hard Skills',             en:'Hard Skills',                 uk:'Hard Skills',          e:'💻'},
  {id:'Mein Beruf',              de:'Mein Beruf',              en:'My profession',               uk:'Моя професія',         e:'💼'},
  {id:'Zusammenarbeit',          de:'Zusammenarbeit',          en:'Zusammenarbeit',              uk:'Zusammenarbeit',       e:'🤝'},
  {id:'Mein Weg in den Beruf',   de:'Mein Weg in den Beruf',   en:'My way in profession',        uk:'Мій шлях у професії',  e:'🚀'},
  {id:'Der erste Arbeitstag',    de:'Der erste Arbeitstag',    en:'The First Day of Work',       uk:'Перший робочий день',  e:'✨'},
  {id:'Über uns',                de:'Über uns',                en:'About us',                    uk:'Про нас',              e:'🏢'},
  {id:'Kommunikation ist alles', de:'Kommunikation ist alles', en:'Communication is everything', uk:'Спілкування - це все', e:'💬'},
  {id:'Telefongespräch',         de:'Telefongespräch',         en:'Telephone conversation',      uk:'Телефонна розмова',    e:'📱'},
  {id:'Messe',                   de:'Messe',                   en:'Exhibition',                  uk:'Виставка',             e:'🎪'},
  {id:'Abkürzungen',             de:'Abkürzungen',             en:'Abbreviations',               uk:'Скорочення',           e:'✂️'}
];

// ── МОВИ ─────────────────────────────────────────────────────
const LC = {
  de: {code:'de-DE', ms:['Katja','Hedda','Stefan','Conrad']},
  en: {code:'en-US', ms:['Aria','Jenny','Guy','Zira','David']},
  uk: {code:'uk-UA', ms:['Ostap','Polina']}
};
const F  = {en:'🇬🇧', uk:'🇺🇦', de:'🇩🇪'};
const LN = {en:'English', uk:'Українська', de:'Deutsch'};

// ── КАРТКИ ───────────────────────────────────────────────────
const VOCAB = [

// ── Nomen-Verb-Verbindungen ────────────────────────────
{"id":"nvv_001","cat":"NVV","term":{"de":"sich in Acht nehmen vor","en":"to be wary of / to watch out for","uk":"остерігатися / бути обережним щодо чогось"},"short":{"de":"aufpassen, vorsichtig sein","en":"to be careful, cautious","uk":"бути уважним, обережним"},"def":{"de":"Vor komplizierten Verträgen sollte man sich in Acht nehmen.","en":"One should be wary of complicated contracts.","uk":"Слід бути обережним щодо складних договорів."}},
{"id":"nvv_002","cat":"NVV","term":{"de":"jemandem Achtung entgegenbringen","en":"to show respect to someone","uk":"виявляти повагу до когось"},"short":{"de":"jemanden achten, respektieren","en":"to respect, esteem someone","uk":"поважати, шанувати когось"},"def":{"de":"Es ist wichtig, auch der Konkurrenz Achtung entgegenzubringen.","en":"It is important to show respect even to the competition.","uk":"Важливо виявляти повагу навіть до конкурентів."}},
{"id":"nvv_003","cat":"NVV","term":{"de":"die Absicht haben zu","en":"to have the intention to / to intend to","uk":"мати намір / збиратися"},"short":{"de":"beabsichtigen","en":"to intend","uk":"мати намір"},"def":{"de":"Ich habe die Absicht, Karriere zu machen.","en":"I intend to build a career.","uk":"Я маю намір зробити кар'єру."}},
{"id":"nvv_004","cat":"NVV","term":{"de":"eine Änderung vornehmen","en":"to make a change","uk":"вносити зміну"},"short":{"de":"ändern","en":"to change","uk":"змінювати"},"def":{"de":"Alle Mitarbeitenden können an ihrem Passwort jederzeit eine Änderung vornehmen.","en":"All employees can make a change to their password at any time.","uk":"Усі співробітники можуть будь-коли змінити свій пароль."}},
{"id":"nvv_006","cat":"NVV","term":{"de":"eine Anforderung erfüllen","en":"to meet a requirement","uk":"відповідати вимозі / виконувати вимогу"},"short":{"de":"genügen","en":"to meet, satisfy","uk":"відповідати, задовольняти"},"def":{"de":"Sarina erfüllt alle Anforderungen in der Stellenausschreibung.","en":"Sarina meets all the requirements in the job posting.","uk":"Саріна відповідає всім вимогам оголошення про вакансію."}},
{"id":"nvv_007","cat":"NVV","term":{"de":"eine Anfrage stellen an","en":"to submit an inquiry to","uk":"надсилати запит до"},"short":{"de":"anfragen","en":"to inquire, request","uk":"запитувати, звертатися із запитом"},"def":{"de":"Für die Renovierungsarbeiten haben wir bereits eine Anfrage an einen Handwerksbetrieb gestellt.","en":"We have already submitted an inquiry to a tradesman's company for the renovation work.","uk":"Щодо ремонтних робіт ми вже надіслали запит до підприємства ремісників."}},
{"id":"nvv_008","cat":"NVV","term":{"de":"ein Angebot machen / unterbreiten","en":"to make / submit an offer","uk":"робити / представляти пропозицію"},"short":{"de":"anbieten","en":"to offer","uk":"пропонувати"},"def":{"de":"Die Firma hat mir ein tolles Angebot gemacht/unterbreitet.","en":"The company made a great offer to me.","uk":"Фірма зробила мені чудову пропозицію."}},
{"id":"nvv_009","cat":"NVV","term":{"de":"in Angriff nehmen","en":"to tackle / to get to grips with","uk":"братися до чогось / приступати до виконання"},"short":{"de":"sich kümmern um","en":"to attend to, take care of","uk":"займатися чимось, вирішувати"},"def":{"de":"Ich werde die Bestellung des Kunden gleich in Angriff nehmen.","en":"I will tackle the customer's order right away.","uk":"Я одразу займуся замовленням клієнта."}},
{"id":"nvv_010","cat":"NVV","term":{"de":"Angst machen","en":"to frighten / to cause fear","uk":"лякати / викликати страх"},"short":{"de":"sich ängstigen vor","en":"to be afraid of, to fear","uk":"боятися чогось"},"def":{"de":"Der Gedanke an meinen ersten Arbeitstag macht mir Angst.","en":"The thought of my first day at work frightens me.","uk":"Думка про перший робочий день мене лякає."}},
{"id":"nvv_011","cat":"NVV","term":{"de":"ein Anliegen sein","en":"to be a concern / to matter","uk":"бути важливою справою / мати значення"},"short":{"de":"wichtig sein","en":"to be important","uk":"бути важливим"},"def":{"de":"Es ist mir ein großes Anliegen, dass die Sache schnell geklärt wird.","en":"It is very important to me that the matter is resolved quickly.","uk":"Для мене дуже важливо, щоб питання було вирішено швидко."}},
{"id":"nvv_012","cat":"NVV","term":{"de":"einen Anspruch haben auf","en":"to have a claim to / to be entitled to","uk":"мати право на / претендувати на"},"short":{"de":"zustehen","en":"to be entitled to","uk":"мати право на щось"},"def":{"de":"Sie haben Anspruch auf mindestens 20 Tage Urlaub pro Jahr.","en":"You are entitled to at least 20 days of vacation per year.","uk":"Ви маєте право на щонайменше 20 днів відпустки на рік."}},
{"id":"nvv_013","cat":"NVV","term":{"de":"in Anspruch nehmen","en":"to make use of / to take advantage of","uk":"користуватися / використовувати"},"short":{"de":"benutzen, beanspruchen","en":"to use, make use of","uk":"використовувати, вдаватися до"},"def":{"de":"Wir sollten Fördermöglichkeiten durch den Staat stärker in Anspruch nehmen.","en":"We should make greater use of state funding opportunities.","uk":"Нам слід активніше користуватися державними можливостями субсидування."}},
{"id":"nvv_014","cat":"NVV","term":{"de":"einen Antrag stellen auf","en":"to submit an application for","uk":"подавати заяву на / клопотати про"},"short":{"de":"beantragen","en":"to apply for, request","uk":"подавати заявку, клопотати"},"def":{"de":"Martina Morina hat einen Antrag auf Gründungszuschuss gestellt.","en":"Martina Morina submitted an application for a start-up grant.","uk":"Мартіна Моріна подала заяву на отримання субсидії для відкриття бізнесу."}},
{"id":"nvv_015","cat":"NVV","term":{"de":"zur Anwendung kommen","en":"to be applied / to come into use","uk":"застосовуватися / впроваджуватися"},"short":{"de":"angewendet werden","en":"to be applied, used","uk":"бути застосованим"},"def":{"de":"Die Ergebnisse aus Besprechungen kommen oft nicht zur Anwendung.","en":"The results of meetings are often not applied in practice.","uk":"Результати нарад часто не знаходять практичного застосування."}},
{"id":"nvv_016","cat":"NVV","term":{"de":"an die Arbeit gehen","en":"to get to work / to start working","uk":"братися до роботи / починати працювати"},"short":{"de":"anfangen zu arbeiten","en":"to start working","uk":"починати працювати"},"def":{"de":"Die Adressenliste wartet auf mich, ich muss wieder an die Arbeit gehen.","en":"The address list is waiting for me, I need to get back to work.","uk":"Список адрес чекає на мене, треба знову братися до роботи."}},
{"id":"nvv_017","cat":"NVV","term":{"de":"gute Arbeit leisten","en":"to do a good job / to perform well","uk":"виконувати роботу добре / досягати гарних результатів"},"short":{"de":"etwas gut machen","en":"to do something well","uk":"робити щось добре"},"def":{"de":"Wir haben einen neuen großen Kunden gewonnen. Ihr habt sehr gute Arbeit geleistet.","en":"We have won a new major client. You have done a very good job.","uk":"Ми залучили нового великого клієнта. Ви чудово попрацювали."}},
{"id":"nvv_018","cat":"NVV","term":{"de":"Arbeit machen","en":"to be a lot of work / to be laborious","uk":"завдавати клопоту / потребувати зусиль"},"short":{"de":"mühsam sein","en":"to be tedious, laborious","uk":"бути клопітким, трудомістким"},"def":{"de":"Die Pflege unserer Kundendaten macht viel Arbeit.","en":"Maintaining our customer data is a lot of work.","uk":"Підтримання бази даних клієнтів потребує великих зусиль."}},
{"id":"nvv_019","cat":"NVV","term":{"de":"sich an die Arbeit machen","en":"to get down to work / to start working","uk":"братися до роботи"},"short":{"de":"anfangen zu arbeiten","en":"to start working","uk":"починати працювати"},"def":{"de":"Komm, die Pause ist vorbei! Machen wir uns wieder an die Arbeit.","en":"Come on, the break is over! Let's get back to work.","uk":"Годі, перерва закінчилась! Повертаймось до роботи."}},
{"id":"nvv_020","cat":"NVV","term":{"de":"in Arbeit sein","en":"to be in progress / to be being worked on","uk":"бути у процесі виконання / перебувати в роботі"},"short":{"de":"im Moment bearbeitet werden","en":"to be currently being processed","uk":"зараз опрацьовуватися"},"def":{"de":"Wo ist das Angebot für die Firma Klaxon? – Das ist in Arbeit.","en":"Where is the offer for Klaxon? – It's in progress.","uk":"Де пропозиція для компанії Klaxon? – Вона зараз опрацьовується."}},

{"id":"ss_001","cat":"Soft Skills","term":{"de":"die Kommunikationsfähigkeit","en":"communication skills","uk":"комунікабельність"},"short":{"de":"sich klar ausdrücken","en":"expressing oneself clearly","uk":"вміння чітко висловлюватися"},"def":{"de":"Gut mit anderen sprechen und auch gut zuhören können.","en":"Being able to speak well with others and also listen well.","uk":"Вміння добре спілкуватися з іншими, а також уважно слухати."}},
{"id":"ss_002","cat":"Soft Skills","term":{"de":"die Teamfähigkeit","en":"ability to work in a team","uk":"вміння працювати в команді"},"short":{"de":"Kooperation mit Kollegen","en":"cooperation with colleagues","uk":"співпраця з колегами"},"def":{"de":"Gut und freundlich mit anderen Personen zusammenarbeiten.","en":"Working well and friendly with other people.","uk":"Добра та дружня співпраця з іншими людьми."}},
{"id":"ss_003","cat":"Soft Skills","term":{"de":"die Problemlösungskompetenz","en":"problem-solving skills","uk":"навичка вирішення проблем"},"short":{"de":"Lösungen finden","en":"finding solutions","uk":"пошук рішень"},"def":{"de":"Schwierige Situationen verstehen und schnell eine Lösung finden.","en":"Understanding difficult situations and finding a solution quickly.","uk":"Розуміння складних ситуацій та швидкий пошук рішення."}}


];
