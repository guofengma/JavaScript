<!-- TOC -->

- [1. 原生JS以图片动画切换方式的轮播图功能](#1-原生js以图片动画切换方式的轮播图功能)
- [2. 需要复习的内容](#2-需要复习的内容)

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


    cursor 常见的几种手势