var PRIMARY_LANG = "de"; // головна мова контенту: term/ short/ def спочатку створюються тут, en/ uk/ ru — точний переклад цієї версії

var AUDIO_CONFIG = {
  "de": ["100"], //аудіо генерується зі швидкістю 100% "100","080"
//  "en": ["100"],
//  "uk": ["100"]
//  "ru": ["100"]
};

// ════════════════════════════════════════════════════════════════
//  GRAMMAR — список граматичних конструкцій рівня B1.1 (Die neue Linie 1, Kapitel 1–8)
// ════════════════════════════════════════════════════════════════

var GRAMMAR = [
  {
    "id": "hoefliche_bitten_konjunktiv_b1",
    "title": {"de": "Höfliche Bitten (Konjunktiv II): Könnten Sie …?", "en": "Polite requests (Subjunctive II): Could you …?", "uk": "Ввічливі прохання (Кон'юнктив II): Могли б Ви …?", "ru": "Вежливые просьбы (Конъюнктив II): Могли бы Вы …?"},
    "explanation": {
      "de": "Mit <g>könnten</g> oder <g>würden</g> formulieren wir sehr höfliche Fragen oder Bitten. Das Hauptverb steht im Infinitiv am Ende des Satzes.<br>Beispiel: <g>Könnten</g> Sie mir bitte helfen? <g>Würden</g> Sie das Fenster schließen?",
      "en": "We use <g>könnten</g> or <g>würden</g> to form very polite questions or requests. The main verb stays in the infinitive form at the end of the sentence.<br>Example: <g>Könnten</g> Sie mir bitte helfen? <g>Würden</g> Sie das Fenster schließen?",
      "uk": "За допомогою <g>könnten</g> або <g>würden</g> ми формулюємо дуже ввічливі прохання чи запитання. Основне дієслово стоїть в інфінітиві в самому кінці речення.<br>Приклад: <g>Könnten</g> Sie mir bitte helfen? <g>Würden</g> Sie das Fenster schließen?",
      "ru": "С помощью <g>könnten</g> или <g>würden</g> мы формулируем очень вежливые просьбы или вопросы. Основной глагол стоит в инфинитиве в самом конце предложения.<br>Пример: <g>Könnten</g> Sie mir bitte helfen? <g>Würden</g> Sie das Fenster schließen?"
    }
  },
  {
    "id": "infinitiv_mit_zu",
    "title": {"de": "Infinitiv mit zu", "en": "Infinitive with zu", "uk": "Інфінітив з zu", "ru": "Инфинитив с zu"},
    "explanation": {
      "de": "Wenn zwei Verben im Satz stehen, nutzen wir oft die Struktur <g>zu</g> + Infinitiv am Ende. Das passiert nach bestimmten Ausdrücken wie 'Es ist wichtig...', 'Ich habe Lust...' oder 'Ich versuche...'. Bei trennbaren Verben steht das 'zu' in der Mitte.<br>Beispiel: Ich versuche, Deutsch <g>zu lernen</g>. Es ist schön, <g>einzukaufen</g>.",
      "en": "When there are two verbs in a sentence, we often use <g>zu</g> + infinitive at the end. This happens after phrases like 'Es ist wichtig...', 'Ich habe Lust...' or 'Ich versuche...'. With separable verbs, 'zu' goes between the prefix and the root.<br>Example: Ich versuche, Deutsch <g>zu lernen</g>. Es ist schön, <g>einzukaufen</g>.",
      "uk": "Коли в реченні є два дієслова, ми часто використовуємо конструкцію <g>zu</g> + інфінітив у кінці. Це відбувається після зворотів на кшталт 'Es ist wichtig...', 'Ich habe Lust...' або 'Ich versuche...'. У відокремлюваних дієсловах 'zu' стає між префіксом та основою.<br>Приклад: Ich versuche, Deutsch <g>zu lernen</g>. Es ist schön, <g>einzukaufen</g>.",
      "ru": "Когда в предложении два глагола, мы часто используем конструкцию <g>zu</g> + инфинитив в конце. Это происходит после выражений вроде 'Es ist wichtig...', 'Ich habe Lust...' или 'Ich versuche...'. У отделяемых глаголов 'zu' встает между приставкой и основой.<br>Пример: Ich versuche, Deutsch <g>zu lernen</g>. Es ist schön, <g>einzukaufen</g>."
    }
  },
  {
    "id": "sowohl_als_auch_weder_noch",
    "title": {"de": "sowohl … als auch  /  weder … noch", "en": "both … and  /  neither … nor", "uk": "як … так і  /  ні … ні", "ru": "как … так и  /  ни … ни"},
    "explanation": {
      "de": "Das sind zweiteilige Konnektoren. <g>sowohl ... als auch</g> bedeutet Plus + Plus (beides ist wahr). <g>weder ... noch</g> bedeutet Minus + Minus (keines von beiden ist wahr).<br>Beispiel: Ich spreche <g>sowohl</g> Englisch <g>als auch</g> Deutsch. Er trinkt <g>weder</g> Kaffee <g>noch</g> Tee.",
      "en": "These are two-part connectors. <g>sowohl ... als auch</g> means Plus + Plus (both options apply). <g>weder ... noch</g> means Minus + Minus (neither option applies).<br>Example: Ich spreche <g>sowohl</g> Englisch <g>als auch</g> Deutsch. Er trinkt <g>weder</g> Kaffee <g>noch</g> Tee.",
      "uk": "Це подвійні сполучники. <g>sowohl ... als auch</g> означає Плюс + Плюс (і те, і інше). <g>weder ... noch</g> означає Мінус + Мінус (ні те, ні інше).<br>Приклад: Ich spreche <g>sowohl</g> Englisch <g>als auch</g> Deutsch. Er trinkt <g>weder</g> Kaffee <g>noch</g> Tee.",
      "ru": "Это двойные союзы. <g>sowohl ... als auch</g> означает Плюс + Плюс (и то, и другое). <g>weder ... noch</g> означает Минус + Минус (ни то, ни другое).<br>Пример: Ich spreche <g>sowohl</g> Englisch <g>als auch</g> Deutsch. Er trinkt <g>weder</g> Kaffee <g>noch</g> Tee."
    }
  },
  {
    "id": "modalverben_wdh_b1",
    "title": {"de": "Wiederholung: Modalverben (Regeln formulieren)", "en": "Review: modal verbs (stating rules)", "uk": "Повторення: модальні дієслова (формулювання правил)", "ru": "Повторение: модальные глаголы (формулирование правил)"},
    "explanation": {
      "de": "Wiederholung: Wir nutzen <g>müssen</g> für Pflichten, <g>dürfen</g> für Erlaubnisse oder Verbote (mit nicht) und <g>sollen</g> für Aufgaben oder Ratschläge. Das Modalverb steht auf Position 2, das zweite Verb im Infinitiv am Ende.<br>Beispiel: Hier <g>darf</g> man nicht rauchen. Du <g>musst</g> leise sein.",
      "en": "Review: We use <g>müssen</g> for obligations, <g>dürfen</g> for permission or prohibitions (with nicht), and <g>sollen</g> for duties or advice. The modal verb takes the 2nd position, and the main verb goes to the end in the infinitive.<br>Example: Hier <g>darf</g> man nicht rauchen. Du <g>musst</g> leise sein.",
      "uk": "Повторення: ми використовуємо <g>müssen</g> для обов'язків, <g>dürfen</g> для дозволу або заборони (із запереченням nicht) та <g>sollen</g> для порад чи настанов. Модальне дієслово стоїть на 2-му місці, інфінітив — в кінці.<br>Приклад: Hier <g>darf</g> man nicht rauchen. Du <g>musst</g> leise sein.",
      "ru": "Повторение: мы используем <g>müssen</g> для обязанностей, <g>dürfen</g> для разрешения или запрета (с отрицанием nicht) и <g>sollen</g> для советов или поручений. Модальный глагол стоит на 2-м месте, инфинитив — в конце.<br>Пример: Hier <g>darf</g> man nicht rauchen. Du <g>musst</g> leise sein."
    }
  },
  {
    "id": "wechselpraepositionen_wdh_b1",
    "title": {"de": "Wiederholung: Wechselpräpositionen", "en": "Review: two-way prepositions", "uk": "Повторення: прийменники подвійного керування", "ru": "Повторение: предлоги двойного управления"},
    "explanation": {
      "de": "Wiederholung: Präpositionen wie <g>in, auf, an, neben</g> ändern ihren Fall. Wenn wir eine Bewegung / Richtung haben (Wohin?), nutzen wir <g>Akkusativ</g>. Wenn wir einen festen Ort haben (Wo?), nutzen wir <g>Dativ</g>.<br>Beispiel: Ich lege das Buch <g>auf den</g> Tisch (Akk.). Das Buch liegt <g>auf dem</g> Tisch (Dat.).",
      "en": "Review: Prepositions like <g>in, auf, an, neben</g> change their case. If there is movement / direction (Where to?), we use the <g>Accusative</g>. If there is a fixed location (Where?), we use the <g>Dative</g>.<br>Example: Ich lege das Buch <g>auf den</g> Tisch (Acc.). Das Buch liegt <g>auf dem</g> Tisch (Dat.).",
      "uk": "Повторення: прийменники типу <g>in, auf, an, neben</g> змінюють відмінок. Якщо є рух  /  напрямок (Куди?), використовуємо <g>Знахідний</g>. Якщо це фіксоване місце (Де?), використовуємо <g>Давальний</g>.<br>Приклад: Ich lege das Buch <g>auf den</g> Tisch (Знахідний). Das Buch liegt <g>auf dem</g> Tisch (Давальний).",
      "ru": "Повторение: предлоги типа <g>in, auf, an, neben</g> меняют падеж. Если есть движение  /  направление (Куда?), используем <g>Винительный</g>. Если это фиксированное место (Где?), используем <g>Дательный</g>.<br>Пример: Ich lege das Buch <g>auf den</g> Tisch (Винительный). Das Buch liegt <g>auf dem</g> Tisch (Дательный)."
    }
  },
  {
    "id": "reflexivpronomen_akkusativ_wdh_b1",
    "title": {"de": "Wiederholung: Reflexivpronomen im Akkusativ", "en": "Review: reflexive pronouns (accusative)", "uk": "Повторення: зворотні займенники (знахідний)", "ru": "Повторение: возвратные местоимения (винительный)"},
    "explanation": {
      "de": "Wiederholung: Reflexive Verben nutzen Reflexivpronomen im Akkusativ (<g>mich, dich, sich, uns, euch, sich</g>). Das Pronomen steht direkt nach dem konjugierten Verb.<br>Beispiel: Ich freue <g>mich</g> auf den Urlaub. Wir treffen <g>uns</g> morgen.",
      "en": "Review: Reflexive verbs use reflexive pronouns in the accusative case (<g>mich, dich, sich, uns, euch, sich</g>). The pronoun usually comes right after the conjugated verb.<br>Example: Ich freue <g>mich</g> auf den Urlaub. Wir treffen <g>uns</g> morgen.",
      "uk": "Повторення: зворотні дієслова використовують зворотні займенники у знахідному відмінку (<g>mich, dich, sich, uns, euch, sich</g>). Займенник зазвичай стоїть одразу після змінюваного дієслова.<br>Приклад: Ich freue <g>mich</g> auf den Urlaub. Wir treffen <g>uns</g> morgen.",
      "ru": "Повторение: возвратные глаголы используют возвратные местоимения в винительном падеже (<g>mich, dich, sich, uns, euch, sich</g>). Местоимение обычно стоит сразу после спрягаемого глагола.<br>Пример: Ich freue <g>mich</g> auf den Urlaub. Wir treffen <g>uns</g> morgen."
    }
  },
  {
    "id": "relativsatz_nominativ_sondern",
    "title": {"de": "Relativpronomen im Nominativ; sondern", "en": "Relative pronoun (nominative); sondern", "uk": "Займенник у називному відмінку; sondern", "ru": "Местоимение в именительном падеже; sondern"},
    "explanation": {
      "de": "Ein Relativpronomen im Nominativ (<g>der, die, das, die</g>) verbindet einen Nebensatz und zeigt das Subjekt. Der Konnektor <g>sondern</g> korrigiert eine Negation und bedeutet 'aber stattdessen'.<br>Beispiel: Das ist der Mann, <g>der</g> das Auto repariert. Ich kaufe nicht Saft, <g>sondern</g> Milch.",
      "en": "A relative pronoun in the nominative (<g>der, die, das, die</g>) introduces a relative clause as its subject. The connector <g>sondern</g> (but rather) is used after a negative clause to correct a statement.<br>Example: Das ist der Mann, <g>der</g> das Auto repariert. Ich kaufe nicht Saft, <g>sondern</g> Milch.",
      "uk": "Відносний займенник у називному відмінку (<g>der, die, das, die</g>) є підметом у підрядному реченні. Сполучник <g>sondern</g> (а, але навпаки) використовується після заперечення для виправлення інформації.<br>Приклад: Das ist der Mann, <g>der</g> das Auto repariert. Ich kaufe nicht Saft, <g>sondern</g> Milch.",
      "ru": "Относительное местоимение в именительном падеже (<g>der, die, das, die</g>) является подлежащим в придаточном предложении. Союз <g>sondern</g> (а, но наоборот) используется после отрицания для исправления информации.<br>Пример: Das ist der Mann, <g>der</g> das Auto repariert. Ich kaufe nicht Saft, <g>sondern</g> Milch."
    }
  },
  {
    "id": "relativsatz_akkusativ_b1",
    "title": {"de": "Relativpronomen im Akkusativ", "en": "Relative pronoun (accusative)", "uk": "Займенник у знахідному відмінку", "ru": "Местоимение в винительном падеже"},
    "explanation": {
      "de": "Wenn das Nomen im Nebensatz das Akkusativ-Objekt ist, ändert sich das Relativpronomen bei maskulinen Nomen zu <g>den</g>. Feminin (<g>die</g>), neutral (<g>das</g>) und Plural (<g>die</g>) bleiben gleich. Das Verb steht ganz am Ende.<br>Beispiel: Das ist der Film, <g>den</g> ich gestern gesehen habe.",
      "en": "If the noun in the relative clause is the accusative object, the masculine relative pronoun changes to <g>den</g>. Feminine (<g>die</g>), neutral (<g>das</g>), and plural (<g>die</g>) remain the same. The verb goes to the very end.<br>Example: Das ist der Film, <g>den</g> ich gestern gesehen habe.",
      "uk": "Якщо іменник у підрядному реченні є додатком у знахідному відмінку, відносний займенник чоловічого роду змінюється на <g>den</g>. Жіночий (<g>die</g>), середній (<g>das</g>) та множина (<g>die</g>) не змінюються. Дієслово стоїть у самому кінці.<br>Приклад: Das ist der Film, <g>den</g> ich gestern gesehen habe.",
      "ru": "Если существительное в придаточном предложении является дополнением в винительном падеже, относительное местоимение мужского рода меняется на <g>den</g>. Женский (<g>die</g>), средний (<g>das</g>) и множественное число (<g>die</g>) не меняются. Глагол стоит в самом конце.<br>Пример: Das ist der Film, <g>den</g> ich gestern gesehen habe."
    }
  },
  {
    "id": "komposita_nomen_nomen",
    "title": {"de": "Wortbildung: Komposita (Nomen + Nomen)", "en": "Word formation: compounds (noun + noun)", "uk": "Творення слів: композити (іменник + іменник)", "ru": "Словообразование: композиты (существительное + существительное)"},
    "explanation": {
      "de": "Im Deutschen kann man zwei Nomen verbinden, um ein neues Wort zu bauen. Das letzte Nomen bestimmt das Geschlecht (den Artikel) des neuen Wortes.<br>Beispiel: <g>die Tischtennisplatte</g> (der Tisch + das Tennis + die Platte -> die).",
      "en": "In German, you can combine two or more nouns to create a new word. The very last noun determines the gender (article) of the entire new word.<br>Example: <g>die Tischtennisplatte</g> (der Tisch + das Tennis + die Platte -> die).",
      "uk": "В німецькій мові можна з'єднувати два або більше іменників, щоб створити нове слово. Останній іменник визначає рід (артикль) усього нового слова.<br>Приклад: <g>die Tischtennisplatte</g> (der Tisch + das Tennis + die Platte -> закінчується на die Platte, тому артикль усього слова — die).",
      "ru": "В немецком языке можно соединять два или более существительных, чтобы создать новое слово. Последнее существительное определяет род (артикль) всего нового слова.<br>Пример: <g>die Tischtennisplatte</g> (der Tisch + das Tennis + die Platte -> заканчивается на die Platte, поэтому артикль всего слова — die)."
    }
  },
  {
    "id": "modalverben_vermutung",
    "title": {"de": "Modalverben für Vermutungen (dürfte, müsste, könnte)", "en": "Modal verbs expressing assumption", "uk": "Модальні дієслова для припущень", "ru": "Модальные глаголы для предположений"},
    "explanation": {
      "de": "Wir nutzen Modalverben im Konjunktiv II, um zu zeigen, wie sicher eine Vermutung ist: <g>müsste</g> (sehr sicher), <g>dürfte</g> (wahrscheinlich), <g>könnte</g> (vielleicht möglich).<br>Beispiel: Es <g>müsste</g> schon 18 Uhr sein (Ich bin fast sicher).",
      "en": "We use modal verbs in Subjunctive II to express how sure we are about an assumption: <g>müsste</g> (very sure), <g>dürfte</g> (probable  /  likely), <g>könnte</g> (maybe possible).<br>Example: Es <g>müsste</g> schon 18 Uhr sein (I'm almost certain).",
      "uk": "Ми використовуємо модальні дієслова у формі Кон'юнктива ІІ, щоб показати ступінь упевненості в припущенні: <g>müsste</g> (майже впевнений), <g>dürfte</g> (імовірно), <g>könnte</g> (можливо).<br>Приклад: Es <g>müsste</g> schon 18 Uhr sein (Мабуть, уже 18:00; я майже впевнений).",
      "ru": "Мы используем модальные глаголы в форме Конъюнктива II, чтобы показать степень уверенности в предположении: <g>müsste</g> (почти уверен), <g>dürfte</g> (вероятно), <g>könnte</g> (возможно).<br>Пример: Es <g>müsste</g> schon 18 Uhr sein (Должно быть, уже 18:00; я почти уверен)."
    }
  },
  {
    "id": "genitiv",
    "title": {"de": "Genitiv", "en": "Genitive case", "uk": "Родовий відмінок", "ru": "Родительный падеж"},
    "explanation": {
      "de": "Der Genitiv zeigt Besitz oder Zugehörigkeit (Frage: Wessen?). Maskuline und neutrale Nomen bekommen die Endung <g>-s</g> oder <g>-es</g> und den Artikel <g>des</g>. Feminine und Plural-Nomen bekommen den Artikel <g>der</g>.<br>Beispiel: Das Auto <g>des Vaters</g>. Die Tasche <g>der Frau</g>.",
      "en": "The genitive case shows possession or belonging (Question: Whose?). Masculine and neutral nouns take the article <g>des</g> and add <g>-s</g> or <g>-es</g> to the noun. Feminine and plural nouns take the article <g>der</g>.<br>Example: Das Auto <g>des Vaters</g>. Die Tasche <g>der Frau</g>.",
      "uk": "Родовий відмінок (Genitiv) виражає приналежність або володіння (Питання: Чий?). Іменники чоловічого та середнього роду отримують артикль <g>des</g> та закінчення <g>-s</g>  /  <g>-es</g> у самому слові. Жіночий рід та множина отримують артикль <g>der</g>.<br>Приклад: Das Auto <g>des Vaters</g> (Машина батька). Die Tasche <g>der Frau</g> (Сумка жінки).",
      "ru": "Родительный падеж (Genitiv) выражает принадлежность или владение (Вопрос: Чей?). Существительные мужского и среднего рода получают артикль <g>des</g> и окончание <g>-s</g>  /  <g>-es</g> у самого слова. Женский род и множественное число получают артикль <g>der</g>.<br>Пример: Das Auto <g>des Vaters</g> (Машина отца). Die Tasche <g>der Frau</g> (Сумка женщины)."
    }
  },
  {
    "id": "nebensatz_mit_obwohl",
    "title": {"de": "Nebensatz mit obwohl", "en": "Subordinate clause with obwohl (although)", "uk": "Підрядне речення з obwohl (хоча)", "ru": "Придаточное предложение с obwohl (хотя)"},
    "explanation": {
      "de": "Der Konnektor <g>obwohl</g> zeigt einen Gegengrund (einen Widerspruch). Es ist ein Nebensatz, das konjugierte Verb steht also ganz am Ende des Satzes.<br>Beispiel: Ich gehe spazieren, <g>obwohl</g> es <g>regnet</g>.",
      "en": "The connector <g>obwohl</g> introduces a concession (although  /  even though). It creates a subordinate clause, meaning the conjugated verb moves to the very end.<br>Example: Ich gehe spazieren, <g>obwohl</g> es <g>regnet</g>.",
      "uk": "Сполучник <g>obwohl</g> вводить підрядне речення допусту (хоча). Оскільки це підрядне речення, змінюване дієслово ставиться в самому кінці.<br>Приклад: Ich gehe spazieren, <g>obwohl</g> es <g>regnet</g> (Я йду гуляти, хоча йде дощ).",
      "ru": "Союз <g>obwohl</g> вводит придаточное уступительное предложение (хотя). Так как это придаточное предложение, спрягаемый глагол ставится в самый конец.<br>Пример: Ich gehe spazieren, <g>obwohl</g> es <g>regnet</g> (Я иду гулять, хотя идет дождь)."
    }
  },
  {
    "id": "konnektoren_wdh_b1",
    "title": {"de": "Wiederholung: Konnektoren", "en": "Review: connectors", "uk": "Повторення: конектори", "ru": "Повтонение: коннекторы"},
    "explanation": {
      "de": "Wiederholung von Konnektoren und ihrer Position: <g>weil, dass, wenn, obwohl</g> schicken das Verb ans Ende. <g>aber, denn, oder, und</g> stehen auf Position Null. <g>deshalb, trotzdem</g> stehen auf Position 1 (Verb folgt direkt).",
      "en": "Review of connectors and word order: <g>weil, dass, wenn, obwohl</g> send the verb to the end. <g>aber, denn, oder, und</g> take position zero. <g>deshalb, trotzdem</g> take position 1 (followed immediately by the verb).",
      "uk": "Повторення сполучників та їхнього впливу на порядок слів: <g>weil, dass, wenn, obwohl</g> відправляють дієслово в кінець. Сполучники <g>aber, denn, oder, und</g> займають нульову позицію. А слова <g>deshalb, trotzdem</g> займають 1-шу позицію (одразу після них йде дієслово).",
      "ru": "Повторение союзов и их влияния на порядок слов: <g>weil, dass, wenn, obwohl</g> отправляют глагол в конец. Союзы <g>aber, denn, oder, und</g> занимают нулевую позицию. А слова <g>deshalb, trotzdem</g> занимают 1-ю позицию (сразу после них идет глагол)."
    }
  },
  {
    "id": "komposita_verb_nomen",
    "title": {"de": "Wortbildung: Komposita (Verb + Nomen)", "en": "Word formation: compounds (verb + noun)", "uk": "Творення слів: композити (дієслово + іменник)", "ru": "Словообразование: композиты (глагол + существительное)"},
    "explanation": {
      "de": "Man kann ein Verb (ohne die Endung -en) mit einem Nomen verbinden. Das Nomen am Ende gibt dem Wort den Artikel.<br>Beispiel: <g>das Wartezimmer</g> (warten + das Zimmer), <g>die Waschmaschine</g> (waschen + die Maschine).",
      "en": "You can combine a verb stem (verb without the -en ending) with a noun. The final noun determines the word's article.<br>Example: <g>das Wartezimmer</g> (warten + das Zimmer), <g>die Waschmaschine</g> (waschen + die Maschine).",
      "uk": "Можна з'єднати основу дієслова (дієслово без закінчення -en) з іменником. Іменник у кінці визначає артикль усього слова.<br>Приклад: <g>das Wartezimmer</g> (warten + das Zimmer = приймальня), <g>die Waschmaschine</g> (waschen + die Maschine = пральна машина).",
      "ru": "Можно соединить основу глагола (глагол без окончания -en) с существительным. Существительное в конце определяет артикль всего слова.<br>Пример: <g>das Wartezimmer</g> (warten + das Zimmer = приемная), <g>die Waschmaschine</g> (waschen + die Maschine = стиральная машина)."
    }
  },
  {
    "id": "praeteritum_wdh_b1",
    "title": {"de": "Wiederholung: Präteritum", "en": "Review: simple past", "uk": "Повторення: претерит", "ru": "Повторение: претерит"},
    "explanation": {
      "de": "Wiederholung der einfachen Vergangenheitsform, die man meistens beim Schreiben nutzt. Regelmäßige Verben bekommen ein <g>-te-</g> (ich machte), unregelmäßige Verben verändern ihren Stammvokal (ich ging, ich schrieb).",
      "en": "Review of the simple past tense, mostly used in written German. Regular verbs add <g>-te-</g> (ich machte), while irregular verbs change their stem vowel (ich ging, ich schrieb).",
      "uk": "Повторення простої форми минулого часу (Präteritum), яка частіше використовується на письмі. Регулярні дієслова отримують суфікс <g>-te-</g> (ich machte), а нерегулярні змінюють кореневу голосну (ich ging, ich schrieb).",
      "ru": "Повторение простой формы прошедшего времени (Präteritum), которая чаще используется на письме. Регулярные глаголы получают суффикс <g>-te-</g> (ich machte), а нерегулярные меняют корневую гласную (ich ging, ich schrieb)."
    }
  },
  {
    "id": "deshalb_deswegen_trotzdem",
    "title": {"de": "deshalb  /  deswegen  /  trotzdem (therefore  /  nevertheless)", "en": "deshalb  /  deswegen  /  trotzdem (therefore  /  nevertheless)", "uk": "deshalb  /  deswegen  /  trotzdem (тому  /  незважаючи на це)", "ru": "deshalb  /  deswegen  /  trotzdem (поэтому  /  несмотря на это)"},
    "explanation": {
      "de": "<g>Deshalb</g> und <g>deswegen</g> zeigen eine logische Folge (Grund -> Folge). <g>Trotzdem</g> zeigt eine unerwartete Folge (Gegengrund -> Zustand). Alle drei stehen auf Position 1, danach kommt sofort das konjugierte Verb.<br>Beispiel: Es regnet, <g>trotzdem gehe</g> ich raus. Es regnet, <g>deshalb bleibe</g> ich hier.",
      "en": "<g>Deshalb</g> and <g>deswegen</g> show a logical consequence (cause -> effect). <g>Trotzdem</g> shows an unexpected consequence (concession -> effect). All three occupy position 1, immediately followed by the verb.<br>Example: Es regnet, <g>trotzdem gehe</g> ich raus. Es regnet, <g>deshalb bleibe</g> ich hier.",
      "uk": "Слова <g>deshalb</g> та <g>deswegen</g> означають 'тому' і показують логічний наслідок. Слово <g>trotzdem</g> означає 'попри це  /  все одно' та виражає неочікуваний результат. Усі три слова займають 1-шу позицію, після них одразу йде змінюване дієслово.<br>Приклад: Es regnet, <g>trotzdem gehe</g> ich raus. Es regnet, <g>deshalb bleibe</g> ich hier.",
      "ru": "Слова <g>deshalb</g> и <g>deswegen</g> означают 'поэтому' и показывают логическое следствие. Слово <g>trotzdem</g> означает 'несмотря на это  /  все равно' и выражает неожиданный результат. Все три слова занимают 1-ю позицию, после них сразу идет спрягаемый глагол.<br>Пример: Es regnet, <g>trotzdem gehe</g> ich raus. Es regnet, <g>deshalb bleibe</g> ich hier."
    }
  },
  {
    "id": "komposita_fugenelemente",
    "title": {"de": "Wortbildung: Komposita (Fugenelemente)", "en": "Word formation: compounds (linking elements)", "uk": "Творення слів: композити (сполучні елементи)", "ru": "Словообразование: композиты (соединительные элементы)"},
    "explanation": {
      "de": "Manchmal brauchen zusammengesetzte Nomen ein Verbindungselement (Fugenelement) zwischen den Wörtern, oft ein <g>-s-</g>, <g>-n-</g> oder <g>-e-</g>.<br>Beispiel: die Arbeit + der Geber = der Arbeit<g>s</g>geber. die Frage + der Bogen = der Frage<g>n</g>bogen.",
      "en": "Sometimes compound nouns require a linking element (Fugenelement) between the words, most commonly an <g>-s-</g>, <g>-n-</g>, or <g>-e-</g>.<br>Example: die Arbeit + der Geber = der Arbeit<g>s</g>geber. die Frage + der Bogen = der Frage<g>n</g>bogen.",
      "uk": "Іноді складні іменники потребують сполучного елемента (Fugenelement) між словами, найчастіше це літери <g>-s-</g>, <g>-n-</g> або <g>-e-</g>.<br>Приклад: die Arbeit + der Geber = der Arbeit<g>s</g>geber. die Frage + der Bogen = der Frage<g>n</g>bogen.",
      "ru": "Иногда сложные существительные требуют соединительного элемента (Fugenelement) между словами, чаще всего это буквы <g>-s-</g>, <g>-n-</g> или <g>-e-</g>.<br>Пример: die Arbeit + der Geber = der Arbeit<g>s</g>geber. die Frage + der Bogen = der Frage<g>n</g>bogen."
    }
  },
  {
    "id": "genitiv_alternativen",
    "title": {"de": "Genitiv und Alternativen (von + Dativ)", "en": "Genitive and alternatives (von + dative)", "uk": "Родовий відмінок та альтернативи (von + давальний)", "ru": "Родительный падеж и альтернативы (von + дательный)"},
    "explanation": {
      "de": "Der Genitiv ist oft formell. Im Alltag und in der gesprochenen Sprache nutzen wir oft eine Alternative: <g>von</g> + Dativ.<br>Beispiel: Das Auto des Bruders (Genitiv) -> Das Auto <g>von meinem Bruder</g> (von + Dativ).",
      "en": "The genitive case is often formal. In everyday spoken German, we frequently use an easier alternative: <g>von</g> + Dative.<br>Example: Das Auto des Bruders (Genitive) -> Das Auto <g>von meinem Bruder</g> (von + Dative).",
      "uk": "Родовий відмінок (Genitiv) є більш офіційним. У розмовній мові замість нього часто використовують простішу альтернативу: прийменник <g>von</g> + Давальний відмінок.<br>Приклад: Das Auto des Bruders (Genitiv) -> Das Auto <g>von meinem Bruder</g> (von + Dativ).",
      "ru": "Родительный падеж (Genitiv) более официальный. В разговорной речи вместо него часто используют более простую альтернативу: предлог <g>von</g> + Дательный падеж.<br>Пример: Das Auto des Bruders (Genitiv) -> Das Auto <g>von meinem Bruder</g> (von + Dativ)."
    }
  },
  {
    "id": "nebensatz_seit_seitdem",
    "title": {"de": "Nebensatz mit seit  /  seitdem", "en": "Subordinate clause with seit / seitdem (since)", "uk": "Підрядне речення з seit / seitdem (відколи)", "ru": "Придаточное предложение с seit / seitdem (с тех пор как)"},
    "explanation": {
      "de": "Die Konnektoren <g>seit</g> und <g>seitdem</g> leiten einen temporalen Nebensatz ein. Eine Aktion begann in der Vergangenheit und dauert in der Gegenwart noch an. Das konjugierte Verb steht am Ende.<br>Beispiel: <g>Seitdem</g> ich in Deutschland wohne, <g>lerne</g> ich täglich Deutsch.",
      "en": "The connectors <g>seit</g> and <g>seitdem</g> introduce a temporal subordinate clause. An action started in the past and is still ongoing in the present. The verb moves to the end.<br>Example: <g>Seitdem</g> ich in Deutschland wohne, <g>lerne</g> ich täglich Deutsch.",
      "uk": "Сполучники <g>seit</g> та <g>seitdem</g> вводять підрядне речення часу (відколи, з того часу як). Дія почалася в минулому і триває досі. Змінюване дієслово стоїть у кінці.<br>Приклад: <g>Seitdem</g> ich in Deutschland wohne, <g>lerne</g> ich täglich Deutsch.",
      "ru": "Союзы <g>seit</g> и <g>seitdem</g> вводят придаточное предложение времени (с тех пор как). Действие началось в прошлом и продолжается до сих пор. Спрягаемый глагол стоит в конце.<br>Пример: <g>Seitdem</g> ich in Deutschland wohne, <g>lerne</g> ich täglich Deutsch."
    }
  },
  {
    "id": "verben_praep_personen_sachen",
    "title": {"de": "Verben mit Präpositionen: Fragen nach Personen und Sachen", "en": "Verbs with prepositions: questions about people and things", "uk": "Дієслова з прийменниками: питання про осіб і речі", "ru": "Глаголы с предлогами: вопросы о людях и вещах"},
    "explanation": {
      "de": "Wenn ein Verb eine feste Präposition hat, fragen wir nach Personen mit Präposition + wen  /  wem (z.B. <g>Auf wen</g> wartest du?). Nach Sachen fragen wir mit <g>Wo(r)</g> + Präposition (z.B. <g>Worauf</g> wartest du?).",
      "en": "When a verb has a fixed preposition, we ask about people using the preposition + wen  /  wem (e.g., <g>Auf wen</g> wartest du?). For objects, we use <g>Wo(r)</g> + preposition (e.g., <g>Worauf</g> wartest du?).",
      "uk": "Якщо дієслово має сталий прийменник, ми запитуємо про людей за допомогою конструкції Прийменник + знахідний  /  давальний відмінок (напр., <g>Auf wen</g> wartest du? — На кого ти чекаєш?). Про речі ми запитуємо за допомогою слова <g>Wo(r)</g> + прийменник (напр., <g>Worauf</g> wartest du? — На що ти чекаєш?).",
      "ru": "Если глагол имеет фиксированный предлог, мы спрашиваем о людях с помощью конструкции Предлог + винительный  /  дательный падеж (напр., <g>Auf wen</g> wartest du? — Кого ты ждешь?). О вещах мы спрашиваем с помощью слова <g>Wo(r)</g> + предлог (напр., <g>Worauf</g> wartest du? — Чего ты ждешь?)."
    }
  },
  {
    "id": "nebensatz_mit_bis",
    "title": {"de": "Nebensatz mit bis", "en": "Subordinate clause with bis (until)", "uk": "Підрядне речення з bis (доки)", "ru": "Придаточное предложение с bis (до тех пор как)"},
    "explanation": {
      "de": "Der Konnektor <g>bis</g> zeigt das Ende einer Aktion oder einer Zeitspanne. Es ist ein Nebensatz, das konjugierte Verb steht also ganz am Ende des Satzes.<br>Beispiel: Ich warte hier, <g>bis du kommst</g>.",
      "en": "The connector <g>bis</g> marks the end point of an action or a period of time (until). It rules a subordinate clause, so the verb goes to the very end.<br>Example: Ich warte hier, <g>bis du kommst</g>.",
      "uk": "Сполучник <g>bis</g> вказує на кінцевий пункт дії або часового проміжку (доки, поки не). Це підрядне речення, тому змінюване дієслово стоїть у самому кінці.<br>Приклад: Ich warte hier, <g>bis du kommst</g>.",
      "ru": "Союз <g>bis</g> указывает на конечную точку действия или временного промежутка (пока, пока не). Это придаточное предложение, поэтому спрягаемый глагол стоит в самом конце.<br>Пример: Ich warte hier, <g>bis du kommst</g>."
    }
  },
  {
    "id": "verben_als_nomen",
    "title": {"de": "Wortbildung: Verben als Nomen", "en": "Word formation: verbs as nouns", "uk": "Творення слів: дієслова як іменники", "ru": "Словообразование: глаголы как существительные"},
    "explanation": {
      "de": "Man kann aus fast jedem Verb ein Nomen machen. Der Infinitiv wird großgeschrieben und hat immer den Artikel <g>das</g>.<br>Beispiel: leben -> <g>das Leben</g>, essen -> <g>das Essen</g>, lernen -> <g>das Lernen</g>.",
      "en": "You can turn almost any verb into a noun. The infinitive form gets capitalized and always takes the neutral article <g>das</g>.<br>Example: leben -> <g>das Leben</g>, essen -> <g>das Essen</g>.",
      "uk": "Майже з кожного дієслова можна зробити іменник (субстантивація). Для цього інфінітив пишеться з великої літери та завжди отримує артикль середнього роду <g>das</g>.<br>Приклад: leben -> <g>das Leben</g> (життя), essen -> <g>das Essen</g> (їжа).",
      "ru": "Почти из каждого глагола можно сделать существительное (субстантивация). Для этого инфинитив пишется с большой буквы и всегда получает артикль среднего рода <g>das</g>.<br>Пример: leben -> <g>das Leben</g> (жизнь), essen -> <g>das Essen</g> (еда)."
    }
  },
  {
    "id": "praepositionaladverbien_b1",
    "title": {"de": "Präpositionaladverbien (worüber, darüber …)", "en": "Prepositional adverbs (worüber, darüber …)", "uk": "Прийменникові прислівники (worüber, darüber …)", "ru": "Предложные наречия (worüber, darüber …)"},
    "explanation": {
      "de": "Wenn wir über Dinge  /  Sachen sprechen, nutzen wir für Fragen <g>wo-</g> + Präposition (worüber) und für Antworten  /  Reaktionen <g>da-</g> + Präposition (darüber). Wenn die Präposition mit Vokal beginnt, kommt ein '-r-' dazwischen.<br>Beispiel: Worüber sprecht ihr? Wir sprechen <g>darüber</g>.",
      "en": "When discussing objects or topics, we use <g>wo-</g> + preposition for questions (worüber) and <g>da-</g> + preposition for answers (darüber). An '-r-' is added if the preposition starts with a vowel.<br>Example: Worüber sprecht ihr? Wir sprechen <g>darüber</g>.",
      "uk": "Коли ми говоримо про неживі предмети чи абстрактні речі, ми використовуємо слова з <g>wo-</g> для запитань (worüber — про що) та з <g>da-</g> для вказування на це в матчі-відповіді (darüber — про це). Якщо прийменник починається на голосну, додається літера '-r-'.<br>Приклад: Worüber sprecht ihr? Wir sprechen <g>darüber</g>.",
      "ru": "Когда мы говорим о неодушевленных предметах или абстрактных вещах, мы используем слова с <g>wo-</g> для вопросов (worüber — о чем) и с <g>da-</g> для указания на это в ответе (darüber — об этом). Если предлог начинается на гласную, добавляется буква '-r-'.<br>Пример: Worüber sprecht ihr? Wir sprechen <g>darüber</g>."
    }
  },
  {
    "id": "futur_werden",
    "title": {"de": "Futur I: werden + Infinitiv", "en": "Future tense: werden + infinitive", "uk": "Майбутній час: werden + інфінітив", "ru": "Будущее время: werden + инфинитив"},
    "explanation": {
      "de": "Das Futur I nutzen wir für Pläne, Versprechen oder Vermutungen in der Zukunft. Es besteht aus dem konjugierten Verb <g>werden</g> auf Position 2 und dem <g>Infinitiv</g> des Hauptverbs am Satzende.<br>Beispiel: Ich <g>werde</g> morgen das Auto <g>waschen</g>.",
      "en": "We use Futur I for plans, promises, or assumptions about the future. It consists of the conjugated verb <g>werden</g> in position 2 and the main verb in the <g>infinitive</g> at the very end.<br>Example: Ich <g>werde</g> morgen das Auto <g>waschen</g>.",
      "uk": "Майбутній час (Futur I) використовується для планів, обіцянок або припущень щодо майбутнього. Він будується за допомогою дієслова <g>werden</g> на другому місці та основного дієслова в <g>інфінітиві</g> в самому кінці речення.<br>Приклад: Ich <g>werde</g> morgen das Auto <g>waschen</g>.",
      "ru": "Будущее время (Futur I) используется для планов, обещаний или предположений относительно будущего. Оно строится с помощью глагола <g>werden</g> на втором месте и основного глагола в <g>инфинитиве</g> в самом конце предложения.<br>Пример: Ich <g>werde</g> morgen das Auto <g>waschen</g>."
    }
  },
  {
    "id": "nicht_nur_sondern_auch",
    "title": {"de": "nicht nur …, sondern auch", "en": "not only … but also", "uk": "не тільки …, а й", "ru": "не только …, но и"},
    "explanation": {
      "de": "Ein zweiteiliger Konnektor, der zwei positive Punkte verbindet. Er betont, dass beides gleichzeitig zutrifft.<br>Beispiel: Er ist <g>nicht nur</g> intelligent, <g>sondern auch</g> sehr sportlich.",
      "en": "A two-part connector used to emphasize that two positive aspects apply at the same time (not only ... but also).<br>Example: Er ist <g>nicht nur</g> intelligent, <g>sondern auch</g> sehr sportlich.",
      "uk": "Подвійний сполучник, який з'єднує два факти, підкреслюючи, що актуальні обидва варіанти (не тільки..., але й...).<br>Приклад: Er ist <g>nicht nur</g> intelligent, <g>sondern auch</g> sehr sportlich.",
      "ru": "Двойной союз, который соединяет два факта, подчеркивая, что актуальны оба варианта (не только..., но и...).<br>Пример: Er ist <g>nicht nur</g> intelligent, <g>sondern auch</g> sehr sportlich."
    }
  },
  {
    "id": "satz_mit_um_zu",
    "title": {"de": "Sätze mit um … zu", "en": "Clauses with um … zu (in order to)", "uk": "Речення з um … zu (щоб)", "ru": "Предложения с um … zu (чтобы)"},
    "explanation": {
      "de": "Wir nutzen Infinitivsätze mit <g>um ... zu</g>, um eine Absicht oder ein Ziel auszudrücken (Frage: Wozu?). Das funktioniert aber nur, wenn das Subjekt im Hauptsatz und Nebensatz absolut gleich ist.<br>Beispiel: Ich lerne Deutsch, <g>um</g> in Deutschland <g>zu arbeiten</g>.",
      "en": "We use infinitive clauses with <g>um ... zu</g> to express a purpose or goal (In order to...). This structure can only be used if the subject in both clauses is exactly the same.<br>Example: Ich lerne Deutsch, <g>um</g> in Deutschland <g>zu arbeiten</g>.",
      "uk": "Конструкція <g>um ... zu</g> використовується для вираження мети (для того, щоб...). Важливо: її можна вживати лише тоді, коли підмет у головній та підрядній частинах повністю збігається.<br>Приклад: Ich lerne Deutsch, <g>um</g> in Deutschland <g>zu arbeiten</g>.",
      "ru": "Конструкция <g>um ... zu</g> используется для выражения цели (для того, чтобы...). Важно: её можно употреблять только тогда, когда подлежащее в главной и придаточной частях полностью совпадает.<br>Пример: Ich lerne Deutsch, <g>um</g> in Deutschland <g>zu arbeiten</g>."
    }
  },
  {
    "id": "nebensatz_mit_damit_wdh_b1",
    "title": {"de": "Wiederholung: Nebensatz mit damit", "en": "Review: subordinate clause with damit", "uk": "Повторення: речення з damit", "ru": "Повторение: предложение с damit"},
    "explanation": {
      "de": "Wiederholung: Wenn das Subjekt im Haupt- und Nebensatz unterschiedlich ist, MÜSSEN wir <g>damit</g> statt 'um...zu' nutzen. Das konjugierte Verb steht am Ende.<br>Beispiel: Ich gebe meinem Sohn Geld, <g>damit</g> er ein Buch <g>kauft</g>.",
      "en": "Review: If the subject in the main clause and the subordinate clause is different, you MUST use <g>damit</g> instead of 'um...zu'. The conjugated verb moves to the end.<br>Example: Ich gebe meinem Sohn Geld, <g>damit</g> er ein Buch <g>kauft</g>.",
      "uk": "Повторення: якщо підмети в головному та підрядному реченнях різні, ми ОБОВ'ЯЗКОВО використовуємо сполучник <g>damit</g> (замість конструкції 'um...zu'). Змінюване дієслово йде на кінець.<br>Приклад: Ich gebe meinem Sohn Geld, <g>damit</g> er ein Buch <g>kauft</g>.",
      "ru": "Повторение: если подлежащие в главном и придаточном предложениях разные, мы ОБЯЗАТЕЛЬНО используем союз <g>damit</g> (вместо конструкции 'um...zu'). Спрягаемый глагол уходит в конец.<br>Пример: Ich gebe meinem Sohn Geld, <g>damit</g> er ein Buch <g>kauft</g>."
    }
  },
  {
    "id": "nomen_auf_heit_keit",
    "title": {"de": "Wortbildung: Nomen auf -heit und -keit", "en": "Word formation: nouns ending in -heit/-keit", "uk": "Творення слів: іменники на -heit/-keit", "ru": "Словообразование: существительные на -heit/-keit"},
    "explanation": {
      "de": "Aus vielen Adjektiven kann man Nomen machen, indem man die Suffixe <g>-heit</g> oder <g>-keit</g> anhängt. Diese Wörter sind immer feminin (haben den Artikel <g>die</g>).<br>Beispiel: krank -> <g>die Krankheit</g>, einsam -> <g>die Einsamkeit</g>.",
      "en": "You can turn many adjectives into nouns by adding the suffixes <g>-heit</g> or <g>-keit</g>. These nouns are always feminine and take the article <g>die</g>.<br>Example: krank -> <g>die Krankheit</g>, einsam -> <g>die Einsamkeit</g>.",
      "uk": "З багатьох прикметників можна утворити іменники за допомогою суфіксів <g>-heit</g> або <g>-keit</g>. Такі слова завжди жіночого роду і мають артикль <g>die</g>.<br>Приклад: krank -> <g>die Krankheit</g> (хвороба), einsam -> <g>die Einsamkeit</g> (самотність).",
      "ru": "Из многих прилагательных можно образовать существительные с помощью суффиксов <g>-heit</g> или <g>-keit</g>. Такие слова всегда женского рода и имеют артикль <g>die</g>.<br>Пример: krank -> <g>die Krankheit</g> (болезнь), einsam -> <g>die Einsamkeit</g> (одиночество)."
    }
  },
  {
    "id": "passiv_praesens_b1",
    "title": {"de": "Passiv Präsens", "en": "Passive voice (present)", "uk": "Пасив (теперішній час)", "ru": "Пассив (настоящее время)"},
    "explanation": {
      "de": "Im Passiv ist die Aktion wichtig, nicht die Person (Wer es macht). Struktur: Das konjugierte Verb <g>werden</g> steht auf Position 2 und das <g>Partizip II</g> steht am Ende des Satzes.<br>Beispiel: Das Auto <g>wird repariert</g>.",
      "en": "In the passive voice, the action is important, not the person doing it. Structure: conjugated <g>werden</g> in position 2 + <g>Partizip II</g> at the end of the sentence.<br>Example: Das Auto <g>wird repariert</g>.",
      "uk": "У пасивному стані (Passiv) важлива сама дія, а не той, хто її виконує. Структура: змінюване дієслово <g>werden</g> стоїть на 2-му місці, а основне дієслово у формі <g>Partizip II</g> — в самому кінці речення.<br>Приклад: Das Auto <g>wird repariert</g> (Машину ремонтують).",
      "ru": "В пассивном залоге (Passiv) важно само действие, а не тот, кто его выполняет. Структура: спрягаемый глагол <g>werden</g> стоит на 2-м месте, а основной глагол в форме <g>Partizip II</g> — в самом конце предложения.<br>Пример: Das Auto <g>wird repariert</g> (Машину ремонтируют)."
    }
  },
  {
    "id": "perfekt_wdh_b1",
    "title": {"de": "Wiederholung: Perfekt", "en": "Review: present perfect", "uk": "Повторення: перфект", "ru": "Повторение: перфект"},
    "explanation": {
      "de": "Wiederholung der gesprochenen Vergangenheitsform: <g>haben</g> / <g>sein</g> (Position 2) + <g>Partizip II</g> (am Satzende). <g>Sein</g> nutzen wir bei Bewegung (gehen, laufen) oder Zustandsänderung (aufwachen), sonst immer <g>haben</g>.<br>Beispiel: Ich <g>habe</g> geschlafen. Er <g>ist</g> gekommen.",
      "en": "Review of the conversational past tense: <g>haben</g> / <g>sein</g> (position 2) + <g>Partizip II</g> (at the end). We use <g>sein</g> for movement or change of state, otherwise we use <g>haben</g>.<br>Example: Ich <g>habe</g> geschlafen. Er <g>ist</g> gekommen.",
      "uk": "Повторення розмовної форми минулого часу: <g>haben</g>  /  <g>sein</g> (на 2-му місці) + <g>Partizip II</g> (в кінці речення). Дієслово <g>sein</g> використовується при русі або зміні стану, в інших випадках — <g>haben</g>.<br>Приклад: Ich <g>habe</g> geschlafen. Er <g>ist</g> gekommen.",
      "ru": "Повторение разговорной формы прошедшего времени: <g>haben</g>  /  <g>sein</g> (на 2-м месте) + <g>Partizip II</g> (в конце предложения). Глагол <g>sein</g> используется при движении или изменении состояния, в остальных случаях — <g>haben</g>.<br>Пример: Ich <g>habe</g> geschlafen. Er <g>ist</g> gekommen."
    }
  },
  {
    "id": "nomen_auf_ung",
    "title": {"de": "Wortbildung: Nomen auf -ung", "en": "Word formation: nouns ending in -ung", "uk": "Творення слів: іменники на -ung", "ru": "Словообразование: существительные на -ung"},
    "explanation": {
      "de": "Man kann aus vielen Verben Nomen machen, indem man die Endung '-en' durch das Suffix <g>-ung</g> ersetzt. Diese Nomen beschreiben meistens Prozesse und sind immer feminin (<g>die</g>).<br>Beispiel: wohnen -> <g>die Wohnung</g>, einladen -> <g>die Einladung</g>.",
      "en": "You can turn many verbs into nouns by replacing the '-en' ending with the suffix <g>-ung</g>. These nouns usually describe processes and are always feminine (<g>die</g>).<br>Example: wohnen -> <g>die Wohnung</g>, einladen -> <g>die Einladung</g>.",
      "uk": "Багато дієслів можна перетворити на іменники, замінивши закінчення '-en' на суфікс <g>-ung</g>. Такі іменники зазвичай позначають дію або її результат і завжди мають жіночий рід (<g>die</g>).<br>Приклад: wohnen -> <g>die Wohnung</g> (квартира), einladen -> <g>die Einladung</g> (запрошення).",
      "ru": "Многие глаголы можно превратить в существительные, заменив окончание '-en' на суффикс <g>-ung</g>. Такие существительные обычно обозначают процесс или результат действия и всегда имеют женский род (<g>die</g>).<br>Пример: wohnen -> <g>die Wohnung</g> (квартира), einladen -> <g>die Einladung</g> (приглашение)."
    }
  },
  {
    "id": "verben_mit_praep_wdh_b1",
    "title": {"de": "Wiederholung: Verben mit Präpositionen", "en": "Review: verbs with prepositions", "uk": "Повторення: дієслова з прийменниками", "ru": "Повторение: глаголы с предлогами"},
    "explanation": {
      "de": "Wiederholung: Viele Verben sind fest mit einer Präposition verknüpft, die einen bestimmten Kasus verlangt. Wichtig auf B1: <g>sich interessieren für</g> (+ Akkusativ), <g>träumen von</g> (+ Dativ), <g>sich freuen auf / über</g> (+ Akkusativ).<br>Beispiel: Ich interessiere mich <g>für Musik</g>.",
      "en": "Review: Many verbs are firmly attached to a specific preposition that dictates the case. Important for B1: <g>sich interessieren für</g> (+ Accusative), <g>träumen von</g> (+ Dative).<br>Example: Ich interessiere mich <g>für Musik</g>.",
      "uk": "Повторення: багато дієслів мають стійке керування з певним прийменником і відмінком. Важливі для B1: <g>sich interessieren für</g> (+ Знахідний), <g>träumen von</g> (+ Давальний), <g>sich freuen auf / über</g> (+ Знахідний).<br>Приклад: Ich interessiere mich <g>für Musik</g>.",
      "ru": "Повторение: многие глаголы имеют устойчивое управление с определенным предлогом и падежом. Важные для B1: <g>sich interessieren für</g> (+ Винительный), <g>träumen von</g> (+ Дательный), <g>sich freuen auf / über</g> (+ Винительный).<br>Пример: Ich interessiere mich <g>für Musik</g>."
    }
  },
  {
    "id": "fragewoerter_wor_dar",
    "title": {"de": "Fragewörter mit wo(r)- und Präpositionaladverbien mit da(r)-", "en": "Question words with wo(r)- and prepositional adverbs with da(r)-", "uk": "Питальні слова з wo(r)- і прийменникові прислівники з da(r)-", "ru": "Вопросительные слова с wo(r)- и предложные наречия с da(r)-"},
    "explanation": {
      "de": "Für Sachen nutzen wir Pronominaladverbien: Fragen beginnen mit <g>wo-</g> (oder <g>wor-</g> vor Vokalen), Antworten  /  Verweise mit <g>da-</g> (oder <g>dar-</g>).<br>Beispiel: <g>Wovon</g> träumst du? Ich träume <g>davon</g>.",
      "en": "For objects or concepts we use pronominal adverbs: questions start with <g>wo-</g> (or <g>wor-</g> before vowels), while answers  /  references start with <g>da-</g> (or <g>dar-</g>).<br>Example: <g>Wovon</g> träumst du? Ich träume <g>davon</g>.",
      "uk": "Для речей ми використовуємо займенникові прислівники: питання починаються з <g>wo-</g> (або <g>wor-</g> перед голосними), а відповіді  /  вказівки — з <g>da-</g> (або <g>dar-</g>).<br>Приклад: <g>Wovon</g> träumst du? Ich träume <g>davon</g>.",
      "ru": "Для вещей мы используем местоименные наречия: вопросы начинаются с <g>wo-</g> (или <g>wor-</g> перед гласными), а ответы  /  указания — с <g>da-</g> (или <g>dar-</g>).<br>Пример: <g>Wovon</g> träumst du? Ich träume <g>davon</g>."
    }
  },
  {
    "id": "interesse_denn_eigentlich",
    "title": {"de": "Interesse zeigen mit denn und eigentlich", "en": "Showing interest with denn and eigentlich", "uk": "Виявлення інтересу за допомогою denn і eigentlich", "ru": "Проявление интереса с помощью denn и eigentlich"},
    "explanation": {
      "de": "Die Modalpartikeln <g>denn</g> und <g>eigentlich</g> machen Fragen in Gesprächen freundlicher, natürlicher und zeigen echtes Interesse.<br>Beispiel: Wie heißt du <g>denn</g>? Woher kommst du <g>eigentlich</g>?",
      "en": "The modal particles <g>denn</g> and <g>eigentlich</g> make questions sound softer, more natural, and show genuine interest in spoken German.<br>Example: Wie heißt du <g>denn</g>? Woher kommst du <g>eigentlich</g>?",
      "uk": "Модальні часточки <g>denn</g> та <g>eigentlich</g> роблять запитання в розмові більш живими, дружніми та демонструють щирий інтерес до співрозмовника.<br>Приклад: Wie heißt du <g>denn</g>? Woher kommst du <g>eigentlich</g>?",
      "ru": "Модальные частицы <g>denn</g> и <g>eigentlich</g> делают вопросы в разговоре более живыми, дружелюбными и демонстрируют искренний интерес к собеседнику.<br>Пример: Wie heißt du <g>denn</g>? Woher kommst du <g>eigentlich</g>?"
    }
  },
  {
    "id": "adjektive_mit_un",
    "title": {"de": "Wortbildung: Adjektive mit un-", "en": "Word formation: adjectives with un-", "uk": "Творення слів: прикметники з un-", "ru": "Словообразование: прилагательные с un-"},
    "explanation": {
      "de": "Das Präfix <g>un-</g> vor einem Adjektiv bedeutet das Gegenteil (eine Verneinung).<br>Beispiel: glücklich -> <g>unglücklich</g>, freundlich -> <g>unfreundlich</g>, wichtig -> <g>unwichtig</g>.",
      "en": "Adding the prefix <g>un-</g> to the front of an adjective changes its meaning to the exact opposite.<br>Example: glücklich -> <g>unglücklich</g>, freundlich -> <g>unfreundlich</g>.",
      "uk": "Префікс <g>un-</g> перед прикметником змінює його значення на протилежне (заперечення).<br>Приклад: glücklich -> <g>unglücklich</g> (нещасливий), freundlich -> <g>unfreundlich</g> (непривітний).",
      "ru": "Префикс <g>un-</g> перед прилагательным меняет его значение на противоположное (отрицание).<br>Пример: glücklich -> <g>unglücklich</g> (несчастливый), freundlich -> <g>unfreundlich</g> (неприветливый)."
    }
  },
  {
    "id": "konjunktiv2_wuensche_b1",
    "title": {"de": "Konjunktiv II: Wünsche äußern", "en": "Subjunctive II: expressing wishes", "uk": "Конʼюнктив II: вираження побажань", "ru": "Конъюнктив II: выражение пожеланий"},
    "explanation": {
      "de": "Für irreale Wünsche (Träume) nutzen wir den Konjunktiv II (<g>hätte, wäre, würde + Infinitiv</g>). Oft nutzen wir dabei die Wörter 'doch' oder 'nur'.<br>Beispiel: Ich <g>wäre</g> gern am Strand! Wenn ich nur mehr Zeit <g>hätte</g>!",
      "en": "To express imaginary or unreal wishes, we use Subjunctive II (<g>hätte, wäre, würde + infinitive</g>). Particles like 'doch' or 'nur' are frequently added.<br>Example: Ich <g>wäre</g> gern am Strand! Wenn ich nur mehr Zeit <g>hätte</g>!",
      "uk": "Для вираження уявних, нереальних бажань (мрій) ми використовуємо Кон'юнктив II (<g>hätte, wäre, würde + інфінітив</g>). Часто додаються часточки 'doch' або 'nur'.<br>Приклад: Ich <g>wäre</g> gern am Strand! Wenn ich nur mehr Zeit <g>hätte</g>!",
      "ru": "Для выражения воображаемых, нереальных желаний (мечтаний) мы используем Конъюнктив II (<g>hätte, wäre, würde + инфинитив</g>). Часто добавляются частицы 'doch' или 'nur'.<br>Пример: Ich <g>wäre</g> gern am Strand! Wenn ich nur mehr Zeit <g>hätte</g>!"
    }
  },
  {
    "id": "nebensatz_wenn_konjunktiv2_irreal",
    "title": {"de": "Nebensatz mit wenn im Konjunktiv II (irreale Bedingungen)", "en": "Subordinate clause with wenn in Subjunctive II (unreal conditions)", "uk": "Підрядне речення з wenn у Конʼюнктиві II (нереальні умови)", "ru": "Придаточное предложение с wenn в Конъюнктиве II (нереальные условия)"},
    "explanation": {
      "de": "Wenn wir über Bedingungen sprechen, die nicht real sind, nutzen wir <g>wenn</g> zusammen mit dem <g>Konjunktiv II</g> in beiden Satzteilen. Das Verb im wenn-Satz steht am Ende.<br>Beispiel: <g>Wenn</g> ich viel Geld <g>hätte</g>, <g>würde</g> ich ein Haus <g>kaufen</g>.",
      "en": "When describing conditions that are not real, we use <g>wenn</g> with <g>Subjunctive II</g> in both clauses. The verb in the wenn-clause sits at the very end.<br>Example: <g>Wenn</g> ich viel Geld <g>hätte</g>, <g>würde</g> ich ein Haus <g>kaufen</g>.",
      "uk": "Якщо ми говоримо про умови, які є нереальними наразі, ми використовуємо сполучник <g>wenn</g> разом із <g>Кон'юнктивом II</g> в обох частинах речення. Дієслово в підрядному реченні стоїть у кінці.<br>Приклад: <g>Wenn</g> ich viel Geld <g>hätte</g>, <g>würde</g> ich ein Haus <g>kaufen</g>.",
      "ru": "Если мы говорим об условиях, которые нереальны на данный момент, мы используем союз <g>wenn</g> вместе с <g>Конъюнктивом II</g> в обеих частях предложения. Глагол в придаточном стоит в конце.<br>Пример: <g>Wenn</g> ich viel Geld <g>hätte</g>, <g>würde</g> ich ein Haus <g>kaufen</g>."
    }
  },
  {
    "id": "verben_praep_dass_satz",
    "title": {"de": "Verben mit Präpositionen und dass-Satz", "en": "Verbs with prepositions and dass-clauses", "uk": "Дієслова з прийменниками та підрядним реченням із dass", "ru": "Глаголы с предлогами и придаточным с dass"},
    "explanation": {
      "de": "Wenn ein Verb eine feste Präposition hat und danach ein Nebensatz kommt, verbinden wir sie mit einem Präpositionaladverb (<g>darauf, darüber...</g>) im Hauptsatz und dem Konnektor <g>dass</g>.<br>Beispiel: Ich freue mich <g>darauf, dass</g> du mich <g>besuchst</g>.",
      "en": "When a verb has a fixed preposition and is followed by a subordinate clause, we use a prepositional adverb (<g>darauf, darüber...</g>) in the main clause connected to a <g>dass</g>-clause.<br>Example: Ich freue mich <g>darauf, dass</g> du mich <g>besuchst</g>.",
      "uk": "Якщо дієслово вимагає прийменника, а далі йде підрядне речення, у головній частині з'являється займенниковий прислівник (<g>darauf, darüber...</g>), який поєднується зі сполучником <g>dass</g>.<br>Приклад: Ich freue mich <g>darauf, dass</g> du mich <g>besuchst</g>.",
      "ru": "Если глагол требует предлога, а далее следует придаточное предложение, в главной части появляется местоименное наречие (<g>darauf, darüber...</g>), которое связывается с союзом <g>dass</g>.<br>Пример: Ich freue mich <g>darauf, dass</g> du mich <g>besuchst</g>."
    }
  },
  {
    "id": "adjektive_auf_ig_isch",
    "title": {"de": "Wortbildung: Adjektive auf -ig und -isch vor Nomen", "en": "Word formation: adjectives ending in -ig/-isch before nouns", "uk": "Творення слів: прикметники на -ig/-isch перед іменником", "ru": "Словообразование: прилагательные на -ig/-isch перед существительным"},
    "explanation": {
      "de": "Aus Nomen kann man Adjektive bauen, indem man <g>-ig</g> oder <g>-isch</g> anhängt. Stehen diese Adjektive vor einem Nomen, müssen sie normal dekliniert werden.<br>Beispiel: der Wind -> ein wind<g>iger</g> Tag, die Romantik -> ein romant<g>isches</g> Buch.",
      "en": "Nouns can be turned into adjectives by adding <g>-ig</g> or <g>-isch</g>. If these adjectives stand before a noun, they must take normal adjective endings.<br>Example: der Wind -> ein wind<g>iger</g> Tag, die Romantik -> ein romant<g>isches</g> Buch.",
      "uk": "З іменників можна утворювати прикметники за допомогою суфіксів <g>-ig</g> або <g>-isch</g>. Якщо такі прикметники стоять перед іменником, вони отримують звичайні відмінкові закінчення.<br>Приклад: der Wind -> ein wind<g>iger</g> Tag, die Romantik -> ein romant<g>isches</g> Buch.",
      "ru": "Из существительных можно образовывать прилагательные с помощью суффиксов <g>-ig</g> или <g>-isch</g>. Если такие прилагательные стоят перед существительным, они получают обычные падежные окончания.<br>Пример: der Wind -> ein wind<g>iger</g> Tag, die Romantik -> ein romant<g>isches</g> Buch."
    }
  },
  {
    "id": "nebensatz_mit_bevor",
    "title": {"de": "Nebensatz mit bevor", "en": "Subordinate clause with bevor (before)", "uk": "Підрядне речення з bevor (перш ніж)", "ru": "Придаточное предложение с bevor (прежде чем)"},
    "explanation": {
      "de": "Der Konnektor <g>bevor</g> ordnet Handlungen zeitlich. Die Aktion im Hauptsatz passiert zuerst, die Aktion im <g>bevor</g>-Satz danach. Das Verb steht am Ende.<br>Beispiel: Wasch deine Hände, <g>bevor</g> du <g>isst</g>.",
      "en": "The connector <g>bevor</g> describes a time sequence (before). The action in the main clause happens first. The verb in the <g>bevor</g>-clause moves to the end.<br>Example: Wasch deine Hände, <g>bevor</g> du <g>isst</g>.",
      "uk": "Сполучник <g>bevor</g> вказує на послідовність дій (перш ніж, перед тим як). Дія в головному реченні відбувається спочатку, а в підрядному після <g>bevor</g> — пізніше. Дієслово стоїть у кінці.<br>Приклад: Wasch deine Hände, <g>bevor</g> du <g>isst</g>.",
      "ru": "Союз <g>bevor</g> указывает на последовательность действий (прежде чем, перед тем как). Действие в главном предложении происходит сначала, а в придаточном после <g>bevor</g> — позже. Глагол стоит в конце.<br>Пример: Wasch deine Hände, <g>bevor</g> du <g>isst</g>."
    }
  },
  {
    "id": "adjektivdeklination_bestimmter_artikel",
    "title": {"de": "Adjektive nach dem bestimmten und unbestimmten Artikel", "en": "Adjective endings after the definite and indefinite article", "uk": "Відмінювання прикметників після означеного та неозначеного артикля", "ru": "Склонение прилагательных после определённого и неопределённого артикля"},
    "explanation": {
      "de": "Systematischer Überblick der Adjektivendungen auf B1. Nach <g>bestimmtem Artikel</g> nutzen wir schwache Endungen (<g>-e</g> / <g>-en</g>). Nach <g>unbestimmtem Artikel</g> zeigt das Adjektiv im Nominativ  /  Akkusativ das Signal des Nomens (<g>-er, -es, -e, -en</g>).",
      "en": "Systematic review of adjective endings at the B1 level. After a <g>definite article</g>, we use weak endings (<g>-e</g> / <g>-en</g>). After an <g>indefinite article</g>, the adjective displays the gender marker in Nominative  /  Accusative (<g>-er, -es, -e, -en</g>).",
      "uk": "Систематичний огляд закінчень прикметників на рівні B1. Після <g>означеного артикля</g> використовуються слабкі закінчення (<g>-e</g>  /  <g>-en</g>). Після <g>неозначеного артикля</g> у називному та знахідному відмінках прикметник переймає родовий маркер (<g>-er, -es, -e, -en</g>).",
      "ru": "Систематический обзор окончаний прилагательных на уровне B1. После <g>определенного артикля</g> используются слабые окончания (<g>-e</g>  /  <g>-en</g>). После <g>неопределенного артикля</g> в именительном и винительном падежах прилагательное перенимает родовой маркер (<g>-er, -es, -e, -en</g>)."
    }
  },
  {
    "id": "komparativ_superlativ_vor_nomen",
    "title": {"de": "Komparativ und Superlativ vor Nomen", "en": "Comparative and superlative before nouns", "uk": "Компаратив і суперлатив перед іменником", "ru": "Компаратив и суперлатив перед существительным"},
    "explanation": {
      "de": "Wenn Formen im Komparativ (z.B. kleiner) oder Superlativ (z.B. kleinste) direkt vor einem Nomen stehen, müssen sie zusätzlich die ganz normale <g>Adjektivendung</g> bekommen.<br>Beispiel: ein <g>kleineres</g> Auto (Komparativ + es), das <g>kleinste</g> Haus (Superlativ + e).",
      "en": "When comparative forms (e.g., kleiner) or superlative forms (e.g., kleinste) stand directly before a noun, they must also take the regular <g>adjective endings</g>.<br>Example: ein <g>kleineres</g> Auto (Comparative + es), das <g>kleinste</g> Haus (Superlativ + e).",
      "uk": "Якщо вищий (Komparativ) або найвищий (Superlativ) ступені порівняння стоять безпосередньо перед іменником, вони додатково отримують звичайні <g>закінчення прикметників</g>.<br>Приклад: ein <g>kleineres</g> Auto (Вищий ступінь + закінчення середнього роду '-es'), das <g>kleinste</g> Haus.",
      "ru": "Если сравнительная (Komparativ) или превосходная (Superlativ) степени сравнения стоят непосредственно перед существительным, они дополнительно получают обычные <g>окончания прилагательных</g>.<br>Пример: ein <g>kleineres</g> Auto (Сравнительная степень + окончание среднего рода '-es'), das <g>kleinste</g> Haus."
    }
  },
  {
    "id": "adjektive_als_nomen",
    "title": {"de": "Wortbildung: Adjektive als Nomen", "en": "Word formation: adjectives used as nouns", "uk": "Творення слів: прикметники як іменники", "ru": "Словообразование: прилагательные как существительные"},
    "explanation": {
      "de": "Adjektive können zu Nomen werden. Sie werden großgeschrieben, behalten aber ihre normalen <g>Adjektivendungen</g> bei der Deklination!<br>Beispiel: bekannt -> der <g>Bekannte</g> (ein <g>Bekannter</g>), neu -> etwas <g>Neues</g>.",
      "en": "Adjectives can function as nouns. They are capitalized but still keep their regular <g>adjective endings</g> when declined!<br>Example: bekannt -> der <g>Bekannte</g> (ein <g>Bekannter</g>), neu -> etwas <g>Neues</g>.",
      "uk": "Прикметники можуть перетворюватися на іменники (субстантивація). Вони пишуться з великої літери, але при цьому повністю зберігають свої <g>закінчення прикметників</g> при відмінюванні!<br>Приклад: bekannt -> der <g>Bekannte</g> (знайомий), neu -> etwas <g>Neues</g> (щось нове).",
      "ru": "Прилагательные могут превращаться в существительные (субстантивация). Они пишутся с большой буквы, но при этом полностью сохраняют свои <g>окончания прилагательных</g> при склонении!<br>Пример: bekannt -> der <g>Bekannte</g> (знакомый), neu -> etwas <g>Neues</g> (что-то новое)."
    }
  },
  {
    "id": "nicht_brauchen_zu",
    "title": {"de": "nicht brauchen zu", "en": "nicht brauchen zu (don't need to)", "uk": "nicht brauchen zu (не потрібно)", "ru": "nicht brauchen zu (не нужно)"},
    "explanation": {
      "de": "<g>nicht brauchen zu</g> bedeutet das Gleiche wie 'nicht müssen' (keine Pflicht). Es steht mit einem Infinitiv mit <g>zu</g> am Ende.<br>Beispiel: Du <g>brauchst</g> heute <g>nicht zu arbeiten</g> (Du musst nicht arbeiten).",
      "en": "<g>nicht brauchen zu</g> means the same as 'nicht müssen' (no obligation). It requires an infinitive clause with <g>zu</g> at the end.<br>Example: Du <g>brauchst</g> heute <g>nicht zu arbeiten</g>.",
      "uk": "Конструкція <g>nicht brauchen zu</g> означає те саме, що й 'nicht müssen' (немає потреби щось робити, не обов'язково). Вона використовується з інфінітивом та часткою <g>zu</g> в кінці речення.<br>Приклад: Du <g>brauchst</g> heute <g>nicht zu arbeiten</g>.",
      "ru": "Конструкция <g>nicht brauchen zu</g> означает то же самое, что и 'nicht müssen' (нет необходимости что-то делать, не обязательно). Она используется с инфинитивом и частицей <g>zu</g> в конце предложения.<br>Пример: Du <g>brauchst</g> heute <g>nicht zu arbeiten</g>."
    }
  },
  {
    "id": "nebensatz_mit_waehrend",
    "title": {"de": "Nebensatz mit während", "en": "Subordinate clause with während (while)", "uk": "Підрядне речення з während (тоді як)", "ru": "Придаточное предложение с während (в то время как)"},
    "explanation": {
      "de": "Der Konnektor <g>während</g> verbindet zwei Aktionen, die genau gleichzeitig (simultan) passieren. Es ist ein Nebensatz, das konjugierte Verb steht am Ende.<br>Beispiel: <g>Während</g> ich koche, <g>hört</g> mein Mann Musik.",
      "en": "The connector <g>während</g> connects two actions that happen at the exact same time (simultaneously). In this subordinate clause, the verb goes to the end.<br>Example: <g>Während</g> ich koche, <g>hört</g> mein Mann Musik.",
      "uk": "Сполучник <g>während</g> поєднує дві дії, які відбуваються абсолютно одночасно (поки, в той час як, тоді як). Це підрядне речення, тому змінюване дієслово стоїть у кінці.<br>Приклад: <g>Während</g> ich koche, <g>hört</g> mein Mann Musik.",
      "ru": "Союз <g>während</g> соединяет два действия, которые происходят абсолютно одновременно (в то время как, пока). Это придаточное предложение, поэтому спрягаемый глагол стоит в конце.<br>Пример: <g>Während</g> ich koche, <g>hört</g> mein Mann Musik."
    }
  },
  {
    "id": "indefinitpronomen_possessivpronomen",
    "title": {"de": "Indefinitpronomen und Possessivpronomen", "en": "Indefinite pronouns and possessive pronouns", "uk": "Неозначені та присвійні займенники", "ru": "Неопределённые и притяжательные местоимения"},
    "explanation": {
      "de": "Indefinitpronomen wie <g>jemand, niemand, alles, etwas</g> stehen für unbestimmte Personen oder Sachen. Possessivpronomen wie <g>meins, deins</g> können ein Nomen komplett ersetzen, wenn es schon bekannt ist.<br>Beispiel: Ist das dein Stift? Nein, das ist <g>meins</g>.",
      "en": "Indefinite pronouns (<g>jemand, niemand, alles</g>) refer to unspecified people  /  things. Possessive pronouns (<g>meins, deins</g>) can fully replace a noun if it has already been mentioned.<br>Example: Ist das dein Stift? Nein, das ist <g>meins</g>.",
      "uk": "Неозначені займенники (<g>jemand, niemand, alles, etwas</g>) вказують на невизначених осіб чи предмети. Присвійні займенники в абсолютній формі (<g>meins, deins</g>) можуть повністю замінювати іменник, якщо він уже відомий з контексту.<br>Приклад: Ist das dein Stift? Nein, das ist <g>meins</g> (Ні, це моє).",
      "ru": "Неопределенные местоимения (<g>jemand, niemand, alles, etwas</g>) указывают на неопределенных лиц или предметы. Притяжательные местоимения в абсолютной форме (<g>meins, deins</g>) могут полностью заменять существительное, если оно уже известно из контекста.<br>Пример: Ist das dein Stift? Nein, das ist <g>meins</g> (Нет, это мое)."
    }
  },
  {
    "id": "nomen_auf_chen",
    "title": {"de": "Wortbildung: Nomen auf -chen", "en": "Word formation: nouns ending in -chen", "uk": "Творення слів: іменники на -chen", "ru": "Словообразование: существительные на -chen"},
    "explanation": {
      "de": "Das Suffix <g>-chen</g> macht Dinge kleiner oder süßer (Diminutiv). Diese Wörter haben immer den Artikel <g>das</g> und der Stammvokal bekommt oft einen Umlaut.<br>Beispiel: das Brot -> <g>das Brötchen</g>, die Katze -> <g>das Kätzchen</g>.",
      "en": "The suffix <g>-chen</g> is used to make things sound smaller or cuter (diminutive). These nouns are always neutral (<g>das</g>) and the stem vowel often gets an umlaut.<br>Example: das Brot -> <g>das Brötchen</g>, die Katze -> <g>das Kätzchen</g>.",
      "uk": "Суфікс <g>-chen</g> використовується для утворення зменшувально-пестливих форм (димінутивів). Такі слова завжди мають середній рід (<g>das</g>), а коренева голосна зазвичай отримує умлаут.<br>Приклад: das Brot -> <g>das Brötchen</g> (булочка), die Katze -> <g>das Kätzchen</g> (кошеня).",
      "ru": "Суффикс <g>-chen</g> используется для образования уменьшительно-ласкательных форм (диминутивов). Такие слова всегда имеют средний род (<g>das</g>), а корневая гласная обычно получает умлаут.<br>Пример: das Brot -> <g>das Brötchen</g> (булочка), die Katze -> <g>das Kätzchen</g> (кошечка)."
    }
  },
  {
    "id": "plusquamperfekt",
    "title": {"de": "Plusquamperfekt", "en": "Past perfect (Plusquamperfekt)", "uk": "Плюсквамперфект", "ru": "Плюсквамперфект"},
    "explanation": {
      "de": "Das Plusquamperfekt beschreibt eine Aktion, die VOR einer anderen Aktion in der Vergangenheit passiert ist. Struktur: Präteritum von haben / sein (<g>hatte / war</g>) + <g>Partizip II</g> am Ende.<br>Beispiel: Nachdem ich gegessen <g>hatte</g>, ging ich schlafen.",
      "en": "Plusquamperfekt is used for an action that happened BEFORE another past event (past perfect). Structure: simple past of haben  /  sein (<g>hatte  /  war</g>) + <g>Partizip II</g>.<br>Example: Nachdem ich gegessen <g>hatte</g>, ging ich schlafen.",
      "uk": "Плюсквамперфект (передминулий час) описує дію, яка відбулася ЩЕ РАНІШЕ за іншу подію в минулому. Структура: дієслово haben  /  sein у претериті (<g>hatte  /  war</g>) + <g>Partizip II</g> основного дієслова в кінці.<br>Приклад: Nachdem ich gegessen <g>hatte</g>, ging ich schlafen (Після того як я поїв [спочатку], я пішов спати [потім]).",
      "ru": "Плюсквамперфект (преждепрошедшее время) описывает действие, которое произошло ЕЩЕ РАНЬШЕ другого события в прошлом. Структура: глагол haben  /  sein в претерите (<g>hatte  /  war</g>) + <g>Partizip II</g> основного глагола в конце.<br>Пример: Nachdem ich gegessen <g>hatte</g>, ging ich schlafen (После того как я поел [сначала], я пошел спать [потом])."
    }
  },
  {
    "id": "infinitiv_als_nomen",
    "title": {"de": "Infinitiv als Nomen", "en": "Infinitive used as a noun", "uk": "Інфінітив як іменник", "ru": "Инфинитив как существительное"},
    "explanation": {
      "de": "Ein Infinitiv kann direkt als Nomen benutzt werden. Es ist immer neutral (<g>das</g>) und wird großgeschrieben. Es beschreibt oft allgemeine Aktivitäten.<br>Beispiel: <g>Das Rauchen</g> ist hier verboten. <g>Das Lesen</g> macht Spaß.",
      "en": "An infinitive verb can be used directly as a noun. It is always neutral (<g>das</g>) and capitalized. It usually describes general activities.<br>Example: <g>Das Rauchen</g> ist hier verboten. <g>Das Lesen</g> macht Spaß.",
      "uk": "Інфінітив дієслова можна напряму вживати як іменник. Таке слово завжди середнього роду (<g>das</g>) і пишеться з великої літери, позначаючи процес взагалі.<br>Приклад: <g>Das Rauchen</g> ist hier verboten (Куріння тут заборонено). <g>Das Lesen</g> macht Spaß (Читати приносить задоволення).",
      "ru": "Инфинитив глагола можно напрямую употреблять как существительное. Такое слово всегда среднего рода (<g>das</g>) и пишется с большой буквы, обозначая процесс вообще.<br>Пример: <g>Das Rauchen</g> ist hier verboten (Курение здесь запрещено). <g>Das Lesen</g> macht Spaß (Чтение приносит удовольствие)."
    }
  },
  {
    "id": "nebensatz_mit_nachdem",
    "title": {"de": "Nebensatz mit nachdem", "en": "Subordinate clause with nachdem (after)", "uk": "Підрядне речення з nachdem (після того як)", "ru": "Придаточное предложение с nachdem (после того как)"},
    "explanation": {
      "de": "Der Konnektor <g>nachdem</g> zeigt, dass eine Aktion vor einer anderen passiert (Zeitverschiebung). Wenn der Hauptsatz im Präteritum steht, MUSS der nachdem-Satz im <g>Plusquamperfekt</g> stehen.<br>Beispiel: <g>Nachdem</g> er die Hausaufgabe gemacht <g>hatte</g>, spielte er Fußball.",
      "en": "The connector <g>nachdem</g> shows that one action happens before another. If the main clause is in the simple past, the nachdem-clause MUST use <g>Plusquamperfekt</g>.<br>Example: <g>Nachdem</g> er die Hausaufgabe gemacht <g>hatte</g>, spielte er Fußball.",
      "uk": "Сполучник <g>nachdem</g> означає 'після того як' і вимагає узгодження часів. Якщо головне речення стоїть у минулому часі Präteritum, то підрядне після <g>nachdem</g> обов'язково має стояти в передминулому <g>Plusquamperfekt</g>.<br>Приклад: <g>Nachdem</g> er die Hausaufgabe gemacht <g>hatte</g>, spielte er Fußball.",
      "ru": "Союз <g>nachdem</g> означает 'после того как' и требует согласования времен. Если главное предложение стоит в прошедшем времени Präteritum, то придаточное после <g>nachdem</g> обязательно должно стоять в преждепрошедшем <g>Plusquamperfekt</g>.<br>Пример: <g>Nachdem</g> er die Hausaufgabe gemacht <g>hatte</g>, spielte er Fußball."
    }
  },
  {
    "id": "adjektive_auf_bar_los",
    "title": {"de": "Wortbildung: Adjektive auf -bar und -los", "en": "Word formation: adjectives ending in -bar/-los", "uk": "Творення слів: прикметники на -bar/-los", "ru": "Словообразование: прилагательные на -bar/-los"},
    "explanation": {
      "de": "Suffixe zur Adjektivbildung: <g>-bar</g> bedeutet, dass man etwas machen kann (möglich). <g>-los</g> bedeutet, dass etwas fehlt (ohne etwas).<br>Beispiel: essen -> ess<g>bar</g> (man kann es essen), das Geld -> geld<g>los</g> (ohne Geld), arbeits<g>los</g>.",
      "en": "Suffixes for creating adjectives: <g>-bar</g> means something can be done (able to). <g>-los</g> means something is missing (without / -less).<br>Example: essen -> ess<g>bar</g> (edible), das Geld -> geld<g>los</g> (penniless).",
      "uk": "Суфікси для творення прикметників: <g>-bar</g> означає можливість виконання дії (доступний для чогось), а <g>-los</g> вказує на відсутність чогось (без чогось, аналог префікса без-).<br>Приклад: essen -> ess<g>bar</g> (їстівний), das Geld -> geld<g>los</g> (безгрошовий), arbeits<g>los</g> (безробітний).",
      "ru": "Суффиксы для образования прилагательных: <g>-bar</g> означает возможность выполнения действия (допустимый, выполнимый), а <g>-los</g> указывает на отсутствие чего-либо (без чего-либо, аналог приставки без-).<br>Пример: essen -> ess<g>bar</g> (съедобный), das Geld -> geld<g>los</g> (безденежный), arbeits<g>los</g> (безработный)."
    }
  },
  {
    "id": "passiv_mit_modalverben",
    "title": {"de": "Passiv mit Modalverben", "en": "Passive voice with modal verbs", "uk": "Пасив з модальними дієсловами", "ru": "Пассив с модальными глаголами"},
    "explanation": {
      "de": "Wenn wir Passiv mit einem Modalverb kombinieren, steht das <g>Modalverb</g> konjugiert auf Position 2. Am Satzende steht das <g>Partizip II</g> zusammen mit dem Infinitiv von <g>werden</g>.<br>Beispiel: Das Haus <g>muss renoviert werden</g>.",
      "en": "When combining passive voice with a modal verb, the conjugated <g>modal verb</g> goes to position 2. At the very end of the sentence, we place the <g>Partizip II</g> followed by <g>werden</g>.<br>Example: Das Haus <g>muss renoviert werden</g>.",
      "uk": "При поєднанні пасиву з модальним дієсловом, саме <g>модальне дієслово</g> відмінюється і стоїть на 2-му місці. У самому кінці речення ставиться основне дієслово у формі <g>Partizip II</g> разом із незмінним інфінітивом <g>werden</g>.<br>Приклад: Das Haus <g>muss renoviert werden</g> (Будинок має бути відремонтований).",
      "ru": "При сочетании пассива с модальным глаголом, именно <g>модальный глагол</g> спрягается и стоит на 2-м месте. В самом конце предложения ставится основной глагол в форме <g>Partizip II</g> вместе с неизменяемым инфинитивом <g>werden</g>.<br>Пример: Das Haus <g>muss renoviert werden</g> (Дом должен быть отремонтирован)."
    }
  },
  {
    "id": "praepositionen_mit_genitiv",
    "title": {"de": "Präpositionen mit Genitiv (während, wegen, trotz)", "en": "Prepositions with genitive (während, wegen, trotz)", "uk": "Прийменники з родовим відмінком (während, wegen, trotz)", "ru": "Предлоги с родительным падежом (während, wegen, trotz)"},
    "explanation": {
      "de": "Die Präpositionen <g>während</g> (Zeitdauer), <g>wegen</g> (Grund) und <g>trotz</g> (Gegengrund) brauchen im offiziellen Deutsch immer den <g>Genitiv</g>.<br>Beispiel: <g>Wegen des Regens</g> bleiben wir hier. <g>Trotz der Kälte</g> geht er raus.",
      "en": "The prepositions <g>während</g> (during), <g>wegen</g> (because of), and <g>trotz</g> (in spite of) always require the <g>genitive case</g> in proper German.<br>Example: <g>Wegen des Regens</g> bleiben wir hier. <g>Trotz der Kälte</g> geht er raus.",
      "uk": "Прийменники <g>während</g> (під час), <g>wegen</g> (через, з причини) та <g>trotz</g> (попри, незважаючи на) в літературній німецькій мові завжди вимагають після себе родового відмінка (<g>Genitiv</g>).<br>Приклад: <g>Wegen des Regens</g> (Через дощ). <g>Trotz der Kälte</g> (Попри холод).",
      "ru": "Предлоги <g>während</g> (во время), <g>wegen</g> (из-за) и <g>trotz</g> (несмотря на) в литературном немецком языке всегда требуют после себя родительного падежа (<g>Genitiv</g>).<br>Пример: <g>Wegen des Regens</g> (Из-за дождя). <g>Trotz der Kälte</g> (Несмотря на холод)."
    }
  },
  {
    "id": "adjektivendung_genitiv",
    "title": {"de": "Adjektivendung im Genitiv", "en": "Adjective ending in the genitive case", "uk": "Закінчення прикметника в родовим відмінку", "ru": "Описание прилагательного в родительном падеже"},
    "explanation": {
      "de": "Im Genitiv ist die Adjektivendungen sehr einfach: Nach dem bestimmten oder unbestimmten Artikel bekommen alle maskulinen, neutralen, femininen und Plural-Adjektive immer die Endung <g>-en</g>.<br>Beispiel: wegen des <g>schlechten</g> Wetters, trotz einer <g>großen</g> Pause.",
      "en": "Adjective endings in the genitive case are very simple: After a definite or indefinite article, all genders (masc., neutr., fem.) and plurals always take the ending <g>-en</g>.<br>Example: wegen des <g>schlechten</g> Wetters, trotz einer <g>großen</g> Pause.",
      "uk": "Закінчення прикметників у родовому відмінку (Genitiv) дуже прості: після означеного чи неозначеного артикля абсолютно всі прикметники (чоловічого, середнього, жіночого роду та множини) отримують закінчення <g>-en</g>.<br>Приклад: wegen des <g>schlechten</g> Wetters, trotz einer <g>großen</g> Pause.",
      "ru": "Окончания прилагательных в родительном падеже (Genitiv) очень просты: после определенного или неопределенного артикля абсолютно все прилагательные (мужского, среднего, женского рода и множественного числа) получают окончание <g>-en</g>.<br>Пример: wegen des <g>schlechten</g> Wetters, trotz einer <g>großen</g> Pause."
    }
  },
  {
    "id": "adjektive_auf_voll_reich",
    "title": {"de": "Wortbildung: Adjektive auf -voll und -reich", "en": "Word formation: adjectives ending in -voll/-reich", "uk": "Творення слів: прикметники на -voll/-reich", "ru": "Словообразование: прилагательные на -voll/-reich"},
    "explanation": {
      "de": "Man kann produktive Adjektive bilden, indem man die Suffixe <g>-voll</g> oder <g>-reich</g> an ein Nomen anhängt. Beide bedeuten, dass es 'sehr viel' von diesem Nomen gibt.<br>Beispiel: der Humor -> humor<g>voll</g> (sehr lustig), das Vitamin -> vitamin<g>reich</g> (mit vielen Vitaminen).",
      "en": "You can form adjectives by adding the suffixes <g>-voll</g> or <g>-reich</g> to a noun. Both mean that there is 'a lot' of that noun.<br>Example: der Humor -> humor<g>voll</g>, das Vitamin -> vitamin<g>reich</g>.",
      "uk": "Можна утворювати прикметники, додаючи до іменників суфікси <g>-voll</g> або <g>-reich</g>. Обидва суфікси означають, що всередині чогось є 'дуже багато' цієї якості чи предмету.<br>Приклад: der Humor -> humor<g>voll</g> (сповнений гумору), das Vitamin -> vitamin<g>reich</g> (багатий на вітаміни).",
      "ru": "Можно образовывать прилагательные, добавляя к существительным суффиксы <g>-voll</g> или <g>-reich</g>. Оба суффикса означают, что внутри чего-то содержится 'очень много' этого качества или предмета.<br>Пример: der Humor -> humor<g>voll</g> (полный юмора), das Vitamin -> vitamin<g>reich</g> (богатый витаминами)."
    }
  },
  {
    "id": "n_deklination",
    "title": {"de": "n-Deklination", "en": "n-declension (weak masculine nouns)", "uk": "n-відмінювання (слабкі іменники чоловічого роду)", "ru": "n-склонение (слабые существительные мужского рода)"},
    "explanation": {
      "de": "Einige maskuline Nomen (oft Personen oder Tiere auf -e, -ent, -ist) bekommen in allen Fällen außer dem Nominativ ein extra <g>-n</g> oder <g>-en</g> am Ende des Wortes.<br>Beispiel: Das ist der Kollege (Nom.). Ich helfe dem <g>Kollegen</g> (Dat.). Ich sehe den <g>Kollegen</g> (Akk.).",
      "en": "Some masculine nouns (mostly people or animals ending in -e, -ent, -ist) add an extra <g>-n</g> or <g>-en</g> at the end in all grammatical cases except the Nominative.<br>Example: Das ist der Kollege (Nom.). Ich helfe dem <g>Kollegen</g> (Dat.).",
      "uk": "Група іменників чоловічого роду (переважно назви істот, що закінчуються на -e, -ent, -ist, -at) отримують додаткове закінчення <g>-n</g> або <g>-en</g> у всіх відмінках, окрім називного (Nominativ).<br>Приклад: Das ist der Kollege (Називний). Ich helfe dem <g>Kollegen</g> (Давальний). Ich sehe den <g>Kollegen</g> (Знахідний).",
      "ru": "Группа существительных мужского рода (в основном одушевленные, оканчивающиеся на -e, -ent, -ist, -at) получают дополнительное окончание <g>-n</g> или <g>-en</g> во всех падежах, кроме именительного (Nominativ).<br>Пример: Das ist der Kollege (Именительный). Ich helfe dem <g>Kollegen</g> (Дательный). Ich sehe den <g>Kollegen</g> (Винительный)."
    }
  },
  {
    "id": "relativpronomen_dativ_wdh_b1",
    "title": {"de": "Wiederholung: Relativpronomen (inkl. Dativ)", "en": "Review: relative pronouns (incl. dative)", "uk": "Повторення: відносні займенники (включно з давальним)", "ru": "Повторение: относительные местоимения (включая дательный)"},
    "explanation": {
      "de": "Wiederholung und Erweiterung: Wenn das Nomen im Nebensatz ein Dativ-Objekt braucht, nutzen wir die Relativpronomen <g>dem</g> (maskulin  /  neutral), <g>der</g> (feminin) und <g>denen</g> (Achtung im Plural!). Das Verb steht am Ende.<br>Beispiel: Das sind die Freunde, <g>denen</g> ich helfe.",
      "en": "Review and expansion: If the noun requires a dative object in the relative clause, we use the pronouns <g>dem</g> (masc.  /  neutr.), <g>der</g> (fem.), and <g>denen</g> (watch out for plural!).<br>Example: Das sind die Freunde, <g>denen</g> ich helfe.",
      "uk": "Повторення та розширення: якщо іменник у підрядному реченні вимагає давального відмінка, ми використовуємо відносні займенники <g>dem</g> (чоловічий  /  середній рід), <g>der</g> (жіночий рід) та <g>denen</g> (особлива форма для множини).<br>Приклад: Das sind die Freunde, <g>denen</g> ich helfe (Це друзі, яким я допомагаю).",
      "ru": "Повторение и расширение: если существительное в придаточном предложении требует дательного падежа, мы используем относительные местоимения <g>dem</g> (мужской  /  средний род), <g>der</g> (женский род) и <g>denen</g> (особая форма для множественного числа).<br>Пример: Das sind die Freunde, <g>denen</g> ich helfe (Это друзья, которым я помогаю)."
    }
  },
  {
    "id": "relativsatz_mit_praeposition",
    "title": {"de": "Relativsatz mit Präposition", "en": "Relative clause with a preposition", "uk": "Означальне речення з прийменником", "ru": "Определительное предложение с предлогом"},
    "explanation": {
      "de": "Wenn das Verb im Nebensatz eine feste Präposition hat, steht diese <g>Präposition</g> direkt VOR dem <g>Relativpronomen</g> am Anfang des Nebensatzes. Der Fall (Kasus) hängt von der Präposition ab.<br>Beispiel: Das ist die Frau, <g>mit der</g> ich spreche (mit + Dativ feminin).",
      "en": "If the verb in the relative clause requires a preposition, this <g>preposition</g> is placed directly BEFORE the <g>relative pronoun</g>. The case depends on that preposition.<br>Example: Das ist die Frau, <g>mit der</g> ich spreche (mit + Dativ fem.).",
      "uk": "Якщо дієслово в підрядному реченні керується прийменником, цей <g>прийменник</g> ставиться безпосередньо ПЕРЕД <g>відносним займенником</g> на початку підрядної частини. Відмінок займенника залежить від прийменника.<br>Приклад: Das ist die Frau, <g>mit der</g> ich spreche (mit вимагає давального відмінка жіночого роду -> der).",
      "ru": "Если глагол в придаточном предложении управляется предлогом, этот <g>предлог</g> ставится непосредственно ПЕРЕД <g>относительным местоимением</g> в начале придаточной части. Падеж местоимения зависит от предлога.<br>Пример: Das ist die Frau, <g>mit der</g> ich spreche (mit требует дательного падежа женского рода -> der)."
    }
  },
  {
    "id": "relativsatz_wo_was",
    "title": {"de": "Relativsatz mit wo und was", "en": "Relative clause with wo and was", "uk": "Означальне речення з wo і was", "ru": "Определительное предложение с wo и was"},
    "explanation": {
      "de": "Wir nutzen <g>wo</g> als Relativpronomen nach Ortsnamen oder lokalen Nomen. Wir nutzen <g>was</g> nach unbestimmten Ausdrücken wie 'alles, etwas, nichts' oder Superlativen (das Beste).<br>Beispiel: Das ist alles, <g>was</g> ich weiß. Berlin ist eine Stadt, <g>wo</g> man viel erleben kann.",
      "en": "We use <g>wo</g> as a relative pronoun after city names or locations. We use <g>was</g> after indefinite pronouns like 'alles, etwas, nichts' or abstract superlatives (das Beste).<br>Example: Das ist alles, <g>was</g> ich weiß.",
      "uk": "Ми використовуємо займенник <g>wo</g> після назв міст або локацій. Займенник <g>was</g> використовується після неозначених слів типу 'alles, etwas, nichts' або після найвищого ступеня прикметників (das Beste).<br>Приклад: Das ist alles, <g>was</g> ich weiß (Це все, що я знаю). Berlin ist eine Stadt, <g>wo</g> ich leben möchte.",
      "ru": "Мы используем местоимение <g>wo</g> после названий городов или локаций. Местоимение <g>was</g> используется после неопределенных слов вроде 'alles, etwas, nichts' или после превосходной степени (das Beste).<br>Пример: Das ist alles, <g>was</g> ich weiß (Это все, что я знаю). Berlin ist eine Stadt, <g>wo</g> ich leben möchte."
    }
  },
  {
    "id": "adjektive_super_hoch_ueber_extra",
    "title": {"de": "Wortbildung: Adjektive mit super-, hoch-, über- und extra-", "en": "Word formation: adjectives with super-/hoch-/über-/extra-", "uk": "Творення слів: прикметники з super-/hoch-/über-/extra-", "ru": "Словообразование: прилагательные с super-/hoch-/über-/extra-"},
    "explanation": {
      "de": "Präfixe zur Verstärkung: Wenn man vor ein Adjektiv <g>super-, hoch-, über-</g> oder <g>extra-</g> setzt, bedeutet das 'sehr' oder 'extrem'.<br>Beispiel: modern -> <g>super</g>modern, wichtig -> <g>hoch</g>wichtig, empfindlich -> <g>über</g>empfindlich.",
      "en": "Prefixes for intensification: Placing <g>super-, hoch-, über-</g>, or <g>extra-</g> in front of an adjective amplifies its meaning to 'very' or 'extremely'.<br>Example: modern -> <g>super</g>modern, wichtig -> <g>hoch</g>wichtig.",
      "uk": "Префікси для підсилення значення: якщо додати до прикметника префікси <g>super-, hoch-, über-</g> або <g>extra-</g>, це означатиме 'дуже' або 'екстремально'.<br>Приклад: modern -> <g>super</g>modern (суперсучасний), wichtig -> <g>hoch</g>wichtig (надважливий).",
      "ru": "Префиксы для усиления значения: если добавить к прилагательному префиксы <g>super-, hoch-, über-</g> или <g>extra-</g>, это будет означать 'очень' или 'экстремально'.<br>Пример: modern -> <g>super</g>modern (суперсовременный), wichtig -> <g>hoch</g>wichtig (сверхважный)."
    }
  },
  {
    "id": "adjektivdeklination_ohne_artikel",
    "title": {"de": "Adjektive ohne Artikel", "en": "Adjective endings without an article", "uk": "Відмінювання прикметників без артикля", "ru": "Склонение прилагательных без артикля"},
    "explanation": {
      "de": "Wenn kein Artikel vor dem Nomen steht (Nullartikel), MUSS das Adjektiv selbst das grammatikalische Signal zeigen. Maskulin Nominativ -> <g>-er</g>, neutral Nominativ -> <g>-es</g>, feminin Nominativ -> <g>-e</g>. Dativ Plural ist immer <g>-en</g>.<br>Beispiel: <g>Kalter</g> Kaffee schmeckt nicht. Ich trinke Tee mit <g>warmer</g> Milch.",
      "en": "If there is no article before the noun (null article), the adjective itself MUST carry the grammatical ending. Masculine Nom. -> <g>-er</g>, neutral Nom. -> <g>-es</g>, feminine Nom. -> <g>-e</g>.<br>Example: <g>Kalter</g> Kaffee schmeckt nicht.",
      "uk": "Якщо перед іменником немає жодного артикля (нульовий артикль), прикметник САМ має показати закінчення роду та відмінка. Чоловічий род (Nom.) -> <g>-er</g>, середній (Nom.) -> <g>-es</g>, жіночий (Nom.) -> <g>-e</g>.<br>Приклад: <g>Kalter</g> Kaffee (Холодна кава). <g>Heißes</g> Wasser (Гаряча вода).",
      "ru": "Если перед существительным нет никакого артикля (нулевой артикль), прилагательное САМО должно показать окончание рода и падежа. Мужской род (Nom.) -> <g>-er</g>, средний (Nom.) -> <g>-es</g>, женский (Nom.) -> <g>-e</g>.<br>Пример: <g>Kalter</g> Kaffee (Холодный кофе). <g>Heißes</g> Wasser (Горячая вода)."
    }
  },
  {
    "id": "partizip1_als_adjektiv",
    "title": {"de": "Partizip I als Adjektiv", "en": "Present participle used as an adjective", "uk": "Дієприкметник I як прикметник", "ru": "Причастие I как прилагательное"},
    "explanation": {
      "de": "Das Partizip I beschreibt eine Aktion, die gerade aktiv passiert. Man bildet es mit Infinitiv + <g>-d-</g>. Wenn es vor einem Nomen steht, bekommt es eine normale <g>Adjektivendung</g>.<br>Beispiel: weinen -> ein weinen<g>des</g> Kind (ein Kind, das gerade weint).",
      "en": "The Partizip I represents an ongoing, active action. Form it using the infinitive + <g>-d-</g>. When used before a noun, add standard <g>adjective endings</g>.<br>Example: weinen -> ein weinen<g>des</g> Kind (a child that is currently crying).",
      "uk": "Дієприкметник теперішнього часу (Partizip I) описує тривалу, активну дію, що відбувається прямо зараз. Він утворюється як інфінітив + літера <g>-d-</g>. Перед іменником він отримує звичайні <g>закінчення прикметників</g>.<br>Приклад: weinen -> ein weinen<g>des</g> Kind (дитина, яка плаче).",
      "ru": "Причастие настоящего времени (Partizip I) описывает длительное, активное действие, происходящее прямо сейчас. Оно образуется как инфинитив + буква <g>-d-</g>. Перед существительным оно получает обычные <g>окончания прилагательных</g>.<br>Пример: weinen -> ein weinen<g>des</g> Kind (плачущий ребенок)."
    }
  },
  {
    "id": "partizip2_als_adjektiv",
    "title": {"de": "Partizip II als Adjektiv", "en": "Past participle used as an adjective", "uk": "Дієприкметник II як прикметник", "ru": "Причастие II как прилагательное"},
    "explanation": {
      "de": "Das Partizip II (bekannt aus dem Perfekt) kann auch direkt vor einem Nomen stehen. Es beschreibt eine Aktion, die bereits abgeschlossen oder passiv ist, und braucht eine normale <g>Adjektivendung</g>.<br>Beispiel: kochen -> gekocht -> ein <g>gekochtes</g> Ei (ein Ei, das schon fertig gekocht ist).",
      "en": "The Partizip II (past participle) can be placed directly before a noun. It describes a completed or passive action and requires standard <g>adjective endings</g>.<br>Example: kochen -> gekocht -> ein <g>gekochtes</g> Ei (a boiled egg).",
      "uk": "Дієприкметник минулого часу (Partizip II, відомий нам з Perfekt) може стояти перед іменником. Він описує завершену дію або пасивний стан і вимагає звичайних <g>закінчення прикметників</g>.<br>Приклад: kochen -> gekocht -> ein <g>gekochtes</g> Ei (варене яйце, яке вже зварили).",
      "ru": "Причастие прошедшего времени (Partizip II, известное нам по Perfekt) может стоять перед существительным. Оно описывает завершенное действие или пассивное состояние и требует обычных <g>окончаний прилагательных</g>.<br>Пример: kochen -> gekocht -> ein <g>gekochtes</g> Ei (вареное яйцо, которое уже сварили)."
    }
  },
  {
    "id": "entweder_oder",
    "title": {"de": "entweder … oder  (either … or)", "en": "entweder … oder (either … or)", "uk": "entweder … oder (або … або)", "ru": "entweder … oder (либо … либо)"},
    "explanation": {
      "de": "Ein zweiteiliger Konnektor, der eine Alternative zeigt. Man kann nur eine von zwei Optionen wählen (Entweder Option A <g>oder</g> Option B).<br>Beispiel: Zum Frühstück trinke ich <g>entweder</g> Kaffee <g>oder</g> Tee (Nicht beides).",
      "en": "A two-part connector used to express an alternative. You can only choose one of the two options available.<br>Example: Zum Frühstück trinke ich <g>entweder</g> Kaffee <g>oder</g> Tee.",
      "uk": "Подвійний сполучник, який виражає альтернативу  /  вибір. Можна обрати лише один варіант із двох можливих (або А, або Б).<br>Приклад: Zum Frühstück trinke ich <g>entweder</g> Kaffee <g>oder</g> Tee.",
      "ru": "Двойной союз, выражающий альтернативу  /  выбор. Можно выбрать только один вариант из двух возможных (либо А, либо Б).<br>Пример: Zum Frühstück trinke ich <g>entweder</g> Kaffee <g>oder</g> Tee."
    }
  },
  {
    "id": "satzverbindungen_ueberblick",
    "title": {"de": "Satzverbindungen: Überblick (und, oder, denn, deshalb, trotzdem, weil, dass, wenn, obwohl)", "en": "Sentence connectors: overview (und, oder, denn, deshalb, trotzdem, weil, dass, wenn, obwohl)", "uk": "Сполучники речень: огляд (und, oder, denn, deshalb, trotzdem, weil, dass, wenn, obwohl)", "ru": "Союзы предложений: обзор (und, oder, denn, deshalb, trotzdem, weil, dass, wenn, obwohl)"},
    "explanation": {
      "de": "Großer B1-Überblick aller Konnektoren. Wir unterscheiden drei Typen: 1) Position 0 (<g>und, aber, denn, oder</g>), 2) Hauptsatz-Konnektoren auf Position 1 (<g>deshalb, trotzdem</g> mit Inversion), 3) Nebensatz-Konnektoren (<g>weil, dass, wenn, obwohl</g> mit Verb am Ende).",
      "en": "Comprehensive B1 overview of sentence connectors. We classify three types: 1) Position 0 (<g>und, aber, denn, oder</g>), 2) Main clause connectors at Position 1 (<g>deshalb, trotzdem</g> followed by verb), 3) Subordinate clause connectors (<g>weil, dass, wenn, obwohl</g> with verb at the end).",
      "uk": "Великий загальний огляд сполучників на рівні B1. Ми ділимо їх на три групи: 1) Сурядні на позиції 0 (<g>und, aber, denn, oder</g>), 2) Прислівникові на позиції 1 (<g>deshalb, trotzdem</g>, після яких одразу йде дієслово), 3) Підрядні сполучники (<g>weil, dass, wenn, obwohl</g>), які відправляють дієслово в кінець.",
      "ru": "Большой общий обзор союзов на уровне B1. Мы делим их на три группы: 1) Сочинительные на позиции 0 (<g>und, aber, denn, oder</g>), 2) Наречные на позиции 1 (<g>deshalb, trotzdem</g>, после которых сразу идет глагол), 3) Подчинительные союзы (<g>weil, dass, wenn, obwohl</g>), отправляющие глагол в конец."
    }
  },
  {
    "id": "trennbare_verben_praefixe_wdh_b1",
    "title": {"de": "Wortbildung: trennbare Verben mit mit-, weg-, weiter-, zusammen-, zurück-", "en": "Word formation: separable verbs with mit-/weg-/weiter-/zusammen-/zurück-", "uk": "Творення слів: відокремлювані дієслова з mit-/weg-/weiter-/zusammen-/zurück-", "ru": "Словообразование: отделяемые глаголы с mit-/weg-/weiter-/zusammen-/zurück-"},
    "explanation": {
      "de": "Wiederholung der trennbaren Präfixe, die am Satzende stehen. Die Präfixe verändern die Grundbedeutung des Verbs: <g>mit-</g> (Gemeinsamkeit), <g>weg-</g> (Entfernung), <g>weiter-</g> (Fortsetzung), <g>zurück-</g> (Wiederholung / Retour).<br>Beispiel: Ich <g>komme</g> morgen <g>mit</g>. Wir <g>arbeiten weiter</g>.",
      "en": "Review of separable prefixes that move to the end of the sentence. Prefixes alter the core meaning: <g>mit-</g> (together), <g>weg-</g> (away), <g>weiter-</g> (continue), <g>zurück-</g> (back).<br>Example: Ich <g>komme</g> morgen <g>mit</g>. Wir <g>arbeiten weiter</g>.",
      "uk": "Повторення відокремлюваних префіксів, які йдуть у самий кінець речення в теперішньому часі. Префікси змінюють значення слова: <g>mit-</g> (спільна дія), <g>weg-</g> (віддалення), <g>weiter-</g> (продовження дії), <g>zurück-</g> (повернення).<br>Приклад: Ich <g>komme</g> morgen <g>mit</g>. Wir <g>arbeiten weiter</g>.",
      "ru": "Повторение отделяемых приставок, которые уходят в самый конец предложения в настоящем времени. Приставки меняют значение слова: <g>mit-</g> (совместное действие), <g>weg-</g> (удаление), <g>weiter-</g> (продолжение действия), <g>zurück-</g> (возврат).<br>Пример: Ich <g>komme</g> morgen <g>mit</g>. Wir <g>arbeiten weiter</g>."
    }
  }
];

var CATS = [
  {
    "id": "k1",
    "de": "Neue Nachbarn",
    "en": "New neighbours",
    "uk": "Нові сусіди",
    "ru": "Новые соседи",
    "e": "🏘️"
  },
  {
    "id": "k2",
    "de": "Hier kaufe ich ein.",
    "en": "This is where I shop.",
    "uk": "Тут я роблю покупки.",
    "ru": "Здесь я делаю покупки.",
    "e": "🛒"
  },
  {
    "id": "k3",
    "de": "Wir sind für Sie da.",
    "en": "We are here for you.",
    "uk": "Ми тут для вас.",
    "ru": "Мы здесь для вас.",
    "e": "🏦"
  },
  {
    "id": "k4",
    "de": "Schmeckt's?",
    "en": "Does it taste good?",
    "uk": "Смачно?",
    "ru": "Вкусно?",
    "e": "🍽️"
  },
  {
    "id": "k5",
    "de": "Ah, so ist das!",
    "en": "Ah, that's how it is!",
    "uk": "Ах, ось як!",
    "ru": "Ах, вот как!",
    "e": "🌍"
  },
  {
    "id": "k6",
    "de": "Im Krankenhaus",
    "en": "At the hospital",
    "uk": "У лікарні",
    "ru": "В больнице",
    "e": "🏥"
  },
  {
    "id": "k7",
    "de": "Alles für die Umwelt",
    "en": "Everything for the environment",
    "uk": "Все для довкілля",
    "ru": "Всё для окружающей среды",
    "e": "🌱"
  },
  {
    "id": "k8",
    "de": "Lust auf Kultur?",
    "en": "In the mood for culture?",
    "uk": "Хочеш культури?",
    "ru": "Хочешь культуры?",
    "e": "🎭"
  },
  {
    "id": "k9",
    "de": "Eine neue Arbeit!",
    "en": "A new job!",
    "uk": "Нова робота!",
    "ru": "Новая работа!",
    "e": "💼"
  },
  {
    "id": "k10",
    "de": "Sport und Bewegung",
    "en": "Sport and exercise",
    "uk": "Спорт і рух",
    "ru": "Спорт и движение",
    "e": "🏃"
  },
  {
    "id": "k11",
    "de": "Mütter, Väter, Kinder",
    "en": "Mothers, fathers, children",
    "uk": "Матері, батьки, діти",
    "ru": "Матери, отцы, дети",
    "e": "👨‍👩‍👧"
  },
  {
    "id": "k12",
    "de": "Ankommen im Beruf",
    "en": "Settling into a career",
    "uk": "Влаштування в професії",
    "ru": "Становление в профессии",
    "e": "👔"
  },
  {
    "id": "k13",
    "de": "Freiwillig",
    "en": "Volunteering",
    "uk": "Волонтерство",
    "ru": "Волонтёрство",
    "e": "🤝"
  },
  {
    "id": "k14",
    "de": "Ein neues Zuhause",
    "en": "A new home",
    "uk": "Новий дім",
    "ru": "Новый дом",
    "e": "🏠"
  },
  {
    "id": "k15",
    "de": "Hier bleibe ich.",
    "en": "Iʼm staying here.",
    "uk": "Я залишаюся тут.",
    "ru": "Я остаюсь здесь.",
    "e": "🌍"
  },
  {
    "id": "k16",
    "de": "Das haben wir uns verdient!",
    "en": "Weʼve earned this!",
    "uk": "Ми це заслужили!",
    "ru": "Мы это заслужили!",
    "e": "🎉"
  }];

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
// "Die neue Linie 1" B1.1, Kapitel 1–8 (за виданням Klett, KB+UB)

var LESSONS = [
  {
    "id": "k1m1",
    "chapter": 1,
    "module": 1,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Ein Haus – viele Menschen",
      "uk": "Один будинок – багато людей",
      "en": "One house – many people",
      "ru": "Один дом – много людей"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k1_003",
      "k1_007",
      "k1_008"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k1m2",
    "chapter": 1,
    "module": 2,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Meine neuen Nachbarn",
      "uk": "Мої нові сусіди",
      "en": "My new neighbours",
      "ru": "Мои новые соседи"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "wechselpraepositionen_wdh_b1",
    "cardIds": [
      "k1_001",
      "k1_002"
    ],
    "unlockAfter": "k1m1",
    "sbCards": []
  },
  {
    "id": "k1m3",
    "chapter": 1,
    "module": 3,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Ich habe eine Bitte.",
      "uk": "У мене є прохання.",
      "en": "I have a request.",
      "ru": "У меня есть просьба."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "hoefliche_bitten_konjunktiv_b1",
    "cardIds": [
      "k1_012",
      "k1_013"
    ],
    "unlockAfter": "k1m2",
    "sbCards": []
  },
  {
    "id": "k1m4",
    "chapter": 1,
    "module": 4,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Gut zusammenleben",
      "uk": "Добре жити разом",
      "en": "Living together well",
      "ru": "Хорошо жить вместе"
    },
    "skills": [
      "Sprechen",
      "Schreiben"
    ],
    "grammar": "infinitiv_mit_zu",
    "cardIds": [
      "k1_006",
      "k1_015"
    ],
    "unlockAfter": "k1m3",
    "sbCards": []
  },
  {
    "id": "k1m5",
    "chapter": 1,
    "module": 5,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "In der Hausordnung steht …",
      "uk": "У правилах будинку написано …",
      "en": "The house rules say …",
      "ru": "В правилах дома написано …"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "modalverben_wdh_b1",
    "cardIds": [
      "k1_004",
      "k1_005",
      "k1_009"
    ],
    "unlockAfter": "k1m4",
    "sbCards": []
  },
  {
    "id": "k1m6",
    "chapter": 1,
    "module": 6,
    "chapterTitle": {
      "de": "Neue Nachbarn",
      "uk": "Нові сусіди",
      "en": "New neighbours",
      "ru": "Новые соседи"
    },
    "title": {
      "de": "Das geht doch nicht …",
      "uk": "Так не можна …",
      "en": "That's just not okay …",
      "ru": "Так нельзя …"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "sowohl_als_auch_weder_noch",
    "cardIds": [
      "k1_010",
      "k1_011",
      "k1_014"
    ],
    "unlockAfter": "k1m5",
    "sbCards": []
  },
  {
    "id": "k2m1",
    "chapter": 2,
    "module": 1,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Wir brauchen noch …",
      "uk": "Нам ще потрібно …",
      "en": "We still need …",
      "ru": "Нам ещё нужно …"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k2_015",
      "k2_008"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k2m2",
    "chapter": 2,
    "module": 2,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "So kaufe ich gern ein.",
      "uk": "Так я люблю робити покупки.",
      "en": "This is how I like to shop.",
      "ru": "Так я люблю делать покупки."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "reflexivpronomen_akkusativ_wdh_b1",
    "cardIds": [
      "k2_012",
      "k2_013"
    ],
    "unlockAfter": "k2m1",
    "sbCards": []
  },
  {
    "id": "k2m3",
    "chapter": 2,
    "module": 3,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Da ist leider ein Fehler.",
      "uk": "На жаль, тут помилка.",
      "en": "There's unfortunately a mistake.",
      "ru": "К сожалению, здесь ошибка."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "relativsatz_nominativ_sondern",
    "cardIds": [
      "k2_001",
      "k2_002",
      "k2_010"
    ],
    "unlockAfter": "k2m2",
    "sbCards": []
  },
  {
    "id": "k2m4",
    "chapter": 2,
    "module": 4,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Die Bestellung",
      "uk": "Замовлення",
      "en": "The order",
      "ru": "Заказ"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "komposita_nomen_nomen",
    "cardIds": [
      "k2_009",
      "k2_014"
    ],
    "unlockAfter": "k2m3",
    "sbCards": []
  },
  {
    "id": "k2m5",
    "chapter": 2,
    "module": 5,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Bitte bezahlen Sie umgehend.",
      "uk": "Будь ласка, оплатіть негайно.",
      "en": "Please pay immediately.",
      "ru": "Пожалуйста, оплатите немедленно."
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "relativsatz_akkusativ_b1",
    "cardIds": [
      "k2_003",
      "k2_004",
      "k2_005"
    ],
    "unlockAfter": "k2m4",
    "sbCards": []
  },
  {
    "id": "k2m6",
    "chapter": 2,
    "module": 6,
    "chapterTitle": {
      "de": "Hier kaufe ich ein.",
      "uk": "Тут я роблю покупки.",
      "en": "This is where I shop.",
      "ru": "Здесь я делаю покупки."
    },
    "title": {
      "de": "Einkaufstipps",
      "uk": "Поради для покупок",
      "en": "Shopping tips",
      "ru": "Советы по покупкам"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k2_006",
      "k2_007",
      "k2_011"
    ],
    "unlockAfter": "k2m5",
    "sbCards": []
  },
  {
    "id": "k3m1",
    "chapter": 3,
    "module": 1,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Was kann man da machen?",
      "uk": "Що можна з цим зробити?",
      "en": "What can you do about it?",
      "ru": "Что можно с этим сделать?"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "modalverben_vermutung",
    "cardIds": [
      "k3_001",
      "k3_002"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k3m2",
    "chapter": 3,
    "module": 2,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Ich brauche ein eigenes Konto.",
      "uk": "Мені потрібен власний рахунок.",
      "en": "I need my own account.",
      "ru": "Мне нужен собственный счёт."
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "genitiv",
    "cardIds": [
      "k3_003",
      "k3_004"
    ],
    "unlockAfter": "k3m1",
    "sbCards": []
  },
  {
    "id": "k3m3",
    "chapter": 3,
    "module": 3,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Hilfe – meine Bankkarte ist weg!",
      "uk": "Допоможіть – моя банківська картка зникла!",
      "en": "Help – my bank card is gone!",
      "ru": "Помогите – моя банковская карта пропала!"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k3_005",
      "k3_006"
    ],
    "unlockAfter": "k3m2",
    "sbCards": []
  },
  {
    "id": "k3m4",
    "chapter": 3,
    "module": 4,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Brauchen wir diese Versicherung?",
      "uk": "Чи потрібне нам це страхування?",
      "en": "Do we need this insurance?",
      "ru": "Нужна ли нам эта страховка?"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nebensatz_mit_obwohl",
    "cardIds": [
      "k3_007",
      "k3_008"
    ],
    "unlockAfter": "k3m3",
    "sbCards": []
  },
  {
    "id": "k3m5",
    "chapter": 3,
    "module": 5,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Ein Gespräch mit der Versicherungsvertreterin",
      "uk": "Розмова з представницею страхової компанії",
      "en": "A conversation with the insurance agent",
      "ru": "Разговор с представителем страховой компании"
    },
    "skills": [
      "Hören",
      "Schreiben"
    ],
    "grammar": "komposita_verb_nomen",
    "cardIds": [
      "k3_009",
      "k3_010",
      "k3_011"
    ],
    "unlockAfter": "k3m4",
    "sbCards": []
  },
  {
    "id": "k3m6",
    "chapter": 3,
    "module": 6,
    "chapterTitle": {
      "de": "Wir sind für Sie da.",
      "uk": "Ми тут для вас.",
      "en": "We are here for you.",
      "ru": "Мы здесь для вас."
    },
    "title": {
      "de": "Obwohl ich rechtzeitig gekündigt habe, …",
      "uk": "Хоча я вчасно розірвав договір, …",
      "en": "Although I cancelled in time, …",
      "ru": "Хотя я вовремя расторг договор, …"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "konnektoren_wdh_b1",
    "cardIds": [
      "k3_012",
      "k3_013",
      "k3_014",
      "k3_015"
    ],
    "unlockAfter": "k3m5",
    "sbCards": []
  },
  {
    "id": "k4m1",
    "chapter": 4,
    "module": 1,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Essgewohnheiten",
      "uk": "Харчові звички",
      "en": "Eating habits",
      "ru": "Привычки питания"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k4_001",
      "k4_004"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k4m2",
    "chapter": 4,
    "module": 2,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Gab es bei euch auch Pizza?",
      "uk": "У вас теж була піца?",
      "en": "Did you have pizza too?",
      "ru": "У вас тоже была пицца?"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "praeteritum_wdh_b1",
    "cardIds": [
      "k4_002",
      "k4_003"
    ],
    "unlockAfter": "k4m1",
    "sbCards": []
  },
  {
    "id": "k4m3",
    "chapter": 4,
    "module": 3,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Früher und heute",
      "uk": "Раніше і сьогодні",
      "en": "Then and now",
      "ru": "Раньше и сегодня"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "deshalb_deswegen_trotzdem",
    "cardIds": [
      "k4_012",
      "k4_013"
    ],
    "unlockAfter": "k4m2",
    "sbCards": []
  },
  {
    "id": "k4m4",
    "chapter": 4,
    "module": 4,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Zusammen kochen und essen",
      "uk": "Готуємо та їмо разом",
      "en": "Cooking and eating together",
      "ru": "Готовим и едим вместе"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "komposita_fugenelemente",
    "cardIds": [
      "k4_005",
      "k4_006",
      "k4_007"
    ],
    "unlockAfter": "k4m3",
    "sbCards": []
  },
  {
    "id": "k4m5",
    "chapter": 4,
    "module": 5,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Ergebnisse einer Umfrage",
      "uk": "Результати опитування",
      "en": "Survey results",
      "ru": "Результаты опроса"
    },
    "skills": [
      "Lesen"
    ],
    "grammar": "genitiv_alternativen",
    "cardIds": [
      "k4_008"
    ],
    "unlockAfter": "k4m4",
    "sbCards": []
  },
  {
    "id": "k4m6",
    "chapter": 4,
    "module": 6,
    "chapterTitle": {
      "de": "Schmeckt's?",
      "uk": "Смачно?",
      "en": "Does it taste good?",
      "ru": "Вкусно?"
    },
    "title": {
      "de": "Gesunde Ernährung?",
      "uk": "Здорове харчування?",
      "en": "Healthy eating?",
      "ru": "Здоровое питание?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k4_009",
      "k4_010",
      "k4_011",
      "k4_014",
      "k4_015"
    ],
    "unlockAfter": "k4m5",
    "sbCards": []
  },
  {
    "id": "k5m1",
    "chapter": 5,
    "module": 1,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Das hat mich überrascht!",
      "uk": "Це мене здивувало!",
      "en": "That surprised me!",
      "ru": "Это меня удивило!"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_seit_seitdem",
    "cardIds": [
      "k5_001",
      "k5_002"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k5m2",
    "chapter": 5,
    "module": 2,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "So viele Sprachen!",
      "uk": "Так багато мов!",
      "en": "So many languages!",
      "ru": "Так много языков!"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "verben_praep_personen_sachen",
    "cardIds": [
      "k5_007",
      "k5_012"
    ],
    "unlockAfter": "k5m1",
    "sbCards": []
  },
  {
    "id": "k5m3",
    "chapter": 5,
    "module": 3,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Das war ein tolles Erlebnis.",
      "uk": "Це був чудовий досвід.",
      "en": "That was a great experience.",
      "ru": "Это был отличный опыт."
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nebensatz_mit_bis",
    "cardIds": [
      "k5_009",
      "k5_013"
    ],
    "unlockAfter": "k5m2",
    "sbCards": []
  },
  {
    "id": "k5m4",
    "chapter": 5,
    "module": 4,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Mein Alltag in Deutschland",
      "uk": "Моє повсякденне життя в Німеччині",
      "en": "My everyday life in Germany",
      "ru": "Моя повседневная жизнь в Германии"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "verben_als_nomen",
    "cardIds": [
      "k5_010",
      "k5_011"
    ],
    "unlockAfter": "k5m3",
    "sbCards": []
  },
  {
    "id": "k5m5",
    "chapter": 5,
    "module": 5,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Worüber hast du dich geärgert?",
      "uk": "Через що ти розсердився?",
      "en": "What annoyed you?",
      "ru": "Из-за чего ты разозлился?"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "praepositionaladverbien_b1",
    "cardIds": [
      "k5_003",
      "k5_008"
    ],
    "unlockAfter": "k5m4",
    "sbCards": []
  },
  {
    "id": "k5m6",
    "chapter": 5,
    "module": 6,
    "chapterTitle": {
      "de": "Ah, so ist das!",
      "uk": "Ах, ось як!",
      "en": "Ah, that's how it is!",
      "ru": "Ах, вот как!"
    },
    "title": {
      "de": "Wie macht ihr das hier?",
      "uk": "Як це роблять тут?",
      "en": "How do you do that here?",
      "ru": "Как это делают здесь?"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k5_004",
      "k5_005",
      "k5_006",
      "k5_014",
      "k5_015"
    ],
    "unlockAfter": "k5m5",
    "sbCards": []
  },
  {
    "id": "k6m1",
    "chapter": 6,
    "module": 1,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k6_001",
      "k6_003"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k6m2",
    "chapter": 6,
    "module": 2,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Gespräche im Krankenhaus",
      "uk": "Розмови в лікарні",
      "en": "Conversations at the hospital",
      "ru": "Разговоры в больнице"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "futur_werden",
    "cardIds": [
      "k6_005",
      "k6_008"
    ],
    "unlockAfter": "k6m1",
    "sbCards": []
  },
  {
    "id": "k6m3",
    "chapter": 6,
    "module": 3,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Ein Notfall",
      "uk": "Надзвичайна ситуація",
      "en": "An emergency",
      "ru": "Экстренный случай"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nicht_nur_sondern_auch",
    "cardIds": [
      "k6_002",
      "k6_013",
      "k6_009"
    ],
    "unlockAfter": "k6m2",
    "sbCards": []
  },
  {
    "id": "k6m4",
    "chapter": 6,
    "module": 4,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "In der Notaufnahme",
      "uk": "У приймальному відділенні",
      "en": "At the emergency room",
      "ru": "В приёмном покое"
    },
    "skills": [
      "Hören",
      "Schreiben"
    ],
    "grammar": "satz_mit_um_zu",
    "cardIds": [
      "k6_010",
      "k6_004"
    ],
    "unlockAfter": "k6m3",
    "sbCards": []
  },
  {
    "id": "k6m5",
    "chapter": 6,
    "module": 5,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Wir müssen operieren.",
      "uk": "Нам потрібно оперувати.",
      "en": "We have to operate.",
      "ru": "Нам нужно оперировать."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_mit_damit_wdh_b1",
    "cardIds": [
      "k6_006",
      "k6_011"
    ],
    "unlockAfter": "k6m4",
    "sbCards": []
  },
  {
    "id": "k6m6",
    "chapter": 6,
    "module": 6,
    "chapterTitle": {
      "de": "Im Krankenhaus",
      "uk": "У лікарні",
      "en": "At the hospital",
      "ru": "В больнице"
    },
    "title": {
      "de": "Wir tun alles für Ihre Gesundheit.",
      "uk": "Ми робимо все для вашого здоров'я.",
      "en": "We do everything for your health.",
      "ru": "Мы делаем всё для вашего здоровья."
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nomen_auf_heit_keit",
    "cardIds": [
      "k6_007",
      "k6_012",
      "k6_014",
      "k6_015"
    ],
    "unlockAfter": "k6m5",
    "sbCards": []
  },
  {
    "id": "k7m1",
    "chapter": 7,
    "module": 1,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Und die Umwelt?",
      "uk": "А що з довкіллям?",
      "en": "And the environment?",
      "ru": "А что с окружающей средой?"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k7_001",
      "k7_003"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k7m2",
    "chapter": 7,
    "module": 2,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Wir müssen Energie sparen!",
      "uk": "Ми повинні економити енергію!",
      "en": "We must save energy!",
      "ru": "Мы должны экономить энергию!"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "passiv_praesens_b1",
    "cardIds": [
      "k7_010",
      "k7_011",
      "k7_013"
    ],
    "unlockAfter": "k7m1",
    "sbCards": []
  },
  {
    "id": "k7m3",
    "chapter": 7,
    "module": 3,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Da stimme ich dir zu.",
      "uk": "Тут я з тобою згоден/згодна.",
      "en": "I agree with you there.",
      "ru": "Тут я с тобой согласен/согласна."
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "perfekt_wdh_b1",
    "cardIds": [
      "k7_012",
      "k7_014"
    ],
    "unlockAfter": "k7m2",
    "sbCards": []
  },
  {
    "id": "k7m4",
    "chapter": 7,
    "module": 4,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Bauerinnen und Bauern mit Herz",
      "uk": "Фермери з покликанням",
      "en": "Farmers with heart",
      "ru": "Фермеры с призванием"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nomen_auf_ung",
    "cardIds": [
      "k7_008",
      "k7_009"
    ],
    "unlockAfter": "k7m3",
    "sbCards": []
  },
  {
    "id": "k7m5",
    "chapter": 7,
    "module": 5,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Das wird auf dem Hof gemacht.",
      "uk": "Це роблять на фермі.",
      "en": "This is what's done on the farm.",
      "ru": "Это делают на ферме."
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": "passiv_praesens_b1",
    "cardIds": [
      "k7_004",
      "k7_005",
      "k7_006"
    ],
    "unlockAfter": "k7m4",
    "sbCards": []
  },
  {
    "id": "k7m6",
    "chapter": 7,
    "module": 6,
    "chapterTitle": {
      "de": "Alles für die Umwelt",
      "uk": "Все для довкілля",
      "en": "Everything for the environment",
      "ru": "Всё для окружающей среды"
    },
    "title": {
      "de": "Was ist mit dem Klima los?",
      "uk": "Що відбувається з кліматом?",
      "en": "What's going on with the climate?",
      "ru": "Что происходит с климатом?"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [
      "k7_002",
      "k7_007",
      "k7_015"
    ],
    "unlockAfter": "k7m5",
    "sbCards": []
  },
  {
    "id": "k8m1",
    "chapter": 8,
    "module": 1,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Da möchte ich auch hin …",
      "uk": "Я теж хочу туди піти …",
      "en": "I'd like to go there too …",
      "ru": "Я тоже хочу туда пойти …"
    },
    "skills": [
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k8_001",
      "k8_011"
    ],
    "unlockAfter": null,
    "sbCards": []
  },
  {
    "id": "k8m2",
    "chapter": 8,
    "module": 2,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Das ist schon in einer Woche!",
      "uk": "Це вже через тиждень!",
      "en": "That's already in a week!",
      "ru": "Это уже через неделю!"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "verben_mit_praep_wdh_b1",
    "cardIds": [
      "k8_008",
      "k8_002"
    ],
    "unlockAfter": "k8m1",
    "sbCards": []
  },
  {
    "id": "k8m3",
    "chapter": 8,
    "module": 3,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Das Festival war toll.",
      "uk": "Фестиваль був чудовий.",
      "en": "The festival was great.",
      "ru": "Фестиваль был отличный."
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "fragewoerter_wor_dar",
    "cardIds": [
      "k8_003",
      "k8_012"
    ],
    "unlockAfter": "k8m2",
    "sbCards": []
  },
  {
    "id": "k8m4",
    "chapter": 8,
    "module": 4,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Eine E-Mail von der Bibliothek",
      "uk": "Електронний лист від бібліотеки",
      "en": "An email from the library",
      "ru": "Письмо от библиотеки"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k8_004",
      "k8_015"
    ],
    "unlockAfter": "k8m3",
    "sbCards": []
  },
  {
    "id": "k8m5",
    "chapter": 8,
    "module": 5,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Die Bibliotheksführung",
      "uk": "Екскурсія по бібліотеці",
      "en": "The library tour",
      "ru": "Экскурсия по библиотеке"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": "interesse_denn_eigentlich",
    "cardIds": [
      "k8_005",
      "k8_013"
    ],
    "unlockAfter": "k8m4",
    "sbCards": []
  },
  {
    "id": "k8m6",
    "chapter": 8,
    "module": 6,
    "chapterTitle": {
      "de": "Lust auf Kultur?",
      "uk": "Хочеш культури?",
      "en": "In the mood for culture?",
      "ru": "Хочешь культуры?"
    },
    "title": {
      "de": "Graffiti – Kunst für die Straße",
      "uk": "Графіті – мистецтво для вулиці",
      "en": "Graffiti – art for the street",
      "ru": "Графити – искусство для улицы"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektive_mit_un",
    "cardIds": [
      "k8_006",
      "k8_007",
      "k8_009",
      "k8_010",
      "k8_014"
    ],
    "unlockAfter": "k8m5",
    "sbCards": []
  },
  {
    "id": "k9m1",
    "chapter": 9,
    "module": 1,
    "chapterTitle": {
      "de": "Eine neue Arbeit!",
      "uk": "Нова робота!",
      "en": "A new job!",
      "ru": "Новая работа!"
    },
    "title": {
      "de": "Ich hätte gern eine neue Stelle.",
      "uk": "Я хотів би нову посаду.",
      "en": "Iʼd like a new position.",
      "ru": "Я хотел бы новую должность."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "konjunktiv2_wuensche_b1",
    "cardIds": [
      "k9_001",
      "k9_002",
      "k9_007"
    ],
    "unlockAfter": "k8m6",
    "sbCards": []
  },
  {
    "id": "k9m2",
    "chapter": 9,
    "module": 2,
    "chapterTitle": {
      "de": "Eine neue Arbeit!",
      "uk": "Нова робота!",
      "en": "A new job!",
      "ru": "Новая работа!"
    },
    "title": {
      "de": "Wenn ich mehr Zeit hätte …",
      "uk": "Якби я мав більше часу…",
      "en": "If I had more time …",
      "ru": "Если бы у меня было больше времени…"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "nebensatz_wenn_konjunktiv2_irreal",
    "cardIds": [
      "k9_003",
      "k9_008"
    ],
    "unlockAfter": "k9m1",
    "sbCards": []
  },
  {
    "id": "k9m3",
    "chapter": 9,
    "module": 3,
    "chapterTitle": {
      "de": "Eine neue Arbeit!",
      "uk": "Нова робота!",
      "en": "A new job!",
      "ru": "Новая работа!"
    },
    "title": {
      "de": "Die Bewerbung schreiben",
      "uk": "Написання заяви про прийом на роботу",
      "en": "Writing a job application",
      "ru": "Написание заявления о приёме на работу"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "verben_praep_dass_satz",
    "cardIds": [
      "k9_004",
      "k9_005",
      "k9_009"
    ],
    "unlockAfter": "k9m2",
    "sbCards": []
  },
  {
    "id": "k9m4",
    "chapter": 9,
    "module": 4,
    "chapterTitle": {
      "de": "Eine neue Arbeit!",
      "uk": "Нова робота!",
      "en": "A new job!",
      "ru": "Новая работа!"
    },
    "title": {
      "de": "Das Vorstellungsgespräch",
      "uk": "Співбесіда",
      "en": "The job interview",
      "ru": "Собеседование"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "adjektive_auf_ig_isch",
    "cardIds": [
      "k9_010",
      "k9_011"
    ],
    "unlockAfter": "k9m3",
    "sbCards": []
  },
  {
    "id": "k9m5",
    "chapter": 9,
    "module": 5,
    "chapterTitle": {
      "de": "Eine neue Arbeit!",
      "uk": "Нова робота!",
      "en": "A new job!",
      "ru": "Новая работа!"
    },
    "title": {
      "de": "Arbeit und Alltag",
      "uk": "Робота і повсякдення",
      "en": "Work and everyday life",
      "ru": "Работа и повседневность"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k9_006",
      "k9_012",
      "k9_013",
      "k9_014",
      "k9_015",
      "k9_016"
    ],
    "unlockAfter": "k9m4",
    "sbCards": []
  },
  {
    "id": "k10m1",
    "chapter": 10,
    "module": 1,
    "chapterTitle": {
      "de": "Sport und Bewegung",
      "uk": "Спорт і рух",
      "en": "Sport and exercise",
      "ru": "Спорт и движение"
    },
    "title": {
      "de": "Bevor der Wettkampf beginnt",
      "uk": "Перш ніж почнеться змагання",
      "en": "Before the competition begins",
      "ru": "Прежде чем начнётся соревнование"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_mit_bevor",
    "cardIds": [
      "k10_001",
      "k10_002",
      "k10_005"
    ],
    "unlockAfter": "k9m5",
    "sbCards": []
  },
  {
    "id": "k10m2",
    "chapter": 10,
    "module": 2,
    "chapterTitle": {
      "de": "Sport und Bewegung",
      "uk": "Спорт і рух",
      "en": "Sport and exercise",
      "ru": "Спорт и движение"
    },
    "title": {
      "de": "Der neue Trainer, das neue Team",
      "uk": "Новий тренер, нова команда",
      "en": "The new coach, the new team",
      "ru": "Новый тренер, новая команда"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "adjektivdeklination_bestimmter_artikel",
    "cardIds": [
      "k10_003",
      "k10_004"
    ],
    "unlockAfter": "k10m1",
    "sbCards": []
  },
  {
    "id": "k10m3",
    "chapter": 10,
    "module": 3,
    "chapterTitle": {
      "de": "Sport und Bewegung",
      "uk": "Спорт і рух",
      "en": "Sport and exercise",
      "ru": "Спорт и движение"
    },
    "title": {
      "de": "Wer läuft am schnellsten?",
      "uk": "Хто біжить найшвидше?",
      "en": "Who runs the fastest?",
      "ru": "Кто бежит быстрее всех?"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "komparativ_superlativ_vor_nomen",
    "cardIds": [
      "k10_006",
      "k10_007"
    ],
    "unlockAfter": "k10m2",
    "sbCards": []
  },
  {
    "id": "k10m4",
    "chapter": 10,
    "module": 4,
    "chapterTitle": {
      "de": "Sport und Bewegung",
      "uk": "Спорт і рух",
      "en": "Sport and exercise",
      "ru": "Спорт и движение"
    },
    "title": {
      "de": "Der Spendenlauf",
      "uk": "Благодійний забіг",
      "en": "The charity run",
      "ru": "Благотворительный забег"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "adjektive_als_nomen",
    "cardIds": [
      "k10_008",
      "k10_009",
      "k10_014"
    ],
    "unlockAfter": "k10m3",
    "sbCards": []
  },
  {
    "id": "k10m5",
    "chapter": 10,
    "module": 5,
    "chapterTitle": {
      "de": "Sport und Bewegung",
      "uk": "Спорт і рух",
      "en": "Sport and exercise",
      "ru": "Спорт и движение"
    },
    "title": {
      "de": "Vorschläge zum Sport",
      "uk": "Пропозиції щодо спорту",
      "en": "Suggestions about sport",
      "ru": "Предложения о спорте"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k10_010",
      "k10_011",
      "k10_012",
      "k10_013",
      "k10_015",
      "k10_016"
    ],
    "unlockAfter": "k10m4",
    "sbCards": []
  },
  {
    "id": "k11m1",
    "chapter": 11,
    "module": 1,
    "chapterTitle": {
      "de": "Mütter, Väter, Kinder",
      "uk": "Матері, батьки, діти",
      "en": "Mothers, fathers, children",
      "ru": "Матери, отцы, дети"
    },
    "title": {
      "de": "Ein Kind kommt zur Welt",
      "uk": "Народжується дитина",
      "en": "A child is born",
      "ru": "Рождается ребёнок"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [
      "k11_001",
      "k11_009",
      "k11_010"
    ],
    "unlockAfter": "k10m5",
    "sbCards": []
  },
  {
    "id": "k11m2",
    "chapter": 11,
    "module": 2,
    "chapterTitle": {
      "de": "Mütter, Väter, Kinder",
      "uk": "Матері, батьки, діти",
      "en": "Mothers, fathers, children",
      "ru": "Матери, отцы, дети"
    },
    "title": {
      "de": "Ich arbeite, während mein Mann kocht.",
      "uk": "Я працюю, поки мій чоловік готує.",
      "en": "I work while my husband cooks.",
      "ru": "Я работаю, пока мой муж готовит."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_mit_waehrend",
    "cardIds": [
      "k11_002",
      "k11_006"
    ],
    "unlockAfter": "k11m1",
    "sbCards": []
  },
  {
    "id": "k11m3",
    "chapter": 11,
    "module": 3,
    "chapterTitle": {
      "de": "Mütter, Väter, Kinder",
      "uk": "Матері, батьки, діти",
      "en": "Mothers, fathers, children",
      "ru": "Матери, отцы, дети"
    },
    "title": {
      "de": "Man muss nicht alles allein machen.",
      "uk": "Не все треба робити самому.",
      "en": "You donʼt have to do everything alone.",
      "ru": "Не всё нужно делать самому."
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "nicht_brauchen_zu",
    "cardIds": [
      "k11_003",
      "k11_007"
    ],
    "unlockAfter": "k11m2",
    "sbCards": []
  },
  {
    "id": "k11m4",
    "chapter": 11,
    "module": 4,
    "chapterTitle": {
      "de": "Mütter, Väter, Kinder",
      "uk": "Матері, батьки, діти",
      "en": "Mothers, fathers, children",
      "ru": "Матери, отцы, дети"
    },
    "title": {
      "de": "Frauenrollen, Männerrollen",
      "uk": "Жіночі ролі, чоловічі ролі",
      "en": "Womenʼs roles, menʼs roles",
      "ru": "Женские роли, мужские роли"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "indefinitpronomen_possessivpronomen",
    "cardIds": [
      "k11_004",
      "k11_005",
      "k11_008"
    ],
    "unlockAfter": "k11m3",
    "sbCards": []
  },
  {
    "id": "k11m5",
    "chapter": 11,
    "module": 5,
    "chapterTitle": {
      "de": "Mütter, Väter, Kinder",
      "uk": "Матері, батьки, діти",
      "en": "Mothers, fathers, children",
      "ru": "Матери, отцы, дети"
    },
    "title": {
      "de": "Familienmodelle heute",
      "uk": "Сучасні моделі сімʼї",
      "en": "Family models today",
      "ru": "Модели семьи сегодня"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "nomen_auf_chen",
    "cardIds": [
      "k11_011",
      "k11_012",
      "k11_013",
      "k11_014",
      "k11_015",
      "k11_016"
    ],
    "unlockAfter": "k11m4",
    "sbCards": []
  },
  {
    "id": "k12m1",
    "chapter": 12,
    "module": 1,
    "chapterTitle": {
      "de": "Ankommen im Beruf",
      "uk": "Влаштування в професії",
      "en": "Settling into a career",
      "ru": "Становление в профессии"
    },
    "title": {
      "de": "Nachdem ich angekommen war …",
      "uk": "Після того як я приїхав…",
      "en": "After I had arrived …",
      "ru": "После того как я приехал…"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "nebensatz_mit_nachdem",
    "cardIds": [
      "k12_001",
      "k12_002"
    ],
    "unlockAfter": "k11m5",
    "sbCards": []
  },
  {
    "id": "k12m2",
    "chapter": 12,
    "module": 2,
    "chapterTitle": {
      "de": "Ankommen im Beruf",
      "uk": "Влаштування в професії",
      "en": "Settling into a career",
      "ru": "Становление в профессии"
    },
    "title": {
      "de": "Bevor ich hier war, hatte ich schon gearbeitet.",
      "uk": "До того як я опинився тут, я вже працював.",
      "en": "Before I was here, I had already worked.",
      "ru": "До того как я оказался здесь, я уже работал."
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "plusquamperfekt",
    "cardIds": [
      "k12_003",
      "k12_004"
    ],
    "unlockAfter": "k12m1",
    "sbCards": []
  },
  {
    "id": "k12m3",
    "chapter": 12,
    "module": 3,
    "chapterTitle": {
      "de": "Ankommen im Beruf",
      "uk": "Влаштування в професії",
      "en": "Settling into a career",
      "ru": "Становление в профессии"
    },
    "title": {
      "de": "Zu meinen Aufgaben gehört das Beraten.",
      "uk": "До моїх обовʼязків належить консультування.",
      "en": "My duties include advising.",
      "ru": "В мои обязанности входит консультирование."
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "infinitiv_als_nomen",
    "cardIds": [
      "k12_005",
      "k12_012"
    ],
    "unlockAfter": "k12m2",
    "sbCards": []
  },
  {
    "id": "k12m4",
    "chapter": 12,
    "module": 4,
    "chapterTitle": {
      "de": "Ankommen im Beruf",
      "uk": "Влаштування в професії",
      "en": "Settling into a career",
      "ru": "Становление в профессии"
    },
    "title": {
      "de": "Ein Beruf, der erlernbar ist",
      "uk": "Професія, якій можна навчитися",
      "en": "A job that can be learned",
      "ru": "Профессия, которой можно научиться"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektive_auf_bar_los",
    "cardIds": [
      "k12_006",
      "k12_007",
      "k12_013"
    ],
    "unlockAfter": "k12m3",
    "sbCards": []
  },
  {
    "id": "k12m5",
    "chapter": 12,
    "module": 5,
    "chapterTitle": {
      "de": "Ankommen im Beruf",
      "uk": "Влаштування в професії",
      "en": "Settling into a career",
      "ru": "Становление в профессии"
    },
    "title": {
      "de": "Der Lebenslauf und die Anerkennung",
      "uk": "Резюме та визнання кваліфікації",
      "en": "The CV and recognition of qualifications",
      "ru": "Резюме и признание квалификации"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": null,
    "cardIds": [
      "k12_008",
      "k12_009",
      "k12_010",
      "k12_011",
      "k12_014",
      "k12_015",
      "k12_016"
    ],
    "unlockAfter": "k12m4",
    "sbCards": []
  },
  {
    "id": "k13m1",
    "chapter": 13,
    "module": 1,
    "chapterTitle": {
      "de": "Freiwillig",
      "uk": "Волонтерство",
      "en": "Volunteering",
      "ru": "Волонтёрство"
    },
    "title": {
      "de": "Das Werkzeug muss repariert werden.",
      "uk": "Інструмент потрібно відремонтувати.",
      "en": "The tool needs to be repaired.",
      "ru": "Инструмент нужно отремонтировать."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "passiv_mit_modalverben",
    "cardIds": [
      "k13_001",
      "k13_002",
      "k13_009"
    ],
    "unlockAfter": "k12m5",
    "sbCards": []
  },
  {
    "id": "k13m2",
    "chapter": 13,
    "module": 2,
    "chapterTitle": {
      "de": "Freiwillig",
      "uk": "Волонтерство",
      "en": "Volunteering",
      "ru": "Волонтёрство"
    },
    "title": {
      "de": "Trotz des Alters ehrenamtlich aktiv",
      "uk": "Незважаючи на вік — активний волонтер",
      "en": "Volunteering despite oneʼs age",
      "ru": "Волонтёрство несмотря на возраст"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "praepositionen_mit_genitiv",
    "cardIds": [
      "k13_003",
      "k13_004"
    ],
    "unlockAfter": "k13m1",
    "sbCards": []
  },
  {
    "id": "k13m3",
    "chapter": 13,
    "module": 3,
    "chapterTitle": {
      "de": "Freiwillig",
      "uk": "Волонтерство",
      "en": "Volunteering",
      "ru": "Волонтёрство"
    },
    "title": {
      "de": "Wegen des großen Engagements",
      "uk": "Через велику самовідданість",
      "en": "Because of the great commitment",
      "ru": "Из-за большой самоотдачи"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "adjektivendung_genitiv",
    "cardIds": [
      "k13_005",
      "k13_010"
    ],
    "unlockAfter": "k13m2",
    "sbCards": []
  },
  {
    "id": "k13m4",
    "chapter": 13,
    "module": 4,
    "chapterTitle": {
      "de": "Freiwillig",
      "uk": "Волонтерство",
      "en": "Volunteering",
      "ru": "Волонтёрство"
    },
    "title": {
      "de": "Ein hilfsbereiter Freundeskreis",
      "uk": "Готове допомогти коло друзів",
      "en": "A helpful circle of friends",
      "ru": "Отзывчивый круг друзей"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "adjektive_auf_voll_reich",
    "cardIds": [
      "k13_006",
      "k13_007",
      "k13_011"
    ],
    "unlockAfter": "k13m3",
    "sbCards": []
  },
  {
    "id": "k13m5",
    "chapter": 13,
    "module": 5,
    "chapterTitle": {
      "de": "Freiwillig",
      "uk": "Волонтерство",
      "en": "Volunteering",
      "ru": "Волонтёрство"
    },
    "title": {
      "de": "Sich engagieren",
      "uk": "Займатися волонтерством",
      "en": "Getting involved",
      "ru": "Заниматься волонтёрством"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k13_008",
      "k13_012",
      "k13_013",
      "k13_014",
      "k13_015",
      "k13_016"
    ],
    "unlockAfter": "k13m4",
    "sbCards": []
  },
  {
    "id": "k14m1",
    "chapter": 14,
    "module": 1,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Unser neuer Nachbar",
      "uk": "Наш новий сусід",
      "en": "Our new neighbour",
      "ru": "Наш новый сосед"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "n_deklination",
    "cardIds": [
      "k14_001",
      "k14_002"
    ],
    "unlockAfter": "k13m5",
    "sbCards": []
  },
  {
    "id": "k14m2",
    "chapter": 14,
    "module": 2,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Die Wohnung, für die ich mich interessiere",
      "uk": "Квартира, якою я цікавлюся",
      "en": "The flat I am interested in",
      "ru": "Квартира, которой я интересуюсь"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": "relativsatz_mit_praeposition",
    "cardIds": [
      "k14_003",
      "k14_004"
    ],
    "unlockAfter": "k14m1",
    "sbCards": []
  },
  {
    "id": "k14m3",
    "chapter": 14,
    "module": 3,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Ein Ort, wo ich mich wohlfühle",
      "uk": "Місце, де мені добре",
      "en": "A place where I feel good",
      "ru": "Место, где мне хорошо"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "relativsatz_wo_was",
    "cardIds": [
      "k14_005",
      "k14_011"
    ],
    "unlockAfter": "k14m2",
    "sbCards": []
  },
  {
    "id": "k14m4",
    "chapter": 14,
    "module": 4,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Das Haus, das mir gefällt",
      "uk": "Будинок, який мені подобається",
      "en": "The house I like",
      "ru": "Дом, который мне нравится"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "relativpronomen_dativ_wdh_b1",
    "cardIds": [
      "k14_006",
      "k14_007"
    ],
    "unlockAfter": "k14m3",
    "sbCards": []
  },
  {
    "id": "k14m5",
    "chapter": 14,
    "module": 5,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Eine super günstige Wohnung",
      "uk": "Надзвичайно вигідна квартира",
      "en": "A super cheap flat",
      "ru": "Супервыгодная квартира"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektive_super_hoch_ueber_extra",
    "cardIds": [
      "k14_008",
      "k14_012",
      "k14_013"
    ],
    "unlockAfter": "k14m4",
    "sbCards": []
  },
  {
    "id": "k14m6",
    "chapter": 14,
    "module": 6,
    "chapterTitle": {
      "de": "Ein neues Zuhause",
      "uk": "Новий дім",
      "en": "A new home",
      "ru": "Новый дом"
    },
    "title": {
      "de": "Formelle Telefongespräche führen",
      "uk": "Ведення офіційних телефонних розмов",
      "en": "Making formal phone calls",
      "ru": "Ведение официальных телефонных разговоров"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": null,
    "cardIds": [
      "k14_009",
      "k14_010",
      "k14_014",
      "k14_015",
      "k14_016"
    ],
    "unlockAfter": "k14m5",
    "sbCards": []
  },
  {
    "id": "k15m1",
    "chapter": 15,
    "module": 1,
    "chapterTitle": {
      "de": "Hier bleibe ich.",
      "uk": "Я залишаюся тут.",
      "en": "Iʼm staying here.",
      "ru": "Я остаюсь здесь."
    },
    "title": {
      "de": "Deutscher Pass, harte Arbeit",
      "uk": "Німецький паспорт, важка праця",
      "en": "German passport, hard work",
      "ru": "Немецкий паспорт, тяжёлая работа"
    },
    "skills": [
      "Lesen",
      "Sprechen"
    ],
    "grammar": "adjektivdeklination_ohne_artikel",
    "cardIds": [
      "k15_001",
      "k15_002"
    ],
    "unlockAfter": "k14m6",
    "sbCards": []
  },
  {
    "id": "k15m2",
    "chapter": 15,
    "module": 2,
    "chapterTitle": {
      "de": "Hier bleibe ich.",
      "uk": "Я залишаюся тут.",
      "en": "Iʼm staying here.",
      "ru": "Я остаюсь здесь."
    },
    "title": {
      "de": "Ein lachendes Gesicht",
      "uk": "Усміхнене обличчя",
      "en": "A smiling face",
      "ru": "Улыбающееся лицо"
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "partizip1_als_adjektiv",
    "cardIds": [
      "k15_003",
      "k15_009"
    ],
    "unlockAfter": "k15m1",
    "sbCards": []
  },
  {
    "id": "k15m3",
    "chapter": 15,
    "module": 3,
    "chapterTitle": {
      "de": "Hier bleibe ich.",
      "uk": "Я залишаюся тут.",
      "en": "Iʼm staying here.",
      "ru": "Я остаюсь здесь."
    },
    "title": {
      "de": "Der ausgefüllte Antrag",
      "uk": "Заповнена заявка",
      "en": "The completed application form",
      "ru": "Заполненное заявление"
    },
    "skills": [
      "Schreiben",
      "Lesen"
    ],
    "grammar": "partizip2_als_adjektiv",
    "cardIds": [
      "k15_004",
      "k15_005",
      "k15_010"
    ],
    "unlockAfter": "k15m2",
    "sbCards": []
  },
  {
    "id": "k15m4",
    "chapter": 15,
    "module": 4,
    "chapterTitle": {
      "de": "Hier bleibe ich.",
      "uk": "Я залишаюся тут.",
      "en": "Iʼm staying here.",
      "ru": "Я остаюсь здесь."
    },
    "title": {
      "de": "Entweder heute oder morgen",
      "uk": "Або сьогодні, або завтра",
      "en": "Either today or tomorrow",
      "ru": "Либо сегодня, либо завтра"
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "entweder_oder",
    "cardIds": [
      "k15_006",
      "k15_011"
    ],
    "unlockAfter": "k15m3",
    "sbCards": []
  },
  {
    "id": "k15m5",
    "chapter": 15,
    "module": 5,
    "chapterTitle": {
      "de": "Hier bleibe ich.",
      "uk": "Я залишаюся тут.",
      "en": "Iʼm staying here.",
      "ru": "Я остаюсь здесь."
    },
    "title": {
      "de": "Der Einbürgerungsantrag",
      "uk": "Заява на натуралізацію",
      "en": "The naturalisation application",
      "ru": "Заявление на натурализацию"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k15_007",
      "k15_008",
      "k15_012",
      "k15_013",
      "k15_014",
      "k15_015",
      "k15_016"
    ],
    "unlockAfter": "k15m4",
    "sbCards": []
  },
  {
    "id": "k16m1",
    "chapter": 16,
    "module": 1,
    "chapterTitle": {
      "de": "Das haben wir uns verdient!",
      "uk": "Ми це заслужили!",
      "en": "Weʼve earned this!",
      "ru": "Мы это заслужили!"
    },
    "title": {
      "de": "Wir feiern und wir fahren weg.",
      "uk": "Ми святкуємо і виїжджаємо.",
      "en": "We celebrate and we go away.",
      "ru": "Мы празднуем и уезжаем."
    },
    "skills": [
      "Sprechen",
      "Hören"
    ],
    "grammar": "satzverbindungen_ueberblick",
    "cardIds": [
      "k16_001",
      "k16_002",
      "k16_003"
    ],
    "unlockAfter": "k15m5",
    "sbCards": []
  },
  {
    "id": "k16m2",
    "chapter": 16,
    "module": 2,
    "chapterTitle": {
      "de": "Das haben wir uns verdient!",
      "uk": "Ми це заслужили!",
      "en": "Weʼve earned this!",
      "ru": "Мы это заслужили!"
    },
    "title": {
      "de": "Wir kommen nach, wir schicken zurück.",
      "uk": "Ми надолужуємо, ми відсилаємо назад.",
      "en": "We catch up, we send back.",
      "ru": "Мы наверстываем, мы отправляем обратно."
    },
    "skills": [
      "Sprechen",
      "Lesen"
    ],
    "grammar": "trennbare_verben_praefixe_wdh_b1",
    "cardIds": [
      "k16_004",
      "k16_005"
    ],
    "unlockAfter": "k16m1",
    "sbCards": []
  },
  {
    "id": "k16m3",
    "chapter": 16,
    "module": 3,
    "chapterTitle": {
      "de": "Das haben wir uns verdient!",
      "uk": "Ми це заслужили!",
      "en": "Weʼve earned this!",
      "ru": "Мы это заслужили!"
    },
    "title": {
      "de": "Ein Gespräch über Polizeiarbeit",
      "uk": "Розмова про роботу поліції",
      "en": "A conversation about police work",
      "ru": "Разговор о работе полиции"
    },
    "skills": [
      "Hören",
      "Sprechen"
    ],
    "grammar": null,
    "cardIds": [
      "k16_009",
      "k16_010",
      "k16_011",
      "k16_012"
    ],
    "unlockAfter": "k16m2",
    "sbCards": []
  },
  {
    "id": "k16m4",
    "chapter": 16,
    "module": 4,
    "chapterTitle": {
      "de": "Das haben wir uns verdient!",
      "uk": "Ми це заслужили!",
      "en": "Weʼve earned this!",
      "ru": "Мы это заслужили!"
    },
    "title": {
      "de": "Unterwegs in einer neuen Stadt",
      "uk": "У дорозі новим містом",
      "en": "Out and about in a new city",
      "ru": "В новом городе"
    },
    "skills": [
      "Lesen",
      "Schreiben"
    ],
    "grammar": null,
    "cardIds": [
      "k16_006",
      "k16_007",
      "k16_008",
      "k16_013",
      "k16_014",
      "k16_015",
      "k16_016"
    ],
    "unlockAfter": "k16m3",
    "sbCards": []
  }
];

var VOCAB = [
  {
    "id": "k1_001",
    "cat": "k1",
    "term": {
      "de": "die Nachbarschaft",
      "en": "neighbourhood",
      "uk": "сусідство",
      "ru": "соседство"
    },
    "short": {
      "de": "die Menschen und Häuser in der Nähe von deiner Wohnung",
      "en": "the people and houses near your home",
      "uk": "люди та будинки поблизу твого житла",
      "ru": "люди и дома рядом с твоим жильём"
    },
    "def": {
      "de": "Wir sind letzte Woche <g>in die</g> neue <b>Nachbarschaft</b> gezogen.",
      "en": "We moved into this new <b>neighbourhood</b> last week.",
      "uk": "Минулого тижня ми переїхали в це нове <b>сусідство</b>.",
      "ru": "На прошлой неделе мы переехали в это новое <b>соседство</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_002",
    "cat": "k1",
    "term": {
      "de": "der Nachbar / die Nachbarin",
      "en": "neighbour",
      "uk": "сусід / сусідка",
      "ru": "сосед / соседка"
    },
    "short": {
      "de": "eine Person, die direkt neben dir oder in deinem Haus wohnt",
      "en": "a person who lives right next to you or in your building",
      "uk": "людина, яка живе поруч з тобою або в твоєму будинку",
      "ru": "человек, который живёт рядом с тобой или в твоём доме"
    },
    "def": {
      "de": "Unser neuer <b>Nachbar</b> wohnt schon seit zehn Jahren <g>in dem</g> Haus gegenüber.",
      "en": "Our new <b>neighbour</b> has already lived in the building across the street for ten years.",
      "uk": "Наш новий <b>сусід</b> вже десять років живе в будинку навпроти.",
      "ru": "Наш новый <b>сосед</b> уже десять лет живёт в доме напротив."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_003",
    "cat": "k1",
    "term": {
      "de": "das Mehrfamilienhaus",
      "en": "apartment building",
      "uk": "багатоквартирний будинок",
      "ru": "многоквартирный дом"
    },
    "short": {
      "de": "ein Haus, in dem mehrere Familien oder Personen in verschiedenen Wohnungen leben",
      "en": "a building where several families or people live in different flats",
      "uk": "будинок, у якому кілька сімей чи людей живуть у різних квартирах",
      "ru": "дом, в котором несколько семей или людей живут в разных квартирах"
    },
    "def": {
      "de": "In unserem <b>Mehrfamilienhaus</b> leben insgesamt zwölf Familien.",
      "en": "A total of twelve families live in our <b>apartment building</b>.",
      "uk": "У нашому <b>багатоквартирному будинку</b> загалом живуть дванадцять сімей.",
      "ru": "В нашем <b>многоквартирном доме</b> всего живут двенадцать семей."
    },
    "gram": ""
  },
  {
    "id": "k1_004",
    "cat": "k1",
    "term": {
      "de": "die Hausordnung",
      "en": "house rules",
      "uk": "правила будинку",
      "ru": "правила дома"
    },
    "short": {
      "de": "die Regeln, die für alle Bewohner in einem Haus gelten",
      "en": "the rules that apply to all residents in a building",
      "uk": "правила, які діють для всіх мешканців будинку",
      "ru": "правила, которые действуют для всех жителей дома"
    },
    "def": {
      "de": "In der <b>Hausordnung</b> steht, dass man nach 22 Uhr keine laute Musik <g>hören darf</g>.",
      "en": "The <b>house rules</b> say that you <g>must not listen</g> to loud music after 10 p.m.",
      "uk": "У <b>правилах будинку</b> написано, що після 22:00 <g>не можна слухати</g> голосну музику.",
      "ru": "В <b>правилах дома</b> написано, что после 22:00 <g>нельзя слушать</g> громкую музыку."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_005",
    "cat": "k1",
    "term": {
      "de": "die Ruhezeit",
      "en": "quiet hours",
      "uk": "час тиші",
      "ru": "тихий час"
    },
    "short": {
      "de": "die Zeit, in der man im Haus leise sein muss",
      "en": "the time when you have to be quiet in the building",
      "uk": "час, коли в будинку потрібно бути тихим",
      "ru": "время, когда в доме нужно вести себя тихо"
    },
    "def": {
      "de": "Während der <b>Ruhezeit</b> am Mittag <g>darf</g> man nicht bohren oder laut Musik hören.",
      "en": "During the <b>quiet hours</b> at midday, you <g>must not</g> drill or play loud music.",
      "uk": "Під час <b>тихого часу</b> вдень <g>не можна</g> свердлити чи слухати голосну музику.",
      "ru": "Во время <b>тихого часа</b> днём <g>нельзя</g> сверлить или слушать громкую музыку."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_006",
    "cat": "k1",
    "term": {
      "de": "die Rücksicht",
      "en": "consideration",
      "uk": "уважність",
      "ru": "внимательность"
    },
    "short": {
      "de": "wenn man an die anderen Menschen denkt und sie nicht stört",
      "en": "when you think of other people and don't disturb them",
      "uk": "коли ти думаєш про інших людей і не заважаєш їм",
      "ru": "когда ты думаешь о других людях и не мешаешь им"
    },
    "def": {
      "de": "Es ist sehr wichtig, auf die anderen Hausbewohner <b>Rücksicht</b> <g>zu nehmen</g>.",
      "en": "It is very important <g>to show</g> <b>consideration</b> for the other residents.",
      "uk": "Дуже важливо проявляти <b>уважність</b> до інших мешканців будинку.",
      "ru": "Очень важно проявлять <b>внимательность</b> к другим жителям дома."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_007",
    "cat": "k1",
    "term": {
      "de": "das Treppenhaus",
      "en": "stairwell",
      "uk": "підʼїзд, сходова клітка",
      "ru": "подъезд, лестничная клетка"
    },
    "short": {
      "de": "der Teil des Hauses mit der Treppe, durch den man zu den Wohnungen geht",
      "en": "the part of the building with the stairs that leads to the flats",
      "uk": "частина будинку зі сходами, через яку проходиш до квартир",
      "ru": "часть дома с лестницей, через которую проходишь к квартирам"
    },
    "def": {
      "de": "Im <b>Treppenhaus</b> <g>darf man keine Fahrräder oder Kartons abstellen</g>.",
      "en": "You <g>are not allowed to leave</g> bicycles or boxes in the <b>stairwell</b>.",
      "uk": "У <b>підʼїзді</b> <g>не можна залишати</g> велосипеди чи коробки.",
      "ru": "В <b>подъезде</b> <g>нельзя оставлять</g> велосипеды или коробки."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_008",
    "cat": "k1",
    "term": {
      "de": "der Kinderwagen",
      "en": "baby stroller",
      "uk": "дитяча коляска",
      "ru": "детская коляска"
    },
    "short": {
      "de": "ein kleines Fahrzeug mit Rädern, in dem ein Baby liegt oder sitzt",
      "en": "a small vehicle with wheels in which a baby lies or sits",
      "uk": "маленький засіб на колесах, у якому лежить або сидить малюк",
      "ru": "маленькое средство на колёсах, в котором лежит или сидит малыш"
    },
    "def": {
      "de": "Frau Berger stellt ihren <b>Kinderwagen</b> immer <g>neben die Treppe</g>.",
      "en": "Mrs Berger always puts her <b>stroller</b> next to the stairs.",
      "uk": "Пані Бергер завжди ставить свою <b>дитячу коляску</b> біля сходів.",
      "ru": "Госпожа Бергер всегда ставит свою <b>детскую коляску</b> возле лестницы."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_009",
    "cat": "k1",
    "term": {
      "de": "der Fluchtweg",
      "en": "escape route",
      "uk": "шлях евакуації",
      "ru": "путь эвакуации"
    },
    "short": {
      "de": "der Weg, den man im Notfall nehmen muss, um schnell aus dem Haus zu kommen",
      "en": "the route you must take in an emergency to get out of the building quickly",
      "uk": "шлях, яким потрібно йти в разі надзвичайної ситуації, щоб швидко вийти з будинку",
      "ru": "путь, по которому нужно идти в экстренной ситуации, чтобы быстро выйти из дома"
    },
    "def": {
      "de": "Den <b>Fluchtweg</b> <g>darf</g> man niemals mit Möbeln oder Kartons blockieren.",
      "en": "You <g>must never</g> block the <b>escape route</b> with furniture or boxes.",
      "uk": "<b>Шлях евакуації</b> ніколи <g>не можна</g> блокувати меблями чи коробками.",
      "ru": "<b>Путь эвакуации</b> никогда <g>нельзя</g> блокировать мебелью или коробками."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_010",
    "cat": "k1",
    "term": {
      "de": "sich beschweren",
      "en": "to complain",
      "uk": "скаржитися",
      "ru": "жаловаться"
    },
    "short": {
      "de": "Sagen, dass man mit etwas nicht zufrieden ist",
      "en": "to say that you are not satisfied with something",
      "uk": "казати, що ти чимось незадоволений",
      "ru": "говорить, что ты чем-то недоволен"
    },
    "def": {
      "de": "Herr Koch <g>hat sich weder</g> beim Vermieter <g>noch</g> bei den Nachbarn über den Lärm <b>beschwert</b>.",
      "en": "Mr Koch <g>has neither</g> <b>complained</b> to the landlord <g>nor</g> to the neighbours about the noise.",
      "uk": "Пан Кох <g>ні</g> орендодавцю, <g>ні</g> сусідам <b>не поскаржився</b> на шум.",
      "ru": "Господин Кох <g>ни</g> арендодателю, <g>ни</g> соседям <b>не пожаловался</b> на шум."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_011",
    "cat": "k1",
    "term": {
      "de": "sich entschuldigen",
      "en": "to apologize",
      "uk": "вибачатися",
      "ru": "извиняться"
    },
    "short": {
      "de": "„es tut mir leid“ sagen, wenn man einen Fehler gemacht hat",
      "en": "to say „I'm sorry“ when you have made a mistake",
      "uk": "казати «мені шкода», коли ти зробив помилку",
      "ru": "говорить «мне жаль», когда ты совершил ошибку"
    },
    "def": {
      "de": "Der junge Mann <g>hat sich sowohl</g> bei der Nachbarin <g>als auch</g> beim Hausmeister <b>entschuldigt</b>.",
      "en": "The young man <g>has both</g> <b>apologized</b> to the neighbour <g>and</g> to the caretaker.",
      "uk": "Молодий чоловік <g>як</g> перед сусідкою, <g>так і</g> перед двірником <b>вибачився</b>.",
      "ru": "Молодой человек <g>как</g> перед соседкой, <g>так и</g> перед дворником <b>извинился</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_012",
    "cat": "k1",
    "term": {
      "de": "erlauben",
      "en": "to allow",
      "uk": "дозволяти",
      "ru": "разрешать"
    },
    "short": {
      "de": "Sagen, dass jemand etwas machen darf",
      "en": "to say that someone is allowed to do something",
      "uk": "казати, що комусь можна щось робити",
      "ru": "говорить, что кому-то можно что-то делать"
    },
    "def": {
      "de": "<g>Würden Sie</g> mir <b>erlauben</b>, meinen Kinderwagen kurz im Flur stehen zu lassen?",
      "en": "<g>Would you</g> <b>allow</b> me to leave my stroller in the hallway for a moment?",
      "uk": "<g>Могли б Ви</g> <b>дозволити</b> мені залишити коляску в коридорі на хвилинку?",
      "ru": "<g>Могли бы Вы</g> <b>разрешить</b> мне оставить коляску в коридоре на минутку?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_013",
    "cat": "k1",
    "term": {
      "de": "stören",
      "en": "to disturb",
      "uk": "заважати",
      "ru": "мешать"
    },
    "short": {
      "de": "jemanden bei etwas unterbrechen oder ihm Lärm machen",
      "en": "to interrupt someone or make noise that bothers them",
      "uk": "перебивати комусь щось або створювати шум, який заважає",
      "ru": "прерывать кого-то или создавать шум, который мешает"
    },
    "def": {
      "de": "<g>Könnten Sie</g> bitte leiser sein? Die Musik <b>stört</b> unser Baby beim Schlafen.",
      "en": "<g>Could you</g> please be quieter? The music is <b>disturbing</b> our baby's sleep.",
      "uk": "<g>Могли б Ви</g>, будь ласка, говорити тихіше? Музика <b>заважає</b> нашій дитині спати.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, потише? Музыка <b>мешает</b> нашему ребёнку спать."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_014",
    "cat": "k1",
    "term": {
      "de": "der Umzug",
      "en": "move, relocation",
      "uk": "переїзд",
      "ru": "переезд"
    },
    "short": {
      "de": "wenn man mit allen Möbeln in eine andere Wohnung zieht",
      "en": "when you move with all your furniture to another flat",
      "uk": "коли ти переїжджаєш з усіма меблями в іншу квартиру",
      "ru": "когда ты переезжаешь со всей мебелью в другую квартиру"
    },
    "def": {
      "de": "Beim <b>Umzug</b> haben uns <g>sowohl</g> die Nachbarn <g>als auch</g> unsere Freunde geholfen.",
      "en": "<g>Both</g> the neighbours <g>and</g> our friends helped us with the <b>move</b>.",
      "uk": "Під час <b>переїзду</b> нам допомогли <g>як</g> сусіди, <g>так і</g> наші друзі.",
      "ru": "Во время <b>переезда</b> нам помогли <g>как</g> соседи, <g>так и</g> наши друзья."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_015",
    "cat": "k1",
    "term": {
      "de": "der Mieter / die Mieterin",
      "en": "tenant",
      "uk": "орендар / орендарка",
      "ru": "арендатор / арендатора"
    },
    "short": {
      "de": "eine Person, die eine Wohnung mietet und darin wohnt",
      "en": "a person who rents a flat and lives in it",
      "uk": "людина, яка орендує квартиру і живе в ній",
      "ru": "человек, который снимает квартиру и живёт в ней"
    },
    "def": {
      "de": "Jeder neue <b>Mieter</b> bekommt die Aufgabe, die Hausordnung <g>zu unterschreiben</g>.",
      "en": "Every new <b>tenant</b> gets the task <g>of signing</g> the house rules.",
      "uk": "Кожен новий <b>орендар</b> отримує завдання підписати правила будинку.",
      "ru": "Каждый новый <b>арендатор</b> получает задание подписать правила дома."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k2_001",
    "cat": "k2",
    "term": {
      "de": "die Reklamation",
      "en": "complaint (about goods)",
      "uk": "рекламація, претензія",
      "ru": "рекламация, претензия"
    },
    "short": {
      "de": "wenn man einer Firma sagt, dass eine Ware oder ein Service nicht in Ordnung ist",
      "en": "when you tell a company that a product or service is not okay",
      "uk": "коли ти повідомляєш фірмі, що товар чи послуга не в порядку",
      "ru": "когда ты сообщаешь фирме, что товар или услуга не в порядке"
    },
    "def": {
      "de": "Das war keine normale Bestellung, <g>sondern</g> eine <b>Reklamation</b>, <g>die</g> sofort bearbeitet werden musste.",
      "en": "That was not a normal order <g>but</g> a <b>complaint</b> <g>that</g> had to be processed immediately.",
      "uk": "Це було не звичайне замовлення, <g>а</g> <b>рекламація</b>, <g>яку</g> потрібно було обробити негайно.",
      "ru": "Это был не обычный заказ, <g>а</g> <b>рекламация</b>, <g>которую</g> нужно было обработать немедленно."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_002",
    "cat": "k2",
    "term": {
      "de": "reklamieren",
      "en": "to file a complaint",
      "uk": "подавати рекламацію",
      "ru": "подавать претензию"
    },
    "short": {
      "de": "einer Firma sagen, dass man mit einer Ware oder einem Service nicht zufrieden ist",
      "en": "to tell a company that you are not satisfied with a product or service",
      "uk": "повідомити фірмі, що ти незадоволений товаром чи послугою",
      "ru": "сообщить фирме, что ты недоволен товаром или услугой"
    },
    "def": {
      "de": "Frau Yilmaz wollte nicht schreiben, <g>sondern</g> direkt beim Kundenservice <b>reklamieren</b>, <g>der</g> ihr sofort half.",
      "en": "Mrs Yilmaz didn't want to write an email <g>but</g> <b>complain</b> directly to customer service, <g>who</g> helped her right away.",
      "uk": "Пані Йилмаз не хотіла писати, <g>а</g> хотіла <b>поскаржитися</b> прямо в службу підтримки, <g>яка</g> відразу їй допомогла.",
      "ru": "Госпожа Йилмаз не хотела писать, <g>а</g> хотела <b>пожаловаться</b> прямо в службу поддержки, <g>которая</g> сразу ей помогла."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_003",
    "cat": "k2",
    "term": {
      "de": "die Zahlungserinnerung",
      "en": "payment reminder",
      "uk": "нагадування про оплату",
      "ru": "напоминание об оплате"
    },
    "short": {
      "de": "ein Brief oder eine E-Mail, die daran erinnert, dass man noch bezahlen muss",
      "en": "a letter or email that reminds you that you still have to pay",
      "uk": "лист, який нагадує, що ще потрібно оплатити",
      "ru": "письмо, которое напоминает, что ещё нужно оплатить"
    },
    "def": {
      "de": "Die <b>Zahlungserinnerung</b>, <g>die</g> ich gestern bekommen habe, war eigentlich ein Fehler.",
      "en": "The <b>payment reminder</b> <g>that</g> I received yesterday was actually a mistake.",
      "uk": "<b>Нагадування про оплату</b>, <g>яке</g> я отримав учора, було насправді помилкою.",
      "ru": "<b>Напоминание об оплате</b>, <g>которое</g> я получил вчера, было на самом деле ошибкой."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_004",
    "cat": "k2",
    "term": {
      "de": "die Mahnung",
      "en": "dunning notice, warning",
      "uk": "офіційне нагадування",
      "ru": "официальное напоминание"
    },
    "short": {
      "de": "ein offizieller Brief, der sagt, dass man eine Rechnung noch nicht bezahlt hat",
      "en": "an official letter that says you haven't paid an invoice yet",
      "uk": "офіційний лист, який повідомляє, що ти ще не оплатив рахунок",
      "ru": "официальное письмо, которое сообщает, что ты ещё не оплатил счёт"
    },
    "def": {
      "de": "Die <b>Mahnung</b>, <g>die</g> Herr Bach bekommen hat, war schon die zweite.",
      "en": "The <b>dunning notice</b> <g>that</g> Mr Bach received was already the second one.",
      "uk": "<b>Нагадування</b>, <g>яке</g> отримав пан Бах, було вже другим.",
      "ru": "<b>Напоминание</b>, <g>которое</g> получил господин Бах, было уже вторым."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_005",
    "cat": "k2",
    "term": {
      "de": "die Rechnung",
      "en": "invoice, bill",
      "uk": "рахунок (до оплати)",
      "ru": "счёт (к оплате)"
    },
    "short": {
      "de": "ein Dokument, auf dem steht, wie viel Geld man für etwas bezahlen muss",
      "en": "a document that shows how much money you have to pay for something",
      "uk": "документ, у якому написано, скільки грошей потрібно заплатити за щось",
      "ru": "документ, в котором написано, сколько денег нужно заплатить за что-то"
    },
    "def": {
      "de": "Die <b>Rechnung</b>, <g>die</g> wir letzte Woche bekommen haben, war leider falsch.",
      "en": "The <b>invoice</b> <g>that</g> we received last week was unfortunately wrong.",
      "uk": "<b>Рахунок</b>, <g>який</g> ми отримали минулого тижня, на жаль, був неправильним.",
      "ru": "<b>Счёт</b>, <g>который</g> мы получили на прошлой неделе, к сожалению, был неправильным."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_006",
    "cat": "k2",
    "term": {
      "de": "die Quittung",
      "en": "receipt",
      "uk": "квитанція",
      "ru": "квитанция"
    },
    "short": {
      "de": "ein Papier, das zeigt, dass man für etwas schon bezahlt hat",
      "en": "a piece of paper that shows you have already paid for something",
      "uk": "папір, який показує, що ти вже заплатив за щось",
      "ru": "бумага, которая показывает, что ты уже заплатил за что-то"
    },
    "def": {
      "de": "Ohne die <b>Quittung</b>, <g>die</g> ich leider verloren habe, kann ich die Hose nicht umtauschen.",
      "en": "Without the <b>receipt</b> <g>that</g> I unfortunately lost, I cannot exchange the trousers.",
      "uk": "Без <b>квитанції</b>, <g>яку</g> я, на жаль, загубив, я не можу обміняти штани.",
      "ru": "Без <b>квитанции</b>, <g>которую</g> я, к сожалению, потерял, я не могу обменять брюки."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_007",
    "cat": "k2",
    "term": {
      "de": "umtauschen",
      "en": "to exchange (goods)",
      "uk": "обмінювати (товар)",
      "ru": "обменивать (товар)"
    },
    "short": {
      "de": "eine Ware gegen eine andere Ware im Geschäft tauschen",
      "en": "to exchange one product for another in a shop",
      "uk": "обмінювати товар на інший у магазині",
      "ru": "обменивать товар на другой в магазине"
    },
    "def": {
      "de": "Das Kleid, <g>das</g> ich <b>umtauschen</b> möchte, ist leider zu klein.",
      "en": "The dress <g>that</g> I would like to <b>exchange</b> is unfortunately too small.",
      "uk": "Плаття, <g>яке</g> я хочу <b>обміняти</b>, на жаль, замале.",
      "ru": "Платье, <g>которое</g> я хочу <b>обменять</b>, к сожалению, слишком маленькое."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_008",
    "cat": "k2",
    "term": {
      "de": "der Kundenservice",
      "en": "customer service",
      "uk": "служба підтримки клієнтів",
      "ru": "служба поддержки клиентов"
    },
    "short": {
      "de": "die Abteilung einer Firma, die Kunden bei Fragen und Problemen hilft",
      "en": "the department of a company that helps customers with questions and problems",
      "uk": "відділ фірми, який допомагає клієнтам із питаннями та проблемами",
      "ru": "отдел фирмы, который помогает клиентам с вопросами и проблемами"
    },
    "def": {
      "de": "Der <b>Kundenservice</b> war <g>weder</g> telefonisch <g>noch</g> per E-Mail zu erreichen.",
      "en": "<b>Customer service</b> could be reached <g>neither</g> by phone <g>nor</g> by email.",
      "uk": "До <b>служби підтримки</b> не можна було додзвонитися <g>ні</g> телефоном, <g>ні</g> написати електронною поштою.",
      "ru": "В <b>службу поддержки</b> невозможно было дозвониться <g>ни</g> по телефону, <g>ни</g> написать по электронной почте."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_009",
    "cat": "k2",
    "term": {
      "de": "liefern",
      "en": "to deliver",
      "uk": "доставляти",
      "ru": "доставлять"
    },
    "short": {
      "de": "eine Ware zum Kunden bringen",
      "en": "to bring goods to the customer",
      "uk": "привозити товар клієнту",
      "ru": "привозить товар клиенту"
    },
    "def": {
      "de": "Der Onlineshop <b>liefert</b> die Ware meistens innerhalb der <g>Lieferzeit</g> von zwei Tagen.",
      "en": "The online shop usually <b>delivers</b> the goods within a delivery time of two days.",
      "uk": "Інтернет-магазин зазвичай <b>доставляє</b> товар протягом строку доставки в два дні.",
      "ru": "Интернет-магазин обычно <b>доставляет</b> товар в течение срока доставки в два дня."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_010",
    "cat": "k2",
    "term": {
      "de": "fehlerhaft",
      "en": "defective, faulty",
      "uk": "несправний, бракований",
      "ru": "неисправный, бракованный"
    },
    "short": {
      "de": "wenn eine Ware nicht richtig funktioniert oder kaputt ist",
      "en": "when a product doesn't work properly or is broken",
      "uk": "коли товар не працює правильно або зламаний",
      "ru": "когда товар не работает правильно или сломан"
    },
    "def": {
      "de": "Das war kein normales Problem, <g>sondern</g> ein <b>fehlerhaftes</b> Gerät, <g>das</g> sofort ausgetauscht wurde.",
      "en": "That was not a normal problem <g>but</g> a <b>faulty</b> device <g>that</g> was replaced immediately.",
      "uk": "Це була не звичайна проблема, <g>а</g> <b>несправний</b> пристрій, <g>який</g> негайно замінили.",
      "ru": "Это была не обычная проблема, <g>а</g> <b>неисправное</b> устройство, <g>которое</g> немедленно заменили."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_011",
    "cat": "k2",
    "term": {
      "de": "der Rabatt",
      "en": "discount",
      "uk": "знижка",
      "ru": "скидка"
    },
    "short": {
      "de": "ein niedrigerer Preis, den man für eine Ware bezahlt",
      "en": "a lower price that you pay for a product",
      "uk": "нижча ціна, яку ти платиш за товар",
      "ru": "более низкая цена, которую ты платишь за товар"
    },
    "def": {
      "de": "Der <b>Rabatt</b>, <g>den</g> wir letzte Woche bekommen haben, war zwanzig Prozent.",
      "en": "The <b>discount</b> <g>that</g> we received last week was twenty percent.",
      "uk": "<b>Знижка</b>, <g>яку</g> ми отримали минулого тижня, становила двадцять відсотків.",
      "ru": "<b>Скидка</b>, <g>которую</g> мы получили на прошлой неделе, составляла двадцать процентов."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_012",
    "cat": "k2",
    "term": {
      "de": "bestellen",
      "en": "to order",
      "uk": "замовляти",
      "ru": "заказывать"
    },
    "short": {
      "de": "Sagen, dass man etwas in einem Geschäft oder online kaufen möchte",
      "en": "to say that you want to buy something in a shop or online",
      "uk": "казати, що хочеш купити щось у магазині чи онлайн",
      "ru": "говорить, что хочешь купить что-то в магазине или онлайн"
    },
    "def": {
      "de": "Ich habe <g>mir</g> ein neues Handy <b>bestellt</b>.",
      "en": "I have <b>ordered</b> myself a new phone.",
      "uk": "Я <g>собі</g> <b>замовив</b> новий телефон.",
      "ru": "Я <g>себе</g> <b>заказал</b> новый телефон."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_013",
    "cat": "k2",
    "term": {
      "de": "die Bestellung",
      "en": "order",
      "uk": "замовлення",
      "ru": "заказ"
    },
    "short": {
      "de": "ein Auftrag, mit dem man etwas in einem Geschäft oder online kauft",
      "en": "a request with which you buy something in a shop or online",
      "uk": "замовлення, яким ти купуєш щось у магазині або онлайн",
      "ru": "заказ, с помощью которого ты покупаешь что-то в магазине или онлайн"
    },
    "def": {
      "de": "Ich habe <g>mich</g> heute über meine neue <b>Bestellung</b> sehr gefreut.",
      "en": "I was very happy about my new <b>order</b> today.",
      "uk": "Я сьогодні дуже зрадів(-ла) своєму новому <b>замовленню</b>.",
      "ru": "Я сегодня очень обрадовался(-лась) своему новому <b>заказу</b>."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_014",
    "cat": "k2",
    "term": {
      "de": "der Kassenbon",
      "en": "till receipt",
      "uk": "касовий чек",
      "ru": "кассовый чек"
    },
    "short": {
      "de": "ein kleines Papier von der Kasse, das zeigt, was man gekauft hat",
      "en": "a small piece of paper from the till that shows what you bought",
      "uk": "маленький папір з каси, який показує, що ти купив",
      "ru": "маленькая бумага из кассы, которая показывает, что ты купил"
    },
    "def": {
      "de": "Ohne den <g><b>Kassenbon</b></g> kann das Geschäft die Ware nicht umtauschen.",
      "en": "Without the <b>receipt</b>, the shop cannot exchange the item.",
      "uk": "Без <b>касового чека</b> магазин не може обміняти товар.",
      "ru": "Без <b>кассового чека</b> магазин не может обменять товар."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_015",
    "cat": "k2",
    "term": {
      "de": "die Öffnungszeiten",
      "en": "opening hours",
      "uk": "години роботи",
      "ru": "часы работы"
    },
    "short": {
      "de": "die Zeiten, in denen ein Geschäft geöffnet ist",
      "en": "the times when a shop is open",
      "uk": "час, коли магазин відчинений",
      "ru": "время, когда магазин открыт"
    },
    "def": {
      "de": "Der Supermarkt hat <g>sowohl</g> am Samstag <g>als auch</g> am Sonntag lange <b>Öffnungszeiten</b>.",
      "en": "The supermarket has long <b>opening hours</b> <g>both</g> on Saturday <g>and</g> on Sunday.",
      "uk": "У супермаркету довгі <b>години роботи</b> <g>як</g> у суботу, <g>так і</g> в неділю.",
      "ru": "У супермаркета долгие <b>часы работы</b> <g>как</g> в субботу, <g>так и</g> в воскресенье."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k3_001",
    "cat": "k3",
    "term": {
      "de": "das Girokonto",
      "en": "checking account",
      "uk": "поточний рахунок",
      "ru": "текущий счёт"
    },
    "short": {
      "de": "ein Bankkonto, mit dem man normalerweise bezahlt und Geld bekommt",
      "en": "a bank account that you normally use to pay and receive money",
      "uk": "банківський рахунок, яким зазвичай платять і отримують гроші",
      "ru": "банковский счёт, которым обычно платят и получают деньги"
    },
    "def": {
      "de": "Ohne <b>Girokonto</b> dürfte es schwierig sein, das Gehalt zu bekommen.",
      "en": "Without a <b>checking account</b>, it might be difficult to receive your salary.",
      "uk": "Без <b>поточного рахунку</b>, ймовірно, важко отримати зарплату.",
      "ru": "Без <b>текущего счёта</b>, вероятно, сложно получить зарплату."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_002",
    "cat": "k3",
    "term": {
      "de": "eröffnen",
      "en": "to open (e.g. an account)",
      "uk": "відкривати (рахунок)",
      "ru": "открывать (счёт)"
    },
    "short": {
      "de": "etwas Neues bei einer Bank oder Firma starten, zum Beispiel ein Konto",
      "en": "to start something new at a bank or company, for example an account",
      "uk": "розпочати щось нове в банку чи фірмі, наприклад рахунок",
      "ru": "начать что-то новое в банке или компании, например счёт"
    },
    "def": {
      "de": "Herr Demir müsste sein neues Konto schon <b>eröffnet</b> haben.",
      "en": "Mr Demir must have already <b>opened</b> his new account.",
      "uk": "Пан Демір, мабуть, уже <b>відкрив</b> свій новий рахунок.",
      "ru": "Господин Демир, наверное, уже <b>открыл</b> свой новый счёт."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_003",
    "cat": "k3",
    "term": {
      "de": "die Versicherung",
      "en": "insurance",
      "uk": "страхування, страховка",
      "ru": "страхование, страховка"
    },
    "short": {
      "de": "ein Vertrag, der bei einem Problem oder Schaden Geld bezahlt",
      "en": "a contract that pays money in case of a problem or damage",
      "uk": "договір, за яким сплачують гроші у разі проблеми чи шкоди",
      "ru": "договор, по которому платят деньги в случае проблемы или ущерба"
    },
    "def": {
      "de": "Die Kosten <g>der</g> <b>Versicherung</b> sind in diesem Jahr leider gestiegen.",
      "en": "The costs <g>of the</g> <b>insurance</b> have unfortunately risen this year.",
      "uk": "Вартість <b>страхування</b> цього року, на жаль, зросла.",
      "ru": "Стоимость <b>страхования</b> в этом году, к сожалению, выросла."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_004",
    "cat": "k3",
    "term": {
      "de": "die Haftpflichtversicherung",
      "en": "liability insurance",
      "uk": "страхування цивільної відповідальності",
      "ru": "страхование гражданской ответственности"
    },
    "short": {
      "de": "eine Versicherung, die bezahlt, wenn man aus Versehen einen Schaden bei jemand anderem verursacht",
      "en": "an insurance that pays when you accidentally cause damage to someone else",
      "uk": "страхування, яке платить, коли ти випадково завдав шкоди іншій людині",
      "ru": "страхование, которое платит, когда ты случайно нанёс ущерб другому человеку"
    },
    "def": {
      "de": "Der Preis <g>der</g> <b>Haftpflichtversicherung</b> hängt vom Alter des Fahrers ab.",
      "en": "The price <g>of the</g> <b>liability insurance</b> depends on the driver's age.",
      "uk": "Ціна <b>страхування цивільної відповідальності</b> залежить від віку водія.",
      "ru": "Цена <b>страхования гражданской ответственности</b> зависит от возраста водителя."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_005",
    "cat": "k3",
    "term": {
      "de": "der Sperrnotruf",
      "en": "emergency card-blocking hotline",
      "uk": "гаряча лінія для блокування картки",
      "ru": "горячая линия для блокировки карты"
    },
    "short": {
      "de": "eine Telefonnummer, die man anruft, wenn eine Bankkarte gestohlen wurde oder verloren ist",
      "en": "a phone number you call when a bank card has been stolen or lost",
      "uk": "телефонний номер, на який дзвониш, якщо банківську картку вкрадено чи втрачено",
      "ru": "номер телефона, на который звонишь, если банковская карта украдена или потеряна"
    },
    "def": {
      "de": "Die Nummer <g>des</g> <b>Sperrnotrufs</b> steht auf der Rückseite der Bankkarte.",
      "en": "The number <g>of the</g> <b>emergency hotline</b> is on the back of the bank card.",
      "uk": "Номер <b>гарячої лінії для блокування картки</b> написаний на зворотному боці картки.",
      "ru": "Номер <b>горячей линии для блокировки карты</b> написан на обратной стороне карты."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_006",
    "cat": "k3",
    "term": {
      "de": "sperren",
      "en": "to block",
      "uk": "блокувати",
      "ru": "блокировать"
    },
    "short": {
      "de": "etwas so machen, dass man es nicht mehr benutzen kann",
      "en": "to make something unable to be used anymore",
      "uk": "робити так, щоб чимось більше не можна було користуватися",
      "ru": "делать так, чтобы чем-то больше нельзя было пользоваться"
    },
    "def": {
      "de": "Wegen des Diebstahls <g>der</g> Handtasche musste sie ihre Bankkarte sofort <b>sperren</b> lassen.",
      "en": "Because <g>of the</g> theft of her handbag, she had to <b>block</b> her bank card immediately.",
      "uk": "Через крадіжку сумки їй довелося негайно <b>блокувати</b> свою банківську картку.",
      "ru": "Из-за кражи сумки ей пришлось немедленно <b>заблокировать</b> свою банковскую карту."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_007",
    "cat": "k3",
    "term": {
      "de": "kündigen",
      "en": "to cancel, terminate (a contract)",
      "uk": "розривати (договір)",
      "ru": "расторгать (договор)"
    },
    "short": {
      "de": "einen Vertrag offiziell beenden",
      "en": "to officially end a contract",
      "uk": "офіційно завершити договір",
      "ru": "официально завершить договор"
    },
    "def": {
      "de": "Er hat den Vertrag <b>gekündigt</b>, <g>obwohl</g> die Versicherung eigentlich sehr günstig war.",
      "en": "He <b>cancelled</b> the contract <g>although</g> the insurance was actually very cheap.",
      "uk": "Він <b>розірвав</b> договір, <g>хоча</g> страхування насправді було дуже дешевим.",
      "ru": "Он <b>расторг</b> договор, <g>хотя</g> страхование на самом деле было очень дешёвым."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_008",
    "cat": "k3",
    "term": {
      "de": "die Kündigung",
      "en": "cancellation, termination",
      "uk": "розірвання договору",
      "ru": "расторжение договора"
    },
    "short": {
      "de": "der offizielle Brief oder Vorgang, mit dem man einen Vertrag beendet",
      "en": "the official letter or process with which you end a contract",
      "uk": "офіційний лист або процес, яким завершують договір",
      "ru": "официальное письмо или процесс, которым завершают договор"
    },
    "def": {
      "de": "Die <b>Kündigung</b> kam an, <g>obwohl</g> Frau Krause den Brief nie abgeschickt hatte.",
      "en": "The <b>termination</b> arrived <g>although</g> Mrs Krause had never sent the letter.",
      "uk": "<b>Розірвання договору</b> надійшло, <g>хоча</g> пані Краузе ніколи не надсилала листа.",
      "ru": "<b>Расторжение договора</b> пришло, <g>хотя</g> госпожа Краузе никогда не отправляла письмо."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_009",
    "cat": "k3",
    "term": {
      "de": "die Verbraucherzentrale",
      "en": "consumer advice centre",
      "uk": "центр захисту прав споживачів",
      "ru": "центр защиты прав потребителей"
    },
    "short": {
      "de": "eine Organisation, die Verbrauchern bei Problemen mit Firmen hilft",
      "en": "an organisation that helps consumers with problems with companies",
      "uk": "організація, яка допомагає споживачам із проблемами з фірмами",
      "ru": "организация, которая помогает потребителям с проблемами с компаниями"
    },
    "def": {
      "de": "Die <b>Verbraucherzentrale</b> hilft oft beim Schreiben eines <g>Kündigungsschreibens</g>.",
      "en": "The <b>consumer advice centre</b> often helps with writing a letter of termination.",
      "uk": "<b>Центр захисту прав споживачів</b> часто допомагає написати лист про розірвання договору.",
      "ru": "<b>Центр защиты прав потребителей</b> часто помогает написать письмо о расторжении договора."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_010",
    "cat": "k3",
    "term": {
      "de": "der Vertrag",
      "en": "contract",
      "uk": "договір",
      "ru": "договор"
    },
    "short": {
      "de": "ein offizielles Dokument, das die Regeln zwischen zwei Seiten festlegt",
      "en": "an official document that sets the rules between two parties",
      "uk": "офіційний документ, який визначає правила між двома сторонами",
      "ru": "официальный документ, который устанавливает правила между двумя сторонами"
    },
    "def": {
      "de": "Bevor man einen <b>Vertrag</b> unterschreibt, sollte man die <g>Kündigungsfrist</g> genau lesen.",
      "en": "Before signing a <b>contract</b>, you should read the notice period carefully.",
      "uk": "Перш ніж підписувати <b>договір</b>, варто уважно прочитати термін розірвання.",
      "ru": "Перед подписанием <b>договора</b> стоит внимательно прочитать срок расторжения."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_011",
    "cat": "k3",
    "term": {
      "de": "abschließen",
      "en": "to conclude (a contract)",
      "uk": "укладати (договір)",
      "ru": "заключать (договор)"
    },
    "short": {
      "de": "einen Vertrag offiziell unterschreiben und damit beginnen",
      "en": "to officially sign a contract and start it",
      "uk": "офіційно підписати договір і розпочати його дію",
      "ru": "официально подписать договор и начать его действие"
    },
    "def": {
      "de": "Wir haben die neue Versicherung <b>abgeschlossen</b>, nachdem wir ein langes <g>Beratungsgespräch</g> hatten.",
      "en": "We <b>concluded</b> the new insurance policy after having a long consultation.",
      "uk": "Ми <b>уклали</b> нове страхування після довгої консультаційної розмови.",
      "ru": "Мы <b>заключили</b> новое страхование после долгой консультационной беседы."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_012",
    "cat": "k3",
    "term": {
      "de": "die Gebühr",
      "en": "fee",
      "uk": "плата, збір",
      "ru": "плата, сбор"
    },
    "short": {
      "de": "Geld, das man für einen Service oder eine Leistung bezahlen muss",
      "en": "money that you have to pay for a service",
      "uk": "гроші, які потрібно платити за послугу",
      "ru": "деньги, которые нужно платить за услугу"
    },
    "def": {
      "de": "Die Bank verlangt eine <b>Gebühr</b>, <g>obwohl</g> das Konto eigentlich kostenlos sein sollte.",
      "en": "The bank charges a <b>fee</b> <g>although</g> the account is actually supposed to be free.",
      "uk": "Банк вимагає <b>плату</b>, <g>хоча</g> рахунок мав би бути безкоштовним.",
      "ru": "Банк требует <b>плату</b>, <g>хотя</g> счёт должен быть бесплатным."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_013",
    "cat": "k3",
    "term": {
      "de": "die Überweisung",
      "en": "bank transfer",
      "uk": "банківський переказ",
      "ru": "банковский перевод"
    },
    "short": {
      "de": "wenn man Geld von seinem Konto auf ein anderes Konto schickt",
      "en": "when you send money from your account to another account",
      "uk": "коли ти переказуєш гроші з свого рахунку на інший рахунок",
      "ru": "когда ты переводишь деньги со своего счёта на другой счёт"
    },
    "def": {
      "de": "Die <b>Überweisung</b> ist noch nicht angekommen, <g>deshalb</g> rufe ich heute bei der Bank an.",
      "en": "The <b>bank transfer</b> has not arrived yet, <g>therefore</g> I am calling the bank today.",
      "uk": "<b>Переказ</b> ще не надійшов, <g>тому</g> я сьогодні дзвоню в банк.",
      "ru": "<b>Перевод</b> ещё не пришёл, <g>поэтому</g> я сегодня звоню в банк."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_014",
    "cat": "k3",
    "term": {
      "de": "der Schaden",
      "en": "damage",
      "uk": "шкода, збиток",
      "ru": "ущерб"
    },
    "short": {
      "de": "wenn etwas kaputt oder zerstört wird",
      "en": "when something gets broken or destroyed",
      "uk": "коли щось стає зламаним чи знищеним",
      "ru": "когда что-то становится сломанным или уничтоженным"
    },
    "def": {
      "de": "Der <b>Schaden</b> am Auto war klein, <g>trotzdem</g> musste sie die Versicherung informieren.",
      "en": "The <b>damage</b> to the car was small; <g>nevertheless</g>, she had to inform the insurance company.",
      "uk": "<b>Шкода</b> автомобілю була невеликою, <g>проте</g> їй все одно довелося повідомити страхову.",
      "ru": "<b>Ущерб</b> автомобилю был небольшим, <g>однако</g> ей всё же пришлось сообщить страховой."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_015",
    "cat": "k3",
    "term": {
      "de": "die Schadensmeldung",
      "en": "damage report",
      "uk": "повідомлення про шкоду",
      "ru": "сообщение об ущербе"
    },
    "short": {
      "de": "ein Formular oder Brief, mit dem man der Versicherung einen Schaden meldet",
      "en": "a form or letter with which you report damage to the insurance company",
      "uk": "формуляр або лист, яким повідомляєш страховій про шкоду",
      "ru": "формуляр или письмо, которым сообщаешь страховой об ущербе"
    },
    "def": {
      "de": "Ich habe die <b>Schadensmeldung</b> sofort geschickt, <g>damit</g> die Versicherung schnell reagieren kann.",
      "en": "I sent the <b>damage report</b> immediately <g>so that</g> the insurance can react quickly.",
      "uk": "Я негайно надіслав <b>повідомлення про шкоду</b>, <g>щоб</g> страхова могла швидко реагувати.",
      "ru": "Я немедленно отправил <b>сообщение об ущербе</b>, <g>чтобы</g> страховая могла быстро реагировать."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_001",
    "cat": "k4",
    "term": {
      "de": "die Essgewohnheit",
      "en": "eating habit",
      "uk": "харчова звичка",
      "ru": "привычка питания"
    },
    "short": {
      "de": "wie und was man normalerweise isst",
      "en": "how and what you normally eat",
      "uk": "як і що ти зазвичай їси",
      "ru": "как и что ты обычно ешь"
    },
    "def": {
      "de": "Meine <b>Essgewohnheiten</b> haben sich verändert, <g>seit</g> ich in Deutschland lebe.",
      "en": "My <b>eating habits</b> have changed <g>since</g> I have been living in Germany.",
      "uk": "Мої <b>харчові звички</b> змінилися, <g>відколи</g> я живу в Німеччині.",
      "ru": "Мои <b>привычки питания</b> изменились, <g>с тех пор как</g> я живу в Германии."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_002",
    "cat": "k4",
    "term": {
      "de": "sich ernähren",
      "en": "to eat, nourish oneself",
      "uk": "харчуватися",
      "ru": "питаться"
    },
    "short": {
      "de": "Essen, um zu leben und gesund zu bleiben",
      "en": "to eat in order to live and stay healthy",
      "uk": "їсти, щоб жити й залишатися здоровим",
      "ru": "есть, чтобы жить и оставаться здоровым"
    },
    "def": {
      "de": "Früher <b>ernährte</b> ich <b>mich</b> nur von Fast Food, heute koche ich selbst.",
      "en": "In the past, I only <b>ate</b> fast food; today I cook myself.",
      "uk": "Раніше я <b>харчувався</b> лише фаст-фудом, сьогодні я готую сам.",
      "ru": "Раньше я <b>питался</b> только фастфудом, сегодня я готовлю сам."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_003",
    "cat": "k4",
    "term": {
      "de": "die Ernährung",
      "en": "nutrition",
      "uk": "харчування",
      "ru": "питание"
    },
    "short": {
      "de": "das Essen, das man regelmäßig zu sich nimmt",
      "en": "the food that you regularly eat",
      "uk": "їжа, яку ти регулярно споживаєш",
      "ru": "еда, которую ты регулярно потребляешь"
    },
    "def": {
      "de": "Seine <b>Ernährung</b> <g>bestand</g> früher fast nur aus Brot und Wurst.",
      "en": "His <b>diet</b> <g>consisted</g> almost only of bread and sausage in the past.",
      "uk": "Його <b>харчування</b> раніше складалося майже лише з хліба й ковбаси.",
      "ru": "Его <b>питание</b> раньше состояло почти только из хлеба и колбасы."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_004",
    "cat": "k4",
    "term": {
      "de": "der Automat",
      "en": "vending machine",
      "uk": "торговий автомат",
      "ru": "торговый автомат"
    },
    "short": {
      "de": "eine Maschine, aus der man Essen, Getränke oder Tickets kaufen kann",
      "en": "a machine from which you can buy food, drinks or tickets",
      "uk": "автомат, з якого можна купити їжу, напої чи квитки",
      "ru": "автомат, из которого можно купить еду, напитки или билеты"
    },
    "def": {
      "de": "Der <b>Automat</b> war leider kaputt, <g>deshalb</g> konnte ich keinen Kaffee kaufen.",
      "en": "The <b>vending machine</b> was unfortunately broken, <g>therefore</g> I could not buy any coffee.",
      "uk": "<b>Автомат</b> був, на жаль, зламаний, <g>тому</g> я не міг купити каву.",
      "ru": "<b>Автомат</b> был, к сожалению, сломан, <g>поэтому</g> я не мог купить кофе."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_005",
    "cat": "k4",
    "term": {
      "de": "die Zutat",
      "en": "ingredient",
      "uk": "інгредієнт",
      "ru": "ингредиент"
    },
    "short": {
      "de": "ein Lebensmittel, das man für ein Rezept braucht",
      "en": "a food item that you need for a recipe",
      "uk": "продукт, який потрібен для рецепту",
      "ru": "продукт, который нужен для рецепта"
    },
    "def": {
      "de": "Für den Kuchen fehlt noch eine <b>Zutat</b>: das <g>Eiweiß</g>.",
      "en": "One <b>ingredient</b> is still missing for the cake: the egg white.",
      "uk": "Для торта не вистачає ще одного <b>інгредієнта</b>: яєчного білка.",
      "ru": "Для торта не хватает ещё одного <b>ингредиента</b>: яичного белка."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_006",
    "cat": "k4",
    "term": {
      "de": "der Geschmack",
      "en": "taste",
      "uk": "смак",
      "ru": "вкус"
    },
    "short": {
      "de": "wie etwas schmeckt, zum Beispiel süß oder salzig",
      "en": "how something tastes, for example sweet or salty",
      "uk": "який смак у чогось, наприклад солодкий чи солоний",
      "ru": "какой вкус у чего-то, например сладкий или солёный"
    },
    "def": {
      "de": "Der <b>Geschmack</b> der Suppe war besser, seit wir <g>Gewürzmischungen</g> benutzt haben.",
      "en": "The <b>taste</b> of the soup got better since we started using spice mixes.",
      "uk": "<b>Смак</b> супу став кращим, відколи ми почали використовувати суміші спецій.",
      "ru": "<b>Вкус</b> супа стал лучше, с тех пор как мы начали использовать смеси специй."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_007",
    "cat": "k4",
    "term": {
      "de": "probieren",
      "en": "to try, taste",
      "uk": "пробувати",
      "ru": "пробовать"
    },
    "short": {
      "de": "etwas zum ersten Mal essen oder trinken, um es kennenzulernen",
      "en": "to eat or drink something for the first time to get to know it",
      "uk": "скуштувати щось уперше, щоб пізнати смак",
      "ru": "попробовать что-то в первый раз, чтобы узнать вкус"
    },
    "def": {
      "de": "Wir haben beim <g>Länderabend</g> viele neue Gerichte <b>probiert</b>.",
      "en": "We <b>tried</b> many new dishes at the international evening.",
      "uk": "Ми <b>спробували</b> багато нових страв на вечорі культур.",
      "ru": "Мы <b>попробовали</b> много новых блюд на вечере культур."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_008",
    "cat": "k4",
    "term": {
      "de": "die Umfrage",
      "en": "survey",
      "uk": "опитування",
      "ru": "опрос"
    },
    "short": {
      "de": "wenn man vielen Menschen die gleichen Fragen stellt, um ihre Meinung zu erfahren",
      "en": "when you ask many people the same questions to find out their opinion",
      "uk": "коли багатьом людям задають одні й ті самі питання, щоб дізнатися їхню думку",
      "ru": "когда многим людям задают одни и те же вопросы, чтобы узнать их мнение"
    },
    "def": {
      "de": "Die Ergebnisse <g>von der</g> <b>Umfrage</b> waren wirklich überraschend.",
      "en": "The results <g>of the</g> <b>survey</b> were really surprising.",
      "uk": "Результати <b>опитування</b> були справді дивовижними.",
      "ru": "Результаты <b>опроса</b> были действительно удивительными."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_009",
    "cat": "k4",
    "term": {
      "de": "gesund / ungesund",
      "en": "healthy / unhealthy",
      "uk": "здоровий / нездоровий",
      "ru": "здоровый / нездоровый"
    },
    "short": {
      "de": "gut oder schlecht für den Körper und das Wohlbefinden",
      "en": "good or bad for the body and well-being",
      "uk": "добре чи погано для тіла та самопочуття",
      "ru": "хорошо или плохо для тела и самочувствия"
    },
    "def": {
      "de": "Die Ernährung <g>von den</g> meisten Jugendlichen ist leider nicht sehr <b>gesund</b>.",
      "en": "The diet <g>of</g> most teenagers is unfortunately not very <b>healthy</b>.",
      "uk": "Харчування більшості підлітків, на жаль, не дуже <b>здорове</b>.",
      "ru": "Питание большинства подростков, к сожалению, не очень <b>здоровое</b>."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_010",
    "cat": "k4",
    "term": {
      "de": "der Snack",
      "en": "snack",
      "uk": "снек, легка закуска",
      "ru": "снек, лёгкая закуска"
    },
    "short": {
      "de": "eine kleine Mahlzeit zwischen den Hauptmahlzeiten",
      "en": "a small meal between main meals",
      "uk": "невеликий прийом їжі між основними прийомами їжі",
      "ru": "небольшой приём еды между основными приёмами еды"
    },
    "def": {
      "de": "Der Preis <g>von dem</g> <b>Snack</b> am Bahnhof war viel zu hoch.",
      "en": "The price <g>of the</g> <b>snack</b> at the station was much too high.",
      "uk": "Ціна <b>снеку</b> на вокзалі була занадто високою.",
      "ru": "Цена <b>снека</b> на вокзале была слишком высокой."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_011",
    "cat": "k4",
    "term": {
      "de": "die Portion",
      "en": "portion",
      "uk": "порція",
      "ru": "порция"
    },
    "short": {
      "de": "die Menge Essen, die man auf einmal isst",
      "en": "the amount of food you eat at once",
      "uk": "кількість їжі, яку ти їси за один раз",
      "ru": "количество еды, которое ты ешь за один раз"
    },
    "def": {
      "de": "Die Größe <g>von der</g> <b>Portion</b> war für mich viel zu groß.",
      "en": "The size <g>of the</g> <b>portion</b> was much too big for me.",
      "uk": "Розмір <b>порції</b> був для мене занадто великим.",
      "ru": "Размер <b>порции</b> был для меня слишком большим."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_012",
    "cat": "k4",
    "term": {
      "de": "verändern",
      "en": "to change",
      "uk": "змінювати",
      "ru": "изменять"
    },
    "short": {
      "de": "anders machen als vorher",
      "en": "to make something different from before",
      "uk": "робити щось інакшим, ніж раніше",
      "ru": "делать что-то иным, чем раньше"
    },
    "def": {
      "de": "Wir haben unsere Essgewohnheiten stark <b>verändert</b>, <g>deswegen</g> fühlen wir uns viel fitter.",
      "en": "We have <b>changed</b> our eating habits a lot, <g>that's why</g> we feel much fitter.",
      "uk": "Ми сильно <b>змінили</b> свої харчові звички, <g>тому</g> почуваємося набагато краще.",
      "ru": "Мы сильно <b>изменили</b> свои привычки питания, <g>поэтому</g> чувствуем себя намного лучше."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_013",
    "cat": "k4",
    "term": {
      "de": "regelmäßig",
      "en": "regularly",
      "uk": "регулярно",
      "ru": "регулярно"
    },
    "short": {
      "de": "immer wieder zur gleichen Zeit oder auf die gleiche Art",
      "en": "again and again at the same time or in the same way",
      "uk": "знову і знову в той самий час чи так само",
      "ru": "снова и снова в то же время или так же"
    },
    "def": {
      "de": "Er isst nicht <b>regelmäßig</b>, <g>trotzdem</g> ist er sehr gesund.",
      "en": "He doesn't eat <b>regularly</b>; <g>nevertheless</g>, he is very healthy.",
      "uk": "Він не їсть <b>регулярно</b>, <g>проте</g> він дуже здоровий.",
      "ru": "Он не ест <b>регулярно</b>, <g>однако</g> он очень здоров."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_014",
    "cat": "k4",
    "term": {
      "de": "die Frischhaltedose",
      "en": "food storage container",
      "uk": "контейнер для зберігання їжі",
      "ru": "контейнер для хранения еды"
    },
    "short": {
      "de": "ein Behälter, in dem man Essen frisch aufbewahrt",
      "en": "a container in which you keep food fresh",
      "uk": "контейнер, у якому зберігають їжу свіжою",
      "ru": "контейнер, в котором хранят еду свежей"
    },
    "def": {
      "de": "Der Deckel <g>von der</g> <b>Frischhaltedose</b> ist leider kaputt.",
      "en": "The lid <g>of the</g> <b>food storage container</b> is unfortunately broken.",
      "uk": "Кришка <b>контейнера для зберігання їжі</b>, на жаль, зламана.",
      "ru": "Крышка <b>контейнера для хранения еды</b>, к сожалению, сломана."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_015",
    "cat": "k4",
    "term": {
      "de": "abwechslungsreich",
      "en": "varied",
      "uk": "різноманітний",
      "ru": "разнообразный"
    },
    "short": {
      "de": "mit vielen verschiedenen Dingen, nicht immer gleich",
      "en": "with many different things, not always the same",
      "uk": "з багатьма різними речами, не завжди однаково",
      "ru": "с множеством разных вещей, не всегда одинаково"
    },
    "def": {
      "de": "Der Speiseplan <g>von der</g> Kantine ist diese Woche sehr <b>abwechslungsreich</b>.",
      "en": "The menu <g>of the</g> canteen is very <b>varied</b> this week.",
      "uk": "Меню їдальні цього тижня дуже <b>різноманітне</b>.",
      "ru": "Меню столовой на этой неделе очень <b>разнообразное</b>."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k5_001",
    "cat": "k5",
    "term": {
      "de": "der Unterschied",
      "en": "difference",
      "uk": "відмінність",
      "ru": "различие"
    },
    "short": {
      "de": "wie zwei Dinge oder Personen nicht gleich sind",
      "en": "how two things or people are not the same",
      "uk": "як дві речі чи особи не є однаковими",
      "ru": "как две вещи или человека не одинаковы"
    },
    "def": {
      "de": "Ich sehe die kulturellen <b>Unterschiede</b> viel klarer, <g>seit</g> ich hier lebe.",
      "en": "I see the cultural <b>differences</b> much more clearly <g>since</g> I have been living here.",
      "uk": "Я бачу культурні <b>відмінності</b> набагато чіткіше, <g>відколи</g> живу тут.",
      "ru": "Я вижу культурные <b>различия</b> намного яснее, <g>с тех пор как</g> живу здесь."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_002",
    "cat": "k5",
    "term": {
      "de": "überraschen",
      "en": "to surprise",
      "uk": "здивувати",
      "ru": "удивлять"
    },
    "short": {
      "de": "etwas Unerwartetes erleben, das man vorher nicht wusste",
      "en": "to experience something unexpected that you didn't know before",
      "uk": "переживати щось несподіване, про що раніше не знав",
      "ru": "переживать что-то неожиданное, о чём раньше не знал"
    },
    "def": {
      "de": "Vieles hat mich <b>überrascht</b>, <g>seitdem</g> ich in Deutschland arbeite.",
      "en": "Many things have <b>surprised</b> me <g>since</g> I have been working in Germany.",
      "uk": "Багато що мене <b>здивувало</b>, <g>відколи</g> я працюю в Німеччині.",
      "ru": "Многое меня <b>удивило</b>, <g>с тех пор как</g> я работаю в Германии."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_003",
    "cat": "k5",
    "term": {
      "de": "sich ärgern",
      "en": "to get annoyed",
      "uk": "сердитися, дратуватися",
      "ru": "сердиться, раздражаться"
    },
    "short": {
      "de": "ein schlechtes Gefühl haben, weil etwas nicht so ist, wie man möchte",
      "en": "to feel bad because something is not the way you want it",
      "uk": "мати погане почуття, бо щось не так, як хочеться",
      "ru": "испытывать плохое чувство, потому что что-то не так, как хочется"
    },
    "def": {
      "de": "<g>Worüber</g> hast du <b>dich</b> gestern so <b>geärgert</b>?",
      "en": "What <g>were</g> you so <b>annoyed</b> <g>about</g> yesterday?",
      "uk": "<g>Через що</g> ти вчора так <b>розсердився</b>?",
      "ru": "<g>Из-за чего</g> ты вчера так <b>разозлился</b>?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_004",
    "cat": "k5",
    "term": {
      "de": "beruhigen",
      "en": "to calm (someone) down",
      "uk": "заспокоювати",
      "ru": "успокаивать"
    },
    "short": {
      "de": "jemandem helfen, ruhiger und weniger nervös zu werden",
      "en": "to help someone become calmer and less nervous",
      "uk": "допомогти комусь стати спокійнішим і менш нервовим",
      "ru": "помочь кому-то стать спокойнее и менее нервным"
    },
    "def": {
      "de": "<g>Darüber</g> musst du dir keine Sorgen machen — ich kann dich <b>beruhigen</b>: alles wird gut.",
      "en": "You don't need to worry <g>about that</g> — I can <b>reassure</b> you: everything will be fine.",
      "uk": "<g>Про це</g> тобі не варто турбуватися — я можу тебе <b>заспокоїти</b>: усе буде добре.",
      "ru": "<g>Об этом</g> тебе не стоит беспокоиться — я могу тебя <b>успокоить</b>: всё будет хорошо."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_005",
    "cat": "k5",
    "term": {
      "de": "das Tabu",
      "en": "taboo",
      "uk": "табу",
      "ru": "табу"
    },
    "short": {
      "de": "ein Thema, über das man in einer Kultur nicht offen spricht",
      "en": "a topic that people in a culture do not talk about openly",
      "uk": "тема, про яку в певній культурі не говорять відкрито",
      "ru": "тема, о которой в определённой культуре не говорят открыто"
    },
    "def": {
      "de": "Über Geld zu sprechen ist bei uns ein <b>Tabu</b>, <g>darüber</g> reden wir fast nie.",
      "en": "Talking about money is a <b>taboo</b> for us; we almost never talk <g>about it</g>.",
      "uk": "Говорити про гроші в нас <b>табу</b>, <g>про це</g> ми майже ніколи не говоримо.",
      "ru": "Говорить о деньгах у нас <b>табу</b>, <g>об этом</g> мы почти никогда не говорим."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_006",
    "cat": "k5",
    "term": {
      "de": "der Smalltalk",
      "en": "small talk",
      "uk": "невимушена розмова",
      "ru": "непринуждённая беседа"
    },
    "short": {
      "de": "ein kurzes, freundliches Gespräch über ein einfaches Thema",
      "en": "a short, friendly conversation about a simple topic",
      "uk": "коротка, приязна розмова на просту тему",
      "ru": "короткий, приятный разговор на простую тему"
    },
    "def": {
      "de": "Beim <b>Smalltalk</b> spricht man meist über das Wetter — <g>darüber</g> kann man immer reden.",
      "en": "In <b>small talk</b>, people usually talk about the weather — you can always talk <g>about that</g>.",
      "uk": "У <b>невимушеній розмові</b> зазвичай говорять про погоду — <g>про це</g> завжди можна говорити.",
      "ru": "В <b>непринуждённой беседе</b> обычно говорят о погоде — <g>об этом</g> всегда можно говорить."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_007",
    "cat": "k5",
    "term": {
      "de": "die Sprachbiografie",
      "en": "language biography",
      "uk": "мовна біографія",
      "ru": "языковая биография"
    },
    "short": {
      "de": "die persönliche Geschichte, wie man eine oder mehrere Sprachen gelernt hat",
      "en": "the personal story of how you learned one or more languages",
      "uk": "особиста історія того, як ти вивчив одну чи кілька мов",
      "ru": "личная история того, как ты выучил один или несколько языков"
    },
    "def": {
      "de": "<g>Worüber</g> handelt deine <b>Sprachbiografie</b> eigentlich?",
      "en": "What is your <b>language biography</b> actually about?",
      "uk": "<g>Про що</g> взагалі твоя <b>мовна біографія</b>?",
      "ru": "<g>О чём</g> вообще твоя <b>языковая биография</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_008",
    "cat": "k5",
    "term": {
      "de": "das Missverständnis",
      "en": "misunderstanding",
      "uk": "непорозуміння",
      "ru": "недопонимание"
    },
    "short": {
      "de": "wenn zwei Personen etwas anders verstehen und das ein Problem macht",
      "en": "when two people understand something differently and it causes a problem",
      "uk": "коли двоє людей розуміють щось по-різному, і це створює проблему",
      "ru": "когда два человека понимают что-то по-разному, и это создаёт проблему"
    },
    "def": {
      "de": "Es gab ein großes <b>Missverständnis</b>, aber <g>darüber</g> haben wir inzwischen gesprochen.",
      "en": "There was a big <b>misunderstanding</b>, but we have talked <g>about it</g> in the meantime.",
      "uk": "Було велике <b>непорозуміння</b>, але <g>про це</g> ми вже поговорили.",
      "ru": "Было большое <b>недопонимание</b>, но <g>об этом</g> мы уже поговорили."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_009",
    "cat": "k5",
    "term": {
      "de": "die Erfahrung",
      "en": "experience",
      "uk": "досвід",
      "ru": "опыт"
    },
    "short": {
      "de": "das, was man im Leben schon erlebt und gelernt hat",
      "en": "what you have already experienced and learned in life",
      "uk": "те, що ти вже пережив і чого навчився в житті",
      "ru": "то, что ты уже пережил и чему научился в жизни"
    },
    "def": {
      "de": "Ich habe gewartet, <g>bis</g> ich genug <b>Erfahrung</b> für den neuen Job hatte.",
      "en": "I waited <g>until</g> I had enough <b>experience</b> for the new job.",
      "uk": "Я чекав, <g>доки</g> не набрав достатньо <b>досвіду</b> для нової роботи.",
      "ru": "Я ждал, <g>пока</g> не набрал достаточно <b>опыта</b> для новой работы."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_010",
    "cat": "k5",
    "term": {
      "de": "der Alltag",
      "en": "everyday life",
      "uk": "повсякдення",
      "ru": "повседневная жизнь"
    },
    "short": {
      "de": "das normale Leben mit den gewöhnlichen Aufgaben jeden Tag",
      "en": "normal life with the usual tasks every day",
      "uk": "звичайне життя зі звичайними справами щодня",
      "ru": "обычная жизнь с обычными делами каждый день"
    },
    "def": {
      "de": "<g>Das Einkaufen</g> und Kochen gehören fest zu meinem <b>Alltag</b>.",
      "en": "Shopping and cooking are a firm part of my <b>everyday life</b>.",
      "uk": "Покупки та приготування їжі — тверда частина мого <b>повсякдення</b>.",
      "ru": "Покупки и готовка — твёрдая часть моей <b>повседневной жизни</b>."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_011",
    "cat": "k5",
    "term": {
      "de": "sich integrieren",
      "en": "to integrate",
      "uk": "інтегруватися",
      "ru": "интегрироваться"
    },
    "short": {
      "de": "ein Teil einer neuen Gesellschaft oder Gruppe werden",
      "en": "to become part of a new society or group",
      "uk": "стати частиною нового суспільства чи групи",
      "ru": "стать частью нового общества или группы"
    },
    "def": {
      "de": "Viele Sprachkurse helfen den Menschen, sich schneller zu <b>integrieren</b>; <g>das Lernen</g> der Sprache ist dabei der wichtigste Schritt.",
      "en": "Many language courses help people <b>integrate</b> faster; learning the language is the most important step.",
      "uk": "Багато мовних курсів допомагають людям швидше <b>інтегруватися</b>; вивчення мови є найважливішим кроком.",
      "ru": "Многие языковые курсы помогают людям быстрее <b>интегрироваться</b>; изучение языка является самым важным шагом."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_012",
    "cat": "k5",
    "term": {
      "de": "die Muttersprache",
      "en": "native language",
      "uk": "рідна мова",
      "ru": "родной язык"
    },
    "short": {
      "de": "die erste Sprache, die man als Kind gelernt hat",
      "en": "the first language you learned as a child",
      "uk": "перша мова, яку ти вивчив у дитинстві",
      "ru": "первый язык, который ты выучил в детстве"
    },
    "def": {
      "de": "<g>Mit wem</g> sprichst du eigentlich deine <b>Muttersprache</b>?",
      "en": "<g>Who</g> do you actually speak your <b>native language</b> with?",
      "uk": "<g>З ким</g> ти взагалі говориш своєю <b>рідною мовою</b>?",
      "ru": "<g>С кем</g> ты вообще говоришь на своём <b>родном языке</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_013",
    "cat": "k5",
    "term": {
      "de": "auffallen",
      "en": "to be noticeable, stand out",
      "uk": "виділятися, впадати в очі",
      "ru": "выделяться, бросаться в глаза"
    },
    "short": {
      "de": "Bemerkt werden, weil etwas anders oder besonders ist",
      "en": "to be noticed because something is different or special",
      "uk": "бути помітним, бо щось відрізняється чи особливе",
      "ru": "быть заметным, потому что что-то отличается или особенное"
    },
    "def": {
      "de": "Der Fehler ist niemandem <b>aufgefallen</b>, <g>bis</g> der Chef die Liste noch einmal gelesen hat.",
      "en": "Nobody <b>noticed</b> the mistake <g>until</g> the boss read the list again.",
      "uk": "Помилку ніхто не <b>помітив</b>, <g>доки</g> керівник ще раз не прочитав список.",
      "ru": "Ошибку никто не <b>заметил</b>, <g>пока</g> начальник снова не прочитал список."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_014",
    "cat": "k5",
    "term": {
      "de": "die Höflichkeit",
      "en": "politeness",
      "uk": "вічливість",
      "ru": "вежливость"
    },
    "short": {
      "de": "ein freundliches und respektvolles Verhalten gegenüber anderen Menschen",
      "en": "friendly and respectful behaviour towards other people",
      "uk": "приязна і шаноблива поведінка стосовно інших людей",
      "ru": "приятное и уважительное поведение по отношению к другим людям"
    },
    "def": {
      "de": "In manchen Ländern zeigt man <b>Höflichkeit</b> anders — <g>darüber</g> haben wir im Kurs gesprochen.",
      "en": "In some countries, people show <b>politeness</b> differently — we talked <g>about that</g> in the course.",
      "uk": "У деяких країнах <b>вічливість</b> виявляють по-іншому — <g>про це</g> ми говорили на курсі.",
      "ru": "В некоторых странах <b>вежливость</b> проявляют по-другому — <g>об этом</g> мы говорили на курсе."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_015",
    "cat": "k5",
    "term": {
      "de": "sich gewöhnen",
      "en": "to get used to",
      "uk": "звикати",
      "ru": "привыкать"
    },
    "short": {
      "de": "nach einiger Zeit etwas Neues normal finden",
      "en": "after some time, to find something new normal",
      "uk": "через деякий час почати вважати щось нове звичним",
      "ru": "через некоторое время начать считать что-то новое обычным"
    },
    "def": {
      "de": "Am Anfang war das Wetter hier komisch für mich, aber <g>daran</g> habe ich <b>mich</b> schnell <b>gewöhnt</b>.",
      "en": "At first the weather here was strange for me, but I quickly <b>got used</b> <g>to it</g>.",
      "uk": "Спочатку погода тут була для мене дивною, але <g>до цього</g> я швидко <b>звик</b>.",
      "ru": "Сначала погода здесь была для меня странной, но <g>к этому</g> я быстро <b>привык</b>."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_001",
    "cat": "k6",
    "term": {
      "de": "die Notaufnahme",
      "en": "emergency room",
      "uk": "приймальне відділення",
      "ru": "приёмный покой"
    },
    "short": {
      "de": "die Abteilung im Krankenhaus für plötzliche, schwere Probleme",
      "en": "the department in a hospital for sudden, serious problems",
      "uk": "відділення в лікарні для раптових, серйозних проблем",
      "ru": "отделение в больнице для внезапных, серьёзных проблем"
    },
    "def": {
      "de": "Er musste sofort in die <b>Notaufnahme</b>, und <g>darüber</g> haben wir uns große Sorgen gemacht.",
      "en": "He had to go to the <b>emergency room</b> immediately, and we worried a lot <g>about that</g>.",
      "uk": "Йому терміново довелося йти в <b>приймальне відділення</b>, і <g>про це</g> ми дуже турбувалися.",
      "ru": "Ему срочно пришлось идти в <b>приёмный покой</b>, и <g>об этом</g> мы очень беспокоились."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_002",
    "cat": "k6",
    "term": {
      "de": "der Notfall",
      "en": "emergency",
      "uk": "надзвичайна ситуація",
      "ru": "экстренный случай"
    },
    "short": {
      "de": "eine plötzliche, gefährliche Situation, in der man schnell helfen muss",
      "en": "a sudden, dangerous situation where you have to help quickly",
      "uk": "раптова, небезпечна ситуація, у якій потрібно швидко допомогти",
      "ru": "внезапная, опасная ситуация, в которой нужно быстро помочь"
    },
    "def": {
      "de": "Bei einem <b>Notfall</b> muss man <g>nicht nur</g> ruhig bleiben, <g>sondern auch</g> schnell die 112 anrufen.",
      "en": "In an <b>emergency</b>, you must <g>not only</g> stay calm <g>but also</g> call 112 quickly.",
      "uk": "У випадку <b>надзвичайної ситуації</b> потрібно <g>не тільки</g> залишатися спокійним, <g>а й</g> швидко зателефонувати на 112.",
      "ru": "В <b>экстренной ситуации</b> нужно <g>не только</g> оставаться спокойным, <g>но и</g> быстро позвонить по номеру 112."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_003",
    "cat": "k6",
    "term": {
      "de": "der Krankenwagen",
      "en": "ambulance",
      "uk": "швидка допомога (машина)",
      "ru": "скорая помощь (машина)"
    },
    "short": {
      "de": "ein besonderes Auto, das kranke oder verletzte Menschen ins Krankenhaus bringt",
      "en": "a special vehicle that takes sick or injured people to the hospital",
      "uk": "особливий автомобіль, який відвозить хворих чи травмованих людей до лікарні",
      "ru": "особый автомобиль, который отвозит больных или травмированных людей в больницу"
    },
    "def": {
      "de": "Der <b>Krankenwagen</b> kam sehr schnell, <g>darüber</g> waren wir alle sehr erleichtert.",
      "en": "The <b>ambulance</b> arrived very quickly, and we were all very relieved <g>about that</g>.",
      "uk": "<b>Швидка допомога</b> приїхала дуже швидко, і <g>з цього</g> ми всі дуже зраділи.",
      "ru": "<b>Скорая помощь</b> приехала очень быстро, и <g>этому</g> мы все очень обрадовались."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_004",
    "cat": "k6",
    "term": {
      "de": "der Verband",
      "en": "bandage",
      "uk": "бинт, повʼязка",
      "ru": "бинт, повязка"
    },
    "short": {
      "de": "ein Stück Stoff, das man um eine Wunde legt",
      "en": "a piece of cloth that you put around a wound",
      "uk": "шматок тканини, який накладають на рану",
      "ru": "кусок ткани, который накладывают на рану"
    },
    "def": {
      "de": "Die Schwester legte einen <b>Verband</b> an, <g>um</g> die Wunde <g>zu</g> schützen.",
      "en": "The nurse put on a <b>bandage</b> <g>in order to</g> protect the wound.",
      "uk": "Медсестра наклала <b>повʼязку</b>, <g>щоб</g> захистити рану.",
      "ru": "Медсестра наложила <b>повязку</b>, <g>чтобы</g> защитить рану."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_005",
    "cat": "k6",
    "term": {
      "de": "die Untersuchung",
      "en": "examination",
      "uk": "обстеження",
      "ru": "обследование"
    },
    "short": {
      "de": "wenn ein Arzt genau prüft, was mit dem Körper los ist",
      "en": "when a doctor carefully checks what is wrong with the body",
      "uk": "коли лікар уважно перевіряє, що з тілом",
      "ru": "когда врач внимательно проверяет, что с телом"
    },
    "def": {
      "de": "Die <b>Untersuchung</b> <g>wird</g> morgen früh <g>stattfinden</g>.",
      "en": "The <b>examination</b> <g>will take place</g> tomorrow morning.",
      "uk": "<b>Обстеження</b> <g>відбудеться</g> завтра вранці.",
      "ru": "<b>Обследование</b> <g>будет проходить</g> завтра утром."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_006",
    "cat": "k6",
    "term": {
      "de": "operieren",
      "en": "to operate (surgically)",
      "uk": "оперувати",
      "ru": "оперировать"
    },
    "short": {
      "de": "einen Körperteil im Krankenhaus mit einer Operation behandeln",
      "en": "to treat a body part in the hospital with an operation",
      "uk": "лікувати частину тіла в лікарні за допомогою операції",
      "ru": "лечить часть тела в больнице с помощью операции"
    },
    "def": {
      "de": "Die Ärztin muss ihn heute noch <b>operieren</b>, <g>damit</g> sich der Zustand nicht verschlechtert.",
      "en": "The doctor has to <b>operate</b> on him today <g>so that</g> his condition doesn't get worse.",
      "uk": "Лікарка має <b>прооперувати</b> його ще сьогодні, <g>щоб</g> стан не погіршився.",
      "ru": "Врач должна <b>прооперировать</b> его ещё сегодня, <g>чтобы</g> состояние не ухудшилось."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_007",
    "cat": "k6",
    "term": {
      "de": "die Behandlung",
      "en": "treatment",
      "uk": "лікування",
      "ru": "лечение"
    },
    "short": {
      "de": "alles, was ein Arzt macht, um eine Krankheit zu heilen",
      "en": "everything a doctor does to cure an illness",
      "uk": "усе, що робить лікар, щоб вилікувати хворобу",
      "ru": "всё, что делает врач, чтобы вылечить болезнь"
    },
    "def": {
      "de": "Die <b>Behandlung</b> war erfolgreich, und die <g>Gesundheit</g> des Patienten hat sich schnell verbessert.",
      "en": "The <b>treatment</b> was successful, and the patient's health improved quickly.",
      "uk": "<b>Лікування</b> було успішним, і здоровʼя пацієнта швидко покращилося.",
      "ru": "<b>Лечение</b> было успешным, и здоровье пациента быстро улучшилось."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_008",
    "cat": "k6",
    "term": {
      "de": "die Station",
      "en": "ward",
      "uk": "відділення (лікарні)",
      "ru": "отделение (больницы)"
    },
    "short": {
      "de": "ein Bereich im Krankenhaus für eine bestimmte Art von Patienten",
      "en": "an area in a hospital for a certain type of patient",
      "uk": "відділення в лікарні для певного типу пацієнтів",
      "ru": "отделение в больнице для определённого типа пациентов"
    },
    "def": {
      "de": "Der Patient <g>wird</g> morgen auf eine andere <b>Station</b> <g>verlegt</g>.",
      "en": "The patient <g>will be</g> <g>transferred</g> to another <b>ward</b> tomorrow.",
      "uk": "Пацієнта завтра <g>переведуть</g> до іншого <b>відділення</b>.",
      "ru": "Пациента завтра <g>переведут</g> в другое <b>отделение</b>."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_009",
    "cat": "k6",
    "term": {
      "de": "sich verletzen",
      "en": "to injure oneself",
      "uk": "травмуватися",
      "ru": "травмироваться"
    },
    "short": {
      "de": "sich beim Unfall oder aus Versehen selbst wehtun",
      "en": "to hurt yourself accidentally or in an accident",
      "uk": "завдати собі шкоди випадково чи під час аварії",
      "ru": "причинить себе вред случайно или во время аварии"
    },
    "def": {
      "de": "Er hat sich beim Sturz <g>nicht nur</g> am Arm <g>sondern auch</g> am Kopf <b>verletzt</b>.",
      "en": "During the fall, he <g>not only</g> <b>hurt</b> his arm <g>but also</g> his head.",
      "uk": "Під час падіння він <g>не тільки</g> <b>травмував</b> руку, <g>а й</g> голову.",
      "ru": "Во время падения он <g>не только</g> <b>травмировал</b> руку, <g>но и</g> голову."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_010",
    "cat": "k6",
    "term": {
      "de": "das Formular",
      "en": "form",
      "uk": "формуляр, бланк",
      "ru": "формуляр, бланк"
    },
    "short": {
      "de": "ein Papier mit Feldern, die man ausfüllen muss",
      "en": "a piece of paper with fields that you have to fill in",
      "uk": "папір з полями, які потрібно заповнити",
      "ru": "бумага с полями, которые нужно заполнить"
    },
    "def": {
      "de": "Sie füllte das <b>Formular</b> sehr sorgfältig aus, <g>um</g> keine Fehler <g>zu</g> machen.",
      "en": "She filled in the <b>form</b> very carefully <g>in order not to</g> make any mistakes.",
      "uk": "Вона дуже уважно заповнила <b>формуляр</b>, <g>щоб</g> не зробити помилок.",
      "ru": "Она очень внимательно заполнила <b>формуляр</b>, <g>чтобы</g> не сделать ошибок."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_011",
    "cat": "k6",
    "term": {
      "de": "die Prognose",
      "en": "prognosis",
      "uk": "прогноз",
      "ru": "прогноз"
    },
    "short": {
      "de": "was ein Arzt über die Zukunft einer Krankheit sagt",
      "en": "what a doctor says about the future course of an illness",
      "uk": "те, що лікар говорить про майбутнє перебігу хвороби",
      "ru": "то, что врач говорит о будущем течении болезни"
    },
    "def": {
      "de": "Der Arzt erklärte die <b>Prognose</b> sehr genau, <g>damit</g> die Familie alles versteht.",
      "en": "The doctor explained the <b>prognosis</b> very precisely <g>so that</g> the family understands everything.",
      "uk": "Лікар дуже детально пояснив <b>прогноз</b>, <g>щоб</g> родина все зрозуміла.",
      "ru": "Врач очень подробно объяснил <b>прогноз</b>, <g>чтобы</g> семья всё поняла."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_012",
    "cat": "k6",
    "term": {
      "de": "das Medikament",
      "en": "medication",
      "uk": "медикамент, ліки",
      "ru": "медикамент, лекарство"
    },
    "short": {
      "de": "etwas, das man gegen eine Krankheit nimmt, um gesund zu werden",
      "en": "something you take against an illness to become healthy",
      "uk": "те, що приймають проти хвороби, щоб стати здоровим",
      "ru": "то, что принимают против болезни, чтобы стать здоровым"
    },
    "def": {
      "de": "Dieses <b>Medikament</b> hilft schnell gegen die <g>Müdigkeit</g> nach der Operation.",
      "en": "This <b>medication</b> quickly helps against the tiredness after the operation.",
      "uk": "Цей <b>медикамент</b> швидко допомагає проти втоми після операції.",
      "ru": "Этот <b>медикамент</b> быстро помогает против усталости после операции."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_013",
    "cat": "k6",
    "term": {
      "de": "der Unfall",
      "en": "accident",
      "uk": "аварія, нещасний випадок",
      "ru": "авария, несчастный случай"
    },
    "short": {
      "de": "ein plötzliches, unerwartetes Ereignis, bei dem jemand verletzt wird",
      "en": "a sudden, unexpected event in which someone gets hurt",
      "uk": "раптова, несподівана подія, під час якої хтось травмується",
      "ru": "внезапное, неожиданное событие, во время которого кто-то получает травму"
    },
    "def": {
      "de": "Bei dem <b>Unfall</b> wurden <g>nicht nur</g> die Fahrer <g>sondern auch</g> zwei Fußgänger verletzt.",
      "en": "In the <b>accident</b>, <g>not only</g> the drivers <g>but also</g> two pedestrians were injured.",
      "uk": "У <b>аварії</b> постраждали <g>не тільки</g> водії, <g>а й</g> двоє пішоходів.",
      "ru": "В <b>аварии</b> пострадали <g>не только</g> водители, <g>но и</g> двое пешеходов."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_014",
    "cat": "k6",
    "term": {
      "de": "der Krankenpfleger / die Krankenpflegerin",
      "en": "nurse",
      "uk": "медбрат / медсестра",
      "ru": "медбрат / медсестра"
    },
    "short": {
      "de": "eine Person, die im Krankenhaus Patienten pflegt und ihnen hilft",
      "en": "a person who takes care of patients in a hospital and helps them",
      "uk": "людина, яка в лікарні доглядає пацієнтів і допомагає їм",
      "ru": "человек, который в больнице ухаживает за пациентами и помогает им"
    },
    "def": {
      "de": "Die <b>Krankenpflegerin</b> zeigte trotz der Müdigkeit große <g>Freundlichkeit</g> zu jedem Patienten.",
      "en": "Despite being tired, the <b>nurse</b> showed great kindness to every patient.",
      "uk": "<b>Медсестра</b>, незважаючи на втому, виявляла велику доброзичливість до кожного пацієнта.",
      "ru": "<b>Медсестра</b>, несмотря на усталость, проявляла большую доброжелательность к каждому пациенту."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_015",
    "cat": "k6",
    "term": {
      "de": "die Geburt",
      "en": "birth",
      "uk": "народження, пологи",
      "ru": "роды, рождение"
    },
    "short": {
      "de": "der Moment, in dem ein Baby zur Welt kommt",
      "en": "the moment when a baby comes into the world",
      "uk": "момент, коли дитина зʼявляється на світ",
      "ru": "момент, когда ребёнок появляется на свет"
    },
    "def": {
      "de": "Nach der <b>Geburt</b> war die ganze Familie voller <g>Dankbarkeit</g> und Freude.",
      "en": "After the <b>birth</b>, the whole family was full of gratitude and joy.",
      "uk": "Після <b>народження</b> вся родина була сповнена вдячності й радості.",
      "ru": "После <b>рождения</b> вся семья была полна благодарности и радости."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_001",
    "cat": "k7",
    "term": {
      "de": "die Umwelt",
      "en": "environment",
      "uk": "довкілля",
      "ru": "окружающая среда"
    },
    "short": {
      "de": "die Natur und alles um uns herum: Luft, Wasser, Pflanzen und Tiere",
      "en": "nature and everything around us: air, water, plants and animals",
      "uk": "природа і все навколо нас: повітря, вода, рослини й тварини",
      "ru": "природа и всё вокруг нас: воздух, вода, растения и животные"
    },
    "def": {
      "de": "Der Schutz der <b>Umwelt</b> braucht viel <g>Aufmerksamkeit</g> von uns allen.",
      "en": "Protecting the <b>environment</b> requires a lot of attention from all of us.",
      "uk": "Захист <b>довкілля</b> потребує великої уваги від усіх нас.",
      "ru": "Защита <b>окружающей среды</b> требует большого внимания от всех нас."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_002",
    "cat": "k7",
    "term": {
      "de": "die Klimakrise",
      "en": "climate crisis",
      "uk": "кліматична криза",
      "ru": "климатический кризис"
    },
    "short": {
      "de": "das große, gefährliche Problem, dass sich das Klima der Erde zu schnell verändert",
      "en": "the big, dangerous problem that the earth's climate is changing too fast",
      "uk": "велика, небезпечна проблема, що клімат Землі змінюється надто швидко",
      "ru": "большая, опасная проблема, что климат Земли меняется слишком быстро"
    },
    "def": {
      "de": "Über die <b>Klimakrise</b> <g>wird</g> heute in fast jeder Zeitung <g>berichtet</g>.",
      "en": "The <b>climate crisis</b> <g>is</g> <g>reported on</g> in almost every newspaper today.",
      "uk": "Про <b>кліматичну кризу</b> сьогодні пишуть майже в кожній газеті.",
      "ru": "О <b>климатическом кризисе</b> сегодня пишут почти в каждой газете."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_003",
    "cat": "k7",
    "term": {
      "de": "der Abfall",
      "en": "waste",
      "uk": "відходи",
      "ru": "отходы"
    },
    "short": {
      "de": "Dinge, die man nicht mehr braucht und wegwirft",
      "en": "things you no longer need and throw away",
      "uk": "речі, які більше не потрібні і які викидають",
      "ru": "вещи, которые больше не нужны и которые выбрасывают"
    },
    "def": {
      "de": "Die richtige Trennung von <b>Abfall</b> zeigt viel <g>Verantwortlichkeit</g> für die Umwelt.",
      "en": "Sorting <b>waste</b> correctly shows a lot of responsibility for the environment.",
      "uk": "Правильне сортування <b>відходів</b> демонструє велику відповідальність за довкілля.",
      "ru": "Правильная сортировка <b>отходов</b> демонстрирует большую ответственность за окружающую среду."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_004",
    "cat": "k7",
    "term": {
      "de": "trennen",
      "en": "to sort, separate (waste)",
      "uk": "сортувати (сміття)",
      "ru": "сортировать (мусор)"
    },
    "short": {
      "de": "Abfall in verschiedene Gruppen sortieren, zum Beispiel Papier und Glas",
      "en": "to sort waste into different groups, for example paper and glass",
      "uk": "сортувати сміття на різні групи, наприклад папір і скло",
      "ru": "сортировать мусор на разные группы, например бумагу и стекло"
    },
    "def": {
      "de": "In Deutschland <g>wird</g> der Abfall sehr genau <g><b>getrennt</b></g>.",
      "en": "In Germany, waste <g>is</g> <g><b>sorted</b></g> very precisely.",
      "uk": "У Німеччині сміття дуже точно <b>сортують</b>.",
      "ru": "В Германии мусор очень точно <b>сортируют</b>."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_005",
    "cat": "k7",
    "term": {
      "de": "das Recycling",
      "en": "recycling",
      "uk": "переробка",
      "ru": "переработка"
    },
    "short": {
      "de": "wenn man alte Materialien wieder zu neuen Produkten macht",
      "en": "when old materials are turned into new products again",
      "uk": "коли зі старих матеріалів знову роблять нові продукти",
      "ru": "когда из старых материалов снова делают новые продукты"
    },
    "def": {
      "de": "Beim <b>Recycling</b> <g>werden</g> alte Flaschen zu neuem Glas <g>verarbeitet</g>.",
      "en": "In <b>recycling</b>, old bottles <g>are</g> <g>processed</g> into new glass.",
      "uk": "У процесі <b>переробки</b> старі бутилки перетворюють на нове скло.",
      "ru": "В процессе <b>переработки</b> старые бутылки превращают в новое стекло."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_006",
    "cat": "k7",
    "term": {
      "de": "die Pfandflasche",
      "en": "deposit bottle",
      "uk": "бутилка з депозитом",
      "ru": "бутылка с депозитом"
    },
    "short": {
      "de": "eine Flasche, für die man beim Kauf extra Geld bezahlt und beim Zurückbringen wiederbekommt",
      "en": "a bottle for which you pay extra money when buying it and get it back when you return it",
      "uk": "бутилка, за яку при покупці платять додаткові гроші і отримують назад при поверненні",
      "ru": "бутылка, за которую при покупке платят дополнительные деньги и получают назад при возврате"
    },
    "def": {
      "de": "Die <b>Pfandflasche</b> <g>wird</g> im Supermarkt <g>zurückgenommen</g> und man bekommt das Geld zurück.",
      "en": "The <b>deposit bottle</b> <g>is</g> <g>taken back</g> at the supermarket and you get the money back.",
      "uk": "<b>Бутилку з депозитом</b> приймають назад у супермаркеті, і гроші повертають.",
      "ru": "<b>Бутылку с депозитом</b> принимают назад в супермаркете, и деньги возвращают."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_007",
    "cat": "k7",
    "term": {
      "de": "nachhaltig",
      "en": "sustainable",
      "uk": "сталий, екологічний",
      "ru": "устойчивый, экологичный"
    },
    "short": {
      "de": "so, dass es der Umwelt für lange Zeit nicht schadet",
      "en": "in a way that does not harm the environment for a long time",
      "uk": "так, що це не шкодить довкіллю протягом тривалого часу",
      "ru": "так, что это не вредит окружающей среде долгое время"
    },
    "def": {
      "de": "Auf diesem Hof <g>wird</g> sehr <b>nachhaltig</b> <g>gearbeitet</g>.",
      "en": "On this farm, work <g>is</g> done in a very <b>sustainable</b> way.",
      "uk": "На цій фермі працюють дуже <b>екологічно</b> (сталим способом).",
      "ru": "На этой ферме работают очень <b>экологично</b> (устойчивым способом)."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_008",
    "cat": "k7",
    "term": {
      "de": "der Ökohof",
      "en": "organic farm",
      "uk": "органічна ферма",
      "ru": "органическая ферма"
    },
    "short": {
      "de": "ein Bauernhof, auf dem man ohne Chemie und umweltfreundlich arbeitet",
      "en": "a farm where people work without chemicals and in an environmentally friendly way",
      "uk": "ферма, на якій працюють без хімії та екологічно чисто",
      "ru": "ферма, на которой работают без химии и экологически чисто"
    },
    "def": {
      "de": "Der <b>Ökohof</b> bietet jedes Jahr eine spannende <g>Führung</g> für Besucher an.",
      "en": "The <b>organic farm</b> offers an exciting tour for visitors every year.",
      "uk": "<b>Органічна ферма</b> щороку пропонує цікаву екскурсію для відвідувачів.",
      "ru": "<b>Органическая ферма</b> каждый год предлагает интересную экскурсию для посетителей."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_009",
    "cat": "k7",
    "term": {
      "de": "saisonal",
      "en": "seasonal",
      "uk": "сезонний",
      "ru": "сезонный"
    },
    "short": {
      "de": "so, dass etwas nur zu einer bestimmten Jahreszeit vorhanden ist",
      "en": "so that something is only available at a certain time of year",
      "uk": "так, що щось є лише в певну пору року",
      "ru": "так, что что-то есть только в определённое время года"
    },
    "def": {
      "de": "Der Hof verkauft nur <b>saisonales</b> Obst — dazu gibt es auch eine gute <g>Beratung</g>.",
      "en": "The farm only sells <b>seasonal</b> fruit — there is also good advice available.",
      "uk": "Ферма продає лише <b>сезонні</b> фрукти — до того ж є хороша консультація.",
      "ru": "Ферма продаёт только <b>сезонные</b> фрукты — к тому же есть хорошая консультация."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_010",
    "cat": "k7",
    "term": {
      "de": "der Energieverbrauch",
      "en": "energy consumption",
      "uk": "енергоспоживання",
      "ru": "энергопотребление"
    },
    "short": {
      "de": "wie viel Energie eine Person, ein Haus oder eine Maschine braucht",
      "en": "how much energy a person, house or machine needs",
      "uk": "скільки енергії потребує людина, будинок чи машина",
      "ru": "сколько энергии требуется человеку, дому или машине"
    },
    "def": {
      "de": "Der <b>Energieverbrauch</b> <g>wird</g> in unserem Haus jetzt genau <g>kontrolliert</g>.",
      "en": "The <b>energy consumption</b> in our house <g>is</g> now precisely <g>monitored</g>.",
      "uk": "<b>Енергоспоживання</b> в нашому будинку зараз точно контролюють.",
      "ru": "<b>Энергопотребление</b> в нашем доме сейчас точно контролируют."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_011",
    "cat": "k7",
    "term": {
      "de": "Energie sparen",
      "en": "to save energy",
      "uk": "економити енергію",
      "ru": "экономить энергию"
    },
    "short": {
      "de": "weniger Strom oder Gas benutzen als vorher",
      "en": "to use less electricity or gas than before",
      "uk": "використовувати менше електроенергії чи газу, ніж раніше",
      "ru": "использовать меньше электроэнергии или газа, чем раньше"
    },
    "def": {
      "de": "In unserem Büro <g>wird</g> jetzt an vielen Stellen <b>Energie</b> <g>gespart</g>.",
      "en": "In our office, <b>energy</b> <g>is</g> now <g>saved</g> in many places.",
      "uk": "У нашому офісі тепер багато де <b>економлять енергію</b>.",
      "ru": "В нашем офисе теперь во многих местах <b>экономят энергию</b>."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_012",
    "cat": "k7",
    "term": {
      "de": "umweltfreundlich",
      "en": "environmentally friendly",
      "uk": "екологічно чистий",
      "ru": "экологически чистый"
    },
    "short": {
      "de": "so, dass es der Umwelt nicht schadet",
      "en": "in a way that does not harm the environment",
      "uk": "так, що це не шкодить довкіллю",
      "ru": "так, что это не вредит окружающей среде"
    },
    "def": {
      "de": "Wir <g>haben</g> unser Auto verkauft und <g>sind</g> auf ein <b>umweltfreundliches</b> Fahrrad <g>umgestiegen</g>.",
      "en": "We <g>have</g> sold our car and <g>have</g> <g>switched</g> to an <b>environmentally friendly</b> bicycle.",
      "uk": "Ми продали авто і перейшли на <b>екологічно чистий</b> велосипед.",
      "ru": "Мы продали машину и перешли на <b>экологически чистый</b> велосипед."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_013",
    "cat": "k7",
    "term": {
      "de": "der Strom",
      "en": "electricity",
      "uk": "електроенергія",
      "ru": "электроэнергия"
    },
    "short": {
      "de": "die Energie, mit der Lampen, Computer und andere Geräte funktionieren",
      "en": "the energy that makes lamps, computers and other devices work",
      "uk": "енергія, завдяки якій працюють лампи, компʼютери та інші прилади",
      "ru": "энергия, благодаря которой работают лампы, компьютеры и другие приборы"
    },
    "def": {
      "de": "Der <b>Strom</b> <g>wird</g> in diesem Dorf komplett aus Sonnenenergie <g>gewonnen</g>.",
      "en": "The <b>electricity</b> in this village <g>is</g> <g>generated</g> completely from solar energy.",
      "uk": "<b>Електроенергію</b> в цьому селі повністю отримують із сонячної енергії.",
      "ru": "<b>Электроэнергию</b> в этой деревне полностью получают из солнечной энергии."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_014",
    "cat": "k7",
    "term": {
      "de": "vermeiden",
      "en": "to avoid",
      "uk": "уникати",
      "ru": "избегать"
    },
    "short": {
      "de": "etwas Schlechtes nicht passieren lassen",
      "en": "to not let something bad happen",
      "uk": "не дозволити чомусь поганому статися",
      "ru": "не дать чему-то плохому произойти"
    },
    "def": {
      "de": "Wir <g>haben</g> in diesem Jahr viel Plastikmüll <g><b>vermieden</b></g>.",
      "en": "This year, we <g>have</g> <g><b>avoided</b></g> a lot of plastic waste.",
      "uk": "Цього року ми <b>уникли</b> багато пластикового сміття.",
      "ru": "В этом году мы <b>избежали</b> много пластикового мусора."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_015",
    "cat": "k7",
    "term": {
      "de": "das Bewusstsein",
      "en": "awareness",
      "uk": "усвідомлення",
      "ru": "осознание"
    },
    "short": {
      "de": "wenn man ein Problem klar versteht und daran denkt",
      "en": "when you clearly understand a problem and think about it",
      "uk": "коли ти чітко розумієш проблему і думаєш про неї",
      "ru": "когда ты чётко понимаешь проблему и думаешь о ней"
    },
    "def": {
      "de": "Das <b>Bewusstsein</b> für Umweltprobleme <g>wird</g> in den Schulen jetzt stärker <g>gefördert</g>.",
      "en": "<b>Awareness</b> of environmental problems <g>is</g> now more strongly <g>promoted</g> in schools.",
      "uk": "<b>Усвідомлення</b> екологічних проблем зараз активніше розвивають у школах.",
      "ru": "<b>Осознание</b> экологических проблем сейчас активнее развивают в школах."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_001",
    "cat": "k8",
    "term": {
      "de": "die Veranstaltung",
      "en": "event",
      "uk": "захід",
      "ru": "мероприятие"
    },
    "short": {
      "de": "ein organisiertes Ereignis, zum Beispiel ein Konzert oder Festival",
      "en": "an organised event, for example a concert or festival",
      "uk": "організована подія, наприклад концерт чи фестиваль",
      "ru": "организованное событие, например концерт или фестиваль"
    },
    "def": {
      "de": "Diese <b>Veranstaltung</b> <g>wird</g> dieses Jahr im Park <g>organisiert</g>.",
      "en": "This <b>event</b> <g>is</g> <g>organised</g> in the park this year.",
      "uk": "Цей <b>захід</b> цього року організовують у парку.",
      "ru": "Это <b>мероприятие</b> в этом году организуют в парке."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_002",
    "cat": "k8",
    "term": {
      "de": "das Festival",
      "en": "festival",
      "uk": "фестиваль",
      "ru": "фестиваль"
    },
    "short": {
      "de": "ein großes Fest mit Musik, Kunst oder Filmen, oft über mehrere Tage",
      "en": "a big celebration with music, art or films, often over several days",
      "uk": "велике свято з музикою, мистецтвом чи фільмами, часто протягом кількох днів",
      "ru": "большой праздник с музыкой, искусством или фильмами, часто на протяжении нескольких дней"
    },
    "def": {
      "de": "Ich freue mich schon sehr <g>auf</g> das <b>Festival</b> nächste Woche.",
      "en": "I am already really looking forward <g>to</g> the <b>festival</b> next week.",
      "uk": "Я вже дуже чекаю на <b>фестиваль</b> наступного тижня.",
      "ru": "Я уже очень жду <b>фестиваль</b> на следующей неделе."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_003",
    "cat": "k8",
    "term": {
      "de": "die Bewertung",
      "en": "review, rating",
      "uk": "відгук, оцінка",
      "ru": "отзыв, оценка"
    },
    "short": {
      "de": "eine persönliche Meinung darüber, ob etwas gut oder schlecht war",
      "en": "a personal opinion about whether something was good or bad",
      "uk": "особиста думка про те, чи щось було хорошим чи поганим",
      "ru": "личное мнение о том, было ли что-то хорошим или плохим"
    },
    "def": {
      "de": "<g>Worauf</g> bezieht sich deine <b>Bewertung</b> genau — auf die Musik oder auf das Essen?",
      "en": "What does your <b>review</b> refer to exactly — the music or the food?",
      "uk": "До чого саме стосується твій <b>відгук</b> — до музики чи до їжі?",
      "ru": "К чему именно относится твой <b>отзыв</b> — к музыке или к еде?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_004",
    "cat": "k8",
    "term": {
      "de": "die Bibliothek",
      "en": "library",
      "uk": "бібліотека",
      "ru": "библиотека"
    },
    "short": {
      "de": "ein Ort, an dem man Bücher ausleihen und lesen kann",
      "en": "a place where you can borrow and read books",
      "uk": "місце, де можна позичити й почитати книжки",
      "ru": "место, где можно взять и почитать книги"
    },
    "def": {
      "de": "<g>Worüber</g> hat die E-Mail von der <b>Bibliothek</b> eigentlich informiert?",
      "en": "What did the email from the <b>library</b> actually inform you about?",
      "uk": "Про що взагалі повідомляв лист від <b>бібліотеки</b>?",
      "ru": "О чём вообще сообщало письмо от <b>библиотеки</b>?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_005",
    "cat": "k8",
    "term": {
      "de": "die Führung",
      "en": "guided tour",
      "uk": "екскурсія (з гідом)",
      "ru": "экскурсия (с гидом)"
    },
    "short": {
      "de": "ein geführter Rundgang, bei dem man etwas über einen Ort erklärt bekommt",
      "en": "a guided walk where someone explains things about a place",
      "uk": "екскурсія з гідом, під час якої тобі пояснюють про якесь місце",
      "ru": "экскурсия с гидом, во время которой тебе объясняют о каком-то месте"
    },
    "def": {
      "de": "Wie lange dauert die <b>Führung</b> <g>denn</g> genau?",
      "en": "So, how long does the <b>guided tour</b> <g>actually</g> take?",
      "uk": "А скільки <g>взагалі</g> триває <b>екскурсія</b>?",
      "ru": "А сколько <g>вообще</g> длится <b>экскурсия</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_006",
    "cat": "k8",
    "term": {
      "de": "das Graffiti",
      "en": "graffiti",
      "uk": "графіті",
      "ru": "графити"
    },
    "short": {
      "de": "ein Bild oder Schriftzug, der mit Farbe an eine Wand oder Mauer gemacht wird",
      "en": "a picture or text made with paint on a wall",
      "uk": "малюнок чи напис, зроблений фарбою на стіні",
      "ru": "рисунок или надпись, сделанная краской на стене"
    },
    "def": {
      "de": "Manche Menschen finden <b>Graffiti</b> schön, andere finden es <g>unpassend</g>.",
      "en": "Some people find <b>graffiti</b> beautiful, others find it inappropriate.",
      "uk": "Деяким людям <b>графіті</b> подобається, іншим воно здається недоречним.",
      "ru": "Некоторым людям <b>графити</b> нравится, другим оно кажется неуместным."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_007",
    "cat": "k8",
    "term": {
      "de": "sich austauschen",
      "en": "to exchange views",
      "uk": "обмінюватися думками",
      "ru": "обмениваться мнениями"
    },
    "short": {
      "de": "miteinander sprechen und Meinungen oder Ideen teilen",
      "en": "to talk with each other and share opinions or ideas",
      "uk": "розмовляти одне з одним і ділитися думками чи ідеями",
      "ru": "разговаривать друг с другом и делиться мнениями или идеями"
    },
    "def": {
      "de": "Die Nachbarn <b>tauschen sich</b> oft über <g>unbekannte</g> Künstler und ihre Werke <b>aus</b>.",
      "en": "The neighbours often <b>exchange views</b> about unknown artists and their works.",
      "uk": "Сусіди часто <b>обмінюються думками</b> про невідомих митців та їхні роботи.",
      "ru": "Соседи часто <b>обмениваются мнениями</b> о неизвестных художниках и их работах."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_008",
    "cat": "k8",
    "term": {
      "de": "planen",
      "en": "to plan",
      "uk": "планувати",
      "ru": "планировать"
    },
    "short": {
      "de": "im Voraus überlegen, was, wann und wie man etwas machen möchte",
      "en": "to think in advance about what, when and how you want to do something",
      "uk": "наперед обмірковувати, що, коли і як хочеш зробити",
      "ru": "заранее обдумывать, что, когда и как хочешь сделать"
    },
    "def": {
      "de": "Wir <b>planen</b> den Ausflug schon lange und freuen uns sehr <g>auf</g> das Festival.",
      "en": "We have been <b>planning</b> the trip for a long time and are really looking forward <g>to</g> the festival.",
      "uk": "Ми вже давно <b>плануємо</b> цю поїздку і дуже чекаємо на фестиваль.",
      "ru": "Мы уже давно <b>планируем</b> эту поездку и очень ждём фестиваль."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_009",
    "cat": "k8",
    "term": {
      "de": "die Ausstellung",
      "en": "exhibition",
      "uk": "виставка",
      "ru": "выставка"
    },
    "short": {
      "de": "ein Ort oder Ereignis, bei dem Kunst oder Objekte gezeigt werden",
      "en": "a place or event where art or objects are shown",
      "uk": "місце чи подія, де показують мистецтво чи предмети",
      "ru": "место или событие, где показывают искусство или предметы"
    },
    "def": {
      "de": "Die neue <b>Ausstellung</b> zeigt auch einige <g>ungewöhnliche</g> Fotografien.",
      "en": "The new <b>exhibition</b> also shows some unusual photographs.",
      "uk": "Нова <b>виставка</b> показує й кілька незвичних фотографій.",
      "ru": "Новая <b>выставка</b> показывает и несколько необычных фотографий."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_010",
    "cat": "k8",
    "term": {
      "de": "teilnehmen",
      "en": "to take part",
      "uk": "брати участь",
      "ru": "принимать участие"
    },
    "short": {
      "de": "bei etwas mitmachen, zum Beispiel bei einer Veranstaltung",
      "en": "to take part in something, for example an event",
      "uk": "брати участь у чомусь, наприклад у заході",
      "ru": "принимать участие в чём-то, например в мероприятии"
    },
    "def": {
      "de": "Trotz des <g>unsicheren</g> Wetters wollten viele Leute an der Führung <b>teilnehmen</b>.",
      "en": "Despite the uncertain weather, many people wanted to <b>take part</b> in the tour.",
      "uk": "Незважаючи на непевну погоду, багато людей хотіли <b>взяти участь</b> в екскурсії.",
      "ru": "Несмотря на неопределённую погоду, многие люди хотели <b>принять участие</b> в экскурсии."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_011",
    "cat": "k8",
    "term": {
      "de": "die Kunst",
      "en": "art",
      "uk": "мистецтво",
      "ru": "искусство"
    },
    "short": {
      "de": "Bilder, Musik, Filme oder andere Werke, die Menschen mit Fantasie schaffen",
      "en": "pictures, music, films or other works that people create with imagination",
      "uk": "картини, музика, фільми чи інші твори, які люди створюють за допомогою фантазії",
      "ru": "картины, музыка, фильмы или другие произведения, которые люди создают с помощью фантазии"
    },
    "def": {
      "de": "Moderne <b>Kunst</b> <g>wird</g> in diesem Museum sehr modern <g>präsentiert</g>.",
      "en": "Modern <b>art</b> <g>is</g> <g>presented</g> in a very modern way in this museum.",
      "uk": "Сучасне <b>мистецтво</b> у цьому музеї показують дуже сучасно.",
      "ru": "Современное <b>искусство</b> в этом музее показывают очень современно."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_012",
    "cat": "k8",
    "term": {
      "de": "begeistert",
      "en": "enthusiastic",
      "uk": "захоплений",
      "ru": "восторженный, увлечённый"
    },
    "short": {
      "de": "sehr glücklich und voller Interesse wegen etwas",
      "en": "very happy and full of interest because of something",
      "uk": "дуже щасливий і сповнений інтересу через щось",
      "ru": "очень счастливый и полный интереса из-за чего-то"
    },
    "def": {
      "de": "<g>Wovon</g> warst du beim Festival am meisten <b>begeistert</b>?",
      "en": "What were you most <b>enthusiastic</b> about at the festival?",
      "uk": "Чим ти був найбільше <b>захоплений</b> на фестивалі?",
      "ru": "Чем ты был больше всего <b>увлечён</b> на фестивале?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_013",
    "cat": "k8",
    "term": {
      "de": "der Eintritt",
      "en": "admission, entry",
      "uk": "вхід (плата за вхід)",
      "ru": "вход (плата за вход)"
    },
    "short": {
      "de": "das Geld, das man bezahlt, um in eine Veranstaltung zu gehen",
      "en": "the money you pay to go into an event",
      "uk": "гроші, які платять, щоб потрапити на подію",
      "ru": "деньги, которые платят, чтобы попасть на мероприятие"
    },
    "def": {
      "de": "Wie viel kostet der <b>Eintritt</b> <g>eigentlich</g> für die Bibliotheksführung?",
      "en": "So, how much does the <b>admission</b> for the library tour <g>actually</g> cost?",
      "uk": "А скільки <g>взагалі</g> коштує <b>вхід</b> на екскурсію по бібліотеці?",
      "ru": "А сколько <g>вообще</g> стоит <b>вход</b> на экскурсию по библиотеке?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_014",
    "cat": "k8",
    "term": {
      "de": "empfehlen",
      "en": "to recommend",
      "uk": "рекомендувати",
      "ru": "рекомендовать"
    },
    "short": {
      "de": "jemandem sagen, dass etwas gut ist und man es machen oder kaufen sollte",
      "en": "to tell someone that something is good and they should do or buy it",
      "uk": "казати комусь, що щось хорошe і варто це зробити чи купити",
      "ru": "говорить кому-то, что что-то хорошее и стоит это сделать или купить"
    },
    "def": {
      "de": "Ich kann das Festival <g>uneingeschränkt</g> <b>empfehlen</b>.",
      "en": "I can wholeheartedly <b>recommend</b> the festival.",
      "uk": "Я можу беззастережно <b>порекомендувати</b> цей фестиваль.",
      "ru": "Я могу безоговорочно <b>порекомендовать</b> этот фестиваль."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_015",
    "cat": "k8",
    "term": {
      "de": "das Angebot",
      "en": "offer, program",
      "uk": "пропозиція, програма",
      "ru": "предложение, программа"
    },
    "short": {
      "de": "etwas, das eine Firma oder Organisation den Menschen anbietet",
      "en": "something that a company or organisation offers to people",
      "uk": "те, що фірма чи організація пропонує людям",
      "ru": "то, что фирма или организация предлагает людям"
    },
    "def": {
      "de": "<g>Worauf</g> bezieht sich das neue <b>Angebot</b> der Bibliothek genau?",
      "en": "What exactly does the library's new <b>offer</b> refer to?",
      "uk": "До чого саме стосується нова <b>пропозиція</b> бібліотеки?",
      "ru": "К чему именно относится новое <b>предложение</b> библиотеки?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k9_001",
    "cat": "k9",
    "term": {
      "de": "die Bewerbung, -en",
      "en": "job application",
      "uk": "заява про прийом на роботу",
      "ru": "заявление о приёме на работу"
    },
    "short": {
      "de": "ein Brief oder Formular, mit dem man sich für eine Stelle bewirbt",
      "en": "a letter or form that you use to apply for a job",
      "uk": "лист або форма, за допомогою яких людина подає заявку на посаду",
      "ru": "письмо или форма, с помощью которых человек подаёт заявку на должность"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> eine Rückmeldung zu meiner <b>Bewerbung</b>, denn ich warte schon zwei Wochen.",
      "en": "<g>I would like</g> feedback on my <b>application</b>, because I have already been waiting two weeks.",
      "uk": "<g>Я хотів би</g> отримати відповідь щодо моєї <b>заяви</b>, адже я чекаю вже два тижні.",
      "ru": "<g>Я хотел бы</g> получить ответ по моей <b>заявке</b>, ведь я жду уже две недели."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_002",
    "cat": "k9",
    "term": {
      "de": "das Anschreiben, -",
      "en": "cover letter",
      "uk": "супровідний лист",
      "ru": "сопроводительное письмо"
    },
    "short": {
      "de": "ein persönlicher Brief, der zu einer Bewerbung gehört",
      "en": "a personal letter that is part of a job application",
      "uk": "особистий лист, який є частиною заяви про прийом на роботу",
      "ru": "личное письмо, которое является частью заявления о приёме на работу"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> Ihre Meinung zu meinem <b>Anschreiben</b>, bevor ich es endgültig verschicke.",
      "en": "<g>I would like</g> your opinion on my <b>cover letter</b> before I send it off for good.",
      "uk": "<g>Я хотів би</g> почути вашу думку щодо мого <b>супровідного листа</b>, перш ніж остаточно його надіслати.",
      "ru": "<g>Я хотел бы</g> услышать ваше мнение о моём <b>сопроводительном письме</b>, прежде чем окончательно его отправить."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_003",
    "cat": "k9",
    "term": {
      "de": "die Stellenanzeige, -n",
      "en": "job advertisement",
      "uk": "оголошення про вакансію",
      "ru": "объявление о вакансии"
    },
    "short": {
      "de": "eine Anzeige, in der eine Firma eine freie Stelle sucht",
      "en": "an advertisement in which a company is looking to fill a position",
      "uk": "оголошення, у якому фірма шукає працівника на вакантну посаду",
      "ru": "объявление, в котором фирма ищет работника на вакантную должность"
    },
    "def": {
      "de": "<g>Wenn</g> die <b>Stellenanzeige</b> nicht so interessant <g>wäre</g>, würde ich mich gar nicht erst bewerben.",
      "en": "<g>If</g> the job <b>advertisement</b> <g>weren't</g> so interesting, I wouldn't even apply.",
      "uk": "<g>Якби</g> це <b>оголошення про вакансію</b> не було таким цікавим, я б навіть не подавав заявку.",
      "ru": "<g>Если бы</g> это <b>объявление о вакансии</b> не было таким интересным, я бы даже не подавал заявку."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_004",
    "cat": "k9",
    "term": {
      "de": "das Vorstellungsgespräch, -e",
      "en": "job interview",
      "uk": "співбесіда",
      "ru": "собеседование"
    },
    "short": {
      "de": "ein Gespräch zwischen einer Firma und einem Bewerber vor der Einstellung",
      "en": "a conversation between a company and an applicant before hiring",
      "uk": "розмова між фірмою та кандидатом перед прийомом на роботу",
      "ru": "разговор между фирмой и кандидатом перед приёмом на работу"
    },
    "def": {
      "de": "Ich freue mich <g>darauf, dass</g> ich morgen zu einem <b>Vorstellungsgespräch</b> eingeladen wurde.",
      "en": "I am looking forward <g>to the fact that</g> I was invited to a <b>job interview</b> tomorrow.",
      "uk": "Я радію <g>тому, що</g> мене запросили на <b>співбесіду</b> завтра.",
      "ru": "Я рад <g>тому, что</g> меня пригласили на <b>собеседование</b> завтра."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_005",
    "cat": "k9",
    "term": {
      "de": "die Kündigung, -en",
      "en": "notice of termination",
      "uk": "звільнення",
      "ru": "увольнение"
    },
    "short": {
      "de": "die schriftliche Erklärung, dass ein Arbeitsverhältnis endet",
      "en": "the written statement that an employment relationship is ending",
      "uk": "письмове повідомлення про припинення трудових відносин",
      "ru": "письменное уведомление о прекращении трудовых отношений"
    },
    "def": {
      "de": "Ich habe mich <g>darüber gewundert, dass</g> die <b>Kündigung</b> so plötzlich kam.",
      "en": "I was surprised <g>that</g> the <b>notice of termination</b> came so suddenly.",
      "uk": "Я був здивований <g>тим, що</g> <b>звільнення</b> прийшло так раптово.",
      "ru": "Я был удивлён <g>тем, что</g> <b>увольнение</b> пришло так внезапно."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_006",
    "cat": "k9",
    "term": {
      "de": "der Lohn, Löhne",
      "en": "wage",
      "uk": "заробітна плата",
      "ru": "заработная плата"
    },
    "short": {
      "de": "das Geld, das man für seine Arbeit bekommt",
      "en": "the money you receive for your work",
      "uk": "гроші, які людина отримує за свою роботу",
      "ru": "деньги, которые человек получает за свою работу"
    },
    "def": {
      "de": "Der <b>Lohn</b> für diese <g>anstrengende</g> Arbeit ist leider nicht besonders hoch.",
      "en": "The <b>wage</b> for this exhausting work is unfortunately not particularly high.",
      "uk": "<b>Заробітна плата</b> за цю виснажливу роботу, на жаль, не дуже висока.",
      "ru": "<b>Заработная плата</b> за эту изнурительную работу, к сожалению, не очень высокая."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_007",
    "cat": "k9",
    "term": {
      "de": "die Überstunde, -n",
      "en": "overtime hour",
      "uk": "понаднормова година",
      "ru": "сверхурочный час"
    },
    "short": {
      "de": "eine Stunde, die man zusätzlich zur normalen Arbeitszeit arbeitet",
      "en": "an hour that you work in addition to your normal working time",
      "uk": "година, яку відпрацьовують понад звичайний робочий час",
      "ru": "час, отработанный сверх обычного рабочего времени"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> weniger <b>Überstunden</b>, damit ich mehr Zeit für meine Familie habe.",
      "en": "<g>I would like</g> fewer <b>overtime hours</b>, so that I have more time for my family.",
      "uk": "<g>Я хотів би</g> мати менше <b>понаднормових годин</b>, щоб мати більше часу для родини.",
      "ru": "<g>Я хотел бы</g> иметь меньше <b>сверхурочных часов</b>, чтобы у меня было больше времени для семьи."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_008",
    "cat": "k9",
    "term": {
      "de": "die Teilzeit (Sg.)",
      "en": "part-time work",
      "uk": "неповна зайнятість",
      "ru": "неполная занятость"
    },
    "short": {
      "de": "eine Arbeitsform, bei der man weniger Stunden als in Vollzeit arbeitet",
      "en": "a form of work where you work fewer hours than full-time",
      "uk": "форма зайнятості, за якої працюють менше годин, ніж повний робочий день",
      "ru": "форма занятости, при которой работают меньше часов, чем полный рабочий день"
    },
    "def": {
      "de": "<g>Wenn</g> ich in <b>Teilzeit</b> arbeiten <g>würde</g>, hätte ich mehr Zeit für mein Studium.",
      "en": "<g>If</g> I <g>worked</g> <b>part-time</b>, I would have more time for my studies.",
      "uk": "<g>Якби</g> я <g>працював</g> на умовах <b>неповної зайнятості</b>, у мене було б більше часу на навчання.",
      "ru": "<g>Если бы</g> я <g>работал</g> на условиях <b>неполной занятости</b>, у меня было бы больше времени на учёбу."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_009",
    "cat": "k9",
    "term": {
      "de": "das Homeoffice (Sg.)",
      "en": "home office / remote work",
      "uk": "домашній офіс / дистанційна робота",
      "ru": "домашний офис / удалённая работа"
    },
    "short": {
      "de": "ein Arbeitsplatz zu Hause statt im Büro",
      "en": "a workplace at home instead of in the office",
      "uk": "робоче місце вдома замість офісу",
      "ru": "рабочее место дома вместо офиса"
    },
    "def": {
      "de": "Mein Chef besteht <g>darauf, dass</g> wir mindestens zwei Tage pro Woche im <b>Homeoffice</b> arbeiten.",
      "en": "My boss insists <g>that</g> we work from <b>home office</b> at least two days a week.",
      "uk": "Мій керівник наполягає <g>на тому, щоб</g> ми працювали з <b>домашнього офісу</b> щонайменше два дні на тиждень.",
      "ru": "Мой руководитель настаивает <g>на том, чтобы</g> мы работали из <b>домашнего офиса</b> минимум два дня в неделю."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_010",
    "cat": "k9",
    "term": {
      "de": "die Weiterbildung, -en",
      "en": "further training",
      "uk": "підвищення кваліфікації",
      "ru": "повышение квалификации"
    },
    "short": {
      "de": "ein Kurs oder ein Training, mit dem man neue berufliche Kenntnisse lernt",
      "en": "a course or training in which you learn new professional skills",
      "uk": "курс або тренінг, під час якого людина здобуває нові професійні знання",
      "ru": "курс или тренинг, в ходе которого человек получает новые профессиональные знания"
    },
    "def": {
      "de": "Für diese <g>berufliche</g> <b>Weiterbildung</b> braucht man keine Vorkenntnisse.",
      "en": "No prior knowledge is required for this professional <b>further training</b>.",
      "uk": "Для цього професійного <b>підвищення кваліфікації</b> попередні знання не потрібні.",
      "ru": "Для этого профессионального <b>повышения квалификации</b> предварительные знания не нужны."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_011",
    "cat": "k9",
    "term": {
      "de": "der/die Angestellte, -n",
      "en": "employee",
      "uk": "службовець / службовиця",
      "ru": "служащий / служащая"
    },
    "short": {
      "de": "eine Person, die für eine Firma arbeitet und dafür Geld bekommt",
      "en": "a person who works for a company and is paid for it",
      "uk": "особа, яка працює на фірму і отримує за це гроші",
      "ru": "лицо, которое работает на фирму и получает за это деньги"
    },
    "def": {
      "de": "Als <g>langjährige</g> <b>Angestellte</b> kennt sie die Firma besser als jeder andere.",
      "en": "As a long-standing <b>employee</b>, she knows the company better than anyone else.",
      "uk": "Як багаторічна <b>службовиця</b>, вона знає фірму краще за будь-кого іншого.",
      "ru": "Как многолетняя <b>служащая</b>, она знает фирму лучше, чем кто-либо другой."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_012",
    "cat": "k9",
    "term": {
      "de": "sich weiterbilden",
      "en": "to pursue further training",
      "uk": "підвищувати свою кваліфікацію",
      "ru": "повышать свою квалификацию"
    },
    "short": {
      "de": "neue berufliche Kenntnisse lernen, um besser zu werden",
      "en": "to learn new professional skills in order to improve",
      "uk": "здобувати нові професійні знання, щоб стати кращим фахівцем",
      "ru": "получать новые профессиональные знания, чтобы стать лучше как специалист"
    },
    "def": {
      "de": "Er möchte <b>sich</b> <g>beruflich</g> <b>weiterbilden</b>, um bessere Chancen auf dem Arbeitsmarkt zu haben.",
      "en": "He wants to keep <b>training</b> professionally in order to have better chances on the job market.",
      "uk": "Він хоче <g>професійно</g> <b>підвищувати свою кваліфікацію</b>, щоб мати кращі шанси на ринку праці.",
      "ru": "Он хочет профессионально <b>повышать свою квалификацию</b>, чтобы иметь лучшие шансы на рынке труда."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_013",
    "cat": "k9",
    "term": {
      "de": "tätig sein",
      "en": "to be employed (as)",
      "uk": "працювати (на посаді)",
      "ru": "работать (в должности)"
    },
    "short": {
      "de": "in einem bestimmten Beruf oder Bereich arbeiten",
      "en": "to work in a certain profession or field",
      "uk": "працювати в певній професії або сфері",
      "ru": "работать в определённой профессии или сфере"
    },
    "def": {
      "de": "Sie <b>ist</b> seit fünf Jahren in einer <g>technischen</g> Abteilung <b>tätig</b>.",
      "en": "She <b>has been employed</b> in a technical department for five years.",
      "uk": "Вона вже пʼять років <b>працює</b> у технічному відділі.",
      "ru": "Она уже пять лет <b>работает</b> в техническом отделе."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_014",
    "cat": "k9",
    "term": {
      "de": "die Verantwortung (Sg.)",
      "en": "responsibility",
      "uk": "відповідальність",
      "ru": "ответственность"
    },
    "short": {
      "de": "die Pflicht, für eine Aufgabe oder eine Person zu sorgen",
      "en": "the duty to take care of a task or a person",
      "uk": "обовʼязок дбати про завдання чи людину",
      "ru": "обязанность заботиться о задаче или человеке"
    },
    "def": {
      "de": "In dieser <g>leitenden</g> Position trägt man eine große <b>Verantwortung</b>.",
      "en": "In this leading position, you carry a great deal of <b>responsibility</b>.",
      "uk": "На цій керівній посаді несуть велику <b>відповідальність</b>.",
      "ru": "На этой руководящей должности несут большую <b>ответственность</b>."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_015",
    "cat": "k9",
    "term": {
      "de": "der Wunsch, Wünsche",
      "en": "wish",
      "uk": "бажання",
      "ru": "желание"
    },
    "short": {
      "de": "etwas, das man gern hätte oder gern tun möchte",
      "en": "something that you would like to have or do",
      "uk": "те, що людина хотіла б мати чи зробити",
      "ru": "то, что человек хотел бы иметь или сделать"
    },
    "def": {
      "de": "Ihr größter <g>beruflicher</g> <b>Wunsch</b> ist eine Führungsposition.",
      "en": "Her biggest professional <b>wish</b> is a leadership position.",
      "uk": "Її найбільше професійне <b>бажання</b> — керівна посада.",
      "ru": "Её самое большое профессиональное <b>желание</b> — руководящая должность."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_016",
    "cat": "k9",
    "term": {
      "de": "die Wirklichkeit, -en",
      "en": "reality",
      "uk": "дійсність",
      "ru": "действительность"
    },
    "short": {
      "de": "das, was wirklich passiert, im Gegensatz zu Träumen oder Plänen",
      "en": "what really happens, as opposed to dreams or plans",
      "uk": "те, що відбувається насправді, на відміну від мрій чи планів",
      "ru": "то, что происходит на самом деле, в отличие от мечтаний или планов"
    },
    "def": {
      "de": "Die <g>wirtschaftliche</g> <b>Wirklichkeit</b> sieht für viele Berufseinsteiger anders aus als erwartet.",
      "en": "The economic <b>reality</b> looks different for many career starters than expected.",
      "uk": "Економічна <b>дійсність</b> для багатьох новачків у професії виглядає інакше, ніж очікувалося.",
      "ru": "Экономическая <b>действительность</b> для многих новичков в профессии выглядит иначе, чем ожидалось."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k10_001",
    "cat": "k10",
    "term": {
      "de": "sich bewegen",
      "en": "to exercise / to move",
      "uk": "рухатися",
      "ru": "двигаться"
    },
    "short": {
      "de": "den Körper aktiv benutzen, zum Beispiel beim Sport",
      "en": "to use the body actively, for example during sport",
      "uk": "активно рухати тілом, наприклад під час спорту",
      "ru": "активно двигать телом, например во время спорта"
    },
    "def": {
      "de": "Man sollte sich gut aufwärmen, <g>bevor</g> man <b>sich</b> beim Sport intensiv <b>bewegt</b>.",
      "en": "You should warm up well <g>before</g> you <b>exercise</b> intensively.",
      "uk": "Слід добре розігрітися, <g>перш ніж</g> активно <b>рухатися</b> під час спорту.",
      "ru": "Следует хорошо размяться, <g>прежде чем</g> активно <b>двигаться</b> во время спорта."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_002",
    "cat": "k10",
    "term": {
      "de": "sich anstrengen",
      "en": "to make an effort",
      "uk": "докладати зусиль",
      "ru": "прилагать усилия"
    },
    "short": {
      "de": "viel Kraft oder Energie für etwas einsetzen",
      "en": "to put a lot of strength or energy into something",
      "uk": "докладати багато сили чи енергії до чогось",
      "ru": "прилагать много сил или энергии к чему-либо"
    },
    "def": {
      "de": "<g>Bevor</g> du <b>dich</b> im Wettkampf <b>anstrengst</b>, solltest du genug schlafen.",
      "en": "<g>Before</g> you <b>push yourself</b> in the competition, you should get enough sleep.",
      "uk": "<g>Перш ніж</g> <b>докладати зусиль</b> на змаганні, тобі слід добре виспатися.",
      "ru": "<g>Прежде чем</g> <b>прилагать усилия</b> на соревновании, тебе следует хорошо выспаться."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_003",
    "cat": "k10",
    "term": {
      "de": "das Workout, -s",
      "en": "workout",
      "uk": "тренування",
      "ru": "тренировка"
    },
    "short": {
      "de": "ein intensives sportliches Training",
      "en": "an intensive sports training session",
      "uk": "інтенсивне спортивне тренування",
      "ru": "интенсивная спортивная тренировка"
    },
    "def": {
      "de": "Das <g>intensive</g> <b>Workout</b> hat mich total erschöpft.",
      "en": "The intensive <b>workout</b> completely exhausted me.",
      "uk": "Це інтенсивне <b>тренування</b> мене повністю виснажило.",
      "ru": "Эта интенсивная <b>тренировка</b> меня полностью вымотала."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_004",
    "cat": "k10",
    "term": {
      "de": "der Muskel, -n",
      "en": "muscle",
      "uk": "мʼяз",
      "ru": "мышца"
    },
    "short": {
      "de": "ein Teil des Körpers, mit dem man sich bewegt",
      "en": "a part of the body that you use to move",
      "uk": "частина тіла, за допомогою якої людина рухається",
      "ru": "часть тела, с помощью которой человек двигается"
    },
    "def": {
      "de": "Nach dem Training tut mir jeder <g>einzelne</g> <b>Muskel</b> weh.",
      "en": "After training, every single <b>muscle</b> hurts.",
      "uk": "Після тренування болить кожен окремий <b>мʼяз</b>.",
      "ru": "После тренировки болит каждая отдельная <b>мышца</b>."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_005",
    "cat": "k10",
    "term": {
      "de": "der Wettkampf, -kämpfe",
      "en": "competition",
      "uk": "змагання",
      "ru": "соревнование"
    },
    "short": {
      "de": "ein Ereignis, bei dem Sportler gegeneinander antreten",
      "en": "an event in which athletes compete against each other",
      "uk": "подія, під час якої спортсмени змагаються один з одним",
      "ru": "событие, во время которого спортсмены соревнуются друг с другом"
    },
    "def": {
      "de": "<g>Bevor</g> der <b>Wettkampf</b> beginnt, müssen sich alle Sportler aufwärmen.",
      "en": "<g>Before</g> the <b>competition</b> begins, all athletes have to warm up.",
      "uk": "<g>Перш ніж</g> <b>змагання</b> почнеться, усі спортсмени повинні розігрітися.",
      "ru": "<g>Прежде чем</g> <b>соревнование</b> начнётся, все спортсмены должны размяться."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_006",
    "cat": "k10",
    "term": {
      "de": "an einem Wettkampf teilnehmen",
      "en": "to take part in a competition",
      "uk": "брати участь у змаганні",
      "ru": "принимать участие в соревновании"
    },
    "short": {
      "de": "bei einem sportlichen Wettbewerb mitmachen",
      "en": "to take part in a sports competition",
      "uk": "брати участь у спортивному змаганні",
      "ru": "принимать участие в спортивном соревновании"
    },
    "def": {
      "de": "Nur die <g>besten</g> Athleten dürfen <b>an</b> diesem <b>Wettkampf</b> <b>teilnehmen</b>.",
      "en": "Only the <g>best</g> athletes are allowed <b>to take part in</b> this <b>competition</b>.",
      "uk": "Лише <g>найкращі</g> атлети можуть <b>брати участь у</b> цьому <b>змаганні</b>.",
      "ru": "Только <g>лучшие</g> атлеты могут <b>принимать участие в</b> этом <b>соревновании</b>."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_007",
    "cat": "k10",
    "term": {
      "de": "die Meisterschaft, -en",
      "en": "championship",
      "uk": "чемпіонат",
      "ru": "чемпионат"
    },
    "short": {
      "de": "ein großer Wettbewerb, bei dem der beste Sportler oder das beste Team gesucht wird",
      "en": "a major competition to find the best athlete or team",
      "uk": "великі змагання, у яких визначають найкращого спортсмена чи команду",
      "ru": "крупное соревнование, в котором определяют лучшего спортсмена или команду"
    },
    "def": {
      "de": "Diese <g>größte</g> <b>Meisterschaft</b> des Jahres findet in München statt.",
      "en": "This <g>biggest</g> <b>championship</b> of the year takes place in Munich.",
      "uk": "Цей <g>найбільший</g> <b>чемпіонат</b> року відбудеться в Мюнхені.",
      "ru": "Этот <g>крупнейший</g> <b>чемпионат</b> года пройдёт в Мюнхене."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_008",
    "cat": "k10",
    "term": {
      "de": "der Sieg, -e",
      "en": "victory",
      "uk": "перемога",
      "ru": "победа"
    },
    "short": {
      "de": "das Gewinnen in einem Wettkampf oder Spiel",
      "en": "winning in a competition or game",
      "uk": "перемога у змаганні чи грі",
      "ru": "победа в соревновании или игре"
    },
    "def": {
      "de": "<g>Das Beste</g> an diesem <b>Sieg</b> war die Freude der ganzen Mannschaft.",
      "en": "The best thing about this <b>victory</b> was the joy of the whole team.",
      "uk": "Найкращим у цій <b>перемозі</b> була радість усієї команди.",
      "ru": "Самым лучшим в этой <b>победе</b> была радость всей команды."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_009",
    "cat": "k10",
    "term": {
      "de": "ein Tor schießen",
      "en": "to score a goal",
      "uk": "забити гол",
      "ru": "забить гол"
    },
    "short": {
      "de": "beim Fußball den Ball ins Tor bringen und einen Punkt machen",
      "en": "to kick the ball into the goal in football and score a point",
      "uk": "у футболі забити мʼяч у ворота й здобути очко",
      "ru": "в футболе забить мяч в ворота и набрать очко"
    },
    "def": {
      "de": "<g>Etwas Besonderes</g> passierte, als der jüngste Spieler <b>ein Tor</b> <b>schoss</b>.",
      "en": "Something special happened when the youngest player <b>scored a goal</b>.",
      "uk": "Сталося щось особливе, коли наймолодший гравець <b>забив гол</b>.",
      "ru": "Произошло нечто особенное, когда самый молодой игрок <b>забил гол</b>."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_010",
    "cat": "k10",
    "term": {
      "de": "die Sportart, -en",
      "en": "type of sport",
      "uk": "вид спорту",
      "ru": "вид спорта"
    },
    "short": {
      "de": "eine bestimmte Art von Sport, zum Beispiel Fußball oder Schwimmen",
      "en": "a particular type of sport, for example football or swimming",
      "uk": "певний вид спорту, наприклад футбол чи плавання",
      "ru": "определённый вид спорта, например футбол или плавание"
    },
    "def": {
      "de": "<g>Nichts Neues</g> gab es bei dieser <b>Sportart</b>, die Regeln bleiben immer gleich.",
      "en": "There was nothing new about this <b>type of sport</b>, the rules always stay the same.",
      "uk": "Нічого нового не було в цьому <b>виді спорту</b>, правила завжди залишаються однаковими.",
      "ru": "Ничего нового не было в этом <b>виде спорта</b>, правила всегда остаются одинаковыми."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_011",
    "cat": "k10",
    "term": {
      "de": "überzeugen",
      "en": "to convince",
      "uk": "переконувати",
      "ru": "убеждать"
    },
    "short": {
      "de": "jemandem so gute Gründe geben, dass er seine Meinung ändert",
      "en": "to give someone such good reasons that they change their opinion",
      "uk": "наводити комусь такі вагомі аргументи, що людина змінює свою думку",
      "ru": "приводить кому-либо такие веские аргументы, что человек меняет своё мнение"
    },
    "def": {
      "de": "Der Trainer konnte die Mannschaft von <g>etwas Wichtigem</g> <b>überzeugen</b>: dass sie gewinnen können.",
      "en": "The coach managed to <b>convince</b> the team of something important: that they can win.",
      "uk": "Тренеру вдалося <b>переконати</b> команду в дечому важливому: що вони можуть перемогти.",
      "ru": "Тренеру удалось <b>убедить</b> команду в чём-то важном: что они могут победить."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_012",
    "cat": "k10",
    "term": {
      "de": "überreden",
      "en": "to persuade",
      "uk": "умовляти",
      "ru": "уговаривать"
    },
    "short": {
      "de": "jemanden so lange bitten, bis er etwas tut, was er zuerst nicht wollte",
      "en": "to keep asking someone until they do something they didn't want to do at first",
      "uk": "умовляти когось так довго, поки він не зробить те, чого спочатку не хотів",
      "ru": "уговаривать кого-либо так долго, пока он не сделает то, чего сначала не хотел"
    },
    "def": {
      "de": "Nach langem Reden konnte sie ihn zu <g>etwas Verrücktem</g> <b>überreden</b> — einem Marathon.",
      "en": "After a long talk, she managed to <b>persuade</b> him to do something crazy — a marathon.",
      "uk": "Після довгих умовлянь вона змогла <b>умовити</b> його на дещо божевільне — марафон.",
      "ru": "После долгих уговоров она смогла <b>уговорить</b> его на что-то безумное — марафон."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_013",
    "cat": "k10",
    "term": {
      "de": "die Fitness steigern",
      "en": "to improve fitness",
      "uk": "покращувати фізичну форму",
      "ru": "улучшать физическую форму"
    },
    "short": {
      "de": "die eigene körperliche Kondition verbessern",
      "en": "to improve one's own physical fitness",
      "uk": "покращувати власну фізичну форму",
      "ru": "улучшать собственную физическую форму"
    },
    "def": {
      "de": "<g>Nichts Besseres</g> gibt es, um die eigene <b>Fitness</b> <b>zu steigern</b>, als regelmäßiges Training.",
      "en": "There is nothing better <b>to improve</b> your own <b>fitness</b> than regular training.",
      "uk": "Немає нічого кращого, щоб <b>покращувати</b> власну <b>фізичну форму</b>, ніж регулярні тренування.",
      "ru": "Нет ничего лучше, чтобы <b>улучшать</b> собственную <b>физическую форму</b>, чем регулярные тренировки."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_014",
    "cat": "k10",
    "term": {
      "de": "der Spendenlauf, -läufe",
      "en": "charity run",
      "uk": "благодійний забіг",
      "ru": "благотворительный забег"
    },
    "short": {
      "de": "ein Lauf, bei dem die Teilnehmer für einen guten Zweck Geld sammeln",
      "en": "a run in which participants collect money for a good cause",
      "uk": "забіг, під час якого учасники збирають гроші на добру справу",
      "ru": "забег, во время которого участники собирают деньги на доброе дело"
    },
    "def": {
      "de": "<g>Das Schönste</g> an diesem <b>Spendenlauf</b> war, wie viele Menschen mitgemacht haben.",
      "en": "The nicest thing about this <b>charity run</b> was how many people took part.",
      "uk": "Найкрасивішим у цьому <b>благодійному забігу</b> було те, скільки людей взяли участь.",
      "ru": "Самым прекрасным в этом <b>благотворительном забеге</b> было то, сколько людей приняли участие."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_015",
    "cat": "k10",
    "term": {
      "de": "veranstalten",
      "en": "to organise (an event)",
      "uk": "організовувати (захід)",
      "ru": "организовывать (мероприятие)"
    },
    "short": {
      "de": "etwas organisieren, zum Beispiel eine Veranstaltung oder ein Fest",
      "en": "to organise something, for example an event or a party",
      "uk": "організовувати щось, наприклад захід чи свято",
      "ru": "организовывать что-либо, например мероприятие или праздник"
    },
    "def": {
      "de": "Der Verein möchte <g>etwas Großes</g> <b>veranstalten</b>, um mehr Mitglieder zu gewinnen.",
      "en": "The club wants to <b>organise</b> something big to attract more members.",
      "uk": "Клуб хоче <b>організувати</b> щось грандіозне, щоб залучити більше членів.",
      "ru": "Клуб хочет <b>организовать</b> что-то грандиозное, чтобы привлечь больше членов."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_016",
    "cat": "k10",
    "term": {
      "de": "der Rekord, -e",
      "en": "record",
      "uk": "рекорд",
      "ru": "рекорд"
    },
    "short": {
      "de": "das beste Ergebnis, das bisher in einer Disziplin erreicht wurde",
      "en": "the best result achieved so far in a discipline",
      "uk": "найкращий результат, досягнутий у певній дисципліні",
      "ru": "лучший результат, достигнутый в какой-либо дисциплине"
    },
    "def": {
      "de": "<g>Nichts Vergleichbares</g> gab es bisher — dieser <b>Rekord</b> ist wirklich einzigartig.",
      "en": "There has been nothing comparable so far — this <b>record</b> is truly unique.",
      "uk": "Досі не було нічого подібного — цей <b>рекорд</b> справді унікальний.",
      "ru": "До сих пор не было ничего подобного — этот <b>рекорд</b> действительно уникален."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_001",
    "cat": "k11",
    "term": {
      "de": "die Schwangerschaft, -en",
      "en": "pregnancy",
      "uk": "вагітність",
      "ru": "беременность"
    },
    "short": {
      "de": "die Zeit, in der eine Frau ein Kind erwartet",
      "en": "the period during which a woman is expecting a child",
      "uk": "період, коли жінка чекає на дитину",
      "ru": "период, когда женщина ждёт ребёнка"
    },
    "def": {
      "de": "<g>Nichts Besonderes</g> hat sie während ihrer <b>Schwangerschaft</b> gespürt, bis zum achten Monat.",
      "en": "She didn't feel anything special during her <b>pregnancy</b> until the eighth month.",
      "uk": "Вона не відчувала нічого особливого під час своєї <b>вагітності</b> аж до восьмого місяця.",
      "ru": "Она не чувствовала ничего особенного во время своей <b>беременности</b> до восьмого месяца."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_002",
    "cat": "k11",
    "term": {
      "de": "sich vorbereiten auf",
      "en": "to prepare for",
      "uk": "готуватися до",
      "ru": "готовиться к"
    },
    "short": {
      "de": "sich rechtzeitig auf etwas einstellen, das noch kommt",
      "en": "to get ready in time for something that is still to come",
      "uk": "завчасно готуватися до чогось, що ще має статися",
      "ru": "заранее готовиться к чему-то, что ещё должно произойти"
    },
    "def": {
      "de": "<g>Während</g> sie <b>sich</b> auf die Geburt <b>vorbereitet</b>, kümmert sich ihr Mann um die Wohnung.",
      "en": "<g>While</g> she <b>prepares</b> for the birth, her husband takes care of the flat.",
      "uk": "<g>Поки</g> вона <b>готується</b> до пологів, її чоловік дбає про квартиру.",
      "ru": "<g>Пока</g> она <b>готовится</b> к родам, её муж заботится о квартире."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_003",
    "cat": "k11",
    "term": {
      "de": "die Windel, -n",
      "en": "nappy / diaper",
      "uk": "підгузок",
      "ru": "подгузник"
    },
    "short": {
      "de": "ein saugfähiges Kleidungsstück für kleine Kinder, die noch nicht zur Toilette gehen",
      "en": "an absorbent item of clothing for small children who cannot use the toilet yet",
      "uk": "гігієнічний виріб для маленьких дітей, які ще не ходять у туалет",
      "ru": "гигиеническое изделие для маленьких детей, которые ещё не ходят в туалет"
    },
    "def": {
      "de": "Du <g>brauchst</g> die <b>Windel</b> <g>nicht</g> jede Stunde <g>zu</g> wechseln, alle drei Stunden reicht.",
      "en": "You <g>don't need to</g> change the <b>nappy</b> every hour, every three hours is enough.",
      "uk": "Тобі <g>не потрібно</g> міняти <b>підгузок</b> щогодини, достатньо кожні три години.",
      "ru": "Тебе <g>не нужно</g> менять <b>подгузник</b> каждый час, достаточно каждые три часа."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_004",
    "cat": "k11",
    "term": {
      "de": "akzeptieren",
      "en": "to accept",
      "uk": "приймати",
      "ru": "принимать"
    },
    "short": {
      "de": "etwas so annehmen, wie es ist, auch wenn man es nicht ändern kann",
      "en": "to accept something as it is, even if you cannot change it",
      "uk": "приймати щось таким, яким воно є, навіть якщо це не можна змінити",
      "ru": "принимать что-либо таким, какое оно есть, даже если это нельзя изменить"
    },
    "def": {
      "de": "<g>Jeder</g> muss die Entscheidung der Familie <b>akzeptieren</b>, auch wenn er anderer Meinung ist.",
      "en": "<g>Everyone</g> has to <b>accept</b> the family's decision, even if they disagree.",
      "uk": "<g>Кожен</g> має <b>прийняти</b> рішення родини, навіть якщо має іншу думку.",
      "ru": "<g>Каждый</g> должен <b>принять</b> решение семьи, даже если у него другое мнение."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_005",
    "cat": "k11",
    "term": {
      "de": "die Frauenrolle, -n",
      "en": "womanʼs role",
      "uk": "жіноча роль",
      "ru": "женская роль"
    },
    "short": {
      "de": "die Aufgaben und Erwartungen, die die Gesellschaft mit Frauen verbindet",
      "en": "the tasks and expectations that society associates with women",
      "uk": "обовʼязки та очікування, які суспільство повʼязує з жінками",
      "ru": "обязанности и ожидания, которые общество связывает с женщинами"
    },
    "def": {
      "de": "<g>Manche</g> Menschen denken noch immer traditionell über die <b>Frauenrolle</b>.",
      "en": "<g>Some</g> people still think traditionally about the <b>woman's role</b>.",
      "uk": "<g>Деякі</g> люди досі думають традиційно про <b>жіночу роль</b>.",
      "ru": "<g>Некоторые</g> люди до сих пор думают традиционно о <b>женской роли</b>."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_006",
    "cat": "k11",
    "term": {
      "de": "die Männerrolle, -n",
      "en": "manʼs role",
      "uk": "чоловіча роль",
      "ru": "мужская роль"
    },
    "short": {
      "de": "die Aufgaben und Erwartungen, die die Gesellschaft mit Männern verbindet",
      "en": "the tasks and expectations that society associates with men",
      "uk": "обовʼязки та очікування, які суспільство повʼязує з чоловіками",
      "ru": "обязанности и ожидания, которые общество связывает с мужчинами"
    },
    "def": {
      "de": "<g>Während</g> sich die <b>Männerrolle</b> in den letzten Jahren stark verändert hat, bleibt vieles in der Gesellschaft noch traditionell.",
      "en": "<g>While</g> the <b>man's role</b> has changed a lot in recent years, much in society remains traditional.",
      "uk": "<g>Тоді як</g> <b>чоловіча роль</b> сильно змінилася за останні роки, багато чого в суспільстві залишається традиційним.",
      "ru": "<g>В то время как</g> <b>мужская роль</b> сильно изменилась за последние годы, многое в обществе остаётся традиционным."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_007",
    "cat": "k11",
    "term": {
      "de": "alleinerziehend",
      "en": "single-parenting",
      "uk": "той, що виховує дитину самотужки",
      "ru": "воспитывающий ребёнка в одиночку"
    },
    "short": {
      "de": "ohne Partner ein oder mehrere Kinder großziehen",
      "en": "raising one or more children without a partner",
      "uk": "виховувати одну або кілька дітей без партнера",
      "ru": "воспитывать одного или нескольких детей без партнёра"
    },
    "def": {
      "de": "Sie ist <b>alleinerziehend</b>, aber sie <g>braucht</g> <g>nicht</g> alles allein <g>zu</g> schaffen — ihre Schwester hilft ihr oft.",
      "en": "She is a <b>single parent</b>, but she <g>doesn't need to</g> manage everything alone — her sister often helps her.",
      "uk": "Вона <b>виховує дитину самотужки</b>, але їй <g>не потрібно</g> справлятися з усім самій — сестра часто їй допомагає.",
      "ru": "Она <b>воспитывает ребёнка одна</b>, но ей <g>не нужно</g> справляться со всем самой — сестра часто ей помогает."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_008",
    "cat": "k11",
    "term": {
      "de": "die Kindertagesstätte, -n (die Kita, -s)",
      "en": "daycare centre",
      "uk": "дитячий садок",
      "ru": "детский сад"
    },
    "short": {
      "de": "eine Einrichtung, in der kleine Kinder tagsüber betreut werden",
      "en": "a facility where small children are looked after during the day",
      "uk": "заклад, де маленьких дітей доглядають протягом дня",
      "ru": "учреждение, где за маленькими детьми присматривают в течение дня"
    },
    "def": {
      "de": "<g>Unsere</g> <b>Kindertagesstätte</b> hat leider keinen freien Platz mehr.",
      "en": "<g>Our</g> <b>daycare centre</b> unfortunately no longer has a free place.",
      "uk": "У <g>нашому</g> <b>дитячому садку</b>, на жаль, більше немає вільного місця.",
      "ru": "В <g>нашем</g> <b>детском саду</b>, к сожалению, больше нет свободного места."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_009",
    "cat": "k11",
    "term": {
      "de": "der Kita-Platz, -plätze",
      "en": "daycare place",
      "uk": "місце в дитячому садку",
      "ru": "место в детском саду"
    },
    "short": {
      "de": "ein freier Platz für ein Kind in einer Kindertagesstätte",
      "en": "an available place for a child in a daycare centre",
      "uk": "вільне місце для дитини в дитячому садку",
      "ru": "свободное место для ребёнка в детском саду"
    },
    "def": {
      "de": "<g>Etwas Gutes</g> ist passiert: Wir haben endlich einen <b>Kita-Platz</b> bekommen!",
      "en": "Something good happened: we finally got a <b>daycare place</b>!",
      "uk": "Сталося щось хороше: ми нарешті отримали <b>місце в дитячому садку</b>!",
      "ru": "Произошло что-то хорошее: мы наконец получили <b>место в детском саду</b>!"
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_010",
    "cat": "k11",
    "term": {
      "de": "der Mutterschutz (Sg.)",
      "en": "maternity protection",
      "uk": "охорона материнства",
      "ru": "охрана материнства"
    },
    "short": {
      "de": "der gesetzliche Schutz für Frauen kurz vor und nach der Geburt",
      "en": "the legal protection for women shortly before and after giving birth",
      "uk": "законодавчий захист жінок незадовго до та після пологів",
      "ru": "законодательная защита женщин незадолго до и после родов"
    },
    "def": {
      "de": "<g>Das Wichtigste</g> beim <b>Mutterschutz</b> ist, dass die Gesundheit von Mutter und Kind geschützt wird.",
      "en": "The most important thing about <b>maternity protection</b> is that the health of mother and child is protected.",
      "uk": "Найважливіше в <b>охороні материнства</b> — це захист здоровʼя матері й дитини.",
      "ru": "Самое важное в <b>охране материнства</b> — это защита здоровья матери и ребёнка."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_011",
    "cat": "k11",
    "term": {
      "de": "sich scheiden lassen",
      "en": "to get divorced",
      "uk": "розлучатися",
      "ru": "разводиться"
    },
    "short": {
      "de": "eine Ehe offiziell beenden",
      "en": "to officially end a marriage",
      "uk": "офіційно припинити шлюб",
      "ru": "официально прекратить брак"
    },
    "def": {
      "de": "Nachdem sie ihrem <g>Kätzchen</g> ein neues Zuhause gefunden hatte, <b>ließ</b> sie <b>sich</b> endlich <b>scheiden</b>.",
      "en": "After finding a new home for her kitten, she finally <b>got divorced</b>.",
      "uk": "Знайшовши новий дім для свого кошеняти, вона нарешті <b>розлучилася</b>.",
      "ru": "Найдя новый дом для своего котёнка, она наконец <b>развелась</b>."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_012",
    "cat": "k11",
    "term": {
      "de": "die Enttäuschung, -en",
      "en": "disappointment",
      "uk": "розчарування",
      "ru": "разочарование"
    },
    "short": {
      "de": "das Gefühl, wenn etwas nicht so kommt, wie man es erwartet hat",
      "en": "the feeling when something does not turn out as expected",
      "uk": "почуття, коли щось відбувається не так, як очікувалося",
      "ru": "чувство, когда что-то происходит не так, как ожидалось"
    },
    "def": {
      "de": "Das kleine <g>Mädchen</g> spürte die <b>Enttäuschung</b> ihrer Eltern nach der Scheidung.",
      "en": "The little girl felt her parents' <b>disappointment</b> after the divorce.",
      "uk": "Маленька дівчинка відчувала <b>розчарування</b> своїх батьків після розлучення.",
      "ru": "Маленькая девочка чувствовала <b>разочарование</b> своих родителей после развода."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_013",
    "cat": "k11",
    "term": {
      "de": "die Patchworkfamilie, -n",
      "en": "blended family",
      "uk": "змішана сімʼя",
      "ru": "смешанная семья"
    },
    "short": {
      "de": "eine Familie, in der Kinder aus verschiedenen früheren Beziehungen zusammenleben",
      "en": "a family in which children from different previous relationships live together",
      "uk": "сімʼя, у якій разом живуть діти з різних попередніх стосунків",
      "ru": "семья, в которой вместе живут дети от разных предыдущих отношений"
    },
    "def": {
      "de": "In unserer <b>Patchworkfamilie</b> gibt es auch ein kleines <g>Brüderchen</g> aus der zweiten Ehe.",
      "en": "In our <b>blended family</b>, there is also a little half-brother from the second marriage.",
      "uk": "У нашій <b>змішаній сімʼї</b> є також маленький братик від другого шлюбу.",
      "ru": "В нашей <b>смешанной семье</b> есть также маленький братик от второго брака."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_014",
    "cat": "k11",
    "term": {
      "de": "die Ehe, -n",
      "en": "marriage",
      "uk": "шлюб",
      "ru": "брак"
    },
    "short": {
      "de": "die offizielle Verbindung zwischen zwei Menschen, die heiraten",
      "en": "the official union between two people who get married",
      "uk": "офіційний союз між двома людьми, які одружуються",
      "ru": "официальный союз между двумя людьми, которые вступают в брак"
    },
    "def": {
      "de": "Nach zwanzig Jahren <b>Ehe</b> kauften sie sich ein kleines <g>Häuschen</g> auf dem Land.",
      "en": "After twenty years of <b>marriage</b>, they bought themselves a little house in the countryside.",
      "uk": "Після двадцяти років <b>шлюбу</b> вони купили собі невеликий будиночок за містом.",
      "ru": "После двадцати лет <b>брака</b> они купили себе небольшой домик за городом."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_015",
    "cat": "k11",
    "term": {
      "de": "sich trennen",
      "en": "to separate",
      "uk": "розлучатися (як пара)",
      "ru": "расставаться (как пара)"
    },
    "short": {
      "de": "als Paar nicht mehr zusammen sein",
      "en": "to no longer be together as a couple",
      "uk": "більше не бути разом як пара",
      "ru": "больше не быть вместе как пара"
    },
    "def": {
      "de": "Das junge <g>Pärchen</g> <b>trennte</b> <b>sich</b> nach nur einem Jahr.",
      "en": "The young couple <b>separated</b> after only one year.",
      "uk": "Молода пара <b>розійшлася</b> лише через рік.",
      "ru": "Молодая пара <b>рассталась</b> всего через год."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_016",
    "cat": "k11",
    "term": {
      "de": "betrügen",
      "en": "to cheat (on someone)",
      "uk": "зраджувати",
      "ru": "изменять"
    },
    "short": {
      "de": "einem Partner gegenüber nicht treu sein",
      "en": "to be unfaithful to a partner",
      "uk": "бути невірним партнеру чи партнерці",
      "ru": "быть неверным партнёру или партнёрше"
    },
    "def": {
      "de": "Es war ein kleines <g>Geheimnis</g>, das aufflog, als er seine Frau <b>betrog</b>.",
      "en": "It was a small secret that came out when he <b>cheated on</b> his wife.",
      "uk": "Це була маленька таємниця, яка розкрилася, коли він <b>зрадив</b> дружину.",
      "ru": "Это была маленькая тайна, которая раскрылась, когда он <b>изменил</b> жене."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k12_001",
    "cat": "k12",
    "term": {
      "de": "die Anerkennung, -en",
      "en": "recognition (of qualifications)",
      "uk": "визнання (кваліфікації)",
      "ru": "признание (квалификации)"
    },
    "short": {
      "de": "die offizielle Bestätigung, dass eine ausländische Qualifikation gültig ist",
      "en": "the official confirmation that a foreign qualification is valid",
      "uk": "офіційне підтвердження чинності іноземної кваліфікації",
      "ru": "официальное подтверждение действительности иностранной квалификации"
    },
    "def": {
      "de": "<g>Nachdem</g> sie die <b>Anerkennung</b> ihres Diploms beantragt hatte, musste sie drei Monate warten.",
      "en": "<g>After</g> she had applied for the <b>recognition</b> of her diploma, she had to wait three months.",
      "uk": "<g>Після того як</g> вона подала заявку на <b>визнання</b> свого диплома, їй довелося чекати три місяці.",
      "ru": "<g>После того как</g> она подала заявку на <b>признание</b> своего диплома, ей пришлось ждать три месяца."
    },
    "gram": "nebensatz_mit_nachdem"
  },
  {
    "id": "k12_002",
    "cat": "k12",
    "term": {
      "de": "anerkennen",
      "en": "to recognise (a qualification)",
      "uk": "визнавати (кваліфікацію)",
      "ru": "признавать (квалификацию)"
    },
    "short": {
      "de": "offiziell bestätigen, dass etwas gültig oder richtig ist",
      "en": "to officially confirm that something is valid or correct",
      "uk": "офіційно підтверджувати чинність або правильність чогось",
      "ru": "официально подтверждать действительность или правильность чего-либо"
    },
    "def": {
      "de": "<g>Nachdem</g> die Behörde sein Zeugnis <b>anerkannt</b> hatte, konnte er endlich als Ingenieur arbeiten.",
      "en": "<g>After</g> the authority had <b>recognised</b> his certificate, he could finally work as an engineer.",
      "uk": "<g>Після того як</g> установа <b>визнала</b> його свідоцтво, він нарешті зміг працювати інженером.",
      "ru": "<g>После того как</g> учреждение <b>признало</b> его свидетельство, он наконец смог работать инженером."
    },
    "gram": "nebensatz_mit_nachdem"
  },
  {
    "id": "k12_003",
    "cat": "k12",
    "term": {
      "de": "der Arbeitsmarkt (Sg.)",
      "en": "labour market",
      "uk": "ринок праці",
      "ru": "рынок труда"
    },
    "short": {
      "de": "der Bereich, in dem Menschen Arbeit suchen und Firmen Mitarbeiter suchen",
      "en": "the area in which people look for work and companies look for employees",
      "uk": "сфера, у якій люди шукають роботу, а фірми шукають працівників",
      "ru": "сфера, в которой люди ищут работу, а фирмы ищут сотрудников"
    },
    "def": {
      "de": "Bevor sie nach Deutschland kam, <g>hatte</g> sie den deutschen <b>Arbeitsmarkt</b> genau <g>untersucht</g>.",
      "en": "Before she came to Germany, she <g>had</g> carefully <g>examined</g> the German <b>labour market</b>.",
      "uk": "До того як вона приїхала до Німеччини, вона вже ретельно вивчила німецький <b>ринок праці</b>.",
      "ru": "До того как она приехала в Германию, она уже тщательно изучила немецкий <b>рынок труда</b>."
    },
    "gram": "plusquamperfekt"
  },
  {
    "id": "k12_004",
    "cat": "k12",
    "term": {
      "de": "der Lebenslauf, -läufe",
      "en": "CV / resume",
      "uk": "резюме",
      "ru": "резюме"
    },
    "short": {
      "de": "ein Dokument mit Informationen über die eigene Ausbildung und Berufserfahrung",
      "en": "a document with information about one's own education and work experience",
      "uk": "документ з інформацією про власну освіту та досвід роботи",
      "ru": "документ с информацией о собственном образовании и опыте работы"
    },
    "def": {
      "de": "Er <g>hatte</g> seinen <b>Lebenslauf</b> schon <g>aktualisiert</g>, bevor die Stellenanzeige veröffentlicht wurde.",
      "en": "He <g>had</g> already <g>updated</g> his <b>CV</b> before the job advertisement was published.",
      "uk": "Він уже оновив своє <b>резюме</b> до того, як оголошення про вакансію було опубліковано.",
      "ru": "Он уже обновил своё <b>резюме</b> до того, как объявление о вакансии было опубликовано."
    },
    "gram": "plusquamperfekt"
  },
  {
    "id": "k12_005",
    "cat": "k12",
    "term": {
      "de": "die Ausbildung, -en",
      "en": "vocational training",
      "uk": "професійне навчання",
      "ru": "профессиональное обучение"
    },
    "short": {
      "de": "eine praktische und theoretische Vorbereitung auf einen Beruf",
      "en": "practical and theoretical preparation for a profession",
      "uk": "практична й теоретична підготовка до професії",
      "ru": "практическая и теоретическая подготовка к профессии"
    },
    "def": {
      "de": "<g>Das Lernen</g> neuer Fähigkeiten gehört fest zu jeder guten <b>Ausbildung</b>.",
      "en": "<g>Learning</g> new skills is a fixed part of every good <b>vocational training</b>.",
      "uk": "Навчання новим навичкам є невідʼємною частиною будь-якого гарного <b>професійного навчання</b>.",
      "ru": "Обучение новым навыкам является неотъемлемой частью любого хорошего <b>профессионального обучения</b>."
    },
    "gram": "infinitiv_als_nomen"
  },
  {
    "id": "k12_006",
    "cat": "k12",
    "term": {
      "de": "der Schulabschluss, -abschlüsse",
      "en": "school-leaving qualification",
      "uk": "атестат про освіту",
      "ru": "школьный аттестат"
    },
    "short": {
      "de": "das Zeugnis, das man am Ende der Schulzeit bekommt",
      "en": "the certificate you receive at the end of your school years",
      "uk": "атестат, який отримують після завершення навчання в школі",
      "ru": "аттестат, который получают по окончании школы"
    },
    "def": {
      "de": "Ohne <g>brauchbaren</g> <b>Schulabschluss</b> ist es schwer, eine Ausbildung zu finden.",
      "en": "Without a usable <b>school-leaving qualification</b>, it is difficult to find an apprenticeship.",
      "uk": "Без придатного <b>атестата про освіту</b> важко знайти місце для навчання.",
      "ru": "Без пригодного <b>школьного аттестата</b> трудно найти место для обучения."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_007",
    "cat": "k12",
    "term": {
      "de": "das Schülerpraktikum, -praktika",
      "en": "student internship",
      "uk": "учнівська практика",
      "ru": "ученическая практика"
    },
    "short": {
      "de": "eine kurze praktische Arbeit in einer Firma während der Schulzeit",
      "en": "a short period of practical work at a company during school years",
      "uk": "коротка практична робота у фірмі під час навчання в школі",
      "ru": "короткая практическая работа на фирме во время учёбы в школе"
    },
    "def": {
      "de": "Das <g>kostenlose</g> <b>Schülerpraktikum</b> half ihr, den richtigen Beruf zu finden.",
      "en": "The free <b>student internship</b> helped her find the right profession.",
      "uk": "Безкоштовна <b>учнівська практика</b> допомогла їй знайти правильну професію.",
      "ru": "Бесплатная <b>ученическая практика</b> помогла ей найти подходящую профессию."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_008",
    "cat": "k12",
    "term": {
      "de": "der Arbeitnehmer, - / die Arbeitnehmerin, -nen",
      "en": "employee",
      "uk": "найманий працівник / працівниця",
      "ru": "наёмный работник / работница"
    },
    "short": {
      "de": "eine Person, die bei einer Firma angestellt ist und dafür bezahlt wird",
      "en": "a person who is employed by a company and paid for it",
      "uk": "особа, яка працевлаштована на фірмі й отримує за це оплату",
      "ru": "лицо, которое трудоустроено на фирме и получает за это оплату"
    },
    "def": {
      "de": "Nach zehn Jahren ist dieser <b>Arbeitnehmer</b> praktisch <g>unkündbar</g>.",
      "en": "After ten years, this <b>employee</b> is practically impossible to dismiss.",
      "uk": "Після десяти років цей <b>найманий працівник</b> практично не підлягає звільненню.",
      "ru": "После десяти лет этот <b>наёмный работник</b> практически не подлежит увольнению."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_009",
    "cat": "k12",
    "term": {
      "de": "die Gewerkschaft, -en",
      "en": "trade union",
      "uk": "профспілка",
      "ru": "профсоюз"
    },
    "short": {
      "de": "eine Organisation, die für die Rechte der Arbeitnehmer kämpft",
      "en": "an organisation that fights for the rights of employees",
      "uk": "організація, яка бореться за права найманих працівників",
      "ru": "организация, которая борется за права наёмных работников"
    },
    "def": {
      "de": "Die <b>Gewerkschaft</b> kämpft für <g>bezahlbaren</g> Urlaub für alle Arbeitnehmer.",
      "en": "The <b>trade union</b> fights for affordable holidays for all employees.",
      "uk": "<b>Профспілка</b> бореться за доступну відпустку для всіх працівників.",
      "ru": "<b>Профсоюз</b> борется за доступный отпуск для всех работников."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_010",
    "cat": "k12",
    "term": {
      "de": "die Arbeitserlaubnis (Sg.)",
      "en": "work permit",
      "uk": "дозвіл на роботу",
      "ru": "разрешение на работу"
    },
    "short": {
      "de": "das offizielle Recht, in einem Land arbeiten zu dürfen",
      "en": "the official right to be allowed to work in a country",
      "uk": "офіційне право працювати в певній країні",
      "ru": "официальное право работать в стране"
    },
    "def": {
      "de": "Ohne gültige <b>Arbeitserlaubnis</b> bleibt man leider oft <g>arbeitslos</g>.",
      "en": "Without a valid <b>work permit</b>, you unfortunately often remain unemployed.",
      "uk": "Без чинного <b>дозволу на роботу</b> людина, на жаль, часто залишається безробітною.",
      "ru": "Без действующего <b>разрешения на работу</b> человек, к сожалению, часто остаётся безработным."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_011",
    "cat": "k12",
    "term": {
      "de": "das Berufsprofil, -e",
      "en": "job profile",
      "uk": "профіль професії",
      "ru": "профиль профессии"
    },
    "short": {
      "de": "eine Beschreibung der Aufgaben und Anforderungen eines Berufs",
      "en": "a description of the tasks and requirements of a profession",
      "uk": "опис завдань і вимог певної професії",
      "ru": "описание задач и требований определённой профессии"
    },
    "def": {
      "de": "Ein gut <g>lesbares</g> <b>Berufsprofil</b> hilft dabei, die passende Stelle zu finden.",
      "en": "A well readable <b>job profile</b> helps you find the right position.",
      "uk": "Добре читабельний <b>профіль професії</b> допомагає знайти відповідну посаду.",
      "ru": "Хорошо читаемый <b>профиль профессии</b> помогает найти подходящую должность."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_012",
    "cat": "k12",
    "term": {
      "de": "der Betriebsrat, -räte",
      "en": "works council",
      "uk": "виробнича рада",
      "ru": "производственный совет"
    },
    "short": {
      "de": "eine Gruppe von Mitarbeitern, die die Interessen aller Angestellten in einer Firma vertritt",
      "en": "a group of employees that represents the interests of all staff in a company",
      "uk": "група працівників, яка представляє інтереси всіх службовців фірми",
      "ru": "группа сотрудников, представляющая интересы всех работников фирмы"
    },
    "def": {
      "de": "<g>Das Verhandeln</g> mit der Geschäftsführung gehört zu den Aufgaben des <b>Betriebsrats</b>.",
      "en": "<g>Negotiating</g> with management is one of the tasks of the <b>works council</b>.",
      "uk": "Ведення переговорів з керівництвом є одним із завдань <b>виробничої ради</b>.",
      "ru": "Ведение переговоров с руководством является одной из задач <b>производственного совета</b>."
    },
    "gram": "infinitiv_als_nomen"
  },
  {
    "id": "k12_013",
    "cat": "k12",
    "term": {
      "de": "die Zufriedenheit (Sg.)",
      "en": "satisfaction",
      "uk": "задоволення",
      "ru": "удовлетворённость"
    },
    "short": {
      "de": "das Gefühl, dass alles so ist, wie man es sich wünscht",
      "en": "the feeling that everything is as you wish it to be",
      "uk": "почуття, що все саме так, як хочеться",
      "ru": "чувство, что всё именно так, как хочется"
    },
    "def": {
      "de": "<g>Grenzenlose</g> <b>Zufriedenheit</b> empfand sie, als sie endlich ihren Traumjob fand.",
      "en": "She felt boundless <b>satisfaction</b> when she finally found her dream job.",
      "uk": "Вона відчула безмежне <b>задоволення</b>, коли нарешті знайшла роботу своєї мрії.",
      "ru": "Она почувствовала безграничное <b>удовлетворение</b>, когда наконец нашла работу своей мечты."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_014",
    "cat": "k12",
    "term": {
      "de": "innerhalb",
      "en": "within",
      "uk": "у межах",
      "ru": "в пределах"
    },
    "short": {
      "de": "in einem bestimmten Zeitraum oder Bereich, nicht außerhalb davon",
      "en": "within a certain period or area, not outside of it",
      "uk": "у межах певного періоду чи сфери, не поза ними",
      "ru": "в пределах определённого периода или сферы, не за их пределами"
    },
    "def": {
      "de": "<b>Innerhalb</b> einer <g>zumutbaren</g> Frist muss die Firma antworten.",
      "en": "The company must respond within a reasonable period of time.",
      "uk": "Фірма повинна відповісти в межах прийнятного терміну.",
      "ru": "Фирма должна ответить в пределах приемлемого срока."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_015",
    "cat": "k12",
    "term": {
      "de": "außerhalb",
      "en": "outside of",
      "uk": "поза межами",
      "ru": "за пределами"
    },
    "short": {
      "de": "nicht in einem bestimmten Bereich, sondern draußen davon",
      "en": "not within a certain area, but outside of it",
      "uk": "не в межах певної сфери, а поза нею",
      "ru": "не в пределах определённой сферы, а за её пределами"
    },
    "def": {
      "de": "<b>Außerhalb</b> der Geschäftszeiten ist leider niemand <g>erreichbar</g>.",
      "en": "Outside of business hours, unfortunately no one is reachable.",
      "uk": "Поза робочим часом, на жаль, ніхто не є доступним.",
      "ru": "За пределами рабочего времени, к сожалению, никто не доступен."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k12_016",
    "cat": "k12",
    "term": {
      "de": "der Erfolg, -e",
      "en": "success",
      "uk": "успіх",
      "ru": "успех"
    },
    "short": {
      "de": "ein gutes Ergebnis, das man nach viel Mühe erreicht hat",
      "en": "a good result achieved after a lot of effort",
      "uk": "хороший результат, досягнутий після значних зусиль",
      "ru": "хороший результат, достигнутый после больших усилий"
    },
    "def": {
      "de": "Ihr beruflicher <b>Erfolg</b> kam keineswegs <g>mühelos</g>, sondern durch harte Arbeit.",
      "en": "Her professional <b>success</b> did not come effortlessly at all, but through hard work.",
      "uk": "Її професійний <b>успіх</b> прийшов аж ніяк не легко, а завдяки важкій праці.",
      "ru": "Её профессиональный <b>успех</b> пришёл отнюдь не легко, а благодаря упорному труду."
    },
    "gram": "adjektive_auf_bar_los"
  },
  {
    "id": "k13_001",
    "cat": "k13",
    "term": {
      "de": "das Ehrenamt, -ämter",
      "en": "voluntary position",
      "uk": "громадська (волонтерська) посада",
      "ru": "общественная (волонтёрская) должность"
    },
    "short": {
      "de": "eine Aufgabe, die man ohne Bezahlung freiwillig übernimmt",
      "en": "a task that you take on voluntarily without payment",
      "uk": "завдання, яке людина бере на себе добровільно й без оплати",
      "ru": "задача, которую человек берёт на себя добровольно и без оплаты"
    },
    "def": {
      "de": "Ein <b>Ehrenamt</b> <g>kann</g> von jedem Menschen <g>übernommen werden</g>, unabhängig vom Alter.",
      "en": "A <b>voluntary position</b> <g>can be taken on</g> by anyone, regardless of age.",
      "uk": "<b>Громадську посаду</b> <g>може взяти на себе</g> будь-яка людина, незалежно від віку.",
      "ru": "<b>Общественную должность</b> <g>может взять на себя</g> любой человек, независимо от возраста."
    },
    "gram": "passiv_mit_modalverben"
  },
  {
    "id": "k13_002",
    "cat": "k13",
    "term": {
      "de": "ehrenamtlich",
      "en": "voluntary (unpaid)",
      "uk": "громадський, волонтерський",
      "ru": "общественный, волонтёрский"
    },
    "short": {
      "de": "ohne Bezahlung und aus freiem Willen",
      "en": "without payment and of one's own free will",
      "uk": "без оплати і за власним бажанням",
      "ru": "без оплаты и по собственному желанию"
    },
    "def": {
      "de": "Diese Aufgabe <g>muss</g> nicht unbedingt <g>bezahlt werden</g> — viele machen sie <b>ehrenamtlich</b>.",
      "en": "This task doesn't necessarily <g>have to be paid</g> — many people do it <b>voluntarily</b>.",
      "uk": "Це завдання не обовʼязково <g>має бути оплаченим</g> — багато людей виконують його <b>на волонтерських засадах</b>.",
      "ru": "Эта задача не обязательно <g>должна быть оплачена</g> — многие делают это <b>на добровольных началах</b>."
    },
    "gram": "passiv_mit_modalverben"
  },
  {
    "id": "k13_003",
    "cat": "k13",
    "term": {
      "de": "freiwillig",
      "en": "voluntary",
      "uk": "добровільний",
      "ru": "добровольный"
    },
    "short": {
      "de": "aus eigenem Willen, ohne dass jemand es verlangt",
      "en": "of one's own free will, without anyone demanding it",
      "uk": "за власним бажанням, без чиєїсь вимоги",
      "ru": "по собственному желанию, без чьего-либо требования"
    },
    "def": {
      "de": "<g>Trotz seines</g> vollen Terminkalenders hilft er <b>freiwillig</b> im Altersheim.",
      "en": "<g>Despite his</g> busy schedule, he helps <b>voluntarily</b> at the retirement home.",
      "uk": "<g>Незважаючи на свій</g> завантажений графік, він <b>добровільно</b> допомагає в будинку для літніх людей.",
      "ru": "<g>Несмотря на свой</g> плотный график, он <b>добровольно</b> помогает в доме престарелых."
    },
    "gram": "praepositionen_mit_genitiv"
  },
  {
    "id": "k13_004",
    "cat": "k13",
    "term": {
      "de": "sich engagieren",
      "en": "to get involved",
      "uk": "займатися волонтерством",
      "ru": "заниматься волонтёрством"
    },
    "short": {
      "de": "sich aktiv und mit viel Energie für eine Sache einsetzen",
      "en": "to get actively and energetically involved in a cause",
      "uk": "активно й з великою енергією працювати заради якоїсь справи",
      "ru": "активно и с большой энергией работать ради какого-либо дела"
    },
    "def": {
      "de": "<g>Wegen der</g> vielen Flüchtlinge <b>engagieren</b> sich immer mehr Menschen in der Region.",
      "en": "<g>Because of the</g> many refugees, more and more people are getting involved in the region.",
      "uk": "<g>Через</g> велику кількість біженців у регіоні дедалі більше людей стають волонтерами.",
      "ru": "<g>Из-за</g> большого количества беженцев в регионе всё больше людей становятся волонтёрами."
    },
    "gram": "praepositionen_mit_genitiv"
  },
  {
    "id": "k13_005",
    "cat": "k13",
    "term": {
      "de": "sich einsetzen (für)",
      "en": "to advocate (for)",
      "uk": "виступати (за щось)",
      "ru": "выступать (за что-то)"
    },
    "short": {
      "de": "sich stark für ein Ziel oder eine Person engagieren",
      "en": "to strongly commit oneself to a goal or a person",
      "uk": "активно виступати за якусь мету чи людину",
      "ru": "активно выступать за какую-либо цель или человека"
    },
    "def": {
      "de": "Sie <b>setzt</b> <b>sich</b> für die Rechte <g>obdachloser</g> Menschen <b>ein</b>.",
      "en": "She <b>advocates for</b> the rights of homeless people.",
      "uk": "Вона <b>виступає за</b> права безхатченків.",
      "ru": "Она <b>выступает за</b> права бездомных."
    },
    "gram": "adjektivendung_genitiv"
  },
  {
    "id": "k13_006",
    "cat": "k13",
    "term": {
      "de": "der Bereich, -e",
      "en": "field / area",
      "uk": "сфера",
      "ru": "сфера"
    },
    "short": {
      "de": "ein bestimmter Teil eines größeren Themas oder Gebiets",
      "en": "a certain part of a larger topic or field",
      "uk": "певна частина більшої теми чи галузі",
      "ru": "определённая часть более крупной темы или сферы"
    },
    "def": {
      "de": "Im sozialen <b>Bereich</b> gibt es viele <g>hilfreiche</g> Projekte für Geflüchtete.",
      "en": "In the social sector, there are many helpful projects for refugees.",
      "uk": "У соціальній сфері є багато корисних проєктів для біженців.",
      "ru": "В социальной сфере есть много полезных проектов для беженцев."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_007",
    "cat": "k13",
    "term": {
      "de": "das Hilfsangebot, -e",
      "en": "support service",
      "uk": "пропозиція допомоги",
      "ru": "предложение помощи"
    },
    "short": {
      "de": "ein Angebot, mit dem man Menschen in einer schwierigen Lage unterstützt",
      "en": "an offer that supports people in a difficult situation",
      "uk": "пропозиція, яка підтримує людей у складній ситуації",
      "ru": "предложение, которое поддерживает людей в трудной ситуации"
    },
    "def": {
      "de": "Dieses <g>umfangreiche</g> <b>Hilfsangebot</b> unterstützt Familien in schwierigen Situationen.",
      "en": "This extensive support service helps families in difficult situations.",
      "uk": "Ця широка пропозиція допомоги підтримує сімʼї у складних ситуаціях.",
      "ru": "Это обширное предложение помощи поддерживает семьи в трудных ситуациях."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_008",
    "cat": "k13",
    "term": {
      "de": "die Gefahr, -en",
      "en": "danger",
      "uk": "небезпека",
      "ru": "опасность"
    },
    "short": {
      "de": "eine Situation, in der etwas Schlimmes passieren kann",
      "en": "a situation in which something bad can happen",
      "uk": "ситуація, у якій може статися щось погане",
      "ru": "ситуация, в которой может произойти что-то плохое"
    },
    "def": {
      "de": "Trotz der <g>zahlreichen</g> <b>Gefahren</b> half er dem verletzten Wanderer.",
      "en": "Despite the numerous dangers, he helped the injured hiker.",
      "uk": "Незважаючи на численні небезпеки, він допоміг пораненому туристу.",
      "ru": "Несмотря на многочисленные опасности, он помог раненому туристу."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_009",
    "cat": "k13",
    "term": {
      "de": "retten",
      "en": "to rescue",
      "uk": "рятувати",
      "ru": "спасать"
    },
    "short": {
      "de": "jemanden aus einer gefährlichen Situation befreien",
      "en": "to free someone from a dangerous situation",
      "uk": "визволяти когось з небезпечної ситуації",
      "ru": "освобождать кого-либо из опасной ситуации"
    },
    "def": {
      "de": "Der Schwimmer <g>musste</g> von der Feuerwehr <g><b>gerettet werden</b></g>, weil die Strömung zu stark war.",
      "en": "The swimmer <g>had to be</g> <g><b>rescued</b></g> by the fire brigade because the current was too strong.",
      "uk": "Плавця <g>довелося</g> <g><b>врятувати</b></g> пожежникам, бо течія була занадто сильною.",
      "ru": "Пловца <g>пришлось</g> <g><b>спасти</b></g> пожарным, потому что течение было слишком сильным."
    },
    "gram": "passiv_mit_modalverben"
  },
  {
    "id": "k13_010",
    "cat": "k13",
    "term": {
      "de": "die Toleranz (Sg.)",
      "en": "tolerance",
      "uk": "толерантність",
      "ru": "толерантность"
    },
    "short": {
      "de": "die Bereitschaft, andere Meinungen und Lebensweisen zu akzeptieren",
      "en": "the willingness to accept other opinions and ways of life",
      "uk": "готовність приймати інші думки й способи життя",
      "ru": "готовность принимать другие мнения и образы жизни"
    },
    "def": {
      "de": "Die Erziehung <g>toleranter</g> Kinder beginnt mit der eigenen <b>Toleranz</b> der Eltern.",
      "en": "Raising tolerant children begins with the parents' own <b>tolerance</b>.",
      "uk": "Виховання толерантних дітей починається з власної <b>толерантності</b> батьків.",
      "ru": "Воспитание толерантных детей начинается с собственной <b>толерантности</b> родителей."
    },
    "gram": "adjektivendung_genitiv"
  },
  {
    "id": "k13_011",
    "cat": "k13",
    "term": {
      "de": "die Empathie (Sg.)",
      "en": "empathy",
      "uk": "емпатія",
      "ru": "эмпатия"
    },
    "short": {
      "de": "die Fähigkeit, die Gefühle einer anderen Person zu verstehen",
      "en": "the ability to understand another person's feelings",
      "uk": "здатність розуміти почуття іншої людини",
      "ru": "способность понимать чувства другого человека"
    },
    "def": {
      "de": "<g>Liebevolle</g> <b>Empathie</b> zeigte die Freiwillige gegenüber jedem Kind im Heim.",
      "en": "The volunteer showed loving empathy towards every child in the home.",
      "uk": "Волонтерка виявляла ніжну емпатію до кожної дитини в притулку.",
      "ru": "Волонтёр проявляла нежную эмпатию к каждому ребёнку в приюте."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_012",
    "cat": "k13",
    "term": {
      "de": "die Unterstützung (Sg.)",
      "en": "support",
      "uk": "підтримка",
      "ru": "поддержка"
    },
    "short": {
      "de": "die Hilfe, die man einer Person gibt",
      "en": "the help that you give to a person",
      "uk": "допомога, яку надають людині",
      "ru": "помощь, которую оказывают человеку"
    },
    "def": {
      "de": "Die Familie bekam <g>hilfreiche</g> <b>Unterstützung</b> von der Nachbarschaft.",
      "en": "The family received helpful support from the neighbourhood.",
      "uk": "Родина отримала корисну підтримку від сусідів.",
      "ru": "Семья получила полезную поддержку от соседей."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_013",
    "cat": "k13",
    "term": {
      "de": "unterstützen",
      "en": "to support",
      "uk": "підтримувати",
      "ru": "поддерживать"
    },
    "short": {
      "de": "jemandem helfen, ein Ziel zu erreichen",
      "en": "to help someone achieve a goal",
      "uk": "допомагати комусь досягти мети",
      "ru": "помогать кому-либо достичь цели"
    },
    "def": {
      "de": "Der <g>erfolgreiche</g> Verein <b>unterstützt</b> viele Familien in der Region.",
      "en": "The successful club supports many families in the region.",
      "uk": "Успішний клуб підтримує багато сімей у регіоні.",
      "ru": "Успешный клуб поддерживает много семей в регионе."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_014",
    "cat": "k13",
    "term": {
      "de": "der Freundeskreis, -e",
      "en": "circle of friends",
      "uk": "коло друзів",
      "ru": "круг друзей"
    },
    "short": {
      "de": "alle Freunde, die eine Person hat",
      "en": "all the friends that a person has",
      "uk": "усі друзі, які є в людини",
      "ru": "все друзья, которые есть у человека"
    },
    "def": {
      "de": "Ihr <g>zahlreicher</g> <b>Freundeskreis</b> half ihr in der schwierigen Zeit.",
      "en": "Her numerous circle of friends helped her during the difficult time.",
      "uk": "Її численне коло друзів допомогло їй у важкий час.",
      "ru": "Её многочисленный круг друзей помог ей в трудное время."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_015",
    "cat": "k13",
    "term": {
      "de": "zusammenhalten",
      "en": "to stick together",
      "uk": "триматися разом",
      "ru": "держаться вместе"
    },
    "short": {
      "de": "sich gegenseitig helfen und in schwierigen Zeiten füreinander da sein",
      "en": "to help each other and be there for each other in difficult times",
      "uk": "допомагати одне одному й підтримувати одне одного у складні часи",
      "ru": "помогать друг другу и поддерживать друг друга в трудные времена"
    },
    "def": {
      "de": "Eine <g>hoffnungsvolle</g> Gemeinschaft muss in schweren Zeiten <b>zusammenhalten</b>.",
      "en": "A hopeful community must stick together in hard times.",
      "uk": "Сповнена надії громада повинна триматися разом у важкі часи.",
      "ru": "Полная надежды община должна держаться вместе в трудные времена."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k13_016",
    "cat": "k13",
    "term": {
      "de": "einerseits … andererseits",
      "en": "on the one hand … on the other hand",
      "uk": "з одного боку … з іншого боку",
      "ru": "с одной стороны … с другой стороны"
    },
    "short": {
      "de": "ein Ausdruck, mit dem man zwei verschiedene Seiten eines Themas vergleicht",
      "en": "an expression used to compare two different sides of a topic",
      "uk": "вислів, яким порівнюють два різні аспекти теми",
      "ru": "выражение, с помощью которого сравнивают два разных аспекта темы"
    },
    "def": {
      "de": "<b>Einerseits</b> ist die Aufgabe <g>anspruchsvoll</g>, <b>andererseits</b> macht sie große Freude.",
      "en": "On the one hand, the task is demanding, on the other hand it is very rewarding.",
      "uk": "З одного боку, завдання складне, з іншого боку — воно приносить велике задоволення.",
      "ru": "С одной стороны, задача сложная, с другой стороны — она приносит большое удовольствие."
    },
    "gram": "adjektive_auf_voll_reich"
  },
  {
    "id": "k14_001",
    "cat": "k14",
    "term": {
      "de": "das Mehrfamilienhaus, -häuser",
      "en": "apartment building",
      "uk": "багатоквартирний будинок",
      "ru": "многоквартирный дом"
    },
    "short": {
      "de": "ein Haus, in dem mehrere Familien in getrennten Wohnungen leben",
      "en": "a house in which several families live in separate flats",
      "uk": "будинок, у якому кілька сімей живуть в окремих квартирах",
      "ru": "дом, в котором несколько семей живут в отдельных квартирах"
    },
    "def": {
      "de": "In unserem <b>Mehrfamilienhaus</b> kenne ich jeden <g>Nachbarn</g> persönlich.",
      "en": "In our apartment building, I know every neighbour personally.",
      "uk": "У нашому багатоквартирному будинку я особисто знаю кожного сусіда.",
      "ru": "В нашем многоквартирном доме я лично знаю каждого соседа."
    },
    "gram": "n_deklination"
  },
  {
    "id": "k14_002",
    "cat": "k14",
    "term": {
      "de": "das Einfamilienhaus, -häuser",
      "en": "single-family house",
      "uk": "одноквартирний будинок",
      "ru": "одноквартирный дом"
    },
    "short": {
      "de": "ein Haus, in dem nur eine Familie lebt",
      "en": "a house in which only one family lives",
      "uk": "будинок, у якому живе лише одна сімʼя",
      "ru": "дом, в котором живёт только одна семья"
    },
    "def": {
      "de": "Wir haben unser <b>Einfamilienhaus</b> von einem freundlichen <g>Herrn</g> gekauft.",
      "en": "We bought our single-family house from a friendly gentleman.",
      "uk": "Ми купили наш одноквартирний будинок у привітного пана.",
      "ru": "Мы купили наш одноквартирный дом у приветливого господина."
    },
    "gram": "n_deklination"
  },
  {
    "id": "k14_003",
    "cat": "k14",
    "term": {
      "de": "die Kaltmiete, -n",
      "en": "rent excluding utilities",
      "uk": "орендна плата без комунальних послуг",
      "ru": "аренда без коммунальных услуг"
    },
    "short": {
      "de": "die Miete für eine Wohnung ohne die Kosten für Heizung und Wasser",
      "en": "the rent for a flat without the costs for heating and water",
      "uk": "орендна плата за квартиру без витрат на опалення й воду",
      "ru": "арендная плата за квартиру без расходов на отопление и воду"
    },
    "def": {
      "de": "Die <b>Kaltmiete</b>, <g>über die</g> wir gesprochen haben, ist wirklich günstig.",
      "en": "The rent excluding utilities, <g>about which</g> we talked, is really affordable.",
      "uk": "Орендна плата без комунальних послуг, <g>про яку</g> ми говорили, справді доступна.",
      "ru": "Аренда без коммунальных услуг, <g>о которой</g> мы говорили, действительно доступная."
    },
    "gram": "relativsatz_mit_praeposition"
  },
  {
    "id": "k14_004",
    "cat": "k14",
    "term": {
      "de": "die Warmmiete, -n",
      "en": "rent including utilities",
      "uk": "орендна плата з комунальними послугами",
      "ru": "аренда с коммунальными услугами"
    },
    "short": {
      "de": "die Miete für eine Wohnung inklusive der Kosten für Heizung und Wasser",
      "en": "the rent for a flat including the costs for heating and water",
      "uk": "орендна плата за квартиру, що включає витрати на опалення й воду",
      "ru": "арендная плата за квартиру, включающая расходы на отопление и воду"
    },
    "def": {
      "de": "Das ist die Wohnung, <g>für die</g> wir eine <b>Warmmiete</b> von 900 Euro zahlen.",
      "en": "That's the flat <g>for which</g> we pay a <b>rent including utilities</b> of 900 euros.",
      "uk": "Це квартира, <g>за яку</g> ми платимо <b>орендну плату з комунальними послугами</b> у розмірі 900 євро.",
      "ru": "Это квартира, <g>за которую</g> мы платим <b>аренду с коммунальными услугами</b> в размере 900 евро."
    },
    "gram": "relativsatz_mit_praeposition"
  },
  {
    "id": "k14_005",
    "cat": "k14",
    "term": {
      "de": "die Nebenkosten",
      "en": "utility costs",
      "uk": "комунальні витрати",
      "ru": "коммунальные расходы"
    },
    "short": {
      "de": "zusätzliche Kosten für eine Wohnung, zum Beispiel für Wasser und Müll",
      "en": "additional costs for a flat, for example for water and waste",
      "uk": "додаткові витрати на квартиру, наприклад на воду й вивезення сміття",
      "ru": "дополнительные расходы на квартиру, например на воду и вывоз мусора"
    },
    "def": {
      "de": "Wir haben eine Wohnung gefunden, <g>wo</g> die <b>Nebenkosten</b> sehr niedrig sind.",
      "en": "We found a flat <g>where</g> the <b>utility costs</b> are very low.",
      "uk": "Ми знайшли квартиру, <g>де</g> <b>комунальні витрати</b> дуже низькі.",
      "ru": "Мы нашли квартиру, <g>где</g> <b>коммунальные расходы</b> очень низкие."
    },
    "gram": "relativsatz_wo_was"
  },
  {
    "id": "k14_006",
    "cat": "k14",
    "term": {
      "de": "der Stadtrand, -ränder",
      "en": "outskirts of the city",
      "uk": "околиця міста",
      "ru": "окраина города"
    },
    "short": {
      "de": "der äußere Teil einer Stadt, weit vom Zentrum entfernt",
      "en": "the outer part of a city, far from the centre",
      "uk": "зовнішня частина міста, далеко від центру",
      "ru": "внешняя часть города, далеко от центра"
    },
    "def": {
      "de": "Das ist der <b>Stadtrand</b>, <g>in dem</g> ich seit zehn Jahren wohne.",
      "en": "That's the outskirts <g>in which</g> I have been living for ten years.",
      "uk": "Це околиця міста, <g>у якій</g> я живу вже десять років.",
      "ru": "Это окраина города, <g>в которой</g> я живу уже десять лет."
    },
    "gram": "relativpronomen_dativ_wdh_b1"
  },
  {
    "id": "k14_007",
    "cat": "k14",
    "term": {
      "de": "der Vorort, -e",
      "en": "suburb",
      "uk": "передмістя",
      "ru": "пригород"
    },
    "short": {
      "de": "ein kleinerer Ort direkt neben einer großen Stadt",
      "en": "a smaller place directly next to a large city",
      "uk": "менше поселення поряд із великим містом",
      "ru": "небольшое поселение рядом с крупным городом"
    },
    "def": {
      "de": "Der <b>Vorort</b>, <g>in dem</g> meine Eltern leben, ist sehr ruhig.",
      "en": "The suburb <g>in which</g> my parents live is very quiet.",
      "uk": "Передмістя, <g>у якому</g> живуть мої батьки, дуже тихе.",
      "ru": "Пригород, <g>в котором</g> живут мои родители, очень тихий."
    },
    "gram": "relativpronomen_dativ_wdh_b1"
  },
  {
    "id": "k14_008",
    "cat": "k14",
    "term": {
      "de": "bezahlbar",
      "en": "affordable",
      "uk": "доступний за ціною",
      "ru": "доступный по цене"
    },
    "short": {
      "de": "so günstig, dass man es sich leisten kann",
      "en": "so affordable that you can afford it",
      "uk": "настільки доступний за ціною, що можна собі дозволити",
      "ru": "настолько доступный по цене, что можно себе позволить"
    },
    "def": {
      "de": "Diese <b>bezahlbare</b> Wohnung liegt in einer <g>superzentralen</g> Lage.",
      "en": "This affordable flat is in a super central location.",
      "uk": "Ця доступна за ціною квартира розташована в дуже центральному місці.",
      "ru": "Эта доступная по цене квартира расположена в супер-центральном месте."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_009",
    "cat": "k14",
    "term": {
      "de": "kinderfreundlich",
      "en": "child-friendly",
      "uk": "дружній до дітей",
      "ru": "дружелюбный к детям"
    },
    "short": {
      "de": "so gestaltet, dass es gut für Kinder ist",
      "en": "designed in a way that is good for children",
      "uk": "облаштований так, щоб бути зручним для дітей",
      "ru": "обустроенный так, чтобы быть удобным для детей"
    },
    "def": {
      "de": "Der Spielplatz ist <g>hochmodern</g> und die ganze Siedlung <b>kinderfreundlich</b>.",
      "en": "The playground is highly modern and the whole estate is child-friendly.",
      "uk": "Дитячий майданчик дуже сучасний, а весь житловий комплекс дружній до дітей.",
      "ru": "Детская площадка супер-современная, а весь жилой комплекс дружелюбен к детям."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_010",
    "cat": "k14",
    "term": {
      "de": "die Nachbarschaftshilfe (Sg.)",
      "en": "neighbourhood help",
      "uk": "сусідська взаємодопомога",
      "ru": "соседская взаимопомощь"
    },
    "short": {
      "de": "gegenseitige Hilfe zwischen Menschen, die in der gleichen Gegend wohnen",
      "en": "mutual help between people who live in the same area",
      "uk": "взаємодопомога між людьми, які живуть в одному районі",
      "ru": "взаимопомощь между людьми, живущими в одном районе"
    },
    "def": {
      "de": "Diese <g>überregionale</g> <b>Nachbarschaftshilfe</b> verbindet mehrere Stadtteile.",
      "en": "This supra-regional neighbourhood help network connects several districts.",
      "uk": "Ця міжрегіональна сусідська взаємодопомога обʼєднує кілька районів міста.",
      "ru": "Эта межрегиональная соседская взаимопомощь объединяет несколько районов города."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_011",
    "cat": "k14",
    "term": {
      "de": "das Gesuch, -e",
      "en": "request / wanted ad",
      "uk": "запит, оголошення про пошук",
      "ru": "запрос, объявление о поиске"
    },
    "short": {
      "de": "eine Anzeige, in der man nach etwas sucht, zum Beispiel nach einer Wohnung",
      "en": "an advertisement in which someone is looking for something, for example a flat",
      "uk": "оголошення, у якому людина щось шукає, наприклад квартиру",
      "ru": "объявление, в котором человек что-то ищет, например квартиру"
    },
    "def": {
      "de": "<g>Was</g> in ihrem <b>Gesuch</b> stand, hat mich sofort überzeugt.",
      "en": "<g>What</g> was written in her <b>advertisement</b> convinced me immediately.",
      "uk": "<g>Те, що</g> було написано в її оголошенні, одразу мене переконало.",
      "ru": "<g>То, что</g> было написано в её объявлении, сразу меня убедило."
    },
    "gram": "relativsatz_wo_was"
  },
  {
    "id": "k14_012",
    "cat": "k14",
    "term": {
      "de": "sich etwas vorstellen",
      "en": "to imagine something",
      "uk": "уявляти собі щось",
      "ru": "представлять себе что-то"
    },
    "short": {
      "de": "ein Bild von etwas im Kopf haben, das noch nicht real ist",
      "en": "to have a mental image of something that is not yet real",
      "uk": "мати в уяві образ чогось, що ще не є реальним",
      "ru": "иметь в воображении образ чего-то, что ещё не является реальным"
    },
    "def": {
      "de": "Ich kann <b>mir</b> kaum <b>vorstellen</b>, wie <g>extrateuer</g> diese Wohnung wirklich ist.",
      "en": "I can hardly imagine how extremely expensive this flat really is.",
      "uk": "Я собі ледве можу уявити, наскільки надзвичайно дорогою насправді є ця квартира.",
      "ru": "Я себе едва могу представить, насколько чрезвычайно дорогая на самом деле эта квартира."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_013",
    "cat": "k14",
    "term": {
      "de": "isoliert",
      "en": "isolated",
      "uk": "ізольований",
      "ru": "изолированный"
    },
    "short": {
      "de": "allein und ohne Kontakt zu anderen Menschen",
      "en": "alone and without contact with other people",
      "uk": "самотній і без контакту з іншими людьми",
      "ru": "одинокий и без контакта с другими людьми"
    },
    "def": {
      "de": "Das <g>hochmoderne</g> Haus ist gut gedämmt, aber die alte Wohnung wirkt völlig <b>isoliert</b> vom Rest des Gebäudes.",
      "en": "The highly modern house is well insulated, but the old flat seems completely isolated from the rest of the building.",
      "uk": "Дуже сучасний будинок добре теплоізольований, але стара квартира виглядає повністю відокремленою від решти будівлі.",
      "ru": "Супер-современный дом хорошо утеплён, но старая квартира выглядит полностью изолированной от остальной части здания."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_014",
    "cat": "k14",
    "term": {
      "de": "lebendig",
      "en": "lively",
      "uk": "жвавий",
      "ru": "оживлённый"
    },
    "short": {
      "de": "voller Leben, Aktivität und Bewegung",
      "en": "full of life, activity and movement",
      "uk": "сповнений життя, активності й руху",
      "ru": "полный жизни, активности и движения"
    },
    "def": {
      "de": "Die <g>übergroße</g> Piazza im Zentrum wirkt jeden Abend besonders <b>lebendig</b>.",
      "en": "The oversized piazza in the centre feels especially lively every evening.",
      "uk": "Величезна площа в центрі щовечора виглядає особливо жвавою.",
      "ru": "Огромная площадь в центре каждый вечер выглядит особенно оживлённой."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_015",
    "cat": "k14",
    "term": {
      "de": "die Wohnfläche, -n",
      "en": "living space (area)",
      "uk": "житлова площа",
      "ru": "жилая площадь"
    },
    "short": {
      "de": "die Größe einer Wohnung, gemessen in Quadratmetern",
      "en": "the size of a flat, measured in square metres",
      "uk": "розмір квартири, виміряний у квадратних метрах",
      "ru": "размер квартиры, измеренный в квадратных метрах"
    },
    "def": {
      "de": "Diese Villa hat eine <g>überdurchschnittliche</g> <b>Wohnfläche</b> von 250 Quadratmetern.",
      "en": "This villa has an above-average living space of 250 square metres.",
      "uk": "Ця вілла має надсередню житлову площу в 250 квадратних метрів.",
      "ru": "Эта вилла имеет сверхсреднюю жилую площадь в 250 квадратных метров."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k14_016",
    "cat": "k14",
    "term": {
      "de": "die Innenstadt, -städte",
      "en": "city centre",
      "uk": "центр міста",
      "ru": "центр города"
    },
    "short": {
      "de": "der zentrale Teil einer Stadt",
      "en": "the central part of a city",
      "uk": "центральна частина міста",
      "ru": "центральная часть города"
    },
    "def": {
      "de": "Die <g>hochpreisige</g> <b>Innenstadt</b> zieht vor allem wohlhabende Familien an.",
      "en": "The high-priced city centre mainly attracts wealthy families.",
      "uk": "Дороговартісний центр міста приваблює насамперед заможні родини.",
      "ru": "Дорогой центр города привлекает в основном состоятельные семьи."
    },
    "gram": "adjektive_super_hoch_ueber_extra"
  },
  {
    "id": "k15_001",
    "cat": "k15",
    "term": {
      "de": "die Einbürgerung, -en",
      "en": "naturalisation",
      "uk": "натуралізація",
      "ru": "натурализация"
    },
    "short": {
      "de": "der Prozess, mit dem man die Staatsbürgerschaft eines Landes bekommt",
      "en": "the process of obtaining the citizenship of a country",
      "uk": "процес отримання громадянства країни",
      "ru": "процесс получения гражданства страны"
    },
    "def": {
      "de": "Für <g>erfolgreiche</g> <b>Einbürgerung</b> braucht man gute Deutschkenntnisse.",
      "en": "For successful naturalisation, you need good German skills.",
      "uk": "Для успішної натуралізації потрібні хороші знання німецької мови.",
      "ru": "Для успешной натурализации нужны хорошие знания немецкого языка."
    },
    "gram": "adjektivdeklination_ohne_artikel"
  },
  {
    "id": "k15_002",
    "cat": "k15",
    "term": {
      "de": "der Einbürgerungsantrag, -anträge",
      "en": "naturalisation application",
      "uk": "заява на натуралізацію",
      "ru": "заявление на натурализацию"
    },
    "short": {
      "de": "das Formular, das man für die Einbürgerung ausfüllen muss",
      "en": "the form that must be filled out for naturalisation",
      "uk": "форма, яку потрібно заповнити для натуралізації",
      "ru": "форма, которую нужно заполнить для натурализации"
    },
    "def": {
      "de": "<g>Vollständiger</g> <b>Einbürgerungsantrag</b> braucht mehrere wichtige Dokumente.",
      "en": "A complete naturalisation application requires several important documents.",
      "uk": "Повна заява на натуралізацію потребує кількох важливих документів.",
      "ru": "Полное заявление на натурализацию требует нескольких важных документов."
    },
    "gram": "adjektivdeklination_ohne_artikel"
  },
  {
    "id": "k15_003",
    "cat": "k15",
    "term": {
      "de": "die Staatsbürgerschaft, -en",
      "en": "citizenship",
      "uk": "громадянство",
      "ru": "гражданство"
    },
    "short": {
      "de": "die rechtliche Zugehörigkeit einer Person zu einem Staat",
      "en": "the legal membership of a person in a state",
      "uk": "юридична належність особи до певної держави",
      "ru": "юридическая принадлежность человека к определённому государству"
    },
    "def": {
      "de": "Die <g>wachsende</g> Zahl an Anträgen auf <b>Staatsbürgerschaft</b> zeigt das große Interesse an Deutschland.",
      "en": "The <g>growing</g> number of applications for <b>citizenship</b> shows the great interest in Germany.",
      "uk": "Зростаюча кількість заявок на <b>громадянство</b> свідчить про великий інтерес до Німеччини.",
      "ru": "Растущее число заявок на <b>гражданство</b> свидетельствует о большом интересе к Германии."
    },
    "gram": "partizip1_als_adjektiv"
  },
  {
    "id": "k15_004",
    "cat": "k15",
    "term": {
      "de": "die doppelte Staatsbürgerschaft",
      "en": "dual citizenship",
      "uk": "подвійне громадянство",
      "ru": "двойное гражданство"
    },
    "short": {
      "de": "wenn eine Person gleichzeitig Bürgerin von zwei Staaten ist",
      "en": "when a person is a citizen of two states at the same time",
      "uk": "коли особа одночасно є громадянином двох держав",
      "ru": "когда человек одновременно является гражданином двух государств"
    },
    "def": {
      "de": "Die <g>gesetzlich erlaubte</g> <b>doppelte Staatsbürgerschaft</b> erleichtert vielen Menschen das Leben.",
      "en": "The <g>legally permitted</g> <b>dual citizenship</b> makes life easier for many people.",
      "uk": "Дозволене законом <b>подвійне громадянство</b> полегшує життя багатьом людям.",
      "ru": "Разрешённое законом <b>двойное гражданство</b> облегчает жизнь многим людям."
    },
    "gram": "partizip2_als_adjektiv"
  },
  {
    "id": "k15_005",
    "cat": "k15",
    "term": {
      "de": "der Integrationskurs, -e",
      "en": "integration course",
      "uk": "інтеграційний курс",
      "ru": "интеграционный курс"
    },
    "short": {
      "de": "ein Kurs, der beim Erlernen der Sprache und beim Leben in einem neuen Land hilft",
      "en": "a course that helps with learning the language and living in a new country",
      "uk": "курс, який допомагає у вивченні мови та адаптації до життя в новій країні",
      "ru": "курс, который помогает в изучении языка и адаптации к жизни в новой стране"
    },
    "def": {
      "de": "Der <g>erfolgreich abgeschlossene</g> <b>Integrationskurs</b> ist eine wichtige Voraussetzung für die Einbürgerung.",
      "en": "The <g>successfully completed</g> <b>integration course</b> is an important requirement for naturalisation.",
      "uk": "Успішно завершений <b>інтеграційний курс</b> є важливою умовою для натуралізації.",
      "ru": "Успешно завершённый <b>интеграционный курс</b> является важным условием для натурализации."
    },
    "gram": "partizip2_als_adjektiv"
  },
  {
    "id": "k15_006",
    "cat": "k15",
    "term": {
      "de": "das Aufenthaltsrecht, -e",
      "en": "right of residence",
      "uk": "право на проживання",
      "ru": "право на проживание"
    },
    "short": {
      "de": "das gesetzliche Recht, in einem Land zu leben",
      "en": "the legal right to live in a country",
      "uk": "законне право проживати в країні",
      "ru": "законное право проживать в стране"
    },
    "def": {
      "de": "Man braucht <g>entweder</g> ein gültiges <b>Aufenthaltsrecht</b> <g>oder</g> einen Ausweisungsschutz.",
      "en": "You need <g>either</g> a valid <b>right of residence</b> <g>or</g> protection from deportation.",
      "uk": "Потрібне <g>або</g> чинне <b>право на проживання</b>, <g>або</g> захист від видворення.",
      "ru": "Нужно <g>либо</g> действующее <b>право на проживание</b>, <g>либо</g> защита от депортации."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_007",
    "cat": "k15",
    "term": {
      "de": "die Aufenthaltserlaubnis (Sg.)",
      "en": "residence permit",
      "uk": "дозвіл на проживання",
      "ru": "разрешение на проживание"
    },
    "short": {
      "de": "das offizielle Dokument, das den legalen Aufenthalt in einem Land erlaubt",
      "en": "the official document that permits legal residence in a country",
      "uk": "офіційний документ, що дозволяє законно проживати в країні",
      "ru": "официальный документ, разрешающий законно проживать в стране"
    },
    "def": {
      "de": "Für den Antrag braucht man <g>entweder</g> eine <b>Aufenthaltserlaubnis</b> <g>oder</g> einen anderen gültigen Nachweis.",
      "en": "For the application, you need <g>either</g> a <b>residence permit</b> <g>or</g> another valid proof.",
      "uk": "Для заяви потрібен <g>або</g> <b>дозвіл на проживання</b>, <g>або</g> інше чинне підтвердження.",
      "ru": "Для заявления нужно <g>либо</g> <b>разрешение на проживание</b>, <g>либо</g> другое действующее подтверждение."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_008",
    "cat": "k15",
    "term": {
      "de": "der Grundwert, -e",
      "en": "fundamental value",
      "uk": "основна цінність",
      "ru": "основная ценность"
    },
    "short": {
      "de": "eine wichtige Idee, auf der eine Gesellschaft aufgebaut ist",
      "en": "an important idea on which a society is built",
      "uk": "важлива ідея, на якій побудоване суспільство",
      "ru": "важная идея, на которой построено общество"
    },
    "def": {
      "de": "<g>Entweder</g> man respektiert die <b>Grundwerte</b> der Gesellschaft, <g>oder</g> man lebt gegen sie.",
      "en": "<g>Either</g> you respect the fundamental values of society, <g>or</g> you live against them.",
      "uk": "<g>Або</g> людина поважає основні цінності суспільства, <g>або</g> живе всупереч їм.",
      "ru": "<g>Либо</g> человек уважает основные ценности общества, <g>либо</g> живёт вопреки им."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_009",
    "cat": "k15",
    "term": {
      "de": "das Grundrecht, -e",
      "en": "fundamental right",
      "uk": "основне право",
      "ru": "основное право"
    },
    "short": {
      "de": "ein Recht, das jedem Menschen laut Gesetz zusteht",
      "en": "a right that every person is legally entitled to",
      "uk": "право, яке за законом належить кожній людині",
      "ru": "право, которое по закону принадлежит каждому человеку"
    },
    "def": {
      "de": "Ein <g>überzeugendes</g> Argument für Demokratie ist der Schutz jedes <b>Grundrechts</b>.",
      "en": "A <g>convincing</g> argument for democracy is the protection of every <b>fundamental right</b>.",
      "uk": "Переконливий аргумент на користь демократії — захист кожного <b>основного права</b>.",
      "ru": "Убедительный аргумент в пользу демократии — защита каждого <b>основного права</b>."
    },
    "gram": "partizip1_als_adjektiv"
  },
  {
    "id": "k15_010",
    "cat": "k15",
    "term": {
      "de": "die Glaubensfreiheit (Sg.)",
      "en": "freedom of religion",
      "uk": "свобода віросповідання",
      "ru": "свобода вероисповедания"
    },
    "short": {
      "de": "das Recht, selbst zu entscheiden, was man glaubt",
      "en": "the right to decide for yourself what you believe",
      "uk": "право самостійно вирішувати, у що вірити",
      "ru": "право самостоятельно решать, во что верить"
    },
    "def": {
      "de": "Die <g>gesetzlich geschützte</g> <b>Glaubensfreiheit</b> gehört zu den wichtigsten Grundrechten.",
      "en": "The <g>legally protected</g> <b>freedom of religion</b> is one of the most important fundamental rights.",
      "uk": "Захищена законом <b>свобода віросповідання</b> є одним із найважливіших основних прав.",
      "ru": "Защищённая законом <b>свобода вероисповедания</b> является одним из важнейших основных прав."
    },
    "gram": "partizip2_als_adjektiv"
  },
  {
    "id": "k15_011",
    "cat": "k15",
    "term": {
      "de": "die Demokratie, -n",
      "en": "democracy",
      "uk": "демократія",
      "ru": "демократия"
    },
    "short": {
      "de": "eine Staatsform, in der das Volk durch Wahlen mitbestimmt",
      "en": "a form of state in which the people help decide through elections",
      "uk": "форма державного правління, за якої народ бере участь у прийнятті рішень через вибори",
      "ru": "форма государственного правления, при которой народ участвует в принятии решений через выборы"
    },
    "def": {
      "de": "<g>Entweder</g> man engagiert sich aktiv für die <b>Demokratie</b>, <g>oder</g> man verliert langsam ihre Vorteile.",
      "en": "<g>Either</g> you get actively involved for <b>democracy</b>, <g>or</g> you slowly lose its benefits.",
      "uk": "<g>Або</g> людина активно долучається до <b>демократії</b>, <g>або</g> поступово втрачає її переваги.",
      "ru": "<g>Либо</g> человек активно участвует в <b>демократии</b>, <g>либо</g> постепенно теряет её преимущества."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_012",
    "cat": "k15",
    "term": {
      "de": "vollständig",
      "en": "complete",
      "uk": "повний, завершений",
      "ru": "полный, законченный"
    },
    "short": {
      "de": "ganz und ohne dass etwas fehlt",
      "en": "complete and with nothing missing",
      "uk": "повний, без нічого відсутнього",
      "ru": "полный, без чего-либо отсутствующего"
    },
    "def": {
      "de": "Der Antrag muss <g>entweder</g> <b>vollständig</b> ausgefüllt <g>oder</g> gar nicht eingereicht werden.",
      "en": "The application must <g>either</g> be filled out <b>completely</b> <g>or</g> not submitted at all.",
      "uk": "Заяву потрібно <g>або</g> заповнити <b>повністю</b>, <g>або</g> взагалі не подавати.",
      "ru": "Заявление нужно <g>либо</g> заполнить <b>полностью</b>, <g>либо</g> вообще не подавать."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_013",
    "cat": "k15",
    "term": {
      "de": "nachweisen",
      "en": "to prove / to provide evidence of",
      "uk": "доводити, підтверджувати документально",
      "ru": "доказывать, подтверждать документально"
    },
    "short": {
      "de": "mit Dokumenten zeigen, dass etwas wahr ist",
      "en": "to show with documents that something is true",
      "uk": "документально підтверджувати, що щось є правдою",
      "ru": "документально подтверждать, что что-то является правдой"
    },
    "def": {
      "de": "Man muss <g>entweder</g> gute Sprachkenntnisse <b>nachweisen</b> <g>oder</g> einen Kurs besuchen.",
      "en": "You have to <g>either</g> <b>prove</b> good language skills <g>or</g> attend a course.",
      "uk": "Потрібно <g>або</g> <b>підтвердити</b> хороші знання мови, <g>або</g> відвідати курс.",
      "ru": "Нужно <g>либо</g> <b>подтвердить</b> хорошее знание языка, <g>либо</g> посетить курс."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_014",
    "cat": "k15",
    "term": {
      "de": "die Deutschkenntnisse",
      "en": "German language skills",
      "uk": "знання німецької мови",
      "ru": "знание немецкого языка"
    },
    "short": {
      "de": "das Wissen und die Fähigkeiten, die man in der deutschen Sprache hat",
      "en": "the knowledge and skills you have in the German language",
      "uk": "знання та навички з німецької мови",
      "ru": "знания и навыки в немецком языке"
    },
    "def": {
      "de": "<g>Entweder</g> reichen die <b>Deutschkenntnisse</b> für den Test, <g>oder</g> man muss ihn wiederholen.",
      "en": "<g>Either</g> the <b>German language skills</b> are sufficient for the test, <g>or</g> you have to retake it.",
      "uk": "<g>Або</g> <b>знань німецької мови</b> достатньо для тесту, <g>або</g> доведеться його перескладати.",
      "ru": "<g>Либо</g> <b>знаний немецкого языка</b> достаточно для теста, <g>либо</g> придётся его пересдавать."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_015",
    "cat": "k15",
    "term": {
      "de": "beitragen (zu)",
      "en": "to contribute (to)",
      "uk": "робити внесок (у щось)",
      "ru": "вносить вклад (во что-то)"
    },
    "short": {
      "de": "einen Teil dazu geben, dass etwas gelingt",
      "en": "to contribute a part to making something succeed",
      "uk": "робити свій внесок у те, щоб щось вдалося",
      "ru": "вносить свой вклад в то, чтобы что-то удалось"
    },
    "def": {
      "de": "Jeder kann <g>entweder</g> finanziell <b>zum</b> Projekt <b>beitragen</b> <g>oder</g> mit seiner Zeit helfen.",
      "en": "Everyone can <g>either</g> <b>contribute</b> financially to the project <g>or</g> help with their time.",
      "uk": "Кожен може <g>або</g> зробити фінансовий <b>внесок</b> у проєкт, <g>або</g> допомогти своїм часом.",
      "ru": "Каждый может <g>либо</g> внести финансовый <b>вклад</b> в проект, <g>либо</g> помочь своим временем."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k15_016",
    "cat": "k15",
    "term": {
      "de": "die Bürokratie (Sg.)",
      "en": "bureaucracy",
      "uk": "бюрократія",
      "ru": "бюрократия"
    },
    "short": {
      "de": "viele offizielle Regeln und Formulare bei Behörden",
      "en": "many official rules and forms at government offices",
      "uk": "багато офіційних правил і форм у державних установах",
      "ru": "много официальных правил и форм в государственных учреждениях"
    },
    "def": {
      "de": "<g>Entweder</g> man akzeptiert die <b>Bürokratie</b> in Deutschland, <g>oder</g> man verzweifelt schnell daran.",
      "en": "<g>Either</g> you accept the <b>bureaucracy</b> in Germany, <g>or</g> you quickly get frustrated by it.",
      "uk": "<g>Або</g> людина приймає <b>бюрократію</b> в Німеччині, <g>або</g> швидко впадає через неї у відчай.",
      "ru": "<g>Либо</g> человек принимает <b>бюрократию</b> в Германии, <g>либо</g> быстро приходит от неё в отчаяние."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "k16_001",
    "cat": "k16",
    "term": {
      "de": "Stress haben",
      "en": "to be stressed",
      "uk": "перебувати у стресі",
      "ru": "испытывать стресс"
    },
    "short": {
      "de": "sich unter Druck fühlen und wenig Ruhe haben",
      "en": "to feel under pressure and have little rest",
      "uk": "відчувати тиск і мати мало спокою",
      "ru": "чувствовать давление и иметь мало покоя"
    },
    "def": {
      "de": "Sie <b>hat</b> viel <b>Stress</b>, <g>weil</g> sie zu viele Aufgaben gleichzeitig erledigen muss.",
      "en": "She is very stressed <g>because</g> she has to complete too many tasks at once.",
      "uk": "Вона перебуває у великому стресі, <g>тому що</g> їй доводиться виконувати забагато завдань одночасно.",
      "ru": "Она испытывает большой стресс, <g>потому что</g> ей приходится выполнять слишком много задач одновременно."
    },
    "gram": "satzverbindungen_ueberblick"
  },
  {
    "id": "k16_002",
    "cat": "k16",
    "term": {
      "de": "erschöpft sein",
      "en": "to be exhausted",
      "uk": "бути виснаженим",
      "ru": "быть измотанным"
    },
    "short": {
      "de": "sehr müde sein, weil man viel Kraft verbraucht hat",
      "en": "to be very tired because you have used up a lot of energy",
      "uk": "бути дуже втомленим через витрачені сили",
      "ru": "быть очень уставшим из-за потраченных сил"
    },
    "def": {
      "de": "Er <b>ist</b> total <b>erschöpft</b>, <g>trotzdem</g> geht er heute noch joggen.",
      "en": "He is totally exhausted, <g>nevertheless</g> he is still going jogging today.",
      "uk": "Він повністю виснажений, <g>але все одно</g> сьогодні ще піде на пробіжку.",
      "ru": "Он совершенно измотан, <g>но всё равно</g> сегодня ещё пойдёт на пробежку."
    },
    "gram": "satzverbindungen_ueberblick"
  },
  {
    "id": "k16_003",
    "cat": "k16",
    "term": {
      "de": "sich freuen (auf/über)",
      "en": "to look forward to / to be happy about",
      "uk": "радіти (чомусь)",
      "ru": "радоваться (чему-то)"
    },
    "short": {
      "de": "ein positives Gefühl haben, weil etwas Schönes passiert oder passieren wird",
      "en": "to have a positive feeling because something nice is happening or will happen",
      "uk": "відчувати позитивні емоції через щось приємне, що відбувається чи відбудеться",
      "ru": "испытывать положительные эмоции из-за чего-то приятного, что происходит или произойдёт"
    },
    "def": {
      "de": "Ich <b>freue</b> <b>mich</b> total <b>auf</b> den Urlaub, <g>und</g> ich habe schon alles gepackt.",
      "en": "I'm really looking forward to the holiday, <g>and</g> I have already packed everything.",
      "uk": "Я дуже тішуся відпусткою, <g>і</g> я вже все спакував.",
      "ru": "Я очень радуюсь отпуску, <g>и</g> я уже всё упаковал."
    },
    "gram": "satzverbindungen_ueberblick"
  },
  {
    "id": "k16_004",
    "cat": "k16",
    "term": {
      "de": "verreisen",
      "en": "to go on a trip",
      "uk": "вирушати в подорож",
      "ru": "отправляться в путешествие"
    },
    "short": {
      "de": "für eine Zeit an einen anderen Ort fahren, meistens im Urlaub",
      "en": "to travel to another place for a while, usually on holiday",
      "uk": "виїжджати на певний час в інше місце, зазвичай у відпустку",
      "ru": "уезжать на некоторое время в другое место, обычно в отпуск"
    },
    "def": {
      "de": "Bevor wir <b>verreisen</b>, <g>nehme</g> ich meine Kamera unbedingt <g>mit</g>.",
      "en": "Before we go on a trip, I definitely <g>take</g> my camera <g>with me</g>.",
      "uk": "Перш ніж ми вирушимо в подорож, я обовʼязково візьму з собою камеру.",
      "ru": "Прежде чем мы отправимся в путешествие, я обязательно возьму с собой камеру."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_005",
    "cat": "k16",
    "term": {
      "de": "übernachten",
      "en": "to stay overnight",
      "uk": "ночувати",
      "ru": "ночевать"
    },
    "short": {
      "de": "die Nacht an einem bestimmten Ort verbringen, oft nicht zu Hause",
      "en": "to spend the night in a certain place, often not at home",
      "uk": "проводити ніч у певному місці, часто не вдома",
      "ru": "проводить ночь в определённом месте, часто не дома"
    },
    "def": {
      "de": "Wir <b>übernachten</b> im Hotel, aber morgen <g>fahren</g> wir schon <g>weiter</g> zur nächsten Stadt.",
      "en": "We are staying overnight at the hotel, but tomorrow we are already <g>moving</g> <g>on</g> to the next city.",
      "uk": "Ми ночуємо в готелі, але завтра вже їдемо далі до наступного міста.",
      "ru": "Мы ночуем в отеле, но завтра уже едем дальше в следующий город."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_006",
    "cat": "k16",
    "term": {
      "de": "die Jugendherberge, -n",
      "en": "youth hostel",
      "uk": "молодіжний гуртожиток (хостел)",
      "ru": "молодёжное общежитие (хостел)"
    },
    "short": {
      "de": "ein günstiges Hotel, meistens für junge Leute oder Gruppen",
      "en": "an affordable hotel, usually for young people or groups",
      "uk": "недороге помешкання, зазвичай для молоді чи груп",
      "ru": "недорогое жильё, обычно для молодёжи или групп"
    },
    "def": {
      "de": "In der <b>Jugendherberge</b> <g>räumen</g> alle Gäste am Morgen <g>zusammen</g> auf.",
      "en": "In the youth hostel, all guests <g>tidy</g> <g>up together</g> in the morning.",
      "uk": "У молодіжному гуртожитку всі гості вранці разом прибирають.",
      "ru": "В молодёжном общежитии все гости утром вместе убираются."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_007",
    "cat": "k16",
    "term": {
      "de": "das Denkmal, Denkmäler",
      "en": "monument",
      "uk": "памʼятник",
      "ru": "памятник"
    },
    "short": {
      "de": "ein Bauwerk, das an eine wichtige Person oder ein wichtiges Ereignis erinnert",
      "en": "a structure that commemorates an important person or event",
      "uk": "споруда, яка нагадує про важливу людину чи подію",
      "ru": "сооружение, которое напоминает о важном человеке или событии"
    },
    "def": {
      "de": "Am <b>Denkmal</b> <g>kommen</g> wir morgen wieder <g>zurück</g>, um Fotos zu machen.",
      "en": "We will <g>come</g> <g>back</g> to the monument tomorrow to take photos.",
      "uk": "Ми завтра знову повернемося до памʼятника, щоб зробити фото.",
      "ru": "Мы завтра снова вернёмся к памятнику, чтобы сделать фотографии."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_008",
    "cat": "k16",
    "term": {
      "de": "für Sicherheit sorgen",
      "en": "to ensure safety",
      "uk": "забезпечувати безпеку",
      "ru": "обеспечивать безопасность"
    },
    "short": {
      "de": "dafür sorgen, dass Menschen sicher und geschützt sind",
      "en": "to make sure that people are safe and protected",
      "uk": "дбати про те, щоб люди були в безпеці й захищені",
      "ru": "заботиться о том, чтобы люди были в безопасности и защищены"
    },
    "def": {
      "de": "Die Polizei <b>sorgt</b> <b>für</b> <b>Sicherheit</b>, und die Sanitäter <g>bringen</g> den Verletzten sofort <g>weg</g>.",
      "en": "The police ensure safety, and the paramedics immediately <g>take</g> the injured person <g>away</g>.",
      "uk": "Поліція дбає про безпеку, а медики одразу забирають пораненого.",
      "ru": "Полиция заботится о безопасности, а медики сразу увозят раненого."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_009",
    "cat": "k16",
    "term": {
      "de": "der Einbrecher, - / die Einbrecherin, -nen",
      "en": "burglar",
      "uk": "грабіжник / грабіжниця",
      "ru": "грабитель / грабительница"
    },
    "short": {
      "de": "eine Person, die illegal in ein Haus geht, um dort etwas zu stehlen",
      "en": "a person who illegally enters a house to steal something",
      "uk": "особа, яка незаконно проникає в будинок, щоб щось украсти",
      "ru": "человек, который незаконно проникает в дом, чтобы что-то украсть"
    },
    "def": {
      "de": "Der <b>Einbrecher</b> wollte fliehen, aber ein Nachbar <g>nahm</g> ihn kurzerhand <g>mit</g> zur Polizei.",
      "en": "The burglar wanted to flee, but a neighbour simply <g>took</g> him <g>along</g> to the police.",
      "uk": "Грабіжник хотів утекти, але сусід просто відвів його з собою до поліції.",
      "ru": "Грабитель хотел сбежать, но сосед просто отвёл его с собой в полицию."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_010",
    "cat": "k16",
    "term": {
      "de": "stehlen",
      "en": "to steal",
      "uk": "красти",
      "ru": "красть"
    },
    "short": {
      "de": "etwas nehmen, das einer anderen Person gehört, ohne zu fragen",
      "en": "to take something that belongs to another person without asking",
      "uk": "брати щось, що належить іншій людині, без дозволу",
      "ru": "брать что-то, принадлежащее другому человеку, без разрешения"
    },
    "def": {
      "de": "Der Dieb <g>nahm</g> das Fahrrad <g>mit</g>, nachdem er es <b>gestohlen</b> hatte.",
      "en": "The thief <g>took</g> the bike <g>with him</g> after he had stolen it.",
      "uk": "Злодій забрав велосипед із собою після того, як украв його.",
      "ru": "Вор забрал велосипед с собой после того, как украл его."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_011",
    "cat": "k16",
    "term": {
      "de": "verhaften",
      "en": "to arrest",
      "uk": "заарештовувати",
      "ru": "арестовывать"
    },
    "short": {
      "de": "eine Person, die etwas Verbotenes getan hat, offiziell festhalten",
      "en": "to officially detain a person who has done something forbidden",
      "uk": "офіційно затримувати особу, яка вчинила щось заборонене",
      "ru": "официально задерживать человека, совершившего что-то запрещённое"
    },
    "def": {
      "de": "Die Polizei <b>verhaftete</b> den Mann und <g>brachte</g> ihn <g>weg</g>.",
      "en": "The police arrested the man and <g>took</g> him <g>away</g>.",
      "uk": "Поліція заарештувала чоловіка і забрала його геть.",
      "ru": "Полиция арестовала мужчину и увела его."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_012",
    "cat": "k16",
    "term": {
      "de": "festnehmen",
      "en": "to detain / to apprehend",
      "uk": "затримувати",
      "ru": "задерживать"
    },
    "short": {
      "de": "eine Person durch die Polizei kurzzeitig festhalten",
      "en": "to be briefly detained by the police",
      "uk": "короткочасно затримувати особу поліцією",
      "ru": "кратковременно задерживать человека полицией"
    },
    "def": {
      "de": "Die Polizei <b>nahm</b> den Verdächtigen <b>fest</b> und <g>brachte</g> ihn sofort <g>mit</g> zur Wache.",
      "en": "The police detained the suspect and immediately <g>took</g> him <g>along</g> to the station.",
      "uk": "Поліція затримала підозрюваного і одразу забрала його з собою до відділку.",
      "ru": "Полиция задержала подозреваемого и сразу забрала его с собой в участок."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_013",
    "cat": "k16",
    "term": {
      "de": "fliehen",
      "en": "to flee",
      "uk": "тікати",
      "ru": "убегать"
    },
    "short": {
      "de": "schnell weglaufen, um einer Gefahr zu entkommen",
      "en": "to run away quickly to escape a danger",
      "uk": "швидко тікати, щоб уникнути небезпеки",
      "ru": "быстро убегать, чтобы избежать опасности"
    },
    "def": {
      "de": "Der Täter versuchte zu <b>fliehen</b>, aber die Polizei <g>brachte</g> ihn schnell <g>zurück</g> in die Zelle.",
      "en": "The perpetrator tried to flee, but the police quickly <g>brought</g> him <g>back</g> to the cell.",
      "uk": "Злочинець намагався втекти, але поліція швидко повернула його назад до камери.",
      "ru": "Преступник пытался сбежать, но полиция быстро вернула его назад в камеру."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_014",
    "cat": "k16",
    "term": {
      "de": "das Urteil, -e",
      "en": "verdict / judgment",
      "uk": "вирок, судове рішення",
      "ru": "приговор, судебное решение"
    },
    "short": {
      "de": "die offizielle Entscheidung eines Gerichts",
      "en": "the official decision of a court",
      "uk": "офіційне рішення суду",
      "ru": "официальное решение суда"
    },
    "def": {
      "de": "Nach dem <b>Urteil</b> <g>nahm</g> der Anwalt seine Akten <g>mit</g>.",
      "en": "After the verdict, the lawyer <g>took</g> his files <g>with him</g>.",
      "uk": "Після вироку адвокат забрав свої документи із собою.",
      "ru": "После приговора адвокат забрал свои документы с собой."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_015",
    "cat": "k16",
    "term": {
      "de": "das Wahrzeichen, -",
      "en": "landmark",
      "uk": "визначна памʼятка",
      "ru": "достопримечательность"
    },
    "short": {
      "de": "ein bekanntes Gebäude oder Symbol, das typisch für eine Stadt ist",
      "en": "a well-known building or symbol that is typical of a city",
      "uk": "відома будівля чи символ, характерні для міста",
      "ru": "известное здание или символ, типичный для города"
    },
    "def": {
      "de": "Touristen <g>kommen</g> jedes Jahr <g>zurück</g>, um das berühmte <b>Wahrzeichen</b> der Stadt zu sehen.",
      "en": "Tourists <g>come</g> <g>back</g> every year to see the city's famous landmark.",
      "uk": "Туристи щороку повертаються, щоб побачити відому визначну памʼятку міста.",
      "ru": "Туристы каждый год возвращаются, чтобы увидеть знаменитую достопримечательность города."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "k16_016",
    "cat": "k16",
    "term": {
      "de": "die Architektur (Sg.)",
      "en": "architecture",
      "uk": "архітектура",
      "ru": "архитектура"
    },
    "short": {
      "de": "die Kunst und Wissenschaft, Gebäude zu planen und zu bauen",
      "en": "the art and science of planning and constructing buildings",
      "uk": "мистецтво і наука проєктування та будівництва споруд",
      "ru": "искусство и наука проектирования и строительства зданий"
    },
    "def": {
      "de": "Die moderne <b>Architektur</b> der Stadt und die alten Gebäude <g>passen</g> überraschend gut <g>zusammen</g>.",
      "en": "The city's modern architecture and the old buildings surprisingly <g>go</g> <g>well together</g>.",
      "uk": "Сучасна архітектура міста та старі будівлі напрочуд добре поєднуються.",
      "ru": "Современная архитектура города и старые здания на удивление хорошо сочетаются."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  }
];

// ── ДІАЛОГИ (DIALOGE) ───────────────────────────────────────────
// 4 діалоги на кожну з 8 глав, gram визначено прямим аналізом репліки

var DIALOGE = [
  {
    "id": "dlg_001",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "<g>Könnten</g> Sie bitte etwas leiser sein? Es ist schon nach 22 Uhr.",
      "en": "<g>Could you</g> please be a bit quieter? It's already after 10 p.m.",
      "uk": "<g>Могли б Ви</g>, будь ласка, бути трохи тихішими? Вже по 22:00.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, быть немного тише? Уже после 22:00."
    },
    "a": {
      "de": "Entschuldigung, das wusste ich nicht. Ich mache sofort leiser.",
      "en": "Sorry, I didn't know that. I'll be quieter right away.",
      "uk": "Вибачте, я не знав цього. Я одразу стану тихішим.",
      "ru": "Извините, я не знал этого. Я сразу стану тише."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "dlg_002",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Wo <g>darf</g> ich meinen Kinderwagen abstellen?",
      "en": "Where <g>may</g> I leave my stroller?",
      "uk": "Де мені <g>можна</g> залишити коляску?",
      "ru": "Где мне <g>можно</g> оставить коляску?"
    },
    "a": {
      "de": "Am besten im Keller, im Treppenhaus darfst du ihn leider nicht lassen.",
      "en": "Best in the basement; unfortunately you can't leave it in the stairwell.",
      "uk": "Найкраще в підвалі, у підʼїзді, на жаль, не можна її залишати.",
      "ru": "Лучше всего в подвале, в подъезде, к сожалению, нельзя её оставлять."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "dlg_003",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Warum riecht es hier im Treppenhaus so gut?",
      "en": "Why does it smell so good here in the stairwell?",
      "uk": "Чому тут у підʼїзді так приємно пахне?",
      "ru": "Почему здесь в подъезде так приятно пахнет?"
    },
    "a": {
      "de": "Frau Kowalski backt sonntags immer Kuchen für die ganze Nachbarschaft.",
      "en": "Mrs Kowalski always bakes a cake for the whole neighbourhood on Sundays.",
      "uk": "Пані Ковальскі щонеділі завжди пече торт для всього сусідства.",
      "ru": "Госпожа Ковальски по воскресеньям всегда печёт торт для всего соседства."
    },
    "gram": ""
  },
  {
    "id": "dlg_004",
    "cat": "Neue Nachbarn",
    "q": {
      "de": "Seit wann wohnt ihr schon in diesem Haus?",
      "en": "Since when have you been living in this building?",
      "uk": "Відколи ви живете в цьому будинку?",
      "ru": "С каких пор вы живёте в этом доме?"
    },
    "a": {
      "de": "Wir wohnen schon seit fünf Jahren hier, und es gefällt uns sehr gut.",
      "en": "We have been living here for five years already, and we like it very much.",
      "uk": "Ми живемо тут уже пʼять років, і нам тут дуже подобається.",
      "ru": "Мы живём здесь уже пять лет, и нам здесь очень нравится."
    },
    "gram": ""
  },
  {
    "id": "dlg_005",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Wollen wir <g>sowohl</g> Milch <g>als auch</g> Eier auf dem Markt kaufen?",
      "en": "Shall we buy <g>both</g> milk <g>and</g> eggs at the market?",
      "uk": "Купімо на ринку <g>як</g> молоко, <g>так і</g> яйця?",
      "ru": "Купим на рынке <g>как</g> молоко, <g>так и</g> яйца?"
    },
    "a": {
      "de": "Ja klar, dort ist beides frischer als im Supermarkt.",
      "en": "Sure, both are fresher there than at the supermarket.",
      "uk": "Так, звісно, там і те, і те свіжіше, ніж у супермаркеті.",
      "ru": "Да, конечно, там и то, и другое свежее, чем в супермаркете."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "dlg_006",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Die Hose, <g>die</g> ich letzte Woche gekauft habe, ist leider kaputt.",
      "en": "The trousers <g>that</g> I bought last week are unfortunately broken.",
      "uk": "Штани, <g>які</g> я купив минулого тижня, на жаль, пошкоджені.",
      "ru": "Брюки, <g>которые</g> я купил на прошлой неделе, к сожалению, повреждены."
    },
    "a": {
      "de": "Das tut mir leid! Hast du schon die Quittung gesucht?",
      "en": "I'm sorry! Have you already looked for the receipt?",
      "uk": "Мені шкода! Ти вже шукав квитанцію?",
      "ru": "Мне жаль! Ты уже искал квитанцию?"
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "dlg_007",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Warum schreibst du eine Reklamation?",
      "en": "Why are you writing a complaint?",
      "uk": "Чому ти пишеш рекламацію?",
      "ru": "Почему ты пишешь рекламацию?"
    },
    "a": {
      "de": "Weil das Paket beschädigt angekommen ist und ich mein Geld zurückwill.",
      "en": "Because the package arrived damaged and I want my money back.",
      "uk": "Тому що посилка прийшла пошкодженою, і я хочу повернути гроші.",
      "ru": "Потому что посылка пришла повреждённой, и я хочу вернуть деньги."
    },
    "gram": ""
  },
  {
    "id": "dlg_008",
    "cat": "Hier kaufe ich ein.",
    "q": {
      "de": "Kannst du mir kurz helfen, das Formular für den Umtausch auszufüllen?",
      "en": "Can you help me for a moment to fill in the exchange form?",
      "uk": "Можеш мені трохи допомогти заповнити формуляр для обміну?",
      "ru": "Можешь мне немного помочь заполнить формуляр для обмена?"
    },
    "a": {
      "de": "Klar, das mache ich gern für dich.",
      "en": "Sure, I'll gladly do that for you.",
      "uk": "Звісно, я залюбки це для тебе зроблю.",
      "ru": "Конечно, я с удовольствием сделаю это для тебя."
    },
    "gram": ""
  },
  {
    "id": "dlg_009",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Er <g>dürfte</g> jetzt schon zu Hause sein, oder?",
      "en": "He <g>should</g> already be home now, right?",
      "uk": "Він, певно, вже вдома, чи не так?",
      "ru": "Он, наверное, уже дома, не так ли?"
    },
    "a": {
      "de": "Ja, wahrscheinlich sitzt er schon vor dem Fernseher.",
      "en": "Yes, he's probably already sitting in front of the TV.",
      "uk": "Так, напевно, він уже сидить перед телевізором.",
      "ru": "Да, наверное, он уже сидит перед телевизором."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "dlg_010",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Wessen Konto ist das eigentlich?",
      "en": "Whose account is that, actually?",
      "uk": "Взагалі, чий це рахунок?",
      "ru": "Вообще, чей это счёт?"
    },
    "a": {
      "de": "Das ist das Konto <g>meiner Tochter</g>, ich verwalte es nur.",
      "en": "That's <g>my daughter's</g> account, I just manage it.",
      "uk": "Це рахунок моєї доньки, я лише керую ним.",
      "ru": "Это счёт моей дочери, я только управляю им."
    },
    "gram": "genitiv"
  },
  {
    "id": "dlg_011",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Warum hast du die Versicherung gekündigt, <g>obwohl</g> sie so günstig war?",
      "en": "Why did you cancel the insurance <g>although</g> it was so cheap?",
      "uk": "Чому ти розірвав страхування, <g>хоча</g> воно було таким дешевим?",
      "ru": "Почему ты расторг страхование, <g>хотя</g> оно было таким дешёвым?"
    },
    "a": {
      "de": "Weil der Service leider sehr schlecht war.",
      "en": "Because the service was unfortunately very bad.",
      "uk": "Тому що сервіс, на жаль, був дуже поганим.",
      "ru": "Потому что сервис, к сожалению, был очень плохим."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "dlg_012",
    "cat": "Wir sind für Sie da.",
    "q": {
      "de": "Hast du schon die Verbraucherzentrale angerufen?",
      "en": "Have you already called the consumer advice centre?",
      "uk": "Ти вже дзвонив у центр захисту прав споживачів?",
      "ru": "Ты уже звонил в центр защиты прав потребителей?"
    },
    "a": {
      "de": "Nein, noch nicht, aber ich werde es morgen machen.",
      "en": "No, not yet, but I will do it tomorrow.",
      "uk": "Ні, ще ні, але я зроблю це завтра.",
      "ru": "Нет, ещё нет, но я сделаю это завтра."
    },
    "gram": ""
  },
  {
    "id": "dlg_013",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Wie hat sich eure Ernährung verändert, <g>seit</g> ihr in Deutschland lebt?",
      "en": "How has your diet changed <g>since</g> you have been living in Germany?",
      "uk": "Як змінилося ваше харчування, <g>відколи</g> ви живете в Німеччині?",
      "ru": "Как изменилось ваше питание, <g>с тех пор как</g> вы живёте в Германии?"
    },
    "a": {
      "de": "Wir essen jetzt viel mehr Gemüse als früher.",
      "en": "We eat much more vegetables now than before.",
      "uk": "Тепер ми їмо набагато більше овочів, ніж раніше.",
      "ru": "Теперь мы едим намного больше овощей, чем раньше."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "dlg_014",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Isst du lieber regelmäßig zu Hause oder isst du oft unterwegs?",
      "en": "Do you prefer eating regularly at home, or do you often eat on the go?",
      "uk": "Ти волієш регулярно їсти вдома чи часто їси в дорозі?",
      "ru": "Ты предпочитаешь регулярно есть дома или часто ешь на ходу?"
    },
    "a": {
      "de": "Ich koche eigentlich immer selbst, das ist gesünder und billiger.",
      "en": "I actually always cook myself, it's healthier and cheaper.",
      "uk": "Я взагалі завжди готую сам(-а), це здоровіше і дешевше.",
      "ru": "Я вообще всегда готовлю сам(-а), это полезнее и дешевле."
    },
    "gram": ""
  },
  {
    "id": "dlg_015",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Warum hast du so lange auf das Rezept gewartet?",
      "en": "Why did you wait so long for the recipe?",
      "uk": "Чому ти так довго чекав з рецептом?",
      "ru": "Почему ты так долго ждал с рецептом?"
    },
    "a": {
      "de": "Ich habe gewartet, <g>bis</g> ich alle Zutaten im Kühlschrank hatte.",
      "en": "I waited <g>until</g> I had all the ingredients in the fridge.",
      "uk": "Я чекав, <g>доки</g> в мене не зʼявилися всі інгредієнти в холодильнику.",
      "ru": "Я ждал, <g>пока</g> у меня не появились все ингредиенты в холодильнике."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "dlg_016",
    "cat": "Schmeckt's?",
    "q": {
      "de": "Was waren die Ergebnisse der Umfrage über Essgewohnheiten?",
      "en": "What were the results of the survey on eating habits?",
      "uk": "Якими були результати опитування щодо харчових звичок?",
      "ru": "Какими были результаты опроса о привычках питания?"
    },
    "a": {
      "de": "Die meisten Leute essen heute weniger Fleisch als früher.",
      "en": "Most people eat less meat today than before.",
      "uk": "Більшість людей сьогодні їдять менше мʼяса, ніж раніше.",
      "ru": "Большинство людей сегодня едят меньше мяса, чем раньше."
    },
    "gram": ""
  },
  {
    "id": "dlg_017",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "<g>Worüber</g> hast du dich beim Sprachkurs am meisten geärgert?",
      "en": "What <g>were</g> you most annoyed <g>about</g> in the language course?",
      "uk": "<g>Через що</g> ти найбільше злився на мовному курсі?",
      "ru": "<g>Из-за чего</g> ты больше всего злился на языковых курсах?"
    },
    "a": {
      "de": "Darüber, dass die Grammatik so kompliziert ist.",
      "en": "About how complicated the grammar is.",
      "uk": "Через те, що граматика така складна.",
      "ru": "Из-за того, что грамматика такая сложная."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "dlg_018",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "<g>Mit wem</g> sprichst du eigentlich deine Muttersprache?",
      "en": "<g>Who</g> do you actually speak your native language <g>with</g>?",
      "uk": "<g>З ким</g> ти взагалі говориш рідною мовою?",
      "ru": "<g>С кем</g> ты вообще говоришь на родном языке?"
    },
    "a": {
      "de": "Nur mit meiner Familie, sonst spreche ich Deutsch.",
      "en": "Only with my family, otherwise I speak German.",
      "uk": "Тільки з родиною, а так я говорю німецькою.",
      "ru": "Только с семьёй, а так я говорю по-немецки."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "dlg_019",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "Bist du schon lange hier, oder wohnst du erst seit Kurzem in Deutschland?",
      "en": "Have you been here long, or have you only lived in Germany for a short time?",
      "uk": "Ти вже давно тут, чи живеш у Німеччині лише нещодавно?",
      "ru": "Ты уже давно здесь, или живёшь в Германии только недавно?"
    },
    "a": {
      "de": "Ich wohne schon seit drei Jahren hier.",
      "en": "I've already been living here for three years.",
      "uk": "Я вже живу тут три роки.",
      "ru": "Я уже живу здесь три года."
    },
    "gram": ""
  },
  {
    "id": "dlg_020",
    "cat": "Ah, so ist das!",
    "q": {
      "de": "Was hat dich am meisten überrascht, als du hierhergekommen bist?",
      "en": "What surprised you most when you came here?",
      "uk": "Що тебе найбільше здивувало, коли ти сюди приїхав?",
      "ru": "Что тебя больше всего удивило, когда ты сюда приехал?"
    },
    "a": {
      "de": "Dass die Geschäfte sonntags geschlossen sind.",
      "en": "That the shops are closed on Sundays.",
      "uk": "Те, що магазини зачинені по неділях.",
      "ru": "То, что магазины закрыты по воскресеньям."
    },
    "gram": ""
  },
  {
    "id": "dlg_021",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wird der Patient morgen operiert?",
      "en": "Will the patient be operated on tomorrow?",
      "uk": "Пацієнта прооперують завтра?",
      "ru": "Пациента прооперируют завтра?"
    },
    "a": {
      "de": "Ja, die Operation <g>wird</g> um neun Uhr <g>stattfinden</g>.",
      "en": "Yes, the operation <g>will take place</g> at nine o'clock.",
      "uk": "Так, операція <g>відбудеться</g> о девʼятій годині.",
      "ru": "Да, операция <g>будет проходить</g> в девять часов."
    },
    "gram": "futur_werden"
  },
  {
    "id": "dlg_022",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Warum bist du in die Notaufnahme gegangen?",
      "en": "Why did you go to the emergency room?",
      "uk": "Чому ти пішов у приймальне відділення?",
      "ru": "Почему ты пошёл в приёмный покой?"
    },
    "a": {
      "de": "Ich habe mich beim Sport <g>nicht nur</g> am Knie, <g>sondern auch</g> am Arm verletzt.",
      "en": "While doing sports, I <g>not only</g> hurt my knee <g>but also</g> my arm.",
      "uk": "Під час спорту я <g>не тільки</g> травмував коліно, <g>а й</g> руку.",
      "ru": "Во время спорта я <g>не только</g> травмировал колено, <g>но и</g> руку."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "dlg_023",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wozu brauchst du dieses Formular?",
      "en": "What do you need this form for?",
      "uk": "Для чого тобі потрібен цей формуляр?",
      "ru": "Для чего тебе нужен этот формуляр?"
    },
    "a": {
      "de": "Ich brauche es, <g>um</g> mich in der Klinik <g>anzumelden</g>.",
      "en": "I need it <g>in order to</g> register at the clinic.",
      "uk": "Він потрібен мені, <g>щоб</g> зареєструватися в клініці.",
      "ru": "Он нужен мне, <g>чтобы</g> зарегистрироваться в клинике."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "dlg_024",
    "cat": "Im Krankenhaus",
    "q": {
      "de": "Wie lange dauert die Untersuchung ungefähr?",
      "en": "How long does the examination take approximately?",
      "uk": "Скільки приблизно триває обстеження?",
      "ru": "Сколько примерно длится обследование?"
    },
    "a": {
      "de": "Meistens dauert sie nicht länger als eine halbe Stunde.",
      "en": "It usually doesn't take longer than half an hour.",
      "uk": "Зазвичай воно триває не довше пів години.",
      "ru": "Обычно оно длится не дольше получаса."
    },
    "gram": ""
  },
  {
    "id": "dlg_025",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Wird der Müll hier eigentlich richtig getrennt?",
      "en": "Is the rubbish actually sorted properly here?",
      "uk": "Тут взагалі правильно сортують сміття?",
      "ru": "Здесь вообще правильно сортируют мусор?"
    },
    "a": {
      "de": "Ja, der Abfall <g>wird</g> in drei verschiedene Tonnen <g>sortiert</g>.",
      "en": "Yes, the waste <g>is</g> <g>sorted</g> into three different bins.",
      "uk": "Так, сміття сортують на три різні контейнери.",
      "ru": "Да, мусор сортируют на три разных контейнера."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "dlg_026",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Habt ihr in diesem Jahr schon Energie gespart?",
      "en": "Have you already saved energy this year?",
      "uk": "Ви вже цього року економили енергію?",
      "ru": "Вы уже в этом году экономили энергию?"
    },
    "a": {
      "de": "Ja, wir <g>haben</g> unsere alten Lampen durch LED-Lampen <g>ersetzt</g>.",
      "en": "Yes, we <g>have</g> <g>replaced</g> our old lamps with LED lamps.",
      "uk": "Так, ми замінили наші старі лампи на LED-лампи.",
      "ru": "Да, мы заменили наши старые лампы на LED-лампы."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "dlg_027",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Warum kauft ihr nur noch saisonales Gemüse?",
      "en": "Why do you only buy seasonal vegetables now?",
      "uk": "Чому ви тепер купуєте лише сезонні овочі?",
      "ru": "Почему вы теперь покупаете только сезонные овощи?"
    },
    "a": {
      "de": "Weil das besser für die Umwelt und meistens auch billiger ist.",
      "en": "Because it's better for the environment and usually cheaper too.",
      "uk": "Тому що це краще для довкілля і зазвичай ще й дешевше.",
      "ru": "Потому что это лучше для окружающей среды и обычно ещё и дешевле."
    },
    "gram": ""
  },
  {
    "id": "dlg_028",
    "cat": "Alles für die Umwelt",
    "q": {
      "de": "Was können wir noch für das Klima tun?",
      "en": "What else can we do for the climate?",
      "uk": "Що ще ми можемо зробити для клімату?",
      "ru": "Что ещё мы можем сделать для климата?"
    },
    "a": {
      "de": "Wir könnten öfter das Fahrrad statt das Auto benutzen.",
      "en": "We could use the bicycle instead of the car more often.",
      "uk": "Ми могли б частіше користуватися велосипедом замість автомобіля.",
      "ru": "Мы могли бы чаще пользоваться велосипедом вместо автомобиля."
    },
    "gram": ""
  },
  {
    "id": "dlg_029",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "<g>Worauf</g> freust du dich beim Festival am meisten?",
      "en": "What are you looking forward <g>to</g> most at the festival?",
      "uk": "Чого ти найбільше очікуєш від фестивалю?",
      "ru": "Чего ты больше всего ждёшь от фестиваля?"
    },
    "a": {
      "de": "<g>Auf</g> die Konzerte am Abend, die Bands sind wirklich toll.",
      "en": "The evening concerts — the bands are really great.",
      "uk": "Вечірніх концертів, гурти справді чудові.",
      "ru": "Вечерних концертов, группы действительно классные."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "dlg_030",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "<g>Wovon</g> handelt eigentlich die neue Ausstellung im Museum?",
      "en": "What is the new exhibition at the museum actually about?",
      "uk": "Про що взагалі нова виставка в музеї?",
      "ru": "О чём вообще новая выставка в музее?"
    },
    "a": {
      "de": "Von moderner Kunst aus den letzten zehn Jahren.",
      "en": "About modern art from the last ten years.",
      "uk": "Про сучасне мистецтво останніх десяти років.",
      "ru": "О современном искусстве последних десяти лет."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "dlg_031",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "Wie war <g>denn</g> die Führung durch die Bibliothek?",
      "en": "<g>So</g>, how was the library tour?",
      "uk": "<g>А</g> яка була екскурсія по бібліотеці?",
      "ru": "<g>А</g> как прошла экскурсия по библиотеке?"
    },
    "a": {
      "de": "Richtig interessant, wir haben viel über alte Bücher gelernt.",
      "en": "Really interesting, we learned a lot about old books.",
      "uk": "Дуже цікаво, ми дізналися багато про старі книжки.",
      "ru": "Очень интересно, мы узнали много о старых книгах."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "dlg_032",
    "cat": "Lust auf Kultur?",
    "q": {
      "de": "Kannst du mir ein gutes Straßenfestival empfehlen?",
      "en": "Can you recommend a good street festival to me?",
      "uk": "Можеш порекомендувати мені хороший вуличний фестиваль?",
      "ru": "Можешь порекомендовать мне хороший уличный фестиваль?"
    },
    "a": {
      "de": "Klar, das Sommerfest in der Altstadt ist jedes Jahr super.",
      "en": "Sure, the summer festival in the old town is great every year.",
      "uk": "Звісно, літнє свято у старому місті щороку чудове.",
      "ru": "Конечно, летний праздник в старом городе каждый год отличный."
    },
    "gram": ""
  },
  {
    "id": "dlg_033",
    "cat": "Eine neue Arbeit!",
    "q": {
      "de": "Ich rufe wegen der Stellenanzeige an. <g>Könnten</g> Sie mir sagen, ob die Stelle noch frei ist?",
      "en": "I'm calling about the job advertisement. <g>Could you</g> tell me if the position is still available?",
      "uk": "Я телефоную щодо оголошення про вакансію. <g>Могли б Ви</g> сказати, чи посада ще вільна?",
      "ru": "Я звоню по поводу объявления о вакансии. <g>Могли бы Вы</g> сказать, свободна ли ещё должность?"
    },
    "a": {
      "de": "Ja, die Stelle ist noch frei. Möchten Sie sich bewerben?",
      "en": "Yes, the position is still available. Would you like to apply?",
      "uk": "Так, посада ще вільна. Бажаєте подати заявку?",
      "ru": "Да, должность ещё свободна. Хотите подать заявку?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "dlg_034",
    "cat": "Eine neue Arbeit!",
    "q": {
      "de": "<g>Ich hätte gern</g> mehr Informationen über die Arbeitszeiten.",
      "en": "<g>I would like</g> more information about the working hours.",
      "uk": "<g>Я хотів би</g> отримати більше інформації про робочий графік.",
      "ru": "<g>Я хотел бы</g> получить больше информации о рабочем графике."
    },
    "a": {
      "de": "Kein Problem, wir arbeiten hier meistens von acht bis siebzehn Uhr.",
      "en": "No problem, here we usually work from eight to five.",
      "uk": "Без проблем, тут зазвичай працюють з восьмої до сімнадцятої.",
      "ru": "Без проблем, здесь обычно работают с восьми до семнадцати."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "dlg_035",
    "cat": "Eine neue Arbeit!",
    "q": {
      "de": "Was würdest du tun, <g>wenn</g> du den Job nicht <g>bekämst</g>?",
      "en": "What would you do <g>if</g> you <g>didn't get</g> the job?",
      "uk": "Що б ти зробив, <g>якби</g> ти не <g>отримав</g> цю роботу?",
      "ru": "Что бы ты сделал, <g>если бы</g> ты не <g>получил</g> эту работу?"
    },
    "a": {
      "de": "Dann würde ich mich einfach bei einer anderen Firma bewerben.",
      "en": "Then I would simply apply to another company.",
      "uk": "Тоді я просто подав би заявку в іншу фірму.",
      "ru": "Тогда я бы просто подал заявку в другую фирму."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "dlg_036",
    "cat": "Eine neue Arbeit!",
    "q": {
      "de": "Wie war dein Vorstellungsgespräch heute?",
      "en": "How was your job interview today?",
      "uk": "Як пройшла твоя співбесіда сьогодні?",
      "ru": "Как прошло твоё собеседование сегодня?"
    },
    "a": {
      "de": "Ganz gut, ich glaube, sie haben sich für mich entschieden.",
      "en": "Pretty good, I think they've decided to hire me.",
      "uk": "Досить добре, здається, вони обрали мене.",
      "ru": "Довольно хорошо, кажется, они выбрали меня."
    },
    "gram": ""
  },
  {
    "id": "dlg_037",
    "cat": "Sport und Bewegung",
    "q": {
      "de": "Sollen wir laufen gehen, <g>bevor</g> es zu heiß wird?",
      "en": "Should we go running <g>before</g> it gets too hot?",
      "uk": "Може, підемо бігати, <g>перш ніж</g> стане надто спекотно?",
      "ru": "Может, пойдём бегать, <g>прежде чем</g> станет слишком жарко?"
    },
    "a": {
      "de": "Gute Idee, dann starten wir schon um sieben Uhr.",
      "en": "Good idea, then let's start at seven o'clock.",
      "uk": "Хороша ідея, тоді почнемо вже о сьомій.",
      "ru": "Хорошая идея, тогда начнём уже в семь."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "dlg_038",
    "cat": "Sport und Bewegung",
    "q": {
      "de": "Wer hat den <g>schnellsten</g> Lauf beim Wettkampf gemacht?",
      "en": "Who had the <g>fastest</g> run in the competition?",
      "uk": "У кого був <g>найшвидший</g> забіг на змаганні?",
      "ru": "У кого был <g>самый быстрый</g> забег на соревновании?"
    },
    "a": {
      "de": "Das war Lukas, er ist wirklich in Top-Form.",
      "en": "That was Lukas, he's really in top form.",
      "uk": "Це був Лукас, він справді у чудовій формі.",
      "ru": "Это был Лукас, он действительно в отличной форме."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "dlg_039",
    "cat": "Sport und Bewegung",
    "q": {
      "de": "Machst du beim Spendenlauf am Samstag mit?",
      "en": "Are you taking part in the charity run on Saturday?",
      "uk": "Ти береш участь у благодійному забігу в суботу?",
      "ru": "Ты участвуешь в благотворительном забеге в субботу?"
    },
    "a": {
      "de": "Klar, ich habe schon meine Startnummer abgeholt.",
      "en": "Sure, I've already picked up my start number.",
      "uk": "Звісно, я вже забрав свій стартовий номер.",
      "ru": "Конечно, я уже забрал свой стартовый номер."
    },
    "gram": ""
  },
  {
    "id": "dlg_040",
    "cat": "Sport und Bewegung",
    "q": {
      "de": "Warum trainierst du eigentlich jeden Tag?",
      "en": "Why do you actually train every day?",
      "uk": "Чому ти взагалі тренуєшся щодня?",
      "ru": "Почему ты вообще тренируешься каждый день?"
    },
    "a": {
      "de": "Weil ich mich danach einfach viel besser fühle.",
      "en": "Because I simply feel much better afterwards.",
      "uk": "Тому що після цього я почуваюся набагато краще.",
      "ru": "Потому что после этого я чувствую себя намного лучше."
    },
    "gram": ""
  },
  {
    "id": "dlg_041",
    "cat": "Mütter, Väter, Kinder",
    "q": {
      "de": "Wer kocht heute, <g>während</g> ich das Baby bade?",
      "en": "Who's cooking today <g>while</g> I bathe the baby?",
      "uk": "Хто сьогодні готує, <g>поки</g> я купаю дитину?",
      "ru": "Кто сегодня готовит, <g>пока</g> я купаю ребёнка?"
    },
    "a": {
      "de": "Ich kann das übernehmen, kein Problem.",
      "en": "I can take care of that, no problem.",
      "uk": "Я можу цим зайнятися, без проблем.",
      "ru": "Я могу этим заняться, без проблем."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "dlg_042",
    "cat": "Mütter, Väter, Kinder",
    "q": {
      "de": "Muss ich den Kita-Platz schon jetzt beantragen?",
      "en": "Do I have to apply for the daycare place already now?",
      "uk": "Чи потрібно мені вже зараз подавати заявку на місце в садку?",
      "ru": "Нужно ли мне уже сейчас подавать заявку на место в детском саду?"
    },
    "a": {
      "de": "Du <g>brauchst</g> das <g>nicht</g> sofort <g>zu</g> machen, aber warte nicht zu lange.",
      "en": "You <g>don't need to</g> do that right away, but don't wait too long.",
      "uk": "Тобі <g>не потрібно</g> робити це відразу, але не чекай надто довго.",
      "ru": "Тебе <g>не нужно</g> делать это сразу, но не жди слишком долго."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "dlg_043",
    "cat": "Mütter, Väter, Kinder",
    "q": {
      "de": "Wie geht es euch als frischgebackene Eltern?",
      "en": "How are you doing as new parents?",
      "uk": "Як ся маєте як новоспечені батьки?",
      "ru": "Как вы поживаете как новоиспечённые родители?"
    },
    "a": {
      "de": "Anstrengend, aber wir sind wirklich glücklich.",
      "en": "Exhausting, but we're really happy.",
      "uk": "Втомливо, але ми справді щасливі.",
      "ru": "Утомительно, но мы действительно счастливы."
    },
    "gram": ""
  },
  {
    "id": "dlg_044",
    "cat": "Mütter, Väter, Kinder",
    "q": {
      "de": "Wer holt heute die Kinder von der Schule ab?",
      "en": "Who's picking up the kids from school today?",
      "uk": "Хто сьогодні забирає дітей зі школи?",
      "ru": "Кто сегодня забирает детей из школы?"
    },
    "a": {
      "de": "<g>Jeder</g> von uns kann das machen, das ist bei uns nicht festgelegt.",
      "en": "<g>Any of us</g> can do it, we don't have a fixed rule for that.",
      "uk": "<g>Будь-хто</g> з нас може це зробити, у нас це не закріплено.",
      "ru": "<g>Любой</g> из нас может это сделать, у нас это не закреплено."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "dlg_045",
    "cat": "Ankommen im Beruf",
    "q": {
      "de": "<g>Nachdem</g> ich die Prüfung bestanden hatte, habe ich sofort eine Stelle gefunden.",
      "en": "<g>After</g> I had passed the exam, I found a job right away.",
      "uk": "<g>Після того як</g> я склав іспит, я одразу знайшов роботу.",
      "ru": "<g>После того как</g> я сдал экзамен, я сразу нашёл работу."
    },
    "a": {
      "de": "Das freut mich total für dich!",
      "en": "I'm really happy for you!",
      "uk": "Я дуже радий за тебе!",
      "ru": "Я очень рад за тебя!"
    },
    "gram": "nebensatz_mit_nachdem"
  },
  {
    "id": "dlg_046",
    "cat": "Ankommen im Beruf",
    "q": {
      "de": "Hattest du vor dem Interview schon mal in Deutschland gearbeitet?",
      "en": "Had you worked in Germany before the interview?",
      "uk": "Ти вже працював у Німеччині до співбесіди?",
      "ru": "Ты уже работал в Германии до собеседования?"
    },
    "a": {
      "de": "Nein, aber ich <g>hatte</g> vorher schon viel Erfahrung <g>gesammelt</g> in meinem Heimatland.",
      "en": "No, but I <g>had already gained</g> a lot of experience in my home country before.",
      "uk": "Ні, але я вже здобув багато досвіду на батьківщині.",
      "ru": "Нет, но я уже приобрёл много опыта на родине."
    },
    "gram": "plusquamperfekt"
  },
  {
    "id": "dlg_047",
    "cat": "Ankommen im Beruf",
    "q": {
      "de": "Wie läuft die Anerkennung deines Diploms?",
      "en": "How's the recognition of your diploma going?",
      "uk": "Як просувається визнання твого диплома?",
      "ru": "Как продвигается признание твоего диплома?"
    },
    "a": {
      "de": "Ganz gut, ich warte nur noch auf die letzten Dokumente.",
      "en": "Pretty well, I'm just waiting for the last documents now.",
      "uk": "Досить добре, я просто чекаю на останні документи.",
      "ru": "Довольно хорошо, я просто жду последние документы."
    },
    "gram": ""
  },
  {
    "id": "dlg_048",
    "cat": "Ankommen im Beruf",
    "q": {
      "de": "Wie findest du deine neuen Kollegen?",
      "en": "What do you think of your new colleagues?",
      "uk": "Як тобі твої нові колеги?",
      "ru": "Как тебе твои новые коллеги?"
    },
    "a": {
      "de": "Sehr nett, sie haben mir am ersten Tag total geholfen.",
      "en": "Very nice, they really helped me on the first day.",
      "uk": "Дуже приємні, вони дуже допомогли мені першого дня.",
      "ru": "Очень приятные, они очень помогли мне в первый день."
    },
    "gram": ""
  },
  {
    "id": "dlg_049",
    "cat": "Freiwillig",
    "q": {
      "de": "Das Auto <g>muss</g> von einem Ehrenamtlichen <g>repariert werden</g>, bevor wir losfahren können.",
      "en": "The car <g>has to be repaired</g> by a volunteer before we can leave.",
      "uk": "Автомобіль <g>має бути відремонтований</g> волонтером, перш ніж ми зможемо виїхати.",
      "ru": "Автомобиль <g>должен быть отремонтирован</g> волонтёром, прежде чем мы сможем выехать."
    },
    "a": {
      "de": "Kein Problem, Herr Meyer kümmert sich schon darum.",
      "en": "No problem, Mr Meyer is already taking care of it.",
      "uk": "Без проблем, пан Маєр вже про це подбає.",
      "ru": "Без проблем, господин Майер уже об этом позаботится."
    },
    "gram": "passiv_mit_modalverben"
  },
  {
    "id": "dlg_050",
    "cat": "Freiwillig",
    "q": {
      "de": "<g>Wegen des</g> schlechten Wetters findet der Ausflug morgen nicht statt.",
      "en": "<g>Because of the</g> bad weather, the trip won't take place tomorrow.",
      "uk": "<g>Через</g> погану погоду поїздка завтра не відбудеться.",
      "ru": "<g>Из-за</g> плохой погоды поездка завтра не состоится."
    },
    "a": {
      "de": "Schade, dann verschieben wir ihn einfach auf nächste Woche.",
      "en": "Too bad, then let's just postpone it to next week.",
      "uk": "Шкода, тоді просто перенесемо на наступний тиждень.",
      "ru": "Жаль, тогда просто перенесём на следующую неделю."
    },
    "gram": "praepositionen_mit_genitiv"
  },
  {
    "id": "dlg_051",
    "cat": "Freiwillig",
    "q": {
      "de": "Bist du auch beim Ehrenamt in der Nachbarschaftshilfe dabei?",
      "en": "Are you also involved in volunteering for the neighbourhood help?",
      "uk": "Ти теж береш участь у волонтерстві в сусідській взаємодопомозі?",
      "ru": "Ты тоже участвуешь в волонтёрстве в соседской взаимопомощи?"
    },
    "a": {
      "de": "Ja, ich helfe dort seit einem Jahr regelmäßig.",
      "en": "Yes, I've been helping there regularly for a year.",
      "uk": "Так, я регулярно допомагаю там уже рік.",
      "ru": "Да, я регулярно помогаю там уже год."
    },
    "gram": ""
  },
  {
    "id": "dlg_052",
    "cat": "Freiwillig",
    "q": {
      "de": "Was hat dich motiviert, dich freiwillig zu engagieren?",
      "en": "What motivated you to get involved as a volunteer?",
      "uk": "Що мотивувало тебе стати волонтером?",
      "ru": "Что мотивировало тебя стать волонтёром?"
    },
    "a": {
      "de": "Ich wollte einfach etwas für die Gemeinschaft zurückgeben.",
      "en": "I just wanted to give something back to the community.",
      "uk": "Я просто хотів віддячити спільноті.",
      "ru": "Я просто хотел отблагодарить сообщество."
    },
    "gram": ""
  },
  {
    "id": "dlg_053",
    "cat": "Ein neues Zuhause",
    "q": {
      "de": "Ist das die Wohnung, <g>für die</g> du dich beworben hast?",
      "en": "Is that the flat <g>for which</g> you applied?",
      "uk": "Це та квартира, <g>на яку</g> ти подавав заявку?",
      "ru": "Это та квартира, <g>на которую</g> ты подавал заявку?"
    },
    "a": {
      "de": "Genau die, ich hoffe wirklich, dass ich sie bekomme.",
      "en": "Exactly that one, I really hope I get it.",
      "uk": "Саме вона, я справді сподіваюся, що отримаю її.",
      "ru": "Именно она, я действительно надеюсь, что получу её."
    },
    "gram": "relativsatz_mit_praeposition"
  },
  {
    "id": "dlg_054",
    "cat": "Ein neues Zuhause",
    "q": {
      "de": "Kennst du einen Ort, <g>wo</g> man günstig wohnen kann?",
      "en": "Do you know a place <g>where</g> you can live cheaply?",
      "uk": "Ти знаєш місце, <g>де</g> можна дешево жити?",
      "ru": "Ты знаешь место, <g>где</g> можно дёшево жить?"
    },
    "a": {
      "de": "Ja, am Stadtrand gibt es noch einige bezahlbare Wohnungen.",
      "en": "Yes, there are still some affordable flats on the outskirts.",
      "uk": "Так, на околиці є ще кілька доступних за ціною квартир.",
      "ru": "Да, на окраине есть ещё несколько доступных по цене квартир."
    },
    "gram": "relativsatz_wo_was"
  },
  {
    "id": "dlg_055",
    "cat": "Ein neues Zuhause",
    "q": {
      "de": "Wie hoch sind die Nebenkosten in eurem neuen Haus?",
      "en": "How high are the utility costs in your new house?",
      "uk": "Які комунальні витрати у вашому новому будинку?",
      "ru": "Какие коммунальные расходы в вашем новом доме?"
    },
    "a": {
      "de": "Zum Glück nicht so hoch, weil das Haus gut isoliert ist.",
      "en": "Luckily not too high, because the house is well insulated.",
      "uk": "На щастя, не дуже високі, бо будинок добре ізольований.",
      "ru": "К счастью, не очень высокие, потому что дом хорошо изолирован."
    },
    "gram": ""
  },
  {
    "id": "dlg_056",
    "cat": "Ein neues Zuhause",
    "q": {
      "de": "Wann könnt ihr in die neue Wohnung einziehen?",
      "en": "When can you move into the new flat?",
      "uk": "Коли ви зможете переїхати в нову квартиру?",
      "ru": "Когда вы сможете переехать в новую квартиру?"
    },
    "a": {
      "de": "Schon nächste Woche, wir freuen uns riesig darauf.",
      "en": "Already next week, we're really looking forward to it.",
      "uk": "Вже наступного тижня, ми дуже цього чекаємо.",
      "ru": "Уже на следующей неделе, мы очень этого ждём."
    },
    "gram": ""
  },
  {
    "id": "dlg_057",
    "cat": "Hier bleibe ich.",
    "q": {
      "de": "Ist das der <g>ausgefüllte</g> Antrag für die Einbürgerung?",
      "en": "Is that the <g>completed</g> application for naturalisation?",
      "uk": "Це <g>заповнена</g> заявка на натуралізацію?",
      "ru": "Это <g>заполненное</g> заявление на натурализацию?"
    },
    "a": {
      "de": "Genau, ich habe heute Morgen alles fertig gemacht.",
      "en": "Exactly, I finished everything this morning.",
      "uk": "Саме так, я закінчив усе сьогодні вранці.",
      "ru": "Именно так, я закончил всё сегодня утром."
    },
    "gram": "partizip2_als_adjektiv"
  },
  {
    "id": "dlg_058",
    "cat": "Hier bleibe ich.",
    "q": {
      "de": "Brauche ich <g>entweder</g> meinen Pass <g>oder</g> meinen Ausweis für den Termin?",
      "en": "Do I need <g>either</g> my passport <g>or</g> my ID card for the appointment?",
      "uk": "Мені потрібен <g>або</g> паспорт, <g>або</g> посвідчення особи для запису?",
      "ru": "Мне нужен <g>либо</g> паспорт, <g>либо</g> удостоверение личности для записи?"
    },
    "a": {
      "de": "Am besten bringst du gleich beide Dokumente mit.",
      "en": "It's best if you bring both documents with you.",
      "uk": "Найкраще одразу візьми обидва документи.",
      "ru": "Лучше всего сразу возьми оба документа."
    },
    "gram": "entweder_oder"
  },
  {
    "id": "dlg_059",
    "cat": "Hier bleibe ich.",
    "q": {
      "de": "Wie lange dauert der Integrationskurs insgesamt?",
      "en": "How long does the integration course take altogether?",
      "uk": "Скільки загалом триває інтеграційний курс?",
      "ru": "Сколько всего длится интеграционный курс?"
    },
    "a": {
      "de": "Bei mir hat er ungefähr acht Monate gedauert.",
      "en": "For me it took about eight months.",
      "uk": "У мене він тривав приблизно вісім місяців.",
      "ru": "У меня он длился примерно восемь месяцев."
    },
    "gram": ""
  },
  {
    "id": "dlg_060",
    "cat": "Hier bleibe ich.",
    "q": {
      "de": "Fühlst du dich mittlerweile zu Hause in Deutschland?",
      "en": "Do you feel at home in Germany by now?",
      "uk": "Ти вже почуваєшся як удома в Німеччині?",
      "ru": "Ты уже чувствуешь себя как дома в Германии?"
    },
    "a": {
      "de": "Ja, ich glaube, ich bin wirklich angekommen.",
      "en": "Yes, I think I've really arrived.",
      "uk": "Так, думаю, я справді тут прижився.",
      "ru": "Да, думаю, я действительно здесь освоился."
    },
    "gram": ""
  },
  {
    "id": "dlg_061",
    "cat": "Das haben wir uns verdient!",
    "q": {
      "de": "Fahren wir dieses Jahr weg, <g>oder</g> bleiben wir lieber zu Hause?",
      "en": "Are we going away this year, <g>or</g> would we rather stay home?",
      "uk": "Ми цього року кудись поїдемо, <g>чи</g> краще залишимося вдома?",
      "ru": "Мы в этом году куда-то поедем, <g>или</g> лучше останемся дома?"
    },
    "a": {
      "de": "Ich würde am liebsten mal wieder verreisen.",
      "en": "I'd most like to travel somewhere again.",
      "uk": "Я б найбільше хотів знову кудись поїхати.",
      "ru": "Я бы больше всего хотел снова куда-то поехать."
    },
    "gram": "satzverbindungen_ueberblick"
  },
  {
    "id": "dlg_062",
    "cat": "Das haben wir uns verdient!",
    "q": {
      "de": "Wann kommst du von deiner Reise <g>zurück</g>?",
      "en": "When are you coming <g>back</g> from your trip?",
      "uk": "Коли ти <g>повертаєшся</g> з подорожі?",
      "ru": "Когда ты <g>возвращаешься</g> из поездки?"
    },
    "a": {
      "de": "Nächsten Sonntag, ich freue mich schon aufs Auspacken.",
      "en": "Next Sunday, I'm already looking forward to unpacking.",
      "uk": "Наступної неділі, я вже чекаю на розпакування речей.",
      "ru": "В следующее воскресенье, я уже жду распаковки вещей."
    },
    "gram": "trennbare_verben_praefixe_wdh_b1"
  },
  {
    "id": "dlg_063",
    "cat": "Das haben wir uns verdient!",
    "q": {
      "de": "Wart ihr schon mal in der Jugendherberge in der Altstadt?",
      "en": "Have you ever been to the youth hostel in the old town?",
      "uk": "Ви вже колись були в молодіжному гуртожитку у старому місті?",
      "ru": "Вы уже когда-нибудь были в молодёжном общежитии в старом городе?"
    },
    "a": {
      "de": "Ja, letztes Jahr, das war wirklich günstig und gemütlich.",
      "en": "Yes, last year, it was really cheap and cosy.",
      "uk": "Так, минулого року, там було справді недорого й затишно.",
      "ru": "Да, в прошлом году, там было действительно недорого и уютно."
    },
    "gram": ""
  },
  {
    "id": "dlg_064",
    "cat": "Das haben wir uns verdient!",
    "q": {
      "de": "Habt ihr von dem Einbruch in der Nachbarschaft gehört?",
      "en": "Have you heard about the burglary in the neighbourhood?",
      "uk": "Ви чули про пограбування в сусідському районі?",
      "ru": "Вы слышали об ограблении в соседнем районе?"
    },
    "a": {
      "de": "Ja, zum Glück konnte die Polizei den Einbrecher schnell festnehmen.",
      "en": "Yes, luckily the police were able to arrest the burglar quickly.",
      "uk": "Так, на щастя, поліція змогла швидко затримати грабіжника.",
      "ru": "Да, к счастью, полиция смогла быстро задержать грабителя."
    },
    "gram": ""
  }
];

var QUIZ = [];

// ── КАТЕГОРІЇ SPRACHBAUSTEINE ───────────────────────────────────

var SB_CATS = [
  {
    "id": "hoefliche_bitten_konjunktiv_b1",
    "de": "Höfliche Bitten (Konjunktiv II): Könnten Sie …?",
    "en": "Polite requests (Subjunctive II): Could you …?",
    "uk": "Ввічливі прохання (Кон'юнктив II): Могли б Ви …?",
    "ru": "Вежливые просьбы (Конъюнктив II): Могли бы Вы …?",
    "e": "🙏"
  },
  {
    "id": "infinitiv_mit_zu",
    "de": "Infinitiv mit zu",
    "en": "Infinitive with zu",
    "uk": "Інфінітив з zu",
    "ru": "Инфинитив с zu",
    "e": "➡️"
  },
  {
    "id": "sowohl_als_auch_weder_noch",
    "de": "sowohl … als auch / weder … noch",
    "en": "both … and / neither … nor",
    "uk": "як … так і / ні … ні",
    "ru": "как … так и / ни … ни",
    "e": "⚖️"
  },
  {
    "id": "modalverben_wdh_b1",
    "de": "Wiederholung: Modalverben (Regeln formulieren)",
    "en": "Review: modal verbs (stating rules)",
    "uk": "Повторення: модальні дієслова (формулювання правил)",
    "ru": "Повторение: модальные глаголы (формулирование правил)",
    "e": "🔑"
  },
  {
    "id": "wechselpraepositionen_wdh_b1",
    "de": "Wiederholung: Wechselpräpositionen",
    "en": "Review: two-way prepositions",
    "uk": "Повторення: прийменники подвійного керування",
    "ru": "Повторение: предлоги двойного управления",
    "e": "📍"
  },
  {
    "id": "reflexivpronomen_akkusativ_wdh_b1",
    "de": "Wiederholung: Reflexivpronomen im Akkusativ",
    "en": "Review: reflexive pronouns (accusative)",
    "uk": "Повторення: зворотні займенники (знахідний)",
    "ru": "Повторение: возвратные местоимения (винительный)",
    "e": "🪞"
  },
  {
    "id": "relativsatz_nominativ_sondern",
    "de": "Relativpronomen im Nominativ; sondern",
    "en": "Relative pronoun (nominative); sondern",
    "uk": "Займенник у називному відмінку; sondern",
    "ru": "Местоимение в именительном падеже; sondern",
    "e": "🔗"
  },
  {
    "id": "relativsatz_akkusativ_b1",
    "de": "Relativpronomen im Akkusativ",
    "en": "Relative pronoun (accusative)",
    "uk": "Займенник у знахідному відмінку",
    "ru": "Местоимение в винительном падеже",
    "e": "🔗"
  },
  {
    "id": "modalverben_vermutung",
    "de": "Modalverben für Vermutungen (dürfte, müsste, könnte)",
    "en": "Modal verbs expressing assumption",
    "uk": "Модальні дієслова для припущень",
    "ru": "Модальные глаголы для предположений",
    "e": "🤔"
  },
  {
    "id": "genitiv",
    "de": "Genitiv",
    "en": "Genitive case",
    "uk": "Родовий відмінок",
    "ru": "Родительный падеж",
    "e": "📑"
  },
  {
    "id": "nebensatz_mit_obwohl",
    "de": "Nebensatz mit obwohl",
    "en": "Subordinate clause with obwohl (although)",
    "uk": "Підрядне речення з obwohl (хоча)",
    "ru": "Придаточное предложение с obwohl (хотя)",
    "e": "🔄"
  },
  {
    "id": "konnektoren_wdh_b1",
    "de": "Wiederholung: Konnektoren",
    "en": "Review: connectors",
    "uk": "Повторення: конектори",
    "ru": "Повторение: коннекторы",
    "e": "🧩"
  },
  {
    "id": "praeteritum_wdh_b1",
    "de": "Wiederholung: Präteritum",
    "en": "Review: simple past",
    "uk": "Повторення: претерит",
    "ru": "Повторение: претерит",
    "e": "⏳"
  },
  {
    "id": "deshalb_deswegen_trotzdem",
    "de": "deshalb / deswegen / trotzdem",
    "en": "deshalb / deswegen / trotzdem (therefore / nevertheless)",
    "uk": "deshalb / deswegen / trotzdem (тому / незважаючи на це)",
    "ru": "deshalb / deswegen / trotzdem (поэтому / несмотря на это)",
    "e": "➡️"
  },
  {
    "id": "genitiv_alternativen",
    "de": "Genitiv und Alternativen (von + Dativ)",
    "en": "Genitive and alternatives (von + dative)",
    "uk": "Родовий відмінок та альтернативи (von + давальний)",
    "ru": "Родительный падеж и альтернативы (von + дательный)",
    "e": "📑"
  },
  {
    "id": "nebensatz_seit_seitdem",
    "de": "Nebensatz mit seit / seitdem",
    "en": "Subordinate clause with seit/seitdem (since)",
    "uk": "Підрядне речення з seit/seitdem (відколи)",
    "ru": "Придаточное предложение с seit/seitdem (с тех пор как)",
    "e": "⏰"
  },
  {
    "id": "verben_praep_personen_sachen",
    "de": "Verben mit Präpositionen: Fragen nach Personen und Sachen",
    "en": "Verbs with prepositions: questions about people and things",
    "uk": "Дієслова з прийменниками: питання про осіб і речі",
    "ru": "Глаголы с предлогами: вопросы о людях и вещах",
    "e": "🔗"
  },
  {
    "id": "nebensatz_mit_bis",
    "de": "Nebensatz mit bis",
    "en": "Subordinate clause with bis (until)",
    "uk": "Підрядне речення з bis (доки)",
    "ru": "Придаточное предложение с bis (до тех пор как)",
    "e": "⏳"
  },
  {
    "id": "praepositionaladverbien_b1",
    "de": "Präpositionaladverbien (worüber, darüber …)",
    "en": "Prepositional adverbs (worüber, darüber …)",
    "uk": "Прийменникові прислівники (worüber, darüber …)",
    "ru": "Предложные наречия (worüber, darüber …)",
    "e": "🔗"
  },
  {
    "id": "futur_werden",
    "de": "Futur I: werden + Infinitiv",
    "en": "Future tense: werden + infinitive",
    "uk": "Майбутній час: werden + інфінітив",
    "ru": "Будущее время: werden + инфинитив",
    "e": "🔮"
  },
  {
    "id": "nicht_nur_sondern_auch",
    "de": "nicht nur …, sondern auch",
    "en": "not only … but also",
    "uk": "не тільки …, а й",
    "ru": "не только …, но и",
    "e": "➕"
  },
  {
    "id": "satz_mit_um_zu",
    "de": "Sätze mit um … zu",
    "en": "Clauses with um … zu (in order to)",
    "uk": "Речення з um … zu (щоб)",
    "ru": "Предложения с um … zu (чтобы)",
    "e": "🎯"
  },
  {
    "id": "nebensatz_mit_damit_wdh_b1",
    "de": "Wiederholung: Nebensatz mit damit",
    "en": "Review: subordinate clause with damit",
    "uk": "Повторення: речення з damit",
    "ru": "Повторение: предложение с damit",
    "e": "🎯"
  },
  {
    "id": "passiv_praesens_b1",
    "de": "Passiv Präsens",
    "en": "Passive voice (present)",
    "uk": "Пасив (теперішній час)",
    "ru": "Пассив (настоящее время)",
    "e": "🔧"
  },
  {
    "id": "perfekt_wdh_b1",
    "de": "Wiederholung: Perfekt",
    "en": "Review: present perfect",
    "uk": "Повторення: перфект",
    "ru": "Повторение: перфект",
    "e": "⏳"
  },
  {
    "id": "verben_mit_praep_wdh_b1",
    "de": "Wiederholung: Verben mit Präpositionen",
    "en": "Review: verbs with prepositions",
    "uk": "Повторення: дієслова з прийменниками",
    "ru": "Повторение: глаголы с предлогами",
    "e": "🔗"
  },
  {
    "id": "fragewoerter_wor_dar",
    "de": "Fragewörter mit wo(r)- und Präpositionaladverbien mit da(r)-",
    "en": "Question words with wo(r)- and prepositional adverbs with da(r)-",
    "uk": "Питальні слова з wo(r)- і прийменникові прислівники з da(r)-",
    "ru": "Вопросительные слова с wo(r)- и предложные наречия с da(r)-",
    "e": "❓"
  },
  {
    "id": "interesse_denn_eigentlich",
    "de": "Interesse zeigen mit denn und eigentlich",
    "en": "Showing interest with denn and eigentlich",
    "uk": "Виявлення інтересу за допомогою denn і eigentlich",
    "ru": "Проявление интереса с помощью denn и eigentlich",
    "e": "💬"
  }
];

// ── SPRACHBAUSTEINE (fill-in-the-blank) ─────────────────────────
// 3 картки на кожну з 28 категорій = 84 картки

var SPRACHBAUSTEINE = [
  {
    "id": "sb_001",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "{{BLANK}} Sie mir bitte helfen, den Karton zu tragen?",
      "en": "Could you please help me carry the box?",
      "uk": "Могли б Ви, будь ласка, допомогти мені нести коробку?",
      "ru": "Могли бы Вы, пожалуйста, помочь мне нести коробку?"
    },
    "answer": {
      "de": "Könnten",
      "en": "Could",
      "uk": "Могли б",
      "ru": "Могли бы"
    },
    "distractors": [
      "Können",
      "Müssen",
      "Sollen"
    ],
    "explanation": {
      "de": "<b>„Könnten“</b> (Konjunktiv II) klingt höflicher als das einfache „Können“.<br>„Müssen“ würde eine Pflicht ausdrücken, keine höfliche Bitte.",
      "en": "<b>„Könnten“</b> (subjunctive II) sounds more polite than the simple „Können“.<br>„Müssen“ would express an obligation, not a polite request.",
      "uk": "<b>„Könnten“</b> (конʼюнктив II) звучить ввічливіше за просте „Können“.<br>„Müssen“ виражало б обовʼязок, а не ввічливе прохання.",
      "ru": "<b>„Könnten“</b> (конъюнктив II) звучит вежливее, чем простое „Können“.<br>„Müssen“ выражало бы обязанность, а не вежливую просьбу."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_002",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "{{BLANK}} Sie so freundlich und reichen mir das Salz?",
      "en": "Would you be so kind as to pass me the salt?",
      "uk": "Чи не були б Ви такі люб’язні і подали мені сіль?",
      "ru": "Не были бы Вы так любезны и передали мне соль?"
    },
    "answer": {
      "de": "Wären",
      "en": "Would",
      "uk": "Чи не були б",
      "ru": "Не были бы"
    },
    "distractors": [
      "Sind",
      "Waren",
      "Werden"
    ],
    "explanation": {
      "de": "Die feste, sehr höfliche Wendung lautet <b>„Wären Sie so freundlich …?“</b> (Konjunktiv II von „sein“).<br>„Sind“ wäre die einfache Gegenwartsform, weniger höflich.",
      "en": "The fixed, very polite phrase is <b>„Wären Sie so freundlich …?“</b> (subjunctive II of „sein“).<br>„Sind“ would be the simple present tense, less polite.",
      "uk": "Стала, дуже ввічлива фраза: <b>„Wären Sie so freundlich …?“</b> (конʼюнктив II від „sein“).<br>„Sind“ було б простою теперішньою формою, менш ввічливою.",
      "ru": "Устойчивая, очень вежливая фраза: <b>„Wären Sie so freundlich …?“</b> (конъюнктив II от „sein“).<br>„Sind“ было бы простой формой настоящего времени, менее вежливой."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_003",
    "cat": "hoefliche_bitten_konjunktiv_b1",
    "sentence": {
      "de": "Ich hätte eine Bitte, {{BLANK}} Sie kurz Zeit haben.",
      "en": "I would have a request, if you have a moment.",
      "uk": "У мене є прохання, якщо у Вас є хвилинка.",
      "ru": "У меня есть просьба, если у Вас есть минутка."
    },
    "answer": {
      "de": "wenn",
      "en": "if",
      "uk": "якщо",
      "ru": "если"
    },
    "distractors": [
      "dass",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„wenn“</b> leitet hier eine höfliche, indirekte Bedingung ein.<br>„ob“ würde eine Unsicherheit ausdrücken, keine Bedingung.",
      "en": "<b>„wenn“</b> here introduces a polite, indirect condition.<br>„ob“ would express uncertainty, not a condition.",
      "uk": "<b>„wenn“</b> тут вводить ввічливу, непряму умову.<br>„ob“ виражало б невпевненість, а не умову.",
      "ru": "<b>„wenn“</b> здесь вводит вежливое, косвенное условие.<br>„ob“ выражало бы неуверенность, а не условие."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "sb_004",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Vergiss nicht, die Hausordnung {{BLANK}}.",
      "en": "Don't forget to read the house rules.",
      "uk": "Не забудь прочитати правила будинку.",
      "ru": "Не забудь прочитать правила дома."
    },
    "answer": {
      "de": "zu lesen",
      "en": "to read",
      "uk": "прочитати",
      "ru": "прочитать"
    },
    "distractors": [
      "lesen",
      "gelesen",
      "liest"
    ],
    "explanation": {
      "de": "Nach <b>„vergessen, etwas zu tun“</b> braucht man den Infinitiv mit <b>„zu“</b>.<br>„lesen“ ohne „zu“ wäre grammatisch falsch in dieser Position.",
      "en": "After <b>„vergessen, etwas zu tun“</b> (to forget to do something) you need the infinitive with <b>„zu“</b>.<br>„lesen“ without „zu“ would be grammatically wrong in this position.",
      "uk": "Після <b>„vergessen, etwas zu tun“</b> потрібен інфінітив із <b>„zu“</b>.<br>„lesen“ без „zu“ було б граматично неправильним у цій позиції.",
      "ru": "После <b>„vergessen, etwas zu tun“</b> нужен инфинитив с <b>„zu“</b>.<br>„lesen“ без „zu“ было бы грамматически неверным в этой позиции."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_005",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Es macht keinen Spaß, jeden Tag {{BLANK}}.",
      "en": "It's no fun to go shopping every day.",
      "uk": "Немає задоволення щодня ходити за покупками.",
      "ru": "Нет удовольствия каждый день ходить за покупками."
    },
    "answer": {
      "de": "einzukaufen",
      "en": "to go shopping",
      "uk": "ходити за покупками",
      "ru": "ходить за покупками"
    },
    "distractors": [
      "kaufen",
      "gekauft",
      "kauft"
    ],
    "explanation": {
      "de": "Bei trennbaren Verben wie <b>„einkaufen“</b> steht „zu“ zwischen Vorsilbe und Verb: <b>„einzukaufen“</b>.<br>„kaufen“ allein wäre das falsche, nicht-trennbare Verb.",
      "en": "With separable verbs like <b>„einkaufen“</b>, „zu“ goes between the prefix and the verb: <b>„einzukaufen“</b>.<br>„kaufen“ alone would be the wrong, non-separable verb.",
      "uk": "У відокремлюваних дієсловах, як <b>„einkaufen“</b>, „zu“ стоїть між префіксом і дієсловом: <b>„einzukaufen“</b>.<br>„kaufen“ саме по собі було б неправильним, невідокремлюваним дієсловом.",
      "ru": "У отделяемых глаголов, как <b>„einkaufen“</b>, „zu“ стоит между приставкой и глаголом: <b>„einzukaufen“</b>.<br>„kaufen“ само по себе было бы неправильным, неотделяемым глаголом."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_006",
    "cat": "infinitiv_mit_zu",
    "sentence": {
      "de": "Sie hat keine Zeit, uns heute {{BLANK}}.",
      "en": "She has no time to visit us today.",
      "uk": "У неї немає часу відвідати нас сьогодні.",
      "ru": "У неё нет времени навестить нас сегодня."
    },
    "answer": {
      "de": "zu besuchen",
      "en": "to visit",
      "uk": "відвідати",
      "ru": "навестить"
    },
    "distractors": [
      "besuchen",
      "besucht",
      "besuchte"
    ],
    "explanation": {
      "de": "Nach <b>„Zeit haben, etwas zu tun“</b> steht der Infinitiv mit <b>„zu“</b> am Ende.<br>„besucht“ wäre eine konjugierte Form, die hier nicht passt.",
      "en": "After <b>„Zeit haben, etwas zu tun“</b> (to have time to do something), the infinitive with <b>„zu“</b> comes at the end.<br>„besucht“ would be a conjugated form, which doesn't fit here.",
      "uk": "Після <b>„Zeit haben, etwas zu tun“</b> в кінці стоїть інфінітив із <b>„zu“</b>.<br>„besucht“ було б дієвідмінюваною формою, яка тут не підходить.",
      "ru": "После <b>„Zeit haben, etwas zu tun“</b> в конце стоит инфинитив с <b>„zu“</b>.<br>„besucht“ было бы спрягаемой формой, которая здесь не подходит."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "sb_007",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Er spricht {{BLANK}} Deutsch als auch Englisch fließend.",
      "en": "He speaks both German and English fluently.",
      "uk": "Він вільно говорить як німецькою, так і англійською.",
      "ru": "Он свободно говорит как на немецком, так и на английском."
    },
    "answer": {
      "de": "sowohl",
      "en": "both",
      "uk": "як",
      "ru": "как"
    },
    "distractors": [
      "weder",
      "entweder",
      "nicht"
    ],
    "explanation": {
      "de": "<b>„sowohl … als auch“</b> verbindet zwei positive, gleichwertige Dinge.<br>„weder“ würde eine doppelte Verneinung einleiten, hier ist die Aussage aber positiv.",
      "en": "<b>„sowohl … als auch“</b> (both … and) connects two positive, equal things.<br>„weder“ would introduce a double negation, but the statement here is positive.",
      "uk": "<b>„sowohl … als auch“</b> (як … так і) поєднує дві позитивні, рівноцінні речі.<br>„weder“ вводило б подвійне заперечення, а тут твердження позитивне.",
      "ru": "<b>„sowohl … als auch“</b> (как … так и) соединяет две положительные, равноценные вещи.<br>„weder“ вводило бы двойное отрицание, но здесь утверждение положительное."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_008",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Ich habe {{BLANK}} Zeit noch Lust, heute auszugehen.",
      "en": "I have neither time nor desire to go out today.",
      "uk": "У мене немає ні часу, ні бажання сьогодні кудись іти.",
      "ru": "У меня нет ни времени, ни желания сегодня куда-то идти."
    },
    "answer": {
      "de": "weder",
      "en": "neither",
      "uk": "ні",
      "ru": "ни"
    },
    "distractors": [
      "sowohl",
      "nicht",
      "kein"
    ],
    "explanation": {
      "de": "<b>„weder … noch“</b> verneint zwei Dinge gleichzeitig.<br>„sowohl“ würde zwei positive Dinge verbinden, hier wird aber beides verneint.",
      "en": "<b>„weder … noch“</b> (neither … nor) negates two things at the same time.<br>„sowohl“ would connect two positive things, but here both are negated.",
      "uk": "<b>„weder … noch“</b> (ні … ні) заперечує дві речі одночасно.<br>„sowohl“ поєднувало б дві позитивні речі, а тут обидві заперечуються.",
      "ru": "<b>„weder … noch“</b> (ни … ни) отрицает две вещи одновременно.<br>„sowohl“ соединяло бы две положительные вещи, но здесь обе отрицаются."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_009",
    "cat": "sowohl_als_auch_weder_noch",
    "sentence": {
      "de": "Das Geschäft ist {{BLANK}} am Samstag noch am Sonntag geöffnet.",
      "en": "The shop is open neither on Saturday nor on Sunday.",
      "uk": "Магазин не відчинений ні в суботу, ні в неділю.",
      "ru": "Магазин не открыт ни в субботу, ни в воскресенье."
    },
    "answer": {
      "de": "weder",
      "en": "neither",
      "uk": "ні",
      "ru": "ни"
    },
    "distractors": [
      "sowohl",
      "oder",
      "auch"
    ],
    "explanation": {
      "de": "<b>„weder … noch“</b> passt, weil beide Tage ausgeschlossen werden (das Geschäft ist an keinem der beiden Tage offen).<br>„sowohl“ würde das Gegenteil ausdrücken.",
      "en": "<b>„weder … noch“</b> fits because both days are excluded (the shop is not open on either day).<br>„sowohl“ would express the opposite.",
      "uk": "<b>„weder … noch“</b> підходить, бо виключаються обидва дні (магазин не відчинений жодного з них).<br>„sowohl“ виражало б протилежне.",
      "ru": "<b>„weder … noch“</b> подходит, потому что оба дня исключаются (магазин не открыт ни в один из них).<br>„sowohl“ выражало бы противоположное."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "sb_010",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "In der Ruhezeit {{BLANK}} man keine laute Musik hören.",
      "en": "During the quiet hours, you may not listen to loud music.",
      "uk": "Під час тихого часу не можна слухати голосну музику.",
      "ru": "Во время тихого часа нельзя слушать громкую музыку."
    },
    "answer": {
      "de": "darf",
      "en": "may",
      "uk": "можна",
      "ru": "можно"
    },
    "distractors": [
      "muss",
      "kann",
      "will"
    ],
    "explanation": {
      "de": "<b>„darf … nicht/kein-“</b> drückt ein Verbot aus (Regel der Hausordnung).<br>„muss“ würde eine Pflicht ausdrücken, kein Verbot.",
      "en": "<b>„darf … nicht/kein-“</b> expresses a prohibition (a house rule).<br>„muss“ would express an obligation, not a prohibition.",
      "uk": "<b>„darf … nicht/kein-“</b> виражає заборону (правило будинку).<br>„muss“ виражало б обовʼязок, а не заборону.",
      "ru": "<b>„darf … nicht/kein-“</b> выражает запрет (правило дома).<br>„muss“ выражало бы обязанность, а не запрет."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_011",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "Jeder Mieter {{BLANK}} die Hausordnung unterschreiben.",
      "en": "Every tenant must sign the house rules.",
      "uk": "Кожен орендар повинен підписати правила будинку.",
      "ru": "Каждый арендатор должен подписать правила дома."
    },
    "answer": {
      "de": "muss",
      "en": "must",
      "uk": "повинен",
      "ru": "должен"
    },
    "distractors": [
      "darf",
      "kann",
      "möchte"
    ],
    "explanation": {
      "de": "<b>„muss“</b> drückt eine Pflicht aus, die für alle Mieter gilt.<br>„darf“ würde nur eine Erlaubnis ausdrücken, keine Pflicht.",
      "en": "<b>„muss“</b> expresses an obligation that applies to all tenants.<br>„darf“ would only express permission, not an obligation.",
      "uk": "<b>„muss“</b> виражає обовʼязок, який стосується всіх орендарів.<br>„darf“ виражало б лише дозвіл, а не обовʼязок.",
      "ru": "<b>„muss“</b> выражает обязанность, которая касается всех арендаторов.<br>„darf“ выражало бы только разрешение, а не обязанность."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_012",
    "cat": "modalverben_wdh_b1",
    "sentence": {
      "de": "{{BLANK}} ich Ihnen kurz helfen, den Koffer zu tragen?",
      "en": "Can I help you carry the suitcase for a moment?",
      "uk": "Чи можу я вам трохи допомогти нести валізу?",
      "ru": "Могу ли я вам немного помочь нести чемодан?"
    },
    "answer": {
      "de": "Kann",
      "en": "Can",
      "uk": "Чи можу",
      "ru": "Могу ли"
    },
    "distractors": [
      "Muss",
      "Soll",
      "Darf"
    ],
    "explanation": {
      "de": "<b>„kann“</b> bietet hier höflich eine Fähigkeit/Hilfe an.<br>„muss“ würde eine Pflicht ausdrücken, kein Angebot.",
      "en": "<b>„kann“</b> here politely offers an ability/help.<br>„muss“ would express an obligation, not an offer.",
      "uk": "<b>„kann“</b> тут ввічливо пропонує здатність/допомогу.<br>„muss“ виражало б обовʼязок, а не пропозицію.",
      "ru": "<b>„kann“</b> здесь вежливо предлагает способность/помощь.<br>„muss“ выражало бы обязанность, а не предложение."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "sb_013",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Wir sind letzte Woche {{BLANK}} die neue Wohnung gezogen.",
      "en": "We moved into the new flat last week.",
      "uk": "Минулого тижня ми переїхали в нову квартиру.",
      "ru": "На прошлой неделе мы переехали в новую квартиру."
    },
    "answer": {
      "de": "in",
      "en": "into",
      "uk": "в",
      "ru": "в"
    },
    "distractors": [
      "an",
      "auf",
      "bei"
    ],
    "explanation": {
      "de": "Bei <b>Richtung</b> (wohin?) steht die Wechselpräposition <b>„in“</b> mit Akkusativ: „in die Wohnung“.<br>„an“ würde nicht zu „ziehen in etwas“ passen.",
      "en": "For <b>direction</b> (where to?), the two-way preposition <b>„in“</b> is used with accusative: „in die Wohnung“.<br>„an“ would not fit with „ziehen in etwas“ (to move into something).",
      "uk": "Для <b>напрямку</b> (куди?) вживають прийменник подвійного керування <b>„in“</b> зі знахідним: „in die Wohnung“.<br>„an“ не пасувало б до „ziehen in etwas“.",
      "ru": "Для <b>направления</b> (куда?) употребляют предлог двойного управления <b>„in“</b> с винительным: „in die Wohnung“.<br>„an“ не подошло бы к „ziehen in etwas“."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_014",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Der Kinderwagen steht {{BLANK}} dem Treppenhaus.",
      "en": "The stroller is standing in the stairwell.",
      "uk": "Дитяча коляска стоїть у підʼїзді.",
      "ru": "Детская коляска стоит в подъезде."
    },
    "answer": {
      "de": "in",
      "en": "in",
      "uk": "у",
      "ru": "в"
    },
    "distractors": [
      "an",
      "auf",
      "zu"
    ],
    "explanation": {
      "de": "Bei <b>Position</b> (wo?) steht die Wechselpräposition <b>„in“</b> mit Dativ: „in dem Treppenhaus“.<br>„zu“ würde nur eine Richtung ausdrücken.",
      "en": "For <b>position</b> (where?), the two-way preposition <b>„in“</b> is used with dative: „in dem Treppenhaus“.<br>„zu“ would only express a direction.",
      "uk": "Для <b>позиції</b> (де?) вживають прийменник подвійного керування <b>„in“</b> з давальним: „in dem Treppenhaus“.<br>„zu“ виражало б лише напрямок.",
      "ru": "Для <b>позиции</b> (где?) употребляют предлог двойного управления <b>„in“</b> с дательным: „in dem Treppenhaus“.<br>„zu“ выражало бы только направление."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_015",
    "cat": "wechselpraepositionen_wdh_b1",
    "sentence": {
      "de": "Bitte stell den Karton nicht {{BLANK}} den Fluchtweg.",
      "en": "Please don't put the box on the escape route.",
      "uk": "Будь ласка, не став коробку на шлях евакуації.",
      "ru": "Пожалуйста, не ставь коробку на путь эвакуации."
    },
    "answer": {
      "de": "auf",
      "en": "on",
      "uk": "на",
      "ru": "на"
    },
    "distractors": [
      "an",
      "in",
      "bei"
    ],
    "explanation": {
      "de": "Bei einer Handlung mit Richtung (wohin stellen?) steht die Wechselpräposition <b>„auf“</b> mit Akkusativ.<br>„an“ würde eine andere Position beschreiben, nicht „auf einer Fläche“.",
      "en": "For an action with direction (where to put something?), the two-way preposition <b>„auf“</b> is used with accusative.<br>„an“ would describe a different position, not „on a surface“.",
      "uk": "Для дії з напрямком (куди поставити?) вживають прийменник подвійного керування <b>„auf“</b> зі знахідним.<br>„an“ описував би іншу позицію, не „на поверхні“.",
      "ru": "Для действия с направлением (куда поставить?) употребляют предлог двойного управления <b>„auf“</b> с винительным.<br>„an“ описывал бы другую позицию, не „на поверхности“."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "sb_016",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Ich muss {{BLANK}} beeilen, sonst komme ich zu spät.",
      "en": "I have to hurry, otherwise I'll be late.",
      "uk": "Мені треба поспішити, інакше я запізнюся.",
      "ru": "Мне нужно поторопиться, иначе я опоздаю."
    },
    "answer": {
      "de": "mich",
      "en": "myself",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "mir",
      "dich",
      "sich"
    ],
    "explanation": {
      "de": "<b>„sich beeilen“</b> ist ein reflexives Verb mit Akkusativ: 1. Person Singular = <b>„mich“</b>.<br>„mir“ wäre der Dativ, der hier nicht passt.",
      "en": "<b>„sich beeilen“</b> (to hurry) is a reflexive verb with accusative: 1st person singular = <b>„mich“</b>.<br>„mir“ would be the dative, which doesn't fit here.",
      "uk": "<b>„sich beeilen“</b> — зворотне дієслово зі знахідним відмінком: 1 особа однини = <b>„mich“</b>.<br>„mir“ був би давальний відмінок, який тут не підходить.",
      "ru": "<b>„sich beeilen“</b> — возвратный глагол с винительным падежом: 1 лицо единственного числа = <b>„mich“</b>.<br>„mir“ был бы дательный падеж, который здесь не подходит."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_017",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Warum ärgerst du {{BLANK}} schon wieder über die Nachbarn?",
      "en": "Why are you getting annoyed with the neighbours again?",
      "uk": "Чому ти знову сердишся на сусідів?",
      "ru": "Почему ты снова сердишься на соседей?"
    },
    "answer": {
      "de": "dich",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dir",
      "sich",
      "euch"
    ],
    "explanation": {
      "de": "<b>„sich ärgern“</b> braucht das Reflexivpronomen im Akkusativ: 2. Person Singular = <b>„dich“</b>.<br>„dir“ wäre der Dativ, der hier grammatisch falsch ist.",
      "en": "<b>„sich ärgern“</b> (to get annoyed) needs the reflexive pronoun in the accusative: 2nd person singular = <b>„dich“</b>.<br>„dir“ would be the dative, which is grammatically wrong here.",
      "uk": "<b>„sich ärgern“</b> потребує зворотного займенника у знахідному: 2 особа однини = <b>„dich“</b>.<br>„dir“ був би давальний, що тут граматично неправильно.",
      "ru": "<b>„sich ärgern“</b> требует возвратного местоимения в винительном: 2 лицо единственного числа = <b>„dich“</b>.<br>„dir“ был бы дательный, что здесь грамматически неверно."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_018",
    "cat": "reflexivpronomen_akkusativ_wdh_b1",
    "sentence": {
      "de": "Die Kinder freuen {{BLANK}} sehr auf die Ferien.",
      "en": "The children are very happy about the holidays.",
      "uk": "Діти дуже радіють канікулам.",
      "ru": "Дети очень радуются каникулам."
    },
    "answer": {
      "de": "sich",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ihnen",
      "ihm",
      "dich"
    ],
    "explanation": {
      "de": "<b>„sich freuen“</b> braucht das Reflexivpronomen im Akkusativ: 3. Person Plural = <b>„sich“</b>.<br>„ihnen“ wäre der Dativ Plural, der hier nicht passt.",
      "en": "<b>„sich freuen“</b> (to be happy) needs the reflexive pronoun in the accusative: 3rd person plural = <b>„sich“</b>.<br>„ihnen“ would be the dative plural, which doesn't fit here.",
      "uk": "<b>„sich freuen“</b> потребує зворотного займенника у знахідному: 3 особа множини = <b>„sich“</b>.<br>„ihnen“ був би давальний множини, який тут не підходить.",
      "ru": "<b>„sich freuen“</b> требует возвратного местоимения в винительном: 3 лицо множественного числа = <b>„sich“</b>.<br>„ihnen“ был бы дательный падеж множественного числа, который здесь не подходит."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "sb_019",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Das war kein Fehler, {{BLANK}} eine bewusste Entscheidung.",
      "en": "That was not a mistake, but a deliberate decision.",
      "uk": "Це була не помилка, а свідоме рішення.",
      "ru": "Это была не ошибка, а осознанное решение."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а",
      "ru": "а"
    },
    "distractors": [
      "aber",
      "oder",
      "und"
    ],
    "explanation": {
      "de": "<b>„sondern“</b> steht nach einer Verneinung, um einen Gegensatz auszudrücken.<br>„aber“ würde ohne vorherige Verneinung stehen und passt hier nicht.",
      "en": "<b>„sondern“</b> (but rather) follows a negation to express a contrast.<br>„aber“ would stand without a preceding negation and doesn't fit here.",
      "uk": "<b>„sondern“</b> вживається після заперечення для вираження протиставлення.<br>„aber“ вживалося б без попереднього заперечення і тут не підходить.",
      "ru": "<b>„sondern“</b> употребляется после отрицания для выражения противопоставления.<br>„aber“ употреблялось бы без предшествующего отрицания и здесь не подходит."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_020",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Der Mann, {{BLANK}} neben mir wohnt, ist sehr freundlich.",
      "en": "The man who lives next to me is very friendly.",
      "uk": "Чоловік, який живе поруч зі мною, дуже привітний.",
      "ru": "Мужчина, который живёт рядом со мной, очень дружелюбный."
    },
    "answer": {
      "de": "der",
      "en": "who",
      "uk": "який",
      "ru": "который"
    },
    "distractors": [
      "den",
      "dem",
      "die"
    ],
    "explanation": {
      "de": "Das Relativpronomen ist Subjekt des Nebensatzes (er wohnt), deshalb steht es im <b>Nominativ</b>: <b>„der“</b>.<br>„den“ wäre der Akkusativ, der hier nicht passt.",
      "en": "The relative pronoun is the subject of the clause (he lives), so it is in the <b>nominative</b>: <b>„der“</b>.<br>„den“ would be the accusative, which doesn't fit here.",
      "uk": "Відносний займенник є підметом підрядного речення (він живе), тому стоїть у <b>називному</b>: <b>„der“</b>.<br>„den“ був би знахідним, який тут не підходить.",
      "ru": "Относительное местоимение является подлежащим придаточного (он живёт), поэтому стоит в <b>именительном</b>: <b>„der“</b>.<br>„den“ был бы винительным, который здесь не подходит."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_021",
    "cat": "relativsatz_nominativ_sondern",
    "sentence": {
      "de": "Das ist nicht meine Reklamation, {{BLANK}} die von meiner Kollegin.",
      "en": "That's not my complaint, but my colleague's.",
      "uk": "Це не моя рекламація, а моєї колеги.",
      "ru": "Это не моя рекламация, а моей коллеги."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а",
      "ru": "а"
    },
    "distractors": [
      "aber",
      "oder",
      "doch"
    ],
    "explanation": {
      "de": "<b>„sondern“</b> korrigiert eine vorherige Verneinung durch die richtige Alternative.<br>„aber“ würde hier keinen echten Gegensatz zur Verneinung ausdrücken.",
      "en": "<b>„sondern“</b> corrects a previous negation with the correct alternative.<br>„aber“ would not express a real contrast to the negation here.",
      "uk": "<b>„sondern“</b> виправляє попереднє заперечення правильною альтернативою.<br>„aber“ тут не виражало б справжнього протиставлення запереченню.",
      "ru": "<b>„sondern“</b> исправляет предыдущее отрицание правильной альтернативой.<br>„aber“ здесь не выражало бы настоящего противопоставления отрицанию."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "sb_022",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Die Rechnung, {{BLANK}} ich letzte Woche bekommen habe, war falsch.",
      "en": "The invoice that I received last week was wrong.",
      "uk": "Рахунок, який я отримав минулого тижня, був неправильним.",
      "ru": "Счёт, который я получил на прошлой неделе, был неправильным."
    },
    "answer": {
      "de": "die",
      "en": "that",
      "uk": "який",
      "ru": "который"
    },
    "distractors": [
      "der",
      "dem",
      "den"
    ],
    "explanation": {
      "de": "Das Relativpronomen ist Akkusativobjekt (ich habe die Rechnung bekommen), feminin Singular Akkusativ = <b>„die“</b>.<br>„der“ wäre Dativ oder Nominativ, hier grammatisch falsch.",
      "en": "The relative pronoun is the accusative object (I received the invoice), feminine singular accusative = <b>„die“</b>.<br>„der“ would be dative or nominative, grammatically wrong here.",
      "uk": "Відносний займенник — знахідний додаток (я отримав рахунок), жіночий рід однини, знахідний = <b>„die“</b>.<br>„der“ був би давальним чи називним, тут граматично неправильно.",
      "ru": "Относительное местоимение — винительное дополнение (я получил счёт), женский род единственного числа, винительный = <b>„die“</b>.<br>„der“ был бы дательным или именительным, здесь грамматически неверно."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_023",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Das Kleid, {{BLANK}} ich umtauschen möchte, ist zu klein.",
      "en": "The dress that I would like to exchange is too small.",
      "uk": "Плаття, яке я хочу обміняти, замале.",
      "ru": "Платье, которое я хочу обменять, слишком маленькое."
    },
    "answer": {
      "de": "das",
      "en": "that",
      "uk": "яке",
      "ru": "которое"
    },
    "distractors": [
      "der",
      "dem",
      "den"
    ],
    "explanation": {
      "de": "Neutrum Singular Akkusativ des Relativpronomens ist <b>„das“</b> (gleiche Form wie Nominativ bei Neutrum).<br>„den“ wäre maskulin Akkusativ und passt nicht zu „das Kleid“.",
      "en": "The neuter singular accusative relative pronoun is <b>„das“</b> (same form as nominative for neuter).<br>„den“ would be masculine accusative and doesn't fit „das Kleid“.",
      "uk": "Середній рід однини, знахідний відмінок відносного займенника — <b>„das“</b> (та сама форма, що й називний для середнього роду).<br>„den“ був би чоловічим родом знахідного і не пасує до „das Kleid“.",
      "ru": "Средний род единственного числа, винительный падеж относительного местоимения — <b>„das“</b> (та же форма, что и именительный для среднего рода).<br>„den“ был бы мужским родом винительного и не подходит к „das Kleid“."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_024",
    "cat": "relativsatz_akkusativ_b1",
    "sentence": {
      "de": "Die Nachbarn, {{BLANK}} wir zum Fest eingeladen haben, kommen um acht.",
      "en": "The neighbours whom we invited to the party are coming at eight.",
      "uk": "Сусіди, яких ми запросили на свято, прийдуть о восьмій.",
      "ru": "Соседи, которых мы пригласили на праздник, придут в восемь."
    },
    "answer": {
      "de": "die",
      "en": "whom",
      "uk": "яких",
      "ru": "которых"
    },
    "distractors": [
      "der",
      "denen",
      "den"
    ],
    "explanation": {
      "de": "Plural Akkusativ des Relativpronomens ist <b>„die“</b> (gleich für alle Genera im Plural).<br>„denen“ wäre der Dativ Plural, der hier nicht passt.",
      "en": "The plural accusative relative pronoun is <b>„die“</b> (same for all genders in the plural).<br>„denen“ would be the dative plural, which doesn't fit here.",
      "uk": "Множина, знахідний відмінок відносного займенника — <b>„die“</b> (однакова форма для всіх родів у множині).<br>„denen“ був би давальним множини, який тут не підходить.",
      "ru": "Множественное число, винительный падеж относительного местоимения — <b>„die“</b> (одинаковая форма для всех родов во множественном числе).<br>„denen“ был бы дательным падежом множественного числа, который здесь не подходит."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "sb_025",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Er ist nicht ans Telefon gegangen, er {{BLANK}} noch bei der Arbeit sein.",
      "en": "He didn't answer the phone, he might still be at work.",
      "uk": "Він не відповів на дзвінок, він, мабуть, ще на роботі.",
      "ru": "Он не ответил на звонок, он, наверное, ещё на работе."
    },
    "answer": {
      "de": "dürfte",
      "en": "might",
      "uk": "мабуть",
      "ru": "наверное"
    },
    "distractors": [
      "muss",
      "kann",
      "will"
    ],
    "explanation": {
      "de": "<b>„dürfte“</b> (Konjunktiv II von „dürfen“) drückt eine vorsichtige Vermutung aus.<br>„muss“ wäre eine viel sicherere Aussage, fast eine Tatsache.",
      "en": "<b>„dürfte“</b> (subjunctive II of „dürfen“) expresses a cautious assumption.<br>„muss“ would be a much more certain statement, almost a fact.",
      "uk": "<b>„dürfte“</b> (конʼюнктив II від „dürfen“) виражає обережне припущення.<br>„muss“ було б набагато впевненішим твердженням, майже фактом.",
      "ru": "<b>„dürfte“</b> (конъюнктив II от „dürfen“) выражает осторожное предположение.<br>„muss“ было бы намного более уверенным утверждением, почти фактом."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_026",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Das Girokonto {{BLANK}} schon eröffnet sein, er hat die Karte schon bekommen.",
      "en": "The account should already be opened, he's already received the card.",
      "uk": "Рахунок, мабуть, уже відкритий, він уже отримав картку.",
      "ru": "Счёт, наверное, уже открыт, он уже получил карту."
    },
    "answer": {
      "de": "müsste",
      "en": "should",
      "uk": "мабуть",
      "ru": "наверное"
    },
    "distractors": [
      "dürfte",
      "kann",
      "soll"
    ],
    "explanation": {
      "de": "<b>„müsste“</b> (Konjunktiv II von „müssen“) drückt eine logische, ziemlich sichere Vermutung aus.<br>„soll“ würde einen Auftrag oder ein Gerücht ausdrücken, keine eigene Vermutung.",
      "en": "<b>„müsste“</b> (subjunctive II of „müssen“) expresses a logical, fairly certain assumption.<br>„soll“ would express an order or a rumour, not one's own assumption.",
      "uk": "<b>„müsste“</b> (конʼюнктив II від „müssen“) виражає логічне, доволі впевнене припущення.<br>„soll“ виражало б доручення чи чутку, а не власне припущення.",
      "ru": "<b>„müsste“</b> (конъюнктив II от „müssen“) выражает логичное, довольно уверенное предположение.<br>„soll“ выражало бы поручение или слух, а не собственное предположение."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_027",
    "cat": "modalverben_vermutung",
    "sentence": {
      "de": "Bei diesem Wetter {{BLANK}} es auf dem Ökohof heute sehr voll sein.",
      "en": "In this weather, it could be very crowded at the organic farm today.",
      "uk": "У таку погоду на органічній фермі сьогодні, можливо, дуже людно.",
      "ru": "В такую погоду на органической ферме сегодня, возможно, очень многолюдно."
    },
    "answer": {
      "de": "könnte",
      "en": "could",
      "uk": "можливо",
      "ru": "возможно"
    },
    "distractors": [
      "muss",
      "darf",
      "soll"
    ],
    "explanation": {
      "de": "<b>„könnte“</b> (Konjunktiv II von „können“) drückt eine unsichere Möglichkeit aus.<br>„muss“ wäre eine viel zu sichere Aussage für eine reine Vermutung.",
      "en": "<b>„könnte“</b> (subjunctive II of „können“) expresses an uncertain possibility.<br>„muss“ would be far too certain a statement for a mere assumption.",
      "uk": "<b>„könnte“</b> (конʼюнктив II від „können“) виражає непевну можливість.<br>„muss“ було б занадто впевненим твердженням для простого припущення.",
      "ru": "<b>„könnte“</b> (конъюнктив II от „können“) выражает неопределённую возможность.<br>„muss“ было бы слишком уверенным утверждением для простого предположения."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "sb_028",
    "cat": "genitiv",
    "sentence": {
      "de": "Das Auto {{BLANK}} Nachbarn steht schon wieder vor unserer Tür.",
      "en": "Our neighbour's car is parked in front of our door again.",
      "uk": "Автомобіль сусіда знову стоїть перед нашими дверима.",
      "ru": "Автомобиль соседа снова стоит перед нашей дверью."
    },
    "answer": {
      "de": "des",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dem",
      "den",
      "der"
    ],
    "explanation": {
      "de": "Maskulin Singular Genitiv des bestimmten Artikels ist <b>„des“</b>, das Nomen bekommt „-n“: „des Nachbarn“.<br>„dem“ wäre der Dativ, der hier nicht passt.",
      "en": "The masculine singular genitive of the definite article is <b>„des“</b>, the noun gets „-n“: „des Nachbarn“.<br>„dem“ would be the dative, which doesn't fit here.",
      "uk": "Чоловічий рід однини, родовий відмінок означеного артикля — <b>„des“</b>, іменник отримує „-n“: „des Nachbarn“.<br>„dem“ був би давальним, який тут не підходить.",
      "ru": "Мужской род единственного числа, родительный падеж определённого артикля — <b>„des“</b>, существительное получает „-n“: „des Nachbarn“.<br>„dem“ был бы дательным, который здесь не подходит."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_029",
    "cat": "genitiv",
    "sentence": {
      "de": "Die Kosten {{BLANK}} Versicherung sind in diesem Jahr gestiegen.",
      "en": "The costs of the insurance have risen this year.",
      "uk": "Вартість страхування цього року зросла.",
      "ru": "Стоимость страхования в этом году выросла."
    },
    "answer": {
      "de": "der",
      "en": "of the",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "die",
      "den",
      "dem"
    ],
    "explanation": {
      "de": "Feminin Singular Genitiv des bestimmten Artikels ist <b>„der“</b> (gleiche Form wie Dativ Feminin).<br>„die“ wäre der Nominativ oder Akkusativ, der hier nicht passt.",
      "en": "The feminine singular genitive of the definite article is <b>„der“</b> (same form as feminine dative).<br>„die“ would be the nominative or accusative, which doesn't fit here.",
      "uk": "Жіночий рід однини, родовий відмінок означеного артикля — <b>„der“</b> (та сама форма, що й давальний жіночого роду).<br>„die“ був би називним чи знахідним, який тут не підходить.",
      "ru": "Женский род единственного числа, родительный падеж определённого артикля — <b>„der“</b> (та же форма, что и дательный женского рода).<br>„die“ был бы именительным или винительным, который здесь не подходит."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_030",
    "cat": "genitiv",
    "sentence": {
      "de": "Wegen {{BLANK}} Diebstahls musste er die Karte sperren lassen.",
      "en": "Because of the theft, he had to have the card blocked.",
      "uk": "Через крадіжку йому довелося заблокувати картку.",
      "ru": "Из-за кражи ему пришлось заблокировать карту."
    },
    "answer": {
      "de": "des",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "dem",
      "den",
      "der"
    ],
    "explanation": {
      "de": "Die Präposition <b>„wegen“</b> braucht den Genitiv: „wegen des Diebstahls“.<br>„dem“ wäre der Dativ, der in der Standardsprache mit „wegen“ seltener ist.",
      "en": "The preposition <b>„wegen“</b> (because of) requires the genitive: „wegen des Diebstahls“.<br>„dem“ would be the dative, which is less common with „wegen“ in standard language.",
      "uk": "Прийменник <b>„wegen“</b> (через) вимагає родового відмінка: „wegen des Diebstahls“.<br>„dem“ був би давальним, який рідше вживається з „wegen“ у літературній мові.",
      "ru": "Предлог <b>„wegen“</b> (из-за) требует родительного падежа: „wegen des Diebstahls“.<br>„dem“ был бы дательным, который реже употребляется с „wegen“ в литературном языке."
    },
    "gram": "genitiv"
  },
  {
    "id": "sb_031",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "Er hat die Versicherung gekündigt, {{BLANK}} sie sehr günstig war.",
      "en": "He cancelled the insurance although it was very cheap.",
      "uk": "Він розірвав страхування, хоча воно було дуже дешевим.",
      "ru": "Он расторг страхование, хотя оно было очень дешёвым."
    },
    "answer": {
      "de": "obwohl",
      "en": "although",
      "uk": "хоча",
      "ru": "хотя"
    },
    "distractors": [
      "weil",
      "damit",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„obwohl“</b> drückt einen Gegensatz aus (kündigen, obwohl es günstig war).<br>„weil“ würde einen Grund nennen, der hier aber keinen Sinn ergibt.",
      "en": "<b>„obwohl“</b> (although) expresses a contrast (cancelling although it was cheap).<br>„weil“ would give a reason, which doesn't make sense here.",
      "uk": "<b>„obwohl“</b> (хоча) виражає протиставлення (розірвав, хоча було дешево).<br>„weil“ називало б причину, що тут не має сенсу.",
      "ru": "<b>„obwohl“</b> (хотя) выражает противопоставление (расторг, хотя было дёшево).<br>„weil“ называло бы причину, что здесь не имеет смысла."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_032",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "{{BLANK}} es draußen sehr kalt war, sind wir spazieren gegangen.",
      "en": "Although it was very cold outside, we went for a walk.",
      "uk": "Хоча надворі було дуже холодно, ми пішли на прогулянку.",
      "ru": "Хотя на улице было очень холодно, мы пошли на прогулку."
    },
    "answer": {
      "de": "Obwohl",
      "en": "Although",
      "uk": "Хоча",
      "ru": "Хотя"
    },
    "distractors": [
      "Weil",
      "Damit",
      "Falls"
    ],
    "explanation": {
      "de": "<b>„Obwohl“</b> leitet einen Nebensatz mit Gegensatz ein (spazieren gehen trotz Kälte).<br>„Weil“ würde einen Grund für den Spaziergang nennen, was hier unlogisch wäre.",
      "en": "<b>„Obwohl“</b> (although) introduces a clause of contrast (going for a walk despite the cold).<br>„Weil“ would give a reason for the walk, which would be illogical here.",
      "uk": "<b>„Obwohl“</b> (хоча) вводить підрядне речення протиставлення (прогулянка попри холод).<br>„Weil“ називало б причину прогулянки, що тут було б нелогічно.",
      "ru": "<b>„Obwohl“</b> (хотя) вводит придаточное предложение противопоставления (прогулка несмотря на холод).<br>„Weil“ называло бы причину прогулки, что здесь было бы нелогично."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_033",
    "cat": "nebensatz_mit_obwohl",
    "sentence": {
      "de": "Sie hat die Prüfung bestanden, {{BLANK}} sie kaum Zeit zum Lernen hatte.",
      "en": "She passed the exam although she barely had time to study.",
      "uk": "Вона склала іспит, хоча в неї майже не було часу вчитися.",
      "ru": "Она сдала экзамен, хотя у неё почти не было времени учиться."
    },
    "answer": {
      "de": "obwohl",
      "en": "although",
      "uk": "хоча",
      "ru": "хотя"
    },
    "distractors": [
      "weil",
      "damit",
      "ob"
    ],
    "explanation": {
      "de": "<b>„obwohl“</b> beschreibt einen unerwarteten Gegensatz (bestehen trotz wenig Lernzeit).<br>„damit“ würde ein Ziel ausdrücken, was hier keinen Sinn ergibt.",
      "en": "<b>„obwohl“</b> describes an unexpected contrast (passing despite little study time).<br>„damit“ would express a purpose, which doesn't make sense here.",
      "uk": "<b>„obwohl“</b> описує несподіване протиставлення (склала, попри мало часу на навчання).<br>„damit“ виражало б мету, що тут не має сенсу.",
      "ru": "<b>„obwohl“</b> описывает неожиданное противопоставление (сдала, несмотря на мало времени на учёбу).<br>„damit“ выражало бы цель, что здесь не имеет смысла."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "sb_034",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Die Überweisung ist nicht angekommen, {{BLANK}} rufe ich die Bank an.",
      "en": "The transfer hasn't arrived, that's why I'm calling the bank.",
      "uk": "Переказ не надійшов, тому я дзвоню в банк.",
      "ru": "Перевод не пришёл, поэтому я звоню в банк."
    },
    "answer": {
      "de": "deshalb",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "obwohl",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„deshalb“</b> nennt die Folge eines Ereignisses.<br>„obwohl“ würde einen Gegensatz ausdrücken, keine Folge.",
      "en": "<b>„deshalb“</b> (that's why) states the consequence of an event.<br>„obwohl“ would express a contrast, not a consequence.",
      "uk": "<b>„deshalb“</b> (тому) називає наслідок події.<br>„obwohl“ виражало б протиставлення, а не наслідок.",
      "ru": "<b>„deshalb“</b> (поэтому) называет следствие события.<br>„obwohl“ выражало бы противопоставление, а не следствие."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_035",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Der Schaden war klein, {{BLANK}} musste sie die Versicherung informieren.",
      "en": "The damage was small; nevertheless, she had to inform the insurance.",
      "uk": "Шкода була невеликою, проте їй довелося повідомити страхову.",
      "ru": "Ущерб был небольшим, однако ей пришлось сообщить страховой."
    },
    "answer": {
      "de": "trotzdem",
      "en": "nevertheless",
      "uk": "проте",
      "ru": "однако"
    },
    "distractors": [
      "deshalb",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„trotzdem“</b> drückt einen unerwarteten Gegensatz aus (informieren, obwohl der Schaden klein war).<br>„deshalb“ würde eine logische Folge ausdrücken, kein Gegensatz.",
      "en": "<b>„trotzdem“</b> (nevertheless) expresses an unexpected contrast (informing despite the damage being small).<br>„deshalb“ would express a logical consequence, not a contrast.",
      "uk": "<b>„trotzdem“</b> (проте) виражає несподіване протиставлення (повідомила, хоча шкода була малою).<br>„deshalb“ виражало б логічний наслідок, а не протиставлення.",
      "ru": "<b>„trotzdem“</b> (однако) выражает неожиданное противопоставление (сообщила, хотя ущерб был малым).<br>„deshalb“ выражало бы логическое следствие, а не противопоставление."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_036",
    "cat": "konnektoren_wdh_b1",
    "sentence": {
      "de": "Ich habe die Schadensmeldung sofort geschickt, {{BLANK}} die Versicherung schnell reagieren kann.",
      "en": "I sent the damage report immediately so that the insurance can react quickly.",
      "uk": "Я негайно надіслав повідомлення про шкоду, щоб страхова могла швидко реагувати.",
      "ru": "Я немедленно отправил сообщение об ущербе, чтобы страховая могла быстро отреагировать."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "trotzdem",
      "deshalb",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„damit“</b> nennt das Ziel des sofortigen Sendens.<br>„trotzdem“ würde einen Gegensatz ausdrücken, kein Ziel.",
      "en": "<b>„damit“</b> (so that) states the purpose of sending it immediately.<br>„trotzdem“ would express a contrast, not a purpose.",
      "uk": "<b>„damit“</b> (щоб) називає мету негайного надсилання.<br>„trotzdem“ виражало б протиставлення, а не мету.",
      "ru": "<b>„damit“</b> (чтобы) называет цель немедленной отправки.<br>„trotzdem“ выражало бы противопоставление, а не цель."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "sb_037",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Früher {{BLANK}} ich mich nur von Fast Food, heute koche ich selbst.",
      "en": "In the past, I only ate fast food, today I cook myself.",
      "uk": "Раніше я харчувався лише фаст-фудом, сьогодні я готую сам.",
      "ru": "Раньше я питался только фастфудом, сегодня я готовлю сам."
    },
    "answer": {
      "de": "ernährte",
      "en": "ate",
      "uk": "харчувався",
      "ru": "питался"
    },
    "distractors": [
      "ernähre",
      "habe ernährt",
      "ernähren"
    ],
    "explanation": {
      "de": "Mit <b>„früher“</b> braucht man das Präteritum in schriftlichen/berichtenden Texten: <b>„ernährte“</b>.<br>„ernähre“ wäre Präsens und passt nicht zu „früher“.",
      "en": "With <b>„früher“</b> (in the past), you need the simple past in written/narrative texts: <b>„ernährte“</b>.<br>„ernähre“ would be present tense and doesn't fit with „früher“.",
      "uk": "Із <b>„früher“</b> (раніше) у писемних/розповідних текстах потрібен претерит: <b>„ernährte“</b>.<br>„ernähre“ був би теперішнім часом і не пасує до „früher“.",
      "ru": "С <b>„früher“</b> (раньше) в письменных/повествовательных текстах нужен претерит: <b>„ernährte“</b>.<br>„ernähre“ было бы настоящим временем и не подходит к „früher“."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_038",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Seine Ernährung {{BLANK}} früher fast nur aus Brot und Wurst.",
      "en": "His diet consisted almost only of bread and sausage in the past.",
      "uk": "Його харчування раніше складалося майже лише з хліба й ковбаси.",
      "ru": "Его питание раньше состояло почти только из хлеба и колбасы."
    },
    "answer": {
      "de": "bestand",
      "en": "consisted",
      "uk": "складалося",
      "ru": "состояло"
    },
    "distractors": [
      "besteht",
      "hat bestanden",
      "bestehen"
    ],
    "explanation": {
      "de": "<b>„bestand“</b> ist das Präteritum von „bestehen aus“ und passt zu „früher“.<br>„besteht“ wäre Präsens und würde nicht zur Vergangenheit passen.",
      "en": "<b>„bestand“</b> is the simple past of „bestehen aus“ (to consist of) and fits with „früher“.<br>„besteht“ would be present tense and would not fit the past.",
      "uk": "<b>„bestand“</b> — претерит від „bestehen aus“ і пасує до „früher“.<br>„besteht“ був би теперішнім часом і не пасував би до минулого.",
      "ru": "<b>„bestand“</b> — претерит от „bestehen aus“ и подходит к „früher“.<br>„besteht“ было бы настоящим временем и не подходило бы к прошлому."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_039",
    "cat": "praeteritum_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} als Kinder oft bei den Großeltern.",
      "en": "As children, we often lived with our grandparents.",
      "uk": "У дитинстві ми часто жили в бабусі й дідуся.",
      "ru": "В детстве мы часто жили у бабушки и дедушки."
    },
    "answer": {
      "de": "wohnten",
      "en": "lived",
      "uk": "жили",
      "ru": "жили"
    },
    "distractors": [
      "wohnen",
      "haben gewohnt",
      "wohnt"
    ],
    "explanation": {
      "de": "Mit <b>„als Kinder“</b> (Rückblick) benutzt man das Präteritum: <b>„wohnten“</b>.<br>„wohnen“ wäre Präsens, was hier zeitlich nicht passt.",
      "en": "With <b>„als Kinder“</b> (looking back), you use the simple past: <b>„wohnten“</b>.<br>„wohnen“ would be present tense, which doesn't fit the time frame here.",
      "uk": "Із <b>„als Kinder“</b> (спогад) вживають претерит: <b>„wohnten“</b>.<br>„wohnen“ був би теперішнім часом, що тут не відповідає часовим рамкам.",
      "ru": "С <b>„als Kinder“</b> (воспоминание) употребляют претерит: <b>„wohnten“</b>.<br>„wohnen“ было бы настоящим временем, что здесь не соответствует временным рамкам."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "sb_040",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Der Automat war kaputt, {{BLANK}} konnte ich keinen Kaffee kaufen.",
      "en": "The vending machine was broken, that's why I couldn't buy coffee.",
      "uk": "Автомат був зламаний, тому я не міг купити каву.",
      "ru": "Автомат был сломан, поэтому я не мог купить кофе."
    },
    "answer": {
      "de": "deshalb",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "trotzdem",
      "obwohl",
      "damit"
    ],
    "explanation": {
      "de": "<b>„deshalb“</b> nennt die logische Folge (kaputt → kein Kaffee).<br>„trotzdem“ würde einen Gegensatz ausdrücken, keine Folge.",
      "en": "<b>„deshalb“</b> states the logical consequence (broken → no coffee).<br>„trotzdem“ would express a contrast, not a consequence.",
      "uk": "<b>„deshalb“</b> називає логічний наслідок (зламаний → немає кави).<br>„trotzdem“ виражало б протиставлення, а не наслідок.",
      "ru": "<b>„deshalb“</b> называет логическое следствие (сломан → нет кофе).<br>„trotzdem“ выражало бы противопоставление, а не следствие."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_041",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Er isst nicht regelmäßig, {{BLANK}} ist er sehr gesund.",
      "en": "He doesn't eat regularly; nevertheless, he is very healthy.",
      "uk": "Він не їсть регулярно, проте він дуже здоровий.",
      "ru": "Он не ест регулярно, однако он очень здоров."
    },
    "answer": {
      "de": "trotzdem",
      "en": "nevertheless",
      "uk": "проте",
      "ru": "однако"
    },
    "distractors": [
      "deswegen",
      "deshalb",
      "damit"
    ],
    "explanation": {
      "de": "<b>„trotzdem“</b> drückt einen unerwarteten Gegensatz aus.<br>„deswegen“ würde eine logische Folge ausdrücken, was hier keinen Sinn ergibt.",
      "en": "<b>„trotzdem“</b> expresses an unexpected contrast.<br>„deswegen“ would express a logical consequence, which doesn't make sense here.",
      "uk": "<b>„trotzdem“</b> виражає несподіване протиставлення.<br>„deswegen“ виражало б логічний наслідок, що тут не має сенсу.",
      "ru": "<b>„trotzdem“</b> выражает неожиданное противопоставление.<br>„deswegen“ выражало бы логическое следствие, что здесь не имеет смысла."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_042",
    "cat": "deshalb_deswegen_trotzdem",
    "sentence": {
      "de": "Wir haben unsere Essgewohnheiten verändert, {{BLANK}} fühlen wir uns fitter.",
      "en": "We have changed our eating habits, that's why we feel fitter.",
      "uk": "Ми змінили свої харчові звички, тому почуваємося краще.",
      "ru": "Мы изменили свои привычки питания, поэтому чувствуем себя лучше."
    },
    "answer": {
      "de": "deswegen",
      "en": "that's why",
      "uk": "тому",
      "ru": "поэтому"
    },
    "distractors": [
      "trotzdem",
      "obwohl",
      "damit"
    ],
    "explanation": {
      "de": "<b>„deswegen“</b> (wie „deshalb“) nennt die Folge einer Veränderung.<br>„trotzdem“ würde hier einen unpassenden Gegensatz ausdrücken.",
      "en": "<b>„deswegen“</b> (like „deshalb“) states the consequence of a change.<br>„trotzdem“ would express an unsuitable contrast here.",
      "uk": "<b>„deswegen“</b> (як і „deshalb“) називає наслідок зміни.<br>„trotzdem“ тут виражало б недоречне протиставлення.",
      "ru": "<b>„deswegen“</b> (как и „deshalb“) называет следствие изменения.<br>„trotzdem“ здесь выражало бы неуместное противопоставление."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "sb_043",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Die Ergebnisse {{BLANK}} der Umfrage waren überraschend.",
      "en": "The results of the survey were surprising.",
      "uk": "Результати опитування були дивовижними.",
      "ru": "Результаты опроса были удивительными."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "die",
      "den"
    ],
    "explanation": {
      "de": "In der gesprochenen Sprache ersetzt man den Genitiv oft durch <b>„von“ + Dativ</b>: „von der Umfrage“.<br>„der“ allein (ohne „von“) wäre hier der klassische Genitiv, aber die Aufgabe testet die Alternative.",
      "en": "In spoken language, the genitive is often replaced by <b>„von“ + dative</b>: „von der Umfrage“.<br>„der“ alone (without „von“) would be the classic genitive here.",
      "uk": "У розмовній мові родовий часто замінюють на <b>„von“ + давальний</b>: „von der Umfrage“.<br>„der“ саме по собі (без „von“) було б класичним родовим.",
      "ru": "В разговорной речи родительный падеж часто заменяют на <b>„von“ + дательный</b>: „von der Umfrage“.<br>„der“ само по себе (без „von“) было бы классическим родительным."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_044",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Der Preis {{BLANK}} dem Snack war viel zu hoch.",
      "en": "The price of the snack was much too high.",
      "uk": "Ціна снеку була занадто високою.",
      "ru": "Цена снека была слишком высокой."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "den",
      "des"
    ],
    "explanation": {
      "de": "<b>„von“ + Dativ</b> ist die gesprochene Alternative zum Genitiv: „von dem Snack“ (= „des Snacks“).<br>„des“ wäre der klassische Genitiv, hier wird aber die Alternative getestet.",
      "en": "<b>„von“ + dative</b> is the spoken alternative to the genitive: „von dem Snack“ (= „des Snacks“).<br>„des“ would be the classic genitive; here the alternative is being tested.",
      "uk": "<b>„von“ + давальний</b> — розмовна альтернатива родовому: „von dem Snack“ (= „des Snacks“).<br>„des“ був би класичним родовим, а тут перевіряється альтернатива.",
      "ru": "<b>„von“ + дательный</b> — разговорная альтернатива родительному: „von dem Snack“ (= „des Snacks“).<br>„des“ был бы классическим родительным, а здесь проверяется альтернатива."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_045",
    "cat": "genitiv_alternativen",
    "sentence": {
      "de": "Die Größe {{BLANK}} der Portion war viel zu groß für mich.",
      "en": "The size of the portion was much too big for me.",
      "uk": "Розмір порції був для мене занадто великим.",
      "ru": "Размер порции был для меня слишком большим."
    },
    "answer": {
      "de": "von",
      "en": "of",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "der",
      "die",
      "den"
    ],
    "explanation": {
      "de": "<b>„von“ + Dativ</b> ersetzt hier den Genitiv in der Alltagssprache: „von der Portion“.<br>„die“ wäre der Nominativ/Akkusativ und passt hier grammatisch nicht.",
      "en": "<b>„von“ + dative</b> replaces the genitive here in everyday language: „von der Portion“.<br>„die“ would be nominative/accusative and doesn't fit grammatically here.",
      "uk": "<b>„von“ + давальний</b> тут замінює родовий у побутовій мові: „von der Portion“.<br>„die“ був би називним/знахідним і граматично тут не підходить.",
      "ru": "<b>„von“ + дательный</b> здесь заменяет родительный падеж в повседневной речи: „von der Portion“.<br>„die“ был бы именительным/винительным и грамматически здесь не подходит."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "sb_046",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "{{BLANK}} ich in Deutschland lebe, ernähre ich mich viel gesünder.",
      "en": "Since I have been living in Germany, I eat much healthier.",
      "uk": "Відколи я живу в Німеччині, я харчуюся набагато здоровіше.",
      "ru": "С тех пор как я живу в Германии, я питаюсь намного здоровее."
    },
    "answer": {
      "de": "Seit",
      "en": "Since",
      "uk": "Відколи",
      "ru": "С тех пор как"
    },
    "distractors": [
      "Weil",
      "Obwohl",
      "Bis"
    ],
    "explanation": {
      "de": "<b>„Seit(dem)“</b> leitet einen Zeitpunkt in der Vergangenheit ein, der bis heute andauert.<br>„Bis“ würde einen Endpunkt in der Zukunft ausdrücken, keinen Anfang in der Vergangenheit.",
      "en": "<b>„Seit(dem)“</b> (since) introduces a point in the past that continues until now.<br>„Bis“ (until) would express an end point in the future, not a starting point in the past.",
      "uk": "<b>„Seit(dem)“</b> (відколи) вводить момент у минулому, що триває дотепер.<br>„Bis“ виражало б кінцеву точку в майбутньому, а не початок у минулому.",
      "ru": "<b>„Seit(dem)“</b> (с тех пор как) вводит момент в прошлом, который длится по сей день.<br>„Bis“ выражало бы конечную точку в будущем, а не начало в прошлом."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_047",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "Vieles hat mich überrascht, {{BLANK}} ich hier arbeite.",
      "en": "Many things have surprised me since I have been working here.",
      "uk": "Багато що мене здивувало, відколи я тут працюю.",
      "ru": "Многое меня удивило, с тех пор как я здесь работаю."
    },
    "answer": {
      "de": "seitdem",
      "en": "since",
      "uk": "відколи",
      "ru": "с тех пор как"
    },
    "distractors": [
      "bis",
      "damit",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„seitdem“</b> beschreibt einen andauernden Zeitraum ab einem Startpunkt in der Vergangenheit.<br>„damit“ würde ein Ziel ausdrücken, keine Zeitangabe.",
      "en": "<b>„seitdem“</b> describes an ongoing period from a starting point in the past.<br>„damit“ would express a purpose, not a time reference.",
      "uk": "<b>„seitdem“</b> описує тривалий період від початкової точки в минулому.<br>„damit“ виражало б мету, а не часову вказівку.",
      "ru": "<b>„seitdem“</b> описывает длительный период от начальной точки в прошлом.<br>„damit“ выражало бы цель, а не указание времени."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_048",
    "cat": "nebensatz_seit_seitdem",
    "sentence": {
      "de": "Ich sehe die kulturellen Unterschiede viel klarer, {{BLANK}} ich hier lebe.",
      "en": "I see the cultural differences much more clearly since I have been living here.",
      "uk": "Я бачу культурні відмінності набагато чіткіше, відколи живу тут.",
      "ru": "Я вижу культурные различия намного яснее, с тех пор как живу здесь."
    },
    "answer": {
      "de": "seit",
      "en": "since",
      "uk": "відколи",
      "ru": "с тех пор как"
    },
    "distractors": [
      "bis",
      "weil",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„seit“</b> markiert den Beginn einer Situation, die bis jetzt andauert.<br>„weil“ würde einen Grund nennen, keinen Zeitpunkt.",
      "en": "<b>„seit“</b> marks the beginning of a situation that continues until now.<br>„weil“ would give a reason, not a point in time.",
      "uk": "<b>„seit“</b> позначає початок ситуації, яка триває дотепер.<br>„weil“ називало б причину, а не момент часу.",
      "ru": "<b>„seit“</b> отмечает начало ситуации, которая длится по сей день.<br>„weil“ называло бы причину, а не момент времени."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "sb_049",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "{{BLANK}} wartest du hier? — Auf meinen Bruder.",
      "en": "Who are you waiting for here? — For my brother.",
      "uk": "На кого ти тут чекаєш? — На брата.",
      "ru": "Кого ты здесь ждёшь? — Брата."
    },
    "answer": {
      "de": "Auf wen",
      "en": "Who ... for",
      "uk": "На кого",
      "ru": "Кого"
    },
    "distractors": [
      "Worauf",
      "Auf was",
      "Wovon"
    ],
    "explanation": {
      "de": "Bei Fragen nach <b>Personen</b> benutzt man <b>„Präposition + wen/wem“</b>: „Auf wen“.<br>„Worauf“ würde nach einer Sache fragen, nicht nach einer Person.",
      "en": "For questions about <b>people</b>, you use <b>„preposition + wen/wem“</b>: „Auf wen“.<br>„Worauf“ would ask about a thing, not a person.",
      "uk": "У питаннях про <b>осіб</b> вживають <b>„прийменник + wen/wem“</b>: „Auf wen“.<br>„Worauf“ запитувало б про річ, а не про особу.",
      "ru": "В вопросах о <b>людях</b> употребляют <b>„предлог + wen/wem“</b>: „Auf wen“.<br>„Worauf“ спрашивало бы о вещи, а не о человеке."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_050",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "{{BLANK}} wartest du hier? — Auf den Bus.",
      "en": "What are you waiting for here? — For the bus.",
      "uk": "На що ти тут чекаєш? — На автобус.",
      "ru": "Чего ты здесь ждёшь? — Автобуса."
    },
    "answer": {
      "de": "Worauf",
      "en": "What ... for",
      "uk": "На що",
      "ru": "Чего"
    },
    "distractors": [
      "Auf wen",
      "Mit wem",
      "Wovon"
    ],
    "explanation": {
      "de": "Bei Fragen nach <b>Sachen</b> benutzt man das Pronominaladverb <b>„wo(r) + Präposition“</b>: „Worauf“.<br>„Auf wen“ würde nach einer Person fragen, hier geht es aber um einen Bus.",
      "en": "For questions about <b>things</b>, you use the pronominal adverb <b>„wo(r) + preposition“</b>: „Worauf“.<br>„Auf wen“ would ask about a person, but here it's about a bus.",
      "uk": "У питаннях про <b>речі</b> вживають прийменниковий прислівник <b>„wo(r) + прийменник“</b>: „Worauf“.<br>„Auf wen“ запитувало б про особу, а тут ідеться про автобус.",
      "ru": "В вопросах о <b>вещах</b> употребляют местоименное наречие <b>„wo(r) + предлог“</b>: „Worauf“.<br>„Auf wen“ спрашивало бы о человеке, но здесь речь об автобусе."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_051",
    "cat": "verben_praep_personen_sachen",
    "sentence": {
      "de": "Mit {{BLANK}} sprichst du eigentlich deine Muttersprache?",
      "en": "Who do you actually speak your native language with?",
      "uk": "З ким ти взагалі говориш своєю рідною мовою?",
      "ru": "С кем ты вообще говоришь на своём родном языке?"
    },
    "answer": {
      "de": "wem",
      "en": "who",
      "uk": "ким",
      "ru": "кем"
    },
    "distractors": [
      "was",
      "wen",
      "wo"
    ],
    "explanation": {
      "de": "Nach einer Präposition + Frage nach einer <b>Person</b> im Dativ steht <b>„wem“</b>: „Mit wem“.<br>„was“ würde nach einer Sache fragen, keiner Person.",
      "en": "After a preposition + question about a <b>person</b> in the dative, <b>„wem“</b> is used: „Mit wem“.<br>„was“ would ask about a thing, not a person.",
      "uk": "Після прийменника + питання про <b>особу</b> в давальному стоїть <b>„wem“</b>: „Mit wem“.<br>„was“ запитувало б про річ, а не про особу.",
      "ru": "После предлога + вопрос о <b>человеке</b> в дательном падеже стоит <b>„wem“</b>: „Mit wem“.<br>„was“ спрашивало бы о вещи, а не о человеке."
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "sb_052",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Ich habe gewartet, {{BLANK}} ich genug Erfahrung für den Job hatte.",
      "en": "I waited until I had enough experience for the job.",
      "uk": "Я чекав, доки не набрав достатньо досвіду для роботи.",
      "ru": "Я ждал, пока не набрал достаточно опыта для работы."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "weil",
      "obwohl"
    ],
    "explanation": {
      "de": "<b>„bis“</b> markiert den Endpunkt einer Wartezeit.<br>„seit“ würde einen Anfangspunkt in der Vergangenheit ausdrücken, kein Ende.",
      "en": "<b>„bis“</b> (until) marks the end point of a waiting period.<br>„seit“ would express a starting point in the past, not an end.",
      "uk": "<b>„bis“</b> (доки) позначає кінцеву точку періоду очікування.<br>„seit“ виражало б початкову точку в минулому, а не кінець.",
      "ru": "<b>„bis“</b> (пока) отмечает конечную точку периода ожидания.<br>„seit“ выражало бы начальную точку в прошлом, а не конец."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_053",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Der Fehler ist niemandem aufgefallen, {{BLANK}} der Chef die Liste noch einmal gelesen hat.",
      "en": "Nobody noticed the mistake until the boss read the list again.",
      "uk": "Помилку ніхто не помітив, доки керівник ще раз не прочитав список.",
      "ru": "Ошибку никто не заметил, пока начальник снова не прочитал список."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "damit",
      "weil"
    ],
    "explanation": {
      "de": "<b>„bis“</b> zeigt den Zeitpunkt, an dem sich die Situation ändert (der Fehler wird bemerkt).<br>„damit“ würde ein Ziel ausdrücken, keinen Zeitpunkt.",
      "en": "<b>„bis“</b> shows the point at which the situation changes (the mistake gets noticed).<br>„damit“ would express a purpose, not a point in time.",
      "uk": "<b>„bis“</b> показує момент, коли ситуація змінюється (помилку помічають).<br>„damit“ виражало б мету, а не момент часу.",
      "ru": "<b>„bis“</b> показывает момент, когда ситуация меняется (ошибку замечают).<br>„damit“ выражало бы цель, а не момент времени."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_054",
    "cat": "nebensatz_mit_bis",
    "sentence": {
      "de": "Wir bleiben hier, {{BLANK}} der Regen aufhört.",
      "en": "We'll stay here until the rain stops.",
      "uk": "Ми залишимося тут, доки не припиниться дощ.",
      "ru": "Мы останемся здесь, пока не закончится дождь."
    },
    "answer": {
      "de": "bis",
      "en": "until",
      "uk": "доки",
      "ru": "пока"
    },
    "distractors": [
      "seit",
      "obwohl",
      "wenn"
    ],
    "explanation": {
      "de": "<b>„bis“</b> nennt den Zeitpunkt, an dem eine Handlung endet.<br>„wenn“ würde eine wiederholte oder allgemeine Bedingung ausdrücken, hier passt aber der klare Endpunkt „bis“.",
      "en": "<b>„bis“</b> states the point at which an action ends.<br>„wenn“ would express a repeated or general condition, but the clear end point „bis“ fits better here.",
      "uk": "<b>„bis“</b> називає момент, коли дія закінчується.<br>„wenn“ виражало б повторювану чи загальну умову, а тут пасує чіткий кінцевий момент „bis“.",
      "ru": "<b>„bis“</b> называет момент, когда действие заканчивается.<br>„wenn“ выражало бы повторяющееся или общее условие, а здесь подходит чёткий конечный момент „bis“."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "sb_055",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "{{BLANK}} hast du dich beim Kurs am meisten geärgert?",
      "en": "What were you most annoyed about in the course?",
      "uk": "Через що ти найбільше злився на курсі?",
      "ru": "Из-за чего ты больше всего злился на курсе?"
    },
    "answer": {
      "de": "Worüber",
      "en": "What ... about",
      "uk": "Через що",
      "ru": "Из-за чего"
    },
    "distractors": [
      "Über wen",
      "Wovon",
      "Womit"
    ],
    "explanation": {
      "de": "Bei einer Frage nach einer <b>Sache</b> mit „sich ärgern über“ benutzt man das Pronominaladverb <b>„worüber“</b>.<br>„Über wen“ würde nach einer Person fragen, hier geht es aber um eine Sache/Situation.",
      "en": "For a question about a <b>thing</b> with „sich ärgern über“, the pronominal adverb <b>„worüber“</b> is used.<br>„Über wen“ would ask about a person, but here it's about a thing/situation.",
      "uk": "У питанні про <b>річ</b> з „sich ärgern über“ вживають прийменниковий прислівник <b>„worüber“</b>.<br>„Über wen“ запитувало б про особу, а тут ідеться про річ/ситуацію.",
      "ru": "В вопросе о <b>вещи</b> с „sich ärgern über“ употребляют местоименное наречие <b>„worüber“</b>.<br>„Über wen“ спрашивало бы о человеке, но здесь речь о вещи/ситуации."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_056",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "Das Thema ist bei uns ein Tabu, {{BLANK}} reden wir fast nie.",
      "en": "The topic is a taboo for us; we almost never talk about it.",
      "uk": "Ця тема в нас табу, про це ми майже ніколи не говоримо.",
      "ru": "Эта тема у нас табу, об этом мы почти никогда не говорим."
    },
    "answer": {
      "de": "darüber",
      "en": "about it",
      "uk": "про це",
      "ru": "об этом"
    },
    "distractors": [
      "dafür",
      "damit",
      "davon"
    ],
    "explanation": {
      "de": "<b>„darüber“</b> (Pronominaladverb) ersetzt „über das Thema“.<br>„damit“ würde ein Mittel oder Werkzeug ausdrücken, nicht das Gesprächsthema.",
      "en": "<b>„darüber“</b> (pronominal adverb) replaces „über das Thema“ (about the topic).<br>„damit“ would express a means or tool, not the topic of conversation.",
      "uk": "<b>„darüber“</b> (прийменниковий прислівник) замінює „über das Thema“.<br>„damit“ виражало б засіб чи інструмент, а не тему розмови.",
      "ru": "<b>„darüber“</b> (местоименное наречие) заменяет „über das Thema“.<br>„damit“ выражало бы средство или инструмент, а не тему разговора."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_057",
    "cat": "praepositionaladverbien_b1",
    "sentence": {
      "de": "Es gab ein Missverständnis, aber {{BLANK}} haben wir schon gesprochen.",
      "en": "There was a misunderstanding, but we have already talked about it.",
      "uk": "Було непорозуміння, але про це ми вже поговорили.",
      "ru": "Было недопонимание, но об этом мы уже поговорили."
    },
    "answer": {
      "de": "darüber",
      "en": "about it",
      "uk": "про це",
      "ru": "об этом"
    },
    "distractors": [
      "dafür",
      "dabei",
      "davon"
    ],
    "explanation": {
      "de": "<b>„darüber“</b> ersetzt „über das Missverständnis“ und bezieht sich auf eine schon genannte Sache.<br>„dabei“ würde eine gleichzeitige Handlung ausdrücken, kein Gesprächsthema.",
      "en": "<b>„darüber“</b> replaces „über das Missverständnis“ and refers to something already mentioned.<br>„dabei“ would express a simultaneous action, not a topic of conversation.",
      "uk": "<b>„darüber“</b> замінює „über das Missverständnis“ і стосується вже згаданої речі.<br>„dabei“ виражало б одночасну дію, а не тему розмови.",
      "ru": "<b>„darüber“</b> заменяет „über das Missverständnis“ и относится к уже упомянутой вещи.<br>„dabei“ выражало бы одновременное действие, а не тему разговора."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "sb_058",
    "cat": "futur_werden",
    "sentence": {
      "de": "Die Untersuchung {{BLANK}} morgen früh stattfinden.",
      "en": "The examination will take place tomorrow morning.",
      "uk": "Обстеження відбудеться завтра вранці.",
      "ru": "Обследование будет проходить завтра утром."
    },
    "answer": {
      "de": "wird",
      "en": "will",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Das Futur I wird mit <b>„werden“</b> + Infinitiv gebildet: „wird … stattfinden“.<br>„ist“ wäre Präsens und drückt keine sichere Zukunftsaussage aus.",
      "en": "The future tense (Futur I) is formed with <b>„werden“</b> + infinitive: „wird … stattfinden“.<br>„ist“ would be present tense and doesn't express a clear statement about the future.",
      "uk": "Майбутній час I утворюється за допомогою <b>„werden“</b> + інфінітив: „wird … stattfinden“.<br>„ist“ був би теперішнім часом і не виражає чіткого твердження про майбутнє.",
      "ru": "Будущее время I образуется с помощью <b>„werden“</b> + инфинитив: „wird … stattfinden“.<br>„ist“ было бы настоящим временем и не выражает чёткого утверждения о будущем."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_059",
    "cat": "futur_werden",
    "sentence": {
      "de": "Der Patient {{BLANK}} morgen auf eine andere Station verlegt.",
      "en": "The patient will be transferred to another ward tomorrow.",
      "uk": "Пацієнта завтра переведуть до іншого відділення.",
      "ru": "Пациента завтра переведут в другое отделение."
    },
    "answer": {
      "de": "wird",
      "en": "will be",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Hier steht <b>„wird“</b> als Teil des Passiv-Futurs: „wird … verlegt“ (Futur Passiv).<br>„hat“ würde eine andere Zeitform (Perfekt) einleiten, die hier nicht passt.",
      "en": "Here <b>„wird“</b> is part of the future passive: „wird … verlegt“ (future passive).<br>„hat“ would introduce a different tense (perfect), which doesn't fit here.",
      "uk": "Тут <b>„wird“</b> є частиною пасивного майбутнього: „wird … verlegt“ (пасивний футур).<br>„hat“ вводило б інший час (перфект), який тут не підходить.",
      "ru": "Здесь <b>„wird“</b> является частью пассивного будущего: „wird … verlegt“ (пассивный футур).<br>„hat“ вводило бы другое время (перфект), которое здесь не подходит."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_060",
    "cat": "futur_werden",
    "sentence": {
      "de": "Nächste Woche {{BLANK}} wir eine neue Versicherung abschließen.",
      "en": "Next week we will take out a new insurance policy.",
      "uk": "Наступного тижня ми укладемо нове страхування.",
      "ru": "На следующей неделе мы заключим новое страхование."
    },
    "answer": {
      "de": "werden",
      "en": "will",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "haben",
      "waren"
    ],
    "explanation": {
      "de": "Futur I: <b>„werden“</b> + Infinitiv („abschließen“) drückt eine geplante zukünftige Handlung aus.<br>„haben“ würde ein Perfekt einleiten, keine Zukunft.",
      "en": "Future I: <b>„werden“</b> + infinitive („abschließen“) expresses a planned future action.<br>„haben“ would introduce a perfect tense, not the future.",
      "uk": "Футур I: <b>„werden“</b> + інфінітив („abschließen“) виражає заплановану майбутню дію.<br>„haben“ вводило б перфект, а не майбутній час.",
      "ru": "Футур I: <b>„werden“</b> + инфинитив („abschließen“) выражает запланированное будущее действие.<br>„haben“ вводило бы перфект, а не будущее время."
    },
    "gram": "futur_werden"
  },
  {
    "id": "sb_061",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Bei einem Notfall muss man {{BLANK}} ruhig bleiben, sondern auch schnell die 112 anrufen.",
      "en": "In an emergency, you must not only stay calm but also call 112 quickly.",
      "uk": "У надзвичайній ситуації потрібно не тільки залишатися спокійним, а й швидко зателефонувати на 112.",
      "ru": "В экстренной ситуации нужно не только оставаться спокойным, но и быстро позвонить по номеру 112."
    },
    "answer": {
      "de": "nicht nur",
      "en": "not only",
      "uk": "не тільки",
      "ru": "не только"
    },
    "distractors": [
      "weder",
      "sowohl",
      "entweder"
    ],
    "explanation": {
      "de": "<b>„nicht nur … sondern auch“</b> verbindet zwei wichtige, positive Handlungen.<br>„weder“ würde beide Handlungen verneinen, was hier nicht passt.",
      "en": "<b>„nicht nur … sondern auch“</b> (not only … but also) connects two important, positive actions.<br>„weder“ would negate both actions, which doesn't fit here.",
      "uk": "<b>„nicht nur … sondern auch“</b> (не тільки … а й) поєднує дві важливі, позитивні дії.<br>„weder“ заперечувало б обидві дії, що тут не підходить.",
      "ru": "<b>„nicht nur … sondern auch“</b> (не только … но и) соединяет два важных, положительных действия.<br>„weder“ отрицало бы оба действия, что здесь не подходит."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_062",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Er hat sich beim Sturz nicht nur am Arm, {{BLANK}} auch am Kopf verletzt.",
      "en": "During the fall, he not only hurt his arm but also his head.",
      "uk": "Під час падіння він не тільки травмував руку, а й голову.",
      "ru": "Во время падения он не только травмировал руку, но и голову."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а й",
      "ru": "но и"
    },
    "distractors": [
      "aber",
      "oder",
      "doch"
    ],
    "explanation": {
      "de": "Nach <b>„nicht nur“</b> folgt immer <b>„sondern auch“</b>, nie „aber“.<br>„aber“ würde einen einfachen Gegensatz ausdrücken, nicht die feste Paarstruktur.",
      "en": "After <b>„nicht nur“</b>, <b>„sondern auch“</b> always follows, never „aber“.<br>„aber“ would express a simple contrast, not the fixed paired structure.",
      "uk": "Після <b>„nicht nur“</b> завжди йде <b>„sondern auch“</b>, ніколи „aber“.<br>„aber“ виражало б просте протиставлення, а не сталу парну конструкцію.",
      "ru": "После <b>„nicht nur“</b> всегда следует <b>„sondern auch“</b>, никогда „aber“.<br>„aber“ выражало бы простое противопоставление, а не устойчивую парную конструкцию."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_063",
    "cat": "nicht_nur_sondern_auch",
    "sentence": {
      "de": "Im Unfall wurden nicht nur die Fahrer, {{BLANK}} auch zwei Fußgänger verletzt.",
      "en": "In the accident, not only the drivers but also two pedestrians were injured.",
      "uk": "В аварії постраждали не тільки водії, а й двоє пішоходів.",
      "ru": "В аварии пострадали не только водители, но и двое пешеходов."
    },
    "answer": {
      "de": "sondern",
      "en": "but",
      "uk": "а й",
      "ru": "но и"
    },
    "distractors": [
      "aber",
      "oder",
      "und"
    ],
    "explanation": {
      "de": "Die feste Konstruktion ist <b>„nicht nur …, sondern auch …“</b>.<br>„und“ würde nur eine einfache Aufzählung ausdrücken, keine besondere Betonung.",
      "en": "The fixed construction is <b>„nicht nur …, sondern auch …“</b>.<br>„und“ would only express a simple list, without special emphasis.",
      "uk": "Стала конструкція — <b>„nicht nur …, sondern auch …“</b>.<br>„und“ виражало б лише просте перелічення, без особливого наголосу.",
      "ru": "Устойчивая конструкция — <b>„nicht nur …, sondern auch …“</b>.<br>„und“ выражало бы только простое перечисление, без особого акцента."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "sb_064",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Sie füllte das Formular sorgfältig aus, {{BLANK}} keine Fehler zu machen.",
      "en": "She filled in the form carefully in order not to make any mistakes.",
      "uk": "Вона уважно заповнила формуляр, щоб не зробити помилок.",
      "ru": "Она внимательно заполнила формуляр, чтобы не сделать ошибок."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "weil",
      "dass"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> steht, wenn Subjekt des Haupt- und Nebensatzes gleich sind (sie füllt aus, sie macht keine Fehler).<br>„damit“ würde man benutzen, wenn die Subjekte unterschiedlich wären.",
      "en": "<b>„um … zu“</b> is used when the subject of the main and subordinate clause is the same (she fills in, she makes no mistakes).<br>„damit“ would be used if the subjects were different.",
      "uk": "<b>„um … zu“</b> вживають, коли підмет головного й підрядного речення однаковий (вона заповнює, вона не робить помилок).<br>„damit“ вживали б, якби підмети різнилися.",
      "ru": "<b>„um … zu“</b> употребляют, когда подлежащее главного и придаточного предложения одинаковое (она заполняет, она не делает ошибок).<br>„damit“ употребляли бы, если бы подлежащие были разными."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_065",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Er brauchte den Verband, {{BLANK}} die Wunde zu schützen.",
      "en": "He needed the bandage in order to protect the wound.",
      "uk": "Йому потрібна була повʼязка, щоб захистити рану.",
      "ru": "Ему нужна была повязка, чтобы защитить рану."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> drückt den Zweck einer Handlung aus, wenn das Subjekt gleich bleibt.<br>„weil“ würde einen Grund nennen, keinen Zweck.",
      "en": "<b>„um … zu“</b> expresses the purpose of an action when the subject stays the same.<br>„weil“ would give a reason, not a purpose.",
      "uk": "<b>„um … zu“</b> виражає мету дії, коли підмет залишається тим самим.<br>„weil“ називало б причину, а не мету.",
      "ru": "<b>„um … zu“</b> выражает цель действия, когда подлежащее остаётся тем же.<br>„weil“ называло бы причину, а не цель."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_066",
    "cat": "satz_mit_um_zu",
    "sentence": {
      "de": "Wir haben Energie gespart, {{BLANK}} die Umwelt zu schützen.",
      "en": "We saved energy in order to protect the environment.",
      "uk": "Ми економили енергію, щоб захистити довкілля.",
      "ru": "Мы экономили энергию, чтобы защитить окружающую среду."
    },
    "answer": {
      "de": "um",
      "en": "in order",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "damit",
      "dass",
      "ob"
    ],
    "explanation": {
      "de": "<b>„um … zu“</b> passt, weil das Subjekt (wir) in beiden Satzteilen gleich ist.<br>„damit“ wäre nötig, wenn ein anderes Subjekt den Zweck erfüllt.",
      "en": "<b>„um … zu“</b> fits because the subject (we) is the same in both parts of the sentence.<br>„damit“ would be needed if a different subject fulfilled the purpose.",
      "uk": "<b>„um … zu“</b> підходить, бо підмет (ми) однаковий в обох частинах речення.<br>„damit“ було б потрібне, якби мету виконував інший підмет.",
      "ru": "<b>„um … zu“</b> подходит, потому что подлежащее (мы) одинаковое в обеих частях предложения.<br>„damit“ было бы нужно, если бы цель выполняло другое подлежащее."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "sb_067",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Der Arzt erklärte die Prognose genau, {{BLANK}} die Familie alles versteht.",
      "en": "The doctor explained the prognosis precisely so that the family understands everything.",
      "uk": "Лікар детально пояснив прогноз, щоб родина все зрозуміла.",
      "ru": "Врач подробно объяснил прогноз, чтобы семья всё поняла."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "weil",
      "dass"
    ],
    "explanation": {
      "de": "<b>„damit“</b> passt, weil das Subjekt des Nebensatzes (die Familie) anders ist als das Subjekt des Hauptsatzes (der Arzt).<br>„um … zu“ würde nur bei gleichem Subjekt funktionieren.",
      "en": "<b>„damit“</b> fits because the subject of the subordinate clause (the family) is different from the subject of the main clause (the doctor).<br>„um … zu“ would only work with the same subject.",
      "uk": "<b>„damit“</b> підходить, бо підмет підрядного речення (родина) відрізняється від підмета головного (лікар).<br>„um … zu“ працювало б лише з однаковим підметом.",
      "ru": "<b>„damit“</b> подходит, потому что подлежащее придаточного (семья) отличается от подлежащего главного (врач).<br>„um … zu“ работало бы только с одинаковым подлежащим."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_068",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Die Ärztin muss ihn heute operieren, {{BLANK}} sich der Zustand nicht verschlechtert.",
      "en": "The doctor has to operate on him today so that his condition doesn't get worse.",
      "uk": "Лікарка має прооперувати його сьогодні, щоб стан не погіршився.",
      "ru": "Врач должна прооперировать его сегодня, чтобы состояние не ухудшилось."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "weil",
      "ob"
    ],
    "explanation": {
      "de": "<b>„damit“</b> nennt das Ziel der Operation aus der Sicht eines anderen Subjekts (der Zustand).<br>„weil“ würde einen Grund nennen, kein Ziel.",
      "en": "<b>„damit“</b> states the goal of the operation from the perspective of a different subject (the condition).<br>„weil“ would give a reason, not a goal.",
      "uk": "<b>„damit“</b> називає мету операції з погляду іншого підмета (стан).<br>„weil“ називало б причину, а не мету.",
      "ru": "<b>„damit“</b> называет цель операции с точки зрения другого подлежащего (состояние).<br>„weil“ называло бы причину, а не цель."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_069",
    "cat": "nebensatz_mit_damit_wdh_b1",
    "sentence": {
      "de": "Sie sendet die Schadensmeldung sofort, {{BLANK}} die Versicherung schnell reagieren kann.",
      "en": "She sends the damage report immediately so that the insurance can react quickly.",
      "uk": "Вона негайно надсилає повідомлення про шкоду, щоб страхова могла швидко реагувати.",
      "ru": "Она немедленно отправляет сообщение об ущербе, чтобы страховая могла быстро отреагировать."
    },
    "answer": {
      "de": "damit",
      "en": "so that",
      "uk": "щоб",
      "ru": "чтобы"
    },
    "distractors": [
      "um",
      "dass",
      "ob"
    ],
    "explanation": {
      "de": "<b>„damit“</b> passt, weil das Subjekt im Nebensatz (die Versicherung) anders ist als im Hauptsatz (sie).<br>„dass“ würde nur eine Tatsache nennen, kein Ziel.",
      "en": "<b>„damit“</b> fits because the subject in the subordinate clause (the insurance) is different from the main clause (she).<br>„dass“ would only state a fact, not a goal.",
      "uk": "<b>„damit“</b> підходить, бо підмет у підрядному (страхова) відрізняється від підмета головного (вона).<br>„dass“ називало б лише факт, а не мету.",
      "ru": "<b>„damit“</b> подходит, потому что подлежащее в придаточном (страховая) отличается от главного (она).<br>„dass“ называло бы только факт, а не цель."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "sb_070",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "In Deutschland {{BLANK}} der Abfall sehr genau getrennt.",
      "en": "In Germany, waste is sorted very precisely.",
      "uk": "У Німеччині сміття дуже точно сортують.",
      "ru": "В Германии мусор очень точно сортируют."
    },
    "answer": {
      "de": "wird",
      "en": "is",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "Passiv Präsens wird mit <b>„werden“</b> + Partizip II gebildet: „wird … getrennt“.<br>„ist“ würde eher einen Zustand beschreiben (Zustandspassiv), nicht den Vorgang.",
      "en": "The present passive is formed with <b>„werden“</b> + past participle: „wird … getrennt“.<br>„ist“ would describe more of a state (stative passive), not the process.",
      "uk": "Пасив теперішнього часу утворюється з <b>„werden“</b> + Partizip II: „wird … getrennt“.<br>„ist“ радше описувало б стан, а не процес.",
      "ru": "Пассив настоящего времени образуется с <b>„werden“</b> + Partizip II: „wird … getrennt“.<br>„ist“ скорее описывал бы состояние, а не процесс."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_071",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "Der Energieverbrauch {{BLANK}} in unserem Haus jetzt genau kontrolliert.",
      "en": "The energy consumption in our house is now precisely monitored.",
      "uk": "Енергоспоживання в нашому будинку зараз точно контролюють.",
      "ru": "Энергопотребление в нашем доме сейчас точно контролируют."
    },
    "answer": {
      "de": "wird",
      "en": "is",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "hat",
      "war"
    ],
    "explanation": {
      "de": "<b>„wird … kontrolliert“</b> ist Passiv Präsens und beschreibt einen laufenden Vorgang.<br>„hat“ wäre ein Perfekt-Hilfsverb, das hier nicht passt.",
      "en": "<b>„wird … kontrolliert“</b> is present passive and describes an ongoing process.<br>„hat“ would be a perfect auxiliary verb, which doesn't fit here.",
      "uk": "<b>„wird … kontrolliert“</b> — це пасив теперішнього часу, що описує поточний процес.<br>„hat“ було б допоміжним дієсловом перфекта, яке тут не підходить.",
      "ru": "<b>„wird … kontrolliert“</b> — это пассив настоящего времени, описывающий текущий процесс.<br>„hat“ было бы вспомогательным глаголом перфекта, который здесь не подходит."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_072",
    "cat": "passiv_praesens_b1",
    "sentence": {
      "de": "Alte Flaschen {{BLANK}} zu neuem Glas verarbeitet.",
      "en": "Old bottles are processed into new glass.",
      "uk": "Старі бутилки перетворюють на нове скло.",
      "ru": "Старые бутылки превращают в новое стекло."
    },
    "answer": {
      "de": "werden",
      "en": "are",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "ist",
      "sind",
      "hat"
    ],
    "explanation": {
      "de": "Bei Plural-Subjekten steht <b>„werden“</b> (nicht „wird“): „Flaschen werden verarbeitet“.<br>„sind“ würde einen bereits abgeschlossenen Zustand beschreiben (Zustandspassiv), nicht den Vorgang.",
      "en": "With plural subjects, <b>„werden“</b> is used (not „wird“): „Flaschen werden verarbeitet“.<br>„sind“ would describe an already completed state (stative passive), not the process.",
      "uk": "З підметами у множині вживають <b>„werden“</b> (не „wird“): „Flaschen werden verarbeitet“.<br>„sind“ описував би вже завершений стан, а не процес.",
      "ru": "С подлежащими во множественном числе употребляют <b>„werden“</b> (не „wird“): „Flaschen werden verarbeitet“.<br>„sind“ описывал бы уже завершённое состояние, а не процесс."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "sb_073",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} in diesem Jahr viel Plastikmüll vermieden.",
      "en": "This year, we have avoided a lot of plastic waste.",
      "uk": "Цього року ми уникли багато пластикового сміття.",
      "ru": "В этом году мы избежали много пластикового мусора."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "hatten"
    ],
    "explanation": {
      "de": "<b>„vermeiden“</b> bildet das Perfekt mit <b>„haben“</b>: „haben … vermieden“.<br>„sind“ wird nur bei Verben der Bewegung oder Zustandsänderung benutzt.",
      "en": "<b>„vermeiden“</b> forms the perfect tense with <b>„haben“</b>: „haben … vermieden“.<br>„sind“ is only used with verbs of motion or change of state.",
      "uk": "<b>„vermeiden“</b> утворює перфект із <b>„haben“</b>: „haben … vermieden“.<br>„sind“ вживається лише з дієсловами руху чи зміни стану.",
      "ru": "<b>„vermeiden“</b> образует перфект с <b>„haben“</b>: „haben … vermieden“.<br>„sind“ употребляется только с глаголами движения или изменения состояния."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_074",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Wir {{BLANK}} unser Auto verkauft und sind auf ein Fahrrad umgestiegen.",
      "en": "We have sold our car and switched to a bicycle.",
      "uk": "Ми продали авто і перейшли на велосипед.",
      "ru": "Мы продали машину и перешли на велосипед."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "hatten"
    ],
    "explanation": {
      "de": "<b>„verkaufen“</b> braucht im Perfekt <b>„haben“</b>, während „umsteigen“ (Bewegung/Veränderung) „sind“ braucht.<br>„sind“ wäre hier für „verkaufen“ falsch.",
      "en": "<b>„verkaufen“</b> needs <b>„haben“</b> in the perfect, while „umsteigen“ (motion/change) needs „sind“.<br>„sind“ would be wrong here for „verkaufen“.",
      "uk": "<b>„verkaufen“</b> у перфекті потребує <b>„haben“</b>, тоді як „umsteigen“ (рух/зміна) потребує „sind“.<br>„sind“ тут було б неправильним для „verkaufen“.",
      "ru": "<b>„verkaufen“</b> в перфекте требует <b>„haben“</b>, тогда как „umsteigen“ (движение/изменение) требует „sind“.<br>„sind“ здесь было бы неправильным для „verkaufen“."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_075",
    "cat": "perfekt_wdh_b1",
    "sentence": {
      "de": "Habt ihr in diesem Jahr schon Energie gespart? — Ja, wir {{BLANK}} unsere Lampen ausgetauscht.",
      "en": "Have you already saved energy this year? — Yes, we have replaced our lamps.",
      "uk": "Ви вже цього року економили енергію? — Так, ми замінили лампи.",
      "ru": "Вы уже в этом году экономили энергию? — Да, мы заменили лампы."
    },
    "answer": {
      "de": "haben",
      "en": "have",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "sind",
      "werden",
      "waren"
    ],
    "explanation": {
      "de": "<b>„austauschen“</b> bildet das Perfekt mit <b>„haben“</b> (transitives Verb mit Akkusativobjekt).<br>„sind“ würde nur bei intransitiven Bewegungsverben stehen.",
      "en": "<b>„austauschen“</b> forms the perfect with <b>„haben“</b> (transitive verb with accusative object).<br>„sind“ would only be used with intransitive verbs of motion.",
      "uk": "<b>„austauschen“</b> утворює перфект із <b>„haben“</b> (перехідне дієслово зі знахідним додатком).<br>„sind“ вживалося б лише з неперехідними дієсловами руху.",
      "ru": "<b>„austauschen“</b> образует перфект с <b>„haben“</b> (переходный глагол с винительным дополнением).<br>„sind“ употреблялось бы только с непереходными глаголами движения."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "sb_076",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Ich freue mich schon sehr {{BLANK}} das Festival nächste Woche.",
      "en": "I am already really looking forward to the festival next week.",
      "uk": "Я вже дуже чекаю на фестиваль наступного тижня.",
      "ru": "Я уже очень жду фестиваль на следующей неделе."
    },
    "answer": {
      "de": "auf",
      "en": "to",
      "uk": "на",
      "ru": "-"
    },
    "distractors": [
      "für",
      "über",
      "an"
    ],
    "explanation": {
      "de": "<b>„sich freuen auf“</b> (+Akkusativ) benutzt man für etwas, das noch kommt (Zukunft).<br>„über“ würde man für etwas benutzen, das schon passiert ist.",
      "en": "<b>„sich freuen auf“</b> (+accusative) is used for something that is still to come (future).<br>„über“ would be used for something that has already happened.",
      "uk": "<b>„sich freuen auf“</b> (+знахідний) вживають для чогось, що ще має статися (майбутнє).<br>„über“ вживали б для того, що вже сталося.",
      "ru": "<b>„sich freuen auf“</b> (+винительный) употребляют для чего-то, что ещё предстоит (будущее).<br>„über“ употребляли бы для того, что уже произошло."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_077",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Trotz des unsicheren Wetters wollten viele Leute {{BLANK}} der Führung teilnehmen.",
      "en": "Despite the uncertain weather, many people wanted to take part in the tour.",
      "uk": "Незважаючи на непевну погоду, багато людей хотіли взяти участь в екскурсії.",
      "ru": "Несмотря на неопределённую погоду, многие люди хотели принять участие в экскурсии."
    },
    "answer": {
      "de": "an",
      "en": "in",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "bei",
      "mit",
      "für"
    ],
    "explanation": {
      "de": "<b>„teilnehmen an“</b> (+Dativ) ist eine feste Verb-Präposition-Verbindung.<br>„bei“ passt hier nicht zu diesem festen Verb.",
      "en": "<b>„teilnehmen an“</b> (+dative) is a fixed verb-preposition combination.<br>„bei“ doesn't fit with this fixed verb here.",
      "uk": "<b>„teilnehmen an“</b> (+давальний) — стале поєднання дієслова з прийменником.<br>„bei“ тут не пасує до цього сталого дієслова.",
      "ru": "<b>„teilnehmen an“</b> (+дательный) — устойчивое сочетание глагола с предлогом.<br>„bei“ здесь не подходит к этому устойчивому глаголу."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_078",
    "cat": "verben_mit_praep_wdh_b1",
    "sentence": {
      "de": "Die Nachbarn tauschen sich oft {{BLANK}} unbekannte Künstler aus.",
      "en": "The neighbours often exchange views about unknown artists.",
      "uk": "Сусіди часто обмінюються думками про невідомих митців.",
      "ru": "Соседи часто обмениваются мнениями о неизвестных художниках."
    },
    "answer": {
      "de": "über",
      "en": "about",
      "uk": "про",
      "ru": "о"
    },
    "distractors": [
      "von",
      "für",
      "an"
    ],
    "explanation": {
      "de": "<b>„sich austauschen über“</b> (+Akkusativ) ist eine feste Verb-Präposition-Verbindung für Gesprächsthemen.<br>„von“ passt hier grammatisch nicht zu „austauschen“.",
      "en": "<b>„sich austauschen über“</b> (+accusative) is a fixed verb-preposition combination for conversation topics.<br>„von“ doesn't fit grammatically with „austauschen“ here.",
      "uk": "<b>„sich austauschen über“</b> (+знахідний) — стале поєднання дієслова з прийменником для тем розмови.<br>„von“ тут граматично не пасує до „austauschen“.",
      "ru": "<b>„sich austauschen über“</b> (+винительный) — устойчивое сочетание глагола с предлогом для тем разговора.<br>„von“ здесь грамматически не подходит к „austauschen“."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "sb_079",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} handelt die neue Ausstellung im Museum?",
      "en": "What is the new exhibition at the museum about?",
      "uk": "Про що нова виставка в музеї?",
      "ru": "О чём новая выставка в музее?"
    },
    "answer": {
      "de": "Wovon",
      "en": "What ... about",
      "uk": "Про що",
      "ru": "О чём"
    },
    "distractors": [
      "Worüber",
      "Womit",
      "Wofür"
    ],
    "explanation": {
      "de": "<b>„handeln von“</b> ist eine feste Verbindung, deshalb fragt man mit <b>„wovon“</b>.<br>„worüber“ würde zu einem anderen Verb passen, z. B. „sprechen über“.",
      "en": "<b>„handeln von“</b> (to be about) is a fixed combination, so you ask with <b>„wovon“</b>.<br>„worüber“ would fit a different verb, e.g. „sprechen über“.",
      "uk": "<b>„handeln von“</b> — стале поєднання, тому запитують за допомогою <b>„wovon“</b>.<br>„worüber“ пасувало б до іншого дієслова, напр. „sprechen über“.",
      "ru": "<b>„handeln von“</b> — устойчивое сочетание, поэтому спрашивают с помощью <b>„wovon“</b>.<br>„worüber“ подходило бы к другому глаголу, напр. „sprechen über“."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_080",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} bezieht sich das neue Angebot der Bibliothek genau?",
      "en": "What exactly does the library's new offer refer to?",
      "uk": "До чого саме стосується нова пропозиція бібліотеки?",
      "ru": "К чему именно относится новое предложение библиотеки?"
    },
    "answer": {
      "de": "Worauf",
      "en": "What ... to",
      "uk": "До чого",
      "ru": "К чему"
    },
    "distractors": [
      "Wovon",
      "Womit",
      "Wofür"
    ],
    "explanation": {
      "de": "<b>„sich beziehen auf“</b> braucht das Pronominaladverb <b>„worauf“</b> in der Frage.<br>„wovon“ würde zu einem anderen Verb passen, hier aber nicht.",
      "en": "<b>„sich beziehen auf“</b> (to refer to) needs the pronominal adverb <b>„worauf“</b> in the question.<br>„wovon“ would fit a different verb, but not here.",
      "uk": "<b>„sich beziehen auf“</b> потребує прийменникового прислівника <b>„worauf“</b> у питанні.<br>„wovon“ пасувало б до іншого дієслова, але не тут.",
      "ru": "<b>„sich beziehen auf“</b> требует местоименного наречия <b>„worauf“</b> в вопросе.<br>„wovon“ подходило бы к другому глаголу, но не здесь."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_081",
    "cat": "fragewoerter_wor_dar",
    "sentence": {
      "de": "{{BLANK}} warst du beim Festival am meisten begeistert?",
      "en": "What were you most enthusiastic about at the festival?",
      "uk": "Чим ти був найбільше захоплений на фестивалі?",
      "ru": "Чем ты был больше всего увлечён на фестивале?"
    },
    "answer": {
      "de": "Wovon",
      "en": "What ... about",
      "uk": "Чим",
      "ru": "Чем"
    },
    "distractors": [
      "Worüber",
      "Woran",
      "Womit"
    ],
    "explanation": {
      "de": "<b>„begeistert sein von“</b> ist eine feste Verbindung, deshalb <b>„wovon“</b>.<br>„woran“ würde zu einem anderen Verb passen, z. B. „denken an“.",
      "en": "<b>„begeistert sein von“</b> (to be enthusiastic about) is a fixed combination, hence <b>„wovon“</b>.<br>„woran“ would fit a different verb, e.g. „denken an“.",
      "uk": "<b>„begeistert sein von“</b> — стале поєднання, тому <b>„wovon“</b>.<br>„woran“ пасувало б до іншого дієслова, напр. „denken an“.",
      "ru": "<b>„begeistert sein von“</b> — устойчивое сочетание, поэтому <b>„wovon“</b>.<br>„woran“ подходило бы к другому глаголу, напр. „denken an“."
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "sb_082",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie lange dauert die Führung {{BLANK}} genau?",
      "en": "So, how long does the tour actually take?",
      "uk": "А скільки взагалі триває екскурсія?",
      "ru": "А сколько вообще длится экскурсия?"
    },
    "answer": {
      "de": "denn",
      "en": "actually",
      "uk": "взагалі",
      "ru": "вообще"
    },
    "distractors": [
      "doch",
      "ja",
      "mal"
    ],
    "explanation": {
      "de": "<b>„denn“</b> in Fragen zeigt echtes, freundliches Interesse.<br>„doch“ passt eher zu Aussagesätzen oder Aufforderungen, nicht zu dieser Frageform.",
      "en": "<b>„denn“</b> in questions shows genuine, friendly interest.<br>„doch“ fits better with statements or requests, not this type of question.",
      "uk": "<b>„denn“</b> у питаннях показує щирий, приязний інтерес.<br>„doch“ більше пасує до тверджень чи прохань, а не до цього типу питання.",
      "ru": "<b>„denn“</b> в вопросах показывает искренний, дружеский интерес.<br>„doch“ больше подходит к утверждениям или просьбам, а не к этому типу вопроса."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "sb_083",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie viel kostet der Eintritt {{BLANK}} für die Führung?",
      "en": "So, how much does admission for the tour actually cost?",
      "uk": "А скільки взагалі коштує вхід на екскурсію?",
      "ru": "А сколько вообще стоит вход на экскурсию?"
    },
    "answer": {
      "de": "eigentlich",
      "en": "actually",
      "uk": "взагалі",
      "ru": "вообще"
    },
    "distractors": [
      "schon",
      "noch",
      "doch"
    ],
    "explanation": {
      "de": "<b>„eigentlich“</b> zeigt in einer Frage beiläufiges, echtes Interesse.<br>„schon“ würde eher Ungeduld oder eine andere Bedeutung ausdrücken.",
      "en": "<b>„eigentlich“</b> in a question shows casual, genuine interest.<br>„schon“ would rather express impatience or a different meaning.",
      "uk": "<b>„eigentlich“</b> у питанні показує невимушений, щирий інтерес.<br>„schon“ радше виражало б нетерпіння чи інше значення.",
      "ru": "<b>„eigentlich“</b> в вопросе показывает непринуждённый, искренний интерес.<br>„schon“ скорее выражало бы нетерпение или другое значение."
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "sb_084",
    "cat": "interesse_denn_eigentlich",
    "sentence": {
      "de": "Wie war {{BLANK}} die Führung durch die Bibliothek?",
      "en": "So, how was the library tour?",
      "uk": "А яка була екскурсія по бібліотеці?",
      "ru": "А как прошла экскурсия по библиотеке?"
    },
    "answer": {
      "de": "denn",
      "en": "-",
      "uk": "-",
      "ru": "-"
    },
    "distractors": [
      "doch",
      "ja",
      "schon"
    ],
    "explanation": {
      "de": "<b>„denn“</b> macht die Frage freundlicher und zeigt echtes Interesse am Gespräch.<br>„ja“ wird als Modalpartikel meist in Aussagesätzen benutzt, nicht in W-Fragen.",
      "en": "<b>„denn“</b> makes the question friendlier and shows genuine interest in the conversation.<br>„ja“ as a modal particle is mostly used in statements, not in wh-questions.",
      "uk": "<b>„denn“</b> робить питання приязнішим і показує щирий інтерес до розмови.<br>„ja“ як модальна частка здебільшого вживається в твердженнях, а не в питаннях із питальним словом.",
      "ru": "<b>„denn“</b> делает вопрос более дружелюбным и показывает искренний интерес к разговору.<br>„ja“ как модальная частица чаще употребляется в утверждениях, а не в вопросах с вопросительным словом."
    },
    "gram": "interesse_denn_eigentlich"
  }
];
