<!-- TOC -->

- [1. tips](#1-tips)
- [2. demo](#2-demo)
- [3. File API](#3-file-api)
- [4. dataTransfer对象](#4-datatransfer对象)

<!-- /TOC -->

# 1. tips

    1. 页面上的元素默认是不可拖拽的,除了图片
    2. 图片拖拽会被解析为url地址的形式,要清除浏览器的默认事件
    3. 注意 = 和 ==  一个是赋值, 一个是判断是否相等.
    4. for循环优化的点 大O阶
    
    被拖动元素的事件:
        ondragstart
        ondrag
        ondragend

    被拖动元素拖动到一个有效的放置目标上时,下列事件会依次发生:
        ondropenter 
        ondropover  这里要清除浏览器的默认事件
        ondropleave 或 ondrop
         
        ondrop  清除浏览器的默认事件

    
# 2. demo

    在两个容器来回拖动某个元素 可以绑定事件在 document 上. 两个容器可以绑定同一个类名,然后判断类名

# 3. File API

    FileReader类型

    FileReader类型实现的是一种异步文件读取机制.为了读取文件中的数据,FileReader提供了如下几个方法：
        readAsText(file,encoding)   以纯文本形式读取文件,将读取到的文本保存在result属性
        readAsDataURL(file)         读取文件并将文件以数据URI的形式保存在result属性中.
        

# 4. dataTransfer对象

    它是事件对象的一个属性,用于从被拖动元素向放置目标传递字符串格式的数据.

    dataTransfer对象主要有两个方法 getData() 和 setData();