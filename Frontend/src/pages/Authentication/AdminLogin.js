import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUser, AiOutlineMail, AiFillLock} from "react-icons/ai";
// https://suman-backendnodemyappquiz.herokuapp.com/




export default function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const [form, setForm] = useState({

        email: "",
        password: "",

    })
    const submitHandle = (e) => {
        e.preventDefault();
       console.log(form.email, form.password)
        if(form.email === "suman_fw15_216@masai.school" && form.password === "1234567890"){
          
            toast.success('Admin Successfully Logged In!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            navigate("/adminpage")
        }else {
            toast.error('Invalid Credentials!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           
        }
     
    }

    useEffect(() => {
        // dispatch(register());
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form)
    }
    return (
        <div style={{margin : "3%"}}>
        <h1 style={{textAlign:"center"}}>Admin Login Page</h1>

    
<div className='container' style={{width : "40%"}}>
<form className="row g-3"  onSubmit={submitHandle}>
<div className="col-md-12">
    <label for="validationDefaultUsername" className="form-label">Email</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineMail/></span>
      <input type="email" className="form-control" id="validationDefaultUsername"  value ={form.email} name="email" onChange={handleChange}  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-12">
    <label for="validationDefaultUsername" className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2"><AiFillLock/></span>
      <input type="password" className="form-control" id="validationDefaultUsername" value ={form.password} name="password" onChange={handleChange}  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


     </div>
        </div>
    )
}
