const { model } = require('mongoose');
const UserSchema = require('../schemas/user');

module.exports = model('User', UserSchema);
