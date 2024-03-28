const express=require('express');
const path=require('path');
const router=express.Router();
//const chat=require('./chat');

router.get('/login',(req,res,next)=>{
    let path1=path.join(__dirname,'..','views','login.html');
    //console.log(path);
res.sendFile(path1);
});



module.exports=router;