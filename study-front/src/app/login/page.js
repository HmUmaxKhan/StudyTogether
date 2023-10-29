"use client"

import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {


  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    username:"",
    password:""
  })

  const Change = (e)=>{
     setLogin({...login,[e.target.name]:e.target.value})
  }

  const handleClick =async (e) =>{
    e.preventDefault();
    console.log(login);

    let response = await fetch("http://localhost:5002/api/auth/log",{
      method:'post',
      headers:{
        'content-type':'application/json', 
      },
      body:JSON.stringify({
        username : login.username ,
        password: login.password
      })
    });
    response = await response.json();

    console.log(response);

    if (response) {
      
      localStorage.setItem("login", JSON.stringify(response))
      window.location.href="/dashboard";
      
    }
  }

  return (
    <div className='container flex justify-center items-center'  style={{height:"100vh"}}> 
    <div className="form-floating mb-3 ">
  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="username" onChange={Change} />
  <label htmlFor="floatingInput">Email address</label>
</div>
<br></br>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={Change}/>
  <label htmlFor="floatingPassword" >Password</label>
</div>
<br></br>
<button className=' text-center bg-slate-400' onClick={handleClick}>Submit</button>
<Link href={"/register"}> Registration</Link>
    </div>

  )
}

export default Login