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
