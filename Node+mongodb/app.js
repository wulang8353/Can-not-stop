var express = require('express')
var app = express();

var port = process.env.PORT || 3000

// 视图渲染：通过设置页面路径，和文件类型格式，找到匹配路径中的页面进行渲染
app.set('views', './views/pages'); // 设置视图默认的文件路径
app.set('view engine', 'jade'); // 设置视图引擎：jade

app.listen(port)
console.log('start on port' + port) // 开启路由

// 编写主要页面路由
app.get('/', function (req, res) {
  res.render('index', { // 渲染index 首页
      title: 'i_movie 首页'
  });
});

// 详情页
app.get('/moive/:id', function (req, res) {
  res.render('detail', {
      title: 'i_movie 详情页'
  });
});

// 后台管理页面
app.get('/admin/movie', function (req, res) {
  res.render('admin', {
      title: 'i_movie 后台'
  });
});

// 列表页
app.get('/admin/list', function (req, res) {
  res.render('list', {
      title: 'i_movie 列表页'
  });
});
