import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './Views/Home.vue'
import Doc from './Views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Introduce from './components/Introduce.vue'
import Install from './components/Install.vue'
import Start from './components/Start.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path:'/', component: Home},
        {path:'/doc', component: Doc, children:[
            {path:'introduce', component: Introduce},
            {path:'install', component: Install},
            {path:'start', component: Start},
            {path:'switch', component: SwitchDemo},
            {path:'button', component: ButtonDemo},
            {path:'dialog', component: DialogDemo},
            {path:'tabs', component: TabsDemo},
        ]}
    ],
})
router.afterEach(()=>{
    
})