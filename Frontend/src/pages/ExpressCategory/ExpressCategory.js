import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { arrayLength, quesNum, restart, shuffleAnswer } from '../../Redux/expressPage/action';
import CircleLoader from './Answers';
import { colorA, colorB, colorC, colorD, flag } from '../../Redux/expressPage/action';
import HashLoader from "react-spinners/HashLoader"
import CategoryLoading from '../LoadingPage/CategoryLoading';
import QuestionLoading from '../LoadingPage/QuestionLoading';



export default function ExpressCategory() {
  const [loading, setLoading] = useState(false);
  const [quesLoading, setQuesLoding] = useState(false);

  useEffect(() => {
setLoading(true)
setTimeout(() =>{
setLoading(false);
},3000)


  },[])
    const[data, setData] = useState([]);
    const currentIndex = useSelector(store => store.expressCurrentques.currentQuestion)
    const showResults = useSelector(store => store.expressCurrentques.showResults)
    const correctAnswerCount = useSelector(store => store.expressCurrentques.correctAnswerCount)
    const A = useSelector(store => store.expressCurrentques.colorA);
    const B = useSelector(store => store.expressCurrentques.colorB);
    const C = useSelector(store => store.expressCurrentques.colorC);
    const D = useSelector(store => store.expressCurrentques.colorD);
    const F = useSelector(store => store.expressCurrentques.flag);
    
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
    if( data[i].category === "express"){
        questions.push(data[i])
    }
}
console.log(questions)

let ans = questions[currentIndex]?.answer;
console.log(ans)



  return (
    <div className="quiz">
      {
        loading ? (
          // <ClipLoader color={"#123abc"} loading={loading} size={150} />
          <CategoryLoading/>
          )
           : (     
          <div>
          {showResults && (
            <div className='results'>
            <div className='congratulations'>Congratulations!!</div>
            <div className='results-info'>
              <div>You have completed Express Quiz.</div>
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
   
        {
          quesLoading ? (
            // <HashLoader color={"rgb(0,135,166)"} loading={loading}  size={150} />
            // <CategoryLoading/>
            <QuestionLoading/>
          )  : (
            <div>
                     <div className="question">
       {questions[currentIndex]?.ques}
       {/* {
        
        questionArray?.map(elem => (
         <div>
  <p>{elem}</p>
          <pre>

          </pre>
          
         </div> 
        
        ))
       } */}
       </div>
       <div className='answers'>
        <CircleLoader  questions={questions} currentIndex={currentIndex} ans = {ans} details = {questions.details}/>
    
    
        </div>
       <div className='next-button' onClick={(() => {
        dispatch(quesNum(1)) 
        dispatch(arrayLength(questions.length))
        dispatch(colorA("answer-letter"))
        dispatch(colorB("answer-letter"))
        dispatch(colorC("answer-letter"))
        dispatch(colorD("answer-letter"))
        dispatch(flag(""))
        setQuesLoding(true)
        setTimeout(() => {
          setQuesLoding(false)
          }, 1000)
       })}> Next Question </div>
         <div className='restartButton' onClick={() => dispatch(restart())}>Restart</div>
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
          )
        }
     
    
    
            </div>
          )}
      
          </div>
         )
    
       
    
      }
      

  

{/* <ShuffleAnswer/> */}
    </div>
  )
}
export const questions = [];