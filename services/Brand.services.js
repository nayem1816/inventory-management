const BrandModel = require('../models/Brand.model');

exports.createBrandService = async (data) => {
    const result = await BrandModel.create(data);
    return result;
};

exports.getBrandsService = async () => {
    const result = await BrandModel.find({});
    return result;
};

exports.getBrandByIdService = async (id) => {
    const result = await BrandModel.findOne({ _id: id });
    return result;
};

exports.updateBrandByIdService = async (id, data) => {
    const result = await BrandModel.updateOne(
        { _id: id },
        { $set: data },
        {
            runValidators: true,
        }
    );
    return result;
};

exports.deleteBrandByIdService = async (id) => {
    const result = await BrandModel.deleteOne({ _id: id });
    return result;
};
