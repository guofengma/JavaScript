// 获取点击按钮
var aBtn = document.querySelectorAll("span");
var aLi = document.querySelectorAll(".container li");
var count = 0;

aBtn[0].onclick = function(){
    
}

aBtn[1].onclick = function(){
    count++;
    aLi[count].className = 'right';
}
