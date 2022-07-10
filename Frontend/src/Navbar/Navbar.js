import React from 'react'
import Categories from './Categories'
import SlideShowImg from './SlideShowImg'
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function Navbar() {


  return (
    <div>
     <nav className="navbar navbar-expand-lg  navbarOfQuiz">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<img style={{width :"60px", height : "60px"}} src="https://i.gifer.com/origin/6b/6bd46e83cec1fc9390a64e9ae7e085f2_w200.gif" alt="" />
    <div style={{color: "white"}} className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{ color : "white"}} aria-current="page" href="#">Try out some Quiz!!</a>
        </li>
       
      
      </ul>
     <div style={{display : "flex"}}>
        <div style={{ textAlign: "center", margin : "auto", marginRight: "40px", marginTop:"10px"}}>
        <FaUserCircle style={{fontSize:"50px"}} 
       data-bs-toggle="tooltip" data-bs-placement="top"
       data-bs-custom-class="custom-tooltip"
       title="Login As User"
     />
     <p style={{textAlign:"center"}} >User Login</p>
        </div>
        <Link style={{textDecoration : "none"}} to="/adminlogin">
        
        <div style={{ textAlign: "center", margin : "auto", marginRight: "40px", marginTop:"10px"}}>
  <FaUserEdit style={{fontSize:"50px", color : "white"}}
      data-bs-toggle="tooltip" data-bs-placement="top"
      data-bs-custom-class="custom-tooltip"
      title="Login As Admin"

     />
     <p style={{textAlign:"center"}}>Admin Login</p>
     </div>
        </Link>
  </div>
     

    </div>
  </div>
</nav>

{/* background images */}

    </div>
  )
}
