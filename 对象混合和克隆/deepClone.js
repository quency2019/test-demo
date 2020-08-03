if (!this.myPlugin) {
    this.myPlugin = {};
}

/**
 *
 * @param obj  克隆的对象
 * @param deep  是否深度克隆 boolean
 */
this.myPlugin.deepClone = function (obj,deep) {

    if(!deep){
        deep=true
    }
    //判断对象是否是数组
    if (Array.isArray(obj)){
        if (deep){
            var newArr=[];
            for (var i = 0; i < obj.length; i++) {
                newArr.push(this.deepClone(obj[i],deep))

            }


        } else {
            //浅克隆
            return [...obj]
        }


    }else if(typeof obj==="object"){
        //判断对象是否是对象
        if (deep){
            var newObj={}
            for (var prop in obj){
                newObj[prop]=this.deepClone(obj[prop],deep)
            }
            return newObj

        } else {
            //浅克隆
            return {...obj}
        }

    }else {
        return obj
    }

}


