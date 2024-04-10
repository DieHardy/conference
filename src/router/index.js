import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/new-year',
    name: 'newyear',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewYear.vue')
  },
  {
    path: '/happy-birthday',
    name: 'happybirthday',
    component: () => import(/* webpackChunkName: "about" */ '../views/HappyBirthday.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
