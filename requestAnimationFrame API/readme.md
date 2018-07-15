<!-- TOC -->

- [1. requestAnimationFrame](#1-requestanimationframe)
- [2. requestAnimationFrame优势](#2-requestanimationframe优势)

<!-- /TOC -->

# 1. requestAnimationFrame

    window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新
    动画.该方法使用一个回调函数作为参数,这个回调函数会在浏览器重绘之前调用.

    requestAnimationFrame() 是一个缓动函数,它能保证回调函数在屏幕每一次的刷新建个中只被执行一次,这样就不会引起丢帧现象.
    也不会导致动画出现卡顿的问题.

```js
// 使用方式
function animate(){
    // Do wharever
    window.requestAnimationFrame(animate);
    // Do something animate
}
window.requestAnimationFrame(animate);

// 也可以给canvas设置一个句柄,然后取消它.
var globalID;
function animate(){
    // Do whatever
    globalID = requestAnimationFrame(animate);
    // Do something animate
}
globalID = requestAnimationFrame(animate);
cancelAnimationFrame(globalID);
```
    cancelAnimationFrame()  取消事件


# 2. requestAnimationFrame优势

    CPU节能: 使用setTimeout实现的动画,当页面被隐藏或最小化时,setTimeout仍然在后台执行动画任务.由于此时页面处于不可见或不可用状态,刷新动画是没有意义的.完全是浪费CPU资源。而requestAnimationFrame则完全不同，当页面处理未激活的状态下,该页
    面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的requestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次
    停留的地方继续执行，有效节省了CPU开销。

    函数节流: 在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保
    证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有
    意义的,因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来.