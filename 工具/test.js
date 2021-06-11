// 获取到滚动条 x y 距离
export function getScroll(){
    // IE 9 以上
    if(window.pageXOffset){
        return {
            x:window.pageXOffset,
            y:window.pageYOffset,
        }
    }else{
        // IE 9以下
        return{
            x:document.scrollLeft+document.documentElement.scrollLeft,
            y:document.scrollTop+document.documentElement.scrollTop,
        }
    }

}
// 获取到可视区窗口的尺寸
export function getViewportOffset(){
    // IE 9 以上
    if(window.innerWidth){
        return {
            width:window.innerWidth,
            height:window.innerHeight,
        }
    }else{
        
        if(document.compatMode=='CSS1Compat'){
            //标准模式
            return {
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight,
            }

        }else if(document.compatMode=='BackCompat'){
            // 怪异模式
            return {
                width:document.body.clientWidth,
                height:document.body.clientHeight,
            }

        }
    }

}
// 静态的方法 查看元素的几何属性  先获取在改变几个属性 属性值不变
export function getBoundingClientRect(doc){
    return doc.getBoundingClientRect()
}

//  offsetWidth 元素宽 offsetHeight 元素高 
// offsetLeft  offsetTop无父定位元素，返回相对文档位置，有父定位元素，相对于父定位元素的坐标

// 得到元素相对于文档的坐标
export function getElementPosition(doc){

    if(!doc.offsetParent.offsetParent){
        return {
            w:doc.offsetLeft,
            h:doc.offsetTop,
        }
        

    }else {
        let obj=getElementPosition(doc.offsetParent)
        console.log(obj)

        return {
            w:doc.offsetLeft+obj.w,
            h:doc.offsetTop+obj.h,
        }
    }

    

}
// 得到元素相对于文档的坐标
export function getStyle(elem,props){

    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[props]
    }else{
        return elem.currentStyle[props]
    }

}