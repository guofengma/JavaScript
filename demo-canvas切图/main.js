var canvas1 = document.getElementById("canvas1");

// 确定是否支持 getContext
if(canvas1.getContext){
    // 画布大小 300 * 200
    // 图像大小 861 * 538
    var ctx1 = canvas1.getContext("2d");
    const img = new Image();
    img.src = "./img/gd.jpg";
    img.onload = function(){
        ctx1.drawImage(img,0,0,861,538,0,0,300,200);
    }
}

var canvas2 = document.getElementById("canvas2");
if(canvas2.getContext){
    var ctx2 = canvas2.getContext("2d");
    const img = new Image();
    img.src = "./img/lzx.jpeg"; 
    img.onload = function(){
        ctx2.drawImage(img,0,0,100,100,50,50,150,150);
    }
}


// 用面向对象的方式封装
var canvas3 = document.getElementById("canvas3");

function Puzzle(){
    this.ctx = canvas3.getContext("2d");
}

Puzzle.prototype = {
    // 初始化一个方法
    init:function(url){
        var that = this;
        // 先获取到一个图像
        var img = new Image();
        img.src = url;
        img.onload = function(){
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    that.ctx.drawImage(img,j*221,i*221,221,221,j*101,i*101,100,100);
                }
            }
        }
    }
}
var puzzle = new Puzzle();
puzzle.init('./img/1.jpg');


var canvas4 = document.getElementById("canvas4");
if(canvas4.getContext){
    var ctx4 = canvas4.getContext("2d");
    var img = new Image();
    img.src = "./img/1.jpg";
    img.onload = function(){
        ctx4.drawImage(img,0,0,300,300,0,0,300,300);
    }
    // 取得图像的数据URI
    var imgURI = canvas4.toDataURL("image/png");   
    // 显示图像
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}

