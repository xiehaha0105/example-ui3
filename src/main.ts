import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from "./routers/index.ts"

import store from "./store"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//使用路由
app.use(router)

app.use(store)

app.use(ElementPlus)

app.mount('#app')
