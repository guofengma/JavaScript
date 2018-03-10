
console.log( typeof null );         // object
console.log( typeof undefined );    // undefined
console.log( typeof 1 );            // number
console.log( typeof "1" );          // string
console.log( typeof true );         // boolean

console.log( typeof "true'" )       // string

console.log( undefined === undefined ); // true
console.log( null === null);            // true

console.log( Boolean('Hello World') );  // true
console.log( Boolean(1));               // true
console.log( Boolean(0));               // false   
console.log( Boolean(undefined))        // false
console.log( Boolean(NaN))              // false
console.log( Boolean(null))             // false
console.log( Boolean("") );             // false
console.log( Boolean(" ") );            // true
console.log( Boolean({}) );             // true

console.log( Boolean(Infinity) );       // true

console.log( isFinite(5e400) );         // false
console.log( isFinite(5e100) );         // true

console.log( Number.MIN_VALUE );        // 5e-324
console.log( Number.MAX_VALUE );        // 1.7976931348623157e+308


console.log( NaN*5 );           // NaN
console.log( NaN === NaN );     //false