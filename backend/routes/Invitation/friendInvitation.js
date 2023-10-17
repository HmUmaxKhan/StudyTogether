/* The code is importing necessary modules and dependencies for the JavaScript file. */
const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const User = require('../../models/auth/user');
const auth = require('../../middlewares/auth')

const router  = express.Router();


//Validator

const friendInvitationValidator = Joi.object({
    targetMailAddress : Joi.string().email(),
});


// Making Route for friend Invitation

router.post("/friendinvite",auth,Validator.body(friendInvitationValidator),
async (req,res)=>{
    const targetMailAddress = req.body;

    const {userId, mail} = req.user;

    try {

        // Check if the user which is invited is not exit.
        
        const targetUser = User.findOne({
            mail:targetMailAddress,
        });

        if (!targetUser) {
            res.status(404).
            send("Email does not exits in the Users");
        }

        // Check if the user is not invite itself

        if (mail.toLowerCase()===targetMailAddress.toLowerCase()) {
            res.status(409).
            send("You can't be your own friend!");
        }

        
        
    } catch (error) {
        res.status(500)
        .send("There is custom error", error);
    }
})