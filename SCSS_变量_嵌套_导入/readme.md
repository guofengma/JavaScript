<!-- TOC -->

- [1. Sass](#1-sass)
    - [1.1. 特色功能](#11-特色功能)
    - [1.2. 安装](#12-安装)
    - [1.3. 后缀](#13-后缀)
    - [1.4. 变量](#14-变量)
    - [1.5. 嵌套CSS规则](#15-嵌套css规则)
        - [1.5.1. 群组选择器的嵌套](#151-群组选择器的嵌套)
        - [1.5.2. 子组合选择器和同层组合选择器:> + ~](#152-子组合选择器和同层组合选择器--)
        - [1.5.3. 属性嵌套](#153-属性嵌套)
    - [1.6. 导入SASS文件](#16-导入sass文件)
        - [1.6.1. 使用SASS部分文件](#161-使用sass部分文件)
        - [1.6.2. 默认变量值](#162-默认变量值)
        - [1.6.3. 嵌套导入](#163-嵌套导入)
        - [1.6.4. 原生CSS导入](#164-原生css导入)
    - [1.7. 静默注释](#17-静默注释)

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

    Sass有两种语法格式,首先是SCSS,这种格式在CSS3语法的基础上进行拓展,所有CSS3语法在SCSS中都是通用的.同时加入Sass的特色功能.
    
    另一种是 .sass,不使用大括号和分号.

## 1.4. 变量

    sass的变量 以 $开头, 如果值 后面 加上 !default 则表示默认值.

    普通变量：
    定义之后可以在全局范围内使用.    
```scss
$fontSize:12px;

body{
    font-size:$fontSize;
}
```
    变量支持块级作用域,嵌套规则内定义的变量只能在嵌套规则内使用(局部变量),不在嵌套规则内定义的变量则可在任何地方
    使用(全局变量).将局部变量转换为全局变量 可以 添加 !global 声明：
    
```scss
.item1{
    $border:1px solid #000;
    border:$border;
}
.item2{
    border:$border;
}
```
    上述写法 编译 时会报错,因为 $border 是在 .item1{}里面定义的.  在$border后面 加上 !global 使之成为全局变量.
    $border:1px solid #000 !global  就ok了.


    在声明变量时,变量值也可以引用其他变量.
```scss
$highlight-color:#f90;
$highlight-border:1px solid $highlight-color;

.select{
    border:$highlight-border;
}

// 编译为:
.select {
  border: 1px solid #f90;
}
```

    变量名用中划线还是下划线分隔:
    sass的变量名可以与css中的属性名和选择器名称相同，包括中划线和下划线。不过，sass并不想强迫任何人一定使用中划线
    或下划线，所以这两种用法相互兼容。
```scss
$link-color:blue;
a{
    color:$link_color;
}

// 编译后的css
a {
  color: blue;
}
```

    默认变量：
    sass的默认变量仅需要在值后面 加上 !default 即可.
```scss
$baseLineHeight: 1.5!default;
```
    sass的默认变量一般是用来设置默认值,然后根据需要来覆盖的,覆盖的方式也很简单,只需要在默认变量之前重新声明下
    变量即可
```scss
$baseLineHeight: 2;
$baseLineHeight: 1.5!default;

body{
    line-height:$baseLineHeight;
}

// 编译后的 css 文件
body {
  line-height: 2;
}
```
    可以看出,编译后的 line-height为2,而不是之前默认的 1.5默认变量在进行组件化开发的时候会非常有用.
    

## 1.5. 嵌套CSS规则

    css中重复写选择器是非常恼人的.sass可以让你只写一遍，且使样式可读性更高
```scss
#content{
    article{
        h1{color:#333}
        p{margin-top:1.4em}
    }
    aside{background-color:#eee}
}

// 编译后的css
#content article h1 {
  color: #333;
}
#content article p {
  margin-top: 1.4em;
}
#content aside {
  background-color: #eee;
}
```

    大多数情况下,这种简单的嵌套都没有问题,但是有些场景下不行.比如你想要在嵌套的选择器里面 立刻应用于一个 类似
    :hover的伪类.为了解决这种以及其他情况,sass提供了一个特殊结构 $.
```scss
.active{
    a{color:#f00}
    :hover{color:#ff0}
}

// 编译后的CSS
.active a {
  color: #f00;
}
.active :hover {
  color: #ff0;
}
```
    这意味着color: red这条规则将会被应用到选择器article a :hover，article元素内链接的所有子元素在被hover时都会变成红色.这是不正确的.
    
```scss
.active{
    a{color:#f00}
    &:hover{color:#ff0}
}

// 编译后的 css文件
.active a {
  color: #f00;
}
.active a:hover {
  color: #ff0;
}
```
    在为父选择器添加 :hover 等伪类时,这种方式非常有用.

### 1.5.1. 群组选择器的嵌套

    css的写法会让你在群组选择器中的每一个选择器前都重复一遍容器元素的选择器。

```css
.container h1,.container h2, .container h3, .container h4{margin-bottom:10px}
```

    sass在的嵌套特性在这种场景下也非常有用.
```scss
.container{
    h1,h2,h3,h4{margin-bottom:10px}
}

// 编译后的 CSS
.container h1, .container h2, .container h3, .container h4 {
  margin-top: 10px;
}
```
    处理这种群组选择器规则嵌套上的强大能力,正是sass在减少重复敲写方面的贡献之一.尤其在当嵌套级别达到两层甚至三层
    以上时,与普通的css编写方式相比,只写一遍群组选择器大大减少了工作量.

### 1.5.2. 子组合选择器和同层组合选择器:> + ~

```scss
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```

### 1.5.3. 属性嵌套

    在sass中,除了css选择器,属性也可以进行嵌套.尽管编写属性涉及的重复不像编写选择器那么糟糕,但是要反复写 
    border-style border-width border-color border-也是非常恼人的.在sass中,你只需敲写一遍 border:

```scss
nav{
    border:{
        style:solid;
        width:1px;
        color:#ccc;
    }
}

// 编译后的CSS
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```

## 1.6. 导入SASS文件

    CSS有一个特别不常用的特性,即@import规则,它允许在一个css文件中导入其他css文件.然而,后果是只有执行到@import时
    浏览器才会去下载其他css文件,这导致页面加载起来特别慢.

    sass也有一个@import规则,但不同的是,sass的@import规则在生成css文件时就把相关文件导入进来.这意味着所有相关的
    样式被归纳到了同一个css文件中,而无需发起额外的下载请求. 

    使用sass的@import规则可以省略 .sass 或.scss 文件后缀.
    
### 1.6.1. 使用SASS部分文件

    当通过 @import 把sass样式分散到多个文件时,你通常只想生成 css 文件.那些专门为 @import 命令而编写的sass文件,
    并不需要生成对应的css文件,这样的sass文件被成为局部文件.对此,sass有一个特殊的约定来命名这些文件.

    此约定即，sass局部文件名以 _ 开头,这样sass就不会在编译时单独编译这个文件 输出 css,而只把这个文件用作导入.


    局部文件可以被多个不同的文件引用.当一些样式需要在多个页面甚至多个项目中使用时,这非常有用.在这种情况下,有时需要
    在你的样式表中对导入的样式稍作修改,sass有一个功能刚好可以解决这个问题,即默认变量值

### 1.6.2. 默认变量值

    一般情况下,你反复声明一个变量,只有最后一处声明有效且它会覆盖前边的值.举例说明：
    
```scss
$link-color:blue;
$link_color:red;

a{
    color:$link_color;
}

// 编译后的CSS
a {
  color: red;
}
```

    !default:如果这个变量声明赋值了,那就用它声明的值,否则就用这个默认值!
```scss
$fancybox-width:400px !default;

.fancybox{
    width:$fancybox-width;
}
```

### 1.6.3. 嵌套导入

    sass允许@import命令写在css规则内.这种导入方式下,生成对应的css文件时,局部文件会被直接插入到css规则内导入它的
    地方.
```scss
aside {
  background: blue;
  color: white;
}

.blue-theme {@import "blue-theme"}
```

    被导入的局部文件中定义的所有变量和混合器,也会在这个规则范围内生效.这些变量和混合器不会全局有效,这样
    我们就可以通过嵌套导入只对站点中某一特定区域运用某种颜色主题或通过其他通过变量配置的样式.

### 1.6.4. 原生CSS导入

    由于SASS兼容原生的css,所以它也支持原生的 css@import. 尽管通常在sass中使用 @import时,sass会尝试
    找到对应的sass文件并导入进来,但在下列三种情况下会生成原生的 CSS@import,尽管这会造成浏览器解析css
    时的额外下载：
        1. 被导入文件的名字以 .css结尾
        2. 被导入文件的名字是一个URL地址
        3. 被导入文件的名字是CSS的url()值.
    这就是说,你不能用sass的@import直接导入一个原始的css文件,因为sass会认为你想用css原生的@import.但是,因为sass的语法完全兼容
    css,所以你可以把原始的css文件改名为.scss后缀,即可直接导入了.
    
## 1.7. 静默注释

    css中注释的作用包括帮助你组织样式、以后你看自己的代码时明白为什么这样写，以及简单的样式说明。但是，你并不希望每个浏览网站
    源码的人都能看到所有注释。

    sass另外提供了一种不同于css标准注释格式/* ... */的注释语法，即静默注释，其内容不会出现在生成的css文件中.

```scss
body {
    color: #333; // 这种注释内容不会出现在生成的css文件中
    padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}


// 编译后的CSS文件
body {
  color: #333;
  padding: 0;
  /* 这种注释内容会出现在生成的css文件中 */
}
```

