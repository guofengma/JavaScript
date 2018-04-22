var fs = require("fs");

console.log("准备写入文件");

fs.writeFile("input.txt","我是通过fs.writeFile写入文件的内容",function(err){
    if(err){
        return console.log(err);
    }
    console.log("数据写入成功！");
    console.log("---------我是分割线---------");
    console.log("读取写入的数据");

    fs.readFile("input.txt",function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("异步读取文件数据:" + data.toString());
    });
});



fs.writeFile("main.txt","我是通过fs.writeFile读取数据,读取的文件不存在",function(err){
    if(err){
        return console.error(err);
    }
    // 写入数据
    console.log("数据写入成功");
    // 读取数据
    console.log("开始读取写入的数据");
    fs.readFileSync("main.txt",function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("同步读取文件数据" + data.toString() );
    })
})


var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件!");

fs.open("kyrie.txt","r+",function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("文件打开成功");
    console.log("准备读取文件:");
    fs.read(fd,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes + "字节被读取");

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }
    })
})