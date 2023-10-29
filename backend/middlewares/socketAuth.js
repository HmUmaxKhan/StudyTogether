const jwt = require("jsonwebtoken");
require("dotenv").config();

const socketAuth = (socket,next)=>{
    const token = socket.handshake.auth.token;

    try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        socket.user = decoded;
        console.log("socket User in Middleware",decoded);

    } catch (error) {
        const err = new Error("Token Error");
        console.log(err);
    }
    next();
}

module.exports = {
    socketAuth,
}