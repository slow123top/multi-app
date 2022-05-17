import Vue from "vue";
import Vuex from 'vuex';
import Router from 'vue-router';
import App from "./App.vue";
import { router } from './route';
import "./hy.scss";
Vue.use(Vuex);
Vue.use(Router);
new Vue({
    // el: "#app",
    // render: h => h(App),
    components: {
        App,
    },
    router
}).$mount('#app');
