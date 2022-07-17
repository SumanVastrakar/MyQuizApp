import React from 'react'
import {Routes, Route} from "react-router-dom"
import AdminControl from '../AdminLogin/AdminControl'
import HomeSlideshow from '../Navbar/HomeSlideshow'
import JavascriptCategory from '../pages/JavascriptCategory/JavascriptCategory'
import CategoryLoading from '../pages/LoadingPage/CategoryLoading'



export default function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomeSlideshow/>}></Route>
    <Route path="/adminlogin" element={<AdminControl/>}></Route>
    <Route path="/loading" element={<CategoryLoading/>}></Route>
    <Route path="/javascript" element={<JavascriptCategory/>}></Route>
 

   </Routes>
    </div>
  )
}
