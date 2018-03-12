<!-- TOC -->

- [1. HTML5 WebSocket](#1-html5-websocket)
    - [1.1. WebSocket属性](#11-websocket属性)
    - [1.2. WebSocket事件](#12-websocket事件)
    - [1.3. WebSocket方法](#13-websocket方法)
    - [1.4. 为什么需要WebSocket？](#14-为什么需要websocket)

<!-- /TOC -->

# 1. HTML5 WebSocket

    WebSocket是HTML5开始提供的一种在单个TCP连接上进行全双工通讯的协议.
    在WebSocket API中,浏览器和服务器只需要做一个握手的动作,然后浏览器和服务器之间就形成了一条快速通道.两者之间就
    直接可以数据互相传送.

    浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求,连接建立以后,客户端和服务器端就可以通过TCP连接直
    接交换数据.

    当你获取 Web Socket连接后,你可以通过send()方法来向服务器发送数据,并通过 onmessage事件来接收服务器返回的数据.

```js
var Socket = new WebSocket(url,[protocol]);
```
    url:指定连接的URL
    protocol:指定了可接受的子协议

## 1.1. WebSocket属性

    Socket.readyState       只读属性 readyState表示连接状态,可以是以下值：
                                0 —— 表示连接尚未建立
                                1 —— 表示连接已建立,可以进行通信
                                2 —— 表示连接正在进行关闭
                                3 —— 表示连接已经关闭或者连接不能打开 

## 1.2. WebSocket事件

    open        Socket.onopen       连接建立时触发
    message     Socket.onmessage    客户端接收服务端数据时触发
    error       Socket.onerror      通信发生错误时触发
    close       Socket.onclose      连接关闭时触发

## 1.3. WebSocket方法

    Socket.send()       使用连接发送数据
    Socket.close()      关闭连接


## 1.4. 为什么需要WebSocket？

    HTTP协议有一个缺陷:通信只能由客户端发起.而WebSocket最大的特点就是,服务器可以主动向客户端推送
    信息,客户端也可以主动向服务器发送信息,是真正的双向平等对话,属于 服务器推送技术的一种.

    其他特点包括：
    1. 建立在TCP协议之上,服务器端的实现比较容易
    2. 与HTTP协议有着良好的兼容性.默认端口是80和443
    3. 数据格式比较轻量,性能开销小,通信高效.
    4. 没有同源限制,客户端可以与任意服务器通信.