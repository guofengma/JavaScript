<!-- TOC -->

- [1. Function](#1-function)
    - [1.1. 没有重载](#11-没有重载)
    - [1.2. 函数声明与函数表达式](#12-函数声明与函数表达式)
    - [1.3. 作为值的函数](#13-作为值的函数)

<!-- /TOC -->

# 1. Function

    函数实际上是对象,每个函数都是Function类型的实例,而且都与其他引用类型一样具有属性和方法.由于函数是对象,因此函数名实际上
    也是一个指向函数对象的指针,不会与某个函数绑定.函数通常是使用函数声明语法定义的.
```js
function sum(num1,num2){
    return num1 + num2
}

// 函数表达式
var sum = function(num1,num2){
    return num1 + num2
}
```
    由于函数名仅仅是指向函数的指针,因此,一个函数可能会有多个名字.
```js
function sum(num1,num2){
    console.log(num1+num2);
}
sum(1,2);

var another = sum;
another(3,4);

sum = null;
another(2,3);
```

## 1.1. 没有重载

```js
function addSomeNumber(num){
    console.log(num+10);
}
function addSomeNumber(num){
    console.log(num+100);
}
addSomeNumber(100); // 200

上面例子中声明了两个同名函数,而结果则是后面的函数覆盖了前面的函数.
```

## 1.2. 函数声明与函数表达式

    解析器在向执行环境中加载数据时,对函数声明和函数表达式并非一视同仁,解析器会率先读取函数声明,并使其在执行任何代码之前可用.
    而函数表达式,则必须等到解析器执行到它所在的代码行,才会真正被解释执行.
```js
var a = function a(a){
    console.log(a);
}
函数声明与函数表达式的语法其实时等价的,也可以同时使用函数声明和函数表达式,不过这种语法在Safari中会报错.
```

## 1.3. 作为值的函数

    因为ECMAScript中的函数名本身就是变量,所以函数也可以作为值来使用.不仅可以像传递参数一样把一个函数传递给另一个函数,而且可以
    将一个函数作为另一个函数的结果返回.