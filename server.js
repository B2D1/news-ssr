const Koa = require('koa');
const Router = require('koa-router');
const multer = require('@koa/multer');
const bodyParser = require('koa-bodyparser');
const resHandle = require('./helpers/resHandle');
const UserService = require('./services/user');
const CategoryService = require('./services/category');
const NewsService = require('./services/news');
const initDB = require('./db/index');
const errHandle = require('./helpers/errHandle');
const cors = require('koa-cors');
const server = new Koa();
const router = new Router();
const userService = new UserService();
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './static/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

const categoryService = new CategoryService();
const newsService = new NewsService();

// 上传封面图
router.post('/api/uploadImg', upload.single('cover'), async ctx => {
    try {
        resHandle({ ctx, data: ctx.file });
    } catch (error) {
        resHandle({ ctx, msg: error.message });
    }
});

// 获取类目列表
router.get('/api/categories', async ctx => {
    try {
        const res = await categoryService.getCategories();
        resHandle({ ctx, data: res });
    } catch (error) {
        resHandle({ ctx, msg: error.message });
    }
});

// 获取用户列表
router.get('/api/users', async ctx => {
    try {
        const res = await userService.getUsers();
        resHandle({ ctx, data: res });
    } catch (error) {
        resHandle({ ctx, msg: error.message });
    }
});

// 获取新闻列表
router.get('/api/news', async ctx => {
    try {
        const { newsId, categoryId } = ctx.query;
        if (categoryId) {
            const res = await newsService.getNewsByCategory(categoryId);
            resHandle({ ctx, data: res });
            return;
        }
        if (newsId) {
            const res = await newsService.getNewsById(newsId);
            resHandle({ ctx, data: res });
            return;
        }
        const res = await newsService.getNews();
        resHandle({ ctx, data: res });
    } catch (error) {
        resHandle({ ctx, msg: error.message });
    }
});

// 删除类目
router.delete('/api/category', async ctx => {
    try {
        const { id } = ctx.query;
        await categoryService.deleteCategory(id);
        resHandle({ ctx, statusCode: 204 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            msg: errHandle(error),
        });
    }
});

// 删除新闻
router.delete('/api/news', async ctx => {
    try {
        const { id } = ctx.query;
        await newsService.deleteNews(id);
        resHandle({ ctx, statusCode: 204 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            msg: errHandle(error),
        });
    }
});

// 删除用户
router.delete('/api/user', async ctx => {
    try {
        const { id } = ctx.query;
        await userService.deleteUser(id);
        resHandle({ ctx, statusCode: 204 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            msg: errHandle(error),
        });
    }
});

// 添加用户
router.post('/api/user', async ctx => {
    try {
        const { usr, psd } = ctx.request.body;
        await userService.addUser(usr, psd);
        resHandle({ ctx, statusCode: 201 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            statusCode: 400,
            msg: errHandle(error),
        });
    }
});

// 添加类目
router.post('/api/category', async ctx => {
    try {
        const { name, weight } = ctx.request.body;
        await categoryService.addCategory(name, weight);
        resHandle({ ctx, statusCode: 201 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            statusCode: 400,
            msg: errHandle(error),
        });
    }
});
// 添加新闻
router.post('/api/news', async ctx => {
    try {
        const { title, category, author, cover, content } = ctx.request.body;
        await newsService.addNews(title, category, author, cover, content);
        resHandle({ ctx, statusCode: 201 });
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            statusCode: 400,
            msg: errHandle(error),
        });
    }
});

// 验证用户
router.post('/api/validUser', async ctx => {
    try {
        const { usr, psd } = ctx.request.body;
        const existUser = await userService.validUser(usr, psd);
        if (existUser) {
            resHandle({ ctx });
        } else {
            resHandle({ ctx, errorCode: 1, msg: '用户名或密码错误！' });
        }
    } catch (error) {
        resHandle({
            ctx,
            errorCode: 1,
            statusCode: 400,
            msg: errHandle(error),
        });
    }
});

server.use(cors());
server.use(bodyParser());
server.use(router.routes());
initDB('mongodb://localhost:27017/news');
server.listen(8080, _ => console.log('App running on port 8080'));
