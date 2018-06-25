// 获取每个图片元素的li
var aLi = document.getElementsByTagName("li");
// 获取左按钮
var oLeft = document.querySelector(".left-btn");
// 获取右按钮
var oRight = document.querySelector(".right-btn");
console.log(oRight);
// 获取下面的小按钮
var aSpan = document.getElementsByTagName("span");
var len = aLi.length;
var index = 0;
var oContainer = document.querySelector(".container");
console.log(oContainer);
/*
业务逻辑,
    图片征程排序   [1,2,3,4,5,6]
    自动轮播       [6,1,2,3,4,5]
                  [5,6,1,2,3,4]
    1. 把每张图片的类名放在数组里, 先删除上一个数组的最后一张图片,然后放在数组的第一张 
*/ 
// 定义一个空数组,用于保存类名.
var array = [];
for(item of aLi){
    array.push(item.classList[0]);
}

function rightCheck(){
    // // 获取到数组里面最后一个类名,并把最后一个类名添加进数组的首项
    // var lastElement = array.pop();
    // array.unshift(lastElement);
    index--
    if(index<0){
        index = 5;
    }
    array.unshift(array[5]);
    array.pop();
    // 再次循环把每个类名添加到对应的元素上面
    for(let j = 0; j < len; j++){
        aLi[j].setAttribute('class',array[j]);
    };
    setColor();
}
function leftCheck(){
    // 把第一个类名放在最后,并删除第一个类名
    index++;
    if(index>5){
        index = 0;
    }
    array.push(array[0]);
    array.shift();
    for(let i = 0; i < len; i++){
        aLi[i].setAttribute("class",array[i]);
    }
    setColor();
}
oLeft.onclick = rightCheck;
oRight.onclick = leftCheck;

// 设置一个改变下标颜色的函数
function setColor(){
    for(let item in aSpan){
        aSpan[item].className = "";
    }
    aSpan[index].className = "active";
}



