<!-- TOC -->

- [1. jQuery Mobile](#1-jquery-mobile)
    - [1.1. 什么是jQuery Mobile](#11-什么是jquery-mobile)
    - [1.2. 在页面中添加 jQuery Mobile](#12-在页面中添加-jquery-mobile)
    - [1.3. 页面作为对话框使用](#13-页面作为对话框使用)
    - [1.4. jQuery Mobile过渡](#14-jquery-mobile过渡)
    - [1.5. jQuery Mobile按钮](#15-jquery-mobile按钮)
        - [1.5.1. 导航按钮](#151-导航按钮)
        - [1.5.2. 内联按钮](#152-内联按钮)
        - [1.5.3. 组合按钮](#153-组合按钮)
        - [1.5.4. 后退按钮](#154-后退按钮)
    - [1.6. 按钮图标](#16-按钮图标)
        - [1.6.1. 定位图标](#161-定位图标)
        - [1.6.2. 只显示图标](#162-只显示图标)
        - [1.6.3. 移除圆圈](#163-移除圆圈)
        - [1.6.4. 黑色/白色按钮](#164-黑色白色按钮)
    - [1.7. jQuery Mobile弹窗](#17-jquery-mobile弹窗)

<!-- /TOC -->

# 1. jQuery Mobile

    jQuery Mobile是用于创建移动 Web 应用的前端开发框架.
    jQuery Mobile可以应用于智能手机和平板电脑.
    jQuery Mobile使用HTML5 & CSS3 最小的脚本来布局网页.

## 1.1. 什么是jQuery Mobile

    jQuery Mobile 是针对触屏智能手机与平板电脑的网页开发框架.
    jQuery Mobile 构建于 jQuery 以及 jQuery UI类库之上,如果您了解 jQuery,您可以很容易的学习 jQuery Mobile。
    jQuery Mobile 使用了极少的 HTML5、CSS3、JavaScript 和 AJAX 脚本代码来完成页面的布局渲染.

    jQuery Mobile兼容所有移动设备.但是并不能完全兼容PC机(由于有限的CSS3支持).

```js
<div data-role="page">

    <div data-role='header'>
        <h1>欢迎来到我的主页</h1>
    </div>

    <div data-role='main' class="ui-content">
        <p>我现在是一个移动端开发者</p>
    </div>

    <div data-role="footer">
        <h1>底部文本</h1>
    </div>
</div>
```

    实例解析:
    data-role="page"    是在浏览器中显示的页面
    data-role="header"  是在页面顶部创建的工具条(通常用于标题或者搜索按钮)
    data-role="main"    定义了页面的内容,比如文本 图片 表单按钮等
    'ui-content'        类用于在页面添加内边距和外边距
    data-role='footer'  用于创建页面底部工具条

    在这些容器中你可以添加任何HTML元素 - 段落 图片 标题 列表等.
    
    注意:jQuery Mobile依赖HTML5 data-*属性来支持各种UI元素,过渡和页面结构.不支持它们的浏览器将以静默方式弃用它们.
    

## 1.2. 在页面中添加 jQuery Mobile


    使用 jQuery Mobile,你可以在单个HTML文件中创建多个不同的页面.
```html
<div data-role="page" id="pageone">
    <div data-role='main' class="ui-content">
        <a href="#pagetwo">跳转到第二个页面</a>
    </div>
</div>

<div data-role="page" id="pagetwo">
    <div data-role="main" class="ui-content">
        <a href="#pageone">跳转到第一个页面</a>
    </div>
</div>
```

## 1.3. 页面作为对话框使用


    对话框是用于显示页面信息显示或者表单信息的输入.
    在链接中添加 data-rel='dialog'让用户点击链接时弹出对话框:
```html
<div data-role="page" id="pageone">
  <div data-role="main" class="ui-content">
    <a href="#pagetwo">跳转到第二个页面</a>
  </div>
</div>

<div data-role="page" data-dialog="true" id="pagetwo">
  <div data-role="main" class="ui-content">
    <a href="#pageone">跳转到第一个页面</a>
  </div>
</div>
```

## 1.4. jQuery Mobile过渡

    jQuery Mobile包含CSS3效果让您选择页面打开的方式.
    页面过渡效果可被应用于任何使用 data-transition 属性的链接或表单
    页面切换效果可被应用于任何使用 data-transition 属性的链接或表单提交

    fade        默认,淡入到下一页
    flip        从后向翻转到下一页
    flow        抛出当前页,进入下一页
    pop         像弹出窗口那样转到下一页
    slide       从右向左滑动到下一页
    slidefade   从右向左滑动并淡入到下一页
    slideUp     从下到上滑动到下一页
    slideDown   从上到下滑动到下一页


    注意:面的所有效果支持后退行为。例如,如果您想要页面从左向右滑动,而不是从右向左滑动,请使用带有 "reverse" 值的 data-direction 属性.
    在后退按钮上这是默认的.
```js
<a href="#pagetwo" data-transition="slide" data-direction="reverse">切换</a>
```

## 1.5. jQuery Mobile按钮

    Mobile应用程序是建立在你想要显示的简单的点击事物上.

    在jQuery Mobile中,按钮可以通过三种方式创建:
        <button>
        <input>
        使用带有 data-role="button"的<a>元素

    在jQuery Mobile中,按钮会自动样式化,让它们在移动设备上更具吸引力和可用性.我们推荐您使用带有 data-role="button"
    的<a>元素在页面间进行链接,使用<input>或<button>元素进行表单提交.

### 1.5.1. 导航按钮

    如需通过按钮在页面间进行链接,请使用带有 data-role='button'属性的<a>元素.
```js
<a href="http://www.baidu.com" data-role="button">百度</a>
```

### 1.5.2. 内联按钮

    默认情况下,按钮占满整个屏幕宽度,如果你想要一个仅是与内容一样宽的按钮,或者如果你想要并排显示两个或多个按钮,请
    添加 data-inline='true'
```js
<a href="http://www.baidu.com" data-role="button" data-inline="true">百度</a>
<a href="http://www.qq.com" data-role="button" data-inline="true">腾讯</a>
<a href="http://www.jindong.com" data-role="button" data-inline="true">京东</a>
```

### 1.5.3. 组合按钮

    jQuery Mobile提供了一个简单的方法来将按钮组合在一起.
    请把 data-role='controlgroup' 属性和 data-type='horizontal|vertical'一起使用来规定是否水平或垂直组合按钮.
```js
<div data-role="controlgroup" data-type="horizontal">
    <a href="#" data-role="button">按钮1</a>
    <a href="#" data-role="button">按钮2</a>
    <a href="#" data-role="button">按钮3</a>    
</div>
```
    默认情况下,组合按钮是垂直组合,它们之间没有外边距和空间.并且只有第一个和最后一个按钮是圆角,以便它们组合在一起的时候
    创建一个漂亮的外观.


### 1.5.4. 后退按钮

    如需创建后退按钮,请使用 data-rel='back'属性(这会忽略锚的href值)
```js
<a data-role="button" data-rel="back">返回</a>
```

## 1.6. 按钮图标

    jQuery Mobile提供了一套让按钮看起来更称心如意的图标.我们可以使用 ui-icon类将图标添加到按钮上,并可以使用指定类来
    设置按钮位置.
    
    我们可以使用 ui-icon 类将图标添加到按钮上,并可以使用指定类来设置按钮位置.

    ui-icon-arrow-l         左箭头
    ui-icon-arrow-r         右箭头
    ui-icon-info            信息
    ui-icon-delete          删除
    ui-icon-back            后退
    ui-icon-audio           扬声器
    ui-icon-lock            挂锁
    ui-icon-search          搜索

### 1.6.1. 定位图标

    你也可以规定图标定位在按钮的什么部位:顶部(top) 右侧(right) 底部(bottom) 左侧(left)
    使用 ui-btn-icon属性来指定位置:
```js
<a href="#" class="ui-btn ui-icon-search ui-btn-icon-left">左侧</a>
<a href="#" class="ui-btn ui-icon-search ui-btn-icon-bottom">下侧</a>
<a href="#" class="ui-btn ui-icon-search ui-btn-icon-right">右侧</a>
<a href="#" class="ui-btn ui-icon-search ui-btn-icon-top">上侧</a>
```

### 1.6.2. 只显示图标

    如果你只想显示图标,可以使用 'notext'
```js
<a href="#" class="ui-btn ui-icon-search ui-btn-icon-notext">搜索></a>
```

### 1.6.3. 移除圆圈

    默认情况下,所有的图标都有一个灰色的圆圈.如果你不需要他,可以在元素中使用 'ui-nodisc-icon'类:
```js
<a href="#" class="ui-btn ui-icon-home ui-btn-icon-notext ui-nodisc-icon"></a>
```

### 1.6.4. 黑色/白色按钮

    默认情况下,所有图标都是白色的.如果需要改变图标颜色为黑色,可以在元素添加 'ui-alt-icon':
```js
<a class='ui-btn ui-icon-search ui-btn-icon-left ui-alt-icon'>黑色</a>
```

## 1.7. jQuery Mobile弹窗

    弹窗是一个非常流行的对话框,弹窗可以覆盖在页面上展示.
    弹窗可用于显示一段文本,图片,地图或其他内容.