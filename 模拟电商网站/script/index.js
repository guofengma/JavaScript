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
        $("#actionContainer .carousel").animate({left:idx*-x},400,function(){
            if(idx >= 5 ){
                idx = 1;
                $("#actionContainer .carousel").css("left",-x);
            }
            $("#actionBtn a").removeClass("active");
            $("#actionBtn a").eq(idx-1).addClass("active");
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
            $("#actionBtn a").removeClass("active");
            $("#actionBtn a").eq(idx-1).addClass("active");
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
            $("#actionBtn a").removeClass("active");
            $("#actionBtn a").eq(idx-1).addClass("active");
        })
        t = setInterval(imgMove,3000);
    })

    //  点击小按钮显示对应的图片
    $("#actionBtn a").click(function(){
        clearInterval(t);
        // 把对应小按钮的序号赋值给 idx
        idx = $(this).index();
        $("#actionContainer .carousel").animate({"left":-x*(idx+1)},400);
        $("#actionBtn a").removeClass("active");
        $("#actionBtn a").eq(idx).addClass("active");
    })
})
    

// 获取页面商品 18 件
// API 前缀 http://h6.duchengjiu.top/shop/

$.ajax({
    url:"http://h6.duchengjiu.top/shop/api_goods.php",
    type:"GET",
    data:{
        page:1,
        pagesize:18,
    },
    "dataType":"json",
    success:function(str){
        for(let i = 0; i < str.data.length; i++){
            console.log(str.data[i]);
            $(".shopList").append(
                `
                <div class="item">
                    <a href="#"><img src=""></a>
                    <div class="shadow-box">
                        <p class="price"><p>
                        <p class="title"></p>
                        <p class="content"></p>
                    </div>
                </div>
                `
            )
        }
    }
})