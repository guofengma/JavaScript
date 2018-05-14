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
    - [4.11. Node.js zlib压缩](#411-nodejs-zlib压缩)
- [5. Node.js stream(流)](#5-nodejs-stream流)
    - [5.1. 从流中读取数据](#51-从流中读取数据)
    - [5.2. 写入流](#52-写入流)
    - [5.3. 管道流](#53-管道流)
    - [5.4. 可读流](#54-可读流)

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
    
## 4.11. Node.js zlib压缩

    zlib模块提供通过Gzip 和 Deflate/Inflate实现的压缩功能

    const zlib = require("zlib");

    压缩或者解压数据流通过zlib流将原数据流传输到目标流中来完成.


    链式流:链式是通过连接输出流到另外一个流并创建多个流操作链的机制.链式流一般用于管道操作.
```js
var fs = require("fs");
var zlib = require("zlib");

// 压缩input.txt 文件为 input.txt.gz
fs.createReadStream("input.txt")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("input.txt.gz"));

console.log("文件压缩完成");
```

    解压上述文件
```js
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt.zg")
.pipe(zlib.createGunzip())
.pipe(zlib.createWriteStream("input.txt"));

console.log("文件解压完成");
```

    压缩或者解压数据流通过 zlib流将源数据流传输到目标流中来完成.
```js
const gzip = zlib.createGzip();
const fs = require("fs");
const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("input.txt.gz");

input.pipe(gzip).pipe(output);
```

    zlib.Gunzip
    解压缩gzip流

    
# 5. Node.js stream(流)

    流在Node.js中是处理流数据的抽象接口.stream模块提供了基础的API.使用这些API可以很容易地来构建实现流接口的对象.
    流可以是 可读的 可写的 或是可读写的.所有的流都是 EventEmitter 的实例.

    stream模块可以通过以下方式引入:
    
        const stream = require("stream");

    在Node.js中有四种基本的流类型:
        Readable - 可读的流
        Writable - 可写的流
        Duplex   - 可读写的流
        Transform - 在读写过程中可以修改和变换数据的Duplex流

    所有的Stream对象都是EventEmitter的实例,常用的事件有:
    data - 当有数据可读时触发
    end  - 没有更多的数据可读时触发
    error - 在接收和写入过程中发生错误时触发
    finish - 所有数据已被写入到底层系统时触发

    
    error事件
    error事件在写入数据出错或者使用管道出错时触发.事件发生时,回调函数仅会接收到一个Error参数.(error事件发生时,流不会关闭);
    
## 5.1. 从流中读取数据

```js
const fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");
readerStream.on("data",function(chunk){
    data += chunk;
});

readerStream.on("end",function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
})

console.log("程序执行完毕");
```

## 5.2. 写入流

```js
var fs = require("fs");
var data = "秋风清,秋月明.落叶聚还散,寒鸦栖复惊!相思相见知何日,此时此夜难为情!入我相思门,知我相思苦"

// 创建可写入的流
const writerStream = fs.createWriteStream("output.txt");

// 使用UTF8编码写入数据
writerStream.write(data,"UTF8");
// 标记文件末尾
writerStream.end();

writerStream.on("finish",function(){
    console.log("写入完成");
})

writerStream.on("error",function(err){
    console.log(err.stack);
})
console.log("程序执行完毕");
```

## 5.3. 管道流

    管道提供了一个输出流到输入流的机制.通常我们用于从一个流中获取数据并将数据传递到另外一个流中.

    下面实现通过读取一个文件内容并将内容写入到另外一个文件中:
    
    
    在可读流上调用stream.pipe()方法,并在目标流向中添加当前可写流时,将会在可写流上触发'pipe'事件.
```js
const fs = require("fs");

// 创建一个可读流
const readerStream = fs.createReadStream("output.txt");

// 创建一个可写流
const writerStream = fs.createWriteStream("input.txt");

readerStream.pipe(writerStream);

console.log("程序执行完毕");
```

## 5.4. 可读流

    可读流是对提供数据的 源头(source)的抽象. 可读流的例子包括:
        
        > HTTP responses
        > HTTP requests
        > fs read streams
        > zlib streams
        > crypto streams
        > child process stdout and stderr
        
    所有的 Readable都实现了stream.Readable类定义的接口.



    data 事件:
    如果调用readable.setEncoding()方法明确为流指定了默认编码,回调函数将接收到一个字符串,否则接收到的数据将是一个Buffer实例.

    end 事件:
    end 事件将在流中再没有数据可供消费时触发.
    注意:end事件只有在数据被完全消费后才会触发.可以在数据被完全消费后,通过将流转换到flowing模式,或反复调用 stream.read()方法
    来实现这一点.

    error事件:
    error 事件可以在任何时候在可读流实现上触发.通常,这会在底层系统内部出错从而不能产生数据.或当流的实现试图传递错误数据时发生.