<!-- TOC -->

- [1. Express](#1-express)
    - [1.1. 安装Express](#11-安装express)
    - [1.2. 第一个Express框架实例](#12-第一个express框架实例)
    - [1.3. 请求和响应](#13-请求和响应)
    - [1.4. 路由](#14-路由)
    - [1.5. 静态文件](#15-静态文件)
- [2. 运行原理](#2-运行原理)
    - [2.1. 中间件](#21-中间件)
    - [2.2. use方法](#22-use方法)
    - [2.3. Content-Type](#23-content-type)
- [3. Express的方法](#3-express的方法)
    - [3.1. response对象](#31-response对象)
    - [3.2. request对象](#32-request对象)
    - [3.3. GET方法](#33-get方法)
    - [3.4. POST方法](#34-post方法)
    - [3.5. 表单编码类型](#35-表单编码类型)
    - [3.6. 文件上传](#36-文件上传)
    - [3.7. Cookie管理](#37-cookie管理)

<!-- /TOC -->

# 1. Express

    Express是目前最流行的基于Node.js的Web开发框架,可以快速地搭建一个完整功能的网站.
    
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

    启动脚本 index.js 的 app.get方法,用于指定不同的访问路径所对应的回调函数,叫做'路由'.
```js
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hello World!");
})

app.get("/customer",function(req,res){
    res.send("customer page");
})

app.get("/admin",function(req,res){
    res.send("admin page");
})

app.listen(3000);
```

    这时,最好就把路由放到一个单独的文件中,比如新建一个 routes子目录.
```js
// routes/index.js

module.exports = function(app){
    app.get("/",function(req,res){
        res.send("Hello World!");
    });
    app.get("/customer",function(req,res){
        res.send("customer page");
    });
    app.get("/admin",function(req,res){
        res.send("admin page");
    })
}

// index.js
然后,原来的index.js就变成下面这样.
var express = require("express");
var app = express();
var routes = require("./routes")(app);
app.listen(3000);
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

# 2. 运行原理

    Express框架建立在node.js内置的http模块上.http模块生成服务器的原始代码如下：
```js
var http = require("http");
var app = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello World");
});

app.listen(3000,"localhost");
```

    上面代码的关键是 http 模块的 createServer方法,表示生成一个HTTP服务器实例.该方法接受一个回调函数,该回调函数的参数,分
    别为代表HTTP请求和HTTP回应的request对象和response对象。


    Express框架的核心是对 http模块的再包装.上面的代码用Express改写如下：
```js
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hello World!");
})

app.listen(3000);
```
    原来是用http.createServer方法新建一个app实例,现在则是用Express的构造方法,生成一个Epress实例。两者的回调函数都是相
    同的。Express框架等于在http模块之上,加了一个中间层。
    
## 2.1. 中间件

    中间件(middleware)就是处理HTTP请求的函数,它最大的特点就是,一个中间件处理完,再传递给下一个中间件.APP实例在运行过程中,
    会调用一系列的中间件.
    
    每个中间件可以从APP实例,接受三个参数,依次为request对象(代表HTTP请求),response对象(代表 HTTP回应),next回调函数(下一
    个中间件).每个中间件都可以对HTTP请求(request对象)进行加工,并且决定是否调用next方法,将request对象再传给下一个中间件.

## 2.2. use方法

    use是express注册中间件的方法,它返回一个函数.
```js
var express = require("express");
var http = require("http");
var app = express();

app.use(function(request,response,next){
    console.log("In comes a " + request.method + 'to' + request.url);
    next();
});

app.use(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello World!");
});
http.createServer(app).listen(1337);
```
    use方法内部可以对访问路径进行判断,据此就能实现简单的路由,根据不同的请求地址,返回不同的网页内容.
```js
var express = require("express");
var http = require("http");
var app = express();

app.use(function(request,response,next){
    if(request.url == "/"){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Welcome to the homepage!");
    }else{
        next();
    }
})
app.use(function(request,response,next){
    if(request,url == "/about"){
        response.writeHead(200,{"Content-Type":"text/plain"});
    }else{
        next();
    }
})

app.use(function(request,response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.end("404 error");
})

http.createServer(app).listen(1337);
```
    除了在回调函数内部判断请求的网址,use方法也允许将请求网址写在第一个参数.这代表,只有请求路径匹配这个参数,后面的中间件才会
    生效.
```js
app.use("/path",someMiddleware);
```

## 2.3. Content-Type

    Content-Type,从名字上可以理解为内容类型.专业叫'媒体类型'.即MediaType,也叫MIME类型.主要是用来指明报文主体部分内容属于
    何种类型.比如html json 或xml等等.
    但是content-type一般只存在于Post方法中,因为Get方法是不含'body'的.它的请求参数都会被编码到url后面,所以在Get方法中加
    content-type是无用的.
    
    常见的类型包括以下几种:
        text/html                           HTML格式
        text/plain                          纯文本格式
        image/gif                           gif图片格式
        image/png                           png图片格式
        application/xml                     xml数据格式
        application/json                    json数据格式
        application/x-www-form-urlencoded   表单提交中默认的encType
    
# 3. Express的方法    

    all方法和HTTP动词方法
```js
app.get("/",function(request,response){
    response.end("welcome to the home!");
})
app.get("/about",function(request,response){
    response.end("welcome to the about page");
})
```
    除了get方法以外,Express还提供post put delete方法,即HTTP动词都是Express的方法.

    请求路径,除了绝对匹配以外,Express允许模式匹配.
```js
app.get("/helo/:who",function(req,res){
    res.end("Hello," + req.params.who + '.');
})
```

## 3.1. response对象

    response对象表示HTTP响应,即在接收到请求时向客户端发送的HTTP响应数据,常见方法有:
    
    1. response.redirect方法
    response.redirect方法允许网址的重定向.
```js
response.redirect("/hello/anime");
response.redirect("http://www.example.com");
response.redirect(301,"http://www.example.com");
```

    2. response.sendFile方法
    传送指定路径的文件 - 会自动根据文件的extension设定Content-Type.
```js
response.sendFile("/path/to/anime.mp4");
```

    3. response.render方法
    response.render方法用于渲染网页模板
```js
app.get("/",function(resquest,response){
    response.render("index",{message:"Hello World!"});
})
```
    上面代码使用render方法,将message变量传入index模板,渲染HTML网页.
    
    4. res.status(): 设置HTTP状态码

    5. res.type()   设置Content-Type的MIME类型.
    
    res.end()和res.send()区别:
    如果服务端有数据返回到客户端,这时必须用res.send(),如果服务器端没有数据返回到客户端,那么就可以用res.end()

    
## 3.2. request对象

    1. request.ip
    request.ip属性用于获得HTTP请求的IP地址.

    2. request.files
    request.files用于获取上传的文件
    
    3. req.body/req.cookies:获得[请求主体]/Cookies
    
    4. req.path 获取请求路径
    
    5. req.route    获取当前匹配的路由

    5. req.query    获取URL的查询参数串

    
## 3.3. GET方法

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

## 3.4. POST方法

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

## 3.5. 表单编码类型

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


## 3.6. 文件上传

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

## 3.7. Cookie管理

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