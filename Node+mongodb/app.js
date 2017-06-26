var express = require('express')
var app = express();

// 引入path模块的作用：因为页面样式的路径放在了bower_components，告诉express，请求页面里所过来的请求中，如果有请求样式或脚本，都让他们去bower_components中去查找
var path =require('path')

var port = process.env.PORT || 3000

// 视图渲染：通过设置页面路径，和文件类型格式，找到匹配路径中的页面进行渲染
app.set('views', './views/pages'); // 设置视图默认的文件路径
app.set('view engine', 'jade'); // 设置视图引擎：jade

var serveStatic = require('serve-static');  // 静态文件处理
app.use(serveStatic('public')); // 路径：public

var bodyParser = require('body-parser');
// 因为后台录入页有提交表单的步骤，故加载此模块方法（bodyParser模块来做文件解析），将表单里的数据进行格式化
app.use(bodyParser.urlencoded({extended: true}));


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
