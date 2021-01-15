
const initialState = { 
  question6class: [
    {
      questionId: 0,
      questionName: "I Viertel VI KLASS I VARIANT",
      questions: [
        {
          questionText: "Ergänzen Sie! Meine  Heimat  ist …! ",
          answerOptions: [
            { answerText: "Usbekistan", isCorrect: true },
            { answerText: "Nawai", isCorrect: false },
            { answerText: "Buchora", isCorrect: false },
            { answerText: "Samarkand", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Usbekisch  “Wissen”?",
          answerOptions: [
            { answerText: "bilmoq / знать", isCorrect: true },
            { answerText: "o´qimoq / читать", isCorrect: false },
            { answerText: "ko´rmoq / видеть", isCorrect: false },
            { answerText: "bormoq / идти", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  heiβt  die Hauptstadt  von  Deutschland? ",
          answerOptions: [
            { answerText: "Berlin", isCorrect: true },
            { answerText: "Bonn", isCorrect: false },
            { answerText: "Hamburg", isCorrect: false },
            { answerText: "Samarkand", isCorrect: false },
          ],
        },
        {
          questionText: "Wieviel  Bundesländer  gibt  es  in  Deutschland?",
          answerOptions: [
            { answerText: "15", isCorrect: false },
            { answerText: "16", isCorrect: true },
            { answerText: "17", isCorrect: false },
            { answerText: "12", isCorrect: false },
          ],
        },
        {
          questionText: "Ergänzen Sie! Am  See  kann  man …..",
          answerOptions: [
            { answerText: "Fische  fangen  und  braten", isCorrect: true },
            { answerText: "im  Garten  arbeiten", isCorrect: false },
            { answerText: "Tiere  füttern", isCorrect: false },
            { answerText: "schlafen", isCorrect: false },
          ],
        },
        {
          questionText: "Ergänzen Sie! Wenn  wir  im  Fluss  gehen,... .",
          answerOptions: [
            { answerText: "lesen wir ein Buch.", isCorrect: false },
            { answerText: "füttern die Tiere.", isCorrect: true },
            { answerText: "lügen wir in der Sonne.", isCorrect: false },
            { answerText: "spielen wir Fußball.", isCorrect: false },
          ],
        },
        {
          questionText: "Ergänzen Sie! Wenn  wir  Freizeit  haben,... .",
          answerOptions: [
            { answerText: "schlafen", isCorrect: false },
            { answerText: "in der Sonne liegen.", isCorrect: false },
            { answerText: "arbeiten wir im Garten.", isCorrect: true },
            { answerText: "bleibe zu Hause.", isCorrect: false },
          ],
        },
        {
          questionText:
            "Wie  übersetzt  man auf  Usbekisch  “ein  Picknick  machen”? ",
          answerOptions: [
            { answerText: "bazm  qilmoq / праздновать", isCorrect: true },
            {
              answerText: "Velosiped  uchmoq / кататься на велосипеде.",
              isCorrect: false,
            },
            {
              answerText: "tennis  o`ynamoq / играть в теннис.",
              isCorrect: false,
            },
            {
              answerText: "televizor ko`rmoq / смотреть ТВ.",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "Wie übersetzt  man  auf  Usbekisch  “wilde  Feur  springen”",
          answerOptions: [
            { answerText: "bazm  qilmoq / праздновать", isCorrect: false },
            {
              answerText: "Velosiped  uchmoq / кататься на велосипеде.",
              isCorrect: false,
            },
            {
              answerText: "tennis  o`ynamoq / играть в теннис.",
              isCorrect: false,
            },
            {
              answerText: "olovdan  sakramoq  / прыжки через огонь",
              isCorrect: true,
            },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  das  Wort  “wilde  Welt”? ",
          answerOptions: [
            { answerText: "hayvonlar / животные", isCorrect: false },
            {
              answerText: "yovvoyi hayvonlar / дикие животные",
              isCorrect: true,
            },
            { answerText: "hayvonot olami / мир животных", isCorrect: false },
            {
              answerText: "xonaki hayvonlar / домашние животные",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "Welches Tier ist sehr schön?",
          answerOptions: [
            { answerText: "der Fuchs", isCorrect: false },
            { answerText: "der Pfau", isCorrect: true },
            { answerText: "der Wolf", isCorrect: false },
            { answerText: "der Hase", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist so lang? ",
          answerOptions: [
            { answerText: "die Schnecke", isCorrect: false },
            { answerText: "die Schlange", isCorrect: true },
            { answerText: "der Bär", isCorrect: false },
            { answerText: "der Hase", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist fleiβig?",
          answerOptions: [
            { answerText: "die Ameise", isCorrect: true },
            { answerText: "die Schmecke", isCorrect: false },
            { answerText: "der Bär", isCorrect: false },
            { answerText: "die Schlange", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier geht so langsam?",
          answerOptions: [
            { answerText: "die Schnecke", isCorrect: true },
            { answerText: "die Schlange", isCorrect: false },
            { answerText: "der Pfau", isCorrect: false },
            { answerText: "der Löwe", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist so stark?",
          answerOptions: [
            { answerText: "die Ameise", isCorrect: false },
            { answerText: "die Schnecke", isCorrect: false },
            { answerText: "der Bär", isCorrect: true },
            { answerText: "der Hase", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist so mutig?",
          answerOptions: [
            { answerText: "der Wolf", isCorrect: false },
            { answerText: "der Hase", isCorrect: false },
            { answerText: "der Löwe", isCorrect: true },
            { answerText: "der Fuchs", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist frech?",
          answerOptions: [
            { answerText: "die Ameise", isCorrect: false },
            { answerText: "der Schnecke", isCorrect: false },
            { answerText: "der Affe", isCorrect: true },
            { answerText: "der Hase", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist immer hungrig?",
          answerOptions: [
            { answerText: "der Pfau", isCorrect: false },
            { answerText: "der Wolf", isCorrect: true },
            { answerText: "die Ameise", isCorrect: false },
            { answerText: "der Elefant", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist so stolz?",
          answerOptions: [
            { answerText: "der Fuchs", isCorrect: false },
            { answerText: "der Pfau", isCorrect: true },
            { answerText: "die Ameise", isCorrect: false },
            { answerText: "der Affe", isCorrect: false },
          ],
        },
        {
          questionText: "Welches Tier ist sehr Schlau?",
          answerOptions: [
            { answerText: "der Elefant", isCorrect: false },
            { answerText: "der Wolf", isCorrect: false },
            { answerText: "der Fuchs", isCorrect: true },
            { answerText: "die Ameise", isCorrect: false },
          ],
        },
        {
          questionText: "Welches  Tier  kann  Milch  geben?",
          answerOptions: [
            { answerText: "die Kuh", isCorrect: true },
            { answerText: "das Pferd", isCorrect: false },
            { answerText: "der Essel", isCorrect: false },
            { answerText: "die Schnecke", isCorrect: false },
          ],
        },
        {
          questionText: "Welches  Tier  kann  Eier  legen?",
          answerOptions: [
            { answerText: "der Hahn", isCorrect: false },
            { answerText: "das Huhn", isCorrect: true },
            { answerText: "der Hund", isCorrect: false },
            { answerText: "die Ameise", isCorrect: false },
          ],
        },
      ],
    },

    {
      questionId: 1,
      questionName: "II Viertel VI KLASS I VARIANT",
      questions: [
        {
          questionText: "Übersetzen sie ins Deutsche? “Oila / Семья”",
          answerOptions: [
            { answerText: "die Familie", isCorrect: true },
            { answerText: "die Eltern", isCorrect: false },
            { answerText: "die Kinder", isCorrect: false },
            { answerText: "das Mädchen", isCorrect: false },
          ],
        },
        {
          questionText: "“Kusine” übersetze ins Usbekisch und Russisch! ",
          answerOptions: [
            { answerText: "Xola / тётя", isCorrect: false },
            { answerText: "amakivachcha / племянник", isCorrect: true },
            { answerText: "xolavachcha / племянница", isCorrect: false },
            { answerText: "uka / брат", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Usbekisch  das  Wort  “Eltern”",
          answerOptions: [
            { answerText: "ota - ona / родители", isCorrect: true },
            { answerText: "aka-uka / Братья", isCorrect: false },
            { answerText: "opa - singil / сёстры", isCorrect: false },
            { answerText: "aka-uka opa-singil / братья и сёстры", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Usbekisch oder auf Russisch  das  Wort  “Groβeltern”",
          answerOptions: [
            { answerText: "bobo-buvi / бабушка и дедушка", isCorrect: true },
            { answerText: "Ota-ona / родители", isCorrect: false },
            { answerText: "Opa-singil / сёстры", isCorrect: false },
            { answerText: "aka-uka / Братья", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Usbekisch oder auf Russisch  das  Wort  “Groβvater”",
          answerOptions: [
            { answerText: "bobo-buvi / бабушка и дедушка", isCorrect: false },
            { answerText: "Ota / папа", isCorrect: true },
            { answerText: "Opa-singil / сёстры", isCorrect: false },
            { answerText: "aka-uka / Братья", isCorrect: false },
          ],
        },
        {
          questionText: "Wie übersetzt man auf Deutsche das Wort “buvi / бабушка”?",
          answerOptions: [
            { answerText: "die Großmutter", isCorrect: false },
            { answerText: "der Großvater", isCorrect: true },
            { answerText: "die Großeltern", isCorrect: false },
            { answerText: "die Eltern", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Deutsche  das  Wort  “amaki-tog`a / дядя”?",
          answerOptions: [
            { answerText: "die Tante", isCorrect: false },
            { answerText: "der Onkel", isCorrect: true },
            { answerText: "der Vater", isCorrect: false },
            { answerText: "der Großeltern", isCorrect: false },
          ],
        },
        {
          questionText: "Wie  übersetzt  man  auf  Usbekisch oder auf Russisch  das  Wort  “Groβvater”",
          answerOptions: [
            { answerText: "Ona / мама", isCorrect: false },
            { answerText: "Opa / сестра", isCorrect: false },
            { answerText: "xola, amma / тётя", isCorrect: true },
            { answerText: "buvi / бабушка", isCorrect: false },
          ],
        },
        {
          questionText: "Wie übersetzt man auf Deutsche “ona / мама”?",
          answerOptions: [
            { answerText: "der Opa", isCorrect: true },
            { answerText: "die Oma", isCorrect: false },
            { answerText: "die Mutter", isCorrect: false },
            { answerText: "die Schwester", isCorrect: false },
          ],
        },
        {
          questionText: "Wie übersetzt man auf Usbekisch oder auf Russisch “Vater”?",
          answerOptions: [
            { answerText: "bobo / дедушка", isCorrect: true },
            { answerText: "ota / папа", isCorrect: false },
            { answerText: "ona / мама", isCorrect: false },
            { answerText: "aka / брат", isCorrect: false },
          ],
        },
        {
          questionText: "Ergānzen Sie! Wir  Gratulieren ... zum   Navruzfest?",
          answerOptions: [
            { answerText: "Ihnen", isCorrect: true },
            { answerText: "Sie", isCorrect: false },
            { answerText: "euch", isCorrect: false },
            { answerText: "Ihr", isCorrect: false },
          ],
        },
      ],
    },
  ],
}



export const germanTests6classReducer = (state = initialState, action) => {
  switch (action.type) {
    
      default: return state
  }
};
