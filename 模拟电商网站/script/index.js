// 点击右侧按钮 显示搜索框
$(document).ready(function(){
    var count = 0;
    $(".search .icon-sousuo").click(function(){
        count++;
        if(count%2 != 0){
            $(".search-box").animate({
                "left":0,
            },300);
        }
        if(count%2 == 0){
            $(".search-box").animate({
                "left":260,
            },300);
        }
    })
})
    
$(document).ready(function(){
    // 轮播图复制两个节点
    $("#actionContainer ul").append( $("#actionContainer ul .item1").clone());
    $("#actionContainer ul").prepend( $("#actionContainer ul .item4").clone());
    
    var idx = 1;
    // 每个图片的宽度
    var x = $("#actionContainer .carousel li").innerWidth();    
    var lock = true;

    function imgMove(){
        idx++;
        $("#actionContainer .carousel").animate({left:idx*-x},300,function(){
            if(idx >= 5 ){
                idx = 1;
                $("#actionContainer .carousel").css("left",-x);
            }
        });
    }  
    var t = setInterval(imgMove,3000);

    // 鼠标经过轮播图显示图标,离开隐藏
    $("#actionContainer").mouseover(function(){
        $("#actionContainer .iconfont").show();
    });
    $("#actionContainer").mouseout(function(){
        $("#actionContainer .iconfont").hide();
    });

    $("#actionContainer .iconfont").hover(
        function(){
            $(this).css({color:"#000"})
        },
        function(){
            $(this).css({color:"#fff",opacity:0.5})
        }
    )

    // 点击右按钮切换图片
    $(".right-Btn").click(function(){
        clearInterval(t);
        idx++;
        $("#actionContainer .carousel").animate({"left":-x*idx},400,function(){
            if(idx>=5){
                idx = 1;
                $("#actionContainer .carousel").css({"left":-x});
            }
        })
        t = setInterval(imgMove,3000);
    })

    // 点击左按钮切换图片
    $(".left-Btn").click(function(){
        clearInterval(t);
        idx--;
        $("#actionContainer .carousel").animate({"left":-x*idx},400,function(){
            if(idx <= 0){
                idx = 4
                $("#actionContainer .carousel").css({"left":-idx*x});
            }
        })
        t = setInterval(imgMove,3000);
    })
})
    