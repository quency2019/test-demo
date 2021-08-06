
let tool={
    // 继承
    inherit(target,origin){
       let f=function(){};
       f.prototype=origin.prototype;
       target.prototype=new f()
       target.prototype.constructor=target
       
    },
    // 拓展
    expand(origin){
        let target=function(){
            origin.apply(this,arguments)
            return this
        }
        this.inherit(target,origin)

        return target

    },
    // 单例
    single(origin){
        let singleResult=(function(){
            let example;
            return function(){
                if(typeof example==="object"){
                    return example
                }else{
                    origin&&origin.apply(this,arguments)
                    example=this
                }
            }
        })()
        return singleResult
    },
    


}

// 游戏区域大小 td 宽 列数  ，tr 高 列数 ，squareWidth方块大小，positionX、positionY 坐标
let td=30,tr=30,squareWidth=20,positionX=200,positionY=100;
// 蛇的移动时间间隔
let intervalTime=300 

function square(x,y,width,height,dom){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.viewContent=dom||document.createElement("div")
}

// 地
let Ground=tool.single(square)
// 地板
let Floor=tool.expand(square)
// 墙
let Wall=tool.expand(square)




