/* The code is importing necessary modules and dependencies for the JavaScript file. */
const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const User = require('../../models/auth/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const auth = require('../../middlewares/auth')
require("dotenv").config();

const router  = express.Router();


/* The code `const logValid = Joi.object({ ... })` is defining a validation schema using the Joi
library. */
const logValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
})

/* The code `router.post('/log',Validator.body(logValid), async(req,res)=>{` is defining a POST route
handler for the '/log' endpoint. */
router.post('/log',Validator.body(logValid), async(req,res)=>{

    try{
   /* This code block is handling the logic for user authentication and generating a JSON Web Token
   (JWT) for the authenticated user. */

    const {username,password} = req.body;
    console.log(username+"  "+password);

    const userExits = await User.findOne({username:username});

    console.log(userExits);

    if(userExits && bcrypt.compare(password,userExits.password)){

        const token = JWT.sign(
            {
                id : userExits.id,
                mail: userExits.mail,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'24h',
            }
        )

        res.status(200).json({
            userDetails:{
                _id: userExits._id,
               username:userExits.username,
               mail:userExits.mail,
               password:userExits.password,
               token:token
            }
        })
    }
    else{
        res.status(404).send("Invalid Credentials");
    }
  }
  catch(err){
    res.status(502).send("Something went wrong");
  }
})

/* The code `router.get("/test",auth,(req,res)=>{ res.send("Request passed"); })` is defining a GET
route handler for the '/test' endpoint. This route is protected by the `auth` middleware, which
means that the user must be authenticated in order to access this endpoint. If the user is
authenticated, the server will respond with the message "Request passed". */
router.get("/test",auth,(req,res)=>{
    res.send("Request passed");
})

module.exports = router;