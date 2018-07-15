// setInterval
var i = 0;
var timer = setInterval(function(){
    i++;
    console.log(i);
},1000/60);

// requestAnimationFrame
var j = 0;
function draw(){
    j++;
    console.log(j);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);