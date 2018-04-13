<!-- TOC -->

- [1. Node.js EventEmitter](#1-nodejs-eventemitter)
    - [1.1. EventEmitter类](#11-eventemitter类)

<!-- /TOC -->

# 1. Node.js EventEmitter

    Node.js所有的异步I/O操作在完成时都会发送一个事件到事件队列.
    Node.js里面的许多对象都会分发事件:一个net.Server对象在每次有新连接时分发一个事件,一个fs.readStream对象会在文件被
    打开的时候发出一个事件.所有这些产生事件的对象都是events.EventEmitter的实例.

## 1.1. EventEmitter类

    events模块只提供了一个对象:events.EventEmitter.EventEmitter的核心就是事件触发与事件监听器功能的封装.

    可以通过 require('events')来访问该模块.
```js
var events = require('events');
// 创建 eventEmitter对象
var eventEmitter = new events.EventEmitter();
```

    EventEmitter对象如果在实例化时发生错误,会触发error事件.当添加新的监听器时,newListener事件会触发,当监听器被移除时,
    removeListener事件被触发.
    
    下面的实例说明 EventEmitter的用法:
```js
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event',function(){
    console.log('some_event 事件触发');
});
setTimeout(function(){
    event.emit('some_event');
},1000);
```
    运行上面的代码,1s后输出了 'some_event 事件触发'.其原理是 event对象注册了事件 some_event的一个监听器,然后我们通过
    setTimeout在1s后向 event 对象发送事件 some_event, 此时会调用 some_event 的监听器.

    EventEmitter的每个事件由一个事件名和若干个参数组成,事件名是一个字符串,对于每个事件,EventEmitter支持若干个事件监听器.