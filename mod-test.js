
// 单个导出
exports.a = 1;
exports.b = 2;



/**
 * 模块化导出
 */
module.exports = {
    a: 1,
    b: 2
}
// 方法导出
module.exports = function () {
    console.log(123);
}

// class导出
module.exports = class {
    constructor(name) {
        this.name = name
    }
    show () {
        console.log(this.name);
    }
}