<!-- TOC -->

- [1. HTTP请求体解析中间件](#1-http请求体解析中间件)
    - [1.1. 请求体解析](#11-请求体解析)
    - [1.2. body-parser 模块的API](#12-body-parser-模块的api)
- [2. Multer中间件](#2-multer中间件)
    - [2.1. 用法](#21-用法)
    - [2.2. GET方法](#22-get方法)
    - [2.3. POST方法](#23-post方法)
    - [2.4. form表单的 enctype属性](#24-form表单的-enctype属性)

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


# 2. Multer中间件

    Multer是一个用于处理的node.js中间件 multipart/form-data,主要用于上传文件.它写在busbody顶部以获得最大效率.
    
    注意: Multer不会处理任何不是multipart(multipart/form-data)的表单.

    $ npm install --save multer


## 2.1. 用法

    Multer增加了一个body对象和一个file或files对象的request对象.该body对象包含表单文本字段的值,file或者files对象包含通过表单
    上传的文件.

    文件信息：

    fieldname       在表单中指定的字段名称
    originalname    用于计算机上文件的名称
    encoding        编码文件的类型
    mimetype        文件的MIME类型
    size            文件大小(以字节为单位)
    destination     该文件已被保存到的文件夹
    filename        文件中的文件名称destination
    path            上传文件的完整路径
    buffer          __Bbuffer整个文件


    multer(opts)
    Multer接收一个选项对象,其中最基本的是dest属性,它告诉Multer在哪里上传文件.如果省略选项对象,这些文件将保存在内存中,
    永远不会写入磁盘.


    下面的实例创建一个用于上传文件的表单,使用POST方法,表单enctype属性设置为 multipart/form-data:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文件上传</title>
</head>
<body>
    <h3>上传文件</h3>
    <form action="/file_upload" method="post" enctype="multipart/form-data">
        <input type="file" name="image" size="50">
        <input type="submit" value="上传文件">
    </form>
</body>
</html>
```
```js
// main.js

var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array("image"));

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post("/file_upload",(req,res) => {
    console.log(req.files[0]);
    var des_file = __dirname + '/' + req.files[0].originalname;
    fs.writeFile(des_file,data,function(err){
        if(err){
            console.log(err);
        }else{
            response = {
                message:"File uploaded successful",
                filename:req.files[0].originalname
            }
        }
        console.log(response);
        res.end(JSON.stringify(response));
    })
})

app.listen(8000,'localhost');
```

## 2.2. GET方法

    以下实例使用express服务器传输内容
```html
<!-- index.html -->

<form action="http://127.0.0.1:3000/process_get" method="GET">
    First Name: <input type="text" name="first_name">
    Last Name: <input type="text" name="last_name">
    <input type="submit" value="Submit">
</form>
```
```js
// server.js
var express = require("express");
var app =  express();

app.use(express.static("public"));

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/process_get',(req,res) => {
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    }
    console.log(response);
    res.write( JSON.stringify(response) );
})

app.listen(3000);
```

## 2.3. POST方法

```html
<!-- index.html -->
<form action="http://127.0.0.1:2000/process_post" method="POST">
    <p>first name:<input type="text" name="first_name"></p>
    <p>last name:<input type="text" name="last_name"></p>
    <p><input type="submit" value="submit"></p>
</form>
```
```js
<!-- server.js -->

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + '/' + index.html);
})

app.post("/process_post",urlencodedParser,(req,res) => {
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end( JSON.stringify(response) );
})
app.listen(2000);
```
    
## 2.4. form表单的 enctype属性

    enctype属性规定在发送到服务器之前应该如何对表单数据进行编码.
    默认地,表单数据会编码为 'application/x-www-form-urlencoded'.就是说,在发送到服务器之前,所有字符都会进行编码
    (空格转换为 '+' 号,特殊符号转换为ASCII HEX值).


    值
    application/x-www-form-urlencoded               在发送前编码所有字符
    multipart/form-data                             不对字符编码,在使用包含文件上传控件的表单时,必须使用该值.
    text/plain                                      空格转换为 '+' 加号,但不对特殊字符编码


