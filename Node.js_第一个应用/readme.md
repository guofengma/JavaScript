<!-- TOC -->

- [1. Node.js](#1-nodejs)
    - [1.1. Node.js创建第一个应用](#11-nodejs创建第一个应用)
    - [1.2. 创建Node.js应用](#12-创建nodejs应用)

<!-- /TOC -->

# 1. Node.js

    node.js是运行在服务端的JavaScript.
    node.js是一个基于Chrome JavaScript 运行时建立的一个平台.
    node.js是一个事件驱动I/O服务端JavaScript环境,基于Google的V8引擎,V8引擎执行JavaScript的速度非常快,性能非常好.

    node -v 
    查看node版本

    第一个Node.js程序:Hello World!
```js
// 新建一个 main.js 文件
console.log('Hello World');

// 通过 node命令来执行
node main.js

// 会在终端输出 Hello World
```

    交互模式:
    打开终端,键入node进入命令交互模式,可以输入一条代码语句后立即执行并显示结果,例如:
```js
$ node
> console.log('Hello World!');
Hello World!
```

## 1.1. Node.js创建第一个应用

    使用node.js时,我们不仅仅在实现一个应用,同时还实现了整个HTTP服务器.事实上,我们的Web应用以及对应的web服务器
    基本上是一样的.

    Node.js应用由哪几部分组成?
    1. 引入required模块:我们可以使用 require 指令来载入 node.js 模块.
    2. 创建服务器:服务器可以监听客户端的请求,类似于Apache Nginx等HTTP服务器
    3. 接收请求与响应请求:服务器很容易创建,客户端可以使用浏览器或终端发送HTTP请求,服务器接收请求后返回响应数据.

## 1.2. 创建Node.js应用

    1. 引入 required 模块
    我们使用 require 指令来载入 http模块,并将实例化的 HTTP 赋值给变量 http,实例如下:
```js
var http = require('http');
```

    2. 创建服务器
    使用 http.createServer()方法创建服务器,并使用listen方法绑定8888端口,函数通过 request,response参数来接收和响应数据.

```js
var http = require('http');

// 创建服务器 并使用 listen方法绑定8888端口, 通过request response 参数来接收和响应数据.
http.createServer(function(request,response){
    // 发送HTTP头部
    // HTTP状态值:200
    // 内容类型:text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // 发送响应数据 'Hello World'
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server runing at http://127.0.0.1:8888/');

// 在终端运行 server.js
$ node server.js
Server running at http://127.0.0.1:8888/
```
    分析Node.js的HTTP服务器:
    第一行请求(require)Node.js自带的http模块,并且把它赋值给http变量
    接下来我们调用 http 模块提供的函数:createServer.这个函数会返回一个对象,这个对象有一个叫做 listen的方法,这个方法有
    一个数值参数,指定这个HTTP服务器监听的端口号.