<!-- TOC -->

- [1. 移动设备优先](#1-移动设备优先)
    - [1.1. 布局容器](#11-布局容器)
    - [1.2. 栅格系统](#12-栅格系统)
    - [1.3. 栅格参数](#13-栅格参数)
    - [1.4. 实例:移动设备和桌面屏幕](#14-实例移动设备和桌面屏幕)
    - [1.5. 实例:多余的列(column)将另起一行排列](#15-实例多余的列column将另起一行排列)
    - [1.6. 列偏移](#16-列偏移)
    - [1.7. 嵌套列](#17-嵌套列)
    - [1.8. 列排序](#18-列排序)
- [2. 排版](#2-排版)
    - [2.1. 标题](#21-标题)
    - [2.2. 页面主体](#22-页面主体)
    - [2.3. 中心内容](#23-中心内容)
    - [2.4. 对齐方式](#24-对齐方式)
    - [2.5. 改变大小写](#25-改变大小写)

<!-- /TOC -->



# 1. 移动设备优先

    Bootstrap是最受欢迎的HTML CSS 和JS框架,用于开发响应式布局,移动设备优先的WEB项目.

    在 Bootstrap 2 中，我们对框架中的某些关键部分增加了对移动设备友好的样式.而在 Bootstrap 3 中，我们重写了整个框架，使其一开
    始就是对移动设备友好的.这次不是简单的增加一些可选的针对移动设备的样式，而是直接融合进了框架的内核中.也就是说，Bootstrap 
    是移动设备优先的.针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件.


    为了确保适当的绘制和触屏缩放,需要在<head>之中添加viewport元数据标签.
    <meta name="viewport" content="width=device-width,initial-scale=1">

    在移动设备浏览器上,通过为视口(viewport)设置meta属性为 user-scalable=no 可以禁用其缩放(zooming)功能.这样禁
    用缩放功能后,用户只能滚动屏幕,就能让你的网站看上去更像原生应用的感觉.

## 1.1. 布局容器

    Bootstrap需要为页面内容和栅格系统包裹一个 .container 容器. 
        .container 类用于固定宽度并支持响应式布局的容器
        .container-fluid 类用于100%宽度,占据全部视口 (viewport)的容器
    这两种容器不能嵌套使用

## 1.2. 栅格系统

    Bootstrap提供了一套响应式,移动设备优先的流式栅格系统,随着屏幕或视口尺寸的增加,系统会自动分为最多12列.

    栅格系统通过一系列的 行(row) 于 列(column)的组合来创建页面布局.

        行(row)  必须包含在 .container 或.container-fluid 中,以便为其赋予合适的排列
        通过行(row) 在水平方向上创建一组 列(column)
        你的内容应当放置于 列(column)内,并且只有 列(column) 可以作为行(row)的直接子元素

## 1.3. 栅格参数

    超小屏幕 手机(<768px)    小屏幕 平板(>=768px)    中等屏幕 桌面显示器(>=992px)   大屏幕 大桌面显示器(>=1200px)    

    .col-xs-                .col-sm-                .col-md-                    .col-lg


## 1.4. 实例:移动设备和桌面屏幕

```html
<div class="container-fulid">
    <div class="row">
        <div class="col-xs-12 col-md-8 no1"></div>
        <div class="col-xs-6 col-md-4 no1"></div>
    </div>
    <div class="row">
        <div class="col-xs-6 col-md-4 no2"></div>
        <div class="col-xs-6 col-md-4 no2"></div>
        <div class="col-xs-6 col-md-4 no2"></div>
    </div>
    <div class="row">
        <div class="col-xs-6 no1"></div>
        <div class="col-xs-6 no1"></div>
    </div>
</div>
```

## 1.5. 实例:多余的列(column)将另起一行排列

    如果在一个 .row 内包含的列大于12个,包含多余列的元素将作为一个整体单元被另起一行排列.
```html
<div class="row">
    <div class="col-xs-9 no1"></div>
    <div class="col-xs-3 no2"></div>
    <div class="col-xs-6 no1"></div>
</div>
```

## 1.6. 列偏移

    使用 .col-md-offset-* 类可以将列向右侧偏移.这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距
```html
<div class="row">
    <div class="col-xs-9 no1"></div>
    <div class="col-xs-3 no2"></div>
    <div class="col-xs-6 no1 col-xs-offset-3"></div>
</div>
```

## 1.7. 嵌套列

    为了使用内置的栅格系统将内容再次嵌套,可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-*元素
    内.被嵌套的行 所包含的 列 的个数 不能超过12个.

```html
<div class="row">
    <div class="col-md-4 col-sm-6 col-xs-12 no1">
        <div class="row">
            <div class="col-xs-6 no2 ">123</div>
            <div class="col-xs-6 no1 ">123</div>                    
        </div>
    </div>
</div>
```

## 1.8. 列排序

    通过使用 .col-md-push-* 和.col-md-pull-* 类可以很容易的改变列的顺序.

    .col-md-push-* 向后推 * 位
    .col-md-pull-* 向前推 * 位

# 2. 排版

    
## 2.1. 标题

    HTML 中的所有标题标签,<h1>到<h6>均可使用,另外,还提供了 .h1 到 .h6 类

    在标题内还可以包含 <small> 标签或赋予 .small 类的元素,可以用来标题副标题

## 2.2. 页面主体

    Bootstrap将全局 font-size 设置为 14px, line-height 设置为 1.428.这些属性直接赋予 <body>元素 和 所有段落元素.
    另外<p>还被设置了等于1/2 行高 的底部外边距

## 2.3. 中心内容

    通过添加 .lead 类可以让段落突出显示.

    <mark>  文本带背景颜色
    <del>   删除线的文本
    <s>     无用的文本,会有多条删除线
    <u>     为文本添加下划线
    <small> 小号文本
    <strong> 着重
    <em>    斜体

## 2.4. 对齐方式

    .text-left              左对齐
    .text-center            中间对齐
    .text-right             右对齐
    .text-justify           设定文本对齐,段落中超出屏幕部分文字自动换行
    .text-nowrap            段落中超出屏幕部分不换行

## 2.5. 改变大小写

    lower