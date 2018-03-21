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
    - [2.6. 引用](#26-引用)
    - [2.7. 列表](#27-列表)
    - [2.8. 用户输入](#28-用户输入)
- [3. 表格](#3-表格)
    - [3.1. 基本实例](#31-基本实例)
    - [3.2. 状态栏](#32-状态栏)
    - [3.3. 响应式表格](#33-响应式表格)
- [4. 表单](#4-表单)
    - [4.1. 基本实例](#41-基本实例)
    - [4.2. 内联表单](#42-内联表单)
    - [4.3. 水平排列的表单](#43-水平排列的表单)
- [5. 按钮](#5-按钮)
- [6. 响应式图片](#6-响应式图片)
    - [6.1. 快速浮动](#61-快速浮动)
    - [6.2. 内容块居中](#62-内容块居中)
    - [6.3. 清除浮动](#63-清除浮动)
    - [6.4. 显示或隐藏内容](#64-显示或隐藏内容)

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

    .text-lowercase     小写
    .text-uppercase     大写
    .text-capitalize    首字母大写

## 2.6. 引用

    默认样式的引用:
    将任何 HTML 元素 包裹在 <blockquote> 中即可表现为 引用 样式. 对于直接引用,我们建议用 <p> 标签
```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

    多种引用样式:
    对于标准样式的 <blockquote>,可以通过几个简单的变体就能改变风格和内容.

    添加 footer用于标明引用来源,来源的名称可以包裹进 <cite> 标签中.
```html
<blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

    通过赋予 .blockquote-reverse 类可以让引用呈现内容右对齐的效果.


## 2.7. 列表


    移除默认的样式 和 左侧外边距的一组元素
```html
<ul class="list-unstyled">
    <li></li>
</ul>
```

    class="list-inline" 可以将所有元素都放置在一行.

    
## 2.8. 用户输入

```html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```

# 3. 表格

    为任意 <table> 添加 .table 类可以为其赋予基本的样式  -- 少量的内部(padding) 和水平方向的分割线.

## 3.1. 基本实例

```html
<table class="table">
    <thead>
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Username</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kyrie</td>
            <td>Irving</td>
            <td>@ky</td>
        </tr>
        <tr>
            <td>Lebron</td>
            <td>James</td>
            <td>@LJ</td>
        </tr>
        <tr>
            <td>Kevin</td>
            <td>Durant</td>
            <td>@kd</td>
        </tr>
    </tbody>
</table>
```

    添加 .table-bordered 类为表格和其中的每个单元格增加边框
    .table-hover 类 可以让 <tbody> 中的每一行 对鼠标悬停状态做出响应.
    .table-condensed 类可以让表格更加紧凑,单元格中的内补 均会减半.

    以上 类名都是 添加到 table 标签里面的
    
    
## 3.2. 状态栏

    通过这些状态栏可以为行或单元格设置颜色

    class       描述
    .active     鼠标悬停在行或单元格上时所设置的颜色
    .success    标识成功或积极的动作
    .info       标识普通的提示信息或动作
    .warning    标识警告或需要用户注意
    .danger     标识危险或潜在的带来负面影响的动作


## 3.3. 响应式表格

    将任何 .table 元素 包裹在 .table-responsive 元素内,即可创建响应式表格.其会在小屏幕设备上(小于768px)水平滚动.
    当屏幕大于 768px 宽度时,水平滚动条消失.


# 4. 表单

    单独的表单控件会被自动赋予一些全局样式.所有设置了 .form-control 类的 <input> <textarea> 和 <select> 元素都将
    被默认设置宽度属性为 100%; 将label 元素和前面 提到的 控件包裹在 .form-group 中可以获得最好的排列.    

## 4.1. 基本实例

```html
<div class="form-group">
    <label for="Email">Email address</label>
    <input type="email" id="Email" class="form-control">
</div>
<div class="form-group">
    <label for="PassWord">passWord</label>
    <input type="text" class="form-control" id="PassWord">
</div>
```

## 4.2. 内联表单

    为<form> 元素添加 .form-line 类可使其内容 左对齐 并且表现为 inline-display 级别的控件.只适用于视口(viewport)至少
    在768px宽度时(视口宽度再小的话就会使表单折叠)

## 4.3. 水平排列的表单

    通过为表单添加 .form-horizontal 类,并联合使用 Bootstrap 预制的栅格类,可以将 label 标签和控件组 水平并排布局.这样
    做将改变 .form-group 的行为.使其表现为栅格系统中的行.


# 5. 按钮

    跨浏览器展现：
    强烈建议尽可能使用 <button> 元素来获得在各个浏览器上获得相匹配的绘制效果.

```html
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-danger">Danger</button>
```

# 6. 响应式图片

    在Bootstrap版本3中,通过为图片添加 .img-responsive类可以让图片支持响应式布局.其实质是为图片设置了 max-width:100%;
    height:auto; 和 display:block; 属性,从而让图片在其父元素中更好的缩放.

    如果需要让使用了 .img-responsive 类的图片水平居中,请使用 .center-block 类.

    ps:为什么我设置的图片在移动端情况下没有用?


## 6.1. 快速浮动

```html
<div class="pull-left">...</div>
<div class="pull-right">...</div>
```

## 6.2. 内容块居中

    设置类名 .center-block; 即可

## 6.3. 清除浮动

    通过为父元素 添加 .clearfix 类可以很容易地清除浮动.

## 6.4. 显示或隐藏内容

    .show 和 .hidden 类可以强制任意元素显示或隐藏(对于屏幕阅读器也能起效),这些类通过 !important来避免CSS样式优先级问题.

    .hide类仍然可用,但是它不能对屏幕阅读器起作用,并从v3.0.1版本开始就不建议使用了.请使用 .hidden或 .sr-only
    另外, .invisible 类可以被用来仅仅影响元素的可见性,也就是说,元素的display属性不被改变,并且这个元素仍然能够影响文档流的
    排布.


    .hidden/.invisible区别
    .hidden 从文档流消失,而.invisible还存在于之前的文档流.