const Product = require('../models/productModel');

// Add Product
const addProduct = async (req, res) => {
    const { name, aisle, section, location, price, availability,url } = req.body;
    try {
        const product = new Product({ name, aisle, section, location, price, availability , url});
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
        console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addProduct, getProducts };
