const storeSocket = require("../storeSocket/storeSocket");

const socketHandler = (socket,io)=>{
    storeSocket.addConnection(socket,io);
}

module.exports = {
    socketHandler,
}