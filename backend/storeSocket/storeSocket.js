const connectedUser = new Map();


let io = null;

const setSocketServerInstance = (ioInstance) =>{
    io = ioInstance;
}

const getSocketServerInstance = ()=>{
    return io;
}

// Adding the online users
const addConnection = ({ socketId, userId }) => {
    if (!connectedUser.has(socketId)) {
        connectedUser.set(socketId, { userId });
        console.log("newConnected User");
        console.log(connectedUser);
    } 
}

// Offline Users

const removeConnection = (socketId) =>{

    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);  // delete the socket from map 
        console.log("disconnected user");
    }
    console.log(connectedUser);
};

// Adding online users in an array

const onlineUsersArray = (userId) => {
    let onlineUsers = [];

    connectedUser.forEach((value, key) => {

        if (value.userId === userId){
            if (!onlineUsers.includes(key)) {
            onlineUsers.push(key);
            }
        }
    });

    return onlineUsers;
};


module.exports = {
    addConnection,
    removeConnection,
    onlineUsersArray,
    setSocketServerInstance,
    getSocketServerInstance
}