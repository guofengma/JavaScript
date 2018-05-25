<!-- TOC -->

- [1. 原生JS以图片动画切换方式的轮播图功能](#1-原生js以图片动画切换方式的轮播图功能)
- [2. 需要复习的内容](#2-需要复习的内容)
- [3. 原生JS利用透明度切换图片](#3-原生js利用透明度切换图片)

<!-- /TOC -->

# 1. 原生JS以图片动画切换方式的轮播图功能

    1. 轮播图会自动轮播切换(默认从右往左切换);
    2. 点击左右按钮,分别从左向右 从右向左切换
    3. 点击下方小按钮,修改对应小按钮的样式,并切换成小按钮对应按钮的图片
    4. 每次切换图片,都需要修改图片所对应小按钮的样式
    
# 2. 需要复习的内容

    DOM的插入 删除 查找  替换
```js
// 创建一个 img 元素节点
var Img = document.createElement("img");

// 在body后插入刚刚创建的img元素
document.body.appendChild(Img);

// 删除某个元素
document.body.removeChild(Img);

// 创建多个元素,删除特定的子元素
for(let i = 1; i < 5; i ++){
    var Img = document.createElement("img");
    Img.src = 'http://s.amazeui.org/media/i/demos/bing-'+ i + '.jpg';
    document.body.appendChild(Img);
}

var oImg = document.getElementsByTagName("img");
document.body.removeChild(oImg[0]);

// 替换其中的子元素
var P = document.createElement("p");
P.innerHTML = "Hello World";

document.body.replaceChild(P,oImg[0])

注意: 前面是新的元素,后面是要被替换的元素
```

    怎么在指定位置插入DOM,而不是在最后位置插入 DOM
    insertBefore(newItem,existingItem);
```js
var newImg = document.createElement("img");
// 在p标签前面插入一个元素
document.body.insertBefore(newImg,P);
```

    classList的用法

    Box.classList.add()             在元素中添加一个或多个类名
    Box.classList.contains(class)   返回布尔值,判断指定的类名是否存在
    Box.classList.remove()          移除元素中一个或多个类名
    Box.classList.item(index)       返回类名在元素中的索引值.索引值从0开始
    
```js
var Box = document.querySelector(".box");
    // 注意添加多个类名时的写法
Box.classList.add("item1","item2","item3","item4","item5");

console.log( Box.classList.contains("item1") ); // true
console.log( Box.classList.contains("item6") ); // false

Box.classList.remove("box");

console.log(Box.classList.item(4)); // item5
```

# 3. 原生JS利用透明度切换图片

    1. 轮播图自动从第1到第4张图片通过透明度切换
    2. 切换过程中图片对应的小按钮改变样式
    3. 小按钮的mouseover事件显示对应小按钮的图标
    4. 点击左右切换按钮切换图片
    

    opacity兼容性
    所有浏览器都支持 opacity 属性.
    
    opacity:0.5
        
    注释:IE8以及更早的版本支持替代的filter属性. filter:alpha(opacity=50);
    
    
    transition属性是一个简写属性,用于设置四个过渡属性:
        transition-property:        过渡效果的CSS属性名称
        transition-duration：       过渡效果时间
        transition-timing-function: 过渡效果曲线
        transition-delay:           过渡效果延迟时间
    
    
    {
        width:100px;
        transition:width 2s;
        -moz-transition:width 2s;   /* Firefox */
        -webkit-transition:width 2s;    /*Safari 和 Chrome*/
        -o-transition:width 2s;     /*Opera*/
    }
    
    cursor 常见的几种手势

    default;    默认,通常是一个箭头
    help;       一个问号
    auto;       默认
    crosshair;  十字线
    pointer;    手势
    text;       指示文本
    move;       某对象可被移动
    wait;       指示程序正忙(通常是一只表或沙漏)