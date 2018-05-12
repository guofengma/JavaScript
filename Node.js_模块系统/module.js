// var m = require("./main1.js");
// m("这是自定义模块");

// var a = require("./main1");
// a.print("输出自定义对象");

// var jquery = require("jquery");
// exports.$ = jquery;
// console.log(module);
// console.log(module.parent); // null
// console.log(module.filename);
// console.log(module.id);
// console.log(module.loaded);


// var invisible = function(){
//     console.log("invisible");
// }

// exports.message = "hi";
// exports.say = function(){
//     console.log(message);
// }

// module.exports = function(){
//     console.log("hello world");
// }

// require("./module.js")();


var counter = 3;

function incCounter(){
    counter++;
}

module.exports = {
    counter:counter,
    incCounter:incCounter,
}