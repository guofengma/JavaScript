
# AudioContext

    AudioContext接口表示由音频模块连接而成的音频处理图,每个模块对应一个AudioNode.AudioContext可以控制它所
    包含的节点的创建.以及音频处理,解码操作的执行.

## AudioContext.createMediaElementSource()

    创建一个MediaElementAudioSourceNode接口来关联HTMLMediaElement,这可以用来播放和处理来自 <video> 或
     <audio>元素的音频。

## AudioContext.createMediaStreamSource()

    创建一个MediaStreamAudioSourceNode接口来关联可能来自本地计算机麦克风或其他来源的音频流MediaStream

## AudioContext.createMediaStreamDestination()

    创建一个MediaStreamAudioDestinationNode接口来关联可能存储在本地或已发送至其他计算机的MediaStream音频

## AudioContext.createAnalyser()

    创建一个AnalyserNode,它可以用来显示音频时间和频率的数据

## fftSize

    AnalyserNode接口的fftSize属性的值是一个无符号长整型的值,用于确定频域的FFT(快速傅里叶变换)的大小.
    fftSize属性的值必须是从32到32768范围内的2的非零幂,其默认值为2048.

## frequencyBinCount

    frequencyBinCount 的值固定为 AnalyserNode 接口中fftSize值的一半.该属性通畅