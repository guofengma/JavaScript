var input = document.getElementById("input");
input.addEventListener("change",function(){
    console.log(this.files);
    for(let i = 0; i < this.files.length; i++){
        console.log('name:' + this.files[i].name + ',size:' + this.files[i].size + ',type:' + this.files[i].type );
    }
});

var File = document.getElementById("File");
File.addEventListener("change",function(){
    var bytes = 0,
        oFiles = this.files,
        nFiles = oFiles.length;
    for(let i = 0; i < nFiles; i++){
        bytes += oFiles[i].size;
    }
    var FileNumber = document.getElementById("fileNum");
    var FileSize = document.getElementById("fileSize");
    FileNumber.innerHTML = nFiles;
    FileSize.innerHTML = bytes;
},false);

// 通过 label 绑定 input 的方法
var fileSelect = document.getElementById("fileSelect"),
    fileEle = document.getElementById("fileEle");

fileSelect.addEventListener('click',function(){
    fileEle.addEventListener('change',function(){
        var files = fileEle.files;
        console.log(files);
    });
},false);   


// 使用拖放来选择文件
/*
业务逻辑:
1. 获取图片被拖动的区域 dropbox
    1.1 给 dropbox 分别绑定 拖动事件 dropenter(进入) dropover(拖动) drop(放置)
    1.2 利用 switch 语句, 判断当前事件类型, 执行不同的操作
2. 当 图片进入被拖动元素的时候,清空 里面的文字内容
    2.1 注意: 图片拖动会解析成url地址,应该阻止默认事件,并注意在哪个地方阻止默认事件.
3. 获取 文件的 dataTransfer 域
4. 实例化 FileReader 对象
5. 将获取到的 dataTransfer 数据 读取成 url 格式, 然后创建img元素
6. 把解析成的 base64格式的url 赋值给 Img, 就可以在 dropbox 里面展示被拖动图片的略缩图了
*/
var dropbox = document.getElementById("dropbox");
var oBtn = document.querySelector(".btn");
dropbox.addEventListener("dragenter",drop,false);
dropbox.addEventListener("dragover",drop,false);
dropbox.addEventListener("drop",drop,false);
var size = 0;

function drop(event){
    var event = event || window.event;
    switch(event.type){
        case "dragenter" :
        break;
        case "dragover" :
        event.preventDefault();
        break;
        case "dragleave":
        console.log("图片在离开");
        break;
        case "drop":
        event.preventDefault();
        var imgfiles = event.dataTransfer.files;
        var len = imgfiles.length;
        size += len;
        console.log(size);
        // 设置一个判断,当选择的图片大于9张时显示提示框，最多只能选择9张
        if(size > 9){
            alert("最多选择9张图片");
        }else{
            for(let i = 0; i < imgfiles.length; i++){
                var fileReader = new FileReader();
                fileReader.readAsDataURL(imgfiles[i]);
                console.log(fileReader);
                fileReader.onload = function(){
                    var img = new Image();
                    img.style.width = "100px";
                    img.style.height = "100px";
                    img.src = this.result;
                    dropbox.appendChild(img);
                }
            }
        }
        break;
    }
};
oBtn.addEventListener("click",function(){
    dropbox.innerHTML = "";
});

// MDN官网上的例子
var fileElem = document.getElementById("fileElem");
var fileList = document.getElementById("fileList");
var oText = document.querySelector(".text");
console.log(oText);

window.URL = window.URL || window.webkitURL

function handleFiles(files){
    if(!files.length){
        oText.innerHTML = "<p>no files selected</p>";
    }else{
        var list = document.createElement("ul");
        oText.innerHTML = "";
        fileList.appendChild(list);
        for(let i = 0; i < files.length; i++){
            var li = document.createElement("li");
            list.appendChild(li);
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[i]);
            img.height = 100;
            img.width = 100;
            img.onload = function(){
                window.URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            var info = document.createElement("span");
            info.innerHTML = "name:" + files[i].name + ", size:" + files[i].size + "bytes";
            li.appendChild(info);
        }
    }
}
/*
业务逻辑: 要在两个矩形框内拖动p元素
1. 先要获取p元素和矩形框,然后设置p元素可拖动 draggable=true
2. 在拖动的时候设置当前p元素的拖动状态,并设置成p元素的内容
3. 拖动的事件
    dragstart
    drag
    dragend
    drop 放置

    dragenter
    dragover
    dragleave
*/
var dragtarget = document.getElementById("dragtarget");
var demo = document.getElementById("demo");

dragtarget.addEventListener("dragstart",drag,false);
dragtarget.addEventListener("drag",drag,false);
dragtarget.addEventListener("dragend",drag,false);

function drag(event){
    var event = event || window.event;
    var target = event.type;
    switch(target){
        case "dragstart" :
        demo.innerHTML = "开始拖动p元素";
        event.dataTransfer.setData("Text",event.target.id);
        event.target.style.opacity = "0.4";
        break;
        case "drag" :
        demo.innerHTML = "正在拖动p元素";
        demo.style.color = "#f00";
        break;
        case "dragend" :
        demo.innerHTML = "结束p元素的拖动";
        event.target.style.opacity = 1;
        break;
    }
}

document.addEventListener("dragenter",function(event){
    if(event.target.className == "droptarget"){
        event.target.style.border = "3px dotted #f00";
    }
},false);

document.addEventListener("dragover",function(event){
    event.preventDefault();
    event.returnValue = false;
},false);

document.addEventListener("dragleave",function(event){
    if(event.target.className == "droptarget"){
        event.target.style.border = "";
    }
},false);

document.addEventListener("drop",function(){
    event.preventDefault();
    if(event.target.className == "droptarget"){
        var data = event.dataTransfer.getData("Text");
        event.target.style.border = "";
        event.target.appendChild(document.getElementById(data));
    }
},false);