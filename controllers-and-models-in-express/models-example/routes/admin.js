const express=require('express');
const path=require('path');
const p=require('../util/path');
const router=express.Router();
const addProduct=require('../controllers/product');
const Contact=require('../controllers/contactus');

router.get('/add-product',addProduct.getAddProduct);

router.post('/add-product',addProduct.postAddProduct);

router.get('/contactus',Contact.contactPage);

router.post('/success',Contact.successPage);

module.exports=router;