"use client"

import { useState } from "react";

function Login() {

  const [reg, setReg] = useState({
    mail:"",
    name:"",
    address:"",
    username:"",
    password:"",
    phone:""
  })

  const Change = (e)=>{
     setReg({...reg,[e.target.name]:e.target.value})
  }

  const handleClick =async (e) =>{
    e.preventDefault();
    console.log(reg);
    let response = await fetch("http://localhost:5002/api/auth/reg",{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
            mail:reg.mail,
            name:reg.name,
            address:reg.address,
            username:reg.username,
            password:reg.password,
            phone:reg.phone
      })
    });
    response = await response.json();
    console.log(response);
  }

  return (
    <div className='container flex justify-center items-center'  style={{height:"100vh"}}> 

    <div class="form-floating mb-3 ">
  <input type="text" name="name" onChange={Change} />
  
</div>

    <div>
    <p>Address</p>
  <input type="text" name="address" onChange={Change} />
  
</div>


    <div class="form-floating mb-3 ">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="username" onChange={Change} />
  <label htmlFor="floatingInput">Username</label>
</div>
<br></br>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={Change}/>
  <label htmlFor="floatingPassword" >Password</label>
</div>
<br></br>

<div class="form-floating mb-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="mail" onChange={Change} />
  <label htmlFor="floatingInput">Email address</label>
</div>
<br></br>


<div class="form-floating mb-3 ">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="phone" onChange={Change} />
  <label htmlFor="floatingInput">Phone</label>
</div>
<br></br>

<button className=' text-center bg-slate-400' onClick={handleClick}>Submit</button>
    </div>

  )
}

export default Login