<!-- TOC -->

- [1. grid](#1-grid)
    - [1.1. xAxis](#11-xaxis)
        - [1.1.1. nameTextStyle](#111-nametextstyle)

<!-- /TOC -->

# 1. grid

    直角坐标系内绘图网格,单个grid内最多可以放置上下两个X轴,左右两个Y轴.可以在网格上绘制折线图,柱状图,散点图.
    在EChart2.x里,单个echarts实例中最多只能存在一个 grid组件,在ECharts3中可以存在任意个grid组件.

    show:false
    是否显示直角坐标系网格

    zlevel:0
    所有图形的 zlevel值.

    z:2
    组件的所有图形的z值.控制图形的前后顺序.z值小的图形会被z值大的图形覆盖

    left:'10%'
    grid组件离容器左侧的距离.   'left' 'center' 'right'

    top:'60'
    grid组件离容器上侧的距离.   'top' 'middle' 'bottom'

    right:'10%'
    grid组件离容器右侧的距离.   

    bottom:'60'
    grid组件离容器下侧的距离

    width:'auto'
    grid组件的宽度,默认自适应

    height:'auto'
    grid组件的高度,默认自适应



## 1.1. xAxis

    show:true
    是否显示x轴 (包括刻度,线条,字体等)


    gridIndex:0
    x轴所在的grid的索引,默认位于第一个 grid


    position:'bottom|top'
    x轴的位置,默认 grid中的第一个x轴在grid的下方('bottom'),第二个x轴视第一个x轴的位置放在另一侧.


    offset:0
    x轴相对于默认位置的偏移,在相同的position上有多个x轴的时候有用

    type:'category'
    坐标轴类型
    'value':数值轴,适用于连续数据
    'category':类目轴,适用于离散的类目数据,为该类型时必须通过data设置类目数据
    'time':时间轴,适用于连续的时序数据,与数值轴相比时间轴带有时间的格式化,在刻度计算上也有所不同,例如会根据跨度的范围来
    决定使用月 星期 日 还是小时范围的刻度.
    'log':对数轴.适用于对数数据.


    name:''
    坐标轴名称

    nameLocation:''
    坐标轴名称显示位置
    'start' 'center|middle' 'end'

### 1.1.1. nameTextStyle

    color:''
    fontStyle:'normal'
    fontWeight:'normal'
    fontFamily:'sans-serif'
    fontSize:12
    align:'left'
    verticalAlign:'middle'
    lineHeight:56       // number
    backgroundColor:string|Object
    borderColor:string
    borderRadius:number|Array
    padding:number|Array
    shadowBlur:number
    shadowOffsetX:5

    width: number|string
    文字块的宽度.一般不用指定,不指定则自动是文字的宽度.在想做表格项或者使用图片时,可能会使用它.

    height:number|string
    文字块的高度.一般不用指定,不指定则自动是文字的高度.在使用图片的时候,可能会使用它

    textBorderColor:'transparent'
    文字本身的描边颜色

    textBorderWidth:0
    文字本身的描边颜色

    textShadowColor:string
    文字本身的阴影颜色.

    textShadowBlur
    textShadowOffsetX
    textShadowOffsetY
    textShadowColor

    nameGap:number
    坐标轴名称与轴线之间的距离