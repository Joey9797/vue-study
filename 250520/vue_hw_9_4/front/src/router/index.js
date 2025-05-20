import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleCreateView from '../views/ArticleCreateView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: ArticleCreateView,
      // beforeEnter: (to, from) => {
      //   const isLoggedIn = !!localStorage.getItem('authToken')
      //   if(!isLoggedIn) {
      //     return { name: 'signin' }
      //   }
      //   else {
      //     return true
      //   }
      // }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
      // beforeEnter: (to, from) => {
      //   const isLoggedIn = !!localStorage.getItem('authToken')
      //   if(isLoggedIn) {
      //     return { name: 'home' }
      //   }
      //   else{
      //     return true
      //   }
      // }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
      // beforeEnter: (to, from) => {
      //   const isLoggedIn = !!localStorage.getItem('authToken')
      //   if(isLoggedIn) {
      //     return { name: 'home' }
      //   } else {
      //     return true
      //   }
      // }
    },

  ]
})

router.beforeEach((to, from) => {
  const isAuthenticated = !!localStorage.getItem('authToken')
  const isAuthPage = to.name === 'signin' || to.name === 'signup'

  if (!isAuthenticated && !isAuthPage) {
    return { name: 'signin' }
  }
})

export default router
