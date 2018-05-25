var Container = document.getElementById("container");
// 定义一个信号量很有必要
var delta = 0;

document.onmousewheel = function(event){
    // 向下滚动为 -180 向上滚动为 180
    // 注意时间对象 IE下 为 window 
    var event = event || window.event;
    // 先定义一个 变量 保存 event.wheelDelta的值
    var y = event.wheelDelta;
    event.preventDefault();
    event.returnValue = false;

    y = y > 0 ? 1:-1
    console.log(y);

    delta += y;
    // 这是边界条件
    if(delta < -3){
        delta = -3;
    }
    if(delta > 0){
        delta = 0;
    }
    Container.style.top = delta*100 + "%";
    Container.style.transition = 'top .8s';
    Container.style.wetkitTransition = 'top .8s';    
    Container.style.mozTransition = 'top .8s';      
}