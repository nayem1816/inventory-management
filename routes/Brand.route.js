const express = require('express');
const BrandController = require('../controller/Brand.controller');

const router = express.Router();

router
    .route('/')
    .post(BrandController.createBrand)
    .get(BrandController.getBrands);

router
    .route('/:id')
    .get(BrandController.getBrandById)
    .patch(BrandController.updateBrandById)
    .delete(BrandController.deleteBrandById);

module.exports = router;
