
# 绘制矩形

    HTML中的元素canvas只支持一种原生的图形绘制:矩形。所有其他的图形的绘制都至少需要生成一条路径.
    
    绘制一个填充的矩形
    fillRect(x,y,width,height);

    绘制一个矩形的边框
    strokeRect(x,y,width,height);

    清除指定矩形区域,让清除部分完全透明
    clearRect(x,y,width,height);

# 绘制圆

    ctx.arc(x,y,r,0,Math.PI*2,false)

    false 表示顺时针
    true  表示逆时针

# path2D

    Path2D对象可以在教新版本的浏览器中使用,用来缓存或记录绘画命令,这样你就将能快速地回顾路径.

    new Path2D()        空的Path对象
    new Path2D(path)    克隆Path对象

# 透明度Transparency

    这个属性影响到canvas里所有图形的透明度,有效的值范围是0.0到1.0,默认是1.0.
    globalAlpha属性在需要绘制大量拥有相同透明度的图形时候相当高效. 不过strokeStyle和fillStyle方法可操作性更强一点.

# 线型 Line styles

    lineWidth   设置线条的宽度
    lineGap     设置线条末端样式
    lineJoin    设置线条与线条结合处的样式