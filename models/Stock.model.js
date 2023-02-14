const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
    {
        ProductId: {
            id: ObjectId,
            ref: 'Product',
            required: true,
        },
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
        price: {
            type: Number,
            required: true,
            min: [0, "Product price can't be negative."],
        },
        quantity: {
            type: Number,
            required: true,
            min: [0, "Product Quantity can'n be negative."],
        },
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
        status: {
            type: String,
            required: true,
            enum: {
                values: ['in-stock', 'out-of-stock', 'discontinued'],
                message: "Status can't be {VALUE}.",
            },
        },
        stock: {
            name: {
                type: String,
                trim: true,
                required: [true, 'Please provide a store name'],
                lowercase: true,
                enum: {
                    values: [
                        'dhaka',
                        'barisal',
                        'chittagong',
                        'khulna',
                        'mymensingh',
                        'rajshahi',
                        'rangpur',
                        'sylhet',
                    ],
                    message: '{VALUE} is not a valid name.',
                },
            },
            id: {
                type: ObjectId,
                required: true,
                ref: 'Store',
            },
        },
        suppliedBy: {
            name: {
                type: String,
                trim: true,
                required: [true, 'Please provide a supplier name'],
            },
            id: {
                type: ObjectId,
                ref: 'Supplier',
            },
        },
    },
    {
        timestamps: true,
    }
);

stockSchema.pre('save', function (next) {
    if (this.quantity === 0) {
        this.status = 'out-of-stock';
    }
    next();
});

const StockModel = mongoose.model('Stock', stockSchema);

module.exports = StockModel;
