import React from 'react'

const Signaltablebody = ({date,pair,type,entry,closing,stoplimit}) => {
  return (
    <div>
      <div className='d-flex'>
         <span className='m-3 tablebody'>{}</span>
         <span className='m-3 tablebody'>{date}</span>
         <span className='m-3 tablebody'>{pair}</span>
         <span className='m-3 tablebody'>{type}</span>
         <span className='m-3 tablebody'>{entry}</span>
         <span className='m-3 tablebody'>{closing}</span>
         <span className='m-3 tablebody'>{stoplimit}</span>
      </div>
    </div>
  )
}

export default Signaltablebody
