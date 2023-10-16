import React from 'react'
import Nav from './Nav'
import signalData from './SignalData';
import SignalTAblehead from './SignalTAblehead';
import Signaltablebody from './Signaltablebody';
import imageUrl3 from '../images/Ellipse 1.png';
import Icon from './Icon';
import SearchIcon from '../images/searchnormal1.png';


const SignalPortal = () => {
 
  return (
    <div className='container-fluid'>
      <Nav headingComponent="Signal Portal"/>
      <div className='research-portal col-10'>
      <div className='d-flex flex-column justify-content-end align-items-end'>
              <form className="d-flex" role="search">
                <div className="input-group mb-3">
                  <Icon type="submit" src={SearchIcon}/>
                  <input type="text" className="form-control me-2" placeholder="Search" aria-label="Search" aria-describedby="button-addon1"/>
                </div>
              </form>
            </div>
            <table className="table table-responsive">
            <thead>
              <tr className=''>
                <th scope="col" class="px-4">Name</th>
                <th scope="col" class="px-4">Date/Time</th>
                <th scope="col" class="px-4">Type</th>
                <th scope="col" class="px-4">Pair</th>
                <th scope="col" class="px-4">Entry</th>
                <th scope="col" class="px-4">Closing</th>
                <th scope="col" class="px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {signalData.map((data, index) => (
                <tr key={index}>
                  <td class="table-data px-3 ps-3 me-4"><span><img className='imagetrend me-3' src={imageUrl3} alt="Trend" /><span>Signal</span></span>
                  </td>
                  <td class="table-data px-3 ps-3">{data.date}</td>

                  <td class="table-data px-3 ps-3">{data.type}</td>
                  <td class="table-data px-3 ps-3">{data.pair}</td>
                  <td class="table-data px-3 ps-3">{data.entry}</td>
                  <td class="table-data px-3 ps-3">{data.closing}</td>
                  <td class="table-data px-3 ps-3">
                      <div className={`research-btn status-${data.status.toLowerCase()}`}>{data.status}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default SignalPortal
