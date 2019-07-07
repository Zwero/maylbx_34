// 用户登录模块
var userModule = require('../modlu/userModule')

exports.login = (req,res) => {
  var obj = req.body

  userModule.login(obj.email,(err,data) =>{
    if(err) {
      res.json({
        code:400,
        msg:'服务器异常'
      })
    }else {
      if(data){
        if(data.email == obj.email){
          res.json({
            code:200,
            msg:'登录成功'
            })
        }else{
          exports.json({
            code:400,
            msg:'密码输入错误'
          })
        }
      }else {
        res.json({
          code: 400,
          msg:'邮箱输入错误'
        })
      }
    }
  })
}