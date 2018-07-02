
var path = require("path");

// 格式化路径
console.log("normalization" + path.normalize("/test/test1//2slashes/12lash/tab/..."));

// 连接路径
console.log("join path:" + path.join('/test','test1','style.css'));

// 转换为绝对路径
console.log("resolve:" + path.resolve("path.js"));

console.log("转换为绝对路径" + __filename);

console.log("路径中文件的后缀名:" + path.extname("main.js"));

console.log("返回路径字符串的对象:" + path.parse(__filename) );