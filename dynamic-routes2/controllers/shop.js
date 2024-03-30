const Product = require('../models/product');
const cart=require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};


exports.getProduct=(req,res,next)=>{
  const pid=req.params.productId;
  Product.findById(pid,product=>{
  
  res.render('shop/product-detail',{product: product,pageTitle: product.title,path: '/products'});
      console.log(product);
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req,res,next)=>{
    const pid=req.body.productId;
    Product.findById(pid,(Product)=>{
      cart.addProduct(pid);//,Product.price);
    })
    res.redirect('/');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
