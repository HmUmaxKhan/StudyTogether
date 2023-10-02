import React from 'react'

function Login() {
  return (
    <div style ={{height:"100vh"}} className="container d-flex justify-content-center align-items-center"><form className='my-4 p-3' style={{ border:"5px solid",borderColor:"black",width:"100%"}}>
    <div class="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Login