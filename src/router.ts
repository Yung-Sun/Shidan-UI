import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './Views/Home.vue'
import Doc from './Views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'


const history = createWebHashHistory()
const md = (fileName: string) => h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'introduce', component: md("Introduce") },
                { path: 'install', component: md("Install") },
                { path: 'start', component: md("Start") },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ],
})
router.afterEach(() => {

})