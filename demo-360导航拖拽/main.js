var oContainer = document.querySelector(".container");
var aLi = document.getElementsByTagName("li");
var len = aLi.length;
var arr = [];

// 定义一个数组,保存所有图片的 offsetLeft offsetTop
for(let i = 0; i < len; i++){
    arr.push([aLi[i].offsetLeft,aLi[i].offsetTop]);
    setTimeout(function(){
        aLi[i].style.position = "absolute";
        aLi[i].style.left = arr[i][0] + 'px';
        aLi[i].style.top = arr[i][1] + 'px';
        aLi[i].style.margin = 0;
    },0);
};

for(let i = 0; i < len; i++){
    drag(aLi[i]);
}

var x1,y1,x2,y2,startX,startY;

function drag(obj){
    obj.onmousedown = function(event){
        var event = event || window.event;
        event.preventDefault();
        x1 = event.clientX;
        y1 = event.clientY;
        startX = obj.offsetLeft;
        startY = obj.offsetTop;
        obj.style.zIndex = 666;
        document.onmousemove = function(event){
            x2 = event.clientX;
            y2 = event.clientY;
            obj.style.left = startX + x2 - x1 + 'px';
            obj.style.top = startY + y2 - y1 + 'px';
            var nearObj = nearLi(obj);
            if(nearObj){
                nearObj.style.transform = "scale(1.05)";
            }
        };
        document.onmouseup = function(){
            document.onmousemove = null;
            var nearObj = nearLi(obj);
            if(nearObj){
                obj.style.left = nearObj.offsetLeft + 'px';
                obj.style.top = nearObj.offsetTop + 'px';
                nearObj.style.left = startX + 'px';
                nearObj.style.top = startY + 'px';
            }else{
                obj.style.left = startX + 'px';
                obj.style.top = startY + 'px';
            }
        }
    }
};

// 碰撞的条件
function getHit(obj1,obj2){
    var L1 = obj1.offsetLeft;
    var R1 = obj1.offsetLeft + obj1.offsetWidth;
    var T1 = obj1.offsetTop;
    var B1 = obj1.offsetTop + obj1.offsetHeight;
    var L2 = obj2.offsetLeft;
    var R2 = obj2.offsetLeft + obj2.offsetWidth;
    var T2 = obj2.offsetTop;
    var B2 = obj2.offsetTop + obj2.offsetHeight;
    if( R1 < L2 || L1 > R2 || B1 < T2 || B2 < T1 ){
        return false;
    }else{
        return true;
    }
};

// 两个对象碰撞时的最小值.
function getDistance(obj1,obj2){
    var x = obj1.offsetLeft - obj2.offsetLeft;
    var y = obj2.offsetTop - obj2.offsetTop;
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
};

// 发生碰撞时返回碰撞的那个元素.
function nearLi(obj){
    var oLi = "";
    var tmp = 5000;
    for(let i = 0; i < len; i++){
        if(getHit(obj,aLi[i]) && obj !== aLi[i]){
            var c = getDistance(obj,aLi[i]);
            if(c < tmp){
                tmp = c;
                oLi = aLi[i];
            }
        }
    }
    return oLi;
}