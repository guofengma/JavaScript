<!-- TOC -->

- [1. File](#1-file)
- [2. dataTransfer](#2-datatransfer)
- [3. window.URL.createObjectURL()/window.URL.revokeObjectURL()](#3-windowurlcreateobjecturlwindowurlrevokeobjecturl)

<!-- /TOC -->

# 1. File

    HTML5在DOM中为文件输入元素添加了一个files集合,在通过文件输入字段选择了一个或多个文件时,files集合中将包含一
    组File对象,每个File对象对应着一个文件。每个File对象都有下列只读属性:

        name: 本地文件系统中的文件名
        size: 文件的字节大小
        type: 字符串,文件的MIME类型

# 2. dataTransfer

    在进行拖放操作时,DataTransfer对象用来保存通过拖放动作,拖动到浏览器的数据.它可以保存一项或多项数据,一种或多种数据类型.
    这个对象在所有的拖动事件属性 dataTransfer 都是可用的.

    属性概述            类型(Type)
    files              FileList

    方法:
    obj.clearData(type);
    删除与给定类型关联的数据.类型参数是可选的。

    getData()
    根据指定的类型检索数据,如果指定类型的数据不存在或者该DataTransfer对象中没有数据,方法将返回一个空字符串.
    obj.getData(type);


    setData()
    为一个给定的类型设置数据.
    obj.setData(type,data);

# 3. window.URL.createObjectURL()/window.URL.revokeObjectURL()

    objectURL = URL.createObjectURL(obj);
    用来创建URL的File对象或者Blob对象

    注意: 在每次调用 createObjectURL()方法时,都会创建一个新的URL对象,即使你用相同的对象作为参数创建过.

    URL.revokeObjectURL()静态方法用来释放一个之前通过调用URL.createObjectURL()创建的已经存
    在的URL对象.当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这
    个文件的引用了.