let path = require('path')
// path.dirname() 获取当前文件路径
console.log(path.dirname('./node/a/b/c/1.jpg')); // ./node/a/b/c
// path.basename() 获取当前路径中的名字
console.log(path.basename('./node/a/b/c/1.jpg')); // 1.jpg
// path.extname() 获取当前路径中的扩展名
console.log(path.extname('./node/a/b/c/1.jpg')); //.jpg
// 返回当前文件绝对路径
console.log(path.resolve(__dirname, 'index.js')); 