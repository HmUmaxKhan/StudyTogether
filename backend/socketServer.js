const registerSocket= (server)=>{
    const io = require("socket.io")(server,{
        cors:
        {
            origin:"*",
            methods: ["GET","POST"],
        }
    });

    io.on("connection",(socket=>{
        console.log("Socket is Connected");
        console.log(socket.id);
    }))
}

module.exports = {
    registerSocket,
}