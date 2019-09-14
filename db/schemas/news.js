const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            dropDups: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
        content: String,
        cover: String,
        author: String,
        readNums: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
);

module.exports = NewsSchema;
