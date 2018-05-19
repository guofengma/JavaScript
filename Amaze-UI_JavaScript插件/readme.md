<!-- TOC -->

- [1. 轮播图](#1-轮播图)
- [2. 滚动监测](#2-滚动监测)
- [3. 滚动侦测导航](#3-滚动侦测导航)
- [4. 实用工具](#4-实用工具)
    - [4.1. cookie](#41-cookie)
    - [4.2. FastClick](#42-fastclick)
    - [4.3. Fullscreen](#43-fullscreen)

<!-- /TOC -->

# 1. 轮播图

    基本结构
```html
<div class="am-slider am-slider-default">
    <ul class="am-slides">
        <li><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" alt=""></li>
        <li><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" alt=""></li>
        <li><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt=""></li>
        <li><img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" alt=""></li>            
    </ul>
</div>
```
    1. 在容器上添加 data-form-flexslider

    2. 通过JS初始化
    $(".am-slider").flexslider()

    3. 方法
    $("#slider").flexslider('play') - 播放
    $("#slider").flexslider("pause") - 暂停
    $("#slider").flexslider("stop") - 停止
    

# 2. 滚动监测

    窗口滚动时为根据设置页面元素添加动画效果.

```html
<div class="am-panel am-panel-default" data-am-scrollspy="{animation: 'fade'}">...</div>
<div class="am-panel am-panel-default" data-am-scrollspy="{animation: 'fade', delay: 300}">...</div>
```
    调用方式:
    1. 添加 data-am-scrollspy 属性,并设置相关属性
        data-am-scrollspy="{animation:'fade',delay:300,repeat:false}"

    2. JS调用
        $().scrollspy(options) 设置,参数同上
```js
$(function(){
    $("#my-scrollspy").scrollspy({
        animation:'slide-left',
        delay:500
    })
})
```

    3. 自定义事件
    inview.scrollspy.amui                   元素进入窗口可视区域时触发
    inview.scrollspy.amui                   元素离开窗口可视区域时触发

```js
$(function() {
  $('#my-scrollspy').on('inview.scrollspy.amui', function() {
    console.log('进入视口');
  }).on('outview.scrollspy.amui', function() {
    console.log('离开视口');
  });
});
```

# 3. 滚动侦测导航

    1. 通过Data API
    添加 data-am-scrollspynav,并设置相关属性

    2. js调用
    通过 $().scrollspynav(options)调用

    options选项说明
    options.className.active    String,高亮导航条类名,默认为am-active
    options.smooth              Boolean,点击锚点时平滑滚动,默认为true
    options.offsetTop           Number,滚动时顶部偏移量,默认为0


# 4. 实用工具

## 4.1. cookie

    cookie.set(name,value,expires,path,domain,secure)   - 设置cookie
    cookie.get(name) - 获取cookie
    cookie.unset(name,path,domain,secure) - 删除cookie

## 4.2. FastClick

    从点击屏幕上的元素到触发元素的click事件,移动浏览器会有大约300毫秒的等待事件.因为它想看看你是不是要进行双击(double tap)操作.

## 4.3. Fullscreen

    $.AMUI.fullscreen接口调用

    .request()
    使元素全屏.接收一个DOM元素作为参数,默认为html.

    .exit()
    退出全屏模式

    .toggle()
    全屏模式切换


    属性:
    .isFullscreen
    布尔值,是否处于全屏模式

    .element
    返回当前处于全屏模式的元素,没有则返回null.

    .enabled
    是否允许全屏模式.

    .raw
    返回包含原始方法名称的对象,对象key包括: requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled
    fullscreenchange fullscreenerror