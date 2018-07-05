/*
程序逻辑
1. 设置 canvas 满屏 
    获取窗口的 宽 和 高  赋值给 canvas元素(注意不要设置成样式)
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(w,h);

2. 窗口大小改变时让 canvas 也同时随窗口的大小改变而改变
    1. 初始状态下先把窗口的 宽高 分别赋值给 canvas 元素
    2. 在改变窗口大小的同时, 再把宽高 赋值给 canvas 元素

3. 在画布上开始绘制一个小圆
    怎么让一个小圆在画布上下落?  让圆的 纵坐标一直自增.并擦除画布

4. 采用面向对象的写法,先画一个圆,出现在画布上的随机地方,随机颜色,随机大小
    可以先定义一个函数 random (min,max);
    4.1  颜色随机,颜色不要太多,可以先选几个颜色 保存在一个数组里
    4.2  圆心位置随机,(要保证在画布范围内)
    4.3  圆的大小随机

5. 运动 运动方向随机
    5.1 小球不能超出范围,左右边界 this.x - r < 0  或者 this.x + r > w;
    5.2 ...             上下边界 this.y - r < 0  或者 this.y + r > h;
*/ 

/*
var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h;

window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
*/

/* 小球自由落体运动
var y = 10;
setInterval(function(){
    ctx.clearRect(0,0,600,600);
    ctx.beginPath();
    ctx.fillStyle="#f00";
    ctx.arc(100,y,20,0,2*Math.PI);
    // 注意要抬起画笔 才能让小球自由落体
    ctx.closePath();
    ctx.fill();
    y += 1;
},1000/60);
*/

// TODO  让300个小球运动起来

// 对上面的写法优化
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var w,h;
~~function(){
    window.onresize = arguments.callee;
    // 获取浏览器窗口视口的宽高 
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;
}();
    
// 定义一个函数,生成 min max 之间的随机数
function random(min,max){
    return Math.random()*(max-min) + min;
}
// 定义一个数组保存颜色
var colors = ["#0066CC","#FF9966","#FFFF99","#FF6666","#0099CC","#CCFFFF","#CCCCFF"];
var len = colors.length;

/*
1. 定义一个函数生成 num 个气泡
2. 定义一个数组 保存 每个气球
*/
var aBubbles = [];

// 定义一个构造函数
function Bubble(){
}
// 重新改写 Bubble的prototype 原型对象
Bubble.prototype = {
    // 初始化,画一个小圆,圆心位置随机
    init:function(){
        this.x = random(0,w);
        this.y = random(0,h);
        this.r = random(1,3);
        this.color = colors[Math.floor(random(0,len))];
        this.vx = random(-1,1);
        this.vy = random(-1,2);
    },
    draw:function(){
        // ctx.clearRect(0,0,w,h);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
    },
    move:function(){
        this.y += this.vy;
        this.x += this.vx;
        if(this.x - this.r < 0 || this.x + this.r > w){
            this.vx = -this.vx;
        }
        if(this.y - this.r < 0 || this.y + this.r > h){
            this.vy = -this.vy;
        }
        this.draw();
    }
}

var aBubbles = [];
function createBubble(num){
    for(let i = 0; i < num; i++){
        var bubble = new Bubble();
        bubble.init();
        bubble.draw();
        aBubbles.push(bubble);
    }
}
createBubble(400);



