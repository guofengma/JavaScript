<!-- TOC -->

- [1. Sass](#1-sass)
    - [1.1. 特色功能](#11-特色功能)
    - [1.2. 安装](#12-安装)
    - [1.3. 后缀](#13-后缀)

<!-- /TOC -->

# 1. Sass

    SASS是世界上最成熟,最稳定,最强大的专业级CSS扩展语言.Sass完全兼容所有版本的CSS,且Sass拥有比其他任何CSS扩展语言更多的
    功能和特性.有很多框架使用Sass,如compass等

## 1.1. 特色功能

    1. 完全兼容CSS3
    2. 在CSS基础上增加变量 嵌套 混合等功能
    3. 通过函数进行颜色值 与 属性值 的运算
    4. 提供控制指令等高级功能
    5. 自定义输出格式
    
## 1.2. 安装

    Sass基于Ruby语言开发的,因此安装Sass前需要安装Rubuy.

    安装完后需要测试安装有没有成功,运行CMD输入以下命令：
        ruby -v
        ruby 2.3.3p222 (2016-11-21 revision 56859) =i3386-mingw32]
        
    安装好 ruby 后,因为国内网络的问题导致gem 源 间歇性中断,因此我们需要更换 gem 源.
    
    1.  删除原gem源
        gem sources --remove https://rubygems.org/
    
    2.  添加国内淘宝源
        gem sources -a https://ruby.taobao.org/
        注意：如果你的系统不支持https,将淘宝源更换为 gem sources -a https://gem.ruby-china-rog

    3.  打印是否替换成功    
        sources -l
        http://gems.ruby-china.org

    4.  安装最新版本的Sass和Compass
        gem install sass
        gem install compass

    5.  安装完成之后,检测安装的 sass 和 compass 版本
        sass -v
        Sass 3.5.5 (Bleeding Edge)

        compass -v
        Compass 1.0.3(Polaris)

    6.  如下sass常用更新 查看版本 sass命令帮助等命令

        更新sass
        gem updated sass

        查看sass版本
        sass -v

        查看sass帮助
        sass -h

    7.  编译SCSS
        在VS Code 里下载一个 SCSS 插件 Easy-SCSS,写好SCSS文件 并 Ctrl+S保存后 会自动生成 同名的 .css 和 .min.css文化
        
## 1.3. 后缀

    Sass有两种语法格式,首先是SCSS,这种格式在CSS3语法的基础上进行拓展,所有CSS3语法在SCSS中都是通用的.同时加入Sass的特色
    功能.

    另一种也是最早的Sass语法格式,被成为缩进格式,通常简称"Sass",是一种简化格式.它使用 '缩进' 代替 花括号 表示属性 属于
    某个选择器 用 换行 代替 分号 分隔属性.