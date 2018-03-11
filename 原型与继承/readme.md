<!-- TOC -->

- [1. 面向对象](#1-面向对象)

<!-- /TOC -->

# 1. 面向对象

    面向对象程序设计的目的是在编程中促进更好的灵活性和可维护性,在大型软件工程中广为流行。凭借其对模块化的重视,
    面向对象的代码开发更简单,更容易理解,相比非模块化编程方法 1, 它能更直接地分析, 编码和理解复杂的情况和过程.

    Namespace 命名空间
        允许开发人员在一个独特, 应用相关的名字的名称下捆绑所有功能的容器。
    
    Class 类
        定义对象的特征。它是对象的属性和方法的模板定义.

    Object 对象
        类的一个实例。
    Property 属性
        对象的特征,比如颜色。
    Method 方法
        对象的能力,比如行走。
    Constructor 构造函数
        对象初始化的瞬间, 被调用的方法. 通常它的名字与包含它的类一致.
    Inheritance 继承
        一个类可以继承另一个类的特征。
    Encapsulation 封装
        一种把数据和相关的方法绑定在一起使用的方法.
    Abstraction 抽象
        结合复杂的继承,方法,属性的对象能够模拟现实的模型。
    Polymorphism 多态
        多意为‘许多’,态意为‘形态’。不同类可以定义相同的方法或属性。


    JavaScript是一种基于对象的语言,在JS中,一切皆对象.但是,它又不是一种真正的面向对象编程语言,因为它的语法中没有类(class).
    
    1. 生成实例对象的原始模式
```js
var cat1 = {}; // 创建一个空对象
　　cat1.name = "大毛"; // 按照原型对象的属性赋值
　　cat1.color = "黄色";

var cat2 = {};
　　cat2.name = "二毛";
　　cat2.color = "黑色";
```
    但是,这样的写法有两个缺点,一是如果多生成几个实例,写起来就非常麻烦；二是实例与原型之间,没有任何办法,
    可以看出有什么联系.

    为了解决从原型对象生成实例的问题,JavaScript提供了构造函数(Constructor)模式.

    所谓"构造函数",其实就是一个普通函数,但是内部使用了this变量。对构造函数使用new运算符,就能生成实例,
    并且this变量会绑定在实例对象上.
    
```js
// 定义一个构造函数 Person
function Person(){
    this.name = 'Kyrie';
    this.age = 26;
    this.team = 'Cavalier'
}
// 在构造函数的原型上添加一个方法 skill,这样做是为了节省空间
Person.prototype.skill = function(){
    console.log("变向拉杆打板");
}

var player = new Person();
console.log(player);    // 输出player, player已经继承了Person的方法与属性. this指向这个player

console.log(player.name);

// 现在Person的 this 指向 player
console.log(player.name);   // Kyrie
console.log(player.team);   // Cavalier
player.skill();             // 变向拉杆打板   
``` 
    这时,player会自动含有一个constructor属性,指向它的构造函数
```js
console.log( player.constructor === Person );   // true
```

    JavaScript还提供了一个 instance 运算符,验证原型对象与实例对象之间的关系.
```js
console.log( player instanceof Person );      // true
```

    JavaScript规定,每一个构造函数都有一个 prototype属性,指向另一个对象.这个对象的所有属性和方法,都会被构造函数
    的实例继承.


    为了配合 prototype 属性,JavaScript定义了一些辅助方法,帮组我们使用它.

    isPrototypeOf()
    这个方法用来判断,某个prototype对象和某个实例之间的关系
```js
console.log( Person.prototype.isPrototypeOf(player) );  // true
```
    
    hasOwnProperty()
    每个实例对象都有一个 hasOwnProperty()方法,用来判断某一个属性到底是本地的,还是继承自prototype对象的属性.
```js
player.firstName = 'kyrie';
player.lastName = 'irving';

console.log( player.hasOwnProperty( 'team' ) ); // true
console.log( player.hasOwnProperty('firstName' )); // true
console.log( player.hasOwnProperty('skill') );  // false    skill方法是写在 prototype对象上的
```

    in运算符
    in运算符可以用来判断,某个实例是否含有某个属性,不管是不是本地属性.
```js
console.log( 'skill' in player );   // true
```
    
    
[面向对象](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)