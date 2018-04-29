<!-- TOC -->

- [1. Node.js Web模块](#1-nodejs-web模块)
    - [1.1. 使用Node创建Web服务器](#11-使用node创建web服务器)
    - [1.2. 使用Node创建Web客户端](#12-使用node创建web客户端)
    - [1.3. http.Server类](#13-httpserver类)

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

## 1.3. http.Server类

    server.listen()
    
    开启HTTP服务器监听连接.方法与 net.server 的 server.listen() 相同.

    server.listening
    返回一个布尔值,表示服务器是否正在监听连接

    server.maxHeadersCount
    限制请求头的最大数量,默认为2000,如果设为0,则没有限制

    http.ServerResponse类
    该对象在HTTP服务器内部被创建,它作为第二个参数被传入 'request' 事件.

    close事件
    当底层连接在 response.end() 被调用或能够刷新之前被终止时触发.

    response.end()
    该方法会通知服务器,所有响应头和响应主体都已被发送,即服务器将其视为已完成.每次响应都必须调用 response.end()方法
    
    response.setHeader(name,value)
    为一个隐士的响应头设置值,如果该响应头已存在,则值会被覆盖.如果要发送多个名称相同的响应头,则使用字符串数组.
    response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并,并且response.writeHead()的优先

    