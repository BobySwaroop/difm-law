import React, { useState } from 'react'
import "./Register.css";

const Register = () => {
    const [Fullname, setFullname] = useState({
        name: '',
        email: '',
        message: '',
        phone:'',
        experience:'',
        specialization:'',
        education:'',
        worktype:'',
        pic:'',
        password:'',
        confirmpassword:''

      })
      const handleChange = (event) =>{
        let value = event.target.value;
        let name = event.target.name;
     
        setFullname((prevalue) => {
          return {
            ...prevalue,   // Spread Operator              
            [name]: value
          }
        })
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        const url = "http://localhost:8000/users"
        fetch(url, {
          method:'post',
          headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
        },
          body:JSON.stringify(Fullname)
        }).then((res)=>{
          console.log(res);
          if(res.state==200){
            alert("successs");
          }
        
        }).catch((err)=>{
          console.log(err);
        })
        console.log(Fullname);
      }
  return (
    <div className='container'>
<form class="row g-3 mt-4">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Enter Full Name</label>
    <input type="text" onChange={handleChange} placeholder='Enter your full name' class="form-control" id="inputEmail4" name='name'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Enter Email</label>
    <input type="email" onChange={handleChange} class="form-control" id="inputPassword4" name='email'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone No.</label>
    <input type="number" onChange={handleChange} class="form-control" id="inputPassword4" name='phone'/>
  </div>

  <div class="col-md-6">
    <label for="inputState" class="form-label">Experience</label>
    <select id="inputState" onChange={handleChange} class="form-select" name='experience'>
      <option selected>Choose...</option>
      <option>2 Years</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Specialization(s)</label>
    <select id="inputState" onChange={handleChange} class="form-select" name='specialization'>
      <option selected>Choose...</option>
      <option>React</option>
    </select>
  </div>

  <div class="col-md-6">
    <label for="inputZip" class="form-label">Education</label>
    <input type="text" onChange={handleChange} class="form-control" id="inputZip" name='education'/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Work Type</label>
    <select id="inputState" onChange={handleChange} class="form-select" name='worktype'>
      <option selected>Choose...</option>
      <option>Technical</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Profile Picture</label>
    <input type="file" onChange={handleChange} class="form-control" id="inputZip" name='pic'/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Password</label>
    <input type="text" onChange={handleChange} class="form-control" id="inputZip" name='password'/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Confirm password</label>
    <input type="text" onChange={handleChange} class="form-control" id="inputZip" name='confirmpassword'/>
  </div>
  <div class="col-md-12">
    <label for="inputZip" class="form-label">Bio/Profile Summary</label>
    <textarea class="form-control" onChange={handleChange} placeholder='Bio/Profile Summary' id="form6Example7" rows="4" name='message'></textarea>
  </div>

  <div class="col-md-12">
    <button type="submit" onClick={handleSubmit} class="btn btn-primary form-control mt-2 signup">Register Now</button>
  </div>
</form>
    </div>
  )
}

export default Register