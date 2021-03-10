import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/page1', component: () => import('../pages/page1.vue'),
      meta: {
        require: true
      }
    },
    {
      path: '/page2', component: () => import('../pages/page2.vue'),
      meta: {
        require: false
      }
    }]

})