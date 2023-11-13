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

    io.on("connection",(socket=>{
        console.log("Socket is Connected");

        socketHandler(socket,io);

        socket.on("disconnect", ()=>{
            removeHandler(socket);
        })
    }))
}

module.exports = {
    registerSocket,
}