// var fs = require("fs");

// console.log('准备打开文件!');

// fs.open('input.txt',"r+",function(err,fd){
//     if(err){
//         return console.log(err);
//     }
//     console.log('文件打开成功!');
// });


// console.log("准备打开文件");
// fs.open('input.txt',"r+",function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功");
// })


var fs = require("fs");

console.log("准备打开文件!");

fs.open('kyrie.txt','r',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功!");
});


fs.open("kyrie.txt",'r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功");
})


fs.open("kyrie.txt",'rs',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功");
})


fs.open("kyrie.txt",'rs+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功');
})

fs.open("kyrie.txt",'w',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件写入成功");
})


fs.open("kyrie.txt","w+",function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("文件读写成功");
});

fs.stat(__filename,function(err,stats){
    console.log(stats.isFile());    // true
})