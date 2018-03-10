<!-- TOC -->

- [1. 闭包](#1-闭包)
    - [1.1. 变量的作用域](#11-变量的作用域)
    - [1.2. 如何从外部读取局部变量?](#12-如何从外部读取局部变量)
    - [1.3. 闭包的用途](#13-闭包的用途)
    - [1.4. 使用闭包注意点](#14-使用闭包注意点)

<!-- /TOC -->

# 1. 闭包

    闭包是JavaScript语言的一个难点,也是它的特色.很多高级应用都要依靠闭包来实现.

## 1.1. 变量的作用域

    JS的变量分为全局变量和局部变量,外部读取不了函数内部的变量,但函数内部可以读取全局变量.

```js
var n = 999;
function f1(){
    console.log(n);
}
f1();   // 999

function f1(){
    var n = 999;
}
console.log(n); // 报错 n is not defined
```

    注意：在函数内部声明变量,一定要使用 var 命令,如果不用的话,变量实际上是全局变量.
```js
function f1(){
    n = 999;
}
f1();
console.log(n); // 999
```
    要先执行函数,才能获取到变量的值.上面的函数里面实际上声明的是全局变量,所以能够获取到n的值.

## 1.2. 如何从外部读取局部变量?

    由于种种原因,有时需要得到函数内的局部变量,但是,前面已经说过,正常情况下获取不到,只有通过变通方法才能
    实现.
    那就是在函数的内部,再定义一个函数.

```js
function f1(){
    var n = 999;
    function f2(){
        console.log(n)
    }
}
```
    在上面的代码中,函数f2就被包括在函数f1内部,这时函数f1的所有局部变量对f2都是可见的。但是反过来就不行
    f2的局部变量对f1是不可见的,这就是JavaScript语言特有的"链式作用域结构",子对象会一级一级地向上查找
    父对象的变量.
    
    既然f2可以读取f1中的变量,那么只要把f2作为返回值,就可以在f1外部读取它内部的变量了.
```js
function f1(){
    var a = 100;
    function f2(){
        console.log(a);
    }
    return f2
}

var result = f1();
result();   // 100;
```
    上面的例子,就是闭包.

## 1.3. 闭包的用途

    闭包可以用在很多地方,它最大用处由两个,一个是前面提到的可以读取函数内部的变量,另一个就是让这些变量的
    值始终保存在内存中.

```js
function f1(){
    var m = 100;
    function f2(){
        m++;
        console.log(m);
    }
    return f2;
}
var result = f1();
result();    // 101
result();    // 102
result()     // 103
```
    上面的代码中,result实际上就是闭包 f2 函数,它一共运行了两次,第一次的值为101,第二次是102,第三次是
    103,这就证明了函数f1中的局部变量 m 一直保存在内存中,并没有在f1调用后被自动清除.

## 1.4. 使用闭包注意点

    1)  由于闭包会使得函数中的变量都被保存在内存中,内存消耗很大,所以不能滥用闭包,否则会造成网页性能问题.
    在IE中可能导致内存泄漏.
    2)  闭包会在父函数的外部,改变父函数内部变量的值.所以,如果你把父函数当作对象使用,把闭包当作它的公用方法,
    把内部变量当作它的私有属性,这时一定要小心,不要随便改变父函数内部变量的值.


    下面有两个代码片段：
```js
var name = "Kyrie Irving";

var object = {
    name:'Lebron James',
    getNameFunc:function(){
        return function(){
            return this.name;
        }
    }
}
console.log( object.getNameFunc()() );  // Kyrie Irving


var player = "Kyrie Irving";

var nba = {
    player:'Lebron James',
    getPlayerFunc:function(){
        return function(){
            return this.name;
        }
    }
}
console.log( nba.getPlayerFunc()() );   // Kyrie Irving
```