import React from 'react';
import Heading from '../component/Heading';
import Profileimage from '../component/Profileimage';
import SignalTAblehead from '../component/SignalTAblehead';
import Signaltablebody from '../component/Signaltablebody';
import LineChart from '../component/LineChart';
import Button from '../component/Button';
import imageUrl3 from '../images/Ellipse 1.png';
import SignalImage from '../images/Rectangle 117.png';
import SignalImage1 from '../images/Rectangle 117 (1).png';
import SignalBodyIMage from '../images/Rectangle 983.png';
import SignalbodyImage1 from '../images/Rectangle 118 (1).png';
import SignalbodyImage2 from '../images/Rectangle 118.png';
import { useState } from 'react';
import Nav from './Nav';
import signalData from './SignalData'
import Tab from './Tab';
import LogoImage from "../images/Logo.png"
import SideBarList from './SideBarList';


const Dashboard = () => {

  return (
    <>
      <div className='h-100 m-0  p-0 container-fluid ' >
        <div className=' h-100 m-0  p-0 '>
          <Nav headingComponent={<Heading className="d-none d-md-block mt-3"  greeting="Welcome back , " heading="Muhammad" />} />
          

          <div className="row m-0  justify-content-around " >
            <div className="main-col1 col-12 col-md-8 mb-3 ps-3 p-0 m-0  bg-white shadow" style={{opacity: "0.9;", height: "360px;",borderRadius:"18px"}} >
              <LineChart />
            </div>,
            <div className=" col-12 col-md-3 mb-3 overflow-hidden ps-1 p-0 m-0  bg-white shadow" style={{opacity: "0.9;", height: "360px;",borderRadius:"18px"}} >
              <div className='d-flex  '>
               <Tab/>
              </div>
            </div>
            <div className="main-col3 col-12 col-md-5 mb-3 ps-3 p-0 m-0  bg-white shadow" style={{opacity: "0.9;", height: "360px;",borderRadius:"18px"}} >
              <div >
                <Heading greeting="Trending" />
                <span className='d-flex justify-content-between'><Profileimage profileimage={SignalImage} showtime="Routers 22 min ago" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /><img className="img-fluid signalbody " src={SignalBodyIMage} /></span>
                <span className='d-flex justify-content-between'><Profileimage profileimage={SignalImage1} showtime="Routers 22 min ago" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /><img className="img-fluid signalbody " src={SignalbodyImage1} /></span>
                <span className='d-flex justify-content-between'><Profileimage profileimage={SignalImage1} showtime="Routers 22 min ago" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." /><img className="img-fluid signalbody " src={SignalbodyImage2} /></span>
              </div>
            </div>
            <div className="main-col4 col-12 col-md-6 mb-3 ps-3 p-0 m-0  bg-white shadow" style={{opacity: "0.9;", height: "360px;",borderRadius:"18px"}} >
              <div>
                <Heading greeting="Signal" />
                <table className='table table-responsive'>
                  <thead className='tablehead'>
                    <SignalTAblehead name="Name" date="Date/Time" type="Type" pair="Pair" entry="Entry" closing="Closing" stoplimit="Stop Limit" />
                  </thead>
                  <tbody>
                    {signalData.map((item, index) => (
                      <tr key={index}>
                        <th className='d-flex'>
                          <span><img className='imagetrend' src={imageUrl3} alt="Trend" /></span>
                          <span>
                            <Signaltablebody
                              date={item.date}
                              type={item.type}
                              pair={item.pair}
                              entry={item.entry}
                              closing={item.closing}
                              stoplimit={item.stoplimit}
                            />
                          </span>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
