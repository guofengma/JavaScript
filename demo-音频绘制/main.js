var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// 设置 canvas 和 浏览器的高度一样
var w,h;

~~(function(){
    window.onresize = arguments.callee;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
})();



/*
Web Audio API
音频可视化额度原理
*/ 

// 创建音频上下文
// var mp3 = new AudioContext();
// // 获取音频对象
// var oAudio = document.getElementById("audio");
// // 创建媒体源,要进行解析
// var audioSrc = mp3.createMediaElementSource(oAudio);
// // 创建分析机,加工音频对象,进行音频处理
// var analyser = mp3.createAnalyser();
// // 媒体源和分析机的连接和安装
// audioSrc.connect(analyser);
// // 输出的目标,将分析机分析出来的处理音频数据的结果和扬声器的连接
// analyser.connect(mp3.destination);

// // 绘制音频的条数  fftSize
// // 数据的缓冲处理,转换成二进制数据
// var voiceHeight = new Uint8Array(analyser.frequencyBinCount);

// 将当前的频率数据赋值传入到 无符号字节数组中,进行实时连接
// function draw(){
//     analyser.getByteFrequencyData(voiceHeight);
//     console.log(voiceHeight);
// }
// setInterval(draw,1000);

