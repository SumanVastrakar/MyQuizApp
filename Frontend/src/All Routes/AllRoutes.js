import React from 'react'
import {Routes, Route} from "react-router-dom"
import AdminControl from '../AdminLogin/AdminControl'
import HomeSlideshow from '../Navbar/HomeSlideshow'
import Javascript from '../Navbar/Javascript'


export default function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<HomeSlideshow/>}></Route>
    <Route path="/adminlogin" element={<AdminControl/>}></Route>
    <Route path="/javascript" element={<Javascript/>}></Route>
   </Routes>
    </div>
  )
}
