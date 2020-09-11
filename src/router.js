import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/public'
    },
    {
      path: '/public',
      component: () => import('@/layouts/public/Index'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/public/Home'),
        },
        {
          name: 'Maps',
          path: 'maps',
          component: () => import('@/views/public/Maps'),
        },
        {
          name: 'Mudbin',
          path: 'mudbin',
          component: () => import('@/views/public/Mudbin'),
        },
        {
          name: 'Tools',
          path: 'tools',
          component: () => import('@/views/public/Tools'),
        },
      ],
    },
    {
      path: '/private',
      component: () => import('@/layouts/private/Index'),
      children: [
        // Dashboard
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/private/Home'),
        },
        {
          name: 'Members',
          path: 'members',
          component: () => import('@/views/private/Members'),
        },
        {
          name: 'Maps',
          path: 'maps',
          component: () => import('@/views/private/Maps'),
        },
        {
          name: 'Gear',
          path: 'gear',
          component: () => import('@/views/private/Gear'),
        },
        {
          name: 'Scripts',
          path: 'scripts',
          component: () => import('@/views/private/Scripts'),
        },
        {
          name: 'Guides',
          path: 'guides',
          component: () => import('@/views/private/Guides'),
        },
      ],
    },
    {
      path: '*',
      component: () => import('@/layouts/public/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/public/Error'),
        },
      ],
    },
  ],
})
