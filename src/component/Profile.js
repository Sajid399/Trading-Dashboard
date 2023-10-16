import React from 'react';
import imageUrl3 from '../images/Ellipse 1.png'
import Nav from './Nav';
import Icon1 from '../images/useredit.png';
import Icon from './Icon';
import Icon2 from '../images/notification.png';
import Icon3 from '../images/languagecircle.png';
import Icon4 from '../images/black.png';
// import Icon5 from '../images/🦆 icon _contact_.png';
import Icon6 from '../images/🦆 icon _lock_.png';


const Profile = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <Nav headingComponent="Profile"/>

        <div className='profile-page-cont col-9 '>
          <img src={imageUrl3} style={{ height: "100px", width: "100px" }} className='objectFit-cover img-fluid' />
          <h6>Muhammad Khan</h6>
          <span className='me-4' style={{fontSize:"14px",fontWeight:"normal"}}>muhammad@gmail.com</span><span style={{fontSize:"14px",fontWeight:"normal"}}>034193463837</span>
        </div>
        <div className='profile-page-cont1 col-8 '  >
          <div className='row'>
          <div className='english1 col-10 '>
          <span className="button d-flex "><Icon className="me-4" src={Icon1}/>Edit Profile</span>
            <span className="button d-flex "><Icon src={Icon2}/>Notifications</span>
           <span className="button d-flex "><Icon src={Icon3}/>Language</span>
          </div>
            <div className='englis col-2 d-flex flex-column justify-content-center align-items-center'>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" />
            </div>
              <p className=''>English</p>
            </div>

          </div>
        </div>

        <div className='profile-page-cont1 col-8 '>
        <span className="button d-flex "><Icon className="text-black" src={Icon4}/>Help & Support</span>
            {/* <span className="button d-flex "><Icon src={Icon5}/>Account and Detail</span> */}
           <span className="button d-flex "><Icon src={Icon6}/>Privacy Policy</span>
        </div>
       
        
      </div>
    </div>

  )
}

export default Profile