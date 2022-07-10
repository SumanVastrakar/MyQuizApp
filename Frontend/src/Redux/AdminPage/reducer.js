import { POST_QUES_FAILURE, POST_QUES_SUCCESS, POST_QUES_REQUEST } from "./action";

const initState = {
    questions  : [],
}

export const adminReducer = (state = initState,{type, payload}) => {

    switch(type){
      case POST_QUES_REQUEST : {
        return{
            ...state,
            error : false,
            loading : true,
        }
      }
      case POST_QUES_SUCCESS : {
        return{
            ...state,
            questions : [...state.questions, payload],
            error : false,         
        }
      }
      case POST_QUES_FAILURE : {
        return{
            ...state,
          error : true,
          loading : false,
        }
      }
      default : return state;
    }
}