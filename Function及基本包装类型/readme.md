<!-- TOC -->

- [1. Function](#1-function)
    - [1.1. 没有重载](#11-没有重载)
    - [1.2. 函数声明与函数表达式](#12-函数声明与函数表达式)
    - [1.3. 作为值的函数](#13-作为值的函数)
    - [1.4. 函数内部属性](#14-函数内部属性)
    - [1.5. 函数的属性和方法](#15-函数的属性和方法)
    - [1.6. this](#16-this)
    - [1.7. 基本包装类型](#17-基本包装类型)

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


## 1.4. 函数内部属性

    在函数内部,有两个特殊的对象:arguments和this,其中,arguments是一个类数组对象,包含着传入函数中的所有参数.虽然arguments
    的主要用途是保存函数参数,但这个对象还有一个名叫callee的属性,该属性是一个指针,指向拥有这个 arguments 对象的函数.

```js
function number(value){
    if(value <= 1){
        return 1;
    }else{
        return value * number(value-1);
    }
}
var a = number(10);
console.log(a);

上面的函数的执行与 函数名 number 仅仅的耦合在了一起,为了消除这种紧密的耦合现象,可以像这样使用 arguments.callee.
```

    函数内部的另一个特殊对象是 this,换句话说,this引用的是函数执行的环境对象.(当在网页的全局作用域下调用函数时,this对象引用
    的就是 window)
```js
window.color = 'red';
var o = {color:'blue'};

function sayColor(){
    console.log( this.color );
}
sayColor(); // red

o.sayColor = sayColor;
o.sayColor();   // blue
```
    在调用函数之前,this的值并不确定,因此this可能会在代码块执行过程中引用不同的对象.当在全局作用域中调用 sayColor(),this
    引用的是全局对象window;对this.color求值会转换成 window.color求值. 而当把这个函数赋给对象o并调用 o.sayColor()时,
    this引用的是对象o,因此对 this.color 求值会转换成 o.color的求值.

## 1.5. 函数的属性和方法

    因为函数也是对象,所以函数也有属性和方法.每个函数都有两个属性 length 和 prototype. 其中length 表示函数希望接收的命名
    参数的个数.
```js
function sayName(name){
    console.log(name);
}
function sum(value1,value2){
    return value1 + value2;
}
function Hi(){
    console.log('hi');
}
console.log(sayName.length);    // 1
console.log(sum.length);        // 2
console.log(Hi.length);         // 0
```
    对于ECMAScript中的引用类型类型而言,prototype是保存它们所有实例方法的真正所在.换句话说,诸如toString() 和 ValueOf()等
    方法实际上都保存在 prototype名下,只不过是通过各自对象的实例访问罢了. 

    每个函数都包含两个非继承而来的方法: apply() 和 call(),这两个方法的用途都是在特定 的作用域中调用函数,实际上等于设置函
    数体内 this 对象的值.apply()接收两个参数,一个是在其中运行函数的作用域,另一个是参数数组. 其中,第二个参数可以是Array的
    实例,也可以是 arguments对象.
```js
function add(num1,num2){
    return num1 + num2;
}
function callAdd1(num1,num2){
    return add.apply(this,arguments);
}
function callAdd2(num1,num2){
    return add.apply(this,[num1,num2]);
}
var x = callAdd1(1,2);
var y = callAdd2(1,2);
console.log(x,y);   // 3 3
```

    call()方法与apply()方法的作用相同,它们的区别仅在于接收参数的方式不同. 事实上,传递参数并非 apply() 和 call()真正的用武
    之地,它们真正强大的地方是能够扩充函数赖以运行的作用域.
```js
window.color = 'red';
var o = {color:'blue'};

function sayColor(){
    console.log(this.color);
}
sayColor();     // red
sayColor.call(this);    // red
sayColor.call(window);  // red
sayColor.call(o);   // blue
```

    ECMAScript5还定义了一个方法 bind(),这个方法会创建一个函数的实例,其this值会被绑定到传给bind()函数的值.
```js
window.name = 'kyrie';
var player = {name:'lebron'};

function sayName(){
    console.log(this.name);
}
var changeName = sayName.bind(player);
changeName();   // lebron
```
    
## 1.6. this

    this是JavaScript语言的一个关键字,它代表函数运行时,自动生成的一个内部对象,只能在函数内部使用.
    下面分四种情况详细讨论 this 的用法.

    1. 纯粹的函数调用
```js
function test(){
    this.x = 1;
    console.log(this.x);
}
test(); // 1

var x = 1;
function test(){
    console.log(this.x);
}
test(); // 1
```

    2. 作为对象方法的调用
    函数还可以作为某个对象的方法调用,这时this就指这个上级对象.
```js
function test(){
    console.log(this.x);
}
var o = {};
o.x = 1;

o.m = test;
o.m();  // 1
```

    3. 作为构造函数调用
    所谓构造函数,就是通过这个函数生成一个新对象(object),这时,this就指向这个新对象.
```js
function Test(){
    this.x = 1;
}
var o = new Test();
console.log(o.x);   // 1

为了表明这时this不是全局对象,对代码做一些改变:

var x = 2;
function Test(){
    this.x = 1;
}
var o = new Test();
console.log(o.x);   // 1
```

    4. apply()调用
    apply()是函数对象的一个方法,它的作用是改变函数的调用对象,它的第一个参数就表示改变后的调用这个函数的对象.因此,this指的就是
    这第一个参数.
```js
var x = 0;
function test(){
　　alert(this.x);
}
var o={};
o.x = 1;
o.m = test;
o.m.apply(); //0
```
    注意:apply()的参数为空时,默认调用全局对象.因此,这时的运行结果为0,证明此时this指的是全局对象.

## 1.7. 基本包装类型

    为了便于操作基本类型值,ECMAScript还提供了三个特殊的引用类型 Number String Boolean
    引用类型与基本包装类型的主要区别就是对象的生存期.使用new操作符创建的引用类型的实例,在执行流离开当前作用域之前都一直保存在
    内存中.而自动创建的基本包装类型的对象,则只存在于一行代码的执行瞬间,然后则立即销毁.
```js
var s1 = 'some text';
s1.color = 'red';
console.log(s1.color);  // undefined


var s1 = new String("some text");
s1.color = 'red';
console.log(s1.color);  // red
```