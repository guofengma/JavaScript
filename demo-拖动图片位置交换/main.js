/*
业务逻辑:
1. 要让所有图片都能够拖动,需要先设置所有图片的排列方式为绝对定位.
    1.1 首先获取所有的图片
    1.2 再获取每张图片当前的 left top值 保存在一个数组里
        tips:
        1. left 和 top 值用 二维数组的方式保存
        2. 让li相对于 container 定位,而不要相对浏览器来设置定位.这样不论浏览器窗口大小是否改变,left 和 top 始终为定值.
    1.3 修改所有图片的排序方式,设为绝对定位
    1.4 把之前获取到的每张图片的 top 和 left 值 再赋值给 每张图片.
2. 让每张图片可以拖动
    2.1 按下鼠标时,鼠标在图片上的点为  x1,y1
    2.2 鼠标松开时,鼠标在图片上的点为  x2,y2
    2.3 图片被拖动后, 图片的left 为 图片的初始x值 + x2 - x1
                           top 为 图片的初始y值 + y2 - y1
    2.4 图片点击后设置其 z-index 最大, 被拖动的元素总是在最上层,鼠标松开后返回为原值.
3. 碰撞检测
    3.1 当鼠标进入到了某个元素的 范围内, 这是碰撞检测的临界点
    3.2 互相交换两个元素的 left 和 top 值.
*/
// 获取所有图片的父元素
var oContainer = document.getElementById("container");
// 获取所有图片的父级li
var aLi = document.querySelectorAll("li");
// 声明一个数组,用来保存 left 和 top
var array = [];
var len = aLi.length;

// 获取每张图片的left 和 top 值
// ? 这里的i 用 var 声明会报错
for(let i = 0; i < len; i++){
    array.push([aLi[i].offsetLeft,aLi[i].offsetTop]);
    setTimeout(function(){
        aLi[i].style.position = "absolute";
        aLi[i].style.left = array[i][0] + "px";
        aLi[i].style.top = array[i][1] + "px";
        // 初始状态的图片间距是用 margin 来设置的, 后改用 position 设置图片间距后需要清除 margin
        aLi[i].style.margin = "0";
    },0);
}
// 给页面的元素设置事件监听
oContainer.addEventListener("mousedown",drag,false);
document.addEventListener("mousemove",drag,false);
document.addEventListener("mouseup",drag,false);

var x1,y1,startX,startY,x2,y2,deltaX,deltaY;
// 设置事件分流,默认没有点中元素
var toggle = false;
// 设置一个变量用于保存点击下去的目标图片的父级,初始值为null
var ele = null;

function drag(event){
    var event = event || window.event;
    switch(event.type){
        case "mousedown" :
        toggle = true;
        if(event.target.parentNode.tagName == "LI"){
            ele = event.target.parentNode;
            console.log(ele);
            startX = ele.offsetLeft;
            startY = ele.offsetTop;
            x1 = event.clientX;
            y1 = event.clientY;
            ele.style.zIndex = 100;
            console.log(event);
        }
        break;
        case "mousemove" :
        if(toggle){
            event.preventDefault();
            x2 = event.clientX;
            y2 = event.clientY;
            ele.style.left = startX + x2 - x1 + "px";
            ele.style.top = startY + y2 - y1 + "px";

            // 在移动的时候进一步判断,当鼠标的位置 达到了某个元素的范围内的时候 进行位置交换
            deltaX = x2 - oContainer.offsetLeft;
            deltaY = y2 - oContainer.offsetTop;
            console.log(deltaX,deltaY);
        }
        break;
        case "mouseup" :
        toggle = false;
        ele.style.zIndex = 1;
        break;
    }
}
