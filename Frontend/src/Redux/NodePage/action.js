//action creators 

export const QUES_NUMBER = "QUES_NUMBER";
export const ARRAY_LENGTH = "ARRAY_lENGTH";
export const RESTART = "RESTART";
export const COLORA = "COLORA";
export const COLORB = "COLORB";
export const COLORC = "COLORC";
export const COLORD = "COLORD";
export const FLAG = "FLAG";
export const CORRECTANSWER = "CORRECTANSWER";


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
export const colorA = (data) => {
    return  {
    type : COLORA,
    payload : data
    }
}
export const colorB = (data) => {
    return  {
    type : COLORB,
    payload : data
    }
}
export const colorC = (data) => {
    return  {
    type : COLORC,
    payload : data
    }
}
export const colorD = (data) => {
    return  {
    type : COLORD,
    payload : data
    }
}
export const flag = (data) => {
    return  {
    type : FLAG,
    payload : data
    }
}
export const countNumber = (data) => {
    return {
        type : CORRECTANSWER,
        payload : data
    }
}
// export const 

// export const shuffleAnswer = (question) => {
//     console.log("actions", question)
// const unshuffledAnswers = [
//     question.correctAnswer,...question.incorrectAnswers
//    ]
//  return (
//    unshuffledAnswers.map(elem => ({sort : Math.random(), value : elem})).sort((a, b) => a.sort - b.sort).map(elem => elem.value)
//  )
// }