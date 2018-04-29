// // 依赖http模块
// var http = require("http");

// // 创建一个服务器对象
// const server = http.createServer(function(req,res){
//     // 设置请求成功时响应头部的MIME为纯文本
//     res.writeHeader(200,{"Content-Type":"text/plain"});
//     // 向客户端输出字符
//     res.end("Hello World!");
//     console.log("结束!");
//     console.log(server.listening);
// })
// server.listen(8081);


// 引入express模块
var express = require("express");
// 创建一个app对象,类似一个web应用
var app = express();

// 接收指定路径的请求,指定回调函数
app.get("/",function(req,res){
    res.send("Kyrie Irving!");
})

// 创建一个web服务器,可以认为就是web服务器对象
// 监听8081端口,当监听成功时回调
var server = app.listen(8081,function(){
    var host = server.address().address;    // 地址
    var port = server.address().port;       // 端口
    console.log("应用实例访问地址为 http://%s:%s",host,port);
})