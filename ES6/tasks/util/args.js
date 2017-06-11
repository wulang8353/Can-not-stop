import yargs from 'yargs';  //  处理命令行操作

const args = yargs

	// gulp -production 以下是选项部分

  .option('production',{  // 线上还是开发环境
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{      // 自动刷新
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  .option('verbose',{     // 日志
    boolean:true,
    default:false,
    describe:'log'
  })

  .option('sourcemaps',{   // sourcemaps
    describe:'force the creation of sroucemaps'
  })

  .option('port',{    	   // 端口
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv   // 对输入的命令行内容以字符串形式进行解析

export default args;


