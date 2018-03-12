<!-- TOC -->

- [1. 同源策略](#1-同源策略)
- [2. 跨域方法](#2-跨域方法)
    - [2.1. JSONP](#21-jsonp)
    - [2.2. CORS](#22-cors)
    - [2.3. WebSocket](#23-websocket)

<!-- /TOC -->

# 1. 同源策略
    
    同源策略是网景提出的一个著名的安全策略.浏览器执行JavaScript脚本时,会检查这个脚本属于哪个域
    如果两个页面的 协议 端口 和 域名都相同,则两个页面具有相同的源.它是浏览器最核心也最基本的安全功能.
    但有时候,我们需要跨域去请求另一个页面的数据.这时就涉及到跨域了.

# 2. 跨域方法

    请求不同源 的数据 就是跨域,下面是跨域的几种方法.
    img script iframe等元素的 src属性可以直接跨域请求资源.
    
## 2.1. JSONP

    以百度搜索为例,在百度框随便输入内容,然后在 Network 里注意查看出现的接口:
    
```html
<!--  创建两个搜索框,一个输入框,一个搜索框 输入内容,然后点击搜索 开始搜索内容 -->
<p><input type="text" name="keywords" class="keyword"></p>
<input type="button" value="搜索" onclick="search()">

<script>
    // 先创建一个 script 标签
    var Script = document.createElement("script");

    // 然后点击搜索按钮 搜索内容
    function search(){
        // 获取到 搜索框的内容
        var KeyWord = document.querySelector('.keyword').value;
        // 将所搜索的内容拼接到数据接口(ps:这个接口是搜索内容为 周 时的搜索结果,实现不了我们想要的效果,即搜索什么就显示什么内容)
        var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E5%91%A8&json=1&p=3&sid=1444_21119_18560_17001_20929&req=2&csor=1&pwd=KeyWord"+"&cb=callback";
        // 把 百度接口 引入到 创建的标签 script 标签上.
        Script.src = url;
        document.body.appendChild(Script);
    }
    // 然后通过一个回调函数来在控制台显示数据
    function callback(data){
        console.log(data.s);
    }
</script>
```
    JSONP的缺点：
    只支持 GET请求.

## 2.2. CORS

    CORS是一个W3C标准,全称是 '跨域资源共享'(Cross-origin resource sharing).它允许浏览器向跨源服务
    器发出XMLHttpRequest请求,从而克服了 AJAX 只能同源 使用的限制.
    
    CORS需要浏览器和服务器同时支持.目前,所有浏览器都支持该功能.

    整个CORS通信过程,都是浏览器自动完成,不需要用户参与.对于开发者来说,CORS通信与同源的AJAX通信没有差别,代码完全一样.浏览器
    一旦发现AJAX请求跨源,就会自动添加一些附加的头信息,有时还会多出一次附加的请求,但用户不会有感觉.


    与JSONP的比较
    1. JSONP只支持GET请求,CORS支持所有类型的HTTP请求.JSONP的优势在于支持老式浏览器,以及可以向不支持CORS的网站请求数据.

## 2.3. WebSocket

    HTML5的 WebSocket 支持跨域请求.

    

[CORS](http://www.ruanyifeng.com/blog/2016/04/cors.html)