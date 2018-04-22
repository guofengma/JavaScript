var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件");

fs.open("kyrie.txt","r+",function(err,fd){
    if(err){
        console.error(err);
    }
    console.log("文件打开成功!");
    console.log("准备读取文件!");

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }

        // 关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log('文件关闭成功');
        })
    })
})


var fs = require("fs");
console.log("准备删除文件!");

fs.unlink("input.txt",function(err){
    if(err){
        return console.error(err);
    }
    console.log("文件删除成功");
})

fs.unlink("main.txt",function(err){
    if(err){
        return console.error(err);
    }
    console.log("文件删除成功!");
})