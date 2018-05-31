// 获取图片元素
var img = document.getElementsByTagName("img")[0];
// 获取小滑块
var son = document.querySelector(".son");
var father = document.querySelector(".father");
// 获取整个父级
var container = document.querySelector(".container");
// 鼠标点击在小拖块上的位置与小托快边缘的距离
var del = 0;
// 最大高度
var maxTop = container.offsetHeight - son.offsetHeight;

son.onmousedown = function(event){
    var event = event || window.event;
    event.preventDefault();
    event.returnValue = false;
    del = event.clientY - son.offsetTop;

    document.onmousemove = function(event){
        var event = event || window.event;
        son.style.top = event.clientY - del + 'px';
        // 判断,控制滑块在所滑动的区域内.
        if(son.offsetTop >= maxTop){
            son.style.top = maxTop + 'px';
        }
        else if(son.offsetTop <= 0){
            son.style.top = 0;
        }
                                            // 注意此时用父级高度,因为用图片高度的化 高度会一直为0
        img.style.height = (son.offsetTop * container.offsetHeight)/maxTop + 'px';
    }
    son.onmouseup = function(){
        document.onmousemove = null;
    }
}

