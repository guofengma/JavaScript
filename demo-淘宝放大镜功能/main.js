/*
    1. 分别获取 上面的大图片  和 下面的小图片
    2. 鼠标移动到小图片上,该图片显示边框 并显示对应的大图片（默认显示第一张图片）
    3. 鼠标移动到大图片上 显示放大镜， 移出 放大镜消失
*/
// 获取大图片的父级
var oContainer = document.querySelector(".container");
// 获取上面大大图片
var aBigImg = oContainer.querySelectorAll("li");
// 获取下面的小图片
var oSmall = document.querySelector(".small-img");
var aSmallImg = oSmall.querySelectorAll("li");
// 获取放大镜
var oScan = document.querySelector(".scan");
// 鼠标放在小图片上显示对应的大图
var length = aBigImg.length;
// 获取右侧放大图片的父级
var oRightBox = document.querySelector(".right-box");
// 获取里面要展示的图片
var aLi = oRightBox.getElementsByTagName("li");
// 放大倍数,不要弄反了
var rate = parseInt(getValue(oRightBox,"width"))/parseInt(getValue(oScan,"width"));
console.log(rate);
// 当前显示的是第几张图片
var number = 0;

// 鼠标放在小按钮上 显示边框 并显示对应的大图片 大图片的显示通过设置display控制
// for(let i = 0; i < length; i++){
//     aSmallImg[i].index = i;
//     aSmallImg[i].onmouseover = function(){
//         for(let j = 0; j < length; j++){
//             aSmallImg[j].classList.remove("active");
//             aBigImg[j].className = "";
//         };
//         this.classList.add("active");
//         aBigImg[this.index].className = "visible";
//     }
// }

// 通过设置 z-index 实现  同样的效果
for(let i = 0; i < length; i++){
    aSmallImg[i].index = i;
    aSmallImg[i].onmouseover = function(){
        for(let j = 0; j < length; j++){
            aSmallImg[j].classList.remove("active");
            aBigImg[j].className = "";
        };
        this.classList.add("active");
        aBigImg[this.index].className = "visible";
        number = this.index;
    }
}
oContainer.onmouseover = function(){
    oScan.style.display = "block";
    oRightBox.style.display = "block";

    for(let i = 0; i < length; i++){
        aLi[i].className = "";
    }
    aLi[number].className = 'seen';

    document.onmousemove = function(event){
        var event = event || window.event;
        event.preventDefault();
        event.returnValue = false;
        var x = event.clientX - oContainer.offsetLeft - oScan.clientWidth/2;
        var y = event.clientY - oContainer.offsetTop - oScan.clientHeight/2;
        x = x < 0 ? 0 : (event.clientX - oContainer.offsetLeft - oScan.clientWidth/2);
        y = y < 0 ? 0 : (event.clientY - oContainer.offsetTop - oScan.clientHeight/2); 
        
        if(x > oContainer.offsetWidth - oScan.offsetWidth){
            x = oContainer.offsetWidth - oScan.offsetWidth;
        }
        if(y > oContainer.offsetWidth - oScan.offsetWidth){
            y = oContainer.offsetWidth - oScan.offsetWidth;
        }
        oScan.style.left = x  + 'px';
        oScan.style.top = y + 'px';

        aLi[number].style.left = -rate * x + 'px';
        aLi[number].style.top = -rate * y + 'px';
    }
}
oContainer.onmouseout = function(){
    oScan.style.display = "none";
    for(let i = 0; i < length; i++){
        aLi[i].className = "";
    }
};
function getValue(ele,attr){
    if(window.getComputedStyle){
        return getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }
}