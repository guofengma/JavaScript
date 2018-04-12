<!-- TOC -->

- [1. Node.js](#1-nodejs)
    - [1.1. Node.js创建第一个应用](#11-nodejs创建第一个应用)
    - [1.2. 创建Node.js应用](#12-创建nodejs应用)
    - [1.3. NPM使用介绍](#13-npm使用介绍)
        - [1.3.1. 使用package.json](#131-使用packagejson)
        - [1.3.2. 卸载模块](#132-卸载模块)
        - [1.3.3. 使用淘宝NPM镜像](#133-使用淘宝npm镜像)

<!-- /TOC -->

# 1. Node.js

    node.js是运行在服务端的JavaScript.
    node.js是一个基于Chrome JavaScript 运行时建立的一个平台.
    node.js是一个事件驱动I/O服务端JavaScript环境,基于Google的V8引擎,V8引擎执行JavaScript的速度非常快,性能非常好.

    node -v 
    查看node版本

    第一个Node.js程序:Hello World!
```js
// 新建一个 main.js 文件
console.log('Hello World');

// 通过 node命令来执行
node main.js

// 会在终端输出 Hello World
```

    交互模式:
    打开终端,键入node进入命令交互模式,可以输入一条代码语句后立即执行并显示结果,例如:
```js
$ node
> console.log('Hello World!');
Hello World!
```

## 1.1. Node.js创建第一个应用

    使用node.js时,我们不仅仅在实现一个应用,同时还实现了整个HTTP服务器.事实上,我们的Web应用以及对应的web服务器
    基本上是一样的.

    Node.js应用由哪几部分组成?
    1. 引入required模块:我们可以使用 require 指令来载入 node.js 模块.
    2. 创建服务器:服务器可以监听客户端的请求,类似于Apache Nginx等HTTP服务器
    3. 接收请求与响应请求:服务器很容易创建,客户端可以使用浏览器或终端发送HTTP请求,服务器接收请求后返回响应数据.

## 1.2. 创建Node.js应用

    1. 引入 required 模块
    我们使用 require 指令来载入 http模块,并将实例化的 HTTP 赋值给变量 http,实例如下:
```js
var http = require('http');
```

    2. 创建服务器
    使用 http.createServer()方法创建服务器,并使用listen方法绑定8888端口,函数通过 request,response参数来接收和响应数据.

```js
var http = require('http');

// 创建服务器 并使用 listen方法绑定8888端口, 通过request response 参数来接收和响应数据.
http.createServer(function(request,response){
    // 发送HTTP头部
    // HTTP状态值:200
    // 内容类型:text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    // 发送响应数据 'Hello World'
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server runing at http://127.0.0.1:8888/');

// 在终端运行 server.js
$ node server.js
Server running at http://127.0.0.1:8888/
```
    分析Node.js的HTTP服务器:
    第一行请求(require)Node.js自带的http模块,并且把它赋值给http变量
    接下来我们调用 http 模块提供的函数:createServer.这个函数会返回一个对象,这个对象有一个叫做 listen的方法,这个方法有
    一个数值参数,指定这个HTTP服务器监听的端口号.


## 1.3. NPM使用介绍

    NPM是随同nodeJS一起安装的包管理工具,能解决NodeJS代码部署上的很多问题,常见的使用场景有以下几种:
    1. 允许用户从NPM服务器上下载别人编写的第三方包到本地使用
    2. 允许用户从NPM服务器下载并安装别人编写的命令程序到本地使用.
    3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用.

    查看npm版本:
        $ npm -v
    
    升级npm:
        $ npm install npm -g

    使用npm命令安装模块:
        $ npm install <Module Name>

    以下实例,我们使用 npm 命令安装常用的 Node.js web框架模块 express:
        $ npm install express

    安装好之后,express包就放在了工程目录下的 node_modules目录中,因此在代码中只需要通过require('express')的方式
    就好.无需指定第三方包路径.
        var express = require('express');


    全局安装与本地安装:
        $ npm install express     # 本地安装
        $ npm install express -g  # 全局安装

    如果出现以下错误：
        $ npm err! Error: connect ECONNREFUSED 127.0.0.1:8087

    解决办法为:
        $ npm config set proxy null

    
    查看安装信息,可以使用以下命令来查看所有全局安装的模块:
        $ cnpm list -g

    如果要查看某个模块的版本号,可以使用如下命令:
        $ cnpm list grunt


### 1.3.1. 使用package.json

    package.json位于模块的目录下,用于定义包的属性.可以在 node_modules/express/package.json内容

    package.json属性说明:
        name - 包名
        version - 包的版本号
        description - 包的描述
        homepage - 包的官网url
        author - 包的作者姓名
        contributors - 包的其他贡献者姓名
        dependencies - 依赖包列表.如果依赖包没有安装,npm会自动将依赖包安装在node_module目录下
        repository - 包代码存放的地方的类型,可以是git或svn
        main - main字段指定了程序的主入口文件,require('noduleName')就会加载这个文件
        keywords - 关键字

### 1.3.2. 卸载模块

    可以使用以下命令来卸载Node.js模块.
        $ cnpm unstall express

    卸载后,你可以到 /node_modules/目录下查看包是否还存在,或者使用以下命令查看:
        $ cnpm ls

    更新模块
        $ npm update express

    搜索模块
        $ npm search express

    创建模块
        package.json文件是必不可少的.我们可以使用npm生成 package.json文件,生成的文件包含了基本的结果.
        $ npm init
    
    注册用户
        $ npm adduser

    发布模块:
        $ npm publish

    版本号
    使用NPM下载和发布代码时都会接触到版本号.NPM使用语义版本号来管理代码,语义版本号分为X.Y.Z三位,分别代表主版本号,次版本号和补丁
    版本号.
        如果只是修复bug,需要更新Z位.
        如果是新增了功能,但是向下兼容,需要更新Y位.
        如果有大变动,向下不兼容,需要更新X位.

### 1.3.3. 使用淘宝NPM镜像

    淘宝npm镜像是一个完整 npmjs.org 镜像.
        $ npm install -g cnpm --registry=https://registry.npm.taobao.org