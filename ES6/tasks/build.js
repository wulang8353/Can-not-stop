import gulp from 'gulp';
// 处理包的顺序问题 server启动前，保证素有文件编译完成
import gulpSequence from 'gulp-sequence'; 

// 先清除 - css - 模板 - js - ['browser','serve']  server一定放在最后执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
