// All necessary files and libraries
const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const router  = express.Router();
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

//Calling env file 
require("dotenv").config();

// User Model of Mongo DB
const User = require('../../models/auth/user');

// Creatting a validation
const regValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    mail: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
    phone: Joi.string().max(13),
    name: Joi.string(),
    address:Joi.string(),
})

/* The code `router.post('/reg',Validator.body(regValid), async (req,res)=>{` is defining a POST route
for the '/reg' endpoint. This route is used for user registration. */
router.post('/reg',Validator.body(regValid), async (req,res)=>{

   try {
    
    /* The code is extracting the values of `name`, `phone`, `address`, `username`, `mail`, and
    `password` from the `req.body` object. */
    const {name,phone,address,username,mail,password} = req.body;
    const userExits = await User.findOne({mail:mail.toLowerCase()});

     
    if (userExits) {
        res.status(400).send("User already exits");
    }

    /* The code is using the bcrypt library to hash the password before storing it in the database. */
    const securePASS = await bcrypt.hash(password,10);

    const user = await User.create({
        name, phone, address,username,
        mail: mail.toLowerCase(),
        password:securePASS
    });


    /* The code `const token = JWT.sign({...}, process.env.JWT_SECRET, {...});` is generating a JSON
    Web Token (JWT) for the user. */
    const token = JWT.sign(
        {
            id : user.id,
            mail: user.mail,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'24h',
        }
    );

    res.status(200).json({
        userDetails:{
            _id: user._id,
            name: user.name,
            mail: user.mail,
            token: token,
            password:user.password,
        }
    });

   } catch (error) {
    res.status(502).send("Something went wrong");
   }

})

module.exports = router;