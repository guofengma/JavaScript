<!-- TOC -->

- [1. return](#1-return)
- [2. break](#2-break)
- [3. continue](#3-continue)

<!-- /TOC -->

# 1. return

    return 语句终止函数的执行,并返回一个指定的值给函数调用者.

    描述：
    当在函数体中使用 return 语句时,函数将会停止执行.如果指定一个值,则这个值返回给函数调用者.
```js
function m1(x){
    return x*x;
}        
var a = m1(2);
console.log(a); // 4
```

    return false
    return false 也能够阻止 跳转
    
        
```html
<a href="http://www.baidu.com" class="btn">百度</a>

<script>
    var Btn = document.querySelector(".btn");
    Btn.onclick = function(){
        return false;
    }
</script>
```
    每次调用 'return false' 的时候,它实际上做了三件事：
        event.preventDefault()
        event.stopPropagation()
        停止回调函数执行并立即返回
        
# 2. break

    break语句终止当前循环.
    
```js
for(let i = 1; i < 10; i++){
    if(i == 3){
        break;
    }
    console.log(i); // 1 2
}
```

# 3. continue

    continue用于跳过循环中的一个迭代,不会立刻终止循环
```js
for(let i = 1; i < 10; i++){
    if(i == 3){
        continue;
    }
    console.log(i); // 1 2 4 5 6 7 8 9
}
```