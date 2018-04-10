<!-- TOC -->

- [1. jQuery Mobile](#1-jquery-mobile)
    - [1.1. 什么是jQuery Mobile](#11-什么是jquery-mobile)
    - [1.2. 在页面中添加 jQuery Mobile](#12-在页面中添加-jquery-mobile)
    - [1.3. 页面作为对话框使用](#13-页面作为对话框使用)

<!-- /TOC -->

# 1. jQuery Mobile

    jQuery Mobile是用于创建移动 Web 应用的前端开发框架.
    jQuery Mobile可以应用于智能手机和平板电脑.
    jQuery Mobile使用HTML5 & CSS3 最小的脚本来布局网页.

## 1.1. 什么是jQuery Mobile

    jQuery Mobile 是针对触屏智能手机与平板电脑的网页开发框架.
    jQuery Mobile 构建于 jQuery 以及 jQuery UI类库之上，如果您了解 jQuery，您可以很容易的学习 jQuery Mobile。
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