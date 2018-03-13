<!-- TOC -->

- [1. CSS的鼠标按下事件](#1-css的鼠标按下事件)
- [2. !important](#2-important)
- [3. 点击按钮效果](#3-点击按钮效果)
- [4. 透明](#4-透明)
- [5. CSS转换大小写](#5-css转换大小写)
- [6. CSS轮廓(outline)](#6-css轮廓outline)
- [7. Display与Visibility](#7-display与visibility)
- [8. 伪元素](#8-伪元素)
- [9. Animation](#9-animation)
- [10. Background](#10-background)
- [11. 学到的新属性](#11-学到的新属性)

<!-- /TOC -->

# 1. CSS的鼠标按下事件

    利用伪类 :hover和:active

```html
<style>
    #box{
        width: 100px;
        height: 100px;
        background-color:#f00;
    }

    #box:hover:active{
        background-color:#00f;
    }
</style>

<div id="box"></div>
```
    上面的代码,鼠标按下 box 的时候 会变成 蓝色. Amazing!


# 2. !important

    !important 是CSS1 就定义的语法,作用是提高指定样式规则的应用优先权.写在定义的属性后面,例如
    #box{color:red!important}

    在CSS中,通过对某一样式声明 !important,可以更改默认的CSS样式优先级规则,使该条样式属性声明具有最高
    优先级.

```html
<style>
    #item{
        width: 100px;
        height: 100px;
        background-color:#f0f!important;
    }
</style>
<div id="item"></div>

<script>
    var Item = document.getElementById("item");
    Item.onclick = function(){
        Item.style.backgroundColor = "#f00";
    }
</script>
```
    在上面的例子中,通过JS 也改变不了 item 的颜色.

# 3. 点击按钮效果

    
    

# 4. 透明

    在IE浏览器, 透明设置属性为 filter
```css
#box{
    opacity:0.4;
    filter:alpha(opacity=40);
}
```

# 5. CSS转换大小写

```css
.text2{
    /* 转换为大写 */
    text-transform:uppercase;   
    /* 转换为小写 */
    text-transform:lowercase;
    /* 转换为首字母大写 */
    text-transform:capitalize;
}
```

# 6. CSS轮廓(outline)

    轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用.
    轮廓（outline）属性指定元素轮廓的样式、颜色和宽度.

    outline-color
    outline-style
    outline-width

# 7. Display与Visibility

    隐藏一个元素可以通过把display属性设置为"none"，或把visibility属性设置为"hidden".但是请注意，这两种方法会产生不同的
    结果.
    
    visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间.也就是说，该元素虽然被隐藏了，但仍然会
    影响布局.

# 8. 伪元素

    CSS伪元素是用来添加一些选择器的特殊效果

    :first-line 
    用于向文本的首行设置特殊样式.

```html
<style>
    p.text:first-line{
        color:#f00;
    }
</style>
<p class="text">​​新疆军区政委李伟代表说，习主席作出组建退役军人管理保障机构的重大决策，是从根本上解决退役军人问题的大思路、大手笔，具有里程碑意义。
习主席指出，谁是最可爱的人，不要让英雄既流血又流泪，让军人受到尊崇，这是最基本的，这个要保障。（央视记者 张伟 徐少兵 张建庆 步晓强 李斌 黄显文 刘笑宇）</p>
```

    :first-letter
    用于向文本的首字母设置特殊样式：
```html
<style>
.text3:first-letter{
    color:#f00;
    font-size:30px;
}
</style>

<div class="text3">Hello World</div>
```
    上面两个伪类只对块元素有效果

    
    :before
    可以在元素的内容前面插入内容

    :after
    可以在元素的后面插入内容

    可用于添加一个小图片等.


# 9. Animation

    animation属性是一个简写属性,用于设置六个动画属性：

        animation-name                  绑定到选择器的 keyframe名称                  
        animation-duration              完成动画所花费的时间
        animation-timing-function       规定动画的速度曲线
                                        linear  动画从头到尾速度都是相同的
                                        ease    低速开始,然后加快,在结束前变慢
                                        ease-in 低速开始
                                        ease-out 低速结束
        animation-delay                 动画开始之前的延迟
        animation-iteration-count       规定动画播放的次数
                                        n   定义播放次数的数值
                                        infinite 规定动画应该无限次播放
        animation-direction             normal  默认值,动画正常播放
                                        alternate 动画应该轮流反向播放.


    以下是一个简单的效果实现,box在页面上往返运动 4次.
    注意： 0%{left:0;} ; 这里就不要加分号了.
```css
#box1{
    width: 100px;
    height: 100px;
    background-color:#f00;
    position:absolute;
    left:0;
    animation:run 3s linear 0s 4 alternate;
}

@keyframes run{
    0% {
        left:0;
    }
    100% {
        left:500px;
    }
}
```

# 10. Background

    使用简写属性时,属性值的顺序为：
    background-color
    background-image
    background-repeat
    background-attachment   图片不随内容的滚动而滚动 默认是scroll,(会随着页面的内容滚动,fixed不随页面滚动).
    background-position

# 11. 学到的新属性

    animation-play-state:paused;

                        running：指定正在运行的动画

    下面是一个一直往返运动的box, 设置hover时 暂停动画.
```css
#box{
    width: 100px;
    height: 100px;
    background-color:#f00;
    position:absolute;
    animation:run 3s linear 0s infinite alternate;
}
#box:hover{
    animation-play-state:paused;
}
@keyframes run{
    0%{
        left:0;
    }
    100%{
        left:200px;
    }
}
```
    下面对上面的动画做一个变通,当点击一个按钮的时候,开始或暂停动画.
```html
<style>
    input:checked+#box{
        animation-play-state:paused;
    }
</style>

<input type="checkbox" >开始/暂停
<div id="box"></div>
```

    如果对 点击的 按钮样式不满意,可以通过 label 来稍微装饰一下点击的按钮.
```html
<style>
    input:checked+#box{
        animation-play-state:paused;
    }
    input{
        display:none;
    }
    label[for='pause']{
        display:block;
        height:25px;
        width:100px;
        text-align:center;
        color:#fff;
        background-color:#000;
        border-radius:5px;
        margin-bottom:10px;
    }
</style>

<label for="pause">开始/暂停</label>
<input type="checkbox" id="pause">
<div id="box"></div>
```