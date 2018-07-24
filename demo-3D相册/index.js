/*
业务逻辑:
1.  先把所有图片绝对定位，使所有图片都重叠在一起. 然后把图片的父级定位至页面中间
2.  设置图片的旋转方式,并设置景深
3.  把每张图片旋转开来, 然后设置其离Z轴一定的距离,使所有图片正好散开围成一个圆形。
    3.1 第一张图片 正对着我们, 第二张图片旋转 360/11 度数,依次类推.
4.  开场动画, 打开页面或刷新页面 图片 以动画形式 一张一张慢慢展示出来.
    4.1 最后一张图片先展示, 然后是倒数第二张图片,依次类推, 每张图片展示有一定的时间间隔
    4.2 使用 transition 属性, 最后的状态已经确定,在初始状态添加 transition 即可
    注意: 可能看不到效果,因为动画一瞬间就完成了, 把最后的状态 写在window.onload 里面
    4.3 tips: 这样设置动画,图片是同时运动, 想要图片按一定顺序和时间差来展开,需要用到 transition-delay属性
5.  拖动鼠标,使图片的父级 .wrap 跟着鼠标的值旋转即可.
    把拖动鼠标事件分解  onmousedown onmouseup onmouseup

声明几个信号量 
1. 鼠标移动和鼠标按下时的差值 
2. 每次图片旋转的角度 和 差值之间的关系
注意: 当第一次拖动鼠标的时候,图片随着鼠标移动而旋转,而后抬起鼠标, 再次按下并移动鼠标, 图片是在上一次的基础上旋转,故需要
保存上次旋转结束时的旋转度数.(或者间接地保存上次的差值)
*/
window.onload = function(){
    var oImg = document.getElementsByTagName("img");
    var len = oImg.length;
    var oWrap = document.querySelector(".wrap");
    var deltaX = null;
    var deltaY = null;
    var degX = null;
    var degY = null;
    for(let i = 0; i < len; i++){
        oImg[i].style.transform = 'rotateY('+ 32*i+'deg) translateZ(250px)';
        oImg[i].style.transitionDelay = (len - i)* 0.08 + 's';
    }
    document.onmousedown = function(e){
        var e = e || window.e
        var x = e.clientX;
        var y = e.clientY;
        document.onmousemove = function(event){
            var event = event || window.event;
            var newX = event.clientX;
            var newY = event.clientY;
            deltaX = newX - x;
            deltaY = newY - y;
            degX += deltaX * 0.3;
            degY -= deltaY * 0.3;
            oWrap.style.transform = "rotateY(" + degX + "deg) rotateX("  + (degY-15) + "deg)";
            x = newX;
            y = newY;
        };
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }
};
// 禁止页面元素被拖动,因为图片被拖动时会被解析成Url
document.ondragstart = function(){
    return false;
}


