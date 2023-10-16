import React from 'react'

const Signalimage = ({image,signal}) => {
  return (
    <div >
      <span className='signalimage'><img src={image} alt='error'/><span className='sigpara'>{signal}</span></span>
    </div>
  )
}

export default Signalimage
