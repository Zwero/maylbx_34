// 引入模块
var postsModlu = require('../modlu/postsModlu.js')
var cateModule = require('../modlu/cateModule.js')
var userModule = require('../modlu/userModule.js')

// 向外暴露
module.exports = {
  getPostsSeverPage(req, res) {
    // var obj = req.query
    // 调用方法取得数据库所有文章列表
    postsModlu.getpostsModlu(obj, (err, data) => {

      if (err) {
        res.json({
          code: 400,
          msg: '数据查询失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '数据查询成功',
          data: data
        })
      }
    })
  },
  // 根据每个文章ID删除
  getDeleteId(req, res) {
    // 获取ID
    var id = req.query.id

    // var id = 1
    // 调用modlu模块
    postsModlu.getDeleteId(id, (err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '数据删除失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '数据删除成功',
          data: data
        })
      }
    })
  },
  // 获取所有分类的数据 
  getPostsScreen(req, res) {
    cateModule.getAllCateList( (err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '数据查询失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '数据查询成功',
          data: data
        })
      }
    })
  }
}
