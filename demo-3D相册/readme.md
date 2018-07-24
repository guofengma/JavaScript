<!-- TOC -->

- [1. 景深 perspective](#1-景深-perspective)
- [2. 旋转方式](#2-旋转方式)
- [3. backface-visibility](#3-backface-visibility)
- [4. 效果](#4-效果)

<!-- /TOC -->


# 1. 景深 perspective

    在CSS3中,perspective用于激活一个3D空间,设置在父级.
    .perspective{
        perspective:500px;
    }


# 2. 旋转方式

    transform:preserve-3d | flat;

    flat 是默认的, preserve-3d 表示所有子元素在3D平面呈现.

# 3. backface-visibility

    背面是否可见 visibility(默认) hidden
    
# 4. 效果
![效果](https://github.com/JayK0720/JavaScript/blob/master/demo-3D%E7%9B%B8%E5%86%8C/imgs/1.gif)