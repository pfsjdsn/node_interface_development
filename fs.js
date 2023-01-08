let fs = require('fs')

/**
 * 异步操作
 */
// fs读操作
fs.readFile('./fs-test.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})

// fs写操作(覆盖内容)
fs.writeFile('fs-test2.js', '月薪2万', (err) => {
    if (err) {
        throw err
    }
})

// fs写操作(追加内容)a 表示  fs.appendFile
fs.writeFile('fs-test2.js', '月薪3万', { flag: "a" }, (err) => {
    if (err) {
        throw err
    }
})

/**
 * 同步
 */
// fs读操作
let data1 = fs.readFileSync('./fs-test.js')
console.log(data1.toString());
// fs写操作
let data2 = fs.writeFileSync('./fs-test2', '月薪20k')