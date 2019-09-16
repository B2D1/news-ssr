const resHandle = params => {
    params.ctx.status = params.statusCode || 200;
    params.ctx.body = {
        errorCode: params.errorCode || 0,
        data: params.data || null,
        msg: params.msg || '',
    };
};

module.exports = resHandle;
