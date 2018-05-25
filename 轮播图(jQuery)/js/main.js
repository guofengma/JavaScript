$(document).ready(function(){

    // 定义信号量
    var index = 0;
    var x = $(".banner li img").innerWidth();
    // 设置运动的时间间隔
    var t = setInterval(move,2500);
    // 定义一个自右向左的运动
    function move(){
        index++;
        $(".banner").animate({left:index*-x},300,function(){
            if(index >= 5){
                index = 0;
                $(".banner").css({left:0});
            }
            $(".circles li").removeClass("current");
            $(".circles li").eq(index).addClass("current");
        })
    }

    // 点击按钮 显示对应的 图片
    $(".circles li").click(function(){
        clearInterval(t);
        index = $(this).index();
        $(".banner").animate({left:index*-x},300);
        $(".circles li").removeClass("current");
        $(".circles li").eq(index).addClass("current");
        t = setInterval(move,2500);
    })

    // 点击右按钮 切换 图片
    $(".right-btn").click(function(){
        clearInterval(t);
        index++;
        $(".banner").animate({left:index*-x},300,function(){
            if(index >=5 ){
                index = 0;
                $(".banner").css({left:0});
            }
            $(".circles li").removeClass("current");
            $(".circles li").eq(index).addClass("current");
        })
        t = setInterval(move,2500);
    })

    // 点击左按钮切换图片
    $(".left-btn").click(function(){
        clearInterval(t);
        index--;

        $(".circles li").removeClass("current");
        $(".circles li").eq(index).addClass("current");
        
        $(".banner").animate({left:index*-x},300,function(){
            if(index <= 0 ){
                index = 5;
                $(".banner").css({left:-x*index});
            }
        })
        t = setInterval(move,2500);
    })
})


// 未完善功能,当刚开始打开页面时,点击左按钮切换轮播图 效果有闪动