const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this product.'],
            trim: true,
            unique: [true, 'Name must be unique.'],
            lowercase: true,
            minLength: [3, 'Name must be at least 3 characters.'],
            maxLength: [100, 'Name is to large.'],
        },
        description: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            required: true,
            enum: {
                values: ['kg', 'litter', 'pcs', 'bag'],
                message:
                    "Unit value can't be {VALUE}, must be kh/litter/pcs/bag",
            },
        },
        imageUrls: [
            {
                type: String,
                required: true,
                validate: {
                    validator: (value) => {
                        if (!Array.isArray(value)) {
                            return false;
                        }
                        let isValid = true;
                        value.forEach((url) => {
                            if (!validator.isURL(url)) {
                                isValid = false;
                            }
                        });
                        return isValid;
                    },
                    message: 'Please provide valid image urls',
                },
            },
        ],
        category: {
            type: String,
            required: true,
        },
        brand: {
            name: {
                type: String,
                required: true,
            },
            id: {
                type: ObjectId,
                ref: 'Brand',
            },
        },
    },
    {
        timestamps: true,
    }
);

productSchema.pre('save', function (next) {
    if (this.quantity === 0) {
        this.status = 'out-of-stock';
    }
    next();
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
