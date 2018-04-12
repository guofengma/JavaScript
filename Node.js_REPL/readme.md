<!-- TOC -->

- [1. REPL(交互式解释器)](#1-repl交互式解释器)
    - [1.1. 使用变量](#11-使用变量)
    - [1.2. 多行表达式](#12-多行表达式)
    - [1.3. 下划线(_)变量](#13-下划线_变量)
    - [1.4. REPL命令](#14-repl命令)

<!-- /TOC -->

# 1. REPL(交互式解释器)

    Node.js REPL(Read Eval Print Loop:交互式解释器)表示一个电脑的环境,类似window系统的终端或Unix/Linux shell,我们可以在终端
    中输入命令,并接收系统的响应.
    
    Node自带了交互式解释器,可以执行以下任务:
        
        读取 - 读取用户输入,解析输入了JavaScript数据结构并存储在内存中
        执行 - 执行输入的数据结构
        打印 - 输出结果
        循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出.

    可以输入以下命令来启动Node的终端:
        $ node
        > 
    这时我们就可以在 > 后输入简单的表达式,并按下回车键来计算结果.


## 1.1. 使用变量

    你可以将数据存储在变量中,并在你需要的时候使用它.
    变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。
    
    使用 var 关键字的变量可以使用 console.log() 来输出变量.

## 1.2. 多行表达式

    Node REPL支持输入多行表达式,这就有点类似JavaScript.
```js
$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
x: 1
x: 2
x: 3
x: 4
x: 5
undefined
>
```
    ... 三个点的符号是系统自动生成的,你回车换行后即可.Node会自动检测是否为连续的表达式.


## 1.3. 下划线(_)变量

    可以使用下划线(_)获取上一个表达式的运算结果:
```js
$ node
> var x = 10
> var y = 10
> x + y
20
> var sum = _
> console.log(sum)
30
>
```

## 1.4. REPL命令

    ctrl + c                退出当前终端
    ctrl + c按两次          退出Node REPL
    ctrl+d                  退出Node REPL
    向上/向下键             查看输入的历史命令
    tab                     列出当前命令
    .help                   列出使用命令
    .break                  退出多行表达式
    .clear                  退出多行表达式
    .save filename          保存当前的Node REPL会话到指定文件   
                            (会把当前的会话的内容保存到一个指定的文件里.)

    .load filename          载入当前Node REPL会话的文件内容
                            (会调用出指定文件的内容)