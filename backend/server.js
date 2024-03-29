// Using all the necessary dependencies

const express  = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');

// Login Route File
const login = require('./routes/auth/login');

//Registration Route File
const register = require('./routes/auth/register');

//Friend Invitation Route File
const friendInvitation = require("./routes/Invitation/friendInvitation");

//Invitation rejection
const rejectfrndreq = require("./routes/Decisionbutton/rejectfrnd");

//Invitation Acception
const acceptfrndreq = require("./routes/Decisionbutton/acceptfrnd");

const { log } = require('console');

// Secret file for db connection and all other things
require('dotenv').config();


/* The line `const socket = require("./socketServer");` is importing the `socketServer` module and
assigning it to the variable `socket`. This module likely contains code related to setting up and
managing socket connections for real-time communication between the server and clients. */
const socket = require("./socketServer");

// using app as express function
const app = express();

// It is used to connect with frontend
app.use(express.json());

// It is used to use your application on 2 ports one for backend and other is for frontend
app.use (cors());

// Port
const PORT = process.env.API_PORT;

// Using routes
app.use('/api/auth', login) //Login
app.use('/api/auth', register);//Register
app.use('/api/invite', friendInvitation)//Invite Friend
app.use("/api", rejectfrndreq);//Rejecting frnd req
app.use("/api", acceptfrndreq);//Accepting frnd req



// using http 
const server = http.createServer(app);

// Calling the function with argument "server"
socket.registerSocket(server);

// connecting with mongoDB Altas

mongoose.connect(process.env.MONGO_URL)
.then(server.listen(PORT,(req,res)=>{
    console.log("Listening on port "+PORT);
    console.log("Database is Connected");
}))
.catch(err=>{
    console.log("Database is not connected and error is "+err);
});
