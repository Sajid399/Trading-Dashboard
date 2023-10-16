import React from 'react'

const Heading = ({greeting,heading}) => {
  return (
    <div>
      <h2 ><span>{greeting}</span><span className='name'>{heading}</span></h2>
    </div>
  )
}

export default Heading
