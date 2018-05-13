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


const {URL} = require('url');
const myURL = new URL("https://example.org:8888");
console.log(myURL.port);    // 8888