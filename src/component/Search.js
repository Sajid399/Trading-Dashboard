import React, { useState } from 'react'

const Search = () => {
    const [issearchOpen,setsearchOpen] = useState(false);
    const searchNotification = () => {
        setsearchOpen(!issearchOpen)
    }
  return (
    <div className="ms-1">
      <div className="notifications" onClick={searchNotification}>
        <div>
            <p>
            This is the Search Page
            </p>
            <p>
            This is the Search Page
            </p>
            <p>
            This is the Search Page
            </p>
         
  {/* <ul className='d-flex mb-2'>
        <li className='btn'>All</li>
        <li className='btn'>Notification</li>
        <li className='btn'>Currency</li>
        <li className='btn'>Signal</li>
      </ul>
      <Flag className="col-12" url={FlagImage} text="USDEUR" para="US DOLLAR/CHINESE YEN" /> */}
        </div>
      </div>
    </div>
  )
}

export default Search
