/* The code is importing necessary modules and dependencies for the JavaScript file. */
const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const User = require('../../models/auth/user');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const auth = require('../../middlewares/auth');
const authToken = require('../../middlewares/auth');
const invitation = require('../../models/InvitationModal/Invitation');
const { friendPendingInvitation } = require('../../SocketHandler/update/friends');
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

router.post('/rejectfrnd',authToken,
 async(req,res)=>{

    try{
   
    // Taking the req. sender id from the rejecting button 
    let id = req.body.id.id;
    
    // printing the id
    console.log(id);

    // Finding id of the user(mine)
    const userId = req.user;

    console.log("User id in the api/frndreject:  ", userId.id);

    // Findin that if invitation exits in the database 
    let userexist = await invitation.exists({_id:id});
    
    if (userexist) {
        // Deletin the req.
       await invitation.findByIdAndDelete(id);    
    }

    friendPendingInvitation(userId.id);
    return res.status(200).json({Msg:"Friend Request is rejected"});
  }
  catch(err){
    res.status(502).send("Something went wrong");
  }
})

module.exports = router;