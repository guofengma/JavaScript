<!-- TOC -->

- [1. 文件系统](#1-文件系统)
    - [1.1. 异步和同步](#11-异步和同步)
    - [1.2. 打开文件](#12-打开文件)

<!-- /TOC -->

# 1. 文件系统

    Node.js提供一组类似 UNIX(POSIX)标准的文件操作API.Node导入文件系统模块(fs)语法如下所示:
    
```js
var fs = require("fs");
```

## 1.1. 异步和同步

    Node.js文件系统(fs模块)模块种的方法均有异步和同步版本,例如读取文件内容的函数有异步的fs.readFile()和同步的fs.readFileSync().
    异步的方法函数最后一个参数为回调函数,回调函数的第一个参数包含了错误信息(error).
    
    建议使用异步方法,比起同步,异步方法性能更高,速度更快,而且没有阻塞.

```js
var fs = require("fs");

// 异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("异步读取:" + data.toString() );
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取:' + data.toString() );

console.log("程序执行完毕");


$ node index.js
// 同步读取: 百度官网：http://www.baidu.com
// 文件读取实例

// 程序执行完毕
// 异步读取：百度官网 http://www.baidu.com
// 文件读取实例
```

## 1.2. 打开文件

    以下为在异步模式下打开文件的语法格式:
```js
fs.open(path,flags[,mode],callback);
```
    path: 文件路径
    flags： 文件打开的行为
    mode: 设置文件模式(权限),文件创建默认权限为0666(可读,可写)
    callback: 回调函数,带有两个参数如 callback(err,fd)
    

    flags参数可以是以下值:
        
        r               以读取模式打开文件.如果文件不存在抛出异常
        r+              以读写模式打开文件,如果文件不存在抛出异常
        rs              以同步的方式读取文件
        rs+             以同步的方式读取和写入文件
        w               以写入模式打开文件,如果文件不存在则创建
        wx              类似'w',但是如果文件路径存在,则文件写入失败
        w+              以读写模式打开文件,如果文件不存在则创建
        wx+             类似'w+',但是如果文件路径存在,则文件读写失败
        a               以追加模式打开文件,如果文件不存在则创建
        ax              类似'a',但是如果文件路径存在,则文件追加失败
        a+              以读取追加模式打开文件,如果文件不存在则创建
        ax+             类似'a+',但是如果文件路径存在,则文件读取追加失败

```js
var fs = require('fs');

// 异步打开文件
console.log('准备打开文件');

```