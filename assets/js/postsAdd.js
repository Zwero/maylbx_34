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
})