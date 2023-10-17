const { socketHandler } = require("./SocketHandler/socketHandler");
const { socketAuth } = require("./middlewares/socketAuth");
const removeHandler = require ("./SocketHandler/removeHandler");

const registerSocket= (server)=>{
    const io = require("socket.io")(server,{
        cors:
        {
            origin:"*",
            methods: ["GET","POST"],
        }
    });

    io.use((socket,io)=>{
        socketAuth(socket,io);
    })

    io.on("connection",(socket=>{
        console.log("Socket is Connected");
        console.log(socket.id);

        socketHandler(socket,io);

        socket.on("disconnect", ()=>{
            removeHandler(socket);
        })
    }))
}

module.exports = {
    registerSocket,
}