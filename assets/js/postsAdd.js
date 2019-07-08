$(function () {
 // 添加的所有分类
  $.ajax({
    url: '/getPostsScreen',
    dataType: 'json',
    success: function (res) {
      // 生成分类数据的动态结构
      var html = ''
      for (let i = 0; i < res.data.length; i++) {
        html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
      }
      $('#category').html(html)
    }
  })

  // 生成副文本框 覆盖文本框的ID
  CKEDITOR.replace('content')
// 给按钮添加点击事件
  $('.btnSave').on('click', function(a){
    a.preventDefault()
    // 同步数据
    CKEDITOR.instances.content.updateElement()
    $.ajax({
      type:'post',
      url:'/addpost',
      data:$('row').serialize(),
      dataType:'json',
      success:function(res){
      }
    })
  })
  // 文件上传
  $('#feature').on('change',function(){
    // files : 可以获取当前所有被选择的文件对象,他是一个数组,每一个文件都是一个对象
    var myfile = document.querySelector('#feature').files[0]
    // 2. 创建formdata
    var formdata = new FormData()
    // 3. 追加参数
    formdata.append('img',myfile)
    // 发送请求
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data:formdata,
      processData:false,
      contentType:false,
      dataType:'json',
      success:function(res) {
        if(res.code == 200){
          $('[name=feature]').val(res.img)
          // 预览
          $('.thumbnail').attr('src','/uploads/' + res.img).show()
        }else{
          
        }
      }
    })

  })
})