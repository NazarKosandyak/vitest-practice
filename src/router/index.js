import HeadOrTail from '../pages/HeadOrTail.vue'
import MainPage from '../pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', component: MainPage },
    { path: '/game', component: HeadOrTail },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })