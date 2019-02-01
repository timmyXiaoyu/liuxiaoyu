var router=require('express').Router();
var server=require('./../server/stay');

// 多表联查：房间-位置-类型
router.get('/search_room',function(req,res){
    server.selRoom_Pos(req,res);
})

module.exports=router;
