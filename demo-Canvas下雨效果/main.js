/*
业务逻辑:
1. 让canvas元素的可视区域与浏览器的宽高一致.
2. 如何利用canvas绘制雨滴
    2.1 雨滴下落效果 (生成一个雨滴一直往下掉落,在掉落的过程中一直覆盖一个透明层);
    2.2 雨滴绽放效果 (当雨滴下降到一定的高度时,绘制圆)
3. 利用面向对象的方法生成雨滴
    重点: 在雨滴下降到地面时慢慢绽放时,达到一定程度的时候,再次调用 this.init() 使生成的几个50个雨滴能够一直重复利用下去.
*/

var canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var w,h;
~~(function(){
    window.onresize = arguments.callee;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
})();


// 生成一个随机数;
function random(min,max){
    return Math.random()*(max-min) + min;
}
// 定义一个构造函数,表示雨滴
function Rain(){}
// 定义一个数组保存雨滴
var array = [];

Rain.prototype = {
    constructor:Rain,
    // 初始化参数, 雨滴宽度,出现位置,半径,颜色等
    init:function(){
        this.w = random(1.5,2.5);
        this.h = random(8,12);
        this.color = "#3ff";
        this.y = 0; 
        this.yv = 3,
        this.rv = random(0.5,1.5);
        this.x = random(0,w);
        this.land = random(h*0.8,h*0.9);
        this.r = this.w/2
    },
    draw:function(){
        // 在下降到地面之前,绘制雨滴,否则绘制绽放的圆
        if(this.y < this.land){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }else{
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
            ctx.stroke();
        }
    },
    move:function(){
        if(this.y < this.land){
            this.y += this.yv;
        }else{
            if(this.r < 80){
                this.r+=this.rv;
            }else{
                this.init();
            }
        }
        this.draw();
    }
}
// 雨滴不能同时出现,需要用一个延时器
function createRain(num){
    for(let i = 0; i < num; i++){
        setTimeout(function(){
            var rain = new Rain();
            rain.init();
            rain.draw();
            array.push(rain);
        },500*i);
    }
}
createRain(50);

function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.06)";
    ctx.fillRect(0,0,w,h);
    for(item of array){
        item.move();
    }
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);


