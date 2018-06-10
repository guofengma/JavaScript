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

    for(let i = 0; i < oTitle.length; i++){

        oTitle[i].index = i;

        oTitle[i].onclick = function(){

            oHide[lastIndex].style.height = '0';
            oI[lastIndex].classList.remove("rotate");
            oTitle[lastIndex].classList.remove("active");
            // 当前项目展开样式
            oHide[this.index].style.height = '225px';
            oI[this.index].classList.add("rotate");
            oTitle[this.index].classList.add("active");
            // 当前点击过的序号赋值给上依次
            lastIndex = this.index;
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