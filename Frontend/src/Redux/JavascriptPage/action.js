//action creators 

export const QUES_NUMBER = "QUES_NUMBER";
export const ARRAY_LENGTH = "ARRAY_lENGTH";

//action types 

export const quesNum = (data) =>{
 return {
    type : QUES_NUMBER,
    payload : data,
 }
}

export const arrayLength = ( data) => {
    return {
        type : ARRAY_LENGTH,
        payload : data
    }
}