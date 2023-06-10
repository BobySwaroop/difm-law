import React from 'react'

import "./Featured-lawyers.css";
import Arrow from "../../images/lawyers-arrow.svg"

const Lawyers_featured = ({profile,name,location,category,time,description,experience}) => {
  return (
       
        <div className='col-lg-3 rounded-3 mt-4 bg-white mb-4 card shadow p-3 mb-5 bg-body rounded mt-5 lawyers-card'>
         <div className='row  mt-2' id='lawyer'>
            <div className='col-lg-4 col-sm-4 col-6'>
               <img src={profile} className='ms-2'></img>
            </div>
            <div className='col-lg-8 col-sm-8 col-6'>
             <p className='fs-6 mb-0 pb-1 h6'>{name}</p>
             <p className='city'>{location}</p>
            </div>
         </div>

        <span className='ms-5  fs-5 fw-normal'>{category}</span>
      
      <div className='mt-3 ms-3 me-3'>
        <p className='font-weight-bold fs-6 mb-1'>{time}</p>
        <p className='fs-6 lawyers-desc font-weight-normal lh-base'>{description}</p>
        <div className='row mt-4 practice'>
            <div className='col-lg-6 col-sm-6 col-6'>
            <span className='fs-6 exp'>{experience}</span>
            </div>
            <div className='col-lg-6 col-sm-6 col-6'>
                <button className='btn btn-primary viewbtn'>View Profile</button>
                </div>
        </div>
      </div>


        </div>
        
  

 
  )
}

export default Lawyers_featured