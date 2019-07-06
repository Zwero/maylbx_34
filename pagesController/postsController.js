// 引入模块
var postsModlu = require('../modlu/postsModlu.js')

// 向外暴露
module.exports = {
  getPostsSeverPage(req,res) {
     obj = req.query
    //  console.log(obj);
// 调用方法取得数据库所有文章列表
    postsModlu.getpostsModlu(obj,(err,data)=>{
      
      if (err) {
        res.json ({
          code:400,
          msg:'数据查询失败'
        })
      } else {
        res.json ({ 
          code:200,
          msg:'数据查询成功',
          data:data
        })
      }
    })
  }
}