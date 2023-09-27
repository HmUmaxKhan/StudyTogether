// Using all the necessary dependencies

const express  = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');

const login = require('./routes/auth/login');
const register = require('./routes/auth/register');
const { log } = require('console');

// Secret file for db connection and all other things
require('dotenv').config();

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



// using http 
const server = http.createServer(app);


// connecting with mongoDB Altas

mongoose.connect(process.env.MONGO_URL)
.then(server.listen(PORT,(req,res)=>{
    console.log("Listening on port "+PORT);
    console.log("Database is Connected");
}))
.catch(err=>{
    console.log("Database is not connected and error is "+err);
});
