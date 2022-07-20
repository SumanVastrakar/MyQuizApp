import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from '../../Redux/Login/action'
import {Link} from "react-router-dom"
import toastr from 'toastr'
import { AiOutlineUser, AiOutlineMail, AiFillLock} from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GrUser } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(store => store.userLogin.user)
    // console.log(store.getState())
    console.log(users)
    const [form, setForm] = useState({

        password: "",
        username: "",

    })
    const submitHandle = (e) => {
        e.preventDefault();
        const payload = {

            password: form.password,
            username: form.username,


        }
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.token != null) {

                dispatch(loginSuccess(form.username, data.token))
                toast.success('Successfully Logged In!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                navigate("/dashboard", {replace:true})
            }else {
                // alert("Invalid Credentials")
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
        <div style={{margin : "3%"}}>
        <h1 style={{textAlign:"center"}}>Login Page</h1>

    
<div className='container' style={{width : "40%"}}>
<form className="row g-3"  onSubmit={submitHandle}>
<div className="col-md-12">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2"><GrUser/></span>
      <input type="text" className="form-control" id="validationDefaultUsername" value ={form.username} name="username"  onChange={handleChange}  aria-describedby="inputGroupPrepend2" required/>
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
<Link to="/usersignin" >
<div style={{marginTop:"2%"}}>
  Dont't have an Account? Register
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
