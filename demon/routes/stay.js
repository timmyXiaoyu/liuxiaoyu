var router=require('express').Router();
// router.get('url',callback) callback(req=请求对象 res=响应对象)
router.get('/hallstay',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('stay/hallstay',{title:'大堂入住'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/stayin',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('stay/stayin',{title:'办理入住'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/staylist',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('stay/staylist',{title:'入住查询'});
    //  room/roomtype 是路径 文件里获取的路径
})
module.exports=router;