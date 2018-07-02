// var express = require("express");
// var app = express();

// app.get('/',function(req,res){
//     res.send("Hello World!");
// })
// app.listen(3000);

// var express = require("express");
// var app = express();

// app.get("/",function(req,res){
//     res.send("Kyrie Irving");
// }).listen(4000);


// var express = require("express");
// var app = express();

// app.get("/",function(req,res){
//     res.send("Hello World!");
// })

// app.get("/customer",function(req,res){
//     res.send("customer page");
// })

// app.get("/admin",function(req,res){
//     res.send("admin page");
// })

// app.listen(3000);


// var express = require("express");
// // var http = require("http");
// // var app = express();

// // // use是express注册中间件的方法,它返回一个函数.
// // app.use(function(request,response,next){
// //     console.log("Hello World");
// //     next();
// // });
// // app.use(function(request,response,next){
// //     response.writeHead(200,{"Content-Type":"text/plain"});
// //     response.end("Hello Kyrie!");
// // });
// // http.createServer(app).listen(1337);

// var express = require("express");
// var http = require("http");
// var app = express();

// app.use(function(req,res,next){
//     if(req.url == "/"){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("welcome to the homepage");
//     }else{
//         next();
//     }
// });

// app.use(function(req,res,next){
//     if(req.url == '/about'){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("welcome to the about.html");
//     }else{
//         next();
//     }
// });

// app.use(function(req,res){
//     res.writeHead(404,{"Content-Type":"text/plain"});
//     res.end("404");
// });

// http.createServer(app).listen(1337);


// var fs = require("fs");

// var options = {
//     key:fs.readFileSync("E:/ssl/myserver.key"),
//     cert:fs.readFileSync("E://ssl/myserver.crt"),
//     passphrase:"1234"
// };

// var https = require("https");
// var express = require("express");
// var app = express();

// app.get("/",function(req,res){
//     res.send("Hello World Expressjs");
// })

// var server = https.createServer(options,app);
// server.listen(8084);
// console.log("Server is runing on port 8084");