const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProductById } = require('../controllers/product');

// No extra `/products` here since it's already mounted in server.js
router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
