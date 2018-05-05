var fs = require("fs");

// 异步读取simple.txt文件
fs.readFile("simple.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})


fs.readFile("ai.jpg",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }
})

var message = "秋风清,秋月明!落叶聚还散,寒鸦栖复惊！"
fs.writeFile("simple.txt",message,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
})


fs.writeFileSync("output.txt","早知如此绊人心,何如当初莫相识!");