<!-- TOC -->

- [1. 模块系统](#1-模块系统)
    - [1.1. 创建模块](#11-创建模块)
    - [1.2. 服务端的模块放在哪里](#12-服务端的模块放在哪里)
        - [1.2.1. 从文件模块缓存中加载](#121-从文件模块缓存中加载)
        - [1.2.2. 从原生模块加载](#122-从原生模块加载)
        - [1.2.3. 从文件加载](#123-从文件加载)
- [2. Node.js 函数](#2-nodejs-函数)
    - [2.1. 匿名函数](#21-匿名函数)
    - [2.2. 函数传递是如何让HTTP服务器工作的](#22-函数传递是如何让http服务器工作的)
- [3. Node.js路由](#3-nodejs路由)

<!-- /TOC -->

# 1. 模块系统

    为了让Node.js的文件可以互相调用,Node.js提供了一个简单的模块系统.
    模块是Node.js应用程序的基本组成部分,文件和模块是一一对应的.换言之,一个Node.js文件就是一个模块,这个文件可能是JavaScript
    代码,JSON或者编译过的C/C++扩展.

## 1.1. 创建模块

    在Node.js中,创建一个模块非常简单,
```js
// main.js文件
var hello = require('./hello');
hello.world();
```
    Node.js提供了exports 和 require 两个对象,其中 exports 是模块公开的接口,require用于从外部获取一个模块的接口,即所获取
    模块的 exports 对象.
```js
// hello.js文件

exports.world = function(){
    console.log('Hello World');
}
```
    以上实例中,hello.js通过 exports 对象把world作为模块的访问接口,在main.js中通过 require('./hello')加载这个模块,然后就
    可以直接访问 hello.js中exports对象的成员函数了.
    
    有时候我们只是想要把一个对象封装到模块中,格式如下:
```js
module.exports = function(){
    // ...
}



// hello.js
function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello' + name);
    }
}
module.exports = Hello;
```
    模块接口的唯一变化是使用 module.exports = Hello 代替了 exports.world = function(){}.在外部引用该模块时,
    其接口对象就是要输出的 Hello 对象本身,而不是原先的exports.


## 1.2. 服务端的模块放在哪里

```js
var http = require('http');

http.createServer(...);
```
    Node.js中自带了一个叫做http的模块,我们在我们的代码中请求它并把返回值赋给一个本地变量.
    这把我们的本地变量变成了一个拥有所有Http模块所提供的公共方法的对象.

    Node.js的require方法中的文件查找策略如下:
    
    由于Node.js中存在4类模块(原生模块和3种文件模块),尽管require方法极其简单,但是内部的加载却是十分复杂的,其加载
    优先级也各自不同.


### 1.2.1. 从文件模块缓存中加载

    尽管原生模块与文件模块的优先级不同,但是都会优先从文件模块的缓存中加载已经存在的模块.

### 1.2.2. 从原生模块加载

    原生模块的优先级仅次于文件模块缓存的优先级.require方法在解析文件名之后,优先检查模块是否在原生模块列表中.以http
    模块为例,尽管在目录下存在一个 http/http.node/http.json文件,require('http')都不会从这些文件中加载,而是从原生
    模块中加载.

    原生模块也有一个缓存区,同样也是优先从缓存区加载.如果缓存区没有被加载过,则调用原生模块的加载方式进行加载和执行.

### 1.2.3. 从文件加载

    当文件模块缓存中不存在,而且不是原生模块的时候,Node.js会解析 require 方法传入的参数.
    
    require方法接收以下几种参数的传递:
        http fs path等,原生模块.
        ./mod 或 ../mod,相对路径的文件模块
        /pathtomodule/mod,绝对路径的文件模块
        mod,非原生模块的文件模块


# 2. Node.js 函数

    在JavaScript中,一个函数可以作为另一个函数的参数.我们可以先定义一个函数,然后传递,也可以在传递参数的地方直接定义
    函数.
    Node.js中函数的使用与JavaScript类似,举例来说,
```js
function say(word){
    console.log(word);
}

function execute(someFunction,value){
    someFunction(value);
}
execute(say,'Hello');
```
    在上面的代码中,我们把say函数作为 execute函数的第一个变量进行了传递.这里传递的不是say的返回值,而是say本身.
    这样一来,say就变成了 execute 中的本地变量 someFunction, execute可以通过 someFunction()来使用say函数.

## 2.1. 匿名函数

    我们可以把一个函数作为变量传递.但是我们不一定要绕这个 ‘先定义,再传递’的圈子,我们可以直接在另一个函数的括号中定义
    和传递这个函数:
    
```js
function sayHello(someFunction,value){
    someFunction(value);
}

sayHello((word) => console.log(word),'Hello');
```

## 2.2. 函数传递是如何让HTTP服务器工作的

```js
// main.js 文件

var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Kyrie Irving');
    response.end();
}).listen(8888);

node main.js
运行后打开 localhost:8888 可以看到 Kyrie Irving


// 同样可以使用下面的写法

var http = require("http");
function onRequest(request,response){
    response.writeHead(200,{"Content-Type":'text/plain'});
    response.write('Kyrie Irving');
    response.end();
}

http.createServer(onRequest).listen(8888);
```

# 3. Node.js路由

    我们要为路由提供请求的URL和其他需要的GET 及 POST参数,随后路由需要根据这些数据来执行相应的代码.
    我们需要的所有数据都会包含在 request 对象中,该对象作为 onRequest() 回调函数的第一个参数传递.但是为了解析这个数
    据,我们需要额外的Node.js模块,它们分别是 url 和 querystring 模块.
    
                                      url.parse(string).query
                                                |
                    url.parse(string)/pathname  |
                          |                     |
                          |                     |
    http://localhost:8888/start?foo=bar&hello=world
                                    |           |
                                    |           |
                                    |           |
                            querystring.parse(querystring)["foo"]
                                                |
                                querystring.parse(querystring)["hello"]

```js                               
var http = require('http');
var url = require("url");

function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request,url).pathname;
        console.log("Request for" + pathname + 'received.');

        route(pathname);
        
        response.writeHead(200,{"Content-Type":'text/plain'});
        response.write('Hello World');
        response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log("Server has started");
}
exports.start = start;

// index.js 文件
var server = require('./server');
var router = require("./router");

server.start(router.route);
```
