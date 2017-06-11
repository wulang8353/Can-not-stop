// 修改完拷贝新的同时，清空原目录
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

// 对html css js的删除
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
