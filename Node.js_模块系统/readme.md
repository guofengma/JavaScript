<!-- TOC -->

- [1. 模块系统](#1-模块系统)
    - [1.1. 创建模块](#11-创建模块)
    - [1.2. CommonJS规范](#12-commonjs规范)
    - [1.3. 不同模块中相同变量名互不冲突的原因?](#13-不同模块中相同变量名互不冲突的原因)
    - [1.4. module.exports实现原理](#14-moduleexports实现原理)
    - [1.5. module.exports VS export](#15-moduleexports-vs-export)
    - [1.6. 服务端的模块放在哪里](#16-服务端的模块放在哪里)
        - [1.6.1. 从文件模块缓存中加载](#161-从文件模块缓存中加载)
        - [1.6.2. 从原生模块加载](#162-从原生模块加载)
        - [1.6.3. 从文件加载](#163-从文件加载)
- [2. Node.js 函数](#2-nodejs-函数)
    - [2.1. 匿名函数](#21-匿名函数)
    - [2.2. 函数传递是如何让HTTP服务器工作的](#22-函数传递是如何让http服务器工作的)
- [3. Node.js路由](#3-nodejs路由)

<!-- /TOC -->

# 1. 模块系统

    为了让Node.js的文件可以互相调用,Node.js提供了一个简单的模块系统.
    模块是Node.js应用程序的基本组成部分,文件和模块是一一对应的.换言之,一个Node.js文件就是一个模块,这个文件可能是JavaScript
    代码,JSON或者编译过的C/C++扩展.

    模块的最大好处是提高了代码的可维护性,其次,编写代码不必从零开始.当一个模块编写完毕,就可以被其他地方引用.我们在编写程序的时候也经常引用其他
    模块,包括Node内置的模块和第三方的模块.
    
    使用模块还可以避免函数名和变量名冲突,相同名字的函数和变量完全可以分别存在不同的模块中,因此,我们在编写模块时,不必考虑名字会与其他模块冲突.
    
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

```js
// kyrie.js
var a = 'Kyrie Irving';
var b = 'Lebron James';
function greet(){
    console.log(a);
    console.log(b);
}
module.exports = greet;
// 把函数greet作为模块的输出暴露出去,这样其他模块就可以使用greet函数了


// lbj.js
var a = 'Hello Wordl';
var greet = require("./kyrie.js");
greet();
console.log(a);

$ node lbj.js
// 输出 Kyrie Irving
// Lebron James
// Hello World
```
    在上面的例子中,引用的模块作为变量保存在greet变量中,其实变量就是在kyrie.js中我们用 module.exports = greet 输出的
    greet函数,所以,lbj.js就成功地引用了kyrie.js模块中定义的greet()函数,下面就可以直接使用它.并且 两个模块里使用了
    相同的全局变量,并没有产生冲突!;
    
## 1.2. CommonJS规范

    这种模块加载机制被称为CommonJS规范,在这个规范下,每个.js文件都是一个模块,它们内部各自使用的变量名和函数名都互不冲突,
    例如kyrie.js和 lbj.js 都申明了全局变量 a,但互不影响!
    
    一个模块想要对外暴露变量(函数也是变量),可以用module.exports = variable;一个模块要引用其他模块暴露的变量,用 var 
    ref = require("module_name");就拿到了引用模块的变量.

    module.exports = variable;
    输出的变量可以时任意对象,函数,数组等等!
    
    
## 1.3. 不同模块中相同变量名互不冲突的原因?

    JavaScript语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名.
    那Node.js是如何实现这一点的?

    其实要实现“模块”这个功能,并不需要语法层面的支持.Node.js也并不会增加任何JavaScript语法.实现“模块”功能的奥妙就在于
    JavaScript是一种函数式编程语言,它支持闭包.如果我们把一段JavaScript代码用一个函数包装起来,这段代码的所有“全局”变量
    就变成了函数内部的局部变量.
    
```js
// hello.js
var s = "Hello";
var name = "World!";
console.log(s + '' + name + '!');


// Node.js加载了hello.js后,它可以把代码包装一下,变成这样执行:
(function(){
    var s = "Hello";
    var name = "World!";
    console.log(s + '' + name + '!');
})();
```
    这样一来,原来的全局变量s现在变成了匿名函数内部的局部变量.如果Node.js继续加载其他模块,这些模块中定义的'全局'变量s也
    互不干扰.
    所以,Node利用JavaScript的函数式编程的特性,轻而易举地实现了模块的隔离!
    
## 1.4. module.exports实现原理

    Node可以先准备一个对象module,
```js
var module = {
    id:'hello',
    exports:{}
};

var load = function(module){
    // 读取hello.js代码
    function greet(name){
        console.log("Hello" + name + '!');
    }
    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};

var exported = load(module);
// 保存module
save(module,exported);
```
    变量module是Node在加载js文件前准备的一个变量,并将其传入加载函数,我们在hello.js中可以直接使用变量Module原因就在于它实际上是函数的一个参数.

    module.export = greet;
    通过把参数 module 传递给load() 函数,hello.js就顺利地把一个变量传递给了Node执行环境,Node会把module变量保存到某个地方.
    由于Node保存了所有导入的module,当我们用require()获取module时,Node找到对应的module,把这个module的exports变量返回,这样,另一个模块就顺利拿到了
    模块的输出.

## 1.5. module.exports VS export

    在Node环境中,有两种方法可以在一个模块中输出变量:

    方法一: 对module.exports赋值
```js
function hello(){
    console.log("Hello,World");
}
function greet(name){
    console.log("Hello" + name);
}
module.exports = {
    hello:hello,
    greet:greet
}
```

    方法二:直接使用exports
```js
function hello(){
    console.log("Hello World!");
}
function greet(){
    console.log("Hello" + name + '!');
}


exports.hello = hello;
exports.greet = greet;

但是你不可以直接对 exports 赋值:
exports = {
    hello:hello,
    greet:greet
}
```
    最后,建议使用module.exports = xxx 的方式来输出模块变量.
    

## 1.6. 服务端的模块放在哪里

```js
var http = require('http');

http.createServer(...);
```
    Node.js中自带了一个叫做http的模块,我们在我们的代码中请求它并把返回值赋给一个本地变量.
    这把我们的本地变量变成了一个拥有所有Http模块所提供的公共方法的对象.

    Node.js的require方法中的文件查找策略如下:
    
    由于Node.js中存在4类模块(原生模块和3种文件模块),尽管require方法极其简单,但是内部的加载却是十分复杂的,其加载
    优先级也各自不同.


### 1.6.1. 从文件模块缓存中加载

    尽管原生模块与文件模块的优先级不同,但是都会优先从文件模块的缓存中加载已经存在的模块.

### 1.6.2. 从原生模块加载

    原生模块的优先级仅次于文件模块缓存的优先级.require方法在解析文件名之后,优先检查模块是否在原生模块列表中.以http
    模块为例,尽管在目录下存在一个 http/http.node/http.json文件,require('http')都不会从这些文件中加载,而是从原生
    模块中加载.

    原生模块也有一个缓存区,同样也是优先从缓存区加载.如果缓存区没有被加载过,则调用原生模块的加载方式进行加载和执行.

### 1.6.3. 从文件加载

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

