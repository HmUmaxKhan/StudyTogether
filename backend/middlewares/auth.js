/* The code is importing the `jsonwebtoken` library and the `dotenv` library in order to use them in
the code. */
const JWT  = require('jsonwebtoken');

require("dotenv").config();

/* The line `const authToken = (req,res,next)=>{` is defining a function called `authToken` that takes
in three parameters: `req`, `res`, and `next`. This function is typically used as middleware in an
Express.js application. It is responsible for verifying the authentication token sent in the request
header and decoding it using the JWT library. If the token is valid, it sets the decoded user
information in the `req` object and calls the `next` function to pass control to the next middleware
or route handler. If the token is invalid or an error occurs during verification, it sends an
appropriate response to the client. */

const authToken = (req,res,next)=>{

    /* The code is retrieving the value of the "authtoken" header from the request object
    (`req.header("authtoken")`) and assigning it to the variable `token`. */

    let token = req.header("authtoken");
    
    if (!token) {
        res.status(401).send("Invalid token");
    }

   /* The code inside the `try` block is responsible for verifying the authentication token (`token`)
   using the `JWT.verify()` method from the `jsonwebtoken` library. */
   
    try {

    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = decoded;


   next();
        
    } catch (err) {
        res.status(502).send("Something went wrong");
    }

}

module.exports = authToken;