import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem'
import 'vant/lib/index.css'
import VConsole from 'vconsole'  // 导入移动端调试工具

const isDebug = true
if(isDebug) {
  new VConsole()
}

//路由登录拦截
router.beforeEach((to,from,next)=>{
  if(to.path === '/personal'){
    if(localStorage.getItem('islogin')){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
