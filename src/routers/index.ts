import { createRouter, createWebHistory } from "vue-router";

let routes= [
    {path: '/', name: 'home', component: () => import('@/components/home.vue')},
    {path: '/hello', name: 'HelloWorld', component: () => import('@/components/HelloWorld.vue')},
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router
