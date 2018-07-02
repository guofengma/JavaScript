<!-- TOC -->

- [1. Module](#1-module)
    - [1.1. 模块包装器](#11-模块包装器)
    - [1.2. The module scope](#12-the-module-scope)
    - [1.3. module对象](#13-module对象)

<!-- /TOC -->

# 1. Module

    在Node.js模块系统中,每个文件都被视为独立的模块.

## 1.1. 模块包装器

    在执行模块代码之前,Node.js会使用一个如下的函数包装器将其包装:
```js
(function(exports,require,module,__filename,__dirname){
    // 模块的代码实际上在这里
})
```
    通过这样做,Node.js实现了以下几点:
        > 它保持了顶层的变量作用在模块范围内,而不是全局对象
        > 它有助于提供一些看似全局的但实际上是模块特定的变量,例如:
        实现者可以用于从模块中导出值的module 和 exports 对象.
        包含模块绝对文件名和目录路径的快捷变量 __filename 和 __dirname


## 1.2. The module scope

    __dirname
    当前模块的文件夹名称

    __filename
    当前模块的文件名称

## 1.3. module对象

    在每个模块中,module的自由变量是一个指向表示当前模块的对象的引用.module实际上不是全局的,而是每个模块本地的.

    module.children
    被该模块引用的模块对象

    module.exports
    由模块系统创建

    module.filename
    模块的完全解析后的文件名

    module.id
    模块的标识符.通常是完全解析后的文件名