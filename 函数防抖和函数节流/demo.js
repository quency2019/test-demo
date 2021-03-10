if(!this.myPlugin){
    this.myPlugin={}
}

/**
 * 函数防抖 在一定时间内如果重新触发发了 则重新计时
 */
this.myPlugin.debounce = function (callback, time) {
    var timer;
    return function () {
        clearTimeout(timer)
        timer=setTimeout(()=>{
            callback.apply(null,arguments)
            console.log('arguments', arguments)
        },time)
    }


}

/**
 * 函数节流  在相同时间间隔内 只允许触发一次
 */
this.myPlugin.throttle = function (callback, time, immediately) {


    if (immediately===undefined)
        immediately=true
    if(immediately){
        var t;
        return function () {
            if (!t||Date.now()-t>time){
                // 第一次 获取时间超过time 允许触发事件
                t=Date.now()// 更新t
                callback.apply(null,arguments)//函数运行
                
            }
            console.log('arguments', arguments)



        }
    }else {
        var timer;
        return function () {
            if (timer) return
            timer=setTimeout(()=>{
                callback.apply(null,arguments)//函数运行
                timer = null;//清楚timer
                clearTimeout(timer)
                console.log('arguments', arguments)
            },time)
        }
    }

}
