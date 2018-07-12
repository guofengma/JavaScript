<!-- TOC -->

- [1. 绘制矩形](#1-绘制矩形)
- [2. 绘制圆](#2-绘制圆)

<!-- /TOC -->

# 1. 绘制矩形

    HTML中的元素canvas只支持一种原生的图形绘制:矩形。所有其他的图形的绘制都至少需要生成一条路径.
    
    绘制一个填充的矩形
    fillRect(x,y,width,height);

    绘制一个矩形的边框
    strokeRect(x,y,width,height);

    清除指定矩形区域,让清除部分完全透明
    clearRect(x,y,width,height);

# 2. 绘制圆

    ctx.arc(x,y,r,0,Math.PI*2,false)

    false 表示顺时针
    true  表示逆时针

    当调用fill()函数的时候,所有没有闭合的形状都会自动闭合,所以不需要调用closePath()函数,但是调用stroke()时不会
    自动闭合.

    角度与弧度的js表达式: radians = (Math.PI/180)*degrees