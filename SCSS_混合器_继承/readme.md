<!-- TOC -->

- [1. 混合器](#1-混合器)
    - [1.1. 混合器中的CSS规则](#11-混合器中的css规则)
    - [1.2. 给混合器传参](#12-给混合器传参)
    - [1.3. 默认参数值](#13-默认参数值)
- [2. 使用选择器继承来精简CSS](#2-使用选择器继承来精简css)

<!-- /TOC -->

# 1. 混合器

    混合器使用 @mixin 标识符定义.这个标识符给一大段样式赋予一个名字,这样你就可以轻易地通过引用这个名字
    重用这段样式.下边的这段sass代码,定义了一个非常简单的混合器:

```scss
@mixin rounded-corners{
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    border-radius:5px;
}
```
    然后可以在样式表中通过 @include 来使用这个混合器,放在你希望的任何地方. @include 调用会把混合器中的所有样式提取出来
    放在@include被调用的地方
```scss
.box{
    background-color:#f00;
    color:#f00;
    @include round-corners;
}


// 编译后的css
.box {
  background-color: #f00;
  color: #f00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

## 1.1. 混合器中的CSS规则

    混合器中不仅可以包含属性,也可以包含CSS规则,包含选择器和选择器中的属性.

```scss
@mixin no-bullets{
    list-style:none;
    li{
        list-style-image:none;
        list-style-type:none;
        margin-left:0px;
    }
}
ul.pain{
    color:#f444;
    @include no-bullets;
}


// 编译的CSS代码
ul.pain {
  color: #f444;
  list-style: none;
}

ul.pain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}
```
    sass的@include指令会将引入混合器的那行代码替换成混合器里边的内容.

## 1.2. 给混合器传参

    混合器并不一定总得生成相同的样式.可以通过在 @include 混合器时给混合器传参,来定制混合器生成的精确样式.当@include混合器时,
    参数其实就是可以赋值给css属性值的变量.

```scss
@mixin link-colors($normal,$hover,$visited){
    color:$normal;
    &hover{color:$hover;}
    &visited{color:$visited;}
}

a{
    @include link-colors(blue,red,green)
}

// 编译后的CSS
a {
  color: blue;
}
a:hover {
  color: red;
}
a:visited {
  color: green;
}
```
    当你 @include 混合器时,有时候可能会很难区分每个参数是什么意思,参数之间是一个什么样的顺序.为了解决这个问题,sass允许
    通过语法$name:value的形式指定每个参数的值.这种形式的传参,参数顺序就不必在乎了,只要保证没有漏掉参数即可:
```scss
a{
    @include link-colors{
        $normal:blue;
        $hove:red;
        $visited:green;
    }
}
```

## 1.3. 默认参数值

    sass允许混合器声明时给参数赋默认值.参数默认值使用 $name:default-value的声明形式.默认值可以是任何有效的css属性值,甚至
    是其他参数的引用.

```scss
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

# 2. 使用选择器继承来精简CSS

    使用sass的时候，最后一个减少重复的主要特性就是选择器继承.选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式.
    这个通过@extend语法实现，

```scss
.error{
    border:1px red;
    background-color:#f00;
}
.seriousError{
    @extend .error;
    border-width:3px;
}

// 编译后的CSS
.error, .seriousError {
  border: 1px red;
  background-color: #f00;
}

.seriousError {
  border-width: 3px;
}
```
    .seriousError不仅会继承.error自身的所有样式,任何跟.error有关的组合选择器样式也会被 .seriousError 以组合选择器的
    形式继承.
    
```scss
.error{
    border:1px red;
    background-color:#f00;
}
.error a{
    color:red;
    font-weight:100;
}
h1.error{
    font-size:1.2rem;
}
.seriousError{
    @extend .error;
    border-width:3px;
}


// 编译后的CSS
.error, .seriousError {
  border: 1px red;
  background-color: #f00;
}
.error a, .seriousError a {
  color: red;
  font-weight: 100;
}
h1.error, h1.seriousError {
  font-size: 1.2rem;
}
.seriousError {
  border-width: 3px;
}
```

