import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import store from './store/'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
