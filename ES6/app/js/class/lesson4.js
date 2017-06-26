{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);  // 大于0XFFFF的Unicode编码，找不到对应字符

  console.log('s',`\u{20BB7}`);// 使用大括号包裹


}


{
  let s='𠮷';
  console.log('length',s.length); // 四个字节，两个字节算一个长度
  console.log('2',s.charAt(0));   // 对Unicode的值不能很好的处理
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0)); // 自动计算四个字节的码值,且返回10进制数值
  console.log('code0',s1.codePointAt(0).toString(16)); // \u{20BB7}
  console.log('code1',s1.codePointAt(1)); // 取四个字符后两个字节
  console.log('code2',s1.codePointAt(2)); // 97
}

{
  // 接受一个指定的 Unicode 值,然后返回一个字符串
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }

  // 可以识别大于0xFFFF的码点
  for(let code of str){
    console.log('es6',code);
  }
}


{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  // 对日期的一个操作
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  // raw 对斜杠直接进行一个转义
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}

