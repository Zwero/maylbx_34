$(function(){
  $('.btnlogin').on('click', function () {
    var email = $('[name = "email"]').val()
    var password = $('[name = "password"]').val()

    console.log($('form').serialize() );
    $.ajax({
      type: 'post',
      url: '/login',
      deforSend:function(){
        if (!/\w+[@]\w+/.test(email)){
          $('.alert-danger > span').text('格式不对傻逼')
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
          return false
        }
        if(password.trim().length == 0) {
          $('.alert-danger > span').text('密码不对傻逼')
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
          return false
        }
      },
      data: $('form').serialize(),
      dataType:'json',
      success: function (res) {
        if(res.code == 200) {
          location.href='/admin'
        }else{
          $('.alert-danger > span').text('res.msg')
          $('.alert-danger').fadeIn(500).delay(2000).fadeIn(500)
        }
      }
    })
  })
})
