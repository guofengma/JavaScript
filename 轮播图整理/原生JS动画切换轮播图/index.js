// 获取整个父元素
var oContainer = document.getElementById("container");
// 获取图片父元素
var oUl = document.querySelector(".carousel");
// 获取右按钮
var Right = document.querySelector(".right");
// 获取左按钮
var Left = document.querySelector(".left");
// 获取小圆点
var oCircle = document.querySelector(".circle");
var aLi = oCircle.getElementsByTagName("li");
// 定义信号量
var index = 1;
// 获取图片宽度
var oImg = oUl.getElementsByTagName("li")[0].offsetWidth;

// 点击右按钮,让图片向左滑动,并切换相应按钮的颜色
Right.onclick = function(){
    index++;

    if(index == 6){
        oUl.style.left = -oImg + 'px';    
        oUl.style.transition = 'left 0s';
        oUl.style.webkitTransition = 'left 0s'; 
        index = 2;
    }
    setTimeout(function(){
        oUl.style.left = -(oImg*index) + 'px';
        oUl.style.transition = 'left .5s';
        oUl.style.webkitTransition = 'left .5s';
    },0)

    for(let i = 0; i < aLi.length; i++){
        aLi[i].classList.remove('active');
    }
    if(index == 5 ){
        aLi[0].classList.add("active");
    }else{
        aLi[index-1].classList.add("active");
    }
}

// 点击左按钮切换图片
Left.onclick = function(){
    index--;
    if(index == 0){
        oUl.style.left = -oImg*5 + 'px';
        oUl.style.transition = 'left 0s';
        oUl.style.webkitTransition = 'left 0s';        
        index = 4;
    }
    setTimeout(function(){
        oUl.style.left = -oImg*index + 'px';
        oUl.style.transition = 'left .5s';
        oUl.style.webkitTransition = "left .5s";
    },0);

    for(let i = 0; i < aLi.length; i++){
        aLi[i].classList.remove('active');
    }
    aLi[index-1].classList.add("active");
}

var Timer = null
// 图片自动切换
function move(){
    Timer = setInterval(function(){
        index++;
        if(index == 6){
            oUl.style.left = -oImg + 'px';    
            oUl.style.transition = 'left 0s';
            oUl.style.webkitTransition = 'left 0s'; 
            index = 2;
        }
        setTimeout(function(){
            oUl.style.left = -(oImg*index) + 'px';
            oUl.style.transition = 'left .5s';
            oUl.style.webkitTransition = 'left .5s';
        },0);
        
        for(let i = 0; i < aLi.length; i++){
            aLi[i].classList.remove('active');
        }
        if(index == 5 ){
            aLi[0].classList.add("active");
        }else{
            aLi[index-1].classList.add("active");
        }
    },2000)
}
move();

// 鼠标经过时停止定时器并显示按钮,鼠标离开时显示运动;
oContainer.onmouseover = function(){
    Left.style.display = 'block';
    Right.style.display = 'block';    
    clearInterval(Timer);
}
oContainer.onmouseout = function(){
    move();
    Left.style.display = 'none';
    Right.style.display = 'none';   
}

// 点击对应小按钮,修改当前按钮的样式,显示相应的图片
for(let i = 0; i < aLi.length; i++){
    // 保存当前小按钮序号
    aLi[i].num = i;
    aLi[i].onmouseover = function(){

        for(let j = 0; j < aLi.length; j++){
            aLi[j].classList.remove("active");
        };
        this.classList.add("active");
        index = this.num + 1;
        oUl.style.transition = 'left .5s';
        oUl.style.webkitTransition = 'left .5s';  
        oUl.style.left = - index* oImg + 'px';      
    }

}