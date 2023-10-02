import {React,useState} from 'react'

function Register() {

   const [userDetails , setUserDetails] = useState(
    {
        Email: "",
        Password: "",
        Phone: "",
        Address: "",
    }
   );

const sign1 = (e)=>{
    setUserDetails = ({...userDetails,[e.target.name]:e.target.value})
}

  return (
    <div style={{height:"100vh"}} className="container d-flex justify-content-center align-items-center">
    
    <form className='my-4 p-3' style={{ border:"5px solid",borderColor:"black",width:"100%"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" onChange={sign1} name='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" onChange={sign1} name='Password' id="exampleInputPassword1" />
  </div>

  <div class="mb-3">
    <label for="Address" class="form-label">Address</label>
    <input type="text" class="form-control" onChange={sign1} name='Address' id="Address" />
  </div>
  <div class="mb-3">
    <label for="phone" class="form-label">Phone</label>
    <input type="text" class="form-control" onChange={sign1} name='Phone' id="phone" />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Register