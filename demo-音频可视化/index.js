/*
业务逻辑
1. 创建音频上下文
    1.1 先获取音频元素和画布
2. 在上下文中创建音频源对象
3. 创建分析机
4. 把音频源和分析机连接起来
5. 分析机把数据输出（扬声器,耳机）;

6  绘制 音频条
6.1  先确定绘制位置,再确定渐变
6.2  绘制区域在页面的中心位置, (w/2,h/2,w,h);
6.3  绘制线性渐变, 然后把渐变赋值给 绘制的矩形  
6.4  然后把处理的音频高度赋值给 矩形的高度 .
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var Audio = document.getElementById('audio');
// 创建音频上下文对象,兼容
var AudioCtx = new (AudioContext || window.webkitAudioContext)();
// 创建音频源
var audioSrc = AudioCtx.createMediaElementSource(Audio);
// 创建分析机
var analyser = AudioCtx.createAnalyser();
// 把音频源与分析机连接起来
audioSrc.connect(analyser);
// 音频效果的输出最终目的地
analyser.connect(AudioCtx.destination);
// 获取分析的数据

// frequencyBinCount 通常用于可视化的数据值的数量 fftSize的一半
console.log( analyser.frequencyBinCount ); // 1024

// 转换成二进制数据
var w,h;
~~function(){
    window.onresize = arguments.callee;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}();

var gradient = ctx.createLinearGradient(w/2,h/2,w/2,h/2-100);
gradient.addColorStop(0,'#000');
gradient.addColorStop(.6,'rgba(255,0,0,0.7)');
gradient.addColorStop(1,"rgba(0,0,255,0.7)");
ctx.fillStyle = gradient;

// 读取数据
var dataArray = new Uint8Array(analyser.frequencyBinCount);
// 定义一个信号量,每间隔一定的长度把数据渲染出来就可以了
var count = 80;

function draw(){
    analyser.getByteFrequencyData(dataArray);
    console.log(dataArray);
    ctx.clearRect(0,0,w,h);
    for(let i = 0; i < count; i++){
        var data = Math.round(dataArray.length/count);
        console.log(data);
        ctx.fillRect(w/2 + (i * 8),h/2,7,-dataArray[data*i]);
        ctx.fillRect(w/2 - (i * 8),h/2,7,-dataArray[data*i]);
    }
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
Audio.play();