import { createRouter, createWebHistory } from 'vue-router';

import './assets/css/homepage.css'
import './assets/css/utilities.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'

import Home from '@/Home.vue'

const routes = [
  { path: '/', component: Home, name: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.use(AOS.init())
app.mount('#app')