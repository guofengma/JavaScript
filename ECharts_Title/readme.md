<!-- TOC -->

- [1. Echarts](#1-echarts)
    - [1.1. 丰富的可视化类型](#11-丰富的可视化类型)
    - [1.2. ECharts教程](#12-echarts教程)
    - [1.3. 自定义构建ECharts](#13-自定义构建echarts)
    - [1.4. 在Webpack中使用ECharts](#14-在webpack中使用echarts)
        - [1.4.1. 按需引入ECharts 图表和组件](#141-按需引入echarts-图表和组件)
    - [1.5. 个性化图标的样式](#15-个性化图标的样式)
    - [1.6. 配置项](#16-配置项)
        - [1.6.1. title](#161-title)
        - [1.6.2. textStyle](#162-textstyle)
        - [1.6.3. subtext](#163-subtext)

<!-- /TOC -->

# 1. Echarts

    ECharts 是一个使用 JavaScript 实现的开源可视化库,可以流畅的运行在PC和移动设备上,兼容当前绝大部分浏览器,底层
    依赖轻量级的矢量图形库ZRender,提供直观,交互丰富,可高度个性化定制的数据可视化图标.
    
## 1.1. 丰富的可视化类型

    ECharts提供了常规的折线图 柱状图 散点图 饼图 K线图,用于统计的盒形图,用于地理数据可视化的地图,热力图,线图,用于
    关系数据可视化的关系图 treemap.除了已经内置的包含了丰富功能的图标,ECharts还提供了自定义系列,只需要传入一个
    renderltem函数,就可以从数据映射到任何你想要的图形,更棒的是这些都还能和已有的交互组件结合使用而不需要操心其他事情.

## 1.2. ECharts教程

```js
// 第一个简单的 ECharts
var myChart = echarts.init(document.getElementById("main"));

var option = {
    title:{
        text:'ECharts入门实例'
    },
    tooltip:{},
    legend:{
        data:['销量']
    },
    xAxis:{
        data:['衣服','羊毛衫','雪纺衫','裤子','高跟鞋','袜子','夹克']
    },
    yAxis:{},
    series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,10,10,20]
    }]
};

myChart.setOption(option);
```

## 1.3. 自定义构建ECharts

    一般来说,可以直接在 echarts 下载页中获取构建好的 echarts,页可以从github中的echarts.dist文件夹中获取构建好的
    echarts,这都可以直接在浏览器端项目中使用.这些构建好的 echarts提供了下面这几种定制:
    
        完全版: echarts/dist/echarts.js 体积最大,包含所有的图标和组件
        常用版: echarts/dist/echarts.common.js 体积适中,包含常见的图标和组件
        精简版: echarts/dist/echart.simple.js 体积较小,仅包含最常用的图标和组件

    如果对文件体积有更严苛的要求,可以自己构建 echarts,能够仅仅包括自己所需要的图标和组件.


    准备工作: 创建自己的工程和安装 echarts
    
        mkdir myProject
        cd myProject

    在myProject目录下使用命令行初始化 并安装 echarts 
        cnpm init
        cnpm install echarts --save

    通过 cnpm 安装的 echarts 会出现在 myProject/node_modules目录下,从而可以直接在项目代码中得到 echarts

    使用 ES Module
        import * as echarts from 'echarts'

    使用CommonJS
        var echarts = require('echarts')

## 1.4. 在Webpack中使用ECharts

    可以通过使用如下命令 安装 ECharts
        cnpm install echarts --save

    通过 cnpm 上安装的 ECharts 会放在 node_modules目录下,可以直接在项目代码中 require('echarts')得到ECharts.
```js
var echarts = require('echarts');

var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title:{
        text:'ECharts入门实例'
    },
    tooltip:{},
    xAxis:{
        data:['羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
    },
    yAxis:{},
    series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,10,20]
    }]
})
```

### 1.4.1. 按需引入ECharts 图表和组件

    默认使用 require('echarts')得到的是已经加载了所有图标和组件的ECharts包,因此体积会比较大,如果项目中对体积要求比
    较严格,页可以只按需引入需要的模块.
```js
// 引入ECharts主模块
var echarts = require('echarts/lib/echarts');

// 引入柱状图
require('echarts/lib/chart/bar');
// 引入标题组件和提示框
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的DOM,初始化echarts实例
var myChart = echart.init(document.getElementById("main"));
myChart.setOption({
    title:{
        text:'EChart入门实例'
    },
    tooltip:{},
    xAxis:{
        data:['羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
    },
    yAxis:{},
    series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,10,10]
    }]
})
```

## 1.5. 个性化图标的样式

    ECharts提供了丰富的自定义配置选项,并且能够从全局 系列 数据三个层级去设置数据图形的样式.
    
```js
var Container = document.getElementById("container");

var mychart = echarts.init(Container);

var option = {
    title:{
        text:'自定义构建ECharts'
    },
    series:[
        {
            name:'访问来源',
            type:'pie',
            radius:'55%',
            data:[
                {value:235,name:'视频广告'},
                {value:274,name:'联盟广告'},
                {value:310,name:'邮件直销'},
                {value:335,name:'直接访问'},
                {value:400,name:'搜索引擎'},                        
            ]
        }
    ]
}
mychart.setOption(option);
```
    
    
## 1.6. 配置项


### 1.6.1. title

    show:true       是否显示标题组件
    title:text      主标题文本
    title:link      主标题文本超链接
    target:'blank'  指定窗口打开主标题超链接
    
### 1.6.2. textStyle

    color:''            主标题文字的颜色
    fontStyle:''        主标题文字字体的风格
    fontWeight:''       主标题字体粗细
    fontFamily:''       字体
    fontSize:''         字体大小
    align:''            水平对齐方式
    verticalAlign:''    文字垂直对齐方式
    lineHeight:''       
    width:''            文字块的宽度,一般不用指定,不指定则自动是文字的宽度.在想做表格项或者使用图片时,可能会使用它
                        注意:文字块的 width 和 height 指定的是内容宽度,不包含 padding.
    
    height:''           文字块的高度
    textBorderColor:    文字本身的描边高度
    textBorderWidth:    描边宽度
    textShadowOffsetX   文字本身的阴影X偏移
    textShadowOffsetY   文本本身的阴影Y偏移
    textShdowColor      文字阴影颜色
    textShadowBlur      文字本身的阴影长度

### 1.6.3. subtext

    subText:''          副标题文本
    sublink             副标题文本超链接
    subtarget:          指定窗口打开副标题超链接
    'self':当前窗口打开  'blank':新窗口打开


    subtextStyle    和 主标题(textStyle) 样式一样
        color           颜色
        fontStyle       副标题文字字体风格
        fontWeight      副标题字体粗细
        fontSize        字体大小
    
    
    padding:5           标题的padding
    itemGap             主副标题之间的间距
    zlevel              所有图形的zlevel值
    zlevel用于 Canvas分层,不同zlevel值的图形会放置在不同的Canvas中,Canvas分层是一种常见的优化手段.可以把一些图形变
    化频繁的组件设置成一个单独的 zlevel,需要注意的是过多的Canvas会引起内存开销的增大.

    z                   组件的所有图形的z值,控制图形的前后顺序.z值小的图形会被z值大的图形覆盖
    left                grid组件离容器左侧的距离    'left' 'center' 'right' 或者10 10% 这样的数字
    top                 grid组件里容器上侧的距离    'top' 'middle' 'bottom'  或者 10 10% 具体的数值
    right               同上
    bottom              同上
    backgroundColor     标题背景色,默认透明
    borderColor         标题边框颜色
    borderWidth         标题的边框线宽
    borderRadius        圆角
    shadowBlur          图形阴影的模糊大小
    shadowColor         图形阴影的模糊颜色
    shadowOffsetX       阴影水平方向上的偏移距离
    shadowOffsetY       阴影垂直方向上的偏移距离