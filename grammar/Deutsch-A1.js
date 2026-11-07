// grammar/Deutsch-A1.js — граматичні теми рівня A1 (мова: Deutsch, de).
// Спільний файл для всіх курсів цього рівня й мови (напр. Deutsch-A1 і Deutsch-A1-Beruf).
// Курс посилається на нього рядком  var GRAMMAR_FILE = "Deutsch-A1";  — LESSONS.grammar і поле gram
// карток (VOCAB, DIALOGE, SPRACHBAUSTEINE, SCHREIBEN, EMAILS) містять id звідси.
// id мають бути унікальними в межах УСІХ grammar/Deutsch-*.js (перевірка: node tools/check-grammar.js).
// Файл оголошує ЛИШЕ GRAMMAR_LANG і GRAMMAR: у монолітному режимі він вантажиться звичайним
// скриптом поруч із файлом курсу, і будь-яка інша глобальна змінна перезаписала б змінну курсу.
var GRAMMAR_LANG = "de";

// ── ГРАМАТИКА ────────────────────────────────────────────────
// Кожне правило: id (стабільний, на нього посилаються LESSONS.grammar
// і card.gram у VOCAB/DIALOGE/SPRACHBAUSTEINE) + title/explanation
// багатомовно. explanation підтримує <g>/<b> для підсвітки прикладів.
// Поле rule (довгий довідниковий розділ) поки відсутнє — додається пізніше за §11.1.
var GRAMMAR = [
  {
    "id": "personalpronomen_verben",
    "title": {
      "de": "Personalpronomen und Verben (ich, du, Sie)",
      "en": "Personal pronouns and verbs (ich, du, Sie)",
      "uk": "Особові займенники та дієслова (ich, du, Sie)",
      "ru": "Личные местоимения и глаголы (ich, du, Sie)"
    },
    "explanation": {
      "de": "Personalpronomen zeigen, wer etwas tut: <g>ich</g> (ich selbst), <g>du</g> (eine Person, die ich gut kenne) und <g>Sie</g> (höfliche Anrede für eine oder mehrere Personen).<br>Das Verb bekommt je nach Person eine andere Endung: ich heiß<g>e</g>, du heiß<g>t</g>, Sie heiß<g>en</g>.<br>Im Plural sagt man <g>wir</g>, <g>ihr</g> und <g>sie</g>: wir komm<g>en</g>, ihr komm<g>t</g>, sie komm<g>en</g>.<br><b>Sie</b> (höflich) schreibt man immer groß.",
      "en": "Personal pronouns show who is doing something: <g>ich</g> (I), <g>du</g> (you, for someone you know well) and <g>Sie</g> (polite „you“ for one or more people).<br>The verb takes a different ending depending on the person: ich heiß<g>e</g>, du heiß<g>t</g>, Sie heiß<g>en</g>.<br>In the plural you say <g>wir</g> (we), <g>ihr</g> (you, several people you know well) and <g>sie</g> (they): wir komm<g>en</g>, ihr komm<g>t</g>, sie komm<g>en</g>.<br>The polite <b>Sie</b> is always capitalised.",
      "uk": "Особові займенники показують, хто виконує дію: <g>ich</g> (я), <g>du</g> (ти — до добре знайомої людини) та <g>Sie</g> (ввічливе «ви» до однієї чи кількох осіб).<br>Дієслово має різне закінчення залежно від особи: ich heiß<g>e</g>, du heiß<g>t</g>, Sie heiß<g>en</g>.<br>У множині кажуть <g>wir</g> (ми), <g>ihr</g> (ви — до кількох знайомих) і <g>sie</g> (вони): wir komm<g>en</g>, ihr komm<g>t</g>, sie komm<g>en</g>.<br>Ввічливе <b>Sie</b> завжди пишеться з великої літери.",
      "ru": "Личные местоимения показывают, кто выполняет действие: <g>ich</g> (я), <g>du</g> (ты — к хорошо знакомому человеку) и <g>Sie</g> (вежливое «вы» к одному или нескольким людям).<br>Глагол получает разное окончание в зависимости от лица: ich heiß<g>e</g>, du heiß<g>t</g>, Sie heiß<g>en</g>.<br>Во множественном числе говорят <g>wir</g> (мы), <g>ihr</g> (вы — к нескольким знакомым) и <g>sie</g> (они): wir komm<g>en</g>, ihr komm<g>t</g>, sie komm<g>en</g>.<br>Вежливое <b>Sie</b> всегда пишется с большой буквы."
    }
  },
  {
    "id": "fragen_w_ja_nein",
    "title": {
      "de": "W-Fragen und Ja/Nein-Fragen",
      "en": "W-questions and yes/no questions",
      "uk": "W-питання та питання «так/ні»",
      "ru": "W-вопросы и вопросы «да/нет»"
    },
    "explanation": {
      "de": "Im Deutschen gibt es zwei Arten von Fragen.<br>Eine W-Frage beginnt mit einem Fragewort: <g>Wer</g>? <g>Was</g>? <g>Wo</g>? <g>Woher</g>? <g>Wie</g>? Danach kommt das Verb: <g>Woher</g> kommen Sie?<br>Eine Ja/Nein-Frage hat kein Fragewort, das Verb steht am Anfang: <g>Kommen</g> Sie aus Polen? Man antwortet mit „Ja“ oder „Nein“.",
      "en": "German has two kinds of questions.<br>A W-question starts with a question word: <g>Wer</g>? (who) <g>Was</g>? (what) <g>Wo</g>? (where) <g>Woher</g>? (where from) <g>Wie</g>? (how). The verb comes next: <g>Woher</g> kommen Sie?<br>A yes/no question has no question word, and the verb stands first: <g>Kommen</g> Sie aus Polen? You answer with „Ja“ or „Nein“.",
      "uk": "У німецькій мові є два типи питань.<br>W-питання починається з питального слова: <g>Wer</g>? (хто) <g>Was</g>? (що) <g>Wo</g>? (де) <g>Woher</g>? (звідки) <g>Wie</g>? (як). Одразу після нього стоїть дієслово: <g>Woher</g> kommen Sie?<br>Питання «так/ні» не має питального слова, дієслово стоїть на першому місці: <g>Kommen</g> Sie aus Polen? Відповідають «Ja» або «Nein».",
      "ru": "В немецком языке есть два типа вопросов.<br>W-вопрос начинается с вопросительного слова: <g>Wer</g>? (кто) <g>Was</g>? (что) <g>Wo</g>? (где) <g>Woher</g>? (откуда) <g>Wie</g>? (как). Сразу после него стоит глагол: <g>Woher</g> kommen Sie?<br>Вопрос «да/нет» не имеет вопросительного слова, глагол стоит на первом месте: <g>Kommen</g> Sie aus Polen? Отвечают «Ja» или «Nein»."
    }
  },
  {
    "id": "praesens_konjugation",
    "title": {
      "de": "Konjugation im Präsens",
      "en": "Present tense conjugation",
      "uk": "Відмінювання дієслів у теперішньому часі",
      "ru": "Спряжение глаголов в настоящем времени"
    },
    "explanation": {
      "de": "Regelmäßige Verben wie kommen, wohnen oder lernen haben im Präsens feste Endungen: ich -<g>e</g>, du -<g>st</g>, er/sie/es -<g>t</g>, wir -<g>en</g>, ihr -<g>t</g>, sie/Sie -<g>en</g>.<br>Beispiel: ich komm<g>e</g>, du komm<g>st</g>, er komm<g>t</g>.<br>Endet der Stamm auf -t oder -d (arbeiten), kommt ein -e- dazu: du arbeit<g>e</g>st, er arbeit<g>e</g>t.<br>Bei „heißen“ endet die du-Form nur auf -t: du heiß<g>t</g>.",
      "en": "Regular verbs such as kommen, wohnen or lernen have fixed endings in the present tense: ich -<g>e</g>, du -<g>st</g>, er/sie/es -<g>t</g>, wir -<g>en</g>, ihr -<g>t</g>, sie/Sie -<g>en</g>.<br>Example: ich komm<g>e</g>, du komm<g>st</g>, er komm<g>t</g>.<br>If the stem ends in -t or -d (arbeiten), an -e- is added: du arbeit<g>e</g>st, er arbeit<g>e</g>t.<br>With „heißen“ the du-form ends only in -t: du heiß<g>t</g>.",
      "uk": "Правильні дієслова, як-от kommen, wohnen чи lernen, мають у теперішньому часі сталі закінчення: ich -<g>e</g>, du -<g>st</g>, er/sie/es -<g>t</g>, wir -<g>en</g>, ihr -<g>t</g>, sie/Sie -<g>en</g>.<br>Приклад: ich komm<g>e</g>, du komm<g>st</g>, er komm<g>t</g>.<br>Якщо основа закінчується на -t або -d (arbeiten), додається -e-: du arbeit<g>e</g>st, er arbeit<g>e</g>t.<br>У дієслова «heißen» форма du закінчується лише на -t: du heiß<g>t</g>.",
      "ru": "Правильные глаголы, такие как kommen, wohnen или lernen, имеют в настоящем времени постоянные окончания: ich -<g>e</g>, du -<g>st</g>, er/sie/es -<g>t</g>, wir -<g>en</g>, ihr -<g>t</g>, sie/Sie -<g>en</g>.<br>Пример: ich komm<g>e</g>, du komm<g>st</g>, er komm<g>t</g>.<br>Если основа оканчивается на -t или -d (arbeiten), добавляется -e-: du arbeit<g>e</g>st, er arbeit<g>e</g>t.<br>У глагола «heißen» форма du оканчивается только на -t: du heiß<g>t</g>."
    }
  },
  {
    "id": "satzbau_aussage_frage",
    "title": {
      "de": "Satzbau: Aussagesatz und Fragen",
      "en": "Sentence structure: statements and questions",
      "uk": "Будова речення: розповідне речення та питання",
      "ru": "Структура предложения: повествовательное предложение и вопросы"
    },
    "explanation": {
      "de": "Im Aussagesatz steht das Verb immer auf <b>Position 2</b>: Ich <g>komme</g> aus Spanien.<br>Auch wenn etwas anderes am Anfang steht, bleibt das Verb auf Position 2: Heute <g>wohne</g> ich in Köln.<br>In der W-Frage steht das Fragewort auf Position 1 und das Verb auf Position 2: Wo <g>wohnen</g> Sie?<br>In der Ja/Nein-Frage steht das Verb auf Position 1: <g>Wohnen</g> Sie in Köln?",
      "en": "In a statement, the verb is always in <b>position 2</b>: Ich <g>komme</g> aus Spanien.<br>Even if something else stands at the beginning, the verb stays in position 2: Heute <g>wohne</g> ich in Köln.<br>In a W-question the question word is in position 1 and the verb in position 2: Wo <g>wohnen</g> Sie?<br>In a yes/no question the verb is in position 1: <g>Wohnen</g> Sie in Köln?",
      "uk": "У розповідному реченні дієслово завжди стоїть на <b>другому місці</b>: Ich <g>komme</g> aus Spanien.<br>Навіть якщо на початку стоїть інше слово, дієслово лишається на другому місці: Heute <g>wohne</g> ich in Köln.<br>У W-питанні питальне слово стоїть на першому місці, а дієслово — на другому: Wo <g>wohnen</g> Sie?<br>У питанні «так/ні» дієслово стоїть на першому місці: <g>Wohnen</g> Sie in Köln?",
      "ru": "В повествовательном предложении глагол всегда стоит на <b>втором месте</b>: Ich <g>komme</g> aus Spanien.<br>Даже если в начале стоит другое слово, глагол остаётся на втором месте: Heute <g>wohne</g> ich in Köln.<br>В W-вопросе вопросительное слово стоит на первом месте, а глагол — на втором: Wo <g>wohnen</g> Sie?<br>В вопросе «да/нет» глагол стоит на первом месте: <g>Wohnen</g> Sie in Köln?"
    }
  },
  {
    "id": "sein_haben_praesens",
    "title": {
      "de": "sein und haben im Präsens",
      "en": "sein and haben in the present tense",
      "uk": "sein та haben в теперішньому часі",
      "ru": "sein и haben в настоящем времени"
    },
    "explanation": {
      "de": "Die Verben <g>sein</g> und <g>haben</g> sind unregelmäßig — man muss ihre Formen auswendig lernen.<br>sein: ich <g>bin</g>, du <g>bist</g>, er/sie/es <g>ist</g>, wir <g>sind</g>, ihr <g>seid</g>, sie/Sie <g>sind</g>.<br>haben: ich <g>habe</g>, du <g>hast</g>, er/sie/es <g>hat</g>, wir <g>haben</g>, ihr <g>habt</g>, sie/Sie <g>haben</g>.<br>Beispiele: Ich <g>bin</g> Lehrerin. Adita <g>hat</g> ein Problem.",
      "en": "The verbs <g>sein</g> (to be) and <g>haben</g> (to have) are irregular — you have to learn their forms by heart.<br>sein: ich <g>bin</g>, du <g>bist</g>, er/sie/es <g>ist</g>, wir <g>sind</g>, ihr <g>seid</g>, sie/Sie <g>sind</g>.<br>haben: ich <g>habe</g>, du <g>hast</g>, er/sie/es <g>hat</g>, wir <g>haben</g>, ihr <g>habt</g>, sie/Sie <g>haben</g>.<br>Examples: Ich <g>bin</g> Lehrerin. Adita <g>hat</g> ein Problem.",
      "uk": "Дієслова <g>sein</g> («бути») та <g>haben</g> («мати») неправильні — їхні форми потрібно вивчити напамʼять.<br>sein: ich <g>bin</g>, du <g>bist</g>, er/sie/es <g>ist</g>, wir <g>sind</g>, ihr <g>seid</g>, sie/Sie <g>sind</g>.<br>haben: ich <g>habe</g>, du <g>hast</g>, er/sie/es <g>hat</g>, wir <g>haben</g>, ihr <g>habt</g>, sie/Sie <g>haben</g>.<br>Приклади: Ich <g>bin</g> Lehrerin. Adita <g>hat</g> ein Problem.",
      "ru": "Глаголы <g>sein</g> («быть») и <g>haben</g> («иметь») неправильные — их формы нужно выучить наизусть.<br>sein: ich <g>bin</g>, du <g>bist</g>, er/sie/es <g>ist</g>, wir <g>sind</g>, ihr <g>seid</g>, sie/Sie <g>sind</g>.<br>haben: ich <g>habe</g>, du <g>hast</g>, er/sie/es <g>hat</g>, wir <g>haben</g>, ihr <g>habt</g>, sie/Sie <g>haben</g>.<br>Примеры: Ich <g>bin</g> Lehrerin. Adita <g>hat</g> ein Problem."
    }
  },
  {
    "id": "zahlen_bildung",
    "title": {
      "de": "Zahlen bilden (11 bis 100)",
      "en": "Forming numbers (11 to 100)",
      "uk": "Утворення числівників (від 11 до 100)",
      "ru": "Образование числительных (от 11 до 100)"
    },
    "explanation": {
      "de": "Die Zahlen 13 bis 19 bildet man mit der Einerzahl und „-zehn“: drei<g>zehn</g>, vier<g>zehn</g>. Bei sechzehn und siebzehn fällt ein Teil weg (sechs → sech-, sieben → sieb-).<br>Ab 21 spricht man erst die Einer, dann die Zehner: <g>ein</g>und<g>zwanzig</g> (1 + 20). Man schreibt die Zahl in einem Wort.<br>Die Zehner enden meist auf „-zig“: vier<g>zig</g>, fünf<g>zig</g>. Ausnahme: drei<g>ßig</g> (30).<br>100 heißt „hundert“.",
      "en": "The numbers 13 to 19 are formed with the unit number and „-zehn“: drei<g>zehn</g> (13), vier<g>zehn</g> (14). With sechzehn and siebzehn part of the word drops out (sechs → sech-, sieben → sieb-).<br>From 21 on you say the units first, then the tens: <g>ein</g>und<g>zwanzig</g> (1 + 20). The number is written as one word.<br>The tens mostly end in „-zig“: vier<g>zig</g>, fünf<g>zig</g>. Exception: drei<g>ßig</g> (30).<br>100 is „hundert“.",
      "uk": "Числа від 13 до 19 утворюються з одиниць і «-zehn»: drei<g>zehn</g> (13), vier<g>zehn</g> (14). У sechzehn та siebzehn частина слова випадає (sechs → sech-, sieben → sieb-).<br>Починаючи з 21, спочатку називають одиниці, потім десятки: <g>ein</g>und<g>zwanzig</g> (1 + 20). Число пишеться одним словом.<br>Десятки здебільшого закінчуються на «-zig»: vier<g>zig</g>, fünf<g>zig</g>. Виняток: drei<g>ßig</g> (30).<br>100 — це «hundert».",
      "ru": "Числа от 13 до 19 образуются из единиц и «-zehn»: drei<g>zehn</g> (13), vier<g>zehn</g> (14). В sechzehn и siebzehn часть слова выпадает (sechs → sech-, sieben → sieb-).<br>Начиная с 21, сначала называют единицы, потом десятки: <g>ein</g>und<g>zwanzig</g> (1 + 20). Число пишется одним словом.<br>Десятки в основном оканчиваются на «-zig»: vier<g>zig</g>, fünf<g>zig</g>. Исключение: drei<g>ßig</g> (30).<br>100 — это «hundert»."
    }
  },
  {
    "id": "genus_berufe_in",
    "title": {
      "de": "Genus und Berufsbezeichnungen mit -in",
      "en": "Gender and job titles with -in",
      "uk": "Рід іменників і назви професій із -in",
      "ru": "Род существительных и названия профессий с -in"
    },
    "explanation": {
      "de": "Jedes Nomen hat ein Genus und damit einen Artikel: <g>der</g> (maskulin), <g>das</g> (neutral) oder <g>die</g> (feminin). Den Artikel lernt man immer zusammen mit dem Nomen.<br>Bei Berufen bildet man die weibliche Form meist mit der Endung <g>-in</g>: der Lehrer → die Lehrer<g>in</g>, der Koch → die Köch<g>in</g>.<br>Manchmal kommt ein Umlaut dazu: der Arzt → die Ärz<g>tin</g>.",
      "en": "Every noun has a gender and therefore an article: <g>der</g> (masculine), <g>das</g> (neuter) or <g>die</g> (feminine). You always learn the article together with the noun.<br>For jobs, the feminine form is usually made with the ending <g>-in</g>: der Lehrer → die Lehrer<g>in</g>, der Koch → die Köch<g>in</g>.<br>Sometimes an umlaut is added: der Arzt → die Ärz<g>tin</g>.",
      "uk": "Кожен іменник має рід, а отже й артикль: <g>der</g> (чоловічий), <g>das</g> (середній) або <g>die</g> (жіночий). Артикль завжди вчать разом з іменником.<br>У назвах професій жіночу форму зазвичай утворюють за допомогою закінчення <g>-in</g>: der Lehrer → die Lehrer<g>in</g>, der Koch → die Köch<g>in</g>.<br>Іноді додається умлаут: der Arzt → die Ärz<g>tin</g>.",
      "ru": "У каждого существительного есть род, а значит, и артикль: <g>der</g> (мужской), <g>das</g> (средний) или <g>die</g> (женский). Артикль всегда учат вместе с существительным.<br>В названиях профессий женскую форму обычно образуют с помощью окончания <g>-in</g>: der Lehrer → die Lehrer<g>in</g>, der Koch → die Köch<g>in</g>.<br>Иногда добавляется умлаут: der Arzt → die Ärz<g>tin</g>."
    }
  },
  {
    "id": "plural_nomen",
    "title": {
      "de": "Der Plural der Nomen",
      "en": "The plural of nouns",
      "uk": "Множина іменників",
      "ru": "Множественное число существительных"
    },
    "explanation": {
      "de": "Die Mehrzahl heißt Plural. Der Artikel im Plural ist immer <g>die</g>: die Kinder, die Lehrerinnen.<br>Es gibt typische Endungen: -<g>e</g> (der Tisch → die Tisch<g>e</g>), -<g>(e)n</g> (die Tasche → die Tasche<g>n</g>), -<g>er</g> (das Kind → die Kind<g>er</g>), -<g>s</g> (das Handy → die Handy<g>s</g>) oder keine Endung (der Lehrer → die Lehrer). Oft kommt ein Umlaut dazu: der Sohn → die S<g>ö</g>hne.<br>Lernen Sie den Plural immer mit dem Nomen: das Buch, Bücher.<br>Fragen: <b>Wie viel</b> Geld? (nicht zählbar) — <b>Wie viele</b> Kinder? (Plural).",
      "en": "The plural is the form for more than one. The article in the plural is always <g>die</g>: die Kinder, die Lehrerinnen.<br>There are typical endings: -<g>e</g> (der Tisch → die Tisch<g>e</g>), -<g>(e)n</g> (die Tasche → die Tasche<g>n</g>), -<g>er</g> (das Kind → die Kind<g>er</g>), -<g>s</g> (das Handy → die Handy<g>s</g>) or no ending (der Lehrer → die Lehrer). An umlaut is often added: der Sohn → die S<g>ö</g>hne.<br>Always learn the plural together with the noun: das Buch, Bücher.<br>Questions: <b>Wie viel</b> Geld? (uncountable) — <b>Wie viele</b> Kinder? (plural).",
      "uk": "Множина утворюється, коли предметів кілька. Артикль у множині завжди <g>die</g>: die Kinder, die Lehrerinnen.<br>Типові закінчення: -<g>e</g> (der Tisch → die Tisch<g>e</g>), -<g>(e)n</g> (die Tasche → die Tasche<g>n</g>), -<g>er</g> (das Kind → die Kind<g>er</g>), -<g>s</g> (das Handy → die Handy<g>s</g>) або без закінчення (der Lehrer → die Lehrer). Часто додається умлаут: der Sohn → die S<g>ö</g>hne.<br>Множину завжди вчіть разом з іменником: das Buch, Bücher.<br>Питання: <b>Wie viel</b> Geld? (незлічуване) — <b>Wie viele</b> Kinder? (множина).",
      "ru": "Множественное число образуется, когда предметов несколько. Артикль во множественном числе всегда <g>die</g>: die Kinder, die Lehrerinnen.<br>Типичные окончания: -<g>e</g> (der Tisch → die Tisch<g>e</g>), -<g>(e)n</g> (die Tasche → die Tasche<g>n</g>), -<g>er</g> (das Kind → die Kind<g>er</g>), -<g>s</g> (das Handy → die Handy<g>s</g>) или без окончания (der Lehrer → die Lehrer). Часто добавляется умлаут: der Sohn → die S<g>ö</g>hne.<br>Множественное число всегда учите вместе с существительным: das Buch, Bücher.<br>Вопросы: <b>Wie viel</b> Geld? (неисчисляемое) — <b>Wie viele</b> Kinder? (множественное число)."
    }
  },
  {
    "id": "artikel_bestimmt_unbestimmt",
    "title": {
      "de": "Bestimmter und unbestimmter Artikel",
      "en": "Definite and indefinite article",
      "uk": "Означений і неозначений артиклі",
      "ru": "Определённый и неопределённый артикли"
    },
    "explanation": {
      "de": "Der <b>bestimmte Artikel</b> (<g>der, das, die</g>) nennt etwas Bekanntes: <g>Der</g> Tisch ist braun.<br>Der <b>unbestimmte Artikel</b> (<g>ein, eine</g>) nennt etwas zum ersten Mal: Das ist <g>ein</g> Tisch.<br>maskulin: der / ein Stift — neutral: das / ein Heft — feminin: die / eine Tasche.<br>Im Plural gibt es keinen unbestimmten Artikel: Das sind Stifte. Bestimmt: <g>die</g> Stifte.",
      "en": "The <b>definite article</b> (<g>der, das, die</g>) refers to something known: <g>Der</g> Tisch ist braun.<br>The <b>indefinite article</b> (<g>ein, eine</g>) introduces something for the first time: Das ist <g>ein</g> Tisch.<br>masculine: der / ein Stift — neuter: das / ein Heft — feminine: die / eine Tasche.<br>There is no indefinite article in the plural: Das sind Stifte. Definite: <g>die</g> Stifte.",
      "uk": "<b>Означений артикль</b> (<g>der, das, die</g>) називає щось відоме: <g>Der</g> Tisch ist braun.<br><b>Неозначений артикль</b> (<g>ein, eine</g>) називає щось уперше: Das ist <g>ein</g> Tisch.<br>чоловічий рід: der / ein Stift — середній: das / ein Heft — жіночий: die / eine Tasche.<br>У множині неозначеного артикля немає: Das sind Stifte. Означений: <g>die</g> Stifte.",
      "ru": "<b>Определённый артикль</b> (<g>der, das, die</g>) называет что-то известное: <g>Der</g> Tisch ist braun.<br><b>Неопределённый артикль</b> (<g>ein, eine</g>) называет что-то впервые: Das ist <g>ein</g> Tisch.<br>мужской род: der / ein Stift — средний: das / ein Heft — женский: die / eine Tasche.<br>Во множественном числе неопределённого артикля нет: Das sind Stifte. Определённый: <g>die</g> Stifte."
    }
  },
  {
    "id": "negativartikel_kein",
    "title": {
      "de": "Der Negativartikel kein / keine",
      "en": "The negative article kein / keine",
      "uk": "Заперечний артикль kein / keine",
      "ru": "Отрицательный артикль kein / keine"
    },
    "explanation": {
      "de": "Mit „<g>kein</g>“ verneint man ein Nomen, vor dem „ein / eine“ steht oder gar kein Artikel. Es wird wie „ein“ gebildet: <g>kein</g> Tisch, <g>kein</g> Heft, <g>keine</g> Tasche, <g>keine</g> Stühle (Plural).<br>Beispiel: Ist da ein Supermarkt? — Nein, da ist <g>kein</g> Supermarkt.<br>Mit „nicht“ verneint man dagegen Verben und Adjektive: Das Café ist <b>nicht</b> groß.",
      "en": "You use „<g>kein</g>“ to negate a noun that has „ein / eine“ before it or no article at all. It is formed like „ein“: <g>kein</g> Tisch, <g>kein</g> Heft, <g>keine</g> Tasche, <g>keine</g> Stühle (plural).<br>Example: Ist da ein Supermarkt? — Nein, da ist <g>kein</g> Supermarkt.<br>„Nicht“, on the other hand, negates verbs and adjectives: Das Café ist <b>nicht</b> groß.",
      "uk": "За допомогою «<g>kein</g>» заперечують іменник, перед яким стоїть «ein / eine» або взагалі немає артикля. Воно змінюється так само, як «ein»: <g>kein</g> Tisch, <g>kein</g> Heft, <g>keine</g> Tasche, <g>keine</g> Stühle (множина).<br>Приклад: Ist da ein Supermarkt? — Nein, da ist <g>kein</g> Supermarkt.<br>А «nicht» заперечує дієслова та прикметники: Das Café ist <b>nicht</b> groß.",
      "ru": "С помощью «<g>kein</g>» отрицают существительное, перед которым стоит «ein / eine» или вообще нет артикля. Оно изменяется так же, как «ein»: <g>kein</g> Tisch, <g>kein</g> Heft, <g>keine</g> Tasche, <g>keine</g> Stühle (множественное число).<br>Пример: Ist da ein Supermarkt? — Nein, da ist <g>kein</g> Supermarkt.<br>А «nicht» отрицает глаголы и прилагательные: Das Café ist <b>nicht</b> groß."
    }
  },
  {
    "id": "imperativ_sie",
    "title": {
      "de": "Der Imperativ (Höflichkeitsform Sie)",
      "en": "The imperative (polite form Sie)",
      "uk": "Наказовий спосіб (ввічлива форма Sie)",
      "ru": "Повелительное наклонение (вежливая форма Sie)"
    },
    "explanation": {
      "de": "Mit dem Imperativ bittet man jemanden, etwas zu tun. Die Höflichkeitsform bildet man aus dem Infinitiv + „Sie“: <g>Öffnen Sie</g> bitte das Fenster! <g>Sprechen Sie</g> bitte langsam!<br>Das Verb steht auf Position 1, danach kommt „Sie“.<br>Bei trennbaren Verben steht die Vorsilbe am Ende: <g>Schreiben Sie</g> die Wörter <g>auf</g>.<br>Mit „bitte“ klingt es freundlicher.",
      "en": "You use the imperative to ask someone to do something. The polite form is made from the infinitive + „Sie“: <g>Öffnen Sie</g> bitte das Fenster! (Please open the window!) <g>Sprechen Sie</g> bitte langsam! (Please speak slowly!)<br>The verb is in position 1, followed by „Sie“.<br>With separable verbs the prefix goes to the end: <g>Schreiben Sie</g> die Wörter <g>auf</g>.<br>Adding „bitte“ makes it sound friendlier.",
      "uk": "Наказовий спосіб використовують, щоб попросити когось щось зробити. Ввічливу форму утворюють з інфінітива + «Sie»: <g>Öffnen Sie</g> bitte das Fenster! (Відчиніть, будь ласка, вікно!) <g>Sprechen Sie</g> bitte langsam! (Говоріть, будь ласка, повільно!)<br>Дієслово стоїть на першому місці, після нього — «Sie».<br>У відокремлюваних дієслів префікс іде в кінець: <g>Schreiben Sie</g> die Wörter <g>auf</g>.<br>Зі словом «bitte» прохання звучить любʼязніше.",
      "ru": "Повелительное наклонение используют, чтобы попросить кого-то что-то сделать. Вежливую форму образуют из инфинитива + «Sie»: <g>Öffnen Sie</g> bitte das Fenster! (Откройте, пожалуйста, окно!) <g>Sprechen Sie</g> bitte langsam! (Говорите, пожалуйста, медленно!)<br>Глагол стоит на первом месте, после него — «Sie».<br>У отделяемых глаголов приставка уходит в конец: <g>Schreiben Sie</g> die Wörter <g>auf</g>.<br>Со словом «bitte» просьба звучит вежливее."
    }
  },
  {
    "id": "possessivartikel_mein_dein",
    "title": {
      "de": "Possessivartikel mein / dein",
      "en": "Possessive articles mein / dein",
      "uk": "Присвійні артиклі mein / dein",
      "ru": "Притяжательные артикли mein / dein"
    },
    "explanation": {
      "de": "Possessivartikel zeigen, wem etwas gehört. Zu „ich“ gehört <g>mein</g>, zu „du“ gehört <g>dein</g>.<br>Sie stehen vor dem Nomen und haben die gleichen Endungen wie „ein“: <g>mein</g> Schlüssel (m.), <g>mein</g> Handy (n.), <g>meine</g> Tasche (f.), <g>meine</g> Bücher (Plural).<br>Beispiel: Ist das <g>dein</g> Schlüssel? — Ja, das ist <g>mein</g> Schlüssel.",
      "en": "Possessive articles show who something belongs to. „Ich“ goes with <g>mein</g> (my), „du“ goes with <g>dein</g> (your).<br>They stand before the noun and have the same endings as „ein“: <g>mein</g> Schlüssel (m.), <g>mein</g> Handy (n.), <g>meine</g> Tasche (f.), <g>meine</g> Bücher (plural).<br>Example: Ist das <g>dein</g> Schlüssel? — Ja, das ist <g>mein</g> Schlüssel.",
      "uk": "Присвійні артиклі показують, кому щось належить. До «ich» належить <g>mein</g> (мій), до «du» — <g>dein</g> (твій).<br>Вони стоять перед іменником і мають ті самі закінчення, що й «ein»: <g>mein</g> Schlüssel (ч. р.), <g>mein</g> Handy (с. р.), <g>meine</g> Tasche (ж. р.), <g>meine</g> Bücher (множина).<br>Приклад: Ist das <g>dein</g> Schlüssel? — Ja, das ist <g>mein</g> Schlüssel.",
      "ru": "Притяжательные артикли показывают, кому что-то принадлежит. К «ich» относится <g>mein</g> (мой), к «du» — <g>dein</g> (твой).<br>Они стоят перед существительным и имеют те же окончания, что и «ein»: <g>mein</g> Schlüssel (м. р.), <g>mein</g> Handy (ср. р.), <g>meine</g> Tasche (ж. р.), <g>meine</g> Bücher (множественное число).<br>Пример: Ist das <g>dein</g> Schlüssel? — Ja, das ist <g>mein</g> Schlüssel."
    }
  },
  {
    "id": "komposita",
    "title": {
      "de": "Zusammengesetzte Nomen (Komposita)",
      "en": "Compound nouns",
      "uk": "Складні іменники (композити)",
      "ru": "Сложные существительные (композиты)"
    },
    "explanation": {
      "de": "Im Deutschen kann man Nomen zusammensetzen: <g>Kaffee</g> + <g>Tasse</g> = die <g>Kaffeetasse</g>.<br>Das <b>letzte Wort</b> bestimmt den Artikel und den Plural: der Käse + das Brötchen = das Käsebrötchen (Plural: die Käsebrötchen).<br>Das erste Wort sagt, um welche Art es geht. Manchmal steht ein Fugen-s dazwischen: der Arbeit<g>s</g>platz.",
      "en": "In German you can join nouns together: <g>Kaffee</g> + <g>Tasse</g> = die <g>Kaffeetasse</g> (coffee cup).<br>The <b>last word</b> determines the article and the plural: der Käse + das Brötchen = das Käsebrötchen (plural: die Käsebrötchen).<br>The first word tells you what kind of thing it is. Sometimes a linking -s stands in between: der Arbeit<g>s</g>platz.",
      "uk": "У німецькій мові іменники можна зʼєднувати: <g>Kaffee</g> + <g>Tasse</g> = die <g>Kaffeetasse</g> (чашка для кави).<br><b>Останнє слово</b> визначає артикль і множину: der Käse + das Brötchen = das Käsebrötchen (множина: die Käsebrötchen).<br>Перше слово вказує на вид предмета. Іноді між ними стоїть сполучне -s: der Arbeit<g>s</g>platz.",
      "ru": "В немецком языке существительные можно соединять: <g>Kaffee</g> + <g>Tasse</g> = die <g>Kaffeetasse</g> (кофейная чашка).<br><b>Последнее слово</b> определяет артикль и множественное число: der Käse + das Brötchen = das Käsebrötchen (множественное число: die Käsebrötchen).<br>Первое слово указывает на вид предмета. Иногда между ними стоит соединительное -s: der Arbeit<g>s</g>platz."
    }
  },
  {
    "id": "modalverb_moechten",
    "title": {
      "de": "Die Verben möchten und arbeiten",
      "en": "The verbs möchten and arbeiten",
      "uk": "Дієслова möchten та arbeiten",
      "ru": "Глаголы möchten и arbeiten"
    },
    "explanation": {
      "de": "„<g>Möchten</g>“ ist die höfliche Form für einen Wunsch: Ich <g>möchte</g> einen Kaffee.<br>Formen: ich <g>möchte</g>, du <g>möchtest</g>, er/sie/es <g>möchte</g>, wir <g>möchten</g>, ihr <g>möchtet</g>, sie/Sie <g>möchten</g>. Bei ich und er/sie/es ist die Form gleich.<br>Steht danach ein zweites Verb, steht es als Infinitiv am Ende: Ich möchte einen Kaffee <g>trinken</g>.<br>Bei „arbeiten“ kommt ein -e- dazu: du arbeit<g>e</g>st, ihr arbeit<g>e</g>t.",
      "en": "„<g>Möchten</g>“ is the polite way to express a wish: Ich <g>möchte</g> einen Kaffee.<br>Forms: ich <g>möchte</g>, du <g>möchtest</g>, er/sie/es <g>möchte</g>, wir <g>möchten</g>, ihr <g>möchtet</g>, sie/Sie <g>möchten</g>. The forms for ich and er/sie/es are identical.<br>If a second verb follows, it stands at the end as an infinitive: Ich möchte einen Kaffee <g>trinken</g>.<br>With „arbeiten“ an -e- is added: du arbeit<g>e</g>st, ihr arbeit<g>e</g>t.",
      "uk": "«<g>Möchten</g>» — ввічлива форма для вираження бажання: Ich <g>möchte</g> einen Kaffee.<br>Форми: ich <g>möchte</g>, du <g>möchtest</g>, er/sie/es <g>möchte</g>, wir <g>möchten</g>, ihr <g>möchtet</g>, sie/Sie <g>möchten</g>. Форми для ich та er/sie/es однакові.<br>Якщо далі стоїть друге дієслово, воно йде в кінець у формі інфінітива: Ich möchte einen Kaffee <g>trinken</g>.<br>У «arbeiten» додається -e-: du arbeit<g>e</g>st, ihr arbeit<g>e</g>t.",
      "ru": "«<g>Möchten</g>» — вежливая форма для выражения желания: Ich <g>möchte</g> einen Kaffee.<br>Формы: ich <g>möchte</g>, du <g>möchtest</g>, er/sie/es <g>möchte</g>, wir <g>möchten</g>, ihr <g>möchtet</g>, sie/Sie <g>möchten</g>. Формы для ich и er/sie/es одинаковые.<br>Если далее стоит второй глагол, он уходит в конец в форме инфинитива: Ich möchte einen Kaffee <g>trinken</g>.<br>У «arbeiten» добавляется -e-: du arbeit<g>e</g>st, ihr arbeit<g>e</g>t."
    }
  },
  {
    "id": "akkusativ_unbestimmter_artikel",
    "title": {
      "de": "Der Akkusativ (unbestimmter Artikel, Singular)",
      "en": "The accusative (indefinite article, singular)",
      "uk": "Знахідний відмінок (неозначений артикль, однина)",
      "ru": "Винительный падеж (неопределённый артикль, единственное число)"
    },
    "explanation": {
      "de": "Nach vielen Verben (haben, möchten, nehmen, kaufen, brauchen) steht das Objekt im <b>Akkusativ</b>. Man fragt: <b>Wen oder was</b>?<br>Nur beim maskulinen Nomen ändert sich der Artikel: <g>ein</g> Kaffee → Ich möchte <g>einen</g> Kaffee. Auch „kein“ ändert sich: <g>keinen</g> Kaffee.<br>Neutrum und Feminin bleiben gleich: Ich nehme <g>ein</g> Brötchen und <g>eine</g> Suppe.",
      "en": "After many verbs (haben, möchten, nehmen, kaufen, brauchen) the object is in the <b>accusative</b>. You ask: <b>whom or what</b>?<br>Only masculine nouns change their article: <g>ein</g> Kaffee → Ich möchte <g>einen</g> Kaffee. „Kein“ changes too: <g>keinen</g> Kaffee.<br>Neuter and feminine stay the same: Ich nehme <g>ein</g> Brötchen und <g>eine</g> Suppe.",
      "uk": "Після багатьох дієслів (haben, möchten, nehmen, kaufen, brauchen) додаток стоїть у <b>знахідному відмінку</b> (Akkusativ). Питання: <b>кого? що?</b><br>Артикль змінюється лише в іменників чоловічого роду: <g>ein</g> Kaffee → Ich möchte <g>einen</g> Kaffee. «Kein» теж змінюється: <g>keinen</g> Kaffee.<br>Середній і жіночий рід не змінюються: Ich nehme <g>ein</g> Brötchen und <g>eine</g> Suppe.",
      "ru": "После многих глаголов (haben, möchten, nehmen, kaufen, brauchen) дополнение стоит в <b>винительном падеже</b> (Akkusativ). Вопрос: <b>кого? что?</b><br>Артикль меняется только у существительных мужского рода: <g>ein</g> Kaffee → Ich möchte <g>einen</g> Kaffee. «Kein» тоже меняется: <g>keinen</g> Kaffee.<br>Средний и женский род не меняются: Ich nehme <g>ein</g> Brötchen und <g>eine</g> Suppe."
    }
  },
  {
    "id": "vokalwechsel_verben",
    "title": {
      "de": "Verben mit Vokalwechsel",
      "en": "Verbs with vowel change",
      "uk": "Дієслова зі зміною голосної",
      "ru": "Глаголы с изменением гласной"
    },
    "explanation": {
      "de": "Manche Verben ändern in der du- und er/sie/es-Form den Vokal: <g>e → i / ie</g> (essen → du <g>isst</g>, sehen → er <g>sieht</g>, sprechen → du <g>sprichst</g>) und <g>a → ä</g> (fahren → du <g>fährst</g>, schlafen → er <g>schläft</g>).<br>Bei ich, wir, ihr und sie/Sie bleibt der Vokal gleich: ich esse, wir essen.<br>Lernen Sie diese Verben mit ihren Formen: lesen (er liest), nehmen (er nimmt), geben (er gibt).",
      "en": "Some verbs change their vowel in the du- and er/sie/es-form: <g>e → i / ie</g> (essen → du <g>isst</g>, sehen → er <g>sieht</g>, sprechen → du <g>sprichst</g>) and <g>a → ä</g> (fahren → du <g>fährst</g>, schlafen → er <g>schläft</g>).<br>With ich, wir, ihr and sie/Sie the vowel stays the same: ich esse, wir essen.<br>Learn these verbs together with their forms: lesen (er liest), nehmen (er nimmt), geben (er gibt).",
      "uk": "Деякі дієслова змінюють голосну у формах du та er/sie/es: <g>e → i / ie</g> (essen → du <g>isst</g>, sehen → er <g>sieht</g>, sprechen → du <g>sprichst</g>) та <g>a → ä</g> (fahren → du <g>fährst</g>, schlafen → er <g>schläft</g>).<br>У формах ich, wir, ihr та sie/Sie голосна не змінюється: ich esse, wir essen.<br>Вивчайте ці дієслова разом з їхніми формами: lesen (er liest), nehmen (er nimmt), geben (er gibt).",
      "ru": "Некоторые глаголы меняют гласную в формах du и er/sie/es: <g>e → i / ie</g> (essen → du <g>isst</g>, sehen → er <g>sieht</g>, sprechen → du <g>sprichst</g>) и <g>a → ä</g> (fahren → du <g>fährst</g>, schlafen → er <g>schläft</g>).<br>В формах ich, wir, ihr и sie/Sie гласная не меняется: ich esse, wir essen.<br>Учите эти глаголы вместе с их формами: lesen (er liest), nehmen (er nimmt), geben (er gibt)."
    }
  },
  {
    "id": "temporale_praepositionen_am_um",
    "title": {
      "de": "Temporale Präpositionen am und um",
      "en": "Time prepositions am and um",
      "uk": "Часові прийменники am та um",
      "ru": "Временные предлоги am и um"
    },
    "explanation": {
      "de": "Mit <g>am</g> nennt man Tage und Tageszeiten: <g>am</g> Montag, <g>am</g> Morgen, <g>am</g> Wochenende. Ausnahme: <g>in der</g> Nacht.<br>Mit <g>um</g> nennt man die genaue Uhrzeit: <g>um</g> 8 Uhr, <g>um</g> halb drei.<br>Frage: <b>Wann</b> kommst du? — <g>Am</g> Freitag <g>um</g> 19 Uhr.",
      "en": "You use <g>am</g> with days and parts of the day: <g>am</g> Montag, <g>am</g> Morgen, <g>am</g> Wochenende. Exception: <g>in der</g> Nacht.<br>You use <g>um</g> for the exact time: <g>um</g> 8 Uhr, <g>um</g> halb drei.<br>Question: <b>Wann</b> kommst du? (When are you coming?) — <g>Am</g> Freitag <g>um</g> 19 Uhr.",
      "uk": "Прийменник <g>am</g> вживають з днями тижня та частинами доби: <g>am</g> Montag, <g>am</g> Morgen, <g>am</g> Wochenende. Виняток: <g>in der</g> Nacht.<br>Прийменник <g>um</g> вживають із точним часом: <g>um</g> 8 Uhr, <g>um</g> halb drei.<br>Питання: <b>Wann</b> kommst du? (Коли ти прийдеш?) — <g>Am</g> Freitag <g>um</g> 19 Uhr.",
      "ru": "Предлог <g>am</g> употребляют с днями недели и частями суток: <g>am</g> Montag, <g>am</g> Morgen, <g>am</g> Wochenende. Исключение: <g>in der</g> Nacht.<br>Предлог <g>um</g> употребляют с точным временем: <g>um</g> 8 Uhr, <g>um</g> halb drei.<br>Вопрос: <b>Wann</b> kommst du? (Когда ты придёшь?) — <g>Am</g> Freitag <g>um</g> 19 Uhr."
    }
  },
  {
    "id": "trennbare_verben",
    "title": {
      "de": "Trennbare Verben",
      "en": "Separable verbs",
      "uk": "Відокремлювані дієслова",
      "ru": "Отделяемые глаголы"
    },
    "explanation": {
      "de": "Manche Verben bestehen aus einer Vorsilbe und einem Stamm: <g>auf</g>stehen, <g>an</g>rufen, <g>ein</g>kaufen, <g>mit</g>kommen. Die Vorsilbe ist betont.<br>Im Hauptsatz steht das konjugierte Verb auf Position 2, die Vorsilbe ganz am Ende: Ich <g>stehe</g> um 7 Uhr <g>auf</g>. Bülent <g>ruft</g> einen Freund <g>an</g>.<br>Im Infinitiv und mit einem Modalverb bleibt das Verb zusammen: Ich muss um 7 Uhr <g>aufstehen</g>.",
      "en": "Some verbs consist of a prefix and a stem: <g>auf</g>stehen, <g>an</g>rufen, <g>ein</g>kaufen, <g>mit</g>kommen. The prefix is stressed.<br>In a main clause the conjugated verb is in position 2 and the prefix goes to the very end: Ich <g>stehe</g> um 7 Uhr <g>auf</g>. Bülent <g>ruft</g> einen Freund <g>an</g>.<br>In the infinitive and with a modal verb the verb stays together: Ich muss um 7 Uhr <g>aufstehen</g>.",
      "uk": "Деякі дієслова складаються з префікса й основи: <g>auf</g>stehen, <g>an</g>rufen, <g>ein</g>kaufen, <g>mit</g>kommen. Наголос падає на префікс.<br>У головному реченні дієслово стоїть на другому місці, а префікс іде в самий кінець: Ich <g>stehe</g> um 7 Uhr <g>auf</g>. Bülent <g>ruft</g> einen Freund <g>an</g>.<br>В інфінітиві та з модальним дієсловом дієслово лишається цілим: Ich muss um 7 Uhr <g>aufstehen</g>.",
      "ru": "Некоторые глаголы состоят из приставки и основы: <g>auf</g>stehen, <g>an</g>rufen, <g>ein</g>kaufen, <g>mit</g>kommen. Ударение падает на приставку.<br>В главном предложении глагол стоит на втором месте, а приставка уходит в самый конец: Ich <g>stehe</g> um 7 Uhr <g>auf</g>. Bülent <g>ruft</g> einen Freund <g>an</g>.<br>В инфинитиве и с модальным глаголом глагол остаётся целым: Ich muss um 7 Uhr <g>aufstehen</g>."
    }
  },
  {
    "id": "praepositionen_von_bis",
    "title": {
      "de": "Zeitspannen: von ... bis",
      "en": "Time spans: von ... bis",
      "uk": "Проміжки часу: von ... bis",
      "ru": "Промежутки времени: von ... bis"
    },
    "explanation": {
      "de": "Mit <g>von ... bis</g> nennt man den Anfang und das Ende einer Zeit: Ich arbeite <g>von</g> Montag <g>bis</g> Freitag. Das Café ist <g>von</g> 8 <g>bis</g> 18 Uhr geöffnet.<br>Fragen: <b>Wie lange</b> arbeitest du? — <g>Von</g> 8 <g>bis</g> 16 Uhr. <b>Wann</b> beginnt der Kurs? — <g>Um</g> 9 Uhr.<br>Mit Tageszeiten sagt man: <g>am</g> Morgen, <g>am</g> Nachmittag, <g>am</g> Abend, aber <g>in der</g> Nacht.",
      "en": "With <g>von ... bis</g> you name the beginning and the end of a period: Ich arbeite <g>von</g> Montag <g>bis</g> Freitag. Das Café ist <g>von</g> 8 <g>bis</g> 18 Uhr geöffnet.<br>Questions: <b>Wie lange</b> arbeitest du? (How long do you work?) — <g>Von</g> 8 <g>bis</g> 16 Uhr. <b>Wann</b> beginnt der Kurs? (When does the course start?) — <g>Um</g> 9 Uhr.<br>With parts of the day you say: <g>am</g> Morgen, <g>am</g> Nachmittag, <g>am</g> Abend, but <g>in der</g> Nacht.",
      "uk": "За допомогою <g>von ... bis</g> називають початок і кінець проміжку часу: Ich arbeite <g>von</g> Montag <g>bis</g> Freitag. Das Café ist <g>von</g> 8 <g>bis</g> 18 Uhr geöffnet.<br>Питання: <b>Wie lange</b> arbeitest du? (Як довго ти працюєш?) — <g>Von</g> 8 <g>bis</g> 16 Uhr. <b>Wann</b> beginnt der Kurs? (Коли починається курс?) — <g>Um</g> 9 Uhr.<br>З частинами доби кажуть: <g>am</g> Morgen, <g>am</g> Nachmittag, <g>am</g> Abend, але <g>in der</g> Nacht.",
      "ru": "С помощью <g>von ... bis</g> называют начало и конец промежутка времени: Ich arbeite <g>von</g> Montag <g>bis</g> Freitag. Das Café ist <g>von</g> 8 <g>bis</g> 18 Uhr geöffnet.<br>Вопросы: <b>Wie lange</b> arbeitest du? (Как долго ты работаешь?) — <g>Von</g> 8 <g>bis</g> 16 Uhr. <b>Wann</b> beginnt der Kurs? (Когда начинается курс?) — <g>Um</g> 9 Uhr.<br>С частями суток говорят: <g>am</g> Morgen, <g>am</g> Nachmittag, <g>am</g> Abend, но <g>in der</g> Nacht."
    }
  },
  {
    "id": "akkusativ_bestimmter_artikel",
    "title": {
      "de": "Der Akkusativ (bestimmter Artikel, Singular)",
      "en": "The accusative (definite article, singular)",
      "uk": "Знахідний відмінок (означений артикль, однина)",
      "ru": "Винительный падеж (определённый артикль, единственное число)"
    },
    "explanation": {
      "de": "Steht ein bestimmtes Objekt im Akkusativ, ändert sich nur der maskuline Artikel: <g>der</g> → <g>den</g>.<br>Nominativ: <g>Der</g> Kaffee ist heiß. — Akkusativ: Ich trinke <g>den</g> Kaffee.<br>Das (neutral) und die (feminin, Plural) bleiben gleich: Ich kaufe <g>das</g> Brot, <g>die</g> Milch und <g>die</g> Äpfel.<br>Auch Possessivartikel ändern sich beim Maskulinum: mein → <g>meinen</g> Bruder.",
      "en": "When a specific object is in the accusative, only the masculine article changes: <g>der</g> → <g>den</g>.<br>Nominative: <g>Der</g> Kaffee ist heiß. — Accusative: Ich trinke <g>den</g> Kaffee.<br>Das (neuter) and die (feminine, plural) stay the same: Ich kaufe <g>das</g> Brot, <g>die</g> Milch und <g>die</g> Äpfel.<br>Possessive articles also change with masculine nouns: mein → <g>meinen</g> Bruder.",
      "uk": "Якщо конкретний додаток стоїть у знахідному відмінку, змінюється лише артикль чоловічого роду: <g>der</g> → <g>den</g>.<br>Називний: <g>Der</g> Kaffee ist heiß. — Знахідний: Ich trinke <g>den</g> Kaffee.<br>Das (середній рід) та die (жіночий рід, множина) не змінюються: Ich kaufe <g>das</g> Brot, <g>die</g> Milch und <g>die</g> Äpfel.<br>Присвійні артиклі також змінюються в чоловічому роді: mein → <g>meinen</g> Bruder.",
      "ru": "Если определённое дополнение стоит в винительном падеже, меняется только артикль мужского рода: <g>der</g> → <g>den</g>.<br>Именительный: <g>Der</g> Kaffee ist heiß. — Винительный: Ich trinke <g>den</g> Kaffee.<br>Das (средний род) и die (женский род, множественное число) не меняются: Ich kaufe <g>das</g> Brot, <g>die</g> Milch und <g>die</g> Äpfel.<br>Притяжательные артикли тоже меняются в мужском роде: mein → <g>meinen</g> Bruder."
    }
  },
  {
    "id": "verben_mogen_nehmen",
    "title": {
      "de": "Die Verben mögen und nehmen",
      "en": "The verbs mögen and nehmen",
      "uk": "Дієслова mögen та nehmen",
      "ru": "Глаголы mögen и nehmen"
    },
    "explanation": {
      "de": "„<g>mögen</g>“ drückt aus, was man gern hat: Ich <g>mag</g> Pizza. Formen: ich <g>mag</g>, du <g>magst</g>, er/sie/es <g>mag</g>, wir <g>mögen</g>, ihr <g>mögt</g>, sie/Sie <g>mögen</g>.<br>„<g>nehmen</g>“ hat einen Vokalwechsel: ich <g>nehme</g>, du <g>nimmst</g>, er/sie/es <g>nimmt</g>, wir <g>nehmen</g>.<br>Beim Einkaufen und im Restaurant sagt man: Ich <g>nehme</g> einen Kaffee, bitte.",
      "en": "„<g>mögen</g>“ expresses what you like: Ich <g>mag</g> Pizza. Forms: ich <g>mag</g>, du <g>magst</g>, er/sie/es <g>mag</g>, wir <g>mögen</g>, ihr <g>mögt</g>, sie/Sie <g>mögen</g>.<br>„<g>nehmen</g>“ has a vowel change: ich <g>nehme</g>, du <g>nimmst</g>, er/sie/es <g>nimmt</g>, wir <g>nehmen</g>.<br>When shopping or in a restaurant you say: Ich <g>nehme</g> einen Kaffee, bitte.",
      "uk": "«<g>mögen</g>» виражає, що людині подобається: Ich <g>mag</g> Pizza. Форми: ich <g>mag</g>, du <g>magst</g>, er/sie/es <g>mag</g>, wir <g>mögen</g>, ihr <g>mögt</g>, sie/Sie <g>mögen</g>.<br>«<g>nehmen</g>» має зміну голосної: ich <g>nehme</g>, du <g>nimmst</g>, er/sie/es <g>nimmt</g>, wir <g>nehmen</g>.<br>Під час покупок і в ресторані кажуть: Ich <g>nehme</g> einen Kaffee, bitte.",
      "ru": "«<g>mögen</g>» выражает, что человеку нравится: Ich <g>mag</g> Pizza. Формы: ich <g>mag</g>, du <g>magst</g>, er/sie/es <g>mag</g>, wir <g>mögen</g>, ihr <g>mögt</g>, sie/Sie <g>mögen</g>.<br>«<g>nehmen</g>» имеет изменение гласной: ich <g>nehme</g>, du <g>nimmst</g>, er/sie/es <g>nimmt</g>, wir <g>nehmen</g>.<br>При покупках и в ресторане говорят: Ich <g>nehme</g> einen Kaffee, bitte."
    }
  },
  {
    "id": "satzposition_inversion",
    "title": {
      "de": "Positionen im Satz (Satzanfang wechseln)",
      "en": "Positions in the sentence (changing the first element)",
      "uk": "Місце слів у реченні (зміна першого елемента)",
      "ru": "Порядок слов в предложении (смена первого элемента)"
    },
    "explanation": {
      "de": "Das Verb steht im Aussagesatz immer auf Position 2. Vor dem Verb steht genau ein Satzteil — das muss nicht das Subjekt sein.<br>Ich <g>nehme</g> heute einen Kaffee. — Heute <g>nehme</g> ich einen Kaffee. — Einen Kaffee <g>nehme</g> ich heute.<br>Steht etwas anderes als das Subjekt auf Position 1, rutscht das Subjekt hinter das Verb.<br>So betont man, was besonders wichtig ist.",
      "en": "In a statement the verb is always in position 2. Exactly one sentence element stands before the verb — it does not have to be the subject.<br>Ich <g>nehme</g> heute einen Kaffee. — Heute <g>nehme</g> ich einen Kaffee. — Einen Kaffee <g>nehme</g> ich heute.<br>If something other than the subject is in position 1, the subject moves behind the verb.<br>This way you emphasise what is especially important.",
      "uk": "У розповідному реченні дієслово завжди стоїть на другому місці. Перед дієсловом стоїть рівно один член речення — це не обовʼязково підмет.<br>Ich <g>nehme</g> heute einen Kaffee. — Heute <g>nehme</g> ich einen Kaffee. — Einen Kaffee <g>nehme</g> ich heute.<br>Якщо на першому місці стоїть не підмет, підмет переходить за дієслово.<br>Так підкреслюють те, що особливо важливе.",
      "ru": "В повествовательном предложении глагол всегда стоит на втором месте. Перед глаголом стоит ровно один член предложения — это не обязательно подлежащее.<br>Ich <g>nehme</g> heute einen Kaffee. — Heute <g>nehme</g> ich einen Kaffee. — Einen Kaffee <g>nehme</g> ich heute.<br>Если на первом месте стоит не подлежащее, подлежащее переходит за глагол.<br>Так подчёркивают то, что особенно важно."
    }
  },
  {
    "id": "adjektive_bewertung",
    "title": {
      "de": "Adjektive zur Bewertung",
      "en": "Adjectives for evaluating",
      "uk": "Прикметники для оцінювання",
      "ru": "Прилагательные для оценки"
    },
    "explanation": {
      "de": "Mit Adjektiven sagt man, wie etwas ist oder wie man etwas findet: Das Essen ist <g>lecker</g>. Die Suppe ist <g>heiß</g>.<br>Nach „sein“ bekommt das Adjektiv keine Endung: Der Kuchen ist <g>süß</g>. Die Tomaten sind <g>frisch</g>.<br>Mit „finden“ nennt man eine Meinung: Ich <g>finde</g> die Pizza <g>super</g>.<br>Das Gegenteil sagt man mit „nicht“ oder mit einem Gegenwort: nicht lecker, heiß ↔ kalt, süß ↔ sauer.",
      "en": "With adjectives you say what something is like or what you think of it: Das Essen ist <g>lecker</g>. Die Suppe ist <g>heiß</g>.<br>After „sein“ the adjective gets no ending: Der Kuchen ist <g>süß</g>. Die Tomaten sind <g>frisch</g>.<br>With „finden“ you give an opinion: Ich <g>finde</g> die Pizza <g>super</g>.<br>You express the opposite with „nicht“ or with an opposite word: nicht lecker, heiß ↔ kalt, süß ↔ sauer.",
      "uk": "За допомогою прикметників кажуть, який предмет або що людина про нього думає: Das Essen ist <g>lecker</g>. Die Suppe ist <g>heiß</g>.<br>Після «sein» прикметник не має закінчення: Der Kuchen ist <g>süß</g>. Die Tomaten sind <g>frisch</g>.<br>За допомогою «finden» висловлюють думку: Ich <g>finde</g> die Pizza <g>super</g>.<br>Протилежне значення передають через «nicht» або слово-антонім: nicht lecker, heiß ↔ kalt, süß ↔ sauer.",
      "ru": "С помощью прилагательных говорят, каков предмет или что человек о нём думает: Das Essen ist <g>lecker</g>. Die Suppe ist <g>heiß</g>.<br>После «sein» прилагательное не имеет окончания: Der Kuchen ist <g>süß</g>. Die Tomaten sind <g>frisch</g>.<br>С помощью «finden» выражают мнение: Ich <g>finde</g> die Pizza <g>super</g>.<br>Противоположное значение передают с помощью «nicht» или слова-антонима: nicht lecker, heiß ↔ kalt, süß ↔ sauer."
    }
  },
  {
    "id": "possessivartikel_singular",
    "title": {
      "de": "Possessivartikel im Singular",
      "en": "Possessive articles (singular)",
      "uk": "Присвійні артиклі (однина)",
      "ru": "Притяжательные артикли (единственное число)"
    },
    "explanation": {
      "de": "Possessivartikel zeigen, wem etwas gehört. Für jede Person im Singular gibt es eine Form: ich → <g>mein</g>, du → <g>dein</g>, er/es → <g>sein</g>, sie → <g>ihr</g>, Sie → <g>Ihr</g>.<br>Sie haben die Endungen von „ein“: <g>mein</g> Vater, <g>meine</g> Mutter, <g>mein</g> Kind, <g>meine</g> Eltern.<br>Beispiel: Das ist Lea. <g>Ihr</g> Bruder heißt Sven. Das ist Tim. <g>Seine</g> Schwester heißt Jana.",
      "en": "Possessive articles show who something belongs to. Each person in the singular has its own form: ich → <g>mein</g>, du → <g>dein</g>, er/es → <g>sein</g>, sie → <g>ihr</g>, Sie → <g>Ihr</g>.<br>They take the endings of „ein“: <g>mein</g> Vater, <g>meine</g> Mutter, <g>mein</g> Kind, <g>meine</g> Eltern.<br>Example: Das ist Lea. <g>Ihr</g> Bruder heißt Sven. Das ist Tim. <g>Seine</g> Schwester heißt Jana.",
      "uk": "Присвійні артиклі показують, кому щось належить. Для кожної особи в однині є своя форма: ich → <g>mein</g>, du → <g>dein</g>, er/es → <g>sein</g>, sie → <g>ihr</g>, Sie → <g>Ihr</g>.<br>Вони мають закінчення «ein»: <g>mein</g> Vater, <g>meine</g> Mutter, <g>mein</g> Kind, <g>meine</g> Eltern.<br>Приклад: Das ist Lea. <g>Ihr</g> Bruder heißt Sven. Das ist Tim. <g>Seine</g> Schwester heißt Jana.",
      "ru": "Притяжательные артикли показывают, кому что-то принадлежит. Для каждого лица в единственном числе есть своя форма: ich → <g>mein</g>, du → <g>dein</g>, er/es → <g>sein</g>, sie → <g>ihr</g>, Sie → <g>Ihr</g>.<br>Они имеют окончания «ein»: <g>mein</g> Vater, <g>meine</g> Mutter, <g>mein</g> Kind, <g>meine</g> Eltern.<br>Пример: Das ist Lea. <g>Ihr</g> Bruder heißt Sven. Das ist Tim. <g>Seine</g> Schwester heißt Jana."
    }
  },
  {
    "id": "praeteritum_sein_haben",
    "title": {
      "de": "Präteritum von sein und haben",
      "en": "Simple past of sein and haben",
      "uk": "Претерит дієслів sein та haben",
      "ru": "Претерит глаголов sein и haben"
    },
    "explanation": {
      "de": "Über die Vergangenheit spricht man bei „sein“ und „haben“ meistens im Präteritum.<br>sein: ich <g>war</g>, du <g>warst</g>, er/sie/es <g>war</g>, wir <g>waren</g>, ihr <g>wart</g>, sie/Sie <g>waren</g>.<br>haben: ich <g>hatte</g>, du <g>hattest</g>, er/sie/es <g>hatte</g>, wir <g>hatten</g>, ihr <g>hattet</g>, sie/Sie <g>hatten</g>.<br>Beispiel: Gestern <g>war</g> ich müde. Ich <g>hatte</g> keine Zeit.",
      "en": "When talking about the past, „sein“ and „haben“ are mostly used in the simple past (Präteritum).<br>sein: ich <g>war</g>, du <g>warst</g>, er/sie/es <g>war</g>, wir <g>waren</g>, ihr <g>wart</g>, sie/Sie <g>waren</g>.<br>haben: ich <g>hatte</g>, du <g>hattest</g>, er/sie/es <g>hatte</g>, wir <g>hatten</g>, ihr <g>hattet</g>, sie/Sie <g>hatten</g>.<br>Example: Gestern <g>war</g> ich müde (Yesterday I was tired). Ich <g>hatte</g> keine Zeit (I had no time).",
      "uk": "Про минуле з дієсловами «sein» та «haben» здебільшого говорять у претериті (Präteritum).<br>sein: ich <g>war</g>, du <g>warst</g>, er/sie/es <g>war</g>, wir <g>waren</g>, ihr <g>wart</g>, sie/Sie <g>waren</g>.<br>haben: ich <g>hatte</g>, du <g>hattest</g>, er/sie/es <g>hatte</g>, wir <g>hatten</g>, ihr <g>hattet</g>, sie/Sie <g>hatten</g>.<br>Приклад: Gestern <g>war</g> ich müde (Учора я був втомлений). Ich <g>hatte</g> keine Zeit (У мене не було часу).",
      "ru": "О прошедшем с глаголами «sein» и «haben» чаще всего говорят в претерите (Präteritum).<br>sein: ich <g>war</g>, du <g>warst</g>, er/sie/es <g>war</g>, wir <g>waren</g>, ihr <g>wart</g>, sie/Sie <g>waren</g>.<br>haben: ich <g>hatte</g>, du <g>hattest</g>, er/sie/es <g>hatte</g>, wir <g>hatten</g>, ihr <g>hattet</g>, sie/Sie <g>hatten</g>.<br>Пример: Gestern <g>war</g> ich müde (Вчера я был уставшим). Ich <g>hatte</g> keine Zeit (У меня не было времени)."
    }
  },
  {
    "id": "modalverben_koennen_muessen",
    "title": {
      "de": "Modalverben können und müssen",
      "en": "The modal verbs können and müssen",
      "uk": "Модальні дієслова können та müssen",
      "ru": "Модальные глаголы können и müssen"
    },
    "explanation": {
      "de": "„<g>Können</g>“ drückt eine Möglichkeit oder Fähigkeit aus, „<g>müssen</g>“ eine Pflicht.<br>können: ich <g>kann</g>, du <g>kannst</g>, er/sie/es <g>kann</g>, wir <g>können</g>, ihr <g>könnt</g>, sie/Sie <g>können</g>.<br>müssen: ich <g>muss</g>, du <g>musst</g>, er/sie/es <g>muss</g>, wir <g>müssen</g>, ihr <g>müsst</g>, sie/Sie <g>müssen</g>.<br>Beispiele: Ich <g>kann</g> gut kochen. Ich <g>muss</g> heute arbeiten. Bei ich und er/sie/es hat das Modalverb keine Endung.",
      "en": "„<g>Können</g>“ expresses possibility or ability, „<g>müssen</g>“ expresses obligation.<br>können: ich <g>kann</g>, du <g>kannst</g>, er/sie/es <g>kann</g>, wir <g>können</g>, ihr <g>könnt</g>, sie/Sie <g>können</g>.<br>müssen: ich <g>muss</g>, du <g>musst</g>, er/sie/es <g>muss</g>, wir <g>müssen</g>, ihr <g>müsst</g>, sie/Sie <g>müssen</g>.<br>Examples: Ich <g>kann</g> gut kochen (I can cook well). Ich <g>muss</g> heute arbeiten (I have to work today). With ich and er/sie/es the modal verb has no ending.",
      "uk": "«<g>Können</g>» виражає можливість чи вміння, «<g>müssen</g>» — обовʼязок.<br>können: ich <g>kann</g>, du <g>kannst</g>, er/sie/es <g>kann</g>, wir <g>können</g>, ihr <g>könnt</g>, sie/Sie <g>können</g>.<br>müssen: ich <g>muss</g>, du <g>musst</g>, er/sie/es <g>muss</g>, wir <g>müssen</g>, ihr <g>müsst</g>, sie/Sie <g>müssen</g>.<br>Приклади: Ich <g>kann</g> gut kochen (Я добре вмію готувати). Ich <g>muss</g> heute arbeiten (Мені сьогодні треба працювати). У формах ich та er/sie/es модальне дієслово не має закінчення.",
      "ru": "«<g>Können</g>» выражает возможность или умение, «<g>müssen</g>» — обязанность.<br>können: ich <g>kann</g>, du <g>kannst</g>, er/sie/es <g>kann</g>, wir <g>können</g>, ihr <g>könnt</g>, sie/Sie <g>können</g>.<br>müssen: ich <g>muss</g>, du <g>musst</g>, er/sie/es <g>muss</g>, wir <g>müssen</g>, ihr <g>müsst</g>, sie/Sie <g>müssen</g>.<br>Примеры: Ich <g>kann</g> gut kochen (Я хорошо умею готовить). Ich <g>muss</g> heute arbeiten (Мне сегодня нужно работать). В формах ich и er/sie/es модальный глагол не имеет окончания."
    }
  },
  {
    "id": "satzklammer_modalverben",
    "title": {
      "de": "Satzklammer mit Modalverben",
      "en": "Sentence frame with modal verbs",
      "uk": "Рамкова конструкція з модальними дієсловами",
      "ru": "Рамочная конструкция с модальными глаголами"
    },
    "explanation": {
      "de": "Mit einem Modalverb entsteht eine Satzklammer: Das Modalverb steht auf <b>Position 2</b>, der Infinitiv ganz am <b>Satzende</b>.<br>Ich <g>kann</g> Samuel vom Kindergarten <g>abholen</g>. Wir <g>müssen</g> noch viel <g>vorbereiten</g>.<br>Trennbare Verben bleiben im Infinitiv zusammen: Ich <g>muss</g> früh <g>aufstehen</g>.<br>In Ja/Nein-Fragen steht das Modalverb auf Position 1: <g>Kannst</g> du mir <g>helfen</g>?",
      "en": "A modal verb creates a sentence frame: the modal verb is in <b>position 2</b> and the infinitive stands at the very <b>end of the sentence</b>.<br>Ich <g>kann</g> Samuel vom Kindergarten <g>abholen</g>. Wir <g>müssen</g> noch viel <g>vorbereiten</g>.<br>Separable verbs stay together in the infinitive: Ich <g>muss</g> früh <g>aufstehen</g>.<br>In yes/no questions the modal verb is in position 1: <g>Kannst</g> du mir <g>helfen</g>?",
      "uk": "З модальним дієсловом утворюється рамкова конструкція: модальне дієслово стоїть на <b>другому місці</b>, а інфінітив — у самому <b>кінці речення</b>.<br>Ich <g>kann</g> Samuel vom Kindergarten <g>abholen</g>. Wir <g>müssen</g> noch viel <g>vorbereiten</g>.<br>Відокремлювані дієслова в інфінітиві лишаються цілими: Ich <g>muss</g> früh <g>aufstehen</g>.<br>У питаннях «так/ні» модальне дієслово стоїть на першому місці: <g>Kannst</g> du mir <g>helfen</g>?",
      "ru": "С модальным глаголом образуется рамочная конструкция: модальный глагол стоит на <b>втором месте</b>, а инфинитив — в самом <b>конце предложения</b>.<br>Ich <g>kann</g> Samuel vom Kindergarten <g>abholen</g>. Wir <g>müssen</g> noch viel <g>vorbereiten</g>.<br>Отделяемые глаголы в инфинитиве остаются целыми: Ich <g>muss</g> früh <g>aufstehen</g>.<br>В вопросах «да/нет» модальный глагол стоит на первом месте: <g>Kannst</g> du mir <g>helfen</g>?"
    }
  },
  {
    "id": "es_gibt_akkusativ",
    "title": {
      "de": "es gibt + Akkusativ",
      "en": "es gibt + accusative",
      "uk": "es gibt + знахідний відмінок",
      "ru": "es gibt + винительный падеж"
    },
    "explanation": {
      "de": "Mit „<g>es gibt</g>“ sagt man, was es an einem Ort gibt. Danach steht immer der <b>Akkusativ</b>: Es gibt <g>einen</g> Flur, <g>ein</g> Sofa und <g>eine</g> Küche.<br>Auch bei mehreren Dingen bleibt das Verb gleich: Es gibt zwei Zimmer. Man sagt nie „es geben“.<br>Frage: Gibt es hier <g>einen</g> Aufzug? — Nein, es gibt <g>keinen</g> Aufzug.",
      "en": "„<g>Es gibt</g>“ says what exists in a place. It is always followed by the <b>accusative</b>: Es gibt <g>einen</g> Flur, <g>ein</g> Sofa und <g>eine</g> Küche.<br>The verb stays the same even with several things: Es gibt zwei Zimmer. You never say „es geben“.<br>Question: Gibt es hier <g>einen</g> Aufzug? — Nein, es gibt <g>keinen</g> Aufzug.",
      "uk": "За допомогою «<g>es gibt</g>» кажуть, що є в певному місці. Після цього виразу завжди стоїть <b>знахідний відмінок</b>: Es gibt <g>einen</g> Flur, <g>ein</g> Sofa und <g>eine</g> Küche.<br>Навіть коли предметів кілька, дієслово не змінюється: Es gibt zwei Zimmer. Ніколи не кажуть «es geben».<br>Питання: Gibt es hier <g>einen</g> Aufzug? — Nein, es gibt <g>keinen</g> Aufzug.",
      "ru": "С помощью «<g>es gibt</g>» говорят, что имеется в каком-то месте. После этого выражения всегда стоит <b>винительный падеж</b>: Es gibt <g>einen</g> Flur, <g>ein</g> Sofa und <g>eine</g> Küche.<br>Даже когда предметов несколько, глагол не меняется: Es gibt zwei Zimmer. Никогда не говорят «es geben».<br>Вопрос: Gibt es hier <g>einen</g> Aufzug? — Nein, es gibt <g>keinen</g> Aufzug."
    }
  },
  {
    "id": "possessivartikel_plural",
    "title": {
      "de": "Possessivartikel unser, euer, ihr, Ihr",
      "en": "Possessive articles unser, euer, ihr, Ihr",
      "uk": "Присвійні артиклі unser, euer, ihr, Ihr",
      "ru": "Притяжательные артикли unser, euer, ihr, Ihr"
    },
    "explanation": {
      "de": "Für „wir“, „ihr“ und „sie“ (Plural) gibt es diese Possessivartikel: wir → <g>unser</g>, ihr → <g>euer</g>, sie → <g>ihr</g>, Sie (höflich) → <g>Ihr</g>.<br>Sie haben die Endungen von „ein“: <g>unser</g> Balkon, <g>unsere</g> Küche, <g>unser</g> Bad, <g>unsere</g> Zimmer.<br>Bei „euer“ fällt vor einer Endung das zweite -e- weg: <g>eure</g> Wohnung.<br>Beispiel: <g>Unsere</g> Wohnung ist groß. Wie ist <g>eure</g> Wohnung?",
      "en": "For „wir“, „ihr“ and „sie“ (plural) there are these possessive articles: wir → <g>unser</g>, ihr → <g>euer</g>, sie → <g>ihr</g>, Sie (polite) → <g>Ihr</g>.<br>They take the endings of „ein“: <g>unser</g> Balkon, <g>unsere</g> Küche, <g>unser</g> Bad, <g>unsere</g> Zimmer.<br>With „euer“ the second -e- drops before an ending: <g>eure</g> Wohnung.<br>Example: <g>Unsere</g> Wohnung ist groß. Wie ist <g>eure</g> Wohnung?",
      "uk": "Для «wir», «ihr» та «sie» (множина) є такі присвійні артиклі: wir → <g>unser</g>, ihr → <g>euer</g>, sie → <g>ihr</g>, Sie (ввічливе) → <g>Ihr</g>.<br>Вони мають закінчення «ein»: <g>unser</g> Balkon, <g>unsere</g> Küche, <g>unser</g> Bad, <g>unsere</g> Zimmer.<br>У «euer» перед закінченням випадає друге -e-: <g>eure</g> Wohnung.<br>Приклад: <g>Unsere</g> Wohnung ist groß. Wie ist <g>eure</g> Wohnung?",
      "ru": "Для «wir», «ihr» и «sie» (множественное число) есть такие притяжательные артикли: wir → <g>unser</g>, ihr → <g>euer</g>, sie → <g>ihr</g>, Sie (вежливое) → <g>Ihr</g>.<br>Они имеют окончания «ein»: <g>unser</g> Balkon, <g>unsere</g> Küche, <g>unser</g> Bad, <g>unsere</g> Zimmer.<br>У «euer» перед окончанием выпадает второе -e-: <g>eure</g> Wohnung.<br>Пример: <g>Unsere</g> Wohnung ist groß. Wie ist <g>eure</g> Wohnung?"
    }
  },
  {
    "id": "modalverb_wollen",
    "title": {
      "de": "Das Modalverb wollen",
      "en": "The modal verb wollen",
      "uk": "Модальне дієслово wollen",
      "ru": "Модальный глагол wollen"
    },
    "explanation": {
      "de": "„<g>Wollen</g>“ drückt einen Wunsch oder eine Absicht aus: Ich <g>will</g> eine neue Wohnung.<br>Formen: ich <g>will</g>, du <g>willst</g>, er/sie/es <g>will</g>, wir <g>wollen</g>, ihr <g>wollt</g>, sie/Sie <g>wollen</g>.<br>„<g>Möchten</g>“ klingt höflicher: Ich <g>möchte</g> im Erdgeschoss wohnen.<br>Das zweite Verb steht als Infinitiv am Ende: Die Kinder <g>wollen</g> im Garten <g>spielen</g>.",
      "en": "„<g>Wollen</g>“ expresses a wish or an intention: Ich <g>will</g> eine neue Wohnung.<br>Forms: ich <g>will</g>, du <g>willst</g>, er/sie/es <g>will</g>, wir <g>wollen</g>, ihr <g>wollt</g>, sie/Sie <g>wollen</g>.<br>„<g>Möchten</g>“ sounds more polite: Ich <g>möchte</g> im Erdgeschoss wohnen.<br>The second verb stands at the end as an infinitive: Die Kinder <g>wollen</g> im Garten <g>spielen</g>.",
      "uk": "«<g>Wollen</g>» виражає бажання чи намір: Ich <g>will</g> eine neue Wohnung.<br>Форми: ich <g>will</g>, du <g>willst</g>, er/sie/es <g>will</g>, wir <g>wollen</g>, ihr <g>wollt</g>, sie/Sie <g>wollen</g>.<br>«<g>Möchten</g>» звучить ввічливіше: Ich <g>möchte</g> im Erdgeschoss wohnen.<br>Друге дієслово стоїть у кінці в інфінітиві: Die Kinder <g>wollen</g> im Garten <g>spielen</g>.",
      "ru": "«<g>Wollen</g>» выражает желание или намерение: Ich <g>will</g> eine neue Wohnung.<br>Формы: ich <g>will</g>, du <g>willst</g>, er/sie/es <g>will</g>, wir <g>wollen</g>, ihr <g>wollt</g>, sie/Sie <g>wollen</g>.<br>«<g>Möchten</g>» звучит вежливее: Ich <g>möchte</g> im Erdgeschoss wohnen.<br>Второй глагол стоит в конце в инфинитиве: Die Kinder <g>wollen</g> im Garten <g>spielen</g>."
    }
  },
  {
    "id": "modalverb_duerfen",
    "title": {
      "de": "Das Modalverb dürfen",
      "en": "The modal verb dürfen",
      "uk": "Модальне дієслово dürfen",
      "ru": "Модальный глагол dürfen"
    },
    "explanation": {
      "de": "„<g>Dürfen</g>“ drückt eine Erlaubnis aus, „<g>nicht dürfen</g>“ ein Verbot: Man <g>darf</g> hier parken. Man <g>darf</g> hier <b>nicht</b> rauchen.<br>Formen: ich <g>darf</g>, du <g>darfst</g>, er/sie/es <g>darf</g>, wir <g>dürfen</g>, ihr <g>dürft</g>, sie/Sie <g>dürfen</g>.<br>Vergleichen Sie: „<g>müssen</g>“ = Pflicht (Ich muss leise sein), „<g>dürfen</g>“ = Erlaubnis (Ich darf Musik hören).<br>Das zweite Verb steht als Infinitiv am Ende.",
      "en": "„<g>Dürfen</g>“ expresses permission, „<g>nicht dürfen</g>“ a prohibition: Man <g>darf</g> hier parken. Man <g>darf</g> hier <b>nicht</b> rauchen.<br>Forms: ich <g>darf</g>, du <g>darfst</g>, er/sie/es <g>darf</g>, wir <g>dürfen</g>, ihr <g>dürft</g>, sie/Sie <g>dürfen</g>.<br>Compare: „<g>müssen</g>“ = obligation (Ich muss leise sein), „<g>dürfen</g>“ = permission (Ich darf Musik hören).<br>The second verb stands at the end as an infinitive.",
      "uk": "«<g>Dürfen</g>» виражає дозвіл, «<g>nicht dürfen</g>» — заборону: Man <g>darf</g> hier parken. Man <g>darf</g> hier <b>nicht</b> rauchen.<br>Форми: ich <g>darf</g>, du <g>darfst</g>, er/sie/es <g>darf</g>, wir <g>dürfen</g>, ihr <g>dürft</g>, sie/Sie <g>dürfen</g>.<br>Порівняйте: «<g>müssen</g>» = обовʼязок (Ich muss leise sein), «<g>dürfen</g>» = дозвіл (Ich darf Musik hören).<br>Друге дієслово стоїть у кінці в інфінітиві.",
      "ru": "«<g>Dürfen</g>» выражает разрешение, «<g>nicht dürfen</g>» — запрет: Man <g>darf</g> hier parken. Man <g>darf</g> hier <b>nicht</b> rauchen.<br>Формы: ich <g>darf</g>, du <g>darfst</g>, er/sie/es <g>darf</g>, wir <g>dürfen</g>, ihr <g>dürft</g>, sie/Sie <g>dürfen</g>.<br>Сравните: «<g>müssen</g>» = обязанность (Ich muss leise sein), «<g>dürfen</g>» = разрешение (Ich darf Musik hören).<br>Второй глагол стоит в конце в инфинитиве."
    }
  },
  {
    "id": "personalpronomen_nom_akk",
    "title": {
      "de": "Personalpronomen im Nominativ und Akkusativ",
      "en": "Personal pronouns in the nominative and accusative",
      "uk": "Особові займенники в називному та знахідному відмінках",
      "ru": "Личные местоимения в именительном и винительном падежах"
    },
    "explanation": {
      "de": "Im Akkusativ ändern sich die Personalpronomen: ich → <g>mich</g>, du → <g>dich</g>, er → <g>ihn</g>, es → <g>es</g>, sie → <g>sie</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>sie</g>, Sie → <g>Sie</g>.<br>Beispiel: Ich sehe <g>ihn</g>. Kennst du <g>sie</g>? Ich rufe <g>dich</g> an.<br>Man benutzt sie, um Wiederholungen zu vermeiden: Der Film ist gut. Ich mag <g>ihn</g>.",
      "en": "In the accusative the personal pronouns change: ich → <g>mich</g>, du → <g>dich</g>, er → <g>ihn</g>, es → <g>es</g>, sie → <g>sie</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>sie</g>, Sie → <g>Sie</g>.<br>Example: Ich sehe <g>ihn</g>. Kennst du <g>sie</g>? Ich rufe <g>dich</g> an.<br>You use them to avoid repetition: Der Film ist gut. Ich mag <g>ihn</g>.",
      "uk": "У знахідному відмінку особові займенники змінюються: ich → <g>mich</g>, du → <g>dich</g>, er → <g>ihn</g>, es → <g>es</g>, sie → <g>sie</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>sie</g>, Sie → <g>Sie</g>.<br>Приклад: Ich sehe <g>ihn</g>. Kennst du <g>sie</g>? Ich rufe <g>dich</g> an.<br>Їх вживають, щоб уникнути повторів: Der Film ist gut. Ich mag <g>ihn</g>.",
      "ru": "В винительном падеже личные местоимения меняются: ich → <g>mich</g>, du → <g>dich</g>, er → <g>ihn</g>, es → <g>es</g>, sie → <g>sie</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>sie</g>, Sie → <g>Sie</g>.<br>Пример: Ich sehe <g>ihn</g>. Kennst du <g>sie</g>? Ich rufe <g>dich</g> an.<br>Их используют, чтобы избежать повторов: Der Film ist gut. Ich mag <g>ihn</g>."
    }
  },
  {
    "id": "possessivartikel_akkusativ",
    "title": {
      "de": "Possessivartikel im Akkusativ",
      "en": "Possessive articles in the accusative",
      "uk": "Присвійні артиклі у знахідному відмінку",
      "ru": "Притяжательные артикли в винительном падеже"
    },
    "explanation": {
      "de": "Possessivartikel ändern sich im Akkusativ nur beim <b>Maskulinum</b>: mein → <g>meinen</g>, dein → <g>deinen</g>, sein → <g>seinen</g>, unser → <g>unseren</g>.<br>Neutrum, Feminin und Plural bleiben gleich: Ich besuche <g>meinen</g> Freund, <g>mein</g> Kind, <g>meine</g> Oma und <g>meine</g> Eltern.<br>Frage: <b>Wen</b> besuchst du? — Ich besuche <g>meinen</g> Bruder.",
      "en": "In the accusative, possessive articles change only with <b>masculine</b> nouns: mein → <g>meinen</g>, dein → <g>deinen</g>, sein → <g>seinen</g>, unser → <g>unseren</g>.<br>Neuter, feminine and plural stay the same: Ich besuche <g>meinen</g> Freund, <g>mein</g> Kind, <g>meine</g> Oma und <g>meine</g> Eltern.<br>Question: <b>Wen</b> besuchst du? (Whom are you visiting?) — Ich besuche <g>meinen</g> Bruder.",
      "uk": "У знахідному відмінку присвійні артиклі змінюються лише в <b>чоловічому роді</b>: mein → <g>meinen</g>, dein → <g>deinen</g>, sein → <g>seinen</g>, unser → <g>unseren</g>.<br>Середній, жіночий рід і множина не змінюються: Ich besuche <g>meinen</g> Freund, <g>mein</g> Kind, <g>meine</g> Oma und <g>meine</g> Eltern.<br>Питання: <b>Wen</b> besuchst du? (Кого ти відвідуєш?) — Ich besuche <g>meinen</g> Bruder.",
      "ru": "В винительном падеже притяжательные артикли меняются только в <b>мужском роде</b>: mein → <g>meinen</g>, dein → <g>deinen</g>, sein → <g>seinen</g>, unser → <g>unseren</g>.<br>Средний, женский род и множественное число не меняются: Ich besuche <g>meinen</g> Freund, <g>mein</g> Kind, <g>meine</g> Oma und <g>meine</g> Eltern.<br>Вопрос: <b>Wen</b> besuchst du? (Кого ты навещаешь?) — Ich besuche <g>meinen</g> Bruder."
    }
  },
  {
    "id": "wohin_in_akkusativ",
    "title": {
      "de": "Wohin? — in + Akkusativ",
      "en": "Wohin? (where to) — in + accusative",
      "uk": "Wohin? (куди) — in + знахідний відмінок",
      "ru": "Wohin? (куда) — in + винительный падеж"
    },
    "explanation": {
      "de": "Mit <b>Wohin</b>? fragt man nach einer Richtung oder einem Ziel: <b>Wohin</b> gehst du? — Ich gehe <g>ins</g> Kino.<br>Die Präposition „in“ steht dann mit dem <b>Akkusativ</b>: in <g>den</g> Park (m.), in <g>das</g> Kino = <g>ins</g> Kino (n.), in <g>die</g> Stadt (f.), in <g>die</g> Schule.<br>Nur beim Maskulinum ändert sich der Artikel: der Park → in <g>den</g> Park.<br>Bei Städten und Ländern sagt man „nach“: nach Berlin.",
      "en": "You ask <b>Wohin</b>? to find out a direction or destination: <b>Wohin</b> gehst du? — Ich gehe <g>ins</g> Kino.<br>The preposition „in“ is then used with the <b>accusative</b>: in <g>den</g> Park (m.), in <g>das</g> Kino = <g>ins</g> Kino (n.), in <g>die</g> Stadt (f.), in <g>die</g> Schule.<br>Only the masculine article changes: der Park → in <g>den</g> Park.<br>For cities and countries you say „nach“: nach Berlin.",
      "uk": "За допомогою <b>Wohin</b>? питають про напрямок або мету: <b>Wohin</b> gehst du? — Ich gehe <g>ins</g> Kino.<br>Прийменник «in» тоді вживається зі <b>знахідним відмінком</b>: in <g>den</g> Park (ч. р.), in <g>das</g> Kino = <g>ins</g> Kino (с. р.), in <g>die</g> Stadt (ж. р.), in <g>die</g> Schule.<br>Змінюється лише артикль чоловічого роду: der Park → in <g>den</g> Park.<br>З містами й країнами кажуть «nach»: nach Berlin.",
      "ru": "С помощью <b>Wohin</b>? спрашивают о направлении или цели: <b>Wohin</b> gehst du? — Ich gehe <g>ins</g> Kino.<br>Предлог «in» тогда употребляется с <b>винительным падежом</b>: in <g>den</g> Park (м. р.), in <g>das</g> Kino = <g>ins</g> Kino (ср. р.), in <g>die</g> Stadt (ж. р.), in <g>die</g> Schule.<br>Меняется только артикль мужского рода: der Park → in <g>den</g> Park.<br>С городами и странами говорят «nach»: nach Berlin."
    }
  },
  {
    "id": "perfekt_haben",
    "title": {
      "de": "Perfekt mit haben und Partizip II",
      "en": "Present perfect with haben and past participle",
      "uk": "Перфект з haben і Partizip II",
      "ru": "Перфект с haben и Partizip II"
    },
    "explanation": {
      "de": "Das Perfekt beschreibt, was in der Vergangenheit passiert ist. Es besteht aus „haben“ und dem <b>Partizip II</b>: Ich <g>habe</g> Fußball <g>gespielt</g>.<br>Regelmäßige Verben: <g>ge</g> + Stamm + <g>t</g>: spielen → <g>gespielt</g>, machen → <g>gemacht</g>, kaufen → <g>gekauft</g>.<br>„haben“ steht auf Position 2, das Partizip II ganz am Ende: Gestern <g>habe</g> ich Musik <g>gehört</g>.<br>Die meisten Verben bilden das Perfekt mit „haben“.",
      "en": "The perfect tense describes what happened in the past. It consists of „haben“ and the <b>past participle</b> (Partizip II): Ich <g>habe</g> Fußball <g>gespielt</g>.<br>Regular verbs: <g>ge</g> + stem + <g>t</g>: spielen → <g>gespielt</g>, machen → <g>gemacht</g>, kaufen → <g>gekauft</g>.<br>„Haben“ is in position 2, the participle at the very end: Gestern <g>habe</g> ich Musik <g>gehört</g>.<br>Most verbs form the perfect with „haben“.",
      "uk": "Перфект описує те, що сталося в минулому. Він складається з «haben» та <b>Partizip II</b>: Ich <g>habe</g> Fußball <g>gespielt</g>.<br>Правильні дієслова: <g>ge</g> + основа + <g>t</g>: spielen → <g>gespielt</g>, machen → <g>gemacht</g>, kaufen → <g>gekauft</g>.<br>«Haben» стоїть на другому місці, Partizip II — у самому кінці: Gestern <g>habe</g> ich Musik <g>gehört</g>.<br>Більшість дієслів утворює перфект із «haben».",
      "ru": "Перфект описывает то, что произошло в прошлом. Он состоит из «haben» и <b>Partizip II</b>: Ich <g>habe</g> Fußball <g>gespielt</g>.<br>Правильные глаголы: <g>ge</g> + основа + <g>t</g>: spielen → <g>gespielt</g>, machen → <g>gemacht</g>, kaufen → <g>gekauft</g>.<br>«Haben» стоит на втором месте, Partizip II — в самом конце: Gestern <g>habe</g> ich Musik <g>gehört</g>.<br>Большинство глаголов образует перфект с «haben»."
    }
  },
  {
    "id": "perfekt_sein",
    "title": {
      "de": "Perfekt mit sein",
      "en": "Present perfect with sein",
      "uk": "Перфект із sein",
      "ru": "Перфект с sein"
    },
    "explanation": {
      "de": "Verben der Bewegung und der Zustandsänderung bilden das Perfekt mit „<g>sein</g>“: gehen, fahren, kommen, aufstehen, einschlafen.<br>Ich <g>bin</g> nach Köln <g>gefahren</g>. Er <g>ist</g> nach Hause <g>gegangen</g>.<br>Auch „sein“ und „bleiben“ bilden das Perfekt mit „sein“: Ich <g>bin</g> zu Hause <g>geblieben</g>. Ich <g>bin</g> müde <g>gewesen</g>.<br>Diese Partizipien sind oft unregelmäßig — lernen Sie sie zusammen mit dem Verb.",
      "en": "Verbs of movement and change of state form the perfect with „<g>sein</g>“: gehen, fahren, kommen, aufstehen, einschlafen.<br>Ich <g>bin</g> nach Köln <g>gefahren</g>. Er <g>ist</g> nach Hause <g>gegangen</g>.<br>„Sein“ and „bleiben“ also form the perfect with „sein“: Ich <g>bin</g> zu Hause <g>geblieben</g>. Ich <g>bin</g> müde <g>gewesen</g>.<br>These participles are often irregular — learn them together with the verb.",
      "uk": "Дієслова руху та зміни стану утворюють перфект із «<g>sein</g>»: gehen, fahren, kommen, aufstehen, einschlafen.<br>Ich <g>bin</g> nach Köln <g>gefahren</g>. Er <g>ist</g> nach Hause <g>gegangen</g>.<br>«Sein» та «bleiben» також утворюють перфект із «sein»: Ich <g>bin</g> zu Hause <g>geblieben</g>. Ich <g>bin</g> müde <g>gewesen</g>.<br>Ці дієприкметники часто неправильні — вивчайте їх разом з дієсловом.",
      "ru": "Глаголы движения и изменения состояния образуют перфект с «<g>sein</g>»: gehen, fahren, kommen, aufstehen, einschlafen.<br>Ich <g>bin</g> nach Köln <g>gefahren</g>. Er <g>ist</g> nach Hause <g>gegangen</g>.<br>«Sein» и «bleiben» тоже образуют перфект с «sein»: Ich <g>bin</g> zu Hause <g>geblieben</g>. Ich <g>bin</g> müde <g>gewesen</g>.<br>Эти причастия часто неправильные — учите их вместе с глаголом."
    }
  },
  {
    "id": "perfekt_trennbare_verben",
    "title": {
      "de": "Perfekt bei trennbaren Verben",
      "en": "Perfect tense with separable verbs",
      "uk": "Перфект відокремлюваних дієслів",
      "ru": "Перфект отделяемых глаголов"
    },
    "explanation": {
      "de": "Bei trennbaren Verben steht im Partizip II das „ge“ <b>zwischen</b> Vorsilbe und Stamm: <g>auf</g>stehen → <g>aufgestanden</g>, <g>ein</g>kaufen → <g>eingekauft</g>, <g>an</g>rufen → <g>angerufen</g>.<br>Ich <g>habe</g> gestern meine Mutter <g>angerufen</g>. Ich <g>bin</g> um 7 Uhr <g>aufgestanden</g>.<br>Das Hilfsverb (haben oder sein) steht auf Position 2, das Partizip II am Ende.",
      "en": "With separable verbs the „ge“ of the past participle goes <b>between</b> the prefix and the stem: <g>auf</g>stehen → <g>aufgestanden</g>, <g>ein</g>kaufen → <g>eingekauft</g>, <g>an</g>rufen → <g>angerufen</g>.<br>Ich <g>habe</g> gestern meine Mutter <g>angerufen</g>. Ich <g>bin</g> um 7 Uhr <g>aufgestanden</g>.<br>The auxiliary verb (haben or sein) is in position 2, the participle at the end.",
      "uk": "У відокремлюваних дієслів «ge» у Partizip II стоїть <b>між</b> префіксом і основою: <g>auf</g>stehen → <g>aufgestanden</g>, <g>ein</g>kaufen → <g>eingekauft</g>, <g>an</g>rufen → <g>angerufen</g>.<br>Ich <g>habe</g> gestern meine Mutter <g>angerufen</g>. Ich <g>bin</g> um 7 Uhr <g>aufgestanden</g>.<br>Допоміжне дієслово (haben або sein) стоїть на другому місці, Partizip II — у кінці.",
      "ru": "У отделяемых глаголов «ge» в Partizip II стоит <b>между</b> приставкой и основой: <g>auf</g>stehen → <g>aufgestanden</g>, <g>ein</g>kaufen → <g>eingekauft</g>, <g>an</g>rufen → <g>angerufen</g>.<br>Ich <g>habe</g> gestern meine Mutter <g>angerufen</g>. Ich <g>bin</g> um 7 Uhr <g>aufgestanden</g>.<br>Вспомогательный глагол (haben или sein) стоит на втором месте, Partizip II — в конце."
    }
  },
  {
    "id": "perfekt_ieren_be_er_ver",
    "title": {
      "de": "Perfekt bei Verben auf -ieren und mit be-, er-, ver-",
      "en": "Perfect tense of verbs ending in -ieren and with be-, er-, ver-",
      "uk": "Перфект дієслів на -ieren та з префіксами be-, er-, ver-",
      "ru": "Перфект глаголов на -ieren и с приставками be-, er-, ver-"
    },
    "explanation": {
      "de": "Verben auf „<g>-ieren</g>“ (studieren, telefonieren) und Verben mit den untrennbaren Vorsilben <g>be-</g>, <g>er-</g>, <g>ver-</g> (bekommen, erklären, vergessen) bilden das Partizip II <b>ohne „ge-“</b>.<br>studieren → <g>studiert</g>, telefonieren → <g>telefoniert</g>, bezahlen → <g>bezahlt</g>, erklären → <g>erklärt</g>, vergessen → <g>vergessen</g>.<br>Beispiel: Ich <g>habe</g> in Kiew <g>studiert</g>. Ich <g>habe</g> das Wort <g>vergessen</g>.",
      "en": "Verbs ending in „<g>-ieren</g>“ (studieren, telefonieren) and verbs with the inseparable prefixes <g>be-</g>, <g>er-</g>, <g>ver-</g> (bekommen, erklären, vergessen) form the past participle <b>without „ge-“</b>.<br>studieren → <g>studiert</g>, telefonieren → <g>telefoniert</g>, bezahlen → <g>bezahlt</g>, erklären → <g>erklärt</g>, vergessen → <g>vergessen</g>.<br>Example: Ich <g>habe</g> in Kiew <g>studiert</g>. Ich <g>habe</g> das Wort <g>vergessen</g>.",
      "uk": "Дієслова на «<g>-ieren</g>» (studieren, telefonieren) та дієслова з нероздільними префіксами <g>be-</g>, <g>er-</g>, <g>ver-</g> (bekommen, erklären, vergessen) утворюють Partizip II <b>без «ge-»</b>.<br>studieren → <g>studiert</g>, telefonieren → <g>telefoniert</g>, bezahlen → <g>bezahlt</g>, erklären → <g>erklärt</g>, vergessen → <g>vergessen</g>.<br>Приклад: Ich <g>habe</g> in Kiew <g>studiert</g>. Ich <g>habe</g> das Wort <g>vergessen</g>.",
      "ru": "Глаголы на «<g>-ieren</g>» (studieren, telefonieren) и глаголы с неотделяемыми приставками <g>be-</g>, <g>er-</g>, <g>ver-</g> (bekommen, erklären, vergessen) образуют Partizip II <b>без «ge-»</b>.<br>studieren → <g>studiert</g>, telefonieren → <g>telefoniert</g>, bezahlen → <g>bezahlt</g>, erklären → <g>erklärt</g>, vergessen → <g>vergessen</g>.<br>Пример: Ich <g>habe</g> in Kiew <g>studiert</g>. Ich <g>habe</g> das Wort <g>vergessen</g>."
    }
  },
  {
    "id": "partizip_ii_unregelmaessig",
    "title": {
      "de": "Unregelmäßiges Partizip II",
      "en": "Irregular past participles",
      "uk": "Неправильний Partizip II",
      "ru": "Неправильное Partizip II"
    },
    "explanation": {
      "de": "Viele häufige Verben sind unregelmäßig: Das Partizip II endet auf <g>-en</g>, und der Stamm ändert sich oft: gehen → <g>gegangen</g>, sehen → <g>gesehen</g>, essen → <g>gegessen</g>, trinken → <g>getrunken</g>, schreiben → <g>geschrieben</g>.<br>Es hilft, drei Formen zu lernen: Infinitiv – Präsens (er) – Partizip II, zum Beispiel <b>nehmen – nimmt – genommen</b>.<br>Beispiel: Ich <g>habe</g> einen Brief <g>geschrieben</g>. Wir <g>sind</g> nach Hause <g>gegangen</g>.",
      "en": "Many common verbs are irregular: the past participle ends in <g>-en</g>, and the stem often changes: gehen → <g>gegangen</g>, sehen → <g>gesehen</g>, essen → <g>gegessen</g>, trinken → <g>getrunken</g>, schreiben → <g>geschrieben</g>.<br>It helps to learn three forms: infinitive – present (er) – past participle, for example <b>nehmen – nimmt – genommen</b>.<br>Example: Ich <g>habe</g> einen Brief <g>geschrieben</g>. Wir <g>sind</g> nach Hause <g>gegangen</g>.",
      "uk": "Багато поширених дієслів неправильні: Partizip II закінчується на <g>-en</g>, а основа часто змінюється: gehen → <g>gegangen</g>, sehen → <g>gesehen</g>, essen → <g>gegessen</g>, trinken → <g>getrunken</g>, schreiben → <g>geschrieben</g>.<br>Допомагає вивчати три форми: інфінітив – презенс (er) – Partizip II, наприклад <b>nehmen – nimmt – genommen</b>.<br>Приклад: Ich <g>habe</g> einen Brief <g>geschrieben</g>. Wir <g>sind</g> nach Hause <g>gegangen</g>.",
      "ru": "Многие частотные глаголы неправильные: Partizip II оканчивается на <g>-en</g>, а основа часто меняется: gehen → <g>gegangen</g>, sehen → <g>gesehen</g>, essen → <g>gegessen</g>, trinken → <g>getrunken</g>, schreiben → <g>geschrieben</g>.<br>Помогает учить три формы: инфинитив – презенс (er) – Partizip II, например <b>nehmen – nimmt – genommen</b>.<br>Пример: Ich <g>habe</g> einen Brief <g>geschrieben</g>. Wir <g>sind</g> nach Hause <g>gegangen</g>."
    }
  },
  {
    "id": "personalpronomen_dativ",
    "title": {
      "de": "Personalpronomen im Dativ",
      "en": "Personal pronouns in the dative",
      "uk": "Особові займенники у давальному відмінку",
      "ru": "Личные местоимения в дательном падеже"
    },
    "explanation": {
      "de": "Verben wie helfen, gefallen, gratulieren, gehören, schenken und antworten stehen mit dem <b>Dativ</b>. Man fragt: <b>Wem</b>?<br>Die Formen: ich → <g>mir</g>, du → <g>dir</g>, er/es → <g>ihm</g>, sie → <g>ihr</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>ihnen</g>, Sie → <g>Ihnen</g>.<br>Beispiel: Gefällt <g>dir</g> das Geschenk? — Ja, es gefällt <g>mir</g>. Ich gratuliere <g>ihm</g>.",
      "en": "Verbs such as helfen, gefallen, gratulieren, gehören, schenken and antworten take the <b>dative</b>. You ask: <b>Wem</b>? (to whom)<br>The forms: ich → <g>mir</g>, du → <g>dir</g>, er/es → <g>ihm</g>, sie → <g>ihr</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>ihnen</g>, Sie → <g>Ihnen</g>.<br>Example: Gefällt <g>dir</g> das Geschenk? — Ja, es gefällt <g>mir</g>. Ich gratuliere <g>ihm</g>.",
      "uk": "Дієслова helfen, gefallen, gratulieren, gehören, schenken та antworten вживаються з <b>давальним відмінком</b> (Dativ). Питання: <b>Wem</b>? (кому?)<br>Форми: ich → <g>mir</g>, du → <g>dir</g>, er/es → <g>ihm</g>, sie → <g>ihr</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>ihnen</g>, Sie → <g>Ihnen</g>.<br>Приклад: Gefällt <g>dir</g> das Geschenk? — Ja, es gefällt <g>mir</g>. Ich gratuliere <g>ihm</g>.",
      "ru": "Глаголы helfen, gefallen, gratulieren, gehören, schenken и antworten употребляются с <b>дательным падежом</b> (Dativ). Вопрос: <b>Wem</b>? (кому?)<br>Формы: ich → <g>mir</g>, du → <g>dir</g>, er/es → <g>ihm</g>, sie → <g>ihr</g>, wir → <g>uns</g>, ihr → <g>euch</g>, sie → <g>ihnen</g>, Sie → <g>Ihnen</g>.<br>Пример: Gefällt <g>dir</g> das Geschenk? — Ja, es gefällt <g>mir</g>. Ich gratuliere <g>ihm</g>."
    }
  },
  {
    "id": "ordinalzahlen_datum",
    "title": {
      "de": "Ordinalzahlen und das Datum",
      "en": "Ordinal numbers and dates",
      "uk": "Порядкові числівники та дата",
      "ru": "Порядковые числительные и дата"
    },
    "explanation": {
      "de": "Ordinalzahlen sagen die Reihenfolge: der <g>erste</g>, der <g>zweite</g>, der <g>dritte</g>, der <g>vierte</g>. Von 1 bis 19 endet die Zahl auf <g>-te</g>, ab 20 auf <g>-ste</g>: der zwanzig<g>ste</g>.<br>Ausnahmen: der erste, dritte, siebte.<br>Für das Datum sagt man: <b>Der Wievielte</b> ist heute? — Heute ist der <g>erste</g> Mai. Der Geburtstag ist <g>am</g> <g>sechzehnten</g> Mai. Man schreibt: 16. Mai.",
      "en": "Ordinal numbers give the order: der <g>erste</g>, der <g>zweite</g>, der <g>dritte</g>, der <g>vierte</g>. From 1 to 19 the number ends in <g>-te</g>, from 20 on in <g>-ste</g>: der zwanzig<g>ste</g>.<br>Exceptions: der erste, dritte, siebte.<br>For the date you say: <b>Der Wievielte</b> ist heute? (What is today's date?) — Heute ist der <g>erste</g> Mai. Der Geburtstag ist <g>am</g> <g>sechzehnten</g> Mai. It is written: 16. Mai.",
      "uk": "Порядкові числівники показують послідовність: der <g>erste</g>, der <g>zweite</g>, der <g>dritte</g>, der <g>vierte</g>. Від 1 до 19 числівник закінчується на <g>-te</g>, від 20 — на <g>-ste</g>: der zwanzig<g>ste</g>.<br>Винятки: der erste, dritte, siebte.<br>Дату називають так: <b>Der Wievielte</b> ist heute? (Яке сьогодні число?) — Heute ist der <g>erste</g> Mai. Der Geburtstag ist <g>am</g> <g>sechzehnten</g> Mai. Пишуть: 16. Mai.",
      "ru": "Порядковые числительные показывают последовательность: der <g>erste</g>, der <g>zweite</g>, der <g>dritte</g>, der <g>vierte</g>. От 1 до 19 числительное оканчивается на <g>-te</g>, от 20 — на <g>-ste</g>: der zwanzig<g>ste</g>.<br>Исключения: der erste, dritte, siebte.<br>Дату называют так: <b>Der Wievielte</b> ist heute? (Какое сегодня число?) — Heute ist der <g>erste</g> Mai. Der Geburtstag ist <g>am</g> <g>sechzehnten</g> Mai. Пишут: 16. Mai."
    }
  },
  {
    "id": "possessivartikel_dativ",
    "title": {
      "de": "Possessivartikel im Dativ",
      "en": "Possessive articles in the dative",
      "uk": "Присвійні артиклі у давальному відмінку",
      "ru": "Притяжательные артикли в дательном падеже"
    },
    "explanation": {
      "de": "Im Dativ bekommen Possessivartikel die Endungen: maskulin und neutral <g>-em</g>, feminin <g>-er</g>, Plural <g>-en</g>.<br>Ich gratuliere <g>meinem</g> Chef (m.), <g>meinem</g> Kind (n.), <g>meiner</g> Mutter (f.), <g>meinen</g> Eltern (Pl.).<br>Frage: <b>Wem</b> schenkst du das Buch? — Ich schenke es <g>meiner</g> Schwester.",
      "en": "In the dative, possessive articles take these endings: masculine and neuter <g>-em</g>, feminine <g>-er</g>, plural <g>-en</g>.<br>Ich gratuliere <g>meinem</g> Chef (m.), <g>meinem</g> Kind (n.), <g>meiner</g> Mutter (f.), <g>meinen</g> Eltern (pl.).<br>Question: <b>Wem</b> schenkst du das Buch? (To whom are you giving the book?) — Ich schenke es <g>meiner</g> Schwester.",
      "uk": "У давальному відмінку присвійні артиклі мають закінчення: чоловічий і середній рід <g>-em</g>, жіночий <g>-er</g>, множина <g>-en</g>.<br>Ich gratuliere <g>meinem</g> Chef (ч. р.), <g>meinem</g> Kind (с. р.), <g>meiner</g> Mutter (ж. р.), <g>meinen</g> Eltern (множина).<br>Питання: <b>Wem</b> schenkst du das Buch? (Кому ти даруєш книгу?) — Ich schenke es <g>meiner</g> Schwester.",
      "ru": "В дательном падеже притяжательные артикли имеют окончания: мужской и средний род <g>-em</g>, женский <g>-er</g>, множественное число <g>-en</g>.<br>Ich gratuliere <g>meinem</g> Chef (м. р.), <g>meinem</g> Kind (ср. р.), <g>meiner</g> Mutter (ж. р.), <g>meinen</g> Eltern (мн. ч.).<br>Вопрос: <b>Wem</b> schenkst du das Buch? (Кому ты даришь книгу?) — Ich schenke es <g>meiner</g> Schwester."
    }
  },
  {
    "id": "temporale_praepositionen_im_am_ab_bei",
    "title": {
      "de": "Temporale Präpositionen im, am, ab, bei",
      "en": "Time prepositions im, am, ab, bei",
      "uk": "Часові прийменники im, am, ab, bei",
      "ru": "Временные предлоги im, am, ab, bei"
    },
    "explanation": {
      "de": "<g>Im</g> steht mit Monaten und Jahreszeiten: <g>im</g> Mai, <g>im</g> Winter.<br><g>Am</g> steht mit Tagen und Daten: <g>am</g> Montag, <g>am</g> 16. Mai.<br><g>Ab</g> nennt den Beginn: <g>ab</g> Montag, <g>ab</g> 8 Uhr.<br><g>Bei</g> nennt eine Gelegenheit: <g>bei</g> der Feier, <g>bei</g> uns. Alle Präpositionen stehen mit dem <b>Dativ</b>.",
      "en": "<g>Im</g> is used with months and seasons: <g>im</g> Mai, <g>im</g> Winter.<br><g>Am</g> is used with days and dates: <g>am</g> Montag, <g>am</g> 16. Mai.<br><g>Ab</g> names the starting point: <g>ab</g> Montag, <g>ab</g> 8 Uhr.<br><g>Bei</g> names an occasion: <g>bei</g> der Feier, <g>bei</g> uns. All these prepositions take the <b>dative</b>.",
      "uk": "<g>Im</g> вживається з місяцями та порами року: <g>im</g> Mai, <g>im</g> Winter.<br><g>Am</g> вживається з днями та датами: <g>am</g> Montag, <g>am</g> 16. Mai.<br><g>Ab</g> вказує на початок: <g>ab</g> Montag, <g>ab</g> 8 Uhr.<br><g>Bei</g> вказує на нагоду: <g>bei</g> der Feier, <g>bei</g> uns. Усі ці прийменники вживаються з <b>давальним відмінком</b>.",
      "ru": "<g>Im</g> употребляется с месяцами и временами года: <g>im</g> Mai, <g>im</g> Winter.<br><g>Am</g> употребляется с днями и датами: <g>am</g> Montag, <g>am</g> 16. Mai.<br><g>Ab</g> указывает на начало: <g>ab</g> Montag, <g>ab</g> 8 Uhr.<br><g>Bei</g> указывает на повод: <g>bei</g> der Feier, <g>bei</g> uns. Все эти предлоги употребляются с <b>дательным падежом</b>."
    }
  },
  {
    "id": "praepositionen_von_nach_zu_mit",
    "title": {
      "de": "Präpositionen von, nach, zu, mit + Dativ",
      "en": "Prepositions von, nach, zu, mit + dative",
      "uk": "Прийменники von, nach, zu, mit + давальний відмінок",
      "ru": "Предлоги von, nach, zu, mit + дательный падеж"
    },
    "explanation": {
      "de": "Diese Präpositionen stehen immer mit dem <b>Dativ</b>:<br><g>von</g> (Ausgangspunkt): <g>von</g> der Schule, <g>vom</g> Bahnhof (von + dem).<br><g>nach</g> (Städte, Länder): <g>nach</g> Bremen.<br><g>zu</g> (Personen, Orte): <g>zum</g> Bahnhof (zu + dem), <g>zur</g> Schule (zu + der).<br><g>mit</g> (Verkehrsmittel): <g>mit dem</g> Bus, <g>mit der</g> Bahn.<br>Fragen: <b>Wie</b> kommst du? — <g>Mit dem</g> Zug. <b>Wohin</b>? — <g>Zum</g> Bahnhof.",
      "en": "These prepositions always take the <b>dative</b>:<br><g>von</g> (starting point): <g>von</g> der Schule, <g>vom</g> Bahnhof (von + dem).<br><g>nach</g> (cities, countries): <g>nach</g> Bremen.<br><g>zu</g> (people, places): <g>zum</g> Bahnhof (zu + dem), <g>zur</g> Schule (zu + der).<br><g>mit</g> (means of transport): <g>mit dem</g> Bus, <g>mit der</g> Bahn.<br>Questions: <b>Wie</b> kommst du? (How do you get there?) — <g>Mit dem</g> Zug. <b>Wohin</b>? — <g>Zum</g> Bahnhof.",
      "uk": "Ці прийменники завжди вживаються з <b>давальним відмінком</b>:<br><g>von</g> (початкова точка): <g>von</g> der Schule, <g>vom</g> Bahnhof (von + dem).<br><g>nach</g> (міста, країни): <g>nach</g> Bremen.<br><g>zu</g> (особи, місця): <g>zum</g> Bahnhof (zu + dem), <g>zur</g> Schule (zu + der).<br><g>mit</g> (транспорт): <g>mit dem</g> Bus, <g>mit der</g> Bahn.<br>Питання: <b>Wie</b> kommst du? (Як ти добираєшся?) — <g>Mit dem</g> Zug. <b>Wohin</b>? — <g>Zum</g> Bahnhof.",
      "ru": "Эти предлоги всегда употребляются с <b>дательным падежом</b>:<br><g>von</g> (отправная точка): <g>von</g> der Schule, <g>vom</g> Bahnhof (von + dem).<br><g>nach</g> (города, страны): <g>nach</g> Bremen.<br><g>zu</g> (люди, места): <g>zum</g> Bahnhof (zu + dem), <g>zur</g> Schule (zu + der).<br><g>mit</g> (транспорт): <g>mit dem</g> Bus, <g>mit der</g> Bahn.<br>Вопросы: <b>Wie</b> kommst du? (Как ты добираешься?) — <g>Mit dem</g> Zug. <b>Wohin</b>? — <g>Zum</g> Bahnhof."
    }
  },
  {
    "id": "artikel_dativ_bestimmt",
    "title": {
      "de": "Der bestimmte Artikel im Dativ",
      "en": "The definite article in the dative",
      "uk": "Означений артикль у давальному відмінку",
      "ru": "Определённый артикль в дательном падеже"
    },
    "explanation": {
      "de": "Im Dativ ändern sich alle bestimmten Artikel: maskulin und neutral <g>dem</g>, feminin <g>der</g>, Plural <g>den</g> (+ -n am Nomen).<br>Beispiel: <g>dem</g> Bahnhof (m.), <g>dem</g> Hotel (n.), <g>der</g> Post (f.), <g>den</g> Zügen (Pl.).<br>Der Dativ steht nach den Präpositionen aus, bei, mit, nach, von, zu und nach Verben wie helfen und gehören.<br>Frage <b>Wo</b>? — Das Museum ist neben <g>dem</g> Bahnhof.",
      "en": "In the dative all definite articles change: masculine and neuter <g>dem</g>, feminine <g>der</g>, plural <g>den</g> (+ -n on the noun).<br>Example: <g>dem</g> Bahnhof (m.), <g>dem</g> Hotel (n.), <g>der</g> Post (f.), <g>den</g> Zügen (pl.).<br>The dative is used after the prepositions aus, bei, mit, nach, von, zu and after verbs such as helfen and gehören.<br>Question <b>Wo</b>? — Das Museum ist neben <g>dem</g> Bahnhof.",
      "uk": "У давальному відмінку змінюються всі означені артиклі: чоловічий і середній рід <g>dem</g>, жіночий <g>der</g>, множина <g>den</g> (+ -n в іменника).<br>Приклад: <g>dem</g> Bahnhof (ч. р.), <g>dem</g> Hotel (с. р.), <g>der</g> Post (ж. р.), <g>den</g> Zügen (множина).<br>Давальний відмінок стоїть після прийменників aus, bei, mit, nach, von, zu та після дієслів на кшталт helfen і gehören.<br>Питання <b>Wo</b>? — Das Museum ist neben <g>dem</g> Bahnhof.",
      "ru": "В дательном падеже меняются все определённые артикли: мужской и средний род <g>dem</g>, женский <g>der</g>, множественное число <g>den</g> (+ -n у существительного).<br>Пример: <g>dem</g> Bahnhof (м. р.), <g>dem</g> Hotel (ср. р.), <g>der</g> Post (ж. р.), <g>den</g> Zügen (мн. ч.).<br>Дательный падеж стоит после предлогов aus, bei, mit, nach, von, zu и после глаголов вроде helfen и gehören.<br>Вопрос <b>Wo</b>? — Das Museum ist neben <g>dem</g> Bahnhof."
    }
  },
  {
    "id": "imperativ_du",
    "title": {
      "de": "Der Imperativ (du-Form)",
      "en": "The imperative (du-form)",
      "uk": "Наказовий спосіб (форма du)",
      "ru": "Повелительное наклонение (форма du)"
    },
    "explanation": {
      "de": "Mit der du-Form gibt man Freunden und Familie Anweisungen. Man nimmt den Verbstamm ohne „-st“: du kommst → <g>Komm</g>! du gehst → <g>Geh</g>!<br>Das Pronomen „du“ fällt weg: <g>Nimm</g> den Bus! <g>Fahr</g> geradeaus!<br>Bei Verben mit Vokalwechsel e → i gilt der Wechsel auch im Imperativ (nimm, sprich). Bei a → ä nicht: <g>fahr</g>, <g>schlaf</g>.<br>Bei trennbaren Verben steht die Vorsilbe am Ende: <g>Steig</g> hier <g>aus</g>.",
      "en": "With the du-form you give instructions to friends and family. You take the verb stem without „-st“: du kommst → <g>Komm</g>! du gehst → <g>Geh</g>!<br>The pronoun „du“ is dropped: <g>Nimm</g> den Bus! <g>Fahr</g> geradeaus!<br>Verbs with an e → i vowel change keep it in the imperative (nimm, sprich). Verbs with a → ä do not: <g>fahr</g>, <g>schlaf</g>.<br>With separable verbs the prefix goes to the end: <g>Steig</g> hier <g>aus</g>.",
      "uk": "Форму du використовують для вказівок друзям і рідним. Беруть основу дієслова без «-st»: du kommst → <g>Komm</g>! du gehst → <g>Geh</g>!<br>Займенник «du» опускається: <g>Nimm</g> den Bus! <g>Fahr</g> geradeaus!<br>У дієслів зі зміною e → i зміна зберігається й у наказовому способі (nimm, sprich). У дієслів a → ä — ні: <g>fahr</g>, <g>schlaf</g>.<br>У відокремлюваних дієслів префікс іде в кінець: <g>Steig</g> hier <g>aus</g>.",
      "ru": "Форму du используют для указаний друзьям и близким. Берут основу глагола без «-st»: du kommst → <g>Komm</g>! du gehst → <g>Geh</g>!<br>Местоимение «du» опускается: <g>Nimm</g> den Bus! <g>Fahr</g> geradeaus!<br>У глаголов с изменением e → i это изменение сохраняется и в повелительном наклонении (nimm, sprich). У глаголов a → ä — нет: <g>fahr</g>, <g>schlaf</g>.<br>У отделяемых глаголов приставка уходит в конец: <g>Steig</g> hier <g>aus</g>."
    }
  },
  {
    "id": "praepositionen_in_an_dativ",
    "title": {
      "de": "Präpositionen in und an + Dativ (Wo?)",
      "en": "Prepositions in and an + dative (Wo?)",
      "uk": "Прийменники in та an + давальний відмінок (Wo?)",
      "ru": "Предлоги in и an + дательный падеж (Wo?)"
    },
    "explanation": {
      "de": "Mit <b>Wo</b>? fragt man nach dem Ort. Die Präpositionen „in“ und „an“ stehen dann mit dem <b>Dativ</b>: Ich bin <g>in der</g> Stadt. Das Café ist <g>am</g> Bahnhof (an + dem).<br><g>in</g> = drinnen: <g>im</g> Park (in + dem), <g>im</g> Hotel, <g>in der</g> Schule.<br><g>an</g> = direkt an einer Linie oder Fläche: <g>am</g> Fluss, <g>an der</g> Ecke, <g>an der</g> Haltestelle.<br>Vergleich: <b>Wohin</b>? → Akkusativ (Ich gehe <g>in den</g> Park), <b>Wo</b>? → Dativ (Ich bin <g>im</g> Park).",
      "en": "You ask <b>Wo</b>? for a place. The prepositions „in“ and „an“ then take the <b>dative</b>: Ich bin <g>in der</g> Stadt. Das Café ist <g>am</g> Bahnhof (an + dem).<br><g>in</g> = inside: <g>im</g> Park (in + dem), <g>im</g> Hotel, <g>in der</g> Schule.<br><g>an</g> = directly at a line or surface: <g>am</g> Fluss, <g>an der</g> Ecke, <g>an der</g> Haltestelle.<br>Compare: <b>Wohin</b>? → accusative (Ich gehe <g>in den</g> Park), <b>Wo</b>? → dative (Ich bin <g>im</g> Park).",
      "uk": "За допомогою <b>Wo</b>? питають про місце. Прийменники «in» та «an» тоді вживаються з <b>давальним відмінком</b>: Ich bin <g>in der</g> Stadt. Das Café ist <g>am</g> Bahnhof (an + dem).<br><g>in</g> = усередині: <g>im</g> Park (in + dem), <g>im</g> Hotel, <g>in der</g> Schule.<br><g>an</g> = безпосередньо біля лінії чи поверхні: <g>am</g> Fluss, <g>an der</g> Ecke, <g>an der</g> Haltestelle.<br>Порівняйте: <b>Wohin</b>? → знахідний (Ich gehe <g>in den</g> Park), <b>Wo</b>? → давальний (Ich bin <g>im</g> Park).",
      "ru": "С помощью <b>Wo</b>? спрашивают о месте. Предлоги «in» и «an» тогда употребляются с <b>дательным падежом</b>: Ich bin <g>in der</g> Stadt. Das Café ist <g>am</g> Bahnhof (an + dem).<br><g>in</g> = внутри: <g>im</g> Park (in + dem), <g>im</g> Hotel, <g>in der</g> Schule.<br><g>an</g> = непосредственно у линии или поверхности: <g>am</g> Fluss, <g>an der</g> Ecke, <g>an der</g> Haltestelle.<br>Сравните: <b>Wohin</b>? → винительный (Ich gehe <g>in den</g> Park), <b>Wo</b>? → дательный (Ich bin <g>im</g> Park)."
    }
  },
  {
    "id": "modalverb_sollen",
    "title": {
      "de": "Das Modalverb sollen",
      "en": "The modal verb sollen",
      "uk": "Модальне дієслово sollen",
      "ru": "Модальный глагол sollen"
    },
    "explanation": {
      "de": "„<g>Sollen</g>“ drückt aus, was jemand anderes will oder was ein Rat ist. Zum Beispiel sagt eine Ärztin: Sie <g>sollen</g> viel Tee trinken.<br>Formen: ich <g>soll</g>, du <g>sollst</g>, er/sie/es <g>soll</g>, wir <g>sollen</g>, ihr <g>sollt</g>, sie/Sie <g>sollen</g>.<br>Man benutzt „sollen“ auch, um Aufforderungen weiterzugeben: Die Ärztin sagt: „Nehmen Sie die Tabletten.“ → Ich <g>soll</g> die Tabletten <g>nehmen</g>.<br>Das zweite Verb steht als Infinitiv am Ende.",
      "en": "„<g>Sollen</g>“ expresses what someone else wants or what is advised. For example, a doctor says: Sie <g>sollen</g> viel Tee trinken (You should drink a lot of tea).<br>Forms: ich <g>soll</g>, du <g>sollst</g>, er/sie/es <g>soll</g>, wir <g>sollen</g>, ihr <g>sollt</g>, sie/Sie <g>sollen</g>.<br>„Sollen“ is also used to pass on instructions: The doctor says: „Nehmen Sie die Tabletten.“ → Ich <g>soll</g> die Tabletten <g>nehmen</g>.<br>The second verb stands at the end as an infinitive.",
      "uk": "«<g>Sollen</g>» виражає те, чого хоче хтось інший, або пораду. Наприклад, лікарка каже: Sie <g>sollen</g> viel Tee trinken (Вам слід пити багато чаю).<br>Форми: ich <g>soll</g>, du <g>sollst</g>, er/sie/es <g>soll</g>, wir <g>sollen</g>, ihr <g>sollt</g>, sie/Sie <g>sollen</g>.<br>«Sollen» вживають і для передачі чужих вказівок: Лікарка каже: «Nehmen Sie die Tabletten». → Ich <g>soll</g> die Tabletten <g>nehmen</g>.<br>Друге дієслово стоїть у кінці в інфінітиві.",
      "ru": "«<g>Sollen</g>» выражает то, чего хочет кто-то другой, или совет. Например, врач говорит: Sie <g>sollen</g> viel Tee trinken (Вам следует пить много чая).<br>Формы: ich <g>soll</g>, du <g>sollst</g>, er/sie/es <g>soll</g>, wir <g>sollen</g>, ihr <g>sollt</g>, sie/Sie <g>sollen</g>.<br>«Sollen» используют и для передачи чужих указаний: Врач говорит: «Nehmen Sie die Tabletten». → Ich <g>soll</g> die Tabletten <g>nehmen</g>.<br>Второй глагол стоит в конце в инфинитиве."
    }
  },
  {
    "id": "satzverbindungen_und_oder_aber",
    "title": {
      "de": "Satzverbindungen mit und, oder, aber",
      "en": "Joining sentences with und, oder, aber",
      "uk": "Зʼєднання речень за допомогою und, oder, aber",
      "ru": "Соединение предложений с помощью und, oder, aber"
    },
    "explanation": {
      "de": "Mit <g>und</g>, <g>oder</g> und <g>aber</g> verbindet man zwei Hauptsätze. Diese Wörter stehen auf Position 0 — sie verändern die Wortstellung <b>nicht</b>.<br><g>und</g> = Aufzählung: Ich habe Fieber <g>und</g> ich habe Husten.<br><g>oder</g> = Alternative: Kommen Sie am Vormittag <g>oder</g> am Nachmittag?<br><g>aber</g> = Gegensatz: Ich bin krank, <g>aber</g> ich gehe zur Arbeit.<br>Vor <g>aber</g> steht ein Komma.",
      "en": "You use <g>und</g>, <g>oder</g> and <g>aber</g> to join two main clauses. These words stand in position 0 — they do <b>not</b> change the word order.<br><g>und</g> = addition: Ich habe Fieber <g>und</g> ich habe Husten.<br><g>oder</g> = alternative: Kommen Sie am Vormittag <g>oder</g> am Nachmittag?<br><g>aber</g> = contrast: Ich bin krank, <g>aber</g> ich gehe zur Arbeit.<br>A comma stands before <g>aber</g>.",
      "uk": "За допомогою <g>und</g>, <g>oder</g> та <g>aber</g> зʼєднують два головні речення. Ці слова стоять на «нульовій позиції» — вони <b>не змінюють</b> порядок слів.<br><g>und</g> = перелічення: Ich habe Fieber <g>und</g> ich habe Husten.<br><g>oder</g> = альтернатива: Kommen Sie am Vormittag <g>oder</g> am Nachmittag?<br><g>aber</g> = протиставлення: Ich bin krank, <g>aber</g> ich gehe zur Arbeit.<br>Перед <g>aber</g> ставиться кома.",
      "ru": "С помощью <g>und</g>, <g>oder</g> и <g>aber</g> соединяют два главных предложения. Эти слова стоят на «нулевой позиции» — они <b>не меняют</b> порядок слов.<br><g>und</g> = перечисление: Ich habe Fieber <g>und</g> ich habe Husten.<br><g>oder</g> = альтернатива: Kommen Sie am Vormittag <g>oder</g> am Nachmittag?<br><g>aber</g> = противопоставление: Ich bin krank, <g>aber</g> ich gehe zur Arbeit.<br>Перед <g>aber</g> ставится запятая."
    }
  },
  {
    "id": "unbestimmter_artikel_dativ",
    "title": {
      "de": "Der unbestimmte Artikel im Dativ",
      "en": "The indefinite article in the dative",
      "uk": "Неозначений артикль у давальному відмінку",
      "ru": "Неопределённый артикль в дательном падеже"
    },
    "explanation": {
      "de": "Im Dativ ändert sich auch der unbestimmte Artikel: maskulin und neutral <g>einem</g>, feminin <g>einer</g>. Im Plural gibt es keinen Artikel (Nomen + -n).<br>Beispiel: Wir arbeiten in <g>einem</g> Hotel (n.). Ich spreche mit <g>einem</g> Gast (m.). Sie hilft <g>einer</g> Kollegin (f.).<br>Der Negativartikel „kein“ hat die gleichen Endungen: <g>keinem</g> Gast, <g>keiner</g> Kollegin, <g>keinen</g> Gästen.",
      "en": "In the dative the indefinite article also changes: masculine and neuter <g>einem</g>, feminine <g>einer</g>. There is no article in the plural (noun + -n).<br>Example: Wir arbeiten in <g>einem</g> Hotel (n.). Ich spreche mit <g>einem</g> Gast (m.). Sie hilft <g>einer</g> Kollegin (f.).<br>The negative article „kein“ has the same endings: <g>keinem</g> Gast, <g>keiner</g> Kollegin, <g>keinen</g> Gästen.",
      "uk": "У давальному відмінку змінюється й неозначений артикль: чоловічий і середній рід <g>einem</g>, жіночий <g>einer</g>. У множині артикля немає (іменник + -n).<br>Приклад: Wir arbeiten in <g>einem</g> Hotel (с. р.). Ich spreche mit <g>einem</g> Gast (ч. р.). Sie hilft <g>einer</g> Kollegin (ж. р.).<br>Заперечний артикль «kein» має ті самі закінчення: <g>keinem</g> Gast, <g>keiner</g> Kollegin, <g>keinen</g> Gästen.",
      "ru": "В дательном падеже меняется и неопределённый артикль: мужской и средний род <g>einem</g>, женский <g>einer</g>. Во множественном числе артикля нет (существительное + -n).<br>Пример: Wir arbeiten in <g>einem</g> Hotel (ср. р.). Ich spreche mit <g>einem</g> Gast (м. р.). Sie hilft <g>einer</g> Kollegin (ж. р.).<br>Отрицательный артикль «kein» имеет те же окончания: <g>keinem</g> Gast, <g>keiner</g> Kollegin, <g>keinen</g> Gästen."
    }
  },
  {
    "id": "satzverbindung_denn",
    "title": {
      "de": "Satzverbindung mit denn",
      "en": "Joining sentences with denn",
      "uk": "Зʼєднання речень за допомогою denn",
      "ru": "Соединение предложений с помощью denn"
    },
    "explanation": {
      "de": "Mit <g>denn</g> gibt man einen Grund an. Die Frage ist: <b>Warum</b>? „Denn“ verbindet zwei Hauptsätze und steht auf Position 0: Das Verb bleibt auf Position 2.<br>Ich kann nicht kommen, <g>denn</g> ich <g>habe</g> keine Zeit.<br>Vor „denn“ steht immer ein Komma.<br>Antwort auf „Warum?“: Man antwortet oft mit „Weil ...“ — aber dann steht das Verb am Satzende.",
      "en": "You use <g>denn</g> to give a reason. The question is <b>Warum</b>? (why). „Denn“ joins two main clauses and stands in position 0: the verb stays in position 2.<br>Ich kann nicht kommen, <g>denn</g> ich <g>habe</g> keine Zeit.<br>A comma always stands before „denn“.<br>To answer „Warum?“ people often use „Weil ...“ — but then the verb goes to the end of the clause.",
      "uk": "За допомогою <g>denn</g> називають причину. Питання: <b>Warum</b>? (чому?) «Denn» зʼєднує два головні речення й стоїть на «нульовій позиції»: дієслово лишається на другому місці.<br>Ich kann nicht kommen, <g>denn</g> ich <g>habe</g> keine Zeit.<br>Перед «denn» завжди ставиться кома.<br>На «Warum?» часто відповідають «Weil ...» — але тоді дієслово йде в кінець речення.",
      "ru": "С помощью <g>denn</g> называют причину. Вопрос: <b>Warum</b>? (почему?) «Denn» соединяет два главных предложения и стоит на «нулевой позиции»: глагол остаётся на втором месте.<br>Ich kann nicht kommen, <g>denn</g> ich <g>habe</g> keine Zeit.<br>Перед «denn» всегда ставится запятая.<br>На «Warum?» часто отвечают «Weil ...» — но тогда глагол уходит в конец предложения."
    }
  },
  {
    "id": "praepositionen_seit_vor",
    "title": {
      "de": "Präpositionen seit und vor + Dativ",
      "en": "Prepositions seit and vor + dative",
      "uk": "Прийменники seit та vor + давальний відмінок",
      "ru": "Предлоги seit и vor + дательный падеж"
    },
    "explanation": {
      "de": "Mit <g>seit</g> nennt man den Beginn einer Zeit, die noch andauert: Ich wohne <g>seit</g> einem Jahr in Köln. Frage: <b>Seit wann</b>? / <b>Wie lange schon</b>?<br>Mit <g>vor</g> nennt man einen Zeitpunkt in der Vergangenheit: Ich bin <g>vor</g> zwei Jahren nach Deutschland gekommen.<br>Beide Präpositionen stehen mit dem <b>Dativ</b>: <g>seit</g> einer Woche, <g>vor</g> einem Monat, <g>vor</g> zwei Tagen (Plural + -n).",
      "en": "You use <g>seit</g> for the beginning of a period that is still going on: Ich wohne <g>seit</g> einem Jahr in Köln. Question: <b>Seit wann</b>? / <b>Wie lange schon</b>?<br>You use <g>vor</g> for a point in time in the past: Ich bin <g>vor</g> zwei Jahren nach Deutschland gekommen.<br>Both prepositions take the <b>dative</b>: <g>seit</g> einer Woche, <g>vor</g> einem Monat, <g>vor</g> zwei Tagen (plural + -n).",
      "uk": "За допомогою <g>seit</g> називають початок періоду, який ще триває: Ich wohne <g>seit</g> einem Jahr in Köln. Питання: <b>Seit wann</b>? / <b>Wie lange schon</b>?<br>За допомогою <g>vor</g> називають момент у минулому: Ich bin <g>vor</g> zwei Jahren nach Deutschland gekommen.<br>Обидва прийменники вживаються з <b>давальним відмінком</b>: <g>seit</g> einer Woche, <g>vor</g> einem Monat, <g>vor</g> zwei Tagen (множина + -n).",
      "ru": "С помощью <g>seit</g> называют начало периода, который ещё продолжается: Ich wohne <g>seit</g> einem Jahr in Köln. Вопрос: <b>Seit wann</b>? / <b>Wie lange schon</b>?<br>С помощью <g>vor</g> называют момент в прошлом: Ich bin <g>vor</g> zwei Jahren nach Deutschland gekommen.<br>Оба предлога употребляются с <b>дательным падежом</b>: <g>seit</g> einer Woche, <g>vor</g> einem Monat, <g>vor</g> zwei Tagen (множественное число + -n)."
    }
  },
  {
    "id": "praeposition_von_dativ",
    "title": {
      "de": "Die Präposition von + Dativ",
      "en": "The preposition von + dative",
      "uk": "Прийменник von + давальний відмінок",
      "ru": "Предлог von + дательный падеж"
    },
    "explanation": {
      "de": "Mit <g>von</g> sagt man, woher etwas kommt oder von wem man etwas hat. Frage: <b>Von wem</b>?<br>Ich habe das <g>von</g> meiner Oma gelernt. Das Geschenk ist <g>von</g> meinem Bruder.<br><g>von</g> + Dativ: <g>von dem</g> = <g>vom</g> Lehrer, <g>von der</g> Lehrerin, <g>von den</g> Kindern.<br>Auch bei Personalpronomen: <g>von</g> mir, <g>von</g> dir, <g>von</g> ihm, <g>von</g> ihr.",
      "en": "You use <g>von</g> to say where something comes from or who you got it from. Question: <b>Von wem</b>? (from whom)<br>Ich habe das <g>von</g> meiner Oma gelernt. Das Geschenk ist <g>von</g> meinem Bruder.<br><g>von</g> + dative: <g>von dem</g> = <g>vom</g> Lehrer, <g>von der</g> Lehrerin, <g>von den</g> Kindern.<br>Also with personal pronouns: <g>von</g> mir, <g>von</g> dir, <g>von</g> ihm, <g>von</g> ihr.",
      "uk": "За допомогою <g>von</g> кажуть, звідки щось походить або від кого людина це отримала. Питання: <b>Von wem</b>? (від кого?)<br>Ich habe das <g>von</g> meiner Oma gelernt. Das Geschenk ist <g>von</g> meinem Bruder.<br><g>von</g> + давальний: <g>von dem</g> = <g>vom</g> Lehrer, <g>von der</g> Lehrerin, <g>von den</g> Kindern.<br>Так само з особовими займенниками: <g>von</g> mir, <g>von</g> dir, <g>von</g> ihm, <g>von</g> ihr.",
      "ru": "С помощью <g>von</g> говорят, откуда что-то происходит или от кого человек это получил. Вопрос: <b>Von wem</b>? (от кого?)<br>Ich habe das <g>von</g> meiner Oma gelernt. Das Geschenk ist <g>von</g> meinem Bruder.<br><g>von</g> + дательный: <g>von dem</g> = <g>vom</g> Lehrer, <g>von der</g> Lehrerin, <g>von den</g> Kindern.<br>Так же с личными местоимениями: <g>von</g> mir, <g>von</g> dir, <g>von</g> ihm, <g>von</g> ihr."
    }
  },
  {
    "id": "ja_nein_doch",
    "title": {
      "de": "Antworten mit ja, nein und doch",
      "en": "Answering with ja, nein and doch",
      "uk": "Відповіді ja, nein та doch",
      "ru": "Ответы ja, nein и doch"
    },
    "explanation": {
      "de": "Auf eine normale Frage antwortet man mit <g>Ja</g> oder <g>Nein</g>: Kommst du? — <g>Ja</g>, ich komme. / <g>Nein</g>, ich komme nicht.<br>Auf eine <b>negative Frage</b> (mit „nicht“ oder „kein“) sagt man <g>Doch</g>, wenn die Antwort positiv ist: Kommst du nicht? — <g>Doch</g>, ich komme!<br>Ist die Antwort negativ, sagt man <g>Nein</g>: Kommst du nicht? — <g>Nein</g>, ich komme nicht.",
      "en": "To a normal question you answer with <g>Ja</g> or <g>Nein</g>: Kommst du? — <g>Ja</g>, ich komme. / <g>Nein</g>, ich komme nicht.<br>To a <b>negative question</b> (with „nicht“ or „kein“) you say <g>Doch</g> if the answer is positive: Kommst du nicht? (Aren't you coming?) — <g>Doch</g>, ich komme! (Yes, I am!)<br>If the answer is negative, you say <g>Nein</g>: Kommst du nicht? — <g>Nein</g>, ich komme nicht.",
      "uk": "На звичайне питання відповідають <g>Ja</g> або <g>Nein</g>: Kommst du? — <g>Ja</g>, ich komme. / <g>Nein</g>, ich komme nicht.<br>На <b>заперечне питання</b> (з «nicht» або «kein») кажуть <g>Doch</g>, якщо відповідь ствердна: Kommst du nicht? (Ти не прийдеш?) — <g>Doch</g>, ich komme! (Ні, прийду!)<br>Якщо відповідь заперечна, кажуть <g>Nein</g>: Kommst du nicht? — <g>Nein</g>, ich komme nicht.",
      "ru": "На обычный вопрос отвечают <g>Ja</g> или <g>Nein</g>: Kommst du? — <g>Ja</g>, ich komme. / <g>Nein</g>, ich komme nicht.<br>На <b>отрицательный вопрос</b> (с «nicht» или «kein») говорят <g>Doch</g>, если ответ утвердительный: Kommst du nicht? (Ты не придёшь?) — <g>Doch</g>, ich komme! (Нет, приду!)<br>Если ответ отрицательный, говорят <g>Nein</g>: Kommst du nicht? — <g>Nein</g>, ich komme nicht."
    }
  },
  {
    "id": "imperativ_ihr",
    "title": {
      "de": "Der Imperativ (ihr-Form)",
      "en": "The imperative (ihr-form)",
      "uk": "Наказовий спосіб (форма ihr)",
      "ru": "Повелительное наклонение (форма ihr)"
    },
    "explanation": {
      "de": "Mit der ihr-Form gibt man einer Gruppe von Personen eine Anweisung, die man duzt. Sie ist gleich wie die ihr-Form im Präsens, aber ohne „ihr“: ihr lernt → <g>Lernt</g>! ihr macht → <g>Macht</g> eine Pause!<br>Beispiel: <g>Wiederholt</g> jeden Tag die Wörter! <g>Schreibt</g> die Sätze auf!<br>Bei „sein“ heißt es: <g>Seid</g> pünktlich!<br>Bei trennbaren Verben steht die Vorsilbe am Ende: <g>Hört</g> gut <g>zu</g>.",
      "en": "With the ihr-form you give an instruction to a group of people you address informally. It is the same as the present-tense ihr-form, but without „ihr“: ihr lernt → <g>Lernt</g>! ihr macht → <g>Macht</g> eine Pause!<br>Example: <g>Wiederholt</g> jeden Tag die Wörter! <g>Schreibt</g> die Sätze auf!<br>With „sein“ it is: <g>Seid</g> pünktlich!<br>With separable verbs the prefix goes to the end: <g>Hört</g> gut <g>zu</g>.",
      "uk": "Форму ihr використовують, щоб дати вказівку групі людей, до яких звертаються на «ти». Вона збігається з формою ihr у теперішньому часі, але без «ihr»: ihr lernt → <g>Lernt</g>! ihr macht → <g>Macht</g> eine Pause!<br>Приклад: <g>Wiederholt</g> jeden Tag die Wörter! <g>Schreibt</g> die Sätze auf!<br>У «sein» так: <g>Seid</g> pünktlich!<br>У відокремлюваних дієслів префікс іде в кінець: <g>Hört</g> gut <g>zu</g>.",
      "ru": "Форму ihr используют, чтобы дать указание группе людей, к которым обращаются на «ты». Она совпадает с формой ihr в настоящем времени, но без «ihr»: ihr lernt → <g>Lernt</g>! ihr macht → <g>Macht</g> eine Pause!<br>Пример: <g>Wiederholt</g> jeden Tag die Wörter! <g>Schreibt</g> die Sätze auf!<br>У «sein» так: <g>Seid</g> pünktlich!<br>У отделяемых глаголов приставка уходит в конец: <g>Hört</g> gut <g>zu</g>."
    }
  },
  {
    "id": "unbestimmte_pronomen",
    "title": {
      "de": "Unbestimmte Pronomen: alles, etwas, nichts, man",
      "en": "Indefinite pronouns: alles, etwas, nichts, man",
      "uk": "Неозначені займенники: alles, etwas, nichts, man",
      "ru": "Неопределённые местоимения: alles, etwas, nichts, man"
    },
    "explanation": {
      "de": "Unbestimmte Pronomen nennen keine genaue Sache oder Person.<br><g>alles</g> = die ganze Menge: Hier ist <g>alles</g> frisch.<br><g>etwas</g> = eine unbekannte Sache: Möchten Sie <g>etwas</g> trinken?<br><g>nichts</g> = keine Sache: Ich habe noch <g>nichts</g> gegessen.<br><g>man</g> = irgendjemand, die Leute allgemein: Hier <g>kann man</g> gut einkaufen. Das Verb steht in der er/sie/es-Form.",
      "en": "Indefinite pronouns do not name a specific thing or person.<br><g>alles</g> = everything: Hier ist <g>alles</g> frisch.<br><g>etwas</g> = something unknown: Möchten Sie <g>etwas</g> trinken?<br><g>nichts</g> = no thing: Ich habe noch <g>nichts</g> gegessen.<br><g>man</g> = someone, people in general: Hier <g>kann man</g> gut einkaufen. The verb is in the er/sie/es-form.",
      "uk": "Неозначені займенники не називають конкретної речі чи особи.<br><g>alles</g> = усе: Hier ist <g>alles</g> frisch.<br><g>etwas</g> = щось невідоме: Möchten Sie <g>etwas</g> trinken?<br><g>nichts</g> = жодної речі: Ich habe noch <g>nichts</g> gegessen.<br><g>man</g> = хтось, люди загалом: Hier <g>kann man</g> gut einkaufen. Дієслово стоїть у формі er/sie/es.",
      "ru": "Неопределённые местоимения не называют конкретную вещь или человека.<br><g>alles</g> = всё: Hier ist <g>alles</g> frisch.<br><g>etwas</g> = что-то неизвестное: Möchten Sie <g>etwas</g> trinken?<br><g>nichts</g> = ничего: Ich habe noch <g>nichts</g> gegessen.<br><g>man</g> = кто-то, люди вообще: Hier <g>kann man</g> gut einkaufen. Глагол стоит в форме er/sie/es."
    }
  },
  {
    "id": "welch_demonstrativartikel",
    "title": {
      "de": "Fragewort welch- und Demonstrativartikel",
      "en": "Question word welch- and demonstrative articles",
      "uk": "Питальне слово welch- та вказівні артиклі",
      "ru": "Вопросительное слово welch- и указательные артикли"
    },
    "explanation": {
      "de": "Mit <g>welch-</g> fragt man nach einer Auswahl: <g>Welcher</g> Ring gefällt dir? <g>Welchen</g> Ring möchten Sie?<br>Die Endungen sind wie beim bestimmten Artikel: Nominativ <g>welcher</g> (m.), <g>welches</g> (n.), <g>welche</g> (f./Pl.). Akkusativ: nur maskulin ändert sich: <g>welchen</g>.<br>Als Antwort zeigt man mit <g>dieser / diese / dieses</g> (Akkusativ: <g>diesen</g>): <g>Diesen</g> Ring möchte ich.",
      "en": "You use <g>welch-</g> to ask about a choice: <g>Welcher</g> Ring gefällt dir? (Which ring do you like?) <g>Welchen</g> Ring möchten Sie?<br>The endings are like those of the definite article: nominative <g>welcher</g> (m.), <g>welches</g> (n.), <g>welche</g> (f./pl.). Accusative: only the masculine changes: <g>welchen</g>.<br>In the answer you point with <g>dieser / diese / dieses</g> (accusative: <g>diesen</g>): <g>Diesen</g> Ring möchte ich.",
      "uk": "За допомогою <g>welch-</g> питають про вибір: <g>Welcher</g> Ring gefällt dir? (Яка каблучка тобі подобається?) <g>Welchen</g> Ring möchten Sie?<br>Закінчення такі, як у означеного артикля: називний <g>welcher</g> (ч. р.), <g>welches</g> (с. р.), <g>welche</g> (ж. р./множина). Знахідний: змінюється лише чоловічий рід: <g>welchen</g>.<br>У відповіді вказують за допомогою <g>dieser / diese / dieses</g> (знахідний: <g>diesen</g>): <g>Diesen</g> Ring möchte ich.",
      "ru": "С помощью <g>welch-</g> спрашивают о выборе: <g>Welcher</g> Ring gefällt dir? (Какое кольцо тебе нравится?) <g>Welchen</g> Ring möchten Sie?<br>Окончания такие же, как у определённого артикля: именительный <g>welcher</g> (м. р.), <g>welches</g> (ср. р.), <g>welche</g> (ж. р./мн. ч.). Винительный: меняется только мужской род: <g>welchen</g>.<br>В ответе указывают с помощью <g>dieser / diese / dieses</g> (винительный: <g>diesen</g>): <g>Diesen</g> Ring möchte ich."
    }
  },
  {
    "id": "praeposition_fuer_akkusativ",
    "title": {
      "de": "Die Präposition für + Akkusativ",
      "en": "The preposition für + accusative",
      "uk": "Прийменник für + знахідний відмінок",
      "ru": "Предлог für + винительный падеж"
    },
    "explanation": {
      "de": "Mit <g>für</g> nennt man, wer etwas bekommt oder wem etwas nützt. Frage: <b>Für wen</b>?<br>Die Präposition steht immer mit dem <b>Akkusativ</b>: <g>für den</g> Vater (m.), <g>für das</g> Kind (n.), <g>für die</g> Mutter (f.), <g>für die</g> Kinder (Pl.).<br>Auch mit Possessivartikel: <g>für meinen</g> Vater, <g>für meine</g> Mutter.<br>Beispiel: Ich habe ein Geschenk <g>für dich</g> gekauft. (Personalpronomen: <g>für mich, dich, ihn, sie, uns</g>.)",
      "en": "You use <g>für</g> to say who gets something or who benefits. Question: <b>Für wen</b>? (for whom)<br>The preposition always takes the <b>accusative</b>: <g>für den</g> Vater (m.), <g>für das</g> Kind (n.), <g>für die</g> Mutter (f.), <g>für die</g> Kinder (pl.).<br>Also with possessive articles: <g>für meinen</g> Vater, <g>für meine</g> Mutter.<br>Example: Ich habe ein Geschenk <g>für dich</g> gekauft. (Personal pronouns: <g>für mich, dich, ihn, sie, uns</g>.)",
      "uk": "За допомогою <g>für</g> називають, хто щось отримує або кому це корисно. Питання: <b>Für wen</b>? (для кого?)<br>Прийменник завжди вживається зі <b>знахідним відмінком</b>: <g>für den</g> Vater (ч. р.), <g>für das</g> Kind (с. р.), <g>für die</g> Mutter (ж. р.), <g>für die</g> Kinder (множина).<br>Так само з присвійними артиклями: <g>für meinen</g> Vater, <g>für meine</g> Mutter.<br>Приклад: Ich habe ein Geschenk <g>für dich</g> gekauft. (Особові займенники: <g>für mich, dich, ihn, sie, uns</g>.)",
      "ru": "С помощью <g>für</g> называют, кто что-то получает или кому это полезно. Вопрос: <b>Für wen</b>? (для кого?)<br>Предлог всегда употребляется с <b>винительным падежом</b>: <g>für den</g> Vater (м. р.), <g>für das</g> Kind (ср. р.), <g>für die</g> Mutter (ж. р.), <g>für die</g> Kinder (мн. ч.).<br>Так же с притяжательными артиклями: <g>für meinen</g> Vater, <g>für meine</g> Mutter.<br>Пример: Ich habe ein Geschenk <g>für dich</g> gekauft. (Личные местоимения: <g>für mich, dich, ihn, sie, uns</g>.)"
    }
  }
];
