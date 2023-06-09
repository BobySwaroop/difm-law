import React from 'react'
import "./Hero.css";
import "../../index.css";
import Law from "../../images/DIFMLAWFindlaw.png";
const Hero = () => {
  return (
    <div className='container'>
          <div class="row mt-4">
    <div class="col-lg-6 col-sm-12 mt-5">
      <h1 className='title'>Find the <br></br><span>Right Lawyer</span></h1>
      <h2>For Your Legal Needs</h2>
      {/* search button */}
      {/* <div className='row'> */}
        {/* <div className='col-lg-6'>
        <div class="input-group rounded mt-4">
  <input type="search" class="form-control rounded" placeholder="Search Lawyers" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
        </div> */}
        <div className='col-lg-6'>
        <div class="input-group mt-4">
        <div class="form-outline d-flex">
        <input type="search" placeholder='Search by Location' class="form-control rounded w-170" /> 
          <input type="search" placeholder='Search by Location' class="form-control rounded" /> 
          <button type="button" class="btn btn-primary srch">
              Search 
            </button>
           </div>
            
          </div>
        </div>
      {/* </div> */}
     
      {/* search button */}
    </div>
    <div class="col-lg-6 col-sm-12">
     <img src={Law} alt="" style={{width:'100%', height:'100%'}}/>
    </div>
    
  </div>

    </div>
  )
}

export default Hero