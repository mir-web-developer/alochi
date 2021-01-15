
const initialState = {
    textA1: {
        selectedText: "textA1_1",
        texts: [
          {
            textId: "textA1_1",
            textProp: 0,
            textLabel: "1",
            textTitle: "Marias Arbeitstag",
            textContent:"Maria lebt ein Jahr in Deutschland. Sie kommt aus Polen, aber Sascha,ihr Mann, hat die deutsche Staatsangehörigkeit. Irina und Sascha haben zwei Kinder. Pawel geht schon in die Schule und Anna n den Kindergarten. Jetzt hat Maria Zeit, sie möchte Deutsch lernen. Ich spreche ein paar Wörter, aber jetzt lerne ich Deutsch richtig in einer Sprachschule―, sagt sie. Maria geht schon drei Wochen zum Deutschkurs, fünf Tage in der Woche, von Montag bis Freitag, jeden Tag vier Stunden. Wie sieht ein Tag von Irina aus? Irina steht um sechs Uhr mit ihrem Mann auf. Jetzt räumt sie die Wohnung auf und putzt. Danach hat sie endlich Zeit und lernt. Sie macht die Hausaufgaben und lernt neue Wörter. Das ist schwierig, aber es macht auch Spaß. kupowa´c heißt kaufen, sagt sie und sieht in ihr Wörterbuch. Dann ißt sie schnell ein Butterbrot. Kurz vor eins fährt sie zur Schule. 10 Gerade richtig, um halb sieben gibt es Abendessen. Um halb neun schlafen Pawel und Anna. Dann spricht Maria mit Sascha über den Tag. Bald spreche ich gut Deutsch. Das ist toll, sagt Irina. Jetzt kommt Anna. Anna frühstückt und um acht Uhr geht Maria mit Anna zum Kindergarten. Eine halbe Stunde später ist Irina wieder zu Hause Sie frühstücken und 45 Minuten später fährt Sascha zur Arbeit. Dann weckt Irina Pawel, macht Frühstück und Pausenbrote für Pawel. Um halb acht geht er zur Schule. Um vierzehn Uhr beginnt der Kurs. Maria sitzt im Deutschkurs und hört zu. Sie versteht schon viel. Heute lernt sie die Uhrzeiten. Um viertel nach fünf ist mein Kurs zu Ende, sagt Maria. Dann ist sie um achtzehn Uhr zu Hause.",
            textA1Gaps: [
              {original:"der Arbeitstag",translate:"ish kuni"},
              {original:"das Jahr",translate:"yil"},
              {original:"in",translate:"da"},
              {original:"in Deutschland",translate:"Germaniyada"},
              {original:"sie",translate:"u (jenskiy rod)"},
              {original:"kommen",translate:"kelmoq"},
              {original:"aus",translate:"...dan"},
              {original:"aus Polen",translate:"Polshadan"},
              {original:"aber",translate:"lekin"},
              {original:"der Mann",translate:"erkak, erkak kishi"},
              {original:"haben",translate:"ega bo´lmoq, bor bo´lmoq"},
              {original:"deutsch",translate:"nemischa"},
              {original:"Staatsangehörigkeit",translate:"fuqarolik"},
              {original:"und",translate:"va"},
              {original:"zwei",translate:"ikki"},
              {original:"das Kind",translate:"bola"},
              {original:"gehen",translate:"bormoq"},
              {original:"schon",translate:"allaqachon, endi"},
              {original:"in die Schule",translate:"maktabga"},
              {original:"jetzt",translate:"hozir"},
              {original:"Zeit haben",translate:"vaqti bo´lmoq"},
              {original:"möchten",translate:"xoxlamoq"},
              {original:"Deutsch lernen",translate:"nemis tilini o´rganmoq"},
              {original:"ich",translate:"men"},
              {original:"sprechen",translate:"gaplashmoq"},
              {original:"ein paar",translate:"bir juft"},
              {original:"das Wort",translate:"so´z"},
              {original:"richtig",translate:"to´g´ri"},
              {original:"in einer Sprachschule",translate:"til markazida"},
              {original:"sagen",translate:"aztmoq"},
              {original:"drei",translate:"uch"},
              {original:"die Woche",translate:"hafta"},
              {original:"zum Deutschkurs",translate:"nemis tili kursiga"},
              {original:"fünf",translate:"besh"},
              {original:"der Tag",translate:"kun"},
              {original:"in der Woche",translate:"haftada"},
              {original:"der Montag",translate:"dushanba"},
              {original:"der Freitag",translate:"juma"},
              {original:"von Montag bis Freitag",translate:"dushanbadan jumagacha"},
              {original:"vier",translate:"to´rt"},
              {original:"die Stunde",translate:"soat, dars"},
              {original:"wie",translate:"qanday"},
              {original:"aussehen",translate:"ko´rinmoq"},
              {original:"von Irina",translate:"Irinaning"},
              {original:"aufstehen",translate:"o´rnidan turmoq"},
              {original:"sechs",translate:"olti"},
              {original:"die Uhr",translate:"soat"},
              {original:"um 6 Uhr",translate:"soat oltida"},
              {original:"mit",translate:"bilan"},
              {original:"mit ihrem Mann",translate:"o´zining eri bilan"},
              {original:"aufräumen",translate:"tozalamoq"},
              {original:"die Wohnung",translate:"xona, kvartira"},
              {original:"putzen",translate:"artmoq"},
              {original:"danach",translate:"undan keyin"},
              {original:"endlich",translate:"nihoyat"},
              {original:"die Hausaufgabe",translate:"Uyga vazifalar"},
              {original:"machen",translate:"bajarmoq"},
              {original:"neu",translate:"yangi"},
              {original:"das",translate:"bu"},
              {original:"schwierig",translate:"qiyin"},
              {original:"auch",translate:"ham"},
              {original:"spaß machen",translate:"huzur baxsh etmoq"},
              {original:"heißen",translate:"atalmoq"},
              {original:"kaufen",translate:"sotib olmoq"},
              {original:"sehen",translate:"ko´rmoq"},
              {original:"in Wörterbuch",translate:"lug´atda"},
              {original:"dann",translate:"keyin"},
              {original:"leben",translate:"yashamoq"},
              {original:"essen",translate:"yemoq"},
              {original:"schnell",translate:"tez"},
              {original:"das Butterbrot",translate:"buterbrot"},
              {original:"kurz",translate:"qisqa"},
              {original:"kurz vor eins",translate:"biroz oldin"},
              {original:"fahren",translate:"bormoq(texnikada)"},
              {original:"gerade",translate:"oddiygina"},
              {original:"um halb sieben",translate:"6.30 da"},
              {original:"gibt es",translate:"bor bo´lmoq"},
              {original:"das Abendessen",translate:"kechki nonushta"},
              {original:"schlafen",translate:"uhlamoq"},
              {original:"in den Kindergarten",translate:"bolalar bog´chasiga"},
              {original:"zu Hause",translate:"Uyda"},
              {original:"über den Tag",translate:"kun haqida"},
              {original:"bald",translate:"tezda"},
              {original:"gut",translate:"yaxshi"},
              {original:"toll",translate:"yaxshi,zo´r"},
              {original:"frühstücken",translate:"nonushta qilmoq"},
              {original:"später",translate:"kechroq"},
              {original:"wieder",translate:"zana"},
              {original:"zur Arbeit",translate:"ishga"},
              {original:"wecken",translate:"uyg´otmoq"},
              {original:"für Pawel",translate:"Pavel uchun"},
              {original:"beginnen",translate:"boshlanmoq"},
              {original:"sitzen",translate:"o´tirmoq"},
              {original:"im Deutschkurs",translate:"nemis tili kursiga"},
              {original:"zuhören",translate:"quloq solmoq"},
              {original:"verstehen",translate:"tushunmoq"},
              {original:"viel",translate:"ko´p"},
              {original:"heute",translate:"bugun"},
              {original:"die Uhrzeiten",translate:"vaqt"},
              {original:"viertel",translate:"chorak"},
              {original:"mein",translate:"mening"},
              {original:"zu Ende",translate:"oxirida, nihoyasida"},
              {original:"sein",translate:"bo´lmoq"},
                ],
          },
          {
            textId: "textA1_2",
            textProp: 1,
            textLabel: "2",
            textTitle: "Unsere Freizeit",
            textContent:"Unser Leben ist ohne Arbeit undenkbar. Wir können uns unser Leben 11 auch ohne angenehm verbrachte Freizeit nicht vorstellen. Jeder gestaltet seine Freizeit nach seinem Geschmack. Man kann sich entspannen, viele Menschen gehen ihrer Lieblingsbeschäftigung nach. Die anderen treiben Sport, lesen, hören Musik, sehen fern, spielen am Computer, quatschen mit den Freunden. Am Wochenende kann man die Strapazen des Alltags vergessen. Wenn das Wetter schön ist, fahren viele Städter ins Grüne. Man macht einen Ausflug, ein Picknick im Freien oder verbringt das Wochenende auf dem Lande. Es ist gesund, ein paar Stunden mitten in der Natur zu verbringen, frische Luft einzuatmen und für einige Zeit den Stadtlärm zu vergessen. Wenn es aber kalt oder regnerisch ist, macht man sich zu Hause gemütlich. Man kann diese Zeit mit seinen Freunden oder im Kreis der Familie verbringen. Manchmal verbringt man seine Freizeit mit sich allein. Es ist angenehm, sich nach der Hektik in den gemütlichen Sessel zu setzen und ruhige Musik zu hören oder ein Buch zu lesen. In den Städten gibt es viele Möglichkeiten, die Freizeit zu gestalten. Man kann ins Theater oder ins Konzert gehen. Uns stehen zahlreiche Kinos, Ausstellungen, Museen zur Verfügung. Zu den beliebtesten und erlebnisreichsten Freizeitbeschäftigungen gehören Wandern und Reisen. Dabei lernen wir viel kennen, erweitern unseren Horizont und bekommen viele neue Eindrücke. ",
            textA1Gaps: [
              {original:"unser",translate:"bizning"},
              {original:"unsere Freizeit",translate:"bizning bo´sh vaqt"},
              {original:"das Leben",translate:"hayot"},
              {original:"ohne Arbeit",translate:"ishsiz"},
              {original:"undenkbar",translate:"aql bovar qilmas"},
              {original:"wir",translate:"biz"},
              {original:"können",translate:"qila olmoq"},
              {original:"auch",translate:"ham"},
              {original:"angenehm",translate:"yoqimli"},
              {original:"sich vorstellen",translate:"tanishtirmoq"},
              {original:"verbringen",translate:"o´tkazmoq"},
              {original:"nicht",translate:"yo´q"},
              {original:"jeder",translate:"har biri"},
              {original:"gestalten",translate:"mo'ljallangan"},
              {original:"seine Freizeit",translate:"o´zining bo´sh vaqti"},
              {original:"nach seinem Geschmack",translate:"mazasiga ko´ra"},
              {original:"man kann",translate:"mumkun"},
              {original:"sich entspannen",translate:"tinchlanmq"},
              {original:"viel",translate:"ko´p"},
              {original:"der Mensch",translate:"inson, odam"},
              {original:"nachgehen",translate:"shug´urlanmoq"},
              {original:"die Lieblingsbeschäftigung",translate:"sevimli mashg´uloti bilan"},
              {original:"die anderen",translate:"boshqalar"},
              {original:"treiben Sport",translate:"sport bilan shug´urlanmoq"},
              {original:"lesen",translate:"o´qimoq"},
              {original:"hören Musik",translate:"Musiqa eshitmoq"},
              {original:"fernsehen",translate:"televizor ko´rmoq"},
              {original:"spielen",translate:"o´ynamoq"},
              {original:"spielen am Computer",translate:"kompyuterda o´ynamoq"},
              {original:"quatschen",translate:"vaysamoq"},
              {original:"mit den Freunden",translate:"do´stlari bilan"},
              {original:"am Wochenende",translate:"Hafta oxirida"},
              {original:"der Alltag",translate:"hamma kun"},
              {original:"vergessen",translate:"unutmoq"},
              {original:"wenn",translate:"agar"},
              {original:"das Wetter",translate:"obu-havo"},
              {original:"schön",translate:"chiroyli"},
              {original:"fahren",translate:"bormoq(texnikada)"},
              {original:"die Städter",translate:"shaharliklar"},
              {original:"ins Grüne",translate:"yaylovga"},
              {original:"einen Ausflug machen",translate:"ekskursiya qilmoq"},
              {original:"im Ferien",translate:"ta´tilda"},
              {original:"oder",translate:"yoki"},
              {original:"auf dem Lande",translate:"qishloqda"},
              {original:"gesund",translate:"sog´lom"},
              {original:"ein paar Stunden",translate:"bir necha soat"},
              {original:"mitten",translate:"o´rtasida"},
              {original:"in der Natur",translate:"tabiatda"},
              {original:"frisch",translate:"toza, musaffo"},
              {original:"einatmen",translate:"nafas olmoq"},
              {original:"für einige Zeit",translate:"biroz vaqtga"},
              {original:"der Stadtlärm",translate:"shahar shovqini"},
              {original:"aber",translate:"lekin"},
              {original:"kalt",translate:"sovuq"},
              {original:"regnerisch",translate:"yomg´irli"},
              {original:"zu Hause",translate:"uyda"},
              {original:"gemütlich",translate:"qulay"},
              {original:"im Kreis der Familie",translate:"Oila davrasida"},
              {original:"manchmal",translate:"ba´zan"},
              {original:"allein",translate:"yolg´iz"},
              {original:"der Sessel",translate:"kreslo"},
              {original:"sich setzen",translate:"o´tirmoq"},
              {original:"ruhig",translate:"tinch"},
              {original:"das Buch",translate:"kitob"},
              {original:"ein Buch lesen",translate:"kitob o´qimoq"},
              {original:"in den Städten",translate:"shaharlarda"},
              {original:"die Möglichkeiten",translate:"imkoniyatlar"},
              {original:"gibt es",translate:"bor bo´lmoq"},
              {original:"ins Theater",translate:"teatrga"},
              {original:"ins Konzert",translate:"konsertga"},
              {original:"gehen",translate:"bormoq(piyoda)"},
              {original:"uns",translate:"bizga, bizni"},
              {original:"zahlreich",translate:"ko´p sonli"},
              {original:"das Kino",translate:"kino"},
              {original:"Ausstellung",translate:"ko´rgazma"},
              {original:"Museen",translate:"muzeylar"},
              {original:"zur Verfügung",translate:"mavjud"},
              {original:"Zu den beliebtesten",translate:"eng sevimlilariga"},
              {original:"zu den erlebnisreichsten",translate:"eng boy holatlarga"},
              {original:"die Freizeitbeschäftigungen",translate:"bo´sh vaqtdagi mashg´ulotlar"},
              {original:"gehören",translate:"tegishli bo´lmoq"},
              {original:"wandern",translate:"sayohat qilmoq"},
              {original:"reisen",translate:"aylanib kelmoq, sayohat qilmoq"},
              {original:"dabei",translate:"bunda"},
              {original:"kennenlernen",translate:"bilib olmoq"},
              {original:"erweitern",translate:"kengaytirmoq"},
              {original:"bekommen",translate:"qabul qilmoq"},
              {original:"neu",translate:"yangi"},
              {original:"die Eindrücke",translate:"taassurot"},
                ],
          },
          {
            textId: "textA1_3",
            textProp: 2,
            textLabel: "3",
            textTitle: "Mein Arbeitstag",
            textContent:"Ich stehe jeden Tag um 7 (sieben) Uhr auf. Gewöhnlich weckt mich meine Mutter oder mein Wecker, aber manchmal erwache ich von selbst. Schnell lüfte ich mein Zimmer und mache mein Bett. Ich mache Morgengymnastik und gehe dann ins Bad. Ich wasche mich und putze die Zähne. Dann  18 ziehe ich mich schnell an und kämme mich. Um halb acht setze ich mich an den Tisch und frühstücke. Gewöhnlich trinke ich eine Tasse Kaffee mit Milch, Kakao oder Tee und esse belegte Brötchen mit Wurst, Schinken oder Käse. Manchmal esse ich noch Joghurt. In einer Viertelstunde bin ich __________(7) fertig. Ich ziehe meine Jacke an und gehe um 8 (acht) Uhr los. Ich wohne nicht weit von meiner Schule. Für meinen Schulweg brauche ich eine Viertelstunde. Ich fahre mit dem Bus und gehe zu Fuß. Die BusHaltestelle ist in der Nähe. Aber ich fahre nicht gern mit dem Bus, denn er ist immer voll. Ich komme in die Schule immer pünktlich. Der Unterricht beginnt um halb neun. Wir haben täglich fünf bis sechs Stunden. Um halb drei bin ich schon frei. Ich gehe nach Hause. Nach dem Mittagessen ruhe ich mich aus: ich gehe spazieren oder sehe fern. Dann mache ich mich an die Hausaufgaben.",
            textA1Gaps: [
              {original:"nemis tilida",translate:"tarjimasi"},
              {original:"nemis tilida",translate:"tarjimasi"},
                ],
          },
          {
            textId: "textA1_3",
            textProp: 3,
            textLabel: "4",
            textTitle: "Iss was, Deutschland?",
            textContent:"Eine Studie der Techniker Krankenkasse. Wie essen die Deutschen? Was ist den Deutschen beim Essen wichtig? Das hat eine Studie der Techniker Krankenkasse untersucht. Hier sind einige Ergebnisse: In nur 50 Prozent der Haushalte in Deutschland kochen die Menschen jeden Tag selbst. In jedem dritten Haushalt kochen die Menschen nur drei- bis fünfmal pro Woche. Warum? Keine Zeit, sagen viele. Andere kochen nicht gern. Oder sie denken: Das ist zu viel Arbeit. In vielen Familien gibt es ein- bis zweimal pro Woche Fertiggerichte wie Tiefkühlpizza, Tütensuppe oder Konserven. Essen ist Nebensache. Bei jedem Dritten läuft beim Essen der Fernseher oder der Computer. Besonders junge Menschen haben nicht viel Zeit – oder wollen sich keine Zeit nehmen. Beim Essen sehen 40 Prozent der Menschen unter 25 Jahren fern oder sie surfen im Internet. Ist Essen allein langweilig? Fast 60 Prozent der jungen Menschen sagen: Essen muss lecker sein. Sie essen oft Fertiggerichte und Fastfood: 60 Prozent essen mindestens einmal pro Woche ein Fertiggericht. 33 Prozent essen mindestens dreimal pro Woche im Schnellimbiss – Burger, Pommes oder Currywurst. 90 Prozent der Menschen unter 25 Jahren sagen: Wir essen nicht sehr gesund.―",
            textA1Gaps: [
              {original:"nemis tilida",translate:"tarjimasi"},
              {original:"nemis tilida",translate:"tarjimasi"},
                ],
          },
          {
            textId: "textA1_3",
            textProp: 4,
            textLabel: "5",
            textTitle: "Große Gesundheitsumfrage: Leben Sie gesund?",
            textContent:"Marina Beketova, 27 (Studentin). Ich mache jeden Morgen Sport. Das  26 ____________ (1) ich. Ich stehe jeden Tag um 7.00 Uhr auf und gehe eine Stunde ____________ (2). Dann dusche ich und frühstücke. Danach fahre ich mit dem Fahrrad in die Universität. Mittags mache ich eine Pause. Ich gehe in die Cafeteria, treffe Freunde und esse etwas. An zwei Nachmittagen habe ich frei. Dann gehe ich schwimmen. Sport ist gesund und tut gut. Konstantinos Antoniadis, 53 (Kellner) Meine Gesundheit? Ja, die ist mir sehr wichtig! Ich lebe ____________ (3). Da gibt es viel Natur und die Luft ist noch gut. In der Stadt gibt es zu viele Autos. Ich fahre selbst viel Auto, aber im Sommer fahre ich auch gerne Fahrrad. Ich arbeite ____________ (4). Da muss man viel stehen und gehen. Oft ____________ (5) mir dann am Abend die Füße weh und ich habe auch ein bisschen Rückenschmerzen. Dann gehe ich schwimmen und es geht mir wieder gut. Sabine Köhler, 26 (Arzthelferin) Ich bin Arzthelferin. Mein Beruf gefällt mir gut, aber am Abend bin ich oft sehr müde. Dann ____________ (6) ich zu Hause noch putzen, waschen und kochen. Ich habe nämlich einen Sohn: Mike. Er geht schon ____________ (7). Am Nachmittag ____________ (8) er viel Sport. Er spielt gern Fußball. Am Abend hat er dann natürlich Hunger. Er ____________ (9) kein Fast Food essen, also koche ich alles frisch. Das braucht Zeit, aber manchmal ____________ (10) mir Mike auch",
            textA1Gaps: [
              {original:"nemis tilida",translate:"tarjimasi"},
              {original:"nemis tilida",translate:"tarjimasi"},
                ],
          },
          {
            textId: "textA1_3",
            textProp: 5,
            textLabel: "6",
            textTitle: "text three",
            textContent:"Culpa nostrud in exercitation enim esse culpa nulla. Ipsum ipsum incididunt duis mollit velit elit id adipisicing consectetur dolor do. Aliqua ad elit ad in quis.",
            textA1Gaps: [
              {original:"nemis tilida",translate:"tarjimasi"},
              {original:"nemis tilida",translate:"tarjimasi"},
                ],
          },
        ],
      },
  }
  
  
  
  export const germanTextA1Reducer = (state = initialState, action) => {
    switch (action.type) {
            case "CHANGE_SELECTED_TEXT":
              state.textA1.selectedText = action.textId;
              return state;
        default: return state
    }
  };
  export const changeSelectedText = (textId) => {
    return { type: "CHANGE_SELECTED_TEXT", textId };
  };
  