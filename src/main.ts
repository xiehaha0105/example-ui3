import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from "./routers/index.ts"

import store from "./store"

const app = createApp(App)
//使用路由
app.use(router)

app.use(store)

app.mount('#app')
