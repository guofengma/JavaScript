
// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream("input.txt");

// // 设置编码 utf8
// readerStream.setEncoding("UTF8");

// readerStream.on("data",function(chunk){
//     data += chunk;
// })

// readerStream.on("end",function(){
//     console.log(data);
// })

// readerStream.on("error",function(err){
//     console.log(err.stack);
// })

// console.log("程序执行完毕");


// var fs = require("fs");
// var data = "秋风清,秋月明.落叶聚还散,寒鸦栖复惊!相思相见知何日,此时此夜难为情!入我相思门,知我相思苦"

// // 创建一个可以写入的流，写到output.txt里
// var writerStream = fs.createWriteStream("output.txt");

// writerStream.write(data,"UTF8");

// writerStream.end();

// // 处理流事件
// writerStream.on("finish",function(){
//     console.log("写入完成");
// })

// writerStream.on("error",function(err){
//     console.log(err.stack);
// })

// console.log("程序执行完毕");

// var fs = require("fs");

// // 创建一个可读流
// var readerStream = fs.createReadStream("output.txt");

// // 创建一个可写流
// var writerStream = fs.createWriteStream("input.txt");

// readerStream.pipe(writerStream);



var fs = require("fs");
var zlib = require("zlib");

// 压缩input.txt文件 为 input.txt.gz

// fs.createReadStream("input.txt")
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream("input.txt.gz"));

// console.log("文件压缩完成");


fs.createReadStream("input.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("compress.txt"));

console.log("文件解压完成");