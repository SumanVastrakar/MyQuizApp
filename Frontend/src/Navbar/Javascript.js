import React, { useEffect, useState } from 'react'
import AnswerDetails from '../pages/AnswerDetails'

export default function Javascript() {
    const [data, setData] = useState([])
   const [colorA, setColorA] = useState("white")
   const [colorB, setColorB] = useState("white")
   const [colorC, setColorC] = useState("white")
   const [colorD, setColorD] = useState("white")
   const [flag, setFlag] = useState(false);
    
    useEffect(() => {
        getData();
    },[])
    const getData = async() =>{
        fetch("http://localhost:8080/quiz").then((d) => d.json()).then((data) =>{
            setData(data);
        })
    }
    // console.log(JSON.parse("{foo : hello}"));
console.log(data)
    // const originalData = JSON.parse(data);
    // console.log(originalData)
    
    // console.log(originalData)

    // console.log(data)
  return (
    <div>
    {
        data.map((e) => ( 
            
            <div className='questionBank'>
                <div className='questionHead'>
        <h3>{e.ques}</h3>
        </div>

<button className='optonsOfquestion' style={{backgroundColor : colorA}} disabled ={flag} onClick={() =>{
     if( e.answer === "A"){
        setColorA("green")
     }else {
        setColorA("red")
     }
     setFlag(true)

}}> A : {e.a}</button>
<button className='optonsOfquestion'   style={{backgroundColor : colorB}} disabled ={flag} onClick={() =>{
     if( e.answer === "B"){
        setColorB("green")
     }else {
        setColorB("red")
     }
     setFlag(true)
}}> B : {e.b}</button>
<button className='optonsOfquestion'  style={{backgroundColor : colorC}} disabled ={flag} onClick={() =>{
     if( e.answer === "C"){
        setColorC("green")
     }else {
        setColorC("red")
     }
     setFlag(true)

}}> C : {e.c}</button>
<button className='optonsOfquestion'  style={{backgroundColor : colorD}} disabled ={flag} onClick={() =>{
     if( e.answer === "D"){
        setColorD("green")
     }else {
        setColorD("red")
     }
     setFlag(true)

}}> D : {e.d}</button>

{
    flag ? (<AnswerDetails details={e.details} answer={e.answer}/>) : ("") 
} 
                </div>
       
        ))
    }
    </div>
  )
}
