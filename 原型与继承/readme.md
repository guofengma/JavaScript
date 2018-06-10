<!-- TOC -->

- [1. 构造函数](#1-构造函数)
    - [1.1. prototype属性](#11-prototype属性)
    - [1.2. 指针 __proto__](#12-指针-__proto__)
    - [1.3. constructor属性](#13-constructor属性)
    - [1.4. 原型链](#14-原型链)
- [2. 继承](#2-继承)
    - [2.1. call/apply](#21-callapply)
- [3. new运算符](#3-new运算符)
- [4. 构造函数与普通函数区别](#4-构造函数与普通函数区别)
- [5. 判断一个对象是数组与对象的方法](#5-判断一个对象是数组与对象的方法)
- [6. B继承A的方法](#6-b继承a的方法)

<!-- /TOC -->

# 1. 构造函数

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

## 1.1. prototype属性

    JavaScript规定,每一个构造函数都有一个 prototype属性,指向另一个对象.这个对象的所有属性和方法,都会被构造函数
    的实例继承.

    所有实例对象需要共享的属性和方法,都放在prototype对象里面,那些不需要共享的属性和方法,就放在构造函数里面.
    prototype属性也叫原型对象,主要是为了实现继承.
    
    为了配合 prototype 属性,JavaScript定义了一些辅助方法,帮组我们使用它.

    1. isPrototypeOf()
    这个方法用来判断,某个prototype对象和某个实例之间的关系
```js
console.log( Person.prototype.isPrototypeOf(player) );  // true
```
    
    2. hasOwnProperty()
    每个实例对象都有一个 hasOwnProperty()方法,用来判断某一个属性到底是本地的,还是继承自prototype对象的属性.
```js
player.firstName = 'kyrie';
player.lastName = 'irving';

console.log( player.hasOwnProperty( 'team' ) ); // true
console.log( player.hasOwnProperty('firstName' )); // true
console.log( player.hasOwnProperty('skill') );  // false    skill方法是写在 prototype对象上的
```

    3. in运算符
    in运算符可以用来判断,某个实例是否含有某个属性,不管是不是本地属性.
```js
console.log( 'skill' in player );   // true
```

## 1.2. 指针 __proto__

    在JS中,万物皆对象,对象分为普通对象和函数对象.Object Function是JS自带的函数对象,函数对象有prototype和
    __proto__.所有的对象都具有__prop__属性,该属性指向其构造函数的 prototype 属性.
```js
console.log( [].__proto__ === Array.prototype );    // true
console.log( {}.__proto__ === Object.prototype);    // true

// 这也是区分数组和对象的一种方法
```

## 1.3. constructor属性

    每个对象都有constructor属性,constructor属性指向对象的构造函数.
    当我们没有改写构造函数的原型对象时,constructor属性时构造函数原型对象的自有属性.当对象被创建时,对象本身没有
    constructor属性,而时来源与创建对象的构造函数的原型对象.
    
## 1.4. 原型链

    每个函数都有 prototype属性,这个属性指向一个对象.prototype属性指向的对象是共享的.而当一个由new构造函数创建
    出来的对象,这个对象会自带一个 __proto__ 属性,这个属性是由JavaScript分配的.它指向构造函数的prototype属性.
    
```js
// 以上面的 player 对象为例

console.log( player.__proto__ );    // {skill:f,constructor:f}
                                    // 指向构造函数的 prototype,
console.log( player.__proto__ === Person.prototype );   // true
console.log( typeof player.__proto__ ); // object   
console.log( typeof Person.prototype);  // object

console.log( player.__proto__.__proto__ );  //  指向Object的prototype
console.log( player.__proto__.__proto__ === Object.prototype);   // true
console.log( Object.prototype.__proto__ );  // null
```
    通过new 构造函数出来的对象,它的__proto__ 指向构造函数的 prototype,而prototype对象也有 __proto__ 属性,
    指向 Object的prototype.这样一直向上查找,称为原型链.
    
# 2. 继承

```js
function Animal(){
    this.species = '动物';
}

function Cat(){
    this.color = 'black';
    this.name = 'huahua'
}

// 怎样使猫继承动物?
```

## 2.1. call/apply

```js
function Cat(){
    this.color = 'black';
    this.name = 'huahua';
    Animal.apply(this);
}

// 怎样使猫继承动物?
var cat1 = new Cat();
console.log(cat1.species);  // 动物
```
    
    注意：任何一个prototype对象都有一个 constructor属性,指向它的构造函数.每一个实例也有一个constructor属性,
    默认指向它的构造函数.
```js
// 根据上面的语句,找到一种判断数组和对象的方法
console.log(Array.prototype.constructor === [].constructor);    // true
console.log(Array.prototype.constructor === {}.constructor);    // false
```

# 3. new运算符

    var player = new Person();

    以上面的构造函数为例,当new一个构造函数时,会发生以下事情：
    1.  创建了一个 空player对象
    2.  this绑定到新创建的对象上.
    3. 执行函数体里面的语句
    4. 返回这个新的对象
        
# 4. 构造函数与普通函数区别

    
    构造函数                    普通函数
    首字母大写                  首字母小写
    new来调用                   ()调用
    this指向新创建的对象         this指向调用函数的对象
    返回的是一个实例对象         返回内容由return决定


# 5. 判断一个对象是数组与对象的方法
    
```js
1. instanceof 运算符
console.log( {} instanceof Array );     // false
console.log( [] instanceof Array );     // true

2. console.dir()
console.dir([]);    // Array
console.dir({});    // Object

3. __proto__ 所指向的构造函数 prototype对象
console.log( [].__proto__ === Array.prototype ); // true
console.log( {}.__proto__ === Array.prototype ); // false

4. constructor属性查看构造函数
console.log( [].constructor );  // Array
console.log( {}.constructor );  // Object

5. 构造函数 原型对象的 constructor 属性
console.log( [].constructor === Array.prototype.constructor );  // true
console.log( {}.constructor === Array.prototype.constructor );  // false

6. Array.isArray()方法
console.log( Array.isArray([]) );   // true
console.log( Array.isArray({}) );   // false
```

# 6. B继承A的方法

    1.  call()
    2.  apply()
    3.  new 构造函数()
    
    
[构造函数](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
[继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
[非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)