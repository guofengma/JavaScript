var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on("some_event",function(){
    console.log("some_event事件触发");
});

setTimeout(function(){
    emitter.emit("some_event");
},2000);



emitter.on("someEvent",function(){
    console.log("event has occured");
})

function f(){
    console.log("start");
    emitter.emit("someEvent");
    console.log("end");
}
f();


emitter.on("msg1",function(){
    console.log("我是消息1");
})
emitter.emit("msg1");

emitter.on("msg2",function(){
    console.log("我是消息2");
})
emitter.emit("msg2");

emitter.on("msg3",function(){
    console.log("我是消息3");
})
emitter.emit("msg3");

emitter.once("msg4",function(){
    console.log("我是消息4");
})
emitter.emit("msg4");

emitter.removeAllListeners('msg1');



var callback = function(stream){
    console.log("someone connected!");
}
emitter.on("connection",callback);
emitter.removeListener("connection",callback);