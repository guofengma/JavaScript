// 获取图片元素
var img = document.getElementsByTagName("img")[0];
var delX;
var delY;

img.onmousedown = function(event){
    var event = event || window.event;
    // 阻止浏览器默认事件
    event.preventDefault();
    event.returnValue = false;
    delX = event.clientX - img.offsetLeft;
    delY = event.clientY - img.offsetTop;

    document.onmousemove = function(event){
        var event = event || window.event;    
        img.style.left = (event.clientX - delX) + 'px';
        img.style.top = (event.clientY -delY) + 'px';    
    }
    img.onmouseup = function(){
        document.onmousemove = null;
    }
}