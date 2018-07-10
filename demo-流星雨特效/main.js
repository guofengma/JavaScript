/*
业务逻辑
1. 先获取canvas元素, 设置其和屏幕大小等宽高
    1.1 当屏幕大小变化时,canvas也能随时屏幕大小改变而改变
    1.2 设置canvas背景颜色为夜空的颜色
2. 利用面向对象的思想, 在页面上随机位置绘制 多个原点,代表星星
2.1 星星的大小随机,位置随机,颜色为蓝色两色闪动
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");   
var w,h;

~~(function(){
    window.onresize = arguments.callee;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
})();

// 定义一个函数,生成 min - max 之间的随机数
function random(min,max){
    return Math.random()*(max-min) + min;
}
// 定义一个数组表示星星的颜色
var colors = ["#2d256b","#e9f1f7","#776592"];

function Star(){
}

Star.prototype = {
    // 初始化星星
    init:function(){
        this.x = random(0,w);
        this.y = random(0,h);
        this.r = random(0.5,2);
        this.color = colors[Math.floor(random(0,3))];
    },
    draw:function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        ctx.fill();
        ctx.closePath();
    }
}

function createStars(num){
    for(let i = 0; i < num; i++){
        var star = new Star();
        star.init();
        star.draw();
    }
}
createStars(300);