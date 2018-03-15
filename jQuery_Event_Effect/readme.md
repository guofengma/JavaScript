<!-- TOC -->

- [1. 事件](#1-事件)
- [2. 效果](#2-效果)
- [3. 事件对象](#3-事件对象)

<!-- /TOC -->

# 1. 事件

    ready(fn)
    当DOM载入就绪可以查询及操作时绑定一个要执行的函数.这是事件模块中最重要的一个函数,因为它可以极大地提高web应用
    程序的响应速度.
```js
$(document).ready(function(){
    
})
```
    on()
    在选择元素上绑定一个或多个事件的事件处理函数. .on()方法提供绑定事件处理程序所需的所有功能.
    events,[selector],[data],fn
        events:一个或多个用空格分隔的事件类型和可选的命名空间
        selector:一个选择器字符用于过滤器的触发事件的选择器元素的后代.
        data:当一个事件被触发时要传递 event.data 给事件处理函数
        fn:该事件被触发时执行的函数.
```js
$(".box2").on("mousedown mouseup",function(){
    console.log("我被点击了");
})
```
    
    off()
    该方法移除 .on()绑定的事件处理程序.
    
    one(type,[data],fn)
    为每一个匹配元素的特定事件绑定一个一次性的事件处理函数.在每个对象上,这个事件处理函数只会被执行一次.这个事件
    处理函数会接收到一个事件对象,可以通过它来阻止默认行为

    type:添加到元素的一个或多个事件.
    data:将要传递给事件处理函数的数据映射
    fn:每当事件触发时执行的函数
```js
$(".box1").one("click",function(){
    console.log("只能点击一次");
})
```

    hover()
    一个模仿鼠标悬停事件的方法.这是一个自定义的方法,它为频繁使用的任务提供了一种"保持在其中"的状态.当鼠标移动到一
    个匹配的元素上面时,会触发指定的第一个函数.当鼠标移出这个元素时,会触发指定的第二个函数.而且,会伴随着对鼠标是否
    仍然处在特定元素中的检测.如果是,则会继续保持'悬停'状态,而不触发移出事件.\
```js
$(".item1").hover(
    function(){
        $(this).addClass("hover");
    },
    function(){
        $(this).removeClass("hover");
    }
)
```

    blur()
    当元素失去焦点时触发 blur 事件.
    这个函数会调用执行绑定到 blur 事件的所有函数,包括浏览器的默认行为.可通过返回false来防止触发浏览器的默认行为.
    

    change()
    当元素的值发生改变时,会发生change事件.
    该事件仅使用于 文本域,以及 textarea 和 select元素.
    
    dblclick()
    当双击元素时,会发生 dblclick事件

    focus()
    当元素获得焦点时,触发focus事件
    

    keydown()
    当键盘或按钮被按下时,发生keydown事件.
    

    keypress()
    当键盘或按钮被按下时,发生keypress事件.keypress事件与keydown类似.当按钮被按下时,会发生该事件.它发生在当前获得
    焦点的元素上.

    resize()
    当调整浏览器窗口的大小时,发生resize事件

    scroll()
    当用户滚动指定的元素时,会发生scroll事件.
    scroll事件适用于所有可滚动的元素和window对象(浏览器窗口)

# 2. 效果

    show()
    显示隐藏的匹配元素

    hide()
    隐藏显示的元素

    toggle([speed],[easing],[fn])
    用于绑定两个或多个事件处理器函数,以响应被选元素的轮流的click事件.如果元素是可见的,切换为隐藏的;如果元素是隐藏
    的,切换为可见的.
    
    speed:隐藏/显示 效果的速度
    fn:在动画完成时执行的函数,每个元素执行一次.


    slideDown([speed],[easing],[fn])
    通过高度变化(向下增大)来动态显示所有匹配的元素,在显示完成后可选地触发一个回调函数.这个动画效果只调整元素的高度
    可以使匹配的元素以 "滑动" 的方法显示出来.
```js
$(".item2").slideDown(1000,function(){
    console.log("动画完成了")
});
```

    slideUp([speed],[easing],[fn])
    通过高度变化(向上减小)来动态地隐藏所有匹配的元素,在隐藏完成后可选地触发一个回调函数.
```js
$(".item2").slideUp(1000,function(){
    console.log("动画完成了");
})
```

    slideToggle([speed],[easing],[fn])
    通过高度变化来切换所有匹配元素的可见性,并在切换完成后可选地触发一个回调函数.


    fadeIn([speed],[easing],[fn])
    通过不透明度的变化来实现所有匹配元素的淡入效果,并在动画完成后可选地触发一个回调函数

    fadeOut([speed],[easing],[fn])
    通过不透明度的变化来实现所有匹配元素的淡入效果,并在动画完成后可选地触发一个回调函数.
```js
$(".item4").fadeOut(1000,function(){
    console.log("fadeOut");
})
$(".item4").fadeIn(1000,function(){
    console.log("fadeIn");
})
```
    
    fadeTo([speed],[opacity],[easing],[fn])
    把所有匹配元素的不透明度以渐进方式调整到指定的不透明度,并在动画完成后可选地触发一个回调函数.
```js
$(".item5").fadeTo(1000,0.2,function(){
    console.log("效果切换完成了");
});
```

    fadeToggle([speed],[easing],[fn])
    通过不透明度的变化来开关所有匹配元素的淡入和淡出效果,并在动画完成后可选地触发一个回调函数.


    animate(params,[speed],[easing],[fn])
    用于创建自定义动画的函数.
    这个函数的关键在于指定动画形式及结果样式属性对象.这个对象中每个属性都表示一个可以变化的样式属性.注意:所有指定
    的属性必须用驼峰形式.

        params:一组包含作为动画属性和终值的样式属性及其值的集合
        speed:三种预定速度之一的字符串或表示动画时长的毫秒数值
        easing:要使用的檫除效果的名称
        fn:在动画完成时执行的函数,每个元素执行一次.
```js
$(".item6").animate({
    left:"400px",
    top:"600px",
    opacity:'1'
},2000,function(){
    console.log("动画完成了");
})
```

    stop(stopAll,goToEnd)
    停止所有在指定元素上正在运行的动画.

        stopAll:可选.规定是否停止被选元素的所有加入队列的动画,允许任何排入队列的动画向后执行
        goToEnd:可选,规定是否允许完成当前的动画,该参数只能在设置了stopAll参数时使用.
```js
$(".start").click(function(){
    $(".item8").slideDown(3000);
});

$(".stop").click(function(){
    $(".item8").stop(true,true);
})
```

    delay(duration,[queueName])
    设置一个延时来推迟执行队列中之后的项目

# 3. 事件对象

    event.currentTarget
    在事件冒泡阶段中的当前DOM元素


    event.isDefaultPrevented()
    根据事件对象中是否调用过 event.preventDefault() 方法来返回一个布尔值


    event.isProgationStopped()
    根据事件对象中是否调用过 event.stopPropagation() 方法来返回一个布尔值.

    event.preventDefault()
    阻止默认事件的触发

    event.stopPropagation()
    防止事件冒泡到DOM树上,也就是不触发的任何前辈元素上的事件处理函数.


    event.target
    最初触发事件的DOM元素.
    这是注册事件时的对象,或者它的子元素.通常用于比较 event.target 和 this 来确定事件是不是由于冒泡而触发的.经常用于事件冒泡时
    处理事件委托.

    event.timeStamp
    这个属性返回事件触发时距离 1970年 1月1 日的毫秒数
    这可以很方便的检测某个jQuery函数的性能.

    event.which
    针对键盘和鼠标事件,这个属性能确定你到底按的是哪个键或按钮