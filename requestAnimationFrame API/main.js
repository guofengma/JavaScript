// setInterval
var i = 0;
var timer = setInterval(function(){
    i++;
    console.log(i);
},1000/60);

// requestAnimationFrame
var j = 0;
function draw(){
    j++;
    console.log(j);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

/*
业务逻辑: 获取页面的元素,利用 setTimeout函数 修改其背景颜色
1.1.  先获取页面div元素
1.2   定义一个数组用于保存要修改的颜色值
1.3   定义一个信号量表示数组下标, 当下标大于数组长度时,使其等于0,依次循环
1.4   将获取到的颜色值赋值给div元素
*/
(function runSto(){
    var timer,
    timeSpace = 17,
    num = 0,
    bg = ['red','blue','yellow'],
    oBox = document.querySelector(".box1");
    function loop(){
        num++;
        if(num > bg.length - 1){
            num = 0;
        }
        oBox.style.backgroundColor = bg[num];
        timer = setInterval(arguments.callee,timeSpace);
    }
    timer = setInterval(loop,timeSpace);
})();

(function runRaf(){
    var timer,
        num = 0,
        bg = ["blue","red","yellow"],
        oBox = document.querySelector(".box2");
    
    function loop(){
        num++;
        num = num > bg.length - 1 ? 0 : num;
        oBox.style.backgroundColor = bg[num];
        timer = requestAnimationFrame(arguments.callee);
    }
    timer = requestAnimationFrame(loop);
})();

for(var i = 0; i < 6; i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
}
// 输出 6 个6

for(let i = 0; i < 6; i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
};

for(var i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
    console.log(i);
}
// 先输出 0 1 2 3 4 5   然后每隔1秒输出一个 6

for(let i = 0; i < 6; i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
    console.log(i);
}
// 先输出 0 1 2 3 4 5  然后每隔1秒分别输出 0 1 2 3 4 5

for(var i = 0; i < 6; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    })(i);
    console.log(i);
}