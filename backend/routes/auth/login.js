const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const user = require('../../models/auth/user');
const bcrypt = require('bcrypt-nodejs');
const JWT = require('jsonwebtoken');

const router  = express.Router();


const logValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
})

router.post('/log',Validator.body(logValid), async(req,res)=>{

    try{
    const {username,password} = await req.body;

    const user = user.findOne({username:username});

    if(user){
        res.status(200).json({
            userDetails:{
               username:user.username,
               mail:user.mail,
               password:user.password,
               token:user.token
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

module.exports = router;