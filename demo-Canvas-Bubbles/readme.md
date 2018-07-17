<!-- TOC -->

- [1. IIFE](#1-iife)
    - [1.1. 为什么需要IIFE？](#11-为什么需要iife)
- [2. arguments.callee](#2-argumentscallee)
- [3. 效果图](#3-效果图)

<!-- /TOC -->

# 1. IIFE

    IIFE: immediately invoked function expression, 立即调用的函数表达式.
```js
(function a(){
    console.log("我是IIFE");
})();

(function a(){
    console.log("我也是IIFE");
}())

~~function a(){
    console.log("我同样也是IIFE");
}()
```

## 1.1. 为什么需要IIFE？

    实际上，IIFE的出现是为了弥补JS在scope方面的缺陷：JS只有全局作用域（global scope）、函数作用域（function 
    scope）,从ES6开始才有块级作用域（block scope）.

# 2. arguments.callee

    返回正被执行的Function对象,也就是所指定的Function对象的正文,这有利于匿名函数的递归或者保证函数的封装性.


# 3. 效果图
![image](https://github.com/JayK0720/JavaScript/blob/master/demo-Canvas-Bubbles/2.gif)