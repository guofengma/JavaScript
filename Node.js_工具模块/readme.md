<!-- TOC -->

- [1. Node.js工具模块](#1-nodejs工具模块)
    - [1.1. OS模块](#11-os模块)
        - [1.1.1. 方法和描述](#111-方法和描述)
    - [1.2. Node.js Path模块](#12-nodejs-path模块)
        - [1.2.1. 方法和描述](#121-方法和描述)
    - [1.3. Node.js Net模块](#13-nodejs-net模块)
        - [1.3.1. 方法](#131-方法)
        - [1.3.2. net.Server](#132-netserver)
        - [1.3.3. 事件](#133-事件)
        - [1.3.4. 事件](#134-事件)
    - [1.4. Node.js DNS模块](#14-nodejs-dns模块)
    - [1.5. Node.js Domain模块](#15-nodejs-domain模块)
        - [1.5.1. 方法](#151-方法)

<!-- /TOC -->

# 1. Node.js工具模块

    在Node.js模块库中有很多好用的模块,下面介绍几种常用的模块

## 1.1. OS模块

    Node.js os模块提供了一些基本的系统操作函数.可以通过以下方式引入该模块
    
    var os = require("os");

### 1.1.1. 方法和描述

    os.tmpdir()         返回操作系统的默认临时文件夹
    os.endianness()     返回CPU的字节序,可能的是"BE"或"LE"
    os.hostname()       返回操作系统的主机名
    os.type()           返回操作系统名
    os.platform()       返回操作系统名
    os.arch()           返回操作系统CPU架构,可能的值有'x64' 'arm' 和 'ia32'
    os.release()        返回操作系统的发行版本
    os.uptime()         返回操作系统运行时间,以秒为单位
    os.loadavg()        返回一个包含1 5 15分钟平均负载的数组
    os.totalmem()       返回系统内存总量,单位为字节.
    os.freemem()        返回操作系统空闲内存量,单位是字节
    os.cpus()           返回一个对象数组,包含所安装的每个 CPU/内核的信息:型号,速度(单位MHz),时间
    os.networkInterfaces 获得网络接口列表

```js
var os = require("os");

// 返回操作系统的字节序
os.endianness();    // LE
os.hostname();      // LAPTOP-N040K7RJ
os.type();          // Windows_NT
os.platform();      // win32
os.totalmen();      // 系统内存总量
os.freemen();       // 返回操作系统空闲内存量
os.uptime();        // 返回操作系统运行时间
os.relase();        // 返回操作系统的法行版本
```

## 1.2. Node.js Path模块

    Node.js path模块提供了一些用于处理文件路径的小工具:

    var path = require("path");

### 1.2.1. 方法和描述

    path.normalize(p)           规范化路径
    path.join([path1],[path2]..) 用于连接路径,该方法的主要用于在于,会正确使用当前系统的路径分隔符,Unix系统是'/',Windows是'\'
    path.resolve([from],to)     将to参数解析为绝对路径
    path.isAbsolute(path)       判断path是否为绝对路径
    path.resolve(from,to)       用于将相对路径转为绝对路径
    path.dirname(p)             返回路径中代表文件夹的部分,同Unix的dirname命令类似
    path.basename(p[,ext])      返回路径中的最后一部分
    path.extname(p)             返回路径中文件的后缀名,即路径中最后一个'.'之后的部分.如果一个路径中并不包含'.'或该该路径只
    包含一个'.'且这个'.'为路径的第一个字符,则此命令返回空字符串.
    path.parse(pathString)      返回路径字符串的对象
    path.format(pathObject)     从对象中返回路径字符串,和path.parse相反

```js
var path = require("path");

// 格式化路径
console.log("normalization:" + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log("join path:" + path.join("/test",'test2','style.css'));

// 转为绝对路径
console.log("resolve:" + path.resolve("main.js"));
console.log(__filename);

// 路径中文件的后缀名
console.log("ext name:" + path.extname("main.js"));

$ node mian.js
```

## 1.3. Node.js Net模块

    Node.js Net模块提供了一些用于底层的网络通信的小工具,包含了创建服务器/客户端的方法.

    var net = require(net);

### 1.3.1. 方法

    net.createServer([options],)        创建一个TCP服务器.
    net.connect()                       返回一个新的'net.Socket',并连接到指定的地址和端口
    net.createConnection()              创建一个到端口port和主机host的TCP连接.host默认为'localhost'


### 1.3.2. net.Server

    net.Server通常用于创建一个TCP或本地服务器

    server.listen(port,[,host])
    监听指定端口 post 和 主机 host ac连接.默认情况下host接受任何IPv4地址的直接连接.

    server.listen(path[,callback])
    通过指定path的连接,启动一个本地socket服务器

    server.listen(handle[,callback])
    通过指定句柄连接

    server.close(callback)
    服务器停止接受新的连接,保持现有连接.这是异步函数,当所有连接结束的时候服务器会关闭.并会触发'close'事件

    server.address()
    操作系统返回绑定的地址,协议族名和服务器端口

    server.unref()
    如果这是事件系统中唯一一个活动的服务器,调用unref将允许程序退出.

### 1.3.3. 事件

    listening
    当服务器调用 server.listen 绑定后会触发

    connection
    当新连接创建后会被触发,socket是 net.Socket实例

    close
    服务器关闭时触发.注意,如果存在这个连接,这个事件不会触发直到所有的连接关闭.

    error
    发生错误时触发,close事件将被下列事件直接调用


### 1.3.4. 事件

    lookup
    在解析域名后,但在连接前,触发这个事件,对UNIX socket不适用

    connect
    成功建立socket连接时触发

    data
    当接受到数据时触发

    end
    当socket另一端发送FIN包时,触发该事件

    timeout
    当socket空闲超时时触发,仅是表明socket已经空闲.用户必须手动关闭连接.

    close
    当socket完全关闭时触发,参数 had_error是布尔值,它表示是否因为传输错误导致socket关闭.
    
    
## 1.4. Node.js DNS模块

    Node.js DNS模块用于解析域名.

    var dns = require("dns");


## 1.5. Node.js Domain模块

    Node.js Domain简化异步代码的异常处理,可以捕捉处理 try catch无法捕捉的异常.

    var domain = require("domain");

    domain模块,将处理多个不同的IO的操作作为一个组,注册事件和回调到domain,当发生一个错误事件或抛出一个错误时,domain对象
    会被通知,不会丢失上下文环境,也不导致程序错误立即退出,与process.on("uncaughtException")不同.

    Domain模块可分为隐士绑定和显示绑定:
    隐士绑定:把在domain上下文中定义的变量,自动绑定到domain对象
    显示绑定:把不是在domain上下文中定义的变量,以代码的方式绑定到domain对象

### 1.5.1. 方法

    domain.run(function)
    在域的上下文运行提供的函数,隐士的绑定了所有的事件分发器,计时器和底层请求

    domain.add(emitter)
    显示的增加事件

    domain.remove(emitter)
    删除事件

    domain.intercept(callback)
    和domain.bind(callback)类似.除了捕获被抛出的错误外,它还会拦截Error对象作为参数传递到这个函数

    domain.enter()
    进入一个异步调用的上下文,绑定到domain.

    domain.exit()
    退出当前的domain,切换到不同的链的异步调用的上下文中.对应domain.enter()

    domain.dispost()
    释放一个domain对象,让node进程回收这部分资源

    domain.create()
    返回一个domain对象.