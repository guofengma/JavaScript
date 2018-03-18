<!-- TOC -->

- [1. jQuery方法](#1-jquery方法)
- [2. 原生JS方法](#2-原生js方法)

<!-- /TOC -->

# 1. jQuery方法

    width()/height()
        $(".box").width()           元素宽度
        $(".box").height()          元素高度

    innerWidth()/innerHeight()
        $(".box").innerWidth()      宽度 + 左右padding
        $(".box").innerHeight()     高度 + 上下padding

    outerWidth()/outerHeight()
        $(".box").outerWidth()      宽度 + 左右border + 左右padding
        $(".box").outerHeight()     高度 + 上下border + 上下padding

    可以为outerWidth() outerHeight() 添加参数true
        $(".box").outerWidth(true)  宽度 + 左右border + 左右padding + 左右margin
        $(".box").outerHeight(true) 宽度 + 上下border + 上下padding + 上下margin    

    
    $(window).width()           页面可见区域宽
    $(window).height()          页面可见区域高
    
    $(document).width()         整个文档的宽
    $(document).height()        整个文档的高(包括因滚动条未显示的内容)

    $(document).scrollTop()     滚动条高度
    $(window).scrollTop()       滚动条宽度

# 2. 原生JS方法

    document.documentElement.clientWidth        页面可视区域宽度
    document.documentElement.clientHeight       页面可视区域高度

    document.body.clientWidth                   body内容的宽度
    document.body.clientHeight                  dody内容的高度(包括未能显示的部分)