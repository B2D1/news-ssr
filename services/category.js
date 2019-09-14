const Category = require('../db/models/category');
const News = require('../db/models/news');

class CategoryService {
    addCategory(name, weight) {
        return new Promise((resolve, reject) => {
            const category = new Category({ name, weight });
            category
                .save()
                .then(value => resolve(value))
                .catch(reason => reject(reason));
        });
    }
    deleteCategory(id) {
        return new Promise((resolve, reject) => {
            Promise.all([
                Category.findByIdAndDelete(id),
                News.deleteMany({ category: id }),
            ])
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
    getCategories() {
        return new Promise((resolve, reject) => {
            Category.find({})
                // .populate('news')
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
}

module.exports = CategoryService;
