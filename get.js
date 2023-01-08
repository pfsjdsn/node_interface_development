let http = require('http')
let url = require('url')
http.createServer((req, res) => {
    console.log(req.url);  // /aaaa?username=admin&password=123
    console.log(url.parse(req.url, true));
    // 获取url和传参，url.parse() 为true 表示 解析更简洁
    let { pathname, query } = url.parse(req.url, true)
    // console.log(pathname, query);
}).listen(8888) 