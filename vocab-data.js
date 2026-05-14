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
// Додавайте нові категорії сюди, перш ніж додавати картки для них
const CATS = [
  {id:'NVV',                     de:'Nomen-Verb-Verbindungen', en:'NVV',                         uk:'NVV',                  e:'🧩'}, // Пазл краще передає конструкцію сталих сполучень
  {id:'Soft Skills',             de:'Soft Skills',             en:'Soft Skills',                 uk:'Soft Skills',          e:'🧠'}, // Мозок або психологічні навички
  {id:'Hard Skills',             de:'Hard Skills',             en:'Hard Skills',                 uk:'Hard Skills',          e:'💻'}, // Технічні навички (комп'ютер/інструмент)
  {id:'Mein Beruf',              de:'Mein Beruf',              en:'My profession',               uk:'Моя професія',         e:'💼'}, // Портфель — класичний символ професії
  {id:'Zusammenarbeit',          de:'Zusammenarbeit',          en:'Zusammenarbeit',              uk:'Zusammenarbeit',       e:'🤝'}, // Рукостискання краще за просто силуети
  {id:'Mein Weg in den Beruf',   de:'Mein Weg in den Beruf',   en:'My way in profession',        uk:'Мій шлях у професії',  e:'🚀'}, // Ракета або сходи (📈) замість просто ступні
  {id:'Der erste Arbeitstag',    de:'Der erste Arbeitstag',    en:'The First Day of Work',       uk:'Перший робочий день',  e:'✨'}, // Новий старт, свіжість
  {id:'Über uns',                de:'Über uns',                en:'About us',                    uk:'Про нас',              e:'🏢'}, // Будівля офісу або команда (🏘️)
  {id:'Kommunikation ist alles', de:'Kommunikation ist alles', en:'Communication is everything', uk:'Спілкування - це все', e:'💬'}, // Бабли діалогу замість знизування плечима
  {id:'Telefongespräch',         de:'Telefongespräch',         en:'Telephone conversation',      uk:'Телефонна розмова',    e:'📱'}, // Сучасний смартфон
  {id:'Messe',                   de:'Messe',                   en:'Exhibition',                  uk:'Виставка',             e:'🎪'}, // Або стенд (🏗️), замість офісного працівника
  {id:'Abkürzungen',             de:'Abkürzungen',             en:'Abbreviations',               uk:'Скорочення',           e:'✂️'}  // Ножиці (скорочення) або текст (📝)
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
{"id":"nvv_001","cat":"NVV","term":{"de":"sich in Acht nehmen vor","en":"to be wary of / to watch out for","uk":"остерігатися / бути обережним щодо чогось"},"short":{"de":"aufpassen, vorsichtig sein","en":"to be careful, cautious","uk":"бути уважним, обережним"},"def":{"de":"Vor komplizierten Verträgen sollte man sich in Acht nehmen.","en":"One should be wary of complicated contracts.","uk":"Слід бути обережним щодо складних договорів."}}

];
