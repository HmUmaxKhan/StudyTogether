const storeSocket =  require("../storeSocket/storeSocket");

const removeHandler = (socket)=>{
   storeSocket.removeConnection(socket.id);      
}

module.exports = removeHandler;