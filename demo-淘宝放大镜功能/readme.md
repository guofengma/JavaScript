<!-- TOC -->

- [1. tips](#1-tips)

<!-- /TOC -->

# 1. tips

    1. 如果页面元素设置了display:none隐藏,JS通过:
    var oBox = document.querySelector(".box");
    console.log(oBox.offsetWidth) 是无法获取到页面宽度的.

    通过 getComputed 方法可以获取,但注意获取到的属性是带单位的.
```js
function getValue(ele,attr){
    if(window.getComputedStyle){
        return getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }
}
```

    2. 放大倍数是放大镜的宽 除以 右边要显示的部分大图的 宽   和图片的大小没有关系.