<!-- TOC -->

- [1. tips & bugs](#1-tips--bugs)
- [2. drawImage](#2-drawimage)
- [3. toDataURL](#3-todataurl)

<!-- /TOC -->

# 1. tips & bugs

    canvas 设置宽高的问题

    canvas默认宽高为 300 * 150, 如果通过css设置时,在绘制图像会出现拉伸的情况.这是因为canvas的默认宽高为 300px * 150px,
    在css中设置宽高,实际上是把canvas在 300px * 150px 的基础上进行了拉伸. 图像会发生变形.

    通过js设置canvas宽高:
    document.getElementById("canvas").width = 600;
    document.getElementById("canvas").height = 600;

# 2. drawImage

    context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)

    参数:
        img:        绘制到上下文的元素.允许任何的canvas图像源 例如:HTMLImageElement HTMLVideoElement 或者
        HTMLCanvasElement
        sx:         开始剪切的x坐标位置
        sy:         开始剪切的y坐标位置
        swidth:     被剪切图像的宽度
        sheight:    被剪切图像的高度
        x:          在画布上放置图像的x坐标
        y:          在画布上放置图像的y坐标
        width:      要使用的图像的宽度(伸展或缩小图像)
        height:     要使用的图像的高度(伸展或缩小图像)

# 3. toDataURL

    可以导出在<canvas>元素上绘制的图像
    
```js
var canvas = document.getElementById("canvas");

if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    var imgURI = canvas.toDataURL("image/png");
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}
```
    默认情况下,浏览器会将图像编码为png格式.

    dataURL语法:一个完整的dataURI是下面这样的:
        data:[<mediatype>][;base64],<data>

    mediatype声明了文件类型,遵循MIME规则,如'image/png','text/plain';之后是编码类型,这里只涉及base64;后面就是
    文件编码后的内容.
    