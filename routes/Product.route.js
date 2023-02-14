const express = require('express');
const ProductController = require('../controller/Product.controller');

const router = express.Router();

router.route('/bulk-update').patch(ProductController.bulkUpdateProduct);
router.route('/bulk-delete').delete(ProductController.bulkDeleteProduct);

router
    .route('/')
    .get(ProductController.getProducts)
    .post(ProductController.createProduct);

router
    .route('/:id')
    .patch(ProductController.updateProduct)
    .delete(ProductController.deleteProductById);

module.exports = router;
