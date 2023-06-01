# vxra

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



配置启动命令+node
1、安装局部或全局nodemon工具
    npm install -g nodemon
    npm install --save-dev nodemon
2、安装concurrently 同时运行多个命令
    npm install concurrently --save-dev
3、修改package.json
    <!-- server/app.js 为后端服务地址 -->
    "nodemon": "nodemon server/app.js",
    <!-- dev1 测试用 -->
    "dev1": "concurrently \"npm run dev\" \" node server/app.js \""
