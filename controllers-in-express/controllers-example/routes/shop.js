const express=require('express');
const path=require('path');
const router=express.Router();
const p=require('../util/path');
const getproducts=require('../controllers/product');
const Controlling=require('../controllers/404');

router.get('/',getproducts.getProduct);




module.exports=router;