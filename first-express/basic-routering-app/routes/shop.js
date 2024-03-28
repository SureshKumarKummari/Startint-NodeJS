
const express=require('express');

const router=express.Router();

router.use('/shop',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to Expess!</h1>');
});


module.exports=router;