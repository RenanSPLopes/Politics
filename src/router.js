import Vue from 'vue'
import Router from 'vue-router'
import PoliticalParty from './views/PoliticalParty.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'politcalParty',
      component: PoliticalParty
    }
  ]
})
