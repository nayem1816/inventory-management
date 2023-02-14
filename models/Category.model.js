const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a category name.'],
            trim: true,
            lowercase: true,
            unique: true,
        },
        description: String,
        imageUrl: {
            type: String,
            validate: [validator.isURL, 'Please provide a valid url'],
        },
    },
    {
        timeStamps: true,
    }
);

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
