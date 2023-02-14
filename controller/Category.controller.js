const {
    createCategoryService,
    getCategoryService,
    getCategoryServiceById,
    updateCategoryServiceById,
    deleteCategoryServiceById,
} = require('../services/Category.services');

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        res.status(400).json({
            status: 'success',
            message: 'Category created successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Category can't create successfully",
            error: error,
        });
    }
};

exports.getCategory = async (req, res, next) => {
    try {
        const result = await getCategoryService();
        res.status(400).json({
            status: 'success',
            message: 'Category get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Category can't get successfully",
            error: error,
        });
    }
};

exports.getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getCategoryServiceById(id);
        res.status(400).json({
            status: 'success',
            message: 'Category get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Category can't get successfully",
            error: error,
        });
    }
};

exports.updateCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateCategoryServiceById(id, req.body);
        res.status(400).json({
            status: 'success',
            message: 'Category updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Category can't update successfully",
            error: error,
        });
    }
};

exports.deleteCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteCategoryServiceById(id);
        res.status(400).json({
            status: 'success',
            message: 'Category deleted successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Category can't delete successfully",
            error: error,
        });
    }
};
