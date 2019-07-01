// 引入模块
const pagesController = require('../pagesController')
const express = require('express')

const router = express.Router()

// 封装路由模块
// 判断前台页面路径
router.get('/', pagesController.getIndexPage)
.get('/list',pagesController.getListpage)
.get('/detail',pagesController.getDetailPage)

// 后台页面
.get('/admin', pagesController.getAdminIndexPage)


module.exports = router