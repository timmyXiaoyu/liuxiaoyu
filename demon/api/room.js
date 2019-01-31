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
router.post('/add_pos',function(req,res){
    server.addPos(req,res);
})
// 多表联查：房间-位置-类型
router.get('/search_roomPos',function(req,res){
    server.selRoom_Pos(req,res);
})
// 分页查询：房间-位置-类型
router.get('/searchPage',function(req,res){
    server.selPage(req,res);
})
// 删除type类别
router.post('/del_type',function(req,res){
    server.delType(req,res);
})
// 删除房间
router.post('/del_room',function(req,res){
    server.delRoom(req,res);
})
// 删除位置信息
router.post('/del_pos',function(req,res){
    server.delPos(req,res);
})
// 根据ID查询一条类型信息
router.get('/selOne',function(req,res){
    server.selWhere(req,res);
})
// 根据ID修改一条类型信息
router.post('/updateOneType',function(req,res){
    server.updateType(req,res);
})
// 根据ID查询一条房间信息
router.get('/selOneRoom',function(req,res){
    server.selWhereRoom(req,res);
})
// 根据ID修改一条房间信息
router.post('/updateOneRoom',function(req,res){
    server.updateRoom(req,res);
})
// 倒序查询位置信息
router.get('/sel_pos',function(req,res){
    server.selPos(req,res);
})
// 添加room
router.post('/add_room',function(req,res){
    server.addRoom(req,res);
})
// 查询所有房间
router.get('/search_room',function(req,res){
    server.searchRoom(req,res);
})
module.exports=router;
