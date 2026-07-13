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
      "k1_008",
      "k1_016",
      "k1_017",
      "k1_018",
      "k1_019",
      "k1_020",
      "k1_021",
      "k1_022"
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
      "k1_002",
      "k1_023",
      "k1_024",
      "k1_025",
      "k1_026",
      "k1_027",
      "k1_028",
      "k1_029",
      "k1_030"
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
      "k1_013",
      "k1_031",
      "k1_032",
      "k1_033",
      "k1_034",
      "k1_035",
      "k1_036",
      "k1_037",
      "k1_038"
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
      "k1_015",
      "k1_039",
      "k1_040",
      "k1_041",
      "k1_042",
      "k1_043",
      "k1_044",
      "k1_045",
      "k1_046"
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
      "k1_009",
      "k1_047",
      "k1_048",
      "k1_049",
      "k1_050",
      "k1_051",
      "k1_052",
      "k1_053"
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
      "k1_014",
      "k1_054",
      "k1_055",
      "k1_056",
      "k1_057",
      "k1_058",
      "k1_059",
      "k1_060"
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
      "k2_008",
      "k2_016",
      "k2_017",
      "k2_018",
      "k2_019",
      "k2_020",
      "k2_021",
      "k2_022",
      "k2_023"
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
      "k2_013",
      "k2_024",
      "k2_025",
      "k2_026",
      "k2_027",
      "k2_028",
      "k2_029",
      "k2_030",
      "k2_031"
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
      "k2_010",
      "k2_032",
      "k2_033",
      "k2_034",
      "k2_035",
      "k2_036",
      "k2_037",
      "k2_038"
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
      "k2_014",
      "k2_039",
      "k2_040",
      "k2_041",
      "k2_042",
      "k2_043",
      "k2_044",
      "k2_045",
      "k2_046"
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
      "k2_005",
      "k2_047",
      "k2_048",
      "k2_049",
      "k2_050",
      "k2_051",
      "k2_052",
      "k2_053"
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
      "k2_011",
      "k2_054",
      "k2_055",
      "k2_056",
      "k2_057",
      "k2_058",
      "k2_059",
      "k2_060"
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
      "k3_002",
      "k3_016",
      "k3_017",
      "k3_018",
      "k3_019",
      "k3_020",
      "k3_021",
      "k3_022",
      "k3_023"
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
      "k3_004",
      "k3_024",
      "k3_025",
      "k3_026",
      "k3_027",
      "k3_028",
      "k3_029",
      "k3_030",
      "k3_031"
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
      "k3_006",
      "k3_032",
      "k3_033",
      "k3_034",
      "k3_035",
      "k3_036",
      "k3_037",
      "k3_038",
      "k3_039"
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
      "k3_008",
      "k3_040",
      "k3_041",
      "k3_042",
      "k3_043",
      "k3_044",
      "k3_045",
      "k3_046",
      "k3_047"
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
      "k3_011",
      "k3_048",
      "k3_049",
      "k3_050",
      "k3_051",
      "k3_052",
      "k3_053",
      "k3_054"
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
      "k3_015",
      "k3_055",
      "k3_056",
      "k3_057",
      "k3_058",
      "k3_059",
      "k3_060"
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
      "k4_004",
      "k4_016",
      "k4_017",
      "k4_018",
      "k4_019",
      "k4_020",
      "k4_021",
      "k4_022",
      "k4_023"
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
      "k4_003",
      "k4_024",
      "k4_025",
      "k4_026",
      "k4_027",
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
      "k4_013",
      "k4_032",
      "k4_033",
      "k4_034",
      "k4_035",
      "k4_036",
      "k4_037",
      "k4_038",
      "k4_039"
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
      "k4_007",
      "k4_040",
      "k4_041",
      "k4_042",
      "k4_043",
      "k4_044",
      "k4_045",
      "k4_046"
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
      "k4_008",
      "k4_047",
      "k4_048",
      "k4_049",
      "k4_050",
      "k4_051",
      "k4_052",
      "k4_053",
      "k4_054",
      "k4_055"
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
      "k4_015",
      "k4_056",
      "k4_057",
      "k4_058",
      "k4_059",
      "k4_060"
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
      "k5_002",
      "k5_016",
      "k5_017",
      "k5_018",
      "k5_019",
      "k5_020",
      "k5_021",
      "k5_022",
      "k5_023"
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
      "k5_012",
      "k5_024",
      "k5_025",
      "k5_026",
      "k5_027",
      "k5_028",
      "k5_029",
      "k5_030",
      "k5_031"
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
      "k5_013",
      "k5_032",
      "k5_033",
      "k5_034",
      "k5_035",
      "k5_036",
      "k5_037",
      "k5_038",
      "k5_039"
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
      "k5_011",
      "k5_040",
      "k5_041",
      "k5_042",
      "k5_043",
      "k5_044",
      "k5_045",
      "k5_046",
      "k5_047"
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
      "k5_008",
      "k5_048",
      "k5_049",
      "k5_050",
      "k5_051",
      "k5_052",
      "k5_053",
      "k5_054",
      "k5_055"
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
      "k5_015",
      "k5_056",
      "k5_057",
      "k5_058",
      "k5_059",
      "k5_060"
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
      "k6_003",
      "k6_016",
      "k6_017",
      "k6_018",
      "k6_019",
      "k6_020",
      "k6_021",
      "k6_022",
      "k6_023"
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
      "k6_008",
      "k6_024",
      "k6_025",
      "k6_026",
      "k6_027",
      "k6_028",
      "k6_029",
      "k6_030",
      "k6_031"
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
      "k6_009",
      "k6_032",
      "k6_033",
      "k6_034",
      "k6_035",
      "k6_036",
      "k6_037",
      "k6_038"
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
      "k6_004",
      "k6_039",
      "k6_040",
      "k6_041",
      "k6_042",
      "k6_043",
      "k6_044",
      "k6_045",
      "k6_046"
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
      "k6_011",
      "k6_047",
      "k6_048",
      "k6_049",
      "k6_050",
      "k6_051",
      "k6_052",
      "k6_053",
      "k6_054"
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
      "k6_015",
      "k6_055",
      "k6_056",
      "k6_057",
      "k6_058",
      "k6_059",
      "k6_060"
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
      "k7_003",
      "k7_016",
      "k7_017",
      "k7_018",
      "k7_019",
      "k7_020",
      "k7_021",
      "k7_022",
      "k7_023"
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
      "k7_013",
      "k7_024",
      "k7_025",
      "k7_026",
      "k7_027",
      "k7_028",
      "k7_029",
      "k7_030"
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
      "k7_014",
      "k7_031",
      "k7_032",
      "k7_033",
      "k7_034",
      "k7_035",
      "k7_036",
      "k7_037",
      "k7_038"
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
      "k7_009",
      "k7_039",
      "k7_040",
      "k7_041",
      "k7_042",
      "k7_043",
      "k7_044",
      "k7_045",
      "k7_046"
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
      "k7_006",
      "k7_047",
      "k7_048",
      "k7_049",
      "k7_050",
      "k7_051",
      "k7_052",
      "k7_053"
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
      "k7_015",
      "k7_054",
      "k7_055",
      "k7_056",
      "k7_057",
      "k7_058",
      "k7_059",
      "k7_060"
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
      "k8_011",
      "k8_016",
      "k8_017",
      "k8_018",
      "k8_019",
      "k8_020",
      "k8_021",
      "k8_022",
      "k8_023"
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
      "k8_002",
      "k8_024",
      "k8_025",
      "k8_026",
      "k8_027",
      "k8_028",
      "k8_029",
      "k8_030",
      "k8_031"
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
      "k8_012",
      "k8_032",
      "k8_033",
      "k8_034",
      "k8_035",
      "k8_036",
      "k8_037",
      "k8_038",
      "k8_039"
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
      "k8_015",
      "k8_040",
      "k8_041",
      "k8_042",
      "k8_043",
      "k8_044",
      "k8_045",
      "k8_046",
      "k8_047"
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
      "k8_013",
      "k8_048",
      "k8_049",
      "k8_050",
      "k8_051",
      "k8_052",
      "k8_053",
      "k8_054",
      "k8_055"
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
      "k8_014",
      "k8_056",
      "k8_057",
      "k8_058",
      "k8_059",
      "k8_060"
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
      "k9_007",
      "k9_017",
      "k9_018",
      "k9_019",
      "k9_020",
      "k9_021",
      "k9_022",
      "k9_023"
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
      "k9_008",
      "k9_024",
      "k9_025",
      "k9_026",
      "k9_027",
      "k9_028",
      "k9_029",
      "k9_030",
      "k9_031"
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
      "k9_009",
      "k9_032",
      "k9_033",
      "k9_034",
      "k9_035",
      "k9_036",
      "k9_037",
      "k9_038"
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
      "k9_011",
      "k9_039",
      "k9_040",
      "k9_041",
      "k9_042",
      "k9_043",
      "k9_044",
      "k9_045",
      "k9_046"
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
      "k9_016",
      "k9_047",
      "k9_048",
      "k9_049",
      "k9_050"
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
      "k10_005",
      "k10_017",
      "k10_018",
      "k10_019",
      "k10_020",
      "k10_021",
      "k10_022",
      "k10_023"
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
      "k10_004",
      "k10_024",
      "k10_025",
      "k10_026",
      "k10_027",
      "k10_028",
      "k10_029",
      "k10_030",
      "k10_031"
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
      "k10_007",
      "k10_032",
      "k10_033",
      "k10_034",
      "k10_035",
      "k10_036",
      "k10_037",
      "k10_038",
      "k10_039"
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
      "k10_014",
      "k10_040",
      "k10_041",
      "k10_042",
      "k10_043",
      "k10_044",
      "k10_045",
      "k10_046"
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
      "k10_016",
      "k10_047",
      "k10_048",
      "k10_049",
      "k10_050"
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
      "k11_010",
      "k11_017",
      "k11_018",
      "k11_019",
      "k11_020",
      "k11_021",
      "k11_022",
      "k11_023"
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
      "k11_006",
      "k11_024",
      "k11_025",
      "k11_026",
      "k11_027",
      "k11_028",
      "k11_029",
      "k11_030",
      "k11_031"
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
      "k11_007",
      "k11_032",
      "k11_033",
      "k11_034",
      "k11_035",
      "k11_036",
      "k11_037",
      "k11_038",
      "k11_039"
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
      "k11_008",
      "k11_040",
      "k11_041",
      "k11_042",
      "k11_043",
      "k11_044",
      "k11_045",
      "k11_046"
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
      "k11_016",
      "k11_047",
      "k11_048",
      "k11_049",
      "k11_050"
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
    "id": "k1_016",
    "cat": "k1",
    "term": {
      "de": "der Vermieter / die Vermieterin",
      "en": "landlord / landlady",
      "uk": "орендодавець / орендодавиця",
      "ru": "арендодатель / арендодательница"
    },
    "short": {
      "de": "die Person, die eine Wohnung an andere Menschen vermietet",
      "en": "the person who rents out a flat to other people",
      "uk": "людина, яка здає квартиру іншим людям в оренду",
      "ru": "человек, который сдаёт квартиру другим людям в аренду"
    },
    "def": {
      "de": "Wenn die Heizung kaputt ist, muss man sofort den <b>Vermieter</b> informieren.",
      "en": "If the heating breaks down, you have to inform the <b>landlord</b> immediately.",
      "uk": "Якщо опалення зламалося, потрібно одразу повідомити <b>орендодавця</b>.",
      "ru": "Если отопление сломалось, нужно сразу сообщить <b>арендодателю</b>."
    },
    "gram": ""
  },
  {
    "id": "k1_017",
    "cat": "k1",
    "term": {
      "de": "die Miete",
      "en": "rent",
      "uk": "орендна плата",
      "ru": "арендная плата"
    },
    "short": {
      "de": "das Geld, das man jeden Monat für die Wohnung bezahlt",
      "en": "the money you pay every month for the flat",
      "uk": "гроші, які щомісяця платиш за квартиру",
      "ru": "деньги, которые ежемесячно платишь за квартиру"
    },
    "def": {
      "de": "Die <b>Miete</b> für unsere Wohnung steigt jedes Jahr ein bisschen.",
      "en": "The <b>rent</b> for our flat goes up a little every year.",
      "uk": "<b>Орендна плата</b> за нашу квартиру щороку трохи зростає.",
      "ru": "<b>Арендная плата</b> за нашу квартиру каждый год немного растёт."
    },
    "gram": ""
  },
  {
    "id": "k1_018",
    "cat": "k1",
    "term": {
      "de": "der Aufzug",
      "en": "elevator, lift",
      "uk": "ліфт",
      "ru": "лифт"
    },
    "short": {
      "de": "eine Maschine, die Menschen zwischen den Stockwerken nach oben und unten bringt",
      "en": "a machine that takes people up and down between floors",
      "uk": "пристрій, який піднімає та спускає людей між поверхами",
      "ru": "устройство, которое поднимает и спускает людей между этажами"
    },
    "def": {
      "de": "Der <b>Aufzug</b> in unserem Haus ist leider schon seit zwei Wochen kaputt.",
      "en": "Unfortunately, the <b>elevator</b> in our building has been broken for two weeks.",
      "uk": "На жаль, <b>ліфт</b> у нашому будинку вже два тижні не працює.",
      "ru": "К сожалению, <b>лифт</b> в нашем доме уже две недели не работает."
    },
    "gram": ""
  },
  {
    "id": "k1_019",
    "cat": "k1",
    "term": {
      "de": "der Keller",
      "en": "basement, cellar",
      "uk": "підвал",
      "ru": "подвал"
    },
    "short": {
      "de": "der Raum unter dem Haus, in dem man zum Beispiel alte Sachen aufbewahrt",
      "en": "the room under the building where you keep, for example, old things",
      "uk": "приміщення під будинком, де зберігають, наприклад, старі речі",
      "ru": "помещение под домом, где хранят, например, старые вещи"
    },
    "def": {
      "de": "Jede Wohnung hat einen eigenen <b>Keller</b> für Fahrräder und Koffer.",
      "en": "Every flat has its own <b>basement</b> for bikes and suitcases.",
      "uk": "Кожна квартира має власний <b>підвал</b> для велосипедів і валіз.",
      "ru": "У каждой квартиры есть собственный <b>подвал</b> для велосипедов и чемоданов."
    },
    "gram": ""
  },
  {
    "id": "k1_020",
    "cat": "k1",
    "term": {
      "de": "der Balkon",
      "en": "balcony",
      "uk": "балкон",
      "ru": "балкон"
    },
    "short": {
      "de": "ein kleiner Platz an der Wohnung, wo man draußen sitzen kann",
      "en": "a small space attached to the flat where you can sit outside",
      "uk": "невеликий простір біля квартири, де можна сидіти надворі",
      "ru": "небольшое пространство рядом с квартирой, где можно сидеть на улице"
    },
    "def": {
      "de": "Unser <b>Balkon</b> ist klein, aber wir sitzen dort sehr gern.",
      "en": "Our <b>balcony</b> is small, but we really like sitting there.",
      "uk": "Наш <b>балкон</b> маленький, але ми дуже любимо там сидіти.",
      "ru": "Наш <b>балкон</b> маленький, но мы очень любим там сидеть."
    },
    "gram": ""
  },
  {
    "id": "k1_021",
    "cat": "k1",
    "term": {
      "de": "das Stockwerk",
      "en": "floor, storey",
      "uk": "поверх",
      "ru": "этаж"
    },
    "short": {
      "de": "eine Ebene in einem Haus, zum Beispiel das erste oder zweite Stockwerk",
      "en": "a level in a building, for example the first or second floor",
      "uk": "рівень у будинку, наприклад перший чи другий поверх",
      "ru": "уровень в доме, например первый или второй этаж"
    },
    "def": {
      "de": "Unsere neue Wohnung liegt im dritten <b>Stockwerk</b>.",
      "en": "Our new flat is on the third <b>floor</b>.",
      "uk": "Наша нова квартира знаходиться на третьому <b>поверсі</b>.",
      "ru": "Наша новая квартира находится на третьем <b>этаже</b>."
    },
    "gram": ""
  },
  {
    "id": "k1_022",
    "cat": "k1",
    "term": {
      "de": "der Briefkasten",
      "en": "mailbox, letterbox",
      "uk": "поштова скринька",
      "ru": "почтовый ящик"
    },
    "short": {
      "de": "eine kleine Box am Haus, in die die Post gelegt wird",
      "en": "a small box on the building where post is put",
      "uk": "невелика скринька біля будинку, куди кладуть пошту",
      "ru": "небольшой ящик у дома, куда кладут почту"
    },
    "def": {
      "de": "Bitte schau regelmäßig in deinen <b>Briefkasten</b>, dort liegt oft wichtige Post.",
      "en": "Please check your <b>mailbox</b> regularly, important post is often in there.",
      "uk": "Будь ласка, регулярно перевіряй свою <b>поштову скриньку</b>, там часто лежить важлива пошта.",
      "ru": "Пожалуйста, регулярно проверяй свой <b>почтовый ящик</b>, там часто лежит важная почта."
    },
    "gram": ""
  },
  {
    "id": "k1_023",
    "cat": "k1",
    "term": {
      "de": "der Flur",
      "en": "hallway",
      "uk": "коридор",
      "ru": "коридор"
    },
    "short": {
      "de": "der Gang in einer Wohnung oder in einem Haus, der zu den anderen Räumen führt",
      "en": "the passage in a flat or building that leads to the other rooms",
      "uk": "прохід у квартирі чи будинку, який веде до інших кімнат",
      "ru": "проход в квартире или доме, который ведёт к другим комнатам"
    },
    "def": {
      "de": "Die Kinder haben ihre Schuhe <g>in den</g> <b>Flur</b> gestellt.",
      "en": "The children put their shoes in the <b>hallway</b>.",
      "uk": "Діти поставили своє взуття в <b>коридор</b>.",
      "ru": "Дети поставили свою обувь в <b>коридор</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_024",
    "cat": "k1",
    "term": {
      "de": "die Garage",
      "en": "garage",
      "uk": "гараж",
      "ru": "гараж"
    },
    "short": {
      "de": "ein Raum oder Gebäude, in dem man das Auto parkt",
      "en": "a room or building where you park the car",
      "uk": "приміщення чи будівля, де паркують машину",
      "ru": "помещение или здание, где паркуют машину"
    },
    "def": {
      "de": "Herr Schmidt stellt sein Auto jeden Abend <g>in die</g> <b>Garage</b>.",
      "en": "Mr Schmidt parks his car in the <b>garage</b> every evening.",
      "uk": "Пан Шмідт щовечора ставить свою машину в <b>гараж</b>.",
      "ru": "Господин Шмидт каждый вечер ставит свою машину в <b>гараж</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_025",
    "cat": "k1",
    "term": {
      "de": "der Garten",
      "en": "garden",
      "uk": "сад",
      "ru": "сад"
    },
    "short": {
      "de": "ein Stück Land bei einem Haus, wo Blumen, Gemüse oder Bäume wachsen",
      "en": "a piece of land by a building where flowers, vegetables or trees grow",
      "uk": "ділянка землі біля будинку, де ростуть квіти, овочі чи дерева",
      "ru": "участок земли рядом с домом, где растут цветы, овощи или деревья"
    },
    "def": {
      "de": "Die Kinder spielen den ganzen Nachmittag <g>im</g> <b>Garten</b>.",
      "en": "The children play in the <b>garden</b> the whole afternoon.",
      "uk": "Діти цілий день грають у <b>саду</b>.",
      "ru": "Дети целый день играют в <b>саду</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_026",
    "cat": "k1",
    "term": {
      "de": "der Hof",
      "en": "courtyard, yard",
      "uk": "двір",
      "ru": "двор"
    },
    "short": {
      "de": "der freie Platz zwischen den Häusern, oft mit Bäumen oder Spielgeräten",
      "en": "the open space between buildings, often with trees or play equipment",
      "uk": "відкритий простір між будинками, часто з деревами чи гральним обладнанням",
      "ru": "открытое пространство между домами, часто с деревьями или игровым оборудованием"
    },
    "def": {
      "de": "Am Wochenende treffen sich viele Nachbarn <g>im</g> <b>Hof</b>.",
      "en": "On weekends, many neighbours meet in the <b>courtyard</b>.",
      "uk": "На вихідних багато сусідів зустрічаються у <b>дворі</b>.",
      "ru": "На выходных многие соседи встречаются во <b>дворе</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_027",
    "cat": "k1",
    "term": {
      "de": "das Erdgeschoss",
      "en": "ground floor",
      "uk": "перший поверх",
      "ru": "первый этаж"
    },
    "short": {
      "de": "das Stockwerk direkt auf der Höhe der Straße, ohne Treppen nach oben",
      "en": "the floor at street level, without stairs going up",
      "uk": "поверх на рівні вулиці, без сходів вгору",
      "ru": "этаж на уровне улицы, без лестниц наверх"
    },
    "def": {
      "de": "Familie Yilmaz wohnt <g>im</g> <b>Erdgeschoss</b>, direkt neben dem Eingang.",
      "en": "The Yilmaz family lives on the <b>ground floor</b>, right next to the entrance.",
      "uk": "Родина Їлмаз живе на <b>першому поверсі</b>, прямо біля входу.",
      "ru": "Семья Йылмаз живёт на <b>первом этаже</b>, прямо у входа."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_028",
    "cat": "k1",
    "term": {
      "de": "der Dachboden",
      "en": "attic",
      "uk": "горище",
      "ru": "чердак"
    },
    "short": {
      "de": "der Raum ganz oben im Haus, direkt unter dem Dach",
      "en": "the room right at the top of the building, just under the roof",
      "uk": "приміщення на самому верху будинку, прямо під дахом",
      "ru": "помещение на самом верху дома, прямо под крышей"
    },
    "def": {
      "de": "Wir haben unsere alten Möbel <g>auf den</g> <b>Dachboden</b> gebracht.",
      "en": "We took our old furniture up to the <b>attic</b>.",
      "uk": "Ми занесли наші старі меблі на <b>горище</b>.",
      "ru": "Мы отнесли нашу старую мебель на <b>чердак</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_029",
    "cat": "k1",
    "term": {
      "de": "der Spielplatz",
      "en": "playground",
      "uk": "дитячий майданчик",
      "ru": "детская площадка"
    },
    "short": {
      "de": "ein Ort mit Schaukeln und Rutschen, wo Kinder draußen spielen",
      "en": "a place with swings and slides where children play outside",
      "uk": "місце з гойдалками та гірками, де діти граються надворі",
      "ru": "место с качелями и горками, где дети играют на улице"
    },
    "def": {
      "de": "Am Nachmittag gehen die Kinder gern <g>auf den</g> <b>Spielplatz</b>.",
      "en": "In the afternoon, the children like to go to the <b>playground</b>.",
      "uk": "Пополудні діти люблять ходити на <b>дитячий майданчик</b>.",
      "ru": "После обеда дети любят ходить на <b>детскую площадку</b>."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_030",
    "cat": "k1",
    "term": {
      "de": "der Parkplatz",
      "en": "parking spot, car park",
      "uk": "парковка, паркувальне місце",
      "ru": "парковка, парковочное место"
    },
    "short": {
      "de": "ein Platz, wo man das Auto abstellen kann",
      "en": "a place where you can leave the car",
      "uk": "місце, де можна залишити машину",
      "ru": "место, где можно оставить машину"
    },
    "def": {
      "de": "Wir stellen unser Auto jeden Tag <g>auf den</g> <b>Parkplatz</b> Nummer sieben.",
      "en": "We park our car in <b>parking spot</b> number seven every day.",
      "uk": "Ми щодня ставимо машину на <b>парковочне місце</b> номер сім.",
      "ru": "Мы каждый день ставим машину на <b>парковочное место</b> номер семь."
    },
    "gram": "wechselpraepositionen_wdh_b1"
  },
  {
    "id": "k1_031",
    "cat": "k1",
    "term": {
      "de": "sich (etwas) ausleihen",
      "en": "to borrow (something)",
      "uk": "позичати (щось) собі",
      "ru": "одалживать (что-то) себе"
    },
    "short": {
      "de": "sich für kurze Zeit etwas von jemandem geben lassen",
      "en": "to get something from someone for a short time",
      "uk": "брати щось у когось на короткий час",
      "ru": "брать что-то у кого-то на короткое время"
    },
    "def": {
      "de": "<g>Könnten Sie</g> mir bitte Ihre Leiter <b>ausleihen</b>? Ich bringe sie morgen zurück.",
      "en": "<g>Could you</g> please <b>lend</b> me your ladder? I'll bring it back tomorrow.",
      "uk": "<g>Могли б Ви</g>, будь ласка, <b>позичити</b> мені свою драбину? Я поверну її завтра.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, <b>одолжить</b> мне свою лестницу? Я верну её завтра."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_032",
    "cat": "k1",
    "term": {
      "de": "der Gefallen",
      "en": "favour",
      "uk": "послуга",
      "ru": "услуга, одолжение"
    },
    "short": {
      "de": "eine kleine Hilfe, um die man jemanden bittet",
      "en": "a small favour you ask someone for",
      "uk": "маленька послуга, про яку просиш когось",
      "ru": "маленькая услуга, о которой просишь кого-то"
    },
    "def": {
      "de": "<g>Würden Sie</g> mir einen <b>Gefallen</b> tun und meine Post annehmen, während ich im Urlaub bin?",
      "en": "<g>Would you</g> do me a <b>favour</b> and take in my post while I'm on holiday?",
      "uk": "<g>Могли б Ви</g> зробити мені <b>послугу</b> і забирати мою пошту, поки я у відпустці?",
      "ru": "<g>Могли бы Вы</g> сделать мне <b>одолжение</b> и забирать мою почту, пока я в отпуске?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_033",
    "cat": "k1",
    "term": {
      "de": "das Werkzeug",
      "en": "tool",
      "uk": "інструмент",
      "ru": "инструмент"
    },
    "short": {
      "de": "ein Gegenstand, mit dem man zum Beispiel etwas reparieren oder bauen kann",
      "en": "an object used, for example, to repair or build something",
      "uk": "предмет, за допомогою якого можна щось ремонтувати чи будувати",
      "ru": "предмет, с помощью которого можно что-то ремонтировать или строить"
    },
    "def": {
      "de": "<g>Könnten Sie</g> mir Ihr <b>Werkzeug</b> für eine halbe Stunde leihen? Ich muss ein Regal aufbauen.",
      "en": "<g>Could you</g> lend me your <b>tools</b> for half an hour? I need to put up a shelf.",
      "uk": "<g>Могли б Ви</g> позичити мені свій <b>інструмент</b> на півгодини? Мені треба зібрати полицю.",
      "ru": "<g>Могли бы Вы</g> одолжить мне свой <b>инструмент</b> на полчаса? Мне нужно собрать полку."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_034",
    "cat": "k1",
    "term": {
      "de": "reichen",
      "en": "to pass, to hand",
      "uk": "подавати, простягати",
      "ru": "подавать, протягивать"
    },
    "short": {
      "de": "jemandem etwas geben, indem man es ihm hinhält",
      "en": "to give something to someone by holding it out to them",
      "uk": "давати щось комусь, простягаючи це",
      "ru": "давать что-то кому-то, протягивая это"
    },
    "def": {
      "de": "<g>Würden Sie</g> mir bitte kurz das Paket <b>reichen</b>? Ich kann es nicht erreichen.",
      "en": "<g>Would you</g> please <b>pass</b> me the package? I can't reach it.",
      "uk": "<g>Могли б Ви</g>, будь ласка, <b>подати</b> мені пакунок? Я не можу дотягнутися.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, <b>подать</b> мне посылку? Я не могу дотянуться."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_035",
    "cat": "k1",
    "term": {
      "de": "mitbringen",
      "en": "to bring along",
      "uk": "приносити (з собою)",
      "ru": "приносить (с собой)"
    },
    "short": {
      "de": "etwas von zu Hause zu einem anderen Ort bringen",
      "en": "to bring something from home to another place",
      "uk": "приносити щось з дому в інше місце",
      "ru": "приносить что-то из дома в другое место"
    },
    "def": {
      "de": "<g>Könnten Sie</g> morgen bitte den Ersatzschlüssel <b>mitbringen</b>?",
      "en": "<g>Could you</g> please <b>bring</b> the spare key tomorrow?",
      "uk": "<g>Могли б Ви</g>, будь ласка, завтра <b>принести</b> запасний ключ?",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, завтра <b>принести</b> запасной ключ?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_036",
    "cat": "k1",
    "term": {
      "de": "Bescheid geben",
      "en": "to let someone know",
      "uk": "повідомляти когось",
      "ru": "сообщать кому-то"
    },
    "short": {
      "de": "jemandem kurz sagen, dass etwas passiert oder passiert ist",
      "en": "to briefly tell someone that something is happening or has happened",
      "uk": "коротко повідомити комусь, що щось відбувається",
      "ru": "коротко сообщить кому-то, что что-то происходит"
    },
    "def": {
      "de": "<g>Würden Sie</g> mir bitte <b>Bescheid geben</b>, wenn das Paket ankommt?",
      "en": "<g>Would you</g> please <b>let me know</b> when the package arrives?",
      "uk": "<g>Могли б Ви</g>, будь ласка, <b>повідомити мене</b>, коли прийде посилка?",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, <b>сообщить мне</b>, когда придёт посылка?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_037",
    "cat": "k1",
    "term": {
      "de": "aufpassen (auf)",
      "en": "to keep an eye on, to watch",
      "uk": "пильнувати (за)",
      "ru": "присматривать (за)"
    },
    "short": {
      "de": "auf jemanden oder etwas achten, damit nichts passiert",
      "en": "to pay attention to someone or something so that nothing happens",
      "uk": "стежити за кимось чи чимось, щоб нічого не сталося",
      "ru": "следить за кем-то или чем-то, чтобы ничего не случилось"
    },
    "def": {
      "de": "<g>Könnten Sie</g> heute Abend kurz auf meine Katze <b>aufpassen</b>?",
      "en": "<g>Could you</g> please <b>keep an eye on</b> my cat tonight?",
      "uk": "<g>Могли б Ви</g> сьогодні ввечері трохи <b>попильнувати</b> за моєю кішкою?",
      "ru": "<g>Могли бы Вы</g> сегодня вечером немного <b>присмотреть</b> за моей кошкой?"
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_038",
    "cat": "k1",
    "term": {
      "de": "abholen",
      "en": "to pick up, to collect",
      "uk": "забирати (когось/щось)",
      "ru": "забирать (кого-то/что-то)"
    },
    "short": {
      "de": "irgendwohin gehen, um jemanden oder etwas von dort mitzunehmen",
      "en": "to go somewhere to collect someone or something",
      "uk": "прийти кудись, щоб забрати когось або щось звідти",
      "ru": "прийти куда-то, чтобы забрать кого-то или что-то оттуда"
    },
    "def": {
      "de": "<g>Würden Sie</g> meinen Sohn bitte von der Schule <b>abholen</b>? Ich habe heute keine Zeit.",
      "en": "<g>Would you</g> please <b>pick up</b> my son from school? I have no time today.",
      "uk": "<g>Могли б Ви</g>, будь ласка, <b>забрати</b> мого сина зі школи? У мене сьогодні немає часу.",
      "ru": "<g>Могли бы Вы</g>, пожалуйста, <b>забрать</b> моего сына из школы? У меня сегодня нет времени."
    },
    "gram": "hoefliche_bitten_konjunktiv_b1"
  },
  {
    "id": "k1_039",
    "cat": "k1",
    "term": {
      "de": "die Gemeinschaft",
      "en": "community",
      "uk": "спільнота",
      "ru": "сообщество"
    },
    "short": {
      "de": "eine Gruppe von Menschen, die zusammenleben oder etwas gemeinsam haben",
      "en": "a group of people who live together or share something",
      "uk": "група людей, які живуть разом або мають щось спільне",
      "ru": "группа людей, которые живут вместе или имеют что-то общее"
    },
    "def": {
      "de": "Es ist schön, Teil einer so freundlichen <b>Gemeinschaft</b> <g>zu sein</g>.",
      "en": "It's nice <g>to be</g> part of such a friendly <b>community</b>.",
      "uk": "Приємно бути частиною такої дружньої <b>спільноти</b>.",
      "ru": "Приятно быть частью такого дружного <b>сообщества</b>."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_040",
    "cat": "k1",
    "term": {
      "de": "sich kümmern (um)",
      "en": "to take care (of)",
      "uk": "піклуватися (про)",
      "ru": "заботиться (о)"
    },
    "short": {
      "de": "sich um jemanden oder etwas kümmern, damit es ihm/ihr gut geht",
      "en": "to look after someone or something so that they are okay",
      "uk": "піклуватися про когось чи щось",
      "ru": "заботиться о ком-то или чём-то"
    },
    "def": {
      "de": "Es ist nicht immer leicht, sich um den gemeinsamen Garten <g><b>zu kümmern</b></g>.",
      "en": "It's not always easy <g><b>to take care of</b></g> the shared garden.",
      "uk": "Не завжди легко <b>піклуватися</b> про спільний сад.",
      "ru": "Не всегда легко <b>заботиться</b> об общем саде."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_041",
    "cat": "k1",
    "term": {
      "de": "vermeiden",
      "en": "to avoid",
      "uk": "уникати",
      "ru": "избегать"
    },
    "short": {
      "de": "dafür sorgen, dass etwas Negatives nicht passiert",
      "en": "to make sure that something negative doesn't happen",
      "uk": "робити так, щоб щось негативне не сталося",
      "ru": "делать так, чтобы что-то негативное не случилось"
    },
    "def": {
      "de": "Es ist wichtig, Streit mit den Nachbarn <g><b>zu vermeiden</b></g>.",
      "en": "It's important <g><b>to avoid</b></g> arguments with the neighbours.",
      "uk": "Важливо <b>уникати</b> сварок із сусідами.",
      "ru": "Важно <b>избегать</b> ссор с соседями."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_042",
    "cat": "k1",
    "term": {
      "de": "sich gewöhnen (an)",
      "en": "to get used (to)",
      "uk": "звикати (до)",
      "ru": "привыкать (к)"
    },
    "short": {
      "de": "sich langsam an etwas Neues anpassen",
      "en": "to slowly adapt to something new",
      "uk": "поступово звикати до чогось нового",
      "ru": "постепенно привыкать к чему-то новому"
    },
    "def": {
      "de": "Es dauert oft ein paar Wochen, sich an die neue Nachbarschaft <g><b>zu gewöhnen</b></g>.",
      "en": "It often takes a few weeks <g><b>to get used to</b></g> the new neighbourhood.",
      "uk": "Часто потрібно кілька тижнів, щоб <b>звикнути</b> до нового сусідства.",
      "ru": "Часто нужно несколько недель, чтобы <b>привыкнуть</b> к новому соседству."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_043",
    "cat": "k1",
    "term": {
      "de": "gelingen",
      "en": "to succeed, to manage",
      "uk": "вдаватися (успішно зробити)",
      "ru": "удаваться (успешно сделать)"
    },
    "short": {
      "de": "etwas erfolgreich schaffen",
      "en": "to succeed in doing something",
      "uk": "успішно щось здійснити",
      "ru": "успешно что-то осуществить"
    },
    "def": {
      "de": "Endlich ist es uns <b>gelungen</b>, eine Lösung für das Parkplatzproblem <g>zu finden</g>.",
      "en": "We <b>finally managed</b> <g>to find</g> a solution to the parking problem.",
      "uk": "Нам нарешті <b>вдалося</b> знайти рішення проблеми з парковкою.",
      "ru": "Нам наконец <b>удалось</b> найти решение проблемы с парковкой."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_044",
    "cat": "k1",
    "term": {
      "de": "vorschlagen",
      "en": "to suggest, to propose",
      "uk": "пропонувати",
      "ru": "предлагать"
    },
    "short": {
      "de": "eine Idee sagen, die andere Menschen dann entscheiden können",
      "en": "to say an idea that other people can then decide on",
      "uk": "висловлювати ідею, яку потім можуть обрати інші",
      "ru": "высказывать идею, которую потом могут выбрать другие"
    },
    "def": {
      "de": "Herr Ali hat <b>vorgeschlagen</b>, im Sommer ein Nachbarschaftsfest <g>zu organisieren</g>.",
      "en": "Mr Ali <b>suggested</b> <g>organizing</g> a neighbourhood party in summer.",
      "uk": "Пан Алі <b>запропонував</b> організувати влітку сусідське свято.",
      "ru": "Господин Али <b>предложил</b> организовать летом соседский праздник."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_045",
    "cat": "k1",
    "term": {
      "de": "sich einigen",
      "en": "to agree, to reach an agreement",
      "uk": "домовлятися",
      "ru": "договариваться"
    },
    "short": {
      "de": "nach einer Diskussion zusammen eine Entscheidung treffen",
      "en": "to reach a joint decision after a discussion",
      "uk": "після обговорення разом прийти до спільного рішення",
      "ru": "после обсуждения вместе прийти к общему решению"
    },
    "def": {
      "de": "Es hat lange gedauert, sich auf eine neue Hausordnung <g><b>zu einigen</b></g>.",
      "en": "It took a long time <g><b>to agree</b></g> on new house rules.",
      "uk": "Знадобилося багато часу, щоб <b>домовитися</b> про нові правила будинку.",
      "ru": "Понадобилось много времени, чтобы <b>договориться</b> о новых правилах дома."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_046",
    "cat": "k1",
    "term": {
      "de": "teilen",
      "en": "to share",
      "uk": "ділити, спільно користуватися",
      "ru": "делить, совместно пользоваться"
    },
    "short": {
      "de": "etwas mit einer anderen Person zusammen benutzen oder aufteilen",
      "en": "to use or divide something together with another person",
      "uk": "спільно користуватися чимось з іншою людиною або ділити це",
      "ru": "совместно пользоваться чем-то с другим человеком или делить это"
    },
    "def": {
      "de": "Es macht Spaß, den Garten mit den Nachbarn <g><b>zu teilen</b></g>.",
      "en": "It's fun <g><b>to share</b></g> the garden with the neighbours.",
      "uk": "Приємно <b>ділити</b> сад із сусідами.",
      "ru": "Приятно <b>делить</b> сад с соседями."
    },
    "gram": "infinitiv_mit_zu"
  },
  {
    "id": "k1_047",
    "cat": "k1",
    "term": {
      "de": "die Mülltrennung",
      "en": "waste separation",
      "uk": "сортування сміття",
      "ru": "сортировка мусора"
    },
    "short": {
      "de": "das Sortieren von Müll in verschiedene Tonnen, z. B. Papier, Glas, Restmüll",
      "en": "sorting rubbish into different bins, e.g. paper, glass, general waste",
      "uk": "сортування сміття в різні контейнери, напр. папір, скло, змішані відходи",
      "ru": "сортировка мусора по разным контейнерам, напр. бумага, стекло, смешанные отходы"
    },
    "def": {
      "de": "In unserem Haus <g>muss</g> man die <b>Mülltrennung</b> genau beachten.",
      "en": "In our building, you <g>have to</g> follow the rules of <b>waste separation</b> carefully.",
      "uk": "У нашому будинку <g>потрібно</g> ретельно дотримуватися <b>сортування сміття</b>.",
      "ru": "В нашем доме <g>нужно</g> тщательно соблюдать <b>сортировку мусора</b>."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_048",
    "cat": "k1",
    "term": {
      "de": "grillen",
      "en": "to grill, to barbecue",
      "uk": "смажити на грилі",
      "ru": "жарить на гриле"
    },
    "short": {
      "de": "Fleisch oder Gemüse draußen über dem Feuer kochen",
      "en": "to cook meat or vegetables outside over a fire",
      "uk": "готувати мʼясо чи овочі надворі на вогні",
      "ru": "готовить мясо или овощи на улице на огне"
    },
    "def": {
      "de": "Auf dem Balkon <g>darf</g> man leider nicht <b>grillen</b>.",
      "en": "Unfortunately, you <g>are not allowed to</g> <b>grill</b> on the balcony.",
      "uk": "На балконі, на жаль, <g>не можна</g> <b>смажити на грилі</b>.",
      "ru": "На балконе, к сожалению, <g>нельзя</g> <b>жарить на гриле</b>."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_049",
    "cat": "k1",
    "term": {
      "de": "der Rasen",
      "en": "lawn",
      "uk": "газон",
      "ru": "газон"
    },
    "short": {
      "de": "eine Fläche mit kurzem, grünem Gras",
      "en": "an area covered with short, green grass",
      "uk": "ділянка з коротенькою зеленою травою",
      "ru": "участок с короткой зелёной травой"
    },
    "def": {
      "de": "Kinder <g>dürfen</g> auf dem <b>Rasen</b> vor dem Haus spielen.",
      "en": "Children <g>are allowed to</g> play on the <b>lawn</b> in front of the building.",
      "uk": "Дітям <g>можна</g> гратися на <b>газоні</b> перед будинком.",
      "ru": "Детям <g>можно</g> играть на <b>газоне</b> перед домом."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_050",
    "cat": "k1",
    "term": {
      "de": "lüften",
      "en": "to air out, to ventilate",
      "uk": "провітрювати",
      "ru": "проветривать"
    },
    "short": {
      "de": "das Fenster öffnen, damit frische Luft ins Zimmer kommt",
      "en": "to open the window so that fresh air comes into the room",
      "uk": "відчиняти вікно, щоб у кімнату потрапило свіже повітря",
      "ru": "открывать окно, чтобы в комнату попал свежий воздух"
    },
    "def": {
      "de": "Man <g>sollte</g> jeden Morgen kurz <b>lüften</b>, das steht auch in der Hausordnung.",
      "en": "You <g>should</g> <b>air out</b> the room briefly every morning, that's also in the house rules.",
      "uk": "<g>Слід</g> щоранку недовго <b>провітрювати</b>, про це також написано в правилах будинку.",
      "ru": "<g>Следует</g> каждое утро недолго <b>проветривать</b>, об этом также написано в правилах дома."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_051",
    "cat": "k1",
    "term": {
      "de": "putzen",
      "en": "to clean",
      "uk": "прибирати",
      "ru": "убирать"
    },
    "short": {
      "de": "einen Ort mit Wasser, Seife oder einem Tuch sauber machen",
      "en": "to make a place clean with water, soap or a cloth",
      "uk": "робити місце чистим за допомогою води, мила чи ганчірки",
      "ru": "делать место чистым с помощью воды, мыла или тряпки"
    },
    "def": {
      "de": "Jeder Mieter <g>muss</g> einmal im Monat das Treppenhaus <b>putzen</b>.",
      "en": "Every tenant <g>has to</g> <b>clean</b> the stairwell once a month.",
      "uk": "Кожен орендар <g>повинен</g> раз на місяць <b>прибирати</b> підʼїзд.",
      "ru": "Каждый арендатор <g>должен</g> раз в месяц <b>убирать</b> подъезд."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_052",
    "cat": "k1",
    "term": {
      "de": "parken",
      "en": "to park",
      "uk": "паркуватися",
      "ru": "парковаться"
    },
    "short": {
      "de": "das Auto irgendwo abstellen",
      "en": "to leave the car somewhere",
      "uk": "залишати машину десь",
      "ru": "оставлять машину где-то"
    },
    "def": {
      "de": "Vor der Garageneinfahrt <g>darf</g> man nicht <b>parken</b>.",
      "en": "You <g>are not allowed to</g> <b>park</b> in front of the garage entrance.",
      "uk": "Перед вʼїздом до гаража <g>не можна</g> <b>паркуватися</b>.",
      "ru": "Перед въездом в гараж <g>нельзя</g> <b>парковаться</b>."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_053",
    "cat": "k1",
    "term": {
      "de": "die Gemeinschaftsräume",
      "en": "common rooms, shared rooms",
      "uk": "спільні приміщення",
      "ru": "общие помещения"
    },
    "short": {
      "de": "Räume im Haus, die alle Bewohner gemeinsam benutzen dürfen",
      "en": "rooms in the building that all residents may use together",
      "uk": "приміщення в будинку, якими можуть спільно користуватися всі мешканці",
      "ru": "помещения в доме, которыми могут совместно пользоваться все жильцы"
    },
    "def": {
      "de": "Die <b>Gemeinschaftsräume</b> <g>dürfen</g> alle Mieter kostenlos nutzen.",
      "en": "All tenants <g>are allowed to</g> use the <b>common rooms</b> free of charge.",
      "uk": "Усі орендарі <g>можуть</g> безкоштовно користуватися <b>спільними приміщеннями</b>.",
      "ru": "Все арендаторы <g>могут</g> бесплатно пользоваться <b>общими помещениями</b>."
    },
    "gram": "modalverben_wdh_b1"
  },
  {
    "id": "k1_054",
    "cat": "k1",
    "term": {
      "de": "der Lärm",
      "en": "noise",
      "uk": "шум",
      "ru": "шум"
    },
    "short": {
      "de": "laute, störende Geräusche",
      "en": "loud, disturbing sounds",
      "uk": "гучні, набридливі звуки",
      "ru": "громкие, надоедливые звуки"
    },
    "def": {
      "de": "Der <b>Lärm</b> kam <g>weder</g> von der Baustelle <g>noch</g> von der Straße, sondern von der Party nebenan.",
      "en": "The <b>noise</b> came <g>neither</g> from the construction site <g>nor</g> from the street, but from the party next door.",
      "uk": "<b>Шум</b> ішов <g>ні</g> з будівництва, <g>ні</g> з вулиці, а з вечірки по сусідству.",
      "ru": "<b>Шум</b> исходил <g>ни</g> со стройки, <g>ни</g> с улицы, а с вечеринки по соседству."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_055",
    "cat": "k1",
    "term": {
      "de": "sich streiten",
      "en": "to argue, to quarrel",
      "uk": "сваритися",
      "ru": "ссориться"
    },
    "short": {
      "de": "laut und mit negativen Gefühlen über etwas diskutieren",
      "en": "to discuss something loudly and with negative feelings",
      "uk": "голосно й з негативними емоціями сперечатися про щось",
      "ru": "громко и с негативными эмоциями спорить о чём-то"
    },
    "def": {
      "de": "Die beiden Nachbarn <g>haben sich sowohl</g> wegen des Gartens <g>als auch</g> wegen des Parkplatzes <b>gestritten</b>.",
      "en": "The two neighbours <g>have both</g> <b>argued</b> about the garden <g>and</g> about the parking spot.",
      "uk": "Обидва сусіди <g>як</g> через сад, <g>так і</g> через парковку <b>посварилися</b>.",
      "ru": "Оба соседа <g>как</g> из-за сада, <g>так и</g> из-за парковки <b>поссорились</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_056",
    "cat": "k1",
    "term": {
      "de": "die Beschwerde",
      "en": "complaint",
      "uk": "скарга",
      "ru": "жалоба"
    },
    "short": {
      "de": "das, was man sagt oder schreibt, wenn man mit etwas nicht zufrieden ist",
      "en": "what you say or write when you are not satisfied with something",
      "uk": "те, що ти кажеш чи пишеш, коли чимось незадоволений",
      "ru": "то, что ты говоришь или пишешь, когда чем-то недоволен"
    },
    "def": {
      "de": "Die <b>Beschwerde</b> kam <g>weder</g> vom Hausmeister <g>noch</g> vom Vermieter, sondern direkt von den Nachbarn.",
      "en": "The <b>complaint</b> came <g>neither</g> from the caretaker <g>nor</g> from the landlord, but directly from the neighbours.",
      "uk": "<b>Скарга</b> надійшла <g>ні</g> від двірника, <g>ні</g> від орендодавця, а безпосередньо від сусідів.",
      "ru": "<b>Жалоба</b> поступила <g>ни</g> от дворника, <g>ни</g> от арендодателя, а напрямую от соседей."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_057",
    "cat": "k1",
    "term": {
      "de": "rücksichtslos",
      "en": "inconsiderate, reckless",
      "uk": "нетактовний, безцеремонний",
      "ru": "бестактный, бесцеремонный"
    },
    "short": {
      "de": "wenn man nicht an die anderen Menschen denkt",
      "en": "when you don't think of other people",
      "uk": "коли ти не думаєш про інших людей",
      "ru": "когда ты не думаешь о других людях"
    },
    "def": {
      "de": "Der neue Mieter ist <g>sowohl</g> laut <g>als auch</g> ziemlich <b>rücksichtslos</b>.",
      "en": "The new tenant is <g>both</g> loud <g>and</g> quite <b>inconsiderate</b>.",
      "uk": "Новий орендар <g>як</g> гучний, <g>так і</g> досить <b>нетактовний</b>.",
      "ru": "Новый арендатор <g>как</g> громкий, <g>так и</g> довольно <b>бестактный</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_058",
    "cat": "k1",
    "term": {
      "de": "der Kompromiss",
      "en": "compromise",
      "uk": "компроміс",
      "ru": "компромисс"
    },
    "short": {
      "de": "eine Lösung, bei der beide Seiten ein bisschen nachgeben",
      "en": "a solution where both sides give in a little",
      "uk": "рішення, при якому обидві сторони трохи поступаються",
      "ru": "решение, при котором обе стороны немного уступают"
    },
    "def": {
      "de": "Am Ende haben <g>sowohl</g> wir <g>als auch</g> die Nachbarn einem <b>Kompromiss</b> zugestimmt.",
      "en": "In the end, <g>both</g> we <g>and</g> the neighbours agreed to a <b>compromise</b>.",
      "uk": "Зрештою <g>як</g> ми, <g>так і</g> сусіди погодилися на <b>компроміс</b>.",
      "ru": "В итоге <g>как</g> мы, <g>так и</g> соседи согласились на <b>компромисс</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_059",
    "cat": "k1",
    "term": {
      "de": "nervig",
      "en": "annoying",
      "uk": "дратівливий",
      "ru": "раздражающий"
    },
    "short": {
      "de": "wenn etwas oder jemand einen stört und man es nicht mehr hören/sehen möchte",
      "en": "when something or someone bothers you and you don't want to hear/see it anymore",
      "uk": "коли щось чи хтось дратує і ти більше не хочеш це чути/бачити",
      "ru": "когда что-то или кто-то раздражает и ты больше не хочешь это слышать/видеть"
    },
    "def": {
      "de": "Der Lärm vom Nachbarn ist <g>weder</g> laut <g>noch</g> gefährlich, aber trotzdem sehr <b>nervig</b>.",
      "en": "The neighbour's noise is <g>neither</g> loud <g>nor</g> dangerous, but still very <b>annoying</b>.",
      "uk": "Шум від сусіда <g>ні</g> гучний, <g>ні</g> небезпечний, але все одно дуже <b>дратівливий</b>.",
      "ru": "Шум от соседа <g>ни</g> громкий, <g>ни</g> опасный, но всё равно очень <b>раздражающий</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k1_060",
    "cat": "k1",
    "term": {
      "de": "ignorieren",
      "en": "to ignore",
      "uk": "ігнорувати",
      "ru": "игнорировать"
    },
    "short": {
      "de": "so tun, als ob man etwas oder jemanden nicht bemerkt",
      "en": "to act as if you don't notice something or someone",
      "uk": "поводитися так, ніби ти щось або когось не помічаєш",
      "ru": "вести себя так, будто ты чего-то или кого-то не замечаешь"
    },
    "def": {
      "de": "Frau König hat die Beschwerde <g>weder</g> gelesen <g>noch</g> beantwortet — sie hat sie einfach <b>ignoriert</b>.",
      "en": "Mrs König <g>neither</g> read <g>nor</g> answered the complaint — she simply <b>ignored</b> it.",
      "uk": "Пані Кеніг <g>ні</g> не прочитала, <g>ні</g> не відповіла на скаргу — вона просто її <b>проігнорувала</b>.",
      "ru": "Госпожа Кёниг <g>ни</g> не прочитала, <g>ни</g> не ответила на жалобу — она просто её <b>проигнорировала</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
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
    "id": "k2_016",
    "cat": "k2",
    "term": {
      "de": "die Einkaufsliste",
      "en": "shopping list",
      "uk": "список покупок",
      "ru": "список покупок"
    },
    "short": {
      "de": "ein Zettel, auf dem steht, was man im Geschäft kaufen möchte",
      "en": "a note that shows what you want to buy in the shop",
      "uk": "список, у якому написано, що потрібно купити в магазині",
      "ru": "список, в котором написано, что нужно купить в магазине"
    },
    "def": {
      "de": "Auf meiner <b>Einkaufsliste</b> stehen <g>sowohl</g> Obst <g>als auch</g> Gemüse.",
      "en": "My <b>shopping list</b> has <g>both</g> fruit <g>and</g> vegetables on it.",
      "uk": "У моєму <b>списку покупок</b> є <g>як</g> фрукти, <g>так і</g> овочі.",
      "ru": "В моём <b>списке покупок</b> есть <g>как</g> фрукты, <g>так и</g> овощи."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_017",
    "cat": "k2",
    "term": {
      "de": "das Angebot",
      "en": "offer, deal",
      "uk": "пропозиція, акція",
      "ru": "предложение, акция"
    },
    "short": {
      "de": "ein günstiger Preis oder eine besondere Aktion in einem Geschäft",
      "en": "a good price or a special promotion in a shop",
      "uk": "вигідна ціна чи особлива акція в магазині",
      "ru": "выгодная цена или особая акция в магазине"
    },
    "def": {
      "de": "Das <b>Angebot</b> gilt <g>weder</g> heute <g>noch</g> morgen, sondern erst ab Montag.",
      "en": "The <b>offer</b> is valid <g>neither</g> today <g>nor</g> tomorrow, but only from Monday.",
      "uk": "<b>Пропозиція</b> діє <g>ні</g> сьогодні, <g>ні</g> завтра, а лише з понеділка.",
      "ru": "<b>Предложение</b> действует <g>ни</g> сегодня, <g>ни</g> завтра, а только с понедельника."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_018",
    "cat": "k2",
    "term": {
      "de": "der Vorrat",
      "en": "stock, supply",
      "uk": "запас",
      "ru": "запас"
    },
    "short": {
      "de": "eine Menge von etwas, die man zu Hause aufbewahrt, um es später zu benutzen",
      "en": "a quantity of something you keep at home to use later",
      "uk": "запас чогось, що зберігаєш вдома, щоб використати пізніше",
      "ru": "запас чего-то, что хранишь дома, чтобы использовать позже"
    },
    "def": {
      "de": "Wir haben <g>sowohl</g> einen großen <b>Vorrat</b> an Reis <g>als auch</g> an Nudeln zu Hause.",
      "en": "We have <g>both</g> a large <b>supply</b> of rice <g>and</g> of pasta at home.",
      "uk": "У нас вдома є <g>як</g> великий <b>запас</b> рису, <g>так і</g> макаронів.",
      "ru": "У нас дома есть <g>как</g> большой <b>запас</b> риса, <g>так и</g> макарон."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_019",
    "cat": "k2",
    "term": {
      "de": "frisch",
      "en": "fresh",
      "uk": "свіжий",
      "ru": "свежий"
    },
    "short": {
      "de": "wenn ein Lebensmittel noch neu und nicht alt ist",
      "en": "when food is still new and not old",
      "uk": "коли продукт ще новий і не старий",
      "ru": "когда продукт ещё новый и не старый"
    },
    "def": {
      "de": "Der Fisch auf dem Markt ist <g>weder</g> billig <g>noch</g> immer <b>frisch</b>.",
      "en": "The fish at the market is <g>neither</g> cheap <g>nor</g> always <b>fresh</b>.",
      "uk": "Риба на ринку <g>ні</g> дешева, <g>ні</g> завжди <b>свіжа</b>.",
      "ru": "Рыба на рынке <g>ни</g> дешёвая, <g>ни</g> всегда <b>свежая</b>."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_020",
    "cat": "k2",
    "term": {
      "de": "günstig",
      "en": "cheap, good value",
      "uk": "вигідний (за ціною)",
      "ru": "выгодный (по цене)"
    },
    "short": {
      "de": "wenn ein Preis niedrig und fair ist",
      "en": "when a price is low and fair",
      "uk": "коли ціна низька і справедлива",
      "ru": "когда цена низкая и справедливая"
    },
    "def": {
      "de": "Dieser Laden ist <g>sowohl</g> <b>günstig</b> <g>als auch</g> sehr freundlich zu den Kunden.",
      "en": "This shop is <g>both</g> <b>affordable</b> <g>and</g> very friendly to its customers.",
      "uk": "Цей магазин <g>як</g> <b>вигідний</b> за цінами, <g>так і</g> дуже привітний до клієнтів.",
      "ru": "Этот магазин <g>как</g> <b>выгодный</b> по ценам, <g>так и</g> очень дружелюбный к клиентам."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_021",
    "cat": "k2",
    "term": {
      "de": "die Kasse",
      "en": "checkout, till",
      "uk": "каса",
      "ru": "касса"
    },
    "short": {
      "de": "der Ort im Geschäft, wo man für die Ware bezahlt",
      "en": "the place in a shop where you pay for the goods",
      "uk": "місце в магазині, де оплачуєш товар",
      "ru": "место в магазине, где оплачиваешь товар"
    },
    "def": {
      "de": "An der <b>Kasse</b> gab es <g>weder</g> eine lange Schlange <g>noch</g> Probleme mit der Karte.",
      "en": "At the <b>checkout</b>, there was <g>neither</g> a long queue <g>nor</g> any problems with the card.",
      "uk": "На <b>касі</b> не було <g>ні</g> довгої черги, <g>ні</g> проблем із карткою.",
      "ru": "На <b>кассе</b> не было <g>ни</g> длинной очереди, <g>ни</g> проблем с картой."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_022",
    "cat": "k2",
    "term": {
      "de": "das Sonderangebot",
      "en": "special offer",
      "uk": "спеціальна пропозиція",
      "ru": "специальное предложение"
    },
    "short": {
      "de": "eine Ware, die für kurze Zeit besonders billig verkauft wird",
      "en": "a product sold especially cheaply for a short time",
      "uk": "товар, який на короткий час продається особливо дешево",
      "ru": "товар, который на короткое время продаётся особенно дёшево"
    },
    "def": {
      "de": "Das <b>Sonderangebot</b> gilt <g>sowohl</g> im Geschäft <g>als auch</g> im Onlineshop.",
      "en": "The <b>special offer</b> is valid <g>both</g> in the shop <g>and</g> in the online store.",
      "uk": "<b>Спеціальна пропозиція</b> діє <g>як</g> у магазині, <g>так і</g> в інтернет-магазині.",
      "ru": "<b>Специальное предложение</b> действует <g>как</g> в магазине, <g>так и</g> в интернет-магазине."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_023",
    "cat": "k2",
    "term": {
      "de": "die Marke",
      "en": "brand",
      "uk": "марка (бренд)",
      "ru": "марка (бренд)"
    },
    "short": {
      "de": "der Name einer Firma, der auf einem Produkt steht",
      "en": "the name of a company that appears on a product",
      "uk": "назва фірми, яка вказана на товарі",
      "ru": "название фирмы, которое указано на товаре"
    },
    "def": {
      "de": "Meine Tochter kauft <g>weder</g> diese <b>Marke</b> <g>noch</g> andere teure Marken.",
      "en": "My daughter buys <g>neither</g> this <b>brand</b> <g>nor</g> other expensive brands.",
      "uk": "Моя донька не купує <g>ні</g> цю <b>марку</b>, <g>ні</g> інші дорогі марки.",
      "ru": "Моя дочь не покупает <g>ни</g> эту <b>марку</b>, <g>ни</g> другие дорогие марки."
    },
    "gram": "sowohl_als_auch_weder_noch"
  },
  {
    "id": "k2_024",
    "cat": "k2",
    "term": {
      "de": "sich entscheiden (für)",
      "en": "to decide (on)",
      "uk": "вирішувати, обирати",
      "ru": "решать, выбирать"
    },
    "short": {
      "de": "nach dem Nachdenken eine Wahl treffen",
      "en": "to make a choice after thinking about it",
      "uk": "робити вибір після роздумів",
      "ru": "делать выбор после раздумий"
    },
    "def": {
      "de": "Ich habe <g>mich</g> endlich für das rote Kleid <b>entschieden</b>.",
      "en": "I have finally <b>decided</b> on the red dress.",
      "uk": "Я нарешті <b>вирішив(-ла)</b> взяти червону сукню.",
      "ru": "Я наконец <b>решил(-а)</b> взять красное платье."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_025",
    "cat": "k2",
    "term": {
      "de": "sich beeilen",
      "en": "to hurry",
      "uk": "поспішати",
      "ru": "торопиться"
    },
    "short": {
      "de": "schnell machen, weil man wenig Zeit hat",
      "en": "to do something quickly because you have little time",
      "uk": "робити щось швидко, бо мало часу",
      "ru": "делать что-то быстро, потому что мало времени"
    },
    "def": {
      "de": "Wir müssen <g>uns</g> <b>beeilen</b>, das Geschäft schließt in zehn Minuten.",
      "en": "We have to <b>hurry</b>, the shop closes in ten minutes.",
      "uk": "Нам треба <b>поспішити</b>, магазин зачиняється через десять хвилин.",
      "ru": "Нам нужно <b>поторопиться</b>, магазин закрывается через десять минут."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_026",
    "cat": "k2",
    "term": {
      "de": "sich informieren (über)",
      "en": "to find out (about)",
      "uk": "дізнаватися (про)",
      "ru": "узнавать (о)"
    },
    "short": {
      "de": "Informationen über etwas suchen und lesen",
      "en": "to look for and read information about something",
      "uk": "шукати й читати інформацію про щось",
      "ru": "искать и читать информацию о чём-то"
    },
    "def": {
      "de": "Vor dem Kauf hat sie <g>sich</g> gut über das Produkt <b>informiert</b>.",
      "en": "Before buying, she <b>informed</b> herself well about the product.",
      "uk": "Перед покупкою вона добре <b>дізналася</b> про товар.",
      "ru": "Перед покупкой она хорошо <b>разузнала</b> о товаре."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_027",
    "cat": "k2",
    "term": {
      "de": "sich ärgern (über)",
      "en": "to get annoyed (about)",
      "uk": "сердитися, дратуватися (через)",
      "ru": "сердиться, раздражаться (из-за)"
    },
    "short": {
      "de": "negative Gefühle haben, weil etwas nicht gut gelaufen ist",
      "en": "to feel negative because something didn't go well",
      "uk": "відчувати негативні емоції через те, що щось пішло не так",
      "ru": "испытывать негативные эмоции из-за того, что что-то пошло не так"
    },
    "def": {
      "de": "Er hat <g>sich</g> sehr über die hohen Preise <b>geärgert</b>.",
      "en": "He got very <b>annoyed</b> about the high prices.",
      "uk": "Він дуже <b>розсердився</b> через високі ціни.",
      "ru": "Он очень <b>рассердился</b> из-за высоких цен."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_028",
    "cat": "k2",
    "term": {
      "de": "sich interessieren (für)",
      "en": "to be interested (in)",
      "uk": "цікавитися",
      "ru": "интересоваться"
    },
    "short": {
      "de": "etwas spannend finden und mehr darüber wissen wollen",
      "en": "to find something exciting and want to know more about it",
      "uk": "вважати щось цікавим і хотіти більше про це дізнатися",
      "ru": "считать что-то интересным и хотеть больше об этом узнать"
    },
    "def": {
      "de": "Meine Schwester <g>interessiert sich</g> sehr für nachhaltige Mode.",
      "en": "My sister is very <b>interested</b> in sustainable fashion.",
      "uk": "Моя сестра дуже <b>цікавиться</b> сталою модою.",
      "ru": "Моя сестра очень <b>интересуется</b> устойчивой модой."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_029",
    "cat": "k2",
    "term": {
      "de": "sich freuen (auf)",
      "en": "to look forward (to)",
      "uk": "чекати (з радістю), тішитися",
      "ru": "с радостью ждать, радоваться"
    },
    "short": {
      "de": "eine positive, glückliche Erwartung von etwas haben, das noch kommt",
      "en": "to feel positive and happy about something that is still to come",
      "uk": "відчувати позитивне очікування чогось, що ще має статися",
      "ru": "испытывать позитивное ожидание чего-то, что ещё должно произойти"
    },
    "def": {
      "de": "Die Kinder <g>freuen sich</g> schon sehr auf das neue Spielzeug.",
      "en": "The children are already really <b>looking forward</b> to the new toy.",
      "uk": "Діти вже дуже <b>чекають</b> на нову іграшку.",
      "ru": "Дети уже очень <b>ждут</b> новую игрушку."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_030",
    "cat": "k2",
    "term": {
      "de": "sich vorstellen",
      "en": "to introduce oneself",
      "uk": "представлятися",
      "ru": "представляться"
    },
    "short": {
      "de": "seinen eigenen Namen sagen, wenn man jemanden zum ersten Mal trifft",
      "en": "to say your own name when you meet someone for the first time",
      "uk": "називати своє імʼя, коли зустрічаєш когось вперше",
      "ru": "называть своё имя, когда встречаешь кого-то впервые"
    },
    "def": {
      "de": "Der neue Verkäufer hat <g>sich</g> allen Kollegen freundlich <b>vorgestellt</b>.",
      "en": "The new salesperson <b>introduced</b> himself to all his colleagues in a friendly way.",
      "uk": "Новий продавець привітно <b>представився</b> всім колегам.",
      "ru": "Новый продавец дружелюбно <b>представился</b> всем коллегам."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_031",
    "cat": "k2",
    "term": {
      "de": "sich verabreden (mit)",
      "en": "to arrange to meet",
      "uk": "домовлятися про зустріч",
      "ru": "договариваться о встрече"
    },
    "short": {
      "de": "mit jemandem einen Termin ausmachen, um sich zu treffen",
      "en": "to arrange a time with someone to meet",
      "uk": "домовлятися з кимось про зустріч",
      "ru": "договариваться с кем-то о встрече"
    },
    "def": {
      "de": "Ich habe <g>mich</g> mit meiner Freundin zum Einkaufen <b>verabredet</b>.",
      "en": "I have <b>arranged</b> to meet my friend to go shopping.",
      "uk": "Я <b>домовився(-лась)</b> з подругою піти за покупками.",
      "ru": "Я <b>договорился(-лась)</b> с подругой пойти по магазинам."
    },
    "gram": "reflexivpronomen_akkusativ_wdh_b1"
  },
  {
    "id": "k2_032",
    "cat": "k2",
    "term": {
      "de": "der Irrtum",
      "en": "mistake, error",
      "uk": "помилка, непорозуміння",
      "ru": "ошибка, недоразумение"
    },
    "short": {
      "de": "wenn man etwas falsch verstanden oder falsch gemacht hat",
      "en": "when you have misunderstood or done something wrong",
      "uk": "коли ти щось неправильно зрозумів чи зробив",
      "ru": "когда ты что-то неправильно понял или сделал"
    },
    "def": {
      "de": "Das war kein Betrug, <g>sondern</g> ein einfacher <b>Irrtum</b>, <g>der</g> schnell aufgeklärt wurde.",
      "en": "That was not fraud <g>but</g> a simple <b>mistake</b> <g>that</g> was quickly cleared up.",
      "uk": "Це було не шахрайство, <g>а</g> проста <b>помилка</b>, <g>яка</g> швидко зʼясувалася.",
      "ru": "Это было не мошенничество, <g>а</g> простая <b>ошибка</b>, <g>которая</g> быстро прояснилась."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_033",
    "cat": "k2",
    "term": {
      "de": "die Verwechslung",
      "en": "mix-up, confusion",
      "uk": "плутанина",
      "ru": "путаница"
    },
    "short": {
      "de": "wenn man zwei Dinge oder Personen versehentlich für dasselbe hält",
      "en": "when you accidentally mistake two things or people for one another",
      "uk": "коли ти випадково сплутав дві речі чи людини",
      "ru": "когда ты случайно перепутал две вещи или человека"
    },
    "def": {
      "de": "Es war kein Diebstahl, <g>sondern</g> nur eine <b>Verwechslung</b>, <g>die</g> sich schnell klären ließ.",
      "en": "It was not theft <g>but</g> just a <b>mix-up</b> <g>that</g> could be quickly resolved.",
      "uk": "Це була не крадіжка, <g>а</g> лише <b>плутанина</b>, <g>яка</g> швидко вирішилася.",
      "ru": "Это была не кража, <g>а</g> лишь <b>путаница</b>, <g>которая</g> быстро разрешилась."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_034",
    "cat": "k2",
    "term": {
      "de": "beschädigt",
      "en": "damaged",
      "uk": "пошкоджений",
      "ru": "повреждённый"
    },
    "short": {
      "de": "wenn etwas kaputt oder nicht mehr ganz ist",
      "en": "when something is broken or no longer whole",
      "uk": "коли щось зламане або вже не ціле",
      "ru": "когда что-то сломано или уже не целое"
    },
    "def": {
      "de": "Es war kein normales Paket, <g>sondern</g> ein <b>beschädigtes</b> Paket, <g>das</g> sofort zurückgeschickt wurde.",
      "en": "It was not a normal package <g>but</g> a <b>damaged</b> one <g>that</g> was sent back immediately.",
      "uk": "Це була не звичайна посилка, <g>а</g> <b>пошкоджена</b> посилка, <g>яка</g> була одразу відправлена назад.",
      "ru": "Это была не обычная посылка, <g>а</g> <b>повреждённая</b> посылка, <g>которая</g> была сразу отправлена обратно."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_035",
    "cat": "k2",
    "term": {
      "de": "der Ersatz",
      "en": "replacement",
      "uk": "заміна",
      "ru": "замена"
    },
    "short": {
      "de": "eine neue Sache, die man anstelle einer kaputten oder verlorenen Sache bekommt",
      "en": "a new item you get instead of a broken or lost one",
      "uk": "нова річ, яку отримуєш замість зламаної чи втраченої",
      "ru": "новая вещь, которую получаешь вместо сломанной или утраченной"
    },
    "def": {
      "de": "Das war kein Geschenk, <g>sondern</g> ein kostenloser <b>Ersatz</b>, <g>der</g> uns sofort zugeschickt wurde.",
      "en": "That was not a gift <g>but</g> a free <b>replacement</b> <g>that</g> was sent to us immediately.",
      "uk": "Це був не подарунок, <g>а</g> безкоштовна <b>заміна</b>, <g>яка</g> була нам одразу надіслана.",
      "ru": "Это был не подарок, <g>а</g> бесплатная <b>замена</b>, <g>которая</g> была нам сразу отправлена."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_036",
    "cat": "k2",
    "term": {
      "de": "zurückschicken",
      "en": "to send back",
      "uk": "відправляти назад",
      "ru": "отправлять обратно"
    },
    "short": {
      "de": "eine Ware wieder an den Verkäufer schicken",
      "en": "to send a product back to the seller",
      "uk": "відправляти товар назад продавцю",
      "ru": "отправлять товар обратно продавцу"
    },
    "def": {
      "de": "Ich wollte die Schuhe, <g>die</g> leider zu klein waren, nicht behalten, <g>sondern</g> <b>zurückschicken</b>.",
      "en": "I didn't want to keep the shoes, <g>which</g> were unfortunately too small, <g>but</g> <b>send</b> them <b>back</b>.",
      "uk": "Я не хотів(-ла) залишати собі туфлі, <g>які</g>, на жаль, були замалі, <g>а</g> <b>відправити</b> їх назад.",
      "ru": "Я не хотел(-а) оставлять себе туфли, <g>которые</g>, к сожалению, были малы, <g>а</g> <b>отправить</b> их обратно."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_037",
    "cat": "k2",
    "term": {
      "de": "reagieren (auf)",
      "en": "to react (to)",
      "uk": "реагувати (на)",
      "ru": "реагировать (на)"
    },
    "short": {
      "de": "auf etwas mit einer Handlung oder einem Gefühl antworten",
      "en": "to respond to something with an action or a feeling",
      "uk": "відповідати на щось дією чи почуттям",
      "ru": "отвечать на что-то действием или чувством"
    },
    "def": {
      "de": "Das war keine schnelle Antwort, <g>sondern</g> ein Kundenservice, <g>der</g> erst nach drei Tagen <b>reagiert</b> hat.",
      "en": "That was not a quick reply <g>but</g> a customer service <g>that</g> only <b>reacted</b> after three days.",
      "uk": "Це була не швидка відповідь, <g>а</g> служба підтримки, <g>яка</g> <b>відреагувала</b> лише через три дні.",
      "ru": "Это был не быстрый ответ, <g>а</g> служба поддержки, <g>которая</g> <b>отреагировала</b> лишь через три дня."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_038",
    "cat": "k2",
    "term": {
      "de": "fehlen",
      "en": "to be missing",
      "uk": "бракувати, бути відсутнім",
      "ru": "не хватать, отсутствовать"
    },
    "short": {
      "de": "nicht da sein, obwohl es da sein sollte",
      "en": "to not be there, although it should be",
      "uk": "бути відсутнім, хоча має бути",
      "ru": "отсутствовать, хотя должно быть"
    },
    "def": {
      "de": "Das war kein normales Zubehör, <g>sondern</g> ein wichtiges Teil, <g>das</g> in der Packung <b>fehlte</b>.",
      "en": "That was not just an accessory <g>but</g> an important part <g>that</g> was <b>missing</b> from the package.",
      "uk": "Це був не просто аксесуар, <g>а</g> важлива деталь, <g>яка</g> <b>була відсутня</b> в упаковці.",
      "ru": "Это был не просто аксессуар, <g>а</g> важная деталь, <g>которая</g> <b>отсутствовала</b> в упаковке."
    },
    "gram": "relativsatz_nominativ_sondern"
  },
  {
    "id": "k2_039",
    "cat": "k2",
    "term": {
      "de": "der Warenkorb",
      "en": "shopping cart, basket",
      "uk": "кошик (для покупок)",
      "ru": "корзина (для покупок)"
    },
    "short": {
      "de": "der Ort in einem Onlineshop, wo die ausgewählten Produkte gesammelt werden",
      "en": "the place in an online shop where the selected products are collected",
      "uk": "місце в інтернет-магазині, де збираються обрані товари",
      "ru": "место в интернет-магазине, где собираются выбранные товары"
    },
    "def": {
      "de": "Bevor du bezahlst, findest du alle Produkte in deinem <g><b>Warenkorb</b></g>.",
      "en": "Before you pay, you will find all products in your <b>shopping cart</b>.",
      "uk": "Перед оплатою всі товари можна знайти у своєму <b>кошику</b>.",
      "ru": "Перед оплатой все товары можно найти в своей <b>корзине</b>."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_040",
    "cat": "k2",
    "term": {
      "de": "die Versandkosten",
      "en": "shipping costs",
      "uk": "вартість доставки",
      "ru": "стоимость доставки"
    },
    "short": {
      "de": "das Geld, das man zusätzlich für den Versand einer Bestellung bezahlt",
      "en": "the extra money you pay for shipping an order",
      "uk": "додаткові гроші, які платиш за доставку замовлення",
      "ru": "дополнительные деньги, которые платишь за доставку заказа"
    },
    "def": {
      "de": "Ab einem Einkauf von fünfzig Euro sind die <g><b>Versandkosten</b></g> kostenlos.",
      "en": "From a purchase of fifty euros, <b>shipping costs</b> are free.",
      "uk": "Від суми покупки у пʼятдесят євро <b>вартість доставки</b> безкоштовна.",
      "ru": "От суммы покупки в пятьдесят евро <b>стоимость доставки</b> бесплатна."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_041",
    "cat": "k2",
    "term": {
      "de": "das Rückgaberecht",
      "en": "right of return",
      "uk": "право повернення",
      "ru": "право возврата"
    },
    "short": {
      "de": "das Recht, eine gekaufte Ware innerhalb einer bestimmten Zeit zurückzugeben",
      "en": "the right to return a purchased item within a certain time",
      "uk": "право повернути куплений товар протягом певного часу",
      "ru": "право вернуть купленный товар в течение определённого времени"
    },
    "def": {
      "de": "Das <g><b>Rückgaberecht</b></g> gilt für vierzehn Tage nach dem Kauf.",
      "en": "The <b>right of return</b> applies for fourteen days after purchase.",
      "uk": "<b>Право повернення</b> діє протягом чотирнадцяти днів після покупки.",
      "ru": "<b>Право возврата</b> действует в течение четырнадцати дней после покупки."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_042",
    "cat": "k2",
    "term": {
      "de": "die Bestellnummer",
      "en": "order number",
      "uk": "номер замовлення",
      "ru": "номер заказа"
    },
    "short": {
      "de": "eine Nummer, mit der man eine bestimmte Bestellung wiederfindet",
      "en": "a number used to find a specific order again",
      "uk": "номер, за яким можна знайти конкретне замовлення",
      "ru": "номер, по которому можно найти конкретный заказ"
    },
    "def": {
      "de": "Bitte geben Sie bei Fragen immer Ihre <g><b>Bestellnummer</b></g> an.",
      "en": "Please always provide your <b>order number</b> when you have questions.",
      "uk": "Будь ласка, завжди вказуйте свій <b>номер замовлення</b>, якщо маєте питання.",
      "ru": "Пожалуйста, всегда указывайте свой <b>номер заказа</b>, если есть вопросы."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_043",
    "cat": "k2",
    "term": {
      "de": "der Lieferschein",
      "en": "delivery note",
      "uk": "накладна",
      "ru": "накладная"
    },
    "short": {
      "de": "ein Papier, das mit der Ware kommt und zeigt, was geliefert wurde",
      "en": "a piece of paper that comes with the goods and shows what was delivered",
      "uk": "документ, який приходить разом із товаром і показує, що доставлено",
      "ru": "документ, который приходит вместе с товаром и показывает, что доставлено"
    },
    "def": {
      "de": "Auf dem <g><b>Lieferschein</b></g> stehen alle bestellten Artikel.",
      "en": "All ordered items are listed on the <b>delivery note</b>.",
      "uk": "У <b>накладній</b> вказані всі замовлені товари.",
      "ru": "В <b>накладной</b> указаны все заказанные товары."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_044",
    "cat": "k2",
    "term": {
      "de": "die Zahlungsart",
      "en": "payment method",
      "uk": "спосіб оплати",
      "ru": "способ оплаты"
    },
    "short": {
      "de": "die Art, wie man für etwas bezahlt, zum Beispiel mit Karte oder bar",
      "en": "the way you pay for something, for example by card or cash",
      "uk": "спосіб, яким платиш за щось, наприклад карткою чи готівкою",
      "ru": "способ, которым платишь за что-то, например картой или наличными"
    },
    "def": {
      "de": "Als <g><b>Zahlungsart</b></g> habe ich Kreditkarte gewählt.",
      "en": "I chose credit card as my <b>payment method</b>.",
      "uk": "Як <b>спосіб оплати</b> я обрав(-ла) кредитну картку.",
      "ru": "В качестве <b>способа оплаты</b> я выбрал(-а) кредитную карту."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_045",
    "cat": "k2",
    "term": {
      "de": "die Lieferzeit",
      "en": "delivery time",
      "uk": "термін доставки",
      "ru": "срок доставки"
    },
    "short": {
      "de": "die Zeit, die eine Bestellung braucht, um beim Kunden anzukommen",
      "en": "the time an order needs to reach the customer",
      "uk": "час, який потрібен замовленню, щоб дійти до клієнта",
      "ru": "время, которое нужно заказу, чтобы дойти до клиента"
    },
    "def": {
      "de": "Die <g><b>Lieferzeit</b></g> beträgt in diesem Onlineshop meistens drei bis fünf Tage.",
      "en": "The <b>delivery time</b> in this online shop is usually three to five days.",
      "uk": "<b>Термін доставки</b> в цьому інтернет-магазині зазвичай складає від трьох до пʼяти днів.",
      "ru": "<b>Срок доставки</b> в этом интернет-магазине обычно составляет от трёх до пяти дней."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_046",
    "cat": "k2",
    "term": {
      "de": "die Versandadresse",
      "en": "shipping address",
      "uk": "адреса доставки",
      "ru": "адрес доставки"
    },
    "short": {
      "de": "die Adresse, an die eine Bestellung geschickt werden soll",
      "en": "the address to which an order should be sent",
      "uk": "адреса, на яку має бути надіслане замовлення",
      "ru": "адрес, на который должен быть отправлен заказ"
    },
    "def": {
      "de": "Bitte überprüfen Sie Ihre <g><b>Versandadresse</b></g>, bevor Sie die Bestellung abschicken.",
      "en": "Please check your <b>shipping address</b> before you submit the order.",
      "uk": "Будь ласка, перевірте свою <b>адресу доставки</b>, перш ніж підтвердити замовлення.",
      "ru": "Пожалуйста, проверьте свой <b>адрес доставки</b>, прежде чем подтвердить заказ."
    },
    "gram": "komposita_nomen_nomen"
  },
  {
    "id": "k2_047",
    "cat": "k2",
    "term": {
      "de": "die Frist",
      "en": "deadline",
      "uk": "термін, дедлайн",
      "ru": "срок, дедлайн"
    },
    "short": {
      "de": "der letzte Tag, an dem man etwas erledigen muss",
      "en": "the last day by which you have to do something",
      "uk": "останній день, коли потрібно щось зробити",
      "ru": "последний день, когда нужно что-то сделать"
    },
    "def": {
      "de": "Die <b>Frist</b>, <g>die</g> uns die Firma gegeben hat, ist schon nächste Woche.",
      "en": "The <b>deadline</b> <g>that</g> the company gave us is already next week.",
      "uk": "<b>Термін</b>, <g>який</g> дала нам компанія, вже наступного тижня.",
      "ru": "<b>Срок</b>, <g>который</g> дала нам компания, уже на следующей неделе."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_048",
    "cat": "k2",
    "term": {
      "de": "der Betrag",
      "en": "amount, sum",
      "uk": "сума",
      "ru": "сумма"
    },
    "short": {
      "de": "eine Menge Geld, zum Beispiel auf einer Rechnung",
      "en": "an amount of money, for example on an invoice",
      "uk": "кількість грошей, наприклад у рахунку",
      "ru": "количество денег, например в счёте"
    },
    "def": {
      "de": "Den <b>Betrag</b>, <g>den</g> ich überwiesen habe, hat die Firma leider noch nicht bekommen.",
      "en": "The <b>amount</b> <g>that</g> I transferred has unfortunately not yet reached the company.",
      "uk": "<b>Суму</b>, <g>яку</g> я перерахував(-ла), компанія, на жаль, ще не отримала.",
      "ru": "<b>Сумму</b>, <g>которую</g> я перевёл(-а), компания, к сожалению, ещё не получила."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_049",
    "cat": "k2",
    "term": {
      "de": "die Überweisung",
      "en": "bank transfer",
      "uk": "банківський переказ",
      "ru": "банковский перевод"
    },
    "short": {
      "de": "wenn man Geld von einem Bankkonto auf ein anderes schickt",
      "en": "when you send money from one bank account to another",
      "uk": "коли переказуєш гроші з одного банківського рахунку на інший",
      "ru": "когда переводишь деньги с одного банковского счёта на другой"
    },
    "def": {
      "de": "Die <b>Überweisung</b>, <g>die</g> ich gestern gemacht habe, dauert meistens zwei Tage.",
      "en": "The <b>bank transfer</b> <g>that</g> I made yesterday usually takes two days.",
      "uk": "<b>Банківський переказ</b>, <g>який</g> я зробив(-ла) вчора, зазвичай триває два дні.",
      "ru": "<b>Банковский перевод</b>, <g>который</g> я сделал(-а) вчера, обычно занимает два дня."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_050",
    "cat": "k2",
    "term": {
      "de": "das Konto",
      "en": "account",
      "uk": "рахунок (банківський)",
      "ru": "счёт (банковский)"
    },
    "short": {
      "de": "der Ort bei einer Bank, wo man sein Geld aufbewahrt",
      "en": "the place at a bank where you keep your money",
      "uk": "місце в банку, де зберігаються твої гроші",
      "ru": "место в банке, где хранятся твои деньги"
    },
    "def": {
      "de": "Das <b>Konto</b>, <g>das</g> ich vor einem Jahr eröffnet habe, nutze ich fast jeden Tag.",
      "en": "The <b>account</b> <g>that</g> I opened a year ago, I use almost every day.",
      "uk": "<b>Рахунок</b>, <g>який</g> я відкрив(-ла) рік тому, я використовую майже щодня.",
      "ru": "<b>Счёт</b>, <g>который</g> я открыл(-а) год назад, я использую почти каждый день."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_051",
    "cat": "k2",
    "term": {
      "de": "die Gebühr",
      "en": "fee",
      "uk": "комісія, збір",
      "ru": "комиссия, сбор"
    },
    "short": {
      "de": "ein Geldbetrag, den man für eine Leistung bezahlen muss",
      "en": "an amount of money you have to pay for a service",
      "uk": "сума грошей, яку потрібно заплатити за послугу",
      "ru": "сумма денег, которую нужно заплатить за услугу"
    },
    "def": {
      "de": "Die <b>Gebühr</b>, <g>die</g> die Bank für die Überweisung verlangt, finde ich sehr hoch.",
      "en": "I find the <b>fee</b> <g>that</g> the bank charges for the transfer very high.",
      "uk": "<b>Комісія</b>, <g>яку</g> вимагає банк за переказ, здається мені дуже високою.",
      "ru": "<b>Комиссия</b>, <g>которую</g> требует банк за перевод, кажется мне очень высокой."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_052",
    "cat": "k2",
    "term": {
      "de": "der Vertrag",
      "en": "contract",
      "uk": "договір",
      "ru": "договор"
    },
    "short": {
      "de": "ein offizielles Dokument, das zeigt, was zwei Seiten vereinbart haben",
      "en": "an official document that shows what two parties have agreed on",
      "uk": "офіційний документ, який показує, про що домовилися дві сторони",
      "ru": "официальный документ, который показывает, о чём договорились две стороны"
    },
    "def": {
      "de": "Den <b>Vertrag</b>, <g>den</g> ich letzte Woche unterschrieben habe, muss ich noch einmal genau lesen.",
      "en": "I still need to read the <b>contract</b> <g>that</g> I signed last week very carefully again.",
      "uk": "<b>Договір</b>, <g>який</g> я підписав(-ла) минулого тижня, мені треба ще раз уважно прочитати.",
      "ru": "<b>Договор</b>, <g>который</g> я подписал(-а) на прошлой неделе, мне нужно ещё раз внимательно прочитать."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_053",
    "cat": "k2",
    "term": {
      "de": "erinnern (an)",
      "en": "to remind (of)",
      "uk": "нагадувати (про)",
      "ru": "напоминать (о)"
    },
    "short": {
      "de": "jemandem sagen, dass er/sie an etwas denken soll",
      "en": "to tell someone to think of something",
      "uk": "казати комусь, щоб він/вона про щось не забув(-ла)",
      "ru": "говорить кому-то, чтобы он/она не забыл(-а) о чём-то"
    },
    "def": {
      "de": "Die E-Mail, <g>die</g> ich heute Morgen bekommen habe, hat mich an die Zahlung <b>erinnert</b>.",
      "en": "The email <g>that</g> I received this morning <b>reminded</b> me of the payment.",
      "uk": "Лист, <g>який</g> я отримав(-ла) сьогодні вранці, <b>нагадав</b> мені про оплату.",
      "ru": "Письмо, <g>которое</g> я получил(-а) сегодня утром, <b>напомнило</b> мне об оплате."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_054",
    "cat": "k2",
    "term": {
      "de": "der Preisvergleich",
      "en": "price comparison",
      "uk": "порівняння цін",
      "ru": "сравнение цен"
    },
    "short": {
      "de": "wenn man die Preise von verschiedenen Geschäften vergleicht",
      "en": "when you compare the prices of different shops",
      "uk": "коли порівнюєш ціни різних магазинів",
      "ru": "когда сравниваешь цены разных магазинов"
    },
    "def": {
      "de": "Den <b>Preisvergleich</b>, <g>den</g> ich online gemacht habe, hat mir viel Geld gespart.",
      "en": "The <b>price comparison</b> <g>that</g> I did online saved me a lot of money.",
      "uk": "<b>Порівняння цін</b>, <g>яке</g> я зробив(-ла) онлайн, заощадило мені багато грошей.",
      "ru": "<b>Сравнение цен</b>, <g>которое</g> я сделал(-а) онлайн, сэкономило мне много денег."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_055",
    "cat": "k2",
    "term": {
      "de": "sparen",
      "en": "to save (money)",
      "uk": "економити",
      "ru": "экономить"
    },
    "short": {
      "de": "weniger Geld ausgeben oder Geld für später aufbewahren",
      "en": "to spend less money or keep money for later",
      "uk": "витрачати менше грошей або відкладати гроші на потім",
      "ru": "тратить меньше денег или откладывать деньги на потом"
    },
    "def": {
      "de": "Das Geld, <g>das</g> wir durch den Rabatt <b>gespart</b> haben, legen wir zur Seite.",
      "en": "We put aside the money <g>that</g> we <b>saved</b> through the discount.",
      "uk": "Гроші, <g>які</g> ми <b>заощадили</b> завдяки знижці, ми відкладаємо.",
      "ru": "Деньги, <g>которые</g> мы <b>сэкономили</b> благодаря скидке, мы откладываем."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_056",
    "cat": "k2",
    "term": {
      "de": "die Qualität",
      "en": "quality",
      "uk": "якість",
      "ru": "качество"
    },
    "short": {
      "de": "wie gut oder schlecht ein Produkt gemacht ist",
      "en": "how well or badly a product is made",
      "uk": "наскільки добре чи погано зроблений товар",
      "ru": "насколько хорошо или плохо сделан товар"
    },
    "def": {
      "de": "Die <b>Qualität</b>, <g>die</g> wir bei diesem Produkt erwartet haben, haben wir leider nicht bekommen.",
      "en": "We unfortunately didn't get the <b>quality</b> <g>that</g> we expected from this product.",
      "uk": "<b>Якість</b>, <g>яку</g> ми очікували від цього товару, ми, на жаль, не отримали.",
      "ru": "<b>Качество</b>, <g>которое</g> мы ожидали от этого товара, мы, к сожалению, не получили."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_057",
    "cat": "k2",
    "term": {
      "de": "vergleichen",
      "en": "to compare",
      "uk": "порівнювати",
      "ru": "сравнивать"
    },
    "short": {
      "de": "zwei oder mehr Dinge nebeneinanderstellen, um Unterschiede zu sehen",
      "en": "to put two or more things side by side to see the differences",
      "uk": "ставити поряд дві чи більше речей, щоб побачити різницю",
      "ru": "ставить рядом две или более вещи, чтобы увидеть разницу"
    },
    "def": {
      "de": "Die zwei Angebote, <g>die</g> ich <b>verglichen</b> habe, waren fast gleich teuer.",
      "en": "The two offers <g>that</g> I <b>compared</b> were almost equally expensive.",
      "uk": "Дві пропозиції, <g>які</g> я <b>порівняв(-ла)</b>, коштували майже однаково.",
      "ru": "Два предложения, <g>которые</g> я <b>сравнил(-а)</b>, стоили почти одинаково."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_058",
    "cat": "k2",
    "term": {
      "de": "der Testbericht",
      "en": "test report, review",
      "uk": "тестовий звіт, огляд",
      "ru": "тестовый отчёт, обзор"
    },
    "short": {
      "de": "ein Text, der zeigt, wie gut ein Produkt in einem Test war",
      "en": "a text that shows how well a product performed in a test",
      "uk": "текст, який показує, наскільки добре товар показав себе в тесті",
      "ru": "текст, который показывает, насколько хорошо товар показал себя в тесте"
    },
    "def": {
      "de": "Den <b>Testbericht</b>, <g>den</g> ich gelesen habe, fand ich sehr hilfreich.",
      "en": "I found the <b>test report</b> <g>that</g> I read very helpful.",
      "uk": "<b>Тестовий звіт</b>, <g>який</g> я прочитав(-ла), здався мені дуже корисним.",
      "ru": "<b>Тестовый отчёт</b>, <g>который</g> я прочитал(-а), показался мне очень полезным."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_059",
    "cat": "k2",
    "term": {
      "de": "reduziert",
      "en": "reduced, discounted",
      "uk": "уцінений, зі знижкою",
      "ru": "уценённый, со скидкой"
    },
    "short": {
      "de": "wenn ein Preis niedriger als normal ist",
      "en": "when a price is lower than usual",
      "uk": "коли ціна нижча за звичайну",
      "ru": "когда цена ниже обычной"
    },
    "def": {
      "de": "Die Jacke, <g>die</g> ich gekauft habe, war stark <b>reduziert</b>.",
      "en": "The jacket <g>that</g> I bought was heavily <b>discounted</b>.",
      "uk": "Куртка, <g>яку</g> я купив(-ла), була значно <b>уцінена</b>.",
      "ru": "Куртка, <g>которую</g> я купил(-а), была значительно <b>уценена</b>."
    },
    "gram": "relativsatz_akkusativ_b1"
  },
  {
    "id": "k2_060",
    "cat": "k2",
    "term": {
      "de": "sich lohnen",
      "en": "to be worth it",
      "uk": "бути вартим, окупатися",
      "ru": "стоить того, окупаться"
    },
    "short": {
      "de": "wenn der Nutzen von etwas größer ist als der Aufwand oder die Kosten",
      "en": "when the benefit of something is greater than the effort or cost",
      "uk": "коли користь від чогось більша, ніж витрати чи зусилля",
      "ru": "когда польза от чего-то больше, чем затраты или усилия"
    },
    "def": {
      "de": "Der Preisvergleich, <g>den</g> ich gemacht habe, hat sich wirklich <b>gelohnt</b>.",
      "en": "The price comparison <g>that</g> I did was really <b>worth it</b>.",
      "uk": "Порівняння цін, <g>яке</g> я зробив(-ла), справді <b>окупилося</b>.",
      "ru": "Сравнение цен, <g>которое</g> я сделал(-а), действительно <b>окупилось</b>."
    },
    "gram": "relativsatz_akkusativ_b1"
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
    "id": "k3_016",
    "cat": "k3",
    "term": {
      "de": "die Kontonummer",
      "en": "account number",
      "uk": "номер рахунку",
      "ru": "номер счёта"
    },
    "short": {
      "de": "eine Zahl, die ein Bankkonto eindeutig identifiziert",
      "en": "a number that uniquely identifies a bank account",
      "uk": "число, яке однозначно ідентифікує банківський рахунок",
      "ru": "число, которое однозначно идентифицирует банковский счёт"
    },
    "def": {
      "de": "Die <b>Kontonummer</b> <g>müsste</g> auf der Rückseite der Karte stehen.",
      "en": "The <b>account number</b> <g>should</g> be on the back of the card.",
      "uk": "<b>Номер рахунку</b>, <g>мабуть</g>, вказаний на звороті картки.",
      "ru": "<b>Номер счёта</b>, <g>наверное</g>, указан на обратной стороне карты."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_017",
    "cat": "k3",
    "term": {
      "de": "der Kontostand",
      "en": "account balance",
      "uk": "баланс рахунку",
      "ru": "баланс счёта"
    },
    "short": {
      "de": "die Menge Geld, die gerade auf einem Konto ist",
      "en": "the amount of money currently in an account",
      "uk": "кількість грошей, яка зараз є на рахунку",
      "ru": "количество денег, которое сейчас есть на счёте"
    },
    "def": {
      "de": "Der <b>Kontostand</b> <g>dürfte</g> nach dem Einkauf ziemlich niedrig sein.",
      "en": "The <b>account balance</b> is <g>probably</g> quite low after the shopping trip.",
      "uk": "<b>Баланс рахунку</b>, <g>ймовірно</g>, досить низький після покупок.",
      "ru": "<b>Баланс счёта</b>, <g>вероятно</g>, довольно низкий после покупок."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_018",
    "cat": "k3",
    "term": {
      "de": "abheben (Geld)",
      "en": "to withdraw (money)",
      "uk": "знімати (гроші)",
      "ru": "снимать (деньги)"
    },
    "short": {
      "de": "Geld vom eigenen Bankkonto nehmen, zum Beispiel am Automaten",
      "en": "to take money out of your own bank account, for example at a machine",
      "uk": "знімати гроші зі свого банківського рахунку, наприклад у банкоматі",
      "ru": "снимать деньги со своего банковского счёта, например в банкомате"
    },
    "def": {
      "de": "Er <g>könnte</g> schon Geld am Automaten <b>abgehoben</b> haben.",
      "en": "He <g>could</g> have already <b>withdrawn</b> money at the cash machine.",
      "uk": "Він, <g>можливо</g>, уже <b>зняв</b> гроші в банкоматі.",
      "ru": "Он, <g>возможно</g>, уже <b>снял</b> деньги в банкомате."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_019",
    "cat": "k3",
    "term": {
      "de": "einzahlen",
      "en": "to deposit",
      "uk": "вносити (гроші)",
      "ru": "вносить (деньги)"
    },
    "short": {
      "de": "Geld auf ein Bankkonto bringen",
      "en": "to put money into a bank account",
      "uk": "класти гроші на банківський рахунок",
      "ru": "класть деньги на банковский счёт"
    },
    "def": {
      "de": "Frau Nowak <g>müsste</g> das Geld schon <b>eingezahlt</b> haben, sie war heute Morgen bei der Bank.",
      "en": "Mrs Nowak <g>must</g> have already <b>deposited</b> the money, she was at the bank this morning.",
      "uk": "Пані Новак, <g>напевно</g>, уже <b>внесла</b> гроші, вона сьогодні вранці була в банку.",
      "ru": "Госпожа Новак, <g>наверное</g>, уже <b>внесла</b> деньги, она сегодня утром была в банке."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_020",
    "cat": "k3",
    "term": {
      "de": "die Bankfiliale",
      "en": "bank branch",
      "uk": "відділення банку",
      "ru": "отделение банка"
    },
    "short": {
      "de": "ein Gebäude einer Bank, in das man persönlich gehen kann",
      "en": "a building of a bank that you can visit in person",
      "uk": "приміщення банку, куди можна прийти особисто",
      "ru": "помещение банка, куда можно прийти лично"
    },
    "def": {
      "de": "Die <b>Bankfiliale</b> in der Innenstadt <g>dürfte</g> um achtzehn Uhr schließen.",
      "en": "The <b>bank branch</b> in the city centre <g>probably</g> closes at six p.m.",
      "uk": "<b>Відділення банку</b> в центрі міста, <g>ймовірно</g>, зачиняється о шостій вечора.",
      "ru": "<b>Отделение банка</b> в центре города, <g>вероятно</g>, закрывается в шесть вечера."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_021",
    "cat": "k3",
    "term": {
      "de": "das Online-Banking",
      "en": "online banking",
      "uk": "онлайн-банкінг",
      "ru": "онлайн-банкинг"
    },
    "short": {
      "de": "wenn man seine Bankgeschäfte über das Internet erledigt",
      "en": "when you do your banking over the internet",
      "uk": "коли банківські операції виконуєш через інтернет",
      "ru": "когда банковские операции выполняешь через интернет"
    },
    "def": {
      "de": "Mit <b>Online-Banking</b> <g>könnte</g> das Ganze viel schneller gehen.",
      "en": "With <b>online banking</b>, the whole thing <g>could</g> go much faster.",
      "uk": "З <b>онлайн-банкінгом</b> усе, <g>можливо</g>, пройде набагато швидше.",
      "ru": "С <b>онлайн-банкингом</b> всё, <g>возможно</g>, пройдёт намного быстрее."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_022",
    "cat": "k3",
    "term": {
      "de": "die Geheimzahl",
      "en": "PIN",
      "uk": "PIN-код",
      "ru": "ПИН-код"
    },
    "short": {
      "de": "eine geheime Zahl, mit der man am Automaten Geld bekommt",
      "en": "a secret number you use to get money at a cash machine",
      "uk": "секретний код, за яким отримуєш гроші в банкоматі",
      "ru": "секретный код, по которому получаешь деньги в банкомате"
    },
    "def": {
      "de": "Er <g>müsste</g> seine <b>Geheimzahl</b> vergessen haben, er versucht es schon zum dritten Mal.",
      "en": "He <g>must</g> have forgotten his <b>PIN</b>, he's already trying for the third time.",
      "uk": "Він, <g>напевно</g>, забув свій <b>PIN-код</b>, він уже втретє намагається його ввести.",
      "ru": "Он, <g>наверное</g>, забыл свой <b>ПИН-код</b>, он уже в третий раз пытается его ввести."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_023",
    "cat": "k3",
    "term": {
      "de": "gültig",
      "en": "valid",
      "uk": "дійсний, чинний",
      "ru": "действительный"
    },
    "short": {
      "de": "wenn ein Dokument oder eine Karte noch benutzt werden darf",
      "en": "when a document or card may still be used",
      "uk": "коли документ чи картка ще можуть використовуватися",
      "ru": "когда документ или карта ещё могут использоваться"
    },
    "def": {
      "de": "Die alte Karte <g>dürfte</g> nicht mehr <b>gültig</b> sein.",
      "en": "The old card is <g>probably</g> no longer <b>valid</b>.",
      "uk": "Стара картка, <g>ймовірно</g>, уже не <b>дійсна</b>.",
      "ru": "Старая карта, <g>вероятно</g>, уже не <b>действительна</b>."
    },
    "gram": "modalverben_vermutung"
  },
  {
    "id": "k3_024",
    "cat": "k3",
    "term": {
      "de": "der Kontoauszug",
      "en": "bank statement",
      "uk": "виписка з рахунку",
      "ru": "выписка со счёта"
    },
    "short": {
      "de": "ein Papier oder eine Datei, die alle Bewegungen auf einem Konto zeigt",
      "en": "a document that shows all transactions on an account",
      "uk": "документ, який показує всі рухи коштів на рахунку",
      "ru": "документ, который показывает все движения средств на счёте"
    },
    "def": {
      "de": "Die letzte Seite <g>des</g> <b>Kontoauszugs</b> zeigt den aktuellen Kontostand.",
      "en": "The last page <g>of the</g> <b>bank statement</b> shows the current balance.",
      "uk": "Остання сторінка <b>виписки з рахунку</b> показує актуальний баланс.",
      "ru": "Последняя страница <b>выписки со счёта</b> показывает актуальный баланс."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_025",
    "cat": "k3",
    "term": {
      "de": "der Kunde / die Kundin",
      "en": "customer",
      "uk": "клієнт / клієнтка",
      "ru": "клиент / клиентка"
    },
    "short": {
      "de": "eine Person, die bei einer Firma etwas kauft oder einen Service nutzt",
      "en": "a person who buys something or uses a service from a company",
      "uk": "людина, яка купує щось або користується послугою фірми",
      "ru": "человек, который покупает что-то или пользуется услугой фирмы"
    },
    "def": {
      "de": "Die Zufriedenheit <g>des</g> <b>Kunden</b> ist der Bank sehr wichtig.",
      "en": "The satisfaction <g>of the</g> <b>customer</b> is very important to the bank.",
      "uk": "Задоволеність <b>клієнта</b> дуже важлива для банку.",
      "ru": "Удовлетворённость <b>клиента</b> очень важна для банка."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_026",
    "cat": "k3",
    "term": {
      "de": "der Dispokredit",
      "en": "overdraft facility",
      "uk": "кредитний ліміт",
      "ru": "кредитный лимит"
    },
    "short": {
      "de": "ein kleiner Kredit, der erlaubt, mehr Geld auszugeben, als auf dem Konto ist",
      "en": "a small loan that allows you to spend more money than is in your account",
      "uk": "невеликий кредит, який дозволяє витрачати більше грошей, ніж є на рахунку",
      "ru": "небольшой кредит, который позволяет тратить больше денег, чем есть на счёте"
    },
    "def": {
      "de": "Die Zinsen <g>des</g> <b>Dispokredits</b> sind bei dieser Bank leider sehr hoch.",
      "en": "The interest <g>of the</g> <b>overdraft facility</b> is unfortunately very high at this bank.",
      "uk": "Відсотки за <b>кредитним лімітом</b> у цьому банку, на жаль, дуже високі.",
      "ru": "Проценты по <b>кредитному лимиту</b> в этом банке, к сожалению, очень высокие."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_027",
    "cat": "k3",
    "term": {
      "de": "die Zinsen",
      "en": "interest",
      "uk": "відсотки",
      "ru": "проценты"
    },
    "short": {
      "de": "das zusätzliche Geld, das man für gespartes oder geliehenes Geld bekommt oder bezahlt",
      "en": "the extra money you receive or pay for money saved or borrowed",
      "uk": "додаткові гроші, які отримуєш чи платиш за заощаджені чи позичені гроші",
      "ru": "дополнительные деньги, которые получаешь или платишь за сбережённые или занятые деньги"
    },
    "def": {
      "de": "Die Höhe <g>der</g> <b>Zinsen</b> hängt von der Bank und der Kontoart ab.",
      "en": "The level <g>of the</g> <b>interest</b> depends on the bank and the type of account.",
      "uk": "Розмір <b>відсотків</b> залежить від банку та типу рахунку.",
      "ru": "Размер <b>процентов</b> зависит от банка и типа счёта."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_028",
    "cat": "k3",
    "term": {
      "de": "das Sparbuch",
      "en": "savings book",
      "uk": "ощадна книжка",
      "ru": "сберегательная книжка"
    },
    "short": {
      "de": "ein kleines Buch oder Konto, mit dem man Geld spart",
      "en": "a small book or account you use to save money",
      "uk": "невелика книжка чи рахунок, на якому заощаджуєш гроші",
      "ru": "небольшая книжка или счёт, на котором сберегаешь деньги"
    },
    "def": {
      "de": "Der Wert <g>des</g> <b>Sparbuchs</b> ist in den letzten Jahren nur langsam gestiegen.",
      "en": "The value <g>of the</g> <b>savings book</b> has only risen slowly in recent years.",
      "uk": "Вартість <b>ощадної книжки</b> за останні роки зростала лише повільно.",
      "ru": "Стоимость <b>сберегательной книжки</b> за последние годы росла лишь медленно."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_029",
    "cat": "k3",
    "term": {
      "de": "die Kreditkarte",
      "en": "credit card",
      "uk": "кредитна картка",
      "ru": "кредитная карта"
    },
    "short": {
      "de": "eine Karte, mit der man bezahlen kann, ohne sofort Geld vom Konto zu nehmen",
      "en": "a card you can use to pay without immediately taking money from your account",
      "uk": "картка, якою можна платити, не знімаючи одразу гроші з рахунку",
      "ru": "карта, которой можно платить, не снимая сразу деньги со счёта"
    },
    "def": {
      "de": "Die Gültigkeit <g>der</g> <b>Kreditkarte</b> endet in zwei Monaten.",
      "en": "The validity <g>of the</g> <b>credit card</b> ends in two months.",
      "uk": "Термін дії <b>кредитної картки</b> закінчується через два місяці.",
      "ru": "Срок действия <b>кредитной карты</b> заканчивается через два месяца."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_030",
    "cat": "k3",
    "term": {
      "de": "die Bankkarte",
      "en": "bank card, debit card",
      "uk": "банківська картка",
      "ru": "банковская карта"
    },
    "short": {
      "de": "eine Karte von der eigenen Bank, mit der man bezahlt und Geld abhebt",
      "en": "a card from your own bank that you use to pay and withdraw money",
      "uk": "картка власного банку, якою платиш і знімаєш гроші",
      "ru": "карта своего банка, которой платишь и снимаешь деньги"
    },
    "def": {
      "de": "Die Rückseite <g>der</g> <b>Bankkarte</b> zeigt die Nummer für den Sperrnotruf.",
      "en": "The back <g>of the</g> <b>bank card</b> shows the number for the emergency blocking hotline.",
      "uk": "На звороті <b>банківської картки</b> вказаний номер гарячої лінії для блокування.",
      "ru": "На обратной стороне <b>банковской карты</b> указан номер горячей линии для блокировки."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_031",
    "cat": "k3",
    "term": {
      "de": "die Kontogebühr",
      "en": "account fee",
      "uk": "плата за рахунок",
      "ru": "плата за счёт"
    },
    "short": {
      "de": "das Geld, das man der Bank für die Nutzung des Kontos bezahlt",
      "en": "the money you pay the bank for using the account",
      "uk": "гроші, які платиш банку за користування рахунком",
      "ru": "деньги, которые платишь банку за пользование счётом"
    },
    "def": {
      "de": "Die Höhe <g>der</g> <b>Kontogebühr</b> ist von Bank zu Bank sehr unterschiedlich.",
      "en": "The amount <g>of the</g> <b>account fee</b> varies a lot from bank to bank.",
      "uk": "Розмір <b>плати за рахунок</b> дуже відрізняється від банку до банку.",
      "ru": "Размер <b>платы за счёт</b> сильно отличается от банка к банку."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_032",
    "cat": "k3",
    "term": {
      "de": "der Diebstahl",
      "en": "theft",
      "uk": "крадіжка",
      "ru": "кража"
    },
    "short": {
      "de": "wenn jemand etwas nimmt, das ihm nicht gehört",
      "en": "when someone takes something that doesn't belong to them",
      "uk": "коли хтось бере щось, що йому не належить",
      "ru": "когда кто-то берёт что-то, что ему не принадлежит"
    },
    "def": {
      "de": "Der Verdacht <g>des</g> <b>Diebstahls</b> hat sich zum Glück nicht bestätigt.",
      "en": "The suspicion <g>of</g> <b>theft</b> luckily was not confirmed.",
      "uk": "Підозра у <b>крадіжці</b>, на щастя, не підтвердилася.",
      "ru": "Подозрение в <b>краже</b>, к счастью, не подтвердилось."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_033",
    "cat": "k3",
    "term": {
      "de": "verlieren",
      "en": "to lose",
      "uk": "губити, втрачати",
      "ru": "терять"
    },
    "short": {
      "de": "etwas nicht mehr finden können, weil man nicht weiß, wo es ist",
      "en": "to no longer be able to find something because you don't know where it is",
      "uk": "не могти знайти щось, бо не знаєш, де воно",
      "ru": "не мочь найти что-то, потому что не знаешь, где оно"
    },
    "def": {
      "de": "Der Ärger <g>des</g> <b>Verlierens</b> der Karte war groß, aber die Bank half schnell.",
      "en": "The frustration <g>of</g> <b>losing</b> the card was big, but the bank helped quickly.",
      "uk": "Прикрість через <b>втрату</b> картки була великою, але банк швидко допоміг.",
      "ru": "Досада из-за <b>потери</b> карты была большой, но банк быстро помог."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_034",
    "cat": "k3",
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
      "ru": "брать что-то, что принадлежит другому человеку, без разрешения"
    },
    "def": {
      "de": "Die Folgen <g>des</g> <b>Stehlens</b> der Karte spürte sie erst am nächsten Tag.",
      "en": "She only felt the consequences <g>of</g> the card being <b>stolen</b> the next day.",
      "uk": "Наслідки <b>крадіжки</b> картки вона відчула лише наступного дня.",
      "ru": "Последствия <b>кражи</b> карты она почувствовала только на следующий день."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_035",
    "cat": "k3",
    "term": {
      "de": "die Anzeige",
      "en": "police report",
      "uk": "заява (в поліцію)",
      "ru": "заявление (в полицию)"
    },
    "short": {
      "de": "eine offizielle Meldung bei der Polizei über ein Verbrechen",
      "en": "an official report to the police about a crime",
      "uk": "офіційне повідомлення поліції про злочин",
      "ru": "официальное сообщение в полицию о преступлении"
    },
    "def": {
      "de": "Der Text <g>der</g> <b>Anzeige</b> musste sehr genau geschrieben werden.",
      "en": "The text <g>of the</g> police <b>report</b> had to be written very precisely.",
      "uk": "Текст <b>заяви</b> в поліцію потрібно було написати дуже точно.",
      "ru": "Текст <b>заявления</b> в полицию нужно было написать очень точно."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_036",
    "cat": "k3",
    "term": {
      "de": "die Polizei",
      "en": "police",
      "uk": "поліція",
      "ru": "полиция"
    },
    "short": {
      "de": "die Organisation, die für Sicherheit sorgt und Verbrechen untersucht",
      "en": "the organisation that provides security and investigates crimes",
      "uk": "організація, яка забезпечує безпеку та розслідує злочини",
      "ru": "организация, которая обеспечивает безопасность и расследует преступления"
    },
    "def": {
      "de": "Die Nummer <g>der</g> <b>Polizei</b> hatte sie zum Glück im Handy gespeichert.",
      "en": "Luckily, she had the <b>police</b>'s number saved in her phone.",
      "uk": "Номер <b>поліції</b> вона, на щастя, зберегла у телефоні.",
      "ru": "Номер <b>полиции</b> она, к счастью, сохранила в телефоне."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_037",
    "cat": "k3",
    "term": {
      "de": "ersetzen",
      "en": "to replace",
      "uk": "замінювати",
      "ru": "заменять"
    },
    "short": {
      "de": "etwas Neues anstelle von etwas Kaputtem oder Verlorenem geben",
      "en": "to give something new instead of something broken or lost",
      "uk": "давати щось нове замість зламаного чи втраченого",
      "ru": "давать что-то новое вместо сломанного или утраченного"
    },
    "def": {
      "de": "Die Kosten <g>des</g> <b>Ersetzens</b> der Karte trägt normalerweise die Bank.",
      "en": "The costs <g>of</g> <b>replacing</b> the card are usually covered by the bank.",
      "uk": "Витрати на <b>заміну</b> картки зазвичай несе банк.",
      "ru": "Расходы на <b>замену</b> карты обычно несёт банк."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_038",
    "cat": "k3",
    "term": {
      "de": "die Ersatzkarte",
      "en": "replacement card",
      "uk": "нова картка (замість втраченої)",
      "ru": "новая карта (взамен утраченной)"
    },
    "short": {
      "de": "eine neue Karte, die man anstelle einer verlorenen oder gestohlenen Karte bekommt",
      "en": "a new card you get instead of a lost or stolen one",
      "uk": "нова картка, яку отримуєш замість втраченої чи вкраденої",
      "ru": "новая карта, которую получаешь вместо утраченной или украденной"
    },
    "def": {
      "de": "Die Lieferzeit <g>der</g> <b>Ersatzkarte</b> beträgt meistens etwa eine Woche.",
      "en": "The delivery time <g>of the</g> <b>replacement card</b> is usually about a week.",
      "uk": "Час доставки <b>нової картки</b> зазвичай становить близько тижня.",
      "ru": "Срок доставки <b>новой карты</b> обычно составляет около недели."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_039",
    "cat": "k3",
    "term": {
      "de": "melden",
      "en": "to report",
      "uk": "повідомляти",
      "ru": "сообщать"
    },
    "short": {
      "de": "einer offiziellen Stelle sagen, dass etwas passiert ist",
      "en": "to tell an official body that something has happened",
      "uk": "повідомляти офіційній інстанції, що щось сталося",
      "ru": "сообщать официальной инстанции, что что-то произошло"
    },
    "def": {
      "de": "Die Wichtigkeit <g>des</g> schnellen <b>Meldens</b> wurde ihr am Telefon erklärt.",
      "en": "The importance <g>of</g> <b>reporting</b> quickly was explained to her on the phone.",
      "uk": "Важливість швидкого <b>повідомлення</b> їй пояснили по телефону.",
      "ru": "Важность быстрого <b>сообщения</b> ей объяснили по телефону."
    },
    "gram": "genitiv"
  },
  {
    "id": "k3_040",
    "cat": "k3",
    "term": {
      "de": "die Hausratversicherung",
      "en": "home contents insurance",
      "uk": "страхування майна",
      "ru": "страхование имущества"
    },
    "short": {
      "de": "eine Versicherung, die bei Schäden an den Sachen in der Wohnung bezahlt",
      "en": "an insurance that pays for damage to the belongings in your home",
      "uk": "страхування, яке платить у разі шкоди речам у квартирі",
      "ru": "страхование, которое платит при ущербе вещам в квартире"
    },
    "def": {
      "de": "Wir haben keine <b>Hausratversicherung</b>, <g>obwohl</g> unsere Nachbarn uns das oft empfohlen haben.",
      "en": "We don't have <b>home contents insurance</b> <g>although</g> our neighbours have often recommended it to us.",
      "uk": "У нас немає <b>страхування майна</b>, <g>хоча</g> наші сусіди часто нам це радили.",
      "ru": "У нас нет <b>страхования имущества</b>, <g>хотя</g> наши соседи часто нам это советовали."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_041",
    "cat": "k3",
    "term": {
      "de": "die Kfz-Versicherung",
      "en": "car insurance",
      "uk": "автострахування",
      "ru": "автострахование"
    },
    "short": {
      "de": "eine Versicherung für ein Auto oder ein anderes Fahrzeug",
      "en": "an insurance for a car or another vehicle",
      "uk": "страхування автомобіля чи іншого транспортного засобу",
      "ru": "страхование автомобиля или другого транспортного средства"
    },
    "def": {
      "de": "Herr Petrov hat die <b>Kfz-Versicherung</b> gewechselt, <g>obwohl</g> der alte Vertrag noch ein Jahr lief.",
      "en": "Mr Petrov switched his <b>car insurance</b> <g>although</g> the old contract still had a year left.",
      "uk": "Пан Петров змінив <b>автостраховку</b>, <g>хоча</g> старий договір діяв ще рік.",
      "ru": "Господин Петров сменил <b>автостраховку</b>, <g>хотя</g> старый договор действовал ещё год."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_042",
    "cat": "k3",
    "term": {
      "de": "der Versicherungsschutz",
      "en": "insurance coverage",
      "uk": "страховий захист",
      "ru": "страховая защита"
    },
    "short": {
      "de": "das, was eine Versicherung im Schadensfall genau bezahlt",
      "en": "what an insurance exactly pays in the case of damage",
      "uk": "те, що страхування точно оплачує у разі шкоди",
      "ru": "то, что страхование точно оплачивает в случае ущерба"
    },
    "def": {
      "de": "Der <b>Versicherungsschutz</b> war sehr gut, <g>obwohl</g> der Preis eigentlich niedrig war.",
      "en": "The <b>insurance coverage</b> was very good <g>although</g> the price was actually low.",
      "uk": "<b>Страховий захист</b> був дуже добрим, <g>хоча</g> ціна насправді була низькою.",
      "ru": "<b>Страховая защита</b> была очень хорошей, <g>хотя</g> цена на самом деле была низкой."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_043",
    "cat": "k3",
    "term": {
      "de": "die Selbstbeteiligung",
      "en": "deductible, excess",
      "uk": "франшиза",
      "ru": "франшиза"
    },
    "short": {
      "de": "der Teil der Kosten, den man bei einem Schaden selbst bezahlen muss",
      "en": "the part of the costs you have to pay yourself in case of damage",
      "uk": "частина витрат, яку сам сплачуєш у разі шкоди",
      "ru": "часть расходов, которую сам платишь в случае ущерба"
    },
    "def": {
      "de": "Die <b>Selbstbeteiligung</b> war hoch, <g>obwohl</g> die monatlichen Kosten der Versicherung niedrig waren.",
      "en": "The <b>deductible</b> was high <g>although</g> the monthly cost of the insurance was low.",
      "uk": "<b>Франшиза</b> була високою, <g>хоча</g> щомісячна вартість страхування була низькою.",
      "ru": "<b>Франшиза</b> была высокой, <g>хотя</g> ежемесячная стоимость страхования была низкой."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_044",
    "cat": "k3",
    "term": {
      "de": "der Versicherungsfall",
      "en": "insured event, claim situation",
      "uk": "страховий випадок",
      "ru": "страховой случай"
    },
    "short": {
      "de": "eine Situation, in der die Versicherung tatsächlich zahlen muss",
      "en": "a situation in which the insurance actually has to pay",
      "uk": "ситуація, в якій страхова дійсно повинна платити",
      "ru": "ситуация, в которой страховая действительно должна платить"
    },
    "def": {
      "de": "Im <b>Versicherungsfall</b> half die Firma sofort, <g>obwohl</g> es Wochenende war.",
      "en": "In the case of a claim, the company helped immediately <g>although</g> it was the weekend.",
      "uk": "У <b>страховому випадку</b> фірма допомогла одразу, <g>хоча</g> були вихідні.",
      "ru": "В <b>страховом случае</b> фирма помогла сразу, <g>хотя</g> были выходные."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_045",
    "cat": "k3",
    "term": {
      "de": "freiwillig",
      "en": "voluntary",
      "uk": "добровільний",
      "ru": "добровольный"
    },
    "short": {
      "de": "wenn man etwas selbst und ohne Pflicht macht",
      "en": "when you do something yourself, without being obliged to",
      "uk": "коли робиш щось сам, без обовʼязку",
      "ru": "когда делаешь что-то сам, без обязанности"
    },
    "def": {
      "de": "Diese Versicherung ist <b>freiwillig</b>, <g>obwohl</g> viele Leute sie trotzdem abschließen.",
      "en": "This insurance is <b>voluntary</b>, <g>although</g> many people take it out anyway.",
      "uk": "Це страхування <b>добровільне</b>, <g>хоча</g> багато людей все одно його оформлюють.",
      "ru": "Это страхование <b>добровольное</b>, <g>хотя</g> многие люди всё равно его оформляют."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_046",
    "cat": "k3",
    "term": {
      "de": "notwendig",
      "en": "necessary",
      "uk": "необхідний",
      "ru": "необходимый"
    },
    "short": {
      "de": "wenn man etwas wirklich braucht",
      "en": "when you really need something",
      "uk": "коли щось справді потрібне",
      "ru": "когда что-то действительно нужно"
    },
    "def": {
      "de": "Eine Haftpflichtversicherung ist wirklich <b>notwendig</b>, <g>obwohl</g> viele junge Leute das unterschätzen.",
      "en": "Liability insurance is really <b>necessary</b>, <g>although</g> many young people underestimate this.",
      "uk": "Страхування цивільної відповідальності справді <b>необхідне</b>, <g>хоча</g> багато молодих людей це недооцінюють.",
      "ru": "Страхование гражданской ответственности действительно <b>необходимо</b>, <g>хотя</g> многие молодые люди это недооценивают."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_047",
    "cat": "k3",
    "term": {
      "de": "sinnvoll",
      "en": "sensible, worthwhile",
      "uk": "доцільний",
      "ru": "целесообразный"
    },
    "short": {
      "de": "wenn etwas eine gute und logische Idee ist",
      "en": "when something is a good and logical idea",
      "uk": "коли щось є хорошою і логічною ідеєю",
      "ru": "когда что-то является хорошей и логичной идеей"
    },
    "def": {
      "de": "Eine Rechtsschutzversicherung ist oft <b>sinnvoll</b>, <g>obwohl</g> sie zusätzliche Kosten bedeutet.",
      "en": "Legal expenses insurance is often <b>worthwhile</b>, <g>although</g> it means extra costs.",
      "uk": "Страхування юридичних витрат часто <b>доцільне</b>, <g>хоча</g> це означає додаткові витрати.",
      "ru": "Страхование юридических расходов часто <b>целесообразно</b>, <g>хотя</g> это означает дополнительные расходы."
    },
    "gram": "nebensatz_mit_obwohl"
  },
  {
    "id": "k3_048",
    "cat": "k3",
    "term": {
      "de": "das Kündigungsschreiben",
      "en": "letter of termination",
      "uk": "лист про розірвання договору",
      "ru": "письмо о расторжении договора"
    },
    "short": {
      "de": "ein Brief, mit dem man offiziell einen Vertrag beendet",
      "en": "a letter with which you officially end a contract",
      "uk": "лист, яким офіційно завершуєш договір",
      "ru": "письмо, которым официально завершаешь договор"
    },
    "def": {
      "de": "Ohne ein schriftliches <g><b>Kündigungsschreiben</b></g> akzeptiert die Versicherung die Kündigung oft nicht.",
      "en": "Without a written <b>letter of termination</b>, the insurance often does not accept the cancellation.",
      "uk": "Без письмового <b>листа про розірвання договору</b> страхова часто не приймає розірвання.",
      "ru": "Без письменного <b>письма о расторжении договора</b> страховая часто не принимает расторжение."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_049",
    "cat": "k3",
    "term": {
      "de": "die Kündigungsfrist",
      "en": "notice period",
      "uk": "термін розірвання",
      "ru": "срок расторжения"
    },
    "short": {
      "de": "die Zeit, die man vor der Kündigung eines Vertrags einhalten muss",
      "en": "the time you must observe before terminating a contract",
      "uk": "термін, який потрібно дотримати перед розірванням договору",
      "ru": "срок, который нужно соблюсти перед расторжением договора"
    },
    "def": {
      "de": "Die <g><b>Kündigungsfrist</b></g> beträgt bei den meisten Versicherungen einen Monat.",
      "en": "The <b>notice period</b> is one month for most insurance policies.",
      "uk": "<b>Термін розірвання</b> у більшості страхових компаній становить один місяць.",
      "ru": "<b>Срок расторжения</b> в большинстве страховых компаний составляет один месяц."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_050",
    "cat": "k3",
    "term": {
      "de": "der Zahlungstermin",
      "en": "payment date",
      "uk": "дата платежу",
      "ru": "дата платежа"
    },
    "short": {
      "de": "der Tag, an dem eine Zahlung gemacht werden muss",
      "en": "the day on which a payment has to be made",
      "uk": "день, коли потрібно здійснити оплату",
      "ru": "день, когда нужно осуществить оплату"
    },
    "def": {
      "de": "Der <g><b>Zahlungstermin</b></g> für die Versicherung ist immer der erste Tag des Monats.",
      "en": "The <b>payment date</b> for the insurance is always the first day of the month.",
      "uk": "<b>Дата платежу</b> за страховку завжди перший день місяця.",
      "ru": "<b>Дата платежа</b> за страховку всегда первый день месяца."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_051",
    "cat": "k3",
    "term": {
      "de": "die Reiseversicherung",
      "en": "travel insurance",
      "uk": "туристична страховка",
      "ru": "туристическая страховка"
    },
    "short": {
      "de": "eine Versicherung, die während einer Reise bei Problemen hilft",
      "en": "an insurance that helps with problems during a trip",
      "uk": "страхування, яке допомагає у разі проблем під час подорожі",
      "ru": "страхование, которое помогает при проблемах во время путешествия"
    },
    "def": {
      "de": "Vor dem Urlaub hat sie schnell eine <g><b>Reiseversicherung</b></g> abgeschlossen.",
      "en": "Before the holiday, she quickly took out <b>travel insurance</b>.",
      "uk": "Перед відпусткою вона швидко оформила <b>туристичну страховку</b>.",
      "ru": "Перед отпуском она быстро оформила <b>туристическую страховку</b>."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_052",
    "cat": "k3",
    "term": {
      "de": "das Beratungsgespräch",
      "en": "consultation",
      "uk": "консультаційна бесіда",
      "ru": "консультационная беседа"
    },
    "short": {
      "de": "ein Gespräch, in dem man Informationen und Rat zu einem Thema bekommt",
      "en": "a conversation in which you get information and advice on a topic",
      "uk": "розмова, під час якої отримуєш інформацію та поради щодо теми",
      "ru": "разговор, во время которого получаешь информацию и советы по теме"
    },
    "def": {
      "de": "Beim <g><b>Beratungsgespräch</b></g> hat die Vertreterin alle Fragen genau beantwortet.",
      "en": "During the <b>consultation</b>, the representative answered all questions precisely.",
      "uk": "Під час <b>консультаційної бесіди</b> представниця точно відповіла на всі запитання.",
      "ru": "Во время <b>консультационной беседы</b> представитель точно ответил на все вопросы."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_053",
    "cat": "k3",
    "term": {
      "de": "die Fahrerlaubnis",
      "en": "driving licence, permit",
      "uk": "посвідчення водія",
      "ru": "водительские права"
    },
    "short": {
      "de": "das offizielle Recht, ein Auto oder ein anderes Fahrzeug zu fahren",
      "en": "the official right to drive a car or another vehicle",
      "uk": "офіційне право керувати автомобілем чи іншим транспортним засобом",
      "ru": "официальное право управлять автомобилем или другим транспортным средством"
    },
    "def": {
      "de": "Ohne gültige <g><b>Fahrerlaubnis</b></g> bezahlt die Versicherung im Schadensfall nichts.",
      "en": "Without a valid <b>driving licence</b>, the insurance pays nothing in case of damage.",
      "uk": "Без дійсного <b>посвідчення водія</b> страхова нічого не платить у разі шкоди.",
      "ru": "Без действительных <b>водительских прав</b> страховая ничего не платит в случае ущерба."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_054",
    "cat": "k3",
    "term": {
      "de": "der Sparplan",
      "en": "savings plan",
      "uk": "ощадний план",
      "ru": "сберегательный план"
    },
    "short": {
      "de": "ein Plan, mit dem man regelmäßig einen festen Betrag spart",
      "en": "a plan with which you regularly save a fixed amount",
      "uk": "план, за яким регулярно заощаджуєш фіксовану суму",
      "ru": "план, по которому регулярно сберегаешь фиксированную сумму"
    },
    "def": {
      "de": "Mit einem <g><b>Sparplan</b></g> legt man jeden Monat automatisch etwas Geld zur Seite.",
      "en": "With a <b>savings plan</b>, you automatically set aside some money every month.",
      "uk": "За допомогою <b>ощадного плану</b> щомісяця автоматично відкладаєш трохи грошей.",
      "ru": "С помощью <b>сберегательного плана</b> ежемесячно автоматически откладываешь немного денег."
    },
    "gram": "komposita_verb_nomen"
  },
  {
    "id": "k3_055",
    "cat": "k3",
    "term": {
      "de": "bestätigen",
      "en": "to confirm",
      "uk": "підтверджувати",
      "ru": "подтверждать"
    },
    "short": {
      "de": "sagen oder zeigen, dass etwas sicher richtig oder wahr ist",
      "en": "to say or show that something is definitely correct or true",
      "uk": "казати чи показувати, що щось точно правильне чи правдиве",
      "ru": "говорить или показывать, что что-то точно верное или правдивое"
    },
    "def": {
      "de": "Die Firma hat mir geschrieben, <g>dass</g> sie die Kündigung <b>bestätigt</b>.",
      "en": "The company wrote to me <g>that</g> they <b>confirm</b> the termination.",
      "uk": "Фірма написала мені, <g>що</g> вона <b>підтверджує</b> розірвання договору.",
      "ru": "Фирма написала мне, <g>что</g> она <b>подтверждает</b> расторжение договора."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_056",
    "cat": "k3",
    "term": {
      "de": "rechtzeitig",
      "en": "in time, punctually",
      "uk": "вчасно",
      "ru": "вовремя"
    },
    "short": {
      "de": "nicht zu spät, sondern genau zur richtigen Zeit",
      "en": "not too late, but exactly at the right time",
      "uk": "не запізно, а саме вчасно",
      "ru": "не поздно, а точно вовремя"
    },
    "def": {
      "de": "Ich habe die Kündigung geschickt, <g>weil</g> ich sie <b>rechtzeitig</b> abschicken wollte.",
      "en": "I sent the termination <g>because</g> I wanted to send it in <b>time</b>.",
      "uk": "Я надіслав розірвання договору, <g>тому що</g> хотів зробити це <b>вчасно</b>.",
      "ru": "Я отправил расторжение договора, <g>потому что</g> хотел сделать это <b>вовремя</b>."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_057",
    "cat": "k3",
    "term": {
      "de": "einhalten",
      "en": "to keep, to meet (a deadline)",
      "uk": "дотримувати (терміну)",
      "ru": "соблюдать (срок)"
    },
    "short": {
      "de": "genau das machen, was eine Regel oder Frist verlangt",
      "en": "to do exactly what a rule or deadline requires",
      "uk": "робити точно так, як вимагає правило чи термін",
      "ru": "делать точно так, как требует правило или срок"
    },
    "def": {
      "de": "<g>Wenn</g> man die Kündigungsfrist nicht <b>einhält</b>, verlängert sich der Vertrag automatisch.",
      "en": "<g>If</g> you don't <b>meet</b> the notice period, the contract is automatically extended.",
      "uk": "<g>Якщо</g> не <b>дотримати</b> терміну розірвання, договір автоматично продовжується.",
      "ru": "<g>Если</g> не <b>соблюсти</b> срок расторжения, договор автоматически продлевается."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_058",
    "cat": "k3",
    "term": {
      "de": "der Nachweis",
      "en": "proof",
      "uk": "доказ",
      "ru": "доказательство"
    },
    "short": {
      "de": "ein Dokument, das zeigt, dass etwas wirklich passiert ist",
      "en": "a document that shows that something has really happened",
      "uk": "документ, який показує, що щось справді відбулося",
      "ru": "документ, который показывает, что что-то действительно произошло"
    },
    "def": {
      "de": "Ich brauche einen <b>Nachweis</b>, <g>denn</g> die Bank glaubt mir sonst nicht.",
      "en": "I need <b>proof</b>, <g>because</g> otherwise the bank won't believe me.",
      "uk": "Мені потрібен <b>доказ</b>, <g>бо</g> інакше банк мені не повірить.",
      "ru": "Мне нужно <b>доказательство</b>, <g>потому что</g> иначе банк мне не поверит."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_059",
    "cat": "k3",
    "term": {
      "de": "die Bestätigung",
      "en": "confirmation",
      "uk": "підтвердження",
      "ru": "подтверждение"
    },
    "short": {
      "de": "ein Brief, eine E-Mail oder ein Wort, das zeigt, dass etwas sicher ist",
      "en": "a letter, email, or word that shows that something is certain",
      "uk": "лист, електронний лист або слово, яке показує, що щось точно так",
      "ru": "письмо, электронное письмо или слово, которое показывает, что что-то точно так"
    },
    "def": {
      "de": "Ich habe die <b>Bestätigung</b> noch nicht bekommen, <g>aber</g> ich mache mir keine Sorgen.",
      "en": "I haven't received the <b>confirmation</b> yet, <g>but</g> I'm not worried.",
      "uk": "Я ще не отримав <b>підтвердження</b>, <g>але</g> не хвилююся.",
      "ru": "Я ещё не получил <b>подтверждение</b>, <g>но</g> не волнуюсь."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k3_060",
    "cat": "k3",
    "term": {
      "de": "widerrufen",
      "en": "to revoke, to cancel",
      "uk": "скасовувати, відкликати",
      "ru": "отменять, отзывать"
    },
    "short": {
      "de": "eine Entscheidung oder einen Vertrag innerhalb einer bestimmten Zeit rückgängig machen",
      "en": "to reverse a decision or contract within a certain time",
      "uk": "скасовувати рішення чи договір протягом певного часу",
      "ru": "отменять решение или договор в течение определённого времени"
    },
    "def": {
      "de": "Sie kann den Vertrag <b>widerrufen</b>, <g>oder</g> sie behält ihn einfach wie geplant.",
      "en": "She can <b>revoke</b> the contract, <g>or</g> she can simply keep it as planned.",
      "uk": "Вона може <b>скасувати</b> договір, <g>або</g> просто залишити його, як планувалося.",
      "ru": "Она может <b>отозвать</b> договор, <g>или</g> просто оставить его, как планировалось."
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
    "id": "k4_016",
    "cat": "k4",
    "term": {
      "de": "das Frühstück",
      "en": "breakfast",
      "uk": "сніданок",
      "ru": "завтрак"
    },
    "short": {
      "de": "die erste Mahlzeit am Morgen",
      "en": "the first meal in the morning",
      "uk": "перший прийом їжі вранці",
      "ru": "первый приём пищи утром"
    },
    "def": {
      "de": "Ich esse selten <b>Frühstück</b>, <g>weil</g> ich morgens keinen Hunger habe.",
      "en": "I rarely eat <b>breakfast</b> <g>because</g> I'm not hungry in the morning.",
      "uk": "Я рідко їм <b>сніданок</b>, <g>тому що</g> вранці не відчуваю голоду.",
      "ru": "Я редко ем <b>завтрак</b>, <g>потому что</g> утром не чувствую голода."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_017",
    "cat": "k4",
    "term": {
      "de": "der Hunger",
      "en": "hunger",
      "uk": "голод",
      "ru": "голод"
    },
    "short": {
      "de": "das Gefühl, dass man essen möchte",
      "en": "the feeling that you want to eat",
      "uk": "відчуття, що хочеш їсти",
      "ru": "ощущение, что хочешь есть"
    },
    "def": {
      "de": "Ich merke, <g>dass</g> ich großen <b>Hunger</b> habe.",
      "en": "I notice <g>that</g> I'm very <b>hungry</b>.",
      "uk": "Я помічаю, <g>що</g> дуже <b>голодний(-а)</b>.",
      "ru": "Я замечаю, <g>что</g> очень <b>голоден/голодна</b>."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_018",
    "cat": "k4",
    "term": {
      "de": "der Appetit",
      "en": "appetite",
      "uk": "апетит",
      "ru": "аппетит"
    },
    "short": {
      "de": "die Lust, etwas zu essen",
      "en": "the desire to eat something",
      "uk": "бажання щось поїсти",
      "ru": "желание что-то поесть"
    },
    "def": {
      "de": "<g>Wenn</g> ich Stress habe, verliere ich meistens meinen <b>Appetit</b>.",
      "en": "<g>When</g> I'm stressed, I usually lose my <b>appetite</b>.",
      "uk": "<g>Коли</g> я в стресі, я зазвичай втрачаю <b>апетит</b>.",
      "ru": "<g>Когда</g> я в стрессе, я обычно теряю <b>аппетит</b>."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_019",
    "cat": "k4",
    "term": {
      "de": "süß",
      "en": "sweet",
      "uk": "солодкий",
      "ru": "сладкий"
    },
    "short": {
      "de": "wie Zucker oder Honig schmeckt",
      "en": "tastes like sugar or honey",
      "uk": "смакує як цукор чи мед",
      "ru": "на вкус как сахар или мёд"
    },
    "def": {
      "de": "Der Kuchen war sehr <b>süß</b>, <g>obwohl</g> wir kaum Zucker benutzt haben.",
      "en": "The cake was very <b>sweet</b>, <g>although</g> we hardly used any sugar.",
      "uk": "Торт був дуже <b>солодким</b>, <g>хоча</g> ми майже не використовували цукор.",
      "ru": "Торт был очень <b>сладким</b>, <g>хотя</g> мы почти не использовали сахар."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_020",
    "cat": "k4",
    "term": {
      "de": "salzig",
      "en": "salty",
      "uk": "солоний",
      "ru": "солёный"
    },
    "short": {
      "de": "wie Salz schmeckt",
      "en": "tastes like salt",
      "uk": "смакує як сіль",
      "ru": "на вкус как соль"
    },
    "def": {
      "de": "Die Suppe war <b>salzig</b>, <g>aber</g> trotzdem sehr lecker.",
      "en": "The soup was <b>salty</b>, <g>but</g> still very tasty.",
      "uk": "Суп був <b>солоним</b>, <g>але</g> все одно дуже смачним.",
      "ru": "Суп был <b>солёным</b>, <g>но</g> всё равно очень вкусным."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_021",
    "cat": "k4",
    "term": {
      "de": "vegetarisch",
      "en": "vegetarian",
      "uk": "вегетаріанський",
      "ru": "вегетарианский"
    },
    "short": {
      "de": "ohne Fleisch und Fisch",
      "en": "without meat and fish",
      "uk": "без мʼяса та риби",
      "ru": "без мяса и рыбы"
    },
    "def": {
      "de": "Wir essen jetzt meistens <b>vegetarisch</b>, <g>denn</g> das ist gesünder für uns.",
      "en": "We now mostly eat <b>vegetarian</b>, <g>as</g> it's healthier for us.",
      "uk": "Тепер ми переважно їмо <b>вегетаріанську</b> їжу, <g>бо</g> це для нас здоровіше.",
      "ru": "Теперь мы в основном едим <b>вегетарианскую</b> пищу, <g>потому что</g> это для нас полезнее."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_022",
    "cat": "k4",
    "term": {
      "de": "satt",
      "en": "full, satisfied",
      "uk": "ситий",
      "ru": "сытый"
    },
    "short": {
      "de": "wenn man genug gegessen hat und keinen Hunger mehr hat",
      "en": "when you have eaten enough and are no longer hungry",
      "uk": "коли ти достатньо поїв і більше не голодний",
      "ru": "когда ты достаточно поел и больше не голоден"
    },
    "def": {
      "de": "Möchtest du noch etwas essen, <g>oder</g> bist du schon <b>satt</b>?",
      "en": "Would you like to eat something else, <g>or</g> are you already <b>full</b>?",
      "uk": "Хочеш ще щось поїсти, <g>чи</g> ти вже <b>ситий(-а)</b>?",
      "ru": "Хочешь ещё что-то поесть, <g>или</g> ты уже <b>сыт(а)</b>?"
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_023",
    "cat": "k4",
    "term": {
      "de": "kalorienarm",
      "en": "low-calorie",
      "uk": "низькокалорійний",
      "ru": "низкокалорийный"
    },
    "short": {
      "de": "mit wenig Kalorien",
      "en": "with few calories",
      "uk": "з невеликою кількістю калорій",
      "ru": "с небольшим количеством калорий"
    },
    "def": {
      "de": "Der Salat ist <b>kalorienarm</b>, <g>deshalb</g> esse ich ihn oft zum Abendessen.",
      "en": "The salad is <b>low-calorie</b>, <g>therefore</g> I often eat it for dinner.",
      "uk": "Салат <b>низькокалорійний</b>, <g>тому</g> я часто їм його на вечерю.",
      "ru": "Салат <b>низкокалорийный</b>, <g>поэтому</g> я часто ем его на ужин."
    },
    "gram": "konnektoren_wdh_b1"
  },
  {
    "id": "k4_024",
    "cat": "k4",
    "term": {
      "de": "kochen",
      "en": "to cook",
      "uk": "готувати (їжу)",
      "ru": "готовить (еду)"
    },
    "short": {
      "de": "Essen mit Hitze zubereiten",
      "en": "to prepare food using heat",
      "uk": "готувати їжу за допомогою тепла",
      "ru": "готовить еду с помощью тепла"
    },
    "def": {
      "de": "Meine Oma <b>kochte</b> jeden Sonntag ein großes Mittagessen.",
      "en": "My grandma <b>cooked</b> a big lunch every Sunday.",
      "uk": "Моя бабуся <b>готувала</b> велику обідню страву щонеділі.",
      "ru": "Моя бабушка <b>готовила</b> большой обед каждое воскресенье."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_025",
    "cat": "k4",
    "term": {
      "de": "backen",
      "en": "to bake",
      "uk": "пекти",
      "ru": "печь"
    },
    "short": {
      "de": "Brot, Kuchen oder Ähnliches im Ofen zubereiten",
      "en": "to prepare bread, cake or similar in the oven",
      "uk": "готувати хліб, пиріг тощо в духовці",
      "ru": "готовить хлеб, пирог и подобное в духовке"
    },
    "def": {
      "de": "Als Kind <b>backte</b> ich mit meiner Mutter jedes Weihnachten Plätzchen.",
      "en": "As a child, I <b>baked</b> cookies with my mother every Christmas.",
      "uk": "У дитинстві я <b>пекла (пік)</b> з мамою печиво щороку на Різдво.",
      "ru": "В детстве я <b>пёк(-ла)</b> с мамой печенье каждое Рождество."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_026",
    "cat": "k4",
    "term": {
      "de": "schmecken",
      "en": "to taste",
      "uk": "мати смак",
      "ru": "иметь вкус"
    },
    "short": {
      "de": "einen bestimmten Geschmack haben",
      "en": "to have a certain taste",
      "uk": "мати певний смак",
      "ru": "иметь определённый вкус"
    },
    "def": {
      "de": "Das Essen bei meiner Großmutter <b>schmeckte</b> immer besonders gut.",
      "en": "The food at my grandmother's always <b>tasted</b> especially good.",
      "uk": "Їжа в моєї бабусі завжди <b>смакувала</b> особливо добре.",
      "ru": "Еда у моей бабушки всегда <b>была на вкус</b> особенно хороша."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_027",
    "cat": "k4",
    "term": {
      "de": "essen",
      "en": "to eat",
      "uk": "їсти",
      "ru": "есть"
    },
    "short": {
      "de": "Nahrung zu sich nehmen",
      "en": "to consume food",
      "uk": "споживати їжу",
      "ru": "потреблять еду"
    },
    "def": {
      "de": "Wir <b>aßen</b> als Kinder fast jeden Freitag Fisch.",
      "en": "As children, we <b>ate</b> fish almost every Friday.",
      "uk": "У дитинстві ми <b>їли</b> рибу майже щопʼятниці.",
      "ru": "В детстве мы <b>ели</b> рыбу почти каждую пятницу."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_028",
    "cat": "k4",
    "term": {
      "de": "trinken",
      "en": "to drink",
      "uk": "пити",
      "ru": "пить"
    },
    "short": {
      "de": "eine Flüssigkeit zu sich nehmen",
      "en": "to consume a liquid",
      "uk": "споживати рідину",
      "ru": "потреблять жидкость"
    },
    "def": {
      "de": "Zum Frühstück <b>trank</b> ich früher immer heißen Kakao.",
      "en": "For breakfast, I always used to <b>drink</b> hot cocoa.",
      "uk": "На сніданок я раніше завжди <b>пив (пила)</b> гарячий какао.",
      "ru": "На завтрак я раньше всегда <b>пил(-а)</b> горячее какао."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_029",
    "cat": "k4",
    "term": {
      "de": "mögen",
      "en": "to like",
      "uk": "любити",
      "ru": "любить"
    },
    "short": {
      "de": "etwas gern haben",
      "en": "to be fond of something",
      "uk": "щось любити",
      "ru": "что-то любить"
    },
    "def": {
      "de": "Als Kind <b>mochte</b> ich kein Gemüse, heute esse ich es sehr gern.",
      "en": "As a child, I did not <b>like</b> vegetables; today I like eating them very much.",
      "uk": "У дитинстві я не <b>любив(-ла)</b> овочі, сьогодні я їх дуже люблю.",
      "ru": "В детстве я не <b>любил(-а)</b> овощи, сегодня я их очень люблю."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_030",
    "cat": "k4",
    "term": {
      "de": "holen",
      "en": "to get, to fetch",
      "uk": "приносити, забирати",
      "ru": "приносить, забирать"
    },
    "short": {
      "de": "irgendwohin gehen, um etwas zu bekommen und zurückzubringen",
      "en": "to go somewhere to get something and bring it back",
      "uk": "йти кудись, щоб взяти щось і принести назад",
      "ru": "идти куда-то, чтобы взять что-то и принести обратно"
    },
    "def": {
      "de": "Mein Vater <b>holte</b> samstags immer frische Brötchen vom Bäcker.",
      "en": "My father always <b>got</b> fresh rolls from the bakery on Saturdays.",
      "uk": "Мій тато щосуботи завжди <b>приносив</b> свіжі булочки з пекарні.",
      "ru": "Мой отец каждую субботу всегда <b>приносил</b> свежие булочки из пекарни."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_031",
    "cat": "k4",
    "term": {
      "de": "verbringen",
      "en": "to spend (time)",
      "uk": "проводити (час)",
      "ru": "проводить (время)"
    },
    "short": {
      "de": "Zeit an einem bestimmten Ort oder mit einer Tätigkeit nutzen",
      "en": "to use time at a certain place or with an activity",
      "uk": "проводити час у певному місці чи з певним заняттям",
      "ru": "проводить время в определённом месте или с определённым занятием"
    },
    "def": {
      "de": "Wir <b>verbrachten</b> als Familie viel Zeit gemeinsam in der Küche.",
      "en": "As a family, we <b>spent</b> a lot of time together in the kitchen.",
      "uk": "Ми як родина <b>проводили</b> багато часу разом на кухні.",
      "ru": "Мы как семья <b>проводили</b> много времени вместе на кухне."
    },
    "gram": "praeteritum_wdh_b1"
  },
  {
    "id": "k4_032",
    "cat": "k4",
    "term": {
      "de": "früher",
      "en": "formerly, in the past",
      "uk": "раніше",
      "ru": "раньше"
    },
    "short": {
      "de": "in einer vergangenen Zeit, nicht heute",
      "en": "in a past time, not today",
      "uk": "у минулому, не сьогодні",
      "ru": "в прошлом, не сегодня"
    },
    "def": {
      "de": "<b>Früher</b> war Fleisch sehr teuer, <g>trotzdem</g> aßen viele Familien es jeden Sonntag.",
      "en": "In the <b>past</b>, meat was very expensive; <g>nevertheless</g>, many families ate it every Sunday.",
      "uk": "<b>Раніше</b> мʼясо було дуже дорогим, <g>проте</g> багато сімей їли його щонеділі.",
      "ru": "<b>Раньше</b> мясо было очень дорогим, <g>однако</g> многие семьи ели его каждое воскресенье."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_033",
    "cat": "k4",
    "term": {
      "de": "sich verbessern",
      "en": "to improve",
      "uk": "покращуватися",
      "ru": "улучшаться"
    },
    "short": {
      "de": "besser werden",
      "en": "to become better",
      "uk": "ставати кращим",
      "ru": "становиться лучше"
    },
    "def": {
      "de": "Unsere Küche hat sich stark <b>verbessert</b>, <g>deshalb</g> kochen wir jetzt viel öfter zu Hause.",
      "en": "Our cooking has <b>improved</b> a lot, <g>therefore</g> we cook at home much more often now.",
      "uk": "Наше кулінарне мистецтво сильно <b>покращилося</b>, <g>тому</g> ми тепер набагато частіше готуємо вдома.",
      "ru": "Наше кулинарное мастерство сильно <b>улучшилось</b>, <g>поэтому</g> мы теперь намного чаще готовим дома."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_034",
    "cat": "k4",
    "term": {
      "de": "zunehmen",
      "en": "to gain weight",
      "uk": "набирати вагу",
      "ru": "набирать вес"
    },
    "short": {
      "de": "schwerer werden, mehr Gewicht bekommen",
      "en": "to become heavier, to gain weight",
      "uk": "важчати, набирати вагу",
      "ru": "тяжелеть, набирать вес"
    },
    "def": {
      "de": "Im Urlaub habe ich stark <b>zugenommen</b>, <g>trotzdem</g> fühle ich mich sehr wohl.",
      "en": "I <b>gained</b> a lot of weight on holiday; <g>nevertheless</g>, I feel very good.",
      "uk": "У відпустці я сильно <b>набрав(-ла)</b> вагу, <g>проте</g> почуваюся дуже добре.",
      "ru": "В отпуске я сильно <b>набрал(-а)</b> вес, <g>однако</g> чувствую себя очень хорошо."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_035",
    "cat": "k4",
    "term": {
      "de": "abnehmen",
      "en": "to lose weight",
      "uk": "худнути",
      "ru": "худеть"
    },
    "short": {
      "de": "leichter werden, weniger Gewicht haben",
      "en": "to become lighter, to lose weight",
      "uk": "легшати, втрачати вагу",
      "ru": "легчать, терять вес"
    },
    "def": {
      "de": "Er hat drei Kilo <b>abgenommen</b>, <g>deswegen</g> passt ihm die alte Hose wieder.",
      "en": "He has <b>lost</b> three kilos; <g>that's why</g> his old trousers fit him again.",
      "uk": "Він <b>схуд</b> на три кілограми, <g>тому</g> старі штани знову йому пасують.",
      "ru": "Он <b>похудел</b> на три килограмма, <g>поэтому</g> старые штаны снова ему подходят."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_036",
    "cat": "k4",
    "term": {
      "de": "der Fortschritt",
      "en": "progress",
      "uk": "прогрес",
      "ru": "прогресс"
    },
    "short": {
      "de": "eine positive Entwicklung Schritt für Schritt",
      "en": "a positive step-by-step development",
      "uk": "позитивний розвиток крок за кроком",
      "ru": "позитивное развитие шаг за шагом"
    },
    "def": {
      "de": "Beim gesunden Kochen haben wir große <b>Fortschritte</b> gemacht, <g>deshalb</g> fühlen wir uns viel energiegeladener.",
      "en": "We have made great <b>progress</b> with healthy cooking, <g>therefore</g> we feel much more energetic.",
      "uk": "Ми зробили великий <b>прогрес</b> у здоровому приготуванні їжі, <g>тому</g> почуваємося набагато енергійнішими.",
      "ru": "Мы сделали большой <b>прогресс</b> в здоровом приготовлении пищи, <g>поэтому</g> чувствуем себя намного энергичнее."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_037",
    "cat": "k4",
    "term": {
      "de": "die Veränderung",
      "en": "change",
      "uk": "зміна",
      "ru": "изменение"
    },
    "short": {
      "de": "wenn etwas anders wird als vorher",
      "en": "when something becomes different from before",
      "uk": "коли щось стає іншим, ніж раніше",
      "ru": "когда что-то становится иным, чем раньше"
    },
    "def": {
      "de": "Die <b>Veränderung</b> unserer Essgewohnheiten war nicht leicht, <g>trotzdem</g> haben wir durchgehalten.",
      "en": "The <b>change</b> in our eating habits was not easy; <g>nevertheless</g>, we kept it up.",
      "uk": "<b>Зміна</b> наших харчових звичок далася нелегко, <g>проте</g> ми не здалися.",
      "ru": "<b>Изменение</b> наших пищевых привычек далось нелегко, <g>однако</g> мы не сдались."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_038",
    "cat": "k4",
    "term": {
      "de": "bewusst",
      "en": "conscious, mindful",
      "uk": "усвідомлений",
      "ru": "осознанный"
    },
    "short": {
      "de": "wenn man genau nachdenkt und aufmerksam entscheidet",
      "en": "when you think carefully and decide attentively",
      "uk": "коли ретельно обдумуєш і уважно вирішуєш",
      "ru": "когда тщательно обдумываешь и внимательно решаешь"
    },
    "def": {
      "de": "Wir essen jetzt viel <b>bewusster</b>, <g>deswegen</g> haben wir mehr Energie im Alltag.",
      "en": "We now eat much more <b>consciously</b>, <g>that's why</g> we have more energy in everyday life.",
      "uk": "Тепер ми їмо набагато <b>усвідомленіше</b>, <g>тому</g> маємо більше енергії в повсякденному житті.",
      "ru": "Теперь мы едим намного <b>осознаннее</b>, <g>поэтому</g> у нас больше энергии в повседневной жизни."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_039",
    "cat": "k4",
    "term": {
      "de": "weiterhin",
      "en": "still, continuing",
      "uk": "і надалі",
      "ru": "по-прежнему"
    },
    "short": {
      "de": "auch in Zukunft, ohne Unterbrechung",
      "en": "also in the future, without interruption",
      "uk": "і надалі, без перерви",
      "ru": "и далее, без перерыва"
    },
    "def": {
      "de": "Die Ernährung war früher ungesund, <g>trotzdem</g> isst die Familie <b>weiterhin</b> viel Fast Food.",
      "en": "The diet used to be unhealthy; <g>nevertheless</g>, the family <b>continues</b> to eat a lot of fast food.",
      "uk": "Харчування раніше було нездоровим, <g>проте</g> сімʼя <b>і надалі</b> їсть багато фаст-фуду.",
      "ru": "Питание раньше было нездоровым, <g>однако</g> семья <b>по-прежнему</b> ест много фастфуда."
    },
    "gram": "deshalb_deswegen_trotzdem"
  },
  {
    "id": "k4_040",
    "cat": "k4",
    "term": {
      "de": "die Lebensmittel",
      "en": "food, groceries",
      "uk": "продукти харчування",
      "ru": "продукты питания"
    },
    "short": {
      "de": "alles, was man kaufen und essen kann, zum Beispiel Brot, Obst oder Fleisch",
      "en": "everything you can buy and eat, for example bread, fruit or meat",
      "uk": "усе, що можна купити й зʼїсти, наприклад хліб, фрукти чи мʼясо",
      "ru": "всё, что можно купить и съесть, например хлеб, фрукты или мясо"
    },
    "def": {
      "de": "Wir kaufen unsere <g><b>Lebensmittel</b></g> meistens auf dem Wochenmarkt.",
      "en": "We usually buy our <b>groceries</b> at the weekly market.",
      "uk": "Ми зазвичай купуємо свої <b>продукти</b> на щотижневому ринку.",
      "ru": "Мы обычно покупаем свои <b>продукты</b> на еженедельном рынке."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_041",
    "cat": "k4",
    "term": {
      "de": "der Küchenschrank",
      "en": "kitchen cabinet",
      "uk": "кухонна шафа",
      "ru": "кухонный шкаф"
    },
    "short": {
      "de": "ein Möbelstück in der Küche, in dem man Geschirr oder Lebensmittel aufbewahrt",
      "en": "a piece of furniture in the kitchen where you keep dishes or food",
      "uk": "меблі на кухні, де зберігають посуд чи продукти",
      "ru": "мебель на кухне, где хранят посуду или продукты"
    },
    "def": {
      "de": "Die Gläser stehen im obersten Fach vom <g><b>Küchenschrank</b></g>.",
      "en": "The glasses are on the top shelf of the <b>kitchen cabinet</b>.",
      "uk": "Склянки стоять на верхній полиці <b>кухонної шафи</b>.",
      "ru": "Стаканы стоят на верхней полке <b>кухонного шкафа</b>."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_042",
    "cat": "k4",
    "term": {
      "de": "die Geburtstagstorte",
      "en": "birthday cake",
      "uk": "торт на день народження",
      "ru": "торт на день рождения"
    },
    "short": {
      "de": "ein Kuchen, den man an einem Geburtstag isst",
      "en": "a cake that you eat on a birthday",
      "uk": "торт, який їдять на день народження",
      "ru": "торт, который едят на день рождения"
    },
    "def": {
      "de": "Meine Mutter backt jedes Jahr eine wunderschöne <g><b>Geburtstagstorte</b></g>.",
      "en": "Every year, my mother bakes a beautiful <b>birthday cake</b>.",
      "uk": "Щороку моя мама пече чудовий <b>торт на день народження</b>.",
      "ru": "Каждый год моя мама печёт прекрасный <b>торт на день рождения</b>."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_043",
    "cat": "k4",
    "term": {
      "de": "das Familienrezept",
      "en": "family recipe",
      "uk": "сімейний рецепт",
      "ru": "семейный рецепт"
    },
    "short": {
      "de": "ein Rezept, das seit Generationen in einer Familie weitergegeben wird",
      "en": "a recipe that has been passed down in a family for generations",
      "uk": "рецепт, який передається в родині з покоління в покоління",
      "ru": "рецепт, который передаётся в семье из поколения в поколение"
    },
    "def": {
      "de": "Dieses <g><b>Familienrezept</b></g> stammt noch von meiner Urgroßmutter.",
      "en": "This <b>family recipe</b> comes from my great-grandmother.",
      "uk": "Цей <b>сімейний рецепт</b> походить ще від моєї прабабусі.",
      "ru": "Этот <b>семейный рецепт</b> достался ещё от моей прабабушки."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_044",
    "cat": "k4",
    "term": {
      "de": "die Essensreste",
      "en": "leftovers",
      "uk": "залишки їжі",
      "ru": "остатки еды"
    },
    "short": {
      "de": "das Essen, das nach einer Mahlzeit noch übrig ist",
      "en": "the food that is left over after a meal",
      "uk": "їжа, яка залишається після прийому їжі",
      "ru": "еда, которая остаётся после приёма пищи"
    },
    "def": {
      "de": "Wir frieren die <g><b>Essensreste</b></g> immer ein, damit nichts weggeworfen wird.",
      "en": "We always freeze the <b>leftovers</b> so that nothing is thrown away.",
      "uk": "Ми завжди заморожуємо <b>залишки їжі</b>, щоб нічого не викидати.",
      "ru": "Мы всегда замораживаем <b>остатки еды</b>, чтобы ничего не выбрасывать."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_045",
    "cat": "k4",
    "term": {
      "de": "die Portionengröße",
      "en": "portion size",
      "uk": "розмір порції",
      "ru": "размер порции"
    },
    "short": {
      "de": "wie groß eine einzelne Menge Essen ist",
      "en": "how big a single amount of food is",
      "uk": "наскільки великою є одна порція їжі",
      "ru": "насколько большая одна порция еды"
    },
    "def": {
      "de": "In diesem Restaurant ist die <g><b>Portionengröße</b></g> wirklich großzügig.",
      "en": "In this restaurant, the <b>portion size</b> is really generous.",
      "uk": "У цьому ресторані <b>розмір порції</b> справді щедрий.",
      "ru": "В этом ресторане <b>размер порции</b> действительно щедрый."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_046",
    "cat": "k4",
    "term": {
      "de": "der Gästetisch",
      "en": "guest table",
      "uk": "стіл для гостей",
      "ru": "стол для гостей"
    },
    "short": {
      "de": "ein Tisch, an dem Gäste zusammen essen können",
      "en": "a table where guests can eat together",
      "uk": "стіл, за яким гості можуть разом їсти",
      "ru": "стол, за которым гости могут вместе есть"
    },
    "def": {
      "de": "Für das Fest haben wir einen langen <g><b>Gästetisch</b></g> im Garten aufgebaut.",
      "en": "For the party, we set up a long <b>guest table</b> in the garden.",
      "uk": "Для свята ми поставили довгий <b>стіл для гостей</b> у саду.",
      "ru": "Для праздника мы поставили длинный <b>стол для гостей</b> в саду."
    },
    "gram": "komposita_fugenelemente"
  },
  {
    "id": "k4_047",
    "cat": "k4",
    "term": {
      "de": "das Ergebnis",
      "en": "result",
      "uk": "результат",
      "ru": "результат"
    },
    "short": {
      "de": "das, was am Ende von etwas herauskommt",
      "en": "what comes out at the end of something",
      "uk": "те, що виходить у результаті чогось",
      "ru": "то, что получается в итоге чего-то"
    },
    "def": {
      "de": "Das <b>Ergebnis</b> <g>von der</g> Umfrage hat uns alle überrascht.",
      "en": "The <b>result</b> <g>of the</g> survey surprised us all.",
      "uk": "<b>Результат</b> опитування здивував нас усіх.",
      "ru": "<b>Результат</b> опроса удивил нас всех."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_048",
    "cat": "k4",
    "term": {
      "de": "die Mehrheit",
      "en": "majority",
      "uk": "більшість",
      "ru": "большинство"
    },
    "short": {
      "de": "mehr als die Hälfte einer Gruppe",
      "en": "more than half of a group",
      "uk": "більше половини групи",
      "ru": "больше половины группы"
    },
    "def": {
      "de": "Die <b>Mehrheit</b> <g>von den</g> Befragten isst mindestens dreimal am Tag.",
      "en": "The <b>majority</b> <g>of the</g> respondents eat at least three times a day.",
      "uk": "<b>Більшість</b> опитаних їдять щонайменше тричі на день.",
      "ru": "<b>Большинство</b> опрошенных едят минимум три раза в день."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_049",
    "cat": "k4",
    "term": {
      "de": "die Meinung",
      "en": "opinion",
      "uk": "думка",
      "ru": "мнение"
    },
    "short": {
      "de": "das, was man persönlich über etwas denkt",
      "en": "what you personally think about something",
      "uk": "те, що ти особисто думаєш про щось",
      "ru": "то, что ты лично думаешь о чём-то"
    },
    "def": {
      "de": "Die <b>Meinung</b> <g>von den</g> Kunden war der Firma sehr wichtig.",
      "en": "The <b>opinion</b> <g>of the</g> customers was very important to the company.",
      "uk": "<b>Думка</b> клієнтів була дуже важливою для компанії.",
      "ru": "<b>Мнение</b> клиентов было очень важно для компании."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_050",
    "cat": "k4",
    "term": {
      "de": "der Teilnehmer / die Teilnehmerin",
      "en": "participant",
      "uk": "учасник / учасниця",
      "ru": "участник / участница"
    },
    "short": {
      "de": "eine Person, die bei einer Aktivität, einer Studie oder einer Umfrage mitmacht",
      "en": "a person who takes part in an activity, study or survey",
      "uk": "людина, яка бере участь у діяльності, дослідженні чи опитуванні",
      "ru": "человек, который участвует в деятельности, исследовании или опросе"
    },
    "def": {
      "de": "Das Alter <g>von den</g> <b>Teilnehmern</b> lag zwischen zwanzig und vierzig Jahren.",
      "en": "The age <g>of the</g> <b>participants</b> ranged between twenty and forty years.",
      "uk": "Вік <b>учасників</b> становив від двадцяти до сорока років.",
      "ru": "Возраст <b>участников</b> составлял от двадцати до сорока лет."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_051",
    "cat": "k4",
    "term": {
      "de": "die Statistik",
      "en": "statistics",
      "uk": "статистика",
      "ru": "статистика"
    },
    "short": {
      "de": "Zahlen und Daten, die eine Information genau zeigen",
      "en": "numbers and data that show information precisely",
      "uk": "цифри та дані, які точно показують інформацію",
      "ru": "цифры и данные, которые точно показывают информацию"
    },
    "def": {
      "de": "Die <b>Statistik</b> <g>von der</g> Stadt zeigt, dass immer mehr Menschen vegetarisch essen.",
      "en": "The city's <b>statistics</b> show that more and more people are eating vegetarian.",
      "uk": "<b>Статистика</b> міста показує, що дедалі більше людей їдять вегетаріанську їжу.",
      "ru": "<b>Статистика</b> города показывает, что всё больше людей едят вегетарианскую пищу."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_052",
    "cat": "k4",
    "term": {
      "de": "der Durchschnitt",
      "en": "average",
      "uk": "середнє значення",
      "ru": "среднее значение"
    },
    "short": {
      "de": "der mittlere Wert, den man aus mehreren Zahlen berechnet",
      "en": "the middle value that you calculate from several numbers",
      "uk": "середнє значення, яке обчислюється з кількох чисел",
      "ru": "среднее значение, вычисляемое из нескольких чисел"
    },
    "def": {
      "de": "Der <b>Durchschnitt</b> <g>von den</g> Antworten lag bei etwa drei Mahlzeiten pro Tag.",
      "en": "The <b>average</b> <g>of the</g> answers was about three meals per day.",
      "uk": "<b>Середнє значення</b> відповідей становило приблизно три прийоми їжі на день.",
      "ru": "<b>Среднее значение</b> ответов составило около трёх приёмов пищи в день."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_053",
    "cat": "k4",
    "term": {
      "de": "die Antwort",
      "en": "answer",
      "uk": "відповідь",
      "ru": "ответ"
    },
    "short": {
      "de": "das, was man sagt oder schreibt, wenn man auf eine Frage reagiert",
      "en": "what you say or write when you respond to a question",
      "uk": "те, що кажеш чи пишеш у відповідь на запитання",
      "ru": "то, что говоришь или пишешь в ответ на вопрос"
    },
    "def": {
      "de": "Die <b>Antwort</b> <g>von der</g> Mehrheit war eindeutig: Frühstück ist wichtig.",
      "en": "The <b>answer</b> <g>of the</g> majority was clear: breakfast is important.",
      "uk": "<b>Відповідь</b> більшості була однозначною: сніданок важливий.",
      "ru": "<b>Ответ</b> большинства был однозначным: завтрак важен."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_054",
    "cat": "k4",
    "term": {
      "de": "befragen",
      "en": "to survey, to question",
      "uk": "опитувати",
      "ru": "опрашивать"
    },
    "short": {
      "de": "jemandem Fragen stellen, um Informationen zu bekommen",
      "en": "to ask someone questions to get information",
      "uk": "ставити комусь запитання, щоб отримати інформацію",
      "ru": "задавать кому-то вопросы, чтобы получить информацию"
    },
    "def": {
      "de": "Die Studenten haben hundert Personen <g>von der</g> Universität zum Thema Essgewohnheiten <b>befragt</b>.",
      "en": "The students <b>surveyed</b> a hundred people from the university on the topic of eating habits.",
      "uk": "Студенти <b>опитали</b> сто осіб з університету на тему харчових звичок.",
      "ru": "Студенты <b>опросили</b> сто человек из университета на тему пищевых привычек."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_055",
    "cat": "k4",
    "term": {
      "de": "die Tendenz",
      "en": "trend",
      "uk": "тенденція",
      "ru": "тенденция"
    },
    "short": {
      "de": "eine Richtung oder Entwicklung, die man erkennen kann",
      "en": "a direction or development that you can recognize",
      "uk": "напрямок чи тенденція розвитку, яку можна помітити",
      "ru": "направление или тенденция развития, которую можно заметить"
    },
    "def": {
      "de": "Die <b>Tendenz</b> <g>von den</g> letzten Jahren zeigt: Immer mehr Leute kochen wieder selbst.",
      "en": "The <b>trend</b> <g>of the</g> last few years shows: more and more people are cooking for themselves again.",
      "uk": "<b>Тенденція</b> останніх років показує: дедалі більше людей знову готують самі.",
      "ru": "<b>Тенденция</b> последних лет показывает: всё больше людей снова готовят сами."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_056",
    "cat": "k4",
    "term": {
      "de": "der Nährstoff",
      "en": "nutrient",
      "uk": "поживна речовина",
      "ru": "питательное вещество"
    },
    "short": {
      "de": "ein Stoff im Essen, den der Körper zum Leben braucht",
      "en": "a substance in food that the body needs to live",
      "uk": "речовина в їжі, яка потрібна організму для життя",
      "ru": "вещество в еде, необходимое организму для жизни"
    },
    "def": {
      "de": "Die wichtigsten <b>Nährstoffe</b> <g>von</g> diesem Gericht sind Eiweiß und Vitamine.",
      "en": "The most important <b>nutrients</b> <g>of</g> this dish are protein and vitamins.",
      "uk": "Найважливіші <b>поживні речовини</b> цієї страви — це білок та вітаміни.",
      "ru": "Самые важные <b>питательные вещества</b> этого блюда — это белок и витамины."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_057",
    "cat": "k4",
    "term": {
      "de": "die Vitamine",
      "en": "vitamins",
      "uk": "вітаміни",
      "ru": "витамины"
    },
    "short": {
      "de": "wichtige Stoffe im Essen, die der Körper in kleinen Mengen braucht",
      "en": "important substances in food that the body needs in small amounts",
      "uk": "важливі речовини в їжі, які організм потребує в невеликих кількостях",
      "ru": "важные вещества в еде, которые нужны организму в небольших количествах"
    },
    "def": {
      "de": "Die <b>Vitamine</b> <g>von</g> Zitrusfrüchten sind bekannt für ihre Wirkung gegen Erkältungen.",
      "en": "The <b>vitamins</b> <g>of</g> citrus fruits are known for their effect against colds.",
      "uk": "<b>Вітаміни</b> цитрусових відомі своєю дією проти застуди.",
      "ru": "<b>Витамины</b> цитрусовых известны своим действием против простуды."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_058",
    "cat": "k4",
    "term": {
      "de": "ausgewogen",
      "en": "balanced",
      "uk": "збалансований",
      "ru": "сбалансированный"
    },
    "short": {
      "de": "mit einer guten Mischung aus verschiedenen, gesunden Dingen",
      "en": "with a good mix of different, healthy things",
      "uk": "з гарним поєднанням різних, здорових речей",
      "ru": "с хорошим сочетанием разных, полезных вещей"
    },
    "def": {
      "de": "Der Speiseplan <g>von</g> der Schule ist wirklich <b>ausgewogen</b>.",
      "en": "The menu <g>of</g> the school is really <b>balanced</b>.",
      "uk": "Меню школи справді <b>збалансоване</b>.",
      "ru": "Меню школы действительно <b>сбалансировано</b>."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_059",
    "cat": "k4",
    "term": {
      "de": "der Ballaststoff",
      "en": "dietary fibre",
      "uk": "клітковина",
      "ru": "клетчатка"
    },
    "short": {
      "de": "ein Stoff in Pflanzen, der gut für die Verdauung ist",
      "en": "a substance in plants that is good for digestion",
      "uk": "речовина в рослинах, корисна для травлення",
      "ru": "вещество в растениях, полезное для пищеварения"
    },
    "def": {
      "de": "Die <b>Ballaststoffe</b> <g>von</g> Vollkornprodukten sind sehr gut für die Verdauung.",
      "en": "The <b>dietary fibre</b> <g>of</g> wholegrain products is very good for digestion.",
      "uk": "<b>Клітковина</b> цільнозернових продуктів дуже корисна для травлення.",
      "ru": "<b>Клетчатка</b> цельнозерновых продуктов очень полезна для пищеварения."
    },
    "gram": "genitiv_alternativen"
  },
  {
    "id": "k4_060",
    "cat": "k4",
    "term": {
      "de": "die Kalorie",
      "en": "calorie",
      "uk": "калорія",
      "ru": "калория"
    },
    "short": {
      "de": "eine Einheit, mit der man die Energie im Essen misst",
      "en": "a unit used to measure the energy in food",
      "uk": "одиниця, якою вимірюють енергію в їжі",
      "ru": "единица, которой измеряют энергию в еде"
    },
    "def": {
      "de": "Die Anzahl <g>von</g> <b>Kalorien</b> in diesem Gericht ist überraschend niedrig.",
      "en": "The number <g>of</g> <b>calories</b> in this dish is surprisingly low.",
      "uk": "Кількість <b>калорій</b> у цій страві на диво низька.",
      "ru": "Количество <b>калорий</b> в этом блюде на удивление низкое."
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
    "id": "k5_016",
    "cat": "k5",
    "term": {
      "de": "die Gewohnheit",
      "en": "habit",
      "uk": "звичка",
      "ru": "привычка"
    },
    "short": {
      "de": "etwas, das man regelmäßig und automatisch macht",
      "en": "something you do regularly and automatically",
      "uk": "те, що робиш регулярно й автоматично",
      "ru": "то, что делаешь регулярно и автоматически"
    },
    "def": {
      "de": "Ich habe viele neue <b>Gewohnheiten</b>, <g>seit</g> ich in einem anderen Land lebe.",
      "en": "I have many new <b>habits</b> <g>since</g> I have been living in a different country.",
      "uk": "У мене багато нових <b>звичок</b>, <g>відколи</g> я живу в іншій країні.",
      "ru": "У меня много новых <b>привычек</b>, <g>с тех пор как</g> я живу в другой стране."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_017",
    "cat": "k5",
    "term": {
      "de": "das Verhalten",
      "en": "behaviour",
      "uk": "поведінка",
      "ru": "поведение"
    },
    "short": {
      "de": "wie sich eine Person in bestimmten Situationen zeigt",
      "en": "how a person behaves in certain situations",
      "uk": "як людина поводиться в певних ситуаціях",
      "ru": "как человек ведёт себя в определённых ситуациях"
    },
    "def": {
      "de": "Ich verstehe das <b>Verhalten</b> der Menschen hier viel besser, <g>seitdem</g> ich die Kultur kenne.",
      "en": "I understand people's <b>behaviour</b> here much better <g>since</g> I have gotten to know the culture.",
      "uk": "Я набагато краще розумію <b>поведінку</b> людей тут, <g>відколи</g> знаю культуру.",
      "ru": "Я намного лучше понимаю <b>поведение</b> людей здесь, <g>с тех пор как</g> знаю культуру."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_018",
    "cat": "k5",
    "term": {
      "de": "die Kultur",
      "en": "culture",
      "uk": "культура",
      "ru": "культура"
    },
    "short": {
      "de": "die Werte, Gewohnheiten und Traditionen einer Gruppe von Menschen",
      "en": "the values, habits and traditions of a group of people",
      "uk": "цінності, звички та традиції групи людей",
      "ru": "ценности, привычки и традиции группы людей"
    },
    "def": {
      "de": "Ich interessiere mich viel mehr für andere <b>Kulturen</b>, <g>seit</g> ich im Ausland wohne.",
      "en": "I am much more interested in other <b>cultures</b> <g>since</g> I have been living abroad.",
      "uk": "Мене набагато більше цікавлять інші <b>культури</b>, <g>відколи</g> я живу за кордоном.",
      "ru": "Меня намного больше интересуют другие <b>культуры</b>, <g>с тех пор как</g> я живу за границей."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_019",
    "cat": "k5",
    "term": {
      "de": "fremd",
      "en": "foreign, strange",
      "uk": "чужий, незнайомий",
      "ru": "чужой, незнакомый"
    },
    "short": {
      "de": "unbekannt oder ungewohnt, aus einem anderen Land oder einer anderen Kultur",
      "en": "unknown or unfamiliar, from another country or culture",
      "uk": "невідомий чи незвичний, з іншої країни чи культури",
      "ru": "неизвестный или непривычный, из другой страны или культуры"
    },
    "def": {
      "de": "Vieles fühlt sich nicht mehr <b>fremd</b> an, <g>seitdem</g> ich hier wohne.",
      "en": "Many things no longer feel <b>foreign</b> <g>since</g> I have been living here.",
      "uk": "Багато чого вже не здається <b>чужим</b>, <g>відколи</g> я тут живу.",
      "ru": "Многое уже не кажется <b>чужим</b>, <g>с тех пор как</g> я здесь живу."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_020",
    "cat": "k5",
    "term": {
      "de": "vertraut",
      "en": "familiar",
      "uk": "знайомий, звичний",
      "ru": "знакомый, привычный"
    },
    "short": {
      "de": "gut bekannt, wie etwas, das man schon oft erlebt hat",
      "en": "well known, like something you have already experienced often",
      "uk": "добре знайомий, як щось, що вже часто переживав",
      "ru": "хорошо знакомый, как что-то, что уже часто переживал"
    },
    "def": {
      "de": "Die Stadt ist mir sehr <b>vertraut</b> geworden, <g>seit</g> ich hier arbeite.",
      "en": "The city has become very <b>familiar</b> to me <g>since</g> I have been working here.",
      "uk": "Місто стало мені дуже <b>знайомим</b>, <g>відколи</g> я тут працюю.",
      "ru": "Город стал мне очень <b>знакомым</b>, <g>с тех пор как</g> я здесь работаю."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_021",
    "cat": "k5",
    "term": {
      "de": "die Regel",
      "en": "rule",
      "uk": "правило",
      "ru": "правило"
    },
    "short": {
      "de": "eine Vorschrift, die zeigt, was man tun soll oder darf",
      "en": "a rule that shows what you should or may do",
      "uk": "правило, яке показує, що варто чи можна робити",
      "ru": "правило, которое показывает, что следует или можно делать"
    },
    "def": {
      "de": "Ich kenne die wichtigsten <b>Regeln</b> im Alltag viel besser, <g>seitdem</g> ich einen Sprachkurs besuche.",
      "en": "I know the most important everyday <b>rules</b> much better <g>since</g> I have been attending a language course.",
      "uk": "Я набагато краще знаю найважливіші <b>правила</b> повсякденного життя, <g>відколи</g> відвідую мовний курс.",
      "ru": "Я намного лучше знаю самые важные <b>правила</b> повседневной жизни, <g>с тех пор как</g> посещаю языковой курс."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_022",
    "cat": "k5",
    "term": {
      "de": "sich entwickeln",
      "en": "to develop",
      "uk": "розвиватися",
      "ru": "развиваться"
    },
    "short": {
      "de": "sich mit der Zeit verändern und besser werden",
      "en": "to change over time and become better",
      "uk": "з часом змінюватися та ставати кращим",
      "ru": "со временем меняться и становиться лучше"
    },
    "def": {
      "de": "Meine Deutschkenntnisse haben sich stark <b>entwickelt</b>, <g>seit</g> ich hier lebe.",
      "en": "My German skills have <b>developed</b> a lot <g>since</g> I have been living here.",
      "uk": "Мої знання німецької значно <b>розвинулися</b>, <g>відколи</g> я тут живу.",
      "ru": "Мои знания немецкого сильно <b>развились</b>, <g>с тех пор как</g> я здесь живу."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_023",
    "cat": "k5",
    "term": {
      "de": "die Erwartung",
      "en": "expectation",
      "uk": "очікування",
      "ru": "ожидание"
    },
    "short": {
      "de": "das, was man von einer Situation oder Person erhofft oder denkt",
      "en": "what you hope for or think about a situation or person",
      "uk": "те, чого сподіваєшся чи думаєш про ситуацію чи людину",
      "ru": "то, что ожидаешь или думаешь о ситуации или человеке"
    },
    "def": {
      "de": "Meine <b>Erwartungen</b> an das Leben hier haben sich stark verändert, <g>seitdem</g> ich angekommen bin.",
      "en": "My <b>expectations</b> about life here have changed a lot <g>since</g> I arrived.",
      "uk": "Мої <b>очікування</b> від життя тут сильно змінилися, <g>відколи</g> я приїхав(-ла).",
      "ru": "Мои <b>ожидания</b> от жизни здесь сильно изменились, <g>с тех пор как</g> я приехал(-а)."
    },
    "gram": "nebensatz_seit_seitdem"
  },
  {
    "id": "k5_024",
    "cat": "k5",
    "term": {
      "de": "warten (auf)",
      "en": "to wait (for)",
      "uk": "чекати (на)",
      "ru": "ждать"
    },
    "short": {
      "de": "bleiben und erwarten, dass jemand kommt oder etwas passiert",
      "en": "to stay and expect someone to come or something to happen",
      "uk": "залишатися й чекати, що хтось прийде чи щось станеться",
      "ru": "оставаться и ждать, что кто-то придёт или что-то произойдёт"
    },
    "def": {
      "de": "<g>Worauf</g> <b>wartest</b> du eigentlich noch?",
      "en": "What are you actually still <b>waiting</b> <g>for</g>?",
      "uk": "<g>Чого</g> ти взагалі ще <b>чекаєш</b>?",
      "ru": "<g>Чего</g> ты вообще ещё <b>ждёшь</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_025",
    "cat": "k5",
    "term": {
      "de": "denken (an)",
      "en": "to think (of)",
      "uk": "думати (про)",
      "ru": "думать (о)"
    },
    "short": {
      "de": "an eine Person oder Sache in Gedanken sein",
      "en": "to have someone or something in your thoughts",
      "uk": "думати про людину чи річ",
      "ru": "думать о человеке или вещи"
    },
    "def": {
      "de": "<g>An wen</g> <b>denkst</b> du gerade?",
      "en": "<g>Who</g> are you <b>thinking</b> of right now?",
      "uk": "<g>Про кого</g> ти зараз <b>думаєш</b>?",
      "ru": "<g>О ком</g> ты сейчас <b>думаешь</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_026",
    "cat": "k5",
    "term": {
      "de": "sich erinnern (an)",
      "en": "to remember",
      "uk": "згадувати",
      "ru": "вспоминать"
    },
    "short": {
      "de": "sich an etwas aus der Vergangenheit zurückerinnern",
      "en": "to recall something from the past",
      "uk": "згадувати щось із минулого",
      "ru": "вспоминать что-то из прошлого"
    },
    "def": {
      "de": "<g>Woran</g> <b>erinnerst</b> du <b>dich</b> noch aus deiner Kindheit?",
      "en": "What do you still <b>remember</b> from your childhood?",
      "uk": "<g>Що</g> ти ще <b>памʼятаєш</b> зі свого дитинства?",
      "ru": "<g>Что</g> ты ещё <b>помнишь</b> из своего детства?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_027",
    "cat": "k5",
    "term": {
      "de": "träumen (von)",
      "en": "to dream (of)",
      "uk": "мріяти, бачити уві сні",
      "ru": "мечтать, видеть во сне"
    },
    "short": {
      "de": "im Schlaf oder in Gedanken etwas erleben, das man sich wünscht",
      "en": "to experience something you wish for, either in sleep or in your thoughts",
      "uk": "переживати уві сні чи в думках те, чого бажаєш",
      "ru": "переживать во сне или в мыслях то, чего желаешь"
    },
    "def": {
      "de": "<g>Wovon</g> hast du letzte Nacht <b>geträumt</b>?",
      "en": "What did you <b>dream</b> <g>of</g> last night?",
      "uk": "<g>Про що</g> тобі снилося вчора вночі?",
      "ru": "<g>О чём</g> тебе снилось вчера ночью?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_028",
    "cat": "k5",
    "term": {
      "de": "sprechen (über)",
      "en": "to talk (about)",
      "uk": "говорити (про)",
      "ru": "говорить (о)"
    },
    "short": {
      "de": "sich mit jemandem über ein Thema unterhalten",
      "en": "to converse with someone about a topic",
      "uk": "розмовляти з кимось на певну тему",
      "ru": "разговаривать с кем-то на определённую тему"
    },
    "def": {
      "de": "<g>Worüber</g> habt ihr gestern so lange <b>gesprochen</b>?",
      "en": "What did you <b>talk</b> <g>about</g> for so long yesterday?",
      "uk": "<g>Про що</g> ви вчора так довго <b>говорили</b>?",
      "ru": "<g>О чём</g> вы вчера так долго <b>говорили</b>?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_029",
    "cat": "k5",
    "term": {
      "de": "diskutieren (über)",
      "en": "to discuss",
      "uk": "дискутувати (про)",
      "ru": "дискутировать (о)"
    },
    "short": {
      "de": "über ein Thema sprechen und verschiedene Meinungen austauschen",
      "en": "to talk about a topic and exchange different opinions",
      "uk": "говорити про тему та обмінюватися різними думками",
      "ru": "говорить о теме и обмениваться разными мнениями"
    },
    "def": {
      "de": "<g>Über wen</g> habt ihr im Kurs <b>diskutiert</b>?",
      "en": "<g>Who</g> did you <b>discuss</b> in the course?",
      "uk": "<g>Про кого</g> ви <b>дискутували</b> на курсі?",
      "ru": "<g>О ком</g> вы <b>дискутировали</b> на курсе?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_030",
    "cat": "k5",
    "term": {
      "de": "sich beschäftigen (mit)",
      "en": "to deal (with), to engage (with)",
      "uk": "займатися (чимось)",
      "ru": "заниматься (чем-то)"
    },
    "short": {
      "de": "sich mit einem Thema oder einer Aufgabe intensiv befassen",
      "en": "to deal intensively with a topic or task",
      "uk": "інтенсивно займатися темою чи завданням",
      "ru": "интенсивно заниматься темой или задачей"
    },
    "def": {
      "de": "<g>Womit</g> <b>beschäftigst</b> du <b>dich</b> gerade in deiner Freizeit?",
      "en": "What are you currently <b>occupying</b> yourself <g>with</g> in your free time?",
      "uk": "<g>Чим</g> ти зараз <b>займаєшся</b> у вільний час?",
      "ru": "<g>Чем</g> ты сейчас <b>занимаешься</b> в свободное время?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_031",
    "cat": "k5",
    "term": {
      "de": "achten (auf)",
      "en": "to pay attention (to)",
      "uk": "звертати увагу (на)",
      "ru": "обращать внимание (на)"
    },
    "short": {
      "de": "auf etwas genau aufpassen oder etwas beachten",
      "en": "to pay close attention to or observe something",
      "uk": "уважно стежити за чимось чи враховувати щось",
      "ru": "внимательно следить за чем-то или учитывать что-то"
    },
    "def": {
      "de": "<g>Worauf</g> muss man in diesem Kurs besonders <b>achten</b>?",
      "en": "What do you especially need to <b>pay attention</b> <g>to</g> in this course?",
      "uk": "<g>На що</g> потрібно особливо <b>звертати увагу</b> на цьому курсі?",
      "ru": "<g>На что</g> нужно особенно <b>обращать внимание</b> на этом курсе?"
    },
    "gram": "verben_praep_personen_sachen"
  },
  {
    "id": "k5_032",
    "cat": "k5",
    "term": {
      "de": "das Abenteuer",
      "en": "adventure",
      "uk": "пригода",
      "ru": "приключение"
    },
    "short": {
      "de": "ein aufregendes und ungewöhnliches Erlebnis",
      "en": "an exciting and unusual experience",
      "uk": "захопливий і незвичайний досвід",
      "ru": "захватывающий и необычный опыт"
    },
    "def": {
      "de": "Das <b>Abenteuer</b> war wunderschön, <g>bis</g> wir den Rückweg nicht mehr fanden.",
      "en": "The <b>adventure</b> was wonderful <g>until</g> we could no longer find the way back.",
      "uk": "<b>Пригода</b> була чудовою, <g>доки</g> ми не перестали знаходити дорогу назад.",
      "ru": "<b>Приключение</b> было прекрасным, <g>пока</g> мы не перестали находить дорогу назад."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_033",
    "cat": "k5",
    "term": {
      "de": "unvergesslich",
      "en": "unforgettable",
      "uk": "незабутній",
      "ru": "незабываемый"
    },
    "short": {
      "de": "so besonders, dass man es nie vergisst",
      "en": "so special that you never forget it",
      "uk": "настільки особливий, що ніколи не забудеш",
      "ru": "настолько особенный, что никогда не забудешь"
    },
    "def": {
      "de": "Die Reise war <b>unvergesslich</b>, <g>bis</g> wir am Flughafen unser Gepäck verloren.",
      "en": "The trip was <b>unforgettable</b>, <g>until</g> we lost our luggage at the airport.",
      "uk": "Подорож була <b>незабутньою</b>, <g>доки</g> ми не загубили багаж в аеропорту.",
      "ru": "Поездка была <b>незабываемой</b>, <g>пока</g> мы не потеряли багаж в аэропорту."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_034",
    "cat": "k5",
    "term": {
      "de": "die Herausforderung",
      "en": "challenge",
      "uk": "виклик",
      "ru": "вызов"
    },
    "short": {
      "de": "eine schwierige Aufgabe, die man mit viel Mühe lösen muss",
      "en": "a difficult task that requires a lot of effort to solve",
      "uk": "складне завдання, яке потребує значних зусиль для вирішення",
      "ru": "сложная задача, требующая значительных усилий для решения"
    },
    "def": {
      "de": "Die <b>Herausforderung</b> war groß, <g>bis</g> ich endlich eine Lösung fand.",
      "en": "The <b>challenge</b> was big <g>until</g> I finally found a solution.",
      "uk": "<b>Виклик</b> був великим, <g>доки</g> я нарешті не знайшов(-ла) рішення.",
      "ru": "<b>Вызов</b> был большим, <g>пока</g> я наконец не нашёл(-ла) решение."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_035",
    "cat": "k5",
    "term": {
      "de": "meistern",
      "en": "to master, to cope with",
      "uk": "опановувати, долати",
      "ru": "осваивать, преодолевать"
    },
    "short": {
      "de": "eine schwierige Aufgabe erfolgreich lösen",
      "en": "to successfully solve a difficult task",
      "uk": "успішно вирішити складне завдання",
      "ru": "успешно решить сложную задачу"
    },
    "def": {
      "de": "Wir haben lange geübt, <g>bis</g> wir die neue Sprache endlich <b>meisterten</b>.",
      "en": "We practised for a long time <g>until</g> we finally <b>mastered</b> the new language.",
      "uk": "Ми довго тренувалися, <g>доки</g> нарешті не <b>опанували</b> нову мову.",
      "ru": "Мы долго тренировались, <g>пока</g> наконец не <b>освоили</b> новый язык."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_036",
    "cat": "k5",
    "term": {
      "de": "das Ziel",
      "en": "goal",
      "uk": "мета",
      "ru": "цель"
    },
    "short": {
      "de": "das, was man erreichen möchte",
      "en": "what you want to achieve",
      "uk": "те, чого хочеш досягти",
      "ru": "то, чего хочешь достичь"
    },
    "def": {
      "de": "Ich habe hart gearbeitet, <g>bis</g> ich mein <b>Ziel</b> endlich erreicht habe.",
      "en": "I worked hard <g>until</g> I finally achieved my <b>goal</b>.",
      "uk": "Я тяжко працював(-ла), <g>доки</g> нарешті не досяг(-ла) своєї <b>мети</b>.",
      "ru": "Я усердно работал(-а), <g>пока</g> наконец не достиг(-ла) своей <b>цели</b>."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_037",
    "cat": "k5",
    "term": {
      "de": "erreichen",
      "en": "to reach, to achieve",
      "uk": "досягати, встигати",
      "ru": "достигать, успевать"
    },
    "short": {
      "de": "etwas schaffen oder ankommen, was man sich vorgenommen hat",
      "en": "to manage or arrive at something you set out to do",
      "uk": "досягти чогось запланованого чи прибути туди",
      "ru": "достичь чего-то запланированного или прибыть туда"
    },
    "def": {
      "de": "Wir sind schnell gelaufen, <g>bis</g> wir den Bahnhof gerade noch <b>erreicht</b> haben.",
      "en": "We ran fast <g>until</g> we just managed to <b>reach</b> the station.",
      "uk": "Ми швидко бігли, <g>доки</g> ледь-ледь не <b>дісталися</b> вокзалу.",
      "ru": "Мы быстро бежали, <g>пока</g> едва не <b>добрались</b> до вокзала."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_038",
    "cat": "k5",
    "term": {
      "de": "durchhalten",
      "en": "to persevere, to hold out",
      "uk": "витримувати, не здаватися",
      "ru": "выдерживать, не сдаваться"
    },
    "short": {
      "de": "trotz Schwierigkeiten nicht aufgeben und weitermachen",
      "en": "not giving up despite difficulties and continuing",
      "uk": "не здаватися попри труднощі та продовжувати",
      "ru": "не сдаваться, несмотря на трудности, и продолжать"
    },
    "def": {
      "de": "Der Kurs war anstrengend, aber ich habe <b>durchgehalten</b>, <g>bis</g> ich die Prüfung bestanden habe.",
      "en": "The course was exhausting, but I <b>held out</b> <g>until</g> I passed the exam.",
      "uk": "Курс був виснажливим, але я <b>витримав(-ла)</b>, <g>доки</g> не склав(-ла) іспит.",
      "ru": "Курс был изнурительным, но я <b>выдержал(-а)</b>, <g>пока</g> не сдал(-а) экзамен."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_039",
    "cat": "k5",
    "term": {
      "de": "stolz",
      "en": "proud",
      "uk": "гордий",
      "ru": "гордый"
    },
    "short": {
      "de": "ein gutes Gefühl haben, weil man etwas Schwieriges geschafft hat",
      "en": "to feel good because you have accomplished something difficult",
      "uk": "мати гарне відчуття, бо досяг чогось складного",
      "ru": "испытывать хорошее чувство, потому что достиг чего-то сложного"
    },
    "def": {
      "de": "Ich war nicht <b>stolz</b> auf mich, <g>bis</g> ich das Zertifikat endlich in der Hand hielt.",
      "en": "I was not <b>proud</b> of myself <g>until</g> I finally held the certificate in my hand.",
      "uk": "Я не пишався(-лася) собою, <g>доки</g> нарешті не тримав(-ла) сертифікат у руках.",
      "ru": "Я не гордился(-лась) собой, <g>пока</g> наконец не держал(-а) сертификат в руках."
    },
    "gram": "nebensatz_mit_bis"
  },
  {
    "id": "k5_040",
    "cat": "k5",
    "term": {
      "de": "das Aufstehen",
      "en": "getting up",
      "uk": "вставання",
      "ru": "вставание"
    },
    "short": {
      "de": "das Verlassen des Bettes am Morgen",
      "en": "leaving the bed in the morning",
      "uk": "вставання з ліжка вранці",
      "ru": "вставание с постели утром"
    },
    "def": {
      "de": "<b>Das Aufstehen</b> fällt mir im Winter besonders schwer.",
      "en": "<b>Getting up</b> is especially hard for me in winter.",
      "uk": "<b>Вставати</b> взимку мені особливо важко.",
      "ru": "<b>Вставать</b> зимой мне особенно тяжело."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_041",
    "cat": "k5",
    "term": {
      "de": "das Pendeln",
      "en": "commuting",
      "uk": "регулярні поїздки (на роботу)",
      "ru": "регулярные поездки (на работу)"
    },
    "short": {
      "de": "regelmäßig zwischen zwei Orten hin- und herfahren, zum Beispiel zur Arbeit",
      "en": "regularly travelling back and forth between two places, for example to work",
      "uk": "регулярно їздити туди-сюди між двома місцями, наприклад на роботу",
      "ru": "регулярно ездить туда-сюда между двумя местами, например на работу"
    },
    "def": {
      "de": "<b>Das Pendeln</b> zur Arbeit dauert bei mir fast eine Stunde.",
      "en": "<b>Commuting</b> to work takes me almost an hour.",
      "uk": "<b>Дорога</b> на роботу займає в мене майже годину.",
      "ru": "<b>Дорога</b> на работу занимает у меня почти час."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_042",
    "cat": "k5",
    "term": {
      "de": "das Arbeiten",
      "en": "working",
      "uk": "робота (як процес)",
      "ru": "работа (как процесс)"
    },
    "short": {
      "de": "eine berufliche Tätigkeit ausüben",
      "en": "carrying out a professional activity",
      "uk": "виконувати професійну діяльність",
      "ru": "выполнять профессиональную деятельность"
    },
    "def": {
      "de": "<b>Das Arbeiten</b> in einem internationalen Team macht mir sehr viel Spaß.",
      "en": "<b>Working</b> in an international team is a lot of fun for me.",
      "uk": "<b>Робота</b> в міжнародній команді приносить мені багато задоволення.",
      "ru": "<b>Работа</b> в международной команде приносит мне много удовольствия."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_043",
    "cat": "k5",
    "term": {
      "de": "das Reisen",
      "en": "traveling",
      "uk": "подорожування",
      "ru": "путешествия"
    },
    "short": {
      "de": "an verschiedene Orte fahren, um sie kennenzulernen",
      "en": "going to different places to get to know them",
      "uk": "їздити в різні місця, щоб пізнати їх",
      "ru": "ездить в разные места, чтобы узнать их"
    },
    "def": {
      "de": "<b>Das Reisen</b> hat mir geholfen, viele neue Kulturen kennenzulernen.",
      "en": "<b>Traveling</b> has helped me get to know many new cultures.",
      "uk": "<b>Подорожі</b> допомогли мені пізнати багато нових культур.",
      "ru": "<b>Путешествия</b> помогли мне узнать много новых культур."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_044",
    "cat": "k5",
    "term": {
      "de": "das Zusammenleben",
      "en": "living together",
      "uk": "спільне життя",
      "ru": "совместная жизнь"
    },
    "short": {
      "de": "mit anderen Menschen im selben Haushalt oder in derselben Gesellschaft leben",
      "en": "living with other people in the same household or society",
      "uk": "жити з іншими людьми в одному домогосподарстві чи суспільстві",
      "ru": "жить с другими людьми в одном домохозяйстве или обществе"
    },
    "def": {
      "de": "<b>Das Zusammenleben</b> mit Menschen aus verschiedenen Ländern ist sehr spannend.",
      "en": "<b>Living together</b> with people from different countries is very exciting.",
      "uk": "<b>Спільне життя</b> з людьми з різних країн дуже цікаве.",
      "ru": "<b>Совместная жизнь</b> с людьми из разных стран очень интересна."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_045",
    "cat": "k5",
    "term": {
      "de": "das Verstehen",
      "en": "understanding",
      "uk": "розуміння",
      "ru": "понимание"
    },
    "short": {
      "de": "eine Sache oder Person richtig begreifen",
      "en": "correctly comprehending something or someone",
      "uk": "правильно осягати щось чи когось",
      "ru": "правильно понимать что-то или кого-то"
    },
    "def": {
      "de": "<b>Das Verstehen</b> der Grammatik dauert bei mir immer etwas länger.",
      "en": "<b>Understanding</b> the grammar always takes me a bit longer.",
      "uk": "<b>Розуміння</b> граматики завжди займає в мене трохи більше часу.",
      "ru": "<b>Понимание</b> грамматики всегда занимает у меня чуть больше времени."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_046",
    "cat": "k5",
    "term": {
      "de": "das Kennenlernen",
      "en": "getting to know",
      "uk": "знайомство",
      "ru": "знакомство"
    },
    "short": {
      "de": "eine Person oder Sache zum ersten Mal erleben und Informationen darüber sammeln",
      "en": "experiencing a person or thing for the first time and gathering information about it",
      "uk": "вперше пізнавати людину чи річ і збирати про це інформацію",
      "ru": "впервые узнавать человека или вещь и собирать об этом информацию"
    },
    "def": {
      "de": "<b>Das Kennenlernen</b> neuer Kollegen war am Anfang etwas schwierig.",
      "en": "<b>Getting to know</b> new colleagues was a bit difficult at first.",
      "uk": "<b>Знайомство</b> з новими колегами спочатку було трохи складним.",
      "ru": "<b>Знакомство</b> с новыми коллегами сначала было немного трудным."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_047",
    "cat": "k5",
    "term": {
      "de": "das Zurechtfinden",
      "en": "finding one's way, getting oriented",
      "uk": "орієнтація (в новому місці)",
      "ru": "ориентация (в новом месте)"
    },
    "short": {
      "de": "sich in einer neuen Umgebung oder Situation orientieren können",
      "en": "being able to find your way in a new environment or situation",
      "uk": "уміти орієнтуватися в новому середовищі чи ситуації",
      "ru": "уметь ориентироваться в новой среде или ситуации"
    },
    "def": {
      "de": "<b>Das Zurechtfinden</b> im neuen Land war für mich am Anfang die größte Herausforderung.",
      "en": "<b>Finding my way</b> in the new country was the biggest challenge for me at first.",
      "uk": "<b>Орієнтація</b> в новій країні спочатку була для мене найбільшим викликом.",
      "ru": "<b>Ориентация</b> в новой стране сначала была для меня самым большим вызовом."
    },
    "gram": "verben_als_nomen"
  },
  {
    "id": "k5_048",
    "cat": "k5",
    "term": {
      "de": "sich freuen (auf)",
      "en": "to look forward (to)",
      "uk": "чекати (з радістю)",
      "ru": "с радостью ждать"
    },
    "short": {
      "de": "eine positive Erwartung von etwas haben, das noch kommt",
      "en": "to have a positive expectation of something that is still to come",
      "uk": "мати позитивне очікування чогось, що ще станеться",
      "ru": "иметь позитивное ожидание чего-то, что ещё произойдёт"
    },
    "def": {
      "de": "<g>Worauf</g> <b>freust</b> du <b>dich</b> am meisten, wenn du an den Urlaub denkst?",
      "en": "What are you looking forward to the most when you think about the holiday?",
      "uk": "<g>Чого</g> ти найбільше <b>очікуєш</b>, коли думаєш про відпустку?",
      "ru": "<g>Чего</g> ты больше всего <b>ждёшь</b>, когда думаешь об отпуске?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_049",
    "cat": "k5",
    "term": {
      "de": "sich beschweren (über)",
      "en": "to complain (about)",
      "uk": "скаржитися (на)",
      "ru": "жаловаться (на)"
    },
    "short": {
      "de": "sagen, dass man mit etwas nicht zufrieden ist",
      "en": "to say that you are not satisfied with something",
      "uk": "казати, що ти чимось незадоволений",
      "ru": "говорить, что ты чем-то недоволен"
    },
    "def": {
      "de": "<g>Worüber</g> hat sich der Nachbar diesmal <b>beschwert</b>?",
      "en": "What did the neighbour <b>complain</b> <g>about</g> this time?",
      "uk": "<g>На що</g> цього разу <b>поскаржився</b> сусід?",
      "ru": "<g>На что</g> на этот раз <b>пожаловался</b> сосед?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_050",
    "cat": "k5",
    "term": {
      "de": "nachdenken (über)",
      "en": "to think over, to reflect (on)",
      "uk": "роздумувати (над)",
      "ru": "размышлять (над)"
    },
    "short": {
      "de": "über etwas gründlich und lange nachdenken",
      "en": "to think about something thoroughly and for a long time",
      "uk": "довго й ретельно роздумувати над чимось",
      "ru": "долго и тщательно размышлять о чём-то"
    },
    "def": {
      "de": "<g>Worüber</g> hast du so lange <b>nachgedacht</b>?",
      "en": "What did you <b>think</b> <g>over</g> for so long?",
      "uk": "<g>Над чим</g> ти так довго <b>роздумував(-ла)</b>?",
      "ru": "<g>Над чем</g> ты так долго <b>размышлял(-а)</b>?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_051",
    "cat": "k5",
    "term": {
      "de": "sich wundern (über)",
      "en": "to be surprised (about)",
      "uk": "дивуватися",
      "ru": "удивляться"
    },
    "short": {
      "de": "über etwas erstaunt oder verwundert sein",
      "en": "to be astonished or puzzled about something",
      "uk": "дивуватися чомусь",
      "ru": "удивляться чему-то"
    },
    "def": {
      "de": "<g>Worüber</g> hast du <b>dich</b> <b>gewundert</b>, als du in Deutschland angekommen bist?",
      "en": "What were you <b>surprised</b> <g>about</g> when you arrived in Germany?",
      "uk": "<g>Чому</g> ти <b>здивувався(-лась)</b>, коли приїхав(-ла) до Німеччини?",
      "ru": "<g>Чему</g> ты <b>удивился(-лась)</b>, когда приехал(-а) в Германию?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_052",
    "cat": "k5",
    "term": {
      "de": "Angst haben (vor)",
      "en": "to be afraid (of)",
      "uk": "боятися",
      "ru": "бояться"
    },
    "short": {
      "de": "sich vor etwas fürchten",
      "en": "to fear something",
      "uk": "боятися чогось",
      "ru": "бояться чего-то"
    },
    "def": {
      "de": "<g>Wovor</g> hattest du <b>Angst</b>, bevor du in ein neues Land gezogen bist?",
      "en": "What were you <b>afraid</b> <g>of</g> before you moved to a new country?",
      "uk": "<g>Чого</g> ти <b>боявся(-лась)</b>, перш ніж переїхати в нову країну?",
      "ru": "<g>Чего</g> ты <b>боялся(-лась)</b>, прежде чем переехать в новую страну?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_053",
    "cat": "k5",
    "term": {
      "de": "stolz sein (auf)",
      "en": "to be proud (of)",
      "uk": "пишатися",
      "ru": "гордиться"
    },
    "short": {
      "de": "ein gutes Gefühl über eine eigene Leistung haben",
      "en": "to feel good about your own achievement",
      "uk": "мати гарне відчуття щодо власного досягнення",
      "ru": "испытывать хорошее чувство по поводу собственного достижения"
    },
    "def": {
      "de": "<g>Worauf</g> bist du in deinem neuen Leben besonders <b>stolz</b>?",
      "en": "What are you especially <b>proud</b> <g>of</g> in your new life?",
      "uk": "<g>Чим</g> ти особливо <b>пишаєшся</b> у своєму новому житті?",
      "ru": "<g>Чем</g> ты особенно <b>гордишься</b> в своей новой жизни?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_054",
    "cat": "k5",
    "term": {
      "de": "sich vorbereiten (auf)",
      "en": "to prepare (for)",
      "uk": "готуватися (до)",
      "ru": "готовиться (к)"
    },
    "short": {
      "de": "sich rechtzeitig auf etwas Zukünftiges einstellen",
      "en": "to get ready in time for something in the future",
      "uk": "завчасно готуватися до чогось майбутнього",
      "ru": "заблаговременно готовиться к чему-то будущему"
    },
    "def": {
      "de": "<g>Worauf</g> musst du dich für die Prüfung noch <b>vorbereiten</b>?",
      "en": "What else do you still need to <b>prepare</b> <g>for</g> the exam?",
      "uk": "<g>До чого</g> тобі ще треба <b>підготуватися</b> для іспиту?",
      "ru": "<g>К чему</g> тебе ещё нужно <b>подготовиться</b> к экзамену?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_055",
    "cat": "k5",
    "term": {
      "de": "warnen (vor)",
      "en": "to warn (about)",
      "uk": "попереджати (про)",
      "ru": "предупреждать (о)"
    },
    "short": {
      "de": "jemandem sagen, dass eine Gefahr besteht",
      "en": "to tell someone that there is a danger",
      "uk": "казати комусь, що існує небезпека",
      "ru": "говорить кому-то, что существует опасность"
    },
    "def": {
      "de": "<g>Wovor</g> hat dich dein Freund <b>gewarnt</b>, bevor du hierher gezogen bist?",
      "en": "What did your friend <b>warn</b> you <g>about</g> before you moved here?",
      "uk": "<g>Про що</g> тебе <b>попередив</b> твій друг, перш ніж ти сюди переїхав(-ла)?",
      "ru": "<g>О чём</g> тебя <b>предупредил</b> твой друг, прежде чем ты сюда переехал(-а)?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_056",
    "cat": "k5",
    "term": {
      "de": "die Sitte",
      "en": "custom",
      "uk": "звичай",
      "ru": "обычай"
    },
    "short": {
      "de": "eine traditionelle Verhaltensweise in einer Kultur",
      "en": "a traditional way of behaving in a culture",
      "uk": "традиційна манера поведінки в культурі",
      "ru": "традиционная манера поведения в культуре"
    },
    "def": {
      "de": "Über die lokale <b>Sitte</b> beim Grüßen haben wir uns lange unterhalten — <g>darüber</g> wusste ich vorher nichts.",
      "en": "We talked for a long time about the local <b>custom</b> of greeting — I knew nothing <g>about it</g> before.",
      "uk": "Ми довго розмовляли про місцевий <b>звичай</b> вітання — про це я раніше нічого не знав(-ла).",
      "ru": "Мы долго разговаривали о местном <b>обычае</b> приветствия — об этом я раньше ничего не знал(-а)."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_057",
    "cat": "k5",
    "term": {
      "de": "der Brauch",
      "en": "tradition, custom",
      "uk": "звичай, традиція",
      "ru": "обычай, традиция"
    },
    "short": {
      "de": "eine Handlung, die in einer Gruppe oder Region seit Langem so gemacht wird",
      "en": "an action that has been done that way in a group or region for a long time",
      "uk": "дія, яку виконують у групі чи регіоні здавна",
      "ru": "действие, которое выполняют в группе или регионе издавна"
    },
    "def": {
      "de": "Der <b>Brauch</b> mit dem Weihnachtsbaum hat mich sehr fasziniert — <g>daran</g> denke ich noch oft.",
      "en": "The <b>custom</b> of the Christmas tree fascinated me a lot — I still often think <g>about it</g>.",
      "uk": "<b>Звичай</b> з різдвяною ялинкою мене дуже зачарував — я часто про це думаю.",
      "ru": "<b>Обычай</b> с рождественской ёлкой меня очень восхитил — я часто об этом думаю."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_058",
    "cat": "k5",
    "term": {
      "de": "begrüßen",
      "en": "to greet",
      "uk": "вітати",
      "ru": "приветствовать"
    },
    "short": {
      "de": "jemanden freundlich willkommen heißen, wenn man ihn trifft",
      "en": "to welcome someone in a friendly way when you meet them",
      "uk": "приязно вітати когось при зустрічі",
      "ru": "приветливо приветствовать кого-то при встрече"
    },
    "def": {
      "de": "Wie man Kollegen richtig <b>begrüßt</b>, war für mich am Anfang nicht klar — <g>darüber</g> habe ich viele Fragen gestellt.",
      "en": "How to properly <b>greet</b> colleagues wasn't clear to me at first — I asked a lot of questions <g>about it</g>.",
      "uk": "Як правильно <b>вітати</b> колег, спочатку мені було незрозуміло — я поставив(-ла) багато запитань про це.",
      "ru": "Как правильно <b>приветствовать</b> коллег, сначала мне было непонятно — я задал(-а) много вопросов об этом."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_059",
    "cat": "k5",
    "term": {
      "de": "die Etikette",
      "en": "etiquette",
      "uk": "етикет",
      "ru": "этикет"
    },
    "short": {
      "de": "die Regeln für höfliches und korrektes Verhalten",
      "en": "the rules for polite and correct behaviour",
      "uk": "правила ввічливої та коректної поведінки",
      "ru": "правила вежливого и корректного поведения"
    },
    "def": {
      "de": "Über die <b>Etikette</b> bei Tisch habe ich vorher nicht viel gewusst — <g>darüber</g> hat mir eine Kollegin geholfen.",
      "en": "I didn't know much about table <b>etiquette</b> before — a colleague helped me <g>with it</g>.",
      "uk": "Про застольний <b>етикет</b> я раніше мало знав(-ла) — з цим мені допомогла колега.",
      "ru": "О застольном <b>этикете</b> я раньше мало знал(-а) — с этим мне помогла коллега."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k5_060",
    "cat": "k5",
    "term": {
      "de": "verzichten (auf)",
      "en": "to do without",
      "uk": "відмовлятися (від)",
      "ru": "отказываться (от)"
    },
    "short": {
      "de": "bewusst auf etwas nicht mehr bestehen oder etwas nicht mehr nutzen",
      "en": "to consciously give up insisting on or using something",
      "uk": "свідомо відмовлятися від чогось",
      "ru": "сознательно отказываться от чего-то"
    },
    "def": {
      "de": "<g>Worauf</g> muss man hier bei einem offiziellen Termin unbedingt <b>verzichten</b>?",
      "en": "What absolutely must you <b>do without</b> at an official appointment here?",
      "uk": "<g>Від чого</g> тут обовʼязково потрібно <b>відмовитися</b> на офіційній зустрічі?",
      "ru": "<g>От чего</g> здесь обязательно нужно <b>отказаться</b> на официальной встрече?"
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
    "id": "k6_016",
    "cat": "k6",
    "term": {
      "de": "der Patient / die Patientin",
      "en": "patient",
      "uk": "пацієнт / пацієнтка",
      "ru": "пациент / пациентка"
    },
    "short": {
      "de": "eine Person, die im Krankenhaus oder beim Arzt behandelt wird",
      "en": "a person who is treated in a hospital or by a doctor",
      "uk": "людина, яку лікують у лікарні чи в лікаря",
      "ru": "человек, которого лечат в больнице или у врача"
    },
    "def": {
      "de": "Über den neuen <b>Patienten</b> haben die Ärzte lange gesprochen — <g>darüber</g> gab es viele Fragen.",
      "en": "The doctors talked for a long time about the new <b>patient</b> — there were many questions <g>about it</g>.",
      "uk": "Про нового <b>пацієнта</b> лікарі довго розмовляли — щодо цього було багато запитань.",
      "ru": "О новом <b>пациенте</b> врачи долго разговаривали — по этому поводу было много вопросов."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_017",
    "cat": "k6",
    "term": {
      "de": "der Arzt / die Ärztin",
      "en": "doctor",
      "uk": "лікар / лікарка",
      "ru": "врач"
    },
    "short": {
      "de": "eine Person, die Menschen medizinisch behandelt",
      "en": "a person who treats people medically",
      "uk": "людина, яка медично лікує людей",
      "ru": "человек, который медицински лечит людей"
    },
    "def": {
      "de": "Über den <b>Arzt</b> haben wir nur Gutes gehört — <g>darüber</g> waren wir sehr froh.",
      "en": "We only heard good things about the <b>doctor</b> — we were very happy <g>about that</g>.",
      "uk": "Про <b>лікаря</b> ми чули лише хороше — цьому ми були дуже раді.",
      "ru": "О <b>враче</b> мы слышали только хорошее — этому мы были очень рады."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_018",
    "cat": "k6",
    "term": {
      "de": "besuchen",
      "en": "to visit",
      "uk": "відвідувати",
      "ru": "навещать"
    },
    "short": {
      "de": "zu jemandem gehen, um bei ihm zu sein, zum Beispiel im Krankenhaus",
      "en": "to go to someone to be with them, for example in a hospital",
      "uk": "приходити до когось, щоб побути з ним, наприклад у лікарні",
      "ru": "приходить к кому-то, чтобы побыть с ним, например в больнице"
    },
    "def": {
      "de": "<g>Worüber</g> habt ihr gesprochen, als ihr eure Oma im Krankenhaus <b>besucht</b> habt?",
      "en": "What did you talk about when you <b>visited</b> your grandma in the hospital?",
      "uk": "<g>Про що</g> ви говорили, коли <b>відвідували</b> бабусю в лікарні?",
      "ru": "<g>О чём</g> вы говорили, когда <b>навещали</b> бабушку в больнице?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_019",
    "cat": "k6",
    "term": {
      "de": "sich Sorgen machen (um)",
      "en": "to worry (about)",
      "uk": "хвилюватися (за)",
      "ru": "переживать (за)"
    },
    "short": {
      "de": "ängstlich an jemanden oder etwas denken",
      "en": "to think anxiously about someone or something",
      "uk": "тривожно думати про когось чи щось",
      "ru": "тревожно думать о ком-то или чём-то"
    },
    "def": {
      "de": "<g>Worüber</g> hast du dir am meisten <b>Sorgen gemacht</b>, als er im Krankenhaus war?",
      "en": "What did you <b>worry</b> <g>about</g> the most when he was in the hospital?",
      "uk": "<g>Про що</g> ти найбільше <b>хвилювався(-лась)</b>, коли він був у лікарні?",
      "ru": "<g>О чём</g> ты больше всего <b>переживал(-а)</b>, когда он был в больнице?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_020",
    "cat": "k6",
    "term": {
      "de": "die Aufnahme",
      "en": "admission",
      "uk": "прийом (у лікарню)",
      "ru": "приём (в больницу)"
    },
    "short": {
      "de": "wenn ein Patient offiziell im Krankenhaus registriert wird",
      "en": "when a patient is officially registered at a hospital",
      "uk": "коли пацієнта офіційно реєструють у лікарні",
      "ru": "когда пациента официально регистрируют в больнице"
    },
    "def": {
      "de": "Über die schnelle <b>Aufnahme</b> waren die Angehörigen sehr erleichtert — <g>darüber</g> haben sie sich bei allen bedankt.",
      "en": "The relatives were very relieved about the fast <b>admission</b> — they thanked everyone <g>for it</g>.",
      "uk": "Родичі дуже зраділи швидкому <b>прийому</b> — за це вони всіх подякували.",
      "ru": "Родственники очень обрадовались быстрому <b>приёму</b> — за это они всех поблагодарили."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_021",
    "cat": "k6",
    "term": {
      "de": "entlassen",
      "en": "to discharge",
      "uk": "виписувати (з лікарні)",
      "ru": "выписывать (из больницы)"
    },
    "short": {
      "de": "einen Patienten offiziell aus dem Krankenhaus nach Hause schicken",
      "en": "to officially send a patient home from the hospital",
      "uk": "офіційно відпустити пацієнта з лікарні додому",
      "ru": "официально отпустить пациента из больницы домой"
    },
    "def": {
      "de": "<g>Worüber</g> habt ihr euch gefreut, als er endlich <b>entlassen</b> wurde?",
      "en": "What were you happy <g>about</g> when he was finally <b>discharged</b>?",
      "uk": "<g>Чому</g> ви зраділи, коли його нарешті <b>виписали</b>?",
      "ru": "<g>Чему</g> вы обрадовались, когда его наконец <b>выписали</b>?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_022",
    "cat": "k6",
    "term": {
      "de": "der Besuch",
      "en": "visit",
      "uk": "візит",
      "ru": "визит"
    },
    "short": {
      "de": "wenn man zu jemandem geht, um ihn zu sehen",
      "en": "when you go to see someone",
      "uk": "коли приходиш до когось, щоб побачитися",
      "ru": "когда приходишь к кому-то, чтобы увидеться"
    },
    "def": {
      "de": "Über den kurzen <b>Besuch</b> bei ihr im Krankenhaus haben wir uns alle sehr gefreut — <g>darüber</g> reden wir noch oft.",
      "en": "We were all very happy about the short <b>visit</b> to her in the hospital — we still talk <g>about it</g> often.",
      "uk": "Ми всі дуже зраділи короткому <b>візиту</b> до неї в лікарні — <g>про це</g> ми досі часто говоримо.",
      "ru": "Мы все очень обрадовались короткому <b>визиту</b> к ней в больницу — <g>об этом</g> мы до сих пор часто говорим."
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_023",
    "cat": "k6",
    "term": {
      "de": "betreuen",
      "en": "to look after, to care for",
      "uk": "доглядати",
      "ru": "ухаживать"
    },
    "short": {
      "de": "sich regelmäßig um jemanden kümmern, der Hilfe braucht",
      "en": "to regularly take care of someone who needs help",
      "uk": "регулярно піклуватися про когось, хто потребує допомоги",
      "ru": "регулярно заботиться о ком-то, кто нуждается в помощи"
    },
    "def": {
      "de": "<g>Worüber</g> hat sich die Krankenschwester gefreut, als sie den Patienten <b>betreute</b>?",
      "en": "What was the nurse happy <g>about</g> while she was <b>looking after</b> the patient?",
      "uk": "<g>Чому</g> зраділа медсестра, коли <b>доглядала</b> пацієнта?",
      "ru": "<g>Чему</g> обрадовалась медсестра, когда <b>ухаживала</b> за пациентом?"
    },
    "gram": "praepositionaladverbien_b1"
  },
  {
    "id": "k6_024",
    "cat": "k6",
    "term": {
      "de": "die Diagnose",
      "en": "diagnosis",
      "uk": "діагноз",
      "ru": "диагноз"
    },
    "short": {
      "de": "die Feststellung eines Arztes, welche Krankheit ein Patient hat",
      "en": "a doctor's determination of what illness a patient has",
      "uk": "визначення лікарем, яка хвороба є у пацієнта",
      "ru": "определение врачом, какая болезнь есть у пациента"
    },
    "def": {
      "de": "Die <b>Diagnose</b> <g>wird</g> erst nach den Testergebnissen <g>feststehen</g>.",
      "en": "The <b>diagnosis</b> <g>will</g> only <g>be confirmed</g> after the test results.",
      "uk": "<b>Діагноз</b> буде відомий лише після результатів аналізів.",
      "ru": "<b>Диагноз</b> будет известен только после результатов анализов."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_025",
    "cat": "k6",
    "term": {
      "de": "heilen",
      "en": "to heal, to cure",
      "uk": "загоюватися, лікувати",
      "ru": "заживать, лечить"
    },
    "short": {
      "de": "eine Krankheit oder Wunde vollständig beseitigen",
      "en": "to completely get rid of an illness or wound",
      "uk": "повністю позбавитися хвороби чи рани",
      "ru": "полностью избавиться от болезни или раны"
    },
    "def": {
      "de": "Diese Wunde <g>wird</g> mit der richtigen Behandlung schnell <g>heilen</g>.",
      "en": "This wound <g>will</g> <g>heal</g> quickly with the right treatment.",
      "uk": "Ця рана швидко загоїться з правильним лікуванням.",
      "ru": "Эта рана быстро заживёт при правильном лечении."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_026",
    "cat": "k6",
    "term": {
      "de": "sich erholen",
      "en": "to recover",
      "uk": "одужувати",
      "ru": "выздоравливать"
    },
    "short": {
      "de": "nach einer Krankheit oder Anstrengung wieder gesund und stark werden",
      "en": "to become healthy and strong again after an illness or exertion",
      "uk": "знову стати здоровим і сильним після хвороби чи навантаження",
      "ru": "снова стать здоровым и сильным после болезни или нагрузки"
    },
    "def": {
      "de": "Der Patient <g>wird</g> sich in den nächsten Wochen vollständig <g>erholen</g>.",
      "en": "The patient <g>will</g> <g>recover</g> fully in the coming weeks.",
      "uk": "Пацієнт повністю одужає протягом наступних тижнів.",
      "ru": "Пациент полностью выздоровеет в течение следующих недель."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_027",
    "cat": "k6",
    "term": {
      "de": "der Befund",
      "en": "findings, result",
      "uk": "результат обстеження",
      "ru": "результат обследования"
    },
    "short": {
      "de": "das Ergebnis einer medizinischen Untersuchung",
      "en": "the result of a medical examination",
      "uk": "результат медичного обстеження",
      "ru": "результат медицинского обследования"
    },
    "def": {
      "de": "Der <b>Befund</b> <g>wird</g> morgen früh <g>vorliegen</g>.",
      "en": "The <b>findings</b> <g>will</g> <g>be available</g> tomorrow morning.",
      "uk": "<b>Результат</b> обстеження буде готовий завтра вранці.",
      "ru": "<b>Результат</b> обследования будет готов завтра утром."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_028",
    "cat": "k6",
    "term": {
      "de": "die Therapie",
      "en": "therapy",
      "uk": "терапія",
      "ru": "терапия"
    },
    "short": {
      "de": "eine regelmäßige Behandlung, um eine Krankheit zu heilen oder zu verbessern",
      "en": "a regular treatment to cure or improve an illness",
      "uk": "регулярне лікування, щоб вилікувати чи покращити хворобу",
      "ru": "регулярное лечение, чтобы вылечить или улучшить болезнь"
    },
    "def": {
      "de": "Die <b>Therapie</b> <g>wird</g> mindestens sechs Wochen <g>dauern</g>.",
      "en": "The <b>therapy</b> <g>will</g> <g>last</g> at least six weeks.",
      "uk": "<b>Терапія</b> триватиме щонайменше шість тижнів.",
      "ru": "<b>Терапия</b> продлится минимум шесть недель."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_029",
    "cat": "k6",
    "term": {
      "de": "verschreiben",
      "en": "to prescribe",
      "uk": "призначати (ліки)",
      "ru": "назначать (лекарство)"
    },
    "short": {
      "de": "als Arzt ein Medikament für einen Patienten aufschreiben",
      "en": "as a doctor, to write a medication for a patient",
      "uk": "як лікар, призначати ліки пацієнту",
      "ru": "как врач, назначать лекарство пациенту"
    },
    "def": {
      "de": "Der Arzt <g>wird</g> ihr ein neues Medikament <g>verschreiben</g>.",
      "en": "The doctor <g>will</g> <g>prescribe</g> her a new medication.",
      "uk": "Лікар призначить їй нові ліки.",
      "ru": "Врач назначит ей новое лекарство."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_030",
    "cat": "k6",
    "term": {
      "de": "abklingen",
      "en": "to subside, to wear off",
      "uk": "вщухати",
      "ru": "утихать"
    },
    "short": {
      "de": "langsam schwächer werden und verschwinden, zum Beispiel Schmerzen",
      "en": "to slowly become weaker and disappear, for example pain",
      "uk": "поступово слабшати і зникати, наприклад про біль",
      "ru": "постепенно слабеть и исчезать, например о боли"
    },
    "def": {
      "de": "Die Schmerzen <g>werden</g> in ein paar Tagen sicher <g>abklingen</g>.",
      "en": "The pain <g>will</g> definitely <g>subside</g> in a few days.",
      "uk": "Біль точно вщухне за кілька днів.",
      "ru": "Боль точно утихнет через несколько дней."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_031",
    "cat": "k6",
    "term": {
      "de": "die Genesung",
      "en": "recovery",
      "uk": "одужання",
      "ru": "выздоровление"
    },
    "short": {
      "de": "der Prozess, wieder gesund zu werden",
      "en": "the process of becoming healthy again",
      "uk": "процес одужання",
      "ru": "процесс выздоровления"
    },
    "def": {
      "de": "Die <b>Genesung</b> <g>wird</g> mit viel Ruhe schneller <g>gehen</g>.",
      "en": "The <b>recovery</b> <g>will</g> <g>go</g> faster with plenty of rest.",
      "uk": "Одужання пройде швидше за достатнього відпочинку.",
      "ru": "Выздоровление пройдёт быстрее при достаточном отдыхе."
    },
    "gram": "futur_werden"
  },
  {
    "id": "k6_032",
    "cat": "k6",
    "term": {
      "de": "die Erste Hilfe",
      "en": "first aid",
      "uk": "перша допомога",
      "ru": "первая помощь"
    },
    "short": {
      "de": "die sofortige Hilfe direkt nach einem Unfall, bevor der Arzt kommt",
      "en": "the immediate help right after an accident, before the doctor arrives",
      "uk": "негайна допомога одразу після нещасного випадку, до приходу лікаря",
      "ru": "немедленная помощь сразу после несчастного случая, до прихода врача"
    },
    "def": {
      "de": "Bei diesem Kurs lernt man <g>nicht nur</g> die Theorie, <g>sondern auch</g> die praktische <b>Erste Hilfe</b>.",
      "en": "In this course, you learn <g>not only</g> the theory <g>but also</g> practical <b>first aid</b>.",
      "uk": "На цьому курсі вивчають <g>не тільки</g> теорію, <g>а й</g> практичну <b>першу допомогу</b>.",
      "ru": "На этом курсе изучают <g>не только</g> теорию, <g>но и</g> практическую <b>первую помощь</b>."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_033",
    "cat": "k6",
    "term": {
      "de": "retten",
      "en": "to rescue, to save",
      "uk": "рятувати",
      "ru": "спасать"
    },
    "short": {
      "de": "jemanden aus einer gefährlichen Situation befreien",
      "en": "to free someone from a dangerous situation",
      "uk": "рятувати когось із небезпечної ситуації",
      "ru": "спасать кого-то из опасной ситуации"
    },
    "def": {
      "de": "Der Rettungsdienst hat <g>nicht nur</g> das Kind, <g>sondern auch</g> den Hund <b>gerettet</b>.",
      "en": "The rescue service <g>not only</g> <b>saved</b> the child <g>but also</g> the dog.",
      "uk": "Рятувальна служба <g>не тільки</g> <b>врятувала</b> дитину, <g>а й</g> собаку.",
      "ru": "Спасательная служба <g>не только</g> <b>спасла</b> ребёнка, <g>но и</g> собаку."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_034",
    "cat": "k6",
    "term": {
      "de": "bewusstlos",
      "en": "unconscious",
      "uk": "непритомний",
      "ru": "без сознания"
    },
    "short": {
      "de": "wenn man das Bewusstsein verloren hat und nicht reagiert",
      "en": "when you have lost consciousness and do not react",
      "uk": "коли втратив свідомість і не реагуєш",
      "ru": "когда потерял сознание и не реагируешь"
    },
    "def": {
      "de": "Der Mann war <g>nicht nur</g> <b>bewusstlos</b>, <g>sondern auch</g> sehr schwach.",
      "en": "The man was <g>not only</g> <b>unconscious</b> <g>but also</g> very weak.",
      "uk": "Чоловік був <g>не тільки</g> <b>непритомним</b>, <g>а й</g> дуже слабким.",
      "ru": "Мужчина был <g>не только</g> <b>без сознания</b>, <g>но и</g> очень слабым."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_035",
    "cat": "k6",
    "term": {
      "de": "bluten",
      "en": "to bleed",
      "uk": "кровоточити",
      "ru": "кровоточить"
    },
    "short": {
      "de": "wenn Blut aus dem Körper austritt, zum Beispiel bei einer Wunde",
      "en": "when blood comes out of the body, for example from a wound",
      "uk": "коли кров виходить з тіла, наприклад з рани",
      "ru": "когда кровь выходит из тела, например из раны"
    },
    "def": {
      "de": "Die Wunde hat <g>nicht nur</g> stark <b>geblutet</b>, <g>sondern auch</g> sehr wehgetan.",
      "en": "The wound <g>not only</g> <b>bled</b> heavily <g>but also</g> hurt a lot.",
      "uk": "Рана <g>не тільки</g> сильно <b>кровоточила</b>, <g>а й</g> дуже боліла.",
      "ru": "Рана <g>не только</g> сильно <b>кровоточила</b>, <g>но и</g> очень болела."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_036",
    "cat": "k6",
    "term": {
      "de": "die Wunde",
      "en": "wound",
      "uk": "рана",
      "ru": "рана"
    },
    "short": {
      "de": "eine Verletzung der Haut, zum Beispiel durch einen Schnitt",
      "en": "an injury to the skin, for example from a cut",
      "uk": "пошкодження шкіри, наприклад від порізу",
      "ru": "повреждение кожи, например от пореза"
    },
    "def": {
      "de": "Die <b>Wunde</b> war <g>nicht nur</g> tief, <g>sondern auch</g> schmutzig.",
      "en": "The <b>wound</b> was <g>not only</g> deep <g>but also</g> dirty.",
      "uk": "<b>Рана</b> була <g>не тільки</g> глибокою, <g>а й</g> брудною.",
      "ru": "<b>Рана</b> была <g>не только</g> глубокой, <g>но и</g> грязной."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_037",
    "cat": "k6",
    "term": {
      "de": "der Schock",
      "en": "shock",
      "uk": "шок",
      "ru": "шок"
    },
    "short": {
      "de": "ein plötzlicher, starker körperlicher oder seelischer Zustand nach etwas Schrecklichem",
      "en": "a sudden, strong physical or emotional state after something terrible",
      "uk": "раптовий, сильний фізичний чи емоційний стан після чогось жахливого",
      "ru": "внезапное, сильное физическое или эмоциональное состояние после чего-то ужасного"
    },
    "def": {
      "de": "Sie stand <g>nicht nur</g> unter <b>Schock</b>, <g>sondern auch</g> unter starkem Stress.",
      "en": "She was <g>not only</g> in <b>shock</b> <g>but also</g> under a lot of stress.",
      "uk": "Вона перебувала <g>не тільки</g> в стані <b>шоку</b>, <g>а й</g> під сильним стресом.",
      "ru": "Она находилась <g>не только</g> в состоянии <b>шока</b>, <g>но и</g> под сильным стрессом."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_038",
    "cat": "k6",
    "term": {
      "de": "alarmieren",
      "en": "to alert",
      "uk": "сповіщати",
      "ru": "оповещать"
    },
    "short": {
      "de": "schnell informieren, dass ein Notfall besteht",
      "en": "to quickly inform someone that there is an emergency",
      "uk": "швидко повідомляти про надзвичайну ситуацію",
      "ru": "быстро сообщать о чрезвычайной ситуации"
    },
    "def": {
      "de": "Der Nachbar hat <g>nicht nur</g> die Feuerwehr, <g>sondern auch</g> die Polizei <b>alarmiert</b>.",
      "en": "The neighbour <g>not only</g> <b>alerted</b> the fire department <g>but also</g> the police.",
      "uk": "Сусід <g>не тільки</g> <b>сповістив</b> пожежну службу, <g>а й</g> поліцію.",
      "ru": "Сосед <g>не только</g> <b>оповестил</b> пожарную службу, <g>но и</g> полицию."
    },
    "gram": "nicht_nur_sondern_auch"
  },
  {
    "id": "k6_039",
    "cat": "k6",
    "term": {
      "de": "die Versicherungskarte",
      "en": "insurance card",
      "uk": "страхова картка",
      "ru": "страховая карта"
    },
    "short": {
      "de": "eine Karte, die zeigt, dass man krankenversichert ist",
      "en": "a card that shows you have health insurance",
      "uk": "картка, яка підтверджує наявність медичного страхування",
      "ru": "карта, подтверждающая наличие медицинской страховки"
    },
    "def": {
      "de": "Sie zeigte ihre <b>Versicherungskarte</b>, <g>um</g> sich schneller <g>anzumelden</g>.",
      "en": "She showed her <b>insurance card</b> <g>in order to</g> <g>register</g> faster.",
      "uk": "Вона показала свою <b>страхову картку</b>, <g>щоб</g> швидше зареєструватися.",
      "ru": "Она показала свою <b>страховую карту</b>, <g>чтобы</g> быстрее зарегистрироваться."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_040",
    "cat": "k6",
    "term": {
      "de": "sich anmelden",
      "en": "to register",
      "uk": "реєструватися",
      "ru": "регистрироваться"
    },
    "short": {
      "de": "seinen Namen und seine Daten offiziell angeben, bevor man behandelt wird",
      "en": "to officially give your name and details before being treated",
      "uk": "офіційно надати своє імʼя та дані перед лікуванням",
      "ru": "официально предоставить своё имя и данные перед лечением"
    },
    "def": {
      "de": "Er ging zum Schalter, <g>um</g> sich <g>anzumelden</g>.",
      "en": "He went to the counter <g>in order to</g> <g>register</g>.",
      "uk": "Він пішов до стійки, <g>щоб</g> зареєструватися.",
      "ru": "Он подошёл к стойке, <g>чтобы</g> зарегистрироваться."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_041",
    "cat": "k6",
    "term": {
      "de": "die Wartezeit",
      "en": "waiting time",
      "uk": "час очікування",
      "ru": "время ожидания"
    },
    "short": {
      "de": "die Zeit, die man warten muss, bis man an der Reihe ist",
      "en": "the time you have to wait until it is your turn",
      "uk": "час, який потрібно чекати, доки настане твоя черга",
      "ru": "время, которое нужно ждать, пока не наступит твоя очередь"
    },
    "def": {
      "de": "Sie brachte ein Buch mit, <g>um</g> die <b>Wartezeit</b> sinnvoll <g>zu nutzen</g>.",
      "en": "She brought a book <g>in order to</g> use the <b>waiting time</b> wisely.",
      "uk": "Вона взяла з собою книжку, <g>щоб</g> корисно провести час очікування.",
      "ru": "Она взяла с собой книгу, <g>чтобы</g> с пользой провести время ожидания."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_042",
    "cat": "k6",
    "term": {
      "de": "vorlegen",
      "en": "to present, to submit",
      "uk": "подавати (документ)",
      "ru": "подавать (документ)"
    },
    "short": {
      "de": "ein Dokument zeigen oder abgeben",
      "en": "to show or hand in a document",
      "uk": "показати чи подати документ",
      "ru": "показать или подать документ"
    },
    "def": {
      "de": "Er kam früh, <g>um</g> alle Unterlagen rechtzeitig <g>vorzulegen</g>.",
      "en": "He came early <g>in order to</g> <g>submit</g> all the documents on time.",
      "uk": "Він прийшов рано, <g>щоб</g> вчасно подати всі документи.",
      "ru": "Он пришёл рано, <g>чтобы</g> вовремя подать все документы."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_043",
    "cat": "k6",
    "term": {
      "de": "die Priorität",
      "en": "priority",
      "uk": "пріоритет",
      "ru": "приоритет"
    },
    "short": {
      "de": "was zuerst und am wichtigsten behandelt wird",
      "en": "what is dealt with first and is most important",
      "uk": "те, чим займаються насамперед і що найважливіше",
      "ru": "то, чем занимаются в первую очередь и что важнее всего"
    },
    "def": {
      "de": "Die Ärztin sortierte die Patienten nach <b>Priorität</b>, <g>um</g> den Schwerverletzten sofort <g>zu helfen</g>.",
      "en": "The doctor sorted the patients by <b>priority</b> <g>in order to</g> help the severely injured immediately.",
      "uk": "Лікарка розсортувала пацієнтів за <b>пріоритетом</b>, <g>щоб</g> одразу допомогти тяжкопораненим.",
      "ru": "Врач рассортировала пациентов по <b>приоритету</b>, <g>чтобы</g> сразу помочь тяжелораненым."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_044",
    "cat": "k6",
    "term": {
      "de": "dringend",
      "en": "urgent",
      "uk": "терміновий",
      "ru": "срочный"
    },
    "short": {
      "de": "wenn etwas sehr schnell gemacht werden muss",
      "en": "when something has to be done very quickly",
      "uk": "коли щось потрібно зробити дуже швидко",
      "ru": "когда что-то нужно сделать очень быстро"
    },
    "def": {
      "de": "Sie rief laut nach dem Arzt, <g>um</g> auf den <b>dringenden</b> Fall <g>aufmerksam zu machen</g>.",
      "en": "She called loudly for the doctor <g>in order to</g> draw attention to the <b>urgent</b> case.",
      "uk": "Вона голосно покликала лікаря, <g>щоб</g> звернути увагу на <b>терміновий</b> випадок.",
      "ru": "Она громко позвала врача, <g>чтобы</g> обратить внимание на <b>срочный</b> случай."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_045",
    "cat": "k6",
    "term": {
      "de": "unterschreiben",
      "en": "to sign",
      "uk": "підписувати",
      "ru": "подписывать"
    },
    "short": {
      "de": "seinen Namen unter ein Dokument schreiben",
      "en": "to write your name under a document",
      "uk": "писати своє імʼя під документом",
      "ru": "писать своё имя под документом"
    },
    "def": {
      "de": "Sie las das Formular genau, <g>um</g> es dann korrekt <g>zu unterschreiben</g>.",
      "en": "She read the form carefully <g>in order to</g> then <g>sign</g> it correctly.",
      "uk": "Вона уважно прочитала формуляр, <g>щоб</g> потім правильно його підписати.",
      "ru": "Она внимательно прочитала формуляр, <g>чтобы</g> потом правильно его подписать."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_046",
    "cat": "k6",
    "term": {
      "de": "abgeben",
      "en": "to hand in",
      "uk": "здавати (документ)",
      "ru": "сдавать (документ)"
    },
    "short": {
      "de": "etwas offiziell an eine zuständige Stelle geben",
      "en": "to officially give something to the responsible office",
      "uk": "офіційно передати щось відповідальній інстанції",
      "ru": "официально передать что-то ответственной инстанции"
    },
    "def": {
      "de": "Er beeilte sich, <g>um</g> das Formular noch vor Mittag <g>abzugeben</g>.",
      "en": "He hurried <g>in order to</g> <g>hand in</g> the form before noon.",
      "uk": "Він поспішав, <g>щоб</g> здати формуляр ще до обіду.",
      "ru": "Он торопился, <g>чтобы</g> сдать формуляр ещё до обеда."
    },
    "gram": "satz_mit_um_zu"
  },
  {
    "id": "k6_047",
    "cat": "k6",
    "term": {
      "de": "die Narkose",
      "en": "anaesthesia",
      "uk": "наркоз",
      "ru": "наркоз"
    },
    "short": {
      "de": "ein Medikament, das den Körper vor einer Operation schläfrig oder gefühllos macht",
      "en": "a medication that makes the body sleepy or numb before an operation",
      "uk": "препарат, який робить тіло сонним чи нечутливим перед операцією",
      "ru": "препарат, который делает тело сонным или бесчувственным перед операцией"
    },
    "def": {
      "de": "Der Anästhesist erklärte die <b>Narkose</b> genau, <g>damit</g> der Patient keine Angst <g>hat</g>.",
      "en": "The anaesthetist explained the <b>anaesthesia</b> precisely <g>so that</g> the patient <g>would not be</g> afraid.",
      "uk": "Анестезіолог детально пояснив <b>наркоз</b>, <g>щоб</g> пацієнт не боявся.",
      "ru": "Анестезиолог подробно объяснил <b>наркоз</b>, <g>чтобы</g> пациент не боялся."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_048",
    "cat": "k6",
    "term": {
      "de": "der Chirurg / die Chirurgin",
      "en": "surgeon",
      "uk": "хірург / хірургиня",
      "ru": "хирург"
    },
    "short": {
      "de": "ein Arzt, der Operationen macht",
      "en": "a doctor who performs operations",
      "uk": "лікар, який робить операції",
      "ru": "врач, который делает операции"
    },
    "def": {
      "de": "Die <b>Chirurgin</b> sprach ruhig mit der Familie, <g>damit</g> sie sich weniger <g>sorgt</g>.",
      "en": "The <b>surgeon</b> spoke calmly with the family <g>so that</g> they <g>would worry</g> less.",
      "uk": "<b>Хірургиня</b> спокійно поговорила з родиною, <g>щоб</g> вони менше хвилювалися.",
      "ru": "<b>Хирург</b> спокойно поговорила с семьёй, <g>чтобы</g> они меньше волновались."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_049",
    "cat": "k6",
    "term": {
      "de": "aufklären",
      "en": "to inform, to brief (a patient)",
      "uk": "інформувати (пацієнта)",
      "ru": "информировать (пациента)"
    },
    "short": {
      "de": "einem Patienten genau erklären, was bei einer Behandlung passiert",
      "en": "to explain precisely to a patient what happens during a treatment",
      "uk": "детально пояснити пацієнту, що відбувається під час лікування",
      "ru": "подробно объяснить пациенту, что происходит во время лечения"
    },
    "def": {
      "de": "Der Arzt musste den Patienten genau <b>aufklären</b>, <g>damit</g> er der Operation <g>zustimmt</g>.",
      "en": "The doctor had to <b>inform</b> the patient precisely <g>so that</g> he <g>would agree</g> to the operation.",
      "uk": "Лікар мав детально <b>проінформувати</b> пацієнта, <g>щоб</g> той погодився на операцію.",
      "ru": "Врач должен был подробно <b>проинформировать</b> пациента, <g>чтобы</g> тот согласился на операцию."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_050",
    "cat": "k6",
    "term": {
      "de": "zustimmen",
      "en": "to agree, to consent",
      "uk": "погоджуватися",
      "ru": "соглашаться"
    },
    "short": {
      "de": "sagen, dass man mit etwas einverstanden ist",
      "en": "to say that you agree with something",
      "uk": "казати, що ти з чимось погоджуєшся",
      "ru": "говорить, что ты с чем-то согласен"
    },
    "def": {
      "de": "Die Familie musste schnell <b>zustimmen</b>, <g>damit</g> die Ärzte sofort <g>operieren</g>.",
      "en": "The family had to <b>agree</b> quickly <g>so that</g> the doctors <g>could operate</g> immediately.",
      "uk": "Родина мала швидко <b>погодитися</b>, <g>щоб</g> лікарі одразу прооперували.",
      "ru": "Семья должна была быстро <b>согласиться</b>, <g>чтобы</g> врачи сразу прооперировали."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_051",
    "cat": "k6",
    "term": {
      "de": "das Risiko",
      "en": "risk",
      "uk": "ризик",
      "ru": "риск"
    },
    "short": {
      "de": "die Möglichkeit, dass etwas Negatives passiert",
      "en": "the possibility that something negative happens",
      "uk": "можливість того, що станеться щось негативне",
      "ru": "возможность того, что произойдёт что-то негативное"
    },
    "def": {
      "de": "Der Arzt erklärte das <b>Risiko</b> ausführlich, <g>damit</g> der Patient eine informierte Entscheidung <g>trifft</g>.",
      "en": "The doctor explained the <b>risk</b> in detail <g>so that</g> the patient <g>could make</g> an informed decision.",
      "uk": "Лікар детально пояснив <b>ризик</b>, <g>щоб</g> пацієнт прийняв усвідомлене рішення.",
      "ru": "Врач подробно объяснил <b>риск</b>, <g>чтобы</g> пациент принял осознанное решение."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_052",
    "cat": "k6",
    "term": {
      "de": "betäuben",
      "en": "to anaesthetize, to numb",
      "uk": "знеболювати",
      "ru": "обезболивать"
    },
    "short": {
      "de": "einen Körperteil oder den ganzen Körper gefühllos machen",
      "en": "to make a body part or the whole body numb",
      "uk": "робити частину тіла чи все тіло нечутливим",
      "ru": "делать часть тела или всё тело бесчувственным"
    },
    "def": {
      "de": "Die Ärztin musste den Arm zuerst <b>betäuben</b>, <g>damit</g> der Patient nichts <g>spürt</g>.",
      "en": "The doctor had to <b>numb</b> the arm first <g>so that</g> the patient <g>would not feel</g> anything.",
      "uk": "Лікарка спочатку мала <b>знеболити</b> руку, <g>щоб</g> пацієнт нічого не відчував.",
      "ru": "Врач сначала должна была <b>обезболить</b> руку, <g>чтобы</g> пациент ничего не чувствовал."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_053",
    "cat": "k6",
    "term": {
      "de": "überwachen",
      "en": "to monitor",
      "uk": "наглядати",
      "ru": "наблюдать"
    },
    "short": {
      "de": "regelmäßig kontrollieren, ob alles in Ordnung ist",
      "en": "to regularly check that everything is fine",
      "uk": "регулярно перевіряти, чи все гаразд",
      "ru": "регулярно проверять, всё ли в порядке"
    },
    "def": {
      "de": "Die Pflegerin musste den Patienten die ganze Nacht <b>überwachen</b>, <g>damit</g> nichts <g>passiert</g>.",
      "en": "The nurse had to <b>monitor</b> the patient all night <g>so that</g> nothing <g>would happen</g>.",
      "uk": "Медсестра мала цілу ніч <b>наглядати</b> за пацієнтом, <g>щоб</g> нічого не сталося.",
      "ru": "Медсестра должна была всю ночь <b>наблюдать</b> за пациентом, <g>чтобы</g> ничего не случилось."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_054",
    "cat": "k6",
    "term": {
      "de": "informieren",
      "en": "to inform",
      "uk": "повідомляти",
      "ru": "сообщать"
    },
    "short": {
      "de": "jemandem wichtige Informationen geben",
      "en": "to give someone important information",
      "uk": "давати комусь важливу інформацію",
      "ru": "давать кому-то важную информацию"
    },
    "def": {
      "de": "Die Schwester musste die Familie sofort <b>informieren</b>, <g>damit</g> sie ins Krankenhaus <g>kommt</g>.",
      "en": "The nurse had to <b>inform</b> the family immediately <g>so that</g> they <g>would come</g> to the hospital.",
      "uk": "Медсестра мала одразу <b>повідомити</b> родину, <g>щоб</g> вони приїхали до лікарні.",
      "ru": "Медсестра должна была сразу <b>сообщить</b> семье, <g>чтобы</g> они приехали в больницу."
    },
    "gram": "nebensatz_mit_damit_wdh_b1"
  },
  {
    "id": "k6_055",
    "cat": "k6",
    "term": {
      "de": "die Gesundheit",
      "en": "health",
      "uk": "здоровʼя",
      "ru": "здоровье"
    },
    "short": {
      "de": "der Zustand, wenn der Körper und der Geist gut funktionieren",
      "en": "the state when the body and mind function well",
      "uk": "стан, коли тіло й розум добре функціонують",
      "ru": "состояние, когда тело и разум хорошо функционируют"
    },
    "def": {
      "de": "Die <g><b>Gesundheit</b></g> der Patienten hat für dieses Krankenhaus höchste Priorität.",
      "en": "The <b>health</b> of the patients has the highest priority for this hospital.",
      "uk": "<b>Здоровʼя</b> пацієнтів — найвищий пріоритет для цієї лікарні.",
      "ru": "<b>Здоровье</b> пациентов — высший приоритет для этой больницы."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_056",
    "cat": "k6",
    "term": {
      "de": "die Sicherheit",
      "en": "safety",
      "uk": "безпека",
      "ru": "безопасность"
    },
    "short": {
      "de": "der Zustand, wenn keine Gefahr besteht",
      "en": "the state when there is no danger",
      "uk": "стан, коли немає небезпеки",
      "ru": "состояние, когда нет опасности"
    },
    "def": {
      "de": "Die <g><b>Sicherheit</b></g> der Patienten steht bei jeder Operation an erster Stelle.",
      "en": "Patient <b>safety</b> comes first in every operation.",
      "uk": "<b>Безпека</b> пацієнтів на першому місці під час кожної операції.",
      "ru": "<b>Безопасность</b> пациентов на первом месте во время каждой операции."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_057",
    "cat": "k6",
    "term": {
      "de": "die Möglichkeit",
      "en": "possibility",
      "uk": "можливість",
      "ru": "возможность"
    },
    "short": {
      "de": "eine Chance oder ein Weg, etwas zu tun",
      "en": "a chance or way to do something",
      "uk": "шанс чи спосіб щось зробити",
      "ru": "шанс или способ что-то сделать"
    },
    "def": {
      "de": "Es gibt heute mehr <g><b>Möglichkeiten</b></g> für eine erfolgreiche Behandlung als früher.",
      "en": "Today there are more <b>possibilities</b> for successful treatment than before.",
      "uk": "Сьогодні є більше <b>можливостей</b> для успішного лікування, ніж раніше.",
      "ru": "Сегодня существует больше <b>возможностей</b> для успешного лечения, чем раньше."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_058",
    "cat": "k6",
    "term": {
      "de": "die Schwierigkeit",
      "en": "difficulty",
      "uk": "труднощі",
      "ru": "трудность"
    },
    "short": {
      "de": "ein Problem, das eine Aufgabe schwer macht",
      "en": "a problem that makes a task hard",
      "uk": "проблема, яка ускладнює завдання",
      "ru": "проблема, которая усложняет задачу"
    },
    "def": {
      "de": "Trotz einiger <g><b>Schwierigkeiten</b></g> verlief die Operation ohne größere Probleme.",
      "en": "Despite some <b>difficulties</b>, the operation went without major problems.",
      "uk": "Попри деякі <b>труднощі</b>, операція пройшла без серйозних проблем.",
      "ru": "Несмотря на некоторые <b>трудности</b>, операция прошла без серьёзных проблем."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_059",
    "cat": "k6",
    "term": {
      "de": "die Sauberkeit",
      "en": "cleanliness",
      "uk": "чистота",
      "ru": "чистота"
    },
    "short": {
      "de": "der Zustand, wenn etwas sauber und hygienisch ist",
      "en": "the state when something is clean and hygienic",
      "uk": "стан, коли щось чисте й гігієнічне",
      "ru": "состояние, когда что-то чистое и гигиеничное"
    },
    "def": {
      "de": "Im Operationssaal wird auf absolute <g><b>Sauberkeit</b></g> besonders geachtet.",
      "en": "Absolute <b>cleanliness</b> is paid special attention to in the operating room.",
      "uk": "В операційній особливо стежать за абсолютною <b>чистотою</b>.",
      "ru": "В операционной особенно следят за абсолютной <b>чистотой</b>."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k6_060",
    "cat": "k6",
    "term": {
      "de": "die Wichtigkeit",
      "en": "importance",
      "uk": "важливість",
      "ru": "важность"
    },
    "short": {
      "de": "wie bedeutend oder relevant etwas ist",
      "en": "how significant or relevant something is",
      "uk": "наскільки значуще чи важливе щось",
      "ru": "насколько значимо или важно что-то"
    },
    "def": {
      "de": "Der Arzt erklärte den Patienten die <g><b>Wichtigkeit</b></g> einer gesunden Ernährung nach der Operation.",
      "en": "The doctor explained to the patients the <b>importance</b> of a healthy diet after the operation.",
      "uk": "Лікар пояснив пацієнтам <b>важливість</b> здорового харчування після операції.",
      "ru": "Врач объяснил пациентам <b>важность</b> здорового питания после операции."
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
    "id": "k7_016",
    "cat": "k7",
    "term": {
      "de": "die Nachhaltigkeit",
      "en": "sustainability",
      "uk": "сталість",
      "ru": "устойчивость"
    },
    "short": {
      "de": "wenn man so lebt oder wirtschaftet, dass die Umwelt für die Zukunft geschützt bleibt",
      "en": "living or doing business in a way that protects the environment for the future",
      "uk": "коли живеш чи господарюєш так, щоб довкілля залишалося захищеним для майбутнього",
      "ru": "когда живёшь или хозяйствуешь так, чтобы окружающая среда оставалась защищённой для будущего"
    },
    "def": {
      "de": "Die <g><b>Nachhaltigkeit</b></g> spielt bei diesem Unternehmen eine sehr große Rolle.",
      "en": "<b>Sustainability</b> plays a very big role at this company.",
      "uk": "<b>Сталість</b> відіграє дуже велику роль у цій компанії.",
      "ru": "<b>Устойчивость</b> играет очень большую роль в этой компании."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_017",
    "cat": "k7",
    "term": {
      "de": "die Verantwortlichkeit",
      "en": "responsibility",
      "uk": "відповідальність",
      "ru": "ответственность"
    },
    "short": {
      "de": "die Pflicht, sich um etwas zu kümmern und dafür einzustehen",
      "en": "the duty to take care of something and be accountable for it",
      "uk": "обовʼязок піклуватися про щось і відповідати за це",
      "ru": "обязанность заботиться о чём-то и отвечать за это"
    },
    "def": {
      "de": "Jeder von uns trägt eine gewisse <g><b>Verantwortlichkeit</b></g> für den Klimaschutz.",
      "en": "Each of us bears a certain <b>responsibility</b> for climate protection.",
      "uk": "Кожен із нас несе певну <b>відповідальність</b> за захист клімату.",
      "ru": "Каждый из нас несёт определённую <b>ответственность</b> за защиту климата."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_018",
    "cat": "k7",
    "term": {
      "de": "die Aufmerksamkeit",
      "en": "attention",
      "uk": "увага",
      "ru": "внимание"
    },
    "short": {
      "de": "wenn man etwas genau beobachtet oder sich darauf konzentriert",
      "en": "when you observe something closely or focus on it",
      "uk": "коли уважно спостерігаєш за чимось або зосереджуєшся на цьому",
      "ru": "когда внимательно наблюдаешь за чем-то или сосредотачиваешься на этом"
    },
    "def": {
      "de": "Umweltthemen bekommen in den Medien immer mehr <g><b>Aufmerksamkeit</b></g>.",
      "en": "Environmental topics are getting more and more <b>attention</b> in the media.",
      "uk": "Екологічні теми отримують дедалі більше <b>уваги</b> в медіа.",
      "ru": "Экологические темы получают всё больше <b>внимания</b> в СМИ."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_019",
    "cat": "k7",
    "term": {
      "de": "die Knappheit",
      "en": "scarcity",
      "uk": "дефіцит",
      "ru": "дефицит"
    },
    "short": {
      "de": "wenn von etwas zu wenig vorhanden ist",
      "en": "when there is too little of something available",
      "uk": "коли чогось надто мало",
      "ru": "когда чего-то слишком мало"
    },
    "def": {
      "de": "Die <g><b>Knappheit</b></g> von sauberem Trinkwasser ist in vielen Ländern ein großes Problem.",
      "en": "The <b>scarcity</b> of clean drinking water is a big problem in many countries.",
      "uk": "<b>Дефіцит</b> чистої питної води — велика проблема в багатьох країнах.",
      "ru": "<b>Дефицит</b> чистой питьевой воды — большая проблема во многих странах."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_020",
    "cat": "k7",
    "term": {
      "de": "die Achtsamkeit",
      "en": "mindfulness",
      "uk": "усвідомленість",
      "ru": "осознанность"
    },
    "short": {
      "de": "wenn man bewusst und aufmerksam mit etwas umgeht",
      "en": "when you handle something consciously and attentively",
      "uk": "коли ти свідомо й уважно ставишся до чогось",
      "ru": "когда ты сознательно и внимательно относишься к чему-то"
    },
    "def": {
      "de": "Mit mehr <g><b>Achtsamkeit</b></g> im Alltag können wir viel Müll vermeiden.",
      "en": "With more <b>mindfulness</b> in everyday life, we can avoid a lot of waste.",
      "uk": "З більшою <b>усвідомленістю</b> в повсякденному житті ми можемо уникнути багато сміття.",
      "ru": "С большей <b>осознанностью</b> в повседневной жизни мы можем избежать много мусора."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_021",
    "cat": "k7",
    "term": {
      "de": "die Umweltfreundlichkeit",
      "en": "environmental friendliness",
      "uk": "екологічність",
      "ru": "экологичность"
    },
    "short": {
      "de": "wenn ein Produkt oder eine Handlung die Umwelt nicht belastet",
      "en": "when a product or action does not harm the environment",
      "uk": "коли товар чи дія не шкодять довкіллю",
      "ru": "когда товар или действие не вредят окружающей среде"
    },
    "def": {
      "de": "Beim Kauf neuer Produkte achten wir jetzt viel mehr auf <g><b>Umweltfreundlichkeit</b></g>.",
      "en": "When buying new products, we now pay much more attention to <b>environmental friendliness</b>.",
      "uk": "Купуючи нові товари, ми тепер набагато більше звертаємо увагу на <b>екологічність</b>.",
      "ru": "Покупая новые товары, мы теперь намного больше обращаем внимание на <b>экологичность</b>."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_022",
    "cat": "k7",
    "term": {
      "de": "die Häufigkeit",
      "en": "frequency",
      "uk": "частота",
      "ru": "частота"
    },
    "short": {
      "de": "wie oft etwas passiert",
      "en": "how often something happens",
      "uk": "як часто щось відбувається",
      "ru": "как часто что-то происходит"
    },
    "def": {
      "de": "Die <g><b>Häufigkeit</b></g> von Extremwetter hat in den letzten Jahren deutlich zugenommen.",
      "en": "The <b>frequency</b> of extreme weather has increased significantly in recent years.",
      "uk": "<b>Частота</b> екстремальних погодних явищ значно зросла за останні роки.",
      "ru": "<b>Частота</b> экстремальных погодных явлений значительно возросла за последние годы."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_023",
    "cat": "k7",
    "term": {
      "de": "die Wirklichkeit",
      "en": "reality",
      "uk": "дійсність",
      "ru": "действительность"
    },
    "short": {
      "de": "wie die Welt tatsächlich ist, im Gegensatz zu einer Idee oder Vorstellung",
      "en": "how the world actually is, as opposed to an idea or notion",
      "uk": "як світ насправді є, на відміну від ідеї чи уявлення",
      "ru": "как мир на самом деле есть, в отличие от идеи или представления"
    },
    "def": {
      "de": "In der <g><b>Wirklichkeit</b></g> ist Klimaschutz oft schwieriger, als viele Menschen denken.",
      "en": "In <b>reality</b>, climate protection is often more difficult than many people think.",
      "uk": "У <b>дійсності</b> захист клімату часто складніший, ніж думають багато людей.",
      "ru": "В <b>действительности</b> защита климата часто сложнее, чем думают многие люди."
    },
    "gram": "nomen_auf_heit_keit"
  },
  {
    "id": "k7_024",
    "cat": "k7",
    "term": {
      "de": "heizen",
      "en": "to heat",
      "uk": "опалювати",
      "ru": "отапливать"
    },
    "short": {
      "de": "einen Raum warm machen",
      "en": "to make a room warm",
      "uk": "робити приміщення теплим",
      "ru": "делать помещение тёплым"
    },
    "def": {
      "de": "In diesem Haus <g>wird</g> nur mit erneuerbarer Energie <g>geheizt</g>.",
      "en": "This house <g>is</g> <g>heated</g> only with renewable energy.",
      "uk": "У цьому будинку опалюють лише відновлюваною енергією.",
      "ru": "В этом доме отапливают только возобновляемой энергией."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_025",
    "cat": "k7",
    "term": {
      "de": "die Solaranlage",
      "en": "solar panel system",
      "uk": "сонячна установка",
      "ru": "солнечная установка"
    },
    "short": {
      "de": "eine technische Anlage, die Sonnenlicht in Strom umwandelt",
      "en": "a technical system that converts sunlight into electricity",
      "uk": "технічна установка, яка перетворює сонячне світло на електроенергію",
      "ru": "техническая установка, которая преобразует солнечный свет в электроэнергию"
    },
    "def": {
      "de": "Die <b>Solaranlage</b> auf dem Dach <g>wird</g> einmal im Jahr <g>überprüft</g>.",
      "en": "The <b>solar panel system</b> on the roof <g>is</g> <g>checked</g> once a year.",
      "uk": "<b>Сонячну установку</b> на даху перевіряють раз на рік.",
      "ru": "<b>Солнечную установку</b> на крыше проверяют раз в год."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_026",
    "cat": "k7",
    "term": {
      "de": "isolieren",
      "en": "to insulate",
      "uk": "утеплювати",
      "ru": "утеплять"
    },
    "short": {
      "de": "ein Haus so bauen, dass wenig Wärme nach draußen verloren geht",
      "en": "to build a house so that little heat is lost to the outside",
      "uk": "будувати будинок так, щоб мало тепла втрачалося назовні",
      "ru": "строить дом так, чтобы мало тепла терялось наружу"
    },
    "def": {
      "de": "Das ganze Dach <g>wird</g> im Sommer neu <g>isoliert</g>.",
      "en": "The whole roof <g>will be</g> newly <g>insulated</g> in summer.",
      "uk": "Весь дах влітку заново утеплюють.",
      "ru": "Всю крышу летом заново утепляют."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_027",
    "cat": "k7",
    "term": {
      "de": "ausschalten",
      "en": "to switch off",
      "uk": "вимикати",
      "ru": "выключать"
    },
    "short": {
      "de": "ein Gerät ausmachen, damit es keinen Strom mehr verbraucht",
      "en": "to turn off a device so that it no longer uses electricity",
      "uk": "вимикати пристрій, щоб він більше не споживав електроенергію",
      "ru": "выключать прибор, чтобы он больше не потреблял электроэнергию"
    },
    "def": {
      "de": "Am Ende des Arbeitstages <g>wird</g> jeder Computer im Büro <g>ausgeschaltet</g>.",
      "en": "At the end of the workday, every computer in the office <g>is</g> <g>switched off</g>.",
      "uk": "Наприкінці робочого дня в офісі вимикають кожен компʼютер.",
      "ru": "В конце рабочего дня в офисе выключают каждый компьютер."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_028",
    "cat": "k7",
    "term": {
      "de": "erneuerbar",
      "en": "renewable",
      "uk": "відновлюваний",
      "ru": "возобновляемый"
    },
    "short": {
      "de": "eine Energiequelle, die nie zu Ende geht, zum Beispiel Sonne oder Wind",
      "en": "an energy source that never runs out, for example sun or wind",
      "uk": "джерело енергії, яке ніколи не закінчується, наприклад сонце чи вітер",
      "ru": "источник энергии, который никогда не заканчивается, например солнце или ветер"
    },
    "def": {
      "de": "In diesem Dorf <g>wird</g> nur noch <b>erneuerbare</b> Energie <g>genutzt</g>.",
      "en": "In this village, only <b>renewable</b> energy <g>is</g> <g>used</g> now.",
      "uk": "У цьому селі тепер використовують лише <b>відновлювану</b> енергію.",
      "ru": "В этой деревне теперь используют только <b>возобновляемую</b> энергию."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_029",
    "cat": "k7",
    "term": {
      "de": "die Energiequelle",
      "en": "energy source",
      "uk": "джерело енергії",
      "ru": "источник энергии"
    },
    "short": {
      "de": "der Ursprung von Energie, zum Beispiel Kohle, Wind oder Sonne",
      "en": "the origin of energy, for example coal, wind or sun",
      "uk": "джерело енергії, наприклад вугілля, вітер чи сонце",
      "ru": "источник энергии, например уголь, ветер или солнце"
    },
    "def": {
      "de": "Jede <b>Energiequelle</b> <g>wird</g> in dieser Studie genau <g>untersucht</g>.",
      "en": "Every <b>energy source</b> <g>is</g> <g>examined</g> closely in this study.",
      "uk": "Кожне <b>джерело енергії</b> детально досліджують у цьому дослідженні.",
      "ru": "Каждый <b>источник энергии</b> подробно исследуют в этом исследовании."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_030",
    "cat": "k7",
    "term": {
      "de": "verschwenden",
      "en": "to waste",
      "uk": "витрачати даремно",
      "ru": "тратить впустую"
    },
    "short": {
      "de": "etwas unnötig und ohne Grund verbrauchen",
      "en": "to use something unnecessarily and without reason",
      "uk": "витрачати щось непотрібно і без причини",
      "ru": "тратить что-то без необходимости и без причины"
    },
    "def": {
      "de": "In diesem Haushalt <g>wird</g> kaum noch Wasser <g>verschwendet</g>.",
      "en": "In this household, hardly any water <g>is</g> <g>wasted</g> anymore.",
      "uk": "У цьому домогосподарстві майже не витрачають воду даремно.",
      "ru": "В этом домохозяйстве почти не тратят воду впустую."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_031",
    "cat": "k7",
    "term": {
      "de": "überzeugen",
      "en": "to convince",
      "uk": "переконувати",
      "ru": "убеждать"
    },
    "short": {
      "de": "jemanden mit guten Argumenten dazu bringen, etwas zu glauben oder zu tun",
      "en": "to get someone to believe or do something with good arguments",
      "uk": "переконати когось хорошими аргументами повірити чи зробити щось",
      "ru": "убедить кого-то хорошими аргументами поверить или сделать что-то"
    },
    "def": {
      "de": "Der Vortrag <g>hat</g> mich völlig <b>überzeugt</b>.",
      "en": "The presentation <g>has</g> completely <b>convinced</b> me.",
      "uk": "Виступ мене повністю переконав.",
      "ru": "Выступление меня полностью убедило."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_032",
    "cat": "k7",
    "term": {
      "de": "sich engagieren",
      "en": "to get involved, to commit",
      "uk": "займатися (активно)",
      "ru": "заниматься (активно)"
    },
    "short": {
      "de": "sich aktiv und mit Energie für ein Thema einsetzen",
      "en": "to actively and energetically commit to a cause",
      "uk": "активно й енергійно займатися темою",
      "ru": "активно и энергично заниматься темой"
    },
    "def": {
      "de": "Sie <g>hat</g> sich schon seit ihrer Jugend für den Umweltschutz <b>engagiert</b>.",
      "en": "She <g>has</g> <b>been involved</b> in environmental protection since her youth.",
      "uk": "Вона займається захистом довкілля ще з юності.",
      "ru": "Она занимается защитой окружающей среды ещё с юности."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_033",
    "cat": "k7",
    "term": {
      "de": "reduzieren",
      "en": "to reduce",
      "uk": "скорочувати",
      "ru": "сокращать"
    },
    "short": {
      "de": "die Menge von etwas kleiner machen",
      "en": "to make the amount of something smaller",
      "uk": "зменшувати кількість чогось",
      "ru": "уменьшать количество чего-то"
    },
    "def": {
      "de": "Wir <g>haben</g> unseren Plastikverbrauch stark <b>reduziert</b>.",
      "en": "We <g>have</g> significantly <b>reduced</b> our plastic consumption.",
      "uk": "Ми значно скоротили використання пластику.",
      "ru": "Мы значительно сократили использование пластика."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_034",
    "cat": "k7",
    "term": {
      "de": "sich einsetzen (für)",
      "en": "to advocate (for), to stand up (for)",
      "uk": "відстоювати",
      "ru": "отстаивать"
    },
    "short": {
      "de": "sich aktiv für ein Ziel oder eine Idee bemühen",
      "en": "to actively work for a goal or idea",
      "uk": "активно докладати зусиль для мети чи ідеї",
      "ru": "активно прилагать усилия для цели или идеи"
    },
    "def": {
      "de": "Der Verein <g>hat</g> sich lange für saubere Flüsse <b>eingesetzt</b>.",
      "en": "The association <g>has</g> <b>advocated</b> for clean rivers for a long time.",
      "uk": "Організація довго відстоювала чисті річки.",
      "ru": "Организация долго отстаивала чистые реки."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_035",
    "cat": "k7",
    "term": {
      "de": "steigen",
      "en": "to rise, to increase",
      "uk": "зростати",
      "ru": "расти"
    },
    "short": {
      "de": "größer oder höher werden",
      "en": "to become bigger or higher",
      "uk": "ставати більшим чи вищим",
      "ru": "становиться больше или выше"
    },
    "def": {
      "de": "Die Temperatur <g>ist</g> in diesem Sommer stark <b>gestiegen</b>.",
      "en": "The temperature <g>has</g> <b>risen</b> a lot this summer.",
      "uk": "Температура цього літа сильно зросла.",
      "ru": "Температура этим летом сильно выросла."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_036",
    "cat": "k7",
    "term": {
      "de": "sinken",
      "en": "to fall, to decrease",
      "uk": "знижуватися",
      "ru": "снижаться"
    },
    "short": {
      "de": "kleiner oder niedriger werden",
      "en": "to become smaller or lower",
      "uk": "ставати меншим чи нижчим",
      "ru": "становиться меньше или ниже"
    },
    "def": {
      "de": "Der Wasserstand des Flusses <g>ist</g> in diesem Jahr deutlich <b>gesunken</b>.",
      "en": "The water level of the river <g>has</g> <b>fallen</b> significantly this year.",
      "uk": "Рівень води в річці цього року значно знизився.",
      "ru": "Уровень воды в реке в этом году значительно снизился."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_037",
    "cat": "k7",
    "term": {
      "de": "wechseln",
      "en": "to switch, to change",
      "uk": "змінювати, переходити",
      "ru": "менять, переходить"
    },
    "short": {
      "de": "etwas gegen etwas anderes tauschen, zum Beispiel den Stromanbieter",
      "en": "to exchange something for something else, for example the electricity provider",
      "uk": "міняти щось на інше, наприклад постачальника електроенергії",
      "ru": "менять что-то на другое, например поставщика электроэнергии"
    },
    "def": {
      "de": "Wir <g>sind</g> letztes Jahr zu einem grünen Stromanbieter <b>gewechselt</b>.",
      "en": "We <g>have</g> <b>switched</b> to a green electricity provider last year.",
      "uk": "Ми минулого року перейшли на екологічного постачальника електроенергії.",
      "ru": "Мы в прошлом году перешли на экологичного поставщика электроэнергии."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_038",
    "cat": "k7",
    "term": {
      "de": "erkennen",
      "en": "to recognize",
      "uk": "визнавати, розпізнавати",
      "ru": "признавать, распознавать"
    },
    "short": {
      "de": "etwas klar verstehen oder bemerken",
      "en": "to clearly understand or notice something",
      "uk": "чітко розуміти чи помічати щось",
      "ru": "чётко понимать или замечать что-то"
    },
    "def": {
      "de": "Viele Menschen <g>haben</g> die Gefahr des Klimawandels erst spät <b>erkannt</b>.",
      "en": "Many people <g>have</g> only <b>recognized</b> the danger of climate change late.",
      "uk": "Багато людей визнали небезпеку зміни клімату лише пізно.",
      "ru": "Многие люди признали опасность изменения климата лишь поздно."
    },
    "gram": "perfekt_wdh_b1"
  },
  {
    "id": "k7_039",
    "cat": "k7",
    "term": {
      "de": "die Pflanzung",
      "en": "planting",
      "uk": "садіння",
      "ru": "посадка"
    },
    "short": {
      "de": "wenn man Pflanzen oder Bäume in die Erde setzt",
      "en": "when you put plants or trees into the ground",
      "uk": "коли саджають рослини чи дерева в землю",
      "ru": "когда сажают растения или деревья в землю"
    },
    "def": {
      "de": "Die <g><b>Pflanzung</b></g> neuer Bäume findet jedes Jahr im Frühling statt.",
      "en": "The <b>planting</b> of new trees takes place every spring.",
      "uk": "<b>Садіння</b> нових дерев відбувається щовесни.",
      "ru": "<b>Посадка</b> новых деревьев проходит каждую весну."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_040",
    "cat": "k7",
    "term": {
      "de": "die Düngung",
      "en": "fertilizing",
      "uk": "удобрення",
      "ru": "удобрение"
    },
    "short": {
      "de": "wenn man dem Boden zusätzliche Nährstoffe für die Pflanzen gibt",
      "en": "when you give the soil extra nutrients for the plants",
      "uk": "коли додають ґрунту додаткові поживні речовини для рослин",
      "ru": "когда добавляют почве дополнительные питательные вещества для растений"
    },
    "def": {
      "de": "Auf diesem Hof erfolgt die <g><b>Düngung</b></g> der Felder komplett ohne Chemie.",
      "en": "On this farm, the <b>fertilizing</b> of the fields is done completely without chemicals.",
      "uk": "На цій фермі <b>удобрення</b> полів відбувається повністю без хімії.",
      "ru": "На этой ферме <b>удобрение</b> полей происходит полностью без химии."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_041",
    "cat": "k7",
    "term": {
      "de": "die Bewässerung",
      "en": "irrigation",
      "uk": "полив",
      "ru": "полив"
    },
    "short": {
      "de": "wenn man den Pflanzen regelmäßig Wasser gibt",
      "en": "when you regularly give the plants water",
      "uk": "коли рослинам регулярно дають воду",
      "ru": "когда растениям регулярно дают воду"
    },
    "def": {
      "de": "Die <g><b>Bewässerung</b></g> des Gemüsegartens läuft heute automatisch.",
      "en": "The <b>irrigation</b> of the vegetable garden now runs automatically.",
      "uk": "<b>Полив</b> городу тепер відбувається автоматично.",
      "ru": "<b>Полив</b> огорода теперь происходит автоматически."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_042",
    "cat": "k7",
    "term": {
      "de": "die Fütterung",
      "en": "feeding (of animals)",
      "uk": "годування",
      "ru": "кормление"
    },
    "short": {
      "de": "wenn man Tieren regelmäßig Futter gibt",
      "en": "when you regularly give animals food",
      "uk": "коли тваринам регулярно дають корм",
      "ru": "когда животным регулярно дают корм"
    },
    "def": {
      "de": "Die <g><b>Fütterung</b></g> der Kühe findet immer zur gleichen Uhrzeit statt.",
      "en": "The <b>feeding</b> of the cows always takes place at the same time.",
      "uk": "<b>Годування</b> корів завжди відбувається в один і той самий час.",
      "ru": "<b>Кормление</b> коров всегда происходит в одно и то же время."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_043",
    "cat": "k7",
    "term": {
      "de": "die Vermarktung",
      "en": "marketing",
      "uk": "маркетинг",
      "ru": "маркетинг"
    },
    "short": {
      "de": "wenn man Produkte bekannt macht und verkauft",
      "en": "when you make products known and sell them",
      "uk": "коли продукти роблять відомими та продають",
      "ru": "когда продукты делают известными и продают"
    },
    "def": {
      "de": "Die <g><b>Vermarktung</b></g> der eigenen Produkte übernimmt der Hof selbst.",
      "en": "The farm handles the <b>marketing</b> of its own products itself.",
      "uk": "<b>Маркетинг</b> власних продуктів ферма здійснює самостійно.",
      "ru": "<b>Маркетинг</b> собственных продуктов ферма осуществляет самостоятельно."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_044",
    "cat": "k7",
    "term": {
      "de": "die Lieferung",
      "en": "delivery",
      "uk": "доставка",
      "ru": "доставка"
    },
    "short": {
      "de": "wenn eine Ware zu einem Kunden gebracht wird",
      "en": "when goods are brought to a customer",
      "uk": "коли товар доставляють клієнту",
      "ru": "когда товар доставляют клиенту"
    },
    "def": {
      "de": "Die <g><b>Lieferung</b></g> von frischem Gemüse erfolgt zweimal pro Woche.",
      "en": "The <b>delivery</b> of fresh vegetables happens twice a week.",
      "uk": "<b>Доставка</b> свіжих овочів здійснюється двічі на тиждень.",
      "ru": "<b>Доставка</b> свежих овощей осуществляется дважды в неделю."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_045",
    "cat": "k7",
    "term": {
      "de": "die Verpackung",
      "en": "packaging",
      "uk": "упаковка",
      "ru": "упаковка"
    },
    "short": {
      "de": "das Material, in das eine Ware zum Schutz oder Transport eingepackt wird",
      "en": "the material a product is wrapped in for protection or transport",
      "uk": "матеріал, у який упаковують товар для захисту чи транспортування",
      "ru": "материал, в который упаковывают товар для защиты или транспортировки"
    },
    "def": {
      "de": "Die <g><b>Verpackung</b></g> der Eier besteht komplett aus recyceltem Karton.",
      "en": "The <b>packaging</b> of the eggs is made entirely of recycled cardboard.",
      "uk": "<b>Упаковка</b> яєць повністю виготовлена з переробленого картону.",
      "ru": "<b>Упаковка</b> яиц полностью изготовлена из переработанного картона."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_046",
    "cat": "k7",
    "term": {
      "de": "die Züchtung",
      "en": "breeding",
      "uk": "виведення (порід/сортів)",
      "ru": "выведение (пород/сортов)"
    },
    "short": {
      "de": "wenn man Tiere oder Pflanzen gezielt vermehrt, um bestimmte Eigenschaften zu bekommen",
      "en": "when you deliberately breed animals or plants to get certain characteristics",
      "uk": "коли цілеспрямовано розводять тварин чи рослини для отримання певних характеристик",
      "ru": "когда целенаправленно разводят животных или растения для получения определённых характеристик"
    },
    "def": {
      "de": "Die <g><b>Züchtung</b></g> robuster Getreidesorten ist auf diesem Hof besonders wichtig.",
      "en": "The <b>breeding</b> of robust grain varieties is especially important on this farm.",
      "uk": "<b>Виведення</b> стійких сортів зерна на цій фермі особливо важливе.",
      "ru": "<b>Выведение</b> устойчивых сортов зерна на этой ферме особенно важно."
    },
    "gram": "nomen_auf_ung"
  },
  {
    "id": "k7_047",
    "cat": "k7",
    "term": {
      "de": "melken",
      "en": "to milk",
      "uk": "доїти",
      "ru": "доить"
    },
    "short": {
      "de": "die Milch von einer Kuh oder Ziege holen",
      "en": "to get milk from a cow or goat",
      "uk": "здобувати молоко в корови чи кози",
      "ru": "получать молоко у коровы или козы"
    },
    "def": {
      "de": "Die Kühe <g>werden</g> auf diesem Hof zweimal täglich <g>gemolken</g>.",
      "en": "The cows on this farm <g>are</g> <g>milked</g> twice a day.",
      "uk": "Корів на цій фермі доять двічі на день.",
      "ru": "Коров на этой ферме доят дважды в день."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_048",
    "cat": "k7",
    "term": {
      "de": "pflücken",
      "en": "to pick, to harvest by hand",
      "uk": "збирати (руками)",
      "ru": "собирать (руками)"
    },
    "short": {
      "de": "Obst oder Beeren mit der Hand von der Pflanze nehmen",
      "en": "to take fruit or berries from the plant by hand",
      "uk": "збирати фрукти чи ягоди руками з рослини",
      "ru": "собирать фрукты или ягоды руками с растения"
    },
    "def": {
      "de": "Die Äpfel <g>werden</g> im Herbst von den Mitarbeitern von Hand <g>gepflückt</g>.",
      "en": "The apples <g>are</g> <g>picked</g> by hand by the workers in autumn.",
      "uk": "Восени яблука вручну збирають працівники.",
      "ru": "Осенью яблоки вручную собирают работники."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_049",
    "cat": "k7",
    "term": {
      "de": "säen",
      "en": "to sow",
      "uk": "сіяти",
      "ru": "сеять"
    },
    "short": {
      "de": "Samen in die Erde bringen, damit sie wachsen können",
      "en": "to put seeds into the ground so that they can grow",
      "uk": "класти насіння в землю, щоб воно росло",
      "ru": "класть семена в землю, чтобы они росли"
    },
    "def": {
      "de": "Das Getreide <g>wird</g> jedes Jahr im Frühjahr <g>gesät</g>.",
      "en": "The grain <g>is</g> <g>sown</g> every spring.",
      "uk": "Зерно сіють щовесни.",
      "ru": "Зерно сеют каждую весну."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_050",
    "cat": "k7",
    "term": {
      "de": "ernten",
      "en": "to harvest",
      "uk": "збирати врожай",
      "ru": "собирать урожай"
    },
    "short": {
      "de": "reife Früchte, Gemüse oder Getreide von den Pflanzen sammeln",
      "en": "to collect ripe fruit, vegetables or grain from the plants",
      "uk": "збирати стиглі фрукти, овочі чи зерно з рослин",
      "ru": "собирать спелые фрукты, овощи или зерно с растений"
    },
    "def": {
      "de": "Die Kartoffeln <g>werden</g> jetzt im September <g>geerntet</g>.",
      "en": "The potatoes <g>are</g> now <g>harvested</g> in September.",
      "uk": "Картоплю тепер збирають у вересні.",
      "ru": "Картофель теперь собирают в сентябре."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_051",
    "cat": "k7",
    "term": {
      "de": "mähen",
      "en": "to mow",
      "uk": "косити",
      "ru": "косить"
    },
    "short": {
      "de": "Gras oder Getreide mit einer Maschine oder einem Werkzeug abschneiden",
      "en": "to cut grass or grain with a machine or tool",
      "uk": "зрізати траву чи зерно машиною чи інструментом",
      "ru": "срезать траву или зерно машиной или инструментом"
    },
    "def": {
      "de": "Die Wiesen <g>werden</g> auf diesem Hof nur zweimal im Jahr <g>gemäht</g>.",
      "en": "The meadows on this farm <g>are</g> <g>mowed</g> only twice a year.",
      "uk": "Луки на цій фермі косять лише двічі на рік.",
      "ru": "Луга на этой ферме косят только дважды в год."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_052",
    "cat": "k7",
    "term": {
      "de": "kontrollieren",
      "en": "to check, to inspect",
      "uk": "перевіряти",
      "ru": "проверять"
    },
    "short": {
      "de": "genau prüfen, ob alles richtig oder in Ordnung ist",
      "en": "to check carefully whether everything is correct or fine",
      "uk": "уважно перевіряти, чи все правильно чи гаразд",
      "ru": "внимательно проверять, всё ли правильно или в порядке"
    },
    "def": {
      "de": "Die Qualität der Eier <g>wird</g> jeden Tag genau <g>kontrolliert</g>.",
      "en": "The quality of the eggs <g>is</g> checked carefully every day.",
      "uk": "Якість яєць щодня ретельно перевіряють.",
      "ru": "Качество яиц ежедневно тщательно проверяют."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_053",
    "cat": "k7",
    "term": {
      "de": "sortieren",
      "en": "to sort",
      "uk": "сортувати",
      "ru": "сортировать"
    },
    "short": {
      "de": "Dinge nach bestimmten Kriterien in Gruppen ordnen",
      "en": "to arrange things into groups according to certain criteria",
      "uk": "розподіляти речі на групи за певними критеріями",
      "ru": "распределять вещи по группам по определённым критериям"
    },
    "def": {
      "de": "Die Kartoffeln <g>werden</g> nach der Ernte automatisch nach Größe <g>sortiert</g>.",
      "en": "The potatoes <g>are</g> automatically <g>sorted</g> by size after the harvest.",
      "uk": "Картоплю після збору автоматично сортують за розміром.",
      "ru": "Картофель после сбора автоматически сортируют по размеру."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_054",
    "cat": "k7",
    "term": {
      "de": "der Klimawandel",
      "en": "climate change",
      "uk": "зміна клімату",
      "ru": "изменение климата"
    },
    "short": {
      "de": "die langfristige Veränderung des Klimas auf der Erde",
      "en": "the long-term change of the earth's climate",
      "uk": "довготривала зміна клімату на Землі",
      "ru": "долгосрочное изменение климата на Земле"
    },
    "def": {
      "de": "Über den <b>Klimawandel</b> <g>wird</g> heute weltweit intensiv <g>diskutiert</g>.",
      "en": "<b>Climate change</b> <g>is</g> <g>discussed</g> intensively worldwide today.",
      "uk": "Про <b>зміну клімату</b> сьогодні активно дискутують у всьому світі.",
      "ru": "Об <b>изменении климата</b> сегодня активно дискутируют во всём мире."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_055",
    "cat": "k7",
    "term": {
      "de": "die Erderwärmung",
      "en": "global warming",
      "uk": "глобальне потепління",
      "ru": "глобальное потепление"
    },
    "short": {
      "de": "wenn die Durchschnittstemperatur der Erde immer weiter steigt",
      "en": "when the average temperature of the earth keeps rising",
      "uk": "коли середня температура Землі постійно зростає",
      "ru": "когда средняя температура Земли постоянно растёт"
    },
    "def": {
      "de": "Die <b>Erderwärmung</b> <g>wird</g> von den meisten Wissenschaftlern als sehr ernst <g>eingeschätzt</g>.",
      "en": "<b>Global warming</b> <g>is</g> <g>assessed</g> as very serious by most scientists.",
      "uk": "<b>Глобальне потепління</b> вважається дуже серйозним більшістю науковців.",
      "ru": "<b>Глобальное потепление</b> оценивается как очень серьёзное большинством учёных."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_056",
    "cat": "k7",
    "term": {
      "de": "der CO2-Ausstoß",
      "en": "CO2 emissions",
      "uk": "викиди CO2",
      "ru": "выбросы CO2"
    },
    "short": {
      "de": "die Menge an Kohlendioxid, die zum Beispiel ein Auto oder eine Fabrik produziert",
      "en": "the amount of carbon dioxide produced, for example, by a car or factory",
      "uk": "кількість вуглекислого газу, яку виробляє, наприклад, автомобіль чи фабрика",
      "ru": "количество углекислого газа, которое производит, например, автомобиль или фабрика"
    },
    "def": {
      "de": "Der <b>CO2-Ausstoß</b> <g>wird</g> in vielen Ländern jetzt genau <g>gemessen</g>.",
      "en": "<b>CO2 emissions</b> <g>are</g> now <g>measured</g> precisely in many countries.",
      "uk": "<b>Викиди CO2</b> тепер точно вимірюють у багатьох країнах.",
      "ru": "<b>Выбросы CO2</b> теперь точно измеряют во многих странах."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_057",
    "cat": "k7",
    "term": {
      "de": "schützen",
      "en": "to protect",
      "uk": "захищати",
      "ru": "защищать"
    },
    "short": {
      "de": "dafür sorgen, dass jemandem oder etwas nichts Schlechtes passiert",
      "en": "to make sure that nothing bad happens to someone or something",
      "uk": "робити так, щоб з кимось або чимось не сталося нічого поганого",
      "ru": "делать так, чтобы с кем-то или чем-то не случилось ничего плохого"
    },
    "def": {
      "de": "Die Wälder <g>werden</g> in diesem Nationalpark streng <g>geschützt</g>.",
      "en": "The forests in this national park <g>are</g> strictly <g>protected</g>.",
      "uk": "Ліси в цьому національному парку суворо охороняють.",
      "ru": "Леса в этом национальном парке строго охраняют."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_058",
    "cat": "k7",
    "term": {
      "de": "verursachen",
      "en": "to cause",
      "uk": "спричиняти",
      "ru": "вызывать"
    },
    "short": {
      "de": "der Grund dafür sein, dass etwas passiert",
      "en": "to be the reason that something happens",
      "uk": "бути причиною того, що щось відбувається",
      "ru": "быть причиной того, что что-то происходит"
    },
    "def": {
      "de": "Ein großer Teil der Emissionen <g>wird</g> vom Verkehr <g>verursacht</g>.",
      "en": "A large part of the emissions <g>is</g> <g>caused</g> by traffic.",
      "uk": "Велику частину викидів спричиняє транспорт.",
      "ru": "Значительную часть выбросов вызывает транспорт."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_059",
    "cat": "k7",
    "term": {
      "de": "beeinflussen",
      "en": "to influence",
      "uk": "впливати",
      "ru": "влиять"
    },
    "short": {
      "de": "eine Wirkung auf etwas oder jemanden haben und es verändern",
      "en": "to have an effect on something or someone and change it",
      "uk": "мати вплив на щось чи когось і змінювати це",
      "ru": "иметь влияние на что-то или кого-то и изменять это"
    },
    "def": {
      "de": "Das Klima der ganzen Region <g>wird</g> vom Meer stark <g>beeinflusst</g>.",
      "en": "The climate of the whole region <g>is</g> strongly <g>influenced</g> by the sea.",
      "uk": "На клімат усього регіону сильно впливає море.",
      "ru": "На климат всего региона сильно влияет море."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k7_060",
    "cat": "k7",
    "term": {
      "de": "die Auswirkung",
      "en": "effect, impact",
      "uk": "наслідок",
      "ru": "последствие"
    },
    "short": {
      "de": "die Folge, die eine Handlung oder ein Ereignis hat",
      "en": "the consequence that an action or event has",
      "uk": "наслідок, який має дія чи подія",
      "ru": "последствие, которое имеет действие или событие"
    },
    "def": {
      "de": "Die <b>Auswirkungen</b> des Klimawandels <g>werden</g> in dieser Region schon deutlich <g>gespürt</g>.",
      "en": "The <b>effects</b> of climate change <g>are</g> already clearly <g>felt</g> in this region.",
      "uk": "<b>Наслідки</b> зміни клімату вже помітно відчуваються в цьому регіоні.",
      "ru": "<b>Последствия</b> изменения климата уже заметно ощущаются в этом регионе."
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
    "id": "k8_016",
    "cat": "k8",
    "term": {
      "de": "die Einladung",
      "en": "invitation",
      "uk": "запрошення",
      "ru": "приглашение"
    },
    "short": {
      "de": "eine Nachricht, mit der man jemanden zu einem Ereignis bittet",
      "en": "a message that invites someone to an event",
      "uk": "повідомлення, яким когось запрошують на подію",
      "ru": "сообщение, которым кого-то приглашают на мероприятие"
    },
    "def": {
      "de": "Die <b>Einladung</b> zum Festival <g>wird</g> heute per E-Mail <g>verschickt</g>.",
      "en": "The <b>invitation</b> to the festival <g>is</g> <g>sent</g> by email today.",
      "uk": "<b>Запрошення</b> на фестиваль сьогодні надсилають електронною поштою.",
      "ru": "<b>Приглашение</b> на фестиваль сегодня отправляют по электронной почте."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_017",
    "cat": "k8",
    "term": {
      "de": "einladen",
      "en": "to invite",
      "uk": "запрошувати",
      "ru": "приглашать"
    },
    "short": {
      "de": "jemanden bitten, zu einem Ereignis zu kommen",
      "en": "to ask someone to come to an event",
      "uk": "просити когось прийти на подію",
      "ru": "просить кого-то прийти на мероприятие"
    },
    "def": {
      "de": "Sie <g>wird</g> herzlich zur Party <g><b>eingeladen</b></g>.",
      "en": "She <g>is</g> warmly <g><b>invited</b></g> to the party.",
      "uk": "Її щиро <b>запрошують</b> на вечірку.",
      "ru": "Её тепло <b>приглашают</b> на вечеринку."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_018",
    "cat": "k8",
    "term": {
      "de": "stattfinden",
      "en": "to take place",
      "uk": "відбуватися",
      "ru": "проходить, состояться"
    },
    "short": {
      "de": "an einem bestimmten Ort und zu einer bestimmten Zeit passieren",
      "en": "to happen at a certain place and time",
      "uk": "відбуватися у певному місці й у певний час",
      "ru": "происходить в определённом месте и в определённое время"
    },
    "def": {
      "de": "Das Festival <b>findet</b> dieses Jahr wieder im Stadtpark <b>statt</b>.",
      "en": "The festival <b>takes place</b> in the city park again this year.",
      "uk": "Фестиваль цього року знову <b>відбудеться</b> в міському парку.",
      "ru": "Фестиваль в этом году снова <b>пройдёт</b> в городском парке."
    },
    "gram": ""
  },
  {
    "id": "k8_019",
    "cat": "k8",
    "term": {
      "de": "der Termin",
      "en": "appointment, date",
      "uk": "домовлена дата, зустріч",
      "ru": "назначенная дата, встреча"
    },
    "short": {
      "de": "eine bestimmte Zeit, zu der man etwas machen oder wohin man gehen möchte",
      "en": "a certain time when you want to do something or go somewhere",
      "uk": "конкретний час, коли хочеш щось зробити або кудись піти",
      "ru": "конкретное время, когда хочешь что-то сделать или куда-то пойти"
    },
    "def": {
      "de": "Der <b>Termin</b> für die Führung <g>wird</g> online <g>vereinbart</g>.",
      "en": "The <b>appointment</b> for the tour <g>is</g> <g>arranged</g> online.",
      "uk": "<b>Дату</b> екскурсії узгоджують онлайн.",
      "ru": "<b>Дата</b> экскурсии согласовывается онлайн."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_020",
    "cat": "k8",
    "term": {
      "de": "die Anmeldung",
      "en": "registration",
      "uk": "реєстрація",
      "ru": "регистрация"
    },
    "short": {
      "de": "der Vorgang, bei dem man sich offiziell für etwas einträgt",
      "en": "the process of officially signing up for something",
      "uk": "процес, коли людина офіційно записується на щось",
      "ru": "процесс, когда человек официально записывается на что-то"
    },
    "def": {
      "de": "Die <b>Anmeldung</b> für den Kurs <g>wird</g> ab morgen <g>freigeschaltet</g>.",
      "en": "<b>Registration</b> for the course <g>is</g> <g>opened</g> from tomorrow.",
      "uk": "<b>Реєстрацію</b> на курс відкривають із завтрашнього дня.",
      "ru": "<b>Регистрацию</b> на курс открывают с завтрашнего дня."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_021",
    "cat": "k8",
    "term": {
      "de": "sich anmelden",
      "en": "to register",
      "uk": "реєструватися",
      "ru": "регистрироваться"
    },
    "short": {
      "de": "sich offiziell für etwas eintragen, zum Beispiel für einen Kurs",
      "en": "to officially sign up for something, for example a course",
      "uk": "офіційно записуватися на щось, наприклад на курс",
      "ru": "официально записываться на что-то, например на курс"
    },
    "def": {
      "de": "Ich <b>melde</b> mich für die Bibliotheksführung online <b>an</b>.",
      "en": "I <b>register</b> for the library tour online.",
      "uk": "Я <b>реєструюся</b> на екскурсію бібліотекою онлайн.",
      "ru": "Я <b>регистрируюсь</b> на экскурсию по библиотеке онлайн."
    },
    "gram": ""
  },
  {
    "id": "k8_022",
    "cat": "k8",
    "term": {
      "de": "die Erlaubnis",
      "en": "permission",
      "uk": "дозвіл",
      "ru": "разрешение"
    },
    "short": {
      "de": "das offizielle Ja dazu, etwas machen zu dürfen",
      "en": "official approval to be allowed to do something",
      "uk": "офіційна згода на те, щоб щось робити",
      "ru": "официальное согласие на то, чтобы что-то делать"
    },
    "def": {
      "de": "Für das Projekt <g>wird</g> vorher extra eine <b>Erlaubnis</b> <g>eingeholt</g>.",
      "en": "Special <b>permission</b> <g>is</g> <g>obtained</g> for the project beforehand.",
      "uk": "Для цього проєкту заздалегідь окремо отримують <b>дозвіл</b>.",
      "ru": "Для этого проекта заранее отдельно получают <b>разрешение</b>."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_023",
    "cat": "k8",
    "term": {
      "de": "der Veranstaltungsort",
      "en": "venue",
      "uk": "місце проведення",
      "ru": "место проведения"
    },
    "short": {
      "de": "der Ort, an dem eine Veranstaltung stattfindet",
      "en": "the place where an event takes place",
      "uk": "місце, де відбувається захід",
      "ru": "место, где происходит мероприятие"
    },
    "def": {
      "de": "Der <b>Veranstaltungsort</b> <g>wird</g> den Teilnehmern rechtzeitig <g>mitgeteilt</g>.",
      "en": "The <b>venue</b> <g>is</g> <g>communicated</g> to participants in good time.",
      "uk": "<b>Місце проведення</b> заходу вчасно повідомляють учасникам.",
      "ru": "<b>Место проведения</b> мероприятия вовремя сообщают участникам."
    },
    "gram": "passiv_praesens_b1"
  },
  {
    "id": "k8_024",
    "cat": "k8",
    "term": {
      "de": "sich vorbereiten (auf +Akk)",
      "en": "to prepare (for)",
      "uk": "готуватися (до)",
      "ru": "готовиться (к)"
    },
    "short": {
      "de": "sich rechtzeitig auf etwas einstellen, das bald passiert",
      "en": "to get ready in time for something that will happen soon",
      "uk": "заздалегідь готуватися до того, що незабаром станеться",
      "ru": "заранее готовиться к тому, что скоро произойдёт"
    },
    "def": {
      "de": "Wir <b>bereiten</b> uns schon seit Tagen <g>auf</g> das Festival <b>vor</b>.",
      "en": "We have been <b>preparing</b> <g>for</g> the festival for days.",
      "uk": "Ми вже кілька днів <b>готуємося</b> до фестивалю.",
      "ru": "Мы уже несколько дней <b>готовимся</b> к фестивалю."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_025",
    "cat": "k8",
    "term": {
      "de": "sich kümmern (um +Akk)",
      "en": "to take care (of)",
      "uk": "піклуватися (про)",
      "ru": "заботиться (о)"
    },
    "short": {
      "de": "sich verantwortlich um etwas oder jemanden kümmern",
      "en": "to take responsibility for something or someone",
      "uk": "брати на себе відповідальність за щось або когось",
      "ru": "брать на себя ответственность за что-то или кого-то"
    },
    "def": {
      "de": "In unserer Familie <b>kümmert</b> sich meine Schwester <g>um</g> die Anmeldung fürs Festival.",
      "en": "In our family, my sister takes <b>care</b> <g>of</g> the festival registration.",
      "uk": "У нашій родині моя сестра <b>піклується</b> про реєстрацію на фестиваль.",
      "ru": "В нашей семье моя сестра <b>заботится</b> о регистрации на фестиваль."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_026",
    "cat": "k8",
    "term": {
      "de": "sich erinnern (an +Akk)",
      "en": "to remember",
      "uk": "памʼятати, згадувати",
      "ru": "помнить, вспоминать"
    },
    "short": {
      "de": "sich an etwas aus der Vergangenheit zurückdenken",
      "en": "to think back to something from the past",
      "uk": "згадувати щось із минулого",
      "ru": "вспоминать что-то из прошлого"
    },
    "def": {
      "de": "Ich <b>erinnere</b> mich noch gut <g>an</g> das letzte Festival.",
      "en": "I still <b>remember</b> the last festival well.",
      "uk": "Я ще добре <b>памʼятаю</b> минулий фестиваль.",
      "ru": "Я ещё хорошо <b>помню</b> прошлый фестиваль."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_027",
    "cat": "k8",
    "term": {
      "de": "denken (an +Akk)",
      "en": "to think (of)",
      "uk": "думати (про)",
      "ru": "думать (о)"
    },
    "short": {
      "de": "an jemanden oder etwas denken, es im Kopf haben",
      "en": "to have someone or something in your mind",
      "uk": "тримати когось або щось у думках",
      "ru": "держать кого-то или что-то в мыслях"
    },
    "def": {
      "de": "Bei diesem Lied <b>denke</b> ich sofort <g>an</g> das Festival letztes Jahr.",
      "en": "When I hear this song, I immediately <b>think</b> <g>of</g> last year's festival.",
      "uk": "Почувши цю пісню, я одразу <b>думаю</b> про минулорічний фестиваль.",
      "ru": "Услышав эту песню, я сразу <b>думаю</b> о прошлогоднем фестивале."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_028",
    "cat": "k8",
    "term": {
      "de": "warten (auf +Akk)",
      "en": "to wait (for)",
      "uk": "чекати (на)",
      "ru": "ждать"
    },
    "short": {
      "de": "geduldig bleiben, bis etwas passiert oder jemand kommt",
      "en": "to stay patient until something happens or someone arrives",
      "uk": "терпляче чекати, поки щось станеться або хтось прийде",
      "ru": "терпеливо ждать, пока что-то произойдёт или кто-то придёт"
    },
    "def": {
      "de": "Alle <b>warten</b> schon gespannt <g>auf</g> den Beginn des Festivals.",
      "en": "Everyone is already eagerly <b>waiting</b> <g>for</g> the start of the festival.",
      "uk": "Усі вже з нетерпінням <b>чекають</b> на початок фестивалю.",
      "ru": "Все уже с нетерпением <b>ждут</b> начала фестиваля."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_029",
    "cat": "k8",
    "term": {
      "de": "sich verlassen (auf +Akk)",
      "en": "to rely (on)",
      "uk": "покладатися (на)",
      "ru": "полагаться (на)"
    },
    "short": {
      "de": "sicher sein, dass man sich auf jemanden oder etwas stützen kann",
      "en": "to be sure that you can depend on someone or something",
      "uk": "бути впевненим, що можеш розраховувати на когось або щось",
      "ru": "быть уверенным, что можешь рассчитывать на кого-то или что-то"
    },
    "def": {
      "de": "Bei der Organisation <b>verlassen</b> wir uns ganz <g>auf</g> unsere Nachbarn.",
      "en": "For the organisation, we completely <b>rely</b> <g>on</g> our neighbours.",
      "uk": "В організації ми повністю <b>покладаємося</b> на своїх сусідів.",
      "ru": "В организации мы полностью <b>полагаемся</b> на наших соседей."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_030",
    "cat": "k8",
    "term": {
      "de": "sich beschäftigen (mit +Dat)",
      "en": "to occupy oneself (with), to deal (with)",
      "uk": "займатися (чимось)",
      "ru": "заниматься (чем-то)"
    },
    "short": {
      "de": "sich mit einem Thema oder einer Aufgabe intensiv befassen",
      "en": "to work intensively on a topic or task",
      "uk": "інтенсивно займатися темою чи завданням",
      "ru": "интенсивно заниматься темой или задачей"
    },
    "def": {
      "de": "Seit Wochen <b>beschäftigt</b> sie sich intensiv <g>mit</g> der Planung des Festivals.",
      "en": "For weeks, she has been intensively <b>occupied</b> <g>with</g> planning the festival.",
      "uk": "Уже кілька тижнів вона інтенсивно <b>займається</b> плануванням фестивалю.",
      "ru": "Уже несколько недель она интенсивно <b>занимается</b> планированием фестиваля."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_031",
    "cat": "k8",
    "term": {
      "de": "sich gewöhnen (an +Akk)",
      "en": "to get used (to)",
      "uk": "звикати (до)",
      "ru": "привыкать (к)"
    },
    "short": {
      "de": "etwas Neues normal finden, nachdem man es oft erlebt hat",
      "en": "to start finding something new normal after experiencing it often",
      "uk": "починати вважати щось нове звичним після частого досвіду",
      "ru": "начинать считать что-то новое обычным после частого опыта"
    },
    "def": {
      "de": "Man <b>gewöhnt</b> sich schnell <g>an</g> die tolle Atmosphäre auf dem Festival.",
      "en": "You quickly <b>get used</b> <g>to</g> the great atmosphere at the festival.",
      "uk": "До чудової атмосфери на фестивалі швидко <b>звикаєш</b>.",
      "ru": "К отличной атмосфере на фестивале быстро <b>привыкаешь</b>."
    },
    "gram": "verben_mit_praep_wdh_b1"
  },
  {
    "id": "k8_032",
    "cat": "k8",
    "term": {
      "de": "die Erfahrung",
      "en": "experience",
      "uk": "досвід",
      "ru": "опыт"
    },
    "short": {
      "de": "das Wissen oder die Fähigkeit, die man durch etwas Erlebtes bekommt",
      "en": "the knowledge or skill you gain from something you have experienced",
      "uk": "знання чи вміння, які отримуєш завдяки пережитому",
      "ru": "знания или умения, которые получаешь благодаря пережитому"
    },
    "def": {
      "de": "<g>Womit</g> hast du bei der Organisation die meiste <b>Erfahrung</b>?",
      "en": "What do you have the most <b>experience</b> with when it comes to organising?",
      "uk": "У чому в тебе найбільше <b>досвіду</b> в організації?",
      "ru": "В чём у тебя больше всего <b>опыта</b> в организации?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_033",
    "cat": "k8",
    "term": {
      "de": "der Eindruck",
      "en": "impression",
      "uk": "враження",
      "ru": "впечатление"
    },
    "short": {
      "de": "das persönliche Gefühl oder Bild, das man von etwas bekommt",
      "en": "the personal feeling or picture you get from something",
      "uk": "особисте відчуття чи уявлення, яке складається про щось",
      "ru": "личное ощущение или представление, которое складывается о чём-то"
    },
    "def": {
      "de": "<g>Wovon</g> hattest du beim Festival den stärksten <b>Eindruck</b>?",
      "en": "What gave you the strongest <b>impression</b> at the festival?",
      "uk": "Від чого в тебе на фестивалі склалося найсильніше <b>враження</b>?",
      "ru": "От чего у тебя на фестивале сложилось самое сильное <b>впечатление</b>?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_034",
    "cat": "k8",
    "term": {
      "de": "stolz (auf +Akk)",
      "en": "proud (of)",
      "uk": "гордий (чимось)",
      "ru": "гордый (чем-то)"
    },
    "short": {
      "de": "zufrieden und glücklich wegen einer eigenen Leistung",
      "en": "satisfied and happy because of your own achievement",
      "uk": "задоволений і щасливий через власне досягнення",
      "ru": "довольный и счастливый из-за собственного достижения"
    },
    "def": {
      "de": "<g>Worauf</g> bist du bei diesem Projekt am meisten <b>stolz</b>?",
      "en": "What are you most <b>proud</b> of in this project?",
      "uk": "Чим ти найбільше <b>пишаєшся</b> в цьому проєкті?",
      "ru": "Чем ты больше всего <b>гордишься</b> в этом проекте?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_035",
    "cat": "k8",
    "term": {
      "de": "sich beschweren (über +Akk)",
      "en": "to complain (about)",
      "uk": "скаржитися (на)",
      "ru": "жаловаться (на)"
    },
    "short": {
      "de": "seine Unzufriedenheit über etwas offiziell äußern",
      "en": "to officially express your dissatisfaction about something",
      "uk": "офіційно висловлювати незадоволення чимось",
      "ru": "официально выражать недовольство чем-то"
    },
    "def": {
      "de": "<g>Worüber</g> haben sich die Besucher nach dem Festival am meisten <b>beschwert</b>?",
      "en": "What did visitors <b>complain</b> about most after the festival?",
      "uk": "На що найбільше <b>скаржилися</b> відвідувачі після фестивалю?",
      "ru": "На что больше всего <b>жаловались</b> посетители после фестиваля?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_036",
    "cat": "k8",
    "term": {
      "de": "neugierig (auf +Akk)",
      "en": "curious (about)",
      "uk": "зацікавлений, допитливий",
      "ru": "любопытный, заинтересованный"
    },
    "short": {
      "de": "mit großem Interesse etwas Neues erfahren wollen",
      "en": "wanting to find out something new with great interest",
      "uk": "з великим інтересом хотіти дізнатися щось нове",
      "ru": "с большим интересом хотеть узнать что-то новое"
    },
    "def": {
      "de": "<g>Worauf</g> bist du beim nächsten Festival am meisten <b>neugierig</b>?",
      "en": "What are you most <b>curious</b> about for the next festival?",
      "uk": "Чим ти найбільше <b>зацікавлений</b> перед наступним фестивалем?",
      "ru": "Чем ты больше всего <b>заинтересован</b> перед следующим фестивалем?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_037",
    "cat": "k8",
    "term": {
      "de": "die Atmosphäre",
      "en": "atmosphere",
      "uk": "атмосфера",
      "ru": "атмосфера"
    },
    "short": {
      "de": "die besondere Stimmung an einem Ort oder bei einem Ereignis",
      "en": "the special mood at a place or event",
      "uk": "особлива атмосфера в певному місці чи на події",
      "ru": "особая атмосфера в определённом месте или на мероприятии"
    },
    "def": {
      "de": "<g>Wovon</g> war die besondere <b>Atmosphäre</b> auf dem Festival geprägt?",
      "en": "What shaped the special <b>atmosphere</b> at the festival?",
      "uk": "Чим була сформована особлива <b>атмосфера</b> на фестивалі?",
      "ru": "Чем была сформирована особая <b>атмосфера</b> на фестивале?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_038",
    "cat": "k8",
    "term": {
      "de": "enttäuscht (von +Dat)",
      "en": "disappointed (by)",
      "uk": "розчарований (чимось)",
      "ru": "разочарованный (чем-то)"
    },
    "short": {
      "de": "traurig oder unzufrieden, weil etwas nicht so gut war wie erwartet",
      "en": "sad or unhappy because something was not as good as expected",
      "uk": "сумний або незадоволений через те, що щось було гіршим, ніж очікувалося",
      "ru": "грустный или недовольный из-за того, что что-то было хуже, чем ожидалось"
    },
    "def": {
      "de": "<g>Wovon</g> warst du beim Festival am meisten <b>enttäuscht</b>?",
      "en": "What were you most <b>disappointed</b> by at the festival?",
      "uk": "Чим ти був найбільше <b>розчарований</b> на фестивалі?",
      "ru": "Чем ты был больше всего <b>разочарован</b> на фестивале?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_039",
    "cat": "k8",
    "term": {
      "de": "die Stimmung",
      "en": "mood, atmosphere",
      "uk": "настрій, атмосфера",
      "ru": "настроение, атмосфера"
    },
    "short": {
      "de": "das allgemeine Gefühl oder die Laune in einer Gruppe von Menschen",
      "en": "the general feeling or mood among a group of people",
      "uk": "загальне відчуття чи настрій у групі людей",
      "ru": "общее ощущение или настроение в группе людей"
    },
    "def": {
      "de": "<g>Wovon</g> hing die gute <b>Stimmung</b> beim Festival hauptsächlich ab?",
      "en": "What did the great <b>mood</b> at the festival mainly depend on?",
      "uk": "Від чого головним чином залежав хороший <b>настрій</b> на фестивалі?",
      "ru": "От чего в основном зависело хорошее <b>настроение</b> на фестивале?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_040",
    "cat": "k8",
    "term": {
      "de": "die Nachricht",
      "en": "message",
      "uk": "повідомлення",
      "ru": "сообщение"
    },
    "short": {
      "de": "eine kurze Information, die man jemandem schickt",
      "en": "a short piece of information sent to someone",
      "uk": "коротка інформація, яку надсилають комусь",
      "ru": "короткая информация, которую отправляют кому-то"
    },
    "def": {
      "de": "<g>Worüber</g> informierte die <b>Nachricht</b> von der Bibliothek genau?",
      "en": "What exactly did the <b>message</b> from the library inform you about?",
      "uk": "Про що саме інформувало <b>повідомлення</b> від бібліотеки?",
      "ru": "О чём именно информировало <b>сообщение</b> от библиотеки?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_041",
    "cat": "k8",
    "term": {
      "de": "die Frist",
      "en": "deadline",
      "uk": "строк, дедлайн",
      "ru": "срок, дедлайн"
    },
    "short": {
      "de": "der letzte Zeitpunkt, bis zu dem man etwas machen muss",
      "en": "the last point in time by which you must do something",
      "uk": "останній момент, до якого треба щось зробити",
      "ru": "последний момент, до которого нужно что-то сделать"
    },
    "def": {
      "de": "Bis wann läuft die <b>Frist</b> für die Rückgabe der Bücher?",
      "en": "Until when does the <b>deadline</b> for returning the books run?",
      "uk": "До якого числа діє <b>строк</b> для повернення книжок?",
      "ru": "До какого числа действует <b>срок</b> для возврата книг?"
    },
    "gram": ""
  },
  {
    "id": "k8_042",
    "cat": "k8",
    "term": {
      "de": "verlängern",
      "en": "to extend, to renew",
      "uk": "продовжувати",
      "ru": "продлевать"
    },
    "short": {
      "de": "die Zeit für etwas länger machen, zum Beispiel eine Leihfrist",
      "en": "to make the time for something longer, for example a loan period",
      "uk": "робити час для чогось довшим, наприклад термін позики",
      "ru": "делать время для чего-то дольше, например срок займа"
    },
    "def": {
      "de": "Ich möchte die Leihfrist für dieses Buch online <b>verlängern</b>.",
      "en": "I would like to <b>extend</b> the loan period for this book online.",
      "uk": "Я хочу <b>продовжити</b> термін позики цієї книжки онлайн.",
      "ru": "Я хочу <b>продлить</b> срок займа этой книги онлайн."
    },
    "gram": ""
  },
  {
    "id": "k8_043",
    "cat": "k8",
    "term": {
      "de": "die Gebühr",
      "en": "fee",
      "uk": "плата, збір",
      "ru": "плата, сбор"
    },
    "short": {
      "de": "das Geld, das man für eine bestimmte Leistung bezahlen muss",
      "en": "the money you must pay for a certain service",
      "uk": "гроші, які треба заплатити за певну послугу",
      "ru": "деньги, которые нужно заплатить за определённую услугу"
    },
    "def": {
      "de": "<g>Wofür</g> genau wird bei der Bibliothek eine <b>Gebühr</b> verlangt?",
      "en": "What exactly does the library charge a <b>fee</b> for?",
      "uk": "За що саме бібліотека стягує <b>плату</b>?",
      "ru": "За что именно библиотека взимает <b>плату</b>?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_044",
    "cat": "k8",
    "term": {
      "de": "zurückgeben",
      "en": "to return, to give back",
      "uk": "повертати",
      "ru": "возвращать"
    },
    "short": {
      "de": "etwas, das man ausgeliehen hat, wieder an den Besitzer bringen",
      "en": "to bring something you borrowed back to its owner",
      "uk": "приносити назад власнику те, що позичив",
      "ru": "приносить обратно владельцу то, что одолжил"
    },
    "def": {
      "de": "Ich muss die Bücher bis Freitag in der Bibliothek <b>zurückgeben</b>.",
      "en": "I have to <b>return</b> the books to the library by Friday.",
      "uk": "Я маю <b>повернути</b> книжки до бібліотеки до пʼятниці.",
      "ru": "Я должен <b>вернуть</b> книги в библиотеку до пятницы."
    },
    "gram": ""
  },
  {
    "id": "k8_045",
    "cat": "k8",
    "term": {
      "de": "der Ausweis",
      "en": "card, ID",
      "uk": "квиток, посвідчення",
      "ru": "билет, удостоверение"
    },
    "short": {
      "de": "eine Karte, mit der man zeigt, dass man Mitglied oder berechtigt ist",
      "en": "a card that shows you are a member or entitled to something",
      "uk": "картка, яка підтверджує, що ти є членом або маєш право на щось",
      "ru": "карта, подтверждающая, что ты являешься членом или имеешь право на что-то"
    },
    "def": {
      "de": "Ohne Bibliotheks<b>ausweis</b> kann ich leider keine Bücher ausleihen.",
      "en": "Without a library <b>card</b>, I unfortunately cannot borrow any books.",
      "uk": "Без бібліотечного <b>квитка</b> я, на жаль, не можу позичати книжки.",
      "ru": "Без библиотечного <b>билета</b> я, к сожалению, не могу брать книги."
    },
    "gram": ""
  },
  {
    "id": "k8_046",
    "cat": "k8",
    "term": {
      "de": "reservieren",
      "en": "to reserve",
      "uk": "резервувати",
      "ru": "резервировать"
    },
    "short": {
      "de": "im Voraus dafür sorgen, dass etwas für einen bereitgehalten wird",
      "en": "to arrange in advance for something to be kept for you",
      "uk": "заздалегідь домовлятися, щоб щось залишили для тебе",
      "ru": "заранее договариваться, чтобы что-то оставили для тебя"
    },
    "def": {
      "de": "Man kann die Bücher jetzt auch bequem online <b>reservieren</b>.",
      "en": "You can now also conveniently <b>reserve</b> the books online.",
      "uk": "Тепер книжки можна також зручно <b>резервувати</b> онлайн.",
      "ru": "Теперь книги можно также удобно <b>резервировать</b> онлайн."
    },
    "gram": ""
  },
  {
    "id": "k8_047",
    "cat": "k8",
    "term": {
      "de": "das Mitglied",
      "en": "member",
      "uk": "член",
      "ru": "член"
    },
    "short": {
      "de": "eine Person, die offiziell zu einer Gruppe oder Organisation gehört",
      "en": "a person who officially belongs to a group or organisation",
      "uk": "особа, яка офіційно належить до групи чи організації",
      "ru": "лицо, официально принадлежащее к группе или организации"
    },
    "def": {
      "de": "<g>Wovon</g> profitieren <b>Mitglieder</b> der Bibliothek besonders?",
      "en": "What do library <b>members</b> particularly benefit from?",
      "uk": "Від чого особливо виграють <b>члени</b> бібліотеки?",
      "ru": "От чего особенно выигрывают <b>члены</b> библиотеки?"
    },
    "gram": "fragewoerter_wor_dar"
  },
  {
    "id": "k8_048",
    "cat": "k8",
    "term": {
      "de": "die Öffnungszeiten",
      "en": "opening hours",
      "uk": "години роботи",
      "ru": "часы работы"
    },
    "short": {
      "de": "die Zeiten, zu denen ein Ort, zum Beispiel eine Bibliothek, geöffnet ist",
      "en": "the times when a place, for example a library, is open",
      "uk": "час, коли якесь місце, наприклад бібліотека, відкрите",
      "ru": "время, когда какое-то место, например библиотека, открыто"
    },
    "def": {
      "de": "Wie sind die <b>Öffnungszeiten</b> <g>denn</g> am Wochenende?",
      "en": "So, what <g>actually</g> are the <b>opening hours</b> at the weekend?",
      "uk": "А які <g>взагалі</g> <b>години роботи</b> у вихідні?",
      "ru": "А какие <g>вообще</g> <b>часы работы</b> в выходные?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_049",
    "cat": "k8",
    "term": {
      "de": "der Lesesaal",
      "en": "reading room",
      "uk": "читальний зал",
      "ru": "читальный зал"
    },
    "short": {
      "de": "ein ruhiger Raum in der Bibliothek zum Lesen und Lernen",
      "en": "a quiet room in the library for reading and studying",
      "uk": "тиха кімната в бібліотеці для читання й навчання",
      "ru": "тихая комната в библиотеке для чтения и учёбы"
    },
    "def": {
      "de": "Wo ist der <b>Lesesaal</b> <g>eigentlich</g> genau?",
      "en": "So, where <g>actually</g> is the <b>reading room</b>?",
      "uk": "А де <g>взагалі</g> знаходиться <b>читальний зал</b>?",
      "ru": "А где <g>вообще</g> находится <b>читальный зал</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_050",
    "cat": "k8",
    "term": {
      "de": "ausleihen",
      "en": "to borrow",
      "uk": "позичати",
      "ru": "брать (на время)"
    },
    "short": {
      "de": "sich etwas, zum Beispiel ein Buch, für eine bestimmte Zeit geben lassen",
      "en": "to get something, for example a book, given to you for a certain time",
      "uk": "отримувати щось, наприклад книжку, на певний час",
      "ru": "получать что-то, например книгу, на определённое время"
    },
    "def": {
      "de": "Wie viele Bücher darf ich <g>denn</g> gleichzeitig <b>ausleihen</b>?",
      "en": "So, how many books am I <g>actually</g> allowed to <b>borrow</b> at the same time?",
      "uk": "А скільки книжок <g>взагалі</g> можна <b>позичити</b> одночасно?",
      "ru": "А сколько книг <g>вообще</g> можно <b>взять</b> одновременно?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_051",
    "cat": "k8",
    "term": {
      "de": "die Ruhe",
      "en": "quiet, silence",
      "uk": "тиша",
      "ru": "тишина"
    },
    "short": {
      "de": "der Zustand, wenn es still ist und niemand stört",
      "en": "the state of being quiet, when nobody disturbs you",
      "uk": "стан тиші, коли ніхто не заважає",
      "ru": "состояние тишины, когда никто не мешает"
    },
    "def": {
      "de": "Warum ist hier <g>eigentlich</g> so viel <b>Ruhe</b> nötig?",
      "en": "So, why is so much <b>quiet</b> <g>actually</g> necessary here?",
      "uk": "А чому тут <g>взагалі</g> потрібна така <b>тиша</b>?",
      "ru": "А почему тут <g>вообще</g> нужна такая <b>тишина</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_052",
    "cat": "k8",
    "term": {
      "de": "der Bereich",
      "en": "area, section",
      "uk": "частина, зона",
      "ru": "часть, зона"
    },
    "short": {
      "de": "ein bestimmter Teil eines größeren Ortes oder Themas",
      "en": "a certain part of a larger place or topic",
      "uk": "певна частина більшого місця чи теми",
      "ru": "определённая часть большего места или темы"
    },
    "def": {
      "de": "Welcher <b>Bereich</b> ist <g>denn</g> speziell für Kinder gedacht?",
      "en": "So, which <b>section</b> is <g>actually</g> meant especially for children?",
      "uk": "А яка <g>взагалі</g> <b>частина</b> призначена спеціально для дітей?",
      "ru": "А какая <g>вообще</g> <b>часть</b> предназначена специально для детей?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_053",
    "cat": "k8",
    "term": {
      "de": "die Sammlung",
      "en": "collection",
      "uk": "колекція",
      "ru": "коллекция"
    },
    "short": {
      "de": "eine große Anzahl von gesammelten Dingen, zum Beispiel Büchern",
      "en": "a large number of collected things, for example books",
      "uk": "велика кількість зібраних речей, наприклад книжок",
      "ru": "большое количество собранных вещей, например книг"
    },
    "def": {
      "de": "Wie groß ist die <b>Sammlung</b> <g>eigentlich</g> insgesamt?",
      "en": "So how big is the whole <b>collection</b> <g>actually</g>?",
      "uk": "А яка <g>взагалі</g> велика ця <b>колекція</b>?",
      "ru": "А насколько <g>вообще</g> большая эта <b>коллекция</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_054",
    "cat": "k8",
    "term": {
      "de": "der Katalog",
      "en": "catalogue",
      "uk": "каталог",
      "ru": "каталог"
    },
    "short": {
      "de": "eine Liste oder ein System, mit dem man Bücher in der Bibliothek findet",
      "en": "a list or system used to find books in the library",
      "uk": "список чи система, за допомогою якої знаходять книжки в бібліотеці",
      "ru": "список или система, с помощью которой находят книги в библиотеке"
    },
    "def": {
      "de": "Wie funktioniert der <b>Katalog</b> <g>denn</g> genau?",
      "en": "So, how does the <b>catalogue</b> <g>actually</g> work, exactly?",
      "uk": "А як <g>взагалі</g> працює цей <b>каталог</b>?",
      "ru": "А как <g>вообще</g> работает этот <b>каталог</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_055",
    "cat": "k8",
    "term": {
      "de": "der Mitarbeiter",
      "en": "staff member",
      "uk": "співробітник",
      "ru": "сотрудник"
    },
    "short": {
      "de": "eine Person, die an einem Ort, zum Beispiel einer Bibliothek, arbeitet",
      "en": "a person who works at a place, for example a library",
      "uk": "особа, яка працює в певному місці, наприклад у бібліотеці",
      "ru": "лицо, работающее в определённом месте, например в библиотеке"
    },
    "def": {
      "de": "Kann mir hier <g>eigentlich</g> ein <b>Mitarbeiter</b> weiterhelfen?",
      "en": "So, can a <b>staff member</b> here <g>actually</g> help me?",
      "uk": "А чи може мені тут <g>взагалі</g> допомогти якийсь <b>співробітник</b>?",
      "ru": "А может ли мне тут <g>вообще</g> помочь какой-нибудь <b>сотрудник</b>?"
    },
    "gram": "interesse_denn_eigentlich"
  },
  {
    "id": "k8_056",
    "cat": "k8",
    "term": {
      "de": "der Künstler",
      "en": "artist",
      "uk": "митець",
      "ru": "художник"
    },
    "short": {
      "de": "eine Person, die Kunst macht, zum Beispiel Bilder oder Musik",
      "en": "a person who creates art, for example pictures or music",
      "uk": "особа, яка створює мистецтво, наприклад картини чи музику",
      "ru": "лицо, создающее искусство, например картины или музыку"
    },
    "def": {
      "de": "Viele finden das Talent dieses <b>Künstlers</b> einfach <g>unglaublich</g>.",
      "en": "Many people simply find this artist's talent incredible.",
      "uk": "Багато хто вважає талант цього <b>митця</b> просто неймовірним.",
      "ru": "Многие считают талант этого <b>художника</b> просто невероятным."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_057",
    "cat": "k8",
    "term": {
      "de": "das Kunstwerk",
      "en": "artwork",
      "uk": "витвір мистецтва",
      "ru": "произведение искусства"
    },
    "short": {
      "de": "ein Bild, eine Skulptur oder ein anderes Werk der Kunst",
      "en": "a picture, sculpture or other piece of art",
      "uk": "картина, скульптура чи інший твір мистецтва",
      "ru": "картина, скульптура или другое произведение искусства"
    },
    "def": {
      "de": "Das <b>Kunstwerk</b> wirkt <g>unvollendet</g>, aber genau das macht es interessant.",
      "en": "The artwork looks unfinished, but that is exactly what makes it interesting.",
      "uk": "<b>Витвір мистецтва</b> здається незавершеним, і саме це робить його цікавим.",
      "ru": "<b>Произведение искусства</b> кажется незавершённым, и именно это делает его интересным."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_058",
    "cat": "k8",
    "term": {
      "de": "sprühen",
      "en": "to spray",
      "uk": "розпилювати (фарбу)",
      "ru": "распылять (краску)"
    },
    "short": {
      "de": "mit einer Sprühdose Farbe auf eine Fläche auftragen",
      "en": "to apply paint to a surface using a spray can",
      "uk": "наносити фарбу на поверхню за допомогою балончика",
      "ru": "наносить краску на поверхность с помощью баллончика"
    },
    "def": {
      "de": "Einige Sprayer <b>sprühen</b> ihre Bilder auch an <g>unerlaubten</g> Orten.",
      "en": "Some sprayers also spray their pictures in unauthorised places.",
      "uk": "Деякі спреєри <b>розпилюють</b> фарбу і в недозволених місцях.",
      "ru": "Некоторые райтеры <b>распыляют</b> краску и в неразрешённых местах."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_059",
    "cat": "k8",
    "term": {
      "de": "die Mauer",
      "en": "wall",
      "uk": "стіна",
      "ru": "стена"
    },
    "short": {
      "de": "eine feste, hohe Wand, zum Beispiel aus Stein oder Beton",
      "en": "a solid, high wall, for example made of stone or concrete",
      "uk": "міцна висока стіна, наприклад із каменю чи бетону",
      "ru": "прочная высокая стена, например из камня или бетона"
    },
    "def": {
      "de": "An dieser <g>ungeschützten</g> <b>Mauer</b> entstehen immer wieder neue Graffiti.",
      "en": "New graffiti keeps appearing on this unprotected wall.",
      "uk": "На цій незахищеній <b>стіні</b> постійно зʼявляються нові графіті.",
      "ru": "На этой незащищённой <b>стене</b> постоянно появляются новые граффити."
    },
    "gram": "adjektive_mit_un"
  },
  {
    "id": "k8_060",
    "cat": "k8",
    "term": {
      "de": "der Sprayer",
      "en": "graffiti sprayer",
      "uk": "спреєр",
      "ru": "райтер"
    },
    "short": {
      "de": "eine Person, die mit Sprühfarbe Bilder oder Schriften an Wände malt",
      "en": "a person who paints pictures or writing on walls with spray paint",
      "uk": "особа, яка малює балончиком картини чи написи на стінах",
      "ru": "лицо, рисующее баллончиком картины или надписи на стенах"
    },
    "def": {
      "de": "Manche <b>Sprayer</b> arbeiten sehr <g>unauffällig</g>, damit sie niemand bemerkt.",
      "en": "Some sprayers work very inconspicuously so that nobody notices them.",
      "uk": "Деякі <b>спреєри</b> працюють дуже непомітно, щоб їх ніхто не побачив.",
      "ru": "Некоторые райтеры работают очень незаметно, чтобы их никто не заметил."
    },
    "gram": "adjektive_mit_un"
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
    "id": "k9_017",
    "cat": "k9",
    "term": {
      "de": "die Karriere",
      "en": "career",
      "uk": "карʼєра",
      "ru": "карьера"
    },
    "short": {
      "de": "der berufliche Werdegang und die Erfolge, die man im Laufe der Zeit erreicht",
      "en": "your professional path and the achievements you reach over time",
      "uk": "професійний шлях і успіхи, яких людина досягає з часом",
      "ru": "профессиональный путь и успехи, которых человек достигает со временем"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> eine internationale <b>Karriere</b>.",
      "en": "<g>I would like</g> to have an international <b>career</b>.",
      "uk": "<g>Я хотів би</g> мати міжнародну <b>карʼєру</b>.",
      "ru": "<g>Я хотел бы</g> иметь международную <b>карьеру</b>."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_018",
    "cat": "k9",
    "term": {
      "de": "der Aufstieg",
      "en": "promotion, advancement",
      "uk": "підвищення, карʼєрне зростання",
      "ru": "повышение, карьерный рост"
    },
    "short": {
      "de": "die berufliche Entwicklung zu einer höheren Position",
      "en": "professional development to a higher position",
      "uk": "професійний розвиток до вищої посади",
      "ru": "профессиональное развитие до более высокой должности"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> die Chance auf einen <b>Aufstieg</b> in dieser Firma.",
      "en": "<g>I would like</g> the chance of a <b>promotion</b> in this company.",
      "uk": "<g>Я хотів би</g> мати шанс на <b>підвищення</b> в цій фірмі.",
      "ru": "<g>Я хотел бы</g> иметь шанс на <b>повышение</b> в этой фирме."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_019",
    "cat": "k9",
    "term": {
      "de": "das Gehalt",
      "en": "salary",
      "uk": "зарплата",
      "ru": "зарплата"
    },
    "short": {
      "de": "das Geld, das man monatlich für seine Arbeit bekommt",
      "en": "the money you receive monthly for your work",
      "uk": "гроші, які людина отримує щомісяця за свою роботу",
      "ru": "деньги, которые человек получает ежемесячно за свою работу"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> ein höheres <b>Gehalt</b> für diese Verantwortung.",
      "en": "<g>I would like</g> a higher <b>salary</b> for this responsibility.",
      "uk": "<g>Я хотів би</g> мати вищу <b>зарплату</b> за таку відповідальність.",
      "ru": "<g>Я хотел бы</g> иметь более высокую <b>зарплату</b> за такую ответственность."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_020",
    "cat": "k9",
    "term": {
      "de": "die Beförderung",
      "en": "promotion",
      "uk": "підвищення (на посаді)",
      "ru": "повышение (в должности)"
    },
    "short": {
      "de": "der Aufstieg in eine höhere berufliche Position",
      "en": "advancement to a higher professional position",
      "uk": "просування на вищу посаду",
      "ru": "продвижение на более высокую должность"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> eine <b>Beförderung</b> noch in diesem Jahr.",
      "en": "<g>I would like</g> a <b>promotion</b> this year.",
      "uk": "<g>Я хотів би</g> отримати <b>підвищення</b> ще цього року.",
      "ru": "<g>Я хотел бы</g> получить <b>повышение</b> ещё в этом году."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_021",
    "cat": "k9",
    "term": {
      "de": "flexibel",
      "en": "flexible",
      "uk": "гнучкий",
      "ru": "гибкий"
    },
    "short": {
      "de": "so, dass man sich leicht an neue Situationen anpassen kann",
      "en": "able to easily adapt to new situations",
      "uk": "такий, що легко пристосовується до нових ситуацій",
      "ru": "такой, который легко приспосабливается к новым ситуациям"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> <b>flexiblere</b> Arbeitszeiten in meinem neuen Job.",
      "en": "<g>I would like</g> more <b>flexible</b> working hours in my new job.",
      "uk": "<g>Я хотів би</g> мати <b>гнучкіший</b> робочий графік на новій роботі.",
      "ru": "<g>Я хотел бы</g> иметь более <b>гибкий</b> график работы на новой работе."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_022",
    "cat": "k9",
    "term": {
      "de": "der Kollege / die Kollegin",
      "en": "colleague",
      "uk": "колега",
      "ru": "коллега"
    },
    "short": {
      "de": "eine Person, die an demselben Ort arbeitet wie man selbst",
      "en": "a person who works at the same place as you",
      "uk": "особа, яка працює в тому самому місці, що й ти",
      "ru": "лицо, работающее в том же месте, что и ты"
    },
    "def": {
      "de": "<g>Ich hätte gern</g> nettere <b>Kollegen</b> in meiner neuen Abteilung.",
      "en": "<g>I would like</g> nicer <b>colleagues</b> in my new department.",
      "uk": "<g>Я хотів би</g> мати приємніших <b>колег</b> у новому відділі.",
      "ru": "<g>Я хотел бы</g> иметь более приятных <b>коллег</b> в новом отделе."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_023",
    "cat": "k9",
    "term": {
      "de": "wechseln",
      "en": "to change, to switch",
      "uk": "змінювати",
      "ru": "менять"
    },
    "short": {
      "de": "etwas gegen etwas anderes tauschen, zum Beispiel den Job",
      "en": "to swap something for something else, for example a job",
      "uk": "міняти щось на щось інше, наприклад роботу",
      "ru": "менять что-то на что-то другое, например работу"
    },
    "def": {
      "de": "Ich <g>würde</g> gern die Stelle <b>wechseln</b>, wenn ich die passende finden würde.",
      "en": "I <g>would</g> gladly <b>change</b> jobs if I could find the right one.",
      "uk": "Я б залюбки <b>змінив</b> роботу, якби знайшов підходящу.",
      "ru": "Я бы с удовольствием <b>сменил</b> работу, если бы нашёл подходящую."
    },
    "gram": "konjunktiv2_wuensche_b1"
  },
  {
    "id": "k9_024",
    "cat": "k9",
    "term": {
      "de": "der Traumjob",
      "en": "dream job",
      "uk": "робота мрії",
      "ru": "работа мечты"
    },
    "short": {
      "de": "der Beruf, den man sich am meisten wünscht",
      "en": "the job you wish for the most",
      "uk": "робота, про яку людина мріє найбільше",
      "ru": "работа, о которой человек мечтает больше всего"
    },
    "def": {
      "de": "<g>Wenn</g> ich meinen <b>Traumjob</b> <g>hätte</g>, <g>würde</g> ich jeden Morgen gern zur Arbeit <g>gehen</g>.",
      "en": "<g>If</g> I <g>had</g> my <b>dream job</b>, I <g>would</g> happily <g>go</g> to work every morning.",
      "uk": "<g>Якби</g> в мене була моя <b>робота мрії</b>, я б щоранку <g>ходив</g> на роботу із задоволенням.",
      "ru": "<g>Если бы</g> у меня была моя <b>работа мечты</b>, я бы каждое утро <g>ходил</g> на работу с удовольствием."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_025",
    "cat": "k9",
    "term": {
      "de": "kündigen",
      "en": "to quit, to resign",
      "uk": "звільнятися",
      "ru": "увольняться"
    },
    "short": {
      "de": "das Arbeitsverhältnis offiziell beenden",
      "en": "to officially end your employment",
      "uk": "офіційно припиняти трудові відносини",
      "ru": "официально прекращать трудовые отношения"
    },
    "def": {
      "de": "<g>Wenn</g> die Arbeit weiterhin so stressig <g>bliebe</g>, <g>würde</g> ich <b>kündigen</b>.",
      "en": "<g>If</g> the job <g>stayed</g> this stressful, I <g>would</g> <b>quit</b>.",
      "uk": "<g>Якби</g> робота залишалася такою стресовою, я б <b>звільнився</b>.",
      "ru": "<g>Если бы</g> работа оставалась такой напряжённой, я бы <b>уволился</b>."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_026",
    "cat": "k9",
    "term": {
      "de": "sich bewerben",
      "en": "to apply",
      "uk": "подавати заявку",
      "ru": "подавать заявку"
    },
    "short": {
      "de": "offiziell um eine Stelle bitten, indem man Unterlagen schickt",
      "en": "to officially request a position by sending documents",
      "uk": "офіційно просити посаду, надсилаючи документи",
      "ru": "официально просить должность, отправляя документы"
    },
    "def": {
      "de": "<g>Wenn</g> diese Stelle noch frei <g>wäre</g>, <g>würde</g> ich <b>mich</b> sofort <b>bewerben</b>.",
      "en": "<g>If</g> this position <g>were</g> still open, I <g>would</g> <b>apply</b> right away.",
      "uk": "<g>Якби</g> ця посада все ще була вільною, я б одразу <b>подав заявку</b>.",
      "ru": "<g>Если бы</g> эта должность всё ещё была свободна, я бы сразу <b>подал заявку</b>."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_027",
    "cat": "k9",
    "term": {
      "de": "die Motivation",
      "en": "motivation",
      "uk": "мотивація",
      "ru": "мотивация"
    },
    "short": {
      "de": "der innere Antrieb, etwas zu tun",
      "en": "the inner drive to do something",
      "uk": "внутрішнє прагнення щось робити",
      "ru": "внутреннее стремление что-то делать"
    },
    "def": {
      "de": "<g>Wenn</g> ich mehr <b>Motivation</b> <g>hätte</g>, <g>würde</g> ich abends noch einen Kurs <g>machen</g>.",
      "en": "<g>If</g> I <g>had</g> more <b>motivation</b>, I <g>would</g> still <g>take</g> a course in the evening.",
      "uk": "<g>Якби</g> в мене було більше <b>мотивації</b>, я б увечері ще й ходив на курси.",
      "ru": "<g>Если бы</g> у меня было больше <b>мотивации</b>, я бы вечером ещё занимался на курсах."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_028",
    "cat": "k9",
    "term": {
      "de": "der Lebenslauf",
      "en": "CV, résumé",
      "uk": "резюме",
      "ru": "резюме"
    },
    "short": {
      "de": "ein Dokument mit den wichtigsten Informationen über die eigene Ausbildung und Arbeit",
      "en": "a document with the key information about your education and work",
      "uk": "документ із найважливішою інформацією про освіту й досвід роботи",
      "ru": "документ с самой важной информацией об образовании и опыте работы"
    },
    "def": {
      "de": "<g>Wenn</g> mein <b>Lebenslauf</b> besser <g>wäre</g>, <g>hätte</g> ich sicher mehr Chancen.",
      "en": "<g>If</g> my <b>CV</b> <g>were</g> better, I <g>would</g> certainly <g>have</g> more chances.",
      "uk": "<g>Якби</g> моє <b>резюме</b> було кращим, у мене точно було б більше шансів.",
      "ru": "<g>Если бы</g> моё <b>резюме</b> было лучше, у меня точно было бы больше шансов."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_029",
    "cat": "k9",
    "term": {
      "de": "die Chance",
      "en": "chance",
      "uk": "шанс",
      "ru": "шанс"
    },
    "short": {
      "de": "eine gute Möglichkeit, etwas zu erreichen",
      "en": "a good opportunity to achieve something",
      "uk": "гарна можливість чогось досягти",
      "ru": "хорошая возможность чего-то достичь"
    },
    "def": {
      "de": "<g>Wenn</g> ich eine bessere <b>Chance</b> <g>bekäme</g>, <g>würde</g> ich sie sofort <g>nutzen</g>.",
      "en": "<g>If</g> I <g>got</g> a better <b>chance</b>, I <g>would</g> <g>take</g> it immediately.",
      "uk": "<g>Якби</g> я отримав кращий <b>шанс</b>, я б одразу ним скористався.",
      "ru": "<g>Если бы</g> я получил лучший <b>шанс</b>, я бы сразу им воспользовался."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_030",
    "cat": "k9",
    "term": {
      "de": "der Arbeitgeber",
      "en": "employer",
      "uk": "роботодавець",
      "ru": "работодатель"
    },
    "short": {
      "de": "eine Firma oder Person, bei der man angestellt ist",
      "en": "a company or person that employs you",
      "uk": "фірма чи особа, на яку працює людина",
      "ru": "фирма или лицо, у которого работает человек"
    },
    "def": {
      "de": "<g>Wenn</g> mein <b>Arbeitgeber</b> flexibler <g>wäre</g>, <g>könnte</g> ich öfter von zu Hause <g>arbeiten</g>.",
      "en": "<g>If</g> my <b>employer</b> <g>were</g> more flexible, I <g>could</g> <g>work</g> from home more often.",
      "uk": "<g>Якби</g> мій <b>роботодавець</b> був гнучкішим, я міг би частіше працювати з дому.",
      "ru": "<g>Если бы</g> мой <b>работодатель</b> был более гибким, я мог бы чаще работать из дома."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_031",
    "cat": "k9",
    "term": {
      "de": "zufrieden",
      "en": "satisfied",
      "uk": "задоволений",
      "ru": "довольный"
    },
    "short": {
      "de": "so, dass man mit etwas glücklich und einverstanden ist",
      "en": "happy and content with something",
      "uk": "такий, що почувається щасливим і задоволеним чимось",
      "ru": "такой, который чувствует себя счастливым и довольным чем-то"
    },
    "def": {
      "de": "<g>Wenn</g> ich mit meinem Job <g><b>zufriedener</b></g> <g>wäre</g>, <g>würde</g> ich nicht ständig ans Kündigen <g>denken</g>.",
      "en": "<g>If</g> I <g>were</g> more <b>satisfied</b> with my job, I <g>would</g> not constantly <g>think</g> about quitting.",
      "uk": "<g>Якби</g> я був <b>задоволенішим</b> своєю роботою, я б не думав постійно про звільнення.",
      "ru": "<g>Если бы</g> я был <b>более довольным</b> своей работой, я бы не думал постоянно об увольнении."
    },
    "gram": "nebensatz_wenn_konjunktiv2_irreal"
  },
  {
    "id": "k9_032",
    "cat": "k9",
    "term": {
      "de": "die Unterlagen (Pl.)",
      "en": "documents",
      "uk": "документи",
      "ru": "документы"
    },
    "short": {
      "de": "die Dokumente, die man für eine Bewerbung braucht",
      "en": "the documents you need for a job application",
      "uk": "документи, необхідні для подання заявки на роботу",
      "ru": "документы, необходимые для подачи заявки на работу"
    },
    "def": {
      "de": "Ich achte genau <g>darauf, dass</g> meine <b>Unterlagen</b> vollständig sind.",
      "en": "I pay close attention <g>to the fact that</g> my <b>documents</b> are complete.",
      "uk": "Я уважно стежу за <g>тим, щоб</g> мої <b>документи</b> були повними.",
      "ru": "Я внимательно слежу за <g>тем, чтобы</g> мои <b>документы</b> были полными."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_033",
    "cat": "k9",
    "term": {
      "de": "das Zeugnis",
      "en": "certificate, reference",
      "uk": "свідоцтво, характеристика",
      "ru": "справка, характеристика"
    },
    "short": {
      "de": "ein offizielles Dokument, das Leistungen oder Erfahrungen bestätigt",
      "en": "an official document confirming achievements or experience",
      "uk": "офіційний документ, що підтверджує досягнення чи досвід",
      "ru": "официальный документ, подтверждающий достижения или опыт"
    },
    "def": {
      "de": "Der Personalchef besteht <g>darauf, dass</g> ich alle <b>Zeugnisse</b> mitbringe.",
      "en": "The HR manager insists <g>that</g> I bring all my <b>certificates</b>.",
      "uk": "Керівник відділу кадрів наполягає на <g>тому, щоб</g> я приніс усі <b>свідоцтва</b>.",
      "ru": "Начальник отдела кадров настаивает на <g>том, чтобы</g> я принёс все <b>справки</b>."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_034",
    "cat": "k9",
    "term": {
      "de": "hoffen",
      "en": "to hope",
      "uk": "сподіватися",
      "ru": "надеяться"
    },
    "short": {
      "de": "wünschen, dass etwas Positives passiert",
      "en": "to wish that something positive happens",
      "uk": "бажати, щоб сталося щось хороше",
      "ru": "желать, чтобы произошло что-то хорошее"
    },
    "def": {
      "de": "Ich <b>hoffe</b> <g>darauf, dass</g> ich bald eine Antwort bekomme.",
      "en": "I <b>hope</b> <g>that</g> I get an answer soon.",
      "uk": "Я <b>сподіваюся</b> на <g>те, що</g> скоро отримаю відповідь.",
      "ru": "Я <b>надеюсь</b> на <g>то, что</g> скоро получу ответ."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_035",
    "cat": "k9",
    "term": {
      "de": "rechnen (mit +Dat)",
      "en": "to count (on), to expect",
      "uk": "розраховувати (на)",
      "ru": "рассчитывать (на)"
    },
    "short": {
      "de": "erwarten, dass etwas passiert",
      "en": "to expect that something will happen",
      "uk": "очікувати, що щось станеться",
      "ru": "ожидать, что что-то произойдёт"
    },
    "def": {
      "de": "Ich <b>rechne</b> fest <g>damit, dass</g> ich zum Gespräch eingeladen werde.",
      "en": "I firmly <b>count</b> <g>on the fact that</g> I will be invited to the interview.",
      "uk": "Я твердо <b>розраховую</b> на <g>те, що</g> мене запросять на співбесіду.",
      "ru": "Я твёрдо <b>рассчитываю</b> на <g>то, что</g> меня пригласят на собеседование."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_036",
    "cat": "k9",
    "term": {
      "de": "die Rückmeldung",
      "en": "feedback, reply",
      "uk": "відповідь, зворотний звʼязок",
      "ru": "ответ, обратная связь"
    },
    "short": {
      "de": "eine Antwort oder Reaktion auf etwas",
      "en": "a response or reaction to something",
      "uk": "відповідь чи реакція на щось",
      "ru": "ответ или реакция на что-то"
    },
    "def": {
      "de": "Ich freue mich <g>darauf, dass</g> ich bald eine <b>Rückmeldung</b> bekomme.",
      "en": "I am looking forward <g>to the fact that</g> I will soon get <b>feedback</b>.",
      "uk": "Я радію <g>тому, що</g> скоро отримаю <b>відповідь</b>.",
      "ru": "Я рад <g>тому, что</g> скоро получу <b>ответ</b>."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_037",
    "cat": "k9",
    "term": {
      "de": "der Personalchef / die Personalchefin",
      "en": "HR manager",
      "uk": "керівник відділу кадрів",
      "ru": "начальник отдела кадров"
    },
    "short": {
      "de": "die Person, die in einer Firma für die Einstellung von neuen Mitarbeitern zuständig ist",
      "en": "the person in a company responsible for hiring new employees",
      "uk": "особа у фірмі, відповідальна за прийом нових співробітників",
      "ru": "лицо в фирме, отвечающее за приём новых сотрудников"
    },
    "def": {
      "de": "Der <b>Personalchef</b> besteht <g>darauf, dass</g> jede Bewerbung persönlich unterschrieben ist.",
      "en": "The <b>HR manager</b> insists <g>that</g> every application is signed personally.",
      "uk": "<b>Керівник відділу кадрів</b> наполягає на <g>тому, щоб</g> кожна заява була підписана особисто.",
      "ru": "<b>Начальник отдела кадров</b> настаивает на <g>том, чтобы</g> каждое заявление было подписано лично."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_038",
    "cat": "k9",
    "term": {
      "de": "überzeugt sein (von +Dat)",
      "en": "to be convinced (of)",
      "uk": "бути переконаним (у)",
      "ru": "быть убеждённым (в)"
    },
    "short": {
      "de": "fest glauben, dass etwas wahr oder richtig ist",
      "en": "to firmly believe that something is true or correct",
      "uk": "твердо вірити, що щось правдиве чи правильне",
      "ru": "твёрдо верить, что что-то правдиво или правильно"
    },
    "def": {
      "de": "Ich bin <g>davon <b>überzeugt</b>, dass</g> ich gut zu dieser Stelle passe.",
      "en": "I am <g><b>convinced</b> that</g> I am a good fit for this position.",
      "uk": "Я <g><b>переконаний</b> у тому, що</g> добре підходжу для цієї посади.",
      "ru": "Я <g><b>убеждён</b> в том, что</g> хорошо подхожу для этой должности."
    },
    "gram": "verben_praep_dass_satz"
  },
  {
    "id": "k9_039",
    "cat": "k9",
    "term": {
      "de": "der Bewerber / die Bewerberin",
      "en": "applicant",
      "uk": "кандидат",
      "ru": "кандидат"
    },
    "short": {
      "de": "eine Person, die sich um eine Stelle bewirbt",
      "en": "a person who applies for a position",
      "uk": "особа, яка подає заявку на посаду",
      "ru": "лицо, подающее заявку на должность"
    },
    "def": {
      "de": "Ein guter <b>Bewerber</b> sollte auch <g>selbstständig</g> arbeiten können.",
      "en": "A good <b>applicant</b> should also be able to work independently.",
      "uk": "Гарний <b>кандидат</b> має вміти також самостійно працювати.",
      "ru": "Хороший <b>кандидат</b> должен уметь также самостоятельно работать."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_040",
    "cat": "k9",
    "term": {
      "de": "die Stärke",
      "en": "strength",
      "uk": "сильна сторона",
      "ru": "сильная сторона"
    },
    "short": {
      "de": "eine Fähigkeit oder Eigenschaft, in der man besonders gut ist",
      "en": "a skill or trait that you are especially good at",
      "uk": "уміння чи риса, у якій людина особливо добра",
      "ru": "умение или черта, в которой человек особенно хорош"
    },
    "def": {
      "de": "Im Gespräch sollte man seine <g>wichtigsten</g> <b>Stärken</b> klar nennen.",
      "en": "In the interview, you should clearly name your most important <b>strengths</b>.",
      "uk": "На співбесіді варто чітко назвати свої найважливіші <b>сильні сторони</b>.",
      "ru": "На собеседовании стоит чётко назвать свои самые важные <b>сильные стороны</b>."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_041",
    "cat": "k9",
    "term": {
      "de": "die Schwäche",
      "en": "weakness",
      "uk": "слабка сторона",
      "ru": "слабая сторона"
    },
    "short": {
      "de": "ein Bereich, in dem man nicht so gut ist",
      "en": "an area where you are not so good",
      "uk": "сфера, у якій людина не дуже добра",
      "ru": "область, в которой человек не очень хорош"
    },
    "def": {
      "de": "Eine <g>typische</g> Frage im Gespräch betrifft die eigenen <b>Schwächen</b>.",
      "en": "A typical question in the interview concerns your own <b>weaknesses</b>.",
      "uk": "Типове питання на співбесіді стосується власних <b>слабких сторін</b>.",
      "ru": "Типичный вопрос на собеседовании касается собственных <b>слабых сторон</b>."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_042",
    "cat": "k9",
    "term": {
      "de": "die Frage",
      "en": "question",
      "uk": "питання",
      "ru": "вопрос"
    },
    "short": {
      "de": "das, was man jemandem sagt, um eine Antwort zu bekommen",
      "en": "something you say to someone to get an answer",
      "uk": "те, що кажуть комусь, щоб отримати відповідь",
      "ru": "то, что говорят кому-то, чтобы получить ответ"
    },
    "def": {
      "de": "Der Personalchef stellte eine ziemlich <g>kritische</g> <b>Frage</b>.",
      "en": "The HR manager asked a rather critical <b>question</b>.",
      "uk": "Керівник відділу кадрів поставив доволі критичне <b>питання</b>.",
      "ru": "Начальник отдела кадров задал довольно критичный <b>вопрос</b>."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_043",
    "cat": "k9",
    "term": {
      "de": "die Erwartung",
      "en": "expectation",
      "uk": "очікування",
      "ru": "ожидание"
    },
    "short": {
      "de": "das, was man von etwas oder jemandem erhofft oder erwartet",
      "en": "what you hope for or expect from something or someone",
      "uk": "те, на що людина сподівається чи що очікує від чогось або когось",
      "ru": "то, на что человек надеется или что ожидает от чего-то или кого-то"
    },
    "def": {
      "de": "Ich habe <g>realistische</g> <b>Erwartungen</b> an das Vorstellungsgespräch.",
      "en": "I have realistic <b>expectations</b> for the job interview.",
      "uk": "Я маю реалістичні <b>очікування</b> від співбесіди.",
      "ru": "У меня реалистичные <b>ожидания</b> от собеседования."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_044",
    "cat": "k9",
    "term": {
      "de": "reagieren",
      "en": "to react",
      "uk": "реагувати",
      "ru": "реагировать"
    },
    "short": {
      "de": "auf etwas mit einer bestimmten Handlung oder einem Gefühl antworten",
      "en": "to respond to something with a certain action or feeling",
      "uk": "відповідати на щось певною дією чи почуттям",
      "ru": "отвечать на что-то определённым действием или чувством"
    },
    "def": {
      "de": "Sie hat auf die schwierige Frage sehr <g>ruhig</g> <b>reagiert</b>.",
      "en": "She <b>reacted</b> very calmly to the difficult question.",
      "uk": "Вона дуже спокійно <b>відреагувала</b> на складне питання.",
      "ru": "Она очень спокойно <b>отреагировала</b> на сложный вопрос."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_045",
    "cat": "k9",
    "term": {
      "de": "zuständig",
      "en": "responsible, in charge",
      "uk": "відповідальний (за)",
      "ru": "ответственный (за)"
    },
    "short": {
      "de": "verantwortlich für einen bestimmten Bereich oder eine Aufgabe",
      "en": "responsible for a certain area or task",
      "uk": "відповідальний за певну сферу чи завдання",
      "ru": "ответственный за определённую сферу или задачу"
    },
    "def": {
      "de": "Für die Einstellung neuer Mitarbeiter ist die Personalabteilung <g><b>zuständig</b></g>.",
      "en": "The HR department is <b>responsible</b> for hiring new employees.",
      "uk": "За прийом нових співробітників <b>відповідає</b> відділ кадрів.",
      "ru": "За приём новых сотрудников <b>отвечает</b> отдел кадров."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_046",
    "cat": "k9",
    "term": {
      "de": "das Auftreten",
      "en": "manner, demeanour",
      "uk": "манера триматися",
      "ru": "манера держаться"
    },
    "short": {
      "de": "die Art, wie man sich verhält und wirkt, wenn man mit anderen zu tun hat",
      "en": "the way you behave and come across when dealing with others",
      "uk": "спосіб поведінки та враження, яке справляєш у спілкуванні з іншими",
      "ru": "способ поведения и впечатление, которое производишь в общении с другими"
    },
    "def": {
      "de": "Ein <g>sympathisches</g> <b>Auftreten</b> hinterlässt einen guten ersten Eindruck.",
      "en": "A likeable <b>manner</b> leaves a good first impression.",
      "uk": "Приємна <b>манера триматися</b> справляє гарне перше враження.",
      "ru": "Приятная <b>манера держаться</b> производит хорошее первое впечатление."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_047",
    "cat": "k9",
    "term": {
      "de": "die Pause",
      "en": "break",
      "uk": "перерва",
      "ru": "перерыв"
    },
    "short": {
      "de": "eine kurze Zeit, in der man nicht arbeitet und sich ausruht",
      "en": "a short time when you don't work and rest",
      "uk": "короткий час, коли не працюють і відпочивають",
      "ru": "короткое время, когда не работают и отдыхают"
    },
    "def": {
      "de": "Wir machen <g>regelmäßig</g> eine kurze <b>Pause</b> während der Arbeit.",
      "en": "We regularly take a short <b>break</b> during work.",
      "uk": "Ми регулярно робимо коротку <b>перерву</b> під час роботи.",
      "ru": "Мы регулярно делаем короткий <b>перерыв</b> во время работы."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_048",
    "cat": "k9",
    "term": {
      "de": "der Feierabend",
      "en": "end of the workday",
      "uk": "кінець робочого дня",
      "ru": "конец рабочего дня"
    },
    "short": {
      "de": "das Ende der Arbeitszeit am Tag",
      "en": "the end of the working day",
      "uk": "закінчення робочого часу протягом дня",
      "ru": "окончание рабочего времени в течение дня"
    },
    "def": {
      "de": "Nach einem <g>stressigen</g> Tag freue ich mich sehr auf den <b>Feierabend</b>.",
      "en": "After a stressful day, I really look forward to the <b>end of the workday</b>.",
      "uk": "Після напруженого дня я з нетерпінням чекаю <b>кінця робочого дня</b>.",
      "ru": "После напряжённого дня я с нетерпением жду <b>конца рабочего дня</b>."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_049",
    "cat": "k9",
    "term": {
      "de": "der Arbeitsplatz",
      "en": "workplace",
      "uk": "робоче місце",
      "ru": "рабочее место"
    },
    "short": {
      "de": "der Ort oder die Stelle, an der man arbeitet",
      "en": "the place or spot where you work",
      "uk": "місце, де людина працює",
      "ru": "место, где человек работает"
    },
    "def": {
      "de": "Ein <g>ergonomischer</g> <b>Arbeitsplatz</b> ist wichtig für die Gesundheit.",
      "en": "An ergonomic <b>workplace</b> is important for your health.",
      "uk": "Ергономічне <b>робоче місце</b> важливе для здоровʼя.",
      "ru": "Эргономичное <b>рабочее место</b> важно для здоровья."
    },
    "gram": "adjektive_auf_ig_isch"
  },
  {
    "id": "k9_050",
    "cat": "k9",
    "term": {
      "de": "die Gewohnheit",
      "en": "habit",
      "uk": "звичка",
      "ru": "привычка"
    },
    "short": {
      "de": "etwas, das man regelmäßig und automatisch tut",
      "en": "something you do regularly and automatically",
      "uk": "те, що людина робить регулярно й автоматично",
      "ru": "то, что человек делает регулярно и автоматически"
    },
    "def": {
      "de": "Das ist eine ziemlich <g>typische</g> <b>Gewohnheit</b> unter Büroangestellten.",
      "en": "That is a fairly typical <b>habit</b> among office employees.",
      "uk": "Це доволі типова <b>звичка</b> серед офісних працівників.",
      "ru": "Это довольно типичная <b>привычка</b> среди офисных сотрудников."
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
    "id": "k10_017",
    "cat": "k10",
    "term": {
      "de": "sich aufwärmen",
      "en": "to warm up",
      "uk": "розігріватися",
      "ru": "разминаться"
    },
    "short": {
      "de": "den Körper vor dem Sport leicht bewegen, um ihn auf die Belastung vorzubereiten",
      "en": "to move the body gently before sport to prepare it for exertion",
      "uk": "легко рухати тілом перед спортом, щоб підготувати його до навантаження",
      "ru": "легко двигать телом перед спортом, чтобы подготовить его к нагрузке"
    },
    "def": {
      "de": "Man sollte <b>sich</b> gut <b>aufwärmen</b>, <g>bevor</g> das Training <g>beginnt</g>.",
      "en": "You should <b>warm up</b> well <g>before</g> training <g>begins</g>.",
      "uk": "Слід добре <b>розігрітися</b>, <g>перш ніж</g> тренування <g>почнеться</g>.",
      "ru": "Следует хорошо <b>размяться</b>, <g>прежде чем</g> тренировка <g>начнётся</g>."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_018",
    "cat": "k10",
    "term": {
      "de": "sich dehnen",
      "en": "to stretch",
      "uk": "розтягуватися",
      "ru": "растягиваться"
    },
    "short": {
      "de": "die Muskeln vorsichtig strecken, um sie flexibler zu machen",
      "en": "to carefully stretch the muscles to make them more flexible",
      "uk": "обережно розтягувати мʼязи, щоб зробити їх гнучкішими",
      "ru": "осторожно растягивать мышцы, чтобы сделать их более гибкими"
    },
    "def": {
      "de": "<g>Bevor</g> du <g>läufst</g>, solltest du <b>dich</b> gründlich <b>dehnen</b>.",
      "en": "<g>Before</g> you <g>run</g>, you should <b>stretch</b> thoroughly.",
      "uk": "<g>Перш ніж</g> <g>бігти</g>, тобі слід ретельно <b>розтягнутися</b>.",
      "ru": "<g>Прежде чем</g> <g>бежать</g>, тебе следует тщательно <b>растянуться</b>."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_019",
    "cat": "k10",
    "term": {
      "de": "sich konzentrieren",
      "en": "to concentrate",
      "uk": "зосереджуватися",
      "ru": "сосредоточиваться"
    },
    "short": {
      "de": "die ganze Aufmerksamkeit auf eine Sache richten",
      "en": "to direct all your attention to one thing",
      "uk": "спрямовувати всю увагу на одну справу",
      "ru": "направлять всё внимание на одно дело"
    },
    "def": {
      "de": "<g>Bevor</g> der Wettkampf <g>beginnt</g>, muss ich <b>mich</b> total <b>konzentrieren</b>.",
      "en": "<g>Before</g> the competition <g>begins</g>, I have to <b>concentrate</b> completely.",
      "uk": "<g>Перш ніж</g> змагання <g>почнеться</g>, мені треба повністю <b>зосередитися</b>.",
      "ru": "<g>Прежде чем</g> соревнование <g>начнётся</g>, мне нужно полностью <b>сосредоточиться</b>."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_020",
    "cat": "k10",
    "term": {
      "de": "die Ausrüstung",
      "en": "equipment",
      "uk": "спорядження",
      "ru": "снаряжение"
    },
    "short": {
      "de": "alle Sachen, die man für eine bestimmte Aktivität braucht",
      "en": "all the things you need for a certain activity",
      "uk": "усі речі, потрібні для певної діяльності",
      "ru": "все вещи, необходимые для определённой деятельности"
    },
    "def": {
      "de": "<g>Bevor</g> du <g>losläufst</g>, solltest du deine <b>Ausrüstung</b> überprüfen.",
      "en": "<g>Before</g> you <g>set off</g>, you should check your <b>equipment</b>.",
      "uk": "<g>Перш ніж</g> <g>вирушити</g>, тобі слід перевірити своє <b>спорядження</b>.",
      "ru": "<g>Прежде чем</g> <g>отправиться</g>, тебе следует проверить своё <b>снаряжение</b>."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_021",
    "cat": "k10",
    "term": {
      "de": "die Startlinie",
      "en": "starting line",
      "uk": "стартова лінія",
      "ru": "стартовая линия"
    },
    "short": {
      "de": "der Ort, an dem ein Rennen beginnt",
      "en": "the place where a race begins",
      "uk": "місце, де починається забіг",
      "ru": "место, где начинается забег"
    },
    "def": {
      "de": "<g>Bevor</g> die Läufer an der <b>Startlinie</b> <g>stehen</g>, wärmen sie sich noch auf.",
      "en": "<g>Before</g> the runners <g>stand</g> at the <b>starting line</b>, they warm up a bit more.",
      "uk": "<g>Перш ніж</g> бігуни <g>стануть</g> на <b>стартовій лінії</b>, вони ще розігріваються.",
      "ru": "<g>Прежде чем</g> бегуны <g>встанут</g> на <b>стартовую линию</b>, они ещё разминаются."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_022",
    "cat": "k10",
    "term": {
      "de": "nervös",
      "en": "nervous",
      "uk": "нервовий",
      "ru": "нервный"
    },
    "short": {
      "de": "unruhig und ängstlich, zum Beispiel vor einem wichtigen Ereignis",
      "en": "restless and anxious, for example before an important event",
      "uk": "неспокійний і тривожний, наприклад перед важливою подією",
      "ru": "беспокойный и тревожный, например перед важным событием"
    },
    "def": {
      "de": "<g>Bevor</g> ein wichtiger Wettkampf <g>beginnt</g>, werden viele Sportler <b>nervös</b>.",
      "en": "<g>Before</g> an important competition <g>begins</g>, many athletes get <b>nervous</b>.",
      "uk": "<g>Перш ніж</g> важливе змагання <g>почнеться</g>, багато спортсменів стають <b>нервовими</b>.",
      "ru": "<g>Прежде чем</g> важное соревнование <g>начнётся</g>, многие спортсмены становятся <b>нервными</b>."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_023",
    "cat": "k10",
    "term": {
      "de": "kontrollieren",
      "en": "to check",
      "uk": "перевіряти",
      "ru": "проверять"
    },
    "short": {
      "de": "genau prüfen, ob etwas richtig oder in Ordnung ist",
      "en": "to check carefully whether something is correct or in order",
      "uk": "ретельно перевіряти, чи щось правильне або в порядку",
      "ru": "тщательно проверять, всё ли правильно или в порядке"
    },
    "def": {
      "de": "<g>Bevor</g> das Rennen <g>beginnt</g>, <b>kontrolliert</b> jeder Athlet noch einmal seine Schuhe.",
      "en": "<g>Before</g> the race <g>begins</g>, every athlete <b>checks</b> their shoes one more time.",
      "uk": "<g>Перш ніж</g> забіг <g>почнеться</g>, кожен атлет ще раз <b>перевіряє</b> своє взуття.",
      "ru": "<g>Прежде чем</g> забег <g>начнётся</g>, каждый атлет ещё раз <b>проверяет</b> свою обувь."
    },
    "gram": "nebensatz_mit_bevor"
  },
  {
    "id": "k10_024",
    "cat": "k10",
    "term": {
      "de": "der Trainer / die Trainerin",
      "en": "coach",
      "uk": "тренер",
      "ru": "тренер"
    },
    "short": {
      "de": "eine Person, die eine Mannschaft oder einen Sportler professionell trainiert",
      "en": "a person who professionally trains a team or an athlete",
      "uk": "особа, яка професійно тренує команду чи спортсмена",
      "ru": "лицо, профессионально тренирующее команду или спортсмена"
    },
    "def": {
      "de": "<g>Der neue</g> <b>Trainer</b> hat viel Erfahrung mit jungen Athleten.",
      "en": "The new <b>coach</b> has a lot of experience with young athletes.",
      "uk": "Новий <b>тренер</b> має великий досвід роботи з юними спортсменами.",
      "ru": "Новый <b>тренер</b> имеет большой опыт работы с юными спортсменами."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_025",
    "cat": "k10",
    "term": {
      "de": "die Mannschaft",
      "en": "team",
      "uk": "команда",
      "ru": "команда"
    },
    "short": {
      "de": "eine Gruppe von Sportlern, die zusammen spielt",
      "en": "a group of athletes who play together",
      "uk": "група спортсменів, які грають разом",
      "ru": "группа спортсменов, играющих вместе"
    },
    "def": {
      "de": "<g>Die ganze</g> <b>Mannschaft</b> war von dem Ergebnis begeistert.",
      "en": "The whole <b>team</b> was thrilled with the result.",
      "uk": "Уся <b>команда</b> була в захваті від результату.",
      "ru": "Вся <b>команда</b> была в восторге от результата."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_026",
    "cat": "k10",
    "term": {
      "de": "der Kapitän / die Kapitänin",
      "en": "captain",
      "uk": "капітан",
      "ru": "капитан"
    },
    "short": {
      "de": "die Person, die eine Mannschaft anführt",
      "en": "the person who leads a team",
      "uk": "особа, яка очолює команду",
      "ru": "лицо, возглавляющее команду"
    },
    "def": {
      "de": "<g>Der junge</g> <b>Kapitän</b> führte das Team zum Sieg.",
      "en": "The young <b>captain</b> led the team to victory.",
      "uk": "Молодий <b>капітан</b> привів команду до перемоги.",
      "ru": "Молодой <b>капитан</b> привёл команду к победе."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_027",
    "cat": "k10",
    "term": {
      "de": "die Taktik",
      "en": "tactics",
      "uk": "тактика",
      "ru": "тактика"
    },
    "short": {
      "de": "ein durchdachter Plan, wie man ein Ziel im Sport erreichen will",
      "en": "a well-thought-out plan for achieving a goal in sport",
      "uk": "продуманий план, як досягти мети у спорті",
      "ru": "продуманный план, как достичь цели в спорте"
    },
    "def": {
      "de": "<g>Die neue</g> <b>Taktik</b> hat sich als sehr erfolgreich erwiesen.",
      "en": "The new <b>tactics</b> proved to be very successful.",
      "uk": "Нова <b>тактика</b> виявилася дуже успішною.",
      "ru": "Новая <b>тактика</b> оказалась очень успешной."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_028",
    "cat": "k10",
    "term": {
      "de": "das Talent",
      "en": "talent",
      "uk": "талант",
      "ru": "талант"
    },
    "short": {
      "de": "eine besondere Fähigkeit, die jemand von Natur aus hat",
      "en": "a special ability that someone naturally has",
      "uk": "особлива здібність, яку людина має від природи",
      "ru": "особая способность, которая есть у человека от природы"
    },
    "def": {
      "de": "<g>Das große</g> <b>Talent</b> des Spielers war schon früh zu erkennen.",
      "en": "The player's great <b>talent</b> was recognisable early on.",
      "uk": "Великий <b>талант</b> гравця було помітно ще змалку.",
      "ru": "Большой <b>талант</b> игрока был заметен ещё с ранних лет."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_029",
    "cat": "k10",
    "term": {
      "de": "die Leistung",
      "en": "performance",
      "uk": "досягнення, результат",
      "ru": "достижение, результат"
    },
    "short": {
      "de": "das Ergebnis, das jemand durch seine Arbeit oder Anstrengung erreicht",
      "en": "the result someone achieves through work or effort",
      "uk": "результат, якого людина досягає завдяки праці чи зусиллям",
      "ru": "результат, которого человек достигает благодаря труду или усилиям"
    },
    "def": {
      "de": "<g>Die sportliche</g> <b>Leistung</b> der Mannschaft hat sich stark verbessert.",
      "en": "The team's athletic <b>performance</b> has improved greatly.",
      "uk": "Спортивні <b>досягнення</b> команди значно покращилися.",
      "ru": "Спортивные <b>достижения</b> команды значительно улучшились."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_030",
    "cat": "k10",
    "term": {
      "de": "der Erfolg",
      "en": "success",
      "uk": "успіх",
      "ru": "успех"
    },
    "short": {
      "de": "ein positives Ergebnis, das man durch eigene Bemühungen erreicht",
      "en": "a positive result achieved through one's own efforts",
      "uk": "позитивний результат, досягнутий власними зусиллями",
      "ru": "положительный результат, достигнутый собственными усилиями"
    },
    "def": {
      "de": "<g>Der schnelle</g> <b>Erfolg</b> hat das ganze Team überrascht.",
      "en": "The quick <b>success</b> surprised the whole team.",
      "uk": "Швидкий <b>успіх</b> здивував усю команду.",
      "ru": "Быстрый <b>успех</b> удивил всю команду."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_031",
    "cat": "k10",
    "term": {
      "de": "die Herausforderung",
      "en": "challenge",
      "uk": "виклик",
      "ru": "вызов"
    },
    "short": {
      "de": "eine schwierige Aufgabe, die viel Einsatz verlangt",
      "en": "a difficult task that requires a lot of effort",
      "uk": "складне завдання, яке вимагає багато зусиль",
      "ru": "сложная задача, требующая много усилий"
    },
    "def": {
      "de": "<g>Die schwierige</g> <b>Herausforderung</b> hat das Team zusammengeschweißt.",
      "en": "The difficult <b>challenge</b> brought the team closer together.",
      "uk": "Складний <b>виклик</b> згуртував команду.",
      "ru": "Сложный <b>вызов</b> сплотил команду."
    },
    "gram": "adjektivdeklination_bestimmter_artikel"
  },
  {
    "id": "k10_032",
    "cat": "k10",
    "term": {
      "de": "der Läufer / die Läuferin",
      "en": "runner",
      "uk": "бігун",
      "ru": "бегун"
    },
    "short": {
      "de": "eine Person, die läuft, besonders bei einem Wettkampf",
      "en": "a person who runs, especially in a competition",
      "uk": "особа, яка бігає, особливо у змаганні",
      "ru": "лицо, которое бегает, особенно в соревновании"
    },
    "def": {
      "de": "<g>Der schnellere</g> <b>Läufer</b> gewann das Rennen nur knapp.",
      "en": "The <g>faster</g> <b>runner</b> won the race by a narrow margin.",
      "uk": "<g>Швидший</g> <b>бігун</b> переміг у забігу лише з невеликим відривом.",
      "ru": "<g>Более быстрый</g> <b>бегун</b> выиграл забег лишь с небольшим отрывом."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_033",
    "cat": "k10",
    "term": {
      "de": "die Ausdauer",
      "en": "endurance",
      "uk": "витривалість",
      "ru": "выносливость"
    },
    "short": {
      "de": "die Fähigkeit, eine Anstrengung lange durchzuhalten",
      "en": "the ability to keep up an effort for a long time",
      "uk": "здатність довго витримувати навантаження",
      "ru": "способность долго выдерживать нагрузку"
    },
    "def": {
      "de": "Mit <g>einer besseren</g> <b>Ausdauer</b> hätte er noch schneller laufen können.",
      "en": "With <g>better</g> <b>endurance</b>, he could have run even faster.",
      "uk": "Із <g>кращою</g> <b>витривалістю</b> він міг би бігти ще швидше.",
      "ru": "С <g>лучшей</g> <b>выносливостью</b> он мог бы бежать ещё быстрее."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_034",
    "cat": "k10",
    "term": {
      "de": "schwach",
      "en": "weak",
      "uk": "слабкий",
      "ru": "слабый"
    },
    "short": {
      "de": "ohne viel Kraft oder Können",
      "en": "without much strength or skill",
      "uk": "без великої сили чи вміння",
      "ru": "без большой силы или умения"
    },
    "def": {
      "de": "<g>Der <b>schwächste</b></g> Spieler wurde trotzdem für sein Engagement gelobt.",
      "en": "The <g><b>weakest</b></g> player was still praised for his commitment.",
      "uk": "<g><b>Найслабшого</b></g> гравця все одно похвалили за старанність.",
      "ru": "<g><b>Самого слабого</b></g> игрока всё равно похвалили за старание."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_035",
    "cat": "k10",
    "term": {
      "de": "die Strecke",
      "en": "route, distance",
      "uk": "дистанція, маршрут",
      "ru": "дистанция, маршрут"
    },
    "short": {
      "de": "der Weg oder die Distanz, die man zurücklegen muss",
      "en": "the path or distance you have to cover",
      "uk": "шлях чи відстань, яку треба подолати",
      "ru": "путь или расстояние, которое нужно преодолеть"
    },
    "def": {
      "de": "<g>Die längere</g> <b>Strecke</b> war für viele Läufer eine echte Herausforderung.",
      "en": "The <g>longer</g> <b>route</b> was a real challenge for many runners.",
      "uk": "<g>Довша</g> <b>дистанція</b> стала справжнім викликом для багатьох бігунів.",
      "ru": "<g>Более длинная</g> <b>дистанция</b> стала настоящим испытанием для многих бегунов."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_036",
    "cat": "k10",
    "term": {
      "de": "das Tempo",
      "en": "pace",
      "uk": "темп",
      "ru": "темп"
    },
    "short": {
      "de": "die Geschwindigkeit, mit der man sich bewegt",
      "en": "the speed at which you move",
      "uk": "швидкість, з якою людина рухається",
      "ru": "скорость, с которой человек двигается"
    },
    "def": {
      "de": "<g>Ein höheres</g> <b>Tempo</b> half ihr, die Konkurrenz zu überholen.",
      "en": "A <g>higher</g> <b>pace</b> helped her overtake the competition.",
      "uk": "<g>Вищий</g> <b>темп</b> допоміг їй обійти суперників.",
      "ru": "<g>Более высокий</g> <b>темп</b> помог ей обогнать соперников."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_037",
    "cat": "k10",
    "term": {
      "de": "die Zeit",
      "en": "time",
      "uk": "час",
      "ru": "время"
    },
    "short": {
      "de": "die Dauer, die man für etwas braucht, gemessen zum Beispiel bei einem Rennen",
      "en": "the duration needed for something, measured for example in a race",
      "uk": "тривалість, потрібна для чогось, виміряна, наприклад, у забігу",
      "ru": "продолжительность, необходимая для чего-то, измеренная, например, в забеге"
    },
    "def": {
      "de": "<g>Die schnellste</g> <b>Zeit</b> des Tages wurde von einer 16-Jährigen erzielt.",
      "en": "The <g>fastest</g> <b>time</b> of the day was set by a 16-year-old.",
      "uk": "<g>Найкращий</g> <b>час</b> дня показала 16-річна дівчина.",
      "ru": "<g>Лучшее</g> <b>время</b> дня показала 16-летняя девушка."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_038",
    "cat": "k10",
    "term": {
      "de": "anstrengend",
      "en": "strenuous",
      "uk": "виснажливий",
      "ru": "изнурительный"
    },
    "short": {
      "de": "so, dass es viel Kraft oder Energie kostet",
      "en": "requiring a lot of strength or energy",
      "uk": "такий, що вимагає багато сили чи енергії",
      "ru": "такой, который требует много сил или энергии"
    },
    "def": {
      "de": "<g>Der <b>anstrengendere</b></g> Teil des Rennens war der letzte Kilometer.",
      "en": "The <g><b>more strenuous</b></g> part of the race was the last kilometre.",
      "uk": "<g><b>Виснажливішою</b></g> частиною забігу був останній кілометр.",
      "ru": "<g><b>Более изнурительной</b></g> частью забега был последний километр."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_039",
    "cat": "k10",
    "term": {
      "de": "der Gegner / die Gegnerin",
      "en": "opponent",
      "uk": "суперник",
      "ru": "соперник"
    },
    "short": {
      "de": "eine Person oder Mannschaft, gegen die man in einem Wettkampf antritt",
      "en": "a person or team you compete against in a competition",
      "uk": "особа чи команда, проти якої змагаєшся",
      "ru": "лицо или команда, против которых соревнуешься"
    },
    "def": {
      "de": "<g>Der stärkste</g> <b>Gegner</b> kam überraschend aus der eigenen Mannschaft.",
      "en": "The <g>strongest</g> <b>opponent</b> surprisingly came from their own team.",
      "uk": "<g>Найсильніший</g> <b>суперник</b> несподівано виявився з власної команди.",
      "ru": "<g>Самый сильный</g> <b>соперник</b> неожиданно оказался из своей же команды."
    },
    "gram": "komparativ_superlativ_vor_nomen"
  },
  {
    "id": "k10_040",
    "cat": "k10",
    "term": {
      "de": "der Teilnehmer / die Teilnehmerin",
      "en": "participant",
      "uk": "учасник",
      "ru": "участник"
    },
    "short": {
      "de": "eine Person, die bei einer Veranstaltung mitmacht",
      "en": "a person who takes part in an event",
      "uk": "особа, яка бере участь у заході",
      "ru": "лицо, которое участвует в мероприятии"
    },
    "def": {
      "de": "<g>Etwas Erstaunliches</g> geschah, als über tausend <b>Teilnehmer</b> beim Spendenlauf mitmachten.",
      "en": "Something amazing happened when over a thousand <b>participants</b> joined the charity run.",
      "uk": "Сталося щось дивовижне, коли понад тисячу <b>учасників</b> взяли участь у благодійному забігу.",
      "ru": "Произошло нечто удивительное, когда более тысячи <b>участников</b> присоединились к благотворительному забегу."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_041",
    "cat": "k10",
    "term": {
      "de": "spenden",
      "en": "to donate",
      "uk": "жертвувати",
      "ru": "жертвовать"
    },
    "short": {
      "de": "Geld oder Dinge für einen guten Zweck geben",
      "en": "to give money or things for a good cause",
      "uk": "давати гроші чи речі на добру справу",
      "ru": "давать деньги или вещи на доброе дело"
    },
    "def": {
      "de": "<g>Das Wichtigste</g> beim <b>Spenden</b> ist, dass man es aus vollem Herzen tut.",
      "en": "The most important thing about <b>donating</b> is doing it wholeheartedly.",
      "uk": "Найважливіше в тому, щоб <b>жертвувати</b>, — робити це від щирого серця.",
      "ru": "Самое важное в том, чтобы <b>жертвовать</b>, — делать это от чистого сердца."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_042",
    "cat": "k10",
    "term": {
      "de": "der Betrag",
      "en": "amount",
      "uk": "сума",
      "ru": "сумма"
    },
    "short": {
      "de": "eine bestimmte Menge Geld",
      "en": "a certain amount of money",
      "uk": "певна кількість грошей",
      "ru": "определённое количество денег"
    },
    "def": {
      "de": "<g>Nichts Beeindruckenderes</g> gab es als den gesammelten <b>Betrag</b> am Ende des Tages.",
      "en": "There was nothing more impressive than the <b>amount</b> collected at the end of the day.",
      "uk": "Не було нічого враженнішого, ніж зібрана <b>сума</b> в кінці дня.",
      "ru": "Не было ничего более впечатляющего, чем собранная <b>сумма</b> в конце дня."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_043",
    "cat": "k10",
    "term": {
      "de": "die Route",
      "en": "route",
      "uk": "маршрут",
      "ru": "маршрут"
    },
    "short": {
      "de": "der geplante Weg, den man zurücklegt",
      "en": "the planned path you cover",
      "uk": "запланований шлях, який долають",
      "ru": "запланированный путь, который преодолевают"
    },
    "def": {
      "de": "<g>Etwas Neues</g> war in diesem Jahr die <b>Route</b> durch die Innenstadt.",
      "en": "Something new this year was the <b>route</b> through the city centre.",
      "uk": "Дещо нове цього року — <b>маршрут</b> через центр міста.",
      "ru": "Что-то новое в этом году — <b>маршрут</b> через центр города."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_044",
    "cat": "k10",
    "term": {
      "de": "der/die Freiwillige",
      "en": "volunteer",
      "uk": "волонтер",
      "ru": "волонтёр"
    },
    "short": {
      "de": "eine Person, die ohne Bezahlung freiwillig hilft",
      "en": "a person who helps voluntarily without payment",
      "uk": "особа, яка добровільно допомагає без оплати",
      "ru": "лицо, которое добровольно помогает без оплаты"
    },
    "def": {
      "de": "Ohne die vielen <g><b>Freiwilligen</b></g> wäre der Spendenlauf nicht möglich gewesen.",
      "en": "Without the many <b>volunteers</b>, the charity run would not have been possible.",
      "uk": "Без багатьох <b>волонтерів</b> благодійний забіг був би неможливим.",
      "ru": "Без многих <b>волонтёров</b> благотворительный забег был бы невозможен."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_045",
    "cat": "k10",
    "term": {
      "de": "der Erlös",
      "en": "proceeds",
      "uk": "виторг",
      "ru": "выручка"
    },
    "short": {
      "de": "das Geld, das man durch den Verkauf oder eine Aktion einnimmt",
      "en": "the money earned through a sale or an activity",
      "uk": "гроші, отримані від продажу чи заходу",
      "ru": "деньги, полученные от продажи или мероприятия"
    },
    "def": {
      "de": "<g>Nichts Erfreulicheres</g> gab es, als den gesamten <b>Erlös</b> an eine Kinderklinik zu spenden.",
      "en": "There was nothing more delightful than donating the entire <b>proceeds</b> to a children's hospital.",
      "uk": "Не було нічого приємнішого, ніж пожертвувати весь <b>виторг</b> дитячій лікарні.",
      "ru": "Не было ничего более приятного, чем пожертвовать всю <b>выручку</b> детской больнице."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_046",
    "cat": "k10",
    "term": {
      "de": "die Unterstützung",
      "en": "support",
      "uk": "підтримка",
      "ru": "поддержка"
    },
    "short": {
      "de": "die Hilfe, die man von anderen bekommt",
      "en": "the help you receive from others",
      "uk": "допомога, яку отримують від інших",
      "ru": "помощь, которую получают от других"
    },
    "def": {
      "de": "<g>Etwas Wertvolles</g> war die <b>Unterstützung</b> der ganzen Stadt für diesen guten Zweck.",
      "en": "Something valuable was the whole city's <b>support</b> for this good cause.",
      "uk": "Дещо цінне — це <b>підтримка</b> усього міста заради доброї справи.",
      "ru": "Что-то ценное — это <b>поддержка</b> всего города ради доброго дела."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_047",
    "cat": "k10",
    "term": {
      "de": "vorschlagen",
      "en": "to suggest",
      "uk": "пропонувати",
      "ru": "предлагать"
    },
    "short": {
      "de": "eine Idee nennen, über die andere entscheiden sollen",
      "en": "to name an idea that others should decide on",
      "uk": "висловлювати ідею, щодо якої мають вирішити інші",
      "ru": "высказывать идею, по поводу которой должны решить другие"
    },
    "def": {
      "de": "<g>Etwas Interessantes</g> <b>schlug</b> unser Trainer letzte Woche <b>vor</b>: ein Wochenende Wandern.",
      "en": "Our coach <b>suggested</b> something interesting last week: a weekend of hiking.",
      "uk": "Наш тренер <b>запропонував</b> дещо цікаве минулого тижня: похідні вихідні.",
      "ru": "Наш тренер <b>предложил</b> что-то интересное на прошлой неделе: выходные с походом."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_048",
    "cat": "k10",
    "term": {
      "de": "ausprobieren",
      "en": "to try out",
      "uk": "пробувати",
      "ru": "пробовать"
    },
    "short": {
      "de": "etwas zum ersten Mal machen, um zu sehen, ob es einem gefällt",
      "en": "to do something for the first time to see if you like it",
      "uk": "робити щось вперше, щоб дізнатися, чи подобається",
      "ru": "делать что-то впервые, чтобы узнать, нравится ли"
    },
    "def": {
      "de": "<g>Nichts Spannenderes</g> gibt es, als eine neue Sportart <b>auszuprobieren</b>.",
      "en": "There is nothing more exciting than <b>trying out</b> a new sport.",
      "uk": "Немає нічого захопливішого, ніж <b>спробувати</b> новий вид спорту.",
      "ru": "Нет ничего более увлекательного, чем <b>попробовать</b> новый вид спорта."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_049",
    "cat": "k10",
    "term": {
      "de": "der Verein",
      "en": "club",
      "uk": "клуб",
      "ru": "клуб"
    },
    "short": {
      "de": "eine organisierte Gruppe von Menschen mit einem gemeinsamen Interesse",
      "en": "an organised group of people with a shared interest",
      "uk": "організована група людей зі спільним інтересом",
      "ru": "организованная группа людей с общим интересом"
    },
    "def": {
      "de": "<g>Etwas Tolles</g> an unserem <b>Verein</b> ist, dass jeder willkommen ist.",
      "en": "Something great about our <b>club</b> is that everyone is welcome.",
      "uk": "Дещо чудове в нашому <b>клубі</b> — те, що всі раді кожному.",
      "ru": "Что-то замечательное в нашем <b>клубе</b> — то, что каждому рады."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k10_050",
    "cat": "k10",
    "term": {
      "de": "die Bewegung",
      "en": "exercise, movement",
      "uk": "рух",
      "ru": "движение"
    },
    "short": {
      "de": "das aktive Nutzen des Körpers, zum Beispiel beim Sport",
      "en": "actively using your body, for example during sport",
      "uk": "активне використання тіла, наприклад під час спорту",
      "ru": "активное использование тела, например во время спорта"
    },
    "def": {
      "de": "<g>Nichts Gesünderes</g> gibt es als tägliche <b>Bewegung</b> an der frischen Luft.",
      "en": "There is nothing healthier than daily <b>exercise</b> in the fresh air.",
      "uk": "Немає нічого кориснішого за щоденний <b>рух</b> на свіжому повітрі.",
      "ru": "Нет ничего полезнее ежедневного <b>движения</b> на свежем воздухе."
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
    "id": "k11_017",
    "cat": "k11",
    "term": {
      "de": "die Geburt",
      "en": "birth",
      "uk": "народження",
      "ru": "рождение"
    },
    "short": {
      "de": "der Moment, in dem ein Kind auf die Welt kommt",
      "en": "the moment a child comes into the world",
      "uk": "момент, коли дитина зʼявляється на світ",
      "ru": "момент, когда ребёнок появляется на свет"
    },
    "def": {
      "de": "<g>Etwas Emotionales</g> war die <b>Geburt</b> ihres ersten Kindes.",
      "en": "Something emotional was the <b>birth</b> of their first child.",
      "uk": "Дещо емоційне — <b>народження</b> їхньої першої дитини.",
      "ru": "Что-то эмоциональное — <b>рождение</b> их первого ребёнка."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_018",
    "cat": "k11",
    "term": {
      "de": "der Kinderwagen",
      "en": "pram, stroller",
      "uk": "дитяча коляска",
      "ru": "детская коляска"
    },
    "short": {
      "de": "ein kleines Fahrzeug, in dem man ein Baby herumschiebt",
      "en": "a small vehicle used to push a baby around",
      "uk": "невеликий візок, у якому возять немовля",
      "ru": "небольшая коляска, в которой возят младенца"
    },
    "def": {
      "de": "<g>Nichts Praktischeres</g> gab es als einen guten <b>Kinderwagen</b> für die ersten Monate.",
      "en": "There was nothing more practical than a good <b>pram</b> for the first months.",
      "uk": "Не було нічого практичнішого за хорошу <b>дитячу коляску</b> для перших місяців.",
      "ru": "Не было ничего практичнее хорошей <b>детской коляски</b> для первых месяцев."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_019",
    "cat": "k11",
    "term": {
      "de": "stillen",
      "en": "to breastfeed",
      "uk": "годувати груддю",
      "ru": "кормить грудью"
    },
    "short": {
      "de": "einem Baby Milch aus der eigenen Brust geben",
      "en": "to feed a baby milk from your own breast",
      "uk": "годувати немовля молоком із власних грудей",
      "ru": "кормить младенца молоком из собственной груди"
    },
    "def": {
      "de": "<g>Das Wichtigste</g> beim <b>Stillen</b> ist die Ruhe für Mutter und Kind.",
      "en": "The most important thing about <b>breastfeeding</b> is calm for mother and child.",
      "uk": "Найважливіше в <b>годуванні груддю</b> — спокій для матері та дитини.",
      "ru": "Самое важное в <b>грудном вскармливании</b> — спокойствие для матери и ребёнка."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_020",
    "cat": "k11",
    "term": {
      "de": "die Hebamme",
      "en": "midwife",
      "uk": "акушерка",
      "ru": "акушерка"
    },
    "short": {
      "de": "eine Fachperson, die Frauen bei der Geburt begleitet",
      "en": "a specialist who accompanies women during childbirth",
      "uk": "фахівчиня, яка супроводжує жінок під час пологів",
      "ru": "специалист, сопровождающий женщин во время родов"
    },
    "def": {
      "de": "<g>Etwas Beruhigendes</g> war die Anwesenheit der erfahrenen <b>Hebamme</b>.",
      "en": "Something reassuring was the presence of the experienced <b>midwife</b>.",
      "uk": "Дещо заспокійливе — присутність досвідченої <b>акушерки</b>.",
      "ru": "Что-то успокаивающее — присутствие опытной <b>акушерки</b>."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_021",
    "cat": "k11",
    "term": {
      "de": "der Vaterschaftsurlaub",
      "en": "paternity leave",
      "uk": "батьківська відпустка (для татусів)",
      "ru": "отпуск для отцов"
    },
    "short": {
      "de": "eine freie Zeit von der Arbeit für Väter nach der Geburt eines Kindes",
      "en": "time off work for fathers after the birth of a child",
      "uk": "вільний від роботи час для батьків після народження дитини",
      "ru": "свободное от работы время для отцов после рождения ребёнка"
    },
    "def": {
      "de": "<g>Nichts Selbstverständlicheres</g> gibt es heute als den <b>Vaterschaftsurlaub</b> für junge Väter.",
      "en": "Nothing is more taken for granted today than <b>paternity leave</b> for young fathers.",
      "uk": "Немає нічого природнішого сьогодні за <b>батьківську відпустку</b> для молодих татусів.",
      "ru": "Нет ничего более естественного сегодня, чем <b>отпуск для отцов</b> для молодых пап."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_022",
    "cat": "k11",
    "term": {
      "de": "wickeln",
      "en": "to change a nappy/diaper",
      "uk": "переодягати підгузок",
      "ru": "менять подгузник"
    },
    "short": {
      "de": "einem Baby eine frische Windel anziehen",
      "en": "to put a fresh nappy on a baby",
      "uk": "одягати немовляті свіжий підгузок",
      "ru": "надевать младенцу свежий подгузник"
    },
    "def": {
      "de": "<g>Das Anstrengendste</g> am Anfang war das ständige <b>Wickeln</b> in der Nacht.",
      "en": "The most exhausting thing at the start was constantly <b>changing nappies</b> at night.",
      "uk": "Найважчим на початку було постійне <b>перевдягання підгузків</b> уночі.",
      "ru": "Самым трудным в начале была постоянная <b>смена подгузников</b> ночью."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_023",
    "cat": "k11",
    "term": {
      "de": "das Neugeborene",
      "en": "newborn",
      "uk": "новонароджений",
      "ru": "новорождённый"
    },
    "short": {
      "de": "ein Baby kurz nach der Geburt",
      "en": "a baby shortly after birth",
      "uk": "немовля незабаром після народження",
      "ru": "младенец вскоре после рождения"
    },
    "def": {
      "de": "<g>Etwas Rührendes</g> war der erste Blick auf das <b>Neugeborene</b>.",
      "en": "Something touching was the first look at the <b>newborn</b>.",
      "uk": "Дещо зворушливе — перший погляд на <b>новонародженого</b>.",
      "ru": "Что-то трогательное — первый взгляд на <b>новорождённого</b>."
    },
    "gram": "adjektive_als_nomen"
  },
  {
    "id": "k11_024",
    "cat": "k11",
    "term": {
      "de": "der Haushalt",
      "en": "household",
      "uk": "домашнє господарство",
      "ru": "домашнее хозяйство"
    },
    "short": {
      "de": "alle Aufgaben, die man braucht, um eine Wohnung oder ein Haus zu führen",
      "en": "all the tasks needed to run a flat or house",
      "uk": "усі справи, потрібні для ведення квартири чи будинку",
      "ru": "все дела, необходимые для ведения квартиры или дома"
    },
    "def": {
      "de": "<g>Während</g> ich arbeite, kümmert sich mein Mann um den <b>Haushalt</b>.",
      "en": "<g>While</g> I work, my husband takes care of the <b>household</b>.",
      "uk": "<g>Поки</g> я працюю, мій чоловік дбає про <b>домашнє господарство</b>.",
      "ru": "<g>Пока</g> я работаю, мой муж заботится о <b>домашнем хозяйстве</b>."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_025",
    "cat": "k11",
    "term": {
      "de": "betreuen",
      "en": "to look after",
      "uk": "доглядати",
      "ru": "присматривать"
    },
    "short": {
      "de": "sich um jemanden kümmern und für ihn sorgen",
      "en": "to take care of someone and look after them",
      "uk": "піклуватися про когось і доглядати за ним",
      "ru": "заботиться о ком-то и присматривать за ним"
    },
    "def": {
      "de": "<g>Während</g> die Großeltern die Kinder <b>betreuen</b>, gehen die Eltern arbeiten.",
      "en": "<g>While</g> the grandparents <b>look after</b> the children, the parents go to work.",
      "uk": "<g>Поки</g> бабуся й дідусь <b>доглядають</b> за дітьми, батьки йдуть на роботу.",
      "ru": "<g>Пока</g> бабушка и дедушка <b>присматривают</b> за детьми, родители идут на работу."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_026",
    "cat": "k11",
    "term": {
      "de": "aufpassen (auf +Akk)",
      "en": "to look after, to watch",
      "uk": "наглядати (за)",
      "ru": "присматривать (за)"
    },
    "short": {
      "de": "darauf achten, dass jemandem nichts passiert",
      "en": "to make sure nothing happens to someone",
      "uk": "стежити, щоб з кимось нічого не сталося",
      "ru": "следить, чтобы с кем-то ничего не случилось"
    },
    "def": {
      "de": "<g>Während</g> ich einkaufe, <b>passt</b> meine Schwester auf die Kinder <b>auf</b>.",
      "en": "<g>While</g> I go shopping, my sister <b>looks after</b> the children.",
      "uk": "<g>Поки</g> я роблю покупки, моя сестра <b>наглядає</b> за дітьми.",
      "ru": "<g>Пока</g> я хожу за покупками, моя сестра <b>присматривает</b> за детьми."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_027",
    "cat": "k11",
    "term": {
      "de": "die Erziehung",
      "en": "upbringing",
      "uk": "виховання",
      "ru": "воспитание"
    },
    "short": {
      "de": "das Fördern und Anleiten eines Kindes durch die Eltern",
      "en": "the guiding and nurturing of a child by its parents",
      "uk": "розвиток і навчання дитини батьками",
      "ru": "развитие и обучение ребёнка родителями"
    },
    "def": {
      "de": "<g>Während</g> beide Eltern für die <b>Erziehung</b> verantwortlich sind, teilen sie sich auch den Haushalt.",
      "en": "<g>While</g> both parents are responsible for the <b>upbringing</b>, they also share the housework.",
      "uk": "<g>Поки</g> обоє батьків відповідають за <b>виховання</b>, вони також ділять домашні обовʼязки.",
      "ru": "<g>Пока</g> оба родителя отвечают за <b>воспитание</b>, они также делят домашние обязанности."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_028",
    "cat": "k11",
    "term": {
      "de": "berufstätig",
      "en": "employed, working",
      "uk": "працевлаштований, зайнятий",
      "ru": "работающий, занятый"
    },
    "short": {
      "de": "eine bezahlte Arbeit oder einen Beruf ausüben",
      "en": "having a paid job or profession",
      "uk": "мати оплачувану роботу чи професію",
      "ru": "иметь оплачиваемую работу или профессию"
    },
    "def": {
      "de": "<g>Während</g> sie <b>berufstätig</b> ist, geht ihr Mann in Elternzeit.",
      "en": "<g>While</g> she is <b>employed</b>, her husband goes on parental leave.",
      "uk": "<g>Поки</g> вона <b>працює</b>, її чоловік іде в декретну відпустку.",
      "ru": "<g>Пока</g> она <b>работает</b>, её муж уходит в декретный отпуск."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_029",
    "cat": "k11",
    "term": {
      "de": "die Elternzeit",
      "en": "parental leave",
      "uk": "батьківська відпустка",
      "ru": "отпуск по уходу за ребёнком"
    },
    "short": {
      "de": "eine bezahlte oder unbezahlte Pause von der Arbeit, um sich um ein Kind zu kümmern",
      "en": "a paid or unpaid break from work to take care of a child",
      "uk": "оплачувана або неоплачувана перерва в роботі для догляду за дитиною",
      "ru": "оплачиваемый или неоплачиваемый перерыв в работе для ухода за ребёнком"
    },
    "def": {
      "de": "<g>Während</g> er in <b>Elternzeit</b> ist, arbeitet seine Partnerin Vollzeit.",
      "en": "<g>While</g> he is on <b>parental leave</b>, his partner works full-time.",
      "uk": "<g>Поки</g> він у <b>батьківській відпустці</b>, його партнерка працює повний день.",
      "ru": "<g>Пока</g> он в <b>отпуске по уходу за ребёнком</b>, его партнёрша работает полный день."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_030",
    "cat": "k11",
    "term": {
      "de": "die Hausarbeit",
      "en": "housework",
      "uk": "хатня робота",
      "ru": "домашняя работа"
    },
    "short": {
      "de": "die täglichen Aufgaben im Haushalt, zum Beispiel Putzen oder Kochen",
      "en": "the daily household tasks, for example cleaning or cooking",
      "uk": "щоденні хатні справи, наприклад прибирання чи готування",
      "ru": "ежедневные домашние дела, например уборка или готовка"
    },
    "def": {
      "de": "<g>Während</g> er kocht, erledigt sie die <b>Hausarbeit</b> im Bad.",
      "en": "<g>While</g> he cooks, she does the <b>housework</b> in the bathroom.",
      "uk": "<g>Поки</g> він готує, вона робить <b>хатню роботу</b> у ванній.",
      "ru": "<g>Пока</g> он готовит, она делает <b>домашнюю работу</b> в ванной."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_031",
    "cat": "k11",
    "term": {
      "de": "sich abwechseln",
      "en": "to take turns",
      "uk": "чергуватися",
      "ru": "чередоваться"
    },
    "short": {
      "de": "eine Aufgabe abwechselnd mit jemand anderem übernehmen",
      "en": "to take on a task alternately with someone else",
      "uk": "виконувати завдання по черзі з кимось іншим",
      "ru": "выполнять задачу по очереди с кем-то ещё"
    },
    "def": {
      "de": "<g>Während</g> die Eltern sich beim Kochen <b>abwechseln</b>, bleibt der Abwasch meistens an den Kindern hängen.",
      "en": "<g>While</g> the parents <b>take turns</b> cooking, the dishes are usually left to the children.",
      "uk": "<g>Поки</g> батьки <b>чергуються</b> у приготуванні їжі, миття посуду зазвичай залишається дітям.",
      "ru": "<g>Пока</g> родители <b>чередуются</b> в готовке, мытьё посуды обычно остаётся детям."
    },
    "gram": "nebensatz_mit_waehrend"
  },
  {
    "id": "k11_032",
    "cat": "k11",
    "term": {
      "de": "die Hilfe",
      "en": "help",
      "uk": "допомога",
      "ru": "помощь"
    },
    "short": {
      "de": "die Unterstützung, die man von jemandem bekommt",
      "en": "the support you receive from someone",
      "uk": "підтримка, яку отримують від когось",
      "ru": "поддержка, которую получают от кого-то"
    },
    "def": {
      "de": "Du <g>brauchst</g> <g>nicht</g> auf <b>Hilfe</b> <g>zu</g> verzichten, nur weil du selbstständig sein willst.",
      "en": "You <g>don't need to</g> do without <b>help</b> just because you want to be independent.",
      "uk": "Тобі <g>не потрібно</g> відмовлятися від <b>допомоги</b> лише тому, що ти хочеш бути самостійним.",
      "ru": "Тебе <g>не нужно</g> отказываться от <b>помощи</b> только потому, что ты хочешь быть самостоятельным."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_033",
    "cat": "k11",
    "term": {
      "de": "sich schämen",
      "en": "to be ashamed",
      "uk": "соромитися",
      "ru": "стыдиться"
    },
    "short": {
      "de": "sich unangenehm fühlen wegen etwas, das man getan hat oder ist",
      "en": "to feel uncomfortable because of something you did or are",
      "uk": "почуватися ніяково через щось зроблене або через себе самого",
      "ru": "чувствовать себя неловко из-за чего-то сделанного или из-за самого себя"
    },
    "def": {
      "de": "Du <g>brauchst</g> dich <g>nicht</g> <g>zu</g> <b>schämen</b>, wenn du um Unterstützung bittest.",
      "en": "You <g>don't need to</g> be <b>ashamed</b> if you ask for support.",
      "uk": "Тобі <g>не потрібно</g> <b>соромитися</b>, якщо просиш підтримки.",
      "ru": "Тебе <g>не нужно</g> <b>стыдиться</b>, если просишь поддержки."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_034",
    "cat": "k11",
    "term": {
      "de": "sich sorgen",
      "en": "to worry",
      "uk": "хвилюватися",
      "ru": "волноваться"
    },
    "short": {
      "de": "sich Gedanken machen, weil man Angst um etwas oder jemanden hat",
      "en": "to feel anxious because you fear for something or someone",
      "uk": "переживати через страх за щось або когось",
      "ru": "переживать из-за страха за что-то или кого-то"
    },
    "def": {
      "de": "Du <g>brauchst</g> dir <g>nicht</g> <g>zu</g> <b>sorgen</b> — wir finden gemeinsam eine Lösung.",
      "en": "You <g>don't need to</g> <b>worry</b> — we will find a solution together.",
      "uk": "Тобі <g>не потрібно</g> <b>хвилюватися</b> — ми разом знайдемо рішення.",
      "ru": "Тебе <g>не нужно</g> <b>волноваться</b> — мы вместе найдём решение."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_035",
    "cat": "k11",
    "term": {
      "de": "die Verantwortung",
      "en": "responsibility",
      "uk": "відповідальність",
      "ru": "ответственность"
    },
    "short": {
      "de": "die Pflicht, für etwas zu sorgen oder die Folgen zu tragen",
      "en": "the duty to take care of something or bear the consequences",
      "uk": "обовʼязок дбати про щось чи нести наслідки",
      "ru": "обязанность заботиться о чём-то или нести последствия"
    },
    "def": {
      "de": "Du <g>brauchst</g> die ganze <b>Verantwortung</b> <g>nicht</g> allein <g>zu</g> tragen.",
      "en": "You <g>don't need to</g> carry the entire <b>responsibility</b> alone.",
      "uk": "Тобі <g>не потрібно</g> нести всю <b>відповідальність</b> самотужки.",
      "ru": "Тебе <g>не нужно</g> нести всю <b>ответственность</b> в одиночку."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_036",
    "cat": "k11",
    "term": {
      "de": "bewältigen",
      "en": "to cope with, to manage",
      "uk": "долати",
      "ru": "справляться"
    },
    "short": {
      "de": "eine schwierige Aufgabe oder Situation erfolgreich meistern",
      "en": "to successfully master a difficult task or situation",
      "uk": "успішно долати складне завдання чи ситуацію",
      "ru": "успешно справляться со сложной задачей или ситуацией"
    },
    "def": {
      "de": "Sie <g>braucht</g> die Probleme <g>nicht</g> allein <g>zu</g> <b>bewältigen</b> — ihre Familie steht ihr zur Seite.",
      "en": "She <g>doesn't need to</g> <b>cope with</b> the problems alone — her family is by her side.",
      "uk": "Їй <g>не потрібно</g> <b>долати</b> проблеми самій — родина поруч.",
      "ru": "Ей <g>не нужно</g> <b>справляться</b> с проблемами одной — семья рядом."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_037",
    "cat": "k11",
    "term": {
      "de": "zögern",
      "en": "to hesitate",
      "uk": "вагатися",
      "ru": "колебаться"
    },
    "short": {
      "de": "nicht sofort handeln, weil man unsicher ist",
      "en": "to not act immediately because you are unsure",
      "uk": "не діяти одразу через невпевненість",
      "ru": "не действовать сразу из-за неуверенности"
    },
    "def": {
      "de": "Du <g>brauchst</g> <g>nicht</g> <g>zu</g> <b>zögern</b>, wenn du Hilfe brauchst — frag einfach.",
      "en": "You <g>don't need to</g> <b>hesitate</b> when you need help — just ask.",
      "uk": "Тобі <g>не потрібно</g> <b>вагатися</b>, коли потрібна допомога, — просто попроси.",
      "ru": "Тебе <g>не нужно</g> <b>колебаться</b>, если нужна помощь, — просто попроси."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_038",
    "cat": "k11",
    "term": {
      "de": "erledigen",
      "en": "to get done, to take care of",
      "uk": "робити, виконувати",
      "ru": "делать, выполнять"
    },
    "short": {
      "de": "eine Aufgabe fertig machen",
      "en": "to finish a task",
      "uk": "завершувати завдання",
      "ru": "завершать задачу"
    },
    "def": {
      "de": "Wir <g>brauchen</g> <g>nicht</g> alles an einem Tag <g>zu</g> <b>erledigen</b>.",
      "en": "We <g>don't need to</g> <b>get</b> everything <b>done</b> in one day.",
      "uk": "Нам <g>не потрібно</g> все <b>зробити</b> за один день.",
      "ru": "Нам <g>не нужно</g> всё <b>сделать</b> за один день."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_039",
    "cat": "k11",
    "term": {
      "de": "sich beweisen",
      "en": "to prove oneself",
      "uk": "доводити щось (собі/іншим)",
      "ru": "доказывать что-то (себе/другим)"
    },
    "short": {
      "de": "anderen zeigen, dass man etwas gut kann, um Anerkennung zu bekommen",
      "en": "to show others you are good at something in order to gain recognition",
      "uk": "показувати іншим, що вмієш щось добре, щоб отримати визнання",
      "ru": "показывать другим, что умеешь что-то хорошо, чтобы получить признание"
    },
    "def": {
      "de": "Du <g>brauchst</g> dich <g>nicht</g> <g>zu</g> <b>beweisen</b>.",
      "en": "You <g>don't need to</g> <b>prove yourself</b>.",
      "uk": "Тобі <g>не потрібно</g> нічого <b>доводити</b>.",
      "ru": "Тебе <g>не нужно</g> ничего <b>доказывать</b>."
    },
    "gram": "nicht_brauchen_zu"
  },
  {
    "id": "k11_040",
    "cat": "k11",
    "term": {
      "de": "die Gleichberechtigung",
      "en": "equality",
      "uk": "рівноправність",
      "ru": "равноправие"
    },
    "short": {
      "de": "das Recht, unabhängig vom Geschlecht gleich behandelt zu werden",
      "en": "the right to be treated equally regardless of gender",
      "uk": "право на однакове ставлення незалежно від статі",
      "ru": "право на равное отношение независимо от пола"
    },
    "def": {
      "de": "<g>Niemand</g> sollte wegen seines Geschlechts benachteiligt werden — <b>Gleichberechtigung</b> betrifft alle.",
      "en": "<g>Nobody</g> should be disadvantaged because of their gender — <b>equality</b> concerns everyone.",
      "uk": "<g>Ніхто</g> не повинен бути обмеженим через свою стать — <b>рівноправність</b> стосується всіх.",
      "ru": "<g>Никто</g> не должен быть ущемлён из-за своего пола — <b>равноправие</b> касается всех."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_041",
    "cat": "k11",
    "term": {
      "de": "das Klischee",
      "en": "stereotype, cliché",
      "uk": "стереотип",
      "ru": "стереотип"
    },
    "short": {
      "de": "eine vereinfachte, oft nicht ganz richtige Vorstellung über etwas",
      "en": "a simplified, often not quite accurate idea about something",
      "uk": "спрощене, часто не зовсім правильне уявлення про щось",
      "ru": "упрощённое, часто не совсем верное представление о чём-то"
    },
    "def": {
      "de": "<g>Manche</g> <b>Klischees</b> über Frauenrollen halten sich hartnäckig.",
      "en": "<g>Some</g> <b>stereotypes</b> about women's roles persist stubbornly.",
      "uk": "<g>Деякі</g> <b>стереотипи</b> про жіночі ролі досі живучі.",
      "ru": "<g>Некоторые</g> <b>стереотипы</b> о женских ролях всё ещё живучи."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_042",
    "cat": "k11",
    "term": {
      "de": "das Vorurteil",
      "en": "prejudice",
      "uk": "упередження",
      "ru": "предрассудок"
    },
    "short": {
      "de": "eine negative Meinung über jemanden, ohne ihn wirklich zu kennen",
      "en": "a negative opinion about someone without really knowing them",
      "uk": "негативна думка про когось без реального знайомства з ним",
      "ru": "негативное мнение о ком-то без реального знакомства с ним"
    },
    "def": {
      "de": "<g>Jeder</g> hat manchmal <b>Vorurteile</b>, auch wenn er es nicht zugeben will.",
      "en": "<g>Everyone</g> has <b>prejudices</b> sometimes, even if they don't want to admit it.",
      "uk": "<g>Кожен</g> іноді має <b>упередження</b>, навіть якщо не хоче цього визнавати.",
      "ru": "<g>Каждый</g> иногда имеет <b>предрассудки</b>, даже если не хочет этого признавать."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_043",
    "cat": "k11",
    "term": {
      "de": "teilen",
      "en": "to share",
      "uk": "ділити",
      "ru": "делить"
    },
    "short": {
      "de": "etwas mit jemand anderem gemeinsam nutzen oder aufteilen",
      "en": "to use or divide something together with someone else",
      "uk": "спільно використовувати або розподіляти щось з кимось",
      "ru": "совместно использовать или распределять что-то с кем-то"
    },
    "def": {
      "de": "<g>Alles</g> im Haushalt sollte gerecht <b>geteilt</b> werden.",
      "en": "<g>Everything</g> in the household should be <b>shared</b> fairly.",
      "uk": "<g>Усе</g> в домашньому господарстві варто чесно <b>ділити</b>.",
      "ru": "<g>Всё</g> в домашнем хозяйстве стоит честно <b>делить</b>."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_044",
    "cat": "k11",
    "term": {
      "de": "die Aufgabe",
      "en": "task",
      "uk": "завдання",
      "ru": "задание"
    },
    "short": {
      "de": "etwas, das man erledigen soll",
      "en": "something you are supposed to get done",
      "uk": "те, що потрібно виконати",
      "ru": "то, что нужно выполнить"
    },
    "def": {
      "de": "<g>Etwas</g> an dieser <b>Aufgabe</b> war typisch für die alte Rollenverteilung.",
      "en": "<g>Something</g> about this <b>task</b> was typical of the old division of roles.",
      "uk": "<g>Дещо</g> в цьому <b>завданні</b> було типовим для старого розподілу ролей.",
      "ru": "<g>Кое-что</g> в этом <b>задании</b> было типичным для старого распределения ролей."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_045",
    "cat": "k11",
    "term": {
      "de": "der Unterschied",
      "en": "difference",
      "uk": "відмінність",
      "ru": "различие"
    },
    "short": {
      "de": "das, was zwei Dinge oder Personen voneinander unterscheidet",
      "en": "what distinguishes two things or people from each other",
      "uk": "те, що відрізняє дві речі чи людей одне від одного",
      "ru": "то, что отличает две вещи или людей друг от друга"
    },
    "def": {
      "de": "<g>Manche</g> <b>Unterschiede</b> zwischen den Geschlechtern sind gesellschaftlich, nicht biologisch.",
      "en": "<g>Some</g> <b>differences</b> between the genders are social, not biological.",
      "uk": "<g>Деякі</g> <b>відмінності</b> між статями є суспільними, а не біологічними.",
      "ru": "<g>Некоторые</g> <b>различия</b> между полами являются общественными, а не биологическими."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_046",
    "cat": "k11",
    "term": {
      "de": "das Vorbild",
      "en": "role model",
      "uk": "взірець",
      "ru": "образец"
    },
    "short": {
      "de": "eine Person, deren Verhalten andere nachahmen wollen",
      "en": "a person whose behaviour others want to imitate",
      "uk": "особа, чию поведінку хочуть наслідувати інші",
      "ru": "лицо, чьё поведение хотят повторить другие"
    },
    "def": {
      "de": "<g>Jemand</g> wie sie kann ein echtes <b>Vorbild</b> für junge Mädchen sein.",
      "en": "<g>Someone</g> like her can be a real <b>role model</b> for young girls.",
      "uk": "<g>Хтось</g> на кшталт неї може бути справжнім <b>взірцем</b> для юних дівчат.",
      "ru": "<g>Кто-то</g> вроде неё может быть настоящим <b>образцом</b> для юных девушек."
    },
    "gram": "indefinitpronomen_possessivpronomen"
  },
  {
    "id": "k11_047",
    "cat": "k11",
    "term": {
      "de": "das Sorgerecht",
      "en": "custody",
      "uk": "опіка",
      "ru": "опека"
    },
    "short": {
      "de": "das gesetzliche Recht, sich um ein Kind zu kümmern und Entscheidungen für es zu treffen",
      "en": "the legal right to take care of a child and make decisions for them",
      "uk": "законне право дбати про дитину та приймати рішення за неї",
      "ru": "законное право заботиться о ребёнке и принимать решения за него"
    },
    "def": {
      "de": "Nachdem sie ihrem Sohn ein kleines <g>Hündchen</g> geschenkt hatte, kümmerte sie sich um das <b>Sorgerecht</b>.",
      "en": "After giving her son a little puppy, she took care of the <b>custody</b> arrangements.",
      "uk": "Подарувавши синові маленьке цуценя, вона зайнялася питанням <b>опіки</b>.",
      "ru": "Подарив сыну маленького щенка, она занялась вопросом <b>опеки</b>."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_048",
    "cat": "k11",
    "term": {
      "de": "der Stiefvater",
      "en": "stepfather",
      "uk": "вітчим",
      "ru": "отчим"
    },
    "short": {
      "de": "der neue Ehemann der Mutter, der nicht der leibliche Vater ist",
      "en": "the mother's new husband, who is not the biological father",
      "uk": "новий чоловік матері, який не є рідним батьком",
      "ru": "новый муж матери, который не является родным отцом"
    },
    "def": {
      "de": "Am Wochenende backte der <b>Stiefvater</b> mit den Kindern ein kleines <g>Brötchen</g>.",
      "en": "At the weekend, the <b>stepfather</b> baked a little bread roll with the children.",
      "uk": "У вихідні <b>вітчим</b> пік із дітьми маленьку булочку.",
      "ru": "В выходные <b>отчим</b> пёк с детьми маленькую булочку."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_049",
    "cat": "k11",
    "term": {
      "de": "die Großfamilie",
      "en": "extended family",
      "uk": "велика родина",
      "ru": "большая семья"
    },
    "short": {
      "de": "eine Familie, zu der auch Großeltern, Onkel, Tanten oder andere Verwandte gehören",
      "en": "a family that also includes grandparents, uncles, aunts or other relatives",
      "uk": "родина, до якої також належать бабусі, дідусі, дядьки, тітки чи інші родичі",
      "ru": "семья, к которой также относятся бабушки, дедушки, дяди, тёти или другие родственники"
    },
    "def": {
      "de": "In der <b>Großfamilie</b> gab es immer ein kleines <g>Törtchen</g> für jeden Geburtstag.",
      "en": "In the <b>extended family</b>, there was always a little cake for every birthday.",
      "uk": "У <b>великій родині</b> завжди був маленький тортик на кожен день народження.",
      "ru": "В <b>большой семье</b> всегда был маленький тортик на каждый день рождения."
    },
    "gram": "nomen_auf_chen"
  },
  {
    "id": "k11_050",
    "cat": "k11",
    "term": {
      "de": "die Regenbogenfamilie",
      "en": "rainbow family (same-sex parent family)",
      "uk": "райдужна сімʼя",
      "ru": "радужная семья"
    },
    "short": {
      "de": "eine Familie, in der die Eltern gleichgeschlechtlich sind",
      "en": "a family in which the parents are of the same sex",
      "uk": "родина, у якій батьки однієї статі",
      "ru": "семья, в которой родители одного пола"
    },
    "def": {
      "de": "Die <b>Regenbogenfamilie</b> zeigte stolz ein kleines <g>Fähnchen</g> vor ihrem Haus.",
      "en": "The <b>rainbow family</b> proudly displayed a little flag in front of their house.",
      "uk": "<b>Райдужна сімʼя</b> гордо повісила маленький прапорець перед будинком.",
      "ru": "<b>Радужная семья</b> гордо повесила маленький флажок перед домом."
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
