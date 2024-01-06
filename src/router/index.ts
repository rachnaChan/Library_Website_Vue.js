import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Homepage.vue')
        },
        {
            path: '/book',
            name: 'book',
            component: () => import('../views/Bookpage.vue')
        }
    ]
})

export default router