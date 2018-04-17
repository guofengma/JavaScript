<!-- TOC -->

- [1. Node.js Buffer(缓冲区)](#1-nodejs-buffer缓冲区)
    - [1.1. Buffer与字符编码](#11-buffer与字符编码)

<!-- /TOC -->

# 1. Node.js Buffer(缓冲区)

    JavaScript语言自身只有字符串数据类型,没有二进制数据类型.
    但在处理像TCP流或文件流时,必须使用到二进制数据.因此在Node.js中,定义了一个Buffer类,该类用来创建一个专门存放二进制
    数据的缓存区.

    在node.js中,buffer类是随着Node内核一起发布的核心库.Buffer库为Node.js带来了一种存储原始数据的方法,可以让Node.js
    处理二进制数据,每当需要在Node.js中处理I/O操作中移动的数据时,就有可能使用Buffer库.原始数据存储在Buffer类的实例中
    一个Buffer类似于一个整数数组,但它对应于V8堆内存之外的一块原始内存.

    注意:在 v6.0之前创建Buffer对象直接使用 new Buffer()构造函数来创建对象实例,但是Buffer对内存的权限操作相比很大,
    可以直接捕获一些敏感信息,所以在v6.0以后,官方文档里面建立使用Buffer.from()接口去创建Buffer对象.

## 1.1. Buffer与字符编码

    Buffer实例一般用于表示编码字符的序列,比如UTF-8,USC2 Base64或十六进制编码的数据.通过使用显式的字符编码,就可以在Buffer实例与普通的JavaScript字符串之间进行互相转换.