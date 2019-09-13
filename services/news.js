const News  = require('../db/models/news');
class NewsService {
    async addNews(usr, psd) {
        const News = new News({ usr, psd });
        const res = await News.save();
        console.log(res);
        return res;
    }
    async deleteNews(usrId) {
        const res = await News.deleteOne({_id:usrId}); 
    }
    async updateNewsLoginTime() {

    }
    async getNewsList() {
        const res = await News.find({});
    }
}


module.exports = NewsService;
