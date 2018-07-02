<!-- TOC -->

- [1. Socket.IO](#1-socketio)

<!-- /TOC -->

# 1. Socket.IO

    Socket.IO由两部分组成:
    1. 一个服务器用于集成到Node.js HTTP服务器: socket.io
    2. 一个加载到浏览器中的客户端: socket.io-client

    开发环境下,socket.io会自动提供客户端.
    

    Socket.io的核心理念就是允许发送,接收任意事件和任意数据.任意能被编码为JSON的对象都可以用于传输.二进制数据也是
    支持的。
