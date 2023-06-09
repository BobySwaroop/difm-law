import React from 'react'
import Arrow from "../../images/lawyers-arrow.svg"
import Categories from './Categories'
const Lawyerscategories = ({logo, type, available}) => {
  return (
   
      <div className='col-lg-3 p-4'>
          
          <div className='category rounded-3 mt-4 p-4'>
              <img src={logo}></img>
          <p className='mt-2'>{type}</p>
          <div className='d-flex'>
          <h6>{available}</h6>
          <img src={Arrow} className='ms-2'></img>
          </div>
          
          </div>
        
      </div>
   
  )
}

export default Lawyerscategories