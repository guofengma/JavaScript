<!-- TOC -->

- [1. 模块系统](#1-模块系统)
    - [1.1. 创建模块](#11-创建模块)

<!-- /TOC -->

# 1. 模块系统

    为了让Node.js的文件可以互相调用,Node.js提供了一个简单的模块系统.
    模块是Node.js应用程序的基本组成部分,文件和模块是一一对应的.换言之,一个Node.js文件就是一个模块,这个文件可能是JavaScript
    代码,JSON或者编译过的C/C++扩展.

## 1.1. 创建模块

    在Node.js中,创建一个模块非常简单,
```js
// main.js文件
var hello = require('./hello');
hello.world();
```
    Node.js提供了exports 和 require 两个对象,其中 exports 是模块公开的接口,require用于从外部获取一个模块的接口,即所获取
    模块的 exports 对象.
```js
// hello.js文件

exports.world = function(){
    console.log('Hello World');
}
```
    以上实例中,hello.js通过 exports 对象把world作为模块的访问接口,在main.js中通过 require('./hello')加载这个模块,然后就
    可以直接访问 hello.js中exports对象的成员函数了.
    
    有时候我们只是想要把一个对象封装到模块中,格式如下:
```js
module.exports = function(){
    // ...
}

//


// hello.js
function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello' + name);
    }
}
module.exports = Hello;
```