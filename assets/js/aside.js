$(function () {
  // 获得router名  
  var href = location.href

  var index = href.indexOf('?')
  var routername = ''
  // 判断
  if (index == -1) { //冒有参数
    routername = href.substring(href.lastIndexOf('/') + 1)
  } else {
    routername = href.substring(href.lastIndexOf('/') + 1, href.indexOf('?'))
  }
  // 要改变的元素
  var menu_posts = $('#menu-posts')
  if (routername == 'post-add' || routername == 'posts' || routername == 'categories') {
    menu_posts.addClass('in').attr('aria-expanded', true)
  }
  var menu_settings = $('#menu-settings')
  if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') {
    menu_settings.attr('aria-expanded', true).addClass('in')
  }
  // 添加 active样式: 排他
  $('li').removeClass('active')
  $('#' + routername).addClass("active")
})
