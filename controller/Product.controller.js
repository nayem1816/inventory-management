const { query } = require('express');
const {
    getProductService,
    createProductService,
    updateProductService,
    bulkUpdateProductService,
    deleteProductServiceById,
    bulkDeleteProductsServicesByIds,
} = require('../services/Product.services');

exports.getProducts = async (req, res, next) => {
    try {
        let filters = { ...req.query };
        const excludeField = ['page', 'limit', 'sort'];
        let filtersString = JSON.stringify(filters);
        filtersString = filtersString.replace(
            /\b(gt|lt|gte|lte)\b/g,
            (match) => `$${match}`
        );
        filters = JSON.parse(filtersString);

        const queries = {};

        if (req.query.sort) {
            const sortList = req.query.sort.split(',').join(' ');
            queries.sortList = sortList;
        }
        if (req.query.fields) {
            const fieldsList = req.query.fields.split(',').join(' ');
            queries.fieldsList = fieldsList;
        }
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        excludeField.forEach((field) => delete filters[field]);

        const products = await getProductService(filters, queries);

        res.status(200).json({
            status: 'success',
            message: 'Product get successfully',
            data: products,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product can not get',
            error: error.message,
        });
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const result = await createProductService(req.body);
        result.logger();

        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product is not create',
            error: error.message,
        });
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);

        res.status('200').json({
            status: 'success',
            message: 'Product update successfully.',
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product update not successfully.',
            error: error.message,
        });
    }
};

exports.bulkUpdateProduct = async (req, res, next) => {
    try {
        const result = await bulkUpdateProductService(req.body);

        res.status('200').json({
            status: 'success',
            message: 'Products updated successfully.',
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product is not create',
            error: error.message,
        });
    }
};

exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteProductServiceById(id);

        res.status('200').json({
            status: 'success',
            message: 'Product deleted successfully.',
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product can not delete',
            error: error.message,
        });
    }
};

exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const result = await bulkDeleteProductsServicesByIds(req.body.ids);

        res.status('200').json({
            status: 'success',
            message: 'Products deleted successfully.',
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Product can not delete',
            error: error.message,
        });
    }
};
