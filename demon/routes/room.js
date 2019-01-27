var router=require('express').Router();
// router.get('url',callback) callback(req=请求对象 res=响应对象)
router.get('/addtype',function(req,res){
    // /addtype 是路由地址，搜索栏里输入的地址
     // res.send('这是新闻添加页')
     res.render('room/roomtype',{title:'添加房间类型'});
    //  room/roomtype 是路径 文件里获取的路径
})
module.exports=router;