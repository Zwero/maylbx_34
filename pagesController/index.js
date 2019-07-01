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
  getAdminIndexPage(req,res) {
    res.render('admin/index.ejs')
  }
}