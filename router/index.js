const Router = require('koa-router');
let router = new Router();
router.get('/', async (ctx)=>{
    ctx.body = '用户操作首页'
})

module.exports = router
