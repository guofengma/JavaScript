var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get("/post.html",(req,res) => {
    res.sendFile(__dirname + '/' + post.html);
})

app.post("/process_post",urlencodedParser,(req,res) => {
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(2000);