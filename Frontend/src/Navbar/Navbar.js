import React, { useState, useEffect} from 'react'
import Categories from './Categories'
import SlideShowImg from './SlideShowImg'
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Navbar() {

  let [userName, setUserName] = useState(JSON.parse(localStorage.getItem("profile")))
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("profile"))
    setUserName(user)
  },[])

  // console.log(user.result.name);

  const logoutFunction = () => {
    localStorage.removeItem("profile")
    setUserName(userName)
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbarOfQuiz">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/">
            <img style={{ width: "60px", height: "60px" }} src="https://i.gifer.com/origin/6b/6bd46e83cec1fc9390a64e9ae7e085f2_w200.gif" alt="" />
          </Link>

          <div style={{ color: "white" }} className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={{ color: "white" }} aria-current="page" href="#">Try out some Quiz!!</a>
              </li>


            </ul>
            <div style={{ display: "flex" }}>

              <div class="dropdown">
                <button style={{ backgroundColor: "black", height: "50px" }} class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <div style={{ textAlign: "center", margin: "auto", marginRight: "40px", marginTop: "15px" }}>
                    <FaUserCircle style={{ fontSize: "45px", color: "white" }}
                      data-bs-toggle="tooltip" data-bs-placement="top"
                      data-bs-custom-className="custom-tooltip"
                      title="Login As User"
                    />
                    <p style={{ textAlign: "center" }} >{userName ? userName.result.name : "User Login"}</p>
                  </div>
                </button>
                <ul class="dropdown-menu">
                  <Link style={{ textDecoration: "none" }} to="/userlogin">
                    <li><a class="dropdown-item" href="#">Log In</a></li>
                  </Link>
                  <li><a onClick={logoutFunction} class="dropdown-item" href="#">Log Out</a></li>

                </ul>
              </div>



              <Link style={{ textDecoration: "none" }} to="/adminlogin">

                <div style={{ textAlign: "center", margin: "auto", marginRight: "40px", marginTop: "15px" }}>
                  <FaUserEdit style={{ fontSize: "45px", color: "white" }}
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-className="custom-tooltip"
                    title="Login As Admin"

                  />
                  <p style={{ textAlign: "center" }}>Admin Login</p>
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
