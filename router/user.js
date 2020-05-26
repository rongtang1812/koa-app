let Router=require('koa-router');
let router=new Router();

router.get('/',(ctx,next) => {
    let query=ctx.query;
    console.log('参数', query)
    ctx.body=query
})
router.get('/add',(ctx,next) => {
    ctx.body='user add'
})

//抛出路由配置
module.exports=router