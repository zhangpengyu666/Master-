/*
 * @Description: 配置文件
 */
// module.exports = {
//   publicPath: "./",
//   devServer: {
//     open: true,// 自动启动浏览器
//     proxy: {
//       "/api": {
//         target: "", // 线上后端地址
//         changeOrigin: true, //允许跨域
//         pathRewrite: {
//           "^/api": "",
//         },
//       },
//     },
//   },
// };
// proxy是代理的意思
// 代理跨域就是在欺骗浏览器 让浏览器认为你访问的还是 同源的localhost：8080 ，但是用代理把地址代理到了需要跨域的地址去了

// 首先第一步把vue.config.js放在项目的根目录下
// 然后重启项目
// 在这里代理的关键字是/api，也就是在之后请求的时候 在路径前拼接/api
// 如果用http 必须要把baseurl删除
