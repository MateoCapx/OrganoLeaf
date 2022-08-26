const router = require('express').Router();
const req = require('express/lib/request');
const path = require('path');
 

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));
   
})

// Page that will hold all the database info
// router.get(' ', (req,res)=>{
//     res.sendFile(path.join(__dirname, ' '));
   
// })



module.exports = router;