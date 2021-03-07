// typeof

//可以识别基本类型以及引用对象类型
function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
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
function getConstructorName(obj) {
    return (obj === undefined || obj === null) ? `${obj}` :
        (obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}

// 不传入第一个参数，那么上下文默认为 window
// 改变了 this 指向，让新的对象可以执行该函数，并能接受参数
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    console.log(arguments)
    const args = [...arguments].slice(1)
    console.log(args)
    const result = context.fn(...args)
    delete context.fn
    return result
}
// 第二个参数是数组
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    // 处理参数和 call 有区别
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

function myInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (true) {
        if (left === null || left === undefined)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}