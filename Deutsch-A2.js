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
  {
    "id": "perfekt",
    "title": {"de": "Perfekt", "en": "Present perfect (Perfekt)", "uk": "Перфект", "ru": "Перфект"},
    "explanation": {
      "de": "Das Perfekt nutzen wir für Aktionen in der Vergangenheit. Es besteht aus <g>haben</g> oder <g>sein</g> на Position 2 und dem <g>Partizip II</g> am Ende des Satzes.<br>Beispiel: Ich <g>habe</g> Deutsch <g>gelernt</g>. Er <g>ist</g> nach Berlin <g>geflogen</g>.",
      "en": "We use Perfekt to talk about past actions. It is formed using <g>haben</g> or <g>sein</g> in the 2nd position and the <g>Partizip II</g> at the very end of the sentence.<br>Example: Ich <g>habe</g> Deutsch <g>gelernt</g>. Er <g>ist</g> nach Berlin <g>geflogen</g>.",
      "uk": "Перфект використовується для опису дій у минулому. Він складається з допоміжного дієслова <g>haben</g> або <g>sein</g> на другому місці та основного дієслова у формі <g>Partizip II</g> в самому кінці речення.<br>Приклад: Ich <g>habe</g> Deutsch <g>gelernt</g>. Er <g>ist</g> nach Berlin <g>geflogen</g>.",
      "ru": "Перфект используется для описания действий в прошлом. Он состоит из вспомогательного глагола <g>haben</g> или <g>sein</g> на втором месте и основного глагола в форме <g>Partizip II</g> в самом конце предложения.<br>Пример: Ich <g>habe</g> Deutsch <g>gelernt</g>. Er <g>ist</g> nach Berlin <g>geflogen</g>."
    }
  },
  {
    "id": "praeteritum",
    "title": {"de": "Präteritum", "en": "Simple past (Präteritum)", "uk": "Претерит", "ru": "Претерит"},
    "explanation": {
      "de": "Das Präteritum ist eine andere Vergangenheitsform. Auf A2-Niveau benutzen wir es meistens nur für <g>war</g> (sein) und <g>hatte</g> (haben).<br>Beispiel: Letztes Jahr <g>war</g> ich in Deutschland und <g>hatte</g> viel Zeit.",
      "en": "Präteritum is another past tense. At the A2 level, we mostly use it only for <g>war</g> (to be) and <g>hatte</g> (to have).<br>Example: Letztes Jahr <g>war</g> ich in Deutschland und <g>hatte</g> viel Zeit.",
      "uk": "Претерит — це ще одна форма минулого часу. На рівні А2 ми зазвичай використовуємо його лише для дієслів <g>war</g> (був/була) та <g>hatte</g> (мав/мала).<br>Приклад: Letztes Jahr <g>war</g> ich in Deutschland und <g>hatte</g> viel Zeit.",
      "ru": "Претерит — это еще одна форма прошедшего времени. На уровне А2 мы обычно используем его только для глаголов <g>war</g> (был/была) и <g>hatte</g> (имел/имела).<br>Пример: Letztes Jahr <g>war</g> ich in Deutschland und <g>hatte</g> viel Zeit."
    }
  },
  {
    "id": "modalverben",
    "title": {"de": "Modalverben (Präsens)", "en": "Modal verbs (present)", "uk": "Модальні дієслова (теперішній час)", "ru": "Модальные глаголы (настоящее время)"},
    "explanation": {
      "de": "Modalverben (<g>können, müssen, wollen, dürfen, sollen, mögen</g>) stehen auf Position 2. Das zweite Verb steht im Infinitiv ganz am Ende.<br>Achtung: Die Formen für 'ich' und 'er/sie/es' sind gleich (ich <g>kann</g>, er <g>kann</g>).",
      "en": "Modal verbs (<g>können, müssen, wollen, dürfen, sollen, mögen</g>) change their form and sit in the 2nd position. The main verb goes to the end of the sentence in its infinitive form.<br>Note: 'ich' and 'er/sie/es' forms are identical (ich <g>kann</g>, er <g>kann</g>).",
      "uk": "Модальні дієслова (<g>können, müssen, wollen, dürfen, sollen, mögen</g>) стоять на другому місці у реченні. Друге (основне) дієслово стоїть у початковій формі (інфінітив) в самому кінці.<br>Увага: форми для 'ich' та 'er/sie/es' збігаються (ich <g>kann</g>, er <g>kann</g>).",
      "ru": "Модальные глаголы (<g>können, müssen, wollen, dürfen, sollen, mögen</g>) стоят на втором месте в предложении. Второй (основной) глагол стоит в начальной форме (инфинитив) в самом конце.<br>Внимание: формы для 'ich' и 'er/sie/es' совпадают (ich <g>kann</g>, er <g>kann</g>)."
    }
  },
  {
    "id": "modalverben_praeteritum",
    "title": {"de": "Modalverben im Präteritum", "en": "Modal verbs in the simple past", "uk": "Модальні дієслова у претериті", "ru": "Модальные глаголы в претерите"},
    "explanation": {
      "de": "In der Vergangenheit verlieren Modalverben ihren Umlaut (ä, ö, ü) und bekommen ein '-te-'.<br>Beispiel: können -> ich <g>konnte</g>, müssen -> ich <g>musste</g>, wollen -> ich <g>wollte</g>.",
      "en": "In the past tense, modal verbs lose their umlauts (ä, ö, ü) and add '-te-'.<br>Example: können -> ich <g>konnte</g>, müssen -> ich <g>musste</g>, wollen -> ich <g>wollte</g>.",
      "uk": "У минулому часі модальні дієслова втрачають умлаут (ä, ö, ü) та отримують суфікс '-te-'.<br>Приклад: können -> ich <g>konnte</g>, müssen -> ich <g>musste</g>, wollen -> ich <g>wollte</g>.",
      "ru": "В прошедшем времени модальные глаголы теряют умлаут (ä, ö, ü) и получают суффикс '-te-'.<br>Пример: können -> ich <g>konnte</g>, müssen -> ich <g>musste</g>, wollen -> ich <g>wollte</g>."
    }
  },
  {
    "id": "weil_satz",
    "title": {"de": "Nebensatz mit weil", "en": "Subordinate clause with weil (because)", "uk": "Підрядне речення з weil (тому що)", "ru": "Придаточное предложение с weil (поэтому что)"},
    "explanation": {
      "de": "Der Konnektor <g>weil</g> antwortet auf die Frage 'Warum?'. Nach <g>weil</g> steht das konjugierte Verb ganz am Ende des Satzes.<br>Beispiel: Ich lerne Deutsch, <g>weil</g> ich in Deutschland leben <g>möchte</g>.",
      "en": "The conjunction <g>weil</g> answers the question 'Why?'. In a <g>weil</g>-clause, the conjugated verb moves to the very end of the sentence.<br>Example: Ich lerne Deutsch, <g>weil</g> ich in Deutschland leben <g>möchte</g>.",
      "uk": "Сполучник <g>weil</g> відповідає на питання 'Чому?'. У підрядному реченні після <g>weil</g> змінюване дієслово йде на самий кінець речення.<br>Приклад: Ich lerne Deutsch, <g>weil</g> ich in Deutschland leben <g>möchte</g>.",
      "ru": "Союз <g>weil</g> отвечает на вопрос 'Почему?'. В придаточном предложении после <g>weil</g> спрягаемый глагол уходит в самый конец предложения.<br>Пример: Ich lerne Deutsch, <g>weil</g> ich in Deutschland leben <g>möchte</g>."
    }
  },
  {
    "id": "dass_satz",
    "title": {"de": "Nebensatz mit dass", "en": "Subordinate clause with dass (that)", "uk": "Підрядне речення з dass (що)", "ru": "Придаточное предложение с dass (что)"},
    "explanation": {
      "de": "Der Konnektor <g>dass</g> verbindet Sätze nach Verben des Denkens, Sagens oder Fühlens (glauben, sagen, wissen). Das konjugierte Verb steht am Ende.<br>Beispiel: Ich weiß, <g>dass</g> du recht <g>hast</g>.",
      "en": "The conjunction <g>dass</g> connects clauses after verbs of thinking, saying, or feeling (glauben, sagen, wissen). The conjugated verb goes to the end.<br>Example: Ich weiß, <g>dass</g> du recht <g>hast</g>.",
      "uk": "Сполучник <g>dass</g> з'єднує речення після дієслів думки, мовлення або відчуття (glauben, sagen, wissen). Змінюване дієслово стоїть у кінці.<br>Приклад: Ich weiß, <g>dass</g> du recht <g>hast</g>.",
      "ru": "Союз <g>dass</g> соединяет предложения после глаголов мысли, речи или чувства (glauben, sagen, wissen). Спрягаемый глагол стоит в конце.<br>Пример: Ich weiß, <g>dass</g> du recht <g>hast</g>."
    }
  },
  {
    "id": "wenn_satz",
    "title": {"de": "Nebensatz mit wenn", "en": "Subordinate clause with wenn (if / when)", "uk": "Підрядне речення з wenn (якщо / коли)", "ru": "Придаточное предложение с wenn (если/когда)"},
    "explanation": {
      "de": "Wir benutzen <g>wenn</g> für Bedingungen (Wenn...) або für wiederholte Aktionen in der Gegenwart/Vergangenheit. Das Verb steht am Ende.<br>Beispiel: <g>Wenn</g> es regnet, <g>bleibe</g> ich zu Hause.",
      "en": "We use <g>wenn</g> for conditions (If...) or repeated actions in the present/past. The verb goes to the end.<br>Example: <g>Wenn</g> es regnet, <g>bleibe</g> ich zu Hause.",
      "uk": "Ми використовуємо <g>wenn</g> для умов (Якщо...) або для повторюваних дій у теперішньому чи минулому часі (Коли...). Дієслово йде на кінець.<br>Приклад: <g>Wenn</g> es regnet, <g>bleibe</g> ich zu Hause.",
      "ru": "Мы используем <g>wenn</g> для условий (Если...) или для повторяющихся действий в настоящем или прошлом (Когда...). Глагол уходит на конец.<br>Пример: <g>Wenn</g> es regnet, <g>bleibe</g> ich zu Hause."
    }
  },
  {
    "id": "als_wenn_schon_erst",
    "title": {"de": "als/wenn (Vergangenheit) und schon/erst", "en": "als/wenn (past) and schon/erst (already/only)", "uk": "als/wenn (минулий час) і schon/erst (вже/лише)", "ru": "als/wenn (прошедшее время) и schon/erst (уже/только)"},
    "explanation": {
      "de": "Für einmalige Aktionen in der Vergangenheit nutzen wir <g>als</g>, für wiederholte nutzen wir <g>wenn</g>. <g>Schon</g> bedeutet früher/mehr als erwartet, <g>erst</g> bedeutet später/weniger.<br>Beispiel: <g>Als</g> ich Kind war, war ich <g>erst</g> einmal in Berlin.",
      "en": "For single past events we use <g>als</g>, for repeated past events we use <g>wenn</g>. <g>Schon</g> means already (sooner/more than expected), <g>erst</g> means only/not until (later/less).<br>Example: <g>Als</g> ich Kind war, war ich <g>erst</g> einmal in Berlin.",
      "uk": "Для одноразових подій у минулому використовуємо <g>als</g>, для повторюваних — <g>wenn</g>. Слово <g>schon</g> означає 'вже' (раніше, ніж очікувалось), а <g>erst</g> — 'лише / тільки' (пізніше або менше).<br>Приклад: <g>Als</g> ich Kind war, war ich <g>erst</g> einmal in Berlin.",
      "ru": "Для однократных событий в прошлом используем <g>als</g>, для повторяющихся — <g>wenn</g>. Слово <g>schon</g> означает 'уже' (раньше, чем ожидалось), а <g>erst</g> — 'только / всего лишь' (позже или меньше).<br>Пример: <g>Als</g> ich Kind war, war ich <g>erst</g> einmal in Berlin."
    }
  },
  {
    "id": "dativ_verben",
    "title": {"de": "Verben mit Dativ", "en": "Verbs with dative", "uk": "Дієслова з давальним відмінком", "ru": "Глаголы с дательным падежом"},
    "explanation": {
      "de": "Einige Verben brauchen immer ein Objekt im Dativ (Frage: Wem?). Wichtige Verben: <g>helfen, danken, gefallen, gehören, schmecken</g>.<br>Beispiel: Ich helfe <g>dem</g> Mann (Maskulin: der -> dem).",
      "en": "Some verbs always require an object in the dative case (Question: To whom?). Key verbs: <g>helfen, danken, gefallen, gehören, schmecken</g>.<br>Example: Ich helfe <g>dem</g> Mann (Masculine: der -> dem).",
      "uk": "Деякі дієслова завжди вимагають після себе давального відмінка (Питання: Кому?). Важливі дієслова: <g>helfen, danken, gefallen, gehören, schmecken</g>.<br>Приклад: Ich helfe <g>dem</g> Mann (Чоловічий рід: der -> dem).",
      "ru": "Некоторые глаголы всегда требуют после себя дательного падежа (Вопрос: Кому?). Важные глаголы: <g>helfen, danken, gefallen, gehören, schmecken</g>.<br>Пример: Ich helfe <g>dem</g> Mann (Мужской род: der -> dem)."
    }
  },
  {
    "id": "dativ_akkusativ_verben",
    "title": {"de": "Verben mit Dativ und Akkusativ", "en": "Verbs with dative and accusative", "uk": "Дієслова з давальним і знахідним відмінками", "ru": "Глаголы с дательным и винительным падежами"},
    "explanation": {
      "de": "Verben wie <g>geben, zeigen, schenken, bringen</g> haben zwei Objekte: Die Person steht im <g>Dativ</g> (Wem?), die Sache steht im <g>Akkusativ</g> (Was?).<br>Beispiel: Ich gebe <g>dem Kind</g> (Dativ) <g>einen Ball</g> (Akkusativ).",
      "en": "Verbs like <g>geben, zeigen, schenken, bringen</g> have two objects: the person is in the <g>dative</g> (To whom?), and the thing is in the <g>accusative</g> (What?).<br>Example: Ich gebe <g>dem Kind</g> (Dative) <g>einen Ball</g> (Accusative).",
      "uk": "Дієслова на кшталт <g>geben, zeigen, schenken, bringen</g> мають два додатки: особа завжди стоїть у <g>давальному</g> відмінку (Кому?), а річ — у <g>знахідному</g> (Що?).<br>Приклад: Ich gebe <g>dem Kind</g> (Давальний) <g>einen Ball</g> (Знахідний).",
      "ru": "Глаголы вроде <g>geben, zeigen, schenken, bringen</g> имеют два дополнения: лицо всегда стоит в <g>дательном</g> падеже (Кому?), а вещь — в <g>винительном</g> (Что?).<br>Пример: Ich gebe <g>dem Kind</g> (Дательный) <g>einen Ball</g> (Винительный)."
    }
  },
  {
    "id": "wechselpraepositionen",
    "title": {"de": "Wechselpräpositionen (Akkusativ/Dativ)", "en": "Two-way prepositions (accusative/dative)", "uk": "Прийменники подвійного керування (знахідний/давальний)", "ru": "Предлоги двойного управления (винительный/дательный)"},
    "explanation": {
      "de": "Neun Präpositionen (z.B. <g>in, auf, an, unter</g>) wechseln den Kasus: Wohin? (Aktion/Bewegung) -> <g>Akkusativ</g>. Wo? (Position/Ruhe) -> <g>Dativ</g>.<br>Beispiel: Ich hänge das Bild <g>an die</g> Wand (Akk.). Das Bild hängt <g>an der</g> Wand (Dat.).",
      "en": "Nine prepositions (e.g., <g>in, auf, an, unter</g>) change case: Where to? (movement/action) -> <g>Accusative</g>. Where? (location/rest) -> <g>Dative</g>.<br>Example: Ich hänge das Bild <g>an die</g> Wand (Acc.). Das Bild hängt <g>an der</g> Wand (Dat.).",
      "uk": "Дев'ять прийменників (напр., <g>in, auf, an, unter</g>) змінюють відмінок: Куди? (рух/дія) -> <g>Знахідний</g>. Де? (статичне місце) -> <g>Давальний</g>.<br>Приклад: Ich hänge das Bild <g>an die</g> Wand (Знахідний). Das Bild hängt <g>an der</g> Wand (Давальний).",
      "ru": "Девять предлогов (напр., <g>in, auf, an, unter</g>) меняют падеж: Куда? (движение/действие) -> <g>Винительный</g>. Где? (положение/покой) -> <g>Дательный</g>.<br>Пример: Ich hänge das Bild <g>an die</g> Wand (Вин.). Das Bild hängt <g>an der</g> Wand (Дат.)."
    }
  },
  {
    "id": "lokale_praepositionen",
    "title": {"de": "Lokale Präpositionen und Wegbeschreibung", "en": "Prepositions of place and directions", "uk": "Прийменники місця та опис маршруту", "ru": "Предлоги места и описание маршрута"},
    "explanation": {
      "de": "Wir nutzen Präpositionen wie <g>zu, nach, in, an, über</g> für Richtungen. <g>Zu</g> steht oft bei Personen/Geschäften (Dativ), <g>nach</g> bei Städten/Ländern ohne Artikel.<br>Beispiel: Ich gehe <g>zum</g> Arzt. Ich fliege <g>nach</g> Paris.",
      "en": "We use prepositions like <g>zu, nach, in, an, über</g> to describe directions. <g>Zu</g> is used for people or businesses (+ Dative), <g>nach</g> for cities and countries without articles.<br>Example: Ich gehe <g>zum</g> Arzt. Ich fliege <g>nach</g> Paris.",
      "uk": "Ми використовуємо прийменники <g>zu, nach, in, an, über</g> для вказівки напрямку. Напрямок <g>zu</g> вживаємо до людей або установ (+ Давальний), а <g>nach</g> — до міст і країн без артикля.<br>Приклад: Ich gehe <g>zum</g> Arzt. Ich fliege <g>nach</g> Paris.",
      "ru": "Мы используем предлоги <g>zu, nach, in, an, über</g> для указания направления. Направление <g>zu</g> используется к людям или учреждениям (+ Дательный), а <g>nach</g> — к городам и странам без артикля.<br>Пример: Ich gehe <g>zum</g> Arzt. Ich fliege <g>nach</g> Paris."
    }
  },
  {
    "id": "temporale_praepositionen",
    "title": {"de": "Temporale Präpositionen", "en": "Prepositions of time", "uk": "Прийменники часу", "ru": "Предлоги времени"},
    "explanation": {
      "de": "Präpositionen für Zeitpunkte und Dauer: <g>vor</g> (Vergangenheit), <g>nach</g> (Zukunft/Ablauf), <g>seit</g> (startete in Vergangenheit, dauert an), <g>für</g> (+ Akkusativ, Dauer).<br>Beispiel: <g>Seit einem</g> Jahr lerne ich Deutsch <g>für einen</g> Monat.",
      "en": "Prepositions for points in time or duration: <g>vor</g> (past event), <g>nach</g> (after an event), <g>seit</g> (started in the past, still ongoing + Dative), <g>für</g> (for a duration + Accusative).<br>Example: <g>Seit einem</g> Jahr lerne ich Deutsch <g>für einen</g> Monat.",
      "uk": "Прийменники для позначення часу та тривалості: <g>vor</g> (до/тому назад), <g>nach</g> (після), <g>seit</g> (з певного часу в минулому і триває досі + Давальний), <g>für</g> (на якийсь час + Знахідний).<br>Приклад: <g>Seit einem</g> Jahr lerne ich Deutsch <g>für einen</g> Monat.",
      "ru": "Предлоги для обозначения времени и длительности: <g>vor</g> (до/назад), <g>nach</g> (после), <g>seit</g> (с какого-то времени в прошлом и продолжается сейчас + Дательный), <g>für</g> (на какое-то время + Винительный).<br>Пример: <g>Seit einem</g> Jahr lerne ich Deutsch <g>für einen</g> Monat."
    }
  },
  {
    "id": "adjektivendungen",
    "title": {"de": "Adjektivendungen nach unbestimmtem Artikel/Possessivartikel", "en": "Adjective endings after the indefinite/possessive article", "uk": "Закінчення прикметників після неозначеного/присвійного артикля", "ru": "Окончания прилагательных после неопределённого/притятяжательного артикля"},
    "explanation": {
      "de": "Wenn vor dem Adjektiv ein Wort wie 'ein' oder 'mein' steht, zeigt das Adjektiv im Nominativ das Signal des Nomens: maskulin (<g>-er</g>), neutral (<g>-es</g>), feminin (<g>-e</g>). Im Akkusativ Maskulin ist es immer <g>-en</g>.<br>Beispiel: Das ist ein <g>guter</g> Mann. Ich habe ein <g>schönes</g> Auto.",
      "en": "When a word like 'ein' or 'mein' comes before an adjective, the adjective in the nominative takes the gender signal: masculine (<g>-er</g>), neutral (<g>-es</g>), feminine (<g>-e</g>). In the accusative masculine, it is always <g>-en</g>.<br>Example: Das ist ein <g>guter</g> Mann. Ich habe ein <g>schönes</g> Auto.",
      "uk": "Якщо перед прикметником стоїть слово 'ein' або 'mein', прикметник у називному відмінку переймає закінчення роду: чоловічий (<g>-er</g>), середній (<g>-es</g>), жіночий (<g>-e</g>). У знахідному відмінку чол. роду завжди буде <g>-en</g>.<br>Приклад: Das ist ein <g>guter</g> Mann. Ich habe ein <g>schönes</g> Auto.",
      "ru": "Если перед прилагательным стоит слово 'ein' или 'mein', прилагательное в именительном падеже принимает окончание рода: мужской (<g>-er</g>), средний (<g>-es</g>), женский (<g>-e</g>). В винительном падеже муж. рода всегда будет <g>-en</g>.<br>Пример: Das ist ein <g>guter</g> Mann. Ich habe ein <g>schönes</g> Auto."
    }
  },
  {
    "id": "was_fuer_ein",
    "title": {"de": "Fragewort „Was für ein …?“", "en": "Question word „What kind of …?“", "uk": "Питальне слово «Який саме …?»", "ru": "Вопросительное слово «Какой именно …?»"},
    "explanation": {
      "de": "Mit <g>Was für ein...</g> fragt man nach Eigenschaften oder einer Auswahl. Das Wort 'ein' ändert sich nach Kasus und Numerus.<br>Beispiel: <g>Was für ein</g> Auto hast du? (Neutral, Akkusativ).",
      "en": "We use <g>Was für ein...</g> to ask about characteristics or options (What kind of...?). The word 'ein' changes based on case and gender.<br>Example: <g>Was für ein</g> Auto hast du? (Neutral, Accusative).",
      "uk": "За допомогою <g>Was für ein...</g> запитують про якість або вибір речі (Що це за...? Який саме...?). Слово 'ein' змінюється залежно від відмінка та роду.<br>Приклад: <g>Was für ein</g> Auto hast du? (Середній рід, Знахідний відмінок).",
      "ru": "С помощью <g>Was für ein...</g> спрашивают о качестве или выборе вещи (Что за...? Какой именно...?). Слово 'ein' меняется в зависимости от падежа и рода.<br>Пример: <g>Was für ein</g> Auto hast du? (Средний род, Винительный падеж)."
    }
  },
  {
    "id": "komparativ",
    "title": {"de": "Komparativ und Vergleiche (als, (nicht) so … wie)", "en": "Comparative and comparisons (than, as … as)", "uk": "Компаратив і порівняння (ніж, такий самий … як)", "ru": "Компаратив и сравнения (чем, такой же … как)"},
    "explanation": {
      "de": "Der Komparativ bekommt ein <g>-er</g> (oft mit Umlaut: alt -> älter). Für Gleichheit nutzen wir <g>so ... wie</g>. Für Unterschiede nutzen wir den Komparativ + <g>als</g>.<br>Beispiel: Er ist <g>so groß wie</g> ich. Вона працює <g>mehr als</g> er.",
      "en": "The comparative form adds <g>-er</g> (often with an umlaut: alt -> älter). To show equality, use <g>so ... wie</g>. For differences, use the comparative + <g>als</g>.<br>Example: Er ist <g>so groß wie</g> ich. Er ist <g>älter als</g> ich.",
      "uk": "Вищий ступінь прикметників (компаратив) отримує закінчення <g>-er</g> (часто з умлаутом: alt -> älter). Для порівняння однакових речей використовуємо <g>so ... wie</g> (такий же ... як), для різних — компаратив + <g>als</g> (ніж).<br>Приклад: Er ist <g>so groß wie</g> ich. Er ist <g>älter als</g> ich.",
      "ru": "Сравнительная степень прилагательных (компаратив) получает окончание <g>-er</g> (часто с умлаутом: alt -> älter). Для сравнения одинаковых вещей используем <g>so ... wie</g> (такой же ... как), для разных — компаратив + <g>als</g> (чем).<br>Пример: Er ist <g>so groß wie</g> ich. Er ist <g>älter als</g> ich."
    }
  },
  {
    "id": "superlativ",
    "title": {"de": "Superlativ", "en": "Superlative", "uk": "Суперлатив", "ru": "Суперлатив"},
    "explanation": {
      "de": "Der Superlativ ist die höchste Stufe. Nach Verben nutzen wir meistens <g>am ...-sten</g>. Vor Nomen nutzen wir den bestimmten Artikel + <g>-ste</g>.<br>Beispiel: Kaffee schmeckt mir <g>am besten</g>. Das є das <g>schönste</g> Haus.",
      "en": "The superlative is the highest form. After verbs, we usually use <g>am ...-sten</g>. Before nouns, we use the definite article + <g>-ste</g> with correct adjective ending.<br>Example: Kaffee schmeckt mir <g>am besten</g>. Das ist das <g>schönste</g> Haus.",
      "uk": "Найвищий ступінь прикметників (суперлатив) виражає найвищу якість. Після дієслів зазвичай використовуємо форму <g>am ...-sten</g>. Перед іменниками — означений артикль + закінчення <g>-ste</g>.<br>Приклад: Kaffee schmeckt mir <g>am besten</g>. Das ist das <g>schönste</g> Haus.",
      "ru": "Превосходная степень прилагательных (суперлатив) выражает наивысшее качество. После глаголов обычно используем форму <g>am ...-sten</g>. Перед существительными — определенный артикль + окончание <g>-ste</g>.<br>Пример: Kaffee schmeckt mir <g>am besten</g>. Das ist das <g>schönste</g> Haus."
    }
  },
  {
    "id": "demonstrativartikel",
    "title": {"de": "Demonstrativartikel dieser, diese, dieses", "en": "Demonstrative article dieser, diese, dieses (this)", "uk": "Вказівний артикль dieser, diese, dieses (цей)", "ru": "Указательный артикль dieser, diese, dieses (этот)"},
    "explanation": {
      "de": "Mit <g>dieser, diese, dieses</g> zeigt man auf eine konkrete Person oder Sache. Sie deklarieren sich genau wie der bestimmte Artikel (der, die, das).<br>Beispiel: Mir gefällt <g>dieses</g> Buch (Buch ist neutral -> dieses).",
      "en": "We use <g>dieser, diese, dieses</g> to point out a specific person or object (this). They decline exactly like definite articles (der, die, das).<br>Example: Mir gefällt <g>dieses</g> Buch (Buch is neutral -> dieses).",
      "uk": "Вказівні артиклі <g>dieser, diese, dieses</g> вказують на конкретну особу чи річ (цей, ця, це). Вони відмінюються точно так само, як і означені артиклі (der, die, das).<br>Приклад: Mir gefällt <g>dieses</g> Buch (нейтральний рід -> dieses).",
      "ru": "Указательные артикли <g>dieser, diese, dieses</g> указывают на конкретное лицо или вещь (этот, эта, это). Они склоняются точно так же, как и определенные артикли (der, die, das).<br>Пример: Mir gefällt <g>dieses</g> Buch (средний род -> dieses)."
    }
  },
  {
    "id": "hoeflichkeit_konjunktiv",
    "title": {"de": "Höfliche Bitten (Konjunktiv II)", "en": "Polite requests (subjunctive II)", "uk": "Ввічливі прохання (кон'юнктив II)", "ru": "Вежливые просьбы (конъюнктив II)"},
    "explanation": {
      "de": "Für extra höfliche Bitten benutzen wir den Konjunktiv II. Meistens benutzen wir <g>hätte</g>, <g>wäre</g> oder die Kombination <g>würde</g> + Infinitiv am Ende.<br>Beispiel: Ich <g>hätte</g> gern einen Kaffee. <g>Würden</g> Sie mir bitte <g>helfen</g>?",
      "en": "For extra polite requests, we use Subjunctive II. Mostly we use <g>hätte</g>, <g>wäre</g> or the combination <g>würde</g> + infinitive at the end.<br>Example: Ich <g>hätte</g> gern einen Kaffee. <g>Würden</g> Sie mir bitte <g>helfen</g>?",
      "uk": "Для дуже ввічливих прохань використовується сослагательний спосіб (Кон'юнктив ІІ). Найчастіше ми вживаємо форми <g>hätte</g>, <g>wäre</g> або комбінацію <g>würde</g> + інфінітив у кінці речення.<br>Приклад: Ich <g>hätte</g> gern einen Kaffee. <g>Würden</g> Sie mir bitte <g>helfen</g>?",
      "ru": "Для очень вежливых просьб используется сослагательное наклонение (Конъюнктив II). Чаще всего мы используем формы <g>hätte</g>, <g>wäre</g> или комбинацию <g>würde</g> + инфинитив в конце предложения.<br>Пример: Ich <g>hätte</g> gern einen Kaffee. <g>Würden</g> Sie mir bitte <g>helfen</g>?"
    }
  },
  {
    "id": "personalpronomen",
    "title": {"de": "Personalpronomen (Nominativ/Akkusativ/Dativ)", "en": "Personal pronouns (nominative/accusative/dative)", "uk": "Особові займенники (називний/знахідний/давальний)", "ru": "Личные местоимения (именительный/винительный/дательный)"},
    "explanation": {
      "de": "Personalpronomen ändern sich je nach Kasus. Nominativ (ich/du), Akkusativ (mich/dich) und Dativ (mir/dir).<br>Beispiel: Hilfst du <g>mir</g> (Dativ)? Ich liebe <g>dich</g> (Akkusativ).",
      "en": "Personal pronouns change depending on the case: Nominative (ich/du), Accusative (mich/dich), and Dative (mir/dir).<br>Example: Hilfst du <g>mir</g> (Dative)? Ich liebe <g>dich</g> (Accusative).",
      "uk": "Особові займенники змінюють свою форму залежно від відмінка: Називний (ich/du), Знахідний (mich/dich) та Давальний (mir/dir).<br>Приклад: Hilfst du <g>mir</g> (Давальний)? Ich liebe <g>dich</g> (Знахідний).",
      "ru": "Личные местоимения изменяют свою форму в зависимости от падежа: Именительный (ich/du), Винительный (mich/dich) и Дательный (mir/dir).<br>Пример: Hilfst du <g>mir</g> (Дательный)? Ich liebe <g>dich</g> (Винительный)."
    }
  },
  {
    "id": "reflexivpronomen_akkusativ",
    "title": {"de": "Reflexivpronomen im Akkusativ", "en": "Reflexive pronouns in the accusative", "uk": "Зворотні займенники у знахідному відмінку", "ru": "Возвратные местоимения в винительном падеже"},
    "explanation": {
      "de": "Reflexive Verben brauchen ein Reflexivpronomen (z.B. <g>mich, dich, sich</g>). Es zeigt, dass die Aktion zurück zum Subjekt geht.<br>Beispiel: Ich wasche <g>mich</g>. Er freut <g>sich</g>.",
      "en": "Reflexive verbs require a reflexive pronoun (e.g., <g>mich, dich, sich</g>). It shows that the action reflects back to the subject.<br>Example: Ich wasche <g>mich</g>. Er freut <g>sich</g>.",
      "uk": "Зворотні дієслова потребують зворотного займенника (напр., <g>mich, dich, sich</g>), який є аналогом часточки '-ся'. Він показує, що дія спрямована на самого себе.<br>Приклад: Ich wasche <g>mich</g> (Я миюся). Er freut <g>sich</g> (Він радіє).",
      "ru": "Возвратные глаголы требуют возвратного местоимения (напр., <g>mich, dich, sich</g>), которое является аналогом частицы '-ся'. Оно показывает, что действие направлено на самого себя.<br>Пример: Ich wasche <g>mich</g> (Я моюсь). Er freut <g>sich</g> (Он радуется)."
    }
  },
  {
    "id": "praepositionalverben",
    "title": {"de": "Verben mit Präpositionen", "en": "Verbs with prepositions", "uk": "Дієслова з прийменниками", "ru": "Глаголы с предлогами"},
    "explanation": {
      "de": "Viele Verben haben eine feste Präposition + einen festen Kasus. Man muss sie zusammen lernen. Wichtig: <g>warten auf</g> (+ Akkusativ), <g>sprechen mit</g> (+ Dativ).<br>Beispiel: Ich warte <g>auf den</g> Bus.",
      "en": "Many verbs have a fixed preposition and a fixed case. You have to memorize them together. Key examples: <g>warten auf</g> (+ Accusative), <g>sprechen mit</g> (+ Dative).<br>Example: Ich warte <g>auf den</g> Bus.",
      "uk": "Багато дієслів мають сталий прийменник та вимагають конкретного відмінка. Їх потрібно вчити разом. Важливо: <g>warten auf</g> (+ Знахідний), <g>sprechen mit</g> (+ Давальний).<br>Приклад: Ich warte <g>auf den</g> Bus.",
      "ru": "Многие глаголы имеют фиксированный предлог и требуют конкретного падежа. Их нужно учить вместе. Важно: <g>warten auf</g> (+ Винительный), <g>sprechen mit</g> (+ Дательный).<br>Пример: Ich warte <g>auf den</g> Bus."
    }
  },
  {
    "id": "satz_mit_deshalb",
    "title": {"de": "Satz mit deshalb", "en": "Clause with deshalb (therefore)", "uk": "Речення з deshalb (тому)", "ru": "Предложение с deshalb (поэтому)"},
    "explanation": {
      "de": "<g>Deshalb</g> zeigt eine Konsequenz (Deswegen/Darum). Wichtig: <g>deshalb</g> steht auf Position 1 im Hauptsatz, direkt danach kommt das konjugierte Verb!<br>Beispiel: Ich bin krank, <g>deshalb bleibe</g> ich im Bett.",
      "en": "<g>Deshalb</g> expresses a consequence (therefore / that's why). Note: <g>deshalb</g> takes the 1st position in the main clause, followed immediately by the conjugated verb!<br>Example: Ich bin krank, <g>deshalb bleibe</g> ich im Bett.",
      "uk": "Слово <g>deshalb</g> виражає наслідок (тому / через це). Важливо: <g>deshalb</g> займає 1-шу позицію в головному реченні, тому одразу після нього стоїть дієслово!<br>Приклад: Ich bin krank, <g>deshalb bleibe</g> ich im Bett.",
      "ru": "Слово <g>deshalb</g> выражает следствие (поэтому / из-за этого). Важно: <g>deshalb</g> занимает 1-ю позицию в главном предложении, поэтому сразу после него стоит глагол!<br>Пример: Ich bin krank, <g>deshalb bleibe</g> ich im Bett."
    }
  },
  {
    "id": "hoeflichkeit_konjunktiv_a22",
    "title": {"de": "Konjunktiv II: höflich fragen, bitten und Ratschläge geben", "en": "Subjunctive II: asking, requesting and giving advice politely", "uk": "Конʼюнктив II: ввічливо питати, просити й давати поради", "ru": "Конъюнктив II: вежливо спрашивать, просить и давать советы"},
    "explanation": {
      "de": "Im Modul A2.2 erweitern wir den Konjunktiv II. Mit <g>sollte</g> geben wir Ratschläge, mit <g>könnte</g> fragen wir sehr höflich.<br>Beispiel: Du <g>solltest</g> zum Arzt gehen. <g>Könnten</g> Sie das Fenster schließen?",
      "en": "In module A2.2 we expand Subjunctive II. We use <g>sollte</g> to give advice and <g>könnte</g> to ask very politely.<br>Example: Du <g>solltest</g> zum Arzt gehen. <g>Könnten</g> Sie das Fenster schließen?",
      "uk": "У модулі А2.2 ми розширюємо використання Кон'юнктиву ІІ. Форму <g>sollte</g> використовують для порад (тобі слід було б), а <g>könnte</g> — для дуже ввічливих питань.<br>Приклад: Du <g>solltest</g> zum Arzt gehen. <g>Könnten</g> Sie das Fenster schließen?",
      "ru": "В модуле А2.2 мы расширяем использование Конъюнктива II. Форму <g>sollte</g> используют для советов (тебе следовало бы), а <g>könnte</g> — для очень вежливых вопросов.<br>Пример: Du <g>solltest</g> zum Arzt gehen. <g>Könnten</g> Sie das Fenster schließen?"
    }
  },
  {
    "id": "adjektiv_bestimmter_artikel",
    "title": {"de": "Adjektivendungen nach dem bestimmten Artikel", "en": "Adjective endings after the definite article", "uk": "Закінчення прикметників після означеного артикля", "ru": "Окончания прилагательных после определённого артикля"},
    "explanation": {
      "de": "Nach dem bestimmten Artikel (der, die, das) haben Adjektive im Nominativ immer die Endung <g>-e</g>. Im Plural und in anderen Kasus (Dativ, Akkusativ maskulin) ist die Endung meistens <g>-en</g>.<br>Beispiel: Der <g>neue</g> Kollege ist nett. Ich helfe dem <g>alten</g> Mann.",
      "en": "After the definite article (der, die, das), adjectives in the nominative always end in <g>-e</g>. In the plural and other cases (Dative, Accusative masculine), the ending is mostly <g>-en</g>.<br>Example: Der <g>neue</g> Kollege ist nett. Ich helfe dem <g>alten</g> Mann.",
      "uk": "Після означеного артикля (der, die, das) прикметники в називному відмінку завжди мають закінчення <g>-e</g>. У множині та інших відмінках (Давальний, Знахідний чол. роду) закінчення зазвичай змінюється на <g>-en</g>.<br>Приклад: Der <g>neue</g> Kollege ist nett. Ich helfe dem <g>alten</g> Mann.",
      "ru": "После определенного артикля (der, die, das) прилагательные в именительном падеже всегда имеют окончание <g>-e</g>. Во множественном числе и других падежах (Дательный, Винительный муж. рода) окончание обычно меняется на <g>-en</g>.<br>Пример: Der <g>neue</g> Kollege ist nett. Ich helfe dem <g>alten</g> Mann."
    }
  },
  {
    "id": "relativsatz_nominativ",
    "title": {"de": "Relativsatz mit Relativpronomen im Nominativ", "en": "Relative clause with relative pronoun in the nominative", "uk": "Означальне речення із займенником у називному відмінку", "ru": "Определительное придаточное с местоимением в именительном падеже"},
    "explanation": {
      "de": "Ein Relativsatz beschreibt ein Nomen näher. Im Nominativ entspricht das Relativpronomen dem Artikel des Nomens (<g>der, die, das, die</g>). Das Verb steht am Ende.<br>Beispiel: Das ist der Mann, <g>der</g> hier <g>wohnt</g>.",
      "en": "A relative clause describes a noun in more detail. In the nominative, the relative pronoun looks exactly like the definite article (<g>der, die, das, die</g>). The verb goes to the end.<br>Example: Das ist der Mann, <g>der</g> hier <g>wohnt</g>.",
      "uk": "Підрядне означальне речення детальніше описує іменник. У називному відмінку відносний займенник збігається з артиклем іменника (<g>der, die, das, die</g>). Дієслово стоїть у кінці.<br>Приклад: Das ist der Mann, <g>der</g> hier <g>wohnt</g>.",
      "ru": "Придаточное определительное предложение подробнее описывает существительное. В именительном падеже относительное местоимение совпадает с артиклем существительного (<g>der, die, das, die</g>). Глагол стоит в конце.<br>Пример: Das ist der Mann, <g>der</g> hier <g>wohnt</g>."
    }
  },
  {
    "id": "verb_werden",
    "title": {"de": "Das Verb werden", "en": "The verb werden (to become)", "uk": "Дієслово werden (ставати)", "ru": "Глагол werden (становиться)"},
    "explanation": {
      "de": "Das Verb <g>werden</g> bedeutet eine Veränderung oder Zukunft. Es ist unregelmäßig: ich werde, du <g>wirst</g>, er/sie/es <g>wird</g>.<br>Beispiel: Mein Sohn <g>wird</g> bald Arzt. Es <g>wird</g> kalt.",
      "en": "The verb <g>werden</g> means a change or development (to become). It is irregular: ich werde, du <g>wirst</g>, er/sie/es <g>wird</g>.<br>Example: Mein Sohn <g>wird</g> bald Arzt. Es <g>wird</g> kalt.",
      "uk": "Дієслово <g>werden</g> означає зміну стану, розвиток або майбутній час (ставати чимось/кимось). Воно неправильне: ich werde, du <g>wirst</g>, er/sie/es <g>wird</g>.<br>Приклад: Mein Sohn <g>wird</g> bald Arzt. Es <g>wird</g> kalt.",
      "ru": "Глагол <g>werden</g> означает изменение состояния, развитие или будущее время (становиться чем-то/кем-то). Он неправильный: ich werde, du <g>wirst</g>, er/sie/es <g>wird</g>.<br>Пример: Mein Sohn <g>wird</g> bald Arzt. Es <g>wird</g> kalt."
    }
  },
  {
    "id": "verb_lassen",
    "title": {"de": "Das Verb lassen", "en": "The verb lassen (to let / have something done)", "uk": "Дієслово lassen (дозволяти / доручати)", "ru": "Глагол lassen (позволять / поручать)"},
    "explanation": {
      "de": "Das Verb <g>lassen</g> hat zwei Hauptbedeutungen: Etwas nicht mitnehmen (etwas dalassen) oder eine Aktion nicht selbst machen (etwas machen lassen). Es steht auf Position 2, das Hauptverb am Ende.<br>Beispiel: Ich <g>lasse</g> mein Auto <g>reparieren</g> (Der Mechaniker macht es).",
      "en": "The verb <g>lassen</g> has two main meanings: to leave something somewhere, or to have something done by someone else. <g>Lassen</g> is in position 2, the main verb is at the end.<br>Example: Ich <g>lasse</g> mein Auto <g>reparieren</g> (The mechanic does it).",
      "uk": "Дієслово <g>lassen</g> має два головних значення: залишати щось десь, або доручати комусь зробити щось замість вас. <g>Lassen</g> стоїть на 2-му місці, основне дієслово — в кінці.<br>Приклад: Ich <g>lasse</g> mein Auto <g>reparieren</g> (Авто ремонтую не я, а механік).",
      "ru": "Глагол <g>lassen</g> имеет два главных значения: оставлять что-то где-то, или поручать кому-то сделать что-то вместо вас. <g>Lassen</g> стоит на 2-м месте, основной глагол — в конце.<br>Пример: Ich <g>lasse</g> mein Auto <g>reparieren</g> (Авто ремонтирую не я, а механик)."
    }
  },
  {
    "id": "nebensatz_mit_damit",
    "title": {"de": "Nebensatz mit damit", "en": "Subordinate clause with damit (so that)", "uk": "Підрядне речення з damit (щоб)", "ru": "Придаточное предложение с damit (чтобы)"},
    "explanation": {
      "de": "Wir nutzen <g>damit</g> für ein Ziel oder eine Absicht (Frage: Wozu?). Das konjugierte Verb steht am Ende. Wichtig: Das Subjekt im Haupt- und Nebensatz ist meistens unterschiedlich.<br>Beispiel: Ich gebe dir Geld, <g>damit</g> du ein Buch <g>kaufst</g>.",
      "en": "We use <g>damit</g> to express a purpose or goal (What for?). The conjugated verb goes to the end. Note: The subjects in the main and subordinate clause are usually different.<br>Example: Ich gebe dir Geld, <g>damit</g> du ein Buch <g>kaufst</g>.",
      "uk": "Ми використовуємо <g>damit</g> для вираження мети (Для чого? З якою метою?). Дієслово йде на кінець речення. Важливо: підмет у головному та підрядному реченнях зазвичай різний.<br>Приклад: Ich gebe dir Geld, <g>damit</g> du ein Buch <g>kaufst</g>.",
      "ru": "Мы используем <g>damit</g> для выражения цели (Для чего? С какой целью?). Глагол уходит в конец предложения. Важно: подлежащее в главном и придаточном предложениях обычно разное.<br>Пример: Ich gebe dir Geld, <g>damit</g> du ein Buch <g>kaufst</g>."
    }
  },
  {
    "id": "indirekter_fragesatz_fragewort",
    "title": {"de": "Indirekter Fragesatz mit Fragewort", "en": "Indirect question with a question word", "uk": "Непряме питання з питальним словом", "ru": "Косвенный вопрос с вопросительным словом"},
    "explanation": {
      "de": "Eine indirekte Frage ist höflicher. Wir beginnen mit einer Phrase wie 'Können Sie mir sagen...' und nutzen dann das Fragewort (<g>wann, wo, wie</g>). Das Verb steht am Ende.<br>Beispiel: Können Sie mir sagen, <g>wo</g> der Bahnhof <g>ist</g>?",
      "en": "An indirect question is more polite. We start with a phrase like 'Können Sie mir sagen...' and connect it with the question word (<g>wann, wo, wie</g>). The verb goes to the end.<br>Example: Können Sie mir sagen, <g>wo</g> der Bahnhof <g>ist</g>?",
      "uk": "Непряме питання є більш ввічливим варіантом звичайного питання. Ми починаємо з фрази на кшталт 'Können Sie mir sagen...' і далі використовуємо питальне слово (<g>wann, wo, wie</g>). Дієслово йде на кінець.<br>Приклад: Können Sie mir sagen, <g>wo</g> der Bahnhof <g>ist</g>?",
      "ru": "Косвенный вопрос является более вежливым вариантом обычного вопроса. Мы начинаем с фразы вроде 'Können Sie mir sagen...' и далее используем вопросительное слово (<g>wann, wo, wie</g>). Глагол идет в конец.<br>Пример: Können Sie mir sagen, <g>wo</g> der Bahnhof <g>ist</g>?"
    }
  },
  {
    "id": "indirekter_fragesatz_ob",
    "title": {"de": "Indirekter Fragesatz mit ob", "en": "Indirect question with ob (whether)", "uk": "Непряме питання з ob (чи)", "ru": "Косвенный вопрос с ob (ли)"},
    "explanation": {
      "de": "Wenn eine direkte Frage kein Fragewort hat (Ja/Nein-Frage), nutzen wir für die indirekte Frage den Konnektor <g>ob</g>. Das Verb steht am Ende.<br>Beispiel: Ich weiß nicht, <g>ob</g> er heute <g>kommt</g>.",
      "en": "If a direct question is a Yes/No question (no question word), we use <g>ob</g> (whether/if) to form the indirect question. The verb moves to the end.<br>Example: Ich weiß nicht, <g>ob</g> er heute <g>kommt</g>.",
      "uk": "Якщо пряме питання є загальним (відповідь Так/Ні, без питального слова), то в непрямому питанні ми використовуємо сполучник <g>ob</g> (чи). Дієслово стоїть у кінці.<br>Приклад: Ich weiß nicht, <g>ob</g> er heute <g>kommt</g>.",
      "ru": "Если прямой вопрос является общим (ответ Да/Нет, без вопросительного слова), то в косвенном вопросе мы используем союз <g>ob</g> (ли). Глагол стоит в конце.<br>Пример: Ich weiß nicht, <g>ob</g> er heute <g>kommt</g>."
    }
  },
  {
    "id": "praepositionen_akkusativ_dativ",
    "title": {"de": "Wiederholung: Präpositionen mit Akkusativ und Dativ", "en": "Review: prepositions with accusative and dative", "uk": "Повторення: прийменники зі знахідним і давальним відмінками", "ru": "Повторение: предлоги с винительным и дательным падежами"},
    "explanation": {
      "de": "Wiederholung der Wechselpräpositionen: Bewegung/Richtung braucht den <g>Akkusativ</g> (Wohin?), Position/Ort braucht den <g>Dativ</g> (Wo?).<br>Beispiel: Stell das Glas <g>auf den</g> Tisch (Akk.). Das Glas steht <g>auf dem</g> Tisch (Dat.).",
      "en": "Review of two-way prepositions: movement/direction requires the <g>Accusative</g> (Where to?), while fixed location/rest requires the <g>Dative</g> (Where?).<br>Example: Stell das Glas <g>auf den</g> Tisch (Acc.). Das Glas steht <g>auf dem</g> Tisch (Dat.).",
      "uk": "Повторення прийменників подвійного керування: рух/напрямок вимагає <g>Знахідного</g> відмінка (Куди?), а статичне місцезнаходження — <g>Давального</g> (Де?).<br>Приклад: Stell das Glas <g>auf den</g> Tisch (Знахідний). Das Glas steht <g>auf dem</g> Tisch (Давальний).",
      "ru": "Повторение предлогов двойного управления: движение/направление требует <g>Винительного</g> падежа (Куда?), а статичное местонахождение — <g>Дательного</g> (Где?).<br>Пример: Stell das Glas <g>auf den</g> Tisch (Вин.). Das Glas steht <g>auf dem</g> Tisch (Дат.)."
    }
  },
  {
    "id": "personalpronomen_wdh",
    "title": {"de": "Wiederholung: Personalpronomen", "en": "Review: personal pronouns", "uk": "Повторення: особові займенники", "ru": "Повторение: личные местоимения"},
    "explanation": {
      "de": "Wiederholung der Pronomen für Personen. Akkusativ (Wen/Was? -> <g>mich, dich, ihn, sie, es, uns, euch, sie/Sie</g>) und Dativ (Wem? -> <g>mir, dir, ihm, ihr, ihm, uns, euch, ihnen/Ihnen</g>).",
      "en": "Review of pronouns for people. Accusative (Who/What? -> <g>mich, dich, ihn...</g>) and Dative (To whom? -> <g>mir, dir, ihm...</g>).",
      "uk": "Повторення займенників, що заміняють людей. Знахідний відмінок (Кого/Що? -> <g>mich, dich, ihn...</g>) та Давальний відмінок (Кому? -> <g>mir, dir, ihm...</g>).",
      "ru": "Повторение местоимений, заменяющих людей. Винительный падеж (Кого/Что? -> <g>mich, dich, ihn...</g>) и Дательный падеж (Кому? -> <g>mir, dir, ihm...</g>)."
    }
  },
  {
    "id": "nebensaetze_konnektoren_wdh",
    "title": {"de": "Wiederholung: Nebensätze und Konnektoren", "en": "Review: subordinate clauses and connectors", "uk": "Повторення: підрядні речення та конектори", "ru": "Повторение: придаточные предложения и коннекторы"},
    "explanation": {
      "de": "Wiederholung der Satzstruktur: Bei Nebensätzen mit <g>weil, dass, wenn</g> steht das konjugierte Verb immer am Satzende.<br>Beispiel: Ich denke, <g>dass</g> das wichtig <g>ist</g>.",
      "en": "Review of sentence structure: In subordinate clauses with connectors like <g>weil, dass, wenn</g>, the conjugated verb always moves to the very end of the clause.<br>Example: Ich denke, <g>dass</g> das wichtig <g>ist</g>.",
      "uk": "Повторення структури речення: у підрядних реченнях зі сполучниками <g>weil, dass, wenn</g> змінюване дієслово завжди стоїть у самому кінці.<br>Приклад: Ich denke, <g>dass</g> das wichtig <g>ist</g>.",
      "ru": "Повторение структуры предложения: в придаточных предложениях с союзами <g>weil, dass, wenn</g> спрягаемый глагол всегда стоит в самом конце.<br>Пример: Ich denke, <g>dass</g> das wichtig <g>ist</g>."
    }
  },
  {
    "id": "adjektiv_unbestimmter_artikel_wdh",
    "title": {"de": "Wiederholung: Adjektivendungen nach dem unbestimmten Artikel", "en": "Review: adjective endings after the indefinite article", "uk": "Повторення: закінчення прикметників після неозначеного артикля", "ru": "Повторение: окончания прилагательных после неопределённого артикля"},
    "explanation": {
      "de": "Wiederholung: Nach 'ein/mein' zeigt das Adjektiv im Nominativ das Signal des Genus: <g>-er</g> (maskulin), <g>-es</g> (neutral), <g>-e</g> (feminin). Im Akkusativ maskulin nutzen wir <g>-en</g>.<br>Beispiel: ein <g>alter</g> Freund.",
      "en": "Review: After 'ein/mein', the adjective in the nominative carries the gender signal: <g>-er</g> (masc.), <g>-es</g> (neutral), <g>-e</g> (fem.). In the accusative masculine, it takes <g>-en</g>.<br>Example: ein <g>alter</g> Freund.",
      "uk": "Повторення: після 'ein/mein' прикметник у називному відмінку показує рід іменника: <g>-er</g> (чоловічий), <g>-es</g> (середній), <g>-e</g> (жіночий). У знахідному відмінку чол. роду додаємо <g>-en</g>.<br>Приклад: ein <g>alter</g> Freund.",
      "ru": "Повторение: после 'ein/mein' прилагательное в именительном падеже показывает род существительного: <g>-er</g> (мужской), <g>-es</g> (средний), <g>-e</g> (женский). В винительном падеже муж. рода добавляем <g>-en</g>.<br>Пример: ein <g>alter</g> Freund."
    }
  },
  {
    "id": "dass_satz_wdh",
    "title": {"de": "Wiederholung: Nebensatz mit dass", "en": "Review: subordinate clause with dass", "uk": "Повторення: підрядне речення з dass", "ru": "Повторение: придаточное предложение с dass"},
    "explanation": {
      "de": "Wiederholung: Der Konnektor <g>dass</g> leitet einen Objektsatz ein. Das Verb steht am Satzende. Oft nach Ausdrücken wie: Ich finde, <g>dass</g>... / Es ist gut, <g>dass</g>...<br>Beispiel: Es ist gut, <g>dass</g> du hier <g>bist</g>.",
      "en": "Review: The conjunction <g>dass</g> introduces a subordinate object clause. The verb goes to the end. Often used after expressions like: Ich finde, <g>dass</g>... / Es ist gut, <g>dass</g>...<br>Example: Es ist gut, <g>dass</g> du hier <g>bist</g>.",
      "uk": "Повторення: сполучник <g>dass</g> вводить підрядне з'ясувальне речення. Дієслово стоїть у самому кінці. Часто вживається після виразів: Ich finde, <g>dass</g>... / Es ist gut, <g>dass</g>...<br>Приклад: Es ist gut, <g>dass</g> du hier <g>bist</g>.",
      "ru": "Повторение: союз <g>dass</g> вводит придаточное изъяснительное предложение. Глагол стоит в самом конце. Часто употребляется после выражений: Ich finde, <g>dass</g>... / Es ist gut, <g>dass</g>...<br>Пример: Es ist gut, <g>dass</g> du hier <g>bist</g>."
    }
  }
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
      "k1_007",
      "k1_026",
      "k1_027",
      "k1_028"
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
      "k1_014",
      "k1_029",
      "k1_030",
      "k1_031"
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
      "k1_021",
      "k1_032",
      "k1_033",
      "k1_034"
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
      "k1_025",
      "k1_035",
      "k1_036",
      "k1_037",
      "k1_038",
      "k1_039",
      "k1_040"
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
      "k2_006",
      "k2_025",
      "k2_026",
      "k2_027",
      "k2_028"
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
      "k2_012",
      "k2_029",
      "k2_030",
      "k2_031",
      "k2_032"
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
      "k2_018",
      "k2_033",
      "k2_034",
      "k2_035",
      "k2_036"
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
      "k2_024",
      "k2_037",
      "k2_038",
      "k2_039",
      "k2_040"
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
      "k3_005",
      "k3_021",
      "k3_022",
      "k3_023",
      "k3_024",
      "k3_025"
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
      "k3_010",
      "k3_026",
      "k3_027",
      "k3_028",
      "k3_029",
      "k3_030"
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
      "k3_015",
      "k3_031",
      "k3_032",
      "k3_033",
      "k3_034",
      "k3_035"
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
      "k3_020",
      "k3_036",
      "k3_037",
      "k3_038",
      "k3_039",
      "k3_040"
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
      "k4_006",
      "k4_024",
      "k4_025",
      "k4_026",
      "k4_027"
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
      "k4_012",
      "k4_028",
      "k4_029",
      "k4_030",
      "k4_031"
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
      "k4_018",
      "k4_032",
      "k4_033",
      "k4_034",
      "k4_035"
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
      "k4_023",
      "k4_036",
      "k4_037",
      "k4_038",
      "k4_039",
      "k4_040"
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
      "k5_005",
      "k5_021",
      "k5_022",
      "k5_023",
      "k5_024",
      "k5_025"
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
      "k5_010",
      "k5_026",
      "k5_027",
      "k5_028",
      "k5_029",
      "k5_030"
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
      "k5_015",
      "k5_031",
      "k5_032",
      "k5_033",
      "k5_034",
      "k5_035"
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
      "k5_020",
      "k5_036",
      "k5_037",
      "k5_038",
      "k5_039",
      "k5_040"
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
      "k6_005",
      "k6_020",
      "k6_021",
      "k6_022",
      "k6_023",
      "k6_024"
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
      "k6_010",
      "k6_025",
      "k6_026",
      "k6_027",
      "k6_028",
      "k6_029"
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
      "k6_015",
      "k6_030",
      "k6_031",
      "k6_032",
      "k6_033",
      "k6_034"
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
      "k6_019",
      "k6_035",
      "k6_036",
      "k6_037",
      "k6_038",
      "k6_039",
      "k6_040"
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
      "k7_005",
      "k7_019",
      "k7_020",
      "k7_021",
      "k7_022",
      "k7_023"
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
      "k7_010",
      "k7_024",
      "k7_025",
      "k7_026",
      "k7_027",
      "k7_028"
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
      "k7_015",
      "k7_029",
      "k7_030",
      "k7_031",
      "k7_032",
      "k7_033"
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
      "k7_018",
      "k7_034",
      "k7_035",
      "k7_036",
      "k7_037",
      "k7_038",
      "k7_039",
      "k7_040"
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
      "k8_005",
      "k8_018",
      "k8_019",
      "k8_020",
      "k8_021",
      "k8_022"
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
      "k8_010",
      "k8_023",
      "k8_024",
      "k8_025",
      "k8_026",
      "k8_027"
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
      "k8_015",
      "k8_028",
      "k8_029",
      "k8_030",
      "k8_031",
      "k8_032"
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
      "k8_017",
      "k8_033",
      "k8_034",
      "k8_035",
      "k8_036",
      "k8_037",
      "k8_038",
      "k8_039",
      "k8_040"
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
      "k9_007",
      "k9_022",
      "k9_023",
      "k9_024"
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
      "k9_014",
      "k9_025",
      "k9_026",
      "k9_027"
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
      "k9_018",
      "k9_028",
      "k9_029",
      "k9_030",
      "k9_031",
      "k9_032",
      "k9_033"
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
      "k9_021",
      "k9_034",
      "k9_035",
      "k9_036",
      "k9_037",
      "k9_038",
      "k9_039",
      "k9_040"
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
      "k10_006",
      "k10_021",
      "k10_022",
      "k10_023",
      "k10_024"
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
      "k10_012",
      "k10_025",
      "k10_026",
      "k10_027",
      "k10_028"
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
      "k10_017",
      "k10_029",
      "k10_030",
      "k10_031",
      "k10_032",
      "k10_033"
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
      "k10_020",
      "k10_034",
      "k10_035",
      "k10_036",
      "k10_037",
      "k10_038",
      "k10_039",
      "k10_040"
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
      "k11_006",
      "k11_021",
      "k11_022",
      "k11_023",
      "k11_024"
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
      "k11_012",
      "k11_025",
      "k11_026",
      "k11_027",
      "k11_028"
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
      "k11_017",
      "k11_029",
      "k11_030",
      "k11_031",
      "k11_032",
      "k11_033"
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
      "k11_020",
      "k11_034",
      "k11_035",
      "k11_036",
      "k11_037",
      "k11_038",
      "k11_039",
      "k11_040"
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
      "k12_006",
      "k12_021",
      "k12_022",
      "k12_023",
      "k12_024"
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
      "k12_012",
      "k12_025",
      "k12_026",
      "k12_027",
      "k12_028"
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
      "k12_017",
      "k12_029",
      "k12_030",
      "k12_031",
      "k12_032",
      "k12_033"
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
      "k12_020",
      "k12_034",
      "k12_035",
      "k12_036",
      "k12_037",
      "k12_038",
      "k12_039",
      "k12_040"
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
      "k13_006",
      "k13_021",
      "k13_022",
      "k13_023",
      "k13_024"
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
      "k13_012",
      "k13_025",
      "k13_026",
      "k13_027",
      "k13_028"
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
      "k13_017",
      "k13_029",
      "k13_030",
      "k13_031",
      "k13_032",
      "k13_033"
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
      "k13_020",
      "k13_034",
      "k13_035",
      "k13_036",
      "k13_037",
      "k13_038",
      "k13_039",
      "k13_040"
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
      "k14_006",
      "k14_021",
      "k14_022",
      "k14_023",
      "k14_024"
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
      "k14_012",
      "k14_025",
      "k14_026",
      "k14_027",
      "k14_028"
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
      "k14_017",
      "k14_029",
      "k14_030",
      "k14_031",
      "k14_032",
      "k14_033"
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
      "k14_020",
      "k14_034",
      "k14_035",
      "k14_036",
      "k14_037",
      "k14_038",
      "k14_039",
      "k14_040"
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
      "k15_006",
      "k15_021",
      "k15_022",
      "k15_023",
      "k15_024"
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
      "k15_012",
      "k15_025",
      "k15_026",
      "k15_027",
      "k15_028"
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
      "k15_017",
      "k15_029",
      "k15_030",
      "k15_031",
      "k15_032",
      "k15_033"
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
      "k15_020",
      "k15_034",
      "k15_035",
      "k15_036",
      "k15_037",
      "k15_038",
      "k15_039",
      "k15_040"
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
  {"id":"k1_026","cat":"k1","term":{"de":"die Abteilung","en":"department","uk":"відділ","ru":"отдел"},"short":{"de": "ein Teil einer Firma, der eine bestimmte Aufgabe hat","en": "a part of a company that has a certain task","uk": "частина фірми, яка виконує певне завдання","ru": "часть фирмы, которая выполняет определённое задание"},"def":{"de":"Sie <g>ist</g> letzte Woche in eine neue <b>Abteilung</b> <g><b>gewechselt</b></g>.","en":"She <g>has</g> <g><b>changed</b></g> to a new <b>department</b> last week.","uk":"Минулого тижня вона <b>перейшла</b> у новий <b>відділ</b>.","ru":"На прошлой неделе она <b>перешла</b> в новый <b>отдел</b>."},"gram":"perfekt"},
  {"id":"k1_027","cat":"k1","term":{"de":"der Mitarbeiter / die Mitarbeiterin","en":"employee","uk":"співробітник / співробітниця","ru":"сотрудник / сотрудница"},"short":{"de": "eine Person, die in einer Firma arbeitet","en": "a person who works at a company","uk": "людина, яка працює у фірмі","ru": "человек, который работает в фирме"},"def":{"de":"Die neue <b>Mitarbeiterin</b> <g>hat</g> sich heute allen im Büro <g><b>vorgestellt</b></g>.","en":"The new <b>employee</b> <g>has</g> <g><b>introduced</b></g> herself to everyone in the office today.","uk":"Нова <b>співробітниця</b> сьогодні <b>представилася</b> всім в офісі.","ru":"Новая <b>сотрудница</b> сегодня <b>представилась</b> всем в офисе."},"gram":"perfekt"},
  {"id":"k1_028","cat":"k1","term":{"de":"lächeln","en":"to smile","uk":"усміхатися","ru":"улыбаться"},"short":{"de": "die Mundwinkel nach oben bewegen, wenn man sich freut","en": "to move the corners of your mouth up when you're happy","uk": "піднімати кутики рота вгору, коли тобі приємно","ru": "поднимать уголки рта вверх, когда тебе приятно"},"def":{"de":"Der neue Kollege <g>hat</g> beim Kennenlernen freundlich <g><b>gelächelt</b></g>.","en":"The new colleague <g>has</g> <g><b>smiled</b></g> in a friendly way while getting acquainted.","uk":"Новий колега приязно <b>усміхнувся</b> під час знайомства.","ru":"Новый коллега приветливо <b>улыбнулся</b> во время знакомства."},"gram":"perfekt"},
  {"id":"k1_029","cat":"k1","term":{"de":"sich verspäten","en":"to be late","uk":"запізнюватися","ru":"опаздывать"},"short":{"de": "später kommen, als geplant ist","en": "to arrive later than planned","uk": "приходити пізніше, ніж заплановано","ru": "приходить позже, чем запланировано"},"def":{"de":"Er <b>verspätet</b> sich, <g>weil</g> der Bus heute nicht pünktlich war.","en":"He <b>is late</b> <g>because</g> the bus wasn't on time today.","uk":"Він <b>запізнюється</b>, <g>тому що</g> сьогодні автобус не приїхав вчасно.","ru":"Он <b>опаздывает</b>, <g>потому что</g> сегодня автобус не приехал вовремя."},"gram":"weil_satz"},
  {"id":"k1_030","cat":"k1","term":{"de":"der Stau","en":"traffic jam","uk":"затор","ru":"пробка"},"short":{"de": "viele Autos, die auf der Straße nicht weiterfahren können","en": "many cars on the road that can't move forward","uk": "багато автомобілів на дорозі, які не можуть рухатися далі","ru": "много автомобилей на дороге, которые не могут двигаться дальше"},"def":{"de":"Sie kommt zu spät ins Büro, <g>weil</g> auf der Autobahn ein großer <b>Stau</b> war.","en":"She comes to the office late <g>because</g> there was a big <b>traffic jam</b> on the highway.","uk":"Вона запізнюється в офіс, <g>тому що</g> на автостраді був великий <b>затор</b>.","ru":"Она опаздывает в офис, <g>потому что</g> на автостраде была большая <b>пробка</b>."},"gram":"weil_satz"},
  {"id":"k1_031","cat":"k1","term":{"de":"der Wecker","en":"alarm clock","uk":"будильник","ru":"будильник"},"short":{"de": "ein Gerät, das einen morgens weckt","en": "a device that wakes you up in the morning","uk": "прилад, який будить тебе вранці","ru": "прибор, который будит тебя утром"},"def":{"de":"Er kommt zu spät zur Arbeit, <g>weil</g> sein <b>Wecker</b> heute nicht geklingelt hat.","en":"He comes to work late <g>because</g> his <b>alarm clock</b> didn't ring today.","uk":"Він запізнюється на роботу, <g>тому що</g> сьогодні не задзвонив його <b>будильник</b>.","ru":"Он опаздывает на работу, <g>потому что</g> сегодня не прозвенел его <b>будильник</b>."},"gram":"weil_satz"},
  {"id":"k1_032","cat":"k1","term":{"de":"gehören","en":"to belong to","uk":"належати","ru":"принадлежать"},"short":{"de": "jemandem als Eigentum zugehören","en": "to be someone's property","uk": "бути чиєюсь власністю","ru": "быть чьей-то собственностью"},"def":{"de":"Dieser Schreibtisch <b>gehört</b> <g>der neuen Kollegin</g>.","en":"This desk <b>belongs</b> to <g>the new colleague</g>.","uk":"Цей стіл <b>належить</b> <g>новій колезі</g>.","ru":"Этот стол <b>принадлежит</b> <g>новой коллеге</g>."},"gram":"dativ_verben"},
  {"id":"k1_033","cat":"k1","term":{"de":"erklären","en":"to explain","uk":"пояснювати","ru":"объяснять"},"short":{"de": "etwas so sagen, dass eine andere Person es versteht","en": "to say something so another person understands it","uk": "казати щось так, щоб інша людина зрозуміла","ru": "говорить что-то так, чтобы другой человек понял"},"def":{"de":"Der Kollege <b>erklärt</b> <g>dem neuen Mitarbeiter</g> die wichtigsten Regeln.","en":"The colleague <b>explains</b> the most important rules to <g>the new employee</g>.","uk":"Колега <b>пояснює</b> <g>новому співробітнику</g> найважливіші правила.","ru":"Коллега <b>объясняет</b> <g>новому сотруднику</g> самые важные правила."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_034","cat":"k1","term":{"de":"der Schlüssel","en":"key","uk":"ключ","ru":"ключ"},"short":{"de": "ein Metallstück, mit dem man eine Tür öffnet","en": "a piece of metal used to open a door","uk": "металевий предмет, яким відчиняють двері","ru": "металлический предмет, которым открывают дверь"},"def":{"de":"Der Chef gibt <g>ihm</g> den <b>Schlüssel</b> für das Büro.","en":"The boss gives <g>him</g> the <b>key</b> for the office.","uk":"Керівник дає <g>йому</g> <b>ключ</b> від офісу.","ru":"Начальник даёт <g>ему</g> <b>ключ</b> от офиса."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_035","cat":"k1","term":{"de":"üben","en":"to practice","uk":"тренуватися / вправлятися","ru":"тренироваться / упражняться"},"short":{"de": "etwas oft machen, um es besser zu können","en": "to do something often to get better at it","uk": "робити щось часто, щоб краще це вміти","ru": "делать что-то часто, чтобы лучше это уметь"},"def":{"de":"Sie <g>hat</g> gestern die neuen Wörter noch einmal <g><b>geübt</b></g>.","en":"She <g>has</g> <g><b>practiced</b></g> the new words once more yesterday.","uk":"Учора вона ще раз <b>потренувалася</b> з новими словами.","ru":"Вчера она ещё раз <b>потренировалась</b> с новыми словами."},"gram":"perfekt"},
  {"id":"k1_036","cat":"k1","term":{"de":"die Regel","en":"rule","uk":"правило","ru":"правило"},"short":{"de": "etwas, das man tun oder nicht tun soll","en": "something you should or shouldn't do","uk": "те, що варто чи не варто робити","ru": "то, что нужно или не нужно делать"},"def":{"de":"Der Chef erklärt <g>allen neuen Mitarbeitenden</g> die wichtigsten <b>Regeln</b>.","en":"The boss explains the most important <b>rules</b> to <g>all new employees</g>.","uk":"Керівник пояснює <g>усім новим працівникам</g> найважливіші <b>правила</b>.","ru":"Начальник объясняет <g>всем новым сотрудникам</g> самые важные <b>правила</b>."},"gram":"dativ_akkusativ_verben"},
  {"id":"k1_037","cat":"k1","term":{"de":"der Fehler","en":"mistake","uk":"помилка","ru":"ошибка"},"short":{"de": "etwas, das man falsch gemacht hat","en": "something you did incorrectly","uk": "те, що зроблено неправильно","ru": "то, что сделано неправильно"},"def":{"de":"Er macht am Anfang oft <b>Fehler</b>, <g>weil</g> noch alles neu für ihn ist.","en":"He often makes <b>mistakes</b> at the beginning <g>because</g> everything is still new to him.","uk":"На початку він часто робить <b>помилки</b>, <g>тому що</g> для нього все ще нове.","ru":"Вначале он часто делает <b>ошибки</b>, <g>потому что</g> для него всё ещё новое."},"gram":"weil_satz"},
  {"id":"k1_038","cat":"k1","term":{"de":"verstehen","en":"to understand","uk":"розуміти","ru":"понимать"},"short":{"de": "wissen, was etwas bedeutet","en": "to know what something means","uk": "знати, що щось означає","ru": "знать, что что-то значит"},"def":{"de":"Er <g>hat</g> die Aufgabe erst nach der zweiten Erklärung <g><b>verstanden</b></g>.","en":"He only <g>has</g> <g><b>understood</b></g> the task after the second explanation.","uk":"Він <b>зрозумів</b> завдання лише після другого пояснення.","ru":"Он <b>понял</b> задание только после второго объяснения."},"gram":"perfekt"},
  {"id":"k1_039","cat":"k1","term":{"de":"die Kantine","en":"cafeteria","uk":"їдальня","ru":"столовая"},"short":{"de": "ein Raum in einer Firma, wo man günstig essen kann","en": "a room in a company where you can eat cheaply","uk": "приміщення у фірмі, де можна недорого поїсти","ru": "помещение в фирме, где можно недорого поесть"},"def":{"de":"Das Mittagessen in der <b>Kantine</b> schmeckt <g>ihm</g> jeden Tag sehr gut.","en":"The lunch in the <b>cafeteria</b> tastes very good to <g>him</g> every day.","uk":"Обід у <b>їдальні</b> щодня дуже смакує <g>йому</g>.","ru":"Обед в <b>столовой</b> каждый день очень нравится <g>ему</g>."},"gram":"dativ_verben"},
  {"id":"k1_040","cat":"k1","term":{"de":"wiederholen","en":"to repeat / to review","uk":"повторювати","ru":"повторять"},"short":{"de": "etwas noch einmal machen oder sagen, um es besser zu lernen","en": "to do or say something again to learn it better","uk": "робити чи казати щось ще раз, щоб краще це вивчити","ru": "делать или говорить что-то ещё раз, чтобы лучше это выучить"},"def":{"de":"Am Ende der Woche <b>wiederholen</b> die Kollegen alle wichtigen Informationen.","en":"At the end of the week, the colleagues <b>review</b> all the important information.","uk":"Наприкінці тижня колеги <b>повторюють</b> усю важливу інформацію.","ru":"В конце недели коллеги <b>повторяют</b> всю важную информацию."},"gram":""},
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
  {"id":"k2_025","cat":"k2","term":{"de":"packen","en":"to pack","uk":"пакувати","ru":"паковать"},"short":{"de": "Sachen in einen Koffer oder eine Kiste tun","en": "to put things into a suitcase or a box","uk": "класти речі у валізу чи коробку","ru": "класть вещи в чемодан или коробку"},"def":{"de":"Sie <g>hat</g> ihre Kleidung schon am Abend vorher <g><b>gepackt</b></g>.","en":"She <g>has</g> <g><b>packed</b></g> her clothes the evening before already.","uk":"Вона <b>спакувала</b> одяг ще напередодні ввечері.","ru":"Она <b>упаковала</b> одежду ещё накануне вечером."},"gram":"perfekt"},
  {"id":"k2_026","cat":"k2","term":{"de":"die Kiste","en":"box / crate","uk":"коробка / ящик","ru":"коробка / ящик"},"short":{"de": "ein großer Behälter, in dem man Sachen transportiert","en": "a large container used to transport things","uk": "великий контейнер, в якому перевозять речі","ru": "большой контейнер, в котором перевозят вещи"},"def":{"de":"Er <g>hat</g> alle Bücher in eine große <b>Kiste</b> <g><b>gepackt</b></g>.","en":"He <g>has</g> <g><b>packed</b></g> all the books into a big <b>box</b>.","uk":"Він <b>спакував</b> усі книжки у велику <b>коробку</b>.","ru":"Он <b>упаковал</b> все книги в большую <b>коробку</b>."},"gram":"perfekt"},
  {"id":"k2_027","cat":"k2","term":{"de":"der Transporter","en":"moving van / transporter","uk":"фургон (для переїзду)","ru":"фургон (для переезда)"},"short":{"de": "ein großes Auto, mit dem man Möbel transportiert","en": "a big vehicle used to transport furniture","uk": "великий автомобіль, яким перевозять меблі","ru": "большой автомобиль, которым перевозят мебель"},"def":{"de":"Sein Freund <g>hat</g> einen <b>Transporter</b> für den Umzug <g><b>geliehen</b></g>.","en":"His friend <g>has</g> <g><b>borrowed</b></g> a <b>moving van</b> for the move.","uk":"Його друг <b>позичив</b> <b>фургон</b> для переїзду.","ru":"Его друг <b>одолжил</b> <b>фургон</b> для переезда."},"gram":"perfekt"},
  {"id":"k2_028","cat":"k2","term":{"de":"der Aufzug","en":"elevator / lift","uk":"ліфт","ru":"лифт"},"short":{"de": "eine Maschine, die Menschen und Sachen zwischen Stockwerken transportiert","en": "a machine that transports people and things between floors","uk": "машина, яка перевозить людей і речі між поверхами","ru": "машина, которая перевозит людей и вещи между этажами"},"def":{"de":"Sie <g>haben</g> für den Umzug den <b>Aufzug</b> <g><b>benutzt</b></g>.","en":"They <g>have</g> <g><b>used</b></g> the <b>elevator</b> for the move.","uk":"Вони <b>скористалися</b> <b>ліфтом</b> для переїзду.","ru":"Они <b>воспользовались</b> <b>лифтом</b> для переезда."},"gram":"perfekt"},
  {"id":"k2_029","cat":"k2","term":{"de":"das Regal","en":"shelf","uk":"полиця / стелаж","ru":"полка / стеллаж"},"short":{"de": "ein Möbelstück mit Brettern, auf das man Bücher oder Sachen stellt","en": "a piece of furniture with boards where you put books or things","uk": "меблі з дошками, на які ставлять книги чи речі","ru": "мебель с досками, на которые ставят книги или вещи"},"def":{"de":"Sie stellt die Bücher <g>in das <b>Regal</b></g> im Wohnzimmer.","en":"She puts the books <g>on the <b>shelf</b></g> in the living room.","uk":"Вона ставить книги <g>на <b>полицю</b></g> у вітальні.","ru":"Она ставит книги <g>на <b>полку</b></g> в гостиной."},"gram":"wechselpraepositionen"},
  {"id":"k2_030","cat":"k2","term":{"de":"die Wand","en":"wall","uk":"стіна","ru":"стена"},"short":{"de": "die Seite eines Zimmers, an der man zum Beispiel Bilder aufhängt","en": "the side of a room where you can hang pictures, for example","uk": "бік кімнати, на який, наприклад, вішають картини","ru": "сторона комнаты, на которую, например, вешают картины"},"def":{"de":"Er hängt das neue Bild <g>an die <b>Wand</b></g> über dem Sofa.","en":"He hangs the new picture <g>on the <b>wall</b></g> above the sofa.","uk":"Він вішає нову картину <g>на <b>стіну</b></g> над диваном.","ru":"Он вешает новую картину <g>на <b>стену</b></g> над диваном."},"gram":"wechselpraepositionen"},
  {"id":"k2_031","cat":"k2","term":{"de":"das Sofa","en":"sofa / couch","uk":"диван","ru":"диван"},"short":{"de": "ein weiches Möbelstück zum Sitzen für mehrere Personen","en": "a soft piece of furniture for several people to sit on","uk": "м'які меблі, на яких можуть сидіти кілька людей","ru": "мягкая мебель, на которой могут сидеть несколько человек"},"def":{"de":"Die Katze liegt gern <g>auf dem <b>Sofa</b></g> im Wohnzimmer.","en":"The cat likes to lie <g>on the <b>sofa</b></g> in the living room.","uk":"Кіт любить лежати <g>на <b>дивані</b></g> у вітальні.","ru":"Кот любит лежать <g>на <b>диване</b></g> в гостиной."},"gram":"wechselpraepositionen"},
  {"id":"k2_032","cat":"k2","term":{"de":"der Flur","en":"hallway / corridor","uk":"коридор / передпокій","ru":"коридор / прихожая"},"short":{"de": "ein schmaler Raum zwischen den Zimmern einer Wohnung","en": "a narrow room between the rooms of an apartment","uk": "вузьке приміщення між кімнатами квартири","ru": "узкое помещение между комнатами квартиры"},"def":{"de":"Sie stellt ihre Schuhe <g>in den <b>Flur</b></g> neben die Tür.","en":"She puts her shoes <g>in the <b>hallway</b></g> next to the door.","uk":"Вона ставить взуття <g>у <b>коридор</b></g> біля дверей.","ru":"Она ставит обувь <g>в <b>коридор</b></g> у двери."},"gram":"wechselpraepositionen"},
  {"id":"k2_033","cat":"k2","term":{"de":"aufräumen","en":"to tidy up","uk":"прибирати / наводити лад","ru":"убирать / наводить порядок"},"short":{"de": "Ordnung in einem Zimmer machen","en": "to put a room in order","uk": "робити порядок у кімнаті","ru": "делать порядок в комнате"},"def":{"de":"Sie <b>räumt</b> ihr Zimmer <b>auf</b>, <g>weil</g> gleich Besuch kommt.","en":"She <b>tidies up</b> her room <g>because</g> guests are coming soon.","uk":"Вона <b>прибирає</b> кімнату, <g>тому що</g> скоро прийдуть гості.","ru":"Она <b>убирает</b> комнату, <g>потому что</g> скоро придут гости."},"gram":"weil_satz"},
  {"id":"k2_034","cat":"k2","term":{"de":"gemütlich","en":"cozy","uk":"затишний","ru":"уютный"},"short":{"de": "warm und angenehm, sodass man sich dort wohlfühlt","en": "warm and pleasant, so that you feel comfortable there","uk": "теплий і приємний, так що там почуваєшся добре","ru": "тёплый и приятный, так что там чувствуешь себя хорошо"},"def":{"de":"Das Zimmer wirkt sehr <b>gemütlich</b>, <g>weil</g> überall warme Lampen stehen.","en":"The room feels very <b>cozy</b> <g>because</g> there are warm lamps everywhere.","uk":"Кімната здається дуже <b>затишною</b>, <g>тому що</g> скрізь стоять теплі лампи.","ru":"Комната кажется очень <b>уютной</b>, <g>потому что</g> повсюду стоят тёплые лампы."},"gram":"weil_satz"},
  {"id":"k2_035","cat":"k2","term":{"de":"renovieren","en":"to renovate","uk":"робити ремонт / оновлювати","ru":"делать ремонт / обновлять"},"short":{"de": "ein Zimmer oder eine Wohnung neu und schön machen","en": "to make a room or apartment new and nice again","uk": "робити кімнату чи квартиру новою та гарною","ru": "делать комнату или квартиру новой и красивой"},"def":{"de":"Sie <b>renovieren</b> die ganze Wohnung, <g>weil</g> die Wände sehr alt aussehen.","en":"They <b>renovate</b> the whole apartment <g>because</g> the walls look very old.","uk":"Вони <b>роблять ремонт</b> у всій квартирі, <g>тому що</g> стіни виглядають дуже старими.","ru":"Они <b>делают ремонт</b> во всей квартире, <g>потому что</g> стены выглядят очень старыми."},"gram":"weil_satz"},
  {"id":"k2_036","cat":"k2","term":{"de":"hell","en":"bright / light","uk":"світлий","ru":"светлый"},"short":{"de": "mit viel Licht, das Gegenteil von dunkel","en": "with a lot of light, the opposite of dark","uk": "з багато світла, протилежне до темного","ru": "с большим количеством света, противоположность тёмному"},"def":{"de":"Das Zimmer ist sehr <b>hell</b>, <g>weil</g> es zwei große Fenster hat.","en":"The room is very <b>bright</b> <g>because</g> it has two large windows.","uk":"Кімната дуже <b>світла</b>, <g>тому що</g> в ній два великі вікна.","ru":"Комната очень <b>светлая</b>, <g>потому что</g> в ней два больших окна."},"gram":"weil_satz"},
  {"id":"k2_037","cat":"k2","term":{"de":"der Müll","en":"trash / garbage","uk":"сміття","ru":"мусор"},"short":{"de": "Sachen, die man nicht mehr braucht und wegwirft","en": "things you don't need anymore and throw away","uk": "речі, які вже не потрібні та які викидають","ru": "вещи, которые уже не нужны и которые выбрасывают"},"def":{"de":"Er bringt den <b>Müll</b> raus, <g>weil</g> heute Abholtag ist.","en":"He takes out the <b>trash</b> <g>because</g> today is collection day.","uk":"Він виносить <b>сміття</b>, <g>тому що</g> сьогодні день вивозу.","ru":"Он выносит <b>мусор</b>, <g>потому что</g> сегодня день вывоза."},"gram":"weil_satz"},
  {"id":"k2_038","cat":"k2","term":{"de":"abwaschen","en":"to wash the dishes","uk":"мити посуд","ru":"мыть посуду"},"short":{"de": "das schmutzige Geschirr sauber machen","en": "to clean the dirty dishes","uk": "мити брудний посуд, щоб він став чистим","ru": "мыть грязную посуду, чтобы она стала чистой"},"def":{"de":"Sie <b>wäscht</b> das Geschirr <b>ab</b>, <g>weil</g> die Spülmaschine kaputt ist.","en":"She <b>washes the dishes</b> <g>because</g> the dishwasher is broken.","uk":"Вона <b>миє посуд</b>, <g>тому що</g> посудомийна машина зламана.","ru":"Она <b>моет посуду</b>, <g>потому что</g> посудомоечная машина сломана."},"gram":"weil_satz"},
  {"id":"k2_039","cat":"k2","term":{"de":"streiten","en":"to argue","uk":"сваритися / сперечатися","ru":"ссориться / спорить"},"short":{"de": "laut und unfreundlich über etwas diskutieren","en": "to discuss something loudly and unkindly","uk": "голосно й неприязно щось обговорювати","ru": "громко и недружелюбно что-то обсуждать"},"def":{"de":"Die Mitbewohner <b>streiten</b>, <g>weil</g> niemand die Küche geputzt hat.","en":"The roommates <b>argue</b> <g>because</g> nobody cleaned the kitchen.","uk":"Співмешканці <b>сваряться</b>, <g>тому що</g> ніхто не прибрав кухню.","ru":"Соседи по квартире <b>ссорятся</b>, <g>потому что</g> никто не убрал кухню."},"gram":"weil_satz"},
  {"id":"k2_040","cat":"k2","term":{"de":"der Putzplan","en":"cleaning schedule / rota","uk":"графік прибирання","ru":"график уборки"},"short":{"de": "ein Plan, der zeigt, wer wann putzt","en": "a plan that shows who cleans when","uk": "план, який показує, хто й коли прибирає","ru": "план, который показывает, кто и когда убирает"},"def":{"de":"Sie machen einen <b>Putzplan</b>, <g>weil</g> sonst niemand regelmäßig putzt.","en":"They make a <b>cleaning schedule</b> <g>because</g> otherwise nobody cleans regularly.","uk":"Вони складають <b>графік прибирання</b>, <g>тому що</g> інакше ніхто не прибирає регулярно.","ru":"Они составляют <b>график уборки</b>, <g>потому что</g> иначе никто не убирает регулярно."},"gram":"weil_satz"},
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
  {"id":"k3_021","cat":"k3","term":{"de":"zeigen","en":"to show","uk":"показувати","ru":"показывать"},"short":{"de": "jemandem etwas so präsentieren, dass er es sehen kann","en": "to present something to someone so they can see it","uk": "презентувати комусь щось так, щоб він це побачив","ru": "презентовать кому-то что-то так, чтобы он это увидел"},"def":{"de":"Er <b>zeigt</b> <g>seinem Kollegen</g> die neuen Unterlagen.","en":"He <b>shows</b> the new documents to <g>his colleague</g>.","uk":"Він <b>показує</b> <g>своєму колезі</g> нові документи.","ru":"Он <b>показывает</b> <g>своему коллеге</g> новые документы."},"gram":"dativ_akkusativ_verben"},
  {"id":"k3_022","cat":"k3","term":{"de":"widersprechen","en":"to contradict","uk":"суперечити","ru":"противоречить"},"short":{"de": "sagen, dass man eine andere Meinung hat als jemand","en": "to say that you have a different opinion than someone","uk": "казати, що маєш іншу думку, ніж хтось","ru": "говорить, что у тебя другое мнение, чем у кого-то"},"def":{"de":"Sie <b>widerspricht</b> <g>ihrem Chef</g> nur selten.","en":"She rarely <b>contradicts</b> <g>her boss</g>.","uk":"Вона рідко <b>суперечить</b> <g>своєму керівнику</g>.","ru":"Она редко <b>противоречит</b> <g>своему руководителю</g>."},"gram":"dativ_verben"},
  {"id":"k3_023","cat":"k3","term":{"de":"antworten","en":"to answer","uk":"відповідати","ru":"отвечать"},"short":{"de": "eine Reaktion auf eine Frage geben","en": "to give a reaction to a question","uk": "давати реакцію на запитання","ru": "давать реакцию на вопрос"},"def":{"de":"Er <b>antwortet</b> <g>seiner Kollegin</g> sofort auf die E-Mail.","en":"He <b>answers</b> <g>his colleague's</g> email right away.","uk":"Він одразу <b>відповідає</b> <g>своїй колезі</g> на лист.","ru":"Он сразу <b>отвечает</b> <g>своей коллеге</g> на письмо."},"gram":"dativ_verben"},
  {"id":"k3_024","cat":"k3","term":{"de":"folgen","en":"to follow","uk":"слідувати / йти за","ru":"следовать / идти за"},"short":{"de": "hinter jemandem herkommen oder tun, was er sagt","en": "to come after someone or do what they say","uk": "йти за кимось або робити те, що він каже","ru": "идти за кем-то или делать то, что он говорит"},"def":{"de":"Der neue Kollege <b>folgt</b> <g>dem erfahrenen Mitarbeiter</g> durch das ganze Gebäude.","en":"The new colleague <b>follows</b> <g>the experienced employee</g> through the whole building.","uk":"Новий колега <b>йде за</b> <g>досвідченим співробітником</g> по всій будівлі.","ru":"Новый коллега <b>идёт за</b> <g>опытным сотрудником</g> по всему зданию."},"gram":"dativ_verben"},
  {"id":"k3_025","cat":"k3","term":{"de":"begegnen","en":"to meet / to encounter","uk":"зустрічати(ся)","ru":"встречать(ся)"},"short":{"de": "zufällig treffen","en": "to meet by chance","uk": "випадково зустріти","ru": "случайно встретить"},"def":{"de":"Sie <b>begegnet</b> <g>ihrem alten Kollegen</g> zufällig in der Stadt.","en":"She <b>meets</b> <g>her old colleague</g> by chance in town.","uk":"Вона випадково <b>зустрічає</b> <g>свого колишнього колегу</g> в місті.","ru":"Она случайно <b>встречает</b> <g>своего бывшего коллегу</g> в городе."},"gram":"dativ_verben"},
  {"id":"k3_026","cat":"k3","term":{"de":"bemerken","en":"to notice","uk":"помічати","ru":"замечать"},"short":{"de": "etwas sehen oder merken, das vorher nicht klar war","en": "to see or realize something that wasn't clear before","uk": "побачити чи зрозуміти те, що раніше не було зрозуміло","ru": "увидеть или понять то, что раньше не было понятно"},"def":{"de":"Sie <b>bemerkt</b>, <g>dass</g> ihr Kollege heute besonders müde aussieht.","en":"She <b>notices</b> <g>that</g> her colleague looks especially tired today.","uk":"Вона <b>помічає</b>, <g>що</g> її колега сьогодні виглядає особливо втомленим.","ru":"Она <b>замечает</b>, <g>что</g> её коллега сегодня выглядит особенно уставшим."},"gram":"dass_satz"},
  {"id":"k3_027","cat":"k3","term":{"de":"glauben","en":"to believe","uk":"вірити / думати","ru":"верить / думать"},"short":{"de": "denken, dass etwas wahr ist","en": "to think that something is true","uk": "думати, що щось правдиве","ru": "думать, что что-то правда"},"def":{"de":"Ich <b>glaube</b>, <g>dass</g> unser Team dieses Jahr gewinnt.","en":"I <b>believe</b> <g>that</g> our team will win this year.","uk":"Я <b>вірю</b>, <g>що</g> наша команда переможе цього року.","ru":"Я <b>верю</b>, <g>что</g> наша команда победит в этом году."},"gram":"dass_satz"},
  {"id":"k3_028","cat":"k3","term":{"de":"meinen","en":"to think / to mean (opinion)","uk":"вважати","ru":"считать"},"short":{"de": "eine Meinung zu etwas haben und sagen","en": "to have and say an opinion about something","uk": "мати й висловлювати думку про щось","ru": "иметь и высказывать мнение о чём-то"},"def":{"de":"Er <b>meint</b>, <g>dass</g> Sport sehr wichtig für die Gesundheit ist.","en":"He <b>thinks</b> <g>that</g> sport is very important for health.","uk":"Він <b>вважає</b>, <g>що</g> спорт дуже важливий для здоровʼя.","ru":"Он <b>считает</b>, <g>что</g> спорт очень важен для здоровья."},"gram":"dass_satz"},
  {"id":"k3_029","cat":"k3","term":{"de":"die Mannschaft","en":"team","uk":"команда","ru":"команда"},"short":{"de": "eine Gruppe von Menschen, die zusammen Sport machen","en": "a group of people who play sports together","uk": "група людей, які разом займаються спортом","ru": "группа людей, которые вместе занимаются спортом"},"def":{"de":"Alle sehen, <g>dass</g> die <b>Mannschaft</b> in dieser Saison sehr gut spielt.","en":"Everyone can see <g>that</g> the <b>team</b> is playing very well this season.","uk":"Усі бачать, <g>що</g> <b>команда</b> цього сезону грає дуже добре.","ru":"Все видят, <g>что</g> <b>команда</b> в этом сезоне играет очень хорошо."},"gram":"dass_satz"},
  {"id":"k3_030","cat":"k3","term":{"de":"der Wettkampf","en":"competition","uk":"змагання","ru":"соревнование"},"short":{"de": "ein sportliches Ereignis, bei dem man gegeneinander spielt oder läuft","en": "a sporting event where people compete against each other","uk": "спортивна подія, де змагаються один з одним","ru": "спортивное событие, где соревнуются друг с другом"},"def":{"de":"Er hofft, <g>dass</g> der <b>Wettkampf</b> am Samstag nicht abgesagt wird.","en":"He hopes <g>that</g> the <b>competition</b> won't be cancelled on Saturday.","uk":"Він сподівається, <g>що</g> <b>змагання</b> в суботу не скасують.","ru":"Он надеется, <g>что</g> <b>соревнование</b> в субботу не отменят."},"gram":"dass_satz"},
  {"id":"k3_031","cat":"k3","term":{"de":"sollen","en":"should / to be supposed to","uk":"бути повинним","ru":"быть должным"},"short":{"de": "eine Pflicht oder einen Auftrag haben, etwas zu tun","en": "to have a duty or task to do something","uk": "мати обовʼязок чи доручення щось зробити","ru": "иметь обязанность или поручение что-то сделать"},"def":{"de":"Er <g><b>sollte</b></g> die Präsentation schon gestern fertig machen.","en":"He <g><b>was supposed to</b></g> finish the presentation yesterday already.","uk":"Він <g><b>мав</b></g> завершити презентацію ще вчора.","ru":"Он <g><b>должен был</b></g> закончить презентацию ещё вчера."},"gram":"modalverben_praeteritum"},
  {"id":"k3_032","cat":"k3","term":{"de":"verschieben","en":"to postpone","uk":"переносити (термін)","ru":"переносить (срок)"},"short":{"de": "einen Termin auf einen späteren Zeitpunkt legen","en": "to move an appointment to a later time","uk": "переносити зустріч на пізніший час","ru": "переносить встречу на более позднее время"},"def":{"de":"Sie <g><b>musste</b></g> das Meeting kurzfristig <b>verschieben</b>.","en":"She <g><b>had to</b></g> <b>postpone</b> the meeting at short notice.","uk":"Їй <g><b>довелося</b></g> терміново <b>перенести</b> зустріч.","ru":"Ей <g><b>пришлось</b></g> срочно <b>перенести</b> встречу."},"gram":"modalverben_praeteritum"},
  {"id":"k3_033","cat":"k3","term":{"de":"absagen","en":"to cancel","uk":"скасовувати","ru":"отменять"},"short":{"de": "sagen, dass ein Termin oder Treffen nicht stattfindet","en": "to say that an appointment or meeting will not take place","uk": "казати, що зустріч не відбудеться","ru": "говорить, что встреча не состоится"},"def":{"de":"Er <g><b>wollte</b></g> den Termin nicht <b>absagen</b>, aber es ging nicht anders.","en":"He <g><b>didn't want to</b></g> <b>cancel</b> the appointment, but there was no other way.","uk":"Він <g><b>не хотів</b></g> <b>скасовувати</b> зустріч, але іншого виходу не було.","ru":"Он <g><b>не хотел</b></g> <b>отменять</b> встречу, но другого выхода не было."},"gram":"modalverben_praeteritum"},
  {"id":"k3_034","cat":"k3","term":{"de":"die Verabredung","en":"appointment / date (meeting)","uk":"домовленість про зустріч","ru":"договорённость о встрече"},"short":{"de": "eine Vereinbarung, sich mit jemandem zu treffen","en": "an agreement to meet with someone","uk": "домовленість зустрітися з кимось","ru": "договорённость встретиться с кем-то"},"def":{"de":"Sie <g><b>konnte</b></g> die <b>Verabredung</b> mit ihrer Freundin leider nicht einhalten.","en":"She unfortunately <g><b>couldn't</b></g> keep the <b>appointment</b> with her friend.","uk":"Вона, на жаль, <g><b>не змогла</b></g> дотримати <b>домовленості</b> про зустріч із подругою.","ru":"Она, к сожалению, <g><b>не смогла</b></g> сдержать <b>договорённость</b> о встрече с подругой."},"gram":"modalverben_praeteritum"},
  {"id":"k3_035","cat":"k3","term":{"de":"der Kalender","en":"calendar","uk":"календар","ru":"календарь"},"short":{"de": "ein Buch oder eine App, in der man Termine notiert","en": "a book or app where you note appointments","uk": "книга або застосунок, у якому записують зустрічі","ru": "книга или приложение, в котором записывают встречи"},"def":{"de":"Er <g><b>musste</b></g> zuerst in seinem <b>Kalender</b> nachsehen, ob er Zeit hat.","en":"He <g><b>had to</b></g> check his <b>calendar</b> first to see if he had time.","uk":"Йому <g><b>довелося</b></g> спершу перевірити свій <b>календар</b>, чи в нього є час.","ru":"Ему <g><b>пришлось</b></g> сначала проверить свой <b>календарь</b>, есть ли у него время."},"gram":"modalverben_praeteritum"},
  {"id":"k3_036","cat":"k3","term":{"de":"die Freizeit","en":"leisure time / free time","uk":"вільний час","ru":"свободное время"},"short":{"de": "die Zeit, die man nicht arbeitet und frei gestalten kann","en": "the time when you don't work and can do what you want","uk": "час, коли не працюєш і можеш робити що хочеш","ru": "время, когда не работаешь и можешь делать что хочешь"},"def":{"de":"Früher <g><b>konnte</b></g> er in seiner <b>Freizeit</b> viel mehr Sport machen.","en":"In the past, he <g><b>could</b></g> do much more sport in his <b>free time</b>.","uk":"Раніше він <g><b>міг</b></g> займатися спортом у свій <b>вільний час</b> набагато більше.","ru":"Раньше он <g><b>мог</b></g> заниматься спортом в своё <b>свободное время</b> намного больше."},"gram":"modalverben_praeteritum"},
  {"id":"k3_037","cat":"k3","term":{"de":"wandern","en":"to hike","uk":"ходити в походи / мандрувати пішки","ru":"ходить в походы / гулять пешком"},"short":{"de": "lange zu Fuß in der Natur gehen","en": "to walk for a long time in nature","uk": "довго йти пішки на природі","ru": "долго идти пешком на природе"},"def":{"de":"Sie <g><b>wollten</b></g> am Wochenende in den Bergen <b>wandern</b>.","en":"They <g><b>wanted to</b></g> <b>hike</b> in the mountains on the weekend.","uk":"На вихідних вони <g><b>хотіли</b></g> <b>піти в похід</b> у горах.","ru":"На выходных они <g><b>хотели</b></g> <b>пойти в поход</b> в горах."},"gram":"modalverben_praeteritum"},
  {"id":"k3_038","cat":"k3","term":{"de":"joggen","en":"to jog","uk":"бігати підтюпцем","ru":"бегать трусцой"},"short":{"de": "in einem gleichmäßigen Tempo zum Sport laufen","en": "to run for exercise at a steady pace","uk": "бігати рівномірним темпом заради спорту","ru": "бегать равномерным темпом ради спорта"},"def":{"de":"Nach der Verletzung <g><b>durfte</b></g> er erst nach zwei Monaten wieder <b>joggen</b>.","en":"After the injury, he <g><b>was allowed</b></g> to <b>jog</b> again only after two months.","uk":"Після травми йому <g><b>дозволили</b></g> знову <b>бігати</b> лише через два місяці.","ru":"После травмы ему <g><b>разрешили</b></g> снова <b>бегать</b> только через два месяца."},"gram":"modalverben_praeteritum"},
  {"id":"k3_039","cat":"k3","term":{"de":"das Fitnessstudio","en":"gym","uk":"спортзал / фітнес-клуб","ru":"спортзал / фитнес-клуб"},"short":{"de": "ein Ort, an dem man mit Geräten trainieren kann","en": "a place where you can train with equipment","uk": "місце, де можна тренуватися на тренажерах","ru": "место, где можно тренироваться на тренажёрах"},"def":{"de":"Sie <g><b>musste</b></g> ihre Mitgliedschaft im <b>Fitnessstudio</b> pausieren.","en":"She <g><b>had to</b></g> pause her membership at the <b>gym</b>.","uk":"Їй <g><b>довелося</b></g> призупинити своє членство у <b>фітнес-клубі</b>.","ru":"Ей <g><b>пришлось</b></g> приостановить своё членство в <b>фитнес-клубе</b>."},"gram":"modalverben_praeteritum"},
  {"id":"k3_040","cat":"k3","term":{"de":"teilnehmen","en":"to participate / to take part","uk":"брати участь","ru":"принимать участие"},"short":{"de": "bei etwas mitmachen","en": "to join in something","uk": "приєднуватися до чогось","ru": "присоединяться к чему-то"},"def":{"de":"Er <g><b>wollte</b></g> unbedingt am Wettkampf <b>teilnehmen</b>.","en":"He <g><b>really wanted to</b></g> <b>take part</b> in the competition.","uk":"Він дуже <g><b>хотів</b></g> <b>взяти участь</b> у змаганні.","ru":"Он очень <g><b>хотел</b></g> <b>принять участие</b> в соревновании."},"gram":"modalverben_praeteritum"},
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
  {"id":"k4_024","cat":"k4","term":{"de":"der Mantel","en":"coat","uk":"пальто","ru":"пальто"},"short":{"de": "ein langes, warmes Kleidungsstück, das man über der anderen Kleidung trägt","en": "a long, warm piece of clothing worn over other clothes","uk": "довгий теплий одяг, який носять поверх іншого одягу","ru": "длинная тёплая одежда, которую носят поверх другой одежды"},"def":{"de":"Dieser dunkle <b>Mantel</b> steht <g>ihr</g> besonders gut im Winter.","en":"This dark <b>coat</b> suits <g>her</g> especially well in winter.","uk":"Це темне <b>пальто</b> взимку дуже пасує <g>їй</g>.","ru":"Это тёмное <b>пальто</b> зимой очень идёт <g>ей</g>."},"gram":"dativ_verben"},
  {"id":"k4_025","cat":"k4","term":{"de":"die Mütze","en":"hat / beanie","uk":"шапка","ru":"шапка"},"short":{"de": "eine warme Kopfbedeckung für den Winter","en": "a warm head covering for winter","uk": "тепле покриття для голови взимку","ru": "тёплый головной убор на зиму"},"def":{"de":"Die rote <b>Mütze</b> gefällt <g>ihm</g> am besten.","en":"The red <b>hat</b> pleases <g>him</g> the most.","uk":"Червона <b>шапка</b> найбільше подобається <g>йому</g>.","ru":"Красная <b>шапка</b> больше всего нравится <g>ему</g>."},"gram":"dativ_verben"},
  {"id":"k4_026","cat":"k4","term":{"de":"der Schal","en":"scarf","uk":"шарф","ru":"шарф"},"short":{"de": "ein langes Stück Stoff, das man um den Hals trägt","en": "a long piece of fabric worn around the neck","uk": "довгий шматок тканини, який носять на шиї","ru": "длинный кусок ткани, который носят на шее"},"def":{"de":"Dieser weiche <b>Schal</b> gehört <g>meiner Schwester</g>.","en":"This soft <b>scarf</b> belongs to <g>my sister</g>.","uk":"Цей мʼякий <b>шарф</b> належить <g>моїй сестрі</g>.","ru":"Этот мягкий <b>шарф</b> принадлежит <g>моей сестре</g>."},"gram":"dativ_verben"},
  {"id":"k4_027","cat":"k4","term":{"de":"die Krawatte","en":"tie","uk":"краватка","ru":"галстук"},"short":{"de": "ein schmales Stück Stoff, das Männer zu einem Hemd um den Hals binden","en": "a narrow piece of fabric men tie around the neck with a shirt","uk": "вузький шматок тканини, який чоловіки повʼязують на шию з сорочкою","ru": "узкий кусок ткани, который мужчины повязывают на шею с рубашкой"},"def":{"de":"Diese blaue <b>Krawatte</b> passt <g>ihm</g> perfekt zum Anzug.","en":"This blue <b>tie</b> fits <g>him</g> perfectly with the suit.","uk":"Ця синя <b>краватка</b> ідеально пасує <g>йому</g> до костюма.","ru":"Этот синий <b>галстук</b> идеально подходит <g>ему</g> к костюму."},"gram":"dativ_verben"},
  {"id":"k4_028","cat":"k4","term":{"de":"die Bluse","en":"blouse","uk":"блузка","ru":"блузка"},"short":{"de": "ein leichtes Oberteil für Frauen, ähnlich wie ein Hemd","en": "a light top for women, similar to a shirt","uk": "легкий верх для жінок, схожий на сорочку","ru": "лёгкий верх для женщин, похожий на рубашку"},"def":{"de":"Sie kauft sich <g>eine neue</g> <b>Bluse</b> für das Vorstellungsgespräch.","en":"She buys herself <g>a new</g> <b>blouse</b> for the job interview.","uk":"Вона купує собі <g>нову</g> <b>блузку</b> для співбесіди.","ru":"Она покупает себе <g>новую</g> <b>блузку</b> для собеседования."},"gram":"adjektivendungen"},
  {"id":"k4_029","cat":"k4","term":{"de":"die Jeans","en":"jeans","uk":"джинси","ru":"джинсы"},"short":{"de": "eine Hose aus festem, meist blauem Stoff","en": "trousers made of sturdy, usually blue fabric","uk": "штани з міцної, зазвичай синьої тканини","ru": "брюки из плотной, обычно синей ткани"},"def":{"de":"Er trägt heute <g>seine alte</g> <b>Jeans</b> zur Arbeit.","en":"He wears <g>his old</g> <b>jeans</b> to work today.","uk":"Сьогодні він одягає на роботу <g>свої старі</g> <b>джинси</b>.","ru":"Сегодня он надевает на работу <g>свои старые</g> <b>джинсы</b>."},"gram":"adjektivendungen"},
  {"id":"k4_030","cat":"k4","term":{"de":"anziehen","en":"to put on","uk":"одягати","ru":"надевать"},"short":{"de": "Kleidung am Körper anziehen","en": "to put clothing onto your body","uk": "надягати одяг на тіло","ru": "надевать одежду на тело"},"def":{"de":"Sie <b>zieht</b> <g>ein warmes</g> Kleid <b>an</b>.","en":"She <b>puts on</b> <g>a warm</g> dress.","uk":"Вона <b>одягає</b> <g>теплу</g> сукню.","ru":"Она <b>надевает</b> <g>тёплое</g> платье."},"gram":"adjektivendungen"},
  {"id":"k4_031","cat":"k4","term":{"de":"ausziehen","en":"to take off","uk":"знімати (одяг)","ru":"снимать (одежду)"},"short":{"de": "Kleidung vom Körper nehmen","en": "to remove clothing from your body","uk": "знімати одяг з тіла","ru": "снимать одежду с тела"},"def":{"de":"Er <b>zieht</b> <g>seine nasse</g> Jacke <b>aus</b>.","en":"He <b>takes off</b> <g>his wet</g> jacket.","uk":"Він <b>знімає</b> <g>свою мокру</g> куртку.","ru":"Он <b>снимает</b> <g>свою мокрую</g> куртку."},"gram":"adjektivendungen"},
  {"id":"k4_032","cat":"k4","term":{"de":"bunt","en":"colorful","uk":"барвистий / різнокольоровий","ru":"яркий / разноцветный"},"short":{"de": "mit vielen verschiedenen Farben","en": "with many different colors","uk": "з багатьма різними кольорами","ru": "со многими разными цветами"},"def":{"de":"Sie trägt gern <g>ein buntes</g> Kleid im Sommer.","en":"She likes to wear <g>a colorful</g> dress in summer.","uk":"Влітку вона любить носити <g>барвисту</g> сукню.","ru":"Летом она любит носить <g>яркое</g> платье."},"gram":"adjektivendungen"},
  {"id":"k4_033","cat":"k4","term":{"de":"dunkel","en":"dark","uk":"темний","ru":"тёмный"},"short":{"de": "mit wenig Licht oder Farbe, das Gegenteil von hell","en": "with little light or color, the opposite of bright","uk": "з малою кількістю світла чи кольору, протилежне світлому","ru": "с малым количеством света или цвета, противоположность светлому"},"def":{"de":"Er sucht <g>eine dunkle</g> Hose für das Büro.","en":"He is looking for <g>a dark</g> pair of trousers for the office.","uk":"Він шукає <g>темні</g> штани для офісу.","ru":"Он ищет <g>тёмные</g> брюки для офиса."},"gram":"adjektivendungen"},
  {"id":"k4_034","cat":"k4","term":{"de":"einfarbig","en":"solid-colored / plain","uk":"однотонний","ru":"однотонный"},"short":{"de": "nur eine Farbe habend, ohne Muster","en": "having only one color, without a pattern","uk": "має лише один колір, без візерунка","ru": "имеет только один цвет, без узора"},"def":{"de":"Sie möchte lieber <g>ein einfarbiges</g> Hemd ohne Muster kaufen.","en":"She would rather buy <g>a plain</g> shirt without a pattern.","uk":"Вона хоче купити радше <g>однотонну</g> сорочку без візерунка.","ru":"Она предпочитает купить <g>однотонную</g> рубашку без узора."},"gram":"adjektivendungen"},
  {"id":"k4_035","cat":"k4","term":{"de":"das Muster","en":"pattern","uk":"візерунок / узор","ru":"узор"},"short":{"de": "ein sich wiederholendes Design auf Stoff","en": "a repeating design on fabric","uk": "дизайн на тканині, що повторюється","ru": "повторяющийся дизайн на ткани"},"def":{"de":"<g>Was für ein</g> <b>Muster</b> gefällt dir bei einer Bluse am besten?","en":"<g>What kind of</g> <b>pattern</b> do you like best on a blouse?","uk":"<g>Який саме</g> <b>візерунок</b> тобі найбільше подобається на блузці?","ru":"<g>Какой именно</g> <b>узор</b> тебе больше всего нравится на блузке?"},"gram":"was_fuer_ein"},
  {"id":"k4_036","cat":"k4","term":{"de":"der Anzug","en":"suit","uk":"костюм","ru":"костюм"},"short":{"de": "elegante Kleidung für Männer, bestehend aus Jacke und Hose","en": "elegant clothing for men, consisting of a jacket and trousers","uk": "елегантний одяг для чоловіків, що складається з піджака та штанів","ru": "элегантная одежда для мужчин, состоящая из пиджака и брюк"},"def":{"de":"Er trägt zur Hochzeit <g>einen dunklen</g> <b>Anzug</b>.","en":"He wears <g>a dark</g> <b>suit</b> to the wedding.","uk":"На весілля він одягає <g>темний</g> <b>костюм</b>.","ru":"На свадьбу он надевает <g>тёмный</g> <b>костюм</b>."},"gram":"adjektivendungen"},
  {"id":"k4_037","cat":"k4","term":{"de":"elegant","en":"elegant","uk":"елегантний","ru":"элегантный"},"short":{"de": "schön, stilvoll und fein gekleidet","en": "beautifully, stylishly and finely dressed","uk": "красиво, стильно та вишукано одягнений","ru": "красиво, стильно и изысканно одетый"},"def":{"de":"Sie sucht <g>ein elegantes</g> Kleid für das Fest.","en":"She is looking for <g>an elegant</g> dress for the party.","uk":"Вона шукає <g>елегантну</g> сукню для свята.","ru":"Она ищет <g>элегантное</g> платье для праздника."},"gram":"adjektivendungen"},
  {"id":"k4_038","cat":"k4","term":{"de":"der Schmuck","en":"jewelry","uk":"прикраси","ru":"украшения"},"short":{"de": "Ringe, Ketten oder Ohrringe, die man zur Kleidung trägt","en": "rings, necklaces or earrings worn with clothing","uk": "перстні, намиста чи сережки, які носять з одягом","ru": "кольца, цепочки или серьги, которые носят с одеждой"},"def":{"de":"Zum Kleid passt <g>ein silberner</g> <b>Schmuck</b> besonders gut.","en":"<g>Silver</g> <b>jewelry</b> goes especially well with the dress.","uk":"До сукні особливо добре пасують <g>срібні</g> <b>прикраси</b>.","ru":"К платью особенно хорошо подходят <g>серебряные</g> <b>украшения</b>."},"gram":"adjektivendungen"},
  {"id":"k4_039","cat":"k4","term":{"de":"feierlich","en":"festive / formal","uk":"урочистий","ru":"торжественный"},"short":{"de": "passend für ein besonderes, wichtiges Fest","en": "suitable for a special, important celebration","uk": "підходящий для особливого, важливого свята","ru": "подходящий для особого, важного праздника"},"def":{"de":"Sie zieht sich <g>ein feierliches</g> Kleid für die Feier an.","en":"She puts on <g>a festive</g> dress for the celebration.","uk":"Вона одягає <g>урочисту</g> сукню на святкування.","ru":"Она надевает <g>торжественное</g> платье на праздник."},"gram":"adjektivendungen"},
  {"id":"k4_040","cat":"k4","term":{"de":"der Anlass","en":"occasion","uk":"привід / нагода","ru":"повод"},"short":{"de": "ein Grund oder Ereignis, warum man etwas Besonderes macht oder trägt","en": "a reason or event why you do or wear something special","uk": "причина чи подія, через яку робиш чи носиш щось особливе","ru": "причина или событие, из-за которого делаешь или носишь что-то особенное"},"def":{"de":"<g>Für was für einen</g> <b>Anlass</b> brauchst du die Festkleidung?","en":"<g>For what kind of</g> <b>occasion</b> do you need the formal clothing?","uk":"<g>Для якого саме</g> <b>приводу</b> тобі потрібен святковий одяг?","ru":"<g>Для какого именно</g> <b>повода</b> тебе нужна праздничная одежда?"},"gram":"was_fuer_ein"},
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
  {"id":"k5_021","cat":"k5","term":{"de":"der Zug","en":"train","uk":"потяг","ru":"поезд"},"short":{"de": "ein langes Fahrzeug auf Schienen, das viele Menschen transportiert","en": "a long vehicle on rails that transports many people","uk": "довгий транспортний засіб на рейках, що перевозить багато людей","ru": "длинное транспортное средство на рельсах, которое перевозит много людей"},"def":{"de":"<g>Wenn</g> sie zur Arbeit pendelt, nimmt sie meistens den <b>Zug</b>.","en":"<g>When</g> she commutes to work, she usually takes the <b>train</b>.","uk":"<g>Коли</g> вона їде на роботу, вона зазвичай їде <b>потягом</b>.","ru":"<g>Когда</g> она едет на работу, она обычно едет на <b>поезде</b>."},"gram":"wenn_satz"},
  {"id":"k5_022","cat":"k5","term":{"de":"die Straßenbahn","en":"tram","uk":"трамвай","ru":"трамвай"},"short":{"de": "ein Fahrzeug, das auf Schienen mitten in der Stadt fährt","en": "a vehicle that runs on rails through the middle of a city","uk": "транспортний засіб, який рухається рейками через центр міста","ru": "транспортное средство, которое движется по рельсам через центр города"},"def":{"de":"<g>Wenn</g> die <b>Straßenbahn</b> ausfällt, muss er ein anderes Verkehrsmittel nehmen.","en":"<g>When</g> the <b>tram</b> is cancelled, he has to take another means of transport.","uk":"<g>Коли</g> <b>трамвай</b> скасовують, йому доводиться їхати іншим транспортом.","ru":"<g>Когда</g> <b>трамвай</b> отменяют, ему приходится ехать другим транспортом."},"gram":"wenn_satz"},
  {"id":"k5_023","cat":"k5","term":{"de":"das Motorrad","en":"motorcycle","uk":"мотоцикл","ru":"мотоцикл"},"short":{"de": "ein zweirädriges Fahrzeug mit Motor","en": "a two-wheeled vehicle with an engine","uk": "двоколісний транспортний засіб з двигуном","ru": "двухколёсное транспортное средство с двигателем"},"def":{"de":"<g>Wenn</g> das Wetter gut ist, fährt er gern mit dem <b>Motorrad</b>.","en":"<g>When</g> the weather is good, he likes to ride his <b>motorcycle</b>.","uk":"<g>Коли</g> погода гарна, він любить їздити на <b>мотоциклі</b>.","ru":"<g>Когда</g> погода хорошая, он любит ездить на <b>мотоцикле</b>."},"gram":"wenn_satz"},
  {"id":"k5_024","cat":"k5","term":{"de":"umsteigen","en":"to change / to transfer","uk":"робити пересадку","ru":"делать пересадку"},"short":{"de": "von einem Verkehrsmittel in ein anderes wechseln","en": "to switch from one means of transport to another","uk": "переходити з одного транспорту на інший","ru": "переходить с одного транспорта на другой"},"def":{"de":"<g>Wenn</g> man ins Zentrum will, muss man an dieser Station <b>umsteigen</b>.","en":"<g>When</g> you want to go downtown, you have to <b>change</b> at this station.","uk":"<g>Коли</g> хочеш дістатися до центру, треба зробити <b>пересадку</b> на цій станції.","ru":"<g>Когда</g> хочешь добраться до центра, нужно сделать <b>пересадку</b> на этой станции."},"gram":"wenn_satz"},
  {"id":"k5_025","cat":"k5","term":{"de":"öffentlich","en":"public","uk":"громадський / публічний","ru":"общественный"},"short":{"de": "für alle Menschen zugänglich, nicht privat","en": "accessible to everyone, not private","uk": "доступний для всіх людей, не приватний","ru": "доступный для всех людей, не частный"},"def":{"de":"<g>Wenn</g> es einen guten <b>öffentlichen</b> Verkehr gibt, braucht man kein eigenes Auto.","en":"<g>When</g> there is good <b>public</b> transport, you don't need your own car.","uk":"<g>Коли</g> є хороший <b>громадський</b> транспорт, власне авто не потрібне.","ru":"<g>Когда</g> есть хороший <b>общественный</b> транспорт, собственное авто не нужно."},"gram":"wenn_satz"},
  {"id":"k5_026","cat":"k5","term":{"de":"die Verspätung","en":"delay","uk":"затримка / запізнення","ru":"задержка / опоздание"},"short":{"de": "wenn etwas später kommt oder passiert, als geplant","en": "when something comes or happens later than planned","uk": "коли щось приходить чи відбувається пізніше, ніж заплановано","ru": "когда что-то приходит или происходит позже, чем запланировано"},"def":{"de":"Er kommt zu spät, <g>weil</g> der Zug heute <b>Verspätung</b> hat.","en":"He is late <g>because</g> the train has a <b>delay</b> today.","uk":"Він запізнюється, <g>тому що</g> сьогодні потяг має <b>затримку</b>.","ru":"Он опаздывает, <g>потому что</g> сегодня у поезда <b>задержка</b>."},"gram":"weil_satz"},
  {"id":"k5_027","cat":"k5","term":{"de":"der Stress","en":"stress","uk":"стрес","ru":"стресс"},"short":{"de": "ein Gefühl von Druck und Nervosität","en": "a feeling of pressure and nervousness","uk": "відчуття тиску й нервовості","ru": "чувство давления и нервозности"},"def":{"de":"Sie hat morgens oft <b>Stress</b>, <g>weil</g> die Straßenbahn selten pünktlich kommt.","en":"She often has <b>stress</b> in the morning <g>because</g> the tram rarely comes on time.","uk":"Вранці вона часто відчуває <b>стрес</b>, <g>тому що</g> трамвай рідко приходить вчасно.","ru":"Утром она часто испытывает <b>стресс</b>, <g>потому что</g> трамвай редко приходит вовремя."},"gram":"weil_satz"},
  {"id":"k5_028","cat":"k5","term":{"de":"die Ampel","en":"traffic light","uk":"світлофор","ru":"светофор"},"short":{"de": "ein Verkehrszeichen mit rotem, gelbem und grünem Licht","en": "a traffic signal with red, yellow and green light","uk": "дорожній знак з червоним, жовтим і зеленим світлом","ru": "дорожный знак с красным, жёлтым и зелёным светом"},"def":{"de":"Er wartet lange, <g>weil</g> die <b>Ampel</b> an dieser Kreuzung sehr oft rot ist.","en":"He waits a long time <g>because</g> the <b>traffic light</b> at this intersection is very often red.","uk":"Він довго чекає, <g>тому що</g> <b>світлофор</b> на цьому перехресті дуже часто червоний.","ru":"Он долго ждёт, <g>потому что</g> <b>светофор</b> на этом перекрёстке очень часто красный."},"gram":"weil_satz"},
  {"id":"k5_029","cat":"k5","term":{"de":"einsteigen","en":"to get on / to board","uk":"сідати (в транспорт)","ru":"садиться (в транспорт)"},"short":{"de": "in ein Verkehrsmittel hineingehen","en": "to step into a means of transport","uk": "заходити у транспортний засіб","ru": "заходить в транспортное средство"},"def":{"de":"Sie muss schnell <b>einsteigen</b>, <g>weil</g> der Bus gleich losfährt.","en":"She has to <b>get on</b> quickly <g>because</g> the bus is about to leave.","uk":"Їй треба швидко <b>сідати</b>, <g>тому що</g> автобус зараз рушить.","ru":"Ей нужно быстро <b>садиться</b>, <g>потому что</g> автобус сейчас отправится."},"gram":"weil_satz"},
  {"id":"k5_030","cat":"k5","term":{"de":"aussteigen","en":"to get off","uk":"виходити (з транспорту)","ru":"выходить (из транспорта)"},"short":{"de": "aus einem Verkehrsmittel herausgehen","en": "to step out of a means of transport","uk": "виходити з транспортного засобу","ru": "выходить из транспортного средства"},"def":{"de":"Er muss hier <b>aussteigen</b>, <g>weil</g> das die letzte Haltestelle ist.","en":"He has to <b>get off</b> here <g>because</g> this is the last stop.","uk":"Йому треба <b>виходити</b> тут, <g>тому що</g> це остання зупинка.","ru":"Ему нужно <b>выходить</b> здесь, <g>потому что</g> это последняя остановка."},"gram":"weil_satz"},
  {"id":"k5_031","cat":"k5","term":{"de":"teuer","en":"expensive","uk":"дорогий","ru":"дорогой"},"short":{"de": "mit hohem Preis, viel kostend","en": "with a high price, costing a lot","uk": "з високою ціною, коштує багато","ru": "с высокой ценой, стоит много"},"def":{"de":"Ein Taxi ist meistens <g><b>teurer</b> als</g> die U-Bahn.","en":"A taxi is usually <g><b>more expensive</b> than</g> the subway.","uk":"Таксі зазвичай <g><b>дорожче</b>, ніж</g> метро.","ru":"Такси обычно <g><b>дороже</b>, чем</g> метро."},"gram":"komparativ"},
  {"id":"k5_032","cat":"k5","term":{"de":"sicher","en":"safe","uk":"безпечний","ru":"безопасный"},"short":{"de": "ohne großes Risiko, geschützt","en": "without great risk, protected","uk": "без великого ризику, захищений","ru": "без большого риска, защищённый"},"def":{"de":"Der Zug ist <g><b>sicherer</b> als</g> das Auto.","en":"The train is <g><b>safer</b> than</g> the car.","uk":"Потяг <g><b>безпечніший</b>, ніж</g> автомобіль.","ru":"Поезд <g><b>безопаснее</b>, чем</g> автомобиль."},"gram":"komparativ"},
  {"id":"k5_033","cat":"k5","term":{"de":"laut","en":"loud","uk":"гучний","ru":"громкий"},"short":{"de": "mit viel Lärm, das Gegenteil von leise","en": "with a lot of noise, the opposite of quiet","uk": "з великим шумом, протилежне тихому","ru": "с большим шумом, противоположность тихому"},"def":{"de":"Das Motorrad ist <g><b>lauter</b> als</g> das Fahrrad.","en":"The motorcycle is <g><b>louder</b> than</g> the bicycle.","uk":"Мотоцикл <g><b>гучніший</b>, ніж</g> велосипед.","ru":"Мотоцикл <g><b>громче</b>, чем</g> велосипед."},"gram":"komparativ"},
  {"id":"k5_034","cat":"k5","term":{"de":"umweltfreundlich","en":"eco-friendly","uk":"екологічний / екологічно чистий","ru":"экологичный"},"short":{"de": "gut für die Umwelt, ohne ihr zu schaden","en": "good for the environment, without harming it","uk": "добрий для довкілля, не шкодить йому","ru": "хороший для окружающей среды, не вредит ей"},"def":{"de":"Das Fahrrad ist <g><b>umweltfreundlicher</b> als</g> das Auto.","en":"The bicycle is <g><b>more eco-friendly</b> than</g> the car.","uk":"Велосипед <g><b>екологічніший</b>, ніж</g> автомобіль.","ru":"Велосипед <g><b>экологичнее</b>, чем</g> автомобиль."},"gram":"komparativ"},
  {"id":"k5_035","cat":"k5","term":{"de":"praktisch","en":"practical","uk":"практичний","ru":"практичный"},"short":{"de": "nützlich und einfach im Alltag zu benutzen","en": "useful and easy to use in everyday life","uk": "корисний і простий у щоденному використанні","ru": "полезный и простой в повседневном использовании"},"def":{"de":"Für kurze Strecken ist ein Fahrrad <g><b>praktischer</b> als</g> ein Auto.","en":"For short distances, a bicycle is <g><b>more practical</b> than</g> a car.","uk":"Для коротких відстаней велосипед <g><b>практичніший</b>, ніж</g> автомобіль.","ru":"Для коротких расстояний велосипед <g><b>практичнее</b>, чем</g> автомобиль."},"gram":"komparativ"},
  {"id":"k5_036","cat":"k5","term":{"de":"gefährlich","en":"dangerous","uk":"небезпечний","ru":"опасный"},"short":{"de": "mit großem Risiko, nicht sicher","en": "with great risk, not safe","uk": "з великим ризиком, не безпечний","ru": "с большим риском, не безопасный"},"def":{"de":"Nachts ohne Licht Fahrrad zu fahren ist <g>am <b>gefährlichsten</b></g>.","en":"Cycling at night without lights is <g>the <b>most dangerous</b></g>.","uk":"Їхати на велосипеді вночі без світла <g><b>найнебезпечніше</b></g>.","ru":"Ездить на велосипеде ночью без света <g><b>опаснее всего</b></g>."},"gram":"superlativ"},
  {"id":"k5_037","cat":"k5","term":{"de":"günstig","en":"affordable / cheap","uk":"недорогий / вигідний за ціною","ru":"недорогой / выгодный по цене"},"short":{"de": "mit niedrigem Preis, nicht teuer","en": "with a low price, not expensive","uk": "з низькою ціною, не дорогий","ru": "с низкой ценой, не дорогой"},"def":{"de":"Von allen Verkehrsmitteln ist der Bus <g>am <b>günstigsten</b></g>.","en":"Of all the means of transport, the bus is <g>the <b>cheapest</b></g>.","uk":"З усіх видів транспорту автобус <g><b>найдешевший</b></g>.","ru":"Из всех видов транспорта автобус <g><b>дешевле всего</b></g>."},"gram":"superlativ"},
  {"id":"k5_038","cat":"k5","term":{"de":"sauber","en":"clean","uk":"чистий","ru":"чистый"},"short":{"de": "ohne Schmutz, rein","en": "without dirt, pure","uk": "без бруду","ru": "без грязи"},"def":{"de":"Von allen Bahnen ist diese neue U-Bahn-Linie <g>am <b>saubersten</b></g>.","en":"Of all the lines, this new subway line is <g>the <b>cleanest</b></g>.","uk":"З усіх ліній ця нова лінія метро <g><b>найчистіша</b></g>.","ru":"Из всех линий эта новая линия метро <g><b>чище всего</b></g>."},"gram":"superlativ"},
  {"id":"k5_039","cat":"k5","term":{"de":"modern","en":"modern","uk":"сучасний","ru":"современный"},"short":{"de": "neu und mit aktueller Technik","en": "new and with up-to-date technology","uk": "новий, з актуальною технікою","ru": "новый, с актуальной техникой"},"def":{"de":"Dieser Bus ist <g>am <b>modernsten</b></g> in der ganzen Stadt.","en":"This bus is <g>the <b>most modern</b></g> in the whole city.","uk":"Цей автобус <g><b>найсучасніший</b></g> у всьому місті.","ru":"Этот автобус <g><b>современнее всего</b></g> во всём городе."},"gram":"superlativ"},
  {"id":"k5_040","cat":"k5","term":{"de":"alt","en":"old","uk":"старий","ru":"старый"},"short":{"de": "nicht neu, schon lange existierend","en": "not new, existing for a long time","uk": "не новий, існує вже довго","ru": "не новый, существует уже давно"},"def":{"de":"Diese Straßenbahnlinie ist <g>am <b>ältesten</b></g> in der Stadt.","en":"This tram line is <g>the <b>oldest</b></g> in the city.","uk":"Ця трамвайна лінія <g><b>найстаріша</b></g> у місті.","ru":"Эта трамвайная линия <g><b>старше всего</b></g> в городе."},"gram":"superlativ"},
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
  {"id":"k6_020","cat":"k6","term":{"de":"die Tante","en":"aunt","uk":"тітка","ru":"тётя"},"short":{"de": "die Schwester von Mutter oder Vater","en": "the sister of your mother or father","uk": "сестра матері чи батька","ru": "сестра матери или отца"},"def":{"de":"Sie <g>möchte</g> ihre <b>Tante</b> zur Hochzeit einladen.","en":"She <g>would like</g> to invite her <b>aunt</b> to the wedding.","uk":"Вона <g>хоче</g> запросити свою <b>тітку</b> на весілля.","ru":"Она <g>хочет</g> пригласить свою <b>тётю</b> на свадьбу."},"gram":"modalverben"},
  {"id":"k6_021","cat":"k6","term":{"de":"der Onkel","en":"uncle","uk":"дядько","ru":"дядя"},"short":{"de": "der Bruder von Mutter oder Vater","en": "the brother of your mother or father","uk": "брат матері чи батька","ru": "брат матери или отца"},"def":{"de":"Er <g>kann</g> seinen <b>Onkel</b> leider nicht zur Feier einladen.","en":"He <g>can't</g> unfortunately invite his <b>uncle</b> to the celebration.","uk":"Він, на жаль, <g>не може</g> запросити свого <b>дядька</b> на свято.","ru":"Он, к сожалению, <g>не может</g> пригласить своего <b>дядю</b> на праздник."},"gram":"modalverben"},
  {"id":"k6_022","cat":"k6","term":{"de":"der Cousin / die Cousine","en":"cousin","uk":"двоюрідний брат / двоюрідна сестра","ru":"двоюродный брат / двоюродная сестра"},"short":{"de": "das Kind von Tante oder Onkel","en": "the child of your aunt or uncle","uk": "дитина тітки чи дядька","ru": "ребёнок тёти или дяди"},"def":{"de":"Sie <g>will</g> unbedingt ihre <b>Cousine</b> zur Hochzeit einladen.","en":"She <g>really wants</g> to invite her <b>cousin</b> to the wedding.","uk":"Вона обовʼязково <g>хоче</g> запросити свою <b>кузину</b> на весілля.","ru":"Она обязательно <g>хочет</g> пригласить свою <b>кузину</b> на свадьбу."},"gram":"modalverben"},
  {"id":"k6_023","cat":"k6","term":{"de":"sich verloben","en":"to get engaged","uk":"заручатися","ru":"обручаться"},"short":{"de": "versprechen, jemanden später zu heiraten","en": "to promise to marry someone later","uk": "обіцяти пізніше одружитися з кимось","ru": "обещать позже жениться на ком-то / выйти замуж за кого-то"},"def":{"de":"Sie <g>wollen</g> sich noch dieses Jahr <b>verloben</b>.","en":"They <g>want</g> to <b>get engaged</b> this year.","uk":"Вони <g>хочуть</g> <b>заручитися</b> ще цього року.","ru":"Они <g>хотят</g> <b>обручиться</b> ещё в этом году."},"gram":"modalverben"},
  {"id":"k6_024","cat":"k6","term":{"de":"die Verlobung","en":"engagement","uk":"заручини","ru":"помолвка"},"short":{"de": "das Versprechen, jemanden später zu heiraten","en": "the promise to marry someone later","uk": "обіцянка пізніше одружитися з кимось","ru": "обещание позже пожениться"},"def":{"de":"Sie <g>möchten</g> ihre <b>Verlobung</b> im Sommer feiern.","en":"They <g>would like</g> to celebrate their <b>engagement</b> in summer.","uk":"Вони <g>хочуть</g> відсвяткувати свої <b>заручини</b> влітку.","ru":"Они <g>хотят</g> отпраздновать свою <b>помолвку</b> летом."},"gram":"modalverben"},
  {"id":"k6_025","cat":"k6","term":{"de":"die Auswanderung","en":"emigration","uk":"еміграція","ru":"эмиграция"},"short":{"de": "das Verlassen des Heimatlandes, um woanders zu leben","en": "leaving your home country to live somewhere else","uk": "залишення батьківщини, щоб жити деінде","ru": "оставление родины, чтобы жить где-то ещё"},"def":{"de":"<g>Seit ihrer</g> <b>Auswanderung</b> lebt die Familie schon zehn Jahre in Deutschland.","en":"<g>Since their</g> <b>emigration</b>, the family has been living in Germany for ten years already.","uk":"<g>Від часу своєї</g> <b>еміграції</b> родина вже десять років живе в Німеччині.","ru":"<g>С момента своей</g> <b>эмиграции</b> семья уже десять лет живёт в Германии."},"gram":"temporale_praepositionen"},
  {"id":"k6_026","cat":"k6","term":{"de":"die Einwanderung","en":"immigration","uk":"імміграція","ru":"иммиграция"},"short":{"de": "das Ankommen in einem neuen Land, um dort zu leben","en": "arriving in a new country to live there","uk": "прибуття в нову країну, щоб там жити","ru": "прибытие в новую страну, чтобы там жить"},"def":{"de":"<g>Nach der</g> <b>Einwanderung</b> hat die Familie schnell neue Freunde gefunden.","en":"<g>After</g> their <b>immigration</b>, the family quickly found new friends.","uk":"<g>Після</g> <b>імміграції</b> родина швидко знайшла нових друзів.","ru":"<g>После</g> <b>иммиграции</b> семья быстро нашла новых друзей."},"gram":"temporale_praepositionen"},
  {"id":"k6_027","cat":"k6","term":{"de":"die Staatsangehörigkeit","en":"citizenship","uk":"громадянство","ru":"гражданство"},"short":{"de": "die offizielle Zugehörigkeit zu einem Land","en": "the official belonging to a country","uk": "офіційна належність до країни","ru": "официальная принадлежность к стране"},"def":{"de":"<g>Nach fünf Jahren</g> hat sie die deutsche <b>Staatsangehörigkeit</b> bekommen.","en":"<g>After five years</g>, she received German <b>citizenship</b>.","uk":"<g>Через пʼять років</g> вона отримала німецьке <b>громадянство</b>.","ru":"<g>Через пять лет</g> она получила немецкое <b>гражданство</b>."},"gram":"temporale_praepositionen"},
  {"id":"k6_028","cat":"k6","term":{"de":"die Muttersprache","en":"mother tongue","uk":"рідна мова","ru":"родной язык"},"short":{"de": "die erste Sprache, die man als Kind lernt","en": "the first language you learn as a child","uk": "перша мова, яку вивчаєш у дитинстві","ru": "первый язык, который учишь в детстве"},"def":{"de":"<g>Seit ihrer Kindheit</g> spricht sie zu Hause ihre <b>Muttersprache</b>.","en":"<g>Since her childhood</g>, she has spoken her <b>mother tongue</b> at home.","uk":"<g>З дитинства</g> вона розмовляє вдома своєю <b>рідною мовою</b>.","ru":"<g>С детства</g> она говорит дома на своём <b>родном языке</b>."},"gram":"temporale_praepositionen"},
  {"id":"k6_029","cat":"k6","term":{"de":"der Alltag","en":"everyday life","uk":"повсякдення / буденне життя","ru":"повседневная жизнь"},"short":{"de": "das normale Leben von Tag zu Tag","en": "normal life from day to day","uk": "звичайне життя день за днем","ru": "обычная жизнь день за днём"},"def":{"de":"<g>Nach ein paar Monaten</g> gehörte der neue <b>Alltag</b> ganz selbstverständlich zu ihrem Leben.","en":"<g>After a few months</g>, the new <b>everyday life</b> had become completely normal for her.","uk":"<g>Через кілька місяців</g> нове <b>повсякдення</b> стало для неї цілком звичним.","ru":"<g>Через несколько месяцев</g> новая <b>повседневная жизнь</b> стала для неё совершенно привычной."},"gram":"temporale_praepositionen"},
  {"id":"k6_030","cat":"k6","term":{"de":"fremd","en":"foreign / strange","uk":"чужий / незнайомий","ru":"чужой / незнакомый"},"short":{"de": "unbekannt, nicht vertraut","en": "unknown, not familiar","uk": "невідомий, незвичний","ru": "неизвестный, непривычный"},"def":{"de":"<g>Als</g> sie ankam, fühlte sich alles noch sehr <b>fremd</b> für sie an.","en":"<g>When</g> she arrived, everything still felt very <b>strange</b> to her.","uk":"<g>Коли</g> вона приїхала, усе здавалося їй ще дуже <b>чужим</b>.","ru":"<g>Когда</g> она приехала, всё казалось ей ещё очень <b>чужим</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_031","cat":"k6","term":{"de":"sich gewöhnen an","en":"to get used to","uk":"звикати до","ru":"привыкать к"},"short":{"de": "sich langsam an etwas Neues gewöhnen","en": "to slowly get used to something new","uk": "поступово звикати до чогось нового","ru": "постепенно привыкать к чему-то новому"},"def":{"de":"Sie hat sich <g>schon</g> nach kurzer Zeit an das neue Leben <b>gewöhnt</b>.","en":"She had <b>gotten used to</b> the new life <g>already</g> after a short time.","uk":"Вона <b>звикла</b> до нового життя <g>вже</g> через короткий час.","ru":"Она <b>привыкла</b> к новой жизни <g>уже</g> через короткое время."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_032","cat":"k6","term":{"de":"die Integration","en":"integration","uk":"інтеграція","ru":"интеграция"},"short":{"de": "das Einfinden und Ankommen in einer neuen Gesellschaft","en": "settling in and arriving in a new society","uk": "влаштування і закорінення в новому суспільстві","ru": "обустройство и укоренение в новом обществе"},"def":{"de":"<g>Erst</g> nach zwei Jahren fühlte sich ihre <b>Integration</b> wirklich abgeschlossen an.","en":"<g>Only</g> after two years did her <b>integration</b> feel truly complete.","uk":"<g>Лише</g> через два роки її <b>інтеграція</b> здавалася справді завершеною.","ru":"<g>Только</g> через два года её <b>интеграция</b> казалась по-настоящему завершённой."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_033","cat":"k6","term":{"de":"aufwachsen","en":"to grow up","uk":"рости / зростати","ru":"расти / вырастать"},"short":{"de": "als Kind größer werden und leben","en": "to become bigger and live as a child","uk": "ставати більшим і жити в дитинстві","ru": "становиться больше и жить в детстве"},"def":{"de":"<g>Als</g> sie klein war, ist sie in einem kleinen Dorf <b>aufgewachsen</b>.","en":"<g>When</g> she was little, she <b>grew up</b> in a small village.","uk":"<g>Коли</g> вона була маленькою, вона <b>виросла</b> в маленькому селі.","ru":"<g>Когда</g> она была маленькой, она <b>выросла</b> в маленькой деревне."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_034","cat":"k6","term":{"de":"die Gewohnheit","en":"habit","uk":"звичка","ru":"привычка"},"short":{"de": "etwas, das man regelmäßig und automatisch tut","en": "something you do regularly and automatically","uk": "те, що робиш регулярно й автоматично","ru": "то, что делаешь регулярно и автоматически"},"def":{"de":"<g>Schon</g> nach wenigen Wochen wurde der Spaziergang am Morgen zu einer festen <b>Gewohnheit</b>.","en":"<g>Already</g> after just a few weeks, the morning walk became a fixed <b>habit</b>.","uk":"<g>Уже</g> через кілька тижнів ранкова прогулянка стала сталою <b>звичкою</b>.","ru":"<g>Уже</g> через несколько недель утренняя прогулка стала устойчивой <b>привычкой</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_035","cat":"k6","term":{"de":"das Gespräch","en":"conversation","uk":"розмова","ru":"разговор"},"short":{"de": "wenn zwei oder mehr Menschen miteinander reden","en": "when two or more people talk to each other","uk": "коли двоє чи більше людей розмовляють один з одним","ru": "когда два или больше людей разговаривают друг с другом"},"def":{"de":"<g>Als</g> sie sich zum ersten Mal trafen, hatten sie gleich ein langes <b>Gespräch</b>.","en":"<g>When</g> they met for the first time, they immediately had a long <b>conversation</b>.","uk":"<g>Коли</g> вони вперше зустрілися, у них одразу зав'язалася довга <b>розмова</b>.","ru":"<g>Когда</g> они впервые встретились, у них сразу завязался долгий <b>разговор</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_036","cat":"k6","term":{"de":"die Nachbarschaft","en":"neighborhood","uk":"сусідство / район","ru":"соседство / район"},"short":{"de": "die Menschen und Häuser rund um den eigenen Wohnort","en": "the people and houses around your own home","uk": "люди й будинки навколо власного місця проживання","ru": "люди и дома вокруг собственного места проживания"},"def":{"de":"<g>Schon</g> nach ein paar Wochen kannte sie die ganze <b>Nachbarschaft</b>.","en":"<g>Already</g> after a few weeks, she knew the whole <b>neighborhood</b>.","uk":"<g>Вже</g> через кілька тижнів вона знала все <b>сусідство</b>.","ru":"<g>Уже</g> через несколько недель она знала весь <b>район</b>."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_037","cat":"k6","term":{"de":"der Ausländer / die Ausländerin","en":"foreigner","uk":"іноземець / іноземка","ru":"иностранец / иностранка"},"short":{"de": "eine Person, die aus einem anderen Land kommt","en": "a person who comes from a different country","uk": "людина, яка приїхала з іншої країни","ru": "человек, который приехал из другой страны"},"def":{"de":"<g>Als</g> <b>Ausländerin</b> fand sie es am Anfang schwer, neue Freunde zu finden.","en":"<g>As a</g> <b>foreigner</b>, she found it hard to make new friends at the beginning.","uk":"<g>Як</g> <b>іноземка</b> вона спочатку важко знаходила нових друзів.","ru":"<g>Как</g> <b>иностранка</b> она поначалу с трудом находила новых друзей."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_038","cat":"k6","term":{"de":"die Rente","en":"pension / retirement","uk":"пенсія","ru":"пенсия"},"short":{"de": "das Geld, das man im Alter bekommt, wenn man nicht mehr arbeitet","en": "the money you receive in old age when you no longer work","uk": "гроші, які отримують у старості, коли вже не працюють","ru": "деньги, которые получают в старости, когда уже не работают"},"def":{"de":"<g>Als</g> sie in <b>Rente</b> ging, hatte sie endlich mehr Zeit für ihre Familie.","en":"<g>When</g> she retired, she finally had more time for her family.","uk":"<g>Коли</g> вона вийшла на <b>пенсію</b>, у неї нарешті стало більше часу для родини.","ru":"<g>Когда</g> она вышла на <b>пенсию</b>, у неё наконец стало больше времени для семьи."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_039","cat":"k6","term":{"de":"das Kind","en":"child","uk":"дитина","ru":"ребёнок"},"short":{"de": "ein junger Mensch, der noch nicht erwachsen ist","en": "a young person who is not yet an adult","uk": "молода людина, яка ще не доросла","ru": "молодой человек, который ещё не взрослый"},"def":{"de":"<g>Als</g> <b>Kind</b> hat sie oft mit ihren Cousinen gespielt.","en":"<g>As a</g> <b>child</b>, she often played with her cousins.","uk":"<g>Дитиною</g> вона часто гралася зі своїми кузинами.","ru":"<g>Ребёнком</g> она часто играла со своими кузинами."},"gram":"als_wenn_schon_erst"},
  {"id":"k6_040","cat":"k6","term":{"de":"die Familie","en":"family","uk":"родина / сімʼя","ru":"семья"},"short":{"de": "Eltern, Kinder und andere Verwandte zusammen","en": "parents, children and other relatives together","uk": "батьки, діти та інші родичі разом","ru": "родители, дети и другие родственники вместе"},"def":{"de":"<g>Als</g> sie heiratete, feierte die ganze <b>Familie</b> gemeinsam bis spät in die Nacht.","en":"<g>When</g> she got married, the whole <b>family</b> celebrated together late into the night.","uk":"<g>Коли</g> вона одружилася, уся <b>родина</b> разом святкувала до пізньої ночі.","ru":"<g>Когда</g> она вышла замуж, вся <b>семья</b> вместе праздновала допоздна."},"gram":"als_wenn_schon_erst"},
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
  {"id":"k7_019","cat":"k7","term":{"de":"der Wanderweg","en":"hiking trail","uk":"туристична стежка","ru":"туристическая тропа"},"short":{"de": "ein Weg in der Natur, auf dem man wandert","en": "a path in nature where you go hiking","uk": "стежка на природі, якою ходять у походи","ru": "тропа на природе, по которой ходят в походы"},"def":{"de":"<g>Wenn</g> das Wetter trocken ist, gehen sie gern auf einem <b>Wanderweg</b> spazieren.","en":"<g>When</g> the weather is dry, they like to walk on a <b>hiking trail</b>.","uk":"<g>Коли</g> погода суха, вони люблять гуляти <b>туристичною стежкою</b>.","ru":"<g>Когда</g> погода сухая, они любят гулять по <b>туристической тропе</b>."},"gram":"wenn_satz"},
  {"id":"k7_020","cat":"k7","term":{"de":"das Picknick","en":"picnic","uk":"пікнік","ru":"пикник"},"short":{"de": "ein Essen im Freien, meist auf einer Decke im Park","en": "a meal outdoors, usually on a blanket in the park","uk": "їжа на природі, зазвичай на ковдрі в парку","ru": "еда на природе, обычно на пледе в парке"},"def":{"de":"<g>Wenn</g> die Sonne scheint, machen sie oft ein <b>Picknick</b> im Park.","en":"<g>When</g> the sun is shining, they often have a <b>picnic</b> in the park.","uk":"<g>Коли</g> світить сонце, вони часто влаштовують <b>пікнік</b> у парку.","ru":"<g>Когда</g> светит солнце, они часто устраивают <b>пикник</b> в парке."},"gram":"wenn_satz"},
  {"id":"k7_021","cat":"k7","term":{"de":"die Wettervorhersage","en":"weather forecast","uk":"прогноз погоди","ru":"прогноз погоды"},"short":{"de": "eine Information darüber, wie das Wetter wird","en": "information about what the weather will be like","uk": "інформація про те, якою буде погода","ru": "информация о том, какая будет погода"},"def":{"de":"<g>Wenn</g> die <b>Wettervorhersage</b> Regen zeigt, verschieben sie den Ausflug.","en":"<g>When</g> the <b>weather forecast</b> shows rain, they postpone the trip.","uk":"<g>Коли</g> <b>прогноз погоди</b> показує дощ, вони переносять поїздку.","ru":"<g>Когда</g> <b>прогноз погоды</b> показывает дождь, они переносят поездку."},"gram":"wenn_satz"},
  {"id":"k7_022","cat":"k7","term":{"de":"der Regenschirm","en":"umbrella","uk":"парасолька","ru":"зонт"},"short":{"de": "ein Gegenstand, den man bei Regen über den Kopf hält","en": "an object you hold over your head when it rains","uk": "предмет, який тримають над головою під час дощу","ru": "предмет, который держат над головой во время дождя"},"def":{"de":"<g>Wenn</g> es regnet, nimmt sie immer ihren <b>Regenschirm</b> mit.","en":"<g>When</g> it rains, she always takes her <b>umbrella</b> with her.","uk":"<g>Коли</g> йде дощ, вона завжди бере із собою <b>парасольку</b>.","ru":"<g>Когда</g> идёт дождь, она всегда берёт с собой <b>зонт</b>."},"gram":"wenn_satz"},
  {"id":"k7_023","cat":"k7","term":{"de":"warm","en":"warm","uk":"теплий","ru":"тёплый"},"short":{"de": "mit angenehmer, hoher Temperatur","en": "with a pleasant, high temperature","uk": "з приємною, високою температурою","ru": "с приятной, высокой температурой"},"def":{"de":"<g>Wenn</g> es draußen <b>warm</b> ist, essen sie am liebsten im Garten.","en":"<g>When</g> it is <b>warm</b> outside, they prefer to eat in the garden.","uk":"<g>Коли</g> надворі <b>тепло</b>, вони найбільше люблять їсти в саду.","ru":"<g>Когда</g> на улице <b>тепло</b>, они больше всего любят есть в саду."},"gram":"wenn_satz"},
  {"id":"k7_024","cat":"k7","term":{"de":"das Ausflugsziel","en":"destination","uk":"місце призначення (для поїздки)","ru":"место назначения (для поездки)"},"short":{"de": "der Ort, zu dem man bei einem Ausflug fährt","en": "the place you travel to on a trip","uk": "місце, куди їдуть на екскурсію","ru": "место, куда едут на экскурсию"},"def":{"de":"<g>Dieses</g> <b>Ausflugsziel</b> ist bei Familien sehr beliebt.","en":"<g>This</g> <b>destination</b> is very popular with families.","uk":"<g>Це</g> <b>місце призначення</b> дуже популярне серед родин.","ru":"<g>Это</g> <b>место назначения</b> очень популярно среди семей."},"gram":"demonstrativartikel"},
  {"id":"k7_025","cat":"k7","term":{"de":"die Idee","en":"idea","uk":"ідея","ru":"идея"},"short":{"de": "ein neuer Gedanke oder Plan","en": "a new thought or plan","uk": "нова думка чи план","ru": "новая мысль или план"},"def":{"de":"<g>Diese</g> <b>Idee</b> für den Ausflug gefällt allen im Team.","en":"<g>This</g> <b>idea</b> for the trip pleases everyone on the team.","uk":"<g>Ця</g> <b>ідея</b> для екскурсії подобається всій команді.","ru":"<g>Эта</g> <b>идея</b> для поездки нравится всей команде."},"gram":"demonstrativartikel"},
  {"id":"k7_026","cat":"k7","term":{"de":"interessant","en":"interesting","uk":"цікавий","ru":"интересный"},"short":{"de": "so, dass man mehr darüber wissen möchte","en": "in a way that makes you want to know more about it","uk": "такий, про який хочеться дізнатися більше","ru": "такой, о котором хочется узнать больше"},"def":{"de":"<g>Dieser</g> <b>interessante</b> Ort steht ganz oben auf ihrer Liste.","en":"<g>This</g> <b>interesting</b> place is at the very top of her list.","uk":"<g>Це</g> <b>цікаве</b> місце стоїть на першому місці в її списку.","ru":"<g>Это</g> <b>интересное</b> место стоит на первом месте в её списке."},"gram":"demonstrativartikel"},
  {"id":"k7_027","cat":"k7","term":{"de":"spannend","en":"exciting","uk":"захопливий","ru":"захватывающий"},"short":{"de": "aufregend und voller Erwartung","en": "thrilling and full of anticipation","uk": "хвилюючий і сповнений очікування","ru": "волнующий и полный ожидания"},"def":{"de":"<g>Dieses</g> <b>spannende</b> Abenteuer werden sie nie vergessen.","en":"<g>This</g> <b>exciting</b> adventure they will never forget.","uk":"<g>Цю</g> <b>захопливу</b> пригоду вони ніколи не забудуть.","ru":"<g>Это</g> <b>захватывающее</b> приключение они никогда не забудут."},"gram":"demonstrativartikel"},
  {"id":"k7_028","cat":"k7","term":{"de":"langweilig","en":"boring","uk":"нудний","ru":"скучный"},"short":{"de": "ohne Interesse, nicht spannend","en": "without interest, not exciting","uk": "без інтересу, не захопливий","ru": "без интереса, не захватывающий"},"def":{"de":"<g>Dieser</g> <b>langweilige</b> Vortrag hat niemandem gefallen.","en":"<g>This</g> <b>boring</b> lecture didn't please anyone.","uk":"<g>Ця</g> <b>нудна</b> лекція нікому не сподобалася.","ru":"<g>Эта</g> <b>скучная</b> лекция никому не понравилась."},"gram":"demonstrativartikel"},
  {"id":"k7_029","cat":"k7","term":{"de":"erzählen","en":"to tell / to narrate","uk":"розповідати","ru":"рассказывать"},"short":{"de": "über etwas berichten, das passiert ist","en": "to report about something that happened","uk": "розповідати про те, що сталося","ru": "рассказывать о том, что произошло"},"def":{"de":"Sie <g><b>erzählte</b></g> allen begeistert von ihrem Ausflug.","en":"She <g><b>told</b></g> everyone enthusiastically about her trip.","uk":"Вона захоплено <g><b>розповіла</b></g> всім про свою поїздку.","ru":"Она с восторгом <g><b>рассказала</b></g> всем о своей поездке."},"gram":"praeteritum"},
  {"id":"k7_030","cat":"k7","term":{"de":"das Erlebnis","en":"experience","uk":"враження / досвід","ru":"впечатление / переживание"},"short":{"de": "etwas, das man erlebt hat und sich gut erinnert","en": "something you experienced and remember well","uk": "те, що пережив і добре памʼятаєш","ru": "то, что пережил и хорошо помнишь"},"def":{"de":"Der Ausflug <g><b>war</b></g> für die Kinder ein unvergessliches <b>Erlebnis</b>.","en":"The trip <g><b>was</b></g> an unforgettable <b>experience</b> for the children.","uk":"Ця поїздка <g><b>була</b></g> для дітей незабутнім <b>враженням</b>.","ru":"Эта поездка <g><b>была</b></g> для детей незабываемым <b>впечатлением</b>."},"gram":"praeteritum"},
  {"id":"k7_031","cat":"k7","term":{"de":"fotografieren","en":"to photograph","uk":"фотографувати","ru":"фотографировать"},"short":{"de": "Fotos von etwas machen","en": "to take photos of something","uk": "робити фото чогось","ru": "делать фото чего-то"},"def":{"de":"Er <g><b>fotografierte</b></g> während des Ausflugs viele Tiere im Zoo.","en":"He <g><b>photographed</b></g> many animals in the zoo during the trip.","uk":"Під час екскурсії він <g><b>сфотографував</b></g> багато тварин у зоопарку.","ru":"Во время экскурсии он <g><b>сфотографировал</b></g> много животных в зоопарке."},"gram":"praeteritum"},
  {"id":"k7_032","cat":"k7","term":{"de":"scheinen","en":"to shine","uk":"світити (про сонце)","ru":"светить (о солнце)"},"short":{"de": "Licht geben, wie zum Beispiel die Sonne","en": "to give light, like the sun","uk": "давати світло, наприклад, як сонце","ru": "давать свет, например, как солнце"},"def":{"de":"Die Sonne <g><b>schien</b></g> den ganzen Tag beim Ausflug.","en":"The sun <g><b>shone</b></g> all day during the trip.","uk":"Сонце <g><b>світило</b></g> увесь день під час екскурсії.","ru":"Солнце <g><b>светило</b></g> весь день во время экскурсии."},"gram":"praeteritum"},
  {"id":"k7_033","cat":"k7","term":{"de":"kalt","en":"cold","uk":"холодний","ru":"холодный"},"short":{"de": "mit niedriger, unangenehmer Temperatur","en": "with a low, unpleasant temperature","uk": "з низькою, неприємною температурою","ru": "с низкой, неприятной температурой"},"def":{"de":"Am Morgen <g><b>war</b></g> es noch sehr <b>kalt</b> im Wald.","en":"In the morning, it <g><b>was</b></g> still very <b>cold</b> in the forest.","uk":"Вранці в лісі <g><b>було</b></g> ще дуже <b>холодно</b>.","ru":"Утром в лесу <g><b>было</b></g> ещё очень <b>холодно</b>."},"gram":"praeteritum"},
  {"id":"k7_034","cat":"k7","term":{"de":"lachen","en":"to laugh","uk":"сміятися","ru":"смеяться"},"short":{"de": "Freude durch ein Geräusch und ein Lächeln zeigen","en": "to show joy through a sound and a smile","uk": "показувати радість звуком і усмішкою","ru": "показывать радость звуком и улыбкой"},"def":{"de":"Die Kinder <g><b>lachten</b></g> viel während des Ausflugs.","en":"The children <g><b>laughed</b></g> a lot during the trip.","uk":"Діти багато <g><b>сміялися</b></g> під час екскурсії.","ru":"Дети много <g><b>смеялись</b></g> во время экскурсии."},"gram":"praeteritum"},
  {"id":"k7_035","cat":"k7","term":{"de":"singen","en":"to sing","uk":"співати","ru":"петь"},"short":{"de": "mit der Stimme Musik machen","en": "to make music with your voice","uk": "виконувати музику голосом","ru": "исполнять музыку голосом"},"def":{"de":"Am Lagerfeuer <g><b>sangen</b></g> alle zusammen ein paar Lieder.","en":"At the campfire, everyone <g><b>sang</b></g> a few songs together.","uk":"Біля багаття всі разом <g><b>співали</b></g> кілька пісень.","ru":"У костра все вместе <g><b>пели</b></g> несколько песен."},"gram":"praeteritum"},
  {"id":"k7_036","cat":"k7","term":{"de":"das Lagerfeuer","en":"campfire","uk":"багаття","ru":"костёр"},"short":{"de": "ein Feuer im Freien, um das man sich abends setzt","en": "a fire outdoors that people sit around in the evening","uk": "вогонь на природі, біля якого сидять увечері","ru": "огонь на природе, вокруг которого сидят вечером"},"def":{"de":"Am Abend <g><b>saßen</b></g> alle zusammen am <b>Lagerfeuer</b>.","en":"In the evening, everyone <g><b>sat</b></g> together around the <b>campfire</b>.","uk":"Увечері всі разом <g><b>сиділи</b></g> біля <b>багаття</b>.","ru":"Вечером все вместе <g><b>сидели</b></g> у <b>костра</b>."},"gram":"praeteritum"},
  {"id":"k7_037","cat":"k7","term":{"de":"zelten","en":"to camp","uk":"розбивати табір / жити в наметі","ru":"разбивать лагерь / жить в палатке"},"short":{"de": "in einem Zelt draußen übernachten","en": "to sleep outdoors in a tent","uk": "ночувати надворі в наметі","ru": "ночевать на улице в палатке"},"def":{"de":"Die Familie <g><b>zeltete</b></g> ein Wochenende lang im Wald.","en":"The family <g><b>camped</b></g> in the forest for a weekend.","uk":"Родина <g><b>жила в наметі</b></g> у лісі протягом вихідних.","ru":"Семья <g><b>жила в палатке</b></g> в лесу все выходные."},"gram":"praeteritum"},
  {"id":"k7_038","cat":"k7","term":{"de":"klettern","en":"to climb","uk":"лазити / підійматися","ru":"лазить / забираться"},"short":{"de": "mit Händen und Füßen nach oben steigen","en": "to go up using your hands and feet","uk": "підійматися вгору за допомогою рук і ніг","ru": "подниматься вверх с помощью рук и ног"},"def":{"de":"Die Kinder <g><b>kletterten</b></g> begeistert auf die alten Bäume.","en":"The children <g><b>climbed</b></g> the old trees enthusiastically.","uk":"Діти захоплено <g><b>лазили</b></g> по старих деревах.","ru":"Дети с восторгом <g><b>лазили</b></g> по старым деревьям."},"gram":"praeteritum"},
  {"id":"k7_039","cat":"k7","term":{"de":"ankommen","en":"to arrive","uk":"прибувати / приїжджати","ru":"прибывать / приезжать"},"short":{"de": "an einem Ort ankommen, den man erreichen wollte","en": "to arrive at a place you wanted to reach","uk": "приїжджати до місця, якого хотів досягти","ru": "приезжать в место, которого хотел достичь"},"def":{"de":"Sie <g><b>kamen</b></g> erst spät am Abend am Zeltplatz <b>an</b>.","en":"They only <g><b>arrived</b></g> at the campsite late in the evening.","uk":"Вони <g><b>прибули</b></g> на місце для наметів лише пізно ввечері.","ru":"Они <g><b>прибыли</b></g> на место для палаток только поздно вечером."},"gram":"praeteritum"},
  {"id":"k7_040","cat":"k7","term":{"de":"zurückkommen","en":"to come back","uk":"повертатися","ru":"возвращаться"},"short":{"de": "wieder an den Ort zurückkehren, von dem man losgegangen ist","en": "to return to the place you started from","uk": "повертатися до місця, звідки вирушив","ru": "возвращаться в место, откуда отправился"},"def":{"de":"Sie <g><b>kamen</b></g> nach drei Tagen glücklich <b>zurück</b>.","en":"They happily <g><b>came back</b></g> after three days.","uk":"Вони щасливо <g><b>повернулися</b></g> через три дні.","ru":"Они счастливо <g><b>вернулись</b></g> через три дня."},"gram":"praeteritum"},
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
  {"id":"k8_018","cat":"k8","term":{"de":"das Wahrzeichen","en":"landmark","uk":"визначна памʼятка (символ міста)","ru":"достопримечательность (символ города)"},"short":{"de": "ein bekanntes Gebäude oder Symbol einer Stadt","en": "a well-known building or symbol of a city","uk": "відомий будинок чи символ міста","ru": "известное здание или символ города"},"def":{"de":"<g>Mitten in der Stadt</g> steht das berühmte <b>Wahrzeichen</b> von Berlin.","en":"<g>In the middle of the city</g> stands Berlin's famous <b>landmark</b>.","uk":"<g>Посеред міста</g> стоїть відома <b>памʼятка</b> Берліна.","ru":"<g>Посреди города</g> стоит известная <b>достопримечательность</b> Берлина."},"gram":"lokale_praepositionen"},
  {"id":"k8_019","cat":"k8","term":{"de":"der Fluss","en":"river","uk":"річка","ru":"река"},"short":{"de": "ein großes, fließendes Gewässer","en": "a large, flowing body of water","uk": "великий потік води, що тече","ru": "большой текущий водоём"},"def":{"de":"<g>Durch die Stadt</g> fließt ein breiter <b>Fluss</b>.","en":"A wide <b>river</b> flows <g>through the city</g>.","uk":"<g>Через місто</g> тече широка <b>річка</b>.","ru":"<g>Через город</g> течёт широкая <b>река</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_020","cat":"k8","term":{"de":"die Brücke","en":"bridge","uk":"міст","ru":"мост"},"short":{"de": "eine Konstruktion, die über einen Fluss oder eine Straße führt","en": "a structure that leads across a river or road","uk": "конструкція, яка веде через річку чи дорогу","ru": "конструкция, которая ведёт через реку или дорогу"},"def":{"de":"<g>Über den Fluss</g> führt eine alte, berühmte <b>Brücke</b>.","en":"An old, famous <b>bridge</b> leads <g>across the river</g>.","uk":"<g>Через річку</g> веде старий, відомий <b>міст</b>.","ru":"<g>Через реку</g> ведёт старый, известный <b>мост</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_021","cat":"k8","term":{"de":"das Stadtzentrum","en":"city center","uk":"центр міста","ru":"центр города"},"short":{"de": "der mittlere, meist belebte Teil einer Stadt","en": "the middle, usually lively part of a city","uk": "центральна, зазвичай жвава частина міста","ru": "центральная, обычно оживлённая часть города"},"def":{"de":"<g>Im Stadtzentrum</g> gibt es viele Geschäfte und Cafés.","en":"<g>In the city center</g>, there are many shops and cafés.","uk":"<g>У центрі міста</g> багато магазинів і кафе.","ru":"<g>В центре города</g> много магазинов и кафе."},"gram":"lokale_praepositionen"},
  {"id":"k8_022","cat":"k8","term":{"de":"das Denkmal","en":"monument","uk":"памʼятник","ru":"памятник"},"short":{"de": "ein Bauwerk, das an eine Person oder ein Ereignis erinnert","en": "a structure that reminds people of a person or event","uk": "споруда, яка нагадує про людину чи подію","ru": "сооружение, которое напоминает о человеке или событии"},"def":{"de":"<g>Vor dem Rathaus</g> steht ein bekanntes <b>Denkmal</b>.","en":"A well-known <b>monument</b> stands <g>in front of the town hall</g>.","uk":"<g>Перед ратушею</g> стоїть відомий <b>памʼятник</b>.","ru":"<g>Перед ратушей</g> стоит известный <b>памятник</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_023","cat":"k8","term":{"de":"gegenüber","en":"across from / opposite","uk":"навпроти","ru":"напротив"},"short":{"de": "auf der anderen Seite, direkt vor etwas","en": "on the other side, directly in front of something","uk": "на іншому боці, прямо перед чимось","ru": "на другой стороне, прямо перед чем-то"},"def":{"de":"<g>Gegenüber vom Bahnhof</g> finden Sie ein kleines Café.","en":"You'll find a small café <g>across from the station</g>.","uk":"<g>Навпроти вокзалу</g> ви знайдете невелике кафе.","ru":"<g>Напротив вокзала</g> вы найдёте маленькое кафе."},"gram":"lokale_praepositionen"},
  {"id":"k8_024","cat":"k8","term":{"de":"neben","en":"next to / beside","uk":"поруч з / біля","ru":"рядом с / возле"},"short":{"de": "direkt an der Seite von etwas","en": "directly at the side of something","uk": "прямо збоку від чогось","ru": "прямо сбоку от чего-то"},"def":{"de":"<g>Neben dem Museum</g> gibt es einen kleinen Park.","en":"<g>Next to the museum</g>, there is a small park.","uk":"<g>Поруч з музеєм</g> є невеликий парк.","ru":"<g>Рядом с музеем</g> есть небольшой парк."},"gram":"lokale_praepositionen"},
  {"id":"k8_025","cat":"k8","term":{"de":"zwischen","en":"between","uk":"між","ru":"между"},"short":{"de": "in der Mitte von zwei Dingen oder Orten","en": "in the middle of two things or places","uk": "посередині двох речей чи місць","ru": "посередине двух вещей или мест"},"def":{"de":"<g>Zwischen der Kirche und dem Markt</g> liegt ein schöner Platz.","en":"<g>Between the church and the market</g>, there is a beautiful square.","uk":"<g>Між церквою та ринком</g> розташована гарна площа.","ru":"<g>Между церковью и рынком</g> находится красивая площадь."},"gram":"lokale_praepositionen"},
  {"id":"k8_026","cat":"k8","term":{"de":"das Museum","en":"museum","uk":"музей","ru":"музей"},"short":{"de": "ein Gebäude, in dem man historische oder künstlerische Objekte ansieht","en": "a building where you look at historical or artistic objects","uk": "будівля, де оглядають історичні чи мистецькі обʼєкти","ru": "здание, где рассматривают исторические или художественные объекты"},"def":{"de":"<g>Am Ende der Straße</g> steht ein großes <b>Museum</b>.","en":"A large <b>museum</b> stands <g>at the end of the street</g>.","uk":"<g>У кінці вулиці</g> стоїть великий <b>музей</b>.","ru":"<g>В конце улицы</g> стоит большой <b>музей</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_027","cat":"k8","term":{"de":"das Rathaus","en":"town hall","uk":"ратуша","ru":"ратуша"},"short":{"de": "das Gebäude, in dem die Stadtverwaltung arbeitet","en": "the building where the city administration works","uk": "будівля, де працює міська адміністрація","ru": "здание, где работает городская администрация"},"def":{"de":"<g>Auf dem Marktplatz</g> steht das alte <b>Rathaus</b>.","en":"The old <b>town hall</b> stands <g>on the market square</g>.","uk":"<g>На ринковій площі</g> стоїть стара <b>ратуша</b>.","ru":"<g>На рыночной площади</g> стоит старая <b>ратуша</b>."},"gram":"lokale_praepositionen"},
  {"id":"k8_028","cat":"k8","term":{"de":"begeistert","en":"enthusiastic","uk":"захоплений","ru":"восторженный / увлечённый"},"short":{"de": "sehr interessiert und voller Freude über etwas","en": "very interested and full of joy about something","uk": "дуже зацікавлений і сповнений радості чимось","ru": "очень заинтересованный и полный радости чем-то"},"def":{"de":"Sie ist <g>total <b>begeistert</b></g> von der Stadt Berlin.","en":"She is <g>totally <b>enthusiastic</b></g> about the city of Berlin.","uk":"Вона <g>цілком <b>захоплена</b></g> містом Берлін.","ru":"Она <g>полностью <b>увлечена</b></g> городом Берлин."},"gram":"adjektivendungen"},
  {"id":"k8_029","cat":"k8","term":{"de":"historisch","en":"historical","uk":"історичний","ru":"исторический"},"short":{"de": "aus der Vergangenheit, mit Bezug zur Geschichte","en": "from the past, related to history","uk": "з минулого, повʼязаний з історією","ru": "из прошлого, связанный с историей"},"def":{"de":"Sie besuchen <g>ein <b>historisches</b></g> Gebäude im Zentrum.","en":"They visit <g>a <b>historical</b></g> building in the center.","uk":"Вони відвідують <g><b>історичну</b></g> будівлю в центрі.","ru":"Они посещают <g><b>историческое</b></g> здание в центре."},"gram":"adjektivendungen"},
  {"id":"k8_030","cat":"k8","term":{"de":"berühmt","en":"famous","uk":"відомий / знаменитий","ru":"знаменитый / известный"},"short":{"de": "sehr bekannt, von vielen Menschen gekannt","en": "very well-known, known by many people","uk": "дуже відомий, знайомий багатьом людям","ru": "очень известный, знакомый многим людям"},"def":{"de":"Sie fotografieren <g>ein <b>berühmtes</b></g> Denkmal in der Stadt.","en":"They photograph <g>a <b>famous</b></g> monument in the city.","uk":"Вони фотографують <g><b>відомий</b></g> памʼятник у місті.","ru":"Они фотографируют <g><b>знаменитый</b></g> памятник в городе."},"gram":"adjektivendungen"},
  {"id":"k8_031","cat":"k8","term":{"de":"typisch","en":"typical","uk":"типовий","ru":"типичный"},"short":{"de": "so, wie es normalerweise ist, charakteristisch","en": "the way it usually is, characteristic","uk": "такий, яким зазвичай буває, характерний","ru": "такой, каким обычно бывает, характерный"},"def":{"de":"Sie probieren <g>ein <b>typisches</b></g> Berliner Gericht.","en":"They try <g>a <b>typical</b></g> Berlin dish.","uk":"Вони куштують <g><b>типову</b></g> берлінську страву.","ru":"Они пробуют <g><b>типичное</b></g> берлинское блюдо."},"gram":"adjektivendungen"},
  {"id":"k8_032","cat":"k8","term":{"de":"wunderschön","en":"beautiful / gorgeous","uk":"прекрасний / чудовий","ru":"прекрасный / чудесный"},"short":{"de": "sehr, sehr schön","en": "very, very beautiful","uk": "дуже-дуже гарний","ru": "очень-очень красивый"},"def":{"de":"Sie sehen <g>einen <b>wunderschönen</b></g> Sonnenuntergang über der Stadt.","en":"They see <g>a <b>gorgeous</b></g> sunset over the city.","uk":"Вони бачать <g><b>чудовий</b></g> захід сонця над містом.","ru":"Они видят <g><b>чудесный</b></g> закат над городом."},"gram":"adjektivendungen"},
  {"id":"k8_033","cat":"k8","term":{"de":"der Bewerber / die Bewerberin","en":"applicant","uk":"претендент / претендентка","ru":"претендент / претендентка"},"short":{"de": "eine Person, die sich um eine Ausbildung oder Stelle bewirbt","en": "a person who applies for a training position or job","uk": "людина, яка подає заявку на навчання чи роботу","ru": "человек, который подаёт заявку на обучение или работу"},"def":{"de":"Sie war <g>eine sehr gute</g> <b>Bewerberin</b> für den Ausbildungsplatz.","en":"She was <g>a very good</g> <b>applicant</b> for the training position.","uk":"Вона була <g>дуже гарною</g> <b>претенденткою</b> на місце навчання.","ru":"Она была <g>очень хорошей</g> <b>претенденткой</b> на место обучения."},"gram":"adjektivendungen"},
  {"id":"k8_034","cat":"k8","term":{"de":"die Prüfung","en":"exam","uk":"іспит","ru":"экзамен"},"short":{"de": "ein Test, mit dem man Wissen oder Können zeigt","en": "a test where you show knowledge or ability","uk": "тест, яким показують знання чи вміння","ru": "тест, которым показывают знания или умения"},"def":{"de":"Sie hat <g>eine schwere</g> <b>Prüfung</b> am Ende der Ausbildung bestanden.","en":"She passed <g>a difficult</g> <b>exam</b> at the end of her training.","uk":"Вона склала <g>складний</g> <b>іспит</b> наприкінці навчання.","ru":"Она сдала <g>сложный</g> <b>экзамен</b> в конце обучения."},"gram":"adjektivendungen"},
  {"id":"k8_035","cat":"k8","term":{"de":"der Vertrag","en":"contract","uk":"договір / контракт","ru":"договор / контракт"},"short":{"de": "ein offizielles Dokument mit vereinbarten Bedingungen","en": "an official document with agreed conditions","uk": "офіційний документ з узгодженими умовами","ru": "официальный документ с согласованными условиями"},"def":{"de":"Sie hat <g>einen neuen</g> <b>Vertrag</b> für die Ausbildung unterschrieben.","en":"She signed <g>a new</g> <b>contract</b> for the training program.","uk":"Вона підписала <g>новий</g> <b>договір</b> на навчання.","ru":"Она подписала <g>новый</g> <b>договор</b> на обучение."},"gram":"adjektivendungen"},
  {"id":"k8_036","cat":"k8","term":{"de":"die Berufsschule","en":"vocational school","uk":"професійне училище","ru":"профессиональное училище"},"short":{"de": "eine Schule, in der man den theoretischen Teil einer Ausbildung lernt","en": "a school where you learn the theoretical part of a training program","uk": "школа, де вивчають теоретичну частину навчання","ru": "школа, где изучают теоретическую часть обучения"},"def":{"de":"Sie besucht <g>eine moderne</g> <b>Berufsschule</b> zweimal pro Woche.","en":"She attends <g>a modern</g> <b>vocational school</b> twice a week.","uk":"Вона відвідує <g>сучасне</g> <b>професійне училище</b> двічі на тиждень.","ru":"Она посещает <g>современное</g> <b>профессиональное училище</b> два раза в неделю."},"gram":"adjektivendungen"},
  {"id":"k8_037","cat":"k8","term":{"de":"das Praktikum","en":"internship","uk":"стажування / практика","ru":"стажировка / практика"},"short":{"de": "eine praktische Arbeitszeit, um Erfahrung zu sammeln","en": "practical work experience to gain skills","uk": "практичний робочий час, щоб набути досвіду","ru": "практическое рабочее время, чтобы получить опыт"},"def":{"de":"Sie macht <g>ein interessantes</g> <b>Praktikum</b> in einem großen Hotel.","en":"She does <g>an interesting</g> <b>internship</b> at a big hotel.","uk":"Вона проходить <g>цікаве</g> <b>стажування</b> у великому готелі.","ru":"Она проходит <g>интересную</g> <b>стажировку</b> в большом отеле."},"gram":"adjektivendungen"},
  {"id":"k8_038","cat":"k8","term":{"de":"erfolgreich","en":"successful","uk":"успішний","ru":"успешный"},"short":{"de": "mit einem guten Ergebnis, das man erreicht hat","en": "with a good result that you achieved","uk": "з добрим результатом, якого досягли","ru": "с хорошим результатом, которого достигли"},"def":{"de":"Sie hatte <g>ein <b>erfolgreiches</b></g> erstes Jahr in der Ausbildung.","en":"She had <g>a <b>successful</b></g> first year in her training.","uk":"У неї був <g><b>успішний</b></g> перший рік навчання.","ru":"У неё был <g><b>успешный</b></g> первый год обучения."},"gram":"adjektivendungen"},
  {"id":"k8_039","cat":"k8","term":{"de":"engagiert","en":"dedicated / committed","uk":"відданий справі / залучений","ru":"преданный делу / вовлечённый"},"short":{"de": "mit viel persönlichem Einsatz bei einer Sache","en": "with a lot of personal effort in something","uk": "з великим особистим внеском у щось","ru": "с большим личным вкладом в что-то"},"def":{"de":"Ihr Chef ist <g><b>sehr engagiert</b></g> bei der Ausbildung neuer Kollegen.","en":"Her boss is <g><b>very dedicated</b></g> to training new colleagues.","uk":"Її керівник <g><b>дуже відданий</b></g> навчанню нових колег.","ru":"Её руководитель <g><b>очень предан</b></g> обучению новых коллег."},"gram":"adjektivendungen"},
  {"id":"k8_040","cat":"k8","term":{"de":"motiviert","en":"motivated","uk":"мотивований","ru":"мотивированный"},"short":{"de": "mit viel Lust und Energie, etwas zu tun","en": "with a lot of desire and energy to do something","uk": "з великим бажанням і енергією щось робити","ru": "с большим желанием и энергией что-то делать"},"def":{"de":"Sie ist <g><b>sehr motiviert</b></g>, ihre Ausbildung erfolgreich zu beenden.","en":"She is <g><b>very motivated</b></g> to finish her training successfully.","uk":"Вона <g><b>дуже мотивована</b></g> успішно завершити навчання.","ru":"Она <g><b>очень мотивирована</b></g> успешно завершить обучение."},"gram":"adjektivendungen"},
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
  {"id":"k9_022","cat":"k9","term":{"de":"das Zeugnis","en":"school report","uk":"табель / атестат","ru":"табель / аттестат"},"short":{"de": "ein Dokument mit den Noten am Ende des Schuljahres","en": "a document with the grades at the end of the school year","uk": "документ з оцінками наприкінці навчального року","ru": "документ с оценками в конце учебного года"},"def":{"de":"Jonas <g>hat</g> sein <b>Zeugnis</b> heute <g><b>bekommen</b></g>.","en":"Jonas <g>has</g> <g><b>received</b></g> his <b>school report</b> today.","uk":"Йонас сьогодні <b>отримав</b> свій <b>табель</b>.","ru":"Йонас сегодня <b>получил</b> свой <b>табель</b>."},"gram":"perfekt"},
  {"id":"k9_023","cat":"k9","term":{"de":"die Grundschule","en":"elementary school","uk":"початкова школа","ru":"начальная школа"},"short":{"de": "die ersten vier Schuljahre eines Kindes","en": "the first four school years of a child","uk": "перші чотири шкільні роки дитини","ru": "первые четыре школьных года ребёнка"},"def":{"de":"Sie <g>hat</g> die <b>Grundschule</b> vor zwei Jahren <g><b>beendet</b></g>.","en":"She <g>has</g> <g><b>finished</b></g> <b>elementary school</b> two years ago.","uk":"Вона <b>закінчила</b> <b>початкову школу</b> два роки тому.","ru":"Она <b>закончила</b> <b>начальную школу</b> два года назад."},"gram":"perfekt"},
  {"id":"k9_024","cat":"k9","term":{"de":"der Unterricht","en":"lessons / class instruction","uk":"заняття / уроки","ru":"занятия / уроки"},"short":{"de": "die Zeit, in der Schüler etwas lernen","en": "the time when students learn something","uk": "час, коли учні щось вивчають","ru": "время, когда ученики что-то изучают"},"def":{"de":"Der <b>Unterricht</b> <g>hat</g> heute schon um acht Uhr <g><b>begonnen</b></g>.","en":"<b>Class</b> <g>has</g> already <g><b>started</b></g> at eight o'clock today.","uk":"<b>Заняття</b> сьогодні вже <b>почалися</b> о восьмій годині.","ru":"<b>Занятия</b> сегодня уже <b>начались</b> в восемь часов."},"gram":"perfekt"},
  {"id":"k9_025","cat":"k9","term":{"de":"sich vorbereiten auf","en":"to prepare for","uk":"готуватися до","ru":"готовиться к"},"short":{"de": "sich für etwas Kommendes fertig machen","en": "to get ready for something coming up","uk": "готуватися до чогось, що надходить","ru": "готовиться к чему-то предстоящему"},"def":{"de":"Saida <g><b>bereitet sich auf</b></g> die Klassenarbeit <b>vor</b>.","en":"Saida <g><b>prepares for</b></g> the class test.","uk":"Саїда <b>готується до</b> контрольної роботи.","ru":"Саида <b>готовится к</b> контрольной работе."},"gram":"praepositionalverben"},
  {"id":"k9_026","cat":"k9","term":{"de":"sich beschweren über","en":"to complain about","uk":"скаржитися на","ru":"жаловаться на"},"short":{"de": "sagen, dass man mit etwas unzufrieden ist","en": "to say that you are unhappy with something","uk": "казати, що незадоволений чимось","ru": "говорить, что недоволен чем-то"},"def":{"de":"Ein paar Eltern <g><b>beschweren sich über</b></g> die vielen Hausaufgaben.","en":"A few parents <g><b>complain about</b></g> the many homework assignments.","uk":"Кілька батьків <b>скаржаться на</b> велику кількість домашніх завдань.","ru":"Несколько родителей <b>жалуются на</b> большое количество домашних заданий."},"gram":"praepositionalverben"},
  {"id":"k9_027","cat":"k9","term":{"de":"träumen von","en":"to dream of","uk":"мріяти про","ru":"мечтать о"},"short":{"de": "sich etwas Schönes für die Zukunft wünschen","en": "to wish for something nice for the future","uk": "бажати собі чогось хорошого на майбутнє","ru": "желать себе чего-то хорошего на будущее"},"def":{"de":"Jonas <g><b>träumt</b></g> schon lange <g><b>von</b></g> einem Studium der Naturwissenschaften.","en":"Jonas has long <g><b>dreamed of</b></g> studying natural sciences.","uk":"Йонас уже давно <b>мріє про</b> навчання на природничих науках.","ru":"Йонас уже давно <b>мечтает о</b> учёбе на естественных науках."},"gram":"praepositionalverben"},
  {"id":"k9_028","cat":"k9","term":{"de":"warten auf","en":"to wait for","uk":"чекати на","ru":"ждать"},"short":{"de": "bleiben und erwarten, dass etwas passiert oder jemand kommt","en": "to stay and expect something to happen or someone to come","uk": "залишатися й очікувати, що щось станеться чи хтось прийде","ru": "оставаться и ожидать, что что-то произойдёт или кто-то придёт"},"def":{"de":"Die Schüler <g><b>warten</b></g> vor der Klasse <g><b>auf</b></g> den Lehrer.","en":"The students <g><b>wait for</b></g> the teacher in front of the classroom.","uk":"Учні <b>чекають на</b> вчителя перед класом.","ru":"Ученики <b>ждут</b> учителя перед классом."},"gram":"praepositionalverben"},
  {"id":"k9_029","cat":"k9","term":{"de":"achten auf","en":"to pay attention to / to watch out for","uk":"стежити за","ru":"следить за"},"short":{"de": "genau auf etwas aufpassen oder es beachten","en": "to carefully watch or take note of something","uk": "уважно стежити за чимось або зважати на щось","ru": "внимательно следить за чем-то или обращать внимание"},"def":{"de":"Die Lehrerin <g><b>achtet</b></g> im Unterricht genau <g><b>auf</b></g> jeden Schüler.","en":"The teacher <g><b>pays close attention to</b></g> every student during class.","uk":"Вчителька уважно <b>стежить за</b> кожним учнем на уроці.","ru":"Учительница внимательно <b>следит за</b> каждым учеником на уроке."},"gram":"praepositionalverben"},
  {"id":"k9_030","cat":"k9","term":{"de":"sich konzentrieren auf","en":"to concentrate on","uk":"зосереджуватися на","ru":"сосредотачиваться на"},"short":{"de": "die ganze Aufmerksamkeit auf eine Sache richten","en": "to direct all your attention to one thing","uk": "спрямовувати всю увагу на одну річ","ru": "направлять всё внимание на одну вещь"},"def":{"de":"Saida <g><b>konzentriert sich</b></g> während der Prüfung ganz <g><b>auf</b></g> die Aufgaben.","en":"Saida <g><b>concentrates fully on</b></g> the tasks during the exam.","uk":"Під час іспиту Саїда повністю <b>зосереджується на</b> завданнях.","ru":"Во время экзамена Саида полностью <b>сосредотачивается на</b> заданиях."},"gram":"praepositionalverben"},
  {"id":"k9_031","cat":"k9","term":{"de":"der Test","en":"test","uk":"тест","ru":"тест"},"short":{"de": "eine kurze Prüfung, um Wissen zu zeigen","en": "a short exam to show knowledge","uk": "коротка перевірка, щоб показати знання","ru": "короткая проверка, чтобы показать знания"},"def":{"de":"Am Freitag schreibt die Klasse einen kleinen <b>Test</b> in Mathe.","en":"On Friday, the class writes a small <b>test</b> in math.","uk":"У пʼятницю клас пише невеликий <b>тест</b> з математики.","ru":"В пятницу класс пишет небольшой <b>тест</b> по математике."},"gram":""},
  {"id":"k9_032","cat":"k9","term":{"de":"die Klasse","en":"class","uk":"клас","ru":"класс"},"short":{"de": "eine Gruppe von Schülern, die zusammen lernt","en": "a group of students who learn together","uk": "група учнів, які навчаються разом","ru": "группа учеников, которые учатся вместе"},"def":{"de":"In dieser <b>Klasse</b> sind über zwanzig Schüler.","en":"There are more than twenty students in this <b>class</b>.","uk":"У цьому <b>класі</b> понад двадцять учнів.","ru":"В этом <b>классе</b> более двадцати учеников."},"gram":""},
  {"id":"k9_033","cat":"k9","term":{"de":"fleißig","en":"diligent / hardworking","uk":"старанний / працьовитий","ru":"старательный / прилежный"},"short":{"de": "mit viel Einsatz und Ausdauer arbeitend oder lernend","en": "working or learning with a lot of effort and persistence","uk": "той, хто працює чи навчається з великими зусиллями та наполегливістю","ru": "тот, кто работает или учится с большими усилиями и настойчивостью"},"def":{"de":"Saida ist eine sehr <b>fleißige</b> Schülerin.","en":"Saida is a very <b>diligent</b> student.","uk":"Саїда дуже <b>старанна</b> учениця.","ru":"Саида очень <b>старательная</b> ученица."},"gram":""},
  {"id":"k9_034","cat":"k9","term":{"de":"der Klassenlehrer / die Klassenlehrerin","en":"homeroom teacher","uk":"класний керівник","ru":"классный руководитель"},"short":{"de": "der Lehrer, der für eine Klasse hauptverantwortlich ist","en": "the teacher who is mainly responsible for a class","uk": "вчитель, який головно відповідає за клас","ru": "учитель, который главным образом отвечает за класс"},"def":{"de":"Herr Klinke ist der <b>Klassenlehrer</b> von Jonas.","en":"Mr Klinke is Jonas's <b>homeroom teacher</b>.","uk":"Пан Клінке — <b>класний керівник</b> Йонаса.","ru":"Господин Клинке — <b>классный руководитель</b> Йонаса."},"gram":""},
  {"id":"k9_035","cat":"k9","term":{"de":"abschließen","en":"to complete / to finish","uk":"завершувати","ru":"завершать"},"short":{"de": "etwas Wichtiges zu Ende bringen, zum Beispiel eine Ausbildung","en": "to bring something important to an end, for example a training program","uk": "доводити щось важливе до кінця, наприклад навчання","ru": "доводить что-то важное до конца, например обучение"},"def":{"de":"Sie <g>hat</g> die Schule erfolgreich <g><b>abgeschlossen</b></g>.","en":"She <g>has</g> <g><b>completed</b></g> school successfully.","uk":"Вона успішно <b>завершила</b> школу.","ru":"Она успешно <b>завершила</b> школу."},"gram":"perfekt"},
  {"id":"k9_036","cat":"k9","term":{"de":"zuhören","en":"to listen","uk":"слухати","ru":"слушать"},"short":{"de": "aufmerksam auf das hören, was jemand sagt","en": "to listen attentively to what someone says","uk": "уважно слухати те, що хтось каже","ru": "внимательно слушать то, что кто-то говорит"},"def":{"de":"Die Schüler <b>hören</b> <g>dem Lehrer</g> aufmerksam <b>zu</b>.","en":"The students <b>listen</b> attentively to <g>the teacher</g>.","uk":"Учні уважно <b>слухають</b> <g>вчителя</g>.","ru":"Ученики внимательно <b>слушают</b> <g>учителя</g>."},"gram":"dativ_verben"},
  {"id":"k9_037","cat":"k9","term":{"de":"aufpassen","en":"to pay attention / to watch out","uk":"бути уважним / стежити","ru":"быть внимательным / следить"},"short":{"de": "genau achtgeben, damit nichts passiert","en": "to be very careful so that nothing happens","uk": "уважно стежити, щоб нічого не сталося","ru": "внимательно следить, чтобы ничего не случилось"},"def":{"de":"Im Straßenverkehr müssen Kinder besonders gut <b>aufpassen</b>.","en":"Children have to <b>pay</b> especially close <b>attention</b> in traffic.","uk":"У дорожньому русі діти мають бути особливо <b>уважними</b>.","ru":"В дорожном движении дети должны быть особенно <b>внимательными</b>."},"gram":""},
  {"id":"k9_038","cat":"k9","term":{"de":"begabt","en":"talented / gifted","uk":"обдарований / талановитий","ru":"одарённый / талантливый"},"short":{"de": "mit besonderem Talent für etwas","en": "with special talent for something","uk": "з особливим талантом до чогось","ru": "с особым талантом к чему-то"},"def":{"de":"Jonas ist sehr <b>begabt</b> in Naturwissenschaften.","en":"Jonas is very <b>talented</b> in the natural sciences.","uk":"Йонас дуже <b>обдарований</b> у природничих науках.","ru":"Йонас очень <b>одарён</b> в естественных науках."},"gram":""},
  {"id":"k9_039","cat":"k9","term":{"de":"sich bewerben um","en":"to apply for","uk":"подавати заявку на","ru":"подавать заявку на"},"short":{"de": "offiziell um etwas bitten, zum Beispiel eine Stelle","en": "to officially ask for something, for example a position","uk": "офіційно просити щось, наприклад місце","ru": "официально просить что-то, например место"},"def":{"de":"Sie <g><b>bewirbt sich</b></g> gerade <g><b>um</b></g> einen Platz an der neuen Schule.","en":"She is currently <g><b>applying for</b></g> a spot at the new school.","uk":"Вона зараз <b>подає заявку на</b> місце в новій школі.","ru":"Она сейчас <b>подаёт заявку на</b> место в новой школе."},"gram":"praepositionalverben"},
  {"id":"k9_040","cat":"k9","term":{"de":"der Lehrplan","en":"curriculum","uk":"навчальна програма","ru":"учебная программа"},"short":{"de": "ein Plan mit den Themen, die in der Schule gelehrt werden","en": "a plan with the topics taught in school","uk": "план з темами, які викладають у школі","ru": "план с темами, которые преподают в школе"},"def":{"de":"Der neue <b>Lehrplan</b> enthält mehr Naturwissenschaften.","en":"The new <b>curriculum</b> includes more natural sciences.","uk":"Нова <b>навчальна програма</b> містить більше природничих наук.","ru":"Новая <b>учебная программа</b> включает больше естественных наук."},"gram":""},
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
  {"id":"k10_021","cat":"k10","term":{"de":"die Beschwerde","en":"complaint","uk":"скарга","ru":"жалоба"},"short":{"de": "eine offizielle Aussage darüber, dass man mit etwas unzufrieden ist","en": "an official statement that you are unhappy with something","uk": "офіційна заява про те, що ти чимось незадоволений","ru": "официальное заявление о том, что ты чем-то недоволен"},"def":{"de":"Die Musik war die ganze Nacht sehr laut, <g>deshalb</g> hat er eine <b>Beschwerde</b> geschrieben.","en":"The music was very loud all night, <g>so</g> he wrote a <b>complaint</b>.","uk":"Музика була дуже гучною всю ніч, <g>тому</g> він написав <b>скаргу</b>.","ru":"Музыка была очень громкой всю ночь, <g>поэтому</g> он написал <b>жалобу</b>."},"gram":"satz_mit_deshalb"},
  {"id":"k10_022","cat":"k10","term":{"de":"sich beruhigen","en":"to calm down","uk":"заспокоюватися","ru":"успокаиваться"},"short":{"de": "wieder ruhig werden nach Ärger oder Aufregung","en": "to become calm again after anger or excitement","uk": "знову ставати спокійним після злості чи хвилювання","ru": "снова становиться спокойным после злости или волнения"},"def":{"de":"Beide waren sehr wütend, <g>deshalb</g> mussten sie sich erst <b>beruhigen</b>.","en":"Both were very angry, <g>so</g> they first had to <b>calm down</b>.","uk":"Обидва були дуже розлючені, <g>тому</g> їм спершу довелося <b>заспокоїтися</b>.","ru":"Оба были очень злы, <g>поэтому</g> им сначала пришлось <b>успокоиться</b>."},"gram":"satz_mit_deshalb"},
  {"id":"k10_023","cat":"k10","term":{"de":"stören","en":"to disturb","uk":"заважати / турбувати","ru":"мешать / беспокоить"},"short":{"de": "jemanden bei etwas unterbrechen oder belästigen","en": "to interrupt or bother someone during something","uk": "перебивати чи докучати комусь під час чогось","ru": "прерывать или докучать кому-то во время чего-то"},"def":{"de":"Der Lärm hat die Nachbarn sehr <b>gestört</b>, <g>deshalb</g> haben sie sich beschwert.","en":"The noise really <b>disturbed</b> the neighbors, <g>so</g> they complained.","uk":"Шум дуже <b>заважав</b> сусідам, <g>тому</g> вони поскаржилися.","ru":"Шум очень <b>мешал</b> соседям, <g>поэтому</g> они пожаловались."},"gram":"satz_mit_deshalb"},
  {"id":"k10_024","cat":"k10","term":{"de":"die Geduld","en":"patience","uk":"терпіння","ru":"терпение"},"short":{"de": "die Fähigkeit, ruhig zu warten oder etwas Schwieriges auszuhalten","en": "the ability to wait calmly or endure something difficult","uk": "здатність спокійно чекати чи витримувати щось складне","ru": "способность спокойно ждать или выдерживать что-то сложное"},"def":{"de":"Ihre <b>Geduld</b> war zu Ende, <g>deshalb</g> hat sie das Gespräch beendet.","en":"Her <b>patience</b> ran out, <g>so</g> she ended the conversation.","uk":"Її <b>терпіння</b> закінчилося, <g>тому</g> вона припинила розмову.","ru":"Её <b>терпение</b> закончилось, <g>поэтому</g> она закончила разговор."},"gram":"satz_mit_deshalb"},
  {"id":"k10_025","cat":"k10","term":{"de":"ausleihen","en":"to borrow / to lend","uk":"позичати","ru":"одалживать"},"short":{"de": "sich etwas für kurze Zeit von jemandem geben lassen","en": "to have someone give you something for a short time","uk": "давати чи брати щось на короткий час","ru": "давать или брать что-то на короткое время"},"def":{"de":"<g><b>Könntest</b></g> du mir bitte deinen Regenschirm <b>ausleihen</b>?","en":"<g><b>Could</b></g> you please <b>lend</b> me your umbrella?","uk":"<g><b>Чи міг би</b></g> ти, будь ласка, <b>позичити</b> мені свою парасольку?","ru":"<g><b>Не мог бы</b></g> ты, пожалуйста, <b>одолжить</b> мне свой зонт?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_026","cat":"k10","term":{"de":"die Erlaubnis","en":"permission","uk":"дозвіл","ru":"разрешение"},"short":{"de": "das Einverständnis, etwas tun zu dürfen","en": "the agreement that allows you to do something","uk": "згода на те, щоб щось робити","ru": "согласие на то, чтобы что-то делать"},"def":{"de":"<g><b>Dürfte</b></g> ich um Ihre <b>Erlaubnis</b> bitten, früher zu gehen?","en":"<g><b>Might</b></g> I ask for your <b>permission</b> to leave early?","uk":"<g><b>Чи міг би</b></g> я попросити ваш <b>дозвіл</b> піти раніше?","ru":"<g><b>Не мог бы</b></g> я попросить ваше <b>разрешение</b> уйти раньше?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_027","cat":"k10","term":{"de":"respektieren","en":"to respect","uk":"поважати","ru":"уважать"},"short":{"de": "die Meinung oder die Gefühle einer anderen Person achten","en": "to value another person's opinion or feelings","uk": "цінувати думку чи почуття іншої людини","ru": "ценить мнение или чувства другого человека"},"def":{"de":"<g><b>Könntet</b></g> ihr bitte die Meinung der anderen mehr <b>respektieren</b>?","en":"<g><b>Could</b></g> you please <b>respect</b> other people's opinions more?","uk":"<g><b>Чи могли б</b></g> ви, будь ласка, більше <b>поважати</b> думку інших?","ru":"<g><b>Не могли бы</b></g> вы, пожалуйста, больше <b>уважать</b> мнение других?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_028","cat":"k10","term":{"de":"der Kompromiss","en":"compromise","uk":"компроміс","ru":"компромисс"},"short":{"de": "eine Lösung, bei der beide Seiten etwas nachgeben","en": "a solution where both sides give up something","uk": "рішення, за якого обидві сторони чимось поступаються","ru": "решение, при котором обе стороны в чём-то уступают"},"def":{"de":"<g><b>Könnten</b></g> wir vielleicht einen <b>Kompromiss</b> finden?","en":"<g><b>Could</b></g> we perhaps find a <b>compromise</b>?","uk":"<g><b>Чи могли б</b></g> ми, можливо, знайти <b>компроміс</b>?","ru":"<g><b>Не могли бы</b></g> мы, возможно, найти <b>компромисс</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_029","cat":"k10","term":{"de":"die Toleranz","en":"tolerance","uk":"толерантність","ru":"терпимость / толерантность"},"short":{"de": "die Fähigkeit, andere Meinungen oder Lebensweisen zu akzeptieren","en": "the ability to accept other opinions or ways of life","uk": "здатність приймати інші думки чи способи життя","ru": "способность принимать другие мнения или образы жизни"},"def":{"de":"<b>Toleranz</b> gegenüber anderen Meinungen ist im Team sehr wichtig.","en":"<b>Tolerance</b> towards other opinions is very important in a team.","uk":"<b>Толерантність</b> до інших думок дуже важлива в команді.","ru":"<b>Терпимость</b> к другим мнениям очень важна в команде."},"gram":""},
  {"id":"k10_030","cat":"k10","term":{"de":"teamfähig","en":"able to work in a team","uk":"здатний до командної роботи","ru":"способный к командной работе"},"short":{"de": "gut in der Lage, mit anderen zusammen im Team zu arbeiten","en": "well able to work together with others in a team","uk": "добре здатний працювати разом з іншими в команді","ru": "хорошо способный работать вместе с другими в команде"},"def":{"de":"Sie ist sehr <b>teamfähig</b> und arbeitet gern mit anderen zusammen.","en":"She is very <b>good at teamwork</b> and enjoys working with others.","uk":"Вона дуже <b>здатна працювати в команді</b> і любить співпрацювати з іншими.","ru":"Она очень <b>способна работать в команде</b> и любит сотрудничать с другими."},"gram":""},
  {"id":"k10_031","cat":"k10","term":{"de":"hilfsbereit","en":"helpful","uk":"готовий допомагати / чуйний","ru":"готовый помочь / отзывчивый"},"short":{"de": "gern bereit, anderen zu helfen","en": "willing to help others","uk": "охоче готовий допомагати іншим","ru": "охотно готовый помогать другим"},"def":{"de":"Ihr neuer Kollege ist sehr <b>hilfsbereit</b>.","en":"Her new colleague is very <b>helpful</b>.","uk":"Її новий колега дуже <b>готовий допомагати</b>.","ru":"Её новый коллега очень <b>отзывчивый</b>."},"gram":""},
  {"id":"k10_032","cat":"k10","term":{"de":"sich versöhnen","en":"to reconcile","uk":"миритися","ru":"мириться"},"short":{"de": "sich nach einem Streit wieder vertragen","en": "to make up again after an argument","uk": "знову ладнати після сварки","ru": "снова ладить после ссоры"},"def":{"de":"<g><b>Könntet</b></g> ihr euch nicht endlich <b>versöhnen</b>?","en":"<g><b>Couldn't</b></g> you finally <b>reconcile</b>?","uk":"<g><b>Чи могли б</b></g> ви нарешті <b>помиритися</b>?","ru":"<g><b>Не могли бы</b></g> вы наконец <b>помириться</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_033","cat":"k10","term":{"de":"die Meinungsverschiedenheit","en":"disagreement","uk":"розбіжність у поглядах","ru":"разногласие"},"short":{"de": "wenn Menschen unterschiedliche Meinungen zu einem Thema haben","en": "when people have different opinions on a topic","uk": "коли люди мають різні думки щодо теми","ru": "когда люди имеют разные мнения по теме"},"def":{"de":"Zwischen den beiden gab es eine kleine <b>Meinungsverschiedenheit</b>.","en":"There was a small <b>disagreement</b> between the two of them.","uk":"Між ними виникла невелика <b>розбіжність у поглядах</b>.","ru":"Между ними возникло небольшое <b>разногласие</b>."},"gram":""},
  {"id":"k10_034","cat":"k10","term":{"de":"nachgeben","en":"to give in","uk":"поступатися","ru":"уступать"},"short":{"de": "im Streit die eigene Meinung aufgeben und zustimmen","en": "to give up your own opinion in an argument and agree","uk": "у суперечці відмовлятися від власної думки та погоджуватися","ru": "в споре отказываться от собственного мнения и соглашаться"},"def":{"de":"<g><b>Könntest</b></g> du bei dieser Kleinigkeit nicht einfach <b>nachgeben</b>?","en":"<g><b>Couldn't</b></g> you just <b>give in</b> on this small thing?","uk":"<g><b>Чи не міг би</b></g> ти просто <b>поступитися</b> в цій дрібниці?","ru":"<g><b>Не мог бы</b></g> ты просто <b>уступить</b> в этой мелочи?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_035","cat":"k10","term":{"de":"tolerant","en":"tolerant","uk":"толерантний","ru":"толерантный / терпимый"},"short":{"de": "bereit, andere Meinungen oder Lebensweisen zu akzeptieren","en": "willing to accept other opinions or ways of life","uk": "готовий приймати інші думки чи способи життя","ru": "готовый принимать другие мнения или образы жизни"},"def":{"de":"<g><b>Könntest</b></g> du versuchen, etwas <b>toleranter</b> zu sein?","en":"<g><b>Could</b></g> you try to be a bit more <b>tolerant</b>?","uk":"<g><b>Чи не міг би</b></g> ти спробувати бути трохи <b>толерантнішим</b>?","ru":"<g><b>Не мог бы</b></g> ты попробовать быть немного <b>терпимее</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_036","cat":"k10","term":{"de":"der Streitpunkt","en":"point of contention","uk":"предмет суперечки","ru":"предмет спора"},"short":{"de": "das genaue Thema, über das man sich streitet","en": "the exact topic that people are arguing about","uk": "тема, через яку саме сваряться","ru": "тема, из-за которой именно ссорятся"},"def":{"de":"<g><b>Könnten</b></g> wir den <b>Streitpunkt</b> noch einmal genau besprechen?","en":"<g><b>Could</b></g> we discuss the <b>point of contention</b> once more precisely?","uk":"<g><b>Чи могли б</b></g> ми ще раз детально обговорити <b>предмет суперечки</b>?","ru":"<g><b>Не могли бы</b></g> мы ещё раз подробно обсудить <b>предмет спора</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_037","cat":"k10","term":{"de":"die Ruhe","en":"peace / quiet","uk":"спокій / тиша","ru":"покой / тишина"},"short":{"de": "ein Zustand ohne Lärm oder Stress","en": "a state without noise or stress","uk": "стан без шуму чи стресу","ru": "состояние без шума или стресса"},"def":{"de":"<g><b>Könntet</b></g> ihr bitte etwas mehr <b>Ruhe</b> bewahren?","en":"<g><b>Could</b></g> you please keep a bit more <b>calm</b>?","uk":"<g><b>Чи могли б</b></g> ви, будь ласка, зберігати трохи більше <b>спокою</b>?","ru":"<g><b>Не могли бы</b></g> вы, пожалуйста, сохранять немного больше <b>спокойствия</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_038","cat":"k10","term":{"de":"das Problem","en":"problem","uk":"проблема","ru":"проблема"},"short":{"de": "eine schwierige Situation, die gelöst werden muss","en": "a difficult situation that needs to be solved","uk": "складна ситуація, яку треба вирішити","ru": "сложная ситуация, которую нужно решить"},"def":{"de":"<g><b>Könnten</b></g> wir das <b>Problem</b> gemeinsam lösen?","en":"<g><b>Could</b></g> we solve the <b>problem</b> together?","uk":"<g><b>Чи могли б</b></g> ми разом вирішити цю <b>проблему</b>?","ru":"<g><b>Не могли бы</b></g> мы вместе решить эту <b>проблему</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_039","cat":"k10","term":{"de":"um Erlaubnis bitten","en":"to ask for permission","uk":"просити дозволу","ru":"просить разрешения"},"short":{"de": "höflich fragen, ob man etwas tun darf","en": "to politely ask if you are allowed to do something","uk": "ввічливо питати, чи можна щось зробити","ru": "вежливо спрашивать, можно ли что-то сделать"},"def":{"de":"<g><b>Dürfte</b></g> ich Sie <b>um Erlaubnis bitten</b>, das Fenster zu öffnen?","en":"<g><b>Might</b></g> I <b>ask</b> your <b>permission</b> to open the window?","uk":"<g><b>Чи міг би</b></g> я <b>попросити у вас дозволу</b> відчинити вікно?","ru":"<g><b>Не мог бы</b></g> я <b>попросить у вас разрешения</b> открыть окно?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k10_040","cat":"k10","term":{"de":"zurückgeben","en":"to give back","uk":"повертати (позичене)","ru":"возвращать (одолженное)"},"short":{"de": "etwas Geliehenes wieder an den Besitzer geben","en": "to return something borrowed to its owner","uk": "віддавати позичену річ назад власнику","ru": "отдавать одолженную вещь обратно владельцу"},"def":{"de":"<g><b>Könntest</b></g> du mir bitte mein Buch <b>zurückgeben</b>?","en":"<g><b>Could</b></g> you please <b>give</b> me back my book?","uk":"<g><b>Чи не міг би</b></g> ти, будь ласка, <b>повернути</b> мені мою книжку?","ru":"<g><b>Не мог бы</b></g> ты, пожалуйста, <b>вернуть</b> мне мою книгу?"},"gram":"hoeflichkeit_konjunktiv_a22"},
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
  {"id":"k11_021","cat":"k11","term":{"de":"die Nachricht","en":"message","uk":"повідомлення","ru":"сообщение"},"short":{"de": "ein kurzer Text, den man jemandem schickt oder von jemandem bekommt","en": "a short text that you send to or receive from someone","uk": "короткий текст, який надсилаєш комусь або отримуєш від когось","ru": "короткий текст, который отправляешь кому-то или получаешь от кого-то"},"def":{"de":"<g>Die</g> <g><b>wichtige</b></g> <b>Nachricht</b> hat Selin sofort gelesen.","en":"Selin immediately read <g>the</g> <g><b>important</b></g> <b>message</b>.","uk":"Селін одразу прочитала <b>важливе</b> повідомлення.","ru":"Селин сразу прочитала <b>важное</b> сообщение."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_022","cat":"k11","term":{"de":"das Internet","en":"internet","uk":"інтернет","ru":"интернет"},"short":{"de": "ein weltweites Netz, mit dem Computer und Handys verbunden sind","en": "a worldwide network that connects computers and phones","uk": "всесвітня мережа, до якої підключені компʼютери й телефони","ru": "всемирная сеть, к которой подключены компьютеры и телефоны"},"def":{"de":"<g>Das</g> <g><b>schnelle</b></g> <b>Internet</b> zu Hause macht das Arbeiten leichter.","en":"<g>The</g> <g><b>fast</b></g> <b>internet</b> at home makes working easier.","uk":"<b>Швидкий</b> інтернет удома полегшує роботу.","ru":"<b>Быстрый</b> интернет дома облегчает работу."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_023","cat":"k11","term":{"de":"der Bildschirm","en":"screen","uk":"екран","ru":"экран"},"short":{"de": "die Fläche an einem Gerät, auf der man Bilder oder Texte sieht","en": "the surface on a device where you see images or text","uk": "поверхня пристрою, на якій видно зображення чи текст","ru": "поверхность устройства, на которой видны изображения или текст"},"def":{"de":"<g>Der</g> <g><b>große</b></g> <b>Bildschirm</b> von Herrn Baraka zeigt alles sehr deutlich.","en":"Mr Baraka's <g><b>large</b></g> <b>screen</b> shows everything very clearly.","uk":"<b>Великий</b> екран пана Бараки показує все дуже чітко.","ru":"<b>Большой</b> экран господина Бараки показывает всё очень чётко."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_024","cat":"k11","term":{"de":"die Information","en":"information","uk":"інформація","ru":"информация"},"short":{"de": "das, was man über etwas weiß oder erfährt","en": "what you know or learn about something","uk": "те, що ти знаєш чи дізнаєшся про щось","ru": "то, что ты знаешь или узнаёшь о чём-то"},"def":{"de":"<g>Die</g> <g><b>aktuelle</b></g> <b>Information</b> auf der Internetseite hilft vielen Nutzern.","en":"<g>The</g> <g><b>current</b></g> <b>information</b> on the website helps many users.","uk":"<b>Актуальна</b> інформація на сайті допомагає багатьом користувачам.","ru":"<b>Актуальная</b> информация на сайте помогает многим пользователям."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_025","cat":"k11","term":{"de":"der Techniker / die Technikerin","en":"technician","uk":"технік / технікиня","ru":"техник"},"short":{"de": "eine Person, die Geräte repariert oder installiert","en": "a person who repairs or installs devices","uk": "людина, яка ремонтує або встановлює прилади","ru": "человек, который ремонтирует или устанавливает приборы"},"def":{"de":"<g>Der</g> <g><b>erfahrene</b></g> <b>Techniker</b> repariert den Drucker in wenigen Minuten.","en":"<g>The</g> <g><b>experienced</b></g> <b>technician</b> repairs the printer in a few minutes.","uk":"<b>Досвідчений</b> технік ремонтує принтер за кілька хвилин.","ru":"<b>Опытный</b> техник ремонтирует принтер за несколько минут."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_026","cat":"k11","term":{"de":"das Kabel","en":"cable","uk":"кабель","ru":"кабель"},"short":{"de": "ein langes, dünnes Teil, mit dem man Geräte verbindet oder auflädt","en": "a long, thin part used to connect or charge devices","uk": "довга тонка деталь, якою зʼєднують або заряджають прилади","ru": "длинная тонкая деталь, которой соединяют или заряжают приборы"},"def":{"de":"<g>Das</g> <g><b>lange</b></g> <b>Kabel</b> reicht bis zur Steckdose.","en":"<g>The</g> <g><b>long</b></g> <b>cable</b> reaches the socket.","uk":"<b>Довгий</b> кабель дотягується до розетки.","ru":"<b>Длинный</b> кабель достаёт до розетки."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_027","cat":"k11","term":{"de":"aufladen","en":"to charge (a battery)","uk":"заряджати","ru":"заряжать"},"short":{"de": "einem Akku wieder Energie geben","en": "to give a battery energy again","uk": "наповнювати акумулятор енергією знову","ru": "наполнять аккумулятор энергией снова"},"def":{"de":"Herr Baraka muss <g>das</g> <g><b>leere</b></g> Handy jeden Abend <b>aufladen</b>.","en":"Mr Baraka has to <b>charge</b> <g>the</g> <g><b>empty</b></g> phone every evening.","uk":"Пан Барака мусить кожного вечора <b>заряджати</b> <b>розряджений</b> телефон.","ru":"Господин Барака должен каждый вечер <b>заряжать</b> <b>разряженный</b> телефон."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_028","cat":"k11","term":{"de":"der Kundendienst","en":"customer service","uk":"служба підтримки клієнтів","ru":"служба поддержки клиентов"},"short":{"de": "eine Abteilung, die Kunden bei Problemen mit einem Gerät hilft","en": "a department that helps customers with problems with a device","uk": "відділ, який допомагає клієнтам з проблемами приладу","ru": "отдел, который помогает клиентам с проблемами прибора"},"def":{"de":"<g>Der</g> <g><b>freundliche</b></g> <b>Kundendienst</b> hat das Problem schnell gelöst.","en":"<g>The</g> <g><b>friendly</b></g> <b>customer service</b> solved the problem quickly.","uk":"<b>Привітна</b> служба підтримки клієнтів швидко вирішила проблему.","ru":"<b>Приветливая</b> служба поддержки клиентов быстро решила проблему."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k11_029","cat":"k11","term":{"de":"die Benachrichtigung","en":"notification","uk":"сповіщення","ru":"уведомление"},"short":{"de": "eine kurze Nachricht auf dem Handy, die über etwas Neues informiert","en": "a short message on the phone that informs you about something new","uk": "коротке повідомлення на телефоні, яке інформує про щось нове","ru": "короткое сообщение на телефоне, которое информирует о чём-то новом"},"def":{"de":"Er bekommt <g>eine</g> <g><b>neue</b></g> <b>Benachrichtigung</b>, sobald jemand antwortet.","en":"He receives <g>a</g> <g><b>new</b></g> <b>notification</b> as soon as someone replies.","uk":"Він отримує <b>нове</b> сповіщення, щойно хтось відповідає.","ru":"Он получает <b>новое</b> уведомление, как только кто-то отвечает."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_030","cat":"k11","term":{"de":"speichern","en":"to save (a file)","uk":"зберігати (файл)","ru":"сохранять (файл)"},"short":{"de": "eine Datei so machen, dass man sie später wieder findet","en": "to keep a file so you can find it again later","uk": "зберігати файл так, щоб потім знову його знайти","ru": "сохранять файл так, чтобы потом снова его найти"},"def":{"de":"Selin hat <g>ein</g> <g><b>wichtiges</b></g> Dokument auf dem Handy <b>gespeichert</b>.","en":"Selin <b>has saved</b> <g>an</g> <g><b>important</b></g> document on her phone.","uk":"Селін <b>зберегла</b> на телефоні <b>важливий</b> документ.","ru":"Селин <b>сохранила</b> на телефоне <b>важный</b> документ."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_031","cat":"k11","term":{"de":"installieren","en":"to install","uk":"встановлювати (програму)","ru":"устанавливать (программу)"},"short":{"de": "ein neues Programm auf ein Gerät bringen, damit man es benutzen kann","en": "to put a new program on a device so you can use it","uk": "додавати нову програму на пристрій, щоб нею користуватися","ru": "добавлять новую программу на устройство, чтобы ею пользоваться"},"def":{"de":"Er möchte sich <g>ein</g> <g><b>praktisches</b></g> Programm zum Lernen <b>installieren</b>.","en":"He wants to <b>install</b> <g>a</g> <g><b>practical</b></g> program for learning.","uk":"Він хоче <b>встановити</b> <b>практичну</b> програму для навчання.","ru":"Он хочет <b>установить</b> <b>практичную</b> программу для обучения."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_032","cat":"k11","term":{"de":"die Übung","en":"exercise","uk":"вправа","ru":"упражнение"},"short":{"de": "eine kleine Aufgabe, mit der man etwas trainiert","en": "a small task used to practice something","uk": "невелике завдання, яким тренуєшся","ru": "небольшое задание, которым тренируешься"},"def":{"de":"Die App bietet <g>eine</g> <g><b>kurze</b></g> <b>Übung</b> für jeden Tag.","en":"The app offers <g>a</g> <g><b>short</b></g> <b>exercise</b> for every day.","uk":"Застосунок пропонує <b>коротку</b> вправу на кожен день.","ru":"Приложение предлагает <b>короткое</b> упражнение на каждый день."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_033","cat":"k11","term":{"de":"der Fortschritt","en":"progress","uk":"прогрес","ru":"прогресс"},"short":{"de": "wenn man langsam immer besser wird","en": "when you slowly get better and better","uk": "коли ти поступово стаєш кращим","ru": "когда ты постепенно становишься лучше"},"def":{"de":"Nach zwei Monaten sieht sie <g>einen</g> <g><b>großen</b></g> <b>Fortschritt</b> beim Deutschlernen.","en":"After two months, she sees <g>a</g> <g><b>big</b></g> <b>progress</b> in learning German.","uk":"Через два місяці вона бачить <b>великий</b> прогрес у вивченні німецької.","ru":"Через два месяца она видит <b>большой</b> прогресс в изучении немецкого."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k11_034","cat":"k11","term":{"de":"das Lesen","en":"reading","uk":"читання","ru":"чтение"},"short":{"de": "wenn man Texte anschaut und versteht, was dort steht","en": "when you look at texts and understand what is written there","uk": "коли дивишся на текст і розумієш, що там написано","ru": "когда смотришь на текст и понимаешь, что там написано"},"def":{"de":"<b>Das Lesen</b> von E-Mails gehört jeden Tag zu ihrer Arbeit.","en":"<b>Reading</b> emails is part of her work every day.","uk":"<b>Читання</b> електронних листів — частина її щоденної роботи.","ru":"<b>Чтение</b> электронных писем — часть её ежедневной работы."},"gram":""},
  {"id":"k11_035","cat":"k11","term":{"de":"das Schreiben","en":"writing","uk":"написання, письмо","ru":"написание, письмо"},"short":{"de": "wenn man Wörter oder Sätze auf Papier oder am Computer schreibt","en": "when you write words or sentences on paper or on a computer","uk": "коли пишеш слова чи речення на папері або на компʼютері","ru": "когда пишешь слова или предложения на бумаге или на компьютере"},"def":{"de":"<b>Das Schreiben</b> von kurzen Nachrichten fällt Herrn Baraka leicht.","en":"<b>Writing</b> short messages is easy for Mr Baraka.","uk":"<b>Написання</b> коротких повідомлень дається пану Бараці легко.","ru":"<b>Написание</b> коротких сообщений даётся господину Бараке легко."},"gram":""},
  {"id":"k11_036","cat":"k11","term":{"de":"das Surfen","en":"(internet) surfing","uk":"сёрфінг в інтернеті","ru":"сёрфинг в интернете"},"short":{"de": "wenn man im Internet von einer Seite zur nächsten geht","en": "when you go from one website to another on the internet","uk": "коли переходиш з одного сайту на інший в інтернеті","ru": "когда переходишь с одного сайта на другой в интернете"},"def":{"de":"<b>Das Surfen</b> im Internet dauert bei Selin oft eine Stunde.","en":"<b>Surfing</b> the internet often takes Selin an hour.","uk":"<b>Сёрфінг</b> в інтернеті часто триває у Селін годину.","ru":"<b>Сёрфинг</b> в интернете часто занимает у Селин час."},"gram":""},
  {"id":"k11_037","cat":"k11","term":{"de":"das Chatten","en":"chatting","uk":"спілкування в чаті","ru":"общение в чате"},"short":{"de": "wenn man online mit jemandem kurze Nachrichten schreibt","en": "when you write short messages to someone online","uk": "коли онлайн пишеш комусь короткі повідомлення","ru": "когда онлайн пишешь кому-то короткие сообщения"},"def":{"de":"<b>Das Chatten</b> mit Freunden macht ihr nach der Arbeit Spaß.","en":"<b>Chatting</b> with friends is fun for her after work.","uk":"<b>Спілкування в чаті</b> з друзями приносить їй задоволення після роботи.","ru":"<b>Общение в чате</b> с друзьями приносит ей удовольствие после работы."},"gram":""},
  {"id":"k11_038","cat":"k11","term":{"de":"das Spielen","en":"playing (games)","uk":"гра","ru":"игра"},"short":{"de": "wenn man zum Spaß ein Spiel am Handy oder Computer macht","en": "when you play a game on your phone or computer for fun","uk": "коли заради розваги граєш у гру на телефоні чи компʼютері","ru": "когда ради развлечения играешь в игру на телефоне или компьютере"},"def":{"de":"<b>Das Spielen</b> am Handy hilft ihm, sich zu entspannen.","en":"<b>Playing</b> on the phone helps him relax.","uk":"<b>Гра</b> на телефоні допомагає йому розслабитися.","ru":"<b>Игра</b> на телефоне помогает ему расслабиться."},"gram":""},
  {"id":"k11_039","cat":"k11","term":{"de":"das Filmen","en":"filming","uk":"зйомка відео","ru":"съёмка видео"},"short":{"de": "wenn man mit einer Kamera oder dem Handy ein Video macht","en": "when you make a video with a camera or phone","uk": "коли знімаєш відео камерою чи телефоном","ru": "когда снимаешь видео камерой или телефоном"},"def":{"de":"<b>Das Filmen</b> von kurzen Videos ist ihr neues Hobby.","en":"<b>Filming</b> short videos is her new hobby.","uk":"<b>Зйомка</b> коротких відео — її нове хобі.","ru":"<b>Съёмка</b> коротких видео — её новое хобби."},"gram":""},
  {"id":"k11_040","cat":"k11","term":{"de":"das Fotografieren","en":"photographing","uk":"фотографування","ru":"фотографирование"},"short":{"de": "wenn man mit einer Kamera oder dem Handy ein Foto macht","en": "when you take a photo with a camera or phone","uk": "коли робиш фото камерою чи телефоном","ru": "когда делаешь фото камерой или телефоном"},"def":{"de":"<b>Das Fotografieren</b> von Natur macht Herrn Baraka am Wochenende Freude.","en":"<b>Photographing</b> nature brings Mr Baraka joy on weekends.","uk":"<b>Фотографування</b> природи приносить панові Бараці радість на вихідних.","ru":"<b>Фотографирование</b> природы приносит господину Бараке радость по выходным."},"gram":""},
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
  {"id":"k12_021","cat":"k12","term":{"de":"der Rabatt","en":"discount","uk":"знижка","ru":"скидка"},"short":{"de": "wenn ein Produkt weniger kostet als normal","en": "when a product costs less than usual","uk": "коли товар коштує менше, ніж зазвичай","ru": "когда товар стоит меньше, чем обычно"},"def":{"de":"Der <b>Rabatt</b>, <g><b>der</b></g> nur heute gilt, spart ihr viel Geld.","en":"The <b>discount</b> <g><b>that</b></g> is only valid today saves her a lot of money.","uk":"Знижка, <g><b>яка</b></g> діє лише сьогодні, економить їй багато грошей.","ru":"Скидка, <g><b>которая</b></g> действует только сегодня, экономит ей много денег."},"gram":"relativsatz_nominativ"},
  {"id":"k12_022","cat":"k12","term":{"de":"der Stoff","en":"fabric, material","uk":"тканина","ru":"ткань"},"short":{"de": "das Material, aus dem Kleidung gemacht wird","en": "the material clothes are made of","uk": "матеріал, з якого виготовляють одяг","ru": "материал, из которого изготавливают одежду"},"def":{"de":"Der <b>Stoff</b>, <g><b>der</b></g> so weich ist, gefällt ihr am besten.","en":"The <b>fabric</b> <g><b>that</b></g> is so soft, she likes best.","uk":"<b>Тканина</b>, <g><b>яка</b></g> така мʼяка, подобається їй найбільше.","ru":"<b>Ткань</b>, <g><b>которая</b></g> такая мягкая, нравится ей больше всего."},"gram":"relativsatz_nominativ"},
  {"id":"k12_023","cat":"k12","term":{"de":"reklamieren","en":"to file a complaint (about goods)","uk":"рекламувати (товар), скаржитися на товар","ru":"рекламировать (товар), жаловаться на товар"},"short":{"de": "einer Firma sagen, dass ein gekauftes Produkt kaputt oder falsch ist","en": "to tell a company that a purchased product is broken or wrong","uk": "повідомити фірмі, що куплений товар зламаний чи не той","ru": "сообщить фирме, что купленный товар сломан или не тот"},"def":{"de":"Die Jacke, <g><b>die</b></g> ein Loch hat, möchte er sofort <b>reklamieren</b>.","en":"He wants to immediately <b>file a complaint</b> about the jacket <g><b>that</b></g> has a hole.","uk":"Куртку, <g><b>яка</b></g> має дірку, він хоче одразу <b>прорекламувати</b>.","ru":"Куртку, <g><b>которая</b></g> имеет дырку, он хочет сразу <b>прорекламировать</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_024","cat":"k12","term":{"de":"umtauschen","en":"to exchange (goods)","uk":"обмінювати (товар)","ru":"обменивать (товар)"},"short":{"de": "ein gekauftes Produkt im Geschäft gegen ein anderes tauschen","en": "to exchange a product you bought for another one in the shop","uk": "обміняти куплений товар на інший у магазині","ru": "обменять купленный товар на другой в магазине"},"def":{"de":"Der Pullover, <g><b>der</b></g> ihr nicht gefällt, kann sie problemlos <b>umtauschen</b>.","en":"She can easily <b>exchange</b> the sweater <g><b>that</b></g> she doesn't like.","uk":"Светр, <g><b>який</b></g> їй не подобається, вона може без проблем <b>обміняти</b>.","ru":"Свитер, <g><b>который</b></g> ей не нравится, она может без проблем <b>обменять</b>."},"gram":"relativsatz_nominativ"},
  {"id":"k12_025","cat":"k12","term":{"de":"der Hintergrund","en":"background","uk":"фон, задній план","ru":"фон, задний план"},"short":{"de": "der Teil eines Bildes, der am weitesten weg wirkt","en": "the part of a picture that seems furthest away","uk": "частина картини, яка виглядає найвіддаленішою","ru": "часть картины, которая кажется самой отдалённой"},"def":{"de":"<g>Der</g> <g><b>dunkle</b></g> <b>Hintergrund</b> des Bildes wirkt geheimnisvoll.","en":"<g>The</g> <g><b>dark</b></g> <b>background</b> of the picture looks mysterious.","uk":"<b>Темний</b> фон картини виглядає таємничим.","ru":"<b>Тёмный</b> фон картины выглядит таинственным."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_026","cat":"k12","term":{"de":"der Künstler / die Künstlerin","en":"artist","uk":"художник / художниця","ru":"художник / художница"},"short":{"de": "eine Person, die Bilder malt oder andere Kunst macht","en": "a person who paints pictures or makes other art","uk": "людина, яка малює картини чи створює інше мистецтво","ru": "человек, который рисует картины или создаёт другое искусство"},"def":{"de":"<g>Der</g> <g><b>talentierte</b></g> <b>Künstler</b> hat das Bild letztes Jahr gemalt.","en":"<g>The</g> <g><b>talented</b></g> <b>artist</b> painted the picture last year.","uk":"<b>Талановитий</b> художник намалював цю картину минулого року.","ru":"<b>Талантливый</b> художник нарисовал эту картину в прошлом году."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_027","cat":"k12","term":{"de":"der Rahmen","en":"frame","uk":"рама","ru":"рама"},"short":{"de": "das Holz oder Metall rund um ein Bild","en": "the wood or metal around a picture","uk": "дерево чи метал навколо картини","ru": "дерево или металл вокруг картины"},"def":{"de":"<g>Der</g> <g><b>goldene</b></g> <b>Rahmen</b> passt sehr gut zu dem Gemälde.","en":"<g>The</g> <g><b>golden</b></g> <b>frame</b> matches the painting very well.","uk":"<b>Золота</b> рама дуже добре пасує до картини.","ru":"<b>Золотая</b> рама очень хорошо подходит к картине."},"gram":"adjektiv_bestimmter_artikel"},
  {"id":"k12_028","cat":"k12","term":{"de":"der Eindruck","en":"impression","uk":"враження","ru":"впечатление"},"short":{"de": "das Gefühl, das man bekommt, wenn man etwas zum ersten Mal sieht","en": "the feeling you get when you see something for the first time","uk": "відчуття, яке отримуєш, коли вперше щось бачиш","ru": "ощущение, которое получаешь, когда впервые что-то видишь"},"def":{"de":"Das Bild macht auf sie <g>einen</g> <g><b>starken</b></g> <b>Eindruck</b>.","en":"The picture makes <g>a</g> <g><b>strong</b></g> <b>impression</b> on her.","uk":"Картина справляє на неї <b>сильне</b> враження.","ru":"Картина производит на неё <b>сильное</b> впечатление."},"gram":"adjektiv_unbestimmter_artikel_wdh"},
  {"id":"k12_029","cat":"k12","term":{"de":"bestellen","en":"to order","uk":"замовляти","ru":"заказывать"},"short":{"de": "sagen, dass man etwas haben möchte und es kaufen will","en": "to say that you want to have something and buy it","uk": "сказати, що хочеш щось мати й купити це","ru": "сказать, что хочешь что-то иметь и купить это"},"def":{"de":"Sie hat das Konzertticket <g>über</g> das Internet <b>bestellt</b>.","en":"She <b>ordered</b> the concert ticket <g>via</g> the internet.","uk":"Вона <b>замовила</b> квиток на концерт <b>через</b> інтернет.","ru":"Она <b>заказала</b> билет на концерт <b>через</b> интернет."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_030","cat":"k12","term":{"de":"die Lieferung","en":"delivery","uk":"доставка","ru":"доставка"},"short":{"de": "wenn eine bestellte Sache zu jemandem gebracht wird","en": "when an ordered item is brought to someone","uk": "коли замовлену річ приносять комусь","ru": "когда заказанную вещь приносят кому-то"},"def":{"de":"Die <b>Lieferung</b> kommt <g>ohne</g> zusätzliche Kosten.","en":"The <b>delivery</b> comes <g>without</g> extra costs.","uk":"<b>Доставка</b> здійснюється <b>без</b> додаткових витрат.","ru":"<b>Доставка</b> осуществляется <b>без</b> дополнительных расходов."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_031","cat":"k12","term":{"de":"bezahlen","en":"to pay","uk":"платити","ru":"платить"},"short":{"de": "Geld für etwas geben, das man kauft","en": "to give money for something you buy","uk": "віддавати гроші за те, що купуєш","ru": "отдавать деньги за то, что покупаешь"},"def":{"de":"Er hat die Musik-App <g>mit</g> seiner Kreditkarte <b>bezahlt</b>.","en":"He <b>paid</b> for the music app <g>with</g> his credit card.","uk":"Він <b>оплатив</b> музичний застосунок <b>карткою</b>.","ru":"Он <b>оплатил</b> музыкальное приложение <b>картой</b>."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_032","cat":"k12","term":{"de":"der Song","en":"song","uk":"пісня","ru":"песня"},"short":{"de": "ein kurzes Musikstück mit Text, das man singt oder hört","en": "a short piece of music with lyrics that you sing or listen to","uk": "коротка музична композиція з текстом, яку співають чи слухають","ru": "короткое музыкальное произведение с текстом, которое поют или слушают"},"def":{"de":"Dieser <b>Song</b> spielt <g>im</g> Radio den ganzen Tag.","en":"This <b>song</b> plays <g>on</g> the radio all day.","uk":"Ця <b>пісня</b> звучить <b>по</b> радіо цілий день.","ru":"Эта <b>песня</b> играет <b>по</b> радио весь день."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_033","cat":"k12","term":{"de":"der Text","en":"lyrics, text","uk":"текст (пісні)","ru":"текст (песни)"},"short":{"de": "die Wörter eines Liedes","en": "the words of a song","uk": "слова пісні","ru": "слова песни"},"def":{"de":"Sie kann den <b>Text</b> <g>ohne</g> Probleme auswendig singen.","en":"She can sing the <b>lyrics</b> from memory <g>without</g> problems.","uk":"Вона може співати <b>текст</b> напамʼять <b>без</b> проблем.","ru":"Она может петь <b>текст</b> наизусть <b>без</b> проблем."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_034","cat":"k12","term":{"de":"das Kissen","en":"cushion","uk":"подушка (диванна)","ru":"подушка (диванная)"},"short":{"de": "ein weiches Ding zum Sitzen oder Liegen, oft auf dem Sofa","en": "a soft thing to sit or lie on, often on the sofa","uk": "мʼяка річ для сидіння чи лежання, часто на дивані","ru": "мягкая вещь для сидения или лежания, часто на диване"},"def":{"de":"Das <b>Kissen</b> liegt <g>auf</g> dem Sofa.","en":"The <b>cushion</b> is lying <g>on</g> the sofa.","uk":"<b>Подушка</b> лежить <b>на</b> дивані.","ru":"<b>Подушка</b> лежит <b>на</b> диване."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_035","cat":"k12","term":{"de":"der Spiegel","en":"mirror","uk":"дзеркало","ru":"зеркало"},"short":{"de": "ein Glas, in dem man sich selbst sieht","en": "a piece of glass in which you see yourself","uk": "скло, в якому бачиш себе","ru": "стекло, в котором видишь себя"},"def":{"de":"Der <b>Spiegel</b> hängt <g>über</g> dem Waschbecken.","en":"The <b>mirror</b> hangs <g>above</g> the sink.","uk":"<b>Дзеркало</b> висить <b>над</b> раковиною.","ru":"<b>Зеркало</b> висит <b>над</b> раковиной."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_036","cat":"k12","term":{"de":"der Korb","en":"basket","uk":"кошик","ru":"корзина"},"short":{"de": "ein Behälter aus Draht oder Geflecht zum Tragen von Sachen","en": "a container made of wire or woven material for carrying things","uk": "контейнер з дроту чи плетіння для перенесення речей","ru": "контейнер из проволоки или плетения для переноски вещей"},"def":{"de":"Die Wäsche liegt <g>in</g> dem <b>Korb</b> neben dem Bett.","en":"The laundry is lying <g>in</g> the basket next to the bed.","uk":"Білизна лежить <b>у</b> кошику біля ліжка.","ru":"Бельё лежит <b>в</b> корзине рядом с кроватью."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_037","cat":"k12","term":{"de":"der Stiel","en":"handle (of a tool)","uk":"держак, ручка (інструмента)","ru":"черенок, ручка (инструмента)"},"short":{"de": "der lange, dünne Teil, an dem man ein Werkzeug hält","en": "the long, thin part you hold a tool by","uk": "довга тонка частина, за яку тримають інструмент","ru": "длинная тонкая часть, за которую держат инструмент"},"def":{"de":"Der <b>Stiel</b> vom Besen ist <g>aus</g> Holz.","en":"The broom's <b>handle</b> is made <g>of</g> wood.","uk":"<b>Держак</b> мітли зроблений <b>з</b> дерева.","ru":"<b>Черенок</b> метлы сделан <b>из</b> дерева."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_038","cat":"k12","term":{"de":"der Riegel","en":"latch, bolt","uk":"засувка, клямка","ru":"задвижка, щеколда"},"short":{"de": "ein kleines Metallteil, mit dem man eine Tür fest zumacht","en": "a small metal part used to lock a door tightly","uk": "невелика металева деталь, якою міцно замикають двері","ru": "небольшая металлическая деталь, которой крепко закрывают дверь"},"def":{"de":"Der <b>Riegel</b> ist <g>an</g> der Tür kaputt.","en":"The <b>latch</b> is broken <g>on</g> the door.","uk":"<b>Засувка</b> зламана <b>на</b> дверях.","ru":"<b>Задвижка</b> сломана <b>на</b> двери."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_039","cat":"k12","term":{"de":"das Sieb","en":"sieve, strainer","uk":"сито, друшляк","ru":"сито, дуршлаг"},"short":{"de": "ein Küchenwerkzeug mit kleinen Löchern zum Trennen von Flüssigkeit und festen Teilen","en": "a kitchen tool with small holes for separating liquid from solid parts","uk": "кухонний інструмент з дірочками для відділення рідини від твердих частин","ru": "кухонный инструмент с дырочками для отделения жидкости от твёрдых частей"},"def":{"de":"Die Nudeln liegen <g>im</g> <b>Sieb</b>.","en":"The noodles are lying <g>in</g> the strainer.","uk":"Локшина лежить <b>у</b> друшляку.","ru":"Лапша лежит <b>в</b> дуршлаге."},"gram":"praepositionen_akkusativ_dativ"},
  {"id":"k12_040","cat":"k12","term":{"de":"die Schublade","en":"drawer","uk":"шухляда","ru":"ящик (стола/комода)"},"short":{"de": "ein Teil eines Schranks oder Tisches, den man herausziehen kann","en": "a part of a cupboard or table that you can pull out","uk": "частина шафи чи столу, яку можна висунути","ru": "часть шкафа или стола, которую можно выдвинуть"},"def":{"de":"Die Schlüssel liegen <g>in</g> der obersten <b>Schublade</b>.","en":"The keys are lying <g>in</g> the top drawer.","uk":"Ключі лежать <b>у</b> верхній шухляді.","ru":"Ключи лежат <b>в</b> верхнем ящике."},"gram":"praepositionen_akkusativ_dativ"},
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
  {"id":"k13_021","cat":"k13","term":{"de":"der Elektriker / die Elektrikerin","en":"electrician","uk":"електрик / електричка","ru":"электрик"},"short":{"de": "eine Person, die elektrische Leitungen und Geräte installiert und repariert","en": "a person who installs and repairs electrical wiring and devices","uk": "людина, яка встановлює й ремонтує електропроводку та прилади","ru": "человек, который устанавливает и ремонтирует электропроводку и приборы"},"def":{"de":"Nach der Prüfung <g><b>wird</b></g> er offiziell <b>Elektriker</b>.","en":"After the exam, he <g><b>officially becomes</b></g> an <b>electrician</b>.","uk":"Після іспиту він офіційно <b>стає</b> <b>електриком</b>.","ru":"После экзамена он официально <b>становится</b> <b>электриком</b>."},"gram":"verb_werden"},
  {"id":"k13_022","cat":"k13","term":{"de":"der Bäcker / die Bäckerin","en":"baker","uk":"пекар / пекарка","ru":"пекарь"},"short":{"de": "eine Person, die Brot, Brötchen und Kuchen backt und verkauft","en": "a person who bakes and sells bread, rolls and cakes","uk": "людина, яка випікає і продає хліб, булочки та тістечка","ru": "человек, который выпекает и продаёт хлеб, булочки и пирожные"},"def":{"de":"Mit viel Übung <g><b>wird</b></g> sie eine ausgezeichnete <b>Bäckerin</b>.","en":"With a lot of practice, she <g><b>becomes</b></g> an excellent <b>baker</b>.","uk":"Завдяки багатьом тренуванням вона <b>стає</b> чудовою <b>пекаркою</b>.","ru":"Благодаря большой практике она <b>становится</b> отличной <b>пекарем</b>."},"gram":"verb_werden"},
  {"id":"k13_023","cat":"k13","term":{"de":"die Motivation","en":"motivation","uk":"мотивація","ru":"мотивация"},"short":{"de": "der Wunsch und die Energie, etwas zu erreichen","en": "the desire and energy to achieve something","uk": "бажання й енергія чогось досягти","ru": "желание и энергия чего-то достичь"},"def":{"de":"Vor der Prüfung <g><b>wird</b></g> seine <b>Motivation</b> immer größer.","en":"Before the exam, his <b>motivation</b> keeps <g><b>growing</b></g>.","uk":"Перед іспитом його <b>мотивація</b> стає дедалі більшою.","ru":"Перед экзаменом его <b>мотивация</b> становится всё больше."},"gram":"verb_werden"},
  {"id":"k13_024","cat":"k13","term":{"de":"die Ausdauer","en":"endurance, stamina","uk":"витривалість","ru":"выносливость"},"short":{"de": "die Fähigkeit, lange bei einer schwierigen Aufgabe zu bleiben, ohne aufzugeben","en": "the ability to keep going with a difficult task for a long time without giving up","uk": "здатність довго виконувати складне завдання, не здаючись","ru": "способность долго выполнять сложную задачу, не сдаваясь"},"def":{"de":"Bei der harten Ausbildung <g><b>wird</b></g> seine <b>Ausdauer</b> immer stärker.","en":"During the tough training, his <b>endurance</b> keeps <g><b>growing</b></g> stronger.","uk":"Під час важкого навчання його <b>витривалість</b> стає дедалі сильнішою.","ru":"Во время тяжёлого обучения его <b>выносливость</b> становится всё сильнее."},"gram":"verb_werden"},
  {"id":"k13_025","cat":"k13","term":{"de":"die Entscheidung","en":"decision","uk":"рішення","ru":"решение"},"short":{"de": "wenn man sich für eine von mehreren Möglichkeiten entscheidet","en": "when you choose one of several options","uk": "коли обираєш один з кількох варіантів","ru": "когда выбираешь один из нескольких вариантов"},"def":{"de":"Du <g><b>solltest</b></g> diese wichtige <b>Entscheidung</b> nicht allein treffen.","en":"You <g><b>should</b></g> not make this important <b>decision</b> alone.","uk":"Тобі <g>варто</g> не приймати це важливе <b>рішення</b> самому.","ru":"Тебе <g>стоит</g> не принимать это важное <b>решение</b> самому."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_026","cat":"k13","term":{"de":"der Ausbildungsplatz","en":"apprenticeship position","uk":"місце для навчання/стажування (за фахом)","ru":"место для обучения/стажировки (по специальности)"},"short":{"de": "eine Stelle in einer Firma, an der man einen Beruf lernt","en": "a position at a company where you learn a profession","uk": "місце в компанії, де навчаєшся професії","ru": "место в компании, где обучаешься профессии"},"def":{"de":"<g><b>Könntest</b></g> du mir helfen, einen guten <b>Ausbildungsplatz</b> zu finden?","en":"<g><b>Could</b></g> you help me find a good <b>apprenticeship position</b>?","uk":"Чи не міг би ти допомогти мені знайти хороше <b>місце для навчання</b>?","ru":"Не мог бы ты помочь мне найти хорошее <b>место для стажировки</b>?"},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_027","cat":"k13","term":{"de":"das Vorstellungsgespräch","en":"job interview","uk":"співбесіда","ru":"собеседование"},"short":{"de": "ein Gespräch mit einer Firma, wenn man sich um eine Stelle bewirbt","en": "a conversation with a company when applying for a job","uk": "розмова з фірмою, коли подаєш заявку на посаду","ru": "разговор с фирмой, когда подаёшь заявку на должность"},"def":{"de":"Du <g><b>solltest</b></g> dich gut auf das <b>Vorstellungsgespräch</b> vorbereiten.","en":"You <g><b>should</b></g> prepare well for the <b>job interview</b>.","uk":"Тобі <g>варто</g> добре підготуватися до <b>співбесіди</b>.","ru":"Тебе <g>стоит</g> хорошо подготовиться к <b>собеседованию</b>."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_028","cat":"k13","term":{"de":"überlegen","en":"to think over, to consider","uk":"обдумувати","ru":"обдумывать"},"short":{"de": "über etwas nachdenken, bevor man eine Entscheidung trifft","en": "to think about something before making a decision","uk": "подумати про щось, перш ніж прийняти рішення","ru": "подумать о чём-то, прежде чем принять решение"},"def":{"de":"Du <g><b>solltest</b></g> dir diese Berufswahl noch einmal in Ruhe <b>überlegen</b>.","en":"You <g><b>should</b></g> <b>think</b> about this career choice calmly once more.","uk":"Тобі <g>варто</g> ще раз спокійно <b>обдумати</b> цей вибір професії.","ru":"Тебе <g>стоит</g> ещё раз спокойно <b>обдумать</b> этот выбор профессии."},"gram":"hoeflichkeit_konjunktiv_a22"},
  {"id":"k13_029","cat":"k13","term":{"de":"der Lebenslauf","en":"CV, resume","uk":"резюме","ru":"резюме"},"short":{"de": "ein Dokument, das die eigene Ausbildung und Berufserfahrung zusammenfasst","en": "a document that summarizes your education and work experience","uk": "документ, який підсумовує освіту та досвід роботи","ru": "документ, который обобщает образование и опыт работы"},"def":{"de":"Es ist wichtig, <g>dass</g> der <b>Lebenslauf</b> aktuell ist.","en":"It is important <g>that</g> the <b>CV</b> is up to date.","uk":"Важливо, <g>щоб</g> <b>резюме</b> було актуальним.","ru":"Важно, <g>чтобы</g> <b>резюме</b> было актуальным."},"gram":"dass_satz_wdh"},
  {"id":"k13_030","cat":"k13","term":{"de":"die Probezeit","en":"probation period, trial period","uk":"випробувальний термін","ru":"испытательный срок"},"short":{"de": "die ersten Monate in einem neuen Job, in denen man sich zeigen muss","en": "the first months in a new job when you have to prove yourself","uk": "перші місяці на новій роботі, коли треба показати себе","ru": "первые месяцы на новой работе, когда нужно показать себя"},"def":{"de":"Im Vertrag steht, <g>dass</g> die <b>Probezeit</b> sechs Monate dauert.","en":"The contract states <g>that</g> the <b>probation period</b> lasts six months.","uk":"У договорі написано, <g>що</g> <b>випробувальний термін</b> триває шість місяців.","ru":"В договоре написано, <g>что</g> <b>испытательный срок</b> длится шесть месяцев."},"gram":"dass_satz_wdh"},
  {"id":"k13_031","cat":"k13","term":{"de":"die Referenz","en":"reference","uk":"рекомендація, референс","ru":"рекомендация, референс"},"short":{"de": "der Kontakt zu einer Person, die etwas Gutes über die eigene Arbeit sagen kann","en": "the contact of a person who can say something good about your work","uk": "контакт людини, яка може сказати щось хороше про твою роботу","ru": "контакт человека, который может сказать что-то хорошее о твоей работе"},"def":{"de":"Die Firma möchte, <g>dass</g> er eine <b>Referenz</b> von seinem letzten Arbeitgeber mitbringt.","en":"The company wants <g>that</g> he brings a <b>reference</b> from his last employer.","uk":"Фірма хоче, <g>щоб</g> він приніс <b>рекомендацію</b> від попереднього роботодавця.","ru":"Фирма хочет, <g>чтобы</g> он принёс <b>рекомендацию</b> от предыдущего работодателя."},"gram":"dass_satz_wdh"},
  {"id":"k13_032","cat":"k13","term":{"de":"das Anschreiben","en":"cover letter","uk":"супровідний лист","ru":"сопроводительное письмо"},"short":{"de": "ein kurzer Brief, den man zusammen mit dem Lebenslauf schickt","en": "a short letter you send together with your CV","uk": "короткий лист, який надсилають разом з резюме","ru": "короткое письмо, которое отправляют вместе с резюме"},"def":{"de":"Es ist wichtig, <g>dass</g> das <b>Anschreiben</b> persönlich klingt.","en":"It is important <g>that</g> the <b>cover letter</b> sounds personal.","uk":"Важливо, <g>щоб</g> <b>супровідний лист</b> звучав особисто.","ru":"Важно, <g>чтобы</g> <b>сопроводительное письмо</b> звучало лично."},"gram":"dass_satz_wdh"},
  {"id":"k13_033","cat":"k13","term":{"de":"die Fremdsprache","en":"foreign language","uk":"іноземна мова","ru":"иностранный язык"},"short":{"de": "eine Sprache, die nicht die eigene Muttersprache ist","en": "a language that is not your own mother tongue","uk": "мова, яка не є рідною","ru": "язык, который не является родным"},"def":{"de":"Im Lebenslauf steht, <g>dass</g> sie zwei <b>Fremdsprachen</b> spricht.","en":"The CV states <g>that</g> she speaks two <b>foreign languages</b>.","uk":"У резюме написано, <g>що</g> вона розмовляє двома <b>іноземними мовами</b>.","ru":"В резюме написано, <g>что</g> она говорит на двух <b>иностранных языках</b>."},"gram":"dass_satz_wdh"},
  {"id":"k13_034","cat":"k13","term":{"de":"der Schmied","en":"blacksmith","uk":"коваль","ru":"кузнец"},"short":{"de": "eine Person, die aus heißem Metall Werkzeuge oder andere Dinge herstellt","en": "a person who makes tools or other things from hot metal","uk": "людина, яка виготовляє інструменти чи інші речі з гарячого металу","ru": "человек, который изготавливает инструменты или другие вещи из горячего металла"},"def":{"de":"Man merkt, <g>dass</g> der <b>Schmied</b> aus Eisen sehr starke Werkzeuge macht.","en":"You notice <g>that</g> the <b>blacksmith</b> makes very strong tools from iron.","uk":"Помітно, <g>що</g> <b>коваль</b> робить дуже міцні інструменти з заліза.","ru":"Заметно, <g>что</g> <b>кузнец</b> делает очень крепкие инструменты из железа."},"gram":"dass_satz_wdh"},
  {"id":"k13_035","cat":"k13","term":{"de":"der Arbeitsmarkt","en":"job market","uk":"ринок праці","ru":"рынок труда"},"short":{"de": "die Situation, wie viele Jobs es gibt und wer sie sucht","en": "the situation of how many jobs there are and who is looking for them","uk": "ситуація з тим, скільки є вакансій і хто їх шукає","ru": "ситуация с тем, сколько есть вакансий и кто их ищет"},"def":{"de":"Experten sagen, <g>dass</g> der <b>Arbeitsmarkt</b> für Handwerker gut ist.","en":"Experts say <g>that</g> the <b>job market</b> for craftspeople is good.","uk":"Експерти кажуть, <g>що</g> <b>ринок праці</b> для ремісників хороший.","ru":"Эксперты говорят, <g>что</g> <b>рынок труда</b> для ремесленников хороший."},"gram":"dass_satz_wdh"},
  {"id":"k13_036","cat":"k13","term":{"de":"die Arbeitszeit","en":"working hours","uk":"робочий час","ru":"рабочее время"},"short":{"de": "die Zeit, in der man arbeitet","en": "the time during which you work","uk": "час, протягом якого працюєш","ru": "время, в течение которого работаешь"},"def":{"de":"Im Vertrag steht, <g>dass</g> die <b>Arbeitszeit</b> vierzig Stunden pro Woche beträgt.","en":"The contract states <g>that</g> the <b>working hours</b> are forty hours per week.","uk":"У договорі написано, <g>що</g> <b>робочий час</b> становить сорок годин на тиждень.","ru":"В договоре написано, <g>что</g> <b>рабочее время</b> составляет сорок часов в неделю."},"gram":"dass_satz_wdh"},
  {"id":"k13_037","cat":"k13","term":{"de":"der Respekt","en":"respect","uk":"повага","ru":"уважение"},"short":{"de": "das Gefühl, jemanden wegen seiner Fähigkeiten oder seines Charakters zu achten","en": "the feeling of valuing someone because of their skills or character","uk": "почуття поваги до когось через його вміння чи характер","ru": "чувство уважения к кому-то за его умения или характер"},"def":{"de":"Alle wissen, <g>dass</g> gegenseitiger <b>Respekt</b> im Team sehr wichtig ist.","en":"Everyone knows <g>that</g> mutual <b>respect</b> in the team is very important.","uk":"Усі знають, <g>що</g> взаємна <b>повага</b> в команді дуже важлива.","ru":"Все знают, <g>что</g> взаимное <b>уважение</b> в команде очень важно."},"gram":"dass_satz_wdh"},
  {"id":"k13_038","cat":"k13","term":{"de":"die Gewerkschaft","en":"labor union","uk":"профспілка","ru":"профсоюз"},"short":{"de": "eine Organisation, die die Rechte von Arbeitnehmern schützt","en": "an organization that protects the rights of employees","uk": "організація, яка захищає права працівників","ru": "организация, которая защищает права работников"},"def":{"de":"Man hört oft, <g>dass</g> die <b>Gewerkschaft</b> für bessere Löhne kämpft.","en":"You often hear <g>that</g> the <b>union</b> fights for better wages.","uk":"Часто чуємо, <g>що</g> <b>профспілка</b> бореться за кращі зарплати.","ru":"Часто слышим, <g>что</g> <b>профсоюз</b> борется за лучшие зарплаты."},"gram":"dass_satz_wdh"},
  {"id":"k13_039","cat":"k13","term":{"de":"der Standort","en":"location, site","uk":"місцезнаходження, локація","ru":"местонахождение, локация"},"short":{"de": "der Ort, an dem sich eine Firma oder ein Betrieb befindet","en": "the place where a company or business is located","uk": "місце, де розташована фірма чи підприємство","ru": "место, где расположена фирма или предприятие"},"def":{"de":"In der Anzeige steht, <g>dass</g> der <b>Standort</b> der Firma zentral liegt.","en":"The advertisement states <g>that</g> the company's <b>location</b> is central.","uk":"В оголошенні написано, <g>що</g> <b>локація</b> фірми центральна.","ru":"В объявлении написано, <g>что</g> <b>местоположение</b> фирмы центральное."},"gram":"dass_satz_wdh"},
  {"id":"k13_040","cat":"k13","term":{"de":"die Pflicht","en":"duty, obligation","uk":"обовʼязок","ru":"обязанность"},"short":{"de": "etwas, das man tun muss, weil es von einem erwartet wird","en": "something you must do because it is expected of you","uk": "те, що мусиш зробити, бо цього від тебе очікують","ru": "то, что должен сделать, потому что этого от тебя ожидают"},"def":{"de":"Der Chef erklärt, <g>dass</g> Pünktlichkeit zu den wichtigsten <b>Pflichten</b> gehört.","en":"The boss explains <g>that</g> punctuality is one of the most important <b>duties</b>.","uk":"Начальник пояснює, <g>що</g> пунктуальність — один з найважливіших <b>обовʼязків</b>.","ru":"Начальник объясняет, <g>что</g> пунктуальность — одна из важнейших <b>обязанностей</b>."},"gram":"dass_satz_wdh"},
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
  {"id":"k14_021","cat":"k14","term":{"de":"aufmerksam","en":"attentive","uk":"уважний","ru":"внимательный"},"short":{"de": "gut aufpassen und merken, was um einen herum passiert","en": "to pay good attention and notice what is happening around you","uk": "добре стежити і помічати, що відбувається навколо","ru": "хорошо следить и замечать, что происходит вокруг"},"def":{"de":"Mein Freund ist sehr <b>aufmerksam</b> — er merkt sofort, wenn es <g><b>mir</b></g> nicht gut geht.","en":"My friend is very <b>attentive</b> — he notices immediately when <g><b>I</b></g> am not doing well.","uk":"Мій друг дуже <b>уважний</b> — він одразу помічає, коли <b>мені</b> недобре.","ru":"Мой друг очень <b>внимательный</b> — он сразу замечает, когда <b>мне</b> нехорошо."},"gram":"personalpronomen_wdh"},
  {"id":"k14_022","cat":"k14","term":{"de":"humorvoll","en":"humorous, funny","uk":"дотепний","ru":"остроумный"},"short":{"de": "gerne lustig, macht andere Menschen zum Lachen","en": "likes to be funny, makes other people laugh","uk": "любить жартувати, смішить інших людей","ru": "любит шутить, смешит других людей"},"def":{"de":"Meine Freundin ist sehr <b>humorvoll</b> und bringt <g><b>mich</b></g> immer zum Lachen.","en":"My friend is very <b>funny</b> and always makes <g><b>me</b></g> laugh.","uk":"Моя подруга дуже <b>дотепна</b> й завжди смішить <b>мене</b>.","ru":"Моя подруга очень <b>остроумная</b> и всегда смешит <b>меня</b>."},"gram":"personalpronomen_wdh"},
  {"id":"k14_023","cat":"k14","term":{"de":"geduldig","en":"patient","uk":"терплячий","ru":"терпеливый"},"short":{"de": "ruhig warten können, ohne nervös zu werden","en": "able to wait calmly without becoming nervous","uk": "вміє спокійно чекати, не нервуючи","ru": "умеет спокойно ждать, не нервничая"},"def":{"de":"Er bleibt immer <b>geduldig</b> mit <g><b>ihr</b></g>, auch wenn sie einen Fehler macht.","en":"He always stays <b>patient</b> with <g><b>her</b></g>, even when she makes a mistake.","uk":"Він завжди залишається <b>терплячим</b> з <b>нею</b>, навіть коли вона помиляється.","ru":"Он всегда остаётся <b>терпеливым</b> с <b>ней</b>, даже когда она ошибается."},"gram":"personalpronomen_wdh"},
  {"id":"k14_024","cat":"k14","term":{"de":"der Charakter","en":"character, personality","uk":"характер","ru":"характер"},"short":{"de": "die typische Art, wie jemand denkt und sich verhält","en": "the typical way someone thinks and behaves","uk": "типовий спосіб, як людина думає і поводиться","ru": "типичный способ, как человек думает и ведёт себя"},"def":{"de":"Sein <b>Charakter</b> gefällt <g><b>mir</b></g> sehr — er ist immer ruhig und freundlich.","en":"His <b>character</b> pleases <g><b>me</b></g> a lot — he is always calm and friendly.","uk":"Його <b>характер</b> дуже подобається <b>мені</b> — він завжди спокійний і привітний.","ru":"Его <b>характер</b> мне очень нравится — он всегда спокойный и дружелюбный."},"gram":"personalpronomen_wdh"},
  {"id":"k14_025","cat":"k14","term":{"de":"füttern","en":"to feed (an animal)","uk":"годувати (тварину)","ru":"кормить (животное)"},"short":{"de": "einem Tier Essen geben","en": "to give an animal food","uk": "давати тварині їжу","ru": "давать животному еду"},"def":{"de":"Sie <b>füttert</b> die Katze jeden Morgen, <g>damit</g> sie nicht hungrig bleibt.","en":"She <b>feeds</b> the cat every morning <g>so that</g> it doesn't stay hungry.","uk":"Вона <b>годує</b> кота щоранку, <g>щоб</g> той не залишався голодним.","ru":"Она <b>кормит</b> кота каждое утро, <g>чтобы</g> тот не оставался голодным."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_026","cat":"k14","term":{"de":"der Tierarzt / die Tierärztin","en":"veterinarian","uk":"ветеринар / ветеринарка","ru":"ветеринар"},"short":{"de": "eine Person, die kranke Tiere untersucht und behandelt","en": "a person who examines and treats sick animals","uk": "людина, яка оглядає й лікує хворих тварин","ru": "человек, который осматривает и лечит больных животных"},"def":{"de":"Er <g>lässt</g> seinen Hund regelmäßig vom <b>Tierarzt</b> <g>untersuchen</g>.","en":"He <g>has</g> his dog regularly <g>examined</g> by the <b>vet</b>.","uk":"Він регулярно віддає свого пса на огляд до <b>ветеринара</b>.","ru":"Он регулярно отдаёт свою собаку на осмотр к <b>ветеринару</b>."},"gram":"verb_lassen"},
  {"id":"k14_027","cat":"k14","term":{"de":"impfen","en":"to vaccinate","uk":"щепити, вакцинувати","ru":"прививать, вакцинировать"},"short":{"de": "einem Tier oder Menschen eine Spritze gegen eine Krankheit geben","en": "to give an animal or person an injection against a disease","uk": "робити тварині чи людині укол проти хвороби","ru": "делать животному или человеку укол против болезни"},"def":{"de":"Die Besitzer <g>lassen</g> ihre Katze jedes Jahr <g><b>impfen</b></g>.","en":"The owners <g>have</g> their cat <g><b>vaccinated</b></g> every year.","uk":"Власники щороку <b>щеплюють</b> свого кота у ветеринара.","ru":"Хозяева ежегодно <b>прививают</b> своего кота у ветеринара."},"gram":"verb_lassen"},
  {"id":"k14_028","cat":"k14","term":{"de":"der Käfig","en":"cage","uk":"клітка","ru":"клетка"},"short":{"de": "ein kleiner Raum mit Gittern, in dem man ein Tier hält","en": "a small barred space in which an animal is kept","uk": "невеликий простір з ґратами, де тримають тварину","ru": "небольшое пространство с решётками, где держат животное"},"def":{"de":"Der Hamster wohnt in einem großen <b>Käfig</b>, <g>damit</g> er genug Platz zum Laufen hat.","en":"The hamster lives in a large <b>cage</b> <g>so that</g> it has enough space to run.","uk":"Хомʼяк живе у великій <b>клітці</b>, <g>щоб</g> у нього було достатньо місця для бігу.","ru":"Хомяк живёт в большой <b>клетке</b>, <g>чтобы</g> у него было достаточно места для бега."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_029","cat":"k14","term":{"de":"der Lebenstraum","en":"life dream","uk":"мрія життя","ru":"мечта жизни"},"short":{"de": "der wichtigste Wunsch, den man im Leben erreichen möchte","en": "the most important wish you want to achieve in life","uk": "найважливіше бажання, якого хочеш досягти в житті","ru": "самое важное желание, которого хочешь достичь в жизни"},"def":{"de":"Ihr größter <b>Lebenstraum</b> ist es, ein eigenes Café zu eröffnen.","en":"Her biggest <b>life dream</b> is to open her own café.","uk":"Її найбільша <b>мрія життя</b> — відкрити власну кавʼярню.","ru":"Её самая большая <b>мечта жизни</b> — открыть собственное кафе."},"gram":""},
  {"id":"k14_030","cat":"k14","term":{"de":"die Gesundheit","en":"health","uk":"здоровʼя","ru":"здоровье"},"short":{"de": "der Zustand, wenn man körperlich und geistig gut geht","en": "the state of being physically and mentally well","uk": "стан, коли тобі добре фізично й психічно","ru": "состояние, когда тебе хорошо физически и психически"},"def":{"de":"Für viele Menschen ist ihre <b>Gesundheit</b> das Wichtigste im Leben.","en":"For many people, their <b>health</b> is the most important thing in life.","uk":"Для багатьох людей <b>здоровʼя</b> — найважливіше в житті.","ru":"Для многих людей <b>здоровье</b> — самое важное в жизни."},"gram":""},
  {"id":"k14_031","cat":"k14","term":{"de":"zufrieden","en":"satisfied, content","uk":"задоволений","ru":"довольный"},"short":{"de": "glücklich mit dem, was man hat oder erreicht hat","en": "happy with what you have or have achieved","uk": "щасливий з тим, що маєш чи чого досяг","ru": "счастлив с тем, что имеешь или чего достиг"},"def":{"de":"Sie fühlt sich <b>zufrieden</b>, weil sie tut, was ihr wirklich wichtig ist.","en":"She feels <b>content</b> because she does what really matters to her.","uk":"Вона почувається <b>задоволеною</b>, бо робить те, що для неї справді важливо.","ru":"Она чувствует себя <b>довольной</b>, потому что делает то, что для неё действительно важно."},"gram":""},
  {"id":"k14_032","cat":"k14","term":{"de":"die Erfüllung","en":"fulfillment","uk":"сповненість, задоволення (від досягнутого)","ru":"наполненность, удовлетворение (от достигнутого)"},"short":{"de": "das gute Gefühl, wenn man erreicht hat, was einem wichtig war","en": "the good feeling when you have achieved what mattered to you","uk": "приємне відчуття, коли досяг того, що для тебе важливо","ru": "приятное чувство, когда достиг того, что для тебя важно"},"def":{"de":"Für ihn bedeutet echte <b>Erfüllung</b>, seine Familie glücklich zu sehen.","en":"For him, true <b>fulfillment</b> means seeing his family happy.","uk":"Для нього справжня <b>сповненість</b> — бачити свою родину щасливою.","ru":"Для него настоящая <b>наполненность</b> — видеть свою семью счастливой."},"gram":""},
  {"id":"k14_033","cat":"k14","term":{"de":"die Priorität","en":"priority","uk":"пріоритет","ru":"приоритет"},"short":{"de": "das, was für jemanden am wichtigsten ist und zuerst kommt","en": "what is most important to someone and comes first","uk": "те, що для когось найважливіше і йде на першому місці","ru": "то, что для кого-то самое важное и идёт в первую очередь"},"def":{"de":"Er setzt neue <b>Prioritäten</b>, <g>damit</g> er mehr Zeit für seine Familie hat.","en":"He sets new <b>priorities</b> <g>so that</g> he has more time for his family.","uk":"Він визначає нові <b>пріоритети</b>, <g>щоб</g> мати більше часу для родини.","ru":"Он определяет новые <b>приоритеты</b>, <g>чтобы</g> иметь больше времени для семьи."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_034","cat":"k14","term":{"de":"vergessen","en":"to forget","uk":"забувати","ru":"забывать"},"short":{"de": "nicht mehr an etwas denken, das man früher gewusst hat","en": "to no longer think of something you used to know","uk": "більше не думати про те, що раніше знав","ru": "больше не думать о том, что раньше знал"},"def":{"de":"Er wird nie <b>vergessen</b>, wie seine Freunde ihm geholfen haben.","en":"He will never <b>forget</b> how his friends helped him.","uk":"Він ніколи не <b>забуде</b>, як йому допомогли друзі.","ru":"Он никогда не <b>забудет</b>, как ему помогли друзья."},"gram":""},
  {"id":"k14_035","cat":"k14","term":{"de":"schließen","en":"to form (a friendship), to close","uk":"заводити (дружбу), закривати","ru":"заводить (дружбу), закрывать"},"short":{"de": "hier: eine neue Freundschaft beginnen","en": "here: to start a new friendship","uk": "тут: почати нову дружбу","ru": "здесь: начать новую дружбу"},"def":{"de":"Sie hat im Urlaub schnell neue Freundschaften <b>geschlossen</b>.","en":"She quickly <b>formed</b> new friendships during the holiday.","uk":"Вона швидко <b>завела</b> нові дружні стосунки під час відпустки.","ru":"Она быстро <b>завела</b> новые дружеские отношения во время отпуска."},"gram":""},
  {"id":"k14_036","cat":"k14","term":{"de":"heißen","en":"to be called","uk":"звати(ся)","ru":"зваться, называться"},"short":{"de": "einen bestimmten Namen haben","en": "to have a certain name","uk": "мати певне імʼя","ru": "иметь определённое имя"},"def":{"de":"Ihr bester Freund <b>heißt</b> Malik, seit sie Kinder waren.","en":"Her best friend has been <b>called</b> Malik since they were children.","uk":"Її найкращого друга <b>звати</b> Малік ще з дитинства.","ru":"Её лучшего друга <b>зовут</b> Малик ещё с детства."},"gram":""},
  {"id":"k14_037","cat":"k14","term":{"de":"wissen","en":"to know","uk":"знати","ru":"знать"},"short":{"de": "eine Information im Kopf haben","en": "to have information in your mind","uk": "мати інформацію в голові","ru": "иметь информацию в голове"},"def":{"de":"Sie erklärt ihm alles genau, <g>damit</g> er wirklich <b>weiß</b>, was passiert ist.","en":"She explains everything to him precisely <g>so that</g> he really <b>knows</b> what happened.","uk":"Вона все точно пояснює йому, <g>щоб</g> він справді <b>знав</b>, що сталося.","ru":"Она всё точно объясняет ему, <g>чтобы</g> он действительно <b>знал</b>, что произошло."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_038","cat":"k14","term":{"de":"verpassen","en":"to miss (an event, opportunity)","uk":"пропускати (нагоду, подію)","ru":"упускать (случай, событие)"},"short":{"de": "nicht dabei sein, wenn etwas Wichtiges passiert","en": "to not be there when something important happens","uk": "не бути присутнім, коли відбувається щось важливе","ru": "не присутствовать, когда происходит что-то важное"},"def":{"de":"Sie will die Geburtstagsfeier ihrer besten Freundin auf keinen Fall <b>verpassen</b>.","en":"She definitely doesn't want to <b>miss</b> her best friend's birthday party.","uk":"Вона точно не хоче <b>пропустити</b> день народження найкращої подруги.","ru":"Она точно не хочет <b>пропустить</b> день рождения лучшей подруги."},"gram":""},
  {"id":"k14_039","cat":"k14","term":{"de":"vermissen","en":"to miss (someone)","uk":"сумувати (за кимось)","ru":"скучать (по кому-то)"},"short":{"de": "traurig sein, weil jemand nicht da ist, den man mag","en": "to feel sad because someone you like is not there","uk": "сумувати, бо когось, хто тобі подобається, немає поруч","ru": "грустить, потому что кого-то, кто тебе нравится, нет рядом"},"def":{"de":"Sie ruft ihre alte Freundin oft an, <g>damit</g> sie sie nicht so sehr <b>vermisst</b>.","en":"She often calls her old friend <g>so that</g> she doesn't <b>miss</b> her so much.","uk":"Вона часто дзвонить давній подрузі, <g>щоб</g> не так сильно за нею <b>сумувати</b>.","ru":"Она часто звонит старой подруге, <g>чтобы</g> не так сильно по ней <b>скучать</b>."},"gram":"nebensatz_mit_damit"},
  {"id":"k14_040","cat":"k14","term":{"de":"draußen","en":"outside","uk":"надворі, на вулиці","ru":"на улице, снаружи"},"short":{"de": "nicht im Haus, sondern in der frischen Luft","en": "not inside a building, but in the fresh air","uk": "не в приміщенні, а на свіжому повітрі","ru": "не в помещении, а на свежем воздухе"},"def":{"de":"Im Sommer treffen sich die Freunde meistens <b>draußen</b> im Park.","en":"In summer, the friends mostly meet <b>outside</b> in the park.","uk":"Влітку друзі здебільшого зустрічаються <b>надворі</b> в парку.","ru":"Летом друзья обычно встречаются <b>на улице</b> в парке."},"gram":""},
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
  {"id":"k15_021","cat":"k15","term":{"de":"der Sachbearbeiter / die Sachbearbeiterin","en":"caseworker, clerk","uk":"відповідальний працівник / відповідальна працівниця","ru":"ответственный сотрудник / ответственная сотрудница"},"short":{"de": "eine Person, die bei einem Amt für einen bestimmten Fall zuständig ist","en": "a person at an office responsible for a particular case","uk": "людина в установі, яка відповідає за конкретну справу","ru": "человек в учреждении, который отвечает за конкретное дело"},"def":{"de":"Sie fragt, <g><b>wer</b></g> der zuständige <b>Sachbearbeiter</b> für ihren Fall ist.","en":"She asks <g><b>who</b></g> the responsible <b>caseworker</b> for her case is.","uk":"Вона запитує, <g><b>хто</b></g> відповідальний <b>працівник</b> у її справі.","ru":"Она спрашивает, <g><b>кто</b></g> ответственный <b>сотрудник</b> по её делу."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_022","cat":"k15","term":{"de":"der Ausweis","en":"ID card","uk":"посвідчення особи","ru":"удостоверение личности"},"short":{"de": "ein offizielles Dokument, das zeigt, wer man ist","en": "an official document that shows who you are","uk": "офіційний документ, який підтверджує особу","ru": "официальный документ, подтверждающий личность"},"def":{"de":"Er weiß nicht, <g><b>wo</b></g> er seinen verlorenen <b>Ausweis</b> neu beantragen kann.","en":"He doesn't know <g><b>where</b></g> he can apply for a new <b>ID card</b>.","uk":"Він не знає, <g><b>де</b></g> можна подати заяву на нове <b>посвідчення</b>.","ru":"Он не знает, <g><b>где</b></g> можно подать заявление на новое <b>удостоверение</b>."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_023","cat":"k15","term":{"de":"die Gebühr","en":"fee","uk":"збір, плата","ru":"сбор, плата"},"short":{"de": "Geld, das man für eine offizielle Dienstleistung bezahlen muss","en": "money you have to pay for an official service","uk": "гроші, які треба заплатити за офіційну послугу","ru": "деньги, которые нужно заплатить за официальную услугу"},"def":{"de":"Sie fragt, <g><b>wie hoch</b></g> die <b>Gebühr</b> für den neuen Ausweis ist.","en":"She asks <g><b>how high</b></g> the <b>fee</b> for the new ID card is.","uk":"Вона запитує, <g><b>яка</b></g> <b>плата</b> за нове посвідчення.","ru":"Она спрашивает, <g><b>какая</b></g> <b>плата</b> за новое удостоверение."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_024","cat":"k15","term":{"de":"zuständig","en":"responsible (in an official capacity)","uk":"відповідальний (за посадою), компетентний","ru":"ответственный (по должности), компетентный"},"short":{"de": "offiziell für eine Aufgabe oder einen Fall verantwortlich","en": "officially responsible for a task or a case","uk": "офіційно відповідальний за завдання чи справу","ru": "официально ответственный за задачу или дело"},"def":{"de":"Niemand weiß, <g><b>welches</b></g> Amt für diese Frage <b>zuständig</b> ist.","en":"Nobody knows <g><b>which</b></g> office is <b>responsible</b> for this matter.","uk":"Ніхто не знає, <g><b>яка</b></g> установа <b>відповідальна</b> за це питання.","ru":"Никто не знает, <g><b>какое</b></g> учреждение <b>ответственно</b> за этот вопрос."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_025","cat":"k15","term":{"de":"der Schalter","en":"counter, window (service desk)","uk":"віконце, стійка обслуговування","ru":"окошко, стойка обслуживания"},"short":{"de": "der Ort in einem Amt, an dem man mit einem Mitarbeiter spricht","en": "the place in an office where you talk to a staff member","uk": "місце в установі, де спілкуєшся з працівником","ru": "место в учреждении, где общаешься с сотрудником"},"def":{"de":"Er fragt, <g><b>ob</b></g> er ohne Termin direkt zum <b>Schalter</b> gehen kann.","en":"He asks <g><b>whether</b></g> he can go directly to the <b>counter</b> without an appointment.","uk":"Він запитує, <g><b>чи</b></g> можна піти одразу до <b>віконця</b> без запису.","ru":"Он спрашивает, <g><b>можно ли</b></g> пойти сразу к <b>окошку</b> без записи."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_026","cat":"k15","term":{"de":"die Öffnungszeit","en":"opening hours","uk":"години роботи","ru":"часы работы"},"short":{"de": "die Zeit, in der ein Amt oder Geschäft geöffnet ist","en": "the time during which an office or shop is open","uk": "час, коли установа чи магазин відкриті","ru": "время, когда учреждение или магазин открыты"},"def":{"de":"Sie fragt, <g><b>ob</b></g> sich die <b>Öffnungszeiten</b> im Sommer ändern.","en":"She asks <g><b>whether</b></g> the <b>opening hours</b> change in summer.","uk":"Вона запитує, <g><b>чи</b></g> змінюються <b>години роботи</b> влітку.","ru":"Она спрашивает, <g><b>меняются ли</b></g> <b>часы работы</b> летом."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_027","cat":"k15","term":{"de":"die Frist","en":"deadline","uk":"термін, дедлайн","ru":"срок, дедлайн"},"short":{"de": "der letzte Tag, bis zu dem man etwas erledigen muss","en": "the last day by which you must complete something","uk": "останній день, до якого треба щось зробити","ru": "последний день, до которого нужно что-то сделать"},"def":{"de":"Er fragt, <g><b>ob</b></g> man die <b>Frist</b> um ein paar Tage verlängern kann.","en":"He asks <g><b>whether</b></g> the <b>deadline</b> can be extended by a few days.","uk":"Він запитує, <g><b>чи</b></g> можна продовжити <b>термін</b> на кілька днів.","ru":"Он спрашивает, <g><b>можно ли</b></g> продлить <b>срок</b> на несколько дней."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_028","cat":"k15","term":{"de":"die Wartezeit","en":"waiting time","uk":"час очікування","ru":"время ожидания"},"short":{"de": "die Zeit, die man warten muss, bevor man an der Reihe ist","en": "the time you have to wait before it's your turn","uk": "час, який треба чекати, поки надійде твоя черга","ru": "время, которое нужно ждать, пока подойдёт твоя очередь"},"def":{"de":"Sie fragt, <g><b>ob</b></g> die <b>Wartezeit</b> heute besonders lang ist.","en":"She asks <g><b>whether</b></g> the <b>waiting time</b> is especially long today.","uk":"Вона запитує, <g><b>чи</b></g> сьогодні особливо довгий <b>час очікування</b>.","ru":"Она спрашивает, <g><b>особенно ли</b></g> долгое сегодня <b>время ожидания</b>."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_029","cat":"k15","term":{"de":"die Geburtsurkunde","en":"birth certificate","uk":"свідоцтво про народження","ru":"свидетельство о рождении"},"short":{"de": "ein offizielles Dokument, das das Geburtsdatum und den Geburtsort einer Person bestätigt","en": "an official document confirming a person's date and place of birth","uk": "офіційний документ, що підтверджує дату й місце народження людини","ru": "официальный документ, подтверждающий дату и место рождения человека"},"def":{"de":"Er weiß nicht, <g><b>wo</b></g> er eine Kopie seiner <b>Geburtsurkunde</b> bekommt.","en":"He doesn't know <g><b>where</b></g> he can get a copy of his <b>birth certificate</b>.","uk":"Він не знає, <g><b>де</b></g> отримати копію свого <b>свідоцтва про народження</b>.","ru":"Он не знает, <g><b>где</b></g> получить копию своего <b>свидетельства о рождении</b>."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_030","cat":"k15","term":{"de":"das Standesamt","en":"civil registry office","uk":"РАЦС (відділ реєстрації актів цивільного стану)","ru":"ЗАГС"},"short":{"de": "ein Amt, das Geburten, Ehen und Todesfälle registriert","en": "an office that registers births, marriages and deaths","uk": "установа, яка реєструє народження, шлюби та смерті","ru": "учреждение, которое регистрирует рождения, браки и смерти"},"def":{"de":"Sie fragt, <g><b>welches</b></g> <b>Standesamt</b> für ihre Hochzeit zuständig ist.","en":"She asks <g><b>which</b></g> <b>civil registry office</b> is responsible for her wedding.","uk":"Вона запитує, <g><b>яке</b></g> <b>РАЦС</b> відповідає за її весілля.","ru":"Она спрашивает, <g><b>какой</b></g> <b>ЗАГС</b> отвечает за её свадьбу."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_031","cat":"k15","term":{"de":"die Vollmacht","en":"power of attorney","uk":"довіреність","ru":"доверенность"},"short":{"de": "ein Dokument, mit dem man einer anderen Person erlaubt, für einen zu handeln","en": "a document that allows another person to act on your behalf","uk": "документ, який дозволяє іншій людині діяти від твого імені","ru": "документ, который позволяет другому человеку действовать от твоего имени"},"def":{"de":"Er fragt, <g><b>wie</b></g> er eine <b>Vollmacht</b> für seine Mutter schreiben kann.","en":"He asks <g><b>how</b></g> he can write a <b>power of attorney</b> for his mother.","uk":"Він запитує, <g><b>як</b></g> написати <b>довіреність</b> для своєї матері.","ru":"Он спрашивает, <g><b>как</b></g> написать <b>доверенность</b> для своей матери."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_032","cat":"k15","term":{"de":"unterschreiben","en":"to sign","uk":"підписувати","ru":"подписывать"},"short":{"de": "seinen Namen auf ein Dokument schreiben","en": "to write your name on a document","uk": "написати своє імʼя на документі","ru": "написать своё имя на документе"},"def":{"de":"Sie fragt, <g><b>wo</b></g> genau sie das Formular <b>unterschreiben</b> muss.","en":"She asks <g><b>where</b></g> exactly she has to <b>sign</b> the form.","uk":"Вона запитує, <g><b>де</b></g> саме їй потрібно <b>підписати</b> бланк.","ru":"Она спрашивает, <g><b>где</b></g> именно ей нужно <b>подписать</b> бланк."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_033","cat":"k15","term":{"de":"einreichen","en":"to submit","uk":"подавати (документи)","ru":"подавать (документы)"},"short":{"de": "Dokumente offiziell bei einem Amt abgeben","en": "to officially hand in documents at an office","uk": "офіційно здавати документи в установу","ru": "официально сдавать документы в учреждение"},"def":{"de":"Er weiß nicht, <g><b>bis wann</b></g> er die Unterlagen <b>einreichen</b> muss.","en":"He doesn't know <g><b>by when</b></g> he has to <b>submit</b> the documents.","uk":"Він не знає, <g><b>до якого часу</b></g> потрібно <b>подати</b> документи.","ru":"Он не знает, <g><b>до какого времени</b></g> нужно <b>подать</b> документы."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_034","cat":"k15","term":{"de":"der Stempel","en":"stamp","uk":"печатка, штамп","ru":"печать, штамп"},"short":{"de": "ein Werkzeug, mit dem man ein offizielles Zeichen auf ein Dokument druckt","en": "a tool used to print an official mark on a document","uk": "інструмент, яким ставлять офіційний знак на документ","ru": "инструмент, которым ставят официальный знак на документ"},"def":{"de":"Er fragt, <g><b>ob</b></g> das Dokument ohne <b>Stempel</b> überhaupt gültig ist.","en":"He asks <g><b>whether</b></g> the document is even valid without a <b>stamp</b>.","uk":"Він запитує, <g><b>чи</b></g> дійсний документ узагалі без <b>печатки</b>.","ru":"Он спрашивает, <g><b>действителен ли</b></g> документ вообще без <b>печати</b>."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_035","cat":"k15","term":{"de":"die Kopie","en":"copy","uk":"копія","ru":"копия"},"short":{"de": "eine genaue Wiederholung eines Dokuments","en": "an exact reproduction of a document","uk": "точне відтворення документа","ru": "точное воспроизведение документа"},"def":{"de":"Sie fragt, <g><b>wie viele</b></g> <b>Kopien</b> sie von dem Ausweis mitbringen muss.","en":"She asks <g><b>how many</b></g> <b>copies</b> of the ID card she needs to bring.","uk":"Вона запитує, <g><b>скільки</b></g> <b>копій</b> посвідчення їй потрібно принести.","ru":"Она спрашивает, <g><b>сколько</b></g> <b>копий</b> удостоверения ей нужно принести."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_036","cat":"k15","term":{"de":"beglaubigen","en":"to certify, to notarize","uk":"засвідчувати (документ)","ru":"заверять (документ)"},"short":{"de": "offiziell bestätigen, dass eine Kopie eines Dokuments echt ist","en": "to officially confirm that a copy of a document is genuine","uk": "офіційно підтвердити, що копія документа справжня","ru": "официально подтвердить, что копия документа настоящая"},"def":{"de":"Er fragt, <g><b>wo</b></g> er seine Dokumente <b>beglaubigen</b> lassen kann.","en":"He asks <g><b>where</b></g> he can get his documents <b>certified</b>.","uk":"Він запитує, <g><b>де</b></g> можна <b>засвідчити</b> свої документи.","ru":"Он спрашивает, <g><b>где</b></g> можно <b>заверить</b> свои документы."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_037","cat":"k15","term":{"de":"abholen","en":"to pick up, to collect","uk":"забирати (щось звідкись)","ru":"забирать (что-то откуда-то)"},"short":{"de": "irgendwo hingehen, um etwas mitzunehmen","en": "to go somewhere to take something with you","uk": "піти кудись, щоб забрати щось","ru": "пойти куда-то, чтобы забрать что-то"},"def":{"de":"Sie fragt, <g><b>ob</b></g> sie den neuen Ausweis persönlich <b>abholen</b> muss.","en":"She asks <g><b>whether</b></g> she has to <b>pick up</b> the new ID card in person.","uk":"Вона запитує, <g><b>чи</b></g> треба <b>забрати</b> нове посвідчення особисто.","ru":"Она спрашивает, <g><b>нужно ли</b></g> <b>забрать</b> новое удостоверение лично."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_038","cat":"k15","term":{"de":"das Einwohnermeldeamt","en":"residents' registration office","uk":"відділ реєстрації мешканців","ru":"отдел регистрации жителей"},"short":{"de": "das Amt, bei dem man seine Adresse registrieren muss","en": "the office where you must register your address","uk": "установа, де реєструють адресу проживання","ru": "учреждение, где регистрируют адрес проживания"},"def":{"de":"Er fragt, <g><b>ob</b></g> das <b>Einwohnermeldeamt</b> auch samstags geöffnet hat.","en":"He asks <g><b>whether</b></g> the <b>residents' registration office</b> is also open on Saturdays.","uk":"Він запитує, <g><b>чи</b></g> <b>відділ реєстрації мешканців</b> працює також по суботах.","ru":"Он спрашивает, <g><b>работает ли</b></g> <b>отдел регистрации жителей</b> также по субботам."},"gram":"indirekter_fragesatz_ob"},
  {"id":"k15_039","cat":"k15","term":{"de":"die Meldebescheinigung","en":"certificate of registration","uk":"довідка про реєстрацію місця проживання","ru":"справка о регистрации по месту жительства"},"short":{"de": "ein Dokument, das bestätigt, wo man offiziell wohnt","en": "a document that confirms where you are officially registered as living","uk": "документ, що підтверджує, де ти офіційно зареєстрований","ru": "документ, подтверждающий, где ты официально зарегистрирован"},"def":{"de":"Sie fragt, <g><b>wie lange</b></g> die <b>Meldebescheinigung</b> gültig ist.","en":"She asks <g><b>how long</b></g> the <b>certificate of registration</b> is valid.","uk":"Вона запитує, <g><b>як довго</b></g> дійсна <b>довідка про реєстрацію</b>.","ru":"Она спрашивает, <g><b>как долго</b></g> действительна <b>справка о регистрации</b>."},"gram":"indirekter_fragesatz_fragewort"},
  {"id":"k15_040","cat":"k15","term":{"de":"das Jobcenter","en":"job center","uk":"центр зайнятості","ru":"центр занятости"},"short":{"de": "ein Amt, das Menschen bei der Arbeitssuche und mit Geld unterstützt","en": "an office that helps people find work and provides financial support","uk": "установа, яка допомагає з пошуком роботи та фінансовою підтримкою","ru": "учреждение, которое помогает с поиском работы и финансовой поддержкой"},"def":{"de":"Er fragt, <g><b>ob</b></g> das <b>Jobcenter</b> auch bei der Wohnungssuche hilft.","en":"He asks <g><b>whether</b></g> the <b>job center</b> also helps with finding housing.","uk":"Він запитує, <g><b>чи</b></g> <b>центр зайнятості</b> також допомагає з пошуком житла.","ru":"Он спрашивает, <g><b>помогает ли</b></g> <b>центр занятости</b> также с поиском жилья."},"gram":"indirekter_fragesatz_ob"},
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
