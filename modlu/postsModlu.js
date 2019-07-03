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

exports.getpostsModlu = (params, callback) => {
  var sql = `SELECT posts.id,posts.title,posts.status,users.id,users.nickname,categories.id,categories.name
	FROM posts
	INNER JOIN users on posts.user_id = users.id
  INNER JOIN categories on posts.category_id = categories.id
  `
  connection.query(sql, (err, results) => {
    console.log(err);
    if (err) callback(err)
    callback(null, results)
  })
}