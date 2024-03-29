const Product=require('../models/product');
const p=require('../util/path');
const path=require('path');

exports.getAddProduct=(req,res,next)=>{
    const product=Product.fetchAll();
    console.log(product);
    res.sendFile(path.join(p,'views','add-product.html'));
};

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    console.log(product);
    product.save();
    res.redirect('/');
};

exports.getProduct=(req, res,next) => {
    res.sendFile(path.join(p,'views','shop.html'))
   
};
