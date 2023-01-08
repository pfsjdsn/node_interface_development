// 单个导出
const mod1 = require('./mod-test')
console.log(mod1.a);
console.log(mod1.b);


// 方法导出
const mod1 = require('./mod-test')
mod1()

// class导出，需要实例化
const mode1 = require('./mod-test')
let p = new mode1('aaaaaaaaaa')
p.show()