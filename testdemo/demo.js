// typeof

//可以识别基本类型以及引用对象类型
function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}

// 封装的原理：

// obj:假如传入的参数是null或者undefined，没有构造函数直接返回
// obj.constructor如果存在执行&&后面的语句
// obj.constructor.toString()：将类型对应的构造函数转化成字符串 "Function Number(){code...}"
// math(/function\s*([^(]*)/)[1]：匹配构造函数的名称，正则匹配
// 结论：

// 判别基本类型（Undefined/Null除外）
// 判别引用类型
// 判别自定义对象类型
// 结论：所以可以封装一个函数getConstructorName判断所有类型，但是这个函数返回的除了null和undefined是小写之外，其他的首字母都是大写。

//对constructor判别进行方法的封装
function getConstructorName(obj){
    return (obj===undefined||obj===null)?`${obj}`:        
       (obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}