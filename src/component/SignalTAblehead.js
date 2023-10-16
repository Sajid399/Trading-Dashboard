import React from 'react'

const SignalTAblehead = ({name,date,pair,type,entry,closing,stoplimit}) => {
  return (
    <div className='w-100 h-100'>
      <div className='d-flex'>
         <span className='m-3'>{name}</span>
         <span className='m-3'>{date}</span>
         <span className='m-3'>{pair}</span>
         <span className='m-3'>{type}</span>
         <span className='m-3'>{entry}</span>
         <span className='m-3'>{closing}</span>
         <span className='m-3'>{stoplimit}</span>
      </div>
    </div>
  )
}

export default SignalTAblehead
