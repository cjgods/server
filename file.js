var fs=require('fs');
//读取文件
exports.readFile = function(path,callback){
    fs.readFile(path, function (err, data) {
       if (err) {
           return callback(err);
       }
     callback(null,JSON.parse(data));
});

}