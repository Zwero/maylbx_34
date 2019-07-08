// 用户登录模块
var userModule = require('../modlu/userModule')

exports.login = (req, res) => {
  var obj = req.body
  // 登录由控制器来判断
  userModule.login(obj.email, (err, data) => {
    // console.log(data);
    if (err) {
      res.json({
        code: 400,
        msg: '服务器异常'
      })
    } else {
      if (data) {
        // console.log( '这个是在控制器',data);
        if (data.password == obj.password) {
          req.session.isLogin = 'true'
          // 将当前用户对象存储到session
          req.session.currentUser = data
          ;
          // 将当前成功登录的用户信息进行存储,  后期可以进行获取
          res.json({
            code: 200,
            msg: '登录成功'
          })
        } else {
          res.json({
            code: 400,
            msg: '密码输入错误'
          })
        }
      } else {
        res.json({
          code: 400,
          msg: '邮箱输入错误'
        })
      }
    }
  })
}