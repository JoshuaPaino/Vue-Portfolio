import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import sourceData from "../constants.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/:id',
      component: () => import('@/views/ProjectShow.vue'),
      name: 'project.show',
      beforeEnter(to, from) {
        const exists = sourceData.projects.find(
          project => project.id === parseInt(to.params.id)
        )
        if (!exists) return {
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
  ]
})

export default router
