<!-- TOC -->

- [1. Echarts](#1-echarts)
    - [1.1. 丰富的可视化类型](#11-丰富的可视化类型)
    - [1.2. ECharts教程](#12-echarts教程)
    - [1.3. 自定义构建ECharts](#13-自定义构建echarts)

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
    