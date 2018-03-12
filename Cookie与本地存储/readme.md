<!-- TOC -->

- [1. Cookie](#1-cookie)
    - [1.1. 什么是Cookie?](#11-什么是cookie)
    - [1.2. 使用JavaScript创建Cookie](#12-使用javascript创建cookie)
    - [1.3. 使用JavaScript读取cookie](#13-使用javascript读取cookie)
    - [1.4. 使用JavaScript删除cookie](#14-使用javascript删除cookie)
    - [1.5. Cookie字符串](#15-cookie字符串)
    - [1.6. JavaScript Cookie 实例](#16-javascript-cookie-实例)
    - [1.7. Cookie的用途](#17-cookie的用途)
- [2. HTML5 Web存储](#2-html5-web存储)
    - [2.1. HTML5 Web存储 与 Cookie 的区别](#21-html5-web存储-与-cookie-的区别)

<!-- /TOC -->

# 1. Cookie

    Cookie用于存储web页面的用户信息.
    
## 1.1. 什么是Cookie?

    Cookie是一些数据,存储于你电脑上的文本文件中.
    当 web 服务器向浏览器发送web页面时,在连接关闭后,服务器不会记录用户的信息.
    
    Cookie的作用就是 用于解决 '如何记录客户端的用户信息':
        当用户访问web页面时,他的名字可以记录在cookie中.
        在用户下一次访问该页面时,可以在cookie中读取用户访问记录.

    cookie以键值对形式存储：
        userName = Kyrie·Irving
    当浏览器从服务器上请求web页面时,属于该页面的cookie会被添加到该请求中.服务端通过这种方式获取用户信息.
    
## 1.2. 使用JavaScript创建Cookie

```js
document.cookie = "username=kyrie";

// 你还可以为 cookie 添加一个过期时间,默认情况下, cookie在关闭浏览器后消失
document.cookie = 'username=kyrie;expires=Thu, 18 Dec 2013 12:00:00 GMT';

// 你可以使用 path 参数告诉浏览器 cookie的路径,默认情况下,cookie 属于该页面
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
```

## 1.3. 使用JavaScript读取cookie

```js
var x = document.cookie;
```
    document.cookie 将以字符串的方法返回所有的cookie,类型格式：cookie1=value;cookie2=value;cookie3=value

## 1.4. 使用JavaScript删除cookie

    删除cookie非常简单,只需要设置 expires 参数为 以前的时间即可,
```js
document.cookie = "username=;expires=Thu,01 Jan 1970 00:00:00 GMT";
```
    当删除cookie时 不必指定 cookie的值.

## 1.5. Cookie字符串

    document.cookie 属性看起来像一个普通的文本字符串,其实它不是.
    即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时,cookie 信息是以名/值对的形式展示的.

    如果您设置了新的 cookie,旧的 cookie 不会被覆盖. 新 cookie 将添加到 document.cookie 中,所以如果您重新读取document.cookie,您将获得如下所示的数据：
    cookie1=value; cookie2=value;

## 1.6. JavaScript Cookie 实例

    在以下实例中,我们将创建cookie来存储访问者名称,访问者在下一次访问页面时,他会看到一个欢迎的消息.
    在这个示例中,我们会创建3个JavaScript函数：
    
        1. 设置cookie值的函数
        2. 获取cookie值的函数
        3. 检测cookie值的函数

```js
// 存储访问者的名字

function setCookie(name,value,days){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = 'expires' + d.toGMTString();
    document.cookie = name + '=' + value + ";" + expires;
}
```
```js
// 获取cookie值的函数
// cookie名的参数为 cname.

function getCookie(cname){
    var name = cname + '=';
    // 把cookie分割成数组 分割成的数组是 [cookie1=value1,cookie2=value2]
    var ca = document.cookie.split(";");
    // 循环数组
    for(var i = 0; i < ca.length; i++){
        // c 为 cookie1=value1 cookie2=value2 cookie3=value3 
        var c = ca[i].trim();
        // 如果 键 在 字符串中首次出现的位置是0,那么提取出 介于 name= 开始 到 结束部分之间的字符串
        if(c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
```
```js
// 检测cookie值的函数

function checkCookie(){
    var username = getCookie('username');
    // 如果能够获取到 username
    if( username != '' ){
        // 则显示欢迎 username
        alert("Welcome again" + username);
    }else{
        // 否则,让用户提供一个 用户名
        username = prompt("Please enter your name:");
        // 如果填的用户名不为空 且不是 null的时候
        if(username != "" && username != null){
            // 保存用户提供的用户名 365天
            setCookie('username',username,365);
        }
    }
}
```
    cookie将信息存储于用户硬盘的一个文件,这个文件通常对应于一个域名.也就是说,cookie可以跨越一个域名下的多个网页,但
    不能跨越多个域名使用.

## 1.7. Cookie的用途

    1. 保存用户登陆信息
    2. 创建购物车.这样可以实现不同页面之间的数据同步
    3. 跟踪用户行为,一些页面会通过cookie记录用户的偏好.
    
    
    复习下该实例用到的几个关于数组和字符串的方法(ps:有点遗忘了)
        
    split();
    该方法用于把一个字符串分割成字符串数组
```js
var a = "kyrie";
console.log( a.split() );
console.log( a.split("") ); // 这种方法会拆成 一个一个 的字母
```

    trim()
    删除字符串开始和末尾部分的空格
```js
var b = "  kyrie ";
console.log(b.length);  // 8
console.log( b.trim().length ); // 5
```
    
    substring(start,stop)
    该方法用于提取字符串中介于两个指定下标之间的字符.包括起始位置,但不包括结束位置.
    如果只提供了一个参数,则选取开始部分 到 结束位置 之间的 字符.
```js
var c = "Lebron James";
console.log(c.substring(1));    // ebron James
console.log(c.substring(1,9));  // ebron Ja
```

# 2. HTML5 Web存储

    HTML5 web 存储,一个比cookie更好的本地存储方式.

    早些时候,本地存储使用的是 cookie.但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上,但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据,而不影响网站的性能.

    数据以 键/值 对存在, web网页的数据只允许该网页访问使用.


    客户端存储数据的两个对象为：
        localStorage - 没有时间限制的数据存储
        sessionStorage - 针对一个 session 的数据存储


    不管是localStorage还是sessionStorage,可使用的API都相同,常用的有如下几个：
        保存数据：localStorage.setItem(key,value);
        读取数据：localStorage.getItem(key);
        删除单个数据：localStorage.removeItem(key);
        删除所有数据：localStorage.clear();
        得到某个索引的key：localStorage.key(index);

```html
<p><input type="button" value="存值"></p>
<p><input type="button" value="取值"></p>
<p><input type="button" value="删除单条值"></p>
<p><input type="button" value="取值"></p>
<p><input type="button" value="清除值"></p>

<script>
    var Button = document.getElementsByTagName("input");
    
    // 存储两条值
    Button[0].onclick = function(){
        var player1 = {};
        player1.name = "Kyrie Irving";
        player1.age = 26;
        player1.team = 'Cavalier';
        localStorage.setItem( 'playerinfo1',JSON.stringify(player1) );

        var player2 = {};
        player2.name = "Lebron James";
        player2.age = 33;
        player2.team = "Cavalier";
        localStorage.setItem ('playerinfo2',JSON.stringify(player2));
    }
    // 点击获取值 按钮 成功获取到两条值
    Button[1].onclick = function(){
        console.log( JSON.parse( localStorage.getItem('playerinfo1')) );
        console.log( JSON.parse( localStorage.getItem('playerinfo2') ) );
    }
    // 清除掉一条值,然后再次点击 获取值
    Button[2].onclick = function(){
        localStorage.removeItem( 'playerinfo1' );
    }
    // 删除掉一条值以后,现在获取到的有一条值是 null
    Button[3].onclick = function(){
        console.log( JSON.parse( localStorage.getItem('playerinfo1')) );
        console.log( JSON.parse( localStorage.getItem('playerinfo2')) );            
    }
    // 清除所有的值
    Button[4].onclick = function(){
        localStorage.clear();
    }
</script>
```

## 2.1. HTML5 Web存储 与 Cookie 的区别

                localStorage            sessionStorage          Cookie
    数据的生     除非清除,否则永久保存     关闭浏览器前            可设置生效时间,默认在浏览器
    命周期                                                      关闭后,所以也成为 会话cookie
    
    存放数据大   一般为5MB                一般为5MB               4KB
    小
    
    与服务端通信  仅在客户端保存,不参与    仅在客户端保存,不参与和   每次都携带在HTTP协议头中,如果cookie
                 和服务器的通信           服务器的通信             保存过多数据会带来性能问题

    一般用途      用于浏览器端缓存数据     用于浏览器端缓存数据     一般由服务器端生成,用于标识用户
                                                                身份