var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");

if(canvas1.getContext){
    const ctx = canvas1.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10,10,55,50);
    ctx.fillStyle = "rgba(0,0,200,0.5)";
    ctx.fillRect(30,30,55,50);
}

if(canvas2.getContext){
    const ctx = canvas2.getContext("2d");
    ctx.fillRect(0,0,100,100);
    ctx.clearRect(25,25,50,50);
    ctx.strokeRect(30,30,40,40);
}

// 绘制三角形
if(canvas3.getContext){
    const ctx = canvas3.getContext("2d");
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
    ctx.moveTo(0,0);
    ctx.lineTo(60,0);
    ctx.lineTo(30,30);
    ctx.fill();
}

if(canvas4.getContext){
    const ctx = canvas4.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,100,80,0,2*Math.PI,false);
    ctx.moveTo(80,70);
    ctx.arc(70,70,10,0,2*Math.PI,false);
    ctx.moveTo(140,70);
    ctx.arc(130,70,10,0,2*Math.PI,false);
    ctx.moveTo(160,100);
    ctx.arc(100,100,60,0,Math.PI,false);
    ctx.stroke();
}

if(canvas5.getContext){
    const ctx = canvas5.getContext("2d");
    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(110,10);
    ctx.lineTo(60,60);
    ctx.fill();
    // 描边三角形
    ctx.beginPath();
    ctx.moveTo(10,120);
    ctx.lineTo(110,120);
    ctx.lineTo(60,60);
    ctx.closePath();
    ctx.stroke();
}

if(canvas6.getContext){
    const ctx = canvas6.getContext("2d");
    for(let i = 0; i < 4; i ++){
        for(let j = 0; j < 3; j++){
            ctx.beginPath();
            var x = 25 + j*50;      // 1 (25,25)  2 (75,25) 3 (125,25)  4 (25,75) 5 (75,75) 6 (125,75)
            var y = 25 + i*50;      
        }                               
    }
}