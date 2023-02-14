const ProductModel = require('../models/Product.model');

exports.getProductService = async (filters, queries) => {
    const products = await ProductModel.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fieldsList)
        .sort(queries.sortList);

    const total = await ProductModel.countDocuments(filters);
    const page = Math.ceil(total / queries.limit);
    return { total, page, products };
};

exports.createProductService = async (data) => {
    const product = await ProductModel.create(data);
    return product;
};

exports.updateProductService = async (productId, data) => {
    const result = await ProductModel.updateOne(
        { _id: productId },
        { $set: data },
        {
            runValidators: true,
        }
    );

    // const product = await ProductModel.find({ _id: productId });

    // const result = await product.set(data).save();

    return result;
};

exports.bulkUpdateProductService = async (data) => {
    // const result = await ProductModel.updateMany({ _id: data.ids }, data.data, {
    //     runValidators: true,
    // });

    const products = [];

    data.ids.forEach((product) => {
        products.push(
            ProductModel.updateOne({ _id: product.id }, product.data)
        );
    });

    const result = Promise.all(products);

    return result;
};

exports.deleteProductServiceById = async (id) => {
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
};

exports.bulkDeleteProductsServicesByIds = async (ids) => {
    const result = ProductModel.deleteMany({ _id: ids });
    return result;
};
