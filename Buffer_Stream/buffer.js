// 生成一个256字节的Buffer实例
var bytes = new Buffer(256);

for(var i = 0; i < bytes.length; i++){
    bytes[i] = i;
}