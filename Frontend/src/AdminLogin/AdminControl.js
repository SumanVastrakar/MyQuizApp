import React from 'react'
import { useState } from 'react'

export default function AdminControl() {
    const[form, setForm] = useState({
category : "",
ques : "",
a : "",
b : "",
c : "",
d : "",
answer : "",
details : "",
points : "",     
    })

  return (
    <div className='adminControl'>
      <h1 style={{textAlign:"center", color : "white"}}> Add question</h1>

      <select className="form-select mb-3"   style={{width : "50%", margin :"auto"}} aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="1">Javascript</option>
  <option value="2">HTML</option>
  <option value="3">ReactJs</option>
  <option value="3">Redux</option>
  <option value="3">MongoDB</option>
  <option value="3">NodeJs</option>
  <option value="3">Express</option>

</select>
      <div class="input-group flex-nowrap mb-3"  style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Question</span>
  <input type="text" class="form-control" placeholder="Enter Question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">1 <sup>st</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">2 <sup>nd</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">3 <sup>rd</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">4 <sup>th</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Correct Option</span>
  <input type="text" class="form-control" placeholder="Enter its correct option" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Explaination</span>
  <input type="text" class="form-control" placeholder="Enter explaination of correct answer" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Points</span>
  <input type="text" class="form-control" placeholder="Allot points to this question" aria-label="question" aria-describedby="addon-wrapping"/>

</div>
<div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
<button className='btn btn-danger'>Add This Question</button>
</div>
    </div>
  )
}
