<!-- TOC -->

- [1. Node.js Web模块](#1-nodejs-web模块)
    - [1.1. 使用Node创建Web服务器](#11-使用node创建web服务器)
    - [1.2. 使用Node创建Web客户端](#12-使用node创建web客户端)

<!-- /TOC -->

# 1. Node.js Web模块

    Web服务器一般指网站服务器,是指驻留于因特网上某种类型计算机的程序,Web服务器的基本功能就是提供Web信息浏览服务.它只需支持
    支持HTTP协议, HTML文档格式及URL,与客户端的网络浏览器配合.
    大多数web服务器都支持服务端的脚本语言(php,python,ruby)等,并通过脚本语言从数据库获取数据,将结果返回给客户端浏览器.

    目前最主流的三个Web服务器是Apache Nginx IIS


## 1.1. 使用Node创建Web服务器

    Node.js提供了http模块,http模块主要用于搭建HTTP服务端和客户端,使用HTTP服务器或客户端功能必须调用Http模块,代码如下

    var http = require('http');

    以下演示一个最基本的HTTP服务器架构(使用8080端口),创建server.js文件,代码如下:
```js
var http = require("http");
var fs = require("fs");
var url = require("url");


// 创建服务器
http.createServer(function(request,response){
    // 解析请求,包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for" + pathname + 'received');

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
        }
    })
})
```

## 1.2. 使用Node创建Web客户端

    Node创建Web客户端需要引入 http 模块,创建server.js文件,
```js
// server.js

var http = require("http");
var options = {
    host:'localhost',
    port:'8080',
    path:'/index.html'
};

// 处理相应的回调函数
var callback = function(response){
    var body = '';
    response.on("data",function(data){
        body += data;
    });

    response.on("end",function(){
        // 数据接受完成
        console.log(body);
    })
}
// 向服务端发送请求
var req = http.request(options,callback);
req.end();
```