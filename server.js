const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');
const multer = require('@koa/multer');
const bodyParser = require('koa-bodyparser');
const createRes = require('./helpers/response');
const UserService = require('./services/user');
const CategoryService = require('./services/category');
const NewsService = require('./services/news');
const initDB = require('./db/index');
const errorHandle = require('./helpers/errorHandle');
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
const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();
(async () => {
    try {
        await nextApp.prepare();
        router.get('/custom-page', async ctx => {
            await nextApp.render(
                ctx.req,
                ctx.res,
                '/myHandlerComponent',
                ctx.query
            );
            ctx.respond = false;
        });

        // 上传封面图
        router.post('/api/uploadImg', upload.single('cover'), async ctx => {
            try {
                createRes({ ctx, data: ctx.file });
            } catch (error) {
                createRes({ ctx, msg: error.message });
            }
        });

        // 获取类目列表
        router.get('/api/categories', async ctx => {
            try {
                const res = await categoryService.getCategories();
                createRes({ ctx, data: res });
            } catch (error) {
                createRes({ ctx, msg: error.message });
            }
        });

        // 获取用户列表
        router.get('/api/users', async ctx => {
            try {
                const res = await userService.getUsers();
                createRes({ ctx, data: res });
            } catch (error) {
                createRes({ ctx, msg: error.message });
            }
        });

        // 获取新闻列表
        router.get('/api/news', async ctx => {
            try {
                const res = await newsService.getNews();
                createRes({ ctx, data: res });
            } catch (error) {
                createRes({ ctx, msg: error.message });
            }
        });

        // 删除类目
        router.delete('/api/category', async ctx => {
            try {
                const { id } = ctx.query;
                await categoryService.deleteCategory(id);
                createRes({ ctx, statusCode: 204 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    msg: errorHandle(error),
                });
            }
        });

        // 删除新闻
        router.delete('/api/news', async ctx => {
            try {
                const { id } = ctx.query;
                await newsService.deleteNews(id);
                createRes({ ctx, statusCode: 204 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    msg: errorHandle(error),
                });
            }
        });

        // 删除用户
        router.delete('/api/user', async ctx => {
            try {
                const { id } = ctx.query;
                await userService.deleteUser(id);
                createRes({ ctx, statusCode: 204 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    msg: errorHandle(error),
                });
            }
        });

        // 添加用户
        router.post('/api/user', async ctx => {
            try {
                const { usr, psd } = ctx.request.body;
                await userService.addUser(usr, psd);
                createRes({ ctx, statusCode: 201 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    statusCode: 400,
                    msg: errorHandle(error),
                });
            }
        });

        // 添加类目
        router.post('/api/category', async ctx => {
            try {
                const { name, weight } = ctx.request.body;
                await categoryService.addCategory(name, weight);
                createRes({ ctx, statusCode: 201 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    statusCode: 400,
                    msg: errorHandle(error),
                });
            }
        });
        // 添加新闻
        router.post('/api/news', async ctx => {
            try {
                const {
                    title,
                    category,
                    author,
                    cover,
                    content,
                } = ctx.request.body;
                await newsService.addNews(
                    title,
                    category,
                    author,
                    cover,
                    content
                );
                createRes({ ctx, statusCode: 201 });
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    statusCode: 400,
                    msg: errorHandle(error),
                });
            }
        });

        // 验证用户
        router.post('/api/validUser', async ctx => {
            try {
                const { usr, psd } = ctx.request.body;
                const existUser = await userService.validUser(usr, psd);
                if (existUser) {
                    createRes({ ctx });
                } else {
                    createRes({ ctx, errorCode: 1, msg: '用户名或密码错误！' });
                }
            } catch (error) {
                createRes({
                    ctx,
                    errorCode: 1,
                    statusCode: 400,
                    msg: errorHandle(error),
                });
            }
        });

        router.get('*', async ctx => {
            await handler(ctx.req, ctx.res);
            ctx.respond = false;
        });

        server.use(bodyParser());
        server.use(router.routes());
        initDB('mongodb://localhost:27017/news');
        server.listen(3000, _ => console.log('App running on port 3000'));
    } catch (e) {
        console.error(e);
        process.exit();
    }
})();
