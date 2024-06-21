import { createRouter, createWebHistory } from "vue-router";

let routes= [
    {path: '/', name: 'index', component: () => import('@/views/home/index.vue')},
    {path: '/index', name: 'home', component: () => import('@/views/home/index.vue')},
    {path: '/hello', name: 'HelloWorld', component: () => import('@/views/home/HelloWorld.vue')},
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router
