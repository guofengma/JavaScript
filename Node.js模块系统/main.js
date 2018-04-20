
// var Hello = require('./hello');
// var hello = new Hello();

// hello.setName('Kyrie');
// hello.sayHello();



function say(word){
    console.log(word);
}

function execute(someFunction,value){
    someFunction(value);
}
execute(say,'Hello');



function sayHello(someFunction,value){
    someFunction(value);
}

sayHello((word) => console.log(word),'Hello');


var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello World");
    response.end();
}).listen(9999);


function onRequest(request,response){
    response.writeHead(200,{"Content-Type":'text/plain'});
    response.write("Kyrie Irving");
    response.end();
}
http.createServer(onRequest).listen(8888);