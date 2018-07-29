/*
功能模块: 1. 使页面的图片居中
         2.  从第二排开始,图片的排列顺序先从上一排高度最小的那张开始,依次类推
         3.  当页面下拉到一定的程度时,再加载一波图片。
业务逻辑
1. 先获取页面的父级元素 container.
   1.1 父级元素的宽度根据图片的列数来确定,首先确定每排能显示几列图片 (页面宽度/图片宽度)
   1.2 父级宽度等于 图片列数乘以图片的宽度
*/ 
var data = {
    'img':[
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
        {"src": '18.jpg'}
    ]
}
var oContainer = document.querySelector(".container");

window.onload = function(){
    waterfall();
    window.onscroll = function(){
        if(checkScroll()){
            render();
            waterfall();
        }
    }
}

function waterfall(){
    var oBox = getByClass(oContainer,'box');
    var num = Math.floor(window.innerWidth / oBox[0].offsetWidth);
    var oWidth = num * oBox[0].offsetWidth;
    oContainer.style.cssText = "margin:0 auto; width:"+ oWidth + 'px';
    /*
    主要业务逻辑：
    1. 循环页面所有的图片, 如果图片个数小于第一排的图片列数,则把所有的图片高度都放在一个数组里面
    2. 求出第一排数组里高度最小的那张图片。
    3. 从第二排开始, 在上一排高度最小的那张开始排列图片.然后更新高度,再依次排列第二排第二张 第三张图片。
    */ 
    var hArray = [];
   for(let i = 0; i < oBox.length; i++){
       // 如果图片序号小于 每列的图片个数
       if(i < num){
           hArray.push(oBox[i].offsetHeight);
        }else{
            var minH = Math.min.apply(null,hArray);
            var index = getIndex(hArray,minH);
            oBox[i].style.position = 'absolute';
            oBox[i].style.top = minH + 'px';
            oBox[i].style.left = oBox[index].offsetLeft + 'px';
            hArray[index] += oBox[i].offsetHeight;
        }
    }
}
/*
获取出现最小值时的 图片下标序号 index
下面有两种方法, 第一种方法是利用循环判断, 第二种方法是利用 indexOf, 第一次出现时的下标
*/
function getIndex(array,val){
    for(let i in array){
        if( array[i] == val ){
            return i;
        }
    }
};

// function getIndex(array,val){
//     return array.indexOf(val);
// };

// 确定页面滚动到什么时候再加载图片
function checkScroll(){
    var oBox = getByClass(oContainer,'box');
    // 最后一张图片的top值加上自身高度的一半
    var lastBox = oBox[oBox.length - 1].offsetTop + oBox[oBox.length - 1].offsetHeight / 2;
    // 下拉滚动条的高度
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 页面可视区域的高度
    var height = document.body.clientHeight || document.documentElement.clientHeight;

    // lastBox < (scrollTop + height)
            // 1632   794  315
    return lastBox < ( scrollTop + height ) ? true : false;
}

function render(){
    for(let i = 0; i < data.img.length; i++){
        var Box = document.createElement("div");
        Box.className = 'box';
        oContainer.appendChild(Box);
        var BoxImg = document.createElement('div');
        BoxImg.className = 'box-img';
        Box.appendChild(BoxImg);
        var oImg = document.createElement('img');
        oImg.src = 'images/' + data.img[i].src;
        BoxImg.appendChild(oImg);
    };
}

// parent表示父级对象,clsName表示自己的类名, 所有的oBox在每次刷新后也要更新
function getByClass(parent,clsName){
    var boxArr = [];
    oElements = parent.getElementsByTagName('*');
    for(let i = 0; i < oElements.length; i++){
        if(oElements[i].className == clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}

