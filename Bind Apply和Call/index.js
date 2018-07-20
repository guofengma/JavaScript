window.color = "red";
var o = {color:"yellow"};

function sayColor(){
    console.log(this.color);
}
sayColor();     // red

sayColor.call(this);    // red
sayColor.call(o);   // yellow


window.player = "kyrie";
var a = {player:"lebron"};

function sayPlayer(){
    console.log(this.player);
}

sayPlayer.call(this);       // kyrie
sayPlayer.call(a);          // lebron
var objectSayPlayer = sayPlayer.bind(a);
objectSayPlayer();          // lebron