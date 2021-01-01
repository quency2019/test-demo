/**
 * @param {* 传入的富文本内容} desc 
 */
function setImgUrl(desc){
    var url = 'www.baidu.com';
    var b = /<img [^>]*src=['"]([^'"]+)[^>]*>/g;// img 标签取src里面内容的正则
    var s = desc.match(b);// 取到所有img标签 放到数组 s里面
    for (var i = 0; i < s.length; i++) {
        var srcImg = s[i].replace(b, '$1');//取src面的内容
        if (srcImg.slice(0, 4) == 'http' || srcImg.slice(0, 5) == 'https') {
            //若src前4位置或者前5位是http、https则不做任何修改
            console.log('不做任何修改');
        } else {
            //修改富文本字符串内容 img标签src 相对路径改为绝对路径
            desc = desc.replace(new RegExp(srcImg, 'g'), url + srcImg);
        }
    }
    return desc;
}