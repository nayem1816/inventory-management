const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Please provide a brand name'],
            maxLength: 100,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
        },
        email: {
            type: String,
            validate: [validator.isEmail, 'Please provide a valid email'],
            lowercase: true,
        },
        website: {
            type: String,
            validate: [validator.isURL, 'Please provide a valid url'],
        },
        location: {
            type: String,
        },
        products: [
            {
                type: ObjectId,
                ref: 'Product',
            },
        ],
        supplier: [
            {
                name: String,
                contactNumber: String,
                id: {
                    type: ObjectId,
                    ref: 'Supplier',
                },
            },
        ],
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        },
    },
    {
        timeStamps: true,
    }
);

const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
