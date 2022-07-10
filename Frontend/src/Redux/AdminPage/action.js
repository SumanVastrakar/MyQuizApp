import axios from "axios"

//action creator 

export const POST_QUES_REQUEST = "POST_QUES_REQUEST";
export const POST_QUES_SUCCESS = "POST_QUES_SUCCESS";
export const POST_QUES_FAILURE = "POST_QUES_FAILURE";


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

export const postQuestion = (quest) => (dispatch) => {
    quesRequest();
    axios.post("http://localhost:8080/quiz", quest).then(d => dispatch(quesSuccess(d.data)))
    .catch(error => quesFailure(error.data))
}