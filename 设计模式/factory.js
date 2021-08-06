

function Factory(){

}


    /**
     * 创建方块的方法
     * @param {*} object 
     * @param {*} color 
     * @param {*} action 
     */
     Factory.prototype.init=function(object, color, action) {
        object.viewContent.style.position = "absolute";
        object.viewContent.style.left = object.x * squareWidth + "px";
        object.viewContent.style.top = object.y * squareWidth + "px";
        object.viewContent.style.width = object.width + "px";
        object.viewContent.style.height = object.height + "px";
        object.viewContent.style.backgroundColor = color;

    }
    // 创建地板方法
    Factory.prototype.Floor=function(x,y,color){
        let floor=new Floor(x,y,squareWidth,squareWidth)
        this.init(floor,color,"Floor")
        return floor

    }
    // 创建围墙方法
    Factory.prototype.Wall=function(x,y,color){
        let wall=new Wall(x,y,squareWidth,squareWidth)
        this.init(wall,color,"Wall")
        return wall

    }



/**
 * 
 * @param {*} type 类型 如 Floor Wall
 * @param {*} x   位置
 * @param {*} y   位置
 * @param {*} color  颜色
 * @returns 
 */
Factory.create=function(type,x,y,color){
    if(typeof Factory.prototype[type]=='undefined'){
        throw 'no this type'
    }
    // 子工厂继承父工厂
    Factory.prototype[type].prototype=new Factory()
    return new Factory.prototype[type](x,y,color)


}



