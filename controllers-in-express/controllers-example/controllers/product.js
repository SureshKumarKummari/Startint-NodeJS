const p=require('../util/path');
const path=require('path');

exports.getAddProduct=(req,res,next)=>{
    res.sendFile(path.join(p,'views','add-product.html'));
};

exports.postAddProduct=(req,res,next)=>{
    res.redirect('/');
};

exports.getProduct=(req, res,next) => {
    res.sendFile(path.join(p,'views','shop.html'))
   
};
