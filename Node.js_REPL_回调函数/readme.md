<!-- TOC -->

- [1. REPL(交互式解释器)](#1-repl交互式解释器)
    - [1.1. 使用变量](#11-使用变量)
    - [1.2. 多行表达式](#12-多行表达式)
    - [1.3. 下划线(_)变量](#13-下划线_变量)
    - [1.4. REPL命令](#14-repl命令)
- [2. 回调函数](#2-回调函数)
    - [2.1. 阻塞代码实例](#21-阻塞代码实例)
    - [2.2. 非阻塞实例](#22-非阻塞实例)
- [3. 事件循环](#3-事件循环)
    - [3.1. 事件驱动程序](#31-事件驱动程序)
    - [3.2. Node应用程序时如何工作的?](#32-node应用程序时如何工作的)
    - [3.3. 什么是单线程/单进程](#33-什么是单线程单进程)
- [4. Node.js EventEmitter](#4-nodejs-eventemitter)
    - [4.1. EventEmitter类](#41-eventemitter类)

<!-- /TOC -->

# 1. REPL(交互式解释器)

    Node.js REPL(Read Eval Print Loop:交互式解释器)表示一个电脑的环境,类似window系统的终端或Unix/Linux shell,我们可以在终端
    中输入命令,并接收系统的响应.
    
    Node自带了交互式解释器,可以执行以下任务:
        
        读取 - 读取用户输入,解析输入了JavaScript数据结构并存储在内存中
        执行 - 执行输入的数据结构
        打印 - 输出结果
        循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出.

    可以输入以下命令来启动Node的终端:
        $ node
        > 
    这时我们就可以在 > 后输入简单的表达式,并按下回车键来计算结果.


## 1.1. 使用变量

    你可以将数据存储在变量中,并在你需要的时候使用它.
    变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。
    
    使用 var 关键字的变量可以使用 console.log() 来输出变量.

## 1.2. 多行表达式

    Node REPL支持输入多行表达式,这就有点类似JavaScript.
```js
$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined
>
```
    ... 三个点的符号是系统自动生成的,你回车换行后即可.Node会自动检测是否为连续的表达式.


## 1.3. 下划线(_)变量

    可以使用下划线(_)获取上一个表达式的运算结果:
```js
$ node
> var x = 10
> var y = 10
> x + y
20
> var sum = _
> console.log(sum)
30
>
```

## 1.4. REPL命令

    ctrl + c                退出当前终端
    ctrl + c按两次          退出Node REPL
    ctrl+d                  退出Node REPL
    向上/向下键             查看输入的历史命令
    tab                     列出当前命令
    .help                   列出使用命令
    .break                  退出多行表达式
    .clear                  退出多行表达式
    .save filename          保存当前的Node REPL会话到指定文件   
                            (会把当前的会话的内容保存到一个指定的文件里.)

    .load filename          载入当前Node REPL会话的文件内容
                            (会调用出指定文件的内容)

# 2. 回调函数

    node.js异步编程的直接体现就是回调.
    异步编程依托于回调来实现,但不能说使用了回调后程序就异步化了.
    回调函数在完成任务后就会被调用,Node使用了大量的回调函数,Node所有API都支持回调函数.

    例如,我们可以一边读取文件,一边执行其他命令,在文件读取完成后,我们将文件内容作为回调函数的参数返回.这样在执行代码时
    就没有阻塞或等待文件I/O操作.这就大大提高了Node.js的性能,可以处理大量的并发请求.


    I/O(input/output),即输入/输出端口.每个设备都会有一个专用的I/O地址,用来处理自己的输入输出信息.CPU与外部设备 存储器
    的连接和数据交换都需要通过接口设备来实现.前者被称为I/O接口,后者被称为存储接口.

## 2.1. 阻塞代码实例

        创建一个文件 input.txt,内容如下:
            百度:http://www.baidu.com

        创建 mian.js文件,代码如下:
            var fs = require('fs');
            var data = fs.readFileSync('input.txt');
            console.log(data.toString());
            console.log('程序执行结束!');

## 2.2. 非阻塞实例

    创建一个文件 input.txt,内容如下:
        百度地址:http://www.baidu.com
    
    创建main.js文件
        var fs = require('fs');
        fs.readFile('input.txt',function(err,data){
            if(err) return console.error(err);
            console.log(data.toString());
        })
        console.log("程序执行结束")

    以上代码运行结果如下:
        程序执行结束
        百度官网地址:http://www.baidu.com


    以上两个实例我们了解了阻塞与非阻塞调用的不同.第一个实例在文件读取完后才执行完程序.第二个实例我们不需要等待文件读取完,
    这样就可以在读取文件的同时执行接下来的代码,大大提高了程序的性能.
    
    因此,阻塞是按顺序执行的,而非阻塞是不需要按顺序的,所以如果需要处理回调函数的参数,我们就需要写在回调函数内.


# 3. 事件循环

    Node.js是单进程单线程应用程序,但是通过事件和回调支持并发,所以性能非常高.
    Node.js的每一个API都是异步的,并作为一个独立线程运行,使用异步函数调用,并处理并发.
    Node.js基本上所有的事件机制都是用设计模式中观察者模式实现.
    Node.js单线程类似进入一个while(true)的事件循环,直到没有事件观察者退出,每个异步事件都生成一个事件观察者,如果有事件
    发生就调用该回调函数.
    

## 3.1. 事件驱动程序

    Node.js使用事件驱动模型,当web server接收到请求,就把它关闭然后进行处理,然后去服务下一个web请求.
    当这个请求完成,它被放回处理排列,当达到队列开头,这个结果被返回给用户.
    这个模型非常高效可扩展性非常强,因为 webserver一直接收请求而不等待任何读写操作.(这也被称之为非阻塞式IO或者事件驱动IO).
    在事件驱动模型中,会生成一个主循环来监听事件,当检测到事件时触发回调函数.

    Node.js有多个内置的事件,我们可以通过引入events模块,并通过实例化EventEmitter类来绑定和监听事件,如下实例:
```js
// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('eventName',eventHandler);

// 触发事件
eventEmitter.emit('eventName');
```

## 3.2. Node应用程序时如何工作的?

    在Node应用程序中,执行异步操作的函数将回调函数作为最后一个参数,回调函数接收错误对象作为第一个参数.

    创建 input.txt文件
        百度官网地址:http://www.baidu.com

    创建main.js文件,代码如下:
        var fs = require('fs');
        fs.readFile('input.txt',function(err,data){
            if(err){
                console.log(err.stack);
                return;
            }
            console.log(data.toString());
        });
        console.log("程序执行完毕");

    以上程序中 fs.readFile()是异步函数用于读取文件.如果在读取文件过程中发生错误,错误err对象就会输出错误信息.
    如果没发生错误,readFile跳过err对象的输出,文件内容就通过回调函数输出.

        程序执行完毕
        百度官网地址:http://www.baidu.com
        
        
## 3.3. 什么是单线程/单进程

    进程:CPU执行任务的模块
    线程:模块中的最小单元

    事件就是需要 eventEmitter.on 去绑定一个事件,通过eventEmitter.emit去触发这个事件.其次事件的接收和发生是分开的.
    事件可以不停的接收不停的发生能够提高效率.

