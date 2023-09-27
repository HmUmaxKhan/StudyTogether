const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});

const router  = express.Router();

const logValid = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    mail: Joi.string().min(3).required(),
    password: Joi.string().min(3).required(),
})

router.post('/log',Validator.body(logValid),(req,res)=>{
    console.log("LOGIN");
    res.send('LOGIN');
})

module.exports = router;