// 通过URL 获取到商品的 id
var str = location.search.substr(1);    // 获取地址?后面的部分
var goodsId = str.split("=")    // 把地址 从 '=' 号切割开

// 获取某件商品分类
$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "data":{
        "goods_id":goodsId[1]
    },
    "dataType":"json",
    "success":function(str){
        console.log(str);
        $(".position").append(`
            <a href="#" class="name">${str.data[0].goods_name}</a>
        `);
        $(".picBox").append(`
            <img src="${str.data[0].goods_thumb}" title="" alt=""/>
        `);
        $(".goodsInfo").prepend(`
            <p class="gdName">${str.data[0].goods_name}</p>
            <p class="gdDesc">${str.data[0].goods_desc}</p>
            <p class="priceInfo">
                <span class="gdPrice">价格:<span>
                <span class="price">￥${str.data[0].price}</span>
            </p>
        `)
    }
})


// 点击加减按钮添加商品数量
var Input = document.querySelector(".infoItem input");
var Add = document.querySelector(".add");
var Del = document.querySelector(".del");

var count = Input.value
Del.onclick = function(){
    if(count == 1){
        return;
    }
    count -= 1;
    Input.value = count;
}
Add.onclick = function(){
    count++;
    Input.value = count;
}

// 获取广告
$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_ad.php",
    
})