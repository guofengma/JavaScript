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
- [11. $.extend() / $.fn()](#11-extend--fn)
- [12. 清除动画队列](#12-清除动画队列)
- [13. 事件处理](#13-事件处理)
- [14. AJAX](#14-ajax)
- [15. Defereed](#15-defereed)

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

    .map() 遍历所有成员
    each()

# 11. $.extend() / $.fn()

    jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象.
    jQuery.fn()

# 12. 清除动画队列

    .animate().stop(true,true)

# 13. 事件处理

    在jQuery1.7之后,推荐统一使用on()来进行事件绑定

    .on()绑定事件 .on(event,handler)
    .off() 移除事件
    .once()

# 14. AJAX

    jQuery的AJAX 核心的请求处理函数只有一个,就是$.ajax(options);

        url:请求的地址
        type:请求的方法类型 GET POST 默认是GET
        data 要发送的数据
        dataType:服务器返回的数据类型
        success:请求成功时调用的处理函数

# 15. Defereed

    Deferred对象是在jQuery1.5中引入的回调管理对象,其作用是把一堆函数按顺序放入一个调用链,然后根据状态来依次调用这些
    函数.AJAX的所有操作都是使用它来进行封装的.
    