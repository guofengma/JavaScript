var List1 = document.querySelector(".list1");
var Li = List1.getElementsByTagName("li");
var Content = document.querySelector(".content");
var Img = Content.getElementsByTagName("img");


for(let i = 0; i < Li.length; i++){

    // 这一步很关键,保存一个变量.当前点击的 那个 div 序号保存下来
    Li[i].index = i;

    Li[i].onclick = function(){
        // 点击切换样式之前,先把所有div的样式都清除
        for(let j = 0; j < Li.length; j++){
            Li[j].className = "";
        }
        // 然后仅添加 点击的 选项卡 的样式
        this.className = "active";

        // 显示 对应选项卡的 内容, 先隐藏所有的内容
        for(let k = 0; k < Img.length; k++){
            Img[k].className = '';
        }
        // 再显示 点击的选项卡 所对应的 内容
        Img[this.index].className = "visible";
    }
}