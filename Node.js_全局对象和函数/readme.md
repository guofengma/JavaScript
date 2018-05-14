<!-- TOC -->

- [1. Node.js全局对象](#1-nodejs全局对象)
    - [1.1. 全局对象与全局变量](#11-全局对象与全局变量)
    - [1.2. __filename](#12-__filename)
    - [1.3. __dirname](#13-__dirname)
    - [1.4. setTimeout(cb,ms)](#14-settimeoutcbms)
    - [1.5. clearTimeout(t)](#15-cleartimeoutt)
    - [1.6. setInterval(cb,ms)](#16-setintervalcbms)
    - [1.7. console](#17-console)
    - [1.8. process](#18-process)
    - [1.9. 退出状态码](#19-退出状态码)
    - [1.10. Process属性](#110-process属性)
    - [1.11. Process方法参考手册](#111-process方法参考手册)

<!-- /TOC -->

# 1. Node.js全局对象
    
    全局变量在所有模块中均可使用.但以下变量的作用域只在模块内.
        > __dirname
        > __filename
        > exports
        > module
        > require
    
    Node提供以下几个全局变量,它们是所有模块都可以调用的.
    
    JavaScript中有一个特殊的对象,称为全局对象(Global Object),它及其所有属性都可以在程序的任何地方访问,即全局变量.
    在浏览器JavaScript中,通常window是全局对象,而在Node.js中的全局对象是global.所有全局变量都是 global 对象的属性.
    在Node.js我们可以直接访问到 global 的属性,而不需要在应用中包含它.

    注意: 如果再浏览器中声明一个全局变量,实际上是声明了一个全局对象的属性,比如 var x = 1等同于设置 window.x = 1;但是node不是
    这样,至少在模块中不是这样(REPL环境的行为与浏览器一致).在模块文件中,声明 var x = 1,该变量不是global对象的属性,global.x等于
    undefined.这是因为模块的全局变量都是该模块私有的,其他模块无法获取到.
```js
// main.js文件
var a = 1;
console.log(global.a);

$ node main.js
// 输出 undefineds

在 REPL 环境下
> var a = 1;
> console.log(global.a)
> 1
```
    
## 1.1. 全局对象与全局变量

    > global: 最根本的作用是作为全局变量的宿主.按照ECMAScript的定义,满足以下条件的变量是全局变量:
        在最外层定义的变量
        全局对象的属性
        隐式定义的变量(未定义直接赋值的变量)

    当你定义一个全局变量时,这个变量同时也会成为全局对象的属性,反之亦然.需要注意的是,在Node.js中你不可能在最外层定义
    变量,因为所有用户代码都是属于当前模块的,而模块本身不是最外层上下文.

    
    > process: 该对象表示Node所处的当前进程,允许开发者与该进程互动.
    > console: 指向Node内置的console模块,提供命令行环境中的标准输入,标准输出功能.
    
    Node还提供一些全局函数：
    > setTimeout(): 用于在指定毫秒之后,运行回调函数.
    > clearTimeout() : 用于终止一个setTimeout方法新建的定时器
    > setInterval():    用于每隔一定毫秒调用回调函数.
    > clearInterval():  终止一个用setInterval方法新建的定时器
    > require():    用于加载模块
    > Buffer()      用于操作二进制数据.
    
    
    Node提供两个全局变量,都以两个下划线开头.
    > __filename:指向当前运行的脚本文件名,它将输出文件所在位置的绝对路径,如果在模块中,返回的值是模块文件的路径.
    > __dirname: 表示当前执行脚本所在的目录.

    
## 1.2. __filename

    _filename表示当前正在执行的脚本的文件名,它将输出文件所在位置的绝对路径,且和命令行参数所指定的文件名不一定相同.
    返回的值是模块文件的路径.
```js
// index.js
console.log(__filename);

// 输出  C:\Users\11295\Desktop\JavaScript\Node.js_全局对象\index.js
```

## 1.3. __dirname

    __dirname表示当前执行脚本所在的目录.
```js
console.log(__dirname);

// 输出 C:\Users\11295\Desktop\JavaScript\Node.js_全局对象
```

## 1.4. setTimeout(cb,ms)

    setTimeout(cb,ms)全局函数在指定的毫秒数后执行指定函数.:setTimeout()只执行一次指定函数.
    返回一个代表定时器的句柄值.
```js
function printHello(){
    console.log('Hello World!');
}
setTimeout(printHello,2000);
```

## 1.5. clearTimeout(t)

    clearTimeout(t)全局函数用于停止一个之前通过 setTimeout() 创建的定时器.参数t是通过 setTimeout()函数创建的
    定时器.

## 1.6. setInterval(cb,ms)

    setInterval(cb,ms)全局函数在指定的毫秒(ms)数后执行指定函数(cb).
    返回一个代表定时器的句柄值.可以使用 cleatInterval(t) 函数来清除定时器.
    setInterval()方法会不停地调用函数,直到 clearInterval() 被调用或窗口被关闭.
```js
function printHello(){
    console.log('Hello World!');
}
var time = setInterval(printHello,2000);
```

## 1.7. console

    console用于提供控制台标准输出,它是由Internet Explorer的JScript引擎提供的调试工具,后来逐渐成为浏览器的实施标准.
    Node.js沿用了这个标准,提供与习惯行为一直的console对象,用于向标准输出流(stdout)或标准错误流(stder)输出字符.

    以下为 console 对象的方法:
    
    1. console.log(data)
        向标准输出流打印字符并以换行符结束.
    
    2. console.info(data)
    3. console.error(data)
    4. console.warn(data)
    5. console.dir(data)
    用来对一个对象进行检查,并以易于阅读和打印的格式显示
    6. console.time()
    7. console.assert()
    用于判断某个表达式或变量是否为真,接收两个参数,第一个参数是表达式,第二个参数是字符串.

## 1.8. process

    process 是一个全局变量,即global对象的属性.
    它用于描述当前Node.js进程状态的对象,提供了一个与操作系统的简单接口.通常在你写本地命令程序的时候,少不了要和它打交道.

    1. exit
    当进程准备退出时触发

    2. beforeExit
    当node清空事件循环,并且没有其他安排时触发这个事件.通常来说,当没有进程安排时node退出,但是'beforeExit'的监听器可以
    异步调用,这样node就会继续执行.

    3. uncaughtException
    当一个异常冒泡回到事件循环,触发这件事件.如果给异常添加了监听器,默认的操作(打印堆栈跟踪信息并退出)就不会发生

    4. Signal事件
    当进程接收到信号时就触发.信号列表详见标准的POSIX信号名,如SIGINT SIGUSR1等.
```js
process.on("exit",function(code){
    setTimeout(function(){
        console.log("该代码不会执行");
    },0)
    console.log('退出码为:',code);
});
console.log("程序执行结束");

$ node main.js
// 程序执行结束
// 退出码为 0
```

## 1.9. 退出状态码

    1. Uncaught Fatal Exception
    有未捕获异常,并且没有被域或 uncaughtException 处理函数处理.

    2. Unused
    保留

    3. Internal JavaScript Parse Error
    JavaScript的源码启动Node进程时引起解析错误.

    4. Fatal Error
    V8里致命的不可恢复的错误.通常会打印到 stderr.

    5. Non-function Internal Exception Handler
    未捕获异常,内部异常处理函数不知为何设置为 on-function,并且不能被调用.

    6. Internal Exception Handler Run-Time Failure
    未捕获的异常,并且异常处理函数处理时自己抛出了异常.

    7. Invalid Argument
    可能是给了未知的参数,或者给的参数没有值.

    8. Invalid Debug Argument
    设置了参数 --debug 和 / 或 --debug-brk,但是选择了错误端口.

    9. Signal EXits
    如果Node接收到致命信号,比如SIGKILL 或 SIGHUP,那么退出代码就是128加信号代码.

## 1.10. Process属性

    Process提供了很多有用的属性,便于我们更好的控制系统的交互:

    1. stdout
    标准输出流

    2. stderr
    标准错误流

    3. stdin
    标准输入流

    4. argv
    argv属性返回一个数组,由命令行执行脚本时的各个参数组成.它的第一个成员总是node,第二个成员是脚本文件名.

    5. execPath
    返回执行当前脚本的Node 二进制文件的绝对路径.

    6. execArgv
    返回一个数组,成员是命令行下执行脚本时,在Node可执行文件与脚本文件之间的命令行参数.

    7. env
    返回一个对象,成员未当前shell的环境变量

    8. exitCode
    进程退出时的代码,如果进程优通过process.exit()退出,不需要指定退出码.

    9. version
    Node的版本

    10 versions
    一个属性,包含了Node的版本和依赖.

    11. config
    一个包含用来编译当前node执行文件的javascript配置选项的对象

    12. pid
    当前进程的进程号

    13. title
    进程名,默认值为 'node',可以自定义该值

    14. arch
    当前CPU的架构 'arm' 'ia32' 或者 'x64'
    CPU架构是CPU厂商给属于同一系列的CPU产品定的一个规范,主要目的是为了区分不同类型CPU的重要指示.
    
    15. platform
    运行程序所在的平台系统 'darwin' 'linux' 'sunos' 或 'win32'
    
```js
process.stdout.write('Hello World!');

process.argv.forEach(function(val,index,array){
    console.log(index + ':' + val);
});

console.log(process.version);   // node:'8.9.3'
console.log(process.versions);  
// { http_parser: '2.7.0',
//   node: '8.9.3',
//   v8: '6.1.534.48',
//   uv: '1.15.0',
//   zlib: '1.2.11',
//   ares: '1.10.1-DEV',
//   modules: '57',
//   nghttp2: '1.25.0',
//   openssl: '1.0.2n',
//   icu: '59.1',
//   unicode: '9.0',
//   cldr: '31.0.1',
//   tz: '2017b' }

console.log(process.execPath);
console.log(process.arch);  // x64
console.log(process.platform);  // win32
console.log(process.env);
console.log('当前版本为:' + process.version);
console.log(process.versions);
```

## 1.11. Process方法参考手册

    Process提供了很多有用的方法,便于我们更好的控制系统的交互:

        1. absort() 这将导致node触发absort事件.会让node退出并生成一个核心文件
        2. chdir(directory) 改变当前工作进程的目录,如果操作失败抛出异常
        3. cwd() 返回当前进程的工作目录
        4. exit([code]) 使用指定的 code 结束进程,如果忽略,将会使用 code 0
        5. getgid() 获取进程的群组标识.获取得到群组的数字id,而不是名字.
        6. setgid(id) 设置进程的群组标识.可以接收数字 ID或者群组名.
        7. uptime() 返回Node已经运行的秒数.
        8. memoryUsage()    返回一个对象,描述了Node进程所用的内存状态,单位为字节.
        9. nextTick(callBack) 一旦当前事件循环结束,调用回调函数
        10. kill(pid) 发送信号给进程,pid是进程id,并且signal是发送的信号的字符串描述.信号名是字符串,比如"SIGINT"
        或 "SIGHUP".如果忽略,信号会是"SIGTERM".

```js
console.log( '当前目录为:' + process.cwd() );
process.chdir("./xxx"); //切换当前工作目录到 指定的目录
console.log('当前程序所花的时间为:' + process.uptime());
console.log(process.memoryUsage()); // 当前Node进程所用的内存状态
```

