function Fruits(){};

Fruits.prototype = {
    color:"red",
    say:function(){
        console.log("My Color is " + this.color);
    }
}
var apple = new Fruits();
apple.say();

banana = {
    color:"yellow"
}
apple.say.apply(banana);