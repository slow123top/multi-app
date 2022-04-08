import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import "./hy.scss";
Vue.use(Vuex);
new Vue({
    // el: "#app",
    // render: h => h(App),
    components: {
        App,
    },
}).$mount('#app');
