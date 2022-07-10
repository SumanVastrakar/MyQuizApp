import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postQuestion } from '../Redux/AdminPage/action'

export default function AdminControl() {
  const dispatch = useDispatch()
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

    const handleChange = (e) => {
      const {name, value} = e.target;
      setForm({...form, [name] : value})
    }
    console.log(form)

    const handleSubmit = () => {
    const myJson = JSON.stringify(form);
    dispatch(postQuestion(myJson))
    }
 
  return (
    <div className='adminControl'>
      <h1 style={{textAlign:"center", color : "white"}}> Add question</h1>

      <select className="form-select mb-3" name ="category" onChange={handleChange}   style={{width : "50%", margin :"auto"}} aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="javascript">Javascript</option>
  <option value="HTML">HTML</option>
  <option value="ReactJs">ReactJs</option>
  <option value="Redux">Redux</option>
  <option value="MongoDB">MongoDB</option>
  <option value="NodeJs">NodeJs</option>
  <option value="Express">Express</option>

</select>
      <div class="input-group flex-nowrap mb-3"  style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Question</span>
  <input type="text" class="form-control" placeholder="Enter Question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="ques"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">1 <sup>st</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="a"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">2 <sup>nd</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="b"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">3 <sup>rd</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping"
  name="c"
  />

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">4 <sup>th</sup><pre> </pre> Option</span>
  <input type="text" class="form-control" placeholder="Enter Question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="d"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Correct Option</span>
  <input type="text" class="form-control" placeholder="Enter its correct option" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="answer"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Explaination</span>
  <input type="text" class="form-control" placeholder="Enter explaination of correct answer" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="details"/>

</div>
      <div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
  <span class="input-group-text" id="addon-wrapping">Points</span>
  <input type="text" class="form-control" placeholder="Allot points to this question" onChange={handleChange} aria-label="question" aria-describedby="addon-wrapping" name="points"/>

</div>
<div class="input-group flex-nowrap mb-3" mb="20px" style={{width : "50%", margin :"auto"}}>
<button className='btn btn-danger' onClick={handleSubmit}>Add This Question</button>
</div>
    </div>
  )
}
