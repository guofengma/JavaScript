// 点击右侧按钮 显示搜索框
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