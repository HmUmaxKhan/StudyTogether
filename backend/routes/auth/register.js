const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const router  = express.Router();
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
require("dotenv").config();

const User = require('../../models/auth/user');


const regValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    mail: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
    phone: Joi.string().max(13),
    name: Joi.string(),
    address:Joi.string(),
})

router.post('/reg',Validator.body(regValid), async (req,res)=>{

   try {
    
    const {name,phone,address,username,mail,password} = req.body;
    const userExits = await User.findOne({mail:mail.toLowerCase()});
     
    if (userExits) {
        res.status(400).send("User already exits");
    }

    const securePASS = await bcrypt.hash(password,10);

    const user = await User.create({
        name, phone, address,username,
        mail: mail.toLowerCase(),
        password:securePASS
    });

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