var mysql=require('mysql');
var dbconfig=require('./config');

var pool=mysql.createPool(dbconfig);

var query=function(sql,callback){
     pool.getConnection(function(err,conn){
          if(err){
               console.log(err);
               return;
          }else{
               conn.query(sql,function(err,result){
                    if(err){
                         console.log(sql);
                         console.log('sql error');                        
                    }
                    callback(result);
               })
          }

     })
}

function format_data(code,msg,data=[]){
     var json={code:code,msg:msg,data:data};
     return json;
}

function format_List(code,msg,count=5,data=[]){
     var json={code:code,msg:msg,count:count,data:data};
     return json;
}
// 封装key value
function Kv(data){
     let keys='';
     let values='';
     for(let i in data){
          keys+=i+',';
          values+=`'${data[i]}'`+',';
     }
     keys=keys.substring(0,keys.length-1);
     values=values.substring(0,values.length-1);
     return {
          k:keys,
          v:values
     }
}

// 插入数据的方法
function insert(tabname,data,callback){
     var kv=Kv(data);
     var sql=`insert into \`${tabname}\` (${kv.k}) values(${kv.v})`;
     query(sql,function(res){
          var json='';
          if(res){
               json=format_data(0,'新增数据成功');
          }else{
               json=format_data(1,'新增失败');
          }
          callback(json);
     })
}

// 查询所有数据的方法
function search(tabname,callback){
     
     var sql=`select * from \`${tabname}\``;
     query(sql,function(res){
        //   console.log(res);
          var json='';
          if(res){
               json=format_data(0,'查询数据成功',res);
          }else{
               json=format_data(1,'查询数据失败');
          }
          callback(json);
     })
}
// 根据条件查询数据
function selectWhere(tabname,data,callback){
    console.log(data);
     let where_='';
     for(var i in data){
          where_+=`${i}='${data[i]}' and `
     }
     where_+='1';
     let sql=`select * from \`${tabname}\` where ${where_}`;
    //  console.log(sql);
     query(sql,function(res){
          var json='';
          if(res){
               json=format_data(0,'查询数据成功',res);
          }else{
               json=format_data(1,'查询数据失败');
          }
          callback(json);
     })
}
// 修改数据
function update(tabname,data,callback){
     let set_ = where_ = '';
     var id=`${tabname}_id`;
     where_ = `${id}=${data[id]}`; //where条件
     delete data[id];  //删除对象中的id
     // 拼接修改字段字段
     for(let i in data){
         set_ += `${i}='${data[i]}',`;
     }
     let xx = set_.lastIndexOf(',');
     let aa = set_.substr(0,xx);
 
     let sql = `update \`${tabname}\` set ${aa} where ${where_}`;
     console.log(sql);
     query(sql, function (result) {
         var json = '';
         if (result) {
             json = format_data(0, '数据更新成功', result);
         } else {
             json = format_data(1, '数据更新失败');
         }
         callback(json);
     });
}
 
// 删除数据
function del(tabname,data,callback){
     let where_='';
     for(var i in data){
          where_+=`${i}='${data[i]}' and `
     }
     where_+='1';
     var sql=`DELETE FROM ${tabname} WHERE ${where_}`;
     query(sql,function(res){
          console.log(res);
          var json='';
          if(res){
               json=format_data(0,'数据删除成功',res);
          }else{
               json=format_data(1,'数据删除失败');
          }
          callback(json);
     })
}
// 倒序查询
function Desc(tabname,data,callback){
     let sql=`SELECT * FROM \`${tabname}\` ORDER BY id DESC`;
     // console.log(sql);
     query(sql,function(res){
          var json='';
          if(res){
               json=format_data(0,'查询数据成功',res);
          }else{
               json=format_data(1,'查询数据失败');
          }
          callback(json);
     })
}
// 多表联查
function selectMore(tabname,data,callback){
     // console.log(data);
     let sql=`SELECT * from \`${tabname['tab1']}\` as a JOIN \`${tabname['tab2']}\` as b on a.${data['id1']}=b.${data['id2']} ORDER by a.${data['id1']} DESC `;
     // console.log(sql);
     query(sql,function(res){
          var json='';
          if(res){
               json=format_data(0,'查询数据成功',res);
          }else{
               json=format_data(1,'查询数据失败');
          }
          callback(json);
     })
}
// // 多表联查一条数据
// function selectMoreOne(tabname,data,callback){
//      // console.log(data);
//      let sql=`SELECT * from \`${tabname['tabname1']}\` as a JOIN \`${tabname['tabname2']}\` as b on a.${data['fid']}=b.${data['zid']} where a.${data['key']}=${data['val']}`;
//      // console.log(sql);
//      query(sql,function(res){
//           var json='';
//           if(res){
//                json=format_data(0,'查询数据成功',res);
//           }else{
//                json=format_data(1,'查询数据失败');
//           }
//           callback(json);
//      })
// }
// 分页查询
function searchPage(tabname,data,callback){
    let sql=`SELECT * from \`${tabname['tab1']}\` as a JOIN \`${tabname['tab2']}\` as b on a.${data['id1']}=b.${data['id2']} ORDER by a.${data['id1']} DESC `;
     query(sql,function(res){
          var json='';
          if(res){
               console.log(res.length);
               var count=res.length;
               json=format_List(0,'查询数据成功',count,res);
          }else{
               json=format_List(1,'查询数据失败');
          }
          callback(json);
     })
}
module.exports={
     insert,search,selectWhere,update,del,Desc,selectMore,searchPage
}

// SELECT * FROM `article` ORDER BY id DESC  倒序
//  SELECT a.id,a.title,a.author,a.spec,a.content,b.typename as tname from `article` a JOIN `type` b on a.typeid=b.id ORDER by a.id DESC    多表联查&&倒序

