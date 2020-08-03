/**
 *
 * @param option 配置对象  默认值{duration:16// 默认间隔时间,total:1000//默认总时间,begin:{}//开始数据,end:{}//结束数据}
 * @constructor
 */
function Animate(option){

    const defaultOption={duration:16,total:1000,begin:{},end:{}}

    this.option={
        ...defaultOption,
        ...option
    }

    this.timer=null//计时器

    this.number=Math.ceil(this.option.total/this.option.duration);//运动总次数;
    this.curNumber=0//当前次数
    //当前状态
    this.curData=myPlugin.deepClone(this.option.begin)
    //所有属性要运动的总距离
    this.distance={};
    //每次运动的距离
    this.everyDistance={}
    for (var prop in this.option.begin){
        this.distance[prop]=this.option.end[prop]-this.option.begin[prop]
        this.everyDistance[prop]=this.distance[prop]/this.number
    }



}

Animate.prototype.start=function () {
    if (this.timer||this.curNumber===this.number) return
    //调用动画开始事件
    this.option.onStart&&this.option.onStart()
    this.timer=setInterval(()=>{
        this.curNumber++;
        for (var prop in this.curData){
            if (this.curNumber===this.number){
                for (var prop in this.curData){
                    this.curData[prop]=this.option.end[prop]
                }
            }else {
                this.curData[prop]=this.curData[prop]+this.everyDistance[prop]
            }

        }
        //调用动画运动事件
        this.option.onMove&&this.option.onMove(this.curData)


        if (this.curNumber===this.number){
            this.stop()
            //调用动画结束事件
            this.option.onOver&&this.option.onOver()
        }

    },this.option.duration)

}
Animate.prototype.stop=function () {
    clearTimeout(this.timer)
    this.timer=null
}


