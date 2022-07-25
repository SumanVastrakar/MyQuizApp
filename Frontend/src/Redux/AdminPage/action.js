import axios from "axios"

//action creator 

export const POST_QUES_REQUEST = "POST_QUES_REQUEST";
export const POST_QUES_SUCCESS = "POST_QUES_SUCCESS";
export const POST_QUES_FAILURE = "POST_QUES_FAILURE";
export const USER_NAME = "USER_NAME";
export const LOGIN_STATUS = "LOGIN_STATUS";


//action types 

export const quesRequest = () => {
    return {
        type : POST_QUES_REQUEST,
        
    }
}
export const quesSuccess = (data) => {
    return {
        type : POST_QUES_SUCCESS,
        data
    }
}
export const quesFailure = () => {
    return {
        type : POST_QUES_FAILURE,
        
    }
}
export const userName = (data) =>{
    return {
     type : USER_NAME,
      payload : data,
    }
}

export const postQuestion = (quest) => (dispatch) => {
    quesRequest();
    axios.post("https://sumanquizapp.herokuapp.com/quiz", quest).then(d => dispatch(quesSuccess(d.data)))
    .catch(error => quesFailure(error.data))
}

export const loginStatus = (data) =>{
    return {
        type : LOGIN_STATUS,
        payload : data,
    }
}
