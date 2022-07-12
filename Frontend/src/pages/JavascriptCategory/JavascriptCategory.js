import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { arrayLength, quesNum } from '../../Redux/JavascriptPage/action';

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
const jsArray = [];
// if( data.length !)
for( let i = 0; i < data.length; i++){
    if( data[i].category === "javascript"){
        jsArray.push(data[i])
    }
}
console.log(jsArray)

  return (
    <div className="quiz">
      {showResults && (
        <div className='results'>
        <div className='congratulations'>Congratulations!!</div>
        <div className='results-info'>
          <div>You have completed Javascript Quiz.</div>
          <div>
            You've got {correctAnswerCount} of {data.length}
          </div>
        </div>
          </div>
      )}
      {!showResults && (
        <div>
    <div className='score'>
      Question {currentIndex + 1}/{data.length}
      </div>
   <div className="question">
   {jsArray[currentIndex]?.ques}
   </div>
   <div className='next-button' onClick={(() => {
    dispatch(quesNum(1)) 
    dispatch(arrayLength(data.length))
   })}> Next Question </div>
        </div>
      )}
  

    </div>
  )
}
