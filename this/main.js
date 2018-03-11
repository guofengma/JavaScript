
console.log(this === window);   // true

this.b = 'MDN',
console.log(b);         // MDN
console.log(window.b)   // MDN


var obj = {name:'Kyrie'};

var name = "Global";
function whatThis(arg){
    return this.name;  // this的值取决于函数的调用方式
}
console.log( whatThis() );          // Global
console.log( whatThis.call(obj) )   // Kyrie
console.log( whatThis.apply(obj) ); // Kyrie

function add(c,d){
    return this.a + this.b + c + d;
}
var o = {a:1,b:3};
console.log( add.call(o,5,7) ); // 16

console.log( add.apply(o,[10,20]) ); //34

var obj = {
    prop:37,
    f:function(){
        return this.prop
    }
}
console.log( obj.f() )