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
  {id:'NVV',       de:'Nomen-Verb-Verbindungen',  en:'NVV',             uk:'NVV',                          e:'🔗'},
  {id:'Soft Skills',       de:'Soft Skills',  en:'Soft Skills',             uk:'Soft Skills',                          e:'☺️'},
  {id:'Hard Skills',       de:'Hard Skills',  en:'NVV',             uk:'Hard Skills',                          e:'⚒️'},
  {id:'Mein Beruf',de:'Mein Beruf',               en:'My profession',   uk:'Моя професія',                 e:'👨‍💻'},
  {id:'Zusammenarbeit',de:'Zusammenarbeit',               en:'Zusammenarbeit',   uk:'Zusammenarbeit',                 e:'👥'},
  {id:'Mein Weg in den Beruf', de:'Mein Weg in den Beruf', en:'My way in profession', uk:'Мій шлях у професії', e:'🦶'},
  {id:'Der erste Arbeitstag',  de:'Der erste Arbeitstag',  en:'The First Day of Work',uk:'Перший робочий день',  e:'📆'},
  {id:'Über uns',  de:'Über uns',                 en:'About us',        uk:'Про нас',                      e:'🫶'},
  {id:'Kommunikation ist alles',de:'Kommunikation ist alles',en:'Communication is everything',uk:'Спілкування - це все',e:'🤷‍♂️'},
  {id:'Telefongespräch',de:'Telefongespräch',en:'Telephone conversation',uk:'Телефонна розмова',e:'📞'},
  {id:'Messe',de:'Messe',en:'Exhibition',uk:'Виставка',e:'👩‍💼'}
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


// ── Mein Beruf ────────────────────────────
{"id":"mb_001","cat":"Mein Beruf","term":{"de":"die Insolvenz / insolvent","en":"insolvency / insolvent","uk":"неплатоспроможність / неплатоспроможний"},"short":{"de":"die Zahlungsunfähigkeit einer Firma; ein Unternehmen kann seine Schulden nicht mehr bezahlen","en":"inability of a company to pay its debts","uk":"нездатність компанії сплачувати борги"},"def":{"de":"Die Firma hat Insolvenz angemeldet. / Die Firma ist insolvent.","en":"The company has filed for insolvency. / The company is insolvent.","uk":"Компанія подала заяву про неплатоспроможність. / Компанія є неплатоспроможною."}},

{"id":"ss_001","cat":"Soft Skills","term":{"de":"die Kommunikationsfähigkeit","en":"communication skills","uk":"комунікабельність"},"short":{"de":"sich klar ausdrücken","en":"expressing oneself clearly","uk":"вміння чітко висловлюватися"},"def":{"de":"Die Fähigkeit, Informationen klar zu vermitteln und anderen aktiv zuzuhören.","en":"The ability to convey information clearly and listen actively to others.","uk":"Здатність чітко передавати інформацію та активно слухати інших."}}

  // Додавайте нові картки сюди у тому самому форматі ↑

];
