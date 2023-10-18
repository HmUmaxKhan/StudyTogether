const connectedUser = new Map();


let io = null;

const setSocketServerInstance = (ioInstance) =>{
    io = ioInstance;
}

const getSocketServerInstance = ()=>{
    return io;
}

// Adding the online users

const addConnection = ({socketId , userId}) =>{
    connectedUser.set(socketId , {userId});
    console.log("newConnected User");
    console.log(connectedUser);
}

// Offline Users

const removeConnection = (socketId) =>{

    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);  // delete the socket from map 
        console.log("disconnected user");  
    }
};

// Adding online users in an array

const onlineUsersArray =(userId)=>{
    let onlineUsers = [];

    connectedUser.forEach((value,key)=>{
        if(value.userId === userId){
            onlineUsers.push(key);
        }
    })
}

module.exports = {
    addConnection,
    removeConnection,
    onlineUsersArray,
    setSocketServerInstance,
    getSocketServerInstance
}