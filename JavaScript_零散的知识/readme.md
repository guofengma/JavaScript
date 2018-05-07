<!-- TOC -->

- [1. 开发环境与生产环境](#1-开发环境与生产环境)
- [2. CSS可以继承的属性](#2-css可以继承的属性)
- [3. 选择器及其权重](#3-选择器及其权重)
- [4. src/href](#4-srchref)
- [5. 浏览器内核](#5-浏览器内核)

<!-- /TOC -->

# 1. 开发环境与生产环境

    devDenpendencies 和 denpendencies
    
    devDenpendencies下列出的模块,是我们开发时用到的,比如我们安装 js 的压缩包gulp-uglify时采用的是 npm install --save-dev 
    gulp-gulify 命令安装,因为我们在发布后用不到它,而只是在开发时我们才用到它.dependencies下的模块,则是我们发布后还需要依赖的
    模块,譬如像jQuery库或者 Angular 框架类似的.我们在开发后肯定还需要依赖它们.


    -D (--save-dev的缩写)   下载时会下载到 devDenpendencies下  开发依赖,只在开发阶段需要
    -S (--save的缩写),如果不写参数,默认都是--save, 下载时会下载到 dependencies下. 生产依赖,开发与运行时都需要
    的依赖.
    
    
# 2. CSS可以继承的属性

    可以继承的属性:
        font-size/font-family/color
    
    不可以继承的属性：
        border padding margin width

# 3. 选择器及其权重

    id class tag 相邻选择器(p+h1) 后代选择器(p div) 通配符 属性选择器 伪类选择器
    权重: !import > [id > class > tag > *]

# 4. src/href

    

# 5. 浏览器内核