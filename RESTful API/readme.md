<!-- TOC -->

- [1. RESTful API](#1-restful-api)
    - [1.1. HTTP方法](#11-http方法)
    - [1.2. RESTful Web Services](#12-restful-web-services)
    - [1.3. 统一资源接口](#13-统一资源接口)
    - [1.4. 资源的表述](#14-资源的表述)
    - [1.5. 资源的链接](#15-资源的链接)
    - [1.6. 状态的转移](#16-状态的转移)
    - [1.7. 实例](#17-实例)
        - [1.7.1. 添加用户](#171-添加用户)
        - [1.7.2. 显示用户详情](#172-显示用户详情)
        - [1.7.3. 删除用户](#173-删除用户)

<!-- /TOC -->

# 1. RESTful API

    REST即表述性状传递,表述性状态转移是一组架构约束条件和原则,满足这些约束条件和原则的应用程序或设计就是RESTful.需要注意的是,REST是
    设计风格而不是标准.REST通常基于使用HTTP,URL 和 XML 以及HTML这些现有的广泛流行的协议和标准.REST通常使用JSON数据格式.

## 1.1. HTTP方法

    以下为REST基本架构的四个方法:
        GET - 用于获取数据
        PUT - 用于更新或添加数据
        DELETE - 用于删除数据
        POST - 用于添加数据

## 1.2. RESTful Web Services

    Web service是一个平台独立的,低耦合的,自包含的,基于可编程的web的应用程序,可使用开放的XML标准来描述,发布,协调和配置这些应用程序.
    用于开发分布式的操作的应用程序.基于REST架构的Web Services即是RESTful.
    
    由于轻量级以及通过HTTP直接传输数据的特性,Web服务的RESTful方法已经成为最常见的替代方法.可以使用各种语言实现客户端.
    RESTful Web服务通常可以通过自动客户端或代表用户的应用程序访问.但是,这种服务的简便性让用户能够与之直接交互,使用它们的Web浏览器
    构建一个GET URL 并读取返回的内容.

    REST本身并没有创造新的技术,组件或服务,而隐藏在RESTful背后的理念就是使用web的现有特征和能力,更好地使用现有Web标准中的一些准则和
    约束.虽然REST本身受Web技术的影响很深,但是理论上REST架构风格并不是绑定在HTTP上,只不过目前HTTP是唯一于REST相关的实例.所以我们
    这里描述的REST也是通过 HTTP 实现的REST.

    理解RESTful:
        资源与URI
        统一资源接口
        资源的表述
        资源的链接
        状态的转移

    资源与 URI
    REST全称是表述性状态转移,实际是资源的状态性转移.要让一个资源可以被识别,需要有一个标识,在Web中这个唯一标识就是URI(Uniform 
    Resource Identifier) URI既可以看成是资源的地址,也可以看成是资源的名称.如果某些信息没有使用URI来表示,那它就不能算是一个资源,只
    能算是资源的一些信息而已.URI的设计应该遵循可寻址性原则,具有自描述性,需要在形式上给人以直觉上的关联.

    URI设计上的一些技巧:
        1. 使用_ 或 - 让URI可读性更好
        2. 使用/来表示资源的层级关系
        3. 使用?来过滤资源
        4. 使用,或l可以用来表示同级资源关系

## 1.3. 统一资源接口

    RESTful架构应该遵循统一接口原则,统一接口包含了一组受限的预定义的操作,不论什么样的资源,都是通过使用相同的接口进行资源的访问.
    接口应该使用标准的HTTP方法 如 GET PUT 和 POST,并遵循这些方法的语义.


    统一资源接口要求使用标准的HTTP方法对资源进行操作,所以URI只应该来表示资源的名称,而不应该包括资源的操作.

## 1.4. 资源的表述

    客户端获取的只是资源的表述而已.资源在外界的具体呈现,可以有多种表述形式,在客户端和服务端之间传送的也是资源的表述,而不是资源本身.
    资源的表述包括数据和描述数据的元数据,例如,HTTP头 'Content-Type' 就是这样一个元数据属性.

    客户端如何知道服务端提供哪种表述形式呢?
    可以通过HTTP内容协商,客户端可以通过Accept头请求一种特定格式的表述,服务端则通过Content-Type告诉客户端资源的表述形式.

## 1.5. 资源的链接

    我们知道REST是使用标准的HTTP方法来操作资源的,但仅仅因此就理解成带GURD的Web数据库架构就太过于简单了. 这种反模式忽略了一个核心
    概念:'超媒体即应用状态引擎'.
    当你浏览Web页面时,从一个链接跳到另一个页面,再从另一个链接调到另外一个页面,就是利用了超媒体的概念:把一个个资源链接起来.
    要达到这个目的,就要求在表述格式里加入链接来引导客户端.这种具有链接的特性称为连通性.

## 1.6. 状态的转移

    状态应该区分应用状态和资源状态,客户端负责维护应用状态,而服务端维护资源状态.
    客户端与服务端的交互必须是无状态的,并在每一次请求中包含处理该请求所需要的一切信息.
    服务端不需要在请求间保留应用状态,只有在接收到实际请求的时候,服务端才会关注应用状态.这种无状态通信原则,使得服务端和中介能够理解
    独立的请求和响应.

    在多次请求中,同一客户端也不再需要依赖于同一服务器,方便实现高可扩展和高可用性的服务端.
    有时候我们会做出违反无状态通信原则的设计,例如利用Cookie跟踪某个服务端会话状态,这意味着,浏览器随各次请求发出去的Cookie是被用于
    构建会话状态的.
    

    '会话状态'不是作为资源保存在服务端的,而是被客户端作为应用状态进行跟踪的.客户端应用状态在服务端提供的超媒体的指引下发生变迁.服务端
    通过超媒体告诉客户端当前状态有哪些后续状态可以进入.

    这些类似'下一页'之类的链接接起的就是这种推进状态的作用 -- 指引你如何从当前状态进入下一个可能的状态.


## 1.7. 实例

    创建一个json数据资源文件 users.json,内容如下:
```json
{
   "user1" : {
      "name" : "mahesh",
      "password" : "password1",
      "profession" : "teacher",
      "id": 1
   },
   "user2" : {
      "name" : "suresh",
      "password" : "password2",
      "profession" : "librarian",
      "id": 2
   },
   "user3" : {
      "name" : "ramesh",
      "password" : "password3",
      "profession" : "clerk",
      "id": 3
   }
}
```

    然后创建一个 server.js 读取上面的数据
```js
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers",function(req,res){
    fs.readFile(__dirname + '/' + "users.json","utf8",function(err,data){
        console.log(data);
        res.end(data);
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例,访问地址为 http://%s:%s",host,port)
})

$ node server
// 在浏览器中访问 http://127.0.0.1:8081/listUsers 可以获取到上面的用户信息
```

### 1.7.1. 添加用户

    接着上面的 server.js
```js
var express = require("express");
var app = express();
var fs = require("fs");

// 添加的新用户数据
var user = {
    "user4"{
        "name":"kyrie",
        "password":"12345",
        "profession":"teacher",
        "id":4
    }
}

ap.get("/addUser",function(req,res){
    // 读取已存在的数据
    fs.readFile(__dirname + '/' + "users.json","utf8",function(err,data){
        data = JSON.parse(data);    // 将数据转换为 js数据格式
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("实例实例,访问地址为 http://%s:%s",host,port)
})
```

### 1.7.2. 显示用户详情

    下面创建了 RESTful API:id(用户id),用户读取指定用户的详细信息,server.js文件代码如下:

```js
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/:id",function(req,res){
    fs.readFile(__dirname + "/" + "users.json","utf8",function(err,data){
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    })
})
```

### 1.7.3. 删除用户

```js
var express = require("express");
var fs = require("fs");
var app = express();

app.get("/deleteUser",function(req,res){
    fs.readFile(__dirname + '/' + 'users.json',"utf8",function(err,data){
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    })
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
```