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
// 获取服务器中的需求的数据
exports.getpostsModlu = (params, callback) => {
  // sql 语句
  var sql = `SELECT posts.id,posts.title,posts.status,posts.created,users.id,users.nickname,categories.id,categories.name
	FROM posts
	INNER JOIN users on posts.user_id = users.id
  INNER JOIN categories on posts.category_id = categories.id
  limit ${(params.pagenum - 1) * params.pagesize},${params.pagesize}
  `
  // 判断 数据  并返回数据
  connection.query(sql, (err, results) => {
    if (err) callback(err)
    callback(null, results)
  })
}