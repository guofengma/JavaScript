<!-- TOC -->

- [1. Koa](#1-koa)
    - [1.1. Koa应用](#11-koa应用)
    - [1.2. 中间件](#12-中间件)

<!-- /TOC -->

# 1. Koa

    Koa是一个类似于Express的Web开发框架,主要特点是使用了ES6的Generator函数,进行了架构的重新设计.

## 1.1. Koa应用

    一个Koa应用就是一个对象,包含了一个middleware数组,这个数组由一组Generator函数组成.这些函数负责对HTTP请求进行各种
    加工,比如生成缓存,指定代理,请求重定向等等.
```js
var koa = require("koa");
var app = koa();

app.use(function *(){
    this.body = "Hello World";
});
app.listen(3000);
```
    app.use方法用于向 middleware 数组添加Generator函数. 它实际上等同于下面的代码.
```js
var http = require("http");
var koa = require("koa");
var app = koa();
http.createServer(app.callback()).listen(3000);
```

## 1.2. 中间件

    Koa的中间件很想Express的中间件,也是对HTTP请求进行处理的函数,但是必须是一个Generator函数.而且,Koa的中间件是一个级联
    式(Cascading)的结构,也就是说,属于是层层调用,第一个中间件调用第二个中间件,第二个调用第三个,以此类推.上游的中间件必须
    等到下游的中间件返回结果,才会继续执行. 