const express = require('express');
const CategoryController = require('../controller/Category.controller');

const router = express.Router();

router
    .route('/')
    .post(CategoryController.createCategory)
    .get(CategoryController.getCategory);

router
    .route('/:id')
    .get(CategoryController.getCategoryById)
    .patch(CategoryController.updateCategoryById)
    .delete(CategoryController.deleteCategoryById);

module.exports = router;
