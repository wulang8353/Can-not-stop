// 脚本处理文件
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream'; // 文件流的形式处理
import named from 'vinyl-named';          // 文件重命名
import livereload from 'gulp-livereload'; // 文件修改后，浏览器自动刷新 - 热加载
import plumber from 'gulp-plumber';       // 处理文件信息流
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';         // js、css压缩
import {log,colors} from 'gulp-util';
import args from './util/args';

// gulp任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({   // 错误处理
      errorHandle:function(){

      }
    }))
    .pipe(named())     // 正确执行后重命名
    .pipe(gulpWebpack({// 编译
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))// 编译好未压缩的存储路径
    .pipe(rename({  // 重命名
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))// 指定压缩后的存储路径
    .pipe(gulpif(args.watch,livereload())) // 热加载
})
