const User = require("../../models/auth/user");
const Invitation = require("../../models/InvitationModal/Invitation");
const storeSocket = require("../../storeSocket/storeSocket");

// Creating a function to notify about the friend request

const friendPendingInvitation = async(userId)=>{
    
    try {
        const friendInvitationsDetails = await Invitation.find({
            receiverID:userId,
        }).populate("senderID","_id username mail");
        
        // Getting online users array for specific user

        let receiverList = storeSocket.onlineUsersArray(userId);

        const io = storeSocket.getSocketServerInstance();

        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit("friends-invitations", {
                friendInvitationsDetails:friendInvitationsDetails ? friendInvitationsDetails : [],
            })
        });


    } catch (error) {
        console.log(error);
    }
}

module.exports  = { 
    friendPendingInvitation
}