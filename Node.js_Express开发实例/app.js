// var express = require("express");
// var app = express();
// var path = require("path");
// // 加载hbs模块
// var hbs = require("hbs");

// // 加载数据模块
// var blogEngine = require("./blog");

// 指定模板文件的后缀名为 html
// app.set("view engine","html");

// // 运行hbs模块
// app.engine("html",hbs.__express);

// app.use(express.bodyParser());

// app.get("/",function(req,res){
//     res.render("index",{title:"最近文章",entries:blogEngine.getBlogEntries()});
// })
// app.get("/about",(req,res) => {
//     res.render('about',{title:"自我介绍"});
// })
// app.get("/article/:id",(req,res) => {
//     var entry = blogEngine.getBlogEntry(req.params.id);
//     res.render("article",{title:entry.title,blog:entry});
// })

// app.listen(3000);

// 设定express实例的参数

//设定port变量,意为访问端口

// app.use(express.favicon());
// app.use(express.logger("dev"));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

// 设定静态文件目录
// app.use(express.static(path.join(__dirname,"public")));

// 监听事先设定的端口(3000)
// app.listen(app.get("port"));

// app.get("/",function(req,res){
//     res.send("Hello World!");
// })


// 如果需要指定HTTP头信息,回调函数就必须换一种写法,要使用setHeader方法与end方法.
// app.get("/",function(req,res){
//     var body = "Hello World!";
//     res.setHeader("Content-Type","text/plain");
//     res.setHeader("Content-Length",body.length);
//     res.end(body);
// })

// 指定特定路径,返回一个JSON字符串.
// app.get("/api",function(req,res){
//     res.send({name:"张三",age:40});
// })

// 也可以把app.get的回调函数,封装成模块.
// var api = require("./routes/api");
// app.get("/api",api.index);

// // 静态网页模板

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/views/index.html");
// })

// app.get("/about",function(req,res){
//     res.sendFile(__dirname + "/views/about.html");
// })

// app.get("/article",(req,res) => {
//     res.sendFile(__dirname + "/views/article.html");
// })

// app.listen(3000);

// 上面代码表示,三个路径分别对应 views 目录中三个模板:index.html about.html article.html sendFile专门用于发送文件.


var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.send("首页");
})

router.get("/about",function(req,res){
    res.send("关于");
})

app.use("/",router);