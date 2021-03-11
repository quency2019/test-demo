import Toast from "./toast"
import Loading from "./loading"
const myPlugin = {
    // 因为要用 vue.use 所以要用 install 方法，传入的参数为 vue 实例
    install: function (Vue, options) {
        console.log('tag', options)
        // 1. 添加全局方法或属性
        Vue.prototype.Globaldata = "Global";

        // 逻辑...



        // 注册一个全局自定义指令 `v-focus`
        Vue.directive('focus', {
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        })

        //   全局方法
        Vue.prototype.$toast = (function () {
            let ToastConstructor = Vue.extend(Toast);
            let ToastInstance = new ToastConstructor();
            let div = document.createElement('div');
            ToastInstance.$mount(div);
            document.body.appendChild(ToastInstance.$el);

            return function (msg, duration = 2000) {
                ToastInstance.message = msg;
                ToastInstance.show = true;
                setTimeout(() => {
                    ToastInstance.show = false
                }, duration)
            }

        })()


        // 组件形式
        Vue.component(Loading.name, Loading)


    }
}

export default myPlugin
