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
  // 1.创建sql语句
  var sql = `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
  from posts
  inner join users on posts.user_id = users.id
  inner join categories on posts.category_id = categories.id
  where 1=1
    limit ${(params.pagenum - 1) * params.pagesize},${params.pagesize}`
  connection.query(sql, (err, results) => {
    // console.log(results);
    if (err) {
      callback(err)
    } else {
      // 这条语句 可以获取posts表中的总记录数
      sql = 'select count(*) cnt from posts'
      connection.query(sql, (err1, data1) => {
        if (err1) {
          callback(err1)
        } else {
          // 我们又需要返回查询出的数据，又需要返回查询出总记录数
          callback(null, { result: results, total: data1[0].cnt })
          // console.log(callback);
        }
      })
    }
  })
}
exports.getDeleteId = (id, callback) => {
  // 1. 创建sql语句
  let sql = 'delete from posts where id = ' + id
  connection.query(sql, (err,data) => {
    if (err) callback(err)
    callback(null)
  })
}