// 获取点击按钮
var aBtn = document.querySelectorAll("span");
var aLi = document.querySelectorAll(".container li");
var count = 0;

aBtn[0].onclick = function(){
    
}

aBtn[1].onclick = function(){
    count++;
    aLi[count].className = 'right';
}





// 生成16进制随机颜色的函数
function getRandomColor(){
    let hex = [];
    for(let i = 0; i < 3; i++){
        let color = Math.floor(Math.random()*256).toString(16);
        color = color.length == 1 ? '0' + color : color;
        hex.push(color);
    }
    return '#' + hex.join("");
}
var color1 = getRandomColor();
console.log(color1);


// 随机生成rgb颜色的函数
function getColor(){
    let rgb = [];
    for(let i = 0; i < 3; i++){
        var color = Math.floor(Math.random()*256);
        rgb.push(color);
    }
    return 'rgb('+rgb[0]+',' + rgb[1] + ',' + rgb[2] + ')';
}
var color2 = getColor();
console.log(color2);


// 随机生成一个16进制数
function getRandomNumber(){
    var a = Math.floor(Math.random()*16).toString(16);
    return a;
}
let number = getRandomNumber();
console.log(number);

// 随机生成一个16进制数
function getColor2(){
    let rgb = [];
    for(let i = 0; i < 6; i++){
        let a = Math.floor(Math.random()*16).toString(16);
        rgb.push(a);
    }
    return "#" + rgb.join('');
}
var c = getColor2();
console.log(c);