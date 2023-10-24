import { createRouter, createWebHistory } from 'vue-router';

import './assets/css/homepage.css'
import './assets/css/utilities.css'
import './assets/css/navbar-log-in.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'

import Home from '@/Home.vue'
import Games from '@/Games.vue'
import Discover from '@/Discover.vue'
import GlobalRank from '@/GlobalRank.vue'
import Rewards from '@/Rewards.vue'

const routes = [
  { path: '/', component: Home, name: '/' },
  { path: '/games', component: Games, name: 'games' },
  { path: '/discover', component: Discover, name: 'discover' },
  { path: '/global-rank', component: GlobalRank, name: 'global-rank' },
  { path: '/rewards', component: Rewards, name: 'rewards' },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.use(AOS.init())
app.mount('#app')