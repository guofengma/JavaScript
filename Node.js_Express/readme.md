<!-- TOC -->

- [1. Express](#1-express)
    - [1.1. 安装Express](#11-安装express)
    - [1.2. 第一个Express框架实例](#12-第一个express框架实例)
    - [1.3. 请求和响应](#13-请求和响应)
    - [1.4. 路由](#14-路由)

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
    