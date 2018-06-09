(function(){
    var oHide = document.querySelectorAll(".hide");
    var oTitle = document.querySelectorAll(".title");
    var oI = document.getElementsByTagName("i");
    // 点击后展示对应的下拉内容
    for(let i = 0; i < oHide.length; i++){
        oTitle[i].index = i;
        oTitle[i].onclick = function(){
            oHide[this.index].style.height = '225px';
            oI[this.index].classList.add("rotate");
            oTitle[this.index].classList.add("active");
        }
    }

})()