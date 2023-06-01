// 1、引入相关包
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const router = require('./router');
app.use('/api', router);
// 设置允许跨域访问该服务
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "mytoken");
  next();
});

// 图书列表接口
app.get('/api/courses', (req, res) => {
  setTimeout(() => {
      res.json([{name: 'web全栈', price: 9999}, {name: 'web高级', price:8999}])
  }, 1000)
})
// 注册路由模块，让路由模块中的代码能够使用
app.listen(3000, () => {
  console.log("runing http://127.0.0.1:3000");
});