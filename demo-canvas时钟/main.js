function drawClock(){
    var canvas = document.getElementById("canvas");
    // 获取上下文环境
    var ctx = canvas.getContext('2d');
    // 清除画布状态
    ctx.clearRect(0,0,300,330);
    // 获取时间
    var a = new Date();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    hour = hour + min/60;   // 小时要获取浮点数,产生偏移
    hour = hour > 12 ? (hour-12) : hour;

    // 先画圆(表盘)
    ctx.beginPath();
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 2;
    // 圆心,半径,起点角度 和 终点角度, 最后一个参数表示按顺时针和逆时针旋转,false表示按逆时针.
    ctx.arc(150,150,150,0,2*Math.PI,false);
    ctx.stroke();
    ctx.closePath();

    // 绘制时针刻度
    for(let i = 0; i < 12; i++){
        ctx.save();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 5;
        // 设置旋转原点
        ctx.translate(150,150);
        // 每个时针刻度间隔为30deg,  2PI对应360度
        ctx.rotate(i * 30 * Math.PI / 180);
        // 将游绘图标移动到(x,y),不画线
        ctx.beginPath();
        ctx.moveTo(0,-141);
        // 从游绘图标开始绘制一条直线
        ctx.lineTo(0,-149);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    // 绘制分针刻度
    for(let i = 0; i < 60; i++){
        ctx.save()
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#000";
        ctx.translate(150,150);
        ctx.rotate(i * 6 * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(0,-144);
        ctx.lineTo(0,-149);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    // 绘制时针   注意: 绘制时分秒针的初始状态
    ctx.save();
    ctx.lineWidth = 7;
    ctx.strokeStyle = "#000";
    ctx.translate(150,150); // 设置时针的旋转中心
    ctx.rotate(hour*30*Math.PI/180);    // 设置时针的旋转角度
    ctx.beginPath();    // 开始绘制
    ctx.moveTo(0,-120); // 设置游离起点,不画线
    ctx.lineTo(0,10);   // 从起点到终点开始绘制
    ctx.stroke();   // 开始绘制
    ctx.closePath();    // 结束绘制
    ctx.restore();

    // 绘制分针 同上
    ctx.save();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000";
    ctx.translate(150,150);
    ctx.rotate(min * 6 * Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(0,-136);
    ctx.lineTo(0,15);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // 绘制秒针 同上
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#f00";
    ctx.translate(150,150);
    ctx.rotate(sec * 6 * Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(0,-144);
    ctx.lineTo(0,20);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // 绘制一个中心交汇点
    ctx.beginPath();
    ctx.arc(150,150,4,0,2*Math.PI);
    ctx.fillStyle = "#000";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // 显示电子时间
    ctx.font = "20px 微软雅黑";
    ctx.lineWidth = 2;
    // 上面的时间是浮点数,重新获取时间
    var hour = a.getHours();
    // 判断时分秒,如果大于10,正常显示,如果小于10,前面加一个0
    var str = hour > 10 ? hour : ('0' + hour);
    var str1 = ":" + (min > 10 ? min : ('0' + min));
    var str2 = ":" + (sec > 10 ? sec : ('0' + sec));
    // 把时分秒拼接成一个字符串
    var str3 = str + str1 + str2;
    // 设置笔触颜色,并在指定位置显示
    ctx.fillStyle = "purple";
    ctx.fillText(str3,100,325); // 开始绘制
}
drawClock();
setInterval(drawClock,1000);


var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#f00";
ctx.fillRect(0,0,100,100);

ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.fillRect(50,50,100,100);

// 清除重叠部分
ctx.clearRect(50,50,50,50);

ctx.beginPath();
// 主要是绘制路径
ctx.rect(100,100,100,100);
ctx.closePath();
ctx.stroke();
ctx.clearRect(125,125,50,50);



// 绘制一个圆环形
var canvas1 = document.getElementById("canvas2");
var ctx1 = canvas1.getContext("2d");

ctx1.beginPath();
// 绘制外圆
ctx1.arc(150,150,120,0,2 * Math.PI,false);
// 移动绘制起点
ctx1.moveTo(275,150);
// 绘制内圆
ctx1.arc(150,150,125,2 * Math.PI,false);

// 绘制时针
ctx1.strokeStyle = "#000";
ctx1.lineWidth = 1;
ctx1.moveTo(150,150);
ctx1.lineTo(240,150);

// 绘制分针
ctx1.strokeStyle = "#000";
ctx1.lineWidth = 1;
ctx1.moveTo(150,150);
ctx1.lineTo(150,40)
ctx1.stroke();