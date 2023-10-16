import React from 'react';
import Nav from './Nav';
import Logo from '../images/invisor logo-01-01 3.png';
import image from '../images/Whatsapp.png';
import image1 from '../images/Phone Call.png'
import Icon from './Icon';
const Help = () => {
  return (
    <div className='container-fluid'>
      <Nav headingComponent="Help"/>
      <div className='row'>
        <div className='profile-page-cont3 col-9  align-item-center '>
          <img src={Logo} style={{ height: "100px", width: "100px" }} className='objectFit-cover img-fluid' />
          <h6>How Can We Help You</h6>
          <div className='whats col-4 d-flex justify-content-center m-auto mt-3 mb-3 ps-0'>
            <span><Icon src={image}/></span><span>WhatsApp</span> 
          </div>
          <div className='whats col-4 d-flex justify-content-center m-auto ps-0'>
          <span><Icon src={image1}/></span><span> Call</span> 

          </div>

        </div>

      </div>

    </div>
  )
}

export default Help
