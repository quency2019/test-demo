# 设置input 的placeholder的字体样式

* 设置input占位符的样式
``` css 
input::-webkit-input-placeholder {    /* Chrome/Opera/Safari */
    color: red;
}
input::-moz-placeholder { /* Firefox 19+ */  
    color: red;
}
input:-ms-input-placeholder { /* IE 10+ */
    color: red;
}
input:-moz-placeholder { /* Firefox 18- */
    color: red;
}
``` 

``` html
<input type="text" placeholder="请设置用户名">
```

* 设置input聚焦时的样式
``` css 
input:focus {   
  background-color: red;
}
``` 

* 取消input的边框
``` css 
input{
  border: none;
  outline: none;
}
``` 

# 单行和多行文本超出省略号
``` css 
// 单行文本出现省略号
    .single {
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
 
// 多行文本出现省略号
   .mutiple {
      display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
      -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
      -webkit-line-clamp: 3; /*行数，超出三行隐藏且多余的用省略号表示...*/
      line-clamp: 3;
      word-break: break-all;
      overflow: hidden;
      max-width: 100%;
    }
``` 
# 定位同时设置方位情况

规律: 绝对定位和固定定位时，同时设置 left 和 right 等同于隐式地设置宽度
``` css
span{
  border:1px solid red;
  position: absolute;
  left:0;
  right:0;
  
   /* 等同于设置  width:100%;display:block */
}
```
# 隐藏滚动条或更改滚动条样式
``` css
.scroll-container {
   width: 500px;
   height: 150px;
   border: 1px solid #ddd;
   padding: 15px;
   overflow: auto;     /*必须*/
 }
 
 .scroll-container::-webkit-scrollbar {
   width: 8px;
   background: white;
 }
 
 .scroll-container::-webkit-scrollbar-corner,
   /* 滚动条角落 */
 .scroll-container::-webkit-scrollbar-thumb,
 .scroll-container::-webkit-scrollbar-track {      /*滚动条的轨道*/
   border-radius: 4px;
 }
 
 .scroll-container::-webkit-scrollbar-corner,
 .scroll-container::-webkit-scrollbar-track {
   /* 滚动条轨道 */
   background-color: rgba(180, 160, 120, 0.1);
   box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
 }
 
 .scroll-container::-webkit-scrollbar-thumb {
   /* 滚动条手柄 */
   background-color: #00adb5;
 }
```

# 纯CSS绘制三角形
``` css
/* 正三角 */
.up-triangle {
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 0 25px 40px 25px;
   border-color: transparent transparent rgb(245, 129, 127) transparent;
 }
 
 /* 倒三角 */
 .down-triangle {
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 40px 25px 0 25px;
   border-color:  rgb(245, 129, 127) transparent transparent transparent;
 }
 div:last-child {
   margin-top: 1rem;
 }
```

# 虚线框绘制技巧
``` css
.dotted-line {
  width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px dashed transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, #ccc .25em, white 0, white .75em);
}
```
# 卡券效果制作
``` css
.coupon {
 width: 300px;
  height: 100px;
  line-height: 100px;
  margin: 50px auto;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent 10px, #ffffff 0) top right /50% 51px no-repeat,
  radial-gradient(circle at left bottom, transparent 10px, #ffffff 0) top left / 50% 51px no-repeat,
  radial-gradient(circle at right top, transparent 10px, #ffffff 0) bottom right / 50% 51px no-repeat,
  radial-gradient(circle at left top, transparent 10px, #ffffff 0) bottom left / 50% 51px no-repeat;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, .2));
}
.coupon span {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  color: red;
  font-size: 50px;
  font-weight: 400;
}
```

# 隐藏文本的常用两种方法
text-indent: -9999px; 或者 font-size: 0;

# 表格边框合并
``` css
table{
  border-collapse: collapse;
}
```