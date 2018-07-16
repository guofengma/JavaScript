/*业务逻辑:
1. 先把图片显示在画布上, 然后隐藏图片
2. 通过getImageData 获取图片的像素数据
3. 对图片的每个像素数据进行处理
4. 再把处理后的数据再次写入画布
*/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var invert = document.querySelector(".invert");
var gray = document.querySelector(".gray");

var img = new Image();
img.src = './imgs/1.jpg';
img.onload = function(){
    ctx.drawImage(img,0,0);
    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    console.log(imageData);
    var data = imageData.data;

    invert.addEventListener('click',function(){
        for(let i = 0; i < data.length; i+=4){
            data[i] = 255 - data[i];     // red
            data[i+1] = 255 - data[i+1]; // green
            data[i+2] = 255 - data[i+2]; // blue
        }
        ctx.putImageData(img,0,0);
    },false);

    gray.addEventListener("click",function(){
        for(let i = 0; i < data.length; i++){
            var avg = (data[i] + data[i+1] + data[i+2])/3;
            data[i] = avg;
            data[i+1] = avg;
            data[i+2] = avg;
        }
        ctx.putImageData(img,0,0);
    })
}