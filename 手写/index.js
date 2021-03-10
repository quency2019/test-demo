// 防抖  在一定时间范围内重新触发 则重新计时 且事件不触发  等待一定时间之后触发
if(!this.Demo){
    this.Demo={}
}

this.Demo.fangdou = (cb, time = 50) => {
    console.log('tag', time)
    let timer

    return function () {

        // 清楚定时器 可以不用判断定时器存不存在
        clearTimeout(timer);
        // console.log('timer', timer)
        timer = setTimeout(() => {
            console.log('tag', arguments)
            cb.apply(null, arguments)
        }, time)

    }

}

this.Demo.jieliu=(cb,time=1000)=>{

    let timer;
    let t=0;
    return function(){
       
        if(!t||Date.now()-t>time){
            t=Date.now()
            console.log('t', t)
            cb.apply(null, arguments)
        }
    }
}

// 返回一个对象
this.Demo.deepClone=(obj)=>{

    

    if(typeof obj==="object"){
        
        var result = obj.constructor == Array ? [] : {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                result[key]=this.Demo.deepClone(element)
                
            }
        }
        return result
    }else{
        return obj
    }


}
this.Demo.deepClone2=(obj)=>JSON.parse(JSON.stringify(obj))
