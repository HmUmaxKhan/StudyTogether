const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const User = require('../../models/auth/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const auth = require('../../middlewares/auth')
require("dotenv").config();

const router  = express.Router();


const logValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
})

router.post('/log',Validator.body(logValid), async(req,res)=>{

    try{
    const {username,password} = req.body;

    const userExits = await User.findOne({username:username});

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

router.get("/test",auth,(req,res)=>{
    res.send("Request passed");
})

module.exports = router;