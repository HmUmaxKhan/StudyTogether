const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const router  = express.Router();
const bcrypt = require('bcrypt-nodejs');
const JWT = require('jsonwebtoken');

const User = require('../../models/auth/user');


const regValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    mail: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
    phone: Joi.string().max(13),
})

router.post('/reg',Validator.body(regValid), async (req,res)=>{

   try {
    
    const {name,phone,address,username,mail,password} = await req.body;
    const userExits = await User.findOne({mail:mail});
     
    if (userExits) {
        res.send(400).send("User already exits");
    }

    const securePASS = bcrypt.hash(password,15);

    const user = await User.create({
        name, phone, address,
        mail: mail.toLowerCase(),
        password:securePASS
    });

    const token = 'JWT TOKEN';

    res.status(200).json({
        userDetails:{
            name: user.name,
            mail: user.mail,
            token: token,
            password:user.password,
        }
    })

   } catch (error) {
    res.status(500).send("Something went wrong");
   }

})

module.exports = router;