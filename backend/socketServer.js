const { socketHandler } = require("./SocketHandler/socketHandler");
const { socketAuth } = require("./middlewares/socketAuth");
const removeHandler = require ("./SocketHandler/removeHandler");
const storeSocket = require("./storeSocket/storeSocket");

const registerSocket= (server)=>{
    const io = require("socket.io")(server,{
        cors:
        {
            origin:"*",
            methods: ["GET","POST"],
        }
    });

      storeSocket.setSocketServerInstance(io);
  
    io.use((socket,next)=>{
        socketAuth(socket,next);
    })

    const emityOnlineUsers = ()=>{
        const OnlineUsers = storeSocket.getOnlineUsers();

        io.emit('online-users', {OnlineUsers});
    }

    io.on("connection",(socket=>{
        console.log("Socket is Connected");

        socketHandler(socket,io);

        // Getting online users list when first the connection is made
        emityOnlineUsers();

        socket.on("disconnect", ()=>{
            removeHandler(socket);
        })
    }))

    // Setting the interval to get the online users list & is refreshing after every 10 seconds
    setInterval(()=>{
       emityOnlineUsers();
    },[1000*10])
}

module.exports = {
    registerSocket,
}