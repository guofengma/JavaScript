<!-- TOC -->

- [1. 变量](#1-变量)

<!-- /TOC -->

# 1. 变量


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
    