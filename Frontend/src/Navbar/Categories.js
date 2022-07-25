import React from 'react'
import {Link} from 'react-router-dom'

export default function Categories() {
  return (
    <div className='containerCategories container'>
      <h1  className = "headingCategories" style={{textAlign:"center", margin:"30px"}}>CATEGORIES</h1>
      <div>
        <div className ="container" style={{marginLeft :"-5%"}}>
        <div className='d-flex' >
          <Link style={{textDecoration : "none"}}  to="/javascript">
        <div className="card col card1" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
  <img style={{borderRadius:"50%", width : "250px", height:"200px", margin:"auto", marginTop:"20px"}} src="http://code-institute-org.github.io/Full-Stack-Web-Developer-Stream-0/assets/javascript.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">Javascript</h3>
    <p className="card-text">JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive</p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}}  to="/HTML">
        <div className="card col card2" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">HTML</h3>
    <p className="card-text">Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}} to="/CSS">
        <div className="card col card3" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">CSS</h3>
    <p className="card-text">Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML </p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}}  to="/react">
        <div className="card col card4" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">React</h3>
    <p className="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. </p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
        </div>

        <div className='d-flex'>
        <Link style={{textDecoration : "none"}}  to="/redux">
        <div className="card col card5" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">Redux</h3>
    <p className="card-text">Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. </p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}}  to="/mongo">
        <div className="card col card6" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">MongoDB</h3>
    <p className="card-text">MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases.</p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}}  to="/node">
        <div className="card col card7" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "200px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">NodeJs</h3>
    <p className="card-text">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. </p>
    <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
<Link style={{textDecoration : "none"}}  to="/express">
        <div className="card col card8" style={{width: "18rem", margin :"30px", backgroundColor:"red"}}>
        <img style={{borderRadius:"50%", width : "250px", height:"200px", margin:"auto", marginTop:"20px"}} src="https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">Express</h3>
    <p className="card-text">Express is a node js web application framework that provides broad features for building web and mobile applications.</p>
  <button style={{backgroundColor:"whitesmoke", color:"black"}}className='btn btn-success'>Start Quiz</button>
  </div>
</div>
</Link>
        </div>
      </div>
      
        </div>
      
    </div>
  )
}
