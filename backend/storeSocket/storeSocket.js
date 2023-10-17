const connectedUser = new Map();

const addConnection = ({socketId , userId}) =>{
    connectedUser.set(socketId , {userId});
}

const removeConnection = (socketId) =>{

    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);  // delete the socket from map 
        console.log("disconnected user");  
    }
};

module.exports = {
    addConnection,
    removeConnection,
}