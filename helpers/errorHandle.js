const errorHandle = error => {
    if (error.name === 'MongoError') {
        return error.errmsg;
    }
    return '糟糕，内部错误！';
};

module.exports = errorHandle;
