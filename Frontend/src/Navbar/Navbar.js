import React from 'react'
import Categories from './Categories'
import SlideShowImg from './SlideShowImg'

export default function Navbar() {


  return (
    <div>
     <nav className="navbar navbar-expand-lg  navbarOfQuiz">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<img style={{width :"100px", height : "100px"}} src="https://i.gifer.com/origin/6b/6bd46e83cec1fc9390a64e9ae7e085f2_w200.gif" alt="" />
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* background images */}

<div>
 <SlideShowImg/>
</div>
<div>
    <Categories/>
</div>
    </div>
  )
}
