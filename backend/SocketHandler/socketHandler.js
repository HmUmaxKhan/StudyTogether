const storeSocket = require("../storeSocket/storeSocket");

const socketHandler = (socket,io)=>{
    const userDetails = socket.user;

    console.log(userDetails.id);

    storeSocket.addConnection({
        socketId:socket.id,
        userId:userDetails.id
    });
}

module.exports = {
    socketHandler,
}