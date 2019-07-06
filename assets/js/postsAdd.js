$(function () {
  // 1. 加载所有分类数据
  $.ajax({
    url:'/getPostsScreen',
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
})