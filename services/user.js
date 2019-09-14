const User = require('../db/models/user');

class UserService {
    addUser(usr, psd) {
        return new Promise((resolve, reject) => {
            const user = new User({ usr, psd });
            user.save()
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
    validUser(usr, psd) {
        return new Promise((resolve, reject) => {
            User.findOne({ usr, psd })
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
    deleteUser(id) {
        return new Promise((resolve, reject) => {
            User.findByIdAndDelete(id)
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            User.find({})
                .then(res => resolve(res))
                .catch(reason => reject(reason));
        });
    }
}

module.exports = UserService;
