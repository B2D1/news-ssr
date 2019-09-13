const User = require('../db/models/user');
class UserService {
    async addUser(usr, psd) {
        try {
            const user = new User({ usr, psd });
            const res = await user.save();
            return res;
        } catch (error) {
            throw new Error('用户名已存在');
        }
    }
    async validUser(usr, psd) {
        try {
            const res = await User.findOne({ usr, psd });
            return res;
        } catch (error) {
            throw new Error('登录失败');
        }
    }
    async deleteUser(usrId) {
        const res = await User.deleteOne({ _id: usrId });
    }
    async updateUserLoginTime() {}
    async getUsers() {
        try {
            const res = await User.find({});
            return res;
        } catch (error) {
            throw new Error('获取失败');
        }
    }
}

module.exports = UserService;
