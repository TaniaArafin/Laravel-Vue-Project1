// import Vue from 'vue'
// import Router from 'vue-router'
import HomeVue from '@/components/HomeVue'
import StudentVue from '@/components/StudentVue'
import logIn from '@/components/logIn.vue'
import SignUp from '@/components/SignUp.vue'
import LogOut from '@/components/LogOut.vue'

// Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeVue',
      component: HomeVue
    },
    {
      path: '/student',
      name: 'StudentVue',
      component: StudentVue
    },
    {
      path: '/login',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/logout',
      name: 'LogOut',
      component: LogOut
    }

  ]
})


