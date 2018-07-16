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

var box3 = document.getElementById("box3");
if(box3.getContext){
    const ctx = box3.getContext("2d");
    const gradient1 = ctx.createRadialGradient(45,45,10,52,50,30);
    gradient1.addColorStop(0,"#a7d30c");
    gradient1.addColorStop(0.9,"#019f62");
    gradient1.addColorStop(1,"rgba(1,159,98,0)");

    const gradient2 = ctx.createRadialGradient(105,105,20,112,120,50);
    gradient2.addColorStop(0,"#ff5f98");
    gradient2.addColorStop(0.75,"#ff0188");
    gradient2.addColorStop(1,"rgba(255,1,136,0)");

    const gradient3 = ctx.createRadialGradient(95,15,15,102,20,40);
    gradient3.addColorStop(0,"#00c9ff");
    gradient3.addColorStop(0.8,"#00b5e2");
    gradient3.addColorStop(1,"rgba(0,201,255,0)");

    const gradient4 = ctx.createRadialGradient(0,150,50,0,140,90);
    gradient4.addColorStop(0,"#f4f201");
    gradient4.addColorStop(0.8,"#e4c700");
    gradient4.addColorStop(1,"rgba(288,199,0,0)");

    // 画图,起点稍微偏离终点,这样可以达到一种球状3D效果。
    ctx.fillStyle = gradient4;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = gradient3;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = gradient2;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = gradient1;
    ctx.fillRect(0,0,150,150);
}

var box4 = document.getElementById("box4");
if(box4.getContext){
    const ctx = box4.getContext("2d");
    var img = new Image();
    img.src = "./imgs/jay.png";
    img.onload = function(){
        var ptrn = ctx.createPattern(img,"repeat");
        ctx.fillStyle = ptrn;
        ctx.fillRect(0,0,150,150);
    }
}

var box5 = document.getElementById("box5");
if(box5.getContext){
    const ctx = box5.getContext("2d");
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 2;

    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "Black";
    ctx.textAlign = "start";
    ctx.textBaseline="bottom";
    ctx.fillText("Sample String",0,75);
}

var box6 = document.getElementById("box6");
if(box6.getContext){
    const ctx = box6.getContext("2d");
    var jay = document.getElementById("jay");
    jay.onload = function(){
        var patrn = ctx.createPattern(jay,"no-repeat");
        ctx.fillStyle = patrn;
        ctx.fillRect(0,0,150,150);
    }
}

var box7 = document.getElementById("box7");
if(box7.getContext){
    const ctx = box7.getContext("2d");
    var jay = document.getElementById("jay");
    jay.onload = function(){
        var ptn = ctx.createPattern(jay,"no-repeat");
        ctx.fillStyle = ptn;
        ctx.fillRect(0,0,350,281);
    }
}

var item1 = document.getElementById("item1");
if(item1.getContext){
    const ctx = item1.getContext("2d");
    ctx.font = "20px serif";
    ctx.fillText("Hello World",10,20);

    ctx.font = "22px serif";
    ctx.fillText("Kyrie Irving",10,60);

    ctx.font = "30px 宋体";
    ctx.strokeText("Lebron James",10,100);
}

var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");


if(item2.getContext){
    const ctx = item2.getContext("2d");
    ctx.font = "24px serif";
    ctx.strokeStyle = "#f00";
    ctx.strokeText("Hello world", 10, 50);
}

if(item3.getContext){
    const ctx = item3.getContext("2d");
    var img = new Image();
    img.onload = function(){
        for(let i = 0; i < 2; i++){
            for(let j = 0; j < 2; j++){
                ctx.drawImage(img,200*j,200*i,200,200);
            }
        }
    }
    img.src = "./imgs/jay.jpg";
}


if(item4.getContext){
    const ctx = item4.getContext("2d");
    ctx.fillRect(0,0,150,150);
    ctx.save();
    ctx.fillStyle = "#f00";
    ctx.fillRect(15,15,120,120);
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30,30,90,90);
    ctx.restore();
    ctx.fillRect(45,45,60,60);
    ctx.restore();
    ctx.fillRect(60,60,30,30);
}

// 判断每层圆 每层圆的个数  颜色 角度之间的关系 跟什么参数挂钩
var item5 = document.getElementById("item5");
if(item5.getContext){
    const ctx = item5.getContext("2d");
    ctx.translate(75,75);
    for(let i = 1; i < 6; i++ ){
        ctx.save();
        ctx.fillStyle = "rgb("+ (51*i) + "," + (255-51*i) +",255)";
        for(let j = 0; j < i*6; j++){
            ctx.beginPath();
            ctx.rotate(Math.PI*2 / (i*6));
            ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
            ctx.fill();
        }
        ctx.restore();
    }
}

var item6 = document.getElementById("item6");
if(item6.getContext){
    const ctx = item6.getContext("2d");
    ctx.fillRect(0,0,150,150);
    ctx.translate(75,75)
    ctx.beginPath();
    ctx.arc(0,0,60,0,Math.PI*2,false);
    ctx.clip();

    var lingrad = ctx.createLinearGradient(0,-75,0,75);
    lingrad.addColorStop(0,"#232256");
    lingrad.addColorStop(1,"#143778");
    ctx.fillStyle = lingrad;
    ctx.fillRect(-75,-75,150,150);

    for (var j=1;j<50;j++){
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.translate(75-Math.floor(Math.random()*150),
                      75-Math.floor(Math.random()*150));
        drawStar(ctx,Math.floor(Math.random()*4)+2);
        ctx.restore();
    }
}
// 画五角星
function drawStar(ctx,r){
    ctx.save();
    ctx.beginPath()
    ctx.moveTo(r,0);
    for (var i=0;i<9;i++){
        ctx.rotate(Math.PI/5);
        if(i%2 == 0) {
            ctx.lineTo((r/0.525731)*0.200811,0);
        } else {
            ctx.lineTo(r,0);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// imageData
// 数组的长度等于 画布的 长*宽*4
var item7 = document.getElementById("item7");
if(item7.getContext){
    const ctx = item7.getContext("2d");
    var myImageData = ctx.getImageData(0,0,item7.width,item7.height);
    console.log(myImageData);
    console.log(myImageData.data);
}

