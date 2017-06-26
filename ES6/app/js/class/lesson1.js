//  ES6强制开启严格模式   'use strict'   -- 变量未声明就会报引用错误
//  let 不用重复声明同一个变量

//  const 数值常量不能被修改，且声明时必须赋值
//        对象是引用类型，存储的是指针，指针不变，但是对象的内容会改变  

//function test(){
  // 大括号包起来就是块作用域
  //for(let i=1;i<3;i++){
    //console.log(i);
  //}
  //console.log(i);
  // let a = 1;
  // console.log(a);
  // let a = 2;
//}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();
