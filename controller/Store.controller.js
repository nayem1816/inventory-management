const {
    createStoreService,
    getStoreService,
    getStoreServiceById,
    updateStoreServiceById,
    deleteStoreServiceById,
} = require('../services/Store.services');

exports.createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Store created successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Store can't create successfully.",
            error: error,
        });
    }
};

exports.getStore = async (req, res, next) => {
    try {
        const result = await getStoreService();
        res.status(200).json({
            status: 'success',
            message: 'Store get successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Store can't get successfully.",
            error: error,
        });
    }
};

exports.getStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getStoreServiceById(id);
        res.status(200).json({
            status: 'success',
            message: 'Store get successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Store can't get successfully.",
            error: error,
        });
    }
};

exports.updateStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateStoreServiceById(id, req.body);
        res.status(201).json({
            status: 'success',
            message: 'Store updated successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Store can't update successfully.",
            error: error,
        });
    }
};

exports.deleteStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteStoreServiceById(id);
        res.status(200).json({
            status: 'success',
            message: 'Store deleted successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Store can't delete successfully.",
            error: error,
        });
    }
};
