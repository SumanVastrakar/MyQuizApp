import { QUES_NUMBER, ARRAY_LENGTH } from "./action";

const initialState = {
    currentQuestion : 0,
    ArrayLength : 0,
    showResults : false,
    correctAnswerCount : 0,
}

export const jsReducers = (  state = initialState, {type, payload}) => {
 switch(type){
    case QUES_NUMBER :{
        const showResults = state.currentQuestion === state.ArrayLength - 1;
        const currentQuestion = showResults ? state.currentQuestion : state.currentQuestion + 1
        return {
            ...state , currentQuestion, showResults,
          }
    } 
    case ARRAY_LENGTH : return {
        ...state, ArrayLength : payload
    }
    default : return state;
 }
} 