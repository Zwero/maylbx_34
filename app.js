// 1. 引入模块
// express
const express = require('express')
// 引入路由模块
const router = require('./router')
const ejs = require('ejs')
// 2. 创建对象
const app = express()
// 3. 监视对象
app.listen(3006,()=>{
console.log('http://127.0.0.1:3006');
// 引擎 
app.set('view engine', 'ejs')
app.set('/views','views')
// 4. 添加静态托管
app.use('/assets', express.static('assets'))
app.use('/uploads',express.static('uploads'))
})
// 5. 添加路由配置.
app.use(router)
