<!-- TOC -->

- [1. tips](#1-tips)

<!-- /TOC -->

# 1. tips

```js
var arr = ['kyrie','love','james'];

for(let item of arr){
    console.log(item);  
}
for(let item in arr){
    console.log(item);
}

// for...of  数组   item代表每个元素
// for...in  数组   item代表每个元素的下标
```

    无法通过 classList[0] 为某个元素设置类名,可以通过 className setAttribute 来设置.

    setAttribute("type","button")
    setAttribute()方法添加指定的属性,并为其赋指定的值.