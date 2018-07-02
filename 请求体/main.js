var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/get.html",(req,res) => {
    res.sendFile(__dirname + '/' + "get.html");
})

app.get("/process_get",(req,res) => {
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(3000);