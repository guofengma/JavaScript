<!-- TOC -->

- [1. 事件流](#1-事件流)
    - [1.1. 事件冒泡](#11-事件冒泡)
    - [1.2. 事件冒泡](#12-事件冒泡)
    - [1.3. DOM事件流](#13-dom事件流)
- [2. addEventListener()方法](#2-addeventlistener方法)
- [3. 事件委托](#3-事件委托)
    - [3.1. IE中关于事件的属性和方法](#31-ie中关于事件的属性和方法)

<!-- /TOC -->

# 1. 事件流

    事件流描述的时页面中接收事件的顺序,但有意思的是,IE和Netscape提出了完全相反的事件流的概念.IE的事件流是事件冒泡流,而
    Netscape的事件流是事件捕获流.

## 1.1. 事件冒泡

    IE的事件流叫事件冒泡,即事件开始时由最具体的元素接收,然后逐级向上传播到较为不具体的节点.以最简单的文档为例:

    如果你点击了某个 div,那么事件流的传播顺序是:
        <div>
        <body>
        <html>
        document

## 1.2. 事件冒泡

    Netscape提出的事件流是事件捕获流,事件捕获的思想是不太具体的元素应该更早接收到事件,而最具体的节点应该最后接收到事件.
    事件捕获流的意义在于事件到达预定目标之前就捕获它.如果单击了某个元素,那么事件捕获流的顺序是：
        document
        <html>
        <body>
        <div>

## 1.3. DOM事件流

    'DOM2级事件'规定的事件流包括三个阶段,事件捕获阶段,处于目标阶段 和 事件冒泡阶段.多数支持 DOM 事件流的浏览器都实现了一种
    特定的行为,即'DOM2级事件' 规范明确要求 事件捕获阶段不会涉及 事件目标,但IE9 Safari Chrome Firefox等都会在捕获阶段触
    发事件对象上的事件,结果,就是有两个机会在目标对象上面操作事件. 

# 2. addEventListener()方法

    addEventListener() 用于向指定元素添加事件句柄
    addEventListener() 添加的事件句柄不会覆盖已存在的事件句柄
    可以向一个元素添加多个事件句柄
    可以向同个元素添加多个同类型的事件句柄
    可以向任何DOM对象添加事件监听,不仅仅是HTML元素
    addEventListener()可以更简单的控制事件(冒泡与捕获)
    当使用addEventListener()时,JavaScript从HTML标记中分离开来,可读性更强,在没有控制HTML标记时也可以添加事件监听.
    可以使用 removeEventListener()来移除事件监听.
    
    element.addEventListener(event,function,useCapture);

        event:事件类型 click 或 mousedown
        function:事件触发后的回调函数
        useCapture:布尔值,用于描述是冒泡还是捕获.默认是false,即冒泡传递
        
    IE8及其更早IE版本,Opera7.0及其更早的版本不支持 addEventListener()和removeEventListener(),可以用
    attachEvent(event,function)和detachEvent(event,function)

# 3. 事件委托

    事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件.
    
    下面的实例是 点击 <li>,然后在控制台输出 123

```html
<ul class="list">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
</ul>

<script>
    var List = document.querySelector(".list");

    List.onclick = function(event){
        // 事件对象 IE中为 window.event
        var event = window.event || event;
        // 事件目标IE下为 srcElement
        var target = event.target || event.srcElement;
        // 注意 target.nodeName是大写,也可以直接等于 LI 不用转换.
        if( target.nodeName.toLowerCase() === 'li' ){
            console.log('123');
        }
    }
</script>
``` 
    上面是 事件委托 一个简单的应用.
    优点：把某类事件交给父级来管理,可以大量节省内存占用,减少事件注册.
          可以实现当新增子对象时,无需再对其进行事件绑定,对于动态内容部分尤为合适

    缺点：事件代理的常用应用仅限于上述需求,如果把所有事件都用事件代理,可能会出现事件误判.即本不该被触发的事件被绑定上
    了事件

## 3.1. IE中关于事件的属性和方法

                   IE                      非IE
    事件作用目标    srcElement              target
    阻止事件冒泡    cancleBubble=true       stopPropagation
    阻止默认事件    returnValue             preventDefault
    事件对象        window.event            event
    DOM2级事件      attachEventListener     addEventListener