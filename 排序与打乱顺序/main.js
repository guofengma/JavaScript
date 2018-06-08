var Btn1 = document.querySelector(".btn1");
var Btn2 = document.querySelector(".btn2");
var aLi = document.getElementsByTagName("li");
var Ul = document.getElementsByTagName("ul")[0];
var original = Ul.innerHTML;

// 定义两个数组,分别存储图片序号,一个为从小到大,另一个从大到小.
var arr = [];
var arr1 = [];
// 定义一个信号量
var flag = true;

for(let i = 0; i < aLi.length; i++){
    arr.push(i);
    arr1.push(i);
}
arr.sort((a,b) => b-a);

// 从大到小和从小到大排序
Btn1.onclick = function(){
    if(flag){
        for(let i = 0; i < aLi.length; i++){
            // 这里是关键, 数组的嵌套使用
            Ul.appendChild(aLi[arr[i]]);
        }
    }else{
        Ul.innerHTML = original;
    }
    flag?(Btn1.innerHTML='从小到大'):(Btn1.innerHTML='从大到小');
    flag = !flag;
}

// 随机排序 产生0-7的随机数,且随机数不能重复(随机数不重复暂时没有实现)
// 这会导致有一张或几张图片的位置固定在某个地方.

var arr2 = [];
for(let i = 0; i < aLi.length; i++){
    arr2.push( parseInt(Math.random()*aLi.length) );
}

Btn2.onclick = function(){
    for(let i = 0; i < aLi.length; i++){
        Ul.appendChild(aLi[arr2[i]]);
    }
    // 随机排列后把信号量设为false?
    // 不设置为false时会出现bug.即随机排序后,点击按大小排序会有不正常显示的情况.
    flag = false;
}


