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


var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hello World!");
})

app.get("/customer",function(req,res){
    res.send("customer page");
})

app.get("/admin",function(req,res){
    res.send("admin page");
})

app.listen(3000);