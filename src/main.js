import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vx-easyui/dist/themes/default/easyui.css'
import 'font-awesome/css/font-awesome.min.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import EasyUI from 'vx-easyui'

// import 'bootstrap/dist/css/bootstrap.css'
Vue.use(EasyUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
