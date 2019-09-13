var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
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
});

module.exports = NewsSchema;
