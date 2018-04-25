<!-- TOC -->

- [1. Express](#1-express)
    - [1.1. 安装Express](#11-安装express)
    - [第一个Express框架实例](#第一个express框架实例)

<!-- /TOC -->

# 1. Express

    Express是一个简洁而灵活的node.js Web应用框架,提供了一系列强大特性帮组你创建各种Web应用,和丰富的HTTP工具.
    使用Express可以快速地搭建一个完整功能的网站.

    Express框架核心特性:
        可以设置中间件来响应HTTP请求
        定义了路由表用于执行不同的HTTP请求动作
        可以通过向模板传递参数来动态渲染HTML页面

## 1.1. 安装Express

    $ cnpm install express --save

    以上命令会将Express框架安装在当前目录的node_modules目录中,node_modules目录下会自动创建express目录.以下几个重要的模块是需要
    与express框架一起安装的:
    
        body-parser - node.js中间件,用于处理JSON,Raw,Text 和 URL编码的数据
        cookie-parser - 这就是一个解析Cookie的工具.通过req.cookies可以取到传过来的cookie,并把它转成对象.
        multer - node.js中间件,用于处理enctype="multipart/form-data"(设置表单的MIME编码)的表单数据

    $ cnpm install body-parser --save
    $ cnpm install cookie-parser --save
    $ cnpm install multer --save


    安装完成后,可以查看express使用的版本号:
    $ cnpm list express

## 第一个Express框架实例

    