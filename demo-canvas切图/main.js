var canvas1 = document.getElementById("canvas1");

// 确定是否支持 getContext
if(canvas1.getContext){
    // 画布大小 300 * 200
    // 图像大小 900 * 600
    var ctx1 = canvas1.getContext("2d");
    const img = new Image();
    img.src = "./img/gd.jpg";
    img.style.width = "900px";
    img.style.height = "600px";
    img.onload = function(){
        ctx1.drawImage(img,0,0,900,600,0,0,300,200);
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