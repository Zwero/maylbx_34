// 1. 引入模块
// express
const express = require('express')
// 保持状态模块
const session = require('express-session')
// 引入路由模块
const router = require('./router')
// ejs 模板
const ejs = require('ejs')
// 引入body-parser模块
const bodyParser = require('body-parser')

// 2. 创建对象
const app = express()

// 添加body-parser 的配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 3. 监视对象
app.listen(3006, () => {
  console.log('http://127.0.0.1:3006');
})

// 引擎 
app.set('view engine', 'ejs')
app.set('/views', 'views')

// 让app应用使用session
app.use(session({
  // session加密
  secret:'加什么可以吗',
  // 重新保存: 默认为true
  resave: false,
  // 强制' '
  saveUninitialized: false,
}))


// 4. 添加静态托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
// 5. 添加路由配置.

// 每次请求都会经过
app.use(function (req, res, next) {
  if(req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1){
    next()         
  }else {
    res.redirect('/admin/login')
  }
})
app.use(router)
