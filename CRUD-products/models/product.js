const db=require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = Math.random()*100;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.query(`insert into products(id,title,price,description,imageUrl)values(?,?,?,?,?)`,[this.id,this.title,this.price,this.description,this.imageUrl]);
  }

  static deleteById(id) {
    db.query(`delete from products where products.id=?`,[id]);
  }

  static fetchAll() {
    return db.query(`select * from products`);
  }

  static findById(id) {
    return db.query(`select * from products where products.id=?`,[id]);
  }

   edit(id){
    db.query(`update products set products.Title=?,products.price=?,products.description=?,products.imageurl=? where products.id=?`,[this.title,this.price,this.description,this.imageUrl,id]);
  }
};
