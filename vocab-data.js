const CATS = [
  {id:'NVV',                     de:'Nomen-Verb-Verbindungen', en:'NVV',                         uk:'NVV',                  e:'🧩'},
  {id:'Soft Skills',             de:'Soft Skills',             en:'Soft Skills',                 uk:'Soft Skills',          e:'🧠'},
  {id:'Hard Skills',             de:'Hard Skills',             en:'Hard Skills',                 uk:'Hard Skills',          e:'💻'},
  {id:'Mein Beruf',              de:'Mein Beruf',              en:'My profession',               uk:'Моя професія',         e:'💼'},
  {id:'Zusammenarbeit',          de:'Zusammenarbeit',          en:'Zusammenarbeit',              uk:'Zusammenarbeit',       e:'🤝'},
  {id:'Mein Weg in den Beruf',   de:'Mein Weg in den Beruf',   en:'My way in profession',        uk:'Мій шлях  професії',  e:'🚀'},
  {id:'Der erste Arbeitstag',    de:'Der erste Arbeitstag',    en:'The First Day of Work',       uk:'Перший робочий день',  e:'✨'},
  {id:'Über uns',                de:'Über uns',                en:'About us',                    uk:'Про нас',              e:'🏢'},
  {id:'Kommunikation ist alles', de:'Kommunikation ist alles', en:'Communication is everything', uk:'Спілкування - це все', e:'💬'},
  {id:'Telefongespräch',         de:'Telefongespräch',         en:'Telephone conversation',      uk:'Телефонна розмова',    e:'📱'},
  {id:'Messe',                   de:'Messe',                   en:'Exhibition',                  uk:'Виставка',             e:'🎪'},
  {id:'Abkürzungen',             de:'Abkürzungen',             en:'Abbreviations',               uk:'Скорочення',           e:'✂️'}
];


const LC = {
  de: {code:'de-DE', ms:['Katja','Hedda','Stefan','Conrad']},
  en: {code:'en-US', ms:['Aria','Jenny','Guy','Zira','David']},
  uk: {code:'uk-UA', ms:['Ostap','Polina']}
};
const F  = {en:'🇬🇧', uk:'🇺🇦', de:'🇩🇪'};
const LN = {en:'English', uk:'Українська', de:'Deutsch'};


const VOCAB = [
{"id":"nvv_001","cat":"NVV","term":{"de":"sich in Acht nehmen vor","en":"to be wary of / to watch out for","uk":"остерігатися / бути обережним щодо чогось"},"short":{"de":"aufpassen, vorsichtig sein","en":"to be careful, cautious","uk":"бути уважним, обережним"},"def":{"de":"Vor komplizierten Verträgen sollte man sich in Acht nehmen.","en":"One should be wary of complicated contracts.","uk":"Слід бути обережним щодо складних договорів."}},
{"id":"nvv_002","cat":"NVV","term":{"de":"jemandem Achtung entgegenbringen","en":"to show respect to someone","uk":"виявляти повагу до когось"},"short":{"de":"jemanden achten, respektieren","en":"to respect, esteem someone","uk":"поважати, шанувати когось"},"def":{"de":"Es ist wichtig, auch der Konkurrenz Achtung entgegenzubringen.","en":"It is important to show respect even to the competition.","uk":"Важливо виявляти повагу навіть до конкурентів."}},
{"id":"nvv_003","cat":"NVV","term":{"de":"die Absicht haben zu","en":"to have the intention to / to intend to","uk":"мати намір / збиратися"},"short":{"de":"beabsichtigen","en":"to intend","uk":"мати намір"},"def":{"de":"Ich habe die Absicht, Karriere zu machen.","en":"I intend to build a career.","uk":"Я маю намір зробити кар'єру."}},
{"id":"nvv_004","cat":"NVV","term":{"de":"eine Änderung vornehmen","en":"to make a change","uk":"вносити зміну"},"short":{"de":"ändern","en":"to change","uk":"змінювати"},"def":{"de":"Alle Mitarbeitenden können an ihrem Passwort jederzeit eine Änderung vornehmen.","en":"All employees can make a change to their password at any time.","uk":"Усі співробітники можуть будь-коли змінити свій пароль."}},

{"id":"nvv_006","cat":"NVV","term":{"de":"eine Anforderung erfüllen","en":"to meet a requirement","uk":"відповідати вимозі / виконувати вимогу"},"short":{"de":"genügen","en":"to meet, satisfy","uk":"відповідати, задовольняти"},"def":{"de":"Sarina erfüllt alle Anforderungen in der Stellenausschreibung.","en":"Sarina meets all the requirements in the job posting.","uk":"Саріна відповідає всім вимогам оголошення про вакансію."}},


{"id":"mb_001","cat":"Mein Beruf","term":{"de":"die Insolvenz","en":"insolvency","uk":"неплатоспроможність"},"short":{"de":"finanzielle Situation ohne Geld für Rechnungen","en":"financial situation without money for bills","uk":"фінансова ситуація без грошей на рахунки"},"def":{"de":"Wegen der Wirtschaftskrise musste das Unternehmen Insolvenz anmelden.","en":"Due to the economic crisis, the company had to file for insolvency.","uk":"Через економічну кризу підприємство змушене було оголосити про неплатоспроможність."}},
{"id":"mb_002","cat":"Mein Beruf","term":{"de":"insolvent","en":"insolvent","uk":"неплатоспроможний"},"short":{"de":"Zustand ohne finanzielle Mittel","en":"state without financial means","uk":"стан без фінансових ресурсів"},"def":{"de":"Nach vielen Verlusten ist die Firma nun endgültig insolvent.","en":"After many losses, the company is now finally insolvent.","uk":"Після багатьох збитків фірма нарешті стала неплатоспроможною."}},
{"id":"mb_003","cat":"Mein Beruf","term":{"de":"das Werkzeug","en":"the tool","uk":"інструмент"},"short":{"de":"Gegenstände für handwerkliche Arbeit","en":"objects for manual work","uk":"предмети для ручної праці"},"def":{"de":"Ohne das richtige Werkzeug kann der Mechaniker die Maschine nicht reparieren.","en":"Without the right tools, the mechanic cannot repair the machine.","uk":"Без належного інструменту механік не зможе відремонтувати машину."}},
{"id":"mb_004","cat":"Mein Beruf","term":{"de":"die Buchhaltung","en":"accounting","uk":"бухгалтерія"},"short":{"de":"Abteilung für Finanzen und Rechnungen","en":"department for finances and invoices","uk":"відділ фінансів та рахунків"},"def":{"de":"Die Buchhaltung hat daran erinnert, dass die Rechnung noch nicht bezahlt wurde.","en":"Accounting reminded that the invoice has not yet been paid.","uk":"Бухгалтерія нагадала, що рахунок ще не оплачено."}},
{"id":"mb_005","cat":"Mein Beruf","term":{"de":"die Behörde","en":"the authority","uk":"орган влади"},"short":{"de":"staatliche Stelle für Administration","en":"government office for administration","uk":"державний орган для адміністрування"},"def":{"de":"Für das Visum muss man Dokumente bei der zuständigen Behörde einreichen.","en":"For the visa, documents must be submitted to the responsible authority.","uk":"Для отримання візи потрібно подати документи до відповідного органу влади."}},
{"id":"mb_006","cat":"Mein Beruf","term":{"de":"tätig sein","en":"to be employed","uk":"працювати / бути зайнятим"},"short":{"de":"in einem Beruf arbeiten","en":"working in a profession","uk":"працювати за професією"},"def":{"de":"Er ist seit fünf Jahren als Bauingenieur in Hamburg tätig.","en":"He has been working as a civil engineer in Hamburg for five years.","uk":"Він уже п'ять років працює інженером-будівельником у Гамбурзі."}},
{"id":"mb_007","cat":"Mein Beruf","term":{"de":"die Tätigkeit","en":"the activity","uk":"діяльність"},"short":{"de":"berufliche Beschäftigung","en":"professional occupation","uk":"професійне заняття"},"def":{"de":"Die administrative Tätigkeit im Büro macht ihr viel Spaß.","en":"She enjoys the administrative activity in the office very much.","uk":"Адміністративна діяльність в офісі приносить їй багато задоволення."}},
{"id":"mb_008","cat":"Mein Beruf","term":{"de":"pendeln","en":"to commute","uk":"їздити на роботу (в інше місто)"},"short":{"de":"Weg zwischen Wohnort und Arbeit fahren","en":"traveling between home and work","uk":"поїздки між домом та роботою"},"def":{"de":"Viele Menschen pendeln täglich von Potsdam nach Berlin.","en":"Many people commute daily from Potsdam to Berlin.","uk":"Багато людей щодня їздять на роботу з Потсдама до Берліна."}},
{"id":"mb_009","cat":"Mein Beruf","term":{"de":"der Pendler","en":"the commuter","uk":"людина, що їздить на роботу здалеку"},"short":{"de":"Person mit weitem Arbeitsweg","en":"person with a long commute","uk":"людина з довгим шляхом до роботи"},"def":{"de":"Als Pendler verbringt er jeden Tag drei Stunden in der Bahn.","en":"As a commuter, he spends three hours on the train every day.","uk":"Як людина, що їздить здалеку, він щодня проводить три години в потязі."}},
{"id":"mb_010","cat":"Mein Beruf","term":{"de":"befristet","en":"fixed-term","uk":"строковий / обмежений у часі"},"short":{"de":"mit automatischem Ende","en":"with an automatic end","uk":"з автоматичним завершенням"},"def":{"de":"Mein aktueller Arbeitsvertrag ist leider nur auf sechs Monate befristet.","en":"Unfortunately, my current employment contract is only for a fixed term of six months.","uk":"Мій теперішній трудовий договір, на жаль, обмежений лише шістьма місяцями."}},




{"id":"ss_001","cat":"Soft Skills","term":{"de":"die Kommunikationsfähigkeit","en":"communication skills","uk":"комунікабельність"},"short":{"de":"sich klar ausdrücken","en":"expressing oneself clearly","uk":"вміння чітко висловлюватися"},"def":{"de":"Gut mit anderen sprechen und auch gut zuhören können.","en":"Being able to speak well with others and also listen well.","uk":"Вміння добре спілкуватися з іншими, а також уважно слухати."}},
{"id":"ss_002","cat":"Soft Skills","term":{"de":"die Teamfähigkeit","en":"ability to work in a team","uk":"вміння працювати в команді"},"short":{"de":"Kooperation mit Kollegen","en":"cooperation with colleagues","uk":"співпраця з колегами"},"def":{"de":"Gut und freundlich mit anderen Personen zusammenarbeiten.","en":"Working well and friendly with other people.","uk":"Добра та дружня співпраця з іншими людьми."}},
{"id":"ss_003","cat":"Soft Skills","term":{"de":"die Problemlösungskompetenz","en":"problem-solving skills","uk":"навичка вирішення проблем"},"short":{"de":"Lösungen finden","en":"finding solutions","uk":"пошук рішень"},"def":{"de":"Schwierige Situationen verstehen und schnell eine Lösung finden.","en":"Understanding difficult situations and finding a solution quickly.","uk":"Розуміння складних ситуацій та швидкий пошук рішення."}}

];
