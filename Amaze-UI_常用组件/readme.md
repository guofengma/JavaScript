<!-- TOC -->

- [1. 小徽章Badge](#1-小徽章badge)
- [2. 面包屑导航](#2-面包屑导航)
- [3. 按钮组](#3-按钮组)

<!-- /TOC -->

# 1. 小徽章Badge

    添加 .am-badge class 到 <div>或者<span>元素.
    
```html
<div class="am-badge">1</div>
<div class="am-badge am-badge-primary">2</div>
<div class="am-badge am-badge-secondary">3</div>
<div class="am-badge am-badge-success">4</div>
<div class="am-badge am-badge-warning">5</div>
<div class="am-badge am-badge-danger">6</div>
```

    圆角样式:
    .am-radius
```html
<span class="am-badge am-radius">1</span>
<span class="am-badge am-radius am-badge-warning">2</span>
<span class="am-badge am-radius am-bage-danger">3</span>
<span class="am-badge am-radius am-badge-success">4</span>
<span class="am-badge am-radius am-badge-primary">5</span>   
```

    椭圆样式:
    .am-round

    大小:
    default     
    .am-text-sm
    .am-text-default
    .am-text-large
    .am-text-xl


# 2. 面包屑导航

    .am-breadcrumb面包屑导航
```html
<ol class="am-breadcrumb">
    <li><a href="#">首页</a></li>
    <li><a href="#">分类</a></li>
    <li class="am-active">内容</li>
</ol>
```

    斜杠分隔符:
    .am-breadcrumb-slash
```html
<ol class='am-breadcrumb am-breadcrumb-slash'>
    <li><a href="#">首页</a></li>
    <li><a href="#">文章</a></li>
    <li><a href="#">图片</a></li>
    <li>视频</li>
</ol>
```

    结合Icon：
    添加图标相应class即可.

# 3. 按钮组

    把一系列要使用的 .am-btn 按钮放入 .am-btn-group
```html
<div class="am-btn-group">
    <button class="am-btn am-btn-primary">天</button>
    <button class="am-btn am-btn-success">地</button>
    <button class="am-btn am-btn-danger">玄</button>
    <button class="am-btn am-btn-warning">黄</button>        
</div>
```

    垂直排列:
    使用 .am-btn-group-stacked 使按钮垂直排列显示


    自适应宽度:
    添加 .am-btn-group-justify class 让按钮组例的按钮平均分布,填满容器宽度.