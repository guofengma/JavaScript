// var http = require("http");

// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.write("Hello World!");
//     res.end();
// }).listen(3000,'127.0.0.1');

// console.log("Server runing on the port 8080");


// 另一种写法

// function onRequest(request,response){
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("Hello World!");
//     response.end();
// }
// http.createServer(onRequest).listen(3000,"127.0.0.1");


// var http = require("http");
// var fs = require("fs");

// http.createServer((req,res) => {
//     fs.readFile("data.txt","utf8",function readData(err,data){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end(data);
//     });
// }).listen(2000,'127.0.0.1');



// var http = require("http");

// http.createServer((req,res) => {
//     if(req.url == "/"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write("Welcome to the home page");
//         res.end();
//     }
//     else if(req.url == "/about"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write("Welcome to the about page");
//         res.end();
//     }else{
//         res.writeHead(404,{"Content-Type":"text/plain"});
//         res.write("404 error!");
//         res.end();
//     }
// }).listen(8000,"localhost");


// var querystring = require("querystring");
// var postData = '';

// request.addListener("data",function(postDataChunk){
//     postData += postDataChunk;
// });
// request.addListener("end",function(){
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("You sent the text:" + querystring.parse(postData).text);
//     response.end();
// })


// var http = require("http");
// http.createServer(function(req,res){
//     var content = '';

//     req.on("data",function(chunk){
//         content += chunk;
//     });

//     req.on("end",function(){
//         res.writeHead(200,{"Content-Type":"text/palin"});
//         res.write("you have sent:" + content);
//         res.end();
//     })
// }).listen(8000,'localhost');

// var querystring = require("querystring");
// console.log( querystring.stringify({foo:'bar',baz:'qux'}) );

var querystring = require("querystring");
console.log(querystring.stringify({"firstname":"kyrie","lastname":"irving","age":"26"}));


console.log(querystring.parse("name1=value1&name2=value2&name3=value3"));