import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { arrayLength, quesNum, restart, shuffleAnswer } from '../../Redux/JavascriptPage/action';
import Answers from './Answers';


export default function JavascriptCategory() {
    const[data, setData] = useState([]);
    const currentIndex = useSelector(store => store.jsCurrentques.currentQuestion)
    const showResults = useSelector(store => store.jsCurrentques.showResults)
    const correctAnswerCount = useSelector(store => store.jsCurrentques.correctAnswerCount)
    
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
    <Answers questions={questions} currentIndex={currentIndex} ans = {ans}/>


    </div>
   <div className='next-button' onClick={(() => {
    dispatch(quesNum(1)) 
    dispatch(arrayLength(questions.length))
   })}> Next Question </div>
        </div>
      )}
  
{/* <ShuffleAnswer/> */}
    </div>
  )
}
export const questions = [];