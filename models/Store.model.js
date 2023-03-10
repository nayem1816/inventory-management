const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
    {
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
        description: String,
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        },
        manager: {
            name: String,
            contactNumber: String,
            id: {
                type: ObjectId,
                ref: 'User',
            },
        },
    },
    {
        timeStamps: true,
    }
);

const StoreModel = mongoose.model('Store', storeSchema);

module.exports = StoreModel;
