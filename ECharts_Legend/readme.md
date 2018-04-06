<!-- TOC -->

- [1. Legend](#1-legend)
    - [1.1. textStyle](#11-textstyle)
    - [1.2. data](#12-data)

<!-- /TOC -->

# 1. Legend

    图例组件
    图例组件展现了不同系列的标记(symbol),颜色和名字.可以通过点击图例控制哪些系列不显示.

    type:
    图例的类型.可选值:
    plain:  普通图例.缺省就是普通图例
    scroll  可滚动翻页的图例.当图例数量较多时可以使用

    show:true|false 图例是否显示

    zlevel:
    所有图形的zlevel值.zlevel用于Canvas分层,不同zlevel值的图形会放置在不同的Canvas中,Canvas分层是一种常见的优化手段.

    z:
    组件的所有图形的z值.控制图形的前后顺序.z值小的图形会被z值大的图形覆盖

    left
    图例组件离容器左侧的距离, 可以是20这样的具体像素值,可以是像'20%'这样相对于容器宽高的百分比,也可以是'left' 'center' 
    'right'等值!

    top
    图例组件离容器上侧的距离,值可以是像20这样的具体的像素值,可以是像 '20%'这样相对于容器宽高的百分比,也可以是 'top' 
    'middle' 'bottom'

    right
    图例组件离容器右侧的距离,同上

    bottom
    图例组件离容器下侧的距离,同上

    width
    图例组件的宽度,默认自适应

    height
    图例组件的高度,默认自适应

    orient
    图例列表的布局朝向  horizontal/vertical

    align
    图例标记和文本的对齐.默认自动,根据组件的位置和 orient决定,当组件的 left 值为 'right' 以及纵向布局为 vertical的时候
    为右对齐,
    可选:
    'auto'/'left'/'right'


    padding:
    图例内边距,单位px,默认各方向内边距为5,接受数组分别设定上右下左边距离.
    padding:5   设置内边距为5
    padding:[5,10]  设置上下内边距为5,左右内边距为10
    
    
    itemGap
    图例每项之间的间隔,横向布局时为水平间隔,纵向布局时为纵向间隔.

    itemWidth:'25'
    图例标记的图形宽度 (注意时图例标记的宽度)

    itemHeight:'14'
    图例标记的图形高度 (同上,图例标记的高度)

    formatter
    用来格式化图例文本,支持字符串模式和回调函数两种形式

    selectedMode(点击图例 控制 该条数据是否可以显示)
    图例选择的模式,控制是否可以通过点击图例改变系列的显示状态.默认开始图例选择,可以设成 false 关闭.
    除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式

    inactiveColor
    图例关闭时的颜色

    selected
    图例选中状态表
    selected:{
        '系列1':true,
        '系列2':false
    }

## 1.1. textStyle

    图例的公用文本样式

    color:'#333'
    文字的颜色

    fontStyle:'normal'
    文字字体风格

    fontWeight:'normal'
    字体粗细
    可选: 'normal' 'bold' 'bolder' 'lighter'

    fontFamily:'sans-serif'
    文字的字体系列

    fontSize:'12'
    
    lineHeight
    行高. rich中如果没有设置 lineHeight,则会取父层级的 lineHeight.

    backgroundColor:'transparent'
    文字块背景色
    可以是直接的颜色值,例如:'#123434' 'red' 也可以支持使用图片

    backgroundColor:{
        image:'./xxx.png'   
        // 这里可以是图片的 URL
        // 或者图片的 dataURL
        // 或者 HTMLImageElement对象
        // 或者 HTMLCanvasElement 对象
    }
    当使用图片的时候,可以使用 width 或 height指定宽高,也可以不指定自适应.

    
    borderColor:'transparent'
    文字块边框颜色

    borderWidth:5
    文字块边框宽度

    borderRadius:number|Array
    文字块的圆角

    padding:number|Array
    文字块的内边距

    shadowColor:string
    文字块的背景阴影颜色

    shadowBlur:number
    文字块的背景阴影长度

    shadowOffsetX:number
    文字块的背景阴影X偏移

    shadowOffsetY:number
    文字块的背景阴影Y偏移

    width:number|string
    文字块的宽度.一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 backgroundColor）时，可能会使用它
    注意:文字块的 width 和 height 指定的是内容宽高,不包含padding.

    width可以是百分比字符串,如'100%'.表示所在文本块的 contentWidth 的百分之多少.之所以以contentWidth做基数,因为每个
    文本片段只能基于content box 布局.
    

    height:number|string
    文字块的高度,不包含padding


    textBorderColor:'transparent'
    文字本身的描边颜色.

    textBorderWidth:'0'
    文字本身的描边宽度


    textShadowColor:'transparent'
    文字本身的阴影颜色

    textShadowBlur:'0'
    文字本身的阴影长度

    textShadowOffsetX:'0'
    文字本身的阴影X偏移
    
    textShadowOffsetY:'0'
    文字本身的阴影Y偏移
    

    tooltip
    图例的 tooltip配置,配置项同 tooltip。默认不显示,可以在legend文字很多的时候对文字做裁剪并且开启tooltip


## 1.2. data

    图例的数据数组.数组项通常为一个字符串,每一项代表一个系列的 name(如果是饼图,也可以是饼图单个数据的name).图例组件会自动
    根据对应系列的图形标记来绘制自己的颜色和标记,特殊字符串''或者'\n'用于图例的换行.

    如果要设置单独一项的样式,也可以把该项写成配置项对象.此时必须使用 name 属性对应表示系列的 name.

    data:[{
        name:'系列1',
        icon:'circle',
        textStyle:{
            color:'red'
        }
    }]

    backgroundColor:'transparent'
    图例背景颜色,默认透明.

    borderColor:'#ccc'
    图例的边框颜色

    borderWidth:'1'
    图例的边框线宽

    botderRadius:0  number|Array
    圆角半径,单位px.

    shadowBlur:number
    图形阴影的模糊大小

    pageButtonItemGap:5
    图例控制块中,按钮和页信息之间的间隔.

    pageButtonGap:5
    图例控制块和图例项之间的间隔