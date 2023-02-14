const {
    createBrandService,
    getBrandsService,
    getBrandByIdService,
    updateBrandByIdService,
    deleteBrandByIdService,
} = require('../services/Brand.services');

exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);
        res.status(400).json({
            status: 'success',
            message: 'Brand created successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Brand can't create successfully",
            error: error,
        });
    }
};

exports.getBrands = async (req, res, next) => {
    try {
        const result = await getBrandsService();
        res.status(400).json({
            status: 'success',
            message: 'Brand get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Brand can't get successfully",
            error: error,
        });
    }
};

exports.getBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getBrandByIdService(id);
        res.status(400).json({
            status: 'success',
            message: 'Brand get successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Brand can't get successfully",
            error: error,
        });
    }
};

exports.updateBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateBrandByIdService(id, req.body);
        console.log(result);
        if (!result.modifiedCount) {
            res.status(400).json({
                status: 'fail',
                message: "Brand can't update successfully",
            });
        }
        res.status(400).json({
            status: 'success',
            message: 'Brand update successfully',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Brand can't update successfully",
            error: error,
        });
    }
};

exports.deleteBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteBrandByIdService(id);
        res.status(400).json({
            status: 'success',
            message: 'Brand delete successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Brand can't delete successfully",
            error: error,
        });
    }
};
