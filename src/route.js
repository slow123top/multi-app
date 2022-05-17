import Vue from "vue";
import Router from 'vue-router';
import Page1 from './pages/page1.vue';
import Page2 from './pages/page2.vue';
import Page3 from './pages/page3.vue';
import Page4 from './pages/page4.vue';
// Vue.use(Router)
export const router = new Router({
    routes: [
        {
            name: 'portal',
            path: '/page1',
            title: '页面1',
            // meta: {
            //     title: '用户中心'
            // },
            component: Page1
        },
        {
            name: 'page2',
            path: '/page2',
            title: '页面2',
            component: Page2
        },
        {
            name: 'page3',
            path: '/page3',
            title: '页面3',
            component: Page3
        },
        {
            name: 'page4',
            path: '/page4',
            title: '页面4',
            component: Page4
        }
    ]
});