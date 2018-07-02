
var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});

    // 解析url参数
    // 第二个参数是true,query属性会生成一个对象,如果为false,则会返回url对象上的query属性会是一个未解析,未解码的字符串,默认为false.
    var params = url.parse(req.url,true).query;
    res.write("网站名:" + params.name);
})


var http = require("http");
var querystring = require('querystring');

var postHTML = 
`
<html>
    <head><meta charset="utf-8"><title>菜鸟教程Node.js实例</title></head>
    <body>
        <form method="post">
            <p>网站名:<input name="name"></input></p>
            <p>网址:<input name="url"></input></p>
            <p><input type="submit" value="提交"></p>
        </form>
    </body>
</html>
`
http.createServer(function(req,res){
    var body = "";
    req.on("data",function(chunk){
        body += chunk;
    })

    req.on("end",function(){
        body = querystring.parse(body);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})

        if(body.name && body.url){
            res.write("网站名:" + body.name);
            res.write("网址:" + body.url);            
        }else{
            res.write(postHTML);
        }
        res.end();
    })
}).listen(3000);
console.log("程序执行完毕!");