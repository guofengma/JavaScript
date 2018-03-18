// 获取页面元素
var LeftBtn = document.querySelector(".left-btn");
var RightBtn = document.querySelector(".right-btn");        

var Banner = document.querySelector(".banner");
var Img = Banner.getElementsByTagName("li");
console.log(Img);
var Circle = document.querySelector(".circles");
var Li = Circle.getElementsByTagName("li");

// 定义一个信号量,表示第几张图片
var index = 0;

// 跳转到下标为 number 的图片
function move(number){
    index = number;
    // 先设置所有的图片都隐藏
    for( let i = 0; i < Img.length; i++){
        Img[i].className = "";
    }
    // 再设置要显示的图片 显示
    Img[number].className = "current";

    // 同理 先清空所有的 小圆点 样式
    for(let j = 0; j < Li.length; j++){
        Li[j].className = "";
    }
    Li[number].className = "active";
}

RightBtn.onclick = function(){
    index++;
    if(index >= 5){
        index = 0;
    }
    move(index);
}

LeftBtn.onclick = function(){
    index--;
    if(index < 0){
        index = 4;
    }
    move(index);
}
// 小原点 mouseover 事件
for(let i = 0; i < Li.length; i++){
    Li[i].idx = i;
    Li[i].onmouseover = function(){
        move(this.idx);
    }
}