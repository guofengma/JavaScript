<!-- TOC -->

- [1. Node.js EventEmitter](#1-nodejs-eventemitter)
    - [1.1. EventEmitter类](#11-eventemitter类)
    - [1.2. Event Emitter的实例方法](#12-event-emitter的实例方法)
    - [1.3. error事件](#13-error事件)
    - [1.4. 继承EventEmitter](#14-继承eventemitter)
    - [1.5. emit()](#15-emit)
    - [1.6. once()](#16-once)
    - [1.7. removeListener()](#17-removelistener)
    - [1.8. setMaxListeners()](#18-setmaxlisteners)
    - [1.9. removeAllListeners()](#19-removealllisteners)
    - [1.10. 事件类型](#110-事件类型)
    - [1.11. 继承EventEmitter](#111-继承eventemitter)
    - [1.12. Event Loop](#112-event-loop)

<!-- /TOC -->

# 1. Node.js EventEmitter

    Node.js所有的异步I/O操作在完成时都会发送一个事件到事件队列.
    Node.js里面的许多对象都会分发事件:一个net.Server对象在每次有新连接时分发一个事件,一个fs.readStream对象会在文件被
    打开的时候发出一个事件.所有这些产生事件的对象都是events.EventEmitter的实例.


    回调函数模式让Node可以处理异步操作.但是,为了适应回调函数,异步操作只能有两个状态:开始和结束.对于那些多状态的异步操作,
    回调函数就会无法处理.回调函数就无法处理,你不得不将异步操作拆开,分成多个阶段.每个阶段结束时,调用下一个回调函数.

    为了解决这个问题,Node提供EventEmitter接口.通过事件,解决多状态异步操作的响应问题.


## 1.1. EventEmitter类

    Event Emitter是一个接口,可以在任何对象上部署.这个接口由events模块提供.

    events模块只提供了一个对象:events.EventEmitter. EventEmitter的核心就是事件触发与事件监听器功能的封装.

    可以通过 require('events')来访问该模块.
```js
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
```
    events模块的EventEmitter是一个构造函数,可以用来生成事件发生器的实例emitter.
    然后,事件发生器的实例方法on用来监听事件,实例方法emit用来发出事件.
```js
// main.js文件
emitter.on("someEvent",function(){
    console.log("event has occured");
});

function f(){
    console.log("start");
    emitter.emit("someEvent");
    console.log("end");
}
f()

$ node main.js
// start
// event has occured
// end
```
    
    下面的实例说明 EventEmitter的用法:
```js
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

// 或者用下面的写法
var events = require('events');
var event = new events.EventEmitter();


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
```js
// event.js

var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});
EventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
})

EventEmitter.emit('someEvent','arg1参数','arg2参数');

// 执行上面的代码:
$ node event.js
listener1 arg1参数 arg2参数
listener2 arg1参数 arg2参数
```
    上面的例子中,EventEmitter为事件someEvent注册了两个事件监听器,然后触发了someEvent事件.
    运行结果中可以看到两个事件监听器回调函数被先后调用.这就是EventEmitter最简单的用法.
    EventEmitter提供了多个属性,如 on 和 emit.on函数用于绑定事件函数,emit属性用于触发一个事件.

## 1.2. Event Emitter的实例方法

    > emitter.on(name,f)    对事件name指定监听函数f
    > emitter.addListener(name,f) addListener是on方法的别名
    > emitter.once(name,f)      与On方法类似,但是监听函数f是一次性的,使用后自动移除
    > emitter.listeners(name)   返回一个数组,成员是事件name所有监听函数
    > emitter.removeListener(name,f) 移除事件name的监听函数f
    > emitter.removeAllListeners(name) 移除事件name的所有监听函数

    
    
    > addListener(event,listener)
        为指定事件添加一个监听器到监听器数组的尾部.


    > on(event,listener)
        为指定事件注册一个监听器,接收一个字符串event和一个回调函数.
    server.on('connection',function(stream){
        console.log('someone conected!');
    })


    > once(event,listener)
    为指定事件注册一个单次监听器,即监听器最多只会触发一次,触发后立刻解除该监听器.


    > removeListener(event,listener)
    移除指定事件的某个监听器,监听器必须是该事件已经注册过的监听器.
    它接受两个参数,第一个事件名称,第二个是回调函数名称.

    var callback = function(stream){
        console.log('someone connected!');
    }
    server.on('connection',callback);
    server.removeListener('connection',callback);


    removeAllListener([event])
    移除所有事件的所有监听器,如果指定事件,则移除指定事件的所有监听器

    setMaxListeners(n)
    默认情况下,EventEmitters如果你添加的监听器超过10个就会输出警告信息.

    listeners(event)
    返回指定事件的监听器数组

    emit(event,[arg1],[arg2],[...])
    按参数的顺序执行每个监听器,如果事件有注册监听返回true,否则返回 false
    
    
    类方法:
    listenerCount(emitter,event)
    返回指定事件的监听器数量.

    事件:
    newListener
        event - 字符串,事件名称
        listener - 处理事件函数

    removeListener
        event - 字符串,事件名称
        listener - 处理事件函数
    从指定监听器数组中删除一个监听器.需要注意的是,此操作将会改变处于被删监听器之后的那些监听器的索引.

```js
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕.");

// $ node main.js
// 2 个监听器监听连接事件。
// 监听器 listener1 执行。
// 监听器 listener2 执行。
// listener1 不再受监听。
// 监听器 listener2 执行。
// 1 个监听器监听连接事件。
// 程序执行完毕。
```

## 1.3. error事件

    EventEmitter定义了一个特殊的事件 error,它包含了错误的语义,我们在遇到 异常的时候通常会 触发 error 事件.
    当 error 被触发时,EventEmitter规定如果没有 响应的 监听器, node.js 会把它当作异常,退出程序并输出错误信息.
    我们一般要为会触发 error 事件的对象设置监听器,避免遇到错误后整个程序崩溃.
```js
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
```

## 1.4. 继承EventEmitter

    大多数时候我们不会直接使用 EventEmitter,而是在对象中继承它.包括fs,net http在内的,只要是支持事件响应的核心模块都是EventEmitter
    的子类.
    为什么要这样做呢?原因有两点:
    首先,具有某个实体功能的对象实现事件符合语义,事件的监听和发生应该是一个对象的方法.
    其次 JavaScript 的对象机制是基于原型的,支持部分多重继承,继承EventEmitter不会打乱对象原有的继承关系.


    eventEmitter.on()与eventEmitter.addListener()没有区别,且一个事件可以绑定多个回调函数.
    若事件队列中出现一个未绑定事件则触发error事件,若未绑定error事件则程序抛出异常结束执行.

## 1.5. emit()

    EventEmitter实例对象的emit方法,用来触发事件.它的第一个参数是事件名称,其余参数都会依次传入回调函数.
```js
var EventEmitter = require("events").EventEmitter;
var myEmitter = new EventEmitter();

var connection = function(id){
    console.log("client id:" + id);
}

myEmitter.on("connection",connection);
myEmitter.emit("connection",6);
// client id :6
```

## 1.6. once()

```js
var EventEmitter = require("events").EventEmitter;
var myEmitter = new EventEmitter();

myEmitter.once("message",function(msg){
    console.log("message:" + msg);
});
myEmitter.emit("message","this is the first message");
myEmitter.emit("message","this is the second message");
myEmitter.emit("message","welcome to nodejs");

$ node main.js
// message:'this is the first message'
```
    
## 1.7. removeListener()

    该方法用于移除回调函数.它接受两个参数,第一个是事件名称,第二个是回调函数名称.这就是说不能用于移除匿名函数.
```js
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

emitter.on('message', console.log);

setInterval(function(){
  emitter.emit('message', 'foo bar');
}, 300);

setTimeout(function(){
  emitter.removeListener('message', console.log);
}, 1000);
```

## 1.8. setMaxListeners()

    Node默认允许同一个事件最多可以指定10个回调函数.
    超过10个回调函数,会发出一个警告.这个门槛值可以通过 setMaxListeners方法改变.

    emitter.setMaxListeners(20)
    
## 1.9. removeAllListeners()

    该方法用于移除某个事件的所有回调函数.
    
## 1.10. 事件类型

    Events模块默认支持两个事件
    > newListener事件:添加新的回调函数时触发s
    > removeListener事件:移除回调时触发.
    
## 1.11. 继承EventEmitter

    大多数时候我们不会直接使用EventEmitter,而是在对象中继承它.包括fs net http在内的,只要是支持事件响应的核心模块都是
    EventEmitter的子类.
    
    原因有两点:
        首先,具有有个实体功能的对象实现事件符合含义,事件的监听和发生应该是一个对象的方法
        其次 JavaScript 的对象机制是基于原型的,支持部分多重继承,继承EventEmitter不会打乱对象原有的继承关系.
    
    1. eventEmitter.on() 与 eventEmitter.addListener() 没有区别,且一个事件可以绑定多个回调函数.
    2. 若事件队列中出现一个未绑定事件则触发error事件,若未绑定error事件则程序抛出异常结束执行.
    
    
## 1.12. Event Loop
    
    一:为什么JavaScript是单线程?
    
    JavaScript语言的一大特点就是单线程,也就是说,同一个时间只能做一件事.作为浏览器脚本语言,JavaScript的主要用途是
    与用户互动,以及操作DOM.这决定了它只能是单线程,否则会带来很复杂的同步问题.比如，假定JavaScript同时有两个线程，一个线程
    在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

    所以,为了避免复杂性,从一诞生,JavaScript就是单线程.这已经成为了这门语言的核心特征.

    I/O(input/output),即输入/输出端口.每个设备都会有一个专用的I/O地址,用来处理自己的输入输出信息.CPU与外部设备,存储器的连接
    和数据交换都需要通过接口设备来实现.


    为了利用多喝CPU的计算能力,HTML5提出Web Worker标准,允许JavaScript脚本创建多个线程,但是子线程完全受主线程控制,且不得操作DOM.
    所以,这个新标准并没有改变JavaScript单线程的本质.


    