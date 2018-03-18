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
            console.log(str);
            for(let i = 0; i < str.data.length; i++){
                $(".shop").append("<li><img src='"+str.data[i].goods_thumb+"'/></li>")
            }
            lock = true;
        }
    })
}

// 函数节流,设置lock为true
var lock = true;

// 滚动函数
$(window).scroll(function(){
    // 如果为false,直接退出函数
    if(!lock){
        return false;
    }

    var A = $(window).scrollTop();  // window高度
    var B = $(window).height();     // 滚动条的高度
    var C = $(document).height();   // document高度

    var rate = A/(C-B);

    if(rate >= 0.8){
        // 当达到比例时,page增加1,获取数据
        page++;
        showShop(page);
        // 获取到数据后,把lock 修改为 false
        lock = false;
    }
})