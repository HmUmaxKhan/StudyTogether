const storeSocket = require("../storeSocket/storeSocket");
const { friendPendingInvitation } = require("./update/friends");

const socketHandler = (socket,io)=>{
    const userDetails = socket.user;

    console.log(userDetails.id);

    storeSocket.addConnection({
        socketId:socket.id,
        userId:userDetails.id
    });

    //update Pending Invitations if user 1st login

   friendPendingInvitation(userDetails.id)
}

module.exports = {
    socketHandler,
}