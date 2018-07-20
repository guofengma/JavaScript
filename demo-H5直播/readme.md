<!-- TOC -->

- [1. tips](#1-tips)
- [2. object-fit / object-position](#2-object-fit--object-position)

<!-- /TOC -->

# 1. tips

    
    <video poster="url">
    
    poster
    带有预览图的视频播放器 指定视频下载时显示的图像,或者在用户点击播放按钮前显示的图像.

    object-fit  被替换元素怎么填充
    object-position 被替换元素被填充的位置

# 2. object-fit / object-position


    object-fit CSS属性指定替换元素的内容应该如何适应到其使用的高度和宽度确定的框.适用于替换元素

    属性值: fill | contain | cover | none | scale-down;

    fill:
    被替换的内容大小可以填充元素的内容框。 整个对象将完全填充此框。 如果对象的高宽比不匹配其框的宽高比,那么该对象将被拉伸以适应
    
    contain:
    被替换的内容将被缩放,以在填充元素的内容框时保持其宽高比

    cover:
    被替换的内容大小保持其宽高比,同时填充元素的整个内容框

    none:
    被替换的内容尺寸不会被改变

    scale-down:
    内容的尺寸就像是指定了none或contain,取决于哪一个将导致更小的对象尺寸


    object-position
    该属性指定了元素的替换内容在其盒子内的对齐方式.

    object-position:center top;
    object-position:100px 50px;
    
    属性可以是 left center right top center 和 bottom  也可以是百分比 也可以是具体的数值. 用1-4个值来定义该元素的2d定位.