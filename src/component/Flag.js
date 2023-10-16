import React from 'react'

const Flag = ({url,text,para}) => {
  return (
    <>
    <div >
      <div className='container-fluid flag-container m-1 ms-0 col-sm-9  col-12' >
        <div className='row'>
          <span className='d-flex'><img className='flag' src={url} /><img className='flag' src={url} /></span> 
          <h5 style={{ fontSize: "10.486px" }}>{text}</h5>
          <p style={{ fontSize: "10.486px" }}>{para}</p>
        </div>
       
      </div>
      </div>
    </>
  )
}

export default Flag
