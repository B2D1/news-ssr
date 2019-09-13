const { model } = require('mongoose');
const CategorySchema = require('../schemas/category');

module.exports = model('Category', CategorySchema);
