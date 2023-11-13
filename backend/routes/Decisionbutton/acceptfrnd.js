/* The code is importing necessary modules and dependencies for the JavaScript file. */
const express = require('express');
const Joi = require('joi');
const Validator = require('express-joi-validation').createValidator({});
const User = require('../../models/auth/user');
const authToken = require('../../middlewares/auth');
const invitation = require('../../models/InvitationModal/Invitation');
const { friendPendingInvitation } = require('../../SocketHandler/update/friends');
require("dotenv").config();

const router  = express.Router();



/* The code `router.post('/log',Validator.body(logValid), async(req,res)=>{` is defining a POST route
handler for the '/log' endpoint. */

router.post('/acceptfrnd',authToken,
 async(req,res)=>{

    try{
   
    // Taking the req. sender id from the rejecting button 
    let id = req.body.id.id;
    
    // printing the id
    console.log(id);

    // Finding the invitation

    let invitationreq = await invitation.findById(id);

    console.log("Invitation :"  , invitationreq);

    // Checking the invitation is valid
    if(!invitationreq){
        return res.status(405).json({Msg:"Friend invitation is not present so id is not valid"})
    }

    // collecting info about sender and receiver
    const {senderID, receiverID} = invitationreq;

    console.log("Accept frnds sender :  ", senderID.toString());
    console.log("Accept frnds receiver :  ", receiverID.toString());

    // making friends
    let senderUser = await User.findById(senderID);
    senderUser.friends = [...senderUser.friends,receiverID];

    let receiverUser = await User.findById(receiverID);
    receiverUser.friends = [...receiverUser.friends,senderID];
    
    // Saving changes to database
    await senderUser.save();
    await receiverUser.save()

    // Deleting the request
    await invitation.findByIdAndDelete(id);    

    // MAKING NEW FRND REQ LIST
    friendPendingInvitation(receiverID.toString());
    return res.status(200).json({Msg:"Friend Request is accepted"});
  }
  catch(err){
    res.status(502).send("Something went wrong");
  }
})

module.exports = router;