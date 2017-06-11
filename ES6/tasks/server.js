//  服务器处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动服务器
import args from './util/args'; // 命令行参数

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb(); // 判断是否是监听状态下

  var server = liveserver.new(['--harmony','server/bin/www']); // 创建服务器，当前命令行执行后面的脚本
  server.start();

  // gulp.watch 对文件的监听
  // 前端资源文件处理
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]); // 热更新-通知服务器文件已发生改变
  })

  // 服务器中路由、接口变化，需要服务器重启
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()  // server重启
  });
})
