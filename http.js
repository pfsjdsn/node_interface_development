let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    console.log('我来了');
    // 在页面上写入的内容
    // 写法一
    // res.write('content')
    // res.end()
    // 写法二 简写
    // res.end('content')
    console.log(req.url);
    // 把页面渲染到页面上
    fs.readFile(`./${req.url}`, (err, data) => {
        if (err) {
            // 响应头
            res.writeHead(404)
            res.end('404 not fonund')
        } else {
            res.end(data)
        }
    })
}).listen(8888)