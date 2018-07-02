<!-- TOC -->

- [1. 浏览器历史概述](#1-浏览器历史概述)
- [2. Node.js](#2-nodejs)
    - [2.1. Node.js创建第一个应用](#21-nodejs创建第一个应用)
    - [2.2. 创建Node.js应用](#22-创建nodejs应用)
    - [2.3. NPM使用介绍](#23-npm使用介绍)
    - [2.4. npm run](#24-npm-run)
        - [2.4.1. 通配符 *](#241-通配符-)
        - [2.4.2. 执行顺序](#242-执行顺序)
        - [2.4.3. 默认值](#243-默认值)
        - [2.4.4. live-server模块](#244-live-server模块)
        - [2.4.5. 区分命令行 和 交互模式](#245-区分命令行-和-交互模式)
        - [2.4.6. 使用严格模式](#246-使用严格模式)
        - [2.4.7. 使用package.json](#247-使用packagejson)
        - [2.4.8. 使用淘宝NPM镜像](#248-使用淘宝npm镜像)

<!-- /TOC -->

# 1. 浏览器历史概述

    众所周知,在Netscape设计出JavaScript后的短短几个月,JavaScript事实上已经是前端开发的唯一标准.
    后来,微软通过IE击败了Netscape后一统桌面,结果几年时间,浏览器毫无进步.（2001年推出的古老的IE 6到今天仍然有人在使用！）
    没有竞争就没有发展.微软认为IE6浏览器已经非常完善,几乎没有可改进之处,然后解散了IE6开发团队！而Google却认为支持现代Web应用的
    新一代浏览器才刚刚起步,尤其是浏览器负责运行JavaScript的引擎性能还可提升10倍.

    随后,Google也开始创建自家的浏览器.他们也看中了WebKit内核,于是基于WebKit内核推出了Chrome浏览器.

    Chrome浏览器是跨Windows和Mac平台的,并且,Google认为要运行现代Web应用,浏览器必须有一个性能非常强劲的JavaScript引擎,于是Google自己开发了一个高性能JavaScript引擎,名字叫V8,以BSD许可证开源.

    现代浏览器大战让微软的IE浏览器远远地落后了,因为他们解散了最有经验、战斗力最强的浏览器团队！回过头再追赶却发现,支持HTML5的WebKit已经成为手机端的标准了,IE浏览器从此与主流移动端设备绝缘.
    
# 2. Node.js

    Node是JavaScript语言的服务器运行环境. 所谓'运行环境'有两层意思：首先,JavaScript语言通过Node在服务器上运行,在这个意义上,Node有点像
    JavaScript虚拟机;其次,Node提供大量工具库,使得JavaScript语言与操作系统互动(比如读写文件,新建子进程),在这个意义上,Node又是JavaScript
    的工具库.
    
    Node内部采用Google公司的V8引擎,作为JavaScript语言解释器,通过自行开发的libuv库,调用操作系统资源.
    
    
    node.js是运行在服务端的JavaScript.
    node.js是一个基于Chrome JavaScript 运行时建立的一个平台.
    node.js是一个事件驱动I/O服务端JavaScript环境,基于Google的V8引擎,V8引擎执行JavaScript的速度非常快,性能非常好.
    
    安装Node.js
    在windows上安装时务必选择全部组件,包括勾选 Add to Path.
    
    node -v 
    查看node版本

    第一个Node.js程序:Hello World!
```js
// 新建一个 main.js 文件
console.log('Hello World');

// 通过 node命令来执行
node main.js

// 会在终端输出 Hello World

// 使用 -e 参数,可以执行代码字符串
$ node -e 'console.log("Hello World")'
// 输出 Hello World
```

    交互模式:REPL环境(Read-eval-print-loop,读取-求值-输出-循环),可以直接运行各种JavaScript命令.
    
    打开终端,键入node进入命令交互模式,可以输入一条代码语句后立即执行并显示结果,例如:
```js
$ node
> console.log('Hello World!');
Hello World!
```
    退出交互模式 连按两次 Ctrl+C.


## 2.1. Node.js创建第一个应用

    使用node.js时,我们不仅仅在实现一个应用,同时还实现了整个HTTP服务器.事实上,我们的Web应用以及对应的web服务器
    基本上是一样的.

    Node.js应用由哪几部分组成?
    1. 引入required模块:我们可以使用 require 指令来载入 node.js 模块.
    2. 创建服务器:服务器可以监听客户端的请求,类似于Apache Nginx等HTTP服务器
    3. 接收请求与响应请求:服务器很容易创建,客户端可以使用浏览器或终端发送HTTP请求,服务器接收请求后返回响应数据.

## 2.2. 创建Node.js应用

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


## 2.3. NPM使用介绍
    
    npm是Node.js的包管理工具(package manager).
    为什么需要一个包管理工具呢? 因为我们在Node.js上开发时,会用到很多别人写的JavaScript代码.如果我们要使用别人写的某个包,每次都
    根据名称搜索以下官方网站,下载代码,解压,再使用非常繁琐.于是一个集中管理的工具应运而生！大家把自己开发的模块打包后放到npm官网上
    如果要使用,直接通过npm安装就可以直接使用.不用管代码在哪,应该从哪下载!
    
    
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


    设置环境变量:
        $ npm set init-author-name
        $ npm set init-author-email
        $ npm set init-author-url
        $ npm set init-license 'MIT'

    上面命令等于为npm init设置了默认值,以后执行npm init的时候,package.json的作者姓名 邮件 主页 许可证字段就会
    自动写入预设的值.
    如果某个项目有不同的设置,可以针对该项目运行 npm config.
    
    查看包的信息
        $ npm info
        
    安装不同版本
        $ npm module@latest
        或者直接加版本号
    

## 2.4. npm run

    npm 不仅可以用于模块管理,还可以用于执行脚本.package.json文件有一个 scripts字段,可以用于指定脚本命令.供npm
    直接调用.
    
    npm run 是 npm run-script的缩写,一般都使用前者,但是后者可以更好地反应这个命令的本质.
    
    npm 允许在 package.json文件里面,使用scripts字段定义脚本命令.
```js
{
    "scripts":{
        "build":"node build.js"
    }
}
```
    上面的代码是 package.json文件的一个片段,里面的scripts字段是一个对象.它的每一个属性,对应一段脚本.比如,build 命令对应的脚本是 node
     build.js.

    命令行下使用npm run 命令,就可以执行这段脚本.
    
        $ npm run build
        等同于执行
        $ node build.js
        
    这些定义在 package.json里面的脚本,就称为npm 脚本.它的优点很多
        项目的相关脚本,可以集中在一个地方
        不同项目的脚本命令,只要功能相同,就可以有同样的对外接口.用户不需要知道怎么测试你的项目,只要运行npm run test
        即可
        可以利用npm 提供的很多辅助功能.


    查看当前项目的所有 npm 脚本命令,可以使用不带任何参数的npm run 命令.
        

### 2.4.1. 通配符 *

    "lint":"jshint*.js"
    "lint":"jshint**.js"

    *表示任意文件名, **表示任意一层子目录.
    

    传参
    向npm脚本传入参数,要使用 -- 标明.
    

### 2.4.2. 执行顺序

    如果npm 脚本里面需要执行多个任务,那么需要明确它们的执行顺序.
    
    如果是并行执行(即同时的平行执行),可以使用 & 符号.
        $ npm run script1.js & npm run script2.js
    
    如果是继发执行(即只有前一个任务成功,才执行下一个任务),可以使用&&符号.
        $ npm run script1.js && npm run script2.js
        
    
### 2.4.3. 默认值

    一般来说,npm脚本由用户提供,但是,npm对两个脚本提供了默认值.也就是说,这两个脚本不用定义,就可以直接使用.
```js
"start":"node server.js",
"install":"node-gyp rebuild"
```
    上面代码中，npm run start的默认值是node server.js，前提是项目根目录下有server.js这个脚本；npm run 
    install的默认值是node-gyp rebuild，前提是项目根目录下有binding.gyp文件。

### 2.4.4. live-server模块

    live-server模块有三个功能.
    启动一个HTTP服务器,展示指定目录的index.html文件,通过该文件加载各种网络资源,这是file://协议做不到的
    添加自动刷新功能,只要指定目录之中,文件有任何变化,他就会刷新页面.
    npm run server命令执行以后,自动打开浏览器.
    
    以前,上面三个功能需要三个模块来完成: http_server live-reload 和 opener,现在只要live-server一个模块就够了.

    
### 2.4.5. 区分命令行 和 交互模式

    在Node交互式环境下,我们可以输入JavaScript代码并立即执行.
    此外,在命令行模式运行.js文件和在Node交互环境下直接运行JavaScript代码有所不同.Node交互环境会把每一行JavaScript代码的结果自动打印出来.
    但是,直接运行JavaScript文件却不会.

### 2.4.6. 使用严格模式

    如果在JavaScript文件开头写上 'use strict',那么Node在执行该JavaScript时将使用严格模式.但是,在服务器环境下,
    如果有很多JavaScript文件,每个文件都写上 'use strict'很麻烦.我们可以给Node.js传递一个参数,让Node直接为所有
    js文件开启严格模式

    node --use_strict main.js
    

### 2.4.7. 使用package.json

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


### 2.4.8. 使用淘宝NPM镜像

    淘宝npm镜像是一个完整 npmjs.org 镜像.
        $ npm install -g cnpm --registry=https://registry.npm.taobao.org


    