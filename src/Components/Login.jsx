import React, { useState } from 'react'

const Login = () => {
    const [Fullname, setFullname] = useState({
        email: '',
        password:'',
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
         if(validate()){

            fetch("http://localhost:8000/users/").then((res) =>{
        //   console.log(res);
            return res.json();
         }).then((resp)=>{
            // alert("success");
            console.log(resp);
            // if(Object.keys(resp).length === 0){
            //     alert("please enter valid username");
            // }else{
                // || resp[0].password === Fullname.password
                if(resp[0].email === Fullname.email){
                    alert("login successfull");
                }else{
                    alert("please enter valid credioentials");
                }
            // }
         }).catch((err)=>{
            
            console.log(err);
         })
         }
         
    
         
      
      }

      const validate = () => {
        let result = true;
        if(Fullname.email === "" || Fullname.email === null){
        result=false;
        alert("Please Enter User Name");
      }
      if(Fullname.password === '' || Fullname.password===null){
        result=false;
        alert("Please Enter Password");
      }
      return result;
    }
  return (
    <div className='container'>
        <form class="row g-3 mt-4" onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Enter Email</label>
    <input type="email" value={Fullname.email} onChange={handleChange} class="form-control" id="email" name='email'/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Password</label>
    <input type="password" value={Fullname.password} onChange={handleChange} class="form-control" id="pass" name='password'/>
  </div>
  <div class="col-md-12">
    <button type="submit" onClick={handleSubmit} class="btn btn-primary form-control mt-2 signup">Login</button>
  </div>
</form>
    </div>
  )
}

export default Login