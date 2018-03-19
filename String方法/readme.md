<!-- TOC -->

- [1. 字符串](#1-字符串)
    - [1.1. 字符串方法](#11-字符串方法)
    - [1.2. String HTML 包装方法](#12-string-html-包装方法)

<!-- /TOC -->

# 1. 字符串

    JavaScript 字符串用于存储和处理文本。

    字符串可以是对象：
```js
var x = 'jhon';
var y = new String('jhon');

console.log(typeof x);  // string
console.log(typeof y);  // object
```
    不要创建String对象.它会拖慢执行速度,并可能产生其他副作用

## 1.1. 字符串方法

    charAt()            返回指定位置的字符
    charCodeAt()        返回指定位置字符的Unicode编码
    concat()            连接两个或更多字符串,并返回新的字符串
    fromCharCode()      将Unicode编码转为字符串
    indexOf()           返回某个指定的字符串值在字符串中首次出现的位置
    lastIndexOf()       返回字符串最后出现的位置
    slice(start,end)    提取字符串,并以新的字符串返回被提取的部分.包括起始位置,不包括end.   
    split()             将字符串分隔为数组
                        注意：如果用 split("") 分隔,那么每个字符之间都会被分隔
    substr()            从起始索引号提取指定数组的字符
    substring()         提取字符串中两个指定的索引号之间的字符
    toLowerCase()       把字符串转换为小写
    toUpperCase()       把字符串转换为大写
    trim()              去除字符串两边的空白
    
```js
var a = 'lebron';

console.log(a.charAt(1));   // 1
console.log(a[1]);          // 1
console.log(a.charCodeAt(0));   // 108

console.log(a.concat("kyrie")); // lebronkyrie
console.log(a); // lebron

console.log(a.substring(1,5));
console.log(a.slice(1,5));
console.log(a);


// slice() 和 substring() 方法效果一样,也都能实现作为去除字符串最后一位的方法
var b = 'kyrie';
console.log(b.substring(0,b.length-1)); // kyri
console.log(b.slice(0,b.length-1));     // kyri
```

## 1.2. String HTML 包装方法

    big()           使用大号字体显示字符串
    bold()          使用粗体显示字符串
    fontsize()      使用指定的尺寸来显示字符串
    fontcolor()     使用指定的颜色来显示字符串
    italics()       使用斜体来显示字符串
    link()          将字符串显示为链接
    str.link("http://www.baidu.com")
    small()         使用小号字体来显示字符串
    strike()        用于显示加删除线的字符串
    sub()           把字符串显示为下标
    sup()           把字符串显示为上标