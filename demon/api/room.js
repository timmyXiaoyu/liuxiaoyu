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
// 多表联查：房间-位置
router.get('/search_roomPos',function(req,res){
    server.selRoom_Pos(req,res);
})
// 分页查询：房间-位置
router.get('/searchPage',function(req,res){
    server.selPage(req,res);
})
// 删除type类别
router.post('/del_type',function(req,res){
    server.delType(req,res);
})
// 删除位置信息
router.post('/del_price',function(req,res){
    server.delPos(req,res);
})
// 根据ID查询一条类型信息
router.get('/selOne',function(req,res){
    server.selWhere(req,res);
})
// 根据ID修改一条类型信息
router.post('/updateOne',function(req,res){
    server.updateType(req,res);
})
module.exports=router;
