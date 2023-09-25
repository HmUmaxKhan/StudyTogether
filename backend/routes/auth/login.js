const express = require('express');

const router  = express.Router();

router.get('/log',(req,res)=>{
    console.log("LOGIN");
    res.send('LOGIN');
})

module.exports = router;