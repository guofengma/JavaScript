<!-- TOC -->

- [1. Node.js Buffer(缓冲区)](#1-nodejs-buffer缓冲区)
    - [1.1. Buffer与字符编码](#11-buffer与字符编码)
    - [1.2. 创建Buffer类](#12-创建buffer类)
- [2. Node.js Stream(流)](#2-nodejs-stream流)
    - [2.1. 从流中读取数据](#21-从流中读取数据)
    - [2.2. 写入流](#22-写入流)
    - [2.3. 管道流](#23-管道流)
    - [2.4. 链式流](#24-链式流)

<!-- /TOC -->

# 1. Node.js Buffer(缓冲区)

    JavaScript语言自身只有字符串数据类型,没有二进制数据类型.
    但在处理像TCP流或文件流时,必须使用到二进制数据.因此在Node.js中,定义了一个Buffer类,该类用来创建一个专门存放二进制
    数据的缓存区.

    在node.js中,buffer类是随着Node内核一起发布的核心库.Buffer库为Node.js带来了一种存储原始数据的方法,可以让Node.js
    处理二进制数据,每当需要在Node.js中处理I/O操作中移动的数据时,就有可能使用Buffer库.原始数据存储在Buffer类的实例中
    一个Buffer类似于一个整数数组,但它对应于V8堆内存之外的一块原始内存.

    注意:在 v6.0之前创建Buffer对象直接使用 new Buffer()构造函数来创建对象实例,但是Buffer对内存的权限操作相比很大,
    可以直接捕获一些敏感信息,所以在v6.0以后,官方文档里面建立使用Buffer.from()接口去创建Buffer对象.

## 1.1. Buffer与字符编码

    Buffer实例一般用于表示编码字符的序列,比如UTF-8,USC2 Base64或十六进制编码的数据.通过使用显式的字符编码,就可以在Buffer实例与普通的JavaScript字符串之间进行互相转换.
```js
const buf = Buffer.from('runoob','ascii');

console.log(buf.toString('hex'));
// 72756e6f6f62

console.log(buf.toString('base64'));
// // 输出 cnVub29i
```

    node.js目前支持的字符编码包括:
    ascii - 仅支持7位ASCII数据.
    utf8 - 多字节编码的Unicode字符.许多网页和其他文档格式都使用UTF-8
    base64 - Base64编码
    hex - 将每个字节编码位两个十六进制字符

## 1.2. 创建Buffer类

    Buffer提供了以下API来创建Buffer类:

    Buffer.from(array):返回一个被array的值初始化的新的Buffer实例(传入的array的元素只能是数字,不然就会自动被0覆盖)
    Buffer.from(buffer):复制传入的Buffer实例的数据,并返回一个新的Buffer实例
    

# 2. Node.js Stream(流)

    Stream是一个抽象接口,Node中有很多对象实现了这个接口.例如,对http服务器发起请求的request对象就是一个Stream,
    还有stdout(标准输出).

    Node.js中,Stream有四种流类型:
    
        Readable - 可读操作
        Writable - 可写操作
        Duplex - 可读可写操作
        Transform - 操作被写入数据,然后读出结果

    所有的Stream对象都是EventEmitter的实例.常用的事件有:

        data - 当有数据可读时触发.
        end - 没有更多的数据可读时触发.
        error - 在接收和写入过程中发生错误时触发
        finish - 所有数据已被写入到底层系统时触发

## 2.1. 从流中读取数据


    Node.js提供一组类似 UNIX(POSIX)标准的文档操作API.Node导入文件系统模块(fs)语法如下所示:
    var fs = require('fs');
```js
var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码 utf8
readerStream.setEncoding('UTF8');

// 处理流事件 ---> data,end and error
readerStream.on('data',function(chunk){
    data += chunk;
})

readerStream.on('end',function(){
    console.log(data);
})

readerStream.on('error',function(err){
    console.log(err.stack);
})
console.log('程序执行完毕');

// 程序执行完毕
// 百度:http://www.baidu.com
```

## 2.2. 写入流

    创建 main.js文件,代码如下:
```js
var fs = require('fs');

var data = '百度地址：http://www.baidu.com'

// 创建一个可以写入的流,写入到文件 output.txt中
var writerStream = fs.createWriteStream('output.txt');

// 使用UTF8编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 ---> data,end and error
writerStream.on('finish',function(){
    console.log('写入完成.');
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');

// 程序执行完毕
// 写入完成
```

## 2.3. 管道流

    管道提供了一个输出流到输入流的机制.通常我们用于从一个流中获取数据并将数据传递到另外一个流中.
    
    以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中.
```js
// 创建 input.txt 和 output.txt文件,将input.txt文件的内容传入到 output.txt文件中.

var fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt 文件内容,并将内容写入到 output.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕');

// node mian.js
// 程序执行完毕
```

## 2.4. 链式流

    链式是通过连接输出流到另外一个流并创建多个流操作链的机制.链式流一般用于管道操作.
    下面用管道和链式来压缩和解压文件:
```js
var fs = require('fs');
var zlib = require('zlib');

// 压缩 input.txt文件为 input.txt.gz
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');
```
    执行完上面的操作后,可以看到 input.txt的压缩文件 input.txt.gz.

    下面来解压该文件,创建 decompress.js文件,代码如下:
```js


```