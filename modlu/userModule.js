//1. 引入摸块

const mysql = require('mysql')
// 2. 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13824872114',
  database: 'bailix',
  dateStrings: true
})
// 3. 打开连接
exports.login = (email,callback) => {
  // 准备sql语句
  var sql = `select * from users where email = '${email}'`
  connection.query(sql,(err,result) => {
    if(err){
      callback(err)
    }else{
      callback(null,result[0])
    }
  })
}