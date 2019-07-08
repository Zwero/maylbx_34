// 文件上传

var formidable = require('formidable')
var path = require('path')
exports.uploadFile = (req, res) => {
// 用formidable 上传
// 创建文件上传对象
var form = new formidable.IncomingForm()
// 设置类型
  form.encoding = 'utf-8';
// 设置文件上传路径
  form.uploadDir = __dirname+"/../uploads";
  // 设置文件拓展名
  form.keepExtensions = true;
  // 文件上传
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({
        code: 400,
        msg: '文件上传失败'
      })
    } else {
      var filename = path.basename(files.img.path)
      console.log(filename)
      res.json({
        code: 200,
        msg: '文件上传成功',
        img: filename
      })
    }
  })
}