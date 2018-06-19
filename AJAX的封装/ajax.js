/**
 * @param method {String} 请求方式
 * @param url    {String} 请求数据地址
 * @param data   {Object} 请求的数据
 * @param async  {Boolean} 是否异步
 * @method success  请求成功的回调函数
 * @method failture 请求失败时回调函数
*/

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