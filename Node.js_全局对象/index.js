console.log('Hello Kyrie');
console.log(__filename);
console.log(__dirname);


function printHello(){
    console.log('Hello World!');
}
var time = setInterval(printHello,2000);

clearInterval(time);

console.log("Hello World");
console.info("Hello World");
console.error("Hello World");
console.warn("Hello World");
console.time()


process.on('exit',function(code){
    setTimeout(function(){
        console.log("该代码不会执行");
    },0);
    console.log('退出码为:',code);
})
console.log("程序执行结束");


process.stdout.write('Hello World!');

process.argv.forEach(function(val,index,array){
    console.log(index + ':' + val);
});

console.log(process.execPath);
console.log(process.platform);