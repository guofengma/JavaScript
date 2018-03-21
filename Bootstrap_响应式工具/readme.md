<!-- TOC -->

- [1. 响应式工具](#1-响应式工具)
    - [1.1. 可用的类](#11-可用的类)
    - [1.2. 打印类](#12-打印类)
    - [1.3. 注意](#13-注意)

<!-- /TOC -->

# 1. 响应式工具

    为了加快对移动设备友好的页面开发工作,利用媒体查询功能并使用这些工具类可以方便的针对不同设备展示或隐藏页面内容.
    另外还包含了针对打印机显示或隐藏内容的工具类.

    有针对性的使用这类工具类,从而避免为同一个网站创建完全不同的版本.相反,通过使用这些工具类可以在不同设备上提供不同的展现
    形式.

## 1.1. 可用的类

                        超小屏幕        小屏幕          中等屏幕        大屏幕
                        (<768px)       (>=768px)       (>=992px)      (>=1200px)
    .visible-xs-*       可见        
    .visible-sm-*                       可见            
    .visible-md-*                                       可见
    .visible-lg-*                                                      可见


    .hidden-xs          不可见
    .hidden-sm                          不可见
    .hidden-md                                          不可见
    .hidden-lg                                                          不可见

## 1.2. 打印类

    和常规的响应式类一样,使用下面的类可以针对打印机影藏或显示某些内容

                                        浏览器      打印机
    .visibile-print-block                           可见
    .visibile-print-inline                          可见
    .visibile-print-inline-block                    可见

    .hide-print                         可见




## 1.3. 注意

    1. 在bootstrap中,同时设置 padding-top 和 padding-bottom 无效,因为bootstrap的box-sizing属性为border-box
    2. 有序列表和无须列表默认有 margin-bottom:10px;,但是如果去掉这个属性,会有14px的下边距.