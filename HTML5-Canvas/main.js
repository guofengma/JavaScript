var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");
var canvas7 = document.getElementById("canvas7");
var canvas8 = document.getElementById("canvas8");
var canvas9 = document.getElementById("canvas9");
var canvas10 = document.getElementById("canvas10");
var canvas11 = document.getElementById("canvas11");
var canvas12 = document.getElementById("canvas12");
var canvas13 = document.getElementById("canvas13");


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
            var radius = 20;
            var startAngle = 0;
            var endAngle = Math.PI + (Math.PI*j)/2;
            var anticlockwise = i%2 == 0 ? false : true;
            ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise); 
            if(i > 1){
                ctx.fill();
            }else{
                ctx.stroke()
            }
        }                               
    }
}

// 二次贝塞尔曲线
if(canvas7.getContext){
    const ctx = canvas7.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke()
}

// 三次贝塞尔曲线
if(canvas8.getContext){
    const ctx = canvas8.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
    ctx.strokeRect(100,100,100,100);
}

// 封装的一个用户绘制圆角矩形的函数.
function roundedRect(ctx,x,y,width,height,radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
}

if(canvas9.getContext){
    const ctx = canvas9.getContext("2d");
    var rectangle = new Path2D();
    rectangle.rect(10,10,50,50);

    var circle = new Path2D();
    circle.moveTo(125,35);
    circle.arc(100,35,25,0,2*Math.PI,false);

    ctx.stroke(rectangle);
    ctx.fill(circle);
    roundedRect(ctx,200,10,50,50,8);
}

// 绘制一个调色板 fillStyle 填充颜色
if(canvas10.getContext){
    const ctx = canvas10.getContext("2d");
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            ctx.fillStyle = "rgb(" + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*j)+",0)";
            ctx.fillRect(j*25,i*25,25,25);
        }
    }
}
// 描边颜色
if(canvas11.getContext){
    const ctx = canvas11.getContext("2d");
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            ctx.strokeStyle = "rgb("+ Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*j) + ",0)"
            ctx.beginPath();
            ctx.arc(12.5+30*j,12.5+30*i,12.5,0,Math.PI*2,false);
            ctx.stroke();
        }
    }
}

// 设置透明度
if(canvas12.getContext){
    const ctx = canvas12.getContext("2d");
    ctx.fillStyle = "#fd0";
    ctx.fillRect(0,0,75,75);
    ctx.fillStyle = "#6c0";
    ctx.fillRect(75,0,75,75);
    ctx.fillStyle = "#09f";
    ctx.fillRect(0,75,75,75);
    ctx.fillStyle = "#f30";
    ctx.fillRect(75,75,75,75);

    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.2;
    for(let i = 0; i < 7; i++){
        ctx.beginPath();
        ctx.arc(75,75,10*i + 10,0,Math.PI*2,false);
        ctx.fill();
    }
}

if(canvas13.getContext){
    const ctx = canvas13.getContext("2d");
    ctx.fillStyle = "rgb(255,221,0)";
    ctx.fillRect(0,0,150,37.5);
    ctx.fillStyle = "rgb(102,204,0)";
    ctx.fillRect(0,37.5,150,37.5);
    ctx.fillStyle = "rgb(255,51,0)";
    ctx.fillRect(0,75,150,37.5);
    ctx.fillStyle = "rgb(0,153,255)";
    ctx.fillRect(0,112.5,150,37.5);

    // for(let i = 0; i < 10; i++){
    //     for(let j = 0; j < 4; j++){
    //         ctx.fillStyle = "rgba(255,255,255,"+(i+1)/10+")";
    //         ctx.fillRect(5+14*i,5+37.5*j,14,27.5); 
    //     }
    // }
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 10; j++){
            ctx.fillStyle = "rgba(255,255,255,"+(j+1)/10+")";
            ctx.fillRect(5+14*j,5+37.5*i,14,27.5);
        }
    }
}

var canvas14 = document.getElementById("canvas14");
if(canvas14.getContext){
    const ctx = canvas14.getContext("2d");
    for(let i = 0; i < 10; i ++){
        ctx.lineWidth = i + 1;
        ctx.beginPath();
        ctx.moveTo(5+i*14,5);
        ctx.lineTo(5+i*14,140);
        ctx.stroke();
    }
}

var canvas15 = document.getElementById("canvas15");
if(canvas15.getContext){
    const ctx = canvas15.getContext("2d");
    var lineCap = ["butt","round","square"];
    // 创建路径
    ctx.strokeStyle = "#09f";
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(140,10);
    ctx.moveTo(10,140);
    ctx.lineTo(140,140);
    ctx.stroke();

    ctx.strokeStyle = "#000";
    for(let i = 0; i < lineCap.length; i++){
        ctx.lineWidth = 15;
        ctx.lineCap = lineCap[i];
        ctx.beginPath();
        ctx.moveTo(25+i*50,10);
        ctx.lineTo(25+i*50,140);
        ctx.stroke();
    }
}

var canvas16 = document.getElementById("canvas16");
if(canvas16.getContext){
    const ctx = canvas16.getContext("2d");
    let lingrad = ctx.createLinearGradient(0,0,0,150);
    lingrad.addColorStop(0,"white");
    lingrad.addColorStop(1,"black");
    ctx.fillStyle = lingrad;
    ctx.fillRect(0,0,150,150);
}

var box1 = document.getElementById("box1");
if(box1.getContext){
    const ctx = box1.getContext("2d");
    var lingrad = ctx.createLinearGradient(0,0,0,150);
    lingrad.addColorStop(0,"#00abeb");
    lingrad.addColorStop(0.5,"#fff");
    lingrad.addColorStop(0.5,"#26c000");
    lingrad.addColorStop(1,"#fff");
    ctx.fillStyle = lingrad;
    ctx.fillRect(0,0,150,150);

    var lingrad1 = ctx.createLinearGradient(0,50,0,95);
    lingrad1.addColorStop(0.5,"#000");
    lingrad1.addColorStop(1,"rgba(0,0,0,0)");
    ctx.strokeStyle = lingrad1;
    ctx.strokeRect(50,50,50,50);
}

var box2 = document.getElementById("box2");
if(box2.getContext){
    const ctx = box2.getContext("2d");
    var gradient = ctx.createRadialGradient(75,75,10,75,75,75);
    gradient.addColorStop(0,"red");
    gradient.addColorStop(1,"skyblue");
    ctx.fillStyle = gradient;
    // ctx.fillRect(0,0,150,150);
    ctx.beginPath();
    ctx.arc(75,75,75,0,2*Math.PI,false);
    ctx.fill();
}