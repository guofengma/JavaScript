<!-- TOC -->

- [1. Express](#1-express)
    - [1.1. 安装Express](#11-安装express)
    - [1.2. 第一个Express框架实例](#12-第一个express框架实例)
    - [1.3. 请求和响应](#13-请求和响应)
    - [1.4. 路由](#14-路由)
    - [1.5. 静态文件](#15-静态文件)
    - [1.6. GET方法](#16-get方法)
    - [1.7. POST方法](#17-post方法)
    - [1.8. 表单编码类型](#18-表单编码类型)
    - [1.9. 文件上传](#19-文件上传)
    - [1.10. Cookie管理](#110-cookie管理)

<!-- /TOC -->

# 1. Express

    Express是一个简洁而灵活的node.js Web应用框架,提供了一系列强大特性帮组你创建各种Web应用,和丰富的HTTP工具.
    使用Express可以快速地搭建一个完整功能的网站.

    Express框架核心特性:
        可以设置中间件来响应HTTP请求
        定义了路由表用于执行不同的HTTP请求动作
        可以通过向模板传递参数来动态渲染HTML页面

## 1.1. 安装Express

    $ cnpm install express --save

    以上命令会将Express框架安装在当前目录的node_modules目录中,node_modules目录下会自动创建express目录.以下几个重要的模块是需要
    与express框架一起安装的:
    
        body-parser - node.js中间件,用于处理JSON,Raw,Text 和 URL编码的数据
        cookie-parser - 这就是一个解析Cookie的工具.通过req.cookies可以取到传过来的cookie,并把它转成对象.
        multer - node.js中间件,用于处理enctype="multipart/form-data"(设置表单的MIME编码)的表单数据

    $ cnpm install body-parser --save
    $ cnpm install cookie-parser --save
    $ cnpm install multer --save


    安装完成后,可以查看express使用的版本号:
    $ cnpm list express

## 1.2. 第一个Express框架实例

```js
// main.js 文件

var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.end("Hello World!");
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例,访问地址为http://%:%s",host,port);
})
```

## 1.3. 请求和响应

    Express应用使用回调函数的参数:request 和 response 对象来处理请求和响应的数据.

```js
app.get("/",function(request,response){
    // 
})
```
    Request对象 - request对象表示HTTP请求,包含了请求查询字符串,参数,内容,HTTP头部等属性.

        req.app : 当callback为外部文件时,用req.app访问express的实例
        req.baseUrl : 获取路由当前安装的URL路径
        req.body/req.cookies : 获得[请求主体]/Cookies
        req.fresh/req.state :判断请求是否还[新鲜]
        req.hostname/req.ip :获取主机名和ip地址
        req.originalUrl : 获取原始请求Url
        req.params : 获取路由的parameters
        req.path : 获取请求路径
        req.protocol : 获取协议类型
        req.query : 获取URL的查询参数串
        req.route : 获取当前匹配的路由
        req.subdomains : 获取子域名
        req.accepts() 检查可接受的请求的文档类型
        req.acceptsCharsets/req.acceptsEncodings/req.acceptsLanguages:返回指定字符集的第一个可接受字符编码
        req.get() 获取指定的HTTP请求头
        req.is() 判断请求头Content-Type的MIME类型


    Response对象 - response对象表示HTTP响应,即在接受到请求时向客户端发送的HTTP响应数据.常见属性有:

        res.app : 同req.app一样
        res.append() : 追加指定HTTP头
        res.set()  在res.append()后将重置之前设置的头
        res.cookie(name,value) 设置Cookie
        option: domain/expires/httpOnly/maxAge/path/secure/signed
        res.clearCookie() 清除Cookie
        res.download() 传送指定路径的文件
        res.get()   返回指定的HTTP头
        res.json() 传送JSON响应
        res.jsonp() 传送JSONP响应
        res.location() 只设置响应的Location HTTP头,不设置状态码或者close.response
        res.redirect() 设置响应的Location HTTP头,并且设置状态码302
        res.render(view) 渲染一个view,同时向callback传递渲染后的字符串,如果在渲染过程中有错误发成next(err)将会被自动调用.
        callback将会被传入一个可能发生的错误以及渲染后的页面,这样就不会自动输出了.
        res.send() 传送HTTP响应
        res.sendFile(): 传送指定路径的文件
        res.set() 设置HTTP头,传入Object可以一次设置多个头
        res.status() 设置 HTTP状态码
        res.type() 设置Content--Tyoe的MIME类型

## 1.4. 路由

    路由决定了由谁(指定脚本)去响应客户端请求
    在HTTP请求中,我们可以通过路由提取出请求的URL以及GET/POST参数
    
```js
var express = require("express");
var app = express();

// 主页输出Hello World
app.get("/",function(req,res){
    console.log("主页Get请求");
    res.send("Hello GET");
})

// POST请求
app.post("/",function(req,res){
    console.log("主页POST请求");
    res.send("Hello Post");
})

// /del_user页面响应
app.get('/del_user',function(req,res){
    console.log("/del_user响应DELETE请求");
    res.send("删除页面");
})

// /list_user页面Get请求
app.get('/list-user',function(req,res){
    console.log("/list_user GET请求");
    res.send("用户列表页面");
})

// 对页面 abcd abxcd ab123cd 等响应GET请求
app.get("/ab*cd",function(req,res){
    console.log("/ab*cdGET请求");
    res.send("正则匹配");
})

var server = app.listen(9999,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例访问地址为http://%s:%s",host,port);
})
```

## 1.5. 静态文件

    Express提供了内置的中间件 express.static来设置静态文件,如图片 CSS JavaScript等.可以使用 express.static中间件来设置静态文件
    路径.如果你将图片 CSS JavaScript文件放在public目录下,可以这么写:
    
    app.use(express.static("public"));

    可以在 public 目录下 创建一个 images 目录,再添加一张照片,以gd为例
```js
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.send("Hello World");
})

var server = app.listen(9000,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例,访问地址为 http://%s:%s",host,port);
})

$ node demo.js
// 然后在浏览器中打开以下地址 http://0.0.0.9000/images/gd.jpg
```

## 1.6. GET方法

    以下实例演示了在表单中通过GET方法提交两个参数,我们可以使用 server.js文件内的process_get路由器来处理输入:

```html
<!-- index.html文件 -->
<form action="http://127.0.0.1:8081/process_get" method="GET">
First Name: <input type="text" name="first_name">  <br>
 
Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>

<script>
    var express = require("express");
    var app = express();

    app.use(express.static("public"));
    app.get("/index.html",function(req,res){
        res.sendFile(__dirname + '/' + index.html);
    })

    app.get("/process_get",function(req,res){
        // 输出JSON格式
        var response = {
            "first_name":req.query.first_name,
            "last_name":req.query.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));
    })

    var server = app.listen(8081,function(){
        var host = server.address().address;
        var port = server.address().port;

        console.log("应用实例,访问地址为 http://%s:%s",host,port)
    })
</script>
```

## 1.7. POST方法

    以下实例演示了在表单中通过POST方法提交两个参数,同样可以使用server.js文件内的process_post路由器来处理输入:

```html
<!-- index.html文件 -->
<form action="http://127.0.0.1:8081/process_post" method="POST">
    First Name: <input type="text" name="first_name"></br>
    Last Name: <input type="text" name="last_name">
    <input type="submit" value="submit">
</form>

<script>
// server.js
    var express = require("express");
    var app = express();
    var bodyParser = require("body-parser");

    // 创建application/x-www-form-urlencoded编码解析
    var urlencodedParser = bodyParser.urlencoded({extended:false})

    app.use(express.static("public"));

    app.get("/index.html",function(req,res){
        res.sendFile(__dirname + '/' + 'index.html');
    })

    app.post("/process_post",urlencodedParser,function(req,res){
        // 数据JSON格式
        var response = {
            "first_name":req.body.first_name,
            "last_name":req.body.last_name
        }
        console.log(response);
        res.end(JSON.stringify(response));
    })

    var server = app.listen(8081,function(){
        var host = server.address().address
        var port = server.address().port
        console.log("应用实例访问地址为 http://%s:%s",host,port);
    })
</script>
```

## 1.8. 表单编码类型

    在Form元素的语法中,EncType表明提交数据的格式,用Enctype属性指定将数据回发到服务器时浏览器使用的编码类型
    application/x-www-form-urlencoded:窗体数据被编码为名称/值对.这是标准的编码格式. multipart/form-data:窗体数据被编码为
    一条消息,页上的每个控件对应消息中的一个部分. text/plain:窗体数据以纯文本形式进行编码,其中不含任何控件或格式字符.


    form的enctype属性为编码方式,常用有两种:application/x-www-form-urlencoded和 multipart/form-data,默认为application/x
    -www-form-urlencoded.当action为get时,浏览器用 x-www-form-urlencoded的编码方法把form数据换成一个字符串
    (name1=value1&name2=value2...),然后把这个字符串append到url的后面,用?分隔,加载这个新的url.

    当action为Post的时候,浏览器把form数据封装到Http body中,然后发送到server.如果没有type=file的控件,用默认的
    application/x-www-form-urlencoded就可以了.但是如果有type=file的话,就要用到 multipart/form-data了.浏览器会把整个表单
    以控件为单位分隔,并为每个部分加上Content-Disposition(form-data或者file),Content-type(默认为text/plain),name(控件为name)
    等信息,并加上分隔符(boundary).


## 1.9. 文件上传

    以下实例用于上传文件的表单,使用POST方法,表单enctype属性设置为multipart/form-data.

```js
var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:"/tmp/"}).array("image"));

app.get("/index.html",function(req,res){
    res.sendFile(__dirname + '/' + "index.html");
})

app.post("/file_upload",function(req,res){
    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + '/' + req.files[0].originalname;

    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                response = {
                    message:"File uploaded successfully",
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例访问地址为http://%s:%s",host,port)
})
```

## 1.10. Cookie管理

    我们可以使用中间件向Node.js服务器发送cookie信息,以下实例输出了客户端发送的cookie信息:

```js
var express = require("express");
var cookieParser = require("cookie-parser");
var util = require('util');

var app = express();
app.use(cookieParser());

app.get("/",function(req,res){
    console.log("cookies:" + util.inspect(req.cookies));
})
app.listen(3000)
```