// 模板处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 任务- pages
gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs')  // app目录下各个嵌套目录下所有的ejs文件
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})
