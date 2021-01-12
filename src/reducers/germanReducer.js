const initialState = {
  textA1: {
    selectedText: "textA1_2",
    texts: [
      {
        textId: "textA1_1",
        textProp: 0,
        textLabel: "1",
        textTitle: "text one",
      },
      {
        textId: "textA1_2",
        textProp: 1,
        textLabel: "2",
        textTitle: "text two",
      },
      {
        textId: "textA1_3",
        textProp: 2,
        textLabel: "3",
        textTitle: "text three",
      },
    ],
  },
  briefA1: [
    {
      briefTitle: "Brief 1",
      briefName: "Lieber Mirjakhon,",
      briefText:
        "Vielen Dank für deine Mail! Ich habe mich sehr über deine Einladung gefreut und komme gern zu deiner Party. Soll ich etwas mitbringen? Einen Salat oder Kuchen vielleicht? Ich könnte dir nach der Party auch helfen, aufzuräumen, wenn du möchtest. Sag mir einfach Bescheid!",
      briefEndName: "Viele Grüße. Lobar.",
      dbCollectionName: "briefA1-1",
    },
    {
      briefTitle: "Brief 2",
      briefName: "Hallo …",
      briefText:
        "Ich habe gehört, dass du bald deine Deutschprüfung machst. Das ist toll! Bist du nervös? Was musst du denn genau machen? Hast du viel für die Prüfung geübt? Ach, das ist bestimmt gar nicht so schlimm! Du machst das schon! Ich wünsche dir viel Glück!",
      briefEndName: "Viele Grüße Labor.",
      dbCollectionName: "briefA1-2",
    },
    {
      briefTitle: "Brief 3",
      briefName: "Hallo Asis,",
      briefText:
        "Danke für deinen Brief! Also, ich bin etwas nervös. Wir müssen in der Prüfung eine E-Mail schreiben, das ist nicht so einfach. Natürlich habe ich geübt, hoffentlich klappt alles … Sollen wir uns nach der Prüfung vielleicht treffen? Dann erzähle ich dir, wie es war.",
      briefEndName: "Viele Grüße (Ihr Vorname)",
      dbCollectionName: "briefA1-3",
    },
    {
      briefTitle: "Brief 4",
      briefName: "Liebe Nachbarn,",
      briefText:
        "Ich bin gerade umgezogen, deshalb möchte ich eine Party feiern. Ich lade Sie herzlich ein. Die Party findet am 3 ab 18 Uhr statt. Sie müssen nichts, weil ich für alle Getränke kaufe und Pizza mache. Ich freue mich auf Sie! Bitte sagen Sie mir bald Bescheid, ob Sie kommen können.",
      briefEndName: "Viele Grüße (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-4",
    },
    {
      briefTitle: "Brief 5",
      briefName: "Sehr geehrte Damen und Herren,",
      briefText:
        "vor einer Woche habe ich bei Ihnen im Internet ein Deutschbuch bestellt. Das Buch sollte 13 Euro kosten und fand das sehr günstig. Heute habe ich ein Paket von Ihnen bekommen, aber leider war in dem Paket nicht das Deutschbuch, sondern ein Englischbuch! Außerdem ist dieses Englischbuch viel teurer, es kostet 25 Euro. Ich bezahle das Englischbuch natürlich nicht, weil ich es nicht bestellt habe. Bitte schicken Sie mir schnell mein Deutschbuch, denn ich brauche es dringend. Das Englischbuch werde ich morgen wieder an Sie zurückschicken. Die Kosten für das Porto übernehmen Sie.",
      briefEndName: "Mit freundlich Grüßen (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-5",
    },
    {
      briefTitle: "Brief 6",
      briefName: "Sehr geehrte Damen und Herren,",
      briefText:
        "Ich habe Ihre Kaffeemaschine im Internet gesehen und habe ein paar Fragen. Wie alt ist die Kaffeemaschine? Funktioniert sie gut? Und was kostet die Kaffeemaschine? Ich möchte nicht so viel Geld ausgeben. Können Sie die Kaffeemaschine mit der Post schicken oder muss ich sie abholen? Bitte antworten Sie schnell auf meine Fragen. Vielen Dank im Voraus für Ihre Antwort!",
      briefEndName: "Mit freundlichen Grüßen (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-6",
    },
    {
      briefTitle: "Brief 7",
      briefName: "Sehr geehrte Damen und Herren,",
      briefText:
        "Ich habe im Internet gesehen, dass Sie eine Kaffeemaschine verkaufen. Ich finde Ihr Angebot sehr interessant, aber ich habe noch ein paar Fragen zu Ihrer Kaffeemaschine- Wie alt ist sie genau? Hat sie noch Garantie? Funktioniert die Kaffeemaschine auch ohne Probleme? Natürlich müssen wir auch noch über den Preis sprechen. An welchem Betrag haben Sie gedacht? Eine letzte Frage habe ich noch- Ich weiß nicht, ob ich die Kaffeemaschine abholen kann, weil ich kein Auto habe. Können Sie die Maschine auch mit der Post schicken?  Das Porto bezahle ich natürlich! Es wäre sehr nett, wenn Sie mir auf meine Fragen schnell antworten könnten. Vielen Dank im Voraus für Ihre Antwort!",
      briefEndName: "Mit freundlichen Grüßen (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-7",
    },
    {
      briefTitle: "Brief 8",
      briefName: "Sehr geehrte Damen und Herren,",
      briefText:
        "Ich habe bei Ihnen vor einer Woche ein Deutschbuch für 13 Euro bestellt! Heute habe ich ein Paket bekommen. In dem Paket war kein Deutschbuch, sondern ein Englischbuch für 25 Euro! Ich möchte aber kein Englischbuch. Bitte schicken Sie mir mein Deutschbuch. Und was soll ich mit dem Englischbuch machen? Kann ich es zurückschicken?",
      briefEndName: "Mit freundlichen Grüßen (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-8",
    },
    {
      briefTitle: "Brief 9",
      briefName: "Liebe Frau Ferusa,",
      briefText:
        "Vielen Dank für Ihre Einladung zum Sommerfest. Wir kommen gerne und bringen auch etwas zu trinken mit (Saft und Wasser). Leider können wir keinen Kuchen mitbringen, aber mein Mann hat eine andere Idee: Wir bringen Luftballons für die Kinder mit. Die meisten Kinder mögen Luftballons sehr gerne! Mein Mann hilft auch beim Abbauen der Stände, er hat am Abend Zeit.",
      briefEndName: "Viele Grüße (Ihr Vor- und Familienname)",
      dbCollectionName: "briefA1-9",
    },
    {
      briefTitle: "Brief 10",
      briefName: "Liebe Frau Farangis,",
      briefText:
        "Vielen Dank für die Einladung zum Sommerfest. Wir kommen gerne und können natürlich auch helfen. Wir bringen Apfel- und Orangensaft mit. Sie wissen ja, dass wir einen Laden mit arabischen Spezialitäten haben. Wir bringen deshalb auch gerne ein Blech Baklava für das Buffet mit. Leider können wir aber nicht helfen, die Stände aufzubauen. Ich bin schwanger und mein Mann hat Rückenprobleme. Wenn Sie noch Hilfe brauchen, kann ich aber Freunde fragen. Außerdem haben wir noch eine gute Idee für ein lustiges Spiel mit den Eltern und Kindern. Brauchen Sie denn noch Spiele? Ich kann Ihnen das Spiel gerne am Telefon erklären. Wir freuen uns schon auf das Fest.",
      briefEndName: "Viele Grüße (Ihr Vor- und Familienname) ",
      dbCollectionName: "briefA1-10",
    },
  ],
  stunde: [
    {
      key: "1",
      title: "Title 1",
      content:
        "Men biletni 3kun oldin sotib oldim. Men 12-aprelda uchmoqchiman.",
    },
    {
      key: "2",
      title: "Title 2",
      content: "I am the content of the accordion",
    },
    {
      key: "3",
      title: "Title 3",
      content: "I am the content of the accordion",
    },
    {
      key: "4",
      title: "Title 4",
      content: "I am the content of the accordion",
    },
  ],
  question5class: [
    {
      questionId: 0,
      questionName: "II Viertel V KLASS I VARIANT",
      questions: [
        {
          questionText: "Monika … 11 Jahre alt.",
          answerOptions: [
            { answerText: "ist", isCorrect: true },
            { answerText: "seid", isCorrect: false },
            { answerText: "sind", isCorrect: false },
            { answerText: "sein", isCorrect: false },
          ],
        },
        {
          questionText: "Ich wohn… in Taschkent.",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-sein", isCorrect: false },
          ],
        },
        {
          questionText: "Das ist Monika. … lehrnt  Deutsch ",
          answerOptions: [
            { answerText: "Er", isCorrect: false },
            { answerText: "Sie", isCorrect: true },
            { answerText: "Wir", isCorrect: false },
            { answerText: "Es", isCorrect: false },
          ],
        },
        {
          questionText: "Er heiβ… Karim",
          answerOptions: [
            { answerText: "-t", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-e", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Woher komm... du?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-er", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … 10 Jahre alt ?",
          answerOptions: [
            { answerText: "sind", isCorrect: false },
            { answerText: "bin", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sein", isCorrect: false },
          ],
        },
        {
          questionText: "Das ist Jussuf. … kommt aus Fergana.",
          answerOptions: [
            { answerText: "Sie", isCorrect: false },
            { answerText: "Du", isCorrect: false },
            { answerText: "Er", isCorrect: true },
            { answerText: "Es", isCorrect: false },
          ],
        },
        {
          questionText: "Woher kommt Asis?",
          answerOptions: [
            { answerText: "Er kommt in Fergana", isCorrect: false },
            { answerText: "Er kommt aus Fergana", isCorrect: true },
            { answerText: "Er kommmt von Fergana", isCorrect: false },
            { answerText: "Er kommt bei Fergana", isCorrect: false },
          ],
        },
        {
          questionText: "Wie alt ... du?",
          answerOptions: [
            { answerText: "bin", isCorrect: false },
            { answerText: "bist", isCorrect: true },
            { answerText: "ist", isCorrect: false },
            { answerText: "sind", isCorrect: false },
          ],
        },
        {
          questionText: "Islom komm… aus Fergana?",
          answerOptions: [
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-er", isCorrect: false },
          ],
        },
        {
          questionText: "Wie alt bist du?",
          answerOptions: [
            { answerText: "Er ist 10 Jahre alt.", isCorrect: false },
            { answerText: "Ich bin 10 Jahre alt.", isCorrect: true },
            { answerText: "Sie ist 10 Jahre alt.", isCorrect: false },
            { answerText: "Sie sind 10 10 Jahre alt.", isCorrect: false },
          ],
        },
        {
          questionText: "Das ist …Stadt… Stadt ist schön.",
          answerOptions: [
            { answerText: "eine / Die", isCorrect: true },
            { answerText: "ein / Das", isCorrect: false },
            { answerText: "ein / Der", isCorrect: false },
            { answerText: "eine / Der", isCorrect: false },
          ],
        },
        {
          questionText: "Das ist …Familie …Familie ist gross.",
          answerOptions: [
            { answerText: "eine / Die", isCorrect: true },
            { answerText: "ein / Das", isCorrect: false },
            { answerText: "ein / Der", isCorrect: false },
            { answerText: "eine / Das", isCorrect: false },
          ],
        },
        {
          questionText: "... du lesen? ",
          answerOptions: [
            { answerText: "Möchte", isCorrect: false },
            { answerText: "Möchtet", isCorrect: false },
            { answerText: "Mochte", isCorrect: false },
            { answerText: "Möchtest", isCorrect: true },
          ],
        },
        {
          questionText: "Ich … schreiben",
          answerOptions: [
            { answerText: "möchtest", isCorrect: false },
            { answerText: "möchten", isCorrect: false },
            { answerText: "möchtet", isCorrect: false },
            { answerText: "möchte", isCorrect: true },
          ],
        },
        {
          questionText: "Er … arbeiten",
          answerOptions: [
            { answerText: "möchtest", isCorrect: false },
            { answerText: "möchten", isCorrect: false },
            { answerText: "möchtet", isCorrect: true },
            { answerText: "möchte", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … eine Schwester",
          answerOptions: [
            { answerText: "habe", isCorrect: true },
            { answerText: "hat", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: false },
          ],
        },
        {
          questionText: "Er ... ein Zimmer",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "hat", isCorrect: true },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: false },
          ],
        },
        {
          questionText: "... du einen Bruder?",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "hat", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: true },
          ],
        },
        {
          questionText: "Ich wohne in Usbekistan? ... Familie ist groß.",
          answerOptions: [
            { answerText: "Meine", isCorrect: true },
            { answerText: "Deine", isCorrect: false },
            { answerText: "Ihre", isCorrect: false },
            { answerText: "Seine", isCorrect: false },
          ],
        },
        {
          questionText: "Mirjakhon ... einen Spitzer.",
          answerOptions: [
            { answerText: "ist", isCorrect: true },
            { answerText: "bin", isCorrect: false },
            { answerText: "bist", isCorrect: false },
            { answerText: "sein", isCorrect: false },
          ],
        },
        {
          questionText: "Was ist die Hauptstadt Usbekistans?",
          answerOptions: [
            { answerText: "Taschkent", isCorrect: true },
            { answerText: "Buchoro", isCorrect: false },
            { answerText: "Samarkand", isCorrect: false },
            { answerText: "Mein Haus", isCorrect: false },
          ],
        },
        {
          questionText: "Mamaraim ... 13 Jahre alt",
          answerOptions: [
            { answerText: "ist", isCorrect: true },
            { answerText: "bin", isCorrect: false },
            { answerText: "sind", isCorrect: false },
            { answerText: "seid", isCorrect: false },
          ],
        },
        {
          questionText: "Was ... du in der Tasche?",
          answerOptions: [
            { answerText: "ist", isCorrect: false },
            { answerText: "bist", isCorrect: true },
            { answerText: "bin", isCorrect: false },
            { answerText: "sein", isCorrect: false },
          ],
        },
      ],
    },

    {
      questionId: 1,
      questionName: "II Viertel V KLASS II Variant",
      questions: [
        {
          questionText: "Das Buch ... interessant.",
          answerOptions: [
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sein", isCorrect: false },
            { answerText: "habe", isCorrect: false },
          ],
        },
        {
          questionText: "Was mach… du?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: true },
            { answerText: "-eu", isCorrect: false },
            { answerText: "-", isCorrect: false },
          ],
        },
        {
          questionText: "Er spiel... Fuβball.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Wir mach… Karate.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: true },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Ich les… gern.",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Er lies… am liebsten machen.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Was lies… du lieber?",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Wir hör … Musik gern.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: true },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Ich fahr…  Rad.",
          answerOptions: [
            { answerText: "-es", isCorrect: false },
            { answerText: "-e", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Was hör… du am liebsten?",
          answerOptions: [
            { answerText: "-st", isCorrect: true },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Suchra hör… Musik gern. … fahre Rad ",
          answerOptions: [
            { answerText: "-t / Sie", isCorrect: true },
            { answerText: "-t / Ich", isCorrect: false },
            { answerText: "-en / Du", isCorrect: false },
            { answerText: "-es / Er", isCorrect: false },
          ],
        },
        {
          questionText: "… Mathe dein Lieblingsfach?",
          answerOptions: [
            { answerText: "Ist", isCorrect: true },
            { answerText: "Sein", isCorrect: false },
            { answerText: "Hat", isCorrect: false },
            { answerText: "Sind", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … einen Raduergummi.",
          answerOptions: [
            { answerText: "hast", isCorrect: false },
            { answerText: "habe", isCorrect: true },
            { answerText: "haben", isCorrect: false },
            { answerText: "habt", isCorrect: false },
          ],
        },
        {
          questionText: "Peter … einen Spitzer.",
          answerOptions: [
            { answerText: "hast", isCorrect: false },
            { answerText: "habe", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hat", isCorrect: true },
          ],
        },
        {
          questionText: "Monika … einen Heft.",
          answerOptions: [
            { answerText: "hat", isCorrect: true },
            { answerText: "habe", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: false },
          ],
        },
        {
          questionText: "… Buch ist interessant.",
          answerOptions: [
            { answerText: "Das", isCorrect: true },
            { answerText: "Der", isCorrect: false },
            { answerText: "Des", isCorrect: false },
            { answerText: "Die", isCorrect: false },
          ],
        },
        {
          questionText: "Anwar und Ali ruf …. Akbar.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: true },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Komm… du mir?.",
          answerOptions: [
            { answerText: "-st", isCorrect: true },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Wir komme… ins Kino mit.",
          answerOptions: [
            { answerText: "-t", isCorrect: false },
            { answerText: "-", isCorrect: false },
            { answerText: "-n", isCorrect: true },
            { answerText: "-en", isCorrect: false },
          ],
        },
        {
          questionText: "Ich komm… mit.",
          answerOptions: [
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-e", isCorrect: true },
          ],
        },
        {
          questionText: "Beende das Sprichwort: Der Appetit kommt …",
          answerOptions: [
            { answerText: "beim Essen", isCorrect: true },
            { answerText: "selten allein", isCorrect: false },
            { answerText: "zu Fest und Ball", isCorrect: false },
            { answerText: "beim Schlafen", isCorrect: false },
          ],
        },
        {
          questionText: "Ich ... Buch.",
          answerOptions: [
            { answerText: "lese ein", isCorrect: true },
            { answerText: "kaufe einen", isCorrect: false },
            { answerText: "sehe eines", isCorrect: false },
            { answerText: "halte eine", isCorrect: false },
          ],
        },
        {
          questionText: "Die Haupstadt von Deutschland ist ….",
          answerOptions: [
            { answerText: "Taschkent", isCorrect: false },
            { answerText: "Moskau", isCorrect: false },
            { answerText: "Berlin", isCorrect: true },
            { answerText: "Samarkand", isCorrect: false },
          ],
        },
      ],
    },

    {
      questionId: 2,
      questionName: "III Viertel V KLASS  I Variant",
      questions: [
        {
          questionText: "Das Zimmer … hell.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "hat", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … Schüler.",
          answerOptions: [
            { answerText: "bin", isCorrect: true },
            { answerText: "ist", isCorrect: false },
            { answerText: "bist", isCorrect: false },
            { answerText: "sein", isCorrect: false },
          ],
        },
        {
          questionText: "Er … hier.",
          answerOptions: [
            { answerText: "sind", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "bin", isCorrect: false },
          ],
        },
        {
          questionText: "Wir … auch 10 Jahre alt",
          answerOptions: [
            { answerText: "sind", isCorrect: true },
            { answerText: "ist", isCorrect: false },
            { answerText: "bist", isCorrect: false },
            { answerText: "bin", isCorrect: false },
          ],
        },
        {
          questionText: "Mein Opa … sehr alt.",
          answerOptions: [
            { answerText: "sind", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "bin", isCorrect: false },
          ],
        },
        {
          questionText: "Das … ein Pferd",
          answerOptions: [
            { answerText: "sind", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "bin", isCorrect: false },
          ],
        },
        {
          questionText: "Ra’no … das Radio ….",
          answerOptions: [
            { answerText: "schaltet ein", isCorrect: true },
            { answerText: "liest vor", isCorrect: false },
            { answerText: "schreib ab", isCorrect: false },
            { answerText: "bring mit", isCorrect: false },
          ],
        },
        {
          questionText: "Setze die Modalverben!  Ich … lesen",
          answerOptions: [
            { answerText: "kännt", isCorrect: false },
            { answerText: "können", isCorrect: false },
            { answerText: "kann", isCorrect: true },
            { answerText: "kannst", isCorrect: false },
          ],
        },
        {
          questionText: "Wir ... singen",
          answerOptions: [
            { answerText: "will", isCorrect: false },
            { answerText: "wollen", isCorrect: true },
            { answerText: "wollt", isCorrect: false },
            { answerText: "willst", isCorrect: false },
          ],
        },
        {
          questionText:
            "Erganzen sie! Das …uch der …rief, ..all, …aum, utter, …ruder,",
          answerOptions: [
            { answerText: "K", isCorrect: false },
            { answerText: "B", isCorrect: true },
            { answerText: "S", isCorrect: false },
            { answerText: "R", isCorrect: false },
          ],
        },
        {
          questionText: "…nkel, V…gel, kn…pf, str…m,  Hall…",
          answerOptions: [
            { answerText: "O", isCorrect: true },
            { answerText: "U", isCorrect: false },
            { answerText: "E", isCorrect: false },
            { answerText: "K", isCorrect: false },
          ],
        },
        {
          questionText: "Binde das Sprichwort! Aller Anfang ist … ",
          answerOptions: [
            { answerText: "schwer", isCorrect: true },
            { answerText: "leicht", isCorrect: false },
            { answerText: "interessant", isCorrect: false },
            { answerText: "schön", isCorrect: false },
          ],
        },
        {
          questionText: "Wissen ist …. ",
          answerOptions: [
            { answerText: "Macht", isCorrect: true },
            { answerText: "Glück", isCorrect: false },
            { answerText: "der Lohn", isCorrect: false },
            { answerText: "Kost", isCorrect: false },
          ],
        },
        {
          questionText: "Die Bücher sind….",
          answerOptions: [
            { answerText: "klug", isCorrect: false },
            { answerText: "interessant", isCorrect: true },
            { answerText: "fleißig", isCorrect: false },
            { answerText: "Zeitung", isCorrect: false },
          ],
        },
        {
          questionText: "Die Kinder … fur die Vögel",
          answerOptions: [
            { answerText: "sorgen", isCorrect: true },
            { answerText: "fleigen", isCorrect: false },
            { answerText: "singen", isCorrect: false },
            { answerText: "bleiben", isCorrect: false },
          ],
        },
        {
          questionText: "Sitze das Praterum! Der Mann … drei Söhne",
          answerOptions: [
            { answerText: "hatte", isCorrect: true },
            { answerText: "hattest", isCorrect: false },
            { answerText: "hatten", isCorrect: false },
            { answerText: "hattet", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … das Fenster auf(ochmoq,открыть)",
          answerOptions: [
            { answerText: "machtest", isCorrect: false },
            { answerText: "legte", isCorrect: false },
            { answerText: "trant", isCorrect: false },
            { answerText: "machte", isCorrect: true },
          ],
        },
        {
          questionText: "Überstzen Sie. Hunger haben.",
          answerOptions: [
            { answerText: "to’q bo’lmoq / сытый", isCorrect: false },
            { answerText: "och bo’lmoq / голоден", isCorrect: true },
            { answerText: "ichmoq / пить", isCorrect: false },
            {
              answerText: "ayiqdek och qolmoq / голоден как медведь",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "Schreiben wir!",
          answerOptions: [
            { answerText: "Yoz / пиши", isCorrect: false },
            { answerText: "Yozaylik / напишем", isCorrect: true },
            { answerText: "Yozing / напишите", isCorrect: false },
            { answerText: "Yozinglar / напишут", isCorrect: false },
          ],
        },
        {
          questionText: "Das buch liegt … dem Tisch.",
          answerOptions: [
            { answerText: "auf", isCorrect: true },
            { answerText: "an", isCorrect: false },
            { answerText: "in", isCorrect: false },
            { answerText: "zu", isCorrect: false },
          ],
        },
        {
          questionText: "Es ist Frü...ling.",
          answerOptions: [
            { answerText: "-", isCorrect: false },
            { answerText: "k", isCorrect: false },
            { answerText: "h", isCorrect: true },
            { answerText: "l", isCorrect: false },
          ],
        },
        {
          questionText: "Die So…e schient.",
          answerOptions: [
            { answerText: "nn", isCorrect: true },
            { answerText: "nd", isCorrect: false },
            { answerText: "tt", isCorrect: false },
            { answerText: "lk", isCorrect: false },
          ],
        },
      ],
    },
    {
      questionId: 3,
      questionName: "III Viertel V KLASS II VARIANT",
      questions: [
        {
          questionText: "Taschkent ist mehr als… Jahre alt",
          answerOptions: [
            { answerText: "2200", isCorrect: true },
            { answerText: "2700", isCorrect: false },
            { answerText: "2550", isCorrect: false },
            { answerText: "2250", isCorrect: false },
          ],
        },
        {
          questionText: "München liegt in…",
          answerOptions: [
            { answerText: "Russland", isCorrect: false },
            { answerText: "England", isCorrect: false },
            { answerText: "Deutschland", isCorrect: true },
            { answerText: "Usbekistan", isCorrect: false },
          ],
        },
        {
          questionText: "Der Hund … .Akbar",
          answerOptions: [
            { answerText: "meckert", isCorrect: false },
            { answerText: "bellt", isCorrect: true },
            { answerText: "schnattern", isCorrect: false },
            { answerText: "krant", isCorrect: false },
          ],
        },
        {
          questionText: "Ich ruf… Dilbar an",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: false },
          ],
        },
        {
          questionText: "Die Schüler arbeit… im Schulgaten",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-en", isCorrect: true },
            { answerText: "-et", isCorrect: false },
            { answerText: "-est", isCorrect: false },
          ],
        },
        {
          questionText: "Wir koch… auch Sumalak",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: true },
          ],
        },
        {
          questionText: "Alle Kinder hab… Nawrös  gern",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: true },
          ],
        },
        {
          questionText: "Meine Mutter kocht …",
          answerOptions: [
            { answerText: "Sofa", isCorrect: false },
            { answerText: "Nawrös", isCorrect: false },
            { answerText: "Sumalak", isCorrect: true },
            { answerText: "Feiertag", isCorrect: false },
          ],
        },
        {
          questionText: "Unser  Garten ist  gro…",
          answerOptions: [
            { answerText: "-ß", isCorrect: true },
            { answerText: "-b", isCorrect: false },
            { answerText: "-m", isCorrect: false },
            { answerText: "-n", isCorrect: false },
          ],
        },
        {
          questionText: "Übersetzen das Wort? Die Katze",
          answerOptions: [
            { answerText: "mushuk / кошка", isCorrect: true },
            { answerText: "it / собока", isCorrect: false },
            { answerText: "mushukcha / котёнок", isCorrect: false },
            { answerText: "eshki / коза", isCorrect: false },
          ],
        },
        {
          questionText: "Mein Vater … Lehrer.",
          answerOptions: [
            { answerText: "ist", isCorrect: true },
            { answerText: "sind", isCorrect: false },
            { answerText: "bist", isCorrect: false },
            { answerText: "bin", isCorrect: false },
          ],
        },
        {
          questionText: "Schneit .. heute?",
          answerOptions: [
            { answerText: "-", isCorrect: false },
            { answerText: "es", isCorrect: true },
            { answerText: "er", isCorrect: false },
            { answerText: "wir", isCorrect: false },
          ],
        },
        {
          questionText: "Das Jahr hat … Jahreszeiten",
          answerOptions: [
            { answerText: "3", isCorrect: false },
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "4", isCorrect: true },
          ],
        },
        {
          questionText: "Jede Jahreszeit hat … Monate",
          answerOptions: [
            { answerText: "3", isCorrect: true },
            { answerText: "2", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "1", isCorrect: false },
          ],
        },
        {
          questionText: "Malik macht jeden Morgen ….",
          answerOptions: [
            { answerText: "interessiert", isCorrect: false },
            { answerText: "gesund", isCorrect: false },
            { answerText: "die Gymnastik", isCorrect: true },
            { answerText: "rechnen", isCorrect: false },
          ],
        },
        {
          questionText: "Aziza … 11 Jahre alt",
          answerOptions: [
            { answerText: "bist", isCorrect: false },
            { answerText: "seid", isCorrect: false },
            { answerText: "sind", isCorrect: false },
            { answerText: "ist", isCorrect: true },
          ],
        },
        {
          questionText: "Wie alt bist du?",
          answerOptions: [
            { answerText: "Ich bin 18 Jahre alt.", isCorrect: true },
            { answerText: "Du ist 18 Jahre alt.", isCorrect: false },
            { answerText: "Er bist 18 Jahre alt.", isCorrect: false },
            { answerText: "Wir sein 18 Jahre alt.", isCorrect: false },
          ],
        },
        {
          questionText: "Wie heiss… er?",
          answerOptions: [
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-e", isCorrect: false },
          ],
        },
        {
          questionText: "Das ist … Haus.  … Haus ist gross.",
          answerOptions: [
            { answerText: "ein / Das", isCorrect: true },
            { answerText: "eine / Die", isCorrect: false },
            { answerText: "ein / Der", isCorrect: false },
            { answerText: "eines / Den", isCorrect: false },
          ],
        },
      ],
    },

    {
      questionId: 4,
      questionName: "IV Viertel V KLASS I VARIANT",
      questions: [
        {
          questionText: "…ist kalt, …schneit, ….ist spat, …ist Frühling.",
          answerOptions: [
            { answerText: "Das", isCorrect: false },
            { answerText: "Das ist", isCorrect: false },
            { answerText: "Man", isCorrect: false },
            { answerText: "Es", isCorrect: true },
          ],
        },
        {
          questionText: "Ich … Brot und Milch",
          answerOptions: [
            { answerText: "kaufst", isCorrect: false },
            { answerText: "kaufen", isCorrect: false },
            { answerText: "kaufe", isCorrect: true },
            { answerText: "kauft", isCorrect: false },
          ],
        },
        {
          questionText: "Sumalak ist unser …..",
          answerOptions: [
            { answerText: "Heimat", isCorrect: false },
            { answerText: "National", isCorrect: false },
            { answerText: "Nationalgericht", isCorrect: true },
            { answerText: "Plow", isCorrect: false },
          ],
        },
        {
          questionText:
            "Überzetsen Sie. Bizning bog’ katta. / Наш сад большой.",
          answerOptions: [
            { answerText: "Unser Garten ist klein.", isCorrect: false },
            { answerText: "Unser Garten ist klug.", isCorrect: false },
            { answerText: "Unser Garten ist groß.", isCorrect: true },
            { answerText: "Unser Garten ist schon.", isCorrect: false },
          ],
        },
        {
          questionText: "Bu Ra’no.U tirishqoq. / Это Раъно. Она усердная",
          answerOptions: [
            { answerText: "Das ist Ra´no. Sie ist fleißig.", isCorrect: true },
            { answerText: "Das ist Ra´no.", isCorrect: false },
            { answerText: "Sie ist fleißig.", isCorrect: false },
            { answerText: "Das ist Ra´no. Er ist fleißig.", isCorrect: false },
          ],
        },
        {
          questionText:
            "Bizning maktab chiroyli va katta. / Наша школа красивая и большая.",
          answerOptions: [
            { answerText: "Unsere Schule ist klein.", isCorrect: false },
            { answerText: "Unsere Schule ist groß.", isCorrect: false },
            {
              answerText: "Unsere Schule ist schon und groß.",
              isCorrect: true,
            },
            { answerText: "Unsere Schule ist interessant.", isCorrect: false },
          ],
        },
        {
          questionText: "Mening otam o’qituvchi / Мой папа учитель",
          answerOptions: [
            { answerText: "Meine Mutter ist Lehrenin.", isCorrect: false },
            { answerText: "Mein Vater ist Lehrer.", isCorrect: true },
            {
              answerText: "Unsere Schule ist schon und groß.",
              isCorrect: false,
            },
            { answerText: "Unsere Schule ist interessant.", isCorrect: false },
          ],
        },
        {
          questionText: "Mening ismim Monika. / Меня зовут Моника.",
          answerOptions: [
            { answerText: "Ich heisse Monika.", isCorrect: true },
            { answerText: "Ich heißt Malika.", isCorrect: false },
            { answerText: "Ich heißen Ma´mura.", isCorrect: false },
            { answerText: "Ich heiß Munisa.", isCorrect: false },
          ],
        },
        {
          questionText: "Was past nicht.",
          answerOptions: [
            { answerText: "der Wolf", isCorrect: false },
            { answerText: "der Fuchs", isCorrect: false },
            { answerText: "der Bär", isCorrect: false },
            { answerText: "der Apfel", isCorrect: true },
          ],
        },
        {
          questionText: "Das Navrusfest … Im Frühling.",
          answerOptions: [
            { answerText: "kocht man.", isCorrect: false },
            { answerText: "spielt man", isCorrect: false },
            { answerText: "ißt man", isCorrect: false },
            { answerText: "feiert man", isCorrect: true },
          ],
        },
        {
          questionText: "Was mach … du?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Er spiel … Fuβball.",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
          ],
        },
        {
          questionText: "Ich les… gern.",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Er lies…. Am leibsten Machen.",
          answerOptions: [
            { answerText: "-t", isCorrect: true },
            { answerText: "-e", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
          ],
        },
        {
          questionText: "Was lies … du lieber?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-t", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-es", isCorrect: false },
          ],
        },
        {
          questionText: "Wir  sammel… Briefmarken.",
          answerOptions: [
            { answerText: "-n", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-e", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Suchra hör… Musik gern.",
          answerOptions: [
            { answerText: "-t", isCorrect: true },
            { answerText: "-e", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
          ],
        },
        {
          questionText: "Ich hör… Musik gern.",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
          ],
        },
        {
          questionText: "Ich fahr… Rad",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
          ],
        },
        {
          questionText: "Ich wohn… in Taschkent",
          answerOptions: [
            { answerText: "-en", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
          ],
        },
        {
          questionText: "Er heis…. Karim",
          answerOptions: [
            { answerText: "-st", isCorrect: true },
            { answerText: "-t", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-e", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … 10 jahre alt",
          answerOptions: [
            { answerText: "ist", isCorrect: false },
            { answerText: "habe", isCorrect: false },
            { answerText: "bin", isCorrect: true },
            { answerText: "hat", isCorrect: false },
          ],
        },
        {
          questionText: "Wie alt … du?",
          answerOptions: [
            { answerText: "bist", isCorrect: true },
            { answerText: "hast", isCorrect: false },
            { answerText: "bin", isCorrect: false },
            { answerText: "habt", isCorrect: false },
          ],
        },
      ],
    },

    {
      questionId: 5,
      questionName: "IV Viertel V KLASS II VARIANT",
      questions: [
        {
          questionText: "Ich … eine Schwester.",
          answerOptions: [
            { answerText: "habe", isCorrect: true },
            { answerText: "habt", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: false },
          ],
        },
        {
          questionText: "Er … ein Zimmer",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "habt", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hat", isCorrect: true },
          ],
        },
        {
          questionText: "Ich wohne in Uzbekistan. … Familie ist groß.",
          answerOptions: [
            { answerText: "dein", isCorrect: false },
            { answerText: "deine", isCorrect: false },
            { answerText: "mein", isCorrect: false },
            { answerText: "meine", isCorrect: true },
          ],
        },
        {
          questionText: "Hast du einen Hund? Ist ….Hund Klein?",
          answerOptions: [
            { answerText: "mein", isCorrect: false },
            { answerText: "dein", isCorrect: true },
            { answerText: "meine", isCorrect: false },
            { answerText: "meiner", isCorrect: false },
          ],
        },
        {
          questionText: "Was … du in der Tasche?",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "hast", isCorrect: true },
            { answerText: "haben", isCorrect: false },
            { answerText: "hat", isCorrect: false },
          ],
        },
        {
          questionText: "Ich … einer Radiergummi.",
          answerOptions: [
            { answerText: "habe", isCorrect: true },
            { answerText: "habt", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hat", isCorrect: false },
          ],
        },
        {
          questionText: "Mirjakhon … einen Spitzer",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "habt", isCorrect: false },
            { answerText: "haben", isCorrect: false },
            { answerText: "hat", isCorrect: true },
          ],
        },
        {
          questionText: "Dilbar … ein Heft.",
          answerOptions: [
            { answerText: "habe", isCorrect: false },
            { answerText: "hat", isCorrect: true },
            { answerText: "haben", isCorrect: false },
            { answerText: "hast", isCorrect: false },
          ],
        },
        {
          questionText: "Ich les... gern.",
          answerOptions: [
            { answerText: "-e", isCorrect: true },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Was mach… du?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Er spiel… fußball.",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: true },
          ],
        },
        {
          questionText: "Wir komm… ins Kino mit?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: false },
            { answerText: "-en", isCorrect: true },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Komm… du mir?",
          answerOptions: [
            { answerText: "-e", isCorrect: false },
            { answerText: "-st", isCorrect: true },
            { answerText: "-en", isCorrect: false },
            { answerText: "-t", isCorrect: false },
          ],
        },
        {
          questionText: "Das Zimmer … hell.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sind", isCorrect: false },
          ],
        },
        {
          questionText: "Mein Opa … sehr alt.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sind", isCorrect: false },
          ],
        },
        {
          questionText: "Wir … auch 10 jahre  alt.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: false },
            { answerText: "bist", isCorrect: false },
            { answerText: "sind", isCorrect: true },
          ],
        },
        {
          questionText: "Das … ein Pferd.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sind", isCorrect: false },
          ],
        },
        {
          questionText: "Mein Vater … Lehrer.",
          answerOptions: [
            { answerText: "sein", isCorrect: false },
            { answerText: "ist", isCorrect: true },
            { answerText: "bist", isCorrect: false },
            { answerText: "sind", isCorrect: false },
          ],
        },
      ],
    },
  ],
  
  
  
};

export const germanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_TEXT":
      state.textA1.selectedText = action.textId;
      return state;
    default:
      return state;
  }
};

export const changeSelectedText = (textId) => {
  return { type: "CHANGE_SELECTED_TEXT", textId };
};
