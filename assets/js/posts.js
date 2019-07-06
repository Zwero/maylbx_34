$(function () {
  // 发起ajax请求，实现分页
  // 当前页面
  var pagenum = 1
  // 每页的记录数
  var pagesize = 2
  // 发现请求, 请求所有文章数据
  init({})
  function init(query) {
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
  // 用户数据的筛选
  // 实现用户数据的筛选
  $('.btn-search').on('click', function (e) {
    e.preventDefault()
    // 重点是获取用户数据，你也可以使用全局变量
    var query = {}
    // 判断用户有没有选择指定的筛选条件
    if ($('.cateSelector').val() != 'all') {
      query.cate = $('.cateSelector').val()
    }
    if ($('.statuSelector').val() != 'all') {
      query.statu = $('.statuSelector').val()
    }
    // 发起请求
    init(query)
  });
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

  // 删除数据
  $('tbody').on('click', '.btndel', function () {
    if (window.confirm('删了吧')) {
      var id = $(this).data('id')
      console.log('AJAX', id);
      $.ajax({
        type: 'get',
        url: '/getDeleteId',
        data: { id: id },
        success: (res) => {
          if (res.code == 200) {
            init()
          }
        }
      })
    }
  });

  // 自调用函数分类数据的加载
  (function () {
    $.ajax({
      url: '/getPostsScreen',
      type: 'get',
      success: function (res) {
        // 生成数据的动态结构
        var html = '<option value = "all" > 所有分类 </option>'
        for (var i = 0; i < res.data.length; i++) {
          html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
        }
        $('.cateSelector').html(html)
      }
    })
  })()



})
