const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/products', auth, role(['admin', 'seller']), createProduct);
router.get('/products', auth, getAllProducts);
router.put('/products/:id', auth, role(['admin', 'seller']), updateProduct);
router.delete('/products/:id', auth, role(['admin', 'seller']), deleteProduct);

module.exports = router;
