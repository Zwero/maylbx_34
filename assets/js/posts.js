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
    type: 'get',
    url: '/getPosts',
    data: {
      pagenum: 1,
      pagesize: 2
    },
    dataType: 'json',
    success: function (res) {
      console.log(res)
      var html = template('postListTemp', res)
      $('tbody').html(html)
    }
  })
})