<!-- TOC -->

- [1. noConflict()方法](#1-noconflict方法)
- [2. attr()](#2-attr)
- [3. addClass hasClass removeClass](#3-addclass-hasclass-removeclass)
- [4. 选择器](#4-选择器)
- [5. val() / html() / text()](#5-val--html--text)
- [6. 样式控制](#6-样式控制)
- [7. 子节点](#7-子节点)
- [8. 兄弟节点](#8-兄弟节点)
- [9. 复制/删除/替换节点](#9-复制删除替换节点)
- [10. 工具函数](#10-工具函数)

<!-- /TOC -->

# 1. noConflict()方法

    使用noConflict()方法为jQuery变量规定新的名称.

    var jq = $.noConflict();

# 2. attr()

    修改属性
    $("img").attr("src","http://www.xxx.jpg");

    修改多个属性
    $("img").attr({
        'src':'http://www.xxx.jpg',
        "title":'xxx'
    })

# 3. addClass hasClass removeClass

    添加 判断是否有类 删除类

# 4. 选择器

    :first-child/:last-child
    :checked / :selected / :disabled / :hidden :not()
    :eq() / :empty() 
     
# 5. val() / html() / text()

    val() 设置或获取表单元素的 value

    html() 设置或获取元素的内容,可以解析html格式

    text() 设置元素的内容,但不能解析HTML格式文本.

# 6. 样式控制

    .css() 获取或设置指定的CSS样式
    .width() .height() 设置或获取元素的宽和高
    .scrollLeft() .scrollTop() 设置或获取滚动条的位置

# 7. 子节点

    .append() 在后面插入
    .prepend() 在前面插入

# 8. 兄弟节点

    .after()    在后面插入
    .before()   在前面插入

# 9. 复制/删除/替换节点

    .clone()    复制节点
    .remove()   永久移除节点
    .empty()    清除一个节点的所有内容

# 10. 工具函数

    map() 遍历所有成员