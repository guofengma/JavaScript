var b = 1;
console.log(global.b);  // undefined

console.log(__filename);
console.log(__dirname);

console.time();
function m1(){
    console.log("Hello World");
}
var t = setTimeout(m1,3000);
console.timeEnd();
console.info("程序执行完毕");

clearTimeout(t);

function m2(){
    console.log("Hello Kyrie");
}
var time = setInterval(m2,2000);

clearInterval(time);

process.on("exit",function(code){
    console.log("退出码为:",code);
})


// Process属性
process.stdout.write("Hello World!");
process.argv.forEach(function(val,index,array){
    console.log(index + ':' + val);
})
console.log(process.version);
console.log(process.versions);
console.log(process.arch);
console.log(process.platform);
console.log(process.config);
console.log(process.env);
console.log(process.execPath);

// process方法
console.log(process.cwd());
console.log(process.memoryUsage());
console.log(process.abort());