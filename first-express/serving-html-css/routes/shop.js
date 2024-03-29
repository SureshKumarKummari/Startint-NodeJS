const express=require('express');
const path=require('path');
const router=express.Router();
const p=require('../util/path');


router.get('/', (req, res,next) => {
    res.sendFile(path.join(p,'views','shop.html'))
   
});




module.exports=router;