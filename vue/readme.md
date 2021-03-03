# vue
## 注入
配置对象中的部分内容内提取到vue实例中：
默认的有
* data
* methods
* computed
* props
* watch
* propsDate(https://cn.vuejs.org/v2/api/#propsData)
![propsDate](img/CE4%U6TJ~AFG9[SMH~NVGVR.png)
该过程称之为注入
**注入的目的有两个：**
* 完成数据响应式  
vue是怎么知道数据被更改了？  
vue2.0是通过`  Object.defineProperty`方法完成了数据响应式，vue3.0是用过`  class proxy{}`完成了数据响应式。
** Object.defineProperty 有局限性 不能感知新添加和删除的属性 等等
** class proxy{} 代理  效率更高
* 绑定 this
## 虚拟dom渲染
为了提高渲染效率，vue会把模版编译称为虚拟DOM树，然后再生成真是的DOM
![过程](img/BY]9)YHMLKT0~JZY9A{WJBG.png)