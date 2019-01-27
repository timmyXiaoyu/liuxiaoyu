var router=require('express').Router();
var server=require('./../server/room');

// 添加type类别
router.post('/add_type',function(req,res){
    server.addType(req,res);
})

module.exports=router;
