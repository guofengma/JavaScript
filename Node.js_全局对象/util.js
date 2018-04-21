
var util = require('util');

function Base(){
    this.name = 'Kyrie';
    this.age = 1991;
    this.sayHello = function(){
        console.log('Hello' + this.name);
    }
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);
var objBase = new Base();

objBase.showName();     // Kyrie
objBase.sayHello();     // Hello Kyrie
console.log(objBase);   // Base {name:'Kyrie',age:1991,sayHello:[Function]}

var objSub = new Sub();
objSub.showName();      // sub
console.log(objSub);    // Sub {name:'sub'}



function Person(){
    this.name = 'byvoid';
    this.toString = function(){
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));

console.log(util.inspect(obj,true));



console.log( util.isArray([]) );        // true
console.log( util.isArray(new Array) ); // true
console.log( util.isArray({}) );        // false

console.log( util.isRegExp(/some regexp/) );    // true
console.log( util.isRegExp({}) );       // false
console.log( util.isRegExp(/\d/) );     // true