import React from 'react'
import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { register } from '../../Redux/Register/action'
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom"
import { FaBookReader } from "react-icons/fa";
import { GrUser } from "react-icons/gr";
import toastr from 'toastr'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  //js registeration form

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(store => store.userRegister.user)
  //   console.log(store.getState())
  console.log(users)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  })
  const submitHandle = (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      username: form.username,
      mobile: form.mobile,
      description: form.description,

    }
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload),
    }).then(res => res.json()).then(data => {
      console.log("response", data)
      if (data.error == false) {
        alert("user Successfully Registered")
        toast.success('User Get Successfully Register', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        toastr.success('')
        navigate("/login", { replace: true })
      } else {
      
        toast.error('User Already Exist!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    })

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
    <div style={{ margin: "3%" }}>
      <h1 style={{ textAlign: "center" }}>Register page</h1>

      <div className='container' style={{ width: "50%" }}>
        <form className="row g-3" onSubmit={submitHandle}>
          <div className="col-md-6">
            <label for="validationDefault01" className="form-label">First Name</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineUser /></span>
              <input type="name" className="form-control" id="validationTooltip01" value={form.name} name="name" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault01" className="form-label">Last Name</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineUser /></span>
              <input type="name" className="form-control" id="validationTooltip02" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationDefaultUsername" className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiOutlineMail /></span>
              <input type="email" className="form-control" id="validationDefaultUsername" value={form.email} name="email" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationDefaultUsername" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><AiFillLock /></span>
              <input type="password" className="form-control" id="validationDefaultUsername" value={form.password} name="password" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationDefaultUsername" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><GrUser /></span>
              <input type="text" className="form-control" id="validationDefaultUsername" value={form.username} name="username" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationTooltip05" className="form-label">Contact No.</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><BsFillTelephoneFill /></span>
              <input type="text" className="form-control" id="validationDefaultUsername" value={form.mobile} name="mobile" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationTooltip05" className="form-label">Enter Your fav Topic</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2"><FaBookReader /></span>
              <input type="text" className="form-control" id="validationDefaultUsername" value={form.description} name="description" onChange={handleChange} aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
              <label className="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
        <Link to="/userlogin" >
          <div style={{ marginTop: "2%" }}>
            Already have an Account? Login
          </div>

        </Link>
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


//username -->User username :- Suman Vastrakar
//password --> 123456