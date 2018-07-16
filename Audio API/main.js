var Audio = document.getElementById("audio");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// 创建音频上下文环境
var audioCtx = new (window.AudioContext || window.webkitAudioContext());
// 创建媒体源
var audioSrc = audioCtx.createMediaElementSource(Audio);
// 创建一个分析机,用来显示音频时间和频率的数据
var analyser = audioCtx.createAnalyser();
// 媒体源和分析机的连接和安装
audioSrc.connect(analyser);
analyser.connect(audioCtx.destination);

var voiceHeight = new Uint8Array(analyser.frequencyBinCount);

function draw(){
    analyser.getByteFrequencyData(voiceHeight);
    console.log(voiceHeight);
}
// setInterval(draw,2000);