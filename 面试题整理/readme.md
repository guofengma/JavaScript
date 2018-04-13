<!-- TOC -->

- [1. 使用CSS实现一个持续的动画](#1-使用css实现一个持续的动画)
    - [1.1. 鼠标移动到box,暂停动画](#11-鼠标移动到box暂停动画)
    - [1.2. 点击一个按钮,暂停动画](#12-点击一个按钮暂停动画)
    - [1.3. 实现一个无缝滚动轮播图](#13-实现一个无缝滚动轮播图)
- [2. 水平垂直居中](#2-水平垂直居中)

<!-- /TOC -->

# 1. 使用CSS实现一个持续的动画

```css
.box{
    width: 100px;
    height: 100px;
    background-color:skyblue;
    position:absolute;
    animation:move 3s linear 0s infinite alternate;
}
@keyframes move{
    0%{
        left:0
    }
    100%{
        left:300px;
    }
}
```
    主要考查CSS3 @keyframes,以及animation参数

        animation-name              动画名称
        animation-duration          动画持续事件
        animation-timing-function   动画运动曲线
        animation-delay             动画何时开始
        animation-iteration-count   动画被播放次数
        animation-direction         规定动画是否在下一周期逆向地播放,默认是'normal'
                                    alternate 可以往返地播放
                                    alternate-reverse 在100%状态的时候开始播放,然后支持往返播放.
        animation-play-state        规定动画是否正在运行或暂停,默认是'running'
        
        使用简写属性:
        animation:move 5s linear 2s infinite alternate

## 1.1. 鼠标移动到box,暂停动画

```css
.box:hover{
    animation-play-state:paused;
}
```

## 1.2. 点击一个按钮,暂停动画

```html
<style>
input:checked+.box{
    animation-play-state:paused;
}
</style>

<input type="checkbox">开始/暂停
<div class='box'></div>
```

## 1.3. 实现一个无缝滚动轮播图

```html
<style>
    .container{
        width: 360px;
        height: 280px;
        border:2px solid #333;
        overflow:hidden;
        margin-top:200px;
        position:relative;
    }
    .content{
        font-size:0;
        width:1800px;
        height:280px;
        position:absolute;
        left:-360px;
        animation:run 6.5s linear 0s infinite normal;
    }
    img{
        width: 360px;
        height:280px;
    }

    @keyframes run{
        0%{
            left:-360px;
        }
        100%{
            left:-1440px;
        }
    }
</style>

<div class="container">
    <div class="content">
        <img src="./img/3.jpg" alt="">
        <img src="./img/1.jpg" alt="">
        <img src="./img/2.jpg" alt="">
        <img src="./img/3.jpg" alt="">
        <img src="./img/1.jpg" alt="">
    </div>
</div>
```

# 2. 水平垂直居中


```html
<style>
    .father{
        width: 400px;
        height: 400px;
        border:1px solid #000;
    }
    .son{
        width: 80px;
        height: 80px;
        background-color:seagreen;
    }
</style>

<div class="father">
    <div class="son"></div>
</div>
```
    以上面的例子, 实现 类名为 son 的div 在类名为 father的div中 水平垂直居中.


    第一种方法：根据父子元素的大小,计算margin
```css
.son{
    margin:0 auto;
    margin-top:160px;
}
```

    第二种方法:利用绝对定位 (减去子元素自身宽高的一半)
```css
.father{
    position:relative;
}
.son{
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-40px;
    margin-top:-40px;
}
```

    第三种方法:利用绝对定位 (如果不确定子元素的宽高,可用transform:translate)
```css
.father{
    position:relative;
}
.son{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
```

    第四种方法:利用绝对定位
```css
.father{
    position:relative;
}
.son{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
}
```