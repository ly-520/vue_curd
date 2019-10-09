import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import Abouts from '@/components/Abouts'
import Add from '@/components/Add'
import CustomerDetails from '@/components/CustomerDetails'
import Edit from '@/components/Edit'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: "history",   //设置取消路由中的#号
  //base:_dirname,    //she
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'Abouts',
      component: Abouts
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      component: CustomerDetails
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})
