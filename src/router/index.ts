import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const index = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/business',
            name: 'business',
            component: () => import('@/views/BusinessView.vue')
        },
        {
            path: '/crypto',
            name: 'crypto',
            component: () => import('@/views/CryptoView.vue')
        },
        {
            path: '/finance',
            name: 'finance',
            component: () => import('@/views/FinanceView.vue')
        },
        {
            path: '/fun',
            name: 'fun',
            component: () => import('@/views/FunView.vue')
        }
    ]
})

export default index
