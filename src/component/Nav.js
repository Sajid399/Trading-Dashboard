import React from 'react'
import Heading from '../component/Heading';
import imageUrl1 from '../images/searchnormal1.png'
import imageUrl2 from '../images/notification.png'
import imageUrl3 from '../images/Ellipse 1.png'
import LogoImage from "../images/Logo.png"
import Icon from '../component/Icon';
import ProfileHeading from '../component/ProfileHeading';
import Dropdown from './Dropdown';
import { useState } from 'react';
import SideBarList from './SideBarList';
import Notification from './Notification';
import Search from './Search';


const Nav = ({headingComponent}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [notification,setNotification] = useState(false);
  const notificationToggle = () => {
      setNotification(!notification)
  }
  const [searchOpen,setSeacrh] = useState(false);
  const searchToggle = ( ) => {
    setSeacrh(!searchOpen)
  }
  return (
    <>
    <div className='d-flex col-lg-12 col-md-12 col-12'>
               <div className='d-flex'>
                  <span><svg onClick={toggleSidebar} className='d-lg-none d-md-none mt-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7H21M3 12H21M3 17H21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  {isSidebarOpen && <div className='d-lg-none d-md-none'><SideBarList /></div>} 
                  </span>
                  <span className='mt-0'><img className="object-fit-cover d-lg-none d-md-none logo img-fluid mt-3" src={LogoImage} alt='logo' /></span>
                </div>
              <div className='me-auto pt-2 ps-4'>
              <Heading />
              <h3 className="d-none d-md-block mt-3 " >{headingComponent}</h3>
              </div>
                <div className='d-flex icon-div ms-4 p-2'>
                  <div className='icons1  pt-2' onClick={searchToggle}>
                    <Icon src={imageUrl1} />
                    {searchOpen && <Search/>}
                  </div>
                  <div className='icons2 ms-4 pt-2' onClick={notificationToggle}>
                    <Icon src={imageUrl2}  />
                    {notification && <Notification/>}
                  </div>
                  <div className='profile-image img-fluid ms-4 pt-1'>
                    <img  src={imageUrl3} />
                  </div>
                  <div className='head d-flex justify-content-center p-2 ms-1'>
                    <ProfileHeading classname="ms-1" head="Muhammad" />
                    <Dropdown />
                  </div>
                </div>
        </div>
        </> 
  )
}

export default Nav
