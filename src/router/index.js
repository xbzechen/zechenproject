import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import $store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log($store)
  // $store.commit('user/setIsLogin', true)
  // console.log($store.state.user.isLogin)
  const isLogin = $store.state.user.isLogin
  console.log(isLogin)
  // console.log($store.dispatch('handleLogin'))
  // 判断用户进入的页面是否是登录页
  if (to.name !== 'login') { // 不是登录页
    // 判断用户的登录状态
    if (isLogin) { // 用户已经登录，继续
      console.log('不是登录页，用户登录过')
      next()
    } else { // 用户没有登录，转到登录页
      console.log('不是登录页，用户没有登录')
      next({ name: 'login' })
    }
  } else { // 是登录页
    // 判断用户的登录状态
    if (isLogin) { // 用户已经登录,跳到登录页
      console.log('登录页，用户登录过')
      next({ name: 'home' })
    } else {
      console.log('登录页，用户没有登录过')
      next() // 用户没有登录，在登录页验证身份
    }
  }
})
export default router
