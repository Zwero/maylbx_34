// 引入模块
const pagesController = require('../pagesController')
// 引入psots模块
const postsController = require('../pagesController/postsController.js')
const express = require('express')

const router = express.Router()

// 封装路由模块
// 判断前台页面路径
router.get('/', pagesController.getIndexPage)
.get('/list',pagesController.getListpage)
.get('/detail',pagesController.getDetailPage)

// 后台页面
.get('/admin', pagesController.getAdminIndexPage)
  .get('/admin/categories', pagesController.getCategoriesPage)
  .get('/admin/comments', pagesController.getCommentsPage)
  .get('/admin/login', pagesController.getloginPage)
  .get('/admin/nav-menus', pagesController.getNen_menusPage)
  .get('/admin/password-reset', pagesController.getPasswor_resetdPage)
  .get('/admin/post-add', pagesController.getPost_addPage)
  .get('/admin/posts', pagesController.getPostsPage)
  .get('/admin/profile', pagesController.getProfilePage)
  .get('/admin/settings', pagesController.getSettingsPage)
  .get('/admin/slides', pagesController.getSlidesPage)
  .get('/admin/users', pagesController.getUsersPage)

  // 先写后端的
  .get('/getPosts', postsController.getPostsSeverPage)
  .get('/getDeleteId', postsController.getDeleteId)


module.exports = router