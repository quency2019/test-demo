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
let timer=null;
let oList=document.querySelector(".items");
let oImg=document.querySelector(".video-imgs");



let obj={
    itemIndex:0,
    init(imgDom,itemDom) {
        this.imgDom=imgDom;
        this.itemDom=itemDom;
        this.render()

        timer=setInterval(this.move.bind(this),3000)
    },
    render(){
        let str="";
        let imgs="";
        for (let i=0;i<data.length;i++){
            str+=`<a href="#" class="${i===this.itemIndex?'active':'list-nav'}" title="${data[i].title}：${data[i].desc}">
                <span>${data[i].title}</span>
                ${data[i].desc}
            </a>`
            imgs+=` <img class="${i===this.itemIndex?'img-active':'img'}" src="${data[i].img}" /> `;

        }
        this.imgDom.innerHTML=imgs;
        this.itemDom.innerHTML=str;
        this.bindEvent();
    },
    bindEvent(){
        let btns=document.querySelectorAll(".items a");
        for (let j=0;j<btns.length;j++){

            btns[j].addEventListener("mouseover", () =>{
                this.itemIndex=j;
                timer=null;
                clearInterval(timer)
                this.render()
            })
            btns[j].addEventListener("mouseleave",()=> {
                timer=setInterval(this.move.bind(this),3000)
            })
        }

    },
    move(){
        if (this.itemIndex>=data.length-1) {
            this.itemIndex=0;

        }else {
            this.itemIndex++

        }
        this.render()
    }
}
obj.init(oImg,oList)







