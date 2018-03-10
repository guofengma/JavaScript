console.log(window.innerWidth,window.innerHeight);
console.log(document.documentElement.clientWidth,document.documentElement.clientHeight);
console.log(document.body.clientHeight,document.body.clientWidth);

var Button = document.querySelector(".button");

Button.onclick = function(){
    window.open("http://www.runoob.com/jsref/met-win-open.html",'_blank','left=200px,width=100px,menubar=yes,location=no,resizable=false',false);
}

console.log(window.document);
console.log(window.name);

var Open = document.querySelector(".open");
var Close = document.querySelector(".close");

Open.onclick = function(){
    window.open();
}
Close.onclick = function(){
    window.close("about:blank");
}

var Move = document.querySelector(".move");
Move.onclick = function(){
    window.moveTo(100,100);
}

var Resize = document.querySelector(".resize");

Resize.onclick = function(){
    resizeTo(100,100);
}

console.log(window.screenX,window.screenY);

console.log(window.outerWidth,window.outerHeight);

// window.confirm("这时一段消息以及确认按钮和取消按钮的对话框")
// window.alert("Hello");
window.focus();

// window.print()

// var a = window.prompt("请输入您的姓名");
// console.log(a);
// console.log(typeof a);

window.scrollTo(3,5);


// Navigator对象属性

console.log( navigator.appCodeName );
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.cookieEnabled);
console.log(navigator.platform);
console.log(navigator.userAgent);


// screen对象属性
console.log( screen.availHeight );  // 680
console.log( screen.availWidth );   // 1280
console.log( screen.colorDepth );   // 24
console.log( screen.pixelDepth );   // 24
console.log( screen.height );       // 720
console.log( screen.width );        // 1280