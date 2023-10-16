import React from 'react';
import { Link } from 'react-router-dom';
import Icon from "../images/element.svg"
import Icon1 from "../images/user.svg";
import Icon2 from "../images/shieldsearch.svg";
import Icon3 from "../images/Group.png";
import Icon4 from "../images/usersearch.svg";
// import Icon5 from "../images/🦆 icon _support_.png";
import Icon6 from "../images/Group 222.png";
import Icon7 from "../images/logoutcurve.svg";
import Image from '../images/Logo.svg'

const SideBarList = () => {
  let routes = [
    {
      id: Math.random(),
      path: '/',
      image: Icon,
      name: 'Dashboard'
    },
    {
      id: Math.random(),
      path: '/profile',
      image: Icon1,
      name: 'Profile'
    },
    {
      id: Math.random(),
      path: '/research-portal',
      image: Icon2,
      name: 'Research Portal'
    },
    {
      id: Math.random(),
      path: '/signal-portal',
      image: Icon3,
      name: 'Signal Portal'
    },
    {
      id: Math.random(),
      path: '/referal',
      image: Icon4,
      name: 'Referal'
    },
    {
      id: Math.random(),
      path: '/help',
      // image: Icon5,
      name: 'Help'
    },
  ];
  return (
    <div >
      <div className='sidebar'>

        <img className="object-fit-cover mt-3 ms-4 mb-4" src={Image} alt='logo' />
        <ul className="list-unstyled list-item ">
          {routes.map((link) => (
            <li className="" key={link.id}>
              <Link to={link.path} className="text-decoration-none text-white p-0">
                <div className="d-flex align-items-center ">
                  <img className="icon-image ms-5" src={link.image} alt="icon" />
                  <span className="">{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
          <hr />

          <li className="mt-5">
            <Link to="/setting" className="text-decoration-none text-white p-0">
              <div className="d-flex align-items-center">
                <img className="icon-image ms-5" src={Icon6} alt="icon" />
                <span className="">Setting</span>
              </div>
            </Link>
          </li>
          <li className="">
            <Link to="/logout" className="text-decoration-none text-white p-0 ">
              <div className="d-flex align-items-center">
                <img className="icon-image ms-5" src={Icon7} alt="icon" />
                <span className="">Logout</span>
              </div>
            </Link>
          </li>
        </ul>



      </div>


    </div>
  )
}

export default SideBarList
