import './bootstrap';
import Vue from 'vue';
import router from './router/index';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import store from './store/store';
import 'vuetify/dist/vuetify.min.css';

window.Vue = Vue;

Vue.use(Vuetify);

sync(store, router)

new Vue({
    el: '#app',
    router,
    store
});
