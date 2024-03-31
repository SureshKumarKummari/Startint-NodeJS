const express=require('express');

const router=express.Router();

const bookingController = require('../controllers/booking-controller');

router.post('/add-product', bookingController.addProduct);

router.get('/products', bookingController.getProducts);

router.delete('/deleteproduct/:id', bookingController.deleteProduct);


module.exports = router;