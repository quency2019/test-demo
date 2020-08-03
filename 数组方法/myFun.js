
// 目的：数组实例可以调用该方法，要达到循环遍历的作用
// 参数：第一个参数需要一个函数，第二个参数绑定第一个参数的函数this指向,最后实现我们的功能
/**
 *
 * @param cb 参数是一个函数 函数参数 item index arr
 * @constructor
 */
Array.prototype.myForEach=function (cb) {
    //this =》 arr
    var obj=arguments[1]?arguments[1]:window
    for (var i=0;i<this.length;i++) {

            cb.apply(obj,[this[i],i,this])


    }

}

// 目的：数组实例可以调用该方法，要达到循环遍历 过滤出我们想要的结果的作用
// 参数：第一个参数需要一个函数，第二个参数绑定第一个参数的函数this指向,最后实现我们的功能
Array.prototype.myFilter=function (cb){
    var arr=[]
    var obj=arguments[1]||window
    for (var i=0;i<this.length;i++) {

       var result= cb.apply(obj,[this[i],i,this])
        if (result){
            arr.push(this[i])

        }


    }

    return arr

}

// 目的：数组实例可以调用该方法，要达到循环遍历 映射出我们想要的结果的作用
// 参数：第一个参数需要一个函数，第二个参数绑定第一个参数的函数this指向,最后实现我们的功能
Array.prototype.myMap=function (cb){
    var arr=[]
    var obj=arguments[1]||window
    for (var i=0;i<this.length;i++) {

        var result= cb.apply(obj,[this[i],i,this]);

            arr.push(result)

    }

    return arr

}

// 目的：数组实例可以调用该方法，要达到循环遍历 数组中只要有一项是满足要求 的返回 true并跳出循环 作用
// 参数：第一个参数需要一个函数，第二个参数绑定第一个参数的函数this指向,最后实现我们的功能
Array.prototype.mySome=function (cb){
    var obj=arguments[1]||window
    var flag=true
    for (var i=0;i<this.length;i++) {

        var result= cb.apply(obj,[this[i],i,this]);
        if(result){
            break;
        }else {
            flag=false
        }

    }

    return flag

}

// 目的：数组实例可以调用该方法，要达到循环遍历 数组中全部项是满足要求 的返回 true 只要有不满足则跳出循环 返回false 作用
// 参数：第一个参数需要一个函数，第二个参数绑定第一个参数的函数this指向,最后实现我们的功能
Array.prototype.myEvery=function (cb){
    var obj=arguments[1]||window
    var flag=true
    for (var i=0;i<this.length;i++) {

        var result= cb.apply(obj,[this[i],i,this]);

       if(!result){
           flag= false;
           break;
       }

    }

    return flag



}


// 目的：数组实例可以调用该方法，要达到循环遍历
// 参数：第一个参数需要一个函数，第二个参数preValue,最后实现return 的功能
Array.prototype.myReduce=function (cb){
    var preValue=arguments[1]||null

    for (var i=0;i<this.length;i++) {
         preValue= cb(preValue,this[i],i,this);

    }

    return preValue



}

