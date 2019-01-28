var router=require('express').Router();
var server=require('./../server/admin');

// 添加管理员帐号
router.post('/add_admin',function(req,res){
    server.add(req,res);
})
// 查询管理员账号密码
router.get('/login',function(req,res){
    server.select(req,res);
})

module.exports=router;
