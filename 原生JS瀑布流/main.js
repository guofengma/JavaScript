var data = {
    "img": [
      {"src": '0.jpg'},
      {"src": '1.jpg'},
      {"src": '2.jpg'},
      {"src": '3.jpg'},
      {"src": '4.jpg'},
      {"src": '5.jpg'},
      {"src": '6.jpg'},
      {"src": '7.jpg'},
      {"src": '8.jpg'},
      {"src": '9.jpg'},
      {"src": '10.jpg'},
      {"src": '11.jpg'},
      {"src": '12.jpg'},
      {"src": '13.jpg'},
      {"src": '14.jpg'},
      {"src": '15.jpg'},
      {"src": '16.jpg'},
      {"src": '17.jpg'},
      {"src": '18.jpg'},
    ]
  };
  
  window.onload = function () {
    render();
  
    waterfall('main', 'box');
  
    window.onscroll = function () {
      if (checkScrollSlide()) {
        // 将数据块渲染到页面尾部
        render();
        waterfall('main', 'box');
      }
    }
  }
  
  window.onresize = function () {
    waterfall('main', 'box');
  }

function waterfall(parent,box){
    var oParent = document.getElementById(parent);
    // 获取所有的图片的父元素
    var oBoxes = getByClass(oParent,box);
    // 计算整个页面显示的列数
    // oBoxW 为 图片的宽度
    var oBoxW = oBoxes[0].offsetWidth;
    // cols为列数  页面的宽度 / 图片的宽度 
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);

    var hArr = [];
    for(var i = 0; i < oBoxes.length; i++){
        // 如果图片的个数小于 列数,也就是第一排显示的时候
        if(i < cols){
            // 把每个图片的高度数据添加进数组 
            hArr.push(oBoxes[i].offsetHeight);
        }else{
            // 获取最小的图片高度
            var minH = Math.min.apply(this,hArr);
            // 获取最小的图片高度序号
            var index = getMinHIndex(hArr,minH);
            // 给每个图片的父级设置绝对定位
            oBoxes[i].style.position = 'absolute';
            // top值为 最小高度,依次从小的图片那张开始排列,
            oBoxes[i].style.top = minH + 'px';
            // left值为 最小高度图片的left值. 因为是同一竖排,高度是参差不齐的.
            oBoxes[i].style.left = oBoxes[index].offsetLeft + 'px';
            hArr[index] += oBoxes[i].offsetHeight;
        }
    }
}

// 获取所有的图片,并在一个数组里面返回
function getByClass(parent,clsName){
    var boxArr = [];
    oElements = parent.getElementsByTagName("*");
    for(var i = 0; i < oElements.length; i++){
        if(oElements[i].className == clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}
// 获取最小高度图片的序号
function getMinHIndex(arr,val){
    for(var i in arr){
        if(arr[i] == val){
            return i;
        }
    }
}

// 滚动页面什么时候加载页面
function checkScrollSlide(){
    var oParent = document.getElementById("main");
    var oBoxes = getByClass(oParent,'box');
    var lastBoxH = oBoxes[oBoxes.length - 1].offsetTop + Math.floor(oBoxes[oBoxes.length - 1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height) ? true : false
}

// 当加载到一定的高度,需要渲染的DOM
function render() {
    var oMain = document.getElementById('main');
    for (var i = 0; i < data.img.length; i++) {
      var oBox = document.createElement('div');
      oBox.className = 'box';
      oMain.appendChild(oBox);
      var oPic = document.createElement('div');
      oPic.className = 'pic';
      oBox.appendChild(oPic);
      var oImg = document.createElement('img');
      oImg.src = 'images/' + data.img[i].src;
      oPic.appendChild(oImg);
    }
}