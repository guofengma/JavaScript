<!-- TOC -->

- [1. Viewport](#1-viewport)
    - [1.1. 设置Viewport](#11-设置viewport)
- [2. jQuery-mousewheel事件](#2-jquery-mousewheel事件)
- [3. 百分比](#3-百分比)
- [4. CSS3 Flex Box](#4-css3-flex-box)
- [5. -webkit-box](#5--webkit-box)
- [6. box-sizing](#6-box-sizing)
- [7. calc 函数](#7-calc-函数)
- [8. 双飞翼布局](#8-双飞翼布局)
- [9. min-width/max-width](#9-min-widthmax-width)
- [10. rem/em](#10-remem)
- [11. 媒体查询](#11-媒体查询)

<!-- /TOC -->

# 1. Viewport

    viewport是用户网页的可视区域.手机浏览器把页面放在一个虚拟的'窗口'中,通常这个虚拟的'窗口'(viewport)比屏幕宽,这样就不用把每个
    网页挤到很小的窗口中(这样会破坏没有针对手机浏览器优化的页面的布局),用户可以通过平移和缩放来看网页的不同部分.

## 1.1. 设置Viewport

    一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
    width:控制viewport的大小,可以指定一个值,如600或特殊的值,device-width为设备的宽度
    initial-scale:初始缩放比例,也即是当页面第一次load的时候缩放比例.
    maximum-scale:允许用户缩放到的最大比例
    minimum-scale:允许用户缩放到的最小比例
    user-scalable:用户是否可以手动缩放.
    
# 2. jQuery-mousewheel事件

    jQuery整屏滚动:注意在jQuery 下 再引入 jQuery的 mousewheel.js 文件.
    该事件需要传入两个参数 event 和 delta
```js
$(document).ready(function(){
    $("#container").mousewheel(function(event,delta){
        console.log(event);
        console.log(delta);        
    })
})
```
    event关于滚动事件等信息,delta关于上下滚动.-1为向下滚动,1为向上滚动.


# 3. 百分比

    width:10%;      父级宽度的10%;
    height:10%;     父级高度的10%;
    padding:10%;    父级宽度的10%;
    margin:10%;     父级宽度的10%;

# 4. CSS3 Flex Box

    弹性盒子是CSS3的一种新的布局模式,是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式.
    引入弹性盒布局模型的目的是提供一种更加有效的方式对一个容器中的子元素进行排列 对齐和分配空白空间.
    
    目前主流浏览器不支持 box-flex 属性.
    Internet Explorer 10 通过私有属性 the-ms-flex 支持
    Firefox通过私有属性 -moz-box-flex 支持
    Safari 和 Chrome 通过私有属性 -webkit-box-flex 支持

    Internet Explorer 9 及更早IE版本不支持弹性框.

```html
<style>
    .flex-container{
        display:-webkit-flex;
        display:flex;
        width: 400px;
        height: 250px;
        background-color:lightgrey;
    }
    .flex-item{
        background-color:cornflowerblue;
        width: 100px;
        height: 100px;
        margin: 10px;
    }
</style>

<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
</div>
```
    弹性盒子 由弹性容器 (Flex container)和弹性子元素(Flex item)组成.

    flex-direction
    flex-direction:row|row-reverse|column|column-reverse
    row:横向从左到右排列
    row-reverse:反转横向排列
    column:纵向排列
    column-reverse:反转纵向排列


    如果设置 body{direction:rtl;} 弹性子元素的排列方式也会改变,页面布局也跟着改变; 

    justify-content属性
    内容对齐属性应用在弹性容器上,把弹性项颜色容器的主轴线对齐.

        justify-content:flex-start|flex-end|center|space-between|space-around

    flex-start:弹性项目向行头紧挨着填充
    flex-end:弹性项目向行尾紧挨着填充
    center:弹性数据居中紧挨着填充
    space-between:弹性项目平均分配在该行上
    space-around:弹性项目平均分配在该行上.两边留有一半的间隔空间


# 5. -webkit-box

    设置父级 display:-webkit-box;

    然后给子级设置:-webkit-box-flex:1
                 -webkit-box-flex:2
    数字 1 2 表示所占大小.

# 6. box-sizing

    CSS3 box-sizing 属性可以设置 width 和 height 属性中包含了 padding(内边距) 和 border(边框)。

# 7. calc 函数

    CSS函数 calc() 可以通过计算来决定一个 CSS 属性的值,你还可以在一个 calc() 内部嵌套 另一个 calc(),里面的 calc()
    会被简单地视为加了括号.

# 8. 双飞翼布局

    中间宽度自适应,两边定宽.
```html
<header>
    <div class="logo"></div>
    <nav></nav>
    <div class="btn">
        <a href="http://www.baidu.com"></a>
    </div>
</header>
```

    第一种方法 ——> 定位：
```css
header{
    position:relative;
}
.logo{
    width: 150px;
    height: 60px;
    background:plum;
    position:absolute;
    top:0;
    left:0;
}
nav{
    width:100%;
    height: 60px;
    background:orange;
    box-sizing:border-box;
    padding-left:0 120px;
}
.btn{
    width: 150px;
    height: 60px;
    position:absolute;
    right:0;
    top:0;
    background:skyblue;
}
```

    第二种方法 ——> 弹性盒
```css
header{
    display:-webkit-box;
}
.logo{
    height: 60px;
    background:plum;
    width: 150px;
}
nav{
    height: 60px;
    background:orange;
    -webkit-box-flex:1;
}
.btn{
    width: 150px;
    height: 60px;
    background:skyblue;
}
```

    第三种方法 ——> calc函数
```css
.logo{
    height: 60px;
    background:plum;
    width: 150px;
    float:left;
}
nav{
    height: 60px;
    background:orange;
    width:calc(100% - 300px  );
    float:left;
}
.btn{
    width: 150px;
    height: 60px;
    background:skyblue;
    float:right;
}
```

# 9. min-width/max-width

    设置元素的最小宽度 和 最大宽度

# 10. rem/em

    rem相对根元素 (html) 
    em 从内往外找,第一个设置了 font-size的元素

    对于只需要适配少部分手机设备,且分辨率对页面影响不大的,使用px即可.
    对于需要适配各种移动设备,使用rem.例如只需要适配 iPhone 和iPad等分辨率差别比较大的设备.
    

# 11. 媒体查询

    @media
    CSS3 的多媒体查询继承了CSS2多媒体类型的所有思想：取代了查找设备的类型,CSS3根据设置自适应显示.媒体查询可用于检测
    很多事情,例如：
        viewport(视口)的宽度与高度
        设备的宽度与高度
        朝向(智能手机横屏,竖屏)
        分辨率
        

    not:not是用来排除掉某些特性的设备的,比如@media no print(非打印设备)
    only:用来定某种特别的媒体类型.
    

    CSS3多媒体类型
    all             用于所有多媒体类型设备
    print           用于打印机
    screen          用于电脑屏幕,平板,智能手机
    speech          用于屏幕阅读器
    
```css
body{
    background-color:purple;
}
@media screen and (max-width:800px){
    body{
        background-color:skyblue;
    }
}
@media screen and (max-width:400px){
    body{
        background-color:seagreen;
    }
}
```