
// module.exports = function(x){
//     console.log(x);
// }



var out = new Object();

function p(string){
    console.log(string);
}
out.print = p;
module.exports = out;