<!-- TOC -->

- [1. HTML元素](#1-html元素)
    - [1.1. Button](#11-button)
    - [1.2. 代码code](#12-代码code)
    - [1.3. 表单](#13-表单)
        - [1.3.1. 表单排列](#131-表单排列)
    - [1.4. 图片](#14-图片)
    - [1.5. 表格](#15-表格)

<!-- /TOC -->

# 1. HTML元素


## 1.1. Button

    1. 基本使用
    在要应用按钮样式的元素上添加 .am-btn,再设置相应的颜色.

        .am-btn-default     默认,灰色按钮
        .am-btn-primary     蓝色按钮
        .am-btn-secondary   浅蓝色按钮
        .am-btn-success     绿色按钮
        .am-btn-warning     橙色按钮
        .am-btn-danger      红色按钮
        .am-btn-link
```html
<button class="am-btn am-btn-default">default</button>
<button class="am-btn am-btn-primary">primary</button>
<button class="am-btn am-btn-secondary">secondary</button>
<button class="am-btn am-btn-success">success</button>
<button class="am-btn am-btn-warning">warning</button>
<button class="am-btn am-btn-danger">danger</button>
<a href="http://www.baidu.com" class="am-btn-danger">百度</a>    
```

    2. 圆角按钮
    .am-radius class
```html
<button class="am-btn am-radius am-btn-success">成功</button>
```

    3. 椭圆形按钮
    在默认样式上的基础上添加 .am-round class
```html
<button class="am-btn am-round am-btn-success">成功</button>
```

    4. 激活状态
    在按钮上添加 .am-active class

    5. 禁用状态
    在按钮上设置 disabled 属性或者添加 .am-disabled class
```html
<button class="am-btn am-btn-success am-disabled">成功</button>
```
    IE9会把设置了 disabled 属性的button元素文字渲染成灰色并加上白色阴影,CSS无法控制这个默认样式


    6. 按钮尺寸
        .am-btn-xl
        .am-btn-lg
        .am-btn-default
        .am-btn-sm
        .am-btn-xs
```html
<button class="am-btn am-btn-default am-btn-danger">危险</button>
<button class="am-btn am-btn-danger am-btn-xs">危险</button>
<button class="am-btn am-btn-danger am-btn-sm">危险</button>
<button class="am-btn am-btn-danger am-btn-lg">危险</button>
<button class="am-btn am-btn-danger am-btn-xl">危险</button>
```

    7. 块级显示
```html
<button class="am-btn am-btn-block am-btn-success">成功</button>
```

    8. 按钮 Icon
    使用 icon 之前需先引入 icon 组件
```html
<button class="am-btn am-btn-default">
    <i class="am-icon-cog"></i>
    设置
</button>

<a class="am-btn am-btn-warning" href="#">
  <i class="am-icon-shopping-cart"></i>
  结账
</a>

<button class="am-btn am-btn-default">
  <i class="am-icon-spinner am-icon-spin"></i>
  加载中
</button>

<button class="am-btn am-btn-primary">
  下载片片
  <i class="am-icon-cloud-download"></i>
</button>
```

## 1.2. 代码code

    定义代码样式：

    使用<code>标签的代码:
    <code>code here</code>

    <pre>
        window.addEventListener('load',function(){
            FastClick.attach(document.body);
        },false);
    </pre>

    
    代码块高度:
    添加 .am-pre-scrollable 限制代码块高度,默认为24rem.


## 1.3. 表单

    1. 单选/复选框
    checkbox radio类型的 <input> 与其他元素稍有区别:
        块级显示时在容器上添加 .am-checkbox .am-radio class
        行内显示时在容器上添加 .am-checkbox-inline .am-radio-inline class

        
    2. 表单形状
    .am-radius  圆角    
    .am-round   椭圆


    3. 表单域状态
    设置表单元素的不同状态：        
        给<input>添加 disabled 属性以禁用表单元素.
        给<fieldset>元素增加 disabled 属性,禁用所有的子元素
        
```html
<form action="" class="am-form">
    <fieldset disabled>
        <div class="am-form-group">
            <label for="">禁用的文本框</label>
            <input type="text" class="am-form-field" placeholder="禁止输入">
        </div>

        <div class="am-form-group">
            <label for="">禁用的下拉选框</label>
            <select name="" id="" class="am-form-field">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
        </div>

        <div class="am-checkbox">
            <label for="">
                <input type="checkbox" name="" id="">无法选中的复选框
            </label>
        </div>
        <button type="submit" class="am-btn am-btn-primary">Submit</button>
    </fieldset>
</form>
```
    4. 禁用链接
    <a>元素设置禁用状态需要加上 .am-disabled class
    
    <a href="http://www.baidu.com" class="am-btn am-disabled">百度</a>
    
    
### 1.3.1. 表单排列

    水平排列

    在form 添加 .am-form-horizontal class并结合网格系统使用.
```html
<form action="" class="am-form am-form-horizontal">
    <div class="am-form-group">
        <label for="" class="am-form-label am-u-sm-2">邮件</label>
        <div class="am-u-sm-10">
            <input type="email" name="" id="" placeholder="请输入邮件">
        </div>
    </div>

    <div class="am-form-group">
        <label for="" class="am-form-label am-u-sm-2">密码</label>
        <div class="am-u-sm-10">
            <input type="password" class="am-u-sm-10" placeholder="请输入密码">
        </div>
    </div>
</form>
```

    行内排列
    在外围容器上添加 .am-form-inline. 注意:行内排列的元素并没有设置右边距,默认使用inline-block元素的间距,压缩HTML后行内
    表单元素的右边距会消失,需要自行处理.
    
```html
<form action="" class="am-form-inline" role="form">
    <div class="am-form-group">
        <input type="email" class="am-form-field" placeholder="电子邮件">
    </div>
    <div class="am-form-group">
        <input type="password" class="am-form-field" placeholder="密码">
    </div>
    <button type="submit" class="am-btn am-btn-default">登陆</button>
</form>
```

    表单域 icon
    表单 group 元素上添加 .am-from-icon,依赖icon组件
```html
<form class="am-form-inline am-form">
    <div class="am-form-group am-form-icon">
        <i class="am-icon-calendar"></i>
        <input type="text" class="am-form-field" placeholder="日期">
    </div>

    <div class="am-form-group am-form-icon">
        <i class="am-icon-clock-o"></i>
        <input type="text" class="am-form-field" placeholder="事件">
    </div>
</form>
```
    注意:可输入类型的 input 元素上需要添加 .am-form-field


    单个域大小：
    在表单元素上添加以下类名:
    am-input-lg
    am-input-sm

```html
<form action="" class="am-form">
    <input type="text" class="am-form-field am-input-lg" value="添加了am-input-lg">
    <input type="text" class="am-form-field" value="常规">
    <input type="text" class="am-form-field am-input-sm" value="添加了am-input=sm">
</form>
```

## 1.4. 图片

    基础样式定义在base中
```css
img{
    box-sizing:border-box;
    vertical-align:middle;
    border:0;
}
```

    圆角样式:
    为<img>元素设置不同的class,增强其样式.
        .am-radius  圆角
        .am-round   椭圆
        .am-circle  圆形,一般用于正方形的图片


    边框:
    .am-img-thumbnail


## 1.5. 表格

    基本样式:
    添加 .am-table

```html
<table class='am-table'>
    <thead>
        <tr>
            <td>网站名称</td>
            <td>网址</td>
            <td>创建事件</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Amaze UI</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
        </tr>
        <tr class="am-active">
            <td>Amaze UI(Active)</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
        </tr>
    </tbody>
</table>
```

    基本边框：
    添加 .am-table-bordered类


    圆角边框：
    .am-table-bordered  .am-table-radius 外层圆角边框通过 box-shadow实现.


    单元格状态:
    表示表格状态的 class 添加到 tr 整行整行,添加到td高亮单元格.
        .am-active      激活;
        .am-disabled    禁用;
        .am-primary     蓝色高亮
        .am-success     绿色高亮
        .am-warning     橙色高亮
        .am-danger      红色高亮

        设置在 table 元素上
        .am-table-striped   斑马纹效果
        .am-table-hover     hover状态


        紧凑型:
        添加 .am-table-compact class 调整padding显示更紧凑的单元格.


        响应式表格:
        .am-text-nowrap             禁止文字换行
        .am-scrollable-horizontal   内容超出容器宽度时显示水平滚动条

        .am-table-centered          实现文本内容居中显示
        单元格上添加 .am-text-middle    可以实现垂直居中