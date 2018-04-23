
// var fs = require('fs');

// // 异步读取
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("异步读取:" + data.toString() );
// })

// // 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取:" + data.toString() );

// console.log('程序执行完毕');



// var fs = require('fs');

// console.log('准备打开文件');

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功!");
// });


// var fs = require('fs');

// console.log("准备打开文件");

// fs.open('input.txt','rs+',function(err,fd){
//     if(err){
//         console.error(err);
//     }
//     console.log("文件打开成功");
// })


var fs = require("fs");
// console.log("创建目录/tmp/test/");

// fs.mkdir("/tmp/test/",function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log("目录创建成功!");
// })

// fs.mkdir("./style",function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log("目录创建成功");
// })


console.log("读取文件目录");

fs.readdir("./style",function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})

console.log("开始删除目录");
fs.rmdir("./style",function(err){
    if(err){
        console.error(err);
    }
    console.log("删除目录成功!");
})