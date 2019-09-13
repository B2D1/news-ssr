const { model } = require('mongoose');
const NewsSchema = require('../schemas/news');

module.exports = model('News', NewsSchema);
