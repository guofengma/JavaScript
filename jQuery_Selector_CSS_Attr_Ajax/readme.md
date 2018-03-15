<!-- TOC -->

- [1. jQuery](#1-jquery)
    - [1.1. 选择器](#11-选择器)
    - [1.2. AJAX](#12-ajax)
    - [1.3. 属性](#13-属性)
    - [1.4. CSS](#14-css)
    - [1.5. 文档处理](#15-文档处理)
    - [1.6. 筛选](#16-筛选)

<!-- /TOC -->

# 1. jQuery

    jQuery是一个JavaScript库,极大地简化了 JavaScript 编程

## 1.1. 选择器

    #box
    div
    .class
    *
    parent>child
    prev+next
    :first          获取匹配到的第一个元素
    :not(selector)  用于筛选的选择器
    :even           匹配所有索引值为偶数的元素
    :odd            匹配所有索引值为奇数的元素
```html
<ul class="list">
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
    <li class="item8"></li>
    <li class="item9"></li>
    <li class="item10"></li>
</ul>
<script>
    console.log( $(".list li:odd") );   // item2 item4 item6 item8 item10
    console.log( $(".list li:even"));   // item2 item4 item6 item8 item10
</script>
<!-- 注意是 索引值的 奇数 和偶数  索引值从0 开始 -->
```
    :eq(index)          匹配一个给定索引值的元素
    :gt(index)          匹配所有大于给定索引值的元素
    :last               获取匹配的最后个元素
    :lt(index)          匹配所有小于给定索引值的元素
    :header             匹配如 h1 h2 h3之类的标题元素
    :animated           匹配所有正在执行动画效果的元素
    :focus              当前获取焦点的元素
    :empty              匹配所有不包含子元素或者文本的空元素
    :has(selector)      匹配含有选择器所匹配的元素的元素
    :hidden             匹配所有不可见元素,或者type为hidden的元素
    :visible            匹配所有可见的元素

    :first-child        匹配所给选择器的第一个子元素,可以匹配多个
    :nth-child          匹配其父元素下的第N个子或奇偶元素
    :checked            查找所有选中的被选中元素,对于select来说,获取选中推荐使用:selected
    :disabled           匹配所有不可用元素
    :enabled            匹配所有可用元素

## 1.2. AJAX

    $.ajax(url,[settings]);
    通过 HTTP 请求加载远程数据. jQuery底层AJAX实现.简单易用的高层实现见 $.get,$.post等.$.ajax()返回其创建的 
    XMLHttpRequest对象.大多数情况下你无需直接操作该
    函数.


    settings选项:
    async           默认(true),默认设置下,所有请求均为异步请求.
    dataType        预期服务器返回的数据类型.
    error           请求失败时调用此函数
    success         请求成功后的回调函数.
    type            (默认："GET"),请求方式("POST"或"GET").
    data            发送到服务器的数据.将自动转换为请求字符串格式.GET请求中将附加在URL后.
    cache           jQuery1.2新功能,设置为false将不缓存此页面
    contentType     发送信息至服务器时内容编码类型.默认值适合大多数情况.如果你明确地传递了一个content-type给$.ajax(),那么他必定会
                    发送给服务器(即使没有数据要发送)
    url             发送请求的地址
                    
```js
$.ajax({
    url:"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "data":{
        "cat_id":55,
        "pagesize":20
    },
    "dataType":"json",
    "success":function(str){
        console.log(str.data);
        for(i = 0; i <str.data.length; i++){
            console.log(str.data[i].goods_thumb);
            var Img = document.createElement("img");
            Img.src = str.data[i].goods_thumb;
            document.body.appendChild(Img);
        }                
    }
})
```
    
    $.get(url)
    通过远程HTTP GET请求载入信息.这是一个简单的GET请求功能以取代复杂的 $.ajax.请求成功时可调用回调函数.
```js
$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(str){
    console.log(str);
})
```

    $.post(url,[data],[callback],[type])
    通过远程HTTP POST请求载入信息
    这是一个简单的 POST 请求功能以取代复杂的 $.ajax.请求成功时可调用回调函数.

        url:发送请求的地址
        data:待发送的key/value参数
        callback:发送成功时回调函数
        type:返回内容格式
        
## 1.3. 属性

    设置或返回被选元素的属性值.
    attr(name|pro|key,val|fn)
```js
// 返回 图像的 src 属性值
$("img").attr("src");

// 为所有图像设置 src 和 alt 属性
$("img").attr({ src: "test.jpg", alt: "Test Image" });
```

    removeAttr(name)
    从每一个匹配的元素中删除一个属性

    addClass()
    为每个匹配的元素添加指定的类名

    removeClass()
    从所有匹配的元素中删除全部或指定的类

    toggleClass()
    如果存在(不存在)就删除(添加)一个类

    html()
    取得第一个匹配元素的html内容
    在一个HTML文档中,我们可以使用 .html() 方法来获取任意一个元素的内容.
```js
// 返回P元素的内容
$('p').html();

// 设置p元素的内容
$("p").html("Hello");
```
    .text()
    获取匹配元素的内容,用于设置元素内容的文本.

    .val()
    用于获取或设置表单的值
```js

$("input").val();

$("input").val("hello world!");
```
    .html() .text() .val()区别
    
```js
$(".box1").html("<h1>Hello World</h1>");
$(".box2").text("<h1>Hello World</h1>");        
$(".box3").val("Hello World");
```
    .html() 能够处理标签,当作html标签来渲染.而.text() 对输入的内容当作纯文本处理.
    .val() 用在获取或设置表单的值

## 1.4. CSS

    .css()
    访问匹配元素的样式属性
```js
// 取得第一个段落的color样式属性的值。
$("p").css("color");

// 将所有段落的字体颜色设为红色并且背景为蓝色。
$("p").css({"color":"#f00","background":"#00f"});
```

    .offset()
    设置或返回匹配元素在当前视口的相对偏移.返回的对象包含两个整型属性：top和left.此方法只对可见元素有效.
```css
.box{
    position:absolute;
    left:100px;
    top:20px;
}
```
```js
$(".box").offset();

//  返回{top:20,left:100}
```
    position()
    获取匹配元素相对父元素的偏移.

    .offset() 与 .position() 区别
    offset() 获取元素相对于文档的当前坐标,不管元素如何定位,也不管其父元素如何定位,都是获取的该元素相对于当前视口的偏移
    position() 获取元素相对于父元素的偏移


    .scrollTop()
    获取匹配元素相对滚动条顶部的偏移.此方法对可见和隐藏元素都有效


    .scorllLeft()
    获取匹配元素相对滚动条左侧的偏移.此方法对可见和隐藏元素都有效

    .height(index,value)
    设置CSS中 height的值,可以是字符串或数字.函数接受两个参数.

    .width()
    设置或返回 元素的宽度

    .innerHeight()/.innerWidth()
    设置/返回元素的内部区域宽 高 (包括补白,不包括边框). 


    .outerHeight()/.outerWidth()
    设置/返回元素的外部宽高(默认包括补白和边框).


## 1.5. 文档处理

    append()
    向每个匹配的元素内部追加内容

    appendTo()
    把所有匹配的元素追加到另一个指定的元素集合中

    prepend()
    这是向所有匹配元素内部的开始处插入内容的最佳方式

    prependTo()
    把所有匹配的元素前置到另一个、指定的元素元素集合中

    after()
    在匹配的元素之后插入内容

    before()
    在匹配的元素之后插入内容

    before()/after()/prepend()append() 区别
```html
<ol class="list1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ol>
<ol class="list2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ol>

<script>
    $(".list1").append("<li>4</li>");
    // <ol class="list1">
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    //     <li>4</li>    
    // </ol>

    $(".list2").prepend("<li>4</li>");
    // <ol class="list2">
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    // </ol>

    $(".list1").before("<li>4</li>");
    // <li>4</li>
    // <ol class="list1">
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    // </ol>
    $(".list2").after("<li>4</li>");    
    // <ol class="list1">
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    // </ol>   
    // <li>4</li>
</script>
```

    empty()
    删除匹配的元素集合中所有的子节点

    remove()
    从DOM中删除所有匹配的元素

    clone()
    克隆匹配的DOM元素并且选中这些克隆的副本

## 1.6. 筛选

    eq(index)
    获取当前链式操作中第N个jQuery对象,返回jQuery对象

    first()
    获取第一个元素

    last() 
    获取最后个元素

    hasClass()
    检查当前的元素是否含有某个特定的类,如果有 则返回true

    filter()
    筛选出与指定表达式匹配的元素合集

    map()
    将一组元素转换成其他数组（不论是否是元素数组）

    not()
    从匹配元素的集合中删除与指定表达式匹配的元素

    children()
    取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合.只考虑子元素而不考虑所有后代元素

    paren()
    查找直接父元素

    parents()
    用于筛选所有祖先元素

    find()
    搜索所有与指定表达式匹配的元素,这个函数是找出正在处理的元素的后代元素的好方法

    siblings()
    取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合.