const express = require('express');
const StoreController = require('../controller/Store.controller');

const router = express.Router();

router
    .route('/')
    .post(StoreController.createStore)
    .get(StoreController.getStore);

router
    .route('/:id')
    .get(StoreController.getStoreById)
    .patch(StoreController.updateStoreById)
    .delete(StoreController.deleteStoreById);

module.exports = router;
