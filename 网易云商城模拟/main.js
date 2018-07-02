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
点击左右按钮切换图片 点击右按钮递增,左按钮递减
所有图片的透明度为0,仅显示当前图片
给左右按钮分别绑定事件监听函数
*/ 
// 定义一个信号量,表示当前的图片序号
var index = 0;
// 图片的数量
var len = aLi.length;

oRight.addEventListener('click',function(){
    index++;
    index = index > 5 ? 0 : index;
    console.log(index);
    for(let i = 0; i < len; i++ ){
        aLi[i].className = "";
    }
    // 注意 类数组 下标是从0 开始的
    aLi[index].className = "active";
},false);

oLeft.addEventListener("click",function(){
    index--;
    index = index < 0 ? 5 : index;
    for(let i = 0; i < len; i++){
        aLi[i].className = "";
    }
    aLi[index].className = "active";
},false);

