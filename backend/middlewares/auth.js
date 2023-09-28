const JWT  = require('jsonwebtoken');

require("dotenv").config();

const authToken = (req,res,next)=>{
    let token = req.header("authtoken");
    
    if (!token) {
        res.status(401).send("Invalid token");
    }

    try {

    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

   next();
        
    } catch (err) {
        res.status(502).send("Something went wrong");
    }

}

module.exports = authToken;