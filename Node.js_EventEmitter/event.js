// var EventEmitter = require("events").EventEmitter;
// var emitter = new EventEmitter();


// // 监听器1
// var listener1 = function listener1(){
//     console.log("监听器 listener1 执行.");
// }

// // 监听器2
// var listener2 = function listener2(){
//     console.log("监听器 listener2 执行");
// }

// // 绑定connection事件,处理函数为 listener1
// emitter.on("connection",listener1);

// // 绑定connection事件,处理函数为 listener2
// emitter.on("connection",listener2);

// var eventListeners = require("events").EventEmitter.listenerCount(emitter,"connection");
// console.log(eventListeners + "个监听器连接");

// // 处理 connection 事件
// emitter.emit("connection");

// // 移除绑定的listener1函数
// emitter.removeListener("connection",listener1);
// console.log("listener1不再受监听");

// emitter.emit("connection");

// var eventListeners = require("events").EventEmitter.listenerCount(emitter,"connection");
// console.log(eventListeners + "个监听器连接事件");

// console.log("程序执行完毕");

// var connection = function(id){
//     console.log("client id:" + id);
// }

// emitter.on("connection",connection);
// emitter.emit("connection",5);
// // client id: 5

// emitter.once('message',function(msg){
//     console.log("message" + msg);
// });

// emitter.emit("message","this is the first message");
// emitter.emit("message","this is the second message");
// emitter.emit("message","welcome to nodejs");


var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on("message",console.log);

setInterval(function(){
    emitter.emit("message","foo bar");
},300);

setTimeout(function(){
    emitter.removeListener("message",console.log);
},1000);


function onlyOnce(){
    console.log("you'will nerver see this again");
    emitter.removeListener("firstConnection",onlyOnce);
}
emitter.on("firstConnection",onlyOnce);