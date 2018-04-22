// // var fs = require("fs");

// // console.log('准备打开文件!');

// // fs.open('input.txt',"r+",function(err,fd){
// //     if(err){
// //         return console.log(err);
// //     }
// //     console.log('文件打开成功!');
// // });


// // console.log("准备打开文件");
// // fs.open('input.txt',"r+",function(err,fd){
// //     if(err){
// //         return console.error(err);
// //     }
// //     console.log("文件打开成功");
// // })


// var fs = require("fs");

// console.log("准备打开文件!");

// fs.open('kyrie.txt','r',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功!");
// });


// fs.open("kyrie.txt",'r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功");
// })


// fs.open("kyrie.txt",'rs',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功");
// })


// fs.open("kyrie.txt",'rs+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log('文件打开成功');
// })

// fs.open("kyrie.txt",'w',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件写入成功");
// })


// fs.open("kyrie.txt","w+",function(err,fd){
//     if(err){
//         return console.log(err);
//     }
//     console.log("文件读写成功");
// });

// fs.stat(__filename,function(err,stats){
//     console.log( stats.isFile() );  // true
// });


var fs = require("fs");
console.log("准备打开文件!");

fs.stat('kyrie.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("读物文件信息成功!");

    // 检测文件类型
    console.log("是否为文件(isFile)?" + stats.isFile() );
    console.log("是否为目录(isDirectory)?" + stats.isDirectory() );
});



// 异步打开文件
fs.readFile('kyrie.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("异步读取:" + data.toString() );
});

// 同步读取文件
var data = fs.readFileSync('kyrie.txt');
console.log("同步读取:" + data.toString() );
console.log("程序执行完毕!");


// 打开文件
// fs.open(path,flags[,mode],callback)

console.log("准备打开文件!");

fs.open("kyrie.txt","r",function(err,fd){
    if(err){
        console.error(err);
    }
    console.log("文件打开成功");
});


fs.stat("kyrie.txt",function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log("读读取文件信息成功!");

    // 检测文件类型
    console.log("是否为文件(isFile)?" + stats.isFile() );
});
