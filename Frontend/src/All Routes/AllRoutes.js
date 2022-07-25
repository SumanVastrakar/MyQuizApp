import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminControl from '../AdminLogin/AdminControl'
import HomeSlideshow from '../Navbar/HomeSlideshow'
import AdminLogin from '../pages/Authentication/AdminLogin'
import LoginOne from '../pages/Authentication/LoginOne'
import RegisterOne from '../pages/Authentication/RegisterOne'
import CSSCategory from '../pages/CSSCategory/CSSCategory'
import { ErrorRoute } from '../pages/Error/ErrorRoute'
import ExpressCategory from '../pages/ExpressCategory/ExpressCategory'
import { Footer } from '../pages/Footer/Footer'
import HTMLCategory from '../pages/HTMLCategory/HTMLCategory'
import JavascriptCategory from '../pages/JavascriptCategory/JavascriptCategory'
import CategoryLoading from '../pages/LoadingPage/CategoryLoading'
import MongoCategory from '../pages/MongoCategory/MongoCategory'
import NodeCategory from '../pages/NodeCategory/NodeCategory'
import { PrivateRoutes } from '../pages/PrivateRoute/PrivateRoute'
import ReactCategory from '../pages/ReactCategory/ReactCategory'
import ReduxCategory from '../pages/ReduxCategory/ReduxCategory'




export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeSlideshow />}></Route>
        <Route path="/adminpage" element={<AdminControl />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/userlogin" element={<LoginOne />}></Route>
        <Route path="/usersignin" element={<RegisterOne />}></Route>
        <Route path="/javascript" element={<PrivateRoutes><JavascriptCategory/></PrivateRoutes>}></Route>
        <Route path="/loading" element={<CategoryLoading />}></Route>
        <Route path="/css" element={<PrivateRoutes><CSSCategory /></PrivateRoutes>}></Route>
        <Route path="/express" element={<PrivateRoutes><ExpressCategory /></PrivateRoutes>}></Route>
        <Route path="/HTML" element={<PrivateRoutes><HTMLCategory /></PrivateRoutes>}></Route>
        <Route path="/mongo" element={<PrivateRoutes><MongoCategory /></PrivateRoutes>}></Route>
        <Route path="/node" element={<PrivateRoutes><NodeCategory></NodeCategory></PrivateRoutes>}></Route>
        <Route path="/react" element={<PrivateRoutes><ReactCategory /></PrivateRoutes>}></Route>
        <Route path="/redux" element={<PrivateRoutes><ReduxCategory /></PrivateRoutes>}></Route>
        <Route path="*" element={<ErrorRoute/>}></Route>
        <Route path="/footer" element={<Footer />}></Route>

        
      </Routes>
    </div>
  )
}
