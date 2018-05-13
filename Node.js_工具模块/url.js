// const url = require("url");
// const myUrl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
// console.log(myUrl);

// const {URL} = require("url");
// const myUrl = new URL("https://example.org/foo#bar");

// console.log(myUrl.hash);    // #bar

// myUrl.hash = "abc";
// console.log(myUrl.href);


// const {URL} = require("url");
// const myUrl = new URL("http://example.org:81/foo");
// console.log(myUrl.host);

// myUrl.host = "example.com:82";
// console.log(myUrl.href);    // http://example.com:82/foo

// const {URL} = require("url");
// const myURL = new URL("https://example.org:81/foo");
// myURL.hostname = 'example.com:82';
// console.log(myURL.href);        // https://example.com:81/foo
// console.log(myURL.hostname);    // example.org


// const {URL} = require("url");
// const myUrl = new URL("https://example.org/foo");
// console.log(myUrl.href);    // https://example.org/foo

// myUrl.href = "https://example.com/bar";
// console.log(myUrl.href);    // https://example.com/bar


// const {URL} = require("url");
// const myURL = new URL("https://example.org/abc/xyz?123");
// console.log(myURL.pathname);    // abc/xyz?123

// myURL.pathname = "/abcde";
// console.log(myURL.href);        // https://example.org/abcde?123


// const {URL} = require('url');
// const myURL = new URL("https://example.org:8888");
// console.log(myURL.port);    // 8888

// myURL.port = '1111';
// console.log(myURL.href); // https://example.org:1111/


// myURL.port = 443;
// console.log(myURL.port);    // 空字符串
// console.log(myURL.href);    // https://example.org/


// myURL.port = "abcd";
// console.log(myURL.href);    // https://example.org/


// myURL.port = "123abc";
// console.log(myURL.href);        // https://example.org:123/

// myURL.port = "abcd123";
// console.log(myURL.href);        // https://example.org:123/

// const {URL} = require("url");
// const myURL = new URL("https:8080//www.baidu.com");
// console.log(myURL.protocol);    // https:

// myURL.protocol = 'http';
// console.log(myURL.href);        // http://0.0.31.144//www.baidu.com


// const {URL} = require("url");
// const myURL = new URL("https://www.baidu.com/abc?123");
// console.log(myURL.search);  // ?123

// myURL.search = 'abc=xyz';
// console.log(myURL.href);    // https://www.baidu.com/abc?abc=xyz

// const {URL} = require('url');
// const myURL = new URL("https://abc:xyz@example.com");
// console.log(myURL.username);
// console.log(myURL.host);
// console.log(myURL.hostname);

// var path = require("path");
// console.log( path.join(__dirname,"foo") );  // C:\Users\11295\Desktop\JavaScript\Node.js_工具模块\foo

// console.log( path.resolve("/foo/bar",'./baz') );    // C:\foo\bar\baz


// var path = require("path");
// var myFilePath = "/someDir/someFile.json";

// console.log( path.parse(myFilePath).base ); // someFile.json
// console.log( path.parse(myFilePath).name ); // someFile
// console.log( path.parse(myFilePath).ext );  // .json


var url = require("url");
console.log(url.parse("http://www.baidu.com"),false);

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/',
//     path: '/',
//     href: 'http://www.baidu.com/' }
  