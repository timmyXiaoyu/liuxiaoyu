var roomRouter=require('./room');
var adminRouter=require('./admin');
var objRouter={
     '/room':roomRouter,
     '/admin':adminRouter,
   }
   
module.exports = objRouter;