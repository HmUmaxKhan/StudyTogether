const storeSocket = require("../storeSocket/storeSocket");
const { friendPendingInvitation, updatefriendslist } = require("./update/friends");

const socketHandler = (socket,io)=>{
    const userDetails = socket.user;

    

    storeSocket.addConnection({
        socketId:socket.id,
        userId:userDetails.id
    });

    //update Pending Invitations if user is login

   friendPendingInvitation(userDetails.id)

   //update the Friend lIst when user is online
   updatefriendslist(userDetails.id)
}

module.exports = {
    socketHandler,
}