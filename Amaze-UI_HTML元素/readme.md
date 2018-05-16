<!-- TOC -->

- [1. HTML元素](#1-html元素)
    - [1.1. Button](#11-button)

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