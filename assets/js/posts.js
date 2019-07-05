//  发送ajax 请求, 请求所有文章数据 
// $(function(){
//    $.ajax({
//      type:'get',
//      url:'getPosts',
//      data:{
//        pagenum:1,
//        pagesize:2
//      },
//      datatype:'json',
//      success:function(res) {
//        var html = template('postListTemp',res)
//        $('tbody'),html(html)
//      }
//    })
// })
$(function () {
  // 发起ajax请求，请求所有文章数据
  $.ajax({
    // 方式
    type: 'get',
    // 地址
    url: '/getPosts',
    data: {
      //  设置页面显示的的页数
      pagenum: 1,
      pagesize: 2
    },
    // 数据类型
    dataType: 'json',
    // 服务器的数据渲染到页面
    success: function (res) {
      var html = template('postListTemp', res)
      $('tbody').html(html)
    }
  })
})