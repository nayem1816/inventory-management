const StoreModel = require('../models/Store.model');

exports.createStoreService = async (data) => {
    const result = await StoreModel.create(data);
    return result;
};

exports.getStoreService = async () => {
    const result = await StoreModel.find({});
    return result;
};

exports.getStoreServiceById = async (id) => {
    const result = await StoreModel.findOne({ _id: id });
    return result;
};

exports.updateStoreServiceById = async (id, data) => {
    const result = await StoreModel.updateOne({ _id: id }, data, {
        runValidators: true,
    });
    return result;
};
exports.deleteStoreServiceById = async (id) => {
    const result = await StoreModel.deleteOne({ _id: id });
    return result;
};
