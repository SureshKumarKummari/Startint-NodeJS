const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //const id=Math.random()*10;
  const product = new Product(null, title, imageUrl, description, price);
  product.save().then(()=>{
    res.redirect('/');
  }).catch((err)=>{console.log(err);});
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
 Product.findById(prodId).then(([row,fieldData])=>{
    console.log(row); 
     if (!row[0]) {
      return res.redirect('/');
    }
     res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: row[0]
    });
  }).catch((err)=>{
    console.log(err);
  });


};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.edit(prodId);
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
Product.fetchAll().then(([row,fieldData])=>{
   res.render('admin/products', {
      prods: row,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
     
  }).catch((err)=>{
    console.log(err);
  });


};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};
