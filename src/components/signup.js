import React, { useState } from 'react'

import { json } from 'react-router-dom';
import { useNavigate} from'react-router-dom';

const Signup = (props) => {
  const Host= "http://localhost:5000"
  let history = useNavigate();

  const onChange = (e) => {
    setcradensital({...cradensital,[e.target.name]: e.target.value });
    }
  const [cradensital,setcradensital] = useState({email:"",password:"",cpassword:"",name:""});
   const handlesumit = async(e) => {
    e.preventDefault();
    // props.login(e.target.email.value,e.target.password.value)
  
    const response = await fetch(`${Host}/api/auth/createuser`, {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:cradensital.name,email:cradensital.email,password:cradensital.password}), 
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token',json.authtoken);
      history("/home");
      props.showalert("successfuly crerate account","success")
  }else{
    // alert(json.message) 
    props.showalert("email already in use","danger");
  }
}

  return (
    <div>
 
        <form onSubmit={handlesumit}>

        <div class="mb-3">
    <label for="name" class="form-label">name</label>
    <input type="text" class="form-control" name='name' value={cradensital.name} onChange={onChange} id="name" />
    <div id="nameHelp" class="form-text">USERNAME</div>
  </div>  
    
  <div class="mb-3">
    <label for=" " class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={onChange} value={cradensital.email} name='email' id="email1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Password</label>
    <input type="password" class="form-control" name='password' value={cradensital.password} onChange={onChange}id="Password"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">conform Password</label>
    <input type="text" class="form-control" name='cpassword' value={cradensital.cpassword} onChange={onChange} id="cPassword"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Sign-up</button>
</form>
      
    </div>
  )
}

export default Signup
