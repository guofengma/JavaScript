// 获取input输入框
var oText = document.getElementById("text");
// 获取ul元素
var oUl = document.querySelector(".url-list");
// 获取ul父元素
var oDiv = document.querySelector(".list");

// 获取用户输入到的内容
oText.addEventListener("keyup",function(){
    var str = oText.value;
    console.log(str);
    var oScript = document.createElement("script");
    oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=message";
    document.body.appendChild(oScript);
},false);

// 定义一个回掉函数 获取 内容
function message(msg){
    var data = msg.s;
    oUl.innerHTML = "";
    if(data.length){
        oDiv.style.display = "block";
        data.forEach(function(con){
            var oLi = document.createElement("li");
            oLi.innerText = con;
            oUl.appendChild(oLi);
            oLi.onclick = function(){
                window.location.href = "http://www.baidu.com/s?wd=" + con;
            }
        })
    }
}








