import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [],
  active: true
}

export const questionNavSlice = createSlice({
    name: 'questionNav',
    initialState,
    reducers: {
      addQuestions:(state, action) =>{
        state.questions.push(action.payload)
      },

      updateQuestion: (state, action) => {
        const { id, title , questionType , answers , questionValue } = action.payload; 
        const question = state.questions.find((q) => q.id === id); // Find the question by id
        if (question) {
          question.title = title; 
          question.questionType = questionType;
          if(answers) 
            question.answers = answers;
          question.questionValue = questionValue;
        }
      },


      deleteQuestion: (state, action) => {
        const id  = action.payload; 
        state.questions = state.questions.filter((q) => q.id !== id);
       
      },

       addAnswer: (state, action) => {
        const {index, answerId , answerValue}  = action.payload; 
        const question = state.questions[index];
        if (question) {
          question.answers.push({answerId , answerValue})
        }
      },

      deleteAnswer: (state, action) => {
        const {index, answerId}  = action.payload; 
        const question = state.questions[index];
        if (question) {
          question.answers =  question.answers.filter((answer) => answer.answerId !== answerId)
        }     
      },
      onChangeQuestion : (state, action) =>  {
            const {index, questionValue} = action.payload;
            const question = state.questions[index];
            if(question){
              question.questionValue = questionValue;
            }

        },

        onchageAnswer: (state, action) => {
            const {questionIndex, answerIndex, answerValue} = action.payload;
            const question = state.questions[questionIndex];
            if(question){
              question.answers[answerIndex].answerValue =  answerValue;
            }
        },


        insertAtPosition : (state, action) =>{
              const {newQuestion, idBetween} = action.payload;
              const indexBetween = state.questions.findIndex((q) => q.id === idBetween);
              state.questions.splice((indexBetween+1) , 0 , newQuestion);
        },
     
      
      setActive:(state, action) =>{
        state.active = action.payload
      },
    },
  })

  export const {addQuestions, setActive ,updateQuestion , deleteQuestion ,addAnswer , deleteAnswer , onChangeQuestion , onchageAnswer , insertAtPosition } = questionNavSlice.actions
  export default questionNavSlice.reducer