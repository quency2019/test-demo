import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log(to, "to", from);
  // console.log('++++');
  // 必须主动去调用next()方法
  next()
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
