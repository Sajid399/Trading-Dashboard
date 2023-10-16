import React from 'react'

const Profileimage = ({profileimage,showtime,paragraph}) => {
  return (
    <div className='d-flex '>
      <span ><img className='imagetrend img-fluid ' src={profileimage} alt='icon'/>
      <p className='trending-paragraph'>{showtime}</p>
      <p className='paragraph'>{paragraph}</p>
      </span>
    </div>
  )
}

export default Profileimage
