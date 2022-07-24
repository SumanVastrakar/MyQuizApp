import React from 'react'
import "./CategoriesOfCategories.css"
import CSS from './CSS'
import Express from './Express'
import HTML from './HTML'
import Javascript from './Javascript'
import Mongodb from './Mongodb'
import Node from './Node'
import Redux from './Redux'
import ReactCategory from './ReactCategory'

export default function ParentCategory() {

  const hideNewJSbarBoxBox = () => {

    document.querySelector("#javascript").classList.remove("underLine")
    document.querySelector(".hiddenBoxofJS").classList.add("hidden")
  }

  const unHideJSNavBarBox = () => {
    document.querySelector(".hiddenBoxofJS").classList.remove("hidden")
    document.querySelector("#javascript").classList.add("underLine")


  }
  const hideNewHTMLBoxBox = () => {

    document.querySelector("#html").classList.remove("underLine")
    document.querySelector(".hiddenBoxofHTML").classList.add("hidden")
  }

  const unHideHTMLBox = () => {
    document.querySelector(".hiddenBoxofHTML").classList.remove("hidden")
    document.querySelector("#html").classList.add("underLine")


  }
  const hideCSSBoxBox = () => {

    document.querySelector("#css").classList.remove("underLine")
    document.querySelector(".hiddenBoxofCSS").classList.add("hidden")
  }

  const unHideCSSBox = () => {
    document.querySelector(".hiddenBoxofCSS").classList.remove("hidden")
    document.querySelector("#css").classList.add("underLine")


  }
  const hideREACTBoxBox = () => {

    document.querySelector("#react").classList.remove("underLine")
    document.querySelector(".hiddenBoxofREACT").classList.add("hidden")
  }

  const unHideREACTBox = () => {
    document.querySelector(".hiddenBoxofREACT").classList.remove("hidden")
    document.querySelector("#react").classList.add("underLine")


  }
  const hideREDUXBoxBox = () => {

    document.querySelector("#redux").classList.remove("underLine")
    document.querySelector(".hiddenBoxofREDUX").classList.add("hidden")
  }

  const unHideREDUXBox = () => {
    document.querySelector(".hiddenBoxofREDUX").classList.remove("hidden")
    document.querySelector("#redux").classList.add("underLine")


  }
  const hideMONGOBoxBox = () => {

    document.querySelector("#mongo").classList.remove("underLine")
    document.querySelector(".hiddenBoxofMONGO").classList.add("hidden")
  }

  const unHideMONGOBox = () => {
    document.querySelector(".hiddenBoxofMONGO").classList.remove("hidden")
    document.querySelector("#mongo").classList.add("underLine")


  }
  const hideNODEJSBoxBox = () => {

    document.querySelector("#node").classList.remove("underLine")
    document.querySelector(".hiddenBoxofNODE").classList.add("hidden")
  }

  const unHideNODEJSBox = () => {
    document.querySelector(".hiddenBoxofNODE").classList.remove("hidden")
    document.querySelector("#node").classList.add("underLine")


  }
  const hideEXPRESSBoxBox = () => {

    document.querySelector("#express").classList.remove("underLine")
    document.querySelector(".hiddenBoxofEXPRESS").classList.add("hidden")
  }

  const unHideEXPRESSBox = () => {
    document.querySelector(".hiddenBoxofEXPRESS").classList.remove("hidden")
    document.querySelector("#express").classList.add("underLine")


  }
  return (
<div>

<div className='NavbarChoices'>

      {/* ========================================================== */}

      {/* Adding various item to the navbar */}
      {/* ============================================================= */}
      <div className="NavbarChoiceElement" id="javascript" onMouseOver={unHideJSNavBarBox} onMouseLeave={hideNewJSbarBoxBox}>Javascript</div>
      <div className="NavbarChoiceElement" id="html" onMouseOver={unHideHTMLBox} onMouseLeave={hideNewHTMLBoxBox}>HTML</div>
      <div className="NavbarChoiceElement" id="css" onMouseOver={unHideCSSBox} onMouseLeave={hideCSSBoxBox}>CSS</div>
      <div className="NavbarChoiceElement" id="react" onMouseOver={unHideREACTBox} onMouseLeave={hideREACTBoxBox}>ReactJS</div>
      <div className="NavbarChoiceElement" id="redux" onMouseOver={unHideREDUXBox} onMouseLeave={hideREDUXBoxBox} >Redux</div>
      <div className="NavbarChoiceElement" id="mongo" onMouseOver={unHideMONGOBox} onMouseLeave={hideMONGOBoxBox}>MongoDB</div>
      <div className="NavbarChoiceElement" id="node" onMouseOver={unHideNODEJSBox} onMouseLeave={hideNODEJSBoxBox}>NodeJs</div>
      <div className="NavbarChoiceElement" id="express" onMouseOver={unHideEXPRESSBox} onMouseLeave={hideEXPRESSBoxBox}>ExpressJS</div>
      </div>

      <div className='hiddenBoxofJS hidden' onMouseLeave={hideNewJSbarBoxBox} onMouseOver={unHideJSNavBarBox}>
        <Javascript />
      </div>

      <div className='hiddenBoxofHTML hidden' onMouseLeave={hideNewHTMLBoxBox} onMouseOver={unHideHTMLBox}>
      <HTML/>
      </div>

      <div className='hiddenBoxofCSS hidden' onMouseLeave={hideCSSBoxBox} onMouseOver={unHideCSSBox}>
        <CSS/>
      </div>

      <div className='hiddenBoxofREACT hidden' onMouseLeave={hideREACTBoxBox} onMouseOver={unHideREACTBox}>
       <ReactCategory/>
      </div>

      <div className='hiddenBoxofREDUX hidden' onMouseLeave={hideREDUXBoxBox} onMouseOver={unHideREDUXBox}>
      <Redux/>
      </div>

      <div className='hiddenBoxofMONGO hidden' onMouseLeave={hideMONGOBoxBox} onMouseOver={unHideMONGOBox}>
      <Mongodb/>
      </div>

      <div className='hiddenBoxofNODE hidden' onMouseLeave={hideNODEJSBoxBox} onMouseOver={unHideNODEJSBox}>
     <Node/>
      </div>

      <div className='hiddenBoxofEXPRESS hidden' onMouseLeave={hideEXPRESSBoxBox} onMouseOver={unHideEXPRESSBox}>
      <Express/>
      </div>



    

    
    </div>




  )
}
