var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

for(let i = 0; i < 2; i++){
    for(let j = 0; j < 2; j++){
        ctx.fillStyle = "skyblue";
        ctx.fillRect(j*51,i*51,50,50);
    } 
}
// 给翻页效果设置一个线性渐变
ctx.save();
var gradient = ctx.createLinearGradient(1250,25,50,50);
gradient.addColorStop(0,"#ccc");
gradient.addColorStop(0.7,"#111");
gradient.addColorStop(1,"#000");

// 绘制翻页效果的翻起来的部分,利用二次贝塞尔曲线
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.moveTo(51,0);
ctx.quadraticCurveTo(55,5,55,25);
ctx.lineTo(55,40);
ctx.arc(60,40,5,Math.PI,Math.PI/2,true);
ctx.lineTo(75,45);
ctx.quadraticCurveTo(95,45,100,50);
ctx.lineTo(50,0);
ctx.fill();
ctx.restore();

// 右上角黄色部分三角形
ctx.save();
ctx.beginPath();
ctx.fillStyle = "#f60";
ctx.moveTo(51,0);
ctx.lineTo(101,0);
ctx.lineTo(101,51);
ctx.closePath();
ctx.fill();
ctx.restore();

// 绘制new字样
ctx.globalCompositeOperation = "source-atop";
ctx.beginPath();
ctx.font = "14px Arial";
ctx.fillStyle = "#fff";
ctx.translate(78,20);
ctx.rotate((Math.PI/180)*45);
ctx.textAlign = "center";
ctx.fillText("NEW",0,0);
ctx.closePath();

// http://web.jobbole.com/93229/