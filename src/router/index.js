import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormBase from '@/components/FormBase.vue'
import EditUser from '@/components/EditUser.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new',
    name: 'form-base',
    component: FormBase
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-user',
    component: EditUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default routes
