var smallBox = document.querySelector(".small-box");
var container = document.querySelector(".container");
var content = document.querySelector(".content");
var bigImg = document.querySelector(".big-img");
var smallImg = document.querySelector(".small-img");

container.onmouseover = function(event){

    smallBox.style.display = 'block';
    bigImg.style.display = 'block';

    document.onmousemove = function(event){
        var rate = 3;
        var event = event || window.event;
        event.preventDefault();
        event.returnValue = false;

        var x = event.clientX - container.offsetLeft - smallBox.offsetWidth/2;
        var y = event.clientY - container.offsetTop - smallBox.offsetHeight/2;

        if(x <=0 ){
            x = 0
        }else if(x >= container.offsetWidth - smallBox.offsetWidth){
            x = container.offsetWidth - smallBox.offsetWidth;
        }
        if(y <= 0){
            y = 0;
        }else if(y >= container.offsetHeight - smallBox.offsetHeight){
            y = container.offsetHeight - smallBox.offsetHeight;
        }

        smallBox.style.left = x + 'px';
        smallBox.style.top = y + 'px';

        bigImg.style.left = -rate * x + 'px';
        bigImg.style.top = -rate  * y + 'px';        
    }
}
container.onmouseout = function(){
    smallBox.style.display = 'none';
    bigImg.style.display = 'none';
}