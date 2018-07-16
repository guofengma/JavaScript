// 设置圆心  100,100  半径80 
// 圆周运动轨迹 (x-100)平方 + (y-100)平方 = 80的平方
// Math.sin() 和 Math.cos() 的参数是弧度,一个圆的弧度是 2PI ,1度对应 PI/180 弧度

// 半径为100, 坐标为 (300,300) 物体与圆心的初始角度为0

var r1 = 100;
var r2 = 140;
var x = 250;
var y = 250;
var angle1 = 0;
var angle2 = 10;
var oBox1 = document.querySelector(".box1");
var oBox2 = document.querySelector(".box2");

setInterval(function(){

    angle1+=2;
    angle2+=3;

    var a1 = Math.sin(angle1*Math.PI/180)*r1;
    var b1 = Math.cos(angle1*Math.PI/180)*r1;

    var a2 = Math.sin(angle2*Math.PI/180)*r2;
    var b2 = Math.cos(angle2*Math.PI/180)*r2;

    oBox1.style.left = x + a1 + 'px';
    oBox1.style.top = y + b1 + 'px';

    oBox2.style.left = x + a2 + 'px';
    oBox2.style.top = y + b2 + 'px';

},20)



// 圆心 140 140  半径 100  初始角度为num 

var r = 100;
var num = 0;
var x1 = 140;
var y1 = 140;
var Son = document.querySelector(".son");

setInterval(function(){
    num++;
    var a = Math.sin(num*Math.PI/180)*r;
    var b = Math.cos(num*Math.PI/180)*r;

    Son.style.left = b + x1 + 'px';
    Son.style.top = a + y1 + 'px';

},10)

// 上面两种写法会出现两种结果, 第一种写法是逆时针旋转,第二种写法是顺时针旋转