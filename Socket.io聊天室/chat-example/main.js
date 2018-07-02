var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/",(req,res) => {
    /*
     这里发送的是一段html, 如果将整个应用的HTML代码都放到代码里,代码结构将变得很混乱.
     替代方法是新建一个 index.html 文件作为服务器响应.
    */
    // res.send("<h1>Hello World!</h1>");

    res.sendFile(__dirname + '/index.html');
});

// 通过传入 http对象初始化了 socket.io的一个实例.然后监听 connection事件来接收 sockets,并将链接信息打印到控制台.
io.on("connection",function(socket){
    console.log("a user connected");
    /*socket.on("disconnect",function(){
        console.log("user disconnected");
    })*/
    socket.on("chat message",function(msg){
        console.log("chat message:", msg);
    })
})

http.listen(3000,function(){
    console.log("listening on * 3000");
})
