import {type RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {path: '', redirect: '/login'},
    {path: '/', redirect: '/login'},
    {
        path: '/home',
        name: 'home',
        meta:{
            title: '首页'
        },
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页'
        },
        component: () => import('@/views/login/login.vue')
    },
]

const router = createRouter(({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
}))

export default router
