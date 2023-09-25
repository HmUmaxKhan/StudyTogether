const express = require('express');
const router  = express.Router();

router.get('/reg',(req,res)=>{
    console.log("REGISTER");
    res.send('REGISTER');
})

module.exports = router;