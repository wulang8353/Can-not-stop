//  块作用域

{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  // 默认值防止未配对成功时的情况
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

{
  // 使用场景1 - 变量的替换
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

{
  // 使用场景2 - 函数返回值直接赋值
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

{
  // 使用场景3 - 数组结构赋值，选择性接受赋值
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

{
  // 使用场景4 - 数组结构赋值，返回值与数组
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b); // 1 [3,4,5]
}

{
  // 对象结构赋值   左右格式堆成  key-value
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

{
  // JSON对象
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
