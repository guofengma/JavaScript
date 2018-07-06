// 获取 input 元素,获取焦点后显示下拉列表内容
var searchInput = document.querySelector(".search-input");
// 获取下拉选项框
var oWrap = document.querySelector(".wrap");

searchInput.addEventListener('click',wrap,false);
searchInput.addEventListener('blur',wrap,false);

function wrap(event){
    var event = event || window.event;
    switch(event.type){
        // 注意, 这里要用字符串. 报错 click is not defined
        case "click":
        oWrap.style.display = "block";
        break;
        case "blur":
        oWrap.style.display = "none";
        break;
    }
}
// 获取轮播图左右按钮
var oLeft = document.querySelector(".left");
var oRight = document.querySelector(".right");
// 获取下方的小原点
var oCircles = document.querySelector(".circles");
var aSpan = oCircles.getElementsByTagName("span");
// 获取轮播图父级
var Banner = document.getElementById("banner");
// 获取所有图片
var aLi = Banner.getElementsByTagName("li");

/*
业务逻辑:
1. 点击左右按钮切换图片 点击右按钮递增,左按钮递减
2. 所有图片的透明度为0,仅显示当前图片
3. 给左右按钮分别绑定事件监听函数,切换图片
    3.1 切换图片
    3.2 切换小按钮的颜色
    3.3 切换banner的颜色 可以用一个数组来保存所有的颜色
4. 鼠标放置在banner上暂停动画播放,离开后开始播放动画 
*/ 
// 定义一个信号量,表示当前的图片序号
var index = 0;
// 图片的数量
var len = aLi.length;
var colors = ["#ff9190","#3fd4ff","#ee3a2c","#f8c337","#608efe","#4ea314"];

// 点击右按钮切换图片
oRight.addEventListener('click',function(){
    index++;
    index = index > 5 ? 0 : index;
    console.log(index);
    for(let i = 0; i < len; i++ ){
        aLi[i].className = "";
    }
    // 注意 类数组 下标是从0 开始的
    aLi[index].className = "active";
    changeDotColor();
    changeBannerColor();
},false);

// 点击左按钮切换图片
oLeft.addEventListener("click",function(){
    index--;
    index = index < 0 ? 5 : index;
    for(let i = 0; i < len; i++){
        aLi[i].className = "";
    }
    aLi[index].className = "active";
    changeDotColor();
    changeBannerColor();
},false);

// 定义一个函数 修改小按钮 的 颜色
function changeDotColor(){
    for(let i = 0; i < aSpan.length; i++){
        aSpan[i].className = "";
    }
    aSpan[index].className = "focus";
}

// 修改图片的时候同时修改banner的背景颜色,
function changeBannerColor(){
    Banner.style.backgroundColor = colors[index];
}

// // 自动切换轮播图
var timer = null;
function changeImage(){
    clearInterval(timer);
    timer = setInterval(function(){
        index++;
        index = index > 5 ? 0 : index;
        for(let i = 0; i < len; i++){
            aLi[i].className = "";
        } 
        aLi[index].className = "active";
        changeBannerColor();
        changeDotColor();
    },1500);
}
changeImage();

// 鼠标放置在banner上暂停动画播放,离开后开始播放动画
Banner.addEventListener("mouseover",function(){
    clearInterval(timer);
},false);
Banner.addEventListener("mouseout",function(){
    changeImage();
},false);

// 点击下方的小按钮,显示对应的图片
for(let i = 0; i < aSpan.length; i++){
    aSpan[i].index = i;
    aSpan[i].onclick = function(){
        for(let j = 0; j < len; j++){
            aLi[j].className = "";
        }
        aLi[this.index].className = "active";
        index = this.index;
        changeBannerColor();
        changeDotColor();
    }
}