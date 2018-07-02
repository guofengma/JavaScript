<!-- TOC -->

- [1. npm](#1-npm)
    - [1.1. npm init](#11-npm-init)
    - [1.2. npm set](#12-npm-set)
    - [1.3. npm config](#13-npm-config)
    - [1.4. npm info](#14-npm-info)
    - [1.5. npm list](#15-npm-list)
    - [1.6. npm install](#16-npm-install)
    - [1.7. 安装不同版本](#17-安装不同版本)
    - [1.8. npm updata/npm unstall](#18-npm-updatanpm-unstall)
    - [1.9. npm run](#19-npm-run)
    - [1.10. server脚本命令](#110-server脚本命令)
    - [1.11. MIT许可证](#111-mit许可证)
    - [1.12. 内部变量](#112-内部变量)
    - [1.13. npm bin](#113-npm-bin)
    - [1.14. npm adduser](#114-npm-adduser)
    - [1.15. npm publish](#115-npm-publish)
    - [1.16. npm home,npm repo](#116-npm-homenpm-repo)
    - [1.17. npm shrinkwrap](#117-npm-shrinkwrap)
    - [1.18. pre- 和 post- 脚本](#118-pre--和-post--脚本)

<!-- /TOC -->

# 1. npm

    npm有两层含义。一层含义是Node的开放式模块登记和管理系统,另一层含义是Node默认的默认的模块管理器,是一个命令行下的软件,用来安装和管理Node
    模块.

    $ npm install npm@latest -g

    @latest表示最新版本, -g 表示全局安装.

## 1.1. npm init

    npm init 用来初始化生成一个新的package.json文件,如果使用了 -f -y 则跳过提问阶段,直接生成一个新的package.json文件.

    $ npm init -y

## 1.2. npm set

    npm set用来设置环境变量
    
    $ npm set init-author-name 'Your name'
    $ npm set init-author-email 'Your email'
    $ npm set init-author-url 'http://youdomain.com'
    $ npm set init-license 'MIT'

    上面命令等于为 npm init设置了默认值,以后执行 npm init的时候,package.json的作者姓名 邮件 主页 许可证字段就会自动写入预设的值.

## 1.3. npm config

    $ npm config set prefix $dir
    上面的命令将指定的 $dir 目录,设为模块的全局安装目录,如果当前有这个目录的写权限,那么运行 npm install的时候,就不再需要sudo命令授权了.

## 1.4. npm info

    npm info命令可以查看每个模块的具体信息. 比如查看underscore模块的信息.

    $ npm info underscore
```js
$ npm info underscore
{ name: 'underscore',
  description: 'JavaScript\'s functional programming helper library.',
  'dist-tags': { latest: '1.5.2', stable: '1.5.2' },
  repository:
   { type: 'git',
     url: 'git://github.com/jashkenas/underscore.git' },
  homepage: 'http://underscorejs.org',
  main: 'underscore.js',
  version: '1.5.2',
  devDependencies: { phantomjs: '1.9.0-1' },
  licenses:
   { type: 'MIT',
     url: 'https://raw.github.com/jashkenas/underscore/master/LICENSE' },
  files:
   [ 'underscore.js',
     'underscore-min.js',
     'LICENSE' ],
  readmeFilename: 'README.md'}
```
    上面的命令返回一个JavaScript对象,包含了 underscore模块的详细信息,这个对象的每个成员,都可以直接从info命令查询.
```js
$ npm info underscore description
JavaScript's functional programming helper library.

$ npm info underscore homepage
http://underscorejs.org

$ npm info underscore version
1.5.2
```

## 1.5. npm list

    npm list命令以树形结构列出当前项目安装的所有模块,以及它们依赖的模块.

    $ npm list

    加上global参数,会列出全局安装的模块
    $ npm list -global


## 1.6. npm install

    Node模块采用 npm install命令安装.

    每个模块都可以 '全局安装',也可以'本地安装'. 全局安装指的是将一个模块安装到系统目录中,各个项目都可以调用,一般来说,全局安装只适用于工具
    模块,比如eslint 和 gulp. 本地安装 指的是将一个模块下载到当前项目的 Node_modules 子目录,然后只有在项目目录之中,才能调用这个模块.

    本地安装
        $ npm install <package name>

    全局安装
        $ npm install -global <package name>
        $ npm install -g <package name>


    npm install 也支持直接输入Github代码库地址
        $ npm install git://github.com/package/path.git
        $ npm install git://github.com/package/path.git#0.1.0        
    
    安装之前,npm install会先检查,node_modules目录之中是否已经存在指定模块.如果存在,就不再重新安装了,即使远程仓库已经有了一个新版本.


    如果你希望,一个模块不管是否安装过, npm 都要强制重新安装,可以使用 -f 或 --force参数。
        $npm install <packageName> --force

    如果你希望,所有模块都要强制重新安装,那就删除node_modules目录,重新执行 npm install.

        $ rm -rf node_modules
        $ npm install   
        npm install 默认会安装 dependencies字段和devDenpendencies字段中的所有模块,如果使用 --production参数,可以只安装
        dependencies字段的模块.
        
        $ npm install --production
        一旦安装了某个模块,就可以在代码中require命令加载这个模块.
         
## 1.7. 安装不同版本

    install命令总是安装模块的最新版本,如果要安装模块的特定版本,可以在模块名后面加上 @ 和版本号.

        $ npm install sax@latest
        $ npm install sax@0.1.1
        $ npm install sax@">=0.1.0 <0.2.0"

    install命令可以使用不同参数,指定所安装的模块属于哪一种性质的依赖关系,即出现在package.json文件的哪一项中.

        --save: 模块名将被添加到 dependencies,可以简化为参数 -S
        --save-dev: 模块名将被添加devDenpencies,可以简化为参数 -D

## 1.8. npm updata/npm unstall

    npm updata 命令可以更新本地安装的模块
        
        $ npm update [package name]
        $ npm updata -global [package name]


    使用-S 或 --save参数,可以在安装的时候更新package.json里面的版本号.


    npm uninstall命令,卸载已安装的模块.
        $ npm uninstall [package name]
        $ npm uninstall [package name] -global


## 1.9. npm run 

    npm 不仅可以用于模块管理,还可以用于执行脚本.package.json文件有一个scripts字段,可以用于指定脚本命令,供npm直接调用.

    npm run 是 npm run-script的缩写,一般都使用前者,但是后者可以更好地反应这个命令的本质.

    npm run如果不加任何参数,直接运行,会列出package.json里面所有可以执行的脚本命令.会列出 scripts属性下所有命令.
    
    npm 内置了两个命令简写, npm test等同于执行 npm run test, npm start等同于执行 npm run start.


    "build":"npm run build-js && npm run build-css"
    上面的写法是先运行 npm run build-js,然后再运行 npm run build-css,两个命令中间用 && 连接.如果希望两个命令同时平行执行,它们中间可以用
    &连接.


    环境变量$PATH:
        npm run命令会自动在环境变量 $PATH 添加 node_modules/.bin目录,所以scripts字段里面调用命令时不用加上路径,这就避免了全局安装npm模块.
        npm run会创建一个shell,执行指定的命令,并临时将 node_modules/.bin加入PATH变量,这意味着本地模块可以直接运行.
        在npm script执行完毕后,会从PATH中移除.


    执行 npm run test(可以简写为 npm test)的时候就等同于:
    ./node_modules/.bin/mocha


## 1.10. server脚本命令

    serve脚本命令用于启动服务.
    
    live-server模块有三个功能.
    > 启动一个HTTP服务器,展示指定目录的index.html文件,通过该文件加载各种网络资源,这是 file://协议做不到的
    > 添加自动刷新功能,只要指定目录之中,文件有任何变化,他就会刷新页面
    > npm run serve命令执行以后,自动打开浏览器


## 1.11. MIT许可证

    MIT许可证(MIT License)是许多软件授权条款中,被广泛使用的其中一种.与其他常见的软件授权条款相比,MIT是相对宽松的软件授权条款.
    MIT许可证之名源自麻省理工学院.

    被授权人有权利使用,复制,修改,合并,出版发行,散布,再授权及贩售软件及软件的副本.
    被授权人可根据程序的需要修改授权条款为适当的内容.

    被授权人义务:
        在软件和软件的所有副本中都必须包含版权声明和许可声明.

## 1.12. 内部变量

    scripts字段可以使用一些内部变量,主要是 package.json的各种字段.
    比如,package.json的内容是 {"name":"foo","version":"1.2.5"},那么变量 npm_package_name的值是foo,变量
    npm_package_version的值是1.2.5
    
    
## 1.13. npm bin

    npm bin命令显示相对于当前目录的,Node模块的可执行脚本所在的目录(即.bin目录).

        $ npm bin
        ./bode_modules/.bin
        
## 1.14. npm adduser

    npm adduser用于在 npmjs.com注册一个用户

        $ npm adduser
        Username:
        Password:
        Email

## 1.15. npm publish

    npm publish用于将当前模块发布到 npmjs.com.执行之前,需要向 npmjs.com申请用户名.

        $ npm adduser
        如果注册的时候报错, Unable to authenticate,need:Basic, 可以在用户名前面添加一个 ~ 符号.
        
    如果已经注册过,就使用下面的命令登陆.

        $ npm login

    登陆以后,就可以使用npm publish命令发布.

## 1.16. npm home,npm repo

    npm home命令可以打开一个模块的主页, npm repo命令则是打开一个模块的代码仓库.

        $ npm home $package
        $ npm repo $package

## 1.17. npm shrinkwrap

    npm shrinkwrap的作用是锁定当前项目的依赖模块的版本.

        $ npm shrinkwrap

    运行该命令后,会在当前项目的根目录下生成一个 npm-shrinkwrap.json文件,内容是 node_modules目录下所有已经安装的模块,以及它们的精确版本.
    下次运行 npm install命令时,npm发现当前目录下有 npm-shrinkwrap.json文件,就会只安装里面提到的模块,且版本也会保持一致.

## 1.18. pre- 和 post- 脚本

    npm run 为每条命令提供了 pre- 和 post-两个钩子(hook). 以npm run lint为例,执行这条命令之前,npm会先查看有没有定义prelint和postlint两个
    钩子,如果有的话,就会先执行 npm run prelint,然后执行 npm run lint,最后执行 npm run postlint.

    如果执行过程出错,就不会执行排在后面的脚本,即如果prelint脚本执行出错,就不会接着执行lint和postlink脚本.

    下面是一些常见的pre- 和 post- 脚本.

    > prepublish    发布一个模块前执行
    > postpublish   发布一个模块后执行
    > preinstall    用户执行 npm install命令时,先执行该脚本
    > postinstall   用户执行 npm install命令时,安装结束后执行该脚本,通常用于将下面的源码编译成用户需要的格式.
    > preuninstall  卸载一个模块前执行
    > postuninstall 卸载一个模块后执行
    > preversion    更改模块版本前执行
    > postversion   更改模块版本后执行
    > pretest       运行npm test命令前执行
    > posttest      运行npm test命令后执行
    > prestop       运行npm stop命令前执行
    > poststop      运行npm stop命令后执行
    > prestart      运行npm start命令前执行
    > poststart     运行npm start命令后执行
    > prerestart    运行npm restart命令前执行
    > postrestart   运行npm restart命令后执行