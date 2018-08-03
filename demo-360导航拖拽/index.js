var oContainer = document.querySelector(".container");
var aLi = document.querySelectorAll("li");
var len = aLi.length;
// 定义一个数组用来存储每张图片的offsetLeft 和 offsetTop 值
var arr = [];
for(let i = 0; i < len; i++){
    arr.push([aLi[i].offsetLeft,aLi[i].offsetTop]);
    setTimeout(() => {
        aLi[i].style.position = 'absolute';
        aLi[i].style.left = arr[i][0] + 'px';
        aLi[i].style.top = arr[i][1] + 'px';
        aLi[i].style.margin = '0';
    },0);
};

document.addEventListener('mousedown',drag,false);
document.addEventListener('mousemove',drag,false);
document.addEventListener('mouseup',drag,false);
// 定义函数节流,默认为false.
var flag = false;
// 定义点击到的目标元素
var ele = null;
// 定义碰撞到的目标元素
var globalEle = null;
var startX,startY,x1,y1,y2,y2;
var zIndex = 1;

function drag(event){
    var event = event || window.event;
    event.preventDefault();
    switch(event.type){
        case 'mousedown' :
        if(event.target.parentNode.tagName == "LI"){
            flag = true;
            ele = event.target.parentNode;
            startX = ele.offsetLeft;
            startY = ele.offsetTop;
            x1 = event.clientX;
            y1 = event.clientY;
            ele.style.zIndex = 666;
        }
        break;
        case 'mousemove' :
        if(flag){
            x2 = event.clientX;
            y2 = event.clientY;
            ele.style.left = startX + x2 - x1 + 'px';
            ele.style.top = startY + y2 - y1 + 'px';
            var deltaX = x2 - oContainer.offsetLeft;
            var deltaY = y2 - oContainer.offsetTop;
            console.log(deltaX,deltaY);
            for(let i = 0; i < len; i++){
                aLi[i].style.transform = "scale(1.0)";
                if(deltaX > aLi[i].offsetLeft && deltaX < aLi[i].offsetLeft + 180 && 
                    deltaY > aLi[i].offsetTop && deltaY < aLi[i].offsetTop + 120 && ele !== aLi[i]){
                    aLi[i].style.transform = "scale(1.05)";
                    globalEle = aLi[i];
                }
            }
        }
        break;
        case "mouseup" :
        document.onmousemove = null;
        flag = false;
        ele.style.zIndex = 1;
        if(globalEle){
            ele.style.left = globalEle.offsetLeft + 'px';
            ele.style.top = globalEle.offsetTop + 'px';
            globalEle.style.left = startX + 'px';
            globalEle.style.top = startY + 'px';
            globalEle = null;
        }else{
            ele.style.left = startX + 'px';
            ele.style.top = startY + 'px';
        }
        break;
    }
}