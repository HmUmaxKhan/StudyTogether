const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const router  = express.Router();


const regValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    mail: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
})

router.post('/reg',Validator.body(regValid),(req,res)=>{
    console.log("REGISTER");
    res.send('REGISTER');
})

module.exports = router;