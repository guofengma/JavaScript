
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

console.log( 'skill' in player );

