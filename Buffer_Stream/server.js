var fs = require('fs');

// 读取一个可读流
var readerStream = fs.createReadStream('readme.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('server.txt');

// 管道读写操作
// 读取 readme.txt文件内容,并将内容写入到 server.txt文件中
readerStream.pipe(writerStream);
console.log('程序执行完毕');