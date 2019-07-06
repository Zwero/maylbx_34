$(function () {
  // 发起ajax请求，实现分页
  // 当前页面
  var pagenum = 1
  // 每页的记录数
  var pagesize = 2
  // 发现请求, 请求所有文章数据
  init({})
  function init (query) {
    $.ajax({
      // 方式
      type: 'get',
      // 地址
      url: '/getPosts',
      data: {
        //  设置页面显示的的页数
        pagenum: pagenum,
        pagesize: pagesize,
        // 展开运算符：可以将一个对象的具体的属性进行展开，展开为一组一组的键值对
        ...query
      },
      // 数据类型
      dataType: 'json',
      // 服务器的数据渲染到页面
      success: function (res) {
        var html = template('postListTemp', res.data)
        $('tbody').html(html)
        setPage(Math.ceil(res.data.total / pagesize))
      }
    })
  }
 
 // 实现分页
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pagenum,
      // 总页数
      totalPages: count,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function (event, originalEvent, type, page) {
        // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
        pagenum = page
        // 重新获取数据
        init()
      }
    })
  }

})
  