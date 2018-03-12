<!-- TOC -->

- [1. 浏览器对象模型BOM](#1-浏览器对象模型bom)
    - [1.1. Window对象](#11-window对象)
        - [1.1.1. Window尺寸](#111-window尺寸)
        - [1.1.2. window.open](#112-windowopen)
        - [1.1.3. window.close](#113-windowclose)
        - [1.1.4. window.history](#114-windowhistory)
        - [1.1.5. window对象属性](#115-window对象属性)
        - [1.1.6. window对象方法](#116-window对象方法)
    - [1.2. Navigator对象](#12-navigator对象)
    - [1.3. Screen对象](#13-screen对象)
    - [1.4. Location对象](#14-location对象)
    - [1.5. History对象](#15-history对象)

<!-- /TOC -->

# 1. 浏览器对象模型BOM

    浏览器对象模型(Brower Object Model)尚无正式标准.由于现代浏览器已经实现了JavaScript交互性方面的相
    同方法和属性,因此常被认为是BOM的方法和属性
    
    从根本上讲,BOM只处理浏览器窗口和框架,但人们习惯上也把所有针对浏览器的JavaScript扩展算作BOM的一部分
    下面就是一些这样的扩展：
        1. 弹出新浏览器窗口的功能
        2. 移动,缩放和关闭浏览器窗口的功能
        3. 提供浏览器详细信息的navigator对象
        4. 提供浏览器所加载页面的详细信息的location对象
        5. 提供用户显示器分辨率详细信息的screen对象
        6. 对cookies的支持
        7. XMLHttpRequest和IE的ActiveXObject这样的自定义对象.

    JavaScript是一种专门为网页交互而设计的脚本语言,由以下三个不同的部分组成：
        ECMAScript 提供核心语言功能
        文档对象模型(DOM) 提供访问和操作页面内容的方法与接口
        浏览器对象模型(BOM) 提供与浏览器交互的方法和接口

## 1.1. Window对象

    所有浏览器都支持window对象,表示浏览器窗口
    所有JavaScript全局对象,函数以及变量均自动成为window对象的成员.全局变量是window对象的属性,全局函数
    是window对象的方法.

    如果文档包含框架(<frame>或<iframe>标签),浏览器会为HTML文档创建一个window对象,并为每个框架创建一个
    额外的window对象.
    
### 1.1.1. Window尺寸

    有三种方法能够确定浏览器窗口的尺寸：
    window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
    window.innetWidth - 浏览器窗口的内部宽度(包括滚动条)

    对于IE 5 6 7 8 
    document.documentElement.clientHeigth
    document.documentElement.clientWidth
    
    或者
    document.body.clientHeight
    document.body.clientWidth

### 1.1.2. window.open

    open()方法用于打开一个新的浏览器窗口或查找一个已命名的窗口.

    语法：
    window.open(URL,name,specs,replace)
    
    URL -   可选,指定打开的页面的URL,如果没有指定,打开一个新的空白窗口
    name -  可选,指定target属性或窗口的名称.
            _blank  URL加载到一个新的窗口.
            _parent URL加载到父框架
            _self   URL替换当前页面
            _top    URL替换任何可加载的框架集
            name    窗口名称

    specs - 可选,一个逗号分隔的项目列表.支持以下值：
            height=pixels   窗口的高度,最小值为100px
            left=pixels     窗口的左侧位置
            location        是否显示地址字段
            menubar         是否显示菜单栏
            width=pixels    窗口的宽度,默认为100px

    replace - 装载到窗口的URL是在窗口的浏览历史中创建一个新的条目,还是替换浏览器历史中的当前条目.
            true URL替换浏览历史中的当前条目
            false URL在浏览器中创建新的条目

```html
<!-- 实例 -->
<button class='button'>打开新窗口</button>

<script>
var Button = document.querySelector(".button");

Button.onclick = function(){
    window.open("http://www.runoob.com/jsref/met-win-open.html",'_blank','left=200px,location=no,resizable=false',false);
}
</script>
```

### 1.1.3. window.close

    关闭浏览器窗口,直接调用window.close()就可以关闭当前浏览器窗口.文档没有添加参数说明.
    
### 1.1.4. window.history

    History对象包含用户(在浏览器窗口中)访问过的URL,History对象是window对象的一部分,可通过window.history属性对其进行访问.
    注意：没有应用于History对象的公开标准,不过所有浏览器都支持该对象.

### 1.1.5. window对象属性

    document        对Document对象的只读引用
    history         对Hhistory对象的只读引用
    innerHeight     返回窗口的文档显示区的高度
    innerWidth      返回窗口的文档显示区的宽度
    location        用于窗口或框架的Location对象
    navigator       对Navigator对象的只读引用
    outerHeight     返回窗口的外部高度,包含工具条与滚动条
    outerWidth      返回窗口的外部宽度,包含工具条与滚动条
    screenX         返回相对于屏幕窗口的X坐标
    screenY         返回相对于屏幕窗口的Y坐标    

### 1.1.6. window对象方法

    alert()         显示带有一段消息和一个确认按钮的警告框(只有确认按钮)
    close()         关闭浏览器窗口
    confirm()       显示带有一段消息以及确认按钮和取消按钮的对话框(有确认和取消按钮)
    print()         打印当前窗口的内容
    prompt()        显示可提示用户输入的对话框(输入的内容是字符串)


## 1.2. Navigator对象

    Navigator对象包含有关浏览器的信息.
    注意：没有应用于 navigator对象的公开标准,不过所有浏览器都支持该对象
    
    appCodeName     返回浏览器的代码名
    appName         返回浏览器的名称
    appVersion      返回浏览器的平台和版本信息
    cookieEnabled   返回指明浏览器中是否启用cookie的布尔值
    platform        返回运行浏览器的操作系统平台
    userAgent       返回由客户机发送服务器的user-agent头部
```js
console.log(navigator.appCodeName);     // Mozilla
console.log(navigator.appName);         // Netscape
console.log(navigator.appVersion);      // 
console.log(navigator.cookieEnabled)    // true
console.log(navigator.platform);
console.log(navigator.userAgent);
```

## 1.3. Screen对象

    Screen对象包含有关客户端显示屏幕的信息.
    注意：没有应用于screen 对象的公开标准,不过所有浏览器都支持该对象.

    screen对象属性
    availHeight         返回屏幕的高度(不包括window任务栏)
    availWidth          返回屏幕的宽度(不包括window任务栏)
    colorDepth          返回目标设备或缓冲器上的调色板的比特深度
    height              返回屏幕的总高度
    width               返回屏幕的总宽度
```js
// screen对象属性
console.log( screen.availHeight );  // 680
console.log( screen.availWidth );   // 1280
console.log( screen.colorDepth );   // 24
console.log( screen.pixelDepth );   // 24
console.log( screen.height );       // 720
console.log( screen.width );        // 1280
```

## 1.4. Location对象

    Location对象包含有关当前URL信息.
    Location对象是window对象的一部分,可以通过window.Location属性对其进行访问.
    
    注意：没有应用于Location对象的公开标准,不过所有浏览器都支持该对象.

    Location对象属性
    hash        返回一个URL的锚部分,地址#后的部分
    host        返回一个URL的主机名和端口
    hostname    返回URL的主机名
    href        返回完整的URL
    port        返回一个URL服务器使用的端口号
    search      返回一个URL的查询部分 ?后面的部分

    Location对象方法
    assign()    载入一个新文档
    reload()    重新载入当前文档
    replace()   可用一个新文档取代当前文档
    
    reload()方法用于刷新当前文档,类似于浏览器上的刷新页面按钮,如果把该方法的参数设置为true,那么无论文档的最后修改
    日期是什么,它都会绕过缓存,从服务器上重新下载该文档.
    
    
    location.assign() 和 location.replace() location.href 区别
    location.assign(url)跳转到指定页面后可以返回,而location.replace()指定的url代替当前的页面,无法退回上一级页面.
    location.href方法也能够用于跳转页面,和location.assign()功能一样.

    综上所知,location.href=url 和 location.assign(url)两者功能一样,并且能够返回上一级.而location.replace(url)能够
    跳转到指定页面,但无法返回上一级.location.reload()方法无法和前三者一样发生页面跳转,只能刷新当前页面.

    前面学过的a标签也是能够发生页面跳转的,所以现在知道的让页面发生跳转由四种方法:
        <a href="http://www.baidu.com"></a>
        location.href("http://www.baidu.com")
        location.replace("http://www.baidu.com")
        location.assign("http://www.baidu.com")

## 1.5. History对象

    History对象包含用户(在浏览器窗口中)访问过的URL.History对象是window对象的一部分,可通过window.history属性对其进行访问.

    注意：没有应用于History对象的公开标准,不过所有浏览器都支持该对象.

    History对象属性
    length      返回历史列表中的网址数

    History对象方法
    back()      加载history列表中的前一个URL
    forward()   加载history列表中的下一个URL
    go()        加载history列表中的某个具体页面