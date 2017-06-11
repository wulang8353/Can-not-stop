// 首先执行gulp时第一个找的文件 对ES6的一个处理 
import requireDir from 'require-dir';

// 把所有文件加入进来，默认执行
requireDir('./tasks');
