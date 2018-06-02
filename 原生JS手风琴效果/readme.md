<!-- TOC -->

- [1. 原生JS手风琴效果](#1-原生js手风琴效果)
- [2. 复习内容](#2-复习内容)

<!-- /TOC -->

# 1. 原生JS手风琴效果

    1. 点击标题,会展开部分内容.再次点击内容部分收缩!

# 2. 复习内容

    获取元素的计算属性及其兼容写法
```js
// obj 为元素对象,attr为属性

function getStyle(obj,attr){
    // 浏览器判断
    if(window.getComputedStyle){
        return getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}
```