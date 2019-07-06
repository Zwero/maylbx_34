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
// 获取所有 分类数据
exports.getAllCateList = (callback) => {
  var sql = 'select * from categories'
  connection.query(sql,(err,results) => {
    console.log(results);
    if (err) callback(err)
    callback(null,results)
  })
}