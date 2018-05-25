// 获取图片父级
var oContainer = document.getElementById("container");
// 获取图片
var oImg = oContainer.getElementsByTagName("img");
// 获取小圆点
var Circle = document.querySelector(".circle");
var oLi = Circle.getElementsByTagName("li");

// 获取左右点击按钮
var Left = document.querySelector(".left");
var Right = document.querySelector(".right");

// 定义信号量
var index = 0;

// 点击右按钮,切换图片,并切换对应的小按钮
Right.onclick = function(){
    index++;
    if(index > 3){
        index = 0;
    }
    for(let i = 0; i < oImg.length; i++){
        oImg[i].classList.remove('first');
    }
    oImg[index].classList.add("first");
    oImg[index].style.filter = 'alpha(opacity='+ 100 +')'
    oImg[index].style.transition = 'opacity 1.5s';
    oImg[index].style.webkitTransition = 'opacity 1.5s';

    for(let i = 0; i < oLi.length; i++){
        oLi[i].classList.remove('active');
    }
    oLi[index].classList.add("active");
}   

// 点击左按钮切换图片,并改变对应按钮的样式
Left.onclick = function(){
    index--;
    if(index < 0){
        index = 3;
    }
    for(let i = 0; i < oImg.length; i++){
        oImg[i].classList.remove('first');
    }
    oImg[index].classList.add("first");
    oImg[index].style.opacity = 'alpha(filter='+ 100 +')';
    oImg[index].style.transition = 'opacity 1.5s';
    oImg[index].style.webkitTransition = 'opacity 1.5s';

    for(let i = 0; i < oLi.length; i++){
        oLi[i].classList.remove("active");
    }
    oLi[index].classList.add("active");
}

// 点击小按钮,显示对应图片
for(let i = 0; i < oLi.length; i++){
    oLi[i].number = i;
    oLi[i].onmouseover = function(){
        for(let j = 0; j < oLi.length;j++){
            oLi[j].className = '';
            oImg[j].className = '';
        }
        index = this.number;
        oImg[index].classList.add("first");
        oImg[index].style.filter = 'alpha(opacity='+ 100 +')';
        oImg[index].style.transition = 'opacity 1.5s';
        oImg[index].style.webkitTransition = 'opacity 1.5s';
        this.className = 'active';
    };
}

// 每间隔一定事件 自动切换图片
var Timer = null;

function move(){
    Timer = setInterval(function(){
        index++;
        if(index > 3){
            index = 0;
        }
        for(let i = 0; i < oImg.length; i ++){
            oLi[i].classList.remove("active");
            oImg[i].classList.remove("first");        
        }
        oLi[index].classList.add("active");
        oImg[index].classList.add("first");    
        oImg[index].style.filter = 'alpha(opacity='+ 100 +')';
        oImg[index].style.transition = 'opacity 1.5s';
        oImg[index].style.webkitTransition = 'opacity 1.5s';
    },3000)
}
move();

oContainer.onmouseover = function(){
    clearInterval(Timer);
}
oContainer.onmouseout = function(){
    move();
}