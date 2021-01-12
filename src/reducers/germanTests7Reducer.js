
const initialState = {
  question7class: [
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



export const germanTests7classReducer = (state = initialState, action) => {
  switch (action.type) {
    
      default: return state
  }
};
