// 点击按钮打开视频和关闭视频
// 视频流 在navigator接口, 
// mediaDevices接口,提供访问链接媒体输入的设备(麦克风,相机,视频)
// getUserMedia() 这是一个功能函数

// 报错 At least one of audio and video must be requested
// console.log(navigator.mediaDevices.getUserMedia());

// 获取到 video元素
var video = document.querySelector(".video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// 允许授权 获取音频和视频许可
var constraints = {audio:false,video:true}
// 给页面元素监听事件
document.addEventListener("click",videoStream,false);

function videoStream(event){
    var event = event || window.event;
    // 判断当点击按钮是 打开还是关闭按钮
    if(event.target.className == "left-open"){
        navigator.mediaDevices.getUserMedia(constraints)   // 需要先获得用户许可
        .then(function(mediaStream){
            // 获取视频元素
            // 把视频流导入到视频元素上
            video.srcObject = mediaStream;
            // 视频流加载成功之后触发
            video.onloadedmetadata = function(){
                video.play();
            }
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    // TODO 关闭摄像头按钮
    if(event.target.className == 'right-close'){
        navigator.mediaDevices.getUserMedia(constraints)   // 需要先获得用户许可
        .then(function(MediaStream){
            MediaStream.getTracks()[1].stop();
        })
    }
    // 点击拍照,并将照片导入到 canvas 
    if(event.target.className = "snap"){
        // 注意参数的选择
        ctx.drawImage(video,0,0,500,300);
    }
}



