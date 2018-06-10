// 封装ajax请求的函数
// 参数: obj 是一个对象,包含如下属性:
        // method   请求方式:GET/POST
        // url      请求数据的地址
        // data     请求的数据
        // async    true 异步, false 同步
        // success  成功的回调函数
        // failture 失败的回调函数

function ajax(obj){
    // 创建对象
    var xhr = new XMLHttpRequest();
    // GET方法并且有数据
    if(obj.method.toUpperCase() == 'GET' && obj.data){
        obj.url += '?';
        obj.url += params(obj.data);
    }
    if(!obj.async){
        obj.async = true;
    }
    // 准备
    xhr.open(obj.method,obj.url,obj.async);
    // 发送数据
    if(obj.method.UpperCase = 'POST'){
        // 发送POST数据
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(params(obj.data));
    }else{
        xhr.send();
    }

    // 接收数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                obj.success && obj.success(xhr.responseText);
            }else{
                obj.failture && obj.failure(xhr.status);
            }
        }
    }
}

// 对象参数转换
// {name:'kyrie',age:'26'}

function params(obj){
    var arr = [];
    for(var key in obj){
        var str = '';

        str += key;
        str += '=';
        str += encodeURIComponent( obj[key] );
        arr.push(str);
    }
    return arr.join("&");
}