/*
逻辑业务：
1. 采用三维数组的方式来填充数字
1.1 数组里表示有多少个数字,和符号  0-9 + 冒号
1.2 具体描绘哪个数字 
1.3 一个矩阵数组,7*10 组成,每个数组里面的成员由数字 0 和 1 组成
2. 开始绘制, 0 表示不绘制, 1 表示绘制
    ctx.arc(x,y,r,0,Math.PI*2,false);
    2.1 如何确定圆心位置和横纵坐标, 难点
    2.2 绘制一个数字的矩形方阵为 7 * 10, 每个数字是由一个一个小圆填充的,且每个圆之间有一定间隙
    2.3 设置间隙为2 半径为 r 由此可以得出:
        12 + 14r = 7n;
        18 + 20r = 10n;    2r = n - 2  可以取 n = 10 ,由此可以得出 r = 4 
    2.4 得出一个矩形的数字方阵,每个数字为 70 * 100 大小, 每个小圆的半径为 4, 小圆之间的间隙为2
    2.5 求出每个圆的 x 坐标      1. (r + 1)
                                2. 2(r+1) + (r+1)
                                3. 4(r+1) + (r+1)
    2.6 同理求出每个圆的 y 坐标   1. (r + 1)
                                2. 2(r+1) + (r+1)
3.  当最里面的数组元素为1时,绘制一个圆,当数组元素为0时,不绘制
4. 绘制思路 面向过程 or 面向对象? 这里采用面向对象的方式
*/

var canvas = document.getElementById("canvas");

function Number(){
    this.ctx = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 200;
}
Number.prototype = {
    init:function(index,num){
        var r = 4;
        // digit[0] 表示绘制的是哪一个数字,这里先绘制数字0
        // i 的取值 0 - 9 表示每一行
        for(let i = 0; i < digit[num].length; i++){
            // j表示绘制的数字的每一列, 
            for(let j = 0; j < digit[num][i].length; j++){
                // 确定 行 和 列 就可以开始绘制数字了,digit[num][i][j] 为 1 时绘制一个圆,否则不绘制
                if(digit[num][i][j] == 1){
                    this.ctx.beginPath();
                    this.ctx.fillStyle = "#fff";
                    // 这里绘制的时间会重复在一起,想要把数字分隔开就需要改变x的坐标,可以让他与所绘制的数字相关联起来
                    this.ctx.arc(14*(r+2)*index+2*j*(r+1)+(r+1),2*i*(r+1)+(r+1),r,0,2*Math.PI,false );
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }
        }
    },
    // 将数字和时间挂钩
    getTime:function(){
        /*
        Fri Jul 06 2018 14:32:30 GMT+0800 (中国标准时间)
        利用正则表达式 获取到里面的时间
        */
       // 定义一个数组用来存储时间
       this.ctx.clearRect(0,0,700,200);
       var data = [];
       var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
        data.push( temp[1],temp[2],10,temp[3],temp[4],10,temp[5],temp[6] );
        for(let i = 0; i < data.length; i++){
            number.init(i,data[i]);
        }
    }
}
var number = new Number();
number.getTime();
clearInterval(timer);
var timer = setInterval(function(){
    number.getTime();
},1000);