/**
 * {
 *   title: "三十而已",
 *   desc: "XXX",
 *   url: "xxx",
 *   bg: ""
 * }
 * 
 * 两块内容，图片 + 条目
 * 
 */

var data = [
    {
        title: "三十而已",
        desc: "话题爽剧！姐姐飒气挑战",
        img: "https://puui.qpic.cn/media_img/lena/PICgthm4a_580_1680/0",
        bg: "rgb(25,117,180)"
    },
    {
        title: "明子·更新",
        desc: "唢呐版《倍爽儿》超嗨",
        img: "https://puui.qpic.cn/media_img/lena/PICvqg2sg_580_1680/0",
        bg: "rgb(1, 9, 30)"
    },
    {
        title: "穿越火线",
        desc: "鹿晗吴磊电竞逐梦",
        img: "https://puui.qpic.cn/media_img/lena/PICjkg0v5_580_1680/0",
        bg: "rgb(0, 0, 0)"
    },
    {
        title: "青春环游记",
        desc: "贾玲爆笑模仿吉娜",
        img: "https://puui.qpic.cn/media_img/lena/PIC1ks92y_580_1680/0",
        bg: "rgb(170, 210, 184)"
    },
    {
        title: "认真的嘎嘎们",
        desc: "56进24",
        img: "https://puui.qpic.cn/vupload/0/1596170042239_fqsodx2hu8.jpg/0",
        bg: "rgb(28, 28, 28)"
    },
    {
        title: "特别有种：致命行动",
        desc: "战狼生死救援",
        img: "https://puui.qpic.cn/media_img/lena/PICoiqm2f_580_1680/0",
        bg: "rgb(105, 77, 56)"
    },
    {
        title: "经典永流传",
        desc: "汪苏泷演绎现代版《桃花扇》",
        img: "https://vfiles.gtimg.cn/vupload/20200801/1f99821596240701848.jpg",
        bg: "rgb(3, 4, 25)"
    },
    {
        title: "舞者",
        desc: "佟丽娅主持春晚只因胆子大",
        img: "https://puui.qpic.cn/vupload/0/1596284169509_0rc2ds8lrh8o.jpg/0",
        bg: "rgb(23,22,17)"
    },
    {
        title: "奔跑吧",
        desc: "凌潇肃沙溢泥潭打滚",
        img: "https://puui.qpic.cn/media_img/lena/PIC0vrw2o_580_1680/0",
        bg: "rgb(178, 195, 211)"
    }
];
var imgs = document.getElementById('imgs');
var list = document.getElementById('list');
var activeImg = null;
var activeItem = null;
var timer = null;

var imgDoms = [];
var itemDoms = [];


for (var i = 0; i < data.length; i++) {
    (function (i) {
        var item = data[i];
        // 图片逻辑
        var tagImg = document.createElement('a');
        imgDoms.push(tagImg);
        tagImg.setAttribute('href', '#');
        tagImg.className = 'img';
        tagImg.style.backgroundImage = 'url(' + item.img + ')';
        tagImg.style.backgroundColor = item.bg;
        if (i !== 0) {
            tagImg.style.display = 'none';
        } else {
            activeImg = tagImg;
        }
        imgs.appendChild(tagImg);
        // 标题逻辑
        var tagItem = document.createElement('a');
        itemDoms.push(tagItem);
        if (i == 0) {
            tagItem.setAttribute('class', 'active');
            activeItem = tagItem;
        } else {
            tagItem.setAttribute('class', 'list-nav');

        }
        tagItem.setAttribute('title', item.title + '：' + item.desc);
        tagItem.innerHTML = "<span>" + item.title + "</span> " + item.desc;
        tagItem.addEventListener('mouseenter', function () {
            clearInterval(timer);
            // 活跃的元素，隐藏或者切换类名
            activeImg.style.display = 'none';
            activeItem.className = 'list-nav';
            // 重新记录新的活跃元素以及图片
            activeItem = tagItem;
            activeImg = tagImg;
            // 活跃元素激活
            activeImg.style.display = 'block';
            activeItem.className = 'active';
        });
        tagItem.addEventListener('mouseleave', function () {
            timer = setInterval(move, 2000);
        });
        list.appendChild(tagItem);
    })(i)
}


// 定时器逻辑
function move() {
    // 活跃的元素，隐藏或者切换类名
    activeImg.style.display = 'none';
    activeItem.className = 'list-nav';
    // 找到接下来的活跃图片和item 
    var index = itemDoms.indexOf(activeItem);
    console.log(index);
    if(index == data.length-1) {
        index = 0;
    } else {
        index ++;
    }
    var tagItem = itemDoms[index];
    var tagImg = imgDoms[index];
    // 重新记录新的活跃元素以及图片
    activeItem = tagItem;
    activeImg = tagImg;
    // 活跃元素激活
    activeImg.style.display = 'block';
    activeItem.className = 'active';
}

timer = setInterval(move, 2000);
