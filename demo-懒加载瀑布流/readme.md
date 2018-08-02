<!-- TOC -->

- [1. cssText](#1-csstext)
- [效果](#效果)

<!-- /TOC -->

# 1. cssText

    cssText的本质就是设置HTML元素的style属性值。
    通过Js来覆写对象的样式是比较典型的一种销毁原样式并重建的过程,这种销毁和重建,都会增加浏览器的开销。
    object.style.cssText = '样式';
    这样就可以避免页面reflow,提高页面性能。但是会把原有的cssText清掉。

# 效果
![效果](https://github.com/JayK0720/JavaScript/blob/master/demo-%E6%87%92%E5%8A%A0%E8%BD%BD%E7%80%91%E5%B8%83%E6%B5%81/images/1.gif)