


//判断是否加载图片，如果加载则加载

export const loadImage = function (imgList,reg) {
    imgList.forEach(div => {
        console.log('div', div.clientHeight)
        const img = div.children[0];

        if (!img.src.match(reg) && getTop(img)< hasheight()+div.clientHeight ) {
            //加载图片
            console.log('tag', img.attributes['temp-src'].value)


            img.src = img.attributes['temp-src'].value;



        }
    });
}


//可以加载区域=当前屏幕高度+滚动条已滚动高度
const hasheight = function () {
    const clientHeight = getClientHeight();

    const top = document.documentElement.scrollTop || document.body.scrollTop;;

    return clientHeight + top;
}
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
    var T = e.offsetTop;
    while (e = e.offsetParent) {
        T += e.offsetTop;
    }
    return T;
}

