
const initialState = {
  question8class: [
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
  ],  
}



export const germanTests8classReducer = (state = initialState, action) => {
  switch (action.type) {
    
      default: return state
  }
};
