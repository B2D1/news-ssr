var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        usr: {
            type: String,
            required: true,
            unique: true,
            dropDups: true,
        },
        psd: String,
        lastLoginTime: {
            type: Date,
        },
    },
    {
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
);

module.exports = UserSchema;
