var li = document.getElementsByTagName("li");
console.log(li);

// 点击后增加高度
for(i = 0; i < li.length; i++){
    li[i].number = i;
    li[i].onclick = function(){
        var a = getHeight(li[this.number]);
        if(a['height'] == '20px'){
            this.style.height = '80px';
            this.style.transition = 'height 0.3s';
            this.style.webkitTransition = 'height 0.3s';    
        }else{
            this.style.height = '20px';
            this.style.transition = 'height 0.3s';
            this.style.webkitTransition = 'height 0.3s';  
        }
    }
}
// 注意:用奇偶来判断,点击同一个折叠按钮可以实现点击一次展开,再点击一次搜收缩
// 另一种方法,直接用元素的高度来判断. 


// 获取元素计算属性
function getHeight(ele){
    var style = null;
    if(window.getComputedStyle){
        style = window.getComputedStyle(ele);
    }else{
        style = ele.currentStyle;
    }
    return style;
}

var Box = document.querySelector(".box");
var a = getHeight(Box);
console.log(a);
console.log(a['height']);