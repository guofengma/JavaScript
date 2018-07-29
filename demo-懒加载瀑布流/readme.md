<!-- TOC -->

- [1. cssText](#1-csstext)

<!-- /TOC -->

# 1. cssText

    cssText的本质就是设置HTML元素的style属性值。
    通过Js来覆写对象的样式是比较典型的一种销毁原样式并重建的过程,这种销毁和重建,都会增加浏览器的开销。
    object.style.cssText = '样式';
    这样就可以避免页面reflow,提高页面性能。但是会把原有的cssText清掉。