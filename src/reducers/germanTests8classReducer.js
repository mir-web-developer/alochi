
const initialState = {
  question8class: [
    {
      questionId: 0,
      questionName: "II Viertel VIII KLASS I VARIANT",
      questions: [
        {
          questionText: "Ergänzen Sie! Wir fliegen ... Mond. ",
          answerOptions: [
            { answerText: "zum", isCorrect: true },
            { answerText: "an", isCorrect: false },
            { answerText: "ins", isCorrect: false },
            { answerText: "von", isCorrect: false },
          ],
        },
        {
          questionText: "Träumen Sie einen Spaziergang ... dem Mond?",
          answerOptions: [
            { answerText: "auf", isCorrect: false },
            { answerText: "an", isCorrect: false },
            { answerText: "in", isCorrect: false },
            { answerText: "von", isCorrect: true },
          ],
        },
        {
          questionText: "Auf dem Mond  gibt es ... Wind und ... Regen.",
          answerOptions: [
            { answerText: "keinen / keinen", isCorrect: true },
            { answerText: "einen / keinen", isCorrect: false },
            { answerText: "keines / keine", isCorrect: false },
            { answerText: "eine / keine", isCorrect: false },
          ],
        },
        {
          questionText: "Ergänzen Sie den Nebensatz! Ich weiss,… er kommt.",
          answerOptions: [
            { answerText: "daß", isCorrect: true },
            { answerText: "ob", isCorrect: false },
            { answerText: "obwohl", isCorrect: false },
            { answerText: "weil", isCorrect: false },
          ],
        },
        {
          questionText: "Ich bin sicher, ….  es auf dem Mond kein Leben  gibt.",
          answerOptions: [
            { answerText: "weil", isCorrect: false },
            { answerText: "ob", isCorrect: false },
            { answerText: "dass", isCorrect: true },
            { answerText: "deshalb", isCorrect: false },
          ],
        },
        {
          questionText: "Setzen Sie passende Verb ein. Eines Tages ... Sabrina traurig auf der Treppe",
          answerOptions: [
            { answerText: "lag", isCorrect: false },
            { answerText: "saß", isCorrect: true },
            { answerText: "liegt", isCorrect: false },
            { answerText: "gesessen", isCorrect: false },
          ],
        },
        {
          questionText: "Ergänzen Sie! Ich ... mit der ökologischen Arbeit. ",
          answerOptions: [
            { answerText: "beschäftige mich", isCorrect: true },
            { answerText: "beschäftige mir", isCorrect: false },
            { answerText: "beschäftigt mich", isCorrect: false },
            { answerText: "beschäftigst mich", isCorrect: false },
          ],
        },
        {
          questionText: "Wo und wann wurde der berühmte Dichter Heinrich Heine geboren?",
          answerOptions: [
            { answerText: "1736 in Bremen", isCorrect: false },
            { answerText: "1797 in Düsseldorf", isCorrect: true },
            { answerText: "1797 in Österreich", isCorrect: false },
            { answerText: "1797 in Bonn", isCorrect: false },
          ],
        },
        {
          questionText: "Wer ist Bertold Brecht?",
          answerOptions: [
            { answerText: "Politiker", isCorrect: false },
            { answerText: "Dichter", isCorrect: false },
            { answerText: "Schriftsteller", isCorrect: true },
            { answerText: "Polizist", isCorrect: false },
          ],
        },
        {
          questionText: "Ich mag Liebesromane,... sie spannend sind.",
          answerOptions: [
            { answerText: "daß", isCorrect: false },
            { answerText: "weil", isCorrect: true },
            { answerText: "ob", isCorrect: false },
            { answerText: "denn", isCorrect: false },
          ],
        },
        {
          questionText: "Es macht mir Spaβ, Comics ... lesen.",
          answerOptions: [
            { answerText: "statt", isCorrect: false },
            { answerText: "um ... zu", isCorrect: false },
            { answerText: "zu", isCorrect: true },
            { answerText: "zum", isCorrect: false },
          ],
        },
        {
          questionText: "Wer ist Wolfgang Amadeus Mozart?",
          answerOptions: [
            { answerText: "Dichter", isCorrect: false },
            { answerText: "Politiker", isCorrect: false },
            { answerText: "Komponist", isCorrect: true },
            { answerText: "Maler", isCorrect: false },
          ],
        },
        {
          questionText: "Wo bist du geboren?",
          answerOptions: [
            { answerText: "in Usbekistan", isCorrect: true },
            { answerText: "in Deutschland", isCorrect: false },
            { answerText: "in der Türkei", isCorrect: false },
            { answerText: "in Russland", isCorrect: false },
          ],
        },
        {
          questionText: "Ich denke, dass die ... Gruppen “Toten Hosen” und “ Ummon” sind.",
          answerOptions: [
            { answerText: "beste", isCorrect: false },
            { answerText: "bestes", isCorrect: false },
            { answerText: "besten", isCorrect: true },
            { answerText: "bestens", isCorrect: false },
          ],
        },
        {
          questionText: "Wie sagt man das Wort “Yolg`izlik / одиночество” auf Deutsch?",
          answerOptions: [
            { answerText: "Traurigkeit", isCorrect: false },
            { answerText: "Freundschaft", isCorrect: false },
            { answerText: "Ehrlichkeit", isCorrect: false },
            { answerText: "Einsamkeit", isCorrect: true },
          ],
        },
        {
          questionText: "Welches Wort passt zur Reihe nicht?",
          answerOptions: [
            { answerText: "Malerei, Farben, Ölfarbe", isCorrect: false },
            { answerText: "Stickerei, Ölfarbe, Farben", isCorrect: false },
            { answerText: "Birne, Apfel, Pflaume", isCorrect: false },
            { answerText: "Jacke,Rock,Jeans", isCorrect: true },
          ],
        },
        {
          questionText: "Auf diesem Bild ... eine Frau sehen.",
          answerOptions: [
            { answerText: "man kann", isCorrect: false },
            { answerText: "kannst man", isCorrect: false },
            { answerText: "kann man", isCorrect: true },
            { answerText: "können ihr", isCorrect: false },
          ],
        },
        {
          questionText: "Ich lerne Deutsch, ... ich in Deutschland studieren möchte.",
          answerOptions: [
            { answerText: "deshalb", isCorrect: false },
            { answerText: "damit", isCorrect: false },
            { answerText: "denn", isCorrect: false },
            { answerText: "weil", isCorrect: true },
          ],
        },
      ],
    },
  ],  
}



export const germanTests8classReducer = (state = initialState, action) => {
  switch (action.type) {
    
      default: return state
  }
};
