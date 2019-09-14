const News = require('../db/models/news');
const Category = require('../db/models/category');

class NewsService {
    addNews(title, category, author, cover, content) {
        return new Promise((resolve, reject) => {
            const news = new News({ title, category, author, cover, content });
            news.save()
                .then(newsDoc => {
                    Category.findById(category, (err, CategoryDoc) => {
                        CategoryDoc.news.push(newsDoc);
                        CategoryDoc.save()
                            .then(value => resolve(value))
                            .catch(reason => reject(reason));
                    });
                })
                .catch(reason => reject(reason));
        });
    }
    deleteNews(id) {
        return new Promise((resolve, reject) => {
            News.findById(id)
                .populate('category', '_id')
                .then(res => {
                    Promise.all([
                        Category.findOneAndUpdate(
                            { _id: res.category._id },
                            { $pull: { news: id } }
                        ),
                        News.findByIdAndDelete(id),
                    ])
                        .then(res => resolve(res))
                        .catch(reason => reject(reason));
                })
                .catch(reason => reject(reason));
        });
    }
    getNews() {
        return new Promise((resolve, reject) => {
            News.find({})
                .populate('category', 'name')
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
}

module.exports = NewsService;
