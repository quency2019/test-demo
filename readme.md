# 类型判断
## typeof

#### 原始类型
* Undefined
* Null ：该类型也只有一个值，即null（小写），null值表示一个空对象指针，所以用typeof操作符检测null值会返回object的原因。
* Boolean
* String
* Number

![typeof](./testdemo/img/typeof.png)
#### 引用类型
* Object
* Arrary
* Date
* RegExp
* Function

![typeof](./testdemo/img/typeof02.png)

## instanceof
能判断引用类型，不能判断原始类型，内部机制是通过原型链来判断的
![typeof](./testdemo/img/instanceof.png)

## Object.prototype.toString.call
可以识别基本类型以及引用对象类型
不能识别自定义对象类型

![typeof](./testdemo/img/Object.prototype.toString.call.png)

## constructor
null或者undefined，没有构造函数

``` javascript
function getConstructorName(obj){
    return (obj===undefined||obj===null)?`${obj}`:        
       (obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}
```

![typeof](./testdemo/img/constructor.png)


# 类型转换
在 JS 中类型转换只有三种情况，分别是：
* 转成布尔值
* 转成字符串
* 转成数字
![typeof](./testdemo/img/type.png)
