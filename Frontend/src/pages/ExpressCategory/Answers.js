import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { colorA,colorB, colorC, colorD, countNumber, flag } from '../../Redux/expressPage/action.js'

export default function Answers({questions, currentIndex, ans, details}) {
    const dispatch = useDispatch()
    const letter = ["A", "B", "C", "D"];
    const A = useSelector(store => store.expressCurrentques.colorA);
    const B = useSelector(store => store.expressCurrentques.colorB);
    const C = useSelector(store => store.expressCurrentques.colorC);
    const D = useSelector(store => store.expressCurrentques.colorD);
    const F = useSelector(store => store.expressCurrentques.flag);
    const correctAnswerCount = useSelector(store => store.expressCurrentques.correctAnswerCount)


  return (
    <>
    <div className={`answer ${F}`}  onClick={() =>{
     if( ans === "A"){
         dispatch(colorA("correct-answer"))
         dispatch(countNumber(1))
       
     }else {
        dispatch(colorA("wrong-answer"))
     }
     dispatch(flag('disabled-answer'))
 

}}>
        <div className={A} >{letter[0]}</div>
    <div className='answer-text'>{questions[currentIndex]?.a}</div>
    </div>
    <div className={`answer ${F}`}   onClick={() =>{
     if( ans === "B"){
        dispatch(countNumber(1))
        dispatch(colorB("correct-answer"))
     }else {
        dispatch(colorB("wrong-answer"))
     }
     dispatch(flag('disabled-answer'))

}}>
    <div className={B}>{letter[1]}</div>
    <div className='answer-text'>{questions[currentIndex]?.b}</div>
    </div>
    <div className={`answer ${F}`}   onClick={() =>{
     if( ans === "C"){
        dispatch(countNumber(1))
        dispatch(colorC("correct-answer"))
     }else {
        dispatch(colorC("wrong-answer"))
     }
     dispatch(flag('disabled-answer'))

}}>
    <div className={C}>{letter[2]}</div>  
    <div className='answer-text'>{questions[currentIndex]?.c}</div>
    </div>
    <div className={`answer ${F}`}   onClick={() =>{
     if( ans === "D"){
        dispatch(countNumber(1))
        dispatch(colorD("correct-answer"))
     }else {
        dispatch(colorD("wrong-answer"))
     }
     dispatch(flag('disabled-answer'))

}}>
    <div className={D}>{letter[3]}</div>
    <div className='answer-text'>{questions[currentIndex]?.d}</div>
    </div>
    </>


  )
}
