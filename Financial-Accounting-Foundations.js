var PRIMARY_LANG = "en"; // головна мова контенту: term/ short/ def спочатку створюються тут, en/ uk/ ru — точний переклад цієї версії

var AUDIO_CONFIG = {
  //"de": ["100", "080"], //аудіо генерується зі швидкістю 80% і 100%
  "en": ["100"],        //аудіо генерується зі швидкістю 100%
  "uk": ["100"]
  //"ru": ["100"]
};


// ════════════════════════════════════════════════════════════════
//  VOCAB DATA  ·  Financial Accounting: Foundations
//  Формат кожної картки:
//  {
//    id:    унікальний рядок,
//    cat:   id категорії з масиву CATS,
//    term:  { de, en, uk, ru }  — термін / слово,
//    short: { de, en, uk, ru }  — коротке пояснення,
//    def:   { de, en, uk, ru }  — приклад речення або означення
//  }
// ════════════════════════════════════════════════════════════════


// & -> &amp;
// Лапки „ “   «»

// Апостроф ʼ


// ── КАТЕГОРІЇ ────────────────────────────────────────────────

var CATS = [
  {id:'Financial Accounting: Foundations', de:'Financial Accounting: Foundations', en:'Financial Accounting: Foundations', uk:'Financial Accounting: Foundations', ru:'Financial Accounting: Foundations', e:'💼'}
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

// ── КАРТКИ ───────────────────────────────────────────────────
var LESSONS = [
  {
    "id": "k1m1",
    "chapter": 1,
    "module": 1,
    "chapterTitle": {
      "de": "Financial Accounting: Foundations",
      "uk": "Financial Accounting: Foundations",
      "en": "Financial Accounting: Foundations",
      "ru": "Financial Accounting: Foundations"
    },
    "title": {
      "de": "Financial Accounting: Foundations",
      "uk": "Financial Accounting: Foundations",
      "en": "Financial Accounting: Foundations",
      "ru": "Financial Accounting: Foundations"
    },
    "skills": [],
    "cardIds": [
      "faf_001","faf_002","faf_003","faf_004","faf_005","faf_006","faf_007","faf_008","faf_009","faf_010",
      "faf_011","faf_012","faf_013","faf_014","faf_015","faf_016","faf_017","faf_018","faf_019","faf_020",
      "faf_021","faf_022","faf_023","faf_024","faf_025","faf_026","faf_027","faf_028","faf_029","faf_030",
      "faf_031","faf_032","faf_033","faf_034","faf_035","faf_036","faf_037"
    ],
    "unlockAfter": null,
    "sbCards": []
  }
];

var VOCAB = [
{"id": "faf_001", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Accounting", "uk": "Бухгалтерський облік", "ru": ""}, "short": {"de": "", "en": "It is a system that collects, processes, analyzes, measures, and records a firm’s financial information and reports that information to decision-makers.", "uk": "Це система, яка збирає, обробляє, аналізує, вимірює та реєструє фінансову інформацію компанії та надає звітність за цією інформацією особам, які приймають рішення.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_002", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Accounting fraud", "uk": "Шахрайство в бухгалтерському обліку", "ru": ""}, "short": {"de": "", "en": "It is the intentional misrepresentation and abuse of accounting information, including sales, revenues, expenses, assets, or liabilities, to inflate earnings and stock values, obtain more loans, or avoid debt commitments.", "uk": "Це навмисне викривлення та зловживання бухгалтерською інформацією, включаючи продажі, доходи, витрати, активи або зобов'язання, з метою штучного завищення прибутків та вартості акцій, отримання більшої кількості кредитів або уникнення боргових зобов'язань.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_003", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Accounts receivables", "uk": "Дебіторська заборгованість", "ru": ""}, "short": {"de": "", "en": "These are promises to receive money from customers and are generally classified as current assets.", "uk": "Це зобов'язання контрагентів щодо виплати грошових коштів компанії за надані товари чи послуги, які зазвичай класифікуються як оборотні активи.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_004", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Accrual accounting/Accruals", "uk": "Метод нарахування / Нарахування", "ru": ""}, "short": {"de": "", "en": "It is the accounting principle that recognizes revenue when earned and associated expenses when incurred, not when money is received/paid.", "uk": "Це бухгалтерський принцип, який передбачає визнання доходу в момент його заробляння, а пов'язаних із ним витрат — у момент їх виникнення, а не тоді, коли кошти фактично отримані або сплачені.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_005", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Annual report", "uk": "Річний звіт", "ru": ""}, "short": {"de": "", "en": "It is a document used by most companies to disclose corporate information to their shareholders. It includes an opening letter from the CEO, financial data, results of operations, market segment information, new product plans, subsidiary activities, and research and development activities on future programs.", "uk": "Це документ, який використовується більшістю компаній для розкриття корпоративної інформації своїм акціонерам. Він містить вступне слово від головного виконавчого директора (CEO), фінансові дані, результати діяльності, інформацію про сегменти ринку, плани щодо нових продуктів, діяльність дочірніх підприємств, а також науково-дослідні та дослідно-конструкторські роботи (НДДКР) за майбутніми програмами.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_006", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Bad debt", "uk": "Безнадійна заборгованість", "ru": ""}, "short": {"de": "", "en": "Bad debts occur when debtors do not pay. Bad debts reduce the amount of accounts receivable on the balance sheet and create a loss in the income statement.", "uk": "Безнадійний борг виникає, коли дебітори не здійснюють оплату. Безнадійна заборгованість зменшує суму дебіторської заборгованості в балансі та відображається як збиток у звіті про фінансові результати (звіті про прибутки та збитки).", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_007", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Balance sheet", "uk": "Баланс", "ru": ""}, "short": {"de": "", "en": "It reports the amount of assets, liabilities, and stockholders’ equity of an accounting entity at a point in time.", "uk": "Звіт про фінансовий стан, який відображає вартість активів, зобов'язань та власного капіталу суб'єкта господарювання на певну дату (момент часу).", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_008", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Building financial statements", "uk": "Складання фінансової звітності", "ru": ""}, "short": {"de": "", "en": "It is the process of recording transactions and sorting them to form a balance sheet, income statement, and cash flow statement.", "uk": "Це процес реєстрації господарських операцій та їх систематизації для формування балансу, звіту про фінансові результати (прибутки та збитки) та звіту про рух грошових коштів.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_009", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Cash accounting", "uk": "Касовий метод обліку", "ru": ""}, "short": {"de": "", "en": "It is the accounting principle that recognizes revenue when cash is received and recognizes expenses when cash is paid.", "uk": "Це бухгалтерський принцип, який передбачає визнання доходу в момент фактичного отримання грошових коштів, а витрат — у момент їх фактичної сплати.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_010", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Cash discounts", "uk": "Знижки за дострокову оплату", "ru": ""}, "short": {"de": "", "en": "They are discounts given over the sale price if the customer pays in a certain time period to encourage early payment.", "uk": "Це знижки від ціни продажу, які надаються у разі, якщо клієнт здійснює оплату протягом певного періоду часу, з метою стимулювання швидких розрахунків.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_011", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Cash flow statement", "uk": "Звіт про рух грошових коштів", "ru": ""}, "short": {"de": "", "en": "This is the financial statement showing how a firm's cash flows over a certain period.", "uk": "Це фінансова звітність, яка відображає надходження та вибуття грошових коштів та їх еквівалентів у компанії за певний звітний період.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_012", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Conservatism", "uk": "Принцип обачності (консерватизму)", "ru": ""}, "short": {"de": "", "en": "Revenues/profits are recorded only when earned, but provision is made for all known losses, even when the amount is only the best estimate based on available information.", "uk": "Доходи та прибутки визнаються лише тоді, коли вони фактично зароблені, проте забезпечення (резерви) створюються під усі відомі потенційні збитки, навіть якщо їхня сума є лише найкращою оцінкою на основі наявної інформації.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_013", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Consistency", "uk": "Принцип послідовності", "ru": ""}, "short": {"de": "", "en": "Consistency of accounting treatment of like items within each accounting period and from one period to the next.", "uk": "Послідовність застосування методів бухгалтерського обліку для аналогічних статей як протягом одного звітного періоду, так і при переході від одного періоду до наступного.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_014", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Contingent liability", "uk": "Умовне зобов'язання", "ru": ""}, "short": {"de": "", "en": "A potential liability that has arisen as a result of a past event; it is not a liability until some future event occurs.", "uk": "Потенційне зобов'язання, що виникло внаслідок минулих подій, яке стане реальним зобов'язанням лише у разі настання або ненастання однієї чи кількох майбутніх невизначених подій.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_015", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Creditors", "uk": "Кредитори", "ru": ""}, "short": {"de": "", "en": "Creditors lend money to a company for a specific length of time.", "uk": "Особи або установи, які надають компанії кошти в борг на певний фіксований строк.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_016", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Deferrals", "uk": "Відтермінування / Доходи та витрати майбутніх періодів", "ru": ""}, "short": {"de": "", "en": "Receipts of assets/cash in advance before goods or services are delivered.", "uk": "Отримання активів або грошових коштів авансом до моменту фактичної поставки товарів чи надання послуг.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_017", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "FIFO", "uk": "Метод ФІФО (перший прийшов — перший пішов)", "ru": ""}, "short": {"de": "", "en": "It assumes that the first units purchased or manufactured are the first units sold. This means that early purchases are expensed against revenues, and recent costs are included in inventory.", "uk": "Припускає, що перші придбані або виготовлені одиниці запасів продаються першими. Це означає, що собівартість раніше придбаних запасів списується на витрати проти доходів, а вартість останніх закупівель формує залишок запасів на балансі.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_018", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Financial statements", "uk": "Фінансова звітність", "ru": ""}, "short": {"de": "", "en": "Balance sheet, income statement, cash flow statement, and statements of shareholders’ equity.", "uk": "Комплект звітності, що включає баланс, звіт про фінансові результати (прибутки та збитки), звіт про рух грошових коштів та звіт про зміни у власному капіталі.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_019", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Financial transaction", "uk": "Фінансова (господарська) операція", "ru": ""}, "short": {"de": "", "en": "An exchange between a business and one or more external parties to a business. It has a monetary impact on the financial statements of a business.", "uk": "Обмін економічними ресурсами між підприємством та однією або кількома зовнішніми сторонами, який має грошовий вираз та впливає на показники фінансової звітності підприємства.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_020", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Fundamental accounting concepts", "uk": "Фундаментальні принципи бухгалтерського обліку", "ru": ""}, "short": {"de": "", "en": "They are concepts governing the accounting system and include going concern, consistency, accruals, matching principle, and conservatism.", "uk": "Концепції, що регулюють систему обліку і включають безперервність діяльності, послідовність, нарахування, принцип відповідності доходів і витрат, а також обачність.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_021", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Fundamental accounting equation", "uk": "Основне бухгалтерське рівняння", "ru": ""}, "short": {"de": "", "en": "Assets = Liabilities + Stockholders’ Equity.", "uk": "Активи = Зобов'язання + Власний капітал.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_022", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Going concern", "uk": "Принцип безперервності діяльності", "ru": ""}, "short": {"de": "", "en": "The assumption that the business will continue to operate for the foreseeable future.", "uk": "Припущення про те, що підприємство продовжуватиме свою діяльність у найближчому осяжному майбутньому і не має наміру чи потреби у ліквідації.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_023", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Income statement", "uk": "Звіт про фінансові результати (прибутки та збитки)", "ru": ""}, "short": {"de": "", "en": "It is a financial statement that reports revenues, expenses, gains, and losses during a period.", "uk": "Фінансова звітність, яка відображає доходи, витрати, прибутки та збитки підприємства протягом певного звітного періоду.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_024", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Inventory", "uk": "Запаси / Товарно-матеріальні цінності", "ru": ""}, "short": {"de": "", "en": "They are the goods of a firm that are sold to customers to generate revenues.", "uk": "Товари чи активи компанії, призначені для продажу клієнтам з метою отримання доходу.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_025", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Inventory impairment", "uk": "Уцінка (знецінення) запасів", "ru": ""}, "short": {"de": "", "en": "It occurs when the net realizable value of an inventory is less than the cost. Inventory impairment decreases the value of the inventory account on the balance sheet and creates a corresponding expense on the income statement.", "uk": "Виникає, коли чиста вартість реалізації запасів стає меншою за їхню первісну вартість (собівартість). Уцінка зменшує балансову вартість рахунку запасів і відображається як відповідні витрати у звіті про фінансові результати.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_026", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "LIFO", "uk": "Метод ЛІФО (останній прийшов — перший пішов)", "ru": ""}, "short": {"de": "", "en": "It assumes that the last units purchased or manufactured are the first units sold. This method matches recent costs with revenues; earlier purchases remain in inventory.", "uk": "Припускає, що останні придбані або виготовлені одиниці запасів продаються першими. Цей метод зіставляє поточні (останні) витрати з поточними доходами, тоді як раніші закупівлі залишаються у складі запасів.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_027", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Lower of the cost or the market", "uk": "Оцінка за найменшою з двох вартостей: собівартості або ринкової вартості", "ru": ""}, "short": {"de": "", "en": "This is the valuation method used to value inventory on the balance sheet. It departs from the cost principle and recognizes a loss when the replacement cost or net realizable value of an inventory drops below cost.", "uk": "Метод оцінки запасів у балансі. Він відхиляється від принципу історичної собівартості та передбачає визнання збитку, якщо вартість заміщення (відтворення) або чиста вартість реалізації запасів падає нижче їхньої собівартості.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_028", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Matching", "uk": "Принцип відповідності (доходів і витрат)", "ru": ""}, "short": {"de": "", "en": "Revenues earned by a business are matched with the expenses incurred in earning those revenues.", "uk": "Доходи, отримані підприємством, зіставляються (визнаються в одному періоді) з витратами, понесеними для отримання цих доходів.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_029", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Net realizable value of receivables", "uk": "Чиста вартість реалізації дебіторської заборгованості", "ru": ""}, "short": {"de": "", "en": "Face value of receivables less cash discounts, sales returns, and bad debts.", "uk": "Номінальна вартість дебіторської заборгованості за вирахуванням знижок за дострокову оплату, повернень товарів та безнадійних боргів.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_030", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Percentage of sales method", "uk": "Метод відсотка від обсягу продажів", "ru": ""}, "short": {"de": "", "en": "Provision for bad debts equals a certain percentage of the credit sales. The percentage comes from either past experience or the bad debt rates of other firms in the same industry.", "uk": "Метод, за якого резерв сумнівних боргів розраховується як певний відсоток від обсягу продажів у кредит. Цей відсоток визначається на основі минулого досвіду компанії або середніх показників неповернення боргів у відповідній галузі.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_031", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Prepaid expenses", "uk": "Витрати майбутніх періодів / Авансові платежі", "ru": ""}, "short": {"de": "", "en": "It is an asset account that records the prepayment of future expenses.", "uk": "Рахунок активів, на якому реєструється попередня оплата майбутніх витрат.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_032", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Provision for doubtful accounts", "uk": "Резерв сумнівних боргів", "ru": ""}, "short": {"de": "", "en": "It is the amount of estimated accounts receivables that firms do not expect to collect from customers.", "uk": "Оціночна сума дебіторської заборгованості, яку компанія не очікує стягнути (отримати) від своїх клієнтів.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_033", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Recording financial transactions", "uk": "Реєстрація фінансових (господарських) операцій", "ru": ""}, "short": {"de": "", "en": "It involves the following steps:<br>Identify the accounts affected (at least two).<br>Classify each account as an asset, liability, or shareholders’ equity.<br>Determine the direction of the effect on each account.<br>Make sure that the fundamental accounting equation remains in balance.", "uk": "Включає такі кроки:<br>1. Визначити рахунки, на які впливає операція (щонайменше два).<br>2. Класифікувати кожен рахунок як актив, зобов'язання або власний капітал.<br>3. Визначити напрямок впливу на кожен рахунок (збільшення чи зменшення).<br>4. Переконатися, що основне бухгалтерське рівняння залишається в балансі.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_034", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Revenue recognition", "uk": "Визнання доходу", "ru": ""}, "short": {"de": "", "en": "The accounting principle governing when revenues need to be recognized in financial statements.", "uk": "Бухгалтерський принцип, що регулює умови та момент часу, коли доходи мають бути визнані та відображені у фінансовій звітності.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_035", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Sales return", "uk": "Повернення товарів (оціночний резерв)", "ru": ""}, "short": {"de": "", "en": "It is a provision account that records the estimated number of sales returns by customers.", "uk": "Контрарний або оціночний рахунок, на якому реєструється очікувана (розрахункова) кількість повернень товарів покупцями.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_036", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Shareholders", "uk": "Акціонери", "ru": ""}, "short": {"de": "", "en": "Ultimate owners of firms.", "uk": "Кінцеві власники компанії (акціонерного товариства).", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
{"id": "faf_037", "cat": "Financial Accounting: Foundations", "term": {"de": "", "en": "Unearned revenue", "uk": "Доходи майбутніх періодів / Отримані аванси", "ru": ""}, "short": {"de": "", "en": "It is a liability account recording the firm’s promise to perform services or deliver goods in the future and is generated when customers pay in advance.", "uk": "Рахунок зобов'язань, на якому реєструється обов'язок компанії надати послуги або поставити товари у майбутньому, що виникає, коли клієнти здійснюють передоплату.", "ru": ""}, "def": {"de": "", "en": "", "uk": "", "ru": ""}},
];



// ── QUIZ ─────────────────────────────────────────────────────
// Поки порожньо — додавайте об'єкти за зразком нижче (закоментовано),
// як тільки будуть готові тестові питання курсу.
var QUIZ = [
  // {
  //   id: "qiz001",
  //   cardId: "faf_001",   // id картки з VOCAB, до якої належить питання
  //   lessonId: "k1m1",    // id уроку з LESSONS
  //   cat: "modul",
  //   question: { de:"", uk:"Питання...?", en:"Question...?", ru:"" },
  //   answers: [
  //     { de:"", uk:"Правильна відповідь", en:"Correct answer", ru:"", correct: true },
  //     { de:"", uk:"Невірний варіант", en:"Wrong option", ru:"" },
  //   ],
  // },
];

// ── SPRACHBAUSTEINE (граматичні конструкції / мовні блоки) ────
// Поки порожньо — категорії (SB_CATS) і самі картки (SPRACHBAUSTEINE)
// додавайте за зразком нижче (закоментовано), коли буде готовий
// граматичний матеріал курсу.
var SB_CATS = [
  // { id:"example_cat", de:"", en:"Example category", uk:"Приклад категорії", ru:"", e:"🚀" },
];

var SPRACHBAUSTEINE = [
  // {
  //   id:"sbs_001", cat:"example_cat",
  //   sentence:{ de:"", en:"{{BLANK}} the company reported strong earnings.", uk:"", ru:"" },
  //   answer:{ de:"", en:"Overall", uk:"", ru:"" },
  //   distractors:["Alternative1","Alternative2","Alternative3"],
  //   explanation:{ de:"", en:"Explanation of why this answer is correct.", uk:"", ru:"" }
  // },
];
