<!-- TOC -->

- [1. 文件系统](#1-文件系统)
    - [1.1. 异步和同步](#11-异步和同步)
    - [1.2. 同步读文件](#12-同步读文件)
    - [1.3. 打开文件](#13-打开文件)
    - [1.4. mkdir() writeFile() readFile()](#14-mkdir-writefile-readfile)
    - [1.5. 获取文件信息](#15-获取文件信息)
    - [1.6. 写入文件](#16-写入文件)
    - [1.7. 读取文件](#17-读取文件)
    - [1.8. 关闭文件](#18-关闭文件)
    - [1.9. 截取文件](#19-截取文件)
    - [1.10. 删除文件](#110-删除文件)
    - [1.11. 创建目录](#111-创建目录)
    - [1.12. 读取目录](#112-读取目录)
    - [1.13. 删除目录](#113-删除目录)
- [2. 总结](#2-总结)
    - [2.1. 同步还是异步](#21-同步还是异步)

<!-- /TOC -->

# 1. 文件系统

    fs是filesystem的缩写,该模块提供本地文件的读取能力,基本上是POSIX文件操作命令的简单包装.
    
    POSIX表示可移植操作系统接口,POSIX标准定义了操作系统应该为应用程序提供的接口标准.是IEEE为要在各种UNIX操作系统上运行的软件而定义
    的一系列API标准的总称.
    
    Node.js内置的fs模块就是文件系统模块,负责读写文件.和其他所有模块不同的是,fs模块同时提供了异步和同步的方法
    Node.js提供一组类似 UNIX(POSIX)标准的文件操作API.Node导入文件系统模块(fs)语法如下所示:
    
```js
var fs = require("fs");
```

## 1.1. 异步和同步

    Node.js文件系统(fs模块)模块种的方法均有异步和同步版本,例如读取文件内容的函数有异步的fs.readFile()和同步的fs.readFileSync().
    异步的方法函数最后一个参数为回调函数,回调函数的第一个参数包含了错误信息(error).
    
    建议使用异步方法,比起同步,异步方法性能更高,速度更快,而且没有阻塞.

```js
var fs = require("fs");

// 异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("异步读取:" + data.toString() );
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取:' + data.toString() );

console.log("程序执行完毕");


$ node index.js
// 同步读取: 百度官网：http://www.baidu.com
// 文件读取实例

// 程序执行完毕
// 异步读取：百度官网 http://www.baidu.com
// 文件读取实例


// simple.txt
春日游,杏花吹满头.陌上谁家少年,足风流！


// simple.js
var fs = require("fs");
fs.readFile("simple.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
// $ node simple.js
// 正常输出  春日游,杏花吹满头.陌上谁家少年,足风流！
```
    simple.txt文件必须在当前目录下,且文件编码为utf-8.
    异步读取时,传入的回调函数接收两个参数,当正常读取时,err参数为null,data参数为读取到的string,当读取发生错误时,err参数代表一个
    错误对象,data为undefined. 这也是Node.js标准的回调函数:第一个参数代表错误信息,第二个参数代表结果.

    由于err是否为null就是判断是否出错的标志,所以通常的判断逻辑是:
    if(err){
        // 出错
    }else{
        // 正常
    }



    如果要读取的文件是二进制的呢？
```js
fs.readFile("ai.jpg",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }
})
```
    当读取二进制文件时,不传入文件编码时,回调函数的data参数将返回一个Buffer对象.在Node.js中,Buffer对象就是一个包含零个或任意个
    字节的数组.
    
```js
Buffer对象可以和String作转换:

Buffer ---> String
var text = data.toString("utf-8");
console.log(text);

String --> Buffer
var buf = Buffer.from("text","utf-8");
console.log(buf);    
```    

## 1.2. 同步读文件

    除了标准的异步读取模式外,fs也提供相应的同步读取函数.同步读取的函数和异步函数相比,多了一个Sync后缀,并且不接受回调函数,函数直接
    返回结果!
    用fs模块同步读取一个文本文件的代码如下:
```js
var fs = require("fs");
var data = fs.readFileSync("simple.txt","utf-8");
console.log(data);
```
    如果同步读取文件发生错误,则需要使用 try ... catch 捕获该错误.
    try{
        var data = readFileSync("simple.txt","utf-8");
        console.log(data);
    }catch(err){
        // 出错了
    }

    
## 1.3. 打开文件

    以下为在异步模式下打开文件的语法格式:
```js
fs.open(path,flags[,mode],callback);
```
    path: 文件路径
    flags： 文件打开的行为
    mode: 设置文件模式(权限),文件创建默认权限为0666(可读,可写)
    callback: 回调函数,带有两个参数如 callback(err,fd)
    

    flags参数可以是以下值:
        
        r               以读取模式打开文件.如果文件不存在抛出异常
        r+              以读写模式打开文件,如果文件不存在抛出异常
        rs              以同步的方式读取文件
        rs+             以同步的方式读取和写入文件
        w               以写入模式打开文件,如果文件不存在则创建
        wx              类似'w',但是如果文件路径存在,则文件写入失败
        w+              以读写模式打开文件,如果文件不存在则创建
        wx+             类似'w+',但是如果文件路径存在,则文件读写失败
        a               以追加模式打开文件,如果文件不存在则创建
        ax              类似'a',但是如果文件路径存在,则文件追加失败
        a+              以读取追加模式打开文件,如果文件不存在则创建
        ax+             类似'a+',但是如果文件路径存在,则文件读取追加失败

```js
var fs = require('fs');

// 异步打开文件
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("文件打开成功!");
});
```

## 1.4. mkdir() writeFile() readFile()

    mkdir方法用于新建目录
```js
var fs = require("fs");
fs.mkdir("./helloDir",0777,function(err){
    if(err) throw err;
})
```

    writeFile方法用于写入文件
```js
var fs = require('fs');

fs.writeFile('./helloDir/message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('文件写入成功');
});
```

    readFile方法用于读取文件内容
```js
var fs = require("fs");
fs.readFile("./helloDir/message.txt","UTF-8",function(err,data){
    if(err) throw err;
    console.log(data);
})
```
    第一个参数是文件名,第二个参数是文件编码.第三个参数是回调函数.

    readFile方法是异步操作,所以必须小心,不要同时发起多个readFile请求.
```js
for(var i = 1; i <= 1000; i++){
    fs.readFile("./" + i + '.txt',function(){
        
    })
}
    // 上面同时发起1000个readFile异步请求,很快会耗尽系统资源.
```

## 1.5. 获取文件信息

    如果我们要获取文件大小,创建时间等信息,可以使用fs.stat(),它返回一个stat对象,能够告诉我们文件或目录的详细信息：
    以下为通过异步模式获取文件信息的语法格式:
```js
fs.stat(path,callback);
```
    参数使用说明:
        path - 文件路径
        callback - 回调函数,带有两个参数 (err,stats),stats是fs.Stats对象.

    fs.stat(path)执行后,会将stats类的实例返回给其回调函数,可以通过stats类中的提供方法判断文件的相关属性.例如判断是否为
    文件:
```js
fs.stat(__filename,function(err,stats){
    console.log(stats.isFile());    // true
})


var fs = require("fs");
fs.stat("simple.txt",function(err,data){
    if(err){
        console.log(err);
    }else{
        // 是否是文件
        console.log("isFile" + stat.isFile());
        // 是否是目录
        console.log("isDirectoty" + stat.isDirectory());
        if(stat.isFile()){
            // 文件大小
            console.log("size" + stat.size);
            // 创建时间
            console.log("birth time" + stat.birthtime);
            // 修改时间
            console.log("modified time" + stat.mtime);
        }
    }
})
```

    stats类中的方法有:

    stats.isFile()              如果是文件返回true,否则返回false.
    stats.isDirectory()         如果是目录返回true,否则返回false.
    stats.isBlockDevice()       如果是块设备返回true,否则返回false.
    stats.isCharacterDevice()   如果是字符设备返回true,否则返回false.
    stats.isSymbolicLink()      如果是软连接返回true,否则返回false.
    stats.isFIFO()              如果是 FIFO,返回true,否则返回false.FIFO是UNIX中的一种特殊类型的命令管道.
    stats.isSocket()            如果是Socket返回true,否则返回false.

```js
// 以下实例为获取文件信息

var fs = require("fs");

console.log("准备打开文件");

fs.stat(__filename,function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("获取信息成功");


    // 检测文件类型
    console.log('是否为文件(isFile)?' + stats.isFile() );
    console.log("是否为目录(isDirectory)?" + stats.isDirectory() );
})
// 执行结果
$ node file.js

// 准备打开文件！
Stats {
  dev: 816527736,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 12384898975518130,
  size: 0,
  blocks: undefined,
  atimeMs: 1524326483580,
  mtimeMs: 1524399339864.0144,
  ctimeMs: 1524399339864.0144,
  birthtimeMs: 1524326436626.6768,
  atime: 2018-04-21T16:01:23.580Z,
  mtime: 2018-04-22T12:15:39.864Z,
  ctime: 2018-04-22T12:15:39.864Z,
  birthtime: 2018-04-21T16:00:36.627Z 
}
// 读物文件信息成功
// 是否为文件(isFile)?true
// 是否为目录(isDirectory)? false
```

## 1.6. 写入文件

    fs.writeFile(file,data[,options],callback)

    writeFile直接打开文件默认是w模式,所以如果文件存在,该方法写入的内容会覆盖旧的文件内容.
    参数使用说明如下:
        file - 文件名或文件描述符
        data - 要写入文件的数据,可以是String(字符串)或Buffer(流对象).
        options - 该参数是一个对象,包含{encoding,mode,flag}.默认编码为Utf8,模式为0666,flag为'w'
        callback - 回调函数,回调函数只包含错误信息参数(err),在写入失败时返回.

```js
// main.js文件, 此时有一个已创建的文件 index.txt,并且文件有内容
var fs = require("fs");

// 开始写入文件
console.log("开始写入文件!");

fs.writeFile('input.txt',"我是通过fs.writeFile写入的内容",function(err){
    if(err){
        return console.error(err);
    }
    console.log("数据写入成功!");

    console.log("读取写入的数据!");
    fs.readFile("input.txt",function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("异步读取文件数据:" + data.toString());
    })
});

$ node main.js
// 准备写入文件
// 数据写入成功！
// 读取写入的数据！
// 异步读取文件数据: 我是通 过fs.writeFile 写入文件的内容



下面是第二个例子

var fs = require("fs");
// mian.js文件, 此时不存在mian.txt文件.

console.log("开始写入文件数据");

fs.writeFile("main.txt","我是通过fs.writeFile写入的内容",function(err){
    if(err){
        return console.error(err)
    }
    console.log("文件写入成功");

    //读取文件内容
    fs.readFile('mian.txt',function(err,data){
        if(err){
            console.error(err);
        }
        console.log("异步读取文件数据:" + data.toString() );
    });
})

$ node main.js
// 开始写入文件数据
// 文件写入数据成功
// 异步读取文件数据: 我是通过 fs.writeFile 写入的内容
```
    注意: 因为fs.writeFile是默认以w方式读取文件数据,当文件不存在时,会创建该文件.而当文件存在时,则写入的文件内容会覆盖
    之前的文件内容.
    
```js
// simple.js
var message = "秋风清,秋月明!落叶聚还散,寒鸦栖复惊！"
fs.writeFile("simple.txt",message,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
})

$ node simple.js
// 会在simple.txt文件里写入message的内容.
```
    WriteFile()的参数依次为文件名,数据和回调函数.如果传入的数据是string,则默认按UTF-8编码写入文本文件,如果传入的参数是Buffer,
    则写入的是二进制文件.回调函数由于只关心成功与否,因此只需要一个err参数.
    
    
    和readFile()类似,writeFile()也有一个同步方法,叫writeFileSync();
```js
var fs = require("fs");
var data = "Hello Node.js";
fs.writeFileSync("output.txt",data);
```

## 1.7. 读取文件

    以下为异步模式下读取文件的语法格式:
    fs.read(fd,buffer,offset,length,position,callback)
    该方法使用了文件描述符来读取文件.

    参数:
    fd - 通过fs.open()方法返回的文件描述符
    buffer - 数据写入的缓冲区
    offset - 缓冲区写入的写入偏移量
    length - 要从文件中读取的字节数
    position - 文件读取的起始未知,如果position的值为null,则会从当前文件指针的位置读取.
    callback - 回调函数,有三个参数err,bytesRead,buffer,err为错误信息,bytesRead表示读取的字节数,buffer为缓冲区对象.

```js
// 新建 input.txt文件
// input.txt   内容为 百度官网:http://www.baidu.com


var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件!");

fs.open("input.txt","r+",function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功!");

    console.log("准备读取文件:");

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes + '字节被读取');

        if(bytes > 0){
            console.log( buf.slice(0,bytes).toString() );
        }
    })
})

$ node file.js
// 准备打开已存在的文件!
// 文件打开成功!
// 准备读取文件:
// 42 字节被读取
// 百度官网地址：http://www.baidu.com
```

## 1.8. 关闭文件

    以下为异步模式下关闭文件的语法格式:
    fs.close(fd,callback)
    该方法使用了文件描述符来读取文件.

```js
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件");

fs.open("kyrie.txt","r+",function(err,fd){
    if(err){
        console.error(err);
    }
    console.log("文件打开成功!");
    console.log("准备读取文件!");

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }

        // 关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log('文件关闭成功');
        })
    })
})
```

## 1.9. 截取文件

    以下为异步模式下截取文件的语法格式:
    fs.ftruncate(fd,len,callback)

        fd - 通过fs.open()方法返回的文件描述符
        len - 文件内容截取的长度
        callback - 回调函数,没有参数

```js
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件!");

fs.open("input.txt","r+",function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功!");
    console.log("截取了10字节后的文件内容.");


    // 截取文件
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("文件截取成功");
        console.log("读取相同的文件");

        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0,bytes).toString());
            }

            // 关闭文件
            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("文件关闭成功!");
            })
        })
    })
})
```

## 1.10. 删除文件

    fs.unlink(path,callback)

    path - 文件路径
    callback - 回调函数,没有参数

```js
var fs = require("fs");

console.log("准备删除文件!");

fs.unlink("input.txt",function(err){
    if(err){
        console.error(err);
    }
    console.log("文件删除成功!");
})
```

## 1.11. 创建目录

    fs.mkdir(path[,mode],callback)

        path - 文件路径
        mode - 设置目录权限,默认为07777
        callback - 回调函数,没有参数

```js
var fs = require("fs");
console.log("创建目录/style");

fs.mkdir("./style/",function(err){
    if(err){
        return console.error(err);
    }
    console.log("目录创建成功!");
})
```

## 1.12. 读取目录

    fs.readdir(path,callback)

    path - 文件路径
    callback - 回调函数,回调函数带有两个参数,err files err为错误信息,files为目录下的文件数组列表
```js
var fs = require("fs");

fs.readdir("./style",function(err,files){
    if(err){
        console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})

$ node main.js
// style.css
```

## 1.13. 删除目录

    fs.rmdir(path,callback)
    path - 文件路径
    callback - 回调函数

```js
var fs = require("fs");

console.log("开始删除目录");
fs.rmdir("./style",function(err){
    if(err){
        console.error(err);
    }
    console.log("删除目录成功!");
})
```

# 2. 总结

    Node.js提供一组类似UNIX(POSIX)标准的文件操作API,Node导入文件系统模块(fs)语法：
    var fs = require("fs");

    Node.js文件系统(fs模块)模块中的方法有异步和同步版本,例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync().
    异步的方法函数最后一个参数为回调函数,回调函数的第一个参数包含了错误信息(error).

    建议大家使用异步方法,比起同步,异步方法性能更高,速度更快,而且没有阻塞.


    打开文件(异步):
    fs.open(path,flags[,mode],callback)
    

    获取文件信息(异步)
    fs.stat(path,callback(err,stats))
        stats.isFile()      是否为文件
        stats.isDirectory() 是否为目录

    
    写入文件(异步)
    fs.writeFile(file,data[,options],callback)
        file:文件名
        data:要写入文件的数据
        options:该参数是一个对象,包含{encoding,mode,flag} 默认编码为utf8 模式为0666 flag为'w'


    读取文件(异步)
    fs.read(fd,buffer,offset,length,opsition,callback)

        fd - 通过fs.open()方法返回的文件描述符
        buffer - 数据写入的缓冲区
        offset - 缓冲区写入的写法偏移量
        length - 要从文件中读取的字节数
        position - 文件读取的起始位置


    关闭文件(异步)
    fs.close(fd,callback)
    

    截取文件(异步)
    fs.ftruncate(fd,len,callback)
    

    删除文件
    fs.unlink(path,callback)
    

    创建目录
    fs.mkdir(path,[,mode],callback)


    读取目录
    fs.readdir(path,callback)

    删除目录
    fs.rmdir(path,callback)


## 2.1. 同步还是异步

    在fs模块中,提供同步方法是为了方便使用.由于Node环境执行的JavaScript代码是服务端代码,所以绝大部分需要在服务器运行期反复执行业务
    逻辑的代码,必须使用异步代码,否则同步代码在执行期间,服务器将停止响应.因为JavaScript只有一个执行线程.

    服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响
    服务器正常运行时的异步执行。