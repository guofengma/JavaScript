// 定义一个信号量y
var y = 0;

// 定义一个 全局变量 lock 函数节流
var lock = true;
$(document).ready(function(){
    $("#container").mousewheel(function(event,delta){
        // 防止上一次动画没有完成的时候 继续 下一次动画
        if(!lock){
            return;
        }
        var event = event || window.event;
        event.returnValue = false;
        event.preventDefault();
        y += delta;
        if(y < -4){
            y = -4;
        }
        if(y > 0){
            y = 0;
        }
        // 数据增加后 锁上,防止动画积累.
        lock = false;
        $("#container").animate({top:y*100 + '%'},500,function(){
            // 动画完成之后 解锁.
            lock = true;
        });

    })
})