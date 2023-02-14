const CategoryModel = require('../models/Category.model');

exports.createCategoryService = async (data) => {
    const result = await CategoryModel.create(data);
    return result;
};

exports.getCategoryService = async () => {
    const result = await CategoryModel.find({});
    return result;
};

exports.getCategoryServiceById = async (id) => {
    const result = await CategoryModel.findOne({ _id: id });
    return result;
};

exports.updateCategoryServiceById = async (id, data) => {
    const result = await CategoryModel.updateOne({ _id: id }, data, {
        runValidators: true,
    });
    return result;
};

exports.deleteCategoryServiceById = async (id, data) => {
    const result = await CategoryModel.deleteOne({ _id: id });
    return result;
};
