<!-- TOC -->

- [1. 严格模式](#1-严格模式)
- [2. 变量](#2-变量)
- [3. 数据类型](#3-数据类型)

<!-- /TOC -->

# 1. 严格模式

    ECMAScript5引入了严格模式(strict mode)的概念,严格模式是为JavaScript定义了一种不同的解析与执行模型.在
    严格模式下,ECMAScript3的一些不确定行为将得到处理,而且对某些不安全的操作也会抛出错误.在整个页面使用严格模
    式,可以在顶部添加 'use strict'

# 2. 变量

    ECMAScript的变量式松散类型的,所谓松散类型就是可以用来保存任何类型的数据.换句话说,每个变量仅仅是一个用于
    保存值的占位符而已.

# 3. 数据类型

    ECMAScript中有5种简单数据类型(也称为基本数据类型):Undefined Null Boolean Number String.还有一种复杂数
    据类型 —— Object,Object本质上是由一组无序的名值对组成的.ECMAScript不支持任何创建自定义类型的机制,所有值
    最终都是上述6种类型之一.

```js
console.log( typeof null );         // object
console.log( typeof undefined );    // undefined
console.log( typeof 1 );            // number
console.log( typeof "1" );          // string
console.log( typeof true );         // boolean
```

    null值表示一个空对象指针,而这也正是 typeof null 会返回 object的原因.
    注意：在检查一个变量是否为对象之前,首先判断其值是否为null, null不具备作为对象类型的基本特征,这时一个JS的bug.
    它从JS诞生开始就存在,从未,而且永远不会被修复.

    
    Boolean类型是 ECMAScript中使用的最多的一种类型,该类型只有两个字面值:true和false.这两个值与数字值不是
    一回事,因此false不一定等于0,true不一定等于1.
    注意：Boolean是区分大小写的,False和True都不是boolean值,而是标识符

    如果要将一个值转换为Boolean值,可以调用转型函数 Boolean().
```js
console.log( Boolean('Hello World') );  // true
console.log( Boolean(1));               // true
console.log( Boolean(0));               // false   
console.log( Boolean(undefined))        // false
console.log( Boolean(NaN))              // false
console.log( Boolean(null))             // false
console.log( Boolean("") );             // false
console.log( Boolean(" ") );            // true
console.log( Boolean({}) );             // true
console.log( Boolean(Infinity) );       // true
```
    转换为true值的有： true 非0数字,!undefined 非空字符串 任何对象
    转换为false值的有： false 0 NaN undefined null 空字符串

    Nnumber
    由于内存的限制,ECMAScript并不能保存世界上所有的数值.ECMAS仇日pt能够表示的最小数值保存在 Number.MIN_VALUE
    在大多数浏览器中,这个值是5e-324.能够表示的最大数值保存在 Number.MAX_VALUE中.在大多数浏览器中,这个值是
    1.797e+308.
```js
console.log( Number.MIN_VALUE );        // 5e-324
console.log( Number.MAX_VALUE );        // 1.7976931348623157e+308
```
    综上所述,如果某次计算返回了正或负 Infinity值,那么该值将无法继续参与下一次的计算,因为Infinity不是能够参与
    计算的数值.想要确定一个数值是不是又穷的,可以使用 isFinite().
```js
console.log( isFinite(5e400) );         // false
console.log( isFinite(5e100) );         // true
```

    NaN
    NaN是一个特殊的数值,这个数值用于表示一个本来要返回数值的操作数未返回数值的情况(这样就不会抛出错误了).例如,
    在其他编程语言中,任何数值除以非数值都会导致错误,从而停止代码执行.但在ECMAScript中,任何数值除以非数值会返回
    NaN,因此不会影响其他代码的执行.

    NaN有两个特点,首先任何涉及NaN的操作,都会返回NaN.其次,NaN与任何值都不相等.包括NaN本身.
```js
console.log( NaN*5 );           // NaN
console.log( NaN === NaN );     //false
```
    针对NaN的这两个特点,ECMAScript定义了 isNaN()函数.