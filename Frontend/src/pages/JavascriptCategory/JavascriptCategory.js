import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { arrayLength, quesNum, restart, shuffleAnswer } from '../../Redux/JavascriptPage/action';
import Answers from './Answers';
import { colorA, colorB, colorC, colorD, flag } from '../../Redux/JavascriptPage/action';


export default function JavascriptCategory() {
    const[data, setData] = useState([]);
    const currentIndex = useSelector(store => store.jsCurrentques.currentQuestion)
    const showResults = useSelector(store => store.jsCurrentques.showResults)
    const correctAnswerCount = useSelector(store => store.jsCurrentques.correctAnswerCount)
    const A = useSelector(store => store.jsCurrentques.colorA);
    const B = useSelector(store => store.jsCurrentques.colorB);
    const C = useSelector(store => store.jsCurrentques.colorC);
    const D = useSelector(store => store.jsCurrentques.colorD);
    const F = useSelector(store => store.jsCurrentques.flag);
    
    console.log("currentIndex" , currentIndex)
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    },[])
    const getData = async() =>{
        fetch("http://localhost:8080/quiz").then((d) => d.json()).then((data) =>{
            setData(data);
        })
    }

// if( data.length !)
let questions = [];
for( let i = 0; i < data.length; i++){
    if( data[i].category === "javascript"){
        questions.push(data[i])
    }
}

let ans = questions[currentIndex]?.answer;
console.log(ans)

// replace(/\r\n|\n|\r/gm,'<br/>')

for( let i = 0; i < questions.length; i++){
  questions[i]["ques"] = questions[i]["ques"].replaceAll(";",";\n")
}
console.log(questions)

// useEffect(() => {
// dispatch(shuffleAnswer(questions))
//   },[data])

  return (
    <div className="quiz">
      {showResults && (
        <div className='results'>
        <div className='congratulations'>Congratulations!!</div>
        <div className='results-info'>
          <div>You have completed Javascript Quiz.</div>
          <div>
            You've got {correctAnswerCount} of {" "} {questions.length}
          </div>
          <div className='next-button' onClick={() => dispatch(restart())}>Restart</div>
        </div>
          </div>
      )}
      {!showResults && (
        <div>
    <div className='score'>
      Question {currentIndex + 1}/{questions.length}
      </div>
   <div className="question">
   {questions[currentIndex]?.ques}
   </div>
   <div className='answers'>
    <Answers questions={questions} currentIndex={currentIndex} ans = {ans} details = {questions.details}/>


    </div>
   <div className='next-button' onClick={(() => {
    dispatch(quesNum(1)) 
    dispatch(arrayLength(questions.length))
    dispatch(colorA("answer-letter"))
    dispatch(colorB("answer-letter"))
    dispatch(colorC("answer-letter"))
    dispatch(colorD("answer-letter"))
    dispatch(flag(""))
   })}> Next Question </div>
   {
     F === "disabled-answer" ? (<div className='detailsDiv'>
     <details>
     <summary>Check Answer and Details</summary>
     <h3>Correct Answer : {ans}</h3>
     <h5>Details : {questions[currentIndex].details}</h5>
     </details>
     </div>) : ("")
   }




        </div>
      )}
  

  

{/* <ShuffleAnswer/> */}
    </div>
  )
}
export const questions = [];