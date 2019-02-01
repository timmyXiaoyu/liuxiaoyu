var roomRouter=require('./room');
var adminRouter=require('./admin');
var stayRouter=require('./stay');
var objRouter={
     '/room':roomRouter,
     '/admin':adminRouter,
     '/stay':stayRouter,
   }
   
module.exports = objRouter;