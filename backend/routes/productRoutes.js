const express = require('express');
const { addProduct, getProducts } = require('../controller/productController');
const router = express.Router();

// Route to add a product
router.post('/add', addProduct);

// Route to retrieve all products
router.get('/all', getProducts);

module.exports = router;
