const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema(
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
        news: [{ type: Schema.Types.ObjectId, ref: 'News' }],
    },
    {
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
);

module.exports = CategorySchema;
