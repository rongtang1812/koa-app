
// 导入koa2
const Koa = require('koa');

const Router = require('koa-router')
const home = require('./router/index')
const user = require('./router/user')
const router = new Router()

// 处理post 请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

// 创建一个Koa对象表示web app本身:
const app = new Koa();
 
// 对于任何请求，app将调用该异步函数处理请求：
app.use((ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    next()
});
 
router.use('/home', home.routes());
router.use('/user', user.routes());
// 启动路由
app.use(router.routes()).use(router.allowedMethods())

// 在端口3000监听:
app.listen(3000);