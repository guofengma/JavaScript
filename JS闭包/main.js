
var n = 999;
function f1(){
    console.log(n);
}
f1();   // 999

// function f2(){
//     var m = 999;
// }
// console.log(m)

function f2(){
    m = 999;
}
f2()
console.log(m); // 999

function m1(){
    var a = 100;
    function m2(){
        console.log(a);
    }
    return m2;
}
var result = m1();
result();   // 100


function fun1(){
    var m = 100;
    function fun2(){
        m++;
        console.log(m);
    }
    return fun2;
}
var d = fun1();
d();    // 101
d();    // 102
d()     // 103


var name = "Kyrie Irving";

var object = {
    name:'Lebron James',
    getNameFunc:function(){
        return function(){
            return this.name;
        }
    }
}
console.log( object.getNameFunc()() );  // Kyrie Irving


var player = "Kyrie Irving";

var nba = {
    player:'Lebron James',
    getPlayerFunc:function(){
        return function(){
            return this.name;
        }
    }
}
console.log( nba.getPlayerFunc()() );   // Kyrie Irving


var count = 100;

function getCount(){
    count = 101;
    function g1(){
        console.log(count);
    }
    return g1;
}

var c = getCount();
c();


var Box = document.querySelector(".box");

Box.onclick = function(){
    Box.style.backgroundColor = '#00f';
}