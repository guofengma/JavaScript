<!-- TOC -->

- [1. JS编译与执行顺序](#1-js编译与执行顺序)
    - [1.1. 函数声明和调用](#11-函数声明和调用)

<!-- /TOC -->

# 1. JS编译与执行顺序

    JavaScript是一种描述型脚本语言,由浏览器进行动态的解析与执行,浏览器对于不同的方式有不同的解析顺序.

## 1.1. 函数声明和调用

    JavaScript是一种描述型脚本语言,由浏览器进行动态的解析与执行.函数的定义方式有以下两种,浏览器对于不同的方式有不同的解析
    顺序:
```js
// 函数声明
m1();
function m1(){
    console.log("Hello World");
}

// 函数表达式
m2()
var m2 = function(){
    console.log("Hello World");
}
// 报错 m2 is not defined
```
    页面加载过程中,如果遇到声明式函数,则进行预处理,有变量提升效果,然后再开始由上至下执行任务.而函数表达式,则只是将函数赋给
    一个变量,不进行预处理.
```js
function m1(){
    console.log("我是第一次定义的函数");
}
function m1(){
    console.log("我是第二次定义的函数");
}
m1()    // 我是第二次定义的函数
```
    当重复定义一个函数的时候,后面的函数会覆盖前面的.
    
    
    代码块及JS文件的处理
    '代码块'是指一对 <script></script>标签包裹着的js代码.浏览器对每个块或文件进行独立的扫描,然后再对全局的代码进行顺序执行.
    所以,在一个代码块中,函数声明 可以在 调用函数 之后而不会报错.而在不同的代码块中,必须先声明一个函数,再调用该函数.
```html
<script>
// 报错
m1();
</script>
<script>
    function m1(){
        console.log("Hello World");
    }
</script>
```
    把两个代码块调换下顺序就不会报错了.



    下面是几个函数及变量的使用:
```js
// 传入一个变量 然后输出,这个没有问题
function a(a){
    console.log(a);
}
a(3);   // 3

// 在上面函数的基础上 声明了一个局部变量. 但是先执行了 console.log()语句,因为声明局部变量在 console.log()后面
function a(a){
    console.log(a);
    var a = 3;
}   
a(2);   // 2
    

// 在console.log()语句前面声明一个局部变量, 这时传入的变量 被 替换了
function a(a){
    var a = 4;
    console.log(a);
    var a = 3;
}
a(5); // 4
    

// 这个没有参数,在函数内部声明了一个局部变量,输出3 没有问题
function a(){
    var a = 3;
    console.log(a);
}
a();    // 3
    
// 这个和上面的有一题一样, 在console.log() 语句前 声明了一个局部变量.输出结果有改变
function a(a){
    var a = 4;
    console.log(a);
}
a(5);       // 4
    

// 在输出语句后面 声明局部变量, 声明会提前,输出 a 为undefined 没有问题
function a(){
    console.log(a);
    var a = 5;
}
a();    // undefined


var a = 3;
function a(a){
    console.log(a);
}
a(5);       // a is not defined


var a = 3;
function a(a){
    var a = 10;
    console.log(a);
}
a(6);   // a is not defined


// 把上面的例子改成这样就是正常了,为什么?
function a(a){
    var a = 10;
    console.log(a);
}
a(6);   // 10
```
    