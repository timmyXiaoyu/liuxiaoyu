var router=require('express').Router();
var server=require('./../server/stay');

// 多表联查：房间-位置-类型
router.get('/search_room',function(req,res){
    server.selRoom_Pos(req,res);
})
// 添加用户信息
router.post('/add_user',function(req,res){
    server.addUser(req,res);
})
// 添加订单信息
router.post('/add_orderlist',function(req,res){
    server.addOrderList(req,res);
})
// 查询订单-顾客
router.get('/search_list',function(req,res){
    server.selList_People(req,res);
})
module.exports=router;
