import React,{useState} from 'react'

export default function Answers({questions, currentIndex, ans}) {
    const letter = ["A", "B", "C", "D"];
    const [colorA, setColorA] = useState("answer-letter")
    const [colorB, setColorB] =  useState("answer-letter")
    const [colorC, setColorC] = useState("answer-letter")
    const [colorD, setColorD] = useState("answer-letter")
    const [flag, setFlag] = useState("");
  return (
    <>
    <div className={`answer ${flag}`}  disabled ={flag} onClick={() =>{
     if( ans === "A"){
     
        setColorA("correct-answer")
     }else {
        setColorA("wrong-answer")
     }
     setFlag("disabled-answer")

}}>
        <div className={colorA} >{letter[0]}</div>
    <div className='answer-text'>{questions[currentIndex]?.a}</div>
    </div>
    <div className={`answer ${flag}`}   onClick={() =>{
     if( ans === "B"){
     
        setColorB("correct-answer")
     }else {
        setColorB("wrong-answer")
     }
     setFlag("disabled-answer")

}}>
    <div className={colorB}>{letter[1]}</div>
    <div className='answer-text'>{questions[currentIndex]?.b}</div>
    </div>
    <div className={`answer ${flag}`}   onClick={() =>{
     if( ans === "C"){
     
        setColorC("correct-answer")
     }else {
        setColorC("wrong-answer")
     }
     setFlag("disabled-answer")

}}>
    <div className={colorC}>{letter[2]}</div>  
    <div className='answer-text'>{questions[currentIndex]?.c}</div>
    </div>
    <div className={`answer ${flag}`}   onClick={() =>{
     if( ans === "D"){
     
        setColorD("correct-answer")
     }else {
        setColorD("wrong-answer")
     }
     setFlag("disabled-answer")

}}>
    <div className={colorD}>{letter[3]}</div>
    <div className='answer-text'>{questions[currentIndex]?.d}</div>
    </div>
    </>


  )
}
