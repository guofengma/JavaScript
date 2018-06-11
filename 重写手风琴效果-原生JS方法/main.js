(function(){
    // 获取所有点击后显示的块
    var oHide = document.querySelectorAll(".hide");
    // 获取所有点击的按钮
    var oTitle = document.querySelectorAll(".title");
    // 获取所有
    var oI = document.getElementsByTagName("i");

    // 每次点击当前的标题后 上一次点击的要清除样式
    var lastIndex = 0;
    // 设置一个flag,表示当前项已展开

    // flag = true 表示展开的,false表示未展开
    var flag = false;
    // 先保存length,for循环不用每次都计算length
    var length = oTitle.length;
    for(let i = 0; i < length; i++){

        oTitle[i].index = i;
        // 判断当前是否已点击,
        oTitle[i].isClick = false;

        oTitle[i].onclick = function(){
            // 如果当前已经点击过,则清除它的样式
            if(oTitle[this.index].isClick ){
                oHide[this.index].style.height = '0';
                oI[this.index].classList.remove("rotate");
                oTitle[this.index].classList.remove('active');
                // 当前点击后 设置开关为 false
                oTitle[this.index].isClick = false;
            // 如果当前没有点击过
            }else{
                oHide[lastIndex].style.height = '0';
                oI[lastIndex].classList.remove("rotate");
                oTitle[lastIndex].classList.remove("active");
                // 清除上一次样式的时候 开关也要关掉
                oTitle[lastIndex].isClick = false;
                // 当前项目展开样式
                oHide[this.index].style.height = '225px';
                oI[this.index].classList.add("rotate");
                oTitle[this.index].classList.add("active");
                // 当前点击过的序号赋值给上次
                lastIndex = this.index;
                // 并且点击当前
                oTitle[this.index].isClick = true;
            }
        }
    }
    // 鼠标经过h5背景颜色改变,鼠标点击时改变自身背景颜色
    var oH5 = document.getElementsByTagName("h5");
    console.log(oH5);  // HTMLCollection 
    for(let i = 0; i < oH5.length; i++){
        oH5[i].onclick = function(){
            for(let j = 0; j < oH5.length; j++){
                oH5[j].className = '';
            }
            this.className = 'on';
        }
    }
})()