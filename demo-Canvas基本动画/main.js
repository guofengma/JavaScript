var canvas1 = document.getElementById("canvas1");
if(canvas1.getContext){
    const ctx = canvas1.getContext("2d");
    
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();

    function init(){
        sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
        moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
        earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
        window.requestAnimationFrame(draw);
    }

    function draw(){
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0,0,300,300);
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.strokeStyle = "rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150,150);

    // Earth
    var time = new Date();
    ctx.rotate( (2*Math.PI/60)*time.getSeconds() + (2*Math.PI/60000)*time.getMilliseconds() );
    ctx.translate(105,0);
    ctx.fillRect(0,-12,50,24);
    ctx.drawImage(earth,-12,12);

    // Moom
    ctx.save();
    ctx.rotate( (2*Math.PI/6)*time.getSeconds() + (2*Math.PI/6000)*time.getMilliseconds() );
    ctx.translate(0,28.5);
    ctx.drawImage(moon,-3.5,-3.5);
    ctx.restore();
    ctx.restore();
    
    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false);
    ctx.stroke();
    
    ctx.drawImage(sun,0,0,300,300);
    window.requestAnimationFrame(draw);
    }
    init();
}

var canvas2 = document.getElementById("canvas2");
if(canvas2.getContext){
    const ctx = canvas2.getContext("2d");
    const ball = {
        x:25,
        y:25,
        r:25,
        vx:5,
        vy:2,
        color:"blue",
        draw:function(){
            ctx.clearRect(0,0,canvas2.width,canvas2.height);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
            ctx.fill();
        }
    }
    function move(){
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;

        if( (ball.x + ball.r > canvas2.width) || (ball.x < ball.r) ){
            ball.vx = -ball.vx;
        }
        if( (ball.y + ball.r > canvas2.height) || (ball.y < ball.r) ){
            ball.vy = -ball.vy;
        }
        window.requestAnimationFrame(move);
    }
    window.requestAnimationFrame(move);
}

// 面向对象的方法,利用H5新的API requestAnimationFrame 并且给运动添加一个句柄
var canvas3 = document.getElementById("canvas3");
const ctx = canvas3.getContext("2d");

var Ball = function(){};

Ball.prototype = {
    constructor:Ball,
    init:function(){
        this.x = 25;
        this.y = 25;
        this.r = 25;
        this.color1 = "skyblue";
        this.color2 = "blue";
        this.vx = 5;
        this.vy = 3;
    },
    draw:function(){
        ctx.fillStyle = this.color1;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        ctx.fill();
    },
    move:function(){
        this.draw();
        this.x += this.vx;
        this.y += this.vy;
        if( (this.x + this.r > canvas3.width) || (this.x < this.r) ){
            this.vx = -this.vx;
        }
        if( (this.y + this.r) > canvas3.height || (this.y < this.r) ){
            this.vy = -this.vy;
        }
    }
}
var orb = new Ball();
orb.init();
orb.draw();
var globalId;
function animate(){
    ctx.clearRect(0,0,canvas3.width,canvas3.height);
    orb.move();
    globalId = window.requestAnimationFrame(animate);
}

// 给画布添加事件句柄,当鼠标移动到画布里面时,小球开始运动,否则运动暂停.
canvas3.addEventListener('mouseenter',handle,false);
canvas3.addEventListener('mouseout',handle,false);

function handle(event){
    var event = event || window.event;
    var type = event.type;
    switch(type){
        case "mouseenter" :
        globalId = window.requestAnimationFrame(animate);
        break;
        case "mouseout" :
        window.cancelAnimationFrame(globalId);
        break;
    }
}

