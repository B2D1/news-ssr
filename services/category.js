const Category = require('../db/models/category');
class CategoryService {
    async addCategory(usr, psd) {
        const Category = new Category({ usr, psd });
        const res = await Category.save();
        console.log(res);
        return res;
    }
    async deleteCategory(usrId) {
        const res = await Category.deleteOne({_id:usrId}); 
    }
    async updateCategoryLoginTime() {

    }
    async getCategoryList() {
        const res = await Category.find({});
    }
}

module.exports = CategoryService;
