import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import plugin from "./plugin/index"

Vue.config.productionTip = false
Vue.use(plugin)
console.log('vue', Vue)


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
