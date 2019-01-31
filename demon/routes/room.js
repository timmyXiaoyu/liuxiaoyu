var router=require('express').Router();
// router.get('url',callback) callback(req=请求对象 res=响应对象)
router.get('/addtype',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/roomtype',{title:'添加房间类型'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/pos',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/pos',{title:'添加价格信息'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/typelist',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/typelist',{title:'房间类型信息'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/addroom',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/addroom',{title:'添加房间'});
    //  room/roomtype 是路径 文件里获取的路径
})
router.get('/roomlist',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/roomlist',{title:'房间列表'});
    //  room/roomtype 是路径 文件里获取的路径
})
module.exports=router;