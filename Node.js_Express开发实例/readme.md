<!-- TOC -->

- [1. Express开发实例](#1-express开发实例)
    - [1.1. 静态网页模板](#11-静态网页模板)
    - [1.2. 动态网页模板](#12-动态网页模板)
    - [1.3. Express.Router用法](#13-expressrouter用法)
    - [1.4. app.route](#14-approute)

<!-- /TOC -->

# 1. Express开发实例

    path.join() 和 path.resolve() 区别


## 1.1. 静态网页模板

    在项目目录之中,建立一个子目录views,用于存放网页模板.
    假定这个项目有三个路径: 根路径(/) 自我介绍(/about) 和文章(/article).那么 app.js可以这样写:
```js
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/about",(req,res) => {
    res.sendFile(__dirname + "/views/about.html");
})

app.get("/article",(req,res) => {
    res.sendFile(__dirname + "/views/article.html");
})

app.listen(3000);
```
    上面代码是一个静态网页,如果想要展示动态内容,就必须使用动态网页模板.


## 1.2. 动态网页模板

    安装模板引擎:
    Express支持多种模板引擎,这里采用Handlebars模板引擎的服务器端版本hbs模板引擎.

    npm install hbs --save-dev

```js
// app.js

var express = require("express");
var app = express();

var hbs = require("hbs");

// 指定模板文件的后缀名为 html
app.set("view engine","html");

// 运行hbs模块
app.engine("html",hbs.__express);

app.get("/",function(req,res){
    res.render("index");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/article",function(req,res){
    res.render("article");
})
```
    上面代码改用render方法,对网页模板进行渲染.render方法的参数就是模板的文件名,默认放在子目录views之中.后缀名已经在前面指定为
    html,这里可以省略.  res.render("index") 就是指 把子目录 views下面的 index.html文件,交给模板引擎hbs渲染.


## 1.3. Express.Router用法

    从Express4.0开始,路由器功能成了一个单独的组件 Express.Router.它好像一个小型的express应用程序一样,有自己的use get param 和
    route方法.

    基本用法:
    Express.Router是一个构造函数,调用后返回一个路由器实例.然后,使用该实例的HTTP动词方法,为不同的访问路径,指定回调函数;最后挂载到
    某个路径.

```js
var router = express.Router();

router.get("/",function(req,res){
    res.send("首页");
});

router.get("/about",(req,res) => {
    res.send("关于");
});

app.use("/",router);
```

## 1.4. app.route

    假定app是Express的实例对象,Express4.0为该对象提供了一个route属性. app.route实际上是express.Router()的缩写形式.
    除了直接挂载到根路径.对同一个路径指定get和post方法的回调函数,可以写成链式形式.
```js
app.route("/login")
    .get(function(req,res){
        res.send("this is the login form");
    })
    .post(function(req,res){
        console.log("processing");
        res.send("processing the login from!");
    })
```
    