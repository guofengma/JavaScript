<!-- TOC -->

- [1. 数组的方法](#1-数组的方法)
    - [1.1. Array对象属性](#11-array对象属性)

<!-- /TOC -->

# 1. 数组的方法

    数组对象的作用是：使用单独的变量名来存储一系列的值.

## 1.1. Array对象属性

    concat()        连接两个或多个的数组,并返回结果
```js
var a = ['kyrie'];
var b = ['Lebron'];
console.log(a.concat(b));       // ['kyrie','Lebron']
console.log(a);     // ['kyrie']
```
    该方法不会改变现有数组,而仅仅会返回被连接数组的一个副本.


    fill()
    使用固定值填充数组
```js
var a = ['kyrie','wade','bosh'];
console.log(a.fill("kobe"));    // ['kobe','kobe','kobe']
console.log(a);                 // // ['kobe','kobe','kobe']
```     
    该方法会改变原有的数组


    filter()
    该方法创建一个新的数组,新数组中的元素是通过检查指定数组中符合条件的所有元素.
    注意：
        filter()不会对空数组进行检测
        filter()不会改变原始数组
```js
var ages = [20,30,16,22,18,13,15];
function checkAdult(age){
    return age >= 20;
}
console.log(ages.filter(checkAdult));   // [20, 30, 22]
console.log(ages);  // [20,30,16,22,18,13,15];
```

    forEach()
    该方法用于调用数组的每个元素,并将元素传递给回调函数

    array.forEach(function(currentValue,index,arr),thisValue);
                currentValue    必须,当前元素
                index           可选,当前元素的索引值
                arr             可选,当前元素所属的数组对象

                thisValue       可选.传递给函数的值一般用 this 值.



    includes()
    该方法用来判断一个数组是否包含一个指定的值,如果是返回true.
```js
var player = ['kyrie','lebron','kobe','wade'];
console.log(player.includes('curry'));  // false
console.log(player.includes('kyrie'));  // true
console.log(player.includes('kyrie','lebron')); // true
console.log(player.includes('kyrie','james'));  // true
console.log(player.includes('wade','wade'));  // true           
```

    indexOf()
    返回某个指定的字符值在字符串中首次出现的位置.找到返回第一次出现的位置,没有找到则返回-1
```js
console.log(player.indexOf('lebron'));  // 1
console.log(player.indexOf('curry'));   // -1 
```

    join()
    把数组的所有元素放入一个字符串
```js
console.log(player.join());     // kyrie,lebron,kobe,wade
console.log(typeof player.join());  // string
console.log(player);    //  ["kyrie", "lebron", "kobe", "wade"]
```
    注意：该方法不会改变原数组
    

    lastIndexOf()
    返回一个指定的字符串最后出现的位置,在一个字符串中的指定位置从后向前搜索.要搜索的字符串值没有
    出现,则该方法返回 -1 .
```js
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
console.log(fruits.lastIndexOf("Banana"));  // 4
console.log(fruits.indexOf("Banana"));  // 0  
```


    map()
    该方法返回一个新数组,数组中的元素为原始数组调用函数处理后的值.
    注意：map()不会对空数组进行检测
         map()不会改变原始数组
```js
var numbers = [4,9,25,36,81];
console.log( numbers.map(Math.sqrt) );  // [2, 3, 5, 6, 9]
console.log(numbers)    // [4, 9, 25, 36, 81]
```


    pop()
    移除数组的最后一个元素并返回删除的元素
```js
console.log(numbers.pop())  // 81;
console.log(numbers);   // [4, 9, 25, 36]
```
    此方法会改变源数组的长度


    push()
    push()方法可向数组的末尾添加一个或多个元素,并返回新的长度
```js
var c = ['奔驰','宝马',"奥迪"];
console.log(c.push("宾利"));        // 注意返回的是新的长度,而不是新的数组
console.log(c);
```


    reduce()
    该方法接收一个函数作为累加器,数组中的每个值(从左到右)开始缩减,最终计算为一个值.

    array.reduce(function(total,currentValue,currentIndex,arr),initialValue);
                total           必须,初始值,或者计算结果的返回值
                currentValue    必须,当前元素
                currentIndex    可选,当前元素的索引
                arr             可选,当前元素所属的数组对象
```js
var number = [7,8,8,7,9,11];
function getTotal(total,num){
    return total + num;
}
console.log(number.reduce(getTotal));   // 50
```

    reduceRight()
    该方法的功能和 reduce()功能是一样的,不同的是 reduceRight()从数组的末尾向前将数组的项做累加.
    

    reverse()
    该方法用于颠倒数组中元素的顺序.
```js
var message = ["Hello","World"];
console.log(message.reverse()); // ['World','Hello']
console.log(message);   //  ['World','Hello']
```
    该方法会改变原始数组


    shift()
    删除并返回数组的第一个元素,此方法会改变数组的长度
```js
var msg = ['Kyrie','Irving','Lebron','James'];
console.log(msg.shift());   // kyrie
console.log(msg);   // ["Irving", "Lebron", "James"]
```


    slide()
    该方法从已有的数组中返回选定的元素.
    slice()方法不会改变原始数组.