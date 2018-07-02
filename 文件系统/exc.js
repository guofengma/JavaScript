var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.send("Hello GET");
})

// app.post("/",(req,res) => {
//     res.send("Hello Post");
// })

// app.get("/del_user",(req,res) => {
//     res.send("删除页面");
// })

app.listen(3000);