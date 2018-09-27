import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootStrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Vuelidate)
Vue.use(BootStrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
