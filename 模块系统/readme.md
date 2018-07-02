<!-- TOC -->

- [1. 模块系统](#1-模块系统)
    - [1.1. 加载模块的顺序](#11-加载模块的顺序)
    - [1.2. 核心模块](#12-核心模块)
    - [1.3. 创建模块](#13-创建模块)
    - [1.4. CommonJS规范](#14-commonjs规范)
    - [1.5. 异常处理](#15-异常处理)
    - [1.6. 不同模块中相同变量名互不冲突的原因?](#16-不同模块中相同变量名互不冲突的原因)
- [2. module对象](#2-module对象)
    - [2.1. module.exports实现原理](#21-moduleexports实现原理)
    - [2.2. module.exports VS export](#22-moduleexports-vs-export)
    - [2.3. AMD规范与CommonJS规范的兼容性](#23-amd规范与commonjs规范的兼容性)
- [3. require命令](#3-require命令)
    - [3.1. 加载规则](#31-加载规则)
    - [3.2. 模块的缓存](#32-模块的缓存)
    - [3.3. require的内部处理流程](#33-require的内部处理流程)
- [4. 模块的加载机制](#4-模块的加载机制)
- [5. Node.js 函数](#5-nodejs-函数)
    - [5.1. 匿名函数](#51-匿名函数)
    - [5.2. 函数传递是如何让HTTP服务器工作的](#52-函数传递是如何让http服务器工作的)
- [6. Node.js路由](#6-nodejs路由)
    - [6.1. 基本模块](#61-基本模块)
    - [6.2. 判断JavaScript执行环境](#62-判断javascript执行环境)

<!-- /TOC -->

# 1. 模块系统

    为了让Node.js的文件可以互相调用,Node.js提供了一个简单的模块系统.
    模块是Node.js应用程序的基本组成部分,文件和模块是一一对应的.换言之,一个Node.js文件就是一个模块,这个文件可能是JavaScript代码,JSON或者编译过的C/C++扩展. 按照CommonJS规范定义和使用模块.模块和文件是一一对应的关系.即加载一个模块
    实际上就是加载对应的一个模块.
    
    
    require命令用于指定加载模块,加载时可以省略脚本文件的后缀名.
```js
var circle = require("./circle.js");
或者：
var circle = require("./circle");
```

    require方法的参数是模块文件的名字.它分成两种情况,第一种情况是参数中含有文件路径,这时路径是相对于当前脚本所在的目录.
    第二种情况是参数中不含有文件路径,这时Node到模块的安装目录,去寻找已安装的模块.比如下例:
```js
var bar = require("bar");
```
    有时候,一个模块本身就是一个目录,目录中包含多个文件.这时候,Node在package.json文件中,寻找mian属性所指明的模块入口文件.
    
    注意:
        模块一旦被加载以后,就会被系统缓存.如果第二次还加载该模块,则会返回缓存中的版本.这意味着模块实际上只会执行一次.
    
    
## 1.1. 加载模块的顺序

    Node.js的require方法中的文件查找策略如下:
    由于Node.js中存在4类模块(原生模块和3种文件模块),尽管require方法极其简单,但是内部的加载却是十分复杂的,其加载
    优先级也各自不同.

    1. 从文件模块缓存中加载：
        尽管原生模块与文件模块的优先级不同,但是都会优先从文件模块的缓存中加载已经存在的模块.


    2. 从原生模块加载：
        原生模块的优先级仅次于文件模块缓存的优先级.require方法在解析文件名之后,优先检查模块是否在原生模块列表中.以http
        模块为例,尽管在目录下存在一个 http/http.node/http.json文件,require('http')都不会从这些文件中加载,而是从原生
        模块中加载.

    3. 原生模块也有一个缓存区,同样也是优先从缓存区加载.如果缓存区没有被加载过,则调用原生模块的加载方式进行加载和执行.


    4. 从文件加载:

    当文件模块缓存中不存在,而且不是原生模块的时候,Node.js会解析 require 方法传入的参数.
    require方法接收以下几种参数的传递:
        http fs path等,原生模块.
        ./mod 或 ../mod,相对路径的文件模块
        /pathtomodule/mod,绝对路径的文件模块
        mod,非原生模块的文件模块
    
    
    使用模块的好处:
        > 模块的最大好处是提高了代码的可维护性,其次,编写代码不必从零开始.当一个模块编写完毕,就可以被其他地方引用.我们在编写程序的时候
        也经常引用其他模块,包括Node内置的模块和第三方的模块.
    
        > 使用模块还可以避免函数名和变量名冲突,相同名字的函数和变量完全可以分别存在不同的模块中,因此,我们在编写模块时,不必考虑名字会
        与其他模块冲突.
    
## 1.2. 核心模块

    Node.js用于在于,它本身还提供了一系列功能模块,与操作系统互动.这些核心的功能模块,不用安装就可以使用.
    > http:提供HTTP服务器功能
    > url:解析URL
    > querystring:解析url的查询字符串
    > child_process:新建子进程
    > util:提供一系列实用小工具
    > path:处理文件路径
    > crypto:提供加密和解密功能,基本上是对OpenSSL的包装
    
    上面这些核心模块,源码都在node的lib子目录中.为了提高运行速度,它们安装时都会被编译成二进制文件.
    核心模块总是最先加载的,如果你自己写了一个HTTP模块,require("http")加载的还是核心模块.

    
## 1.3. 创建模块
    
    Node模块采用CommonJS规范,只要符合这个规范,就可以自定义模块.
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
    
## 1.4. CommonJS规范

    这种模块加载机制被称为CommonJS规范,在这个规范下,每个.js文件都是一个模块,它们内部各自使用的变量名和函数名都互不冲突,
    例如kyrie.js和 lbj.js 都声明了全局变量 a,但互不影响!
    每个文件就是一个模块,有自己的作用域.在一个文件里面定义的变量,函数,类,都是私有的.对其他文件不可见.
    
    一个模块想要对外暴露变量(函数也是变量),可以用module.exports = variable;一个模块要引用其他模块暴露的变量,用 var 
    ref = require("module_name");就拿到了引用模块的变量.

    module.exports = variable;
    输出的变量可以时任意对象,函数,数组等等!
    
    CommonJS规范规定,每个模块内部,module变量代表当前模块.这个变量是一个对象,它的exports属性是对外的接口.加载这个模块,
    其实就是加载该模块的 module.exports属性.
    
    
    module变量是整个模块文件的顶层变量,它的exports属性就是模块向外输出的接口.如果直接输出一个函数,那么调用模块就是调用一个
    函数.但是模块也可以输出一个对象.
```js
// foo.js
var out = new Object();

out.print = function(string){
    console.log(string);
}
module.exports = out;

// main.js
var m = require("./foo");
m.print("这是自定义模块");
```

    CommonJS模块的特点如下:
        > 所有代码都运行在模块作用域,不会污染全局作用域.
        > 模块可以多次加载,但是只会在第一次加载时运行一次,然后运行结果就被缓存了,以后再加载,就直接读取缓存结果,要让模块再次运行
        必须清除缓存.
        > 模块的加载顺序,按照其在代码中出现的顺序.
    
    
## 1.5. 异常处理

    Node是单线程运行环境,一旦抛出的异常没有被捕获,就会引起整个进程的崩溃.所以,Node的异常处理对于保证系统的稳定运行非常重要
    一般来说,Node有三种方法,传播一个错误:
        > 使用throw语句抛出一个错误对象,即抛出异常.
        > 将错误对象传递给回调函数,由回调函数负责发出错误.
        > 通过EventEmitter接口,发出一个error事件.

    Node采用的方法,是将错误对象作为第一个参数,传入回调函数.这样就避免了捕获代码与发生错误的代码不在同一个时间段的问题.
```js
fs.readFile("./foo.txt",function(err,data){
    if(err) throw err;
    console.log(data);
})
```
    
## 1.6. 不同模块中相同变量名互不冲突的原因?

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
    

# 2. module对象

    Node内部提供一个Module构建函数.所有模块都是Module的实例.
```js
function Module(id,parent){
    this.is = id;
    this.exports = {};
    this.parent = parent;
}
```
    每个模块内部,都有一个module对象,代表当前模块,它有以下属性:
        > module.id ： 模块的识别符,通常是带有绝对路径的模块文件名.
        > module.filename : 模块的文件名,带有绝对路径
        > module.loaded ：返回一个布尔值,表示模块是否已经完成加载.
        > module.parent : 返回一个对象,表示调用该模块的模块
        > module.children: 返回一个数组,表示该模块要用到的其他模块
        > module.exports 表示模块对外输出的值.


## 2.1. module.exports实现原理

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

## 2.2. module.exports VS export

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
    为了方便,Node为每个模块提供一个exports变量,指向module.exports.这等同在每个模块头部.有一行这样的命令.

    var exports = module.exports.
    
```js
function hello(){
    console.log("Hello World!");
}
function greet(){
    console.log("Hello" + name + '!');
}


exports.hello = hello;
exports.greet = greet;

但是你不可以直接对 exports 赋值,因为这样等于切断了 exports 与 module.exports的联系.
exports = {
    hello:hello,
    greet:greet
}
```
    最后,建议使用module.exports = xxx 的方式来输出模块变量.


## 2.3. AMD规范与CommonJS规范的兼容性

    CommonJS规范加载模块是同步的,也就是说,只有加载完成,才能执行后面的操作.AMD规范则是非同步加载模块,允许指定回调函数.
    由于Node.js主要用于服务器编程,模块文件一般都已经存在于本地硬盘,所以加载起来比较快,不用考虑非同步加载的方式,所以
    CommonJS规范比较适用.但是,如果是浏览器环境,要从服务端加载模块,这时就必须采用非同步模式,因此浏览器端一般采用AMD规范.

    AMD规范适用 define方法定义模块.


# 3. require命令

    Node使用CommonJS模块规范,内置的require命令用于加载模块文件.

    require命令的基本功能是,读入并执行一个JavaScript文件,然后返回该模块的exports对象.如果没有发现指定模块,会报错!

```js
// module.js文件

module.exports = function(){
    console.log("hello world");
}

require("./module.js")();   // hello world

上面代码中,require命令调用自身,等于是执行module.exports,因此会输出 hello world!
```

## 3.1. 加载规则

    根据参数的不同格式,require命令去不同路径寻找模块文件.
    
    （1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。
    （2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。
    （3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块
    

    目录的加载规则:
    通常,我们会把相关的文件放在一个目录里面,便于组织.这时,最好为该目录设置一个入口文件,让require方法可以通过这个入口文件,
    加载整个目录. 在目录中放置一个 package.json文件,并且将入口文件写入 main 字段.
```js
// package.json
{
    "name":"some-library",
    "main":"./lib/some-library.js"
}
```
    require发现参数字符串指向一个目录以后，会自动查看该目录的package.json文件，然后加载main字段指定的入口文件。如果
    package.json文件没有main字段，或者根本就没有package.json文件，则会加载该目录下的index.js文件或index.node文件.
    
    
## 3.2. 模块的缓存

    第一次加载某个模块的时候,Node会缓存该模块.以后再加载该模块,就直接从缓存取出该模块的 module.exports属性.
```js
require('./example.js');
require('./example.js').message = "hello";
require('./example.js').message
// "hello"
```

    注意:缓存是根据绝对路径识别模块的,如果同样的模块名,但是保存在不同路径,require命令还是会重新加载该模块.
    
## 3.3. require的内部处理流程

    require命令是CommonJS规范之中,用来加载其他模块的命令.它其实不是一个全局命令,而是指向当前模块的module.require命令.
    而后者又调用Node的内部命令 Module_.load
    
    require函数及其辅助方法主要如下:
        > require() : 加载外部模块
        > require.resolve() : 将模块名解析到一个绝对路径
        > require.main : 指向主模块
        > require.cache : 指向所有缓存的模块
        > require.extensions: 根据文件的后缀名,调用不同的执行函数.
    
# 4. 模块的加载机制

    CommonJS模块的加载机制是,输入的是被输出的值的拷贝.也就是说,一旦输出一个值,模块内部的变化就影响不到这个值.

```js
// main.js
var counter = 3;

function incCounter(){
    counter++;
}
module.exports = {
    counter:counter,
    incCounter:incCounter,
}


// app.js
var counter = require('./main').counter;
var incCounter = require('./main').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
```
    counter输出以后，lib.js模块内部的变化就影响不到counter了。
    

# 5. Node.js 函数

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

## 5.1. 匿名函数

    我们可以把一个函数作为变量传递.但是我们不一定要绕这个 ‘先定义,再传递’的圈子,我们可以直接在另一个函数的括号中定义
    和传递这个函数:
    
```js
function sayHello(someFunction,value){
    someFunction(value);
}

sayHello((word) => console.log(word),'Hello');
```

## 5.2. 函数传递是如何让HTTP服务器工作的

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

# 6. Node.js路由

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

## 6.1. 基本模块

    因为Node.js是运行在服务端的JavaScript环境,服务器程序和浏览器程序相比,最大的特点是没有浏览器的安全限制,而且,服务器程序必须能接收网络请求,
    读写文件,处理二进制内容,所以Node.js内置的常用模块就是为了实现基本的服务器功能!

    global
    
    Node环境中,也有唯一的全局对象,叫global,进入node交互环境,可以直接输入:
```js
 global.console
Console {
  log: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound countReset],
  group: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  Console: [Function: Console],
  debug: [Function: debug],
  dirxml: [Function: dirxml],
  table: [Function: table],
  markTimeline: [Function: markTimeline],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeline: [Function: timeline],
  timelineEnd: [Function: timelineEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(counts)]: Map {} }
```

## 6.2. 判断JavaScript执行环境

    有很多JavaScript代码既能在浏览器中执行,也能在Node环境中执行,但有些时候,程序本身需要判断自己到底是在什么环境下执行
    的,常用的方式就是根据浏览器和Node环境提供的全局变量名来判断；
```js
    if(typeof(window) === 'undefined'){
        console.log("node.js");
    }else{
        console.log("browser");
    }
```