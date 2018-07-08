var oContainer = document.querySelector(".container");

oContainer.addEventListener("dragenter",drag,false);
oContainer.addEventListener("dragover",drag,false);
oContainer.addEventListener("drop",drag,false);

function drag(event){
    var event = event || window.event;
    switch(event.type){
        case 'dragenter':
        break;
        case "dragover":
        // 阻止浏览器的默认事件,图片拖动会变成URI形式
        event.preventDefault();
        break;
        case "drop":
        event.preventDefault();
        // dataTransfer drop drag 拖拽时产生的对象,数据载体
        // 属性 dataTransfer.files  
        var imgFiles = event.dataTransfer.files;
        for(let i = 0,imgFile;imgFile=imgFiles[i++]; ){
            var reader = new FileReader();
            reader.readAsDataURL(imgFile);
            console.log(reader);
            reader.onload = function(){
                var oImg = new Image();
                oImg.style.width = "100px";
                oImg.style.height = "100px";
                // 注意: 此时不要用 reader.result  要用 this.result
                oImg.src = this.result;
                oContainer.appendChild(oImg);
            }
        }       
        break;
    }
}

document.addEventListener("dragstart",pdrop,false);
document.addEventListener("drag",pdrop,false);
document.addEventListener("dragend",pdrop,false);

// 被拖放元素的三个事件  ondropstart ondrop ondropend
function pdrop(event){
    var event = event || window.event;
    switch(event.type){
        // 开始拖动时存储其ID,并修改其样式,改变透明度.
        case 'dragstart':
        event.dataTransfer.setData("Text",event.target.id);
        event.target.style.opacity = "0.4";
        console.log("开始拖动");
        break;
        case "drag":
        // 在拖动p元素的同时,改变输出文本的颜色
        event.target.style.color = "red";
        console.log("正在拖动...");
        break;
        case "dragend":
        // 当结束拖放后,还原初始的样式值.
        event.target.style.opacity = "1";
        event.target.style.color = "#000";
        console.log("拖放结束");
        break;
    }
}

document.addEventListener("dragenter",drop,false);
document.addEventListener("dragover",drop,false);
document.addEventListener("dragleave",drop,false);
document.addEventListener("drop",drop,false);

function drop(event){
    var event = event || window.event;
    switch(event.type){
        case "dragenter":
        // 判断是否进入目标区域,进入目标区域修改边框样式
        if(event.target.className == "droptarget"){
            event.target.style.border = "1px solid #000";
        };
        break;
        case "dragover":
        // 阻止元素的默认事件
        event.preventDefault();
        break;
        // 当可拖放的p元素离开droptarget时,重置div的边框样式
        case "dragleave":
        if(event.target.className == "droptarget"){
            event.target.style.border = "";
        };
        break;
        // 进行放置
        case "drop":
        // 阻止浏览器的默认事件
        event.preventDefault();
        if(event.target.className == "droptarget"){
            // 获取到被拖放元素的数据,然后添加到目标元素里
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
        }
        break;
    }
}

// document.addEventListener("dragstart",function(event){
//     event.dataTransfer.setData("Text",event.target.id);
//     // 开始拖动
//     event.target.style.opacity = "0.4";
//     console.log("开始拖动");
// });
// document.addEventListener("drag",function(){
//     // 拖动过程中触发
//     event.target.style.color = "#f00";
//     console.log("正在拖动...");
// });
// document.addEventListener("dragend",function(){
//     // 结束拖动
//     event.target.style.opacity = '1';
//     event.target.style.color = "#000";
//     console.log("拖动结束");
// })

// // 进入被拖动的目标元素
// document.addEventListener("dragenter",function(event){
//     // 当p元素进入droptarget,改变div的边框样式
//     if(event.target.className == "droptarget"){
//         event.target.style.border = "1px solid red";
//     }
// });
// document.addEventListener("dragover",function(event){
//     // 阻止浏览器的默认事件
//     event.preventDefault();
// });

// document.addEventListener("dragleave",function(event){
//     // 可拖放的元素离开droptarget
//     if(event.target.className == "droptarget"){
//         event.target.style.border = "1px solid #000";
//     }
// });

// document.addEventListener("drop",function(event){
//     event.preventDefault();
//     // 进行放置
//     if(event.target.className == 'droptarget'){
//         event.target.style.border = "1px solid #000";
//         var data = event.dataTransfer.getData("Text");
//         event.target.appendChild(document.getElementById(data));
//     }
// })


