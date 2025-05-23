import { createRouter, createWebHistory } from 'vue-router'
import OtherView from '../views/OtherView.vue'
import SomeView from '../views/SomeView.vue'
import StudentView from '../views/StudentView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'some',
      component: SomeView
    },
    {
      path: '/other',
      name: 'other',
      component: OtherView
    },
    {
      path:'/students',
      name: 'students',
      component: StudentView,
    },
    {
      path:'/students/:name',
      name: 'studentsDetail',
      component: StudentDetailView,
    }
  ]
})

export default router
