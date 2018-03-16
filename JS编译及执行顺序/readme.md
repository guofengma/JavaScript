<!-- TOC -->

- [1. JS编译与执行顺序](#1-js编译与执行顺序)
    - [1.1. 函数声明和调用](#11-函数声明和调用)
    - [1.2. 自调用函数](#12-自调用函数)
    - [1.3. 函数是对象](#13-函数是对象)
    - [1.4. 函数参数](#14-函数参数)
    - [1.5. 函数声明与变量](#15-函数声明与变量)

<!-- /TOC -->

# 1. JS编译与执行顺序

    JavaScript是一种描述型脚本语言,由浏览器进行动态的解析与执行,浏览器对于不同的方式有不同的解析顺序.
    每次当控制器转到ECMAScript可执行代码的时候,即会进入到一个执行上下文.
    
## 1.1. 函数声明和调用

    JavaScript使用关键字 function 定义函数,函数可以通过声明定义,也可以是一个表达式.
    函数表达式可以存储在变量中:
```js
var x = function(a,b){return a * b}
```


    在函数表达式存储在变量后,变量也可作为一个函数使用.
```js
var x = function(a,b){
    return a * b;
}
var z = x(3,4);
console.log(z); // 12

function a(x,y){
    return x * y;
}
var y = a(3,4);
console.log(y);
``` 

    提升是JavaScript默认将当前作用域提升到前面去的行为.
    提升 应用在 变量的声明与函数的声明.
    
## 1.2. 自调用函数

    函数表达式可以 '自调用',自动用表达式会自动调用.不能自调用声明的函数
    
```js
(function (){
    var x = "Hello!";
    console.log(x);
})();   // Hello

(function f(){
    console.log("Hello World");
})();   // Hello World
```

## 1.3. 函数是对象

    在JavaScript中使用 typeof 操作符判断函数类型将返回 'function'.
    JavaScript函数有 属性 和 方法 toString() 方法将函数作为一个字符串返回
    
## 1.4. 函数参数

    函数显示参数在函数定义时列出.
    函数隐式参数在函数调用时传递给函数真正的值.

    JavaScript 函数定义时显示参数没有指定数据类型
    JavaScript 函数对隐士参数没有进行类型检测.
    JavaScript 函数对隐士参数的个数没有进行检测.

    
    JavaScript是一种描述型脚本语言,由浏览器进行动态的解析与执行.函数的定义方式有以下两种,浏览器对于不同的方式有不同
    的解析顺序:
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


## 1.5. 函数声明与变量

```js
变量提升
console.log(a);     // undefined
var a = 3;  


函数声明提升
console.log(a);     // f a(){}
function a(){};


函数和变量都会提升
var a;
function a(){}
console.log(a);     // f a(){}


var a = 3;
function a(){};
console.log(a)      // 3
```
    注意后面两个例子,同一个标识符的情况下,变量声明与函数声明都会提升;函数声明会覆盖变量声明,但不会覆盖变量赋值.即：
    如果声明变量的同时初始化或赋值那么变量优先级高于函数.

```js
var a = 3;
function a(){
    console.log("Hello World");
}
a();        // a is not defined


下面两个例子 表明了 当变量和函数声明同名时,如果变量赋值了,将拥有更高的优先级,而如果变量没有赋值时,函数声明将覆盖变量.
function a(){}
var a;
console.log(typeof a);  // function

function a(){}
var a = 3;
console.log(typeof a);  // number
``` 

    下面也是一些 变量 和 函数声明的混用
```js
function a(a){
    console.log(a);
    a = 5;
}
a(5);   // 5


调用函数的时候,变量a提升,赋值留在原地,输出undefined 没毛病！
function a(){
    console.log(a);
    var a = 5;
}
a() // undefined


var a = 5;
function a(){
    console.log(a);
}
a() // a is nnot defined


当声明了全局变量b并赋值时, 给声明函数 传递一个 局部变量的值,输出传递的值
如果没有给函数传值,则输出 undefined

var b = 5;
function a(b){
    console.log(b);
}
a(10);  // 10   
a();


变量a 先找到了 局部变量 a = 5, 输出5 
var a = 10;
function m1(){
    var a = 5;
    console.log(a);
}
m1();


局部变量已经声明 但没有赋值 输出undefined
var a = 10;
function m1(){
    console.log(a);
    var a = 5;
}
m1();


变量a 在局部作用域内没有找到变量a,则从外面找到了全局变量a 输出10
var a = 10;
function m1(){
    console.log(a);
}
m1();
```

[变量与函数声明](https://segmentfault.com/q/1010000003951963)