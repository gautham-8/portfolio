import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const TITLE = 'Gautham Mallipeddi'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: `${TITLE} | Software Engineer` },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: `Projects | ${TITLE}` },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: { title: `Skills | ${TITLE}` },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    // Changing filters on /projects or /skills only updates the query; stay in place.
    if (to.path === from.path) return false
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ?? TITLE
})

export default router
