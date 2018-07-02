
var os = require("os");

// CPU的字节序
console.log("endiamness:" + os.endianness() );

// 操作系统名
console.log("type:" + os.type() );

// 操作系统名
console.log("platform:" + os.platform() );

console.log("total.memory:" + os.totalmem() + "bytes");

console.log("free memory:" + os.freemem() + "bytes");

console.log("cpus:" + os.cpus() );

console.log("系统操作运行时长:" + os.uptime() );

console.log("操作系统的法行版本:" + os.release() );

console.log("操作系统的主机名:" + os.hostname() );