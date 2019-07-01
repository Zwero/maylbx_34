// 1. 引入模块
// express
const express = require('express')
// 引入fs
const fs = require('fs')
// 2. 创建对象
const app = express()
// 3. 监视对象
app.listen(3000,()=>{
console.log('http://127.0.0.1:3000');
// 4. 添加静态托管
app.use('/assets', express.static('assets'))
app.use('/uploads',express.static('uploads'))
})
// 5. 添加路由配置
app.get('/',(req,res)=>{
  fs.readFile(__dirname +'/views/index.html',(err,data)=>{
    if(err){
      res.end('404')
    }else{
      res.end(data)
    }
  })
})