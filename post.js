let http = require('http')
// querystring url查询参数的解析
let querystring = require('querystring')
http.createServer((req, res) => {
    let result = []
    // req.on('data',function(data){}) 监听当有一段数据到达的时候，回调函数参数data为每段达到的数据。
    req.on('data', buffer => {
        result.push(buffer)
    })
    // req.on('end',function(){}) 数据全部到达
    req.on('end', () => {
        let data = Buffer.concat(result).toString()
        console.log(querystring.parse(data));
    })
}).listen(8888) 