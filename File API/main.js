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
dropbox.addEventListener("dragenter",drop,false);
dropbox.addEventListener("dragover",drop,false);
dropbox.addEventListener("drop",drop,false);
dropbox.addEventListener("dragleave",drop,false);

function drop(event){
    var event = event || window.event;
    console.log(event);
    switch(event.type){
        case "dragenter" :
        dropbox.innerHTML = "";
        break;
        case "dragover" :
        event.preventDefault();
        break;
        case "dragleave":
        break;
        case "drop":
        event.preventDefault();

        var imgList = event.dataTransfer.files;
        var fileReader = new FileReader();

        fileReader.readAsDataURL(imgList[0]);

        
        break;
    }
}