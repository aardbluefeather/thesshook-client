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
          name: 'Hook',
          path: '',
          component: () => import('@/views/public/Hook'),
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
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/private/Dashboard'),
        },
        {
          name: 'Members',
          path: 'members',
          component: () => import('@/views/private/Members'),
        },
        {
          name: 'Maps+',
          path: 'maps',
          component: () => import('@/views/private/Maps'),
        },
        {
          name: 'Gear',
          path: 'tools/gear',
          component: () => import('@/views/private/Gear'),
        },
        {
          name: 'Scripts',
          path: 'tools/scripts',
          component: () => import('@/views/private/Scripts'),
        },
        {
          name: 'Guides',
          path: 'tools/guides',
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
