//action creators 

export const QUES_NUMBER = "QUES_NUMBER";
export const ARRAY_LENGTH = "ARRAY_lENGTH";
export const RESTART = "RESTART";

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
export const restart = () => {
    return {
        type : RESTART
    }
}

// export const shuffleAnswer = (question) => {
//     console.log("actions", question)
// const unshuffledAnswers = [
//     question.correctAnswer,...question.incorrectAnswers
//    ]
//  return (
//    unshuffledAnswers.map(elem => ({sort : Math.random(), value : elem})).sort((a, b) => a.sort - b.sort).map(elem => elem.value)
//  )
// }