const express=require('express');
const path=require('path');
const p=require('../util/path');
const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(p,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    res.redirect('/');
});

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(p,'views','contactus.html'));
});


router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(p,'views','success.html'));
});

module.exports=router;