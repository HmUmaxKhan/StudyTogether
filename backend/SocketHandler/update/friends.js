const User = require("../../models/auth/user");
const Invitation = require("../../models/InvitationModal/Invitation");
const storeSocket = require("../../storeSocket/storeSocket");

// Creating a function to notify about the friend request

const friendPendingInvitation = async(userId)=>{
    
    try {
        const friendInvitationsDetails = await Invitation.find({
            receiverID: userId
        });


        friendInvitationsDetails.forEach((friendInvitation) => {
            friendInvitation.populate("senderID", "_id username mail").execPopulate();
          });

        console.log("After: ",friendInvitationsDetails);

        
        
        // Getting online users array for specific user

        let receiverList = storeSocket.onlineUsersArray(userId);

        console.log(receiverList);

       
    if (receiverList && Array.isArray(receiverList)) { // Check if receiverList is defined and an array
        const io = storeSocket.getSocketServerInstance();
  
        receiverList.forEach((receiverSocketId) => {
          io.to(receiverSocketId).emit("friends-invitations", {
            friendInvitationsDetails: friendInvitationsDetails ? friendInvitationsDetails : [],
          });
        });
      } else {
        console.error("Receiver list is not defined or not an array.");
        // Handle the error or edge case appropriately
      }


    } catch (error) {
        console.log(error);
    }
}

module.exports  = { 
    friendPendingInvitation
}