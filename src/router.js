import Vue from 'vue'
import Router from 'vue-router'
import PoliticalParty from './views/PoliticalParty.vue'
import Affiliate from './views/Affiliate.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'politcalParty',
      component: PoliticalParty
    },
    {
      path: '/affiliate',
      name : 'affiliate',
      component : Affiliate
    }
  ]
})
