import React from 'react'
import {Routes, Route} from "react-router-dom"
import AdminControl from '../AdminLogin/AdminControl'
import HomeSlideshow from '../Navbar/HomeSlideshow'
import Login from '../pages/Authentication/Login'
import CSSCategory from '../pages/CSSCategory/CSSCategory'
import ExpressCategory from '../pages/ExpressCategory/ExpressCategory'
import HTMLCategory from '../pages/HTMLCategory/HTMLCategory'
import JavascriptCategory from '../pages/JavascriptCategory/JavascriptCategory'
import CategoryLoading from '../pages/LoadingPage/CategoryLoading'
import LoginAndLogoutPage from '../pages/LoginAndLogout/LoginAndLogoutPage'
import MongoCategory from '../pages/MongoCategory/MongoCategory'
import NodeCategory from '../pages/NodeCategory/NodeCategory'
import ReactCategory from '../pages/ReactCategory/ReactCategory'
import ReduxCategory from '../pages/ReduxCategory/ReduxCategory'




export default function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomeSlideshow/>}></Route>
    <Route path="/adminlogin" element={<AdminControl/>}></Route>
    <Route path="/userlogin" element={<Login/>}></Route>
    <Route path="/javascript" element={<JavascriptCategory/>}></Route>
    <Route path="/loading" element={<CategoryLoading/>}></Route>
 <Route path="/css" element={<CSSCategory/>}></Route>
    <Route path="/express" element={<ExpressCategory/>}></Route>
    <Route path="/HTML" element={<HTMLCategory/>}></Route>
<Route path="/mongo" element={<MongoCategory/>}></Route>
  <Route path="/node" element={<NodeCategory></NodeCategory>}></Route>
<Route path="/react" element={<ReactCategory/>}></Route>
    <Route path="/redux" element={<ReduxCategory/>}></Route>
   </Routes>
    </div>
  )
}
