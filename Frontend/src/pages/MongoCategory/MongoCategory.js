import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { arrayLength, quesNum, restart, shuffleAnswer } from '../../Redux/MongoPage/action';
import CircleLoader from './Answers';
import { colorA, colorB, colorC, colorD, flag } from '../../Redux/MongoPage/action';
import HashLoader from "react-spinners/HashLoader"
import CategoryLoading from '../LoadingPage/CategoryLoading';
import QuestionLoading from '../LoadingPage/QuestionLoading';


export default function MongoCategory() {
  const [loading, setLoading] = useState(false);
  const [quesLoading, setQuesLoding] = useState(false);

  useEffect(() => {
setLoading(true)
setTimeout(() =>{
setLoading(false);
},3000)


  },[])
    const[data, setData] = useState([]);
    const[questions, setQuestions] = useState([]);
    const currentIndex = useSelector(store => store.mongoCurrentQues.currentQuestion)
    const showResults = useSelector(store => store.mongoCurrentQues.showResults)
    const correctAnswerCount = useSelector(store => store.mongoCurrentQues.correctAnswerCount)
    const A = useSelector(store => store.mongoCurrentQues.colorA);
    const B = useSelector(store => store.mongoCurrentQues.colorB);
    const C = useSelector(store => store.mongoCurrentQues.colorC);
    const D = useSelector(store => store.mongoCurrentQues.colorD);
    const F = useSelector(store => store.mongoCurrentQues.flag);
    
    console.log("currentIndex" , currentIndex)
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    },[])
    const getData = async() =>{
      let arr = await fetch("https://sumanquizapp.herokuapp.com/quiz");
      arr = await arr.json();
      setData(await shuffleArray(await filteringData(arr)));
      // console.log(arr)
  }

  const filteringData = async(array) => {
    let newArr = []
    for( let i = 0; i < array.length; i++){
      if( array[i].category === "mongodb"){
        newArr.push(array[i]);
        
      }
      
    
  }

  return newArr;

  }

async function shuffleArray(array) {
  console.log("shuffle Array", array)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    setQuestions(array.slice(0,10))
    
}

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
              <div>You have completed Mongo Quiz.</div>
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

       {
         F === "disabled-answer" ? (<div className='detailsDiv'>
         <details>
         <summary>Check Answer and Details</summary>
         <h3>Correct Answer : {ans}</h3>
         <h5>Details : {questions[currentIndex]?.details}</h5>
         </details>
         </div>) : ("")
       }
         <div className='restartButton' onClick={() => dispatch(restart())}>Restart</div>
    
    
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