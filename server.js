// Import prerequisite packages
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const createRes = require('./helpers/response');
const UserService = require('./services/user');
const CategoryService = require('./services/category');
const NewsService = require('./services/news');
const initDB = require('./db/index');
// Initialize KoaJs server and router
const server = new Koa();
const router = new Router();
const userService = new UserService();
const categoryService = new CategoryService();
const newsService = new NewsService();
// Initialize NextJs instance and expose request handler
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

        router.get('/api/users', async ctx => {
            try {
                const res = userService.getUsers();
                createRes({ ctx, data: res });
            } catch (error) {
                console.log(error);
            }
        });

        router.post('/api/addUser', async ctx => {
            try {
                const { usr, psd } = ctx.request.body;
                const res = userService.addUser(usr, psd);
                createRes({ ctx, statusCode: 201, data: res });
            } catch (error) {
                console.log(error);
            }
        });

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
                console.log(error);
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
