$(function () {
  // 获得router名  
  var href = location.href
  console.log(href);

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
  if (routername == 'post-add' || routername == 'posts' || routername == 'categories'){
    menu_posts.addClass('in').attr('aria-expanded', true)
  }
  var menu_settings = $('#menu-settings')
  if (routername == 'nav-menus' || routername == 'slides' ||routername == 'settings') {
    menu_settings.attr('aria-expanded',true)
  }
  // 添加 active样式: 排他
  $('li').removeClass('active')
  $('#'+routername).addClass("active")
})


// // 获取你想操作的dom元素
// var menu_posts = $('#menu-posts')
// // 判断路由名称
// // 如果是：post-add   |   posts   |   categories,就 要为id="menu-posts"来设置添加对应的样式和设置相应的属性
// if (routername == 'post-add' || routername == 'posts' || routername == 'categories') {
//   menu_posts.addClass('in')
//   menu_posts.attr('aria-expanded', true)
// }

// // 设置菜单也需要这个处理
// var menu_settings = $('#menu-settings')
// // 判断路由名称
// // 如果是：post-add   |   posts   |   categories,就 要为id="menu-posts"来设置添加对应的样式和设置相应的属性
// if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') {
//   menu_settings.addClass('in')
//   menu_settings.attr('aria-expanded', true)
// }

// // 添加active样式：排它法
// $('li').removeClass('active')
// $('#' + routername).addClass('active')
// })