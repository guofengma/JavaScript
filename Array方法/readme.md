<!-- TOC -->

- [1. 数组的方法](#1-数组的方法)
    - [1.1. Array对象属性](#11-array对象属性)
    - [1.2. 改变源数组的方法](#12-改变源数组的方法)
    - [1.3. 数组去重的方法](#13-数组去重的方法)
    - [1.4. 删除字符串最后一个字符的方法](#14-删除字符串最后一个字符的方法)
    - [1.5. join()与toString()的区别](#15-join与tostring的区别)

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
console.log(c);                     //  ["奔驰", "宝马", "奥迪", "宾利"]
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


    slice(start,end)
    该方法从已有的数组中返回选定的元素.
    slice()方法不会改变原始数组.
```js
var website = ['baidu','alibaba','google','qq'];
console.log(website.slice(0,3));    //  ["baidu", "alibaba", "google"]
console.log(website);   //  ["baidu", "alibaba", "google", "qq"]
```
    start:可选,规定从何处开始选取,如果是负数,那么它规定从数组尾部开始算起的位置.
    end:可选,规定从何处结束选取.该参数是数组片段结束处的数组下标.如果没有指定该参数,那么切分的数组
    包含从 start 到 数组结束的所有元素.
```js
console.log( website.slice(-2) );   // ["google", "qq"]
console.log(website.slice(-2,-1));  // ["google"]
console.log(website.slice(-2,-3));  // []
```
    起始位置必须在结束位置的左边.


    sort()
    该方法对数组的元素进行排序.排序顺序可以是字母或数组,并按升序或降序
```js
var points = [40,100,1,5,25,10];
console.log( points.sort(function(a,b){return a- b}) ); // [1, 5, 10, 25, 40, 100]
console.log(points);    // [1, 5, 10, 25, 40, 100]
```
    该方法会改变原始数组
    
    
    splice()
    该方法用于 插入 删除 或替换数组的元素.
    array.splice(index,howmany,item1·····itemx);
        index:必须,规定从何处添加/删除元素
        howmany:必须,规定应该删除多少元素.必须是数字,但可以是 '0'
        item1 ···· itemx:可选,要添加到数组的新元素
```js
var singer = ["周杰伦","王力宏","林俊杰","五月天","潘玮柏"];

singer.splice(2,0,"孙燕姿","SHE");
console.log(singer);  // ["周杰伦", "王力宏", "孙燕姿", "SHE", "林俊杰", "五月天", "潘玮柏"]


singer.splice(2,2,"HeBe","哈林");
console.log(singer);    // ["周杰伦", "王力宏", "HeBe", "哈林", "潘玮柏"]
```
    这种方法会改变原始数组


    toString()
    该方法可以把数组转化为字符串
```js
console.log( singer.toString() );   // 周杰伦,王力宏,林俊杰,五月天,潘玮柏
console.log( singer.join() );   // 周杰伦,王力宏,林俊杰,五月天,潘玮柏
```


    unshift()
    该方法可向数组的开头添加一个或多个更多的元素,并返回新的长度.
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon","Pineapple"));   // 6
console.log(fruits);    // ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
```
    该方法将改变数组的数目


## 1.2. 改变源数组的方法

    pop()       删除数组最后一个元素并返回该元素
    push()      向数组末尾添加元素 并返回 新的长度
    unshift()   向数组的开头添加新元素 并返回 长度
    shift()     删除并返回数组的第一个元素
    reverse()   颠倒数组顺序
    fill()      添加一个元素填充原始数组
    sort()      对原始数组进行排序
    splice()    添加/删除 元素的方法


## 1.3. 数组去重的方法

    第一种方法：
    定义一个 数组去重的方法,先给数组排序(先排序是为了防止重复项不是相邻的),然后判断 数组的 前后项,如果前一项等于后一项,则
    删除其中的一项.
    注意：这里得使用 能够改变数组的方法.
```js
function getRepeat(array){
    var newArray = array.sort(function(a,b){return a-b});
    for(i = 0; i < newArray.length; i++){
        if(newArray[i] == newArray[i-1]){
            newArray.splice(i-1,1);
            // getRepeat(array);
            // 这里用 i-- 也可以
        }
    }
    return newArray;
}

var f = getRepeat([1,1,3,5,5,3,8,9,2,7,2,2,5,5,3,7,3,9,2,5,10]);
console.log(f);
```


    第二种方法:
```js
function getRepeat(array){
    // 先给原数组排序
    var array1 = array.sort(function(a,b){return a - b});
    // 定义一个新数组,新数组存取要去重的数组的第一项
    var newArray = [ array1[0] ];
    // 然后循环判断
    for(let i = 0; i < array1.length; i++){
        // 重点在于则一步：
        // 新创建的数组已经添加了一项,添加的项 是要去重的数组 的第一项.
        // 开始判断: 原始数组第一项  是否和  新数组第一项相等,已经相等了,不添加数据到新数组
        // 第二部 第2项是否 和 源数组的 第 1 项相等,如果不相等,则把该数据添加至 新数组
        // 第三部：第3项是否和 新数组 的第2项相等,如果相等则跳过,不想等则添加进来
        if(array1[i] !== newArray[newArray.length -1]){
            // 则往新数组中添加 不相同的元素
            newArray.push(array1[i]);
        }
    }
    return newArray;
}
var g = getRepeat([1,1,2,2,3,3,5,2,3]);
console.log(g); // [1,2,3];
```

## 1.4. 删除字符串最后一个字符的方法

    第一种方法：
    字符串的 substring(start,end)
    提取指定范围内的字符,包括 start,但不包括 end.
```js
var url = "http://www.baidu.com#";

var newUrl = url.substring(0,url.length - 1);
console.log(newUrl);
```

    第二种方法:
    通过 split() 转化为数组,通过pop()方法删除数组的最后一项
```js
var Aurl = url.split("");
Aurl.pop();
console.log(Aurl.join(""));
```

    第三种方法:
    也是通过 split() 先转化为数组,然后通过 reverse()方法 调转数组顺序,再删除数组的第一项.
    这是第二种方法的变通 比较麻烦 一点
```js
var Aurl = url.split("");
Aurl.reverse().shift();
console.log(Aurl.reverse().join(""));
```

## 1.5. join()与toString()的区别

    两种方法都是将 数组转化为字符串,不过有区别的是 join()方法能够 指定分隔符,而toString()方法不能想join()方法一样指定
    字符串的分隔符.举个例子：
    
```js
var array = ['kyrie','lebron','wade','kobe'];
console.log(array.join(","));       // kyrie,lebron,wade,kobe
console.log(array.toString());      // kyrie,lebron,wade,kobe

console.log(array.join(";"));       // kyrie;lebron;wade;kobe
console.log(array.toString(";"))    // kyrie,lebron,wade,kobe

console.log(array.join("&"));       // kyrie&lebron&wade&kobe
console.log(array.toString("&"));   // kyrie,lebron,wade,kobe
```
    可以看出,join()方法 可以指定输出的 字符串 间隔 符号,而toString()方法指定不了.