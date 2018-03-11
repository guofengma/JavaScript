<!-- TOC -->

- [1. 简单调用](#1-简单调用)
- [2. bind](#2-bind)
- [3. 作为对象的方法](#3-作为对象的方法)

<!-- /TOC -->

# 1. 简单调用

    与其他语言相比,this 关键字在JavaScript中的表现略有不同,此外,在严格模式和非严格模式之间也有一些差别.

    无论是否在严格模式下，在全局执行上下文中（在任何函数体外部）this 都指代全局对象。
    
```js
console.log(this === window);   // true

this.b = 'MDN',
console.log(b);         // MDN
console.log(window.b)   // MDN
```

    如果想把 this 的值从一个上下文传到另一个,就要用 call 或 apply 方法.
```js
var obj = {name:'Kyrie'};

var name = "Global";
function whatThis(arg){
    return this.name;  // this的值取决于函数的调用方式
}
console.log( whatThis() );          // Global
console.log( whatThis.call(obj) )   // Kyrie
console.log( whatThis.apply(obj) ); // Kyrie
```

    当一个函数在其主体中使用 this 关键字时,可以通过使用函数继承自 Function.prototype的call或apply方法将
    this值绑定到调用中的特定对象.

```js
function add(c,d){
    return this.a + this.b + c + d;
}
// 第一个参数是作为 this 使用的对象
// 后续参数作为参数传递给函数调用
var o = {a:1,b:3};
console.log( add.call(o,5,7) ); // 16

console.log( add.apply(o,[10,20]) ); //34
```
    call()和apply()是预定义的函数方法.两个方法可用于调用函数,两个方法的第一个参数必须是对象本身.
    两者的区别在于第二个参数：apply传入的是一个参数数组,而call则作为call的参数传入.

    使用call和apply函数的时候要注意,如果传递给this的值不是一个对象,JavaScript会尝试使用内部ToObject操作
    将其转换为对象.因此,如果传递的值是一个原始值比如7或'foo',那么就会使用相关构造函数将它转换为对象

# 2. bind

    ES5引入了Function.prototype.bind.调用f.bind(someObject)会创建一个与f具有相同函数体和作用域的函数,但
    是在这个新函数中,this将永久地绑定到了bind的第一个参数,无论这个函数是如何被调用的.

```js
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a:37, f:f, g:g, h:h};
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty
```

# 3. 作为对象的方法

    当函数作为对象里的方法被调用时,它们的this是调用该函数的对象.
```js
var obj = {
    prop:37,
    f:function(){
        return this.prop
    }
}
console.log( obj.f() )
```