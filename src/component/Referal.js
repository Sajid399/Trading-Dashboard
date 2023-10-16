import React from 'react';
import Nav from './Nav';
import signalData from './SignalData';
import SignalTAblehead from './SignalTAblehead';
import Signaltablebody from './Signaltablebody';
import imageUrl3 from '../images/Ellipse 1.png';
import Heading from './Heading';
import Icon from './Icon';
import SearchIcon from '../images/searchnormal1.png';
import EditIcon from '../images/edit.png'

const Referal = () => {
  const articles = [
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
      Icon: { EditIcon }
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Unpaid",
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
     
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "UnPaid",
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
    },
    {
      topic: "Ali Khan",
      dateTime: "April 12, 2023",
      reward: "2 Signal",
      status: "Paid",
    },
    // Add more articles as needed
  ];
  return (
    <div>
      <Nav headingComponent="Referal" />
      <div className='row'>
        <div className='profile-page-cont1 col-10 pt-4'>
          <Heading heading="Refer Friends and Get Reward" />
          <div class="input-group1  mb-3 mt-4">
            <input type="text" class="form-control" placeholder="http://www.figma.com/file/AYUwq36NKyub7IOPunhjdr5yup...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="referal-button" type="submit">Copy Link</button>
            </div>
          </div>
        </div>
        <div className='profile-page-cont2 col-10'>
          <div className='d-flex flex-column justify-content-end align-items-end'>
            <form className="d-flex" role="search">
              <div className="input-group mb-3">
                <Icon type="submit" src={SearchIcon} />
                <input type="text" className="form-control me-2" placeholder="Search" aria-label="Search" aria-describedby="button-addon1" />
              </div>
            </form>
          </div>
          <table className="table table-responsive">
            <thead>
              <tr className=''>
                <th scope="col" class="px-4">Name</th>
                <th scope="col" class="px-4">Date/Time</th>
                <th scope="col" class="px-4">Reward</th>
                <th scope="col" class="px-4">Status</th>
                <th scope="col" class="px-4">View Reciept</th>


              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index}>
                  <td class="table-data px-3 ps-3"><span><img className='imagetrend' src={imageUrl3} alt="Trend" /></span>
                  {article.topic}</td>
                  <td class="table-data px-3 ps-3">{article.dateTime}</td>
                  <td class="table-data px-3 ps-3">{article.reward}</td>
                  <td class="table-data px-3 ps-3"> <div
                    className={`research-btn ${article.status.toLowerCase() === 'paid' ? 'status-Paid' : 'status-unPaid'
                      }`}
                  >
                    {article.status}
                  </div></td>
                  <td class="table-data px-3 ps-3"><Icon src={EditIcon} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Referal
