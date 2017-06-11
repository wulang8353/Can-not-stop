// 自动将编译好的文件放入server下Public目录中
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; // gulp常用工具集合
import args from './util/args';

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  // 监听原始目录下发生变化
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
