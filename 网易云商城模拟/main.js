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

