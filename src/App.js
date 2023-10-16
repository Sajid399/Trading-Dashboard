import React from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import ResearchPortal from './component/ResearchPortal';
import Profile from './component/Profile';
import {  Routes,Route} from 'react-router-dom';
import SideBarList from './component/SideBarList';
import SignalPortal from './component/SignalPortal';
import Referal from './component/Referal';
import Help from './component/Help';
import Setting from './component/Setting';
import Logout from './component/Logout';
import { useState } from 'react';
import LogoImage from "./images/Logo.png"

const App = () => {

  return (
    <>
    <div className='container-fluid p-0 m-0 '>
      <div className='row justify-content-center' style={{height:"100vh" ,width:"100vw"}}>
      <div className='col-8 col-md-3 '>
         <div className='d-none d-md-none d-lg-block'><SideBarList/></div> 
          </div>
          <div className='col-9'>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/> 
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/research-portal" element={<ResearchPortal/>}/>
            <Route path="/signal-portal" element={<SignalPortal/>}/>
            <Route path="/referal" element={<Referal/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/logout" element={<Logout/>}/>
      </Routes>
         </div>
      </div>
         
    </div>
      
    </>
  )
}

export default App
