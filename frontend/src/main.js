import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from "@/components/HelloWorld";
import DocsPage from "@/components/DocsPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HelloWorld},
        {path: '/docs', name: 'Docs', component: DocsPage}
    ]

})

createApp(App).mount('#app')
