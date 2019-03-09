import './bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import routes from './router/routes/index';
import { sync } from 'vuex-router-sync';
import StoreData from './store/store';
import 'vuetify/dist/vuetify.min.css';
import AuthMiddleware from './router/middlewares/AuthMiddleware';

window.Vue = Vue;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
    mode: 'history',
    routes
});

const store = new Vuex.Store(StoreData);

sync(store, router);

router.beforeEach((to, from, next) => {
    // if (to.matched.some(record => record.meta.requiresAuth)) {
        return AuthMiddleware(to, from, next, store);
    // }

});

new Vue({
    el: '#app',
    router,
    store
});
