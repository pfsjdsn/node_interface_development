/**
 * process.env 环境变量
 */
// console.log(process.env);
// if (process.env.dev) {
//     console.log('开发环境');
// } else {
//     console.log('生产环境');
// }


/**
 * process.argv 提供当前 Node.js 进程的有关信息
 */
console.log(process.argv);
// 简易计算功能
let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])
console.log(num1 + num2);