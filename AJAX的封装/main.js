var obj = {
    url:"http://h6.duchengjiu.top/shop/api_goods.php",
    method:'GET',
    data:{
        "pagesize":"5"
    },
    success:function(str){
        var abc = JSON.parse(str);
        console.log(abc);
    }
}
ajax(obj);


var xhr = new XMLHttpRequest();
xhr.open("GET","http://h6.duchengjiu.top/shop/api_goods.php?pagesize=8",true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
}