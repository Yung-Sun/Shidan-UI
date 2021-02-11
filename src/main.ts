import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import xxx from './components/xxx.vue'
import xxx2 from './components/xxx2.vue'


const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path:'/',component: xxx},
        {path:'/xxx',component: xxx2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')


