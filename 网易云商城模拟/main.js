// 获取 input 元素,获取焦点后显示下拉列表内容
var searchBox = document.querySelector(".searchbox");
console.log(searchBox);
// 获取下拉选项框
var oWrap = document.querySelector(".wrap");
searchBox.onclick = function(){
    oWrap.style.display = 'block';
}
searchBox.onblur = function(){
    oWrap.style.display = 'none';
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

