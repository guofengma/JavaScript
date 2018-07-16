
# ImageData 对象

    ImageData对象中存储着canvas对象真实的像素数据，它包含以下几个只读属性：

    width
    图片宽度，单位是像素

    height
    图片高度,单位是像素

    data
    Uint8ClampedArray类型的一维数组，包含着RGBA格式的整型数据，范围在0至255之间（包括255）。

# 得到场景像素数据

    getImageData()

    var myImageData = ctx.getImageData(left, top, width, height);

# 在场景中写入像素数据

    ctx.putImageData(myImageData, dx, dy);

# 保存图片

    HTMLCanvasElement提供一个toDataURL()方法。

    canvas.toDataURL('image/png');
    默认设定.创建一个png图片

    canvas.toDataURL('image/jpeg',quality);
    创建一个jpg图片,你可以有选择地提供从0 到 1 的品质量,1表示最好品质,0基本不被辨析但又比较小的文件大小.
