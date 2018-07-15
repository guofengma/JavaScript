<!-- TOC -->

- [1. 绘制矩形](#1-绘制矩形)
- [2. 绘制圆](#2-绘制圆)
- [3. path2D](#3-path2d)
- [4. 透明度Transparency](#4-透明度transparency)
- [5. 线型 Line styles](#5-线型-line-styles)
- [6. CanvasGradient](#6-canvasgradient)
- [7. Patterns](#7-patterns)
- [8. Shadows](#8-shadows)
- [9. 绘制文本](#9-绘制文本)
- [10. Using Images](#10-using-images)
    - [10.1. drawImage()](#101-drawimage)
- [11. 被污染的canvas](#11-被污染的canvas)
- [12. sava() / restore()](#12-sava--restore)
- [13. Scaling](#13-scaling)
- [14. globalCompositeOperation](#14-globalcompositeoperation)

<!-- /TOC -->

# 1. 绘制矩形

    HTML中的元素canvas只支持一种原生的图形绘制:矩形。所有其他的图形的绘制都至少需要生成一条路径.
    
    绘制一个填充的矩形
    fillRect(x,y,width,height);

    绘制一个矩形的边框
    strokeRect(x,y,width,height);

    清除指定矩形区域,让清除部分完全透明
    clearRect(x,y,width,height);

# 2. 绘制圆

    ctx.arc(x,y,r,0,Math.PI*2,false)

    false 表示顺时针
    true  表示逆时针

# 3. path2D

    Path2D对象可以在教新版本的浏览器中使用,用来缓存或记录绘画命令,这样你就将能快速地回顾路径.

    new Path2D()        空的Path对象
    new Path2D(path)    克隆Path对象

# 4. 透明度Transparency

    这个属性影响到canvas里所有图形的透明度,有效的值范围是0.0到1.0,默认是1.0.
    globalAlpha属性在需要绘制大量拥有相同透明度的图形时候相当高效. 不过strokeStyle和fillStyle方法可操作性更强一点.

# 5. 线型 Line styles

    lineWidth   设置线条的宽度
    lineGap     设置线条末端样式
    lineJoin    设置线条与线条结合处的样式

# 6. CanvasGradient

    新建一个canvasGradient对象,并且赋给图形的fillStyle或strokeStyle属性.
    
    线性渐变 createLinearGradient(x1,y1,x2,y2);
    径向渐变 createRadialGradient(x1,y1,r1,x2,y2,r2);

    创建渐变后通过 addColorStop(x,color)来指定色标.

# 7. Patterns

    createPattern(image,type)
    image可以是一个image对象的引用,或者另一个canvas对象.type必须是下面的字符串值之一: repeat repeat-x repeat-y
    和 no-repeat.

# 8. Shadows

    shadowOffsetX  shadowOffsetY 用来设定阴影在X和Y轴的延伸距离,
    shadowBlur 用于设定阴影的模糊程度
    shadowColor 用于设定阴影颜色效果.


# 9. 绘制文本

    当使用 strokeText时, 用 strokeStyle 来修改文本颜色
    当使用 fillText时,用fillStyle来修改文本颜色

# 10. Using Images

    document.images 返回当前文档中所有 image 元素的集合。
    var htmlCollection = document.images

## 10.1. drawImage()

```js
var img = new Image();
img.onload = function(){
    ctx.drawImage();
}
img.src = "./xxx/jpg";
```
    drawImage(img,x,y)                  x y 表示在canvas里绘制的起始坐标
    drawImage(image,x,y,width,height)   width height 控制向canvas画入时应该缩放的大小
    drawImage(image,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
    
    前4个定义图像源的切片位置和大小,后四个则是定义切片的目标显示位置和大小。

# 11. 被污染的canvas

    一旦画布被污染,你就无法读取其数据.例如,不能再使用画布的 toBlob() toDataURL() 或getImageData()方法,
    调用他们会抛出安全错误.

# 12. sava() / restore()

    Canvas状态存储在栈中,每当sava()方法被调用后,当前的状态就被推动到栈中保存.每一次调用 restore方法,上一个保存
    的状态就从栈中弹出,所有设定都恢复。

    restore() 是一层层的跳出栈.
    
# 13. Scaling

    scale(x,y)方法接受两个参数,x,y分别是横轴和纵轴的缩放因子.他们都必须是正值.

# 14. globalCompositeOperation

    不仅可以在已有图形后面再画新图形,还可以用来遮盖指定区域,清除画布中的某些部分.