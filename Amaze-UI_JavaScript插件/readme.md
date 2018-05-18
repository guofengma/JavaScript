<!-- TOC -->

- [1. 轮播图](#1-轮播图)
- [2. 滚动监测](#2-滚动监测)
- [3. 滚动侦测导航](#3-滚动侦测导航)

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