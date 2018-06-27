<!-- TOC -->

- [1. tips & bugs](#1-tips--bugs)

<!-- /TOC -->

# 1. tips & bugs

    canvas 设置宽高的问题

    canvas默认宽高为 300 * 150, 如果通过css设置时,在绘制图像会出现拉伸的情况.这是因为canvas的默认宽高为 300px * 150px,
    在css中设置宽高,实际上是把canvas在 300px * 150px 的基础上进行了拉伸. 图像会发生变形.

    通过js设置canvas宽高:
    document.getElementById("canvas").width = 600;
    document.getElementById("canvas").height = 600;