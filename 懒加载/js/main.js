// 设置page为1
var page = 1;
// 先执行一次获取数据的函数
showShop(page);

function showShop(page){
    $.ajax({
        "url":"http://h6.duchengjiu.top/shop/api_goods.php?page="+page+"&pagesize=10",
        "type":"GET",
        "dataType":"json",
        "success":function(str){
            for(let i = 0; i < str.data.length; i++){
                $(".shop").append("<li><img src='"+str.data[i].goods_thumb+"'/></li>")
            }
        }
    })
}

$(window).scroll(function(){

    var A = $(window).scrollTop();  // 滚动条的高度
    var B = $(window).height();     // window的高度
    var C = $(document).height();   // document高度

    var rate = A/(C-B);

    if(rate >= 0.8){
        // 当达到比例时,page增加1,获取数据
        page++;
        showShop(page);
    }
})


//  问题：
// 按照上课老师写的,设置了一个全局变量 lock, 没有用lock 也能实现相同的效果.