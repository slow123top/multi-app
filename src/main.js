import Vue from "vue";
import Vuex from 'vuex';
import Router from 'vue-router';
import App from "./App.vue";
import { router } from './route';
import { getLCP, getFID, getCLS } from 'web-vitals';
import "./hy.scss";
getCLS(console.log);
getLCP(console.log);
getFID(console.log);
Vue.use(Vuex);
Vue.use(Router);
new Vue({
    el: "#app",
    // render: h => h(App),
    components: {
        App,
    },
    router
});
