import React from 'react'
import Nav from './Nav'
import Icon from './Icon';
import SearchIcon from '../images/searchnormal1.png';
import EditIcon from '../images/edit.png'
const ResearchPortal = () => {
  const articles = [
    {
      topic: "Introduction to candlestick patterns and best technical analytical tools",
      dateTime: "April 12, 2023",
      status: "Approved",
      Icon:{EditIcon}
    },
    {
      topic: "Trading forex as a side-hustle when you have a full-time job",
      dateTime: "April 12, 2023",
      status: "Pending",
    },
    {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Approved",
    },
     {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Approved",
    },
    {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Suspend",
    },
    {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Approved",
    },
    {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Pending",
    },
    {
      topic: "What to do when you feel like giving up on forex trading",
      dateTime: "April 12, 2023",
      status: "Approved",
    },
    // Add more articles as needed
  ];
  return (
    <div className="container-fluid">
      <Nav headingComponent="Research Portal"/>
      <span className='d-flex ms-5'>
        <Icon src={EditIcon}/>
        <h4 className=''>Add Article</h4>

      </span>
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
                  <th scope="col" class="px-4">Topic</th>
                  <th scope="col" class="px-4">Date/Time</th>
                  <th scope="col" class="px-4">Status</th>
                  <th scope="col" class="px-4">Edit</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={index}>
                    <td class="table-data px-3 ps-3">{article.topic}</td>
                    <td class="table-data px-3 ps-3">{article.dateTime}</td>
                    <td class="table-data px-3 ps-3">
                      <div className={`research-btn status-${article.status.toLowerCase()}`}>{article.status}</div>
                    </td>
                    <td class="table-data px-3 ps-3"><Icon src={EditIcon}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default ResearchPortal
