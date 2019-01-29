var router=require('express').Router();
var server=require('./../server/room');

// 添加type类别
router.post('/add_type',function(req,res){
    server.addType(req,res);
})
// 查询所有类别信息
router.get('/search_type',function(req,res){
    server.searchType(req,res);
})
// 添加价格信息
router.post('/add_price',function(req,res){
    server.addPrice(req,res);
})
// 多表联查：房间类型-价格
router.get('/search_typePrice',function(req,res){
    server.selType_Price(req,res);
})
// 分页查询：房间类型-价格
router.get('/searchPage',function(req,res){
    server.selPage(req,res);
})
module.exports=router;
