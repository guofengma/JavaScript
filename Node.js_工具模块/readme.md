<!-- TOC -->

- [1. Node.js工具模块](#1-nodejs工具模块)
- [2. OS模块](#2-os模块)
        - [2.0.1. 方法和描述](#201-方法和描述)
- [3. Node.js Path模块](#3-nodejs-path模块)
    - [3.1. path.join()](#31-pathjoin)
    - [3.2. path.resolve](#32-pathresolve)
    - [3.3. path.parse](#33-pathparse)
- [4. Node.js url](#4-nodejs-url)
    - [4.1. url.hash](#41-urlhash)
    - [4.2. url.host](#42-urlhost)
    - [4.3. url.hostname](#43-urlhostname)
    - [4.4. url.href](#44-urlhref)
    - [4.5. url.pathname](#45-urlpathname)
    - [4.6. url.port](#46-urlport)
    - [4.7. url.protocol](#47-urlprotocol)
    - [4.8. url.search](#48-urlsearch)
    - [4.9. url.username](#49-urlusername)
    - [4.10. url.parse](#410-urlparse)

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

    var path = require('path');
    
## 3.1. path.join()

    path.join()方法用于连接路径.该方法的主要用途在于,会正确使用当前系统的路径分隔符,Unix系统是'/',Windows系统是'\'
```js
var path = require("path");
console.log( path.join(__dirname,"foo") );  // C:\Users\11295\Desktop\JavaScript\Node.js_工具模块\foo
```

## 3.2. path.resolve

    path.resove方法用于将相对路径转化为绝对路径.
    它可以接受多个参数,依次表示所要进入的路径,直到将最后一个参数转为绝对路径.

```js
var path = require("path");
console.log( path.join(__dirname,"foo") );  // C:\Users\11295\Desktop\JavaScript\Node.js_工具模块\foo
console.log( path.resolve("/foo/bar",'./baz') );    // C:\foo\bar\baz
```

## 3.3. path.parse

    path.parse()方法可以返回路径各部分的信息.
```js
var path = require("path");
var myFilePath = "/someDir/someFile.json";

console.log( path.parse(myFilePath).base ); // someFile.json
console.log( path.parse(myFilePath).name ); // someFile
console.log( path.parse(myFilePath).ext );  // .json
```

# 4. Node.js url

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

## 4.1. url.hash

    获取及设置URL的分段(hash)部分.
```js
const {URL} = require("url");
const myUrl = new URL("https://example.org/foo#bar");

console.log(myUrl.hash);    // #bar

myUrl.hash = "abc";
console.log(myUrl.href);
```

## 4.2. url.host

    获取及设置URL的主机部分

```js
const {URL} = require("url");
const myUrl = new URL("http://example.org:81/foo");
console.log(myUrl.host);

// example.org:81

myUrl.host = "example.com:82";
console.log(myUrl.href);    // http://example.com:82/foo
```

## 4.3. url.hostname

    获取及设置URL的主机名,url.host和url.hostname之间的区别时url.hostname不包含端口
```js
const {URL} = require("url");
const myURL = new URL("https://example.org:81/foo");
console.log(myURL.hostname);    // example.org


myURL.hostname = 'example.com:82';
console.log(myURL.href);        // https://example.com:81/foo
```

## 4.4. url.href

    获取及设置序列化的URL.
```js
const {URL} = require("url");
const myUrl = new URL("https://example.org/foo");
console.log(myUrl.href);    // https://example.org/foo


myUrl.href = "https://example.com/bar";
console.log(myUrl.href);    // https://example.com/bar
```
    获取href属性的值等同于调用 url.toString().
    

## 4.5. url.pathname

    获取及设置URL的路径部分.

```js
const {URL} = require("url");
const myURL = new URL("https://example.org/abc/xyz?123");
console.log(myURL.pathname);    // abc/xyz?123

myURL.pathname = "/abcde";
console.log(myURL.href);        // https://example.org/abcde?123
```

## 4.6. url.port

    获取及设置URL的端口(port)部分
```js
const {URL} = require('url');
const myURL = new URL("https://example.org:8888");
console.log(myURL.port);    // 8888


// 默认端口将字符串转换为空字符(https协议默认端口是443)
myURL.port = 443;
console.log(myURL.port);    // 空字符串
console.log(myURL.href);    // https://example.org/


// 完全无效的端口字符串将被忽略
myURL.port = "abcd";
console.log(myURL.href);


// 开头的数字会被当作端口
myURL.port = "123abc";
console.log(myURL.href);        // https://example.org:123/

myURL.port = "abcd123";
console.log(myURL.href);        // https://example.org:123/
```

## 4.7. url.protocol

    获取及设置url的协议(protocol)部分
```js
const {URL} = require("url");
const myURL = new URL("https:8080//www.baidu.com");
console.log(myURL.protocol);    // https:

myURL.protocol = 'http';
console.log(myURL.href);        // http://0.0.31.144//www.baidu.com
```

## 4.8. url.search

    获取及设置URL的序列化查询部分. (?后的部分)
```js
const {URL} = require("url");
const myURL = new URL("http://www.example.org/abc?123");
console.log(myURL.search);  // ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);    // https://www.baidu.com/abc?abc=xyz
```

## 4.9. url.username

    获取及设置URL的用户名(username)部分.
```js
const {URL} = require('url');
const myURL = new URL("https://abc:xyz@example.com");
console.log(myURL.username);    // abc
```

## 4.10. url.parse

```js
var url = require("url");
console.log(url.parse("http://www.baidu.com"));

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/',
//     path: '/',
//     href: 'http://www.baidu.com/' }
```
    