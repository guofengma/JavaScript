<!-- TOC -->

- [1. Node.js工具模块](#1-nodejs工具模块)
- [2. OS模块](#2-os模块)
        - [2.0.1. 方法和描述](#201-方法和描述)
- [3. Node.js Path模块](#3-nodejs-path模块)
    - [3.1. 方法和描述](#31-方法和描述)
- [4. Node.js Net模块](#4-nodejs-net模块)
    - [4.1. 方法](#41-方法)
    - [4.2. net.Server](#42-netserver)
    - [4.3. 事件](#43-事件)
- [5. Node.js DNS模块](#5-nodejs-dns模块)
- [6. Node.js Domain模块](#6-nodejs-domain模块)
    - [6.1. 方法](#61-方法)
- [7. url](#7-url)
    - [7.1. url.hash](#71-urlhash)
    - [7.2. url.host](#72-urlhost)
    - [7.3. url.hostname](#73-urlhostname)
    - [7.4. url.href](#74-urlhref)
    - [7.5. url.pathname](#75-urlpathname)
    - [7.6. url.port](#76-urlport)

<!-- /TOC -->

# 1. Node.js工具模块

    在Node.js模块库中有很多好用的模块,下面介绍几种常用的模块

# 2. OS模块

    Node.js os模块提供了一些基本的系统操作函数.可以通过以下方式引入该模块
    
    var os = require("os");

### 2.0.1. 方法和描述

    os.tmpdir()         返回操作系统的默认临时文件夹
    os.endianness()     返回CPU的字节序,可能的是"BE"或"LE"
    os.hostname()       返回操作系统的主机名
    os.type()           返回操作系统名
    os.platform()       返回操作系统名
    os.arch()           返回操作系统CPU架构,可能的值有'x64' 'arm' 和 'ia32'
    os.release()        返回操作系统的发行版本
    os.uptime()         返回操作系统运行时间,以秒为单位
    os.loadavg()        返回一个包含1 5 15分钟平均负载的数组
    os.totalmem()       返回系统内存总量,单位为字节.
    os.freemem()        返回操作系统空闲内存量,单位是字节
    os.cpus()           返回一个对象数组,包含所安装的每个 CPU/内核的信息:型号,速度(单位MHz),时间
    os.networkInterfaces 获得网络接口列表

```js
var os = require("os");

// 返回操作系统的字节序
os.endianness();    // LE
os.hostname();      // LAPTOP-N040K7RJ
os.type();          // Windows_NT
os.platform();      // win32
os.totalmen();      // 系统内存总量
os.freemen();       // 返回操作系统空闲内存量
os.uptime();        // 返回操作系统运行时间
os.relase();        // 返回操作系统的法行版本
```

# 3. Node.js Path模块

    Node.js path模块提供了一些用于处理文件路径的小工具:

    var path = require("path");

## 3.1. 方法和描述

    path.normalize(p)           规范化路径
    path.join([path1],[path2]..) 用于连接路径,该方法的主要用于在于,会正确使用当前系统的路径分隔符,Unix系统是'/',Windows是'\'
    path.resolve([from],to)     将to参数解析为绝对路径
    path.isAbsolute(path)       判断path是否为绝对路径
    path.resolve(from,to)       用于将相对路径转为绝对路径
    path.dirname(p)             返回路径中代表文件夹的部分,同Unix的dirname命令类似
    path.basename(p[,ext])      返回路径中的最后一部分
    path.extname(p)             返回路径中文件的后缀名,即路径中最后一个'.'之后的部分.如果一个路径中并不包含'.'或该该路径只
    包含一个'.'且这个'.'为路径的第一个字符,则此命令返回空字符串.
    path.parse(pathString)      返回路径字符串的对象
    path.format(pathObject)     从对象中返回路径字符串,和path.parse相反

```js
var path = require("path");

// 格式化路径
console.log("normalization:" + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log("join path:" + path.join("/test",'test2','style.css'));

// 转为绝对路径
console.log("resolve:" + path.resolve("main.js"));
console.log(__filename);

// 路径中文件的后缀名
console.log("ext name:" + path.extname("main.js"));

$ node mian.js
```

# 4. Node.js Net模块

    Node.js Net模块提供了一些用于底层的网络通信的小工具,包含了创建服务器/客户端的方法.

    var net = require(net);

## 4.1. 方法

    net.createServer([options],)        创建一个TCP服务器.
    net.connect()                       返回一个新的'net.Socket',并连接到指定的地址和端口
    net.createConnection()              创建一个到端口port和主机host的TCP连接.host默认为'localhost'


## 4.2. net.Server

    net.Server通常用于创建一个TCP或本地服务器

    server.listen(port,[,host])
    监听指定端口 post 和 主机 host ac连接.默认情况下host接受任何IPv4地址的直接连接.

    server.listen(path[,callback])
    通过指定path的连接,启动一个本地socket服务器

    server.listen(handle[,callback])
    通过指定句柄连接

    server.close(callback)
    服务器停止接受新的连接,保持现有连接.这是异步函数,当所有连接结束的时候服务器会关闭.并会触发'close'事件

    server.address()
    操作系统返回绑定的地址,协议族名和服务器端口

    server.unref()
    如果这是事件系统中唯一一个活动的服务器,调用unref将允许程序退出.

## 4.3. 事件

    listening
    当服务器调用 server.listen 绑定后会触发

    connection
    当新连接创建后会被触发,socket是 net.Socket实例

    close
    服务器关闭时触发.注意,如果存在这个连接,这个事件不会触发直到所有的连接关闭.

    error
    发生错误时触发,close事件将被下列事件直接调用
    
# 5. Node.js DNS模块

    Node.js DNS模块用于解析域名.

    var dns = require("dns");


# 6. Node.js Domain模块

    Node.js Domain简化异步代码的异常处理,可以捕捉处理 try catch无法捕捉的异常.

    var domain = require("domain");

    domain模块,将处理多个不同的IO的操作作为一个组,注册事件和回调到domain,当发生一个错误事件或抛出一个错误时,domain对象
    会被通知,不会丢失上下文环境,也不导致程序错误立即退出,与process.on("uncaughtException")不同.

    Domain模块可分为隐士绑定和显示绑定:
    隐士绑定:把在domain上下文中定义的变量,自动绑定到domain对象
    显示绑定:把不是在domain上下文中定义的变量,以代码的方式绑定到domain对象

## 6.1. 方法

    domain.run(function)
    在域的上下文运行提供的函数,隐士的绑定了所有的事件分发器,计时器和底层请求

    domain.add(emitter)
    显示的增加事件

    domain.remove(emitter)
    删除事件

    domain.intercept(callback)
    和domain.bind(callback)类似.除了捕获被抛出的错误外,它还会拦截Error对象作为参数传递到这个函数

    domain.enter()
    进入一个异步调用的上下文,绑定到domain.

    domain.exit()
    退出当前的domain,切换到不同的链的异步调用的上下文中.对应domain.enter()

    domain.dispost()
    释放一个domain对象,让node进程回收这部分资源

    domain.create()
    返回一个domain对象.

# 7. url

    url模块提供了一些实用函数,用于URL处理与解析.可以通过以下方式使用:
```js
const url = require("url");
```
    一个url字符串是一个结构化的字符串,它包含多个有意义的组成部分.当被解析时,会返回一个url对象,它包含每个组成部分作为属性.

```js
const url = require("url");
const myUrl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(myUrl);

// node url.js
Url {
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.host.com:8080',
  port: '8080',
  hostname: 'sub.host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }
```

## 7.1. url.hash

    获取及设置URL的分段(hash)部分.
```js
const {URL} = require("url");
const myUrl = new URL("https://example.org/foo#bar");

console.log(myUrl.hash);    // #bar

myUrl.hash = "abc";
console.log(myUrl.href);
```

## 7.2. url.host

    获取及设置URL的主机部分

```js
const {URL} = require("url");
const myUrl = new URL("http://example.org:81/foo");
console.log(myUrl.host);

// example.org:81

myUrl.host = "example.com:82";
console.log(myUrl.href);    // http://example.com:82/foo
```

## 7.3. url.hostname

    获取及设置URL的主机名,url.host和url.hostname之间的区别时url.hostname不包含端口
```js
const {URL} = require("url");
const myURL = new URL("https://example.org:81/foo");
console.log(myURL.hostname);    // example.org


myURL.hostname = 'example.com:82';
console.log(myURL.href);        // https://example.com:81/foo
```

## 7.4. url.href

    获取及设置序列化的URL.
```js
const {URL} = require("url");
const myUrl = new URL("https://example.org/foo");
console.log(myUrl.href);    // https://example.org/foo


myUrl.href = "https://example.com/bar";
console.log(myUrl.href);    // https://example.com/bar
```
    获取href属性的值等同于调用 url.toString().
    

## 7.5. url.pathname

    获取及设置URL的路径部分.

```js
const {URL} = require("url");
const myURL = new URL("https://example.org/abc/xyz?123");
console.log(myURL.pathname);    // abc/xyz?123

myURL.pathname = "/abcde";
console.log(myURL.href);        // https://example.org/abcde?123
```

## 7.6. url.port

    获取及设置URL的端口(port)部分
```js
const {URL} = require('url');
const myURL = new URL("https://example.org:8888");
console.log(myURL.port);    // 8888
```