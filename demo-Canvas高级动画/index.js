
// 长尾效果 
/*
业务逻辑:  1. 初始状态,小球静止在画布随机位置. 当鼠标进入画布时, 小球的位置随着鼠标的移动而移动
          2. 鼠标点击后,小球开始运动,碰到边界后反弹
          3. 鼠标移除canvas后,小球暂停运动
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var globalID;
var flag = false;

var ball = {
    x:100,
    y:100,
    r:30,
    color:"blue",
    vx:5,
    vy:3,
    draw:function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
function clear(){
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function draw(){
    clear();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if( (ball.x + ball.r > canvas.width) || (ball.x < ball.r) ){
        ball.vx = -ball.vx;
    }
    if( (ball.y + ball.r > canvas.height) || (ball.y < ball.r) ){
        ball.vy = -ball.vy;
    }
    globalID = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove',handle,false);
canvas.addEventListener('click',handle,false);
canvas.addEventListener('mouseout',handle,false);

function handle(event){
    var event = event || window.event;
    var type = event.type;
    switch(type){
        case "mousemove" :
        if(!flag){
            clear();
            ball.x = event.clientX;
            ball.y = event.clientY;
            ball.draw();
        }
        break;
        case "click":
        if(!flag){
            globalID = window.requestAnimationFrame(draw);
            flag = true;
        }
        break;
        case "mouseout" :
        window.cancelAnimationFrame(globalID);
        flag = false;
        break;
    }
}   

ball.draw();

// canvas.addEventListener('mousemove', function(e){
//     if (!flag) {
//       clear();
//       ball.x = e.clientX;
//       ball.y = e.clientY;
//       ball.draw();
//     }
//   });
  
// canvas.addEventListener('click',function(e){
// if (!flag) {
//     globalID = window.requestAnimationFrame(draw);
//     flag = true;
// }
// });

// canvas.addEventListener('mouseout', function(e){
//     window.cancelAnimationFrame(globalID);
//     flag = false;
// });
