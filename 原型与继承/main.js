
function Person(){
    this.name = 'Kyrie';
    this.age = 26;
    this.team = 'Cavalier'
}
Person.prototype.skill = function(){
    console.log("变向拉杆打板");
}

var player = new Person();
console.log(player);

player.firstName = 'kyrie';
player.lastName ='irving'

console.log(player.name);   // Kyrie
console.log(player.team);   // Cavalier
player.skill();             // 变向拉杆打板   

console.log( player.constructor === Person );   // true

console.log(   player instanceof Person );      // true

console.log( Person.prototype.isPrototypeOf(player) );  // true

console.log( player.hasOwnProperty( 'team' ) ); // true
console.log( player.hasOwnProperty('firstName' )); // true
console.log( player.hasOwnProperty('skill') );  // false

console.log( 'skill' in player );   // true



// 继承
function Animal(){
    this.species = '动物';
}

function Cat(){
    this.color = 'black';
    this.name = 'huahua';
    // Animal.apply(this);
}

// 怎样使猫继承动物?
// var cat1 = new Cat();
// console.log(cat1.species);  // 动物

Cat.prototype = new Animal();   // Cat.prototype指向 Animal的实例
Cat.prototype.constructor = Cat;    // Cat的构造
var cat1 = new Cat();

console.log( Person.prototype.constructor );

console.log(Array.prototype.constructor === [].constructor);    // true
console.log(Array.prototype.constructor === {}.constructor);    // false

console.log( [].__proto__ === Array.prototype );    // true
console.log( {}.__proto__ === Object.prototype);    // true

console.log( Array.__proto__ );
console.log( Function.__proto__ );
console.log( Array.prototype );
console.log(Array.prototype.__proto__);
console.log(Array.prototype.__proto__.constructor);


console.log( player.__proto__ );    // {skill:f,constructor:f}
                                    // 指向构造函数的 prototype,
console.log( player.__proto__ === Person.prototype );   // true
console.log( typeof player.__proto__ ); // object   
console.log( typeof Person.prototype);  // object

console.log( player.__proto__.__proto__ );  //  指向Object的prototype
console.log( player.__proto__.__proto__ === Object.prototype);   // true
console.log( Object.prototype.__proto__ );  // null


console.log( {} instanceof Array );     // false
console.log( [] instanceof Array );     // true

console.dir([]);    // Array
console.dir({});    // Object

console.log( [].__proto__ === Array.prototype ); // true
console.log( {}.__proto__ === Array.prototype ); // false

console.log( [].constructor );  // Array
console.log( {}.constructor );  // Object

console.log( [].constructor === Array.prototype.constructor );  // true
console.log( {}.constructor === Array.prototype.constructor );  // false

console.log( Array.isArray([]) );   // true
console.log( Array.isArray({}) );   // false