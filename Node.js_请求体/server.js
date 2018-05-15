var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use( multer({dest:'/tmp/'}).array("image") );

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post("/file_upload",(req,res) => {
    console.log( req.files[0] );    // 上传的文件信息
    var des_file = __dirname + '/' + req.files[0].originalname;

    fs.readFile( req.files[0].path,(err,data) => {
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                response = {
                    message:"File uploaded successfully",
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    } )
});

app.listen("8000",'localhost');