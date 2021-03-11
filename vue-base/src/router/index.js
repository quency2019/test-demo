import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
let router= new VueRouter({
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

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // document.title = to.matched[0].meta.title
  console.log(to, "to", from);
  // console.log('++++');
  // 必须主动去调用next()方法
  next()
})
// router.beforeEach((to, from, next) => {

//   console.log('to', to.path)
//   if (to.meta.requireLogin) {    // 需要登录
//     if(window.localStorage.token){
//       next()
//     }else if (to.path == '/index'||to.path == '/') {
//       let token = window.localStorage.token;
//       if (token === 'null' || token === '' || token === undefined){
//           next({path: '/my'})
          
//       }
//     } else if (to.path !== '/login'&&to.path !== '/index'&&to.path !== '/') {
//       let token = window.localStorage.token;
//       if (token === 'null' || token === '' || token === undefined){
//           next({path: '/login'})
//           Vue.$toast({ message: '请先登录', duration: 1500 })
//       }
//     }  else {
//       next()
//     }
//   } else {   // 不需要登录
//     next()
//   }
// })

export default router