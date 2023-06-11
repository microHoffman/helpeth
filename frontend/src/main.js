<<<<<<< HEAD
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DocsPage from './components/DocsPage.vue';
import HelloWorld from './components/HelloWorld.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/docs', component: DocsPage },
        { path: '/', component: HelloWorld }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
=======
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> 46ce03471209d767599641772a1234e47761596d
