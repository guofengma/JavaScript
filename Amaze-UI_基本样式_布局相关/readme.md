<!-- TOC -->

- [1. Amaze-UI](#1-amaze-ui)
    - [1.1. CSS基本样式](#11-css基本样式)
        - [1.1.1. 样式统一](#111-样式统一)
        - [1.1.2. 基础设置](#112-基础设置)
        - [1.1.3. 文字排版](#113-文字排版)
        - [1.1.4. 打印样式](#114-打印样式)
    - [1.2. 布局相关](#12-布局相关)
        - [1.2.1. 网格Grid](#121-网格grid)
        - [1.2.2. 进阶使用](#122-进阶使用)
        - [1.2.3. 等分网格](#123-等分网格)

<!-- /TOC -->

# 1. Amaze-UI

    Amaze UI 以移动优先为理念,从小屏逐步扩展到大屏,最终实现所有屏幕适配,适应移动端互联潮流.
    Amaze UI 关注中文排版,根据用户代理调整字体,实现更好的中文排版效果;
    Amaze UI 面向HTML5开发,使用CSS3来做动画交互,平滑 高效 更适合移动设备,让Web 应用更快速载入.


        Amaze UI Web 与 Amaze UI Touch对比
        
                Amaze UI Web                            Amaze UI Touch
            
    定位        移动优先 响应式 跨屏UI组件库              专属移动端的UI组件库
    JS基础库    jQuery                                  Reack
    CSS预处理   Less                                    Sass
    Grid       基于float 12列响应式                    基于flexbox 6列流式
    兼容性     兼容主流界面 移动浏览器
               优先支持IE8 

    适用场景    响应式或移动网站                        针对手机端开发
               熟悉jQuery                             能够驾驭Reack及相关配套技术
               兼容性要求较广
               更适合后端渲染渲染架构


## 1.1. CSS基本样式

    
    响应式断点:
        small   sm  0-640px(处理绝大数手机的横竖屏模式)
        meduim  md  641-1024px(平板的横竖屏模式)
        large   lg  1025px+(桌面设备)
    
    
    Amaze UI CSS大致分为四个部分
    
    基础(默认)样式:
        使用normalize.css统一浏览器差异,以及一些基础的元素样式

    布局样式:
        包含用于布局的Grid AVG Grid,以及一些辅助Class

    元素的样式:
        对 code form table等HTML元素定义更多的样式

    页面组件:
        定义网页中常用的,多个元素组合在一起的组件样式,如分页,面包屑导航等.
    
    
### 1.1.1. 样式统一

    normalize.css 统一样式的同时保留可辨识性;reset统一样式完全没有可读性.
    Amaze UI也使用了 normalize.css,但部分细节做了一些调整:
        > html 添加 -webkit-font-smoothing:antialiased;
        > <img> 设置最大宽度为 100%
        > <figure>外边距设置为 0
        > <textarea>添加 vertical-align:top;resize:vertical;
        > 移除<dfn>斜体字样式
        > 移除<h1>样式
        
### 1.1.2. 基础设置

    盒模型:
    Amaze UI将所有元素的盒模型设置为 border-box.
```css
*{
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}
```
    
    字号及单位:
    Amaze UI 将浏览器的基准字号设置为 62.5%,也就是10px, 然后在body上应用了 font-size:1.6rem;将页面字号设置为16px;
```css
html{
    font-size:62.5%;
}
body{
    font-size:1.6rem;
}
```

### 1.1.3. 文字排版

    Amaze UI主要使用非衬线字体(sans-serif),在<code> <pre>等元素上则设置了等宽字体(monospace).

    字体定义:
```css
body {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans","wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
}
```

    元素基本样式:
    <h1> - <h6> 保持粗体,设置了边距; <h1>为正常字号的1.5倍; <h2>为正常字号的1.25倍;其他保持正常字号.

    
    引用:
    <blockquote> 来源放到 <small>元素里面
```html
<blockquote>
  <p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
  <small>马尔克斯 ——《百年孤独》</small>
</blockquote>
```

    图片:
    <img class="am-img-responsive" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" alt="">


### 1.1.4. 打印样式

    打印样式组件,打印时将color设置成黑色,删除 background text-shadow box-shadow样式,以节省打印机耗材,加快打印速度.


    <abbr title="http://www.baidu.com">baidu</abbr>
    鼠标移到 baidu 上面时 会显示 http://www.baidu.com 
    
    <abbr>标签最初时在HTML4.0中引入的,表示它所包含的文本是一个更长的单词或短语的缩写形式.所有浏览器都支持<abbr>标签.
    

    辅助class
    am-print-hide 浏览器可见,打印机隐藏

    am-print-block,am-print-inline-block,am-print-inline 打印机可见,浏览器隐藏.在打印机中分别对应为 block inline-block inline样式


## 1.2. 布局相关
  
  
### 1.2.1. 网格Grid

    Amaze UI使用了12列的响应式网格系统.使用时需在外围容器上添加 .am-g class,在列上添加 .am-u[sm|md|lg]-[1-12]class
    然后根据不同的屏幕需求设置不同的宽度.


    1. 一个基本的网格：
```html
<div class="am-g">
    <div class="am-u-sm-4">4</div>
    <div class="am-u-sm-8">8</div>
</div>
```

    2. 不同区间不同的划分比例
```html
<div class="am-g">
    <div class="am-u-sm-6 am-u-md-4 am-u-lg-3">sm-6 md-4 lg-3</div>
    <div class="am-u-sm-6 am-u-md-8 am-u-lg-9">sm-6 md-8 lg-9</div>
</div>
```

    3. 限制行的宽度:
    Amaze UI中, .am-g的宽度被设置为100%,未限定最大宽度,会随着窗口自动缩放.可以在行上添加 .am-g-fixed class,将最大宽限制为1000px.
```html
<div class="am-g am-g-fixed">
    <div class="am-u-sm-4">4</div>
    <div class="am-u-sm-8">8</div>
</div>
```

    4. 全宽的行
```html
<div class="am-g am-g-fixed">
    <div class="am-u-sm-12">12</div>
</div>
```

    5. 容器 .am-container
    
```html
<div class="am-container">
    I am in the .am-container
</div>

<!-- 网格行限制宽度 -->
<div class="am-g am-g-fixed">
    <div class="am-u-sm-6 no">.am-u-sm-6</div>
    <div class="am-u-sm-6 no">.am-u-sm-6</div>
</div>

<div class="am-container">
    <div class="am-g am-g-fixed">
        <div class="am-u-sm-6 no">.am-u-sm-6</div>
        <div class="am-u-sm-6 no">.am-u-sm-6</div>
    </div>
</div>
```
    .am-container的样式为:
```css
.am-container{
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    margin-left:auto;
    margin-right:auto;
    padding-left:1rem;
    padding-right:1rem;
    width:100%;
    max-width:1000px;
}
@media only screen and (min-width:614px){
    .am-container{
        padding-left:1.5rem;
        padding-right:1.5rem;
    }
}
```

    6. 多行网格
```html
<!-- 第一种方法 -->
<div class="am-g">
    <div class="am-u-sm-6">am-u-sm-6</div>
    <div class="am-u-sm-6">am-u-sm-6</div>
</div>
<div class="am-g">
    <div class="am-u-sm-6">.am-u-sm-6</div>
    <div class="am-u-sm-6">.am-u-sm-6</div>
</div>
<div class="am-g">
    <div class="am-u-sm-6">am-u-sm</div>
    <div class="am-u-sm-6">am-u-sm</div>
</div>


<!-- 第二种写法 -->
<div class="am-g am-g-fixed">
  <div class="am-u-sm-6">.am-u-sm-6</div>
  <div class="am-u-sm-6">.am-u-sm-6</div>

  <div class="am-u-sm-6">.am-u-sm-6</div>
  <div class="am-u-sm-6">.am-u-sm-6</div>

  <div class="am-u-sm-6">.am-u-sm-6</div>
  <div class="am-u-sm-6">.am-u-sm-6</div>
</div>
```
    上面两种写法都没有问题,但出于对每行样式控制的方便程度考虑,推荐第一种.


    7. 不足12份的网格
    网格拆分时使用了非整数的百分比,浏览器在计算的时候会有一些差异,最终所有列的宽度和可能没有达到100%,导致网格右侧会有很小的空隙.
    因此,向右浮动最后一列,以填满行的右边.

    实际使用中,如果行的网格数不足12,需要在最后一列上添加 .am-u-end.
```html
<div class="am-g">
    <div class="am-u-sm-3 no">3</div>
    <div class="am-u-sm-3 no">3</div>
    <div class="am-u-sm-3 no">3</div>
</div>
<!-- 上面的写法 最后一个网格会显示在最后 -->


<div class="am-g">
    <div class="am-u-sm-3 no">3</div>
    <div class="am-u-sm-3 no">3</div>
    <div class="am-u-sm-3 no am-u-end">3</div>
</div>
<!-- 在添加了 am-u-end class后, 三个会排成一列 -->
```

### 1.2.2. 进阶使用

    1. 列边距
    添加 am-u-sm-offset-    am-u-md-offset- am-u-lg-offset 设置列的左边距

    2. 居中的列
    am-u-sm-centered
```html
<div class="am-g">
    <div class="am-u-sm-6 am-u-lg-centered"></div>
</div>

<!-- .am-u-lg-centered 大于1024时居中 -->
<div class="am-g">
    <div class="am-u-sm-6 am-u-lg-centered">
</div>

<!-- 大于1024时不居中 -->
<div class="am-g">
    <div class="am-u-sm-6 am-u-sm-centered am-u-lg-uncentered no">1024 uncentered</div>
</div>


<!-- 始终居中 -->
<div class="am-g">
    <div class="am-u-sm-11 am-u-sm-centered no">11 centered</div>
</div>
```

### 1.2.3. 等分网格

    Average Grid,均分网格(原block grid),使用ul/ol创建等分列,用于内容的排列.

    响应式断点为:
        .am-avg-sm-             0-640px
        .am-avg-md-             641-1024px
        .am-avg-lg-             1025px+

    与布局网格不同的是,这里的数字表示几等分,而不是占有12等分中的几列, 比如 .am-avg-sm-2会将子元素<li>的宽度设置为 50%.
    
    注意: AVG Grid只能用于 <ul>/<ol>结构


    基本使用:
    只添加 .am-avg-sm-*,应用于所有屏幕尺寸.
```html
<ul class="am-avg-sm-4 am-thumbnails">
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/being-1.jpg"/></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/being-2.jpg"/></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/being-3.jpg"/></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/being-4.jpg"/></li>    
</ul>
```
    
    
    按需增加更多响应式class,缩放窗口可以查看响应效果.在不同的显示屏幕下显示不同的数量
```html
<ol class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-thumbnails">
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt="" /></li>
    <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" alt="" /></li>        
</ol>
```