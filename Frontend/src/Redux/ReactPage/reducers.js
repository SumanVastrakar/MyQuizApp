import { QUES_NUMBER, ARRAY_LENGTH, RESTART, COLORA, COLORB, COLORC, COLORD, FLAG, CORRECTANSWER} from "./action";

const initialState = {
    // questions,
    currentQuestion : 0,
    ArrayLength : 0,
    showResults : false,
    correctAnswerCount : 0,
    colorA : "answer-letter",
    colorB : "answer-letter",
    colorC :"answer-letter",
    colorD : "answer-letter",
    flag : ""
    // answers : shuffleAnswer(questions[0]),
}

export const reactReducers = (  state = initialState, {type, payload}) => {
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
    case COLORB : return {
        ...state, colorB : payload
    }
    case COLORC : return {
        ...state, colorC : payload
    }
    case COLORA : return {
        ...state, colorA : payload
    }
    case COLORD : return {
        ...state, colorD : payload
    }
    case FLAG : return{
        ...state, flag : payload
    }
    case CORRECTANSWER :return {
        ...state, correctAnswerCount : state.correctAnswerCount + payload
    }
    case RESTART : return initialState
    default : return state;
 }
} 