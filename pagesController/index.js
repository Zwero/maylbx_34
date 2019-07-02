// 引入模块
// const fs = require('fs')
// // 读取前台数据
// module.exports.getIndexPage = (req,res)=>{
//   fs.readFile(--__dirname + "../views/index.html",(err,data)=>{
//     if (err) res.end('404')
//     res.end(data)
//   })
// }
// module.exports.getListpage
module.exports = {
  // 显示index页面
  getIndexPage(req,res) {
    res.render('index')
  },// list页面
  getListpage(req,res) {
    res.render('list')
  },// detail 页面
  getDetailPage(req,res) {
    res.render('detail')
  },

  // 后台页面
  getAdminIndexPage(req,res) {
    res.render('admin/index.ejs')
  },
  getCategoriesPage(req,res) {
    res.render('admin/categories')
  }, getCommentsPage(req, res) {
    res.render('admin/comments')
  }, getloginPage(req, res) {
    res.render('admin/login')
  }, getNen_menusPage(req, res) {
    res.render('admin/nav-menus')
  }, getPasswor_resetdPage(req, res) {
    res.render('admin/password-reset')
  }, getPost_addPage(req, res) {
    res.render('admin/post-add')
  }, getPostsPage(req, res) {
    res.render('admin/posts')
  }, getProfilePage(req, res) {
    res.render('admin/profile')
  }, getSettingsPage(req, res) {
    res.render('admin/settings')
  }, getSlidesPage(req, res) {
    res.render('admin/slides')
  }, getUsersPage(req, res) {
    res.render('admin/users')
  },
}