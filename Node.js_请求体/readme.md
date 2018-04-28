<!-- TOC -->

- [1. HTTP请求体解析中间件](#1-http请求体解析中间件)
    - [1.1. 请求体解析](#11-请求体解析)
    - [1.2. body-parser 模块的API](#12-body-parser-模块的api)
- [2. Node.js中间件 - Multer](#2-nodejs中间件---multer)
    - [2.1. 文件信息](#21-文件信息)

<!-- /TOC -->

# 1. HTTP请求体解析中间件

    在HTTP请求中,POST PUT PATCH三种请求方法中包含请求体,Node.js原生HTTP模块中,请求体要基于流的方式接收和解析.
    body-parser是一个请求体解析中间件,使用这个模块可以解析JSON Raw 文本 URL-encoded格式的请求体,Express框架中就是使用这个
    模块作为请求体解析中间件.

    bodyParse.json()    解析JSON格式
    bodyParser.raw()    解析二进制格式
    bodyParser.text()   解析文本格式
    bodyParser.urlencoded() 解析文本格式

## 1.1. 请求体解析

    1 原生环境中的解析
    Node.js原生HTTP模块中,是将用户请求数据封装到了用于请求对象req中,该对象是一个IncomingMessage,该对象同时也是一个可读流对象.
    在原生HTTP服务器,或不依赖第三方解析模块时,可以像下面这样接收并解析请求体:

```js
const http = require("http");

// 用Http模块创建一个Http服务器
http.createServer(function(req,res){
    if(req.method.toLowerCase() === 'post'){
        var body = '';
        req.on("data",function(chunk){
            body += chunk;
        });
    };
    req.on("end",function(){
        if(req.headers["content-type"].indexOf("application/json") !==-1){
            JSON.parse(body)
        } else if(req.headers['content-type'].indexOf('application/octet-stream')!==-1){
        // Raw 格式请求体解析
        // ……
        } else if(req.headers['content-type'].indexOf('text/plain')!==-1){
            // text 文本格式请求体解析
            // ……
        } else if(req.headers['content-type'].indexOf('application/x-www-form-urlencoded')!==-1){
            // URL-encoded 格式请求体解析
            // ……
        } else {
            // 其它格式解析
        }
    })
}).listen(3000)
```

    1.2 使用body-parser解析请求体
    body-parser模块是一个Express/Connect中间件,它使用非常简单且功能强大,可以像下面这样用这个模块解析请求体:

    Express框架默认使用 body-parser作为请求体解析中间件,创建Express项目后,可以在app.js文件中看到如下代码:
```js
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/index");
var users = require("./routes/users");

var app = express();

// 解析aplication/json
app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// 创建application/x-www-form-urlencoded解析
var urlencodedParser = bodyParser.urlencoded({extended:false})
```

    指定请求内容：

    可以对text/plain内容类型使用JSON解析
    app.use(bodyParser.json({type:'text/plain'}))


## 1.2. body-parser 模块的API

    通过cnp install body-parser命令安装模块后,可以通过以下方式获取模块引用：

    var bodyParser = require("body-parser")
    bodyParser变量是对中间件的引用,请求体解析后,解析值都会被放到req.body属性,内容为空时是一个{}空对象.

    bodyParser.json() - 解析JSON格式
    bodyPparser.json(options)

    Option是一个包含以下可选值的对象:
        inflate - 设置为true时,deflate压缩数据会被解压缩;设置为true时,deflate压缩数据会被拒绝.默认为true
        limit - 设置请求的最大数据量,默认为'100kb'
        type - 该选项用于设置为指定MIME类型的数据使用当前解析中间件。这个选项可以是一个函数或是字符串，当是字符串是会使用type-is来
        查找MIMI类型；当为函数是，中间件会通过fn(req)来获取实际值。默认为application/octet-stream。
        verify - 这个选项仅在verify(req, res, buf, encoding)时受支持


    bodyParser.text() - 解析文本格式
    
    bodyParser.text(options)



    bodyParser.urlenoded() - 解析文本格式
    返回一个处理 urlencoded 数据的中间件,这个方法默认使用UTF-8编码,且支持gzip 和 deflate 编码的数据压缩,解析后,所有的req.body中
    将会是一个键值对对象.

    option是一个包含以下可选值的对象:
        extended - 当设置为false时,会使用querystring库解析URL编码的数据;当设置为true时,会使用qs库解析URL编码的数据


# 2. Node.js中间件 - Multer

    Multer是Node.js中处理multipart/form-data数据格式(主要用在上传功能中) 的中间件.该中间件不处理 multipart/form-data数据格式以外
    的任何形式的数据.

    multipart/form-data是用来指定传输数据的特殊类型的,主要就是我们上传的非文本的内容,比如图片 或者 mp3等

## 2.1. 文件信息

    fieldname       上传文件标签在表单中的name
    originalname    文件在用户电脑上的文件名
    Encoding        该文件的编码
    mimetype        该文件的Mime type
    size            该文件的字节数
    destination     该文件要保存的文件夹
    filename        在保存的文件夹下的文件名
    path            文件上传后保存的完整路径
    buffer          完整文件的buffer

    multer可以传入一个可选参数,一般该参数为 dest 属性,规定上传文件存放的位置.如果省略该参数,上传的文件将一直保存在内存中.永远不会
    写进磁盘.

    .single(fieldname)
    该方法接收单个上传的文件 filedname为上传文件所用的标签name属性

    .array(fieldname)
    该方法接收多个文件,参数为所有的上传文件所用标签的name属性

    .fields(fields)
    该方法可以接收由fields指定的不同类型的文件,多个文件对象被保存在req.files中.