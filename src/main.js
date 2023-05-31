import 'bootstrap/dist/css/bootstrap.css'
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import VueScreen from 'vue-screen'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faUserSecret)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      name: 'Blogs',
      path: '/blogs',
      component: () => import('./views/BlogsView.vue')
    },
    {
      name: 'Article',
      path: '/blogs/:id(\\d+)',
      component: () => import('./components/Articles.vue'),
      props: true
    },
    {
      name: 'Not Found',
      path: '/:pathMatch(.*)',
      component: () => import('./views/404.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition){
    return savedPosition || {top: 0}
  }
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueScreen, 'bootstrap').use(router).use(createPinia()).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'