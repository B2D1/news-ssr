var mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            dropDups: true,
        },
        weight: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
);

module.exports = CategorySchema;
