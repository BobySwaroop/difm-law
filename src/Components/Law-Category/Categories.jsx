import React from 'react'
import "./Categories.css";
import Arrow from "../../images/lawyers-arrow.svg";
import { category } from '../Load-data/Load.js';
import Lawyerscategories from './Lawyerscategories';
import Lawyers_featured from '../Featured-Lawyers/Lawyers_featured';
import { Lawyers } from "../Load-data/Load";

const Categories = () => {
  return (
    <>
    <div className='container cat_law'>
        <div className='row'>
            <div className='col-lg-6'>
     <h1 className='mt-4'>Explore by<span id='cat' className='ms-2'>categories</span></h1>
     </div>
     <div className='col-lg-6 '>
        <div className='d-flex mt-4 float-xl-end'>
      <p className='fs-6 fw-bold mt-2'>Show all lawyers</p><img src={Arrow} className='ms-2' ></img>
      </div>
     </div>
     </div>

     {/* law categories start */}
     <div className='row'>
      {/* injury lawyer */}
      {category.map((category)=>
      <Lawyerscategories key={category.id} {...category}/>
      )}
         {/* {category.map((card) => <Lawyerscategories key={card.id} {...card} />)} */}
          {/* injury lawyer */}



          
     </div>
     {/* law categories end */}

 


    </div>
        {/* suggestions field */}
     
        <div className='row bg-white want  rounded-3 suggestion shadow'>
        <div className='col-lg-6 text-center col-xs-6'>
        <p className='fs-1 fw-bold'>Want <span id='suggest' className='sugg'>Our Suggestions</span> <span id='ques' className='sugg'><b>?</b></span></p>
        </div>
        <div className='col-lg-6 text-center col-xs-6'>
          <button className='btn btn-primary cont mt-4 w-50'>Contact Now</button>
          </div>
       </div>


      {/* lawyers featued start */}
      <div className='container lawyers'>

<div className='row mx-auto'>
       {
        Lawyers.map((lawyer)=>
        < Lawyers_featured key={lawyer.id} {...lawyer} />
        )
       }
       </div>
       </div>
   
      {/* lawyers featued end */}

      
       </>
  )
}

export default Categories