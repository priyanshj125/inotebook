import React, { useState } from 'react'


const Login = (props) => {
  const Host= "http://localhost:5000"
  const [cradensital,setcradensital] = useState({email:"",password:"",});
    // const [password,setpassword] = useState("");
    const handlesumit = async(e) => {
      e.preventDefault();
      // props.login(e.target.email.value,e.target.password.value)
      
      
      
      const response = await fetch(`${Host}/api/auth/login`, {
        method: "POST",  
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({email:cradensital.email,password:cradensital.password}), 
      });
      
      const json = await response.json();
        console.log(json);
      }
      const onChange = (e) => {
        setcradensital({...cradensital,[e.target.name]: e.target.value });
        
      }
    
  return (
       <>
  <form onSubmit={handlesumit}>
  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={cradensital.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label HtmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={cradensital.password} onChange ={onChange} name='password'  id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary" onSubmit={handlesumit}>sign in</button>
</form>
        </>
  )
}

export default Login
