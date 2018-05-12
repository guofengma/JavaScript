<!-- TOC -->

- [1. HTTP模块](#1-http模块)
    - [1.1. request对象](#11-request对象)
    - [1.2. 处理POST请求](#12-处理post请求)
    - [1.3. 模块属性](#13-模块属性)
    - [1.4. 模块的方法](#14-模块的方法)
- [2. querystring - 查询字符串](#2-querystring---查询字符串)

<!-- /TOC -->

# 1. HTTP模块

    http模块主要用于搭建http服务器,使用Node搭建http服务器非常简单.
```js
var http = require("http");

// http.createServer 创建一个服务器实例.
// req 表示客户端的http请求
// res 表示服务端的http回应
http.createServer((req,res) => {
    // res.writeHead方法用来写入HTTP回应的头信息
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Hello World!");
    // res.end()表示写入HTTP回应的具体内容,以及回应完成后关闭本次对话.
    res.end();
}).listen(3000,"127.0.0.1");

console.log("Server running on port 3000");
```

    上面的例子是收到请求后生成网页,也可以事先写好网页,保存在文件中,然后利用fs模块读取网页文件,将其返回.
```js
var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
    fs.readFile('data.txt',function readData(err,data){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end(data);
    })
});
```

    下面是根据不同网址的请求,显示不同的内容,已经相当于做出一个网站的雏形了.
```js
var http = require("http");

http.createServer((req,res) => {
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("Welcome to the home page");
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("Welcome to the about page");
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("404 error");
    }
}).listen(2000,"127.0.0.1");
```

## 1.1. request对象

    createServer方法的回调函数的第一个参数是一个request对象,拥有以下属性:
        > url : 发出请求的网址
        > method : HTTP请求的方法
        > headers : HTTP请求的头部信息


    获取请求的路径名:
    var url = require("url");
    var pathname = url.parse(request.url).pathname;


    setEncoding()方法用于设置请求的编码:
    request.setEncoding("utf8");


    addListener()方法用于为请求添加监听事件的回调函数.
```js
var querystring = require(querystring);
var postData = '';

request.addListener("data",function(postDataChunk){
    postData += postDataChunk;
});
request.addListener("end",function(){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("You have sent the text:" + querystring.parse(postData).text);
    response.end();
})
```

    request方法用于发出HTTP请求,它的使用格式如下:
```js
http.request(options[,callback]);
```
    request方法的options参数,可以是一个对象,也可以是一个字符串.如果是字符串,就表示这是一个URL.Node内部就会自动
    调用url.parse(),处理这个参数.
    
    options对象可以设置如下属性:
    > host: HTTP请求所发往的域名或者IP地址,默认是localhost
    > hostname : 该属性会被url.parse()解析,优先级高于host
    > port: 远程服务器的端口,默认是80
    > method: 指定HTTP请求的方法,格式为字符串,默认为GET
    > path: 指定HTTP请求的路径,默认文根路径(/).
    > headers: 一个对象,包含了HTTP请求的头信息

    request方法的callback参数是可选的,在response事件发生时触发,而且只触发一次.


    listen方法用于启动服务器,它可以接受多种参数:
```js
var server = new http.Server();
// 端口
server.listen(8000);

// 端口,主机
server.listen(8080,'localhost');

// 对象
server.listen({
    port:8000,
    host:'localhost'
})
```
## 1.2. 处理POST请求

    当客户端采用post方法发送数据时,服务端可以对data和end两个事件,设立监听函数.

```js
var http = require("http");

http.createServer(function(req,res){
    var content = '';

    req.on("data",function(chunk){
        content += chunk;
    })

    req.on("end",function(){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("you have sent:" + content);
        res.end();
    });
}).listen(8080);
```
    data事件会在数据接收过程中，每收到一段数据就触发一次，接收到的数据被传入回调函数。end事件则是在所有数据接收完成后触发。

## 1.3. 模块属性

    HTTP请求的属性
    > headers:HTTP请求的头信息
    > url:请求的路径

## 1.4. 模块的方法

    (1) createServer(callback): 创造服务器实例.
    (2) listen(port) : 启动服务器监听指定端口.
    (3) HTTP回应的方法:
        > setHeader(key,value):指定HTTP头信息
        > write(str): 指定HTTP回应的内容.
        > end() : 发送HTTP回应.


# 2. querystring - 查询字符串

    querystring模块提供了一些实用函数,用于解析与格式化URL查询字符串.
```js
const querystring = require("querystring");
```

    querystring.parse(str[,sep[,eq[,options]]])
        > str: 要解析的URL查询字符串
        > sep:用于界定查询字符串中的键值对的子字符串.默认为'&'
        > eq:用于界定查询字符串中的键与值的字符串.默认为'='
        > options:
        > decodeURIComponent: 解码查询字符串的字符时使用的函数.默认为querystring.unescape()
        > maxKeys: 指定要解析的键的最大数量,默认为1000

    默认情况下,查询字符串中的字符会被视为使用UTF-8编码.如果使用的是其他字符编码,则需要指定decodeURIComponent选项.
```js
querystring.parse("w=%D6%D0%CE%C4&foo=bar",null,null,
{decodeURIComponent:gbkDecodeURIComponent});


var querystring = require("querystring");

console.log(querystring.parse("name1=value1&name2=value2&name3=value3"));
{ name1: 'value1', name2: 'value2', name3: 'value3' }

```

    querystring.stringify(obj[,sep[,eq[,options]]])
        > obj: 要序列化成URL查询字符串对象
        > sep: 用于界定查询字符串中的键值对的子字符串.默认为'&'
        > eq: 用于界定查询字符串中的键与值的子字符串.默认为'='
        > options: 
            encodeURIComponent 把对象中的字符转换成查询字符串时使用的函数.默认为querystring.escape()
    
    该方法通过遍历给定的obj对象的自身属性,生成URL查询字符串.
```js
// index.js

var querystring = require("querystring");
console.log( querystring.stringify({foo:'bar',baz:'qux'}) );

// node index.js
foo=bar&baz=qux


var querystring = require("querystring");
console.log(querystring.stringify({"firstname":"kyrie","lastname":"irving","age":"26"}));
// node index.js
firstname=kyrie&lastname=irving&age=26
```